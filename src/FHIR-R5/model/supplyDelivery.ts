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
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Quantity } from './quantity';
import { Reference } from './reference';
import { Timing } from './timing';

/**
 * Record of delivery of what is supplied.
 */
export class SupplyDelivery extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'basedOn',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'basedOn', typeCode: 'Reference', targetResourceTypes: ['SupplyRequest'] },
      ],
    },
    {
      elementName: 'partOf',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'partOf',
          typeCode: 'Reference',
          targetResourceTypes: ['Contract', 'SupplyDelivery'],
        },
      ],
    },
    {
      elementName: 'status',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.SupplyDeliveryStatus },
      ],
    },
    {
      elementName: 'patient',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'patient', typeCode: 'Reference', targetResourceTypes: ['Patient'] }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'suppliedItem',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'suppliedItem', typeCode: 'SupplyDeliverySuppliedItem' }],
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
      elementName: 'supplier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'supplier',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Practitioner', 'PractitionerRole'],
        },
      ],
    },
    {
      elementName: 'destination',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'destination', typeCode: 'Reference', targetResourceTypes: ['Location'] }],
    },
    {
      elementName: 'receiver',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'receiver',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Practitioner', 'PractitionerRole'],
        },
      ],
    },
  ];

  readonly resourceType = 'SupplyDelivery';

  /** External identifier (0..*) */
  identifier?: Identifier[];

  /** Fulfills plan, proposal or order (0..*) */
  basedOn?: Reference[];

  /** Part of referenced event (0..*) */
  partOf?: Reference[];

  /** in-progress | completed | abandoned | entered-in-error (0..1) */
  status?: valueSetCodes.SupplyDeliveryStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Patient for whom the item is supplied (0..1) */
  patient?: Reference;

  /** Category of supply event (0..1) */
  type?: CodeableConcept;

  /** The item that is delivered or supplied (0..*) */
  suppliedItem?: SupplyDeliverySuppliedItem[];

  /** When event occurred (0..1) */
  occurrenceDateTime?: string;
  /** Id and extensions of the primitive `occurrenceDateTime`. */
  _occurrenceDateTime?: Element;
  /** When event occurred (0..1) */
  occurrencePeriod?: Period;
  /** When event occurred (0..1) */
  occurrenceTiming?: Timing;

  /** The item supplier (0..1) */
  supplier?: Reference;

  /** Where the delivery was sent (0..1) */
  destination?: Reference;

  /** Who received the delivery (0..*) */
  receiver?: Reference[];

  override fhirType(): string {
    return 'SupplyDelivery';
  }

  /** FHIR JSON for this SupplyDelivery, typed as the plain `SupplyDelivery` data type. */
  override toJSON(): plainTypes.SupplyDelivery {
    return this.serialize() as plainTypes.SupplyDelivery;
  }

  /** External identifier (0..*) Never undefined; an empty list is created when absent. */
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

  /** Fulfills plan, proposal or order (0..*) Never undefined; an empty list is created when absent. */
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

  /** Part of referenced event (0..*) Never undefined; an empty list is created when absent. */
  getPartOf(): Reference[] {
    if (this.partOf === undefined) {
      this.partOf = [];
    }
    return this.partOf;
  }

  setPartOf(partOf: Reference[] | undefined): this {
    return this.setFieldValue('partOf', partOf);
  }

  hasPartOf(): boolean {
    return this.hasFieldValue('partOf');
  }

  /** Appends a new, empty Reference to `partOf` and returns it so it can be filled in. */
  addPartOf(): Reference;
  /** Appends the given Reference to `partOf` and returns this object for chaining. */
  addPartOf(reference: Reference): this;
  addPartOf(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('partOf', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('partOf', createdReference);
    return createdReference;
  }

  /** The first Reference of `partOf`. One is added when the list is empty. */
  getPartOfFirstRep(): Reference {
    const firstReference = this.getPartOf()[0];
    return firstReference === undefined ? this.addPartOf() : firstReference;
  }

  /** in-progress | completed | abandoned | entered-in-error (0..1) */
  getStatus(): valueSetCodes.SupplyDeliveryStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.SupplyDeliveryStatus | undefined): this {
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

  /** Patient for whom the item is supplied (0..1) Created when absent. */
  getPatient(): Reference {
    if (this.patient === undefined) {
      this.patient = new Reference();
    }
    return this.patient;
  }

  setPatient(patient: Reference | undefined): this {
    return this.setFieldValue('patient', patient);
  }

  hasPatient(): boolean {
    return this.hasFieldValue('patient');
  }

  /** Category of supply event (0..1) Created when absent. */
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

  /** The item that is delivered or supplied (0..*) Never undefined; an empty list is created when absent. */
  getSuppliedItem(): SupplyDeliverySuppliedItem[] {
    if (this.suppliedItem === undefined) {
      this.suppliedItem = [];
    }
    return this.suppliedItem;
  }

  setSuppliedItem(suppliedItem: SupplyDeliverySuppliedItem[] | undefined): this {
    return this.setFieldValue('suppliedItem', suppliedItem);
  }

  hasSuppliedItem(): boolean {
    return this.hasFieldValue('suppliedItem');
  }

  /** Appends a new, empty SupplyDeliverySuppliedItem to `suppliedItem` and returns it so it can be filled in. */
  addSuppliedItem(): SupplyDeliverySuppliedItem;
  /** Appends the given SupplyDeliverySuppliedItem to `suppliedItem` and returns this object for chaining. */
  addSuppliedItem(supplyDeliverySuppliedItem: SupplyDeliverySuppliedItem): this;
  addSuppliedItem(
    supplyDeliverySuppliedItem?: SupplyDeliverySuppliedItem
  ): SupplyDeliverySuppliedItem | this {
    if (supplyDeliverySuppliedItem !== undefined) {
      return this.addFieldValue('suppliedItem', supplyDeliverySuppliedItem);
    }
    const createdSupplyDeliverySuppliedItem = new SupplyDeliverySuppliedItem();
    this.addFieldValue('suppliedItem', createdSupplyDeliverySuppliedItem);
    return createdSupplyDeliverySuppliedItem;
  }

  /** The first SupplyDeliverySuppliedItem of `suppliedItem`. One is added when the list is empty. */
  getSuppliedItemFirstRep(): SupplyDeliverySuppliedItem {
    const firstSupplyDeliverySuppliedItem = this.getSuppliedItem()[0];
    return firstSupplyDeliverySuppliedItem === undefined
      ? this.addSuppliedItem()
      : firstSupplyDeliverySuppliedItem;
  }

  /** When event occurred (0..1) Whichever type of `occurrence[x]` is set. */
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

  /** The item supplier (0..1) Created when absent. */
  getSupplier(): Reference {
    if (this.supplier === undefined) {
      this.supplier = new Reference();
    }
    return this.supplier;
  }

  setSupplier(supplier: Reference | undefined): this {
    return this.setFieldValue('supplier', supplier);
  }

  hasSupplier(): boolean {
    return this.hasFieldValue('supplier');
  }

  /** Where the delivery was sent (0..1) Created when absent. */
  getDestination(): Reference {
    if (this.destination === undefined) {
      this.destination = new Reference();
    }
    return this.destination;
  }

  setDestination(destination: Reference | undefined): this {
    return this.setFieldValue('destination', destination);
  }

  hasDestination(): boolean {
    return this.hasFieldValue('destination');
  }

  /** Who received the delivery (0..*) Never undefined; an empty list is created when absent. */
  getReceiver(): Reference[] {
    if (this.receiver === undefined) {
      this.receiver = [];
    }
    return this.receiver;
  }

  setReceiver(receiver: Reference[] | undefined): this {
    return this.setFieldValue('receiver', receiver);
  }

  hasReceiver(): boolean {
    return this.hasFieldValue('receiver');
  }

  /** Appends a new, empty Reference to `receiver` and returns it so it can be filled in. */
  addReceiver(): Reference;
  /** Appends the given Reference to `receiver` and returns this object for chaining. */
  addReceiver(reference: Reference): this;
  addReceiver(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('receiver', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('receiver', createdReference);
    return createdReference;
  }

  /** The first Reference of `receiver`. One is added when the list is empty. */
  getReceiverFirstRep(): Reference {
    const firstReference = this.getReceiver()[0];
    return firstReference === undefined ? this.addReceiver() : firstReference;
  }
}

modelTypeRegistry.register('SupplyDelivery', SupplyDelivery, true);

/** True when the value is a SupplyDelivery model instance. */
export function isSupplyDelivery(candidate: unknown): candidate is SupplyDelivery {
  return candidate instanceof SupplyDelivery;
}

/**
 * The item that is delivered or supplied
 */
export class SupplyDeliverySuppliedItem extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'quantity',
      minimum: 0,
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
          targetResourceTypes: [
            'BiologicallyDerivedProduct',
            'Device',
            'InventoryItem',
            'Medication',
            'NutritionProduct',
            'Substance',
          ],
        },
      ],
    },
  ];

  /** Amount supplied (0..1) */
  quantity?: Quantity;

  /** Medication, Substance, Device or Biologically Derived Product supplied (0..1) */
  itemCodeableConcept?: CodeableConcept;
  /** Medication, Substance, Device or Biologically Derived Product supplied (0..1) */
  itemReference?: Reference;

  override fhirType(): string {
    return 'SupplyDelivery.suppliedItem';
  }

  /** FHIR JSON for this SupplyDeliverySuppliedItem, typed as the plain `SupplyDeliverySuppliedItem` data type. */
  override toJSON(): plainTypes.SupplyDeliverySuppliedItem {
    return this.serialize() as plainTypes.SupplyDeliverySuppliedItem;
  }

  /** Amount supplied (0..1) Created when absent. */
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

  /** Medication, Substance, Device or Biologically Derived Product supplied (0..1) Whichever type of `item[x]` is set. */
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

modelTypeRegistry.register('SupplyDeliverySuppliedItem', SupplyDeliverySuppliedItem, false);
