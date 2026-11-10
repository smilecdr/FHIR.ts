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
 * This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.
 */
export class CoverageEligibilityResponse extends DomainResource {
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
      elementName: 'purpose',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'purpose',
          typeCode: 'code',
          allowedCodes: valueSetCodes.EligibilityResponsePurpose,
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
      types: [{ jsonKey: 'event', typeCode: 'CoverageEligibilityResponseEvent' }],
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
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'request',
          typeCode: 'Reference',
          targetResourceTypes: ['CoverageEligibilityRequest'],
        },
      ],
    },
    {
      elementName: 'outcome',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'outcome', typeCode: 'code', allowedCodes: valueSetCodes.EligibilityOutcome },
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
      elementName: 'insurer',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'insurer', typeCode: 'Reference', targetResourceTypes: ['Organization'] }],
    },
    {
      elementName: 'insurance',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'insurance', typeCode: 'CoverageEligibilityResponseInsurance' }],
    },
    {
      elementName: 'preAuthRef',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'preAuthRef', typeCode: 'string' }],
    },
    {
      elementName: 'form',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'form', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'error',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'error', typeCode: 'CoverageEligibilityResponseError' }],
    },
  ];

  readonly resourceType = 'CoverageEligibilityResponse';

  /** Business Identifier for coverage eligiblity request (0..*) */
  identifier?: Identifier[];

  /** active | cancelled | draft | entered-in-error (1..1) */
  status?: valueSetCodes.FinancialResourceStatusCodes;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** auth-requirements | benefits | discovery | validation (1..*) */
  purpose?: valueSetCodes.EligibilityResponsePurpose[];
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: (Element | null)[];

  /** Intended recipient of products and services (1..1) */
  patient?: Reference;

  /** Event information (0..*) */
  event?: CoverageEligibilityResponseEvent[];

  /** Estimated date or dates of service (0..1) */
  servicedDate?: string;
  /** Id and extensions of the primitive `servicedDate`. */
  _servicedDate?: Element;
  /** Estimated date or dates of service (0..1) */
  servicedPeriod?: Period;

  /** Response creation date (1..1) */
  created?: string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;

  /** Party responsible for the request (0..1) */
  requestor?: Reference;

  /** Eligibility request reference (1..1) */
  request?: Reference;

  /** queued | complete | error | partial (1..1) */
  outcome?: valueSetCodes.EligibilityOutcome;
  /** Id and extensions of the primitive `outcome`. */
  _outcome?: Element;

  /** Disposition Message (0..1) */
  disposition?: string;
  /** Id and extensions of the primitive `disposition`. */
  _disposition?: Element;

  /** Coverage issuer (1..1) */
  insurer?: Reference;

  /** Patient insurance information (0..*) */
  insurance?: CoverageEligibilityResponseInsurance[];

  /** Preauthorization reference (0..1) */
  preAuthRef?: string;
  /** Id and extensions of the primitive `preAuthRef`. */
  _preAuthRef?: Element;

  /** Printed form identifier (0..1) */
  form?: CodeableConcept;

  /** Processing errors (0..*) */
  error?: CoverageEligibilityResponseError[];

  override fhirType(): string {
    return 'CoverageEligibilityResponse';
  }

  /** FHIR JSON for this CoverageEligibilityResponse, typed as the plain `CoverageEligibilityResponse` data type. */
  override toJSON(): plainTypes.CoverageEligibilityResponse {
    return this.serialize() as plainTypes.CoverageEligibilityResponse;
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

  /** auth-requirements | benefits | discovery | validation (1..*) Never undefined; an empty list is created when absent. */
  getPurpose(): valueSetCodes.EligibilityResponsePurpose[] {
    if (this.purpose === undefined) {
      this.purpose = [];
    }
    return this.purpose;
  }

  setPurpose(purpose: valueSetCodes.EligibilityResponsePurpose[] | undefined): this {
    return this.setFieldValue('purpose', purpose);
  }

  hasPurpose(): boolean {
    return this.hasFieldValue('purpose');
  }

  /** Appends one value to `purpose`. Throws a FhirModelError when it is not a valid FHIR code. */
  addPurpose(purpose: valueSetCodes.EligibilityResponsePurpose): this {
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
  getEvent(): CoverageEligibilityResponseEvent[] {
    if (this.event === undefined) {
      this.event = [];
    }
    return this.event;
  }

  setEvent(event: CoverageEligibilityResponseEvent[] | undefined): this {
    return this.setFieldValue('event', event);
  }

  hasEvent(): boolean {
    return this.hasFieldValue('event');
  }

  /** Appends a new, empty CoverageEligibilityResponseEvent to `event` and returns it so it can be filled in. */
  addEvent(): CoverageEligibilityResponseEvent;
  /** Appends the given CoverageEligibilityResponseEvent to `event` and returns this object for chaining. */
  addEvent(coverageEligibilityResponseEvent: CoverageEligibilityResponseEvent): this;
  addEvent(
    coverageEligibilityResponseEvent?: CoverageEligibilityResponseEvent
  ): CoverageEligibilityResponseEvent | this {
    if (coverageEligibilityResponseEvent !== undefined) {
      return this.addFieldValue('event', coverageEligibilityResponseEvent);
    }
    const createdCoverageEligibilityResponseEvent = new CoverageEligibilityResponseEvent();
    this.addFieldValue('event', createdCoverageEligibilityResponseEvent);
    return createdCoverageEligibilityResponseEvent;
  }

  /** The first CoverageEligibilityResponseEvent of `event`. One is added when the list is empty. */
  getEventFirstRep(): CoverageEligibilityResponseEvent {
    const firstCoverageEligibilityResponseEvent = this.getEvent()[0];
    return firstCoverageEligibilityResponseEvent === undefined
      ? this.addEvent()
      : firstCoverageEligibilityResponseEvent;
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

  /** Party responsible for the request (0..1) Created when absent. */
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

  /** Eligibility request reference (1..1) Created when absent. */
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
  getOutcome(): valueSetCodes.EligibilityOutcome | undefined {
    return this.outcome;
  }

  /** Sets `outcome`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setOutcome(outcome: valueSetCodes.EligibilityOutcome | undefined): this {
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

  /** Patient insurance information (0..*) Never undefined; an empty list is created when absent. */
  getInsurance(): CoverageEligibilityResponseInsurance[] {
    if (this.insurance === undefined) {
      this.insurance = [];
    }
    return this.insurance;
  }

  setInsurance(insurance: CoverageEligibilityResponseInsurance[] | undefined): this {
    return this.setFieldValue('insurance', insurance);
  }

  hasInsurance(): boolean {
    return this.hasFieldValue('insurance');
  }

  /** Appends a new, empty CoverageEligibilityResponseInsurance to `insurance` and returns it so it can be filled in. */
  addInsurance(): CoverageEligibilityResponseInsurance;
  /** Appends the given CoverageEligibilityResponseInsurance to `insurance` and returns this object for chaining. */
  addInsurance(coverageEligibilityResponseInsurance: CoverageEligibilityResponseInsurance): this;
  addInsurance(
    coverageEligibilityResponseInsurance?: CoverageEligibilityResponseInsurance
  ): CoverageEligibilityResponseInsurance | this {
    if (coverageEligibilityResponseInsurance !== undefined) {
      return this.addFieldValue('insurance', coverageEligibilityResponseInsurance);
    }
    const createdCoverageEligibilityResponseInsurance = new CoverageEligibilityResponseInsurance();
    this.addFieldValue('insurance', createdCoverageEligibilityResponseInsurance);
    return createdCoverageEligibilityResponseInsurance;
  }

  /** The first CoverageEligibilityResponseInsurance of `insurance`. One is added when the list is empty. */
  getInsuranceFirstRep(): CoverageEligibilityResponseInsurance {
    const firstCoverageEligibilityResponseInsurance = this.getInsurance()[0];
    return firstCoverageEligibilityResponseInsurance === undefined
      ? this.addInsurance()
      : firstCoverageEligibilityResponseInsurance;
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

  /** Printed form identifier (0..1) Created when absent. */
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

  /** Processing errors (0..*) Never undefined; an empty list is created when absent. */
  getError(): CoverageEligibilityResponseError[] {
    if (this.error === undefined) {
      this.error = [];
    }
    return this.error;
  }

  setError(error: CoverageEligibilityResponseError[] | undefined): this {
    return this.setFieldValue('error', error);
  }

  hasError(): boolean {
    return this.hasFieldValue('error');
  }

  /** Appends a new, empty CoverageEligibilityResponseError to `error` and returns it so it can be filled in. */
  addError(): CoverageEligibilityResponseError;
  /** Appends the given CoverageEligibilityResponseError to `error` and returns this object for chaining. */
  addError(coverageEligibilityResponseError: CoverageEligibilityResponseError): this;
  addError(
    coverageEligibilityResponseError?: CoverageEligibilityResponseError
  ): CoverageEligibilityResponseError | this {
    if (coverageEligibilityResponseError !== undefined) {
      return this.addFieldValue('error', coverageEligibilityResponseError);
    }
    const createdCoverageEligibilityResponseError = new CoverageEligibilityResponseError();
    this.addFieldValue('error', createdCoverageEligibilityResponseError);
    return createdCoverageEligibilityResponseError;
  }

  /** The first CoverageEligibilityResponseError of `error`. One is added when the list is empty. */
  getErrorFirstRep(): CoverageEligibilityResponseError {
    const firstCoverageEligibilityResponseError = this.getError()[0];
    return firstCoverageEligibilityResponseError === undefined
      ? this.addError()
      : firstCoverageEligibilityResponseError;
  }
}

modelTypeRegistry.register('CoverageEligibilityResponse', CoverageEligibilityResponse, true);

/** True when the value is a CoverageEligibilityResponse model instance. */
export function isCoverageEligibilityResponse(
  candidate: unknown
): candidate is CoverageEligibilityResponse {
  return candidate instanceof CoverageEligibilityResponse;
}

/**
 * Event information
 */
export class CoverageEligibilityResponseEvent extends BackboneElement {
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
    return 'CoverageEligibilityResponse.event';
  }

  /** FHIR JSON for this CoverageEligibilityResponseEvent, typed as the plain `CoverageEligibilityResponseEvent` data type. */
  override toJSON(): plainTypes.CoverageEligibilityResponseEvent {
    return this.serialize() as plainTypes.CoverageEligibilityResponseEvent;
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
  'CoverageEligibilityResponseEvent',
  CoverageEligibilityResponseEvent,
  false
);

/**
 * Patient insurance information
 */
export class CoverageEligibilityResponseInsurance extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'coverage',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'coverage', typeCode: 'Reference', targetResourceTypes: ['Coverage'] }],
    },
    {
      elementName: 'inforce',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'inforce', typeCode: 'boolean' }],
    },
    {
      elementName: 'benefitPeriod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'benefitPeriod', typeCode: 'Period' }],
    },
    {
      elementName: 'item',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'item', typeCode: 'CoverageEligibilityResponseInsuranceItem' }],
    },
  ];

  /** Insurance information (1..1) */
  coverage?: Reference;

  /** Coverage inforce indicator (0..1) */
  inforce?: boolean;
  /** Id and extensions of the primitive `inforce`. */
  _inforce?: Element;

  /** When the benefits are applicable (0..1) */
  benefitPeriod?: Period;

  /** Benefits and authorization details (0..*) */
  item?: CoverageEligibilityResponseInsuranceItem[];

  override fhirType(): string {
    return 'CoverageEligibilityResponse.insurance';
  }

  /** FHIR JSON for this CoverageEligibilityResponseInsurance, typed as the plain `CoverageEligibilityResponseInsurance` data type. */
  override toJSON(): plainTypes.CoverageEligibilityResponseInsurance {
    return this.serialize() as plainTypes.CoverageEligibilityResponseInsurance;
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

  /** Coverage inforce indicator (0..1) */
  getInforce(): boolean | undefined {
    return this.inforce;
  }

  /** Sets `inforce`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setInforce(inforce: boolean | undefined): this {
    return this.setFieldValue('inforce', inforce);
  }

  hasInforce(): boolean {
    return this.hasFieldValue('inforce');
  }

  /** The element carrying the id and extensions of `inforce`. Created when absent. */
  getInforceElement(): Element {
    if (this._inforce === undefined) {
      this._inforce = new Element();
    }
    return this._inforce;
  }

  setInforceElement(inforceElement: Element | undefined): this {
    this._inforce = inforceElement;
    return this;
  }

  /** When the benefits are applicable (0..1) Created when absent. */
  getBenefitPeriod(): Period {
    if (this.benefitPeriod === undefined) {
      this.benefitPeriod = new Period();
    }
    return this.benefitPeriod;
  }

  setBenefitPeriod(benefitPeriod: Period | undefined): this {
    return this.setFieldValue('benefitPeriod', benefitPeriod);
  }

  hasBenefitPeriod(): boolean {
    return this.hasFieldValue('benefitPeriod');
  }

  /** Benefits and authorization details (0..*) Never undefined; an empty list is created when absent. */
  getItem(): CoverageEligibilityResponseInsuranceItem[] {
    if (this.item === undefined) {
      this.item = [];
    }
    return this.item;
  }

  setItem(item: CoverageEligibilityResponseInsuranceItem[] | undefined): this {
    return this.setFieldValue('item', item);
  }

  hasItem(): boolean {
    return this.hasFieldValue('item');
  }

  /** Appends a new, empty CoverageEligibilityResponseInsuranceItem to `item` and returns it so it can be filled in. */
  addItem(): CoverageEligibilityResponseInsuranceItem;
  /** Appends the given CoverageEligibilityResponseInsuranceItem to `item` and returns this object for chaining. */
  addItem(coverageEligibilityResponseInsuranceItem: CoverageEligibilityResponseInsuranceItem): this;
  addItem(
    coverageEligibilityResponseInsuranceItem?: CoverageEligibilityResponseInsuranceItem
  ): CoverageEligibilityResponseInsuranceItem | this {
    if (coverageEligibilityResponseInsuranceItem !== undefined) {
      return this.addFieldValue('item', coverageEligibilityResponseInsuranceItem);
    }
    const createdCoverageEligibilityResponseInsuranceItem =
      new CoverageEligibilityResponseInsuranceItem();
    this.addFieldValue('item', createdCoverageEligibilityResponseInsuranceItem);
    return createdCoverageEligibilityResponseInsuranceItem;
  }

  /** The first CoverageEligibilityResponseInsuranceItem of `item`. One is added when the list is empty. */
  getItemFirstRep(): CoverageEligibilityResponseInsuranceItem {
    const firstCoverageEligibilityResponseInsuranceItem = this.getItem()[0];
    return firstCoverageEligibilityResponseInsuranceItem === undefined
      ? this.addItem()
      : firstCoverageEligibilityResponseInsuranceItem;
  }
}

modelTypeRegistry.register(
  'CoverageEligibilityResponseInsurance',
  CoverageEligibilityResponseInsurance,
  false
);

/**
 * Benefits and authorization details
 */
export class CoverageEligibilityResponseInsuranceItem extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
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
      elementName: 'excluded',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'excluded', typeCode: 'boolean' }],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'network',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'network', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'unit',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'unit', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'term',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'term', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'benefit',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'benefit', typeCode: 'CoverageEligibilityResponseInsuranceItemBenefit' }],
    },
    {
      elementName: 'authorizationRequired',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'authorizationRequired', typeCode: 'boolean' }],
    },
    {
      elementName: 'authorizationSupporting',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'authorizationSupporting', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'authorizationUrl',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'authorizationUrl', typeCode: 'uri' }],
    },
  ];

  /** Benefit classification (0..1) */
  category?: CodeableConcept;

  /** Billing, service, product, or drug code (0..1) */
  productOrService?: CodeableConcept;

  /** Product or service billing modifiers (0..*) */
  modifier?: CodeableConcept[];

  /** Performing practitioner (0..1) */
  provider?: Reference;

  /** Excluded from the plan (0..1) */
  excluded?: boolean;
  /** Id and extensions of the primitive `excluded`. */
  _excluded?: Element;

  /** Short name for the benefit (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Description of the benefit or services covered (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** In or out of network (0..1) */
  network?: CodeableConcept;

  /** Individual or family (0..1) */
  unit?: CodeableConcept;

  /** Annual or lifetime (0..1) */
  term?: CodeableConcept;

  /** Benefit Summary (0..*) */
  benefit?: CoverageEligibilityResponseInsuranceItemBenefit[];

  /** Authorization required flag (0..1) */
  authorizationRequired?: boolean;
  /** Id and extensions of the primitive `authorizationRequired`. */
  _authorizationRequired?: Element;

  /** Type of required supporting materials (0..*) */
  authorizationSupporting?: CodeableConcept[];

  /** Preauthorization requirements endpoint (0..1) */
  authorizationUrl?: string;
  /** Id and extensions of the primitive `authorizationUrl`. */
  _authorizationUrl?: Element;

  override fhirType(): string {
    return 'CoverageEligibilityResponse.insurance.item';
  }

  /** FHIR JSON for this CoverageEligibilityResponseInsuranceItem, typed as the plain `CoverageEligibilityResponseItem` data type. */
  override toJSON(): plainTypes.CoverageEligibilityResponseItem {
    return this.serialize() as plainTypes.CoverageEligibilityResponseItem;
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

  /** Performing practitioner (0..1) Created when absent. */
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

  /** Excluded from the plan (0..1) */
  getExcluded(): boolean | undefined {
    return this.excluded;
  }

  /** Sets `excluded`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setExcluded(excluded: boolean | undefined): this {
    return this.setFieldValue('excluded', excluded);
  }

  hasExcluded(): boolean {
    return this.hasFieldValue('excluded');
  }

  /** The element carrying the id and extensions of `excluded`. Created when absent. */
  getExcludedElement(): Element {
    if (this._excluded === undefined) {
      this._excluded = new Element();
    }
    return this._excluded;
  }

  setExcludedElement(excludedElement: Element | undefined): this {
    this._excluded = excludedElement;
    return this;
  }

  /** Short name for the benefit (0..1) */
  getName(): string | undefined {
    return this.name;
  }

  /** Sets `name`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setName(name: string | undefined): this {
    return this.setFieldValue('name', name);
  }

  hasName(): boolean {
    return this.hasFieldValue('name');
  }

  /** The element carrying the id and extensions of `name`. Created when absent. */
  getNameElement(): Element {
    if (this._name === undefined) {
      this._name = new Element();
    }
    return this._name;
  }

  setNameElement(nameElement: Element | undefined): this {
    this._name = nameElement;
    return this;
  }

  /** Description of the benefit or services covered (0..1) */
  getDescription(): string | undefined {
    return this.description;
  }

  /** Sets `description`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDescription(description: string | undefined): this {
    return this.setFieldValue('description', description);
  }

  hasDescription(): boolean {
    return this.hasFieldValue('description');
  }

  /** The element carrying the id and extensions of `description`. Created when absent. */
  getDescriptionElement(): Element {
    if (this._description === undefined) {
      this._description = new Element();
    }
    return this._description;
  }

  setDescriptionElement(descriptionElement: Element | undefined): this {
    this._description = descriptionElement;
    return this;
  }

  /** In or out of network (0..1) Created when absent. */
  getNetwork(): CodeableConcept {
    if (this.network === undefined) {
      this.network = new CodeableConcept();
    }
    return this.network;
  }

  setNetwork(network: CodeableConcept | undefined): this {
    return this.setFieldValue('network', network);
  }

  hasNetwork(): boolean {
    return this.hasFieldValue('network');
  }

  /** Individual or family (0..1) Created when absent. */
  getUnit(): CodeableConcept {
    if (this.unit === undefined) {
      this.unit = new CodeableConcept();
    }
    return this.unit;
  }

  setUnit(unit: CodeableConcept | undefined): this {
    return this.setFieldValue('unit', unit);
  }

  hasUnit(): boolean {
    return this.hasFieldValue('unit');
  }

  /** Annual or lifetime (0..1) Created when absent. */
  getTerm(): CodeableConcept {
    if (this.term === undefined) {
      this.term = new CodeableConcept();
    }
    return this.term;
  }

  setTerm(term: CodeableConcept | undefined): this {
    return this.setFieldValue('term', term);
  }

  hasTerm(): boolean {
    return this.hasFieldValue('term');
  }

  /** Benefit Summary (0..*) Never undefined; an empty list is created when absent. */
  getBenefit(): CoverageEligibilityResponseInsuranceItemBenefit[] {
    if (this.benefit === undefined) {
      this.benefit = [];
    }
    return this.benefit;
  }

  setBenefit(benefit: CoverageEligibilityResponseInsuranceItemBenefit[] | undefined): this {
    return this.setFieldValue('benefit', benefit);
  }

  hasBenefit(): boolean {
    return this.hasFieldValue('benefit');
  }

  /** Appends a new, empty CoverageEligibilityResponseInsuranceItemBenefit to `benefit` and returns it so it can be filled in. */
  addBenefit(): CoverageEligibilityResponseInsuranceItemBenefit;
  /** Appends the given CoverageEligibilityResponseInsuranceItemBenefit to `benefit` and returns this object for chaining. */
  addBenefit(
    coverageEligibilityResponseInsuranceItemBenefit: CoverageEligibilityResponseInsuranceItemBenefit
  ): this;
  addBenefit(
    coverageEligibilityResponseInsuranceItemBenefit?: CoverageEligibilityResponseInsuranceItemBenefit
  ): CoverageEligibilityResponseInsuranceItemBenefit | this {
    if (coverageEligibilityResponseInsuranceItemBenefit !== undefined) {
      return this.addFieldValue('benefit', coverageEligibilityResponseInsuranceItemBenefit);
    }
    const createdCoverageEligibilityResponseInsuranceItemBenefit =
      new CoverageEligibilityResponseInsuranceItemBenefit();
    this.addFieldValue('benefit', createdCoverageEligibilityResponseInsuranceItemBenefit);
    return createdCoverageEligibilityResponseInsuranceItemBenefit;
  }

  /** The first CoverageEligibilityResponseInsuranceItemBenefit of `benefit`. One is added when the list is empty. */
  getBenefitFirstRep(): CoverageEligibilityResponseInsuranceItemBenefit {
    const firstCoverageEligibilityResponseInsuranceItemBenefit = this.getBenefit()[0];
    return firstCoverageEligibilityResponseInsuranceItemBenefit === undefined
      ? this.addBenefit()
      : firstCoverageEligibilityResponseInsuranceItemBenefit;
  }

  /** Authorization required flag (0..1) */
  getAuthorizationRequired(): boolean | undefined {
    return this.authorizationRequired;
  }

  /** Sets `authorizationRequired`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setAuthorizationRequired(authorizationRequired: boolean | undefined): this {
    return this.setFieldValue('authorizationRequired', authorizationRequired);
  }

  hasAuthorizationRequired(): boolean {
    return this.hasFieldValue('authorizationRequired');
  }

  /** The element carrying the id and extensions of `authorizationRequired`. Created when absent. */
  getAuthorizationRequiredElement(): Element {
    if (this._authorizationRequired === undefined) {
      this._authorizationRequired = new Element();
    }
    return this._authorizationRequired;
  }

  setAuthorizationRequiredElement(authorizationRequiredElement: Element | undefined): this {
    this._authorizationRequired = authorizationRequiredElement;
    return this;
  }

  /** Type of required supporting materials (0..*) Never undefined; an empty list is created when absent. */
  getAuthorizationSupporting(): CodeableConcept[] {
    if (this.authorizationSupporting === undefined) {
      this.authorizationSupporting = [];
    }
    return this.authorizationSupporting;
  }

  setAuthorizationSupporting(authorizationSupporting: CodeableConcept[] | undefined): this {
    return this.setFieldValue('authorizationSupporting', authorizationSupporting);
  }

  hasAuthorizationSupporting(): boolean {
    return this.hasFieldValue('authorizationSupporting');
  }

  /** Appends a new, empty CodeableConcept to `authorizationSupporting` and returns it so it can be filled in. */
  addAuthorizationSupporting(): CodeableConcept;
  /** Appends the given CodeableConcept to `authorizationSupporting` and returns this object for chaining. */
  addAuthorizationSupporting(codeableConcept: CodeableConcept): this;
  addAuthorizationSupporting(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('authorizationSupporting', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('authorizationSupporting', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `authorizationSupporting`. One is added when the list is empty. */
  getAuthorizationSupportingFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getAuthorizationSupporting()[0];
    return firstCodeableConcept === undefined
      ? this.addAuthorizationSupporting()
      : firstCodeableConcept;
  }

  /** Preauthorization requirements endpoint (0..1) */
  getAuthorizationUrl(): string | undefined {
    return this.authorizationUrl;
  }

  /** Sets `authorizationUrl`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setAuthorizationUrl(authorizationUrl: string | undefined): this {
    return this.setFieldValue('authorizationUrl', authorizationUrl);
  }

  hasAuthorizationUrl(): boolean {
    return this.hasFieldValue('authorizationUrl');
  }

  /** The element carrying the id and extensions of `authorizationUrl`. Created when absent. */
  getAuthorizationUrlElement(): Element {
    if (this._authorizationUrl === undefined) {
      this._authorizationUrl = new Element();
    }
    return this._authorizationUrl;
  }

  setAuthorizationUrlElement(authorizationUrlElement: Element | undefined): this {
    this._authorizationUrl = authorizationUrlElement;
    return this;
  }
}

modelTypeRegistry.register(
  'CoverageEligibilityResponseInsuranceItem',
  CoverageEligibilityResponseInsuranceItem,
  false
);

/**
 * Benefit Summary
 */
export class CoverageEligibilityResponseInsuranceItemBenefit extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'allowed',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'allowedUnsignedInt', typeCode: 'unsignedInt' },
        { jsonKey: 'allowedString', typeCode: 'string' },
        { jsonKey: 'allowedMoney', typeCode: 'Money' },
      ],
    },
    {
      elementName: 'used',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'usedUnsignedInt', typeCode: 'unsignedInt' },
        { jsonKey: 'usedString', typeCode: 'string' },
        { jsonKey: 'usedMoney', typeCode: 'Money' },
      ],
    },
  ];

  /** Benefit classification (1..1) */
  type?: CodeableConcept;

  /** Benefits allowed (0..1) */
  allowedUnsignedInt?: number;
  /** Id and extensions of the primitive `allowedUnsignedInt`. */
  _allowedUnsignedInt?: Element;
  /** Benefits allowed (0..1) */
  allowedString?: string;
  /** Id and extensions of the primitive `allowedString`. */
  _allowedString?: Element;
  /** Benefits allowed (0..1) */
  allowedMoney?: Money;

  /** Benefits used (0..1) */
  usedUnsignedInt?: number;
  /** Id and extensions of the primitive `usedUnsignedInt`. */
  _usedUnsignedInt?: Element;
  /** Benefits used (0..1) */
  usedString?: string;
  /** Id and extensions of the primitive `usedString`. */
  _usedString?: Element;
  /** Benefits used (0..1) */
  usedMoney?: Money;

  override fhirType(): string {
    return 'CoverageEligibilityResponse.insurance.item.benefit';
  }

  /** FHIR JSON for this CoverageEligibilityResponseInsuranceItemBenefit, typed as the plain `CoverageEligibilityResponseBenefit` data type. */
  override toJSON(): plainTypes.CoverageEligibilityResponseBenefit {
    return this.serialize() as plainTypes.CoverageEligibilityResponseBenefit;
  }

  /** Benefit classification (1..1) Created when absent. */
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

  /** Benefits allowed (0..1) Whichever type of `allowed[x]` is set. */
  getAllowed(): number | string | Money | undefined {
    return this.getChoiceValue<number | string | Money>('allowed');
  }

  /** True when any type of `allowed[x]` is set. */
  hasAllowed(): boolean {
    return this.hasChoiceValue('allowed');
  }

  getAllowedUnsignedInt(): number | undefined {
    return this.allowedUnsignedInt;
  }

  /** Sets `allowed[x]` as unsignedInt and clears every other type of it. */
  setAllowedUnsignedInt(allowedUnsignedInt: number | undefined): this {
    return this.setFieldValue('allowedUnsignedInt', allowedUnsignedInt);
  }

  hasAllowedUnsignedInt(): boolean {
    return this.hasFieldValue('allowedUnsignedInt');
  }

  getAllowedString(): string | undefined {
    return this.allowedString;
  }

  /** Sets `allowed[x]` as string and clears every other type of it. */
  setAllowedString(allowedString: string | undefined): this {
    return this.setFieldValue('allowedString', allowedString);
  }

  hasAllowedString(): boolean {
    return this.hasFieldValue('allowedString');
  }

  getAllowedMoney(): Money | undefined {
    return this.allowedMoney;
  }

  /** Sets `allowed[x]` as Money and clears every other type of it. */
  setAllowedMoney(allowedMoney: Money | undefined): this {
    return this.setFieldValue('allowedMoney', allowedMoney);
  }

  hasAllowedMoney(): boolean {
    return this.hasFieldValue('allowedMoney');
  }

  /** Benefits used (0..1) Whichever type of `used[x]` is set. */
  getUsed(): number | string | Money | undefined {
    return this.getChoiceValue<number | string | Money>('used');
  }

  /** True when any type of `used[x]` is set. */
  hasUsed(): boolean {
    return this.hasChoiceValue('used');
  }

  getUsedUnsignedInt(): number | undefined {
    return this.usedUnsignedInt;
  }

  /** Sets `used[x]` as unsignedInt and clears every other type of it. */
  setUsedUnsignedInt(usedUnsignedInt: number | undefined): this {
    return this.setFieldValue('usedUnsignedInt', usedUnsignedInt);
  }

  hasUsedUnsignedInt(): boolean {
    return this.hasFieldValue('usedUnsignedInt');
  }

  getUsedString(): string | undefined {
    return this.usedString;
  }

  /** Sets `used[x]` as string and clears every other type of it. */
  setUsedString(usedString: string | undefined): this {
    return this.setFieldValue('usedString', usedString);
  }

  hasUsedString(): boolean {
    return this.hasFieldValue('usedString');
  }

  getUsedMoney(): Money | undefined {
    return this.usedMoney;
  }

  /** Sets `used[x]` as Money and clears every other type of it. */
  setUsedMoney(usedMoney: Money | undefined): this {
    return this.setFieldValue('usedMoney', usedMoney);
  }

  hasUsedMoney(): boolean {
    return this.hasFieldValue('usedMoney');
  }
}

modelTypeRegistry.register(
  'CoverageEligibilityResponseInsuranceItemBenefit',
  CoverageEligibilityResponseInsuranceItemBenefit,
  false
);

/**
 * Processing errors
 */
export class CoverageEligibilityResponseError extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
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

  /** Error code detailing processing issues (1..1) */
  code?: CodeableConcept;

  /** FHIRPath of element(s) related to issue (0..*) */
  expression?: string[];
  /** Id and extensions of the primitive `expression`. */
  _expression?: (Element | null)[];

  override fhirType(): string {
    return 'CoverageEligibilityResponse.error';
  }

  /** FHIR JSON for this CoverageEligibilityResponseError, typed as the plain `CoverageEligibilityResponseError` data type. */
  override toJSON(): plainTypes.CoverageEligibilityResponseError {
    return this.serialize() as plainTypes.CoverageEligibilityResponseError;
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

modelTypeRegistry.register(
  'CoverageEligibilityResponseError',
  CoverageEligibilityResponseError,
  false
);
