/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { Address } from './address';
import { Attachment } from './attachment';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { CodeableReference } from './codeableReference';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Money } from './money';
import { Period } from './period';
import { Quantity } from './quantity';
import { Reference } from './reference';

/**
 * This resource provides the adjudication details from the processing of a Claim resource.
 */
export class ClaimResponse extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'traceNumber',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'traceNumber', typeCode: 'Identifier' }],
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
          allowedCodes: valueSetCodes.FinancialResourceStatusCodes,
        },
      ],
    },
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'subType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'subType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'use',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'use', typeCode: 'code', allowedCodes: valueSetCodes.Use }],
    },
    {
      elementName: 'patient',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'patient', typeCode: 'Reference', targetResourceTypes: ['Patient'] }],
    },
    {
      elementName: 'created',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'created', typeCode: 'dateTime' }],
    },
    {
      elementName: 'insurer',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'insurer', typeCode: 'Reference', targetResourceTypes: ['Organization'] }],
    },
    {
      elementName: 'requestor',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'requestor',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Practitioner', 'PractitionerRole'],
        },
      ],
    },
    {
      elementName: 'request',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'request', typeCode: 'Reference', targetResourceTypes: ['Claim'] }],
    },
    {
      elementName: 'outcome',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'outcome', typeCode: 'code', allowedCodes: valueSetCodes.ClaimProcessingCodes },
      ],
    },
    {
      elementName: 'decision',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'decision', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'disposition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'disposition', typeCode: 'string' }],
    },
    {
      elementName: 'preAuthRef',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'preAuthRef', typeCode: 'string' }],
    },
    {
      elementName: 'preAuthPeriod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'preAuthPeriod', typeCode: 'Period' }],
    },
    {
      elementName: 'event',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'event', typeCode: 'ClaimResponseEvent' }],
    },
    {
      elementName: 'payeeType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'payeeType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'encounter',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'encounter', typeCode: 'Reference', targetResourceTypes: ['Encounter'] }],
    },
    {
      elementName: 'diagnosisRelatedGroup',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'diagnosisRelatedGroup', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'item',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'item', typeCode: 'ClaimResponseItem' }],
    },
    {
      elementName: 'addItem',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'addItem', typeCode: 'ClaimResponseAddItem' }],
    },
    {
      elementName: 'adjudication',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'adjudication', typeCode: 'ClaimResponseItemAdjudication' }],
    },
    {
      elementName: 'total',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'total', typeCode: 'ClaimResponseTotal' }],
    },
    {
      elementName: 'payment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'payment', typeCode: 'ClaimResponsePayment' }],
    },
    {
      elementName: 'fundsReserve',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'fundsReserve', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'formCode',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'formCode', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'form',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'form', typeCode: 'Attachment' }],
    },
    {
      elementName: 'processNote',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'processNote', typeCode: 'ClaimResponseProcessNote' }],
    },
    {
      elementName: 'communicationRequest',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'communicationRequest',
          typeCode: 'Reference',
          targetResourceTypes: ['CommunicationRequest'],
        },
      ],
    },
    {
      elementName: 'insurance',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'insurance', typeCode: 'ClaimResponseInsurance' }],
    },
    {
      elementName: 'error',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'error', typeCode: 'ClaimResponseError' }],
    },
  ];

  readonly resourceType = 'ClaimResponse';

  /** Business Identifier for a claim response (0..*) */
  identifier?: Identifier[];

  /** Number for tracking (0..*) */
  traceNumber?: Identifier[];

  /** active | cancelled | draft | entered-in-error (1..1) */
  status?: valueSetCodes.FinancialResourceStatusCodes;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** More granular claim type (1..1) */
  type?: CodeableConcept;

  /** More granular claim type (0..1) */
  subType?: CodeableConcept;

  /** claim | preauthorization | predetermination (1..1) */
  use?: valueSetCodes.Use;
  /** Id and extensions of the primitive `use`. */
  _use?: Element;

  /** The recipient of the products and services (1..1) */
  patient?: Reference;

  /** Response creation date (1..1) */
  created?: string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;

  /** Party responsible for reimbursement (0..1) */
  insurer?: Reference;

  /** Party responsible for the claim (0..1) */
  requestor?: Reference;

  /** Id of resource triggering adjudication (0..1) */
  request?: Reference;

  /** queued | complete | error | partial (1..1) */
  outcome?: valueSetCodes.ClaimProcessingCodes;
  /** Id and extensions of the primitive `outcome`. */
  _outcome?: Element;

  /** Result of the adjudication (0..1) */
  decision?: CodeableConcept;

  /** Disposition Message (0..1) */
  disposition?: string;
  /** Id and extensions of the primitive `disposition`. */
  _disposition?: Element;

  /** Preauthorization reference (0..1) */
  preAuthRef?: string;
  /** Id and extensions of the primitive `preAuthRef`. */
  _preAuthRef?: Element;

  /** Preauthorization reference effective period (0..1) */
  preAuthPeriod?: Period;

  /** Event information (0..*) */
  event?: ClaimResponseEvent[];

  /** Party to be paid any benefits payable (0..1) */
  payeeType?: CodeableConcept;

  /** Encounters associated with the listed treatments (0..*) */
  encounter?: Reference[];

  /** Package billing code (0..1) */
  diagnosisRelatedGroup?: CodeableConcept;

  /** Adjudication for claim line items (0..*) */
  item?: ClaimResponseItem[];

  /** Insurer added line items (0..*) */
  addItem?: ClaimResponseAddItem[];

  /** Header-level adjudication (0..*) */
  adjudication?: ClaimResponseItemAdjudication[];

  /** Adjudication totals (0..*) */
  total?: ClaimResponseTotal[];

  /** Payment Details (0..1) */
  payment?: ClaimResponsePayment;

  /** Funds reserved status (0..1) */
  fundsReserve?: CodeableConcept;

  /** Printed form identifier (0..1) */
  formCode?: CodeableConcept;

  /** Printed reference or actual form (0..1) */
  form?: Attachment;

  /** Note concerning adjudication (0..*) */
  processNote?: ClaimResponseProcessNote[];

  /** Request for additional information (0..*) */
  communicationRequest?: Reference[];

  /** Patient insurance information (0..*) */
  insurance?: ClaimResponseInsurance[];

  /** Processing errors (0..*) */
  error?: ClaimResponseError[];

  override fhirType(): string {
    return 'ClaimResponse';
  }

  /** FHIR JSON for this ClaimResponse, typed as the plain `ClaimResponse` data type. */
  override toJSON(): plainTypes.ClaimResponse {
    return this.serialize() as plainTypes.ClaimResponse;
  }

  /** Business Identifier for a claim response (0..*) Never undefined; an empty list is created when absent. */
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

  /** Number for tracking (0..*) Never undefined; an empty list is created when absent. */
  getTraceNumber(): Identifier[] {
    if (this.traceNumber === undefined) {
      this.traceNumber = [];
    }
    return this.traceNumber;
  }

  setTraceNumber(traceNumber: Identifier[] | undefined): this {
    return this.setFieldValue('traceNumber', traceNumber);
  }

  hasTraceNumber(): boolean {
    return this.hasFieldValue('traceNumber');
  }

  /** Appends a new, empty Identifier to `traceNumber` and returns it so it can be filled in. */
  addTraceNumber(): Identifier;
  /** Appends the given Identifier to `traceNumber` and returns this object for chaining. */
  addTraceNumber(identifier: Identifier): this;
  addTraceNumber(identifier?: Identifier): Identifier | this {
    if (identifier !== undefined) {
      return this.addFieldValue('traceNumber', identifier);
    }
    const createdIdentifier = new Identifier();
    this.addFieldValue('traceNumber', createdIdentifier);
    return createdIdentifier;
  }

  /** The first Identifier of `traceNumber`. One is added when the list is empty. */
  getTraceNumberFirstRep(): Identifier {
    const firstIdentifier = this.getTraceNumber()[0];
    return firstIdentifier === undefined ? this.addTraceNumber() : firstIdentifier;
  }

  /** active | cancelled | draft | entered-in-error (1..1) */
  getStatus(): valueSetCodes.FinancialResourceStatusCodes | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.FinancialResourceStatusCodes | undefined): this {
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

  /** More granular claim type (1..1) Created when absent. */
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

  /** More granular claim type (0..1) Created when absent. */
  getSubType(): CodeableConcept {
    if (this.subType === undefined) {
      this.subType = new CodeableConcept();
    }
    return this.subType;
  }

  setSubType(subType: CodeableConcept | undefined): this {
    return this.setFieldValue('subType', subType);
  }

  hasSubType(): boolean {
    return this.hasFieldValue('subType');
  }

  /** claim | preauthorization | predetermination (1..1) */
  getUse(): valueSetCodes.Use | undefined {
    return this.use;
  }

  /** Sets `use`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setUse(use: valueSetCodes.Use | undefined): this {
    return this.setFieldValue('use', use);
  }

  hasUse(): boolean {
    return this.hasFieldValue('use');
  }

  /** The element carrying the id and extensions of `use`. Created when absent. */
  getUseElement(): Element {
    if (this._use === undefined) {
      this._use = new Element();
    }
    return this._use;
  }

  setUseElement(useElement: Element | undefined): this {
    this._use = useElement;
    return this;
  }

  /** The recipient of the products and services (1..1) Created when absent. */
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

  /** Response creation date (1..1) */
  getCreated(): string | undefined {
    return this.created;
  }

  /** Sets `created`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setCreated(created: string | undefined): this {
    return this.setFieldValue('created', created);
  }

  hasCreated(): boolean {
    return this.hasFieldValue('created');
  }

  /** The element carrying the id and extensions of `created`. Created when absent. */
  getCreatedElement(): Element {
    if (this._created === undefined) {
      this._created = new Element();
    }
    return this._created;
  }

  setCreatedElement(createdElement: Element | undefined): this {
    this._created = createdElement;
    return this;
  }

  /** Party responsible for reimbursement (0..1) Created when absent. */
  getInsurer(): Reference {
    if (this.insurer === undefined) {
      this.insurer = new Reference();
    }
    return this.insurer;
  }

  setInsurer(insurer: Reference | undefined): this {
    return this.setFieldValue('insurer', insurer);
  }

  hasInsurer(): boolean {
    return this.hasFieldValue('insurer');
  }

  /** Party responsible for the claim (0..1) Created when absent. */
  getRequestor(): Reference {
    if (this.requestor === undefined) {
      this.requestor = new Reference();
    }
    return this.requestor;
  }

  setRequestor(requestor: Reference | undefined): this {
    return this.setFieldValue('requestor', requestor);
  }

  hasRequestor(): boolean {
    return this.hasFieldValue('requestor');
  }

  /** Id of resource triggering adjudication (0..1) Created when absent. */
  getRequest(): Reference {
    if (this.request === undefined) {
      this.request = new Reference();
    }
    return this.request;
  }

  setRequest(request: Reference | undefined): this {
    return this.setFieldValue('request', request);
  }

  hasRequest(): boolean {
    return this.hasFieldValue('request');
  }

  /** queued | complete | error | partial (1..1) */
  getOutcome(): valueSetCodes.ClaimProcessingCodes | undefined {
    return this.outcome;
  }

  /** Sets `outcome`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setOutcome(outcome: valueSetCodes.ClaimProcessingCodes | undefined): this {
    return this.setFieldValue('outcome', outcome);
  }

  hasOutcome(): boolean {
    return this.hasFieldValue('outcome');
  }

  /** The element carrying the id and extensions of `outcome`. Created when absent. */
  getOutcomeElement(): Element {
    if (this._outcome === undefined) {
      this._outcome = new Element();
    }
    return this._outcome;
  }

  setOutcomeElement(outcomeElement: Element | undefined): this {
    this._outcome = outcomeElement;
    return this;
  }

  /** Result of the adjudication (0..1) Created when absent. */
  getDecision(): CodeableConcept {
    if (this.decision === undefined) {
      this.decision = new CodeableConcept();
    }
    return this.decision;
  }

  setDecision(decision: CodeableConcept | undefined): this {
    return this.setFieldValue('decision', decision);
  }

  hasDecision(): boolean {
    return this.hasFieldValue('decision');
  }

  /** Disposition Message (0..1) */
  getDisposition(): string | undefined {
    return this.disposition;
  }

  /** Sets `disposition`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDisposition(disposition: string | undefined): this {
    return this.setFieldValue('disposition', disposition);
  }

  hasDisposition(): boolean {
    return this.hasFieldValue('disposition');
  }

  /** The element carrying the id and extensions of `disposition`. Created when absent. */
  getDispositionElement(): Element {
    if (this._disposition === undefined) {
      this._disposition = new Element();
    }
    return this._disposition;
  }

  setDispositionElement(dispositionElement: Element | undefined): this {
    this._disposition = dispositionElement;
    return this;
  }

  /** Preauthorization reference (0..1) */
  getPreAuthRef(): string | undefined {
    return this.preAuthRef;
  }

  /** Sets `preAuthRef`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPreAuthRef(preAuthRef: string | undefined): this {
    return this.setFieldValue('preAuthRef', preAuthRef);
  }

  hasPreAuthRef(): boolean {
    return this.hasFieldValue('preAuthRef');
  }

  /** The element carrying the id and extensions of `preAuthRef`. Created when absent. */
  getPreAuthRefElement(): Element {
    if (this._preAuthRef === undefined) {
      this._preAuthRef = new Element();
    }
    return this._preAuthRef;
  }

  setPreAuthRefElement(preAuthRefElement: Element | undefined): this {
    this._preAuthRef = preAuthRefElement;
    return this;
  }

  /** Preauthorization reference effective period (0..1) Created when absent. */
  getPreAuthPeriod(): Period {
    if (this.preAuthPeriod === undefined) {
      this.preAuthPeriod = new Period();
    }
    return this.preAuthPeriod;
  }

  setPreAuthPeriod(preAuthPeriod: Period | undefined): this {
    return this.setFieldValue('preAuthPeriod', preAuthPeriod);
  }

  hasPreAuthPeriod(): boolean {
    return this.hasFieldValue('preAuthPeriod');
  }

  /** Event information (0..*) Never undefined; an empty list is created when absent. */
  getEvent(): ClaimResponseEvent[] {
    if (this.event === undefined) {
      this.event = [];
    }
    return this.event;
  }

  setEvent(event: ClaimResponseEvent[] | undefined): this {
    return this.setFieldValue('event', event);
  }

  hasEvent(): boolean {
    return this.hasFieldValue('event');
  }

  /** Appends a new, empty ClaimResponseEvent to `event` and returns it so it can be filled in. */
  addEvent(): ClaimResponseEvent;
  /** Appends the given ClaimResponseEvent to `event` and returns this object for chaining. */
  addEvent(claimResponseEvent: ClaimResponseEvent): this;
  addEvent(claimResponseEvent?: ClaimResponseEvent): ClaimResponseEvent | this {
    if (claimResponseEvent !== undefined) {
      return this.addFieldValue('event', claimResponseEvent);
    }
    const createdClaimResponseEvent = new ClaimResponseEvent();
    this.addFieldValue('event', createdClaimResponseEvent);
    return createdClaimResponseEvent;
  }

  /** The first ClaimResponseEvent of `event`. One is added when the list is empty. */
  getEventFirstRep(): ClaimResponseEvent {
    const firstClaimResponseEvent = this.getEvent()[0];
    return firstClaimResponseEvent === undefined ? this.addEvent() : firstClaimResponseEvent;
  }

  /** Party to be paid any benefits payable (0..1) Created when absent. */
  getPayeeType(): CodeableConcept {
    if (this.payeeType === undefined) {
      this.payeeType = new CodeableConcept();
    }
    return this.payeeType;
  }

  setPayeeType(payeeType: CodeableConcept | undefined): this {
    return this.setFieldValue('payeeType', payeeType);
  }

  hasPayeeType(): boolean {
    return this.hasFieldValue('payeeType');
  }

  /** Encounters associated with the listed treatments (0..*) Never undefined; an empty list is created when absent. */
  getEncounter(): Reference[] {
    if (this.encounter === undefined) {
      this.encounter = [];
    }
    return this.encounter;
  }

  setEncounter(encounter: Reference[] | undefined): this {
    return this.setFieldValue('encounter', encounter);
  }

  hasEncounter(): boolean {
    return this.hasFieldValue('encounter');
  }

  /** Appends a new, empty Reference to `encounter` and returns it so it can be filled in. */
  addEncounter(): Reference;
  /** Appends the given Reference to `encounter` and returns this object for chaining. */
  addEncounter(reference: Reference): this;
  addEncounter(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('encounter', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('encounter', createdReference);
    return createdReference;
  }

  /** The first Reference of `encounter`. One is added when the list is empty. */
  getEncounterFirstRep(): Reference {
    const firstReference = this.getEncounter()[0];
    return firstReference === undefined ? this.addEncounter() : firstReference;
  }

  /** Package billing code (0..1) Created when absent. */
  getDiagnosisRelatedGroup(): CodeableConcept {
    if (this.diagnosisRelatedGroup === undefined) {
      this.diagnosisRelatedGroup = new CodeableConcept();
    }
    return this.diagnosisRelatedGroup;
  }

  setDiagnosisRelatedGroup(diagnosisRelatedGroup: CodeableConcept | undefined): this {
    return this.setFieldValue('diagnosisRelatedGroup', diagnosisRelatedGroup);
  }

  hasDiagnosisRelatedGroup(): boolean {
    return this.hasFieldValue('diagnosisRelatedGroup');
  }

  /** Adjudication for claim line items (0..*) Never undefined; an empty list is created when absent. */
  getItem(): ClaimResponseItem[] {
    if (this.item === undefined) {
      this.item = [];
    }
    return this.item;
  }

  setItem(item: ClaimResponseItem[] | undefined): this {
    return this.setFieldValue('item', item);
  }

  hasItem(): boolean {
    return this.hasFieldValue('item');
  }

  /** Appends a new, empty ClaimResponseItem to `item` and returns it so it can be filled in. */
  addItemEntry(): ClaimResponseItem;
  /** Appends the given ClaimResponseItem to `item` and returns this object for chaining. */
  addItemEntry(claimResponseItem: ClaimResponseItem): this;
  addItemEntry(claimResponseItem?: ClaimResponseItem): ClaimResponseItem | this {
    if (claimResponseItem !== undefined) {
      return this.addFieldValue('item', claimResponseItem);
    }
    const createdClaimResponseItem = new ClaimResponseItem();
    this.addFieldValue('item', createdClaimResponseItem);
    return createdClaimResponseItem;
  }

  /** The first ClaimResponseItem of `item`. One is added when the list is empty. */
  getItemFirstRep(): ClaimResponseItem {
    const firstClaimResponseItem = this.getItem()[0];
    return firstClaimResponseItem === undefined ? this.addItemEntry() : firstClaimResponseItem;
  }

  /** Insurer added line items (0..*) Never undefined; an empty list is created when absent. */
  getAddItem(): ClaimResponseAddItem[] {
    if (this.addItem === undefined) {
      this.addItem = [];
    }
    return this.addItem;
  }

  setAddItem(addItem: ClaimResponseAddItem[] | undefined): this {
    return this.setFieldValue('addItem', addItem);
  }

  hasAddItem(): boolean {
    return this.hasFieldValue('addItem');
  }

  /** Appends a new, empty ClaimResponseAddItem to `addItem` and returns it so it can be filled in. */
  addAddItem(): ClaimResponseAddItem;
  /** Appends the given ClaimResponseAddItem to `addItem` and returns this object for chaining. */
  addAddItem(claimResponseAddItem: ClaimResponseAddItem): this;
  addAddItem(claimResponseAddItem?: ClaimResponseAddItem): ClaimResponseAddItem | this {
    if (claimResponseAddItem !== undefined) {
      return this.addFieldValue('addItem', claimResponseAddItem);
    }
    const createdClaimResponseAddItem = new ClaimResponseAddItem();
    this.addFieldValue('addItem', createdClaimResponseAddItem);
    return createdClaimResponseAddItem;
  }

  /** The first ClaimResponseAddItem of `addItem`. One is added when the list is empty. */
  getAddItemFirstRep(): ClaimResponseAddItem {
    const firstClaimResponseAddItem = this.getAddItem()[0];
    return firstClaimResponseAddItem === undefined ? this.addAddItem() : firstClaimResponseAddItem;
  }

  /** Header-level adjudication (0..*) Never undefined; an empty list is created when absent. */
  getAdjudication(): ClaimResponseItemAdjudication[] {
    if (this.adjudication === undefined) {
      this.adjudication = [];
    }
    return this.adjudication;
  }

  setAdjudication(adjudication: ClaimResponseItemAdjudication[] | undefined): this {
    return this.setFieldValue('adjudication', adjudication);
  }

  hasAdjudication(): boolean {
    return this.hasFieldValue('adjudication');
  }

  /** Appends a new, empty ClaimResponseItemAdjudication to `adjudication` and returns it so it can be filled in. */
  addAdjudication(): ClaimResponseItemAdjudication;
  /** Appends the given ClaimResponseItemAdjudication to `adjudication` and returns this object for chaining. */
  addAdjudication(claimResponseItemAdjudication: ClaimResponseItemAdjudication): this;
  addAdjudication(
    claimResponseItemAdjudication?: ClaimResponseItemAdjudication
  ): ClaimResponseItemAdjudication | this {
    if (claimResponseItemAdjudication !== undefined) {
      return this.addFieldValue('adjudication', claimResponseItemAdjudication);
    }
    const createdClaimResponseItemAdjudication = new ClaimResponseItemAdjudication();
    this.addFieldValue('adjudication', createdClaimResponseItemAdjudication);
    return createdClaimResponseItemAdjudication;
  }

  /** The first ClaimResponseItemAdjudication of `adjudication`. One is added when the list is empty. */
  getAdjudicationFirstRep(): ClaimResponseItemAdjudication {
    const firstClaimResponseItemAdjudication = this.getAdjudication()[0];
    return firstClaimResponseItemAdjudication === undefined
      ? this.addAdjudication()
      : firstClaimResponseItemAdjudication;
  }

  /** Adjudication totals (0..*) Never undefined; an empty list is created when absent. */
  getTotal(): ClaimResponseTotal[] {
    if (this.total === undefined) {
      this.total = [];
    }
    return this.total;
  }

  setTotal(total: ClaimResponseTotal[] | undefined): this {
    return this.setFieldValue('total', total);
  }

  hasTotal(): boolean {
    return this.hasFieldValue('total');
  }

  /** Appends a new, empty ClaimResponseTotal to `total` and returns it so it can be filled in. */
  addTotal(): ClaimResponseTotal;
  /** Appends the given ClaimResponseTotal to `total` and returns this object for chaining. */
  addTotal(claimResponseTotal: ClaimResponseTotal): this;
  addTotal(claimResponseTotal?: ClaimResponseTotal): ClaimResponseTotal | this {
    if (claimResponseTotal !== undefined) {
      return this.addFieldValue('total', claimResponseTotal);
    }
    const createdClaimResponseTotal = new ClaimResponseTotal();
    this.addFieldValue('total', createdClaimResponseTotal);
    return createdClaimResponseTotal;
  }

  /** The first ClaimResponseTotal of `total`. One is added when the list is empty. */
  getTotalFirstRep(): ClaimResponseTotal {
    const firstClaimResponseTotal = this.getTotal()[0];
    return firstClaimResponseTotal === undefined ? this.addTotal() : firstClaimResponseTotal;
  }

  /** Payment Details (0..1) Created when absent. */
  getPayment(): ClaimResponsePayment {
    if (this.payment === undefined) {
      this.payment = new ClaimResponsePayment();
    }
    return this.payment;
  }

  setPayment(payment: ClaimResponsePayment | undefined): this {
    return this.setFieldValue('payment', payment);
  }

  hasPayment(): boolean {
    return this.hasFieldValue('payment');
  }

  /** Funds reserved status (0..1) Created when absent. */
  getFundsReserve(): CodeableConcept {
    if (this.fundsReserve === undefined) {
      this.fundsReserve = new CodeableConcept();
    }
    return this.fundsReserve;
  }

  setFundsReserve(fundsReserve: CodeableConcept | undefined): this {
    return this.setFieldValue('fundsReserve', fundsReserve);
  }

  hasFundsReserve(): boolean {
    return this.hasFieldValue('fundsReserve');
  }

  /** Printed form identifier (0..1) Created when absent. */
  getFormCode(): CodeableConcept {
    if (this.formCode === undefined) {
      this.formCode = new CodeableConcept();
    }
    return this.formCode;
  }

  setFormCode(formCode: CodeableConcept | undefined): this {
    return this.setFieldValue('formCode', formCode);
  }

  hasFormCode(): boolean {
    return this.hasFieldValue('formCode');
  }

  /** Printed reference or actual form (0..1) Created when absent. */
  getForm(): Attachment {
    if (this.form === undefined) {
      this.form = new Attachment();
    }
    return this.form;
  }

  setForm(form: Attachment | undefined): this {
    return this.setFieldValue('form', form);
  }

  hasForm(): boolean {
    return this.hasFieldValue('form');
  }

  /** Note concerning adjudication (0..*) Never undefined; an empty list is created when absent. */
  getProcessNote(): ClaimResponseProcessNote[] {
    if (this.processNote === undefined) {
      this.processNote = [];
    }
    return this.processNote;
  }

  setProcessNote(processNote: ClaimResponseProcessNote[] | undefined): this {
    return this.setFieldValue('processNote', processNote);
  }

  hasProcessNote(): boolean {
    return this.hasFieldValue('processNote');
  }

  /** Appends a new, empty ClaimResponseProcessNote to `processNote` and returns it so it can be filled in. */
  addProcessNote(): ClaimResponseProcessNote;
  /** Appends the given ClaimResponseProcessNote to `processNote` and returns this object for chaining. */
  addProcessNote(claimResponseProcessNote: ClaimResponseProcessNote): this;
  addProcessNote(
    claimResponseProcessNote?: ClaimResponseProcessNote
  ): ClaimResponseProcessNote | this {
    if (claimResponseProcessNote !== undefined) {
      return this.addFieldValue('processNote', claimResponseProcessNote);
    }
    const createdClaimResponseProcessNote = new ClaimResponseProcessNote();
    this.addFieldValue('processNote', createdClaimResponseProcessNote);
    return createdClaimResponseProcessNote;
  }

  /** The first ClaimResponseProcessNote of `processNote`. One is added when the list is empty. */
  getProcessNoteFirstRep(): ClaimResponseProcessNote {
    const firstClaimResponseProcessNote = this.getProcessNote()[0];
    return firstClaimResponseProcessNote === undefined
      ? this.addProcessNote()
      : firstClaimResponseProcessNote;
  }

  /** Request for additional information (0..*) Never undefined; an empty list is created when absent. */
  getCommunicationRequest(): Reference[] {
    if (this.communicationRequest === undefined) {
      this.communicationRequest = [];
    }
    return this.communicationRequest;
  }

  setCommunicationRequest(communicationRequest: Reference[] | undefined): this {
    return this.setFieldValue('communicationRequest', communicationRequest);
  }

  hasCommunicationRequest(): boolean {
    return this.hasFieldValue('communicationRequest');
  }

  /** Appends a new, empty Reference to `communicationRequest` and returns it so it can be filled in. */
  addCommunicationRequest(): Reference;
  /** Appends the given Reference to `communicationRequest` and returns this object for chaining. */
  addCommunicationRequest(reference: Reference): this;
  addCommunicationRequest(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('communicationRequest', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('communicationRequest', createdReference);
    return createdReference;
  }

  /** The first Reference of `communicationRequest`. One is added when the list is empty. */
  getCommunicationRequestFirstRep(): Reference {
    const firstReference = this.getCommunicationRequest()[0];
    return firstReference === undefined ? this.addCommunicationRequest() : firstReference;
  }

  /** Patient insurance information (0..*) Never undefined; an empty list is created when absent. */
  getInsurance(): ClaimResponseInsurance[] {
    if (this.insurance === undefined) {
      this.insurance = [];
    }
    return this.insurance;
  }

  setInsurance(insurance: ClaimResponseInsurance[] | undefined): this {
    return this.setFieldValue('insurance', insurance);
  }

  hasInsurance(): boolean {
    return this.hasFieldValue('insurance');
  }

  /** Appends a new, empty ClaimResponseInsurance to `insurance` and returns it so it can be filled in. */
  addInsurance(): ClaimResponseInsurance;
  /** Appends the given ClaimResponseInsurance to `insurance` and returns this object for chaining. */
  addInsurance(claimResponseInsurance: ClaimResponseInsurance): this;
  addInsurance(claimResponseInsurance?: ClaimResponseInsurance): ClaimResponseInsurance | this {
    if (claimResponseInsurance !== undefined) {
      return this.addFieldValue('insurance', claimResponseInsurance);
    }
    const createdClaimResponseInsurance = new ClaimResponseInsurance();
    this.addFieldValue('insurance', createdClaimResponseInsurance);
    return createdClaimResponseInsurance;
  }

  /** The first ClaimResponseInsurance of `insurance`. One is added when the list is empty. */
  getInsuranceFirstRep(): ClaimResponseInsurance {
    const firstClaimResponseInsurance = this.getInsurance()[0];
    return firstClaimResponseInsurance === undefined
      ? this.addInsurance()
      : firstClaimResponseInsurance;
  }

  /** Processing errors (0..*) Never undefined; an empty list is created when absent. */
  getError(): ClaimResponseError[] {
    if (this.error === undefined) {
      this.error = [];
    }
    return this.error;
  }

  setError(error: ClaimResponseError[] | undefined): this {
    return this.setFieldValue('error', error);
  }

  hasError(): boolean {
    return this.hasFieldValue('error');
  }

  /** Appends a new, empty ClaimResponseError to `error` and returns it so it can be filled in. */
  addError(): ClaimResponseError;
  /** Appends the given ClaimResponseError to `error` and returns this object for chaining. */
  addError(claimResponseError: ClaimResponseError): this;
  addError(claimResponseError?: ClaimResponseError): ClaimResponseError | this {
    if (claimResponseError !== undefined) {
      return this.addFieldValue('error', claimResponseError);
    }
    const createdClaimResponseError = new ClaimResponseError();
    this.addFieldValue('error', createdClaimResponseError);
    return createdClaimResponseError;
  }

  /** The first ClaimResponseError of `error`. One is added when the list is empty. */
  getErrorFirstRep(): ClaimResponseError {
    const firstClaimResponseError = this.getError()[0];
    return firstClaimResponseError === undefined ? this.addError() : firstClaimResponseError;
  }
}

modelTypeRegistry.register('ClaimResponse', ClaimResponse, true);

/** True when the value is a ClaimResponse model instance. */
export function isClaimResponse(candidate: unknown): candidate is ClaimResponse {
  return candidate instanceof ClaimResponse;
}

/**
 * Event information
 */
export class ClaimResponseEvent extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'when',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'whenDateTime', typeCode: 'dateTime' },
        { jsonKey: 'whenPeriod', typeCode: 'Period' },
      ],
    },
  ];

  /** Specific event (1..1) */
  type?: CodeableConcept;

  /** Occurance date or period (1..1) */
  whenDateTime?: string;
  /** Id and extensions of the primitive `whenDateTime`. */
  _whenDateTime?: Element;
  /** Occurance date or period (1..1) */
  whenPeriod?: Period;

  override fhirType(): string {
    return 'ClaimResponse.event';
  }

  /** FHIR JSON for this ClaimResponseEvent, typed as the plain `ClaimResponseEvent` data type. */
  override toJSON(): plainTypes.ClaimResponseEvent {
    return this.serialize() as plainTypes.ClaimResponseEvent;
  }

  /** Specific event (1..1) Created when absent. */
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

  /** Occurance date or period (1..1) Whichever type of `when[x]` is set. */
  getWhen(): string | Period | undefined {
    return this.getChoiceValue<string | Period>('when');
  }

  /** True when any type of `when[x]` is set. */
  hasWhen(): boolean {
    return this.hasChoiceValue('when');
  }

  getWhenDateTime(): string | undefined {
    return this.whenDateTime;
  }

  /** Sets `when[x]` as dateTime and clears every other type of it. */
  setWhenDateTime(whenDateTime: string | undefined): this {
    return this.setFieldValue('whenDateTime', whenDateTime);
  }

  hasWhenDateTime(): boolean {
    return this.hasFieldValue('whenDateTime');
  }

  getWhenPeriod(): Period | undefined {
    return this.whenPeriod;
  }

  /** Sets `when[x]` as Period and clears every other type of it. */
  setWhenPeriod(whenPeriod: Period | undefined): this {
    return this.setFieldValue('whenPeriod', whenPeriod);
  }

  hasWhenPeriod(): boolean {
    return this.hasFieldValue('whenPeriod');
  }
}

modelTypeRegistry.register('ClaimResponseEvent', ClaimResponseEvent, false);

/**
 * Adjudication for claim line items
 */
export class ClaimResponseItem extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'itemSequence',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'itemSequence', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'traceNumber',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'traceNumber', typeCode: 'Identifier' }],
    },
    {
      elementName: 'noteNumber',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'noteNumber', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'reviewOutcome',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reviewOutcome', typeCode: 'ClaimResponseItemReviewOutcome' }],
    },
    {
      elementName: 'adjudication',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'adjudication', typeCode: 'ClaimResponseItemAdjudication' }],
    },
    {
      elementName: 'detail',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'detail', typeCode: 'ClaimResponseItemDetail' }],
    },
  ];

  /** Claim item instance identifier (1..1) */
  itemSequence?: number;
  /** Id and extensions of the primitive `itemSequence`. */
  _itemSequence?: Element;

  /** Number for tracking (0..*) */
  traceNumber?: Identifier[];

  /** Applicable note numbers (0..*) */
  noteNumber?: number[];
  /** Id and extensions of the primitive `noteNumber`. */
  _noteNumber?: (Element | null)[];

  /** Adjudication results (0..1) */
  reviewOutcome?: ClaimResponseItemReviewOutcome;

  /** Adjudication details (0..*) */
  adjudication?: ClaimResponseItemAdjudication[];

  /** Adjudication for claim details (0..*) */
  detail?: ClaimResponseItemDetail[];

  override fhirType(): string {
    return 'ClaimResponse.item';
  }

  /** FHIR JSON for this ClaimResponseItem, typed as the plain `ClaimResponseItem` data type. */
  override toJSON(): plainTypes.ClaimResponseItem {
    return this.serialize() as plainTypes.ClaimResponseItem;
  }

  /** Claim item instance identifier (1..1) */
  getItemSequence(): number | undefined {
    return this.itemSequence;
  }

  /** Sets `itemSequence`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setItemSequence(itemSequence: number | undefined): this {
    return this.setFieldValue('itemSequence', itemSequence);
  }

  hasItemSequence(): boolean {
    return this.hasFieldValue('itemSequence');
  }

  /** The element carrying the id and extensions of `itemSequence`. Created when absent. */
  getItemSequenceElement(): Element {
    if (this._itemSequence === undefined) {
      this._itemSequence = new Element();
    }
    return this._itemSequence;
  }

  setItemSequenceElement(itemSequenceElement: Element | undefined): this {
    this._itemSequence = itemSequenceElement;
    return this;
  }

  /** Number for tracking (0..*) Never undefined; an empty list is created when absent. */
  getTraceNumber(): Identifier[] {
    if (this.traceNumber === undefined) {
      this.traceNumber = [];
    }
    return this.traceNumber;
  }

  setTraceNumber(traceNumber: Identifier[] | undefined): this {
    return this.setFieldValue('traceNumber', traceNumber);
  }

  hasTraceNumber(): boolean {
    return this.hasFieldValue('traceNumber');
  }

  /** Appends a new, empty Identifier to `traceNumber` and returns it so it can be filled in. */
  addTraceNumber(): Identifier;
  /** Appends the given Identifier to `traceNumber` and returns this object for chaining. */
  addTraceNumber(identifier: Identifier): this;
  addTraceNumber(identifier?: Identifier): Identifier | this {
    if (identifier !== undefined) {
      return this.addFieldValue('traceNumber', identifier);
    }
    const createdIdentifier = new Identifier();
    this.addFieldValue('traceNumber', createdIdentifier);
    return createdIdentifier;
  }

  /** The first Identifier of `traceNumber`. One is added when the list is empty. */
  getTraceNumberFirstRep(): Identifier {
    const firstIdentifier = this.getTraceNumber()[0];
    return firstIdentifier === undefined ? this.addTraceNumber() : firstIdentifier;
  }

  /** Applicable note numbers (0..*) Never undefined; an empty list is created when absent. */
  getNoteNumber(): number[] {
    if (this.noteNumber === undefined) {
      this.noteNumber = [];
    }
    return this.noteNumber;
  }

  setNoteNumber(noteNumber: number[] | undefined): this {
    return this.setFieldValue('noteNumber', noteNumber);
  }

  hasNoteNumber(): boolean {
    return this.hasFieldValue('noteNumber');
  }

  /** Appends one value to `noteNumber`. Throws a FhirModelError when it is not a valid FHIR positiveInt. */
  addNoteNumber(noteNumber: number): this {
    return this.addFieldValue('noteNumber', noteNumber);
  }

  /** Adjudication results (0..1) Created when absent. */
  getReviewOutcome(): ClaimResponseItemReviewOutcome {
    if (this.reviewOutcome === undefined) {
      this.reviewOutcome = new ClaimResponseItemReviewOutcome();
    }
    return this.reviewOutcome;
  }

  setReviewOutcome(reviewOutcome: ClaimResponseItemReviewOutcome | undefined): this {
    return this.setFieldValue('reviewOutcome', reviewOutcome);
  }

  hasReviewOutcome(): boolean {
    return this.hasFieldValue('reviewOutcome');
  }

  /** Adjudication details (0..*) Never undefined; an empty list is created when absent. */
  getAdjudication(): ClaimResponseItemAdjudication[] {
    if (this.adjudication === undefined) {
      this.adjudication = [];
    }
    return this.adjudication;
  }

  setAdjudication(adjudication: ClaimResponseItemAdjudication[] | undefined): this {
    return this.setFieldValue('adjudication', adjudication);
  }

  hasAdjudication(): boolean {
    return this.hasFieldValue('adjudication');
  }

  /** Appends a new, empty ClaimResponseItemAdjudication to `adjudication` and returns it so it can be filled in. */
  addAdjudication(): ClaimResponseItemAdjudication;
  /** Appends the given ClaimResponseItemAdjudication to `adjudication` and returns this object for chaining. */
  addAdjudication(claimResponseItemAdjudication: ClaimResponseItemAdjudication): this;
  addAdjudication(
    claimResponseItemAdjudication?: ClaimResponseItemAdjudication
  ): ClaimResponseItemAdjudication | this {
    if (claimResponseItemAdjudication !== undefined) {
      return this.addFieldValue('adjudication', claimResponseItemAdjudication);
    }
    const createdClaimResponseItemAdjudication = new ClaimResponseItemAdjudication();
    this.addFieldValue('adjudication', createdClaimResponseItemAdjudication);
    return createdClaimResponseItemAdjudication;
  }

  /** The first ClaimResponseItemAdjudication of `adjudication`. One is added when the list is empty. */
  getAdjudicationFirstRep(): ClaimResponseItemAdjudication {
    const firstClaimResponseItemAdjudication = this.getAdjudication()[0];
    return firstClaimResponseItemAdjudication === undefined
      ? this.addAdjudication()
      : firstClaimResponseItemAdjudication;
  }

  /** Adjudication for claim details (0..*) Never undefined; an empty list is created when absent. */
  getDetail(): ClaimResponseItemDetail[] {
    if (this.detail === undefined) {
      this.detail = [];
    }
    return this.detail;
  }

  setDetail(detail: ClaimResponseItemDetail[] | undefined): this {
    return this.setFieldValue('detail', detail);
  }

  hasDetail(): boolean {
    return this.hasFieldValue('detail');
  }

  /** Appends a new, empty ClaimResponseItemDetail to `detail` and returns it so it can be filled in. */
  addDetail(): ClaimResponseItemDetail;
  /** Appends the given ClaimResponseItemDetail to `detail` and returns this object for chaining. */
  addDetail(claimResponseItemDetail: ClaimResponseItemDetail): this;
  addDetail(claimResponseItemDetail?: ClaimResponseItemDetail): ClaimResponseItemDetail | this {
    if (claimResponseItemDetail !== undefined) {
      return this.addFieldValue('detail', claimResponseItemDetail);
    }
    const createdClaimResponseItemDetail = new ClaimResponseItemDetail();
    this.addFieldValue('detail', createdClaimResponseItemDetail);
    return createdClaimResponseItemDetail;
  }

  /** The first ClaimResponseItemDetail of `detail`. One is added when the list is empty. */
  getDetailFirstRep(): ClaimResponseItemDetail {
    const firstClaimResponseItemDetail = this.getDetail()[0];
    return firstClaimResponseItemDetail === undefined
      ? this.addDetail()
      : firstClaimResponseItemDetail;
  }
}

modelTypeRegistry.register('ClaimResponseItem', ClaimResponseItem, false);

/**
 * Adjudication results
 */
export class ClaimResponseItemReviewOutcome extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'decision',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'decision', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'reason',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reason', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'preAuthRef',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'preAuthRef', typeCode: 'string' }],
    },
    {
      elementName: 'preAuthPeriod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'preAuthPeriod', typeCode: 'Period' }],
    },
  ];

  /** Result of the adjudication (0..1) */
  decision?: CodeableConcept;

  /** Reason for result of the adjudication (0..*) */
  reason?: CodeableConcept[];

  /** Preauthorization reference (0..1) */
  preAuthRef?: string;
  /** Id and extensions of the primitive `preAuthRef`. */
  _preAuthRef?: Element;

  /** Preauthorization reference effective period (0..1) */
  preAuthPeriod?: Period;

  override fhirType(): string {
    return 'ClaimResponse.item.reviewOutcome';
  }

  /** FHIR JSON for this ClaimResponseItemReviewOutcome, typed as the plain `ClaimResponseReviewOutcome` data type. */
  override toJSON(): plainTypes.ClaimResponseReviewOutcome {
    return this.serialize() as plainTypes.ClaimResponseReviewOutcome;
  }

  /** Result of the adjudication (0..1) Created when absent. */
  getDecision(): CodeableConcept {
    if (this.decision === undefined) {
      this.decision = new CodeableConcept();
    }
    return this.decision;
  }

  setDecision(decision: CodeableConcept | undefined): this {
    return this.setFieldValue('decision', decision);
  }

  hasDecision(): boolean {
    return this.hasFieldValue('decision');
  }

  /** Reason for result of the adjudication (0..*) Never undefined; an empty list is created when absent. */
  getReason(): CodeableConcept[] {
    if (this.reason === undefined) {
      this.reason = [];
    }
    return this.reason;
  }

  setReason(reason: CodeableConcept[] | undefined): this {
    return this.setFieldValue('reason', reason);
  }

  hasReason(): boolean {
    return this.hasFieldValue('reason');
  }

  /** Appends a new, empty CodeableConcept to `reason` and returns it so it can be filled in. */
  addReason(): CodeableConcept;
  /** Appends the given CodeableConcept to `reason` and returns this object for chaining. */
  addReason(codeableConcept: CodeableConcept): this;
  addReason(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('reason', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('reason', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `reason`. One is added when the list is empty. */
  getReasonFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getReason()[0];
    return firstCodeableConcept === undefined ? this.addReason() : firstCodeableConcept;
  }

  /** Preauthorization reference (0..1) */
  getPreAuthRef(): string | undefined {
    return this.preAuthRef;
  }

  /** Sets `preAuthRef`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPreAuthRef(preAuthRef: string | undefined): this {
    return this.setFieldValue('preAuthRef', preAuthRef);
  }

  hasPreAuthRef(): boolean {
    return this.hasFieldValue('preAuthRef');
  }

  /** The element carrying the id and extensions of `preAuthRef`. Created when absent. */
  getPreAuthRefElement(): Element {
    if (this._preAuthRef === undefined) {
      this._preAuthRef = new Element();
    }
    return this._preAuthRef;
  }

  setPreAuthRefElement(preAuthRefElement: Element | undefined): this {
    this._preAuthRef = preAuthRefElement;
    return this;
  }

  /** Preauthorization reference effective period (0..1) Created when absent. */
  getPreAuthPeriod(): Period {
    if (this.preAuthPeriod === undefined) {
      this.preAuthPeriod = new Period();
    }
    return this.preAuthPeriod;
  }

  setPreAuthPeriod(preAuthPeriod: Period | undefined): this {
    return this.setFieldValue('preAuthPeriod', preAuthPeriod);
  }

  hasPreAuthPeriod(): boolean {
    return this.hasFieldValue('preAuthPeriod');
  }
}

modelTypeRegistry.register('ClaimResponseItemReviewOutcome', ClaimResponseItemReviewOutcome, false);

/**
 * Adjudication details
 */
export class ClaimResponseItemAdjudication extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'category',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'reason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reason', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'amount',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'amount', typeCode: 'Money' }],
    },
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
  ];

  /** Type of adjudication information (1..1) */
  category?: CodeableConcept;

  /** Explanation of adjudication outcome (0..1) */
  reason?: CodeableConcept;

  /** Monetary amount (0..1) */
  amount?: Money;

  /** Non-monetary value (0..1) */
  quantity?: Quantity;

  override fhirType(): string {
    return 'ClaimResponse.item.adjudication';
  }

  /** FHIR JSON for this ClaimResponseItemAdjudication, typed as the plain `ClaimResponseAdjudication` data type. */
  override toJSON(): plainTypes.ClaimResponseAdjudication {
    return this.serialize() as plainTypes.ClaimResponseAdjudication;
  }

  /** Type of adjudication information (1..1) Created when absent. */
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

  /** Explanation of adjudication outcome (0..1) Created when absent. */
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

  /** Monetary amount (0..1) Created when absent. */
  getAmount(): Money {
    if (this.amount === undefined) {
      this.amount = new Money();
    }
    return this.amount;
  }

  setAmount(amount: Money | undefined): this {
    return this.setFieldValue('amount', amount);
  }

  hasAmount(): boolean {
    return this.hasFieldValue('amount');
  }

  /** Non-monetary value (0..1) Created when absent. */
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
}

modelTypeRegistry.register('ClaimResponseItemAdjudication', ClaimResponseItemAdjudication, false);

/**
 * Adjudication for claim details
 */
export class ClaimResponseItemDetail extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'detailSequence',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'detailSequence', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'traceNumber',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'traceNumber', typeCode: 'Identifier' }],
    },
    {
      elementName: 'noteNumber',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'noteNumber', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'reviewOutcome',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reviewOutcome', typeCode: 'ClaimResponseItemReviewOutcome' }],
    },
    {
      elementName: 'adjudication',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'adjudication', typeCode: 'ClaimResponseItemAdjudication' }],
    },
    {
      elementName: 'subDetail',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'subDetail', typeCode: 'ClaimResponseItemDetailSubDetail' }],
    },
  ];

  /** Claim detail instance identifier (1..1) */
  detailSequence?: number;
  /** Id and extensions of the primitive `detailSequence`. */
  _detailSequence?: Element;

  /** Number for tracking (0..*) */
  traceNumber?: Identifier[];

  /** Applicable note numbers (0..*) */
  noteNumber?: number[];
  /** Id and extensions of the primitive `noteNumber`. */
  _noteNumber?: (Element | null)[];

  /** Detail level adjudication results (0..1) */
  reviewOutcome?: ClaimResponseItemReviewOutcome;

  /** Detail level adjudication details (0..*) */
  adjudication?: ClaimResponseItemAdjudication[];

  /** Adjudication for claim sub-details (0..*) */
  subDetail?: ClaimResponseItemDetailSubDetail[];

  override fhirType(): string {
    return 'ClaimResponse.item.detail';
  }

  /** FHIR JSON for this ClaimResponseItemDetail, typed as the plain `ClaimResponseDetail` data type. */
  override toJSON(): plainTypes.ClaimResponseDetail {
    return this.serialize() as plainTypes.ClaimResponseDetail;
  }

  /** Claim detail instance identifier (1..1) */
  getDetailSequence(): number | undefined {
    return this.detailSequence;
  }

  /** Sets `detailSequence`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setDetailSequence(detailSequence: number | undefined): this {
    return this.setFieldValue('detailSequence', detailSequence);
  }

  hasDetailSequence(): boolean {
    return this.hasFieldValue('detailSequence');
  }

  /** The element carrying the id and extensions of `detailSequence`. Created when absent. */
  getDetailSequenceElement(): Element {
    if (this._detailSequence === undefined) {
      this._detailSequence = new Element();
    }
    return this._detailSequence;
  }

  setDetailSequenceElement(detailSequenceElement: Element | undefined): this {
    this._detailSequence = detailSequenceElement;
    return this;
  }

  /** Number for tracking (0..*) Never undefined; an empty list is created when absent. */
  getTraceNumber(): Identifier[] {
    if (this.traceNumber === undefined) {
      this.traceNumber = [];
    }
    return this.traceNumber;
  }

  setTraceNumber(traceNumber: Identifier[] | undefined): this {
    return this.setFieldValue('traceNumber', traceNumber);
  }

  hasTraceNumber(): boolean {
    return this.hasFieldValue('traceNumber');
  }

  /** Appends a new, empty Identifier to `traceNumber` and returns it so it can be filled in. */
  addTraceNumber(): Identifier;
  /** Appends the given Identifier to `traceNumber` and returns this object for chaining. */
  addTraceNumber(identifier: Identifier): this;
  addTraceNumber(identifier?: Identifier): Identifier | this {
    if (identifier !== undefined) {
      return this.addFieldValue('traceNumber', identifier);
    }
    const createdIdentifier = new Identifier();
    this.addFieldValue('traceNumber', createdIdentifier);
    return createdIdentifier;
  }

  /** The first Identifier of `traceNumber`. One is added when the list is empty. */
  getTraceNumberFirstRep(): Identifier {
    const firstIdentifier = this.getTraceNumber()[0];
    return firstIdentifier === undefined ? this.addTraceNumber() : firstIdentifier;
  }

  /** Applicable note numbers (0..*) Never undefined; an empty list is created when absent. */
  getNoteNumber(): number[] {
    if (this.noteNumber === undefined) {
      this.noteNumber = [];
    }
    return this.noteNumber;
  }

  setNoteNumber(noteNumber: number[] | undefined): this {
    return this.setFieldValue('noteNumber', noteNumber);
  }

  hasNoteNumber(): boolean {
    return this.hasFieldValue('noteNumber');
  }

  /** Appends one value to `noteNumber`. Throws a FhirModelError when it is not a valid FHIR positiveInt. */
  addNoteNumber(noteNumber: number): this {
    return this.addFieldValue('noteNumber', noteNumber);
  }

  /** Detail level adjudication results (0..1) Created when absent. */
  getReviewOutcome(): ClaimResponseItemReviewOutcome {
    if (this.reviewOutcome === undefined) {
      this.reviewOutcome = new ClaimResponseItemReviewOutcome();
    }
    return this.reviewOutcome;
  }

  setReviewOutcome(reviewOutcome: ClaimResponseItemReviewOutcome | undefined): this {
    return this.setFieldValue('reviewOutcome', reviewOutcome);
  }

  hasReviewOutcome(): boolean {
    return this.hasFieldValue('reviewOutcome');
  }

  /** Detail level adjudication details (0..*) Never undefined; an empty list is created when absent. */
  getAdjudication(): ClaimResponseItemAdjudication[] {
    if (this.adjudication === undefined) {
      this.adjudication = [];
    }
    return this.adjudication;
  }

  setAdjudication(adjudication: ClaimResponseItemAdjudication[] | undefined): this {
    return this.setFieldValue('adjudication', adjudication);
  }

  hasAdjudication(): boolean {
    return this.hasFieldValue('adjudication');
  }

  /** Appends a new, empty ClaimResponseItemAdjudication to `adjudication` and returns it so it can be filled in. */
  addAdjudication(): ClaimResponseItemAdjudication;
  /** Appends the given ClaimResponseItemAdjudication to `adjudication` and returns this object for chaining. */
  addAdjudication(claimResponseItemAdjudication: ClaimResponseItemAdjudication): this;
  addAdjudication(
    claimResponseItemAdjudication?: ClaimResponseItemAdjudication
  ): ClaimResponseItemAdjudication | this {
    if (claimResponseItemAdjudication !== undefined) {
      return this.addFieldValue('adjudication', claimResponseItemAdjudication);
    }
    const createdClaimResponseItemAdjudication = new ClaimResponseItemAdjudication();
    this.addFieldValue('adjudication', createdClaimResponseItemAdjudication);
    return createdClaimResponseItemAdjudication;
  }

  /** The first ClaimResponseItemAdjudication of `adjudication`. One is added when the list is empty. */
  getAdjudicationFirstRep(): ClaimResponseItemAdjudication {
    const firstClaimResponseItemAdjudication = this.getAdjudication()[0];
    return firstClaimResponseItemAdjudication === undefined
      ? this.addAdjudication()
      : firstClaimResponseItemAdjudication;
  }

  /** Adjudication for claim sub-details (0..*) Never undefined; an empty list is created when absent. */
  getSubDetail(): ClaimResponseItemDetailSubDetail[] {
    if (this.subDetail === undefined) {
      this.subDetail = [];
    }
    return this.subDetail;
  }

  setSubDetail(subDetail: ClaimResponseItemDetailSubDetail[] | undefined): this {
    return this.setFieldValue('subDetail', subDetail);
  }

  hasSubDetail(): boolean {
    return this.hasFieldValue('subDetail');
  }

  /** Appends a new, empty ClaimResponseItemDetailSubDetail to `subDetail` and returns it so it can be filled in. */
  addSubDetail(): ClaimResponseItemDetailSubDetail;
  /** Appends the given ClaimResponseItemDetailSubDetail to `subDetail` and returns this object for chaining. */
  addSubDetail(claimResponseItemDetailSubDetail: ClaimResponseItemDetailSubDetail): this;
  addSubDetail(
    claimResponseItemDetailSubDetail?: ClaimResponseItemDetailSubDetail
  ): ClaimResponseItemDetailSubDetail | this {
    if (claimResponseItemDetailSubDetail !== undefined) {
      return this.addFieldValue('subDetail', claimResponseItemDetailSubDetail);
    }
    const createdClaimResponseItemDetailSubDetail = new ClaimResponseItemDetailSubDetail();
    this.addFieldValue('subDetail', createdClaimResponseItemDetailSubDetail);
    return createdClaimResponseItemDetailSubDetail;
  }

  /** The first ClaimResponseItemDetailSubDetail of `subDetail`. One is added when the list is empty. */
  getSubDetailFirstRep(): ClaimResponseItemDetailSubDetail {
    const firstClaimResponseItemDetailSubDetail = this.getSubDetail()[0];
    return firstClaimResponseItemDetailSubDetail === undefined
      ? this.addSubDetail()
      : firstClaimResponseItemDetailSubDetail;
  }
}

modelTypeRegistry.register('ClaimResponseItemDetail', ClaimResponseItemDetail, false);

/**
 * Adjudication for claim sub-details
 */
export class ClaimResponseItemDetailSubDetail extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'subDetailSequence',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'subDetailSequence', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'traceNumber',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'traceNumber', typeCode: 'Identifier' }],
    },
    {
      elementName: 'noteNumber',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'noteNumber', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'reviewOutcome',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reviewOutcome', typeCode: 'ClaimResponseItemReviewOutcome' }],
    },
    {
      elementName: 'adjudication',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'adjudication', typeCode: 'ClaimResponseItemAdjudication' }],
    },
  ];

  /** Claim sub-detail instance identifier (1..1) */
  subDetailSequence?: number;
  /** Id and extensions of the primitive `subDetailSequence`. */
  _subDetailSequence?: Element;

  /** Number for tracking (0..*) */
  traceNumber?: Identifier[];

  /** Applicable note numbers (0..*) */
  noteNumber?: number[];
  /** Id and extensions of the primitive `noteNumber`. */
  _noteNumber?: (Element | null)[];

  /** Subdetail level adjudication results (0..1) */
  reviewOutcome?: ClaimResponseItemReviewOutcome;

  /** Subdetail level adjudication details (0..*) */
  adjudication?: ClaimResponseItemAdjudication[];

  override fhirType(): string {
    return 'ClaimResponse.item.detail.subDetail';
  }

  /** FHIR JSON for this ClaimResponseItemDetailSubDetail, typed as the plain `ClaimResponseSubDetail` data type. */
  override toJSON(): plainTypes.ClaimResponseSubDetail {
    return this.serialize() as plainTypes.ClaimResponseSubDetail;
  }

  /** Claim sub-detail instance identifier (1..1) */
  getSubDetailSequence(): number | undefined {
    return this.subDetailSequence;
  }

  /** Sets `subDetailSequence`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setSubDetailSequence(subDetailSequence: number | undefined): this {
    return this.setFieldValue('subDetailSequence', subDetailSequence);
  }

  hasSubDetailSequence(): boolean {
    return this.hasFieldValue('subDetailSequence');
  }

  /** The element carrying the id and extensions of `subDetailSequence`. Created when absent. */
  getSubDetailSequenceElement(): Element {
    if (this._subDetailSequence === undefined) {
      this._subDetailSequence = new Element();
    }
    return this._subDetailSequence;
  }

  setSubDetailSequenceElement(subDetailSequenceElement: Element | undefined): this {
    this._subDetailSequence = subDetailSequenceElement;
    return this;
  }

  /** Number for tracking (0..*) Never undefined; an empty list is created when absent. */
  getTraceNumber(): Identifier[] {
    if (this.traceNumber === undefined) {
      this.traceNumber = [];
    }
    return this.traceNumber;
  }

  setTraceNumber(traceNumber: Identifier[] | undefined): this {
    return this.setFieldValue('traceNumber', traceNumber);
  }

  hasTraceNumber(): boolean {
    return this.hasFieldValue('traceNumber');
  }

  /** Appends a new, empty Identifier to `traceNumber` and returns it so it can be filled in. */
  addTraceNumber(): Identifier;
  /** Appends the given Identifier to `traceNumber` and returns this object for chaining. */
  addTraceNumber(identifier: Identifier): this;
  addTraceNumber(identifier?: Identifier): Identifier | this {
    if (identifier !== undefined) {
      return this.addFieldValue('traceNumber', identifier);
    }
    const createdIdentifier = new Identifier();
    this.addFieldValue('traceNumber', createdIdentifier);
    return createdIdentifier;
  }

  /** The first Identifier of `traceNumber`. One is added when the list is empty. */
  getTraceNumberFirstRep(): Identifier {
    const firstIdentifier = this.getTraceNumber()[0];
    return firstIdentifier === undefined ? this.addTraceNumber() : firstIdentifier;
  }

  /** Applicable note numbers (0..*) Never undefined; an empty list is created when absent. */
  getNoteNumber(): number[] {
    if (this.noteNumber === undefined) {
      this.noteNumber = [];
    }
    return this.noteNumber;
  }

  setNoteNumber(noteNumber: number[] | undefined): this {
    return this.setFieldValue('noteNumber', noteNumber);
  }

  hasNoteNumber(): boolean {
    return this.hasFieldValue('noteNumber');
  }

  /** Appends one value to `noteNumber`. Throws a FhirModelError when it is not a valid FHIR positiveInt. */
  addNoteNumber(noteNumber: number): this {
    return this.addFieldValue('noteNumber', noteNumber);
  }

  /** Subdetail level adjudication results (0..1) Created when absent. */
  getReviewOutcome(): ClaimResponseItemReviewOutcome {
    if (this.reviewOutcome === undefined) {
      this.reviewOutcome = new ClaimResponseItemReviewOutcome();
    }
    return this.reviewOutcome;
  }

  setReviewOutcome(reviewOutcome: ClaimResponseItemReviewOutcome | undefined): this {
    return this.setFieldValue('reviewOutcome', reviewOutcome);
  }

  hasReviewOutcome(): boolean {
    return this.hasFieldValue('reviewOutcome');
  }

  /** Subdetail level adjudication details (0..*) Never undefined; an empty list is created when absent. */
  getAdjudication(): ClaimResponseItemAdjudication[] {
    if (this.adjudication === undefined) {
      this.adjudication = [];
    }
    return this.adjudication;
  }

  setAdjudication(adjudication: ClaimResponseItemAdjudication[] | undefined): this {
    return this.setFieldValue('adjudication', adjudication);
  }

  hasAdjudication(): boolean {
    return this.hasFieldValue('adjudication');
  }

  /** Appends a new, empty ClaimResponseItemAdjudication to `adjudication` and returns it so it can be filled in. */
  addAdjudication(): ClaimResponseItemAdjudication;
  /** Appends the given ClaimResponseItemAdjudication to `adjudication` and returns this object for chaining. */
  addAdjudication(claimResponseItemAdjudication: ClaimResponseItemAdjudication): this;
  addAdjudication(
    claimResponseItemAdjudication?: ClaimResponseItemAdjudication
  ): ClaimResponseItemAdjudication | this {
    if (claimResponseItemAdjudication !== undefined) {
      return this.addFieldValue('adjudication', claimResponseItemAdjudication);
    }
    const createdClaimResponseItemAdjudication = new ClaimResponseItemAdjudication();
    this.addFieldValue('adjudication', createdClaimResponseItemAdjudication);
    return createdClaimResponseItemAdjudication;
  }

  /** The first ClaimResponseItemAdjudication of `adjudication`. One is added when the list is empty. */
  getAdjudicationFirstRep(): ClaimResponseItemAdjudication {
    const firstClaimResponseItemAdjudication = this.getAdjudication()[0];
    return firstClaimResponseItemAdjudication === undefined
      ? this.addAdjudication()
      : firstClaimResponseItemAdjudication;
  }
}

modelTypeRegistry.register(
  'ClaimResponseItemDetailSubDetail',
  ClaimResponseItemDetailSubDetail,
  false
);

/**
 * Insurer added line items
 */
export class ClaimResponseAddItem extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'itemSequence',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'itemSequence', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'detailSequence',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'detailSequence', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'subdetailSequence',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'subdetailSequence', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'traceNumber',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'traceNumber', typeCode: 'Identifier' }],
    },
    {
      elementName: 'provider',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'provider',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Practitioner', 'PractitionerRole'],
        },
      ],
    },
    {
      elementName: 'revenue',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'revenue', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'productOrService',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'productOrService', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'productOrServiceEnd',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'productOrServiceEnd', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'request',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'request',
          typeCode: 'Reference',
          targetResourceTypes: [
            'DeviceRequest',
            'MedicationRequest',
            'NutritionOrder',
            'ServiceRequest',
            'SupplyRequest',
            'VisionPrescription',
          ],
        },
      ],
    },
    {
      elementName: 'modifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'modifier', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'programCode',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'programCode', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'serviced',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'servicedDate', typeCode: 'date' },
        { jsonKey: 'servicedPeriod', typeCode: 'Period' },
      ],
    },
    {
      elementName: 'location',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'locationCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'locationAddress', typeCode: 'Address' },
        { jsonKey: 'locationReference', typeCode: 'Reference', targetResourceTypes: ['Location'] },
      ],
    },
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'unitPrice',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'unitPrice', typeCode: 'Money' }],
    },
    {
      elementName: 'factor',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'factor', typeCode: 'decimal' }],
    },
    {
      elementName: 'tax',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'tax', typeCode: 'Money' }],
    },
    {
      elementName: 'net',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'net', typeCode: 'Money' }],
    },
    {
      elementName: 'bodySite',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'bodySite', typeCode: 'ClaimResponseAddItemBodySite' }],
    },
    {
      elementName: 'noteNumber',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'noteNumber', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'reviewOutcome',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reviewOutcome', typeCode: 'ClaimResponseItemReviewOutcome' }],
    },
    {
      elementName: 'adjudication',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'adjudication', typeCode: 'ClaimResponseItemAdjudication' }],
    },
    {
      elementName: 'detail',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'detail', typeCode: 'ClaimResponseAddItemDetail' }],
    },
  ];

  /** Item sequence number (0..*) */
  itemSequence?: number[];
  /** Id and extensions of the primitive `itemSequence`. */
  _itemSequence?: (Element | null)[];

  /** Detail sequence number (0..*) */
  detailSequence?: number[];
  /** Id and extensions of the primitive `detailSequence`. */
  _detailSequence?: (Element | null)[];

  /** Subdetail sequence number (0..*) */
  subdetailSequence?: number[];
  /** Id and extensions of the primitive `subdetailSequence`. */
  _subdetailSequence?: (Element | null)[];

  /** Number for tracking (0..*) */
  traceNumber?: Identifier[];

  /** Authorized providers (0..*) */
  provider?: Reference[];

  /** Revenue or cost center code (0..1) */
  revenue?: CodeableConcept;

  /** Billing, service, product, or drug code (0..1) */
  productOrService?: CodeableConcept;

  /** End of a range of codes (0..1) */
  productOrServiceEnd?: CodeableConcept;

  /** Request or Referral for Service (0..*) */
  request?: Reference[];

  /** Service/Product billing modifiers (0..*) */
  modifier?: CodeableConcept[];

  /** Program the product or service is provided under (0..*) */
  programCode?: CodeableConcept[];

  /** Date or dates of service or product delivery (0..1) */
  servicedDate?: string;
  /** Id and extensions of the primitive `servicedDate`. */
  _servicedDate?: Element;
  /** Date or dates of service or product delivery (0..1) */
  servicedPeriod?: Period;

  /** Place of service or where product was supplied (0..1) */
  locationCodeableConcept?: CodeableConcept;
  /** Place of service or where product was supplied (0..1) */
  locationAddress?: Address;
  /** Place of service or where product was supplied (0..1) */
  locationReference?: Reference;

  /** Count of products or services (0..1) */
  quantity?: Quantity;

  /** Fee, charge or cost per item (0..1) */
  unitPrice?: Money;

  /** Price scaling factor (0..1) */
  factor?: number;
  /** Id and extensions of the primitive `factor`. */
  _factor?: Element;

  /** Total tax (0..1) */
  tax?: Money;

  /** Total item cost (0..1) */
  net?: Money;

  /** Anatomical location (0..*) */
  bodySite?: ClaimResponseAddItemBodySite[];

  /** Applicable note numbers (0..*) */
  noteNumber?: number[];
  /** Id and extensions of the primitive `noteNumber`. */
  _noteNumber?: (Element | null)[];

  /** Added items adjudication results (0..1) */
  reviewOutcome?: ClaimResponseItemReviewOutcome;

  /** Added items adjudication (0..*) */
  adjudication?: ClaimResponseItemAdjudication[];

  /** Insurer added line details (0..*) */
  detail?: ClaimResponseAddItemDetail[];

  override fhirType(): string {
    return 'ClaimResponse.addItem';
  }

  /** FHIR JSON for this ClaimResponseAddItem, typed as the plain `ClaimResponseAddItem` data type. */
  override toJSON(): plainTypes.ClaimResponseAddItem {
    return this.serialize() as plainTypes.ClaimResponseAddItem;
  }

  /** Item sequence number (0..*) Never undefined; an empty list is created when absent. */
  getItemSequence(): number[] {
    if (this.itemSequence === undefined) {
      this.itemSequence = [];
    }
    return this.itemSequence;
  }

  setItemSequence(itemSequence: number[] | undefined): this {
    return this.setFieldValue('itemSequence', itemSequence);
  }

  hasItemSequence(): boolean {
    return this.hasFieldValue('itemSequence');
  }

  /** Appends one value to `itemSequence`. Throws a FhirModelError when it is not a valid FHIR positiveInt. */
  addItemSequence(itemSequence: number): this {
    return this.addFieldValue('itemSequence', itemSequence);
  }

  /** Detail sequence number (0..*) Never undefined; an empty list is created when absent. */
  getDetailSequence(): number[] {
    if (this.detailSequence === undefined) {
      this.detailSequence = [];
    }
    return this.detailSequence;
  }

  setDetailSequence(detailSequence: number[] | undefined): this {
    return this.setFieldValue('detailSequence', detailSequence);
  }

  hasDetailSequence(): boolean {
    return this.hasFieldValue('detailSequence');
  }

  /** Appends one value to `detailSequence`. Throws a FhirModelError when it is not a valid FHIR positiveInt. */
  addDetailSequence(detailSequence: number): this {
    return this.addFieldValue('detailSequence', detailSequence);
  }

  /** Subdetail sequence number (0..*) Never undefined; an empty list is created when absent. */
  getSubdetailSequence(): number[] {
    if (this.subdetailSequence === undefined) {
      this.subdetailSequence = [];
    }
    return this.subdetailSequence;
  }

  setSubdetailSequence(subdetailSequence: number[] | undefined): this {
    return this.setFieldValue('subdetailSequence', subdetailSequence);
  }

  hasSubdetailSequence(): boolean {
    return this.hasFieldValue('subdetailSequence');
  }

  /** Appends one value to `subdetailSequence`. Throws a FhirModelError when it is not a valid FHIR positiveInt. */
  addSubdetailSequence(subdetailSequence: number): this {
    return this.addFieldValue('subdetailSequence', subdetailSequence);
  }

  /** Number for tracking (0..*) Never undefined; an empty list is created when absent. */
  getTraceNumber(): Identifier[] {
    if (this.traceNumber === undefined) {
      this.traceNumber = [];
    }
    return this.traceNumber;
  }

  setTraceNumber(traceNumber: Identifier[] | undefined): this {
    return this.setFieldValue('traceNumber', traceNumber);
  }

  hasTraceNumber(): boolean {
    return this.hasFieldValue('traceNumber');
  }

  /** Appends a new, empty Identifier to `traceNumber` and returns it so it can be filled in. */
  addTraceNumber(): Identifier;
  /** Appends the given Identifier to `traceNumber` and returns this object for chaining. */
  addTraceNumber(identifier: Identifier): this;
  addTraceNumber(identifier?: Identifier): Identifier | this {
    if (identifier !== undefined) {
      return this.addFieldValue('traceNumber', identifier);
    }
    const createdIdentifier = new Identifier();
    this.addFieldValue('traceNumber', createdIdentifier);
    return createdIdentifier;
  }

  /** The first Identifier of `traceNumber`. One is added when the list is empty. */
  getTraceNumberFirstRep(): Identifier {
    const firstIdentifier = this.getTraceNumber()[0];
    return firstIdentifier === undefined ? this.addTraceNumber() : firstIdentifier;
  }

  /** Authorized providers (0..*) Never undefined; an empty list is created when absent. */
  getProvider(): Reference[] {
    if (this.provider === undefined) {
      this.provider = [];
    }
    return this.provider;
  }

  setProvider(provider: Reference[] | undefined): this {
    return this.setFieldValue('provider', provider);
  }

  hasProvider(): boolean {
    return this.hasFieldValue('provider');
  }

  /** Appends a new, empty Reference to `provider` and returns it so it can be filled in. */
  addProvider(): Reference;
  /** Appends the given Reference to `provider` and returns this object for chaining. */
  addProvider(reference: Reference): this;
  addProvider(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('provider', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('provider', createdReference);
    return createdReference;
  }

  /** The first Reference of `provider`. One is added when the list is empty. */
  getProviderFirstRep(): Reference {
    const firstReference = this.getProvider()[0];
    return firstReference === undefined ? this.addProvider() : firstReference;
  }

  /** Revenue or cost center code (0..1) Created when absent. */
  getRevenue(): CodeableConcept {
    if (this.revenue === undefined) {
      this.revenue = new CodeableConcept();
    }
    return this.revenue;
  }

  setRevenue(revenue: CodeableConcept | undefined): this {
    return this.setFieldValue('revenue', revenue);
  }

  hasRevenue(): boolean {
    return this.hasFieldValue('revenue');
  }

  /** Billing, service, product, or drug code (0..1) Created when absent. */
  getProductOrService(): CodeableConcept {
    if (this.productOrService === undefined) {
      this.productOrService = new CodeableConcept();
    }
    return this.productOrService;
  }

  setProductOrService(productOrService: CodeableConcept | undefined): this {
    return this.setFieldValue('productOrService', productOrService);
  }

  hasProductOrService(): boolean {
    return this.hasFieldValue('productOrService');
  }

  /** End of a range of codes (0..1) Created when absent. */
  getProductOrServiceEnd(): CodeableConcept {
    if (this.productOrServiceEnd === undefined) {
      this.productOrServiceEnd = new CodeableConcept();
    }
    return this.productOrServiceEnd;
  }

  setProductOrServiceEnd(productOrServiceEnd: CodeableConcept | undefined): this {
    return this.setFieldValue('productOrServiceEnd', productOrServiceEnd);
  }

  hasProductOrServiceEnd(): boolean {
    return this.hasFieldValue('productOrServiceEnd');
  }

  /** Request or Referral for Service (0..*) Never undefined; an empty list is created when absent. */
  getRequest(): Reference[] {
    if (this.request === undefined) {
      this.request = [];
    }
    return this.request;
  }

  setRequest(request: Reference[] | undefined): this {
    return this.setFieldValue('request', request);
  }

  hasRequest(): boolean {
    return this.hasFieldValue('request');
  }

  /** Appends a new, empty Reference to `request` and returns it so it can be filled in. */
  addRequest(): Reference;
  /** Appends the given Reference to `request` and returns this object for chaining. */
  addRequest(reference: Reference): this;
  addRequest(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('request', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('request', createdReference);
    return createdReference;
  }

  /** The first Reference of `request`. One is added when the list is empty. */
  getRequestFirstRep(): Reference {
    const firstReference = this.getRequest()[0];
    return firstReference === undefined ? this.addRequest() : firstReference;
  }

  /** Service/Product billing modifiers (0..*) Never undefined; an empty list is created when absent. */
  getModifier(): CodeableConcept[] {
    if (this.modifier === undefined) {
      this.modifier = [];
    }
    return this.modifier;
  }

  setModifier(modifier: CodeableConcept[] | undefined): this {
    return this.setFieldValue('modifier', modifier);
  }

  hasModifier(): boolean {
    return this.hasFieldValue('modifier');
  }

  /** Appends a new, empty CodeableConcept to `modifier` and returns it so it can be filled in. */
  addModifier(): CodeableConcept;
  /** Appends the given CodeableConcept to `modifier` and returns this object for chaining. */
  addModifier(codeableConcept: CodeableConcept): this;
  addModifier(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('modifier', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('modifier', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `modifier`. One is added when the list is empty. */
  getModifierFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getModifier()[0];
    return firstCodeableConcept === undefined ? this.addModifier() : firstCodeableConcept;
  }

  /** Program the product or service is provided under (0..*) Never undefined; an empty list is created when absent. */
  getProgramCode(): CodeableConcept[] {
    if (this.programCode === undefined) {
      this.programCode = [];
    }
    return this.programCode;
  }

  setProgramCode(programCode: CodeableConcept[] | undefined): this {
    return this.setFieldValue('programCode', programCode);
  }

  hasProgramCode(): boolean {
    return this.hasFieldValue('programCode');
  }

  /** Appends a new, empty CodeableConcept to `programCode` and returns it so it can be filled in. */
  addProgramCode(): CodeableConcept;
  /** Appends the given CodeableConcept to `programCode` and returns this object for chaining. */
  addProgramCode(codeableConcept: CodeableConcept): this;
  addProgramCode(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('programCode', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('programCode', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `programCode`. One is added when the list is empty. */
  getProgramCodeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getProgramCode()[0];
    return firstCodeableConcept === undefined ? this.addProgramCode() : firstCodeableConcept;
  }

  /** Date or dates of service or product delivery (0..1) Whichever type of `serviced[x]` is set. */
  getServiced(): string | Period | undefined {
    return this.getChoiceValue<string | Period>('serviced');
  }

  /** True when any type of `serviced[x]` is set. */
  hasServiced(): boolean {
    return this.hasChoiceValue('serviced');
  }

  getServicedDate(): string | undefined {
    return this.servicedDate;
  }

  /** Sets `serviced[x]` as date and clears every other type of it. */
  setServicedDate(servicedDate: string | undefined): this {
    return this.setFieldValue('servicedDate', servicedDate);
  }

  hasServicedDate(): boolean {
    return this.hasFieldValue('servicedDate');
  }

  getServicedPeriod(): Period | undefined {
    return this.servicedPeriod;
  }

  /** Sets `serviced[x]` as Period and clears every other type of it. */
  setServicedPeriod(servicedPeriod: Period | undefined): this {
    return this.setFieldValue('servicedPeriod', servicedPeriod);
  }

  hasServicedPeriod(): boolean {
    return this.hasFieldValue('servicedPeriod');
  }

  /** Place of service or where product was supplied (0..1) Whichever type of `location[x]` is set. */
  getLocation(): CodeableConcept | Address | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | Address | Reference>('location');
  }

  /** True when any type of `location[x]` is set. */
  hasLocation(): boolean {
    return this.hasChoiceValue('location');
  }

  getLocationCodeableConcept(): CodeableConcept | undefined {
    return this.locationCodeableConcept;
  }

  /** Sets `location[x]` as CodeableConcept and clears every other type of it. */
  setLocationCodeableConcept(locationCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('locationCodeableConcept', locationCodeableConcept);
  }

  hasLocationCodeableConcept(): boolean {
    return this.hasFieldValue('locationCodeableConcept');
  }

  getLocationAddress(): Address | undefined {
    return this.locationAddress;
  }

  /** Sets `location[x]` as Address and clears every other type of it. */
  setLocationAddress(locationAddress: Address | undefined): this {
    return this.setFieldValue('locationAddress', locationAddress);
  }

  hasLocationAddress(): boolean {
    return this.hasFieldValue('locationAddress');
  }

  getLocationReference(): Reference | undefined {
    return this.locationReference;
  }

  /** Sets `location[x]` as Reference and clears every other type of it. */
  setLocationReference(locationReference: Reference | undefined): this {
    return this.setFieldValue('locationReference', locationReference);
  }

  hasLocationReference(): boolean {
    return this.hasFieldValue('locationReference');
  }

  /** Count of products or services (0..1) Created when absent. */
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

  /** Fee, charge or cost per item (0..1) Created when absent. */
  getUnitPrice(): Money {
    if (this.unitPrice === undefined) {
      this.unitPrice = new Money();
    }
    return this.unitPrice;
  }

  setUnitPrice(unitPrice: Money | undefined): this {
    return this.setFieldValue('unitPrice', unitPrice);
  }

  hasUnitPrice(): boolean {
    return this.hasFieldValue('unitPrice');
  }

  /** Price scaling factor (0..1) */
  getFactor(): number | undefined {
    return this.factor;
  }

  /** Sets `factor`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setFactor(factor: number | undefined): this {
    return this.setFieldValue('factor', factor);
  }

  hasFactor(): boolean {
    return this.hasFieldValue('factor');
  }

  /** The element carrying the id and extensions of `factor`. Created when absent. */
  getFactorElement(): Element {
    if (this._factor === undefined) {
      this._factor = new Element();
    }
    return this._factor;
  }

  setFactorElement(factorElement: Element | undefined): this {
    this._factor = factorElement;
    return this;
  }

  /** Total tax (0..1) Created when absent. */
  getTax(): Money {
    if (this.tax === undefined) {
      this.tax = new Money();
    }
    return this.tax;
  }

  setTax(tax: Money | undefined): this {
    return this.setFieldValue('tax', tax);
  }

  hasTax(): boolean {
    return this.hasFieldValue('tax');
  }

  /** Total item cost (0..1) Created when absent. */
  getNet(): Money {
    if (this.net === undefined) {
      this.net = new Money();
    }
    return this.net;
  }

  setNet(net: Money | undefined): this {
    return this.setFieldValue('net', net);
  }

  hasNet(): boolean {
    return this.hasFieldValue('net');
  }

  /** Anatomical location (0..*) Never undefined; an empty list is created when absent. */
  getBodySite(): ClaimResponseAddItemBodySite[] {
    if (this.bodySite === undefined) {
      this.bodySite = [];
    }
    return this.bodySite;
  }

  setBodySite(bodySite: ClaimResponseAddItemBodySite[] | undefined): this {
    return this.setFieldValue('bodySite', bodySite);
  }

  hasBodySite(): boolean {
    return this.hasFieldValue('bodySite');
  }

  /** Appends a new, empty ClaimResponseAddItemBodySite to `bodySite` and returns it so it can be filled in. */
  addBodySite(): ClaimResponseAddItemBodySite;
  /** Appends the given ClaimResponseAddItemBodySite to `bodySite` and returns this object for chaining. */
  addBodySite(claimResponseAddItemBodySite: ClaimResponseAddItemBodySite): this;
  addBodySite(
    claimResponseAddItemBodySite?: ClaimResponseAddItemBodySite
  ): ClaimResponseAddItemBodySite | this {
    if (claimResponseAddItemBodySite !== undefined) {
      return this.addFieldValue('bodySite', claimResponseAddItemBodySite);
    }
    const createdClaimResponseAddItemBodySite = new ClaimResponseAddItemBodySite();
    this.addFieldValue('bodySite', createdClaimResponseAddItemBodySite);
    return createdClaimResponseAddItemBodySite;
  }

  /** The first ClaimResponseAddItemBodySite of `bodySite`. One is added when the list is empty. */
  getBodySiteFirstRep(): ClaimResponseAddItemBodySite {
    const firstClaimResponseAddItemBodySite = this.getBodySite()[0];
    return firstClaimResponseAddItemBodySite === undefined
      ? this.addBodySite()
      : firstClaimResponseAddItemBodySite;
  }

  /** Applicable note numbers (0..*) Never undefined; an empty list is created when absent. */
  getNoteNumber(): number[] {
    if (this.noteNumber === undefined) {
      this.noteNumber = [];
    }
    return this.noteNumber;
  }

  setNoteNumber(noteNumber: number[] | undefined): this {
    return this.setFieldValue('noteNumber', noteNumber);
  }

  hasNoteNumber(): boolean {
    return this.hasFieldValue('noteNumber');
  }

  /** Appends one value to `noteNumber`. Throws a FhirModelError when it is not a valid FHIR positiveInt. */
  addNoteNumber(noteNumber: number): this {
    return this.addFieldValue('noteNumber', noteNumber);
  }

  /** Added items adjudication results (0..1) Created when absent. */
  getReviewOutcome(): ClaimResponseItemReviewOutcome {
    if (this.reviewOutcome === undefined) {
      this.reviewOutcome = new ClaimResponseItemReviewOutcome();
    }
    return this.reviewOutcome;
  }

  setReviewOutcome(reviewOutcome: ClaimResponseItemReviewOutcome | undefined): this {
    return this.setFieldValue('reviewOutcome', reviewOutcome);
  }

  hasReviewOutcome(): boolean {
    return this.hasFieldValue('reviewOutcome');
  }

  /** Added items adjudication (0..*) Never undefined; an empty list is created when absent. */
  getAdjudication(): ClaimResponseItemAdjudication[] {
    if (this.adjudication === undefined) {
      this.adjudication = [];
    }
    return this.adjudication;
  }

  setAdjudication(adjudication: ClaimResponseItemAdjudication[] | undefined): this {
    return this.setFieldValue('adjudication', adjudication);
  }

  hasAdjudication(): boolean {
    return this.hasFieldValue('adjudication');
  }

  /** Appends a new, empty ClaimResponseItemAdjudication to `adjudication` and returns it so it can be filled in. */
  addAdjudication(): ClaimResponseItemAdjudication;
  /** Appends the given ClaimResponseItemAdjudication to `adjudication` and returns this object for chaining. */
  addAdjudication(claimResponseItemAdjudication: ClaimResponseItemAdjudication): this;
  addAdjudication(
    claimResponseItemAdjudication?: ClaimResponseItemAdjudication
  ): ClaimResponseItemAdjudication | this {
    if (claimResponseItemAdjudication !== undefined) {
      return this.addFieldValue('adjudication', claimResponseItemAdjudication);
    }
    const createdClaimResponseItemAdjudication = new ClaimResponseItemAdjudication();
    this.addFieldValue('adjudication', createdClaimResponseItemAdjudication);
    return createdClaimResponseItemAdjudication;
  }

  /** The first ClaimResponseItemAdjudication of `adjudication`. One is added when the list is empty. */
  getAdjudicationFirstRep(): ClaimResponseItemAdjudication {
    const firstClaimResponseItemAdjudication = this.getAdjudication()[0];
    return firstClaimResponseItemAdjudication === undefined
      ? this.addAdjudication()
      : firstClaimResponseItemAdjudication;
  }

  /** Insurer added line details (0..*) Never undefined; an empty list is created when absent. */
  getDetail(): ClaimResponseAddItemDetail[] {
    if (this.detail === undefined) {
      this.detail = [];
    }
    return this.detail;
  }

  setDetail(detail: ClaimResponseAddItemDetail[] | undefined): this {
    return this.setFieldValue('detail', detail);
  }

  hasDetail(): boolean {
    return this.hasFieldValue('detail');
  }

  /** Appends a new, empty ClaimResponseAddItemDetail to `detail` and returns it so it can be filled in. */
  addDetail(): ClaimResponseAddItemDetail;
  /** Appends the given ClaimResponseAddItemDetail to `detail` and returns this object for chaining. */
  addDetail(claimResponseAddItemDetail: ClaimResponseAddItemDetail): this;
  addDetail(
    claimResponseAddItemDetail?: ClaimResponseAddItemDetail
  ): ClaimResponseAddItemDetail | this {
    if (claimResponseAddItemDetail !== undefined) {
      return this.addFieldValue('detail', claimResponseAddItemDetail);
    }
    const createdClaimResponseAddItemDetail = new ClaimResponseAddItemDetail();
    this.addFieldValue('detail', createdClaimResponseAddItemDetail);
    return createdClaimResponseAddItemDetail;
  }

  /** The first ClaimResponseAddItemDetail of `detail`. One is added when the list is empty. */
  getDetailFirstRep(): ClaimResponseAddItemDetail {
    const firstClaimResponseAddItemDetail = this.getDetail()[0];
    return firstClaimResponseAddItemDetail === undefined
      ? this.addDetail()
      : firstClaimResponseAddItemDetail;
  }
}

modelTypeRegistry.register('ClaimResponseAddItem', ClaimResponseAddItem, false);

/**
 * Anatomical location
 */
export class ClaimResponseAddItemBodySite extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'site',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'site', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'subSite',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'subSite', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Location (1..*) */
  site?: CodeableReference[];

  /** Sub-location (0..*) */
  subSite?: CodeableConcept[];

  override fhirType(): string {
    return 'ClaimResponse.addItem.bodySite';
  }

  /** FHIR JSON for this ClaimResponseAddItemBodySite, typed as the plain `ClaimResponseBodySite` data type. */
  override toJSON(): plainTypes.ClaimResponseBodySite {
    return this.serialize() as plainTypes.ClaimResponseBodySite;
  }

  /** Location (1..*) Never undefined; an empty list is created when absent. */
  getSite(): CodeableReference[] {
    if (this.site === undefined) {
      this.site = [];
    }
    return this.site;
  }

  setSite(site: CodeableReference[] | undefined): this {
    return this.setFieldValue('site', site);
  }

  hasSite(): boolean {
    return this.hasFieldValue('site');
  }

  /** Appends a new, empty CodeableReference to `site` and returns it so it can be filled in. */
  addSite(): CodeableReference;
  /** Appends the given CodeableReference to `site` and returns this object for chaining. */
  addSite(codeableReference: CodeableReference): this;
  addSite(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('site', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('site', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `site`. One is added when the list is empty. */
  getSiteFirstRep(): CodeableReference {
    const firstCodeableReference = this.getSite()[0];
    return firstCodeableReference === undefined ? this.addSite() : firstCodeableReference;
  }

  /** Sub-location (0..*) Never undefined; an empty list is created when absent. */
  getSubSite(): CodeableConcept[] {
    if (this.subSite === undefined) {
      this.subSite = [];
    }
    return this.subSite;
  }

  setSubSite(subSite: CodeableConcept[] | undefined): this {
    return this.setFieldValue('subSite', subSite);
  }

  hasSubSite(): boolean {
    return this.hasFieldValue('subSite');
  }

  /** Appends a new, empty CodeableConcept to `subSite` and returns it so it can be filled in. */
  addSubSite(): CodeableConcept;
  /** Appends the given CodeableConcept to `subSite` and returns this object for chaining. */
  addSubSite(codeableConcept: CodeableConcept): this;
  addSubSite(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('subSite', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('subSite', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `subSite`. One is added when the list is empty. */
  getSubSiteFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getSubSite()[0];
    return firstCodeableConcept === undefined ? this.addSubSite() : firstCodeableConcept;
  }
}

modelTypeRegistry.register('ClaimResponseAddItemBodySite', ClaimResponseAddItemBodySite, false);

/**
 * Insurer added line details
 */
export class ClaimResponseAddItemDetail extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'traceNumber',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'traceNumber', typeCode: 'Identifier' }],
    },
    {
      elementName: 'revenue',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'revenue', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'productOrService',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'productOrService', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'productOrServiceEnd',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'productOrServiceEnd', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'modifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'modifier', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'unitPrice',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'unitPrice', typeCode: 'Money' }],
    },
    {
      elementName: 'factor',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'factor', typeCode: 'decimal' }],
    },
    {
      elementName: 'tax',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'tax', typeCode: 'Money' }],
    },
    {
      elementName: 'net',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'net', typeCode: 'Money' }],
    },
    {
      elementName: 'noteNumber',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'noteNumber', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'reviewOutcome',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reviewOutcome', typeCode: 'ClaimResponseItemReviewOutcome' }],
    },
    {
      elementName: 'adjudication',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'adjudication', typeCode: 'ClaimResponseItemAdjudication' }],
    },
    {
      elementName: 'subDetail',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'subDetail', typeCode: 'ClaimResponseAddItemDetailSubDetail' }],
    },
  ];

  /** Number for tracking (0..*) */
  traceNumber?: Identifier[];

  /** Revenue or cost center code (0..1) */
  revenue?: CodeableConcept;

  /** Billing, service, product, or drug code (0..1) */
  productOrService?: CodeableConcept;

  /** End of a range of codes (0..1) */
  productOrServiceEnd?: CodeableConcept;

  /** Service/Product billing modifiers (0..*) */
  modifier?: CodeableConcept[];

  /** Count of products or services (0..1) */
  quantity?: Quantity;

  /** Fee, charge or cost per item (0..1) */
  unitPrice?: Money;

  /** Price scaling factor (0..1) */
  factor?: number;
  /** Id and extensions of the primitive `factor`. */
  _factor?: Element;

  /** Total tax (0..1) */
  tax?: Money;

  /** Total item cost (0..1) */
  net?: Money;

  /** Applicable note numbers (0..*) */
  noteNumber?: number[];
  /** Id and extensions of the primitive `noteNumber`. */
  _noteNumber?: (Element | null)[];

  /** Added items detail level adjudication results (0..1) */
  reviewOutcome?: ClaimResponseItemReviewOutcome;

  /** Added items detail adjudication (0..*) */
  adjudication?: ClaimResponseItemAdjudication[];

  /** Insurer added line items (0..*) */
  subDetail?: ClaimResponseAddItemDetailSubDetail[];

  override fhirType(): string {
    return 'ClaimResponse.addItem.detail';
  }

  /** FHIR JSON for this ClaimResponseAddItemDetail, typed as the plain `ClaimResponseDetail1` data type. */
  override toJSON(): plainTypes.ClaimResponseDetail1 {
    return this.serialize() as plainTypes.ClaimResponseDetail1;
  }

  /** Number for tracking (0..*) Never undefined; an empty list is created when absent. */
  getTraceNumber(): Identifier[] {
    if (this.traceNumber === undefined) {
      this.traceNumber = [];
    }
    return this.traceNumber;
  }

  setTraceNumber(traceNumber: Identifier[] | undefined): this {
    return this.setFieldValue('traceNumber', traceNumber);
  }

  hasTraceNumber(): boolean {
    return this.hasFieldValue('traceNumber');
  }

  /** Appends a new, empty Identifier to `traceNumber` and returns it so it can be filled in. */
  addTraceNumber(): Identifier;
  /** Appends the given Identifier to `traceNumber` and returns this object for chaining. */
  addTraceNumber(identifier: Identifier): this;
  addTraceNumber(identifier?: Identifier): Identifier | this {
    if (identifier !== undefined) {
      return this.addFieldValue('traceNumber', identifier);
    }
    const createdIdentifier = new Identifier();
    this.addFieldValue('traceNumber', createdIdentifier);
    return createdIdentifier;
  }

  /** The first Identifier of `traceNumber`. One is added when the list is empty. */
  getTraceNumberFirstRep(): Identifier {
    const firstIdentifier = this.getTraceNumber()[0];
    return firstIdentifier === undefined ? this.addTraceNumber() : firstIdentifier;
  }

  /** Revenue or cost center code (0..1) Created when absent. */
  getRevenue(): CodeableConcept {
    if (this.revenue === undefined) {
      this.revenue = new CodeableConcept();
    }
    return this.revenue;
  }

  setRevenue(revenue: CodeableConcept | undefined): this {
    return this.setFieldValue('revenue', revenue);
  }

  hasRevenue(): boolean {
    return this.hasFieldValue('revenue');
  }

  /** Billing, service, product, or drug code (0..1) Created when absent. */
  getProductOrService(): CodeableConcept {
    if (this.productOrService === undefined) {
      this.productOrService = new CodeableConcept();
    }
    return this.productOrService;
  }

  setProductOrService(productOrService: CodeableConcept | undefined): this {
    return this.setFieldValue('productOrService', productOrService);
  }

  hasProductOrService(): boolean {
    return this.hasFieldValue('productOrService');
  }

  /** End of a range of codes (0..1) Created when absent. */
  getProductOrServiceEnd(): CodeableConcept {
    if (this.productOrServiceEnd === undefined) {
      this.productOrServiceEnd = new CodeableConcept();
    }
    return this.productOrServiceEnd;
  }

  setProductOrServiceEnd(productOrServiceEnd: CodeableConcept | undefined): this {
    return this.setFieldValue('productOrServiceEnd', productOrServiceEnd);
  }

  hasProductOrServiceEnd(): boolean {
    return this.hasFieldValue('productOrServiceEnd');
  }

  /** Service/Product billing modifiers (0..*) Never undefined; an empty list is created when absent. */
  getModifier(): CodeableConcept[] {
    if (this.modifier === undefined) {
      this.modifier = [];
    }
    return this.modifier;
  }

  setModifier(modifier: CodeableConcept[] | undefined): this {
    return this.setFieldValue('modifier', modifier);
  }

  hasModifier(): boolean {
    return this.hasFieldValue('modifier');
  }

  /** Appends a new, empty CodeableConcept to `modifier` and returns it so it can be filled in. */
  addModifier(): CodeableConcept;
  /** Appends the given CodeableConcept to `modifier` and returns this object for chaining. */
  addModifier(codeableConcept: CodeableConcept): this;
  addModifier(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('modifier', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('modifier', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `modifier`. One is added when the list is empty. */
  getModifierFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getModifier()[0];
    return firstCodeableConcept === undefined ? this.addModifier() : firstCodeableConcept;
  }

  /** Count of products or services (0..1) Created when absent. */
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

  /** Fee, charge or cost per item (0..1) Created when absent. */
  getUnitPrice(): Money {
    if (this.unitPrice === undefined) {
      this.unitPrice = new Money();
    }
    return this.unitPrice;
  }

  setUnitPrice(unitPrice: Money | undefined): this {
    return this.setFieldValue('unitPrice', unitPrice);
  }

  hasUnitPrice(): boolean {
    return this.hasFieldValue('unitPrice');
  }

  /** Price scaling factor (0..1) */
  getFactor(): number | undefined {
    return this.factor;
  }

  /** Sets `factor`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setFactor(factor: number | undefined): this {
    return this.setFieldValue('factor', factor);
  }

  hasFactor(): boolean {
    return this.hasFieldValue('factor');
  }

  /** The element carrying the id and extensions of `factor`. Created when absent. */
  getFactorElement(): Element {
    if (this._factor === undefined) {
      this._factor = new Element();
    }
    return this._factor;
  }

  setFactorElement(factorElement: Element | undefined): this {
    this._factor = factorElement;
    return this;
  }

  /** Total tax (0..1) Created when absent. */
  getTax(): Money {
    if (this.tax === undefined) {
      this.tax = new Money();
    }
    return this.tax;
  }

  setTax(tax: Money | undefined): this {
    return this.setFieldValue('tax', tax);
  }

  hasTax(): boolean {
    return this.hasFieldValue('tax');
  }

  /** Total item cost (0..1) Created when absent. */
  getNet(): Money {
    if (this.net === undefined) {
      this.net = new Money();
    }
    return this.net;
  }

  setNet(net: Money | undefined): this {
    return this.setFieldValue('net', net);
  }

  hasNet(): boolean {
    return this.hasFieldValue('net');
  }

  /** Applicable note numbers (0..*) Never undefined; an empty list is created when absent. */
  getNoteNumber(): number[] {
    if (this.noteNumber === undefined) {
      this.noteNumber = [];
    }
    return this.noteNumber;
  }

  setNoteNumber(noteNumber: number[] | undefined): this {
    return this.setFieldValue('noteNumber', noteNumber);
  }

  hasNoteNumber(): boolean {
    return this.hasFieldValue('noteNumber');
  }

  /** Appends one value to `noteNumber`. Throws a FhirModelError when it is not a valid FHIR positiveInt. */
  addNoteNumber(noteNumber: number): this {
    return this.addFieldValue('noteNumber', noteNumber);
  }

  /** Added items detail level adjudication results (0..1) Created when absent. */
  getReviewOutcome(): ClaimResponseItemReviewOutcome {
    if (this.reviewOutcome === undefined) {
      this.reviewOutcome = new ClaimResponseItemReviewOutcome();
    }
    return this.reviewOutcome;
  }

  setReviewOutcome(reviewOutcome: ClaimResponseItemReviewOutcome | undefined): this {
    return this.setFieldValue('reviewOutcome', reviewOutcome);
  }

  hasReviewOutcome(): boolean {
    return this.hasFieldValue('reviewOutcome');
  }

  /** Added items detail adjudication (0..*) Never undefined; an empty list is created when absent. */
  getAdjudication(): ClaimResponseItemAdjudication[] {
    if (this.adjudication === undefined) {
      this.adjudication = [];
    }
    return this.adjudication;
  }

  setAdjudication(adjudication: ClaimResponseItemAdjudication[] | undefined): this {
    return this.setFieldValue('adjudication', adjudication);
  }

  hasAdjudication(): boolean {
    return this.hasFieldValue('adjudication');
  }

  /** Appends a new, empty ClaimResponseItemAdjudication to `adjudication` and returns it so it can be filled in. */
  addAdjudication(): ClaimResponseItemAdjudication;
  /** Appends the given ClaimResponseItemAdjudication to `adjudication` and returns this object for chaining. */
  addAdjudication(claimResponseItemAdjudication: ClaimResponseItemAdjudication): this;
  addAdjudication(
    claimResponseItemAdjudication?: ClaimResponseItemAdjudication
  ): ClaimResponseItemAdjudication | this {
    if (claimResponseItemAdjudication !== undefined) {
      return this.addFieldValue('adjudication', claimResponseItemAdjudication);
    }
    const createdClaimResponseItemAdjudication = new ClaimResponseItemAdjudication();
    this.addFieldValue('adjudication', createdClaimResponseItemAdjudication);
    return createdClaimResponseItemAdjudication;
  }

  /** The first ClaimResponseItemAdjudication of `adjudication`. One is added when the list is empty. */
  getAdjudicationFirstRep(): ClaimResponseItemAdjudication {
    const firstClaimResponseItemAdjudication = this.getAdjudication()[0];
    return firstClaimResponseItemAdjudication === undefined
      ? this.addAdjudication()
      : firstClaimResponseItemAdjudication;
  }

  /** Insurer added line items (0..*) Never undefined; an empty list is created when absent. */
  getSubDetail(): ClaimResponseAddItemDetailSubDetail[] {
    if (this.subDetail === undefined) {
      this.subDetail = [];
    }
    return this.subDetail;
  }

  setSubDetail(subDetail: ClaimResponseAddItemDetailSubDetail[] | undefined): this {
    return this.setFieldValue('subDetail', subDetail);
  }

  hasSubDetail(): boolean {
    return this.hasFieldValue('subDetail');
  }

  /** Appends a new, empty ClaimResponseAddItemDetailSubDetail to `subDetail` and returns it so it can be filled in. */
  addSubDetail(): ClaimResponseAddItemDetailSubDetail;
  /** Appends the given ClaimResponseAddItemDetailSubDetail to `subDetail` and returns this object for chaining. */
  addSubDetail(claimResponseAddItemDetailSubDetail: ClaimResponseAddItemDetailSubDetail): this;
  addSubDetail(
    claimResponseAddItemDetailSubDetail?: ClaimResponseAddItemDetailSubDetail
  ): ClaimResponseAddItemDetailSubDetail | this {
    if (claimResponseAddItemDetailSubDetail !== undefined) {
      return this.addFieldValue('subDetail', claimResponseAddItemDetailSubDetail);
    }
    const createdClaimResponseAddItemDetailSubDetail = new ClaimResponseAddItemDetailSubDetail();
    this.addFieldValue('subDetail', createdClaimResponseAddItemDetailSubDetail);
    return createdClaimResponseAddItemDetailSubDetail;
  }

  /** The first ClaimResponseAddItemDetailSubDetail of `subDetail`. One is added when the list is empty. */
  getSubDetailFirstRep(): ClaimResponseAddItemDetailSubDetail {
    const firstClaimResponseAddItemDetailSubDetail = this.getSubDetail()[0];
    return firstClaimResponseAddItemDetailSubDetail === undefined
      ? this.addSubDetail()
      : firstClaimResponseAddItemDetailSubDetail;
  }
}

modelTypeRegistry.register('ClaimResponseAddItemDetail', ClaimResponseAddItemDetail, false);

/**
 * Insurer added line items
 */
export class ClaimResponseAddItemDetailSubDetail extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'traceNumber',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'traceNumber', typeCode: 'Identifier' }],
    },
    {
      elementName: 'revenue',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'revenue', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'productOrService',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'productOrService', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'productOrServiceEnd',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'productOrServiceEnd', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'modifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'modifier', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'unitPrice',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'unitPrice', typeCode: 'Money' }],
    },
    {
      elementName: 'factor',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'factor', typeCode: 'decimal' }],
    },
    {
      elementName: 'tax',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'tax', typeCode: 'Money' }],
    },
    {
      elementName: 'net',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'net', typeCode: 'Money' }],
    },
    {
      elementName: 'noteNumber',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'noteNumber', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'reviewOutcome',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reviewOutcome', typeCode: 'ClaimResponseItemReviewOutcome' }],
    },
    {
      elementName: 'adjudication',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'adjudication', typeCode: 'ClaimResponseItemAdjudication' }],
    },
  ];

  /** Number for tracking (0..*) */
  traceNumber?: Identifier[];

  /** Revenue or cost center code (0..1) */
  revenue?: CodeableConcept;

  /** Billing, service, product, or drug code (0..1) */
  productOrService?: CodeableConcept;

  /** End of a range of codes (0..1) */
  productOrServiceEnd?: CodeableConcept;

  /** Service/Product billing modifiers (0..*) */
  modifier?: CodeableConcept[];

  /** Count of products or services (0..1) */
  quantity?: Quantity;

  /** Fee, charge or cost per item (0..1) */
  unitPrice?: Money;

  /** Price scaling factor (0..1) */
  factor?: number;
  /** Id and extensions of the primitive `factor`. */
  _factor?: Element;

  /** Total tax (0..1) */
  tax?: Money;

  /** Total item cost (0..1) */
  net?: Money;

  /** Applicable note numbers (0..*) */
  noteNumber?: number[];
  /** Id and extensions of the primitive `noteNumber`. */
  _noteNumber?: (Element | null)[];

  /** Added items subdetail level adjudication results (0..1) */
  reviewOutcome?: ClaimResponseItemReviewOutcome;

  /** Added items subdetail adjudication (0..*) */
  adjudication?: ClaimResponseItemAdjudication[];

  override fhirType(): string {
    return 'ClaimResponse.addItem.detail.subDetail';
  }

  /** FHIR JSON for this ClaimResponseAddItemDetailSubDetail, typed as the plain `ClaimResponseSubDetail1` data type. */
  override toJSON(): plainTypes.ClaimResponseSubDetail1 {
    return this.serialize() as plainTypes.ClaimResponseSubDetail1;
  }

  /** Number for tracking (0..*) Never undefined; an empty list is created when absent. */
  getTraceNumber(): Identifier[] {
    if (this.traceNumber === undefined) {
      this.traceNumber = [];
    }
    return this.traceNumber;
  }

  setTraceNumber(traceNumber: Identifier[] | undefined): this {
    return this.setFieldValue('traceNumber', traceNumber);
  }

  hasTraceNumber(): boolean {
    return this.hasFieldValue('traceNumber');
  }

  /** Appends a new, empty Identifier to `traceNumber` and returns it so it can be filled in. */
  addTraceNumber(): Identifier;
  /** Appends the given Identifier to `traceNumber` and returns this object for chaining. */
  addTraceNumber(identifier: Identifier): this;
  addTraceNumber(identifier?: Identifier): Identifier | this {
    if (identifier !== undefined) {
      return this.addFieldValue('traceNumber', identifier);
    }
    const createdIdentifier = new Identifier();
    this.addFieldValue('traceNumber', createdIdentifier);
    return createdIdentifier;
  }

  /** The first Identifier of `traceNumber`. One is added when the list is empty. */
  getTraceNumberFirstRep(): Identifier {
    const firstIdentifier = this.getTraceNumber()[0];
    return firstIdentifier === undefined ? this.addTraceNumber() : firstIdentifier;
  }

  /** Revenue or cost center code (0..1) Created when absent. */
  getRevenue(): CodeableConcept {
    if (this.revenue === undefined) {
      this.revenue = new CodeableConcept();
    }
    return this.revenue;
  }

  setRevenue(revenue: CodeableConcept | undefined): this {
    return this.setFieldValue('revenue', revenue);
  }

  hasRevenue(): boolean {
    return this.hasFieldValue('revenue');
  }

  /** Billing, service, product, or drug code (0..1) Created when absent. */
  getProductOrService(): CodeableConcept {
    if (this.productOrService === undefined) {
      this.productOrService = new CodeableConcept();
    }
    return this.productOrService;
  }

  setProductOrService(productOrService: CodeableConcept | undefined): this {
    return this.setFieldValue('productOrService', productOrService);
  }

  hasProductOrService(): boolean {
    return this.hasFieldValue('productOrService');
  }

  /** End of a range of codes (0..1) Created when absent. */
  getProductOrServiceEnd(): CodeableConcept {
    if (this.productOrServiceEnd === undefined) {
      this.productOrServiceEnd = new CodeableConcept();
    }
    return this.productOrServiceEnd;
  }

  setProductOrServiceEnd(productOrServiceEnd: CodeableConcept | undefined): this {
    return this.setFieldValue('productOrServiceEnd', productOrServiceEnd);
  }

  hasProductOrServiceEnd(): boolean {
    return this.hasFieldValue('productOrServiceEnd');
  }

  /** Service/Product billing modifiers (0..*) Never undefined; an empty list is created when absent. */
  getModifier(): CodeableConcept[] {
    if (this.modifier === undefined) {
      this.modifier = [];
    }
    return this.modifier;
  }

  setModifier(modifier: CodeableConcept[] | undefined): this {
    return this.setFieldValue('modifier', modifier);
  }

  hasModifier(): boolean {
    return this.hasFieldValue('modifier');
  }

  /** Appends a new, empty CodeableConcept to `modifier` and returns it so it can be filled in. */
  addModifier(): CodeableConcept;
  /** Appends the given CodeableConcept to `modifier` and returns this object for chaining. */
  addModifier(codeableConcept: CodeableConcept): this;
  addModifier(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('modifier', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('modifier', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `modifier`. One is added when the list is empty. */
  getModifierFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getModifier()[0];
    return firstCodeableConcept === undefined ? this.addModifier() : firstCodeableConcept;
  }

  /** Count of products or services (0..1) Created when absent. */
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

  /** Fee, charge or cost per item (0..1) Created when absent. */
  getUnitPrice(): Money {
    if (this.unitPrice === undefined) {
      this.unitPrice = new Money();
    }
    return this.unitPrice;
  }

  setUnitPrice(unitPrice: Money | undefined): this {
    return this.setFieldValue('unitPrice', unitPrice);
  }

  hasUnitPrice(): boolean {
    return this.hasFieldValue('unitPrice');
  }

  /** Price scaling factor (0..1) */
  getFactor(): number | undefined {
    return this.factor;
  }

  /** Sets `factor`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setFactor(factor: number | undefined): this {
    return this.setFieldValue('factor', factor);
  }

  hasFactor(): boolean {
    return this.hasFieldValue('factor');
  }

  /** The element carrying the id and extensions of `factor`. Created when absent. */
  getFactorElement(): Element {
    if (this._factor === undefined) {
      this._factor = new Element();
    }
    return this._factor;
  }

  setFactorElement(factorElement: Element | undefined): this {
    this._factor = factorElement;
    return this;
  }

  /** Total tax (0..1) Created when absent. */
  getTax(): Money {
    if (this.tax === undefined) {
      this.tax = new Money();
    }
    return this.tax;
  }

  setTax(tax: Money | undefined): this {
    return this.setFieldValue('tax', tax);
  }

  hasTax(): boolean {
    return this.hasFieldValue('tax');
  }

  /** Total item cost (0..1) Created when absent. */
  getNet(): Money {
    if (this.net === undefined) {
      this.net = new Money();
    }
    return this.net;
  }

  setNet(net: Money | undefined): this {
    return this.setFieldValue('net', net);
  }

  hasNet(): boolean {
    return this.hasFieldValue('net');
  }

  /** Applicable note numbers (0..*) Never undefined; an empty list is created when absent. */
  getNoteNumber(): number[] {
    if (this.noteNumber === undefined) {
      this.noteNumber = [];
    }
    return this.noteNumber;
  }

  setNoteNumber(noteNumber: number[] | undefined): this {
    return this.setFieldValue('noteNumber', noteNumber);
  }

  hasNoteNumber(): boolean {
    return this.hasFieldValue('noteNumber');
  }

  /** Appends one value to `noteNumber`. Throws a FhirModelError when it is not a valid FHIR positiveInt. */
  addNoteNumber(noteNumber: number): this {
    return this.addFieldValue('noteNumber', noteNumber);
  }

  /** Added items subdetail level adjudication results (0..1) Created when absent. */
  getReviewOutcome(): ClaimResponseItemReviewOutcome {
    if (this.reviewOutcome === undefined) {
      this.reviewOutcome = new ClaimResponseItemReviewOutcome();
    }
    return this.reviewOutcome;
  }

  setReviewOutcome(reviewOutcome: ClaimResponseItemReviewOutcome | undefined): this {
    return this.setFieldValue('reviewOutcome', reviewOutcome);
  }

  hasReviewOutcome(): boolean {
    return this.hasFieldValue('reviewOutcome');
  }

  /** Added items subdetail adjudication (0..*) Never undefined; an empty list is created when absent. */
  getAdjudication(): ClaimResponseItemAdjudication[] {
    if (this.adjudication === undefined) {
      this.adjudication = [];
    }
    return this.adjudication;
  }

  setAdjudication(adjudication: ClaimResponseItemAdjudication[] | undefined): this {
    return this.setFieldValue('adjudication', adjudication);
  }

  hasAdjudication(): boolean {
    return this.hasFieldValue('adjudication');
  }

  /** Appends a new, empty ClaimResponseItemAdjudication to `adjudication` and returns it so it can be filled in. */
  addAdjudication(): ClaimResponseItemAdjudication;
  /** Appends the given ClaimResponseItemAdjudication to `adjudication` and returns this object for chaining. */
  addAdjudication(claimResponseItemAdjudication: ClaimResponseItemAdjudication): this;
  addAdjudication(
    claimResponseItemAdjudication?: ClaimResponseItemAdjudication
  ): ClaimResponseItemAdjudication | this {
    if (claimResponseItemAdjudication !== undefined) {
      return this.addFieldValue('adjudication', claimResponseItemAdjudication);
    }
    const createdClaimResponseItemAdjudication = new ClaimResponseItemAdjudication();
    this.addFieldValue('adjudication', createdClaimResponseItemAdjudication);
    return createdClaimResponseItemAdjudication;
  }

  /** The first ClaimResponseItemAdjudication of `adjudication`. One is added when the list is empty. */
  getAdjudicationFirstRep(): ClaimResponseItemAdjudication {
    const firstClaimResponseItemAdjudication = this.getAdjudication()[0];
    return firstClaimResponseItemAdjudication === undefined
      ? this.addAdjudication()
      : firstClaimResponseItemAdjudication;
  }
}

modelTypeRegistry.register(
  'ClaimResponseAddItemDetailSubDetail',
  ClaimResponseAddItemDetailSubDetail,
  false
);

/**
 * Adjudication totals
 */
export class ClaimResponseTotal extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'category',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'amount',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'amount', typeCode: 'Money' }],
    },
  ];

  /** Type of adjudication information (1..1) */
  category?: CodeableConcept;

  /** Financial total for the category (1..1) */
  amount?: Money;

  override fhirType(): string {
    return 'ClaimResponse.total';
  }

  /** FHIR JSON for this ClaimResponseTotal, typed as the plain `ClaimResponseTotal` data type. */
  override toJSON(): plainTypes.ClaimResponseTotal {
    return this.serialize() as plainTypes.ClaimResponseTotal;
  }

  /** Type of adjudication information (1..1) Created when absent. */
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

  /** Financial total for the category (1..1) Created when absent. */
  getAmount(): Money {
    if (this.amount === undefined) {
      this.amount = new Money();
    }
    return this.amount;
  }

  setAmount(amount: Money | undefined): this {
    return this.setFieldValue('amount', amount);
  }

  hasAmount(): boolean {
    return this.hasFieldValue('amount');
  }
}

modelTypeRegistry.register('ClaimResponseTotal', ClaimResponseTotal, false);

/**
 * Payment Details
 */
export class ClaimResponsePayment extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'adjustment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'adjustment', typeCode: 'Money' }],
    },
    {
      elementName: 'adjustmentReason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'adjustmentReason', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'date',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'date', typeCode: 'date' }],
    },
    {
      elementName: 'amount',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'amount', typeCode: 'Money' }],
    },
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
  ];

  /** Partial or complete payment (1..1) */
  type?: CodeableConcept;

  /** Payment adjustment for non-claim issues (0..1) */
  adjustment?: Money;

  /** Explanation for the adjustment (0..1) */
  adjustmentReason?: CodeableConcept;

  /** Expected date of payment (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Payable amount after adjustment (1..1) */
  amount?: Money;

  /** Business identifier for the payment (0..1) */
  identifier?: Identifier;

  override fhirType(): string {
    return 'ClaimResponse.payment';
  }

  /** FHIR JSON for this ClaimResponsePayment, typed as the plain `ClaimResponsePayment` data type. */
  override toJSON(): plainTypes.ClaimResponsePayment {
    return this.serialize() as plainTypes.ClaimResponsePayment;
  }

  /** Partial or complete payment (1..1) Created when absent. */
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

  /** Payment adjustment for non-claim issues (0..1) Created when absent. */
  getAdjustment(): Money {
    if (this.adjustment === undefined) {
      this.adjustment = new Money();
    }
    return this.adjustment;
  }

  setAdjustment(adjustment: Money | undefined): this {
    return this.setFieldValue('adjustment', adjustment);
  }

  hasAdjustment(): boolean {
    return this.hasFieldValue('adjustment');
  }

  /** Explanation for the adjustment (0..1) Created when absent. */
  getAdjustmentReason(): CodeableConcept {
    if (this.adjustmentReason === undefined) {
      this.adjustmentReason = new CodeableConcept();
    }
    return this.adjustmentReason;
  }

  setAdjustmentReason(adjustmentReason: CodeableConcept | undefined): this {
    return this.setFieldValue('adjustmentReason', adjustmentReason);
  }

  hasAdjustmentReason(): boolean {
    return this.hasFieldValue('adjustmentReason');
  }

  /** Expected date of payment (0..1) */
  getDate(): string | undefined {
    return this.date;
  }

  /** Sets `date`. Throws a FhirModelError when the value is not a valid FHIR date. */
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

  /** Payable amount after adjustment (1..1) Created when absent. */
  getAmount(): Money {
    if (this.amount === undefined) {
      this.amount = new Money();
    }
    return this.amount;
  }

  setAmount(amount: Money | undefined): this {
    return this.setFieldValue('amount', amount);
  }

  hasAmount(): boolean {
    return this.hasFieldValue('amount');
  }

  /** Business identifier for the payment (0..1) Created when absent. */
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
}

modelTypeRegistry.register('ClaimResponsePayment', ClaimResponsePayment, false);

/**
 * Note concerning adjudication
 */
export class ClaimResponseProcessNote extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'number',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'number', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'text',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'text', typeCode: 'string' }],
    },
    {
      elementName: 'language',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'language', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Note instance identifier (0..1) */
  number?: number;
  /** Id and extensions of the primitive `number`. */
  _number?: Element;

  /** Note purpose (0..1) */
  type?: CodeableConcept;

  /** Note explanatory text (1..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;

  /** Language of the text (0..1) */
  language?: CodeableConcept;

  override fhirType(): string {
    return 'ClaimResponse.processNote';
  }

  /** FHIR JSON for this ClaimResponseProcessNote, typed as the plain `ClaimResponseProcessNote` data type. */
  override toJSON(): plainTypes.ClaimResponseProcessNote {
    return this.serialize() as plainTypes.ClaimResponseProcessNote;
  }

  /** Note instance identifier (0..1) */
  getNumber(): number | undefined {
    return this.number;
  }

  /** Sets `number`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setNumber(number: number | undefined): this {
    return this.setFieldValue('number', number);
  }

  hasNumber(): boolean {
    return this.hasFieldValue('number');
  }

  /** The element carrying the id and extensions of `number`. Created when absent. */
  getNumberElement(): Element {
    if (this._number === undefined) {
      this._number = new Element();
    }
    return this._number;
  }

  setNumberElement(numberElement: Element | undefined): this {
    this._number = numberElement;
    return this;
  }

  /** Note purpose (0..1) Created when absent. */
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

  /** Note explanatory text (1..1) */
  getText(): string | undefined {
    return this.text;
  }

  /** Sets `text`. Throws a FhirModelError when the value is not a valid FHIR string. */
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

  /** Language of the text (0..1) Created when absent. */
  getLanguage(): CodeableConcept {
    if (this.language === undefined) {
      this.language = new CodeableConcept();
    }
    return this.language;
  }

  setLanguage(language: CodeableConcept | undefined): this {
    return this.setFieldValue('language', language);
  }

  hasLanguage(): boolean {
    return this.hasFieldValue('language');
  }
}

modelTypeRegistry.register('ClaimResponseProcessNote', ClaimResponseProcessNote, false);

/**
 * Patient insurance information
 */
export class ClaimResponseInsurance extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'sequence',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sequence', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'focal',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'focal', typeCode: 'boolean' }],
    },
    {
      elementName: 'coverage',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'coverage', typeCode: 'Reference', targetResourceTypes: ['Coverage'] }],
    },
    {
      elementName: 'businessArrangement',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'businessArrangement', typeCode: 'string' }],
    },
    {
      elementName: 'claimResponse',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'claimResponse', typeCode: 'Reference', targetResourceTypes: ['ClaimResponse'] },
      ],
    },
  ];

  /** Insurance instance identifier (1..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;

  /** Coverage to be used for adjudication (1..1) */
  focal?: boolean;
  /** Id and extensions of the primitive `focal`. */
  _focal?: Element;

  /** Insurance information (1..1) */
  coverage?: Reference;

  /** Additional provider contract number (0..1) */
  businessArrangement?: string;
  /** Id and extensions of the primitive `businessArrangement`. */
  _businessArrangement?: Element;

  /** Adjudication results (0..1) */
  claimResponse?: Reference;

  override fhirType(): string {
    return 'ClaimResponse.insurance';
  }

  /** FHIR JSON for this ClaimResponseInsurance, typed as the plain `ClaimResponseInsurance` data type. */
  override toJSON(): plainTypes.ClaimResponseInsurance {
    return this.serialize() as plainTypes.ClaimResponseInsurance;
  }

  /** Insurance instance identifier (1..1) */
  getSequence(): number | undefined {
    return this.sequence;
  }

  /** Sets `sequence`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setSequence(sequence: number | undefined): this {
    return this.setFieldValue('sequence', sequence);
  }

  hasSequence(): boolean {
    return this.hasFieldValue('sequence');
  }

  /** The element carrying the id and extensions of `sequence`. Created when absent. */
  getSequenceElement(): Element {
    if (this._sequence === undefined) {
      this._sequence = new Element();
    }
    return this._sequence;
  }

  setSequenceElement(sequenceElement: Element | undefined): this {
    this._sequence = sequenceElement;
    return this;
  }

  /** Coverage to be used for adjudication (1..1) */
  getFocal(): boolean | undefined {
    return this.focal;
  }

  /** Sets `focal`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setFocal(focal: boolean | undefined): this {
    return this.setFieldValue('focal', focal);
  }

  hasFocal(): boolean {
    return this.hasFieldValue('focal');
  }

  /** The element carrying the id and extensions of `focal`. Created when absent. */
  getFocalElement(): Element {
    if (this._focal === undefined) {
      this._focal = new Element();
    }
    return this._focal;
  }

  setFocalElement(focalElement: Element | undefined): this {
    this._focal = focalElement;
    return this;
  }

  /** Insurance information (1..1) Created when absent. */
  getCoverage(): Reference {
    if (this.coverage === undefined) {
      this.coverage = new Reference();
    }
    return this.coverage;
  }

  setCoverage(coverage: Reference | undefined): this {
    return this.setFieldValue('coverage', coverage);
  }

  hasCoverage(): boolean {
    return this.hasFieldValue('coverage');
  }

  /** Additional provider contract number (0..1) */
  getBusinessArrangement(): string | undefined {
    return this.businessArrangement;
  }

  /** Sets `businessArrangement`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setBusinessArrangement(businessArrangement: string | undefined): this {
    return this.setFieldValue('businessArrangement', businessArrangement);
  }

  hasBusinessArrangement(): boolean {
    return this.hasFieldValue('businessArrangement');
  }

  /** The element carrying the id and extensions of `businessArrangement`. Created when absent. */
  getBusinessArrangementElement(): Element {
    if (this._businessArrangement === undefined) {
      this._businessArrangement = new Element();
    }
    return this._businessArrangement;
  }

  setBusinessArrangementElement(businessArrangementElement: Element | undefined): this {
    this._businessArrangement = businessArrangementElement;
    return this;
  }

  /** Adjudication results (0..1) Created when absent. */
  getClaimResponse(): Reference {
    if (this.claimResponse === undefined) {
      this.claimResponse = new Reference();
    }
    return this.claimResponse;
  }

  setClaimResponse(claimResponse: Reference | undefined): this {
    return this.setFieldValue('claimResponse', claimResponse);
  }

  hasClaimResponse(): boolean {
    return this.hasFieldValue('claimResponse');
  }
}

modelTypeRegistry.register('ClaimResponseInsurance', ClaimResponseInsurance, false);

/**
 * Processing errors
 */
export class ClaimResponseError extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'itemSequence',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'itemSequence', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'detailSequence',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'detailSequence', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'subDetailSequence',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'subDetailSequence', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'expression',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'expression', typeCode: 'string' }],
    },
  ];

  /** Item sequence number (0..1) */
  itemSequence?: number;
  /** Id and extensions of the primitive `itemSequence`. */
  _itemSequence?: Element;

  /** Detail sequence number (0..1) */
  detailSequence?: number;
  /** Id and extensions of the primitive `detailSequence`. */
  _detailSequence?: Element;

  /** Subdetail sequence number (0..1) */
  subDetailSequence?: number;
  /** Id and extensions of the primitive `subDetailSequence`. */
  _subDetailSequence?: Element;

  /** Error code detailing processing issues (1..1) */
  code?: CodeableConcept;

  /** FHIRPath of element(s) related to issue (0..*) */
  expression?: string[];
  /** Id and extensions of the primitive `expression`. */
  _expression?: (Element | null)[];

  override fhirType(): string {
    return 'ClaimResponse.error';
  }

  /** FHIR JSON for this ClaimResponseError, typed as the plain `ClaimResponseError` data type. */
  override toJSON(): plainTypes.ClaimResponseError {
    return this.serialize() as plainTypes.ClaimResponseError;
  }

  /** Item sequence number (0..1) */
  getItemSequence(): number | undefined {
    return this.itemSequence;
  }

  /** Sets `itemSequence`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setItemSequence(itemSequence: number | undefined): this {
    return this.setFieldValue('itemSequence', itemSequence);
  }

  hasItemSequence(): boolean {
    return this.hasFieldValue('itemSequence');
  }

  /** The element carrying the id and extensions of `itemSequence`. Created when absent. */
  getItemSequenceElement(): Element {
    if (this._itemSequence === undefined) {
      this._itemSequence = new Element();
    }
    return this._itemSequence;
  }

  setItemSequenceElement(itemSequenceElement: Element | undefined): this {
    this._itemSequence = itemSequenceElement;
    return this;
  }

  /** Detail sequence number (0..1) */
  getDetailSequence(): number | undefined {
    return this.detailSequence;
  }

  /** Sets `detailSequence`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setDetailSequence(detailSequence: number | undefined): this {
    return this.setFieldValue('detailSequence', detailSequence);
  }

  hasDetailSequence(): boolean {
    return this.hasFieldValue('detailSequence');
  }

  /** The element carrying the id and extensions of `detailSequence`. Created when absent. */
  getDetailSequenceElement(): Element {
    if (this._detailSequence === undefined) {
      this._detailSequence = new Element();
    }
    return this._detailSequence;
  }

  setDetailSequenceElement(detailSequenceElement: Element | undefined): this {
    this._detailSequence = detailSequenceElement;
    return this;
  }

  /** Subdetail sequence number (0..1) */
  getSubDetailSequence(): number | undefined {
    return this.subDetailSequence;
  }

  /** Sets `subDetailSequence`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setSubDetailSequence(subDetailSequence: number | undefined): this {
    return this.setFieldValue('subDetailSequence', subDetailSequence);
  }

  hasSubDetailSequence(): boolean {
    return this.hasFieldValue('subDetailSequence');
  }

  /** The element carrying the id and extensions of `subDetailSequence`. Created when absent. */
  getSubDetailSequenceElement(): Element {
    if (this._subDetailSequence === undefined) {
      this._subDetailSequence = new Element();
    }
    return this._subDetailSequence;
  }

  setSubDetailSequenceElement(subDetailSequenceElement: Element | undefined): this {
    this._subDetailSequence = subDetailSequenceElement;
    return this;
  }

  /** Error code detailing processing issues (1..1) Created when absent. */
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

  /** FHIRPath of element(s) related to issue (0..*) Never undefined; an empty list is created when absent. */
  getExpression(): string[] {
    if (this.expression === undefined) {
      this.expression = [];
    }
    return this.expression;
  }

  setExpression(expression: string[] | undefined): this {
    return this.setFieldValue('expression', expression);
  }

  hasExpression(): boolean {
    return this.hasFieldValue('expression');
  }

  /** Appends one value to `expression`. Throws a FhirModelError when it is not a valid FHIR string. */
  addExpression(expression: string): this {
    return this.addFieldValue('expression', expression);
  }
}

modelTypeRegistry.register('ClaimResponseError', ClaimResponseError, false);
