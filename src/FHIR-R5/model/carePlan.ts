/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { Annotation } from './annotation';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { CodeableReference } from './codeableReference';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';

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
      types: [
        {
          jsonKey: 'basedOn',
          typeCode: 'Reference',
          targetResourceTypes: [
            'CarePlan',
            'NutritionOrder',
            'RequestOrchestration',
            'ServiceRequest',
          ],
        },
      ],
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
      elementName: 'custodian',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'custodian',
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
      types: [{ jsonKey: 'addresses', typeCode: 'CodeableReference' }],
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

  /** Fulfills plan, proposal or order (0..*) */
  basedOn?: Reference[];

  /** CarePlan replaced by this CarePlan (0..*) */
  replaces?: Reference[];

  /** Part of referenced CarePlan (0..*) */
  partOf?: Reference[];

  /** draft | active | on-hold | revoked | completed | entered-in-error | unknown (1..1) */
  status?: valueSetCodes.RequestStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** proposal | plan | order | option | directive (1..1) */
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

  /** The Encounter during which this CarePlan was created (0..1) */
  encounter?: Reference;

  /** Time period plan covers (0..1) */
  period?: Period;

  /** Date record was first recorded (0..1) */
  created?: string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;

  /** Who is the designated responsible party (0..1) */
  custodian?: Reference;

  /** Who provided the content of the care plan (0..*) */
  contributor?: Reference[];

  /** Who's involved in plan? (0..*) */
  careTeam?: Reference[];

  /** Health issues this plan addresses (0..*) */
  addresses?: CodeableReference[];

  /** Information considered as part of plan (0..*) */
  supportingInfo?: Reference[];

  /** Desired outcome of plan (0..*) */
  goal?: Reference[];

  /** Action to occur or has occurred as part of plan (0..*) */
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

  /** Fulfills plan, proposal or order (0..*) Never undefined; an empty list is created when absent. */
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

  /** proposal | plan | order | option | directive (1..1) */
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

  /** The Encounter during which this CarePlan was created (0..1) Created when absent. */
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
  getCustodian(): Reference {
    if (this.custodian === undefined) {
      this.custodian = new Reference();
    }
    return this.custodian;
  }

  setCustodian(custodian: Reference | undefined): this {
    return this.setFieldValue('custodian', custodian);
  }

  hasCustodian(): boolean {
    return this.hasFieldValue('custodian');
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
  getAddresses(): CodeableReference[] {
    if (this.addresses === undefined) {
      this.addresses = [];
    }
    return this.addresses;
  }

  setAddresses(addresses: CodeableReference[] | undefined): this {
    return this.setFieldValue('addresses', addresses);
  }

  hasAddresses(): boolean {
    return this.hasFieldValue('addresses');
  }

  /** Appends a new, empty CodeableReference to `addresses` and returns it so it can be filled in. */
  addAddresses(): CodeableReference;
  /** Appends the given CodeableReference to `addresses` and returns this object for chaining. */
  addAddresses(codeableReference: CodeableReference): this;
  addAddresses(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('addresses', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('addresses', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `addresses`. One is added when the list is empty. */
  getAddressesFirstRep(): CodeableReference {
    const firstCodeableReference = this.getAddresses()[0];
    return firstCodeableReference === undefined ? this.addAddresses() : firstCodeableReference;
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

  /** Action to occur or has occurred as part of plan (0..*) Never undefined; an empty list is created when absent. */
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
 * Action to occur or has occurred as part of plan
 */
export class CarePlanActivity extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'performedActivity',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'performedActivity', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'progress',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'progress', typeCode: 'Annotation' }],
    },
    {
      elementName: 'plannedActivityReference',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'plannedActivityReference',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Appointment',
            'CommunicationRequest',
            'DeviceRequest',
            'ImmunizationRecommendation',
            'MedicationRequest',
            'NutritionOrder',
            'RequestOrchestration',
            'ServiceRequest',
            'SupplyRequest',
            'Task',
            'VisionPrescription',
          ],
        },
      ],
    },
  ];

  /** Results of the activity (concept, or Appointment, Encounter, Procedure, etc.) (0..*) */
  performedActivity?: CodeableReference[];

  /** Comments about the activity status/progress (0..*) */
  progress?: Annotation[];

  /** Activity that is intended to be part of the care plan (0..1) */
  plannedActivityReference?: Reference;

  override fhirType(): string {
    return 'CarePlan.activity';
  }

  /** FHIR JSON for this CarePlanActivity, typed as the plain `CarePlanActivity` data type. */
  override toJSON(): plainTypes.CarePlanActivity {
    return this.serialize() as plainTypes.CarePlanActivity;
  }

  /** Results of the activity (concept, or Appointment, Encounter, Procedure, etc.) (0..*) Never undefined; an empty list is created when absent. */
  getPerformedActivity(): CodeableReference[] {
    if (this.performedActivity === undefined) {
      this.performedActivity = [];
    }
    return this.performedActivity;
  }

  setPerformedActivity(performedActivity: CodeableReference[] | undefined): this {
    return this.setFieldValue('performedActivity', performedActivity);
  }

  hasPerformedActivity(): boolean {
    return this.hasFieldValue('performedActivity');
  }

  /** Appends a new, empty CodeableReference to `performedActivity` and returns it so it can be filled in. */
  addPerformedActivity(): CodeableReference;
  /** Appends the given CodeableReference to `performedActivity` and returns this object for chaining. */
  addPerformedActivity(codeableReference: CodeableReference): this;
  addPerformedActivity(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('performedActivity', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('performedActivity', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `performedActivity`. One is added when the list is empty. */
  getPerformedActivityFirstRep(): CodeableReference {
    const firstCodeableReference = this.getPerformedActivity()[0];
    return firstCodeableReference === undefined
      ? this.addPerformedActivity()
      : firstCodeableReference;
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

  /** Activity that is intended to be part of the care plan (0..1) Created when absent. */
  getPlannedActivityReference(): Reference {
    if (this.plannedActivityReference === undefined) {
      this.plannedActivityReference = new Reference();
    }
    return this.plannedActivityReference;
  }

  setPlannedActivityReference(plannedActivityReference: Reference | undefined): this {
    return this.setFieldValue('plannedActivityReference', plannedActivityReference);
  }

  hasPlannedActivityReference(): boolean {
    return this.hasFieldValue('plannedActivityReference');
  }
}

modelTypeRegistry.register('CarePlanActivity', CarePlanActivity, false);
