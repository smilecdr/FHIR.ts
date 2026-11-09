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
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Reference } from './reference';

/**
 * Base StructureDefinition for AdverseEvent Resource
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
      elementName: 'category',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'category', typeCode: 'code', allowedCodes: valueSetCodes.AdverseEventCategory },
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
      elementName: 'subject',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'subject',
          typeCode: 'Reference',
          targetResourceTypes: ['Device', 'Medication', 'Patient', 'ResearchSubject'],
        },
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
      elementName: 'reaction',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reaction', typeCode: 'Reference', targetResourceTypes: ['Condition'] }],
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
          targetResourceTypes: ['Patient', 'Practitioner', 'RelatedPerson'],
        },
      ],
    },
    {
      elementName: 'eventParticipant',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'eventParticipant',
          typeCode: 'Reference',
          targetResourceTypes: ['Device', 'Practitioner'],
        },
      ],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
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
            'FamilyMemberHistory',
            'Immunization',
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

  /** AE | PAE An adverse event is an event that caused harm to a patient, an adverse reaction is a something that is a subject-specific event that is a result of an exposure to a medication, food, device or environmental substance, a potential adverse event is something that occurred and that could have caused harm to a patient but did not (0..1) */
  category?: valueSetCodes.AdverseEventCategory;
  /** Id and extensions of the primitive `category`. */
  _category?: Element;

  /** actual | potential (0..1) */
  type?: CodeableConcept;

  /** Subject or group impacted by event (0..1) */
  subject?: Reference;

  /** When the event occurred (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Adverse Reaction Events linked to exposure to substance (0..*) */
  reaction?: Reference[];

  /** Location where adverse event occurred (0..1) */
  location?: Reference;

  /** Mild | Moderate | Severe (0..1) */
  seriousness?: CodeableConcept;

  /** resolved | recovering | ongoing | resolvedWithSequelae | fatal | unknown (0..1) */
  outcome?: CodeableConcept;

  /** Who recorded the adverse event (0..1) */
  recorder?: Reference;

  /** Who was involved in the adverse event or the potential adverse event (0..1) */
  eventParticipant?: Reference;

  /** Description of the adverse event (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

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

  /** AE | PAE An adverse event is an event that caused harm to a patient, an adverse reaction is a something that is a subject-specific event that is a result of an exposure to a medication, food, device or environmental substance, a potential adverse event is something that occurred and that could have caused harm to a patient but did not (0..1) */
  getCategory(): valueSetCodes.AdverseEventCategory | undefined {
    return this.category;
  }

  /** Sets `category`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setCategory(category: valueSetCodes.AdverseEventCategory | undefined): this {
    return this.setFieldValue('category', category);
  }

  hasCategory(): boolean {
    return this.hasFieldValue('category');
  }

  /** The element carrying the id and extensions of `category`. Created when absent. */
  getCategoryElement(): Element {
    if (this._category === undefined) {
      this._category = new Element();
    }
    return this._category;
  }

  setCategoryElement(categoryElement: Element | undefined): this {
    this._category = categoryElement;
    return this;
  }

  /** actual | potential (0..1) Created when absent. */
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

  /** Subject or group impacted by event (0..1) Created when absent. */
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

  /** Adverse Reaction Events linked to exposure to substance (0..*) Never undefined; an empty list is created when absent. */
  getReaction(): Reference[] {
    if (this.reaction === undefined) {
      this.reaction = [];
    }
    return this.reaction;
  }

  setReaction(reaction: Reference[] | undefined): this {
    return this.setFieldValue('reaction', reaction);
  }

  hasReaction(): boolean {
    return this.hasFieldValue('reaction');
  }

  /** Appends a new, empty Reference to `reaction` and returns it so it can be filled in. */
  addReaction(): Reference;
  /** Appends the given Reference to `reaction` and returns this object for chaining. */
  addReaction(reference: Reference): this;
  addReaction(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('reaction', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('reaction', createdReference);
    return createdReference;
  }

  /** The first Reference of `reaction`. One is added when the list is empty. */
  getReactionFirstRep(): Reference {
    const firstReference = this.getReaction()[0];
    return firstReference === undefined ? this.addReaction() : firstReference;
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

  /** Mild | Moderate | Severe (0..1) Created when absent. */
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

  /** Who was involved in the adverse event or the potential adverse event (0..1) Created when absent. */
  getEventParticipant(): Reference {
    if (this.eventParticipant === undefined) {
      this.eventParticipant = new Reference();
    }
    return this.eventParticipant;
  }

  setEventParticipant(eventParticipant: Reference | undefined): this {
    return this.setFieldValue('eventParticipant', eventParticipant);
  }

  hasEventParticipant(): boolean {
    return this.hasFieldValue('eventParticipant');
  }

  /** Description of the adverse event (0..1) */
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
            'Medication',
            'MedicationAdministration',
            'MedicationStatement',
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
      types: [
        {
          jsonKey: 'causality',
          typeCode: 'code',
          allowedCodes: valueSetCodes.AdverseEventCausality,
        },
      ],
    },
    {
      elementName: 'causalityAssessment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'causalityAssessment', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'causalityProductRelatedness',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'causalityProductRelatedness', typeCode: 'string' }],
    },
    {
      elementName: 'causalityMethod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'causalityMethod', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'causalityAuthor',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'causalityAuthor',
          typeCode: 'Reference',
          targetResourceTypes: ['Practitioner', 'PractitionerRole'],
        },
      ],
    },
    {
      elementName: 'causalityResult',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'causalityResult', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Refers to the specific entity that caused the adverse event (1..1) */
  instance?: Reference;

  /** causality1 | causality2 (0..1) */
  causality?: valueSetCodes.AdverseEventCausality;
  /** Id and extensions of the primitive `causality`. */
  _causality?: Element;

  /** assess1 | assess2 (0..1) */
  causalityAssessment?: CodeableConcept;

  /** AdverseEvent.suspectEntity.causalityProductRelatedness (0..1) */
  causalityProductRelatedness?: string;
  /** Id and extensions of the primitive `causalityProductRelatedness`. */
  _causalityProductRelatedness?: Element;

  /** method1 | method2 (0..1) */
  causalityMethod?: CodeableConcept;

  /** AdverseEvent.suspectEntity.causalityAuthor (0..1) */
  causalityAuthor?: Reference;

  /** result1 | result2 (0..1) */
  causalityResult?: CodeableConcept;

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

  /** causality1 | causality2 (0..1) */
  getCausality(): valueSetCodes.AdverseEventCausality | undefined {
    return this.causality;
  }

  /** Sets `causality`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setCausality(causality: valueSetCodes.AdverseEventCausality | undefined): this {
    return this.setFieldValue('causality', causality);
  }

  hasCausality(): boolean {
    return this.hasFieldValue('causality');
  }

  /** The element carrying the id and extensions of `causality`. Created when absent. */
  getCausalityElement(): Element {
    if (this._causality === undefined) {
      this._causality = new Element();
    }
    return this._causality;
  }

  setCausalityElement(causalityElement: Element | undefined): this {
    this._causality = causalityElement;
    return this;
  }

  /** assess1 | assess2 (0..1) Created when absent. */
  getCausalityAssessment(): CodeableConcept {
    if (this.causalityAssessment === undefined) {
      this.causalityAssessment = new CodeableConcept();
    }
    return this.causalityAssessment;
  }

  setCausalityAssessment(causalityAssessment: CodeableConcept | undefined): this {
    return this.setFieldValue('causalityAssessment', causalityAssessment);
  }

  hasCausalityAssessment(): boolean {
    return this.hasFieldValue('causalityAssessment');
  }

  /** AdverseEvent.suspectEntity.causalityProductRelatedness (0..1) */
  getCausalityProductRelatedness(): string | undefined {
    return this.causalityProductRelatedness;
  }

  /** Sets `causalityProductRelatedness`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setCausalityProductRelatedness(causalityProductRelatedness: string | undefined): this {
    return this.setFieldValue('causalityProductRelatedness', causalityProductRelatedness);
  }

  hasCausalityProductRelatedness(): boolean {
    return this.hasFieldValue('causalityProductRelatedness');
  }

  /** The element carrying the id and extensions of `causalityProductRelatedness`. Created when absent. */
  getCausalityProductRelatednessElement(): Element {
    if (this._causalityProductRelatedness === undefined) {
      this._causalityProductRelatedness = new Element();
    }
    return this._causalityProductRelatedness;
  }

  setCausalityProductRelatednessElement(
    causalityProductRelatednessElement: Element | undefined
  ): this {
    this._causalityProductRelatedness = causalityProductRelatednessElement;
    return this;
  }

  /** method1 | method2 (0..1) Created when absent. */
  getCausalityMethod(): CodeableConcept {
    if (this.causalityMethod === undefined) {
      this.causalityMethod = new CodeableConcept();
    }
    return this.causalityMethod;
  }

  setCausalityMethod(causalityMethod: CodeableConcept | undefined): this {
    return this.setFieldValue('causalityMethod', causalityMethod);
  }

  hasCausalityMethod(): boolean {
    return this.hasFieldValue('causalityMethod');
  }

  /** AdverseEvent.suspectEntity.causalityAuthor (0..1) Created when absent. */
  getCausalityAuthor(): Reference {
    if (this.causalityAuthor === undefined) {
      this.causalityAuthor = new Reference();
    }
    return this.causalityAuthor;
  }

  setCausalityAuthor(causalityAuthor: Reference | undefined): this {
    return this.setFieldValue('causalityAuthor', causalityAuthor);
  }

  hasCausalityAuthor(): boolean {
    return this.hasFieldValue('causalityAuthor');
  }

  /** result1 | result2 (0..1) Created when absent. */
  getCausalityResult(): CodeableConcept {
    if (this.causalityResult === undefined) {
      this.causalityResult = new CodeableConcept();
    }
    return this.causalityResult;
  }

  setCausalityResult(causalityResult: CodeableConcept | undefined): this {
    return this.setFieldValue('causalityResult', causalityResult);
  }

  hasCausalityResult(): boolean {
    return this.hasFieldValue('causalityResult');
  }
}

modelTypeRegistry.register('AdverseEventSuspectEntity', AdverseEventSuspectEntity, false);
