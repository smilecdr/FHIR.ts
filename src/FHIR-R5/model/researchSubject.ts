/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';

/**
 * A ResearchSubject is a participant or object which is the recipient of investigative activities in a research study.
 */
export class ResearchSubject extends DomainResource {
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
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.PublicationStatus },
      ],
    },
    {
      elementName: 'progress',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'progress', typeCode: 'ResearchSubjectProgress' }],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
    {
      elementName: 'study',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'study', typeCode: 'Reference', targetResourceTypes: ['ResearchStudy'] }],
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
            'Device',
            'Group',
            'Medication',
            'Patient',
            'Specimen',
            'Substance',
          ],
        },
      ],
    },
    {
      elementName: 'assignedComparisonGroup',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'assignedComparisonGroup', typeCode: 'id' }],
    },
    {
      elementName: 'actualComparisonGroup',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'actualComparisonGroup', typeCode: 'id' }],
    },
    {
      elementName: 'consent',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'consent', typeCode: 'Reference', targetResourceTypes: ['Consent'] }],
    },
  ];

  readonly resourceType = 'ResearchSubject';

  /** Business Identifier for research subject in a study (0..*) */
  identifier?: Identifier[];

  /** draft | active | retired | unknown (1..1) */
  status?: valueSetCodes.PublicationStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Subject status (0..*) */
  progress?: ResearchSubjectProgress[];

  /** Start and end of participation (0..1) */
  period?: Period;

  /** Study subject is part of (1..1) */
  study?: Reference;

  /** Who or what is part of study (1..1) */
  subject?: Reference;

  /** What path should be followed (0..1) */
  assignedComparisonGroup?: string;
  /** Id and extensions of the primitive `assignedComparisonGroup`. */
  _assignedComparisonGroup?: Element;

  /** What path was followed (0..1) */
  actualComparisonGroup?: string;
  /** Id and extensions of the primitive `actualComparisonGroup`. */
  _actualComparisonGroup?: Element;

  /** Agreement to participate in study (0..*) */
  consent?: Reference[];

  override fhirType(): string {
    return 'ResearchSubject';
  }

  /** FHIR JSON for this ResearchSubject, typed as the plain `ResearchSubject` data type. */
  override toJSON(): plainTypes.ResearchSubject {
    return this.serialize() as plainTypes.ResearchSubject;
  }

  /** Business Identifier for research subject in a study (0..*) Never undefined; an empty list is created when absent. */
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

  /** Subject status (0..*) Never undefined; an empty list is created when absent. */
  getProgress(): ResearchSubjectProgress[] {
    if (this.progress === undefined) {
      this.progress = [];
    }
    return this.progress;
  }

  setProgress(progress: ResearchSubjectProgress[] | undefined): this {
    return this.setFieldValue('progress', progress);
  }

  hasProgress(): boolean {
    return this.hasFieldValue('progress');
  }

  /** Appends a new, empty ResearchSubjectProgress to `progress` and returns it so it can be filled in. */
  addProgress(): ResearchSubjectProgress;
  /** Appends the given ResearchSubjectProgress to `progress` and returns this object for chaining. */
  addProgress(researchSubjectProgress: ResearchSubjectProgress): this;
  addProgress(researchSubjectProgress?: ResearchSubjectProgress): ResearchSubjectProgress | this {
    if (researchSubjectProgress !== undefined) {
      return this.addFieldValue('progress', researchSubjectProgress);
    }
    const createdResearchSubjectProgress = new ResearchSubjectProgress();
    this.addFieldValue('progress', createdResearchSubjectProgress);
    return createdResearchSubjectProgress;
  }

  /** The first ResearchSubjectProgress of `progress`. One is added when the list is empty. */
  getProgressFirstRep(): ResearchSubjectProgress {
    const firstResearchSubjectProgress = this.getProgress()[0];
    return firstResearchSubjectProgress === undefined
      ? this.addProgress()
      : firstResearchSubjectProgress;
  }

  /** Start and end of participation (0..1) Created when absent. */
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

  /** Study subject is part of (1..1) Created when absent. */
  getStudy(): Reference {
    if (this.study === undefined) {
      this.study = new Reference();
    }
    return this.study;
  }

  setStudy(study: Reference | undefined): this {
    return this.setFieldValue('study', study);
  }

  hasStudy(): boolean {
    return this.hasFieldValue('study');
  }

  /** Who or what is part of study (1..1) Created when absent. */
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

  /** What path should be followed (0..1) */
  getAssignedComparisonGroup(): string | undefined {
    return this.assignedComparisonGroup;
  }

  /** Sets `assignedComparisonGroup`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setAssignedComparisonGroup(assignedComparisonGroup: string | undefined): this {
    return this.setFieldValue('assignedComparisonGroup', assignedComparisonGroup);
  }

  hasAssignedComparisonGroup(): boolean {
    return this.hasFieldValue('assignedComparisonGroup');
  }

  /** The element carrying the id and extensions of `assignedComparisonGroup`. Created when absent. */
  getAssignedComparisonGroupElement(): Element {
    if (this._assignedComparisonGroup === undefined) {
      this._assignedComparisonGroup = new Element();
    }
    return this._assignedComparisonGroup;
  }

  setAssignedComparisonGroupElement(assignedComparisonGroupElement: Element | undefined): this {
    this._assignedComparisonGroup = assignedComparisonGroupElement;
    return this;
  }

  /** What path was followed (0..1) */
  getActualComparisonGroup(): string | undefined {
    return this.actualComparisonGroup;
  }

  /** Sets `actualComparisonGroup`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setActualComparisonGroup(actualComparisonGroup: string | undefined): this {
    return this.setFieldValue('actualComparisonGroup', actualComparisonGroup);
  }

  hasActualComparisonGroup(): boolean {
    return this.hasFieldValue('actualComparisonGroup');
  }

  /** The element carrying the id and extensions of `actualComparisonGroup`. Created when absent. */
  getActualComparisonGroupElement(): Element {
    if (this._actualComparisonGroup === undefined) {
      this._actualComparisonGroup = new Element();
    }
    return this._actualComparisonGroup;
  }

  setActualComparisonGroupElement(actualComparisonGroupElement: Element | undefined): this {
    this._actualComparisonGroup = actualComparisonGroupElement;
    return this;
  }

  /** Agreement to participate in study (0..*) Never undefined; an empty list is created when absent. */
  getConsent(): Reference[] {
    if (this.consent === undefined) {
      this.consent = [];
    }
    return this.consent;
  }

  setConsent(consent: Reference[] | undefined): this {
    return this.setFieldValue('consent', consent);
  }

  hasConsent(): boolean {
    return this.hasFieldValue('consent');
  }

  /** Appends a new, empty Reference to `consent` and returns it so it can be filled in. */
  addConsent(): Reference;
  /** Appends the given Reference to `consent` and returns this object for chaining. */
  addConsent(reference: Reference): this;
  addConsent(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('consent', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('consent', createdReference);
    return createdReference;
  }

  /** The first Reference of `consent`. One is added when the list is empty. */
  getConsentFirstRep(): Reference {
    const firstReference = this.getConsent()[0];
    return firstReference === undefined ? this.addConsent() : firstReference;
  }
}

modelTypeRegistry.register('ResearchSubject', ResearchSubject, true);

/** True when the value is a ResearchSubject model instance. */
export function isResearchSubject(candidate: unknown): candidate is ResearchSubject {
  return candidate instanceof ResearchSubject;
}

/**
 * Subject status
 */
export class ResearchSubjectProgress extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'subjectState',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'subjectState', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'milestone',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'milestone', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'reason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reason', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'startDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'startDate', typeCode: 'dateTime' }],
    },
    {
      elementName: 'endDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'endDate', typeCode: 'dateTime' }],
    },
  ];

  /** state | milestone (0..1) */
  type?: CodeableConcept;

  /** candidate | eligible | follow-up | ineligible | not-registered | off-study | on-study | on-study-intervention | on-study-observation | pending-on-study | potential-candidate | screening | withdrawn (0..1) */
  subjectState?: CodeableConcept;

  /** SignedUp | Screened | Randomized (0..1) */
  milestone?: CodeableConcept;

  /** State change reason (0..1) */
  reason?: CodeableConcept;

  /** State change date (0..1) */
  startDate?: string;
  /** Id and extensions of the primitive `startDate`. */
  _startDate?: Element;

  /** State change date (0..1) */
  endDate?: string;
  /** Id and extensions of the primitive `endDate`. */
  _endDate?: Element;

  override fhirType(): string {
    return 'ResearchSubject.progress';
  }

  /** FHIR JSON for this ResearchSubjectProgress, typed as the plain `ResearchSubjectProgress` data type. */
  override toJSON(): plainTypes.ResearchSubjectProgress {
    return this.serialize() as plainTypes.ResearchSubjectProgress;
  }

  /** state | milestone (0..1) Created when absent. */
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

  /** candidate | eligible | follow-up | ineligible | not-registered | off-study | on-study | on-study-intervention | on-study-observation | pending-on-study | potential-candidate | screening | withdrawn (0..1) Created when absent. */
  getSubjectState(): CodeableConcept {
    if (this.subjectState === undefined) {
      this.subjectState = new CodeableConcept();
    }
    return this.subjectState;
  }

  setSubjectState(subjectState: CodeableConcept | undefined): this {
    return this.setFieldValue('subjectState', subjectState);
  }

  hasSubjectState(): boolean {
    return this.hasFieldValue('subjectState');
  }

  /** SignedUp | Screened | Randomized (0..1) Created when absent. */
  getMilestone(): CodeableConcept {
    if (this.milestone === undefined) {
      this.milestone = new CodeableConcept();
    }
    return this.milestone;
  }

  setMilestone(milestone: CodeableConcept | undefined): this {
    return this.setFieldValue('milestone', milestone);
  }

  hasMilestone(): boolean {
    return this.hasFieldValue('milestone');
  }

  /** State change reason (0..1) Created when absent. */
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

  /** State change date (0..1) */
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

  /** State change date (0..1) */
  getEndDate(): string | undefined {
    return this.endDate;
  }

  /** Sets `endDate`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setEndDate(endDate: string | undefined): this {
    return this.setFieldValue('endDate', endDate);
  }

  hasEndDate(): boolean {
    return this.hasFieldValue('endDate');
  }

  /** The element carrying the id and extensions of `endDate`. Created when absent. */
  getEndDateElement(): Element {
    if (this._endDate === undefined) {
      this._endDate = new Element();
    }
    return this._endDate;
  }

  setEndDateElement(endDateElement: Element | undefined): this {
    this._endDate = endDateElement;
    return this;
  }
}

modelTypeRegistry.register('ResearchSubjectProgress', ResearchSubjectProgress, false);
