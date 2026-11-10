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
import { CodeableReference } from './codeableReference';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Money } from './money';
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
      elementName: 'billingStatus',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'billingStatus', typeCode: 'CodeableConcept' }],
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
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'guarantor',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'guarantor', typeCode: 'AccountGuarantor' }],
    },
    {
      elementName: 'diagnosis',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'diagnosis', typeCode: 'AccountDiagnosis' }],
    },
    {
      elementName: 'procedure',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'procedure', typeCode: 'AccountProcedure' }],
    },
    {
      elementName: 'relatedAccount',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'relatedAccount', typeCode: 'AccountRelatedAccount' }],
    },
    {
      elementName: 'currency',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'currency', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'balance',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'balance', typeCode: 'AccountBalance' }],
    },
    {
      elementName: 'calculatedAt',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'calculatedAt', typeCode: 'instant' }],
    },
  ];

  readonly resourceType = 'Account';

  /** Account number (0..*) */
  identifier?: Identifier[];

  /** active | inactive | entered-in-error | on-hold | unknown (1..1) */
  status?: valueSetCodes.AccountStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Tracks the lifecycle of the account through the billing process (0..1) */
  billingStatus?: CodeableConcept;

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

  /** The list of diagnoses relevant to this account (0..*) */
  diagnosis?: AccountDiagnosis[];

  /** The list of procedures relevant to this account (0..*) */
  procedure?: AccountProcedure[];

  /** Other associated accounts related to this account (0..*) */
  relatedAccount?: AccountRelatedAccount[];

  /** The base or default currency (0..1) */
  currency?: CodeableConcept;

  /** Calculated account balance(s) (0..*) */
  balance?: AccountBalance[];

  /** Time the balance amount was calculated (0..1) */
  calculatedAt?: string;
  /** Id and extensions of the primitive `calculatedAt`. */
  _calculatedAt?: Element;

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

  /** Tracks the lifecycle of the account through the billing process (0..1) Created when absent. */
  getBillingStatus(): CodeableConcept {
    if (this.billingStatus === undefined) {
      this.billingStatus = new CodeableConcept();
    }
    return this.billingStatus;
  }

  setBillingStatus(billingStatus: CodeableConcept | undefined): this {
    return this.setFieldValue('billingStatus', billingStatus);
  }

  hasBillingStatus(): boolean {
    return this.hasFieldValue('billingStatus');
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

  /** Sets `description`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
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

  /** The list of diagnoses relevant to this account (0..*) Never undefined; an empty list is created when absent. */
  getDiagnosis(): AccountDiagnosis[] {
    if (this.diagnosis === undefined) {
      this.diagnosis = [];
    }
    return this.diagnosis;
  }

  setDiagnosis(diagnosis: AccountDiagnosis[] | undefined): this {
    return this.setFieldValue('diagnosis', diagnosis);
  }

  hasDiagnosis(): boolean {
    return this.hasFieldValue('diagnosis');
  }

  /** Appends a new, empty AccountDiagnosis to `diagnosis` and returns it so it can be filled in. */
  addDiagnosis(): AccountDiagnosis;
  /** Appends the given AccountDiagnosis to `diagnosis` and returns this object for chaining. */
  addDiagnosis(accountDiagnosis: AccountDiagnosis): this;
  addDiagnosis(accountDiagnosis?: AccountDiagnosis): AccountDiagnosis | this {
    if (accountDiagnosis !== undefined) {
      return this.addFieldValue('diagnosis', accountDiagnosis);
    }
    const createdAccountDiagnosis = new AccountDiagnosis();
    this.addFieldValue('diagnosis', createdAccountDiagnosis);
    return createdAccountDiagnosis;
  }

  /** The first AccountDiagnosis of `diagnosis`. One is added when the list is empty. */
  getDiagnosisFirstRep(): AccountDiagnosis {
    const firstAccountDiagnosis = this.getDiagnosis()[0];
    return firstAccountDiagnosis === undefined ? this.addDiagnosis() : firstAccountDiagnosis;
  }

  /** The list of procedures relevant to this account (0..*) Never undefined; an empty list is created when absent. */
  getProcedure(): AccountProcedure[] {
    if (this.procedure === undefined) {
      this.procedure = [];
    }
    return this.procedure;
  }

  setProcedure(procedure: AccountProcedure[] | undefined): this {
    return this.setFieldValue('procedure', procedure);
  }

  hasProcedure(): boolean {
    return this.hasFieldValue('procedure');
  }

  /** Appends a new, empty AccountProcedure to `procedure` and returns it so it can be filled in. */
  addProcedure(): AccountProcedure;
  /** Appends the given AccountProcedure to `procedure` and returns this object for chaining. */
  addProcedure(accountProcedure: AccountProcedure): this;
  addProcedure(accountProcedure?: AccountProcedure): AccountProcedure | this {
    if (accountProcedure !== undefined) {
      return this.addFieldValue('procedure', accountProcedure);
    }
    const createdAccountProcedure = new AccountProcedure();
    this.addFieldValue('procedure', createdAccountProcedure);
    return createdAccountProcedure;
  }

  /** The first AccountProcedure of `procedure`. One is added when the list is empty. */
  getProcedureFirstRep(): AccountProcedure {
    const firstAccountProcedure = this.getProcedure()[0];
    return firstAccountProcedure === undefined ? this.addProcedure() : firstAccountProcedure;
  }

  /** Other associated accounts related to this account (0..*) Never undefined; an empty list is created when absent. */
  getRelatedAccount(): AccountRelatedAccount[] {
    if (this.relatedAccount === undefined) {
      this.relatedAccount = [];
    }
    return this.relatedAccount;
  }

  setRelatedAccount(relatedAccount: AccountRelatedAccount[] | undefined): this {
    return this.setFieldValue('relatedAccount', relatedAccount);
  }

  hasRelatedAccount(): boolean {
    return this.hasFieldValue('relatedAccount');
  }

  /** Appends a new, empty AccountRelatedAccount to `relatedAccount` and returns it so it can be filled in. */
  addRelatedAccount(): AccountRelatedAccount;
  /** Appends the given AccountRelatedAccount to `relatedAccount` and returns this object for chaining. */
  addRelatedAccount(accountRelatedAccount: AccountRelatedAccount): this;
  addRelatedAccount(accountRelatedAccount?: AccountRelatedAccount): AccountRelatedAccount | this {
    if (accountRelatedAccount !== undefined) {
      return this.addFieldValue('relatedAccount', accountRelatedAccount);
    }
    const createdAccountRelatedAccount = new AccountRelatedAccount();
    this.addFieldValue('relatedAccount', createdAccountRelatedAccount);
    return createdAccountRelatedAccount;
  }

  /** The first AccountRelatedAccount of `relatedAccount`. One is added when the list is empty. */
  getRelatedAccountFirstRep(): AccountRelatedAccount {
    const firstAccountRelatedAccount = this.getRelatedAccount()[0];
    return firstAccountRelatedAccount === undefined
      ? this.addRelatedAccount()
      : firstAccountRelatedAccount;
  }

  /** The base or default currency (0..1) Created when absent. */
  getCurrency(): CodeableConcept {
    if (this.currency === undefined) {
      this.currency = new CodeableConcept();
    }
    return this.currency;
  }

  setCurrency(currency: CodeableConcept | undefined): this {
    return this.setFieldValue('currency', currency);
  }

  hasCurrency(): boolean {
    return this.hasFieldValue('currency');
  }

  /** Calculated account balance(s) (0..*) Never undefined; an empty list is created when absent. */
  getBalance(): AccountBalance[] {
    if (this.balance === undefined) {
      this.balance = [];
    }
    return this.balance;
  }

  setBalance(balance: AccountBalance[] | undefined): this {
    return this.setFieldValue('balance', balance);
  }

  hasBalance(): boolean {
    return this.hasFieldValue('balance');
  }

  /** Appends a new, empty AccountBalance to `balance` and returns it so it can be filled in. */
  addBalance(): AccountBalance;
  /** Appends the given AccountBalance to `balance` and returns this object for chaining. */
  addBalance(accountBalance: AccountBalance): this;
  addBalance(accountBalance?: AccountBalance): AccountBalance | this {
    if (accountBalance !== undefined) {
      return this.addFieldValue('balance', accountBalance);
    }
    const createdAccountBalance = new AccountBalance();
    this.addFieldValue('balance', createdAccountBalance);
    return createdAccountBalance;
  }

  /** The first AccountBalance of `balance`. One is added when the list is empty. */
  getBalanceFirstRep(): AccountBalance {
    const firstAccountBalance = this.getBalance()[0];
    return firstAccountBalance === undefined ? this.addBalance() : firstAccountBalance;
  }

  /** Time the balance amount was calculated (0..1) */
  getCalculatedAt(): string | undefined {
    return this.calculatedAt;
  }

  /** Sets `calculatedAt`. Throws a FhirModelError when the value is not a valid FHIR instant. */
  setCalculatedAt(calculatedAt: string | undefined): this {
    return this.setFieldValue('calculatedAt', calculatedAt);
  }

  hasCalculatedAt(): boolean {
    return this.hasFieldValue('calculatedAt');
  }

  /** The element carrying the id and extensions of `calculatedAt`. Created when absent. */
  getCalculatedAtElement(): Element {
    if (this._calculatedAt === undefined) {
      this._calculatedAt = new Element();
    }
    return this._calculatedAt;
  }

  setCalculatedAtElement(calculatedAtElement: Element | undefined): this {
    this._calculatedAt = calculatedAtElement;
    return this;
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

/**
 * The list of diagnoses relevant to this account
 */
export class AccountDiagnosis extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'sequence',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sequence', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'condition',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'condition', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'dateOfDiagnosis',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'dateOfDiagnosis', typeCode: 'dateTime' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'onAdmission',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'onAdmission', typeCode: 'boolean' }],
    },
    {
      elementName: 'packageCode',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'packageCode', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Ranking of the diagnosis (for each type) (0..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;

  /** The diagnosis relevant to the account (1..1) */
  condition?: CodeableReference;

  /** Date of the diagnosis (when coded diagnosis) (0..1) */
  dateOfDiagnosis?: string;
  /** Id and extensions of the primitive `dateOfDiagnosis`. */
  _dateOfDiagnosis?: Element;

  /** Type that this diagnosis has relevant to the account (e.g. admission, billing, discharge …) (0..*) */
  type?: CodeableConcept[];

  /** Diagnosis present on Admission (0..1) */
  onAdmission?: boolean;
  /** Id and extensions of the primitive `onAdmission`. */
  _onAdmission?: Element;

  /** Package Code specific for billing (0..*) */
  packageCode?: CodeableConcept[];

  override fhirType(): string {
    return 'Account.diagnosis';
  }

  /** FHIR JSON for this AccountDiagnosis, typed as the plain `AccountDiagnosis` data type. */
  override toJSON(): plainTypes.AccountDiagnosis {
    return this.serialize() as plainTypes.AccountDiagnosis;
  }

  /** Ranking of the diagnosis (for each type) (0..1) */
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

  /** The diagnosis relevant to the account (1..1) Created when absent. */
  getCondition(): CodeableReference {
    if (this.condition === undefined) {
      this.condition = new CodeableReference();
    }
    return this.condition;
  }

  setCondition(condition: CodeableReference | undefined): this {
    return this.setFieldValue('condition', condition);
  }

  hasCondition(): boolean {
    return this.hasFieldValue('condition');
  }

  /** Date of the diagnosis (when coded diagnosis) (0..1) */
  getDateOfDiagnosis(): string | undefined {
    return this.dateOfDiagnosis;
  }

  /** Sets `dateOfDiagnosis`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setDateOfDiagnosis(dateOfDiagnosis: string | undefined): this {
    return this.setFieldValue('dateOfDiagnosis', dateOfDiagnosis);
  }

  hasDateOfDiagnosis(): boolean {
    return this.hasFieldValue('dateOfDiagnosis');
  }

  /** The element carrying the id and extensions of `dateOfDiagnosis`. Created when absent. */
  getDateOfDiagnosisElement(): Element {
    if (this._dateOfDiagnosis === undefined) {
      this._dateOfDiagnosis = new Element();
    }
    return this._dateOfDiagnosis;
  }

  setDateOfDiagnosisElement(dateOfDiagnosisElement: Element | undefined): this {
    this._dateOfDiagnosis = dateOfDiagnosisElement;
    return this;
  }

  /** Type that this diagnosis has relevant to the account (e.g. admission, billing, discharge …) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Diagnosis present on Admission (0..1) */
  getOnAdmission(): boolean | undefined {
    return this.onAdmission;
  }

  /** Sets `onAdmission`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setOnAdmission(onAdmission: boolean | undefined): this {
    return this.setFieldValue('onAdmission', onAdmission);
  }

  hasOnAdmission(): boolean {
    return this.hasFieldValue('onAdmission');
  }

  /** The element carrying the id and extensions of `onAdmission`. Created when absent. */
  getOnAdmissionElement(): Element {
    if (this._onAdmission === undefined) {
      this._onAdmission = new Element();
    }
    return this._onAdmission;
  }

  setOnAdmissionElement(onAdmissionElement: Element | undefined): this {
    this._onAdmission = onAdmissionElement;
    return this;
  }

  /** Package Code specific for billing (0..*) Never undefined; an empty list is created when absent. */
  getPackageCode(): CodeableConcept[] {
    if (this.packageCode === undefined) {
      this.packageCode = [];
    }
    return this.packageCode;
  }

  setPackageCode(packageCode: CodeableConcept[] | undefined): this {
    return this.setFieldValue('packageCode', packageCode);
  }

  hasPackageCode(): boolean {
    return this.hasFieldValue('packageCode');
  }

  /** Appends a new, empty CodeableConcept to `packageCode` and returns it so it can be filled in. */
  addPackageCode(): CodeableConcept;
  /** Appends the given CodeableConcept to `packageCode` and returns this object for chaining. */
  addPackageCode(codeableConcept: CodeableConcept): this;
  addPackageCode(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('packageCode', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('packageCode', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `packageCode`. One is added when the list is empty. */
  getPackageCodeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getPackageCode()[0];
    return firstCodeableConcept === undefined ? this.addPackageCode() : firstCodeableConcept;
  }
}

modelTypeRegistry.register('AccountDiagnosis', AccountDiagnosis, false);

/**
 * The list of procedures relevant to this account
 */
export class AccountProcedure extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'sequence',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sequence', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'dateOfService',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'dateOfService', typeCode: 'dateTime' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'packageCode',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'packageCode', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'device',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'device', typeCode: 'Reference', targetResourceTypes: ['Device'] }],
    },
  ];

  /** Ranking of the procedure (for each type) (0..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;

  /** The procedure relevant to the account (1..1) */
  code?: CodeableReference;

  /** Date of the procedure (when coded procedure) (0..1) */
  dateOfService?: string;
  /** Id and extensions of the primitive `dateOfService`. */
  _dateOfService?: Element;

  /** How this procedure value should be used in charging the account (0..*) */
  type?: CodeableConcept[];

  /** Package Code specific for billing (0..*) */
  packageCode?: CodeableConcept[];

  /** Any devices that were associated with the procedure (0..*) */
  device?: Reference[];

  override fhirType(): string {
    return 'Account.procedure';
  }

  /** FHIR JSON for this AccountProcedure, typed as the plain `AccountProcedure` data type. */
  override toJSON(): plainTypes.AccountProcedure {
    return this.serialize() as plainTypes.AccountProcedure;
  }

  /** Ranking of the procedure (for each type) (0..1) */
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

  /** The procedure relevant to the account (1..1) Created when absent. */
  getCode(): CodeableReference {
    if (this.code === undefined) {
      this.code = new CodeableReference();
    }
    return this.code;
  }

  setCode(code: CodeableReference | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** Date of the procedure (when coded procedure) (0..1) */
  getDateOfService(): string | undefined {
    return this.dateOfService;
  }

  /** Sets `dateOfService`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setDateOfService(dateOfService: string | undefined): this {
    return this.setFieldValue('dateOfService', dateOfService);
  }

  hasDateOfService(): boolean {
    return this.hasFieldValue('dateOfService');
  }

  /** The element carrying the id and extensions of `dateOfService`. Created when absent. */
  getDateOfServiceElement(): Element {
    if (this._dateOfService === undefined) {
      this._dateOfService = new Element();
    }
    return this._dateOfService;
  }

  setDateOfServiceElement(dateOfServiceElement: Element | undefined): this {
    this._dateOfService = dateOfServiceElement;
    return this;
  }

  /** How this procedure value should be used in charging the account (0..*) Never undefined; an empty list is created when absent. */
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

  /** Package Code specific for billing (0..*) Never undefined; an empty list is created when absent. */
  getPackageCode(): CodeableConcept[] {
    if (this.packageCode === undefined) {
      this.packageCode = [];
    }
    return this.packageCode;
  }

  setPackageCode(packageCode: CodeableConcept[] | undefined): this {
    return this.setFieldValue('packageCode', packageCode);
  }

  hasPackageCode(): boolean {
    return this.hasFieldValue('packageCode');
  }

  /** Appends a new, empty CodeableConcept to `packageCode` and returns it so it can be filled in. */
  addPackageCode(): CodeableConcept;
  /** Appends the given CodeableConcept to `packageCode` and returns this object for chaining. */
  addPackageCode(codeableConcept: CodeableConcept): this;
  addPackageCode(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('packageCode', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('packageCode', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `packageCode`. One is added when the list is empty. */
  getPackageCodeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getPackageCode()[0];
    return firstCodeableConcept === undefined ? this.addPackageCode() : firstCodeableConcept;
  }

  /** Any devices that were associated with the procedure (0..*) Never undefined; an empty list is created when absent. */
  getDevice(): Reference[] {
    if (this.device === undefined) {
      this.device = [];
    }
    return this.device;
  }

  setDevice(device: Reference[] | undefined): this {
    return this.setFieldValue('device', device);
  }

  hasDevice(): boolean {
    return this.hasFieldValue('device');
  }

  /** Appends a new, empty Reference to `device` and returns it so it can be filled in. */
  addDevice(): Reference;
  /** Appends the given Reference to `device` and returns this object for chaining. */
  addDevice(reference: Reference): this;
  addDevice(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('device', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('device', createdReference);
    return createdReference;
  }

  /** The first Reference of `device`. One is added when the list is empty. */
  getDeviceFirstRep(): Reference {
    const firstReference = this.getDevice()[0];
    return firstReference === undefined ? this.addDevice() : firstReference;
  }
}

modelTypeRegistry.register('AccountProcedure', AccountProcedure, false);

/**
 * Other associated accounts related to this account
 */
export class AccountRelatedAccount extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'relationship',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'relationship', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'account',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'account', typeCode: 'Reference', targetResourceTypes: ['Account'] }],
    },
  ];

  /** Relationship of the associated Account (0..1) */
  relationship?: CodeableConcept;

  /** Reference to an associated Account (1..1) */
  account?: Reference;

  override fhirType(): string {
    return 'Account.relatedAccount';
  }

  /** FHIR JSON for this AccountRelatedAccount, typed as the plain `AccountRelatedAccount` data type. */
  override toJSON(): plainTypes.AccountRelatedAccount {
    return this.serialize() as plainTypes.AccountRelatedAccount;
  }

  /** Relationship of the associated Account (0..1) Created when absent. */
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

  /** Reference to an associated Account (1..1) Created when absent. */
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
}

modelTypeRegistry.register('AccountRelatedAccount', AccountRelatedAccount, false);

/**
 * Calculated account balance(s)
 */
export class AccountBalance extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'aggregate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'aggregate', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'term',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'term', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'estimate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'estimate', typeCode: 'boolean' }],
    },
    {
      elementName: 'amount',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'amount', typeCode: 'Money' }],
    },
  ];

  /** Who is expected to pay this part of the balance (0..1) */
  aggregate?: CodeableConcept;

  /** current | 30 | 60 | 90 | 120 (0..1) */
  term?: CodeableConcept;

  /** Estimated balance (0..1) */
  estimate?: boolean;
  /** Id and extensions of the primitive `estimate`. */
  _estimate?: Element;

  /** Calculated amount (1..1) */
  amount?: Money;

  override fhirType(): string {
    return 'Account.balance';
  }

  /** FHIR JSON for this AccountBalance, typed as the plain `AccountBalance` data type. */
  override toJSON(): plainTypes.AccountBalance {
    return this.serialize() as plainTypes.AccountBalance;
  }

  /** Who is expected to pay this part of the balance (0..1) Created when absent. */
  getAggregate(): CodeableConcept {
    if (this.aggregate === undefined) {
      this.aggregate = new CodeableConcept();
    }
    return this.aggregate;
  }

  setAggregate(aggregate: CodeableConcept | undefined): this {
    return this.setFieldValue('aggregate', aggregate);
  }

  hasAggregate(): boolean {
    return this.hasFieldValue('aggregate');
  }

  /** current | 30 | 60 | 90 | 120 (0..1) Created when absent. */
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

  /** Estimated balance (0..1) */
  getEstimate(): boolean | undefined {
    return this.estimate;
  }

  /** Sets `estimate`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setEstimate(estimate: boolean | undefined): this {
    return this.setFieldValue('estimate', estimate);
  }

  hasEstimate(): boolean {
    return this.hasFieldValue('estimate');
  }

  /** The element carrying the id and extensions of `estimate`. Created when absent. */
  getEstimateElement(): Element {
    if (this._estimate === undefined) {
      this._estimate = new Element();
    }
    return this._estimate;
  }

  setEstimateElement(estimateElement: Element | undefined): this {
    this._estimate = estimateElement;
    return this;
  }

  /** Calculated amount (1..1) Created when absent. */
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

modelTypeRegistry.register('AccountBalance', AccountBalance, false);
