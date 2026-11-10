/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { Address } from './address';
import { Age } from './age';
import { Annotation } from './annotation';
import { Attachment } from './attachment';
import { Availability } from './availability';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { CodeableReference } from './codeableReference';
import { Coding } from './coding';
import { ContactDetail } from './contactDetail';
import { ContactPoint } from './contactPoint';
import { Count } from './count';
import { DataRequirement } from './dataRequirement';
import { Distance } from './distance';
import { DomainResource } from './domainResource';
import { Dosage } from './dosage';
import { Duration } from './duration';
import { Element } from './element';
import { Expression } from './expression';
import { ExtendedContactDetail } from './extendedContactDetail';
import { HumanName } from './humanName';
import { Identifier } from './identifier';
import { Meta } from './meta';
import { Money } from './money';
import { ParameterDefinition } from './parameterDefinition';
import { Period } from './period';
import { Quantity } from './quantity';
import { Range } from './range';
import { Ratio } from './ratio';
import { RatioRange } from './ratioRange';
import { Reference } from './reference';
import { RelatedArtifact } from './relatedArtifact';
import { SampledData } from './sampledData';
import { Signature } from './signature';
import { Timing } from './timing';
import { TriggerDefinition } from './triggerDefinition';
import { UsageContext } from './usageContext';

/**
 * Record of transport.
 */
export class Transport extends DomainResource {
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
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'instantiatesCanonical', typeCode: 'canonical' }],
    },
    {
      elementName: 'instantiatesUri',
      minimum: 0,
      maximum: 1,
      isList: false,
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
      types: [{ jsonKey: 'partOf', typeCode: 'Reference', targetResourceTypes: ['Transport'] }],
    },
    {
      elementName: 'status',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.TransportStatus }],
    },
    {
      elementName: 'statusReason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'statusReason', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'intent',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'intent', typeCode: 'code', allowedCodes: valueSetCodes.TransportIntent }],
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
      elementName: 'encounter',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'encounter', typeCode: 'Reference', targetResourceTypes: ['Encounter'] }],
    },
    {
      elementName: 'completionTime',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'completionTime', typeCode: 'dateTime' }],
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
      types: [
        {
          jsonKey: 'requester',
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
            'CareTeam',
            'Device',
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
      elementName: 'location',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'location', typeCode: 'Reference', targetResourceTypes: ['Location'] }],
    },
    {
      elementName: 'insurance',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'insurance',
          typeCode: 'Reference',
          targetResourceTypes: ['ClaimResponse', 'Coverage'],
        },
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
      types: [{ jsonKey: 'restriction', typeCode: 'TransportRestriction' }],
    },
    {
      elementName: 'input',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'input', typeCode: 'TransportInput' }],
    },
    {
      elementName: 'output',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'output', typeCode: 'TransportOutput' }],
    },
    {
      elementName: 'requestedLocation',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'requestedLocation', typeCode: 'Reference', targetResourceTypes: ['Location'] },
      ],
    },
    {
      elementName: 'currentLocation',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'currentLocation', typeCode: 'Reference', targetResourceTypes: ['Location'] },
      ],
    },
    {
      elementName: 'reason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reason', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'history',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'history', typeCode: 'Reference', targetResourceTypes: ['Transport'] }],
    },
  ];

  readonly resourceType = 'Transport';

  /** External identifier (0..*) */
  identifier?: Identifier[];

  /** Formal definition of transport (0..1) */
  instantiatesCanonical?: string;
  /** Id and extensions of the primitive `instantiatesCanonical`. */
  _instantiatesCanonical?: Element;

  /** Formal definition of transport (0..1) */
  instantiatesUri?: string;
  /** Id and extensions of the primitive `instantiatesUri`. */
  _instantiatesUri?: Element;

  /** Request fulfilled by this transport (0..*) */
  basedOn?: Reference[];

  /** Requisition or grouper id (0..1) */
  groupIdentifier?: Identifier;

  /** Part of referenced event (0..*) */
  partOf?: Reference[];

  /** in-progress | completed | abandoned | cancelled | planned | entered-in-error (0..1) */
  status?: valueSetCodes.TransportStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Reason for current status (0..1) */
  statusReason?: CodeableConcept;

  /** unknown | proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option (1..1) */
  intent?: valueSetCodes.TransportIntent;
  /** Id and extensions of the primitive `intent`. */
  _intent?: Element;

  /** routine | urgent | asap | stat (0..1) */
  priority?: valueSetCodes.RequestPriority;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;

  /** Transport Type (0..1) */
  code?: CodeableConcept;

  /** Human-readable explanation of transport (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** What transport is acting on (0..1) */
  focus?: Reference;

  /** Beneficiary of the Transport (0..1) */
  for?: Reference;

  /** Healthcare event during which this transport originated (0..1) */
  encounter?: Reference;

  /** Completion time of the event (the occurrence) (0..1) */
  completionTime?: string;
  /** Id and extensions of the primitive `completionTime`. */
  _completionTime?: Element;

  /** Transport Creation Date (0..1) */
  authoredOn?: string;
  /** Id and extensions of the primitive `authoredOn`. */
  _authoredOn?: Element;

  /** Transport Last Modified Date (0..1) */
  lastModified?: string;
  /** Id and extensions of the primitive `lastModified`. */
  _lastModified?: Element;

  /** Who is asking for transport to be done (0..1) */
  requester?: Reference;

  /** Requested performer (0..*) */
  performerType?: CodeableConcept[];

  /** Responsible individual (0..1) */
  owner?: Reference;

  /** Where transport occurs (0..1) */
  location?: Reference;

  /** Associated insurance coverage (0..*) */
  insurance?: Reference[];

  /** Comments made about the transport (0..*) */
  note?: Annotation[];

  /** Key events in history of the Transport (0..*) */
  relevantHistory?: Reference[];

  /** Constraints on fulfillment transports (0..1) */
  restriction?: TransportRestriction;

  /** Information used to perform transport (0..*) */
  input?: TransportInput[];

  /** Information produced as part of transport (0..*) */
  output?: TransportOutput[];

  /** The desired location (1..1) */
  requestedLocation?: Reference;

  /** The entity current location (1..1) */
  currentLocation?: Reference;

  /** Why transport is needed (0..1) */
  reason?: CodeableReference;

  /** Parent (or preceding) transport (0..1) */
  history?: Reference;

  override fhirType(): string {
    return 'Transport';
  }

  /** FHIR JSON for this Transport, typed as the plain `Transport` data type. */
  override toJSON(): plainTypes.Transport {
    return this.serialize() as plainTypes.Transport;
  }

  /** External identifier (0..*) Never undefined; an empty list is created when absent. */
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

  /** Formal definition of transport (0..1) */
  getInstantiatesCanonical(): string | undefined {
    return this.instantiatesCanonical;
  }

  /** Sets `instantiatesCanonical`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setInstantiatesCanonical(instantiatesCanonical: string | undefined): this {
    return this.setFieldValue('instantiatesCanonical', instantiatesCanonical);
  }

  hasInstantiatesCanonical(): boolean {
    return this.hasFieldValue('instantiatesCanonical');
  }

  /** The element carrying the id and extensions of `instantiatesCanonical`. Created when absent. */
  getInstantiatesCanonicalElement(): Element {
    if (this._instantiatesCanonical === undefined) {
      this._instantiatesCanonical = new Element();
    }
    return this._instantiatesCanonical;
  }

  setInstantiatesCanonicalElement(instantiatesCanonicalElement: Element | undefined): this {
    this._instantiatesCanonical = instantiatesCanonicalElement;
    return this;
  }

  /** Formal definition of transport (0..1) */
  getInstantiatesUri(): string | undefined {
    return this.instantiatesUri;
  }

  /** Sets `instantiatesUri`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setInstantiatesUri(instantiatesUri: string | undefined): this {
    return this.setFieldValue('instantiatesUri', instantiatesUri);
  }

  hasInstantiatesUri(): boolean {
    return this.hasFieldValue('instantiatesUri');
  }

  /** The element carrying the id and extensions of `instantiatesUri`. Created when absent. */
  getInstantiatesUriElement(): Element {
    if (this._instantiatesUri === undefined) {
      this._instantiatesUri = new Element();
    }
    return this._instantiatesUri;
  }

  setInstantiatesUriElement(instantiatesUriElement: Element | undefined): this {
    this._instantiatesUri = instantiatesUriElement;
    return this;
  }

  /** Request fulfilled by this transport (0..*) Never undefined; an empty list is created when absent. */
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

  /** Part of referenced event (0..*) Never undefined; an empty list is created when absent. */
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

  /** in-progress | completed | abandoned | cancelled | planned | entered-in-error (0..1) */
  getStatus(): valueSetCodes.TransportStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.TransportStatus | undefined): this {
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

  /** unknown | proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option (1..1) */
  getIntent(): valueSetCodes.TransportIntent | undefined {
    return this.intent;
  }

  /** Sets `intent`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setIntent(intent: valueSetCodes.TransportIntent | undefined): this {
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

  /** Transport Type (0..1) Created when absent. */
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

  /** Human-readable explanation of transport (0..1) */
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

  /** What transport is acting on (0..1) Created when absent. */
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

  /** Beneficiary of the Transport (0..1) Created when absent. */
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

  /** Healthcare event during which this transport originated (0..1) Created when absent. */
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

  /** Completion time of the event (the occurrence) (0..1) */
  getCompletionTime(): string | undefined {
    return this.completionTime;
  }

  /** Sets `completionTime`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setCompletionTime(completionTime: string | undefined): this {
    return this.setFieldValue('completionTime', completionTime);
  }

  hasCompletionTime(): boolean {
    return this.hasFieldValue('completionTime');
  }

  /** The element carrying the id and extensions of `completionTime`. Created when absent. */
  getCompletionTimeElement(): Element {
    if (this._completionTime === undefined) {
      this._completionTime = new Element();
    }
    return this._completionTime;
  }

  setCompletionTimeElement(completionTimeElement: Element | undefined): this {
    this._completionTime = completionTimeElement;
    return this;
  }

  /** Transport Creation Date (0..1) */
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

  /** Transport Last Modified Date (0..1) */
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

  /** Who is asking for transport to be done (0..1) Created when absent. */
  getRequester(): Reference {
    if (this.requester === undefined) {
      this.requester = new Reference();
    }
    return this.requester;
  }

  setRequester(requester: Reference | undefined): this {
    return this.setFieldValue('requester', requester);
  }

  hasRequester(): boolean {
    return this.hasFieldValue('requester');
  }

  /** Requested performer (0..*) Never undefined; an empty list is created when absent. */
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

  /** Where transport occurs (0..1) Created when absent. */
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

  /** Associated insurance coverage (0..*) Never undefined; an empty list is created when absent. */
  getInsurance(): Reference[] {
    if (this.insurance === undefined) {
      this.insurance = [];
    }
    return this.insurance;
  }

  setInsurance(insurance: Reference[] | undefined): this {
    return this.setFieldValue('insurance', insurance);
  }

  hasInsurance(): boolean {
    return this.hasFieldValue('insurance');
  }

  /** Appends a new, empty Reference to `insurance` and returns it so it can be filled in. */
  addInsurance(): Reference;
  /** Appends the given Reference to `insurance` and returns this object for chaining. */
  addInsurance(reference: Reference): this;
  addInsurance(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('insurance', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('insurance', createdReference);
    return createdReference;
  }

  /** The first Reference of `insurance`. One is added when the list is empty. */
  getInsuranceFirstRep(): Reference {
    const firstReference = this.getInsurance()[0];
    return firstReference === undefined ? this.addInsurance() : firstReference;
  }

  /** Comments made about the transport (0..*) Never undefined; an empty list is created when absent. */
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

  /** Key events in history of the Transport (0..*) Never undefined; an empty list is created when absent. */
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

  /** Constraints on fulfillment transports (0..1) Created when absent. */
  getRestriction(): TransportRestriction {
    if (this.restriction === undefined) {
      this.restriction = new TransportRestriction();
    }
    return this.restriction;
  }

  setRestriction(restriction: TransportRestriction | undefined): this {
    return this.setFieldValue('restriction', restriction);
  }

  hasRestriction(): boolean {
    return this.hasFieldValue('restriction');
  }

  /** Information used to perform transport (0..*) Never undefined; an empty list is created when absent. */
  getInput(): TransportInput[] {
    if (this.input === undefined) {
      this.input = [];
    }
    return this.input;
  }

  setInput(input: TransportInput[] | undefined): this {
    return this.setFieldValue('input', input);
  }

  hasInput(): boolean {
    return this.hasFieldValue('input');
  }

  /** Appends a new, empty TransportInput to `input` and returns it so it can be filled in. */
  addInput(): TransportInput;
  /** Appends the given TransportInput to `input` and returns this object for chaining. */
  addInput(transportInput: TransportInput): this;
  addInput(transportInput?: TransportInput): TransportInput | this {
    if (transportInput !== undefined) {
      return this.addFieldValue('input', transportInput);
    }
    const createdTransportInput = new TransportInput();
    this.addFieldValue('input', createdTransportInput);
    return createdTransportInput;
  }

  /** The first TransportInput of `input`. One is added when the list is empty. */
  getInputFirstRep(): TransportInput {
    const firstTransportInput = this.getInput()[0];
    return firstTransportInput === undefined ? this.addInput() : firstTransportInput;
  }

  /** Information produced as part of transport (0..*) Never undefined; an empty list is created when absent. */
  getOutput(): TransportOutput[] {
    if (this.output === undefined) {
      this.output = [];
    }
    return this.output;
  }

  setOutput(output: TransportOutput[] | undefined): this {
    return this.setFieldValue('output', output);
  }

  hasOutput(): boolean {
    return this.hasFieldValue('output');
  }

  /** Appends a new, empty TransportOutput to `output` and returns it so it can be filled in. */
  addOutput(): TransportOutput;
  /** Appends the given TransportOutput to `output` and returns this object for chaining. */
  addOutput(transportOutput: TransportOutput): this;
  addOutput(transportOutput?: TransportOutput): TransportOutput | this {
    if (transportOutput !== undefined) {
      return this.addFieldValue('output', transportOutput);
    }
    const createdTransportOutput = new TransportOutput();
    this.addFieldValue('output', createdTransportOutput);
    return createdTransportOutput;
  }

  /** The first TransportOutput of `output`. One is added when the list is empty. */
  getOutputFirstRep(): TransportOutput {
    const firstTransportOutput = this.getOutput()[0];
    return firstTransportOutput === undefined ? this.addOutput() : firstTransportOutput;
  }

  /** The desired location (1..1) Created when absent. */
  getRequestedLocation(): Reference {
    if (this.requestedLocation === undefined) {
      this.requestedLocation = new Reference();
    }
    return this.requestedLocation;
  }

  setRequestedLocation(requestedLocation: Reference | undefined): this {
    return this.setFieldValue('requestedLocation', requestedLocation);
  }

  hasRequestedLocation(): boolean {
    return this.hasFieldValue('requestedLocation');
  }

  /** The entity current location (1..1) Created when absent. */
  getCurrentLocation(): Reference {
    if (this.currentLocation === undefined) {
      this.currentLocation = new Reference();
    }
    return this.currentLocation;
  }

  setCurrentLocation(currentLocation: Reference | undefined): this {
    return this.setFieldValue('currentLocation', currentLocation);
  }

  hasCurrentLocation(): boolean {
    return this.hasFieldValue('currentLocation');
  }

  /** Why transport is needed (0..1) Created when absent. */
  getReason(): CodeableReference {
    if (this.reason === undefined) {
      this.reason = new CodeableReference();
    }
    return this.reason;
  }

  setReason(reason: CodeableReference | undefined): this {
    return this.setFieldValue('reason', reason);
  }

  hasReason(): boolean {
    return this.hasFieldValue('reason');
  }

  /** Parent (or preceding) transport (0..1) Created when absent. */
  getHistory(): Reference {
    if (this.history === undefined) {
      this.history = new Reference();
    }
    return this.history;
  }

  setHistory(history: Reference | undefined): this {
    return this.setFieldValue('history', history);
  }

  hasHistory(): boolean {
    return this.hasFieldValue('history');
  }
}

modelTypeRegistry.register('Transport', Transport, true);

/** True when the value is a Transport model instance. */
export function isTransport(candidate: unknown): candidate is Transport {
  return candidate instanceof Transport;
}

/**
 * Constraints on fulfillment transports
 */
export class TransportRestriction extends BackboneElement {
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
            'PractitionerRole',
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
    return 'Transport.restriction';
  }

  /** FHIR JSON for this TransportRestriction, typed as the plain `TransportRestriction` data type. */
  override toJSON(): plainTypes.TransportRestriction {
    return this.serialize() as plainTypes.TransportRestriction;
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

modelTypeRegistry.register('TransportRestriction', TransportRestriction, false);

/**
 * Information used to perform transport
 */
export class TransportInput extends BackboneElement {
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
        { jsonKey: 'valueCanonical', typeCode: 'canonical' },
        { jsonKey: 'valueCode', typeCode: 'code' },
        { jsonKey: 'valueDate', typeCode: 'date' },
        { jsonKey: 'valueDateTime', typeCode: 'dateTime' },
        { jsonKey: 'valueDecimal', typeCode: 'decimal' },
        { jsonKey: 'valueId', typeCode: 'id' },
        { jsonKey: 'valueInstant', typeCode: 'instant' },
        { jsonKey: 'valueInteger', typeCode: 'integer' },
        { jsonKey: 'valueInteger64', typeCode: 'integer64' },
        { jsonKey: 'valueMarkdown', typeCode: 'markdown' },
        { jsonKey: 'valueOid', typeCode: 'oid' },
        { jsonKey: 'valuePositiveInt', typeCode: 'positiveInt' },
        { jsonKey: 'valueString', typeCode: 'string' },
        { jsonKey: 'valueTime', typeCode: 'time' },
        { jsonKey: 'valueUnsignedInt', typeCode: 'unsignedInt' },
        { jsonKey: 'valueUri', typeCode: 'uri' },
        { jsonKey: 'valueUrl', typeCode: 'url' },
        { jsonKey: 'valueUuid', typeCode: 'uuid' },
        { jsonKey: 'valueAddress', typeCode: 'Address' },
        { jsonKey: 'valueAge', typeCode: 'Age' },
        { jsonKey: 'valueAnnotation', typeCode: 'Annotation' },
        { jsonKey: 'valueAttachment', typeCode: 'Attachment' },
        { jsonKey: 'valueCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'valueCodeableReference', typeCode: 'CodeableReference' },
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
        { jsonKey: 'valueRatioRange', typeCode: 'RatioRange' },
        { jsonKey: 'valueReference', typeCode: 'Reference' },
        { jsonKey: 'valueSampledData', typeCode: 'SampledData' },
        { jsonKey: 'valueSignature', typeCode: 'Signature' },
        { jsonKey: 'valueTiming', typeCode: 'Timing' },
        { jsonKey: 'valueContactDetail', typeCode: 'ContactDetail' },
        { jsonKey: 'valueDataRequirement', typeCode: 'DataRequirement' },
        { jsonKey: 'valueExpression', typeCode: 'Expression' },
        { jsonKey: 'valueParameterDefinition', typeCode: 'ParameterDefinition' },
        { jsonKey: 'valueRelatedArtifact', typeCode: 'RelatedArtifact' },
        { jsonKey: 'valueTriggerDefinition', typeCode: 'TriggerDefinition' },
        { jsonKey: 'valueUsageContext', typeCode: 'UsageContext' },
        { jsonKey: 'valueAvailability', typeCode: 'Availability' },
        { jsonKey: 'valueExtendedContactDetail', typeCode: 'ExtendedContactDetail' },
        { jsonKey: 'valueDosage', typeCode: 'Dosage' },
        { jsonKey: 'valueMeta', typeCode: 'Meta' },
      ],
    },
  ];

  /** Label for the input (1..1) */
  type?: CodeableConcept;

  /** Content to use in performing the transport (1..1) */
  valueBase64Binary?: string;
  /** Id and extensions of the primitive `valueBase64Binary`. */
  _valueBase64Binary?: Element;
  /** Content to use in performing the transport (1..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Content to use in performing the transport (1..1) */
  valueCanonical?: string;
  /** Id and extensions of the primitive `valueCanonical`. */
  _valueCanonical?: Element;
  /** Content to use in performing the transport (1..1) */
  valueCode?: string;
  /** Id and extensions of the primitive `valueCode`. */
  _valueCode?: Element;
  /** Content to use in performing the transport (1..1) */
  valueDate?: string;
  /** Id and extensions of the primitive `valueDate`. */
  _valueDate?: Element;
  /** Content to use in performing the transport (1..1) */
  valueDateTime?: string;
  /** Id and extensions of the primitive `valueDateTime`. */
  _valueDateTime?: Element;
  /** Content to use in performing the transport (1..1) */
  valueDecimal?: number;
  /** Id and extensions of the primitive `valueDecimal`. */
  _valueDecimal?: Element;
  /** Content to use in performing the transport (1..1) */
  valueId?: string;
  /** Id and extensions of the primitive `valueId`. */
  _valueId?: Element;
  /** Content to use in performing the transport (1..1) */
  valueInstant?: string;
  /** Id and extensions of the primitive `valueInstant`. */
  _valueInstant?: Element;
  /** Content to use in performing the transport (1..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** Content to use in performing the transport (1..1) */
  valueInteger64?: string;
  /** Id and extensions of the primitive `valueInteger64`. */
  _valueInteger64?: Element;
  /** Content to use in performing the transport (1..1) */
  valueMarkdown?: string;
  /** Id and extensions of the primitive `valueMarkdown`. */
  _valueMarkdown?: Element;
  /** Content to use in performing the transport (1..1) */
  valueOid?: string;
  /** Id and extensions of the primitive `valueOid`. */
  _valueOid?: Element;
  /** Content to use in performing the transport (1..1) */
  valuePositiveInt?: number;
  /** Id and extensions of the primitive `valuePositiveInt`. */
  _valuePositiveInt?: Element;
  /** Content to use in performing the transport (1..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Content to use in performing the transport (1..1) */
  valueTime?: string;
  /** Id and extensions of the primitive `valueTime`. */
  _valueTime?: Element;
  /** Content to use in performing the transport (1..1) */
  valueUnsignedInt?: number;
  /** Id and extensions of the primitive `valueUnsignedInt`. */
  _valueUnsignedInt?: Element;
  /** Content to use in performing the transport (1..1) */
  valueUri?: string;
  /** Id and extensions of the primitive `valueUri`. */
  _valueUri?: Element;
  /** Content to use in performing the transport (1..1) */
  valueUrl?: string;
  /** Id and extensions of the primitive `valueUrl`. */
  _valueUrl?: Element;
  /** Content to use in performing the transport (1..1) */
  valueUuid?: string;
  /** Id and extensions of the primitive `valueUuid`. */
  _valueUuid?: Element;
  /** Content to use in performing the transport (1..1) */
  valueAddress?: Address;
  /** Content to use in performing the transport (1..1) */
  valueAge?: Age;
  /** Content to use in performing the transport (1..1) */
  valueAnnotation?: Annotation;
  /** Content to use in performing the transport (1..1) */
  valueAttachment?: Attachment;
  /** Content to use in performing the transport (1..1) */
  valueCodeableConcept?: CodeableConcept;
  /** Content to use in performing the transport (1..1) */
  valueCodeableReference?: CodeableReference;
  /** Content to use in performing the transport (1..1) */
  valueCoding?: Coding;
  /** Content to use in performing the transport (1..1) */
  valueContactPoint?: ContactPoint;
  /** Content to use in performing the transport (1..1) */
  valueCount?: Count;
  /** Content to use in performing the transport (1..1) */
  valueDistance?: Distance;
  /** Content to use in performing the transport (1..1) */
  valueDuration?: Duration;
  /** Content to use in performing the transport (1..1) */
  valueHumanName?: HumanName;
  /** Content to use in performing the transport (1..1) */
  valueIdentifier?: Identifier;
  /** Content to use in performing the transport (1..1) */
  valueMoney?: Money;
  /** Content to use in performing the transport (1..1) */
  valuePeriod?: Period;
  /** Content to use in performing the transport (1..1) */
  valueQuantity?: Quantity;
  /** Content to use in performing the transport (1..1) */
  valueRange?: Range;
  /** Content to use in performing the transport (1..1) */
  valueRatio?: Ratio;
  /** Content to use in performing the transport (1..1) */
  valueRatioRange?: RatioRange;
  /** Content to use in performing the transport (1..1) */
  valueReference?: Reference;
  /** Content to use in performing the transport (1..1) */
  valueSampledData?: SampledData;
  /** Content to use in performing the transport (1..1) */
  valueSignature?: Signature;
  /** Content to use in performing the transport (1..1) */
  valueTiming?: Timing;
  /** Content to use in performing the transport (1..1) */
  valueContactDetail?: ContactDetail;
  /** Content to use in performing the transport (1..1) */
  valueDataRequirement?: DataRequirement;
  /** Content to use in performing the transport (1..1) */
  valueExpression?: Expression;
  /** Content to use in performing the transport (1..1) */
  valueParameterDefinition?: ParameterDefinition;
  /** Content to use in performing the transport (1..1) */
  valueRelatedArtifact?: RelatedArtifact;
  /** Content to use in performing the transport (1..1) */
  valueTriggerDefinition?: TriggerDefinition;
  /** Content to use in performing the transport (1..1) */
  valueUsageContext?: UsageContext;
  /** Content to use in performing the transport (1..1) */
  valueAvailability?: Availability;
  /** Content to use in performing the transport (1..1) */
  valueExtendedContactDetail?: ExtendedContactDetail;
  /** Content to use in performing the transport (1..1) */
  valueDosage?: Dosage;
  /** Content to use in performing the transport (1..1) */
  valueMeta?: Meta;

  override fhirType(): string {
    return 'Transport.input';
  }

  /** FHIR JSON for this TransportInput, typed as the plain `TransportInput` data type. */
  override toJSON(): plainTypes.TransportInput {
    return this.serialize() as plainTypes.TransportInput;
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

  /** Content to use in performing the transport (1..1) Whichever type of `value[x]` is set. */
  getValue():
    | string
    | boolean
    | number
    | Address
    | Age
    | Annotation
    | Attachment
    | CodeableConcept
    | CodeableReference
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
    | RatioRange
    | Reference
    | SampledData
    | Signature
    | Timing
    | ContactDetail
    | DataRequirement
    | Expression
    | ParameterDefinition
    | RelatedArtifact
    | TriggerDefinition
    | UsageContext
    | Availability
    | ExtendedContactDetail
    | Dosage
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
      | CodeableReference
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
      | RatioRange
      | Reference
      | SampledData
      | Signature
      | Timing
      | ContactDetail
      | DataRequirement
      | Expression
      | ParameterDefinition
      | RelatedArtifact
      | TriggerDefinition
      | UsageContext
      | Availability
      | ExtendedContactDetail
      | Dosage
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

  getValueCanonical(): string | undefined {
    return this.valueCanonical;
  }

  /** Sets `value[x]` as canonical and clears every other type of it. */
  setValueCanonical(valueCanonical: string | undefined): this {
    return this.setFieldValue('valueCanonical', valueCanonical);
  }

  hasValueCanonical(): boolean {
    return this.hasFieldValue('valueCanonical');
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

  getValueInteger64(): string | undefined {
    return this.valueInteger64;
  }

  /** Sets `value[x]` as integer64 and clears every other type of it. */
  setValueInteger64(valueInteger64: string | undefined): this {
    return this.setFieldValue('valueInteger64', valueInteger64);
  }

  hasValueInteger64(): boolean {
    return this.hasFieldValue('valueInteger64');
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

  getValueUrl(): string | undefined {
    return this.valueUrl;
  }

  /** Sets `value[x]` as url and clears every other type of it. */
  setValueUrl(valueUrl: string | undefined): this {
    return this.setFieldValue('valueUrl', valueUrl);
  }

  hasValueUrl(): boolean {
    return this.hasFieldValue('valueUrl');
  }

  getValueUuid(): string | undefined {
    return this.valueUuid;
  }

  /** Sets `value[x]` as uuid and clears every other type of it. */
  setValueUuid(valueUuid: string | undefined): this {
    return this.setFieldValue('valueUuid', valueUuid);
  }

  hasValueUuid(): boolean {
    return this.hasFieldValue('valueUuid');
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

  getValueCodeableReference(): CodeableReference | undefined {
    return this.valueCodeableReference;
  }

  /** Sets `value[x]` as CodeableReference and clears every other type of it. */
  setValueCodeableReference(valueCodeableReference: CodeableReference | undefined): this {
    return this.setFieldValue('valueCodeableReference', valueCodeableReference);
  }

  hasValueCodeableReference(): boolean {
    return this.hasFieldValue('valueCodeableReference');
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

  getValueRatioRange(): RatioRange | undefined {
    return this.valueRatioRange;
  }

  /** Sets `value[x]` as RatioRange and clears every other type of it. */
  setValueRatioRange(valueRatioRange: RatioRange | undefined): this {
    return this.setFieldValue('valueRatioRange', valueRatioRange);
  }

  hasValueRatioRange(): boolean {
    return this.hasFieldValue('valueRatioRange');
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

  getValueContactDetail(): ContactDetail | undefined {
    return this.valueContactDetail;
  }

  /** Sets `value[x]` as ContactDetail and clears every other type of it. */
  setValueContactDetail(valueContactDetail: ContactDetail | undefined): this {
    return this.setFieldValue('valueContactDetail', valueContactDetail);
  }

  hasValueContactDetail(): boolean {
    return this.hasFieldValue('valueContactDetail');
  }

  getValueDataRequirement(): DataRequirement | undefined {
    return this.valueDataRequirement;
  }

  /** Sets `value[x]` as DataRequirement and clears every other type of it. */
  setValueDataRequirement(valueDataRequirement: DataRequirement | undefined): this {
    return this.setFieldValue('valueDataRequirement', valueDataRequirement);
  }

  hasValueDataRequirement(): boolean {
    return this.hasFieldValue('valueDataRequirement');
  }

  getValueExpression(): Expression | undefined {
    return this.valueExpression;
  }

  /** Sets `value[x]` as Expression and clears every other type of it. */
  setValueExpression(valueExpression: Expression | undefined): this {
    return this.setFieldValue('valueExpression', valueExpression);
  }

  hasValueExpression(): boolean {
    return this.hasFieldValue('valueExpression');
  }

  getValueParameterDefinition(): ParameterDefinition | undefined {
    return this.valueParameterDefinition;
  }

  /** Sets `value[x]` as ParameterDefinition and clears every other type of it. */
  setValueParameterDefinition(valueParameterDefinition: ParameterDefinition | undefined): this {
    return this.setFieldValue('valueParameterDefinition', valueParameterDefinition);
  }

  hasValueParameterDefinition(): boolean {
    return this.hasFieldValue('valueParameterDefinition');
  }

  getValueRelatedArtifact(): RelatedArtifact | undefined {
    return this.valueRelatedArtifact;
  }

  /** Sets `value[x]` as RelatedArtifact and clears every other type of it. */
  setValueRelatedArtifact(valueRelatedArtifact: RelatedArtifact | undefined): this {
    return this.setFieldValue('valueRelatedArtifact', valueRelatedArtifact);
  }

  hasValueRelatedArtifact(): boolean {
    return this.hasFieldValue('valueRelatedArtifact');
  }

  getValueTriggerDefinition(): TriggerDefinition | undefined {
    return this.valueTriggerDefinition;
  }

  /** Sets `value[x]` as TriggerDefinition and clears every other type of it. */
  setValueTriggerDefinition(valueTriggerDefinition: TriggerDefinition | undefined): this {
    return this.setFieldValue('valueTriggerDefinition', valueTriggerDefinition);
  }

  hasValueTriggerDefinition(): boolean {
    return this.hasFieldValue('valueTriggerDefinition');
  }

  getValueUsageContext(): UsageContext | undefined {
    return this.valueUsageContext;
  }

  /** Sets `value[x]` as UsageContext and clears every other type of it. */
  setValueUsageContext(valueUsageContext: UsageContext | undefined): this {
    return this.setFieldValue('valueUsageContext', valueUsageContext);
  }

  hasValueUsageContext(): boolean {
    return this.hasFieldValue('valueUsageContext');
  }

  getValueAvailability(): Availability | undefined {
    return this.valueAvailability;
  }

  /** Sets `value[x]` as Availability and clears every other type of it. */
  setValueAvailability(valueAvailability: Availability | undefined): this {
    return this.setFieldValue('valueAvailability', valueAvailability);
  }

  hasValueAvailability(): boolean {
    return this.hasFieldValue('valueAvailability');
  }

  getValueExtendedContactDetail(): ExtendedContactDetail | undefined {
    return this.valueExtendedContactDetail;
  }

  /** Sets `value[x]` as ExtendedContactDetail and clears every other type of it. */
  setValueExtendedContactDetail(
    valueExtendedContactDetail: ExtendedContactDetail | undefined
  ): this {
    return this.setFieldValue('valueExtendedContactDetail', valueExtendedContactDetail);
  }

  hasValueExtendedContactDetail(): boolean {
    return this.hasFieldValue('valueExtendedContactDetail');
  }

  getValueDosage(): Dosage | undefined {
    return this.valueDosage;
  }

  /** Sets `value[x]` as Dosage and clears every other type of it. */
  setValueDosage(valueDosage: Dosage | undefined): this {
    return this.setFieldValue('valueDosage', valueDosage);
  }

  hasValueDosage(): boolean {
    return this.hasFieldValue('valueDosage');
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

modelTypeRegistry.register('TransportInput', TransportInput, false);

/**
 * Information produced as part of transport
 */
export class TransportOutput extends BackboneElement {
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
        { jsonKey: 'valueCanonical', typeCode: 'canonical' },
        { jsonKey: 'valueCode', typeCode: 'code' },
        { jsonKey: 'valueDate', typeCode: 'date' },
        { jsonKey: 'valueDateTime', typeCode: 'dateTime' },
        { jsonKey: 'valueDecimal', typeCode: 'decimal' },
        { jsonKey: 'valueId', typeCode: 'id' },
        { jsonKey: 'valueInstant', typeCode: 'instant' },
        { jsonKey: 'valueInteger', typeCode: 'integer' },
        { jsonKey: 'valueInteger64', typeCode: 'integer64' },
        { jsonKey: 'valueMarkdown', typeCode: 'markdown' },
        { jsonKey: 'valueOid', typeCode: 'oid' },
        { jsonKey: 'valuePositiveInt', typeCode: 'positiveInt' },
        { jsonKey: 'valueString', typeCode: 'string' },
        { jsonKey: 'valueTime', typeCode: 'time' },
        { jsonKey: 'valueUnsignedInt', typeCode: 'unsignedInt' },
        { jsonKey: 'valueUri', typeCode: 'uri' },
        { jsonKey: 'valueUrl', typeCode: 'url' },
        { jsonKey: 'valueUuid', typeCode: 'uuid' },
        { jsonKey: 'valueAddress', typeCode: 'Address' },
        { jsonKey: 'valueAge', typeCode: 'Age' },
        { jsonKey: 'valueAnnotation', typeCode: 'Annotation' },
        { jsonKey: 'valueAttachment', typeCode: 'Attachment' },
        { jsonKey: 'valueCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'valueCodeableReference', typeCode: 'CodeableReference' },
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
        { jsonKey: 'valueRatioRange', typeCode: 'RatioRange' },
        { jsonKey: 'valueReference', typeCode: 'Reference' },
        { jsonKey: 'valueSampledData', typeCode: 'SampledData' },
        { jsonKey: 'valueSignature', typeCode: 'Signature' },
        { jsonKey: 'valueTiming', typeCode: 'Timing' },
        { jsonKey: 'valueContactDetail', typeCode: 'ContactDetail' },
        { jsonKey: 'valueDataRequirement', typeCode: 'DataRequirement' },
        { jsonKey: 'valueExpression', typeCode: 'Expression' },
        { jsonKey: 'valueParameterDefinition', typeCode: 'ParameterDefinition' },
        { jsonKey: 'valueRelatedArtifact', typeCode: 'RelatedArtifact' },
        { jsonKey: 'valueTriggerDefinition', typeCode: 'TriggerDefinition' },
        { jsonKey: 'valueUsageContext', typeCode: 'UsageContext' },
        { jsonKey: 'valueAvailability', typeCode: 'Availability' },
        { jsonKey: 'valueExtendedContactDetail', typeCode: 'ExtendedContactDetail' },
        { jsonKey: 'valueDosage', typeCode: 'Dosage' },
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
  valueCanonical?: string;
  /** Id and extensions of the primitive `valueCanonical`. */
  _valueCanonical?: Element;
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
  valueInteger64?: string;
  /** Id and extensions of the primitive `valueInteger64`. */
  _valueInteger64?: Element;
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
  valueUrl?: string;
  /** Id and extensions of the primitive `valueUrl`. */
  _valueUrl?: Element;
  /** Result of output (1..1) */
  valueUuid?: string;
  /** Id and extensions of the primitive `valueUuid`. */
  _valueUuid?: Element;
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
  valueCodeableReference?: CodeableReference;
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
  valueRatioRange?: RatioRange;
  /** Result of output (1..1) */
  valueReference?: Reference;
  /** Result of output (1..1) */
  valueSampledData?: SampledData;
  /** Result of output (1..1) */
  valueSignature?: Signature;
  /** Result of output (1..1) */
  valueTiming?: Timing;
  /** Result of output (1..1) */
  valueContactDetail?: ContactDetail;
  /** Result of output (1..1) */
  valueDataRequirement?: DataRequirement;
  /** Result of output (1..1) */
  valueExpression?: Expression;
  /** Result of output (1..1) */
  valueParameterDefinition?: ParameterDefinition;
  /** Result of output (1..1) */
  valueRelatedArtifact?: RelatedArtifact;
  /** Result of output (1..1) */
  valueTriggerDefinition?: TriggerDefinition;
  /** Result of output (1..1) */
  valueUsageContext?: UsageContext;
  /** Result of output (1..1) */
  valueAvailability?: Availability;
  /** Result of output (1..1) */
  valueExtendedContactDetail?: ExtendedContactDetail;
  /** Result of output (1..1) */
  valueDosage?: Dosage;
  /** Result of output (1..1) */
  valueMeta?: Meta;

  override fhirType(): string {
    return 'Transport.output';
  }

  /** FHIR JSON for this TransportOutput, typed as the plain `TransportOutput` data type. */
  override toJSON(): plainTypes.TransportOutput {
    return this.serialize() as plainTypes.TransportOutput;
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
    | CodeableReference
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
    | RatioRange
    | Reference
    | SampledData
    | Signature
    | Timing
    | ContactDetail
    | DataRequirement
    | Expression
    | ParameterDefinition
    | RelatedArtifact
    | TriggerDefinition
    | UsageContext
    | Availability
    | ExtendedContactDetail
    | Dosage
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
      | CodeableReference
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
      | RatioRange
      | Reference
      | SampledData
      | Signature
      | Timing
      | ContactDetail
      | DataRequirement
      | Expression
      | ParameterDefinition
      | RelatedArtifact
      | TriggerDefinition
      | UsageContext
      | Availability
      | ExtendedContactDetail
      | Dosage
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

  getValueCanonical(): string | undefined {
    return this.valueCanonical;
  }

  /** Sets `value[x]` as canonical and clears every other type of it. */
  setValueCanonical(valueCanonical: string | undefined): this {
    return this.setFieldValue('valueCanonical', valueCanonical);
  }

  hasValueCanonical(): boolean {
    return this.hasFieldValue('valueCanonical');
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

  getValueInteger64(): string | undefined {
    return this.valueInteger64;
  }

  /** Sets `value[x]` as integer64 and clears every other type of it. */
  setValueInteger64(valueInteger64: string | undefined): this {
    return this.setFieldValue('valueInteger64', valueInteger64);
  }

  hasValueInteger64(): boolean {
    return this.hasFieldValue('valueInteger64');
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

  getValueUrl(): string | undefined {
    return this.valueUrl;
  }

  /** Sets `value[x]` as url and clears every other type of it. */
  setValueUrl(valueUrl: string | undefined): this {
    return this.setFieldValue('valueUrl', valueUrl);
  }

  hasValueUrl(): boolean {
    return this.hasFieldValue('valueUrl');
  }

  getValueUuid(): string | undefined {
    return this.valueUuid;
  }

  /** Sets `value[x]` as uuid and clears every other type of it. */
  setValueUuid(valueUuid: string | undefined): this {
    return this.setFieldValue('valueUuid', valueUuid);
  }

  hasValueUuid(): boolean {
    return this.hasFieldValue('valueUuid');
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

  getValueCodeableReference(): CodeableReference | undefined {
    return this.valueCodeableReference;
  }

  /** Sets `value[x]` as CodeableReference and clears every other type of it. */
  setValueCodeableReference(valueCodeableReference: CodeableReference | undefined): this {
    return this.setFieldValue('valueCodeableReference', valueCodeableReference);
  }

  hasValueCodeableReference(): boolean {
    return this.hasFieldValue('valueCodeableReference');
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

  getValueRatioRange(): RatioRange | undefined {
    return this.valueRatioRange;
  }

  /** Sets `value[x]` as RatioRange and clears every other type of it. */
  setValueRatioRange(valueRatioRange: RatioRange | undefined): this {
    return this.setFieldValue('valueRatioRange', valueRatioRange);
  }

  hasValueRatioRange(): boolean {
    return this.hasFieldValue('valueRatioRange');
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

  getValueContactDetail(): ContactDetail | undefined {
    return this.valueContactDetail;
  }

  /** Sets `value[x]` as ContactDetail and clears every other type of it. */
  setValueContactDetail(valueContactDetail: ContactDetail | undefined): this {
    return this.setFieldValue('valueContactDetail', valueContactDetail);
  }

  hasValueContactDetail(): boolean {
    return this.hasFieldValue('valueContactDetail');
  }

  getValueDataRequirement(): DataRequirement | undefined {
    return this.valueDataRequirement;
  }

  /** Sets `value[x]` as DataRequirement and clears every other type of it. */
  setValueDataRequirement(valueDataRequirement: DataRequirement | undefined): this {
    return this.setFieldValue('valueDataRequirement', valueDataRequirement);
  }

  hasValueDataRequirement(): boolean {
    return this.hasFieldValue('valueDataRequirement');
  }

  getValueExpression(): Expression | undefined {
    return this.valueExpression;
  }

  /** Sets `value[x]` as Expression and clears every other type of it. */
  setValueExpression(valueExpression: Expression | undefined): this {
    return this.setFieldValue('valueExpression', valueExpression);
  }

  hasValueExpression(): boolean {
    return this.hasFieldValue('valueExpression');
  }

  getValueParameterDefinition(): ParameterDefinition | undefined {
    return this.valueParameterDefinition;
  }

  /** Sets `value[x]` as ParameterDefinition and clears every other type of it. */
  setValueParameterDefinition(valueParameterDefinition: ParameterDefinition | undefined): this {
    return this.setFieldValue('valueParameterDefinition', valueParameterDefinition);
  }

  hasValueParameterDefinition(): boolean {
    return this.hasFieldValue('valueParameterDefinition');
  }

  getValueRelatedArtifact(): RelatedArtifact | undefined {
    return this.valueRelatedArtifact;
  }

  /** Sets `value[x]` as RelatedArtifact and clears every other type of it. */
  setValueRelatedArtifact(valueRelatedArtifact: RelatedArtifact | undefined): this {
    return this.setFieldValue('valueRelatedArtifact', valueRelatedArtifact);
  }

  hasValueRelatedArtifact(): boolean {
    return this.hasFieldValue('valueRelatedArtifact');
  }

  getValueTriggerDefinition(): TriggerDefinition | undefined {
    return this.valueTriggerDefinition;
  }

  /** Sets `value[x]` as TriggerDefinition and clears every other type of it. */
  setValueTriggerDefinition(valueTriggerDefinition: TriggerDefinition | undefined): this {
    return this.setFieldValue('valueTriggerDefinition', valueTriggerDefinition);
  }

  hasValueTriggerDefinition(): boolean {
    return this.hasFieldValue('valueTriggerDefinition');
  }

  getValueUsageContext(): UsageContext | undefined {
    return this.valueUsageContext;
  }

  /** Sets `value[x]` as UsageContext and clears every other type of it. */
  setValueUsageContext(valueUsageContext: UsageContext | undefined): this {
    return this.setFieldValue('valueUsageContext', valueUsageContext);
  }

  hasValueUsageContext(): boolean {
    return this.hasFieldValue('valueUsageContext');
  }

  getValueAvailability(): Availability | undefined {
    return this.valueAvailability;
  }

  /** Sets `value[x]` as Availability and clears every other type of it. */
  setValueAvailability(valueAvailability: Availability | undefined): this {
    return this.setFieldValue('valueAvailability', valueAvailability);
  }

  hasValueAvailability(): boolean {
    return this.hasFieldValue('valueAvailability');
  }

  getValueExtendedContactDetail(): ExtendedContactDetail | undefined {
    return this.valueExtendedContactDetail;
  }

  /** Sets `value[x]` as ExtendedContactDetail and clears every other type of it. */
  setValueExtendedContactDetail(
    valueExtendedContactDetail: ExtendedContactDetail | undefined
  ): this {
    return this.setFieldValue('valueExtendedContactDetail', valueExtendedContactDetail);
  }

  hasValueExtendedContactDetail(): boolean {
    return this.hasFieldValue('valueExtendedContactDetail');
  }

  getValueDosage(): Dosage | undefined {
    return this.valueDosage;
  }

  /** Sets `value[x]` as Dosage and clears every other type of it. */
  setValueDosage(valueDosage: Dosage | undefined): this {
    return this.setFieldValue('valueDosage', valueDosage);
  }

  hasValueDosage(): boolean {
    return this.hasFieldValue('valueDosage');
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

modelTypeRegistry.register('TransportOutput', TransportOutput, false);
