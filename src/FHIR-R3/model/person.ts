/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { Address } from './address';
import { Attachment } from './attachment';
import { BackboneElement } from './backboneElement';
import { ContactPoint } from './contactPoint';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { HumanName } from './humanName';
import { Identifier } from './identifier';
import { Reference } from './reference';

/**
 * Base StructureDefinition for Person Resource
 */
export class Person extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: Infinity,
      isList: true,
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
      elementName: 'gender',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'gender', typeCode: 'code', allowedCodes: valueSetCodes.AdministrativeGender },
      ],
    },
    {
      elementName: 'birthDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'birthDate', typeCode: 'date' }],
    },
    {
      elementName: 'address',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'address', typeCode: 'Address' }],
    },
    {
      elementName: 'photo',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'photo', typeCode: 'Attachment' }],
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
      elementName: 'active',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'active', typeCode: 'boolean' }],
    },
    {
      elementName: 'link',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'link', typeCode: 'PersonLink' }],
    },
  ];

  readonly resourceType = 'Person';

  /** A human identifier for this person (0..*) */
  identifier?: Identifier[];

  /** A name associated with the person (0..*) */
  name?: HumanName[];

  /** A contact detail for the person (0..*) */
  telecom?: ContactPoint[];

  /** male | female | other | unknown (0..1) */
  gender?: valueSetCodes.AdministrativeGender;
  /** Id and extensions of the primitive `gender`. */
  _gender?: Element;

  /** The date on which the person was born (0..1) */
  birthDate?: string;
  /** Id and extensions of the primitive `birthDate`. */
  _birthDate?: Element;

  /** One or more addresses for the person (0..*) */
  address?: Address[];

  /** Image of the person (0..1) */
  photo?: Attachment;

  /** The organization that is the custodian of the person record (0..1) */
  managingOrganization?: Reference;

  /** This person's record is in active use (0..1) */
  active?: boolean;
  /** Id and extensions of the primitive `active`. */
  _active?: Element;

  /** Link to a resource that concerns the same actual person (0..*) */
  link?: PersonLink[];

  override fhirType(): string {
    return 'Person';
  }

  /** FHIR JSON for this Person, typed as the plain `Person` data type. */
  override toJSON(): plainTypes.Person {
    return this.serialize() as plainTypes.Person;
  }

  /** A human identifier for this person (0..*) Never undefined; an empty list is created when absent. */
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

  /** A name associated with the person (0..*) Never undefined; an empty list is created when absent. */
  getName(): HumanName[] {
    if (this.name === undefined) {
      this.name = [];
    }
    return this.name;
  }

  setName(name: HumanName[] | undefined): this {
    return this.setFieldValue('name', name);
  }

  hasName(): boolean {
    return this.hasFieldValue('name');
  }

  /** Appends a new, empty HumanName to `name` and returns it so it can be filled in. */
  addName(): HumanName;
  /** Appends the given HumanName to `name` and returns this object for chaining. */
  addName(humanName: HumanName): this;
  addName(humanName?: HumanName): HumanName | this {
    if (humanName !== undefined) {
      return this.addFieldValue('name', humanName);
    }
    const createdHumanName = new HumanName();
    this.addFieldValue('name', createdHumanName);
    return createdHumanName;
  }

  /** The first HumanName of `name`. One is added when the list is empty. */
  getNameFirstRep(): HumanName {
    const firstHumanName = this.getName()[0];
    return firstHumanName === undefined ? this.addName() : firstHumanName;
  }

  /** A contact detail for the person (0..*) Never undefined; an empty list is created when absent. */
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

  /** male | female | other | unknown (0..1) */
  getGender(): valueSetCodes.AdministrativeGender | undefined {
    return this.gender;
  }

  /** Sets `gender`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setGender(gender: valueSetCodes.AdministrativeGender | undefined): this {
    return this.setFieldValue('gender', gender);
  }

  hasGender(): boolean {
    return this.hasFieldValue('gender');
  }

  /** The element carrying the id and extensions of `gender`. Created when absent. */
  getGenderElement(): Element {
    if (this._gender === undefined) {
      this._gender = new Element();
    }
    return this._gender;
  }

  setGenderElement(genderElement: Element | undefined): this {
    this._gender = genderElement;
    return this;
  }

  /** The date on which the person was born (0..1) */
  getBirthDate(): string | undefined {
    return this.birthDate;
  }

  /** Sets `birthDate`. Throws a FhirModelError when the value is not a valid FHIR date. */
  setBirthDate(birthDate: string | undefined): this {
    return this.setFieldValue('birthDate', birthDate);
  }

  hasBirthDate(): boolean {
    return this.hasFieldValue('birthDate');
  }

  /** The element carrying the id and extensions of `birthDate`. Created when absent. */
  getBirthDateElement(): Element {
    if (this._birthDate === undefined) {
      this._birthDate = new Element();
    }
    return this._birthDate;
  }

  setBirthDateElement(birthDateElement: Element | undefined): this {
    this._birthDate = birthDateElement;
    return this;
  }

  /** One or more addresses for the person (0..*) Never undefined; an empty list is created when absent. */
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

  /** Image of the person (0..1) Created when absent. */
  getPhoto(): Attachment {
    if (this.photo === undefined) {
      this.photo = new Attachment();
    }
    return this.photo;
  }

  setPhoto(photo: Attachment | undefined): this {
    return this.setFieldValue('photo', photo);
  }

  hasPhoto(): boolean {
    return this.hasFieldValue('photo');
  }

  /** The organization that is the custodian of the person record (0..1) Created when absent. */
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

  /** This person's record is in active use (0..1) */
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

  /** Link to a resource that concerns the same actual person (0..*) Never undefined; an empty list is created when absent. */
  getLink(): PersonLink[] {
    if (this.link === undefined) {
      this.link = [];
    }
    return this.link;
  }

  setLink(link: PersonLink[] | undefined): this {
    return this.setFieldValue('link', link);
  }

  hasLink(): boolean {
    return this.hasFieldValue('link');
  }

  /** Appends a new, empty PersonLink to `link` and returns it so it can be filled in. */
  addLink(): PersonLink;
  /** Appends the given PersonLink to `link` and returns this object for chaining. */
  addLink(personLink: PersonLink): this;
  addLink(personLink?: PersonLink): PersonLink | this {
    if (personLink !== undefined) {
      return this.addFieldValue('link', personLink);
    }
    const createdPersonLink = new PersonLink();
    this.addFieldValue('link', createdPersonLink);
    return createdPersonLink;
  }

  /** The first PersonLink of `link`. One is added when the list is empty. */
  getLinkFirstRep(): PersonLink {
    const firstPersonLink = this.getLink()[0];
    return firstPersonLink === undefined ? this.addLink() : firstPersonLink;
  }
}

modelTypeRegistry.register('Person', Person, true);

/** True when the value is a Person model instance. */
export function isPerson(candidate: unknown): candidate is Person {
  return candidate instanceof Person;
}

/**
 * Link to a resource that concerns the same actual person
 */
export class PersonLink extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'target',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'target',
          typeCode: 'Reference',
          targetResourceTypes: ['Patient', 'Person', 'Practitioner', 'RelatedPerson'],
        },
      ],
    },
    {
      elementName: 'assurance',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'assurance',
          typeCode: 'code',
          allowedCodes: valueSetCodes.IdentityAssuranceLevel,
        },
      ],
    },
  ];

  /** The resource to which this actual person is associated (1..1) */
  target?: Reference;

  /** level1 | level2 | level3 | level4 (0..1) */
  assurance?: valueSetCodes.IdentityAssuranceLevel;
  /** Id and extensions of the primitive `assurance`. */
  _assurance?: Element;

  override fhirType(): string {
    return 'Person.link';
  }

  /** FHIR JSON for this PersonLink, typed as the plain `PersonLink` data type. */
  override toJSON(): plainTypes.PersonLink {
    return this.serialize() as plainTypes.PersonLink;
  }

  /** The resource to which this actual person is associated (1..1) Created when absent. */
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

  /** level1 | level2 | level3 | level4 (0..1) */
  getAssurance(): valueSetCodes.IdentityAssuranceLevel | undefined {
    return this.assurance;
  }

  /** Sets `assurance`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setAssurance(assurance: valueSetCodes.IdentityAssuranceLevel | undefined): this {
    return this.setFieldValue('assurance', assurance);
  }

  hasAssurance(): boolean {
    return this.hasFieldValue('assurance');
  }

  /** The element carrying the id and extensions of `assurance`. Created when absent. */
  getAssuranceElement(): Element {
    if (this._assurance === undefined) {
      this._assurance = new Element();
    }
    return this._assurance;
  }

  setAssuranceElement(assuranceElement: Element | undefined): this {
    this._assurance = assuranceElement;
    return this;
  }
}

modelTypeRegistry.register('PersonLink', PersonLink, false);
