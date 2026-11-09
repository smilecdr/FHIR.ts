/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { Age } from './age';
import { Annotation } from './annotation';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { CodeableReference } from './codeableReference';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Range } from './range';
import { Reference } from './reference';
import { Timing } from './timing';

/**
 * An action that is or was performed on or for a patient, practitioner, device, organization, or location. For example, this can be a physical intervention on a patient like an operation, or less invasive like long term services, counseling, or hypnotherapy. This can be a quality or safety inspection for a location, organization, or device. This can be an accreditation procedure on a practitioner for licensing.
 */
export class Procedure extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'instantiatesCanonical',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'instantiatesCanonical', typeCode: 'canonical' }],
    },
    {
      elementName: 'instantiatesUri',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'instantiatesUri', typeCode: 'uri' }],
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
          targetResourceTypes: ['CarePlan', 'ServiceRequest'],
        },
      ],
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
          targetResourceTypes: ['MedicationAdministration', 'Observation', 'Procedure'],
        },
      ],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.EventStatus }],
    },
    {
      elementName: 'statusReason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'statusReason', typeCode: 'CodeableConcept' }],
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
            'Device',
            'Group',
            'Location',
            'Organization',
            'Patient',
            'Practitioner',
          ],
        },
      ],
    },
    {
      elementName: 'focus',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'focus',
          typeCode: 'Reference',
          targetResourceTypes: [
            'CareTeam',
            'Group',
            'Organization',
            'Patient',
            'Practitioner',
            'PractitionerRole',
            'RelatedPerson',
            'Specimen',
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
        { jsonKey: 'occurrenceString', typeCode: 'string' },
        { jsonKey: 'occurrenceAge', typeCode: 'Age' },
        { jsonKey: 'occurrenceRange', typeCode: 'Range' },
        { jsonKey: 'occurrenceTiming', typeCode: 'Timing' },
      ],
    },
    {
      elementName: 'recorded',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'recorded', typeCode: 'dateTime' }],
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
      elementName: 'reported',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'reportedBoolean', typeCode: 'boolean' },
        {
          jsonKey: 'reportedReference',
          typeCode: 'Reference',
          targetResourceTypes: [
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
      elementName: 'performer',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'performer', typeCode: 'ProcedurePerformer' }],
    },
    {
      elementName: 'location',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'location', typeCode: 'Reference', targetResourceTypes: ['Location'] }],
    },
    {
      elementName: 'reason',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reason', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'bodySite',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'bodySite', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'outcome',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'outcome', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'report',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'report',
          typeCode: 'Reference',
          targetResourceTypes: ['Composition', 'DiagnosticReport', 'DocumentReference'],
        },
      ],
    },
    {
      elementName: 'complication',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'complication', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'followUp',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'followUp', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
    {
      elementName: 'focalDevice',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'focalDevice', typeCode: 'ProcedureFocalDevice' }],
    },
    {
      elementName: 'used',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'used', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'supportingInfo',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'supportingInfo', typeCode: 'Reference' }],
    },
  ];

  readonly resourceType = 'Procedure';

  /** External Identifiers for this procedure (0..*) */
  identifier?: Identifier[];

  /** Instantiates FHIR protocol or definition (0..*) */
  instantiatesCanonical?: string[];
  /** Id and extensions of the primitive `instantiatesCanonical`. */
  _instantiatesCanonical?: (Element | null)[];

  /** Instantiates external protocol or definition (0..*) */
  instantiatesUri?: string[];
  /** Id and extensions of the primitive `instantiatesUri`. */
  _instantiatesUri?: (Element | null)[];

  /** A request for this procedure (0..*) */
  basedOn?: Reference[];

  /** Part of referenced event (0..*) */
  partOf?: Reference[];

  /** preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown (1..1) */
  status?: valueSetCodes.EventStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Reason for current status (0..1) */
  statusReason?: CodeableConcept;

  /** Classification of the procedure (0..*) */
  category?: CodeableConcept[];

  /** Identification of the procedure (0..1) */
  code?: CodeableConcept;

  /** Individual or entity the procedure was performed on (1..1) */
  subject?: Reference;

  /** Who is the target of the procedure when it is not the subject of record only (0..1) */
  focus?: Reference;

  /** The Encounter during which this Procedure was created (0..1) */
  encounter?: Reference;

  /** When the procedure occurred or is occurring (0..1) */
  occurrenceDateTime?: string;
  /** Id and extensions of the primitive `occurrenceDateTime`. */
  _occurrenceDateTime?: Element;
  /** When the procedure occurred or is occurring (0..1) */
  occurrencePeriod?: Period;
  /** When the procedure occurred or is occurring (0..1) */
  occurrenceString?: string;
  /** Id and extensions of the primitive `occurrenceString`. */
  _occurrenceString?: Element;
  /** When the procedure occurred or is occurring (0..1) */
  occurrenceAge?: Age;
  /** When the procedure occurred or is occurring (0..1) */
  occurrenceRange?: Range;
  /** When the procedure occurred or is occurring (0..1) */
  occurrenceTiming?: Timing;

  /** When the procedure was first captured in the subject's record (0..1) */
  recorded?: string;
  /** Id and extensions of the primitive `recorded`. */
  _recorded?: Element;

  /** Who recorded the procedure (0..1) */
  recorder?: Reference;

  /** Reported rather than primary record (0..1) */
  reportedBoolean?: boolean;
  /** Id and extensions of the primitive `reportedBoolean`. */
  _reportedBoolean?: Element;
  /** Reported rather than primary record (0..1) */
  reportedReference?: Reference;

  /** Who performed the procedure and what they did (0..*) */
  performer?: ProcedurePerformer[];

  /** Where the procedure happened (0..1) */
  location?: Reference;

  /** The justification that the procedure was performed (0..*) */
  reason?: CodeableReference[];

  /** Target body sites (0..*) */
  bodySite?: CodeableConcept[];

  /** The result of procedure (0..1) */
  outcome?: CodeableConcept;

  /** Any report resulting from the procedure (0..*) */
  report?: Reference[];

  /** Complication following the procedure (0..*) */
  complication?: CodeableReference[];

  /** Instructions for follow up (0..*) */
  followUp?: CodeableConcept[];

  /** Additional information about the procedure (0..*) */
  note?: Annotation[];

  /** Manipulated, implanted, or removed device (0..*) */
  focalDevice?: ProcedureFocalDevice[];

  /** Items used during procedure (0..*) */
  used?: CodeableReference[];

  /** Extra information relevant to the procedure (0..*) */
  supportingInfo?: Reference[];

  override fhirType(): string {
    return 'Procedure';
  }

  /** FHIR JSON for this Procedure, typed as the plain `Procedure` data type. */
  override toJSON(): plainTypes.Procedure {
    return this.serialize() as plainTypes.Procedure;
  }

  /** External Identifiers for this procedure (0..*) Never undefined; an empty list is created when absent. */
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

  /** Instantiates FHIR protocol or definition (0..*) Never undefined; an empty list is created when absent. */
  getInstantiatesCanonical(): string[] {
    if (this.instantiatesCanonical === undefined) {
      this.instantiatesCanonical = [];
    }
    return this.instantiatesCanonical;
  }

  setInstantiatesCanonical(instantiatesCanonical: string[] | undefined): this {
    return this.setFieldValue('instantiatesCanonical', instantiatesCanonical);
  }

  hasInstantiatesCanonical(): boolean {
    return this.hasFieldValue('instantiatesCanonical');
  }

  /** Appends one value to `instantiatesCanonical`. Throws a FhirModelError when it is not a valid FHIR canonical. */
  addInstantiatesCanonical(instantiatesCanonical: string): this {
    return this.addFieldValue('instantiatesCanonical', instantiatesCanonical);
  }

  /** Instantiates external protocol or definition (0..*) Never undefined; an empty list is created when absent. */
  getInstantiatesUri(): string[] {
    if (this.instantiatesUri === undefined) {
      this.instantiatesUri = [];
    }
    return this.instantiatesUri;
  }

  setInstantiatesUri(instantiatesUri: string[] | undefined): this {
    return this.setFieldValue('instantiatesUri', instantiatesUri);
  }

  hasInstantiatesUri(): boolean {
    return this.hasFieldValue('instantiatesUri');
  }

  /** Appends one value to `instantiatesUri`. Throws a FhirModelError when it is not a valid FHIR uri. */
  addInstantiatesUri(instantiatesUri: string): this {
    return this.addFieldValue('instantiatesUri', instantiatesUri);
  }

  /** A request for this procedure (0..*) Never undefined; an empty list is created when absent. */
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

  /** preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown (1..1) */
  getStatus(): valueSetCodes.EventStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.EventStatus | undefined): this {
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

  /** Reason for current status (0..1) Created when absent. */
  getStatusReason(): CodeableConcept {
    if (this.statusReason === undefined) {
      this.statusReason = new CodeableConcept();
    }
    return this.statusReason;
  }

  setStatusReason(statusReason: CodeableConcept | undefined): this {
    return this.setFieldValue('statusReason', statusReason);
  }

  hasStatusReason(): boolean {
    return this.hasFieldValue('statusReason');
  }

  /** Classification of the procedure (0..*) Never undefined; an empty list is created when absent. */
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

  /** Identification of the procedure (0..1) Created when absent. */
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

  /** Individual or entity the procedure was performed on (1..1) Created when absent. */
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

  /** Who is the target of the procedure when it is not the subject of record only (0..1) Created when absent. */
  getFocus(): Reference {
    if (this.focus === undefined) {
      this.focus = new Reference();
    }
    return this.focus;
  }

  setFocus(focus: Reference | undefined): this {
    return this.setFieldValue('focus', focus);
  }

  hasFocus(): boolean {
    return this.hasFieldValue('focus');
  }

  /** The Encounter during which this Procedure was created (0..1) Created when absent. */
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

  /** When the procedure occurred or is occurring (0..1) Whichever type of `occurrence[x]` is set. */
  getOccurrence(): string | Period | Age | Range | Timing | undefined {
    return this.getChoiceValue<string | Period | Age | Range | Timing>('occurrence');
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

  getOccurrenceString(): string | undefined {
    return this.occurrenceString;
  }

  /** Sets `occurrence[x]` as string and clears every other type of it. */
  setOccurrenceString(occurrenceString: string | undefined): this {
    return this.setFieldValue('occurrenceString', occurrenceString);
  }

  hasOccurrenceString(): boolean {
    return this.hasFieldValue('occurrenceString');
  }

  getOccurrenceAge(): Age | undefined {
    return this.occurrenceAge;
  }

  /** Sets `occurrence[x]` as Age and clears every other type of it. */
  setOccurrenceAge(occurrenceAge: Age | undefined): this {
    return this.setFieldValue('occurrenceAge', occurrenceAge);
  }

  hasOccurrenceAge(): boolean {
    return this.hasFieldValue('occurrenceAge');
  }

  getOccurrenceRange(): Range | undefined {
    return this.occurrenceRange;
  }

  /** Sets `occurrence[x]` as Range and clears every other type of it. */
  setOccurrenceRange(occurrenceRange: Range | undefined): this {
    return this.setFieldValue('occurrenceRange', occurrenceRange);
  }

  hasOccurrenceRange(): boolean {
    return this.hasFieldValue('occurrenceRange');
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

  /** When the procedure was first captured in the subject's record (0..1) */
  getRecorded(): string | undefined {
    return this.recorded;
  }

  /** Sets `recorded`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setRecorded(recorded: string | undefined): this {
    return this.setFieldValue('recorded', recorded);
  }

  hasRecorded(): boolean {
    return this.hasFieldValue('recorded');
  }

  /** The element carrying the id and extensions of `recorded`. Created when absent. */
  getRecordedElement(): Element {
    if (this._recorded === undefined) {
      this._recorded = new Element();
    }
    return this._recorded;
  }

  setRecordedElement(recordedElement: Element | undefined): this {
    this._recorded = recordedElement;
    return this;
  }

  /** Who recorded the procedure (0..1) Created when absent. */
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

  /** Reported rather than primary record (0..1) Whichever type of `reported[x]` is set. */
  getReported(): boolean | Reference | undefined {
    return this.getChoiceValue<boolean | Reference>('reported');
  }

  /** True when any type of `reported[x]` is set. */
  hasReported(): boolean {
    return this.hasChoiceValue('reported');
  }

  getReportedBoolean(): boolean | undefined {
    return this.reportedBoolean;
  }

  /** Sets `reported[x]` as boolean and clears every other type of it. */
  setReportedBoolean(reportedBoolean: boolean | undefined): this {
    return this.setFieldValue('reportedBoolean', reportedBoolean);
  }

  hasReportedBoolean(): boolean {
    return this.hasFieldValue('reportedBoolean');
  }

  getReportedReference(): Reference | undefined {
    return this.reportedReference;
  }

  /** Sets `reported[x]` as Reference and clears every other type of it. */
  setReportedReference(reportedReference: Reference | undefined): this {
    return this.setFieldValue('reportedReference', reportedReference);
  }

  hasReportedReference(): boolean {
    return this.hasFieldValue('reportedReference');
  }

  /** Who performed the procedure and what they did (0..*) Never undefined; an empty list is created when absent. */
  getPerformer(): ProcedurePerformer[] {
    if (this.performer === undefined) {
      this.performer = [];
    }
    return this.performer;
  }

  setPerformer(performer: ProcedurePerformer[] | undefined): this {
    return this.setFieldValue('performer', performer);
  }

  hasPerformer(): boolean {
    return this.hasFieldValue('performer');
  }

  /** Appends a new, empty ProcedurePerformer to `performer` and returns it so it can be filled in. */
  addPerformer(): ProcedurePerformer;
  /** Appends the given ProcedurePerformer to `performer` and returns this object for chaining. */
  addPerformer(procedurePerformer: ProcedurePerformer): this;
  addPerformer(procedurePerformer?: ProcedurePerformer): ProcedurePerformer | this {
    if (procedurePerformer !== undefined) {
      return this.addFieldValue('performer', procedurePerformer);
    }
    const createdProcedurePerformer = new ProcedurePerformer();
    this.addFieldValue('performer', createdProcedurePerformer);
    return createdProcedurePerformer;
  }

  /** The first ProcedurePerformer of `performer`. One is added when the list is empty. */
  getPerformerFirstRep(): ProcedurePerformer {
    const firstProcedurePerformer = this.getPerformer()[0];
    return firstProcedurePerformer === undefined ? this.addPerformer() : firstProcedurePerformer;
  }

  /** Where the procedure happened (0..1) Created when absent. */
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

  /** The justification that the procedure was performed (0..*) Never undefined; an empty list is created when absent. */
  getReason(): CodeableReference[] {
    if (this.reason === undefined) {
      this.reason = [];
    }
    return this.reason;
  }

  setReason(reason: CodeableReference[] | undefined): this {
    return this.setFieldValue('reason', reason);
  }

  hasReason(): boolean {
    return this.hasFieldValue('reason');
  }

  /** Appends a new, empty CodeableReference to `reason` and returns it so it can be filled in. */
  addReason(): CodeableReference;
  /** Appends the given CodeableReference to `reason` and returns this object for chaining. */
  addReason(codeableReference: CodeableReference): this;
  addReason(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('reason', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('reason', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `reason`. One is added when the list is empty. */
  getReasonFirstRep(): CodeableReference {
    const firstCodeableReference = this.getReason()[0];
    return firstCodeableReference === undefined ? this.addReason() : firstCodeableReference;
  }

  /** Target body sites (0..*) Never undefined; an empty list is created when absent. */
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

  /** The result of procedure (0..1) Created when absent. */
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

  /** Any report resulting from the procedure (0..*) Never undefined; an empty list is created when absent. */
  getReport(): Reference[] {
    if (this.report === undefined) {
      this.report = [];
    }
    return this.report;
  }

  setReport(report: Reference[] | undefined): this {
    return this.setFieldValue('report', report);
  }

  hasReport(): boolean {
    return this.hasFieldValue('report');
  }

  /** Appends a new, empty Reference to `report` and returns it so it can be filled in. */
  addReport(): Reference;
  /** Appends the given Reference to `report` and returns this object for chaining. */
  addReport(reference: Reference): this;
  addReport(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('report', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('report', createdReference);
    return createdReference;
  }

  /** The first Reference of `report`. One is added when the list is empty. */
  getReportFirstRep(): Reference {
    const firstReference = this.getReport()[0];
    return firstReference === undefined ? this.addReport() : firstReference;
  }

  /** Complication following the procedure (0..*) Never undefined; an empty list is created when absent. */
  getComplication(): CodeableReference[] {
    if (this.complication === undefined) {
      this.complication = [];
    }
    return this.complication;
  }

  setComplication(complication: CodeableReference[] | undefined): this {
    return this.setFieldValue('complication', complication);
  }

  hasComplication(): boolean {
    return this.hasFieldValue('complication');
  }

  /** Appends a new, empty CodeableReference to `complication` and returns it so it can be filled in. */
  addComplication(): CodeableReference;
  /** Appends the given CodeableReference to `complication` and returns this object for chaining. */
  addComplication(codeableReference: CodeableReference): this;
  addComplication(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('complication', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('complication', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `complication`. One is added when the list is empty. */
  getComplicationFirstRep(): CodeableReference {
    const firstCodeableReference = this.getComplication()[0];
    return firstCodeableReference === undefined ? this.addComplication() : firstCodeableReference;
  }

  /** Instructions for follow up (0..*) Never undefined; an empty list is created when absent. */
  getFollowUp(): CodeableConcept[] {
    if (this.followUp === undefined) {
      this.followUp = [];
    }
    return this.followUp;
  }

  setFollowUp(followUp: CodeableConcept[] | undefined): this {
    return this.setFieldValue('followUp', followUp);
  }

  hasFollowUp(): boolean {
    return this.hasFieldValue('followUp');
  }

  /** Appends a new, empty CodeableConcept to `followUp` and returns it so it can be filled in. */
  addFollowUp(): CodeableConcept;
  /** Appends the given CodeableConcept to `followUp` and returns this object for chaining. */
  addFollowUp(codeableConcept: CodeableConcept): this;
  addFollowUp(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('followUp', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('followUp', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `followUp`. One is added when the list is empty. */
  getFollowUpFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getFollowUp()[0];
    return firstCodeableConcept === undefined ? this.addFollowUp() : firstCodeableConcept;
  }

  /** Additional information about the procedure (0..*) Never undefined; an empty list is created when absent. */
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

  /** Manipulated, implanted, or removed device (0..*) Never undefined; an empty list is created when absent. */
  getFocalDevice(): ProcedureFocalDevice[] {
    if (this.focalDevice === undefined) {
      this.focalDevice = [];
    }
    return this.focalDevice;
  }

  setFocalDevice(focalDevice: ProcedureFocalDevice[] | undefined): this {
    return this.setFieldValue('focalDevice', focalDevice);
  }

  hasFocalDevice(): boolean {
    return this.hasFieldValue('focalDevice');
  }

  /** Appends a new, empty ProcedureFocalDevice to `focalDevice` and returns it so it can be filled in. */
  addFocalDevice(): ProcedureFocalDevice;
  /** Appends the given ProcedureFocalDevice to `focalDevice` and returns this object for chaining. */
  addFocalDevice(procedureFocalDevice: ProcedureFocalDevice): this;
  addFocalDevice(procedureFocalDevice?: ProcedureFocalDevice): ProcedureFocalDevice | this {
    if (procedureFocalDevice !== undefined) {
      return this.addFieldValue('focalDevice', procedureFocalDevice);
    }
    const createdProcedureFocalDevice = new ProcedureFocalDevice();
    this.addFieldValue('focalDevice', createdProcedureFocalDevice);
    return createdProcedureFocalDevice;
  }

  /** The first ProcedureFocalDevice of `focalDevice`. One is added when the list is empty. */
  getFocalDeviceFirstRep(): ProcedureFocalDevice {
    const firstProcedureFocalDevice = this.getFocalDevice()[0];
    return firstProcedureFocalDevice === undefined
      ? this.addFocalDevice()
      : firstProcedureFocalDevice;
  }

  /** Items used during procedure (0..*) Never undefined; an empty list is created when absent. */
  getUsed(): CodeableReference[] {
    if (this.used === undefined) {
      this.used = [];
    }
    return this.used;
  }

  setUsed(used: CodeableReference[] | undefined): this {
    return this.setFieldValue('used', used);
  }

  hasUsed(): boolean {
    return this.hasFieldValue('used');
  }

  /** Appends a new, empty CodeableReference to `used` and returns it so it can be filled in. */
  addUsed(): CodeableReference;
  /** Appends the given CodeableReference to `used` and returns this object for chaining. */
  addUsed(codeableReference: CodeableReference): this;
  addUsed(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('used', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('used', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `used`. One is added when the list is empty. */
  getUsedFirstRep(): CodeableReference {
    const firstCodeableReference = this.getUsed()[0];
    return firstCodeableReference === undefined ? this.addUsed() : firstCodeableReference;
  }

  /** Extra information relevant to the procedure (0..*) Never undefined; an empty list is created when absent. */
  getSupportingInfo(): Reference[] {
    if (this.supportingInfo === undefined) {
      this.supportingInfo = [];
    }
    return this.supportingInfo;
  }

  setSupportingInfo(supportingInfo: Reference[] | undefined): this {
    return this.setFieldValue('supportingInfo', supportingInfo);
  }

  hasSupportingInfo(): boolean {
    return this.hasFieldValue('supportingInfo');
  }

  /** Appends a new, empty Reference to `supportingInfo` and returns it so it can be filled in. */
  addSupportingInfo(): Reference;
  /** Appends the given Reference to `supportingInfo` and returns this object for chaining. */
  addSupportingInfo(reference: Reference): this;
  addSupportingInfo(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('supportingInfo', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('supportingInfo', createdReference);
    return createdReference;
  }

  /** The first Reference of `supportingInfo`. One is added when the list is empty. */
  getSupportingInfoFirstRep(): Reference {
    const firstReference = this.getSupportingInfo()[0];
    return firstReference === undefined ? this.addSupportingInfo() : firstReference;
  }
}

modelTypeRegistry.register('Procedure', Procedure, true);

/** True when the value is a Procedure model instance. */
export function isProcedure(candidate: unknown): candidate is Procedure {
  return candidate instanceof Procedure;
}

/**
 * Who performed the procedure and what they did
 */
export class ProcedurePerformer extends BackboneElement {
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
            'HealthcareService',
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
      elementName: 'onBehalfOf',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'onBehalfOf', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
  ];

  /** Type of performance (0..1) */
  function?: CodeableConcept;

  /** Who performed the procedure (1..1) */
  actor?: Reference;

  /** Organization the device or practitioner was acting for (0..1) */
  onBehalfOf?: Reference;

  /** When the performer performed the procedure (0..1) */
  period?: Period;

  override fhirType(): string {
    return 'Procedure.performer';
  }

  /** FHIR JSON for this ProcedurePerformer, typed as the plain `ProcedurePerformer` data type. */
  override toJSON(): plainTypes.ProcedurePerformer {
    return this.serialize() as plainTypes.ProcedurePerformer;
  }

  /** Type of performance (0..1) Created when absent. */
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

  /** Who performed the procedure (1..1) Created when absent. */
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

  /** Organization the device or practitioner was acting for (0..1) Created when absent. */
  getOnBehalfOf(): Reference {
    if (this.onBehalfOf === undefined) {
      this.onBehalfOf = new Reference();
    }
    return this.onBehalfOf;
  }

  setOnBehalfOf(onBehalfOf: Reference | undefined): this {
    return this.setFieldValue('onBehalfOf', onBehalfOf);
  }

  hasOnBehalfOf(): boolean {
    return this.hasFieldValue('onBehalfOf');
  }

  /** When the performer performed the procedure (0..1) Created when absent. */
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

modelTypeRegistry.register('ProcedurePerformer', ProcedurePerformer, false);

/**
 * Manipulated, implanted, or removed device
 */
export class ProcedureFocalDevice extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'action',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'action', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'manipulated',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'manipulated', typeCode: 'Reference', targetResourceTypes: ['Device'] }],
    },
  ];

  /** Kind of change to device (0..1) */
  action?: CodeableConcept;

  /** Device that was changed (1..1) */
  manipulated?: Reference;

  override fhirType(): string {
    return 'Procedure.focalDevice';
  }

  /** FHIR JSON for this ProcedureFocalDevice, typed as the plain `ProcedureFocalDevice` data type. */
  override toJSON(): plainTypes.ProcedureFocalDevice {
    return this.serialize() as plainTypes.ProcedureFocalDevice;
  }

  /** Kind of change to device (0..1) Created when absent. */
  getAction(): CodeableConcept {
    if (this.action === undefined) {
      this.action = new CodeableConcept();
    }
    return this.action;
  }

  setAction(action: CodeableConcept | undefined): this {
    return this.setFieldValue('action', action);
  }

  hasAction(): boolean {
    return this.hasFieldValue('action');
  }

  /** Device that was changed (1..1) Created when absent. */
  getManipulated(): Reference {
    if (this.manipulated === undefined) {
      this.manipulated = new Reference();
    }
    return this.manipulated;
  }

  setManipulated(manipulated: Reference | undefined): this {
    return this.setFieldValue('manipulated', manipulated);
  }

  hasManipulated(): boolean {
    return this.hasFieldValue('manipulated');
  }
}

modelTypeRegistry.register('ProcedureFocalDevice', ProcedureFocalDevice, false);
