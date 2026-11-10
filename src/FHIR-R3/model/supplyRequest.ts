/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Quantity } from './quantity';
import { Reference } from './reference';
import { Timing } from './timing';

/**
 * Base StructureDefinition for SupplyRequest Resource
 */
export class SupplyRequest extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'status',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.SupplyRequestStatus },
      ],
    },
    {
      elementName: 'category',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'priority',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'priority', typeCode: 'code', allowedCodes: valueSetCodes.RequestPriority },
      ],
    },
    {
      elementName: 'orderedItem',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'orderedItem', typeCode: 'SupplyRequestOrderedItem' }],
    },
    {
      elementName: 'occurrence',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'occurrenceDateTime', typeCode: 'dateTime' },
        { jsonKey: 'occurrencePeriod', typeCode: 'Period' },
        { jsonKey: 'occurrenceTiming', typeCode: 'Timing' },
      ],
    },
    {
      elementName: 'authoredOn',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'authoredOn', typeCode: 'dateTime' }],
    },
    {
      elementName: 'requester',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'requester', typeCode: 'SupplyRequestRequester' }],
    },
    {
      elementName: 'supplier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'supplier', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
    {
      elementName: 'reason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'reasonCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'reasonReference', typeCode: 'Reference' },
      ],
    },
    {
      elementName: 'deliverFrom',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'deliverFrom',
          typeCode: 'Reference',
          targetResourceTypes: ['Location', 'Organization'],
        },
      ],
    },
    {
      elementName: 'deliverTo',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'deliverTo',
          typeCode: 'Reference',
          targetResourceTypes: ['Location', 'Organization', 'Patient'],
        },
      ],
    },
  ];

  readonly resourceType = 'SupplyRequest';

  /** Unique identifier (0..1) */
  identifier?: Identifier;

  /** draft | active | suspended + (0..1) */
  status?: valueSetCodes.SupplyRequestStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** The kind of supply (central, non-stock, etc.) (0..1) */
  category?: CodeableConcept;

  /** routine | urgent | asap | stat (0..1) */
  priority?: valueSetCodes.RequestPriority;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;

  /** The item being requested (0..1) */
  orderedItem?: SupplyRequestOrderedItem;

  /** When the request should be fulfilled (0..1) */
  occurrenceDateTime?: string;
  /** Id and extensions of the primitive `occurrenceDateTime`. */
  _occurrenceDateTime?: Element;
  /** When the request should be fulfilled (0..1) */
  occurrencePeriod?: Period;
  /** When the request should be fulfilled (0..1) */
  occurrenceTiming?: Timing;

  /** When the request was made (0..1) */
  authoredOn?: string;
  /** Id and extensions of the primitive `authoredOn`. */
  _authoredOn?: Element;

  /** Who/what is requesting service (0..1) */
  requester?: SupplyRequestRequester;

  /** Who is intended to fulfill the request (0..*) */
  supplier?: Reference[];

  /** Why the supply item was requested (0..1) */
  reasonCodeableConcept?: CodeableConcept;
  /** Why the supply item was requested (0..1) */
  reasonReference?: Reference;

  /** The origin of the supply (0..1) */
  deliverFrom?: Reference;

  /** The destination of the supply (0..1) */
  deliverTo?: Reference;

  override fhirType(): string {
    return 'SupplyRequest';
  }

  /** FHIR JSON for this SupplyRequest, typed as the plain `SupplyRequest` data type. */
  override toJSON(): plainTypes.SupplyRequest {
    return this.serialize() as plainTypes.SupplyRequest;
  }

  /** Unique identifier (0..1) Created when absent. */
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

  /** draft | active | suspended + (0..1) */
  getStatus(): valueSetCodes.SupplyRequestStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.SupplyRequestStatus | undefined): this {
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

  /** The kind of supply (central, non-stock, etc.) (0..1) Created when absent. */
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

  /** routine | urgent | asap | stat (0..1) */
  getPriority(): valueSetCodes.RequestPriority | undefined {
    return this.priority;
  }

  /** Sets `priority`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setPriority(priority: valueSetCodes.RequestPriority | undefined): this {
    return this.setFieldValue('priority', priority);
  }

  hasPriority(): boolean {
    return this.hasFieldValue('priority');
  }

  /** The element carrying the id and extensions of `priority`. Created when absent. */
  getPriorityElement(): Element {
    if (this._priority === undefined) {
      this._priority = new Element();
    }
    return this._priority;
  }

  setPriorityElement(priorityElement: Element | undefined): this {
    this._priority = priorityElement;
    return this;
  }

  /** The item being requested (0..1) Created when absent. */
  getOrderedItem(): SupplyRequestOrderedItem {
    if (this.orderedItem === undefined) {
      this.orderedItem = new SupplyRequestOrderedItem();
    }
    return this.orderedItem;
  }

  setOrderedItem(orderedItem: SupplyRequestOrderedItem | undefined): this {
    return this.setFieldValue('orderedItem', orderedItem);
  }

  hasOrderedItem(): boolean {
    return this.hasFieldValue('orderedItem');
  }

  /** When the request should be fulfilled (0..1) Whichever type of `occurrence[x]` is set. */
  getOccurrence(): string | Period | Timing | undefined {
    return this.getChoiceValue<string | Period | Timing>('occurrence');
  }

  /** True when any type of `occurrence[x]` is set. */
  hasOccurrence(): boolean {
    return this.hasChoiceValue('occurrence');
  }

  getOccurrenceDateTime(): string | undefined {
    return this.occurrenceDateTime;
  }

  /** Sets `occurrence[x]` as dateTime and clears every other type of it. */
  setOccurrenceDateTime(occurrenceDateTime: string | undefined): this {
    return this.setFieldValue('occurrenceDateTime', occurrenceDateTime);
  }

  hasOccurrenceDateTime(): boolean {
    return this.hasFieldValue('occurrenceDateTime');
  }

  getOccurrencePeriod(): Period | undefined {
    return this.occurrencePeriod;
  }

  /** Sets `occurrence[x]` as Period and clears every other type of it. */
  setOccurrencePeriod(occurrencePeriod: Period | undefined): this {
    return this.setFieldValue('occurrencePeriod', occurrencePeriod);
  }

  hasOccurrencePeriod(): boolean {
    return this.hasFieldValue('occurrencePeriod');
  }

  getOccurrenceTiming(): Timing | undefined {
    return this.occurrenceTiming;
  }

  /** Sets `occurrence[x]` as Timing and clears every other type of it. */
  setOccurrenceTiming(occurrenceTiming: Timing | undefined): this {
    return this.setFieldValue('occurrenceTiming', occurrenceTiming);
  }

  hasOccurrenceTiming(): boolean {
    return this.hasFieldValue('occurrenceTiming');
  }

  /** When the request was made (0..1) */
  getAuthoredOn(): string | undefined {
    return this.authoredOn;
  }

  /** Sets `authoredOn`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setAuthoredOn(authoredOn: string | undefined): this {
    return this.setFieldValue('authoredOn', authoredOn);
  }

  hasAuthoredOn(): boolean {
    return this.hasFieldValue('authoredOn');
  }

  /** The element carrying the id and extensions of `authoredOn`. Created when absent. */
  getAuthoredOnElement(): Element {
    if (this._authoredOn === undefined) {
      this._authoredOn = new Element();
    }
    return this._authoredOn;
  }

  setAuthoredOnElement(authoredOnElement: Element | undefined): this {
    this._authoredOn = authoredOnElement;
    return this;
  }

  /** Who/what is requesting service (0..1) Created when absent. */
  getRequester(): SupplyRequestRequester {
    if (this.requester === undefined) {
      this.requester = new SupplyRequestRequester();
    }
    return this.requester;
  }

  setRequester(requester: SupplyRequestRequester | undefined): this {
    return this.setFieldValue('requester', requester);
  }

  hasRequester(): boolean {
    return this.hasFieldValue('requester');
  }

  /** Who is intended to fulfill the request (0..*) Never undefined; an empty list is created when absent. */
  getSupplier(): Reference[] {
    if (this.supplier === undefined) {
      this.supplier = [];
    }
    return this.supplier;
  }

  setSupplier(supplier: Reference[] | undefined): this {
    return this.setFieldValue('supplier', supplier);
  }

  hasSupplier(): boolean {
    return this.hasFieldValue('supplier');
  }

  /** Appends a new, empty Reference to `supplier` and returns it so it can be filled in. */
  addSupplier(): Reference;
  /** Appends the given Reference to `supplier` and returns this object for chaining. */
  addSupplier(reference: Reference): this;
  addSupplier(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('supplier', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('supplier', createdReference);
    return createdReference;
  }

  /** The first Reference of `supplier`. One is added when the list is empty. */
  getSupplierFirstRep(): Reference {
    const firstReference = this.getSupplier()[0];
    return firstReference === undefined ? this.addSupplier() : firstReference;
  }

  /** Why the supply item was requested (0..1) Whichever type of `reason[x]` is set. */
  getReason(): CodeableConcept | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | Reference>('reason');
  }

  /** True when any type of `reason[x]` is set. */
  hasReason(): boolean {
    return this.hasChoiceValue('reason');
  }

  getReasonCodeableConcept(): CodeableConcept | undefined {
    return this.reasonCodeableConcept;
  }

  /** Sets `reason[x]` as CodeableConcept and clears every other type of it. */
  setReasonCodeableConcept(reasonCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('reasonCodeableConcept', reasonCodeableConcept);
  }

  hasReasonCodeableConcept(): boolean {
    return this.hasFieldValue('reasonCodeableConcept');
  }

  getReasonReference(): Reference | undefined {
    return this.reasonReference;
  }

  /** Sets `reason[x]` as Reference and clears every other type of it. */
  setReasonReference(reasonReference: Reference | undefined): this {
    return this.setFieldValue('reasonReference', reasonReference);
  }

  hasReasonReference(): boolean {
    return this.hasFieldValue('reasonReference');
  }

  /** The origin of the supply (0..1) Created when absent. */
  getDeliverFrom(): Reference {
    if (this.deliverFrom === undefined) {
      this.deliverFrom = new Reference();
    }
    return this.deliverFrom;
  }

  setDeliverFrom(deliverFrom: Reference | undefined): this {
    return this.setFieldValue('deliverFrom', deliverFrom);
  }

  hasDeliverFrom(): boolean {
    return this.hasFieldValue('deliverFrom');
  }

  /** The destination of the supply (0..1) Created when absent. */
  getDeliverTo(): Reference {
    if (this.deliverTo === undefined) {
      this.deliverTo = new Reference();
    }
    return this.deliverTo;
  }

  setDeliverTo(deliverTo: Reference | undefined): this {
    return this.setFieldValue('deliverTo', deliverTo);
  }

  hasDeliverTo(): boolean {
    return this.hasFieldValue('deliverTo');
  }
}

modelTypeRegistry.register('SupplyRequest', SupplyRequest, true);

/** True when the value is a SupplyRequest model instance. */
export function isSupplyRequest(candidate: unknown): candidate is SupplyRequest {
  return candidate instanceof SupplyRequest;
}

/**
 * The item being requested
 */
export class SupplyRequestOrderedItem extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'quantity',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'item',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'itemCodeableConcept', typeCode: 'CodeableConcept' },
        {
          jsonKey: 'itemReference',
          typeCode: 'Reference',
          targetResourceTypes: ['Device', 'Medication', 'Substance'],
        },
      ],
    },
  ];

  /** The requested amount of the item indicated (1..1) */
  quantity?: Quantity;

  /** Medication, Substance, or Device requested to be supplied (0..1) */
  itemCodeableConcept?: CodeableConcept;
  /** Medication, Substance, or Device requested to be supplied (0..1) */
  itemReference?: Reference;

  override fhirType(): string {
    return 'SupplyRequest.orderedItem';
  }

  /** FHIR JSON for this SupplyRequestOrderedItem, typed as the plain `SupplyRequestOrderedItem` data type. */
  override toJSON(): plainTypes.SupplyRequestOrderedItem {
    return this.serialize() as plainTypes.SupplyRequestOrderedItem;
  }

  /** The requested amount of the item indicated (1..1) Created when absent. */
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

  /** Medication, Substance, or Device requested to be supplied (0..1) Whichever type of `item[x]` is set. */
  getItem(): CodeableConcept | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | Reference>('item');
  }

  /** True when any type of `item[x]` is set. */
  hasItem(): boolean {
    return this.hasChoiceValue('item');
  }

  getItemCodeableConcept(): CodeableConcept | undefined {
    return this.itemCodeableConcept;
  }

  /** Sets `item[x]` as CodeableConcept and clears every other type of it. */
  setItemCodeableConcept(itemCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('itemCodeableConcept', itemCodeableConcept);
  }

  hasItemCodeableConcept(): boolean {
    return this.hasFieldValue('itemCodeableConcept');
  }

  getItemReference(): Reference | undefined {
    return this.itemReference;
  }

  /** Sets `item[x]` as Reference and clears every other type of it. */
  setItemReference(itemReference: Reference | undefined): this {
    return this.setFieldValue('itemReference', itemReference);
  }

  hasItemReference(): boolean {
    return this.hasFieldValue('itemReference');
  }
}

modelTypeRegistry.register('SupplyRequestOrderedItem', SupplyRequestOrderedItem, false);

/**
 * Who/what is requesting service
 */
export class SupplyRequestRequester extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'agent',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'agent',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Device',
            'Organization',
            'Patient',
            'Practitioner',
            'RelatedPerson',
          ],
        },
      ],
    },
    {
      elementName: 'onBehalfOf',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'onBehalfOf', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
  ];

  /** Individual making the request (1..1) */
  agent?: Reference;

  /** Organization agent is acting for (0..1) */
  onBehalfOf?: Reference;

  override fhirType(): string {
    return 'SupplyRequest.requester';
  }

  /** FHIR JSON for this SupplyRequestRequester, typed as the plain `SupplyRequestRequester` data type. */
  override toJSON(): plainTypes.SupplyRequestRequester {
    return this.serialize() as plainTypes.SupplyRequestRequester;
  }

  /** Individual making the request (1..1) Created when absent. */
  getAgent(): Reference {
    if (this.agent === undefined) {
      this.agent = new Reference();
    }
    return this.agent;
  }

  setAgent(agent: Reference | undefined): this {
    return this.setFieldValue('agent', agent);
  }

  hasAgent(): boolean {
    return this.hasFieldValue('agent');
  }

  /** Organization agent is acting for (0..1) Created when absent. */
  getOnBehalfOf(): Reference {
    if (this.onBehalfOf === undefined) {
      this.onBehalfOf = new Reference();
    }
    return this.onBehalfOf;
  }

  setOnBehalfOf(onBehalfOf: Reference | undefined): this {
    return this.setFieldValue('onBehalfOf', onBehalfOf);
  }

  hasOnBehalfOf(): boolean {
    return this.hasFieldValue('onBehalfOf');
  }
}

modelTypeRegistry.register('SupplyRequestRequester', SupplyRequestRequester, false);
