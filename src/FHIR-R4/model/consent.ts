/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
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
 * A record of a healthcare consumer’s choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
 */
export class Consent extends DomainResource {
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
      types: [{ jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.ConsentState }],
    },
    {
      elementName: 'scope',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'scope', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'category',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'patient',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'patient', typeCode: 'Reference', targetResourceTypes: ['Patient'] }],
    },
    {
      elementName: 'dateTime',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'dateTime', typeCode: 'dateTime' }],
    },
    {
      elementName: 'performer',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'performer',
          typeCode: 'Reference',
          targetResourceTypes: [
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
      types: [{ jsonKey: 'policyRule', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'verification',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'verification', typeCode: 'ConsentVerification' }],
    },
    {
      elementName: 'provision',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'provision', typeCode: 'ConsentProvision' }],
    },
  ];

  readonly resourceType = 'Consent';

  /** Identifier for this record (external references) (0..*) */
  identifier?: Identifier[];

  /** draft | proposed | active | rejected | inactive | entered-in-error (1..1) */
  status?: valueSetCodes.ConsentState;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Which of the four areas this resource covers (extensible) (1..1) */
  scope?: CodeableConcept;

  /** Classification of the consent statement - for indexing/retrieval (1..*) */
  category?: CodeableConcept[];

  /** Who the consent applies to (0..1) */
  patient?: Reference;

  /** When this Consent was created or indexed (0..1) */
  dateTime?: string;
  /** Id and extensions of the primitive `dateTime`. */
  _dateTime?: Element;

  /** Who is agreeing to the policy and rules (0..*) */
  performer?: Reference[];

  /** Custodian of the consent (0..*) */
  organization?: Reference[];

  /** Source from which this consent is taken (0..1) */
  sourceAttachment?: Attachment;
  /** Source from which this consent is taken (0..1) */
  sourceReference?: Reference;

  /** Policies covered by this consent (0..*) */
  policy?: ConsentPolicy[];

  /** Regulation that this consents to (0..1) */
  policyRule?: CodeableConcept;

  /** Consent Verified by patient or family (0..*) */
  verification?: ConsentVerification[];

  /** Constraints to the base Consent.policyRule (0..1) */
  provision?: ConsentProvision;

  override fhirType(): string {
    return 'Consent';
  }

  /** FHIR JSON for this Consent, typed as the plain `Consent` data type. */
  override toJSON(): plainTypes.Consent {
    return this.serialize() as plainTypes.Consent;
  }

  /** Identifier for this record (external references) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Which of the four areas this resource covers (extensible) (1..1) Created when absent. */
  getScope(): CodeableConcept {
    if (this.scope === undefined) {
      this.scope = new CodeableConcept();
    }
    return this.scope;
  }

  setScope(scope: CodeableConcept | undefined): this {
    return this.setFieldValue('scope', scope);
  }

  hasScope(): boolean {
    return this.hasFieldValue('scope');
  }

  /** Classification of the consent statement - for indexing/retrieval (1..*) Never undefined; an empty list is created when absent. */
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

  /** Who the consent applies to (0..1) Created when absent. */
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

  /** Who is agreeing to the policy and rules (0..*) Never undefined; an empty list is created when absent. */
  getPerformer(): Reference[] {
    if (this.performer === undefined) {
      this.performer = [];
    }
    return this.performer;
  }

  setPerformer(performer: Reference[] | undefined): this {
    return this.setFieldValue('performer', performer);
  }

  hasPerformer(): boolean {
    return this.hasFieldValue('performer');
  }

  /** Appends a new, empty Reference to `performer` and returns it so it can be filled in. */
  addPerformer(): Reference;
  /** Appends the given Reference to `performer` and returns this object for chaining. */
  addPerformer(reference: Reference): this;
  addPerformer(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('performer', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('performer', createdReference);
    return createdReference;
  }

  /** The first Reference of `performer`. One is added when the list is empty. */
  getPerformerFirstRep(): Reference {
    const firstReference = this.getPerformer()[0];
    return firstReference === undefined ? this.addPerformer() : firstReference;
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
  getSource(): Attachment | Reference | undefined {
    return this.getChoiceValue<Attachment | Reference>('source');
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

  /** Regulation that this consents to (0..1) Created when absent. */
  getPolicyRule(): CodeableConcept {
    if (this.policyRule === undefined) {
      this.policyRule = new CodeableConcept();
    }
    return this.policyRule;
  }

  setPolicyRule(policyRule: CodeableConcept | undefined): this {
    return this.setFieldValue('policyRule', policyRule);
  }

  hasPolicyRule(): boolean {
    return this.hasFieldValue('policyRule');
  }

  /** Consent Verified by patient or family (0..*) Never undefined; an empty list is created when absent. */
  getVerification(): ConsentVerification[] {
    if (this.verification === undefined) {
      this.verification = [];
    }
    return this.verification;
  }

  setVerification(verification: ConsentVerification[] | undefined): this {
    return this.setFieldValue('verification', verification);
  }

  hasVerification(): boolean {
    return this.hasFieldValue('verification');
  }

  /** Appends a new, empty ConsentVerification to `verification` and returns it so it can be filled in. */
  addVerification(): ConsentVerification;
  /** Appends the given ConsentVerification to `verification` and returns this object for chaining. */
  addVerification(consentVerification: ConsentVerification): this;
  addVerification(consentVerification?: ConsentVerification): ConsentVerification | this {
    if (consentVerification !== undefined) {
      return this.addFieldValue('verification', consentVerification);
    }
    const createdConsentVerification = new ConsentVerification();
    this.addFieldValue('verification', createdConsentVerification);
    return createdConsentVerification;
  }

  /** The first ConsentVerification of `verification`. One is added when the list is empty. */
  getVerificationFirstRep(): ConsentVerification {
    const firstConsentVerification = this.getVerification()[0];
    return firstConsentVerification === undefined
      ? this.addVerification()
      : firstConsentVerification;
  }

  /** Constraints to the base Consent.policyRule (0..1) Created when absent. */
  getProvision(): ConsentProvision {
    if (this.provision === undefined) {
      this.provision = new ConsentProvision();
    }
    return this.provision;
  }

  setProvision(provision: ConsentProvision | undefined): this {
    return this.setFieldValue('provision', provision);
  }

  hasProvision(): boolean {
    return this.hasFieldValue('provision');
  }
}

modelTypeRegistry.register('Consent', Consent, true);

/** True when the value is a Consent model instance. */
export function isConsent(candidate: unknown): candidate is Consent {
  return candidate instanceof Consent;
}

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
 * Consent Verified by patient or family
 */
export class ConsentVerification extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'verified',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'verified', typeCode: 'boolean' }],
    },
    {
      elementName: 'verifiedWith',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'verifiedWith',
          typeCode: 'Reference',
          targetResourceTypes: ['Patient', 'RelatedPerson'],
        },
      ],
    },
    {
      elementName: 'verificationDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'verificationDate', typeCode: 'dateTime' }],
    },
  ];

  /** Has been verified (1..1) */
  verified?: boolean;
  /** Id and extensions of the primitive `verified`. */
  _verified?: Element;

  /** Person who verified (0..1) */
  verifiedWith?: Reference;

  /** When consent verified (0..1) */
  verificationDate?: string;
  /** Id and extensions of the primitive `verificationDate`. */
  _verificationDate?: Element;

  override fhirType(): string {
    return 'Consent.verification';
  }

  /** FHIR JSON for this ConsentVerification, typed as the plain `ConsentVerification` data type. */
  override toJSON(): plainTypes.ConsentVerification {
    return this.serialize() as plainTypes.ConsentVerification;
  }

  /** Has been verified (1..1) */
  getVerified(): boolean | undefined {
    return this.verified;
  }

  /** Sets `verified`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setVerified(verified: boolean | undefined): this {
    return this.setFieldValue('verified', verified);
  }

  hasVerified(): boolean {
    return this.hasFieldValue('verified');
  }

  /** The element carrying the id and extensions of `verified`. Created when absent. */
  getVerifiedElement(): Element {
    if (this._verified === undefined) {
      this._verified = new Element();
    }
    return this._verified;
  }

  setVerifiedElement(verifiedElement: Element | undefined): this {
    this._verified = verifiedElement;
    return this;
  }

  /** Person who verified (0..1) Created when absent. */
  getVerifiedWith(): Reference {
    if (this.verifiedWith === undefined) {
      this.verifiedWith = new Reference();
    }
    return this.verifiedWith;
  }

  setVerifiedWith(verifiedWith: Reference | undefined): this {
    return this.setFieldValue('verifiedWith', verifiedWith);
  }

  hasVerifiedWith(): boolean {
    return this.hasFieldValue('verifiedWith');
  }

  /** When consent verified (0..1) */
  getVerificationDate(): string | undefined {
    return this.verificationDate;
  }

  /** Sets `verificationDate`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setVerificationDate(verificationDate: string | undefined): this {
    return this.setFieldValue('verificationDate', verificationDate);
  }

  hasVerificationDate(): boolean {
    return this.hasFieldValue('verificationDate');
  }

  /** The element carrying the id and extensions of `verificationDate`. Created when absent. */
  getVerificationDateElement(): Element {
    if (this._verificationDate === undefined) {
      this._verificationDate = new Element();
    }
    return this._verificationDate;
  }

  setVerificationDateElement(verificationDateElement: Element | undefined): this {
    this._verificationDate = verificationDateElement;
    return this;
  }
}

modelTypeRegistry.register('ConsentVerification', ConsentVerification, false);

/**
 * Constraints to the base Consent.policyRule
 */
export class ConsentProvision extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.ConsentProvisionType },
      ],
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
      types: [{ jsonKey: 'actor', typeCode: 'ConsentProvisionActor' }],
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
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
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
      types: [{ jsonKey: 'data', typeCode: 'ConsentProvisionData' }],
    },
    {
      elementName: 'provision',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'provision', typeCode: 'ConsentProvision' }],
    },
  ];

  /** deny | permit (0..1) */
  type?: valueSetCodes.ConsentProvisionType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Timeframe for this rule (0..1) */
  period?: Period;

  /** Who|what controlled by this rule (or group, by role) (0..*) */
  actor?: ConsentProvisionActor[];

  /** Actions controlled by this rule (0..*) */
  action?: CodeableConcept[];

  /** Security Labels that define affected resources (0..*) */
  securityLabel?: Coding[];

  /** Context of activities covered by this rule (0..*) */
  purpose?: Coding[];

  /** e.g. Resource Type, Profile, CDA, etc. (0..*) */
  class?: Coding[];

  /** e.g. LOINC or SNOMED CT code, etc. in the content (0..*) */
  code?: CodeableConcept[];

  /** Timeframe for data controlled by this rule (0..1) */
  dataPeriod?: Period;

  /** Data controlled by this rule (0..*) */
  data?: ConsentProvisionData[];

  /** Nested Exception Rules (0..*) */
  provision?: ConsentProvision[];

  override fhirType(): string {
    return 'Consent.provision';
  }

  /** FHIR JSON for this ConsentProvision, typed as the plain `ConsentProvision` data type. */
  override toJSON(): plainTypes.ConsentProvision {
    return this.serialize() as plainTypes.ConsentProvision;
  }

  /** deny | permit (0..1) */
  getType(): valueSetCodes.ConsentProvisionType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.ConsentProvisionType | undefined): this {
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

  /** Timeframe for this rule (0..1) Created when absent. */
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

  /** Who|what controlled by this rule (or group, by role) (0..*) Never undefined; an empty list is created when absent. */
  getActor(): ConsentProvisionActor[] {
    if (this.actor === undefined) {
      this.actor = [];
    }
    return this.actor;
  }

  setActor(actor: ConsentProvisionActor[] | undefined): this {
    return this.setFieldValue('actor', actor);
  }

  hasActor(): boolean {
    return this.hasFieldValue('actor');
  }

  /** Appends a new, empty ConsentProvisionActor to `actor` and returns it so it can be filled in. */
  addActor(): ConsentProvisionActor;
  /** Appends the given ConsentProvisionActor to `actor` and returns this object for chaining. */
  addActor(consentProvisionActor: ConsentProvisionActor): this;
  addActor(consentProvisionActor?: ConsentProvisionActor): ConsentProvisionActor | this {
    if (consentProvisionActor !== undefined) {
      return this.addFieldValue('actor', consentProvisionActor);
    }
    const createdConsentProvisionActor = new ConsentProvisionActor();
    this.addFieldValue('actor', createdConsentProvisionActor);
    return createdConsentProvisionActor;
  }

  /** The first ConsentProvisionActor of `actor`. One is added when the list is empty. */
  getActorFirstRep(): ConsentProvisionActor {
    const firstConsentProvisionActor = this.getActor()[0];
    return firstConsentProvisionActor === undefined ? this.addActor() : firstConsentProvisionActor;
  }

  /** Actions controlled by this rule (0..*) Never undefined; an empty list is created when absent. */
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

  /** Context of activities covered by this rule (0..*) Never undefined; an empty list is created when absent. */
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

  /** e.g. Resource Type, Profile, CDA, etc. (0..*) Never undefined; an empty list is created when absent. */
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

  /** e.g. LOINC or SNOMED CT code, etc. in the content (0..*) Never undefined; an empty list is created when absent. */
  getCode(): CodeableConcept[] {
    if (this.code === undefined) {
      this.code = [];
    }
    return this.code;
  }

  setCode(code: CodeableConcept[] | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** Appends a new, empty CodeableConcept to `code` and returns it so it can be filled in. */
  addCode(): CodeableConcept;
  /** Appends the given CodeableConcept to `code` and returns this object for chaining. */
  addCode(codeableConcept: CodeableConcept): this;
  addCode(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('code', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('code', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `code`. One is added when the list is empty. */
  getCodeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getCode()[0];
    return firstCodeableConcept === undefined ? this.addCode() : firstCodeableConcept;
  }

  /** Timeframe for data controlled by this rule (0..1) Created when absent. */
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

  /** Data controlled by this rule (0..*) Never undefined; an empty list is created when absent. */
  getData(): ConsentProvisionData[] {
    if (this.data === undefined) {
      this.data = [];
    }
    return this.data;
  }

  setData(data: ConsentProvisionData[] | undefined): this {
    return this.setFieldValue('data', data);
  }

  hasData(): boolean {
    return this.hasFieldValue('data');
  }

  /** Appends a new, empty ConsentProvisionData to `data` and returns it so it can be filled in. */
  addData(): ConsentProvisionData;
  /** Appends the given ConsentProvisionData to `data` and returns this object for chaining. */
  addData(consentProvisionData: ConsentProvisionData): this;
  addData(consentProvisionData?: ConsentProvisionData): ConsentProvisionData | this {
    if (consentProvisionData !== undefined) {
      return this.addFieldValue('data', consentProvisionData);
    }
    const createdConsentProvisionData = new ConsentProvisionData();
    this.addFieldValue('data', createdConsentProvisionData);
    return createdConsentProvisionData;
  }

  /** The first ConsentProvisionData of `data`. One is added when the list is empty. */
  getDataFirstRep(): ConsentProvisionData {
    const firstConsentProvisionData = this.getData()[0];
    return firstConsentProvisionData === undefined ? this.addData() : firstConsentProvisionData;
  }

  /** Nested Exception Rules (0..*) Never undefined; an empty list is created when absent. */
  getProvision(): ConsentProvision[] {
    if (this.provision === undefined) {
      this.provision = [];
    }
    return this.provision;
  }

  setProvision(provision: ConsentProvision[] | undefined): this {
    return this.setFieldValue('provision', provision);
  }

  hasProvision(): boolean {
    return this.hasFieldValue('provision');
  }

  /** Appends a new, empty ConsentProvision to `provision` and returns it so it can be filled in. */
  addProvision(): ConsentProvision;
  /** Appends the given ConsentProvision to `provision` and returns this object for chaining. */
  addProvision(consentProvision: ConsentProvision): this;
  addProvision(consentProvision?: ConsentProvision): ConsentProvision | this {
    if (consentProvision !== undefined) {
      return this.addFieldValue('provision', consentProvision);
    }
    const createdConsentProvision = new ConsentProvision();
    this.addFieldValue('provision', createdConsentProvision);
    return createdConsentProvision;
  }

  /** The first ConsentProvision of `provision`. One is added when the list is empty. */
  getProvisionFirstRep(): ConsentProvision {
    const firstConsentProvision = this.getProvision()[0];
    return firstConsentProvision === undefined ? this.addProvision() : firstConsentProvision;
  }
}

modelTypeRegistry.register('ConsentProvision', ConsentProvision, false);

/**
 * Who|what controlled by this rule (or group, by role)
 */
export class ConsentProvisionActor extends BackboneElement {
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
            'PractitionerRole',
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
    return 'Consent.provision.actor';
  }

  /** FHIR JSON for this ConsentProvisionActor, typed as the plain `ConsentActor` data type. */
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

modelTypeRegistry.register('ConsentProvisionActor', ConsentProvisionActor, false);

/**
 * Data controlled by this rule
 */
export class ConsentProvisionData extends BackboneElement {
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
    return 'Consent.provision.data';
  }

  /** FHIR JSON for this ConsentProvisionData, typed as the plain `ConsentData` data type. */
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

modelTypeRegistry.register('ConsentProvisionData', ConsentProvisionData, false);
