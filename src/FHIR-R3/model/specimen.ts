/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { Annotation } from './annotation';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Quantity } from './quantity';
import { Reference } from './reference';

/**
 * Base StructureDefinition for Specimen Resource
 */
export class Specimen extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'accessionIdentifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'accessionIdentifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'status',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.SpecimenStatus }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'subject',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'subject',
          typeCode: 'Reference',
          targetResourceTypes: ['Device', 'Group', 'Patient', 'Substance'],
        },
      ],
    },
    {
      elementName: 'receivedTime',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'receivedTime', typeCode: 'dateTime' }],
    },
    {
      elementName: 'parent',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'parent', typeCode: 'Reference', targetResourceTypes: ['Specimen'] }],
    },
    {
      elementName: 'request',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'request', typeCode: 'Reference', targetResourceTypes: ['ProcedureRequest'] },
      ],
    },
    {
      elementName: 'collection',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'collection', typeCode: 'SpecimenCollection' }],
    },
    {
      elementName: 'processing',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'processing', typeCode: 'SpecimenProcessing' }],
    },
    {
      elementName: 'container',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'container', typeCode: 'SpecimenContainer' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
  ];

  readonly resourceType = 'Specimen';

  /** External Identifier (0..*) */
  identifier?: Identifier[];

  /** Identifier assigned by the lab (0..1) */
  accessionIdentifier?: Identifier;

  /** available | unavailable | unsatisfactory | entered-in-error (0..1) */
  status?: valueSetCodes.SpecimenStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Kind of material that forms the specimen (0..1) */
  type?: CodeableConcept;

  /** Where the specimen came from. This may be from the patient(s) or from the environment or a device (1..1) */
  subject?: Reference;

  /** The time when specimen was received for processing (0..1) */
  receivedTime?: string;
  /** Id and extensions of the primitive `receivedTime`. */
  _receivedTime?: Element;

  /** Specimen from which this specimen originated (0..*) */
  parent?: Reference[];

  /** Why the specimen was collected (0..*) */
  request?: Reference[];

  /** Collection details (0..1) */
  collection?: SpecimenCollection;

  /** Processing and processing step details (0..*) */
  processing?: SpecimenProcessing[];

  /** Direct container of specimen (tube/slide, etc.) (0..*) */
  container?: SpecimenContainer[];

  /** Comments (0..*) */
  note?: Annotation[];

  override fhirType(): string {
    return 'Specimen';
  }

  /** FHIR JSON for this Specimen, typed as the plain `Specimen` data type. */
  override toJSON(): plainTypes.Specimen {
    return this.serialize() as plainTypes.Specimen;
  }

  /** External Identifier (0..*) Never undefined; an empty list is created when absent. */
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

  /** Identifier assigned by the lab (0..1) Created when absent. */
  getAccessionIdentifier(): Identifier {
    if (this.accessionIdentifier === undefined) {
      this.accessionIdentifier = new Identifier();
    }
    return this.accessionIdentifier;
  }

  setAccessionIdentifier(accessionIdentifier: Identifier | undefined): this {
    return this.setFieldValue('accessionIdentifier', accessionIdentifier);
  }

  hasAccessionIdentifier(): boolean {
    return this.hasFieldValue('accessionIdentifier');
  }

  /** available | unavailable | unsatisfactory | entered-in-error (0..1) */
  getStatus(): valueSetCodes.SpecimenStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.SpecimenStatus | undefined): this {
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

  /** Kind of material that forms the specimen (0..1) Created when absent. */
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

  /** Where the specimen came from. This may be from the patient(s) or from the environment or a device (1..1) Created when absent. */
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

  /** The time when specimen was received for processing (0..1) */
  getReceivedTime(): string | undefined {
    return this.receivedTime;
  }

  /** Sets `receivedTime`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setReceivedTime(receivedTime: string | undefined): this {
    return this.setFieldValue('receivedTime', receivedTime);
  }

  hasReceivedTime(): boolean {
    return this.hasFieldValue('receivedTime');
  }

  /** The element carrying the id and extensions of `receivedTime`. Created when absent. */
  getReceivedTimeElement(): Element {
    if (this._receivedTime === undefined) {
      this._receivedTime = new Element();
    }
    return this._receivedTime;
  }

  setReceivedTimeElement(receivedTimeElement: Element | undefined): this {
    this._receivedTime = receivedTimeElement;
    return this;
  }

  /** Specimen from which this specimen originated (0..*) Never undefined; an empty list is created when absent. */
  getParent(): Reference[] {
    if (this.parent === undefined) {
      this.parent = [];
    }
    return this.parent;
  }

  setParent(parent: Reference[] | undefined): this {
    return this.setFieldValue('parent', parent);
  }

  hasParent(): boolean {
    return this.hasFieldValue('parent');
  }

  /** Appends a new, empty Reference to `parent` and returns it so it can be filled in. */
  addParent(): Reference;
  /** Appends the given Reference to `parent` and returns this object for chaining. */
  addParent(reference: Reference): this;
  addParent(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('parent', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('parent', createdReference);
    return createdReference;
  }

  /** The first Reference of `parent`. One is added when the list is empty. */
  getParentFirstRep(): Reference {
    const firstReference = this.getParent()[0];
    return firstReference === undefined ? this.addParent() : firstReference;
  }

  /** Why the specimen was collected (0..*) Never undefined; an empty list is created when absent. */
  getRequest(): Reference[] {
    if (this.request === undefined) {
      this.request = [];
    }
    return this.request;
  }

  setRequest(request: Reference[] | undefined): this {
    return this.setFieldValue('request', request);
  }

  hasRequest(): boolean {
    return this.hasFieldValue('request');
  }

  /** Appends a new, empty Reference to `request` and returns it so it can be filled in. */
  addRequest(): Reference;
  /** Appends the given Reference to `request` and returns this object for chaining. */
  addRequest(reference: Reference): this;
  addRequest(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('request', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('request', createdReference);
    return createdReference;
  }

  /** The first Reference of `request`. One is added when the list is empty. */
  getRequestFirstRep(): Reference {
    const firstReference = this.getRequest()[0];
    return firstReference === undefined ? this.addRequest() : firstReference;
  }

  /** Collection details (0..1) Created when absent. */
  getCollection(): SpecimenCollection {
    if (this.collection === undefined) {
      this.collection = new SpecimenCollection();
    }
    return this.collection;
  }

  setCollection(collection: SpecimenCollection | undefined): this {
    return this.setFieldValue('collection', collection);
  }

  hasCollection(): boolean {
    return this.hasFieldValue('collection');
  }

  /** Processing and processing step details (0..*) Never undefined; an empty list is created when absent. */
  getProcessing(): SpecimenProcessing[] {
    if (this.processing === undefined) {
      this.processing = [];
    }
    return this.processing;
  }

  setProcessing(processing: SpecimenProcessing[] | undefined): this {
    return this.setFieldValue('processing', processing);
  }

  hasProcessing(): boolean {
    return this.hasFieldValue('processing');
  }

  /** Appends a new, empty SpecimenProcessing to `processing` and returns it so it can be filled in. */
  addProcessing(): SpecimenProcessing;
  /** Appends the given SpecimenProcessing to `processing` and returns this object for chaining. */
  addProcessing(specimenProcessing: SpecimenProcessing): this;
  addProcessing(specimenProcessing?: SpecimenProcessing): SpecimenProcessing | this {
    if (specimenProcessing !== undefined) {
      return this.addFieldValue('processing', specimenProcessing);
    }
    const createdSpecimenProcessing = new SpecimenProcessing();
    this.addFieldValue('processing', createdSpecimenProcessing);
    return createdSpecimenProcessing;
  }

  /** The first SpecimenProcessing of `processing`. One is added when the list is empty. */
  getProcessingFirstRep(): SpecimenProcessing {
    const firstSpecimenProcessing = this.getProcessing()[0];
    return firstSpecimenProcessing === undefined ? this.addProcessing() : firstSpecimenProcessing;
  }

  /** Direct container of specimen (tube/slide, etc.) (0..*) Never undefined; an empty list is created when absent. */
  getContainer(): SpecimenContainer[] {
    if (this.container === undefined) {
      this.container = [];
    }
    return this.container;
  }

  setContainer(container: SpecimenContainer[] | undefined): this {
    return this.setFieldValue('container', container);
  }

  hasContainer(): boolean {
    return this.hasFieldValue('container');
  }

  /** Appends a new, empty SpecimenContainer to `container` and returns it so it can be filled in. */
  addContainer(): SpecimenContainer;
  /** Appends the given SpecimenContainer to `container` and returns this object for chaining. */
  addContainer(specimenContainer: SpecimenContainer): this;
  addContainer(specimenContainer?: SpecimenContainer): SpecimenContainer | this {
    if (specimenContainer !== undefined) {
      return this.addFieldValue('container', specimenContainer);
    }
    const createdSpecimenContainer = new SpecimenContainer();
    this.addFieldValue('container', createdSpecimenContainer);
    return createdSpecimenContainer;
  }

  /** The first SpecimenContainer of `container`. One is added when the list is empty. */
  getContainerFirstRep(): SpecimenContainer {
    const firstSpecimenContainer = this.getContainer()[0];
    return firstSpecimenContainer === undefined ? this.addContainer() : firstSpecimenContainer;
  }

  /** Comments (0..*) Never undefined; an empty list is created when absent. */
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

modelTypeRegistry.register('Specimen', Specimen, true);

/** True when the value is a Specimen model instance. */
export function isSpecimen(candidate: unknown): candidate is Specimen {
  return candidate instanceof Specimen;
}

/**
 * Collection details
 */
export class SpecimenCollection extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'collector',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'collector', typeCode: 'Reference', targetResourceTypes: ['Practitioner'] },
      ],
    },
    {
      elementName: 'collected',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'collectedDateTime', typeCode: 'dateTime' },
        { jsonKey: 'collectedPeriod', typeCode: 'Period' },
      ],
    },
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'method',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'method', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'bodySite',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'bodySite', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Who collected the specimen (0..1) */
  collector?: Reference;

  /** Collection time (0..1) */
  collectedDateTime?: string;
  /** Id and extensions of the primitive `collectedDateTime`. */
  _collectedDateTime?: Element;
  /** Collection time (0..1) */
  collectedPeriod?: Period;

  /** The quantity of specimen collected (0..1) */
  quantity?: Quantity;

  /** Technique used to perform collection (0..1) */
  method?: CodeableConcept;

  /** Anatomical collection site (0..1) */
  bodySite?: CodeableConcept;

  override fhirType(): string {
    return 'Specimen.collection';
  }

  /** FHIR JSON for this SpecimenCollection, typed as the plain `SpecimenCollection` data type. */
  override toJSON(): plainTypes.SpecimenCollection {
    return this.serialize() as plainTypes.SpecimenCollection;
  }

  /** Who collected the specimen (0..1) Created when absent. */
  getCollector(): Reference {
    if (this.collector === undefined) {
      this.collector = new Reference();
    }
    return this.collector;
  }

  setCollector(collector: Reference | undefined): this {
    return this.setFieldValue('collector', collector);
  }

  hasCollector(): boolean {
    return this.hasFieldValue('collector');
  }

  /** Collection time (0..1) Whichever type of `collected[x]` is set. */
  getCollected(): string | Period | undefined {
    return this.getChoiceValue<string | Period>('collected');
  }

  /** True when any type of `collected[x]` is set. */
  hasCollected(): boolean {
    return this.hasChoiceValue('collected');
  }

  getCollectedDateTime(): string | undefined {
    return this.collectedDateTime;
  }

  /** Sets `collected[x]` as dateTime and clears every other type of it. */
  setCollectedDateTime(collectedDateTime: string | undefined): this {
    return this.setFieldValue('collectedDateTime', collectedDateTime);
  }

  hasCollectedDateTime(): boolean {
    return this.hasFieldValue('collectedDateTime');
  }

  getCollectedPeriod(): Period | undefined {
    return this.collectedPeriod;
  }

  /** Sets `collected[x]` as Period and clears every other type of it. */
  setCollectedPeriod(collectedPeriod: Period | undefined): this {
    return this.setFieldValue('collectedPeriod', collectedPeriod);
  }

  hasCollectedPeriod(): boolean {
    return this.hasFieldValue('collectedPeriod');
  }

  /** The quantity of specimen collected (0..1) Created when absent. */
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

  /** Technique used to perform collection (0..1) Created when absent. */
  getMethod(): CodeableConcept {
    if (this.method === undefined) {
      this.method = new CodeableConcept();
    }
    return this.method;
  }

  setMethod(method: CodeableConcept | undefined): this {
    return this.setFieldValue('method', method);
  }

  hasMethod(): boolean {
    return this.hasFieldValue('method');
  }

  /** Anatomical collection site (0..1) Created when absent. */
  getBodySite(): CodeableConcept {
    if (this.bodySite === undefined) {
      this.bodySite = new CodeableConcept();
    }
    return this.bodySite;
  }

  setBodySite(bodySite: CodeableConcept | undefined): this {
    return this.setFieldValue('bodySite', bodySite);
  }

  hasBodySite(): boolean {
    return this.hasFieldValue('bodySite');
  }
}

modelTypeRegistry.register('SpecimenCollection', SpecimenCollection, false);

/**
 * Processing and processing step details
 */
export class SpecimenProcessing extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'procedure',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'procedure', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'additive',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'additive', typeCode: 'Reference', targetResourceTypes: ['Substance'] }],
    },
    {
      elementName: 'time',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'timeDateTime', typeCode: 'dateTime' },
        { jsonKey: 'timePeriod', typeCode: 'Period' },
      ],
    },
  ];

  /** Textual description of procedure (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Indicates the treatment step applied to the specimen (0..1) */
  procedure?: CodeableConcept;

  /** Material used in the processing step (0..*) */
  additive?: Reference[];

  /** Date and time of specimen processing (0..1) */
  timeDateTime?: string;
  /** Id and extensions of the primitive `timeDateTime`. */
  _timeDateTime?: Element;
  /** Date and time of specimen processing (0..1) */
  timePeriod?: Period;

  override fhirType(): string {
    return 'Specimen.processing';
  }

  /** FHIR JSON for this SpecimenProcessing, typed as the plain `SpecimenProcessing` data type. */
  override toJSON(): plainTypes.SpecimenProcessing {
    return this.serialize() as plainTypes.SpecimenProcessing;
  }

  /** Textual description of procedure (0..1) */
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

  /** Indicates the treatment step applied to the specimen (0..1) Created when absent. */
  getProcedure(): CodeableConcept {
    if (this.procedure === undefined) {
      this.procedure = new CodeableConcept();
    }
    return this.procedure;
  }

  setProcedure(procedure: CodeableConcept | undefined): this {
    return this.setFieldValue('procedure', procedure);
  }

  hasProcedure(): boolean {
    return this.hasFieldValue('procedure');
  }

  /** Material used in the processing step (0..*) Never undefined; an empty list is created when absent. */
  getAdditive(): Reference[] {
    if (this.additive === undefined) {
      this.additive = [];
    }
    return this.additive;
  }

  setAdditive(additive: Reference[] | undefined): this {
    return this.setFieldValue('additive', additive);
  }

  hasAdditive(): boolean {
    return this.hasFieldValue('additive');
  }

  /** Appends a new, empty Reference to `additive` and returns it so it can be filled in. */
  addAdditive(): Reference;
  /** Appends the given Reference to `additive` and returns this object for chaining. */
  addAdditive(reference: Reference): this;
  addAdditive(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('additive', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('additive', createdReference);
    return createdReference;
  }

  /** The first Reference of `additive`. One is added when the list is empty. */
  getAdditiveFirstRep(): Reference {
    const firstReference = this.getAdditive()[0];
    return firstReference === undefined ? this.addAdditive() : firstReference;
  }

  /** Date and time of specimen processing (0..1) Whichever type of `time[x]` is set. */
  getTime(): string | Period | undefined {
    return this.getChoiceValue<string | Period>('time');
  }

  /** True when any type of `time[x]` is set. */
  hasTime(): boolean {
    return this.hasChoiceValue('time');
  }

  getTimeDateTime(): string | undefined {
    return this.timeDateTime;
  }

  /** Sets `time[x]` as dateTime and clears every other type of it. */
  setTimeDateTime(timeDateTime: string | undefined): this {
    return this.setFieldValue('timeDateTime', timeDateTime);
  }

  hasTimeDateTime(): boolean {
    return this.hasFieldValue('timeDateTime');
  }

  getTimePeriod(): Period | undefined {
    return this.timePeriod;
  }

  /** Sets `time[x]` as Period and clears every other type of it. */
  setTimePeriod(timePeriod: Period | undefined): this {
    return this.setFieldValue('timePeriod', timePeriod);
  }

  hasTimePeriod(): boolean {
    return this.hasFieldValue('timePeriod');
  }
}

modelTypeRegistry.register('SpecimenProcessing', SpecimenProcessing, false);

/**
 * Direct container of specimen (tube/slide, etc.)
 */
export class SpecimenContainer extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'capacity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'capacity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'specimenQuantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'specimenQuantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'additive',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'additiveCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'additiveReference', typeCode: 'Reference', targetResourceTypes: ['Substance'] },
      ],
    },
  ];

  /** Id for the container (0..*) */
  identifier?: Identifier[];

  /** Textual description of the container (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Kind of container directly associated with specimen (0..1) */
  type?: CodeableConcept;

  /** Container volume or size (0..1) */
  capacity?: Quantity;

  /** Quantity of specimen within container (0..1) */
  specimenQuantity?: Quantity;

  /** Additive associated with container (0..1) */
  additiveCodeableConcept?: CodeableConcept;
  /** Additive associated with container (0..1) */
  additiveReference?: Reference;

  override fhirType(): string {
    return 'Specimen.container';
  }

  /** FHIR JSON for this SpecimenContainer, typed as the plain `SpecimenContainer` data type. */
  override toJSON(): plainTypes.SpecimenContainer {
    return this.serialize() as plainTypes.SpecimenContainer;
  }

  /** Id for the container (0..*) Never undefined; an empty list is created when absent. */
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

  /** Textual description of the container (0..1) */
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

  /** Kind of container directly associated with specimen (0..1) Created when absent. */
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

  /** Container volume or size (0..1) Created when absent. */
  getCapacity(): Quantity {
    if (this.capacity === undefined) {
      this.capacity = new Quantity();
    }
    return this.capacity;
  }

  setCapacity(capacity: Quantity | undefined): this {
    return this.setFieldValue('capacity', capacity);
  }

  hasCapacity(): boolean {
    return this.hasFieldValue('capacity');
  }

  /** Quantity of specimen within container (0..1) Created when absent. */
  getSpecimenQuantity(): Quantity {
    if (this.specimenQuantity === undefined) {
      this.specimenQuantity = new Quantity();
    }
    return this.specimenQuantity;
  }

  setSpecimenQuantity(specimenQuantity: Quantity | undefined): this {
    return this.setFieldValue('specimenQuantity', specimenQuantity);
  }

  hasSpecimenQuantity(): boolean {
    return this.hasFieldValue('specimenQuantity');
  }

  /** Additive associated with container (0..1) Whichever type of `additive[x]` is set. */
  getAdditive(): CodeableConcept | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | Reference>('additive');
  }

  /** True when any type of `additive[x]` is set. */
  hasAdditive(): boolean {
    return this.hasChoiceValue('additive');
  }

  getAdditiveCodeableConcept(): CodeableConcept | undefined {
    return this.additiveCodeableConcept;
  }

  /** Sets `additive[x]` as CodeableConcept and clears every other type of it. */
  setAdditiveCodeableConcept(additiveCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('additiveCodeableConcept', additiveCodeableConcept);
  }

  hasAdditiveCodeableConcept(): boolean {
    return this.hasFieldValue('additiveCodeableConcept');
  }

  getAdditiveReference(): Reference | undefined {
    return this.additiveReference;
  }

  /** Sets `additive[x]` as Reference and clears every other type of it. */
  setAdditiveReference(additiveReference: Reference | undefined): this {
    return this.setFieldValue('additiveReference', additiveReference);
  }

  hasAdditiveReference(): boolean {
    return this.hasFieldValue('additiveReference');
  }
}

modelTypeRegistry.register('SpecimenContainer', SpecimenContainer, false);
