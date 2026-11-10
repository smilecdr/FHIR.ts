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
import { Period } from './period';
import { Quantity } from './quantity';
import { Reference } from './reference';
import { Timing } from './timing';

/**
 * The resource ChargeItem describes the provision of healthcare provider products for a certain patient, therefore referring not only to the product, but containing in addition details of the provision, like date, time, amounts and participating organizations and persons. Main Usage of the ChargeItem is to enable the billing process and internal cost allocation.
 */
export class ChargeItem extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'definitionUri',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'definitionUri', typeCode: 'uri' }],
    },
    {
      elementName: 'definitionCanonical',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'definitionCanonical', typeCode: 'canonical' }],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.ChargeItemStatus },
      ],
    },
    {
      elementName: 'partOf',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'partOf', typeCode: 'Reference', targetResourceTypes: ['ChargeItem'] }],
    },
    {
      elementName: 'code',
      minimum: 1,
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
      elementName: 'occurrence',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'occurrenceDateTime', typeCode: 'dateTime' },
        { jsonKey: 'occurrencePeriod', typeCode: 'Period' },
        { jsonKey: 'occurrenceTiming', typeCode: 'Timing' },
      ],
    },
    {
      elementName: 'performer',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'performer', typeCode: 'ChargeItemPerformer' }],
    },
    {
      elementName: 'performingOrganization',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'performingOrganization',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization'],
        },
      ],
    },
    {
      elementName: 'requestingOrganization',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'requestingOrganization',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization'],
        },
      ],
    },
    {
      elementName: 'costCenter',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'costCenter', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
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
      elementName: 'bodysite',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'bodysite', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'factorOverride',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'factorOverride', typeCode: 'decimal' }],
    },
    {
      elementName: 'priceOverride',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'priceOverride', typeCode: 'Money' }],
    },
    {
      elementName: 'overrideReason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'overrideReason', typeCode: 'string' }],
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
      elementName: 'enteredDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'enteredDate', typeCode: 'dateTime' }],
    },
    {
      elementName: 'reason',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reason', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'service',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'service',
          typeCode: 'Reference',
          targetResourceTypes: [
            'DiagnosticReport',
            'ImagingStudy',
            'Immunization',
            'MedicationAdministration',
            'MedicationDispense',
            'Observation',
            'Procedure',
            'SupplyDelivery',
          ],
        },
      ],
    },
    {
      elementName: 'product',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'productReference',
          typeCode: 'Reference',
          targetResourceTypes: ['Device', 'Medication', 'Substance'],
        },
        { jsonKey: 'productCodeableConcept', typeCode: 'CodeableConcept' },
      ],
    },
    {
      elementName: 'account',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'account', typeCode: 'Reference', targetResourceTypes: ['Account'] }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
    {
      elementName: 'supportingInformation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'supportingInformation', typeCode: 'Reference' }],
    },
  ];

  readonly resourceType = 'ChargeItem';

  /** Business Identifier for item (0..*) */
  identifier?: Identifier[];

  /** Defining information about the code of this charge item (0..*) */
  definitionUri?: string[];
  /** Id and extensions of the primitive `definitionUri`. */
  _definitionUri?: (Element | null)[];

  /** Resource defining the code of this ChargeItem (0..*) */
  definitionCanonical?: string[];
  /** Id and extensions of the primitive `definitionCanonical`. */
  _definitionCanonical?: (Element | null)[];

  /** planned | billable | not-billable | aborted | billed | entered-in-error | unknown (1..1) */
  status?: valueSetCodes.ChargeItemStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Part of referenced ChargeItem (0..*) */
  partOf?: Reference[];

  /** A code that identifies the charge, like a billing code (1..1) */
  code?: CodeableConcept;

  /** Individual service was done for/to (1..1) */
  subject?: Reference;

  /** Encounter / Episode associated with event (0..1) */
  context?: Reference;

  /** When the charged service was applied (0..1) */
  occurrenceDateTime?: string;
  /** Id and extensions of the primitive `occurrenceDateTime`. */
  _occurrenceDateTime?: Element;
  /** When the charged service was applied (0..1) */
  occurrencePeriod?: Period;
  /** When the charged service was applied (0..1) */
  occurrenceTiming?: Timing;

  /** Who performed charged service (0..*) */
  performer?: ChargeItemPerformer[];

  /** Organization providing the charged service (0..1) */
  performingOrganization?: Reference;

  /** Organization requesting the charged service (0..1) */
  requestingOrganization?: Reference;

  /** Organization that has ownership of the (potential, future) revenue (0..1) */
  costCenter?: Reference;

  /** Quantity of which the charge item has been serviced (0..1) */
  quantity?: Quantity;

  /** Anatomical location, if relevant (0..*) */
  bodysite?: CodeableConcept[];

  /** Factor overriding the associated rules (0..1) */
  factorOverride?: number;
  /** Id and extensions of the primitive `factorOverride`. */
  _factorOverride?: Element;

  /** Price overriding the associated rules (0..1) */
  priceOverride?: Money;

  /** Reason for overriding the list price/factor (0..1) */
  overrideReason?: string;
  /** Id and extensions of the primitive `overrideReason`. */
  _overrideReason?: Element;

  /** Individual who was entering (0..1) */
  enterer?: Reference;

  /** Date the charge item was entered (0..1) */
  enteredDate?: string;
  /** Id and extensions of the primitive `enteredDate`. */
  _enteredDate?: Element;

  /** Why was the charged service rendered? (0..*) */
  reason?: CodeableConcept[];

  /** Which rendered service is being charged? (0..*) */
  service?: Reference[];

  /** Product charged (0..1) */
  productReference?: Reference;
  /** Product charged (0..1) */
  productCodeableConcept?: CodeableConcept;

  /** Account to place this charge (0..*) */
  account?: Reference[];

  /** Comments made about the ChargeItem (0..*) */
  note?: Annotation[];

  /** Further information supporting this charge (0..*) */
  supportingInformation?: Reference[];

  override fhirType(): string {
    return 'ChargeItem';
  }

  /** FHIR JSON for this ChargeItem, typed as the plain `ChargeItem` data type. */
  override toJSON(): plainTypes.ChargeItem {
    return this.serialize() as plainTypes.ChargeItem;
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

  /** Defining information about the code of this charge item (0..*) Never undefined; an empty list is created when absent. */
  getDefinitionUri(): string[] {
    if (this.definitionUri === undefined) {
      this.definitionUri = [];
    }
    return this.definitionUri;
  }

  setDefinitionUri(definitionUri: string[] | undefined): this {
    return this.setFieldValue('definitionUri', definitionUri);
  }

  hasDefinitionUri(): boolean {
    return this.hasFieldValue('definitionUri');
  }

  /** Appends one value to `definitionUri`. Throws a FhirModelError when it is not a valid FHIR uri. */
  addDefinitionUri(definitionUri: string): this {
    return this.addFieldValue('definitionUri', definitionUri);
  }

  /** Resource defining the code of this ChargeItem (0..*) Never undefined; an empty list is created when absent. */
  getDefinitionCanonical(): string[] {
    if (this.definitionCanonical === undefined) {
      this.definitionCanonical = [];
    }
    return this.definitionCanonical;
  }

  setDefinitionCanonical(definitionCanonical: string[] | undefined): this {
    return this.setFieldValue('definitionCanonical', definitionCanonical);
  }

  hasDefinitionCanonical(): boolean {
    return this.hasFieldValue('definitionCanonical');
  }

  /** Appends one value to `definitionCanonical`. Throws a FhirModelError when it is not a valid FHIR canonical. */
  addDefinitionCanonical(definitionCanonical: string): this {
    return this.addFieldValue('definitionCanonical', definitionCanonical);
  }

  /** planned | billable | not-billable | aborted | billed | entered-in-error | unknown (1..1) */
  getStatus(): valueSetCodes.ChargeItemStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.ChargeItemStatus | undefined): this {
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

  /** Part of referenced ChargeItem (0..*) Never undefined; an empty list is created when absent. */
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

  /** A code that identifies the charge, like a billing code (1..1) Created when absent. */
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

  /** Individual service was done for/to (1..1) Created when absent. */
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

  /** Encounter / Episode associated with event (0..1) Created when absent. */
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

  /** When the charged service was applied (0..1) Whichever type of `occurrence[x]` is set. */
  getOccurrence(): string | Period | Timing | undefined {
    return this.getChoiceValue<string | Period | Timing>('occurrence');
  }

  /** True when any type of `occurrence[x]` is set. */
  hasOccurrence(): boolean {
    return this.hasChoiceValue('occurrence');
  }

  getOccurrenceDateTime(): string | undefined {
    return this.occurrenceDateTime;
  }

  /** Sets `occurrence[x]` as dateTime and clears every other type of it. */
  setOccurrenceDateTime(occurrenceDateTime: string | undefined): this {
    return this.setFieldValue('occurrenceDateTime', occurrenceDateTime);
  }

  hasOccurrenceDateTime(): boolean {
    return this.hasFieldValue('occurrenceDateTime');
  }

  getOccurrencePeriod(): Period | undefined {
    return this.occurrencePeriod;
  }

  /** Sets `occurrence[x]` as Period and clears every other type of it. */
  setOccurrencePeriod(occurrencePeriod: Period | undefined): this {
    return this.setFieldValue('occurrencePeriod', occurrencePeriod);
  }

  hasOccurrencePeriod(): boolean {
    return this.hasFieldValue('occurrencePeriod');
  }

  getOccurrenceTiming(): Timing | undefined {
    return this.occurrenceTiming;
  }

  /** Sets `occurrence[x]` as Timing and clears every other type of it. */
  setOccurrenceTiming(occurrenceTiming: Timing | undefined): this {
    return this.setFieldValue('occurrenceTiming', occurrenceTiming);
  }

  hasOccurrenceTiming(): boolean {
    return this.hasFieldValue('occurrenceTiming');
  }

  /** Who performed charged service (0..*) Never undefined; an empty list is created when absent. */
  getPerformer(): ChargeItemPerformer[] {
    if (this.performer === undefined) {
      this.performer = [];
    }
    return this.performer;
  }

  setPerformer(performer: ChargeItemPerformer[] | undefined): this {
    return this.setFieldValue('performer', performer);
  }

  hasPerformer(): boolean {
    return this.hasFieldValue('performer');
  }

  /** Appends a new, empty ChargeItemPerformer to `performer` and returns it so it can be filled in. */
  addPerformer(): ChargeItemPerformer;
  /** Appends the given ChargeItemPerformer to `performer` and returns this object for chaining. */
  addPerformer(chargeItemPerformer: ChargeItemPerformer): this;
  addPerformer(chargeItemPerformer?: ChargeItemPerformer): ChargeItemPerformer | this {
    if (chargeItemPerformer !== undefined) {
      return this.addFieldValue('performer', chargeItemPerformer);
    }
    const createdChargeItemPerformer = new ChargeItemPerformer();
    this.addFieldValue('performer', createdChargeItemPerformer);
    return createdChargeItemPerformer;
  }

  /** The first ChargeItemPerformer of `performer`. One is added when the list is empty. */
  getPerformerFirstRep(): ChargeItemPerformer {
    const firstChargeItemPerformer = this.getPerformer()[0];
    return firstChargeItemPerformer === undefined ? this.addPerformer() : firstChargeItemPerformer;
  }

  /** Organization providing the charged service (0..1) Created when absent. */
  getPerformingOrganization(): Reference {
    if (this.performingOrganization === undefined) {
      this.performingOrganization = new Reference();
    }
    return this.performingOrganization;
  }

  setPerformingOrganization(performingOrganization: Reference | undefined): this {
    return this.setFieldValue('performingOrganization', performingOrganization);
  }

  hasPerformingOrganization(): boolean {
    return this.hasFieldValue('performingOrganization');
  }

  /** Organization requesting the charged service (0..1) Created when absent. */
  getRequestingOrganization(): Reference {
    if (this.requestingOrganization === undefined) {
      this.requestingOrganization = new Reference();
    }
    return this.requestingOrganization;
  }

  setRequestingOrganization(requestingOrganization: Reference | undefined): this {
    return this.setFieldValue('requestingOrganization', requestingOrganization);
  }

  hasRequestingOrganization(): boolean {
    return this.hasFieldValue('requestingOrganization');
  }

  /** Organization that has ownership of the (potential, future) revenue (0..1) Created when absent. */
  getCostCenter(): Reference {
    if (this.costCenter === undefined) {
      this.costCenter = new Reference();
    }
    return this.costCenter;
  }

  setCostCenter(costCenter: Reference | undefined): this {
    return this.setFieldValue('costCenter', costCenter);
  }

  hasCostCenter(): boolean {
    return this.hasFieldValue('costCenter');
  }

  /** Quantity of which the charge item has been serviced (0..1) Created when absent. */
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

  /** Anatomical location, if relevant (0..*) Never undefined; an empty list is created when absent. */
  getBodysite(): CodeableConcept[] {
    if (this.bodysite === undefined) {
      this.bodysite = [];
    }
    return this.bodysite;
  }

  setBodysite(bodysite: CodeableConcept[] | undefined): this {
    return this.setFieldValue('bodysite', bodysite);
  }

  hasBodysite(): boolean {
    return this.hasFieldValue('bodysite');
  }

  /** Appends a new, empty CodeableConcept to `bodysite` and returns it so it can be filled in. */
  addBodysite(): CodeableConcept;
  /** Appends the given CodeableConcept to `bodysite` and returns this object for chaining. */
  addBodysite(codeableConcept: CodeableConcept): this;
  addBodysite(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('bodysite', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('bodysite', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `bodysite`. One is added when the list is empty. */
  getBodysiteFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getBodysite()[0];
    return firstCodeableConcept === undefined ? this.addBodysite() : firstCodeableConcept;
  }

  /** Factor overriding the associated rules (0..1) */
  getFactorOverride(): number | undefined {
    return this.factorOverride;
  }

  /** Sets `factorOverride`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setFactorOverride(factorOverride: number | undefined): this {
    return this.setFieldValue('factorOverride', factorOverride);
  }

  hasFactorOverride(): boolean {
    return this.hasFieldValue('factorOverride');
  }

  /** The element carrying the id and extensions of `factorOverride`. Created when absent. */
  getFactorOverrideElement(): Element {
    if (this._factorOverride === undefined) {
      this._factorOverride = new Element();
    }
    return this._factorOverride;
  }

  setFactorOverrideElement(factorOverrideElement: Element | undefined): this {
    this._factorOverride = factorOverrideElement;
    return this;
  }

  /** Price overriding the associated rules (0..1) Created when absent. */
  getPriceOverride(): Money {
    if (this.priceOverride === undefined) {
      this.priceOverride = new Money();
    }
    return this.priceOverride;
  }

  setPriceOverride(priceOverride: Money | undefined): this {
    return this.setFieldValue('priceOverride', priceOverride);
  }

  hasPriceOverride(): boolean {
    return this.hasFieldValue('priceOverride');
  }

  /** Reason for overriding the list price/factor (0..1) */
  getOverrideReason(): string | undefined {
    return this.overrideReason;
  }

  /** Sets `overrideReason`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setOverrideReason(overrideReason: string | undefined): this {
    return this.setFieldValue('overrideReason', overrideReason);
  }

  hasOverrideReason(): boolean {
    return this.hasFieldValue('overrideReason');
  }

  /** The element carrying the id and extensions of `overrideReason`. Created when absent. */
  getOverrideReasonElement(): Element {
    if (this._overrideReason === undefined) {
      this._overrideReason = new Element();
    }
    return this._overrideReason;
  }

  setOverrideReasonElement(overrideReasonElement: Element | undefined): this {
    this._overrideReason = overrideReasonElement;
    return this;
  }

  /** Individual who was entering (0..1) Created when absent. */
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

  /** Date the charge item was entered (0..1) */
  getEnteredDate(): string | undefined {
    return this.enteredDate;
  }

  /** Sets `enteredDate`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setEnteredDate(enteredDate: string | undefined): this {
    return this.setFieldValue('enteredDate', enteredDate);
  }

  hasEnteredDate(): boolean {
    return this.hasFieldValue('enteredDate');
  }

  /** The element carrying the id and extensions of `enteredDate`. Created when absent. */
  getEnteredDateElement(): Element {
    if (this._enteredDate === undefined) {
      this._enteredDate = new Element();
    }
    return this._enteredDate;
  }

  setEnteredDateElement(enteredDateElement: Element | undefined): this {
    this._enteredDate = enteredDateElement;
    return this;
  }

  /** Why was the charged service rendered? (0..*) Never undefined; an empty list is created when absent. */
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

  /** Which rendered service is being charged? (0..*) Never undefined; an empty list is created when absent. */
  getService(): Reference[] {
    if (this.service === undefined) {
      this.service = [];
    }
    return this.service;
  }

  setService(service: Reference[] | undefined): this {
    return this.setFieldValue('service', service);
  }

  hasService(): boolean {
    return this.hasFieldValue('service');
  }

  /** Appends a new, empty Reference to `service` and returns it so it can be filled in. */
  addService(): Reference;
  /** Appends the given Reference to `service` and returns this object for chaining. */
  addService(reference: Reference): this;
  addService(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('service', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('service', createdReference);
    return createdReference;
  }

  /** The first Reference of `service`. One is added when the list is empty. */
  getServiceFirstRep(): Reference {
    const firstReference = this.getService()[0];
    return firstReference === undefined ? this.addService() : firstReference;
  }

  /** Product charged (0..1) Whichever type of `product[x]` is set. */
  getProduct(): Reference | CodeableConcept | undefined {
    return this.getChoiceValue<Reference | CodeableConcept>('product');
  }

  /** True when any type of `product[x]` is set. */
  hasProduct(): boolean {
    return this.hasChoiceValue('product');
  }

  getProductReference(): Reference | undefined {
    return this.productReference;
  }

  /** Sets `product[x]` as Reference and clears every other type of it. */
  setProductReference(productReference: Reference | undefined): this {
    return this.setFieldValue('productReference', productReference);
  }

  hasProductReference(): boolean {
    return this.hasFieldValue('productReference');
  }

  getProductCodeableConcept(): CodeableConcept | undefined {
    return this.productCodeableConcept;
  }

  /** Sets `product[x]` as CodeableConcept and clears every other type of it. */
  setProductCodeableConcept(productCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('productCodeableConcept', productCodeableConcept);
  }

  hasProductCodeableConcept(): boolean {
    return this.hasFieldValue('productCodeableConcept');
  }

  /** Account to place this charge (0..*) Never undefined; an empty list is created when absent. */
  getAccount(): Reference[] {
    if (this.account === undefined) {
      this.account = [];
    }
    return this.account;
  }

  setAccount(account: Reference[] | undefined): this {
    return this.setFieldValue('account', account);
  }

  hasAccount(): boolean {
    return this.hasFieldValue('account');
  }

  /** Appends a new, empty Reference to `account` and returns it so it can be filled in. */
  addAccount(): Reference;
  /** Appends the given Reference to `account` and returns this object for chaining. */
  addAccount(reference: Reference): this;
  addAccount(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('account', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('account', createdReference);
    return createdReference;
  }

  /** The first Reference of `account`. One is added when the list is empty. */
  getAccountFirstRep(): Reference {
    const firstReference = this.getAccount()[0];
    return firstReference === undefined ? this.addAccount() : firstReference;
  }

  /** Comments made about the ChargeItem (0..*) Never undefined; an empty list is created when absent. */
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

  /** Further information supporting this charge (0..*) Never undefined; an empty list is created when absent. */
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
}

modelTypeRegistry.register('ChargeItem', ChargeItem, true);

/** True when the value is a ChargeItem model instance. */
export function isChargeItem(candidate: unknown): candidate is ChargeItem {
  return candidate instanceof ChargeItem;
}

/**
 * Who performed charged service
 */
export class ChargeItemPerformer extends BackboneElement {
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
            'CareTeam',
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

  /** What type of performance was done (0..1) */
  function?: CodeableConcept;

  /** Individual who was performing (1..1) */
  actor?: Reference;

  override fhirType(): string {
    return 'ChargeItem.performer';
  }

  /** FHIR JSON for this ChargeItemPerformer, typed as the plain `ChargeItemPerformer` data type. */
  override toJSON(): plainTypes.ChargeItemPerformer {
    return this.serialize() as plainTypes.ChargeItemPerformer;
  }

  /** What type of performance was done (0..1) Created when absent. */
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

  /** Individual who was performing (1..1) Created when absent. */
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

modelTypeRegistry.register('ChargeItemPerformer', ChargeItemPerformer, false);
