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
import { Period } from './period';
import { Reference } from './reference';

/**
 * Catalog entries are wrappers that contextualize items included in a catalog.
 */
export class CatalogEntry extends DomainResource {
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
      elementName: 'orderable',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'orderable', typeCode: 'boolean' }],
    },
    {
      elementName: 'referencedItem',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'referencedItem',
          typeCode: 'Reference',
          targetResourceTypes: [
            'ActivityDefinition',
            'Binary',
            'Device',
            'HealthcareService',
            'Medication',
            'ObservationDefinition',
            'Organization',
            'PlanDefinition',
            'Practitioner',
            'PractitionerRole',
            'SpecimenDefinition',
          ],
        },
      ],
    },
    {
      elementName: 'additionalIdentifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'additionalIdentifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'classification',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'classification', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'status',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.PublicationStatus },
      ],
    },
    {
      elementName: 'validityPeriod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'validityPeriod', typeCode: 'Period' }],
    },
    {
      elementName: 'validTo',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'validTo', typeCode: 'dateTime' }],
    },
    {
      elementName: 'lastUpdated',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'lastUpdated', typeCode: 'dateTime' }],
    },
    {
      elementName: 'additionalCharacteristic',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'additionalCharacteristic', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'additionalClassification',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'additionalClassification', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'relatedEntry',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'relatedEntry', typeCode: 'CatalogEntryRelatedEntry' }],
    },
  ];

  readonly resourceType = 'CatalogEntry';

  /** Unique identifier of the catalog item (0..*) */
  identifier?: Identifier[];

  /** The type of item - medication, device, service, protocol or other (0..1) */
  type?: CodeableConcept;

  /** Whether the entry represents an orderable item (1..1) */
  orderable?: boolean;
  /** Id and extensions of the primitive `orderable`. */
  _orderable?: Element;

  /** The item that is being defined (1..1) */
  referencedItem?: Reference;

  /** Any additional identifier(s) for the catalog item, in the same granularity or concept (0..*) */
  additionalIdentifier?: Identifier[];

  /** Classification (category or class) of the item entry (0..*) */
  classification?: CodeableConcept[];

  /** draft | active | retired | unknown (0..1) */
  status?: valueSetCodes.PublicationStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** The time period in which this catalog entry is expected to be active (0..1) */
  validityPeriod?: Period;

  /** The date until which this catalog entry is expected to be active (0..1) */
  validTo?: string;
  /** Id and extensions of the primitive `validTo`. */
  _validTo?: Element;

  /** When was this catalog last updated (0..1) */
  lastUpdated?: string;
  /** Id and extensions of the primitive `lastUpdated`. */
  _lastUpdated?: Element;

  /** Additional characteristics of the catalog entry (0..*) */
  additionalCharacteristic?: CodeableConcept[];

  /** Additional classification of the catalog entry (0..*) */
  additionalClassification?: CodeableConcept[];

  /** An item that this catalog entry is related to (0..*) */
  relatedEntry?: CatalogEntryRelatedEntry[];

  override fhirType(): string {
    return 'CatalogEntry';
  }

  /** FHIR JSON for this CatalogEntry, typed as the plain `CatalogEntry` data type. */
  override toJSON(): plainTypes.CatalogEntry {
    return this.serialize() as plainTypes.CatalogEntry;
  }

  /** Unique identifier of the catalog item (0..*) Never undefined; an empty list is created when absent. */
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

  /** The type of item - medication, device, service, protocol or other (0..1) Created when absent. */
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

  /** Whether the entry represents an orderable item (1..1) */
  getOrderable(): boolean | undefined {
    return this.orderable;
  }

  /** Sets `orderable`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setOrderable(orderable: boolean | undefined): this {
    return this.setFieldValue('orderable', orderable);
  }

  hasOrderable(): boolean {
    return this.hasFieldValue('orderable');
  }

  /** The element carrying the id and extensions of `orderable`. Created when absent. */
  getOrderableElement(): Element {
    if (this._orderable === undefined) {
      this._orderable = new Element();
    }
    return this._orderable;
  }

  setOrderableElement(orderableElement: Element | undefined): this {
    this._orderable = orderableElement;
    return this;
  }

  /** The item that is being defined (1..1) Created when absent. */
  getReferencedItem(): Reference {
    if (this.referencedItem === undefined) {
      this.referencedItem = new Reference();
    }
    return this.referencedItem;
  }

  setReferencedItem(referencedItem: Reference | undefined): this {
    return this.setFieldValue('referencedItem', referencedItem);
  }

  hasReferencedItem(): boolean {
    return this.hasFieldValue('referencedItem');
  }

  /** Any additional identifier(s) for the catalog item, in the same granularity or concept (0..*) Never undefined; an empty list is created when absent. */
  getAdditionalIdentifier(): Identifier[] {
    if (this.additionalIdentifier === undefined) {
      this.additionalIdentifier = [];
    }
    return this.additionalIdentifier;
  }

  setAdditionalIdentifier(additionalIdentifier: Identifier[] | undefined): this {
    return this.setFieldValue('additionalIdentifier', additionalIdentifier);
  }

  hasAdditionalIdentifier(): boolean {
    return this.hasFieldValue('additionalIdentifier');
  }

  /** Appends a new, empty Identifier to `additionalIdentifier` and returns it so it can be filled in. */
  addAdditionalIdentifier(): Identifier;
  /** Appends the given Identifier to `additionalIdentifier` and returns this object for chaining. */
  addAdditionalIdentifier(identifier: Identifier): this;
  addAdditionalIdentifier(identifier?: Identifier): Identifier | this {
    if (identifier !== undefined) {
      return this.addFieldValue('additionalIdentifier', identifier);
    }
    const createdIdentifier = new Identifier();
    this.addFieldValue('additionalIdentifier', createdIdentifier);
    return createdIdentifier;
  }

  /** The first Identifier of `additionalIdentifier`. One is added when the list is empty. */
  getAdditionalIdentifierFirstRep(): Identifier {
    const firstIdentifier = this.getAdditionalIdentifier()[0];
    return firstIdentifier === undefined ? this.addAdditionalIdentifier() : firstIdentifier;
  }

  /** Classification (category or class) of the item entry (0..*) Never undefined; an empty list is created when absent. */
  getClassification(): CodeableConcept[] {
    if (this.classification === undefined) {
      this.classification = [];
    }
    return this.classification;
  }

  setClassification(classification: CodeableConcept[] | undefined): this {
    return this.setFieldValue('classification', classification);
  }

  hasClassification(): boolean {
    return this.hasFieldValue('classification');
  }

  /** Appends a new, empty CodeableConcept to `classification` and returns it so it can be filled in. */
  addClassification(): CodeableConcept;
  /** Appends the given CodeableConcept to `classification` and returns this object for chaining. */
  addClassification(codeableConcept: CodeableConcept): this;
  addClassification(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('classification', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('classification', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `classification`. One is added when the list is empty. */
  getClassificationFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getClassification()[0];
    return firstCodeableConcept === undefined ? this.addClassification() : firstCodeableConcept;
  }

  /** draft | active | retired | unknown (0..1) */
  getStatus(): valueSetCodes.PublicationStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.PublicationStatus | undefined): this {
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

  /** The time period in which this catalog entry is expected to be active (0..1) Created when absent. */
  getValidityPeriod(): Period {
    if (this.validityPeriod === undefined) {
      this.validityPeriod = new Period();
    }
    return this.validityPeriod;
  }

  setValidityPeriod(validityPeriod: Period | undefined): this {
    return this.setFieldValue('validityPeriod', validityPeriod);
  }

  hasValidityPeriod(): boolean {
    return this.hasFieldValue('validityPeriod');
  }

  /** The date until which this catalog entry is expected to be active (0..1) */
  getValidTo(): string | undefined {
    return this.validTo;
  }

  /** Sets `validTo`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setValidTo(validTo: string | undefined): this {
    return this.setFieldValue('validTo', validTo);
  }

  hasValidTo(): boolean {
    return this.hasFieldValue('validTo');
  }

  /** The element carrying the id and extensions of `validTo`. Created when absent. */
  getValidToElement(): Element {
    if (this._validTo === undefined) {
      this._validTo = new Element();
    }
    return this._validTo;
  }

  setValidToElement(validToElement: Element | undefined): this {
    this._validTo = validToElement;
    return this;
  }

  /** When was this catalog last updated (0..1) */
  getLastUpdated(): string | undefined {
    return this.lastUpdated;
  }

  /** Sets `lastUpdated`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setLastUpdated(lastUpdated: string | undefined): this {
    return this.setFieldValue('lastUpdated', lastUpdated);
  }

  hasLastUpdated(): boolean {
    return this.hasFieldValue('lastUpdated');
  }

  /** The element carrying the id and extensions of `lastUpdated`. Created when absent. */
  getLastUpdatedElement(): Element {
    if (this._lastUpdated === undefined) {
      this._lastUpdated = new Element();
    }
    return this._lastUpdated;
  }

  setLastUpdatedElement(lastUpdatedElement: Element | undefined): this {
    this._lastUpdated = lastUpdatedElement;
    return this;
  }

  /** Additional characteristics of the catalog entry (0..*) Never undefined; an empty list is created when absent. */
  getAdditionalCharacteristic(): CodeableConcept[] {
    if (this.additionalCharacteristic === undefined) {
      this.additionalCharacteristic = [];
    }
    return this.additionalCharacteristic;
  }

  setAdditionalCharacteristic(additionalCharacteristic: CodeableConcept[] | undefined): this {
    return this.setFieldValue('additionalCharacteristic', additionalCharacteristic);
  }

  hasAdditionalCharacteristic(): boolean {
    return this.hasFieldValue('additionalCharacteristic');
  }

  /** Appends a new, empty CodeableConcept to `additionalCharacteristic` and returns it so it can be filled in. */
  addAdditionalCharacteristic(): CodeableConcept;
  /** Appends the given CodeableConcept to `additionalCharacteristic` and returns this object for chaining. */
  addAdditionalCharacteristic(codeableConcept: CodeableConcept): this;
  addAdditionalCharacteristic(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('additionalCharacteristic', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('additionalCharacteristic', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `additionalCharacteristic`. One is added when the list is empty. */
  getAdditionalCharacteristicFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getAdditionalCharacteristic()[0];
    return firstCodeableConcept === undefined
      ? this.addAdditionalCharacteristic()
      : firstCodeableConcept;
  }

  /** Additional classification of the catalog entry (0..*) Never undefined; an empty list is created when absent. */
  getAdditionalClassification(): CodeableConcept[] {
    if (this.additionalClassification === undefined) {
      this.additionalClassification = [];
    }
    return this.additionalClassification;
  }

  setAdditionalClassification(additionalClassification: CodeableConcept[] | undefined): this {
    return this.setFieldValue('additionalClassification', additionalClassification);
  }

  hasAdditionalClassification(): boolean {
    return this.hasFieldValue('additionalClassification');
  }

  /** Appends a new, empty CodeableConcept to `additionalClassification` and returns it so it can be filled in. */
  addAdditionalClassification(): CodeableConcept;
  /** Appends the given CodeableConcept to `additionalClassification` and returns this object for chaining. */
  addAdditionalClassification(codeableConcept: CodeableConcept): this;
  addAdditionalClassification(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('additionalClassification', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('additionalClassification', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `additionalClassification`. One is added when the list is empty. */
  getAdditionalClassificationFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getAdditionalClassification()[0];
    return firstCodeableConcept === undefined
      ? this.addAdditionalClassification()
      : firstCodeableConcept;
  }

  /** An item that this catalog entry is related to (0..*) Never undefined; an empty list is created when absent. */
  getRelatedEntry(): CatalogEntryRelatedEntry[] {
    if (this.relatedEntry === undefined) {
      this.relatedEntry = [];
    }
    return this.relatedEntry;
  }

  setRelatedEntry(relatedEntry: CatalogEntryRelatedEntry[] | undefined): this {
    return this.setFieldValue('relatedEntry', relatedEntry);
  }

  hasRelatedEntry(): boolean {
    return this.hasFieldValue('relatedEntry');
  }

  /** Appends a new, empty CatalogEntryRelatedEntry to `relatedEntry` and returns it so it can be filled in. */
  addRelatedEntry(): CatalogEntryRelatedEntry;
  /** Appends the given CatalogEntryRelatedEntry to `relatedEntry` and returns this object for chaining. */
  addRelatedEntry(catalogEntryRelatedEntry: CatalogEntryRelatedEntry): this;
  addRelatedEntry(
    catalogEntryRelatedEntry?: CatalogEntryRelatedEntry
  ): CatalogEntryRelatedEntry | this {
    if (catalogEntryRelatedEntry !== undefined) {
      return this.addFieldValue('relatedEntry', catalogEntryRelatedEntry);
    }
    const createdCatalogEntryRelatedEntry = new CatalogEntryRelatedEntry();
    this.addFieldValue('relatedEntry', createdCatalogEntryRelatedEntry);
    return createdCatalogEntryRelatedEntry;
  }

  /** The first CatalogEntryRelatedEntry of `relatedEntry`. One is added when the list is empty. */
  getRelatedEntryFirstRep(): CatalogEntryRelatedEntry {
    const firstCatalogEntryRelatedEntry = this.getRelatedEntry()[0];
    return firstCatalogEntryRelatedEntry === undefined
      ? this.addRelatedEntry()
      : firstCatalogEntryRelatedEntry;
  }
}

modelTypeRegistry.register('CatalogEntry', CatalogEntry, true);

/** True when the value is a CatalogEntry model instance. */
export function isCatalogEntry(candidate: unknown): candidate is CatalogEntry {
  return candidate instanceof CatalogEntry;
}

/**
 * An item that this catalog entry is related to
 */
export class CatalogEntryRelatedEntry extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'relationtype',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'relationtype',
          typeCode: 'code',
          allowedCodes: valueSetCodes.CatalogEntryRelationType,
        },
      ],
    },
    {
      elementName: 'item',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'item', typeCode: 'Reference', targetResourceTypes: ['CatalogEntry'] }],
    },
  ];

  /** triggers | is-replaced-by (1..1) */
  relationtype?: valueSetCodes.CatalogEntryRelationType;
  /** Id and extensions of the primitive `relationtype`. */
  _relationtype?: Element;

  /** The reference to the related item (1..1) */
  item?: Reference;

  override fhirType(): string {
    return 'CatalogEntry.relatedEntry';
  }

  /** FHIR JSON for this CatalogEntryRelatedEntry, typed as the plain `CatalogEntryRelatedEntry` data type. */
  override toJSON(): plainTypes.CatalogEntryRelatedEntry {
    return this.serialize() as plainTypes.CatalogEntryRelatedEntry;
  }

  /** triggers | is-replaced-by (1..1) */
  getRelationtype(): valueSetCodes.CatalogEntryRelationType | undefined {
    return this.relationtype;
  }

  /** Sets `relationtype`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setRelationtype(relationtype: valueSetCodes.CatalogEntryRelationType | undefined): this {
    return this.setFieldValue('relationtype', relationtype);
  }

  hasRelationtype(): boolean {
    return this.hasFieldValue('relationtype');
  }

  /** The element carrying the id and extensions of `relationtype`. Created when absent. */
  getRelationtypeElement(): Element {
    if (this._relationtype === undefined) {
      this._relationtype = new Element();
    }
    return this._relationtype;
  }

  setRelationtypeElement(relationtypeElement: Element | undefined): this {
    this._relationtype = relationtypeElement;
    return this;
  }

  /** The reference to the related item (1..1) Created when absent. */
  getItem(): Reference {
    if (this.item === undefined) {
      this.item = new Reference();
    }
    return this.item;
  }

  setItem(item: Reference | undefined): this {
    return this.setFieldValue('item', item);
  }

  hasItem(): boolean {
    return this.hasFieldValue('item');
  }
}

modelTypeRegistry.register('CatalogEntryRelatedEntry', CatalogEntryRelatedEntry, false);
