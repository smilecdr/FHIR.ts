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
import { Money } from './money';
import { Period } from './period';
import { Reference } from './reference';

/**
 * This resource provides the details including amount of a payment and allocates the payment items being paid.
 */
export class PaymentReconciliation extends DomainResource {
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
        {
          jsonKey: 'status',
          typeCode: 'code',
          allowedCodes: valueSetCodes.FinancialResourceStatusCodes,
        },
      ],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
    {
      elementName: 'created',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'created', typeCode: 'dateTime' }],
    },
    {
      elementName: 'paymentIssuer',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'paymentIssuer', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
    {
      elementName: 'request',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'request', typeCode: 'Reference', targetResourceTypes: ['Task'] }],
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
      elementName: 'outcome',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'outcome', typeCode: 'code', allowedCodes: valueSetCodes.ClaimProcessingCodes },
      ],
    },
    {
      elementName: 'disposition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'disposition', typeCode: 'string' }],
    },
    {
      elementName: 'paymentDate',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'paymentDate', typeCode: 'date' }],
    },
    {
      elementName: 'paymentAmount',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'paymentAmount', typeCode: 'Money' }],
    },
    {
      elementName: 'paymentIdentifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'paymentIdentifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'detail',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'detail', typeCode: 'PaymentReconciliationDetail' }],
    },
    {
      elementName: 'formCode',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'formCode', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'processNote',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'processNote', typeCode: 'PaymentReconciliationProcessNote' }],
    },
  ];

  readonly resourceType = 'PaymentReconciliation';

  /** Business Identifier for a payment reconciliation (0..*) */
  identifier?: Identifier[];

  /** active | cancelled | draft | entered-in-error (1..1) */
  status?: valueSetCodes.FinancialResourceStatusCodes;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Period covered (0..1) */
  period?: Period;

  /** Creation date (1..1) */
  created?: string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;

  /** Party generating payment (0..1) */
  paymentIssuer?: Reference;

  /** Reference to requesting resource (0..1) */
  request?: Reference;

  /** Responsible practitioner (0..1) */
  requestor?: Reference;

  /** queued | complete | error | partial (0..1) */
  outcome?: valueSetCodes.ClaimProcessingCodes;
  /** Id and extensions of the primitive `outcome`. */
  _outcome?: Element;

  /** Disposition message (0..1) */
  disposition?: string;
  /** Id and extensions of the primitive `disposition`. */
  _disposition?: Element;

  /** When payment issued (1..1) */
  paymentDate?: string;
  /** Id and extensions of the primitive `paymentDate`. */
  _paymentDate?: Element;

  /** Total amount of Payment (1..1) */
  paymentAmount?: Money;

  /** Business identifier for the payment (0..1) */
  paymentIdentifier?: Identifier;

  /** Settlement particulars (0..*) */
  detail?: PaymentReconciliationDetail[];

  /** Printed form identifier (0..1) */
  formCode?: CodeableConcept;

  /** Note concerning processing (0..*) */
  processNote?: PaymentReconciliationProcessNote[];

  override fhirType(): string {
    return 'PaymentReconciliation';
  }

  /** FHIR JSON for this PaymentReconciliation, typed as the plain `PaymentReconciliation` data type. */
  override toJSON(): plainTypes.PaymentReconciliation {
    return this.serialize() as plainTypes.PaymentReconciliation;
  }

  /** Business Identifier for a payment reconciliation (0..*) Never undefined; an empty list is created when absent. */
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

  /** Period covered (0..1) Created when absent. */
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

  /** Creation date (1..1) */
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

  /** Party generating payment (0..1) Created when absent. */
  getPaymentIssuer(): Reference {
    if (this.paymentIssuer === undefined) {
      this.paymentIssuer = new Reference();
    }
    return this.paymentIssuer;
  }

  setPaymentIssuer(paymentIssuer: Reference | undefined): this {
    return this.setFieldValue('paymentIssuer', paymentIssuer);
  }

  hasPaymentIssuer(): boolean {
    return this.hasFieldValue('paymentIssuer');
  }

  /** Reference to requesting resource (0..1) Created when absent. */
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

  /** Responsible practitioner (0..1) Created when absent. */
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

  /** queued | complete | error | partial (0..1) */
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

  /** Disposition message (0..1) */
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

  /** When payment issued (1..1) */
  getPaymentDate(): string | undefined {
    return this.paymentDate;
  }

  /** Sets `paymentDate`. Throws a FhirModelError when the value is not a valid FHIR date. */
  setPaymentDate(paymentDate: string | undefined): this {
    return this.setFieldValue('paymentDate', paymentDate);
  }

  hasPaymentDate(): boolean {
    return this.hasFieldValue('paymentDate');
  }

  /** The element carrying the id and extensions of `paymentDate`. Created when absent. */
  getPaymentDateElement(): Element {
    if (this._paymentDate === undefined) {
      this._paymentDate = new Element();
    }
    return this._paymentDate;
  }

  setPaymentDateElement(paymentDateElement: Element | undefined): this {
    this._paymentDate = paymentDateElement;
    return this;
  }

  /** Total amount of Payment (1..1) Created when absent. */
  getPaymentAmount(): Money {
    if (this.paymentAmount === undefined) {
      this.paymentAmount = new Money();
    }
    return this.paymentAmount;
  }

  setPaymentAmount(paymentAmount: Money | undefined): this {
    return this.setFieldValue('paymentAmount', paymentAmount);
  }

  hasPaymentAmount(): boolean {
    return this.hasFieldValue('paymentAmount');
  }

  /** Business identifier for the payment (0..1) Created when absent. */
  getPaymentIdentifier(): Identifier {
    if (this.paymentIdentifier === undefined) {
      this.paymentIdentifier = new Identifier();
    }
    return this.paymentIdentifier;
  }

  setPaymentIdentifier(paymentIdentifier: Identifier | undefined): this {
    return this.setFieldValue('paymentIdentifier', paymentIdentifier);
  }

  hasPaymentIdentifier(): boolean {
    return this.hasFieldValue('paymentIdentifier');
  }

  /** Settlement particulars (0..*) Never undefined; an empty list is created when absent. */
  getDetail(): PaymentReconciliationDetail[] {
    if (this.detail === undefined) {
      this.detail = [];
    }
    return this.detail;
  }

  setDetail(detail: PaymentReconciliationDetail[] | undefined): this {
    return this.setFieldValue('detail', detail);
  }

  hasDetail(): boolean {
    return this.hasFieldValue('detail');
  }

  /** Appends a new, empty PaymentReconciliationDetail to `detail` and returns it so it can be filled in. */
  addDetail(): PaymentReconciliationDetail;
  /** Appends the given PaymentReconciliationDetail to `detail` and returns this object for chaining. */
  addDetail(paymentReconciliationDetail: PaymentReconciliationDetail): this;
  addDetail(
    paymentReconciliationDetail?: PaymentReconciliationDetail
  ): PaymentReconciliationDetail | this {
    if (paymentReconciliationDetail !== undefined) {
      return this.addFieldValue('detail', paymentReconciliationDetail);
    }
    const createdPaymentReconciliationDetail = new PaymentReconciliationDetail();
    this.addFieldValue('detail', createdPaymentReconciliationDetail);
    return createdPaymentReconciliationDetail;
  }

  /** The first PaymentReconciliationDetail of `detail`. One is added when the list is empty. */
  getDetailFirstRep(): PaymentReconciliationDetail {
    const firstPaymentReconciliationDetail = this.getDetail()[0];
    return firstPaymentReconciliationDetail === undefined
      ? this.addDetail()
      : firstPaymentReconciliationDetail;
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

  /** Note concerning processing (0..*) Never undefined; an empty list is created when absent. */
  getProcessNote(): PaymentReconciliationProcessNote[] {
    if (this.processNote === undefined) {
      this.processNote = [];
    }
    return this.processNote;
  }

  setProcessNote(processNote: PaymentReconciliationProcessNote[] | undefined): this {
    return this.setFieldValue('processNote', processNote);
  }

  hasProcessNote(): boolean {
    return this.hasFieldValue('processNote');
  }

  /** Appends a new, empty PaymentReconciliationProcessNote to `processNote` and returns it so it can be filled in. */
  addProcessNote(): PaymentReconciliationProcessNote;
  /** Appends the given PaymentReconciliationProcessNote to `processNote` and returns this object for chaining. */
  addProcessNote(paymentReconciliationProcessNote: PaymentReconciliationProcessNote): this;
  addProcessNote(
    paymentReconciliationProcessNote?: PaymentReconciliationProcessNote
  ): PaymentReconciliationProcessNote | this {
    if (paymentReconciliationProcessNote !== undefined) {
      return this.addFieldValue('processNote', paymentReconciliationProcessNote);
    }
    const createdPaymentReconciliationProcessNote = new PaymentReconciliationProcessNote();
    this.addFieldValue('processNote', createdPaymentReconciliationProcessNote);
    return createdPaymentReconciliationProcessNote;
  }

  /** The first PaymentReconciliationProcessNote of `processNote`. One is added when the list is empty. */
  getProcessNoteFirstRep(): PaymentReconciliationProcessNote {
    const firstPaymentReconciliationProcessNote = this.getProcessNote()[0];
    return firstPaymentReconciliationProcessNote === undefined
      ? this.addProcessNote()
      : firstPaymentReconciliationProcessNote;
  }
}

modelTypeRegistry.register('PaymentReconciliation', PaymentReconciliation, true);

/** True when the value is a PaymentReconciliation model instance. */
export function isPaymentReconciliation(candidate: unknown): candidate is PaymentReconciliation {
  return candidate instanceof PaymentReconciliation;
}

/**
 * Settlement particulars
 */
export class PaymentReconciliationDetail extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'predecessor',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'predecessor', typeCode: 'Identifier' }],
    },
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'request',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'request', typeCode: 'Reference' }],
    },
    {
      elementName: 'submitter',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'submitter',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Practitioner', 'PractitionerRole'],
        },
      ],
    },
    {
      elementName: 'response',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'response', typeCode: 'Reference' }],
    },
    {
      elementName: 'date',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'date', typeCode: 'date' }],
    },
    {
      elementName: 'responsible',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'responsible',
          typeCode: 'Reference',
          targetResourceTypes: ['PractitionerRole'],
        },
      ],
    },
    {
      elementName: 'payee',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'payee',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Practitioner', 'PractitionerRole'],
        },
      ],
    },
    {
      elementName: 'amount',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'amount', typeCode: 'Money' }],
    },
  ];

  /** Business identifier of the payment detail (0..1) */
  identifier?: Identifier;

  /** Business identifier of the prior payment detail (0..1) */
  predecessor?: Identifier;

  /** Category of payment (1..1) */
  type?: CodeableConcept;

  /** Request giving rise to the payment (0..1) */
  request?: Reference;

  /** Submitter of the request (0..1) */
  submitter?: Reference;

  /** Response committing to a payment (0..1) */
  response?: Reference;

  /** Date of commitment to pay (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Contact for the response (0..1) */
  responsible?: Reference;

  /** Recipient of the payment (0..1) */
  payee?: Reference;

  /** Amount allocated to this payable (0..1) */
  amount?: Money;

  override fhirType(): string {
    return 'PaymentReconciliation.detail';
  }

  /** FHIR JSON for this PaymentReconciliationDetail, typed as the plain `PaymentReconciliationDetail` data type. */
  override toJSON(): plainTypes.PaymentReconciliationDetail {
    return this.serialize() as plainTypes.PaymentReconciliationDetail;
  }

  /** Business identifier of the payment detail (0..1) Created when absent. */
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

  /** Business identifier of the prior payment detail (0..1) Created when absent. */
  getPredecessor(): Identifier {
    if (this.predecessor === undefined) {
      this.predecessor = new Identifier();
    }
    return this.predecessor;
  }

  setPredecessor(predecessor: Identifier | undefined): this {
    return this.setFieldValue('predecessor', predecessor);
  }

  hasPredecessor(): boolean {
    return this.hasFieldValue('predecessor');
  }

  /** Category of payment (1..1) Created when absent. */
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

  /** Request giving rise to the payment (0..1) Created when absent. */
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

  /** Submitter of the request (0..1) Created when absent. */
  getSubmitter(): Reference {
    if (this.submitter === undefined) {
      this.submitter = new Reference();
    }
    return this.submitter;
  }

  setSubmitter(submitter: Reference | undefined): this {
    return this.setFieldValue('submitter', submitter);
  }

  hasSubmitter(): boolean {
    return this.hasFieldValue('submitter');
  }

  /** Response committing to a payment (0..1) Created when absent. */
  getResponse(): Reference {
    if (this.response === undefined) {
      this.response = new Reference();
    }
    return this.response;
  }

  setResponse(response: Reference | undefined): this {
    return this.setFieldValue('response', response);
  }

  hasResponse(): boolean {
    return this.hasFieldValue('response');
  }

  /** Date of commitment to pay (0..1) */
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

  /** Contact for the response (0..1) Created when absent. */
  getResponsible(): Reference {
    if (this.responsible === undefined) {
      this.responsible = new Reference();
    }
    return this.responsible;
  }

  setResponsible(responsible: Reference | undefined): this {
    return this.setFieldValue('responsible', responsible);
  }

  hasResponsible(): boolean {
    return this.hasFieldValue('responsible');
  }

  /** Recipient of the payment (0..1) Created when absent. */
  getPayee(): Reference {
    if (this.payee === undefined) {
      this.payee = new Reference();
    }
    return this.payee;
  }

  setPayee(payee: Reference | undefined): this {
    return this.setFieldValue('payee', payee);
  }

  hasPayee(): boolean {
    return this.hasFieldValue('payee');
  }

  /** Amount allocated to this payable (0..1) Created when absent. */
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

modelTypeRegistry.register('PaymentReconciliationDetail', PaymentReconciliationDetail, false);

/**
 * Note concerning processing
 */
export class PaymentReconciliationProcessNote extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.NoteType }],
    },
    {
      elementName: 'text',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'text', typeCode: 'string' }],
    },
  ];

  /** display | print | printoper (0..1) */
  type?: valueSetCodes.NoteType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Note explanatory text (0..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;

  override fhirType(): string {
    return 'PaymentReconciliation.processNote';
  }

  /** FHIR JSON for this PaymentReconciliationProcessNote, typed as the plain `PaymentReconciliationProcessNote` data type. */
  override toJSON(): plainTypes.PaymentReconciliationProcessNote {
    return this.serialize() as plainTypes.PaymentReconciliationProcessNote;
  }

  /** display | print | printoper (0..1) */
  getType(): valueSetCodes.NoteType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.NoteType | undefined): this {
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

  /** Note explanatory text (0..1) */
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
}

modelTypeRegistry.register(
  'PaymentReconciliationProcessNote',
  PaymentReconciliationProcessNote,
  false
);
