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
import { Coding } from './coding';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Reference } from './reference';

/**
 * Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context. A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.
 */
export class ImagingStudy extends DomainResource {
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
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.ImagingStudyStatus },
      ],
    },
    {
      elementName: 'modality',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'modality', typeCode: 'CodeableConcept' }],
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
          targetResourceTypes: ['Device', 'Group', 'Patient'],
        },
      ],
    },
    {
      elementName: 'encounter',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'encounter', typeCode: 'Reference', targetResourceTypes: ['Encounter'] }],
    },
    {
      elementName: 'started',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'started', typeCode: 'dateTime' }],
    },
    {
      elementName: 'basedOn',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'basedOn',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Appointment',
            'AppointmentResponse',
            'CarePlan',
            'ServiceRequest',
            'Task',
          ],
        },
      ],
    },
    {
      elementName: 'partOf',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'partOf', typeCode: 'Reference', targetResourceTypes: ['Procedure'] }],
    },
    {
      elementName: 'referrer',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'referrer',
          typeCode: 'Reference',
          targetResourceTypes: ['Practitioner', 'PractitionerRole'],
        },
      ],
    },
    {
      elementName: 'endpoint',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'endpoint', typeCode: 'Reference', targetResourceTypes: ['Endpoint'] }],
    },
    {
      elementName: 'numberOfSeries',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'numberOfSeries', typeCode: 'unsignedInt' }],
    },
    {
      elementName: 'numberOfInstances',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'numberOfInstances', typeCode: 'unsignedInt' }],
    },
    {
      elementName: 'procedure',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'procedure', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'location',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'location', typeCode: 'Reference', targetResourceTypes: ['Location'] }],
    },
    {
      elementName: 'reason',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reason', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'series',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'series', typeCode: 'ImagingStudySeries' }],
    },
  ];

  readonly resourceType = 'ImagingStudy';

  /** Identifiers for the whole study (0..*) */
  identifier?: Identifier[];

  /** registered | available | cancelled | entered-in-error | unknown (1..1) */
  status?: valueSetCodes.ImagingStudyStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** All of the distinct values for series' modalities (0..*) */
  modality?: CodeableConcept[];

  /** Who or what is the subject of the study (1..1) */
  subject?: Reference;

  /** Encounter with which this imaging study is associated (0..1) */
  encounter?: Reference;

  /** When the study was started (0..1) */
  started?: string;
  /** Id and extensions of the primitive `started`. */
  _started?: Element;

  /** Request fulfilled (0..*) */
  basedOn?: Reference[];

  /** Part of referenced event (0..*) */
  partOf?: Reference[];

  /** Referring physician (0..1) */
  referrer?: Reference;

  /** Study access endpoint (0..*) */
  endpoint?: Reference[];

  /** Number of Study Related Series (0..1) */
  numberOfSeries?: number;
  /** Id and extensions of the primitive `numberOfSeries`. */
  _numberOfSeries?: Element;

  /** Number of Study Related Instances (0..1) */
  numberOfInstances?: number;
  /** Id and extensions of the primitive `numberOfInstances`. */
  _numberOfInstances?: Element;

  /** The performed procedure or code (0..*) */
  procedure?: CodeableReference[];

  /** Where ImagingStudy occurred (0..1) */
  location?: Reference;

  /** Why the study was requested / performed (0..*) */
  reason?: CodeableReference[];

  /** User-defined comments (0..*) */
  note?: Annotation[];

  /** Institution-generated description (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Each study has one or more series of instances (0..*) */
  series?: ImagingStudySeries[];

  override fhirType(): string {
    return 'ImagingStudy';
  }

  /** FHIR JSON for this ImagingStudy, typed as the plain `ImagingStudy` data type. */
  override toJSON(): plainTypes.ImagingStudy {
    return this.serialize() as plainTypes.ImagingStudy;
  }

  /** Identifiers for the whole study (0..*) Never undefined; an empty list is created when absent. */
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

  /** registered | available | cancelled | entered-in-error | unknown (1..1) */
  getStatus(): valueSetCodes.ImagingStudyStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.ImagingStudyStatus | undefined): this {
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

  /** All of the distinct values for series' modalities (0..*) Never undefined; an empty list is created when absent. */
  getModality(): CodeableConcept[] {
    if (this.modality === undefined) {
      this.modality = [];
    }
    return this.modality;
  }

  setModality(modality: CodeableConcept[] | undefined): this {
    return this.setFieldValue('modality', modality);
  }

  hasModality(): boolean {
    return this.hasFieldValue('modality');
  }

  /** Appends a new, empty CodeableConcept to `modality` and returns it so it can be filled in. */
  addModality(): CodeableConcept;
  /** Appends the given CodeableConcept to `modality` and returns this object for chaining. */
  addModality(codeableConcept: CodeableConcept): this;
  addModality(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('modality', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('modality', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `modality`. One is added when the list is empty. */
  getModalityFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getModality()[0];
    return firstCodeableConcept === undefined ? this.addModality() : firstCodeableConcept;
  }

  /** Who or what is the subject of the study (1..1) Created when absent. */
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

  /** Encounter with which this imaging study is associated (0..1) Created when absent. */
  getEncounter(): Reference {
    if (this.encounter === undefined) {
      this.encounter = new Reference();
    }
    return this.encounter;
  }

  setEncounter(encounter: Reference | undefined): this {
    return this.setFieldValue('encounter', encounter);
  }

  hasEncounter(): boolean {
    return this.hasFieldValue('encounter');
  }

  /** When the study was started (0..1) */
  getStarted(): string | undefined {
    return this.started;
  }

  /** Sets `started`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setStarted(started: string | undefined): this {
    return this.setFieldValue('started', started);
  }

  hasStarted(): boolean {
    return this.hasFieldValue('started');
  }

  /** The element carrying the id and extensions of `started`. Created when absent. */
  getStartedElement(): Element {
    if (this._started === undefined) {
      this._started = new Element();
    }
    return this._started;
  }

  setStartedElement(startedElement: Element | undefined): this {
    this._started = startedElement;
    return this;
  }

  /** Request fulfilled (0..*) Never undefined; an empty list is created when absent. */
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

  /** Referring physician (0..1) Created when absent. */
  getReferrer(): Reference {
    if (this.referrer === undefined) {
      this.referrer = new Reference();
    }
    return this.referrer;
  }

  setReferrer(referrer: Reference | undefined): this {
    return this.setFieldValue('referrer', referrer);
  }

  hasReferrer(): boolean {
    return this.hasFieldValue('referrer');
  }

  /** Study access endpoint (0..*) Never undefined; an empty list is created when absent. */
  getEndpoint(): Reference[] {
    if (this.endpoint === undefined) {
      this.endpoint = [];
    }
    return this.endpoint;
  }

  setEndpoint(endpoint: Reference[] | undefined): this {
    return this.setFieldValue('endpoint', endpoint);
  }

  hasEndpoint(): boolean {
    return this.hasFieldValue('endpoint');
  }

  /** Appends a new, empty Reference to `endpoint` and returns it so it can be filled in. */
  addEndpoint(): Reference;
  /** Appends the given Reference to `endpoint` and returns this object for chaining. */
  addEndpoint(reference: Reference): this;
  addEndpoint(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('endpoint', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('endpoint', createdReference);
    return createdReference;
  }

  /** The first Reference of `endpoint`. One is added when the list is empty. */
  getEndpointFirstRep(): Reference {
    const firstReference = this.getEndpoint()[0];
    return firstReference === undefined ? this.addEndpoint() : firstReference;
  }

  /** Number of Study Related Series (0..1) */
  getNumberOfSeries(): number | undefined {
    return this.numberOfSeries;
  }

  /** Sets `numberOfSeries`. Throws a FhirModelError when the value is not a valid FHIR unsignedInt. */
  setNumberOfSeries(numberOfSeries: number | undefined): this {
    return this.setFieldValue('numberOfSeries', numberOfSeries);
  }

  hasNumberOfSeries(): boolean {
    return this.hasFieldValue('numberOfSeries');
  }

  /** The element carrying the id and extensions of `numberOfSeries`. Created when absent. */
  getNumberOfSeriesElement(): Element {
    if (this._numberOfSeries === undefined) {
      this._numberOfSeries = new Element();
    }
    return this._numberOfSeries;
  }

  setNumberOfSeriesElement(numberOfSeriesElement: Element | undefined): this {
    this._numberOfSeries = numberOfSeriesElement;
    return this;
  }

  /** Number of Study Related Instances (0..1) */
  getNumberOfInstances(): number | undefined {
    return this.numberOfInstances;
  }

  /** Sets `numberOfInstances`. Throws a FhirModelError when the value is not a valid FHIR unsignedInt. */
  setNumberOfInstances(numberOfInstances: number | undefined): this {
    return this.setFieldValue('numberOfInstances', numberOfInstances);
  }

  hasNumberOfInstances(): boolean {
    return this.hasFieldValue('numberOfInstances');
  }

  /** The element carrying the id and extensions of `numberOfInstances`. Created when absent. */
  getNumberOfInstancesElement(): Element {
    if (this._numberOfInstances === undefined) {
      this._numberOfInstances = new Element();
    }
    return this._numberOfInstances;
  }

  setNumberOfInstancesElement(numberOfInstancesElement: Element | undefined): this {
    this._numberOfInstances = numberOfInstancesElement;
    return this;
  }

  /** The performed procedure or code (0..*) Never undefined; an empty list is created when absent. */
  getProcedure(): CodeableReference[] {
    if (this.procedure === undefined) {
      this.procedure = [];
    }
    return this.procedure;
  }

  setProcedure(procedure: CodeableReference[] | undefined): this {
    return this.setFieldValue('procedure', procedure);
  }

  hasProcedure(): boolean {
    return this.hasFieldValue('procedure');
  }

  /** Appends a new, empty CodeableReference to `procedure` and returns it so it can be filled in. */
  addProcedure(): CodeableReference;
  /** Appends the given CodeableReference to `procedure` and returns this object for chaining. */
  addProcedure(codeableReference: CodeableReference): this;
  addProcedure(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('procedure', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('procedure', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `procedure`. One is added when the list is empty. */
  getProcedureFirstRep(): CodeableReference {
    const firstCodeableReference = this.getProcedure()[0];
    return firstCodeableReference === undefined ? this.addProcedure() : firstCodeableReference;
  }

  /** Where ImagingStudy occurred (0..1) Created when absent. */
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

  /** Why the study was requested / performed (0..*) Never undefined; an empty list is created when absent. */
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

  /** User-defined comments (0..*) Never undefined; an empty list is created when absent. */
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

  /** Institution-generated description (0..1) */
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

  /** Each study has one or more series of instances (0..*) Never undefined; an empty list is created when absent. */
  getSeries(): ImagingStudySeries[] {
    if (this.series === undefined) {
      this.series = [];
    }
    return this.series;
  }

  setSeries(series: ImagingStudySeries[] | undefined): this {
    return this.setFieldValue('series', series);
  }

  hasSeries(): boolean {
    return this.hasFieldValue('series');
  }

  /** Appends a new, empty ImagingStudySeries to `series` and returns it so it can be filled in. */
  addSeries(): ImagingStudySeries;
  /** Appends the given ImagingStudySeries to `series` and returns this object for chaining. */
  addSeries(imagingStudySeries: ImagingStudySeries): this;
  addSeries(imagingStudySeries?: ImagingStudySeries): ImagingStudySeries | this {
    if (imagingStudySeries !== undefined) {
      return this.addFieldValue('series', imagingStudySeries);
    }
    const createdImagingStudySeries = new ImagingStudySeries();
    this.addFieldValue('series', createdImagingStudySeries);
    return createdImagingStudySeries;
  }

  /** The first ImagingStudySeries of `series`. One is added when the list is empty. */
  getSeriesFirstRep(): ImagingStudySeries {
    const firstImagingStudySeries = this.getSeries()[0];
    return firstImagingStudySeries === undefined ? this.addSeries() : firstImagingStudySeries;
  }
}

modelTypeRegistry.register('ImagingStudy', ImagingStudy, true);

/** True when the value is a ImagingStudy model instance. */
export function isImagingStudy(candidate: unknown): candidate is ImagingStudy {
  return candidate instanceof ImagingStudy;
}

/**
 * Each study has one or more series of instances
 */
export class ImagingStudySeries extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'uid',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'uid', typeCode: 'id' }],
    },
    {
      elementName: 'number',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'number', typeCode: 'unsignedInt' }],
    },
    {
      elementName: 'modality',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'modality', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'numberOfInstances',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'numberOfInstances', typeCode: 'unsignedInt' }],
    },
    {
      elementName: 'endpoint',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'endpoint', typeCode: 'Reference', targetResourceTypes: ['Endpoint'] }],
    },
    {
      elementName: 'bodySite',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'bodySite', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'laterality',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'laterality', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'specimen',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'specimen', typeCode: 'Reference', targetResourceTypes: ['Specimen'] }],
    },
    {
      elementName: 'started',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'started', typeCode: 'dateTime' }],
    },
    {
      elementName: 'performer',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'performer', typeCode: 'ImagingStudySeriesPerformer' }],
    },
    {
      elementName: 'instance',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'instance', typeCode: 'ImagingStudySeriesInstance' }],
    },
  ];

  /** DICOM Series Instance UID for the series (1..1) */
  uid?: string;
  /** Id and extensions of the primitive `uid`. */
  _uid?: Element;

  /** Numeric identifier of this series (0..1) */
  number?: number;
  /** Id and extensions of the primitive `number`. */
  _number?: Element;

  /** The modality used for this series (1..1) */
  modality?: CodeableConcept;

  /** A short human readable summary of the series (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Number of Series Related Instances (0..1) */
  numberOfInstances?: number;
  /** Id and extensions of the primitive `numberOfInstances`. */
  _numberOfInstances?: Element;

  /** Series access endpoint (0..*) */
  endpoint?: Reference[];

  /** Body part examined (0..1) */
  bodySite?: CodeableReference;

  /** Body part laterality (0..1) */
  laterality?: CodeableConcept;

  /** Specimen imaged (0..*) */
  specimen?: Reference[];

  /** When the series started (0..1) */
  started?: string;
  /** Id and extensions of the primitive `started`. */
  _started?: Element;

  /** Who performed the series (0..*) */
  performer?: ImagingStudySeriesPerformer[];

  /** A single SOP instance from the series (0..*) */
  instance?: ImagingStudySeriesInstance[];

  override fhirType(): string {
    return 'ImagingStudy.series';
  }

  /** FHIR JSON for this ImagingStudySeries, typed as the plain `ImagingStudySeries` data type. */
  override toJSON(): plainTypes.ImagingStudySeries {
    return this.serialize() as plainTypes.ImagingStudySeries;
  }

  /** DICOM Series Instance UID for the series (1..1) */
  getUid(): string | undefined {
    return this.uid;
  }

  /** Sets `uid`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setUid(uid: string | undefined): this {
    return this.setFieldValue('uid', uid);
  }

  hasUid(): boolean {
    return this.hasFieldValue('uid');
  }

  /** The element carrying the id and extensions of `uid`. Created when absent. */
  getUidElement(): Element {
    if (this._uid === undefined) {
      this._uid = new Element();
    }
    return this._uid;
  }

  setUidElement(uidElement: Element | undefined): this {
    this._uid = uidElement;
    return this;
  }

  /** Numeric identifier of this series (0..1) */
  getNumber(): number | undefined {
    return this.number;
  }

  /** Sets `number`. Throws a FhirModelError when the value is not a valid FHIR unsignedInt. */
  setNumber(number: number | undefined): this {
    return this.setFieldValue('number', number);
  }

  hasNumber(): boolean {
    return this.hasFieldValue('number');
  }

  /** The element carrying the id and extensions of `number`. Created when absent. */
  getNumberElement(): Element {
    if (this._number === undefined) {
      this._number = new Element();
    }
    return this._number;
  }

  setNumberElement(numberElement: Element | undefined): this {
    this._number = numberElement;
    return this;
  }

  /** The modality used for this series (1..1) Created when absent. */
  getModality(): CodeableConcept {
    if (this.modality === undefined) {
      this.modality = new CodeableConcept();
    }
    return this.modality;
  }

  setModality(modality: CodeableConcept | undefined): this {
    return this.setFieldValue('modality', modality);
  }

  hasModality(): boolean {
    return this.hasFieldValue('modality');
  }

  /** A short human readable summary of the series (0..1) */
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

  /** Number of Series Related Instances (0..1) */
  getNumberOfInstances(): number | undefined {
    return this.numberOfInstances;
  }

  /** Sets `numberOfInstances`. Throws a FhirModelError when the value is not a valid FHIR unsignedInt. */
  setNumberOfInstances(numberOfInstances: number | undefined): this {
    return this.setFieldValue('numberOfInstances', numberOfInstances);
  }

  hasNumberOfInstances(): boolean {
    return this.hasFieldValue('numberOfInstances');
  }

  /** The element carrying the id and extensions of `numberOfInstances`. Created when absent. */
  getNumberOfInstancesElement(): Element {
    if (this._numberOfInstances === undefined) {
      this._numberOfInstances = new Element();
    }
    return this._numberOfInstances;
  }

  setNumberOfInstancesElement(numberOfInstancesElement: Element | undefined): this {
    this._numberOfInstances = numberOfInstancesElement;
    return this;
  }

  /** Series access endpoint (0..*) Never undefined; an empty list is created when absent. */
  getEndpoint(): Reference[] {
    if (this.endpoint === undefined) {
      this.endpoint = [];
    }
    return this.endpoint;
  }

  setEndpoint(endpoint: Reference[] | undefined): this {
    return this.setFieldValue('endpoint', endpoint);
  }

  hasEndpoint(): boolean {
    return this.hasFieldValue('endpoint');
  }

  /** Appends a new, empty Reference to `endpoint` and returns it so it can be filled in. */
  addEndpoint(): Reference;
  /** Appends the given Reference to `endpoint` and returns this object for chaining. */
  addEndpoint(reference: Reference): this;
  addEndpoint(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('endpoint', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('endpoint', createdReference);
    return createdReference;
  }

  /** The first Reference of `endpoint`. One is added when the list is empty. */
  getEndpointFirstRep(): Reference {
    const firstReference = this.getEndpoint()[0];
    return firstReference === undefined ? this.addEndpoint() : firstReference;
  }

  /** Body part examined (0..1) Created when absent. */
  getBodySite(): CodeableReference {
    if (this.bodySite === undefined) {
      this.bodySite = new CodeableReference();
    }
    return this.bodySite;
  }

  setBodySite(bodySite: CodeableReference | undefined): this {
    return this.setFieldValue('bodySite', bodySite);
  }

  hasBodySite(): boolean {
    return this.hasFieldValue('bodySite');
  }

  /** Body part laterality (0..1) Created when absent. */
  getLaterality(): CodeableConcept {
    if (this.laterality === undefined) {
      this.laterality = new CodeableConcept();
    }
    return this.laterality;
  }

  setLaterality(laterality: CodeableConcept | undefined): this {
    return this.setFieldValue('laterality', laterality);
  }

  hasLaterality(): boolean {
    return this.hasFieldValue('laterality');
  }

  /** Specimen imaged (0..*) Never undefined; an empty list is created when absent. */
  getSpecimen(): Reference[] {
    if (this.specimen === undefined) {
      this.specimen = [];
    }
    return this.specimen;
  }

  setSpecimen(specimen: Reference[] | undefined): this {
    return this.setFieldValue('specimen', specimen);
  }

  hasSpecimen(): boolean {
    return this.hasFieldValue('specimen');
  }

  /** Appends a new, empty Reference to `specimen` and returns it so it can be filled in. */
  addSpecimen(): Reference;
  /** Appends the given Reference to `specimen` and returns this object for chaining. */
  addSpecimen(reference: Reference): this;
  addSpecimen(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('specimen', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('specimen', createdReference);
    return createdReference;
  }

  /** The first Reference of `specimen`. One is added when the list is empty. */
  getSpecimenFirstRep(): Reference {
    const firstReference = this.getSpecimen()[0];
    return firstReference === undefined ? this.addSpecimen() : firstReference;
  }

  /** When the series started (0..1) */
  getStarted(): string | undefined {
    return this.started;
  }

  /** Sets `started`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setStarted(started: string | undefined): this {
    return this.setFieldValue('started', started);
  }

  hasStarted(): boolean {
    return this.hasFieldValue('started');
  }

  /** The element carrying the id and extensions of `started`. Created when absent. */
  getStartedElement(): Element {
    if (this._started === undefined) {
      this._started = new Element();
    }
    return this._started;
  }

  setStartedElement(startedElement: Element | undefined): this {
    this._started = startedElement;
    return this;
  }

  /** Who performed the series (0..*) Never undefined; an empty list is created when absent. */
  getPerformer(): ImagingStudySeriesPerformer[] {
    if (this.performer === undefined) {
      this.performer = [];
    }
    return this.performer;
  }

  setPerformer(performer: ImagingStudySeriesPerformer[] | undefined): this {
    return this.setFieldValue('performer', performer);
  }

  hasPerformer(): boolean {
    return this.hasFieldValue('performer');
  }

  /** Appends a new, empty ImagingStudySeriesPerformer to `performer` and returns it so it can be filled in. */
  addPerformer(): ImagingStudySeriesPerformer;
  /** Appends the given ImagingStudySeriesPerformer to `performer` and returns this object for chaining. */
  addPerformer(imagingStudySeriesPerformer: ImagingStudySeriesPerformer): this;
  addPerformer(
    imagingStudySeriesPerformer?: ImagingStudySeriesPerformer
  ): ImagingStudySeriesPerformer | this {
    if (imagingStudySeriesPerformer !== undefined) {
      return this.addFieldValue('performer', imagingStudySeriesPerformer);
    }
    const createdImagingStudySeriesPerformer = new ImagingStudySeriesPerformer();
    this.addFieldValue('performer', createdImagingStudySeriesPerformer);
    return createdImagingStudySeriesPerformer;
  }

  /** The first ImagingStudySeriesPerformer of `performer`. One is added when the list is empty. */
  getPerformerFirstRep(): ImagingStudySeriesPerformer {
    const firstImagingStudySeriesPerformer = this.getPerformer()[0];
    return firstImagingStudySeriesPerformer === undefined
      ? this.addPerformer()
      : firstImagingStudySeriesPerformer;
  }

  /** A single SOP instance from the series (0..*) Never undefined; an empty list is created when absent. */
  getInstance(): ImagingStudySeriesInstance[] {
    if (this.instance === undefined) {
      this.instance = [];
    }
    return this.instance;
  }

  setInstance(instance: ImagingStudySeriesInstance[] | undefined): this {
    return this.setFieldValue('instance', instance);
  }

  hasInstance(): boolean {
    return this.hasFieldValue('instance');
  }

  /** Appends a new, empty ImagingStudySeriesInstance to `instance` and returns it so it can be filled in. */
  addInstance(): ImagingStudySeriesInstance;
  /** Appends the given ImagingStudySeriesInstance to `instance` and returns this object for chaining. */
  addInstance(imagingStudySeriesInstance: ImagingStudySeriesInstance): this;
  addInstance(
    imagingStudySeriesInstance?: ImagingStudySeriesInstance
  ): ImagingStudySeriesInstance | this {
    if (imagingStudySeriesInstance !== undefined) {
      return this.addFieldValue('instance', imagingStudySeriesInstance);
    }
    const createdImagingStudySeriesInstance = new ImagingStudySeriesInstance();
    this.addFieldValue('instance', createdImagingStudySeriesInstance);
    return createdImagingStudySeriesInstance;
  }

  /** The first ImagingStudySeriesInstance of `instance`. One is added when the list is empty. */
  getInstanceFirstRep(): ImagingStudySeriesInstance {
    const firstImagingStudySeriesInstance = this.getInstance()[0];
    return firstImagingStudySeriesInstance === undefined
      ? this.addInstance()
      : firstImagingStudySeriesInstance;
  }
}

modelTypeRegistry.register('ImagingStudySeries', ImagingStudySeries, false);

/**
 * Who performed the series
 */
export class ImagingStudySeriesPerformer extends BackboneElement {
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
      types: [
        {
          jsonKey: 'actor',
          typeCode: 'Reference',
          targetResourceTypes: [
            'CareTeam',
            'Device',
            'HealthcareService',
            'Organization',
            'Patient',
            'Practitioner',
            'PractitionerRole',
            'RelatedPerson',
          ],
        },
      ],
    },
  ];

  /** Type of performance (0..1) */
  function?: CodeableConcept;

  /** Who performed the series (1..1) */
  actor?: Reference;

  override fhirType(): string {
    return 'ImagingStudy.series.performer';
  }

  /** FHIR JSON for this ImagingStudySeriesPerformer, typed as the plain `ImagingStudyPerformer` data type. */
  override toJSON(): plainTypes.ImagingStudyPerformer {
    return this.serialize() as plainTypes.ImagingStudyPerformer;
  }

  /** Type of performance (0..1) Created when absent. */
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

  /** Who performed the series (1..1) Created when absent. */
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

modelTypeRegistry.register('ImagingStudySeriesPerformer', ImagingStudySeriesPerformer, false);

/**
 * A single SOP instance from the series
 */
export class ImagingStudySeriesInstance extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'uid',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'uid', typeCode: 'id' }],
    },
    {
      elementName: 'sopClass',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sopClass', typeCode: 'Coding' }],
    },
    {
      elementName: 'number',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'number', typeCode: 'unsignedInt' }],
    },
    {
      elementName: 'title',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'title', typeCode: 'string' }],
    },
  ];

  /** DICOM SOP Instance UID (1..1) */
  uid?: string;
  /** Id and extensions of the primitive `uid`. */
  _uid?: Element;

  /** DICOM class type (1..1) */
  sopClass?: Coding;

  /** The number of this instance in the series (0..1) */
  number?: number;
  /** Id and extensions of the primitive `number`. */
  _number?: Element;

  /** Description of instance (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

  override fhirType(): string {
    return 'ImagingStudy.series.instance';
  }

  /** FHIR JSON for this ImagingStudySeriesInstance, typed as the plain `ImagingStudyInstance` data type. */
  override toJSON(): plainTypes.ImagingStudyInstance {
    return this.serialize() as plainTypes.ImagingStudyInstance;
  }

  /** DICOM SOP Instance UID (1..1) */
  getUid(): string | undefined {
    return this.uid;
  }

  /** Sets `uid`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setUid(uid: string | undefined): this {
    return this.setFieldValue('uid', uid);
  }

  hasUid(): boolean {
    return this.hasFieldValue('uid');
  }

  /** The element carrying the id and extensions of `uid`. Created when absent. */
  getUidElement(): Element {
    if (this._uid === undefined) {
      this._uid = new Element();
    }
    return this._uid;
  }

  setUidElement(uidElement: Element | undefined): this {
    this._uid = uidElement;
    return this;
  }

  /** DICOM class type (1..1) Created when absent. */
  getSopClass(): Coding {
    if (this.sopClass === undefined) {
      this.sopClass = new Coding();
    }
    return this.sopClass;
  }

  setSopClass(sopClass: Coding | undefined): this {
    return this.setFieldValue('sopClass', sopClass);
  }

  hasSopClass(): boolean {
    return this.hasFieldValue('sopClass');
  }

  /** The number of this instance in the series (0..1) */
  getNumber(): number | undefined {
    return this.number;
  }

  /** Sets `number`. Throws a FhirModelError when the value is not a valid FHIR unsignedInt. */
  setNumber(number: number | undefined): this {
    return this.setFieldValue('number', number);
  }

  hasNumber(): boolean {
    return this.hasFieldValue('number');
  }

  /** The element carrying the id and extensions of `number`. Created when absent. */
  getNumberElement(): Element {
    if (this._number === undefined) {
      this._number = new Element();
    }
    return this._number;
  }

  setNumberElement(numberElement: Element | undefined): this {
    this._number = numberElement;
    return this;
  }

  /** Description of instance (0..1) */
  getTitle(): string | undefined {
    return this.title;
  }

  /** Sets `title`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setTitle(title: string | undefined): this {
    return this.setFieldValue('title', title);
  }

  hasTitle(): boolean {
    return this.hasFieldValue('title');
  }

  /** The element carrying the id and extensions of `title`. Created when absent. */
  getTitleElement(): Element {
    if (this._title === undefined) {
      this._title = new Element();
    }
    return this._title;
  }

  setTitleElement(titleElement: Element | undefined): this {
    this._title = titleElement;
    return this;
  }
}

modelTypeRegistry.register('ImagingStudySeriesInstance', ImagingStudySeriesInstance, false);
