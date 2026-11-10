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
import { Reference } from './reference';

/**
 * Base StructureDefinition for EligibilityResponse Resource
 */
export class EligibilityResponse extends DomainResource {
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
      elementName: 'created',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'created', typeCode: 'dateTime' }],
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
      elementName: 'request',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'request', typeCode: 'Reference', targetResourceTypes: ['EligibilityRequest'] },
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
      elementName: 'insurer',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'insurer', typeCode: 'Reference', targetResourceTypes: ['Organization'] }],
    },
    {
      elementName: 'inforce',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'inforce', typeCode: 'boolean' }],
    },
    {
      elementName: 'insurance',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'insurance', typeCode: 'EligibilityResponseInsurance' }],
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
      types: [{ jsonKey: 'error', typeCode: 'EligibilityResponseError' }],
    },
  ];

  readonly resourceType = 'EligibilityResponse';

  /** Business Identifier (0..*) */
  identifier?: Identifier[];

  /** active | cancelled | draft | entered-in-error (0..1) */
  status?: valueSetCodes.FinancialResourceStatusCodes;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Creation date (0..1) */
  created?: string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;

  /** Responsible practitioner (0..1) */
  requestProvider?: Reference;

  /** Responsible organization (0..1) */
  requestOrganization?: Reference;

  /** Eligibility reference (0..1) */
  request?: Reference;

  /** complete | error | partial (0..1) */
  outcome?: CodeableConcept;

  /** Disposition Message (0..1) */
  disposition?: string;
  /** Id and extensions of the primitive `disposition`. */
  _disposition?: Element;

  /** Insurer issuing the coverage (0..1) */
  insurer?: Reference;

  /** Coverage inforce indicator (0..1) */
  inforce?: boolean;
  /** Id and extensions of the primitive `inforce`. */
  _inforce?: Element;

  /** Details by insurance coverage (0..*) */
  insurance?: EligibilityResponseInsurance[];

  /** Printed Form Identifier (0..1) */
  form?: CodeableConcept;

  /** Processing errors (0..*) */
  error?: EligibilityResponseError[];

  override fhirType(): string {
    return 'EligibilityResponse';
  }

  /** FHIR JSON for this EligibilityResponse, typed as the plain `EligibilityResponse` data type. */
  override toJSON(): plainTypes.EligibilityResponse {
    return this.serialize() as plainTypes.EligibilityResponse;
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

  /** Eligibility reference (0..1) Created when absent. */
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

  /** Insurer issuing the coverage (0..1) Created when absent. */
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

  /** Details by insurance coverage (0..*) Never undefined; an empty list is created when absent. */
  getInsurance(): EligibilityResponseInsurance[] {
    if (this.insurance === undefined) {
      this.insurance = [];
    }
    return this.insurance;
  }

  setInsurance(insurance: EligibilityResponseInsurance[] | undefined): this {
    return this.setFieldValue('insurance', insurance);
  }

  hasInsurance(): boolean {
    return this.hasFieldValue('insurance');
  }

  /** Appends a new, empty EligibilityResponseInsurance to `insurance` and returns it so it can be filled in. */
  addInsurance(): EligibilityResponseInsurance;
  /** Appends the given EligibilityResponseInsurance to `insurance` and returns this object for chaining. */
  addInsurance(eligibilityResponseInsurance: EligibilityResponseInsurance): this;
  addInsurance(
    eligibilityResponseInsurance?: EligibilityResponseInsurance
  ): EligibilityResponseInsurance | this {
    if (eligibilityResponseInsurance !== undefined) {
      return this.addFieldValue('insurance', eligibilityResponseInsurance);
    }
    const createdEligibilityResponseInsurance = new EligibilityResponseInsurance();
    this.addFieldValue('insurance', createdEligibilityResponseInsurance);
    return createdEligibilityResponseInsurance;
  }

  /** The first EligibilityResponseInsurance of `insurance`. One is added when the list is empty. */
  getInsuranceFirstRep(): EligibilityResponseInsurance {
    const firstEligibilityResponseInsurance = this.getInsurance()[0];
    return firstEligibilityResponseInsurance === undefined
      ? this.addInsurance()
      : firstEligibilityResponseInsurance;
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

  /** Processing errors (0..*) Never undefined; an empty list is created when absent. */
  getError(): EligibilityResponseError[] {
    if (this.error === undefined) {
      this.error = [];
    }
    return this.error;
  }

  setError(error: EligibilityResponseError[] | undefined): this {
    return this.setFieldValue('error', error);
  }

  hasError(): boolean {
    return this.hasFieldValue('error');
  }

  /** Appends a new, empty EligibilityResponseError to `error` and returns it so it can be filled in. */
  addError(): EligibilityResponseError;
  /** Appends the given EligibilityResponseError to `error` and returns this object for chaining. */
  addError(eligibilityResponseError: EligibilityResponseError): this;
  addError(eligibilityResponseError?: EligibilityResponseError): EligibilityResponseError | this {
    if (eligibilityResponseError !== undefined) {
      return this.addFieldValue('error', eligibilityResponseError);
    }
    const createdEligibilityResponseError = new EligibilityResponseError();
    this.addFieldValue('error', createdEligibilityResponseError);
    return createdEligibilityResponseError;
  }

  /** The first EligibilityResponseError of `error`. One is added when the list is empty. */
  getErrorFirstRep(): EligibilityResponseError {
    const firstEligibilityResponseError = this.getError()[0];
    return firstEligibilityResponseError === undefined
      ? this.addError()
      : firstEligibilityResponseError;
  }
}

modelTypeRegistry.register('EligibilityResponse', EligibilityResponse, true);

/** True when the value is a EligibilityResponse model instance. */
export function isEligibilityResponse(candidate: unknown): candidate is EligibilityResponse {
  return candidate instanceof EligibilityResponse;
}

/**
 * Details by insurance coverage
 */
export class EligibilityResponseInsurance extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'coverage',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'coverage', typeCode: 'Reference', targetResourceTypes: ['Coverage'] }],
    },
    {
      elementName: 'contract',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'contract', typeCode: 'Reference', targetResourceTypes: ['Contract'] }],
    },
    {
      elementName: 'benefitBalance',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'benefitBalance', typeCode: 'EligibilityResponseInsuranceBenefitBalance' },
      ],
    },
  ];

  /** Updated Coverage details (0..1) */
  coverage?: Reference;

  /** Contract details (0..1) */
  contract?: Reference;

  /** Benefits by Category (0..*) */
  benefitBalance?: EligibilityResponseInsuranceBenefitBalance[];

  override fhirType(): string {
    return 'EligibilityResponse.insurance';
  }

  /** FHIR JSON for this EligibilityResponseInsurance, typed as the plain `EligibilityResponseInsurance` data type. */
  override toJSON(): plainTypes.EligibilityResponseInsurance {
    return this.serialize() as plainTypes.EligibilityResponseInsurance;
  }

  /** Updated Coverage details (0..1) Created when absent. */
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

  /** Contract details (0..1) Created when absent. */
  getContract(): Reference {
    if (this.contract === undefined) {
      this.contract = new Reference();
    }
    return this.contract;
  }

  setContract(contract: Reference | undefined): this {
    return this.setFieldValue('contract', contract);
  }

  hasContract(): boolean {
    return this.hasFieldValue('contract');
  }

  /** Benefits by Category (0..*) Never undefined; an empty list is created when absent. */
  getBenefitBalance(): EligibilityResponseInsuranceBenefitBalance[] {
    if (this.benefitBalance === undefined) {
      this.benefitBalance = [];
    }
    return this.benefitBalance;
  }

  setBenefitBalance(
    benefitBalance: EligibilityResponseInsuranceBenefitBalance[] | undefined
  ): this {
    return this.setFieldValue('benefitBalance', benefitBalance);
  }

  hasBenefitBalance(): boolean {
    return this.hasFieldValue('benefitBalance');
  }

  /** Appends a new, empty EligibilityResponseInsuranceBenefitBalance to `benefitBalance` and returns it so it can be filled in. */
  addBenefitBalance(): EligibilityResponseInsuranceBenefitBalance;
  /** Appends the given EligibilityResponseInsuranceBenefitBalance to `benefitBalance` and returns this object for chaining. */
  addBenefitBalance(
    eligibilityResponseInsuranceBenefitBalance: EligibilityResponseInsuranceBenefitBalance
  ): this;
  addBenefitBalance(
    eligibilityResponseInsuranceBenefitBalance?: EligibilityResponseInsuranceBenefitBalance
  ): EligibilityResponseInsuranceBenefitBalance | this {
    if (eligibilityResponseInsuranceBenefitBalance !== undefined) {
      return this.addFieldValue('benefitBalance', eligibilityResponseInsuranceBenefitBalance);
    }
    const createdEligibilityResponseInsuranceBenefitBalance =
      new EligibilityResponseInsuranceBenefitBalance();
    this.addFieldValue('benefitBalance', createdEligibilityResponseInsuranceBenefitBalance);
    return createdEligibilityResponseInsuranceBenefitBalance;
  }

  /** The first EligibilityResponseInsuranceBenefitBalance of `benefitBalance`. One is added when the list is empty. */
  getBenefitBalanceFirstRep(): EligibilityResponseInsuranceBenefitBalance {
    const firstEligibilityResponseInsuranceBenefitBalance = this.getBenefitBalance()[0];
    return firstEligibilityResponseInsuranceBenefitBalance === undefined
      ? this.addBenefitBalance()
      : firstEligibilityResponseInsuranceBenefitBalance;
  }
}

modelTypeRegistry.register('EligibilityResponseInsurance', EligibilityResponseInsurance, false);

/**
 * Benefits by Category
 */
export class EligibilityResponseInsuranceBenefitBalance extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'category',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'subCategory',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'subCategory', typeCode: 'CodeableConcept' }],
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
      elementName: 'financial',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'financial', typeCode: 'EligibilityResponseInsuranceBenefitBalanceFinancial' },
      ],
    },
  ];

  /** Type of services covered (1..1) */
  category?: CodeableConcept;

  /** Detailed services covered within the type (0..1) */
  subCategory?: CodeableConcept;

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
  financial?: EligibilityResponseInsuranceBenefitBalanceFinancial[];

  override fhirType(): string {
    return 'EligibilityResponse.insurance.benefitBalance';
  }

  /** FHIR JSON for this EligibilityResponseInsuranceBenefitBalance, typed as the plain `EligibilityResponseBenefitBalance` data type. */
  override toJSON(): plainTypes.EligibilityResponseBenefitBalance {
    return this.serialize() as plainTypes.EligibilityResponseBenefitBalance;
  }

  /** Type of services covered (1..1) Created when absent. */
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

  /** Detailed services covered within the type (0..1) Created when absent. */
  getSubCategory(): CodeableConcept {
    if (this.subCategory === undefined) {
      this.subCategory = new CodeableConcept();
    }
    return this.subCategory;
  }

  setSubCategory(subCategory: CodeableConcept | undefined): this {
    return this.setFieldValue('subCategory', subCategory);
  }

  hasSubCategory(): boolean {
    return this.hasFieldValue('subCategory');
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
  getFinancial(): EligibilityResponseInsuranceBenefitBalanceFinancial[] {
    if (this.financial === undefined) {
      this.financial = [];
    }
    return this.financial;
  }

  setFinancial(financial: EligibilityResponseInsuranceBenefitBalanceFinancial[] | undefined): this {
    return this.setFieldValue('financial', financial);
  }

  hasFinancial(): boolean {
    return this.hasFieldValue('financial');
  }

  /** Appends a new, empty EligibilityResponseInsuranceBenefitBalanceFinancial to `financial` and returns it so it can be filled in. */
  addFinancial(): EligibilityResponseInsuranceBenefitBalanceFinancial;
  /** Appends the given EligibilityResponseInsuranceBenefitBalanceFinancial to `financial` and returns this object for chaining. */
  addFinancial(
    eligibilityResponseInsuranceBenefitBalanceFinancial: EligibilityResponseInsuranceBenefitBalanceFinancial
  ): this;
  addFinancial(
    eligibilityResponseInsuranceBenefitBalanceFinancial?: EligibilityResponseInsuranceBenefitBalanceFinancial
  ): EligibilityResponseInsuranceBenefitBalanceFinancial | this {
    if (eligibilityResponseInsuranceBenefitBalanceFinancial !== undefined) {
      return this.addFieldValue('financial', eligibilityResponseInsuranceBenefitBalanceFinancial);
    }
    const createdEligibilityResponseInsuranceBenefitBalanceFinancial =
      new EligibilityResponseInsuranceBenefitBalanceFinancial();
    this.addFieldValue('financial', createdEligibilityResponseInsuranceBenefitBalanceFinancial);
    return createdEligibilityResponseInsuranceBenefitBalanceFinancial;
  }

  /** The first EligibilityResponseInsuranceBenefitBalanceFinancial of `financial`. One is added when the list is empty. */
  getFinancialFirstRep(): EligibilityResponseInsuranceBenefitBalanceFinancial {
    const firstEligibilityResponseInsuranceBenefitBalanceFinancial = this.getFinancial()[0];
    return firstEligibilityResponseInsuranceBenefitBalanceFinancial === undefined
      ? this.addFinancial()
      : firstEligibilityResponseInsuranceBenefitBalanceFinancial;
  }
}

modelTypeRegistry.register(
  'EligibilityResponseInsuranceBenefitBalance',
  EligibilityResponseInsuranceBenefitBalance,
  false
);

/**
 * Benefit Summary
 */
export class EligibilityResponseInsuranceBenefitBalanceFinancial extends BackboneElement {
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
        { jsonKey: 'usedMoney', typeCode: 'Money' },
      ],
    },
  ];

  /** Deductable, visits, benefit amount (1..1) */
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
  usedMoney?: Money;

  override fhirType(): string {
    return 'EligibilityResponse.insurance.benefitBalance.financial';
  }

  /** FHIR JSON for this EligibilityResponseInsuranceBenefitBalanceFinancial, typed as the plain `EligibilityResponseFinancial` data type. */
  override toJSON(): plainTypes.EligibilityResponseFinancial {
    return this.serialize() as plainTypes.EligibilityResponseFinancial;
  }

  /** Deductable, visits, benefit amount (1..1) Created when absent. */
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
  getUsed(): number | Money | undefined {
    return this.getChoiceValue<number | Money>('used');
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
  'EligibilityResponseInsuranceBenefitBalanceFinancial',
  EligibilityResponseInsuranceBenefitBalanceFinancial,
  false
);

/**
 * Processing errors
 */
export class EligibilityResponseError extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Error code detailing processing issues (1..1) */
  code?: CodeableConcept;

  override fhirType(): string {
    return 'EligibilityResponse.error';
  }

  /** FHIR JSON for this EligibilityResponseError, typed as the plain `EligibilityResponseError` data type. */
  override toJSON(): plainTypes.EligibilityResponseError {
    return this.serialize() as plainTypes.EligibilityResponseError;
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
}

modelTypeRegistry.register('EligibilityResponseError', EligibilityResponseError, false);
