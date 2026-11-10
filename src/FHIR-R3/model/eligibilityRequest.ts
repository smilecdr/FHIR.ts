/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';

/**
 * Base StructureDefinition for EligibilityRequest Resource
 */
export class EligibilityRequest extends DomainResource {
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
      elementName: 'priority',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'priority', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'patient',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'patient', typeCode: 'Reference', targetResourceTypes: ['Patient'] }],
    },
    {
      elementName: 'serviced',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'servicedDate', typeCode: 'date' },
        { jsonKey: 'servicedPeriod', typeCode: 'Period' },
      ],
    },
    {
      elementName: 'created',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'created', typeCode: 'dateTime' }],
    },
    {
      elementName: 'enterer',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'enterer', typeCode: 'Reference', targetResourceTypes: ['Practitioner'] }],
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
      elementName: 'insurer',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'insurer', typeCode: 'Reference', targetResourceTypes: ['Organization'] }],
    },
    {
      elementName: 'facility',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'facility', typeCode: 'Reference', targetResourceTypes: ['Location'] }],
    },
    {
      elementName: 'coverage',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'coverage', typeCode: 'Reference', targetResourceTypes: ['Coverage'] }],
    },
    {
      elementName: 'businessArrangement',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'businessArrangement', typeCode: 'string' }],
    },
    {
      elementName: 'benefitCategory',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'benefitCategory', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'benefitSubCategory',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'benefitSubCategory', typeCode: 'CodeableConcept' }],
    },
  ];

  readonly resourceType = 'EligibilityRequest';

  /** Business Identifier (0..*) */
  identifier?: Identifier[];

  /** active | cancelled | draft | entered-in-error (0..1) */
  status?: valueSetCodes.FinancialResourceStatusCodes;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Desired processing priority (0..1) */
  priority?: CodeableConcept;

  /** The subject of the Products and Services (0..1) */
  patient?: Reference;

  /** Estimated date or dates of Service (0..1) */
  servicedDate?: string;
  /** Id and extensions of the primitive `servicedDate`. */
  _servicedDate?: Element;
  /** Estimated date or dates of Service (0..1) */
  servicedPeriod?: Period;

  /** Creation date (0..1) */
  created?: string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;

  /** Author (0..1) */
  enterer?: Reference;

  /** Responsible practitioner (0..1) */
  provider?: Reference;

  /** Responsible organization (0..1) */
  organization?: Reference;

  /** Target (0..1) */
  insurer?: Reference;

  /** Servicing Facility (0..1) */
  facility?: Reference;

  /** Insurance or medical plan (0..1) */
  coverage?: Reference;

  /** Business agreement (0..1) */
  businessArrangement?: string;
  /** Id and extensions of the primitive `businessArrangement`. */
  _businessArrangement?: Element;

  /** Type of services covered (0..1) */
  benefitCategory?: CodeableConcept;

  /** Detailed services covered within the type (0..1) */
  benefitSubCategory?: CodeableConcept;

  override fhirType(): string {
    return 'EligibilityRequest';
  }

  /** FHIR JSON for this EligibilityRequest, typed as the plain `EligibilityRequest` data type. */
  override toJSON(): plainTypes.EligibilityRequest {
    return this.serialize() as plainTypes.EligibilityRequest;
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

  /** Desired processing priority (0..1) Created when absent. */
  getPriority(): CodeableConcept {
    if (this.priority === undefined) {
      this.priority = new CodeableConcept();
    }
    return this.priority;
  }

  setPriority(priority: CodeableConcept | undefined): this {
    return this.setFieldValue('priority', priority);
  }

  hasPriority(): boolean {
    return this.hasFieldValue('priority');
  }

  /** The subject of the Products and Services (0..1) Created when absent. */
  getPatient(): Reference {
    if (this.patient === undefined) {
      this.patient = new Reference();
    }
    return this.patient;
  }

  setPatient(patient: Reference | undefined): this {
    return this.setFieldValue('patient', patient);
  }

  hasPatient(): boolean {
    return this.hasFieldValue('patient');
  }

  /** Estimated date or dates of Service (0..1) Whichever type of `serviced[x]` is set. */
  getServiced(): string | Period | undefined {
    return this.getChoiceValue<string | Period>('serviced');
  }

  /** True when any type of `serviced[x]` is set. */
  hasServiced(): boolean {
    return this.hasChoiceValue('serviced');
  }

  getServicedDate(): string | undefined {
    return this.servicedDate;
  }

  /** Sets `serviced[x]` as date and clears every other type of it. */
  setServicedDate(servicedDate: string | undefined): this {
    return this.setFieldValue('servicedDate', servicedDate);
  }

  hasServicedDate(): boolean {
    return this.hasFieldValue('servicedDate');
  }

  getServicedPeriod(): Period | undefined {
    return this.servicedPeriod;
  }

  /** Sets `serviced[x]` as Period and clears every other type of it. */
  setServicedPeriod(servicedPeriod: Period | undefined): this {
    return this.setFieldValue('servicedPeriod', servicedPeriod);
  }

  hasServicedPeriod(): boolean {
    return this.hasFieldValue('servicedPeriod');
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

  /** Author (0..1) Created when absent. */
  getEnterer(): Reference {
    if (this.enterer === undefined) {
      this.enterer = new Reference();
    }
    return this.enterer;
  }

  setEnterer(enterer: Reference | undefined): this {
    return this.setFieldValue('enterer', enterer);
  }

  hasEnterer(): boolean {
    return this.hasFieldValue('enterer');
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

  /** Target (0..1) Created when absent. */
  getInsurer(): Reference {
    if (this.insurer === undefined) {
      this.insurer = new Reference();
    }
    return this.insurer;
  }

  setInsurer(insurer: Reference | undefined): this {
    return this.setFieldValue('insurer', insurer);
  }

  hasInsurer(): boolean {
    return this.hasFieldValue('insurer');
  }

  /** Servicing Facility (0..1) Created when absent. */
  getFacility(): Reference {
    if (this.facility === undefined) {
      this.facility = new Reference();
    }
    return this.facility;
  }

  setFacility(facility: Reference | undefined): this {
    return this.setFieldValue('facility', facility);
  }

  hasFacility(): boolean {
    return this.hasFieldValue('facility');
  }

  /** Insurance or medical plan (0..1) Created when absent. */
  getCoverage(): Reference {
    if (this.coverage === undefined) {
      this.coverage = new Reference();
    }
    return this.coverage;
  }

  setCoverage(coverage: Reference | undefined): this {
    return this.setFieldValue('coverage', coverage);
  }

  hasCoverage(): boolean {
    return this.hasFieldValue('coverage');
  }

  /** Business agreement (0..1) */
  getBusinessArrangement(): string | undefined {
    return this.businessArrangement;
  }

  /** Sets `businessArrangement`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setBusinessArrangement(businessArrangement: string | undefined): this {
    return this.setFieldValue('businessArrangement', businessArrangement);
  }

  hasBusinessArrangement(): boolean {
    return this.hasFieldValue('businessArrangement');
  }

  /** The element carrying the id and extensions of `businessArrangement`. Created when absent. */
  getBusinessArrangementElement(): Element {
    if (this._businessArrangement === undefined) {
      this._businessArrangement = new Element();
    }
    return this._businessArrangement;
  }

  setBusinessArrangementElement(businessArrangementElement: Element | undefined): this {
    this._businessArrangement = businessArrangementElement;
    return this;
  }

  /** Type of services covered (0..1) Created when absent. */
  getBenefitCategory(): CodeableConcept {
    if (this.benefitCategory === undefined) {
      this.benefitCategory = new CodeableConcept();
    }
    return this.benefitCategory;
  }

  setBenefitCategory(benefitCategory: CodeableConcept | undefined): this {
    return this.setFieldValue('benefitCategory', benefitCategory);
  }

  hasBenefitCategory(): boolean {
    return this.hasFieldValue('benefitCategory');
  }

  /** Detailed services covered within the type (0..1) Created when absent. */
  getBenefitSubCategory(): CodeableConcept {
    if (this.benefitSubCategory === undefined) {
      this.benefitSubCategory = new CodeableConcept();
    }
    return this.benefitSubCategory;
  }

  setBenefitSubCategory(benefitSubCategory: CodeableConcept | undefined): this {
    return this.setFieldValue('benefitSubCategory', benefitSubCategory);
  }

  hasBenefitSubCategory(): boolean {
    return this.hasFieldValue('benefitSubCategory');
  }
}

modelTypeRegistry.register('EligibilityRequest', EligibilityRequest, true);

/** True when the value is a EligibilityRequest model instance. */
export function isEligibilityRequest(candidate: unknown): candidate is EligibilityRequest {
  return candidate instanceof EligibilityRequest;
}
