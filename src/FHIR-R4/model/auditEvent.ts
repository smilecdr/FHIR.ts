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
import { Coding } from './coding';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Period } from './period';
import { Reference } from './reference';

/**
 * A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.
 */
export class AuditEvent extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'Coding' }],
    },
    {
      elementName: 'subtype',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'subtype', typeCode: 'Coding' }],
    },
    {
      elementName: 'action',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'action', typeCode: 'code', allowedCodes: valueSetCodes.AuditEventAction },
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
      elementName: 'recorded',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'recorded', typeCode: 'instant' }],
    },
    {
      elementName: 'outcome',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'outcome', typeCode: 'code', allowedCodes: valueSetCodes.AuditEventOutcome },
      ],
    },
    {
      elementName: 'outcomeDesc',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'outcomeDesc', typeCode: 'string' }],
    },
    {
      elementName: 'purposeOfEvent',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'purposeOfEvent', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'agent',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'agent', typeCode: 'AuditEventAgent' }],
    },
    {
      elementName: 'source',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'source', typeCode: 'AuditEventSource' }],
    },
    {
      elementName: 'entity',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'entity', typeCode: 'AuditEventEntity' }],
    },
  ];

  readonly resourceType = 'AuditEvent';

  /** Type/identifier of event (1..1) */
  type?: Coding;

  /** More specific type/id for the event (0..*) */
  subtype?: Coding[];

  /** Type of action performed during the event (0..1) */
  action?: valueSetCodes.AuditEventAction;
  /** Id and extensions of the primitive `action`. */
  _action?: Element;

  /** When the activity occurred (0..1) */
  period?: Period;

  /** Time when the event was recorded (1..1) */
  recorded?: string;
  /** Id and extensions of the primitive `recorded`. */
  _recorded?: Element;

  /** Whether the event succeeded or failed (0..1) */
  outcome?: valueSetCodes.AuditEventOutcome;
  /** Id and extensions of the primitive `outcome`. */
  _outcome?: Element;

  /** Description of the event outcome (0..1) */
  outcomeDesc?: string;
  /** Id and extensions of the primitive `outcomeDesc`. */
  _outcomeDesc?: Element;

  /** The purposeOfUse of the event (0..*) */
  purposeOfEvent?: CodeableConcept[];

  /** Actor involved in the event (1..*) */
  agent?: AuditEventAgent[];

  /** Audit Event Reporter (1..1) */
  source?: AuditEventSource;

  /** Data or objects used (0..*) */
  entity?: AuditEventEntity[];

  override fhirType(): string {
    return 'AuditEvent';
  }

  /** FHIR JSON for this AuditEvent, typed as the plain `AuditEvent` data type. */
  override toJSON(): plainTypes.AuditEvent {
    return this.serialize() as plainTypes.AuditEvent;
  }

  /** Type/identifier of event (1..1) Created when absent. */
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

  /** More specific type/id for the event (0..*) Never undefined; an empty list is created when absent. */
  getSubtype(): Coding[] {
    if (this.subtype === undefined) {
      this.subtype = [];
    }
    return this.subtype;
  }

  setSubtype(subtype: Coding[] | undefined): this {
    return this.setFieldValue('subtype', subtype);
  }

  hasSubtype(): boolean {
    return this.hasFieldValue('subtype');
  }

  /** Appends a new, empty Coding to `subtype` and returns it so it can be filled in. */
  addSubtype(): Coding;
  /** Appends the given Coding to `subtype` and returns this object for chaining. */
  addSubtype(coding: Coding): this;
  addSubtype(coding?: Coding): Coding | this {
    if (coding !== undefined) {
      return this.addFieldValue('subtype', coding);
    }
    const createdCoding = new Coding();
    this.addFieldValue('subtype', createdCoding);
    return createdCoding;
  }

  /** The first Coding of `subtype`. One is added when the list is empty. */
  getSubtypeFirstRep(): Coding {
    const firstCoding = this.getSubtype()[0];
    return firstCoding === undefined ? this.addSubtype() : firstCoding;
  }

  /** Type of action performed during the event (0..1) */
  getAction(): valueSetCodes.AuditEventAction | undefined {
    return this.action;
  }

  /** Sets `action`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setAction(action: valueSetCodes.AuditEventAction | undefined): this {
    return this.setFieldValue('action', action);
  }

  hasAction(): boolean {
    return this.hasFieldValue('action');
  }

  /** The element carrying the id and extensions of `action`. Created when absent. */
  getActionElement(): Element {
    if (this._action === undefined) {
      this._action = new Element();
    }
    return this._action;
  }

  setActionElement(actionElement: Element | undefined): this {
    this._action = actionElement;
    return this;
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

  /** Time when the event was recorded (1..1) */
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

  /** Whether the event succeeded or failed (0..1) */
  getOutcome(): valueSetCodes.AuditEventOutcome | undefined {
    return this.outcome;
  }

  /** Sets `outcome`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setOutcome(outcome: valueSetCodes.AuditEventOutcome | undefined): this {
    return this.setFieldValue('outcome', outcome);
  }

  hasOutcome(): boolean {
    return this.hasFieldValue('outcome');
  }

  /** The element carrying the id and extensions of `outcome`. Created when absent. */
  getOutcomeElement(): Element {
    if (this._outcome === undefined) {
      this._outcome = new Element();
    }
    return this._outcome;
  }

  setOutcomeElement(outcomeElement: Element | undefined): this {
    this._outcome = outcomeElement;
    return this;
  }

  /** Description of the event outcome (0..1) */
  getOutcomeDesc(): string | undefined {
    return this.outcomeDesc;
  }

  /** Sets `outcomeDesc`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setOutcomeDesc(outcomeDesc: string | undefined): this {
    return this.setFieldValue('outcomeDesc', outcomeDesc);
  }

  hasOutcomeDesc(): boolean {
    return this.hasFieldValue('outcomeDesc');
  }

  /** The element carrying the id and extensions of `outcomeDesc`. Created when absent. */
  getOutcomeDescElement(): Element {
    if (this._outcomeDesc === undefined) {
      this._outcomeDesc = new Element();
    }
    return this._outcomeDesc;
  }

  setOutcomeDescElement(outcomeDescElement: Element | undefined): this {
    this._outcomeDesc = outcomeDescElement;
    return this;
  }

  /** The purposeOfUse of the event (0..*) Never undefined; an empty list is created when absent. */
  getPurposeOfEvent(): CodeableConcept[] {
    if (this.purposeOfEvent === undefined) {
      this.purposeOfEvent = [];
    }
    return this.purposeOfEvent;
  }

  setPurposeOfEvent(purposeOfEvent: CodeableConcept[] | undefined): this {
    return this.setFieldValue('purposeOfEvent', purposeOfEvent);
  }

  hasPurposeOfEvent(): boolean {
    return this.hasFieldValue('purposeOfEvent');
  }

  /** Appends a new, empty CodeableConcept to `purposeOfEvent` and returns it so it can be filled in. */
  addPurposeOfEvent(): CodeableConcept;
  /** Appends the given CodeableConcept to `purposeOfEvent` and returns this object for chaining. */
  addPurposeOfEvent(codeableConcept: CodeableConcept): this;
  addPurposeOfEvent(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('purposeOfEvent', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('purposeOfEvent', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `purposeOfEvent`. One is added when the list is empty. */
  getPurposeOfEventFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getPurposeOfEvent()[0];
    return firstCodeableConcept === undefined ? this.addPurposeOfEvent() : firstCodeableConcept;
  }

  /** Actor involved in the event (1..*) Never undefined; an empty list is created when absent. */
  getAgent(): AuditEventAgent[] {
    if (this.agent === undefined) {
      this.agent = [];
    }
    return this.agent;
  }

  setAgent(agent: AuditEventAgent[] | undefined): this {
    return this.setFieldValue('agent', agent);
  }

  hasAgent(): boolean {
    return this.hasFieldValue('agent');
  }

  /** Appends a new, empty AuditEventAgent to `agent` and returns it so it can be filled in. */
  addAgent(): AuditEventAgent;
  /** Appends the given AuditEventAgent to `agent` and returns this object for chaining. */
  addAgent(auditEventAgent: AuditEventAgent): this;
  addAgent(auditEventAgent?: AuditEventAgent): AuditEventAgent | this {
    if (auditEventAgent !== undefined) {
      return this.addFieldValue('agent', auditEventAgent);
    }
    const createdAuditEventAgent = new AuditEventAgent();
    this.addFieldValue('agent', createdAuditEventAgent);
    return createdAuditEventAgent;
  }

  /** The first AuditEventAgent of `agent`. One is added when the list is empty. */
  getAgentFirstRep(): AuditEventAgent {
    const firstAuditEventAgent = this.getAgent()[0];
    return firstAuditEventAgent === undefined ? this.addAgent() : firstAuditEventAgent;
  }

  /** Audit Event Reporter (1..1) Created when absent. */
  getSource(): AuditEventSource {
    if (this.source === undefined) {
      this.source = new AuditEventSource();
    }
    return this.source;
  }

  setSource(source: AuditEventSource | undefined): this {
    return this.setFieldValue('source', source);
  }

  hasSource(): boolean {
    return this.hasFieldValue('source');
  }

  /** Data or objects used (0..*) Never undefined; an empty list is created when absent. */
  getEntity(): AuditEventEntity[] {
    if (this.entity === undefined) {
      this.entity = [];
    }
    return this.entity;
  }

  setEntity(entity: AuditEventEntity[] | undefined): this {
    return this.setFieldValue('entity', entity);
  }

  hasEntity(): boolean {
    return this.hasFieldValue('entity');
  }

  /** Appends a new, empty AuditEventEntity to `entity` and returns it so it can be filled in. */
  addEntity(): AuditEventEntity;
  /** Appends the given AuditEventEntity to `entity` and returns this object for chaining. */
  addEntity(auditEventEntity: AuditEventEntity): this;
  addEntity(auditEventEntity?: AuditEventEntity): AuditEventEntity | this {
    if (auditEventEntity !== undefined) {
      return this.addFieldValue('entity', auditEventEntity);
    }
    const createdAuditEventEntity = new AuditEventEntity();
    this.addFieldValue('entity', createdAuditEventEntity);
    return createdAuditEventEntity;
  }

  /** The first AuditEventEntity of `entity`. One is added when the list is empty. */
  getEntityFirstRep(): AuditEventEntity {
    const firstAuditEventEntity = this.getEntity()[0];
    return firstAuditEventEntity === undefined ? this.addEntity() : firstAuditEventEntity;
  }
}

modelTypeRegistry.register('AuditEvent', AuditEvent, true);

/** True when the value is a AuditEvent model instance. */
export function isAuditEvent(candidate: unknown): candidate is AuditEvent {
  return candidate instanceof AuditEvent;
}

/**
 * Actor involved in the event
 */
export class AuditEventAgent extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'role',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'role', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'who',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'who',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Device',
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
      elementName: 'altId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'altId', typeCode: 'string' }],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'requestor',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'requestor', typeCode: 'boolean' }],
    },
    {
      elementName: 'location',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'location', typeCode: 'Reference', targetResourceTypes: ['Location'] }],
    },
    {
      elementName: 'policy',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'policy', typeCode: 'uri' }],
    },
    {
      elementName: 'media',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'media', typeCode: 'Coding' }],
    },
    {
      elementName: 'network',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'network', typeCode: 'AuditEventAgentNetwork' }],
    },
    {
      elementName: 'purposeOfUse',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'purposeOfUse', typeCode: 'CodeableConcept' }],
    },
  ];

  /** How agent participated (0..1) */
  type?: CodeableConcept;

  /** Agent role in the event (0..*) */
  role?: CodeableConcept[];

  /** Identifier of who (0..1) */
  who?: Reference;

  /** Alternative User identity (0..1) */
  altId?: string;
  /** Id and extensions of the primitive `altId`. */
  _altId?: Element;

  /** Human friendly name for the agent (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Whether user is initiator (1..1) */
  requestor?: boolean;
  /** Id and extensions of the primitive `requestor`. */
  _requestor?: Element;

  /** Where (0..1) */
  location?: Reference;

  /** Policy that authorized event (0..*) */
  policy?: string[];
  /** Id and extensions of the primitive `policy`. */
  _policy?: (Element | null)[];

  /** Type of media (0..1) */
  media?: Coding;

  /** Logical network location for application activity (0..1) */
  network?: AuditEventAgentNetwork;

  /** Reason given for this user (0..*) */
  purposeOfUse?: CodeableConcept[];

  override fhirType(): string {
    return 'AuditEvent.agent';
  }

  /** FHIR JSON for this AuditEventAgent, typed as the plain `AuditEventAgent` data type. */
  override toJSON(): plainTypes.AuditEventAgent {
    return this.serialize() as plainTypes.AuditEventAgent;
  }

  /** How agent participated (0..1) Created when absent. */
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

  /** Agent role in the event (0..*) Never undefined; an empty list is created when absent. */
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

  /** Identifier of who (0..1) Created when absent. */
  getWho(): Reference {
    if (this.who === undefined) {
      this.who = new Reference();
    }
    return this.who;
  }

  setWho(who: Reference | undefined): this {
    return this.setFieldValue('who', who);
  }

  hasWho(): boolean {
    return this.hasFieldValue('who');
  }

  /** Alternative User identity (0..1) */
  getAltId(): string | undefined {
    return this.altId;
  }

  /** Sets `altId`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setAltId(altId: string | undefined): this {
    return this.setFieldValue('altId', altId);
  }

  hasAltId(): boolean {
    return this.hasFieldValue('altId');
  }

  /** The element carrying the id and extensions of `altId`. Created when absent. */
  getAltIdElement(): Element {
    if (this._altId === undefined) {
      this._altId = new Element();
    }
    return this._altId;
  }

  setAltIdElement(altIdElement: Element | undefined): this {
    this._altId = altIdElement;
    return this;
  }

  /** Human friendly name for the agent (0..1) */
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

  /** Whether user is initiator (1..1) */
  getRequestor(): boolean | undefined {
    return this.requestor;
  }

  /** Sets `requestor`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setRequestor(requestor: boolean | undefined): this {
    return this.setFieldValue('requestor', requestor);
  }

  hasRequestor(): boolean {
    return this.hasFieldValue('requestor');
  }

  /** The element carrying the id and extensions of `requestor`. Created when absent. */
  getRequestorElement(): Element {
    if (this._requestor === undefined) {
      this._requestor = new Element();
    }
    return this._requestor;
  }

  setRequestorElement(requestorElement: Element | undefined): this {
    this._requestor = requestorElement;
    return this;
  }

  /** Where (0..1) Created when absent. */
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

  /** Policy that authorized event (0..*) Never undefined; an empty list is created when absent. */
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

  /** Type of media (0..1) Created when absent. */
  getMedia(): Coding {
    if (this.media === undefined) {
      this.media = new Coding();
    }
    return this.media;
  }

  setMedia(media: Coding | undefined): this {
    return this.setFieldValue('media', media);
  }

  hasMedia(): boolean {
    return this.hasFieldValue('media');
  }

  /** Logical network location for application activity (0..1) Created when absent. */
  getNetwork(): AuditEventAgentNetwork {
    if (this.network === undefined) {
      this.network = new AuditEventAgentNetwork();
    }
    return this.network;
  }

  setNetwork(network: AuditEventAgentNetwork | undefined): this {
    return this.setFieldValue('network', network);
  }

  hasNetwork(): boolean {
    return this.hasFieldValue('network');
  }

  /** Reason given for this user (0..*) Never undefined; an empty list is created when absent. */
  getPurposeOfUse(): CodeableConcept[] {
    if (this.purposeOfUse === undefined) {
      this.purposeOfUse = [];
    }
    return this.purposeOfUse;
  }

  setPurposeOfUse(purposeOfUse: CodeableConcept[] | undefined): this {
    return this.setFieldValue('purposeOfUse', purposeOfUse);
  }

  hasPurposeOfUse(): boolean {
    return this.hasFieldValue('purposeOfUse');
  }

  /** Appends a new, empty CodeableConcept to `purposeOfUse` and returns it so it can be filled in. */
  addPurposeOfUse(): CodeableConcept;
  /** Appends the given CodeableConcept to `purposeOfUse` and returns this object for chaining. */
  addPurposeOfUse(codeableConcept: CodeableConcept): this;
  addPurposeOfUse(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('purposeOfUse', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('purposeOfUse', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `purposeOfUse`. One is added when the list is empty. */
  getPurposeOfUseFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getPurposeOfUse()[0];
    return firstCodeableConcept === undefined ? this.addPurposeOfUse() : firstCodeableConcept;
  }
}

modelTypeRegistry.register('AuditEventAgent', AuditEventAgent, false);

/**
 * Logical network location for application activity
 */
export class AuditEventAgentNetwork extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'address',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'address', typeCode: 'string' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'type',
          typeCode: 'code',
          allowedCodes: valueSetCodes.AuditEventAgentNetworkType,
        },
      ],
    },
  ];

  /** Identifier for the network access point of the user device (0..1) */
  address?: string;
  /** Id and extensions of the primitive `address`. */
  _address?: Element;

  /** The type of network access point (0..1) */
  type?: valueSetCodes.AuditEventAgentNetworkType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  override fhirType(): string {
    return 'AuditEvent.agent.network';
  }

  /** FHIR JSON for this AuditEventAgentNetwork, typed as the plain `AuditEventNetwork` data type. */
  override toJSON(): plainTypes.AuditEventNetwork {
    return this.serialize() as plainTypes.AuditEventNetwork;
  }

  /** Identifier for the network access point of the user device (0..1) */
  getAddress(): string | undefined {
    return this.address;
  }

  /** Sets `address`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setAddress(address: string | undefined): this {
    return this.setFieldValue('address', address);
  }

  hasAddress(): boolean {
    return this.hasFieldValue('address');
  }

  /** The element carrying the id and extensions of `address`. Created when absent. */
  getAddressElement(): Element {
    if (this._address === undefined) {
      this._address = new Element();
    }
    return this._address;
  }

  setAddressElement(addressElement: Element | undefined): this {
    this._address = addressElement;
    return this;
  }

  /** The type of network access point (0..1) */
  getType(): valueSetCodes.AuditEventAgentNetworkType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.AuditEventAgentNetworkType | undefined): this {
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
}

modelTypeRegistry.register('AuditEventAgentNetwork', AuditEventAgentNetwork, false);

/**
 * Audit Event Reporter
 */
export class AuditEventSource extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'site',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'site', typeCode: 'string' }],
    },
    {
      elementName: 'observer',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'observer',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Device',
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
      elementName: 'type',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'type', typeCode: 'Coding' }],
    },
  ];

  /** Logical source location within the enterprise (0..1) */
  site?: string;
  /** Id and extensions of the primitive `site`. */
  _site?: Element;

  /** The identity of source detecting the event (1..1) */
  observer?: Reference;

  /** The type of source where event originated (0..*) */
  type?: Coding[];

  override fhirType(): string {
    return 'AuditEvent.source';
  }

  /** FHIR JSON for this AuditEventSource, typed as the plain `AuditEventSource` data type. */
  override toJSON(): plainTypes.AuditEventSource {
    return this.serialize() as plainTypes.AuditEventSource;
  }

  /** Logical source location within the enterprise (0..1) */
  getSite(): string | undefined {
    return this.site;
  }

  /** Sets `site`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setSite(site: string | undefined): this {
    return this.setFieldValue('site', site);
  }

  hasSite(): boolean {
    return this.hasFieldValue('site');
  }

  /** The element carrying the id and extensions of `site`. Created when absent. */
  getSiteElement(): Element {
    if (this._site === undefined) {
      this._site = new Element();
    }
    return this._site;
  }

  setSiteElement(siteElement: Element | undefined): this {
    this._site = siteElement;
    return this;
  }

  /** The identity of source detecting the event (1..1) Created when absent. */
  getObserver(): Reference {
    if (this.observer === undefined) {
      this.observer = new Reference();
    }
    return this.observer;
  }

  setObserver(observer: Reference | undefined): this {
    return this.setFieldValue('observer', observer);
  }

  hasObserver(): boolean {
    return this.hasFieldValue('observer');
  }

  /** The type of source where event originated (0..*) Never undefined; an empty list is created when absent. */
  getType(): Coding[] {
    if (this.type === undefined) {
      this.type = [];
    }
    return this.type;
  }

  setType(type: Coding[] | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Appends a new, empty Coding to `type` and returns it so it can be filled in. */
  addType(): Coding;
  /** Appends the given Coding to `type` and returns this object for chaining. */
  addType(coding: Coding): this;
  addType(coding?: Coding): Coding | this {
    if (coding !== undefined) {
      return this.addFieldValue('type', coding);
    }
    const createdCoding = new Coding();
    this.addFieldValue('type', createdCoding);
    return createdCoding;
  }

  /** The first Coding of `type`. One is added when the list is empty. */
  getTypeFirstRep(): Coding {
    const firstCoding = this.getType()[0];
    return firstCoding === undefined ? this.addType() : firstCoding;
  }
}

modelTypeRegistry.register('AuditEventSource', AuditEventSource, false);

/**
 * Data or objects used
 */
export class AuditEventEntity extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'what',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'what', typeCode: 'Reference' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'Coding' }],
    },
    {
      elementName: 'role',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'role', typeCode: 'Coding' }],
    },
    {
      elementName: 'lifecycle',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'lifecycle', typeCode: 'Coding' }],
    },
    {
      elementName: 'securityLabel',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'securityLabel', typeCode: 'Coding' }],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'query',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'query', typeCode: 'base64Binary' }],
    },
    {
      elementName: 'detail',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'detail', typeCode: 'AuditEventEntityDetail' }],
    },
  ];

  /** Specific instance of resource (0..1) */
  what?: Reference;

  /** Type of entity involved (0..1) */
  type?: Coding;

  /** What role the entity played (0..1) */
  role?: Coding;

  /** Life-cycle stage for the entity (0..1) */
  lifecycle?: Coding;

  /** Security labels on the entity (0..*) */
  securityLabel?: Coding[];

  /** Descriptor for entity (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Descriptive text (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Query parameters (0..1) */
  query?: string;
  /** Id and extensions of the primitive `query`. */
  _query?: Element;

  /** Additional Information about the entity (0..*) */
  detail?: AuditEventEntityDetail[];

  override fhirType(): string {
    return 'AuditEvent.entity';
  }

  /** FHIR JSON for this AuditEventEntity, typed as the plain `AuditEventEntity` data type. */
  override toJSON(): plainTypes.AuditEventEntity {
    return this.serialize() as plainTypes.AuditEventEntity;
  }

  /** Specific instance of resource (0..1) Created when absent. */
  getWhat(): Reference {
    if (this.what === undefined) {
      this.what = new Reference();
    }
    return this.what;
  }

  setWhat(what: Reference | undefined): this {
    return this.setFieldValue('what', what);
  }

  hasWhat(): boolean {
    return this.hasFieldValue('what');
  }

  /** Type of entity involved (0..1) Created when absent. */
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

  /** What role the entity played (0..1) Created when absent. */
  getRole(): Coding {
    if (this.role === undefined) {
      this.role = new Coding();
    }
    return this.role;
  }

  setRole(role: Coding | undefined): this {
    return this.setFieldValue('role', role);
  }

  hasRole(): boolean {
    return this.hasFieldValue('role');
  }

  /** Life-cycle stage for the entity (0..1) Created when absent. */
  getLifecycle(): Coding {
    if (this.lifecycle === undefined) {
      this.lifecycle = new Coding();
    }
    return this.lifecycle;
  }

  setLifecycle(lifecycle: Coding | undefined): this {
    return this.setFieldValue('lifecycle', lifecycle);
  }

  hasLifecycle(): boolean {
    return this.hasFieldValue('lifecycle');
  }

  /** Security labels on the entity (0..*) Never undefined; an empty list is created when absent. */
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

  /** Descriptor for entity (0..1) */
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

  /** Descriptive text (0..1) */
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

  /** Query parameters (0..1) */
  getQuery(): string | undefined {
    return this.query;
  }

  /** Sets `query`. Throws a FhirModelError when the value is not a valid FHIR base64Binary. */
  setQuery(query: string | undefined): this {
    return this.setFieldValue('query', query);
  }

  hasQuery(): boolean {
    return this.hasFieldValue('query');
  }

  /** The element carrying the id and extensions of `query`. Created when absent. */
  getQueryElement(): Element {
    if (this._query === undefined) {
      this._query = new Element();
    }
    return this._query;
  }

  setQueryElement(queryElement: Element | undefined): this {
    this._query = queryElement;
    return this;
  }

  /** Additional Information about the entity (0..*) Never undefined; an empty list is created when absent. */
  getDetail(): AuditEventEntityDetail[] {
    if (this.detail === undefined) {
      this.detail = [];
    }
    return this.detail;
  }

  setDetail(detail: AuditEventEntityDetail[] | undefined): this {
    return this.setFieldValue('detail', detail);
  }

  hasDetail(): boolean {
    return this.hasFieldValue('detail');
  }

  /** Appends a new, empty AuditEventEntityDetail to `detail` and returns it so it can be filled in. */
  addDetail(): AuditEventEntityDetail;
  /** Appends the given AuditEventEntityDetail to `detail` and returns this object for chaining. */
  addDetail(auditEventEntityDetail: AuditEventEntityDetail): this;
  addDetail(auditEventEntityDetail?: AuditEventEntityDetail): AuditEventEntityDetail | this {
    if (auditEventEntityDetail !== undefined) {
      return this.addFieldValue('detail', auditEventEntityDetail);
    }
    const createdAuditEventEntityDetail = new AuditEventEntityDetail();
    this.addFieldValue('detail', createdAuditEventEntityDetail);
    return createdAuditEventEntityDetail;
  }

  /** The first AuditEventEntityDetail of `detail`. One is added when the list is empty. */
  getDetailFirstRep(): AuditEventEntityDetail {
    const firstAuditEventEntityDetail = this.getDetail()[0];
    return firstAuditEventEntityDetail === undefined
      ? this.addDetail()
      : firstAuditEventEntityDetail;
  }
}

modelTypeRegistry.register('AuditEventEntity', AuditEventEntity, false);

/**
 * Additional Information about the entity
 */
export class AuditEventEntityDetail extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'string' }],
    },
    {
      elementName: 'value',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'valueString', typeCode: 'string' },
        { jsonKey: 'valueBase64Binary', typeCode: 'base64Binary' },
      ],
    },
  ];

  /** Name of the property (1..1) */
  type?: string;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Property value (1..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Property value (1..1) */
  valueBase64Binary?: string;
  /** Id and extensions of the primitive `valueBase64Binary`. */
  _valueBase64Binary?: Element;

  override fhirType(): string {
    return 'AuditEvent.entity.detail';
  }

  /** FHIR JSON for this AuditEventEntityDetail, typed as the plain `AuditEventDetail` data type. */
  override toJSON(): plainTypes.AuditEventDetail {
    return this.serialize() as plainTypes.AuditEventDetail;
  }

  /** Name of the property (1..1) */
  getType(): string | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setType(type: string | undefined): this {
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

  /** Property value (1..1) Whichever type of `value[x]` is set. */
  getValue(): string | undefined {
    return this.getChoiceValue<string>('value');
  }

  /** True when any type of `value[x]` is set. */
  hasValue(): boolean {
    return this.hasChoiceValue('value');
  }

  getValueString(): string | undefined {
    return this.valueString;
  }

  /** Sets `value[x]` as string and clears every other type of it. */
  setValueString(valueString: string | undefined): this {
    return this.setFieldValue('valueString', valueString);
  }

  hasValueString(): boolean {
    return this.hasFieldValue('valueString');
  }

  getValueBase64Binary(): string | undefined {
    return this.valueBase64Binary;
  }

  /** Sets `value[x]` as base64Binary and clears every other type of it. */
  setValueBase64Binary(valueBase64Binary: string | undefined): this {
    return this.setFieldValue('valueBase64Binary', valueBase64Binary);
  }

  hasValueBase64Binary(): boolean {
    return this.hasFieldValue('valueBase64Binary');
  }
}

modelTypeRegistry.register('AuditEventEntityDetail', AuditEventEntityDetail, false);
