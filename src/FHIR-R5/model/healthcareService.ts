/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../models';
import { Attachment } from './attachment';
import { Availability } from './availability';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { ExtendedContactDetail } from './extendedContactDetail';
import { Identifier } from './identifier';
import { Reference } from './reference';

/**
 * The details of a healthcare service available at a location or in a catalog. In the case where there is a hierarchy of services (for example, Lab -> Pathology -> Wound Cultures), this can be represented using a set of linked HealthcareServices.
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
      elementName: 'offeredIn',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'offeredIn', typeCode: 'Reference', targetResourceTypes: ['HealthcareService'] },
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
      types: [{ jsonKey: 'comment', typeCode: 'markdown' }],
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
      elementName: 'contact',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'contact', typeCode: 'ExtendedContactDetail' }],
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
      elementName: 'availability',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'availability', typeCode: 'Availability' }],
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

  /** The service within which this service is offered (0..*) */
  offeredIn?: Reference[];

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

  /** Official contact details for the HealthcareService (0..*) */
  contact?: ExtendedContactDetail[];

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

  /** Times the healthcare service is available (including exceptions) (0..*) */
  availability?: Availability[];

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

  /** The service within which this service is offered (0..*) Never undefined; an empty list is created when absent. */
  getOfferedIn(): Reference[] {
    if (this.offeredIn === undefined) {
      this.offeredIn = [];
    }
    return this.offeredIn;
  }

  setOfferedIn(offeredIn: Reference[] | undefined): this {
    return this.setFieldValue('offeredIn', offeredIn);
  }

  hasOfferedIn(): boolean {
    return this.hasFieldValue('offeredIn');
  }

  /** Appends a new, empty Reference to `offeredIn` and returns it so it can be filled in. */
  addOfferedIn(): Reference;
  /** Appends the given Reference to `offeredIn` and returns this object for chaining. */
  addOfferedIn(reference: Reference): this;
  addOfferedIn(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('offeredIn', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('offeredIn', createdReference);
    return createdReference;
  }

  /** The first Reference of `offeredIn`. One is added when the list is empty. */
  getOfferedInFirstRep(): Reference {
    const firstReference = this.getOfferedIn()[0];
    return firstReference === undefined ? this.addOfferedIn() : firstReference;
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

  /** Official contact details for the HealthcareService (0..*) Never undefined; an empty list is created when absent. */
  getContact(): ExtendedContactDetail[] {
    if (this.contact === undefined) {
      this.contact = [];
    }
    return this.contact;
  }

  setContact(contact: ExtendedContactDetail[] | undefined): this {
    return this.setFieldValue('contact', contact);
  }

  hasContact(): boolean {
    return this.hasFieldValue('contact');
  }

  /** Appends a new, empty ExtendedContactDetail to `contact` and returns it so it can be filled in. */
  addContact(): ExtendedContactDetail;
  /** Appends the given ExtendedContactDetail to `contact` and returns this object for chaining. */
  addContact(extendedContactDetail: ExtendedContactDetail): this;
  addContact(extendedContactDetail?: ExtendedContactDetail): ExtendedContactDetail | this {
    if (extendedContactDetail !== undefined) {
      return this.addFieldValue('contact', extendedContactDetail);
    }
    const createdExtendedContactDetail = new ExtendedContactDetail();
    this.addFieldValue('contact', createdExtendedContactDetail);
    return createdExtendedContactDetail;
  }

  /** The first ExtendedContactDetail of `contact`. One is added when the list is empty. */
  getContactFirstRep(): ExtendedContactDetail {
    const firstExtendedContactDetail = this.getContact()[0];
    return firstExtendedContactDetail === undefined
      ? this.addContact()
      : firstExtendedContactDetail;
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

  /** Times the healthcare service is available (including exceptions) (0..*) Never undefined; an empty list is created when absent. */
  getAvailability(): Availability[] {
    if (this.availability === undefined) {
      this.availability = [];
    }
    return this.availability;
  }

  setAvailability(availability: Availability[] | undefined): this {
    return this.setFieldValue('availability', availability);
  }

  hasAvailability(): boolean {
    return this.hasFieldValue('availability');
  }

  /** Appends a new, empty Availability to `availability` and returns it so it can be filled in. */
  addAvailability(): Availability;
  /** Appends the given Availability to `availability` and returns this object for chaining. */
  addAvailability(availability: Availability): this;
  addAvailability(availability?: Availability): Availability | this {
    if (availability !== undefined) {
      return this.addFieldValue('availability', availability);
    }
    const createdAvailability = new Availability();
    this.addFieldValue('availability', createdAvailability);
    return createdAvailability;
  }

  /** The first Availability of `availability`. One is added when the list is empty. */
  getAvailabilityFirstRep(): Availability {
    const firstAvailability = this.getAvailability()[0];
    return firstAvailability === undefined ? this.addAvailability() : firstAvailability;
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
