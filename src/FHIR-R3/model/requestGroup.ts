/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { Annotation } from './annotation';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { Coding } from './coding';
import { DomainResource } from './domainResource';
import { Duration } from './duration';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Range } from './range';
import { Reference } from './reference';
import { RelatedArtifact } from './relatedArtifact';
import { Timing } from './timing';

/**
 * Base StructureDefinition for RequestGroup Resource
 */
export class RequestGroup extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'definition',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'definition', typeCode: 'Reference' }],
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
      elementName: 'subject',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'subject', typeCode: 'Reference', targetResourceTypes: ['Group', 'Patient'] },
      ],
    },
    {
      elementName: 'context',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'context',
          typeCode: 'Reference',
          targetResourceTypes: ['Encounter', 'EpisodeOfCare'],
        },
      ],
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
          targetResourceTypes: ['Device', 'Practitioner'],
        },
      ],
    },
    {
      elementName: 'reason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'reasonCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'reasonReference', typeCode: 'Reference' },
      ],
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
      types: [{ jsonKey: 'action', typeCode: 'RequestGroupAction' }],
    },
  ];

  readonly resourceType = 'RequestGroup';

  /** Business identifier (0..*) */
  identifier?: Identifier[];

  /** Instantiates protocol or definition (0..*) */
  definition?: Reference[];

  /** Fulfills plan, proposal, or order (0..*) */
  basedOn?: Reference[];

  /** Request(s) replaced by this request (0..*) */
  replaces?: Reference[];

  /** Composite request this is part of (0..1) */
  groupIdentifier?: Identifier;

  /** draft | active | suspended | cancelled | completed | entered-in-error | unknown (1..1) */
  status?: valueSetCodes.RequestStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** proposal | plan | order (1..1) */
  intent?: valueSetCodes.RequestIntent;
  /** Id and extensions of the primitive `intent`. */
  _intent?: Element;

  /** routine | urgent | asap | stat (0..1) */
  priority?: valueSetCodes.RequestPriority;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;

  /** Who the request group is about (0..1) */
  subject?: Reference;

  /** Encounter or Episode for the request group (0..1) */
  context?: Reference;

  /** When the request group was authored (0..1) */
  authoredOn?: string;
  /** Id and extensions of the primitive `authoredOn`. */
  _authoredOn?: Element;

  /** Device or practitioner that authored the request group (0..1) */
  author?: Reference;

  /** Reason for the request group (0..1) */
  reasonCodeableConcept?: CodeableConcept;
  /** Reason for the request group (0..1) */
  reasonReference?: Reference;

  /** Additional notes about the response (0..*) */
  note?: Annotation[];

  /** Proposed actions, if any (0..*) */
  action?: RequestGroupAction[];

  override fhirType(): string {
    return 'RequestGroup';
  }

  /** FHIR JSON for this RequestGroup, typed as the plain `RequestGroup` data type. */
  override toJSON(): plainTypes.RequestGroup {
    return this.serialize() as plainTypes.RequestGroup;
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

  /** Instantiates protocol or definition (0..*) Never undefined; an empty list is created when absent. */
  getDefinition(): Reference[] {
    if (this.definition === undefined) {
      this.definition = [];
    }
    return this.definition;
  }

  setDefinition(definition: Reference[] | undefined): this {
    return this.setFieldValue('definition', definition);
  }

  hasDefinition(): boolean {
    return this.hasFieldValue('definition');
  }

  /** Appends a new, empty Reference to `definition` and returns it so it can be filled in. */
  addDefinition(): Reference;
  /** Appends the given Reference to `definition` and returns this object for chaining. */
  addDefinition(reference: Reference): this;
  addDefinition(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('definition', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('definition', createdReference);
    return createdReference;
  }

  /** The first Reference of `definition`. One is added when the list is empty. */
  getDefinitionFirstRep(): Reference {
    const firstReference = this.getDefinition()[0];
    return firstReference === undefined ? this.addDefinition() : firstReference;
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

  /** draft | active | suspended | cancelled | completed | entered-in-error | unknown (1..1) */
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

  /** proposal | plan | order (1..1) */
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

  /** Who the request group is about (0..1) Created when absent. */
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

  /** Encounter or Episode for the request group (0..1) Created when absent. */
  getContext(): Reference {
    if (this.context === undefined) {
      this.context = new Reference();
    }
    return this.context;
  }

  setContext(context: Reference | undefined): this {
    return this.setFieldValue('context', context);
  }

  hasContext(): boolean {
    return this.hasFieldValue('context');
  }

  /** When the request group was authored (0..1) */
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

  /** Device or practitioner that authored the request group (0..1) Created when absent. */
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

  /** Reason for the request group (0..1) Whichever type of `reason[x]` is set. */
  getReason(): CodeableConcept | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | Reference>('reason');
  }

  /** True when any type of `reason[x]` is set. */
  hasReason(): boolean {
    return this.hasChoiceValue('reason');
  }

  getReasonCodeableConcept(): CodeableConcept | undefined {
    return this.reasonCodeableConcept;
  }

  /** Sets `reason[x]` as CodeableConcept and clears every other type of it. */
  setReasonCodeableConcept(reasonCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('reasonCodeableConcept', reasonCodeableConcept);
  }

  hasReasonCodeableConcept(): boolean {
    return this.hasFieldValue('reasonCodeableConcept');
  }

  getReasonReference(): Reference | undefined {
    return this.reasonReference;
  }

  /** Sets `reason[x]` as Reference and clears every other type of it. */
  setReasonReference(reasonReference: Reference | undefined): this {
    return this.setFieldValue('reasonReference', reasonReference);
  }

  hasReasonReference(): boolean {
    return this.hasFieldValue('reasonReference');
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
  getAction(): RequestGroupAction[] {
    if (this.action === undefined) {
      this.action = [];
    }
    return this.action;
  }

  setAction(action: RequestGroupAction[] | undefined): this {
    return this.setFieldValue('action', action);
  }

  hasAction(): boolean {
    return this.hasFieldValue('action');
  }

  /** Appends a new, empty RequestGroupAction to `action` and returns it so it can be filled in. */
  addAction(): RequestGroupAction;
  /** Appends the given RequestGroupAction to `action` and returns this object for chaining. */
  addAction(requestGroupAction: RequestGroupAction): this;
  addAction(requestGroupAction?: RequestGroupAction): RequestGroupAction | this {
    if (requestGroupAction !== undefined) {
      return this.addFieldValue('action', requestGroupAction);
    }
    const createdRequestGroupAction = new RequestGroupAction();
    this.addFieldValue('action', createdRequestGroupAction);
    return createdRequestGroupAction;
  }

  /** The first RequestGroupAction of `action`. One is added when the list is empty. */
  getActionFirstRep(): RequestGroupAction {
    const firstRequestGroupAction = this.getAction()[0];
    return firstRequestGroupAction === undefined ? this.addAction() : firstRequestGroupAction;
  }
}

modelTypeRegistry.register('RequestGroup', RequestGroup, true);

/** True when the value is a RequestGroup model instance. */
export function isRequestGroup(candidate: unknown): candidate is RequestGroup {
  return candidate instanceof RequestGroup;
}

/**
 * Proposed actions, if any
 */
export class RequestGroupAction extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'label',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'label', typeCode: 'string' }],
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
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'textEquivalent',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'textEquivalent', typeCode: 'string' }],
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
      elementName: 'condition',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'condition', typeCode: 'RequestGroupActionCondition' }],
    },
    {
      elementName: 'relatedAction',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'relatedAction', typeCode: 'RequestGroupActionRelatedAction' }],
    },
    {
      elementName: 'timing',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'timingDateTime', typeCode: 'dateTime' },
        { jsonKey: 'timingPeriod', typeCode: 'Period' },
        { jsonKey: 'timingDuration', typeCode: 'Duration' },
        { jsonKey: 'timingRange', typeCode: 'Range' },
        { jsonKey: 'timingTiming', typeCode: 'Timing' },
      ],
    },
    {
      elementName: 'participant',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'participant',
          typeCode: 'Reference',
          targetResourceTypes: ['Patient', 'Person', 'Practitioner', 'RelatedPerson'],
        },
      ],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'Coding' }],
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
      elementName: 'action',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'action', typeCode: 'RequestGroupAction' }],
    },
  ];

  /** User-visible label for the action (e.g. 1. or A.) (0..1) */
  label?: string;
  /** Id and extensions of the primitive `label`. */
  _label?: Element;

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

  /** Code representing the meaning of the action or sub-actions (0..*) */
  code?: CodeableConcept[];

  /** Supporting documentation for the intended performer of the action (0..*) */
  documentation?: RelatedArtifact[];

  /** Whether or not the action is applicable (0..*) */
  condition?: RequestGroupActionCondition[];

  /** Relationship to another action (0..*) */
  relatedAction?: RequestGroupActionRelatedAction[];

  /** When the action should take place (0..1) */
  timingDateTime?: string;
  /** Id and extensions of the primitive `timingDateTime`. */
  _timingDateTime?: Element;
  /** When the action should take place (0..1) */
  timingPeriod?: Period;
  /** When the action should take place (0..1) */
  timingDuration?: Duration;
  /** When the action should take place (0..1) */
  timingRange?: Range;
  /** When the action should take place (0..1) */
  timingTiming?: Timing;

  /** Who should perform the action (0..*) */
  participant?: Reference[];

  /** create | update | remove | fire-event (0..1) */
  type?: Coding;

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

  /** Sub action (0..*) */
  action?: RequestGroupAction[];

  override fhirType(): string {
    return 'RequestGroup.action';
  }

  /** FHIR JSON for this RequestGroupAction, typed as the plain `RequestGroupAction` data type. */
  override toJSON(): plainTypes.RequestGroupAction {
    return this.serialize() as plainTypes.RequestGroupAction;
  }

  /** User-visible label for the action (e.g. 1. or A.) (0..1) */
  getLabel(): string | undefined {
    return this.label;
  }

  /** Sets `label`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setLabel(label: string | undefined): this {
    return this.setFieldValue('label', label);
  }

  hasLabel(): boolean {
    return this.hasFieldValue('label');
  }

  /** The element carrying the id and extensions of `label`. Created when absent. */
  getLabelElement(): Element {
    if (this._label === undefined) {
      this._label = new Element();
    }
    return this._label;
  }

  setLabelElement(labelElement: Element | undefined): this {
    this._label = labelElement;
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

  /** Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system (0..1) */
  getTextEquivalent(): string | undefined {
    return this.textEquivalent;
  }

  /** Sets `textEquivalent`. Throws a FhirModelError when the value is not a valid FHIR string. */
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

  /** Whether or not the action is applicable (0..*) Never undefined; an empty list is created when absent. */
  getCondition(): RequestGroupActionCondition[] {
    if (this.condition === undefined) {
      this.condition = [];
    }
    return this.condition;
  }

  setCondition(condition: RequestGroupActionCondition[] | undefined): this {
    return this.setFieldValue('condition', condition);
  }

  hasCondition(): boolean {
    return this.hasFieldValue('condition');
  }

  /** Appends a new, empty RequestGroupActionCondition to `condition` and returns it so it can be filled in. */
  addCondition(): RequestGroupActionCondition;
  /** Appends the given RequestGroupActionCondition to `condition` and returns this object for chaining. */
  addCondition(requestGroupActionCondition: RequestGroupActionCondition): this;
  addCondition(
    requestGroupActionCondition?: RequestGroupActionCondition
  ): RequestGroupActionCondition | this {
    if (requestGroupActionCondition !== undefined) {
      return this.addFieldValue('condition', requestGroupActionCondition);
    }
    const createdRequestGroupActionCondition = new RequestGroupActionCondition();
    this.addFieldValue('condition', createdRequestGroupActionCondition);
    return createdRequestGroupActionCondition;
  }

  /** The first RequestGroupActionCondition of `condition`. One is added when the list is empty. */
  getConditionFirstRep(): RequestGroupActionCondition {
    const firstRequestGroupActionCondition = this.getCondition()[0];
    return firstRequestGroupActionCondition === undefined
      ? this.addCondition()
      : firstRequestGroupActionCondition;
  }

  /** Relationship to another action (0..*) Never undefined; an empty list is created when absent. */
  getRelatedAction(): RequestGroupActionRelatedAction[] {
    if (this.relatedAction === undefined) {
      this.relatedAction = [];
    }
    return this.relatedAction;
  }

  setRelatedAction(relatedAction: RequestGroupActionRelatedAction[] | undefined): this {
    return this.setFieldValue('relatedAction', relatedAction);
  }

  hasRelatedAction(): boolean {
    return this.hasFieldValue('relatedAction');
  }

  /** Appends a new, empty RequestGroupActionRelatedAction to `relatedAction` and returns it so it can be filled in. */
  addRelatedAction(): RequestGroupActionRelatedAction;
  /** Appends the given RequestGroupActionRelatedAction to `relatedAction` and returns this object for chaining. */
  addRelatedAction(requestGroupActionRelatedAction: RequestGroupActionRelatedAction): this;
  addRelatedAction(
    requestGroupActionRelatedAction?: RequestGroupActionRelatedAction
  ): RequestGroupActionRelatedAction | this {
    if (requestGroupActionRelatedAction !== undefined) {
      return this.addFieldValue('relatedAction', requestGroupActionRelatedAction);
    }
    const createdRequestGroupActionRelatedAction = new RequestGroupActionRelatedAction();
    this.addFieldValue('relatedAction', createdRequestGroupActionRelatedAction);
    return createdRequestGroupActionRelatedAction;
  }

  /** The first RequestGroupActionRelatedAction of `relatedAction`. One is added when the list is empty. */
  getRelatedActionFirstRep(): RequestGroupActionRelatedAction {
    const firstRequestGroupActionRelatedAction = this.getRelatedAction()[0];
    return firstRequestGroupActionRelatedAction === undefined
      ? this.addRelatedAction()
      : firstRequestGroupActionRelatedAction;
  }

  /** When the action should take place (0..1) Whichever type of `timing[x]` is set. */
  getTiming(): string | Period | Duration | Range | Timing | undefined {
    return this.getChoiceValue<string | Period | Duration | Range | Timing>('timing');
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

  /** Who should perform the action (0..*) Never undefined; an empty list is created when absent. */
  getParticipant(): Reference[] {
    if (this.participant === undefined) {
      this.participant = [];
    }
    return this.participant;
  }

  setParticipant(participant: Reference[] | undefined): this {
    return this.setFieldValue('participant', participant);
  }

  hasParticipant(): boolean {
    return this.hasFieldValue('participant');
  }

  /** Appends a new, empty Reference to `participant` and returns it so it can be filled in. */
  addParticipant(): Reference;
  /** Appends the given Reference to `participant` and returns this object for chaining. */
  addParticipant(reference: Reference): this;
  addParticipant(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('participant', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('participant', createdReference);
    return createdReference;
  }

  /** The first Reference of `participant`. One is added when the list is empty. */
  getParticipantFirstRep(): Reference {
    const firstReference = this.getParticipant()[0];
    return firstReference === undefined ? this.addParticipant() : firstReference;
  }

  /** create | update | remove | fire-event (0..1) Created when absent. */
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

  /** Sub action (0..*) Never undefined; an empty list is created when absent. */
  getAction(): RequestGroupAction[] {
    if (this.action === undefined) {
      this.action = [];
    }
    return this.action;
  }

  setAction(action: RequestGroupAction[] | undefined): this {
    return this.setFieldValue('action', action);
  }

  hasAction(): boolean {
    return this.hasFieldValue('action');
  }

  /** Appends a new, empty RequestGroupAction to `action` and returns it so it can be filled in. */
  addAction(): RequestGroupAction;
  /** Appends the given RequestGroupAction to `action` and returns this object for chaining. */
  addAction(requestGroupAction: RequestGroupAction): this;
  addAction(requestGroupAction?: RequestGroupAction): RequestGroupAction | this {
    if (requestGroupAction !== undefined) {
      return this.addFieldValue('action', requestGroupAction);
    }
    const createdRequestGroupAction = new RequestGroupAction();
    this.addFieldValue('action', createdRequestGroupAction);
    return createdRequestGroupAction;
  }

  /** The first RequestGroupAction of `action`. One is added when the list is empty. */
  getActionFirstRep(): RequestGroupAction {
    const firstRequestGroupAction = this.getAction()[0];
    return firstRequestGroupAction === undefined ? this.addAction() : firstRequestGroupAction;
  }
}

modelTypeRegistry.register('RequestGroupAction', RequestGroupAction, false);

/**
 * Whether or not the action is applicable
 */
export class RequestGroupActionCondition extends BackboneElement {
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
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'language',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'language', typeCode: 'string' }],
    },
    {
      elementName: 'expression',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'expression', typeCode: 'string' }],
    },
  ];

  /** applicability | start | stop (1..1) */
  kind?: valueSetCodes.ActionConditionKind;
  /** Id and extensions of the primitive `kind`. */
  _kind?: Element;

  /** Natural language description of the condition (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Language of the expression (0..1) */
  language?: string;
  /** Id and extensions of the primitive `language`. */
  _language?: Element;

  /** Boolean-valued expression (0..1) */
  expression?: string;
  /** Id and extensions of the primitive `expression`. */
  _expression?: Element;

  override fhirType(): string {
    return 'RequestGroup.action.condition';
  }

  /** FHIR JSON for this RequestGroupActionCondition, typed as the plain `RequestGroupCondition` data type. */
  override toJSON(): plainTypes.RequestGroupCondition {
    return this.serialize() as plainTypes.RequestGroupCondition;
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

  /** Natural language description of the condition (0..1) */
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

  /** Language of the expression (0..1) */
  getLanguage(): string | undefined {
    return this.language;
  }

  /** Sets `language`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setLanguage(language: string | undefined): this {
    return this.setFieldValue('language', language);
  }

  hasLanguage(): boolean {
    return this.hasFieldValue('language');
  }

  /** The element carrying the id and extensions of `language`. Created when absent. */
  getLanguageElement(): Element {
    if (this._language === undefined) {
      this._language = new Element();
    }
    return this._language;
  }

  setLanguageElement(languageElement: Element | undefined): this {
    this._language = languageElement;
    return this;
  }

  /** Boolean-valued expression (0..1) */
  getExpression(): string | undefined {
    return this.expression;
  }

  /** Sets `expression`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setExpression(expression: string | undefined): this {
    return this.setFieldValue('expression', expression);
  }

  hasExpression(): boolean {
    return this.hasFieldValue('expression');
  }

  /** The element carrying the id and extensions of `expression`. Created when absent. */
  getExpressionElement(): Element {
    if (this._expression === undefined) {
      this._expression = new Element();
    }
    return this._expression;
  }

  setExpressionElement(expressionElement: Element | undefined): this {
    this._expression = expressionElement;
    return this;
  }
}

modelTypeRegistry.register('RequestGroupActionCondition', RequestGroupActionCondition, false);

/**
 * Relationship to another action
 */
export class RequestGroupActionRelatedAction extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'actionId',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'actionId', typeCode: 'id' }],
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
  actionId?: string;
  /** Id and extensions of the primitive `actionId`. */
  _actionId?: Element;

  /** before-start | before | before-end | concurrent-with-start | concurrent | concurrent-with-end | after-start | after | after-end (1..1) */
  relationship?: valueSetCodes.ActionRelationshipType;
  /** Id and extensions of the primitive `relationship`. */
  _relationship?: Element;

  /** Time offset for the relationship (0..1) */
  offsetDuration?: Duration;
  /** Time offset for the relationship (0..1) */
  offsetRange?: Range;

  override fhirType(): string {
    return 'RequestGroup.action.relatedAction';
  }

  /** FHIR JSON for this RequestGroupActionRelatedAction, typed as the plain `RequestGroupRelatedAction` data type. */
  override toJSON(): plainTypes.RequestGroupRelatedAction {
    return this.serialize() as plainTypes.RequestGroupRelatedAction;
  }

  /** What action this is related to (1..1) */
  getActionId(): string | undefined {
    return this.actionId;
  }

  /** Sets `actionId`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setActionId(actionId: string | undefined): this {
    return this.setFieldValue('actionId', actionId);
  }

  hasActionId(): boolean {
    return this.hasFieldValue('actionId');
  }

  /** The element carrying the id and extensions of `actionId`. Created when absent. */
  getActionIdElement(): Element {
    if (this._actionId === undefined) {
      this._actionId = new Element();
    }
    return this._actionId;
  }

  setActionIdElement(actionIdElement: Element | undefined): this {
    this._actionId = actionIdElement;
    return this;
  }

  /** before-start | before | before-end | concurrent-with-start | concurrent | concurrent-with-end | after-start | after | after-end (1..1) */
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
  'RequestGroupActionRelatedAction',
  RequestGroupActionRelatedAction,
  false
);
