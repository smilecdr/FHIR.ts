/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../classes/models-r4';
import { CodeableConcept } from './codeableConcept';
import { ContactPoint } from './contactPoint';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';

/**
 * Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship.
 */
export class OrganizationAffiliation extends DomainResource {
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
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
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
      elementName: 'participatingOrganization',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'participatingOrganization',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization'],
        },
      ],
    },
    {
      elementName: 'network',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'network', typeCode: 'Reference', targetResourceTypes: ['Organization'] }],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
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
      elementName: 'healthcareService',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'healthcareService',
          typeCode: 'Reference',
          targetResourceTypes: ['HealthcareService'],
        },
      ],
    },
    {
      elementName: 'telecom',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'telecom', typeCode: 'ContactPoint' }],
    },
    {
      elementName: 'endpoint',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'endpoint', typeCode: 'Reference', targetResourceTypes: ['Endpoint'] }],
    },
  ];

  readonly resourceType = 'OrganizationAffiliation';

  /** Business identifiers that are specific to this role (0..*) */
  identifier?: Identifier[];

  /** Whether this organization affiliation record is in active use (0..1) */
  active?: boolean;
  /** Id and extensions of the primitive `active`. */
  _active?: Element;

  /** The period during which the participatingOrganization is affiliated with the primary organization (0..1) */
  period?: Period;

  /** Organization where the role is available (0..1) */
  organization?: Reference;

  /** Organization that provides/performs the role (e.g. providing services or is a member of) (0..1) */
  participatingOrganization?: Reference;

  /** Health insurance provider network in which the participatingOrganization provides the role's services (if defined) at the indicated locations (if defined) (0..*) */
  network?: Reference[];

  /** Definition of the role the participatingOrganization plays (0..*) */
  code?: CodeableConcept[];

  /** Specific specialty of the participatingOrganization in the context of the role (0..*) */
  specialty?: CodeableConcept[];

  /** The location(s) at which the role occurs (0..*) */
  location?: Reference[];

  /** Healthcare services provided through the role (0..*) */
  healthcareService?: Reference[];

  /** Contact details at the participatingOrganization relevant to this Affiliation (0..*) */
  telecom?: ContactPoint[];

  /** Technical endpoints providing access to services operated for this role (0..*) */
  endpoint?: Reference[];

  override fhirType(): string {
    return 'OrganizationAffiliation';
  }

  /** FHIR JSON for this OrganizationAffiliation, typed as the plain `OrganizationAffiliation` data type. */
  override toJSON(): plainTypes.OrganizationAffiliation {
    return this.serialize() as plainTypes.OrganizationAffiliation;
  }

  /** Business identifiers that are specific to this role (0..*) Never undefined; an empty list is created when absent. */
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

  /** Whether this organization affiliation record is in active use (0..1) */
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

  /** The period during which the participatingOrganization is affiliated with the primary organization (0..1) Created when absent. */
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

  /** Organization where the role is available (0..1) Created when absent. */
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

  /** Organization that provides/performs the role (e.g. providing services or is a member of) (0..1) Created when absent. */
  getParticipatingOrganization(): Reference {
    if (this.participatingOrganization === undefined) {
      this.participatingOrganization = new Reference();
    }
    return this.participatingOrganization;
  }

  setParticipatingOrganization(participatingOrganization: Reference | undefined): this {
    return this.setFieldValue('participatingOrganization', participatingOrganization);
  }

  hasParticipatingOrganization(): boolean {
    return this.hasFieldValue('participatingOrganization');
  }

  /** Health insurance provider network in which the participatingOrganization provides the role's services (if defined) at the indicated locations (if defined) (0..*) Never undefined; an empty list is created when absent. */
  getNetwork(): Reference[] {
    if (this.network === undefined) {
      this.network = [];
    }
    return this.network;
  }

  setNetwork(network: Reference[] | undefined): this {
    return this.setFieldValue('network', network);
  }

  hasNetwork(): boolean {
    return this.hasFieldValue('network');
  }

  /** Appends a new, empty Reference to `network` and returns it so it can be filled in. */
  addNetwork(): Reference;
  /** Appends the given Reference to `network` and returns this object for chaining. */
  addNetwork(reference: Reference): this;
  addNetwork(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('network', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('network', createdReference);
    return createdReference;
  }

  /** The first Reference of `network`. One is added when the list is empty. */
  getNetworkFirstRep(): Reference {
    const firstReference = this.getNetwork()[0];
    return firstReference === undefined ? this.addNetwork() : firstReference;
  }

  /** Definition of the role the participatingOrganization plays (0..*) Never undefined; an empty list is created when absent. */
  getCode(): CodeableConcept[] {
    if (this.code === undefined) {
      this.code = [];
    }
    return this.code;
  }

  setCode(code: CodeableConcept[] | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** Appends a new, empty CodeableConcept to `code` and returns it so it can be filled in. */
  addCode(): CodeableConcept;
  /** Appends the given CodeableConcept to `code` and returns this object for chaining. */
  addCode(codeableConcept: CodeableConcept): this;
  addCode(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('code', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('code', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `code`. One is added when the list is empty. */
  getCodeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getCode()[0];
    return firstCodeableConcept === undefined ? this.addCode() : firstCodeableConcept;
  }

  /** Specific specialty of the participatingOrganization in the context of the role (0..*) Never undefined; an empty list is created when absent. */
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

  /** The location(s) at which the role occurs (0..*) Never undefined; an empty list is created when absent. */
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

  /** Healthcare services provided through the role (0..*) Never undefined; an empty list is created when absent. */
  getHealthcareService(): Reference[] {
    if (this.healthcareService === undefined) {
      this.healthcareService = [];
    }
    return this.healthcareService;
  }

  setHealthcareService(healthcareService: Reference[] | undefined): this {
    return this.setFieldValue('healthcareService', healthcareService);
  }

  hasHealthcareService(): boolean {
    return this.hasFieldValue('healthcareService');
  }

  /** Appends a new, empty Reference to `healthcareService` and returns it so it can be filled in. */
  addHealthcareService(): Reference;
  /** Appends the given Reference to `healthcareService` and returns this object for chaining. */
  addHealthcareService(reference: Reference): this;
  addHealthcareService(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('healthcareService', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('healthcareService', createdReference);
    return createdReference;
  }

  /** The first Reference of `healthcareService`. One is added when the list is empty. */
  getHealthcareServiceFirstRep(): Reference {
    const firstReference = this.getHealthcareService()[0];
    return firstReference === undefined ? this.addHealthcareService() : firstReference;
  }

  /** Contact details at the participatingOrganization relevant to this Affiliation (0..*) Never undefined; an empty list is created when absent. */
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

  /** Technical endpoints providing access to services operated for this role (0..*) Never undefined; an empty list is created when absent. */
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

modelTypeRegistry.register('OrganizationAffiliation', OrganizationAffiliation, true);

/** True when the value is a OrganizationAffiliation model instance. */
export function isOrganizationAffiliation(
  candidate: unknown
): candidate is OrganizationAffiliation {
  return candidate instanceof OrganizationAffiliation;
}
