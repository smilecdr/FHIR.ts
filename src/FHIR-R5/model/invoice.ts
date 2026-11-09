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
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { MonetaryComponent } from './monetaryComponent';
import { Money } from './money';
import { Period } from './period';
import { Reference } from './reference';

/**
 * Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose.
 */
export class Invoice extends DomainResource {
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
      types: [{ jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.InvoiceStatus }],
    },
    {
      elementName: 'cancelledReason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'cancelledReason', typeCode: 'string' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'subject',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'subject', typeCode: 'Reference', targetResourceTypes: ['Group', 'Patient'] },
      ],
    },
    {
      elementName: 'recipient',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'recipient',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Patient', 'RelatedPerson'],
        },
      ],
    },
    {
      elementName: 'date',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'date', typeCode: 'dateTime' }],
    },
    {
      elementName: 'creation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'creation', typeCode: 'dateTime' }],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'periodDate', typeCode: 'date' },
        { jsonKey: 'periodPeriod', typeCode: 'Period' },
      ],
    },
    {
      elementName: 'participant',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'participant', typeCode: 'InvoiceParticipant' }],
    },
    {
      elementName: 'issuer',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'issuer', typeCode: 'Reference', targetResourceTypes: ['Organization'] }],
    },
    {
      elementName: 'account',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'account', typeCode: 'Reference', targetResourceTypes: ['Account'] }],
    },
    {
      elementName: 'lineItem',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'lineItem', typeCode: 'InvoiceLineItem' }],
    },
    {
      elementName: 'totalPriceComponent',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'totalPriceComponent', typeCode: 'MonetaryComponent' }],
    },
    {
      elementName: 'totalNet',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'totalNet', typeCode: 'Money' }],
    },
    {
      elementName: 'totalGross',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'totalGross', typeCode: 'Money' }],
    },
    {
      elementName: 'paymentTerms',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'paymentTerms', typeCode: 'markdown' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
  ];

  readonly resourceType = 'Invoice';

  /** Business Identifier for item (0..*) */
  identifier?: Identifier[];

  /** draft | issued | balanced | cancelled | entered-in-error (1..1) */
  status?: valueSetCodes.InvoiceStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Reason for cancellation of this Invoice (0..1) */
  cancelledReason?: string;
  /** Id and extensions of the primitive `cancelledReason`. */
  _cancelledReason?: Element;

  /** Type of Invoice (0..1) */
  type?: CodeableConcept;

  /** Recipient(s) of goods and services (0..1) */
  subject?: Reference;

  /** Recipient of this invoice (0..1) */
  recipient?: Reference;

  /** DEPRICATED (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** When posted (0..1) */
  creation?: string;
  /** Id and extensions of the primitive `creation`. */
  _creation?: Element;

  /** Billing date or period (0..1) */
  periodDate?: string;
  /** Id and extensions of the primitive `periodDate`. */
  _periodDate?: Element;
  /** Billing date or period (0..1) */
  periodPeriod?: Period;

  /** Participant in creation of this Invoice (0..*) */
  participant?: InvoiceParticipant[];

  /** Issuing Organization of Invoice (0..1) */
  issuer?: Reference;

  /** Account that is being balanced (0..1) */
  account?: Reference;

  /** Line items of this Invoice (0..*) */
  lineItem?: InvoiceLineItem[];

  /** Components of Invoice total (0..*) */
  totalPriceComponent?: MonetaryComponent[];

  /** Net total of this Invoice (0..1) */
  totalNet?: Money;

  /** Gross total of this Invoice (0..1) */
  totalGross?: Money;

  /** Payment details (0..1) */
  paymentTerms?: string;
  /** Id and extensions of the primitive `paymentTerms`. */
  _paymentTerms?: Element;

  /** Comments made about the invoice (0..*) */
  note?: Annotation[];

  override fhirType(): string {
    return 'Invoice';
  }

  /** FHIR JSON for this Invoice, typed as the plain `Invoice` data type. */
  override toJSON(): plainTypes.Invoice {
    return this.serialize() as plainTypes.Invoice;
  }

  /** Business Identifier for item (0..*) Never undefined; an empty list is created when absent. */
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

  /** draft | issued | balanced | cancelled | entered-in-error (1..1) */
  getStatus(): valueSetCodes.InvoiceStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.InvoiceStatus | undefined): this {
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

  /** Reason for cancellation of this Invoice (0..1) */
  getCancelledReason(): string | undefined {
    return this.cancelledReason;
  }

  /** Sets `cancelledReason`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setCancelledReason(cancelledReason: string | undefined): this {
    return this.setFieldValue('cancelledReason', cancelledReason);
  }

  hasCancelledReason(): boolean {
    return this.hasFieldValue('cancelledReason');
  }

  /** The element carrying the id and extensions of `cancelledReason`. Created when absent. */
  getCancelledReasonElement(): Element {
    if (this._cancelledReason === undefined) {
      this._cancelledReason = new Element();
    }
    return this._cancelledReason;
  }

  setCancelledReasonElement(cancelledReasonElement: Element | undefined): this {
    this._cancelledReason = cancelledReasonElement;
    return this;
  }

  /** Type of Invoice (0..1) Created when absent. */
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

  /** Recipient(s) of goods and services (0..1) Created when absent. */
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

  /** Recipient of this invoice (0..1) Created when absent. */
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

  /** DEPRICATED (0..1) */
  getDate(): string | undefined {
    return this.date;
  }

  /** Sets `date`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
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

  /** When posted (0..1) */
  getCreation(): string | undefined {
    return this.creation;
  }

  /** Sets `creation`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setCreation(creation: string | undefined): this {
    return this.setFieldValue('creation', creation);
  }

  hasCreation(): boolean {
    return this.hasFieldValue('creation');
  }

  /** The element carrying the id and extensions of `creation`. Created when absent. */
  getCreationElement(): Element {
    if (this._creation === undefined) {
      this._creation = new Element();
    }
    return this._creation;
  }

  setCreationElement(creationElement: Element | undefined): this {
    this._creation = creationElement;
    return this;
  }

  /** Billing date or period (0..1) Whichever type of `period[x]` is set. */
  getPeriod(): string | Period | undefined {
    return this.getChoiceValue<string | Period>('period');
  }

  /** True when any type of `period[x]` is set. */
  hasPeriod(): boolean {
    return this.hasChoiceValue('period');
  }

  getPeriodDate(): string | undefined {
    return this.periodDate;
  }

  /** Sets `period[x]` as date and clears every other type of it. */
  setPeriodDate(periodDate: string | undefined): this {
    return this.setFieldValue('periodDate', periodDate);
  }

  hasPeriodDate(): boolean {
    return this.hasFieldValue('periodDate');
  }

  getPeriodPeriod(): Period | undefined {
    return this.periodPeriod;
  }

  /** Sets `period[x]` as Period and clears every other type of it. */
  setPeriodPeriod(periodPeriod: Period | undefined): this {
    return this.setFieldValue('periodPeriod', periodPeriod);
  }

  hasPeriodPeriod(): boolean {
    return this.hasFieldValue('periodPeriod');
  }

  /** Participant in creation of this Invoice (0..*) Never undefined; an empty list is created when absent. */
  getParticipant(): InvoiceParticipant[] {
    if (this.participant === undefined) {
      this.participant = [];
    }
    return this.participant;
  }

  setParticipant(participant: InvoiceParticipant[] | undefined): this {
    return this.setFieldValue('participant', participant);
  }

  hasParticipant(): boolean {
    return this.hasFieldValue('participant');
  }

  /** Appends a new, empty InvoiceParticipant to `participant` and returns it so it can be filled in. */
  addParticipant(): InvoiceParticipant;
  /** Appends the given InvoiceParticipant to `participant` and returns this object for chaining. */
  addParticipant(invoiceParticipant: InvoiceParticipant): this;
  addParticipant(invoiceParticipant?: InvoiceParticipant): InvoiceParticipant | this {
    if (invoiceParticipant !== undefined) {
      return this.addFieldValue('participant', invoiceParticipant);
    }
    const createdInvoiceParticipant = new InvoiceParticipant();
    this.addFieldValue('participant', createdInvoiceParticipant);
    return createdInvoiceParticipant;
  }

  /** The first InvoiceParticipant of `participant`. One is added when the list is empty. */
  getParticipantFirstRep(): InvoiceParticipant {
    const firstInvoiceParticipant = this.getParticipant()[0];
    return firstInvoiceParticipant === undefined ? this.addParticipant() : firstInvoiceParticipant;
  }

  /** Issuing Organization of Invoice (0..1) Created when absent. */
  getIssuer(): Reference {
    if (this.issuer === undefined) {
      this.issuer = new Reference();
    }
    return this.issuer;
  }

  setIssuer(issuer: Reference | undefined): this {
    return this.setFieldValue('issuer', issuer);
  }

  hasIssuer(): boolean {
    return this.hasFieldValue('issuer');
  }

  /** Account that is being balanced (0..1) Created when absent. */
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

  /** Line items of this Invoice (0..*) Never undefined; an empty list is created when absent. */
  getLineItem(): InvoiceLineItem[] {
    if (this.lineItem === undefined) {
      this.lineItem = [];
    }
    return this.lineItem;
  }

  setLineItem(lineItem: InvoiceLineItem[] | undefined): this {
    return this.setFieldValue('lineItem', lineItem);
  }

  hasLineItem(): boolean {
    return this.hasFieldValue('lineItem');
  }

  /** Appends a new, empty InvoiceLineItem to `lineItem` and returns it so it can be filled in. */
  addLineItem(): InvoiceLineItem;
  /** Appends the given InvoiceLineItem to `lineItem` and returns this object for chaining. */
  addLineItem(invoiceLineItem: InvoiceLineItem): this;
  addLineItem(invoiceLineItem?: InvoiceLineItem): InvoiceLineItem | this {
    if (invoiceLineItem !== undefined) {
      return this.addFieldValue('lineItem', invoiceLineItem);
    }
    const createdInvoiceLineItem = new InvoiceLineItem();
    this.addFieldValue('lineItem', createdInvoiceLineItem);
    return createdInvoiceLineItem;
  }

  /** The first InvoiceLineItem of `lineItem`. One is added when the list is empty. */
  getLineItemFirstRep(): InvoiceLineItem {
    const firstInvoiceLineItem = this.getLineItem()[0];
    return firstInvoiceLineItem === undefined ? this.addLineItem() : firstInvoiceLineItem;
  }

  /** Components of Invoice total (0..*) Never undefined; an empty list is created when absent. */
  getTotalPriceComponent(): MonetaryComponent[] {
    if (this.totalPriceComponent === undefined) {
      this.totalPriceComponent = [];
    }
    return this.totalPriceComponent;
  }

  setTotalPriceComponent(totalPriceComponent: MonetaryComponent[] | undefined): this {
    return this.setFieldValue('totalPriceComponent', totalPriceComponent);
  }

  hasTotalPriceComponent(): boolean {
    return this.hasFieldValue('totalPriceComponent');
  }

  /** Appends a new, empty MonetaryComponent to `totalPriceComponent` and returns it so it can be filled in. */
  addTotalPriceComponent(): MonetaryComponent;
  /** Appends the given MonetaryComponent to `totalPriceComponent` and returns this object for chaining. */
  addTotalPriceComponent(monetaryComponent: MonetaryComponent): this;
  addTotalPriceComponent(monetaryComponent?: MonetaryComponent): MonetaryComponent | this {
    if (monetaryComponent !== undefined) {
      return this.addFieldValue('totalPriceComponent', monetaryComponent);
    }
    const createdMonetaryComponent = new MonetaryComponent();
    this.addFieldValue('totalPriceComponent', createdMonetaryComponent);
    return createdMonetaryComponent;
  }

  /** The first MonetaryComponent of `totalPriceComponent`. One is added when the list is empty. */
  getTotalPriceComponentFirstRep(): MonetaryComponent {
    const firstMonetaryComponent = this.getTotalPriceComponent()[0];
    return firstMonetaryComponent === undefined
      ? this.addTotalPriceComponent()
      : firstMonetaryComponent;
  }

  /** Net total of this Invoice (0..1) Created when absent. */
  getTotalNet(): Money {
    if (this.totalNet === undefined) {
      this.totalNet = new Money();
    }
    return this.totalNet;
  }

  setTotalNet(totalNet: Money | undefined): this {
    return this.setFieldValue('totalNet', totalNet);
  }

  hasTotalNet(): boolean {
    return this.hasFieldValue('totalNet');
  }

  /** Gross total of this Invoice (0..1) Created when absent. */
  getTotalGross(): Money {
    if (this.totalGross === undefined) {
      this.totalGross = new Money();
    }
    return this.totalGross;
  }

  setTotalGross(totalGross: Money | undefined): this {
    return this.setFieldValue('totalGross', totalGross);
  }

  hasTotalGross(): boolean {
    return this.hasFieldValue('totalGross');
  }

  /** Payment details (0..1) */
  getPaymentTerms(): string | undefined {
    return this.paymentTerms;
  }

  /** Sets `paymentTerms`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setPaymentTerms(paymentTerms: string | undefined): this {
    return this.setFieldValue('paymentTerms', paymentTerms);
  }

  hasPaymentTerms(): boolean {
    return this.hasFieldValue('paymentTerms');
  }

  /** The element carrying the id and extensions of `paymentTerms`. Created when absent. */
  getPaymentTermsElement(): Element {
    if (this._paymentTerms === undefined) {
      this._paymentTerms = new Element();
    }
    return this._paymentTerms;
  }

  setPaymentTermsElement(paymentTermsElement: Element | undefined): this {
    this._paymentTerms = paymentTermsElement;
    return this;
  }

  /** Comments made about the invoice (0..*) Never undefined; an empty list is created when absent. */
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
}

modelTypeRegistry.register('Invoice', Invoice, true);

/** True when the value is a Invoice model instance. */
export function isInvoice(candidate: unknown): candidate is Invoice {
  return candidate instanceof Invoice;
}

/**
 * Participant in creation of this Invoice
 */
export class InvoiceParticipant extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'role',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'role', typeCode: 'CodeableConcept' }],
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
  ];

  /** Type of involvement in creation of this Invoice (0..1) */
  role?: CodeableConcept;

  /** Individual who was involved (1..1) */
  actor?: Reference;

  override fhirType(): string {
    return 'Invoice.participant';
  }

  /** FHIR JSON for this InvoiceParticipant, typed as the plain `InvoiceParticipant` data type. */
  override toJSON(): plainTypes.InvoiceParticipant {
    return this.serialize() as plainTypes.InvoiceParticipant;
  }

  /** Type of involvement in creation of this Invoice (0..1) Created when absent. */
  getRole(): CodeableConcept {
    if (this.role === undefined) {
      this.role = new CodeableConcept();
    }
    return this.role;
  }

  setRole(role: CodeableConcept | undefined): this {
    return this.setFieldValue('role', role);
  }

  hasRole(): boolean {
    return this.hasFieldValue('role');
  }

  /** Individual who was involved (1..1) Created when absent. */
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
}

modelTypeRegistry.register('InvoiceParticipant', InvoiceParticipant, false);

/**
 * Line items of this Invoice
 */
export class InvoiceLineItem extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'sequence',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sequence', typeCode: 'positiveInt' }],
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
      elementName: 'chargeItem',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'chargeItemReference',
          typeCode: 'Reference',
          targetResourceTypes: ['ChargeItem'],
        },
        { jsonKey: 'chargeItemCodeableConcept', typeCode: 'CodeableConcept' },
      ],
    },
    {
      elementName: 'priceComponent',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'priceComponent', typeCode: 'MonetaryComponent' }],
    },
  ];

  /** Sequence number of line item (0..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;

  /** Service data or period (0..1) */
  servicedDate?: string;
  /** Id and extensions of the primitive `servicedDate`. */
  _servicedDate?: Element;
  /** Service data or period (0..1) */
  servicedPeriod?: Period;

  /** Reference to ChargeItem containing details of this line item or an inline billing code (1..1) */
  chargeItemReference?: Reference;
  /** Reference to ChargeItem containing details of this line item or an inline billing code (1..1) */
  chargeItemCodeableConcept?: CodeableConcept;

  /** Components of total line item price (0..*) */
  priceComponent?: MonetaryComponent[];

  override fhirType(): string {
    return 'Invoice.lineItem';
  }

  /** FHIR JSON for this InvoiceLineItem, typed as the plain `InvoiceLineItem` data type. */
  override toJSON(): plainTypes.InvoiceLineItem {
    return this.serialize() as plainTypes.InvoiceLineItem;
  }

  /** Sequence number of line item (0..1) */
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

  /** Service data or period (0..1) Whichever type of `serviced[x]` is set. */
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

  /** Reference to ChargeItem containing details of this line item or an inline billing code (1..1) Whichever type of `chargeItem[x]` is set. */
  getChargeItem(): Reference | CodeableConcept | undefined {
    return this.getChoiceValue<Reference | CodeableConcept>('chargeItem');
  }

  /** True when any type of `chargeItem[x]` is set. */
  hasChargeItem(): boolean {
    return this.hasChoiceValue('chargeItem');
  }

  getChargeItemReference(): Reference | undefined {
    return this.chargeItemReference;
  }

  /** Sets `chargeItem[x]` as Reference and clears every other type of it. */
  setChargeItemReference(chargeItemReference: Reference | undefined): this {
    return this.setFieldValue('chargeItemReference', chargeItemReference);
  }

  hasChargeItemReference(): boolean {
    return this.hasFieldValue('chargeItemReference');
  }

  getChargeItemCodeableConcept(): CodeableConcept | undefined {
    return this.chargeItemCodeableConcept;
  }

  /** Sets `chargeItem[x]` as CodeableConcept and clears every other type of it. */
  setChargeItemCodeableConcept(chargeItemCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('chargeItemCodeableConcept', chargeItemCodeableConcept);
  }

  hasChargeItemCodeableConcept(): boolean {
    return this.hasFieldValue('chargeItemCodeableConcept');
  }

  /** Components of total line item price (0..*) Never undefined; an empty list is created when absent. */
  getPriceComponent(): MonetaryComponent[] {
    if (this.priceComponent === undefined) {
      this.priceComponent = [];
    }
    return this.priceComponent;
  }

  setPriceComponent(priceComponent: MonetaryComponent[] | undefined): this {
    return this.setFieldValue('priceComponent', priceComponent);
  }

  hasPriceComponent(): boolean {
    return this.hasFieldValue('priceComponent');
  }

  /** Appends a new, empty MonetaryComponent to `priceComponent` and returns it so it can be filled in. */
  addPriceComponent(): MonetaryComponent;
  /** Appends the given MonetaryComponent to `priceComponent` and returns this object for chaining. */
  addPriceComponent(monetaryComponent: MonetaryComponent): this;
  addPriceComponent(monetaryComponent?: MonetaryComponent): MonetaryComponent | this {
    if (monetaryComponent !== undefined) {
      return this.addFieldValue('priceComponent', monetaryComponent);
    }
    const createdMonetaryComponent = new MonetaryComponent();
    this.addFieldValue('priceComponent', createdMonetaryComponent);
    return createdMonetaryComponent;
  }

  /** The first MonetaryComponent of `priceComponent`. One is added when the list is empty. */
  getPriceComponentFirstRep(): MonetaryComponent {
    const firstMonetaryComponent = this.getPriceComponent()[0];
    return firstMonetaryComponent === undefined ? this.addPriceComponent() : firstMonetaryComponent;
  }
}

modelTypeRegistry.register('InvoiceLineItem', InvoiceLineItem, false);
