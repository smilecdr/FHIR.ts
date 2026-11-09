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
import { Quantity } from './quantity';
import { Reference } from './reference';

/**
 * The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.
 */
export class CoverageEligibilityRequest extends DomainResource {
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
      elementName: 'priority',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'priority', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'purpose',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'purpose',
          typeCode: 'code',
          allowedCodes: valueSetCodes.EligibilityRequestPurpose,
        },
      ],
    },
    {
      elementName: 'patient',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'patient', typeCode: 'Reference', targetResourceTypes: ['Patient'] }],
    },
    {
      elementName: 'event',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'event', typeCode: 'CoverageEligibilityRequestEvent' }],
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
          targetResourceTypes: ['Practitioner', 'PractitionerRole'],
        },
      ],
    },
    {
      elementName: 'provider',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'provider',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Practitioner', 'PractitionerRole'],
        },
      ],
    },
    {
      elementName: 'insurer',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'insurer', typeCode: 'Reference', targetResourceTypes: ['Organization'] }],
    },
    {
      elementName: 'facility',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'facility', typeCode: 'Reference', targetResourceTypes: ['Location'] }],
    },
    {
      elementName: 'supportingInfo',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'supportingInfo', typeCode: 'CoverageEligibilityRequestSupportingInfo' }],
    },
    {
      elementName: 'insurance',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'insurance', typeCode: 'CoverageEligibilityRequestInsurance' }],
    },
    {
      elementName: 'item',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'item', typeCode: 'CoverageEligibilityRequestItem' }],
    },
  ];

  readonly resourceType = 'CoverageEligibilityRequest';

  /** Business Identifier for coverage eligiblity request (0..*) */
  identifier?: Identifier[];

  /** active | cancelled | draft | entered-in-error (1..1) */
  status?: valueSetCodes.FinancialResourceStatusCodes;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Desired processing priority (0..1) */
  priority?: CodeableConcept;

  /** auth-requirements | benefits | discovery | validation (1..*) */
  purpose?: valueSetCodes.EligibilityRequestPurpose[];
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: (Element | null)[];

  /** Intended recipient of products and services (1..1) */
  patient?: Reference;

  /** Event information (0..*) */
  event?: CoverageEligibilityRequestEvent[];

  /** Estimated date or dates of service (0..1) */
  servicedDate?: string;
  /** Id and extensions of the primitive `servicedDate`. */
  _servicedDate?: Element;
  /** Estimated date or dates of service (0..1) */
  servicedPeriod?: Period;

  /** Creation date (1..1) */
  created?: string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;

  /** Author (0..1) */
  enterer?: Reference;

  /** Party responsible for the request (0..1) */
  provider?: Reference;

  /** Coverage issuer (1..1) */
  insurer?: Reference;

  /** Servicing facility (0..1) */
  facility?: Reference;

  /** Supporting information (0..*) */
  supportingInfo?: CoverageEligibilityRequestSupportingInfo[];

  /** Patient insurance information (0..*) */
  insurance?: CoverageEligibilityRequestInsurance[];

  /** Item to be evaluated for eligibiity (0..*) */
  item?: CoverageEligibilityRequestItem[];

  override fhirType(): string {
    return 'CoverageEligibilityRequest';
  }

  /** FHIR JSON for this CoverageEligibilityRequest, typed as the plain `CoverageEligibilityRequest` data type. */
  override toJSON(): plainTypes.CoverageEligibilityRequest {
    return this.serialize() as plainTypes.CoverageEligibilityRequest;
  }

  /** Business Identifier for coverage eligiblity request (0..*) Never undefined; an empty list is created when absent. */
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

  /** Desired processing priority (0..1) Created when absent. */
  getPriority(): CodeableConcept {
    if (this.priority === undefined) {
      this.priority = new CodeableConcept();
    }
    return this.priority;
  }

  setPriority(priority: CodeableConcept | undefined): this {
    return this.setFieldValue('priority', priority);
  }

  hasPriority(): boolean {
    return this.hasFieldValue('priority');
  }

  /** auth-requirements | benefits | discovery | validation (1..*) Never undefined; an empty list is created when absent. */
  getPurpose(): valueSetCodes.EligibilityRequestPurpose[] {
    if (this.purpose === undefined) {
      this.purpose = [];
    }
    return this.purpose;
  }

  setPurpose(purpose: valueSetCodes.EligibilityRequestPurpose[] | undefined): this {
    return this.setFieldValue('purpose', purpose);
  }

  hasPurpose(): boolean {
    return this.hasFieldValue('purpose');
  }

  /** Appends one value to `purpose`. Throws a FhirModelError when it is not a valid FHIR code. */
  addPurpose(purpose: valueSetCodes.EligibilityRequestPurpose): this {
    return this.addFieldValue('purpose', purpose);
  }

  /** Intended recipient of products and services (1..1) Created when absent. */
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

  /** Event information (0..*) Never undefined; an empty list is created when absent. */
  getEvent(): CoverageEligibilityRequestEvent[] {
    if (this.event === undefined) {
      this.event = [];
    }
    return this.event;
  }

  setEvent(event: CoverageEligibilityRequestEvent[] | undefined): this {
    return this.setFieldValue('event', event);
  }

  hasEvent(): boolean {
    return this.hasFieldValue('event');
  }

  /** Appends a new, empty CoverageEligibilityRequestEvent to `event` and returns it so it can be filled in. */
  addEvent(): CoverageEligibilityRequestEvent;
  /** Appends the given CoverageEligibilityRequestEvent to `event` and returns this object for chaining. */
  addEvent(coverageEligibilityRequestEvent: CoverageEligibilityRequestEvent): this;
  addEvent(
    coverageEligibilityRequestEvent?: CoverageEligibilityRequestEvent
  ): CoverageEligibilityRequestEvent | this {
    if (coverageEligibilityRequestEvent !== undefined) {
      return this.addFieldValue('event', coverageEligibilityRequestEvent);
    }
    const createdCoverageEligibilityRequestEvent = new CoverageEligibilityRequestEvent();
    this.addFieldValue('event', createdCoverageEligibilityRequestEvent);
    return createdCoverageEligibilityRequestEvent;
  }

  /** The first CoverageEligibilityRequestEvent of `event`. One is added when the list is empty. */
  getEventFirstRep(): CoverageEligibilityRequestEvent {
    const firstCoverageEligibilityRequestEvent = this.getEvent()[0];
    return firstCoverageEligibilityRequestEvent === undefined
      ? this.addEvent()
      : firstCoverageEligibilityRequestEvent;
  }

  /** Estimated date or dates of service (0..1) Whichever type of `serviced[x]` is set. */
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

  /** Author (0..1) Created when absent. */
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

  /** Party responsible for the request (0..1) Created when absent. */
  getProvider(): Reference {
    if (this.provider === undefined) {
      this.provider = new Reference();
    }
    return this.provider;
  }

  setProvider(provider: Reference | undefined): this {
    return this.setFieldValue('provider', provider);
  }

  hasProvider(): boolean {
    return this.hasFieldValue('provider');
  }

  /** Coverage issuer (1..1) Created when absent. */
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

  /** Servicing facility (0..1) Created when absent. */
  getFacility(): Reference {
    if (this.facility === undefined) {
      this.facility = new Reference();
    }
    return this.facility;
  }

  setFacility(facility: Reference | undefined): this {
    return this.setFieldValue('facility', facility);
  }

  hasFacility(): boolean {
    return this.hasFieldValue('facility');
  }

  /** Supporting information (0..*) Never undefined; an empty list is created when absent. */
  getSupportingInfo(): CoverageEligibilityRequestSupportingInfo[] {
    if (this.supportingInfo === undefined) {
      this.supportingInfo = [];
    }
    return this.supportingInfo;
  }

  setSupportingInfo(supportingInfo: CoverageEligibilityRequestSupportingInfo[] | undefined): this {
    return this.setFieldValue('supportingInfo', supportingInfo);
  }

  hasSupportingInfo(): boolean {
    return this.hasFieldValue('supportingInfo');
  }

  /** Appends a new, empty CoverageEligibilityRequestSupportingInfo to `supportingInfo` and returns it so it can be filled in. */
  addSupportingInfo(): CoverageEligibilityRequestSupportingInfo;
  /** Appends the given CoverageEligibilityRequestSupportingInfo to `supportingInfo` and returns this object for chaining. */
  addSupportingInfo(
    coverageEligibilityRequestSupportingInfo: CoverageEligibilityRequestSupportingInfo
  ): this;
  addSupportingInfo(
    coverageEligibilityRequestSupportingInfo?: CoverageEligibilityRequestSupportingInfo
  ): CoverageEligibilityRequestSupportingInfo | this {
    if (coverageEligibilityRequestSupportingInfo !== undefined) {
      return this.addFieldValue('supportingInfo', coverageEligibilityRequestSupportingInfo);
    }
    const createdCoverageEligibilityRequestSupportingInfo =
      new CoverageEligibilityRequestSupportingInfo();
    this.addFieldValue('supportingInfo', createdCoverageEligibilityRequestSupportingInfo);
    return createdCoverageEligibilityRequestSupportingInfo;
  }

  /** The first CoverageEligibilityRequestSupportingInfo of `supportingInfo`. One is added when the list is empty. */
  getSupportingInfoFirstRep(): CoverageEligibilityRequestSupportingInfo {
    const firstCoverageEligibilityRequestSupportingInfo = this.getSupportingInfo()[0];
    return firstCoverageEligibilityRequestSupportingInfo === undefined
      ? this.addSupportingInfo()
      : firstCoverageEligibilityRequestSupportingInfo;
  }

  /** Patient insurance information (0..*) Never undefined; an empty list is created when absent. */
  getInsurance(): CoverageEligibilityRequestInsurance[] {
    if (this.insurance === undefined) {
      this.insurance = [];
    }
    return this.insurance;
  }

  setInsurance(insurance: CoverageEligibilityRequestInsurance[] | undefined): this {
    return this.setFieldValue('insurance', insurance);
  }

  hasInsurance(): boolean {
    return this.hasFieldValue('insurance');
  }

  /** Appends a new, empty CoverageEligibilityRequestInsurance to `insurance` and returns it so it can be filled in. */
  addInsurance(): CoverageEligibilityRequestInsurance;
  /** Appends the given CoverageEligibilityRequestInsurance to `insurance` and returns this object for chaining. */
  addInsurance(coverageEligibilityRequestInsurance: CoverageEligibilityRequestInsurance): this;
  addInsurance(
    coverageEligibilityRequestInsurance?: CoverageEligibilityRequestInsurance
  ): CoverageEligibilityRequestInsurance | this {
    if (coverageEligibilityRequestInsurance !== undefined) {
      return this.addFieldValue('insurance', coverageEligibilityRequestInsurance);
    }
    const createdCoverageEligibilityRequestInsurance = new CoverageEligibilityRequestInsurance();
    this.addFieldValue('insurance', createdCoverageEligibilityRequestInsurance);
    return createdCoverageEligibilityRequestInsurance;
  }

  /** The first CoverageEligibilityRequestInsurance of `insurance`. One is added when the list is empty. */
  getInsuranceFirstRep(): CoverageEligibilityRequestInsurance {
    const firstCoverageEligibilityRequestInsurance = this.getInsurance()[0];
    return firstCoverageEligibilityRequestInsurance === undefined
      ? this.addInsurance()
      : firstCoverageEligibilityRequestInsurance;
  }

  /** Item to be evaluated for eligibiity (0..*) Never undefined; an empty list is created when absent. */
  getItem(): CoverageEligibilityRequestItem[] {
    if (this.item === undefined) {
      this.item = [];
    }
    return this.item;
  }

  setItem(item: CoverageEligibilityRequestItem[] | undefined): this {
    return this.setFieldValue('item', item);
  }

  hasItem(): boolean {
    return this.hasFieldValue('item');
  }

  /** Appends a new, empty CoverageEligibilityRequestItem to `item` and returns it so it can be filled in. */
  addItem(): CoverageEligibilityRequestItem;
  /** Appends the given CoverageEligibilityRequestItem to `item` and returns this object for chaining. */
  addItem(coverageEligibilityRequestItem: CoverageEligibilityRequestItem): this;
  addItem(
    coverageEligibilityRequestItem?: CoverageEligibilityRequestItem
  ): CoverageEligibilityRequestItem | this {
    if (coverageEligibilityRequestItem !== undefined) {
      return this.addFieldValue('item', coverageEligibilityRequestItem);
    }
    const createdCoverageEligibilityRequestItem = new CoverageEligibilityRequestItem();
    this.addFieldValue('item', createdCoverageEligibilityRequestItem);
    return createdCoverageEligibilityRequestItem;
  }

  /** The first CoverageEligibilityRequestItem of `item`. One is added when the list is empty. */
  getItemFirstRep(): CoverageEligibilityRequestItem {
    const firstCoverageEligibilityRequestItem = this.getItem()[0];
    return firstCoverageEligibilityRequestItem === undefined
      ? this.addItem()
      : firstCoverageEligibilityRequestItem;
  }
}

modelTypeRegistry.register('CoverageEligibilityRequest', CoverageEligibilityRequest, true);

/** True when the value is a CoverageEligibilityRequest model instance. */
export function isCoverageEligibilityRequest(
  candidate: unknown
): candidate is CoverageEligibilityRequest {
  return candidate instanceof CoverageEligibilityRequest;
}

/**
 * Event information
 */
export class CoverageEligibilityRequestEvent extends BackboneElement {
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
    return 'CoverageEligibilityRequest.event';
  }

  /** FHIR JSON for this CoverageEligibilityRequestEvent, typed as the plain `CoverageEligibilityRequestEvent` data type. */
  override toJSON(): plainTypes.CoverageEligibilityRequestEvent {
    return this.serialize() as plainTypes.CoverageEligibilityRequestEvent;
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

modelTypeRegistry.register(
  'CoverageEligibilityRequestEvent',
  CoverageEligibilityRequestEvent,
  false
);

/**
 * Supporting information
 */
export class CoverageEligibilityRequestSupportingInfo extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'sequence',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sequence', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'information',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'information', typeCode: 'Reference' }],
    },
    {
      elementName: 'appliesToAll',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'appliesToAll', typeCode: 'boolean' }],
    },
  ];

  /** Information instance identifier (1..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;

  /** Data to be provided (1..1) */
  information?: Reference;

  /** Applies to all items (0..1) */
  appliesToAll?: boolean;
  /** Id and extensions of the primitive `appliesToAll`. */
  _appliesToAll?: Element;

  override fhirType(): string {
    return 'CoverageEligibilityRequest.supportingInfo';
  }

  /** FHIR JSON for this CoverageEligibilityRequestSupportingInfo, typed as the plain `CoverageEligibilityRequestSupportingInfo` data type. */
  override toJSON(): plainTypes.CoverageEligibilityRequestSupportingInfo {
    return this.serialize() as plainTypes.CoverageEligibilityRequestSupportingInfo;
  }

  /** Information instance identifier (1..1) */
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

  /** Data to be provided (1..1) Created when absent. */
  getInformation(): Reference {
    if (this.information === undefined) {
      this.information = new Reference();
    }
    return this.information;
  }

  setInformation(information: Reference | undefined): this {
    return this.setFieldValue('information', information);
  }

  hasInformation(): boolean {
    return this.hasFieldValue('information');
  }

  /** Applies to all items (0..1) */
  getAppliesToAll(): boolean | undefined {
    return this.appliesToAll;
  }

  /** Sets `appliesToAll`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setAppliesToAll(appliesToAll: boolean | undefined): this {
    return this.setFieldValue('appliesToAll', appliesToAll);
  }

  hasAppliesToAll(): boolean {
    return this.hasFieldValue('appliesToAll');
  }

  /** The element carrying the id and extensions of `appliesToAll`. Created when absent. */
  getAppliesToAllElement(): Element {
    if (this._appliesToAll === undefined) {
      this._appliesToAll = new Element();
    }
    return this._appliesToAll;
  }

  setAppliesToAllElement(appliesToAllElement: Element | undefined): this {
    this._appliesToAll = appliesToAllElement;
    return this;
  }
}

modelTypeRegistry.register(
  'CoverageEligibilityRequestSupportingInfo',
  CoverageEligibilityRequestSupportingInfo,
  false
);

/**
 * Patient insurance information
 */
export class CoverageEligibilityRequestInsurance extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'focal',
      minimum: 0,
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
  ];

  /** Applicable coverage (0..1) */
  focal?: boolean;
  /** Id and extensions of the primitive `focal`. */
  _focal?: Element;

  /** Insurance information (1..1) */
  coverage?: Reference;

  /** Additional provider contract number (0..1) */
  businessArrangement?: string;
  /** Id and extensions of the primitive `businessArrangement`. */
  _businessArrangement?: Element;

  override fhirType(): string {
    return 'CoverageEligibilityRequest.insurance';
  }

  /** FHIR JSON for this CoverageEligibilityRequestInsurance, typed as the plain `CoverageEligibilityRequestInsurance` data type. */
  override toJSON(): plainTypes.CoverageEligibilityRequestInsurance {
    return this.serialize() as plainTypes.CoverageEligibilityRequestInsurance;
  }

  /** Applicable coverage (0..1) */
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
}

modelTypeRegistry.register(
  'CoverageEligibilityRequestInsurance',
  CoverageEligibilityRequestInsurance,
  false
);

/**
 * Item to be evaluated for eligibiity
 */
export class CoverageEligibilityRequestItem extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'supportingInfoSequence',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'supportingInfoSequence', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'category',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'productOrService',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'productOrService', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'modifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'modifier', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'provider',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'provider',
          typeCode: 'Reference',
          targetResourceTypes: ['Practitioner', 'PractitionerRole'],
        },
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
      elementName: 'facility',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'facility',
          typeCode: 'Reference',
          targetResourceTypes: ['Location', 'Organization'],
        },
      ],
    },
    {
      elementName: 'diagnosis',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'diagnosis', typeCode: 'CoverageEligibilityRequestItemDiagnosis' }],
    },
    {
      elementName: 'detail',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'detail', typeCode: 'Reference' }],
    },
  ];

  /** Applicable exception or supporting information (0..*) */
  supportingInfoSequence?: number[];
  /** Id and extensions of the primitive `supportingInfoSequence`. */
  _supportingInfoSequence?: (Element | null)[];

  /** Benefit classification (0..1) */
  category?: CodeableConcept;

  /** Billing, service, product, or drug code (0..1) */
  productOrService?: CodeableConcept;

  /** Product or service billing modifiers (0..*) */
  modifier?: CodeableConcept[];

  /** Perfoming practitioner (0..1) */
  provider?: Reference;

  /** Count of products or services (0..1) */
  quantity?: Quantity;

  /** Fee, charge or cost per item (0..1) */
  unitPrice?: Money;

  /** Servicing facility (0..1) */
  facility?: Reference;

  /** Applicable diagnosis (0..*) */
  diagnosis?: CoverageEligibilityRequestItemDiagnosis[];

  /** Product or service details (0..*) */
  detail?: Reference[];

  override fhirType(): string {
    return 'CoverageEligibilityRequest.item';
  }

  /** FHIR JSON for this CoverageEligibilityRequestItem, typed as the plain `CoverageEligibilityRequestItem` data type. */
  override toJSON(): plainTypes.CoverageEligibilityRequestItem {
    return this.serialize() as plainTypes.CoverageEligibilityRequestItem;
  }

  /** Applicable exception or supporting information (0..*) Never undefined; an empty list is created when absent. */
  getSupportingInfoSequence(): number[] {
    if (this.supportingInfoSequence === undefined) {
      this.supportingInfoSequence = [];
    }
    return this.supportingInfoSequence;
  }

  setSupportingInfoSequence(supportingInfoSequence: number[] | undefined): this {
    return this.setFieldValue('supportingInfoSequence', supportingInfoSequence);
  }

  hasSupportingInfoSequence(): boolean {
    return this.hasFieldValue('supportingInfoSequence');
  }

  /** Appends one value to `supportingInfoSequence`. Throws a FhirModelError when it is not a valid FHIR positiveInt. */
  addSupportingInfoSequence(supportingInfoSequence: number): this {
    return this.addFieldValue('supportingInfoSequence', supportingInfoSequence);
  }

  /** Benefit classification (0..1) Created when absent. */
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

  /** Product or service billing modifiers (0..*) Never undefined; an empty list is created when absent. */
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

  /** Perfoming practitioner (0..1) Created when absent. */
  getProvider(): Reference {
    if (this.provider === undefined) {
      this.provider = new Reference();
    }
    return this.provider;
  }

  setProvider(provider: Reference | undefined): this {
    return this.setFieldValue('provider', provider);
  }

  hasProvider(): boolean {
    return this.hasFieldValue('provider');
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

  /** Servicing facility (0..1) Created when absent. */
  getFacility(): Reference {
    if (this.facility === undefined) {
      this.facility = new Reference();
    }
    return this.facility;
  }

  setFacility(facility: Reference | undefined): this {
    return this.setFieldValue('facility', facility);
  }

  hasFacility(): boolean {
    return this.hasFieldValue('facility');
  }

  /** Applicable diagnosis (0..*) Never undefined; an empty list is created when absent. */
  getDiagnosis(): CoverageEligibilityRequestItemDiagnosis[] {
    if (this.diagnosis === undefined) {
      this.diagnosis = [];
    }
    return this.diagnosis;
  }

  setDiagnosis(diagnosis: CoverageEligibilityRequestItemDiagnosis[] | undefined): this {
    return this.setFieldValue('diagnosis', diagnosis);
  }

  hasDiagnosis(): boolean {
    return this.hasFieldValue('diagnosis');
  }

  /** Appends a new, empty CoverageEligibilityRequestItemDiagnosis to `diagnosis` and returns it so it can be filled in. */
  addDiagnosis(): CoverageEligibilityRequestItemDiagnosis;
  /** Appends the given CoverageEligibilityRequestItemDiagnosis to `diagnosis` and returns this object for chaining. */
  addDiagnosis(
    coverageEligibilityRequestItemDiagnosis: CoverageEligibilityRequestItemDiagnosis
  ): this;
  addDiagnosis(
    coverageEligibilityRequestItemDiagnosis?: CoverageEligibilityRequestItemDiagnosis
  ): CoverageEligibilityRequestItemDiagnosis | this {
    if (coverageEligibilityRequestItemDiagnosis !== undefined) {
      return this.addFieldValue('diagnosis', coverageEligibilityRequestItemDiagnosis);
    }
    const createdCoverageEligibilityRequestItemDiagnosis =
      new CoverageEligibilityRequestItemDiagnosis();
    this.addFieldValue('diagnosis', createdCoverageEligibilityRequestItemDiagnosis);
    return createdCoverageEligibilityRequestItemDiagnosis;
  }

  /** The first CoverageEligibilityRequestItemDiagnosis of `diagnosis`. One is added when the list is empty. */
  getDiagnosisFirstRep(): CoverageEligibilityRequestItemDiagnosis {
    const firstCoverageEligibilityRequestItemDiagnosis = this.getDiagnosis()[0];
    return firstCoverageEligibilityRequestItemDiagnosis === undefined
      ? this.addDiagnosis()
      : firstCoverageEligibilityRequestItemDiagnosis;
  }

  /** Product or service details (0..*) Never undefined; an empty list is created when absent. */
  getDetail(): Reference[] {
    if (this.detail === undefined) {
      this.detail = [];
    }
    return this.detail;
  }

  setDetail(detail: Reference[] | undefined): this {
    return this.setFieldValue('detail', detail);
  }

  hasDetail(): boolean {
    return this.hasFieldValue('detail');
  }

  /** Appends a new, empty Reference to `detail` and returns it so it can be filled in. */
  addDetail(): Reference;
  /** Appends the given Reference to `detail` and returns this object for chaining. */
  addDetail(reference: Reference): this;
  addDetail(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('detail', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('detail', createdReference);
    return createdReference;
  }

  /** The first Reference of `detail`. One is added when the list is empty. */
  getDetailFirstRep(): Reference {
    const firstReference = this.getDetail()[0];
    return firstReference === undefined ? this.addDetail() : firstReference;
  }
}

modelTypeRegistry.register('CoverageEligibilityRequestItem', CoverageEligibilityRequestItem, false);

/**
 * Applicable diagnosis
 */
export class CoverageEligibilityRequestItemDiagnosis extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'diagnosis',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'diagnosisCodeableConcept', typeCode: 'CodeableConcept' },
        {
          jsonKey: 'diagnosisReference',
          typeCode: 'Reference',
          targetResourceTypes: ['Condition'],
        },
      ],
    },
  ];

  /** Nature of illness or problem (0..1) */
  diagnosisCodeableConcept?: CodeableConcept;
  /** Nature of illness or problem (0..1) */
  diagnosisReference?: Reference;

  override fhirType(): string {
    return 'CoverageEligibilityRequest.item.diagnosis';
  }

  /** FHIR JSON for this CoverageEligibilityRequestItemDiagnosis, typed as the plain `CoverageEligibilityRequestDiagnosis` data type. */
  override toJSON(): plainTypes.CoverageEligibilityRequestDiagnosis {
    return this.serialize() as plainTypes.CoverageEligibilityRequestDiagnosis;
  }

  /** Nature of illness or problem (0..1) Whichever type of `diagnosis[x]` is set. */
  getDiagnosis(): CodeableConcept | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | Reference>('diagnosis');
  }

  /** True when any type of `diagnosis[x]` is set. */
  hasDiagnosis(): boolean {
    return this.hasChoiceValue('diagnosis');
  }

  getDiagnosisCodeableConcept(): CodeableConcept | undefined {
    return this.diagnosisCodeableConcept;
  }

  /** Sets `diagnosis[x]` as CodeableConcept and clears every other type of it. */
  setDiagnosisCodeableConcept(diagnosisCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('diagnosisCodeableConcept', diagnosisCodeableConcept);
  }

  hasDiagnosisCodeableConcept(): boolean {
    return this.hasFieldValue('diagnosisCodeableConcept');
  }

  getDiagnosisReference(): Reference | undefined {
    return this.diagnosisReference;
  }

  /** Sets `diagnosis[x]` as Reference and clears every other type of it. */
  setDiagnosisReference(diagnosisReference: Reference | undefined): this {
    return this.setFieldValue('diagnosisReference', diagnosisReference);
  }

  hasDiagnosisReference(): boolean {
    return this.hasFieldValue('diagnosisReference');
  }
}

modelTypeRegistry.register(
  'CoverageEligibilityRequestItemDiagnosis',
  CoverageEligibilityRequestItemDiagnosis,
  false
);
