/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { BackboneElement } from './backboneElement';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';

/**
 * Base StructureDefinition for ProcessRequest Resource
 */
export class ProcessRequest extends DomainResource {
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
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'status',
          typeCode: 'code',
          allowedCodes: valueSetCodes.FinancialResourceStatusCodes,
        },
      ],
    },
    {
      elementName: 'action',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'action', typeCode: 'code', allowedCodes: valueSetCodes.ActionList }],
    },
    {
      elementName: 'target',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'target', typeCode: 'Reference', targetResourceTypes: ['Organization'] }],
    },
    {
      elementName: 'created',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'created', typeCode: 'dateTime' }],
    },
    {
      elementName: 'provider',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'provider', typeCode: 'Reference', targetResourceTypes: ['Practitioner'] },
      ],
    },
    {
      elementName: 'organization',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'organization', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
    {
      elementName: 'request',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'request', typeCode: 'Reference' }],
    },
    {
      elementName: 'response',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'response', typeCode: 'Reference' }],
    },
    {
      elementName: 'nullify',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'nullify', typeCode: 'boolean' }],
    },
    {
      elementName: 'reference',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reference', typeCode: 'string' }],
    },
    {
      elementName: 'item',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'item', typeCode: 'ProcessRequestItem' }],
    },
    {
      elementName: 'include',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'include', typeCode: 'string' }],
    },
    {
      elementName: 'exclude',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'exclude', typeCode: 'string' }],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
  ];

  readonly resourceType = 'ProcessRequest';

  /** Business Identifier (0..*) */
  identifier?: Identifier[];

  /** active | cancelled | draft | entered-in-error (0..1) */
  status?: valueSetCodes.FinancialResourceStatusCodes;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** cancel | poll | reprocess | status (0..1) */
  action?: valueSetCodes.ActionList;
  /** Id and extensions of the primitive `action`. */
  _action?: Element;

  /** Party which is the target of the request (0..1) */
  target?: Reference;

  /** Creation date (0..1) */
  created?: string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;

  /** Responsible practitioner (0..1) */
  provider?: Reference;

  /** Responsible organization (0..1) */
  organization?: Reference;

  /** Reference to the Request resource (0..1) */
  request?: Reference;

  /** Reference to the Response resource (0..1) */
  response?: Reference;

  /** Remove history (0..1) */
  nullify?: boolean;
  /** Id and extensions of the primitive `nullify`. */
  _nullify?: Element;

  /** Reference number/string (0..1) */
  reference?: string;
  /** Id and extensions of the primitive `reference`. */
  _reference?: Element;

  /** Items to re-adjudicate (0..*) */
  item?: ProcessRequestItem[];

  /** Resource type(s) to include (0..*) */
  include?: string[];
  /** Id and extensions of the primitive `include`. */
  _include?: (Element | null)[];

  /** Resource type(s) to exclude (0..*) */
  exclude?: string[];
  /** Id and extensions of the primitive `exclude`. */
  _exclude?: (Element | null)[];

  /** Selection period (0..1) */
  period?: Period;

  override fhirType(): string {
    return 'ProcessRequest';
  }

  /** FHIR JSON for this ProcessRequest, typed as the plain `ProcessRequest` data type. */
  override toJSON(): plainTypes.ProcessRequest {
    return this.serialize() as plainTypes.ProcessRequest;
  }

  /** Business Identifier (0..*) Never undefined; an empty list is created when absent. */
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

  /** active | cancelled | draft | entered-in-error (0..1) */
  getStatus(): valueSetCodes.FinancialResourceStatusCodes | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.FinancialResourceStatusCodes | undefined): this {
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

  /** cancel | poll | reprocess | status (0..1) */
  getAction(): valueSetCodes.ActionList | undefined {
    return this.action;
  }

  /** Sets `action`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setAction(action: valueSetCodes.ActionList | undefined): this {
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

  /** Party which is the target of the request (0..1) Created when absent. */
  getTarget(): Reference {
    if (this.target === undefined) {
      this.target = new Reference();
    }
    return this.target;
  }

  setTarget(target: Reference | undefined): this {
    return this.setFieldValue('target', target);
  }

  hasTarget(): boolean {
    return this.hasFieldValue('target');
  }

  /** Creation date (0..1) */
  getCreated(): string | undefined {
    return this.created;
  }

  /** Sets `created`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setCreated(created: string | undefined): this {
    return this.setFieldValue('created', created);
  }

  hasCreated(): boolean {
    return this.hasFieldValue('created');
  }

  /** The element carrying the id and extensions of `created`. Created when absent. */
  getCreatedElement(): Element {
    if (this._created === undefined) {
      this._created = new Element();
    }
    return this._created;
  }

  setCreatedElement(createdElement: Element | undefined): this {
    this._created = createdElement;
    return this;
  }

  /** Responsible practitioner (0..1) Created when absent. */
  getProvider(): Reference {
    if (this.provider === undefined) {
      this.provider = new Reference();
    }
    return this.provider;
  }

  setProvider(provider: Reference | undefined): this {
    return this.setFieldValue('provider', provider);
  }

  hasProvider(): boolean {
    return this.hasFieldValue('provider');
  }

  /** Responsible organization (0..1) Created when absent. */
  getOrganization(): Reference {
    if (this.organization === undefined) {
      this.organization = new Reference();
    }
    return this.organization;
  }

  setOrganization(organization: Reference | undefined): this {
    return this.setFieldValue('organization', organization);
  }

  hasOrganization(): boolean {
    return this.hasFieldValue('organization');
  }

  /** Reference to the Request resource (0..1) Created when absent. */
  getRequest(): Reference {
    if (this.request === undefined) {
      this.request = new Reference();
    }
    return this.request;
  }

  setRequest(request: Reference | undefined): this {
    return this.setFieldValue('request', request);
  }

  hasRequest(): boolean {
    return this.hasFieldValue('request');
  }

  /** Reference to the Response resource (0..1) Created when absent. */
  getResponse(): Reference {
    if (this.response === undefined) {
      this.response = new Reference();
    }
    return this.response;
  }

  setResponse(response: Reference | undefined): this {
    return this.setFieldValue('response', response);
  }

  hasResponse(): boolean {
    return this.hasFieldValue('response');
  }

  /** Remove history (0..1) */
  getNullify(): boolean | undefined {
    return this.nullify;
  }

  /** Sets `nullify`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setNullify(nullify: boolean | undefined): this {
    return this.setFieldValue('nullify', nullify);
  }

  hasNullify(): boolean {
    return this.hasFieldValue('nullify');
  }

  /** The element carrying the id and extensions of `nullify`. Created when absent. */
  getNullifyElement(): Element {
    if (this._nullify === undefined) {
      this._nullify = new Element();
    }
    return this._nullify;
  }

  setNullifyElement(nullifyElement: Element | undefined): this {
    this._nullify = nullifyElement;
    return this;
  }

  /** Reference number/string (0..1) */
  getReference(): string | undefined {
    return this.reference;
  }

  /** Sets `reference`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setReference(reference: string | undefined): this {
    return this.setFieldValue('reference', reference);
  }

  hasReference(): boolean {
    return this.hasFieldValue('reference');
  }

  /** The element carrying the id and extensions of `reference`. Created when absent. */
  getReferenceElement(): Element {
    if (this._reference === undefined) {
      this._reference = new Element();
    }
    return this._reference;
  }

  setReferenceElement(referenceElement: Element | undefined): this {
    this._reference = referenceElement;
    return this;
  }

  /** Items to re-adjudicate (0..*) Never undefined; an empty list is created when absent. */
  getItem(): ProcessRequestItem[] {
    if (this.item === undefined) {
      this.item = [];
    }
    return this.item;
  }

  setItem(item: ProcessRequestItem[] | undefined): this {
    return this.setFieldValue('item', item);
  }

  hasItem(): boolean {
    return this.hasFieldValue('item');
  }

  /** Appends a new, empty ProcessRequestItem to `item` and returns it so it can be filled in. */
  addItem(): ProcessRequestItem;
  /** Appends the given ProcessRequestItem to `item` and returns this object for chaining. */
  addItem(processRequestItem: ProcessRequestItem): this;
  addItem(processRequestItem?: ProcessRequestItem): ProcessRequestItem | this {
    if (processRequestItem !== undefined) {
      return this.addFieldValue('item', processRequestItem);
    }
    const createdProcessRequestItem = new ProcessRequestItem();
    this.addFieldValue('item', createdProcessRequestItem);
    return createdProcessRequestItem;
  }

  /** The first ProcessRequestItem of `item`. One is added when the list is empty. */
  getItemFirstRep(): ProcessRequestItem {
    const firstProcessRequestItem = this.getItem()[0];
    return firstProcessRequestItem === undefined ? this.addItem() : firstProcessRequestItem;
  }

  /** Resource type(s) to include (0..*) Never undefined; an empty list is created when absent. */
  getInclude(): string[] {
    if (this.include === undefined) {
      this.include = [];
    }
    return this.include;
  }

  setInclude(include: string[] | undefined): this {
    return this.setFieldValue('include', include);
  }

  hasInclude(): boolean {
    return this.hasFieldValue('include');
  }

  /** Appends one value to `include`. Throws a FhirModelError when it is not a valid FHIR string. */
  addInclude(include: string): this {
    return this.addFieldValue('include', include);
  }

  /** Resource type(s) to exclude (0..*) Never undefined; an empty list is created when absent. */
  getExclude(): string[] {
    if (this.exclude === undefined) {
      this.exclude = [];
    }
    return this.exclude;
  }

  setExclude(exclude: string[] | undefined): this {
    return this.setFieldValue('exclude', exclude);
  }

  hasExclude(): boolean {
    return this.hasFieldValue('exclude');
  }

  /** Appends one value to `exclude`. Throws a FhirModelError when it is not a valid FHIR string. */
  addExclude(exclude: string): this {
    return this.addFieldValue('exclude', exclude);
  }

  /** Selection period (0..1) Created when absent. */
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
}

modelTypeRegistry.register('ProcessRequest', ProcessRequest, true);

/** True when the value is a ProcessRequest model instance. */
export function isProcessRequest(candidate: unknown): candidate is ProcessRequest {
  return candidate instanceof ProcessRequest;
}

/**
 * Items to re-adjudicate
 */
export class ProcessRequestItem extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'sequenceLinkId',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sequenceLinkId', typeCode: 'integer' }],
    },
  ];

  /** Service instance (1..1) */
  sequenceLinkId?: number;
  /** Id and extensions of the primitive `sequenceLinkId`. */
  _sequenceLinkId?: Element;

  override fhirType(): string {
    return 'ProcessRequest.item';
  }

  /** FHIR JSON for this ProcessRequestItem, typed as the plain `ProcessRequestItem` data type. */
  override toJSON(): plainTypes.ProcessRequestItem {
    return this.serialize() as plainTypes.ProcessRequestItem;
  }

  /** Service instance (1..1) */
  getSequenceLinkId(): number | undefined {
    return this.sequenceLinkId;
  }

  /** Sets `sequenceLinkId`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setSequenceLinkId(sequenceLinkId: number | undefined): this {
    return this.setFieldValue('sequenceLinkId', sequenceLinkId);
  }

  hasSequenceLinkId(): boolean {
    return this.hasFieldValue('sequenceLinkId');
  }

  /** The element carrying the id and extensions of `sequenceLinkId`. Created when absent. */
  getSequenceLinkIdElement(): Element {
    if (this._sequenceLinkId === undefined) {
      this._sequenceLinkId = new Element();
    }
    return this._sequenceLinkId;
  }

  setSequenceLinkIdElement(sequenceLinkIdElement: Element | undefined): this {
    this._sequenceLinkId = sequenceLinkIdElement;
    return this;
  }
}

modelTypeRegistry.register('ProcessRequestItem', ProcessRequestItem, false);
