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
import { Period } from './period';
import { Reference } from './reference';
import { RelatedArtifact } from './relatedArtifact';

/**
 * A scientific study of nature that sometimes includes processes involved in health and disease. For example, clinical trials are research studies that involve people. These studies may be related to new ways to screen, prevent, diagnose, and treat disease. They may also study certain outcomes and certain groups of people by looking at data collected in the past or future.
 */
export class ResearchStudy extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'url',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'url', typeCode: 'uri' }],
    },
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'version',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'version', typeCode: 'string' }],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'title',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'title', typeCode: 'string' }],
    },
    {
      elementName: 'label',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'label', typeCode: 'ResearchStudyLabel' }],
    },
    {
      elementName: 'protocol',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'protocol', typeCode: 'Reference', targetResourceTypes: ['PlanDefinition'] },
      ],
    },
    {
      elementName: 'partOf',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'partOf', typeCode: 'Reference', targetResourceTypes: ['ResearchStudy'] }],
    },
    {
      elementName: 'relatedArtifact',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'relatedArtifact', typeCode: 'RelatedArtifact' }],
    },
    {
      elementName: 'date',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'date', typeCode: 'dateTime' }],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.PublicationStatus },
      ],
    },
    {
      elementName: 'primaryPurposeType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'primaryPurposeType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'phase',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'phase', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'studyDesign',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'studyDesign', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'focus',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'focus', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'condition',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'condition', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'keyword',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'keyword', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'region',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'region', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'descriptionSummary',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'descriptionSummary', typeCode: 'markdown' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
    {
      elementName: 'site',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'site',
          typeCode: 'Reference',
          targetResourceTypes: ['Location', 'Organization', 'ResearchStudy'],
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
    {
      elementName: 'classifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'classifier', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'associatedParty',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'associatedParty', typeCode: 'ResearchStudyAssociatedParty' }],
    },
    {
      elementName: 'progressStatus',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'progressStatus', typeCode: 'ResearchStudyProgressStatus' }],
    },
    {
      elementName: 'whyStopped',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'whyStopped', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'recruitment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'recruitment', typeCode: 'ResearchStudyRecruitment' }],
    },
    {
      elementName: 'comparisonGroup',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'comparisonGroup', typeCode: 'ResearchStudyComparisonGroup' }],
    },
    {
      elementName: 'objective',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'objective', typeCode: 'ResearchStudyObjective' }],
    },
    {
      elementName: 'outcomeMeasure',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'outcomeMeasure', typeCode: 'ResearchStudyOutcomeMeasure' }],
    },
    {
      elementName: 'result',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'result',
          typeCode: 'Reference',
          targetResourceTypes: ['Citation', 'DiagnosticReport', 'EvidenceReport'],
        },
      ],
    },
  ];

  readonly resourceType = 'ResearchStudy';

  /** Canonical identifier for this study resource (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Business Identifier for study (0..*) */
  identifier?: Identifier[];

  /** The business version for the study record (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** Name for this study (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Human readable name of the study (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

  /** Additional names for the study (0..*) */
  label?: ResearchStudyLabel[];

  /** Steps followed in executing study (0..*) */
  protocol?: Reference[];

  /** Part of larger study (0..*) */
  partOf?: Reference[];

  /** References, URLs, and attachments (0..*) */
  relatedArtifact?: RelatedArtifact[];

  /** Date the resource last changed (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** draft | active | retired | unknown (1..1) */
  status?: valueSetCodes.PublicationStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** treatment | prevention | diagnostic | supportive-care | screening | health-services-research | basic-science | device-feasibility (0..1) */
  primaryPurposeType?: CodeableConcept;

  /** n-a | early-phase-1 | phase-1 | phase-1-phase-2 | phase-2 | phase-2-phase-3 | phase-3 | phase-4 (0..1) */
  phase?: CodeableConcept;

  /** Classifications of the study design characteristics (0..*) */
  studyDesign?: CodeableConcept[];

  /** Drugs, devices, etc. under study (0..*) */
  focus?: CodeableReference[];

  /** Condition being studied (0..*) */
  condition?: CodeableConcept[];

  /** Used to search for the study (0..*) */
  keyword?: CodeableConcept[];

  /** Geographic area for the study (0..*) */
  region?: CodeableConcept[];

  /** Brief text explaining the study (0..1) */
  descriptionSummary?: string;
  /** Id and extensions of the primitive `descriptionSummary`. */
  _descriptionSummary?: Element;

  /** Detailed narrative of the study (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** When the study began and ended (0..1) */
  period?: Period;

  /** Facility where study activities are conducted (0..*) */
  site?: Reference[];

  /** Comments made about the study (0..*) */
  note?: Annotation[];

  /** Classification for the study (0..*) */
  classifier?: CodeableConcept[];

  /** Sponsors, collaborators, and other parties (0..*) */
  associatedParty?: ResearchStudyAssociatedParty[];

  /** Status of study with time for that status (0..*) */
  progressStatus?: ResearchStudyProgressStatus[];

  /** accrual-goal-met | closed-due-to-toxicity | closed-due-to-lack-of-study-progress | temporarily-closed-per-study-design (0..1) */
  whyStopped?: CodeableConcept;

  /** Target or actual group of participants enrolled in study (0..1) */
  recruitment?: ResearchStudyRecruitment;

  /** Defined path through the study for a subject (0..*) */
  comparisonGroup?: ResearchStudyComparisonGroup[];

  /** A goal for the study (0..*) */
  objective?: ResearchStudyObjective[];

  /** A variable measured during the study (0..*) */
  outcomeMeasure?: ResearchStudyOutcomeMeasure[];

  /** Link to results generated during the study (0..*) */
  result?: Reference[];

  override fhirType(): string {
    return 'ResearchStudy';
  }

  /** FHIR JSON for this ResearchStudy, typed as the plain `ResearchStudy` data type. */
  override toJSON(): plainTypes.ResearchStudy {
    return this.serialize() as plainTypes.ResearchStudy;
  }

  /** Canonical identifier for this study resource (0..1) */
  getUrl(): string | undefined {
    return this.url;
  }

  /** Sets `url`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setUrl(url: string | undefined): this {
    return this.setFieldValue('url', url);
  }

  hasUrl(): boolean {
    return this.hasFieldValue('url');
  }

  /** The element carrying the id and extensions of `url`. Created when absent. */
  getUrlElement(): Element {
    if (this._url === undefined) {
      this._url = new Element();
    }
    return this._url;
  }

  setUrlElement(urlElement: Element | undefined): this {
    this._url = urlElement;
    return this;
  }

  /** Business Identifier for study (0..*) Never undefined; an empty list is created when absent. */
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

  /** The business version for the study record (0..1) */
  getVersion(): string | undefined {
    return this.version;
  }

  /** Sets `version`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setVersion(version: string | undefined): this {
    return this.setFieldValue('version', version);
  }

  hasVersion(): boolean {
    return this.hasFieldValue('version');
  }

  /** The element carrying the id and extensions of `version`. Created when absent. */
  getVersionElement(): Element {
    if (this._version === undefined) {
      this._version = new Element();
    }
    return this._version;
  }

  setVersionElement(versionElement: Element | undefined): this {
    this._version = versionElement;
    return this;
  }

  /** Name for this study (computer friendly) (0..1) */
  getName(): string | undefined {
    return this.name;
  }

  /** Sets `name`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setName(name: string | undefined): this {
    return this.setFieldValue('name', name);
  }

  hasName(): boolean {
    return this.hasFieldValue('name');
  }

  /** The element carrying the id and extensions of `name`. Created when absent. */
  getNameElement(): Element {
    if (this._name === undefined) {
      this._name = new Element();
    }
    return this._name;
  }

  setNameElement(nameElement: Element | undefined): this {
    this._name = nameElement;
    return this;
  }

  /** Human readable name of the study (0..1) */
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

  /** Additional names for the study (0..*) Never undefined; an empty list is created when absent. */
  getLabel(): ResearchStudyLabel[] {
    if (this.label === undefined) {
      this.label = [];
    }
    return this.label;
  }

  setLabel(label: ResearchStudyLabel[] | undefined): this {
    return this.setFieldValue('label', label);
  }

  hasLabel(): boolean {
    return this.hasFieldValue('label');
  }

  /** Appends a new, empty ResearchStudyLabel to `label` and returns it so it can be filled in. */
  addLabel(): ResearchStudyLabel;
  /** Appends the given ResearchStudyLabel to `label` and returns this object for chaining. */
  addLabel(researchStudyLabel: ResearchStudyLabel): this;
  addLabel(researchStudyLabel?: ResearchStudyLabel): ResearchStudyLabel | this {
    if (researchStudyLabel !== undefined) {
      return this.addFieldValue('label', researchStudyLabel);
    }
    const createdResearchStudyLabel = new ResearchStudyLabel();
    this.addFieldValue('label', createdResearchStudyLabel);
    return createdResearchStudyLabel;
  }

  /** The first ResearchStudyLabel of `label`. One is added when the list is empty. */
  getLabelFirstRep(): ResearchStudyLabel {
    const firstResearchStudyLabel = this.getLabel()[0];
    return firstResearchStudyLabel === undefined ? this.addLabel() : firstResearchStudyLabel;
  }

  /** Steps followed in executing study (0..*) Never undefined; an empty list is created when absent. */
  getProtocol(): Reference[] {
    if (this.protocol === undefined) {
      this.protocol = [];
    }
    return this.protocol;
  }

  setProtocol(protocol: Reference[] | undefined): this {
    return this.setFieldValue('protocol', protocol);
  }

  hasProtocol(): boolean {
    return this.hasFieldValue('protocol');
  }

  /** Appends a new, empty Reference to `protocol` and returns it so it can be filled in. */
  addProtocol(): Reference;
  /** Appends the given Reference to `protocol` and returns this object for chaining. */
  addProtocol(reference: Reference): this;
  addProtocol(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('protocol', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('protocol', createdReference);
    return createdReference;
  }

  /** The first Reference of `protocol`. One is added when the list is empty. */
  getProtocolFirstRep(): Reference {
    const firstReference = this.getProtocol()[0];
    return firstReference === undefined ? this.addProtocol() : firstReference;
  }

  /** Part of larger study (0..*) Never undefined; an empty list is created when absent. */
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

  /** References, URLs, and attachments (0..*) Never undefined; an empty list is created when absent. */
  getRelatedArtifact(): RelatedArtifact[] {
    if (this.relatedArtifact === undefined) {
      this.relatedArtifact = [];
    }
    return this.relatedArtifact;
  }

  setRelatedArtifact(relatedArtifact: RelatedArtifact[] | undefined): this {
    return this.setFieldValue('relatedArtifact', relatedArtifact);
  }

  hasRelatedArtifact(): boolean {
    return this.hasFieldValue('relatedArtifact');
  }

  /** Appends a new, empty RelatedArtifact to `relatedArtifact` and returns it so it can be filled in. */
  addRelatedArtifact(): RelatedArtifact;
  /** Appends the given RelatedArtifact to `relatedArtifact` and returns this object for chaining. */
  addRelatedArtifact(relatedArtifact: RelatedArtifact): this;
  addRelatedArtifact(relatedArtifact?: RelatedArtifact): RelatedArtifact | this {
    if (relatedArtifact !== undefined) {
      return this.addFieldValue('relatedArtifact', relatedArtifact);
    }
    const createdRelatedArtifact = new RelatedArtifact();
    this.addFieldValue('relatedArtifact', createdRelatedArtifact);
    return createdRelatedArtifact;
  }

  /** The first RelatedArtifact of `relatedArtifact`. One is added when the list is empty. */
  getRelatedArtifactFirstRep(): RelatedArtifact {
    const firstRelatedArtifact = this.getRelatedArtifact()[0];
    return firstRelatedArtifact === undefined ? this.addRelatedArtifact() : firstRelatedArtifact;
  }

  /** Date the resource last changed (0..1) */
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

  /** draft | active | retired | unknown (1..1) */
  getStatus(): valueSetCodes.PublicationStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.PublicationStatus | undefined): this {
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

  /** treatment | prevention | diagnostic | supportive-care | screening | health-services-research | basic-science | device-feasibility (0..1) Created when absent. */
  getPrimaryPurposeType(): CodeableConcept {
    if (this.primaryPurposeType === undefined) {
      this.primaryPurposeType = new CodeableConcept();
    }
    return this.primaryPurposeType;
  }

  setPrimaryPurposeType(primaryPurposeType: CodeableConcept | undefined): this {
    return this.setFieldValue('primaryPurposeType', primaryPurposeType);
  }

  hasPrimaryPurposeType(): boolean {
    return this.hasFieldValue('primaryPurposeType');
  }

  /** n-a | early-phase-1 | phase-1 | phase-1-phase-2 | phase-2 | phase-2-phase-3 | phase-3 | phase-4 (0..1) Created when absent. */
  getPhase(): CodeableConcept {
    if (this.phase === undefined) {
      this.phase = new CodeableConcept();
    }
    return this.phase;
  }

  setPhase(phase: CodeableConcept | undefined): this {
    return this.setFieldValue('phase', phase);
  }

  hasPhase(): boolean {
    return this.hasFieldValue('phase');
  }

  /** Classifications of the study design characteristics (0..*) Never undefined; an empty list is created when absent. */
  getStudyDesign(): CodeableConcept[] {
    if (this.studyDesign === undefined) {
      this.studyDesign = [];
    }
    return this.studyDesign;
  }

  setStudyDesign(studyDesign: CodeableConcept[] | undefined): this {
    return this.setFieldValue('studyDesign', studyDesign);
  }

  hasStudyDesign(): boolean {
    return this.hasFieldValue('studyDesign');
  }

  /** Appends a new, empty CodeableConcept to `studyDesign` and returns it so it can be filled in. */
  addStudyDesign(): CodeableConcept;
  /** Appends the given CodeableConcept to `studyDesign` and returns this object for chaining. */
  addStudyDesign(codeableConcept: CodeableConcept): this;
  addStudyDesign(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('studyDesign', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('studyDesign', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `studyDesign`. One is added when the list is empty. */
  getStudyDesignFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getStudyDesign()[0];
    return firstCodeableConcept === undefined ? this.addStudyDesign() : firstCodeableConcept;
  }

  /** Drugs, devices, etc. under study (0..*) Never undefined; an empty list is created when absent. */
  getFocus(): CodeableReference[] {
    if (this.focus === undefined) {
      this.focus = [];
    }
    return this.focus;
  }

  setFocus(focus: CodeableReference[] | undefined): this {
    return this.setFieldValue('focus', focus);
  }

  hasFocus(): boolean {
    return this.hasFieldValue('focus');
  }

  /** Appends a new, empty CodeableReference to `focus` and returns it so it can be filled in. */
  addFocus(): CodeableReference;
  /** Appends the given CodeableReference to `focus` and returns this object for chaining. */
  addFocus(codeableReference: CodeableReference): this;
  addFocus(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('focus', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('focus', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `focus`. One is added when the list is empty. */
  getFocusFirstRep(): CodeableReference {
    const firstCodeableReference = this.getFocus()[0];
    return firstCodeableReference === undefined ? this.addFocus() : firstCodeableReference;
  }

  /** Condition being studied (0..*) Never undefined; an empty list is created when absent. */
  getCondition(): CodeableConcept[] {
    if (this.condition === undefined) {
      this.condition = [];
    }
    return this.condition;
  }

  setCondition(condition: CodeableConcept[] | undefined): this {
    return this.setFieldValue('condition', condition);
  }

  hasCondition(): boolean {
    return this.hasFieldValue('condition');
  }

  /** Appends a new, empty CodeableConcept to `condition` and returns it so it can be filled in. */
  addCondition(): CodeableConcept;
  /** Appends the given CodeableConcept to `condition` and returns this object for chaining. */
  addCondition(codeableConcept: CodeableConcept): this;
  addCondition(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('condition', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('condition', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `condition`. One is added when the list is empty. */
  getConditionFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getCondition()[0];
    return firstCodeableConcept === undefined ? this.addCondition() : firstCodeableConcept;
  }

  /** Used to search for the study (0..*) Never undefined; an empty list is created when absent. */
  getKeyword(): CodeableConcept[] {
    if (this.keyword === undefined) {
      this.keyword = [];
    }
    return this.keyword;
  }

  setKeyword(keyword: CodeableConcept[] | undefined): this {
    return this.setFieldValue('keyword', keyword);
  }

  hasKeyword(): boolean {
    return this.hasFieldValue('keyword');
  }

  /** Appends a new, empty CodeableConcept to `keyword` and returns it so it can be filled in. */
  addKeyword(): CodeableConcept;
  /** Appends the given CodeableConcept to `keyword` and returns this object for chaining. */
  addKeyword(codeableConcept: CodeableConcept): this;
  addKeyword(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('keyword', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('keyword', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `keyword`. One is added when the list is empty. */
  getKeywordFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getKeyword()[0];
    return firstCodeableConcept === undefined ? this.addKeyword() : firstCodeableConcept;
  }

  /** Geographic area for the study (0..*) Never undefined; an empty list is created when absent. */
  getRegion(): CodeableConcept[] {
    if (this.region === undefined) {
      this.region = [];
    }
    return this.region;
  }

  setRegion(region: CodeableConcept[] | undefined): this {
    return this.setFieldValue('region', region);
  }

  hasRegion(): boolean {
    return this.hasFieldValue('region');
  }

  /** Appends a new, empty CodeableConcept to `region` and returns it so it can be filled in. */
  addRegion(): CodeableConcept;
  /** Appends the given CodeableConcept to `region` and returns this object for chaining. */
  addRegion(codeableConcept: CodeableConcept): this;
  addRegion(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('region', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('region', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `region`. One is added when the list is empty. */
  getRegionFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getRegion()[0];
    return firstCodeableConcept === undefined ? this.addRegion() : firstCodeableConcept;
  }

  /** Brief text explaining the study (0..1) */
  getDescriptionSummary(): string | undefined {
    return this.descriptionSummary;
  }

  /** Sets `descriptionSummary`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setDescriptionSummary(descriptionSummary: string | undefined): this {
    return this.setFieldValue('descriptionSummary', descriptionSummary);
  }

  hasDescriptionSummary(): boolean {
    return this.hasFieldValue('descriptionSummary');
  }

  /** The element carrying the id and extensions of `descriptionSummary`. Created when absent. */
  getDescriptionSummaryElement(): Element {
    if (this._descriptionSummary === undefined) {
      this._descriptionSummary = new Element();
    }
    return this._descriptionSummary;
  }

  setDescriptionSummaryElement(descriptionSummaryElement: Element | undefined): this {
    this._descriptionSummary = descriptionSummaryElement;
    return this;
  }

  /** Detailed narrative of the study (0..1) */
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

  /** When the study began and ended (0..1) Created when absent. */
  getPeriod(): Period {
    if (this.period === undefined) {
      this.period = new Period();
    }
    return this.period;
  }

  setPeriod(period: Period | undefined): this {
    return this.setFieldValue('period', period);
  }

  hasPeriod(): boolean {
    return this.hasFieldValue('period');
  }

  /** Facility where study activities are conducted (0..*) Never undefined; an empty list is created when absent. */
  getSite(): Reference[] {
    if (this.site === undefined) {
      this.site = [];
    }
    return this.site;
  }

  setSite(site: Reference[] | undefined): this {
    return this.setFieldValue('site', site);
  }

  hasSite(): boolean {
    return this.hasFieldValue('site');
  }

  /** Appends a new, empty Reference to `site` and returns it so it can be filled in. */
  addSite(): Reference;
  /** Appends the given Reference to `site` and returns this object for chaining. */
  addSite(reference: Reference): this;
  addSite(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('site', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('site', createdReference);
    return createdReference;
  }

  /** The first Reference of `site`. One is added when the list is empty. */
  getSiteFirstRep(): Reference {
    const firstReference = this.getSite()[0];
    return firstReference === undefined ? this.addSite() : firstReference;
  }

  /** Comments made about the study (0..*) Never undefined; an empty list is created when absent. */
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

  /** Classification for the study (0..*) Never undefined; an empty list is created when absent. */
  getClassifier(): CodeableConcept[] {
    if (this.classifier === undefined) {
      this.classifier = [];
    }
    return this.classifier;
  }

  setClassifier(classifier: CodeableConcept[] | undefined): this {
    return this.setFieldValue('classifier', classifier);
  }

  hasClassifier(): boolean {
    return this.hasFieldValue('classifier');
  }

  /** Appends a new, empty CodeableConcept to `classifier` and returns it so it can be filled in. */
  addClassifier(): CodeableConcept;
  /** Appends the given CodeableConcept to `classifier` and returns this object for chaining. */
  addClassifier(codeableConcept: CodeableConcept): this;
  addClassifier(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('classifier', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('classifier', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `classifier`. One is added when the list is empty. */
  getClassifierFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getClassifier()[0];
    return firstCodeableConcept === undefined ? this.addClassifier() : firstCodeableConcept;
  }

  /** Sponsors, collaborators, and other parties (0..*) Never undefined; an empty list is created when absent. */
  getAssociatedParty(): ResearchStudyAssociatedParty[] {
    if (this.associatedParty === undefined) {
      this.associatedParty = [];
    }
    return this.associatedParty;
  }

  setAssociatedParty(associatedParty: ResearchStudyAssociatedParty[] | undefined): this {
    return this.setFieldValue('associatedParty', associatedParty);
  }

  hasAssociatedParty(): boolean {
    return this.hasFieldValue('associatedParty');
  }

  /** Appends a new, empty ResearchStudyAssociatedParty to `associatedParty` and returns it so it can be filled in. */
  addAssociatedParty(): ResearchStudyAssociatedParty;
  /** Appends the given ResearchStudyAssociatedParty to `associatedParty` and returns this object for chaining. */
  addAssociatedParty(researchStudyAssociatedParty: ResearchStudyAssociatedParty): this;
  addAssociatedParty(
    researchStudyAssociatedParty?: ResearchStudyAssociatedParty
  ): ResearchStudyAssociatedParty | this {
    if (researchStudyAssociatedParty !== undefined) {
      return this.addFieldValue('associatedParty', researchStudyAssociatedParty);
    }
    const createdResearchStudyAssociatedParty = new ResearchStudyAssociatedParty();
    this.addFieldValue('associatedParty', createdResearchStudyAssociatedParty);
    return createdResearchStudyAssociatedParty;
  }

  /** The first ResearchStudyAssociatedParty of `associatedParty`. One is added when the list is empty. */
  getAssociatedPartyFirstRep(): ResearchStudyAssociatedParty {
    const firstResearchStudyAssociatedParty = this.getAssociatedParty()[0];
    return firstResearchStudyAssociatedParty === undefined
      ? this.addAssociatedParty()
      : firstResearchStudyAssociatedParty;
  }

  /** Status of study with time for that status (0..*) Never undefined; an empty list is created when absent. */
  getProgressStatus(): ResearchStudyProgressStatus[] {
    if (this.progressStatus === undefined) {
      this.progressStatus = [];
    }
    return this.progressStatus;
  }

  setProgressStatus(progressStatus: ResearchStudyProgressStatus[] | undefined): this {
    return this.setFieldValue('progressStatus', progressStatus);
  }

  hasProgressStatus(): boolean {
    return this.hasFieldValue('progressStatus');
  }

  /** Appends a new, empty ResearchStudyProgressStatus to `progressStatus` and returns it so it can be filled in. */
  addProgressStatus(): ResearchStudyProgressStatus;
  /** Appends the given ResearchStudyProgressStatus to `progressStatus` and returns this object for chaining. */
  addProgressStatus(researchStudyProgressStatus: ResearchStudyProgressStatus): this;
  addProgressStatus(
    researchStudyProgressStatus?: ResearchStudyProgressStatus
  ): ResearchStudyProgressStatus | this {
    if (researchStudyProgressStatus !== undefined) {
      return this.addFieldValue('progressStatus', researchStudyProgressStatus);
    }
    const createdResearchStudyProgressStatus = new ResearchStudyProgressStatus();
    this.addFieldValue('progressStatus', createdResearchStudyProgressStatus);
    return createdResearchStudyProgressStatus;
  }

  /** The first ResearchStudyProgressStatus of `progressStatus`. One is added when the list is empty. */
  getProgressStatusFirstRep(): ResearchStudyProgressStatus {
    const firstResearchStudyProgressStatus = this.getProgressStatus()[0];
    return firstResearchStudyProgressStatus === undefined
      ? this.addProgressStatus()
      : firstResearchStudyProgressStatus;
  }

  /** accrual-goal-met | closed-due-to-toxicity | closed-due-to-lack-of-study-progress | temporarily-closed-per-study-design (0..1) Created when absent. */
  getWhyStopped(): CodeableConcept {
    if (this.whyStopped === undefined) {
      this.whyStopped = new CodeableConcept();
    }
    return this.whyStopped;
  }

  setWhyStopped(whyStopped: CodeableConcept | undefined): this {
    return this.setFieldValue('whyStopped', whyStopped);
  }

  hasWhyStopped(): boolean {
    return this.hasFieldValue('whyStopped');
  }

  /** Target or actual group of participants enrolled in study (0..1) Created when absent. */
  getRecruitment(): ResearchStudyRecruitment {
    if (this.recruitment === undefined) {
      this.recruitment = new ResearchStudyRecruitment();
    }
    return this.recruitment;
  }

  setRecruitment(recruitment: ResearchStudyRecruitment | undefined): this {
    return this.setFieldValue('recruitment', recruitment);
  }

  hasRecruitment(): boolean {
    return this.hasFieldValue('recruitment');
  }

  /** Defined path through the study for a subject (0..*) Never undefined; an empty list is created when absent. */
  getComparisonGroup(): ResearchStudyComparisonGroup[] {
    if (this.comparisonGroup === undefined) {
      this.comparisonGroup = [];
    }
    return this.comparisonGroup;
  }

  setComparisonGroup(comparisonGroup: ResearchStudyComparisonGroup[] | undefined): this {
    return this.setFieldValue('comparisonGroup', comparisonGroup);
  }

  hasComparisonGroup(): boolean {
    return this.hasFieldValue('comparisonGroup');
  }

  /** Appends a new, empty ResearchStudyComparisonGroup to `comparisonGroup` and returns it so it can be filled in. */
  addComparisonGroup(): ResearchStudyComparisonGroup;
  /** Appends the given ResearchStudyComparisonGroup to `comparisonGroup` and returns this object for chaining. */
  addComparisonGroup(researchStudyComparisonGroup: ResearchStudyComparisonGroup): this;
  addComparisonGroup(
    researchStudyComparisonGroup?: ResearchStudyComparisonGroup
  ): ResearchStudyComparisonGroup | this {
    if (researchStudyComparisonGroup !== undefined) {
      return this.addFieldValue('comparisonGroup', researchStudyComparisonGroup);
    }
    const createdResearchStudyComparisonGroup = new ResearchStudyComparisonGroup();
    this.addFieldValue('comparisonGroup', createdResearchStudyComparisonGroup);
    return createdResearchStudyComparisonGroup;
  }

  /** The first ResearchStudyComparisonGroup of `comparisonGroup`. One is added when the list is empty. */
  getComparisonGroupFirstRep(): ResearchStudyComparisonGroup {
    const firstResearchStudyComparisonGroup = this.getComparisonGroup()[0];
    return firstResearchStudyComparisonGroup === undefined
      ? this.addComparisonGroup()
      : firstResearchStudyComparisonGroup;
  }

  /** A goal for the study (0..*) Never undefined; an empty list is created when absent. */
  getObjective(): ResearchStudyObjective[] {
    if (this.objective === undefined) {
      this.objective = [];
    }
    return this.objective;
  }

  setObjective(objective: ResearchStudyObjective[] | undefined): this {
    return this.setFieldValue('objective', objective);
  }

  hasObjective(): boolean {
    return this.hasFieldValue('objective');
  }

  /** Appends a new, empty ResearchStudyObjective to `objective` and returns it so it can be filled in. */
  addObjective(): ResearchStudyObjective;
  /** Appends the given ResearchStudyObjective to `objective` and returns this object for chaining. */
  addObjective(researchStudyObjective: ResearchStudyObjective): this;
  addObjective(researchStudyObjective?: ResearchStudyObjective): ResearchStudyObjective | this {
    if (researchStudyObjective !== undefined) {
      return this.addFieldValue('objective', researchStudyObjective);
    }
    const createdResearchStudyObjective = new ResearchStudyObjective();
    this.addFieldValue('objective', createdResearchStudyObjective);
    return createdResearchStudyObjective;
  }

  /** The first ResearchStudyObjective of `objective`. One is added when the list is empty. */
  getObjectiveFirstRep(): ResearchStudyObjective {
    const firstResearchStudyObjective = this.getObjective()[0];
    return firstResearchStudyObjective === undefined
      ? this.addObjective()
      : firstResearchStudyObjective;
  }

  /** A variable measured during the study (0..*) Never undefined; an empty list is created when absent. */
  getOutcomeMeasure(): ResearchStudyOutcomeMeasure[] {
    if (this.outcomeMeasure === undefined) {
      this.outcomeMeasure = [];
    }
    return this.outcomeMeasure;
  }

  setOutcomeMeasure(outcomeMeasure: ResearchStudyOutcomeMeasure[] | undefined): this {
    return this.setFieldValue('outcomeMeasure', outcomeMeasure);
  }

  hasOutcomeMeasure(): boolean {
    return this.hasFieldValue('outcomeMeasure');
  }

  /** Appends a new, empty ResearchStudyOutcomeMeasure to `outcomeMeasure` and returns it so it can be filled in. */
  addOutcomeMeasure(): ResearchStudyOutcomeMeasure;
  /** Appends the given ResearchStudyOutcomeMeasure to `outcomeMeasure` and returns this object for chaining. */
  addOutcomeMeasure(researchStudyOutcomeMeasure: ResearchStudyOutcomeMeasure): this;
  addOutcomeMeasure(
    researchStudyOutcomeMeasure?: ResearchStudyOutcomeMeasure
  ): ResearchStudyOutcomeMeasure | this {
    if (researchStudyOutcomeMeasure !== undefined) {
      return this.addFieldValue('outcomeMeasure', researchStudyOutcomeMeasure);
    }
    const createdResearchStudyOutcomeMeasure = new ResearchStudyOutcomeMeasure();
    this.addFieldValue('outcomeMeasure', createdResearchStudyOutcomeMeasure);
    return createdResearchStudyOutcomeMeasure;
  }

  /** The first ResearchStudyOutcomeMeasure of `outcomeMeasure`. One is added when the list is empty. */
  getOutcomeMeasureFirstRep(): ResearchStudyOutcomeMeasure {
    const firstResearchStudyOutcomeMeasure = this.getOutcomeMeasure()[0];
    return firstResearchStudyOutcomeMeasure === undefined
      ? this.addOutcomeMeasure()
      : firstResearchStudyOutcomeMeasure;
  }

  /** Link to results generated during the study (0..*) Never undefined; an empty list is created when absent. */
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
}

modelTypeRegistry.register('ResearchStudy', ResearchStudy, true);

/** True when the value is a ResearchStudy model instance. */
export function isResearchStudy(candidate: unknown): candidate is ResearchStudy {
  return candidate instanceof ResearchStudy;
}

/**
 * Additional names for the study
 */
export class ResearchStudyLabel extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'value',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'value', typeCode: 'string' }],
    },
  ];

  /** primary | official | scientific | plain-language | subtitle | short-title | acronym | earlier-title | language | auto-translated | human-use | machine-use | duplicate-uid (0..1) */
  type?: CodeableConcept;

  /** The name (0..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;

  override fhirType(): string {
    return 'ResearchStudy.label';
  }

  /** FHIR JSON for this ResearchStudyLabel, typed as the plain `ResearchStudyLabel` data type. */
  override toJSON(): plainTypes.ResearchStudyLabel {
    return this.serialize() as plainTypes.ResearchStudyLabel;
  }

  /** primary | official | scientific | plain-language | subtitle | short-title | acronym | earlier-title | language | auto-translated | human-use | machine-use | duplicate-uid (0..1) Created when absent. */
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

  /** The name (0..1) */
  getValue(): string | undefined {
    return this.value;
  }

  /** Sets `value`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setValue(value: string | undefined): this {
    return this.setFieldValue('value', value);
  }

  hasValue(): boolean {
    return this.hasFieldValue('value');
  }

  /** The element carrying the id and extensions of `value`. Created when absent. */
  getValueElement(): Element {
    if (this._value === undefined) {
      this._value = new Element();
    }
    return this._value;
  }

  setValueElement(valueElement: Element | undefined): this {
    this._value = valueElement;
    return this;
  }
}

modelTypeRegistry.register('ResearchStudyLabel', ResearchStudyLabel, false);

/**
 * Sponsors, collaborators, and other parties
 */
export class ResearchStudyAssociatedParty extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'role',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'role', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
    {
      elementName: 'classifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'classifier', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'party',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'party',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Practitioner', 'PractitionerRole'],
        },
      ],
    },
  ];

  /** Name of associated party (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** sponsor | lead-sponsor | sponsor-investigator | primary-investigator | collaborator | funding-source | general-contact | recruitment-contact | sub-investigator | study-director | study-chair (1..1) */
  role?: CodeableConcept;

  /** When active in the role (0..*) */
  period?: Period[];

  /** nih | fda | government | nonprofit | academic | industry (0..*) */
  classifier?: CodeableConcept[];

  /** Individual or organization associated with study (use practitionerRole to specify their organisation) (0..1) */
  party?: Reference;

  override fhirType(): string {
    return 'ResearchStudy.associatedParty';
  }

  /** FHIR JSON for this ResearchStudyAssociatedParty, typed as the plain `ResearchStudyAssociatedParty` data type. */
  override toJSON(): plainTypes.ResearchStudyAssociatedParty {
    return this.serialize() as plainTypes.ResearchStudyAssociatedParty;
  }

  /** Name of associated party (0..1) */
  getName(): string | undefined {
    return this.name;
  }

  /** Sets `name`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setName(name: string | undefined): this {
    return this.setFieldValue('name', name);
  }

  hasName(): boolean {
    return this.hasFieldValue('name');
  }

  /** The element carrying the id and extensions of `name`. Created when absent. */
  getNameElement(): Element {
    if (this._name === undefined) {
      this._name = new Element();
    }
    return this._name;
  }

  setNameElement(nameElement: Element | undefined): this {
    this._name = nameElement;
    return this;
  }

  /** sponsor | lead-sponsor | sponsor-investigator | primary-investigator | collaborator | funding-source | general-contact | recruitment-contact | sub-investigator | study-director | study-chair (1..1) Created when absent. */
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

  /** When active in the role (0..*) Never undefined; an empty list is created when absent. */
  getPeriod(): Period[] {
    if (this.period === undefined) {
      this.period = [];
    }
    return this.period;
  }

  setPeriod(period: Period[] | undefined): this {
    return this.setFieldValue('period', period);
  }

  hasPeriod(): boolean {
    return this.hasFieldValue('period');
  }

  /** Appends a new, empty Period to `period` and returns it so it can be filled in. */
  addPeriod(): Period;
  /** Appends the given Period to `period` and returns this object for chaining. */
  addPeriod(period: Period): this;
  addPeriod(period?: Period): Period | this {
    if (period !== undefined) {
      return this.addFieldValue('period', period);
    }
    const createdPeriod = new Period();
    this.addFieldValue('period', createdPeriod);
    return createdPeriod;
  }

  /** The first Period of `period`. One is added when the list is empty. */
  getPeriodFirstRep(): Period {
    const firstPeriod = this.getPeriod()[0];
    return firstPeriod === undefined ? this.addPeriod() : firstPeriod;
  }

  /** nih | fda | government | nonprofit | academic | industry (0..*) Never undefined; an empty list is created when absent. */
  getClassifier(): CodeableConcept[] {
    if (this.classifier === undefined) {
      this.classifier = [];
    }
    return this.classifier;
  }

  setClassifier(classifier: CodeableConcept[] | undefined): this {
    return this.setFieldValue('classifier', classifier);
  }

  hasClassifier(): boolean {
    return this.hasFieldValue('classifier');
  }

  /** Appends a new, empty CodeableConcept to `classifier` and returns it so it can be filled in. */
  addClassifier(): CodeableConcept;
  /** Appends the given CodeableConcept to `classifier` and returns this object for chaining. */
  addClassifier(codeableConcept: CodeableConcept): this;
  addClassifier(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('classifier', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('classifier', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `classifier`. One is added when the list is empty. */
  getClassifierFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getClassifier()[0];
    return firstCodeableConcept === undefined ? this.addClassifier() : firstCodeableConcept;
  }

  /** Individual or organization associated with study (use practitionerRole to specify their organisation) (0..1) Created when absent. */
  getParty(): Reference {
    if (this.party === undefined) {
      this.party = new Reference();
    }
    return this.party;
  }

  setParty(party: Reference | undefined): this {
    return this.setFieldValue('party', party);
  }

  hasParty(): boolean {
    return this.hasFieldValue('party');
  }
}

modelTypeRegistry.register('ResearchStudyAssociatedParty', ResearchStudyAssociatedParty, false);

/**
 * Status of study with time for that status
 */
export class ResearchStudyProgressStatus extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'state',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'state', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'actual',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'actual', typeCode: 'boolean' }],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
  ];

  /** Label for status or state (e.g. recruitment status) (1..1) */
  state?: CodeableConcept;

  /** Actual if true else anticipated (0..1) */
  actual?: boolean;
  /** Id and extensions of the primitive `actual`. */
  _actual?: Element;

  /** Date range (0..1) */
  period?: Period;

  override fhirType(): string {
    return 'ResearchStudy.progressStatus';
  }

  /** FHIR JSON for this ResearchStudyProgressStatus, typed as the plain `ResearchStudyProgressStatus` data type. */
  override toJSON(): plainTypes.ResearchStudyProgressStatus {
    return this.serialize() as plainTypes.ResearchStudyProgressStatus;
  }

  /** Label for status or state (e.g. recruitment status) (1..1) Created when absent. */
  getState(): CodeableConcept {
    if (this.state === undefined) {
      this.state = new CodeableConcept();
    }
    return this.state;
  }

  setState(state: CodeableConcept | undefined): this {
    return this.setFieldValue('state', state);
  }

  hasState(): boolean {
    return this.hasFieldValue('state');
  }

  /** Actual if true else anticipated (0..1) */
  getActual(): boolean | undefined {
    return this.actual;
  }

  /** Sets `actual`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setActual(actual: boolean | undefined): this {
    return this.setFieldValue('actual', actual);
  }

  hasActual(): boolean {
    return this.hasFieldValue('actual');
  }

  /** The element carrying the id and extensions of `actual`. Created when absent. */
  getActualElement(): Element {
    if (this._actual === undefined) {
      this._actual = new Element();
    }
    return this._actual;
  }

  setActualElement(actualElement: Element | undefined): this {
    this._actual = actualElement;
    return this;
  }

  /** Date range (0..1) Created when absent. */
  getPeriod(): Period {
    if (this.period === undefined) {
      this.period = new Period();
    }
    return this.period;
  }

  setPeriod(period: Period | undefined): this {
    return this.setFieldValue('period', period);
  }

  hasPeriod(): boolean {
    return this.hasFieldValue('period');
  }
}

modelTypeRegistry.register('ResearchStudyProgressStatus', ResearchStudyProgressStatus, false);

/**
 * Target or actual group of participants enrolled in study
 */
export class ResearchStudyRecruitment extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'targetNumber',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'targetNumber', typeCode: 'unsignedInt' }],
    },
    {
      elementName: 'actualNumber',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'actualNumber', typeCode: 'unsignedInt' }],
    },
    {
      elementName: 'eligibility',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'eligibility',
          typeCode: 'Reference',
          targetResourceTypes: ['EvidenceVariable', 'Group'],
        },
      ],
    },
    {
      elementName: 'actualGroup',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'actualGroup', typeCode: 'Reference', targetResourceTypes: ['Group'] }],
    },
  ];

  /** Estimated total number of participants to be enrolled (0..1) */
  targetNumber?: number;
  /** Id and extensions of the primitive `targetNumber`. */
  _targetNumber?: Element;

  /** Actual total number of participants enrolled in study (0..1) */
  actualNumber?: number;
  /** Id and extensions of the primitive `actualNumber`. */
  _actualNumber?: Element;

  /** Inclusion and exclusion criteria (0..1) */
  eligibility?: Reference;

  /** Group of participants who were enrolled in study (0..1) */
  actualGroup?: Reference;

  override fhirType(): string {
    return 'ResearchStudy.recruitment';
  }

  /** FHIR JSON for this ResearchStudyRecruitment, typed as the plain `ResearchStudyRecruitment` data type. */
  override toJSON(): plainTypes.ResearchStudyRecruitment {
    return this.serialize() as plainTypes.ResearchStudyRecruitment;
  }

  /** Estimated total number of participants to be enrolled (0..1) */
  getTargetNumber(): number | undefined {
    return this.targetNumber;
  }

  /** Sets `targetNumber`. Throws a FhirModelError when the value is not a valid FHIR unsignedInt. */
  setTargetNumber(targetNumber: number | undefined): this {
    return this.setFieldValue('targetNumber', targetNumber);
  }

  hasTargetNumber(): boolean {
    return this.hasFieldValue('targetNumber');
  }

  /** The element carrying the id and extensions of `targetNumber`. Created when absent. */
  getTargetNumberElement(): Element {
    if (this._targetNumber === undefined) {
      this._targetNumber = new Element();
    }
    return this._targetNumber;
  }

  setTargetNumberElement(targetNumberElement: Element | undefined): this {
    this._targetNumber = targetNumberElement;
    return this;
  }

  /** Actual total number of participants enrolled in study (0..1) */
  getActualNumber(): number | undefined {
    return this.actualNumber;
  }

  /** Sets `actualNumber`. Throws a FhirModelError when the value is not a valid FHIR unsignedInt. */
  setActualNumber(actualNumber: number | undefined): this {
    return this.setFieldValue('actualNumber', actualNumber);
  }

  hasActualNumber(): boolean {
    return this.hasFieldValue('actualNumber');
  }

  /** The element carrying the id and extensions of `actualNumber`. Created when absent. */
  getActualNumberElement(): Element {
    if (this._actualNumber === undefined) {
      this._actualNumber = new Element();
    }
    return this._actualNumber;
  }

  setActualNumberElement(actualNumberElement: Element | undefined): this {
    this._actualNumber = actualNumberElement;
    return this;
  }

  /** Inclusion and exclusion criteria (0..1) Created when absent. */
  getEligibility(): Reference {
    if (this.eligibility === undefined) {
      this.eligibility = new Reference();
    }
    return this.eligibility;
  }

  setEligibility(eligibility: Reference | undefined): this {
    return this.setFieldValue('eligibility', eligibility);
  }

  hasEligibility(): boolean {
    return this.hasFieldValue('eligibility');
  }

  /** Group of participants who were enrolled in study (0..1) Created when absent. */
  getActualGroup(): Reference {
    if (this.actualGroup === undefined) {
      this.actualGroup = new Reference();
    }
    return this.actualGroup;
  }

  setActualGroup(actualGroup: Reference | undefined): this {
    return this.setFieldValue('actualGroup', actualGroup);
  }

  hasActualGroup(): boolean {
    return this.hasFieldValue('actualGroup');
  }
}

modelTypeRegistry.register('ResearchStudyRecruitment', ResearchStudyRecruitment, false);

/**
 * Defined path through the study for a subject
 */
export class ResearchStudyComparisonGroup extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'linkId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'linkId', typeCode: 'id' }],
    },
    {
      elementName: 'name',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'intendedExposure',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'intendedExposure',
          typeCode: 'Reference',
          targetResourceTypes: ['EvidenceVariable'],
        },
      ],
    },
    {
      elementName: 'observedGroup',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'observedGroup', typeCode: 'Reference', targetResourceTypes: ['Group'] }],
    },
  ];

  /** Allows the comparisonGroup for the study and the comparisonGroup for the subject to be linked easily (0..1) */
  linkId?: string;
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: Element;

  /** Label for study comparisonGroup (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Categorization of study comparisonGroup (0..1) */
  type?: CodeableConcept;

  /** Short explanation of study path (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Interventions or exposures in this comparisonGroup or cohort (0..*) */
  intendedExposure?: Reference[];

  /** Group of participants who were enrolled in study comparisonGroup (0..1) */
  observedGroup?: Reference;

  override fhirType(): string {
    return 'ResearchStudy.comparisonGroup';
  }

  /** FHIR JSON for this ResearchStudyComparisonGroup, typed as the plain `ResearchStudyComparisonGroup` data type. */
  override toJSON(): plainTypes.ResearchStudyComparisonGroup {
    return this.serialize() as plainTypes.ResearchStudyComparisonGroup;
  }

  /** Allows the comparisonGroup for the study and the comparisonGroup for the subject to be linked easily (0..1) */
  getLinkId(): string | undefined {
    return this.linkId;
  }

  /** Sets `linkId`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setLinkId(linkId: string | undefined): this {
    return this.setFieldValue('linkId', linkId);
  }

  hasLinkId(): boolean {
    return this.hasFieldValue('linkId');
  }

  /** The element carrying the id and extensions of `linkId`. Created when absent. */
  getLinkIdElement(): Element {
    if (this._linkId === undefined) {
      this._linkId = new Element();
    }
    return this._linkId;
  }

  setLinkIdElement(linkIdElement: Element | undefined): this {
    this._linkId = linkIdElement;
    return this;
  }

  /** Label for study comparisonGroup (1..1) */
  getName(): string | undefined {
    return this.name;
  }

  /** Sets `name`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setName(name: string | undefined): this {
    return this.setFieldValue('name', name);
  }

  hasName(): boolean {
    return this.hasFieldValue('name');
  }

  /** The element carrying the id and extensions of `name`. Created when absent. */
  getNameElement(): Element {
    if (this._name === undefined) {
      this._name = new Element();
    }
    return this._name;
  }

  setNameElement(nameElement: Element | undefined): this {
    this._name = nameElement;
    return this;
  }

  /** Categorization of study comparisonGroup (0..1) Created when absent. */
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

  /** Short explanation of study path (0..1) */
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

  /** Interventions or exposures in this comparisonGroup or cohort (0..*) Never undefined; an empty list is created when absent. */
  getIntendedExposure(): Reference[] {
    if (this.intendedExposure === undefined) {
      this.intendedExposure = [];
    }
    return this.intendedExposure;
  }

  setIntendedExposure(intendedExposure: Reference[] | undefined): this {
    return this.setFieldValue('intendedExposure', intendedExposure);
  }

  hasIntendedExposure(): boolean {
    return this.hasFieldValue('intendedExposure');
  }

  /** Appends a new, empty Reference to `intendedExposure` and returns it so it can be filled in. */
  addIntendedExposure(): Reference;
  /** Appends the given Reference to `intendedExposure` and returns this object for chaining. */
  addIntendedExposure(reference: Reference): this;
  addIntendedExposure(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('intendedExposure', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('intendedExposure', createdReference);
    return createdReference;
  }

  /** The first Reference of `intendedExposure`. One is added when the list is empty. */
  getIntendedExposureFirstRep(): Reference {
    const firstReference = this.getIntendedExposure()[0];
    return firstReference === undefined ? this.addIntendedExposure() : firstReference;
  }

  /** Group of participants who were enrolled in study comparisonGroup (0..1) Created when absent. */
  getObservedGroup(): Reference {
    if (this.observedGroup === undefined) {
      this.observedGroup = new Reference();
    }
    return this.observedGroup;
  }

  setObservedGroup(observedGroup: Reference | undefined): this {
    return this.setFieldValue('observedGroup', observedGroup);
  }

  hasObservedGroup(): boolean {
    return this.hasFieldValue('observedGroup');
  }
}

modelTypeRegistry.register('ResearchStudyComparisonGroup', ResearchStudyComparisonGroup, false);

/**
 * A goal for the study
 */
export class ResearchStudyObjective extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
  ];

  /** Label for the objective (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** primary | secondary | exploratory (0..1) */
  type?: CodeableConcept;

  /** Description of the objective (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  override fhirType(): string {
    return 'ResearchStudy.objective';
  }

  /** FHIR JSON for this ResearchStudyObjective, typed as the plain `ResearchStudyObjective` data type. */
  override toJSON(): plainTypes.ResearchStudyObjective {
    return this.serialize() as plainTypes.ResearchStudyObjective;
  }

  /** Label for the objective (0..1) */
  getName(): string | undefined {
    return this.name;
  }

  /** Sets `name`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setName(name: string | undefined): this {
    return this.setFieldValue('name', name);
  }

  hasName(): boolean {
    return this.hasFieldValue('name');
  }

  /** The element carrying the id and extensions of `name`. Created when absent. */
  getNameElement(): Element {
    if (this._name === undefined) {
      this._name = new Element();
    }
    return this._name;
  }

  setNameElement(nameElement: Element | undefined): this {
    this._name = nameElement;
    return this;
  }

  /** primary | secondary | exploratory (0..1) Created when absent. */
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

  /** Description of the objective (0..1) */
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
}

modelTypeRegistry.register('ResearchStudyObjective', ResearchStudyObjective, false);

/**
 * A variable measured during the study
 */
export class ResearchStudyOutcomeMeasure extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'reference',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'reference', typeCode: 'Reference', targetResourceTypes: ['EvidenceVariable'] },
      ],
    },
  ];

  /** Label for the outcome (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** primary | secondary | exploratory (0..*) */
  type?: CodeableConcept[];

  /** Description of the outcome (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Structured outcome definition (0..1) */
  reference?: Reference;

  override fhirType(): string {
    return 'ResearchStudy.outcomeMeasure';
  }

  /** FHIR JSON for this ResearchStudyOutcomeMeasure, typed as the plain `ResearchStudyOutcomeMeasure` data type. */
  override toJSON(): plainTypes.ResearchStudyOutcomeMeasure {
    return this.serialize() as plainTypes.ResearchStudyOutcomeMeasure;
  }

  /** Label for the outcome (0..1) */
  getName(): string | undefined {
    return this.name;
  }

  /** Sets `name`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setName(name: string | undefined): this {
    return this.setFieldValue('name', name);
  }

  hasName(): boolean {
    return this.hasFieldValue('name');
  }

  /** The element carrying the id and extensions of `name`. Created when absent. */
  getNameElement(): Element {
    if (this._name === undefined) {
      this._name = new Element();
    }
    return this._name;
  }

  setNameElement(nameElement: Element | undefined): this {
    this._name = nameElement;
    return this;
  }

  /** primary | secondary | exploratory (0..*) Never undefined; an empty list is created when absent. */
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

  /** Description of the outcome (0..1) */
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

  /** Structured outcome definition (0..1) Created when absent. */
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

modelTypeRegistry.register('ResearchStudyOutcomeMeasure', ResearchStudyOutcomeMeasure, false);
