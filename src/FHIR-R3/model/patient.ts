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
import { CodeableConcept } from './codeableConcept';
import { ContactPoint } from './contactPoint';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { HumanName } from './humanName';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';

/**
 * Base StructureDefinition for Patient Resource
 */
export class Patient extends DomainResource {
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
      elementName: 'deceased',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'deceasedBoolean', typeCode: 'boolean' },
        { jsonKey: 'deceasedDateTime', typeCode: 'dateTime' },
      ],
    },
    {
      elementName: 'address',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'address', typeCode: 'Address' }],
    },
    {
      elementName: 'maritalStatus',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'maritalStatus', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'multipleBirth',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'multipleBirthBoolean', typeCode: 'boolean' },
        { jsonKey: 'multipleBirthInteger', typeCode: 'integer' },
      ],
    },
    {
      elementName: 'photo',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'photo', typeCode: 'Attachment' }],
    },
    {
      elementName: 'contact',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'contact', typeCode: 'PatientContact' }],
    },
    {
      elementName: 'animal',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'animal', typeCode: 'PatientAnimal' }],
    },
    {
      elementName: 'communication',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'communication', typeCode: 'PatientCommunication' }],
    },
    {
      elementName: 'generalPractitioner',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'generalPractitioner',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Practitioner'],
        },
      ],
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
      elementName: 'link',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'link', typeCode: 'PatientLink' }],
    },
  ];

  readonly resourceType = 'Patient';

  /** An identifier for this patient (0..*) */
  identifier?: Identifier[];

  /** Whether this patient's record is in active use (0..1) */
  active?: boolean;
  /** Id and extensions of the primitive `active`. */
  _active?: Element;

  /** A name associated with the patient (0..*) */
  name?: HumanName[];

  /** A contact detail for the individual (0..*) */
  telecom?: ContactPoint[];

  /** male | female | other | unknown (0..1) */
  gender?: valueSetCodes.AdministrativeGender;
  /** Id and extensions of the primitive `gender`. */
  _gender?: Element;

  /** The date of birth for the individual (0..1) */
  birthDate?: string;
  /** Id and extensions of the primitive `birthDate`. */
  _birthDate?: Element;

  /** Indicates if the individual is deceased or not (0..1) */
  deceasedBoolean?: boolean;
  /** Id and extensions of the primitive `deceasedBoolean`. */
  _deceasedBoolean?: Element;
  /** Indicates if the individual is deceased or not (0..1) */
  deceasedDateTime?: string;
  /** Id and extensions of the primitive `deceasedDateTime`. */
  _deceasedDateTime?: Element;

  /** Addresses for the individual (0..*) */
  address?: Address[];

  /** Marital (civil) status of a patient (0..1) */
  maritalStatus?: CodeableConcept;

  /** Whether patient is part of a multiple birth (0..1) */
  multipleBirthBoolean?: boolean;
  /** Id and extensions of the primitive `multipleBirthBoolean`. */
  _multipleBirthBoolean?: Element;
  /** Whether patient is part of a multiple birth (0..1) */
  multipleBirthInteger?: number;
  /** Id and extensions of the primitive `multipleBirthInteger`. */
  _multipleBirthInteger?: Element;

  /** Image of the patient (0..*) */
  photo?: Attachment[];

  /** A contact party (e.g. guardian, partner, friend) for the patient (0..*) */
  contact?: PatientContact[];

  /** This patient is known to be an animal (non-human) (0..1) */
  animal?: PatientAnimal;

  /** A list of Languages which may be used to communicate with the patient about his or her health (0..*) */
  communication?: PatientCommunication[];

  /** Patient's nominated primary care provider (0..*) */
  generalPractitioner?: Reference[];

  /** Organization that is the custodian of the patient record (0..1) */
  managingOrganization?: Reference;

  /** Link to another patient resource that concerns the same actual person (0..*) */
  link?: PatientLink[];

  override fhirType(): string {
    return 'Patient';
  }

  /** FHIR JSON for this Patient, typed as the plain `Patient` data type. */
  override toJSON(): plainTypes.Patient {
    return this.serialize() as plainTypes.Patient;
  }

  /** An identifier for this patient (0..*) Never undefined; an empty list is created when absent. */
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

  /** Whether this patient's record is in active use (0..1) */
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

  /** A name associated with the patient (0..*) Never undefined; an empty list is created when absent. */
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

  /** A contact detail for the individual (0..*) Never undefined; an empty list is created when absent. */
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

  /** The date of birth for the individual (0..1) */
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

  /** Indicates if the individual is deceased or not (0..1) Whichever type of `deceased[x]` is set. */
  getDeceased(): boolean | string | undefined {
    return this.getChoiceValue<boolean | string>('deceased');
  }

  /** True when any type of `deceased[x]` is set. */
  hasDeceased(): boolean {
    return this.hasChoiceValue('deceased');
  }

  getDeceasedBoolean(): boolean | undefined {
    return this.deceasedBoolean;
  }

  /** Sets `deceased[x]` as boolean and clears every other type of it. */
  setDeceasedBoolean(deceasedBoolean: boolean | undefined): this {
    return this.setFieldValue('deceasedBoolean', deceasedBoolean);
  }

  hasDeceasedBoolean(): boolean {
    return this.hasFieldValue('deceasedBoolean');
  }

  getDeceasedDateTime(): string | undefined {
    return this.deceasedDateTime;
  }

  /** Sets `deceased[x]` as dateTime and clears every other type of it. */
  setDeceasedDateTime(deceasedDateTime: string | undefined): this {
    return this.setFieldValue('deceasedDateTime', deceasedDateTime);
  }

  hasDeceasedDateTime(): boolean {
    return this.hasFieldValue('deceasedDateTime');
  }

  /** Addresses for the individual (0..*) Never undefined; an empty list is created when absent. */
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

  /** Marital (civil) status of a patient (0..1) Created when absent. */
  getMaritalStatus(): CodeableConcept {
    if (this.maritalStatus === undefined) {
      this.maritalStatus = new CodeableConcept();
    }
    return this.maritalStatus;
  }

  setMaritalStatus(maritalStatus: CodeableConcept | undefined): this {
    return this.setFieldValue('maritalStatus', maritalStatus);
  }

  hasMaritalStatus(): boolean {
    return this.hasFieldValue('maritalStatus');
  }

  /** Whether patient is part of a multiple birth (0..1) Whichever type of `multipleBirth[x]` is set. */
  getMultipleBirth(): boolean | number | undefined {
    return this.getChoiceValue<boolean | number>('multipleBirth');
  }

  /** True when any type of `multipleBirth[x]` is set. */
  hasMultipleBirth(): boolean {
    return this.hasChoiceValue('multipleBirth');
  }

  getMultipleBirthBoolean(): boolean | undefined {
    return this.multipleBirthBoolean;
  }

  /** Sets `multipleBirth[x]` as boolean and clears every other type of it. */
  setMultipleBirthBoolean(multipleBirthBoolean: boolean | undefined): this {
    return this.setFieldValue('multipleBirthBoolean', multipleBirthBoolean);
  }

  hasMultipleBirthBoolean(): boolean {
    return this.hasFieldValue('multipleBirthBoolean');
  }

  getMultipleBirthInteger(): number | undefined {
    return this.multipleBirthInteger;
  }

  /** Sets `multipleBirth[x]` as integer and clears every other type of it. */
  setMultipleBirthInteger(multipleBirthInteger: number | undefined): this {
    return this.setFieldValue('multipleBirthInteger', multipleBirthInteger);
  }

  hasMultipleBirthInteger(): boolean {
    return this.hasFieldValue('multipleBirthInteger');
  }

  /** Image of the patient (0..*) Never undefined; an empty list is created when absent. */
  getPhoto(): Attachment[] {
    if (this.photo === undefined) {
      this.photo = [];
    }
    return this.photo;
  }

  setPhoto(photo: Attachment[] | undefined): this {
    return this.setFieldValue('photo', photo);
  }

  hasPhoto(): boolean {
    return this.hasFieldValue('photo');
  }

  /** Appends a new, empty Attachment to `photo` and returns it so it can be filled in. */
  addPhoto(): Attachment;
  /** Appends the given Attachment to `photo` and returns this object for chaining. */
  addPhoto(attachment: Attachment): this;
  addPhoto(attachment?: Attachment): Attachment | this {
    if (attachment !== undefined) {
      return this.addFieldValue('photo', attachment);
    }
    const createdAttachment = new Attachment();
    this.addFieldValue('photo', createdAttachment);
    return createdAttachment;
  }

  /** The first Attachment of `photo`. One is added when the list is empty. */
  getPhotoFirstRep(): Attachment {
    const firstAttachment = this.getPhoto()[0];
    return firstAttachment === undefined ? this.addPhoto() : firstAttachment;
  }

  /** A contact party (e.g. guardian, partner, friend) for the patient (0..*) Never undefined; an empty list is created when absent. */
  getContact(): PatientContact[] {
    if (this.contact === undefined) {
      this.contact = [];
    }
    return this.contact;
  }

  setContact(contact: PatientContact[] | undefined): this {
    return this.setFieldValue('contact', contact);
  }

  hasContact(): boolean {
    return this.hasFieldValue('contact');
  }

  /** Appends a new, empty PatientContact to `contact` and returns it so it can be filled in. */
  addContact(): PatientContact;
  /** Appends the given PatientContact to `contact` and returns this object for chaining. */
  addContact(patientContact: PatientContact): this;
  addContact(patientContact?: PatientContact): PatientContact | this {
    if (patientContact !== undefined) {
      return this.addFieldValue('contact', patientContact);
    }
    const createdPatientContact = new PatientContact();
    this.addFieldValue('contact', createdPatientContact);
    return createdPatientContact;
  }

  /** The first PatientContact of `contact`. One is added when the list is empty. */
  getContactFirstRep(): PatientContact {
    const firstPatientContact = this.getContact()[0];
    return firstPatientContact === undefined ? this.addContact() : firstPatientContact;
  }

  /** This patient is known to be an animal (non-human) (0..1) Created when absent. */
  getAnimal(): PatientAnimal {
    if (this.animal === undefined) {
      this.animal = new PatientAnimal();
    }
    return this.animal;
  }

  setAnimal(animal: PatientAnimal | undefined): this {
    return this.setFieldValue('animal', animal);
  }

  hasAnimal(): boolean {
    return this.hasFieldValue('animal');
  }

  /** A list of Languages which may be used to communicate with the patient about his or her health (0..*) Never undefined; an empty list is created when absent. */
  getCommunication(): PatientCommunication[] {
    if (this.communication === undefined) {
      this.communication = [];
    }
    return this.communication;
  }

  setCommunication(communication: PatientCommunication[] | undefined): this {
    return this.setFieldValue('communication', communication);
  }

  hasCommunication(): boolean {
    return this.hasFieldValue('communication');
  }

  /** Appends a new, empty PatientCommunication to `communication` and returns it so it can be filled in. */
  addCommunication(): PatientCommunication;
  /** Appends the given PatientCommunication to `communication` and returns this object for chaining. */
  addCommunication(patientCommunication: PatientCommunication): this;
  addCommunication(patientCommunication?: PatientCommunication): PatientCommunication | this {
    if (patientCommunication !== undefined) {
      return this.addFieldValue('communication', patientCommunication);
    }
    const createdPatientCommunication = new PatientCommunication();
    this.addFieldValue('communication', createdPatientCommunication);
    return createdPatientCommunication;
  }

  /** The first PatientCommunication of `communication`. One is added when the list is empty. */
  getCommunicationFirstRep(): PatientCommunication {
    const firstPatientCommunication = this.getCommunication()[0];
    return firstPatientCommunication === undefined
      ? this.addCommunication()
      : firstPatientCommunication;
  }

  /** Patient's nominated primary care provider (0..*) Never undefined; an empty list is created when absent. */
  getGeneralPractitioner(): Reference[] {
    if (this.generalPractitioner === undefined) {
      this.generalPractitioner = [];
    }
    return this.generalPractitioner;
  }

  setGeneralPractitioner(generalPractitioner: Reference[] | undefined): this {
    return this.setFieldValue('generalPractitioner', generalPractitioner);
  }

  hasGeneralPractitioner(): boolean {
    return this.hasFieldValue('generalPractitioner');
  }

  /** Appends a new, empty Reference to `generalPractitioner` and returns it so it can be filled in. */
  addGeneralPractitioner(): Reference;
  /** Appends the given Reference to `generalPractitioner` and returns this object for chaining. */
  addGeneralPractitioner(reference: Reference): this;
  addGeneralPractitioner(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('generalPractitioner', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('generalPractitioner', createdReference);
    return createdReference;
  }

  /** The first Reference of `generalPractitioner`. One is added when the list is empty. */
  getGeneralPractitionerFirstRep(): Reference {
    const firstReference = this.getGeneralPractitioner()[0];
    return firstReference === undefined ? this.addGeneralPractitioner() : firstReference;
  }

  /** Organization that is the custodian of the patient record (0..1) Created when absent. */
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

  /** Link to another patient resource that concerns the same actual person (0..*) Never undefined; an empty list is created when absent. */
  getLink(): PatientLink[] {
    if (this.link === undefined) {
      this.link = [];
    }
    return this.link;
  }

  setLink(link: PatientLink[] | undefined): this {
    return this.setFieldValue('link', link);
  }

  hasLink(): boolean {
    return this.hasFieldValue('link');
  }

  /** Appends a new, empty PatientLink to `link` and returns it so it can be filled in. */
  addLink(): PatientLink;
  /** Appends the given PatientLink to `link` and returns this object for chaining. */
  addLink(patientLink: PatientLink): this;
  addLink(patientLink?: PatientLink): PatientLink | this {
    if (patientLink !== undefined) {
      return this.addFieldValue('link', patientLink);
    }
    const createdPatientLink = new PatientLink();
    this.addFieldValue('link', createdPatientLink);
    return createdPatientLink;
  }

  /** The first PatientLink of `link`. One is added when the list is empty. */
  getLinkFirstRep(): PatientLink {
    const firstPatientLink = this.getLink()[0];
    return firstPatientLink === undefined ? this.addLink() : firstPatientLink;
  }
}

modelTypeRegistry.register('Patient', Patient, true);

/** True when the value is a Patient model instance. */
export function isPatient(candidate: unknown): candidate is Patient {
  return candidate instanceof Patient;
}

/**
 * A contact party (e.g. guardian, partner, friend) for the patient
 */
export class PatientContact extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'relationship',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'relationship', typeCode: 'CodeableConcept' }],
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
      elementName: 'organization',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'organization', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
  ];

  /** The kind of relationship (0..*) */
  relationship?: CodeableConcept[];

  /** A name associated with the contact person (0..1) */
  name?: HumanName;

  /** A contact detail for the person (0..*) */
  telecom?: ContactPoint[];

  /** Address for the contact person (0..1) */
  address?: Address;

  /** male | female | other | unknown (0..1) */
  gender?: valueSetCodes.AdministrativeGender;
  /** Id and extensions of the primitive `gender`. */
  _gender?: Element;

  /** Organization that is associated with the contact (0..1) */
  organization?: Reference;

  /** The period during which this contact person or organization is valid to be contacted relating to this patient (0..1) */
  period?: Period;

  override fhirType(): string {
    return 'Patient.contact';
  }

  /** FHIR JSON for this PatientContact, typed as the plain `PatientContact` data type. */
  override toJSON(): plainTypes.PatientContact {
    return this.serialize() as plainTypes.PatientContact;
  }

  /** The kind of relationship (0..*) Never undefined; an empty list is created when absent. */
  getRelationship(): CodeableConcept[] {
    if (this.relationship === undefined) {
      this.relationship = [];
    }
    return this.relationship;
  }

  setRelationship(relationship: CodeableConcept[] | undefined): this {
    return this.setFieldValue('relationship', relationship);
  }

  hasRelationship(): boolean {
    return this.hasFieldValue('relationship');
  }

  /** Appends a new, empty CodeableConcept to `relationship` and returns it so it can be filled in. */
  addRelationship(): CodeableConcept;
  /** Appends the given CodeableConcept to `relationship` and returns this object for chaining. */
  addRelationship(codeableConcept: CodeableConcept): this;
  addRelationship(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('relationship', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('relationship', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `relationship`. One is added when the list is empty. */
  getRelationshipFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getRelationship()[0];
    return firstCodeableConcept === undefined ? this.addRelationship() : firstCodeableConcept;
  }

  /** A name associated with the contact person (0..1) Created when absent. */
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

  /** Address for the contact person (0..1) Created when absent. */
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

  /** Organization that is associated with the contact (0..1) Created when absent. */
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

  /** The period during which this contact person or organization is valid to be contacted relating to this patient (0..1) Created when absent. */
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

modelTypeRegistry.register('PatientContact', PatientContact, false);

/**
 * This patient is known to be an animal (non-human)
 */
export class PatientAnimal extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'species',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'species', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'breed',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'breed', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'genderStatus',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'genderStatus', typeCode: 'CodeableConcept' }],
    },
  ];

  /** E.g. Dog, Cow (1..1) */
  species?: CodeableConcept;

  /** E.g. Poodle, Angus (0..1) */
  breed?: CodeableConcept;

  /** E.g. Neutered, Intact (0..1) */
  genderStatus?: CodeableConcept;

  override fhirType(): string {
    return 'Patient.animal';
  }

  /** FHIR JSON for this PatientAnimal, typed as the plain `PatientAnimal` data type. */
  override toJSON(): plainTypes.PatientAnimal {
    return this.serialize() as plainTypes.PatientAnimal;
  }

  /** E.g. Dog, Cow (1..1) Created when absent. */
  getSpecies(): CodeableConcept {
    if (this.species === undefined) {
      this.species = new CodeableConcept();
    }
    return this.species;
  }

  setSpecies(species: CodeableConcept | undefined): this {
    return this.setFieldValue('species', species);
  }

  hasSpecies(): boolean {
    return this.hasFieldValue('species');
  }

  /** E.g. Poodle, Angus (0..1) Created when absent. */
  getBreed(): CodeableConcept {
    if (this.breed === undefined) {
      this.breed = new CodeableConcept();
    }
    return this.breed;
  }

  setBreed(breed: CodeableConcept | undefined): this {
    return this.setFieldValue('breed', breed);
  }

  hasBreed(): boolean {
    return this.hasFieldValue('breed');
  }

  /** E.g. Neutered, Intact (0..1) Created when absent. */
  getGenderStatus(): CodeableConcept {
    if (this.genderStatus === undefined) {
      this.genderStatus = new CodeableConcept();
    }
    return this.genderStatus;
  }

  setGenderStatus(genderStatus: CodeableConcept | undefined): this {
    return this.setFieldValue('genderStatus', genderStatus);
  }

  hasGenderStatus(): boolean {
    return this.hasFieldValue('genderStatus');
  }
}

modelTypeRegistry.register('PatientAnimal', PatientAnimal, false);

/**
 * A list of Languages which may be used to communicate with the patient about his or her health
 */
export class PatientCommunication extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'language',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'language', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'preferred',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'preferred', typeCode: 'boolean' }],
    },
  ];

  /** The language which can be used to communicate with the patient about his or her health (1..1) */
  language?: CodeableConcept;

  /** Language preference indicator (0..1) */
  preferred?: boolean;
  /** Id and extensions of the primitive `preferred`. */
  _preferred?: Element;

  override fhirType(): string {
    return 'Patient.communication';
  }

  /** FHIR JSON for this PatientCommunication, typed as the plain `PatientCommunication` data type. */
  override toJSON(): plainTypes.PatientCommunication {
    return this.serialize() as plainTypes.PatientCommunication;
  }

  /** The language which can be used to communicate with the patient about his or her health (1..1) Created when absent. */
  getLanguage(): CodeableConcept {
    if (this.language === undefined) {
      this.language = new CodeableConcept();
    }
    return this.language;
  }

  setLanguage(language: CodeableConcept | undefined): this {
    return this.setFieldValue('language', language);
  }

  hasLanguage(): boolean {
    return this.hasFieldValue('language');
  }

  /** Language preference indicator (0..1) */
  getPreferred(): boolean | undefined {
    return this.preferred;
  }

  /** Sets `preferred`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setPreferred(preferred: boolean | undefined): this {
    return this.setFieldValue('preferred', preferred);
  }

  hasPreferred(): boolean {
    return this.hasFieldValue('preferred');
  }

  /** The element carrying the id and extensions of `preferred`. Created when absent. */
  getPreferredElement(): Element {
    if (this._preferred === undefined) {
      this._preferred = new Element();
    }
    return this._preferred;
  }

  setPreferredElement(preferredElement: Element | undefined): this {
    this._preferred = preferredElement;
    return this;
  }
}

modelTypeRegistry.register('PatientCommunication', PatientCommunication, false);

/**
 * Link to another patient resource that concerns the same actual person
 */
export class PatientLink extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'other',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'other',
          typeCode: 'Reference',
          targetResourceTypes: ['Patient', 'RelatedPerson'],
        },
      ],
    },
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.LinkType }],
    },
  ];

  /** The other patient or related person resource that the link refers to (1..1) */
  other?: Reference;

  /** replaced-by | replaces | refer | seealso - type of link (1..1) */
  type?: valueSetCodes.LinkType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  override fhirType(): string {
    return 'Patient.link';
  }

  /** FHIR JSON for this PatientLink, typed as the plain `PatientLink` data type. */
  override toJSON(): plainTypes.PatientLink {
    return this.serialize() as plainTypes.PatientLink;
  }

  /** The other patient or related person resource that the link refers to (1..1) Created when absent. */
  getOther(): Reference {
    if (this.other === undefined) {
      this.other = new Reference();
    }
    return this.other;
  }

  setOther(other: Reference | undefined): this {
    return this.setFieldValue('other', other);
  }

  hasOther(): boolean {
    return this.hasFieldValue('other');
  }

  /** replaced-by | replaces | refer | seealso - type of link (1..1) */
  getType(): valueSetCodes.LinkType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.LinkType | undefined): this {
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
}

modelTypeRegistry.register('PatientLink', PatientLink, false);
