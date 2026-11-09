/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { Annotation } from './annotation';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Money } from './money';
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
      types: [{ jsonKey: 'totalPriceComponent', typeCode: 'InvoiceLineItemPriceComponent' }],
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

  /** Invoice date / posting date (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Participant in creation of this Invoice (0..*) */
  participant?: InvoiceParticipant[];

  /** Issuing Organization of Invoice (0..1) */
  issuer?: Reference;

  /** Account that is being balanced (0..1) */
  account?: Reference;

  /** Line items of this Invoice (0..*) */
  lineItem?: InvoiceLineItem[];

  /** Components of Invoice total (0..*) */
  totalPriceComponent?: InvoiceLineItemPriceComponent[];

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

  /** Invoice date / posting date (0..1) */
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
  getTotalPriceComponent(): InvoiceLineItemPriceComponent[] {
    if (this.totalPriceComponent === undefined) {
      this.totalPriceComponent = [];
    }
    return this.totalPriceComponent;
  }

  setTotalPriceComponent(totalPriceComponent: InvoiceLineItemPriceComponent[] | undefined): this {
    return this.setFieldValue('totalPriceComponent', totalPriceComponent);
  }

  hasTotalPriceComponent(): boolean {
    return this.hasFieldValue('totalPriceComponent');
  }

  /** Appends a new, empty InvoiceLineItemPriceComponent to `totalPriceComponent` and returns it so it can be filled in. */
  addTotalPriceComponent(): InvoiceLineItemPriceComponent;
  /** Appends the given InvoiceLineItemPriceComponent to `totalPriceComponent` and returns this object for chaining. */
  addTotalPriceComponent(invoiceLineItemPriceComponent: InvoiceLineItemPriceComponent): this;
  addTotalPriceComponent(
    invoiceLineItemPriceComponent?: InvoiceLineItemPriceComponent
  ): InvoiceLineItemPriceComponent | this {
    if (invoiceLineItemPriceComponent !== undefined) {
      return this.addFieldValue('totalPriceComponent', invoiceLineItemPriceComponent);
    }
    const createdInvoiceLineItemPriceComponent = new InvoiceLineItemPriceComponent();
    this.addFieldValue('totalPriceComponent', createdInvoiceLineItemPriceComponent);
    return createdInvoiceLineItemPriceComponent;
  }

  /** The first InvoiceLineItemPriceComponent of `totalPriceComponent`. One is added when the list is empty. */
  getTotalPriceComponentFirstRep(): InvoiceLineItemPriceComponent {
    const firstInvoiceLineItemPriceComponent = this.getTotalPriceComponent()[0];
    return firstInvoiceLineItemPriceComponent === undefined
      ? this.addTotalPriceComponent()
      : firstInvoiceLineItemPriceComponent;
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
      types: [{ jsonKey: 'priceComponent', typeCode: 'InvoiceLineItemPriceComponent' }],
    },
  ];

  /** Sequence number of line item (0..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;

  /** Reference to ChargeItem containing details of this line item or an inline billing code (1..1) */
  chargeItemReference?: Reference;
  /** Reference to ChargeItem containing details of this line item or an inline billing code (1..1) */
  chargeItemCodeableConcept?: CodeableConcept;

  /** Components of total line item price (0..*) */
  priceComponent?: InvoiceLineItemPriceComponent[];

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
  getPriceComponent(): InvoiceLineItemPriceComponent[] {
    if (this.priceComponent === undefined) {
      this.priceComponent = [];
    }
    return this.priceComponent;
  }

  setPriceComponent(priceComponent: InvoiceLineItemPriceComponent[] | undefined): this {
    return this.setFieldValue('priceComponent', priceComponent);
  }

  hasPriceComponent(): boolean {
    return this.hasFieldValue('priceComponent');
  }

  /** Appends a new, empty InvoiceLineItemPriceComponent to `priceComponent` and returns it so it can be filled in. */
  addPriceComponent(): InvoiceLineItemPriceComponent;
  /** Appends the given InvoiceLineItemPriceComponent to `priceComponent` and returns this object for chaining. */
  addPriceComponent(invoiceLineItemPriceComponent: InvoiceLineItemPriceComponent): this;
  addPriceComponent(
    invoiceLineItemPriceComponent?: InvoiceLineItemPriceComponent
  ): InvoiceLineItemPriceComponent | this {
    if (invoiceLineItemPriceComponent !== undefined) {
      return this.addFieldValue('priceComponent', invoiceLineItemPriceComponent);
    }
    const createdInvoiceLineItemPriceComponent = new InvoiceLineItemPriceComponent();
    this.addFieldValue('priceComponent', createdInvoiceLineItemPriceComponent);
    return createdInvoiceLineItemPriceComponent;
  }

  /** The first InvoiceLineItemPriceComponent of `priceComponent`. One is added when the list is empty. */
  getPriceComponentFirstRep(): InvoiceLineItemPriceComponent {
    const firstInvoiceLineItemPriceComponent = this.getPriceComponent()[0];
    return firstInvoiceLineItemPriceComponent === undefined
      ? this.addPriceComponent()
      : firstInvoiceLineItemPriceComponent;
  }
}

modelTypeRegistry.register('InvoiceLineItem', InvoiceLineItem, false);

/**
 * Components of total line item price
 */
export class InvoiceLineItemPriceComponent extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'type',
          typeCode: 'code',
          allowedCodes: valueSetCodes.InvoicePriceComponentType,
        },
      ],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'factor',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'factor', typeCode: 'decimal' }],
    },
    {
      elementName: 'amount',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'amount', typeCode: 'Money' }],
    },
  ];

  /** base | surcharge | deduction | discount | tax | informational (1..1) */
  type?: valueSetCodes.InvoicePriceComponentType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Code identifying the specific component (0..1) */
  code?: CodeableConcept;

  /** Factor used for calculating this component (0..1) */
  factor?: number;
  /** Id and extensions of the primitive `factor`. */
  _factor?: Element;

  /** Monetary amount associated with this component (0..1) */
  amount?: Money;

  override fhirType(): string {
    return 'Invoice.lineItem.priceComponent';
  }

  /** FHIR JSON for this InvoiceLineItemPriceComponent, typed as the plain `InvoicePriceComponent` data type. */
  override toJSON(): plainTypes.InvoicePriceComponent {
    return this.serialize() as plainTypes.InvoicePriceComponent;
  }

  /** base | surcharge | deduction | discount | tax | informational (1..1) */
  getType(): valueSetCodes.InvoicePriceComponentType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.InvoicePriceComponentType | undefined): this {
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

  /** Code identifying the specific component (0..1) Created when absent. */
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

  /** Factor used for calculating this component (0..1) */
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

  /** Monetary amount associated with this component (0..1) Created when absent. */
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

modelTypeRegistry.register('InvoiceLineItemPriceComponent', InvoiceLineItemPriceComponent, false);
