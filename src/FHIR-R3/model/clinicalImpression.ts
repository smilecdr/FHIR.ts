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
import { Reference } from './reference';

/**
 * Base StructureDefinition for ClinicalImpression Resource
 */
export class ClinicalImpression extends DomainResource {
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
        {
          jsonKey: 'status',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ClinicalImpressionStatus,
        },
      ],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
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
      elementName: 'date',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'date', typeCode: 'dateTime' }],
    },
    {
      elementName: 'assessor',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'assessor', typeCode: 'Reference', targetResourceTypes: ['Practitioner'] },
      ],
    },
    {
      elementName: 'previous',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'previous', typeCode: 'Reference', targetResourceTypes: ['ClinicalImpression'] },
      ],
    },
    {
      elementName: 'problem',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'problem',
          typeCode: 'Reference',
          targetResourceTypes: ['AllergyIntolerance', 'Condition'],
        },
      ],
    },
    {
      elementName: 'investigation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'investigation', typeCode: 'ClinicalImpressionInvestigation' }],
    },
    {
      elementName: 'protocol',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'protocol', typeCode: 'uri' }],
    },
    {
      elementName: 'summary',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'summary', typeCode: 'string' }],
    },
    {
      elementName: 'finding',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'finding', typeCode: 'ClinicalImpressionFinding' }],
    },
    {
      elementName: 'prognosisCodeableConcept',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'prognosisCodeableConcept', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'prognosisReference',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'prognosisReference',
          typeCode: 'Reference',
          targetResourceTypes: ['RiskAssessment'],
        },
      ],
    },
    {
      elementName: 'action',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'action',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Appointment',
            'MedicationRequest',
            'Procedure',
            'ProcedureRequest',
            'ReferralRequest',
          ],
        },
      ],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
  ];

  readonly resourceType = 'ClinicalImpression';

  /** Business identifier (0..*) */
  identifier?: Identifier[];

  /** draft | completed | entered-in-error (1..1) */
  status?: valueSetCodes.ClinicalImpressionStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Kind of assessment performed (0..1) */
  code?: CodeableConcept;

  /** Why/how the assessment was performed (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Patient or group assessed (1..1) */
  subject?: Reference;

  /** Encounter or Episode created from (0..1) */
  context?: Reference;

  /** Time of assessment (0..1) */
  effectiveDateTime?: string;
  /** Id and extensions of the primitive `effectiveDateTime`. */
  _effectiveDateTime?: Element;
  /** Time of assessment (0..1) */
  effectivePeriod?: Period;

  /** When the assessment was documented (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** The clinician performing the assessment (0..1) */
  assessor?: Reference;

  /** Reference to last assessment (0..1) */
  previous?: Reference;

  /** Relevant impressions of patient state (0..*) */
  problem?: Reference[];

  /** One or more sets of investigations (signs, symptions, etc.) (0..*) */
  investigation?: ClinicalImpressionInvestigation[];

  /** Clinical Protocol followed (0..*) */
  protocol?: string[];
  /** Id and extensions of the primitive `protocol`. */
  _protocol?: (Element | null)[];

  /** Summary of the assessment (0..1) */
  summary?: string;
  /** Id and extensions of the primitive `summary`. */
  _summary?: Element;

  /** Possible or likely findings and diagnoses (0..*) */
  finding?: ClinicalImpressionFinding[];

  /** Estimate of likely outcome (0..*) */
  prognosisCodeableConcept?: CodeableConcept[];

  /** RiskAssessment expressing likely outcome (0..*) */
  prognosisReference?: Reference[];

  /** Action taken as part of assessment procedure (0..*) */
  action?: Reference[];

  /** Comments made about the ClinicalImpression (0..*) */
  note?: Annotation[];

  override fhirType(): string {
    return 'ClinicalImpression';
  }

  /** FHIR JSON for this ClinicalImpression, typed as the plain `ClinicalImpression` data type. */
  override toJSON(): plainTypes.ClinicalImpression {
    return this.serialize() as plainTypes.ClinicalImpression;
  }

  /** Business identifier (0..*) Never undefined; an empty list is created when absent. */
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

  /** draft | completed | entered-in-error (1..1) */
  getStatus(): valueSetCodes.ClinicalImpressionStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.ClinicalImpressionStatus | undefined): this {
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

  /** Kind of assessment performed (0..1) Created when absent. */
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

  /** Why/how the assessment was performed (0..1) */
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

  /** Patient or group assessed (1..1) Created when absent. */
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

  /** Encounter or Episode created from (0..1) Created when absent. */
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

  /** Time of assessment (0..1) Whichever type of `effective[x]` is set. */
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

  /** When the assessment was documented (0..1) */
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

  /** The clinician performing the assessment (0..1) Created when absent. */
  getAssessor(): Reference {
    if (this.assessor === undefined) {
      this.assessor = new Reference();
    }
    return this.assessor;
  }

  setAssessor(assessor: Reference | undefined): this {
    return this.setFieldValue('assessor', assessor);
  }

  hasAssessor(): boolean {
    return this.hasFieldValue('assessor');
  }

  /** Reference to last assessment (0..1) Created when absent. */
  getPrevious(): Reference {
    if (this.previous === undefined) {
      this.previous = new Reference();
    }
    return this.previous;
  }

  setPrevious(previous: Reference | undefined): this {
    return this.setFieldValue('previous', previous);
  }

  hasPrevious(): boolean {
    return this.hasFieldValue('previous');
  }

  /** Relevant impressions of patient state (0..*) Never undefined; an empty list is created when absent. */
  getProblem(): Reference[] {
    if (this.problem === undefined) {
      this.problem = [];
    }
    return this.problem;
  }

  setProblem(problem: Reference[] | undefined): this {
    return this.setFieldValue('problem', problem);
  }

  hasProblem(): boolean {
    return this.hasFieldValue('problem');
  }

  /** Appends a new, empty Reference to `problem` and returns it so it can be filled in. */
  addProblem(): Reference;
  /** Appends the given Reference to `problem` and returns this object for chaining. */
  addProblem(reference: Reference): this;
  addProblem(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('problem', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('problem', createdReference);
    return createdReference;
  }

  /** The first Reference of `problem`. One is added when the list is empty. */
  getProblemFirstRep(): Reference {
    const firstReference = this.getProblem()[0];
    return firstReference === undefined ? this.addProblem() : firstReference;
  }

  /** One or more sets of investigations (signs, symptions, etc.) (0..*) Never undefined; an empty list is created when absent. */
  getInvestigation(): ClinicalImpressionInvestigation[] {
    if (this.investigation === undefined) {
      this.investigation = [];
    }
    return this.investigation;
  }

  setInvestigation(investigation: ClinicalImpressionInvestigation[] | undefined): this {
    return this.setFieldValue('investigation', investigation);
  }

  hasInvestigation(): boolean {
    return this.hasFieldValue('investigation');
  }

  /** Appends a new, empty ClinicalImpressionInvestigation to `investigation` and returns it so it can be filled in. */
  addInvestigation(): ClinicalImpressionInvestigation;
  /** Appends the given ClinicalImpressionInvestigation to `investigation` and returns this object for chaining. */
  addInvestigation(clinicalImpressionInvestigation: ClinicalImpressionInvestigation): this;
  addInvestigation(
    clinicalImpressionInvestigation?: ClinicalImpressionInvestigation
  ): ClinicalImpressionInvestigation | this {
    if (clinicalImpressionInvestigation !== undefined) {
      return this.addFieldValue('investigation', clinicalImpressionInvestigation);
    }
    const createdClinicalImpressionInvestigation = new ClinicalImpressionInvestigation();
    this.addFieldValue('investigation', createdClinicalImpressionInvestigation);
    return createdClinicalImpressionInvestigation;
  }

  /** The first ClinicalImpressionInvestigation of `investigation`. One is added when the list is empty. */
  getInvestigationFirstRep(): ClinicalImpressionInvestigation {
    const firstClinicalImpressionInvestigation = this.getInvestigation()[0];
    return firstClinicalImpressionInvestigation === undefined
      ? this.addInvestigation()
      : firstClinicalImpressionInvestigation;
  }

  /** Clinical Protocol followed (0..*) Never undefined; an empty list is created when absent. */
  getProtocol(): string[] {
    if (this.protocol === undefined) {
      this.protocol = [];
    }
    return this.protocol;
  }

  setProtocol(protocol: string[] | undefined): this {
    return this.setFieldValue('protocol', protocol);
  }

  hasProtocol(): boolean {
    return this.hasFieldValue('protocol');
  }

  /** Appends one value to `protocol`. Throws a FhirModelError when it is not a valid FHIR uri. */
  addProtocol(protocol: string): this {
    return this.addFieldValue('protocol', protocol);
  }

  /** Summary of the assessment (0..1) */
  getSummary(): string | undefined {
    return this.summary;
  }

  /** Sets `summary`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setSummary(summary: string | undefined): this {
    return this.setFieldValue('summary', summary);
  }

  hasSummary(): boolean {
    return this.hasFieldValue('summary');
  }

  /** The element carrying the id and extensions of `summary`. Created when absent. */
  getSummaryElement(): Element {
    if (this._summary === undefined) {
      this._summary = new Element();
    }
    return this._summary;
  }

  setSummaryElement(summaryElement: Element | undefined): this {
    this._summary = summaryElement;
    return this;
  }

  /** Possible or likely findings and diagnoses (0..*) Never undefined; an empty list is created when absent. */
  getFinding(): ClinicalImpressionFinding[] {
    if (this.finding === undefined) {
      this.finding = [];
    }
    return this.finding;
  }

  setFinding(finding: ClinicalImpressionFinding[] | undefined): this {
    return this.setFieldValue('finding', finding);
  }

  hasFinding(): boolean {
    return this.hasFieldValue('finding');
  }

  /** Appends a new, empty ClinicalImpressionFinding to `finding` and returns it so it can be filled in. */
  addFinding(): ClinicalImpressionFinding;
  /** Appends the given ClinicalImpressionFinding to `finding` and returns this object for chaining. */
  addFinding(clinicalImpressionFinding: ClinicalImpressionFinding): this;
  addFinding(
    clinicalImpressionFinding?: ClinicalImpressionFinding
  ): ClinicalImpressionFinding | this {
    if (clinicalImpressionFinding !== undefined) {
      return this.addFieldValue('finding', clinicalImpressionFinding);
    }
    const createdClinicalImpressionFinding = new ClinicalImpressionFinding();
    this.addFieldValue('finding', createdClinicalImpressionFinding);
    return createdClinicalImpressionFinding;
  }

  /** The first ClinicalImpressionFinding of `finding`. One is added when the list is empty. */
  getFindingFirstRep(): ClinicalImpressionFinding {
    const firstClinicalImpressionFinding = this.getFinding()[0];
    return firstClinicalImpressionFinding === undefined
      ? this.addFinding()
      : firstClinicalImpressionFinding;
  }

  /** Estimate of likely outcome (0..*) Never undefined; an empty list is created when absent. */
  getPrognosisCodeableConcept(): CodeableConcept[] {
    if (this.prognosisCodeableConcept === undefined) {
      this.prognosisCodeableConcept = [];
    }
    return this.prognosisCodeableConcept;
  }

  setPrognosisCodeableConcept(prognosisCodeableConcept: CodeableConcept[] | undefined): this {
    return this.setFieldValue('prognosisCodeableConcept', prognosisCodeableConcept);
  }

  hasPrognosisCodeableConcept(): boolean {
    return this.hasFieldValue('prognosisCodeableConcept');
  }

  /** Appends a new, empty CodeableConcept to `prognosisCodeableConcept` and returns it so it can be filled in. */
  addPrognosisCodeableConcept(): CodeableConcept;
  /** Appends the given CodeableConcept to `prognosisCodeableConcept` and returns this object for chaining. */
  addPrognosisCodeableConcept(codeableConcept: CodeableConcept): this;
  addPrognosisCodeableConcept(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('prognosisCodeableConcept', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('prognosisCodeableConcept', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `prognosisCodeableConcept`. One is added when the list is empty. */
  getPrognosisCodeableConceptFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getPrognosisCodeableConcept()[0];
    return firstCodeableConcept === undefined
      ? this.addPrognosisCodeableConcept()
      : firstCodeableConcept;
  }

  /** RiskAssessment expressing likely outcome (0..*) Never undefined; an empty list is created when absent. */
  getPrognosisReference(): Reference[] {
    if (this.prognosisReference === undefined) {
      this.prognosisReference = [];
    }
    return this.prognosisReference;
  }

  setPrognosisReference(prognosisReference: Reference[] | undefined): this {
    return this.setFieldValue('prognosisReference', prognosisReference);
  }

  hasPrognosisReference(): boolean {
    return this.hasFieldValue('prognosisReference');
  }

  /** Appends a new, empty Reference to `prognosisReference` and returns it so it can be filled in. */
  addPrognosisReference(): Reference;
  /** Appends the given Reference to `prognosisReference` and returns this object for chaining. */
  addPrognosisReference(reference: Reference): this;
  addPrognosisReference(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('prognosisReference', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('prognosisReference', createdReference);
    return createdReference;
  }

  /** The first Reference of `prognosisReference`. One is added when the list is empty. */
  getPrognosisReferenceFirstRep(): Reference {
    const firstReference = this.getPrognosisReference()[0];
    return firstReference === undefined ? this.addPrognosisReference() : firstReference;
  }

  /** Action taken as part of assessment procedure (0..*) Never undefined; an empty list is created when absent. */
  getAction(): Reference[] {
    if (this.action === undefined) {
      this.action = [];
    }
    return this.action;
  }

  setAction(action: Reference[] | undefined): this {
    return this.setFieldValue('action', action);
  }

  hasAction(): boolean {
    return this.hasFieldValue('action');
  }

  /** Appends a new, empty Reference to `action` and returns it so it can be filled in. */
  addAction(): Reference;
  /** Appends the given Reference to `action` and returns this object for chaining. */
  addAction(reference: Reference): this;
  addAction(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('action', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('action', createdReference);
    return createdReference;
  }

  /** The first Reference of `action`. One is added when the list is empty. */
  getActionFirstRep(): Reference {
    const firstReference = this.getAction()[0];
    return firstReference === undefined ? this.addAction() : firstReference;
  }

  /** Comments made about the ClinicalImpression (0..*) Never undefined; an empty list is created when absent. */
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

modelTypeRegistry.register('ClinicalImpression', ClinicalImpression, true);

/** True when the value is a ClinicalImpression model instance. */
export function isClinicalImpression(candidate: unknown): candidate is ClinicalImpression {
  return candidate instanceof ClinicalImpression;
}

/**
 * One or more sets of investigations (signs, symptions, etc.)
 */
export class ClinicalImpressionInvestigation extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'item',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'item',
          typeCode: 'Reference',
          targetResourceTypes: [
            'DiagnosticReport',
            'FamilyMemberHistory',
            'ImagingStudy',
            'Observation',
            'QuestionnaireResponse',
            'RiskAssessment',
          ],
        },
      ],
    },
  ];

  /** A name/code for the set (1..1) */
  code?: CodeableConcept;

  /** Record of a specific investigation (0..*) */
  item?: Reference[];

  override fhirType(): string {
    return 'ClinicalImpression.investigation';
  }

  /** FHIR JSON for this ClinicalImpressionInvestigation, typed as the plain `ClinicalImpressionInvestigation` data type. */
  override toJSON(): plainTypes.ClinicalImpressionInvestigation {
    return this.serialize() as plainTypes.ClinicalImpressionInvestigation;
  }

  /** A name/code for the set (1..1) Created when absent. */
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

  /** Record of a specific investigation (0..*) Never undefined; an empty list is created when absent. */
  getItem(): Reference[] {
    if (this.item === undefined) {
      this.item = [];
    }
    return this.item;
  }

  setItem(item: Reference[] | undefined): this {
    return this.setFieldValue('item', item);
  }

  hasItem(): boolean {
    return this.hasFieldValue('item');
  }

  /** Appends a new, empty Reference to `item` and returns it so it can be filled in. */
  addItem(): Reference;
  /** Appends the given Reference to `item` and returns this object for chaining. */
  addItem(reference: Reference): this;
  addItem(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('item', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('item', createdReference);
    return createdReference;
  }

  /** The first Reference of `item`. One is added when the list is empty. */
  getItemFirstRep(): Reference {
    const firstReference = this.getItem()[0];
    return firstReference === undefined ? this.addItem() : firstReference;
  }
}

modelTypeRegistry.register(
  'ClinicalImpressionInvestigation',
  ClinicalImpressionInvestigation,
  false
);

/**
 * Possible or likely findings and diagnoses
 */
export class ClinicalImpressionFinding extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'item',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'itemCodeableConcept', typeCode: 'CodeableConcept' },
        {
          jsonKey: 'itemReference',
          typeCode: 'Reference',
          targetResourceTypes: ['Condition', 'Observation'],
        },
      ],
    },
    {
      elementName: 'basis',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'basis', typeCode: 'string' }],
    },
  ];

  /** What was found (1..1) */
  itemCodeableConcept?: CodeableConcept;
  /** What was found (1..1) */
  itemReference?: Reference;

  /** Which investigations support finding (0..1) */
  basis?: string;
  /** Id and extensions of the primitive `basis`. */
  _basis?: Element;

  override fhirType(): string {
    return 'ClinicalImpression.finding';
  }

  /** FHIR JSON for this ClinicalImpressionFinding, typed as the plain `ClinicalImpressionFinding` data type. */
  override toJSON(): plainTypes.ClinicalImpressionFinding {
    return this.serialize() as plainTypes.ClinicalImpressionFinding;
  }

  /** What was found (1..1) Whichever type of `item[x]` is set. */
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

  /** Which investigations support finding (0..1) */
  getBasis(): string | undefined {
    return this.basis;
  }

  /** Sets `basis`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setBasis(basis: string | undefined): this {
    return this.setFieldValue('basis', basis);
  }

  hasBasis(): boolean {
    return this.hasFieldValue('basis');
  }

  /** The element carrying the id and extensions of `basis`. Created when absent. */
  getBasisElement(): Element {
    if (this._basis === undefined) {
      this._basis = new Element();
    }
    return this._basis;
  }

  setBasisElement(basisElement: Element | undefined): this {
    this._basis = basisElement;
    return this;
  }
}

modelTypeRegistry.register('ClinicalImpressionFinding', ClinicalImpressionFinding, false);
