/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { Age } from './age';
import { Annotation } from './annotation';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Range } from './range';
import { Reference } from './reference';

/**
 * Base StructureDefinition for Condition Resource
 */
export class Condition extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'clinicalStatus',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'clinicalStatus',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ConditionClinicalStatusCodes,
        },
      ],
    },
    {
      elementName: 'verificationStatus',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'verificationStatus',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ConditionVerificationStatus,
        },
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
      elementName: 'severity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'severity', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'bodySite',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'bodySite', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'subject',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'subject', typeCode: 'Reference', targetResourceTypes: ['Group', 'Patient'] },
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
      elementName: 'onset',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'onsetDateTime', typeCode: 'dateTime' },
        { jsonKey: 'onsetAge', typeCode: 'Age' },
        { jsonKey: 'onsetPeriod', typeCode: 'Period' },
        { jsonKey: 'onsetRange', typeCode: 'Range' },
        { jsonKey: 'onsetString', typeCode: 'string' },
      ],
    },
    {
      elementName: 'abatement',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'abatementDateTime', typeCode: 'dateTime' },
        { jsonKey: 'abatementAge', typeCode: 'Age' },
        { jsonKey: 'abatementBoolean', typeCode: 'boolean' },
        { jsonKey: 'abatementPeriod', typeCode: 'Period' },
        { jsonKey: 'abatementRange', typeCode: 'Range' },
        { jsonKey: 'abatementString', typeCode: 'string' },
      ],
    },
    {
      elementName: 'assertedDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'assertedDate', typeCode: 'dateTime' }],
    },
    {
      elementName: 'asserter',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'asserter',
          typeCode: 'Reference',
          targetResourceTypes: ['Patient', 'Practitioner', 'RelatedPerson'],
        },
      ],
    },
    {
      elementName: 'stage',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'stage', typeCode: 'ConditionStage' }],
    },
    {
      elementName: 'evidence',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'evidence', typeCode: 'ConditionEvidence' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
  ];

  readonly resourceType = 'Condition';

  /** External Ids for this condition (0..*) */
  identifier?: Identifier[];

  /** active | recurrence | inactive | remission | resolved (0..1) */
  clinicalStatus?: valueSetCodes.ConditionClinicalStatusCodes;
  /** Id and extensions of the primitive `clinicalStatus`. */
  _clinicalStatus?: Element;

  /** provisional | differential | confirmed | refuted | entered-in-error | unknown (0..1) */
  verificationStatus?: valueSetCodes.ConditionVerificationStatus;
  /** Id and extensions of the primitive `verificationStatus`. */
  _verificationStatus?: Element;

  /** problem-list-item | encounter-diagnosis (0..*) */
  category?: CodeableConcept[];

  /** Subjective severity of condition (0..1) */
  severity?: CodeableConcept;

  /** Identification of the condition, problem or diagnosis (0..1) */
  code?: CodeableConcept;

  /** Anatomical location, if relevant (0..*) */
  bodySite?: CodeableConcept[];

  /** Who has the condition? (1..1) */
  subject?: Reference;

  /** Encounter or episode when condition first asserted (0..1) */
  context?: Reference;

  /** Estimated or actual date, date-time, or age (0..1) */
  onsetDateTime?: string;
  /** Id and extensions of the primitive `onsetDateTime`. */
  _onsetDateTime?: Element;
  /** Estimated or actual date, date-time, or age (0..1) */
  onsetAge?: Age;
  /** Estimated or actual date, date-time, or age (0..1) */
  onsetPeriod?: Period;
  /** Estimated or actual date, date-time, or age (0..1) */
  onsetRange?: Range;
  /** Estimated or actual date, date-time, or age (0..1) */
  onsetString?: string;
  /** Id and extensions of the primitive `onsetString`. */
  _onsetString?: Element;

  /** If/when in resolution/remission (0..1) */
  abatementDateTime?: string;
  /** Id and extensions of the primitive `abatementDateTime`. */
  _abatementDateTime?: Element;
  /** If/when in resolution/remission (0..1) */
  abatementAge?: Age;
  /** If/when in resolution/remission (0..1) */
  abatementBoolean?: boolean;
  /** Id and extensions of the primitive `abatementBoolean`. */
  _abatementBoolean?: Element;
  /** If/when in resolution/remission (0..1) */
  abatementPeriod?: Period;
  /** If/when in resolution/remission (0..1) */
  abatementRange?: Range;
  /** If/when in resolution/remission (0..1) */
  abatementString?: string;
  /** Id and extensions of the primitive `abatementString`. */
  _abatementString?: Element;

  /** Date record was believed accurate (0..1) */
  assertedDate?: string;
  /** Id and extensions of the primitive `assertedDate`. */
  _assertedDate?: Element;

  /** Person who asserts this condition (0..1) */
  asserter?: Reference;

  /** Stage/grade, usually assessed formally (0..1) */
  stage?: ConditionStage;

  /** Supporting evidence (0..*) */
  evidence?: ConditionEvidence[];

  /** Additional information about the Condition (0..*) */
  note?: Annotation[];

  override fhirType(): string {
    return 'Condition';
  }

  /** FHIR JSON for this Condition, typed as the plain `Condition` data type. */
  override toJSON(): plainTypes.Condition {
    return this.serialize() as plainTypes.Condition;
  }

  /** External Ids for this condition (0..*) Never undefined; an empty list is created when absent. */
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

  /** active | recurrence | inactive | remission | resolved (0..1) */
  getClinicalStatus(): valueSetCodes.ConditionClinicalStatusCodes | undefined {
    return this.clinicalStatus;
  }

  /** Sets `clinicalStatus`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setClinicalStatus(clinicalStatus: valueSetCodes.ConditionClinicalStatusCodes | undefined): this {
    return this.setFieldValue('clinicalStatus', clinicalStatus);
  }

  hasClinicalStatus(): boolean {
    return this.hasFieldValue('clinicalStatus');
  }

  /** The element carrying the id and extensions of `clinicalStatus`. Created when absent. */
  getClinicalStatusElement(): Element {
    if (this._clinicalStatus === undefined) {
      this._clinicalStatus = new Element();
    }
    return this._clinicalStatus;
  }

  setClinicalStatusElement(clinicalStatusElement: Element | undefined): this {
    this._clinicalStatus = clinicalStatusElement;
    return this;
  }

  /** provisional | differential | confirmed | refuted | entered-in-error | unknown (0..1) */
  getVerificationStatus(): valueSetCodes.ConditionVerificationStatus | undefined {
    return this.verificationStatus;
  }

  /** Sets `verificationStatus`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setVerificationStatus(
    verificationStatus: valueSetCodes.ConditionVerificationStatus | undefined
  ): this {
    return this.setFieldValue('verificationStatus', verificationStatus);
  }

  hasVerificationStatus(): boolean {
    return this.hasFieldValue('verificationStatus');
  }

  /** The element carrying the id and extensions of `verificationStatus`. Created when absent. */
  getVerificationStatusElement(): Element {
    if (this._verificationStatus === undefined) {
      this._verificationStatus = new Element();
    }
    return this._verificationStatus;
  }

  setVerificationStatusElement(verificationStatusElement: Element | undefined): this {
    this._verificationStatus = verificationStatusElement;
    return this;
  }

  /** problem-list-item | encounter-diagnosis (0..*) Never undefined; an empty list is created when absent. */
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

  /** Subjective severity of condition (0..1) Created when absent. */
  getSeverity(): CodeableConcept {
    if (this.severity === undefined) {
      this.severity = new CodeableConcept();
    }
    return this.severity;
  }

  setSeverity(severity: CodeableConcept | undefined): this {
    return this.setFieldValue('severity', severity);
  }

  hasSeverity(): boolean {
    return this.hasFieldValue('severity');
  }

  /** Identification of the condition, problem or diagnosis (0..1) Created when absent. */
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

  /** Anatomical location, if relevant (0..*) Never undefined; an empty list is created when absent. */
  getBodySite(): CodeableConcept[] {
    if (this.bodySite === undefined) {
      this.bodySite = [];
    }
    return this.bodySite;
  }

  setBodySite(bodySite: CodeableConcept[] | undefined): this {
    return this.setFieldValue('bodySite', bodySite);
  }

  hasBodySite(): boolean {
    return this.hasFieldValue('bodySite');
  }

  /** Appends a new, empty CodeableConcept to `bodySite` and returns it so it can be filled in. */
  addBodySite(): CodeableConcept;
  /** Appends the given CodeableConcept to `bodySite` and returns this object for chaining. */
  addBodySite(codeableConcept: CodeableConcept): this;
  addBodySite(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('bodySite', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('bodySite', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `bodySite`. One is added when the list is empty. */
  getBodySiteFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getBodySite()[0];
    return firstCodeableConcept === undefined ? this.addBodySite() : firstCodeableConcept;
  }

  /** Who has the condition? (1..1) Created when absent. */
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

  /** Encounter or episode when condition first asserted (0..1) Created when absent. */
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

  /** Estimated or actual date, date-time, or age (0..1) Whichever type of `onset[x]` is set. */
  getOnset(): string | Age | Period | Range | undefined {
    return this.getChoiceValue<string | Age | Period | Range>('onset');
  }

  /** True when any type of `onset[x]` is set. */
  hasOnset(): boolean {
    return this.hasChoiceValue('onset');
  }

  getOnsetDateTime(): string | undefined {
    return this.onsetDateTime;
  }

  /** Sets `onset[x]` as dateTime and clears every other type of it. */
  setOnsetDateTime(onsetDateTime: string | undefined): this {
    return this.setFieldValue('onsetDateTime', onsetDateTime);
  }

  hasOnsetDateTime(): boolean {
    return this.hasFieldValue('onsetDateTime');
  }

  getOnsetAge(): Age | undefined {
    return this.onsetAge;
  }

  /** Sets `onset[x]` as Age and clears every other type of it. */
  setOnsetAge(onsetAge: Age | undefined): this {
    return this.setFieldValue('onsetAge', onsetAge);
  }

  hasOnsetAge(): boolean {
    return this.hasFieldValue('onsetAge');
  }

  getOnsetPeriod(): Period | undefined {
    return this.onsetPeriod;
  }

  /** Sets `onset[x]` as Period and clears every other type of it. */
  setOnsetPeriod(onsetPeriod: Period | undefined): this {
    return this.setFieldValue('onsetPeriod', onsetPeriod);
  }

  hasOnsetPeriod(): boolean {
    return this.hasFieldValue('onsetPeriod');
  }

  getOnsetRange(): Range | undefined {
    return this.onsetRange;
  }

  /** Sets `onset[x]` as Range and clears every other type of it. */
  setOnsetRange(onsetRange: Range | undefined): this {
    return this.setFieldValue('onsetRange', onsetRange);
  }

  hasOnsetRange(): boolean {
    return this.hasFieldValue('onsetRange');
  }

  getOnsetString(): string | undefined {
    return this.onsetString;
  }

  /** Sets `onset[x]` as string and clears every other type of it. */
  setOnsetString(onsetString: string | undefined): this {
    return this.setFieldValue('onsetString', onsetString);
  }

  hasOnsetString(): boolean {
    return this.hasFieldValue('onsetString');
  }

  /** If/when in resolution/remission (0..1) Whichever type of `abatement[x]` is set. */
  getAbatement(): string | Age | boolean | Period | Range | undefined {
    return this.getChoiceValue<string | Age | boolean | Period | Range>('abatement');
  }

  /** True when any type of `abatement[x]` is set. */
  hasAbatement(): boolean {
    return this.hasChoiceValue('abatement');
  }

  getAbatementDateTime(): string | undefined {
    return this.abatementDateTime;
  }

  /** Sets `abatement[x]` as dateTime and clears every other type of it. */
  setAbatementDateTime(abatementDateTime: string | undefined): this {
    return this.setFieldValue('abatementDateTime', abatementDateTime);
  }

  hasAbatementDateTime(): boolean {
    return this.hasFieldValue('abatementDateTime');
  }

  getAbatementAge(): Age | undefined {
    return this.abatementAge;
  }

  /** Sets `abatement[x]` as Age and clears every other type of it. */
  setAbatementAge(abatementAge: Age | undefined): this {
    return this.setFieldValue('abatementAge', abatementAge);
  }

  hasAbatementAge(): boolean {
    return this.hasFieldValue('abatementAge');
  }

  getAbatementBoolean(): boolean | undefined {
    return this.abatementBoolean;
  }

  /** Sets `abatement[x]` as boolean and clears every other type of it. */
  setAbatementBoolean(abatementBoolean: boolean | undefined): this {
    return this.setFieldValue('abatementBoolean', abatementBoolean);
  }

  hasAbatementBoolean(): boolean {
    return this.hasFieldValue('abatementBoolean');
  }

  getAbatementPeriod(): Period | undefined {
    return this.abatementPeriod;
  }

  /** Sets `abatement[x]` as Period and clears every other type of it. */
  setAbatementPeriod(abatementPeriod: Period | undefined): this {
    return this.setFieldValue('abatementPeriod', abatementPeriod);
  }

  hasAbatementPeriod(): boolean {
    return this.hasFieldValue('abatementPeriod');
  }

  getAbatementRange(): Range | undefined {
    return this.abatementRange;
  }

  /** Sets `abatement[x]` as Range and clears every other type of it. */
  setAbatementRange(abatementRange: Range | undefined): this {
    return this.setFieldValue('abatementRange', abatementRange);
  }

  hasAbatementRange(): boolean {
    return this.hasFieldValue('abatementRange');
  }

  getAbatementString(): string | undefined {
    return this.abatementString;
  }

  /** Sets `abatement[x]` as string and clears every other type of it. */
  setAbatementString(abatementString: string | undefined): this {
    return this.setFieldValue('abatementString', abatementString);
  }

  hasAbatementString(): boolean {
    return this.hasFieldValue('abatementString');
  }

  /** Date record was believed accurate (0..1) */
  getAssertedDate(): string | undefined {
    return this.assertedDate;
  }

  /** Sets `assertedDate`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setAssertedDate(assertedDate: string | undefined): this {
    return this.setFieldValue('assertedDate', assertedDate);
  }

  hasAssertedDate(): boolean {
    return this.hasFieldValue('assertedDate');
  }

  /** The element carrying the id and extensions of `assertedDate`. Created when absent. */
  getAssertedDateElement(): Element {
    if (this._assertedDate === undefined) {
      this._assertedDate = new Element();
    }
    return this._assertedDate;
  }

  setAssertedDateElement(assertedDateElement: Element | undefined): this {
    this._assertedDate = assertedDateElement;
    return this;
  }

  /** Person who asserts this condition (0..1) Created when absent. */
  getAsserter(): Reference {
    if (this.asserter === undefined) {
      this.asserter = new Reference();
    }
    return this.asserter;
  }

  setAsserter(asserter: Reference | undefined): this {
    return this.setFieldValue('asserter', asserter);
  }

  hasAsserter(): boolean {
    return this.hasFieldValue('asserter');
  }

  /** Stage/grade, usually assessed formally (0..1) Created when absent. */
  getStage(): ConditionStage {
    if (this.stage === undefined) {
      this.stage = new ConditionStage();
    }
    return this.stage;
  }

  setStage(stage: ConditionStage | undefined): this {
    return this.setFieldValue('stage', stage);
  }

  hasStage(): boolean {
    return this.hasFieldValue('stage');
  }

  /** Supporting evidence (0..*) Never undefined; an empty list is created when absent. */
  getEvidence(): ConditionEvidence[] {
    if (this.evidence === undefined) {
      this.evidence = [];
    }
    return this.evidence;
  }

  setEvidence(evidence: ConditionEvidence[] | undefined): this {
    return this.setFieldValue('evidence', evidence);
  }

  hasEvidence(): boolean {
    return this.hasFieldValue('evidence');
  }

  /** Appends a new, empty ConditionEvidence to `evidence` and returns it so it can be filled in. */
  addEvidence(): ConditionEvidence;
  /** Appends the given ConditionEvidence to `evidence` and returns this object for chaining. */
  addEvidence(conditionEvidence: ConditionEvidence): this;
  addEvidence(conditionEvidence?: ConditionEvidence): ConditionEvidence | this {
    if (conditionEvidence !== undefined) {
      return this.addFieldValue('evidence', conditionEvidence);
    }
    const createdConditionEvidence = new ConditionEvidence();
    this.addFieldValue('evidence', createdConditionEvidence);
    return createdConditionEvidence;
  }

  /** The first ConditionEvidence of `evidence`. One is added when the list is empty. */
  getEvidenceFirstRep(): ConditionEvidence {
    const firstConditionEvidence = this.getEvidence()[0];
    return firstConditionEvidence === undefined ? this.addEvidence() : firstConditionEvidence;
  }

  /** Additional information about the Condition (0..*) Never undefined; an empty list is created when absent. */
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

modelTypeRegistry.register('Condition', Condition, true);

/** True when the value is a Condition model instance. */
export function isCondition(candidate: unknown): candidate is Condition {
  return candidate instanceof Condition;
}

/**
 * Stage/grade, usually assessed formally
 */
export class ConditionStage extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'summary',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'summary', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'assessment',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'assessment',
          typeCode: 'Reference',
          targetResourceTypes: ['ClinicalImpression', 'DiagnosticReport', 'Observation'],
        },
      ],
    },
  ];

  /** Simple summary (disease specific) (0..1) */
  summary?: CodeableConcept;

  /** Formal record of assessment (0..*) */
  assessment?: Reference[];

  override fhirType(): string {
    return 'Condition.stage';
  }

  /** FHIR JSON for this ConditionStage, typed as the plain `ConditionStage` data type. */
  override toJSON(): plainTypes.ConditionStage {
    return this.serialize() as plainTypes.ConditionStage;
  }

  /** Simple summary (disease specific) (0..1) Created when absent. */
  getSummary(): CodeableConcept {
    if (this.summary === undefined) {
      this.summary = new CodeableConcept();
    }
    return this.summary;
  }

  setSummary(summary: CodeableConcept | undefined): this {
    return this.setFieldValue('summary', summary);
  }

  hasSummary(): boolean {
    return this.hasFieldValue('summary');
  }

  /** Formal record of assessment (0..*) Never undefined; an empty list is created when absent. */
  getAssessment(): Reference[] {
    if (this.assessment === undefined) {
      this.assessment = [];
    }
    return this.assessment;
  }

  setAssessment(assessment: Reference[] | undefined): this {
    return this.setFieldValue('assessment', assessment);
  }

  hasAssessment(): boolean {
    return this.hasFieldValue('assessment');
  }

  /** Appends a new, empty Reference to `assessment` and returns it so it can be filled in. */
  addAssessment(): Reference;
  /** Appends the given Reference to `assessment` and returns this object for chaining. */
  addAssessment(reference: Reference): this;
  addAssessment(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('assessment', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('assessment', createdReference);
    return createdReference;
  }

  /** The first Reference of `assessment`. One is added when the list is empty. */
  getAssessmentFirstRep(): Reference {
    const firstReference = this.getAssessment()[0];
    return firstReference === undefined ? this.addAssessment() : firstReference;
  }
}

modelTypeRegistry.register('ConditionStage', ConditionStage, false);

/**
 * Supporting evidence
 */
export class ConditionEvidence extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'detail',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'detail', typeCode: 'Reference' }],
    },
  ];

  /** Manifestation/symptom (0..*) */
  code?: CodeableConcept[];

  /** Supporting information found elsewhere (0..*) */
  detail?: Reference[];

  override fhirType(): string {
    return 'Condition.evidence';
  }

  /** FHIR JSON for this ConditionEvidence, typed as the plain `ConditionEvidence` data type. */
  override toJSON(): plainTypes.ConditionEvidence {
    return this.serialize() as plainTypes.ConditionEvidence;
  }

  /** Manifestation/symptom (0..*) Never undefined; an empty list is created when absent. */
  getCode(): CodeableConcept[] {
    if (this.code === undefined) {
      this.code = [];
    }
    return this.code;
  }

  setCode(code: CodeableConcept[] | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** Appends a new, empty CodeableConcept to `code` and returns it so it can be filled in. */
  addCode(): CodeableConcept;
  /** Appends the given CodeableConcept to `code` and returns this object for chaining. */
  addCode(codeableConcept: CodeableConcept): this;
  addCode(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('code', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('code', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `code`. One is added when the list is empty. */
  getCodeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getCode()[0];
    return firstCodeableConcept === undefined ? this.addCode() : firstCodeableConcept;
  }

  /** Supporting information found elsewhere (0..*) Never undefined; an empty list is created when absent. */
  getDetail(): Reference[] {
    if (this.detail === undefined) {
      this.detail = [];
    }
    return this.detail;
  }

  setDetail(detail: Reference[] | undefined): this {
    return this.setFieldValue('detail', detail);
  }

  hasDetail(): boolean {
    return this.hasFieldValue('detail');
  }

  /** Appends a new, empty Reference to `detail` and returns it so it can be filled in. */
  addDetail(): Reference;
  /** Appends the given Reference to `detail` and returns this object for chaining. */
  addDetail(reference: Reference): this;
  addDetail(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('detail', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('detail', createdReference);
    return createdReference;
  }

  /** The first Reference of `detail`. One is added when the list is empty. */
  getDetailFirstRep(): Reference {
    const firstReference = this.getDetail()[0];
    return firstReference === undefined ? this.addDetail() : firstReference;
  }
}

modelTypeRegistry.register('ConditionEvidence', ConditionEvidence, false);
