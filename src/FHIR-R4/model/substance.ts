/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Quantity } from './quantity';
import { Ratio } from './ratio';
import { Reference } from './reference';

/**
 * A homogeneous material with a definite composition.
 */
export class Substance extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'status',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.FHIRSubstanceStatus },
      ],
    },
    {
      elementName: 'category',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'instance',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'instance', typeCode: 'SubstanceInstance' }],
    },
    {
      elementName: 'ingredient',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'ingredient', typeCode: 'SubstanceIngredient' }],
    },
  ];

  readonly resourceType = 'Substance';

  /** Unique identifier (0..*) */
  identifier?: Identifier[];

  /** active | inactive | entered-in-error (0..1) */
  status?: valueSetCodes.FHIRSubstanceStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** What class/type of substance this is (0..*) */
  category?: CodeableConcept[];

  /** What substance this is (1..1) */
  code?: CodeableConcept;

  /** Textual description of the substance, comments (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** If this describes a specific package/container of the substance (0..*) */
  instance?: SubstanceInstance[];

  /** Composition information about the substance (0..*) */
  ingredient?: SubstanceIngredient[];

  override fhirType(): string {
    return 'Substance';
  }

  /** FHIR JSON for this Substance, typed as the plain `Substance` data type. */
  override toJSON(): plainTypes.Substance {
    return this.serialize() as plainTypes.Substance;
  }

  /** Unique identifier (0..*) Never undefined; an empty list is created when absent. */
  getIdentifier(): Identifier[] {
    if (this.identifier === undefined) {
      this.identifier = [];
    }
    return this.identifier;
  }

  setIdentifier(identifier: Identifier[] | undefined): this {
    return this.setFieldValue('identifier', identifier);
  }

  hasIdentifier(): boolean {
    return this.hasFieldValue('identifier');
  }

  /** Appends a new, empty Identifier to `identifier` and returns it so it can be filled in. */
  addIdentifier(): Identifier;
  /** Appends the given Identifier to `identifier` and returns this object for chaining. */
  addIdentifier(identifier: Identifier): this;
  addIdentifier(identifier?: Identifier): Identifier | this {
    if (identifier !== undefined) {
      return this.addFieldValue('identifier', identifier);
    }
    const createdIdentifier = new Identifier();
    this.addFieldValue('identifier', createdIdentifier);
    return createdIdentifier;
  }

  /** The first Identifier of `identifier`. One is added when the list is empty. */
  getIdentifierFirstRep(): Identifier {
    const firstIdentifier = this.getIdentifier()[0];
    return firstIdentifier === undefined ? this.addIdentifier() : firstIdentifier;
  }

  /** active | inactive | entered-in-error (0..1) */
  getStatus(): valueSetCodes.FHIRSubstanceStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.FHIRSubstanceStatus | undefined): this {
    return this.setFieldValue('status', status);
  }

  hasStatus(): boolean {
    return this.hasFieldValue('status');
  }

  /** The element carrying the id and extensions of `status`. Created when absent. */
  getStatusElement(): Element {
    if (this._status === undefined) {
      this._status = new Element();
    }
    return this._status;
  }

  setStatusElement(statusElement: Element | undefined): this {
    this._status = statusElement;
    return this;
  }

  /** What class/type of substance this is (0..*) Never undefined; an empty list is created when absent. */
  getCategory(): CodeableConcept[] {
    if (this.category === undefined) {
      this.category = [];
    }
    return this.category;
  }

  setCategory(category: CodeableConcept[] | undefined): this {
    return this.setFieldValue('category', category);
  }

  hasCategory(): boolean {
    return this.hasFieldValue('category');
  }

  /** Appends a new, empty CodeableConcept to `category` and returns it so it can be filled in. */
  addCategory(): CodeableConcept;
  /** Appends the given CodeableConcept to `category` and returns this object for chaining. */
  addCategory(codeableConcept: CodeableConcept): this;
  addCategory(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('category', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('category', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `category`. One is added when the list is empty. */
  getCategoryFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getCategory()[0];
    return firstCodeableConcept === undefined ? this.addCategory() : firstCodeableConcept;
  }

  /** What substance this is (1..1) Created when absent. */
  getCode(): CodeableConcept {
    if (this.code === undefined) {
      this.code = new CodeableConcept();
    }
    return this.code;
  }

  setCode(code: CodeableConcept | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** Textual description of the substance, comments (0..1) */
  getDescription(): string | undefined {
    return this.description;
  }

  /** Sets `description`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDescription(description: string | undefined): this {
    return this.setFieldValue('description', description);
  }

  hasDescription(): boolean {
    return this.hasFieldValue('description');
  }

  /** The element carrying the id and extensions of `description`. Created when absent. */
  getDescriptionElement(): Element {
    if (this._description === undefined) {
      this._description = new Element();
    }
    return this._description;
  }

  setDescriptionElement(descriptionElement: Element | undefined): this {
    this._description = descriptionElement;
    return this;
  }

  /** If this describes a specific package/container of the substance (0..*) Never undefined; an empty list is created when absent. */
  getInstance(): SubstanceInstance[] {
    if (this.instance === undefined) {
      this.instance = [];
    }
    return this.instance;
  }

  setInstance(instance: SubstanceInstance[] | undefined): this {
    return this.setFieldValue('instance', instance);
  }

  hasInstance(): boolean {
    return this.hasFieldValue('instance');
  }

  /** Appends a new, empty SubstanceInstance to `instance` and returns it so it can be filled in. */
  addInstance(): SubstanceInstance;
  /** Appends the given SubstanceInstance to `instance` and returns this object for chaining. */
  addInstance(substanceInstance: SubstanceInstance): this;
  addInstance(substanceInstance?: SubstanceInstance): SubstanceInstance | this {
    if (substanceInstance !== undefined) {
      return this.addFieldValue('instance', substanceInstance);
    }
    const createdSubstanceInstance = new SubstanceInstance();
    this.addFieldValue('instance', createdSubstanceInstance);
    return createdSubstanceInstance;
  }

  /** The first SubstanceInstance of `instance`. One is added when the list is empty. */
  getInstanceFirstRep(): SubstanceInstance {
    const firstSubstanceInstance = this.getInstance()[0];
    return firstSubstanceInstance === undefined ? this.addInstance() : firstSubstanceInstance;
  }

  /** Composition information about the substance (0..*) Never undefined; an empty list is created when absent. */
  getIngredient(): SubstanceIngredient[] {
    if (this.ingredient === undefined) {
      this.ingredient = [];
    }
    return this.ingredient;
  }

  setIngredient(ingredient: SubstanceIngredient[] | undefined): this {
    return this.setFieldValue('ingredient', ingredient);
  }

  hasIngredient(): boolean {
    return this.hasFieldValue('ingredient');
  }

  /** Appends a new, empty SubstanceIngredient to `ingredient` and returns it so it can be filled in. */
  addIngredient(): SubstanceIngredient;
  /** Appends the given SubstanceIngredient to `ingredient` and returns this object for chaining. */
  addIngredient(substanceIngredient: SubstanceIngredient): this;
  addIngredient(substanceIngredient?: SubstanceIngredient): SubstanceIngredient | this {
    if (substanceIngredient !== undefined) {
      return this.addFieldValue('ingredient', substanceIngredient);
    }
    const createdSubstanceIngredient = new SubstanceIngredient();
    this.addFieldValue('ingredient', createdSubstanceIngredient);
    return createdSubstanceIngredient;
  }

  /** The first SubstanceIngredient of `ingredient`. One is added when the list is empty. */
  getIngredientFirstRep(): SubstanceIngredient {
    const firstSubstanceIngredient = this.getIngredient()[0];
    return firstSubstanceIngredient === undefined ? this.addIngredient() : firstSubstanceIngredient;
  }
}

modelTypeRegistry.register('Substance', Substance, true);

/** True when the value is a Substance model instance. */
export function isSubstance(candidate: unknown): candidate is Substance {
  return candidate instanceof Substance;
}

/**
 * If this describes a specific package/container of the substance
 */
export class SubstanceInstance extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'expiry',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'expiry', typeCode: 'dateTime' }],
    },
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
  ];

  /** Identifier of the package/container (0..1) */
  identifier?: Identifier;

  /** When no longer valid to use (0..1) */
  expiry?: string;
  /** Id and extensions of the primitive `expiry`. */
  _expiry?: Element;

  /** Amount of substance in the package (0..1) */
  quantity?: Quantity;

  override fhirType(): string {
    return 'Substance.instance';
  }

  /** FHIR JSON for this SubstanceInstance, typed as the plain `SubstanceInstance` data type. */
  override toJSON(): plainTypes.SubstanceInstance {
    return this.serialize() as plainTypes.SubstanceInstance;
  }

  /** Identifier of the package/container (0..1) Created when absent. */
  getIdentifier(): Identifier {
    if (this.identifier === undefined) {
      this.identifier = new Identifier();
    }
    return this.identifier;
  }

  setIdentifier(identifier: Identifier | undefined): this {
    return this.setFieldValue('identifier', identifier);
  }

  hasIdentifier(): boolean {
    return this.hasFieldValue('identifier');
  }

  /** When no longer valid to use (0..1) */
  getExpiry(): string | undefined {
    return this.expiry;
  }

  /** Sets `expiry`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setExpiry(expiry: string | undefined): this {
    return this.setFieldValue('expiry', expiry);
  }

  hasExpiry(): boolean {
    return this.hasFieldValue('expiry');
  }

  /** The element carrying the id and extensions of `expiry`. Created when absent. */
  getExpiryElement(): Element {
    if (this._expiry === undefined) {
      this._expiry = new Element();
    }
    return this._expiry;
  }

  setExpiryElement(expiryElement: Element | undefined): this {
    this._expiry = expiryElement;
    return this;
  }

  /** Amount of substance in the package (0..1) Created when absent. */
  getQuantity(): Quantity {
    if (this.quantity === undefined) {
      this.quantity = new Quantity();
    }
    return this.quantity;
  }

  setQuantity(quantity: Quantity | undefined): this {
    return this.setFieldValue('quantity', quantity);
  }

  hasQuantity(): boolean {
    return this.hasFieldValue('quantity');
  }
}

modelTypeRegistry.register('SubstanceInstance', SubstanceInstance, false);

/**
 * Composition information about the substance
 */
export class SubstanceIngredient extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Ratio' }],
    },
    {
      elementName: 'substance',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'substanceCodeableConcept', typeCode: 'CodeableConcept' },
        {
          jsonKey: 'substanceReference',
          typeCode: 'Reference',
          targetResourceTypes: ['Substance'],
        },
      ],
    },
  ];

  /** Optional amount (concentration) (0..1) */
  quantity?: Ratio;

  /** A component of the substance (1..1) */
  substanceCodeableConcept?: CodeableConcept;
  /** A component of the substance (1..1) */
  substanceReference?: Reference;

  override fhirType(): string {
    return 'Substance.ingredient';
  }

  /** FHIR JSON for this SubstanceIngredient, typed as the plain `SubstanceIngredient` data type. */
  override toJSON(): plainTypes.SubstanceIngredient {
    return this.serialize() as plainTypes.SubstanceIngredient;
  }

  /** Optional amount (concentration) (0..1) Created when absent. */
  getQuantity(): Ratio {
    if (this.quantity === undefined) {
      this.quantity = new Ratio();
    }
    return this.quantity;
  }

  setQuantity(quantity: Ratio | undefined): this {
    return this.setFieldValue('quantity', quantity);
  }

  hasQuantity(): boolean {
    return this.hasFieldValue('quantity');
  }

  /** A component of the substance (1..1) Whichever type of `substance[x]` is set. */
  getSubstance(): CodeableConcept | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | Reference>('substance');
  }

  /** True when any type of `substance[x]` is set. */
  hasSubstance(): boolean {
    return this.hasChoiceValue('substance');
  }

  getSubstanceCodeableConcept(): CodeableConcept | undefined {
    return this.substanceCodeableConcept;
  }

  /** Sets `substance[x]` as CodeableConcept and clears every other type of it. */
  setSubstanceCodeableConcept(substanceCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('substanceCodeableConcept', substanceCodeableConcept);
  }

  hasSubstanceCodeableConcept(): boolean {
    return this.hasFieldValue('substanceCodeableConcept');
  }

  getSubstanceReference(): Reference | undefined {
    return this.substanceReference;
  }

  /** Sets `substance[x]` as Reference and clears every other type of it. */
  setSubstanceReference(substanceReference: Reference | undefined): this {
    return this.setFieldValue('substanceReference', substanceReference);
  }

  hasSubstanceReference(): boolean {
    return this.hasFieldValue('substanceReference');
  }
}

modelTypeRegistry.register('SubstanceIngredient', SubstanceIngredient, false);
