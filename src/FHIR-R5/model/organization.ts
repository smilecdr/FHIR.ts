/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../models';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { ExtendedContactDetail } from './extendedContactDetail';
import { Identifier } from './identifier';
import { Period } from './period';
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
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'contact',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'contact', typeCode: 'ExtendedContactDetail' }],
    },
    {
      elementName: 'partOf',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'partOf', typeCode: 'Reference', targetResourceTypes: ['Organization'] }],
    },
    {
      elementName: 'endpoint',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'endpoint', typeCode: 'Reference', targetResourceTypes: ['Endpoint'] }],
    },
    {
      elementName: 'qualification',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'qualification', typeCode: 'OrganizationQualification' }],
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

  /** Additional details about the Organization that could be displayed as further information to identify the Organization beyond its name (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Official contact details for the Organization (0..*) */
  contact?: ExtendedContactDetail[];

  /** The organization of which this organization forms a part (0..1) */
  partOf?: Reference;

  /** Technical endpoints providing access to services operated for the organization (0..*) */
  endpoint?: Reference[];

  /** Qualifications, certifications, accreditations, licenses, training, etc. pertaining to the provision of care (0..*) */
  qualification?: OrganizationQualification[];

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

  /** Additional details about the Organization that could be displayed as further information to identify the Organization beyond its name (0..1) */
  getDescription(): string | undefined {
    return this.description;
  }

  /** Sets `description`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
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

  /** Official contact details for the Organization (0..*) Never undefined; an empty list is created when absent. */
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

  /** Qualifications, certifications, accreditations, licenses, training, etc. pertaining to the provision of care (0..*) Never undefined; an empty list is created when absent. */
  getQualification(): OrganizationQualification[] {
    if (this.qualification === undefined) {
      this.qualification = [];
    }
    return this.qualification;
  }

  setQualification(qualification: OrganizationQualification[] | undefined): this {
    return this.setFieldValue('qualification', qualification);
  }

  hasQualification(): boolean {
    return this.hasFieldValue('qualification');
  }

  /** Appends a new, empty OrganizationQualification to `qualification` and returns it so it can be filled in. */
  addQualification(): OrganizationQualification;
  /** Appends the given OrganizationQualification to `qualification` and returns this object for chaining. */
  addQualification(organizationQualification: OrganizationQualification): this;
  addQualification(
    organizationQualification?: OrganizationQualification
  ): OrganizationQualification | this {
    if (organizationQualification !== undefined) {
      return this.addFieldValue('qualification', organizationQualification);
    }
    const createdOrganizationQualification = new OrganizationQualification();
    this.addFieldValue('qualification', createdOrganizationQualification);
    return createdOrganizationQualification;
  }

  /** The first OrganizationQualification of `qualification`. One is added when the list is empty. */
  getQualificationFirstRep(): OrganizationQualification {
    const firstOrganizationQualification = this.getQualification()[0];
    return firstOrganizationQualification === undefined
      ? this.addQualification()
      : firstOrganizationQualification;
  }
}

modelTypeRegistry.register('Organization', Organization, true);

/** True when the value is a Organization model instance. */
export function isOrganization(candidate: unknown): candidate is Organization {
  return candidate instanceof Organization;
}

/**
 * Qualifications, certifications, accreditations, licenses, training, etc. pertaining to the provision of care
 */
export class OrganizationQualification extends BackboneElement {
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

  /** An identifier for this qualification for the organization (0..*) */
  identifier?: Identifier[];

  /** Coded representation of the qualification (1..1) */
  code?: CodeableConcept;

  /** Period during which the qualification is valid (0..1) */
  period?: Period;

  /** Organization that regulates and issues the qualification (0..1) */
  issuer?: Reference;

  override fhirType(): string {
    return 'Organization.qualification';
  }

  /** FHIR JSON for this OrganizationQualification, typed as the plain `OrganizationQualification` data type. */
  override toJSON(): plainTypes.OrganizationQualification {
    return this.serialize() as plainTypes.OrganizationQualification;
  }

  /** An identifier for this qualification for the organization (0..*) Never undefined; an empty list is created when absent. */
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

modelTypeRegistry.register('OrganizationQualification', OrganizationQualification, false);
