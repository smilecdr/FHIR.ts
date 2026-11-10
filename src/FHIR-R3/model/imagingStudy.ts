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
import { Coding } from './coding';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Reference } from './reference';

/**
 * Base StructureDefinition for ImagingStudy Resource
 */
export class ImagingStudy extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'uid',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'uid', typeCode: 'oid' }],
    },
    {
      elementName: 'accession',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'accession', typeCode: 'Identifier' }],
    },
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'availability',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'availability',
          typeCode: 'code',
          allowedCodes: valueSetCodes.InstanceAvailability,
        },
      ],
    },
    {
      elementName: 'modalityList',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'modalityList', typeCode: 'Coding' }],
    },
    {
      elementName: 'patient',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'patient', typeCode: 'Reference', targetResourceTypes: ['Patient'] }],
    },
    {
      elementName: 'context',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'context',
          typeCode: 'Reference',
          targetResourceTypes: ['Encounter', 'EpisodeOfCare'],
        },
      ],
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
          targetResourceTypes: ['CarePlan', 'ProcedureRequest', 'ReferralRequest'],
        },
      ],
    },
    {
      elementName: 'referrer',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'referrer', typeCode: 'Reference', targetResourceTypes: ['Practitioner'] },
      ],
    },
    {
      elementName: 'interpreter',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'interpreter', typeCode: 'Reference', targetResourceTypes: ['Practitioner'] },
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
      elementName: 'procedureReference',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'procedureReference',
          typeCode: 'Reference',
          targetResourceTypes: ['Procedure'],
        },
      ],
    },
    {
      elementName: 'procedureCode',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'procedureCode', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'reason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reason', typeCode: 'CodeableConcept' }],
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

  /** Formal DICOM identifier for the study (1..1) */
  uid?: string;
  /** Id and extensions of the primitive `uid`. */
  _uid?: Element;

  /** Related workflow identifier ("Accession Number") (0..1) */
  accession?: Identifier;

  /** Other identifiers for the study (0..*) */
  identifier?: Identifier[];

  /** ONLINE | OFFLINE | NEARLINE | UNAVAILABLE (0..1) */
  availability?: valueSetCodes.InstanceAvailability;
  /** Id and extensions of the primitive `availability`. */
  _availability?: Element;

  /** All series modality if actual acquisition modalities (0..*) */
  modalityList?: Coding[];

  /** Who the images are of (1..1) */
  patient?: Reference;

  /** Originating context (0..1) */
  context?: Reference;

  /** When the study was started (0..1) */
  started?: string;
  /** Id and extensions of the primitive `started`. */
  _started?: Element;

  /** Request fulfilled (0..*) */
  basedOn?: Reference[];

  /** Referring physician (0..1) */
  referrer?: Reference;

  /** Who interpreted images (0..*) */
  interpreter?: Reference[];

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

  /** The performed Procedure reference (0..*) */
  procedureReference?: Reference[];

  /** The performed procedure code (0..*) */
  procedureCode?: CodeableConcept[];

  /** Why the study was requested (0..1) */
  reason?: CodeableConcept;

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

  /** Formal DICOM identifier for the study (1..1) */
  getUid(): string | undefined {
    return this.uid;
  }

  /** Sets `uid`. Throws a FhirModelError when the value is not a valid FHIR oid. */
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

  /** Related workflow identifier ("Accession Number") (0..1) Created when absent. */
  getAccession(): Identifier {
    if (this.accession === undefined) {
      this.accession = new Identifier();
    }
    return this.accession;
  }

  setAccession(accession: Identifier | undefined): this {
    return this.setFieldValue('accession', accession);
  }

  hasAccession(): boolean {
    return this.hasFieldValue('accession');
  }

  /** Other identifiers for the study (0..*) Never undefined; an empty list is created when absent. */
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

  /** ONLINE | OFFLINE | NEARLINE | UNAVAILABLE (0..1) */
  getAvailability(): valueSetCodes.InstanceAvailability | undefined {
    return this.availability;
  }

  /** Sets `availability`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setAvailability(availability: valueSetCodes.InstanceAvailability | undefined): this {
    return this.setFieldValue('availability', availability);
  }

  hasAvailability(): boolean {
    return this.hasFieldValue('availability');
  }

  /** The element carrying the id and extensions of `availability`. Created when absent. */
  getAvailabilityElement(): Element {
    if (this._availability === undefined) {
      this._availability = new Element();
    }
    return this._availability;
  }

  setAvailabilityElement(availabilityElement: Element | undefined): this {
    this._availability = availabilityElement;
    return this;
  }

  /** All series modality if actual acquisition modalities (0..*) Never undefined; an empty list is created when absent. */
  getModalityList(): Coding[] {
    if (this.modalityList === undefined) {
      this.modalityList = [];
    }
    return this.modalityList;
  }

  setModalityList(modalityList: Coding[] | undefined): this {
    return this.setFieldValue('modalityList', modalityList);
  }

  hasModalityList(): boolean {
    return this.hasFieldValue('modalityList');
  }

  /** Appends a new, empty Coding to `modalityList` and returns it so it can be filled in. */
  addModalityList(): Coding;
  /** Appends the given Coding to `modalityList` and returns this object for chaining. */
  addModalityList(coding: Coding): this;
  addModalityList(coding?: Coding): Coding | this {
    if (coding !== undefined) {
      return this.addFieldValue('modalityList', coding);
    }
    const createdCoding = new Coding();
    this.addFieldValue('modalityList', createdCoding);
    return createdCoding;
  }

  /** The first Coding of `modalityList`. One is added when the list is empty. */
  getModalityListFirstRep(): Coding {
    const firstCoding = this.getModalityList()[0];
    return firstCoding === undefined ? this.addModalityList() : firstCoding;
  }

  /** Who the images are of (1..1) Created when absent. */
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

  /** Originating context (0..1) Created when absent. */
  getContext(): Reference {
    if (this.context === undefined) {
      this.context = new Reference();
    }
    return this.context;
  }

  setContext(context: Reference | undefined): this {
    return this.setFieldValue('context', context);
  }

  hasContext(): boolean {
    return this.hasFieldValue('context');
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

  /** Who interpreted images (0..*) Never undefined; an empty list is created when absent. */
  getInterpreter(): Reference[] {
    if (this.interpreter === undefined) {
      this.interpreter = [];
    }
    return this.interpreter;
  }

  setInterpreter(interpreter: Reference[] | undefined): this {
    return this.setFieldValue('interpreter', interpreter);
  }

  hasInterpreter(): boolean {
    return this.hasFieldValue('interpreter');
  }

  /** Appends a new, empty Reference to `interpreter` and returns it so it can be filled in. */
  addInterpreter(): Reference;
  /** Appends the given Reference to `interpreter` and returns this object for chaining. */
  addInterpreter(reference: Reference): this;
  addInterpreter(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('interpreter', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('interpreter', createdReference);
    return createdReference;
  }

  /** The first Reference of `interpreter`. One is added when the list is empty. */
  getInterpreterFirstRep(): Reference {
    const firstReference = this.getInterpreter()[0];
    return firstReference === undefined ? this.addInterpreter() : firstReference;
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

  /** The performed Procedure reference (0..*) Never undefined; an empty list is created when absent. */
  getProcedureReference(): Reference[] {
    if (this.procedureReference === undefined) {
      this.procedureReference = [];
    }
    return this.procedureReference;
  }

  setProcedureReference(procedureReference: Reference[] | undefined): this {
    return this.setFieldValue('procedureReference', procedureReference);
  }

  hasProcedureReference(): boolean {
    return this.hasFieldValue('procedureReference');
  }

  /** Appends a new, empty Reference to `procedureReference` and returns it so it can be filled in. */
  addProcedureReference(): Reference;
  /** Appends the given Reference to `procedureReference` and returns this object for chaining. */
  addProcedureReference(reference: Reference): this;
  addProcedureReference(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('procedureReference', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('procedureReference', createdReference);
    return createdReference;
  }

  /** The first Reference of `procedureReference`. One is added when the list is empty. */
  getProcedureReferenceFirstRep(): Reference {
    const firstReference = this.getProcedureReference()[0];
    return firstReference === undefined ? this.addProcedureReference() : firstReference;
  }

  /** The performed procedure code (0..*) Never undefined; an empty list is created when absent. */
  getProcedureCode(): CodeableConcept[] {
    if (this.procedureCode === undefined) {
      this.procedureCode = [];
    }
    return this.procedureCode;
  }

  setProcedureCode(procedureCode: CodeableConcept[] | undefined): this {
    return this.setFieldValue('procedureCode', procedureCode);
  }

  hasProcedureCode(): boolean {
    return this.hasFieldValue('procedureCode');
  }

  /** Appends a new, empty CodeableConcept to `procedureCode` and returns it so it can be filled in. */
  addProcedureCode(): CodeableConcept;
  /** Appends the given CodeableConcept to `procedureCode` and returns this object for chaining. */
  addProcedureCode(codeableConcept: CodeableConcept): this;
  addProcedureCode(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('procedureCode', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('procedureCode', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `procedureCode`. One is added when the list is empty. */
  getProcedureCodeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getProcedureCode()[0];
    return firstCodeableConcept === undefined ? this.addProcedureCode() : firstCodeableConcept;
  }

  /** Why the study was requested (0..1) Created when absent. */
  getReason(): CodeableConcept {
    if (this.reason === undefined) {
      this.reason = new CodeableConcept();
    }
    return this.reason;
  }

  setReason(reason: CodeableConcept | undefined): this {
    return this.setFieldValue('reason', reason);
  }

  hasReason(): boolean {
    return this.hasFieldValue('reason');
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
      types: [{ jsonKey: 'uid', typeCode: 'oid' }],
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
      types: [{ jsonKey: 'modality', typeCode: 'Coding' }],
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
      elementName: 'availability',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'availability',
          typeCode: 'code',
          allowedCodes: valueSetCodes.InstanceAvailability,
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
      elementName: 'bodySite',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'bodySite', typeCode: 'Coding' }],
    },
    {
      elementName: 'laterality',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'laterality', typeCode: 'Coding' }],
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
      types: [
        { jsonKey: 'performer', typeCode: 'Reference', targetResourceTypes: ['Practitioner'] },
      ],
    },
    {
      elementName: 'instance',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'instance', typeCode: 'ImagingStudySeriesInstance' }],
    },
  ];

  /** Formal DICOM identifier for this series (1..1) */
  uid?: string;
  /** Id and extensions of the primitive `uid`. */
  _uid?: Element;

  /** Numeric identifier of this series (0..1) */
  number?: number;
  /** Id and extensions of the primitive `number`. */
  _number?: Element;

  /** The modality of the instances in the series (1..1) */
  modality?: Coding;

  /** A short human readable summary of the series (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Number of Series Related Instances (0..1) */
  numberOfInstances?: number;
  /** Id and extensions of the primitive `numberOfInstances`. */
  _numberOfInstances?: Element;

  /** ONLINE | OFFLINE | NEARLINE | UNAVAILABLE (0..1) */
  availability?: valueSetCodes.InstanceAvailability;
  /** Id and extensions of the primitive `availability`. */
  _availability?: Element;

  /** Series access endpoint (0..*) */
  endpoint?: Reference[];

  /** Body part examined (0..1) */
  bodySite?: Coding;

  /** Body part laterality (0..1) */
  laterality?: Coding;

  /** When the series started (0..1) */
  started?: string;
  /** Id and extensions of the primitive `started`. */
  _started?: Element;

  /** Who performed the series (0..*) */
  performer?: Reference[];

  /** A single SOP instance from the series (0..*) */
  instance?: ImagingStudySeriesInstance[];

  override fhirType(): string {
    return 'ImagingStudy.series';
  }

  /** FHIR JSON for this ImagingStudySeries, typed as the plain `ImagingStudySeries` data type. */
  override toJSON(): plainTypes.ImagingStudySeries {
    return this.serialize() as plainTypes.ImagingStudySeries;
  }

  /** Formal DICOM identifier for this series (1..1) */
  getUid(): string | undefined {
    return this.uid;
  }

  /** Sets `uid`. Throws a FhirModelError when the value is not a valid FHIR oid. */
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

  /** The modality of the instances in the series (1..1) Created when absent. */
  getModality(): Coding {
    if (this.modality === undefined) {
      this.modality = new Coding();
    }
    return this.modality;
  }

  setModality(modality: Coding | undefined): this {
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

  /** ONLINE | OFFLINE | NEARLINE | UNAVAILABLE (0..1) */
  getAvailability(): valueSetCodes.InstanceAvailability | undefined {
    return this.availability;
  }

  /** Sets `availability`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setAvailability(availability: valueSetCodes.InstanceAvailability | undefined): this {
    return this.setFieldValue('availability', availability);
  }

  hasAvailability(): boolean {
    return this.hasFieldValue('availability');
  }

  /** The element carrying the id and extensions of `availability`. Created when absent. */
  getAvailabilityElement(): Element {
    if (this._availability === undefined) {
      this._availability = new Element();
    }
    return this._availability;
  }

  setAvailabilityElement(availabilityElement: Element | undefined): this {
    this._availability = availabilityElement;
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
  getBodySite(): Coding {
    if (this.bodySite === undefined) {
      this.bodySite = new Coding();
    }
    return this.bodySite;
  }

  setBodySite(bodySite: Coding | undefined): this {
    return this.setFieldValue('bodySite', bodySite);
  }

  hasBodySite(): boolean {
    return this.hasFieldValue('bodySite');
  }

  /** Body part laterality (0..1) Created when absent. */
  getLaterality(): Coding {
    if (this.laterality === undefined) {
      this.laterality = new Coding();
    }
    return this.laterality;
  }

  setLaterality(laterality: Coding | undefined): this {
    return this.setFieldValue('laterality', laterality);
  }

  hasLaterality(): boolean {
    return this.hasFieldValue('laterality');
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
  getPerformer(): Reference[] {
    if (this.performer === undefined) {
      this.performer = [];
    }
    return this.performer;
  }

  setPerformer(performer: Reference[] | undefined): this {
    return this.setFieldValue('performer', performer);
  }

  hasPerformer(): boolean {
    return this.hasFieldValue('performer');
  }

  /** Appends a new, empty Reference to `performer` and returns it so it can be filled in. */
  addPerformer(): Reference;
  /** Appends the given Reference to `performer` and returns this object for chaining. */
  addPerformer(reference: Reference): this;
  addPerformer(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('performer', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('performer', createdReference);
    return createdReference;
  }

  /** The first Reference of `performer`. One is added when the list is empty. */
  getPerformerFirstRep(): Reference {
    const firstReference = this.getPerformer()[0];
    return firstReference === undefined ? this.addPerformer() : firstReference;
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
 * A single SOP instance from the series
 */
export class ImagingStudySeriesInstance extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'uid',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'uid', typeCode: 'oid' }],
    },
    {
      elementName: 'number',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'number', typeCode: 'unsignedInt' }],
    },
    {
      elementName: 'sopClass',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sopClass', typeCode: 'oid' }],
    },
    {
      elementName: 'title',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'title', typeCode: 'string' }],
    },
  ];

  /** Formal DICOM identifier for this instance (1..1) */
  uid?: string;
  /** Id and extensions of the primitive `uid`. */
  _uid?: Element;

  /** The number of this instance in the series (0..1) */
  number?: number;
  /** Id and extensions of the primitive `number`. */
  _number?: Element;

  /** DICOM class type (1..1) */
  sopClass?: string;
  /** Id and extensions of the primitive `sopClass`. */
  _sopClass?: Element;

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

  /** Formal DICOM identifier for this instance (1..1) */
  getUid(): string | undefined {
    return this.uid;
  }

  /** Sets `uid`. Throws a FhirModelError when the value is not a valid FHIR oid. */
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

  /** DICOM class type (1..1) */
  getSopClass(): string | undefined {
    return this.sopClass;
  }

  /** Sets `sopClass`. Throws a FhirModelError when the value is not a valid FHIR oid. */
  setSopClass(sopClass: string | undefined): this {
    return this.setFieldValue('sopClass', sopClass);
  }

  hasSopClass(): boolean {
    return this.hasFieldValue('sopClass');
  }

  /** The element carrying the id and extensions of `sopClass`. Created when absent. */
  getSopClassElement(): Element {
    if (this._sopClass === undefined) {
      this._sopClass = new Element();
    }
    return this._sopClass;
  }

  setSopClassElement(sopClassElement: Element | undefined): this {
    this._sopClass = sopClassElement;
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
