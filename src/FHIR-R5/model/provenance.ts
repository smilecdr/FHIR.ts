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
import { Period } from './period';
import { Reference } from './reference';
import { Signature } from './signature';

/**
 * Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g. Document Completion - has the artifact been legally authenticated), all of which may impact security, privacy, and trust policies.
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
      minimum: 0,
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
      elementName: 'authorization',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'authorization', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'activity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'activity', typeCode: 'CodeableConcept' }],
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
  occurredPeriod?: Period;
  /** When the activity occurred (0..1) */
  occurredDateTime?: string;
  /** Id and extensions of the primitive `occurredDateTime`. */
  _occurredDateTime?: Element;

  /** When the activity was recorded / updated (0..1) */
  recorded?: string;
  /** Id and extensions of the primitive `recorded`. */
  _recorded?: Element;

  /** Policy or plan the activity was defined by (0..*) */
  policy?: string[];
  /** Id and extensions of the primitive `policy`. */
  _policy?: (Element | null)[];

  /** Where the activity occurred, if relevant (0..1) */
  location?: Reference;

  /** Authorization (purposeOfUse) related to the event (0..*) */
  authorization?: CodeableReference[];

  /** Activity that occurred (0..1) */
  activity?: CodeableConcept;

  /** Workflow authorization within which this event occurred (0..*) */
  basedOn?: Reference[];

  /** The patient is the subject of the data created/updated (.target) by the activity (0..1) */
  patient?: Reference;

  /** Encounter within which this event occurred or which the event is tightly associated (0..1) */
  encounter?: Reference;

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

  /** When the activity was recorded / updated (0..1) */
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

  /** Authorization (purposeOfUse) related to the event (0..*) Never undefined; an empty list is created when absent. */
  getAuthorization(): CodeableReference[] {
    if (this.authorization === undefined) {
      this.authorization = [];
    }
    return this.authorization;
  }

  setAuthorization(authorization: CodeableReference[] | undefined): this {
    return this.setFieldValue('authorization', authorization);
  }

  hasAuthorization(): boolean {
    return this.hasFieldValue('authorization');
  }

  /** Appends a new, empty CodeableReference to `authorization` and returns it so it can be filled in. */
  addAuthorization(): CodeableReference;
  /** Appends the given CodeableReference to `authorization` and returns this object for chaining. */
  addAuthorization(codeableReference: CodeableReference): this;
  addAuthorization(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('authorization', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('authorization', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `authorization`. One is added when the list is empty. */
  getAuthorizationFirstRep(): CodeableReference {
    const firstCodeableReference = this.getAuthorization()[0];
    return firstCodeableReference === undefined ? this.addAuthorization() : firstCodeableReference;
  }

  /** Activity that occurred (0..1) Created when absent. */
  getActivity(): CodeableConcept {
    if (this.activity === undefined) {
      this.activity = new CodeableConcept();
    }
    return this.activity;
  }

  setActivity(activity: CodeableConcept | undefined): this {
    return this.setFieldValue('activity', activity);
  }

  hasActivity(): boolean {
    return this.hasFieldValue('activity');
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

  /** The patient is the subject of the data created/updated (.target) by the activity (0..1) Created when absent. */
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
      elementName: 'onBehalfOf',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'onBehalfOf',
          typeCode: 'Reference',
          targetResourceTypes: [
            'CareTeam',
            'Organization',
            'Patient',
            'Practitioner',
            'PractitionerRole',
          ],
        },
      ],
    },
  ];

  /** How the agent participated (0..1) */
  type?: CodeableConcept;

  /** What the agents role was (0..*) */
  role?: CodeableConcept[];

  /** The agent that participated in the event (1..1) */
  who?: Reference;

  /** The agent that delegated (0..1) */
  onBehalfOf?: Reference;

  override fhirType(): string {
    return 'Provenance.agent';
  }

  /** FHIR JSON for this ProvenanceAgent, typed as the plain `ProvenanceAgent` data type. */
  override toJSON(): plainTypes.ProvenanceAgent {
    return this.serialize() as plainTypes.ProvenanceAgent;
  }

  /** How the agent participated (0..1) Created when absent. */
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

  /** The agent that participated in the event (1..1) Created when absent. */
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

  /** The agent that delegated (0..1) Created when absent. */
  getOnBehalfOf(): Reference {
    if (this.onBehalfOf === undefined) {
      this.onBehalfOf = new Reference();
    }
    return this.onBehalfOf;
  }

  setOnBehalfOf(onBehalfOf: Reference | undefined): this {
    return this.setFieldValue('onBehalfOf', onBehalfOf);
  }

  hasOnBehalfOf(): boolean {
    return this.hasFieldValue('onBehalfOf');
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
      types: [{ jsonKey: 'what', typeCode: 'Reference' }],
    },
    {
      elementName: 'agent',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'agent', typeCode: 'ProvenanceAgent' }],
    },
  ];

  /** revision | quotation | source | instantiates | removal (1..1) */
  role?: valueSetCodes.ProvenanceEntityRole;
  /** Id and extensions of the primitive `role`. */
  _role?: Element;

  /** Identity of entity (1..1) */
  what?: Reference;

  /** Entity is attributed to this agent (0..*) */
  agent?: ProvenanceAgent[];

  override fhirType(): string {
    return 'Provenance.entity';
  }

  /** FHIR JSON for this ProvenanceEntity, typed as the plain `ProvenanceEntity` data type. */
  override toJSON(): plainTypes.ProvenanceEntity {
    return this.serialize() as plainTypes.ProvenanceEntity;
  }

  /** revision | quotation | source | instantiates | removal (1..1) */
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

  /** Identity of entity (1..1) Created when absent. */
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
