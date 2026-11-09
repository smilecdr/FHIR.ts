/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
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
 * Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance.
 */
export class AllergyIntolerance extends DomainResource {
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
      types: [{ jsonKey: 'clinicalStatus', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'verificationStatus',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'verificationStatus', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.AllergyIntoleranceType },
      ],
    },
    {
      elementName: 'category',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'category',
          typeCode: 'code',
          allowedCodes: valueSetCodes.AllergyIntoleranceCategory,
        },
      ],
    },
    {
      elementName: 'criticality',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'criticality',
          typeCode: 'code',
          allowedCodes: valueSetCodes.AllergyIntoleranceCriticality,
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
      elementName: 'patient',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'patient', typeCode: 'Reference', targetResourceTypes: ['Patient'] }],
    },
    {
      elementName: 'encounter',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'encounter', typeCode: 'Reference', targetResourceTypes: ['Encounter'] }],
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
      elementName: 'recordedDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'recordedDate', typeCode: 'dateTime' }],
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
      elementName: 'asserter',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'asserter',
          typeCode: 'Reference',
          targetResourceTypes: ['Patient', 'Practitioner', 'PractitionerRole', 'RelatedPerson'],
        },
      ],
    },
    {
      elementName: 'lastOccurrence',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'lastOccurrence', typeCode: 'dateTime' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
    {
      elementName: 'reaction',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reaction', typeCode: 'AllergyIntoleranceReaction' }],
    },
  ];

  readonly resourceType = 'AllergyIntolerance';

  /** External ids for this item (0..*) */
  identifier?: Identifier[];

  /** active | inactive | resolved (0..1) */
  clinicalStatus?: CodeableConcept;

  /** unconfirmed | confirmed | refuted | entered-in-error (0..1) */
  verificationStatus?: CodeableConcept;

  /** allergy | intolerance - Underlying mechanism (if known) (0..1) */
  type?: valueSetCodes.AllergyIntoleranceType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** food | medication | environment | biologic (0..*) */
  category?: valueSetCodes.AllergyIntoleranceCategory[];
  /** Id and extensions of the primitive `category`. */
  _category?: (Element | null)[];

  /** low | high | unable-to-assess (0..1) */
  criticality?: valueSetCodes.AllergyIntoleranceCriticality;
  /** Id and extensions of the primitive `criticality`. */
  _criticality?: Element;

  /** Code that identifies the allergy or intolerance (0..1) */
  code?: CodeableConcept;

  /** Who the sensitivity is for (1..1) */
  patient?: Reference;

  /** Encounter when the allergy or intolerance was asserted (0..1) */
  encounter?: Reference;

  /** When allergy or intolerance was identified (0..1) */
  onsetDateTime?: string;
  /** Id and extensions of the primitive `onsetDateTime`. */
  _onsetDateTime?: Element;
  /** When allergy or intolerance was identified (0..1) */
  onsetAge?: Age;
  /** When allergy or intolerance was identified (0..1) */
  onsetPeriod?: Period;
  /** When allergy or intolerance was identified (0..1) */
  onsetRange?: Range;
  /** When allergy or intolerance was identified (0..1) */
  onsetString?: string;
  /** Id and extensions of the primitive `onsetString`. */
  _onsetString?: Element;

  /** Date first version of the resource instance was recorded (0..1) */
  recordedDate?: string;
  /** Id and extensions of the primitive `recordedDate`. */
  _recordedDate?: Element;

  /** Who recorded the sensitivity (0..1) */
  recorder?: Reference;

  /** Source of the information about the allergy (0..1) */
  asserter?: Reference;

  /** Date(/time) of last known occurrence of a reaction (0..1) */
  lastOccurrence?: string;
  /** Id and extensions of the primitive `lastOccurrence`. */
  _lastOccurrence?: Element;

  /** Additional text not captured in other fields (0..*) */
  note?: Annotation[];

  /** Adverse Reaction Events linked to exposure to substance (0..*) */
  reaction?: AllergyIntoleranceReaction[];

  override fhirType(): string {
    return 'AllergyIntolerance';
  }

  /** FHIR JSON for this AllergyIntolerance, typed as the plain `AllergyIntolerance` data type. */
  override toJSON(): plainTypes.AllergyIntolerance {
    return this.serialize() as plainTypes.AllergyIntolerance;
  }

  /** External ids for this item (0..*) Never undefined; an empty list is created when absent. */
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

  /** active | inactive | resolved (0..1) Created when absent. */
  getClinicalStatus(): CodeableConcept {
    if (this.clinicalStatus === undefined) {
      this.clinicalStatus = new CodeableConcept();
    }
    return this.clinicalStatus;
  }

  setClinicalStatus(clinicalStatus: CodeableConcept | undefined): this {
    return this.setFieldValue('clinicalStatus', clinicalStatus);
  }

  hasClinicalStatus(): boolean {
    return this.hasFieldValue('clinicalStatus');
  }

  /** unconfirmed | confirmed | refuted | entered-in-error (0..1) Created when absent. */
  getVerificationStatus(): CodeableConcept {
    if (this.verificationStatus === undefined) {
      this.verificationStatus = new CodeableConcept();
    }
    return this.verificationStatus;
  }

  setVerificationStatus(verificationStatus: CodeableConcept | undefined): this {
    return this.setFieldValue('verificationStatus', verificationStatus);
  }

  hasVerificationStatus(): boolean {
    return this.hasFieldValue('verificationStatus');
  }

  /** allergy | intolerance - Underlying mechanism (if known) (0..1) */
  getType(): valueSetCodes.AllergyIntoleranceType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.AllergyIntoleranceType | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** The element carrying the id and extensions of `type`. Created when absent. */
  getTypeElement(): Element {
    if (this._type === undefined) {
      this._type = new Element();
    }
    return this._type;
  }

  setTypeElement(typeElement: Element | undefined): this {
    this._type = typeElement;
    return this;
  }

  /** food | medication | environment | biologic (0..*) Never undefined; an empty list is created when absent. */
  getCategory(): valueSetCodes.AllergyIntoleranceCategory[] {
    if (this.category === undefined) {
      this.category = [];
    }
    return this.category;
  }

  setCategory(category: valueSetCodes.AllergyIntoleranceCategory[] | undefined): this {
    return this.setFieldValue('category', category);
  }

  hasCategory(): boolean {
    return this.hasFieldValue('category');
  }

  /** Appends one value to `category`. Throws a FhirModelError when it is not a valid FHIR code. */
  addCategory(category: valueSetCodes.AllergyIntoleranceCategory): this {
    return this.addFieldValue('category', category);
  }

  /** low | high | unable-to-assess (0..1) */
  getCriticality(): valueSetCodes.AllergyIntoleranceCriticality | undefined {
    return this.criticality;
  }

  /** Sets `criticality`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setCriticality(criticality: valueSetCodes.AllergyIntoleranceCriticality | undefined): this {
    return this.setFieldValue('criticality', criticality);
  }

  hasCriticality(): boolean {
    return this.hasFieldValue('criticality');
  }

  /** The element carrying the id and extensions of `criticality`. Created when absent. */
  getCriticalityElement(): Element {
    if (this._criticality === undefined) {
      this._criticality = new Element();
    }
    return this._criticality;
  }

  setCriticalityElement(criticalityElement: Element | undefined): this {
    this._criticality = criticalityElement;
    return this;
  }

  /** Code that identifies the allergy or intolerance (0..1) Created when absent. */
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

  /** Who the sensitivity is for (1..1) Created when absent. */
  getPatient(): Reference {
    if (this.patient === undefined) {
      this.patient = new Reference();
    }
    return this.patient;
  }

  setPatient(patient: Reference | undefined): this {
    return this.setFieldValue('patient', patient);
  }

  hasPatient(): boolean {
    return this.hasFieldValue('patient');
  }

  /** Encounter when the allergy or intolerance was asserted (0..1) Created when absent. */
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

  /** When allergy or intolerance was identified (0..1) Whichever type of `onset[x]` is set. */
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

  /** Date first version of the resource instance was recorded (0..1) */
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

  /** Who recorded the sensitivity (0..1) Created when absent. */
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

  /** Source of the information about the allergy (0..1) Created when absent. */
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

  /** Date(/time) of last known occurrence of a reaction (0..1) */
  getLastOccurrence(): string | undefined {
    return this.lastOccurrence;
  }

  /** Sets `lastOccurrence`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setLastOccurrence(lastOccurrence: string | undefined): this {
    return this.setFieldValue('lastOccurrence', lastOccurrence);
  }

  hasLastOccurrence(): boolean {
    return this.hasFieldValue('lastOccurrence');
  }

  /** The element carrying the id and extensions of `lastOccurrence`. Created when absent. */
  getLastOccurrenceElement(): Element {
    if (this._lastOccurrence === undefined) {
      this._lastOccurrence = new Element();
    }
    return this._lastOccurrence;
  }

  setLastOccurrenceElement(lastOccurrenceElement: Element | undefined): this {
    this._lastOccurrence = lastOccurrenceElement;
    return this;
  }

  /** Additional text not captured in other fields (0..*) Never undefined; an empty list is created when absent. */
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

  /** Adverse Reaction Events linked to exposure to substance (0..*) Never undefined; an empty list is created when absent. */
  getReaction(): AllergyIntoleranceReaction[] {
    if (this.reaction === undefined) {
      this.reaction = [];
    }
    return this.reaction;
  }

  setReaction(reaction: AllergyIntoleranceReaction[] | undefined): this {
    return this.setFieldValue('reaction', reaction);
  }

  hasReaction(): boolean {
    return this.hasFieldValue('reaction');
  }

  /** Appends a new, empty AllergyIntoleranceReaction to `reaction` and returns it so it can be filled in. */
  addReaction(): AllergyIntoleranceReaction;
  /** Appends the given AllergyIntoleranceReaction to `reaction` and returns this object for chaining. */
  addReaction(allergyIntoleranceReaction: AllergyIntoleranceReaction): this;
  addReaction(
    allergyIntoleranceReaction?: AllergyIntoleranceReaction
  ): AllergyIntoleranceReaction | this {
    if (allergyIntoleranceReaction !== undefined) {
      return this.addFieldValue('reaction', allergyIntoleranceReaction);
    }
    const createdAllergyIntoleranceReaction = new AllergyIntoleranceReaction();
    this.addFieldValue('reaction', createdAllergyIntoleranceReaction);
    return createdAllergyIntoleranceReaction;
  }

  /** The first AllergyIntoleranceReaction of `reaction`. One is added when the list is empty. */
  getReactionFirstRep(): AllergyIntoleranceReaction {
    const firstAllergyIntoleranceReaction = this.getReaction()[0];
    return firstAllergyIntoleranceReaction === undefined
      ? this.addReaction()
      : firstAllergyIntoleranceReaction;
  }
}

modelTypeRegistry.register('AllergyIntolerance', AllergyIntolerance, true);

/** True when the value is a AllergyIntolerance model instance. */
export function isAllergyIntolerance(candidate: unknown): candidate is AllergyIntolerance {
  return candidate instanceof AllergyIntolerance;
}

/**
 * Adverse Reaction Events linked to exposure to substance
 */
export class AllergyIntoleranceReaction extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'substance',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'substance', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'manifestation',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'manifestation', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'onset',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'onset', typeCode: 'dateTime' }],
    },
    {
      elementName: 'severity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'severity',
          typeCode: 'code',
          allowedCodes: valueSetCodes.AllergyIntoleranceSeverity,
        },
      ],
    },
    {
      elementName: 'exposureRoute',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'exposureRoute', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
  ];

  /** Specific substance or pharmaceutical product considered to be responsible for event (0..1) */
  substance?: CodeableConcept;

  /** Clinical symptoms/signs associated with the Event (1..*) */
  manifestation?: CodeableConcept[];

  /** Description of the event as a whole (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Date(/time) when manifestations showed (0..1) */
  onset?: string;
  /** Id and extensions of the primitive `onset`. */
  _onset?: Element;

  /** mild | moderate | severe (of event as a whole) (0..1) */
  severity?: valueSetCodes.AllergyIntoleranceSeverity;
  /** Id and extensions of the primitive `severity`. */
  _severity?: Element;

  /** How the subject was exposed to the substance (0..1) */
  exposureRoute?: CodeableConcept;

  /** Text about event not captured in other fields (0..*) */
  note?: Annotation[];

  override fhirType(): string {
    return 'AllergyIntolerance.reaction';
  }

  /** FHIR JSON for this AllergyIntoleranceReaction, typed as the plain `AllergyIntoleranceReaction` data type. */
  override toJSON(): plainTypes.AllergyIntoleranceReaction {
    return this.serialize() as plainTypes.AllergyIntoleranceReaction;
  }

  /** Specific substance or pharmaceutical product considered to be responsible for event (0..1) Created when absent. */
  getSubstance(): CodeableConcept {
    if (this.substance === undefined) {
      this.substance = new CodeableConcept();
    }
    return this.substance;
  }

  setSubstance(substance: CodeableConcept | undefined): this {
    return this.setFieldValue('substance', substance);
  }

  hasSubstance(): boolean {
    return this.hasFieldValue('substance');
  }

  /** Clinical symptoms/signs associated with the Event (1..*) Never undefined; an empty list is created when absent. */
  getManifestation(): CodeableConcept[] {
    if (this.manifestation === undefined) {
      this.manifestation = [];
    }
    return this.manifestation;
  }

  setManifestation(manifestation: CodeableConcept[] | undefined): this {
    return this.setFieldValue('manifestation', manifestation);
  }

  hasManifestation(): boolean {
    return this.hasFieldValue('manifestation');
  }

  /** Appends a new, empty CodeableConcept to `manifestation` and returns it so it can be filled in. */
  addManifestation(): CodeableConcept;
  /** Appends the given CodeableConcept to `manifestation` and returns this object for chaining. */
  addManifestation(codeableConcept: CodeableConcept): this;
  addManifestation(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('manifestation', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('manifestation', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `manifestation`. One is added when the list is empty. */
  getManifestationFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getManifestation()[0];
    return firstCodeableConcept === undefined ? this.addManifestation() : firstCodeableConcept;
  }

  /** Description of the event as a whole (0..1) */
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

  /** Date(/time) when manifestations showed (0..1) */
  getOnset(): string | undefined {
    return this.onset;
  }

  /** Sets `onset`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setOnset(onset: string | undefined): this {
    return this.setFieldValue('onset', onset);
  }

  hasOnset(): boolean {
    return this.hasFieldValue('onset');
  }

  /** The element carrying the id and extensions of `onset`. Created when absent. */
  getOnsetElement(): Element {
    if (this._onset === undefined) {
      this._onset = new Element();
    }
    return this._onset;
  }

  setOnsetElement(onsetElement: Element | undefined): this {
    this._onset = onsetElement;
    return this;
  }

  /** mild | moderate | severe (of event as a whole) (0..1) */
  getSeverity(): valueSetCodes.AllergyIntoleranceSeverity | undefined {
    return this.severity;
  }

  /** Sets `severity`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setSeverity(severity: valueSetCodes.AllergyIntoleranceSeverity | undefined): this {
    return this.setFieldValue('severity', severity);
  }

  hasSeverity(): boolean {
    return this.hasFieldValue('severity');
  }

  /** The element carrying the id and extensions of `severity`. Created when absent. */
  getSeverityElement(): Element {
    if (this._severity === undefined) {
      this._severity = new Element();
    }
    return this._severity;
  }

  setSeverityElement(severityElement: Element | undefined): this {
    this._severity = severityElement;
    return this;
  }

  /** How the subject was exposed to the substance (0..1) Created when absent. */
  getExposureRoute(): CodeableConcept {
    if (this.exposureRoute === undefined) {
      this.exposureRoute = new CodeableConcept();
    }
    return this.exposureRoute;
  }

  setExposureRoute(exposureRoute: CodeableConcept | undefined): this {
    return this.setFieldValue('exposureRoute', exposureRoute);
  }

  hasExposureRoute(): boolean {
    return this.hasFieldValue('exposureRoute');
  }

  /** Text about event not captured in other fields (0..*) Never undefined; an empty list is created when absent. */
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

modelTypeRegistry.register('AllergyIntoleranceReaction', AllergyIntoleranceReaction, false);
