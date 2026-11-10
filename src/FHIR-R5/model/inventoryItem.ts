/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { Address } from './address';
import { Annotation } from './annotation';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { Coding } from './coding';
import { DomainResource } from './domainResource';
import { Duration } from './duration';
import { Element } from './element';
import { Identifier } from './identifier';
import { Quantity } from './quantity';
import { Range } from './range';
import { Ratio } from './ratio';
import { Reference } from './reference';

/**
 * functional description of an inventory item used in inventory and supply-related workflows.
 */
export class InventoryItem extends DomainResource {
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
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'status',
          typeCode: 'code',
          allowedCodes: valueSetCodes.InventoryItemStatusCodes,
        },
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
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'name', typeCode: 'InventoryItemName' }],
    },
    {
      elementName: 'responsibleOrganization',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'responsibleOrganization', typeCode: 'InventoryItemResponsibleOrganization' },
      ],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'InventoryItemDescription' }],
    },
    {
      elementName: 'inventoryStatus',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'inventoryStatus', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'baseUnit',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'baseUnit', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'netContent',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'netContent', typeCode: 'Quantity' }],
    },
    {
      elementName: 'association',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'association', typeCode: 'InventoryItemAssociation' }],
    },
    {
      elementName: 'characteristic',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'characteristic', typeCode: 'InventoryItemCharacteristic' }],
    },
    {
      elementName: 'instance',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'instance', typeCode: 'InventoryItemInstance' }],
    },
    {
      elementName: 'productReference',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'productReference',
          typeCode: 'Reference',
          targetResourceTypes: [
            'BiologicallyDerivedProduct',
            'Device',
            'Medication',
            'NutritionProduct',
          ],
        },
      ],
    },
  ];

  readonly resourceType = 'InventoryItem';

  /** Business identifier for the inventory item (0..*) */
  identifier?: Identifier[];

  /** active | inactive | entered-in-error | unknown (1..1) */
  status?: valueSetCodes.InventoryItemStatusCodes;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Category or class of the item (0..*) */
  category?: CodeableConcept[];

  /** Code designating the specific type of item (0..*) */
  code?: CodeableConcept[];

  /** The item name(s) - the brand name, or common name, functional name, generic name or others (0..*) */
  name?: InventoryItemName[];

  /** Organization(s) responsible for the product (0..*) */
  responsibleOrganization?: InventoryItemResponsibleOrganization[];

  /** Descriptive characteristics of the item (0..1) */
  description?: InventoryItemDescription;

  /** The usage status like recalled, in use, discarded (0..*) */
  inventoryStatus?: CodeableConcept[];

  /** The base unit of measure - the unit in which the product is used or counted (0..1) */
  baseUnit?: CodeableConcept;

  /** Net content or amount present in the item (0..1) */
  netContent?: Quantity;

  /** Association with other items or products (0..*) */
  association?: InventoryItemAssociation[];

  /** Characteristic of the item (0..*) */
  characteristic?: InventoryItemCharacteristic[];

  /** Instances or occurrences of the product (0..1) */
  instance?: InventoryItemInstance;

  /** Link to a product resource used in clinical workflows (0..1) */
  productReference?: Reference;

  override fhirType(): string {
    return 'InventoryItem';
  }

  /** FHIR JSON for this InventoryItem, typed as the plain `InventoryItem` data type. */
  override toJSON(): plainTypes.InventoryItem {
    return this.serialize() as plainTypes.InventoryItem;
  }

  /** Business identifier for the inventory item (0..*) Never undefined; an empty list is created when absent. */
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

  /** active | inactive | entered-in-error | unknown (1..1) */
  getStatus(): valueSetCodes.InventoryItemStatusCodes | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.InventoryItemStatusCodes | undefined): this {
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

  /** Category or class of the item (0..*) Never undefined; an empty list is created when absent. */
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

  /** Code designating the specific type of item (0..*) Never undefined; an empty list is created when absent. */
  getCode(): CodeableConcept[] {
    if (this.code === undefined) {
      this.code = [];
    }
    return this.code;
  }

  setCode(code: CodeableConcept[] | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** Appends a new, empty CodeableConcept to `code` and returns it so it can be filled in. */
  addCode(): CodeableConcept;
  /** Appends the given CodeableConcept to `code` and returns this object for chaining. */
  addCode(codeableConcept: CodeableConcept): this;
  addCode(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('code', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('code', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `code`. One is added when the list is empty. */
  getCodeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getCode()[0];
    return firstCodeableConcept === undefined ? this.addCode() : firstCodeableConcept;
  }

  /** The item name(s) - the brand name, or common name, functional name, generic name or others (0..*) Never undefined; an empty list is created when absent. */
  getName(): InventoryItemName[] {
    if (this.name === undefined) {
      this.name = [];
    }
    return this.name;
  }

  setName(name: InventoryItemName[] | undefined): this {
    return this.setFieldValue('name', name);
  }

  hasName(): boolean {
    return this.hasFieldValue('name');
  }

  /** Appends a new, empty InventoryItemName to `name` and returns it so it can be filled in. */
  addName(): InventoryItemName;
  /** Appends the given InventoryItemName to `name` and returns this object for chaining. */
  addName(inventoryItemName: InventoryItemName): this;
  addName(inventoryItemName?: InventoryItemName): InventoryItemName | this {
    if (inventoryItemName !== undefined) {
      return this.addFieldValue('name', inventoryItemName);
    }
    const createdInventoryItemName = new InventoryItemName();
    this.addFieldValue('name', createdInventoryItemName);
    return createdInventoryItemName;
  }

  /** The first InventoryItemName of `name`. One is added when the list is empty. */
  getNameFirstRep(): InventoryItemName {
    const firstInventoryItemName = this.getName()[0];
    return firstInventoryItemName === undefined ? this.addName() : firstInventoryItemName;
  }

  /** Organization(s) responsible for the product (0..*) Never undefined; an empty list is created when absent. */
  getResponsibleOrganization(): InventoryItemResponsibleOrganization[] {
    if (this.responsibleOrganization === undefined) {
      this.responsibleOrganization = [];
    }
    return this.responsibleOrganization;
  }

  setResponsibleOrganization(
    responsibleOrganization: InventoryItemResponsibleOrganization[] | undefined
  ): this {
    return this.setFieldValue('responsibleOrganization', responsibleOrganization);
  }

  hasResponsibleOrganization(): boolean {
    return this.hasFieldValue('responsibleOrganization');
  }

  /** Appends a new, empty InventoryItemResponsibleOrganization to `responsibleOrganization` and returns it so it can be filled in. */
  addResponsibleOrganization(): InventoryItemResponsibleOrganization;
  /** Appends the given InventoryItemResponsibleOrganization to `responsibleOrganization` and returns this object for chaining. */
  addResponsibleOrganization(
    inventoryItemResponsibleOrganization: InventoryItemResponsibleOrganization
  ): this;
  addResponsibleOrganization(
    inventoryItemResponsibleOrganization?: InventoryItemResponsibleOrganization
  ): InventoryItemResponsibleOrganization | this {
    if (inventoryItemResponsibleOrganization !== undefined) {
      return this.addFieldValue('responsibleOrganization', inventoryItemResponsibleOrganization);
    }
    const createdInventoryItemResponsibleOrganization = new InventoryItemResponsibleOrganization();
    this.addFieldValue('responsibleOrganization', createdInventoryItemResponsibleOrganization);
    return createdInventoryItemResponsibleOrganization;
  }

  /** The first InventoryItemResponsibleOrganization of `responsibleOrganization`. One is added when the list is empty. */
  getResponsibleOrganizationFirstRep(): InventoryItemResponsibleOrganization {
    const firstInventoryItemResponsibleOrganization = this.getResponsibleOrganization()[0];
    return firstInventoryItemResponsibleOrganization === undefined
      ? this.addResponsibleOrganization()
      : firstInventoryItemResponsibleOrganization;
  }

  /** Descriptive characteristics of the item (0..1) Created when absent. */
  getDescription(): InventoryItemDescription {
    if (this.description === undefined) {
      this.description = new InventoryItemDescription();
    }
    return this.description;
  }

  setDescription(description: InventoryItemDescription | undefined): this {
    return this.setFieldValue('description', description);
  }

  hasDescription(): boolean {
    return this.hasFieldValue('description');
  }

  /** The usage status like recalled, in use, discarded (0..*) Never undefined; an empty list is created when absent. */
  getInventoryStatus(): CodeableConcept[] {
    if (this.inventoryStatus === undefined) {
      this.inventoryStatus = [];
    }
    return this.inventoryStatus;
  }

  setInventoryStatus(inventoryStatus: CodeableConcept[] | undefined): this {
    return this.setFieldValue('inventoryStatus', inventoryStatus);
  }

  hasInventoryStatus(): boolean {
    return this.hasFieldValue('inventoryStatus');
  }

  /** Appends a new, empty CodeableConcept to `inventoryStatus` and returns it so it can be filled in. */
  addInventoryStatus(): CodeableConcept;
  /** Appends the given CodeableConcept to `inventoryStatus` and returns this object for chaining. */
  addInventoryStatus(codeableConcept: CodeableConcept): this;
  addInventoryStatus(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('inventoryStatus', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('inventoryStatus', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `inventoryStatus`. One is added when the list is empty. */
  getInventoryStatusFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getInventoryStatus()[0];
    return firstCodeableConcept === undefined ? this.addInventoryStatus() : firstCodeableConcept;
  }

  /** The base unit of measure - the unit in which the product is used or counted (0..1) Created when absent. */
  getBaseUnit(): CodeableConcept {
    if (this.baseUnit === undefined) {
      this.baseUnit = new CodeableConcept();
    }
    return this.baseUnit;
  }

  setBaseUnit(baseUnit: CodeableConcept | undefined): this {
    return this.setFieldValue('baseUnit', baseUnit);
  }

  hasBaseUnit(): boolean {
    return this.hasFieldValue('baseUnit');
  }

  /** Net content or amount present in the item (0..1) Created when absent. */
  getNetContent(): Quantity {
    if (this.netContent === undefined) {
      this.netContent = new Quantity();
    }
    return this.netContent;
  }

  setNetContent(netContent: Quantity | undefined): this {
    return this.setFieldValue('netContent', netContent);
  }

  hasNetContent(): boolean {
    return this.hasFieldValue('netContent');
  }

  /** Association with other items or products (0..*) Never undefined; an empty list is created when absent. */
  getAssociation(): InventoryItemAssociation[] {
    if (this.association === undefined) {
      this.association = [];
    }
    return this.association;
  }

  setAssociation(association: InventoryItemAssociation[] | undefined): this {
    return this.setFieldValue('association', association);
  }

  hasAssociation(): boolean {
    return this.hasFieldValue('association');
  }

  /** Appends a new, empty InventoryItemAssociation to `association` and returns it so it can be filled in. */
  addAssociation(): InventoryItemAssociation;
  /** Appends the given InventoryItemAssociation to `association` and returns this object for chaining. */
  addAssociation(inventoryItemAssociation: InventoryItemAssociation): this;
  addAssociation(
    inventoryItemAssociation?: InventoryItemAssociation
  ): InventoryItemAssociation | this {
    if (inventoryItemAssociation !== undefined) {
      return this.addFieldValue('association', inventoryItemAssociation);
    }
    const createdInventoryItemAssociation = new InventoryItemAssociation();
    this.addFieldValue('association', createdInventoryItemAssociation);
    return createdInventoryItemAssociation;
  }

  /** The first InventoryItemAssociation of `association`. One is added when the list is empty. */
  getAssociationFirstRep(): InventoryItemAssociation {
    const firstInventoryItemAssociation = this.getAssociation()[0];
    return firstInventoryItemAssociation === undefined
      ? this.addAssociation()
      : firstInventoryItemAssociation;
  }

  /** Characteristic of the item (0..*) Never undefined; an empty list is created when absent. */
  getCharacteristic(): InventoryItemCharacteristic[] {
    if (this.characteristic === undefined) {
      this.characteristic = [];
    }
    return this.characteristic;
  }

  setCharacteristic(characteristic: InventoryItemCharacteristic[] | undefined): this {
    return this.setFieldValue('characteristic', characteristic);
  }

  hasCharacteristic(): boolean {
    return this.hasFieldValue('characteristic');
  }

  /** Appends a new, empty InventoryItemCharacteristic to `characteristic` and returns it so it can be filled in. */
  addCharacteristic(): InventoryItemCharacteristic;
  /** Appends the given InventoryItemCharacteristic to `characteristic` and returns this object for chaining. */
  addCharacteristic(inventoryItemCharacteristic: InventoryItemCharacteristic): this;
  addCharacteristic(
    inventoryItemCharacteristic?: InventoryItemCharacteristic
  ): InventoryItemCharacteristic | this {
    if (inventoryItemCharacteristic !== undefined) {
      return this.addFieldValue('characteristic', inventoryItemCharacteristic);
    }
    const createdInventoryItemCharacteristic = new InventoryItemCharacteristic();
    this.addFieldValue('characteristic', createdInventoryItemCharacteristic);
    return createdInventoryItemCharacteristic;
  }

  /** The first InventoryItemCharacteristic of `characteristic`. One is added when the list is empty. */
  getCharacteristicFirstRep(): InventoryItemCharacteristic {
    const firstInventoryItemCharacteristic = this.getCharacteristic()[0];
    return firstInventoryItemCharacteristic === undefined
      ? this.addCharacteristic()
      : firstInventoryItemCharacteristic;
  }

  /** Instances or occurrences of the product (0..1) Created when absent. */
  getInstance(): InventoryItemInstance {
    if (this.instance === undefined) {
      this.instance = new InventoryItemInstance();
    }
    return this.instance;
  }

  setInstance(instance: InventoryItemInstance | undefined): this {
    return this.setFieldValue('instance', instance);
  }

  hasInstance(): boolean {
    return this.hasFieldValue('instance');
  }

  /** Link to a product resource used in clinical workflows (0..1) Created when absent. */
  getProductReference(): Reference {
    if (this.productReference === undefined) {
      this.productReference = new Reference();
    }
    return this.productReference;
  }

  setProductReference(productReference: Reference | undefined): this {
    return this.setFieldValue('productReference', productReference);
  }

  hasProductReference(): boolean {
    return this.hasFieldValue('productReference');
  }
}

modelTypeRegistry.register('InventoryItem', InventoryItem, true);

/** True when the value is a InventoryItem model instance. */
export function isInventoryItem(candidate: unknown): candidate is InventoryItem {
  return candidate instanceof InventoryItem;
}

/**
 * The item name(s) - the brand name, or common name, functional name, generic name or others
 */
export class InventoryItemName extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'nameType',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'nameType', typeCode: 'Coding' }],
    },
    {
      elementName: 'language',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'language', typeCode: 'code', allowedCodes: valueSetCodes.CommonLanguages },
      ],
    },
    {
      elementName: 'name',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
  ];

  /** The type of name e.g. 'brand-name', 'functional-name', 'common-name' (1..1) */
  nameType?: Coding;

  /** The language used to express the item name (1..1) */
  language?: valueSetCodes.CommonLanguages;
  /** Id and extensions of the primitive `language`. */
  _language?: Element;

  /** The name or designation of the item (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  override fhirType(): string {
    return 'InventoryItem.name';
  }

  /** FHIR JSON for this InventoryItemName, typed as the plain `InventoryItemName` data type. */
  override toJSON(): plainTypes.InventoryItemName {
    return this.serialize() as plainTypes.InventoryItemName;
  }

  /** The type of name e.g. 'brand-name', 'functional-name', 'common-name' (1..1) Created when absent. */
  getNameType(): Coding {
    if (this.nameType === undefined) {
      this.nameType = new Coding();
    }
    return this.nameType;
  }

  setNameType(nameType: Coding | undefined): this {
    return this.setFieldValue('nameType', nameType);
  }

  hasNameType(): boolean {
    return this.hasFieldValue('nameType');
  }

  /** The language used to express the item name (1..1) */
  getLanguage(): valueSetCodes.CommonLanguages | undefined {
    return this.language;
  }

  /** Sets `language`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setLanguage(language: valueSetCodes.CommonLanguages | undefined): this {
    return this.setFieldValue('language', language);
  }

  hasLanguage(): boolean {
    return this.hasFieldValue('language');
  }

  /** The element carrying the id and extensions of `language`. Created when absent. */
  getLanguageElement(): Element {
    if (this._language === undefined) {
      this._language = new Element();
    }
    return this._language;
  }

  setLanguageElement(languageElement: Element | undefined): this {
    this._language = languageElement;
    return this;
  }

  /** The name or designation of the item (1..1) */
  getName(): string | undefined {
    return this.name;
  }

  /** Sets `name`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setName(name: string | undefined): this {
    return this.setFieldValue('name', name);
  }

  hasName(): boolean {
    return this.hasFieldValue('name');
  }

  /** The element carrying the id and extensions of `name`. Created when absent. */
  getNameElement(): Element {
    if (this._name === undefined) {
      this._name = new Element();
    }
    return this._name;
  }

  setNameElement(nameElement: Element | undefined): this {
    this._name = nameElement;
    return this;
  }
}

modelTypeRegistry.register('InventoryItemName', InventoryItemName, false);

/**
 * Organization(s) responsible for the product
 */
export class InventoryItemResponsibleOrganization extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'role',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'role', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'organization',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'organization', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
  ];

  /** The role of the organization e.g. manufacturer, distributor, or other (1..1) */
  role?: CodeableConcept;

  /** An organization that is associated with the item (1..1) */
  organization?: Reference;

  override fhirType(): string {
    return 'InventoryItem.responsibleOrganization';
  }

  /** FHIR JSON for this InventoryItemResponsibleOrganization, typed as the plain `InventoryItemResponsibleOrganization` data type. */
  override toJSON(): plainTypes.InventoryItemResponsibleOrganization {
    return this.serialize() as plainTypes.InventoryItemResponsibleOrganization;
  }

  /** The role of the organization e.g. manufacturer, distributor, or other (1..1) Created when absent. */
  getRole(): CodeableConcept {
    if (this.role === undefined) {
      this.role = new CodeableConcept();
    }
    return this.role;
  }

  setRole(role: CodeableConcept | undefined): this {
    return this.setFieldValue('role', role);
  }

  hasRole(): boolean {
    return this.hasFieldValue('role');
  }

  /** An organization that is associated with the item (1..1) Created when absent. */
  getOrganization(): Reference {
    if (this.organization === undefined) {
      this.organization = new Reference();
    }
    return this.organization;
  }

  setOrganization(organization: Reference | undefined): this {
    return this.setFieldValue('organization', organization);
  }

  hasOrganization(): boolean {
    return this.hasFieldValue('organization');
  }
}

modelTypeRegistry.register(
  'InventoryItemResponsibleOrganization',
  InventoryItemResponsibleOrganization,
  false
);

/**
 * Descriptive characteristics of the item
 */
export class InventoryItemDescription extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'language',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'language', typeCode: 'code', allowedCodes: valueSetCodes.CommonLanguages },
      ],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
  ];

  /** The language that is used in the item description (0..1) */
  language?: valueSetCodes.CommonLanguages;
  /** Id and extensions of the primitive `language`. */
  _language?: Element;

  /** Textual description of the item (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  override fhirType(): string {
    return 'InventoryItem.description';
  }

  /** FHIR JSON for this InventoryItemDescription, typed as the plain `InventoryItemDescription` data type. */
  override toJSON(): plainTypes.InventoryItemDescription {
    return this.serialize() as plainTypes.InventoryItemDescription;
  }

  /** The language that is used in the item description (0..1) */
  getLanguage(): valueSetCodes.CommonLanguages | undefined {
    return this.language;
  }

  /** Sets `language`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setLanguage(language: valueSetCodes.CommonLanguages | undefined): this {
    return this.setFieldValue('language', language);
  }

  hasLanguage(): boolean {
    return this.hasFieldValue('language');
  }

  /** The element carrying the id and extensions of `language`. Created when absent. */
  getLanguageElement(): Element {
    if (this._language === undefined) {
      this._language = new Element();
    }
    return this._language;
  }

  setLanguageElement(languageElement: Element | undefined): this {
    this._language = languageElement;
    return this;
  }

  /** Textual description of the item (0..1) */
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
}

modelTypeRegistry.register('InventoryItemDescription', InventoryItemDescription, false);

/**
 * Association with other items or products
 */
export class InventoryItemAssociation extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'associationType',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'associationType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'relatedItem',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'relatedItem',
          typeCode: 'Reference',
          targetResourceTypes: [
            'BiologicallyDerivedProduct',
            'Device',
            'DeviceDefinition',
            'InventoryItem',
            'Medication',
            'MedicationKnowledge',
            'NutritionProduct',
          ],
        },
      ],
    },
    {
      elementName: 'quantity',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Ratio' }],
    },
  ];

  /** The type of association between the device and the other item (1..1) */
  associationType?: CodeableConcept;

  /** The related item or product (1..1) */
  relatedItem?: Reference;

  /** The quantity of the product in this product (1..1) */
  quantity?: Ratio;

  override fhirType(): string {
    return 'InventoryItem.association';
  }

  /** FHIR JSON for this InventoryItemAssociation, typed as the plain `InventoryItemAssociation` data type. */
  override toJSON(): plainTypes.InventoryItemAssociation {
    return this.serialize() as plainTypes.InventoryItemAssociation;
  }

  /** The type of association between the device and the other item (1..1) Created when absent. */
  getAssociationType(): CodeableConcept {
    if (this.associationType === undefined) {
      this.associationType = new CodeableConcept();
    }
    return this.associationType;
  }

  setAssociationType(associationType: CodeableConcept | undefined): this {
    return this.setFieldValue('associationType', associationType);
  }

  hasAssociationType(): boolean {
    return this.hasFieldValue('associationType');
  }

  /** The related item or product (1..1) Created when absent. */
  getRelatedItem(): Reference {
    if (this.relatedItem === undefined) {
      this.relatedItem = new Reference();
    }
    return this.relatedItem;
  }

  setRelatedItem(relatedItem: Reference | undefined): this {
    return this.setFieldValue('relatedItem', relatedItem);
  }

  hasRelatedItem(): boolean {
    return this.hasFieldValue('relatedItem');
  }

  /** The quantity of the product in this product (1..1) Created when absent. */
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
}

modelTypeRegistry.register('InventoryItemAssociation', InventoryItemAssociation, false);

/**
 * Characteristic of the item
 */
export class InventoryItemCharacteristic extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'characteristicType',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'characteristicType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'value',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'valueString', typeCode: 'string' },
        { jsonKey: 'valueInteger', typeCode: 'integer' },
        { jsonKey: 'valueDecimal', typeCode: 'decimal' },
        { jsonKey: 'valueBoolean', typeCode: 'boolean' },
        { jsonKey: 'valueUrl', typeCode: 'url' },
        { jsonKey: 'valueDateTime', typeCode: 'dateTime' },
        { jsonKey: 'valueQuantity', typeCode: 'Quantity' },
        { jsonKey: 'valueRange', typeCode: 'Range' },
        { jsonKey: 'valueRatio', typeCode: 'Ratio' },
        { jsonKey: 'valueAnnotation', typeCode: 'Annotation' },
        { jsonKey: 'valueAddress', typeCode: 'Address' },
        { jsonKey: 'valueDuration', typeCode: 'Duration' },
        { jsonKey: 'valueCodeableConcept', typeCode: 'CodeableConcept' },
      ],
    },
  ];

  /** The characteristic that is being defined (1..1) */
  characteristicType?: CodeableConcept;

  /** The value of the attribute (1..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** The value of the attribute (1..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** The value of the attribute (1..1) */
  valueDecimal?: number;
  /** Id and extensions of the primitive `valueDecimal`. */
  _valueDecimal?: Element;
  /** The value of the attribute (1..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** The value of the attribute (1..1) */
  valueUrl?: string;
  /** Id and extensions of the primitive `valueUrl`. */
  _valueUrl?: Element;
  /** The value of the attribute (1..1) */
  valueDateTime?: string;
  /** Id and extensions of the primitive `valueDateTime`. */
  _valueDateTime?: Element;
  /** The value of the attribute (1..1) */
  valueQuantity?: Quantity;
  /** The value of the attribute (1..1) */
  valueRange?: Range;
  /** The value of the attribute (1..1) */
  valueRatio?: Ratio;
  /** The value of the attribute (1..1) */
  valueAnnotation?: Annotation;
  /** The value of the attribute (1..1) */
  valueAddress?: Address;
  /** The value of the attribute (1..1) */
  valueDuration?: Duration;
  /** The value of the attribute (1..1) */
  valueCodeableConcept?: CodeableConcept;

  override fhirType(): string {
    return 'InventoryItem.characteristic';
  }

  /** FHIR JSON for this InventoryItemCharacteristic, typed as the plain `InventoryItemCharacteristic` data type. */
  override toJSON(): plainTypes.InventoryItemCharacteristic {
    return this.serialize() as plainTypes.InventoryItemCharacteristic;
  }

  /** The characteristic that is being defined (1..1) Created when absent. */
  getCharacteristicType(): CodeableConcept {
    if (this.characteristicType === undefined) {
      this.characteristicType = new CodeableConcept();
    }
    return this.characteristicType;
  }

  setCharacteristicType(characteristicType: CodeableConcept | undefined): this {
    return this.setFieldValue('characteristicType', characteristicType);
  }

  hasCharacteristicType(): boolean {
    return this.hasFieldValue('characteristicType');
  }

  /** The value of the attribute (1..1) Whichever type of `value[x]` is set. */
  getValue():
    | string
    | number
    | boolean
    | Quantity
    | Range
    | Ratio
    | Annotation
    | Address
    | Duration
    | CodeableConcept
    | undefined {
    return this.getChoiceValue<
      | string
      | number
      | boolean
      | Quantity
      | Range
      | Ratio
      | Annotation
      | Address
      | Duration
      | CodeableConcept
    >('value');
  }

  /** True when any type of `value[x]` is set. */
  hasValue(): boolean {
    return this.hasChoiceValue('value');
  }

  getValueString(): string | undefined {
    return this.valueString;
  }

  /** Sets `value[x]` as string and clears every other type of it. */
  setValueString(valueString: string | undefined): this {
    return this.setFieldValue('valueString', valueString);
  }

  hasValueString(): boolean {
    return this.hasFieldValue('valueString');
  }

  getValueInteger(): number | undefined {
    return this.valueInteger;
  }

  /** Sets `value[x]` as integer and clears every other type of it. */
  setValueInteger(valueInteger: number | undefined): this {
    return this.setFieldValue('valueInteger', valueInteger);
  }

  hasValueInteger(): boolean {
    return this.hasFieldValue('valueInteger');
  }

  getValueDecimal(): number | undefined {
    return this.valueDecimal;
  }

  /** Sets `value[x]` as decimal and clears every other type of it. */
  setValueDecimal(valueDecimal: number | undefined): this {
    return this.setFieldValue('valueDecimal', valueDecimal);
  }

  hasValueDecimal(): boolean {
    return this.hasFieldValue('valueDecimal');
  }

  getValueBoolean(): boolean | undefined {
    return this.valueBoolean;
  }

  /** Sets `value[x]` as boolean and clears every other type of it. */
  setValueBoolean(valueBoolean: boolean | undefined): this {
    return this.setFieldValue('valueBoolean', valueBoolean);
  }

  hasValueBoolean(): boolean {
    return this.hasFieldValue('valueBoolean');
  }

  getValueUrl(): string | undefined {
    return this.valueUrl;
  }

  /** Sets `value[x]` as url and clears every other type of it. */
  setValueUrl(valueUrl: string | undefined): this {
    return this.setFieldValue('valueUrl', valueUrl);
  }

  hasValueUrl(): boolean {
    return this.hasFieldValue('valueUrl');
  }

  getValueDateTime(): string | undefined {
    return this.valueDateTime;
  }

  /** Sets `value[x]` as dateTime and clears every other type of it. */
  setValueDateTime(valueDateTime: string | undefined): this {
    return this.setFieldValue('valueDateTime', valueDateTime);
  }

  hasValueDateTime(): boolean {
    return this.hasFieldValue('valueDateTime');
  }

  getValueQuantity(): Quantity | undefined {
    return this.valueQuantity;
  }

  /** Sets `value[x]` as Quantity and clears every other type of it. */
  setValueQuantity(valueQuantity: Quantity | undefined): this {
    return this.setFieldValue('valueQuantity', valueQuantity);
  }

  hasValueQuantity(): boolean {
    return this.hasFieldValue('valueQuantity');
  }

  getValueRange(): Range | undefined {
    return this.valueRange;
  }

  /** Sets `value[x]` as Range and clears every other type of it. */
  setValueRange(valueRange: Range | undefined): this {
    return this.setFieldValue('valueRange', valueRange);
  }

  hasValueRange(): boolean {
    return this.hasFieldValue('valueRange');
  }

  getValueRatio(): Ratio | undefined {
    return this.valueRatio;
  }

  /** Sets `value[x]` as Ratio and clears every other type of it. */
  setValueRatio(valueRatio: Ratio | undefined): this {
    return this.setFieldValue('valueRatio', valueRatio);
  }

  hasValueRatio(): boolean {
    return this.hasFieldValue('valueRatio');
  }

  getValueAnnotation(): Annotation | undefined {
    return this.valueAnnotation;
  }

  /** Sets `value[x]` as Annotation and clears every other type of it. */
  setValueAnnotation(valueAnnotation: Annotation | undefined): this {
    return this.setFieldValue('valueAnnotation', valueAnnotation);
  }

  hasValueAnnotation(): boolean {
    return this.hasFieldValue('valueAnnotation');
  }

  getValueAddress(): Address | undefined {
    return this.valueAddress;
  }

  /** Sets `value[x]` as Address and clears every other type of it. */
  setValueAddress(valueAddress: Address | undefined): this {
    return this.setFieldValue('valueAddress', valueAddress);
  }

  hasValueAddress(): boolean {
    return this.hasFieldValue('valueAddress');
  }

  getValueDuration(): Duration | undefined {
    return this.valueDuration;
  }

  /** Sets `value[x]` as Duration and clears every other type of it. */
  setValueDuration(valueDuration: Duration | undefined): this {
    return this.setFieldValue('valueDuration', valueDuration);
  }

  hasValueDuration(): boolean {
    return this.hasFieldValue('valueDuration');
  }

  getValueCodeableConcept(): CodeableConcept | undefined {
    return this.valueCodeableConcept;
  }

  /** Sets `value[x]` as CodeableConcept and clears every other type of it. */
  setValueCodeableConcept(valueCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('valueCodeableConcept', valueCodeableConcept);
  }

  hasValueCodeableConcept(): boolean {
    return this.hasFieldValue('valueCodeableConcept');
  }
}

modelTypeRegistry.register('InventoryItemCharacteristic', InventoryItemCharacteristic, false);

/**
 * Instances or occurrences of the product
 */
export class InventoryItemInstance extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'lotNumber',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'lotNumber', typeCode: 'string' }],
    },
    {
      elementName: 'expiry',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'expiry', typeCode: 'dateTime' }],
    },
    {
      elementName: 'subject',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'subject',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Patient'],
        },
      ],
    },
    {
      elementName: 'location',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'location', typeCode: 'Reference', targetResourceTypes: ['Location'] }],
    },
  ];

  /** The identifier for the physical instance, typically a serial number (0..*) */
  identifier?: Identifier[];

  /** The lot or batch number of the item (0..1) */
  lotNumber?: string;
  /** Id and extensions of the primitive `lotNumber`. */
  _lotNumber?: Element;

  /** The expiry date or date and time for the product (0..1) */
  expiry?: string;
  /** Id and extensions of the primitive `expiry`. */
  _expiry?: Element;

  /** The subject that the item is associated with (0..1) */
  subject?: Reference;

  /** The location that the item is associated with (0..1) */
  location?: Reference;

  override fhirType(): string {
    return 'InventoryItem.instance';
  }

  /** FHIR JSON for this InventoryItemInstance, typed as the plain `InventoryItemInstance` data type. */
  override toJSON(): plainTypes.InventoryItemInstance {
    return this.serialize() as plainTypes.InventoryItemInstance;
  }

  /** The identifier for the physical instance, typically a serial number (0..*) Never undefined; an empty list is created when absent. */
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

  /** The lot or batch number of the item (0..1) */
  getLotNumber(): string | undefined {
    return this.lotNumber;
  }

  /** Sets `lotNumber`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setLotNumber(lotNumber: string | undefined): this {
    return this.setFieldValue('lotNumber', lotNumber);
  }

  hasLotNumber(): boolean {
    return this.hasFieldValue('lotNumber');
  }

  /** The element carrying the id and extensions of `lotNumber`. Created when absent. */
  getLotNumberElement(): Element {
    if (this._lotNumber === undefined) {
      this._lotNumber = new Element();
    }
    return this._lotNumber;
  }

  setLotNumberElement(lotNumberElement: Element | undefined): this {
    this._lotNumber = lotNumberElement;
    return this;
  }

  /** The expiry date or date and time for the product (0..1) */
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

  /** The subject that the item is associated with (0..1) Created when absent. */
  getSubject(): Reference {
    if (this.subject === undefined) {
      this.subject = new Reference();
    }
    return this.subject;
  }

  setSubject(subject: Reference | undefined): this {
    return this.setFieldValue('subject', subject);
  }

  hasSubject(): boolean {
    return this.hasFieldValue('subject');
  }

  /** The location that the item is associated with (0..1) Created when absent. */
  getLocation(): Reference {
    if (this.location === undefined) {
      this.location = new Reference();
    }
    return this.location;
  }

  setLocation(location: Reference | undefined): this {
    return this.setFieldValue('location', location);
  }

  hasLocation(): boolean {
    return this.hasFieldValue('location');
  }
}

modelTypeRegistry.register('InventoryItemInstance', InventoryItemInstance, false);
