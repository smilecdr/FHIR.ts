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
 * Base StructureDefinition for Practitioner Resource
 */
export class Practitioner extends DomainResource {
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
      elementName: 'address',
      minimum: 0,
      maximum: Infinity,
      isList: true,
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
      elementName: 'birthDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'birthDate', typeCode: 'date' }],
    },
    {
      elementName: 'photo',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'photo', typeCode: 'Attachment' }],
    },
    {
      elementName: 'qualification',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'qualification', typeCode: 'PractitionerQualification' }],
    },
    {
      elementName: 'communication',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'communication', typeCode: 'CodeableConcept' }],
    },
  ];

  readonly resourceType = 'Practitioner';

  /** A identifier for the person as this agent (0..*) */
  identifier?: Identifier[];

  /** Whether this practitioner's record is in active use (0..1) */
  active?: boolean;
  /** Id and extensions of the primitive `active`. */
  _active?: Element;

  /** The name(s) associated with the practitioner (0..*) */
  name?: HumanName[];

  /** A contact detail for the practitioner (that apply to all roles) (0..*) */
  telecom?: ContactPoint[];

  /** Address(es) of the practitioner that are not role specific (typically home address) (0..*) */
  address?: Address[];

  /** male | female | other | unknown (0..1) */
  gender?: valueSetCodes.AdministrativeGender;
  /** Id and extensions of the primitive `gender`. */
  _gender?: Element;

  /** The date on which the practitioner was born (0..1) */
  birthDate?: string;
  /** Id and extensions of the primitive `birthDate`. */
  _birthDate?: Element;

  /** Image of the person (0..*) */
  photo?: Attachment[];

  /** Qualifications obtained by training and certification (0..*) */
  qualification?: PractitionerQualification[];

  /** A language the practitioner is able to use in patient communication (0..*) */
  communication?: CodeableConcept[];

  override fhirType(): string {
    return 'Practitioner';
  }

  /** FHIR JSON for this Practitioner, typed as the plain `Practitioner` data type. */
  override toJSON(): plainTypes.Practitioner {
    return this.serialize() as plainTypes.Practitioner;
  }

  /** A identifier for the person as this agent (0..*) Never undefined; an empty list is created when absent. */
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

  /** Whether this practitioner's record is in active use (0..1) */
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

  /** The name(s) associated with the practitioner (0..*) Never undefined; an empty list is created when absent. */
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

  /** A contact detail for the practitioner (that apply to all roles) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Address(es) of the practitioner that are not role specific (typically home address) (0..*) Never undefined; an empty list is created when absent. */
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

  /** The date on which the practitioner was born (0..1) */
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

  /** Image of the person (0..*) Never undefined; an empty list is created when absent. */
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

  /** Qualifications obtained by training and certification (0..*) Never undefined; an empty list is created when absent. */
  getQualification(): PractitionerQualification[] {
    if (this.qualification === undefined) {
      this.qualification = [];
    }
    return this.qualification;
  }

  setQualification(qualification: PractitionerQualification[] | undefined): this {
    return this.setFieldValue('qualification', qualification);
  }

  hasQualification(): boolean {
    return this.hasFieldValue('qualification');
  }

  /** Appends a new, empty PractitionerQualification to `qualification` and returns it so it can be filled in. */
  addQualification(): PractitionerQualification;
  /** Appends the given PractitionerQualification to `qualification` and returns this object for chaining. */
  addQualification(practitionerQualification: PractitionerQualification): this;
  addQualification(
    practitionerQualification?: PractitionerQualification
  ): PractitionerQualification | this {
    if (practitionerQualification !== undefined) {
      return this.addFieldValue('qualification', practitionerQualification);
    }
    const createdPractitionerQualification = new PractitionerQualification();
    this.addFieldValue('qualification', createdPractitionerQualification);
    return createdPractitionerQualification;
  }

  /** The first PractitionerQualification of `qualification`. One is added when the list is empty. */
  getQualificationFirstRep(): PractitionerQualification {
    const firstPractitionerQualification = this.getQualification()[0];
    return firstPractitionerQualification === undefined
      ? this.addQualification()
      : firstPractitionerQualification;
  }

  /** A language the practitioner is able to use in patient communication (0..*) Never undefined; an empty list is created when absent. */
  getCommunication(): CodeableConcept[] {
    if (this.communication === undefined) {
      this.communication = [];
    }
    return this.communication;
  }

  setCommunication(communication: CodeableConcept[] | undefined): this {
    return this.setFieldValue('communication', communication);
  }

  hasCommunication(): boolean {
    return this.hasFieldValue('communication');
  }

  /** Appends a new, empty CodeableConcept to `communication` and returns it so it can be filled in. */
  addCommunication(): CodeableConcept;
  /** Appends the given CodeableConcept to `communication` and returns this object for chaining. */
  addCommunication(codeableConcept: CodeableConcept): this;
  addCommunication(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('communication', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('communication', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `communication`. One is added when the list is empty. */
  getCommunicationFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getCommunication()[0];
    return firstCodeableConcept === undefined ? this.addCommunication() : firstCodeableConcept;
  }
}

modelTypeRegistry.register('Practitioner', Practitioner, true);

/** True when the value is a Practitioner model instance. */
export function isPractitioner(candidate: unknown): candidate is Practitioner {
  return candidate instanceof Practitioner;
}

/**
 * Qualifications obtained by training and certification
 */
export class PractitionerQualification extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
    {
      elementName: 'issuer',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'issuer', typeCode: 'Reference', targetResourceTypes: ['Organization'] }],
    },
  ];

  /** An identifier for this qualification for the practitioner (0..*) */
  identifier?: Identifier[];

  /** Coded representation of the qualification (1..1) */
  code?: CodeableConcept;

  /** Period during which the qualification is valid (0..1) */
  period?: Period;

  /** Organization that regulates and issues the qualification (0..1) */
  issuer?: Reference;

  override fhirType(): string {
    return 'Practitioner.qualification';
  }

  /** FHIR JSON for this PractitionerQualification, typed as the plain `PractitionerQualification` data type. */
  override toJSON(): plainTypes.PractitionerQualification {
    return this.serialize() as plainTypes.PractitionerQualification;
  }

  /** An identifier for this qualification for the practitioner (0..*) Never undefined; an empty list is created when absent. */
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

  /** Coded representation of the qualification (1..1) Created when absent. */
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

  /** Period during which the qualification is valid (0..1) Created when absent. */
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

  /** Organization that regulates and issues the qualification (0..1) Created when absent. */
  getIssuer(): Reference {
    if (this.issuer === undefined) {
      this.issuer = new Reference();
    }
    return this.issuer;
  }

  setIssuer(issuer: Reference | undefined): this {
    return this.setFieldValue('issuer', issuer);
  }

  hasIssuer(): boolean {
    return this.hasFieldValue('issuer');
  }
}

modelTypeRegistry.register('PractitionerQualification', PractitionerQualification, false);
