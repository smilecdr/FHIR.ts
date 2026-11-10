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
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';
import { Timing } from './timing';

/**
 * An event (i.e. any change to current patient status) that may be related to unintended effects on a patient or research participant. The unintended effects may require additional monitoring, treatment, hospitalization, or may result in death. The AdverseEvent resource also extends to potential or avoided events that could have had such effects. There are two major domains where the AdverseEvent resource is expected to be used. One is in clinical care reported adverse events and the other is in reporting adverse events in clinical research trial management. Adverse events can be reported by healthcare providers, patients, caregivers or by medical products manufacturers. Given the differences between these two concepts, we recommend consulting the domain specific implementation guides when implementing the AdverseEvent Resource. The implementation guides include specific extensions, value sets and constraints.
 */
export class AdverseEvent extends DomainResource {
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
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.AdverseEventStatus },
      ],
    },
    {
      elementName: 'actuality',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'actuality',
          typeCode: 'code',
          allowedCodes: valueSetCodes.AdverseEventActuality,
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
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
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
            'Group',
            'Patient',
            'Practitioner',
            'RelatedPerson',
            'ResearchSubject',
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
      elementName: 'occurrence',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'occurrenceDateTime', typeCode: 'dateTime' },
        { jsonKey: 'occurrencePeriod', typeCode: 'Period' },
        { jsonKey: 'occurrenceTiming', typeCode: 'Timing' },
      ],
    },
    {
      elementName: 'detected',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'detected', typeCode: 'dateTime' }],
    },
    {
      elementName: 'recordedDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'recordedDate', typeCode: 'dateTime' }],
    },
    {
      elementName: 'resultingEffect',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'resultingEffect',
          typeCode: 'Reference',
          targetResourceTypes: ['Condition', 'Observation'],
        },
      ],
    },
    {
      elementName: 'location',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'location', typeCode: 'Reference', targetResourceTypes: ['Location'] }],
    },
    {
      elementName: 'seriousness',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'seriousness', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'outcome',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'outcome', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'recorder',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'recorder',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Patient',
            'Practitioner',
            'PractitionerRole',
            'RelatedPerson',
            'ResearchSubject',
          ],
        },
      ],
    },
    {
      elementName: 'participant',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'participant', typeCode: 'AdverseEventParticipant' }],
    },
    {
      elementName: 'study',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'study', typeCode: 'Reference', targetResourceTypes: ['ResearchStudy'] }],
    },
    {
      elementName: 'expectedInResearchStudy',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'expectedInResearchStudy', typeCode: 'boolean' }],
    },
    {
      elementName: 'suspectEntity',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'suspectEntity', typeCode: 'AdverseEventSuspectEntity' }],
    },
    {
      elementName: 'contributingFactor',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'contributingFactor', typeCode: 'AdverseEventContributingFactor' }],
    },
    {
      elementName: 'preventiveAction',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'preventiveAction', typeCode: 'AdverseEventPreventiveAction' }],
    },
    {
      elementName: 'mitigatingAction',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'mitigatingAction', typeCode: 'AdverseEventMitigatingAction' }],
    },
    {
      elementName: 'supportingInfo',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'supportingInfo', typeCode: 'AdverseEventSupportingInfo' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
  ];

  readonly resourceType = 'AdverseEvent';

  /** Business identifier for the event (0..*) */
  identifier?: Identifier[];

  /** in-progress | completed | entered-in-error | unknown (1..1) */
  status?: valueSetCodes.AdverseEventStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** actual | potential (1..1) */
  actuality?: valueSetCodes.AdverseEventActuality;
  /** Id and extensions of the primitive `actuality`. */
  _actuality?: Element;

  /** wrong-patient | procedure-mishap | medication-mishap | device | unsafe-physical-environment | hospital-aquired-infection | wrong-body-site (0..*) */
  category?: CodeableConcept[];

  /** Event or incident that occurred or was averted (0..1) */
  code?: CodeableConcept;

  /** Subject impacted by event (1..1) */
  subject?: Reference;

  /** The Encounter associated with the start of the AdverseEvent (0..1) */
  encounter?: Reference;

  /** When the event occurred (0..1) */
  occurrenceDateTime?: string;
  /** Id and extensions of the primitive `occurrenceDateTime`. */
  _occurrenceDateTime?: Element;
  /** When the event occurred (0..1) */
  occurrencePeriod?: Period;
  /** When the event occurred (0..1) */
  occurrenceTiming?: Timing;

  /** When the event was detected (0..1) */
  detected?: string;
  /** Id and extensions of the primitive `detected`. */
  _detected?: Element;

  /** When the event was recorded (0..1) */
  recordedDate?: string;
  /** Id and extensions of the primitive `recordedDate`. */
  _recordedDate?: Element;

  /** Effect on the subject due to this event (0..*) */
  resultingEffect?: Reference[];

  /** Location where adverse event occurred (0..1) */
  location?: Reference;

  /** Seriousness or gravity of the event (0..1) */
  seriousness?: CodeableConcept;

  /** Type of outcome from the adverse event (0..*) */
  outcome?: CodeableConcept[];

  /** Who recorded the adverse event (0..1) */
  recorder?: Reference;

  /** Who was involved in the adverse event or the potential adverse event and what they did (0..*) */
  participant?: AdverseEventParticipant[];

  /** Research study that the subject is enrolled in (0..*) */
  study?: Reference[];

  /** Considered likely or probable or anticipated in the research study (0..1) */
  expectedInResearchStudy?: boolean;
  /** Id and extensions of the primitive `expectedInResearchStudy`. */
  _expectedInResearchStudy?: Element;

  /** The suspected agent causing the adverse event (0..*) */
  suspectEntity?: AdverseEventSuspectEntity[];

  /** Contributing factors suspected to have increased the probability or severity of the adverse event (0..*) */
  contributingFactor?: AdverseEventContributingFactor[];

  /** Preventive actions that contributed to avoiding the adverse event (0..*) */
  preventiveAction?: AdverseEventPreventiveAction[];

  /** Ameliorating actions taken after the adverse event occured in order to reduce the extent of harm (0..*) */
  mitigatingAction?: AdverseEventMitigatingAction[];

  /** Supporting information relevant to the event (0..*) */
  supportingInfo?: AdverseEventSupportingInfo[];

  /** Comment on adverse event (0..*) */
  note?: Annotation[];

  override fhirType(): string {
    return 'AdverseEvent';
  }

  /** FHIR JSON for this AdverseEvent, typed as the plain `AdverseEvent` data type. */
  override toJSON(): plainTypes.AdverseEvent {
    return this.serialize() as plainTypes.AdverseEvent;
  }

  /** Business identifier for the event (0..*) Never undefined; an empty list is created when absent. */
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

  /** in-progress | completed | entered-in-error | unknown (1..1) */
  getStatus(): valueSetCodes.AdverseEventStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.AdverseEventStatus | undefined): this {
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

  /** actual | potential (1..1) */
  getActuality(): valueSetCodes.AdverseEventActuality | undefined {
    return this.actuality;
  }

  /** Sets `actuality`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setActuality(actuality: valueSetCodes.AdverseEventActuality | undefined): this {
    return this.setFieldValue('actuality', actuality);
  }

  hasActuality(): boolean {
    return this.hasFieldValue('actuality');
  }

  /** The element carrying the id and extensions of `actuality`. Created when absent. */
  getActualityElement(): Element {
    if (this._actuality === undefined) {
      this._actuality = new Element();
    }
    return this._actuality;
  }

  setActualityElement(actualityElement: Element | undefined): this {
    this._actuality = actualityElement;
    return this;
  }

  /** wrong-patient | procedure-mishap | medication-mishap | device | unsafe-physical-environment | hospital-aquired-infection | wrong-body-site (0..*) Never undefined; an empty list is created when absent. */
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

  /** Event or incident that occurred or was averted (0..1) Created when absent. */
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

  /** Subject impacted by event (1..1) Created when absent. */
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

  /** The Encounter associated with the start of the AdverseEvent (0..1) Created when absent. */
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

  /** When the event occurred (0..1) Whichever type of `occurrence[x]` is set. */
  getOccurrence(): string | Period | Timing | undefined {
    return this.getChoiceValue<string | Period | Timing>('occurrence');
  }

  /** True when any type of `occurrence[x]` is set. */
  hasOccurrence(): boolean {
    return this.hasChoiceValue('occurrence');
  }

  getOccurrenceDateTime(): string | undefined {
    return this.occurrenceDateTime;
  }

  /** Sets `occurrence[x]` as dateTime and clears every other type of it. */
  setOccurrenceDateTime(occurrenceDateTime: string | undefined): this {
    return this.setFieldValue('occurrenceDateTime', occurrenceDateTime);
  }

  hasOccurrenceDateTime(): boolean {
    return this.hasFieldValue('occurrenceDateTime');
  }

  getOccurrencePeriod(): Period | undefined {
    return this.occurrencePeriod;
  }

  /** Sets `occurrence[x]` as Period and clears every other type of it. */
  setOccurrencePeriod(occurrencePeriod: Period | undefined): this {
    return this.setFieldValue('occurrencePeriod', occurrencePeriod);
  }

  hasOccurrencePeriod(): boolean {
    return this.hasFieldValue('occurrencePeriod');
  }

  getOccurrenceTiming(): Timing | undefined {
    return this.occurrenceTiming;
  }

  /** Sets `occurrence[x]` as Timing and clears every other type of it. */
  setOccurrenceTiming(occurrenceTiming: Timing | undefined): this {
    return this.setFieldValue('occurrenceTiming', occurrenceTiming);
  }

  hasOccurrenceTiming(): boolean {
    return this.hasFieldValue('occurrenceTiming');
  }

  /** When the event was detected (0..1) */
  getDetected(): string | undefined {
    return this.detected;
  }

  /** Sets `detected`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setDetected(detected: string | undefined): this {
    return this.setFieldValue('detected', detected);
  }

  hasDetected(): boolean {
    return this.hasFieldValue('detected');
  }

  /** The element carrying the id and extensions of `detected`. Created when absent. */
  getDetectedElement(): Element {
    if (this._detected === undefined) {
      this._detected = new Element();
    }
    return this._detected;
  }

  setDetectedElement(detectedElement: Element | undefined): this {
    this._detected = detectedElement;
    return this;
  }

  /** When the event was recorded (0..1) */
  getRecordedDate(): string | undefined {
    return this.recordedDate;
  }

  /** Sets `recordedDate`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setRecordedDate(recordedDate: string | undefined): this {
    return this.setFieldValue('recordedDate', recordedDate);
  }

  hasRecordedDate(): boolean {
    return this.hasFieldValue('recordedDate');
  }

  /** The element carrying the id and extensions of `recordedDate`. Created when absent. */
  getRecordedDateElement(): Element {
    if (this._recordedDate === undefined) {
      this._recordedDate = new Element();
    }
    return this._recordedDate;
  }

  setRecordedDateElement(recordedDateElement: Element | undefined): this {
    this._recordedDate = recordedDateElement;
    return this;
  }

  /** Effect on the subject due to this event (0..*) Never undefined; an empty list is created when absent. */
  getResultingEffect(): Reference[] {
    if (this.resultingEffect === undefined) {
      this.resultingEffect = [];
    }
    return this.resultingEffect;
  }

  setResultingEffect(resultingEffect: Reference[] | undefined): this {
    return this.setFieldValue('resultingEffect', resultingEffect);
  }

  hasResultingEffect(): boolean {
    return this.hasFieldValue('resultingEffect');
  }

  /** Appends a new, empty Reference to `resultingEffect` and returns it so it can be filled in. */
  addResultingEffect(): Reference;
  /** Appends the given Reference to `resultingEffect` and returns this object for chaining. */
  addResultingEffect(reference: Reference): this;
  addResultingEffect(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('resultingEffect', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('resultingEffect', createdReference);
    return createdReference;
  }

  /** The first Reference of `resultingEffect`. One is added when the list is empty. */
  getResultingEffectFirstRep(): Reference {
    const firstReference = this.getResultingEffect()[0];
    return firstReference === undefined ? this.addResultingEffect() : firstReference;
  }

  /** Location where adverse event occurred (0..1) Created when absent. */
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

  /** Seriousness or gravity of the event (0..1) Created when absent. */
  getSeriousness(): CodeableConcept {
    if (this.seriousness === undefined) {
      this.seriousness = new CodeableConcept();
    }
    return this.seriousness;
  }

  setSeriousness(seriousness: CodeableConcept | undefined): this {
    return this.setFieldValue('seriousness', seriousness);
  }

  hasSeriousness(): boolean {
    return this.hasFieldValue('seriousness');
  }

  /** Type of outcome from the adverse event (0..*) Never undefined; an empty list is created when absent. */
  getOutcome(): CodeableConcept[] {
    if (this.outcome === undefined) {
      this.outcome = [];
    }
    return this.outcome;
  }

  setOutcome(outcome: CodeableConcept[] | undefined): this {
    return this.setFieldValue('outcome', outcome);
  }

  hasOutcome(): boolean {
    return this.hasFieldValue('outcome');
  }

  /** Appends a new, empty CodeableConcept to `outcome` and returns it so it can be filled in. */
  addOutcome(): CodeableConcept;
  /** Appends the given CodeableConcept to `outcome` and returns this object for chaining. */
  addOutcome(codeableConcept: CodeableConcept): this;
  addOutcome(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('outcome', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('outcome', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `outcome`. One is added when the list is empty. */
  getOutcomeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getOutcome()[0];
    return firstCodeableConcept === undefined ? this.addOutcome() : firstCodeableConcept;
  }

  /** Who recorded the adverse event (0..1) Created when absent. */
  getRecorder(): Reference {
    if (this.recorder === undefined) {
      this.recorder = new Reference();
    }
    return this.recorder;
  }

  setRecorder(recorder: Reference | undefined): this {
    return this.setFieldValue('recorder', recorder);
  }

  hasRecorder(): boolean {
    return this.hasFieldValue('recorder');
  }

  /** Who was involved in the adverse event or the potential adverse event and what they did (0..*) Never undefined; an empty list is created when absent. */
  getParticipant(): AdverseEventParticipant[] {
    if (this.participant === undefined) {
      this.participant = [];
    }
    return this.participant;
  }

  setParticipant(participant: AdverseEventParticipant[] | undefined): this {
    return this.setFieldValue('participant', participant);
  }

  hasParticipant(): boolean {
    return this.hasFieldValue('participant');
  }

  /** Appends a new, empty AdverseEventParticipant to `participant` and returns it so it can be filled in. */
  addParticipant(): AdverseEventParticipant;
  /** Appends the given AdverseEventParticipant to `participant` and returns this object for chaining. */
  addParticipant(adverseEventParticipant: AdverseEventParticipant): this;
  addParticipant(
    adverseEventParticipant?: AdverseEventParticipant
  ): AdverseEventParticipant | this {
    if (adverseEventParticipant !== undefined) {
      return this.addFieldValue('participant', adverseEventParticipant);
    }
    const createdAdverseEventParticipant = new AdverseEventParticipant();
    this.addFieldValue('participant', createdAdverseEventParticipant);
    return createdAdverseEventParticipant;
  }

  /** The first AdverseEventParticipant of `participant`. One is added when the list is empty. */
  getParticipantFirstRep(): AdverseEventParticipant {
    const firstAdverseEventParticipant = this.getParticipant()[0];
    return firstAdverseEventParticipant === undefined
      ? this.addParticipant()
      : firstAdverseEventParticipant;
  }

  /** Research study that the subject is enrolled in (0..*) Never undefined; an empty list is created when absent. */
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

  /** Considered likely or probable or anticipated in the research study (0..1) */
  getExpectedInResearchStudy(): boolean | undefined {
    return this.expectedInResearchStudy;
  }

  /** Sets `expectedInResearchStudy`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setExpectedInResearchStudy(expectedInResearchStudy: boolean | undefined): this {
    return this.setFieldValue('expectedInResearchStudy', expectedInResearchStudy);
  }

  hasExpectedInResearchStudy(): boolean {
    return this.hasFieldValue('expectedInResearchStudy');
  }

  /** The element carrying the id and extensions of `expectedInResearchStudy`. Created when absent. */
  getExpectedInResearchStudyElement(): Element {
    if (this._expectedInResearchStudy === undefined) {
      this._expectedInResearchStudy = new Element();
    }
    return this._expectedInResearchStudy;
  }

  setExpectedInResearchStudyElement(expectedInResearchStudyElement: Element | undefined): this {
    this._expectedInResearchStudy = expectedInResearchStudyElement;
    return this;
  }

  /** The suspected agent causing the adverse event (0..*) Never undefined; an empty list is created when absent. */
  getSuspectEntity(): AdverseEventSuspectEntity[] {
    if (this.suspectEntity === undefined) {
      this.suspectEntity = [];
    }
    return this.suspectEntity;
  }

  setSuspectEntity(suspectEntity: AdverseEventSuspectEntity[] | undefined): this {
    return this.setFieldValue('suspectEntity', suspectEntity);
  }

  hasSuspectEntity(): boolean {
    return this.hasFieldValue('suspectEntity');
  }

  /** Appends a new, empty AdverseEventSuspectEntity to `suspectEntity` and returns it so it can be filled in. */
  addSuspectEntity(): AdverseEventSuspectEntity;
  /** Appends the given AdverseEventSuspectEntity to `suspectEntity` and returns this object for chaining. */
  addSuspectEntity(adverseEventSuspectEntity: AdverseEventSuspectEntity): this;
  addSuspectEntity(
    adverseEventSuspectEntity?: AdverseEventSuspectEntity
  ): AdverseEventSuspectEntity | this {
    if (adverseEventSuspectEntity !== undefined) {
      return this.addFieldValue('suspectEntity', adverseEventSuspectEntity);
    }
    const createdAdverseEventSuspectEntity = new AdverseEventSuspectEntity();
    this.addFieldValue('suspectEntity', createdAdverseEventSuspectEntity);
    return createdAdverseEventSuspectEntity;
  }

  /** The first AdverseEventSuspectEntity of `suspectEntity`. One is added when the list is empty. */
  getSuspectEntityFirstRep(): AdverseEventSuspectEntity {
    const firstAdverseEventSuspectEntity = this.getSuspectEntity()[0];
    return firstAdverseEventSuspectEntity === undefined
      ? this.addSuspectEntity()
      : firstAdverseEventSuspectEntity;
  }

  /** Contributing factors suspected to have increased the probability or severity of the adverse event (0..*) Never undefined; an empty list is created when absent. */
  getContributingFactor(): AdverseEventContributingFactor[] {
    if (this.contributingFactor === undefined) {
      this.contributingFactor = [];
    }
    return this.contributingFactor;
  }

  setContributingFactor(contributingFactor: AdverseEventContributingFactor[] | undefined): this {
    return this.setFieldValue('contributingFactor', contributingFactor);
  }

  hasContributingFactor(): boolean {
    return this.hasFieldValue('contributingFactor');
  }

  /** Appends a new, empty AdverseEventContributingFactor to `contributingFactor` and returns it so it can be filled in. */
  addContributingFactor(): AdverseEventContributingFactor;
  /** Appends the given AdverseEventContributingFactor to `contributingFactor` and returns this object for chaining. */
  addContributingFactor(adverseEventContributingFactor: AdverseEventContributingFactor): this;
  addContributingFactor(
    adverseEventContributingFactor?: AdverseEventContributingFactor
  ): AdverseEventContributingFactor | this {
    if (adverseEventContributingFactor !== undefined) {
      return this.addFieldValue('contributingFactor', adverseEventContributingFactor);
    }
    const createdAdverseEventContributingFactor = new AdverseEventContributingFactor();
    this.addFieldValue('contributingFactor', createdAdverseEventContributingFactor);
    return createdAdverseEventContributingFactor;
  }

  /** The first AdverseEventContributingFactor of `contributingFactor`. One is added when the list is empty. */
  getContributingFactorFirstRep(): AdverseEventContributingFactor {
    const firstAdverseEventContributingFactor = this.getContributingFactor()[0];
    return firstAdverseEventContributingFactor === undefined
      ? this.addContributingFactor()
      : firstAdverseEventContributingFactor;
  }

  /** Preventive actions that contributed to avoiding the adverse event (0..*) Never undefined; an empty list is created when absent. */
  getPreventiveAction(): AdverseEventPreventiveAction[] {
    if (this.preventiveAction === undefined) {
      this.preventiveAction = [];
    }
    return this.preventiveAction;
  }

  setPreventiveAction(preventiveAction: AdverseEventPreventiveAction[] | undefined): this {
    return this.setFieldValue('preventiveAction', preventiveAction);
  }

  hasPreventiveAction(): boolean {
    return this.hasFieldValue('preventiveAction');
  }

  /** Appends a new, empty AdverseEventPreventiveAction to `preventiveAction` and returns it so it can be filled in. */
  addPreventiveAction(): AdverseEventPreventiveAction;
  /** Appends the given AdverseEventPreventiveAction to `preventiveAction` and returns this object for chaining. */
  addPreventiveAction(adverseEventPreventiveAction: AdverseEventPreventiveAction): this;
  addPreventiveAction(
    adverseEventPreventiveAction?: AdverseEventPreventiveAction
  ): AdverseEventPreventiveAction | this {
    if (adverseEventPreventiveAction !== undefined) {
      return this.addFieldValue('preventiveAction', adverseEventPreventiveAction);
    }
    const createdAdverseEventPreventiveAction = new AdverseEventPreventiveAction();
    this.addFieldValue('preventiveAction', createdAdverseEventPreventiveAction);
    return createdAdverseEventPreventiveAction;
  }

  /** The first AdverseEventPreventiveAction of `preventiveAction`. One is added when the list is empty. */
  getPreventiveActionFirstRep(): AdverseEventPreventiveAction {
    const firstAdverseEventPreventiveAction = this.getPreventiveAction()[0];
    return firstAdverseEventPreventiveAction === undefined
      ? this.addPreventiveAction()
      : firstAdverseEventPreventiveAction;
  }

  /** Ameliorating actions taken after the adverse event occured in order to reduce the extent of harm (0..*) Never undefined; an empty list is created when absent. */
  getMitigatingAction(): AdverseEventMitigatingAction[] {
    if (this.mitigatingAction === undefined) {
      this.mitigatingAction = [];
    }
    return this.mitigatingAction;
  }

  setMitigatingAction(mitigatingAction: AdverseEventMitigatingAction[] | undefined): this {
    return this.setFieldValue('mitigatingAction', mitigatingAction);
  }

  hasMitigatingAction(): boolean {
    return this.hasFieldValue('mitigatingAction');
  }

  /** Appends a new, empty AdverseEventMitigatingAction to `mitigatingAction` and returns it so it can be filled in. */
  addMitigatingAction(): AdverseEventMitigatingAction;
  /** Appends the given AdverseEventMitigatingAction to `mitigatingAction` and returns this object for chaining. */
  addMitigatingAction(adverseEventMitigatingAction: AdverseEventMitigatingAction): this;
  addMitigatingAction(
    adverseEventMitigatingAction?: AdverseEventMitigatingAction
  ): AdverseEventMitigatingAction | this {
    if (adverseEventMitigatingAction !== undefined) {
      return this.addFieldValue('mitigatingAction', adverseEventMitigatingAction);
    }
    const createdAdverseEventMitigatingAction = new AdverseEventMitigatingAction();
    this.addFieldValue('mitigatingAction', createdAdverseEventMitigatingAction);
    return createdAdverseEventMitigatingAction;
  }

  /** The first AdverseEventMitigatingAction of `mitigatingAction`. One is added when the list is empty. */
  getMitigatingActionFirstRep(): AdverseEventMitigatingAction {
    const firstAdverseEventMitigatingAction = this.getMitigatingAction()[0];
    return firstAdverseEventMitigatingAction === undefined
      ? this.addMitigatingAction()
      : firstAdverseEventMitigatingAction;
  }

  /** Supporting information relevant to the event (0..*) Never undefined; an empty list is created when absent. */
  getSupportingInfo(): AdverseEventSupportingInfo[] {
    if (this.supportingInfo === undefined) {
      this.supportingInfo = [];
    }
    return this.supportingInfo;
  }

  setSupportingInfo(supportingInfo: AdverseEventSupportingInfo[] | undefined): this {
    return this.setFieldValue('supportingInfo', supportingInfo);
  }

  hasSupportingInfo(): boolean {
    return this.hasFieldValue('supportingInfo');
  }

  /** Appends a new, empty AdverseEventSupportingInfo to `supportingInfo` and returns it so it can be filled in. */
  addSupportingInfo(): AdverseEventSupportingInfo;
  /** Appends the given AdverseEventSupportingInfo to `supportingInfo` and returns this object for chaining. */
  addSupportingInfo(adverseEventSupportingInfo: AdverseEventSupportingInfo): this;
  addSupportingInfo(
    adverseEventSupportingInfo?: AdverseEventSupportingInfo
  ): AdverseEventSupportingInfo | this {
    if (adverseEventSupportingInfo !== undefined) {
      return this.addFieldValue('supportingInfo', adverseEventSupportingInfo);
    }
    const createdAdverseEventSupportingInfo = new AdverseEventSupportingInfo();
    this.addFieldValue('supportingInfo', createdAdverseEventSupportingInfo);
    return createdAdverseEventSupportingInfo;
  }

  /** The first AdverseEventSupportingInfo of `supportingInfo`. One is added when the list is empty. */
  getSupportingInfoFirstRep(): AdverseEventSupportingInfo {
    const firstAdverseEventSupportingInfo = this.getSupportingInfo()[0];
    return firstAdverseEventSupportingInfo === undefined
      ? this.addSupportingInfo()
      : firstAdverseEventSupportingInfo;
  }

  /** Comment on adverse event (0..*) Never undefined; an empty list is created when absent. */
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

modelTypeRegistry.register('AdverseEvent', AdverseEvent, true);

/** True when the value is a AdverseEvent model instance. */
export function isAdverseEvent(candidate: unknown): candidate is AdverseEvent {
  return candidate instanceof AdverseEvent;
}

/**
 * Who was involved in the adverse event or the potential adverse event and what they did
 */
export class AdverseEventParticipant extends BackboneElement {
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
            'Organization',
            'Patient',
            'Practitioner',
            'PractitionerRole',
            'RelatedPerson',
            'ResearchSubject',
          ],
        },
      ],
    },
  ];

  /** Type of involvement (0..1) */
  function?: CodeableConcept;

  /** Who was involved in the adverse event or the potential adverse event (1..1) */
  actor?: Reference;

  override fhirType(): string {
    return 'AdverseEvent.participant';
  }

  /** FHIR JSON for this AdverseEventParticipant, typed as the plain `AdverseEventParticipant` data type. */
  override toJSON(): plainTypes.AdverseEventParticipant {
    return this.serialize() as plainTypes.AdverseEventParticipant;
  }

  /** Type of involvement (0..1) Created when absent. */
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

  /** Who was involved in the adverse event or the potential adverse event (1..1) Created when absent. */
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

modelTypeRegistry.register('AdverseEventParticipant', AdverseEventParticipant, false);

/**
 * The suspected agent causing the adverse event
 */
export class AdverseEventSuspectEntity extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'instance',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'instanceCodeableConcept', typeCode: 'CodeableConcept' },
        {
          jsonKey: 'instanceReference',
          typeCode: 'Reference',
          targetResourceTypes: [
            'BiologicallyDerivedProduct',
            'Device',
            'Immunization',
            'Medication',
            'MedicationAdministration',
            'MedicationStatement',
            'Procedure',
            'ResearchStudy',
            'Substance',
          ],
        },
      ],
    },
    {
      elementName: 'causality',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'causality', typeCode: 'AdverseEventSuspectEntityCausality' }],
    },
  ];

  /** Refers to the specific entity that caused the adverse event (1..1) */
  instanceCodeableConcept?: CodeableConcept;
  /** Refers to the specific entity that caused the adverse event (1..1) */
  instanceReference?: Reference;

  /** Information on the possible cause of the event (0..1) */
  causality?: AdverseEventSuspectEntityCausality;

  override fhirType(): string {
    return 'AdverseEvent.suspectEntity';
  }

  /** FHIR JSON for this AdverseEventSuspectEntity, typed as the plain `AdverseEventSuspectEntity` data type. */
  override toJSON(): plainTypes.AdverseEventSuspectEntity {
    return this.serialize() as plainTypes.AdverseEventSuspectEntity;
  }

  /** Refers to the specific entity that caused the adverse event (1..1) Whichever type of `instance[x]` is set. */
  getInstance(): CodeableConcept | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | Reference>('instance');
  }

  /** True when any type of `instance[x]` is set. */
  hasInstance(): boolean {
    return this.hasChoiceValue('instance');
  }

  getInstanceCodeableConcept(): CodeableConcept | undefined {
    return this.instanceCodeableConcept;
  }

  /** Sets `instance[x]` as CodeableConcept and clears every other type of it. */
  setInstanceCodeableConcept(instanceCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('instanceCodeableConcept', instanceCodeableConcept);
  }

  hasInstanceCodeableConcept(): boolean {
    return this.hasFieldValue('instanceCodeableConcept');
  }

  getInstanceReference(): Reference | undefined {
    return this.instanceReference;
  }

  /** Sets `instance[x]` as Reference and clears every other type of it. */
  setInstanceReference(instanceReference: Reference | undefined): this {
    return this.setFieldValue('instanceReference', instanceReference);
  }

  hasInstanceReference(): boolean {
    return this.hasFieldValue('instanceReference');
  }

  /** Information on the possible cause of the event (0..1) Created when absent. */
  getCausality(): AdverseEventSuspectEntityCausality {
    if (this.causality === undefined) {
      this.causality = new AdverseEventSuspectEntityCausality();
    }
    return this.causality;
  }

  setCausality(causality: AdverseEventSuspectEntityCausality | undefined): this {
    return this.setFieldValue('causality', causality);
  }

  hasCausality(): boolean {
    return this.hasFieldValue('causality');
  }
}

modelTypeRegistry.register('AdverseEventSuspectEntity', AdverseEventSuspectEntity, false);

/**
 * Information on the possible cause of the event
 */
export class AdverseEventSuspectEntityCausality extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'assessmentMethod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'assessmentMethod', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'entityRelatedness',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'entityRelatedness', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'author',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'author',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Patient',
            'Practitioner',
            'PractitionerRole',
            'RelatedPerson',
            'ResearchSubject',
          ],
        },
      ],
    },
  ];

  /** Method of evaluating the relatedness of the suspected entity to the event (0..1) */
  assessmentMethod?: CodeableConcept;

  /** Result of the assessment regarding the relatedness of the suspected entity to the event (0..1) */
  entityRelatedness?: CodeableConcept;

  /** Author of the information on the possible cause of the event (0..1) */
  author?: Reference;

  override fhirType(): string {
    return 'AdverseEvent.suspectEntity.causality';
  }

  /** FHIR JSON for this AdverseEventSuspectEntityCausality, typed as the plain `AdverseEventCausality` data type. */
  override toJSON(): plainTypes.AdverseEventCausality {
    return this.serialize() as plainTypes.AdverseEventCausality;
  }

  /** Method of evaluating the relatedness of the suspected entity to the event (0..1) Created when absent. */
  getAssessmentMethod(): CodeableConcept {
    if (this.assessmentMethod === undefined) {
      this.assessmentMethod = new CodeableConcept();
    }
    return this.assessmentMethod;
  }

  setAssessmentMethod(assessmentMethod: CodeableConcept | undefined): this {
    return this.setFieldValue('assessmentMethod', assessmentMethod);
  }

  hasAssessmentMethod(): boolean {
    return this.hasFieldValue('assessmentMethod');
  }

  /** Result of the assessment regarding the relatedness of the suspected entity to the event (0..1) Created when absent. */
  getEntityRelatedness(): CodeableConcept {
    if (this.entityRelatedness === undefined) {
      this.entityRelatedness = new CodeableConcept();
    }
    return this.entityRelatedness;
  }

  setEntityRelatedness(entityRelatedness: CodeableConcept | undefined): this {
    return this.setFieldValue('entityRelatedness', entityRelatedness);
  }

  hasEntityRelatedness(): boolean {
    return this.hasFieldValue('entityRelatedness');
  }

  /** Author of the information on the possible cause of the event (0..1) Created when absent. */
  getAuthor(): Reference {
    if (this.author === undefined) {
      this.author = new Reference();
    }
    return this.author;
  }

  setAuthor(author: Reference | undefined): this {
    return this.setFieldValue('author', author);
  }

  hasAuthor(): boolean {
    return this.hasFieldValue('author');
  }
}

modelTypeRegistry.register(
  'AdverseEventSuspectEntityCausality',
  AdverseEventSuspectEntityCausality,
  false
);

/**
 * Contributing factors suspected to have increased the probability or severity of the adverse event
 */
export class AdverseEventContributingFactor extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'item',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'itemReference',
          typeCode: 'Reference',
          targetResourceTypes: [
            'AllergyIntolerance',
            'Condition',
            'Device',
            'DeviceUsage',
            'DocumentReference',
            'FamilyMemberHistory',
            'Immunization',
            'MedicationAdministration',
            'MedicationStatement',
            'Observation',
            'Procedure',
          ],
        },
        { jsonKey: 'itemCodeableConcept', typeCode: 'CodeableConcept' },
      ],
    },
  ];

  /** Item suspected to have increased the probability or severity of the adverse event (1..1) */
  itemReference?: Reference;
  /** Item suspected to have increased the probability or severity of the adverse event (1..1) */
  itemCodeableConcept?: CodeableConcept;

  override fhirType(): string {
    return 'AdverseEvent.contributingFactor';
  }

  /** FHIR JSON for this AdverseEventContributingFactor, typed as the plain `AdverseEventContributingFactor` data type. */
  override toJSON(): plainTypes.AdverseEventContributingFactor {
    return this.serialize() as plainTypes.AdverseEventContributingFactor;
  }

  /** Item suspected to have increased the probability or severity of the adverse event (1..1) Whichever type of `item[x]` is set. */
  getItem(): Reference | CodeableConcept | undefined {
    return this.getChoiceValue<Reference | CodeableConcept>('item');
  }

  /** True when any type of `item[x]` is set. */
  hasItem(): boolean {
    return this.hasChoiceValue('item');
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
}

modelTypeRegistry.register('AdverseEventContributingFactor', AdverseEventContributingFactor, false);

/**
 * Preventive actions that contributed to avoiding the adverse event
 */
export class AdverseEventPreventiveAction extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'item',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'itemReference',
          typeCode: 'Reference',
          targetResourceTypes: [
            'DocumentReference',
            'Immunization',
            'MedicationAdministration',
            'MedicationRequest',
            'Procedure',
          ],
        },
        { jsonKey: 'itemCodeableConcept', typeCode: 'CodeableConcept' },
      ],
    },
  ];

  /** Action that contributed to avoiding the adverse event (1..1) */
  itemReference?: Reference;
  /** Action that contributed to avoiding the adverse event (1..1) */
  itemCodeableConcept?: CodeableConcept;

  override fhirType(): string {
    return 'AdverseEvent.preventiveAction';
  }

  /** FHIR JSON for this AdverseEventPreventiveAction, typed as the plain `AdverseEventPreventiveAction` data type. */
  override toJSON(): plainTypes.AdverseEventPreventiveAction {
    return this.serialize() as plainTypes.AdverseEventPreventiveAction;
  }

  /** Action that contributed to avoiding the adverse event (1..1) Whichever type of `item[x]` is set. */
  getItem(): Reference | CodeableConcept | undefined {
    return this.getChoiceValue<Reference | CodeableConcept>('item');
  }

  /** True when any type of `item[x]` is set. */
  hasItem(): boolean {
    return this.hasChoiceValue('item');
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
}

modelTypeRegistry.register('AdverseEventPreventiveAction', AdverseEventPreventiveAction, false);

/**
 * Ameliorating actions taken after the adverse event occured in order to reduce the extent of harm
 */
export class AdverseEventMitigatingAction extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'item',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'itemReference',
          typeCode: 'Reference',
          targetResourceTypes: [
            'DocumentReference',
            'MedicationAdministration',
            'MedicationRequest',
            'Procedure',
          ],
        },
        { jsonKey: 'itemCodeableConcept', typeCode: 'CodeableConcept' },
      ],
    },
  ];

  /** Ameliorating action taken after the adverse event occured in order to reduce the extent of harm (1..1) */
  itemReference?: Reference;
  /** Ameliorating action taken after the adverse event occured in order to reduce the extent of harm (1..1) */
  itemCodeableConcept?: CodeableConcept;

  override fhirType(): string {
    return 'AdverseEvent.mitigatingAction';
  }

  /** FHIR JSON for this AdverseEventMitigatingAction, typed as the plain `AdverseEventMitigatingAction` data type. */
  override toJSON(): plainTypes.AdverseEventMitigatingAction {
    return this.serialize() as plainTypes.AdverseEventMitigatingAction;
  }

  /** Ameliorating action taken after the adverse event occured in order to reduce the extent of harm (1..1) Whichever type of `item[x]` is set. */
  getItem(): Reference | CodeableConcept | undefined {
    return this.getChoiceValue<Reference | CodeableConcept>('item');
  }

  /** True when any type of `item[x]` is set. */
  hasItem(): boolean {
    return this.hasChoiceValue('item');
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
}

modelTypeRegistry.register('AdverseEventMitigatingAction', AdverseEventMitigatingAction, false);

/**
 * Supporting information relevant to the event
 */
export class AdverseEventSupportingInfo extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'item',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'itemReference',
          typeCode: 'Reference',
          targetResourceTypes: [
            'AllergyIntolerance',
            'Condition',
            'DocumentReference',
            'FamilyMemberHistory',
            'Immunization',
            'MedicationAdministration',
            'MedicationStatement',
            'Observation',
            'Procedure',
            'QuestionnaireResponse',
          ],
        },
        { jsonKey: 'itemCodeableConcept', typeCode: 'CodeableConcept' },
      ],
    },
  ];

  /** Subject medical history or document relevant to this adverse event (1..1) */
  itemReference?: Reference;
  /** Subject medical history or document relevant to this adverse event (1..1) */
  itemCodeableConcept?: CodeableConcept;

  override fhirType(): string {
    return 'AdverseEvent.supportingInfo';
  }

  /** FHIR JSON for this AdverseEventSupportingInfo, typed as the plain `AdverseEventSupportingInfo` data type. */
  override toJSON(): plainTypes.AdverseEventSupportingInfo {
    return this.serialize() as plainTypes.AdverseEventSupportingInfo;
  }

  /** Subject medical history or document relevant to this adverse event (1..1) Whichever type of `item[x]` is set. */
  getItem(): Reference | CodeableConcept | undefined {
    return this.getChoiceValue<Reference | CodeableConcept>('item');
  }

  /** True when any type of `item[x]` is set. */
  hasItem(): boolean {
    return this.hasChoiceValue('item');
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
}

modelTypeRegistry.register('AdverseEventSupportingInfo', AdverseEventSupportingInfo, false);
