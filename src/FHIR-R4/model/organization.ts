/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../classes/models-r4';
import { Address } from './address';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { ContactPoint } from './contactPoint';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { HumanName } from './humanName';
import { Identifier } from './identifier';
import { Reference } from './reference';

/**
 * A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action. Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc.
 */
export class Organization extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'active',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'active', typeCode: 'boolean' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'alias',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'alias', typeCode: 'string' }],
    },
    {
      elementName: 'telecom',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'telecom', typeCode: 'ContactPoint' }],
    },
    {
      elementName: 'address',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'address', typeCode: 'Address' }],
    },
    {
      elementName: 'partOf',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'partOf', typeCode: 'Reference', targetResourceTypes: ['Organization'] }],
    },
    {
      elementName: 'contact',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'contact', typeCode: 'OrganizationContact' }],
    },
    {
      elementName: 'endpoint',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'endpoint', typeCode: 'Reference', targetResourceTypes: ['Endpoint'] }],
    },
  ];

  readonly resourceType = 'Organization';

  /** Identifies this organization across multiple systems (0..*) */
  identifier?: Identifier[];

  /** Whether the organization's record is still in active use (0..1) */
  active?: boolean;
  /** Id and extensions of the primitive `active`. */
  _active?: Element;

  /** Kind of organization (0..*) */
  type?: CodeableConcept[];

  /** Name used for the organization (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** A list of alternate names that the organization is known as, or was known as in the past (0..*) */
  alias?: string[];
  /** Id and extensions of the primitive `alias`. */
  _alias?: (Element | null)[];

  /** A contact detail for the organization (0..*) */
  telecom?: ContactPoint[];

  /** An address for the organization (0..*) */
  address?: Address[];

  /** The organization of which this organization forms a part (0..1) */
  partOf?: Reference;

  /** Contact for the organization for a certain purpose (0..*) */
  contact?: OrganizationContact[];

  /** Technical endpoints providing access to services operated for the organization (0..*) */
  endpoint?: Reference[];

  override fhirType(): string {
    return 'Organization';
  }

  /** FHIR JSON for this Organization, typed as the plain `Organization` data type. */
  override toJSON(): plainTypes.Organization {
    return this.serialize() as plainTypes.Organization;
  }

  /** Identifies this organization across multiple systems (0..*) Never undefined; an empty list is created when absent. */
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

  /** Whether the organization's record is still in active use (0..1) */
  getActive(): boolean | undefined {
    return this.active;
  }

  /** Sets `active`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setActive(active: boolean | undefined): this {
    return this.setFieldValue('active', active);
  }

  hasActive(): boolean {
    return this.hasFieldValue('active');
  }

  /** The element carrying the id and extensions of `active`. Created when absent. */
  getActiveElement(): Element {
    if (this._active === undefined) {
      this._active = new Element();
    }
    return this._active;
  }

  setActiveElement(activeElement: Element | undefined): this {
    this._active = activeElement;
    return this;
  }

  /** Kind of organization (0..*) Never undefined; an empty list is created when absent. */
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

  /** Name used for the organization (0..1) */
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

  /** A list of alternate names that the organization is known as, or was known as in the past (0..*) Never undefined; an empty list is created when absent. */
  getAlias(): string[] {
    if (this.alias === undefined) {
      this.alias = [];
    }
    return this.alias;
  }

  setAlias(alias: string[] | undefined): this {
    return this.setFieldValue('alias', alias);
  }

  hasAlias(): boolean {
    return this.hasFieldValue('alias');
  }

  /** Appends one value to `alias`. Throws a FhirModelError when it is not a valid FHIR string. */
  addAlias(alias: string): this {
    return this.addFieldValue('alias', alias);
  }

  /** A contact detail for the organization (0..*) Never undefined; an empty list is created when absent. */
  getTelecom(): ContactPoint[] {
    if (this.telecom === undefined) {
      this.telecom = [];
    }
    return this.telecom;
  }

  setTelecom(telecom: ContactPoint[] | undefined): this {
    return this.setFieldValue('telecom', telecom);
  }

  hasTelecom(): boolean {
    return this.hasFieldValue('telecom');
  }

  /** Appends a new, empty ContactPoint to `telecom` and returns it so it can be filled in. */
  addTelecom(): ContactPoint;
  /** Appends the given ContactPoint to `telecom` and returns this object for chaining. */
  addTelecom(contactPoint: ContactPoint): this;
  addTelecom(contactPoint?: ContactPoint): ContactPoint | this {
    if (contactPoint !== undefined) {
      return this.addFieldValue('telecom', contactPoint);
    }
    const createdContactPoint = new ContactPoint();
    this.addFieldValue('telecom', createdContactPoint);
    return createdContactPoint;
  }

  /** The first ContactPoint of `telecom`. One is added when the list is empty. */
  getTelecomFirstRep(): ContactPoint {
    const firstContactPoint = this.getTelecom()[0];
    return firstContactPoint === undefined ? this.addTelecom() : firstContactPoint;
  }

  /** An address for the organization (0..*) Never undefined; an empty list is created when absent. */
  getAddress(): Address[] {
    if (this.address === undefined) {
      this.address = [];
    }
    return this.address;
  }

  setAddress(address: Address[] | undefined): this {
    return this.setFieldValue('address', address);
  }

  hasAddress(): boolean {
    return this.hasFieldValue('address');
  }

  /** Appends a new, empty Address to `address` and returns it so it can be filled in. */
  addAddress(): Address;
  /** Appends the given Address to `address` and returns this object for chaining. */
  addAddress(address: Address): this;
  addAddress(address?: Address): Address | this {
    if (address !== undefined) {
      return this.addFieldValue('address', address);
    }
    const createdAddress = new Address();
    this.addFieldValue('address', createdAddress);
    return createdAddress;
  }

  /** The first Address of `address`. One is added when the list is empty. */
  getAddressFirstRep(): Address {
    const firstAddress = this.getAddress()[0];
    return firstAddress === undefined ? this.addAddress() : firstAddress;
  }

  /** The organization of which this organization forms a part (0..1) Created when absent. */
  getPartOf(): Reference {
    if (this.partOf === undefined) {
      this.partOf = new Reference();
    }
    return this.partOf;
  }

  setPartOf(partOf: Reference | undefined): this {
    return this.setFieldValue('partOf', partOf);
  }

  hasPartOf(): boolean {
    return this.hasFieldValue('partOf');
  }

  /** Contact for the organization for a certain purpose (0..*) Never undefined; an empty list is created when absent. */
  getContact(): OrganizationContact[] {
    if (this.contact === undefined) {
      this.contact = [];
    }
    return this.contact;
  }

  setContact(contact: OrganizationContact[] | undefined): this {
    return this.setFieldValue('contact', contact);
  }

  hasContact(): boolean {
    return this.hasFieldValue('contact');
  }

  /** Appends a new, empty OrganizationContact to `contact` and returns it so it can be filled in. */
  addContact(): OrganizationContact;
  /** Appends the given OrganizationContact to `contact` and returns this object for chaining. */
  addContact(organizationContact: OrganizationContact): this;
  addContact(organizationContact?: OrganizationContact): OrganizationContact | this {
    if (organizationContact !== undefined) {
      return this.addFieldValue('contact', organizationContact);
    }
    const createdOrganizationContact = new OrganizationContact();
    this.addFieldValue('contact', createdOrganizationContact);
    return createdOrganizationContact;
  }

  /** The first OrganizationContact of `contact`. One is added when the list is empty. */
  getContactFirstRep(): OrganizationContact {
    const firstOrganizationContact = this.getContact()[0];
    return firstOrganizationContact === undefined ? this.addContact() : firstOrganizationContact;
  }

  /** Technical endpoints providing access to services operated for the organization (0..*) Never undefined; an empty list is created when absent. */
  getEndpoint(): Reference[] {
    if (this.endpoint === undefined) {
      this.endpoint = [];
    }
    return this.endpoint;
  }

  setEndpoint(endpoint: Reference[] | undefined): this {
    return this.setFieldValue('endpoint', endpoint);
  }

  hasEndpoint(): boolean {
    return this.hasFieldValue('endpoint');
  }

  /** Appends a new, empty Reference to `endpoint` and returns it so it can be filled in. */
  addEndpoint(): Reference;
  /** Appends the given Reference to `endpoint` and returns this object for chaining. */
  addEndpoint(reference: Reference): this;
  addEndpoint(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('endpoint', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('endpoint', createdReference);
    return createdReference;
  }

  /** The first Reference of `endpoint`. One is added when the list is empty. */
  getEndpointFirstRep(): Reference {
    const firstReference = this.getEndpoint()[0];
    return firstReference === undefined ? this.addEndpoint() : firstReference;
  }
}

modelTypeRegistry.register('Organization', Organization, true);

/** True when the value is a Organization model instance. */
export function isOrganization(candidate: unknown): candidate is Organization {
  return candidate instanceof Organization;
}

/**
 * Contact for the organization for a certain purpose
 */
export class OrganizationContact extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'purpose',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'purpose', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'HumanName' }],
    },
    {
      elementName: 'telecom',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'telecom', typeCode: 'ContactPoint' }],
    },
    {
      elementName: 'address',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'address', typeCode: 'Address' }],
    },
  ];

  /** The type of contact (0..1) */
  purpose?: CodeableConcept;

  /** A name associated with the contact (0..1) */
  name?: HumanName;

  /** Contact details (telephone, email, etc.) for a contact (0..*) */
  telecom?: ContactPoint[];

  /** Visiting or postal addresses for the contact (0..1) */
  address?: Address;

  override fhirType(): string {
    return 'Organization.contact';
  }

  /** FHIR JSON for this OrganizationContact, typed as the plain `OrganizationContact` data type. */
  override toJSON(): plainTypes.OrganizationContact {
    return this.serialize() as plainTypes.OrganizationContact;
  }

  /** The type of contact (0..1) Created when absent. */
  getPurpose(): CodeableConcept {
    if (this.purpose === undefined) {
      this.purpose = new CodeableConcept();
    }
    return this.purpose;
  }

  setPurpose(purpose: CodeableConcept | undefined): this {
    return this.setFieldValue('purpose', purpose);
  }

  hasPurpose(): boolean {
    return this.hasFieldValue('purpose');
  }

  /** A name associated with the contact (0..1) Created when absent. */
  getName(): HumanName {
    if (this.name === undefined) {
      this.name = new HumanName();
    }
    return this.name;
  }

  setName(name: HumanName | undefined): this {
    return this.setFieldValue('name', name);
  }

  hasName(): boolean {
    return this.hasFieldValue('name');
  }

  /** Contact details (telephone, email, etc.) for a contact (0..*) Never undefined; an empty list is created when absent. */
  getTelecom(): ContactPoint[] {
    if (this.telecom === undefined) {
      this.telecom = [];
    }
    return this.telecom;
  }

  setTelecom(telecom: ContactPoint[] | undefined): this {
    return this.setFieldValue('telecom', telecom);
  }

  hasTelecom(): boolean {
    return this.hasFieldValue('telecom');
  }

  /** Appends a new, empty ContactPoint to `telecom` and returns it so it can be filled in. */
  addTelecom(): ContactPoint;
  /** Appends the given ContactPoint to `telecom` and returns this object for chaining. */
  addTelecom(contactPoint: ContactPoint): this;
  addTelecom(contactPoint?: ContactPoint): ContactPoint | this {
    if (contactPoint !== undefined) {
      return this.addFieldValue('telecom', contactPoint);
    }
    const createdContactPoint = new ContactPoint();
    this.addFieldValue('telecom', createdContactPoint);
    return createdContactPoint;
  }

  /** The first ContactPoint of `telecom`. One is added when the list is empty. */
  getTelecomFirstRep(): ContactPoint {
    const firstContactPoint = this.getTelecom()[0];
    return firstContactPoint === undefined ? this.addTelecom() : firstContactPoint;
  }

  /** Visiting or postal addresses for the contact (0..1) Created when absent. */
  getAddress(): Address {
    if (this.address === undefined) {
      this.address = new Address();
    }
    return this.address;
  }

  setAddress(address: Address | undefined): this {
    return this.setFieldValue('address', address);
  }

  hasAddress(): boolean {
    return this.hasFieldValue('address');
  }
}

modelTypeRegistry.register('OrganizationContact', OrganizationContact, false);
