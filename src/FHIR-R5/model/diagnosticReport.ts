/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { Annotation } from './annotation';
import { Attachment } from './attachment';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';

/**
 * The findings and interpretation of diagnostic tests performed on patients, groups of patients, products, substances, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports. The report also includes non-clinical context such as batch analysis and stability reporting of products and substances.
 */
export class DiagnosticReport extends DomainResource {
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
        {
          jsonKey: 'basedOn',
          typeCode: 'Reference',
          targetResourceTypes: [
            'CarePlan',
            'ImmunizationRecommendation',
            'MedicationRequest',
            'NutritionOrder',
            'ServiceRequest',
          ],
        },
      ],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.DiagnosticReportStatus },
      ],
    },
    {
      elementName: 'category',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'subject',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'subject',
          typeCode: 'Reference',
          targetResourceTypes: [
            'BiologicallyDerivedProduct',
            'Device',
            'Group',
            'Location',
            'Medication',
            'Organization',
            'Patient',
            'Practitioner',
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
      elementName: 'effective',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'effectiveDateTime', typeCode: 'dateTime' },
        { jsonKey: 'effectivePeriod', typeCode: 'Period' },
      ],
    },
    {
      elementName: 'issued',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'issued', typeCode: 'instant' }],
    },
    {
      elementName: 'performer',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'performer',
          typeCode: 'Reference',
          targetResourceTypes: ['CareTeam', 'Organization', 'Practitioner', 'PractitionerRole'],
        },
      ],
    },
    {
      elementName: 'resultsInterpreter',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'resultsInterpreter',
          typeCode: 'Reference',
          targetResourceTypes: ['CareTeam', 'Organization', 'Practitioner', 'PractitionerRole'],
        },
      ],
    },
    {
      elementName: 'specimen',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'specimen', typeCode: 'Reference', targetResourceTypes: ['Specimen'] }],
    },
    {
      elementName: 'result',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'result', typeCode: 'Reference', targetResourceTypes: ['Observation'] }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
    {
      elementName: 'study',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'study',
          typeCode: 'Reference',
          targetResourceTypes: ['GenomicStudy', 'ImagingStudy'],
        },
      ],
    },
    {
      elementName: 'supportingInfo',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'supportingInfo', typeCode: 'DiagnosticReportSupportingInfo' }],
    },
    {
      elementName: 'media',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'media', typeCode: 'DiagnosticReportMedia' }],
    },
    {
      elementName: 'composition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'composition', typeCode: 'Reference', targetResourceTypes: ['Composition'] },
      ],
    },
    {
      elementName: 'conclusion',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'conclusion', typeCode: 'markdown' }],
    },
    {
      elementName: 'conclusionCode',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'conclusionCode', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'presentedForm',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'presentedForm', typeCode: 'Attachment' }],
    },
  ];

  readonly resourceType = 'DiagnosticReport';

  /** Business identifier for report (0..*) */
  identifier?: Identifier[];

  /** What was requested (0..*) */
  basedOn?: Reference[];

  /** registered | partial | preliminary | modified | final | amended | corrected | appended | cancelled | entered-in-error | unknown (1..1) */
  status?: valueSetCodes.DiagnosticReportStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Service category (0..*) */
  category?: CodeableConcept[];

  /** Name/Code for this diagnostic report (1..1) */
  code?: CodeableConcept;

  /** The subject of the report - usually, but not always, the patient (0..1) */
  subject?: Reference;

  /** Health care event when test ordered (0..1) */
  encounter?: Reference;

  /** Clinically relevant time/time-period for report (0..1) */
  effectiveDateTime?: string;
  /** Id and extensions of the primitive `effectiveDateTime`. */
  _effectiveDateTime?: Element;
  /** Clinically relevant time/time-period for report (0..1) */
  effectivePeriod?: Period;

  /** DateTime this version was made (0..1) */
  issued?: string;
  /** Id and extensions of the primitive `issued`. */
  _issued?: Element;

  /** Responsible Diagnostic Service (0..*) */
  performer?: Reference[];

  /** Primary result interpreter (0..*) */
  resultsInterpreter?: Reference[];

  /** Specimens this report is based on (0..*) */
  specimen?: Reference[];

  /** Observations (0..*) */
  result?: Reference[];

  /** Comments about the diagnostic report (0..*) */
  note?: Annotation[];

  /** Reference to full details of an analysis associated with the diagnostic report (0..*) */
  study?: Reference[];

  /** Additional information supporting the diagnostic report (0..*) */
  supportingInfo?: DiagnosticReportSupportingInfo[];

  /** Key images or data associated with this report (0..*) */
  media?: DiagnosticReportMedia[];

  /** Reference to a Composition resource for the DiagnosticReport structure (0..1) */
  composition?: Reference;

  /** Clinical conclusion (interpretation) of test results (0..1) */
  conclusion?: string;
  /** Id and extensions of the primitive `conclusion`. */
  _conclusion?: Element;

  /** Codes for the clinical conclusion of test results (0..*) */
  conclusionCode?: CodeableConcept[];

  /** Entire report as issued (0..*) */
  presentedForm?: Attachment[];

  override fhirType(): string {
    return 'DiagnosticReport';
  }

  /** FHIR JSON for this DiagnosticReport, typed as the plain `DiagnosticReport` data type. */
  override toJSON(): plainTypes.DiagnosticReport {
    return this.serialize() as plainTypes.DiagnosticReport;
  }

  /** Business identifier for report (0..*) Never undefined; an empty list is created when absent. */
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

  /** What was requested (0..*) Never undefined; an empty list is created when absent. */
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

  /** registered | partial | preliminary | modified | final | amended | corrected | appended | cancelled | entered-in-error | unknown (1..1) */
  getStatus(): valueSetCodes.DiagnosticReportStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.DiagnosticReportStatus | undefined): this {
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

  /** Service category (0..*) Never undefined; an empty list is created when absent. */
  getCategory(): CodeableConcept[] {
    if (this.category === undefined) {
      this.category = [];
    }
    return this.category;
  }

  setCategory(category: CodeableConcept[] | undefined): this {
    return this.setFieldValue('category', category);
  }

  hasCategory(): boolean {
    return this.hasFieldValue('category');
  }

  /** Appends a new, empty CodeableConcept to `category` and returns it so it can be filled in. */
  addCategory(): CodeableConcept;
  /** Appends the given CodeableConcept to `category` and returns this object for chaining. */
  addCategory(codeableConcept: CodeableConcept): this;
  addCategory(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('category', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('category', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `category`. One is added when the list is empty. */
  getCategoryFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getCategory()[0];
    return firstCodeableConcept === undefined ? this.addCategory() : firstCodeableConcept;
  }

  /** Name/Code for this diagnostic report (1..1) Created when absent. */
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

  /** The subject of the report - usually, but not always, the patient (0..1) Created when absent. */
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

  /** Health care event when test ordered (0..1) Created when absent. */
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

  /** Clinically relevant time/time-period for report (0..1) Whichever type of `effective[x]` is set. */
  getEffective(): string | Period | undefined {
    return this.getChoiceValue<string | Period>('effective');
  }

  /** True when any type of `effective[x]` is set. */
  hasEffective(): boolean {
    return this.hasChoiceValue('effective');
  }

  getEffectiveDateTime(): string | undefined {
    return this.effectiveDateTime;
  }

  /** Sets `effective[x]` as dateTime and clears every other type of it. */
  setEffectiveDateTime(effectiveDateTime: string | undefined): this {
    return this.setFieldValue('effectiveDateTime', effectiveDateTime);
  }

  hasEffectiveDateTime(): boolean {
    return this.hasFieldValue('effectiveDateTime');
  }

  getEffectivePeriod(): Period | undefined {
    return this.effectivePeriod;
  }

  /** Sets `effective[x]` as Period and clears every other type of it. */
  setEffectivePeriod(effectivePeriod: Period | undefined): this {
    return this.setFieldValue('effectivePeriod', effectivePeriod);
  }

  hasEffectivePeriod(): boolean {
    return this.hasFieldValue('effectivePeriod');
  }

  /** DateTime this version was made (0..1) */
  getIssued(): string | undefined {
    return this.issued;
  }

  /** Sets `issued`. Throws a FhirModelError when the value is not a valid FHIR instant. */
  setIssued(issued: string | undefined): this {
    return this.setFieldValue('issued', issued);
  }

  hasIssued(): boolean {
    return this.hasFieldValue('issued');
  }

  /** The element carrying the id and extensions of `issued`. Created when absent. */
  getIssuedElement(): Element {
    if (this._issued === undefined) {
      this._issued = new Element();
    }
    return this._issued;
  }

  setIssuedElement(issuedElement: Element | undefined): this {
    this._issued = issuedElement;
    return this;
  }

  /** Responsible Diagnostic Service (0..*) Never undefined; an empty list is created when absent. */
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

  /** Primary result interpreter (0..*) Never undefined; an empty list is created when absent. */
  getResultsInterpreter(): Reference[] {
    if (this.resultsInterpreter === undefined) {
      this.resultsInterpreter = [];
    }
    return this.resultsInterpreter;
  }

  setResultsInterpreter(resultsInterpreter: Reference[] | undefined): this {
    return this.setFieldValue('resultsInterpreter', resultsInterpreter);
  }

  hasResultsInterpreter(): boolean {
    return this.hasFieldValue('resultsInterpreter');
  }

  /** Appends a new, empty Reference to `resultsInterpreter` and returns it so it can be filled in. */
  addResultsInterpreter(): Reference;
  /** Appends the given Reference to `resultsInterpreter` and returns this object for chaining. */
  addResultsInterpreter(reference: Reference): this;
  addResultsInterpreter(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('resultsInterpreter', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('resultsInterpreter', createdReference);
    return createdReference;
  }

  /** The first Reference of `resultsInterpreter`. One is added when the list is empty. */
  getResultsInterpreterFirstRep(): Reference {
    const firstReference = this.getResultsInterpreter()[0];
    return firstReference === undefined ? this.addResultsInterpreter() : firstReference;
  }

  /** Specimens this report is based on (0..*) Never undefined; an empty list is created when absent. */
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

  /** Observations (0..*) Never undefined; an empty list is created when absent. */
  getResult(): Reference[] {
    if (this.result === undefined) {
      this.result = [];
    }
    return this.result;
  }

  setResult(result: Reference[] | undefined): this {
    return this.setFieldValue('result', result);
  }

  hasResult(): boolean {
    return this.hasFieldValue('result');
  }

  /** Appends a new, empty Reference to `result` and returns it so it can be filled in. */
  addResult(): Reference;
  /** Appends the given Reference to `result` and returns this object for chaining. */
  addResult(reference: Reference): this;
  addResult(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('result', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('result', createdReference);
    return createdReference;
  }

  /** The first Reference of `result`. One is added when the list is empty. */
  getResultFirstRep(): Reference {
    const firstReference = this.getResult()[0];
    return firstReference === undefined ? this.addResult() : firstReference;
  }

  /** Comments about the diagnostic report (0..*) Never undefined; an empty list is created when absent. */
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

  /** Reference to full details of an analysis associated with the diagnostic report (0..*) Never undefined; an empty list is created when absent. */
  getStudy(): Reference[] {
    if (this.study === undefined) {
      this.study = [];
    }
    return this.study;
  }

  setStudy(study: Reference[] | undefined): this {
    return this.setFieldValue('study', study);
  }

  hasStudy(): boolean {
    return this.hasFieldValue('study');
  }

  /** Appends a new, empty Reference to `study` and returns it so it can be filled in. */
  addStudy(): Reference;
  /** Appends the given Reference to `study` and returns this object for chaining. */
  addStudy(reference: Reference): this;
  addStudy(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('study', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('study', createdReference);
    return createdReference;
  }

  /** The first Reference of `study`. One is added when the list is empty. */
  getStudyFirstRep(): Reference {
    const firstReference = this.getStudy()[0];
    return firstReference === undefined ? this.addStudy() : firstReference;
  }

  /** Additional information supporting the diagnostic report (0..*) Never undefined; an empty list is created when absent. */
  getSupportingInfo(): DiagnosticReportSupportingInfo[] {
    if (this.supportingInfo === undefined) {
      this.supportingInfo = [];
    }
    return this.supportingInfo;
  }

  setSupportingInfo(supportingInfo: DiagnosticReportSupportingInfo[] | undefined): this {
    return this.setFieldValue('supportingInfo', supportingInfo);
  }

  hasSupportingInfo(): boolean {
    return this.hasFieldValue('supportingInfo');
  }

  /** Appends a new, empty DiagnosticReportSupportingInfo to `supportingInfo` and returns it so it can be filled in. */
  addSupportingInfo(): DiagnosticReportSupportingInfo;
  /** Appends the given DiagnosticReportSupportingInfo to `supportingInfo` and returns this object for chaining. */
  addSupportingInfo(diagnosticReportSupportingInfo: DiagnosticReportSupportingInfo): this;
  addSupportingInfo(
    diagnosticReportSupportingInfo?: DiagnosticReportSupportingInfo
  ): DiagnosticReportSupportingInfo | this {
    if (diagnosticReportSupportingInfo !== undefined) {
      return this.addFieldValue('supportingInfo', diagnosticReportSupportingInfo);
    }
    const createdDiagnosticReportSupportingInfo = new DiagnosticReportSupportingInfo();
    this.addFieldValue('supportingInfo', createdDiagnosticReportSupportingInfo);
    return createdDiagnosticReportSupportingInfo;
  }

  /** The first DiagnosticReportSupportingInfo of `supportingInfo`. One is added when the list is empty. */
  getSupportingInfoFirstRep(): DiagnosticReportSupportingInfo {
    const firstDiagnosticReportSupportingInfo = this.getSupportingInfo()[0];
    return firstDiagnosticReportSupportingInfo === undefined
      ? this.addSupportingInfo()
      : firstDiagnosticReportSupportingInfo;
  }

  /** Key images or data associated with this report (0..*) Never undefined; an empty list is created when absent. */
  getMedia(): DiagnosticReportMedia[] {
    if (this.media === undefined) {
      this.media = [];
    }
    return this.media;
  }

  setMedia(media: DiagnosticReportMedia[] | undefined): this {
    return this.setFieldValue('media', media);
  }

  hasMedia(): boolean {
    return this.hasFieldValue('media');
  }

  /** Appends a new, empty DiagnosticReportMedia to `media` and returns it so it can be filled in. */
  addMedia(): DiagnosticReportMedia;
  /** Appends the given DiagnosticReportMedia to `media` and returns this object for chaining. */
  addMedia(diagnosticReportMedia: DiagnosticReportMedia): this;
  addMedia(diagnosticReportMedia?: DiagnosticReportMedia): DiagnosticReportMedia | this {
    if (diagnosticReportMedia !== undefined) {
      return this.addFieldValue('media', diagnosticReportMedia);
    }
    const createdDiagnosticReportMedia = new DiagnosticReportMedia();
    this.addFieldValue('media', createdDiagnosticReportMedia);
    return createdDiagnosticReportMedia;
  }

  /** The first DiagnosticReportMedia of `media`. One is added when the list is empty. */
  getMediaFirstRep(): DiagnosticReportMedia {
    const firstDiagnosticReportMedia = this.getMedia()[0];
    return firstDiagnosticReportMedia === undefined ? this.addMedia() : firstDiagnosticReportMedia;
  }

  /** Reference to a Composition resource for the DiagnosticReport structure (0..1) Created when absent. */
  getComposition(): Reference {
    if (this.composition === undefined) {
      this.composition = new Reference();
    }
    return this.composition;
  }

  setComposition(composition: Reference | undefined): this {
    return this.setFieldValue('composition', composition);
  }

  hasComposition(): boolean {
    return this.hasFieldValue('composition');
  }

  /** Clinical conclusion (interpretation) of test results (0..1) */
  getConclusion(): string | undefined {
    return this.conclusion;
  }

  /** Sets `conclusion`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setConclusion(conclusion: string | undefined): this {
    return this.setFieldValue('conclusion', conclusion);
  }

  hasConclusion(): boolean {
    return this.hasFieldValue('conclusion');
  }

  /** The element carrying the id and extensions of `conclusion`. Created when absent. */
  getConclusionElement(): Element {
    if (this._conclusion === undefined) {
      this._conclusion = new Element();
    }
    return this._conclusion;
  }

  setConclusionElement(conclusionElement: Element | undefined): this {
    this._conclusion = conclusionElement;
    return this;
  }

  /** Codes for the clinical conclusion of test results (0..*) Never undefined; an empty list is created when absent. */
  getConclusionCode(): CodeableConcept[] {
    if (this.conclusionCode === undefined) {
      this.conclusionCode = [];
    }
    return this.conclusionCode;
  }

  setConclusionCode(conclusionCode: CodeableConcept[] | undefined): this {
    return this.setFieldValue('conclusionCode', conclusionCode);
  }

  hasConclusionCode(): boolean {
    return this.hasFieldValue('conclusionCode');
  }

  /** Appends a new, empty CodeableConcept to `conclusionCode` and returns it so it can be filled in. */
  addConclusionCode(): CodeableConcept;
  /** Appends the given CodeableConcept to `conclusionCode` and returns this object for chaining. */
  addConclusionCode(codeableConcept: CodeableConcept): this;
  addConclusionCode(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('conclusionCode', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('conclusionCode', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `conclusionCode`. One is added when the list is empty. */
  getConclusionCodeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getConclusionCode()[0];
    return firstCodeableConcept === undefined ? this.addConclusionCode() : firstCodeableConcept;
  }

  /** Entire report as issued (0..*) Never undefined; an empty list is created when absent. */
  getPresentedForm(): Attachment[] {
    if (this.presentedForm === undefined) {
      this.presentedForm = [];
    }
    return this.presentedForm;
  }

  setPresentedForm(presentedForm: Attachment[] | undefined): this {
    return this.setFieldValue('presentedForm', presentedForm);
  }

  hasPresentedForm(): boolean {
    return this.hasFieldValue('presentedForm');
  }

  /** Appends a new, empty Attachment to `presentedForm` and returns it so it can be filled in. */
  addPresentedForm(): Attachment;
  /** Appends the given Attachment to `presentedForm` and returns this object for chaining. */
  addPresentedForm(attachment: Attachment): this;
  addPresentedForm(attachment?: Attachment): Attachment | this {
    if (attachment !== undefined) {
      return this.addFieldValue('presentedForm', attachment);
    }
    const createdAttachment = new Attachment();
    this.addFieldValue('presentedForm', createdAttachment);
    return createdAttachment;
  }

  /** The first Attachment of `presentedForm`. One is added when the list is empty. */
  getPresentedFormFirstRep(): Attachment {
    const firstAttachment = this.getPresentedForm()[0];
    return firstAttachment === undefined ? this.addPresentedForm() : firstAttachment;
  }
}

modelTypeRegistry.register('DiagnosticReport', DiagnosticReport, true);

/** True when the value is a DiagnosticReport model instance. */
export function isDiagnosticReport(candidate: unknown): candidate is DiagnosticReport {
  return candidate instanceof DiagnosticReport;
}

/**
 * Additional information supporting the diagnostic report
 */
export class DiagnosticReportSupportingInfo extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'reference',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'reference',
          typeCode: 'Reference',
          targetResourceTypes: ['Citation', 'DiagnosticReport', 'Observation', 'Procedure'],
        },
      ],
    },
  ];

  /** Supporting information role code (1..1) */
  type?: CodeableConcept;

  /** Supporting information reference (1..1) */
  reference?: Reference;

  override fhirType(): string {
    return 'DiagnosticReport.supportingInfo';
  }

  /** FHIR JSON for this DiagnosticReportSupportingInfo, typed as the plain `DiagnosticReportSupportingInfo` data type. */
  override toJSON(): plainTypes.DiagnosticReportSupportingInfo {
    return this.serialize() as plainTypes.DiagnosticReportSupportingInfo;
  }

  /** Supporting information role code (1..1) Created when absent. */
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

  /** Supporting information reference (1..1) Created when absent. */
  getReference(): Reference {
    if (this.reference === undefined) {
      this.reference = new Reference();
    }
    return this.reference;
  }

  setReference(reference: Reference | undefined): this {
    return this.setFieldValue('reference', reference);
  }

  hasReference(): boolean {
    return this.hasFieldValue('reference');
  }
}

modelTypeRegistry.register('DiagnosticReportSupportingInfo', DiagnosticReportSupportingInfo, false);

/**
 * Key images or data associated with this report
 */
export class DiagnosticReportMedia extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'comment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'comment', typeCode: 'string' }],
    },
    {
      elementName: 'link',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'link', typeCode: 'Reference', targetResourceTypes: ['DocumentReference'] },
      ],
    },
  ];

  /** Comment about the image or data (e.g. explanation) (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;

  /** Reference to the image or data source (1..1) */
  link?: Reference;

  override fhirType(): string {
    return 'DiagnosticReport.media';
  }

  /** FHIR JSON for this DiagnosticReportMedia, typed as the plain `DiagnosticReportMedia` data type. */
  override toJSON(): plainTypes.DiagnosticReportMedia {
    return this.serialize() as plainTypes.DiagnosticReportMedia;
  }

  /** Comment about the image or data (e.g. explanation) (0..1) */
  getComment(): string | undefined {
    return this.comment;
  }

  /** Sets `comment`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setComment(comment: string | undefined): this {
    return this.setFieldValue('comment', comment);
  }

  hasComment(): boolean {
    return this.hasFieldValue('comment');
  }

  /** The element carrying the id and extensions of `comment`. Created when absent. */
  getCommentElement(): Element {
    if (this._comment === undefined) {
      this._comment = new Element();
    }
    return this._comment;
  }

  setCommentElement(commentElement: Element | undefined): this {
    this._comment = commentElement;
    return this;
  }

  /** Reference to the image or data source (1..1) Created when absent. */
  getLink(): Reference {
    if (this.link === undefined) {
      this.link = new Reference();
    }
    return this.link;
  }

  setLink(link: Reference | undefined): this {
    return this.setFieldValue('link', link);
  }

  hasLink(): boolean {
    return this.hasFieldValue('link');
  }
}

modelTypeRegistry.register('DiagnosticReportMedia', DiagnosticReportMedia, false);
