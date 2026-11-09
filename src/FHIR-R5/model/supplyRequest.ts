/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { CodeableReference } from './codeableReference';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Quantity } from './quantity';
import { Range } from './range';
import { Reference } from './reference';
import { Timing } from './timing';

/**
 * A record of a non-patient specific request for a medication, substance, device, certain types of biologically derived product, and nutrition product used in the healthcare setting.
 */
export class SupplyRequest extends DomainResource {
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
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.SupplyRequestStatus },
      ],
    },
    {
      elementName: 'basedOn',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'basedOn', typeCode: 'Reference' }],
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
      elementName: 'deliverFor',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'deliverFor', typeCode: 'Reference', targetResourceTypes: ['Patient'] }],
    },
    {
      elementName: 'item',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'item', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'quantity',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'parameter',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'parameter', typeCode: 'SupplyRequestParameter' }],
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
      types: [
        {
          jsonKey: 'requester',
          typeCode: 'Reference',
          targetResourceTypes: [
            'CareTeam',
            'Device',
            'Organization',
            'Patient',
            'Practitioner',
            'PractitionerRole',
            'RelatedPerson',
          ],
        },
      ],
    },
    {
      elementName: 'supplier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'supplier',
          typeCode: 'Reference',
          targetResourceTypes: ['HealthcareService', 'Organization'],
        },
      ],
    },
    {
      elementName: 'reason',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reason', typeCode: 'CodeableReference' }],
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
          targetResourceTypes: ['Location', 'Organization', 'Patient', 'RelatedPerson'],
        },
      ],
    },
  ];

  readonly resourceType = 'SupplyRequest';

  /** Business Identifier for SupplyRequest (0..*) */
  identifier?: Identifier[];

  /** draft | active | suspended + (0..1) */
  status?: valueSetCodes.SupplyRequestStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** What other request is fulfilled by this supply request (0..*) */
  basedOn?: Reference[];

  /** The kind of supply (central, non-stock, etc.) (0..1) */
  category?: CodeableConcept;

  /** routine | urgent | asap | stat (0..1) */
  priority?: valueSetCodes.RequestPriority;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;

  /** The patient for who the supply request is for (0..1) */
  deliverFor?: Reference;

  /** Medication, Substance, or Device requested to be supplied (1..1) */
  item?: CodeableReference;

  /** The requested amount of the item indicated (1..1) */
  quantity?: Quantity;

  /** Ordered item details (0..*) */
  parameter?: SupplyRequestParameter[];

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

  /** Individual making the request (0..1) */
  requester?: Reference;

  /** Who is intended to fulfill the request (0..*) */
  supplier?: Reference[];

  /** The reason why the supply item was requested (0..*) */
  reason?: CodeableReference[];

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

  /** Business Identifier for SupplyRequest (0..*) Never undefined; an empty list is created when absent. */
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

  /** What other request is fulfilled by this supply request (0..*) Never undefined; an empty list is created when absent. */
  getBasedOn(): Reference[] {
    if (this.basedOn === undefined) {
      this.basedOn = [];
    }
    return this.basedOn;
  }

  setBasedOn(basedOn: Reference[] | undefined): this {
    return this.setFieldValue('basedOn', basedOn);
  }

  hasBasedOn(): boolean {
    return this.hasFieldValue('basedOn');
  }

  /** Appends a new, empty Reference to `basedOn` and returns it so it can be filled in. */
  addBasedOn(): Reference;
  /** Appends the given Reference to `basedOn` and returns this object for chaining. */
  addBasedOn(reference: Reference): this;
  addBasedOn(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('basedOn', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('basedOn', createdReference);
    return createdReference;
  }

  /** The first Reference of `basedOn`. One is added when the list is empty. */
  getBasedOnFirstRep(): Reference {
    const firstReference = this.getBasedOn()[0];
    return firstReference === undefined ? this.addBasedOn() : firstReference;
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

  /** The patient for who the supply request is for (0..1) Created when absent. */
  getDeliverFor(): Reference {
    if (this.deliverFor === undefined) {
      this.deliverFor = new Reference();
    }
    return this.deliverFor;
  }

  setDeliverFor(deliverFor: Reference | undefined): this {
    return this.setFieldValue('deliverFor', deliverFor);
  }

  hasDeliverFor(): boolean {
    return this.hasFieldValue('deliverFor');
  }

  /** Medication, Substance, or Device requested to be supplied (1..1) Created when absent. */
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

  /** Ordered item details (0..*) Never undefined; an empty list is created when absent. */
  getParameter(): SupplyRequestParameter[] {
    if (this.parameter === undefined) {
      this.parameter = [];
    }
    return this.parameter;
  }

  setParameter(parameter: SupplyRequestParameter[] | undefined): this {
    return this.setFieldValue('parameter', parameter);
  }

  hasParameter(): boolean {
    return this.hasFieldValue('parameter');
  }

  /** Appends a new, empty SupplyRequestParameter to `parameter` and returns it so it can be filled in. */
  addParameter(): SupplyRequestParameter;
  /** Appends the given SupplyRequestParameter to `parameter` and returns this object for chaining. */
  addParameter(supplyRequestParameter: SupplyRequestParameter): this;
  addParameter(supplyRequestParameter?: SupplyRequestParameter): SupplyRequestParameter | this {
    if (supplyRequestParameter !== undefined) {
      return this.addFieldValue('parameter', supplyRequestParameter);
    }
    const createdSupplyRequestParameter = new SupplyRequestParameter();
    this.addFieldValue('parameter', createdSupplyRequestParameter);
    return createdSupplyRequestParameter;
  }

  /** The first SupplyRequestParameter of `parameter`. One is added when the list is empty. */
  getParameterFirstRep(): SupplyRequestParameter {
    const firstSupplyRequestParameter = this.getParameter()[0];
    return firstSupplyRequestParameter === undefined
      ? this.addParameter()
      : firstSupplyRequestParameter;
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

  /** Individual making the request (0..1) Created when absent. */
  getRequester(): Reference {
    if (this.requester === undefined) {
      this.requester = new Reference();
    }
    return this.requester;
  }

  setRequester(requester: Reference | undefined): this {
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

  /** The reason why the supply item was requested (0..*) Never undefined; an empty list is created when absent. */
  getReason(): CodeableReference[] {
    if (this.reason === undefined) {
      this.reason = [];
    }
    return this.reason;
  }

  setReason(reason: CodeableReference[] | undefined): this {
    return this.setFieldValue('reason', reason);
  }

  hasReason(): boolean {
    return this.hasFieldValue('reason');
  }

  /** Appends a new, empty CodeableReference to `reason` and returns it so it can be filled in. */
  addReason(): CodeableReference;
  /** Appends the given CodeableReference to `reason` and returns this object for chaining. */
  addReason(codeableReference: CodeableReference): this;
  addReason(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('reason', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('reason', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `reason`. One is added when the list is empty. */
  getReasonFirstRep(): CodeableReference {
    const firstCodeableReference = this.getReason()[0];
    return firstCodeableReference === undefined ? this.addReason() : firstCodeableReference;
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
 * Ordered item details
 */
export class SupplyRequestParameter extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'value',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'valueCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'valueQuantity', typeCode: 'Quantity' },
        { jsonKey: 'valueRange', typeCode: 'Range' },
        { jsonKey: 'valueBoolean', typeCode: 'boolean' },
      ],
    },
  ];

  /** Item detail (0..1) */
  code?: CodeableConcept;

  /** Value of detail (0..1) */
  valueCodeableConcept?: CodeableConcept;
  /** Value of detail (0..1) */
  valueQuantity?: Quantity;
  /** Value of detail (0..1) */
  valueRange?: Range;
  /** Value of detail (0..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;

  override fhirType(): string {
    return 'SupplyRequest.parameter';
  }

  /** FHIR JSON for this SupplyRequestParameter, typed as the plain `SupplyRequestParameter` data type. */
  override toJSON(): plainTypes.SupplyRequestParameter {
    return this.serialize() as plainTypes.SupplyRequestParameter;
  }

  /** Item detail (0..1) Created when absent. */
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

  /** Value of detail (0..1) Whichever type of `value[x]` is set. */
  getValue(): CodeableConcept | Quantity | Range | boolean | undefined {
    return this.getChoiceValue<CodeableConcept | Quantity | Range | boolean>('value');
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
}

modelTypeRegistry.register('SupplyRequestParameter', SupplyRequestParameter, false);
