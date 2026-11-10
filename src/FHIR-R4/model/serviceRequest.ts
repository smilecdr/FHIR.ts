/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { Annotation } from './annotation';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Quantity } from './quantity';
import { Range } from './range';
import { Ratio } from './ratio';
import { Reference } from './reference';
import { Timing } from './timing';

/**
 * A record of a request for service such as diagnostic investigations, treatments, or operations to be performed.
 */
export class ServiceRequest extends DomainResource {
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
          targetResourceTypes: ['CarePlan', 'MedicationRequest', 'ServiceRequest'],
        },
      ],
    },
    {
      elementName: 'replaces',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'replaces', typeCode: 'Reference', targetResourceTypes: ['ServiceRequest'] },
      ],
    },
    {
      elementName: 'requisition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'requisition', typeCode: 'Identifier' }],
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
      types: [{ jsonKey: 'intent', typeCode: 'code', allowedCodes: valueSetCodes.RequestIntent }],
    },
    {
      elementName: 'category',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'priority',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'priority', typeCode: 'code', allowedCodes: valueSetCodes.RequestPriority },
      ],
    },
    {
      elementName: 'doNotPerform',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'doNotPerform', typeCode: 'boolean' }],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'orderDetail',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'orderDetail', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'quantityQuantity', typeCode: 'Quantity' },
        { jsonKey: 'quantityRatio', typeCode: 'Ratio' },
        { jsonKey: 'quantityRange', typeCode: 'Range' },
      ],
    },
    {
      elementName: 'subject',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'subject',
          typeCode: 'Reference',
          targetResourceTypes: ['Device', 'Group', 'Location', 'Patient'],
        },
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
      elementName: 'occurrence',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'occurrenceDateTime', typeCode: 'dateTime' },
        { jsonKey: 'occurrencePeriod', typeCode: 'Period' },
        { jsonKey: 'occurrenceTiming', typeCode: 'Timing' },
      ],
    },
    {
      elementName: 'asNeeded',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'asNeededBoolean', typeCode: 'boolean' },
        { jsonKey: 'asNeededCodeableConcept', typeCode: 'CodeableConcept' },
      ],
    },
    {
      elementName: 'authoredOn',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'authoredOn', typeCode: 'dateTime' }],
    },
    {
      elementName: 'requester',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'requester',
          typeCode: 'Reference',
          targetResourceTypes: [
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
      elementName: 'performerType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'performerType', typeCode: 'CodeableConcept' }],
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
      elementName: 'locationCode',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'locationCode', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'locationReference',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'locationReference', typeCode: 'Reference', targetResourceTypes: ['Location'] },
      ],
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
      elementName: 'insurance',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'insurance',
          typeCode: 'Reference',
          targetResourceTypes: ['ClaimResponse', 'Coverage'],
        },
      ],
    },
    {
      elementName: 'supportingInfo',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'supportingInfo', typeCode: 'Reference' }],
    },
    {
      elementName: 'specimen',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'specimen', typeCode: 'Reference', targetResourceTypes: ['Specimen'] }],
    },
    {
      elementName: 'bodySite',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'bodySite', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
    {
      elementName: 'patientInstruction',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'patientInstruction', typeCode: 'string' }],
    },
    {
      elementName: 'relevantHistory',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'relevantHistory', typeCode: 'Reference', targetResourceTypes: ['Provenance'] },
      ],
    },
  ];

  readonly resourceType = 'ServiceRequest';

  /** Identifiers assigned to this order (0..*) */
  identifier?: Identifier[];

  /** Instantiates FHIR protocol or definition (0..*) */
  instantiatesCanonical?: string[];
  /** Id and extensions of the primitive `instantiatesCanonical`. */
  _instantiatesCanonical?: (Element | null)[];

  /** Instantiates external protocol or definition (0..*) */
  instantiatesUri?: string[];
  /** Id and extensions of the primitive `instantiatesUri`. */
  _instantiatesUri?: (Element | null)[];

  /** What request fulfills (0..*) */
  basedOn?: Reference[];

  /** What request replaces (0..*) */
  replaces?: Reference[];

  /** Composite Request ID (0..1) */
  requisition?: Identifier;

  /** draft | active | on-hold | revoked | completed | entered-in-error | unknown (1..1) */
  status?: valueSetCodes.RequestStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option (1..1) */
  intent?: valueSetCodes.RequestIntent;
  /** Id and extensions of the primitive `intent`. */
  _intent?: Element;

  /** Classification of service (0..*) */
  category?: CodeableConcept[];

  /** routine | urgent | asap | stat (0..1) */
  priority?: valueSetCodes.RequestPriority;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;

  /** True if service/procedure should not be performed (0..1) */
  doNotPerform?: boolean;
  /** Id and extensions of the primitive `doNotPerform`. */
  _doNotPerform?: Element;

  /** What is being requested/ordered (0..1) */
  code?: CodeableConcept;

  /** Additional order information (0..*) */
  orderDetail?: CodeableConcept[];

  /** Service amount (0..1) */
  quantityQuantity?: Quantity;
  /** Service amount (0..1) */
  quantityRatio?: Ratio;
  /** Service amount (0..1) */
  quantityRange?: Range;

  /** Individual or Entity the service is ordered for (1..1) */
  subject?: Reference;

  /** Encounter in which the request was created (0..1) */
  encounter?: Reference;

  /** When service should occur (0..1) */
  occurrenceDateTime?: string;
  /** Id and extensions of the primitive `occurrenceDateTime`. */
  _occurrenceDateTime?: Element;
  /** When service should occur (0..1) */
  occurrencePeriod?: Period;
  /** When service should occur (0..1) */
  occurrenceTiming?: Timing;

  /** Preconditions for service (0..1) */
  asNeededBoolean?: boolean;
  /** Id and extensions of the primitive `asNeededBoolean`. */
  _asNeededBoolean?: Element;
  /** Preconditions for service (0..1) */
  asNeededCodeableConcept?: CodeableConcept;

  /** Date request signed (0..1) */
  authoredOn?: string;
  /** Id and extensions of the primitive `authoredOn`. */
  _authoredOn?: Element;

  /** Who/what is requesting service (0..1) */
  requester?: Reference;

  /** Performer role (0..1) */
  performerType?: CodeableConcept;

  /** Requested performer (0..*) */
  performer?: Reference[];

  /** Requested location (0..*) */
  locationCode?: CodeableConcept[];

  /** Requested location (0..*) */
  locationReference?: Reference[];

  /** Explanation/Justification for procedure or service (0..*) */
  reasonCode?: CodeableConcept[];

  /** Explanation/Justification for service or service (0..*) */
  reasonReference?: Reference[];

  /** Associated insurance coverage (0..*) */
  insurance?: Reference[];

  /** Additional clinical information (0..*) */
  supportingInfo?: Reference[];

  /** Procedure Samples (0..*) */
  specimen?: Reference[];

  /** Location on Body (0..*) */
  bodySite?: CodeableConcept[];

  /** Comments (0..*) */
  note?: Annotation[];

  /** Patient or consumer-oriented instructions (0..1) */
  patientInstruction?: string;
  /** Id and extensions of the primitive `patientInstruction`. */
  _patientInstruction?: Element;

  /** Request provenance (0..*) */
  relevantHistory?: Reference[];

  override fhirType(): string {
    return 'ServiceRequest';
  }

  /** FHIR JSON for this ServiceRequest, typed as the plain `ServiceRequest` data type. */
  override toJSON(): plainTypes.ServiceRequest {
    return this.serialize() as plainTypes.ServiceRequest;
  }

  /** Identifiers assigned to this order (0..*) Never undefined; an empty list is created when absent. */
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

  /** What request fulfills (0..*) Never undefined; an empty list is created when absent. */
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

  /** What request replaces (0..*) Never undefined; an empty list is created when absent. */
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

  /** Composite Request ID (0..1) Created when absent. */
  getRequisition(): Identifier {
    if (this.requisition === undefined) {
      this.requisition = new Identifier();
    }
    return this.requisition;
  }

  setRequisition(requisition: Identifier | undefined): this {
    return this.setFieldValue('requisition', requisition);
  }

  hasRequisition(): boolean {
    return this.hasFieldValue('requisition');
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

  /** proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option (1..1) */
  getIntent(): valueSetCodes.RequestIntent | undefined {
    return this.intent;
  }

  /** Sets `intent`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setIntent(intent: valueSetCodes.RequestIntent | undefined): this {
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

  /** Classification of service (0..*) Never undefined; an empty list is created when absent. */
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

  /** routine | urgent | asap | stat (0..1) */
  getPriority(): valueSetCodes.RequestPriority | undefined {
    return this.priority;
  }

  /** Sets `priority`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setPriority(priority: valueSetCodes.RequestPriority | undefined): this {
    return this.setFieldValue('priority', priority);
  }

  hasPriority(): boolean {
    return this.hasFieldValue('priority');
  }

  /** The element carrying the id and extensions of `priority`. Created when absent. */
  getPriorityElement(): Element {
    if (this._priority === undefined) {
      this._priority = new Element();
    }
    return this._priority;
  }

  setPriorityElement(priorityElement: Element | undefined): this {
    this._priority = priorityElement;
    return this;
  }

  /** True if service/procedure should not be performed (0..1) */
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

  /** What is being requested/ordered (0..1) Created when absent. */
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

  /** Additional order information (0..*) Never undefined; an empty list is created when absent. */
  getOrderDetail(): CodeableConcept[] {
    if (this.orderDetail === undefined) {
      this.orderDetail = [];
    }
    return this.orderDetail;
  }

  setOrderDetail(orderDetail: CodeableConcept[] | undefined): this {
    return this.setFieldValue('orderDetail', orderDetail);
  }

  hasOrderDetail(): boolean {
    return this.hasFieldValue('orderDetail');
  }

  /** Appends a new, empty CodeableConcept to `orderDetail` and returns it so it can be filled in. */
  addOrderDetail(): CodeableConcept;
  /** Appends the given CodeableConcept to `orderDetail` and returns this object for chaining. */
  addOrderDetail(codeableConcept: CodeableConcept): this;
  addOrderDetail(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('orderDetail', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('orderDetail', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `orderDetail`. One is added when the list is empty. */
  getOrderDetailFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getOrderDetail()[0];
    return firstCodeableConcept === undefined ? this.addOrderDetail() : firstCodeableConcept;
  }

  /** Service amount (0..1) Whichever type of `quantity[x]` is set. */
  getQuantity(): Quantity | Ratio | Range | undefined {
    return this.getChoiceValue<Quantity | Ratio | Range>('quantity');
  }

  /** True when any type of `quantity[x]` is set. */
  hasQuantity(): boolean {
    return this.hasChoiceValue('quantity');
  }

  getQuantityQuantity(): Quantity | undefined {
    return this.quantityQuantity;
  }

  /** Sets `quantity[x]` as Quantity and clears every other type of it. */
  setQuantityQuantity(quantityQuantity: Quantity | undefined): this {
    return this.setFieldValue('quantityQuantity', quantityQuantity);
  }

  hasQuantityQuantity(): boolean {
    return this.hasFieldValue('quantityQuantity');
  }

  getQuantityRatio(): Ratio | undefined {
    return this.quantityRatio;
  }

  /** Sets `quantity[x]` as Ratio and clears every other type of it. */
  setQuantityRatio(quantityRatio: Ratio | undefined): this {
    return this.setFieldValue('quantityRatio', quantityRatio);
  }

  hasQuantityRatio(): boolean {
    return this.hasFieldValue('quantityRatio');
  }

  getQuantityRange(): Range | undefined {
    return this.quantityRange;
  }

  /** Sets `quantity[x]` as Range and clears every other type of it. */
  setQuantityRange(quantityRange: Range | undefined): this {
    return this.setFieldValue('quantityRange', quantityRange);
  }

  hasQuantityRange(): boolean {
    return this.hasFieldValue('quantityRange');
  }

  /** Individual or Entity the service is ordered for (1..1) Created when absent. */
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

  /** Encounter in which the request was created (0..1) Created when absent. */
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

  /** When service should occur (0..1) Whichever type of `occurrence[x]` is set. */
  getOccurrence(): string | Period | Timing | undefined {
    return this.getChoiceValue<string | Period | Timing>('occurrence');
  }

  /** True when any type of `occurrence[x]` is set. */
  hasOccurrence(): boolean {
    return this.hasChoiceValue('occurrence');
  }

  getOccurrenceDateTime(): string | undefined {
    return this.occurrenceDateTime;
  }

  /** Sets `occurrence[x]` as dateTime and clears every other type of it. */
  setOccurrenceDateTime(occurrenceDateTime: string | undefined): this {
    return this.setFieldValue('occurrenceDateTime', occurrenceDateTime);
  }

  hasOccurrenceDateTime(): boolean {
    return this.hasFieldValue('occurrenceDateTime');
  }

  getOccurrencePeriod(): Period | undefined {
    return this.occurrencePeriod;
  }

  /** Sets `occurrence[x]` as Period and clears every other type of it. */
  setOccurrencePeriod(occurrencePeriod: Period | undefined): this {
    return this.setFieldValue('occurrencePeriod', occurrencePeriod);
  }

  hasOccurrencePeriod(): boolean {
    return this.hasFieldValue('occurrencePeriod');
  }

  getOccurrenceTiming(): Timing | undefined {
    return this.occurrenceTiming;
  }

  /** Sets `occurrence[x]` as Timing and clears every other type of it. */
  setOccurrenceTiming(occurrenceTiming: Timing | undefined): this {
    return this.setFieldValue('occurrenceTiming', occurrenceTiming);
  }

  hasOccurrenceTiming(): boolean {
    return this.hasFieldValue('occurrenceTiming');
  }

  /** Preconditions for service (0..1) Whichever type of `asNeeded[x]` is set. */
  getAsNeeded(): boolean | CodeableConcept | undefined {
    return this.getChoiceValue<boolean | CodeableConcept>('asNeeded');
  }

  /** True when any type of `asNeeded[x]` is set. */
  hasAsNeeded(): boolean {
    return this.hasChoiceValue('asNeeded');
  }

  getAsNeededBoolean(): boolean | undefined {
    return this.asNeededBoolean;
  }

  /** Sets `asNeeded[x]` as boolean and clears every other type of it. */
  setAsNeededBoolean(asNeededBoolean: boolean | undefined): this {
    return this.setFieldValue('asNeededBoolean', asNeededBoolean);
  }

  hasAsNeededBoolean(): boolean {
    return this.hasFieldValue('asNeededBoolean');
  }

  getAsNeededCodeableConcept(): CodeableConcept | undefined {
    return this.asNeededCodeableConcept;
  }

  /** Sets `asNeeded[x]` as CodeableConcept and clears every other type of it. */
  setAsNeededCodeableConcept(asNeededCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('asNeededCodeableConcept', asNeededCodeableConcept);
  }

  hasAsNeededCodeableConcept(): boolean {
    return this.hasFieldValue('asNeededCodeableConcept');
  }

  /** Date request signed (0..1) */
  getAuthoredOn(): string | undefined {
    return this.authoredOn;
  }

  /** Sets `authoredOn`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setAuthoredOn(authoredOn: string | undefined): this {
    return this.setFieldValue('authoredOn', authoredOn);
  }

  hasAuthoredOn(): boolean {
    return this.hasFieldValue('authoredOn');
  }

  /** The element carrying the id and extensions of `authoredOn`. Created when absent. */
  getAuthoredOnElement(): Element {
    if (this._authoredOn === undefined) {
      this._authoredOn = new Element();
    }
    return this._authoredOn;
  }

  setAuthoredOnElement(authoredOnElement: Element | undefined): this {
    this._authoredOn = authoredOnElement;
    return this;
  }

  /** Who/what is requesting service (0..1) Created when absent. */
  getRequester(): Reference {
    if (this.requester === undefined) {
      this.requester = new Reference();
    }
    return this.requester;
  }

  setRequester(requester: Reference | undefined): this {
    return this.setFieldValue('requester', requester);
  }

  hasRequester(): boolean {
    return this.hasFieldValue('requester');
  }

  /** Performer role (0..1) Created when absent. */
  getPerformerType(): CodeableConcept {
    if (this.performerType === undefined) {
      this.performerType = new CodeableConcept();
    }
    return this.performerType;
  }

  setPerformerType(performerType: CodeableConcept | undefined): this {
    return this.setFieldValue('performerType', performerType);
  }

  hasPerformerType(): boolean {
    return this.hasFieldValue('performerType');
  }

  /** Requested performer (0..*) Never undefined; an empty list is created when absent. */
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

  /** Requested location (0..*) Never undefined; an empty list is created when absent. */
  getLocationCode(): CodeableConcept[] {
    if (this.locationCode === undefined) {
      this.locationCode = [];
    }
    return this.locationCode;
  }

  setLocationCode(locationCode: CodeableConcept[] | undefined): this {
    return this.setFieldValue('locationCode', locationCode);
  }

  hasLocationCode(): boolean {
    return this.hasFieldValue('locationCode');
  }

  /** Appends a new, empty CodeableConcept to `locationCode` and returns it so it can be filled in. */
  addLocationCode(): CodeableConcept;
  /** Appends the given CodeableConcept to `locationCode` and returns this object for chaining. */
  addLocationCode(codeableConcept: CodeableConcept): this;
  addLocationCode(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('locationCode', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('locationCode', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `locationCode`. One is added when the list is empty. */
  getLocationCodeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getLocationCode()[0];
    return firstCodeableConcept === undefined ? this.addLocationCode() : firstCodeableConcept;
  }

  /** Requested location (0..*) Never undefined; an empty list is created when absent. */
  getLocationReference(): Reference[] {
    if (this.locationReference === undefined) {
      this.locationReference = [];
    }
    return this.locationReference;
  }

  setLocationReference(locationReference: Reference[] | undefined): this {
    return this.setFieldValue('locationReference', locationReference);
  }

  hasLocationReference(): boolean {
    return this.hasFieldValue('locationReference');
  }

  /** Appends a new, empty Reference to `locationReference` and returns it so it can be filled in. */
  addLocationReference(): Reference;
  /** Appends the given Reference to `locationReference` and returns this object for chaining. */
  addLocationReference(reference: Reference): this;
  addLocationReference(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('locationReference', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('locationReference', createdReference);
    return createdReference;
  }

  /** The first Reference of `locationReference`. One is added when the list is empty. */
  getLocationReferenceFirstRep(): Reference {
    const firstReference = this.getLocationReference()[0];
    return firstReference === undefined ? this.addLocationReference() : firstReference;
  }

  /** Explanation/Justification for procedure or service (0..*) Never undefined; an empty list is created when absent. */
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

  /** Explanation/Justification for service or service (0..*) Never undefined; an empty list is created when absent. */
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

  /** Associated insurance coverage (0..*) Never undefined; an empty list is created when absent. */
  getInsurance(): Reference[] {
    if (this.insurance === undefined) {
      this.insurance = [];
    }
    return this.insurance;
  }

  setInsurance(insurance: Reference[] | undefined): this {
    return this.setFieldValue('insurance', insurance);
  }

  hasInsurance(): boolean {
    return this.hasFieldValue('insurance');
  }

  /** Appends a new, empty Reference to `insurance` and returns it so it can be filled in. */
  addInsurance(): Reference;
  /** Appends the given Reference to `insurance` and returns this object for chaining. */
  addInsurance(reference: Reference): this;
  addInsurance(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('insurance', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('insurance', createdReference);
    return createdReference;
  }

  /** The first Reference of `insurance`. One is added when the list is empty. */
  getInsuranceFirstRep(): Reference {
    const firstReference = this.getInsurance()[0];
    return firstReference === undefined ? this.addInsurance() : firstReference;
  }

  /** Additional clinical information (0..*) Never undefined; an empty list is created when absent. */
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

  /** Procedure Samples (0..*) Never undefined; an empty list is created when absent. */
  getSpecimen(): Reference[] {
    if (this.specimen === undefined) {
      this.specimen = [];
    }
    return this.specimen;
  }

  setSpecimen(specimen: Reference[] | undefined): this {
    return this.setFieldValue('specimen', specimen);
  }

  hasSpecimen(): boolean {
    return this.hasFieldValue('specimen');
  }

  /** Appends a new, empty Reference to `specimen` and returns it so it can be filled in. */
  addSpecimen(): Reference;
  /** Appends the given Reference to `specimen` and returns this object for chaining. */
  addSpecimen(reference: Reference): this;
  addSpecimen(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('specimen', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('specimen', createdReference);
    return createdReference;
  }

  /** The first Reference of `specimen`. One is added when the list is empty. */
  getSpecimenFirstRep(): Reference {
    const firstReference = this.getSpecimen()[0];
    return firstReference === undefined ? this.addSpecimen() : firstReference;
  }

  /** Location on Body (0..*) Never undefined; an empty list is created when absent. */
  getBodySite(): CodeableConcept[] {
    if (this.bodySite === undefined) {
      this.bodySite = [];
    }
    return this.bodySite;
  }

  setBodySite(bodySite: CodeableConcept[] | undefined): this {
    return this.setFieldValue('bodySite', bodySite);
  }

  hasBodySite(): boolean {
    return this.hasFieldValue('bodySite');
  }

  /** Appends a new, empty CodeableConcept to `bodySite` and returns it so it can be filled in. */
  addBodySite(): CodeableConcept;
  /** Appends the given CodeableConcept to `bodySite` and returns this object for chaining. */
  addBodySite(codeableConcept: CodeableConcept): this;
  addBodySite(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('bodySite', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('bodySite', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `bodySite`. One is added when the list is empty. */
  getBodySiteFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getBodySite()[0];
    return firstCodeableConcept === undefined ? this.addBodySite() : firstCodeableConcept;
  }

  /** Comments (0..*) Never undefined; an empty list is created when absent. */
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

  /** Patient or consumer-oriented instructions (0..1) */
  getPatientInstruction(): string | undefined {
    return this.patientInstruction;
  }

  /** Sets `patientInstruction`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPatientInstruction(patientInstruction: string | undefined): this {
    return this.setFieldValue('patientInstruction', patientInstruction);
  }

  hasPatientInstruction(): boolean {
    return this.hasFieldValue('patientInstruction');
  }

  /** The element carrying the id and extensions of `patientInstruction`. Created when absent. */
  getPatientInstructionElement(): Element {
    if (this._patientInstruction === undefined) {
      this._patientInstruction = new Element();
    }
    return this._patientInstruction;
  }

  setPatientInstructionElement(patientInstructionElement: Element | undefined): this {
    this._patientInstruction = patientInstructionElement;
    return this;
  }

  /** Request provenance (0..*) Never undefined; an empty list is created when absent. */
  getRelevantHistory(): Reference[] {
    if (this.relevantHistory === undefined) {
      this.relevantHistory = [];
    }
    return this.relevantHistory;
  }

  setRelevantHistory(relevantHistory: Reference[] | undefined): this {
    return this.setFieldValue('relevantHistory', relevantHistory);
  }

  hasRelevantHistory(): boolean {
    return this.hasFieldValue('relevantHistory');
  }

  /** Appends a new, empty Reference to `relevantHistory` and returns it so it can be filled in. */
  addRelevantHistory(): Reference;
  /** Appends the given Reference to `relevantHistory` and returns this object for chaining. */
  addRelevantHistory(reference: Reference): this;
  addRelevantHistory(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('relevantHistory', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('relevantHistory', createdReference);
    return createdReference;
  }

  /** The first Reference of `relevantHistory`. One is added when the list is empty. */
  getRelevantHistoryFirstRep(): Reference {
    const firstReference = this.getRelevantHistory()[0];
    return firstReference === undefined ? this.addRelevantHistory() : firstReference;
  }
}

modelTypeRegistry.register('ServiceRequest', ServiceRequest, true);

/** True when the value is a ServiceRequest model instance. */
export function isServiceRequest(candidate: unknown): candidate is ServiceRequest {
  return candidate instanceof ServiceRequest;
}
