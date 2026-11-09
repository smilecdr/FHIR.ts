/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { Attachment } from './attachment';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';

/**
 * Base StructureDefinition for DiagnosticReport Resource
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
            'ProcedureRequest',
            'ReferralRequest',
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
      maximum: 1,
      isList: false,
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
          targetResourceTypes: ['Device', 'Group', 'Location', 'Patient'],
        },
      ],
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
      types: [{ jsonKey: 'performer', typeCode: 'DiagnosticReportPerformer' }],
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
      elementName: 'imagingStudy',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'imagingStudy',
          typeCode: 'Reference',
          targetResourceTypes: ['ImagingManifest', 'ImagingStudy'],
        },
      ],
    },
    {
      elementName: 'image',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'image', typeCode: 'DiagnosticReportImage' }],
    },
    {
      elementName: 'conclusion',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'conclusion', typeCode: 'string' }],
    },
    {
      elementName: 'codedDiagnosis',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'codedDiagnosis', typeCode: 'CodeableConcept' }],
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

  /** registered | partial | preliminary | final + (1..1) */
  status?: valueSetCodes.DiagnosticReportStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Service category (0..1) */
  category?: CodeableConcept;

  /** Name/Code for this diagnostic report (1..1) */
  code?: CodeableConcept;

  /** The subject of the report - usually, but not always, the patient (0..1) */
  subject?: Reference;

  /** Health care event when test ordered (0..1) */
  context?: Reference;

  /** Clinically relevant time/time-period for report (0..1) */
  effectiveDateTime?: string;
  /** Id and extensions of the primitive `effectiveDateTime`. */
  _effectiveDateTime?: Element;
  /** Clinically relevant time/time-period for report (0..1) */
  effectivePeriod?: Period;

  /** DateTime this version was released (0..1) */
  issued?: string;
  /** Id and extensions of the primitive `issued`. */
  _issued?: Element;

  /** Participants in producing the report (0..*) */
  performer?: DiagnosticReportPerformer[];

  /** Specimens this report is based on (0..*) */
  specimen?: Reference[];

  /** Observations - simple, or complex nested groups (0..*) */
  result?: Reference[];

  /** Reference to full details of imaging associated with the diagnostic report (0..*) */
  imagingStudy?: Reference[];

  /** Key images associated with this report (0..*) */
  image?: DiagnosticReportImage[];

  /** Clinical Interpretation of test results (0..1) */
  conclusion?: string;
  /** Id and extensions of the primitive `conclusion`. */
  _conclusion?: Element;

  /** Codes for the conclusion (0..*) */
  codedDiagnosis?: CodeableConcept[];

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

  /** registered | partial | preliminary | final + (1..1) */
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

  /** Service category (0..1) Created when absent. */
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

  /** DateTime this version was released (0..1) */
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

  /** Participants in producing the report (0..*) Never undefined; an empty list is created when absent. */
  getPerformer(): DiagnosticReportPerformer[] {
    if (this.performer === undefined) {
      this.performer = [];
    }
    return this.performer;
  }

  setPerformer(performer: DiagnosticReportPerformer[] | undefined): this {
    return this.setFieldValue('performer', performer);
  }

  hasPerformer(): boolean {
    return this.hasFieldValue('performer');
  }

  /** Appends a new, empty DiagnosticReportPerformer to `performer` and returns it so it can be filled in. */
  addPerformer(): DiagnosticReportPerformer;
  /** Appends the given DiagnosticReportPerformer to `performer` and returns this object for chaining. */
  addPerformer(diagnosticReportPerformer: DiagnosticReportPerformer): this;
  addPerformer(
    diagnosticReportPerformer?: DiagnosticReportPerformer
  ): DiagnosticReportPerformer | this {
    if (diagnosticReportPerformer !== undefined) {
      return this.addFieldValue('performer', diagnosticReportPerformer);
    }
    const createdDiagnosticReportPerformer = new DiagnosticReportPerformer();
    this.addFieldValue('performer', createdDiagnosticReportPerformer);
    return createdDiagnosticReportPerformer;
  }

  /** The first DiagnosticReportPerformer of `performer`. One is added when the list is empty. */
  getPerformerFirstRep(): DiagnosticReportPerformer {
    const firstDiagnosticReportPerformer = this.getPerformer()[0];
    return firstDiagnosticReportPerformer === undefined
      ? this.addPerformer()
      : firstDiagnosticReportPerformer;
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

  /** Observations - simple, or complex nested groups (0..*) Never undefined; an empty list is created when absent. */
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

  /** Reference to full details of imaging associated with the diagnostic report (0..*) Never undefined; an empty list is created when absent. */
  getImagingStudy(): Reference[] {
    if (this.imagingStudy === undefined) {
      this.imagingStudy = [];
    }
    return this.imagingStudy;
  }

  setImagingStudy(imagingStudy: Reference[] | undefined): this {
    return this.setFieldValue('imagingStudy', imagingStudy);
  }

  hasImagingStudy(): boolean {
    return this.hasFieldValue('imagingStudy');
  }

  /** Appends a new, empty Reference to `imagingStudy` and returns it so it can be filled in. */
  addImagingStudy(): Reference;
  /** Appends the given Reference to `imagingStudy` and returns this object for chaining. */
  addImagingStudy(reference: Reference): this;
  addImagingStudy(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('imagingStudy', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('imagingStudy', createdReference);
    return createdReference;
  }

  /** The first Reference of `imagingStudy`. One is added when the list is empty. */
  getImagingStudyFirstRep(): Reference {
    const firstReference = this.getImagingStudy()[0];
    return firstReference === undefined ? this.addImagingStudy() : firstReference;
  }

  /** Key images associated with this report (0..*) Never undefined; an empty list is created when absent. */
  getImage(): DiagnosticReportImage[] {
    if (this.image === undefined) {
      this.image = [];
    }
    return this.image;
  }

  setImage(image: DiagnosticReportImage[] | undefined): this {
    return this.setFieldValue('image', image);
  }

  hasImage(): boolean {
    return this.hasFieldValue('image');
  }

  /** Appends a new, empty DiagnosticReportImage to `image` and returns it so it can be filled in. */
  addImage(): DiagnosticReportImage;
  /** Appends the given DiagnosticReportImage to `image` and returns this object for chaining. */
  addImage(diagnosticReportImage: DiagnosticReportImage): this;
  addImage(diagnosticReportImage?: DiagnosticReportImage): DiagnosticReportImage | this {
    if (diagnosticReportImage !== undefined) {
      return this.addFieldValue('image', diagnosticReportImage);
    }
    const createdDiagnosticReportImage = new DiagnosticReportImage();
    this.addFieldValue('image', createdDiagnosticReportImage);
    return createdDiagnosticReportImage;
  }

  /** The first DiagnosticReportImage of `image`. One is added when the list is empty. */
  getImageFirstRep(): DiagnosticReportImage {
    const firstDiagnosticReportImage = this.getImage()[0];
    return firstDiagnosticReportImage === undefined ? this.addImage() : firstDiagnosticReportImage;
  }

  /** Clinical Interpretation of test results (0..1) */
  getConclusion(): string | undefined {
    return this.conclusion;
  }

  /** Sets `conclusion`. Throws a FhirModelError when the value is not a valid FHIR string. */
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

  /** Codes for the conclusion (0..*) Never undefined; an empty list is created when absent. */
  getCodedDiagnosis(): CodeableConcept[] {
    if (this.codedDiagnosis === undefined) {
      this.codedDiagnosis = [];
    }
    return this.codedDiagnosis;
  }

  setCodedDiagnosis(codedDiagnosis: CodeableConcept[] | undefined): this {
    return this.setFieldValue('codedDiagnosis', codedDiagnosis);
  }

  hasCodedDiagnosis(): boolean {
    return this.hasFieldValue('codedDiagnosis');
  }

  /** Appends a new, empty CodeableConcept to `codedDiagnosis` and returns it so it can be filled in. */
  addCodedDiagnosis(): CodeableConcept;
  /** Appends the given CodeableConcept to `codedDiagnosis` and returns this object for chaining. */
  addCodedDiagnosis(codeableConcept: CodeableConcept): this;
  addCodedDiagnosis(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('codedDiagnosis', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('codedDiagnosis', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `codedDiagnosis`. One is added when the list is empty. */
  getCodedDiagnosisFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getCodedDiagnosis()[0];
    return firstCodeableConcept === undefined ? this.addCodedDiagnosis() : firstCodeableConcept;
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
 * Participants in producing the report
 */
export class DiagnosticReportPerformer extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'role',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'role', typeCode: 'CodeableConcept' }],
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
          targetResourceTypes: ['Organization', 'Practitioner'],
        },
      ],
    },
  ];

  /** Type of performer (0..1) */
  role?: CodeableConcept;

  /** Practitioner or Organization participant (1..1) */
  actor?: Reference;

  override fhirType(): string {
    return 'DiagnosticReport.performer';
  }

  /** FHIR JSON for this DiagnosticReportPerformer, typed as the plain `DiagnosticReportPerformer` data type. */
  override toJSON(): plainTypes.DiagnosticReportPerformer {
    return this.serialize() as plainTypes.DiagnosticReportPerformer;
  }

  /** Type of performer (0..1) Created when absent. */
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

  /** Practitioner or Organization participant (1..1) Created when absent. */
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

modelTypeRegistry.register('DiagnosticReportPerformer', DiagnosticReportPerformer, false);

/**
 * Key images associated with this report
 */
export class DiagnosticReportImage extends BackboneElement {
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
      types: [{ jsonKey: 'link', typeCode: 'Reference', targetResourceTypes: ['Media'] }],
    },
  ];

  /** Comment about the image (e.g. explanation) (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;

  /** Reference to the image source (1..1) */
  link?: Reference;

  override fhirType(): string {
    return 'DiagnosticReport.image';
  }

  /** FHIR JSON for this DiagnosticReportImage, typed as the plain `DiagnosticReportImage` data type. */
  override toJSON(): plainTypes.DiagnosticReportImage {
    return this.serialize() as plainTypes.DiagnosticReportImage;
  }

  /** Comment about the image (e.g. explanation) (0..1) */
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

  /** Reference to the image source (1..1) Created when absent. */
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

modelTypeRegistry.register('DiagnosticReportImage', DiagnosticReportImage, false);
