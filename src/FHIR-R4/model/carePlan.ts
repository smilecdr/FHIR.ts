/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { Annotation } from './annotation';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Quantity } from './quantity';
import { Reference } from './reference';
import { Timing } from './timing';

/**
 * Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.
 */
export class CarePlan extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'instantiatesCanonical',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'instantiatesCanonical', typeCode: 'canonical' }],
    },
    {
      elementName: 'instantiatesUri',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'instantiatesUri', typeCode: 'uri' }],
    },
    {
      elementName: 'basedOn',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'basedOn', typeCode: 'Reference', targetResourceTypes: ['CarePlan'] }],
    },
    {
      elementName: 'replaces',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'replaces', typeCode: 'Reference', targetResourceTypes: ['CarePlan'] }],
    },
    {
      elementName: 'partOf',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'partOf', typeCode: 'Reference', targetResourceTypes: ['CarePlan'] }],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.RequestStatus }],
    },
    {
      elementName: 'intent',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'intent', typeCode: 'code', allowedCodes: valueSetCodes.CarePlanIntent }],
    },
    {
      elementName: 'category',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'title',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'title', typeCode: 'string' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'subject',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'subject', typeCode: 'Reference', targetResourceTypes: ['Group', 'Patient'] },
      ],
    },
    {
      elementName: 'encounter',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'encounter', typeCode: 'Reference', targetResourceTypes: ['Encounter'] }],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
    {
      elementName: 'created',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'created', typeCode: 'dateTime' }],
    },
    {
      elementName: 'author',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'author',
          typeCode: 'Reference',
          targetResourceTypes: [
            'CareTeam',
            'Device',
            'Organization',
            'Patient',
            'Practitioner',
            'PractitionerRole',
            'RelatedPerson',
          ],
        },
      ],
    },
    {
      elementName: 'contributor',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'contributor',
          typeCode: 'Reference',
          targetResourceTypes: [
            'CareTeam',
            'Device',
            'Organization',
            'Patient',
            'Practitioner',
            'PractitionerRole',
            'RelatedPerson',
          ],
        },
      ],
    },
    {
      elementName: 'careTeam',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'careTeam', typeCode: 'Reference', targetResourceTypes: ['CareTeam'] }],
    },
    {
      elementName: 'addresses',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'addresses', typeCode: 'Reference', targetResourceTypes: ['Condition'] }],
    },
    {
      elementName: 'supportingInfo',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'supportingInfo', typeCode: 'Reference' }],
    },
    {
      elementName: 'goal',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'goal', typeCode: 'Reference', targetResourceTypes: ['Goal'] }],
    },
    {
      elementName: 'activity',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'activity', typeCode: 'CarePlanActivity' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
  ];

  readonly resourceType = 'CarePlan';

  /** External Ids for this plan (0..*) */
  identifier?: Identifier[];

  /** Instantiates FHIR protocol or definition (0..*) */
  instantiatesCanonical?: string[];
  /** Id and extensions of the primitive `instantiatesCanonical`. */
  _instantiatesCanonical?: (Element | null)[];

  /** Instantiates external protocol or definition (0..*) */
  instantiatesUri?: string[];
  /** Id and extensions of the primitive `instantiatesUri`. */
  _instantiatesUri?: (Element | null)[];

  /** Fulfills CarePlan (0..*) */
  basedOn?: Reference[];

  /** CarePlan replaced by this CarePlan (0..*) */
  replaces?: Reference[];

  /** Part of referenced CarePlan (0..*) */
  partOf?: Reference[];

  /** draft | active | on-hold | revoked | completed | entered-in-error | unknown (1..1) */
  status?: valueSetCodes.RequestStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** proposal | plan | order | option (1..1) */
  intent?: valueSetCodes.CarePlanIntent;
  /** Id and extensions of the primitive `intent`. */
  _intent?: Element;

  /** Type of plan (0..*) */
  category?: CodeableConcept[];

  /** Human-friendly name for the care plan (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

  /** Summary of nature of plan (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Who the care plan is for (1..1) */
  subject?: Reference;

  /** Encounter created as part of (0..1) */
  encounter?: Reference;

  /** Time period plan covers (0..1) */
  period?: Period;

  /** Date record was first recorded (0..1) */
  created?: string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;

  /** Who is the designated responsible party (0..1) */
  author?: Reference;

  /** Who provided the content of the care plan (0..*) */
  contributor?: Reference[];

  /** Who's involved in plan? (0..*) */
  careTeam?: Reference[];

  /** Health issues this plan addresses (0..*) */
  addresses?: Reference[];

  /** Information considered as part of plan (0..*) */
  supportingInfo?: Reference[];

  /** Desired outcome of plan (0..*) */
  goal?: Reference[];

  /** Action to occur as part of plan (0..*) */
  activity?: CarePlanActivity[];

  /** Comments about the plan (0..*) */
  note?: Annotation[];

  override fhirType(): string {
    return 'CarePlan';
  }

  /** FHIR JSON for this CarePlan, typed as the plain `CarePlan` data type. */
  override toJSON(): plainTypes.CarePlan {
    return this.serialize() as plainTypes.CarePlan;
  }

  /** External Ids for this plan (0..*) Never undefined; an empty list is created when absent. */
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

  /** Instantiates FHIR protocol or definition (0..*) Never undefined; an empty list is created when absent. */
  getInstantiatesCanonical(): string[] {
    if (this.instantiatesCanonical === undefined) {
      this.instantiatesCanonical = [];
    }
    return this.instantiatesCanonical;
  }

  setInstantiatesCanonical(instantiatesCanonical: string[] | undefined): this {
    return this.setFieldValue('instantiatesCanonical', instantiatesCanonical);
  }

  hasInstantiatesCanonical(): boolean {
    return this.hasFieldValue('instantiatesCanonical');
  }

  /** Appends one value to `instantiatesCanonical`. Throws a FhirModelError when it is not a valid FHIR canonical. */
  addInstantiatesCanonical(instantiatesCanonical: string): this {
    return this.addFieldValue('instantiatesCanonical', instantiatesCanonical);
  }

  /** Instantiates external protocol or definition (0..*) Never undefined; an empty list is created when absent. */
  getInstantiatesUri(): string[] {
    if (this.instantiatesUri === undefined) {
      this.instantiatesUri = [];
    }
    return this.instantiatesUri;
  }

  setInstantiatesUri(instantiatesUri: string[] | undefined): this {
    return this.setFieldValue('instantiatesUri', instantiatesUri);
  }

  hasInstantiatesUri(): boolean {
    return this.hasFieldValue('instantiatesUri');
  }

  /** Appends one value to `instantiatesUri`. Throws a FhirModelError when it is not a valid FHIR uri. */
  addInstantiatesUri(instantiatesUri: string): this {
    return this.addFieldValue('instantiatesUri', instantiatesUri);
  }

  /** Fulfills CarePlan (0..*) Never undefined; an empty list is created when absent. */
  getBasedOn(): Reference[] {
    if (this.basedOn === undefined) {
      this.basedOn = [];
    }
    return this.basedOn;
  }

  setBasedOn(basedOn: Reference[] | undefined): this {
    return this.setFieldValue('basedOn', basedOn);
  }

  hasBasedOn(): boolean {
    return this.hasFieldValue('basedOn');
  }

  /** Appends a new, empty Reference to `basedOn` and returns it so it can be filled in. */
  addBasedOn(): Reference;
  /** Appends the given Reference to `basedOn` and returns this object for chaining. */
  addBasedOn(reference: Reference): this;
  addBasedOn(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('basedOn', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('basedOn', createdReference);
    return createdReference;
  }

  /** The first Reference of `basedOn`. One is added when the list is empty. */
  getBasedOnFirstRep(): Reference {
    const firstReference = this.getBasedOn()[0];
    return firstReference === undefined ? this.addBasedOn() : firstReference;
  }

  /** CarePlan replaced by this CarePlan (0..*) Never undefined; an empty list is created when absent. */
  getReplaces(): Reference[] {
    if (this.replaces === undefined) {
      this.replaces = [];
    }
    return this.replaces;
  }

  setReplaces(replaces: Reference[] | undefined): this {
    return this.setFieldValue('replaces', replaces);
  }

  hasReplaces(): boolean {
    return this.hasFieldValue('replaces');
  }

  /** Appends a new, empty Reference to `replaces` and returns it so it can be filled in. */
  addReplaces(): Reference;
  /** Appends the given Reference to `replaces` and returns this object for chaining. */
  addReplaces(reference: Reference): this;
  addReplaces(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('replaces', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('replaces', createdReference);
    return createdReference;
  }

  /** The first Reference of `replaces`. One is added when the list is empty. */
  getReplacesFirstRep(): Reference {
    const firstReference = this.getReplaces()[0];
    return firstReference === undefined ? this.addReplaces() : firstReference;
  }

  /** Part of referenced CarePlan (0..*) Never undefined; an empty list is created when absent. */
  getPartOf(): Reference[] {
    if (this.partOf === undefined) {
      this.partOf = [];
    }
    return this.partOf;
  }

  setPartOf(partOf: Reference[] | undefined): this {
    return this.setFieldValue('partOf', partOf);
  }

  hasPartOf(): boolean {
    return this.hasFieldValue('partOf');
  }

  /** Appends a new, empty Reference to `partOf` and returns it so it can be filled in. */
  addPartOf(): Reference;
  /** Appends the given Reference to `partOf` and returns this object for chaining. */
  addPartOf(reference: Reference): this;
  addPartOf(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('partOf', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('partOf', createdReference);
    return createdReference;
  }

  /** The first Reference of `partOf`. One is added when the list is empty. */
  getPartOfFirstRep(): Reference {
    const firstReference = this.getPartOf()[0];
    return firstReference === undefined ? this.addPartOf() : firstReference;
  }

  /** draft | active | on-hold | revoked | completed | entered-in-error | unknown (1..1) */
  getStatus(): valueSetCodes.RequestStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.RequestStatus | undefined): this {
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

  /** proposal | plan | order | option (1..1) */
  getIntent(): valueSetCodes.CarePlanIntent | undefined {
    return this.intent;
  }

  /** Sets `intent`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setIntent(intent: valueSetCodes.CarePlanIntent | undefined): this {
    return this.setFieldValue('intent', intent);
  }

  hasIntent(): boolean {
    return this.hasFieldValue('intent');
  }

  /** The element carrying the id and extensions of `intent`. Created when absent. */
  getIntentElement(): Element {
    if (this._intent === undefined) {
      this._intent = new Element();
    }
    return this._intent;
  }

  setIntentElement(intentElement: Element | undefined): this {
    this._intent = intentElement;
    return this;
  }

  /** Type of plan (0..*) Never undefined; an empty list is created when absent. */
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

  /** Human-friendly name for the care plan (0..1) */
  getTitle(): string | undefined {
    return this.title;
  }

  /** Sets `title`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setTitle(title: string | undefined): this {
    return this.setFieldValue('title', title);
  }

  hasTitle(): boolean {
    return this.hasFieldValue('title');
  }

  /** The element carrying the id and extensions of `title`. Created when absent. */
  getTitleElement(): Element {
    if (this._title === undefined) {
      this._title = new Element();
    }
    return this._title;
  }

  setTitleElement(titleElement: Element | undefined): this {
    this._title = titleElement;
    return this;
  }

  /** Summary of nature of plan (0..1) */
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

  /** Who the care plan is for (1..1) Created when absent. */
  getSubject(): Reference {
    if (this.subject === undefined) {
      this.subject = new Reference();
    }
    return this.subject;
  }

  setSubject(subject: Reference | undefined): this {
    return this.setFieldValue('subject', subject);
  }

  hasSubject(): boolean {
    return this.hasFieldValue('subject');
  }

  /** Encounter created as part of (0..1) Created when absent. */
  getEncounter(): Reference {
    if (this.encounter === undefined) {
      this.encounter = new Reference();
    }
    return this.encounter;
  }

  setEncounter(encounter: Reference | undefined): this {
    return this.setFieldValue('encounter', encounter);
  }

  hasEncounter(): boolean {
    return this.hasFieldValue('encounter');
  }

  /** Time period plan covers (0..1) Created when absent. */
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

  /** Date record was first recorded (0..1) */
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

  /** Who is the designated responsible party (0..1) Created when absent. */
  getAuthor(): Reference {
    if (this.author === undefined) {
      this.author = new Reference();
    }
    return this.author;
  }

  setAuthor(author: Reference | undefined): this {
    return this.setFieldValue('author', author);
  }

  hasAuthor(): boolean {
    return this.hasFieldValue('author');
  }

  /** Who provided the content of the care plan (0..*) Never undefined; an empty list is created when absent. */
  getContributor(): Reference[] {
    if (this.contributor === undefined) {
      this.contributor = [];
    }
    return this.contributor;
  }

  setContributor(contributor: Reference[] | undefined): this {
    return this.setFieldValue('contributor', contributor);
  }

  hasContributor(): boolean {
    return this.hasFieldValue('contributor');
  }

  /** Appends a new, empty Reference to `contributor` and returns it so it can be filled in. */
  addContributor(): Reference;
  /** Appends the given Reference to `contributor` and returns this object for chaining. */
  addContributor(reference: Reference): this;
  addContributor(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('contributor', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('contributor', createdReference);
    return createdReference;
  }

  /** The first Reference of `contributor`. One is added when the list is empty. */
  getContributorFirstRep(): Reference {
    const firstReference = this.getContributor()[0];
    return firstReference === undefined ? this.addContributor() : firstReference;
  }

  /** Who's involved in plan? (0..*) Never undefined; an empty list is created when absent. */
  getCareTeam(): Reference[] {
    if (this.careTeam === undefined) {
      this.careTeam = [];
    }
    return this.careTeam;
  }

  setCareTeam(careTeam: Reference[] | undefined): this {
    return this.setFieldValue('careTeam', careTeam);
  }

  hasCareTeam(): boolean {
    return this.hasFieldValue('careTeam');
  }

  /** Appends a new, empty Reference to `careTeam` and returns it so it can be filled in. */
  addCareTeam(): Reference;
  /** Appends the given Reference to `careTeam` and returns this object for chaining. */
  addCareTeam(reference: Reference): this;
  addCareTeam(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('careTeam', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('careTeam', createdReference);
    return createdReference;
  }

  /** The first Reference of `careTeam`. One is added when the list is empty. */
  getCareTeamFirstRep(): Reference {
    const firstReference = this.getCareTeam()[0];
    return firstReference === undefined ? this.addCareTeam() : firstReference;
  }

  /** Health issues this plan addresses (0..*) Never undefined; an empty list is created when absent. */
  getAddresses(): Reference[] {
    if (this.addresses === undefined) {
      this.addresses = [];
    }
    return this.addresses;
  }

  setAddresses(addresses: Reference[] | undefined): this {
    return this.setFieldValue('addresses', addresses);
  }

  hasAddresses(): boolean {
    return this.hasFieldValue('addresses');
  }

  /** Appends a new, empty Reference to `addresses` and returns it so it can be filled in. */
  addAddresses(): Reference;
  /** Appends the given Reference to `addresses` and returns this object for chaining. */
  addAddresses(reference: Reference): this;
  addAddresses(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('addresses', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('addresses', createdReference);
    return createdReference;
  }

  /** The first Reference of `addresses`. One is added when the list is empty. */
  getAddressesFirstRep(): Reference {
    const firstReference = this.getAddresses()[0];
    return firstReference === undefined ? this.addAddresses() : firstReference;
  }

  /** Information considered as part of plan (0..*) Never undefined; an empty list is created when absent. */
  getSupportingInfo(): Reference[] {
    if (this.supportingInfo === undefined) {
      this.supportingInfo = [];
    }
    return this.supportingInfo;
  }

  setSupportingInfo(supportingInfo: Reference[] | undefined): this {
    return this.setFieldValue('supportingInfo', supportingInfo);
  }

  hasSupportingInfo(): boolean {
    return this.hasFieldValue('supportingInfo');
  }

  /** Appends a new, empty Reference to `supportingInfo` and returns it so it can be filled in. */
  addSupportingInfo(): Reference;
  /** Appends the given Reference to `supportingInfo` and returns this object for chaining. */
  addSupportingInfo(reference: Reference): this;
  addSupportingInfo(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('supportingInfo', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('supportingInfo', createdReference);
    return createdReference;
  }

  /** The first Reference of `supportingInfo`. One is added when the list is empty. */
  getSupportingInfoFirstRep(): Reference {
    const firstReference = this.getSupportingInfo()[0];
    return firstReference === undefined ? this.addSupportingInfo() : firstReference;
  }

  /** Desired outcome of plan (0..*) Never undefined; an empty list is created when absent. */
  getGoal(): Reference[] {
    if (this.goal === undefined) {
      this.goal = [];
    }
    return this.goal;
  }

  setGoal(goal: Reference[] | undefined): this {
    return this.setFieldValue('goal', goal);
  }

  hasGoal(): boolean {
    return this.hasFieldValue('goal');
  }

  /** Appends a new, empty Reference to `goal` and returns it so it can be filled in. */
  addGoal(): Reference;
  /** Appends the given Reference to `goal` and returns this object for chaining. */
  addGoal(reference: Reference): this;
  addGoal(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('goal', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('goal', createdReference);
    return createdReference;
  }

  /** The first Reference of `goal`. One is added when the list is empty. */
  getGoalFirstRep(): Reference {
    const firstReference = this.getGoal()[0];
    return firstReference === undefined ? this.addGoal() : firstReference;
  }

  /** Action to occur as part of plan (0..*) Never undefined; an empty list is created when absent. */
  getActivity(): CarePlanActivity[] {
    if (this.activity === undefined) {
      this.activity = [];
    }
    return this.activity;
  }

  setActivity(activity: CarePlanActivity[] | undefined): this {
    return this.setFieldValue('activity', activity);
  }

  hasActivity(): boolean {
    return this.hasFieldValue('activity');
  }

  /** Appends a new, empty CarePlanActivity to `activity` and returns it so it can be filled in. */
  addActivity(): CarePlanActivity;
  /** Appends the given CarePlanActivity to `activity` and returns this object for chaining. */
  addActivity(carePlanActivity: CarePlanActivity): this;
  addActivity(carePlanActivity?: CarePlanActivity): CarePlanActivity | this {
    if (carePlanActivity !== undefined) {
      return this.addFieldValue('activity', carePlanActivity);
    }
    const createdCarePlanActivity = new CarePlanActivity();
    this.addFieldValue('activity', createdCarePlanActivity);
    return createdCarePlanActivity;
  }

  /** The first CarePlanActivity of `activity`. One is added when the list is empty. */
  getActivityFirstRep(): CarePlanActivity {
    const firstCarePlanActivity = this.getActivity()[0];
    return firstCarePlanActivity === undefined ? this.addActivity() : firstCarePlanActivity;
  }

  /** Comments about the plan (0..*) Never undefined; an empty list is created when absent. */
  getNote(): Annotation[] {
    if (this.note === undefined) {
      this.note = [];
    }
    return this.note;
  }

  setNote(note: Annotation[] | undefined): this {
    return this.setFieldValue('note', note);
  }

  hasNote(): boolean {
    return this.hasFieldValue('note');
  }

  /** Appends a new, empty Annotation to `note` and returns it so it can be filled in. */
  addNote(): Annotation;
  /** Appends the given Annotation to `note` and returns this object for chaining. */
  addNote(annotation: Annotation): this;
  addNote(annotation?: Annotation): Annotation | this {
    if (annotation !== undefined) {
      return this.addFieldValue('note', annotation);
    }
    const createdAnnotation = new Annotation();
    this.addFieldValue('note', createdAnnotation);
    return createdAnnotation;
  }

  /** The first Annotation of `note`. One is added when the list is empty. */
  getNoteFirstRep(): Annotation {
    const firstAnnotation = this.getNote()[0];
    return firstAnnotation === undefined ? this.addNote() : firstAnnotation;
  }
}

modelTypeRegistry.register('CarePlan', CarePlan, true);

/** True when the value is a CarePlan model instance. */
export function isCarePlan(candidate: unknown): candidate is CarePlan {
  return candidate instanceof CarePlan;
}

/**
 * Action to occur as part of plan
 */
export class CarePlanActivity extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'outcomeCodeableConcept',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'outcomeCodeableConcept', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'outcomeReference',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'outcomeReference', typeCode: 'Reference' }],
    },
    {
      elementName: 'progress',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'progress', typeCode: 'Annotation' }],
    },
    {
      elementName: 'reference',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'reference',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Appointment',
            'CommunicationRequest',
            'DeviceRequest',
            'MedicationRequest',
            'NutritionOrder',
            'RequestGroup',
            'ServiceRequest',
            'Task',
            'VisionPrescription',
          ],
        },
      ],
    },
    {
      elementName: 'detail',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'detail', typeCode: 'CarePlanActivityDetail' }],
    },
  ];

  /** Results of the activity (0..*) */
  outcomeCodeableConcept?: CodeableConcept[];

  /** Appointment, Encounter, Procedure, etc. (0..*) */
  outcomeReference?: Reference[];

  /** Comments about the activity status/progress (0..*) */
  progress?: Annotation[];

  /** Activity details defined in specific resource (0..1) */
  reference?: Reference;

  /** In-line definition of activity (0..1) */
  detail?: CarePlanActivityDetail;

  override fhirType(): string {
    return 'CarePlan.activity';
  }

  /** FHIR JSON for this CarePlanActivity, typed as the plain `CarePlanActivity` data type. */
  override toJSON(): plainTypes.CarePlanActivity {
    return this.serialize() as plainTypes.CarePlanActivity;
  }

  /** Results of the activity (0..*) Never undefined; an empty list is created when absent. */
  getOutcomeCodeableConcept(): CodeableConcept[] {
    if (this.outcomeCodeableConcept === undefined) {
      this.outcomeCodeableConcept = [];
    }
    return this.outcomeCodeableConcept;
  }

  setOutcomeCodeableConcept(outcomeCodeableConcept: CodeableConcept[] | undefined): this {
    return this.setFieldValue('outcomeCodeableConcept', outcomeCodeableConcept);
  }

  hasOutcomeCodeableConcept(): boolean {
    return this.hasFieldValue('outcomeCodeableConcept');
  }

  /** Appends a new, empty CodeableConcept to `outcomeCodeableConcept` and returns it so it can be filled in. */
  addOutcomeCodeableConcept(): CodeableConcept;
  /** Appends the given CodeableConcept to `outcomeCodeableConcept` and returns this object for chaining. */
  addOutcomeCodeableConcept(codeableConcept: CodeableConcept): this;
  addOutcomeCodeableConcept(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('outcomeCodeableConcept', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('outcomeCodeableConcept', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `outcomeCodeableConcept`. One is added when the list is empty. */
  getOutcomeCodeableConceptFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getOutcomeCodeableConcept()[0];
    return firstCodeableConcept === undefined
      ? this.addOutcomeCodeableConcept()
      : firstCodeableConcept;
  }

  /** Appointment, Encounter, Procedure, etc. (0..*) Never undefined; an empty list is created when absent. */
  getOutcomeReference(): Reference[] {
    if (this.outcomeReference === undefined) {
      this.outcomeReference = [];
    }
    return this.outcomeReference;
  }

  setOutcomeReference(outcomeReference: Reference[] | undefined): this {
    return this.setFieldValue('outcomeReference', outcomeReference);
  }

  hasOutcomeReference(): boolean {
    return this.hasFieldValue('outcomeReference');
  }

  /** Appends a new, empty Reference to `outcomeReference` and returns it so it can be filled in. */
  addOutcomeReference(): Reference;
  /** Appends the given Reference to `outcomeReference` and returns this object for chaining. */
  addOutcomeReference(reference: Reference): this;
  addOutcomeReference(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('outcomeReference', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('outcomeReference', createdReference);
    return createdReference;
  }

  /** The first Reference of `outcomeReference`. One is added when the list is empty. */
  getOutcomeReferenceFirstRep(): Reference {
    const firstReference = this.getOutcomeReference()[0];
    return firstReference === undefined ? this.addOutcomeReference() : firstReference;
  }

  /** Comments about the activity status/progress (0..*) Never undefined; an empty list is created when absent. */
  getProgress(): Annotation[] {
    if (this.progress === undefined) {
      this.progress = [];
    }
    return this.progress;
  }

  setProgress(progress: Annotation[] | undefined): this {
    return this.setFieldValue('progress', progress);
  }

  hasProgress(): boolean {
    return this.hasFieldValue('progress');
  }

  /** Appends a new, empty Annotation to `progress` and returns it so it can be filled in. */
  addProgress(): Annotation;
  /** Appends the given Annotation to `progress` and returns this object for chaining. */
  addProgress(annotation: Annotation): this;
  addProgress(annotation?: Annotation): Annotation | this {
    if (annotation !== undefined) {
      return this.addFieldValue('progress', annotation);
    }
    const createdAnnotation = new Annotation();
    this.addFieldValue('progress', createdAnnotation);
    return createdAnnotation;
  }

  /** The first Annotation of `progress`. One is added when the list is empty. */
  getProgressFirstRep(): Annotation {
    const firstAnnotation = this.getProgress()[0];
    return firstAnnotation === undefined ? this.addProgress() : firstAnnotation;
  }

  /** Activity details defined in specific resource (0..1) Created when absent. */
  getReference(): Reference {
    if (this.reference === undefined) {
      this.reference = new Reference();
    }
    return this.reference;
  }

  setReference(reference: Reference | undefined): this {
    return this.setFieldValue('reference', reference);
  }

  hasReference(): boolean {
    return this.hasFieldValue('reference');
  }

  /** In-line definition of activity (0..1) Created when absent. */
  getDetail(): CarePlanActivityDetail {
    if (this.detail === undefined) {
      this.detail = new CarePlanActivityDetail();
    }
    return this.detail;
  }

  setDetail(detail: CarePlanActivityDetail | undefined): this {
    return this.setFieldValue('detail', detail);
  }

  hasDetail(): boolean {
    return this.hasFieldValue('detail');
  }
}

modelTypeRegistry.register('CarePlanActivity', CarePlanActivity, false);

/**
 * In-line definition of activity
 */
export class CarePlanActivityDetail extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'kind',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'kind', typeCode: 'code', allowedCodes: valueSetCodes.CarePlanActivityKind },
      ],
    },
    {
      elementName: 'instantiatesCanonical',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'instantiatesCanonical', typeCode: 'canonical' }],
    },
    {
      elementName: 'instantiatesUri',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'instantiatesUri', typeCode: 'uri' }],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'reasonCode',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reasonCode', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'reasonReference',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'reasonReference',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Condition',
            'DiagnosticReport',
            'DocumentReference',
            'Observation',
          ],
        },
      ],
    },
    {
      elementName: 'goal',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'goal', typeCode: 'Reference', targetResourceTypes: ['Goal'] }],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.CarePlanActivityStatus },
      ],
    },
    {
      elementName: 'statusReason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'statusReason', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'doNotPerform',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'doNotPerform', typeCode: 'boolean' }],
    },
    {
      elementName: 'scheduled',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'scheduledTiming', typeCode: 'Timing' },
        { jsonKey: 'scheduledPeriod', typeCode: 'Period' },
        { jsonKey: 'scheduledString', typeCode: 'string' },
      ],
    },
    {
      elementName: 'location',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'location', typeCode: 'Reference', targetResourceTypes: ['Location'] }],
    },
    {
      elementName: 'performer',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'performer',
          typeCode: 'Reference',
          targetResourceTypes: [
            'CareTeam',
            'Device',
            'HealthcareService',
            'Organization',
            'Patient',
            'Practitioner',
            'PractitionerRole',
            'RelatedPerson',
          ],
        },
      ],
    },
    {
      elementName: 'product',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'productCodeableConcept', typeCode: 'CodeableConcept' },
        {
          jsonKey: 'productReference',
          typeCode: 'Reference',
          targetResourceTypes: ['Medication', 'Substance'],
        },
      ],
    },
    {
      elementName: 'dailyAmount',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'dailyAmount', typeCode: 'Quantity' }],
    },
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
  ];

  /** Appointment | CommunicationRequest | DeviceRequest | MedicationRequest | NutritionOrder | Task | ServiceRequest | VisionPrescription (0..1) */
  kind?: valueSetCodes.CarePlanActivityKind;
  /** Id and extensions of the primitive `kind`. */
  _kind?: Element;

  /** Instantiates FHIR protocol or definition (0..*) */
  instantiatesCanonical?: string[];
  /** Id and extensions of the primitive `instantiatesCanonical`. */
  _instantiatesCanonical?: (Element | null)[];

  /** Instantiates external protocol or definition (0..*) */
  instantiatesUri?: string[];
  /** Id and extensions of the primitive `instantiatesUri`. */
  _instantiatesUri?: (Element | null)[];

  /** Detail type of activity (0..1) */
  code?: CodeableConcept;

  /** Why activity should be done or why activity was prohibited (0..*) */
  reasonCode?: CodeableConcept[];

  /** Why activity is needed (0..*) */
  reasonReference?: Reference[];

  /** Goals this activity relates to (0..*) */
  goal?: Reference[];

  /** not-started | scheduled | in-progress | on-hold | completed | cancelled | stopped | unknown | entered-in-error (1..1) */
  status?: valueSetCodes.CarePlanActivityStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Reason for current status (0..1) */
  statusReason?: CodeableConcept;

  /** If true, activity is prohibiting action (0..1) */
  doNotPerform?: boolean;
  /** Id and extensions of the primitive `doNotPerform`. */
  _doNotPerform?: Element;

  /** When activity is to occur (0..1) */
  scheduledTiming?: Timing;
  /** When activity is to occur (0..1) */
  scheduledPeriod?: Period;
  /** When activity is to occur (0..1) */
  scheduledString?: string;
  /** Id and extensions of the primitive `scheduledString`. */
  _scheduledString?: Element;

  /** Where it should happen (0..1) */
  location?: Reference;

  /** Who will be responsible? (0..*) */
  performer?: Reference[];

  /** What is to be administered/supplied (0..1) */
  productCodeableConcept?: CodeableConcept;
  /** What is to be administered/supplied (0..1) */
  productReference?: Reference;

  /** How to consume/day? (0..1) */
  dailyAmount?: Quantity;

  /** How much to administer/supply/consume (0..1) */
  quantity?: Quantity;

  /** Extra info describing activity to perform (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  override fhirType(): string {
    return 'CarePlan.activity.detail';
  }

  /** FHIR JSON for this CarePlanActivityDetail, typed as the plain `CarePlanDetail` data type. */
  override toJSON(): plainTypes.CarePlanDetail {
    return this.serialize() as plainTypes.CarePlanDetail;
  }

  /** Appointment | CommunicationRequest | DeviceRequest | MedicationRequest | NutritionOrder | Task | ServiceRequest | VisionPrescription (0..1) */
  getKind(): valueSetCodes.CarePlanActivityKind | undefined {
    return this.kind;
  }

  /** Sets `kind`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setKind(kind: valueSetCodes.CarePlanActivityKind | undefined): this {
    return this.setFieldValue('kind', kind);
  }

  hasKind(): boolean {
    return this.hasFieldValue('kind');
  }

  /** The element carrying the id and extensions of `kind`. Created when absent. */
  getKindElement(): Element {
    if (this._kind === undefined) {
      this._kind = new Element();
    }
    return this._kind;
  }

  setKindElement(kindElement: Element | undefined): this {
    this._kind = kindElement;
    return this;
  }

  /** Instantiates FHIR protocol or definition (0..*) Never undefined; an empty list is created when absent. */
  getInstantiatesCanonical(): string[] {
    if (this.instantiatesCanonical === undefined) {
      this.instantiatesCanonical = [];
    }
    return this.instantiatesCanonical;
  }

  setInstantiatesCanonical(instantiatesCanonical: string[] | undefined): this {
    return this.setFieldValue('instantiatesCanonical', instantiatesCanonical);
  }

  hasInstantiatesCanonical(): boolean {
    return this.hasFieldValue('instantiatesCanonical');
  }

  /** Appends one value to `instantiatesCanonical`. Throws a FhirModelError when it is not a valid FHIR canonical. */
  addInstantiatesCanonical(instantiatesCanonical: string): this {
    return this.addFieldValue('instantiatesCanonical', instantiatesCanonical);
  }

  /** Instantiates external protocol or definition (0..*) Never undefined; an empty list is created when absent. */
  getInstantiatesUri(): string[] {
    if (this.instantiatesUri === undefined) {
      this.instantiatesUri = [];
    }
    return this.instantiatesUri;
  }

  setInstantiatesUri(instantiatesUri: string[] | undefined): this {
    return this.setFieldValue('instantiatesUri', instantiatesUri);
  }

  hasInstantiatesUri(): boolean {
    return this.hasFieldValue('instantiatesUri');
  }

  /** Appends one value to `instantiatesUri`. Throws a FhirModelError when it is not a valid FHIR uri. */
  addInstantiatesUri(instantiatesUri: string): this {
    return this.addFieldValue('instantiatesUri', instantiatesUri);
  }

  /** Detail type of activity (0..1) Created when absent. */
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

  /** Why activity should be done or why activity was prohibited (0..*) Never undefined; an empty list is created when absent. */
  getReasonCode(): CodeableConcept[] {
    if (this.reasonCode === undefined) {
      this.reasonCode = [];
    }
    return this.reasonCode;
  }

  setReasonCode(reasonCode: CodeableConcept[] | undefined): this {
    return this.setFieldValue('reasonCode', reasonCode);
  }

  hasReasonCode(): boolean {
    return this.hasFieldValue('reasonCode');
  }

  /** Appends a new, empty CodeableConcept to `reasonCode` and returns it so it can be filled in. */
  addReasonCode(): CodeableConcept;
  /** Appends the given CodeableConcept to `reasonCode` and returns this object for chaining. */
  addReasonCode(codeableConcept: CodeableConcept): this;
  addReasonCode(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('reasonCode', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('reasonCode', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `reasonCode`. One is added when the list is empty. */
  getReasonCodeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getReasonCode()[0];
    return firstCodeableConcept === undefined ? this.addReasonCode() : firstCodeableConcept;
  }

  /** Why activity is needed (0..*) Never undefined; an empty list is created when absent. */
  getReasonReference(): Reference[] {
    if (this.reasonReference === undefined) {
      this.reasonReference = [];
    }
    return this.reasonReference;
  }

  setReasonReference(reasonReference: Reference[] | undefined): this {
    return this.setFieldValue('reasonReference', reasonReference);
  }

  hasReasonReference(): boolean {
    return this.hasFieldValue('reasonReference');
  }

  /** Appends a new, empty Reference to `reasonReference` and returns it so it can be filled in. */
  addReasonReference(): Reference;
  /** Appends the given Reference to `reasonReference` and returns this object for chaining. */
  addReasonReference(reference: Reference): this;
  addReasonReference(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('reasonReference', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('reasonReference', createdReference);
    return createdReference;
  }

  /** The first Reference of `reasonReference`. One is added when the list is empty. */
  getReasonReferenceFirstRep(): Reference {
    const firstReference = this.getReasonReference()[0];
    return firstReference === undefined ? this.addReasonReference() : firstReference;
  }

  /** Goals this activity relates to (0..*) Never undefined; an empty list is created when absent. */
  getGoal(): Reference[] {
    if (this.goal === undefined) {
      this.goal = [];
    }
    return this.goal;
  }

  setGoal(goal: Reference[] | undefined): this {
    return this.setFieldValue('goal', goal);
  }

  hasGoal(): boolean {
    return this.hasFieldValue('goal');
  }

  /** Appends a new, empty Reference to `goal` and returns it so it can be filled in. */
  addGoal(): Reference;
  /** Appends the given Reference to `goal` and returns this object for chaining. */
  addGoal(reference: Reference): this;
  addGoal(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('goal', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('goal', createdReference);
    return createdReference;
  }

  /** The first Reference of `goal`. One is added when the list is empty. */
  getGoalFirstRep(): Reference {
    const firstReference = this.getGoal()[0];
    return firstReference === undefined ? this.addGoal() : firstReference;
  }

  /** not-started | scheduled | in-progress | on-hold | completed | cancelled | stopped | unknown | entered-in-error (1..1) */
  getStatus(): valueSetCodes.CarePlanActivityStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.CarePlanActivityStatus | undefined): this {
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

  /** Reason for current status (0..1) Created when absent. */
  getStatusReason(): CodeableConcept {
    if (this.statusReason === undefined) {
      this.statusReason = new CodeableConcept();
    }
    return this.statusReason;
  }

  setStatusReason(statusReason: CodeableConcept | undefined): this {
    return this.setFieldValue('statusReason', statusReason);
  }

  hasStatusReason(): boolean {
    return this.hasFieldValue('statusReason');
  }

  /** If true, activity is prohibiting action (0..1) */
  getDoNotPerform(): boolean | undefined {
    return this.doNotPerform;
  }

  /** Sets `doNotPerform`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setDoNotPerform(doNotPerform: boolean | undefined): this {
    return this.setFieldValue('doNotPerform', doNotPerform);
  }

  hasDoNotPerform(): boolean {
    return this.hasFieldValue('doNotPerform');
  }

  /** The element carrying the id and extensions of `doNotPerform`. Created when absent. */
  getDoNotPerformElement(): Element {
    if (this._doNotPerform === undefined) {
      this._doNotPerform = new Element();
    }
    return this._doNotPerform;
  }

  setDoNotPerformElement(doNotPerformElement: Element | undefined): this {
    this._doNotPerform = doNotPerformElement;
    return this;
  }

  /** When activity is to occur (0..1) Whichever type of `scheduled[x]` is set. */
  getScheduled(): Timing | Period | string | undefined {
    return this.getChoiceValue<Timing | Period | string>('scheduled');
  }

  /** True when any type of `scheduled[x]` is set. */
  hasScheduled(): boolean {
    return this.hasChoiceValue('scheduled');
  }

  getScheduledTiming(): Timing | undefined {
    return this.scheduledTiming;
  }

  /** Sets `scheduled[x]` as Timing and clears every other type of it. */
  setScheduledTiming(scheduledTiming: Timing | undefined): this {
    return this.setFieldValue('scheduledTiming', scheduledTiming);
  }

  hasScheduledTiming(): boolean {
    return this.hasFieldValue('scheduledTiming');
  }

  getScheduledPeriod(): Period | undefined {
    return this.scheduledPeriod;
  }

  /** Sets `scheduled[x]` as Period and clears every other type of it. */
  setScheduledPeriod(scheduledPeriod: Period | undefined): this {
    return this.setFieldValue('scheduledPeriod', scheduledPeriod);
  }

  hasScheduledPeriod(): boolean {
    return this.hasFieldValue('scheduledPeriod');
  }

  getScheduledString(): string | undefined {
    return this.scheduledString;
  }

  /** Sets `scheduled[x]` as string and clears every other type of it. */
  setScheduledString(scheduledString: string | undefined): this {
    return this.setFieldValue('scheduledString', scheduledString);
  }

  hasScheduledString(): boolean {
    return this.hasFieldValue('scheduledString');
  }

  /** Where it should happen (0..1) Created when absent. */
  getLocation(): Reference {
    if (this.location === undefined) {
      this.location = new Reference();
    }
    return this.location;
  }

  setLocation(location: Reference | undefined): this {
    return this.setFieldValue('location', location);
  }

  hasLocation(): boolean {
    return this.hasFieldValue('location');
  }

  /** Who will be responsible? (0..*) Never undefined; an empty list is created when absent. */
  getPerformer(): Reference[] {
    if (this.performer === undefined) {
      this.performer = [];
    }
    return this.performer;
  }

  setPerformer(performer: Reference[] | undefined): this {
    return this.setFieldValue('performer', performer);
  }

  hasPerformer(): boolean {
    return this.hasFieldValue('performer');
  }

  /** Appends a new, empty Reference to `performer` and returns it so it can be filled in. */
  addPerformer(): Reference;
  /** Appends the given Reference to `performer` and returns this object for chaining. */
  addPerformer(reference: Reference): this;
  addPerformer(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('performer', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('performer', createdReference);
    return createdReference;
  }

  /** The first Reference of `performer`. One is added when the list is empty. */
  getPerformerFirstRep(): Reference {
    const firstReference = this.getPerformer()[0];
    return firstReference === undefined ? this.addPerformer() : firstReference;
  }

  /** What is to be administered/supplied (0..1) Whichever type of `product[x]` is set. */
  getProduct(): CodeableConcept | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | Reference>('product');
  }

  /** True when any type of `product[x]` is set. */
  hasProduct(): boolean {
    return this.hasChoiceValue('product');
  }

  getProductCodeableConcept(): CodeableConcept | undefined {
    return this.productCodeableConcept;
  }

  /** Sets `product[x]` as CodeableConcept and clears every other type of it. */
  setProductCodeableConcept(productCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('productCodeableConcept', productCodeableConcept);
  }

  hasProductCodeableConcept(): boolean {
    return this.hasFieldValue('productCodeableConcept');
  }

  getProductReference(): Reference | undefined {
    return this.productReference;
  }

  /** Sets `product[x]` as Reference and clears every other type of it. */
  setProductReference(productReference: Reference | undefined): this {
    return this.setFieldValue('productReference', productReference);
  }

  hasProductReference(): boolean {
    return this.hasFieldValue('productReference');
  }

  /** How to consume/day? (0..1) Created when absent. */
  getDailyAmount(): Quantity {
    if (this.dailyAmount === undefined) {
      this.dailyAmount = new Quantity();
    }
    return this.dailyAmount;
  }

  setDailyAmount(dailyAmount: Quantity | undefined): this {
    return this.setFieldValue('dailyAmount', dailyAmount);
  }

  hasDailyAmount(): boolean {
    return this.hasFieldValue('dailyAmount');
  }

  /** How much to administer/supply/consume (0..1) Created when absent. */
  getQuantity(): Quantity {
    if (this.quantity === undefined) {
      this.quantity = new Quantity();
    }
    return this.quantity;
  }

  setQuantity(quantity: Quantity | undefined): this {
    return this.setFieldValue('quantity', quantity);
  }

  hasQuantity(): boolean {
    return this.hasFieldValue('quantity');
  }

  /** Extra info describing activity to perform (0..1) */
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
}

modelTypeRegistry.register('CarePlanActivityDetail', CarePlanActivityDetail, false);
