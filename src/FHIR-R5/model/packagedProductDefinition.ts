/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../models';
import { Attachment } from './attachment';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { CodeableReference } from './codeableReference';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { MarketingStatus } from './marketingStatus';
import { ProductShelfLife } from './productShelfLife';
import { Quantity } from './quantity';
import { Reference } from './reference';

/**
 * A medically related item or items, in a container or package.
 */
export class PackagedProductDefinition extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'packageFor',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'packageFor',
          typeCode: 'Reference',
          targetResourceTypes: ['MedicinalProductDefinition'],
        },
      ],
    },
    {
      elementName: 'status',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'status', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'statusDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'statusDate', typeCode: 'dateTime' }],
    },
    {
      elementName: 'containedItemQuantity',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'containedItemQuantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'legalStatusOfSupply',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'legalStatusOfSupply',
          typeCode: 'PackagedProductDefinitionLegalStatusOfSupply',
        },
      ],
    },
    {
      elementName: 'marketingStatus',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'marketingStatus', typeCode: 'MarketingStatus' }],
    },
    {
      elementName: 'copackagedIndicator',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'copackagedIndicator', typeCode: 'boolean' }],
    },
    {
      elementName: 'manufacturer',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'manufacturer', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
    {
      elementName: 'attachedDocument',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'attachedDocument',
          typeCode: 'Reference',
          targetResourceTypes: ['DocumentReference'],
        },
      ],
    },
    {
      elementName: 'packaging',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'packaging', typeCode: 'PackagedProductDefinitionPackaging' }],
    },
    {
      elementName: 'characteristic',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'characteristic', typeCode: 'PackagedProductDefinitionPackagingProperty' },
      ],
    },
  ];

  readonly resourceType = 'PackagedProductDefinition';

  /** A unique identifier for this package as whole - not for the content of the package (0..*) */
  identifier?: Identifier[];

  /** A name for this package. Typically as listed in a drug formulary, catalogue, inventory etc (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** A high level category e.g. medicinal product, raw material, shipping container etc (0..1) */
  type?: CodeableConcept;

  /** The product that this is a pack for (0..*) */
  packageFor?: Reference[];

  /** The status within the lifecycle of this item. High level - not intended to duplicate details elsewhere e.g. legal status, or authorization/marketing status (0..1) */
  status?: CodeableConcept;

  /** The date at which the given status became applicable (0..1) */
  statusDate?: string;
  /** Id and extensions of the primitive `statusDate`. */
  _statusDate?: Element;

  /** A total of the complete count of contained items of a particular type/form, independent of sub-packaging or organization. This can be considered as the pack size. See also packaging.containedItem.amount (especially the long definition) (0..*) */
  containedItemQuantity?: Quantity[];

  /** Textual description. Note that this is not the name of the package or product (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** The legal status of supply of the packaged item as classified by the regulator (0..*) */
  legalStatusOfSupply?: PackagedProductDefinitionLegalStatusOfSupply[];

  /** Allows specifying that an item is on the market for sale, or that it is not available, and the dates and locations associated (0..*) */
  marketingStatus?: MarketingStatus[];

  /** Identifies if the drug product is supplied with another item such as a diluent or adjuvant (0..1) */
  copackagedIndicator?: boolean;
  /** Id and extensions of the primitive `copackagedIndicator`. */
  _copackagedIndicator?: Element;

  /** Manufacturer of this package type (multiple means these are all possible manufacturers) (0..*) */
  manufacturer?: Reference[];

  /** Additional information or supporting documentation about the packaged product (0..*) */
  attachedDocument?: Reference[];

  /** A packaging item, as a container for medically related items, possibly with other packaging items within, or a packaging component, such as bottle cap (0..1) */
  packaging?: PackagedProductDefinitionPackaging;

  /** Allows the key features to be recorded, such as "hospital pack", "nurse prescribable" (0..*) */
  characteristic?: PackagedProductDefinitionPackagingProperty[];

  override fhirType(): string {
    return 'PackagedProductDefinition';
  }

  /** FHIR JSON for this PackagedProductDefinition, typed as the plain `PackagedProductDefinition` data type. */
  override toJSON(): plainTypes.PackagedProductDefinition {
    return this.serialize() as plainTypes.PackagedProductDefinition;
  }

  /** A unique identifier for this package as whole - not for the content of the package (0..*) Never undefined; an empty list is created when absent. */
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

  /** A name for this package. Typically as listed in a drug formulary, catalogue, inventory etc (0..1) */
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

  /** A high level category e.g. medicinal product, raw material, shipping container etc (0..1) Created when absent. */
  getType(): CodeableConcept {
    if (this.type === undefined) {
      this.type = new CodeableConcept();
    }
    return this.type;
  }

  setType(type: CodeableConcept | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** The product that this is a pack for (0..*) Never undefined; an empty list is created when absent. */
  getPackageFor(): Reference[] {
    if (this.packageFor === undefined) {
      this.packageFor = [];
    }
    return this.packageFor;
  }

  setPackageFor(packageFor: Reference[] | undefined): this {
    return this.setFieldValue('packageFor', packageFor);
  }

  hasPackageFor(): boolean {
    return this.hasFieldValue('packageFor');
  }

  /** Appends a new, empty Reference to `packageFor` and returns it so it can be filled in. */
  addPackageFor(): Reference;
  /** Appends the given Reference to `packageFor` and returns this object for chaining. */
  addPackageFor(reference: Reference): this;
  addPackageFor(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('packageFor', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('packageFor', createdReference);
    return createdReference;
  }

  /** The first Reference of `packageFor`. One is added when the list is empty. */
  getPackageForFirstRep(): Reference {
    const firstReference = this.getPackageFor()[0];
    return firstReference === undefined ? this.addPackageFor() : firstReference;
  }

  /** The status within the lifecycle of this item. High level - not intended to duplicate details elsewhere e.g. legal status, or authorization/marketing status (0..1) Created when absent. */
  getStatus(): CodeableConcept {
    if (this.status === undefined) {
      this.status = new CodeableConcept();
    }
    return this.status;
  }

  setStatus(status: CodeableConcept | undefined): this {
    return this.setFieldValue('status', status);
  }

  hasStatus(): boolean {
    return this.hasFieldValue('status');
  }

  /** The date at which the given status became applicable (0..1) */
  getStatusDate(): string | undefined {
    return this.statusDate;
  }

  /** Sets `statusDate`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setStatusDate(statusDate: string | undefined): this {
    return this.setFieldValue('statusDate', statusDate);
  }

  hasStatusDate(): boolean {
    return this.hasFieldValue('statusDate');
  }

  /** The element carrying the id and extensions of `statusDate`. Created when absent. */
  getStatusDateElement(): Element {
    if (this._statusDate === undefined) {
      this._statusDate = new Element();
    }
    return this._statusDate;
  }

  setStatusDateElement(statusDateElement: Element | undefined): this {
    this._statusDate = statusDateElement;
    return this;
  }

  /** A total of the complete count of contained items of a particular type/form, independent of sub-packaging or organization. This can be considered as the pack size. See also packaging.containedItem.amount (especially the long definition) (0..*) Never undefined; an empty list is created when absent. */
  getContainedItemQuantity(): Quantity[] {
    if (this.containedItemQuantity === undefined) {
      this.containedItemQuantity = [];
    }
    return this.containedItemQuantity;
  }

  setContainedItemQuantity(containedItemQuantity: Quantity[] | undefined): this {
    return this.setFieldValue('containedItemQuantity', containedItemQuantity);
  }

  hasContainedItemQuantity(): boolean {
    return this.hasFieldValue('containedItemQuantity');
  }

  /** Appends a new, empty Quantity to `containedItemQuantity` and returns it so it can be filled in. */
  addContainedItemQuantity(): Quantity;
  /** Appends the given Quantity to `containedItemQuantity` and returns this object for chaining. */
  addContainedItemQuantity(quantity: Quantity): this;
  addContainedItemQuantity(quantity?: Quantity): Quantity | this {
    if (quantity !== undefined) {
      return this.addFieldValue('containedItemQuantity', quantity);
    }
    const createdQuantity = new Quantity();
    this.addFieldValue('containedItemQuantity', createdQuantity);
    return createdQuantity;
  }

  /** The first Quantity of `containedItemQuantity`. One is added when the list is empty. */
  getContainedItemQuantityFirstRep(): Quantity {
    const firstQuantity = this.getContainedItemQuantity()[0];
    return firstQuantity === undefined ? this.addContainedItemQuantity() : firstQuantity;
  }

  /** Textual description. Note that this is not the name of the package or product (0..1) */
  getDescription(): string | undefined {
    return this.description;
  }

  /** Sets `description`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
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

  /** The legal status of supply of the packaged item as classified by the regulator (0..*) Never undefined; an empty list is created when absent. */
  getLegalStatusOfSupply(): PackagedProductDefinitionLegalStatusOfSupply[] {
    if (this.legalStatusOfSupply === undefined) {
      this.legalStatusOfSupply = [];
    }
    return this.legalStatusOfSupply;
  }

  setLegalStatusOfSupply(
    legalStatusOfSupply: PackagedProductDefinitionLegalStatusOfSupply[] | undefined
  ): this {
    return this.setFieldValue('legalStatusOfSupply', legalStatusOfSupply);
  }

  hasLegalStatusOfSupply(): boolean {
    return this.hasFieldValue('legalStatusOfSupply');
  }

  /** Appends a new, empty PackagedProductDefinitionLegalStatusOfSupply to `legalStatusOfSupply` and returns it so it can be filled in. */
  addLegalStatusOfSupply(): PackagedProductDefinitionLegalStatusOfSupply;
  /** Appends the given PackagedProductDefinitionLegalStatusOfSupply to `legalStatusOfSupply` and returns this object for chaining. */
  addLegalStatusOfSupply(
    packagedProductDefinitionLegalStatusOfSupply: PackagedProductDefinitionLegalStatusOfSupply
  ): this;
  addLegalStatusOfSupply(
    packagedProductDefinitionLegalStatusOfSupply?: PackagedProductDefinitionLegalStatusOfSupply
  ): PackagedProductDefinitionLegalStatusOfSupply | this {
    if (packagedProductDefinitionLegalStatusOfSupply !== undefined) {
      return this.addFieldValue(
        'legalStatusOfSupply',
        packagedProductDefinitionLegalStatusOfSupply
      );
    }
    const createdPackagedProductDefinitionLegalStatusOfSupply =
      new PackagedProductDefinitionLegalStatusOfSupply();
    this.addFieldValue('legalStatusOfSupply', createdPackagedProductDefinitionLegalStatusOfSupply);
    return createdPackagedProductDefinitionLegalStatusOfSupply;
  }

  /** The first PackagedProductDefinitionLegalStatusOfSupply of `legalStatusOfSupply`. One is added when the list is empty. */
  getLegalStatusOfSupplyFirstRep(): PackagedProductDefinitionLegalStatusOfSupply {
    const firstPackagedProductDefinitionLegalStatusOfSupply = this.getLegalStatusOfSupply()[0];
    return firstPackagedProductDefinitionLegalStatusOfSupply === undefined
      ? this.addLegalStatusOfSupply()
      : firstPackagedProductDefinitionLegalStatusOfSupply;
  }

  /** Allows specifying that an item is on the market for sale, or that it is not available, and the dates and locations associated (0..*) Never undefined; an empty list is created when absent. */
  getMarketingStatus(): MarketingStatus[] {
    if (this.marketingStatus === undefined) {
      this.marketingStatus = [];
    }
    return this.marketingStatus;
  }

  setMarketingStatus(marketingStatus: MarketingStatus[] | undefined): this {
    return this.setFieldValue('marketingStatus', marketingStatus);
  }

  hasMarketingStatus(): boolean {
    return this.hasFieldValue('marketingStatus');
  }

  /** Appends a new, empty MarketingStatus to `marketingStatus` and returns it so it can be filled in. */
  addMarketingStatus(): MarketingStatus;
  /** Appends the given MarketingStatus to `marketingStatus` and returns this object for chaining. */
  addMarketingStatus(marketingStatus: MarketingStatus): this;
  addMarketingStatus(marketingStatus?: MarketingStatus): MarketingStatus | this {
    if (marketingStatus !== undefined) {
      return this.addFieldValue('marketingStatus', marketingStatus);
    }
    const createdMarketingStatus = new MarketingStatus();
    this.addFieldValue('marketingStatus', createdMarketingStatus);
    return createdMarketingStatus;
  }

  /** The first MarketingStatus of `marketingStatus`. One is added when the list is empty. */
  getMarketingStatusFirstRep(): MarketingStatus {
    const firstMarketingStatus = this.getMarketingStatus()[0];
    return firstMarketingStatus === undefined ? this.addMarketingStatus() : firstMarketingStatus;
  }

  /** Identifies if the drug product is supplied with another item such as a diluent or adjuvant (0..1) */
  getCopackagedIndicator(): boolean | undefined {
    return this.copackagedIndicator;
  }

  /** Sets `copackagedIndicator`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setCopackagedIndicator(copackagedIndicator: boolean | undefined): this {
    return this.setFieldValue('copackagedIndicator', copackagedIndicator);
  }

  hasCopackagedIndicator(): boolean {
    return this.hasFieldValue('copackagedIndicator');
  }

  /** The element carrying the id and extensions of `copackagedIndicator`. Created when absent. */
  getCopackagedIndicatorElement(): Element {
    if (this._copackagedIndicator === undefined) {
      this._copackagedIndicator = new Element();
    }
    return this._copackagedIndicator;
  }

  setCopackagedIndicatorElement(copackagedIndicatorElement: Element | undefined): this {
    this._copackagedIndicator = copackagedIndicatorElement;
    return this;
  }

  /** Manufacturer of this package type (multiple means these are all possible manufacturers) (0..*) Never undefined; an empty list is created when absent. */
  getManufacturer(): Reference[] {
    if (this.manufacturer === undefined) {
      this.manufacturer = [];
    }
    return this.manufacturer;
  }

  setManufacturer(manufacturer: Reference[] | undefined): this {
    return this.setFieldValue('manufacturer', manufacturer);
  }

  hasManufacturer(): boolean {
    return this.hasFieldValue('manufacturer');
  }

  /** Appends a new, empty Reference to `manufacturer` and returns it so it can be filled in. */
  addManufacturer(): Reference;
  /** Appends the given Reference to `manufacturer` and returns this object for chaining. */
  addManufacturer(reference: Reference): this;
  addManufacturer(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('manufacturer', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('manufacturer', createdReference);
    return createdReference;
  }

  /** The first Reference of `manufacturer`. One is added when the list is empty. */
  getManufacturerFirstRep(): Reference {
    const firstReference = this.getManufacturer()[0];
    return firstReference === undefined ? this.addManufacturer() : firstReference;
  }

  /** Additional information or supporting documentation about the packaged product (0..*) Never undefined; an empty list is created when absent. */
  getAttachedDocument(): Reference[] {
    if (this.attachedDocument === undefined) {
      this.attachedDocument = [];
    }
    return this.attachedDocument;
  }

  setAttachedDocument(attachedDocument: Reference[] | undefined): this {
    return this.setFieldValue('attachedDocument', attachedDocument);
  }

  hasAttachedDocument(): boolean {
    return this.hasFieldValue('attachedDocument');
  }

  /** Appends a new, empty Reference to `attachedDocument` and returns it so it can be filled in. */
  addAttachedDocument(): Reference;
  /** Appends the given Reference to `attachedDocument` and returns this object for chaining. */
  addAttachedDocument(reference: Reference): this;
  addAttachedDocument(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('attachedDocument', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('attachedDocument', createdReference);
    return createdReference;
  }

  /** The first Reference of `attachedDocument`. One is added when the list is empty. */
  getAttachedDocumentFirstRep(): Reference {
    const firstReference = this.getAttachedDocument()[0];
    return firstReference === undefined ? this.addAttachedDocument() : firstReference;
  }

  /** A packaging item, as a container for medically related items, possibly with other packaging items within, or a packaging component, such as bottle cap (0..1) Created when absent. */
  getPackaging(): PackagedProductDefinitionPackaging {
    if (this.packaging === undefined) {
      this.packaging = new PackagedProductDefinitionPackaging();
    }
    return this.packaging;
  }

  setPackaging(packaging: PackagedProductDefinitionPackaging | undefined): this {
    return this.setFieldValue('packaging', packaging);
  }

  hasPackaging(): boolean {
    return this.hasFieldValue('packaging');
  }

  /** Allows the key features to be recorded, such as "hospital pack", "nurse prescribable" (0..*) Never undefined; an empty list is created when absent. */
  getCharacteristic(): PackagedProductDefinitionPackagingProperty[] {
    if (this.characteristic === undefined) {
      this.characteristic = [];
    }
    return this.characteristic;
  }

  setCharacteristic(
    characteristic: PackagedProductDefinitionPackagingProperty[] | undefined
  ): this {
    return this.setFieldValue('characteristic', characteristic);
  }

  hasCharacteristic(): boolean {
    return this.hasFieldValue('characteristic');
  }

  /** Appends a new, empty PackagedProductDefinitionPackagingProperty to `characteristic` and returns it so it can be filled in. */
  addCharacteristic(): PackagedProductDefinitionPackagingProperty;
  /** Appends the given PackagedProductDefinitionPackagingProperty to `characteristic` and returns this object for chaining. */
  addCharacteristic(
    packagedProductDefinitionPackagingProperty: PackagedProductDefinitionPackagingProperty
  ): this;
  addCharacteristic(
    packagedProductDefinitionPackagingProperty?: PackagedProductDefinitionPackagingProperty
  ): PackagedProductDefinitionPackagingProperty | this {
    if (packagedProductDefinitionPackagingProperty !== undefined) {
      return this.addFieldValue('characteristic', packagedProductDefinitionPackagingProperty);
    }
    const createdPackagedProductDefinitionPackagingProperty =
      new PackagedProductDefinitionPackagingProperty();
    this.addFieldValue('characteristic', createdPackagedProductDefinitionPackagingProperty);
    return createdPackagedProductDefinitionPackagingProperty;
  }

  /** The first PackagedProductDefinitionPackagingProperty of `characteristic`. One is added when the list is empty. */
  getCharacteristicFirstRep(): PackagedProductDefinitionPackagingProperty {
    const firstPackagedProductDefinitionPackagingProperty = this.getCharacteristic()[0];
    return firstPackagedProductDefinitionPackagingProperty === undefined
      ? this.addCharacteristic()
      : firstPackagedProductDefinitionPackagingProperty;
  }
}

modelTypeRegistry.register('PackagedProductDefinition', PackagedProductDefinition, true);

/** True when the value is a PackagedProductDefinition model instance. */
export function isPackagedProductDefinition(
  candidate: unknown
): candidate is PackagedProductDefinition {
  return candidate instanceof PackagedProductDefinition;
}

/**
 * The legal status of supply of the packaged item as classified by the regulator
 */
export class PackagedProductDefinitionLegalStatusOfSupply extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'jurisdiction',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'jurisdiction', typeCode: 'CodeableConcept' }],
    },
  ];

  /** The actual status of supply. In what situation this package type may be supplied for use (0..1) */
  code?: CodeableConcept;

  /** The place where the legal status of supply applies (0..1) */
  jurisdiction?: CodeableConcept;

  override fhirType(): string {
    return 'PackagedProductDefinition.legalStatusOfSupply';
  }

  /** FHIR JSON for this PackagedProductDefinitionLegalStatusOfSupply, typed as the plain `PackagedProductDefinitionLegalStatusOfSupply` data type. */
  override toJSON(): plainTypes.PackagedProductDefinitionLegalStatusOfSupply {
    return this.serialize() as plainTypes.PackagedProductDefinitionLegalStatusOfSupply;
  }

  /** The actual status of supply. In what situation this package type may be supplied for use (0..1) Created when absent. */
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

  /** The place where the legal status of supply applies (0..1) Created when absent. */
  getJurisdiction(): CodeableConcept {
    if (this.jurisdiction === undefined) {
      this.jurisdiction = new CodeableConcept();
    }
    return this.jurisdiction;
  }

  setJurisdiction(jurisdiction: CodeableConcept | undefined): this {
    return this.setFieldValue('jurisdiction', jurisdiction);
  }

  hasJurisdiction(): boolean {
    return this.hasFieldValue('jurisdiction');
  }
}

modelTypeRegistry.register(
  'PackagedProductDefinitionLegalStatusOfSupply',
  PackagedProductDefinitionLegalStatusOfSupply,
  false
);

/**
 * A packaging item, as a container for medically related items, possibly with other packaging items within, or a packaging component, such as bottle cap
 */
export class PackagedProductDefinitionPackaging extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'componentPart',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'componentPart', typeCode: 'boolean' }],
    },
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'integer' }],
    },
    {
      elementName: 'material',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'material', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'alternateMaterial',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'alternateMaterial', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'shelfLifeStorage',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'shelfLifeStorage', typeCode: 'ProductShelfLife' }],
    },
    {
      elementName: 'manufacturer',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'manufacturer', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
    {
      elementName: 'property',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'property', typeCode: 'PackagedProductDefinitionPackagingProperty' }],
    },
    {
      elementName: 'containedItem',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'containedItem', typeCode: 'PackagedProductDefinitionPackagingContainedItem' },
      ],
    },
    {
      elementName: 'packaging',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'packaging', typeCode: 'PackagedProductDefinitionPackaging' }],
    },
  ];

  /** An identifier that is specific to this particular part of the packaging. Including possibly a Data Carrier Identifier (0..*) */
  identifier?: Identifier[];

  /** The physical type of the container of the items (0..1) */
  type?: CodeableConcept;

  /** Is this a part of the packaging (e.g. a cap or bottle stopper), rather than the packaging itself (e.g. a bottle or vial) (0..1) */
  componentPart?: boolean;
  /** Id and extensions of the primitive `componentPart`. */
  _componentPart?: Element;

  /** The quantity of this level of packaging in the package that contains it (with the outermost level being 1) (0..1) */
  quantity?: number;
  /** Id and extensions of the primitive `quantity`. */
  _quantity?: Element;

  /** Material type of the package item (0..*) */
  material?: CodeableConcept[];

  /** A possible alternate material for this part of the packaging, that is allowed to be used instead of the usual material (0..*) */
  alternateMaterial?: CodeableConcept[];

  /** Shelf Life and storage information (0..*) */
  shelfLifeStorage?: ProductShelfLife[];

  /** Manufacturer of this packaging item (multiple means these are all potential manufacturers) (0..*) */
  manufacturer?: Reference[];

  /** General characteristics of this item (0..*) */
  property?: PackagedProductDefinitionPackagingProperty[];

  /** The item(s) within the packaging (0..*) */
  containedItem?: PackagedProductDefinitionPackagingContainedItem[];

  /** Allows containers (and parts of containers) within containers, still as a part of single packaged product (0..*) */
  packaging?: PackagedProductDefinitionPackaging[];

  override fhirType(): string {
    return 'PackagedProductDefinition.packaging';
  }

  /** FHIR JSON for this PackagedProductDefinitionPackaging, typed as the plain `PackagedProductDefinitionPackaging` data type. */
  override toJSON(): plainTypes.PackagedProductDefinitionPackaging {
    return this.serialize() as plainTypes.PackagedProductDefinitionPackaging;
  }

  /** An identifier that is specific to this particular part of the packaging. Including possibly a Data Carrier Identifier (0..*) Never undefined; an empty list is created when absent. */
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

  /** The physical type of the container of the items (0..1) Created when absent. */
  getType(): CodeableConcept {
    if (this.type === undefined) {
      this.type = new CodeableConcept();
    }
    return this.type;
  }

  setType(type: CodeableConcept | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Is this a part of the packaging (e.g. a cap or bottle stopper), rather than the packaging itself (e.g. a bottle or vial) (0..1) */
  getComponentPart(): boolean | undefined {
    return this.componentPart;
  }

  /** Sets `componentPart`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setComponentPart(componentPart: boolean | undefined): this {
    return this.setFieldValue('componentPart', componentPart);
  }

  hasComponentPart(): boolean {
    return this.hasFieldValue('componentPart');
  }

  /** The element carrying the id and extensions of `componentPart`. Created when absent. */
  getComponentPartElement(): Element {
    if (this._componentPart === undefined) {
      this._componentPart = new Element();
    }
    return this._componentPart;
  }

  setComponentPartElement(componentPartElement: Element | undefined): this {
    this._componentPart = componentPartElement;
    return this;
  }

  /** The quantity of this level of packaging in the package that contains it (with the outermost level being 1) (0..1) */
  getQuantity(): number | undefined {
    return this.quantity;
  }

  /** Sets `quantity`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setQuantity(quantity: number | undefined): this {
    return this.setFieldValue('quantity', quantity);
  }

  hasQuantity(): boolean {
    return this.hasFieldValue('quantity');
  }

  /** The element carrying the id and extensions of `quantity`. Created when absent. */
  getQuantityElement(): Element {
    if (this._quantity === undefined) {
      this._quantity = new Element();
    }
    return this._quantity;
  }

  setQuantityElement(quantityElement: Element | undefined): this {
    this._quantity = quantityElement;
    return this;
  }

  /** Material type of the package item (0..*) Never undefined; an empty list is created when absent. */
  getMaterial(): CodeableConcept[] {
    if (this.material === undefined) {
      this.material = [];
    }
    return this.material;
  }

  setMaterial(material: CodeableConcept[] | undefined): this {
    return this.setFieldValue('material', material);
  }

  hasMaterial(): boolean {
    return this.hasFieldValue('material');
  }

  /** Appends a new, empty CodeableConcept to `material` and returns it so it can be filled in. */
  addMaterial(): CodeableConcept;
  /** Appends the given CodeableConcept to `material` and returns this object for chaining. */
  addMaterial(codeableConcept: CodeableConcept): this;
  addMaterial(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('material', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('material', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `material`. One is added when the list is empty. */
  getMaterialFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getMaterial()[0];
    return firstCodeableConcept === undefined ? this.addMaterial() : firstCodeableConcept;
  }

  /** A possible alternate material for this part of the packaging, that is allowed to be used instead of the usual material (0..*) Never undefined; an empty list is created when absent. */
  getAlternateMaterial(): CodeableConcept[] {
    if (this.alternateMaterial === undefined) {
      this.alternateMaterial = [];
    }
    return this.alternateMaterial;
  }

  setAlternateMaterial(alternateMaterial: CodeableConcept[] | undefined): this {
    return this.setFieldValue('alternateMaterial', alternateMaterial);
  }

  hasAlternateMaterial(): boolean {
    return this.hasFieldValue('alternateMaterial');
  }

  /** Appends a new, empty CodeableConcept to `alternateMaterial` and returns it so it can be filled in. */
  addAlternateMaterial(): CodeableConcept;
  /** Appends the given CodeableConcept to `alternateMaterial` and returns this object for chaining. */
  addAlternateMaterial(codeableConcept: CodeableConcept): this;
  addAlternateMaterial(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('alternateMaterial', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('alternateMaterial', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `alternateMaterial`. One is added when the list is empty. */
  getAlternateMaterialFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getAlternateMaterial()[0];
    return firstCodeableConcept === undefined ? this.addAlternateMaterial() : firstCodeableConcept;
  }

  /** Shelf Life and storage information (0..*) Never undefined; an empty list is created when absent. */
  getShelfLifeStorage(): ProductShelfLife[] {
    if (this.shelfLifeStorage === undefined) {
      this.shelfLifeStorage = [];
    }
    return this.shelfLifeStorage;
  }

  setShelfLifeStorage(shelfLifeStorage: ProductShelfLife[] | undefined): this {
    return this.setFieldValue('shelfLifeStorage', shelfLifeStorage);
  }

  hasShelfLifeStorage(): boolean {
    return this.hasFieldValue('shelfLifeStorage');
  }

  /** Appends a new, empty ProductShelfLife to `shelfLifeStorage` and returns it so it can be filled in. */
  addShelfLifeStorage(): ProductShelfLife;
  /** Appends the given ProductShelfLife to `shelfLifeStorage` and returns this object for chaining. */
  addShelfLifeStorage(productShelfLife: ProductShelfLife): this;
  addShelfLifeStorage(productShelfLife?: ProductShelfLife): ProductShelfLife | this {
    if (productShelfLife !== undefined) {
      return this.addFieldValue('shelfLifeStorage', productShelfLife);
    }
    const createdProductShelfLife = new ProductShelfLife();
    this.addFieldValue('shelfLifeStorage', createdProductShelfLife);
    return createdProductShelfLife;
  }

  /** The first ProductShelfLife of `shelfLifeStorage`. One is added when the list is empty. */
  getShelfLifeStorageFirstRep(): ProductShelfLife {
    const firstProductShelfLife = this.getShelfLifeStorage()[0];
    return firstProductShelfLife === undefined ? this.addShelfLifeStorage() : firstProductShelfLife;
  }

  /** Manufacturer of this packaging item (multiple means these are all potential manufacturers) (0..*) Never undefined; an empty list is created when absent. */
  getManufacturer(): Reference[] {
    if (this.manufacturer === undefined) {
      this.manufacturer = [];
    }
    return this.manufacturer;
  }

  setManufacturer(manufacturer: Reference[] | undefined): this {
    return this.setFieldValue('manufacturer', manufacturer);
  }

  hasManufacturer(): boolean {
    return this.hasFieldValue('manufacturer');
  }

  /** Appends a new, empty Reference to `manufacturer` and returns it so it can be filled in. */
  addManufacturer(): Reference;
  /** Appends the given Reference to `manufacturer` and returns this object for chaining. */
  addManufacturer(reference: Reference): this;
  addManufacturer(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('manufacturer', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('manufacturer', createdReference);
    return createdReference;
  }

  /** The first Reference of `manufacturer`. One is added when the list is empty. */
  getManufacturerFirstRep(): Reference {
    const firstReference = this.getManufacturer()[0];
    return firstReference === undefined ? this.addManufacturer() : firstReference;
  }

  /** General characteristics of this item (0..*) Never undefined; an empty list is created when absent. */
  getProperty(): PackagedProductDefinitionPackagingProperty[] {
    if (this.property === undefined) {
      this.property = [];
    }
    return this.property;
  }

  setProperty(property: PackagedProductDefinitionPackagingProperty[] | undefined): this {
    return this.setFieldValue('property', property);
  }

  hasProperty(): boolean {
    return this.hasFieldValue('property');
  }

  /** Appends a new, empty PackagedProductDefinitionPackagingProperty to `property` and returns it so it can be filled in. */
  addProperty(): PackagedProductDefinitionPackagingProperty;
  /** Appends the given PackagedProductDefinitionPackagingProperty to `property` and returns this object for chaining. */
  addProperty(
    packagedProductDefinitionPackagingProperty: PackagedProductDefinitionPackagingProperty
  ): this;
  addProperty(
    packagedProductDefinitionPackagingProperty?: PackagedProductDefinitionPackagingProperty
  ): PackagedProductDefinitionPackagingProperty | this {
    if (packagedProductDefinitionPackagingProperty !== undefined) {
      return this.addFieldValue('property', packagedProductDefinitionPackagingProperty);
    }
    const createdPackagedProductDefinitionPackagingProperty =
      new PackagedProductDefinitionPackagingProperty();
    this.addFieldValue('property', createdPackagedProductDefinitionPackagingProperty);
    return createdPackagedProductDefinitionPackagingProperty;
  }

  /** The first PackagedProductDefinitionPackagingProperty of `property`. One is added when the list is empty. */
  getPropertyFirstRep(): PackagedProductDefinitionPackagingProperty {
    const firstPackagedProductDefinitionPackagingProperty = this.getProperty()[0];
    return firstPackagedProductDefinitionPackagingProperty === undefined
      ? this.addProperty()
      : firstPackagedProductDefinitionPackagingProperty;
  }

  /** The item(s) within the packaging (0..*) Never undefined; an empty list is created when absent. */
  getContainedItem(): PackagedProductDefinitionPackagingContainedItem[] {
    if (this.containedItem === undefined) {
      this.containedItem = [];
    }
    return this.containedItem;
  }

  setContainedItem(
    containedItem: PackagedProductDefinitionPackagingContainedItem[] | undefined
  ): this {
    return this.setFieldValue('containedItem', containedItem);
  }

  hasContainedItem(): boolean {
    return this.hasFieldValue('containedItem');
  }

  /** Appends a new, empty PackagedProductDefinitionPackagingContainedItem to `containedItem` and returns it so it can be filled in. */
  addContainedItem(): PackagedProductDefinitionPackagingContainedItem;
  /** Appends the given PackagedProductDefinitionPackagingContainedItem to `containedItem` and returns this object for chaining. */
  addContainedItem(
    packagedProductDefinitionPackagingContainedItem: PackagedProductDefinitionPackagingContainedItem
  ): this;
  addContainedItem(
    packagedProductDefinitionPackagingContainedItem?: PackagedProductDefinitionPackagingContainedItem
  ): PackagedProductDefinitionPackagingContainedItem | this {
    if (packagedProductDefinitionPackagingContainedItem !== undefined) {
      return this.addFieldValue('containedItem', packagedProductDefinitionPackagingContainedItem);
    }
    const createdPackagedProductDefinitionPackagingContainedItem =
      new PackagedProductDefinitionPackagingContainedItem();
    this.addFieldValue('containedItem', createdPackagedProductDefinitionPackagingContainedItem);
    return createdPackagedProductDefinitionPackagingContainedItem;
  }

  /** The first PackagedProductDefinitionPackagingContainedItem of `containedItem`. One is added when the list is empty. */
  getContainedItemFirstRep(): PackagedProductDefinitionPackagingContainedItem {
    const firstPackagedProductDefinitionPackagingContainedItem = this.getContainedItem()[0];
    return firstPackagedProductDefinitionPackagingContainedItem === undefined
      ? this.addContainedItem()
      : firstPackagedProductDefinitionPackagingContainedItem;
  }

  /** Allows containers (and parts of containers) within containers, still as a part of single packaged product (0..*) Never undefined; an empty list is created when absent. */
  getPackaging(): PackagedProductDefinitionPackaging[] {
    if (this.packaging === undefined) {
      this.packaging = [];
    }
    return this.packaging;
  }

  setPackaging(packaging: PackagedProductDefinitionPackaging[] | undefined): this {
    return this.setFieldValue('packaging', packaging);
  }

  hasPackaging(): boolean {
    return this.hasFieldValue('packaging');
  }

  /** Appends a new, empty PackagedProductDefinitionPackaging to `packaging` and returns it so it can be filled in. */
  addPackaging(): PackagedProductDefinitionPackaging;
  /** Appends the given PackagedProductDefinitionPackaging to `packaging` and returns this object for chaining. */
  addPackaging(packagedProductDefinitionPackaging: PackagedProductDefinitionPackaging): this;
  addPackaging(
    packagedProductDefinitionPackaging?: PackagedProductDefinitionPackaging
  ): PackagedProductDefinitionPackaging | this {
    if (packagedProductDefinitionPackaging !== undefined) {
      return this.addFieldValue('packaging', packagedProductDefinitionPackaging);
    }
    const createdPackagedProductDefinitionPackaging = new PackagedProductDefinitionPackaging();
    this.addFieldValue('packaging', createdPackagedProductDefinitionPackaging);
    return createdPackagedProductDefinitionPackaging;
  }

  /** The first PackagedProductDefinitionPackaging of `packaging`. One is added when the list is empty. */
  getPackagingFirstRep(): PackagedProductDefinitionPackaging {
    const firstPackagedProductDefinitionPackaging = this.getPackaging()[0];
    return firstPackagedProductDefinitionPackaging === undefined
      ? this.addPackaging()
      : firstPackagedProductDefinitionPackaging;
  }
}

modelTypeRegistry.register(
  'PackagedProductDefinitionPackaging',
  PackagedProductDefinitionPackaging,
  false
);

/**
 * General characteristics of this item
 */
export class PackagedProductDefinitionPackagingProperty extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'value',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'valueCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'valueQuantity', typeCode: 'Quantity' },
        { jsonKey: 'valueDate', typeCode: 'date' },
        { jsonKey: 'valueBoolean', typeCode: 'boolean' },
        { jsonKey: 'valueAttachment', typeCode: 'Attachment' },
      ],
    },
  ];

  /** A code expressing the type of characteristic (1..1) */
  type?: CodeableConcept;

  /** A value for the characteristic (0..1) */
  valueCodeableConcept?: CodeableConcept;
  /** A value for the characteristic (0..1) */
  valueQuantity?: Quantity;
  /** A value for the characteristic (0..1) */
  valueDate?: string;
  /** Id and extensions of the primitive `valueDate`. */
  _valueDate?: Element;
  /** A value for the characteristic (0..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** A value for the characteristic (0..1) */
  valueAttachment?: Attachment;

  override fhirType(): string {
    return 'PackagedProductDefinition.packaging.property';
  }

  /** FHIR JSON for this PackagedProductDefinitionPackagingProperty, typed as the plain `PackagedProductDefinitionProperty` data type. */
  override toJSON(): plainTypes.PackagedProductDefinitionProperty {
    return this.serialize() as plainTypes.PackagedProductDefinitionProperty;
  }

  /** A code expressing the type of characteristic (1..1) Created when absent. */
  getType(): CodeableConcept {
    if (this.type === undefined) {
      this.type = new CodeableConcept();
    }
    return this.type;
  }

  setType(type: CodeableConcept | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** A value for the characteristic (0..1) Whichever type of `value[x]` is set. */
  getValue(): CodeableConcept | Quantity | string | boolean | Attachment | undefined {
    return this.getChoiceValue<CodeableConcept | Quantity | string | boolean | Attachment>('value');
  }

  /** True when any type of `value[x]` is set. */
  hasValue(): boolean {
    return this.hasChoiceValue('value');
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

  getValueDate(): string | undefined {
    return this.valueDate;
  }

  /** Sets `value[x]` as date and clears every other type of it. */
  setValueDate(valueDate: string | undefined): this {
    return this.setFieldValue('valueDate', valueDate);
  }

  hasValueDate(): boolean {
    return this.hasFieldValue('valueDate');
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

  getValueAttachment(): Attachment | undefined {
    return this.valueAttachment;
  }

  /** Sets `value[x]` as Attachment and clears every other type of it. */
  setValueAttachment(valueAttachment: Attachment | undefined): this {
    return this.setFieldValue('valueAttachment', valueAttachment);
  }

  hasValueAttachment(): boolean {
    return this.hasFieldValue('valueAttachment');
  }
}

modelTypeRegistry.register(
  'PackagedProductDefinitionPackagingProperty',
  PackagedProductDefinitionPackagingProperty,
  false
);

/**
 * The item(s) within the packaging
 */
export class PackagedProductDefinitionPackagingContainedItem extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'item',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'item', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'amount',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'amount', typeCode: 'Quantity' }],
    },
  ];

  /** The actual item(s) of medication, as manufactured, or a device, or other medically related item (food, biologicals, raw materials, medical fluids, gases etc.), as contained in the package (1..1) */
  item?: CodeableReference;

  /** The number of this type of item within this packaging or for continuous items such as liquids it is the quantity (for example 25ml). See also PackagedProductDefinition.containedItemQuantity (especially the long definition) (0..1) */
  amount?: Quantity;

  override fhirType(): string {
    return 'PackagedProductDefinition.packaging.containedItem';
  }

  /** FHIR JSON for this PackagedProductDefinitionPackagingContainedItem, typed as the plain `PackagedProductDefinitionContainedItem` data type. */
  override toJSON(): plainTypes.PackagedProductDefinitionContainedItem {
    return this.serialize() as plainTypes.PackagedProductDefinitionContainedItem;
  }

  /** The actual item(s) of medication, as manufactured, or a device, or other medically related item (food, biologicals, raw materials, medical fluids, gases etc.), as contained in the package (1..1) Created when absent. */
  getItem(): CodeableReference {
    if (this.item === undefined) {
      this.item = new CodeableReference();
    }
    return this.item;
  }

  setItem(item: CodeableReference | undefined): this {
    return this.setFieldValue('item', item);
  }

  hasItem(): boolean {
    return this.hasFieldValue('item');
  }

  /** The number of this type of item within this packaging or for continuous items such as liquids it is the quantity (for example 25ml). See also PackagedProductDefinition.containedItemQuantity (especially the long definition) (0..1) Created when absent. */
  getAmount(): Quantity {
    if (this.amount === undefined) {
      this.amount = new Quantity();
    }
    return this.amount;
  }

  setAmount(amount: Quantity | undefined): this {
    return this.setFieldValue('amount', amount);
  }

  hasAmount(): boolean {
    return this.hasFieldValue('amount');
  }
}

modelTypeRegistry.register(
  'PackagedProductDefinitionPackagingContainedItem',
  PackagedProductDefinitionPackagingContainedItem,
  false
);
