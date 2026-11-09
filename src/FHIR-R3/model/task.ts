/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { Address } from './address';
import { Age } from './age';
import { Annotation } from './annotation';
import { Attachment } from './attachment';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { Coding } from './coding';
import { ContactPoint } from './contactPoint';
import { Count } from './count';
import { Distance } from './distance';
import { DomainResource } from './domainResource';
import { Duration } from './duration';
import { Element } from './element';
import { HumanName } from './humanName';
import { Identifier } from './identifier';
import { Meta } from './meta';
import { Money } from './money';
import { Period } from './period';
import { Quantity } from './quantity';
import { Range } from './range';
import { Ratio } from './ratio';
import { Reference } from './reference';
import { SampledData } from './sampledData';
import { Signature } from './signature';
import { Timing } from './timing';

/**
 * Base StructureDefinition for Task Resource
 */
export class Task extends DomainResource {
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
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'definitionUri', typeCode: 'uri' },
        {
          jsonKey: 'definitionReference',
          typeCode: 'Reference',
          targetResourceTypes: ['ActivityDefinition'],
        },
      ],
    },
    {
      elementName: 'basedOn',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'basedOn', typeCode: 'Reference' }],
    },
    {
      elementName: 'groupIdentifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'groupIdentifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'partOf',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'partOf', typeCode: 'Reference', targetResourceTypes: ['Task'] }],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.TaskStatus }],
    },
    {
      elementName: 'statusReason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'statusReason', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'businessStatus',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'businessStatus', typeCode: 'CodeableConcept' }],
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
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'focus',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'focus', typeCode: 'Reference' }],
    },
    {
      elementName: 'for',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'for', typeCode: 'Reference' }],
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
      elementName: 'executionPeriod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'executionPeriod', typeCode: 'Period' }],
    },
    {
      elementName: 'authoredOn',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'authoredOn', typeCode: 'dateTime' }],
    },
    {
      elementName: 'lastModified',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'lastModified', typeCode: 'dateTime' }],
    },
    {
      elementName: 'requester',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'requester', typeCode: 'TaskRequester' }],
    },
    {
      elementName: 'performerType',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'performerType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'owner',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'owner',
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
      elementName: 'reason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reason', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
    {
      elementName: 'relevantHistory',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'relevantHistory', typeCode: 'Reference', targetResourceTypes: ['Provenance'] },
      ],
    },
    {
      elementName: 'restriction',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'restriction', typeCode: 'TaskRestriction' }],
    },
    {
      elementName: 'input',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'input', typeCode: 'TaskInput' }],
    },
    {
      elementName: 'output',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'output', typeCode: 'TaskOutput' }],
    },
  ];

  readonly resourceType = 'Task';

  /** Task Instance Identifier (0..*) */
  identifier?: Identifier[];

  /** Formal definition of task (0..1) */
  definitionUri?: string;
  /** Id and extensions of the primitive `definitionUri`. */
  _definitionUri?: Element;
  /** Formal definition of task (0..1) */
  definitionReference?: Reference;

  /** Request fulfilled by this task (0..*) */
  basedOn?: Reference[];

  /** Requisition or grouper id (0..1) */
  groupIdentifier?: Identifier;

  /** Composite task (0..*) */
  partOf?: Reference[];

  /** draft | requested | received | accepted | + (1..1) */
  status?: valueSetCodes.TaskStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Reason for current status (0..1) */
  statusReason?: CodeableConcept;

  /** E.g. "Specimen collected", "IV prepped" (0..1) */
  businessStatus?: CodeableConcept;

  /** proposal | plan | order + (1..1) */
  intent?: valueSetCodes.RequestIntent;
  /** Id and extensions of the primitive `intent`. */
  _intent?: Element;

  /** normal | urgent | asap | stat (0..1) */
  priority?: valueSetCodes.RequestPriority;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;

  /** Task Type (0..1) */
  code?: CodeableConcept;

  /** Human-readable explanation of task (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** What task is acting on (0..1) */
  focus?: Reference;

  /** Beneficiary of the Task (0..1) */
  for?: Reference;

  /** Healthcare event during which this task originated (0..1) */
  context?: Reference;

  /** Start and end time of execution (0..1) */
  executionPeriod?: Period;

  /** Task Creation Date (0..1) */
  authoredOn?: string;
  /** Id and extensions of the primitive `authoredOn`. */
  _authoredOn?: Element;

  /** Task Last Modified Date (0..1) */
  lastModified?: string;
  /** Id and extensions of the primitive `lastModified`. */
  _lastModified?: Element;

  /** Who is asking for task to be done (0..1) */
  requester?: TaskRequester;

  /** requester | dispatcher | scheduler | performer | monitor | manager | acquirer | reviewer (0..*) */
  performerType?: CodeableConcept[];

  /** Responsible individual (0..1) */
  owner?: Reference;

  /** Why task is needed (0..1) */
  reason?: CodeableConcept;

  /** Comments made about the task (0..*) */
  note?: Annotation[];

  /** Key events in history of the Task (0..*) */
  relevantHistory?: Reference[];

  /** Constraints on fulfillment tasks (0..1) */
  restriction?: TaskRestriction;

  /** Information used to perform task (0..*) */
  input?: TaskInput[];

  /** Information produced as part of task (0..*) */
  output?: TaskOutput[];

  override fhirType(): string {
    return 'Task';
  }

  /** FHIR JSON for this Task, typed as the plain `Task` data type. */
  override toJSON(): plainTypes.Task {
    return this.serialize() as plainTypes.Task;
  }

  /** Task Instance Identifier (0..*) Never undefined; an empty list is created when absent. */
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

  /** Formal definition of task (0..1) Whichever type of `definition[x]` is set. */
  getDefinition(): string | Reference | undefined {
    return this.getChoiceValue<string | Reference>('definition');
  }

  /** True when any type of `definition[x]` is set. */
  hasDefinition(): boolean {
    return this.hasChoiceValue('definition');
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

  getDefinitionReference(): Reference | undefined {
    return this.definitionReference;
  }

  /** Sets `definition[x]` as Reference and clears every other type of it. */
  setDefinitionReference(definitionReference: Reference | undefined): this {
    return this.setFieldValue('definitionReference', definitionReference);
  }

  hasDefinitionReference(): boolean {
    return this.hasFieldValue('definitionReference');
  }

  /** Request fulfilled by this task (0..*) Never undefined; an empty list is created when absent. */
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

  /** Requisition or grouper id (0..1) Created when absent. */
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

  /** Composite task (0..*) Never undefined; an empty list is created when absent. */
  getPartOf(): Reference[] {
    if (this.partOf === undefined) {
      this.partOf = [];
    }
    return this.partOf;
  }

  setPartOf(partOf: Reference[] | undefined): this {
    return this.setFieldValue('partOf', partOf);
  }

  hasPartOf(): boolean {
    return this.hasFieldValue('partOf');
  }

  /** Appends a new, empty Reference to `partOf` and returns it so it can be filled in. */
  addPartOf(): Reference;
  /** Appends the given Reference to `partOf` and returns this object for chaining. */
  addPartOf(reference: Reference): this;
  addPartOf(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('partOf', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('partOf', createdReference);
    return createdReference;
  }

  /** The first Reference of `partOf`. One is added when the list is empty. */
  getPartOfFirstRep(): Reference {
    const firstReference = this.getPartOf()[0];
    return firstReference === undefined ? this.addPartOf() : firstReference;
  }

  /** draft | requested | received | accepted | + (1..1) */
  getStatus(): valueSetCodes.TaskStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.TaskStatus | undefined): this {
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

  /** Reason for current status (0..1) Created when absent. */
  getStatusReason(): CodeableConcept {
    if (this.statusReason === undefined) {
      this.statusReason = new CodeableConcept();
    }
    return this.statusReason;
  }

  setStatusReason(statusReason: CodeableConcept | undefined): this {
    return this.setFieldValue('statusReason', statusReason);
  }

  hasStatusReason(): boolean {
    return this.hasFieldValue('statusReason');
  }

  /** E.g. "Specimen collected", "IV prepped" (0..1) Created when absent. */
  getBusinessStatus(): CodeableConcept {
    if (this.businessStatus === undefined) {
      this.businessStatus = new CodeableConcept();
    }
    return this.businessStatus;
  }

  setBusinessStatus(businessStatus: CodeableConcept | undefined): this {
    return this.setFieldValue('businessStatus', businessStatus);
  }

  hasBusinessStatus(): boolean {
    return this.hasFieldValue('businessStatus');
  }

  /** proposal | plan | order + (1..1) */
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

  /** normal | urgent | asap | stat (0..1) */
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

  /** Task Type (0..1) Created when absent. */
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

  /** Human-readable explanation of task (0..1) */
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

  /** What task is acting on (0..1) Created when absent. */
  getFocus(): Reference {
    if (this.focus === undefined) {
      this.focus = new Reference();
    }
    return this.focus;
  }

  setFocus(focus: Reference | undefined): this {
    return this.setFieldValue('focus', focus);
  }

  hasFocus(): boolean {
    return this.hasFieldValue('focus');
  }

  /** Beneficiary of the Task (0..1) Created when absent. */
  getFor(): Reference {
    if (this.for === undefined) {
      this.for = new Reference();
    }
    return this.for;
  }

  setFor(forValue: Reference | undefined): this {
    return this.setFieldValue('for', forValue);
  }

  hasFor(): boolean {
    return this.hasFieldValue('for');
  }

  /** Healthcare event during which this task originated (0..1) Created when absent. */
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

  /** Start and end time of execution (0..1) Created when absent. */
  getExecutionPeriod(): Period {
    if (this.executionPeriod === undefined) {
      this.executionPeriod = new Period();
    }
    return this.executionPeriod;
  }

  setExecutionPeriod(executionPeriod: Period | undefined): this {
    return this.setFieldValue('executionPeriod', executionPeriod);
  }

  hasExecutionPeriod(): boolean {
    return this.hasFieldValue('executionPeriod');
  }

  /** Task Creation Date (0..1) */
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

  /** Task Last Modified Date (0..1) */
  getLastModified(): string | undefined {
    return this.lastModified;
  }

  /** Sets `lastModified`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setLastModified(lastModified: string | undefined): this {
    return this.setFieldValue('lastModified', lastModified);
  }

  hasLastModified(): boolean {
    return this.hasFieldValue('lastModified');
  }

  /** The element carrying the id and extensions of `lastModified`. Created when absent. */
  getLastModifiedElement(): Element {
    if (this._lastModified === undefined) {
      this._lastModified = new Element();
    }
    return this._lastModified;
  }

  setLastModifiedElement(lastModifiedElement: Element | undefined): this {
    this._lastModified = lastModifiedElement;
    return this;
  }

  /** Who is asking for task to be done (0..1) Created when absent. */
  getRequester(): TaskRequester {
    if (this.requester === undefined) {
      this.requester = new TaskRequester();
    }
    return this.requester;
  }

  setRequester(requester: TaskRequester | undefined): this {
    return this.setFieldValue('requester', requester);
  }

  hasRequester(): boolean {
    return this.hasFieldValue('requester');
  }

  /** requester | dispatcher | scheduler | performer | monitor | manager | acquirer | reviewer (0..*) Never undefined; an empty list is created when absent. */
  getPerformerType(): CodeableConcept[] {
    if (this.performerType === undefined) {
      this.performerType = [];
    }
    return this.performerType;
  }

  setPerformerType(performerType: CodeableConcept[] | undefined): this {
    return this.setFieldValue('performerType', performerType);
  }

  hasPerformerType(): boolean {
    return this.hasFieldValue('performerType');
  }

  /** Appends a new, empty CodeableConcept to `performerType` and returns it so it can be filled in. */
  addPerformerType(): CodeableConcept;
  /** Appends the given CodeableConcept to `performerType` and returns this object for chaining. */
  addPerformerType(codeableConcept: CodeableConcept): this;
  addPerformerType(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('performerType', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('performerType', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `performerType`. One is added when the list is empty. */
  getPerformerTypeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getPerformerType()[0];
    return firstCodeableConcept === undefined ? this.addPerformerType() : firstCodeableConcept;
  }

  /** Responsible individual (0..1) Created when absent. */
  getOwner(): Reference {
    if (this.owner === undefined) {
      this.owner = new Reference();
    }
    return this.owner;
  }

  setOwner(owner: Reference | undefined): this {
    return this.setFieldValue('owner', owner);
  }

  hasOwner(): boolean {
    return this.hasFieldValue('owner');
  }

  /** Why task is needed (0..1) Created when absent. */
  getReason(): CodeableConcept {
    if (this.reason === undefined) {
      this.reason = new CodeableConcept();
    }
    return this.reason;
  }

  setReason(reason: CodeableConcept | undefined): this {
    return this.setFieldValue('reason', reason);
  }

  hasReason(): boolean {
    return this.hasFieldValue('reason');
  }

  /** Comments made about the task (0..*) Never undefined; an empty list is created when absent. */
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

  /** Key events in history of the Task (0..*) Never undefined; an empty list is created when absent. */
  getRelevantHistory(): Reference[] {
    if (this.relevantHistory === undefined) {
      this.relevantHistory = [];
    }
    return this.relevantHistory;
  }

  setRelevantHistory(relevantHistory: Reference[] | undefined): this {
    return this.setFieldValue('relevantHistory', relevantHistory);
  }

  hasRelevantHistory(): boolean {
    return this.hasFieldValue('relevantHistory');
  }

  /** Appends a new, empty Reference to `relevantHistory` and returns it so it can be filled in. */
  addRelevantHistory(): Reference;
  /** Appends the given Reference to `relevantHistory` and returns this object for chaining. */
  addRelevantHistory(reference: Reference): this;
  addRelevantHistory(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('relevantHistory', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('relevantHistory', createdReference);
    return createdReference;
  }

  /** The first Reference of `relevantHistory`. One is added when the list is empty. */
  getRelevantHistoryFirstRep(): Reference {
    const firstReference = this.getRelevantHistory()[0];
    return firstReference === undefined ? this.addRelevantHistory() : firstReference;
  }

  /** Constraints on fulfillment tasks (0..1) Created when absent. */
  getRestriction(): TaskRestriction {
    if (this.restriction === undefined) {
      this.restriction = new TaskRestriction();
    }
    return this.restriction;
  }

  setRestriction(restriction: TaskRestriction | undefined): this {
    return this.setFieldValue('restriction', restriction);
  }

  hasRestriction(): boolean {
    return this.hasFieldValue('restriction');
  }

  /** Information used to perform task (0..*) Never undefined; an empty list is created when absent. */
  getInput(): TaskInput[] {
    if (this.input === undefined) {
      this.input = [];
    }
    return this.input;
  }

  setInput(input: TaskInput[] | undefined): this {
    return this.setFieldValue('input', input);
  }

  hasInput(): boolean {
    return this.hasFieldValue('input');
  }

  /** Appends a new, empty TaskInput to `input` and returns it so it can be filled in. */
  addInput(): TaskInput;
  /** Appends the given TaskInput to `input` and returns this object for chaining. */
  addInput(taskInput: TaskInput): this;
  addInput(taskInput?: TaskInput): TaskInput | this {
    if (taskInput !== undefined) {
      return this.addFieldValue('input', taskInput);
    }
    const createdTaskInput = new TaskInput();
    this.addFieldValue('input', createdTaskInput);
    return createdTaskInput;
  }

  /** The first TaskInput of `input`. One is added when the list is empty. */
  getInputFirstRep(): TaskInput {
    const firstTaskInput = this.getInput()[0];
    return firstTaskInput === undefined ? this.addInput() : firstTaskInput;
  }

  /** Information produced as part of task (0..*) Never undefined; an empty list is created when absent. */
  getOutput(): TaskOutput[] {
    if (this.output === undefined) {
      this.output = [];
    }
    return this.output;
  }

  setOutput(output: TaskOutput[] | undefined): this {
    return this.setFieldValue('output', output);
  }

  hasOutput(): boolean {
    return this.hasFieldValue('output');
  }

  /** Appends a new, empty TaskOutput to `output` and returns it so it can be filled in. */
  addOutput(): TaskOutput;
  /** Appends the given TaskOutput to `output` and returns this object for chaining. */
  addOutput(taskOutput: TaskOutput): this;
  addOutput(taskOutput?: TaskOutput): TaskOutput | this {
    if (taskOutput !== undefined) {
      return this.addFieldValue('output', taskOutput);
    }
    const createdTaskOutput = new TaskOutput();
    this.addFieldValue('output', createdTaskOutput);
    return createdTaskOutput;
  }

  /** The first TaskOutput of `output`. One is added when the list is empty. */
  getOutputFirstRep(): TaskOutput {
    const firstTaskOutput = this.getOutput()[0];
    return firstTaskOutput === undefined ? this.addOutput() : firstTaskOutput;
  }
}

modelTypeRegistry.register('Task', Task, true);

/** True when the value is a Task model instance. */
export function isTask(candidate: unknown): candidate is Task {
  return candidate instanceof Task;
}

/**
 * Who is asking for task to be done
 */
export class TaskRequester extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'agent',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'agent',
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
        { jsonKey: 'onBehalfOf', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
  ];

  /** Individual asking for task (1..1) */
  agent?: Reference;

  /** Organization individual is acting for (0..1) */
  onBehalfOf?: Reference;

  override fhirType(): string {
    return 'Task.requester';
  }

  /** FHIR JSON for this TaskRequester, typed as the plain `TaskRequester` data type. */
  override toJSON(): plainTypes.TaskRequester {
    return this.serialize() as plainTypes.TaskRequester;
  }

  /** Individual asking for task (1..1) Created when absent. */
  getAgent(): Reference {
    if (this.agent === undefined) {
      this.agent = new Reference();
    }
    return this.agent;
  }

  setAgent(agent: Reference | undefined): this {
    return this.setFieldValue('agent', agent);
  }

  hasAgent(): boolean {
    return this.hasFieldValue('agent');
  }

  /** Organization individual is acting for (0..1) Created when absent. */
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

modelTypeRegistry.register('TaskRequester', TaskRequester, false);

/**
 * Constraints on fulfillment tasks
 */
export class TaskRestriction extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'repetitions',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'repetitions', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
    {
      elementName: 'recipient',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'recipient',
          typeCode: 'Reference',
          targetResourceTypes: [
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

  /** How many times to repeat (0..1) */
  repetitions?: number;
  /** Id and extensions of the primitive `repetitions`. */
  _repetitions?: Element;

  /** When fulfillment sought (0..1) */
  period?: Period;

  /** For whom is fulfillment sought? (0..*) */
  recipient?: Reference[];

  override fhirType(): string {
    return 'Task.restriction';
  }

  /** FHIR JSON for this TaskRestriction, typed as the plain `TaskRestriction` data type. */
  override toJSON(): plainTypes.TaskRestriction {
    return this.serialize() as plainTypes.TaskRestriction;
  }

  /** How many times to repeat (0..1) */
  getRepetitions(): number | undefined {
    return this.repetitions;
  }

  /** Sets `repetitions`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setRepetitions(repetitions: number | undefined): this {
    return this.setFieldValue('repetitions', repetitions);
  }

  hasRepetitions(): boolean {
    return this.hasFieldValue('repetitions');
  }

  /** The element carrying the id and extensions of `repetitions`. Created when absent. */
  getRepetitionsElement(): Element {
    if (this._repetitions === undefined) {
      this._repetitions = new Element();
    }
    return this._repetitions;
  }

  setRepetitionsElement(repetitionsElement: Element | undefined): this {
    this._repetitions = repetitionsElement;
    return this;
  }

  /** When fulfillment sought (0..1) Created when absent. */
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

  /** For whom is fulfillment sought? (0..*) Never undefined; an empty list is created when absent. */
  getRecipient(): Reference[] {
    if (this.recipient === undefined) {
      this.recipient = [];
    }
    return this.recipient;
  }

  setRecipient(recipient: Reference[] | undefined): this {
    return this.setFieldValue('recipient', recipient);
  }

  hasRecipient(): boolean {
    return this.hasFieldValue('recipient');
  }

  /** Appends a new, empty Reference to `recipient` and returns it so it can be filled in. */
  addRecipient(): Reference;
  /** Appends the given Reference to `recipient` and returns this object for chaining. */
  addRecipient(reference: Reference): this;
  addRecipient(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('recipient', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('recipient', createdReference);
    return createdReference;
  }

  /** The first Reference of `recipient`. One is added when the list is empty. */
  getRecipientFirstRep(): Reference {
    const firstReference = this.getRecipient()[0];
    return firstReference === undefined ? this.addRecipient() : firstReference;
  }
}

modelTypeRegistry.register('TaskRestriction', TaskRestriction, false);

/**
 * Information used to perform task
 */
export class TaskInput extends BackboneElement {
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
        { jsonKey: 'valueBase64Binary', typeCode: 'base64Binary' },
        { jsonKey: 'valueBoolean', typeCode: 'boolean' },
        { jsonKey: 'valueCode', typeCode: 'code' },
        { jsonKey: 'valueDate', typeCode: 'date' },
        { jsonKey: 'valueDateTime', typeCode: 'dateTime' },
        { jsonKey: 'valueDecimal', typeCode: 'decimal' },
        { jsonKey: 'valueId', typeCode: 'id' },
        { jsonKey: 'valueInstant', typeCode: 'instant' },
        { jsonKey: 'valueInteger', typeCode: 'integer' },
        { jsonKey: 'valueMarkdown', typeCode: 'markdown' },
        { jsonKey: 'valueOid', typeCode: 'oid' },
        { jsonKey: 'valuePositiveInt', typeCode: 'positiveInt' },
        { jsonKey: 'valueString', typeCode: 'string' },
        { jsonKey: 'valueTime', typeCode: 'time' },
        { jsonKey: 'valueUnsignedInt', typeCode: 'unsignedInt' },
        { jsonKey: 'valueUri', typeCode: 'uri' },
        { jsonKey: 'valueAddress', typeCode: 'Address' },
        { jsonKey: 'valueAge', typeCode: 'Age' },
        { jsonKey: 'valueAnnotation', typeCode: 'Annotation' },
        { jsonKey: 'valueAttachment', typeCode: 'Attachment' },
        { jsonKey: 'valueCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'valueCoding', typeCode: 'Coding' },
        { jsonKey: 'valueContactPoint', typeCode: 'ContactPoint' },
        { jsonKey: 'valueCount', typeCode: 'Count' },
        { jsonKey: 'valueDistance', typeCode: 'Distance' },
        { jsonKey: 'valueDuration', typeCode: 'Duration' },
        { jsonKey: 'valueHumanName', typeCode: 'HumanName' },
        { jsonKey: 'valueIdentifier', typeCode: 'Identifier' },
        { jsonKey: 'valueMoney', typeCode: 'Money' },
        { jsonKey: 'valuePeriod', typeCode: 'Period' },
        { jsonKey: 'valueQuantity', typeCode: 'Quantity' },
        { jsonKey: 'valueRange', typeCode: 'Range' },
        { jsonKey: 'valueRatio', typeCode: 'Ratio' },
        { jsonKey: 'valueReference', typeCode: 'Reference' },
        { jsonKey: 'valueSampledData', typeCode: 'SampledData' },
        { jsonKey: 'valueSignature', typeCode: 'Signature' },
        { jsonKey: 'valueTiming', typeCode: 'Timing' },
        { jsonKey: 'valueMeta', typeCode: 'Meta' },
      ],
    },
  ];

  /** Label for the input (1..1) */
  type?: CodeableConcept;

  /** Content to use in performing the task (1..1) */
  valueBase64Binary?: string;
  /** Id and extensions of the primitive `valueBase64Binary`. */
  _valueBase64Binary?: Element;
  /** Content to use in performing the task (1..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Content to use in performing the task (1..1) */
  valueCode?: string;
  /** Id and extensions of the primitive `valueCode`. */
  _valueCode?: Element;
  /** Content to use in performing the task (1..1) */
  valueDate?: string;
  /** Id and extensions of the primitive `valueDate`. */
  _valueDate?: Element;
  /** Content to use in performing the task (1..1) */
  valueDateTime?: string;
  /** Id and extensions of the primitive `valueDateTime`. */
  _valueDateTime?: Element;
  /** Content to use in performing the task (1..1) */
  valueDecimal?: number;
  /** Id and extensions of the primitive `valueDecimal`. */
  _valueDecimal?: Element;
  /** Content to use in performing the task (1..1) */
  valueId?: string;
  /** Id and extensions of the primitive `valueId`. */
  _valueId?: Element;
  /** Content to use in performing the task (1..1) */
  valueInstant?: string;
  /** Id and extensions of the primitive `valueInstant`. */
  _valueInstant?: Element;
  /** Content to use in performing the task (1..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** Content to use in performing the task (1..1) */
  valueMarkdown?: string;
  /** Id and extensions of the primitive `valueMarkdown`. */
  _valueMarkdown?: Element;
  /** Content to use in performing the task (1..1) */
  valueOid?: string;
  /** Id and extensions of the primitive `valueOid`. */
  _valueOid?: Element;
  /** Content to use in performing the task (1..1) */
  valuePositiveInt?: number;
  /** Id and extensions of the primitive `valuePositiveInt`. */
  _valuePositiveInt?: Element;
  /** Content to use in performing the task (1..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Content to use in performing the task (1..1) */
  valueTime?: string;
  /** Id and extensions of the primitive `valueTime`. */
  _valueTime?: Element;
  /** Content to use in performing the task (1..1) */
  valueUnsignedInt?: number;
  /** Id and extensions of the primitive `valueUnsignedInt`. */
  _valueUnsignedInt?: Element;
  /** Content to use in performing the task (1..1) */
  valueUri?: string;
  /** Id and extensions of the primitive `valueUri`. */
  _valueUri?: Element;
  /** Content to use in performing the task (1..1) */
  valueAddress?: Address;
  /** Content to use in performing the task (1..1) */
  valueAge?: Age;
  /** Content to use in performing the task (1..1) */
  valueAnnotation?: Annotation;
  /** Content to use in performing the task (1..1) */
  valueAttachment?: Attachment;
  /** Content to use in performing the task (1..1) */
  valueCodeableConcept?: CodeableConcept;
  /** Content to use in performing the task (1..1) */
  valueCoding?: Coding;
  /** Content to use in performing the task (1..1) */
  valueContactPoint?: ContactPoint;
  /** Content to use in performing the task (1..1) */
  valueCount?: Count;
  /** Content to use in performing the task (1..1) */
  valueDistance?: Distance;
  /** Content to use in performing the task (1..1) */
  valueDuration?: Duration;
  /** Content to use in performing the task (1..1) */
  valueHumanName?: HumanName;
  /** Content to use in performing the task (1..1) */
  valueIdentifier?: Identifier;
  /** Content to use in performing the task (1..1) */
  valueMoney?: Money;
  /** Content to use in performing the task (1..1) */
  valuePeriod?: Period;
  /** Content to use in performing the task (1..1) */
  valueQuantity?: Quantity;
  /** Content to use in performing the task (1..1) */
  valueRange?: Range;
  /** Content to use in performing the task (1..1) */
  valueRatio?: Ratio;
  /** Content to use in performing the task (1..1) */
  valueReference?: Reference;
  /** Content to use in performing the task (1..1) */
  valueSampledData?: SampledData;
  /** Content to use in performing the task (1..1) */
  valueSignature?: Signature;
  /** Content to use in performing the task (1..1) */
  valueTiming?: Timing;
  /** Content to use in performing the task (1..1) */
  valueMeta?: Meta;

  override fhirType(): string {
    return 'Task.input';
  }

  /** FHIR JSON for this TaskInput, typed as the plain `TaskInput` data type. */
  override toJSON(): plainTypes.TaskInput {
    return this.serialize() as plainTypes.TaskInput;
  }

  /** Label for the input (1..1) Created when absent. */
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

  /** Content to use in performing the task (1..1) Whichever type of `value[x]` is set. */
  getValue():
    | string
    | boolean
    | number
    | Address
    | Age
    | Annotation
    | Attachment
    | CodeableConcept
    | Coding
    | ContactPoint
    | Count
    | Distance
    | Duration
    | HumanName
    | Identifier
    | Money
    | Period
    | Quantity
    | Range
    | Ratio
    | Reference
    | SampledData
    | Signature
    | Timing
    | Meta
    | undefined {
    return this.getChoiceValue<
      | string
      | boolean
      | number
      | Address
      | Age
      | Annotation
      | Attachment
      | CodeableConcept
      | Coding
      | ContactPoint
      | Count
      | Distance
      | Duration
      | HumanName
      | Identifier
      | Money
      | Period
      | Quantity
      | Range
      | Ratio
      | Reference
      | SampledData
      | Signature
      | Timing
      | Meta
    >('value');
  }

  /** True when any type of `value[x]` is set. */
  hasValue(): boolean {
    return this.hasChoiceValue('value');
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

  getValueCode(): string | undefined {
    return this.valueCode;
  }

  /** Sets `value[x]` as code and clears every other type of it. */
  setValueCode(valueCode: string | undefined): this {
    return this.setFieldValue('valueCode', valueCode);
  }

  hasValueCode(): boolean {
    return this.hasFieldValue('valueCode');
  }

  getValueDate(): string | undefined {
    return this.valueDate;
  }

  /** Sets `value[x]` as date and clears every other type of it. */
  setValueDate(valueDate: string | undefined): this {
    return this.setFieldValue('valueDate', valueDate);
  }

  hasValueDate(): boolean {
    return this.hasFieldValue('valueDate');
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

  getValueDecimal(): number | undefined {
    return this.valueDecimal;
  }

  /** Sets `value[x]` as decimal and clears every other type of it. */
  setValueDecimal(valueDecimal: number | undefined): this {
    return this.setFieldValue('valueDecimal', valueDecimal);
  }

  hasValueDecimal(): boolean {
    return this.hasFieldValue('valueDecimal');
  }

  getValueId(): string | undefined {
    return this.valueId;
  }

  /** Sets `value[x]` as id and clears every other type of it. */
  setValueId(valueId: string | undefined): this {
    return this.setFieldValue('valueId', valueId);
  }

  hasValueId(): boolean {
    return this.hasFieldValue('valueId');
  }

  getValueInstant(): string | undefined {
    return this.valueInstant;
  }

  /** Sets `value[x]` as instant and clears every other type of it. */
  setValueInstant(valueInstant: string | undefined): this {
    return this.setFieldValue('valueInstant', valueInstant);
  }

  hasValueInstant(): boolean {
    return this.hasFieldValue('valueInstant');
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

  getValueMarkdown(): string | undefined {
    return this.valueMarkdown;
  }

  /** Sets `value[x]` as markdown and clears every other type of it. */
  setValueMarkdown(valueMarkdown: string | undefined): this {
    return this.setFieldValue('valueMarkdown', valueMarkdown);
  }

  hasValueMarkdown(): boolean {
    return this.hasFieldValue('valueMarkdown');
  }

  getValueOid(): string | undefined {
    return this.valueOid;
  }

  /** Sets `value[x]` as oid and clears every other type of it. */
  setValueOid(valueOid: string | undefined): this {
    return this.setFieldValue('valueOid', valueOid);
  }

  hasValueOid(): boolean {
    return this.hasFieldValue('valueOid');
  }

  getValuePositiveInt(): number | undefined {
    return this.valuePositiveInt;
  }

  /** Sets `value[x]` as positiveInt and clears every other type of it. */
  setValuePositiveInt(valuePositiveInt: number | undefined): this {
    return this.setFieldValue('valuePositiveInt', valuePositiveInt);
  }

  hasValuePositiveInt(): boolean {
    return this.hasFieldValue('valuePositiveInt');
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

  getValueUnsignedInt(): number | undefined {
    return this.valueUnsignedInt;
  }

  /** Sets `value[x]` as unsignedInt and clears every other type of it. */
  setValueUnsignedInt(valueUnsignedInt: number | undefined): this {
    return this.setFieldValue('valueUnsignedInt', valueUnsignedInt);
  }

  hasValueUnsignedInt(): boolean {
    return this.hasFieldValue('valueUnsignedInt');
  }

  getValueUri(): string | undefined {
    return this.valueUri;
  }

  /** Sets `value[x]` as uri and clears every other type of it. */
  setValueUri(valueUri: string | undefined): this {
    return this.setFieldValue('valueUri', valueUri);
  }

  hasValueUri(): boolean {
    return this.hasFieldValue('valueUri');
  }

  getValueAddress(): Address | undefined {
    return this.valueAddress;
  }

  /** Sets `value[x]` as Address and clears every other type of it. */
  setValueAddress(valueAddress: Address | undefined): this {
    return this.setFieldValue('valueAddress', valueAddress);
  }

  hasValueAddress(): boolean {
    return this.hasFieldValue('valueAddress');
  }

  getValueAge(): Age | undefined {
    return this.valueAge;
  }

  /** Sets `value[x]` as Age and clears every other type of it. */
  setValueAge(valueAge: Age | undefined): this {
    return this.setFieldValue('valueAge', valueAge);
  }

  hasValueAge(): boolean {
    return this.hasFieldValue('valueAge');
  }

  getValueAnnotation(): Annotation | undefined {
    return this.valueAnnotation;
  }

  /** Sets `value[x]` as Annotation and clears every other type of it. */
  setValueAnnotation(valueAnnotation: Annotation | undefined): this {
    return this.setFieldValue('valueAnnotation', valueAnnotation);
  }

  hasValueAnnotation(): boolean {
    return this.hasFieldValue('valueAnnotation');
  }

  getValueAttachment(): Attachment | undefined {
    return this.valueAttachment;
  }

  /** Sets `value[x]` as Attachment and clears every other type of it. */
  setValueAttachment(valueAttachment: Attachment | undefined): this {
    return this.setFieldValue('valueAttachment', valueAttachment);
  }

  hasValueAttachment(): boolean {
    return this.hasFieldValue('valueAttachment');
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

  getValueCoding(): Coding | undefined {
    return this.valueCoding;
  }

  /** Sets `value[x]` as Coding and clears every other type of it. */
  setValueCoding(valueCoding: Coding | undefined): this {
    return this.setFieldValue('valueCoding', valueCoding);
  }

  hasValueCoding(): boolean {
    return this.hasFieldValue('valueCoding');
  }

  getValueContactPoint(): ContactPoint | undefined {
    return this.valueContactPoint;
  }

  /** Sets `value[x]` as ContactPoint and clears every other type of it. */
  setValueContactPoint(valueContactPoint: ContactPoint | undefined): this {
    return this.setFieldValue('valueContactPoint', valueContactPoint);
  }

  hasValueContactPoint(): boolean {
    return this.hasFieldValue('valueContactPoint');
  }

  getValueCount(): Count | undefined {
    return this.valueCount;
  }

  /** Sets `value[x]` as Count and clears every other type of it. */
  setValueCount(valueCount: Count | undefined): this {
    return this.setFieldValue('valueCount', valueCount);
  }

  hasValueCount(): boolean {
    return this.hasFieldValue('valueCount');
  }

  getValueDistance(): Distance | undefined {
    return this.valueDistance;
  }

  /** Sets `value[x]` as Distance and clears every other type of it. */
  setValueDistance(valueDistance: Distance | undefined): this {
    return this.setFieldValue('valueDistance', valueDistance);
  }

  hasValueDistance(): boolean {
    return this.hasFieldValue('valueDistance');
  }

  getValueDuration(): Duration | undefined {
    return this.valueDuration;
  }

  /** Sets `value[x]` as Duration and clears every other type of it. */
  setValueDuration(valueDuration: Duration | undefined): this {
    return this.setFieldValue('valueDuration', valueDuration);
  }

  hasValueDuration(): boolean {
    return this.hasFieldValue('valueDuration');
  }

  getValueHumanName(): HumanName | undefined {
    return this.valueHumanName;
  }

  /** Sets `value[x]` as HumanName and clears every other type of it. */
  setValueHumanName(valueHumanName: HumanName | undefined): this {
    return this.setFieldValue('valueHumanName', valueHumanName);
  }

  hasValueHumanName(): boolean {
    return this.hasFieldValue('valueHumanName');
  }

  getValueIdentifier(): Identifier | undefined {
    return this.valueIdentifier;
  }

  /** Sets `value[x]` as Identifier and clears every other type of it. */
  setValueIdentifier(valueIdentifier: Identifier | undefined): this {
    return this.setFieldValue('valueIdentifier', valueIdentifier);
  }

  hasValueIdentifier(): boolean {
    return this.hasFieldValue('valueIdentifier');
  }

  getValueMoney(): Money | undefined {
    return this.valueMoney;
  }

  /** Sets `value[x]` as Money and clears every other type of it. */
  setValueMoney(valueMoney: Money | undefined): this {
    return this.setFieldValue('valueMoney', valueMoney);
  }

  hasValueMoney(): boolean {
    return this.hasFieldValue('valueMoney');
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

  getValueReference(): Reference | undefined {
    return this.valueReference;
  }

  /** Sets `value[x]` as Reference and clears every other type of it. */
  setValueReference(valueReference: Reference | undefined): this {
    return this.setFieldValue('valueReference', valueReference);
  }

  hasValueReference(): boolean {
    return this.hasFieldValue('valueReference');
  }

  getValueSampledData(): SampledData | undefined {
    return this.valueSampledData;
  }

  /** Sets `value[x]` as SampledData and clears every other type of it. */
  setValueSampledData(valueSampledData: SampledData | undefined): this {
    return this.setFieldValue('valueSampledData', valueSampledData);
  }

  hasValueSampledData(): boolean {
    return this.hasFieldValue('valueSampledData');
  }

  getValueSignature(): Signature | undefined {
    return this.valueSignature;
  }

  /** Sets `value[x]` as Signature and clears every other type of it. */
  setValueSignature(valueSignature: Signature | undefined): this {
    return this.setFieldValue('valueSignature', valueSignature);
  }

  hasValueSignature(): boolean {
    return this.hasFieldValue('valueSignature');
  }

  getValueTiming(): Timing | undefined {
    return this.valueTiming;
  }

  /** Sets `value[x]` as Timing and clears every other type of it. */
  setValueTiming(valueTiming: Timing | undefined): this {
    return this.setFieldValue('valueTiming', valueTiming);
  }

  hasValueTiming(): boolean {
    return this.hasFieldValue('valueTiming');
  }

  getValueMeta(): Meta | undefined {
    return this.valueMeta;
  }

  /** Sets `value[x]` as Meta and clears every other type of it. */
  setValueMeta(valueMeta: Meta | undefined): this {
    return this.setFieldValue('valueMeta', valueMeta);
  }

  hasValueMeta(): boolean {
    return this.hasFieldValue('valueMeta');
  }
}

modelTypeRegistry.register('TaskInput', TaskInput, false);

/**
 * Information produced as part of task
 */
export class TaskOutput extends BackboneElement {
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
        { jsonKey: 'valueBase64Binary', typeCode: 'base64Binary' },
        { jsonKey: 'valueBoolean', typeCode: 'boolean' },
        { jsonKey: 'valueCode', typeCode: 'code' },
        { jsonKey: 'valueDate', typeCode: 'date' },
        { jsonKey: 'valueDateTime', typeCode: 'dateTime' },
        { jsonKey: 'valueDecimal', typeCode: 'decimal' },
        { jsonKey: 'valueId', typeCode: 'id' },
        { jsonKey: 'valueInstant', typeCode: 'instant' },
        { jsonKey: 'valueInteger', typeCode: 'integer' },
        { jsonKey: 'valueMarkdown', typeCode: 'markdown' },
        { jsonKey: 'valueOid', typeCode: 'oid' },
        { jsonKey: 'valuePositiveInt', typeCode: 'positiveInt' },
        { jsonKey: 'valueString', typeCode: 'string' },
        { jsonKey: 'valueTime', typeCode: 'time' },
        { jsonKey: 'valueUnsignedInt', typeCode: 'unsignedInt' },
        { jsonKey: 'valueUri', typeCode: 'uri' },
        { jsonKey: 'valueAddress', typeCode: 'Address' },
        { jsonKey: 'valueAge', typeCode: 'Age' },
        { jsonKey: 'valueAnnotation', typeCode: 'Annotation' },
        { jsonKey: 'valueAttachment', typeCode: 'Attachment' },
        { jsonKey: 'valueCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'valueCoding', typeCode: 'Coding' },
        { jsonKey: 'valueContactPoint', typeCode: 'ContactPoint' },
        { jsonKey: 'valueCount', typeCode: 'Count' },
        { jsonKey: 'valueDistance', typeCode: 'Distance' },
        { jsonKey: 'valueDuration', typeCode: 'Duration' },
        { jsonKey: 'valueHumanName', typeCode: 'HumanName' },
        { jsonKey: 'valueIdentifier', typeCode: 'Identifier' },
        { jsonKey: 'valueMoney', typeCode: 'Money' },
        { jsonKey: 'valuePeriod', typeCode: 'Period' },
        { jsonKey: 'valueQuantity', typeCode: 'Quantity' },
        { jsonKey: 'valueRange', typeCode: 'Range' },
        { jsonKey: 'valueRatio', typeCode: 'Ratio' },
        { jsonKey: 'valueReference', typeCode: 'Reference' },
        { jsonKey: 'valueSampledData', typeCode: 'SampledData' },
        { jsonKey: 'valueSignature', typeCode: 'Signature' },
        { jsonKey: 'valueTiming', typeCode: 'Timing' },
        { jsonKey: 'valueMeta', typeCode: 'Meta' },
      ],
    },
  ];

  /** Label for output (1..1) */
  type?: CodeableConcept;

  /** Result of output (1..1) */
  valueBase64Binary?: string;
  /** Id and extensions of the primitive `valueBase64Binary`. */
  _valueBase64Binary?: Element;
  /** Result of output (1..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Result of output (1..1) */
  valueCode?: string;
  /** Id and extensions of the primitive `valueCode`. */
  _valueCode?: Element;
  /** Result of output (1..1) */
  valueDate?: string;
  /** Id and extensions of the primitive `valueDate`. */
  _valueDate?: Element;
  /** Result of output (1..1) */
  valueDateTime?: string;
  /** Id and extensions of the primitive `valueDateTime`. */
  _valueDateTime?: Element;
  /** Result of output (1..1) */
  valueDecimal?: number;
  /** Id and extensions of the primitive `valueDecimal`. */
  _valueDecimal?: Element;
  /** Result of output (1..1) */
  valueId?: string;
  /** Id and extensions of the primitive `valueId`. */
  _valueId?: Element;
  /** Result of output (1..1) */
  valueInstant?: string;
  /** Id and extensions of the primitive `valueInstant`. */
  _valueInstant?: Element;
  /** Result of output (1..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** Result of output (1..1) */
  valueMarkdown?: string;
  /** Id and extensions of the primitive `valueMarkdown`. */
  _valueMarkdown?: Element;
  /** Result of output (1..1) */
  valueOid?: string;
  /** Id and extensions of the primitive `valueOid`. */
  _valueOid?: Element;
  /** Result of output (1..1) */
  valuePositiveInt?: number;
  /** Id and extensions of the primitive `valuePositiveInt`. */
  _valuePositiveInt?: Element;
  /** Result of output (1..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Result of output (1..1) */
  valueTime?: string;
  /** Id and extensions of the primitive `valueTime`. */
  _valueTime?: Element;
  /** Result of output (1..1) */
  valueUnsignedInt?: number;
  /** Id and extensions of the primitive `valueUnsignedInt`. */
  _valueUnsignedInt?: Element;
  /** Result of output (1..1) */
  valueUri?: string;
  /** Id and extensions of the primitive `valueUri`. */
  _valueUri?: Element;
  /** Result of output (1..1) */
  valueAddress?: Address;
  /** Result of output (1..1) */
  valueAge?: Age;
  /** Result of output (1..1) */
  valueAnnotation?: Annotation;
  /** Result of output (1..1) */
  valueAttachment?: Attachment;
  /** Result of output (1..1) */
  valueCodeableConcept?: CodeableConcept;
  /** Result of output (1..1) */
  valueCoding?: Coding;
  /** Result of output (1..1) */
  valueContactPoint?: ContactPoint;
  /** Result of output (1..1) */
  valueCount?: Count;
  /** Result of output (1..1) */
  valueDistance?: Distance;
  /** Result of output (1..1) */
  valueDuration?: Duration;
  /** Result of output (1..1) */
  valueHumanName?: HumanName;
  /** Result of output (1..1) */
  valueIdentifier?: Identifier;
  /** Result of output (1..1) */
  valueMoney?: Money;
  /** Result of output (1..1) */
  valuePeriod?: Period;
  /** Result of output (1..1) */
  valueQuantity?: Quantity;
  /** Result of output (1..1) */
  valueRange?: Range;
  /** Result of output (1..1) */
  valueRatio?: Ratio;
  /** Result of output (1..1) */
  valueReference?: Reference;
  /** Result of output (1..1) */
  valueSampledData?: SampledData;
  /** Result of output (1..1) */
  valueSignature?: Signature;
  /** Result of output (1..1) */
  valueTiming?: Timing;
  /** Result of output (1..1) */
  valueMeta?: Meta;

  override fhirType(): string {
    return 'Task.output';
  }

  /** FHIR JSON for this TaskOutput, typed as the plain `TaskOutput` data type. */
  override toJSON(): plainTypes.TaskOutput {
    return this.serialize() as plainTypes.TaskOutput;
  }

  /** Label for output (1..1) Created when absent. */
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

  /** Result of output (1..1) Whichever type of `value[x]` is set. */
  getValue():
    | string
    | boolean
    | number
    | Address
    | Age
    | Annotation
    | Attachment
    | CodeableConcept
    | Coding
    | ContactPoint
    | Count
    | Distance
    | Duration
    | HumanName
    | Identifier
    | Money
    | Period
    | Quantity
    | Range
    | Ratio
    | Reference
    | SampledData
    | Signature
    | Timing
    | Meta
    | undefined {
    return this.getChoiceValue<
      | string
      | boolean
      | number
      | Address
      | Age
      | Annotation
      | Attachment
      | CodeableConcept
      | Coding
      | ContactPoint
      | Count
      | Distance
      | Duration
      | HumanName
      | Identifier
      | Money
      | Period
      | Quantity
      | Range
      | Ratio
      | Reference
      | SampledData
      | Signature
      | Timing
      | Meta
    >('value');
  }

  /** True when any type of `value[x]` is set. */
  hasValue(): boolean {
    return this.hasChoiceValue('value');
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

  getValueCode(): string | undefined {
    return this.valueCode;
  }

  /** Sets `value[x]` as code and clears every other type of it. */
  setValueCode(valueCode: string | undefined): this {
    return this.setFieldValue('valueCode', valueCode);
  }

  hasValueCode(): boolean {
    return this.hasFieldValue('valueCode');
  }

  getValueDate(): string | undefined {
    return this.valueDate;
  }

  /** Sets `value[x]` as date and clears every other type of it. */
  setValueDate(valueDate: string | undefined): this {
    return this.setFieldValue('valueDate', valueDate);
  }

  hasValueDate(): boolean {
    return this.hasFieldValue('valueDate');
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

  getValueDecimal(): number | undefined {
    return this.valueDecimal;
  }

  /** Sets `value[x]` as decimal and clears every other type of it. */
  setValueDecimal(valueDecimal: number | undefined): this {
    return this.setFieldValue('valueDecimal', valueDecimal);
  }

  hasValueDecimal(): boolean {
    return this.hasFieldValue('valueDecimal');
  }

  getValueId(): string | undefined {
    return this.valueId;
  }

  /** Sets `value[x]` as id and clears every other type of it. */
  setValueId(valueId: string | undefined): this {
    return this.setFieldValue('valueId', valueId);
  }

  hasValueId(): boolean {
    return this.hasFieldValue('valueId');
  }

  getValueInstant(): string | undefined {
    return this.valueInstant;
  }

  /** Sets `value[x]` as instant and clears every other type of it. */
  setValueInstant(valueInstant: string | undefined): this {
    return this.setFieldValue('valueInstant', valueInstant);
  }

  hasValueInstant(): boolean {
    return this.hasFieldValue('valueInstant');
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

  getValueMarkdown(): string | undefined {
    return this.valueMarkdown;
  }

  /** Sets `value[x]` as markdown and clears every other type of it. */
  setValueMarkdown(valueMarkdown: string | undefined): this {
    return this.setFieldValue('valueMarkdown', valueMarkdown);
  }

  hasValueMarkdown(): boolean {
    return this.hasFieldValue('valueMarkdown');
  }

  getValueOid(): string | undefined {
    return this.valueOid;
  }

  /** Sets `value[x]` as oid and clears every other type of it. */
  setValueOid(valueOid: string | undefined): this {
    return this.setFieldValue('valueOid', valueOid);
  }

  hasValueOid(): boolean {
    return this.hasFieldValue('valueOid');
  }

  getValuePositiveInt(): number | undefined {
    return this.valuePositiveInt;
  }

  /** Sets `value[x]` as positiveInt and clears every other type of it. */
  setValuePositiveInt(valuePositiveInt: number | undefined): this {
    return this.setFieldValue('valuePositiveInt', valuePositiveInt);
  }

  hasValuePositiveInt(): boolean {
    return this.hasFieldValue('valuePositiveInt');
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

  getValueUnsignedInt(): number | undefined {
    return this.valueUnsignedInt;
  }

  /** Sets `value[x]` as unsignedInt and clears every other type of it. */
  setValueUnsignedInt(valueUnsignedInt: number | undefined): this {
    return this.setFieldValue('valueUnsignedInt', valueUnsignedInt);
  }

  hasValueUnsignedInt(): boolean {
    return this.hasFieldValue('valueUnsignedInt');
  }

  getValueUri(): string | undefined {
    return this.valueUri;
  }

  /** Sets `value[x]` as uri and clears every other type of it. */
  setValueUri(valueUri: string | undefined): this {
    return this.setFieldValue('valueUri', valueUri);
  }

  hasValueUri(): boolean {
    return this.hasFieldValue('valueUri');
  }

  getValueAddress(): Address | undefined {
    return this.valueAddress;
  }

  /** Sets `value[x]` as Address and clears every other type of it. */
  setValueAddress(valueAddress: Address | undefined): this {
    return this.setFieldValue('valueAddress', valueAddress);
  }

  hasValueAddress(): boolean {
    return this.hasFieldValue('valueAddress');
  }

  getValueAge(): Age | undefined {
    return this.valueAge;
  }

  /** Sets `value[x]` as Age and clears every other type of it. */
  setValueAge(valueAge: Age | undefined): this {
    return this.setFieldValue('valueAge', valueAge);
  }

  hasValueAge(): boolean {
    return this.hasFieldValue('valueAge');
  }

  getValueAnnotation(): Annotation | undefined {
    return this.valueAnnotation;
  }

  /** Sets `value[x]` as Annotation and clears every other type of it. */
  setValueAnnotation(valueAnnotation: Annotation | undefined): this {
    return this.setFieldValue('valueAnnotation', valueAnnotation);
  }

  hasValueAnnotation(): boolean {
    return this.hasFieldValue('valueAnnotation');
  }

  getValueAttachment(): Attachment | undefined {
    return this.valueAttachment;
  }

  /** Sets `value[x]` as Attachment and clears every other type of it. */
  setValueAttachment(valueAttachment: Attachment | undefined): this {
    return this.setFieldValue('valueAttachment', valueAttachment);
  }

  hasValueAttachment(): boolean {
    return this.hasFieldValue('valueAttachment');
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

  getValueCoding(): Coding | undefined {
    return this.valueCoding;
  }

  /** Sets `value[x]` as Coding and clears every other type of it. */
  setValueCoding(valueCoding: Coding | undefined): this {
    return this.setFieldValue('valueCoding', valueCoding);
  }

  hasValueCoding(): boolean {
    return this.hasFieldValue('valueCoding');
  }

  getValueContactPoint(): ContactPoint | undefined {
    return this.valueContactPoint;
  }

  /** Sets `value[x]` as ContactPoint and clears every other type of it. */
  setValueContactPoint(valueContactPoint: ContactPoint | undefined): this {
    return this.setFieldValue('valueContactPoint', valueContactPoint);
  }

  hasValueContactPoint(): boolean {
    return this.hasFieldValue('valueContactPoint');
  }

  getValueCount(): Count | undefined {
    return this.valueCount;
  }

  /** Sets `value[x]` as Count and clears every other type of it. */
  setValueCount(valueCount: Count | undefined): this {
    return this.setFieldValue('valueCount', valueCount);
  }

  hasValueCount(): boolean {
    return this.hasFieldValue('valueCount');
  }

  getValueDistance(): Distance | undefined {
    return this.valueDistance;
  }

  /** Sets `value[x]` as Distance and clears every other type of it. */
  setValueDistance(valueDistance: Distance | undefined): this {
    return this.setFieldValue('valueDistance', valueDistance);
  }

  hasValueDistance(): boolean {
    return this.hasFieldValue('valueDistance');
  }

  getValueDuration(): Duration | undefined {
    return this.valueDuration;
  }

  /** Sets `value[x]` as Duration and clears every other type of it. */
  setValueDuration(valueDuration: Duration | undefined): this {
    return this.setFieldValue('valueDuration', valueDuration);
  }

  hasValueDuration(): boolean {
    return this.hasFieldValue('valueDuration');
  }

  getValueHumanName(): HumanName | undefined {
    return this.valueHumanName;
  }

  /** Sets `value[x]` as HumanName and clears every other type of it. */
  setValueHumanName(valueHumanName: HumanName | undefined): this {
    return this.setFieldValue('valueHumanName', valueHumanName);
  }

  hasValueHumanName(): boolean {
    return this.hasFieldValue('valueHumanName');
  }

  getValueIdentifier(): Identifier | undefined {
    return this.valueIdentifier;
  }

  /** Sets `value[x]` as Identifier and clears every other type of it. */
  setValueIdentifier(valueIdentifier: Identifier | undefined): this {
    return this.setFieldValue('valueIdentifier', valueIdentifier);
  }

  hasValueIdentifier(): boolean {
    return this.hasFieldValue('valueIdentifier');
  }

  getValueMoney(): Money | undefined {
    return this.valueMoney;
  }

  /** Sets `value[x]` as Money and clears every other type of it. */
  setValueMoney(valueMoney: Money | undefined): this {
    return this.setFieldValue('valueMoney', valueMoney);
  }

  hasValueMoney(): boolean {
    return this.hasFieldValue('valueMoney');
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

  getValueReference(): Reference | undefined {
    return this.valueReference;
  }

  /** Sets `value[x]` as Reference and clears every other type of it. */
  setValueReference(valueReference: Reference | undefined): this {
    return this.setFieldValue('valueReference', valueReference);
  }

  hasValueReference(): boolean {
    return this.hasFieldValue('valueReference');
  }

  getValueSampledData(): SampledData | undefined {
    return this.valueSampledData;
  }

  /** Sets `value[x]` as SampledData and clears every other type of it. */
  setValueSampledData(valueSampledData: SampledData | undefined): this {
    return this.setFieldValue('valueSampledData', valueSampledData);
  }

  hasValueSampledData(): boolean {
    return this.hasFieldValue('valueSampledData');
  }

  getValueSignature(): Signature | undefined {
    return this.valueSignature;
  }

  /** Sets `value[x]` as Signature and clears every other type of it. */
  setValueSignature(valueSignature: Signature | undefined): this {
    return this.setFieldValue('valueSignature', valueSignature);
  }

  hasValueSignature(): boolean {
    return this.hasFieldValue('valueSignature');
  }

  getValueTiming(): Timing | undefined {
    return this.valueTiming;
  }

  /** Sets `value[x]` as Timing and clears every other type of it. */
  setValueTiming(valueTiming: Timing | undefined): this {
    return this.setFieldValue('valueTiming', valueTiming);
  }

  hasValueTiming(): boolean {
    return this.hasFieldValue('valueTiming');
  }

  getValueMeta(): Meta | undefined {
    return this.valueMeta;
  }

  /** Sets `value[x]` as Meta and clears every other type of it. */
  setValueMeta(valueMeta: Meta | undefined): this {
    return this.setFieldValue('valueMeta', valueMeta);
  }

  hasValueMeta(): boolean {
    return this.hasFieldValue('valueMeta');
  }
}

modelTypeRegistry.register('TaskOutput', TaskOutput, false);
