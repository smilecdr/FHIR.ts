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
import { ExtendedContactDetail } from './extendedContactDetail';
import { Identifier } from './identifier';
import { Money } from './money';
import { Period } from './period';
import { Quantity } from './quantity';
import { Reference } from './reference';

/**
 * Details of a Health Insurance product/plan provided by an organization.
 */
export class InsurancePlan extends DomainResource {
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
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.PublicationStatus },
      ],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'alias',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'alias', typeCode: 'string' }],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
    {
      elementName: 'ownedBy',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'ownedBy', typeCode: 'Reference', targetResourceTypes: ['Organization'] }],
    },
    {
      elementName: 'administeredBy',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'administeredBy', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
    {
      elementName: 'coverageArea',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'coverageArea', typeCode: 'Reference', targetResourceTypes: ['Location'] },
      ],
    },
    {
      elementName: 'contact',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'contact', typeCode: 'ExtendedContactDetail' }],
    },
    {
      elementName: 'endpoint',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'endpoint', typeCode: 'Reference', targetResourceTypes: ['Endpoint'] }],
    },
    {
      elementName: 'network',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'network', typeCode: 'Reference', targetResourceTypes: ['Organization'] }],
    },
    {
      elementName: 'coverage',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'coverage', typeCode: 'InsurancePlanCoverage' }],
    },
    {
      elementName: 'plan',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'plan', typeCode: 'InsurancePlanPlan' }],
    },
  ];

  readonly resourceType = 'InsurancePlan';

  /** Business Identifier for Product (0..*) */
  identifier?: Identifier[];

  /** draft | active | retired | unknown (0..1) */
  status?: valueSetCodes.PublicationStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Kind of product (0..*) */
  type?: CodeableConcept[];

  /** Official name (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Alternate names (0..*) */
  alias?: string[];
  /** Id and extensions of the primitive `alias`. */
  _alias?: (Element | null)[];

  /** When the product is available (0..1) */
  period?: Period;

  /** Product issuer (0..1) */
  ownedBy?: Reference;

  /** Product administrator (0..1) */
  administeredBy?: Reference;

  /** Where product applies (0..*) */
  coverageArea?: Reference[];

  /** Official contact details relevant to the health insurance plan/product (0..*) */
  contact?: ExtendedContactDetail[];

  /** Technical endpoint (0..*) */
  endpoint?: Reference[];

  /** What networks are Included (0..*) */
  network?: Reference[];

  /** Coverage details (0..*) */
  coverage?: InsurancePlanCoverage[];

  /** Plan details (0..*) */
  plan?: InsurancePlanPlan[];

  override fhirType(): string {
    return 'InsurancePlan';
  }

  /** FHIR JSON for this InsurancePlan, typed as the plain `InsurancePlan` data type. */
  override toJSON(): plainTypes.InsurancePlan {
    return this.serialize() as plainTypes.InsurancePlan;
  }

  /** Business Identifier for Product (0..*) Never undefined; an empty list is created when absent. */
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

  /** draft | active | retired | unknown (0..1) */
  getStatus(): valueSetCodes.PublicationStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.PublicationStatus | undefined): this {
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

  /** Kind of product (0..*) Never undefined; an empty list is created when absent. */
  getType(): CodeableConcept[] {
    if (this.type === undefined) {
      this.type = [];
    }
    return this.type;
  }

  setType(type: CodeableConcept[] | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Appends a new, empty CodeableConcept to `type` and returns it so it can be filled in. */
  addType(): CodeableConcept;
  /** Appends the given CodeableConcept to `type` and returns this object for chaining. */
  addType(codeableConcept: CodeableConcept): this;
  addType(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('type', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('type', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `type`. One is added when the list is empty. */
  getTypeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getType()[0];
    return firstCodeableConcept === undefined ? this.addType() : firstCodeableConcept;
  }

  /** Official name (0..1) */
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

  /** Alternate names (0..*) Never undefined; an empty list is created when absent. */
  getAlias(): string[] {
    if (this.alias === undefined) {
      this.alias = [];
    }
    return this.alias;
  }

  setAlias(alias: string[] | undefined): this {
    return this.setFieldValue('alias', alias);
  }

  hasAlias(): boolean {
    return this.hasFieldValue('alias');
  }

  /** Appends one value to `alias`. Throws a FhirModelError when it is not a valid FHIR string. */
  addAlias(alias: string): this {
    return this.addFieldValue('alias', alias);
  }

  /** When the product is available (0..1) Created when absent. */
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

  /** Product issuer (0..1) Created when absent. */
  getOwnedBy(): Reference {
    if (this.ownedBy === undefined) {
      this.ownedBy = new Reference();
    }
    return this.ownedBy;
  }

  setOwnedBy(ownedBy: Reference | undefined): this {
    return this.setFieldValue('ownedBy', ownedBy);
  }

  hasOwnedBy(): boolean {
    return this.hasFieldValue('ownedBy');
  }

  /** Product administrator (0..1) Created when absent. */
  getAdministeredBy(): Reference {
    if (this.administeredBy === undefined) {
      this.administeredBy = new Reference();
    }
    return this.administeredBy;
  }

  setAdministeredBy(administeredBy: Reference | undefined): this {
    return this.setFieldValue('administeredBy', administeredBy);
  }

  hasAdministeredBy(): boolean {
    return this.hasFieldValue('administeredBy');
  }

  /** Where product applies (0..*) Never undefined; an empty list is created when absent. */
  getCoverageArea(): Reference[] {
    if (this.coverageArea === undefined) {
      this.coverageArea = [];
    }
    return this.coverageArea;
  }

  setCoverageArea(coverageArea: Reference[] | undefined): this {
    return this.setFieldValue('coverageArea', coverageArea);
  }

  hasCoverageArea(): boolean {
    return this.hasFieldValue('coverageArea');
  }

  /** Appends a new, empty Reference to `coverageArea` and returns it so it can be filled in. */
  addCoverageArea(): Reference;
  /** Appends the given Reference to `coverageArea` and returns this object for chaining. */
  addCoverageArea(reference: Reference): this;
  addCoverageArea(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('coverageArea', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('coverageArea', createdReference);
    return createdReference;
  }

  /** The first Reference of `coverageArea`. One is added when the list is empty. */
  getCoverageAreaFirstRep(): Reference {
    const firstReference = this.getCoverageArea()[0];
    return firstReference === undefined ? this.addCoverageArea() : firstReference;
  }

  /** Official contact details relevant to the health insurance plan/product (0..*) Never undefined; an empty list is created when absent. */
  getContact(): ExtendedContactDetail[] {
    if (this.contact === undefined) {
      this.contact = [];
    }
    return this.contact;
  }

  setContact(contact: ExtendedContactDetail[] | undefined): this {
    return this.setFieldValue('contact', contact);
  }

  hasContact(): boolean {
    return this.hasFieldValue('contact');
  }

  /** Appends a new, empty ExtendedContactDetail to `contact` and returns it so it can be filled in. */
  addContact(): ExtendedContactDetail;
  /** Appends the given ExtendedContactDetail to `contact` and returns this object for chaining. */
  addContact(extendedContactDetail: ExtendedContactDetail): this;
  addContact(extendedContactDetail?: ExtendedContactDetail): ExtendedContactDetail | this {
    if (extendedContactDetail !== undefined) {
      return this.addFieldValue('contact', extendedContactDetail);
    }
    const createdExtendedContactDetail = new ExtendedContactDetail();
    this.addFieldValue('contact', createdExtendedContactDetail);
    return createdExtendedContactDetail;
  }

  /** The first ExtendedContactDetail of `contact`. One is added when the list is empty. */
  getContactFirstRep(): ExtendedContactDetail {
    const firstExtendedContactDetail = this.getContact()[0];
    return firstExtendedContactDetail === undefined
      ? this.addContact()
      : firstExtendedContactDetail;
  }

  /** Technical endpoint (0..*) Never undefined; an empty list is created when absent. */
  getEndpoint(): Reference[] {
    if (this.endpoint === undefined) {
      this.endpoint = [];
    }
    return this.endpoint;
  }

  setEndpoint(endpoint: Reference[] | undefined): this {
    return this.setFieldValue('endpoint', endpoint);
  }

  hasEndpoint(): boolean {
    return this.hasFieldValue('endpoint');
  }

  /** Appends a new, empty Reference to `endpoint` and returns it so it can be filled in. */
  addEndpoint(): Reference;
  /** Appends the given Reference to `endpoint` and returns this object for chaining. */
  addEndpoint(reference: Reference): this;
  addEndpoint(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('endpoint', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('endpoint', createdReference);
    return createdReference;
  }

  /** The first Reference of `endpoint`. One is added when the list is empty. */
  getEndpointFirstRep(): Reference {
    const firstReference = this.getEndpoint()[0];
    return firstReference === undefined ? this.addEndpoint() : firstReference;
  }

  /** What networks are Included (0..*) Never undefined; an empty list is created when absent. */
  getNetwork(): Reference[] {
    if (this.network === undefined) {
      this.network = [];
    }
    return this.network;
  }

  setNetwork(network: Reference[] | undefined): this {
    return this.setFieldValue('network', network);
  }

  hasNetwork(): boolean {
    return this.hasFieldValue('network');
  }

  /** Appends a new, empty Reference to `network` and returns it so it can be filled in. */
  addNetwork(): Reference;
  /** Appends the given Reference to `network` and returns this object for chaining. */
  addNetwork(reference: Reference): this;
  addNetwork(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('network', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('network', createdReference);
    return createdReference;
  }

  /** The first Reference of `network`. One is added when the list is empty. */
  getNetworkFirstRep(): Reference {
    const firstReference = this.getNetwork()[0];
    return firstReference === undefined ? this.addNetwork() : firstReference;
  }

  /** Coverage details (0..*) Never undefined; an empty list is created when absent. */
  getCoverage(): InsurancePlanCoverage[] {
    if (this.coverage === undefined) {
      this.coverage = [];
    }
    return this.coverage;
  }

  setCoverage(coverage: InsurancePlanCoverage[] | undefined): this {
    return this.setFieldValue('coverage', coverage);
  }

  hasCoverage(): boolean {
    return this.hasFieldValue('coverage');
  }

  /** Appends a new, empty InsurancePlanCoverage to `coverage` and returns it so it can be filled in. */
  addCoverage(): InsurancePlanCoverage;
  /** Appends the given InsurancePlanCoverage to `coverage` and returns this object for chaining. */
  addCoverage(insurancePlanCoverage: InsurancePlanCoverage): this;
  addCoverage(insurancePlanCoverage?: InsurancePlanCoverage): InsurancePlanCoverage | this {
    if (insurancePlanCoverage !== undefined) {
      return this.addFieldValue('coverage', insurancePlanCoverage);
    }
    const createdInsurancePlanCoverage = new InsurancePlanCoverage();
    this.addFieldValue('coverage', createdInsurancePlanCoverage);
    return createdInsurancePlanCoverage;
  }

  /** The first InsurancePlanCoverage of `coverage`. One is added when the list is empty. */
  getCoverageFirstRep(): InsurancePlanCoverage {
    const firstInsurancePlanCoverage = this.getCoverage()[0];
    return firstInsurancePlanCoverage === undefined
      ? this.addCoverage()
      : firstInsurancePlanCoverage;
  }

  /** Plan details (0..*) Never undefined; an empty list is created when absent. */
  getPlan(): InsurancePlanPlan[] {
    if (this.plan === undefined) {
      this.plan = [];
    }
    return this.plan;
  }

  setPlan(plan: InsurancePlanPlan[] | undefined): this {
    return this.setFieldValue('plan', plan);
  }

  hasPlan(): boolean {
    return this.hasFieldValue('plan');
  }

  /** Appends a new, empty InsurancePlanPlan to `plan` and returns it so it can be filled in. */
  addPlan(): InsurancePlanPlan;
  /** Appends the given InsurancePlanPlan to `plan` and returns this object for chaining. */
  addPlan(insurancePlanPlan: InsurancePlanPlan): this;
  addPlan(insurancePlanPlan?: InsurancePlanPlan): InsurancePlanPlan | this {
    if (insurancePlanPlan !== undefined) {
      return this.addFieldValue('plan', insurancePlanPlan);
    }
    const createdInsurancePlanPlan = new InsurancePlanPlan();
    this.addFieldValue('plan', createdInsurancePlanPlan);
    return createdInsurancePlanPlan;
  }

  /** The first InsurancePlanPlan of `plan`. One is added when the list is empty. */
  getPlanFirstRep(): InsurancePlanPlan {
    const firstInsurancePlanPlan = this.getPlan()[0];
    return firstInsurancePlanPlan === undefined ? this.addPlan() : firstInsurancePlanPlan;
  }
}

modelTypeRegistry.register('InsurancePlan', InsurancePlan, true);

/** True when the value is a InsurancePlan model instance. */
export function isInsurancePlan(candidate: unknown): candidate is InsurancePlan {
  return candidate instanceof InsurancePlan;
}

/**
 * Coverage details
 */
export class InsurancePlanCoverage extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'network',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'network', typeCode: 'Reference', targetResourceTypes: ['Organization'] }],
    },
    {
      elementName: 'benefit',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'benefit', typeCode: 'InsurancePlanCoverageBenefit' }],
    },
  ];

  /** Type of coverage (1..1) */
  type?: CodeableConcept;

  /** What networks provide coverage (0..*) */
  network?: Reference[];

  /** List of benefits (1..*) */
  benefit?: InsurancePlanCoverageBenefit[];

  override fhirType(): string {
    return 'InsurancePlan.coverage';
  }

  /** FHIR JSON for this InsurancePlanCoverage, typed as the plain `InsurancePlanCoverage` data type. */
  override toJSON(): plainTypes.InsurancePlanCoverage {
    return this.serialize() as plainTypes.InsurancePlanCoverage;
  }

  /** Type of coverage (1..1) Created when absent. */
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

  /** What networks provide coverage (0..*) Never undefined; an empty list is created when absent. */
  getNetwork(): Reference[] {
    if (this.network === undefined) {
      this.network = [];
    }
    return this.network;
  }

  setNetwork(network: Reference[] | undefined): this {
    return this.setFieldValue('network', network);
  }

  hasNetwork(): boolean {
    return this.hasFieldValue('network');
  }

  /** Appends a new, empty Reference to `network` and returns it so it can be filled in. */
  addNetwork(): Reference;
  /** Appends the given Reference to `network` and returns this object for chaining. */
  addNetwork(reference: Reference): this;
  addNetwork(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('network', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('network', createdReference);
    return createdReference;
  }

  /** The first Reference of `network`. One is added when the list is empty. */
  getNetworkFirstRep(): Reference {
    const firstReference = this.getNetwork()[0];
    return firstReference === undefined ? this.addNetwork() : firstReference;
  }

  /** List of benefits (1..*) Never undefined; an empty list is created when absent. */
  getBenefit(): InsurancePlanCoverageBenefit[] {
    if (this.benefit === undefined) {
      this.benefit = [];
    }
    return this.benefit;
  }

  setBenefit(benefit: InsurancePlanCoverageBenefit[] | undefined): this {
    return this.setFieldValue('benefit', benefit);
  }

  hasBenefit(): boolean {
    return this.hasFieldValue('benefit');
  }

  /** Appends a new, empty InsurancePlanCoverageBenefit to `benefit` and returns it so it can be filled in. */
  addBenefit(): InsurancePlanCoverageBenefit;
  /** Appends the given InsurancePlanCoverageBenefit to `benefit` and returns this object for chaining. */
  addBenefit(insurancePlanCoverageBenefit: InsurancePlanCoverageBenefit): this;
  addBenefit(
    insurancePlanCoverageBenefit?: InsurancePlanCoverageBenefit
  ): InsurancePlanCoverageBenefit | this {
    if (insurancePlanCoverageBenefit !== undefined) {
      return this.addFieldValue('benefit', insurancePlanCoverageBenefit);
    }
    const createdInsurancePlanCoverageBenefit = new InsurancePlanCoverageBenefit();
    this.addFieldValue('benefit', createdInsurancePlanCoverageBenefit);
    return createdInsurancePlanCoverageBenefit;
  }

  /** The first InsurancePlanCoverageBenefit of `benefit`. One is added when the list is empty. */
  getBenefitFirstRep(): InsurancePlanCoverageBenefit {
    const firstInsurancePlanCoverageBenefit = this.getBenefit()[0];
    return firstInsurancePlanCoverageBenefit === undefined
      ? this.addBenefit()
      : firstInsurancePlanCoverageBenefit;
  }
}

modelTypeRegistry.register('InsurancePlanCoverage', InsurancePlanCoverage, false);

/**
 * List of benefits
 */
export class InsurancePlanCoverageBenefit extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'requirement',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'requirement', typeCode: 'string' }],
    },
    {
      elementName: 'limit',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'limit', typeCode: 'InsurancePlanCoverageBenefitLimit' }],
    },
  ];

  /** Type of benefit (1..1) */
  type?: CodeableConcept;

  /** Referral requirements (0..1) */
  requirement?: string;
  /** Id and extensions of the primitive `requirement`. */
  _requirement?: Element;

  /** Benefit limits (0..*) */
  limit?: InsurancePlanCoverageBenefitLimit[];

  override fhirType(): string {
    return 'InsurancePlan.coverage.benefit';
  }

  /** FHIR JSON for this InsurancePlanCoverageBenefit, typed as the plain `InsurancePlanBenefit` data type. */
  override toJSON(): plainTypes.InsurancePlanBenefit {
    return this.serialize() as plainTypes.InsurancePlanBenefit;
  }

  /** Type of benefit (1..1) Created when absent. */
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

  /** Referral requirements (0..1) */
  getRequirement(): string | undefined {
    return this.requirement;
  }

  /** Sets `requirement`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setRequirement(requirement: string | undefined): this {
    return this.setFieldValue('requirement', requirement);
  }

  hasRequirement(): boolean {
    return this.hasFieldValue('requirement');
  }

  /** The element carrying the id and extensions of `requirement`. Created when absent. */
  getRequirementElement(): Element {
    if (this._requirement === undefined) {
      this._requirement = new Element();
    }
    return this._requirement;
  }

  setRequirementElement(requirementElement: Element | undefined): this {
    this._requirement = requirementElement;
    return this;
  }

  /** Benefit limits (0..*) Never undefined; an empty list is created when absent. */
  getLimit(): InsurancePlanCoverageBenefitLimit[] {
    if (this.limit === undefined) {
      this.limit = [];
    }
    return this.limit;
  }

  setLimit(limit: InsurancePlanCoverageBenefitLimit[] | undefined): this {
    return this.setFieldValue('limit', limit);
  }

  hasLimit(): boolean {
    return this.hasFieldValue('limit');
  }

  /** Appends a new, empty InsurancePlanCoverageBenefitLimit to `limit` and returns it so it can be filled in. */
  addLimit(): InsurancePlanCoverageBenefitLimit;
  /** Appends the given InsurancePlanCoverageBenefitLimit to `limit` and returns this object for chaining. */
  addLimit(insurancePlanCoverageBenefitLimit: InsurancePlanCoverageBenefitLimit): this;
  addLimit(
    insurancePlanCoverageBenefitLimit?: InsurancePlanCoverageBenefitLimit
  ): InsurancePlanCoverageBenefitLimit | this {
    if (insurancePlanCoverageBenefitLimit !== undefined) {
      return this.addFieldValue('limit', insurancePlanCoverageBenefitLimit);
    }
    const createdInsurancePlanCoverageBenefitLimit = new InsurancePlanCoverageBenefitLimit();
    this.addFieldValue('limit', createdInsurancePlanCoverageBenefitLimit);
    return createdInsurancePlanCoverageBenefitLimit;
  }

  /** The first InsurancePlanCoverageBenefitLimit of `limit`. One is added when the list is empty. */
  getLimitFirstRep(): InsurancePlanCoverageBenefitLimit {
    const firstInsurancePlanCoverageBenefitLimit = this.getLimit()[0];
    return firstInsurancePlanCoverageBenefitLimit === undefined
      ? this.addLimit()
      : firstInsurancePlanCoverageBenefitLimit;
  }
}

modelTypeRegistry.register('InsurancePlanCoverageBenefit', InsurancePlanCoverageBenefit, false);

/**
 * Benefit limits
 */
export class InsurancePlanCoverageBenefitLimit extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'value',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'value', typeCode: 'Quantity' }],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Maximum value allowed (0..1) */
  value?: Quantity;

  /** Benefit limit details (0..1) */
  code?: CodeableConcept;

  override fhirType(): string {
    return 'InsurancePlan.coverage.benefit.limit';
  }

  /** FHIR JSON for this InsurancePlanCoverageBenefitLimit, typed as the plain `InsurancePlanLimit` data type. */
  override toJSON(): plainTypes.InsurancePlanLimit {
    return this.serialize() as plainTypes.InsurancePlanLimit;
  }

  /** Maximum value allowed (0..1) Created when absent. */
  getValue(): Quantity {
    if (this.value === undefined) {
      this.value = new Quantity();
    }
    return this.value;
  }

  setValue(value: Quantity | undefined): this {
    return this.setFieldValue('value', value);
  }

  hasValue(): boolean {
    return this.hasFieldValue('value');
  }

  /** Benefit limit details (0..1) Created when absent. */
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

modelTypeRegistry.register(
  'InsurancePlanCoverageBenefitLimit',
  InsurancePlanCoverageBenefitLimit,
  false
);

/**
 * Plan details
 */
export class InsurancePlanPlan extends BackboneElement {
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
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'coverageArea',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'coverageArea', typeCode: 'Reference', targetResourceTypes: ['Location'] },
      ],
    },
    {
      elementName: 'network',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'network', typeCode: 'Reference', targetResourceTypes: ['Organization'] }],
    },
    {
      elementName: 'generalCost',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'generalCost', typeCode: 'InsurancePlanPlanGeneralCost' }],
    },
    {
      elementName: 'specificCost',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'specificCost', typeCode: 'InsurancePlanPlanSpecificCost' }],
    },
  ];

  /** Business Identifier for Product (0..*) */
  identifier?: Identifier[];

  /** Type of plan (0..1) */
  type?: CodeableConcept;

  /** Where product applies (0..*) */
  coverageArea?: Reference[];

  /** What networks provide coverage (0..*) */
  network?: Reference[];

  /** Overall costs (0..*) */
  generalCost?: InsurancePlanPlanGeneralCost[];

  /** Specific costs (0..*) */
  specificCost?: InsurancePlanPlanSpecificCost[];

  override fhirType(): string {
    return 'InsurancePlan.plan';
  }

  /** FHIR JSON for this InsurancePlanPlan, typed as the plain `InsurancePlanPlan` data type. */
  override toJSON(): plainTypes.InsurancePlanPlan {
    return this.serialize() as plainTypes.InsurancePlanPlan;
  }

  /** Business Identifier for Product (0..*) Never undefined; an empty list is created when absent. */
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

  /** Type of plan (0..1) Created when absent. */
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

  /** Where product applies (0..*) Never undefined; an empty list is created when absent. */
  getCoverageArea(): Reference[] {
    if (this.coverageArea === undefined) {
      this.coverageArea = [];
    }
    return this.coverageArea;
  }

  setCoverageArea(coverageArea: Reference[] | undefined): this {
    return this.setFieldValue('coverageArea', coverageArea);
  }

  hasCoverageArea(): boolean {
    return this.hasFieldValue('coverageArea');
  }

  /** Appends a new, empty Reference to `coverageArea` and returns it so it can be filled in. */
  addCoverageArea(): Reference;
  /** Appends the given Reference to `coverageArea` and returns this object for chaining. */
  addCoverageArea(reference: Reference): this;
  addCoverageArea(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('coverageArea', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('coverageArea', createdReference);
    return createdReference;
  }

  /** The first Reference of `coverageArea`. One is added when the list is empty. */
  getCoverageAreaFirstRep(): Reference {
    const firstReference = this.getCoverageArea()[0];
    return firstReference === undefined ? this.addCoverageArea() : firstReference;
  }

  /** What networks provide coverage (0..*) Never undefined; an empty list is created when absent. */
  getNetwork(): Reference[] {
    if (this.network === undefined) {
      this.network = [];
    }
    return this.network;
  }

  setNetwork(network: Reference[] | undefined): this {
    return this.setFieldValue('network', network);
  }

  hasNetwork(): boolean {
    return this.hasFieldValue('network');
  }

  /** Appends a new, empty Reference to `network` and returns it so it can be filled in. */
  addNetwork(): Reference;
  /** Appends the given Reference to `network` and returns this object for chaining. */
  addNetwork(reference: Reference): this;
  addNetwork(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('network', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('network', createdReference);
    return createdReference;
  }

  /** The first Reference of `network`. One is added when the list is empty. */
  getNetworkFirstRep(): Reference {
    const firstReference = this.getNetwork()[0];
    return firstReference === undefined ? this.addNetwork() : firstReference;
  }

  /** Overall costs (0..*) Never undefined; an empty list is created when absent. */
  getGeneralCost(): InsurancePlanPlanGeneralCost[] {
    if (this.generalCost === undefined) {
      this.generalCost = [];
    }
    return this.generalCost;
  }

  setGeneralCost(generalCost: InsurancePlanPlanGeneralCost[] | undefined): this {
    return this.setFieldValue('generalCost', generalCost);
  }

  hasGeneralCost(): boolean {
    return this.hasFieldValue('generalCost');
  }

  /** Appends a new, empty InsurancePlanPlanGeneralCost to `generalCost` and returns it so it can be filled in. */
  addGeneralCost(): InsurancePlanPlanGeneralCost;
  /** Appends the given InsurancePlanPlanGeneralCost to `generalCost` and returns this object for chaining. */
  addGeneralCost(insurancePlanPlanGeneralCost: InsurancePlanPlanGeneralCost): this;
  addGeneralCost(
    insurancePlanPlanGeneralCost?: InsurancePlanPlanGeneralCost
  ): InsurancePlanPlanGeneralCost | this {
    if (insurancePlanPlanGeneralCost !== undefined) {
      return this.addFieldValue('generalCost', insurancePlanPlanGeneralCost);
    }
    const createdInsurancePlanPlanGeneralCost = new InsurancePlanPlanGeneralCost();
    this.addFieldValue('generalCost', createdInsurancePlanPlanGeneralCost);
    return createdInsurancePlanPlanGeneralCost;
  }

  /** The first InsurancePlanPlanGeneralCost of `generalCost`. One is added when the list is empty. */
  getGeneralCostFirstRep(): InsurancePlanPlanGeneralCost {
    const firstInsurancePlanPlanGeneralCost = this.getGeneralCost()[0];
    return firstInsurancePlanPlanGeneralCost === undefined
      ? this.addGeneralCost()
      : firstInsurancePlanPlanGeneralCost;
  }

  /** Specific costs (0..*) Never undefined; an empty list is created when absent. */
  getSpecificCost(): InsurancePlanPlanSpecificCost[] {
    if (this.specificCost === undefined) {
      this.specificCost = [];
    }
    return this.specificCost;
  }

  setSpecificCost(specificCost: InsurancePlanPlanSpecificCost[] | undefined): this {
    return this.setFieldValue('specificCost', specificCost);
  }

  hasSpecificCost(): boolean {
    return this.hasFieldValue('specificCost');
  }

  /** Appends a new, empty InsurancePlanPlanSpecificCost to `specificCost` and returns it so it can be filled in. */
  addSpecificCost(): InsurancePlanPlanSpecificCost;
  /** Appends the given InsurancePlanPlanSpecificCost to `specificCost` and returns this object for chaining. */
  addSpecificCost(insurancePlanPlanSpecificCost: InsurancePlanPlanSpecificCost): this;
  addSpecificCost(
    insurancePlanPlanSpecificCost?: InsurancePlanPlanSpecificCost
  ): InsurancePlanPlanSpecificCost | this {
    if (insurancePlanPlanSpecificCost !== undefined) {
      return this.addFieldValue('specificCost', insurancePlanPlanSpecificCost);
    }
    const createdInsurancePlanPlanSpecificCost = new InsurancePlanPlanSpecificCost();
    this.addFieldValue('specificCost', createdInsurancePlanPlanSpecificCost);
    return createdInsurancePlanPlanSpecificCost;
  }

  /** The first InsurancePlanPlanSpecificCost of `specificCost`. One is added when the list is empty. */
  getSpecificCostFirstRep(): InsurancePlanPlanSpecificCost {
    const firstInsurancePlanPlanSpecificCost = this.getSpecificCost()[0];
    return firstInsurancePlanPlanSpecificCost === undefined
      ? this.addSpecificCost()
      : firstInsurancePlanPlanSpecificCost;
  }
}

modelTypeRegistry.register('InsurancePlanPlan', InsurancePlanPlan, false);

/**
 * Overall costs
 */
export class InsurancePlanPlanGeneralCost extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'groupSize',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'groupSize', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'cost',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'cost', typeCode: 'Money' }],
    },
    {
      elementName: 'comment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'comment', typeCode: 'string' }],
    },
  ];

  /** Type of cost (0..1) */
  type?: CodeableConcept;

  /** Number of enrollees (0..1) */
  groupSize?: number;
  /** Id and extensions of the primitive `groupSize`. */
  _groupSize?: Element;

  /** Cost value (0..1) */
  cost?: Money;

  /** Additional cost information (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;

  override fhirType(): string {
    return 'InsurancePlan.plan.generalCost';
  }

  /** FHIR JSON for this InsurancePlanPlanGeneralCost, typed as the plain `InsurancePlanGeneralCost` data type. */
  override toJSON(): plainTypes.InsurancePlanGeneralCost {
    return this.serialize() as plainTypes.InsurancePlanGeneralCost;
  }

  /** Type of cost (0..1) Created when absent. */
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

  /** Number of enrollees (0..1) */
  getGroupSize(): number | undefined {
    return this.groupSize;
  }

  /** Sets `groupSize`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setGroupSize(groupSize: number | undefined): this {
    return this.setFieldValue('groupSize', groupSize);
  }

  hasGroupSize(): boolean {
    return this.hasFieldValue('groupSize');
  }

  /** The element carrying the id and extensions of `groupSize`. Created when absent. */
  getGroupSizeElement(): Element {
    if (this._groupSize === undefined) {
      this._groupSize = new Element();
    }
    return this._groupSize;
  }

  setGroupSizeElement(groupSizeElement: Element | undefined): this {
    this._groupSize = groupSizeElement;
    return this;
  }

  /** Cost value (0..1) Created when absent. */
  getCost(): Money {
    if (this.cost === undefined) {
      this.cost = new Money();
    }
    return this.cost;
  }

  setCost(cost: Money | undefined): this {
    return this.setFieldValue('cost', cost);
  }

  hasCost(): boolean {
    return this.hasFieldValue('cost');
  }

  /** Additional cost information (0..1) */
  getComment(): string | undefined {
    return this.comment;
  }

  /** Sets `comment`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setComment(comment: string | undefined): this {
    return this.setFieldValue('comment', comment);
  }

  hasComment(): boolean {
    return this.hasFieldValue('comment');
  }

  /** The element carrying the id and extensions of `comment`. Created when absent. */
  getCommentElement(): Element {
    if (this._comment === undefined) {
      this._comment = new Element();
    }
    return this._comment;
  }

  setCommentElement(commentElement: Element | undefined): this {
    this._comment = commentElement;
    return this;
  }
}

modelTypeRegistry.register('InsurancePlanPlanGeneralCost', InsurancePlanPlanGeneralCost, false);

/**
 * Specific costs
 */
export class InsurancePlanPlanSpecificCost extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'category',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'benefit',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'benefit', typeCode: 'InsurancePlanPlanSpecificCostBenefit' }],
    },
  ];

  /** General category of benefit (1..1) */
  category?: CodeableConcept;

  /** Benefits list (0..*) */
  benefit?: InsurancePlanPlanSpecificCostBenefit[];

  override fhirType(): string {
    return 'InsurancePlan.plan.specificCost';
  }

  /** FHIR JSON for this InsurancePlanPlanSpecificCost, typed as the plain `InsurancePlanSpecificCost` data type. */
  override toJSON(): plainTypes.InsurancePlanSpecificCost {
    return this.serialize() as plainTypes.InsurancePlanSpecificCost;
  }

  /** General category of benefit (1..1) Created when absent. */
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

  /** Benefits list (0..*) Never undefined; an empty list is created when absent. */
  getBenefit(): InsurancePlanPlanSpecificCostBenefit[] {
    if (this.benefit === undefined) {
      this.benefit = [];
    }
    return this.benefit;
  }

  setBenefit(benefit: InsurancePlanPlanSpecificCostBenefit[] | undefined): this {
    return this.setFieldValue('benefit', benefit);
  }

  hasBenefit(): boolean {
    return this.hasFieldValue('benefit');
  }

  /** Appends a new, empty InsurancePlanPlanSpecificCostBenefit to `benefit` and returns it so it can be filled in. */
  addBenefit(): InsurancePlanPlanSpecificCostBenefit;
  /** Appends the given InsurancePlanPlanSpecificCostBenefit to `benefit` and returns this object for chaining. */
  addBenefit(insurancePlanPlanSpecificCostBenefit: InsurancePlanPlanSpecificCostBenefit): this;
  addBenefit(
    insurancePlanPlanSpecificCostBenefit?: InsurancePlanPlanSpecificCostBenefit
  ): InsurancePlanPlanSpecificCostBenefit | this {
    if (insurancePlanPlanSpecificCostBenefit !== undefined) {
      return this.addFieldValue('benefit', insurancePlanPlanSpecificCostBenefit);
    }
    const createdInsurancePlanPlanSpecificCostBenefit = new InsurancePlanPlanSpecificCostBenefit();
    this.addFieldValue('benefit', createdInsurancePlanPlanSpecificCostBenefit);
    return createdInsurancePlanPlanSpecificCostBenefit;
  }

  /** The first InsurancePlanPlanSpecificCostBenefit of `benefit`. One is added when the list is empty. */
  getBenefitFirstRep(): InsurancePlanPlanSpecificCostBenefit {
    const firstInsurancePlanPlanSpecificCostBenefit = this.getBenefit()[0];
    return firstInsurancePlanPlanSpecificCostBenefit === undefined
      ? this.addBenefit()
      : firstInsurancePlanPlanSpecificCostBenefit;
  }
}

modelTypeRegistry.register('InsurancePlanPlanSpecificCost', InsurancePlanPlanSpecificCost, false);

/**
 * Benefits list
 */
export class InsurancePlanPlanSpecificCostBenefit extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'cost',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'cost', typeCode: 'InsurancePlanPlanSpecificCostBenefitCost' }],
    },
  ];

  /** Type of specific benefit (1..1) */
  type?: CodeableConcept;

  /** List of the costs (0..*) */
  cost?: InsurancePlanPlanSpecificCostBenefitCost[];

  override fhirType(): string {
    return 'InsurancePlan.plan.specificCost.benefit';
  }

  /** FHIR JSON for this InsurancePlanPlanSpecificCostBenefit, typed as the plain `InsurancePlanBenefit1` data type. */
  override toJSON(): plainTypes.InsurancePlanBenefit1 {
    return this.serialize() as plainTypes.InsurancePlanBenefit1;
  }

  /** Type of specific benefit (1..1) Created when absent. */
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

  /** List of the costs (0..*) Never undefined; an empty list is created when absent. */
  getCost(): InsurancePlanPlanSpecificCostBenefitCost[] {
    if (this.cost === undefined) {
      this.cost = [];
    }
    return this.cost;
  }

  setCost(cost: InsurancePlanPlanSpecificCostBenefitCost[] | undefined): this {
    return this.setFieldValue('cost', cost);
  }

  hasCost(): boolean {
    return this.hasFieldValue('cost');
  }

  /** Appends a new, empty InsurancePlanPlanSpecificCostBenefitCost to `cost` and returns it so it can be filled in. */
  addCost(): InsurancePlanPlanSpecificCostBenefitCost;
  /** Appends the given InsurancePlanPlanSpecificCostBenefitCost to `cost` and returns this object for chaining. */
  addCost(insurancePlanPlanSpecificCostBenefitCost: InsurancePlanPlanSpecificCostBenefitCost): this;
  addCost(
    insurancePlanPlanSpecificCostBenefitCost?: InsurancePlanPlanSpecificCostBenefitCost
  ): InsurancePlanPlanSpecificCostBenefitCost | this {
    if (insurancePlanPlanSpecificCostBenefitCost !== undefined) {
      return this.addFieldValue('cost', insurancePlanPlanSpecificCostBenefitCost);
    }
    const createdInsurancePlanPlanSpecificCostBenefitCost =
      new InsurancePlanPlanSpecificCostBenefitCost();
    this.addFieldValue('cost', createdInsurancePlanPlanSpecificCostBenefitCost);
    return createdInsurancePlanPlanSpecificCostBenefitCost;
  }

  /** The first InsurancePlanPlanSpecificCostBenefitCost of `cost`. One is added when the list is empty. */
  getCostFirstRep(): InsurancePlanPlanSpecificCostBenefitCost {
    const firstInsurancePlanPlanSpecificCostBenefitCost = this.getCost()[0];
    return firstInsurancePlanPlanSpecificCostBenefitCost === undefined
      ? this.addCost()
      : firstInsurancePlanPlanSpecificCostBenefitCost;
  }
}

modelTypeRegistry.register(
  'InsurancePlanPlanSpecificCostBenefit',
  InsurancePlanPlanSpecificCostBenefit,
  false
);

/**
 * List of the costs
 */
export class InsurancePlanPlanSpecificCostBenefitCost extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'applicability',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'applicability', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'qualifiers',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'qualifiers', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'value',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'value', typeCode: 'Quantity' }],
    },
  ];

  /** Type of cost (1..1) */
  type?: CodeableConcept;

  /** in-network | out-of-network | other (0..1) */
  applicability?: CodeableConcept;

  /** Additional information about the cost (0..*) */
  qualifiers?: CodeableConcept[];

  /** The actual cost value (0..1) */
  value?: Quantity;

  override fhirType(): string {
    return 'InsurancePlan.plan.specificCost.benefit.cost';
  }

  /** FHIR JSON for this InsurancePlanPlanSpecificCostBenefitCost, typed as the plain `InsurancePlanCost` data type. */
  override toJSON(): plainTypes.InsurancePlanCost {
    return this.serialize() as plainTypes.InsurancePlanCost;
  }

  /** Type of cost (1..1) Created when absent. */
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

  /** in-network | out-of-network | other (0..1) Created when absent. */
  getApplicability(): CodeableConcept {
    if (this.applicability === undefined) {
      this.applicability = new CodeableConcept();
    }
    return this.applicability;
  }

  setApplicability(applicability: CodeableConcept | undefined): this {
    return this.setFieldValue('applicability', applicability);
  }

  hasApplicability(): boolean {
    return this.hasFieldValue('applicability');
  }

  /** Additional information about the cost (0..*) Never undefined; an empty list is created when absent. */
  getQualifiers(): CodeableConcept[] {
    if (this.qualifiers === undefined) {
      this.qualifiers = [];
    }
    return this.qualifiers;
  }

  setQualifiers(qualifiers: CodeableConcept[] | undefined): this {
    return this.setFieldValue('qualifiers', qualifiers);
  }

  hasQualifiers(): boolean {
    return this.hasFieldValue('qualifiers');
  }

  /** Appends a new, empty CodeableConcept to `qualifiers` and returns it so it can be filled in. */
  addQualifiers(): CodeableConcept;
  /** Appends the given CodeableConcept to `qualifiers` and returns this object for chaining. */
  addQualifiers(codeableConcept: CodeableConcept): this;
  addQualifiers(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('qualifiers', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('qualifiers', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `qualifiers`. One is added when the list is empty. */
  getQualifiersFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getQualifiers()[0];
    return firstCodeableConcept === undefined ? this.addQualifiers() : firstCodeableConcept;
  }

  /** The actual cost value (0..1) Created when absent. */
  getValue(): Quantity {
    if (this.value === undefined) {
      this.value = new Quantity();
    }
    return this.value;
  }

  setValue(value: Quantity | undefined): this {
    return this.setFieldValue('value', value);
  }

  hasValue(): boolean {
    return this.hasFieldValue('value');
  }
}

modelTypeRegistry.register(
  'InsurancePlanPlanSpecificCostBenefitCost',
  InsurancePlanPlanSpecificCostBenefitCost,
  false
);
