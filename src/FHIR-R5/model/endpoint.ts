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
import { ContactPoint } from './contactPoint';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';

/**
 * The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b, a REST endpoint for another FHIR server, or a s/Mime email address. This may include any security context information.
 */
export class Endpoint extends DomainResource {
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
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.EndpointStatus }],
    },
    {
      elementName: 'connectionType',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'connectionType', typeCode: 'CodeableConcept' }],
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
      elementName: 'environmentType',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'environmentType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'managingOrganization',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'managingOrganization',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization'],
        },
      ],
    },
    {
      elementName: 'contact',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'contact', typeCode: 'ContactPoint' }],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
    {
      elementName: 'payload',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'payload', typeCode: 'EndpointPayload' }],
    },
    {
      elementName: 'address',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'address', typeCode: 'url' }],
    },
    {
      elementName: 'header',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'header', typeCode: 'string' }],
    },
  ];

  readonly resourceType = 'Endpoint';

  /** Identifies this endpoint across multiple systems (0..*) */
  identifier?: Identifier[];

  /** active | suspended | error | off | entered-in-error | test (1..1) */
  status?: valueSetCodes.EndpointStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Protocol/Profile/Standard to be used with this endpoint connection (1..*) */
  connectionType?: CodeableConcept[];

  /** A name that this endpoint can be identified by (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Additional details about the endpoint that could be displayed as further information to identify the description beyond its name (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** The type of environment(s) exposed at this endpoint (0..*) */
  environmentType?: CodeableConcept[];

  /** Organization that manages this endpoint (might not be the organization that exposes the endpoint) (0..1) */
  managingOrganization?: Reference;

  /** Contact details for source (e.g. troubleshooting) (0..*) */
  contact?: ContactPoint[];

  /** Interval the endpoint is expected to be operational (0..1) */
  period?: Period;

  /** Set of payloads that are provided by this endpoint (0..*) */
  payload?: EndpointPayload[];

  /** The technical base address for connecting to this endpoint (1..1) */
  address?: string;
  /** Id and extensions of the primitive `address`. */
  _address?: Element;

  /** Usage depends on the channel type (0..*) */
  header?: string[];
  /** Id and extensions of the primitive `header`. */
  _header?: (Element | null)[];

  override fhirType(): string {
    return 'Endpoint';
  }

  /** FHIR JSON for this Endpoint, typed as the plain `Endpoint` data type. */
  override toJSON(): plainTypes.Endpoint {
    return this.serialize() as plainTypes.Endpoint;
  }

  /** Identifies this endpoint across multiple systems (0..*) Never undefined; an empty list is created when absent. */
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

  /** active | suspended | error | off | entered-in-error | test (1..1) */
  getStatus(): valueSetCodes.EndpointStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.EndpointStatus | undefined): this {
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

  /** Protocol/Profile/Standard to be used with this endpoint connection (1..*) Never undefined; an empty list is created when absent. */
  getConnectionType(): CodeableConcept[] {
    if (this.connectionType === undefined) {
      this.connectionType = [];
    }
    return this.connectionType;
  }

  setConnectionType(connectionType: CodeableConcept[] | undefined): this {
    return this.setFieldValue('connectionType', connectionType);
  }

  hasConnectionType(): boolean {
    return this.hasFieldValue('connectionType');
  }

  /** Appends a new, empty CodeableConcept to `connectionType` and returns it so it can be filled in. */
  addConnectionType(): CodeableConcept;
  /** Appends the given CodeableConcept to `connectionType` and returns this object for chaining. */
  addConnectionType(codeableConcept: CodeableConcept): this;
  addConnectionType(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('connectionType', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('connectionType', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `connectionType`. One is added when the list is empty. */
  getConnectionTypeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getConnectionType()[0];
    return firstCodeableConcept === undefined ? this.addConnectionType() : firstCodeableConcept;
  }

  /** A name that this endpoint can be identified by (0..1) */
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

  /** Additional details about the endpoint that could be displayed as further information to identify the description beyond its name (0..1) */
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

  /** The type of environment(s) exposed at this endpoint (0..*) Never undefined; an empty list is created when absent. */
  getEnvironmentType(): CodeableConcept[] {
    if (this.environmentType === undefined) {
      this.environmentType = [];
    }
    return this.environmentType;
  }

  setEnvironmentType(environmentType: CodeableConcept[] | undefined): this {
    return this.setFieldValue('environmentType', environmentType);
  }

  hasEnvironmentType(): boolean {
    return this.hasFieldValue('environmentType');
  }

  /** Appends a new, empty CodeableConcept to `environmentType` and returns it so it can be filled in. */
  addEnvironmentType(): CodeableConcept;
  /** Appends the given CodeableConcept to `environmentType` and returns this object for chaining. */
  addEnvironmentType(codeableConcept: CodeableConcept): this;
  addEnvironmentType(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('environmentType', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('environmentType', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `environmentType`. One is added when the list is empty. */
  getEnvironmentTypeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getEnvironmentType()[0];
    return firstCodeableConcept === undefined ? this.addEnvironmentType() : firstCodeableConcept;
  }

  /** Organization that manages this endpoint (might not be the organization that exposes the endpoint) (0..1) Created when absent. */
  getManagingOrganization(): Reference {
    if (this.managingOrganization === undefined) {
      this.managingOrganization = new Reference();
    }
    return this.managingOrganization;
  }

  setManagingOrganization(managingOrganization: Reference | undefined): this {
    return this.setFieldValue('managingOrganization', managingOrganization);
  }

  hasManagingOrganization(): boolean {
    return this.hasFieldValue('managingOrganization');
  }

  /** Contact details for source (e.g. troubleshooting) (0..*) Never undefined; an empty list is created when absent. */
  getContact(): ContactPoint[] {
    if (this.contact === undefined) {
      this.contact = [];
    }
    return this.contact;
  }

  setContact(contact: ContactPoint[] | undefined): this {
    return this.setFieldValue('contact', contact);
  }

  hasContact(): boolean {
    return this.hasFieldValue('contact');
  }

  /** Appends a new, empty ContactPoint to `contact` and returns it so it can be filled in. */
  addContact(): ContactPoint;
  /** Appends the given ContactPoint to `contact` and returns this object for chaining. */
  addContact(contactPoint: ContactPoint): this;
  addContact(contactPoint?: ContactPoint): ContactPoint | this {
    if (contactPoint !== undefined) {
      return this.addFieldValue('contact', contactPoint);
    }
    const createdContactPoint = new ContactPoint();
    this.addFieldValue('contact', createdContactPoint);
    return createdContactPoint;
  }

  /** The first ContactPoint of `contact`. One is added when the list is empty. */
  getContactFirstRep(): ContactPoint {
    const firstContactPoint = this.getContact()[0];
    return firstContactPoint === undefined ? this.addContact() : firstContactPoint;
  }

  /** Interval the endpoint is expected to be operational (0..1) Created when absent. */
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

  /** Set of payloads that are provided by this endpoint (0..*) Never undefined; an empty list is created when absent. */
  getPayload(): EndpointPayload[] {
    if (this.payload === undefined) {
      this.payload = [];
    }
    return this.payload;
  }

  setPayload(payload: EndpointPayload[] | undefined): this {
    return this.setFieldValue('payload', payload);
  }

  hasPayload(): boolean {
    return this.hasFieldValue('payload');
  }

  /** Appends a new, empty EndpointPayload to `payload` and returns it so it can be filled in. */
  addPayload(): EndpointPayload;
  /** Appends the given EndpointPayload to `payload` and returns this object for chaining. */
  addPayload(endpointPayload: EndpointPayload): this;
  addPayload(endpointPayload?: EndpointPayload): EndpointPayload | this {
    if (endpointPayload !== undefined) {
      return this.addFieldValue('payload', endpointPayload);
    }
    const createdEndpointPayload = new EndpointPayload();
    this.addFieldValue('payload', createdEndpointPayload);
    return createdEndpointPayload;
  }

  /** The first EndpointPayload of `payload`. One is added when the list is empty. */
  getPayloadFirstRep(): EndpointPayload {
    const firstEndpointPayload = this.getPayload()[0];
    return firstEndpointPayload === undefined ? this.addPayload() : firstEndpointPayload;
  }

  /** The technical base address for connecting to this endpoint (1..1) */
  getAddress(): string | undefined {
    return this.address;
  }

  /** Sets `address`. Throws a FhirModelError when the value is not a valid FHIR url. */
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

  /** Usage depends on the channel type (0..*) Never undefined; an empty list is created when absent. */
  getHeader(): string[] {
    if (this.header === undefined) {
      this.header = [];
    }
    return this.header;
  }

  setHeader(header: string[] | undefined): this {
    return this.setFieldValue('header', header);
  }

  hasHeader(): boolean {
    return this.hasFieldValue('header');
  }

  /** Appends one value to `header`. Throws a FhirModelError when it is not a valid FHIR string. */
  addHeader(header: string): this {
    return this.addFieldValue('header', header);
  }
}

modelTypeRegistry.register('Endpoint', Endpoint, true);

/** True when the value is a Endpoint model instance. */
export function isEndpoint(candidate: unknown): candidate is Endpoint {
  return candidate instanceof Endpoint;
}

/**
 * Set of payloads that are provided by this endpoint
 */
export class EndpointPayload extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'mimeType',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'mimeType', typeCode: 'code' }],
    },
  ];

  /** The type of content that may be used at this endpoint (e.g. XDS Discharge summaries) (0..*) */
  type?: CodeableConcept[];

  /** Mimetype to send. If not specified, the content could be anything (including no payload, if the connectionType defined this) (0..*) */
  mimeType?: string[];
  /** Id and extensions of the primitive `mimeType`. */
  _mimeType?: (Element | null)[];

  override fhirType(): string {
    return 'Endpoint.payload';
  }

  /** FHIR JSON for this EndpointPayload, typed as the plain `EndpointPayload` data type. */
  override toJSON(): plainTypes.EndpointPayload {
    return this.serialize() as plainTypes.EndpointPayload;
  }

  /** The type of content that may be used at this endpoint (e.g. XDS Discharge summaries) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Mimetype to send. If not specified, the content could be anything (including no payload, if the connectionType defined this) (0..*) Never undefined; an empty list is created when absent. */
  getMimeType(): string[] {
    if (this.mimeType === undefined) {
      this.mimeType = [];
    }
    return this.mimeType;
  }

  setMimeType(mimeType: string[] | undefined): this {
    return this.setFieldValue('mimeType', mimeType);
  }

  hasMimeType(): boolean {
    return this.hasFieldValue('mimeType');
  }

  /** Appends one value to `mimeType`. Throws a FhirModelError when it is not a valid FHIR code. */
  addMimeType(mimeType: string): this {
    return this.addFieldValue('mimeType', mimeType);
  }
}

modelTypeRegistry.register('EndpointPayload', EndpointPayload, false);
