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
import { Dosage } from './dosage';
import { Duration } from './duration';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Quantity } from './quantity';
import { Reference } from './reference';

/**
 * An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns.
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
            'ImmunizationRecommendation',
            'MedicationRequest',
            'ServiceRequest',
          ],
        },
      ],
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
      elementName: 'groupIdentifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'groupIdentifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'status',
          typeCode: 'code',
          allowedCodes: valueSetCodes.MedicationrequestStatus,
        },
      ],
    },
    {
      elementName: 'statusReason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'statusReason', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'statusChanged',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'statusChanged', typeCode: 'dateTime' }],
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
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'priority',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'priority', typeCode: 'code', allowedCodes: valueSetCodes.RequestPriority },
      ],
    },
    {
      elementName: 'doNotPerform',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'doNotPerform', typeCode: 'boolean' }],
    },
    {
      elementName: 'medication',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'medication', typeCode: 'CodeableReference' }],
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
      elementName: 'informationSource',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'informationSource',
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
      elementName: 'encounter',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'encounter', typeCode: 'Reference', targetResourceTypes: ['Encounter'] }],
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
      types: [
        {
          jsonKey: 'requester',
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
      elementName: 'reported',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reported', typeCode: 'boolean' }],
    },
    {
      elementName: 'performerType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'performerType', typeCode: 'CodeableConcept' }],
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
            'DeviceDefinition',
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
      elementName: 'device',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'device', typeCode: 'CodeableReference' }],
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
          targetResourceTypes: ['Practitioner', 'PractitionerRole'],
        },
      ],
    },
    {
      elementName: 'reason',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reason', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'courseOfTherapyType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'courseOfTherapyType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'insurance',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'insurance',
          typeCode: 'Reference',
          targetResourceTypes: ['ClaimResponse', 'Coverage'],
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
      elementName: 'renderedDosageInstruction',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'renderedDosageInstruction', typeCode: 'markdown' }],
    },
    {
      elementName: 'effectiveDosePeriod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'effectiveDosePeriod', typeCode: 'Period' }],
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

  /** A plan or request that is fulfilled in whole or in part by this medication request (0..*) */
  basedOn?: Reference[];

  /** Reference to an order/prescription that is being replaced by this MedicationRequest (0..1) */
  priorPrescription?: Reference;

  /** Composite request this is part of (0..1) */
  groupIdentifier?: Identifier;

  /** active | on-hold | ended | stopped | completed | cancelled | entered-in-error | draft | unknown (1..1) */
  status?: valueSetCodes.MedicationrequestStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Reason for current status (0..1) */
  statusReason?: CodeableConcept;

  /** When the status was changed (0..1) */
  statusChanged?: string;
  /** Id and extensions of the primitive `statusChanged`. */
  _statusChanged?: Element;

  /** proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option (1..1) */
  intent?: valueSetCodes.MedicationRequestIntent;
  /** Id and extensions of the primitive `intent`. */
  _intent?: Element;

  /** Grouping or category of medication request (0..*) */
  category?: CodeableConcept[];

  /** routine | urgent | asap | stat (0..1) */
  priority?: valueSetCodes.RequestPriority;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;

  /** True if patient is to stop taking or not to start taking the medication (0..1) */
  doNotPerform?: boolean;
  /** Id and extensions of the primitive `doNotPerform`. */
  _doNotPerform?: Element;

  /** Medication to be taken (1..1) */
  medication?: CodeableReference;

  /** Individual or group for whom the medication has been requested (1..1) */
  subject?: Reference;

  /** The person or organization who provided the information about this request, if the source is someone other than the requestor (0..*) */
  informationSource?: Reference[];

  /** Encounter created as part of encounter/admission/stay (0..1) */
  encounter?: Reference;

  /** Information to support fulfilling of the medication (0..*) */
  supportingInformation?: Reference[];

  /** When request was initially authored (0..1) */
  authoredOn?: string;
  /** Id and extensions of the primitive `authoredOn`. */
  _authoredOn?: Element;

  /** Who/What requested the Request (0..1) */
  requester?: Reference;

  /** Reported rather than primary record (0..1) */
  reported?: boolean;
  /** Id and extensions of the primitive `reported`. */
  _reported?: Element;

  /** Desired kind of performer of the medication administration (0..1) */
  performerType?: CodeableConcept;

  /** Intended performer of administration (0..*) */
  performer?: Reference[];

  /** Intended type of device for the administration (0..*) */
  device?: CodeableReference[];

  /** Person who entered the request (0..1) */
  recorder?: Reference;

  /** Reason or indication for ordering or not ordering the medication (0..*) */
  reason?: CodeableReference[];

  /** Overall pattern of medication administration (0..1) */
  courseOfTherapyType?: CodeableConcept;

  /** Associated insurance coverage (0..*) */
  insurance?: Reference[];

  /** Information about the prescription (0..*) */
  note?: Annotation[];

  /** Full representation of the dosage instructions (0..1) */
  renderedDosageInstruction?: string;
  /** Id and extensions of the primitive `renderedDosageInstruction`. */
  _renderedDosageInstruction?: Element;

  /** Period over which the medication is to be taken (0..1) */
  effectiveDosePeriod?: Period;

  /** Specific instructions for how the medication should be taken (0..*) */
  dosageInstruction?: Dosage[];

  /** Medication supply authorization (0..1) */
  dispenseRequest?: MedicationRequestDispenseRequest;

  /** Any restrictions on medication substitution (0..1) */
  substitution?: MedicationRequestSubstitution;

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

  /** A plan or request that is fulfilled in whole or in part by this medication request (0..*) Never undefined; an empty list is created when absent. */
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

  /** Reference to an order/prescription that is being replaced by this MedicationRequest (0..1) Created when absent. */
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

  /** active | on-hold | ended | stopped | completed | cancelled | entered-in-error | draft | unknown (1..1) */
  getStatus(): valueSetCodes.MedicationrequestStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.MedicationrequestStatus | undefined): this {
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

  /** When the status was changed (0..1) */
  getStatusChanged(): string | undefined {
    return this.statusChanged;
  }

  /** Sets `statusChanged`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setStatusChanged(statusChanged: string | undefined): this {
    return this.setFieldValue('statusChanged', statusChanged);
  }

  hasStatusChanged(): boolean {
    return this.hasFieldValue('statusChanged');
  }

  /** The element carrying the id and extensions of `statusChanged`. Created when absent. */
  getStatusChangedElement(): Element {
    if (this._statusChanged === undefined) {
      this._statusChanged = new Element();
    }
    return this._statusChanged;
  }

  setStatusChangedElement(statusChangedElement: Element | undefined): this {
    this._statusChanged = statusChangedElement;
    return this;
  }

  /** proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option (1..1) */
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

  /** Grouping or category of medication request (0..*) Never undefined; an empty list is created when absent. */
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

  /** routine | urgent | asap | stat (0..1) */
  getPriority(): valueSetCodes.RequestPriority | undefined {
    return this.priority;
  }

  /** Sets `priority`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setPriority(priority: valueSetCodes.RequestPriority | undefined): this {
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

  /** True if patient is to stop taking or not to start taking the medication (0..1) */
  getDoNotPerform(): boolean | undefined {
    return this.doNotPerform;
  }

  /** Sets `doNotPerform`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setDoNotPerform(doNotPerform: boolean | undefined): this {
    return this.setFieldValue('doNotPerform', doNotPerform);
  }

  hasDoNotPerform(): boolean {
    return this.hasFieldValue('doNotPerform');
  }

  /** The element carrying the id and extensions of `doNotPerform`. Created when absent. */
  getDoNotPerformElement(): Element {
    if (this._doNotPerform === undefined) {
      this._doNotPerform = new Element();
    }
    return this._doNotPerform;
  }

  setDoNotPerformElement(doNotPerformElement: Element | undefined): this {
    this._doNotPerform = doNotPerformElement;
    return this;
  }

  /** Medication to be taken (1..1) Created when absent. */
  getMedication(): CodeableReference {
    if (this.medication === undefined) {
      this.medication = new CodeableReference();
    }
    return this.medication;
  }

  setMedication(medication: CodeableReference | undefined): this {
    return this.setFieldValue('medication', medication);
  }

  hasMedication(): boolean {
    return this.hasFieldValue('medication');
  }

  /** Individual or group for whom the medication has been requested (1..1) Created when absent. */
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

  /** The person or organization who provided the information about this request, if the source is someone other than the requestor (0..*) Never undefined; an empty list is created when absent. */
  getInformationSource(): Reference[] {
    if (this.informationSource === undefined) {
      this.informationSource = [];
    }
    return this.informationSource;
  }

  setInformationSource(informationSource: Reference[] | undefined): this {
    return this.setFieldValue('informationSource', informationSource);
  }

  hasInformationSource(): boolean {
    return this.hasFieldValue('informationSource');
  }

  /** Appends a new, empty Reference to `informationSource` and returns it so it can be filled in. */
  addInformationSource(): Reference;
  /** Appends the given Reference to `informationSource` and returns this object for chaining. */
  addInformationSource(reference: Reference): this;
  addInformationSource(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('informationSource', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('informationSource', createdReference);
    return createdReference;
  }

  /** The first Reference of `informationSource`. One is added when the list is empty. */
  getInformationSourceFirstRep(): Reference {
    const firstReference = this.getInformationSource()[0];
    return firstReference === undefined ? this.addInformationSource() : firstReference;
  }

  /** Encounter created as part of encounter/admission/stay (0..1) Created when absent. */
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

  /** Information to support fulfilling of the medication (0..*) Never undefined; an empty list is created when absent. */
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
  getRequester(): Reference {
    if (this.requester === undefined) {
      this.requester = new Reference();
    }
    return this.requester;
  }

  setRequester(requester: Reference | undefined): this {
    return this.setFieldValue('requester', requester);
  }

  hasRequester(): boolean {
    return this.hasFieldValue('requester');
  }

  /** Reported rather than primary record (0..1) */
  getReported(): boolean | undefined {
    return this.reported;
  }

  /** Sets `reported`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setReported(reported: boolean | undefined): this {
    return this.setFieldValue('reported', reported);
  }

  hasReported(): boolean {
    return this.hasFieldValue('reported');
  }

  /** The element carrying the id and extensions of `reported`. Created when absent. */
  getReportedElement(): Element {
    if (this._reported === undefined) {
      this._reported = new Element();
    }
    return this._reported;
  }

  setReportedElement(reportedElement: Element | undefined): this {
    this._reported = reportedElement;
    return this;
  }

  /** Desired kind of performer of the medication administration (0..1) Created when absent. */
  getPerformerType(): CodeableConcept {
    if (this.performerType === undefined) {
      this.performerType = new CodeableConcept();
    }
    return this.performerType;
  }

  setPerformerType(performerType: CodeableConcept | undefined): this {
    return this.setFieldValue('performerType', performerType);
  }

  hasPerformerType(): boolean {
    return this.hasFieldValue('performerType');
  }

  /** Intended performer of administration (0..*) Never undefined; an empty list is created when absent. */
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

  /** Intended type of device for the administration (0..*) Never undefined; an empty list is created when absent. */
  getDevice(): CodeableReference[] {
    if (this.device === undefined) {
      this.device = [];
    }
    return this.device;
  }

  setDevice(device: CodeableReference[] | undefined): this {
    return this.setFieldValue('device', device);
  }

  hasDevice(): boolean {
    return this.hasFieldValue('device');
  }

  /** Appends a new, empty CodeableReference to `device` and returns it so it can be filled in. */
  addDevice(): CodeableReference;
  /** Appends the given CodeableReference to `device` and returns this object for chaining. */
  addDevice(codeableReference: CodeableReference): this;
  addDevice(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('device', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('device', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `device`. One is added when the list is empty. */
  getDeviceFirstRep(): CodeableReference {
    const firstCodeableReference = this.getDevice()[0];
    return firstCodeableReference === undefined ? this.addDevice() : firstCodeableReference;
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

  /** Reason or indication for ordering or not ordering the medication (0..*) Never undefined; an empty list is created when absent. */
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

  /** Overall pattern of medication administration (0..1) Created when absent. */
  getCourseOfTherapyType(): CodeableConcept {
    if (this.courseOfTherapyType === undefined) {
      this.courseOfTherapyType = new CodeableConcept();
    }
    return this.courseOfTherapyType;
  }

  setCourseOfTherapyType(courseOfTherapyType: CodeableConcept | undefined): this {
    return this.setFieldValue('courseOfTherapyType', courseOfTherapyType);
  }

  hasCourseOfTherapyType(): boolean {
    return this.hasFieldValue('courseOfTherapyType');
  }

  /** Associated insurance coverage (0..*) Never undefined; an empty list is created when absent. */
  getInsurance(): Reference[] {
    if (this.insurance === undefined) {
      this.insurance = [];
    }
    return this.insurance;
  }

  setInsurance(insurance: Reference[] | undefined): this {
    return this.setFieldValue('insurance', insurance);
  }

  hasInsurance(): boolean {
    return this.hasFieldValue('insurance');
  }

  /** Appends a new, empty Reference to `insurance` and returns it so it can be filled in. */
  addInsurance(): Reference;
  /** Appends the given Reference to `insurance` and returns this object for chaining. */
  addInsurance(reference: Reference): this;
  addInsurance(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('insurance', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('insurance', createdReference);
    return createdReference;
  }

  /** The first Reference of `insurance`. One is added when the list is empty. */
  getInsuranceFirstRep(): Reference {
    const firstReference = this.getInsurance()[0];
    return firstReference === undefined ? this.addInsurance() : firstReference;
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

  /** Full representation of the dosage instructions (0..1) */
  getRenderedDosageInstruction(): string | undefined {
    return this.renderedDosageInstruction;
  }

  /** Sets `renderedDosageInstruction`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setRenderedDosageInstruction(renderedDosageInstruction: string | undefined): this {
    return this.setFieldValue('renderedDosageInstruction', renderedDosageInstruction);
  }

  hasRenderedDosageInstruction(): boolean {
    return this.hasFieldValue('renderedDosageInstruction');
  }

  /** The element carrying the id and extensions of `renderedDosageInstruction`. Created when absent. */
  getRenderedDosageInstructionElement(): Element {
    if (this._renderedDosageInstruction === undefined) {
      this._renderedDosageInstruction = new Element();
    }
    return this._renderedDosageInstruction;
  }

  setRenderedDosageInstructionElement(renderedDosageInstructionElement: Element | undefined): this {
    this._renderedDosageInstruction = renderedDosageInstructionElement;
    return this;
  }

  /** Period over which the medication is to be taken (0..1) Created when absent. */
  getEffectiveDosePeriod(): Period {
    if (this.effectiveDosePeriod === undefined) {
      this.effectiveDosePeriod = new Period();
    }
    return this.effectiveDosePeriod;
  }

  setEffectiveDosePeriod(effectiveDosePeriod: Period | undefined): this {
    return this.setFieldValue('effectiveDosePeriod', effectiveDosePeriod);
  }

  hasEffectiveDosePeriod(): boolean {
    return this.hasFieldValue('effectiveDosePeriod');
  }

  /** Specific instructions for how the medication should be taken (0..*) Never undefined; an empty list is created when absent. */
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
 * Medication supply authorization
 */
export class MedicationRequestDispenseRequest extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'initialFill',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'initialFill', typeCode: 'MedicationRequestDispenseRequestInitialFill' }],
    },
    {
      elementName: 'dispenseInterval',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'dispenseInterval', typeCode: 'Duration' }],
    },
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
      types: [{ jsonKey: 'numberOfRepeatsAllowed', typeCode: 'unsignedInt' }],
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
      elementName: 'dispenser',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'dispenser', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
    {
      elementName: 'dispenserInstruction',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'dispenserInstruction', typeCode: 'Annotation' }],
    },
    {
      elementName: 'doseAdministrationAid',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'doseAdministrationAid', typeCode: 'CodeableConcept' }],
    },
  ];

  /** First fill details (0..1) */
  initialFill?: MedicationRequestDispenseRequestInitialFill;

  /** Minimum period of time between dispenses (0..1) */
  dispenseInterval?: Duration;

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

  /** Intended performer of dispense (0..1) */
  dispenser?: Reference;

  /** Additional information for the dispenser (0..*) */
  dispenserInstruction?: Annotation[];

  /** Type of adherence packaging to use for the dispense (0..1) */
  doseAdministrationAid?: CodeableConcept;

  override fhirType(): string {
    return 'MedicationRequest.dispenseRequest';
  }

  /** FHIR JSON for this MedicationRequestDispenseRequest, typed as the plain `MedicationRequestDispenseRequest` data type. */
  override toJSON(): plainTypes.MedicationRequestDispenseRequest {
    return this.serialize() as plainTypes.MedicationRequestDispenseRequest;
  }

  /** First fill details (0..1) Created when absent. */
  getInitialFill(): MedicationRequestDispenseRequestInitialFill {
    if (this.initialFill === undefined) {
      this.initialFill = new MedicationRequestDispenseRequestInitialFill();
    }
    return this.initialFill;
  }

  setInitialFill(initialFill: MedicationRequestDispenseRequestInitialFill | undefined): this {
    return this.setFieldValue('initialFill', initialFill);
  }

  hasInitialFill(): boolean {
    return this.hasFieldValue('initialFill');
  }

  /** Minimum period of time between dispenses (0..1) Created when absent. */
  getDispenseInterval(): Duration {
    if (this.dispenseInterval === undefined) {
      this.dispenseInterval = new Duration();
    }
    return this.dispenseInterval;
  }

  setDispenseInterval(dispenseInterval: Duration | undefined): this {
    return this.setFieldValue('dispenseInterval', dispenseInterval);
  }

  hasDispenseInterval(): boolean {
    return this.hasFieldValue('dispenseInterval');
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

  /** Sets `numberOfRepeatsAllowed`. Throws a FhirModelError when the value is not a valid FHIR unsignedInt. */
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

  /** Intended performer of dispense (0..1) Created when absent. */
  getDispenser(): Reference {
    if (this.dispenser === undefined) {
      this.dispenser = new Reference();
    }
    return this.dispenser;
  }

  setDispenser(dispenser: Reference | undefined): this {
    return this.setFieldValue('dispenser', dispenser);
  }

  hasDispenser(): boolean {
    return this.hasFieldValue('dispenser');
  }

  /** Additional information for the dispenser (0..*) Never undefined; an empty list is created when absent. */
  getDispenserInstruction(): Annotation[] {
    if (this.dispenserInstruction === undefined) {
      this.dispenserInstruction = [];
    }
    return this.dispenserInstruction;
  }

  setDispenserInstruction(dispenserInstruction: Annotation[] | undefined): this {
    return this.setFieldValue('dispenserInstruction', dispenserInstruction);
  }

  hasDispenserInstruction(): boolean {
    return this.hasFieldValue('dispenserInstruction');
  }

  /** Appends a new, empty Annotation to `dispenserInstruction` and returns it so it can be filled in. */
  addDispenserInstruction(): Annotation;
  /** Appends the given Annotation to `dispenserInstruction` and returns this object for chaining. */
  addDispenserInstruction(annotation: Annotation): this;
  addDispenserInstruction(annotation?: Annotation): Annotation | this {
    if (annotation !== undefined) {
      return this.addFieldValue('dispenserInstruction', annotation);
    }
    const createdAnnotation = new Annotation();
    this.addFieldValue('dispenserInstruction', createdAnnotation);
    return createdAnnotation;
  }

  /** The first Annotation of `dispenserInstruction`. One is added when the list is empty. */
  getDispenserInstructionFirstRep(): Annotation {
    const firstAnnotation = this.getDispenserInstruction()[0];
    return firstAnnotation === undefined ? this.addDispenserInstruction() : firstAnnotation;
  }

  /** Type of adherence packaging to use for the dispense (0..1) Created when absent. */
  getDoseAdministrationAid(): CodeableConcept {
    if (this.doseAdministrationAid === undefined) {
      this.doseAdministrationAid = new CodeableConcept();
    }
    return this.doseAdministrationAid;
  }

  setDoseAdministrationAid(doseAdministrationAid: CodeableConcept | undefined): this {
    return this.setFieldValue('doseAdministrationAid', doseAdministrationAid);
  }

  hasDoseAdministrationAid(): boolean {
    return this.hasFieldValue('doseAdministrationAid');
  }
}

modelTypeRegistry.register(
  'MedicationRequestDispenseRequest',
  MedicationRequestDispenseRequest,
  false
);

/**
 * First fill details
 */
export class MedicationRequestDispenseRequestInitialFill extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'duration',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'duration', typeCode: 'Duration' }],
    },
  ];

  /** First fill quantity (0..1) */
  quantity?: Quantity;

  /** First fill duration (0..1) */
  duration?: Duration;

  override fhirType(): string {
    return 'MedicationRequest.dispenseRequest.initialFill';
  }

  /** FHIR JSON for this MedicationRequestDispenseRequestInitialFill, typed as the plain `MedicationRequestInitialFill` data type. */
  override toJSON(): plainTypes.MedicationRequestInitialFill {
    return this.serialize() as plainTypes.MedicationRequestInitialFill;
  }

  /** First fill quantity (0..1) Created when absent. */
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

  /** First fill duration (0..1) Created when absent. */
  getDuration(): Duration {
    if (this.duration === undefined) {
      this.duration = new Duration();
    }
    return this.duration;
  }

  setDuration(duration: Duration | undefined): this {
    return this.setFieldValue('duration', duration);
  }

  hasDuration(): boolean {
    return this.hasFieldValue('duration');
  }
}

modelTypeRegistry.register(
  'MedicationRequestDispenseRequestInitialFill',
  MedicationRequestDispenseRequestInitialFill,
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
      types: [
        { jsonKey: 'allowedBoolean', typeCode: 'boolean' },
        { jsonKey: 'allowedCodeableConcept', typeCode: 'CodeableConcept' },
      ],
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
  allowedBoolean?: boolean;
  /** Id and extensions of the primitive `allowedBoolean`. */
  _allowedBoolean?: Element;
  /** Whether substitution is allowed or not (1..1) */
  allowedCodeableConcept?: CodeableConcept;

  /** Why should (not) substitution be made (0..1) */
  reason?: CodeableConcept;

  override fhirType(): string {
    return 'MedicationRequest.substitution';
  }

  /** FHIR JSON for this MedicationRequestSubstitution, typed as the plain `MedicationRequestSubstitution` data type. */
  override toJSON(): plainTypes.MedicationRequestSubstitution {
    return this.serialize() as plainTypes.MedicationRequestSubstitution;
  }

  /** Whether substitution is allowed or not (1..1) Whichever type of `allowed[x]` is set. */
  getAllowed(): boolean | CodeableConcept | undefined {
    return this.getChoiceValue<boolean | CodeableConcept>('allowed');
  }

  /** True when any type of `allowed[x]` is set. */
  hasAllowed(): boolean {
    return this.hasChoiceValue('allowed');
  }

  getAllowedBoolean(): boolean | undefined {
    return this.allowedBoolean;
  }

  /** Sets `allowed[x]` as boolean and clears every other type of it. */
  setAllowedBoolean(allowedBoolean: boolean | undefined): this {
    return this.setFieldValue('allowedBoolean', allowedBoolean);
  }

  hasAllowedBoolean(): boolean {
    return this.hasFieldValue('allowedBoolean');
  }

  getAllowedCodeableConcept(): CodeableConcept | undefined {
    return this.allowedCodeableConcept;
  }

  /** Sets `allowed[x]` as CodeableConcept and clears every other type of it. */
  setAllowedCodeableConcept(allowedCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('allowedCodeableConcept', allowedCodeableConcept);
  }

  hasAllowedCodeableConcept(): boolean {
    return this.hasFieldValue('allowedCodeableConcept');
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
