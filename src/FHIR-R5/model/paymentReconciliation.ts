/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
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
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
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
      elementName: 'kind',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'kind', typeCode: 'CodeableConcept' }],
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
      elementName: 'enterer',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'enterer',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Practitioner', 'PractitionerRole'],
        },
      ],
    },
    {
      elementName: 'issuerType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'issuerType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'paymentIssuer',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'paymentIssuer',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Patient', 'RelatedPerson'],
        },
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
      types: [{ jsonKey: 'outcome', typeCode: 'code', allowedCodes: valueSetCodes.PaymentOutcome }],
    },
    {
      elementName: 'disposition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'disposition', typeCode: 'string' }],
    },
    {
      elementName: 'date',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'date', typeCode: 'date' }],
    },
    {
      elementName: 'location',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'location', typeCode: 'Reference', targetResourceTypes: ['Location'] }],
    },
    {
      elementName: 'method',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'method', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'cardBrand',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'cardBrand', typeCode: 'string' }],
    },
    {
      elementName: 'accountNumber',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'accountNumber', typeCode: 'string' }],
    },
    {
      elementName: 'expirationDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'expirationDate', typeCode: 'date' }],
    },
    {
      elementName: 'processor',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'processor', typeCode: 'string' }],
    },
    {
      elementName: 'referenceNumber',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'referenceNumber', typeCode: 'string' }],
    },
    {
      elementName: 'authorization',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'authorization', typeCode: 'string' }],
    },
    {
      elementName: 'tenderedAmount',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'tenderedAmount', typeCode: 'Money' }],
    },
    {
      elementName: 'returnedAmount',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'returnedAmount', typeCode: 'Money' }],
    },
    {
      elementName: 'amount',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'amount', typeCode: 'Money' }],
    },
    {
      elementName: 'paymentIdentifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'paymentIdentifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'allocation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'allocation', typeCode: 'PaymentReconciliationAllocation' }],
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

  /** Category of payment (1..1) */
  type?: CodeableConcept;

  /** active | cancelled | draft | entered-in-error (1..1) */
  status?: valueSetCodes.FinancialResourceStatusCodes;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Workflow originating payment (0..1) */
  kind?: CodeableConcept;

  /** Period covered (0..1) */
  period?: Period;

  /** Creation date (1..1) */
  created?: string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;

  /** Who entered the payment (0..1) */
  enterer?: Reference;

  /** Nature of the source (0..1) */
  issuerType?: CodeableConcept;

  /** Party generating payment (0..1) */
  paymentIssuer?: Reference;

  /** Reference to requesting resource (0..1) */
  request?: Reference;

  /** Responsible practitioner (0..1) */
  requestor?: Reference;

  /** queued | complete | error | partial (0..1) */
  outcome?: valueSetCodes.PaymentOutcome;
  /** Id and extensions of the primitive `outcome`. */
  _outcome?: Element;

  /** Disposition message (0..1) */
  disposition?: string;
  /** Id and extensions of the primitive `disposition`. */
  _disposition?: Element;

  /** When payment issued (1..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Where payment collected (0..1) */
  location?: Reference;

  /** Payment instrument (0..1) */
  method?: CodeableConcept;

  /** Type of card (0..1) */
  cardBrand?: string;
  /** Id and extensions of the primitive `cardBrand`. */
  _cardBrand?: Element;

  /** Digits for verification (0..1) */
  accountNumber?: string;
  /** Id and extensions of the primitive `accountNumber`. */
  _accountNumber?: Element;

  /** Expiration year-month (0..1) */
  expirationDate?: string;
  /** Id and extensions of the primitive `expirationDate`. */
  _expirationDate?: Element;

  /** Processor name (0..1) */
  processor?: string;
  /** Id and extensions of the primitive `processor`. */
  _processor?: Element;

  /** Check number or payment reference (0..1) */
  referenceNumber?: string;
  /** Id and extensions of the primitive `referenceNumber`. */
  _referenceNumber?: Element;

  /** Authorization number (0..1) */
  authorization?: string;
  /** Id and extensions of the primitive `authorization`. */
  _authorization?: Element;

  /** Amount offered by the issuer (0..1) */
  tenderedAmount?: Money;

  /** Amount returned by the receiver (0..1) */
  returnedAmount?: Money;

  /** Total amount of Payment (1..1) */
  amount?: Money;

  /** Business identifier for the payment (0..1) */
  paymentIdentifier?: Identifier;

  /** Settlement particulars (0..*) */
  allocation?: PaymentReconciliationAllocation[];

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

  /** Workflow originating payment (0..1) Created when absent. */
  getKind(): CodeableConcept {
    if (this.kind === undefined) {
      this.kind = new CodeableConcept();
    }
    return this.kind;
  }

  setKind(kind: CodeableConcept | undefined): this {
    return this.setFieldValue('kind', kind);
  }

  hasKind(): boolean {
    return this.hasFieldValue('kind');
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

  /** Who entered the payment (0..1) Created when absent. */
  getEnterer(): Reference {
    if (this.enterer === undefined) {
      this.enterer = new Reference();
    }
    return this.enterer;
  }

  setEnterer(enterer: Reference | undefined): this {
    return this.setFieldValue('enterer', enterer);
  }

  hasEnterer(): boolean {
    return this.hasFieldValue('enterer');
  }

  /** Nature of the source (0..1) Created when absent. */
  getIssuerType(): CodeableConcept {
    if (this.issuerType === undefined) {
      this.issuerType = new CodeableConcept();
    }
    return this.issuerType;
  }

  setIssuerType(issuerType: CodeableConcept | undefined): this {
    return this.setFieldValue('issuerType', issuerType);
  }

  hasIssuerType(): boolean {
    return this.hasFieldValue('issuerType');
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
  getOutcome(): valueSetCodes.PaymentOutcome | undefined {
    return this.outcome;
  }

  /** Sets `outcome`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setOutcome(outcome: valueSetCodes.PaymentOutcome | undefined): this {
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

  /** Where payment collected (0..1) Created when absent. */
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

  /** Payment instrument (0..1) Created when absent. */
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

  /** Type of card (0..1) */
  getCardBrand(): string | undefined {
    return this.cardBrand;
  }

  /** Sets `cardBrand`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setCardBrand(cardBrand: string | undefined): this {
    return this.setFieldValue('cardBrand', cardBrand);
  }

  hasCardBrand(): boolean {
    return this.hasFieldValue('cardBrand');
  }

  /** The element carrying the id and extensions of `cardBrand`. Created when absent. */
  getCardBrandElement(): Element {
    if (this._cardBrand === undefined) {
      this._cardBrand = new Element();
    }
    return this._cardBrand;
  }

  setCardBrandElement(cardBrandElement: Element | undefined): this {
    this._cardBrand = cardBrandElement;
    return this;
  }

  /** Digits for verification (0..1) */
  getAccountNumber(): string | undefined {
    return this.accountNumber;
  }

  /** Sets `accountNumber`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setAccountNumber(accountNumber: string | undefined): this {
    return this.setFieldValue('accountNumber', accountNumber);
  }

  hasAccountNumber(): boolean {
    return this.hasFieldValue('accountNumber');
  }

  /** The element carrying the id and extensions of `accountNumber`. Created when absent. */
  getAccountNumberElement(): Element {
    if (this._accountNumber === undefined) {
      this._accountNumber = new Element();
    }
    return this._accountNumber;
  }

  setAccountNumberElement(accountNumberElement: Element | undefined): this {
    this._accountNumber = accountNumberElement;
    return this;
  }

  /** Expiration year-month (0..1) */
  getExpirationDate(): string | undefined {
    return this.expirationDate;
  }

  /** Sets `expirationDate`. Throws a FhirModelError when the value is not a valid FHIR date. */
  setExpirationDate(expirationDate: string | undefined): this {
    return this.setFieldValue('expirationDate', expirationDate);
  }

  hasExpirationDate(): boolean {
    return this.hasFieldValue('expirationDate');
  }

  /** The element carrying the id and extensions of `expirationDate`. Created when absent. */
  getExpirationDateElement(): Element {
    if (this._expirationDate === undefined) {
      this._expirationDate = new Element();
    }
    return this._expirationDate;
  }

  setExpirationDateElement(expirationDateElement: Element | undefined): this {
    this._expirationDate = expirationDateElement;
    return this;
  }

  /** Processor name (0..1) */
  getProcessor(): string | undefined {
    return this.processor;
  }

  /** Sets `processor`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setProcessor(processor: string | undefined): this {
    return this.setFieldValue('processor', processor);
  }

  hasProcessor(): boolean {
    return this.hasFieldValue('processor');
  }

  /** The element carrying the id and extensions of `processor`. Created when absent. */
  getProcessorElement(): Element {
    if (this._processor === undefined) {
      this._processor = new Element();
    }
    return this._processor;
  }

  setProcessorElement(processorElement: Element | undefined): this {
    this._processor = processorElement;
    return this;
  }

  /** Check number or payment reference (0..1) */
  getReferenceNumber(): string | undefined {
    return this.referenceNumber;
  }

  /** Sets `referenceNumber`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setReferenceNumber(referenceNumber: string | undefined): this {
    return this.setFieldValue('referenceNumber', referenceNumber);
  }

  hasReferenceNumber(): boolean {
    return this.hasFieldValue('referenceNumber');
  }

  /** The element carrying the id and extensions of `referenceNumber`. Created when absent. */
  getReferenceNumberElement(): Element {
    if (this._referenceNumber === undefined) {
      this._referenceNumber = new Element();
    }
    return this._referenceNumber;
  }

  setReferenceNumberElement(referenceNumberElement: Element | undefined): this {
    this._referenceNumber = referenceNumberElement;
    return this;
  }

  /** Authorization number (0..1) */
  getAuthorization(): string | undefined {
    return this.authorization;
  }

  /** Sets `authorization`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setAuthorization(authorization: string | undefined): this {
    return this.setFieldValue('authorization', authorization);
  }

  hasAuthorization(): boolean {
    return this.hasFieldValue('authorization');
  }

  /** The element carrying the id and extensions of `authorization`. Created when absent. */
  getAuthorizationElement(): Element {
    if (this._authorization === undefined) {
      this._authorization = new Element();
    }
    return this._authorization;
  }

  setAuthorizationElement(authorizationElement: Element | undefined): this {
    this._authorization = authorizationElement;
    return this;
  }

  /** Amount offered by the issuer (0..1) Created when absent. */
  getTenderedAmount(): Money {
    if (this.tenderedAmount === undefined) {
      this.tenderedAmount = new Money();
    }
    return this.tenderedAmount;
  }

  setTenderedAmount(tenderedAmount: Money | undefined): this {
    return this.setFieldValue('tenderedAmount', tenderedAmount);
  }

  hasTenderedAmount(): boolean {
    return this.hasFieldValue('tenderedAmount');
  }

  /** Amount returned by the receiver (0..1) Created when absent. */
  getReturnedAmount(): Money {
    if (this.returnedAmount === undefined) {
      this.returnedAmount = new Money();
    }
    return this.returnedAmount;
  }

  setReturnedAmount(returnedAmount: Money | undefined): this {
    return this.setFieldValue('returnedAmount', returnedAmount);
  }

  hasReturnedAmount(): boolean {
    return this.hasFieldValue('returnedAmount');
  }

  /** Total amount of Payment (1..1) Created when absent. */
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
  getAllocation(): PaymentReconciliationAllocation[] {
    if (this.allocation === undefined) {
      this.allocation = [];
    }
    return this.allocation;
  }

  setAllocation(allocation: PaymentReconciliationAllocation[] | undefined): this {
    return this.setFieldValue('allocation', allocation);
  }

  hasAllocation(): boolean {
    return this.hasFieldValue('allocation');
  }

  /** Appends a new, empty PaymentReconciliationAllocation to `allocation` and returns it so it can be filled in. */
  addAllocation(): PaymentReconciliationAllocation;
  /** Appends the given PaymentReconciliationAllocation to `allocation` and returns this object for chaining. */
  addAllocation(paymentReconciliationAllocation: PaymentReconciliationAllocation): this;
  addAllocation(
    paymentReconciliationAllocation?: PaymentReconciliationAllocation
  ): PaymentReconciliationAllocation | this {
    if (paymentReconciliationAllocation !== undefined) {
      return this.addFieldValue('allocation', paymentReconciliationAllocation);
    }
    const createdPaymentReconciliationAllocation = new PaymentReconciliationAllocation();
    this.addFieldValue('allocation', createdPaymentReconciliationAllocation);
    return createdPaymentReconciliationAllocation;
  }

  /** The first PaymentReconciliationAllocation of `allocation`. One is added when the list is empty. */
  getAllocationFirstRep(): PaymentReconciliationAllocation {
    const firstPaymentReconciliationAllocation = this.getAllocation()[0];
    return firstPaymentReconciliationAllocation === undefined
      ? this.addAllocation()
      : firstPaymentReconciliationAllocation;
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
export class PaymentReconciliationAllocation extends BackboneElement {
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
      elementName: 'target',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'target',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Account',
            'ChargeItem',
            'Claim',
            'Contract',
            'Encounter',
            'Invoice',
          ],
        },
      ],
    },
    {
      elementName: 'targetItem',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'targetItemString', typeCode: 'string' },
        { jsonKey: 'targetItemIdentifier', typeCode: 'Identifier' },
        { jsonKey: 'targetItemPositiveInt', typeCode: 'positiveInt' },
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
      elementName: 'account',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'account', typeCode: 'Reference', targetResourceTypes: ['Account'] }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
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
      types: [
        { jsonKey: 'response', typeCode: 'Reference', targetResourceTypes: ['ClaimResponse'] },
      ],
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

  /** Subject of the payment (0..1) */
  target?: Reference;

  /** Sub-element of the subject (0..1) */
  targetItemString?: string;
  /** Id and extensions of the primitive `targetItemString`. */
  _targetItemString?: Element;
  /** Sub-element of the subject (0..1) */
  targetItemIdentifier?: Identifier;
  /** Sub-element of the subject (0..1) */
  targetItemPositiveInt?: number;
  /** Id and extensions of the primitive `targetItemPositiveInt`. */
  _targetItemPositiveInt?: Element;

  /** Applied-to encounter (0..1) */
  encounter?: Reference;

  /** Applied-to account (0..1) */
  account?: Reference;

  /** Category of payment (0..1) */
  type?: CodeableConcept;

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
    return 'PaymentReconciliation.allocation';
  }

  /** FHIR JSON for this PaymentReconciliationAllocation, typed as the plain `PaymentReconciliationAllocation` data type. */
  override toJSON(): plainTypes.PaymentReconciliationAllocation {
    return this.serialize() as plainTypes.PaymentReconciliationAllocation;
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

  /** Subject of the payment (0..1) Created when absent. */
  getTarget(): Reference {
    if (this.target === undefined) {
      this.target = new Reference();
    }
    return this.target;
  }

  setTarget(target: Reference | undefined): this {
    return this.setFieldValue('target', target);
  }

  hasTarget(): boolean {
    return this.hasFieldValue('target');
  }

  /** Sub-element of the subject (0..1) Whichever type of `targetItem[x]` is set. */
  getTargetItem(): string | Identifier | number | undefined {
    return this.getChoiceValue<string | Identifier | number>('targetItem');
  }

  /** True when any type of `targetItem[x]` is set. */
  hasTargetItem(): boolean {
    return this.hasChoiceValue('targetItem');
  }

  getTargetItemString(): string | undefined {
    return this.targetItemString;
  }

  /** Sets `targetItem[x]` as string and clears every other type of it. */
  setTargetItemString(targetItemString: string | undefined): this {
    return this.setFieldValue('targetItemString', targetItemString);
  }

  hasTargetItemString(): boolean {
    return this.hasFieldValue('targetItemString');
  }

  getTargetItemIdentifier(): Identifier | undefined {
    return this.targetItemIdentifier;
  }

  /** Sets `targetItem[x]` as Identifier and clears every other type of it. */
  setTargetItemIdentifier(targetItemIdentifier: Identifier | undefined): this {
    return this.setFieldValue('targetItemIdentifier', targetItemIdentifier);
  }

  hasTargetItemIdentifier(): boolean {
    return this.hasFieldValue('targetItemIdentifier');
  }

  getTargetItemPositiveInt(): number | undefined {
    return this.targetItemPositiveInt;
  }

  /** Sets `targetItem[x]` as positiveInt and clears every other type of it. */
  setTargetItemPositiveInt(targetItemPositiveInt: number | undefined): this {
    return this.setFieldValue('targetItemPositiveInt', targetItemPositiveInt);
  }

  hasTargetItemPositiveInt(): boolean {
    return this.hasFieldValue('targetItemPositiveInt');
  }

  /** Applied-to encounter (0..1) Created when absent. */
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

  /** Applied-to account (0..1) Created when absent. */
  getAccount(): Reference {
    if (this.account === undefined) {
      this.account = new Reference();
    }
    return this.account;
  }

  setAccount(account: Reference | undefined): this {
    return this.setFieldValue('account', account);
  }

  hasAccount(): boolean {
    return this.hasFieldValue('account');
  }

  /** Category of payment (0..1) Created when absent. */
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

modelTypeRegistry.register(
  'PaymentReconciliationAllocation',
  PaymentReconciliationAllocation,
  false
);

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
