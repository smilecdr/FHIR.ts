/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { Attachment } from './attachment';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { CodeableReference } from './codeableReference';
import { Coding } from './coding';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';

/**
 * A reference to a document of any kind for any purpose. While the term “document” implies a more narrow focus, for this resource this “document” encompasses *any* serialized object with a mime-type, it includes formal patient-centric documents (CDA), clinical notes, scanned paper, non-patient specific documents like policy text, as well as a photo, video, or audio recording acquired or used in healthcare. The DocumentReference resource provides metadata about the document so that the document can be discovered and managed. The actual content may be inline base64 encoded data or provided by direct reference.
 */
export class DocumentReference extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'version',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'version', typeCode: 'string' }],
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
            'Appointment',
            'AppointmentResponse',
            'CarePlan',
            'Claim',
            'CommunicationRequest',
            'Contract',
            'CoverageEligibilityRequest',
            'DeviceRequest',
            'EnrollmentRequest',
            'ImmunizationRecommendation',
            'MedicationRequest',
            'NutritionOrder',
            'RequestOrchestration',
            'ServiceRequest',
            'SupplyRequest',
            'VisionPrescription',
          ],
        },
      ],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'status',
          typeCode: 'code',
          allowedCodes: valueSetCodes.DocumentReferenceStatus,
        },
      ],
    },
    {
      elementName: 'docStatus',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'docStatus', typeCode: 'code', allowedCodes: valueSetCodes.CompositionStatus },
      ],
    },
    {
      elementName: 'modality',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'modality', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'category',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'subject',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'subject', typeCode: 'Reference' }],
    },
    {
      elementName: 'context',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'context',
          typeCode: 'Reference',
          targetResourceTypes: ['Appointment', 'Encounter', 'EpisodeOfCare'],
        },
      ],
    },
    {
      elementName: 'event',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'event', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'bodySite',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'bodySite', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'facilityType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'facilityType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'practiceSetting',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'practiceSetting', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
    {
      elementName: 'date',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'date', typeCode: 'instant' }],
    },
    {
      elementName: 'author',
      minimum: 0,
      maximum: Infinity,
      isList: true,
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
      elementName: 'attester',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'attester', typeCode: 'DocumentReferenceAttester' }],
    },
    {
      elementName: 'custodian',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'custodian', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
    {
      elementName: 'relatesTo',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'relatesTo', typeCode: 'DocumentReferenceRelatesTo' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'securityLabel',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'securityLabel', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'content',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'content', typeCode: 'DocumentReferenceContent' }],
    },
  ];

  readonly resourceType = 'DocumentReference';

  /** Business identifiers for the document (0..*) */
  identifier?: Identifier[];

  /** An explicitly assigned identifer of a variation of the content in the DocumentReference (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** Procedure that caused this media to be created (0..*) */
  basedOn?: Reference[];

  /** current | superseded | entered-in-error (1..1) */
  status?: valueSetCodes.DocumentReferenceStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** registered | partial | preliminary | final | amended | corrected | appended | cancelled | entered-in-error | deprecated | unknown (0..1) */
  docStatus?: valueSetCodes.CompositionStatus;
  /** Id and extensions of the primitive `docStatus`. */
  _docStatus?: Element;

  /** Imaging modality used (0..*) */
  modality?: CodeableConcept[];

  /** Kind of document (LOINC if possible) (0..1) */
  type?: CodeableConcept;

  /** Categorization of document (0..*) */
  category?: CodeableConcept[];

  /** Who/what is the subject of the document (0..1) */
  subject?: Reference;

  /** Context of the document content (0..*) */
  context?: Reference[];

  /** Main clinical acts documented (0..*) */
  event?: CodeableReference[];

  /** Body part included (0..*) */
  bodySite?: CodeableReference[];

  /** Kind of facility where patient was seen (0..1) */
  facilityType?: CodeableConcept;

  /** Additional details about where the content was created (e.g. clinical specialty) (0..1) */
  practiceSetting?: CodeableConcept;

  /** Time of service that is being documented (0..1) */
  period?: Period;

  /** When this document reference was created (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Who and/or what authored the document (0..*) */
  author?: Reference[];

  /** Attests to accuracy of the document (0..*) */
  attester?: DocumentReferenceAttester[];

  /** Organization which maintains the document (0..1) */
  custodian?: Reference;

  /** Relationships to other documents (0..*) */
  relatesTo?: DocumentReferenceRelatesTo[];

  /** Human-readable description (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Document security-tags (0..*) */
  securityLabel?: CodeableConcept[];

  /** Document referenced (1..*) */
  content?: DocumentReferenceContent[];

  override fhirType(): string {
    return 'DocumentReference';
  }

  /** FHIR JSON for this DocumentReference, typed as the plain `DocumentReference` data type. */
  override toJSON(): plainTypes.DocumentReference {
    return this.serialize() as plainTypes.DocumentReference;
  }

  /** Business identifiers for the document (0..*) Never undefined; an empty list is created when absent. */
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

  /** An explicitly assigned identifer of a variation of the content in the DocumentReference (0..1) */
  getVersion(): string | undefined {
    return this.version;
  }

  /** Sets `version`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setVersion(version: string | undefined): this {
    return this.setFieldValue('version', version);
  }

  hasVersion(): boolean {
    return this.hasFieldValue('version');
  }

  /** The element carrying the id and extensions of `version`. Created when absent. */
  getVersionElement(): Element {
    if (this._version === undefined) {
      this._version = new Element();
    }
    return this._version;
  }

  setVersionElement(versionElement: Element | undefined): this {
    this._version = versionElement;
    return this;
  }

  /** Procedure that caused this media to be created (0..*) Never undefined; an empty list is created when absent. */
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

  /** current | superseded | entered-in-error (1..1) */
  getStatus(): valueSetCodes.DocumentReferenceStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.DocumentReferenceStatus | undefined): this {
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

  /** registered | partial | preliminary | final | amended | corrected | appended | cancelled | entered-in-error | deprecated | unknown (0..1) */
  getDocStatus(): valueSetCodes.CompositionStatus | undefined {
    return this.docStatus;
  }

  /** Sets `docStatus`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setDocStatus(docStatus: valueSetCodes.CompositionStatus | undefined): this {
    return this.setFieldValue('docStatus', docStatus);
  }

  hasDocStatus(): boolean {
    return this.hasFieldValue('docStatus');
  }

  /** The element carrying the id and extensions of `docStatus`. Created when absent. */
  getDocStatusElement(): Element {
    if (this._docStatus === undefined) {
      this._docStatus = new Element();
    }
    return this._docStatus;
  }

  setDocStatusElement(docStatusElement: Element | undefined): this {
    this._docStatus = docStatusElement;
    return this;
  }

  /** Imaging modality used (0..*) Never undefined; an empty list is created when absent. */
  getModality(): CodeableConcept[] {
    if (this.modality === undefined) {
      this.modality = [];
    }
    return this.modality;
  }

  setModality(modality: CodeableConcept[] | undefined): this {
    return this.setFieldValue('modality', modality);
  }

  hasModality(): boolean {
    return this.hasFieldValue('modality');
  }

  /** Appends a new, empty CodeableConcept to `modality` and returns it so it can be filled in. */
  addModality(): CodeableConcept;
  /** Appends the given CodeableConcept to `modality` and returns this object for chaining. */
  addModality(codeableConcept: CodeableConcept): this;
  addModality(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('modality', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('modality', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `modality`. One is added when the list is empty. */
  getModalityFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getModality()[0];
    return firstCodeableConcept === undefined ? this.addModality() : firstCodeableConcept;
  }

  /** Kind of document (LOINC if possible) (0..1) Created when absent. */
  getType(): CodeableConcept {
    if (this.type === undefined) {
      this.type = new CodeableConcept();
    }
    return this.type;
  }

  setType(type: CodeableConcept | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Categorization of document (0..*) Never undefined; an empty list is created when absent. */
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

  /** Who/what is the subject of the document (0..1) Created when absent. */
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

  /** Context of the document content (0..*) Never undefined; an empty list is created when absent. */
  getContext(): Reference[] {
    if (this.context === undefined) {
      this.context = [];
    }
    return this.context;
  }

  setContext(context: Reference[] | undefined): this {
    return this.setFieldValue('context', context);
  }

  hasContext(): boolean {
    return this.hasFieldValue('context');
  }

  /** Appends a new, empty Reference to `context` and returns it so it can be filled in. */
  addContext(): Reference;
  /** Appends the given Reference to `context` and returns this object for chaining. */
  addContext(reference: Reference): this;
  addContext(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('context', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('context', createdReference);
    return createdReference;
  }

  /** The first Reference of `context`. One is added when the list is empty. */
  getContextFirstRep(): Reference {
    const firstReference = this.getContext()[0];
    return firstReference === undefined ? this.addContext() : firstReference;
  }

  /** Main clinical acts documented (0..*) Never undefined; an empty list is created when absent. */
  getEvent(): CodeableReference[] {
    if (this.event === undefined) {
      this.event = [];
    }
    return this.event;
  }

  setEvent(event: CodeableReference[] | undefined): this {
    return this.setFieldValue('event', event);
  }

  hasEvent(): boolean {
    return this.hasFieldValue('event');
  }

  /** Appends a new, empty CodeableReference to `event` and returns it so it can be filled in. */
  addEvent(): CodeableReference;
  /** Appends the given CodeableReference to `event` and returns this object for chaining. */
  addEvent(codeableReference: CodeableReference): this;
  addEvent(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('event', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('event', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `event`. One is added when the list is empty. */
  getEventFirstRep(): CodeableReference {
    const firstCodeableReference = this.getEvent()[0];
    return firstCodeableReference === undefined ? this.addEvent() : firstCodeableReference;
  }

  /** Body part included (0..*) Never undefined; an empty list is created when absent. */
  getBodySite(): CodeableReference[] {
    if (this.bodySite === undefined) {
      this.bodySite = [];
    }
    return this.bodySite;
  }

  setBodySite(bodySite: CodeableReference[] | undefined): this {
    return this.setFieldValue('bodySite', bodySite);
  }

  hasBodySite(): boolean {
    return this.hasFieldValue('bodySite');
  }

  /** Appends a new, empty CodeableReference to `bodySite` and returns it so it can be filled in. */
  addBodySite(): CodeableReference;
  /** Appends the given CodeableReference to `bodySite` and returns this object for chaining. */
  addBodySite(codeableReference: CodeableReference): this;
  addBodySite(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('bodySite', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('bodySite', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `bodySite`. One is added when the list is empty. */
  getBodySiteFirstRep(): CodeableReference {
    const firstCodeableReference = this.getBodySite()[0];
    return firstCodeableReference === undefined ? this.addBodySite() : firstCodeableReference;
  }

  /** Kind of facility where patient was seen (0..1) Created when absent. */
  getFacilityType(): CodeableConcept {
    if (this.facilityType === undefined) {
      this.facilityType = new CodeableConcept();
    }
    return this.facilityType;
  }

  setFacilityType(facilityType: CodeableConcept | undefined): this {
    return this.setFieldValue('facilityType', facilityType);
  }

  hasFacilityType(): boolean {
    return this.hasFieldValue('facilityType');
  }

  /** Additional details about where the content was created (e.g. clinical specialty) (0..1) Created when absent. */
  getPracticeSetting(): CodeableConcept {
    if (this.practiceSetting === undefined) {
      this.practiceSetting = new CodeableConcept();
    }
    return this.practiceSetting;
  }

  setPracticeSetting(practiceSetting: CodeableConcept | undefined): this {
    return this.setFieldValue('practiceSetting', practiceSetting);
  }

  hasPracticeSetting(): boolean {
    return this.hasFieldValue('practiceSetting');
  }

  /** Time of service that is being documented (0..1) Created when absent. */
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

  /** When this document reference was created (0..1) */
  getDate(): string | undefined {
    return this.date;
  }

  /** Sets `date`. Throws a FhirModelError when the value is not a valid FHIR instant. */
  setDate(date: string | undefined): this {
    return this.setFieldValue('date', date);
  }

  hasDate(): boolean {
    return this.hasFieldValue('date');
  }

  /** The element carrying the id and extensions of `date`. Created when absent. */
  getDateElement(): Element {
    if (this._date === undefined) {
      this._date = new Element();
    }
    return this._date;
  }

  setDateElement(dateElement: Element | undefined): this {
    this._date = dateElement;
    return this;
  }

  /** Who and/or what authored the document (0..*) Never undefined; an empty list is created when absent. */
  getAuthor(): Reference[] {
    if (this.author === undefined) {
      this.author = [];
    }
    return this.author;
  }

  setAuthor(author: Reference[] | undefined): this {
    return this.setFieldValue('author', author);
  }

  hasAuthor(): boolean {
    return this.hasFieldValue('author');
  }

  /** Appends a new, empty Reference to `author` and returns it so it can be filled in. */
  addAuthor(): Reference;
  /** Appends the given Reference to `author` and returns this object for chaining. */
  addAuthor(reference: Reference): this;
  addAuthor(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('author', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('author', createdReference);
    return createdReference;
  }

  /** The first Reference of `author`. One is added when the list is empty. */
  getAuthorFirstRep(): Reference {
    const firstReference = this.getAuthor()[0];
    return firstReference === undefined ? this.addAuthor() : firstReference;
  }

  /** Attests to accuracy of the document (0..*) Never undefined; an empty list is created when absent. */
  getAttester(): DocumentReferenceAttester[] {
    if (this.attester === undefined) {
      this.attester = [];
    }
    return this.attester;
  }

  setAttester(attester: DocumentReferenceAttester[] | undefined): this {
    return this.setFieldValue('attester', attester);
  }

  hasAttester(): boolean {
    return this.hasFieldValue('attester');
  }

  /** Appends a new, empty DocumentReferenceAttester to `attester` and returns it so it can be filled in. */
  addAttester(): DocumentReferenceAttester;
  /** Appends the given DocumentReferenceAttester to `attester` and returns this object for chaining. */
  addAttester(documentReferenceAttester: DocumentReferenceAttester): this;
  addAttester(
    documentReferenceAttester?: DocumentReferenceAttester
  ): DocumentReferenceAttester | this {
    if (documentReferenceAttester !== undefined) {
      return this.addFieldValue('attester', documentReferenceAttester);
    }
    const createdDocumentReferenceAttester = new DocumentReferenceAttester();
    this.addFieldValue('attester', createdDocumentReferenceAttester);
    return createdDocumentReferenceAttester;
  }

  /** The first DocumentReferenceAttester of `attester`. One is added when the list is empty. */
  getAttesterFirstRep(): DocumentReferenceAttester {
    const firstDocumentReferenceAttester = this.getAttester()[0];
    return firstDocumentReferenceAttester === undefined
      ? this.addAttester()
      : firstDocumentReferenceAttester;
  }

  /** Organization which maintains the document (0..1) Created when absent. */
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

  /** Relationships to other documents (0..*) Never undefined; an empty list is created when absent. */
  getRelatesTo(): DocumentReferenceRelatesTo[] {
    if (this.relatesTo === undefined) {
      this.relatesTo = [];
    }
    return this.relatesTo;
  }

  setRelatesTo(relatesTo: DocumentReferenceRelatesTo[] | undefined): this {
    return this.setFieldValue('relatesTo', relatesTo);
  }

  hasRelatesTo(): boolean {
    return this.hasFieldValue('relatesTo');
  }

  /** Appends a new, empty DocumentReferenceRelatesTo to `relatesTo` and returns it so it can be filled in. */
  addRelatesTo(): DocumentReferenceRelatesTo;
  /** Appends the given DocumentReferenceRelatesTo to `relatesTo` and returns this object for chaining. */
  addRelatesTo(documentReferenceRelatesTo: DocumentReferenceRelatesTo): this;
  addRelatesTo(
    documentReferenceRelatesTo?: DocumentReferenceRelatesTo
  ): DocumentReferenceRelatesTo | this {
    if (documentReferenceRelatesTo !== undefined) {
      return this.addFieldValue('relatesTo', documentReferenceRelatesTo);
    }
    const createdDocumentReferenceRelatesTo = new DocumentReferenceRelatesTo();
    this.addFieldValue('relatesTo', createdDocumentReferenceRelatesTo);
    return createdDocumentReferenceRelatesTo;
  }

  /** The first DocumentReferenceRelatesTo of `relatesTo`. One is added when the list is empty. */
  getRelatesToFirstRep(): DocumentReferenceRelatesTo {
    const firstDocumentReferenceRelatesTo = this.getRelatesTo()[0];
    return firstDocumentReferenceRelatesTo === undefined
      ? this.addRelatesTo()
      : firstDocumentReferenceRelatesTo;
  }

  /** Human-readable description (0..1) */
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

  /** Document security-tags (0..*) Never undefined; an empty list is created when absent. */
  getSecurityLabel(): CodeableConcept[] {
    if (this.securityLabel === undefined) {
      this.securityLabel = [];
    }
    return this.securityLabel;
  }

  setSecurityLabel(securityLabel: CodeableConcept[] | undefined): this {
    return this.setFieldValue('securityLabel', securityLabel);
  }

  hasSecurityLabel(): boolean {
    return this.hasFieldValue('securityLabel');
  }

  /** Appends a new, empty CodeableConcept to `securityLabel` and returns it so it can be filled in. */
  addSecurityLabel(): CodeableConcept;
  /** Appends the given CodeableConcept to `securityLabel` and returns this object for chaining. */
  addSecurityLabel(codeableConcept: CodeableConcept): this;
  addSecurityLabel(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('securityLabel', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('securityLabel', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `securityLabel`. One is added when the list is empty. */
  getSecurityLabelFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getSecurityLabel()[0];
    return firstCodeableConcept === undefined ? this.addSecurityLabel() : firstCodeableConcept;
  }

  /** Document referenced (1..*) Never undefined; an empty list is created when absent. */
  getContent(): DocumentReferenceContent[] {
    if (this.content === undefined) {
      this.content = [];
    }
    return this.content;
  }

  setContent(content: DocumentReferenceContent[] | undefined): this {
    return this.setFieldValue('content', content);
  }

  hasContent(): boolean {
    return this.hasFieldValue('content');
  }

  /** Appends a new, empty DocumentReferenceContent to `content` and returns it so it can be filled in. */
  addContent(): DocumentReferenceContent;
  /** Appends the given DocumentReferenceContent to `content` and returns this object for chaining. */
  addContent(documentReferenceContent: DocumentReferenceContent): this;
  addContent(documentReferenceContent?: DocumentReferenceContent): DocumentReferenceContent | this {
    if (documentReferenceContent !== undefined) {
      return this.addFieldValue('content', documentReferenceContent);
    }
    const createdDocumentReferenceContent = new DocumentReferenceContent();
    this.addFieldValue('content', createdDocumentReferenceContent);
    return createdDocumentReferenceContent;
  }

  /** The first DocumentReferenceContent of `content`. One is added when the list is empty. */
  getContentFirstRep(): DocumentReferenceContent {
    const firstDocumentReferenceContent = this.getContent()[0];
    return firstDocumentReferenceContent === undefined
      ? this.addContent()
      : firstDocumentReferenceContent;
  }
}

modelTypeRegistry.register('DocumentReference', DocumentReference, true);

/** True when the value is a DocumentReference model instance. */
export function isDocumentReference(candidate: unknown): candidate is DocumentReference {
  return candidate instanceof DocumentReference;
}

/**
 * Attests to accuracy of the document
 */
export class DocumentReferenceAttester extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'mode',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'mode', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'time',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'time', typeCode: 'dateTime' }],
    },
    {
      elementName: 'party',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'party',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Organization',
            'Patient',
            'Practitioner',
            'PractitionerRole',
            'RelatedPerson',
          ],
        },
      ],
    },
  ];

  /** personal | professional | legal | official (1..1) */
  mode?: CodeableConcept;

  /** When the document was attested (0..1) */
  time?: string;
  /** Id and extensions of the primitive `time`. */
  _time?: Element;

  /** Who attested the document (0..1) */
  party?: Reference;

  override fhirType(): string {
    return 'DocumentReference.attester';
  }

  /** FHIR JSON for this DocumentReferenceAttester, typed as the plain `DocumentReferenceAttester` data type. */
  override toJSON(): plainTypes.DocumentReferenceAttester {
    return this.serialize() as plainTypes.DocumentReferenceAttester;
  }

  /** personal | professional | legal | official (1..1) Created when absent. */
  getMode(): CodeableConcept {
    if (this.mode === undefined) {
      this.mode = new CodeableConcept();
    }
    return this.mode;
  }

  setMode(mode: CodeableConcept | undefined): this {
    return this.setFieldValue('mode', mode);
  }

  hasMode(): boolean {
    return this.hasFieldValue('mode');
  }

  /** When the document was attested (0..1) */
  getTime(): string | undefined {
    return this.time;
  }

  /** Sets `time`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setTime(time: string | undefined): this {
    return this.setFieldValue('time', time);
  }

  hasTime(): boolean {
    return this.hasFieldValue('time');
  }

  /** The element carrying the id and extensions of `time`. Created when absent. */
  getTimeElement(): Element {
    if (this._time === undefined) {
      this._time = new Element();
    }
    return this._time;
  }

  setTimeElement(timeElement: Element | undefined): this {
    this._time = timeElement;
    return this;
  }

  /** Who attested the document (0..1) Created when absent. */
  getParty(): Reference {
    if (this.party === undefined) {
      this.party = new Reference();
    }
    return this.party;
  }

  setParty(party: Reference | undefined): this {
    return this.setFieldValue('party', party);
  }

  hasParty(): boolean {
    return this.hasFieldValue('party');
  }
}

modelTypeRegistry.register('DocumentReferenceAttester', DocumentReferenceAttester, false);

/**
 * Relationships to other documents
 */
export class DocumentReferenceRelatesTo extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'target',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'target', typeCode: 'Reference', targetResourceTypes: ['DocumentReference'] },
      ],
    },
  ];

  /** The relationship type with another document (1..1) */
  code?: CodeableConcept;

  /** Target of the relationship (1..1) */
  target?: Reference;

  override fhirType(): string {
    return 'DocumentReference.relatesTo';
  }

  /** FHIR JSON for this DocumentReferenceRelatesTo, typed as the plain `DocumentReferenceRelatesTo` data type. */
  override toJSON(): plainTypes.DocumentReferenceRelatesTo {
    return this.serialize() as plainTypes.DocumentReferenceRelatesTo;
  }

  /** The relationship type with another document (1..1) Created when absent. */
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

  /** Target of the relationship (1..1) Created when absent. */
  getTarget(): Reference {
    if (this.target === undefined) {
      this.target = new Reference();
    }
    return this.target;
  }

  setTarget(target: Reference | undefined): this {
    return this.setFieldValue('target', target);
  }

  hasTarget(): boolean {
    return this.hasFieldValue('target');
  }
}

modelTypeRegistry.register('DocumentReferenceRelatesTo', DocumentReferenceRelatesTo, false);

/**
 * Document referenced
 */
export class DocumentReferenceContent extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'attachment',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'attachment', typeCode: 'Attachment' }],
    },
    {
      elementName: 'profile',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'profile', typeCode: 'DocumentReferenceContentProfile' }],
    },
  ];

  /** Where to access the document (1..1) */
  attachment?: Attachment;

  /** Content profile rules for the document (0..*) */
  profile?: DocumentReferenceContentProfile[];

  override fhirType(): string {
    return 'DocumentReference.content';
  }

  /** FHIR JSON for this DocumentReferenceContent, typed as the plain `DocumentReferenceContent` data type. */
  override toJSON(): plainTypes.DocumentReferenceContent {
    return this.serialize() as plainTypes.DocumentReferenceContent;
  }

  /** Where to access the document (1..1) Created when absent. */
  getAttachment(): Attachment {
    if (this.attachment === undefined) {
      this.attachment = new Attachment();
    }
    return this.attachment;
  }

  setAttachment(attachment: Attachment | undefined): this {
    return this.setFieldValue('attachment', attachment);
  }

  hasAttachment(): boolean {
    return this.hasFieldValue('attachment');
  }

  /** Content profile rules for the document (0..*) Never undefined; an empty list is created when absent. */
  getProfile(): DocumentReferenceContentProfile[] {
    if (this.profile === undefined) {
      this.profile = [];
    }
    return this.profile;
  }

  setProfile(profile: DocumentReferenceContentProfile[] | undefined): this {
    return this.setFieldValue('profile', profile);
  }

  hasProfile(): boolean {
    return this.hasFieldValue('profile');
  }

  /** Appends a new, empty DocumentReferenceContentProfile to `profile` and returns it so it can be filled in. */
  addProfile(): DocumentReferenceContentProfile;
  /** Appends the given DocumentReferenceContentProfile to `profile` and returns this object for chaining. */
  addProfile(documentReferenceContentProfile: DocumentReferenceContentProfile): this;
  addProfile(
    documentReferenceContentProfile?: DocumentReferenceContentProfile
  ): DocumentReferenceContentProfile | this {
    if (documentReferenceContentProfile !== undefined) {
      return this.addFieldValue('profile', documentReferenceContentProfile);
    }
    const createdDocumentReferenceContentProfile = new DocumentReferenceContentProfile();
    this.addFieldValue('profile', createdDocumentReferenceContentProfile);
    return createdDocumentReferenceContentProfile;
  }

  /** The first DocumentReferenceContentProfile of `profile`. One is added when the list is empty. */
  getProfileFirstRep(): DocumentReferenceContentProfile {
    const firstDocumentReferenceContentProfile = this.getProfile()[0];
    return firstDocumentReferenceContentProfile === undefined
      ? this.addProfile()
      : firstDocumentReferenceContentProfile;
  }
}

modelTypeRegistry.register('DocumentReferenceContent', DocumentReferenceContent, false);

/**
 * Content profile rules for the document
 */
export class DocumentReferenceContentProfile extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'value',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'valueCoding', typeCode: 'Coding' },
        { jsonKey: 'valueUri', typeCode: 'uri' },
        { jsonKey: 'valueCanonical', typeCode: 'canonical' },
      ],
    },
  ];

  /** Code|uri|canonical (1..1) */
  valueCoding?: Coding;
  /** Code|uri|canonical (1..1) */
  valueUri?: string;
  /** Id and extensions of the primitive `valueUri`. */
  _valueUri?: Element;
  /** Code|uri|canonical (1..1) */
  valueCanonical?: string;
  /** Id and extensions of the primitive `valueCanonical`. */
  _valueCanonical?: Element;

  override fhirType(): string {
    return 'DocumentReference.content.profile';
  }

  /** FHIR JSON for this DocumentReferenceContentProfile, typed as the plain `DocumentReferenceProfile` data type. */
  override toJSON(): plainTypes.DocumentReferenceProfile {
    return this.serialize() as plainTypes.DocumentReferenceProfile;
  }

  /** Code|uri|canonical (1..1) Whichever type of `value[x]` is set. */
  getValue(): Coding | string | undefined {
    return this.getChoiceValue<Coding | string>('value');
  }

  /** True when any type of `value[x]` is set. */
  hasValue(): boolean {
    return this.hasChoiceValue('value');
  }

  getValueCoding(): Coding | undefined {
    return this.valueCoding;
  }

  /** Sets `value[x]` as Coding and clears every other type of it. */
  setValueCoding(valueCoding: Coding | undefined): this {
    return this.setFieldValue('valueCoding', valueCoding);
  }

  hasValueCoding(): boolean {
    return this.hasFieldValue('valueCoding');
  }

  getValueUri(): string | undefined {
    return this.valueUri;
  }

  /** Sets `value[x]` as uri and clears every other type of it. */
  setValueUri(valueUri: string | undefined): this {
    return this.setFieldValue('valueUri', valueUri);
  }

  hasValueUri(): boolean {
    return this.hasFieldValue('valueUri');
  }

  getValueCanonical(): string | undefined {
    return this.valueCanonical;
  }

  /** Sets `value[x]` as canonical and clears every other type of it. */
  setValueCanonical(valueCanonical: string | undefined): this {
    return this.setFieldValue('valueCanonical', valueCanonical);
  }

  hasValueCanonical(): boolean {
    return this.hasFieldValue('valueCanonical');
  }
}

modelTypeRegistry.register(
  'DocumentReferenceContentProfile',
  DocumentReferenceContentProfile,
  false
);
