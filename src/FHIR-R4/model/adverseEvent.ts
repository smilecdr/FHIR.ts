/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Reference } from './reference';

/**
 * Actual or potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death.
 */
export class AdverseEvent extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
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
      elementName: 'event',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'event', typeCode: 'CodeableConcept' }],
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
          targetResourceTypes: ['Group', 'Patient', 'Practitioner', 'RelatedPerson'],
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
      elementName: 'date',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'date', typeCode: 'dateTime' }],
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
      elementName: 'resultingCondition',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'resultingCondition',
          typeCode: 'Reference',
          targetResourceTypes: ['Condition'],
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
      elementName: 'severity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'severity', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'outcome',
      minimum: 0,
      maximum: 1,
      isList: false,
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
          targetResourceTypes: ['Patient', 'Practitioner', 'PractitionerRole', 'RelatedPerson'],
        },
      ],
    },
    {
      elementName: 'contributor',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'contributor',
          typeCode: 'Reference',
          targetResourceTypes: ['Device', 'Practitioner', 'PractitionerRole'],
        },
      ],
    },
    {
      elementName: 'suspectEntity',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'suspectEntity', typeCode: 'AdverseEventSuspectEntity' }],
    },
    {
      elementName: 'subjectMedicalHistory',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'subjectMedicalHistory',
          typeCode: 'Reference',
          targetResourceTypes: [
            'AllergyIntolerance',
            'Condition',
            'DocumentReference',
            'FamilyMemberHistory',
            'Immunization',
            'Media',
            'Observation',
            'Procedure',
          ],
        },
      ],
    },
    {
      elementName: 'referenceDocument',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'referenceDocument',
          typeCode: 'Reference',
          targetResourceTypes: ['DocumentReference'],
        },
      ],
    },
    {
      elementName: 'study',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'study', typeCode: 'Reference', targetResourceTypes: ['ResearchStudy'] }],
    },
  ];

  readonly resourceType = 'AdverseEvent';

  /** Business identifier for the event (0..1) */
  identifier?: Identifier;

  /** actual | potential (1..1) */
  actuality?: valueSetCodes.AdverseEventActuality;
  /** Id and extensions of the primitive `actuality`. */
  _actuality?: Element;

  /** product-problem | product-quality | product-use-error | wrong-dose | incorrect-prescribing-information | wrong-technique | wrong-route-of-administration | wrong-rate | wrong-duration | wrong-time | expired-drug | medical-device-use-error | problem-different-manufacturer | unsafe-physical-environment (0..*) */
  category?: CodeableConcept[];

  /** Type of the event itself in relation to the subject (0..1) */
  event?: CodeableConcept;

  /** Subject impacted by event (1..1) */
  subject?: Reference;

  /** Encounter created as part of (0..1) */
  encounter?: Reference;

  /** When the event occurred (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** When the event was detected (0..1) */
  detected?: string;
  /** Id and extensions of the primitive `detected`. */
  _detected?: Element;

  /** When the event was recorded (0..1) */
  recordedDate?: string;
  /** Id and extensions of the primitive `recordedDate`. */
  _recordedDate?: Element;

  /** Effect on the subject due to this event (0..*) */
  resultingCondition?: Reference[];

  /** Location where adverse event occurred (0..1) */
  location?: Reference;

  /** Seriousness of the event (0..1) */
  seriousness?: CodeableConcept;

  /** mild | moderate | severe (0..1) */
  severity?: CodeableConcept;

  /** resolved | recovering | ongoing | resolvedWithSequelae | fatal | unknown (0..1) */
  outcome?: CodeableConcept;

  /** Who recorded the adverse event (0..1) */
  recorder?: Reference;

  /** Who was involved in the adverse event or the potential adverse event (0..*) */
  contributor?: Reference[];

  /** The suspected agent causing the adverse event (0..*) */
  suspectEntity?: AdverseEventSuspectEntity[];

  /** AdverseEvent.subjectMedicalHistory (0..*) */
  subjectMedicalHistory?: Reference[];

  /** AdverseEvent.referenceDocument (0..*) */
  referenceDocument?: Reference[];

  /** AdverseEvent.study (0..*) */
  study?: Reference[];

  override fhirType(): string {
    return 'AdverseEvent';
  }

  /** FHIR JSON for this AdverseEvent, typed as the plain `AdverseEvent` data type. */
  override toJSON(): plainTypes.AdverseEvent {
    return this.serialize() as plainTypes.AdverseEvent;
  }

  /** Business identifier for the event (0..1) Created when absent. */
  getIdentifier(): Identifier {
    if (this.identifier === undefined) {
      this.identifier = new Identifier();
    }
    return this.identifier;
  }

  setIdentifier(identifier: Identifier | undefined): this {
    return this.setFieldValue('identifier', identifier);
  }

  hasIdentifier(): boolean {
    return this.hasFieldValue('identifier');
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

  /** product-problem | product-quality | product-use-error | wrong-dose | incorrect-prescribing-information | wrong-technique | wrong-route-of-administration | wrong-rate | wrong-duration | wrong-time | expired-drug | medical-device-use-error | problem-different-manufacturer | unsafe-physical-environment (0..*) Never undefined; an empty list is created when absent. */
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

  /** Type of the event itself in relation to the subject (0..1) Created when absent. */
  getEvent(): CodeableConcept {
    if (this.event === undefined) {
      this.event = new CodeableConcept();
    }
    return this.event;
  }

  setEvent(event: CodeableConcept | undefined): this {
    return this.setFieldValue('event', event);
  }

  hasEvent(): boolean {
    return this.hasFieldValue('event');
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

  /** Encounter created as part of (0..1) Created when absent. */
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

  /** When the event occurred (0..1) */
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
  getResultingCondition(): Reference[] {
    if (this.resultingCondition === undefined) {
      this.resultingCondition = [];
    }
    return this.resultingCondition;
  }

  setResultingCondition(resultingCondition: Reference[] | undefined): this {
    return this.setFieldValue('resultingCondition', resultingCondition);
  }

  hasResultingCondition(): boolean {
    return this.hasFieldValue('resultingCondition');
  }

  /** Appends a new, empty Reference to `resultingCondition` and returns it so it can be filled in. */
  addResultingCondition(): Reference;
  /** Appends the given Reference to `resultingCondition` and returns this object for chaining. */
  addResultingCondition(reference: Reference): this;
  addResultingCondition(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('resultingCondition', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('resultingCondition', createdReference);
    return createdReference;
  }

  /** The first Reference of `resultingCondition`. One is added when the list is empty. */
  getResultingConditionFirstRep(): Reference {
    const firstReference = this.getResultingCondition()[0];
    return firstReference === undefined ? this.addResultingCondition() : firstReference;
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

  /** Seriousness of the event (0..1) Created when absent. */
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

  /** mild | moderate | severe (0..1) Created when absent. */
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

  /** resolved | recovering | ongoing | resolvedWithSequelae | fatal | unknown (0..1) Created when absent. */
  getOutcome(): CodeableConcept {
    if (this.outcome === undefined) {
      this.outcome = new CodeableConcept();
    }
    return this.outcome;
  }

  setOutcome(outcome: CodeableConcept | undefined): this {
    return this.setFieldValue('outcome', outcome);
  }

  hasOutcome(): boolean {
    return this.hasFieldValue('outcome');
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

  /** Who was involved in the adverse event or the potential adverse event (0..*) Never undefined; an empty list is created when absent. */
  getContributor(): Reference[] {
    if (this.contributor === undefined) {
      this.contributor = [];
    }
    return this.contributor;
  }

  setContributor(contributor: Reference[] | undefined): this {
    return this.setFieldValue('contributor', contributor);
  }

  hasContributor(): boolean {
    return this.hasFieldValue('contributor');
  }

  /** Appends a new, empty Reference to `contributor` and returns it so it can be filled in. */
  addContributor(): Reference;
  /** Appends the given Reference to `contributor` and returns this object for chaining. */
  addContributor(reference: Reference): this;
  addContributor(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('contributor', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('contributor', createdReference);
    return createdReference;
  }

  /** The first Reference of `contributor`. One is added when the list is empty. */
  getContributorFirstRep(): Reference {
    const firstReference = this.getContributor()[0];
    return firstReference === undefined ? this.addContributor() : firstReference;
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

  /** AdverseEvent.subjectMedicalHistory (0..*) Never undefined; an empty list is created when absent. */
  getSubjectMedicalHistory(): Reference[] {
    if (this.subjectMedicalHistory === undefined) {
      this.subjectMedicalHistory = [];
    }
    return this.subjectMedicalHistory;
  }

  setSubjectMedicalHistory(subjectMedicalHistory: Reference[] | undefined): this {
    return this.setFieldValue('subjectMedicalHistory', subjectMedicalHistory);
  }

  hasSubjectMedicalHistory(): boolean {
    return this.hasFieldValue('subjectMedicalHistory');
  }

  /** Appends a new, empty Reference to `subjectMedicalHistory` and returns it so it can be filled in. */
  addSubjectMedicalHistory(): Reference;
  /** Appends the given Reference to `subjectMedicalHistory` and returns this object for chaining. */
  addSubjectMedicalHistory(reference: Reference): this;
  addSubjectMedicalHistory(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('subjectMedicalHistory', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('subjectMedicalHistory', createdReference);
    return createdReference;
  }

  /** The first Reference of `subjectMedicalHistory`. One is added when the list is empty. */
  getSubjectMedicalHistoryFirstRep(): Reference {
    const firstReference = this.getSubjectMedicalHistory()[0];
    return firstReference === undefined ? this.addSubjectMedicalHistory() : firstReference;
  }

  /** AdverseEvent.referenceDocument (0..*) Never undefined; an empty list is created when absent. */
  getReferenceDocument(): Reference[] {
    if (this.referenceDocument === undefined) {
      this.referenceDocument = [];
    }
    return this.referenceDocument;
  }

  setReferenceDocument(referenceDocument: Reference[] | undefined): this {
    return this.setFieldValue('referenceDocument', referenceDocument);
  }

  hasReferenceDocument(): boolean {
    return this.hasFieldValue('referenceDocument');
  }

  /** Appends a new, empty Reference to `referenceDocument` and returns it so it can be filled in. */
  addReferenceDocument(): Reference;
  /** Appends the given Reference to `referenceDocument` and returns this object for chaining. */
  addReferenceDocument(reference: Reference): this;
  addReferenceDocument(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('referenceDocument', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('referenceDocument', createdReference);
    return createdReference;
  }

  /** The first Reference of `referenceDocument`. One is added when the list is empty. */
  getReferenceDocumentFirstRep(): Reference {
    const firstReference = this.getReferenceDocument()[0];
    return firstReference === undefined ? this.addReferenceDocument() : firstReference;
  }

  /** AdverseEvent.study (0..*) Never undefined; an empty list is created when absent. */
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
}

modelTypeRegistry.register('AdverseEvent', AdverseEvent, true);

/** True when the value is a AdverseEvent model instance. */
export function isAdverseEvent(candidate: unknown): candidate is AdverseEvent {
  return candidate instanceof AdverseEvent;
}

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
        {
          jsonKey: 'instance',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Device',
            'Immunization',
            'Medication',
            'MedicationAdministration',
            'MedicationStatement',
            'Procedure',
            'Substance',
          ],
        },
      ],
    },
    {
      elementName: 'causality',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'causality', typeCode: 'AdverseEventSuspectEntityCausality' }],
    },
  ];

  /** Refers to the specific entity that caused the adverse event (1..1) */
  instance?: Reference;

  /** Information on the possible cause of the event (0..*) */
  causality?: AdverseEventSuspectEntityCausality[];

  override fhirType(): string {
    return 'AdverseEvent.suspectEntity';
  }

  /** FHIR JSON for this AdverseEventSuspectEntity, typed as the plain `AdverseEventSuspectEntity` data type. */
  override toJSON(): plainTypes.AdverseEventSuspectEntity {
    return this.serialize() as plainTypes.AdverseEventSuspectEntity;
  }

  /** Refers to the specific entity that caused the adverse event (1..1) Created when absent. */
  getInstance(): Reference {
    if (this.instance === undefined) {
      this.instance = new Reference();
    }
    return this.instance;
  }

  setInstance(instance: Reference | undefined): this {
    return this.setFieldValue('instance', instance);
  }

  hasInstance(): boolean {
    return this.hasFieldValue('instance');
  }

  /** Information on the possible cause of the event (0..*) Never undefined; an empty list is created when absent. */
  getCausality(): AdverseEventSuspectEntityCausality[] {
    if (this.causality === undefined) {
      this.causality = [];
    }
    return this.causality;
  }

  setCausality(causality: AdverseEventSuspectEntityCausality[] | undefined): this {
    return this.setFieldValue('causality', causality);
  }

  hasCausality(): boolean {
    return this.hasFieldValue('causality');
  }

  /** Appends a new, empty AdverseEventSuspectEntityCausality to `causality` and returns it so it can be filled in. */
  addCausality(): AdverseEventSuspectEntityCausality;
  /** Appends the given AdverseEventSuspectEntityCausality to `causality` and returns this object for chaining. */
  addCausality(adverseEventSuspectEntityCausality: AdverseEventSuspectEntityCausality): this;
  addCausality(
    adverseEventSuspectEntityCausality?: AdverseEventSuspectEntityCausality
  ): AdverseEventSuspectEntityCausality | this {
    if (adverseEventSuspectEntityCausality !== undefined) {
      return this.addFieldValue('causality', adverseEventSuspectEntityCausality);
    }
    const createdAdverseEventSuspectEntityCausality = new AdverseEventSuspectEntityCausality();
    this.addFieldValue('causality', createdAdverseEventSuspectEntityCausality);
    return createdAdverseEventSuspectEntityCausality;
  }

  /** The first AdverseEventSuspectEntityCausality of `causality`. One is added when the list is empty. */
  getCausalityFirstRep(): AdverseEventSuspectEntityCausality {
    const firstAdverseEventSuspectEntityCausality = this.getCausality()[0];
    return firstAdverseEventSuspectEntityCausality === undefined
      ? this.addCausality()
      : firstAdverseEventSuspectEntityCausality;
  }
}

modelTypeRegistry.register('AdverseEventSuspectEntity', AdverseEventSuspectEntity, false);

/**
 * Information on the possible cause of the event
 */
export class AdverseEventSuspectEntityCausality extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'assessment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'assessment', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'productRelatedness',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'productRelatedness', typeCode: 'string' }],
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
          targetResourceTypes: ['Practitioner', 'PractitionerRole'],
        },
      ],
    },
    {
      elementName: 'method',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'method', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Assessment of if the entity caused the event (0..1) */
  assessment?: CodeableConcept;

  /** AdverseEvent.suspectEntity.causalityProductRelatedness (0..1) */
  productRelatedness?: string;
  /** Id and extensions of the primitive `productRelatedness`. */
  _productRelatedness?: Element;

  /** AdverseEvent.suspectEntity.causalityAuthor (0..1) */
  author?: Reference;

  /** ProbabilityScale | Bayesian | Checklist (0..1) */
  method?: CodeableConcept;

  override fhirType(): string {
    return 'AdverseEvent.suspectEntity.causality';
  }

  /** FHIR JSON for this AdverseEventSuspectEntityCausality, typed as the plain `AdverseEventCausality` data type. */
  override toJSON(): plainTypes.AdverseEventCausality {
    return this.serialize() as plainTypes.AdverseEventCausality;
  }

  /** Assessment of if the entity caused the event (0..1) Created when absent. */
  getAssessment(): CodeableConcept {
    if (this.assessment === undefined) {
      this.assessment = new CodeableConcept();
    }
    return this.assessment;
  }

  setAssessment(assessment: CodeableConcept | undefined): this {
    return this.setFieldValue('assessment', assessment);
  }

  hasAssessment(): boolean {
    return this.hasFieldValue('assessment');
  }

  /** AdverseEvent.suspectEntity.causalityProductRelatedness (0..1) */
  getProductRelatedness(): string | undefined {
    return this.productRelatedness;
  }

  /** Sets `productRelatedness`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setProductRelatedness(productRelatedness: string | undefined): this {
    return this.setFieldValue('productRelatedness', productRelatedness);
  }

  hasProductRelatedness(): boolean {
    return this.hasFieldValue('productRelatedness');
  }

  /** The element carrying the id and extensions of `productRelatedness`. Created when absent. */
  getProductRelatednessElement(): Element {
    if (this._productRelatedness === undefined) {
      this._productRelatedness = new Element();
    }
    return this._productRelatedness;
  }

  setProductRelatednessElement(productRelatednessElement: Element | undefined): this {
    this._productRelatedness = productRelatednessElement;
    return this;
  }

  /** AdverseEvent.suspectEntity.causalityAuthor (0..1) Created when absent. */
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

  /** ProbabilityScale | Bayesian | Checklist (0..1) Created when absent. */
  getMethod(): CodeableConcept {
    if (this.method === undefined) {
      this.method = new CodeableConcept();
    }
    return this.method;
  }

  setMethod(method: CodeableConcept | undefined): this {
    return this.setFieldValue('method', method);
  }

  hasMethod(): boolean {
    return this.hasFieldValue('method');
  }
}

modelTypeRegistry.register(
  'AdverseEventSuspectEntityCausality',
  AdverseEventSuspectEntityCausality,
  false
);
