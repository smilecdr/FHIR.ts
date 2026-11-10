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
import { Dosage } from './dosage';
import { Duration } from './duration';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Quantity } from './quantity';
import { Reference } from './reference';

/**
 * Base StructureDefinition for MedicationRequest Resource
 */
export class MedicationRequest extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'definition',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'definition',
          typeCode: 'Reference',
          targetResourceTypes: ['ActivityDefinition', 'PlanDefinition'],
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
            'MedicationRequest',
            'ProcedureRequest',
            'ReferralRequest',
          ],
        },
      ],
    },
    {
      elementName: 'groupIdentifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'groupIdentifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'status',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'status',
          typeCode: 'code',
          allowedCodes: valueSetCodes.MedicationRequestStatus,
        },
      ],
    },
    {
      elementName: 'intent',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'intent',
          typeCode: 'code',
          allowedCodes: valueSetCodes.MedicationRequestIntent,
        },
      ],
    },
    {
      elementName: 'category',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'priority',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'priority',
          typeCode: 'code',
          allowedCodes: valueSetCodes.MedicationRequestPriority,
        },
      ],
    },
    {
      elementName: 'medication',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'medicationCodeableConcept', typeCode: 'CodeableConcept' },
        {
          jsonKey: 'medicationReference',
          typeCode: 'Reference',
          targetResourceTypes: ['Medication'],
        },
      ],
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
      elementName: 'supportingInformation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'supportingInformation', typeCode: 'Reference' }],
    },
    {
      elementName: 'authoredOn',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'authoredOn', typeCode: 'dateTime' }],
    },
    {
      elementName: 'requester',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'requester', typeCode: 'MedicationRequestRequester' }],
    },
    {
      elementName: 'recorder',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'recorder', typeCode: 'Reference', targetResourceTypes: ['Practitioner'] },
      ],
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
          targetResourceTypes: ['Condition', 'Observation'],
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
      elementName: 'dosageInstruction',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'dosageInstruction', typeCode: 'Dosage' }],
    },
    {
      elementName: 'dispenseRequest',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'dispenseRequest', typeCode: 'MedicationRequestDispenseRequest' }],
    },
    {
      elementName: 'substitution',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'substitution', typeCode: 'MedicationRequestSubstitution' }],
    },
    {
      elementName: 'priorPrescription',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'priorPrescription',
          typeCode: 'Reference',
          targetResourceTypes: ['MedicationRequest'],
        },
      ],
    },
    {
      elementName: 'detectedIssue',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'detectedIssue', typeCode: 'Reference', targetResourceTypes: ['DetectedIssue'] },
      ],
    },
    {
      elementName: 'eventHistory',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'eventHistory', typeCode: 'Reference', targetResourceTypes: ['Provenance'] },
      ],
    },
  ];

  readonly resourceType = 'MedicationRequest';

  /** External ids for this request (0..*) */
  identifier?: Identifier[];

  /** Protocol or definition (0..*) */
  definition?: Reference[];

  /** What request fulfills (0..*) */
  basedOn?: Reference[];

  /** Composite request this is part of (0..1) */
  groupIdentifier?: Identifier;

  /** active | on-hold | cancelled | completed | entered-in-error | stopped | draft | unknown (0..1) */
  status?: valueSetCodes.MedicationRequestStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** proposal | plan | order | instance-order (1..1) */
  intent?: valueSetCodes.MedicationRequestIntent;
  /** Id and extensions of the primitive `intent`. */
  _intent?: Element;

  /** Type of medication usage (0..1) */
  category?: CodeableConcept;

  /** routine | urgent | stat | asap (0..1) */
  priority?: valueSetCodes.MedicationRequestPriority;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;

  /** Medication to be taken (1..1) */
  medicationCodeableConcept?: CodeableConcept;
  /** Medication to be taken (1..1) */
  medicationReference?: Reference;

  /** Who or group medication request is for (1..1) */
  subject?: Reference;

  /** Created during encounter/admission/stay (0..1) */
  context?: Reference;

  /** Information to support ordering of the medication (0..*) */
  supportingInformation?: Reference[];

  /** When request was initially authored (0..1) */
  authoredOn?: string;
  /** Id and extensions of the primitive `authoredOn`. */
  _authoredOn?: Element;

  /** Who/What requested the Request (0..1) */
  requester?: MedicationRequestRequester;

  /** Person who entered the request (0..1) */
  recorder?: Reference;

  /** Reason or indication for writing the prescription (0..*) */
  reasonCode?: CodeableConcept[];

  /** Condition or Observation that supports why the prescription is being written (0..*) */
  reasonReference?: Reference[];

  /** Information about the prescription (0..*) */
  note?: Annotation[];

  /** How the medication should be taken (0..*) */
  dosageInstruction?: Dosage[];

  /** Medication supply authorization (0..1) */
  dispenseRequest?: MedicationRequestDispenseRequest;

  /** Any restrictions on medication substitution (0..1) */
  substitution?: MedicationRequestSubstitution;

  /** An order/prescription that is being replaced (0..1) */
  priorPrescription?: Reference;

  /** Clinical Issue with action (0..*) */
  detectedIssue?: Reference[];

  /** A list of events of interest in the lifecycle (0..*) */
  eventHistory?: Reference[];

  override fhirType(): string {
    return 'MedicationRequest';
  }

  /** FHIR JSON for this MedicationRequest, typed as the plain `MedicationRequest` data type. */
  override toJSON(): plainTypes.MedicationRequest {
    return this.serialize() as plainTypes.MedicationRequest;
  }

  /** External ids for this request (0..*) Never undefined; an empty list is created when absent. */
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

  /** Protocol or definition (0..*) Never undefined; an empty list is created when absent. */
  getDefinition(): Reference[] {
    if (this.definition === undefined) {
      this.definition = [];
    }
    return this.definition;
  }

  setDefinition(definition: Reference[] | undefined): this {
    return this.setFieldValue('definition', definition);
  }

  hasDefinition(): boolean {
    return this.hasFieldValue('definition');
  }

  /** Appends a new, empty Reference to `definition` and returns it so it can be filled in. */
  addDefinition(): Reference;
  /** Appends the given Reference to `definition` and returns this object for chaining. */
  addDefinition(reference: Reference): this;
  addDefinition(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('definition', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('definition', createdReference);
    return createdReference;
  }

  /** The first Reference of `definition`. One is added when the list is empty. */
  getDefinitionFirstRep(): Reference {
    const firstReference = this.getDefinition()[0];
    return firstReference === undefined ? this.addDefinition() : firstReference;
  }

  /** What request fulfills (0..*) Never undefined; an empty list is created when absent. */
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

  /** Composite request this is part of (0..1) Created when absent. */
  getGroupIdentifier(): Identifier {
    if (this.groupIdentifier === undefined) {
      this.groupIdentifier = new Identifier();
    }
    return this.groupIdentifier;
  }

  setGroupIdentifier(groupIdentifier: Identifier | undefined): this {
    return this.setFieldValue('groupIdentifier', groupIdentifier);
  }

  hasGroupIdentifier(): boolean {
    return this.hasFieldValue('groupIdentifier');
  }

  /** active | on-hold | cancelled | completed | entered-in-error | stopped | draft | unknown (0..1) */
  getStatus(): valueSetCodes.MedicationRequestStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.MedicationRequestStatus | undefined): this {
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

  /** proposal | plan | order | instance-order (1..1) */
  getIntent(): valueSetCodes.MedicationRequestIntent | undefined {
    return this.intent;
  }

  /** Sets `intent`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setIntent(intent: valueSetCodes.MedicationRequestIntent | undefined): this {
    return this.setFieldValue('intent', intent);
  }

  hasIntent(): boolean {
    return this.hasFieldValue('intent');
  }

  /** The element carrying the id and extensions of `intent`. Created when absent. */
  getIntentElement(): Element {
    if (this._intent === undefined) {
      this._intent = new Element();
    }
    return this._intent;
  }

  setIntentElement(intentElement: Element | undefined): this {
    this._intent = intentElement;
    return this;
  }

  /** Type of medication usage (0..1) Created when absent. */
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

  /** routine | urgent | stat | asap (0..1) */
  getPriority(): valueSetCodes.MedicationRequestPriority | undefined {
    return this.priority;
  }

  /** Sets `priority`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setPriority(priority: valueSetCodes.MedicationRequestPriority | undefined): this {
    return this.setFieldValue('priority', priority);
  }

  hasPriority(): boolean {
    return this.hasFieldValue('priority');
  }

  /** The element carrying the id and extensions of `priority`. Created when absent. */
  getPriorityElement(): Element {
    if (this._priority === undefined) {
      this._priority = new Element();
    }
    return this._priority;
  }

  setPriorityElement(priorityElement: Element | undefined): this {
    this._priority = priorityElement;
    return this;
  }

  /** Medication to be taken (1..1) Whichever type of `medication[x]` is set. */
  getMedication(): CodeableConcept | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | Reference>('medication');
  }

  /** True when any type of `medication[x]` is set. */
  hasMedication(): boolean {
    return this.hasChoiceValue('medication');
  }

  getMedicationCodeableConcept(): CodeableConcept | undefined {
    return this.medicationCodeableConcept;
  }

  /** Sets `medication[x]` as CodeableConcept and clears every other type of it. */
  setMedicationCodeableConcept(medicationCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('medicationCodeableConcept', medicationCodeableConcept);
  }

  hasMedicationCodeableConcept(): boolean {
    return this.hasFieldValue('medicationCodeableConcept');
  }

  getMedicationReference(): Reference | undefined {
    return this.medicationReference;
  }

  /** Sets `medication[x]` as Reference and clears every other type of it. */
  setMedicationReference(medicationReference: Reference | undefined): this {
    return this.setFieldValue('medicationReference', medicationReference);
  }

  hasMedicationReference(): boolean {
    return this.hasFieldValue('medicationReference');
  }

  /** Who or group medication request is for (1..1) Created when absent. */
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

  /** Created during encounter/admission/stay (0..1) Created when absent. */
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

  /** Information to support ordering of the medication (0..*) Never undefined; an empty list is created when absent. */
  getSupportingInformation(): Reference[] {
    if (this.supportingInformation === undefined) {
      this.supportingInformation = [];
    }
    return this.supportingInformation;
  }

  setSupportingInformation(supportingInformation: Reference[] | undefined): this {
    return this.setFieldValue('supportingInformation', supportingInformation);
  }

  hasSupportingInformation(): boolean {
    return this.hasFieldValue('supportingInformation');
  }

  /** Appends a new, empty Reference to `supportingInformation` and returns it so it can be filled in. */
  addSupportingInformation(): Reference;
  /** Appends the given Reference to `supportingInformation` and returns this object for chaining. */
  addSupportingInformation(reference: Reference): this;
  addSupportingInformation(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('supportingInformation', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('supportingInformation', createdReference);
    return createdReference;
  }

  /** The first Reference of `supportingInformation`. One is added when the list is empty. */
  getSupportingInformationFirstRep(): Reference {
    const firstReference = this.getSupportingInformation()[0];
    return firstReference === undefined ? this.addSupportingInformation() : firstReference;
  }

  /** When request was initially authored (0..1) */
  getAuthoredOn(): string | undefined {
    return this.authoredOn;
  }

  /** Sets `authoredOn`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setAuthoredOn(authoredOn: string | undefined): this {
    return this.setFieldValue('authoredOn', authoredOn);
  }

  hasAuthoredOn(): boolean {
    return this.hasFieldValue('authoredOn');
  }

  /** The element carrying the id and extensions of `authoredOn`. Created when absent. */
  getAuthoredOnElement(): Element {
    if (this._authoredOn === undefined) {
      this._authoredOn = new Element();
    }
    return this._authoredOn;
  }

  setAuthoredOnElement(authoredOnElement: Element | undefined): this {
    this._authoredOn = authoredOnElement;
    return this;
  }

  /** Who/What requested the Request (0..1) Created when absent. */
  getRequester(): MedicationRequestRequester {
    if (this.requester === undefined) {
      this.requester = new MedicationRequestRequester();
    }
    return this.requester;
  }

  setRequester(requester: MedicationRequestRequester | undefined): this {
    return this.setFieldValue('requester', requester);
  }

  hasRequester(): boolean {
    return this.hasFieldValue('requester');
  }

  /** Person who entered the request (0..1) Created when absent. */
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

  /** Reason or indication for writing the prescription (0..*) Never undefined; an empty list is created when absent. */
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

  /** Condition or Observation that supports why the prescription is being written (0..*) Never undefined; an empty list is created when absent. */
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

  /** Information about the prescription (0..*) Never undefined; an empty list is created when absent. */
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

  /** How the medication should be taken (0..*) Never undefined; an empty list is created when absent. */
  getDosageInstruction(): Dosage[] {
    if (this.dosageInstruction === undefined) {
      this.dosageInstruction = [];
    }
    return this.dosageInstruction;
  }

  setDosageInstruction(dosageInstruction: Dosage[] | undefined): this {
    return this.setFieldValue('dosageInstruction', dosageInstruction);
  }

  hasDosageInstruction(): boolean {
    return this.hasFieldValue('dosageInstruction');
  }

  /** Appends a new, empty Dosage to `dosageInstruction` and returns it so it can be filled in. */
  addDosageInstruction(): Dosage;
  /** Appends the given Dosage to `dosageInstruction` and returns this object for chaining. */
  addDosageInstruction(dosage: Dosage): this;
  addDosageInstruction(dosage?: Dosage): Dosage | this {
    if (dosage !== undefined) {
      return this.addFieldValue('dosageInstruction', dosage);
    }
    const createdDosage = new Dosage();
    this.addFieldValue('dosageInstruction', createdDosage);
    return createdDosage;
  }

  /** The first Dosage of `dosageInstruction`. One is added when the list is empty. */
  getDosageInstructionFirstRep(): Dosage {
    const firstDosage = this.getDosageInstruction()[0];
    return firstDosage === undefined ? this.addDosageInstruction() : firstDosage;
  }

  /** Medication supply authorization (0..1) Created when absent. */
  getDispenseRequest(): MedicationRequestDispenseRequest {
    if (this.dispenseRequest === undefined) {
      this.dispenseRequest = new MedicationRequestDispenseRequest();
    }
    return this.dispenseRequest;
  }

  setDispenseRequest(dispenseRequest: MedicationRequestDispenseRequest | undefined): this {
    return this.setFieldValue('dispenseRequest', dispenseRequest);
  }

  hasDispenseRequest(): boolean {
    return this.hasFieldValue('dispenseRequest');
  }

  /** Any restrictions on medication substitution (0..1) Created when absent. */
  getSubstitution(): MedicationRequestSubstitution {
    if (this.substitution === undefined) {
      this.substitution = new MedicationRequestSubstitution();
    }
    return this.substitution;
  }

  setSubstitution(substitution: MedicationRequestSubstitution | undefined): this {
    return this.setFieldValue('substitution', substitution);
  }

  hasSubstitution(): boolean {
    return this.hasFieldValue('substitution');
  }

  /** An order/prescription that is being replaced (0..1) Created when absent. */
  getPriorPrescription(): Reference {
    if (this.priorPrescription === undefined) {
      this.priorPrescription = new Reference();
    }
    return this.priorPrescription;
  }

  setPriorPrescription(priorPrescription: Reference | undefined): this {
    return this.setFieldValue('priorPrescription', priorPrescription);
  }

  hasPriorPrescription(): boolean {
    return this.hasFieldValue('priorPrescription');
  }

  /** Clinical Issue with action (0..*) Never undefined; an empty list is created when absent. */
  getDetectedIssue(): Reference[] {
    if (this.detectedIssue === undefined) {
      this.detectedIssue = [];
    }
    return this.detectedIssue;
  }

  setDetectedIssue(detectedIssue: Reference[] | undefined): this {
    return this.setFieldValue('detectedIssue', detectedIssue);
  }

  hasDetectedIssue(): boolean {
    return this.hasFieldValue('detectedIssue');
  }

  /** Appends a new, empty Reference to `detectedIssue` and returns it so it can be filled in. */
  addDetectedIssue(): Reference;
  /** Appends the given Reference to `detectedIssue` and returns this object for chaining. */
  addDetectedIssue(reference: Reference): this;
  addDetectedIssue(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('detectedIssue', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('detectedIssue', createdReference);
    return createdReference;
  }

  /** The first Reference of `detectedIssue`. One is added when the list is empty. */
  getDetectedIssueFirstRep(): Reference {
    const firstReference = this.getDetectedIssue()[0];
    return firstReference === undefined ? this.addDetectedIssue() : firstReference;
  }

  /** A list of events of interest in the lifecycle (0..*) Never undefined; an empty list is created when absent. */
  getEventHistory(): Reference[] {
    if (this.eventHistory === undefined) {
      this.eventHistory = [];
    }
    return this.eventHistory;
  }

  setEventHistory(eventHistory: Reference[] | undefined): this {
    return this.setFieldValue('eventHistory', eventHistory);
  }

  hasEventHistory(): boolean {
    return this.hasFieldValue('eventHistory');
  }

  /** Appends a new, empty Reference to `eventHistory` and returns it so it can be filled in. */
  addEventHistory(): Reference;
  /** Appends the given Reference to `eventHistory` and returns this object for chaining. */
  addEventHistory(reference: Reference): this;
  addEventHistory(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('eventHistory', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('eventHistory', createdReference);
    return createdReference;
  }

  /** The first Reference of `eventHistory`. One is added when the list is empty. */
  getEventHistoryFirstRep(): Reference {
    const firstReference = this.getEventHistory()[0];
    return firstReference === undefined ? this.addEventHistory() : firstReference;
  }
}

modelTypeRegistry.register('MedicationRequest', MedicationRequest, true);

/** True when the value is a MedicationRequest model instance. */
export function isMedicationRequest(candidate: unknown): candidate is MedicationRequest {
  return candidate instanceof MedicationRequest;
}

/**
 * Who/What requested the Request
 */
export class MedicationRequestRequester extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'agent',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'agent',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Device',
            'Organization',
            'Patient',
            'Practitioner',
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

  /** Who ordered the initial medication(s) (1..1) */
  agent?: Reference;

  /** Organization agent is acting for (0..1) */
  onBehalfOf?: Reference;

  override fhirType(): string {
    return 'MedicationRequest.requester';
  }

  /** FHIR JSON for this MedicationRequestRequester, typed as the plain `MedicationRequestRequester` data type. */
  override toJSON(): plainTypes.MedicationRequestRequester {
    return this.serialize() as plainTypes.MedicationRequestRequester;
  }

  /** Who ordered the initial medication(s) (1..1) Created when absent. */
  getAgent(): Reference {
    if (this.agent === undefined) {
      this.agent = new Reference();
    }
    return this.agent;
  }

  setAgent(agent: Reference | undefined): this {
    return this.setFieldValue('agent', agent);
  }

  hasAgent(): boolean {
    return this.hasFieldValue('agent');
  }

  /** Organization agent is acting for (0..1) Created when absent. */
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

modelTypeRegistry.register('MedicationRequestRequester', MedicationRequestRequester, false);

/**
 * Medication supply authorization
 */
export class MedicationRequestDispenseRequest extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'validityPeriod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'validityPeriod', typeCode: 'Period' }],
    },
    {
      elementName: 'numberOfRepeatsAllowed',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'numberOfRepeatsAllowed', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'expectedSupplyDuration',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'expectedSupplyDuration', typeCode: 'Duration' }],
    },
    {
      elementName: 'performer',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'performer', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
  ];

  /** Time period supply is authorized for (0..1) */
  validityPeriod?: Period;

  /** Number of refills authorized (0..1) */
  numberOfRepeatsAllowed?: number;
  /** Id and extensions of the primitive `numberOfRepeatsAllowed`. */
  _numberOfRepeatsAllowed?: Element;

  /** Amount of medication to supply per dispense (0..1) */
  quantity?: Quantity;

  /** Number of days supply per dispense (0..1) */
  expectedSupplyDuration?: Duration;

  /** Intended dispenser (0..1) */
  performer?: Reference;

  override fhirType(): string {
    return 'MedicationRequest.dispenseRequest';
  }

  /** FHIR JSON for this MedicationRequestDispenseRequest, typed as the plain `MedicationRequestDispenseRequest` data type. */
  override toJSON(): plainTypes.MedicationRequestDispenseRequest {
    return this.serialize() as plainTypes.MedicationRequestDispenseRequest;
  }

  /** Time period supply is authorized for (0..1) Created when absent. */
  getValidityPeriod(): Period {
    if (this.validityPeriod === undefined) {
      this.validityPeriod = new Period();
    }
    return this.validityPeriod;
  }

  setValidityPeriod(validityPeriod: Period | undefined): this {
    return this.setFieldValue('validityPeriod', validityPeriod);
  }

  hasValidityPeriod(): boolean {
    return this.hasFieldValue('validityPeriod');
  }

  /** Number of refills authorized (0..1) */
  getNumberOfRepeatsAllowed(): number | undefined {
    return this.numberOfRepeatsAllowed;
  }

  /** Sets `numberOfRepeatsAllowed`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setNumberOfRepeatsAllowed(numberOfRepeatsAllowed: number | undefined): this {
    return this.setFieldValue('numberOfRepeatsAllowed', numberOfRepeatsAllowed);
  }

  hasNumberOfRepeatsAllowed(): boolean {
    return this.hasFieldValue('numberOfRepeatsAllowed');
  }

  /** The element carrying the id and extensions of `numberOfRepeatsAllowed`. Created when absent. */
  getNumberOfRepeatsAllowedElement(): Element {
    if (this._numberOfRepeatsAllowed === undefined) {
      this._numberOfRepeatsAllowed = new Element();
    }
    return this._numberOfRepeatsAllowed;
  }

  setNumberOfRepeatsAllowedElement(numberOfRepeatsAllowedElement: Element | undefined): this {
    this._numberOfRepeatsAllowed = numberOfRepeatsAllowedElement;
    return this;
  }

  /** Amount of medication to supply per dispense (0..1) Created when absent. */
  getQuantity(): Quantity {
    if (this.quantity === undefined) {
      this.quantity = new Quantity();
    }
    return this.quantity;
  }

  setQuantity(quantity: Quantity | undefined): this {
    return this.setFieldValue('quantity', quantity);
  }

  hasQuantity(): boolean {
    return this.hasFieldValue('quantity');
  }

  /** Number of days supply per dispense (0..1) Created when absent. */
  getExpectedSupplyDuration(): Duration {
    if (this.expectedSupplyDuration === undefined) {
      this.expectedSupplyDuration = new Duration();
    }
    return this.expectedSupplyDuration;
  }

  setExpectedSupplyDuration(expectedSupplyDuration: Duration | undefined): this {
    return this.setFieldValue('expectedSupplyDuration', expectedSupplyDuration);
  }

  hasExpectedSupplyDuration(): boolean {
    return this.hasFieldValue('expectedSupplyDuration');
  }

  /** Intended dispenser (0..1) Created when absent. */
  getPerformer(): Reference {
    if (this.performer === undefined) {
      this.performer = new Reference();
    }
    return this.performer;
  }

  setPerformer(performer: Reference | undefined): this {
    return this.setFieldValue('performer', performer);
  }

  hasPerformer(): boolean {
    return this.hasFieldValue('performer');
  }
}

modelTypeRegistry.register(
  'MedicationRequestDispenseRequest',
  MedicationRequestDispenseRequest,
  false
);

/**
 * Any restrictions on medication substitution
 */
export class MedicationRequestSubstitution extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'allowed',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'allowed', typeCode: 'boolean' }],
    },
    {
      elementName: 'reason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reason', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Whether substitution is allowed or not (1..1) */
  allowed?: boolean;
  /** Id and extensions of the primitive `allowed`. */
  _allowed?: Element;

  /** Why should (not) substitution be made (0..1) */
  reason?: CodeableConcept;

  override fhirType(): string {
    return 'MedicationRequest.substitution';
  }

  /** FHIR JSON for this MedicationRequestSubstitution, typed as the plain `MedicationRequestSubstitution` data type. */
  override toJSON(): plainTypes.MedicationRequestSubstitution {
    return this.serialize() as plainTypes.MedicationRequestSubstitution;
  }

  /** Whether substitution is allowed or not (1..1) */
  getAllowed(): boolean | undefined {
    return this.allowed;
  }

  /** Sets `allowed`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setAllowed(allowed: boolean | undefined): this {
    return this.setFieldValue('allowed', allowed);
  }

  hasAllowed(): boolean {
    return this.hasFieldValue('allowed');
  }

  /** The element carrying the id and extensions of `allowed`. Created when absent. */
  getAllowedElement(): Element {
    if (this._allowed === undefined) {
      this._allowed = new Element();
    }
    return this._allowed;
  }

  setAllowedElement(allowedElement: Element | undefined): this {
    this._allowed = allowedElement;
    return this;
  }

  /** Why should (not) substitution be made (0..1) Created when absent. */
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
}

modelTypeRegistry.register('MedicationRequestSubstitution', MedicationRequestSubstitution, false);
