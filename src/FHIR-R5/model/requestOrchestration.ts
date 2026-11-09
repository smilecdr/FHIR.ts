/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { Age } from './age';
import { Annotation } from './annotation';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { CodeableReference } from './codeableReference';
import { DataRequirement } from './dataRequirement';
import { DomainResource } from './domainResource';
import { Duration } from './duration';
import { Element } from './element';
import { Expression } from './expression';
import { Identifier } from './identifier';
import { Period } from './period';
import { Range } from './range';
import { Reference } from './reference';
import { RelatedArtifact } from './relatedArtifact';
import { Timing } from './timing';

/**
 * A set of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one".
 */
export class RequestOrchestration extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'instantiatesCanonical',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'instantiatesCanonical', typeCode: 'canonical' }],
    },
    {
      elementName: 'instantiatesUri',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'instantiatesUri', typeCode: 'uri' }],
    },
    {
      elementName: 'basedOn',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'basedOn', typeCode: 'Reference' }],
    },
    {
      elementName: 'replaces',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'replaces', typeCode: 'Reference' }],
    },
    {
      elementName: 'groupIdentifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'groupIdentifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.RequestStatus }],
    },
    {
      elementName: 'intent',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'intent', typeCode: 'code', allowedCodes: valueSetCodes.RequestIntent }],
    },
    {
      elementName: 'priority',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'priority', typeCode: 'code', allowedCodes: valueSetCodes.RequestPriority },
      ],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
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
          targetResourceTypes: [
            'CareTeam',
            'Device',
            'Group',
            'HealthcareService',
            'Location',
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
      elementName: 'encounter',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'encounter', typeCode: 'Reference', targetResourceTypes: ['Encounter'] }],
    },
    {
      elementName: 'authoredOn',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'authoredOn', typeCode: 'dateTime' }],
    },
    {
      elementName: 'author',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'author',
          typeCode: 'Reference',
          targetResourceTypes: ['Device', 'Practitioner', 'PractitionerRole'],
        },
      ],
    },
    {
      elementName: 'reason',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reason', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'goal',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'goal', typeCode: 'Reference', targetResourceTypes: ['Goal'] }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
    {
      elementName: 'action',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'action', typeCode: 'RequestOrchestrationAction' }],
    },
  ];

  readonly resourceType = 'RequestOrchestration';

  /** Business identifier (0..*) */
  identifier?: Identifier[];

  /** Instantiates FHIR protocol or definition (0..*) */
  instantiatesCanonical?: string[];
  /** Id and extensions of the primitive `instantiatesCanonical`. */
  _instantiatesCanonical?: (Element | null)[];

  /** Instantiates external protocol or definition (0..*) */
  instantiatesUri?: string[];
  /** Id and extensions of the primitive `instantiatesUri`. */
  _instantiatesUri?: (Element | null)[];

  /** Fulfills plan, proposal, or order (0..*) */
  basedOn?: Reference[];

  /** Request(s) replaced by this request (0..*) */
  replaces?: Reference[];

  /** Composite request this is part of (0..1) */
  groupIdentifier?: Identifier;

  /** draft | active | on-hold | revoked | completed | entered-in-error | unknown (1..1) */
  status?: valueSetCodes.RequestStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option (1..1) */
  intent?: valueSetCodes.RequestIntent;
  /** Id and extensions of the primitive `intent`. */
  _intent?: Element;

  /** routine | urgent | asap | stat (0..1) */
  priority?: valueSetCodes.RequestPriority;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;

  /** What's being requested/ordered (0..1) */
  code?: CodeableConcept;

  /** Who the request orchestration is about (0..1) */
  subject?: Reference;

  /** Created as part of (0..1) */
  encounter?: Reference;

  /** When the request orchestration was authored (0..1) */
  authoredOn?: string;
  /** Id and extensions of the primitive `authoredOn`. */
  _authoredOn?: Element;

  /** Device or practitioner that authored the request orchestration (0..1) */
  author?: Reference;

  /** Why the request orchestration is needed (0..*) */
  reason?: CodeableReference[];

  /** What goals (0..*) */
  goal?: Reference[];

  /** Additional notes about the response (0..*) */
  note?: Annotation[];

  /** Proposed actions, if any (0..*) */
  action?: RequestOrchestrationAction[];

  override fhirType(): string {
    return 'RequestOrchestration';
  }

  /** FHIR JSON for this RequestOrchestration, typed as the plain `RequestOrchestration` data type. */
  override toJSON(): plainTypes.RequestOrchestration {
    return this.serialize() as plainTypes.RequestOrchestration;
  }

  /** Business identifier (0..*) Never undefined; an empty list is created when absent. */
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

  /** Instantiates FHIR protocol or definition (0..*) Never undefined; an empty list is created when absent. */
  getInstantiatesCanonical(): string[] {
    if (this.instantiatesCanonical === undefined) {
      this.instantiatesCanonical = [];
    }
    return this.instantiatesCanonical;
  }

  setInstantiatesCanonical(instantiatesCanonical: string[] | undefined): this {
    return this.setFieldValue('instantiatesCanonical', instantiatesCanonical);
  }

  hasInstantiatesCanonical(): boolean {
    return this.hasFieldValue('instantiatesCanonical');
  }

  /** Appends one value to `instantiatesCanonical`. Throws a FhirModelError when it is not a valid FHIR canonical. */
  addInstantiatesCanonical(instantiatesCanonical: string): this {
    return this.addFieldValue('instantiatesCanonical', instantiatesCanonical);
  }

  /** Instantiates external protocol or definition (0..*) Never undefined; an empty list is created when absent. */
  getInstantiatesUri(): string[] {
    if (this.instantiatesUri === undefined) {
      this.instantiatesUri = [];
    }
    return this.instantiatesUri;
  }

  setInstantiatesUri(instantiatesUri: string[] | undefined): this {
    return this.setFieldValue('instantiatesUri', instantiatesUri);
  }

  hasInstantiatesUri(): boolean {
    return this.hasFieldValue('instantiatesUri');
  }

  /** Appends one value to `instantiatesUri`. Throws a FhirModelError when it is not a valid FHIR uri. */
  addInstantiatesUri(instantiatesUri: string): this {
    return this.addFieldValue('instantiatesUri', instantiatesUri);
  }

  /** Fulfills plan, proposal, or order (0..*) Never undefined; an empty list is created when absent. */
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

  /** Request(s) replaced by this request (0..*) Never undefined; an empty list is created when absent. */
  getReplaces(): Reference[] {
    if (this.replaces === undefined) {
      this.replaces = [];
    }
    return this.replaces;
  }

  setReplaces(replaces: Reference[] | undefined): this {
    return this.setFieldValue('replaces', replaces);
  }

  hasReplaces(): boolean {
    return this.hasFieldValue('replaces');
  }

  /** Appends a new, empty Reference to `replaces` and returns it so it can be filled in. */
  addReplaces(): Reference;
  /** Appends the given Reference to `replaces` and returns this object for chaining. */
  addReplaces(reference: Reference): this;
  addReplaces(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('replaces', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('replaces', createdReference);
    return createdReference;
  }

  /** The first Reference of `replaces`. One is added when the list is empty. */
  getReplacesFirstRep(): Reference {
    const firstReference = this.getReplaces()[0];
    return firstReference === undefined ? this.addReplaces() : firstReference;
  }

  /** Composite request this is part of (0..1) Created when absent. */
  getGroupIdentifier(): Identifier {
    if (this.groupIdentifier === undefined) {
      this.groupIdentifier = new Identifier();
    }
    return this.groupIdentifier;
  }

  setGroupIdentifier(groupIdentifier: Identifier | undefined): this {
    return this.setFieldValue('groupIdentifier', groupIdentifier);
  }

  hasGroupIdentifier(): boolean {
    return this.hasFieldValue('groupIdentifier');
  }

  /** draft | active | on-hold | revoked | completed | entered-in-error | unknown (1..1) */
  getStatus(): valueSetCodes.RequestStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.RequestStatus | undefined): this {
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

  /** proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option (1..1) */
  getIntent(): valueSetCodes.RequestIntent | undefined {
    return this.intent;
  }

  /** Sets `intent`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setIntent(intent: valueSetCodes.RequestIntent | undefined): this {
    return this.setFieldValue('intent', intent);
  }

  hasIntent(): boolean {
    return this.hasFieldValue('intent');
  }

  /** The element carrying the id and extensions of `intent`. Created when absent. */
  getIntentElement(): Element {
    if (this._intent === undefined) {
      this._intent = new Element();
    }
    return this._intent;
  }

  setIntentElement(intentElement: Element | undefined): this {
    this._intent = intentElement;
    return this;
  }

  /** routine | urgent | asap | stat (0..1) */
  getPriority(): valueSetCodes.RequestPriority | undefined {
    return this.priority;
  }

  /** Sets `priority`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setPriority(priority: valueSetCodes.RequestPriority | undefined): this {
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

  /** What's being requested/ordered (0..1) Created when absent. */
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

  /** Who the request orchestration is about (0..1) Created when absent. */
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

  /** Created as part of (0..1) Created when absent. */
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

  /** When the request orchestration was authored (0..1) */
  getAuthoredOn(): string | undefined {
    return this.authoredOn;
  }

  /** Sets `authoredOn`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setAuthoredOn(authoredOn: string | undefined): this {
    return this.setFieldValue('authoredOn', authoredOn);
  }

  hasAuthoredOn(): boolean {
    return this.hasFieldValue('authoredOn');
  }

  /** The element carrying the id and extensions of `authoredOn`. Created when absent. */
  getAuthoredOnElement(): Element {
    if (this._authoredOn === undefined) {
      this._authoredOn = new Element();
    }
    return this._authoredOn;
  }

  setAuthoredOnElement(authoredOnElement: Element | undefined): this {
    this._authoredOn = authoredOnElement;
    return this;
  }

  /** Device or practitioner that authored the request orchestration (0..1) Created when absent. */
  getAuthor(): Reference {
    if (this.author === undefined) {
      this.author = new Reference();
    }
    return this.author;
  }

  setAuthor(author: Reference | undefined): this {
    return this.setFieldValue('author', author);
  }

  hasAuthor(): boolean {
    return this.hasFieldValue('author');
  }

  /** Why the request orchestration is needed (0..*) Never undefined; an empty list is created when absent. */
  getReason(): CodeableReference[] {
    if (this.reason === undefined) {
      this.reason = [];
    }
    return this.reason;
  }

  setReason(reason: CodeableReference[] | undefined): this {
    return this.setFieldValue('reason', reason);
  }

  hasReason(): boolean {
    return this.hasFieldValue('reason');
  }

  /** Appends a new, empty CodeableReference to `reason` and returns it so it can be filled in. */
  addReason(): CodeableReference;
  /** Appends the given CodeableReference to `reason` and returns this object for chaining. */
  addReason(codeableReference: CodeableReference): this;
  addReason(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('reason', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('reason', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `reason`. One is added when the list is empty. */
  getReasonFirstRep(): CodeableReference {
    const firstCodeableReference = this.getReason()[0];
    return firstCodeableReference === undefined ? this.addReason() : firstCodeableReference;
  }

  /** What goals (0..*) Never undefined; an empty list is created when absent. */
  getGoal(): Reference[] {
    if (this.goal === undefined) {
      this.goal = [];
    }
    return this.goal;
  }

  setGoal(goal: Reference[] | undefined): this {
    return this.setFieldValue('goal', goal);
  }

  hasGoal(): boolean {
    return this.hasFieldValue('goal');
  }

  /** Appends a new, empty Reference to `goal` and returns it so it can be filled in. */
  addGoal(): Reference;
  /** Appends the given Reference to `goal` and returns this object for chaining. */
  addGoal(reference: Reference): this;
  addGoal(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('goal', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('goal', createdReference);
    return createdReference;
  }

  /** The first Reference of `goal`. One is added when the list is empty. */
  getGoalFirstRep(): Reference {
    const firstReference = this.getGoal()[0];
    return firstReference === undefined ? this.addGoal() : firstReference;
  }

  /** Additional notes about the response (0..*) Never undefined; an empty list is created when absent. */
  getNote(): Annotation[] {
    if (this.note === undefined) {
      this.note = [];
    }
    return this.note;
  }

  setNote(note: Annotation[] | undefined): this {
    return this.setFieldValue('note', note);
  }

  hasNote(): boolean {
    return this.hasFieldValue('note');
  }

  /** Appends a new, empty Annotation to `note` and returns it so it can be filled in. */
  addNote(): Annotation;
  /** Appends the given Annotation to `note` and returns this object for chaining. */
  addNote(annotation: Annotation): this;
  addNote(annotation?: Annotation): Annotation | this {
    if (annotation !== undefined) {
      return this.addFieldValue('note', annotation);
    }
    const createdAnnotation = new Annotation();
    this.addFieldValue('note', createdAnnotation);
    return createdAnnotation;
  }

  /** The first Annotation of `note`. One is added when the list is empty. */
  getNoteFirstRep(): Annotation {
    const firstAnnotation = this.getNote()[0];
    return firstAnnotation === undefined ? this.addNote() : firstAnnotation;
  }

  /** Proposed actions, if any (0..*) Never undefined; an empty list is created when absent. */
  getAction(): RequestOrchestrationAction[] {
    if (this.action === undefined) {
      this.action = [];
    }
    return this.action;
  }

  setAction(action: RequestOrchestrationAction[] | undefined): this {
    return this.setFieldValue('action', action);
  }

  hasAction(): boolean {
    return this.hasFieldValue('action');
  }

  /** Appends a new, empty RequestOrchestrationAction to `action` and returns it so it can be filled in. */
  addAction(): RequestOrchestrationAction;
  /** Appends the given RequestOrchestrationAction to `action` and returns this object for chaining. */
  addAction(requestOrchestrationAction: RequestOrchestrationAction): this;
  addAction(
    requestOrchestrationAction?: RequestOrchestrationAction
  ): RequestOrchestrationAction | this {
    if (requestOrchestrationAction !== undefined) {
      return this.addFieldValue('action', requestOrchestrationAction);
    }
    const createdRequestOrchestrationAction = new RequestOrchestrationAction();
    this.addFieldValue('action', createdRequestOrchestrationAction);
    return createdRequestOrchestrationAction;
  }

  /** The first RequestOrchestrationAction of `action`. One is added when the list is empty. */
  getActionFirstRep(): RequestOrchestrationAction {
    const firstRequestOrchestrationAction = this.getAction()[0];
    return firstRequestOrchestrationAction === undefined
      ? this.addAction()
      : firstRequestOrchestrationAction;
  }
}

modelTypeRegistry.register('RequestOrchestration', RequestOrchestration, true);

/** True when the value is a RequestOrchestration model instance. */
export function isRequestOrchestration(candidate: unknown): candidate is RequestOrchestration {
  return candidate instanceof RequestOrchestration;
}

/**
 * Proposed actions, if any
 */
export class RequestOrchestrationAction extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'linkId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'linkId', typeCode: 'string' }],
    },
    {
      elementName: 'prefix',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'prefix', typeCode: 'string' }],
    },
    {
      elementName: 'title',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'title', typeCode: 'string' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'textEquivalent',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'textEquivalent', typeCode: 'markdown' }],
    },
    {
      elementName: 'priority',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'priority', typeCode: 'code', allowedCodes: valueSetCodes.RequestPriority },
      ],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'documentation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'documentation', typeCode: 'RelatedArtifact' }],
    },
    {
      elementName: 'goal',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'goal', typeCode: 'Reference', targetResourceTypes: ['Goal'] }],
    },
    {
      elementName: 'condition',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'condition', typeCode: 'RequestOrchestrationActionCondition' }],
    },
    {
      elementName: 'input',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'input', typeCode: 'RequestOrchestrationActionInput' }],
    },
    {
      elementName: 'output',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'output', typeCode: 'RequestOrchestrationActionOutput' }],
    },
    {
      elementName: 'relatedAction',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'relatedAction', typeCode: 'RequestOrchestrationActionRelatedAction' }],
    },
    {
      elementName: 'timing',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'timingDateTime', typeCode: 'dateTime' },
        { jsonKey: 'timingAge', typeCode: 'Age' },
        { jsonKey: 'timingPeriod', typeCode: 'Period' },
        { jsonKey: 'timingDuration', typeCode: 'Duration' },
        { jsonKey: 'timingRange', typeCode: 'Range' },
        { jsonKey: 'timingTiming', typeCode: 'Timing' },
      ],
    },
    {
      elementName: 'location',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'location', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'participant',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'participant', typeCode: 'RequestOrchestrationActionParticipant' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'groupingBehavior',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'groupingBehavior',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ActionGroupingBehavior,
        },
      ],
    },
    {
      elementName: 'selectionBehavior',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'selectionBehavior',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ActionSelectionBehavior,
        },
      ],
    },
    {
      elementName: 'requiredBehavior',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'requiredBehavior',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ActionRequiredBehavior,
        },
      ],
    },
    {
      elementName: 'precheckBehavior',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'precheckBehavior',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ActionPrecheckBehavior,
        },
      ],
    },
    {
      elementName: 'cardinalityBehavior',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'cardinalityBehavior',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ActionCardinalityBehavior,
        },
      ],
    },
    {
      elementName: 'resource',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'resource', typeCode: 'Reference' }],
    },
    {
      elementName: 'definition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'definitionCanonical', typeCode: 'canonical' },
        { jsonKey: 'definitionUri', typeCode: 'uri' },
      ],
    },
    {
      elementName: 'transform',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'transform', typeCode: 'canonical' }],
    },
    {
      elementName: 'dynamicValue',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'dynamicValue', typeCode: 'RequestOrchestrationActionDynamicValue' }],
    },
    {
      elementName: 'action',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'action', typeCode: 'RequestOrchestrationAction' }],
    },
  ];

  /** Pointer to specific item from the PlanDefinition (0..1) */
  linkId?: string;
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: Element;

  /** User-visible prefix for the action (e.g. 1. or A.) (0..1) */
  prefix?: string;
  /** Id and extensions of the primitive `prefix`. */
  _prefix?: Element;

  /** User-visible title (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

  /** Short description of the action (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system (0..1) */
  textEquivalent?: string;
  /** Id and extensions of the primitive `textEquivalent`. */
  _textEquivalent?: Element;

  /** routine | urgent | asap | stat (0..1) */
  priority?: valueSetCodes.RequestPriority;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;

  /** Code representing the meaning of the action or sub-actions (0..*) */
  code?: CodeableConcept[];

  /** Supporting documentation for the intended performer of the action (0..*) */
  documentation?: RelatedArtifact[];

  /** What goals (0..*) */
  goal?: Reference[];

  /** Whether or not the action is applicable (0..*) */
  condition?: RequestOrchestrationActionCondition[];

  /** Input data requirements (0..*) */
  input?: RequestOrchestrationActionInput[];

  /** Output data definition (0..*) */
  output?: RequestOrchestrationActionOutput[];

  /** Relationship to another action (0..*) */
  relatedAction?: RequestOrchestrationActionRelatedAction[];

  /** When the action should take place (0..1) */
  timingDateTime?: string;
  /** Id and extensions of the primitive `timingDateTime`. */
  _timingDateTime?: Element;
  /** When the action should take place (0..1) */
  timingAge?: Age;
  /** When the action should take place (0..1) */
  timingPeriod?: Period;
  /** When the action should take place (0..1) */
  timingDuration?: Duration;
  /** When the action should take place (0..1) */
  timingRange?: Range;
  /** When the action should take place (0..1) */
  timingTiming?: Timing;

  /** Where it should happen (0..1) */
  location?: CodeableReference;

  /** Who should perform the action (0..*) */
  participant?: RequestOrchestrationActionParticipant[];

  /** create | update | remove | fire-event (0..1) */
  type?: CodeableConcept;

  /** visual-group | logical-group | sentence-group (0..1) */
  groupingBehavior?: valueSetCodes.ActionGroupingBehavior;
  /** Id and extensions of the primitive `groupingBehavior`. */
  _groupingBehavior?: Element;

  /** any | all | all-or-none | exactly-one | at-most-one | one-or-more (0..1) */
  selectionBehavior?: valueSetCodes.ActionSelectionBehavior;
  /** Id and extensions of the primitive `selectionBehavior`. */
  _selectionBehavior?: Element;

  /** must | could | must-unless-documented (0..1) */
  requiredBehavior?: valueSetCodes.ActionRequiredBehavior;
  /** Id and extensions of the primitive `requiredBehavior`. */
  _requiredBehavior?: Element;

  /** yes | no (0..1) */
  precheckBehavior?: valueSetCodes.ActionPrecheckBehavior;
  /** Id and extensions of the primitive `precheckBehavior`. */
  _precheckBehavior?: Element;

  /** single | multiple (0..1) */
  cardinalityBehavior?: valueSetCodes.ActionCardinalityBehavior;
  /** Id and extensions of the primitive `cardinalityBehavior`. */
  _cardinalityBehavior?: Element;

  /** The target of the action (0..1) */
  resource?: Reference;

  /** Description of the activity to be performed (0..1) */
  definitionCanonical?: string;
  /** Id and extensions of the primitive `definitionCanonical`. */
  _definitionCanonical?: Element;
  /** Description of the activity to be performed (0..1) */
  definitionUri?: string;
  /** Id and extensions of the primitive `definitionUri`. */
  _definitionUri?: Element;

  /** Transform to apply the template (0..1) */
  transform?: string;
  /** Id and extensions of the primitive `transform`. */
  _transform?: Element;

  /** Dynamic aspects of the definition (0..*) */
  dynamicValue?: RequestOrchestrationActionDynamicValue[];

  /** Sub action (0..*) */
  action?: RequestOrchestrationAction[];

  override fhirType(): string {
    return 'RequestOrchestration.action';
  }

  /** FHIR JSON for this RequestOrchestrationAction, typed as the plain `RequestOrchestrationAction` data type. */
  override toJSON(): plainTypes.RequestOrchestrationAction {
    return this.serialize() as plainTypes.RequestOrchestrationAction;
  }

  /** Pointer to specific item from the PlanDefinition (0..1) */
  getLinkId(): string | undefined {
    return this.linkId;
  }

  /** Sets `linkId`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setLinkId(linkId: string | undefined): this {
    return this.setFieldValue('linkId', linkId);
  }

  hasLinkId(): boolean {
    return this.hasFieldValue('linkId');
  }

  /** The element carrying the id and extensions of `linkId`. Created when absent. */
  getLinkIdElement(): Element {
    if (this._linkId === undefined) {
      this._linkId = new Element();
    }
    return this._linkId;
  }

  setLinkIdElement(linkIdElement: Element | undefined): this {
    this._linkId = linkIdElement;
    return this;
  }

  /** User-visible prefix for the action (e.g. 1. or A.) (0..1) */
  getPrefix(): string | undefined {
    return this.prefix;
  }

  /** Sets `prefix`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPrefix(prefix: string | undefined): this {
    return this.setFieldValue('prefix', prefix);
  }

  hasPrefix(): boolean {
    return this.hasFieldValue('prefix');
  }

  /** The element carrying the id and extensions of `prefix`. Created when absent. */
  getPrefixElement(): Element {
    if (this._prefix === undefined) {
      this._prefix = new Element();
    }
    return this._prefix;
  }

  setPrefixElement(prefixElement: Element | undefined): this {
    this._prefix = prefixElement;
    return this;
  }

  /** User-visible title (0..1) */
  getTitle(): string | undefined {
    return this.title;
  }

  /** Sets `title`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setTitle(title: string | undefined): this {
    return this.setFieldValue('title', title);
  }

  hasTitle(): boolean {
    return this.hasFieldValue('title');
  }

  /** The element carrying the id and extensions of `title`. Created when absent. */
  getTitleElement(): Element {
    if (this._title === undefined) {
      this._title = new Element();
    }
    return this._title;
  }

  setTitleElement(titleElement: Element | undefined): this {
    this._title = titleElement;
    return this;
  }

  /** Short description of the action (0..1) */
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

  /** Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system (0..1) */
  getTextEquivalent(): string | undefined {
    return this.textEquivalent;
  }

  /** Sets `textEquivalent`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setTextEquivalent(textEquivalent: string | undefined): this {
    return this.setFieldValue('textEquivalent', textEquivalent);
  }

  hasTextEquivalent(): boolean {
    return this.hasFieldValue('textEquivalent');
  }

  /** The element carrying the id and extensions of `textEquivalent`. Created when absent. */
  getTextEquivalentElement(): Element {
    if (this._textEquivalent === undefined) {
      this._textEquivalent = new Element();
    }
    return this._textEquivalent;
  }

  setTextEquivalentElement(textEquivalentElement: Element | undefined): this {
    this._textEquivalent = textEquivalentElement;
    return this;
  }

  /** routine | urgent | asap | stat (0..1) */
  getPriority(): valueSetCodes.RequestPriority | undefined {
    return this.priority;
  }

  /** Sets `priority`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setPriority(priority: valueSetCodes.RequestPriority | undefined): this {
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

  /** Code representing the meaning of the action or sub-actions (0..*) Never undefined; an empty list is created when absent. */
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

  /** Supporting documentation for the intended performer of the action (0..*) Never undefined; an empty list is created when absent. */
  getDocumentation(): RelatedArtifact[] {
    if (this.documentation === undefined) {
      this.documentation = [];
    }
    return this.documentation;
  }

  setDocumentation(documentation: RelatedArtifact[] | undefined): this {
    return this.setFieldValue('documentation', documentation);
  }

  hasDocumentation(): boolean {
    return this.hasFieldValue('documentation');
  }

  /** Appends a new, empty RelatedArtifact to `documentation` and returns it so it can be filled in. */
  addDocumentation(): RelatedArtifact;
  /** Appends the given RelatedArtifact to `documentation` and returns this object for chaining. */
  addDocumentation(relatedArtifact: RelatedArtifact): this;
  addDocumentation(relatedArtifact?: RelatedArtifact): RelatedArtifact | this {
    if (relatedArtifact !== undefined) {
      return this.addFieldValue('documentation', relatedArtifact);
    }
    const createdRelatedArtifact = new RelatedArtifact();
    this.addFieldValue('documentation', createdRelatedArtifact);
    return createdRelatedArtifact;
  }

  /** The first RelatedArtifact of `documentation`. One is added when the list is empty. */
  getDocumentationFirstRep(): RelatedArtifact {
    const firstRelatedArtifact = this.getDocumentation()[0];
    return firstRelatedArtifact === undefined ? this.addDocumentation() : firstRelatedArtifact;
  }

  /** What goals (0..*) Never undefined; an empty list is created when absent. */
  getGoal(): Reference[] {
    if (this.goal === undefined) {
      this.goal = [];
    }
    return this.goal;
  }

  setGoal(goal: Reference[] | undefined): this {
    return this.setFieldValue('goal', goal);
  }

  hasGoal(): boolean {
    return this.hasFieldValue('goal');
  }

  /** Appends a new, empty Reference to `goal` and returns it so it can be filled in. */
  addGoal(): Reference;
  /** Appends the given Reference to `goal` and returns this object for chaining. */
  addGoal(reference: Reference): this;
  addGoal(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('goal', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('goal', createdReference);
    return createdReference;
  }

  /** The first Reference of `goal`. One is added when the list is empty. */
  getGoalFirstRep(): Reference {
    const firstReference = this.getGoal()[0];
    return firstReference === undefined ? this.addGoal() : firstReference;
  }

  /** Whether or not the action is applicable (0..*) Never undefined; an empty list is created when absent. */
  getCondition(): RequestOrchestrationActionCondition[] {
    if (this.condition === undefined) {
      this.condition = [];
    }
    return this.condition;
  }

  setCondition(condition: RequestOrchestrationActionCondition[] | undefined): this {
    return this.setFieldValue('condition', condition);
  }

  hasCondition(): boolean {
    return this.hasFieldValue('condition');
  }

  /** Appends a new, empty RequestOrchestrationActionCondition to `condition` and returns it so it can be filled in. */
  addCondition(): RequestOrchestrationActionCondition;
  /** Appends the given RequestOrchestrationActionCondition to `condition` and returns this object for chaining. */
  addCondition(requestOrchestrationActionCondition: RequestOrchestrationActionCondition): this;
  addCondition(
    requestOrchestrationActionCondition?: RequestOrchestrationActionCondition
  ): RequestOrchestrationActionCondition | this {
    if (requestOrchestrationActionCondition !== undefined) {
      return this.addFieldValue('condition', requestOrchestrationActionCondition);
    }
    const createdRequestOrchestrationActionCondition = new RequestOrchestrationActionCondition();
    this.addFieldValue('condition', createdRequestOrchestrationActionCondition);
    return createdRequestOrchestrationActionCondition;
  }

  /** The first RequestOrchestrationActionCondition of `condition`. One is added when the list is empty. */
  getConditionFirstRep(): RequestOrchestrationActionCondition {
    const firstRequestOrchestrationActionCondition = this.getCondition()[0];
    return firstRequestOrchestrationActionCondition === undefined
      ? this.addCondition()
      : firstRequestOrchestrationActionCondition;
  }

  /** Input data requirements (0..*) Never undefined; an empty list is created when absent. */
  getInput(): RequestOrchestrationActionInput[] {
    if (this.input === undefined) {
      this.input = [];
    }
    return this.input;
  }

  setInput(input: RequestOrchestrationActionInput[] | undefined): this {
    return this.setFieldValue('input', input);
  }

  hasInput(): boolean {
    return this.hasFieldValue('input');
  }

  /** Appends a new, empty RequestOrchestrationActionInput to `input` and returns it so it can be filled in. */
  addInput(): RequestOrchestrationActionInput;
  /** Appends the given RequestOrchestrationActionInput to `input` and returns this object for chaining. */
  addInput(requestOrchestrationActionInput: RequestOrchestrationActionInput): this;
  addInput(
    requestOrchestrationActionInput?: RequestOrchestrationActionInput
  ): RequestOrchestrationActionInput | this {
    if (requestOrchestrationActionInput !== undefined) {
      return this.addFieldValue('input', requestOrchestrationActionInput);
    }
    const createdRequestOrchestrationActionInput = new RequestOrchestrationActionInput();
    this.addFieldValue('input', createdRequestOrchestrationActionInput);
    return createdRequestOrchestrationActionInput;
  }

  /** The first RequestOrchestrationActionInput of `input`. One is added when the list is empty. */
  getInputFirstRep(): RequestOrchestrationActionInput {
    const firstRequestOrchestrationActionInput = this.getInput()[0];
    return firstRequestOrchestrationActionInput === undefined
      ? this.addInput()
      : firstRequestOrchestrationActionInput;
  }

  /** Output data definition (0..*) Never undefined; an empty list is created when absent. */
  getOutput(): RequestOrchestrationActionOutput[] {
    if (this.output === undefined) {
      this.output = [];
    }
    return this.output;
  }

  setOutput(output: RequestOrchestrationActionOutput[] | undefined): this {
    return this.setFieldValue('output', output);
  }

  hasOutput(): boolean {
    return this.hasFieldValue('output');
  }

  /** Appends a new, empty RequestOrchestrationActionOutput to `output` and returns it so it can be filled in. */
  addOutput(): RequestOrchestrationActionOutput;
  /** Appends the given RequestOrchestrationActionOutput to `output` and returns this object for chaining. */
  addOutput(requestOrchestrationActionOutput: RequestOrchestrationActionOutput): this;
  addOutput(
    requestOrchestrationActionOutput?: RequestOrchestrationActionOutput
  ): RequestOrchestrationActionOutput | this {
    if (requestOrchestrationActionOutput !== undefined) {
      return this.addFieldValue('output', requestOrchestrationActionOutput);
    }
    const createdRequestOrchestrationActionOutput = new RequestOrchestrationActionOutput();
    this.addFieldValue('output', createdRequestOrchestrationActionOutput);
    return createdRequestOrchestrationActionOutput;
  }

  /** The first RequestOrchestrationActionOutput of `output`. One is added when the list is empty. */
  getOutputFirstRep(): RequestOrchestrationActionOutput {
    const firstRequestOrchestrationActionOutput = this.getOutput()[0];
    return firstRequestOrchestrationActionOutput === undefined
      ? this.addOutput()
      : firstRequestOrchestrationActionOutput;
  }

  /** Relationship to another action (0..*) Never undefined; an empty list is created when absent. */
  getRelatedAction(): RequestOrchestrationActionRelatedAction[] {
    if (this.relatedAction === undefined) {
      this.relatedAction = [];
    }
    return this.relatedAction;
  }

  setRelatedAction(relatedAction: RequestOrchestrationActionRelatedAction[] | undefined): this {
    return this.setFieldValue('relatedAction', relatedAction);
  }

  hasRelatedAction(): boolean {
    return this.hasFieldValue('relatedAction');
  }

  /** Appends a new, empty RequestOrchestrationActionRelatedAction to `relatedAction` and returns it so it can be filled in. */
  addRelatedAction(): RequestOrchestrationActionRelatedAction;
  /** Appends the given RequestOrchestrationActionRelatedAction to `relatedAction` and returns this object for chaining. */
  addRelatedAction(
    requestOrchestrationActionRelatedAction: RequestOrchestrationActionRelatedAction
  ): this;
  addRelatedAction(
    requestOrchestrationActionRelatedAction?: RequestOrchestrationActionRelatedAction
  ): RequestOrchestrationActionRelatedAction | this {
    if (requestOrchestrationActionRelatedAction !== undefined) {
      return this.addFieldValue('relatedAction', requestOrchestrationActionRelatedAction);
    }
    const createdRequestOrchestrationActionRelatedAction =
      new RequestOrchestrationActionRelatedAction();
    this.addFieldValue('relatedAction', createdRequestOrchestrationActionRelatedAction);
    return createdRequestOrchestrationActionRelatedAction;
  }

  /** The first RequestOrchestrationActionRelatedAction of `relatedAction`. One is added when the list is empty. */
  getRelatedActionFirstRep(): RequestOrchestrationActionRelatedAction {
    const firstRequestOrchestrationActionRelatedAction = this.getRelatedAction()[0];
    return firstRequestOrchestrationActionRelatedAction === undefined
      ? this.addRelatedAction()
      : firstRequestOrchestrationActionRelatedAction;
  }

  /** When the action should take place (0..1) Whichever type of `timing[x]` is set. */
  getTiming(): string | Age | Period | Duration | Range | Timing | undefined {
    return this.getChoiceValue<string | Age | Period | Duration | Range | Timing>('timing');
  }

  /** True when any type of `timing[x]` is set. */
  hasTiming(): boolean {
    return this.hasChoiceValue('timing');
  }

  getTimingDateTime(): string | undefined {
    return this.timingDateTime;
  }

  /** Sets `timing[x]` as dateTime and clears every other type of it. */
  setTimingDateTime(timingDateTime: string | undefined): this {
    return this.setFieldValue('timingDateTime', timingDateTime);
  }

  hasTimingDateTime(): boolean {
    return this.hasFieldValue('timingDateTime');
  }

  getTimingAge(): Age | undefined {
    return this.timingAge;
  }

  /** Sets `timing[x]` as Age and clears every other type of it. */
  setTimingAge(timingAge: Age | undefined): this {
    return this.setFieldValue('timingAge', timingAge);
  }

  hasTimingAge(): boolean {
    return this.hasFieldValue('timingAge');
  }

  getTimingPeriod(): Period | undefined {
    return this.timingPeriod;
  }

  /** Sets `timing[x]` as Period and clears every other type of it. */
  setTimingPeriod(timingPeriod: Period | undefined): this {
    return this.setFieldValue('timingPeriod', timingPeriod);
  }

  hasTimingPeriod(): boolean {
    return this.hasFieldValue('timingPeriod');
  }

  getTimingDuration(): Duration | undefined {
    return this.timingDuration;
  }

  /** Sets `timing[x]` as Duration and clears every other type of it. */
  setTimingDuration(timingDuration: Duration | undefined): this {
    return this.setFieldValue('timingDuration', timingDuration);
  }

  hasTimingDuration(): boolean {
    return this.hasFieldValue('timingDuration');
  }

  getTimingRange(): Range | undefined {
    return this.timingRange;
  }

  /** Sets `timing[x]` as Range and clears every other type of it. */
  setTimingRange(timingRange: Range | undefined): this {
    return this.setFieldValue('timingRange', timingRange);
  }

  hasTimingRange(): boolean {
    return this.hasFieldValue('timingRange');
  }

  getTimingTiming(): Timing | undefined {
    return this.timingTiming;
  }

  /** Sets `timing[x]` as Timing and clears every other type of it. */
  setTimingTiming(timingTiming: Timing | undefined): this {
    return this.setFieldValue('timingTiming', timingTiming);
  }

  hasTimingTiming(): boolean {
    return this.hasFieldValue('timingTiming');
  }

  /** Where it should happen (0..1) Created when absent. */
  getLocation(): CodeableReference {
    if (this.location === undefined) {
      this.location = new CodeableReference();
    }
    return this.location;
  }

  setLocation(location: CodeableReference | undefined): this {
    return this.setFieldValue('location', location);
  }

  hasLocation(): boolean {
    return this.hasFieldValue('location');
  }

  /** Who should perform the action (0..*) Never undefined; an empty list is created when absent. */
  getParticipant(): RequestOrchestrationActionParticipant[] {
    if (this.participant === undefined) {
      this.participant = [];
    }
    return this.participant;
  }

  setParticipant(participant: RequestOrchestrationActionParticipant[] | undefined): this {
    return this.setFieldValue('participant', participant);
  }

  hasParticipant(): boolean {
    return this.hasFieldValue('participant');
  }

  /** Appends a new, empty RequestOrchestrationActionParticipant to `participant` and returns it so it can be filled in. */
  addParticipant(): RequestOrchestrationActionParticipant;
  /** Appends the given RequestOrchestrationActionParticipant to `participant` and returns this object for chaining. */
  addParticipant(
    requestOrchestrationActionParticipant: RequestOrchestrationActionParticipant
  ): this;
  addParticipant(
    requestOrchestrationActionParticipant?: RequestOrchestrationActionParticipant
  ): RequestOrchestrationActionParticipant | this {
    if (requestOrchestrationActionParticipant !== undefined) {
      return this.addFieldValue('participant', requestOrchestrationActionParticipant);
    }
    const createdRequestOrchestrationActionParticipant =
      new RequestOrchestrationActionParticipant();
    this.addFieldValue('participant', createdRequestOrchestrationActionParticipant);
    return createdRequestOrchestrationActionParticipant;
  }

  /** The first RequestOrchestrationActionParticipant of `participant`. One is added when the list is empty. */
  getParticipantFirstRep(): RequestOrchestrationActionParticipant {
    const firstRequestOrchestrationActionParticipant = this.getParticipant()[0];
    return firstRequestOrchestrationActionParticipant === undefined
      ? this.addParticipant()
      : firstRequestOrchestrationActionParticipant;
  }

  /** create | update | remove | fire-event (0..1) Created when absent. */
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

  /** visual-group | logical-group | sentence-group (0..1) */
  getGroupingBehavior(): valueSetCodes.ActionGroupingBehavior | undefined {
    return this.groupingBehavior;
  }

  /** Sets `groupingBehavior`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setGroupingBehavior(groupingBehavior: valueSetCodes.ActionGroupingBehavior | undefined): this {
    return this.setFieldValue('groupingBehavior', groupingBehavior);
  }

  hasGroupingBehavior(): boolean {
    return this.hasFieldValue('groupingBehavior');
  }

  /** The element carrying the id and extensions of `groupingBehavior`. Created when absent. */
  getGroupingBehaviorElement(): Element {
    if (this._groupingBehavior === undefined) {
      this._groupingBehavior = new Element();
    }
    return this._groupingBehavior;
  }

  setGroupingBehaviorElement(groupingBehaviorElement: Element | undefined): this {
    this._groupingBehavior = groupingBehaviorElement;
    return this;
  }

  /** any | all | all-or-none | exactly-one | at-most-one | one-or-more (0..1) */
  getSelectionBehavior(): valueSetCodes.ActionSelectionBehavior | undefined {
    return this.selectionBehavior;
  }

  /** Sets `selectionBehavior`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setSelectionBehavior(selectionBehavior: valueSetCodes.ActionSelectionBehavior | undefined): this {
    return this.setFieldValue('selectionBehavior', selectionBehavior);
  }

  hasSelectionBehavior(): boolean {
    return this.hasFieldValue('selectionBehavior');
  }

  /** The element carrying the id and extensions of `selectionBehavior`. Created when absent. */
  getSelectionBehaviorElement(): Element {
    if (this._selectionBehavior === undefined) {
      this._selectionBehavior = new Element();
    }
    return this._selectionBehavior;
  }

  setSelectionBehaviorElement(selectionBehaviorElement: Element | undefined): this {
    this._selectionBehavior = selectionBehaviorElement;
    return this;
  }

  /** must | could | must-unless-documented (0..1) */
  getRequiredBehavior(): valueSetCodes.ActionRequiredBehavior | undefined {
    return this.requiredBehavior;
  }

  /** Sets `requiredBehavior`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setRequiredBehavior(requiredBehavior: valueSetCodes.ActionRequiredBehavior | undefined): this {
    return this.setFieldValue('requiredBehavior', requiredBehavior);
  }

  hasRequiredBehavior(): boolean {
    return this.hasFieldValue('requiredBehavior');
  }

  /** The element carrying the id and extensions of `requiredBehavior`. Created when absent. */
  getRequiredBehaviorElement(): Element {
    if (this._requiredBehavior === undefined) {
      this._requiredBehavior = new Element();
    }
    return this._requiredBehavior;
  }

  setRequiredBehaviorElement(requiredBehaviorElement: Element | undefined): this {
    this._requiredBehavior = requiredBehaviorElement;
    return this;
  }

  /** yes | no (0..1) */
  getPrecheckBehavior(): valueSetCodes.ActionPrecheckBehavior | undefined {
    return this.precheckBehavior;
  }

  /** Sets `precheckBehavior`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setPrecheckBehavior(precheckBehavior: valueSetCodes.ActionPrecheckBehavior | undefined): this {
    return this.setFieldValue('precheckBehavior', precheckBehavior);
  }

  hasPrecheckBehavior(): boolean {
    return this.hasFieldValue('precheckBehavior');
  }

  /** The element carrying the id and extensions of `precheckBehavior`. Created when absent. */
  getPrecheckBehaviorElement(): Element {
    if (this._precheckBehavior === undefined) {
      this._precheckBehavior = new Element();
    }
    return this._precheckBehavior;
  }

  setPrecheckBehaviorElement(precheckBehaviorElement: Element | undefined): this {
    this._precheckBehavior = precheckBehaviorElement;
    return this;
  }

  /** single | multiple (0..1) */
  getCardinalityBehavior(): valueSetCodes.ActionCardinalityBehavior | undefined {
    return this.cardinalityBehavior;
  }

  /** Sets `cardinalityBehavior`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setCardinalityBehavior(
    cardinalityBehavior: valueSetCodes.ActionCardinalityBehavior | undefined
  ): this {
    return this.setFieldValue('cardinalityBehavior', cardinalityBehavior);
  }

  hasCardinalityBehavior(): boolean {
    return this.hasFieldValue('cardinalityBehavior');
  }

  /** The element carrying the id and extensions of `cardinalityBehavior`. Created when absent. */
  getCardinalityBehaviorElement(): Element {
    if (this._cardinalityBehavior === undefined) {
      this._cardinalityBehavior = new Element();
    }
    return this._cardinalityBehavior;
  }

  setCardinalityBehaviorElement(cardinalityBehaviorElement: Element | undefined): this {
    this._cardinalityBehavior = cardinalityBehaviorElement;
    return this;
  }

  /** The target of the action (0..1) Created when absent. */
  getResource(): Reference {
    if (this.resource === undefined) {
      this.resource = new Reference();
    }
    return this.resource;
  }

  setResource(resource: Reference | undefined): this {
    return this.setFieldValue('resource', resource);
  }

  hasResource(): boolean {
    return this.hasFieldValue('resource');
  }

  /** Description of the activity to be performed (0..1) Whichever type of `definition[x]` is set. */
  getDefinition(): string | undefined {
    return this.getChoiceValue<string>('definition');
  }

  /** True when any type of `definition[x]` is set. */
  hasDefinition(): boolean {
    return this.hasChoiceValue('definition');
  }

  getDefinitionCanonical(): string | undefined {
    return this.definitionCanonical;
  }

  /** Sets `definition[x]` as canonical and clears every other type of it. */
  setDefinitionCanonical(definitionCanonical: string | undefined): this {
    return this.setFieldValue('definitionCanonical', definitionCanonical);
  }

  hasDefinitionCanonical(): boolean {
    return this.hasFieldValue('definitionCanonical');
  }

  getDefinitionUri(): string | undefined {
    return this.definitionUri;
  }

  /** Sets `definition[x]` as uri and clears every other type of it. */
  setDefinitionUri(definitionUri: string | undefined): this {
    return this.setFieldValue('definitionUri', definitionUri);
  }

  hasDefinitionUri(): boolean {
    return this.hasFieldValue('definitionUri');
  }

  /** Transform to apply the template (0..1) */
  getTransform(): string | undefined {
    return this.transform;
  }

  /** Sets `transform`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setTransform(transform: string | undefined): this {
    return this.setFieldValue('transform', transform);
  }

  hasTransform(): boolean {
    return this.hasFieldValue('transform');
  }

  /** The element carrying the id and extensions of `transform`. Created when absent. */
  getTransformElement(): Element {
    if (this._transform === undefined) {
      this._transform = new Element();
    }
    return this._transform;
  }

  setTransformElement(transformElement: Element | undefined): this {
    this._transform = transformElement;
    return this;
  }

  /** Dynamic aspects of the definition (0..*) Never undefined; an empty list is created when absent. */
  getDynamicValue(): RequestOrchestrationActionDynamicValue[] {
    if (this.dynamicValue === undefined) {
      this.dynamicValue = [];
    }
    return this.dynamicValue;
  }

  setDynamicValue(dynamicValue: RequestOrchestrationActionDynamicValue[] | undefined): this {
    return this.setFieldValue('dynamicValue', dynamicValue);
  }

  hasDynamicValue(): boolean {
    return this.hasFieldValue('dynamicValue');
  }

  /** Appends a new, empty RequestOrchestrationActionDynamicValue to `dynamicValue` and returns it so it can be filled in. */
  addDynamicValue(): RequestOrchestrationActionDynamicValue;
  /** Appends the given RequestOrchestrationActionDynamicValue to `dynamicValue` and returns this object for chaining. */
  addDynamicValue(
    requestOrchestrationActionDynamicValue: RequestOrchestrationActionDynamicValue
  ): this;
  addDynamicValue(
    requestOrchestrationActionDynamicValue?: RequestOrchestrationActionDynamicValue
  ): RequestOrchestrationActionDynamicValue | this {
    if (requestOrchestrationActionDynamicValue !== undefined) {
      return this.addFieldValue('dynamicValue', requestOrchestrationActionDynamicValue);
    }
    const createdRequestOrchestrationActionDynamicValue =
      new RequestOrchestrationActionDynamicValue();
    this.addFieldValue('dynamicValue', createdRequestOrchestrationActionDynamicValue);
    return createdRequestOrchestrationActionDynamicValue;
  }

  /** The first RequestOrchestrationActionDynamicValue of `dynamicValue`. One is added when the list is empty. */
  getDynamicValueFirstRep(): RequestOrchestrationActionDynamicValue {
    const firstRequestOrchestrationActionDynamicValue = this.getDynamicValue()[0];
    return firstRequestOrchestrationActionDynamicValue === undefined
      ? this.addDynamicValue()
      : firstRequestOrchestrationActionDynamicValue;
  }

  /** Sub action (0..*) Never undefined; an empty list is created when absent. */
  getAction(): RequestOrchestrationAction[] {
    if (this.action === undefined) {
      this.action = [];
    }
    return this.action;
  }

  setAction(action: RequestOrchestrationAction[] | undefined): this {
    return this.setFieldValue('action', action);
  }

  hasAction(): boolean {
    return this.hasFieldValue('action');
  }

  /** Appends a new, empty RequestOrchestrationAction to `action` and returns it so it can be filled in. */
  addAction(): RequestOrchestrationAction;
  /** Appends the given RequestOrchestrationAction to `action` and returns this object for chaining. */
  addAction(requestOrchestrationAction: RequestOrchestrationAction): this;
  addAction(
    requestOrchestrationAction?: RequestOrchestrationAction
  ): RequestOrchestrationAction | this {
    if (requestOrchestrationAction !== undefined) {
      return this.addFieldValue('action', requestOrchestrationAction);
    }
    const createdRequestOrchestrationAction = new RequestOrchestrationAction();
    this.addFieldValue('action', createdRequestOrchestrationAction);
    return createdRequestOrchestrationAction;
  }

  /** The first RequestOrchestrationAction of `action`. One is added when the list is empty. */
  getActionFirstRep(): RequestOrchestrationAction {
    const firstRequestOrchestrationAction = this.getAction()[0];
    return firstRequestOrchestrationAction === undefined
      ? this.addAction()
      : firstRequestOrchestrationAction;
  }
}

modelTypeRegistry.register('RequestOrchestrationAction', RequestOrchestrationAction, false);

/**
 * Whether or not the action is applicable
 */
export class RequestOrchestrationActionCondition extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'kind',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'kind', typeCode: 'code', allowedCodes: valueSetCodes.ActionConditionKind },
      ],
    },
    {
      elementName: 'expression',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'expression', typeCode: 'Expression' }],
    },
  ];

  /** applicability | start | stop (1..1) */
  kind?: valueSetCodes.ActionConditionKind;
  /** Id and extensions of the primitive `kind`. */
  _kind?: Element;

  /** Boolean-valued expression (0..1) */
  expression?: Expression;

  override fhirType(): string {
    return 'RequestOrchestration.action.condition';
  }

  /** FHIR JSON for this RequestOrchestrationActionCondition, typed as the plain `RequestOrchestrationCondition` data type. */
  override toJSON(): plainTypes.RequestOrchestrationCondition {
    return this.serialize() as plainTypes.RequestOrchestrationCondition;
  }

  /** applicability | start | stop (1..1) */
  getKind(): valueSetCodes.ActionConditionKind | undefined {
    return this.kind;
  }

  /** Sets `kind`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setKind(kind: valueSetCodes.ActionConditionKind | undefined): this {
    return this.setFieldValue('kind', kind);
  }

  hasKind(): boolean {
    return this.hasFieldValue('kind');
  }

  /** The element carrying the id and extensions of `kind`. Created when absent. */
  getKindElement(): Element {
    if (this._kind === undefined) {
      this._kind = new Element();
    }
    return this._kind;
  }

  setKindElement(kindElement: Element | undefined): this {
    this._kind = kindElement;
    return this;
  }

  /** Boolean-valued expression (0..1) Created when absent. */
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
}

modelTypeRegistry.register(
  'RequestOrchestrationActionCondition',
  RequestOrchestrationActionCondition,
  false
);

/**
 * Input data requirements
 */
export class RequestOrchestrationActionInput extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'title',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'title', typeCode: 'string' }],
    },
    {
      elementName: 'requirement',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'requirement', typeCode: 'DataRequirement' }],
    },
    {
      elementName: 'relatedData',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'relatedData', typeCode: 'id' }],
    },
  ];

  /** User-visible title (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

  /** What data is provided (0..1) */
  requirement?: DataRequirement;

  /** What data is provided (0..1) */
  relatedData?: string;
  /** Id and extensions of the primitive `relatedData`. */
  _relatedData?: Element;

  override fhirType(): string {
    return 'RequestOrchestration.action.input';
  }

  /** FHIR JSON for this RequestOrchestrationActionInput, typed as the plain `RequestOrchestrationInput` data type. */
  override toJSON(): plainTypes.RequestOrchestrationInput {
    return this.serialize() as plainTypes.RequestOrchestrationInput;
  }

  /** User-visible title (0..1) */
  getTitle(): string | undefined {
    return this.title;
  }

  /** Sets `title`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setTitle(title: string | undefined): this {
    return this.setFieldValue('title', title);
  }

  hasTitle(): boolean {
    return this.hasFieldValue('title');
  }

  /** The element carrying the id and extensions of `title`. Created when absent. */
  getTitleElement(): Element {
    if (this._title === undefined) {
      this._title = new Element();
    }
    return this._title;
  }

  setTitleElement(titleElement: Element | undefined): this {
    this._title = titleElement;
    return this;
  }

  /** What data is provided (0..1) Created when absent. */
  getRequirement(): DataRequirement {
    if (this.requirement === undefined) {
      this.requirement = new DataRequirement();
    }
    return this.requirement;
  }

  setRequirement(requirement: DataRequirement | undefined): this {
    return this.setFieldValue('requirement', requirement);
  }

  hasRequirement(): boolean {
    return this.hasFieldValue('requirement');
  }

  /** What data is provided (0..1) */
  getRelatedData(): string | undefined {
    return this.relatedData;
  }

  /** Sets `relatedData`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setRelatedData(relatedData: string | undefined): this {
    return this.setFieldValue('relatedData', relatedData);
  }

  hasRelatedData(): boolean {
    return this.hasFieldValue('relatedData');
  }

  /** The element carrying the id and extensions of `relatedData`. Created when absent. */
  getRelatedDataElement(): Element {
    if (this._relatedData === undefined) {
      this._relatedData = new Element();
    }
    return this._relatedData;
  }

  setRelatedDataElement(relatedDataElement: Element | undefined): this {
    this._relatedData = relatedDataElement;
    return this;
  }
}

modelTypeRegistry.register(
  'RequestOrchestrationActionInput',
  RequestOrchestrationActionInput,
  false
);

/**
 * Output data definition
 */
export class RequestOrchestrationActionOutput extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'title',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'title', typeCode: 'string' }],
    },
    {
      elementName: 'requirement',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'requirement', typeCode: 'DataRequirement' }],
    },
    {
      elementName: 'relatedData',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'relatedData', typeCode: 'string' }],
    },
  ];

  /** User-visible title (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

  /** What data is provided (0..1) */
  requirement?: DataRequirement;

  /** What data is provided (0..1) */
  relatedData?: string;
  /** Id and extensions of the primitive `relatedData`. */
  _relatedData?: Element;

  override fhirType(): string {
    return 'RequestOrchestration.action.output';
  }

  /** FHIR JSON for this RequestOrchestrationActionOutput, typed as the plain `RequestOrchestrationOutput` data type. */
  override toJSON(): plainTypes.RequestOrchestrationOutput {
    return this.serialize() as plainTypes.RequestOrchestrationOutput;
  }

  /** User-visible title (0..1) */
  getTitle(): string | undefined {
    return this.title;
  }

  /** Sets `title`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setTitle(title: string | undefined): this {
    return this.setFieldValue('title', title);
  }

  hasTitle(): boolean {
    return this.hasFieldValue('title');
  }

  /** The element carrying the id and extensions of `title`. Created when absent. */
  getTitleElement(): Element {
    if (this._title === undefined) {
      this._title = new Element();
    }
    return this._title;
  }

  setTitleElement(titleElement: Element | undefined): this {
    this._title = titleElement;
    return this;
  }

  /** What data is provided (0..1) Created when absent. */
  getRequirement(): DataRequirement {
    if (this.requirement === undefined) {
      this.requirement = new DataRequirement();
    }
    return this.requirement;
  }

  setRequirement(requirement: DataRequirement | undefined): this {
    return this.setFieldValue('requirement', requirement);
  }

  hasRequirement(): boolean {
    return this.hasFieldValue('requirement');
  }

  /** What data is provided (0..1) */
  getRelatedData(): string | undefined {
    return this.relatedData;
  }

  /** Sets `relatedData`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setRelatedData(relatedData: string | undefined): this {
    return this.setFieldValue('relatedData', relatedData);
  }

  hasRelatedData(): boolean {
    return this.hasFieldValue('relatedData');
  }

  /** The element carrying the id and extensions of `relatedData`. Created when absent. */
  getRelatedDataElement(): Element {
    if (this._relatedData === undefined) {
      this._relatedData = new Element();
    }
    return this._relatedData;
  }

  setRelatedDataElement(relatedDataElement: Element | undefined): this {
    this._relatedData = relatedDataElement;
    return this;
  }
}

modelTypeRegistry.register(
  'RequestOrchestrationActionOutput',
  RequestOrchestrationActionOutput,
  false
);

/**
 * Relationship to another action
 */
export class RequestOrchestrationActionRelatedAction extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'targetId',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'targetId', typeCode: 'id' }],
    },
    {
      elementName: 'relationship',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'relationship',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ActionRelationshipType,
        },
      ],
    },
    {
      elementName: 'endRelationship',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'endRelationship',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ActionRelationshipType,
        },
      ],
    },
    {
      elementName: 'offset',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'offsetDuration', typeCode: 'Duration' },
        { jsonKey: 'offsetRange', typeCode: 'Range' },
      ],
    },
  ];

  /** What action this is related to (1..1) */
  targetId?: string;
  /** Id and extensions of the primitive `targetId`. */
  _targetId?: Element;

  /** before | before-start | before-end | concurrent | concurrent-with-start | concurrent-with-end | after | after-start | after-end (1..1) */
  relationship?: valueSetCodes.ActionRelationshipType;
  /** Id and extensions of the primitive `relationship`. */
  _relationship?: Element;

  /** before | before-start | before-end | concurrent | concurrent-with-start | concurrent-with-end | after | after-start | after-end (0..1) */
  endRelationship?: valueSetCodes.ActionRelationshipType;
  /** Id and extensions of the primitive `endRelationship`. */
  _endRelationship?: Element;

  /** Time offset for the relationship (0..1) */
  offsetDuration?: Duration;
  /** Time offset for the relationship (0..1) */
  offsetRange?: Range;

  override fhirType(): string {
    return 'RequestOrchestration.action.relatedAction';
  }

  /** FHIR JSON for this RequestOrchestrationActionRelatedAction, typed as the plain `RequestOrchestrationRelatedAction` data type. */
  override toJSON(): plainTypes.RequestOrchestrationRelatedAction {
    return this.serialize() as plainTypes.RequestOrchestrationRelatedAction;
  }

  /** What action this is related to (1..1) */
  getTargetId(): string | undefined {
    return this.targetId;
  }

  /** Sets `targetId`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setTargetId(targetId: string | undefined): this {
    return this.setFieldValue('targetId', targetId);
  }

  hasTargetId(): boolean {
    return this.hasFieldValue('targetId');
  }

  /** The element carrying the id and extensions of `targetId`. Created when absent. */
  getTargetIdElement(): Element {
    if (this._targetId === undefined) {
      this._targetId = new Element();
    }
    return this._targetId;
  }

  setTargetIdElement(targetIdElement: Element | undefined): this {
    this._targetId = targetIdElement;
    return this;
  }

  /** before | before-start | before-end | concurrent | concurrent-with-start | concurrent-with-end | after | after-start | after-end (1..1) */
  getRelationship(): valueSetCodes.ActionRelationshipType | undefined {
    return this.relationship;
  }

  /** Sets `relationship`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setRelationship(relationship: valueSetCodes.ActionRelationshipType | undefined): this {
    return this.setFieldValue('relationship', relationship);
  }

  hasRelationship(): boolean {
    return this.hasFieldValue('relationship');
  }

  /** The element carrying the id and extensions of `relationship`. Created when absent. */
  getRelationshipElement(): Element {
    if (this._relationship === undefined) {
      this._relationship = new Element();
    }
    return this._relationship;
  }

  setRelationshipElement(relationshipElement: Element | undefined): this {
    this._relationship = relationshipElement;
    return this;
  }

  /** before | before-start | before-end | concurrent | concurrent-with-start | concurrent-with-end | after | after-start | after-end (0..1) */
  getEndRelationship(): valueSetCodes.ActionRelationshipType | undefined {
    return this.endRelationship;
  }

  /** Sets `endRelationship`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setEndRelationship(endRelationship: valueSetCodes.ActionRelationshipType | undefined): this {
    return this.setFieldValue('endRelationship', endRelationship);
  }

  hasEndRelationship(): boolean {
    return this.hasFieldValue('endRelationship');
  }

  /** The element carrying the id and extensions of `endRelationship`. Created when absent. */
  getEndRelationshipElement(): Element {
    if (this._endRelationship === undefined) {
      this._endRelationship = new Element();
    }
    return this._endRelationship;
  }

  setEndRelationshipElement(endRelationshipElement: Element | undefined): this {
    this._endRelationship = endRelationshipElement;
    return this;
  }

  /** Time offset for the relationship (0..1) Whichever type of `offset[x]` is set. */
  getOffset(): Duration | Range | undefined {
    return this.getChoiceValue<Duration | Range>('offset');
  }

  /** True when any type of `offset[x]` is set. */
  hasOffset(): boolean {
    return this.hasChoiceValue('offset');
  }

  getOffsetDuration(): Duration | undefined {
    return this.offsetDuration;
  }

  /** Sets `offset[x]` as Duration and clears every other type of it. */
  setOffsetDuration(offsetDuration: Duration | undefined): this {
    return this.setFieldValue('offsetDuration', offsetDuration);
  }

  hasOffsetDuration(): boolean {
    return this.hasFieldValue('offsetDuration');
  }

  getOffsetRange(): Range | undefined {
    return this.offsetRange;
  }

  /** Sets `offset[x]` as Range and clears every other type of it. */
  setOffsetRange(offsetRange: Range | undefined): this {
    return this.setFieldValue('offsetRange', offsetRange);
  }

  hasOffsetRange(): boolean {
    return this.hasFieldValue('offsetRange');
  }
}

modelTypeRegistry.register(
  'RequestOrchestrationActionRelatedAction',
  RequestOrchestrationActionRelatedAction,
  false
);

/**
 * Who should perform the action
 */
export class RequestOrchestrationActionParticipant extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.ActionParticipantType },
      ],
    },
    {
      elementName: 'typeCanonical',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'typeCanonical', typeCode: 'canonical' }],
    },
    {
      elementName: 'typeReference',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'typeReference',
          typeCode: 'Reference',
          targetResourceTypes: [
            'CareTeam',
            'Device',
            'DeviceDefinition',
            'Endpoint',
            'Group',
            'HealthcareService',
            'Location',
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
      elementName: 'role',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'role', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'function',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'function', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'actor',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'actorCanonical', typeCode: 'canonical' },
        {
          jsonKey: 'actorReference',
          typeCode: 'Reference',
          targetResourceTypes: [
            'CareTeam',
            'Device',
            'DeviceDefinition',
            'Endpoint',
            'Group',
            'HealthcareService',
            'Location',
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

  /** careteam | device | group | healthcareservice | location | organization | patient | practitioner | practitionerrole | relatedperson (0..1) */
  type?: valueSetCodes.ActionParticipantType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Who or what can participate (0..1) */
  typeCanonical?: string;
  /** Id and extensions of the primitive `typeCanonical`. */
  _typeCanonical?: Element;

  /** Who or what can participate (0..1) */
  typeReference?: Reference;

  /** E.g. Nurse, Surgeon, Parent, etc (0..1) */
  role?: CodeableConcept;

  /** E.g. Author, Reviewer, Witness, etc (0..1) */
  function?: CodeableConcept;

  /** Who/what is participating? (0..1) */
  actorCanonical?: string;
  /** Id and extensions of the primitive `actorCanonical`. */
  _actorCanonical?: Element;
  /** Who/what is participating? (0..1) */
  actorReference?: Reference;

  override fhirType(): string {
    return 'RequestOrchestration.action.participant';
  }

  /** FHIR JSON for this RequestOrchestrationActionParticipant, typed as the plain `RequestOrchestrationParticipant` data type. */
  override toJSON(): plainTypes.RequestOrchestrationParticipant {
    return this.serialize() as plainTypes.RequestOrchestrationParticipant;
  }

  /** careteam | device | group | healthcareservice | location | organization | patient | practitioner | practitionerrole | relatedperson (0..1) */
  getType(): valueSetCodes.ActionParticipantType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.ActionParticipantType | undefined): this {
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

  /** Who or what can participate (0..1) */
  getTypeCanonical(): string | undefined {
    return this.typeCanonical;
  }

  /** Sets `typeCanonical`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setTypeCanonical(typeCanonical: string | undefined): this {
    return this.setFieldValue('typeCanonical', typeCanonical);
  }

  hasTypeCanonical(): boolean {
    return this.hasFieldValue('typeCanonical');
  }

  /** The element carrying the id and extensions of `typeCanonical`. Created when absent. */
  getTypeCanonicalElement(): Element {
    if (this._typeCanonical === undefined) {
      this._typeCanonical = new Element();
    }
    return this._typeCanonical;
  }

  setTypeCanonicalElement(typeCanonicalElement: Element | undefined): this {
    this._typeCanonical = typeCanonicalElement;
    return this;
  }

  /** Who or what can participate (0..1) Created when absent. */
  getTypeReference(): Reference {
    if (this.typeReference === undefined) {
      this.typeReference = new Reference();
    }
    return this.typeReference;
  }

  setTypeReference(typeReference: Reference | undefined): this {
    return this.setFieldValue('typeReference', typeReference);
  }

  hasTypeReference(): boolean {
    return this.hasFieldValue('typeReference');
  }

  /** E.g. Nurse, Surgeon, Parent, etc (0..1) Created when absent. */
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

  /** E.g. Author, Reviewer, Witness, etc (0..1) Created when absent. */
  getFunction(): CodeableConcept {
    if (this.function === undefined) {
      this.function = new CodeableConcept();
    }
    return this.function;
  }

  setFunction(functionValue: CodeableConcept | undefined): this {
    return this.setFieldValue('function', functionValue);
  }

  hasFunction(): boolean {
    return this.hasFieldValue('function');
  }

  /** Who/what is participating? (0..1) Whichever type of `actor[x]` is set. */
  getActor(): string | Reference | undefined {
    return this.getChoiceValue<string | Reference>('actor');
  }

  /** True when any type of `actor[x]` is set. */
  hasActor(): boolean {
    return this.hasChoiceValue('actor');
  }

  getActorCanonical(): string | undefined {
    return this.actorCanonical;
  }

  /** Sets `actor[x]` as canonical and clears every other type of it. */
  setActorCanonical(actorCanonical: string | undefined): this {
    return this.setFieldValue('actorCanonical', actorCanonical);
  }

  hasActorCanonical(): boolean {
    return this.hasFieldValue('actorCanonical');
  }

  getActorReference(): Reference | undefined {
    return this.actorReference;
  }

  /** Sets `actor[x]` as Reference and clears every other type of it. */
  setActorReference(actorReference: Reference | undefined): this {
    return this.setFieldValue('actorReference', actorReference);
  }

  hasActorReference(): boolean {
    return this.hasFieldValue('actorReference');
  }
}

modelTypeRegistry.register(
  'RequestOrchestrationActionParticipant',
  RequestOrchestrationActionParticipant,
  false
);

/**
 * Dynamic aspects of the definition
 */
export class RequestOrchestrationActionDynamicValue extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'path',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'path', typeCode: 'string' }],
    },
    {
      elementName: 'expression',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'expression', typeCode: 'Expression' }],
    },
  ];

  /** The path to the element to be set dynamically (0..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;

  /** An expression that provides the dynamic value for the customization (0..1) */
  expression?: Expression;

  override fhirType(): string {
    return 'RequestOrchestration.action.dynamicValue';
  }

  /** FHIR JSON for this RequestOrchestrationActionDynamicValue, typed as the plain `RequestOrchestrationDynamicValue` data type. */
  override toJSON(): plainTypes.RequestOrchestrationDynamicValue {
    return this.serialize() as plainTypes.RequestOrchestrationDynamicValue;
  }

  /** The path to the element to be set dynamically (0..1) */
  getPath(): string | undefined {
    return this.path;
  }

  /** Sets `path`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPath(path: string | undefined): this {
    return this.setFieldValue('path', path);
  }

  hasPath(): boolean {
    return this.hasFieldValue('path');
  }

  /** The element carrying the id and extensions of `path`. Created when absent. */
  getPathElement(): Element {
    if (this._path === undefined) {
      this._path = new Element();
    }
    return this._path;
  }

  setPathElement(pathElement: Element | undefined): this {
    this._path = pathElement;
    return this;
  }

  /** An expression that provides the dynamic value for the customization (0..1) Created when absent. */
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
}

modelTypeRegistry.register(
  'RequestOrchestrationActionDynamicValue',
  RequestOrchestrationActionDynamicValue,
  false
);
