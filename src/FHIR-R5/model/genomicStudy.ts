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
import { Reference } from './reference';

/**
 * A set of analyses performed to analyze and generate genomic data.
 */
export class GenomicStudy extends DomainResource {
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
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.GenomicStudyStatus },
      ],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: Infinity,
      isList: true,
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
          targetResourceTypes: [
            'BiologicallyDerivedProduct',
            'Group',
            'NutritionProduct',
            'Patient',
            'Substance',
          ],
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
      elementName: 'startDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'startDate', typeCode: 'dateTime' }],
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
          targetResourceTypes: ['ServiceRequest', 'Task'],
        },
      ],
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
      elementName: 'interpreter',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'interpreter',
          typeCode: 'Reference',
          targetResourceTypes: ['Practitioner', 'PractitionerRole'],
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
      elementName: 'instantiatesCanonical',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'instantiatesCanonical', typeCode: 'canonical' }],
    },
    {
      elementName: 'instantiatesUri',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'instantiatesUri', typeCode: 'uri' }],
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
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'analysis',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'analysis', typeCode: 'GenomicStudyAnalysis' }],
    },
  ];

  readonly resourceType = 'GenomicStudy';

  /** Identifiers for this genomic study (0..*) */
  identifier?: Identifier[];

  /** registered | available | cancelled | entered-in-error | unknown (1..1) */
  status?: valueSetCodes.GenomicStudyStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** The type of the study (e.g., Familial variant segregation, Functional variation detection, or Gene expression profiling) (0..*) */
  type?: CodeableConcept[];

  /** The primary subject of the genomic study (1..1) */
  subject?: Reference;

  /** The healthcare event with which this genomics study is associated (0..1) */
  encounter?: Reference;

  /** When the genomic study was started (0..1) */
  startDate?: string;
  /** Id and extensions of the primitive `startDate`. */
  _startDate?: Element;

  /** Event resources that the genomic study is based on (0..*) */
  basedOn?: Reference[];

  /** Healthcare professional who requested or referred the genomic study (0..1) */
  referrer?: Reference;

  /** Healthcare professionals who interpreted the genomic study (0..*) */
  interpreter?: Reference[];

  /** Why the genomic study was performed (0..*) */
  reason?: CodeableReference[];

  /** The defined protocol that describes the study (0..1) */
  instantiatesCanonical?: string;
  /** Id and extensions of the primitive `instantiatesCanonical`. */
  _instantiatesCanonical?: Element;

  /** The URL pointing to an externally maintained protocol that describes the study (0..1) */
  instantiatesUri?: string;
  /** Id and extensions of the primitive `instantiatesUri`. */
  _instantiatesUri?: Element;

  /** Comments related to the genomic study (0..*) */
  note?: Annotation[];

  /** Description of the genomic study (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Genomic Analysis Event (0..*) */
  analysis?: GenomicStudyAnalysis[];

  override fhirType(): string {
    return 'GenomicStudy';
  }

  /** FHIR JSON for this GenomicStudy, typed as the plain `GenomicStudy` data type. */
  override toJSON(): plainTypes.GenomicStudy {
    return this.serialize() as plainTypes.GenomicStudy;
  }

  /** Identifiers for this genomic study (0..*) Never undefined; an empty list is created when absent. */
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
  getStatus(): valueSetCodes.GenomicStudyStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.GenomicStudyStatus | undefined): this {
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

  /** The type of the study (e.g., Familial variant segregation, Functional variation detection, or Gene expression profiling) (0..*) Never undefined; an empty list is created when absent. */
  getType(): CodeableConcept[] {
    if (this.type === undefined) {
      this.type = [];
    }
    return this.type;
  }

  setType(type: CodeableConcept[] | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Appends a new, empty CodeableConcept to `type` and returns it so it can be filled in. */
  addType(): CodeableConcept;
  /** Appends the given CodeableConcept to `type` and returns this object for chaining. */
  addType(codeableConcept: CodeableConcept): this;
  addType(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('type', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('type', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `type`. One is added when the list is empty. */
  getTypeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getType()[0];
    return firstCodeableConcept === undefined ? this.addType() : firstCodeableConcept;
  }

  /** The primary subject of the genomic study (1..1) Created when absent. */
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

  /** The healthcare event with which this genomics study is associated (0..1) Created when absent. */
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

  /** When the genomic study was started (0..1) */
  getStartDate(): string | undefined {
    return this.startDate;
  }

  /** Sets `startDate`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setStartDate(startDate: string | undefined): this {
    return this.setFieldValue('startDate', startDate);
  }

  hasStartDate(): boolean {
    return this.hasFieldValue('startDate');
  }

  /** The element carrying the id and extensions of `startDate`. Created when absent. */
  getStartDateElement(): Element {
    if (this._startDate === undefined) {
      this._startDate = new Element();
    }
    return this._startDate;
  }

  setStartDateElement(startDateElement: Element | undefined): this {
    this._startDate = startDateElement;
    return this;
  }

  /** Event resources that the genomic study is based on (0..*) Never undefined; an empty list is created when absent. */
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

  /** Healthcare professional who requested or referred the genomic study (0..1) Created when absent. */
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

  /** Healthcare professionals who interpreted the genomic study (0..*) Never undefined; an empty list is created when absent. */
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

  /** Why the genomic study was performed (0..*) Never undefined; an empty list is created when absent. */
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

  /** The defined protocol that describes the study (0..1) */
  getInstantiatesCanonical(): string | undefined {
    return this.instantiatesCanonical;
  }

  /** Sets `instantiatesCanonical`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setInstantiatesCanonical(instantiatesCanonical: string | undefined): this {
    return this.setFieldValue('instantiatesCanonical', instantiatesCanonical);
  }

  hasInstantiatesCanonical(): boolean {
    return this.hasFieldValue('instantiatesCanonical');
  }

  /** The element carrying the id and extensions of `instantiatesCanonical`. Created when absent. */
  getInstantiatesCanonicalElement(): Element {
    if (this._instantiatesCanonical === undefined) {
      this._instantiatesCanonical = new Element();
    }
    return this._instantiatesCanonical;
  }

  setInstantiatesCanonicalElement(instantiatesCanonicalElement: Element | undefined): this {
    this._instantiatesCanonical = instantiatesCanonicalElement;
    return this;
  }

  /** The URL pointing to an externally maintained protocol that describes the study (0..1) */
  getInstantiatesUri(): string | undefined {
    return this.instantiatesUri;
  }

  /** Sets `instantiatesUri`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setInstantiatesUri(instantiatesUri: string | undefined): this {
    return this.setFieldValue('instantiatesUri', instantiatesUri);
  }

  hasInstantiatesUri(): boolean {
    return this.hasFieldValue('instantiatesUri');
  }

  /** The element carrying the id and extensions of `instantiatesUri`. Created when absent. */
  getInstantiatesUriElement(): Element {
    if (this._instantiatesUri === undefined) {
      this._instantiatesUri = new Element();
    }
    return this._instantiatesUri;
  }

  setInstantiatesUriElement(instantiatesUriElement: Element | undefined): this {
    this._instantiatesUri = instantiatesUriElement;
    return this;
  }

  /** Comments related to the genomic study (0..*) Never undefined; an empty list is created when absent. */
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

  /** Description of the genomic study (0..1) */
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

  /** Genomic Analysis Event (0..*) Never undefined; an empty list is created when absent. */
  getAnalysis(): GenomicStudyAnalysis[] {
    if (this.analysis === undefined) {
      this.analysis = [];
    }
    return this.analysis;
  }

  setAnalysis(analysis: GenomicStudyAnalysis[] | undefined): this {
    return this.setFieldValue('analysis', analysis);
  }

  hasAnalysis(): boolean {
    return this.hasFieldValue('analysis');
  }

  /** Appends a new, empty GenomicStudyAnalysis to `analysis` and returns it so it can be filled in. */
  addAnalysis(): GenomicStudyAnalysis;
  /** Appends the given GenomicStudyAnalysis to `analysis` and returns this object for chaining. */
  addAnalysis(genomicStudyAnalysis: GenomicStudyAnalysis): this;
  addAnalysis(genomicStudyAnalysis?: GenomicStudyAnalysis): GenomicStudyAnalysis | this {
    if (genomicStudyAnalysis !== undefined) {
      return this.addFieldValue('analysis', genomicStudyAnalysis);
    }
    const createdGenomicStudyAnalysis = new GenomicStudyAnalysis();
    this.addFieldValue('analysis', createdGenomicStudyAnalysis);
    return createdGenomicStudyAnalysis;
  }

  /** The first GenomicStudyAnalysis of `analysis`. One is added when the list is empty. */
  getAnalysisFirstRep(): GenomicStudyAnalysis {
    const firstGenomicStudyAnalysis = this.getAnalysis()[0];
    return firstGenomicStudyAnalysis === undefined ? this.addAnalysis() : firstGenomicStudyAnalysis;
  }
}

modelTypeRegistry.register('GenomicStudy', GenomicStudy, true);

/** True when the value is a GenomicStudy model instance. */
export function isGenomicStudy(candidate: unknown): candidate is GenomicStudy {
  return candidate instanceof GenomicStudy;
}

/**
 * Genomic Analysis Event
 */
export class GenomicStudyAnalysis extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'methodType',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'methodType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'changeType',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'changeType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'genomeBuild',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'genomeBuild', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'instantiatesCanonical',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'instantiatesCanonical', typeCode: 'canonical' }],
    },
    {
      elementName: 'instantiatesUri',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'instantiatesUri', typeCode: 'uri' }],
    },
    {
      elementName: 'title',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'title', typeCode: 'string' }],
    },
    {
      elementName: 'focus',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'focus', typeCode: 'Reference' }],
    },
    {
      elementName: 'specimen',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'specimen', typeCode: 'Reference', targetResourceTypes: ['Specimen'] }],
    },
    {
      elementName: 'date',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'date', typeCode: 'dateTime' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
    {
      elementName: 'protocolPerformed',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'protocolPerformed',
          typeCode: 'Reference',
          targetResourceTypes: ['Procedure', 'Task'],
        },
      ],
    },
    {
      elementName: 'regionsStudied',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'regionsStudied',
          typeCode: 'Reference',
          targetResourceTypes: ['DocumentReference', 'Observation'],
        },
      ],
    },
    {
      elementName: 'regionsCalled',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'regionsCalled',
          typeCode: 'Reference',
          targetResourceTypes: ['DocumentReference', 'Observation'],
        },
      ],
    },
    {
      elementName: 'input',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'input', typeCode: 'GenomicStudyAnalysisInput' }],
    },
    {
      elementName: 'output',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'output', typeCode: 'GenomicStudyAnalysisOutput' }],
    },
    {
      elementName: 'performer',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'performer', typeCode: 'GenomicStudyAnalysisPerformer' }],
    },
    {
      elementName: 'device',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'device', typeCode: 'GenomicStudyAnalysisDevice' }],
    },
  ];

  /** Identifiers for the analysis event (0..*) */
  identifier?: Identifier[];

  /** Type of the methods used in the analysis (e.g., FISH, Karyotyping, MSI) (0..*) */
  methodType?: CodeableConcept[];

  /** Type of the genomic changes studied in the analysis (e.g., DNA, RNA, or AA change) (0..*) */
  changeType?: CodeableConcept[];

  /** Genome build that is used in this analysis (0..1) */
  genomeBuild?: CodeableConcept;

  /** The defined protocol that describes the analysis (0..1) */
  instantiatesCanonical?: string;
  /** Id and extensions of the primitive `instantiatesCanonical`. */
  _instantiatesCanonical?: Element;

  /** The URL pointing to an externally maintained protocol that describes the analysis (0..1) */
  instantiatesUri?: string;
  /** Id and extensions of the primitive `instantiatesUri`. */
  _instantiatesUri?: Element;

  /** Name of the analysis event (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

  /** What the genomic analysis is about, when it is not about the subject of record (0..*) */
  focus?: Reference[];

  /** The specimen used in the analysis event (0..*) */
  specimen?: Reference[];

  /** The date of the analysis event (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Any notes capture with the analysis event (0..*) */
  note?: Annotation[];

  /** The protocol that was performed for the analysis event (0..1) */
  protocolPerformed?: Reference;

  /** The genomic regions to be studied in the analysis (BED file) (0..*) */
  regionsStudied?: Reference[];

  /** Genomic regions actually called in the analysis event (BED file) (0..*) */
  regionsCalled?: Reference[];

  /** Inputs for the analysis event (0..*) */
  input?: GenomicStudyAnalysisInput[];

  /** Outputs for the analysis event (0..*) */
  output?: GenomicStudyAnalysisOutput[];

  /** Performer for the analysis event (0..*) */
  performer?: GenomicStudyAnalysisPerformer[];

  /** Devices used for the analysis (e.g., instruments, software), with settings and parameters (0..*) */
  device?: GenomicStudyAnalysisDevice[];

  override fhirType(): string {
    return 'GenomicStudy.analysis';
  }

  /** FHIR JSON for this GenomicStudyAnalysis, typed as the plain `GenomicStudyAnalysis` data type. */
  override toJSON(): plainTypes.GenomicStudyAnalysis {
    return this.serialize() as plainTypes.GenomicStudyAnalysis;
  }

  /** Identifiers for the analysis event (0..*) Never undefined; an empty list is created when absent. */
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

  /** Type of the methods used in the analysis (e.g., FISH, Karyotyping, MSI) (0..*) Never undefined; an empty list is created when absent. */
  getMethodType(): CodeableConcept[] {
    if (this.methodType === undefined) {
      this.methodType = [];
    }
    return this.methodType;
  }

  setMethodType(methodType: CodeableConcept[] | undefined): this {
    return this.setFieldValue('methodType', methodType);
  }

  hasMethodType(): boolean {
    return this.hasFieldValue('methodType');
  }

  /** Appends a new, empty CodeableConcept to `methodType` and returns it so it can be filled in. */
  addMethodType(): CodeableConcept;
  /** Appends the given CodeableConcept to `methodType` and returns this object for chaining. */
  addMethodType(codeableConcept: CodeableConcept): this;
  addMethodType(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('methodType', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('methodType', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `methodType`. One is added when the list is empty. */
  getMethodTypeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getMethodType()[0];
    return firstCodeableConcept === undefined ? this.addMethodType() : firstCodeableConcept;
  }

  /** Type of the genomic changes studied in the analysis (e.g., DNA, RNA, or AA change) (0..*) Never undefined; an empty list is created when absent. */
  getChangeType(): CodeableConcept[] {
    if (this.changeType === undefined) {
      this.changeType = [];
    }
    return this.changeType;
  }

  setChangeType(changeType: CodeableConcept[] | undefined): this {
    return this.setFieldValue('changeType', changeType);
  }

  hasChangeType(): boolean {
    return this.hasFieldValue('changeType');
  }

  /** Appends a new, empty CodeableConcept to `changeType` and returns it so it can be filled in. */
  addChangeType(): CodeableConcept;
  /** Appends the given CodeableConcept to `changeType` and returns this object for chaining. */
  addChangeType(codeableConcept: CodeableConcept): this;
  addChangeType(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('changeType', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('changeType', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `changeType`. One is added when the list is empty. */
  getChangeTypeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getChangeType()[0];
    return firstCodeableConcept === undefined ? this.addChangeType() : firstCodeableConcept;
  }

  /** Genome build that is used in this analysis (0..1) Created when absent. */
  getGenomeBuild(): CodeableConcept {
    if (this.genomeBuild === undefined) {
      this.genomeBuild = new CodeableConcept();
    }
    return this.genomeBuild;
  }

  setGenomeBuild(genomeBuild: CodeableConcept | undefined): this {
    return this.setFieldValue('genomeBuild', genomeBuild);
  }

  hasGenomeBuild(): boolean {
    return this.hasFieldValue('genomeBuild');
  }

  /** The defined protocol that describes the analysis (0..1) */
  getInstantiatesCanonical(): string | undefined {
    return this.instantiatesCanonical;
  }

  /** Sets `instantiatesCanonical`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setInstantiatesCanonical(instantiatesCanonical: string | undefined): this {
    return this.setFieldValue('instantiatesCanonical', instantiatesCanonical);
  }

  hasInstantiatesCanonical(): boolean {
    return this.hasFieldValue('instantiatesCanonical');
  }

  /** The element carrying the id and extensions of `instantiatesCanonical`. Created when absent. */
  getInstantiatesCanonicalElement(): Element {
    if (this._instantiatesCanonical === undefined) {
      this._instantiatesCanonical = new Element();
    }
    return this._instantiatesCanonical;
  }

  setInstantiatesCanonicalElement(instantiatesCanonicalElement: Element | undefined): this {
    this._instantiatesCanonical = instantiatesCanonicalElement;
    return this;
  }

  /** The URL pointing to an externally maintained protocol that describes the analysis (0..1) */
  getInstantiatesUri(): string | undefined {
    return this.instantiatesUri;
  }

  /** Sets `instantiatesUri`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setInstantiatesUri(instantiatesUri: string | undefined): this {
    return this.setFieldValue('instantiatesUri', instantiatesUri);
  }

  hasInstantiatesUri(): boolean {
    return this.hasFieldValue('instantiatesUri');
  }

  /** The element carrying the id and extensions of `instantiatesUri`. Created when absent. */
  getInstantiatesUriElement(): Element {
    if (this._instantiatesUri === undefined) {
      this._instantiatesUri = new Element();
    }
    return this._instantiatesUri;
  }

  setInstantiatesUriElement(instantiatesUriElement: Element | undefined): this {
    this._instantiatesUri = instantiatesUriElement;
    return this;
  }

  /** Name of the analysis event (human friendly) (0..1) */
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

  /** What the genomic analysis is about, when it is not about the subject of record (0..*) Never undefined; an empty list is created when absent. */
  getFocus(): Reference[] {
    if (this.focus === undefined) {
      this.focus = [];
    }
    return this.focus;
  }

  setFocus(focus: Reference[] | undefined): this {
    return this.setFieldValue('focus', focus);
  }

  hasFocus(): boolean {
    return this.hasFieldValue('focus');
  }

  /** Appends a new, empty Reference to `focus` and returns it so it can be filled in. */
  addFocus(): Reference;
  /** Appends the given Reference to `focus` and returns this object for chaining. */
  addFocus(reference: Reference): this;
  addFocus(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('focus', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('focus', createdReference);
    return createdReference;
  }

  /** The first Reference of `focus`. One is added when the list is empty. */
  getFocusFirstRep(): Reference {
    const firstReference = this.getFocus()[0];
    return firstReference === undefined ? this.addFocus() : firstReference;
  }

  /** The specimen used in the analysis event (0..*) Never undefined; an empty list is created when absent. */
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

  /** The date of the analysis event (0..1) */
  getDate(): string | undefined {
    return this.date;
  }

  /** Sets `date`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setDate(date: string | undefined): this {
    return this.setFieldValue('date', date);
  }

  hasDate(): boolean {
    return this.hasFieldValue('date');
  }

  /** The element carrying the id and extensions of `date`. Created when absent. */
  getDateElement(): Element {
    if (this._date === undefined) {
      this._date = new Element();
    }
    return this._date;
  }

  setDateElement(dateElement: Element | undefined): this {
    this._date = dateElement;
    return this;
  }

  /** Any notes capture with the analysis event (0..*) Never undefined; an empty list is created when absent. */
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

  /** The protocol that was performed for the analysis event (0..1) Created when absent. */
  getProtocolPerformed(): Reference {
    if (this.protocolPerformed === undefined) {
      this.protocolPerformed = new Reference();
    }
    return this.protocolPerformed;
  }

  setProtocolPerformed(protocolPerformed: Reference | undefined): this {
    return this.setFieldValue('protocolPerformed', protocolPerformed);
  }

  hasProtocolPerformed(): boolean {
    return this.hasFieldValue('protocolPerformed');
  }

  /** The genomic regions to be studied in the analysis (BED file) (0..*) Never undefined; an empty list is created when absent. */
  getRegionsStudied(): Reference[] {
    if (this.regionsStudied === undefined) {
      this.regionsStudied = [];
    }
    return this.regionsStudied;
  }

  setRegionsStudied(regionsStudied: Reference[] | undefined): this {
    return this.setFieldValue('regionsStudied', regionsStudied);
  }

  hasRegionsStudied(): boolean {
    return this.hasFieldValue('regionsStudied');
  }

  /** Appends a new, empty Reference to `regionsStudied` and returns it so it can be filled in. */
  addRegionsStudied(): Reference;
  /** Appends the given Reference to `regionsStudied` and returns this object for chaining. */
  addRegionsStudied(reference: Reference): this;
  addRegionsStudied(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('regionsStudied', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('regionsStudied', createdReference);
    return createdReference;
  }

  /** The first Reference of `regionsStudied`. One is added when the list is empty. */
  getRegionsStudiedFirstRep(): Reference {
    const firstReference = this.getRegionsStudied()[0];
    return firstReference === undefined ? this.addRegionsStudied() : firstReference;
  }

  /** Genomic regions actually called in the analysis event (BED file) (0..*) Never undefined; an empty list is created when absent. */
  getRegionsCalled(): Reference[] {
    if (this.regionsCalled === undefined) {
      this.regionsCalled = [];
    }
    return this.regionsCalled;
  }

  setRegionsCalled(regionsCalled: Reference[] | undefined): this {
    return this.setFieldValue('regionsCalled', regionsCalled);
  }

  hasRegionsCalled(): boolean {
    return this.hasFieldValue('regionsCalled');
  }

  /** Appends a new, empty Reference to `regionsCalled` and returns it so it can be filled in. */
  addRegionsCalled(): Reference;
  /** Appends the given Reference to `regionsCalled` and returns this object for chaining. */
  addRegionsCalled(reference: Reference): this;
  addRegionsCalled(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('regionsCalled', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('regionsCalled', createdReference);
    return createdReference;
  }

  /** The first Reference of `regionsCalled`. One is added when the list is empty. */
  getRegionsCalledFirstRep(): Reference {
    const firstReference = this.getRegionsCalled()[0];
    return firstReference === undefined ? this.addRegionsCalled() : firstReference;
  }

  /** Inputs for the analysis event (0..*) Never undefined; an empty list is created when absent. */
  getInput(): GenomicStudyAnalysisInput[] {
    if (this.input === undefined) {
      this.input = [];
    }
    return this.input;
  }

  setInput(input: GenomicStudyAnalysisInput[] | undefined): this {
    return this.setFieldValue('input', input);
  }

  hasInput(): boolean {
    return this.hasFieldValue('input');
  }

  /** Appends a new, empty GenomicStudyAnalysisInput to `input` and returns it so it can be filled in. */
  addInput(): GenomicStudyAnalysisInput;
  /** Appends the given GenomicStudyAnalysisInput to `input` and returns this object for chaining. */
  addInput(genomicStudyAnalysisInput: GenomicStudyAnalysisInput): this;
  addInput(
    genomicStudyAnalysisInput?: GenomicStudyAnalysisInput
  ): GenomicStudyAnalysisInput | this {
    if (genomicStudyAnalysisInput !== undefined) {
      return this.addFieldValue('input', genomicStudyAnalysisInput);
    }
    const createdGenomicStudyAnalysisInput = new GenomicStudyAnalysisInput();
    this.addFieldValue('input', createdGenomicStudyAnalysisInput);
    return createdGenomicStudyAnalysisInput;
  }

  /** The first GenomicStudyAnalysisInput of `input`. One is added when the list is empty. */
  getInputFirstRep(): GenomicStudyAnalysisInput {
    const firstGenomicStudyAnalysisInput = this.getInput()[0];
    return firstGenomicStudyAnalysisInput === undefined
      ? this.addInput()
      : firstGenomicStudyAnalysisInput;
  }

  /** Outputs for the analysis event (0..*) Never undefined; an empty list is created when absent. */
  getOutput(): GenomicStudyAnalysisOutput[] {
    if (this.output === undefined) {
      this.output = [];
    }
    return this.output;
  }

  setOutput(output: GenomicStudyAnalysisOutput[] | undefined): this {
    return this.setFieldValue('output', output);
  }

  hasOutput(): boolean {
    return this.hasFieldValue('output');
  }

  /** Appends a new, empty GenomicStudyAnalysisOutput to `output` and returns it so it can be filled in. */
  addOutput(): GenomicStudyAnalysisOutput;
  /** Appends the given GenomicStudyAnalysisOutput to `output` and returns this object for chaining. */
  addOutput(genomicStudyAnalysisOutput: GenomicStudyAnalysisOutput): this;
  addOutput(
    genomicStudyAnalysisOutput?: GenomicStudyAnalysisOutput
  ): GenomicStudyAnalysisOutput | this {
    if (genomicStudyAnalysisOutput !== undefined) {
      return this.addFieldValue('output', genomicStudyAnalysisOutput);
    }
    const createdGenomicStudyAnalysisOutput = new GenomicStudyAnalysisOutput();
    this.addFieldValue('output', createdGenomicStudyAnalysisOutput);
    return createdGenomicStudyAnalysisOutput;
  }

  /** The first GenomicStudyAnalysisOutput of `output`. One is added when the list is empty. */
  getOutputFirstRep(): GenomicStudyAnalysisOutput {
    const firstGenomicStudyAnalysisOutput = this.getOutput()[0];
    return firstGenomicStudyAnalysisOutput === undefined
      ? this.addOutput()
      : firstGenomicStudyAnalysisOutput;
  }

  /** Performer for the analysis event (0..*) Never undefined; an empty list is created when absent. */
  getPerformer(): GenomicStudyAnalysisPerformer[] {
    if (this.performer === undefined) {
      this.performer = [];
    }
    return this.performer;
  }

  setPerformer(performer: GenomicStudyAnalysisPerformer[] | undefined): this {
    return this.setFieldValue('performer', performer);
  }

  hasPerformer(): boolean {
    return this.hasFieldValue('performer');
  }

  /** Appends a new, empty GenomicStudyAnalysisPerformer to `performer` and returns it so it can be filled in. */
  addPerformer(): GenomicStudyAnalysisPerformer;
  /** Appends the given GenomicStudyAnalysisPerformer to `performer` and returns this object for chaining. */
  addPerformer(genomicStudyAnalysisPerformer: GenomicStudyAnalysisPerformer): this;
  addPerformer(
    genomicStudyAnalysisPerformer?: GenomicStudyAnalysisPerformer
  ): GenomicStudyAnalysisPerformer | this {
    if (genomicStudyAnalysisPerformer !== undefined) {
      return this.addFieldValue('performer', genomicStudyAnalysisPerformer);
    }
    const createdGenomicStudyAnalysisPerformer = new GenomicStudyAnalysisPerformer();
    this.addFieldValue('performer', createdGenomicStudyAnalysisPerformer);
    return createdGenomicStudyAnalysisPerformer;
  }

  /** The first GenomicStudyAnalysisPerformer of `performer`. One is added when the list is empty. */
  getPerformerFirstRep(): GenomicStudyAnalysisPerformer {
    const firstGenomicStudyAnalysisPerformer = this.getPerformer()[0];
    return firstGenomicStudyAnalysisPerformer === undefined
      ? this.addPerformer()
      : firstGenomicStudyAnalysisPerformer;
  }

  /** Devices used for the analysis (e.g., instruments, software), with settings and parameters (0..*) Never undefined; an empty list is created when absent. */
  getDevice(): GenomicStudyAnalysisDevice[] {
    if (this.device === undefined) {
      this.device = [];
    }
    return this.device;
  }

  setDevice(device: GenomicStudyAnalysisDevice[] | undefined): this {
    return this.setFieldValue('device', device);
  }

  hasDevice(): boolean {
    return this.hasFieldValue('device');
  }

  /** Appends a new, empty GenomicStudyAnalysisDevice to `device` and returns it so it can be filled in. */
  addDevice(): GenomicStudyAnalysisDevice;
  /** Appends the given GenomicStudyAnalysisDevice to `device` and returns this object for chaining. */
  addDevice(genomicStudyAnalysisDevice: GenomicStudyAnalysisDevice): this;
  addDevice(
    genomicStudyAnalysisDevice?: GenomicStudyAnalysisDevice
  ): GenomicStudyAnalysisDevice | this {
    if (genomicStudyAnalysisDevice !== undefined) {
      return this.addFieldValue('device', genomicStudyAnalysisDevice);
    }
    const createdGenomicStudyAnalysisDevice = new GenomicStudyAnalysisDevice();
    this.addFieldValue('device', createdGenomicStudyAnalysisDevice);
    return createdGenomicStudyAnalysisDevice;
  }

  /** The first GenomicStudyAnalysisDevice of `device`. One is added when the list is empty. */
  getDeviceFirstRep(): GenomicStudyAnalysisDevice {
    const firstGenomicStudyAnalysisDevice = this.getDevice()[0];
    return firstGenomicStudyAnalysisDevice === undefined
      ? this.addDevice()
      : firstGenomicStudyAnalysisDevice;
  }
}

modelTypeRegistry.register('GenomicStudyAnalysis', GenomicStudyAnalysis, false);

/**
 * Inputs for the analysis event
 */
export class GenomicStudyAnalysisInput extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'file',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'file', typeCode: 'Reference', targetResourceTypes: ['DocumentReference'] },
      ],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'generatedBy',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'generatedByIdentifier', typeCode: 'Identifier' },
        {
          jsonKey: 'generatedByReference',
          typeCode: 'Reference',
          targetResourceTypes: ['GenomicStudy'],
        },
      ],
    },
  ];

  /** File containing input data (0..1) */
  file?: Reference;

  /** Type of input data (e.g., BAM, CRAM, or FASTA) (0..1) */
  type?: CodeableConcept;

  /** The analysis event or other GenomicStudy that generated this input file (0..1) */
  generatedByIdentifier?: Identifier;
  /** The analysis event or other GenomicStudy that generated this input file (0..1) */
  generatedByReference?: Reference;

  override fhirType(): string {
    return 'GenomicStudy.analysis.input';
  }

  /** FHIR JSON for this GenomicStudyAnalysisInput, typed as the plain `GenomicStudyInput` data type. */
  override toJSON(): plainTypes.GenomicStudyInput {
    return this.serialize() as plainTypes.GenomicStudyInput;
  }

  /** File containing input data (0..1) Created when absent. */
  getFile(): Reference {
    if (this.file === undefined) {
      this.file = new Reference();
    }
    return this.file;
  }

  setFile(file: Reference | undefined): this {
    return this.setFieldValue('file', file);
  }

  hasFile(): boolean {
    return this.hasFieldValue('file');
  }

  /** Type of input data (e.g., BAM, CRAM, or FASTA) (0..1) Created when absent. */
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

  /** The analysis event or other GenomicStudy that generated this input file (0..1) Whichever type of `generatedBy[x]` is set. */
  getGeneratedBy(): Identifier | Reference | undefined {
    return this.getChoiceValue<Identifier | Reference>('generatedBy');
  }

  /** True when any type of `generatedBy[x]` is set. */
  hasGeneratedBy(): boolean {
    return this.hasChoiceValue('generatedBy');
  }

  getGeneratedByIdentifier(): Identifier | undefined {
    return this.generatedByIdentifier;
  }

  /** Sets `generatedBy[x]` as Identifier and clears every other type of it. */
  setGeneratedByIdentifier(generatedByIdentifier: Identifier | undefined): this {
    return this.setFieldValue('generatedByIdentifier', generatedByIdentifier);
  }

  hasGeneratedByIdentifier(): boolean {
    return this.hasFieldValue('generatedByIdentifier');
  }

  getGeneratedByReference(): Reference | undefined {
    return this.generatedByReference;
  }

  /** Sets `generatedBy[x]` as Reference and clears every other type of it. */
  setGeneratedByReference(generatedByReference: Reference | undefined): this {
    return this.setFieldValue('generatedByReference', generatedByReference);
  }

  hasGeneratedByReference(): boolean {
    return this.hasFieldValue('generatedByReference');
  }
}

modelTypeRegistry.register('GenomicStudyAnalysisInput', GenomicStudyAnalysisInput, false);

/**
 * Outputs for the analysis event
 */
export class GenomicStudyAnalysisOutput extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'file',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'file', typeCode: 'Reference', targetResourceTypes: ['DocumentReference'] },
      ],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
  ];

  /** File containing output data (0..1) */
  file?: Reference;

  /** Type of output data (e.g., VCF, MAF, or BAM) (0..1) */
  type?: CodeableConcept;

  override fhirType(): string {
    return 'GenomicStudy.analysis.output';
  }

  /** FHIR JSON for this GenomicStudyAnalysisOutput, typed as the plain `GenomicStudyOutput` data type. */
  override toJSON(): plainTypes.GenomicStudyOutput {
    return this.serialize() as plainTypes.GenomicStudyOutput;
  }

  /** File containing output data (0..1) Created when absent. */
  getFile(): Reference {
    if (this.file === undefined) {
      this.file = new Reference();
    }
    return this.file;
  }

  setFile(file: Reference | undefined): this {
    return this.setFieldValue('file', file);
  }

  hasFile(): boolean {
    return this.hasFieldValue('file');
  }

  /** Type of output data (e.g., VCF, MAF, or BAM) (0..1) Created when absent. */
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
}

modelTypeRegistry.register('GenomicStudyAnalysisOutput', GenomicStudyAnalysisOutput, false);

/**
 * Performer for the analysis event
 */
export class GenomicStudyAnalysisPerformer extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'actor',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'actor',
          typeCode: 'Reference',
          targetResourceTypes: ['Device', 'Organization', 'Practitioner', 'PractitionerRole'],
        },
      ],
    },
    {
      elementName: 'role',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'role', typeCode: 'CodeableConcept' }],
    },
  ];

  /** The organization, healthcare professional, or others who participated in performing this analysis (0..1) */
  actor?: Reference;

  /** Role of the actor for this analysis (0..1) */
  role?: CodeableConcept;

  override fhirType(): string {
    return 'GenomicStudy.analysis.performer';
  }

  /** FHIR JSON for this GenomicStudyAnalysisPerformer, typed as the plain `GenomicStudyPerformer` data type. */
  override toJSON(): plainTypes.GenomicStudyPerformer {
    return this.serialize() as plainTypes.GenomicStudyPerformer;
  }

  /** The organization, healthcare professional, or others who participated in performing this analysis (0..1) Created when absent. */
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

  /** Role of the actor for this analysis (0..1) Created when absent. */
  getRole(): CodeableConcept {
    if (this.role === undefined) {
      this.role = new CodeableConcept();
    }
    return this.role;
  }

  setRole(role: CodeableConcept | undefined): this {
    return this.setFieldValue('role', role);
  }

  hasRole(): boolean {
    return this.hasFieldValue('role');
  }
}

modelTypeRegistry.register('GenomicStudyAnalysisPerformer', GenomicStudyAnalysisPerformer, false);

/**
 * Devices used for the analysis (e.g., instruments, software), with settings and parameters
 */
export class GenomicStudyAnalysisDevice extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'device',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'device', typeCode: 'Reference', targetResourceTypes: ['Device'] }],
    },
    {
      elementName: 'function',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'function', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Device used for the analysis (0..1) */
  device?: Reference;

  /** Specific function for the device used for the analysis (0..1) */
  function?: CodeableConcept;

  override fhirType(): string {
    return 'GenomicStudy.analysis.device';
  }

  /** FHIR JSON for this GenomicStudyAnalysisDevice, typed as the plain `GenomicStudyDevice` data type. */
  override toJSON(): plainTypes.GenomicStudyDevice {
    return this.serialize() as plainTypes.GenomicStudyDevice;
  }

  /** Device used for the analysis (0..1) Created when absent. */
  getDevice(): Reference {
    if (this.device === undefined) {
      this.device = new Reference();
    }
    return this.device;
  }

  setDevice(device: Reference | undefined): this {
    return this.setFieldValue('device', device);
  }

  hasDevice(): boolean {
    return this.hasFieldValue('device');
  }

  /** Specific function for the device used for the analysis (0..1) Created when absent. */
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
}

modelTypeRegistry.register('GenomicStudyAnalysisDevice', GenomicStudyAnalysisDevice, false);
