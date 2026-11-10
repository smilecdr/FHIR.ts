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
import { Quantity } from './quantity';
import { Range } from './range';
import { Ratio } from './ratio';
import { Reference } from './reference';
import { SampledData } from './sampledData';
import { Timing } from './timing';

/**
 * Measurements and simple assertions made about a patient, device or other subject.
 */
export class Observation extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'instantiates',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'instantiatesCanonical', typeCode: 'canonical' },
        {
          jsonKey: 'instantiatesReference',
          typeCode: 'Reference',
          targetResourceTypes: ['ObservationDefinition'],
        },
      ],
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
            'DeviceRequest',
            'ImmunizationRecommendation',
            'MedicationRequest',
            'NutritionOrder',
            'ServiceRequest',
          ],
        },
      ],
    },
    {
      elementName: 'triggeredBy',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'triggeredBy', typeCode: 'ObservationTriggeredBy' }],
    },
    {
      elementName: 'partOf',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'partOf',
          typeCode: 'Reference',
          targetResourceTypes: [
            'GenomicStudy',
            'ImagingStudy',
            'Immunization',
            'MedicationAdministration',
            'MedicationDispense',
            'MedicationStatement',
            'Procedure',
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
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.ObservationStatus },
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
            'NutritionProduct',
            'Organization',
            'Patient',
            'Practitioner',
            'Procedure',
            'Substance',
          ],
        },
      ],
    },
    {
      elementName: 'focus',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'focus', typeCode: 'Reference' }],
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
        { jsonKey: 'effectiveTiming', typeCode: 'Timing' },
        { jsonKey: 'effectiveInstant', typeCode: 'instant' },
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
          targetResourceTypes: [
            'CareTeam',
            'Organization',
            'Patient',
            'Practitioner',
            'PractitionerRole',
            'RelatedPerson',
          ],
        },
      ],
    },
    {
      elementName: 'value',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'valueQuantity', typeCode: 'Quantity' },
        { jsonKey: 'valueCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'valueString', typeCode: 'string' },
        { jsonKey: 'valueBoolean', typeCode: 'boolean' },
        { jsonKey: 'valueInteger', typeCode: 'integer' },
        { jsonKey: 'valueRange', typeCode: 'Range' },
        { jsonKey: 'valueRatio', typeCode: 'Ratio' },
        { jsonKey: 'valueSampledData', typeCode: 'SampledData' },
        { jsonKey: 'valueTime', typeCode: 'time' },
        { jsonKey: 'valueDateTime', typeCode: 'dateTime' },
        { jsonKey: 'valuePeriod', typeCode: 'Period' },
        { jsonKey: 'valueAttachment', typeCode: 'Attachment' },
        {
          jsonKey: 'valueReference',
          typeCode: 'Reference',
          targetResourceTypes: ['MolecularSequence'],
        },
      ],
    },
    {
      elementName: 'dataAbsentReason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'dataAbsentReason', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'interpretation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'interpretation', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
    {
      elementName: 'bodySite',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'bodySite', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'bodyStructure',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'bodyStructure', typeCode: 'Reference', targetResourceTypes: ['BodyStructure'] },
      ],
    },
    {
      elementName: 'method',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'method', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'specimen',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'specimen', typeCode: 'Reference', targetResourceTypes: ['Group', 'Specimen'] },
      ],
    },
    {
      elementName: 'device',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'device',
          typeCode: 'Reference',
          targetResourceTypes: ['Device', 'DeviceMetric'],
        },
      ],
    },
    {
      elementName: 'referenceRange',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'referenceRange', typeCode: 'ObservationReferenceRange' }],
    },
    {
      elementName: 'hasMember',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'hasMember',
          typeCode: 'Reference',
          targetResourceTypes: ['MolecularSequence', 'Observation', 'QuestionnaireResponse'],
        },
      ],
    },
    {
      elementName: 'derivedFrom',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'derivedFrom',
          typeCode: 'Reference',
          targetResourceTypes: [
            'DocumentReference',
            'GenomicStudy',
            'ImagingSelection',
            'ImagingStudy',
            'MolecularSequence',
            'Observation',
            'QuestionnaireResponse',
          ],
        },
      ],
    },
    {
      elementName: 'component',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'component', typeCode: 'ObservationComponent' }],
    },
  ];

  readonly resourceType = 'Observation';

  /** Business Identifier for observation (0..*) */
  identifier?: Identifier[];

  /** Instantiates FHIR ObservationDefinition (0..1) */
  instantiatesCanonical?: string;
  /** Id and extensions of the primitive `instantiatesCanonical`. */
  _instantiatesCanonical?: Element;
  /** Instantiates FHIR ObservationDefinition (0..1) */
  instantiatesReference?: Reference;

  /** Fulfills plan, proposal or order (0..*) */
  basedOn?: Reference[];

  /** Triggering observation(s) (0..*) */
  triggeredBy?: ObservationTriggeredBy[];

  /** Part of referenced event (0..*) */
  partOf?: Reference[];

  /** registered | preliminary | final | amended + (1..1) */
  status?: valueSetCodes.ObservationStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Classification of type of observation (0..*) */
  category?: CodeableConcept[];

  /** Type of observation (code / type) (1..1) */
  code?: CodeableConcept;

  /** Who and/or what the observation is about (0..1) */
  subject?: Reference;

  /** What the observation is about, when it is not about the subject of record (0..*) */
  focus?: Reference[];

  /** Healthcare event during which this observation is made (0..1) */
  encounter?: Reference;

  /** Clinically relevant time/time-period for observation (0..1) */
  effectiveDateTime?: string;
  /** Id and extensions of the primitive `effectiveDateTime`. */
  _effectiveDateTime?: Element;
  /** Clinically relevant time/time-period for observation (0..1) */
  effectivePeriod?: Period;
  /** Clinically relevant time/time-period for observation (0..1) */
  effectiveTiming?: Timing;
  /** Clinically relevant time/time-period for observation (0..1) */
  effectiveInstant?: string;
  /** Id and extensions of the primitive `effectiveInstant`. */
  _effectiveInstant?: Element;

  /** Date/Time this version was made available (0..1) */
  issued?: string;
  /** Id and extensions of the primitive `issued`. */
  _issued?: Element;

  /** Who is responsible for the observation (0..*) */
  performer?: Reference[];

  /** Actual result (0..1) */
  valueQuantity?: Quantity;
  /** Actual result (0..1) */
  valueCodeableConcept?: CodeableConcept;
  /** Actual result (0..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Actual result (0..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Actual result (0..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** Actual result (0..1) */
  valueRange?: Range;
  /** Actual result (0..1) */
  valueRatio?: Ratio;
  /** Actual result (0..1) */
  valueSampledData?: SampledData;
  /** Actual result (0..1) */
  valueTime?: string;
  /** Id and extensions of the primitive `valueTime`. */
  _valueTime?: Element;
  /** Actual result (0..1) */
  valueDateTime?: string;
  /** Id and extensions of the primitive `valueDateTime`. */
  _valueDateTime?: Element;
  /** Actual result (0..1) */
  valuePeriod?: Period;
  /** Actual result (0..1) */
  valueAttachment?: Attachment;
  /** Actual result (0..1) */
  valueReference?: Reference;

  /** Why the result is missing (0..1) */
  dataAbsentReason?: CodeableConcept;

  /** High, low, normal, etc (0..*) */
  interpretation?: CodeableConcept[];

  /** Comments about the observation (0..*) */
  note?: Annotation[];

  /** Observed body part (0..1) */
  bodySite?: CodeableConcept;

  /** Observed body structure (0..1) */
  bodyStructure?: Reference;

  /** How it was done (0..1) */
  method?: CodeableConcept;

  /** Specimen used for this observation (0..1) */
  specimen?: Reference;

  /** A reference to the device that generates the measurements or the device settings for the device (0..1) */
  device?: Reference;

  /** Provides guide for interpretation (0..*) */
  referenceRange?: ObservationReferenceRange[];

  /** Related resource that belongs to the Observation group (0..*) */
  hasMember?: Reference[];

  /** Related resource from which the observation is made (0..*) */
  derivedFrom?: Reference[];

  /** Component results (0..*) */
  component?: ObservationComponent[];

  override fhirType(): string {
    return 'Observation';
  }

  /** FHIR JSON for this Observation, typed as the plain `Observation` data type. */
  override toJSON(): plainTypes.Observation {
    return this.serialize() as plainTypes.Observation;
  }

  /** Business Identifier for observation (0..*) Never undefined; an empty list is created when absent. */
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

  /** Instantiates FHIR ObservationDefinition (0..1) Whichever type of `instantiates[x]` is set. */
  getInstantiates(): string | Reference | undefined {
    return this.getChoiceValue<string | Reference>('instantiates');
  }

  /** True when any type of `instantiates[x]` is set. */
  hasInstantiates(): boolean {
    return this.hasChoiceValue('instantiates');
  }

  getInstantiatesCanonical(): string | undefined {
    return this.instantiatesCanonical;
  }

  /** Sets `instantiates[x]` as canonical and clears every other type of it. */
  setInstantiatesCanonical(instantiatesCanonical: string | undefined): this {
    return this.setFieldValue('instantiatesCanonical', instantiatesCanonical);
  }

  hasInstantiatesCanonical(): boolean {
    return this.hasFieldValue('instantiatesCanonical');
  }

  getInstantiatesReference(): Reference | undefined {
    return this.instantiatesReference;
  }

  /** Sets `instantiates[x]` as Reference and clears every other type of it. */
  setInstantiatesReference(instantiatesReference: Reference | undefined): this {
    return this.setFieldValue('instantiatesReference', instantiatesReference);
  }

  hasInstantiatesReference(): boolean {
    return this.hasFieldValue('instantiatesReference');
  }

  /** Fulfills plan, proposal or order (0..*) Never undefined; an empty list is created when absent. */
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

  /** Triggering observation(s) (0..*) Never undefined; an empty list is created when absent. */
  getTriggeredBy(): ObservationTriggeredBy[] {
    if (this.triggeredBy === undefined) {
      this.triggeredBy = [];
    }
    return this.triggeredBy;
  }

  setTriggeredBy(triggeredBy: ObservationTriggeredBy[] | undefined): this {
    return this.setFieldValue('triggeredBy', triggeredBy);
  }

  hasTriggeredBy(): boolean {
    return this.hasFieldValue('triggeredBy');
  }

  /** Appends a new, empty ObservationTriggeredBy to `triggeredBy` and returns it so it can be filled in. */
  addTriggeredBy(): ObservationTriggeredBy;
  /** Appends the given ObservationTriggeredBy to `triggeredBy` and returns this object for chaining. */
  addTriggeredBy(observationTriggeredBy: ObservationTriggeredBy): this;
  addTriggeredBy(observationTriggeredBy?: ObservationTriggeredBy): ObservationTriggeredBy | this {
    if (observationTriggeredBy !== undefined) {
      return this.addFieldValue('triggeredBy', observationTriggeredBy);
    }
    const createdObservationTriggeredBy = new ObservationTriggeredBy();
    this.addFieldValue('triggeredBy', createdObservationTriggeredBy);
    return createdObservationTriggeredBy;
  }

  /** The first ObservationTriggeredBy of `triggeredBy`. One is added when the list is empty. */
  getTriggeredByFirstRep(): ObservationTriggeredBy {
    const firstObservationTriggeredBy = this.getTriggeredBy()[0];
    return firstObservationTriggeredBy === undefined
      ? this.addTriggeredBy()
      : firstObservationTriggeredBy;
  }

  /** Part of referenced event (0..*) Never undefined; an empty list is created when absent. */
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

  /** registered | preliminary | final | amended + (1..1) */
  getStatus(): valueSetCodes.ObservationStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.ObservationStatus | undefined): this {
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

  /** Classification of type of observation (0..*) Never undefined; an empty list is created when absent. */
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

  /** Type of observation (code / type) (1..1) Created when absent. */
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

  /** Who and/or what the observation is about (0..1) Created when absent. */
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

  /** What the observation is about, when it is not about the subject of record (0..*) Never undefined; an empty list is created when absent. */
  getFocus(): Reference[] {
    if (this.focus === undefined) {
      this.focus = [];
    }
    return this.focus;
  }

  setFocus(focus: Reference[] | undefined): this {
    return this.setFieldValue('focus', focus);
  }

  hasFocus(): boolean {
    return this.hasFieldValue('focus');
  }

  /** Appends a new, empty Reference to `focus` and returns it so it can be filled in. */
  addFocus(): Reference;
  /** Appends the given Reference to `focus` and returns this object for chaining. */
  addFocus(reference: Reference): this;
  addFocus(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('focus', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('focus', createdReference);
    return createdReference;
  }

  /** The first Reference of `focus`. One is added when the list is empty. */
  getFocusFirstRep(): Reference {
    const firstReference = this.getFocus()[0];
    return firstReference === undefined ? this.addFocus() : firstReference;
  }

  /** Healthcare event during which this observation is made (0..1) Created when absent. */
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

  /** Clinically relevant time/time-period for observation (0..1) Whichever type of `effective[x]` is set. */
  getEffective(): string | Period | Timing | undefined {
    return this.getChoiceValue<string | Period | Timing>('effective');
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

  getEffectiveTiming(): Timing | undefined {
    return this.effectiveTiming;
  }

  /** Sets `effective[x]` as Timing and clears every other type of it. */
  setEffectiveTiming(effectiveTiming: Timing | undefined): this {
    return this.setFieldValue('effectiveTiming', effectiveTiming);
  }

  hasEffectiveTiming(): boolean {
    return this.hasFieldValue('effectiveTiming');
  }

  getEffectiveInstant(): string | undefined {
    return this.effectiveInstant;
  }

  /** Sets `effective[x]` as instant and clears every other type of it. */
  setEffectiveInstant(effectiveInstant: string | undefined): this {
    return this.setFieldValue('effectiveInstant', effectiveInstant);
  }

  hasEffectiveInstant(): boolean {
    return this.hasFieldValue('effectiveInstant');
  }

  /** Date/Time this version was made available (0..1) */
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

  /** Who is responsible for the observation (0..*) Never undefined; an empty list is created when absent. */
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

  /** Actual result (0..1) Whichever type of `value[x]` is set. */
  getValue():
    | Quantity
    | CodeableConcept
    | string
    | boolean
    | number
    | Range
    | Ratio
    | SampledData
    | Period
    | Attachment
    | Reference
    | undefined {
    return this.getChoiceValue<
      | Quantity
      | CodeableConcept
      | string
      | boolean
      | number
      | Range
      | Ratio
      | SampledData
      | Period
      | Attachment
      | Reference
    >('value');
  }

  /** True when any type of `value[x]` is set. */
  hasValue(): boolean {
    return this.hasChoiceValue('value');
  }

  getValueQuantity(): Quantity | undefined {
    return this.valueQuantity;
  }

  /** Sets `value[x]` as Quantity and clears every other type of it. */
  setValueQuantity(valueQuantity: Quantity | undefined): this {
    return this.setFieldValue('valueQuantity', valueQuantity);
  }

  hasValueQuantity(): boolean {
    return this.hasFieldValue('valueQuantity');
  }

  getValueCodeableConcept(): CodeableConcept | undefined {
    return this.valueCodeableConcept;
  }

  /** Sets `value[x]` as CodeableConcept and clears every other type of it. */
  setValueCodeableConcept(valueCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('valueCodeableConcept', valueCodeableConcept);
  }

  hasValueCodeableConcept(): boolean {
    return this.hasFieldValue('valueCodeableConcept');
  }

  getValueString(): string | undefined {
    return this.valueString;
  }

  /** Sets `value[x]` as string and clears every other type of it. */
  setValueString(valueString: string | undefined): this {
    return this.setFieldValue('valueString', valueString);
  }

  hasValueString(): boolean {
    return this.hasFieldValue('valueString');
  }

  getValueBoolean(): boolean | undefined {
    return this.valueBoolean;
  }

  /** Sets `value[x]` as boolean and clears every other type of it. */
  setValueBoolean(valueBoolean: boolean | undefined): this {
    return this.setFieldValue('valueBoolean', valueBoolean);
  }

  hasValueBoolean(): boolean {
    return this.hasFieldValue('valueBoolean');
  }

  getValueInteger(): number | undefined {
    return this.valueInteger;
  }

  /** Sets `value[x]` as integer and clears every other type of it. */
  setValueInteger(valueInteger: number | undefined): this {
    return this.setFieldValue('valueInteger', valueInteger);
  }

  hasValueInteger(): boolean {
    return this.hasFieldValue('valueInteger');
  }

  getValueRange(): Range | undefined {
    return this.valueRange;
  }

  /** Sets `value[x]` as Range and clears every other type of it. */
  setValueRange(valueRange: Range | undefined): this {
    return this.setFieldValue('valueRange', valueRange);
  }

  hasValueRange(): boolean {
    return this.hasFieldValue('valueRange');
  }

  getValueRatio(): Ratio | undefined {
    return this.valueRatio;
  }

  /** Sets `value[x]` as Ratio and clears every other type of it. */
  setValueRatio(valueRatio: Ratio | undefined): this {
    return this.setFieldValue('valueRatio', valueRatio);
  }

  hasValueRatio(): boolean {
    return this.hasFieldValue('valueRatio');
  }

  getValueSampledData(): SampledData | undefined {
    return this.valueSampledData;
  }

  /** Sets `value[x]` as SampledData and clears every other type of it. */
  setValueSampledData(valueSampledData: SampledData | undefined): this {
    return this.setFieldValue('valueSampledData', valueSampledData);
  }

  hasValueSampledData(): boolean {
    return this.hasFieldValue('valueSampledData');
  }

  getValueTime(): string | undefined {
    return this.valueTime;
  }

  /** Sets `value[x]` as time and clears every other type of it. */
  setValueTime(valueTime: string | undefined): this {
    return this.setFieldValue('valueTime', valueTime);
  }

  hasValueTime(): boolean {
    return this.hasFieldValue('valueTime');
  }

  getValueDateTime(): string | undefined {
    return this.valueDateTime;
  }

  /** Sets `value[x]` as dateTime and clears every other type of it. */
  setValueDateTime(valueDateTime: string | undefined): this {
    return this.setFieldValue('valueDateTime', valueDateTime);
  }

  hasValueDateTime(): boolean {
    return this.hasFieldValue('valueDateTime');
  }

  getValuePeriod(): Period | undefined {
    return this.valuePeriod;
  }

  /** Sets `value[x]` as Period and clears every other type of it. */
  setValuePeriod(valuePeriod: Period | undefined): this {
    return this.setFieldValue('valuePeriod', valuePeriod);
  }

  hasValuePeriod(): boolean {
    return this.hasFieldValue('valuePeriod');
  }

  getValueAttachment(): Attachment | undefined {
    return this.valueAttachment;
  }

  /** Sets `value[x]` as Attachment and clears every other type of it. */
  setValueAttachment(valueAttachment: Attachment | undefined): this {
    return this.setFieldValue('valueAttachment', valueAttachment);
  }

  hasValueAttachment(): boolean {
    return this.hasFieldValue('valueAttachment');
  }

  getValueReference(): Reference | undefined {
    return this.valueReference;
  }

  /** Sets `value[x]` as Reference and clears every other type of it. */
  setValueReference(valueReference: Reference | undefined): this {
    return this.setFieldValue('valueReference', valueReference);
  }

  hasValueReference(): boolean {
    return this.hasFieldValue('valueReference');
  }

  /** Why the result is missing (0..1) Created when absent. */
  getDataAbsentReason(): CodeableConcept {
    if (this.dataAbsentReason === undefined) {
      this.dataAbsentReason = new CodeableConcept();
    }
    return this.dataAbsentReason;
  }

  setDataAbsentReason(dataAbsentReason: CodeableConcept | undefined): this {
    return this.setFieldValue('dataAbsentReason', dataAbsentReason);
  }

  hasDataAbsentReason(): boolean {
    return this.hasFieldValue('dataAbsentReason');
  }

  /** High, low, normal, etc (0..*) Never undefined; an empty list is created when absent. */
  getInterpretation(): CodeableConcept[] {
    if (this.interpretation === undefined) {
      this.interpretation = [];
    }
    return this.interpretation;
  }

  setInterpretation(interpretation: CodeableConcept[] | undefined): this {
    return this.setFieldValue('interpretation', interpretation);
  }

  hasInterpretation(): boolean {
    return this.hasFieldValue('interpretation');
  }

  /** Appends a new, empty CodeableConcept to `interpretation` and returns it so it can be filled in. */
  addInterpretation(): CodeableConcept;
  /** Appends the given CodeableConcept to `interpretation` and returns this object for chaining. */
  addInterpretation(codeableConcept: CodeableConcept): this;
  addInterpretation(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('interpretation', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('interpretation', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `interpretation`. One is added when the list is empty. */
  getInterpretationFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getInterpretation()[0];
    return firstCodeableConcept === undefined ? this.addInterpretation() : firstCodeableConcept;
  }

  /** Comments about the observation (0..*) Never undefined; an empty list is created when absent. */
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

  /** Observed body part (0..1) Created when absent. */
  getBodySite(): CodeableConcept {
    if (this.bodySite === undefined) {
      this.bodySite = new CodeableConcept();
    }
    return this.bodySite;
  }

  setBodySite(bodySite: CodeableConcept | undefined): this {
    return this.setFieldValue('bodySite', bodySite);
  }

  hasBodySite(): boolean {
    return this.hasFieldValue('bodySite');
  }

  /** Observed body structure (0..1) Created when absent. */
  getBodyStructure(): Reference {
    if (this.bodyStructure === undefined) {
      this.bodyStructure = new Reference();
    }
    return this.bodyStructure;
  }

  setBodyStructure(bodyStructure: Reference | undefined): this {
    return this.setFieldValue('bodyStructure', bodyStructure);
  }

  hasBodyStructure(): boolean {
    return this.hasFieldValue('bodyStructure');
  }

  /** How it was done (0..1) Created when absent. */
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

  /** Specimen used for this observation (0..1) Created when absent. */
  getSpecimen(): Reference {
    if (this.specimen === undefined) {
      this.specimen = new Reference();
    }
    return this.specimen;
  }

  setSpecimen(specimen: Reference | undefined): this {
    return this.setFieldValue('specimen', specimen);
  }

  hasSpecimen(): boolean {
    return this.hasFieldValue('specimen');
  }

  /** A reference to the device that generates the measurements or the device settings for the device (0..1) Created when absent. */
  getDevice(): Reference {
    if (this.device === undefined) {
      this.device = new Reference();
    }
    return this.device;
  }

  setDevice(device: Reference | undefined): this {
    return this.setFieldValue('device', device);
  }

  hasDevice(): boolean {
    return this.hasFieldValue('device');
  }

  /** Provides guide for interpretation (0..*) Never undefined; an empty list is created when absent. */
  getReferenceRange(): ObservationReferenceRange[] {
    if (this.referenceRange === undefined) {
      this.referenceRange = [];
    }
    return this.referenceRange;
  }

  setReferenceRange(referenceRange: ObservationReferenceRange[] | undefined): this {
    return this.setFieldValue('referenceRange', referenceRange);
  }

  hasReferenceRange(): boolean {
    return this.hasFieldValue('referenceRange');
  }

  /** Appends a new, empty ObservationReferenceRange to `referenceRange` and returns it so it can be filled in. */
  addReferenceRange(): ObservationReferenceRange;
  /** Appends the given ObservationReferenceRange to `referenceRange` and returns this object for chaining. */
  addReferenceRange(observationReferenceRange: ObservationReferenceRange): this;
  addReferenceRange(
    observationReferenceRange?: ObservationReferenceRange
  ): ObservationReferenceRange | this {
    if (observationReferenceRange !== undefined) {
      return this.addFieldValue('referenceRange', observationReferenceRange);
    }
    const createdObservationReferenceRange = new ObservationReferenceRange();
    this.addFieldValue('referenceRange', createdObservationReferenceRange);
    return createdObservationReferenceRange;
  }

  /** The first ObservationReferenceRange of `referenceRange`. One is added when the list is empty. */
  getReferenceRangeFirstRep(): ObservationReferenceRange {
    const firstObservationReferenceRange = this.getReferenceRange()[0];
    return firstObservationReferenceRange === undefined
      ? this.addReferenceRange()
      : firstObservationReferenceRange;
  }

  /** Related resource that belongs to the Observation group (0..*) Never undefined; an empty list is created when absent. */
  getHasMember(): Reference[] {
    if (this.hasMember === undefined) {
      this.hasMember = [];
    }
    return this.hasMember;
  }

  setHasMember(hasMember: Reference[] | undefined): this {
    return this.setFieldValue('hasMember', hasMember);
  }

  hasHasMember(): boolean {
    return this.hasFieldValue('hasMember');
  }

  /** Appends a new, empty Reference to `hasMember` and returns it so it can be filled in. */
  addHasMember(): Reference;
  /** Appends the given Reference to `hasMember` and returns this object for chaining. */
  addHasMember(reference: Reference): this;
  addHasMember(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('hasMember', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('hasMember', createdReference);
    return createdReference;
  }

  /** The first Reference of `hasMember`. One is added when the list is empty. */
  getHasMemberFirstRep(): Reference {
    const firstReference = this.getHasMember()[0];
    return firstReference === undefined ? this.addHasMember() : firstReference;
  }

  /** Related resource from which the observation is made (0..*) Never undefined; an empty list is created when absent. */
  getDerivedFrom(): Reference[] {
    if (this.derivedFrom === undefined) {
      this.derivedFrom = [];
    }
    return this.derivedFrom;
  }

  setDerivedFrom(derivedFrom: Reference[] | undefined): this {
    return this.setFieldValue('derivedFrom', derivedFrom);
  }

  hasDerivedFrom(): boolean {
    return this.hasFieldValue('derivedFrom');
  }

  /** Appends a new, empty Reference to `derivedFrom` and returns it so it can be filled in. */
  addDerivedFrom(): Reference;
  /** Appends the given Reference to `derivedFrom` and returns this object for chaining. */
  addDerivedFrom(reference: Reference): this;
  addDerivedFrom(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('derivedFrom', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('derivedFrom', createdReference);
    return createdReference;
  }

  /** The first Reference of `derivedFrom`. One is added when the list is empty. */
  getDerivedFromFirstRep(): Reference {
    const firstReference = this.getDerivedFrom()[0];
    return firstReference === undefined ? this.addDerivedFrom() : firstReference;
  }

  /** Component results (0..*) Never undefined; an empty list is created when absent. */
  getComponent(): ObservationComponent[] {
    if (this.component === undefined) {
      this.component = [];
    }
    return this.component;
  }

  setComponent(component: ObservationComponent[] | undefined): this {
    return this.setFieldValue('component', component);
  }

  hasComponent(): boolean {
    return this.hasFieldValue('component');
  }

  /** Appends a new, empty ObservationComponent to `component` and returns it so it can be filled in. */
  addComponent(): ObservationComponent;
  /** Appends the given ObservationComponent to `component` and returns this object for chaining. */
  addComponent(observationComponent: ObservationComponent): this;
  addComponent(observationComponent?: ObservationComponent): ObservationComponent | this {
    if (observationComponent !== undefined) {
      return this.addFieldValue('component', observationComponent);
    }
    const createdObservationComponent = new ObservationComponent();
    this.addFieldValue('component', createdObservationComponent);
    return createdObservationComponent;
  }

  /** The first ObservationComponent of `component`. One is added when the list is empty. */
  getComponentFirstRep(): ObservationComponent {
    const firstObservationComponent = this.getComponent()[0];
    return firstObservationComponent === undefined
      ? this.addComponent()
      : firstObservationComponent;
  }
}

modelTypeRegistry.register('Observation', Observation, true);

/** True when the value is a Observation model instance. */
export function isObservation(candidate: unknown): candidate is Observation {
  return candidate instanceof Observation;
}

/**
 * Triggering observation(s)
 */
export class ObservationTriggeredBy extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'observation',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'observation', typeCode: 'Reference', targetResourceTypes: ['Observation'] },
      ],
    },
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.TriggeredBytype }],
    },
    {
      elementName: 'reason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reason', typeCode: 'string' }],
    },
  ];

  /** Triggering observation (1..1) */
  observation?: Reference;

  /** reflex | repeat | re-run (1..1) */
  type?: valueSetCodes.TriggeredBytype;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Reason that the observation was triggered (0..1) */
  reason?: string;
  /** Id and extensions of the primitive `reason`. */
  _reason?: Element;

  override fhirType(): string {
    return 'Observation.triggeredBy';
  }

  /** FHIR JSON for this ObservationTriggeredBy, typed as the plain `ObservationTriggeredBy` data type. */
  override toJSON(): plainTypes.ObservationTriggeredBy {
    return this.serialize() as plainTypes.ObservationTriggeredBy;
  }

  /** Triggering observation (1..1) Created when absent. */
  getObservation(): Reference {
    if (this.observation === undefined) {
      this.observation = new Reference();
    }
    return this.observation;
  }

  setObservation(observation: Reference | undefined): this {
    return this.setFieldValue('observation', observation);
  }

  hasObservation(): boolean {
    return this.hasFieldValue('observation');
  }

  /** reflex | repeat | re-run (1..1) */
  getType(): valueSetCodes.TriggeredBytype | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.TriggeredBytype | undefined): this {
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

  /** Reason that the observation was triggered (0..1) */
  getReason(): string | undefined {
    return this.reason;
  }

  /** Sets `reason`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setReason(reason: string | undefined): this {
    return this.setFieldValue('reason', reason);
  }

  hasReason(): boolean {
    return this.hasFieldValue('reason');
  }

  /** The element carrying the id and extensions of `reason`. Created when absent. */
  getReasonElement(): Element {
    if (this._reason === undefined) {
      this._reason = new Element();
    }
    return this._reason;
  }

  setReasonElement(reasonElement: Element | undefined): this {
    this._reason = reasonElement;
    return this;
  }
}

modelTypeRegistry.register('ObservationTriggeredBy', ObservationTriggeredBy, false);

/**
 * Provides guide for interpretation
 */
export class ObservationReferenceRange extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'low',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'low', typeCode: 'Quantity' }],
    },
    {
      elementName: 'high',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'high', typeCode: 'Quantity' }],
    },
    {
      elementName: 'normalValue',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'normalValue', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'appliesTo',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'appliesTo', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'age',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'age', typeCode: 'Range' }],
    },
    {
      elementName: 'text',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'text', typeCode: 'markdown' }],
    },
  ];

  /** Low Range, if relevant (0..1) */
  low?: Quantity;

  /** High Range, if relevant (0..1) */
  high?: Quantity;

  /** Normal value, if relevant (0..1) */
  normalValue?: CodeableConcept;

  /** Reference range qualifier (0..1) */
  type?: CodeableConcept;

  /** Reference range population (0..*) */
  appliesTo?: CodeableConcept[];

  /** Applicable age range, if relevant (0..1) */
  age?: Range;

  /** Text based reference range in an observation (0..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;

  override fhirType(): string {
    return 'Observation.referenceRange';
  }

  /** FHIR JSON for this ObservationReferenceRange, typed as the plain `ObservationReferenceRange` data type. */
  override toJSON(): plainTypes.ObservationReferenceRange {
    return this.serialize() as plainTypes.ObservationReferenceRange;
  }

  /** Low Range, if relevant (0..1) Created when absent. */
  getLow(): Quantity {
    if (this.low === undefined) {
      this.low = new Quantity();
    }
    return this.low;
  }

  setLow(low: Quantity | undefined): this {
    return this.setFieldValue('low', low);
  }

  hasLow(): boolean {
    return this.hasFieldValue('low');
  }

  /** High Range, if relevant (0..1) Created when absent. */
  getHigh(): Quantity {
    if (this.high === undefined) {
      this.high = new Quantity();
    }
    return this.high;
  }

  setHigh(high: Quantity | undefined): this {
    return this.setFieldValue('high', high);
  }

  hasHigh(): boolean {
    return this.hasFieldValue('high');
  }

  /** Normal value, if relevant (0..1) Created when absent. */
  getNormalValue(): CodeableConcept {
    if (this.normalValue === undefined) {
      this.normalValue = new CodeableConcept();
    }
    return this.normalValue;
  }

  setNormalValue(normalValue: CodeableConcept | undefined): this {
    return this.setFieldValue('normalValue', normalValue);
  }

  hasNormalValue(): boolean {
    return this.hasFieldValue('normalValue');
  }

  /** Reference range qualifier (0..1) Created when absent. */
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

  /** Reference range population (0..*) Never undefined; an empty list is created when absent. */
  getAppliesTo(): CodeableConcept[] {
    if (this.appliesTo === undefined) {
      this.appliesTo = [];
    }
    return this.appliesTo;
  }

  setAppliesTo(appliesTo: CodeableConcept[] | undefined): this {
    return this.setFieldValue('appliesTo', appliesTo);
  }

  hasAppliesTo(): boolean {
    return this.hasFieldValue('appliesTo');
  }

  /** Appends a new, empty CodeableConcept to `appliesTo` and returns it so it can be filled in. */
  addAppliesTo(): CodeableConcept;
  /** Appends the given CodeableConcept to `appliesTo` and returns this object for chaining. */
  addAppliesTo(codeableConcept: CodeableConcept): this;
  addAppliesTo(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('appliesTo', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('appliesTo', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `appliesTo`. One is added when the list is empty. */
  getAppliesToFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getAppliesTo()[0];
    return firstCodeableConcept === undefined ? this.addAppliesTo() : firstCodeableConcept;
  }

  /** Applicable age range, if relevant (0..1) Created when absent. */
  getAge(): Range {
    if (this.age === undefined) {
      this.age = new Range();
    }
    return this.age;
  }

  setAge(age: Range | undefined): this {
    return this.setFieldValue('age', age);
  }

  hasAge(): boolean {
    return this.hasFieldValue('age');
  }

  /** Text based reference range in an observation (0..1) */
  getText(): string | undefined {
    return this.text;
  }

  /** Sets `text`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setText(text: string | undefined): this {
    return this.setFieldValue('text', text);
  }

  hasText(): boolean {
    return this.hasFieldValue('text');
  }

  /** The element carrying the id and extensions of `text`. Created when absent. */
  getTextElement(): Element {
    if (this._text === undefined) {
      this._text = new Element();
    }
    return this._text;
  }

  setTextElement(textElement: Element | undefined): this {
    this._text = textElement;
    return this;
  }
}

modelTypeRegistry.register('ObservationReferenceRange', ObservationReferenceRange, false);

/**
 * Component results
 */
export class ObservationComponent extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'value',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'valueQuantity', typeCode: 'Quantity' },
        { jsonKey: 'valueCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'valueString', typeCode: 'string' },
        { jsonKey: 'valueBoolean', typeCode: 'boolean' },
        { jsonKey: 'valueInteger', typeCode: 'integer' },
        { jsonKey: 'valueRange', typeCode: 'Range' },
        { jsonKey: 'valueRatio', typeCode: 'Ratio' },
        { jsonKey: 'valueSampledData', typeCode: 'SampledData' },
        { jsonKey: 'valueTime', typeCode: 'time' },
        { jsonKey: 'valueDateTime', typeCode: 'dateTime' },
        { jsonKey: 'valuePeriod', typeCode: 'Period' },
        { jsonKey: 'valueAttachment', typeCode: 'Attachment' },
        {
          jsonKey: 'valueReference',
          typeCode: 'Reference',
          targetResourceTypes: ['MolecularSequence'],
        },
      ],
    },
    {
      elementName: 'dataAbsentReason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'dataAbsentReason', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'interpretation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'interpretation', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'referenceRange',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'referenceRange', typeCode: 'ObservationReferenceRange' }],
    },
  ];

  /** Type of component observation (code / type) (1..1) */
  code?: CodeableConcept;

  /** Actual component result (0..1) */
  valueQuantity?: Quantity;
  /** Actual component result (0..1) */
  valueCodeableConcept?: CodeableConcept;
  /** Actual component result (0..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Actual component result (0..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Actual component result (0..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** Actual component result (0..1) */
  valueRange?: Range;
  /** Actual component result (0..1) */
  valueRatio?: Ratio;
  /** Actual component result (0..1) */
  valueSampledData?: SampledData;
  /** Actual component result (0..1) */
  valueTime?: string;
  /** Id and extensions of the primitive `valueTime`. */
  _valueTime?: Element;
  /** Actual component result (0..1) */
  valueDateTime?: string;
  /** Id and extensions of the primitive `valueDateTime`. */
  _valueDateTime?: Element;
  /** Actual component result (0..1) */
  valuePeriod?: Period;
  /** Actual component result (0..1) */
  valueAttachment?: Attachment;
  /** Actual component result (0..1) */
  valueReference?: Reference;

  /** Why the component result is missing (0..1) */
  dataAbsentReason?: CodeableConcept;

  /** High, low, normal, etc (0..*) */
  interpretation?: CodeableConcept[];

  /** Provides guide for interpretation of component result (0..*) */
  referenceRange?: ObservationReferenceRange[];

  override fhirType(): string {
    return 'Observation.component';
  }

  /** FHIR JSON for this ObservationComponent, typed as the plain `ObservationComponent` data type. */
  override toJSON(): plainTypes.ObservationComponent {
    return this.serialize() as plainTypes.ObservationComponent;
  }

  /** Type of component observation (code / type) (1..1) Created when absent. */
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

  /** Actual component result (0..1) Whichever type of `value[x]` is set. */
  getValue():
    | Quantity
    | CodeableConcept
    | string
    | boolean
    | number
    | Range
    | Ratio
    | SampledData
    | Period
    | Attachment
    | Reference
    | undefined {
    return this.getChoiceValue<
      | Quantity
      | CodeableConcept
      | string
      | boolean
      | number
      | Range
      | Ratio
      | SampledData
      | Period
      | Attachment
      | Reference
    >('value');
  }

  /** True when any type of `value[x]` is set. */
  hasValue(): boolean {
    return this.hasChoiceValue('value');
  }

  getValueQuantity(): Quantity | undefined {
    return this.valueQuantity;
  }

  /** Sets `value[x]` as Quantity and clears every other type of it. */
  setValueQuantity(valueQuantity: Quantity | undefined): this {
    return this.setFieldValue('valueQuantity', valueQuantity);
  }

  hasValueQuantity(): boolean {
    return this.hasFieldValue('valueQuantity');
  }

  getValueCodeableConcept(): CodeableConcept | undefined {
    return this.valueCodeableConcept;
  }

  /** Sets `value[x]` as CodeableConcept and clears every other type of it. */
  setValueCodeableConcept(valueCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('valueCodeableConcept', valueCodeableConcept);
  }

  hasValueCodeableConcept(): boolean {
    return this.hasFieldValue('valueCodeableConcept');
  }

  getValueString(): string | undefined {
    return this.valueString;
  }

  /** Sets `value[x]` as string and clears every other type of it. */
  setValueString(valueString: string | undefined): this {
    return this.setFieldValue('valueString', valueString);
  }

  hasValueString(): boolean {
    return this.hasFieldValue('valueString');
  }

  getValueBoolean(): boolean | undefined {
    return this.valueBoolean;
  }

  /** Sets `value[x]` as boolean and clears every other type of it. */
  setValueBoolean(valueBoolean: boolean | undefined): this {
    return this.setFieldValue('valueBoolean', valueBoolean);
  }

  hasValueBoolean(): boolean {
    return this.hasFieldValue('valueBoolean');
  }

  getValueInteger(): number | undefined {
    return this.valueInteger;
  }

  /** Sets `value[x]` as integer and clears every other type of it. */
  setValueInteger(valueInteger: number | undefined): this {
    return this.setFieldValue('valueInteger', valueInteger);
  }

  hasValueInteger(): boolean {
    return this.hasFieldValue('valueInteger');
  }

  getValueRange(): Range | undefined {
    return this.valueRange;
  }

  /** Sets `value[x]` as Range and clears every other type of it. */
  setValueRange(valueRange: Range | undefined): this {
    return this.setFieldValue('valueRange', valueRange);
  }

  hasValueRange(): boolean {
    return this.hasFieldValue('valueRange');
  }

  getValueRatio(): Ratio | undefined {
    return this.valueRatio;
  }

  /** Sets `value[x]` as Ratio and clears every other type of it. */
  setValueRatio(valueRatio: Ratio | undefined): this {
    return this.setFieldValue('valueRatio', valueRatio);
  }

  hasValueRatio(): boolean {
    return this.hasFieldValue('valueRatio');
  }

  getValueSampledData(): SampledData | undefined {
    return this.valueSampledData;
  }

  /** Sets `value[x]` as SampledData and clears every other type of it. */
  setValueSampledData(valueSampledData: SampledData | undefined): this {
    return this.setFieldValue('valueSampledData', valueSampledData);
  }

  hasValueSampledData(): boolean {
    return this.hasFieldValue('valueSampledData');
  }

  getValueTime(): string | undefined {
    return this.valueTime;
  }

  /** Sets `value[x]` as time and clears every other type of it. */
  setValueTime(valueTime: string | undefined): this {
    return this.setFieldValue('valueTime', valueTime);
  }

  hasValueTime(): boolean {
    return this.hasFieldValue('valueTime');
  }

  getValueDateTime(): string | undefined {
    return this.valueDateTime;
  }

  /** Sets `value[x]` as dateTime and clears every other type of it. */
  setValueDateTime(valueDateTime: string | undefined): this {
    return this.setFieldValue('valueDateTime', valueDateTime);
  }

  hasValueDateTime(): boolean {
    return this.hasFieldValue('valueDateTime');
  }

  getValuePeriod(): Period | undefined {
    return this.valuePeriod;
  }

  /** Sets `value[x]` as Period and clears every other type of it. */
  setValuePeriod(valuePeriod: Period | undefined): this {
    return this.setFieldValue('valuePeriod', valuePeriod);
  }

  hasValuePeriod(): boolean {
    return this.hasFieldValue('valuePeriod');
  }

  getValueAttachment(): Attachment | undefined {
    return this.valueAttachment;
  }

  /** Sets `value[x]` as Attachment and clears every other type of it. */
  setValueAttachment(valueAttachment: Attachment | undefined): this {
    return this.setFieldValue('valueAttachment', valueAttachment);
  }

  hasValueAttachment(): boolean {
    return this.hasFieldValue('valueAttachment');
  }

  getValueReference(): Reference | undefined {
    return this.valueReference;
  }

  /** Sets `value[x]` as Reference and clears every other type of it. */
  setValueReference(valueReference: Reference | undefined): this {
    return this.setFieldValue('valueReference', valueReference);
  }

  hasValueReference(): boolean {
    return this.hasFieldValue('valueReference');
  }

  /** Why the component result is missing (0..1) Created when absent. */
  getDataAbsentReason(): CodeableConcept {
    if (this.dataAbsentReason === undefined) {
      this.dataAbsentReason = new CodeableConcept();
    }
    return this.dataAbsentReason;
  }

  setDataAbsentReason(dataAbsentReason: CodeableConcept | undefined): this {
    return this.setFieldValue('dataAbsentReason', dataAbsentReason);
  }

  hasDataAbsentReason(): boolean {
    return this.hasFieldValue('dataAbsentReason');
  }

  /** High, low, normal, etc (0..*) Never undefined; an empty list is created when absent. */
  getInterpretation(): CodeableConcept[] {
    if (this.interpretation === undefined) {
      this.interpretation = [];
    }
    return this.interpretation;
  }

  setInterpretation(interpretation: CodeableConcept[] | undefined): this {
    return this.setFieldValue('interpretation', interpretation);
  }

  hasInterpretation(): boolean {
    return this.hasFieldValue('interpretation');
  }

  /** Appends a new, empty CodeableConcept to `interpretation` and returns it so it can be filled in. */
  addInterpretation(): CodeableConcept;
  /** Appends the given CodeableConcept to `interpretation` and returns this object for chaining. */
  addInterpretation(codeableConcept: CodeableConcept): this;
  addInterpretation(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('interpretation', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('interpretation', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `interpretation`. One is added when the list is empty. */
  getInterpretationFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getInterpretation()[0];
    return firstCodeableConcept === undefined ? this.addInterpretation() : firstCodeableConcept;
  }

  /** Provides guide for interpretation of component result (0..*) Never undefined; an empty list is created when absent. */
  getReferenceRange(): ObservationReferenceRange[] {
    if (this.referenceRange === undefined) {
      this.referenceRange = [];
    }
    return this.referenceRange;
  }

  setReferenceRange(referenceRange: ObservationReferenceRange[] | undefined): this {
    return this.setFieldValue('referenceRange', referenceRange);
  }

  hasReferenceRange(): boolean {
    return this.hasFieldValue('referenceRange');
  }

  /** Appends a new, empty ObservationReferenceRange to `referenceRange` and returns it so it can be filled in. */
  addReferenceRange(): ObservationReferenceRange;
  /** Appends the given ObservationReferenceRange to `referenceRange` and returns this object for chaining. */
  addReferenceRange(observationReferenceRange: ObservationReferenceRange): this;
  addReferenceRange(
    observationReferenceRange?: ObservationReferenceRange
  ): ObservationReferenceRange | this {
    if (observationReferenceRange !== undefined) {
      return this.addFieldValue('referenceRange', observationReferenceRange);
    }
    const createdObservationReferenceRange = new ObservationReferenceRange();
    this.addFieldValue('referenceRange', createdObservationReferenceRange);
    return createdObservationReferenceRange;
  }

  /** The first ObservationReferenceRange of `referenceRange`. One is added when the list is empty. */
  getReferenceRangeFirstRep(): ObservationReferenceRange {
    const firstObservationReferenceRange = this.getReferenceRange()[0];
    return firstObservationReferenceRange === undefined
      ? this.addReferenceRange()
      : firstObservationReferenceRange;
  }
}

modelTypeRegistry.register('ObservationComponent', ObservationComponent, false);
