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
 * Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment.
 */
export class Coverage extends DomainResource {
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
      elementName: 'kind',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'kind', typeCode: 'code', allowedCodes: valueSetCodes.Kind }],
    },
    {
      elementName: 'paymentBy',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'paymentBy', typeCode: 'CoveragePaymentBy' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'policyHolder',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'policyHolder',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Patient', 'RelatedPerson'],
        },
      ],
    },
    {
      elementName: 'subscriber',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'subscriber',
          typeCode: 'Reference',
          targetResourceTypes: ['Patient', 'RelatedPerson'],
        },
      ],
    },
    {
      elementName: 'subscriberId',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'subscriberId', typeCode: 'Identifier' }],
    },
    {
      elementName: 'beneficiary',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'beneficiary', typeCode: 'Reference', targetResourceTypes: ['Patient'] }],
    },
    {
      elementName: 'dependent',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'dependent', typeCode: 'string' }],
    },
    {
      elementName: 'relationship',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'relationship', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
    {
      elementName: 'insurer',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'insurer', typeCode: 'Reference', targetResourceTypes: ['Organization'] }],
    },
    {
      elementName: 'class',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'class', typeCode: 'CoverageClass' }],
    },
    {
      elementName: 'order',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'order', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'network',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'network', typeCode: 'string' }],
    },
    {
      elementName: 'costToBeneficiary',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'costToBeneficiary', typeCode: 'CoverageCostToBeneficiary' }],
    },
    {
      elementName: 'subrogation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'subrogation', typeCode: 'boolean' }],
    },
    {
      elementName: 'contract',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'contract', typeCode: 'Reference', targetResourceTypes: ['Contract'] }],
    },
    {
      elementName: 'insurancePlan',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'insurancePlan', typeCode: 'Reference', targetResourceTypes: ['InsurancePlan'] },
      ],
    },
  ];

  readonly resourceType = 'Coverage';

  /** Business identifier(s) for this coverage (0..*) */
  identifier?: Identifier[];

  /** active | cancelled | draft | entered-in-error (1..1) */
  status?: valueSetCodes.FinancialResourceStatusCodes;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** insurance | self-pay | other (1..1) */
  kind?: valueSetCodes.Kind;
  /** Id and extensions of the primitive `kind`. */
  _kind?: Element;

  /** Self-pay parties and responsibility (0..*) */
  paymentBy?: CoveragePaymentBy[];

  /** Coverage category such as medical or accident (0..1) */
  type?: CodeableConcept;

  /** Owner of the policy (0..1) */
  policyHolder?: Reference;

  /** Subscriber to the policy (0..1) */
  subscriber?: Reference;

  /** ID assigned to the subscriber (0..*) */
  subscriberId?: Identifier[];

  /** Plan beneficiary (1..1) */
  beneficiary?: Reference;

  /** Dependent number (0..1) */
  dependent?: string;
  /** Id and extensions of the primitive `dependent`. */
  _dependent?: Element;

  /** Beneficiary relationship to the subscriber (0..1) */
  relationship?: CodeableConcept;

  /** Coverage start and end dates (0..1) */
  period?: Period;

  /** Issuer of the policy (0..1) */
  insurer?: Reference;

  /** Additional coverage classifications (0..*) */
  class?: CoverageClass[];

  /** Relative order of the coverage (0..1) */
  order?: number;
  /** Id and extensions of the primitive `order`. */
  _order?: Element;

  /** Insurer network (0..1) */
  network?: string;
  /** Id and extensions of the primitive `network`. */
  _network?: Element;

  /** Patient payments for services/products (0..*) */
  costToBeneficiary?: CoverageCostToBeneficiary[];

  /** Reimbursement to insurer (0..1) */
  subrogation?: boolean;
  /** Id and extensions of the primitive `subrogation`. */
  _subrogation?: Element;

  /** Contract details (0..*) */
  contract?: Reference[];

  /** Insurance plan details (0..1) */
  insurancePlan?: Reference;

  override fhirType(): string {
    return 'Coverage';
  }

  /** FHIR JSON for this Coverage, typed as the plain `Coverage` data type. */
  override toJSON(): plainTypes.Coverage {
    return this.serialize() as plainTypes.Coverage;
  }

  /** Business identifier(s) for this coverage (0..*) Never undefined; an empty list is created when absent. */
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

  /** insurance | self-pay | other (1..1) */
  getKind(): valueSetCodes.Kind | undefined {
    return this.kind;
  }

  /** Sets `kind`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setKind(kind: valueSetCodes.Kind | undefined): this {
    return this.setFieldValue('kind', kind);
  }

  hasKind(): boolean {
    return this.hasFieldValue('kind');
  }

  /** The element carrying the id and extensions of `kind`. Created when absent. */
  getKindElement(): Element {
    if (this._kind === undefined) {
      this._kind = new Element();
    }
    return this._kind;
  }

  setKindElement(kindElement: Element | undefined): this {
    this._kind = kindElement;
    return this;
  }

  /** Self-pay parties and responsibility (0..*) Never undefined; an empty list is created when absent. */
  getPaymentBy(): CoveragePaymentBy[] {
    if (this.paymentBy === undefined) {
      this.paymentBy = [];
    }
    return this.paymentBy;
  }

  setPaymentBy(paymentBy: CoveragePaymentBy[] | undefined): this {
    return this.setFieldValue('paymentBy', paymentBy);
  }

  hasPaymentBy(): boolean {
    return this.hasFieldValue('paymentBy');
  }

  /** Appends a new, empty CoveragePaymentBy to `paymentBy` and returns it so it can be filled in. */
  addPaymentBy(): CoveragePaymentBy;
  /** Appends the given CoveragePaymentBy to `paymentBy` and returns this object for chaining. */
  addPaymentBy(coveragePaymentBy: CoveragePaymentBy): this;
  addPaymentBy(coveragePaymentBy?: CoveragePaymentBy): CoveragePaymentBy | this {
    if (coveragePaymentBy !== undefined) {
      return this.addFieldValue('paymentBy', coveragePaymentBy);
    }
    const createdCoveragePaymentBy = new CoveragePaymentBy();
    this.addFieldValue('paymentBy', createdCoveragePaymentBy);
    return createdCoveragePaymentBy;
  }

  /** The first CoveragePaymentBy of `paymentBy`. One is added when the list is empty. */
  getPaymentByFirstRep(): CoveragePaymentBy {
    const firstCoveragePaymentBy = this.getPaymentBy()[0];
    return firstCoveragePaymentBy === undefined ? this.addPaymentBy() : firstCoveragePaymentBy;
  }

  /** Coverage category such as medical or accident (0..1) Created when absent. */
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

  /** Owner of the policy (0..1) Created when absent. */
  getPolicyHolder(): Reference {
    if (this.policyHolder === undefined) {
      this.policyHolder = new Reference();
    }
    return this.policyHolder;
  }

  setPolicyHolder(policyHolder: Reference | undefined): this {
    return this.setFieldValue('policyHolder', policyHolder);
  }

  hasPolicyHolder(): boolean {
    return this.hasFieldValue('policyHolder');
  }

  /** Subscriber to the policy (0..1) Created when absent. */
  getSubscriber(): Reference {
    if (this.subscriber === undefined) {
      this.subscriber = new Reference();
    }
    return this.subscriber;
  }

  setSubscriber(subscriber: Reference | undefined): this {
    return this.setFieldValue('subscriber', subscriber);
  }

  hasSubscriber(): boolean {
    return this.hasFieldValue('subscriber');
  }

  /** ID assigned to the subscriber (0..*) Never undefined; an empty list is created when absent. */
  getSubscriberId(): Identifier[] {
    if (this.subscriberId === undefined) {
      this.subscriberId = [];
    }
    return this.subscriberId;
  }

  setSubscriberId(subscriberId: Identifier[] | undefined): this {
    return this.setFieldValue('subscriberId', subscriberId);
  }

  hasSubscriberId(): boolean {
    return this.hasFieldValue('subscriberId');
  }

  /** Appends a new, empty Identifier to `subscriberId` and returns it so it can be filled in. */
  addSubscriberId(): Identifier;
  /** Appends the given Identifier to `subscriberId` and returns this object for chaining. */
  addSubscriberId(identifier: Identifier): this;
  addSubscriberId(identifier?: Identifier): Identifier | this {
    if (identifier !== undefined) {
      return this.addFieldValue('subscriberId', identifier);
    }
    const createdIdentifier = new Identifier();
    this.addFieldValue('subscriberId', createdIdentifier);
    return createdIdentifier;
  }

  /** The first Identifier of `subscriberId`. One is added when the list is empty. */
  getSubscriberIdFirstRep(): Identifier {
    const firstIdentifier = this.getSubscriberId()[0];
    return firstIdentifier === undefined ? this.addSubscriberId() : firstIdentifier;
  }

  /** Plan beneficiary (1..1) Created when absent. */
  getBeneficiary(): Reference {
    if (this.beneficiary === undefined) {
      this.beneficiary = new Reference();
    }
    return this.beneficiary;
  }

  setBeneficiary(beneficiary: Reference | undefined): this {
    return this.setFieldValue('beneficiary', beneficiary);
  }

  hasBeneficiary(): boolean {
    return this.hasFieldValue('beneficiary');
  }

  /** Dependent number (0..1) */
  getDependent(): string | undefined {
    return this.dependent;
  }

  /** Sets `dependent`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDependent(dependent: string | undefined): this {
    return this.setFieldValue('dependent', dependent);
  }

  hasDependent(): boolean {
    return this.hasFieldValue('dependent');
  }

  /** The element carrying the id and extensions of `dependent`. Created when absent. */
  getDependentElement(): Element {
    if (this._dependent === undefined) {
      this._dependent = new Element();
    }
    return this._dependent;
  }

  setDependentElement(dependentElement: Element | undefined): this {
    this._dependent = dependentElement;
    return this;
  }

  /** Beneficiary relationship to the subscriber (0..1) Created when absent. */
  getRelationship(): CodeableConcept {
    if (this.relationship === undefined) {
      this.relationship = new CodeableConcept();
    }
    return this.relationship;
  }

  setRelationship(relationship: CodeableConcept | undefined): this {
    return this.setFieldValue('relationship', relationship);
  }

  hasRelationship(): boolean {
    return this.hasFieldValue('relationship');
  }

  /** Coverage start and end dates (0..1) Created when absent. */
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

  /** Issuer of the policy (0..1) Created when absent. */
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

  /** Additional coverage classifications (0..*) Never undefined; an empty list is created when absent. */
  getClass(): CoverageClass[] {
    if (this.class === undefined) {
      this.class = [];
    }
    return this.class;
  }

  setClass(classValue: CoverageClass[] | undefined): this {
    return this.setFieldValue('class', classValue);
  }

  hasClass(): boolean {
    return this.hasFieldValue('class');
  }

  /** Appends a new, empty CoverageClass to `class` and returns it so it can be filled in. */
  addClass(): CoverageClass;
  /** Appends the given CoverageClass to `class` and returns this object for chaining. */
  addClass(coverageClass: CoverageClass): this;
  addClass(coverageClass?: CoverageClass): CoverageClass | this {
    if (coverageClass !== undefined) {
      return this.addFieldValue('class', coverageClass);
    }
    const createdCoverageClass = new CoverageClass();
    this.addFieldValue('class', createdCoverageClass);
    return createdCoverageClass;
  }

  /** The first CoverageClass of `class`. One is added when the list is empty. */
  getClassFirstRep(): CoverageClass {
    const firstCoverageClass = this.getClass()[0];
    return firstCoverageClass === undefined ? this.addClass() : firstCoverageClass;
  }

  /** Relative order of the coverage (0..1) */
  getOrder(): number | undefined {
    return this.order;
  }

  /** Sets `order`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setOrder(order: number | undefined): this {
    return this.setFieldValue('order', order);
  }

  hasOrder(): boolean {
    return this.hasFieldValue('order');
  }

  /** The element carrying the id and extensions of `order`. Created when absent. */
  getOrderElement(): Element {
    if (this._order === undefined) {
      this._order = new Element();
    }
    return this._order;
  }

  setOrderElement(orderElement: Element | undefined): this {
    this._order = orderElement;
    return this;
  }

  /** Insurer network (0..1) */
  getNetwork(): string | undefined {
    return this.network;
  }

  /** Sets `network`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setNetwork(network: string | undefined): this {
    return this.setFieldValue('network', network);
  }

  hasNetwork(): boolean {
    return this.hasFieldValue('network');
  }

  /** The element carrying the id and extensions of `network`. Created when absent. */
  getNetworkElement(): Element {
    if (this._network === undefined) {
      this._network = new Element();
    }
    return this._network;
  }

  setNetworkElement(networkElement: Element | undefined): this {
    this._network = networkElement;
    return this;
  }

  /** Patient payments for services/products (0..*) Never undefined; an empty list is created when absent. */
  getCostToBeneficiary(): CoverageCostToBeneficiary[] {
    if (this.costToBeneficiary === undefined) {
      this.costToBeneficiary = [];
    }
    return this.costToBeneficiary;
  }

  setCostToBeneficiary(costToBeneficiary: CoverageCostToBeneficiary[] | undefined): this {
    return this.setFieldValue('costToBeneficiary', costToBeneficiary);
  }

  hasCostToBeneficiary(): boolean {
    return this.hasFieldValue('costToBeneficiary');
  }

  /** Appends a new, empty CoverageCostToBeneficiary to `costToBeneficiary` and returns it so it can be filled in. */
  addCostToBeneficiary(): CoverageCostToBeneficiary;
  /** Appends the given CoverageCostToBeneficiary to `costToBeneficiary` and returns this object for chaining. */
  addCostToBeneficiary(coverageCostToBeneficiary: CoverageCostToBeneficiary): this;
  addCostToBeneficiary(
    coverageCostToBeneficiary?: CoverageCostToBeneficiary
  ): CoverageCostToBeneficiary | this {
    if (coverageCostToBeneficiary !== undefined) {
      return this.addFieldValue('costToBeneficiary', coverageCostToBeneficiary);
    }
    const createdCoverageCostToBeneficiary = new CoverageCostToBeneficiary();
    this.addFieldValue('costToBeneficiary', createdCoverageCostToBeneficiary);
    return createdCoverageCostToBeneficiary;
  }

  /** The first CoverageCostToBeneficiary of `costToBeneficiary`. One is added when the list is empty. */
  getCostToBeneficiaryFirstRep(): CoverageCostToBeneficiary {
    const firstCoverageCostToBeneficiary = this.getCostToBeneficiary()[0];
    return firstCoverageCostToBeneficiary === undefined
      ? this.addCostToBeneficiary()
      : firstCoverageCostToBeneficiary;
  }

  /** Reimbursement to insurer (0..1) */
  getSubrogation(): boolean | undefined {
    return this.subrogation;
  }

  /** Sets `subrogation`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setSubrogation(subrogation: boolean | undefined): this {
    return this.setFieldValue('subrogation', subrogation);
  }

  hasSubrogation(): boolean {
    return this.hasFieldValue('subrogation');
  }

  /** The element carrying the id and extensions of `subrogation`. Created when absent. */
  getSubrogationElement(): Element {
    if (this._subrogation === undefined) {
      this._subrogation = new Element();
    }
    return this._subrogation;
  }

  setSubrogationElement(subrogationElement: Element | undefined): this {
    this._subrogation = subrogationElement;
    return this;
  }

  /** Contract details (0..*) Never undefined; an empty list is created when absent. */
  getContract(): Reference[] {
    if (this.contract === undefined) {
      this.contract = [];
    }
    return this.contract;
  }

  setContract(contract: Reference[] | undefined): this {
    return this.setFieldValue('contract', contract);
  }

  hasContract(): boolean {
    return this.hasFieldValue('contract');
  }

  /** Appends a new, empty Reference to `contract` and returns it so it can be filled in. */
  addContract(): Reference;
  /** Appends the given Reference to `contract` and returns this object for chaining. */
  addContract(reference: Reference): this;
  addContract(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('contract', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('contract', createdReference);
    return createdReference;
  }

  /** The first Reference of `contract`. One is added when the list is empty. */
  getContractFirstRep(): Reference {
    const firstReference = this.getContract()[0];
    return firstReference === undefined ? this.addContract() : firstReference;
  }

  /** Insurance plan details (0..1) Created when absent. */
  getInsurancePlan(): Reference {
    if (this.insurancePlan === undefined) {
      this.insurancePlan = new Reference();
    }
    return this.insurancePlan;
  }

  setInsurancePlan(insurancePlan: Reference | undefined): this {
    return this.setFieldValue('insurancePlan', insurancePlan);
  }

  hasInsurancePlan(): boolean {
    return this.hasFieldValue('insurancePlan');
  }
}

modelTypeRegistry.register('Coverage', Coverage, true);

/** True when the value is a Coverage model instance. */
export function isCoverage(candidate: unknown): candidate is Coverage {
  return candidate instanceof Coverage;
}

/**
 * Self-pay parties and responsibility
 */
export class CoveragePaymentBy extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'party',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'party',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Patient', 'RelatedPerson'],
        },
      ],
    },
    {
      elementName: 'responsibility',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'responsibility', typeCode: 'string' }],
    },
  ];

  /** Parties performing self-payment (1..1) */
  party?: Reference;

  /** Party's responsibility (0..1) */
  responsibility?: string;
  /** Id and extensions of the primitive `responsibility`. */
  _responsibility?: Element;

  override fhirType(): string {
    return 'Coverage.paymentBy';
  }

  /** FHIR JSON for this CoveragePaymentBy, typed as the plain `CoveragePaymentBy` data type. */
  override toJSON(): plainTypes.CoveragePaymentBy {
    return this.serialize() as plainTypes.CoveragePaymentBy;
  }

  /** Parties performing self-payment (1..1) Created when absent. */
  getParty(): Reference {
    if (this.party === undefined) {
      this.party = new Reference();
    }
    return this.party;
  }

  setParty(party: Reference | undefined): this {
    return this.setFieldValue('party', party);
  }

  hasParty(): boolean {
    return this.hasFieldValue('party');
  }

  /** Party's responsibility (0..1) */
  getResponsibility(): string | undefined {
    return this.responsibility;
  }

  /** Sets `responsibility`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setResponsibility(responsibility: string | undefined): this {
    return this.setFieldValue('responsibility', responsibility);
  }

  hasResponsibility(): boolean {
    return this.hasFieldValue('responsibility');
  }

  /** The element carrying the id and extensions of `responsibility`. Created when absent. */
  getResponsibilityElement(): Element {
    if (this._responsibility === undefined) {
      this._responsibility = new Element();
    }
    return this._responsibility;
  }

  setResponsibilityElement(responsibilityElement: Element | undefined): this {
    this._responsibility = responsibilityElement;
    return this;
  }
}

modelTypeRegistry.register('CoveragePaymentBy', CoveragePaymentBy, false);

/**
 * Additional coverage classifications
 */
export class CoverageClass extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'value',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'value', typeCode: 'Identifier' }],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
  ];

  /** Type of class such as 'group' or 'plan' (1..1) */
  type?: CodeableConcept;

  /** Value associated with the type (1..1) */
  value?: Identifier;

  /** Human readable description of the type and value (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  override fhirType(): string {
    return 'Coverage.class';
  }

  /** FHIR JSON for this CoverageClass, typed as the plain `CoverageClass` data type. */
  override toJSON(): plainTypes.CoverageClass {
    return this.serialize() as plainTypes.CoverageClass;
  }

  /** Type of class such as 'group' or 'plan' (1..1) Created when absent. */
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

  /** Value associated with the type (1..1) Created when absent. */
  getValue(): Identifier {
    if (this.value === undefined) {
      this.value = new Identifier();
    }
    return this.value;
  }

  setValue(value: Identifier | undefined): this {
    return this.setFieldValue('value', value);
  }

  hasValue(): boolean {
    return this.hasFieldValue('value');
  }

  /** Human readable description of the type and value (0..1) */
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
}

modelTypeRegistry.register('CoverageClass', CoverageClass, false);

/**
 * Patient payments for services/products
 */
export class CoverageCostToBeneficiary extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'category',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
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
      elementName: 'value',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'valueQuantity', typeCode: 'Quantity' },
        { jsonKey: 'valueMoney', typeCode: 'Money' },
      ],
    },
    {
      elementName: 'exception',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'exception', typeCode: 'CoverageCostToBeneficiaryException' }],
    },
  ];

  /** Cost category (0..1) */
  type?: CodeableConcept;

  /** Benefit classification (0..1) */
  category?: CodeableConcept;

  /** In or out of network (0..1) */
  network?: CodeableConcept;

  /** Individual or family (0..1) */
  unit?: CodeableConcept;

  /** Annual or lifetime (0..1) */
  term?: CodeableConcept;

  /** The amount or percentage due from the beneficiary (0..1) */
  valueQuantity?: Quantity;
  /** The amount or percentage due from the beneficiary (0..1) */
  valueMoney?: Money;

  /** Exceptions for patient payments (0..*) */
  exception?: CoverageCostToBeneficiaryException[];

  override fhirType(): string {
    return 'Coverage.costToBeneficiary';
  }

  /** FHIR JSON for this CoverageCostToBeneficiary, typed as the plain `CoverageCostToBeneficiary` data type. */
  override toJSON(): plainTypes.CoverageCostToBeneficiary {
    return this.serialize() as plainTypes.CoverageCostToBeneficiary;
  }

  /** Cost category (0..1) Created when absent. */
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

  /** The amount or percentage due from the beneficiary (0..1) Whichever type of `value[x]` is set. */
  getValue(): Quantity | Money | undefined {
    return this.getChoiceValue<Quantity | Money>('value');
  }

  /** True when any type of `value[x]` is set. */
  hasValue(): boolean {
    return this.hasChoiceValue('value');
  }

  getValueQuantity(): Quantity | undefined {
    return this.valueQuantity;
  }

  /** Sets `value[x]` as Quantity and clears every other type of it. */
  setValueQuantity(valueQuantity: Quantity | undefined): this {
    return this.setFieldValue('valueQuantity', valueQuantity);
  }

  hasValueQuantity(): boolean {
    return this.hasFieldValue('valueQuantity');
  }

  getValueMoney(): Money | undefined {
    return this.valueMoney;
  }

  /** Sets `value[x]` as Money and clears every other type of it. */
  setValueMoney(valueMoney: Money | undefined): this {
    return this.setFieldValue('valueMoney', valueMoney);
  }

  hasValueMoney(): boolean {
    return this.hasFieldValue('valueMoney');
  }

  /** Exceptions for patient payments (0..*) Never undefined; an empty list is created when absent. */
  getException(): CoverageCostToBeneficiaryException[] {
    if (this.exception === undefined) {
      this.exception = [];
    }
    return this.exception;
  }

  setException(exception: CoverageCostToBeneficiaryException[] | undefined): this {
    return this.setFieldValue('exception', exception);
  }

  hasException(): boolean {
    return this.hasFieldValue('exception');
  }

  /** Appends a new, empty CoverageCostToBeneficiaryException to `exception` and returns it so it can be filled in. */
  addException(): CoverageCostToBeneficiaryException;
  /** Appends the given CoverageCostToBeneficiaryException to `exception` and returns this object for chaining. */
  addException(coverageCostToBeneficiaryException: CoverageCostToBeneficiaryException): this;
  addException(
    coverageCostToBeneficiaryException?: CoverageCostToBeneficiaryException
  ): CoverageCostToBeneficiaryException | this {
    if (coverageCostToBeneficiaryException !== undefined) {
      return this.addFieldValue('exception', coverageCostToBeneficiaryException);
    }
    const createdCoverageCostToBeneficiaryException = new CoverageCostToBeneficiaryException();
    this.addFieldValue('exception', createdCoverageCostToBeneficiaryException);
    return createdCoverageCostToBeneficiaryException;
  }

  /** The first CoverageCostToBeneficiaryException of `exception`. One is added when the list is empty. */
  getExceptionFirstRep(): CoverageCostToBeneficiaryException {
    const firstCoverageCostToBeneficiaryException = this.getException()[0];
    return firstCoverageCostToBeneficiaryException === undefined
      ? this.addException()
      : firstCoverageCostToBeneficiaryException;
  }
}

modelTypeRegistry.register('CoverageCostToBeneficiary', CoverageCostToBeneficiary, false);

/**
 * Exceptions for patient payments
 */
export class CoverageCostToBeneficiaryException extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
  ];

  /** Exception category (1..1) */
  type?: CodeableConcept;

  /** The effective period of the exception (0..1) */
  period?: Period;

  override fhirType(): string {
    return 'Coverage.costToBeneficiary.exception';
  }

  /** FHIR JSON for this CoverageCostToBeneficiaryException, typed as the plain `CoverageException` data type. */
  override toJSON(): plainTypes.CoverageException {
    return this.serialize() as plainTypes.CoverageException;
  }

  /** Exception category (1..1) Created when absent. */
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

  /** The effective period of the exception (0..1) Created when absent. */
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
}

modelTypeRegistry.register(
  'CoverageCostToBeneficiaryException',
  CoverageCostToBeneficiaryException,
  false
);
