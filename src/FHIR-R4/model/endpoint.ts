/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { CodeableConcept } from './codeableConcept';
import { Coding } from './coding';
import { ContactPoint } from './contactPoint';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';

/**
 * The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information.
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
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'connectionType', typeCode: 'Coding' }],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
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
      elementName: 'payloadType',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'payloadType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'payloadMimeType',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'payloadMimeType', typeCode: 'code' }],
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

  /** Protocol/Profile/Standard to be used with this endpoint connection (1..1) */
  connectionType?: Coding;

  /** A name that this endpoint can be identified by (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Organization that manages this endpoint (might not be the organization that exposes the endpoint) (0..1) */
  managingOrganization?: Reference;

  /** Contact details for source (e.g. troubleshooting) (0..*) */
  contact?: ContactPoint[];

  /** Interval the endpoint is expected to be operational (0..1) */
  period?: Period;

  /** The type of content that may be used at this endpoint (e.g. XDS Discharge summaries) (1..*) */
  payloadType?: CodeableConcept[];

  /** Mimetype to send. If not specified, the content could be anything (including no payload, if the connectionType defined this) (0..*) */
  payloadMimeType?: string[];
  /** Id and extensions of the primitive `payloadMimeType`. */
  _payloadMimeType?: (Element | null)[];

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

  /** Protocol/Profile/Standard to be used with this endpoint connection (1..1) Created when absent. */
  getConnectionType(): Coding {
    if (this.connectionType === undefined) {
      this.connectionType = new Coding();
    }
    return this.connectionType;
  }

  setConnectionType(connectionType: Coding | undefined): this {
    return this.setFieldValue('connectionType', connectionType);
  }

  hasConnectionType(): boolean {
    return this.hasFieldValue('connectionType');
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

  /** The type of content that may be used at this endpoint (e.g. XDS Discharge summaries) (1..*) Never undefined; an empty list is created when absent. */
  getPayloadType(): CodeableConcept[] {
    if (this.payloadType === undefined) {
      this.payloadType = [];
    }
    return this.payloadType;
  }

  setPayloadType(payloadType: CodeableConcept[] | undefined): this {
    return this.setFieldValue('payloadType', payloadType);
  }

  hasPayloadType(): boolean {
    return this.hasFieldValue('payloadType');
  }

  /** Appends a new, empty CodeableConcept to `payloadType` and returns it so it can be filled in. */
  addPayloadType(): CodeableConcept;
  /** Appends the given CodeableConcept to `payloadType` and returns this object for chaining. */
  addPayloadType(codeableConcept: CodeableConcept): this;
  addPayloadType(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('payloadType', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('payloadType', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `payloadType`. One is added when the list is empty. */
  getPayloadTypeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getPayloadType()[0];
    return firstCodeableConcept === undefined ? this.addPayloadType() : firstCodeableConcept;
  }

  /** Mimetype to send. If not specified, the content could be anything (including no payload, if the connectionType defined this) (0..*) Never undefined; an empty list is created when absent. */
  getPayloadMimeType(): string[] {
    if (this.payloadMimeType === undefined) {
      this.payloadMimeType = [];
    }
    return this.payloadMimeType;
  }

  setPayloadMimeType(payloadMimeType: string[] | undefined): this {
    return this.setFieldValue('payloadMimeType', payloadMimeType);
  }

  hasPayloadMimeType(): boolean {
    return this.hasFieldValue('payloadMimeType');
  }

  /** Appends one value to `payloadMimeType`. Throws a FhirModelError when it is not a valid FHIR code. */
  addPayloadMimeType(payloadMimeType: string): this {
    return this.addFieldValue('payloadMimeType', payloadMimeType);
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
