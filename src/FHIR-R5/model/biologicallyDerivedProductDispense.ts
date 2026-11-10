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
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Quantity } from './quantity';
import { Reference } from './reference';

/**
 * A record of dispensation of a biologically derived product.
 */
export class BiologicallyDerivedProductDispense extends DomainResource {
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
        { jsonKey: 'basedOn', typeCode: 'Reference', targetResourceTypes: ['ServiceRequest'] },
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
          targetResourceTypes: ['BiologicallyDerivedProductDispense'],
        },
      ],
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
          allowedCodes: valueSetCodes.BiologicallyDerivedProductDispenseCodes,
        },
      ],
    },
    {
      elementName: 'originRelationshipType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'originRelationshipType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'product',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'product',
          typeCode: 'Reference',
          targetResourceTypes: ['BiologicallyDerivedProduct'],
        },
      ],
    },
    {
      elementName: 'patient',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'patient', typeCode: 'Reference', targetResourceTypes: ['Patient'] }],
    },
    {
      elementName: 'matchStatus',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'matchStatus', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'performer',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'performer', typeCode: 'BiologicallyDerivedProductDispensePerformer' }],
    },
    {
      elementName: 'location',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'location', typeCode: 'Reference', targetResourceTypes: ['Location'] }],
    },
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'preparedDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'preparedDate', typeCode: 'dateTime' }],
    },
    {
      elementName: 'whenHandedOver',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'whenHandedOver', typeCode: 'dateTime' }],
    },
    {
      elementName: 'destination',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'destination', typeCode: 'Reference', targetResourceTypes: ['Location'] }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
    {
      elementName: 'usageInstruction',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'usageInstruction', typeCode: 'string' }],
    },
  ];

  readonly resourceType = 'BiologicallyDerivedProductDispense';

  /** Business identifier for this dispense (0..*) */
  identifier?: Identifier[];

  /** The order or request that this dispense is fulfilling (0..*) */
  basedOn?: Reference[];

  /** Short description (0..*) */
  partOf?: Reference[];

  /** preparation | in-progress | allocated | issued | unfulfilled | returned | entered-in-error | unknown (1..1) */
  status?: valueSetCodes.BiologicallyDerivedProductDispenseCodes;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Relationship between the donor and intended recipient (0..1) */
  originRelationshipType?: CodeableConcept;

  /** The BiologicallyDerivedProduct that is dispensed (1..1) */
  product?: Reference;

  /** The intended recipient of the dispensed product (1..1) */
  patient?: Reference;

  /** Indicates the type of matching associated with the dispense (0..1) */
  matchStatus?: CodeableConcept;

  /** Indicates who or what performed an action (0..*) */
  performer?: BiologicallyDerivedProductDispensePerformer[];

  /** Where the dispense occurred (0..1) */
  location?: Reference;

  /** Amount dispensed (0..1) */
  quantity?: Quantity;

  /** When product was selected/matched (0..1) */
  preparedDate?: string;
  /** Id and extensions of the primitive `preparedDate`. */
  _preparedDate?: Element;

  /** When the product was dispatched (0..1) */
  whenHandedOver?: string;
  /** Id and extensions of the primitive `whenHandedOver`. */
  _whenHandedOver?: Element;

  /** Where the product was dispatched to (0..1) */
  destination?: Reference;

  /** Additional notes (0..*) */
  note?: Annotation[];

  /** Specific instructions for use (0..1) */
  usageInstruction?: string;
  /** Id and extensions of the primitive `usageInstruction`. */
  _usageInstruction?: Element;

  override fhirType(): string {
    return 'BiologicallyDerivedProductDispense';
  }

  /** FHIR JSON for this BiologicallyDerivedProductDispense, typed as the plain `BiologicallyDerivedProductDispense` data type. */
  override toJSON(): plainTypes.BiologicallyDerivedProductDispense {
    return this.serialize() as plainTypes.BiologicallyDerivedProductDispense;
  }

  /** Business identifier for this dispense (0..*) Never undefined; an empty list is created when absent. */
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

  /** The order or request that this dispense is fulfilling (0..*) Never undefined; an empty list is created when absent. */
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

  /** Short description (0..*) Never undefined; an empty list is created when absent. */
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

  /** preparation | in-progress | allocated | issued | unfulfilled | returned | entered-in-error | unknown (1..1) */
  getStatus(): valueSetCodes.BiologicallyDerivedProductDispenseCodes | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.BiologicallyDerivedProductDispenseCodes | undefined): this {
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

  /** Relationship between the donor and intended recipient (0..1) Created when absent. */
  getOriginRelationshipType(): CodeableConcept {
    if (this.originRelationshipType === undefined) {
      this.originRelationshipType = new CodeableConcept();
    }
    return this.originRelationshipType;
  }

  setOriginRelationshipType(originRelationshipType: CodeableConcept | undefined): this {
    return this.setFieldValue('originRelationshipType', originRelationshipType);
  }

  hasOriginRelationshipType(): boolean {
    return this.hasFieldValue('originRelationshipType');
  }

  /** The BiologicallyDerivedProduct that is dispensed (1..1) Created when absent. */
  getProduct(): Reference {
    if (this.product === undefined) {
      this.product = new Reference();
    }
    return this.product;
  }

  setProduct(product: Reference | undefined): this {
    return this.setFieldValue('product', product);
  }

  hasProduct(): boolean {
    return this.hasFieldValue('product');
  }

  /** The intended recipient of the dispensed product (1..1) Created when absent. */
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

  /** Indicates the type of matching associated with the dispense (0..1) Created when absent. */
  getMatchStatus(): CodeableConcept {
    if (this.matchStatus === undefined) {
      this.matchStatus = new CodeableConcept();
    }
    return this.matchStatus;
  }

  setMatchStatus(matchStatus: CodeableConcept | undefined): this {
    return this.setFieldValue('matchStatus', matchStatus);
  }

  hasMatchStatus(): boolean {
    return this.hasFieldValue('matchStatus');
  }

  /** Indicates who or what performed an action (0..*) Never undefined; an empty list is created when absent. */
  getPerformer(): BiologicallyDerivedProductDispensePerformer[] {
    if (this.performer === undefined) {
      this.performer = [];
    }
    return this.performer;
  }

  setPerformer(performer: BiologicallyDerivedProductDispensePerformer[] | undefined): this {
    return this.setFieldValue('performer', performer);
  }

  hasPerformer(): boolean {
    return this.hasFieldValue('performer');
  }

  /** Appends a new, empty BiologicallyDerivedProductDispensePerformer to `performer` and returns it so it can be filled in. */
  addPerformer(): BiologicallyDerivedProductDispensePerformer;
  /** Appends the given BiologicallyDerivedProductDispensePerformer to `performer` and returns this object for chaining. */
  addPerformer(
    biologicallyDerivedProductDispensePerformer: BiologicallyDerivedProductDispensePerformer
  ): this;
  addPerformer(
    biologicallyDerivedProductDispensePerformer?: BiologicallyDerivedProductDispensePerformer
  ): BiologicallyDerivedProductDispensePerformer | this {
    if (biologicallyDerivedProductDispensePerformer !== undefined) {
      return this.addFieldValue('performer', biologicallyDerivedProductDispensePerformer);
    }
    const createdBiologicallyDerivedProductDispensePerformer =
      new BiologicallyDerivedProductDispensePerformer();
    this.addFieldValue('performer', createdBiologicallyDerivedProductDispensePerformer);
    return createdBiologicallyDerivedProductDispensePerformer;
  }

  /** The first BiologicallyDerivedProductDispensePerformer of `performer`. One is added when the list is empty. */
  getPerformerFirstRep(): BiologicallyDerivedProductDispensePerformer {
    const firstBiologicallyDerivedProductDispensePerformer = this.getPerformer()[0];
    return firstBiologicallyDerivedProductDispensePerformer === undefined
      ? this.addPerformer()
      : firstBiologicallyDerivedProductDispensePerformer;
  }

  /** Where the dispense occurred (0..1) Created when absent. */
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

  /** Amount dispensed (0..1) Created when absent. */
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

  /** When product was selected/matched (0..1) */
  getPreparedDate(): string | undefined {
    return this.preparedDate;
  }

  /** Sets `preparedDate`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setPreparedDate(preparedDate: string | undefined): this {
    return this.setFieldValue('preparedDate', preparedDate);
  }

  hasPreparedDate(): boolean {
    return this.hasFieldValue('preparedDate');
  }

  /** The element carrying the id and extensions of `preparedDate`. Created when absent. */
  getPreparedDateElement(): Element {
    if (this._preparedDate === undefined) {
      this._preparedDate = new Element();
    }
    return this._preparedDate;
  }

  setPreparedDateElement(preparedDateElement: Element | undefined): this {
    this._preparedDate = preparedDateElement;
    return this;
  }

  /** When the product was dispatched (0..1) */
  getWhenHandedOver(): string | undefined {
    return this.whenHandedOver;
  }

  /** Sets `whenHandedOver`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setWhenHandedOver(whenHandedOver: string | undefined): this {
    return this.setFieldValue('whenHandedOver', whenHandedOver);
  }

  hasWhenHandedOver(): boolean {
    return this.hasFieldValue('whenHandedOver');
  }

  /** The element carrying the id and extensions of `whenHandedOver`. Created when absent. */
  getWhenHandedOverElement(): Element {
    if (this._whenHandedOver === undefined) {
      this._whenHandedOver = new Element();
    }
    return this._whenHandedOver;
  }

  setWhenHandedOverElement(whenHandedOverElement: Element | undefined): this {
    this._whenHandedOver = whenHandedOverElement;
    return this;
  }

  /** Where the product was dispatched to (0..1) Created when absent. */
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

  /** Additional notes (0..*) Never undefined; an empty list is created when absent. */
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

  /** Specific instructions for use (0..1) */
  getUsageInstruction(): string | undefined {
    return this.usageInstruction;
  }

  /** Sets `usageInstruction`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setUsageInstruction(usageInstruction: string | undefined): this {
    return this.setFieldValue('usageInstruction', usageInstruction);
  }

  hasUsageInstruction(): boolean {
    return this.hasFieldValue('usageInstruction');
  }

  /** The element carrying the id and extensions of `usageInstruction`. Created when absent. */
  getUsageInstructionElement(): Element {
    if (this._usageInstruction === undefined) {
      this._usageInstruction = new Element();
    }
    return this._usageInstruction;
  }

  setUsageInstructionElement(usageInstructionElement: Element | undefined): this {
    this._usageInstruction = usageInstructionElement;
    return this;
  }
}

modelTypeRegistry.register(
  'BiologicallyDerivedProductDispense',
  BiologicallyDerivedProductDispense,
  true
);

/** True when the value is a BiologicallyDerivedProductDispense model instance. */
export function isBiologicallyDerivedProductDispense(
  candidate: unknown
): candidate is BiologicallyDerivedProductDispense {
  return candidate instanceof BiologicallyDerivedProductDispense;
}

/**
 * Indicates who or what performed an action
 */
export class BiologicallyDerivedProductDispensePerformer extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'function',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'function', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'actor',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'actor', typeCode: 'Reference', targetResourceTypes: ['Practitioner'] }],
    },
  ];

  /** Identifies the function of the performer during the dispense (0..1) */
  function?: CodeableConcept;

  /** Who performed the action (1..1) */
  actor?: Reference;

  override fhirType(): string {
    return 'BiologicallyDerivedProductDispense.performer';
  }

  /** FHIR JSON for this BiologicallyDerivedProductDispensePerformer, typed as the plain `BiologicallyDerivedProductDispensePerformer` data type. */
  override toJSON(): plainTypes.BiologicallyDerivedProductDispensePerformer {
    return this.serialize() as plainTypes.BiologicallyDerivedProductDispensePerformer;
  }

  /** Identifies the function of the performer during the dispense (0..1) Created when absent. */
  getFunction(): CodeableConcept {
    if (this.function === undefined) {
      this.function = new CodeableConcept();
    }
    return this.function;
  }

  setFunction(functionValue: CodeableConcept | undefined): this {
    return this.setFieldValue('function', functionValue);
  }

  hasFunction(): boolean {
    return this.hasFieldValue('function');
  }

  /** Who performed the action (1..1) Created when absent. */
  getActor(): Reference {
    if (this.actor === undefined) {
      this.actor = new Reference();
    }
    return this.actor;
  }

  setActor(actor: Reference | undefined): this {
    return this.setFieldValue('actor', actor);
  }

  hasActor(): boolean {
    return this.hasFieldValue('actor');
  }
}

modelTypeRegistry.register(
  'BiologicallyDerivedProductDispensePerformer',
  BiologicallyDerivedProductDispensePerformer,
  false
);
