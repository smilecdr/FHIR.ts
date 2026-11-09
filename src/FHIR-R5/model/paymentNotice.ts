/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Money } from './money';
import { Reference } from './reference';

/**
 * This resource provides the status of the payment for goods and services rendered, and the request and response resource references.
 */
export class PaymentNotice extends DomainResource {
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
      elementName: 'created',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'created', typeCode: 'dateTime' }],
    },
    {
      elementName: 'reporter',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'reporter',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Practitioner', 'PractitionerRole'],
        },
      ],
    },
    {
      elementName: 'payment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'payment',
          typeCode: 'Reference',
          targetResourceTypes: ['PaymentReconciliation'],
        },
      ],
    },
    {
      elementName: 'paymentDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'paymentDate', typeCode: 'date' }],
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
      elementName: 'recipient',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'recipient', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
    {
      elementName: 'amount',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'amount', typeCode: 'Money' }],
    },
    {
      elementName: 'paymentStatus',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'paymentStatus', typeCode: 'CodeableConcept' }],
    },
  ];

  readonly resourceType = 'PaymentNotice';

  /** Business Identifier for the payment notice (0..*) */
  identifier?: Identifier[];

  /** active | cancelled | draft | entered-in-error (1..1) */
  status?: valueSetCodes.FinancialResourceStatusCodes;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Request reference (0..1) */
  request?: Reference;

  /** Response reference (0..1) */
  response?: Reference;

  /** Creation date (1..1) */
  created?: string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;

  /** Responsible practitioner (0..1) */
  reporter?: Reference;

  /** Payment reference (0..1) */
  payment?: Reference;

  /** Payment or clearing date (0..1) */
  paymentDate?: string;
  /** Id and extensions of the primitive `paymentDate`. */
  _paymentDate?: Element;

  /** Party being paid (0..1) */
  payee?: Reference;

  /** Party being notified (1..1) */
  recipient?: Reference;

  /** Monetary amount of the payment (1..1) */
  amount?: Money;

  /** Issued or cleared Status of the payment (0..1) */
  paymentStatus?: CodeableConcept;

  override fhirType(): string {
    return 'PaymentNotice';
  }

  /** FHIR JSON for this PaymentNotice, typed as the plain `PaymentNotice` data type. */
  override toJSON(): plainTypes.PaymentNotice {
    return this.serialize() as plainTypes.PaymentNotice;
  }

  /** Business Identifier for the payment notice (0..*) Never undefined; an empty list is created when absent. */
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

  /** Request reference (0..1) Created when absent. */
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

  /** Response reference (0..1) Created when absent. */
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

  /** Responsible practitioner (0..1) Created when absent. */
  getReporter(): Reference {
    if (this.reporter === undefined) {
      this.reporter = new Reference();
    }
    return this.reporter;
  }

  setReporter(reporter: Reference | undefined): this {
    return this.setFieldValue('reporter', reporter);
  }

  hasReporter(): boolean {
    return this.hasFieldValue('reporter');
  }

  /** Payment reference (0..1) Created when absent. */
  getPayment(): Reference {
    if (this.payment === undefined) {
      this.payment = new Reference();
    }
    return this.payment;
  }

  setPayment(payment: Reference | undefined): this {
    return this.setFieldValue('payment', payment);
  }

  hasPayment(): boolean {
    return this.hasFieldValue('payment');
  }

  /** Payment or clearing date (0..1) */
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

  /** Party being paid (0..1) Created when absent. */
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

  /** Party being notified (1..1) Created when absent. */
  getRecipient(): Reference {
    if (this.recipient === undefined) {
      this.recipient = new Reference();
    }
    return this.recipient;
  }

  setRecipient(recipient: Reference | undefined): this {
    return this.setFieldValue('recipient', recipient);
  }

  hasRecipient(): boolean {
    return this.hasFieldValue('recipient');
  }

  /** Monetary amount of the payment (1..1) Created when absent. */
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

  /** Issued or cleared Status of the payment (0..1) Created when absent. */
  getPaymentStatus(): CodeableConcept {
    if (this.paymentStatus === undefined) {
      this.paymentStatus = new CodeableConcept();
    }
    return this.paymentStatus;
  }

  setPaymentStatus(paymentStatus: CodeableConcept | undefined): this {
    return this.setFieldValue('paymentStatus', paymentStatus);
  }

  hasPaymentStatus(): boolean {
    return this.hasFieldValue('paymentStatus');
  }
}

modelTypeRegistry.register('PaymentNotice', PaymentNotice, true);

/** True when the value is a PaymentNotice model instance. */
export function isPaymentNotice(candidate: unknown): candidate is PaymentNotice {
  return candidate instanceof PaymentNotice;
}
