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
import { Money } from './money';
import { Period } from './period';
import { Quantity } from './quantity';
import { Reference } from './reference';
import { Signature } from './signature';

/**
 * Base StructureDefinition for Contract Resource
 */
export class Contract extends DomainResource {
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
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'status',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ContractResourceStatusCodes,
        },
      ],
    },
    {
      elementName: 'issued',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'issued', typeCode: 'dateTime' }],
    },
    {
      elementName: 'applies',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'applies', typeCode: 'Period' }],
    },
    {
      elementName: 'subject',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'subject', typeCode: 'Reference' }],
    },
    {
      elementName: 'topic',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'topic', typeCode: 'Reference' }],
    },
    {
      elementName: 'authority',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'authority', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
    {
      elementName: 'domain',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'domain', typeCode: 'Reference', targetResourceTypes: ['Location'] }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'subType',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'subType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'action',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'action', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'actionReason',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'actionReason', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'decisionType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'decisionType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'contentDerivative',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'contentDerivative', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'securityLabel',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'securityLabel', typeCode: 'Coding' }],
    },
    {
      elementName: 'agent',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'agent', typeCode: 'ContractAgent' }],
    },
    {
      elementName: 'signer',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'signer', typeCode: 'ContractSigner' }],
    },
    {
      elementName: 'valuedItem',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'valuedItem', typeCode: 'ContractValuedItem' }],
    },
    {
      elementName: 'term',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'term', typeCode: 'ContractTerm' }],
    },
    {
      elementName: 'binding',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'bindingAttachment', typeCode: 'Attachment' },
        {
          jsonKey: 'bindingReference',
          typeCode: 'Reference',
          targetResourceTypes: ['Composition', 'DocumentReference', 'QuestionnaireResponse'],
        },
      ],
    },
    {
      elementName: 'friendly',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'friendly', typeCode: 'ContractFriendly' }],
    },
    {
      elementName: 'legal',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'legal', typeCode: 'ContractLegal' }],
    },
    {
      elementName: 'rule',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'rule', typeCode: 'ContractRule' }],
    },
  ];

  readonly resourceType = 'Contract';

  /** Contract number (0..1) */
  identifier?: Identifier;

  /** amended | appended | cancelled | disputed | entered-in-error | executable | executed | negotiable | offered | policy | rejected | renewed | revoked | resolved | terminated (0..1) */
  status?: valueSetCodes.ContractResourceStatusCodes;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** When this Contract was issued (0..1) */
  issued?: string;
  /** Id and extensions of the primitive `issued`. */
  _issued?: Element;

  /** Effective time (0..1) */
  applies?: Period;

  /** Contract Target Entity (0..*) */
  subject?: Reference[];

  /** Context of the Contract (0..*) */
  topic?: Reference[];

  /** Authority under which this Contract has standing (0..*) */
  authority?: Reference[];

  /** Domain in which this Contract applies (0..*) */
  domain?: Reference[];

  /** Type or form (0..1) */
  type?: CodeableConcept;

  /** Subtype within the context of type (0..*) */
  subType?: CodeableConcept[];

  /** Action stipulated by this Contract (0..*) */
  action?: CodeableConcept[];

  /** Rationale for the stiplulated action (0..*) */
  actionReason?: CodeableConcept[];

  /** Decision by Grantor (0..1) */
  decisionType?: CodeableConcept;

  /** Content derived from the basal information (0..1) */
  contentDerivative?: CodeableConcept;

  /** Security Labels that define affected resources (0..*) */
  securityLabel?: Coding[];

  /** Entity being ascribed responsibility (0..*) */
  agent?: ContractAgent[];

  /** Contract Signatory (0..*) */
  signer?: ContractSigner[];

  /** Contract Valued Item List (0..*) */
  valuedItem?: ContractValuedItem[];

  /** Contract Term List (0..*) */
  term?: ContractTerm[];

  /** Binding Contract (0..1) */
  bindingAttachment?: Attachment;
  /** Binding Contract (0..1) */
  bindingReference?: Reference;

  /** Contract Friendly Language (0..*) */
  friendly?: ContractFriendly[];

  /** Contract Legal Language (0..*) */
  legal?: ContractLegal[];

  /** Computable Contract Language (0..*) */
  rule?: ContractRule[];

  override fhirType(): string {
    return 'Contract';
  }

  /** FHIR JSON for this Contract, typed as the plain `Contract` data type. */
  override toJSON(): plainTypes.Contract {
    return this.serialize() as plainTypes.Contract;
  }

  /** Contract number (0..1) Created when absent. */
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

  /** amended | appended | cancelled | disputed | entered-in-error | executable | executed | negotiable | offered | policy | rejected | renewed | revoked | resolved | terminated (0..1) */
  getStatus(): valueSetCodes.ContractResourceStatusCodes | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.ContractResourceStatusCodes | undefined): this {
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

  /** When this Contract was issued (0..1) */
  getIssued(): string | undefined {
    return this.issued;
  }

  /** Sets `issued`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setIssued(issued: string | undefined): this {
    return this.setFieldValue('issued', issued);
  }

  hasIssued(): boolean {
    return this.hasFieldValue('issued');
  }

  /** The element carrying the id and extensions of `issued`. Created when absent. */
  getIssuedElement(): Element {
    if (this._issued === undefined) {
      this._issued = new Element();
    }
    return this._issued;
  }

  setIssuedElement(issuedElement: Element | undefined): this {
    this._issued = issuedElement;
    return this;
  }

  /** Effective time (0..1) Created when absent. */
  getApplies(): Period {
    if (this.applies === undefined) {
      this.applies = new Period();
    }
    return this.applies;
  }

  setApplies(applies: Period | undefined): this {
    return this.setFieldValue('applies', applies);
  }

  hasApplies(): boolean {
    return this.hasFieldValue('applies');
  }

  /** Contract Target Entity (0..*) Never undefined; an empty list is created when absent. */
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

  /** Context of the Contract (0..*) Never undefined; an empty list is created when absent. */
  getTopic(): Reference[] {
    if (this.topic === undefined) {
      this.topic = [];
    }
    return this.topic;
  }

  setTopic(topic: Reference[] | undefined): this {
    return this.setFieldValue('topic', topic);
  }

  hasTopic(): boolean {
    return this.hasFieldValue('topic');
  }

  /** Appends a new, empty Reference to `topic` and returns it so it can be filled in. */
  addTopic(): Reference;
  /** Appends the given Reference to `topic` and returns this object for chaining. */
  addTopic(reference: Reference): this;
  addTopic(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('topic', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('topic', createdReference);
    return createdReference;
  }

  /** The first Reference of `topic`. One is added when the list is empty. */
  getTopicFirstRep(): Reference {
    const firstReference = this.getTopic()[0];
    return firstReference === undefined ? this.addTopic() : firstReference;
  }

  /** Authority under which this Contract has standing (0..*) Never undefined; an empty list is created when absent. */
  getAuthority(): Reference[] {
    if (this.authority === undefined) {
      this.authority = [];
    }
    return this.authority;
  }

  setAuthority(authority: Reference[] | undefined): this {
    return this.setFieldValue('authority', authority);
  }

  hasAuthority(): boolean {
    return this.hasFieldValue('authority');
  }

  /** Appends a new, empty Reference to `authority` and returns it so it can be filled in. */
  addAuthority(): Reference;
  /** Appends the given Reference to `authority` and returns this object for chaining. */
  addAuthority(reference: Reference): this;
  addAuthority(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('authority', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('authority', createdReference);
    return createdReference;
  }

  /** The first Reference of `authority`. One is added when the list is empty. */
  getAuthorityFirstRep(): Reference {
    const firstReference = this.getAuthority()[0];
    return firstReference === undefined ? this.addAuthority() : firstReference;
  }

  /** Domain in which this Contract applies (0..*) Never undefined; an empty list is created when absent. */
  getDomain(): Reference[] {
    if (this.domain === undefined) {
      this.domain = [];
    }
    return this.domain;
  }

  setDomain(domain: Reference[] | undefined): this {
    return this.setFieldValue('domain', domain);
  }

  hasDomain(): boolean {
    return this.hasFieldValue('domain');
  }

  /** Appends a new, empty Reference to `domain` and returns it so it can be filled in. */
  addDomain(): Reference;
  /** Appends the given Reference to `domain` and returns this object for chaining. */
  addDomain(reference: Reference): this;
  addDomain(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('domain', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('domain', createdReference);
    return createdReference;
  }

  /** The first Reference of `domain`. One is added when the list is empty. */
  getDomainFirstRep(): Reference {
    const firstReference = this.getDomain()[0];
    return firstReference === undefined ? this.addDomain() : firstReference;
  }

  /** Type or form (0..1) Created when absent. */
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

  /** Subtype within the context of type (0..*) Never undefined; an empty list is created when absent. */
  getSubType(): CodeableConcept[] {
    if (this.subType === undefined) {
      this.subType = [];
    }
    return this.subType;
  }

  setSubType(subType: CodeableConcept[] | undefined): this {
    return this.setFieldValue('subType', subType);
  }

  hasSubType(): boolean {
    return this.hasFieldValue('subType');
  }

  /** Appends a new, empty CodeableConcept to `subType` and returns it so it can be filled in. */
  addSubType(): CodeableConcept;
  /** Appends the given CodeableConcept to `subType` and returns this object for chaining. */
  addSubType(codeableConcept: CodeableConcept): this;
  addSubType(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('subType', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('subType', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `subType`. One is added when the list is empty. */
  getSubTypeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getSubType()[0];
    return firstCodeableConcept === undefined ? this.addSubType() : firstCodeableConcept;
  }

  /** Action stipulated by this Contract (0..*) Never undefined; an empty list is created when absent. */
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

  /** Rationale for the stiplulated action (0..*) Never undefined; an empty list is created when absent. */
  getActionReason(): CodeableConcept[] {
    if (this.actionReason === undefined) {
      this.actionReason = [];
    }
    return this.actionReason;
  }

  setActionReason(actionReason: CodeableConcept[] | undefined): this {
    return this.setFieldValue('actionReason', actionReason);
  }

  hasActionReason(): boolean {
    return this.hasFieldValue('actionReason');
  }

  /** Appends a new, empty CodeableConcept to `actionReason` and returns it so it can be filled in. */
  addActionReason(): CodeableConcept;
  /** Appends the given CodeableConcept to `actionReason` and returns this object for chaining. */
  addActionReason(codeableConcept: CodeableConcept): this;
  addActionReason(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('actionReason', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('actionReason', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `actionReason`. One is added when the list is empty. */
  getActionReasonFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getActionReason()[0];
    return firstCodeableConcept === undefined ? this.addActionReason() : firstCodeableConcept;
  }

  /** Decision by Grantor (0..1) Created when absent. */
  getDecisionType(): CodeableConcept {
    if (this.decisionType === undefined) {
      this.decisionType = new CodeableConcept();
    }
    return this.decisionType;
  }

  setDecisionType(decisionType: CodeableConcept | undefined): this {
    return this.setFieldValue('decisionType', decisionType);
  }

  hasDecisionType(): boolean {
    return this.hasFieldValue('decisionType');
  }

  /** Content derived from the basal information (0..1) Created when absent. */
  getContentDerivative(): CodeableConcept {
    if (this.contentDerivative === undefined) {
      this.contentDerivative = new CodeableConcept();
    }
    return this.contentDerivative;
  }

  setContentDerivative(contentDerivative: CodeableConcept | undefined): this {
    return this.setFieldValue('contentDerivative', contentDerivative);
  }

  hasContentDerivative(): boolean {
    return this.hasFieldValue('contentDerivative');
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

  /** Entity being ascribed responsibility (0..*) Never undefined; an empty list is created when absent. */
  getAgent(): ContractAgent[] {
    if (this.agent === undefined) {
      this.agent = [];
    }
    return this.agent;
  }

  setAgent(agent: ContractAgent[] | undefined): this {
    return this.setFieldValue('agent', agent);
  }

  hasAgent(): boolean {
    return this.hasFieldValue('agent');
  }

  /** Appends a new, empty ContractAgent to `agent` and returns it so it can be filled in. */
  addAgent(): ContractAgent;
  /** Appends the given ContractAgent to `agent` and returns this object for chaining. */
  addAgent(contractAgent: ContractAgent): this;
  addAgent(contractAgent?: ContractAgent): ContractAgent | this {
    if (contractAgent !== undefined) {
      return this.addFieldValue('agent', contractAgent);
    }
    const createdContractAgent = new ContractAgent();
    this.addFieldValue('agent', createdContractAgent);
    return createdContractAgent;
  }

  /** The first ContractAgent of `agent`. One is added when the list is empty. */
  getAgentFirstRep(): ContractAgent {
    const firstContractAgent = this.getAgent()[0];
    return firstContractAgent === undefined ? this.addAgent() : firstContractAgent;
  }

  /** Contract Signatory (0..*) Never undefined; an empty list is created when absent. */
  getSigner(): ContractSigner[] {
    if (this.signer === undefined) {
      this.signer = [];
    }
    return this.signer;
  }

  setSigner(signer: ContractSigner[] | undefined): this {
    return this.setFieldValue('signer', signer);
  }

  hasSigner(): boolean {
    return this.hasFieldValue('signer');
  }

  /** Appends a new, empty ContractSigner to `signer` and returns it so it can be filled in. */
  addSigner(): ContractSigner;
  /** Appends the given ContractSigner to `signer` and returns this object for chaining. */
  addSigner(contractSigner: ContractSigner): this;
  addSigner(contractSigner?: ContractSigner): ContractSigner | this {
    if (contractSigner !== undefined) {
      return this.addFieldValue('signer', contractSigner);
    }
    const createdContractSigner = new ContractSigner();
    this.addFieldValue('signer', createdContractSigner);
    return createdContractSigner;
  }

  /** The first ContractSigner of `signer`. One is added when the list is empty. */
  getSignerFirstRep(): ContractSigner {
    const firstContractSigner = this.getSigner()[0];
    return firstContractSigner === undefined ? this.addSigner() : firstContractSigner;
  }

  /** Contract Valued Item List (0..*) Never undefined; an empty list is created when absent. */
  getValuedItem(): ContractValuedItem[] {
    if (this.valuedItem === undefined) {
      this.valuedItem = [];
    }
    return this.valuedItem;
  }

  setValuedItem(valuedItem: ContractValuedItem[] | undefined): this {
    return this.setFieldValue('valuedItem', valuedItem);
  }

  hasValuedItem(): boolean {
    return this.hasFieldValue('valuedItem');
  }

  /** Appends a new, empty ContractValuedItem to `valuedItem` and returns it so it can be filled in. */
  addValuedItem(): ContractValuedItem;
  /** Appends the given ContractValuedItem to `valuedItem` and returns this object for chaining. */
  addValuedItem(contractValuedItem: ContractValuedItem): this;
  addValuedItem(contractValuedItem?: ContractValuedItem): ContractValuedItem | this {
    if (contractValuedItem !== undefined) {
      return this.addFieldValue('valuedItem', contractValuedItem);
    }
    const createdContractValuedItem = new ContractValuedItem();
    this.addFieldValue('valuedItem', createdContractValuedItem);
    return createdContractValuedItem;
  }

  /** The first ContractValuedItem of `valuedItem`. One is added when the list is empty. */
  getValuedItemFirstRep(): ContractValuedItem {
    const firstContractValuedItem = this.getValuedItem()[0];
    return firstContractValuedItem === undefined ? this.addValuedItem() : firstContractValuedItem;
  }

  /** Contract Term List (0..*) Never undefined; an empty list is created when absent. */
  getTerm(): ContractTerm[] {
    if (this.term === undefined) {
      this.term = [];
    }
    return this.term;
  }

  setTerm(term: ContractTerm[] | undefined): this {
    return this.setFieldValue('term', term);
  }

  hasTerm(): boolean {
    return this.hasFieldValue('term');
  }

  /** Appends a new, empty ContractTerm to `term` and returns it so it can be filled in. */
  addTerm(): ContractTerm;
  /** Appends the given ContractTerm to `term` and returns this object for chaining. */
  addTerm(contractTerm: ContractTerm): this;
  addTerm(contractTerm?: ContractTerm): ContractTerm | this {
    if (contractTerm !== undefined) {
      return this.addFieldValue('term', contractTerm);
    }
    const createdContractTerm = new ContractTerm();
    this.addFieldValue('term', createdContractTerm);
    return createdContractTerm;
  }

  /** The first ContractTerm of `term`. One is added when the list is empty. */
  getTermFirstRep(): ContractTerm {
    const firstContractTerm = this.getTerm()[0];
    return firstContractTerm === undefined ? this.addTerm() : firstContractTerm;
  }

  /** Binding Contract (0..1) Whichever type of `binding[x]` is set. */
  getBinding(): Attachment | Reference | undefined {
    return this.getChoiceValue<Attachment | Reference>('binding');
  }

  /** True when any type of `binding[x]` is set. */
  hasBinding(): boolean {
    return this.hasChoiceValue('binding');
  }

  getBindingAttachment(): Attachment | undefined {
    return this.bindingAttachment;
  }

  /** Sets `binding[x]` as Attachment and clears every other type of it. */
  setBindingAttachment(bindingAttachment: Attachment | undefined): this {
    return this.setFieldValue('bindingAttachment', bindingAttachment);
  }

  hasBindingAttachment(): boolean {
    return this.hasFieldValue('bindingAttachment');
  }

  getBindingReference(): Reference | undefined {
    return this.bindingReference;
  }

  /** Sets `binding[x]` as Reference and clears every other type of it. */
  setBindingReference(bindingReference: Reference | undefined): this {
    return this.setFieldValue('bindingReference', bindingReference);
  }

  hasBindingReference(): boolean {
    return this.hasFieldValue('bindingReference');
  }

  /** Contract Friendly Language (0..*) Never undefined; an empty list is created when absent. */
  getFriendly(): ContractFriendly[] {
    if (this.friendly === undefined) {
      this.friendly = [];
    }
    return this.friendly;
  }

  setFriendly(friendly: ContractFriendly[] | undefined): this {
    return this.setFieldValue('friendly', friendly);
  }

  hasFriendly(): boolean {
    return this.hasFieldValue('friendly');
  }

  /** Appends a new, empty ContractFriendly to `friendly` and returns it so it can be filled in. */
  addFriendly(): ContractFriendly;
  /** Appends the given ContractFriendly to `friendly` and returns this object for chaining. */
  addFriendly(contractFriendly: ContractFriendly): this;
  addFriendly(contractFriendly?: ContractFriendly): ContractFriendly | this {
    if (contractFriendly !== undefined) {
      return this.addFieldValue('friendly', contractFriendly);
    }
    const createdContractFriendly = new ContractFriendly();
    this.addFieldValue('friendly', createdContractFriendly);
    return createdContractFriendly;
  }

  /** The first ContractFriendly of `friendly`. One is added when the list is empty. */
  getFriendlyFirstRep(): ContractFriendly {
    const firstContractFriendly = this.getFriendly()[0];
    return firstContractFriendly === undefined ? this.addFriendly() : firstContractFriendly;
  }

  /** Contract Legal Language (0..*) Never undefined; an empty list is created when absent. */
  getLegal(): ContractLegal[] {
    if (this.legal === undefined) {
      this.legal = [];
    }
    return this.legal;
  }

  setLegal(legal: ContractLegal[] | undefined): this {
    return this.setFieldValue('legal', legal);
  }

  hasLegal(): boolean {
    return this.hasFieldValue('legal');
  }

  /** Appends a new, empty ContractLegal to `legal` and returns it so it can be filled in. */
  addLegal(): ContractLegal;
  /** Appends the given ContractLegal to `legal` and returns this object for chaining. */
  addLegal(contractLegal: ContractLegal): this;
  addLegal(contractLegal?: ContractLegal): ContractLegal | this {
    if (contractLegal !== undefined) {
      return this.addFieldValue('legal', contractLegal);
    }
    const createdContractLegal = new ContractLegal();
    this.addFieldValue('legal', createdContractLegal);
    return createdContractLegal;
  }

  /** The first ContractLegal of `legal`. One is added when the list is empty. */
  getLegalFirstRep(): ContractLegal {
    const firstContractLegal = this.getLegal()[0];
    return firstContractLegal === undefined ? this.addLegal() : firstContractLegal;
  }

  /** Computable Contract Language (0..*) Never undefined; an empty list is created when absent. */
  getRule(): ContractRule[] {
    if (this.rule === undefined) {
      this.rule = [];
    }
    return this.rule;
  }

  setRule(rule: ContractRule[] | undefined): this {
    return this.setFieldValue('rule', rule);
  }

  hasRule(): boolean {
    return this.hasFieldValue('rule');
  }

  /** Appends a new, empty ContractRule to `rule` and returns it so it can be filled in. */
  addRule(): ContractRule;
  /** Appends the given ContractRule to `rule` and returns this object for chaining. */
  addRule(contractRule: ContractRule): this;
  addRule(contractRule?: ContractRule): ContractRule | this {
    if (contractRule !== undefined) {
      return this.addFieldValue('rule', contractRule);
    }
    const createdContractRule = new ContractRule();
    this.addFieldValue('rule', createdContractRule);
    return createdContractRule;
  }

  /** The first ContractRule of `rule`. One is added when the list is empty. */
  getRuleFirstRep(): ContractRule {
    const firstContractRule = this.getRule()[0];
    return firstContractRule === undefined ? this.addRule() : firstContractRule;
  }
}

modelTypeRegistry.register('Contract', Contract, true);

/** True when the value is a Contract model instance. */
export function isContract(candidate: unknown): candidate is Contract {
  return candidate instanceof Contract;
}

/**
 * Entity being ascribed responsibility
 */
export class ContractAgent extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'actor',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'actor',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Contract',
            'Device',
            'Group',
            'Location',
            'Organization',
            'Patient',
            'Practitioner',
            'RelatedPerson',
            'Substance',
          ],
        },
      ],
    },
    {
      elementName: 'role',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'role', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Contract Agent Type (1..1) */
  actor?: Reference;

  /** Role type of the agent (0..*) */
  role?: CodeableConcept[];

  override fhirType(): string {
    return 'Contract.agent';
  }

  /** FHIR JSON for this ContractAgent, typed as the plain `ContractAgent` data type. */
  override toJSON(): plainTypes.ContractAgent {
    return this.serialize() as plainTypes.ContractAgent;
  }

  /** Contract Agent Type (1..1) Created when absent. */
  getActor(): Reference {
    if (this.actor === undefined) {
      this.actor = new Reference();
    }
    return this.actor;
  }

  setActor(actor: Reference | undefined): this {
    return this.setFieldValue('actor', actor);
  }

  hasActor(): boolean {
    return this.hasFieldValue('actor');
  }

  /** Role type of the agent (0..*) Never undefined; an empty list is created when absent. */
  getRole(): CodeableConcept[] {
    if (this.role === undefined) {
      this.role = [];
    }
    return this.role;
  }

  setRole(role: CodeableConcept[] | undefined): this {
    return this.setFieldValue('role', role);
  }

  hasRole(): boolean {
    return this.hasFieldValue('role');
  }

  /** Appends a new, empty CodeableConcept to `role` and returns it so it can be filled in. */
  addRole(): CodeableConcept;
  /** Appends the given CodeableConcept to `role` and returns this object for chaining. */
  addRole(codeableConcept: CodeableConcept): this;
  addRole(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('role', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('role', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `role`. One is added when the list is empty. */
  getRoleFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getRole()[0];
    return firstCodeableConcept === undefined ? this.addRole() : firstCodeableConcept;
  }
}

modelTypeRegistry.register('ContractAgent', ContractAgent, false);

/**
 * Contract Signatory
 */
export class ContractSigner extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'Coding' }],
    },
    {
      elementName: 'party',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'party',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Patient', 'Practitioner', 'RelatedPerson'],
        },
      ],
    },
    {
      elementName: 'signature',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'signature', typeCode: 'Signature' }],
    },
  ];

  /** Contract Signatory Role (1..1) */
  type?: Coding;

  /** Contract Signatory Party (1..1) */
  party?: Reference;

  /** Contract Documentation Signature (1..*) */
  signature?: Signature[];

  override fhirType(): string {
    return 'Contract.signer';
  }

  /** FHIR JSON for this ContractSigner, typed as the plain `ContractSigner` data type. */
  override toJSON(): plainTypes.ContractSigner {
    return this.serialize() as plainTypes.ContractSigner;
  }

  /** Contract Signatory Role (1..1) Created when absent. */
  getType(): Coding {
    if (this.type === undefined) {
      this.type = new Coding();
    }
    return this.type;
  }

  setType(type: Coding | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Contract Signatory Party (1..1) Created when absent. */
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

  /** Contract Documentation Signature (1..*) Never undefined; an empty list is created when absent. */
  getSignature(): Signature[] {
    if (this.signature === undefined) {
      this.signature = [];
    }
    return this.signature;
  }

  setSignature(signature: Signature[] | undefined): this {
    return this.setFieldValue('signature', signature);
  }

  hasSignature(): boolean {
    return this.hasFieldValue('signature');
  }

  /** Appends a new, empty Signature to `signature` and returns it so it can be filled in. */
  addSignature(): Signature;
  /** Appends the given Signature to `signature` and returns this object for chaining. */
  addSignature(signature: Signature): this;
  addSignature(signature?: Signature): Signature | this {
    if (signature !== undefined) {
      return this.addFieldValue('signature', signature);
    }
    const createdSignature = new Signature();
    this.addFieldValue('signature', createdSignature);
    return createdSignature;
  }

  /** The first Signature of `signature`. One is added when the list is empty. */
  getSignatureFirstRep(): Signature {
    const firstSignature = this.getSignature()[0];
    return firstSignature === undefined ? this.addSignature() : firstSignature;
  }
}

modelTypeRegistry.register('ContractSigner', ContractSigner, false);

/**
 * Contract Valued Item List
 */
export class ContractValuedItem extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'entity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'entityCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'entityReference', typeCode: 'Reference' },
      ],
    },
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'effectiveTime',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'effectiveTime', typeCode: 'dateTime' }],
    },
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'unitPrice',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'unitPrice', typeCode: 'Money' }],
    },
    {
      elementName: 'factor',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'factor', typeCode: 'decimal' }],
    },
    {
      elementName: 'points',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'points', typeCode: 'decimal' }],
    },
    {
      elementName: 'net',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'net', typeCode: 'Money' }],
    },
  ];

  /** Contract Valued Item Type (0..1) */
  entityCodeableConcept?: CodeableConcept;
  /** Contract Valued Item Type (0..1) */
  entityReference?: Reference;

  /** Contract Valued Item Number (0..1) */
  identifier?: Identifier;

  /** Contract Valued Item Effective Tiem (0..1) */
  effectiveTime?: string;
  /** Id and extensions of the primitive `effectiveTime`. */
  _effectiveTime?: Element;

  /** Count of Contract Valued Items (0..1) */
  quantity?: Quantity;

  /** Contract Valued Item fee, charge, or cost (0..1) */
  unitPrice?: Money;

  /** Contract Valued Item Price Scaling Factor (0..1) */
  factor?: number;
  /** Id and extensions of the primitive `factor`. */
  _factor?: Element;

  /** Contract Valued Item Difficulty Scaling Factor (0..1) */
  points?: number;
  /** Id and extensions of the primitive `points`. */
  _points?: Element;

  /** Total Contract Valued Item Value (0..1) */
  net?: Money;

  override fhirType(): string {
    return 'Contract.valuedItem';
  }

  /** FHIR JSON for this ContractValuedItem, typed as the plain `ContractValuedItem` data type. */
  override toJSON(): plainTypes.ContractValuedItem {
    return this.serialize() as plainTypes.ContractValuedItem;
  }

  /** Contract Valued Item Type (0..1) Whichever type of `entity[x]` is set. */
  getEntity(): CodeableConcept | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | Reference>('entity');
  }

  /** True when any type of `entity[x]` is set. */
  hasEntity(): boolean {
    return this.hasChoiceValue('entity');
  }

  getEntityCodeableConcept(): CodeableConcept | undefined {
    return this.entityCodeableConcept;
  }

  /** Sets `entity[x]` as CodeableConcept and clears every other type of it. */
  setEntityCodeableConcept(entityCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('entityCodeableConcept', entityCodeableConcept);
  }

  hasEntityCodeableConcept(): boolean {
    return this.hasFieldValue('entityCodeableConcept');
  }

  getEntityReference(): Reference | undefined {
    return this.entityReference;
  }

  /** Sets `entity[x]` as Reference and clears every other type of it. */
  setEntityReference(entityReference: Reference | undefined): this {
    return this.setFieldValue('entityReference', entityReference);
  }

  hasEntityReference(): boolean {
    return this.hasFieldValue('entityReference');
  }

  /** Contract Valued Item Number (0..1) Created when absent. */
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

  /** Contract Valued Item Effective Tiem (0..1) */
  getEffectiveTime(): string | undefined {
    return this.effectiveTime;
  }

  /** Sets `effectiveTime`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setEffectiveTime(effectiveTime: string | undefined): this {
    return this.setFieldValue('effectiveTime', effectiveTime);
  }

  hasEffectiveTime(): boolean {
    return this.hasFieldValue('effectiveTime');
  }

  /** The element carrying the id and extensions of `effectiveTime`. Created when absent. */
  getEffectiveTimeElement(): Element {
    if (this._effectiveTime === undefined) {
      this._effectiveTime = new Element();
    }
    return this._effectiveTime;
  }

  setEffectiveTimeElement(effectiveTimeElement: Element | undefined): this {
    this._effectiveTime = effectiveTimeElement;
    return this;
  }

  /** Count of Contract Valued Items (0..1) Created when absent. */
  getQuantity(): Quantity {
    if (this.quantity === undefined) {
      this.quantity = new Quantity();
    }
    return this.quantity;
  }

  setQuantity(quantity: Quantity | undefined): this {
    return this.setFieldValue('quantity', quantity);
  }

  hasQuantity(): boolean {
    return this.hasFieldValue('quantity');
  }

  /** Contract Valued Item fee, charge, or cost (0..1) Created when absent. */
  getUnitPrice(): Money {
    if (this.unitPrice === undefined) {
      this.unitPrice = new Money();
    }
    return this.unitPrice;
  }

  setUnitPrice(unitPrice: Money | undefined): this {
    return this.setFieldValue('unitPrice', unitPrice);
  }

  hasUnitPrice(): boolean {
    return this.hasFieldValue('unitPrice');
  }

  /** Contract Valued Item Price Scaling Factor (0..1) */
  getFactor(): number | undefined {
    return this.factor;
  }

  /** Sets `factor`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setFactor(factor: number | undefined): this {
    return this.setFieldValue('factor', factor);
  }

  hasFactor(): boolean {
    return this.hasFieldValue('factor');
  }

  /** The element carrying the id and extensions of `factor`. Created when absent. */
  getFactorElement(): Element {
    if (this._factor === undefined) {
      this._factor = new Element();
    }
    return this._factor;
  }

  setFactorElement(factorElement: Element | undefined): this {
    this._factor = factorElement;
    return this;
  }

  /** Contract Valued Item Difficulty Scaling Factor (0..1) */
  getPoints(): number | undefined {
    return this.points;
  }

  /** Sets `points`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setPoints(points: number | undefined): this {
    return this.setFieldValue('points', points);
  }

  hasPoints(): boolean {
    return this.hasFieldValue('points');
  }

  /** The element carrying the id and extensions of `points`. Created when absent. */
  getPointsElement(): Element {
    if (this._points === undefined) {
      this._points = new Element();
    }
    return this._points;
  }

  setPointsElement(pointsElement: Element | undefined): this {
    this._points = pointsElement;
    return this;
  }

  /** Total Contract Valued Item Value (0..1) Created when absent. */
  getNet(): Money {
    if (this.net === undefined) {
      this.net = new Money();
    }
    return this.net;
  }

  setNet(net: Money | undefined): this {
    return this.setFieldValue('net', net);
  }

  hasNet(): boolean {
    return this.hasFieldValue('net');
  }
}

modelTypeRegistry.register('ContractValuedItem', ContractValuedItem, false);

/**
 * Contract Term List
 */
export class ContractTerm extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'issued',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'issued', typeCode: 'dateTime' }],
    },
    {
      elementName: 'applies',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'applies', typeCode: 'Period' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'subType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'subType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'topic',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'topic', typeCode: 'Reference' }],
    },
    {
      elementName: 'action',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'action', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'actionReason',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'actionReason', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'securityLabel',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'securityLabel', typeCode: 'Coding' }],
    },
    {
      elementName: 'agent',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'agent', typeCode: 'ContractTermAgent' }],
    },
    {
      elementName: 'text',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'text', typeCode: 'string' }],
    },
    {
      elementName: 'valuedItem',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'valuedItem', typeCode: 'ContractTermValuedItem' }],
    },
    {
      elementName: 'group',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'group', typeCode: 'ContractTerm' }],
    },
  ];

  /** Contract Term Number (0..1) */
  identifier?: Identifier;

  /** Contract Term Issue Date Time (0..1) */
  issued?: string;
  /** Id and extensions of the primitive `issued`. */
  _issued?: Element;

  /** Contract Term Effective Time (0..1) */
  applies?: Period;

  /** Contract Term Type or Form (0..1) */
  type?: CodeableConcept;

  /** Contract Term Type specific classification (0..1) */
  subType?: CodeableConcept;

  /** Context of the Contract term (0..*) */
  topic?: Reference[];

  /** Contract Term Activity (0..*) */
  action?: CodeableConcept[];

  /** Purpose for the Contract Term Action (0..*) */
  actionReason?: CodeableConcept[];

  /** Security Labels that define affected terms (0..*) */
  securityLabel?: Coding[];

  /** Contract Term Agent List (0..*) */
  agent?: ContractTermAgent[];

  /** Human readable Contract term text (0..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;

  /** Contract Term Valued Item List (0..*) */
  valuedItem?: ContractTermValuedItem[];

  /** Nested Contract Term Group (0..*) */
  group?: ContractTerm[];

  override fhirType(): string {
    return 'Contract.term';
  }

  /** FHIR JSON for this ContractTerm, typed as the plain `ContractTerm` data type. */
  override toJSON(): plainTypes.ContractTerm {
    return this.serialize() as plainTypes.ContractTerm;
  }

  /** Contract Term Number (0..1) Created when absent. */
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

  /** Contract Term Issue Date Time (0..1) */
  getIssued(): string | undefined {
    return this.issued;
  }

  /** Sets `issued`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setIssued(issued: string | undefined): this {
    return this.setFieldValue('issued', issued);
  }

  hasIssued(): boolean {
    return this.hasFieldValue('issued');
  }

  /** The element carrying the id and extensions of `issued`. Created when absent. */
  getIssuedElement(): Element {
    if (this._issued === undefined) {
      this._issued = new Element();
    }
    return this._issued;
  }

  setIssuedElement(issuedElement: Element | undefined): this {
    this._issued = issuedElement;
    return this;
  }

  /** Contract Term Effective Time (0..1) Created when absent. */
  getApplies(): Period {
    if (this.applies === undefined) {
      this.applies = new Period();
    }
    return this.applies;
  }

  setApplies(applies: Period | undefined): this {
    return this.setFieldValue('applies', applies);
  }

  hasApplies(): boolean {
    return this.hasFieldValue('applies');
  }

  /** Contract Term Type or Form (0..1) Created when absent. */
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

  /** Contract Term Type specific classification (0..1) Created when absent. */
  getSubType(): CodeableConcept {
    if (this.subType === undefined) {
      this.subType = new CodeableConcept();
    }
    return this.subType;
  }

  setSubType(subType: CodeableConcept | undefined): this {
    return this.setFieldValue('subType', subType);
  }

  hasSubType(): boolean {
    return this.hasFieldValue('subType');
  }

  /** Context of the Contract term (0..*) Never undefined; an empty list is created when absent. */
  getTopic(): Reference[] {
    if (this.topic === undefined) {
      this.topic = [];
    }
    return this.topic;
  }

  setTopic(topic: Reference[] | undefined): this {
    return this.setFieldValue('topic', topic);
  }

  hasTopic(): boolean {
    return this.hasFieldValue('topic');
  }

  /** Appends a new, empty Reference to `topic` and returns it so it can be filled in. */
  addTopic(): Reference;
  /** Appends the given Reference to `topic` and returns this object for chaining. */
  addTopic(reference: Reference): this;
  addTopic(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('topic', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('topic', createdReference);
    return createdReference;
  }

  /** The first Reference of `topic`. One is added when the list is empty. */
  getTopicFirstRep(): Reference {
    const firstReference = this.getTopic()[0];
    return firstReference === undefined ? this.addTopic() : firstReference;
  }

  /** Contract Term Activity (0..*) Never undefined; an empty list is created when absent. */
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

  /** Purpose for the Contract Term Action (0..*) Never undefined; an empty list is created when absent. */
  getActionReason(): CodeableConcept[] {
    if (this.actionReason === undefined) {
      this.actionReason = [];
    }
    return this.actionReason;
  }

  setActionReason(actionReason: CodeableConcept[] | undefined): this {
    return this.setFieldValue('actionReason', actionReason);
  }

  hasActionReason(): boolean {
    return this.hasFieldValue('actionReason');
  }

  /** Appends a new, empty CodeableConcept to `actionReason` and returns it so it can be filled in. */
  addActionReason(): CodeableConcept;
  /** Appends the given CodeableConcept to `actionReason` and returns this object for chaining. */
  addActionReason(codeableConcept: CodeableConcept): this;
  addActionReason(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('actionReason', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('actionReason', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `actionReason`. One is added when the list is empty. */
  getActionReasonFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getActionReason()[0];
    return firstCodeableConcept === undefined ? this.addActionReason() : firstCodeableConcept;
  }

  /** Security Labels that define affected terms (0..*) Never undefined; an empty list is created when absent. */
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

  /** Contract Term Agent List (0..*) Never undefined; an empty list is created when absent. */
  getAgent(): ContractTermAgent[] {
    if (this.agent === undefined) {
      this.agent = [];
    }
    return this.agent;
  }

  setAgent(agent: ContractTermAgent[] | undefined): this {
    return this.setFieldValue('agent', agent);
  }

  hasAgent(): boolean {
    return this.hasFieldValue('agent');
  }

  /** Appends a new, empty ContractTermAgent to `agent` and returns it so it can be filled in. */
  addAgent(): ContractTermAgent;
  /** Appends the given ContractTermAgent to `agent` and returns this object for chaining. */
  addAgent(contractTermAgent: ContractTermAgent): this;
  addAgent(contractTermAgent?: ContractTermAgent): ContractTermAgent | this {
    if (contractTermAgent !== undefined) {
      return this.addFieldValue('agent', contractTermAgent);
    }
    const createdContractTermAgent = new ContractTermAgent();
    this.addFieldValue('agent', createdContractTermAgent);
    return createdContractTermAgent;
  }

  /** The first ContractTermAgent of `agent`. One is added when the list is empty. */
  getAgentFirstRep(): ContractTermAgent {
    const firstContractTermAgent = this.getAgent()[0];
    return firstContractTermAgent === undefined ? this.addAgent() : firstContractTermAgent;
  }

  /** Human readable Contract term text (0..1) */
  getText(): string | undefined {
    return this.text;
  }

  /** Sets `text`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setText(text: string | undefined): this {
    return this.setFieldValue('text', text);
  }

  hasText(): boolean {
    return this.hasFieldValue('text');
  }

  /** The element carrying the id and extensions of `text`. Created when absent. */
  getTextElement(): Element {
    if (this._text === undefined) {
      this._text = new Element();
    }
    return this._text;
  }

  setTextElement(textElement: Element | undefined): this {
    this._text = textElement;
    return this;
  }

  /** Contract Term Valued Item List (0..*) Never undefined; an empty list is created when absent. */
  getValuedItem(): ContractTermValuedItem[] {
    if (this.valuedItem === undefined) {
      this.valuedItem = [];
    }
    return this.valuedItem;
  }

  setValuedItem(valuedItem: ContractTermValuedItem[] | undefined): this {
    return this.setFieldValue('valuedItem', valuedItem);
  }

  hasValuedItem(): boolean {
    return this.hasFieldValue('valuedItem');
  }

  /** Appends a new, empty ContractTermValuedItem to `valuedItem` and returns it so it can be filled in. */
  addValuedItem(): ContractTermValuedItem;
  /** Appends the given ContractTermValuedItem to `valuedItem` and returns this object for chaining. */
  addValuedItem(contractTermValuedItem: ContractTermValuedItem): this;
  addValuedItem(contractTermValuedItem?: ContractTermValuedItem): ContractTermValuedItem | this {
    if (contractTermValuedItem !== undefined) {
      return this.addFieldValue('valuedItem', contractTermValuedItem);
    }
    const createdContractTermValuedItem = new ContractTermValuedItem();
    this.addFieldValue('valuedItem', createdContractTermValuedItem);
    return createdContractTermValuedItem;
  }

  /** The first ContractTermValuedItem of `valuedItem`. One is added when the list is empty. */
  getValuedItemFirstRep(): ContractTermValuedItem {
    const firstContractTermValuedItem = this.getValuedItem()[0];
    return firstContractTermValuedItem === undefined
      ? this.addValuedItem()
      : firstContractTermValuedItem;
  }

  /** Nested Contract Term Group (0..*) Never undefined; an empty list is created when absent. */
  getGroup(): ContractTerm[] {
    if (this.group === undefined) {
      this.group = [];
    }
    return this.group;
  }

  setGroup(group: ContractTerm[] | undefined): this {
    return this.setFieldValue('group', group);
  }

  hasGroup(): boolean {
    return this.hasFieldValue('group');
  }

  /** Appends a new, empty ContractTerm to `group` and returns it so it can be filled in. */
  addGroup(): ContractTerm;
  /** Appends the given ContractTerm to `group` and returns this object for chaining. */
  addGroup(contractTerm: ContractTerm): this;
  addGroup(contractTerm?: ContractTerm): ContractTerm | this {
    if (contractTerm !== undefined) {
      return this.addFieldValue('group', contractTerm);
    }
    const createdContractTerm = new ContractTerm();
    this.addFieldValue('group', createdContractTerm);
    return createdContractTerm;
  }

  /** The first ContractTerm of `group`. One is added when the list is empty. */
  getGroupFirstRep(): ContractTerm {
    const firstContractTerm = this.getGroup()[0];
    return firstContractTerm === undefined ? this.addGroup() : firstContractTerm;
  }
}

modelTypeRegistry.register('ContractTerm', ContractTerm, false);

/**
 * Contract Term Agent List
 */
export class ContractTermAgent extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'actor',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'actor',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Contract',
            'Device',
            'Group',
            'Location',
            'Organization',
            'Patient',
            'Practitioner',
            'RelatedPerson',
            'Substance',
          ],
        },
      ],
    },
    {
      elementName: 'role',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'role', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Contract Term Agent Subject (1..1) */
  actor?: Reference;

  /** Type of the Contract Term Agent (0..*) */
  role?: CodeableConcept[];

  override fhirType(): string {
    return 'Contract.term.agent';
  }

  /** FHIR JSON for this ContractTermAgent, typed as the plain `ContractAgent1` data type. */
  override toJSON(): plainTypes.ContractAgent1 {
    return this.serialize() as plainTypes.ContractAgent1;
  }

  /** Contract Term Agent Subject (1..1) Created when absent. */
  getActor(): Reference {
    if (this.actor === undefined) {
      this.actor = new Reference();
    }
    return this.actor;
  }

  setActor(actor: Reference | undefined): this {
    return this.setFieldValue('actor', actor);
  }

  hasActor(): boolean {
    return this.hasFieldValue('actor');
  }

  /** Type of the Contract Term Agent (0..*) Never undefined; an empty list is created when absent. */
  getRole(): CodeableConcept[] {
    if (this.role === undefined) {
      this.role = [];
    }
    return this.role;
  }

  setRole(role: CodeableConcept[] | undefined): this {
    return this.setFieldValue('role', role);
  }

  hasRole(): boolean {
    return this.hasFieldValue('role');
  }

  /** Appends a new, empty CodeableConcept to `role` and returns it so it can be filled in. */
  addRole(): CodeableConcept;
  /** Appends the given CodeableConcept to `role` and returns this object for chaining. */
  addRole(codeableConcept: CodeableConcept): this;
  addRole(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('role', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('role', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `role`. One is added when the list is empty. */
  getRoleFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getRole()[0];
    return firstCodeableConcept === undefined ? this.addRole() : firstCodeableConcept;
  }
}

modelTypeRegistry.register('ContractTermAgent', ContractTermAgent, false);

/**
 * Contract Term Valued Item List
 */
export class ContractTermValuedItem extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'entity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'entityCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'entityReference', typeCode: 'Reference' },
      ],
    },
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'effectiveTime',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'effectiveTime', typeCode: 'dateTime' }],
    },
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'unitPrice',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'unitPrice', typeCode: 'Money' }],
    },
    {
      elementName: 'factor',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'factor', typeCode: 'decimal' }],
    },
    {
      elementName: 'points',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'points', typeCode: 'decimal' }],
    },
    {
      elementName: 'net',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'net', typeCode: 'Money' }],
    },
  ];

  /** Contract Term Valued Item Type (0..1) */
  entityCodeableConcept?: CodeableConcept;
  /** Contract Term Valued Item Type (0..1) */
  entityReference?: Reference;

  /** Contract Term Valued Item Number (0..1) */
  identifier?: Identifier;

  /** Contract Term Valued Item Effective Tiem (0..1) */
  effectiveTime?: string;
  /** Id and extensions of the primitive `effectiveTime`. */
  _effectiveTime?: Element;

  /** Contract Term Valued Item Count (0..1) */
  quantity?: Quantity;

  /** Contract Term Valued Item fee, charge, or cost (0..1) */
  unitPrice?: Money;

  /** Contract Term Valued Item Price Scaling Factor (0..1) */
  factor?: number;
  /** Id and extensions of the primitive `factor`. */
  _factor?: Element;

  /** Contract Term Valued Item Difficulty Scaling Factor (0..1) */
  points?: number;
  /** Id and extensions of the primitive `points`. */
  _points?: Element;

  /** Total Contract Term Valued Item Value (0..1) */
  net?: Money;

  override fhirType(): string {
    return 'Contract.term.valuedItem';
  }

  /** FHIR JSON for this ContractTermValuedItem, typed as the plain `ContractValuedItem1` data type. */
  override toJSON(): plainTypes.ContractValuedItem1 {
    return this.serialize() as plainTypes.ContractValuedItem1;
  }

  /** Contract Term Valued Item Type (0..1) Whichever type of `entity[x]` is set. */
  getEntity(): CodeableConcept | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | Reference>('entity');
  }

  /** True when any type of `entity[x]` is set. */
  hasEntity(): boolean {
    return this.hasChoiceValue('entity');
  }

  getEntityCodeableConcept(): CodeableConcept | undefined {
    return this.entityCodeableConcept;
  }

  /** Sets `entity[x]` as CodeableConcept and clears every other type of it. */
  setEntityCodeableConcept(entityCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('entityCodeableConcept', entityCodeableConcept);
  }

  hasEntityCodeableConcept(): boolean {
    return this.hasFieldValue('entityCodeableConcept');
  }

  getEntityReference(): Reference | undefined {
    return this.entityReference;
  }

  /** Sets `entity[x]` as Reference and clears every other type of it. */
  setEntityReference(entityReference: Reference | undefined): this {
    return this.setFieldValue('entityReference', entityReference);
  }

  hasEntityReference(): boolean {
    return this.hasFieldValue('entityReference');
  }

  /** Contract Term Valued Item Number (0..1) Created when absent. */
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

  /** Contract Term Valued Item Effective Tiem (0..1) */
  getEffectiveTime(): string | undefined {
    return this.effectiveTime;
  }

  /** Sets `effectiveTime`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setEffectiveTime(effectiveTime: string | undefined): this {
    return this.setFieldValue('effectiveTime', effectiveTime);
  }

  hasEffectiveTime(): boolean {
    return this.hasFieldValue('effectiveTime');
  }

  /** The element carrying the id and extensions of `effectiveTime`. Created when absent. */
  getEffectiveTimeElement(): Element {
    if (this._effectiveTime === undefined) {
      this._effectiveTime = new Element();
    }
    return this._effectiveTime;
  }

  setEffectiveTimeElement(effectiveTimeElement: Element | undefined): this {
    this._effectiveTime = effectiveTimeElement;
    return this;
  }

  /** Contract Term Valued Item Count (0..1) Created when absent. */
  getQuantity(): Quantity {
    if (this.quantity === undefined) {
      this.quantity = new Quantity();
    }
    return this.quantity;
  }

  setQuantity(quantity: Quantity | undefined): this {
    return this.setFieldValue('quantity', quantity);
  }

  hasQuantity(): boolean {
    return this.hasFieldValue('quantity');
  }

  /** Contract Term Valued Item fee, charge, or cost (0..1) Created when absent. */
  getUnitPrice(): Money {
    if (this.unitPrice === undefined) {
      this.unitPrice = new Money();
    }
    return this.unitPrice;
  }

  setUnitPrice(unitPrice: Money | undefined): this {
    return this.setFieldValue('unitPrice', unitPrice);
  }

  hasUnitPrice(): boolean {
    return this.hasFieldValue('unitPrice');
  }

  /** Contract Term Valued Item Price Scaling Factor (0..1) */
  getFactor(): number | undefined {
    return this.factor;
  }

  /** Sets `factor`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setFactor(factor: number | undefined): this {
    return this.setFieldValue('factor', factor);
  }

  hasFactor(): boolean {
    return this.hasFieldValue('factor');
  }

  /** The element carrying the id and extensions of `factor`. Created when absent. */
  getFactorElement(): Element {
    if (this._factor === undefined) {
      this._factor = new Element();
    }
    return this._factor;
  }

  setFactorElement(factorElement: Element | undefined): this {
    this._factor = factorElement;
    return this;
  }

  /** Contract Term Valued Item Difficulty Scaling Factor (0..1) */
  getPoints(): number | undefined {
    return this.points;
  }

  /** Sets `points`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setPoints(points: number | undefined): this {
    return this.setFieldValue('points', points);
  }

  hasPoints(): boolean {
    return this.hasFieldValue('points');
  }

  /** The element carrying the id and extensions of `points`. Created when absent. */
  getPointsElement(): Element {
    if (this._points === undefined) {
      this._points = new Element();
    }
    return this._points;
  }

  setPointsElement(pointsElement: Element | undefined): this {
    this._points = pointsElement;
    return this;
  }

  /** Total Contract Term Valued Item Value (0..1) Created when absent. */
  getNet(): Money {
    if (this.net === undefined) {
      this.net = new Money();
    }
    return this.net;
  }

  setNet(net: Money | undefined): this {
    return this.setFieldValue('net', net);
  }

  hasNet(): boolean {
    return this.hasFieldValue('net');
  }
}

modelTypeRegistry.register('ContractTermValuedItem', ContractTermValuedItem, false);

/**
 * Contract Friendly Language
 */
export class ContractFriendly extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'content',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'contentAttachment', typeCode: 'Attachment' },
        {
          jsonKey: 'contentReference',
          typeCode: 'Reference',
          targetResourceTypes: ['Composition', 'DocumentReference', 'QuestionnaireResponse'],
        },
      ],
    },
  ];

  /** Easily comprehended representation of this Contract (1..1) */
  contentAttachment?: Attachment;
  /** Easily comprehended representation of this Contract (1..1) */
  contentReference?: Reference;

  override fhirType(): string {
    return 'Contract.friendly';
  }

  /** FHIR JSON for this ContractFriendly, typed as the plain `ContractFriendly` data type. */
  override toJSON(): plainTypes.ContractFriendly {
    return this.serialize() as plainTypes.ContractFriendly;
  }

  /** Easily comprehended representation of this Contract (1..1) Whichever type of `content[x]` is set. */
  getContent(): Attachment | Reference | undefined {
    return this.getChoiceValue<Attachment | Reference>('content');
  }

  /** True when any type of `content[x]` is set. */
  hasContent(): boolean {
    return this.hasChoiceValue('content');
  }

  getContentAttachment(): Attachment | undefined {
    return this.contentAttachment;
  }

  /** Sets `content[x]` as Attachment and clears every other type of it. */
  setContentAttachment(contentAttachment: Attachment | undefined): this {
    return this.setFieldValue('contentAttachment', contentAttachment);
  }

  hasContentAttachment(): boolean {
    return this.hasFieldValue('contentAttachment');
  }

  getContentReference(): Reference | undefined {
    return this.contentReference;
  }

  /** Sets `content[x]` as Reference and clears every other type of it. */
  setContentReference(contentReference: Reference | undefined): this {
    return this.setFieldValue('contentReference', contentReference);
  }

  hasContentReference(): boolean {
    return this.hasFieldValue('contentReference');
  }
}

modelTypeRegistry.register('ContractFriendly', ContractFriendly, false);

/**
 * Contract Legal Language
 */
export class ContractLegal extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'content',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'contentAttachment', typeCode: 'Attachment' },
        {
          jsonKey: 'contentReference',
          typeCode: 'Reference',
          targetResourceTypes: ['Composition', 'DocumentReference', 'QuestionnaireResponse'],
        },
      ],
    },
  ];

  /** Contract Legal Text (1..1) */
  contentAttachment?: Attachment;
  /** Contract Legal Text (1..1) */
  contentReference?: Reference;

  override fhirType(): string {
    return 'Contract.legal';
  }

  /** FHIR JSON for this ContractLegal, typed as the plain `ContractLegal` data type. */
  override toJSON(): plainTypes.ContractLegal {
    return this.serialize() as plainTypes.ContractLegal;
  }

  /** Contract Legal Text (1..1) Whichever type of `content[x]` is set. */
  getContent(): Attachment | Reference | undefined {
    return this.getChoiceValue<Attachment | Reference>('content');
  }

  /** True when any type of `content[x]` is set. */
  hasContent(): boolean {
    return this.hasChoiceValue('content');
  }

  getContentAttachment(): Attachment | undefined {
    return this.contentAttachment;
  }

  /** Sets `content[x]` as Attachment and clears every other type of it. */
  setContentAttachment(contentAttachment: Attachment | undefined): this {
    return this.setFieldValue('contentAttachment', contentAttachment);
  }

  hasContentAttachment(): boolean {
    return this.hasFieldValue('contentAttachment');
  }

  getContentReference(): Reference | undefined {
    return this.contentReference;
  }

  /** Sets `content[x]` as Reference and clears every other type of it. */
  setContentReference(contentReference: Reference | undefined): this {
    return this.setFieldValue('contentReference', contentReference);
  }

  hasContentReference(): boolean {
    return this.hasFieldValue('contentReference');
  }
}

modelTypeRegistry.register('ContractLegal', ContractLegal, false);

/**
 * Computable Contract Language
 */
export class ContractRule extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'content',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'contentAttachment', typeCode: 'Attachment' },
        {
          jsonKey: 'contentReference',
          typeCode: 'Reference',
          targetResourceTypes: ['DocumentReference'],
        },
      ],
    },
  ];

  /** Computable Contract Rules (1..1) */
  contentAttachment?: Attachment;
  /** Computable Contract Rules (1..1) */
  contentReference?: Reference;

  override fhirType(): string {
    return 'Contract.rule';
  }

  /** FHIR JSON for this ContractRule, typed as the plain `ContractRule` data type. */
  override toJSON(): plainTypes.ContractRule {
    return this.serialize() as plainTypes.ContractRule;
  }

  /** Computable Contract Rules (1..1) Whichever type of `content[x]` is set. */
  getContent(): Attachment | Reference | undefined {
    return this.getChoiceValue<Attachment | Reference>('content');
  }

  /** True when any type of `content[x]` is set. */
  hasContent(): boolean {
    return this.hasChoiceValue('content');
  }

  getContentAttachment(): Attachment | undefined {
    return this.contentAttachment;
  }

  /** Sets `content[x]` as Attachment and clears every other type of it. */
  setContentAttachment(contentAttachment: Attachment | undefined): this {
    return this.setFieldValue('contentAttachment', contentAttachment);
  }

  hasContentAttachment(): boolean {
    return this.hasFieldValue('contentAttachment');
  }

  getContentReference(): Reference | undefined {
    return this.contentReference;
  }

  /** Sets `content[x]` as Reference and clears every other type of it. */
  setContentReference(contentReference: Reference | undefined): this {
    return this.setFieldValue('contentReference', contentReference);
  }

  hasContentReference(): boolean {
    return this.hasFieldValue('contentReference');
  }
}

modelTypeRegistry.register('ContractRule', ContractRule, false);
