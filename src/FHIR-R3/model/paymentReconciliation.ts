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
import { Money } from './money';
import { Period } from './period';
import { Reference } from './reference';

/**
 * Base StructureDefinition for PaymentReconciliation Resource
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
      minimum: 0,
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
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'created', typeCode: 'dateTime' }],
    },
    {
      elementName: 'organization',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'organization', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
    {
      elementName: 'request',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'request', typeCode: 'Reference', targetResourceTypes: ['ProcessRequest'] },
      ],
    },
    {
      elementName: 'outcome',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'outcome', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'disposition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'disposition', typeCode: 'string' }],
    },
    {
      elementName: 'requestProvider',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'requestProvider',
          typeCode: 'Reference',
          targetResourceTypes: ['Practitioner'],
        },
      ],
    },
    {
      elementName: 'requestOrganization',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'requestOrganization',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization'],
        },
      ],
    },
    {
      elementName: 'detail',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'detail', typeCode: 'PaymentReconciliationDetail' }],
    },
    {
      elementName: 'form',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'form', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'total',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'total', typeCode: 'Money' }],
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

  /** Business Identifier (0..*) */
  identifier?: Identifier[];

  /** active | cancelled | draft | entered-in-error (0..1) */
  status?: valueSetCodes.FinancialResourceStatusCodes;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Period covered (0..1) */
  period?: Period;

  /** Creation date (0..1) */
  created?: string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;

  /** Insurer (0..1) */
  organization?: Reference;

  /** Claim reference (0..1) */
  request?: Reference;

  /** complete | error | partial (0..1) */
  outcome?: CodeableConcept;

  /** Disposition Message (0..1) */
  disposition?: string;
  /** Id and extensions of the primitive `disposition`. */
  _disposition?: Element;

  /** Responsible practitioner (0..1) */
  requestProvider?: Reference;

  /** Responsible organization (0..1) */
  requestOrganization?: Reference;

  /** List of settlements (0..*) */
  detail?: PaymentReconciliationDetail[];

  /** Printed Form Identifier (0..1) */
  form?: CodeableConcept;

  /** Total amount of Payment (0..1) */
  total?: Money;

  /** Processing comments (0..*) */
  processNote?: PaymentReconciliationProcessNote[];

  override fhirType(): string {
    return 'PaymentReconciliation';
  }

  /** FHIR JSON for this PaymentReconciliation, typed as the plain `PaymentReconciliation` data type. */
  override toJSON(): plainTypes.PaymentReconciliation {
    return this.serialize() as plainTypes.PaymentReconciliation;
  }

  /** Business Identifier (0..*) Never undefined; an empty list is created when absent. */
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

  /** active | cancelled | draft | entered-in-error (0..1) */
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

  /** Creation date (0..1) */
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

  /** Insurer (0..1) Created when absent. */
  getOrganization(): Reference {
    if (this.organization === undefined) {
      this.organization = new Reference();
    }
    return this.organization;
  }

  setOrganization(organization: Reference | undefined): this {
    return this.setFieldValue('organization', organization);
  }

  hasOrganization(): boolean {
    return this.hasFieldValue('organization');
  }

  /** Claim reference (0..1) Created when absent. */
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

  /** complete | error | partial (0..1) Created when absent. */
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

  /** Responsible practitioner (0..1) Created when absent. */
  getRequestProvider(): Reference {
    if (this.requestProvider === undefined) {
      this.requestProvider = new Reference();
    }
    return this.requestProvider;
  }

  setRequestProvider(requestProvider: Reference | undefined): this {
    return this.setFieldValue('requestProvider', requestProvider);
  }

  hasRequestProvider(): boolean {
    return this.hasFieldValue('requestProvider');
  }

  /** Responsible organization (0..1) Created when absent. */
  getRequestOrganization(): Reference {
    if (this.requestOrganization === undefined) {
      this.requestOrganization = new Reference();
    }
    return this.requestOrganization;
  }

  setRequestOrganization(requestOrganization: Reference | undefined): this {
    return this.setFieldValue('requestOrganization', requestOrganization);
  }

  hasRequestOrganization(): boolean {
    return this.hasFieldValue('requestOrganization');
  }

  /** List of settlements (0..*) Never undefined; an empty list is created when absent. */
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

  /** Printed Form Identifier (0..1) Created when absent. */
  getForm(): CodeableConcept {
    if (this.form === undefined) {
      this.form = new CodeableConcept();
    }
    return this.form;
  }

  setForm(form: CodeableConcept | undefined): this {
    return this.setFieldValue('form', form);
  }

  hasForm(): boolean {
    return this.hasFieldValue('form');
  }

  /** Total amount of Payment (0..1) Created when absent. */
  getTotal(): Money {
    if (this.total === undefined) {
      this.total = new Money();
    }
    return this.total;
  }

  setTotal(total: Money | undefined): this {
    return this.setFieldValue('total', total);
  }

  hasTotal(): boolean {
    return this.hasFieldValue('total');
  }

  /** Processing comments (0..*) Never undefined; an empty list is created when absent. */
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
 * List of settlements
 */
export class PaymentReconciliationDetail extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
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
      elementName: 'response',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'response', typeCode: 'Reference' }],
    },
    {
      elementName: 'submitter',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'submitter', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
    {
      elementName: 'payee',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'payee', typeCode: 'Reference', targetResourceTypes: ['Organization'] }],
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
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'amount', typeCode: 'Money' }],
    },
  ];

  /** Type code (1..1) */
  type?: CodeableConcept;

  /** Claim (0..1) */
  request?: Reference;

  /** Claim Response (0..1) */
  response?: Reference;

  /** Organization which submitted the claim (0..1) */
  submitter?: Reference;

  /** Organization which is receiving the payment (0..1) */
  payee?: Reference;

  /** Invoice date (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Amount being paid (0..1) */
  amount?: Money;

  override fhirType(): string {
    return 'PaymentReconciliation.detail';
  }

  /** FHIR JSON for this PaymentReconciliationDetail, typed as the plain `PaymentReconciliationDetail` data type. */
  override toJSON(): plainTypes.PaymentReconciliationDetail {
    return this.serialize() as plainTypes.PaymentReconciliationDetail;
  }

  /** Type code (1..1) Created when absent. */
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

  /** Claim (0..1) Created when absent. */
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

  /** Claim Response (0..1) Created when absent. */
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

  /** Organization which submitted the claim (0..1) Created when absent. */
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

  /** Organization which is receiving the payment (0..1) Created when absent. */
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

  /** Invoice date (0..1) */
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

  /** Amount being paid (0..1) Created when absent. */
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
 * Processing comments
 */
export class PaymentReconciliationProcessNote extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
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
  type?: CodeableConcept;

  /** Comment on the processing (0..1) */
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

  /** display | print | printoper (0..1) Created when absent. */
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

  /** Comment on the processing (0..1) */
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
