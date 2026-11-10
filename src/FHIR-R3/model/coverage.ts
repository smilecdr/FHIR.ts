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
import { Period } from './period';
import { Reference } from './reference';

/**
 * Base StructureDefinition for Coverage Resource
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
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'subscriberId', typeCode: 'string' }],
    },
    {
      elementName: 'beneficiary',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'beneficiary', typeCode: 'Reference', targetResourceTypes: ['Patient'] }],
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
      elementName: 'payor',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'payor',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Patient', 'RelatedPerson'],
        },
      ],
    },
    {
      elementName: 'grouping',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'grouping', typeCode: 'CoverageGrouping' }],
    },
    {
      elementName: 'dependent',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'dependent', typeCode: 'string' }],
    },
    {
      elementName: 'sequence',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sequence', typeCode: 'string' }],
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
      elementName: 'contract',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'contract', typeCode: 'Reference', targetResourceTypes: ['Contract'] }],
    },
  ];

  readonly resourceType = 'Coverage';

  /** The primary coverage ID (0..*) */
  identifier?: Identifier[];

  /** active | cancelled | draft | entered-in-error (0..1) */
  status?: valueSetCodes.FinancialResourceStatusCodes;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Type of coverage such as medical or accident (0..1) */
  type?: CodeableConcept;

  /** Owner of the policy (0..1) */
  policyHolder?: Reference;

  /** Subscriber to the policy (0..1) */
  subscriber?: Reference;

  /** ID assigned to the Subscriber (0..1) */
  subscriberId?: string;
  /** Id and extensions of the primitive `subscriberId`. */
  _subscriberId?: Element;

  /** Plan Beneficiary (0..1) */
  beneficiary?: Reference;

  /** Beneficiary relationship to the Subscriber (0..1) */
  relationship?: CodeableConcept;

  /** Coverage start and end dates (0..1) */
  period?: Period;

  /** Identifier for the plan or agreement issuer (0..*) */
  payor?: Reference[];

  /** Additional coverage classifications (0..1) */
  grouping?: CoverageGrouping;

  /** Dependent number (0..1) */
  dependent?: string;
  /** Id and extensions of the primitive `dependent`. */
  _dependent?: Element;

  /** The plan instance or sequence counter (0..1) */
  sequence?: string;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;

  /** Relative order of the coverage (0..1) */
  order?: number;
  /** Id and extensions of the primitive `order`. */
  _order?: Element;

  /** Insurer network (0..1) */
  network?: string;
  /** Id and extensions of the primitive `network`. */
  _network?: Element;

  /** Contract details (0..*) */
  contract?: Reference[];

  override fhirType(): string {
    return 'Coverage';
  }

  /** FHIR JSON for this Coverage, typed as the plain `Coverage` data type. */
  override toJSON(): plainTypes.Coverage {
    return this.serialize() as plainTypes.Coverage;
  }

  /** The primary coverage ID (0..*) Never undefined; an empty list is created when absent. */
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

  /** Type of coverage such as medical or accident (0..1) Created when absent. */
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

  /** ID assigned to the Subscriber (0..1) */
  getSubscriberId(): string | undefined {
    return this.subscriberId;
  }

  /** Sets `subscriberId`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setSubscriberId(subscriberId: string | undefined): this {
    return this.setFieldValue('subscriberId', subscriberId);
  }

  hasSubscriberId(): boolean {
    return this.hasFieldValue('subscriberId');
  }

  /** The element carrying the id and extensions of `subscriberId`. Created when absent. */
  getSubscriberIdElement(): Element {
    if (this._subscriberId === undefined) {
      this._subscriberId = new Element();
    }
    return this._subscriberId;
  }

  setSubscriberIdElement(subscriberIdElement: Element | undefined): this {
    this._subscriberId = subscriberIdElement;
    return this;
  }

  /** Plan Beneficiary (0..1) Created when absent. */
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

  /** Beneficiary relationship to the Subscriber (0..1) Created when absent. */
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

  /** Identifier for the plan or agreement issuer (0..*) Never undefined; an empty list is created when absent. */
  getPayor(): Reference[] {
    if (this.payor === undefined) {
      this.payor = [];
    }
    return this.payor;
  }

  setPayor(payor: Reference[] | undefined): this {
    return this.setFieldValue('payor', payor);
  }

  hasPayor(): boolean {
    return this.hasFieldValue('payor');
  }

  /** Appends a new, empty Reference to `payor` and returns it so it can be filled in. */
  addPayor(): Reference;
  /** Appends the given Reference to `payor` and returns this object for chaining. */
  addPayor(reference: Reference): this;
  addPayor(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('payor', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('payor', createdReference);
    return createdReference;
  }

  /** The first Reference of `payor`. One is added when the list is empty. */
  getPayorFirstRep(): Reference {
    const firstReference = this.getPayor()[0];
    return firstReference === undefined ? this.addPayor() : firstReference;
  }

  /** Additional coverage classifications (0..1) Created when absent. */
  getGrouping(): CoverageGrouping {
    if (this.grouping === undefined) {
      this.grouping = new CoverageGrouping();
    }
    return this.grouping;
  }

  setGrouping(grouping: CoverageGrouping | undefined): this {
    return this.setFieldValue('grouping', grouping);
  }

  hasGrouping(): boolean {
    return this.hasFieldValue('grouping');
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

  /** The plan instance or sequence counter (0..1) */
  getSequence(): string | undefined {
    return this.sequence;
  }

  /** Sets `sequence`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setSequence(sequence: string | undefined): this {
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
}

modelTypeRegistry.register('Coverage', Coverage, true);

/** True when the value is a Coverage model instance. */
export function isCoverage(candidate: unknown): candidate is Coverage {
  return candidate instanceof Coverage;
}

/**
 * Additional coverage classifications
 */
export class CoverageGrouping extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'group',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'group', typeCode: 'string' }],
    },
    {
      elementName: 'groupDisplay',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'groupDisplay', typeCode: 'string' }],
    },
    {
      elementName: 'subGroup',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'subGroup', typeCode: 'string' }],
    },
    {
      elementName: 'subGroupDisplay',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'subGroupDisplay', typeCode: 'string' }],
    },
    {
      elementName: 'plan',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'plan', typeCode: 'string' }],
    },
    {
      elementName: 'planDisplay',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'planDisplay', typeCode: 'string' }],
    },
    {
      elementName: 'subPlan',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'subPlan', typeCode: 'string' }],
    },
    {
      elementName: 'subPlanDisplay',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'subPlanDisplay', typeCode: 'string' }],
    },
    {
      elementName: 'class',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'class', typeCode: 'string' }],
    },
    {
      elementName: 'classDisplay',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'classDisplay', typeCode: 'string' }],
    },
    {
      elementName: 'subClass',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'subClass', typeCode: 'string' }],
    },
    {
      elementName: 'subClassDisplay',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'subClassDisplay', typeCode: 'string' }],
    },
  ];

  /** An identifier for the group (0..1) */
  group?: string;
  /** Id and extensions of the primitive `group`. */
  _group?: Element;

  /** Display text for an identifier for the group (0..1) */
  groupDisplay?: string;
  /** Id and extensions of the primitive `groupDisplay`. */
  _groupDisplay?: Element;

  /** An identifier for the subsection of the group (0..1) */
  subGroup?: string;
  /** Id and extensions of the primitive `subGroup`. */
  _subGroup?: Element;

  /** Display text for the subsection of the group (0..1) */
  subGroupDisplay?: string;
  /** Id and extensions of the primitive `subGroupDisplay`. */
  _subGroupDisplay?: Element;

  /** An identifier for the plan (0..1) */
  plan?: string;
  /** Id and extensions of the primitive `plan`. */
  _plan?: Element;

  /** Display text for the plan (0..1) */
  planDisplay?: string;
  /** Id and extensions of the primitive `planDisplay`. */
  _planDisplay?: Element;

  /** An identifier for the subsection of the plan (0..1) */
  subPlan?: string;
  /** Id and extensions of the primitive `subPlan`. */
  _subPlan?: Element;

  /** Display text for the subsection of the plan (0..1) */
  subPlanDisplay?: string;
  /** Id and extensions of the primitive `subPlanDisplay`. */
  _subPlanDisplay?: Element;

  /** An identifier for the class (0..1) */
  class?: string;
  /** Id and extensions of the primitive `class`. */
  _class?: Element;

  /** Display text for the class (0..1) */
  classDisplay?: string;
  /** Id and extensions of the primitive `classDisplay`. */
  _classDisplay?: Element;

  /** An identifier for the subsection of the class (0..1) */
  subClass?: string;
  /** Id and extensions of the primitive `subClass`. */
  _subClass?: Element;

  /** Display text for the subsection of the subclass (0..1) */
  subClassDisplay?: string;
  /** Id and extensions of the primitive `subClassDisplay`. */
  _subClassDisplay?: Element;

  override fhirType(): string {
    return 'Coverage.grouping';
  }

  /** FHIR JSON for this CoverageGrouping, typed as the plain `CoverageGrouping` data type. */
  override toJSON(): plainTypes.CoverageGrouping {
    return this.serialize() as plainTypes.CoverageGrouping;
  }

  /** An identifier for the group (0..1) */
  getGroup(): string | undefined {
    return this.group;
  }

  /** Sets `group`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setGroup(group: string | undefined): this {
    return this.setFieldValue('group', group);
  }

  hasGroup(): boolean {
    return this.hasFieldValue('group');
  }

  /** The element carrying the id and extensions of `group`. Created when absent. */
  getGroupElement(): Element {
    if (this._group === undefined) {
      this._group = new Element();
    }
    return this._group;
  }

  setGroupElement(groupElement: Element | undefined): this {
    this._group = groupElement;
    return this;
  }

  /** Display text for an identifier for the group (0..1) */
  getGroupDisplay(): string | undefined {
    return this.groupDisplay;
  }

  /** Sets `groupDisplay`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setGroupDisplay(groupDisplay: string | undefined): this {
    return this.setFieldValue('groupDisplay', groupDisplay);
  }

  hasGroupDisplay(): boolean {
    return this.hasFieldValue('groupDisplay');
  }

  /** The element carrying the id and extensions of `groupDisplay`. Created when absent. */
  getGroupDisplayElement(): Element {
    if (this._groupDisplay === undefined) {
      this._groupDisplay = new Element();
    }
    return this._groupDisplay;
  }

  setGroupDisplayElement(groupDisplayElement: Element | undefined): this {
    this._groupDisplay = groupDisplayElement;
    return this;
  }

  /** An identifier for the subsection of the group (0..1) */
  getSubGroup(): string | undefined {
    return this.subGroup;
  }

  /** Sets `subGroup`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setSubGroup(subGroup: string | undefined): this {
    return this.setFieldValue('subGroup', subGroup);
  }

  hasSubGroup(): boolean {
    return this.hasFieldValue('subGroup');
  }

  /** The element carrying the id and extensions of `subGroup`. Created when absent. */
  getSubGroupElement(): Element {
    if (this._subGroup === undefined) {
      this._subGroup = new Element();
    }
    return this._subGroup;
  }

  setSubGroupElement(subGroupElement: Element | undefined): this {
    this._subGroup = subGroupElement;
    return this;
  }

  /** Display text for the subsection of the group (0..1) */
  getSubGroupDisplay(): string | undefined {
    return this.subGroupDisplay;
  }

  /** Sets `subGroupDisplay`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setSubGroupDisplay(subGroupDisplay: string | undefined): this {
    return this.setFieldValue('subGroupDisplay', subGroupDisplay);
  }

  hasSubGroupDisplay(): boolean {
    return this.hasFieldValue('subGroupDisplay');
  }

  /** The element carrying the id and extensions of `subGroupDisplay`. Created when absent. */
  getSubGroupDisplayElement(): Element {
    if (this._subGroupDisplay === undefined) {
      this._subGroupDisplay = new Element();
    }
    return this._subGroupDisplay;
  }

  setSubGroupDisplayElement(subGroupDisplayElement: Element | undefined): this {
    this._subGroupDisplay = subGroupDisplayElement;
    return this;
  }

  /** An identifier for the plan (0..1) */
  getPlan(): string | undefined {
    return this.plan;
  }

  /** Sets `plan`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPlan(plan: string | undefined): this {
    return this.setFieldValue('plan', plan);
  }

  hasPlan(): boolean {
    return this.hasFieldValue('plan');
  }

  /** The element carrying the id and extensions of `plan`. Created when absent. */
  getPlanElement(): Element {
    if (this._plan === undefined) {
      this._plan = new Element();
    }
    return this._plan;
  }

  setPlanElement(planElement: Element | undefined): this {
    this._plan = planElement;
    return this;
  }

  /** Display text for the plan (0..1) */
  getPlanDisplay(): string | undefined {
    return this.planDisplay;
  }

  /** Sets `planDisplay`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPlanDisplay(planDisplay: string | undefined): this {
    return this.setFieldValue('planDisplay', planDisplay);
  }

  hasPlanDisplay(): boolean {
    return this.hasFieldValue('planDisplay');
  }

  /** The element carrying the id and extensions of `planDisplay`. Created when absent. */
  getPlanDisplayElement(): Element {
    if (this._planDisplay === undefined) {
      this._planDisplay = new Element();
    }
    return this._planDisplay;
  }

  setPlanDisplayElement(planDisplayElement: Element | undefined): this {
    this._planDisplay = planDisplayElement;
    return this;
  }

  /** An identifier for the subsection of the plan (0..1) */
  getSubPlan(): string | undefined {
    return this.subPlan;
  }

  /** Sets `subPlan`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setSubPlan(subPlan: string | undefined): this {
    return this.setFieldValue('subPlan', subPlan);
  }

  hasSubPlan(): boolean {
    return this.hasFieldValue('subPlan');
  }

  /** The element carrying the id and extensions of `subPlan`. Created when absent. */
  getSubPlanElement(): Element {
    if (this._subPlan === undefined) {
      this._subPlan = new Element();
    }
    return this._subPlan;
  }

  setSubPlanElement(subPlanElement: Element | undefined): this {
    this._subPlan = subPlanElement;
    return this;
  }

  /** Display text for the subsection of the plan (0..1) */
  getSubPlanDisplay(): string | undefined {
    return this.subPlanDisplay;
  }

  /** Sets `subPlanDisplay`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setSubPlanDisplay(subPlanDisplay: string | undefined): this {
    return this.setFieldValue('subPlanDisplay', subPlanDisplay);
  }

  hasSubPlanDisplay(): boolean {
    return this.hasFieldValue('subPlanDisplay');
  }

  /** The element carrying the id and extensions of `subPlanDisplay`. Created when absent. */
  getSubPlanDisplayElement(): Element {
    if (this._subPlanDisplay === undefined) {
      this._subPlanDisplay = new Element();
    }
    return this._subPlanDisplay;
  }

  setSubPlanDisplayElement(subPlanDisplayElement: Element | undefined): this {
    this._subPlanDisplay = subPlanDisplayElement;
    return this;
  }

  /** An identifier for the class (0..1) */
  getClass(): string | undefined {
    return this.class;
  }

  /** Sets `class`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setClass(classValue: string | undefined): this {
    return this.setFieldValue('class', classValue);
  }

  hasClass(): boolean {
    return this.hasFieldValue('class');
  }

  /** The element carrying the id and extensions of `class`. Created when absent. */
  getClassElement(): Element {
    if (this._class === undefined) {
      this._class = new Element();
    }
    return this._class;
  }

  setClassElement(classElement: Element | undefined): this {
    this._class = classElement;
    return this;
  }

  /** Display text for the class (0..1) */
  getClassDisplay(): string | undefined {
    return this.classDisplay;
  }

  /** Sets `classDisplay`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setClassDisplay(classDisplay: string | undefined): this {
    return this.setFieldValue('classDisplay', classDisplay);
  }

  hasClassDisplay(): boolean {
    return this.hasFieldValue('classDisplay');
  }

  /** The element carrying the id and extensions of `classDisplay`. Created when absent. */
  getClassDisplayElement(): Element {
    if (this._classDisplay === undefined) {
      this._classDisplay = new Element();
    }
    return this._classDisplay;
  }

  setClassDisplayElement(classDisplayElement: Element | undefined): this {
    this._classDisplay = classDisplayElement;
    return this;
  }

  /** An identifier for the subsection of the class (0..1) */
  getSubClass(): string | undefined {
    return this.subClass;
  }

  /** Sets `subClass`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setSubClass(subClass: string | undefined): this {
    return this.setFieldValue('subClass', subClass);
  }

  hasSubClass(): boolean {
    return this.hasFieldValue('subClass');
  }

  /** The element carrying the id and extensions of `subClass`. Created when absent. */
  getSubClassElement(): Element {
    if (this._subClass === undefined) {
      this._subClass = new Element();
    }
    return this._subClass;
  }

  setSubClassElement(subClassElement: Element | undefined): this {
    this._subClass = subClassElement;
    return this;
  }

  /** Display text for the subsection of the subclass (0..1) */
  getSubClassDisplay(): string | undefined {
    return this.subClassDisplay;
  }

  /** Sets `subClassDisplay`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setSubClassDisplay(subClassDisplay: string | undefined): this {
    return this.setFieldValue('subClassDisplay', subClassDisplay);
  }

  hasSubClassDisplay(): boolean {
    return this.hasFieldValue('subClassDisplay');
  }

  /** The element carrying the id and extensions of `subClassDisplay`. Created when absent. */
  getSubClassDisplayElement(): Element {
    if (this._subClassDisplay === undefined) {
      this._subClassDisplay = new Element();
    }
    return this._subClassDisplay;
  }

  setSubClassDisplayElement(subClassDisplayElement: Element | undefined): this {
    this._subClassDisplay = subClassDisplayElement;
    return this;
  }
}

modelTypeRegistry.register('CoverageGrouping', CoverageGrouping, false);
