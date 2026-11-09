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
 * An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy.
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
      maximum: 1,
      isList: false,
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
        { jsonKey: 'subject', typeCode: 'Reference', targetResourceTypes: ['Group', 'Patient'] },
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
      elementName: 'performed',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'performedDateTime', typeCode: 'dateTime' },
        { jsonKey: 'performedPeriod', typeCode: 'Period' },
        { jsonKey: 'performedString', typeCode: 'string' },
        { jsonKey: 'performedAge', typeCode: 'Age' },
        { jsonKey: 'performedRange', typeCode: 'Range' },
      ],
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
      elementName: 'reasonCode',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reasonCode', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'reasonReference',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'reasonReference',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Condition',
            'DiagnosticReport',
            'DocumentReference',
            'Observation',
            'Procedure',
          ],
        },
      ],
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
      types: [{ jsonKey: 'complication', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'complicationDetail',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'complicationDetail',
          typeCode: 'Reference',
          targetResourceTypes: ['Condition'],
        },
      ],
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
      elementName: 'usedReference',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'usedReference',
          typeCode: 'Reference',
          targetResourceTypes: ['Device', 'Medication', 'Substance'],
        },
      ],
    },
    {
      elementName: 'usedCode',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'usedCode', typeCode: 'CodeableConcept' }],
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

  /** Classification of the procedure (0..1) */
  category?: CodeableConcept;

  /** Identification of the procedure (0..1) */
  code?: CodeableConcept;

  /** Who the procedure was performed on (1..1) */
  subject?: Reference;

  /** Encounter created as part of (0..1) */
  encounter?: Reference;

  /** When the procedure was performed (0..1) */
  performedDateTime?: string;
  /** Id and extensions of the primitive `performedDateTime`. */
  _performedDateTime?: Element;
  /** When the procedure was performed (0..1) */
  performedPeriod?: Period;
  /** When the procedure was performed (0..1) */
  performedString?: string;
  /** Id and extensions of the primitive `performedString`. */
  _performedString?: Element;
  /** When the procedure was performed (0..1) */
  performedAge?: Age;
  /** When the procedure was performed (0..1) */
  performedRange?: Range;

  /** Who recorded the procedure (0..1) */
  recorder?: Reference;

  /** Person who asserts this procedure (0..1) */
  asserter?: Reference;

  /** The people who performed the procedure (0..*) */
  performer?: ProcedurePerformer[];

  /** Where the procedure happened (0..1) */
  location?: Reference;

  /** Coded reason procedure performed (0..*) */
  reasonCode?: CodeableConcept[];

  /** The justification that the procedure was performed (0..*) */
  reasonReference?: Reference[];

  /** Target body sites (0..*) */
  bodySite?: CodeableConcept[];

  /** The result of procedure (0..1) */
  outcome?: CodeableConcept;

  /** Any report resulting from the procedure (0..*) */
  report?: Reference[];

  /** Complication following the procedure (0..*) */
  complication?: CodeableConcept[];

  /** A condition that is a result of the procedure (0..*) */
  complicationDetail?: Reference[];

  /** Instructions for follow up (0..*) */
  followUp?: CodeableConcept[];

  /** Additional information about the procedure (0..*) */
  note?: Annotation[];

  /** Manipulated, implanted, or removed device (0..*) */
  focalDevice?: ProcedureFocalDevice[];

  /** Items used during procedure (0..*) */
  usedReference?: Reference[];

  /** Coded items used during the procedure (0..*) */
  usedCode?: CodeableConcept[];

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

  /** Classification of the procedure (0..1) Created when absent. */
  getCategory(): CodeableConcept {
    if (this.category === undefined) {
      this.category = new CodeableConcept();
    }
    return this.category;
  }

  setCategory(category: CodeableConcept | undefined): this {
    return this.setFieldValue('category', category);
  }

  hasCategory(): boolean {
    return this.hasFieldValue('category');
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

  /** Who the procedure was performed on (1..1) Created when absent. */
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

  /** When the procedure was performed (0..1) Whichever type of `performed[x]` is set. */
  getPerformed(): string | Period | Age | Range | undefined {
    return this.getChoiceValue<string | Period | Age | Range>('performed');
  }

  /** True when any type of `performed[x]` is set. */
  hasPerformed(): boolean {
    return this.hasChoiceValue('performed');
  }

  getPerformedDateTime(): string | undefined {
    return this.performedDateTime;
  }

  /** Sets `performed[x]` as dateTime and clears every other type of it. */
  setPerformedDateTime(performedDateTime: string | undefined): this {
    return this.setFieldValue('performedDateTime', performedDateTime);
  }

  hasPerformedDateTime(): boolean {
    return this.hasFieldValue('performedDateTime');
  }

  getPerformedPeriod(): Period | undefined {
    return this.performedPeriod;
  }

  /** Sets `performed[x]` as Period and clears every other type of it. */
  setPerformedPeriod(performedPeriod: Period | undefined): this {
    return this.setFieldValue('performedPeriod', performedPeriod);
  }

  hasPerformedPeriod(): boolean {
    return this.hasFieldValue('performedPeriod');
  }

  getPerformedString(): string | undefined {
    return this.performedString;
  }

  /** Sets `performed[x]` as string and clears every other type of it. */
  setPerformedString(performedString: string | undefined): this {
    return this.setFieldValue('performedString', performedString);
  }

  hasPerformedString(): boolean {
    return this.hasFieldValue('performedString');
  }

  getPerformedAge(): Age | undefined {
    return this.performedAge;
  }

  /** Sets `performed[x]` as Age and clears every other type of it. */
  setPerformedAge(performedAge: Age | undefined): this {
    return this.setFieldValue('performedAge', performedAge);
  }

  hasPerformedAge(): boolean {
    return this.hasFieldValue('performedAge');
  }

  getPerformedRange(): Range | undefined {
    return this.performedRange;
  }

  /** Sets `performed[x]` as Range and clears every other type of it. */
  setPerformedRange(performedRange: Range | undefined): this {
    return this.setFieldValue('performedRange', performedRange);
  }

  hasPerformedRange(): boolean {
    return this.hasFieldValue('performedRange');
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

  /** Person who asserts this procedure (0..1) Created when absent. */
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

  /** The people who performed the procedure (0..*) Never undefined; an empty list is created when absent. */
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

  /** Coded reason procedure performed (0..*) Never undefined; an empty list is created when absent. */
  getReasonCode(): CodeableConcept[] {
    if (this.reasonCode === undefined) {
      this.reasonCode = [];
    }
    return this.reasonCode;
  }

  setReasonCode(reasonCode: CodeableConcept[] | undefined): this {
    return this.setFieldValue('reasonCode', reasonCode);
  }

  hasReasonCode(): boolean {
    return this.hasFieldValue('reasonCode');
  }

  /** Appends a new, empty CodeableConcept to `reasonCode` and returns it so it can be filled in. */
  addReasonCode(): CodeableConcept;
  /** Appends the given CodeableConcept to `reasonCode` and returns this object for chaining. */
  addReasonCode(codeableConcept: CodeableConcept): this;
  addReasonCode(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('reasonCode', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('reasonCode', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `reasonCode`. One is added when the list is empty. */
  getReasonCodeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getReasonCode()[0];
    return firstCodeableConcept === undefined ? this.addReasonCode() : firstCodeableConcept;
  }

  /** The justification that the procedure was performed (0..*) Never undefined; an empty list is created when absent. */
  getReasonReference(): Reference[] {
    if (this.reasonReference === undefined) {
      this.reasonReference = [];
    }
    return this.reasonReference;
  }

  setReasonReference(reasonReference: Reference[] | undefined): this {
    return this.setFieldValue('reasonReference', reasonReference);
  }

  hasReasonReference(): boolean {
    return this.hasFieldValue('reasonReference');
  }

  /** Appends a new, empty Reference to `reasonReference` and returns it so it can be filled in. */
  addReasonReference(): Reference;
  /** Appends the given Reference to `reasonReference` and returns this object for chaining. */
  addReasonReference(reference: Reference): this;
  addReasonReference(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('reasonReference', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('reasonReference', createdReference);
    return createdReference;
  }

  /** The first Reference of `reasonReference`. One is added when the list is empty. */
  getReasonReferenceFirstRep(): Reference {
    const firstReference = this.getReasonReference()[0];
    return firstReference === undefined ? this.addReasonReference() : firstReference;
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
  getComplication(): CodeableConcept[] {
    if (this.complication === undefined) {
      this.complication = [];
    }
    return this.complication;
  }

  setComplication(complication: CodeableConcept[] | undefined): this {
    return this.setFieldValue('complication', complication);
  }

  hasComplication(): boolean {
    return this.hasFieldValue('complication');
  }

  /** Appends a new, empty CodeableConcept to `complication` and returns it so it can be filled in. */
  addComplication(): CodeableConcept;
  /** Appends the given CodeableConcept to `complication` and returns this object for chaining. */
  addComplication(codeableConcept: CodeableConcept): this;
  addComplication(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('complication', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('complication', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `complication`. One is added when the list is empty. */
  getComplicationFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getComplication()[0];
    return firstCodeableConcept === undefined ? this.addComplication() : firstCodeableConcept;
  }

  /** A condition that is a result of the procedure (0..*) Never undefined; an empty list is created when absent. */
  getComplicationDetail(): Reference[] {
    if (this.complicationDetail === undefined) {
      this.complicationDetail = [];
    }
    return this.complicationDetail;
  }

  setComplicationDetail(complicationDetail: Reference[] | undefined): this {
    return this.setFieldValue('complicationDetail', complicationDetail);
  }

  hasComplicationDetail(): boolean {
    return this.hasFieldValue('complicationDetail');
  }

  /** Appends a new, empty Reference to `complicationDetail` and returns it so it can be filled in. */
  addComplicationDetail(): Reference;
  /** Appends the given Reference to `complicationDetail` and returns this object for chaining. */
  addComplicationDetail(reference: Reference): this;
  addComplicationDetail(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('complicationDetail', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('complicationDetail', createdReference);
    return createdReference;
  }

  /** The first Reference of `complicationDetail`. One is added when the list is empty. */
  getComplicationDetailFirstRep(): Reference {
    const firstReference = this.getComplicationDetail()[0];
    return firstReference === undefined ? this.addComplicationDetail() : firstReference;
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
  getUsedReference(): Reference[] {
    if (this.usedReference === undefined) {
      this.usedReference = [];
    }
    return this.usedReference;
  }

  setUsedReference(usedReference: Reference[] | undefined): this {
    return this.setFieldValue('usedReference', usedReference);
  }

  hasUsedReference(): boolean {
    return this.hasFieldValue('usedReference');
  }

  /** Appends a new, empty Reference to `usedReference` and returns it so it can be filled in. */
  addUsedReference(): Reference;
  /** Appends the given Reference to `usedReference` and returns this object for chaining. */
  addUsedReference(reference: Reference): this;
  addUsedReference(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('usedReference', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('usedReference', createdReference);
    return createdReference;
  }

  /** The first Reference of `usedReference`. One is added when the list is empty. */
  getUsedReferenceFirstRep(): Reference {
    const firstReference = this.getUsedReference()[0];
    return firstReference === undefined ? this.addUsedReference() : firstReference;
  }

  /** Coded items used during the procedure (0..*) Never undefined; an empty list is created when absent. */
  getUsedCode(): CodeableConcept[] {
    if (this.usedCode === undefined) {
      this.usedCode = [];
    }
    return this.usedCode;
  }

  setUsedCode(usedCode: CodeableConcept[] | undefined): this {
    return this.setFieldValue('usedCode', usedCode);
  }

  hasUsedCode(): boolean {
    return this.hasFieldValue('usedCode');
  }

  /** Appends a new, empty CodeableConcept to `usedCode` and returns it so it can be filled in. */
  addUsedCode(): CodeableConcept;
  /** Appends the given CodeableConcept to `usedCode` and returns this object for chaining. */
  addUsedCode(codeableConcept: CodeableConcept): this;
  addUsedCode(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('usedCode', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('usedCode', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `usedCode`. One is added when the list is empty. */
  getUsedCodeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getUsedCode()[0];
    return firstCodeableConcept === undefined ? this.addUsedCode() : firstCodeableConcept;
  }
}

modelTypeRegistry.register('Procedure', Procedure, true);

/** True when the value is a Procedure model instance. */
export function isProcedure(candidate: unknown): candidate is Procedure {
  return candidate instanceof Procedure;
}

/**
 * The people who performed the procedure
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
            'Device',
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
  ];

  /** Type of performance (0..1) */
  function?: CodeableConcept;

  /** The reference to the practitioner (1..1) */
  actor?: Reference;

  /** Organization the device or practitioner was acting for (0..1) */
  onBehalfOf?: Reference;

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

  /** The reference to the practitioner (1..1) Created when absent. */
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
