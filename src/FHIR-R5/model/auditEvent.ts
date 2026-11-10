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
import { Coding } from './coding';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Period } from './period';
import { Quantity } from './quantity';
import { Range } from './range';
import { Ratio } from './ratio';
import { Reference } from './reference';

/**
 * A record of an event relevant for purposes such as operations, privacy, security, maintenance, and performance analysis.
 */
export class AuditEvent extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'category',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
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
      elementName: 'severity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'severity', typeCode: 'code', allowedCodes: valueSetCodes.AuditEventSeverity },
      ],
    },
    {
      elementName: 'occurred',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'occurredPeriod', typeCode: 'Period' },
        { jsonKey: 'occurredDateTime', typeCode: 'dateTime' },
      ],
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
      types: [{ jsonKey: 'outcome', typeCode: 'AuditEventOutcome' }],
    },
    {
      elementName: 'authorization',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'authorization', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'basedOn',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'basedOn',
          typeCode: 'Reference',
          targetResourceTypes: [
            'CarePlan',
            'DeviceRequest',
            'ImmunizationRecommendation',
            'MedicationRequest',
            'NutritionOrder',
            'ServiceRequest',
            'Task',
          ],
        },
      ],
    },
    {
      elementName: 'patient',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'patient', typeCode: 'Reference', targetResourceTypes: ['Patient'] }],
    },
    {
      elementName: 'encounter',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'encounter', typeCode: 'Reference', targetResourceTypes: ['Encounter'] }],
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

  /** Type/identifier of event (0..*) */
  category?: CodeableConcept[];

  /** Specific type of event (1..1) */
  code?: CodeableConcept;

  /** Type of action performed during the event (0..1) */
  action?: valueSetCodes.AuditEventAction;
  /** Id and extensions of the primitive `action`. */
  _action?: Element;

  /** emergency | alert | critical | error | warning | notice | informational | debug (0..1) */
  severity?: valueSetCodes.AuditEventSeverity;
  /** Id and extensions of the primitive `severity`. */
  _severity?: Element;

  /** When the activity occurred (0..1) */
  occurredPeriod?: Period;
  /** When the activity occurred (0..1) */
  occurredDateTime?: string;
  /** Id and extensions of the primitive `occurredDateTime`. */
  _occurredDateTime?: Element;

  /** Time when the event was recorded (1..1) */
  recorded?: string;
  /** Id and extensions of the primitive `recorded`. */
  _recorded?: Element;

  /** Whether the event succeeded or failed (0..1) */
  outcome?: AuditEventOutcome;

  /** Authorization related to the event (0..*) */
  authorization?: CodeableConcept[];

  /** Workflow authorization within which this event occurred (0..*) */
  basedOn?: Reference[];

  /** The patient is the subject of the data used/created/updated/deleted during the activity (0..1) */
  patient?: Reference;

  /** Encounter within which this event occurred or which the event is tightly associated (0..1) */
  encounter?: Reference;

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

  /** Type/identifier of event (0..*) Never undefined; an empty list is created when absent. */
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

  /** Specific type of event (1..1) Created when absent. */
  getCode(): CodeableConcept {
    if (this.code === undefined) {
      this.code = new CodeableConcept();
    }
    return this.code;
  }

  setCode(code: CodeableConcept | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
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

  /** emergency | alert | critical | error | warning | notice | informational | debug (0..1) */
  getSeverity(): valueSetCodes.AuditEventSeverity | undefined {
    return this.severity;
  }

  /** Sets `severity`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setSeverity(severity: valueSetCodes.AuditEventSeverity | undefined): this {
    return this.setFieldValue('severity', severity);
  }

  hasSeverity(): boolean {
    return this.hasFieldValue('severity');
  }

  /** The element carrying the id and extensions of `severity`. Created when absent. */
  getSeverityElement(): Element {
    if (this._severity === undefined) {
      this._severity = new Element();
    }
    return this._severity;
  }

  setSeverityElement(severityElement: Element | undefined): this {
    this._severity = severityElement;
    return this;
  }

  /** When the activity occurred (0..1) Whichever type of `occurred[x]` is set. */
  getOccurred(): Period | string | undefined {
    return this.getChoiceValue<Period | string>('occurred');
  }

  /** True when any type of `occurred[x]` is set. */
  hasOccurred(): boolean {
    return this.hasChoiceValue('occurred');
  }

  getOccurredPeriod(): Period | undefined {
    return this.occurredPeriod;
  }

  /** Sets `occurred[x]` as Period and clears every other type of it. */
  setOccurredPeriod(occurredPeriod: Period | undefined): this {
    return this.setFieldValue('occurredPeriod', occurredPeriod);
  }

  hasOccurredPeriod(): boolean {
    return this.hasFieldValue('occurredPeriod');
  }

  getOccurredDateTime(): string | undefined {
    return this.occurredDateTime;
  }

  /** Sets `occurred[x]` as dateTime and clears every other type of it. */
  setOccurredDateTime(occurredDateTime: string | undefined): this {
    return this.setFieldValue('occurredDateTime', occurredDateTime);
  }

  hasOccurredDateTime(): boolean {
    return this.hasFieldValue('occurredDateTime');
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

  /** Whether the event succeeded or failed (0..1) Created when absent. */
  getOutcome(): AuditEventOutcome {
    if (this.outcome === undefined) {
      this.outcome = new AuditEventOutcome();
    }
    return this.outcome;
  }

  setOutcome(outcome: AuditEventOutcome | undefined): this {
    return this.setFieldValue('outcome', outcome);
  }

  hasOutcome(): boolean {
    return this.hasFieldValue('outcome');
  }

  /** Authorization related to the event (0..*) Never undefined; an empty list is created when absent. */
  getAuthorization(): CodeableConcept[] {
    if (this.authorization === undefined) {
      this.authorization = [];
    }
    return this.authorization;
  }

  setAuthorization(authorization: CodeableConcept[] | undefined): this {
    return this.setFieldValue('authorization', authorization);
  }

  hasAuthorization(): boolean {
    return this.hasFieldValue('authorization');
  }

  /** Appends a new, empty CodeableConcept to `authorization` and returns it so it can be filled in. */
  addAuthorization(): CodeableConcept;
  /** Appends the given CodeableConcept to `authorization` and returns this object for chaining. */
  addAuthorization(codeableConcept: CodeableConcept): this;
  addAuthorization(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('authorization', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('authorization', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `authorization`. One is added when the list is empty. */
  getAuthorizationFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getAuthorization()[0];
    return firstCodeableConcept === undefined ? this.addAuthorization() : firstCodeableConcept;
  }

  /** Workflow authorization within which this event occurred (0..*) Never undefined; an empty list is created when absent. */
  getBasedOn(): Reference[] {
    if (this.basedOn === undefined) {
      this.basedOn = [];
    }
    return this.basedOn;
  }

  setBasedOn(basedOn: Reference[] | undefined): this {
    return this.setFieldValue('basedOn', basedOn);
  }

  hasBasedOn(): boolean {
    return this.hasFieldValue('basedOn');
  }

  /** Appends a new, empty Reference to `basedOn` and returns it so it can be filled in. */
  addBasedOn(): Reference;
  /** Appends the given Reference to `basedOn` and returns this object for chaining. */
  addBasedOn(reference: Reference): this;
  addBasedOn(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('basedOn', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('basedOn', createdReference);
    return createdReference;
  }

  /** The first Reference of `basedOn`. One is added when the list is empty. */
  getBasedOnFirstRep(): Reference {
    const firstReference = this.getBasedOn()[0];
    return firstReference === undefined ? this.addBasedOn() : firstReference;
  }

  /** The patient is the subject of the data used/created/updated/deleted during the activity (0..1) Created when absent. */
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

  /** Encounter within which this event occurred or which the event is tightly associated (0..1) Created when absent. */
  getEncounter(): Reference {
    if (this.encounter === undefined) {
      this.encounter = new Reference();
    }
    return this.encounter;
  }

  setEncounter(encounter: Reference | undefined): this {
    return this.setFieldValue('encounter', encounter);
  }

  hasEncounter(): boolean {
    return this.hasFieldValue('encounter');
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
 * Whether the event succeeded or failed
 */
export class AuditEventOutcome extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'Coding' }],
    },
    {
      elementName: 'detail',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'detail', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Whether the event succeeded or failed (1..1) */
  code?: Coding;

  /** Additional outcome detail (0..*) */
  detail?: CodeableConcept[];

  override fhirType(): string {
    return 'AuditEvent.outcome';
  }

  /** FHIR JSON for this AuditEventOutcome, typed as the plain `AuditEventOutcome` data type. */
  override toJSON(): plainTypes.AuditEventOutcome {
    return this.serialize() as plainTypes.AuditEventOutcome;
  }

  /** Whether the event succeeded or failed (1..1) Created when absent. */
  getCode(): Coding {
    if (this.code === undefined) {
      this.code = new Coding();
    }
    return this.code;
  }

  setCode(code: Coding | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** Additional outcome detail (0..*) Never undefined; an empty list is created when absent. */
  getDetail(): CodeableConcept[] {
    if (this.detail === undefined) {
      this.detail = [];
    }
    return this.detail;
  }

  setDetail(detail: CodeableConcept[] | undefined): this {
    return this.setFieldValue('detail', detail);
  }

  hasDetail(): boolean {
    return this.hasFieldValue('detail');
  }

  /** Appends a new, empty CodeableConcept to `detail` and returns it so it can be filled in. */
  addDetail(): CodeableConcept;
  /** Appends the given CodeableConcept to `detail` and returns this object for chaining. */
  addDetail(codeableConcept: CodeableConcept): this;
  addDetail(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('detail', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('detail', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `detail`. One is added when the list is empty. */
  getDetailFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getDetail()[0];
    return firstCodeableConcept === undefined ? this.addDetail() : firstCodeableConcept;
  }
}

modelTypeRegistry.register('AuditEventOutcome', AuditEventOutcome, false);

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
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'who',
          typeCode: 'Reference',
          targetResourceTypes: [
            'CareTeam',
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
      elementName: 'requestor',
      minimum: 0,
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
      elementName: 'network',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'networkReference', typeCode: 'Reference', targetResourceTypes: ['Endpoint'] },
        { jsonKey: 'networkUri', typeCode: 'uri' },
        { jsonKey: 'networkString', typeCode: 'string' },
      ],
    },
    {
      elementName: 'authorization',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'authorization', typeCode: 'CodeableConcept' }],
    },
  ];

  /** How agent participated (0..1) */
  type?: CodeableConcept;

  /** Agent role in the event (0..*) */
  role?: CodeableConcept[];

  /** Identifier of who (1..1) */
  who?: Reference;

  /** Whether user is initiator (0..1) */
  requestor?: boolean;
  /** Id and extensions of the primitive `requestor`. */
  _requestor?: Element;

  /** The agent location when the event occurred (0..1) */
  location?: Reference;

  /** Policy that authorized the agent participation in the event (0..*) */
  policy?: string[];
  /** Id and extensions of the primitive `policy`. */
  _policy?: (Element | null)[];

  /** This agent network location for the activity (0..1) */
  networkReference?: Reference;
  /** This agent network location for the activity (0..1) */
  networkUri?: string;
  /** Id and extensions of the primitive `networkUri`. */
  _networkUri?: Element;
  /** This agent network location for the activity (0..1) */
  networkString?: string;
  /** Id and extensions of the primitive `networkString`. */
  _networkString?: Element;

  /** Allowable authorization for this agent (0..*) */
  authorization?: CodeableConcept[];

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

  /** Identifier of who (1..1) Created when absent. */
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

  /** Whether user is initiator (0..1) */
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

  /** The agent location when the event occurred (0..1) Created when absent. */
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

  /** Policy that authorized the agent participation in the event (0..*) Never undefined; an empty list is created when absent. */
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

  /** This agent network location for the activity (0..1) Whichever type of `network[x]` is set. */
  getNetwork(): Reference | string | undefined {
    return this.getChoiceValue<Reference | string>('network');
  }

  /** True when any type of `network[x]` is set. */
  hasNetwork(): boolean {
    return this.hasChoiceValue('network');
  }

  getNetworkReference(): Reference | undefined {
    return this.networkReference;
  }

  /** Sets `network[x]` as Reference and clears every other type of it. */
  setNetworkReference(networkReference: Reference | undefined): this {
    return this.setFieldValue('networkReference', networkReference);
  }

  hasNetworkReference(): boolean {
    return this.hasFieldValue('networkReference');
  }

  getNetworkUri(): string | undefined {
    return this.networkUri;
  }

  /** Sets `network[x]` as uri and clears every other type of it. */
  setNetworkUri(networkUri: string | undefined): this {
    return this.setFieldValue('networkUri', networkUri);
  }

  hasNetworkUri(): boolean {
    return this.hasFieldValue('networkUri');
  }

  getNetworkString(): string | undefined {
    return this.networkString;
  }

  /** Sets `network[x]` as string and clears every other type of it. */
  setNetworkString(networkString: string | undefined): this {
    return this.setFieldValue('networkString', networkString);
  }

  hasNetworkString(): boolean {
    return this.hasFieldValue('networkString');
  }

  /** Allowable authorization for this agent (0..*) Never undefined; an empty list is created when absent. */
  getAuthorization(): CodeableConcept[] {
    if (this.authorization === undefined) {
      this.authorization = [];
    }
    return this.authorization;
  }

  setAuthorization(authorization: CodeableConcept[] | undefined): this {
    return this.setFieldValue('authorization', authorization);
  }

  hasAuthorization(): boolean {
    return this.hasFieldValue('authorization');
  }

  /** Appends a new, empty CodeableConcept to `authorization` and returns it so it can be filled in. */
  addAuthorization(): CodeableConcept;
  /** Appends the given CodeableConcept to `authorization` and returns this object for chaining. */
  addAuthorization(codeableConcept: CodeableConcept): this;
  addAuthorization(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('authorization', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('authorization', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `authorization`. One is added when the list is empty. */
  getAuthorizationFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getAuthorization()[0];
    return firstCodeableConcept === undefined ? this.addAuthorization() : firstCodeableConcept;
  }
}

modelTypeRegistry.register('AuditEventAgent', AuditEventAgent, false);

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
      types: [{ jsonKey: 'site', typeCode: 'Reference', targetResourceTypes: ['Location'] }],
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
            'CareTeam',
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
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Logical source location within the enterprise (0..1) */
  site?: Reference;

  /** The identity of source detecting the event (1..1) */
  observer?: Reference;

  /** The type of source where event originated (0..*) */
  type?: CodeableConcept[];

  override fhirType(): string {
    return 'AuditEvent.source';
  }

  /** FHIR JSON for this AuditEventSource, typed as the plain `AuditEventSource` data type. */
  override toJSON(): plainTypes.AuditEventSource {
    return this.serialize() as plainTypes.AuditEventSource;
  }

  /** Logical source location within the enterprise (0..1) Created when absent. */
  getSite(): Reference {
    if (this.site === undefined) {
      this.site = new Reference();
    }
    return this.site;
  }

  setSite(site: Reference | undefined): this {
    return this.setFieldValue('site', site);
  }

  hasSite(): boolean {
    return this.hasFieldValue('site');
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
      elementName: 'role',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'role', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'securityLabel',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'securityLabel', typeCode: 'CodeableConcept' }],
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
    {
      elementName: 'agent',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'agent', typeCode: 'AuditEventAgent' }],
    },
  ];

  /** Specific instance of resource (0..1) */
  what?: Reference;

  /** What role the entity played (0..1) */
  role?: CodeableConcept;

  /** Security labels on the entity (0..*) */
  securityLabel?: CodeableConcept[];

  /** Query parameters (0..1) */
  query?: string;
  /** Id and extensions of the primitive `query`. */
  _query?: Element;

  /** Additional Information about the entity (0..*) */
  detail?: AuditEventEntityDetail[];

  /** Entity is attributed to this agent (0..*) */
  agent?: AuditEventAgent[];

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

  /** What role the entity played (0..1) Created when absent. */
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

  /** Security labels on the entity (0..*) Never undefined; an empty list is created when absent. */
  getSecurityLabel(): CodeableConcept[] {
    if (this.securityLabel === undefined) {
      this.securityLabel = [];
    }
    return this.securityLabel;
  }

  setSecurityLabel(securityLabel: CodeableConcept[] | undefined): this {
    return this.setFieldValue('securityLabel', securityLabel);
  }

  hasSecurityLabel(): boolean {
    return this.hasFieldValue('securityLabel');
  }

  /** Appends a new, empty CodeableConcept to `securityLabel` and returns it so it can be filled in. */
  addSecurityLabel(): CodeableConcept;
  /** Appends the given CodeableConcept to `securityLabel` and returns this object for chaining. */
  addSecurityLabel(codeableConcept: CodeableConcept): this;
  addSecurityLabel(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('securityLabel', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('securityLabel', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `securityLabel`. One is added when the list is empty. */
  getSecurityLabelFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getSecurityLabel()[0];
    return firstCodeableConcept === undefined ? this.addSecurityLabel() : firstCodeableConcept;
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

  /** Entity is attributed to this agent (0..*) Never undefined; an empty list is created when absent. */
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
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'value',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'valueQuantity', typeCode: 'Quantity' },
        { jsonKey: 'valueCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'valueString', typeCode: 'string' },
        { jsonKey: 'valueBoolean', typeCode: 'boolean' },
        { jsonKey: 'valueInteger', typeCode: 'integer' },
        { jsonKey: 'valueRange', typeCode: 'Range' },
        { jsonKey: 'valueRatio', typeCode: 'Ratio' },
        { jsonKey: 'valueTime', typeCode: 'time' },
        { jsonKey: 'valueDateTime', typeCode: 'dateTime' },
        { jsonKey: 'valuePeriod', typeCode: 'Period' },
        { jsonKey: 'valueBase64Binary', typeCode: 'base64Binary' },
      ],
    },
  ];

  /** Name of the property (1..1) */
  type?: CodeableConcept;

  /** Property value (1..1) */
  valueQuantity?: Quantity;
  /** Property value (1..1) */
  valueCodeableConcept?: CodeableConcept;
  /** Property value (1..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Property value (1..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Property value (1..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** Property value (1..1) */
  valueRange?: Range;
  /** Property value (1..1) */
  valueRatio?: Ratio;
  /** Property value (1..1) */
  valueTime?: string;
  /** Id and extensions of the primitive `valueTime`. */
  _valueTime?: Element;
  /** Property value (1..1) */
  valueDateTime?: string;
  /** Id and extensions of the primitive `valueDateTime`. */
  _valueDateTime?: Element;
  /** Property value (1..1) */
  valuePeriod?: Period;
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

  /** Name of the property (1..1) Created when absent. */
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

  /** Property value (1..1) Whichever type of `value[x]` is set. */
  getValue():
    Quantity | CodeableConcept | string | boolean | number | Range | Ratio | Period | undefined {
    return this.getChoiceValue<
      Quantity | CodeableConcept | string | boolean | number | Range | Ratio | Period
    >('value');
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

  getValueCodeableConcept(): CodeableConcept | undefined {
    return this.valueCodeableConcept;
  }

  /** Sets `value[x]` as CodeableConcept and clears every other type of it. */
  setValueCodeableConcept(valueCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('valueCodeableConcept', valueCodeableConcept);
  }

  hasValueCodeableConcept(): boolean {
    return this.hasFieldValue('valueCodeableConcept');
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

  getValueBoolean(): boolean | undefined {
    return this.valueBoolean;
  }

  /** Sets `value[x]` as boolean and clears every other type of it. */
  setValueBoolean(valueBoolean: boolean | undefined): this {
    return this.setFieldValue('valueBoolean', valueBoolean);
  }

  hasValueBoolean(): boolean {
    return this.hasFieldValue('valueBoolean');
  }

  getValueInteger(): number | undefined {
    return this.valueInteger;
  }

  /** Sets `value[x]` as integer and clears every other type of it. */
  setValueInteger(valueInteger: number | undefined): this {
    return this.setFieldValue('valueInteger', valueInteger);
  }

  hasValueInteger(): boolean {
    return this.hasFieldValue('valueInteger');
  }

  getValueRange(): Range | undefined {
    return this.valueRange;
  }

  /** Sets `value[x]` as Range and clears every other type of it. */
  setValueRange(valueRange: Range | undefined): this {
    return this.setFieldValue('valueRange', valueRange);
  }

  hasValueRange(): boolean {
    return this.hasFieldValue('valueRange');
  }

  getValueRatio(): Ratio | undefined {
    return this.valueRatio;
  }

  /** Sets `value[x]` as Ratio and clears every other type of it. */
  setValueRatio(valueRatio: Ratio | undefined): this {
    return this.setFieldValue('valueRatio', valueRatio);
  }

  hasValueRatio(): boolean {
    return this.hasFieldValue('valueRatio');
  }

  getValueTime(): string | undefined {
    return this.valueTime;
  }

  /** Sets `value[x]` as time and clears every other type of it. */
  setValueTime(valueTime: string | undefined): this {
    return this.setFieldValue('valueTime', valueTime);
  }

  hasValueTime(): boolean {
    return this.hasFieldValue('valueTime');
  }

  getValueDateTime(): string | undefined {
    return this.valueDateTime;
  }

  /** Sets `value[x]` as dateTime and clears every other type of it. */
  setValueDateTime(valueDateTime: string | undefined): this {
    return this.setFieldValue('valueDateTime', valueDateTime);
  }

  hasValueDateTime(): boolean {
    return this.hasFieldValue('valueDateTime');
  }

  getValuePeriod(): Period | undefined {
    return this.valuePeriod;
  }

  /** Sets `value[x]` as Period and clears every other type of it. */
  setValuePeriod(valuePeriod: Period | undefined): this {
    return this.setFieldValue('valuePeriod', valuePeriod);
  }

  hasValuePeriod(): boolean {
    return this.hasFieldValue('valuePeriod');
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
