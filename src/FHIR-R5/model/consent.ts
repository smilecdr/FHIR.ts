/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { Attachment } from './attachment';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { Coding } from './coding';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Expression } from './expression';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';

/**
 * A record of a healthcare consumer’s choices or choices made on their behalf by a third party, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
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
      elementName: 'category',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'subject',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'subject',
          typeCode: 'Reference',
          targetResourceTypes: ['Group', 'Patient', 'Practitioner'],
        },
      ],
    },
    {
      elementName: 'date',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'date', typeCode: 'date' }],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
    {
      elementName: 'grantor',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'grantor',
          typeCode: 'Reference',
          targetResourceTypes: [
            'CareTeam',
            'HealthcareService',
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
      elementName: 'grantee',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'grantee',
          typeCode: 'Reference',
          targetResourceTypes: [
            'CareTeam',
            'HealthcareService',
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
      elementName: 'manager',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'manager',
          typeCode: 'Reference',
          targetResourceTypes: ['HealthcareService', 'Organization', 'Patient', 'Practitioner'],
        },
      ],
    },
    {
      elementName: 'controller',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'controller',
          typeCode: 'Reference',
          targetResourceTypes: ['HealthcareService', 'Organization', 'Patient', 'Practitioner'],
        },
      ],
    },
    {
      elementName: 'sourceAttachment',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'sourceAttachment', typeCode: 'Attachment' }],
    },
    {
      elementName: 'sourceReference',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
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
      elementName: 'regulatoryBasis',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'regulatoryBasis', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'policyBasis',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'policyBasis', typeCode: 'ConsentPolicyBasis' }],
    },
    {
      elementName: 'policyText',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'policyText',
          typeCode: 'Reference',
          targetResourceTypes: ['DocumentReference'],
        },
      ],
    },
    {
      elementName: 'verification',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'verification', typeCode: 'ConsentVerification' }],
    },
    {
      elementName: 'decision',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'decision', typeCode: 'code', allowedCodes: valueSetCodes.ConsentProvisionType },
      ],
    },
    {
      elementName: 'provision',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'provision', typeCode: 'ConsentProvision' }],
    },
  ];

  readonly resourceType = 'Consent';

  /** Identifier for this record (external references) (0..*) */
  identifier?: Identifier[];

  /** draft | active | inactive | not-done | entered-in-error | unknown (1..1) */
  status?: valueSetCodes.ConsentState;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Classification of the consent statement - for indexing/retrieval (0..*) */
  category?: CodeableConcept[];

  /** Who the consent applies to (0..1) */
  subject?: Reference;

  /** Fully executed date of the consent (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Effective period for this Consent (0..1) */
  period?: Period;

  /** Who is granting rights according to the policy and rules (0..*) */
  grantor?: Reference[];

  /** Who is agreeing to the policy and rules (0..*) */
  grantee?: Reference[];

  /** Consent workflow management (0..*) */
  manager?: Reference[];

  /** Consent Enforcer (0..*) */
  controller?: Reference[];

  /** Source from which this consent is taken (0..*) */
  sourceAttachment?: Attachment[];

  /** Source from which this consent is taken (0..*) */
  sourceReference?: Reference[];

  /** Regulations establishing base Consent (0..*) */
  regulatoryBasis?: CodeableConcept[];

  /** Computable version of the backing policy (0..1) */
  policyBasis?: ConsentPolicyBasis;

  /** Human Readable Policy (0..*) */
  policyText?: Reference[];

  /** Consent Verified by patient or family (0..*) */
  verification?: ConsentVerification[];

  /** deny | permit (0..1) */
  decision?: valueSetCodes.ConsentProvisionType;
  /** Id and extensions of the primitive `decision`. */
  _decision?: Element;

  /** Constraints to the base Consent.policyRule/Consent.policy (0..*) */
  provision?: ConsentProvision[];

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

  /** draft | active | inactive | not-done | entered-in-error | unknown (1..1) */
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

  /** Who the consent applies to (0..1) Created when absent. */
  getSubject(): Reference {
    if (this.subject === undefined) {
      this.subject = new Reference();
    }
    return this.subject;
  }

  setSubject(subject: Reference | undefined): this {
    return this.setFieldValue('subject', subject);
  }

  hasSubject(): boolean {
    return this.hasFieldValue('subject');
  }

  /** Fully executed date of the consent (0..1) */
  getDate(): string | undefined {
    return this.date;
  }

  /** Sets `date`. Throws a FhirModelError when the value is not a valid FHIR date. */
  setDate(date: string | undefined): this {
    return this.setFieldValue('date', date);
  }

  hasDate(): boolean {
    return this.hasFieldValue('date');
  }

  /** The element carrying the id and extensions of `date`. Created when absent. */
  getDateElement(): Element {
    if (this._date === undefined) {
      this._date = new Element();
    }
    return this._date;
  }

  setDateElement(dateElement: Element | undefined): this {
    this._date = dateElement;
    return this;
  }

  /** Effective period for this Consent (0..1) Created when absent. */
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

  /** Who is granting rights according to the policy and rules (0..*) Never undefined; an empty list is created when absent. */
  getGrantor(): Reference[] {
    if (this.grantor === undefined) {
      this.grantor = [];
    }
    return this.grantor;
  }

  setGrantor(grantor: Reference[] | undefined): this {
    return this.setFieldValue('grantor', grantor);
  }

  hasGrantor(): boolean {
    return this.hasFieldValue('grantor');
  }

  /** Appends a new, empty Reference to `grantor` and returns it so it can be filled in. */
  addGrantor(): Reference;
  /** Appends the given Reference to `grantor` and returns this object for chaining. */
  addGrantor(reference: Reference): this;
  addGrantor(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('grantor', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('grantor', createdReference);
    return createdReference;
  }

  /** The first Reference of `grantor`. One is added when the list is empty. */
  getGrantorFirstRep(): Reference {
    const firstReference = this.getGrantor()[0];
    return firstReference === undefined ? this.addGrantor() : firstReference;
  }

  /** Who is agreeing to the policy and rules (0..*) Never undefined; an empty list is created when absent. */
  getGrantee(): Reference[] {
    if (this.grantee === undefined) {
      this.grantee = [];
    }
    return this.grantee;
  }

  setGrantee(grantee: Reference[] | undefined): this {
    return this.setFieldValue('grantee', grantee);
  }

  hasGrantee(): boolean {
    return this.hasFieldValue('grantee');
  }

  /** Appends a new, empty Reference to `grantee` and returns it so it can be filled in. */
  addGrantee(): Reference;
  /** Appends the given Reference to `grantee` and returns this object for chaining. */
  addGrantee(reference: Reference): this;
  addGrantee(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('grantee', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('grantee', createdReference);
    return createdReference;
  }

  /** The first Reference of `grantee`. One is added when the list is empty. */
  getGranteeFirstRep(): Reference {
    const firstReference = this.getGrantee()[0];
    return firstReference === undefined ? this.addGrantee() : firstReference;
  }

  /** Consent workflow management (0..*) Never undefined; an empty list is created when absent. */
  getManager(): Reference[] {
    if (this.manager === undefined) {
      this.manager = [];
    }
    return this.manager;
  }

  setManager(manager: Reference[] | undefined): this {
    return this.setFieldValue('manager', manager);
  }

  hasManager(): boolean {
    return this.hasFieldValue('manager');
  }

  /** Appends a new, empty Reference to `manager` and returns it so it can be filled in. */
  addManager(): Reference;
  /** Appends the given Reference to `manager` and returns this object for chaining. */
  addManager(reference: Reference): this;
  addManager(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('manager', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('manager', createdReference);
    return createdReference;
  }

  /** The first Reference of `manager`. One is added when the list is empty. */
  getManagerFirstRep(): Reference {
    const firstReference = this.getManager()[0];
    return firstReference === undefined ? this.addManager() : firstReference;
  }

  /** Consent Enforcer (0..*) Never undefined; an empty list is created when absent. */
  getController(): Reference[] {
    if (this.controller === undefined) {
      this.controller = [];
    }
    return this.controller;
  }

  setController(controller: Reference[] | undefined): this {
    return this.setFieldValue('controller', controller);
  }

  hasController(): boolean {
    return this.hasFieldValue('controller');
  }

  /** Appends a new, empty Reference to `controller` and returns it so it can be filled in. */
  addController(): Reference;
  /** Appends the given Reference to `controller` and returns this object for chaining. */
  addController(reference: Reference): this;
  addController(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('controller', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('controller', createdReference);
    return createdReference;
  }

  /** The first Reference of `controller`. One is added when the list is empty. */
  getControllerFirstRep(): Reference {
    const firstReference = this.getController()[0];
    return firstReference === undefined ? this.addController() : firstReference;
  }

  /** Source from which this consent is taken (0..*) Never undefined; an empty list is created when absent. */
  getSourceAttachment(): Attachment[] {
    if (this.sourceAttachment === undefined) {
      this.sourceAttachment = [];
    }
    return this.sourceAttachment;
  }

  setSourceAttachment(sourceAttachment: Attachment[] | undefined): this {
    return this.setFieldValue('sourceAttachment', sourceAttachment);
  }

  hasSourceAttachment(): boolean {
    return this.hasFieldValue('sourceAttachment');
  }

  /** Appends a new, empty Attachment to `sourceAttachment` and returns it so it can be filled in. */
  addSourceAttachment(): Attachment;
  /** Appends the given Attachment to `sourceAttachment` and returns this object for chaining. */
  addSourceAttachment(attachment: Attachment): this;
  addSourceAttachment(attachment?: Attachment): Attachment | this {
    if (attachment !== undefined) {
      return this.addFieldValue('sourceAttachment', attachment);
    }
    const createdAttachment = new Attachment();
    this.addFieldValue('sourceAttachment', createdAttachment);
    return createdAttachment;
  }

  /** The first Attachment of `sourceAttachment`. One is added when the list is empty. */
  getSourceAttachmentFirstRep(): Attachment {
    const firstAttachment = this.getSourceAttachment()[0];
    return firstAttachment === undefined ? this.addSourceAttachment() : firstAttachment;
  }

  /** Source from which this consent is taken (0..*) Never undefined; an empty list is created when absent. */
  getSourceReference(): Reference[] {
    if (this.sourceReference === undefined) {
      this.sourceReference = [];
    }
    return this.sourceReference;
  }

  setSourceReference(sourceReference: Reference[] | undefined): this {
    return this.setFieldValue('sourceReference', sourceReference);
  }

  hasSourceReference(): boolean {
    return this.hasFieldValue('sourceReference');
  }

  /** Appends a new, empty Reference to `sourceReference` and returns it so it can be filled in. */
  addSourceReference(): Reference;
  /** Appends the given Reference to `sourceReference` and returns this object for chaining. */
  addSourceReference(reference: Reference): this;
  addSourceReference(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('sourceReference', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('sourceReference', createdReference);
    return createdReference;
  }

  /** The first Reference of `sourceReference`. One is added when the list is empty. */
  getSourceReferenceFirstRep(): Reference {
    const firstReference = this.getSourceReference()[0];
    return firstReference === undefined ? this.addSourceReference() : firstReference;
  }

  /** Regulations establishing base Consent (0..*) Never undefined; an empty list is created when absent. */
  getRegulatoryBasis(): CodeableConcept[] {
    if (this.regulatoryBasis === undefined) {
      this.regulatoryBasis = [];
    }
    return this.regulatoryBasis;
  }

  setRegulatoryBasis(regulatoryBasis: CodeableConcept[] | undefined): this {
    return this.setFieldValue('regulatoryBasis', regulatoryBasis);
  }

  hasRegulatoryBasis(): boolean {
    return this.hasFieldValue('regulatoryBasis');
  }

  /** Appends a new, empty CodeableConcept to `regulatoryBasis` and returns it so it can be filled in. */
  addRegulatoryBasis(): CodeableConcept;
  /** Appends the given CodeableConcept to `regulatoryBasis` and returns this object for chaining. */
  addRegulatoryBasis(codeableConcept: CodeableConcept): this;
  addRegulatoryBasis(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('regulatoryBasis', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('regulatoryBasis', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `regulatoryBasis`. One is added when the list is empty. */
  getRegulatoryBasisFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getRegulatoryBasis()[0];
    return firstCodeableConcept === undefined ? this.addRegulatoryBasis() : firstCodeableConcept;
  }

  /** Computable version of the backing policy (0..1) Created when absent. */
  getPolicyBasis(): ConsentPolicyBasis {
    if (this.policyBasis === undefined) {
      this.policyBasis = new ConsentPolicyBasis();
    }
    return this.policyBasis;
  }

  setPolicyBasis(policyBasis: ConsentPolicyBasis | undefined): this {
    return this.setFieldValue('policyBasis', policyBasis);
  }

  hasPolicyBasis(): boolean {
    return this.hasFieldValue('policyBasis');
  }

  /** Human Readable Policy (0..*) Never undefined; an empty list is created when absent. */
  getPolicyText(): Reference[] {
    if (this.policyText === undefined) {
      this.policyText = [];
    }
    return this.policyText;
  }

  setPolicyText(policyText: Reference[] | undefined): this {
    return this.setFieldValue('policyText', policyText);
  }

  hasPolicyText(): boolean {
    return this.hasFieldValue('policyText');
  }

  /** Appends a new, empty Reference to `policyText` and returns it so it can be filled in. */
  addPolicyText(): Reference;
  /** Appends the given Reference to `policyText` and returns this object for chaining. */
  addPolicyText(reference: Reference): this;
  addPolicyText(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('policyText', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('policyText', createdReference);
    return createdReference;
  }

  /** The first Reference of `policyText`. One is added when the list is empty. */
  getPolicyTextFirstRep(): Reference {
    const firstReference = this.getPolicyText()[0];
    return firstReference === undefined ? this.addPolicyText() : firstReference;
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

  /** deny | permit (0..1) */
  getDecision(): valueSetCodes.ConsentProvisionType | undefined {
    return this.decision;
  }

  /** Sets `decision`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setDecision(decision: valueSetCodes.ConsentProvisionType | undefined): this {
    return this.setFieldValue('decision', decision);
  }

  hasDecision(): boolean {
    return this.hasFieldValue('decision');
  }

  /** The element carrying the id and extensions of `decision`. Created when absent. */
  getDecisionElement(): Element {
    if (this._decision === undefined) {
      this._decision = new Element();
    }
    return this._decision;
  }

  setDecisionElement(decisionElement: Element | undefined): this {
    this._decision = decisionElement;
    return this;
  }

  /** Constraints to the base Consent.policyRule/Consent.policy (0..*) Never undefined; an empty list is created when absent. */
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

modelTypeRegistry.register('Consent', Consent, true);

/** True when the value is a Consent model instance. */
export function isConsent(candidate: unknown): candidate is Consent {
  return candidate instanceof Consent;
}

/**
 * Computable version of the backing policy
 */
export class ConsentPolicyBasis extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'reference',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reference', typeCode: 'Reference' }],
    },
    {
      elementName: 'url',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'url', typeCode: 'url' }],
    },
  ];

  /** Reference backing policy resource (0..1) */
  reference?: Reference;

  /** URL to a computable backing policy (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  override fhirType(): string {
    return 'Consent.policyBasis';
  }

  /** FHIR JSON for this ConsentPolicyBasis, typed as the plain `ConsentPolicyBasis` data type. */
  override toJSON(): plainTypes.ConsentPolicyBasis {
    return this.serialize() as plainTypes.ConsentPolicyBasis;
  }

  /** Reference backing policy resource (0..1) Created when absent. */
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

  /** URL to a computable backing policy (0..1) */
  getUrl(): string | undefined {
    return this.url;
  }

  /** Sets `url`. Throws a FhirModelError when the value is not a valid FHIR url. */
  setUrl(url: string | undefined): this {
    return this.setFieldValue('url', url);
  }

  hasUrl(): boolean {
    return this.hasFieldValue('url');
  }

  /** The element carrying the id and extensions of `url`. Created when absent. */
  getUrlElement(): Element {
    if (this._url === undefined) {
      this._url = new Element();
    }
    return this._url;
  }

  setUrlElement(urlElement: Element | undefined): this {
    this._url = urlElement;
    return this;
  }
}

modelTypeRegistry.register('ConsentPolicyBasis', ConsentPolicyBasis, false);

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
      elementName: 'verificationType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'verificationType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'verifiedBy',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'verifiedBy',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Practitioner', 'PractitionerRole'],
        },
      ],
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
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'verificationDate', typeCode: 'dateTime' }],
    },
  ];

  /** Has been verified (1..1) */
  verified?: boolean;
  /** Id and extensions of the primitive `verified`. */
  _verified?: Element;

  /** Business case of verification (0..1) */
  verificationType?: CodeableConcept;

  /** Person conducting verification (0..1) */
  verifiedBy?: Reference;

  /** Person who verified (0..1) */
  verifiedWith?: Reference;

  /** When consent verified (0..*) */
  verificationDate?: string[];
  /** Id and extensions of the primitive `verificationDate`. */
  _verificationDate?: (Element | null)[];

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

  /** Business case of verification (0..1) Created when absent. */
  getVerificationType(): CodeableConcept {
    if (this.verificationType === undefined) {
      this.verificationType = new CodeableConcept();
    }
    return this.verificationType;
  }

  setVerificationType(verificationType: CodeableConcept | undefined): this {
    return this.setFieldValue('verificationType', verificationType);
  }

  hasVerificationType(): boolean {
    return this.hasFieldValue('verificationType');
  }

  /** Person conducting verification (0..1) Created when absent. */
  getVerifiedBy(): Reference {
    if (this.verifiedBy === undefined) {
      this.verifiedBy = new Reference();
    }
    return this.verifiedBy;
  }

  setVerifiedBy(verifiedBy: Reference | undefined): this {
    return this.setFieldValue('verifiedBy', verifiedBy);
  }

  hasVerifiedBy(): boolean {
    return this.hasFieldValue('verifiedBy');
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

  /** When consent verified (0..*) Never undefined; an empty list is created when absent. */
  getVerificationDate(): string[] {
    if (this.verificationDate === undefined) {
      this.verificationDate = [];
    }
    return this.verificationDate;
  }

  setVerificationDate(verificationDate: string[] | undefined): this {
    return this.setFieldValue('verificationDate', verificationDate);
  }

  hasVerificationDate(): boolean {
    return this.hasFieldValue('verificationDate');
  }

  /** Appends one value to `verificationDate`. Throws a FhirModelError when it is not a valid FHIR dateTime. */
  addVerificationDate(verificationDate: string): this {
    return this.addFieldValue('verificationDate', verificationDate);
  }
}

modelTypeRegistry.register('ConsentVerification', ConsentVerification, false);

/**
 * Constraints to the base Consent.policyRule/Consent.policy
 */
export class ConsentProvision extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
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
      elementName: 'documentType',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'documentType', typeCode: 'Coding' }],
    },
    {
      elementName: 'resourceType',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'resourceType', typeCode: 'Coding' }],
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
      elementName: 'expression',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'expression', typeCode: 'Expression' }],
    },
    {
      elementName: 'provision',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'provision', typeCode: 'ConsentProvision' }],
    },
  ];

  /** Timeframe for this provision (0..1) */
  period?: Period;

  /** Who|what controlled by this provision (or group, by role) (0..*) */
  actor?: ConsentProvisionActor[];

  /** Actions controlled by this provision (0..*) */
  action?: CodeableConcept[];

  /** Security Labels that define affected resources (0..*) */
  securityLabel?: Coding[];

  /** Context of activities covered by this provision (0..*) */
  purpose?: Coding[];

  /** e.g. Resource Type, Profile, CDA, etc (0..*) */
  documentType?: Coding[];

  /** e.g. Resource Type, Profile, etc (0..*) */
  resourceType?: Coding[];

  /** e.g. LOINC or SNOMED CT code, etc. in the content (0..*) */
  code?: CodeableConcept[];

  /** Timeframe for data controlled by this provision (0..1) */
  dataPeriod?: Period;

  /** Data controlled by this provision (0..*) */
  data?: ConsentProvisionData[];

  /** A computable expression of the consent (0..1) */
  expression?: Expression;

  /** Nested Exception Provisions (0..*) */
  provision?: ConsentProvision[];

  override fhirType(): string {
    return 'Consent.provision';
  }

  /** FHIR JSON for this ConsentProvision, typed as the plain `ConsentProvision` data type. */
  override toJSON(): plainTypes.ConsentProvision {
    return this.serialize() as plainTypes.ConsentProvision;
  }

  /** Timeframe for this provision (0..1) Created when absent. */
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

  /** Who|what controlled by this provision (or group, by role) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Actions controlled by this provision (0..*) Never undefined; an empty list is created when absent. */
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

  /** Context of activities covered by this provision (0..*) Never undefined; an empty list is created when absent. */
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

  /** e.g. Resource Type, Profile, CDA, etc (0..*) Never undefined; an empty list is created when absent. */
  getDocumentType(): Coding[] {
    if (this.documentType === undefined) {
      this.documentType = [];
    }
    return this.documentType;
  }

  setDocumentType(documentType: Coding[] | undefined): this {
    return this.setFieldValue('documentType', documentType);
  }

  hasDocumentType(): boolean {
    return this.hasFieldValue('documentType');
  }

  /** Appends a new, empty Coding to `documentType` and returns it so it can be filled in. */
  addDocumentType(): Coding;
  /** Appends the given Coding to `documentType` and returns this object for chaining. */
  addDocumentType(coding: Coding): this;
  addDocumentType(coding?: Coding): Coding | this {
    if (coding !== undefined) {
      return this.addFieldValue('documentType', coding);
    }
    const createdCoding = new Coding();
    this.addFieldValue('documentType', createdCoding);
    return createdCoding;
  }

  /** The first Coding of `documentType`. One is added when the list is empty. */
  getDocumentTypeFirstRep(): Coding {
    const firstCoding = this.getDocumentType()[0];
    return firstCoding === undefined ? this.addDocumentType() : firstCoding;
  }

  /** e.g. Resource Type, Profile, etc (0..*) Never undefined; an empty list is created when absent. */
  getResourceType(): Coding[] {
    if (this.resourceType === undefined) {
      this.resourceType = [];
    }
    return this.resourceType;
  }

  setResourceType(resourceType: Coding[] | undefined): this {
    return this.setFieldValue('resourceType', resourceType);
  }

  hasResourceType(): boolean {
    return this.hasFieldValue('resourceType');
  }

  /** Appends a new, empty Coding to `resourceType` and returns it so it can be filled in. */
  addResourceType(): Coding;
  /** Appends the given Coding to `resourceType` and returns this object for chaining. */
  addResourceType(coding: Coding): this;
  addResourceType(coding?: Coding): Coding | this {
    if (coding !== undefined) {
      return this.addFieldValue('resourceType', coding);
    }
    const createdCoding = new Coding();
    this.addFieldValue('resourceType', createdCoding);
    return createdCoding;
  }

  /** The first Coding of `resourceType`. One is added when the list is empty. */
  getResourceTypeFirstRep(): Coding {
    const firstCoding = this.getResourceType()[0];
    return firstCoding === undefined ? this.addResourceType() : firstCoding;
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

  /** Timeframe for data controlled by this provision (0..1) Created when absent. */
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

  /** Data controlled by this provision (0..*) Never undefined; an empty list is created when absent. */
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

  /** A computable expression of the consent (0..1) Created when absent. */
  getExpression(): Expression {
    if (this.expression === undefined) {
      this.expression = new Expression();
    }
    return this.expression;
  }

  setExpression(expression: Expression | undefined): this {
    return this.setFieldValue('expression', expression);
  }

  hasExpression(): boolean {
    return this.hasFieldValue('expression');
  }

  /** Nested Exception Provisions (0..*) Never undefined; an empty list is created when absent. */
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
 * Who|what controlled by this provision (or group, by role)
 */
export class ConsentProvisionActor extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'role',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'role', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'reference',
      minimum: 0,
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

  /** How the actor is involved (0..1) */
  role?: CodeableConcept;

  /** Resource for the actor (or group, by role) (0..1) */
  reference?: Reference;

  override fhirType(): string {
    return 'Consent.provision.actor';
  }

  /** FHIR JSON for this ConsentProvisionActor, typed as the plain `ConsentActor` data type. */
  override toJSON(): plainTypes.ConsentActor {
    return this.serialize() as plainTypes.ConsentActor;
  }

  /** How the actor is involved (0..1) Created when absent. */
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

  /** Resource for the actor (or group, by role) (0..1) Created when absent. */
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
 * Data controlled by this provision
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
