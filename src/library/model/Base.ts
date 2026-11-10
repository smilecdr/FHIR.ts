import { FhirModelError, ValidationIssue, ValidationIssueCode } from './errors';
import {
  describePrimitiveProblem,
  describeValueKind,
  isPrimitiveTypeCode,
  primitiveJsonType,
} from './primitives';
import type { ConcreteModelClass, TypeRegistry } from './TypeRegistry';

/**
 * One permitted type of an element. Normal elements have exactly one;
 * choice elements (`value[x]`) have one per permitted type.
 */
export interface FieldTypeDefinition {
  /** JSON property name, for example `birthDate` or `valueQuantity`. */
  jsonKey: string;
  /** FHIR primitive type code (`date`) or the registered model class name (`Quantity`, `PatientContact`). */
  typeCode: string;
  /** Codes of the required value set bound to this element, when it could be expanded. */
  allowedCodes?: Readonly<Record<string, string>>;
  /** Resource types a Reference in this element may point at. Absent when any resource is allowed. */
  targetResourceTypes?: readonly string[];
}

/**
 * Definition of one element of a FHIR type, taken from its StructureDefinition.
 */
export interface FieldDefinition {
  /** Element name without the `[x]` suffix, for example `birthDate` or `value`. */
  elementName: string;
  /** Minimum cardinality. 1 or more means the element is required. */
  minimum: number;
  /** Maximum cardinality. `Infinity` stands for `*`. */
  maximum: number;
  /** True when the element repeats and is therefore a JSON array. */
  isList: boolean;
  types: readonly FieldTypeDefinition[];
}

export interface ParseOptions {
  /** Run `validate()` after parsing and throw a FhirModelError when any error is found. */
  validate?: boolean;
  /** Drop JSON properties that are not part of the FHIR type instead of throwing. */
  ignoreUnknownProperties?: boolean;
}

interface ResolvedFieldType {
  fieldDefinition: FieldDefinition;
  fieldType: FieldTypeDefinition;
}

interface ClassFieldIndex {
  /** Inherited fields first, then the fields the class declares itself. */
  fieldDefinitions: readonly FieldDefinition[];
  fieldTypesByJsonKey: ReadonlyMap<string, ResolvedFieldType>;
  fieldDefinitionsByElementName: ReadonlyMap<string, FieldDefinition>;
}

interface ItemProblem {
  code: ValidationIssueCode;
  message: string;
}

type PropertyBag = Record<string, unknown>;

const RESOURCE_TYPE_KEY = 'resourceType';
/** Elements of these types (contained, Bundle.entry.resource) hold whichever resource the JSON names. */
const ABSTRACT_RESOURCE_TYPE_CODES: readonly string[] = ['Resource', 'DomainResource'];
const REFERENCE_TARGET_REGEX =
  /(?:^|\/)([A-Za-z]+)\/[A-Za-z0-9\-.]{1,64}(?:\/_history\/[A-Za-z0-9\-.]{1,64})?$/;
const MAXIMUM_CODES_LISTED_IN_MESSAGE = 12;

const fieldIndexesByModelClass = new WeakMap<object, ClassFieldIndex>();
const allowedCodeSetsByValueSet = new WeakMap<object, ReadonlySet<string>>();

function buildFieldIndex(modelClass: object): ClassFieldIndex {
  const cachedFieldIndex = fieldIndexesByModelClass.get(modelClass);
  if (cachedFieldIndex !== undefined) {
    return cachedFieldIndex;
  }
  const parentClass: object | null = Object.getPrototypeOf(modelClass);
  const inheritedFieldDefinitions =
    parentClass === null || parentClass === Function.prototype
      ? []
      : buildFieldIndex(parentClass).fieldDefinitions;
  const ownFieldDefinitions: readonly FieldDefinition[] = Object.prototype.hasOwnProperty.call(
    modelClass,
    'ownFields'
  )
    ? (modelClass as { ownFields: readonly FieldDefinition[] }).ownFields
    : [];
  const fieldDefinitions = [...inheritedFieldDefinitions, ...ownFieldDefinitions];
  const fieldTypesByJsonKey = new Map<string, ResolvedFieldType>();
  const fieldDefinitionsByElementName = new Map<string, FieldDefinition>();
  for (const fieldDefinition of fieldDefinitions) {
    fieldDefinitionsByElementName.set(fieldDefinition.elementName, fieldDefinition);
    for (const fieldType of fieldDefinition.types) {
      fieldTypesByJsonKey.set(fieldType.jsonKey, { fieldDefinition, fieldType });
    }
  }
  const fieldIndex = { fieldDefinitions, fieldTypesByJsonKey, fieldDefinitionsByElementName };
  fieldIndexesByModelClass.set(modelClass, fieldIndex);
  return fieldIndex;
}

function allowedCodeSet(allowedCodes: Readonly<Record<string, string>>): ReadonlySet<string> {
  let codeSet = allowedCodeSetsByValueSet.get(allowedCodes);
  if (codeSet === undefined) {
    codeSet = new Set(
      Object.keys(allowedCodes).map((codeName) => allowedCodes[codeName] as string)
    );
    allowedCodeSetsByValueSet.set(allowedCodes, codeSet);
  }
  return codeSet;
}

function isMissing(candidateValue: unknown): candidateValue is undefined | null {
  return candidateValue === undefined || candidateValue === null;
}

function isPlainJsonObject(candidateValue: unknown): candidateValue is PropertyBag {
  return (
    typeof candidateValue === 'object' && candidateValue !== null && !Array.isArray(candidateValue)
  );
}

function extensionKeyOf(jsonKey: string): string {
  return `_${jsonKey}`;
}

/**
 * True when a stored value carries content: not undefined or null, not an
 * empty list and not a model element whose fields are all empty.
 */
function isPresent(storedValue: unknown): boolean {
  if (isMissing(storedValue)) {
    return false;
  }
  if (Array.isArray(storedValue)) {
    return storedValue.some(isPresent);
  }
  if (storedValue instanceof Base) {
    return !storedValue.isEmpty();
  }
  return true;
}

/**
 * Root of every FHIR model class. It holds the behaviour shared by all
 * generated classes: JSON parsing and serialisation, emptiness checks,
 * copying, setter-time checks and whole-object validation. All of it is driven
 * by the `ownFields` table each generated class declares.
 */
export abstract class Base {
  /** Elements declared by this class itself, excluding inherited ones. */
  static readonly ownFields: readonly FieldDefinition[] = [];

  /** The FHIR type name, for example `Patient`, `HumanName` or `Patient.contact`. */
  abstract fhirType(): string;

  /** The registry of model classes for the FHIR version this class belongs to. */
  protected abstract typeRegistry(): TypeRegistry;

  /**
   * Builds a model from FHIR JSON. Throws a FhirModelError when the JSON does
   * not have the shape of this type: wrong resourceType, an array where a single
   * value belongs (or the reverse), a value of the wrong JSON type, or a
   * property the type does not define.
   */
  static fromJSON<ModelType extends Base>(
    this: ConcreteModelClass<ModelType>,
    json: unknown,
    parseOptions: ParseOptions = {}
  ): ModelType {
    const model = new this();
    model.populateFromJson(json, model.fhirType(), parseOptions);
    if (parseOptions.validate === true) {
      model.assertValid();
    }
    return model;
  }

  /**
   * FHIR JSON for this model as a plain object. Empty elements are left out.
   * `JSON.stringify(model)` calls this automatically.
   */
  toJSON(): any {
    return this.serialize();
  }

  /** True when no element of this model carries a value. */
  isEmpty(): boolean {
    const properties = this.properties();
    for (const fieldDefinition of this.fieldIndex().fieldDefinitions) {
      for (const fieldType of fieldDefinition.types) {
        if (
          isPresent(properties[fieldType.jsonKey]) ||
          isPresent(properties[extensionKeyOf(fieldType.jsonKey)])
        ) {
          return false;
        }
      }
    }
    return true;
  }

  /** A deep copy of this model. */
  copy(): this {
    const modelClass = this.constructor as ConcreteModelClass<this>;
    const duplicate = new modelClass();
    duplicate.populateFromJson(this.serialize(), this.fhirType(), {
      ignoreUnknownProperties: true,
    });
    return duplicate;
  }

  /**
   * Checks this model and everything below it against the FHIR definition:
   * required elements, cardinality, primitive formats, required code bindings,
   * choice exclusivity, element classes and reference targets.
   * Returns every problem found; an empty list means the model is valid.
   */
  validate(): ValidationIssue[] {
    const validationIssues: ValidationIssue[] = [];
    this.collectValidationIssues(this.fhirType(), validationIssues);
    return validationIssues;
  }

  /** True when `validate()` reports no issue of severity `error`. */
  isValid(): boolean {
    return this.validate().every((validationIssue) => validationIssue.severity !== 'error');
  }

  /** Throws a FhirModelError carrying all issues when `validate()` reports any error. */
  assertValid(): void {
    const validationIssues = this.validate();
    const validationErrors = validationIssues.filter(
      (validationIssue) => validationIssue.severity === 'error'
    );
    const firstValidationError = validationErrors[0];
    if (firstValidationError !== undefined) {
      throw new FhirModelError(
        'invalid-model',
        this.fhirType(),
        `${validationErrors.length} validation error(s). First: ${firstValidationError.path}: ${firstValidationError.message}`,
        validationIssues
      );
    }
  }

  /** Stores a value for a single or repeating element after checking it. Used by generated setters. */
  protected setFieldValue(jsonKey: string, newValue: unknown): this {
    const { fieldDefinition, fieldType } = this.resolveFieldType(jsonKey);
    const fieldPath = `${this.fhirType()}.${jsonKey}`;
    const properties = this.properties();
    if (isMissing(newValue)) {
      delete properties[jsonKey];
      return this;
    }
    if (fieldDefinition.isList) {
      if (!Array.isArray(newValue)) {
        throw new FhirModelError(
          'invalid-type',
          fieldPath,
          `expected an array but received ${describeValueKind(newValue)}`
        );
      }
      this.assertWithinMaximum(fieldDefinition, newValue.length, fieldPath);
      newValue.forEach((listItem, itemIndex) =>
        this.assertAcceptableItem(fieldType, listItem, `${fieldPath}[${itemIndex}]`)
      );
    } else {
      this.assertAcceptableItem(fieldType, newValue, fieldPath);
    }
    this.clearOtherChoiceTypes(fieldDefinition, fieldType);
    properties[jsonKey] = newValue;
    return this;
  }

  /** Appends one item to a repeating element after checking it. Used by generated `addX` methods. */
  protected addFieldValue(jsonKey: string, newItem: unknown): this {
    const { fieldDefinition, fieldType } = this.resolveFieldType(jsonKey);
    const fieldPath = `${this.fhirType()}.${jsonKey}`;
    const properties = this.properties();
    const storedItems = properties[jsonKey];
    const currentItems: unknown[] = Array.isArray(storedItems) ? storedItems : [];
    this.assertWithinMaximum(fieldDefinition, currentItems.length + 1, fieldPath);
    this.assertAcceptableItem(fieldType, newItem, `${fieldPath}[${currentItems.length}]`);
    currentItems.push(newItem);
    properties[jsonKey] = currentItems;
    return this;
  }

  /** True when the element (or its primitive extension) carries content. Used by generated `hasX` methods. */
  protected hasFieldValue(jsonKey: string): boolean {
    const properties = this.properties();
    return isPresent(properties[jsonKey]) || isPresent(properties[extensionKeyOf(jsonKey)]);
  }

  /** The value of a choice element (`value[x]`) whichever type it was set with. */
  protected getChoiceValue<ChoiceValueType>(elementName: string): ChoiceValueType | undefined {
    const properties = this.properties();
    for (const fieldType of this.resolveFieldDefinition(elementName).types) {
      if (isPresent(properties[fieldType.jsonKey])) {
        return properties[fieldType.jsonKey] as ChoiceValueType;
      }
    }
    return undefined;
  }

  /** True when any type of a choice element (`value[x]`) carries content. */
  protected hasChoiceValue(elementName: string): boolean {
    return this.resolveFieldDefinition(elementName).types.some((fieldType) =>
      this.hasFieldValue(fieldType.jsonKey)
    );
  }

  /** Creates an instance of another model class of the same FHIR version by type name. */
  protected createInstance<ModelType extends Base>(typeName: string): ModelType {
    const modelClass = this.typeRegistry().resolve(typeName) as ConcreteModelClass;
    return new modelClass() as ModelType;
  }

  /** Builds the FHIR JSON object. Subclasses expose it through a typed `toJSON()`. */
  protected serialize(): Record<string, any> {
    const properties = this.properties();
    const json: Record<string, any> = {};
    if (typeof properties[RESOURCE_TYPE_KEY] === 'string') {
      json[RESOURCE_TYPE_KEY] = properties[RESOURCE_TYPE_KEY];
    }
    for (const fieldDefinition of this.fieldIndex().fieldDefinitions) {
      for (const fieldType of fieldDefinition.types) {
        const storedValue = properties[fieldType.jsonKey];
        if (isPrimitiveTypeCode(fieldType.typeCode)) {
          this.serializePrimitive(fieldType.jsonKey, storedValue, json);
        } else if (Array.isArray(storedValue)) {
          const serializedItems = storedValue
            .filter(isPresent)
            .map((listItem) => Base.serializeElement(listItem));
          if (serializedItems.length > 0) {
            json[fieldType.jsonKey] = serializedItems;
          }
        } else if (isPresent(storedValue)) {
          json[fieldType.jsonKey] = Base.serializeElement(storedValue);
        }
      }
    }
    return json;
  }

  private static serializeElement(storedElement: unknown): unknown {
    return storedElement instanceof Base ? storedElement.serialize() : storedElement;
  }

  private serializePrimitive(
    jsonKey: string,
    storedValue: unknown,
    json: Record<string, any>
  ): void {
    const extensionKey = extensionKeyOf(jsonKey);
    const storedExtension = this.properties()[extensionKey];
    if (Array.isArray(storedValue)) {
      if (storedValue.length > 0) {
        json[jsonKey] = storedValue.map((listItem) => (isMissing(listItem) ? null : listItem));
      }
    } else if (!isMissing(storedValue)) {
      json[jsonKey] = storedValue;
    }
    if (Array.isArray(storedExtension)) {
      if (storedExtension.some(isPresent)) {
        json[extensionKey] = storedExtension.map((extensionElement) =>
          isPresent(extensionElement) ? Base.serializeElement(extensionElement) : null
        );
      }
    } else if (isPresent(storedExtension)) {
      json[extensionKey] = Base.serializeElement(storedExtension);
    }
  }

  private populateFromJson(json: unknown, path: string, parseOptions: ParseOptions): void {
    if (!isPlainJsonObject(json)) {
      throw new FhirModelError(
        'invalid-type',
        path,
        `expected a JSON object but received ${describeValueKind(json)}`
      );
    }
    const properties = this.properties();
    const unreadKeys = new Set(Object.keys(json));
    const expectedResourceType = properties[RESOURCE_TYPE_KEY];
    if (expectedResourceType !== undefined) {
      if (json[RESOURCE_TYPE_KEY] !== expectedResourceType) {
        throw new FhirModelError(
          'invalid-type',
          `${path}.${RESOURCE_TYPE_KEY}`,
          `expected '${String(expectedResourceType)}' but received '${String(json[RESOURCE_TYPE_KEY])}'`
        );
      }
      unreadKeys.delete(RESOURCE_TYPE_KEY);
    }
    for (const fieldDefinition of this.fieldIndex().fieldDefinitions) {
      for (const fieldType of fieldDefinition.types) {
        const fieldPath = `${path}.${fieldType.jsonKey}`;
        const jsonValue = json[fieldType.jsonKey];
        unreadKeys.delete(fieldType.jsonKey);
        if (isPrimitiveTypeCode(fieldType.typeCode)) {
          const extensionKey = extensionKeyOf(fieldType.jsonKey);
          unreadKeys.delete(extensionKey);
          this.populatePrimitive(fieldDefinition, fieldType, jsonValue, fieldPath);
          this.populatePrimitiveExtension(
            fieldDefinition,
            extensionKey,
            json[extensionKey],
            `${path}.${extensionKey}`,
            parseOptions
          );
        } else if (!isMissing(jsonValue)) {
          properties[fieldType.jsonKey] = this.parseListOrSingle(
            fieldDefinition,
            jsonValue,
            fieldPath,
            (itemJson, itemPath) =>
              this.parseElement(fieldType.typeCode, itemJson, itemPath, parseOptions)
          );
        }
      }
    }
    const firstUnknownKey = unreadKeys.values().next().value;
    if (firstUnknownKey !== undefined && parseOptions.ignoreUnknownProperties !== true) {
      throw new FhirModelError(
        'unknown-property',
        `${path}.${firstUnknownKey}`,
        `${this.fhirType()} has no such element`
      );
    }
  }

  private parseListOrSingle(
    fieldDefinition: FieldDefinition,
    jsonValue: unknown,
    fieldPath: string,
    parseItem: (itemJson: unknown, itemPath: string) => unknown
  ): unknown {
    if (fieldDefinition.isList) {
      if (!Array.isArray(jsonValue)) {
        throw new FhirModelError(
          'invalid-type',
          fieldPath,
          `this element repeats, so an array is expected but ${describeValueKind(jsonValue)} was received`
        );
      }
      return jsonValue.map((itemJson, itemIndex) =>
        parseItem(itemJson, `${fieldPath}[${itemIndex}]`)
      );
    }
    if (Array.isArray(jsonValue)) {
      throw new FhirModelError(
        'invalid-type',
        fieldPath,
        'this element does not repeat, so a single value is expected but an array was received'
      );
    }
    return parseItem(jsonValue, fieldPath);
  }

  private populatePrimitive(
    fieldDefinition: FieldDefinition,
    fieldType: FieldTypeDefinition,
    jsonValue: unknown,
    fieldPath: string
  ): void {
    if (isMissing(jsonValue)) {
      return;
    }
    const expectedJsonType = primitiveJsonType(fieldType.typeCode);
    this.properties()[fieldType.jsonKey] = this.parseListOrSingle(
      fieldDefinition,
      jsonValue,
      fieldPath,
      (itemJson, itemPath) => {
        const isNullListEntry = fieldDefinition.isList && itemJson === null;
        if (!isNullListEntry && typeof itemJson !== expectedJsonType) {
          throw new FhirModelError(
            'invalid-type',
            itemPath,
            `expected a ${expectedJsonType} for FHIR ${fieldType.typeCode} but received ${describeValueKind(itemJson)}`
          );
        }
        return itemJson;
      }
    );
  }

  private populatePrimitiveExtension(
    fieldDefinition: FieldDefinition,
    extensionKey: string,
    extensionJson: unknown,
    extensionPath: string,
    parseOptions: ParseOptions
  ): void {
    if (isMissing(extensionJson)) {
      return;
    }
    this.properties()[extensionKey] = this.parseListOrSingle(
      fieldDefinition,
      extensionJson,
      extensionPath,
      (itemJson, itemPath) =>
        itemJson === null ? null : this.parseElement('Element', itemJson, itemPath, parseOptions)
    );
  }

  private parseElement(
    typeCode: string,
    elementJson: unknown,
    elementPath: string,
    parseOptions: ParseOptions
  ): Base {
    const typeRegistry = this.typeRegistry();
    const holdsAnyResource = ABSTRACT_RESOURCE_TYPE_CODES.includes(typeCode);
    const elementClass =
      holdsAnyResource && isPlainJsonObject(elementJson)
        ? typeRegistry.resolveResource(
            elementJson[RESOURCE_TYPE_KEY],
            `${elementPath}.${RESOURCE_TYPE_KEY}`
          )
        : (typeRegistry.resolve(typeCode) as ConcreteModelClass);
    const element = new elementClass();
    element.populateFromJson(elementJson, elementPath, parseOptions);
    return element;
  }

  private collectValidationIssues(path: string, validationIssues: ValidationIssue[]): void {
    const properties = this.properties();
    const knownKeys = new Set<string>([RESOURCE_TYPE_KEY]);
    for (const fieldDefinition of this.fieldIndex().fieldDefinitions) {
      const isChoice = fieldDefinition.types.length > 1;
      const elementPath = `${path}.${fieldDefinition.elementName}${isChoice ? '[x]' : ''}`;
      const presentTypes = fieldDefinition.types.filter((fieldType) =>
        this.hasFieldValue(fieldType.jsonKey)
      );
      if (presentTypes.length === 0 && fieldDefinition.minimum > 0) {
        validationIssues.push({
          severity: 'error',
          code: 'required',
          path: elementPath,
          message: `required element is missing (minimum cardinality ${fieldDefinition.minimum})`,
        });
      }
      if (presentTypes.length > 1) {
        const presentKeys = presentTypes.map((fieldType) => fieldType.jsonKey).join(', ');
        validationIssues.push({
          severity: 'error',
          code: 'choice-exclusivity',
          path: elementPath,
          message: `only one type may be present but found ${presentKeys}`,
        });
      }
      for (const fieldType of fieldDefinition.types) {
        knownKeys.add(fieldType.jsonKey);
        knownKeys.add(extensionKeyOf(fieldType.jsonKey));
        this.collectFieldIssues(fieldDefinition, fieldType, path, validationIssues);
      }
    }
    for (const propertyName of Object.keys(properties)) {
      if (!knownKeys.has(propertyName) && properties[propertyName] !== undefined) {
        validationIssues.push({
          severity: 'warning',
          code: 'unknown-property',
          path: `${path}.${propertyName}`,
          message: `${this.fhirType()} has no such element; it is ignored when serialising`,
        });
      }
    }
  }

  private collectFieldIssues(
    fieldDefinition: FieldDefinition,
    fieldType: FieldTypeDefinition,
    path: string,
    validationIssues: ValidationIssue[]
  ): void {
    const properties = this.properties();
    const fieldPath = `${path}.${fieldType.jsonKey}`;
    const storedValue = properties[fieldType.jsonKey];
    const storedExtension = properties[extensionKeyOf(fieldType.jsonKey)];
    const isPrimitive = isPrimitiveTypeCode(fieldType.typeCode);

    if (!isMissing(storedValue)) {
      if (Array.isArray(storedValue) !== fieldDefinition.isList) {
        validationIssues.push({
          severity: 'error',
          code: 'invalid-type',
          path: fieldPath,
          message: fieldDefinition.isList
            ? `this element repeats, so an array is expected but ${describeValueKind(storedValue)} was found`
            : 'this element does not repeat, so a single value is expected but an array was found',
        });
        return;
      }
      const storedItems: unknown[] = Array.isArray(storedValue) ? storedValue : [storedValue];
      const presentItemCount = storedItems.filter(isPresent).length;
      if (presentItemCount > fieldDefinition.maximum) {
        validationIssues.push({
          severity: 'error',
          code: 'max-cardinality',
          path: fieldPath,
          message: `at most ${fieldDefinition.maximum} allowed but found ${presentItemCount}`,
        });
      }
      if (presentItemCount > 0 && presentItemCount < fieldDefinition.minimum) {
        validationIssues.push({
          severity: 'error',
          code: 'required',
          path: fieldPath,
          message: `at least ${fieldDefinition.minimum} required but found ${presentItemCount}`,
        });
      }
      storedItems.forEach((storedItem, itemIndex) => {
        const isNullEntryOfPrimitiveList =
          isPrimitive && fieldDefinition.isList && storedItem === null;
        if (isNullEntryOfPrimitiveList) {
          return;
        }
        const itemPath = fieldDefinition.isList ? `${fieldPath}[${itemIndex}]` : fieldPath;
        const itemProblem = this.describeItemProblem(fieldType, storedItem);
        if (itemProblem !== undefined) {
          validationIssues.push({ severity: 'error', path: itemPath, ...itemProblem });
        }
        if (storedItem instanceof Base) {
          storedItem.collectValidationIssues(itemPath, validationIssues);
        }
      });
    }

    if (isPrimitive && !isMissing(storedExtension)) {
      const extensionPath = `${path}.${extensionKeyOf(fieldType.jsonKey)}`;
      const extensionElements: unknown[] = Array.isArray(storedExtension)
        ? storedExtension
        : [storedExtension];
      extensionElements.forEach((extensionElement, elementIndex) => {
        if (extensionElement instanceof Base) {
          const extensionElementPath = Array.isArray(storedExtension)
            ? `${extensionPath}[${elementIndex}]`
            : extensionPath;
          extensionElement.collectValidationIssues(extensionElementPath, validationIssues);
        }
      });
    }
  }

  /** Checks one value against its element definition without descending into it. */
  private describeItemProblem(
    fieldType: FieldTypeDefinition,
    candidateItem: unknown
  ): ItemProblem | undefined {
    if (isPrimitiveTypeCode(fieldType.typeCode)) {
      const primitiveProblem = describePrimitiveProblem(fieldType.typeCode, candidateItem);
      if (primitiveProblem !== undefined) {
        return { code: 'invalid-primitive', message: primitiveProblem };
      }
      if (
        fieldType.allowedCodes !== undefined &&
        !allowedCodeSet(fieldType.allowedCodes).has(candidateItem as string)
      ) {
        return {
          code: 'invalid-code',
          message: `'${String(candidateItem)}' is not in the required value set (${this.listAllowedCodes(fieldType.allowedCodes)})`,
        };
      }
      return undefined;
    }
    const typeRegistry = this.typeRegistry();
    const expectedClass = typeRegistry.resolve(fieldType.typeCode);
    if (!(candidateItem instanceof expectedClass)) {
      return {
        code: 'invalid-type',
        message: `expected an instance of ${fieldType.typeCode} but received ${describeValueKind(candidateItem)}. Plain JSON can be converted with fromJSON()`,
      };
    }
    if (fieldType.targetResourceTypes !== undefined) {
      const targetProblem = this.describeReferenceTargetProblem(
        candidateItem,
        fieldType.targetResourceTypes
      );
      if (targetProblem !== undefined) {
        return { code: 'invalid-reference-target', message: targetProblem };
      }
    }
    return undefined;
  }

  private listAllowedCodes(allowedCodes: Readonly<Record<string, string>>): string {
    const sortedCodes = Array.from(allowedCodeSet(allowedCodes)).sort();
    const listedCodes = sortedCodes.slice(0, MAXIMUM_CODES_LISTED_IN_MESSAGE).join(', ');
    const unlistedCodeCount = sortedCodes.length - MAXIMUM_CODES_LISTED_IN_MESSAGE;
    return unlistedCodeCount > 0 ? `${listedCodes} and ${unlistedCodeCount} more` : listedCodes;
  }

  private describeReferenceTargetProblem(
    referenceElement: Base,
    targetResourceTypes: readonly string[]
  ): string | undefined {
    const typeRegistry = this.typeRegistry();
    const referenceProperties = referenceElement.properties();
    const referencedResourceTypes: string[] = [];
    const referenceText = referenceProperties['reference'];
    if (typeof referenceText === 'string') {
      const referenceMatch = REFERENCE_TARGET_REGEX.exec(referenceText);
      if (referenceMatch !== null && referenceMatch[1] !== undefined) {
        referencedResourceTypes.push(referenceMatch[1]);
      }
    }
    const declaredType = referenceProperties['type'];
    if (typeof declaredType === 'string') {
      referencedResourceTypes.push(declaredType.slice(declaredType.lastIndexOf('/') + 1));
    }
    const disallowedResourceType = referencedResourceTypes.find(
      (referencedResourceType) =>
        typeRegistry.isResourceType(referencedResourceType) &&
        !targetResourceTypes.includes(referencedResourceType)
    );
    if (disallowedResourceType === undefined) {
      return undefined;
    }
    return `a reference to ${disallowedResourceType} is not allowed here (allowed: ${targetResourceTypes.join(', ')})`;
  }

  private assertAcceptableItem(
    fieldType: FieldTypeDefinition,
    candidateItem: unknown,
    itemPath: string
  ): void {
    const itemProblem = this.describeItemProblem(fieldType, candidateItem);
    if (itemProblem !== undefined) {
      throw new FhirModelError(itemProblem.code, itemPath, itemProblem.message);
    }
  }

  private assertWithinMaximum(
    fieldDefinition: FieldDefinition,
    itemCount: number,
    fieldPath: string
  ): void {
    if (itemCount > fieldDefinition.maximum) {
      throw new FhirModelError(
        'max-cardinality',
        fieldPath,
        `at most ${fieldDefinition.maximum} allowed but ${itemCount} were given`
      );
    }
  }

  /** A choice element holds one type at a time, so setting one type removes the others. */
  private clearOtherChoiceTypes(
    fieldDefinition: FieldDefinition,
    keptFieldType: FieldTypeDefinition
  ): void {
    const properties = this.properties();
    for (const fieldType of fieldDefinition.types) {
      if (fieldType !== keptFieldType) {
        delete properties[fieldType.jsonKey];
        delete properties[extensionKeyOf(fieldType.jsonKey)];
      }
    }
  }

  private resolveFieldType(jsonKey: string): ResolvedFieldType {
    const resolvedFieldType = this.fieldIndex().fieldTypesByJsonKey.get(jsonKey);
    if (resolvedFieldType === undefined) {
      throw new FhirModelError('unknown-field', `${this.fhirType()}.${jsonKey}`, 'no such element');
    }
    return resolvedFieldType;
  }

  private resolveFieldDefinition(elementName: string): FieldDefinition {
    const fieldDefinition = this.fieldIndex().fieldDefinitionsByElementName.get(elementName);
    if (fieldDefinition === undefined) {
      throw new FhirModelError(
        'unknown-field',
        `${this.fhirType()}.${elementName}`,
        'no such element'
      );
    }
    return fieldDefinition;
  }

  private fieldIndex(): ClassFieldIndex {
    return buildFieldIndex(this.constructor);
  }

  private properties(): PropertyBag {
    return this as unknown as PropertyBag;
  }
}
