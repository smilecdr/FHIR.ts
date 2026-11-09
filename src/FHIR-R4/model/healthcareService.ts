/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { Attachment } from './attachment';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { ContactPoint } from './contactPoint';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';

/**
 * The details of a healthcare service available at a location.
 */
export class HealthcareService extends DomainResource {
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
      elementName: 'providedBy',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'providedBy', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
    {
      elementName: 'category',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'specialty',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'specialty', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'location',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'location', typeCode: 'Reference', targetResourceTypes: ['Location'] }],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'comment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'comment', typeCode: 'string' }],
    },
    {
      elementName: 'extraDetails',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'extraDetails', typeCode: 'markdown' }],
    },
    {
      elementName: 'photo',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'photo', typeCode: 'Attachment' }],
    },
    {
      elementName: 'telecom',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'telecom', typeCode: 'ContactPoint' }],
    },
    {
      elementName: 'coverageArea',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'coverageArea', typeCode: 'Reference', targetResourceTypes: ['Location'] },
      ],
    },
    {
      elementName: 'serviceProvisionCode',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'serviceProvisionCode', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'eligibility',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'eligibility', typeCode: 'HealthcareServiceEligibility' }],
    },
    {
      elementName: 'program',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'program', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'characteristic',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'characteristic', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'communication',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'communication', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'referralMethod',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'referralMethod', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'appointmentRequired',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'appointmentRequired', typeCode: 'boolean' }],
    },
    {
      elementName: 'availableTime',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'availableTime', typeCode: 'HealthcareServiceAvailableTime' }],
    },
    {
      elementName: 'notAvailable',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'notAvailable', typeCode: 'HealthcareServiceNotAvailable' }],
    },
    {
      elementName: 'availabilityExceptions',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'availabilityExceptions', typeCode: 'string' }],
    },
    {
      elementName: 'endpoint',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'endpoint', typeCode: 'Reference', targetResourceTypes: ['Endpoint'] }],
    },
  ];

  readonly resourceType = 'HealthcareService';

  /** External identifiers for this item (0..*) */
  identifier?: Identifier[];

  /** Whether this HealthcareService record is in active use (0..1) */
  active?: boolean;
  /** Id and extensions of the primitive `active`. */
  _active?: Element;

  /** Organization that provides this service (0..1) */
  providedBy?: Reference;

  /** Broad category of service being performed or delivered (0..*) */
  category?: CodeableConcept[];

  /** Type of service that may be delivered or performed (0..*) */
  type?: CodeableConcept[];

  /** Specialties handled by the HealthcareService (0..*) */
  specialty?: CodeableConcept[];

  /** Location(s) where service may be provided (0..*) */
  location?: Reference[];

  /** Description of service as presented to a consumer while searching (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Additional description and/or any specific issues not covered elsewhere (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;

  /** Extra details about the service that can't be placed in the other fields (0..1) */
  extraDetails?: string;
  /** Id and extensions of the primitive `extraDetails`. */
  _extraDetails?: Element;

  /** Facilitates quick identification of the service (0..1) */
  photo?: Attachment;

  /** Contacts related to the healthcare service (0..*) */
  telecom?: ContactPoint[];

  /** Location(s) service is intended for/available to (0..*) */
  coverageArea?: Reference[];

  /** Conditions under which service is available/offered (0..*) */
  serviceProvisionCode?: CodeableConcept[];

  /** Specific eligibility requirements required to use the service (0..*) */
  eligibility?: HealthcareServiceEligibility[];

  /** Programs that this service is applicable to (0..*) */
  program?: CodeableConcept[];

  /** Collection of characteristics (attributes) (0..*) */
  characteristic?: CodeableConcept[];

  /** The language that this service is offered in (0..*) */
  communication?: CodeableConcept[];

  /** Ways that the service accepts referrals (0..*) */
  referralMethod?: CodeableConcept[];

  /** If an appointment is required for access to this service (0..1) */
  appointmentRequired?: boolean;
  /** Id and extensions of the primitive `appointmentRequired`. */
  _appointmentRequired?: Element;

  /** Times the Service Site is available (0..*) */
  availableTime?: HealthcareServiceAvailableTime[];

  /** Not available during this time due to provided reason (0..*) */
  notAvailable?: HealthcareServiceNotAvailable[];

  /** Description of availability exceptions (0..1) */
  availabilityExceptions?: string;
  /** Id and extensions of the primitive `availabilityExceptions`. */
  _availabilityExceptions?: Element;

  /** Technical endpoints providing access to electronic services operated for the healthcare service (0..*) */
  endpoint?: Reference[];

  override fhirType(): string {
    return 'HealthcareService';
  }

  /** FHIR JSON for this HealthcareService, typed as the plain `HealthcareService` data type. */
  override toJSON(): plainTypes.HealthcareService {
    return this.serialize() as plainTypes.HealthcareService;
  }

  /** External identifiers for this item (0..*) Never undefined; an empty list is created when absent. */
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

  /** Whether this HealthcareService record is in active use (0..1) */
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

  /** Organization that provides this service (0..1) Created when absent. */
  getProvidedBy(): Reference {
    if (this.providedBy === undefined) {
      this.providedBy = new Reference();
    }
    return this.providedBy;
  }

  setProvidedBy(providedBy: Reference | undefined): this {
    return this.setFieldValue('providedBy', providedBy);
  }

  hasProvidedBy(): boolean {
    return this.hasFieldValue('providedBy');
  }

  /** Broad category of service being performed or delivered (0..*) Never undefined; an empty list is created when absent. */
  getCategory(): CodeableConcept[] {
    if (this.category === undefined) {
      this.category = [];
    }
    return this.category;
  }

  setCategory(category: CodeableConcept[] | undefined): this {
    return this.setFieldValue('category', category);
  }

  hasCategory(): boolean {
    return this.hasFieldValue('category');
  }

  /** Appends a new, empty CodeableConcept to `category` and returns it so it can be filled in. */
  addCategory(): CodeableConcept;
  /** Appends the given CodeableConcept to `category` and returns this object for chaining. */
  addCategory(codeableConcept: CodeableConcept): this;
  addCategory(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('category', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('category', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `category`. One is added when the list is empty. */
  getCategoryFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getCategory()[0];
    return firstCodeableConcept === undefined ? this.addCategory() : firstCodeableConcept;
  }

  /** Type of service that may be delivered or performed (0..*) Never undefined; an empty list is created when absent. */
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

  /** Specialties handled by the HealthcareService (0..*) Never undefined; an empty list is created when absent. */
  getSpecialty(): CodeableConcept[] {
    if (this.specialty === undefined) {
      this.specialty = [];
    }
    return this.specialty;
  }

  setSpecialty(specialty: CodeableConcept[] | undefined): this {
    return this.setFieldValue('specialty', specialty);
  }

  hasSpecialty(): boolean {
    return this.hasFieldValue('specialty');
  }

  /** Appends a new, empty CodeableConcept to `specialty` and returns it so it can be filled in. */
  addSpecialty(): CodeableConcept;
  /** Appends the given CodeableConcept to `specialty` and returns this object for chaining. */
  addSpecialty(codeableConcept: CodeableConcept): this;
  addSpecialty(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('specialty', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('specialty', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `specialty`. One is added when the list is empty. */
  getSpecialtyFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getSpecialty()[0];
    return firstCodeableConcept === undefined ? this.addSpecialty() : firstCodeableConcept;
  }

  /** Location(s) where service may be provided (0..*) Never undefined; an empty list is created when absent. */
  getLocation(): Reference[] {
    if (this.location === undefined) {
      this.location = [];
    }
    return this.location;
  }

  setLocation(location: Reference[] | undefined): this {
    return this.setFieldValue('location', location);
  }

  hasLocation(): boolean {
    return this.hasFieldValue('location');
  }

  /** Appends a new, empty Reference to `location` and returns it so it can be filled in. */
  addLocation(): Reference;
  /** Appends the given Reference to `location` and returns this object for chaining. */
  addLocation(reference: Reference): this;
  addLocation(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('location', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('location', createdReference);
    return createdReference;
  }

  /** The first Reference of `location`. One is added when the list is empty. */
  getLocationFirstRep(): Reference {
    const firstReference = this.getLocation()[0];
    return firstReference === undefined ? this.addLocation() : firstReference;
  }

  /** Description of service as presented to a consumer while searching (0..1) */
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

  /** Additional description and/or any specific issues not covered elsewhere (0..1) */
  getComment(): string | undefined {
    return this.comment;
  }

  /** Sets `comment`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setComment(comment: string | undefined): this {
    return this.setFieldValue('comment', comment);
  }

  hasComment(): boolean {
    return this.hasFieldValue('comment');
  }

  /** The element carrying the id and extensions of `comment`. Created when absent. */
  getCommentElement(): Element {
    if (this._comment === undefined) {
      this._comment = new Element();
    }
    return this._comment;
  }

  setCommentElement(commentElement: Element | undefined): this {
    this._comment = commentElement;
    return this;
  }

  /** Extra details about the service that can't be placed in the other fields (0..1) */
  getExtraDetails(): string | undefined {
    return this.extraDetails;
  }

  /** Sets `extraDetails`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setExtraDetails(extraDetails: string | undefined): this {
    return this.setFieldValue('extraDetails', extraDetails);
  }

  hasExtraDetails(): boolean {
    return this.hasFieldValue('extraDetails');
  }

  /** The element carrying the id and extensions of `extraDetails`. Created when absent. */
  getExtraDetailsElement(): Element {
    if (this._extraDetails === undefined) {
      this._extraDetails = new Element();
    }
    return this._extraDetails;
  }

  setExtraDetailsElement(extraDetailsElement: Element | undefined): this {
    this._extraDetails = extraDetailsElement;
    return this;
  }

  /** Facilitates quick identification of the service (0..1) Created when absent. */
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

  /** Contacts related to the healthcare service (0..*) Never undefined; an empty list is created when absent. */
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

  /** Location(s) service is intended for/available to (0..*) Never undefined; an empty list is created when absent. */
  getCoverageArea(): Reference[] {
    if (this.coverageArea === undefined) {
      this.coverageArea = [];
    }
    return this.coverageArea;
  }

  setCoverageArea(coverageArea: Reference[] | undefined): this {
    return this.setFieldValue('coverageArea', coverageArea);
  }

  hasCoverageArea(): boolean {
    return this.hasFieldValue('coverageArea');
  }

  /** Appends a new, empty Reference to `coverageArea` and returns it so it can be filled in. */
  addCoverageArea(): Reference;
  /** Appends the given Reference to `coverageArea` and returns this object for chaining. */
  addCoverageArea(reference: Reference): this;
  addCoverageArea(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('coverageArea', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('coverageArea', createdReference);
    return createdReference;
  }

  /** The first Reference of `coverageArea`. One is added when the list is empty. */
  getCoverageAreaFirstRep(): Reference {
    const firstReference = this.getCoverageArea()[0];
    return firstReference === undefined ? this.addCoverageArea() : firstReference;
  }

  /** Conditions under which service is available/offered (0..*) Never undefined; an empty list is created when absent. */
  getServiceProvisionCode(): CodeableConcept[] {
    if (this.serviceProvisionCode === undefined) {
      this.serviceProvisionCode = [];
    }
    return this.serviceProvisionCode;
  }

  setServiceProvisionCode(serviceProvisionCode: CodeableConcept[] | undefined): this {
    return this.setFieldValue('serviceProvisionCode', serviceProvisionCode);
  }

  hasServiceProvisionCode(): boolean {
    return this.hasFieldValue('serviceProvisionCode');
  }

  /** Appends a new, empty CodeableConcept to `serviceProvisionCode` and returns it so it can be filled in. */
  addServiceProvisionCode(): CodeableConcept;
  /** Appends the given CodeableConcept to `serviceProvisionCode` and returns this object for chaining. */
  addServiceProvisionCode(codeableConcept: CodeableConcept): this;
  addServiceProvisionCode(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('serviceProvisionCode', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('serviceProvisionCode', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `serviceProvisionCode`. One is added when the list is empty. */
  getServiceProvisionCodeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getServiceProvisionCode()[0];
    return firstCodeableConcept === undefined
      ? this.addServiceProvisionCode()
      : firstCodeableConcept;
  }

  /** Specific eligibility requirements required to use the service (0..*) Never undefined; an empty list is created when absent. */
  getEligibility(): HealthcareServiceEligibility[] {
    if (this.eligibility === undefined) {
      this.eligibility = [];
    }
    return this.eligibility;
  }

  setEligibility(eligibility: HealthcareServiceEligibility[] | undefined): this {
    return this.setFieldValue('eligibility', eligibility);
  }

  hasEligibility(): boolean {
    return this.hasFieldValue('eligibility');
  }

  /** Appends a new, empty HealthcareServiceEligibility to `eligibility` and returns it so it can be filled in. */
  addEligibility(): HealthcareServiceEligibility;
  /** Appends the given HealthcareServiceEligibility to `eligibility` and returns this object for chaining. */
  addEligibility(healthcareServiceEligibility: HealthcareServiceEligibility): this;
  addEligibility(
    healthcareServiceEligibility?: HealthcareServiceEligibility
  ): HealthcareServiceEligibility | this {
    if (healthcareServiceEligibility !== undefined) {
      return this.addFieldValue('eligibility', healthcareServiceEligibility);
    }
    const createdHealthcareServiceEligibility = new HealthcareServiceEligibility();
    this.addFieldValue('eligibility', createdHealthcareServiceEligibility);
    return createdHealthcareServiceEligibility;
  }

  /** The first HealthcareServiceEligibility of `eligibility`. One is added when the list is empty. */
  getEligibilityFirstRep(): HealthcareServiceEligibility {
    const firstHealthcareServiceEligibility = this.getEligibility()[0];
    return firstHealthcareServiceEligibility === undefined
      ? this.addEligibility()
      : firstHealthcareServiceEligibility;
  }

  /** Programs that this service is applicable to (0..*) Never undefined; an empty list is created when absent. */
  getProgram(): CodeableConcept[] {
    if (this.program === undefined) {
      this.program = [];
    }
    return this.program;
  }

  setProgram(program: CodeableConcept[] | undefined): this {
    return this.setFieldValue('program', program);
  }

  hasProgram(): boolean {
    return this.hasFieldValue('program');
  }

  /** Appends a new, empty CodeableConcept to `program` and returns it so it can be filled in. */
  addProgram(): CodeableConcept;
  /** Appends the given CodeableConcept to `program` and returns this object for chaining. */
  addProgram(codeableConcept: CodeableConcept): this;
  addProgram(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('program', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('program', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `program`. One is added when the list is empty. */
  getProgramFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getProgram()[0];
    return firstCodeableConcept === undefined ? this.addProgram() : firstCodeableConcept;
  }

  /** Collection of characteristics (attributes) (0..*) Never undefined; an empty list is created when absent. */
  getCharacteristic(): CodeableConcept[] {
    if (this.characteristic === undefined) {
      this.characteristic = [];
    }
    return this.characteristic;
  }

  setCharacteristic(characteristic: CodeableConcept[] | undefined): this {
    return this.setFieldValue('characteristic', characteristic);
  }

  hasCharacteristic(): boolean {
    return this.hasFieldValue('characteristic');
  }

  /** Appends a new, empty CodeableConcept to `characteristic` and returns it so it can be filled in. */
  addCharacteristic(): CodeableConcept;
  /** Appends the given CodeableConcept to `characteristic` and returns this object for chaining. */
  addCharacteristic(codeableConcept: CodeableConcept): this;
  addCharacteristic(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('characteristic', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('characteristic', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `characteristic`. One is added when the list is empty. */
  getCharacteristicFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getCharacteristic()[0];
    return firstCodeableConcept === undefined ? this.addCharacteristic() : firstCodeableConcept;
  }

  /** The language that this service is offered in (0..*) Never undefined; an empty list is created when absent. */
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

  /** Ways that the service accepts referrals (0..*) Never undefined; an empty list is created when absent. */
  getReferralMethod(): CodeableConcept[] {
    if (this.referralMethod === undefined) {
      this.referralMethod = [];
    }
    return this.referralMethod;
  }

  setReferralMethod(referralMethod: CodeableConcept[] | undefined): this {
    return this.setFieldValue('referralMethod', referralMethod);
  }

  hasReferralMethod(): boolean {
    return this.hasFieldValue('referralMethod');
  }

  /** Appends a new, empty CodeableConcept to `referralMethod` and returns it so it can be filled in. */
  addReferralMethod(): CodeableConcept;
  /** Appends the given CodeableConcept to `referralMethod` and returns this object for chaining. */
  addReferralMethod(codeableConcept: CodeableConcept): this;
  addReferralMethod(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('referralMethod', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('referralMethod', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `referralMethod`. One is added when the list is empty. */
  getReferralMethodFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getReferralMethod()[0];
    return firstCodeableConcept === undefined ? this.addReferralMethod() : firstCodeableConcept;
  }

  /** If an appointment is required for access to this service (0..1) */
  getAppointmentRequired(): boolean | undefined {
    return this.appointmentRequired;
  }

  /** Sets `appointmentRequired`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setAppointmentRequired(appointmentRequired: boolean | undefined): this {
    return this.setFieldValue('appointmentRequired', appointmentRequired);
  }

  hasAppointmentRequired(): boolean {
    return this.hasFieldValue('appointmentRequired');
  }

  /** The element carrying the id and extensions of `appointmentRequired`. Created when absent. */
  getAppointmentRequiredElement(): Element {
    if (this._appointmentRequired === undefined) {
      this._appointmentRequired = new Element();
    }
    return this._appointmentRequired;
  }

  setAppointmentRequiredElement(appointmentRequiredElement: Element | undefined): this {
    this._appointmentRequired = appointmentRequiredElement;
    return this;
  }

  /** Times the Service Site is available (0..*) Never undefined; an empty list is created when absent. */
  getAvailableTime(): HealthcareServiceAvailableTime[] {
    if (this.availableTime === undefined) {
      this.availableTime = [];
    }
    return this.availableTime;
  }

  setAvailableTime(availableTime: HealthcareServiceAvailableTime[] | undefined): this {
    return this.setFieldValue('availableTime', availableTime);
  }

  hasAvailableTime(): boolean {
    return this.hasFieldValue('availableTime');
  }

  /** Appends a new, empty HealthcareServiceAvailableTime to `availableTime` and returns it so it can be filled in. */
  addAvailableTime(): HealthcareServiceAvailableTime;
  /** Appends the given HealthcareServiceAvailableTime to `availableTime` and returns this object for chaining. */
  addAvailableTime(healthcareServiceAvailableTime: HealthcareServiceAvailableTime): this;
  addAvailableTime(
    healthcareServiceAvailableTime?: HealthcareServiceAvailableTime
  ): HealthcareServiceAvailableTime | this {
    if (healthcareServiceAvailableTime !== undefined) {
      return this.addFieldValue('availableTime', healthcareServiceAvailableTime);
    }
    const createdHealthcareServiceAvailableTime = new HealthcareServiceAvailableTime();
    this.addFieldValue('availableTime', createdHealthcareServiceAvailableTime);
    return createdHealthcareServiceAvailableTime;
  }

  /** The first HealthcareServiceAvailableTime of `availableTime`. One is added when the list is empty. */
  getAvailableTimeFirstRep(): HealthcareServiceAvailableTime {
    const firstHealthcareServiceAvailableTime = this.getAvailableTime()[0];
    return firstHealthcareServiceAvailableTime === undefined
      ? this.addAvailableTime()
      : firstHealthcareServiceAvailableTime;
  }

  /** Not available during this time due to provided reason (0..*) Never undefined; an empty list is created when absent. */
  getNotAvailable(): HealthcareServiceNotAvailable[] {
    if (this.notAvailable === undefined) {
      this.notAvailable = [];
    }
    return this.notAvailable;
  }

  setNotAvailable(notAvailable: HealthcareServiceNotAvailable[] | undefined): this {
    return this.setFieldValue('notAvailable', notAvailable);
  }

  hasNotAvailable(): boolean {
    return this.hasFieldValue('notAvailable');
  }

  /** Appends a new, empty HealthcareServiceNotAvailable to `notAvailable` and returns it so it can be filled in. */
  addNotAvailable(): HealthcareServiceNotAvailable;
  /** Appends the given HealthcareServiceNotAvailable to `notAvailable` and returns this object for chaining. */
  addNotAvailable(healthcareServiceNotAvailable: HealthcareServiceNotAvailable): this;
  addNotAvailable(
    healthcareServiceNotAvailable?: HealthcareServiceNotAvailable
  ): HealthcareServiceNotAvailable | this {
    if (healthcareServiceNotAvailable !== undefined) {
      return this.addFieldValue('notAvailable', healthcareServiceNotAvailable);
    }
    const createdHealthcareServiceNotAvailable = new HealthcareServiceNotAvailable();
    this.addFieldValue('notAvailable', createdHealthcareServiceNotAvailable);
    return createdHealthcareServiceNotAvailable;
  }

  /** The first HealthcareServiceNotAvailable of `notAvailable`. One is added when the list is empty. */
  getNotAvailableFirstRep(): HealthcareServiceNotAvailable {
    const firstHealthcareServiceNotAvailable = this.getNotAvailable()[0];
    return firstHealthcareServiceNotAvailable === undefined
      ? this.addNotAvailable()
      : firstHealthcareServiceNotAvailable;
  }

  /** Description of availability exceptions (0..1) */
  getAvailabilityExceptions(): string | undefined {
    return this.availabilityExceptions;
  }

  /** Sets `availabilityExceptions`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setAvailabilityExceptions(availabilityExceptions: string | undefined): this {
    return this.setFieldValue('availabilityExceptions', availabilityExceptions);
  }

  hasAvailabilityExceptions(): boolean {
    return this.hasFieldValue('availabilityExceptions');
  }

  /** The element carrying the id and extensions of `availabilityExceptions`. Created when absent. */
  getAvailabilityExceptionsElement(): Element {
    if (this._availabilityExceptions === undefined) {
      this._availabilityExceptions = new Element();
    }
    return this._availabilityExceptions;
  }

  setAvailabilityExceptionsElement(availabilityExceptionsElement: Element | undefined): this {
    this._availabilityExceptions = availabilityExceptionsElement;
    return this;
  }

  /** Technical endpoints providing access to electronic services operated for the healthcare service (0..*) Never undefined; an empty list is created when absent. */
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

modelTypeRegistry.register('HealthcareService', HealthcareService, true);

/** True when the value is a HealthcareService model instance. */
export function isHealthcareService(candidate: unknown): candidate is HealthcareService {
  return candidate instanceof HealthcareService;
}

/**
 * Specific eligibility requirements required to use the service
 */
export class HealthcareServiceEligibility extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'comment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'comment', typeCode: 'markdown' }],
    },
  ];

  /** Coded value for the eligibility (0..1) */
  code?: CodeableConcept;

  /** Describes the eligibility conditions for the service (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;

  override fhirType(): string {
    return 'HealthcareService.eligibility';
  }

  /** FHIR JSON for this HealthcareServiceEligibility, typed as the plain `HealthcareServiceEligibility` data type. */
  override toJSON(): plainTypes.HealthcareServiceEligibility {
    return this.serialize() as plainTypes.HealthcareServiceEligibility;
  }

  /** Coded value for the eligibility (0..1) Created when absent. */
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

  /** Describes the eligibility conditions for the service (0..1) */
  getComment(): string | undefined {
    return this.comment;
  }

  /** Sets `comment`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setComment(comment: string | undefined): this {
    return this.setFieldValue('comment', comment);
  }

  hasComment(): boolean {
    return this.hasFieldValue('comment');
  }

  /** The element carrying the id and extensions of `comment`. Created when absent. */
  getCommentElement(): Element {
    if (this._comment === undefined) {
      this._comment = new Element();
    }
    return this._comment;
  }

  setCommentElement(commentElement: Element | undefined): this {
    this._comment = commentElement;
    return this;
  }
}

modelTypeRegistry.register('HealthcareServiceEligibility', HealthcareServiceEligibility, false);

/**
 * Times the Service Site is available
 */
export class HealthcareServiceAvailableTime extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'daysOfWeek',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'daysOfWeek', typeCode: 'code', allowedCodes: valueSetCodes.DaysOfWeek }],
    },
    {
      elementName: 'allDay',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'allDay', typeCode: 'boolean' }],
    },
    {
      elementName: 'availableStartTime',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'availableStartTime', typeCode: 'time' }],
    },
    {
      elementName: 'availableEndTime',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'availableEndTime', typeCode: 'time' }],
    },
  ];

  /** mon | tue | wed | thu | fri | sat | sun (0..*) */
  daysOfWeek?: valueSetCodes.DaysOfWeek[];
  /** Id and extensions of the primitive `daysOfWeek`. */
  _daysOfWeek?: (Element | null)[];

  /** Always available? e.g. 24 hour service (0..1) */
  allDay?: boolean;
  /** Id and extensions of the primitive `allDay`. */
  _allDay?: Element;

  /** Opening time of day (ignored if allDay = true) (0..1) */
  availableStartTime?: string;
  /** Id and extensions of the primitive `availableStartTime`. */
  _availableStartTime?: Element;

  /** Closing time of day (ignored if allDay = true) (0..1) */
  availableEndTime?: string;
  /** Id and extensions of the primitive `availableEndTime`. */
  _availableEndTime?: Element;

  override fhirType(): string {
    return 'HealthcareService.availableTime';
  }

  /** FHIR JSON for this HealthcareServiceAvailableTime, typed as the plain `HealthcareServiceAvailableTime` data type. */
  override toJSON(): plainTypes.HealthcareServiceAvailableTime {
    return this.serialize() as plainTypes.HealthcareServiceAvailableTime;
  }

  /** mon | tue | wed | thu | fri | sat | sun (0..*) Never undefined; an empty list is created when absent. */
  getDaysOfWeek(): valueSetCodes.DaysOfWeek[] {
    if (this.daysOfWeek === undefined) {
      this.daysOfWeek = [];
    }
    return this.daysOfWeek;
  }

  setDaysOfWeek(daysOfWeek: valueSetCodes.DaysOfWeek[] | undefined): this {
    return this.setFieldValue('daysOfWeek', daysOfWeek);
  }

  hasDaysOfWeek(): boolean {
    return this.hasFieldValue('daysOfWeek');
  }

  /** Appends one value to `daysOfWeek`. Throws a FhirModelError when it is not a valid FHIR code. */
  addDaysOfWeek(daysOfWeek: valueSetCodes.DaysOfWeek): this {
    return this.addFieldValue('daysOfWeek', daysOfWeek);
  }

  /** Always available? e.g. 24 hour service (0..1) */
  getAllDay(): boolean | undefined {
    return this.allDay;
  }

  /** Sets `allDay`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setAllDay(allDay: boolean | undefined): this {
    return this.setFieldValue('allDay', allDay);
  }

  hasAllDay(): boolean {
    return this.hasFieldValue('allDay');
  }

  /** The element carrying the id and extensions of `allDay`. Created when absent. */
  getAllDayElement(): Element {
    if (this._allDay === undefined) {
      this._allDay = new Element();
    }
    return this._allDay;
  }

  setAllDayElement(allDayElement: Element | undefined): this {
    this._allDay = allDayElement;
    return this;
  }

  /** Opening time of day (ignored if allDay = true) (0..1) */
  getAvailableStartTime(): string | undefined {
    return this.availableStartTime;
  }

  /** Sets `availableStartTime`. Throws a FhirModelError when the value is not a valid FHIR time. */
  setAvailableStartTime(availableStartTime: string | undefined): this {
    return this.setFieldValue('availableStartTime', availableStartTime);
  }

  hasAvailableStartTime(): boolean {
    return this.hasFieldValue('availableStartTime');
  }

  /** The element carrying the id and extensions of `availableStartTime`. Created when absent. */
  getAvailableStartTimeElement(): Element {
    if (this._availableStartTime === undefined) {
      this._availableStartTime = new Element();
    }
    return this._availableStartTime;
  }

  setAvailableStartTimeElement(availableStartTimeElement: Element | undefined): this {
    this._availableStartTime = availableStartTimeElement;
    return this;
  }

  /** Closing time of day (ignored if allDay = true) (0..1) */
  getAvailableEndTime(): string | undefined {
    return this.availableEndTime;
  }

  /** Sets `availableEndTime`. Throws a FhirModelError when the value is not a valid FHIR time. */
  setAvailableEndTime(availableEndTime: string | undefined): this {
    return this.setFieldValue('availableEndTime', availableEndTime);
  }

  hasAvailableEndTime(): boolean {
    return this.hasFieldValue('availableEndTime');
  }

  /** The element carrying the id and extensions of `availableEndTime`. Created when absent. */
  getAvailableEndTimeElement(): Element {
    if (this._availableEndTime === undefined) {
      this._availableEndTime = new Element();
    }
    return this._availableEndTime;
  }

  setAvailableEndTimeElement(availableEndTimeElement: Element | undefined): this {
    this._availableEndTime = availableEndTimeElement;
    return this;
  }
}

modelTypeRegistry.register('HealthcareServiceAvailableTime', HealthcareServiceAvailableTime, false);

/**
 * Not available during this time due to provided reason
 */
export class HealthcareServiceNotAvailable extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'description',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'during',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'during', typeCode: 'Period' }],
    },
  ];

  /** Reason presented to the user explaining why time not available (1..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Service not available from this date (0..1) */
  during?: Period;

  override fhirType(): string {
    return 'HealthcareService.notAvailable';
  }

  /** FHIR JSON for this HealthcareServiceNotAvailable, typed as the plain `HealthcareServiceNotAvailable` data type. */
  override toJSON(): plainTypes.HealthcareServiceNotAvailable {
    return this.serialize() as plainTypes.HealthcareServiceNotAvailable;
  }

  /** Reason presented to the user explaining why time not available (1..1) */
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

  /** Service not available from this date (0..1) Created when absent. */
  getDuring(): Period {
    if (this.during === undefined) {
      this.during = new Period();
    }
    return this.during;
  }

  setDuring(during: Period | undefined): this {
    return this.setFieldValue('during', during);
  }

  hasDuring(): boolean {
    return this.hasFieldValue('during');
  }
}

modelTypeRegistry.register('HealthcareServiceNotAvailable', HealthcareServiceNotAvailable, false);
