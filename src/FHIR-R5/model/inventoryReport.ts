/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { Annotation } from './annotation';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { CodeableReference } from './codeableReference';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Quantity } from './quantity';
import { Reference } from './reference';

/**
 * A report of inventory or stock items.
 */
export class InventoryReport extends DomainResource {
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
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.InventoryReportStatus },
      ],
    },
    {
      elementName: 'countType',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'countType', typeCode: 'code', allowedCodes: valueSetCodes.InventoryCountType },
      ],
    },
    {
      elementName: 'operationType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'operationType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'operationTypeReason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'operationTypeReason', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'reportedDateTime',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reportedDateTime', typeCode: 'dateTime' }],
    },
    {
      elementName: 'reporter',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'reporter',
          typeCode: 'Reference',
          targetResourceTypes: ['Device', 'Patient', 'Practitioner', 'RelatedPerson'],
        },
      ],
    },
    {
      elementName: 'reportingPeriod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reportingPeriod', typeCode: 'Period' }],
    },
    {
      elementName: 'inventoryListing',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'inventoryListing', typeCode: 'InventoryReportInventoryListing' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
  ];

  readonly resourceType = 'InventoryReport';

  /** Business identifier for the report (0..*) */
  identifier?: Identifier[];

  /** draft | requested | active | entered-in-error (1..1) */
  status?: valueSetCodes.InventoryReportStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** snapshot | difference (1..1) */
  countType?: valueSetCodes.InventoryCountType;
  /** Id and extensions of the primitive `countType`. */
  _countType?: Element;

  /** addition | subtraction (0..1) */
  operationType?: CodeableConcept;

  /** The reason for this count - regular count, ad-hoc count, new arrivals, etc (0..1) */
  operationTypeReason?: CodeableConcept;

  /** When the report has been submitted (1..1) */
  reportedDateTime?: string;
  /** Id and extensions of the primitive `reportedDateTime`. */
  _reportedDateTime?: Element;

  /** Who submits the report (0..1) */
  reporter?: Reference;

  /** The period the report refers to (0..1) */
  reportingPeriod?: Period;

  /** An inventory listing section (grouped by any of the attributes) (0..*) */
  inventoryListing?: InventoryReportInventoryListing[];

  /** A note associated with the InventoryReport (0..*) */
  note?: Annotation[];

  override fhirType(): string {
    return 'InventoryReport';
  }

  /** FHIR JSON for this InventoryReport, typed as the plain `InventoryReport` data type. */
  override toJSON(): plainTypes.InventoryReport {
    return this.serialize() as plainTypes.InventoryReport;
  }

  /** Business identifier for the report (0..*) Never undefined; an empty list is created when absent. */
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

  /** draft | requested | active | entered-in-error (1..1) */
  getStatus(): valueSetCodes.InventoryReportStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.InventoryReportStatus | undefined): this {
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

  /** snapshot | difference (1..1) */
  getCountType(): valueSetCodes.InventoryCountType | undefined {
    return this.countType;
  }

  /** Sets `countType`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setCountType(countType: valueSetCodes.InventoryCountType | undefined): this {
    return this.setFieldValue('countType', countType);
  }

  hasCountType(): boolean {
    return this.hasFieldValue('countType');
  }

  /** The element carrying the id and extensions of `countType`. Created when absent. */
  getCountTypeElement(): Element {
    if (this._countType === undefined) {
      this._countType = new Element();
    }
    return this._countType;
  }

  setCountTypeElement(countTypeElement: Element | undefined): this {
    this._countType = countTypeElement;
    return this;
  }

  /** addition | subtraction (0..1) Created when absent. */
  getOperationType(): CodeableConcept {
    if (this.operationType === undefined) {
      this.operationType = new CodeableConcept();
    }
    return this.operationType;
  }

  setOperationType(operationType: CodeableConcept | undefined): this {
    return this.setFieldValue('operationType', operationType);
  }

  hasOperationType(): boolean {
    return this.hasFieldValue('operationType');
  }

  /** The reason for this count - regular count, ad-hoc count, new arrivals, etc (0..1) Created when absent. */
  getOperationTypeReason(): CodeableConcept {
    if (this.operationTypeReason === undefined) {
      this.operationTypeReason = new CodeableConcept();
    }
    return this.operationTypeReason;
  }

  setOperationTypeReason(operationTypeReason: CodeableConcept | undefined): this {
    return this.setFieldValue('operationTypeReason', operationTypeReason);
  }

  hasOperationTypeReason(): boolean {
    return this.hasFieldValue('operationTypeReason');
  }

  /** When the report has been submitted (1..1) */
  getReportedDateTime(): string | undefined {
    return this.reportedDateTime;
  }

  /** Sets `reportedDateTime`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setReportedDateTime(reportedDateTime: string | undefined): this {
    return this.setFieldValue('reportedDateTime', reportedDateTime);
  }

  hasReportedDateTime(): boolean {
    return this.hasFieldValue('reportedDateTime');
  }

  /** The element carrying the id and extensions of `reportedDateTime`. Created when absent. */
  getReportedDateTimeElement(): Element {
    if (this._reportedDateTime === undefined) {
      this._reportedDateTime = new Element();
    }
    return this._reportedDateTime;
  }

  setReportedDateTimeElement(reportedDateTimeElement: Element | undefined): this {
    this._reportedDateTime = reportedDateTimeElement;
    return this;
  }

  /** Who submits the report (0..1) Created when absent. */
  getReporter(): Reference {
    if (this.reporter === undefined) {
      this.reporter = new Reference();
    }
    return this.reporter;
  }

  setReporter(reporter: Reference | undefined): this {
    return this.setFieldValue('reporter', reporter);
  }

  hasReporter(): boolean {
    return this.hasFieldValue('reporter');
  }

  /** The period the report refers to (0..1) Created when absent. */
  getReportingPeriod(): Period {
    if (this.reportingPeriod === undefined) {
      this.reportingPeriod = new Period();
    }
    return this.reportingPeriod;
  }

  setReportingPeriod(reportingPeriod: Period | undefined): this {
    return this.setFieldValue('reportingPeriod', reportingPeriod);
  }

  hasReportingPeriod(): boolean {
    return this.hasFieldValue('reportingPeriod');
  }

  /** An inventory listing section (grouped by any of the attributes) (0..*) Never undefined; an empty list is created when absent. */
  getInventoryListing(): InventoryReportInventoryListing[] {
    if (this.inventoryListing === undefined) {
      this.inventoryListing = [];
    }
    return this.inventoryListing;
  }

  setInventoryListing(inventoryListing: InventoryReportInventoryListing[] | undefined): this {
    return this.setFieldValue('inventoryListing', inventoryListing);
  }

  hasInventoryListing(): boolean {
    return this.hasFieldValue('inventoryListing');
  }

  /** Appends a new, empty InventoryReportInventoryListing to `inventoryListing` and returns it so it can be filled in. */
  addInventoryListing(): InventoryReportInventoryListing;
  /** Appends the given InventoryReportInventoryListing to `inventoryListing` and returns this object for chaining. */
  addInventoryListing(inventoryReportInventoryListing: InventoryReportInventoryListing): this;
  addInventoryListing(
    inventoryReportInventoryListing?: InventoryReportInventoryListing
  ): InventoryReportInventoryListing | this {
    if (inventoryReportInventoryListing !== undefined) {
      return this.addFieldValue('inventoryListing', inventoryReportInventoryListing);
    }
    const createdInventoryReportInventoryListing = new InventoryReportInventoryListing();
    this.addFieldValue('inventoryListing', createdInventoryReportInventoryListing);
    return createdInventoryReportInventoryListing;
  }

  /** The first InventoryReportInventoryListing of `inventoryListing`. One is added when the list is empty. */
  getInventoryListingFirstRep(): InventoryReportInventoryListing {
    const firstInventoryReportInventoryListing = this.getInventoryListing()[0];
    return firstInventoryReportInventoryListing === undefined
      ? this.addInventoryListing()
      : firstInventoryReportInventoryListing;
  }

  /** A note associated with the InventoryReport (0..*) Never undefined; an empty list is created when absent. */
  getNote(): Annotation[] {
    if (this.note === undefined) {
      this.note = [];
    }
    return this.note;
  }

  setNote(note: Annotation[] | undefined): this {
    return this.setFieldValue('note', note);
  }

  hasNote(): boolean {
    return this.hasFieldValue('note');
  }

  /** Appends a new, empty Annotation to `note` and returns it so it can be filled in. */
  addNote(): Annotation;
  /** Appends the given Annotation to `note` and returns this object for chaining. */
  addNote(annotation: Annotation): this;
  addNote(annotation?: Annotation): Annotation | this {
    if (annotation !== undefined) {
      return this.addFieldValue('note', annotation);
    }
    const createdAnnotation = new Annotation();
    this.addFieldValue('note', createdAnnotation);
    return createdAnnotation;
  }

  /** The first Annotation of `note`. One is added when the list is empty. */
  getNoteFirstRep(): Annotation {
    const firstAnnotation = this.getNote()[0];
    return firstAnnotation === undefined ? this.addNote() : firstAnnotation;
  }
}

modelTypeRegistry.register('InventoryReport', InventoryReport, true);

/** True when the value is a InventoryReport model instance. */
export function isInventoryReport(candidate: unknown): candidate is InventoryReport {
  return candidate instanceof InventoryReport;
}

/**
 * An inventory listing section (grouped by any of the attributes)
 */
export class InventoryReportInventoryListing extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'location',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'location', typeCode: 'Reference', targetResourceTypes: ['Location'] }],
    },
    {
      elementName: 'itemStatus',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'itemStatus', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'countingDateTime',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'countingDateTime', typeCode: 'dateTime' }],
    },
    {
      elementName: 'item',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'item', typeCode: 'InventoryReportInventoryListingItem' }],
    },
  ];

  /** Location of the inventory items (0..1) */
  location?: Reference;

  /** The status of the items that are being reported (0..1) */
  itemStatus?: CodeableConcept;

  /** The date and time when the items were counted (0..1) */
  countingDateTime?: string;
  /** Id and extensions of the primitive `countingDateTime`. */
  _countingDateTime?: Element;

  /** The item or items in this listing (0..*) */
  item?: InventoryReportInventoryListingItem[];

  override fhirType(): string {
    return 'InventoryReport.inventoryListing';
  }

  /** FHIR JSON for this InventoryReportInventoryListing, typed as the plain `InventoryReportInventoryListing` data type. */
  override toJSON(): plainTypes.InventoryReportInventoryListing {
    return this.serialize() as plainTypes.InventoryReportInventoryListing;
  }

  /** Location of the inventory items (0..1) Created when absent. */
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

  /** The status of the items that are being reported (0..1) Created when absent. */
  getItemStatus(): CodeableConcept {
    if (this.itemStatus === undefined) {
      this.itemStatus = new CodeableConcept();
    }
    return this.itemStatus;
  }

  setItemStatus(itemStatus: CodeableConcept | undefined): this {
    return this.setFieldValue('itemStatus', itemStatus);
  }

  hasItemStatus(): boolean {
    return this.hasFieldValue('itemStatus');
  }

  /** The date and time when the items were counted (0..1) */
  getCountingDateTime(): string | undefined {
    return this.countingDateTime;
  }

  /** Sets `countingDateTime`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setCountingDateTime(countingDateTime: string | undefined): this {
    return this.setFieldValue('countingDateTime', countingDateTime);
  }

  hasCountingDateTime(): boolean {
    return this.hasFieldValue('countingDateTime');
  }

  /** The element carrying the id and extensions of `countingDateTime`. Created when absent. */
  getCountingDateTimeElement(): Element {
    if (this._countingDateTime === undefined) {
      this._countingDateTime = new Element();
    }
    return this._countingDateTime;
  }

  setCountingDateTimeElement(countingDateTimeElement: Element | undefined): this {
    this._countingDateTime = countingDateTimeElement;
    return this;
  }

  /** The item or items in this listing (0..*) Never undefined; an empty list is created when absent. */
  getItem(): InventoryReportInventoryListingItem[] {
    if (this.item === undefined) {
      this.item = [];
    }
    return this.item;
  }

  setItem(item: InventoryReportInventoryListingItem[] | undefined): this {
    return this.setFieldValue('item', item);
  }

  hasItem(): boolean {
    return this.hasFieldValue('item');
  }

  /** Appends a new, empty InventoryReportInventoryListingItem to `item` and returns it so it can be filled in. */
  addItem(): InventoryReportInventoryListingItem;
  /** Appends the given InventoryReportInventoryListingItem to `item` and returns this object for chaining. */
  addItem(inventoryReportInventoryListingItem: InventoryReportInventoryListingItem): this;
  addItem(
    inventoryReportInventoryListingItem?: InventoryReportInventoryListingItem
  ): InventoryReportInventoryListingItem | this {
    if (inventoryReportInventoryListingItem !== undefined) {
      return this.addFieldValue('item', inventoryReportInventoryListingItem);
    }
    const createdInventoryReportInventoryListingItem = new InventoryReportInventoryListingItem();
    this.addFieldValue('item', createdInventoryReportInventoryListingItem);
    return createdInventoryReportInventoryListingItem;
  }

  /** The first InventoryReportInventoryListingItem of `item`. One is added when the list is empty. */
  getItemFirstRep(): InventoryReportInventoryListingItem {
    const firstInventoryReportInventoryListingItem = this.getItem()[0];
    return firstInventoryReportInventoryListingItem === undefined
      ? this.addItem()
      : firstInventoryReportInventoryListingItem;
  }
}

modelTypeRegistry.register(
  'InventoryReportInventoryListing',
  InventoryReportInventoryListing,
  false
);

/**
 * The item or items in this listing
 */
export class InventoryReportInventoryListingItem extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'category',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'quantity',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'item',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'item', typeCode: 'CodeableReference' }],
    },
  ];

  /** The inventory category or classification of the items being reported (0..1) */
  category?: CodeableConcept;

  /** The quantity of the item or items being reported (1..1) */
  quantity?: Quantity;

  /** The code or reference to the item type (1..1) */
  item?: CodeableReference;

  override fhirType(): string {
    return 'InventoryReport.inventoryListing.item';
  }

  /** FHIR JSON for this InventoryReportInventoryListingItem, typed as the plain `InventoryReportItem` data type. */
  override toJSON(): plainTypes.InventoryReportItem {
    return this.serialize() as plainTypes.InventoryReportItem;
  }

  /** The inventory category or classification of the items being reported (0..1) Created when absent. */
  getCategory(): CodeableConcept {
    if (this.category === undefined) {
      this.category = new CodeableConcept();
    }
    return this.category;
  }

  setCategory(category: CodeableConcept | undefined): this {
    return this.setFieldValue('category', category);
  }

  hasCategory(): boolean {
    return this.hasFieldValue('category');
  }

  /** The quantity of the item or items being reported (1..1) Created when absent. */
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

  /** The code or reference to the item type (1..1) Created when absent. */
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
}

modelTypeRegistry.register(
  'InventoryReportInventoryListingItem',
  InventoryReportInventoryListingItem,
  false
);
