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
import { Coding } from './coding';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';
import { Signature } from './signature';

/**
 * Base StructureDefinition for Provenance Resource
 */
export class Provenance extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'target',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'target', typeCode: 'Reference' }],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
    {
      elementName: 'recorded',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'recorded', typeCode: 'instant' }],
    },
    {
      elementName: 'policy',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'policy', typeCode: 'uri' }],
    },
    {
      elementName: 'location',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'location', typeCode: 'Reference', targetResourceTypes: ['Location'] }],
    },
    {
      elementName: 'reason',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reason', typeCode: 'Coding' }],
    },
    {
      elementName: 'activity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'activity', typeCode: 'Coding' }],
    },
    {
      elementName: 'agent',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'agent', typeCode: 'ProvenanceAgent' }],
    },
    {
      elementName: 'entity',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'entity', typeCode: 'ProvenanceEntity' }],
    },
    {
      elementName: 'signature',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'signature', typeCode: 'Signature' }],
    },
  ];

  readonly resourceType = 'Provenance';

  /** Target Reference(s) (usually version specific) (1..*) */
  target?: Reference[];

  /** When the activity occurred (0..1) */
  period?: Period;

  /** When the activity was recorded / updated (1..1) */
  recorded?: string;
  /** Id and extensions of the primitive `recorded`. */
  _recorded?: Element;

  /** Policy or plan the activity was defined by (0..*) */
  policy?: string[];
  /** Id and extensions of the primitive `policy`. */
  _policy?: (Element | null)[];

  /** Where the activity occurred, if relevant (0..1) */
  location?: Reference;

  /** Reason the activity is occurring (0..*) */
  reason?: Coding[];

  /** Activity that occurred (0..1) */
  activity?: Coding;

  /** Actor involved (1..*) */
  agent?: ProvenanceAgent[];

  /** An entity used in this activity (0..*) */
  entity?: ProvenanceEntity[];

  /** Signature on target (0..*) */
  signature?: Signature[];

  override fhirType(): string {
    return 'Provenance';
  }

  /** FHIR JSON for this Provenance, typed as the plain `Provenance` data type. */
  override toJSON(): plainTypes.Provenance {
    return this.serialize() as plainTypes.Provenance;
  }

  /** Target Reference(s) (usually version specific) (1..*) Never undefined; an empty list is created when absent. */
  getTarget(): Reference[] {
    if (this.target === undefined) {
      this.target = [];
    }
    return this.target;
  }

  setTarget(target: Reference[] | undefined): this {
    return this.setFieldValue('target', target);
  }

  hasTarget(): boolean {
    return this.hasFieldValue('target');
  }

  /** Appends a new, empty Reference to `target` and returns it so it can be filled in. */
  addTarget(): Reference;
  /** Appends the given Reference to `target` and returns this object for chaining. */
  addTarget(reference: Reference): this;
  addTarget(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('target', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('target', createdReference);
    return createdReference;
  }

  /** The first Reference of `target`. One is added when the list is empty. */
  getTargetFirstRep(): Reference {
    const firstReference = this.getTarget()[0];
    return firstReference === undefined ? this.addTarget() : firstReference;
  }

  /** When the activity occurred (0..1) Created when absent. */
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

  /** When the activity was recorded / updated (1..1) */
  getRecorded(): string | undefined {
    return this.recorded;
  }

  /** Sets `recorded`. Throws a FhirModelError when the value is not a valid FHIR instant. */
  setRecorded(recorded: string | undefined): this {
    return this.setFieldValue('recorded', recorded);
  }

  hasRecorded(): boolean {
    return this.hasFieldValue('recorded');
  }

  /** The element carrying the id and extensions of `recorded`. Created when absent. */
  getRecordedElement(): Element {
    if (this._recorded === undefined) {
      this._recorded = new Element();
    }
    return this._recorded;
  }

  setRecordedElement(recordedElement: Element | undefined): this {
    this._recorded = recordedElement;
    return this;
  }

  /** Policy or plan the activity was defined by (0..*) Never undefined; an empty list is created when absent. */
  getPolicy(): string[] {
    if (this.policy === undefined) {
      this.policy = [];
    }
    return this.policy;
  }

  setPolicy(policy: string[] | undefined): this {
    return this.setFieldValue('policy', policy);
  }

  hasPolicy(): boolean {
    return this.hasFieldValue('policy');
  }

  /** Appends one value to `policy`. Throws a FhirModelError when it is not a valid FHIR uri. */
  addPolicy(policy: string): this {
    return this.addFieldValue('policy', policy);
  }

  /** Where the activity occurred, if relevant (0..1) Created when absent. */
  getLocation(): Reference {
    if (this.location === undefined) {
      this.location = new Reference();
    }
    return this.location;
  }

  setLocation(location: Reference | undefined): this {
    return this.setFieldValue('location', location);
  }

  hasLocation(): boolean {
    return this.hasFieldValue('location');
  }

  /** Reason the activity is occurring (0..*) Never undefined; an empty list is created when absent. */
  getReason(): Coding[] {
    if (this.reason === undefined) {
      this.reason = [];
    }
    return this.reason;
  }

  setReason(reason: Coding[] | undefined): this {
    return this.setFieldValue('reason', reason);
  }

  hasReason(): boolean {
    return this.hasFieldValue('reason');
  }

  /** Appends a new, empty Coding to `reason` and returns it so it can be filled in. */
  addReason(): Coding;
  /** Appends the given Coding to `reason` and returns this object for chaining. */
  addReason(coding: Coding): this;
  addReason(coding?: Coding): Coding | this {
    if (coding !== undefined) {
      return this.addFieldValue('reason', coding);
    }
    const createdCoding = new Coding();
    this.addFieldValue('reason', createdCoding);
    return createdCoding;
  }

  /** The first Coding of `reason`. One is added when the list is empty. */
  getReasonFirstRep(): Coding {
    const firstCoding = this.getReason()[0];
    return firstCoding === undefined ? this.addReason() : firstCoding;
  }

  /** Activity that occurred (0..1) Created when absent. */
  getActivity(): Coding {
    if (this.activity === undefined) {
      this.activity = new Coding();
    }
    return this.activity;
  }

  setActivity(activity: Coding | undefined): this {
    return this.setFieldValue('activity', activity);
  }

  hasActivity(): boolean {
    return this.hasFieldValue('activity');
  }

  /** Actor involved (1..*) Never undefined; an empty list is created when absent. */
  getAgent(): ProvenanceAgent[] {
    if (this.agent === undefined) {
      this.agent = [];
    }
    return this.agent;
  }

  setAgent(agent: ProvenanceAgent[] | undefined): this {
    return this.setFieldValue('agent', agent);
  }

  hasAgent(): boolean {
    return this.hasFieldValue('agent');
  }

  /** Appends a new, empty ProvenanceAgent to `agent` and returns it so it can be filled in. */
  addAgent(): ProvenanceAgent;
  /** Appends the given ProvenanceAgent to `agent` and returns this object for chaining. */
  addAgent(provenanceAgent: ProvenanceAgent): this;
  addAgent(provenanceAgent?: ProvenanceAgent): ProvenanceAgent | this {
    if (provenanceAgent !== undefined) {
      return this.addFieldValue('agent', provenanceAgent);
    }
    const createdProvenanceAgent = new ProvenanceAgent();
    this.addFieldValue('agent', createdProvenanceAgent);
    return createdProvenanceAgent;
  }

  /** The first ProvenanceAgent of `agent`. One is added when the list is empty. */
  getAgentFirstRep(): ProvenanceAgent {
    const firstProvenanceAgent = this.getAgent()[0];
    return firstProvenanceAgent === undefined ? this.addAgent() : firstProvenanceAgent;
  }

  /** An entity used in this activity (0..*) Never undefined; an empty list is created when absent. */
  getEntity(): ProvenanceEntity[] {
    if (this.entity === undefined) {
      this.entity = [];
    }
    return this.entity;
  }

  setEntity(entity: ProvenanceEntity[] | undefined): this {
    return this.setFieldValue('entity', entity);
  }

  hasEntity(): boolean {
    return this.hasFieldValue('entity');
  }

  /** Appends a new, empty ProvenanceEntity to `entity` and returns it so it can be filled in. */
  addEntity(): ProvenanceEntity;
  /** Appends the given ProvenanceEntity to `entity` and returns this object for chaining. */
  addEntity(provenanceEntity: ProvenanceEntity): this;
  addEntity(provenanceEntity?: ProvenanceEntity): ProvenanceEntity | this {
    if (provenanceEntity !== undefined) {
      return this.addFieldValue('entity', provenanceEntity);
    }
    const createdProvenanceEntity = new ProvenanceEntity();
    this.addFieldValue('entity', createdProvenanceEntity);
    return createdProvenanceEntity;
  }

  /** The first ProvenanceEntity of `entity`. One is added when the list is empty. */
  getEntityFirstRep(): ProvenanceEntity {
    const firstProvenanceEntity = this.getEntity()[0];
    return firstProvenanceEntity === undefined ? this.addEntity() : firstProvenanceEntity;
  }

  /** Signature on target (0..*) Never undefined; an empty list is created when absent. */
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

modelTypeRegistry.register('Provenance', Provenance, true);

/** True when the value is a Provenance model instance. */
export function isProvenance(candidate: unknown): candidate is Provenance {
  return candidate instanceof Provenance;
}

/**
 * Actor involved
 */
export class ProvenanceAgent extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'role',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'role', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'who',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'whoUri', typeCode: 'uri' },
        {
          jsonKey: 'whoReference',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Device',
            'Organization',
            'Patient',
            'Practitioner',
            'RelatedPerson',
          ],
        },
      ],
    },
    {
      elementName: 'onBehalfOf',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'onBehalfOfUri', typeCode: 'uri' },
        {
          jsonKey: 'onBehalfOfReference',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Device',
            'Organization',
            'Patient',
            'Practitioner',
            'RelatedPerson',
          ],
        },
      ],
    },
    {
      elementName: 'relatedAgentType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'relatedAgentType', typeCode: 'CodeableConcept' }],
    },
  ];

  /** What the agents role was (0..*) */
  role?: CodeableConcept[];

  /** Who participated (1..1) */
  whoUri?: string;
  /** Id and extensions of the primitive `whoUri`. */
  _whoUri?: Element;
  /** Who participated (1..1) */
  whoReference?: Reference;

  /** Who the agent is representing (0..1) */
  onBehalfOfUri?: string;
  /** Id and extensions of the primitive `onBehalfOfUri`. */
  _onBehalfOfUri?: Element;
  /** Who the agent is representing (0..1) */
  onBehalfOfReference?: Reference;

  /** Type of relationship between agents (0..1) */
  relatedAgentType?: CodeableConcept;

  override fhirType(): string {
    return 'Provenance.agent';
  }

  /** FHIR JSON for this ProvenanceAgent, typed as the plain `ProvenanceAgent` data type. */
  override toJSON(): plainTypes.ProvenanceAgent {
    return this.serialize() as plainTypes.ProvenanceAgent;
  }

  /** What the agents role was (0..*) Never undefined; an empty list is created when absent. */
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

  /** Who participated (1..1) Whichever type of `who[x]` is set. */
  getWho(): string | Reference | undefined {
    return this.getChoiceValue<string | Reference>('who');
  }

  /** True when any type of `who[x]` is set. */
  hasWho(): boolean {
    return this.hasChoiceValue('who');
  }

  getWhoUri(): string | undefined {
    return this.whoUri;
  }

  /** Sets `who[x]` as uri and clears every other type of it. */
  setWhoUri(whoUri: string | undefined): this {
    return this.setFieldValue('whoUri', whoUri);
  }

  hasWhoUri(): boolean {
    return this.hasFieldValue('whoUri');
  }

  getWhoReference(): Reference | undefined {
    return this.whoReference;
  }

  /** Sets `who[x]` as Reference and clears every other type of it. */
  setWhoReference(whoReference: Reference | undefined): this {
    return this.setFieldValue('whoReference', whoReference);
  }

  hasWhoReference(): boolean {
    return this.hasFieldValue('whoReference');
  }

  /** Who the agent is representing (0..1) Whichever type of `onBehalfOf[x]` is set. */
  getOnBehalfOf(): string | Reference | undefined {
    return this.getChoiceValue<string | Reference>('onBehalfOf');
  }

  /** True when any type of `onBehalfOf[x]` is set. */
  hasOnBehalfOf(): boolean {
    return this.hasChoiceValue('onBehalfOf');
  }

  getOnBehalfOfUri(): string | undefined {
    return this.onBehalfOfUri;
  }

  /** Sets `onBehalfOf[x]` as uri and clears every other type of it. */
  setOnBehalfOfUri(onBehalfOfUri: string | undefined): this {
    return this.setFieldValue('onBehalfOfUri', onBehalfOfUri);
  }

  hasOnBehalfOfUri(): boolean {
    return this.hasFieldValue('onBehalfOfUri');
  }

  getOnBehalfOfReference(): Reference | undefined {
    return this.onBehalfOfReference;
  }

  /** Sets `onBehalfOf[x]` as Reference and clears every other type of it. */
  setOnBehalfOfReference(onBehalfOfReference: Reference | undefined): this {
    return this.setFieldValue('onBehalfOfReference', onBehalfOfReference);
  }

  hasOnBehalfOfReference(): boolean {
    return this.hasFieldValue('onBehalfOfReference');
  }

  /** Type of relationship between agents (0..1) Created when absent. */
  getRelatedAgentType(): CodeableConcept {
    if (this.relatedAgentType === undefined) {
      this.relatedAgentType = new CodeableConcept();
    }
    return this.relatedAgentType;
  }

  setRelatedAgentType(relatedAgentType: CodeableConcept | undefined): this {
    return this.setFieldValue('relatedAgentType', relatedAgentType);
  }

  hasRelatedAgentType(): boolean {
    return this.hasFieldValue('relatedAgentType');
  }
}

modelTypeRegistry.register('ProvenanceAgent', ProvenanceAgent, false);

/**
 * An entity used in this activity
 */
export class ProvenanceEntity extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'role',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'role', typeCode: 'code', allowedCodes: valueSetCodes.ProvenanceEntityRole },
      ],
    },
    {
      elementName: 'what',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'whatUri', typeCode: 'uri' },
        { jsonKey: 'whatReference', typeCode: 'Reference' },
        { jsonKey: 'whatIdentifier', typeCode: 'Identifier' },
      ],
    },
    {
      elementName: 'agent',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'agent', typeCode: 'ProvenanceAgent' }],
    },
  ];

  /** derivation | revision | quotation | source | removal (1..1) */
  role?: valueSetCodes.ProvenanceEntityRole;
  /** Id and extensions of the primitive `role`. */
  _role?: Element;

  /** Identity of entity (1..1) */
  whatUri?: string;
  /** Id and extensions of the primitive `whatUri`. */
  _whatUri?: Element;
  /** Identity of entity (1..1) */
  whatReference?: Reference;
  /** Identity of entity (1..1) */
  whatIdentifier?: Identifier;

  /** Entity is attributed to this agent (0..*) */
  agent?: ProvenanceAgent[];

  override fhirType(): string {
    return 'Provenance.entity';
  }

  /** FHIR JSON for this ProvenanceEntity, typed as the plain `ProvenanceEntity` data type. */
  override toJSON(): plainTypes.ProvenanceEntity {
    return this.serialize() as plainTypes.ProvenanceEntity;
  }

  /** derivation | revision | quotation | source | removal (1..1) */
  getRole(): valueSetCodes.ProvenanceEntityRole | undefined {
    return this.role;
  }

  /** Sets `role`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setRole(role: valueSetCodes.ProvenanceEntityRole | undefined): this {
    return this.setFieldValue('role', role);
  }

  hasRole(): boolean {
    return this.hasFieldValue('role');
  }

  /** The element carrying the id and extensions of `role`. Created when absent. */
  getRoleElement(): Element {
    if (this._role === undefined) {
      this._role = new Element();
    }
    return this._role;
  }

  setRoleElement(roleElement: Element | undefined): this {
    this._role = roleElement;
    return this;
  }

  /** Identity of entity (1..1) Whichever type of `what[x]` is set. */
  getWhat(): string | Reference | Identifier | undefined {
    return this.getChoiceValue<string | Reference | Identifier>('what');
  }

  /** True when any type of `what[x]` is set. */
  hasWhat(): boolean {
    return this.hasChoiceValue('what');
  }

  getWhatUri(): string | undefined {
    return this.whatUri;
  }

  /** Sets `what[x]` as uri and clears every other type of it. */
  setWhatUri(whatUri: string | undefined): this {
    return this.setFieldValue('whatUri', whatUri);
  }

  hasWhatUri(): boolean {
    return this.hasFieldValue('whatUri');
  }

  getWhatReference(): Reference | undefined {
    return this.whatReference;
  }

  /** Sets `what[x]` as Reference and clears every other type of it. */
  setWhatReference(whatReference: Reference | undefined): this {
    return this.setFieldValue('whatReference', whatReference);
  }

  hasWhatReference(): boolean {
    return this.hasFieldValue('whatReference');
  }

  getWhatIdentifier(): Identifier | undefined {
    return this.whatIdentifier;
  }

  /** Sets `what[x]` as Identifier and clears every other type of it. */
  setWhatIdentifier(whatIdentifier: Identifier | undefined): this {
    return this.setFieldValue('whatIdentifier', whatIdentifier);
  }

  hasWhatIdentifier(): boolean {
    return this.hasFieldValue('whatIdentifier');
  }

  /** Entity is attributed to this agent (0..*) Never undefined; an empty list is created when absent. */
  getAgent(): ProvenanceAgent[] {
    if (this.agent === undefined) {
      this.agent = [];
    }
    return this.agent;
  }

  setAgent(agent: ProvenanceAgent[] | undefined): this {
    return this.setFieldValue('agent', agent);
  }

  hasAgent(): boolean {
    return this.hasFieldValue('agent');
  }

  /** Appends a new, empty ProvenanceAgent to `agent` and returns it so it can be filled in. */
  addAgent(): ProvenanceAgent;
  /** Appends the given ProvenanceAgent to `agent` and returns this object for chaining. */
  addAgent(provenanceAgent: ProvenanceAgent): this;
  addAgent(provenanceAgent?: ProvenanceAgent): ProvenanceAgent | this {
    if (provenanceAgent !== undefined) {
      return this.addFieldValue('agent', provenanceAgent);
    }
    const createdProvenanceAgent = new ProvenanceAgent();
    this.addFieldValue('agent', createdProvenanceAgent);
    return createdProvenanceAgent;
  }

  /** The first ProvenanceAgent of `agent`. One is added when the list is empty. */
  getAgentFirstRep(): ProvenanceAgent {
    const firstProvenanceAgent = this.getAgent()[0];
    return firstProvenanceAgent === undefined ? this.addAgent() : firstProvenanceAgent;
  }
}

modelTypeRegistry.register('ProvenanceEntity', ProvenanceEntity, false);
