/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';

/**
 * A financial tool for tracking value accrued for a particular purpose. In the healthcare field, used to track charges for a patient, cost centers, etc.
 */
export class Account extends DomainResource {
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
      types: [{ jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.AccountStatus }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
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
      elementName: 'subject',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'subject',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Device',
            'HealthcareService',
            'Location',
            'Organization',
            'Patient',
            'Practitioner',
            'PractitionerRole',
          ],
        },
      ],
    },
    {
      elementName: 'servicePeriod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'servicePeriod', typeCode: 'Period' }],
    },
    {
      elementName: 'coverage',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'coverage', typeCode: 'AccountCoverage' }],
    },
    {
      elementName: 'owner',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'owner', typeCode: 'Reference', targetResourceTypes: ['Organization'] }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'guarantor',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'guarantor', typeCode: 'AccountGuarantor' }],
    },
    {
      elementName: 'partOf',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'partOf', typeCode: 'Reference', targetResourceTypes: ['Account'] }],
    },
  ];

  readonly resourceType = 'Account';

  /** Account number (0..*) */
  identifier?: Identifier[];

  /** active | inactive | entered-in-error | on-hold | unknown (1..1) */
  status?: valueSetCodes.AccountStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** E.g. patient, expense, depreciation (0..1) */
  type?: CodeableConcept;

  /** Human-readable label (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** The entity that caused the expenses (0..*) */
  subject?: Reference[];

  /** Transaction window (0..1) */
  servicePeriod?: Period;

  /** The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account (0..*) */
  coverage?: AccountCoverage[];

  /** Entity managing the Account (0..1) */
  owner?: Reference;

  /** Explanation of purpose/use (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** The parties ultimately responsible for balancing the Account (0..*) */
  guarantor?: AccountGuarantor[];

  /** Reference to a parent Account (0..1) */
  partOf?: Reference;

  override fhirType(): string {
    return 'Account';
  }

  /** FHIR JSON for this Account, typed as the plain `Account` data type. */
  override toJSON(): plainTypes.Account {
    return this.serialize() as plainTypes.Account;
  }

  /** Account number (0..*) Never undefined; an empty list is created when absent. */
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

  /** active | inactive | entered-in-error | on-hold | unknown (1..1) */
  getStatus(): valueSetCodes.AccountStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.AccountStatus | undefined): this {
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

  /** E.g. patient, expense, depreciation (0..1) Created when absent. */
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

  /** Human-readable label (0..1) */
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

  /** The entity that caused the expenses (0..*) Never undefined; an empty list is created when absent. */
  getSubject(): Reference[] {
    if (this.subject === undefined) {
      this.subject = [];
    }
    return this.subject;
  }

  setSubject(subject: Reference[] | undefined): this {
    return this.setFieldValue('subject', subject);
  }

  hasSubject(): boolean {
    return this.hasFieldValue('subject');
  }

  /** Appends a new, empty Reference to `subject` and returns it so it can be filled in. */
  addSubject(): Reference;
  /** Appends the given Reference to `subject` and returns this object for chaining. */
  addSubject(reference: Reference): this;
  addSubject(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('subject', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('subject', createdReference);
    return createdReference;
  }

  /** The first Reference of `subject`. One is added when the list is empty. */
  getSubjectFirstRep(): Reference {
    const firstReference = this.getSubject()[0];
    return firstReference === undefined ? this.addSubject() : firstReference;
  }

  /** Transaction window (0..1) Created when absent. */
  getServicePeriod(): Period {
    if (this.servicePeriod === undefined) {
      this.servicePeriod = new Period();
    }
    return this.servicePeriod;
  }

  setServicePeriod(servicePeriod: Period | undefined): this {
    return this.setFieldValue('servicePeriod', servicePeriod);
  }

  hasServicePeriod(): boolean {
    return this.hasFieldValue('servicePeriod');
  }

  /** The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account (0..*) Never undefined; an empty list is created when absent. */
  getCoverage(): AccountCoverage[] {
    if (this.coverage === undefined) {
      this.coverage = [];
    }
    return this.coverage;
  }

  setCoverage(coverage: AccountCoverage[] | undefined): this {
    return this.setFieldValue('coverage', coverage);
  }

  hasCoverage(): boolean {
    return this.hasFieldValue('coverage');
  }

  /** Appends a new, empty AccountCoverage to `coverage` and returns it so it can be filled in. */
  addCoverage(): AccountCoverage;
  /** Appends the given AccountCoverage to `coverage` and returns this object for chaining. */
  addCoverage(accountCoverage: AccountCoverage): this;
  addCoverage(accountCoverage?: AccountCoverage): AccountCoverage | this {
    if (accountCoverage !== undefined) {
      return this.addFieldValue('coverage', accountCoverage);
    }
    const createdAccountCoverage = new AccountCoverage();
    this.addFieldValue('coverage', createdAccountCoverage);
    return createdAccountCoverage;
  }

  /** The first AccountCoverage of `coverage`. One is added when the list is empty. */
  getCoverageFirstRep(): AccountCoverage {
    const firstAccountCoverage = this.getCoverage()[0];
    return firstAccountCoverage === undefined ? this.addCoverage() : firstAccountCoverage;
  }

  /** Entity managing the Account (0..1) Created when absent. */
  getOwner(): Reference {
    if (this.owner === undefined) {
      this.owner = new Reference();
    }
    return this.owner;
  }

  setOwner(owner: Reference | undefined): this {
    return this.setFieldValue('owner', owner);
  }

  hasOwner(): boolean {
    return this.hasFieldValue('owner');
  }

  /** Explanation of purpose/use (0..1) */
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

  /** The parties ultimately responsible for balancing the Account (0..*) Never undefined; an empty list is created when absent. */
  getGuarantor(): AccountGuarantor[] {
    if (this.guarantor === undefined) {
      this.guarantor = [];
    }
    return this.guarantor;
  }

  setGuarantor(guarantor: AccountGuarantor[] | undefined): this {
    return this.setFieldValue('guarantor', guarantor);
  }

  hasGuarantor(): boolean {
    return this.hasFieldValue('guarantor');
  }

  /** Appends a new, empty AccountGuarantor to `guarantor` and returns it so it can be filled in. */
  addGuarantor(): AccountGuarantor;
  /** Appends the given AccountGuarantor to `guarantor` and returns this object for chaining. */
  addGuarantor(accountGuarantor: AccountGuarantor): this;
  addGuarantor(accountGuarantor?: AccountGuarantor): AccountGuarantor | this {
    if (accountGuarantor !== undefined) {
      return this.addFieldValue('guarantor', accountGuarantor);
    }
    const createdAccountGuarantor = new AccountGuarantor();
    this.addFieldValue('guarantor', createdAccountGuarantor);
    return createdAccountGuarantor;
  }

  /** The first AccountGuarantor of `guarantor`. One is added when the list is empty. */
  getGuarantorFirstRep(): AccountGuarantor {
    const firstAccountGuarantor = this.getGuarantor()[0];
    return firstAccountGuarantor === undefined ? this.addGuarantor() : firstAccountGuarantor;
  }

  /** Reference to a parent Account (0..1) Created when absent. */
  getPartOf(): Reference {
    if (this.partOf === undefined) {
      this.partOf = new Reference();
    }
    return this.partOf;
  }

  setPartOf(partOf: Reference | undefined): this {
    return this.setFieldValue('partOf', partOf);
  }

  hasPartOf(): boolean {
    return this.hasFieldValue('partOf');
  }
}

modelTypeRegistry.register('Account', Account, true);

/** True when the value is a Account model instance. */
export function isAccount(candidate: unknown): candidate is Account {
  return candidate instanceof Account;
}

/**
 * The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account
 */
export class AccountCoverage extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'coverage',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'coverage', typeCode: 'Reference', targetResourceTypes: ['Coverage'] }],
    },
    {
      elementName: 'priority',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'priority', typeCode: 'positiveInt' }],
    },
  ];

  /** The party(s), such as insurances, that may contribute to the payment of this account (1..1) */
  coverage?: Reference;

  /** The priority of the coverage in the context of this account (0..1) */
  priority?: number;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;

  override fhirType(): string {
    return 'Account.coverage';
  }

  /** FHIR JSON for this AccountCoverage, typed as the plain `AccountCoverage` data type. */
  override toJSON(): plainTypes.AccountCoverage {
    return this.serialize() as plainTypes.AccountCoverage;
  }

  /** The party(s), such as insurances, that may contribute to the payment of this account (1..1) Created when absent. */
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

  /** The priority of the coverage in the context of this account (0..1) */
  getPriority(): number | undefined {
    return this.priority;
  }

  /** Sets `priority`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setPriority(priority: number | undefined): this {
    return this.setFieldValue('priority', priority);
  }

  hasPriority(): boolean {
    return this.hasFieldValue('priority');
  }

  /** The element carrying the id and extensions of `priority`. Created when absent. */
  getPriorityElement(): Element {
    if (this._priority === undefined) {
      this._priority = new Element();
    }
    return this._priority;
  }

  setPriorityElement(priorityElement: Element | undefined): this {
    this._priority = priorityElement;
    return this;
  }
}

modelTypeRegistry.register('AccountCoverage', AccountCoverage, false);

/**
 * The parties ultimately responsible for balancing the Account
 */
export class AccountGuarantor extends BackboneElement {
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
      elementName: 'onHold',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'onHold', typeCode: 'boolean' }],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
  ];

  /** Responsible entity (1..1) */
  party?: Reference;

  /** Credit or other hold applied (0..1) */
  onHold?: boolean;
  /** Id and extensions of the primitive `onHold`. */
  _onHold?: Element;

  /** Guarantee account during (0..1) */
  period?: Period;

  override fhirType(): string {
    return 'Account.guarantor';
  }

  /** FHIR JSON for this AccountGuarantor, typed as the plain `AccountGuarantor` data type. */
  override toJSON(): plainTypes.AccountGuarantor {
    return this.serialize() as plainTypes.AccountGuarantor;
  }

  /** Responsible entity (1..1) Created when absent. */
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

  /** Credit or other hold applied (0..1) */
  getOnHold(): boolean | undefined {
    return this.onHold;
  }

  /** Sets `onHold`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setOnHold(onHold: boolean | undefined): this {
    return this.setFieldValue('onHold', onHold);
  }

  hasOnHold(): boolean {
    return this.hasFieldValue('onHold');
  }

  /** The element carrying the id and extensions of `onHold`. Created when absent. */
  getOnHoldElement(): Element {
    if (this._onHold === undefined) {
      this._onHold = new Element();
    }
    return this._onHold;
  }

  setOnHoldElement(onHoldElement: Element | undefined): this {
    this._onHold = onHoldElement;
    return this;
  }

  /** Guarantee account during (0..1) Created when absent. */
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

modelTypeRegistry.register('AccountGuarantor', AccountGuarantor, false);
