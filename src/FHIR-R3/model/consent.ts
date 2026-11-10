/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { Attachment } from './attachment';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { Coding } from './coding';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';

/**
 * Base StructureDefinition for Consent Resource
 */
export class Consent extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.ConsentState }],
    },
    {
      elementName: 'category',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'patient',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'patient', typeCode: 'Reference', targetResourceTypes: ['Patient'] }],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
    {
      elementName: 'dateTime',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'dateTime', typeCode: 'dateTime' }],
    },
    {
      elementName: 'consentingParty',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'consentingParty',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Patient', 'Practitioner', 'RelatedPerson'],
        },
      ],
    },
    {
      elementName: 'actor',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'actor', typeCode: 'ConsentActor' }],
    },
    {
      elementName: 'action',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'action', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'organization',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'organization', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
    {
      elementName: 'source',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'sourceAttachment', typeCode: 'Attachment' },
        { jsonKey: 'sourceIdentifier', typeCode: 'Identifier' },
        {
          jsonKey: 'sourceReference',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Consent',
            'Contract',
            'DocumentReference',
            'QuestionnaireResponse',
          ],
        },
      ],
    },
    {
      elementName: 'policy',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'policy', typeCode: 'ConsentPolicy' }],
    },
    {
      elementName: 'policyRule',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'policyRule', typeCode: 'uri' }],
    },
    {
      elementName: 'securityLabel',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'securityLabel', typeCode: 'Coding' }],
    },
    {
      elementName: 'purpose',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'purpose', typeCode: 'Coding' }],
    },
    {
      elementName: 'dataPeriod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'dataPeriod', typeCode: 'Period' }],
    },
    {
      elementName: 'data',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'data', typeCode: 'ConsentData' }],
    },
    {
      elementName: 'except',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'except', typeCode: 'ConsentExcept' }],
    },
  ];

  readonly resourceType = 'Consent';

  /** Identifier for this record (external references) (0..1) */
  identifier?: Identifier;

  /** draft | proposed | active | rejected | inactive | entered-in-error (1..1) */
  status?: valueSetCodes.ConsentState;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Classification of the consent statement - for indexing/retrieval (0..*) */
  category?: CodeableConcept[];

  /** Who the consent applies to (1..1) */
  patient?: Reference;

  /** Period that this consent applies (0..1) */
  period?: Period;

  /** When this Consent was created or indexed (0..1) */
  dateTime?: string;
  /** Id and extensions of the primitive `dateTime`. */
  _dateTime?: Element;

  /** Who is agreeing to the policy and exceptions (0..*) */
  consentingParty?: Reference[];

  /** Who|what controlled by this consent (or group, by role) (0..*) */
  actor?: ConsentActor[];

  /** Actions controlled by this consent (0..*) */
  action?: CodeableConcept[];

  /** Custodian of the consent (0..*) */
  organization?: Reference[];

  /** Source from which this consent is taken (0..1) */
  sourceAttachment?: Attachment;
  /** Source from which this consent is taken (0..1) */
  sourceIdentifier?: Identifier;
  /** Source from which this consent is taken (0..1) */
  sourceReference?: Reference;

  /** Policies covered by this consent (0..*) */
  policy?: ConsentPolicy[];

  /** Policy that this consents to (0..1) */
  policyRule?: string;
  /** Id and extensions of the primitive `policyRule`. */
  _policyRule?: Element;

  /** Security Labels that define affected resources (0..*) */
  securityLabel?: Coding[];

  /** Context of activities for which the agreement is made (0..*) */
  purpose?: Coding[];

  /** Timeframe for data controlled by this consent (0..1) */
  dataPeriod?: Period;

  /** Data controlled by this consent (0..*) */
  data?: ConsentData[];

  /** Additional rule - addition or removal of permissions (0..*) */
  except?: ConsentExcept[];

  override fhirType(): string {
    return 'Consent';
  }

  /** FHIR JSON for this Consent, typed as the plain `Consent` data type. */
  override toJSON(): plainTypes.Consent {
    return this.serialize() as plainTypes.Consent;
  }

  /** Identifier for this record (external references) (0..1) Created when absent. */
  getIdentifier(): Identifier {
    if (this.identifier === undefined) {
      this.identifier = new Identifier();
    }
    return this.identifier;
  }

  setIdentifier(identifier: Identifier | undefined): this {
    return this.setFieldValue('identifier', identifier);
  }

  hasIdentifier(): boolean {
    return this.hasFieldValue('identifier');
  }

  /** draft | proposed | active | rejected | inactive | entered-in-error (1..1) */
  getStatus(): valueSetCodes.ConsentState | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.ConsentState | undefined): this {
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

  /** Classification of the consent statement - for indexing/retrieval (0..*) Never undefined; an empty list is created when absent. */
  getCategory(): CodeableConcept[] {
    if (this.category === undefined) {
      this.category = [];
    }
    return this.category;
  }

  setCategory(category: CodeableConcept[] | undefined): this {
    return this.setFieldValue('category', category);
  }

  hasCategory(): boolean {
    return this.hasFieldValue('category');
  }

  /** Appends a new, empty CodeableConcept to `category` and returns it so it can be filled in. */
  addCategory(): CodeableConcept;
  /** Appends the given CodeableConcept to `category` and returns this object for chaining. */
  addCategory(codeableConcept: CodeableConcept): this;
  addCategory(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('category', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('category', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `category`. One is added when the list is empty. */
  getCategoryFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getCategory()[0];
    return firstCodeableConcept === undefined ? this.addCategory() : firstCodeableConcept;
  }

  /** Who the consent applies to (1..1) Created when absent. */
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

  /** Period that this consent applies (0..1) Created when absent. */
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

  /** When this Consent was created or indexed (0..1) */
  getDateTime(): string | undefined {
    return this.dateTime;
  }

  /** Sets `dateTime`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setDateTime(dateTime: string | undefined): this {
    return this.setFieldValue('dateTime', dateTime);
  }

  hasDateTime(): boolean {
    return this.hasFieldValue('dateTime');
  }

  /** The element carrying the id and extensions of `dateTime`. Created when absent. */
  getDateTimeElement(): Element {
    if (this._dateTime === undefined) {
      this._dateTime = new Element();
    }
    return this._dateTime;
  }

  setDateTimeElement(dateTimeElement: Element | undefined): this {
    this._dateTime = dateTimeElement;
    return this;
  }

  /** Who is agreeing to the policy and exceptions (0..*) Never undefined; an empty list is created when absent. */
  getConsentingParty(): Reference[] {
    if (this.consentingParty === undefined) {
      this.consentingParty = [];
    }
    return this.consentingParty;
  }

  setConsentingParty(consentingParty: Reference[] | undefined): this {
    return this.setFieldValue('consentingParty', consentingParty);
  }

  hasConsentingParty(): boolean {
    return this.hasFieldValue('consentingParty');
  }

  /** Appends a new, empty Reference to `consentingParty` and returns it so it can be filled in. */
  addConsentingParty(): Reference;
  /** Appends the given Reference to `consentingParty` and returns this object for chaining. */
  addConsentingParty(reference: Reference): this;
  addConsentingParty(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('consentingParty', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('consentingParty', createdReference);
    return createdReference;
  }

  /** The first Reference of `consentingParty`. One is added when the list is empty. */
  getConsentingPartyFirstRep(): Reference {
    const firstReference = this.getConsentingParty()[0];
    return firstReference === undefined ? this.addConsentingParty() : firstReference;
  }

  /** Who|what controlled by this consent (or group, by role) (0..*) Never undefined; an empty list is created when absent. */
  getActor(): ConsentActor[] {
    if (this.actor === undefined) {
      this.actor = [];
    }
    return this.actor;
  }

  setActor(actor: ConsentActor[] | undefined): this {
    return this.setFieldValue('actor', actor);
  }

  hasActor(): boolean {
    return this.hasFieldValue('actor');
  }

  /** Appends a new, empty ConsentActor to `actor` and returns it so it can be filled in. */
  addActor(): ConsentActor;
  /** Appends the given ConsentActor to `actor` and returns this object for chaining. */
  addActor(consentActor: ConsentActor): this;
  addActor(consentActor?: ConsentActor): ConsentActor | this {
    if (consentActor !== undefined) {
      return this.addFieldValue('actor', consentActor);
    }
    const createdConsentActor = new ConsentActor();
    this.addFieldValue('actor', createdConsentActor);
    return createdConsentActor;
  }

  /** The first ConsentActor of `actor`. One is added when the list is empty. */
  getActorFirstRep(): ConsentActor {
    const firstConsentActor = this.getActor()[0];
    return firstConsentActor === undefined ? this.addActor() : firstConsentActor;
  }

  /** Actions controlled by this consent (0..*) Never undefined; an empty list is created when absent. */
  getAction(): CodeableConcept[] {
    if (this.action === undefined) {
      this.action = [];
    }
    return this.action;
  }

  setAction(action: CodeableConcept[] | undefined): this {
    return this.setFieldValue('action', action);
  }

  hasAction(): boolean {
    return this.hasFieldValue('action');
  }

  /** Appends a new, empty CodeableConcept to `action` and returns it so it can be filled in. */
  addAction(): CodeableConcept;
  /** Appends the given CodeableConcept to `action` and returns this object for chaining. */
  addAction(codeableConcept: CodeableConcept): this;
  addAction(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('action', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('action', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `action`. One is added when the list is empty. */
  getActionFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getAction()[0];
    return firstCodeableConcept === undefined ? this.addAction() : firstCodeableConcept;
  }

  /** Custodian of the consent (0..*) Never undefined; an empty list is created when absent. */
  getOrganization(): Reference[] {
    if (this.organization === undefined) {
      this.organization = [];
    }
    return this.organization;
  }

  setOrganization(organization: Reference[] | undefined): this {
    return this.setFieldValue('organization', organization);
  }

  hasOrganization(): boolean {
    return this.hasFieldValue('organization');
  }

  /** Appends a new, empty Reference to `organization` and returns it so it can be filled in. */
  addOrganization(): Reference;
  /** Appends the given Reference to `organization` and returns this object for chaining. */
  addOrganization(reference: Reference): this;
  addOrganization(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('organization', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('organization', createdReference);
    return createdReference;
  }

  /** The first Reference of `organization`. One is added when the list is empty. */
  getOrganizationFirstRep(): Reference {
    const firstReference = this.getOrganization()[0];
    return firstReference === undefined ? this.addOrganization() : firstReference;
  }

  /** Source from which this consent is taken (0..1) Whichever type of `source[x]` is set. */
  getSource(): Attachment | Identifier | Reference | undefined {
    return this.getChoiceValue<Attachment | Identifier | Reference>('source');
  }

  /** True when any type of `source[x]` is set. */
  hasSource(): boolean {
    return this.hasChoiceValue('source');
  }

  getSourceAttachment(): Attachment | undefined {
    return this.sourceAttachment;
  }

  /** Sets `source[x]` as Attachment and clears every other type of it. */
  setSourceAttachment(sourceAttachment: Attachment | undefined): this {
    return this.setFieldValue('sourceAttachment', sourceAttachment);
  }

  hasSourceAttachment(): boolean {
    return this.hasFieldValue('sourceAttachment');
  }

  getSourceIdentifier(): Identifier | undefined {
    return this.sourceIdentifier;
  }

  /** Sets `source[x]` as Identifier and clears every other type of it. */
  setSourceIdentifier(sourceIdentifier: Identifier | undefined): this {
    return this.setFieldValue('sourceIdentifier', sourceIdentifier);
  }

  hasSourceIdentifier(): boolean {
    return this.hasFieldValue('sourceIdentifier');
  }

  getSourceReference(): Reference | undefined {
    return this.sourceReference;
  }

  /** Sets `source[x]` as Reference and clears every other type of it. */
  setSourceReference(sourceReference: Reference | undefined): this {
    return this.setFieldValue('sourceReference', sourceReference);
  }

  hasSourceReference(): boolean {
    return this.hasFieldValue('sourceReference');
  }

  /** Policies covered by this consent (0..*) Never undefined; an empty list is created when absent. */
  getPolicy(): ConsentPolicy[] {
    if (this.policy === undefined) {
      this.policy = [];
    }
    return this.policy;
  }

  setPolicy(policy: ConsentPolicy[] | undefined): this {
    return this.setFieldValue('policy', policy);
  }

  hasPolicy(): boolean {
    return this.hasFieldValue('policy');
  }

  /** Appends a new, empty ConsentPolicy to `policy` and returns it so it can be filled in. */
  addPolicy(): ConsentPolicy;
  /** Appends the given ConsentPolicy to `policy` and returns this object for chaining. */
  addPolicy(consentPolicy: ConsentPolicy): this;
  addPolicy(consentPolicy?: ConsentPolicy): ConsentPolicy | this {
    if (consentPolicy !== undefined) {
      return this.addFieldValue('policy', consentPolicy);
    }
    const createdConsentPolicy = new ConsentPolicy();
    this.addFieldValue('policy', createdConsentPolicy);
    return createdConsentPolicy;
  }

  /** The first ConsentPolicy of `policy`. One is added when the list is empty. */
  getPolicyFirstRep(): ConsentPolicy {
    const firstConsentPolicy = this.getPolicy()[0];
    return firstConsentPolicy === undefined ? this.addPolicy() : firstConsentPolicy;
  }

  /** Policy that this consents to (0..1) */
  getPolicyRule(): string | undefined {
    return this.policyRule;
  }

  /** Sets `policyRule`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setPolicyRule(policyRule: string | undefined): this {
    return this.setFieldValue('policyRule', policyRule);
  }

  hasPolicyRule(): boolean {
    return this.hasFieldValue('policyRule');
  }

  /** The element carrying the id and extensions of `policyRule`. Created when absent. */
  getPolicyRuleElement(): Element {
    if (this._policyRule === undefined) {
      this._policyRule = new Element();
    }
    return this._policyRule;
  }

  setPolicyRuleElement(policyRuleElement: Element | undefined): this {
    this._policyRule = policyRuleElement;
    return this;
  }

  /** Security Labels that define affected resources (0..*) Never undefined; an empty list is created when absent. */
  getSecurityLabel(): Coding[] {
    if (this.securityLabel === undefined) {
      this.securityLabel = [];
    }
    return this.securityLabel;
  }

  setSecurityLabel(securityLabel: Coding[] | undefined): this {
    return this.setFieldValue('securityLabel', securityLabel);
  }

  hasSecurityLabel(): boolean {
    return this.hasFieldValue('securityLabel');
  }

  /** Appends a new, empty Coding to `securityLabel` and returns it so it can be filled in. */
  addSecurityLabel(): Coding;
  /** Appends the given Coding to `securityLabel` and returns this object for chaining. */
  addSecurityLabel(coding: Coding): this;
  addSecurityLabel(coding?: Coding): Coding | this {
    if (coding !== undefined) {
      return this.addFieldValue('securityLabel', coding);
    }
    const createdCoding = new Coding();
    this.addFieldValue('securityLabel', createdCoding);
    return createdCoding;
  }

  /** The first Coding of `securityLabel`. One is added when the list is empty. */
  getSecurityLabelFirstRep(): Coding {
    const firstCoding = this.getSecurityLabel()[0];
    return firstCoding === undefined ? this.addSecurityLabel() : firstCoding;
  }

  /** Context of activities for which the agreement is made (0..*) Never undefined; an empty list is created when absent. */
  getPurpose(): Coding[] {
    if (this.purpose === undefined) {
      this.purpose = [];
    }
    return this.purpose;
  }

  setPurpose(purpose: Coding[] | undefined): this {
    return this.setFieldValue('purpose', purpose);
  }

  hasPurpose(): boolean {
    return this.hasFieldValue('purpose');
  }

  /** Appends a new, empty Coding to `purpose` and returns it so it can be filled in. */
  addPurpose(): Coding;
  /** Appends the given Coding to `purpose` and returns this object for chaining. */
  addPurpose(coding: Coding): this;
  addPurpose(coding?: Coding): Coding | this {
    if (coding !== undefined) {
      return this.addFieldValue('purpose', coding);
    }
    const createdCoding = new Coding();
    this.addFieldValue('purpose', createdCoding);
    return createdCoding;
  }

  /** The first Coding of `purpose`. One is added when the list is empty. */
  getPurposeFirstRep(): Coding {
    const firstCoding = this.getPurpose()[0];
    return firstCoding === undefined ? this.addPurpose() : firstCoding;
  }

  /** Timeframe for data controlled by this consent (0..1) Created when absent. */
  getDataPeriod(): Period {
    if (this.dataPeriod === undefined) {
      this.dataPeriod = new Period();
    }
    return this.dataPeriod;
  }

  setDataPeriod(dataPeriod: Period | undefined): this {
    return this.setFieldValue('dataPeriod', dataPeriod);
  }

  hasDataPeriod(): boolean {
    return this.hasFieldValue('dataPeriod');
  }

  /** Data controlled by this consent (0..*) Never undefined; an empty list is created when absent. */
  getData(): ConsentData[] {
    if (this.data === undefined) {
      this.data = [];
    }
    return this.data;
  }

  setData(data: ConsentData[] | undefined): this {
    return this.setFieldValue('data', data);
  }

  hasData(): boolean {
    return this.hasFieldValue('data');
  }

  /** Appends a new, empty ConsentData to `data` and returns it so it can be filled in. */
  addData(): ConsentData;
  /** Appends the given ConsentData to `data` and returns this object for chaining. */
  addData(consentData: ConsentData): this;
  addData(consentData?: ConsentData): ConsentData | this {
    if (consentData !== undefined) {
      return this.addFieldValue('data', consentData);
    }
    const createdConsentData = new ConsentData();
    this.addFieldValue('data', createdConsentData);
    return createdConsentData;
  }

  /** The first ConsentData of `data`. One is added when the list is empty. */
  getDataFirstRep(): ConsentData {
    const firstConsentData = this.getData()[0];
    return firstConsentData === undefined ? this.addData() : firstConsentData;
  }

  /** Additional rule - addition or removal of permissions (0..*) Never undefined; an empty list is created when absent. */
  getExcept(): ConsentExcept[] {
    if (this.except === undefined) {
      this.except = [];
    }
    return this.except;
  }

  setExcept(except: ConsentExcept[] | undefined): this {
    return this.setFieldValue('except', except);
  }

  hasExcept(): boolean {
    return this.hasFieldValue('except');
  }

  /** Appends a new, empty ConsentExcept to `except` and returns it so it can be filled in. */
  addExcept(): ConsentExcept;
  /** Appends the given ConsentExcept to `except` and returns this object for chaining. */
  addExcept(consentExcept: ConsentExcept): this;
  addExcept(consentExcept?: ConsentExcept): ConsentExcept | this {
    if (consentExcept !== undefined) {
      return this.addFieldValue('except', consentExcept);
    }
    const createdConsentExcept = new ConsentExcept();
    this.addFieldValue('except', createdConsentExcept);
    return createdConsentExcept;
  }

  /** The first ConsentExcept of `except`. One is added when the list is empty. */
  getExceptFirstRep(): ConsentExcept {
    const firstConsentExcept = this.getExcept()[0];
    return firstConsentExcept === undefined ? this.addExcept() : firstConsentExcept;
  }
}

modelTypeRegistry.register('Consent', Consent, true);

/** True when the value is a Consent model instance. */
export function isConsent(candidate: unknown): candidate is Consent {
  return candidate instanceof Consent;
}

/**
 * Who|what controlled by this consent (or group, by role)
 */
export class ConsentActor extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'role',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'role', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'reference',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'reference',
          typeCode: 'Reference',
          targetResourceTypes: [
            'CareTeam',
            'Device',
            'Group',
            'Organization',
            'Patient',
            'Practitioner',
            'RelatedPerson',
          ],
        },
      ],
    },
  ];

  /** How the actor is involved (1..1) */
  role?: CodeableConcept;

  /** Resource for the actor (or group, by role) (1..1) */
  reference?: Reference;

  override fhirType(): string {
    return 'Consent.actor';
  }

  /** FHIR JSON for this ConsentActor, typed as the plain `ConsentActor` data type. */
  override toJSON(): plainTypes.ConsentActor {
    return this.serialize() as plainTypes.ConsentActor;
  }

  /** How the actor is involved (1..1) Created when absent. */
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

  /** Resource for the actor (or group, by role) (1..1) Created when absent. */
  getReference(): Reference {
    if (this.reference === undefined) {
      this.reference = new Reference();
    }
    return this.reference;
  }

  setReference(reference: Reference | undefined): this {
    return this.setFieldValue('reference', reference);
  }

  hasReference(): boolean {
    return this.hasFieldValue('reference');
  }
}

modelTypeRegistry.register('ConsentActor', ConsentActor, false);

/**
 * Policies covered by this consent
 */
export class ConsentPolicy extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'authority',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'authority', typeCode: 'uri' }],
    },
    {
      elementName: 'uri',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'uri', typeCode: 'uri' }],
    },
  ];

  /** Enforcement source for policy (0..1) */
  authority?: string;
  /** Id and extensions of the primitive `authority`. */
  _authority?: Element;

  /** Specific policy covered by this consent (0..1) */
  uri?: string;
  /** Id and extensions of the primitive `uri`. */
  _uri?: Element;

  override fhirType(): string {
    return 'Consent.policy';
  }

  /** FHIR JSON for this ConsentPolicy, typed as the plain `ConsentPolicy` data type. */
  override toJSON(): plainTypes.ConsentPolicy {
    return this.serialize() as plainTypes.ConsentPolicy;
  }

  /** Enforcement source for policy (0..1) */
  getAuthority(): string | undefined {
    return this.authority;
  }

  /** Sets `authority`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setAuthority(authority: string | undefined): this {
    return this.setFieldValue('authority', authority);
  }

  hasAuthority(): boolean {
    return this.hasFieldValue('authority');
  }

  /** The element carrying the id and extensions of `authority`. Created when absent. */
  getAuthorityElement(): Element {
    if (this._authority === undefined) {
      this._authority = new Element();
    }
    return this._authority;
  }

  setAuthorityElement(authorityElement: Element | undefined): this {
    this._authority = authorityElement;
    return this;
  }

  /** Specific policy covered by this consent (0..1) */
  getUri(): string | undefined {
    return this.uri;
  }

  /** Sets `uri`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setUri(uri: string | undefined): this {
    return this.setFieldValue('uri', uri);
  }

  hasUri(): boolean {
    return this.hasFieldValue('uri');
  }

  /** The element carrying the id and extensions of `uri`. Created when absent. */
  getUriElement(): Element {
    if (this._uri === undefined) {
      this._uri = new Element();
    }
    return this._uri;
  }

  setUriElement(uriElement: Element | undefined): this {
    this._uri = uriElement;
    return this;
  }
}

modelTypeRegistry.register('ConsentPolicy', ConsentPolicy, false);

/**
 * Data controlled by this consent
 */
export class ConsentData extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'meaning',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'meaning', typeCode: 'code', allowedCodes: valueSetCodes.ConsentDataMeaning },
      ],
    },
    {
      elementName: 'reference',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reference', typeCode: 'Reference' }],
    },
  ];

  /** instance | related | dependents | authoredby (1..1) */
  meaning?: valueSetCodes.ConsentDataMeaning;
  /** Id and extensions of the primitive `meaning`. */
  _meaning?: Element;

  /** The actual data reference (1..1) */
  reference?: Reference;

  override fhirType(): string {
    return 'Consent.data';
  }

  /** FHIR JSON for this ConsentData, typed as the plain `ConsentData` data type. */
  override toJSON(): plainTypes.ConsentData {
    return this.serialize() as plainTypes.ConsentData;
  }

  /** instance | related | dependents | authoredby (1..1) */
  getMeaning(): valueSetCodes.ConsentDataMeaning | undefined {
    return this.meaning;
  }

  /** Sets `meaning`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setMeaning(meaning: valueSetCodes.ConsentDataMeaning | undefined): this {
    return this.setFieldValue('meaning', meaning);
  }

  hasMeaning(): boolean {
    return this.hasFieldValue('meaning');
  }

  /** The element carrying the id and extensions of `meaning`. Created when absent. */
  getMeaningElement(): Element {
    if (this._meaning === undefined) {
      this._meaning = new Element();
    }
    return this._meaning;
  }

  setMeaningElement(meaningElement: Element | undefined): this {
    this._meaning = meaningElement;
    return this;
  }

  /** The actual data reference (1..1) Created when absent. */
  getReference(): Reference {
    if (this.reference === undefined) {
      this.reference = new Reference();
    }
    return this.reference;
  }

  setReference(reference: Reference | undefined): this {
    return this.setFieldValue('reference', reference);
  }

  hasReference(): boolean {
    return this.hasFieldValue('reference');
  }
}

modelTypeRegistry.register('ConsentData', ConsentData, false);

/**
 * Additional rule - addition or removal of permissions
 */
export class ConsentExcept extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.ConsentExceptType }],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
    {
      elementName: 'actor',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'actor', typeCode: 'ConsentExceptActor' }],
    },
    {
      elementName: 'action',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'action', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'securityLabel',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'securityLabel', typeCode: 'Coding' }],
    },
    {
      elementName: 'purpose',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'purpose', typeCode: 'Coding' }],
    },
    {
      elementName: 'class',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'class', typeCode: 'Coding' }],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'code', typeCode: 'Coding' }],
    },
    {
      elementName: 'dataPeriod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'dataPeriod', typeCode: 'Period' }],
    },
    {
      elementName: 'data',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'data', typeCode: 'ConsentExceptData' }],
    },
  ];

  /** deny | permit (1..1) */
  type?: valueSetCodes.ConsentExceptType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Timeframe for this exception (0..1) */
  period?: Period;

  /** Who|what controlled by this exception (or group, by role) (0..*) */
  actor?: ConsentExceptActor[];

  /** Actions controlled by this exception (0..*) */
  action?: CodeableConcept[];

  /** Security Labels that define affected resources (0..*) */
  securityLabel?: Coding[];

  /** Context of activities covered by this exception (0..*) */
  purpose?: Coding[];

  /** e.g. Resource Type, Profile, or CDA etc (0..*) */
  class?: Coding[];

  /** e.g. LOINC or SNOMED CT code, etc in the content (0..*) */
  code?: Coding[];

  /** Timeframe for data controlled by this exception (0..1) */
  dataPeriod?: Period;

  /** Data controlled by this exception (0..*) */
  data?: ConsentExceptData[];

  override fhirType(): string {
    return 'Consent.except';
  }

  /** FHIR JSON for this ConsentExcept, typed as the plain `ConsentExcept` data type. */
  override toJSON(): plainTypes.ConsentExcept {
    return this.serialize() as plainTypes.ConsentExcept;
  }

  /** deny | permit (1..1) */
  getType(): valueSetCodes.ConsentExceptType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.ConsentExceptType | undefined): this {
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

  /** Timeframe for this exception (0..1) Created when absent. */
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

  /** Who|what controlled by this exception (or group, by role) (0..*) Never undefined; an empty list is created when absent. */
  getActor(): ConsentExceptActor[] {
    if (this.actor === undefined) {
      this.actor = [];
    }
    return this.actor;
  }

  setActor(actor: ConsentExceptActor[] | undefined): this {
    return this.setFieldValue('actor', actor);
  }

  hasActor(): boolean {
    return this.hasFieldValue('actor');
  }

  /** Appends a new, empty ConsentExceptActor to `actor` and returns it so it can be filled in. */
  addActor(): ConsentExceptActor;
  /** Appends the given ConsentExceptActor to `actor` and returns this object for chaining. */
  addActor(consentExceptActor: ConsentExceptActor): this;
  addActor(consentExceptActor?: ConsentExceptActor): ConsentExceptActor | this {
    if (consentExceptActor !== undefined) {
      return this.addFieldValue('actor', consentExceptActor);
    }
    const createdConsentExceptActor = new ConsentExceptActor();
    this.addFieldValue('actor', createdConsentExceptActor);
    return createdConsentExceptActor;
  }

  /** The first ConsentExceptActor of `actor`. One is added when the list is empty. */
  getActorFirstRep(): ConsentExceptActor {
    const firstConsentExceptActor = this.getActor()[0];
    return firstConsentExceptActor === undefined ? this.addActor() : firstConsentExceptActor;
  }

  /** Actions controlled by this exception (0..*) Never undefined; an empty list is created when absent. */
  getAction(): CodeableConcept[] {
    if (this.action === undefined) {
      this.action = [];
    }
    return this.action;
  }

  setAction(action: CodeableConcept[] | undefined): this {
    return this.setFieldValue('action', action);
  }

  hasAction(): boolean {
    return this.hasFieldValue('action');
  }

  /** Appends a new, empty CodeableConcept to `action` and returns it so it can be filled in. */
  addAction(): CodeableConcept;
  /** Appends the given CodeableConcept to `action` and returns this object for chaining. */
  addAction(codeableConcept: CodeableConcept): this;
  addAction(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('action', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('action', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `action`. One is added when the list is empty. */
  getActionFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getAction()[0];
    return firstCodeableConcept === undefined ? this.addAction() : firstCodeableConcept;
  }

  /** Security Labels that define affected resources (0..*) Never undefined; an empty list is created when absent. */
  getSecurityLabel(): Coding[] {
    if (this.securityLabel === undefined) {
      this.securityLabel = [];
    }
    return this.securityLabel;
  }

  setSecurityLabel(securityLabel: Coding[] | undefined): this {
    return this.setFieldValue('securityLabel', securityLabel);
  }

  hasSecurityLabel(): boolean {
    return this.hasFieldValue('securityLabel');
  }

  /** Appends a new, empty Coding to `securityLabel` and returns it so it can be filled in. */
  addSecurityLabel(): Coding;
  /** Appends the given Coding to `securityLabel` and returns this object for chaining. */
  addSecurityLabel(coding: Coding): this;
  addSecurityLabel(coding?: Coding): Coding | this {
    if (coding !== undefined) {
      return this.addFieldValue('securityLabel', coding);
    }
    const createdCoding = new Coding();
    this.addFieldValue('securityLabel', createdCoding);
    return createdCoding;
  }

  /** The first Coding of `securityLabel`. One is added when the list is empty. */
  getSecurityLabelFirstRep(): Coding {
    const firstCoding = this.getSecurityLabel()[0];
    return firstCoding === undefined ? this.addSecurityLabel() : firstCoding;
  }

  /** Context of activities covered by this exception (0..*) Never undefined; an empty list is created when absent. */
  getPurpose(): Coding[] {
    if (this.purpose === undefined) {
      this.purpose = [];
    }
    return this.purpose;
  }

  setPurpose(purpose: Coding[] | undefined): this {
    return this.setFieldValue('purpose', purpose);
  }

  hasPurpose(): boolean {
    return this.hasFieldValue('purpose');
  }

  /** Appends a new, empty Coding to `purpose` and returns it so it can be filled in. */
  addPurpose(): Coding;
  /** Appends the given Coding to `purpose` and returns this object for chaining. */
  addPurpose(coding: Coding): this;
  addPurpose(coding?: Coding): Coding | this {
    if (coding !== undefined) {
      return this.addFieldValue('purpose', coding);
    }
    const createdCoding = new Coding();
    this.addFieldValue('purpose', createdCoding);
    return createdCoding;
  }

  /** The first Coding of `purpose`. One is added when the list is empty. */
  getPurposeFirstRep(): Coding {
    const firstCoding = this.getPurpose()[0];
    return firstCoding === undefined ? this.addPurpose() : firstCoding;
  }

  /** e.g. Resource Type, Profile, or CDA etc (0..*) Never undefined; an empty list is created when absent. */
  getClass(): Coding[] {
    if (this.class === undefined) {
      this.class = [];
    }
    return this.class;
  }

  setClass(classValue: Coding[] | undefined): this {
    return this.setFieldValue('class', classValue);
  }

  hasClass(): boolean {
    return this.hasFieldValue('class');
  }

  /** Appends a new, empty Coding to `class` and returns it so it can be filled in. */
  addClass(): Coding;
  /** Appends the given Coding to `class` and returns this object for chaining. */
  addClass(coding: Coding): this;
  addClass(coding?: Coding): Coding | this {
    if (coding !== undefined) {
      return this.addFieldValue('class', coding);
    }
    const createdCoding = new Coding();
    this.addFieldValue('class', createdCoding);
    return createdCoding;
  }

  /** The first Coding of `class`. One is added when the list is empty. */
  getClassFirstRep(): Coding {
    const firstCoding = this.getClass()[0];
    return firstCoding === undefined ? this.addClass() : firstCoding;
  }

  /** e.g. LOINC or SNOMED CT code, etc in the content (0..*) Never undefined; an empty list is created when absent. */
  getCode(): Coding[] {
    if (this.code === undefined) {
      this.code = [];
    }
    return this.code;
  }

  setCode(code: Coding[] | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** Appends a new, empty Coding to `code` and returns it so it can be filled in. */
  addCode(): Coding;
  /** Appends the given Coding to `code` and returns this object for chaining. */
  addCode(coding: Coding): this;
  addCode(coding?: Coding): Coding | this {
    if (coding !== undefined) {
      return this.addFieldValue('code', coding);
    }
    const createdCoding = new Coding();
    this.addFieldValue('code', createdCoding);
    return createdCoding;
  }

  /** The first Coding of `code`. One is added when the list is empty. */
  getCodeFirstRep(): Coding {
    const firstCoding = this.getCode()[0];
    return firstCoding === undefined ? this.addCode() : firstCoding;
  }

  /** Timeframe for data controlled by this exception (0..1) Created when absent. */
  getDataPeriod(): Period {
    if (this.dataPeriod === undefined) {
      this.dataPeriod = new Period();
    }
    return this.dataPeriod;
  }

  setDataPeriod(dataPeriod: Period | undefined): this {
    return this.setFieldValue('dataPeriod', dataPeriod);
  }

  hasDataPeriod(): boolean {
    return this.hasFieldValue('dataPeriod');
  }

  /** Data controlled by this exception (0..*) Never undefined; an empty list is created when absent. */
  getData(): ConsentExceptData[] {
    if (this.data === undefined) {
      this.data = [];
    }
    return this.data;
  }

  setData(data: ConsentExceptData[] | undefined): this {
    return this.setFieldValue('data', data);
  }

  hasData(): boolean {
    return this.hasFieldValue('data');
  }

  /** Appends a new, empty ConsentExceptData to `data` and returns it so it can be filled in. */
  addData(): ConsentExceptData;
  /** Appends the given ConsentExceptData to `data` and returns this object for chaining. */
  addData(consentExceptData: ConsentExceptData): this;
  addData(consentExceptData?: ConsentExceptData): ConsentExceptData | this {
    if (consentExceptData !== undefined) {
      return this.addFieldValue('data', consentExceptData);
    }
    const createdConsentExceptData = new ConsentExceptData();
    this.addFieldValue('data', createdConsentExceptData);
    return createdConsentExceptData;
  }

  /** The first ConsentExceptData of `data`. One is added when the list is empty. */
  getDataFirstRep(): ConsentExceptData {
    const firstConsentExceptData = this.getData()[0];
    return firstConsentExceptData === undefined ? this.addData() : firstConsentExceptData;
  }
}

modelTypeRegistry.register('ConsentExcept', ConsentExcept, false);

/**
 * Who|what controlled by this exception (or group, by role)
 */
export class ConsentExceptActor extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'role',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'role', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'reference',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'reference',
          typeCode: 'Reference',
          targetResourceTypes: [
            'CareTeam',
            'Device',
            'Group',
            'Organization',
            'Patient',
            'Practitioner',
            'RelatedPerson',
          ],
        },
      ],
    },
  ];

  /** How the actor is involved (1..1) */
  role?: CodeableConcept;

  /** Resource for the actor (or group, by role) (1..1) */
  reference?: Reference;

  override fhirType(): string {
    return 'Consent.except.actor';
  }

  /** FHIR JSON for this ConsentExceptActor, typed as the plain `ConsentActor1` data type. */
  override toJSON(): plainTypes.ConsentActor1 {
    return this.serialize() as plainTypes.ConsentActor1;
  }

  /** How the actor is involved (1..1) Created when absent. */
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

  /** Resource for the actor (or group, by role) (1..1) Created when absent. */
  getReference(): Reference {
    if (this.reference === undefined) {
      this.reference = new Reference();
    }
    return this.reference;
  }

  setReference(reference: Reference | undefined): this {
    return this.setFieldValue('reference', reference);
  }

  hasReference(): boolean {
    return this.hasFieldValue('reference');
  }
}

modelTypeRegistry.register('ConsentExceptActor', ConsentExceptActor, false);

/**
 * Data controlled by this exception
 */
export class ConsentExceptData extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'meaning',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'meaning', typeCode: 'code', allowedCodes: valueSetCodes.ConsentDataMeaning },
      ],
    },
    {
      elementName: 'reference',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reference', typeCode: 'Reference' }],
    },
  ];

  /** instance | related | dependents | authoredby (1..1) */
  meaning?: valueSetCodes.ConsentDataMeaning;
  /** Id and extensions of the primitive `meaning`. */
  _meaning?: Element;

  /** The actual data reference (1..1) */
  reference?: Reference;

  override fhirType(): string {
    return 'Consent.except.data';
  }

  /** FHIR JSON for this ConsentExceptData, typed as the plain `ConsentData1` data type. */
  override toJSON(): plainTypes.ConsentData1 {
    return this.serialize() as plainTypes.ConsentData1;
  }

  /** instance | related | dependents | authoredby (1..1) */
  getMeaning(): valueSetCodes.ConsentDataMeaning | undefined {
    return this.meaning;
  }

  /** Sets `meaning`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setMeaning(meaning: valueSetCodes.ConsentDataMeaning | undefined): this {
    return this.setFieldValue('meaning', meaning);
  }

  hasMeaning(): boolean {
    return this.hasFieldValue('meaning');
  }

  /** The element carrying the id and extensions of `meaning`. Created when absent. */
  getMeaningElement(): Element {
    if (this._meaning === undefined) {
      this._meaning = new Element();
    }
    return this._meaning;
  }

  setMeaningElement(meaningElement: Element | undefined): this {
    this._meaning = meaningElement;
    return this;
  }

  /** The actual data reference (1..1) Created when absent. */
  getReference(): Reference {
    if (this.reference === undefined) {
      this.reference = new Reference();
    }
    return this.reference;
  }

  setReference(reference: Reference | undefined): this {
    return this.setFieldValue('reference', reference);
  }

  hasReference(): boolean {
    return this.hasFieldValue('reference');
  }
}

modelTypeRegistry.register('ConsentExceptData', ConsentExceptData, false);
