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
import { Narrative } from './narrative';
import { Period } from './period';
import { Reference } from './reference';
import { RelatedArtifact } from './relatedArtifact';
import { UsageContext } from './usageContext';

/**
 * A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.).
 */
export class Composition extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'url',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'url', typeCode: 'uri' }],
    },
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
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.CompositionStatus },
      ],
    },
    {
      elementName: 'type',
      minimum: 1,
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
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'subject', typeCode: 'Reference' }],
    },
    {
      elementName: 'encounter',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'encounter', typeCode: 'Reference', targetResourceTypes: ['Encounter'] }],
    },
    {
      elementName: 'date',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'date', typeCode: 'dateTime' }],
    },
    {
      elementName: 'useContext',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'useContext', typeCode: 'UsageContext' }],
    },
    {
      elementName: 'author',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'author',
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
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'title',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'title', typeCode: 'string' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
    {
      elementName: 'attester',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'attester', typeCode: 'CompositionAttester' }],
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
      types: [{ jsonKey: 'relatesTo', typeCode: 'RelatedArtifact' }],
    },
    {
      elementName: 'event',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'event', typeCode: 'CompositionEvent' }],
    },
    {
      elementName: 'section',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'section', typeCode: 'CompositionSection' }],
    },
  ];

  readonly resourceType = 'Composition';

  /** Canonical identifier for this Composition, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Version-independent identifier for the Composition (0..*) */
  identifier?: Identifier[];

  /** An explicitly assigned identifer of a variation of the content in the Composition (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** registered | partial | preliminary | final | amended | corrected | appended | cancelled | entered-in-error | deprecated | unknown (1..1) */
  status?: valueSetCodes.CompositionStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Kind of composition (LOINC if possible) (1..1) */
  type?: CodeableConcept;

  /** Categorization of Composition (0..*) */
  category?: CodeableConcept[];

  /** Who and/or what the composition is about (0..*) */
  subject?: Reference[];

  /** Context of the Composition (0..1) */
  encounter?: Reference;

  /** Composition editing time (1..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** The context that the content is intended to support (0..*) */
  useContext?: UsageContext[];

  /** Who and/or what authored the composition (1..*) */
  author?: Reference[];

  /** Name for this Composition (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Human Readable name/title (1..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

  /** For any additional notes (0..*) */
  note?: Annotation[];

  /** Attests to accuracy of composition (0..*) */
  attester?: CompositionAttester[];

  /** Organization which maintains the composition (0..1) */
  custodian?: Reference;

  /** Relationships to other compositions/documents (0..*) */
  relatesTo?: RelatedArtifact[];

  /** The clinical service(s) being documented (0..*) */
  event?: CompositionEvent[];

  /** Composition is broken into sections (0..*) */
  section?: CompositionSection[];

  override fhirType(): string {
    return 'Composition';
  }

  /** FHIR JSON for this Composition, typed as the plain `Composition` data type. */
  override toJSON(): plainTypes.Composition {
    return this.serialize() as plainTypes.Composition;
  }

  /** Canonical identifier for this Composition, represented as a URI (globally unique) (0..1) */
  getUrl(): string | undefined {
    return this.url;
  }

  /** Sets `url`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setUrl(url: string | undefined): this {
    return this.setFieldValue('url', url);
  }

  hasUrl(): boolean {
    return this.hasFieldValue('url');
  }

  /** The element carrying the id and extensions of `url`. Created when absent. */
  getUrlElement(): Element {
    if (this._url === undefined) {
      this._url = new Element();
    }
    return this._url;
  }

  setUrlElement(urlElement: Element | undefined): this {
    this._url = urlElement;
    return this;
  }

  /** Version-independent identifier for the Composition (0..*) Never undefined; an empty list is created when absent. */
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

  /** An explicitly assigned identifer of a variation of the content in the Composition (0..1) */
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

  /** registered | partial | preliminary | final | amended | corrected | appended | cancelled | entered-in-error | deprecated | unknown (1..1) */
  getStatus(): valueSetCodes.CompositionStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.CompositionStatus | undefined): this {
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

  /** Kind of composition (LOINC if possible) (1..1) Created when absent. */
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

  /** Categorization of Composition (0..*) Never undefined; an empty list is created when absent. */
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

  /** Who and/or what the composition is about (0..*) Never undefined; an empty list is created when absent. */
  getSubject(): Reference[] {
    if (this.subject === undefined) {
      this.subject = [];
    }
    return this.subject;
  }

  setSubject(subject: Reference[] | undefined): this {
    return this.setFieldValue('subject', subject);
  }

  hasSubject(): boolean {
    return this.hasFieldValue('subject');
  }

  /** Appends a new, empty Reference to `subject` and returns it so it can be filled in. */
  addSubject(): Reference;
  /** Appends the given Reference to `subject` and returns this object for chaining. */
  addSubject(reference: Reference): this;
  addSubject(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('subject', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('subject', createdReference);
    return createdReference;
  }

  /** The first Reference of `subject`. One is added when the list is empty. */
  getSubjectFirstRep(): Reference {
    const firstReference = this.getSubject()[0];
    return firstReference === undefined ? this.addSubject() : firstReference;
  }

  /** Context of the Composition (0..1) Created when absent. */
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

  /** Composition editing time (1..1) */
  getDate(): string | undefined {
    return this.date;
  }

  /** Sets `date`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
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

  /** The context that the content is intended to support (0..*) Never undefined; an empty list is created when absent. */
  getUseContext(): UsageContext[] {
    if (this.useContext === undefined) {
      this.useContext = [];
    }
    return this.useContext;
  }

  setUseContext(useContext: UsageContext[] | undefined): this {
    return this.setFieldValue('useContext', useContext);
  }

  hasUseContext(): boolean {
    return this.hasFieldValue('useContext');
  }

  /** Appends a new, empty UsageContext to `useContext` and returns it so it can be filled in. */
  addUseContext(): UsageContext;
  /** Appends the given UsageContext to `useContext` and returns this object for chaining. */
  addUseContext(usageContext: UsageContext): this;
  addUseContext(usageContext?: UsageContext): UsageContext | this {
    if (usageContext !== undefined) {
      return this.addFieldValue('useContext', usageContext);
    }
    const createdUsageContext = new UsageContext();
    this.addFieldValue('useContext', createdUsageContext);
    return createdUsageContext;
  }

  /** The first UsageContext of `useContext`. One is added when the list is empty. */
  getUseContextFirstRep(): UsageContext {
    const firstUsageContext = this.getUseContext()[0];
    return firstUsageContext === undefined ? this.addUseContext() : firstUsageContext;
  }

  /** Who and/or what authored the composition (1..*) Never undefined; an empty list is created when absent. */
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

  /** Name for this Composition (computer friendly) (0..1) */
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

  /** Human Readable name/title (1..1) */
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

  /** For any additional notes (0..*) Never undefined; an empty list is created when absent. */
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

  /** Attests to accuracy of composition (0..*) Never undefined; an empty list is created when absent. */
  getAttester(): CompositionAttester[] {
    if (this.attester === undefined) {
      this.attester = [];
    }
    return this.attester;
  }

  setAttester(attester: CompositionAttester[] | undefined): this {
    return this.setFieldValue('attester', attester);
  }

  hasAttester(): boolean {
    return this.hasFieldValue('attester');
  }

  /** Appends a new, empty CompositionAttester to `attester` and returns it so it can be filled in. */
  addAttester(): CompositionAttester;
  /** Appends the given CompositionAttester to `attester` and returns this object for chaining. */
  addAttester(compositionAttester: CompositionAttester): this;
  addAttester(compositionAttester?: CompositionAttester): CompositionAttester | this {
    if (compositionAttester !== undefined) {
      return this.addFieldValue('attester', compositionAttester);
    }
    const createdCompositionAttester = new CompositionAttester();
    this.addFieldValue('attester', createdCompositionAttester);
    return createdCompositionAttester;
  }

  /** The first CompositionAttester of `attester`. One is added when the list is empty. */
  getAttesterFirstRep(): CompositionAttester {
    const firstCompositionAttester = this.getAttester()[0];
    return firstCompositionAttester === undefined ? this.addAttester() : firstCompositionAttester;
  }

  /** Organization which maintains the composition (0..1) Created when absent. */
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

  /** Relationships to other compositions/documents (0..*) Never undefined; an empty list is created when absent. */
  getRelatesTo(): RelatedArtifact[] {
    if (this.relatesTo === undefined) {
      this.relatesTo = [];
    }
    return this.relatesTo;
  }

  setRelatesTo(relatesTo: RelatedArtifact[] | undefined): this {
    return this.setFieldValue('relatesTo', relatesTo);
  }

  hasRelatesTo(): boolean {
    return this.hasFieldValue('relatesTo');
  }

  /** Appends a new, empty RelatedArtifact to `relatesTo` and returns it so it can be filled in. */
  addRelatesTo(): RelatedArtifact;
  /** Appends the given RelatedArtifact to `relatesTo` and returns this object for chaining. */
  addRelatesTo(relatedArtifact: RelatedArtifact): this;
  addRelatesTo(relatedArtifact?: RelatedArtifact): RelatedArtifact | this {
    if (relatedArtifact !== undefined) {
      return this.addFieldValue('relatesTo', relatedArtifact);
    }
    const createdRelatedArtifact = new RelatedArtifact();
    this.addFieldValue('relatesTo', createdRelatedArtifact);
    return createdRelatedArtifact;
  }

  /** The first RelatedArtifact of `relatesTo`. One is added when the list is empty. */
  getRelatesToFirstRep(): RelatedArtifact {
    const firstRelatedArtifact = this.getRelatesTo()[0];
    return firstRelatedArtifact === undefined ? this.addRelatesTo() : firstRelatedArtifact;
  }

  /** The clinical service(s) being documented (0..*) Never undefined; an empty list is created when absent. */
  getEvent(): CompositionEvent[] {
    if (this.event === undefined) {
      this.event = [];
    }
    return this.event;
  }

  setEvent(event: CompositionEvent[] | undefined): this {
    return this.setFieldValue('event', event);
  }

  hasEvent(): boolean {
    return this.hasFieldValue('event');
  }

  /** Appends a new, empty CompositionEvent to `event` and returns it so it can be filled in. */
  addEvent(): CompositionEvent;
  /** Appends the given CompositionEvent to `event` and returns this object for chaining. */
  addEvent(compositionEvent: CompositionEvent): this;
  addEvent(compositionEvent?: CompositionEvent): CompositionEvent | this {
    if (compositionEvent !== undefined) {
      return this.addFieldValue('event', compositionEvent);
    }
    const createdCompositionEvent = new CompositionEvent();
    this.addFieldValue('event', createdCompositionEvent);
    return createdCompositionEvent;
  }

  /** The first CompositionEvent of `event`. One is added when the list is empty. */
  getEventFirstRep(): CompositionEvent {
    const firstCompositionEvent = this.getEvent()[0];
    return firstCompositionEvent === undefined ? this.addEvent() : firstCompositionEvent;
  }

  /** Composition is broken into sections (0..*) Never undefined; an empty list is created when absent. */
  getSection(): CompositionSection[] {
    if (this.section === undefined) {
      this.section = [];
    }
    return this.section;
  }

  setSection(section: CompositionSection[] | undefined): this {
    return this.setFieldValue('section', section);
  }

  hasSection(): boolean {
    return this.hasFieldValue('section');
  }

  /** Appends a new, empty CompositionSection to `section` and returns it so it can be filled in. */
  addSection(): CompositionSection;
  /** Appends the given CompositionSection to `section` and returns this object for chaining. */
  addSection(compositionSection: CompositionSection): this;
  addSection(compositionSection?: CompositionSection): CompositionSection | this {
    if (compositionSection !== undefined) {
      return this.addFieldValue('section', compositionSection);
    }
    const createdCompositionSection = new CompositionSection();
    this.addFieldValue('section', createdCompositionSection);
    return createdCompositionSection;
  }

  /** The first CompositionSection of `section`. One is added when the list is empty. */
  getSectionFirstRep(): CompositionSection {
    const firstCompositionSection = this.getSection()[0];
    return firstCompositionSection === undefined ? this.addSection() : firstCompositionSection;
  }
}

modelTypeRegistry.register('Composition', Composition, true);

/** True when the value is a Composition model instance. */
export function isComposition(candidate: unknown): candidate is Composition {
  return candidate instanceof Composition;
}

/**
 * Attests to accuracy of composition
 */
export class CompositionAttester extends BackboneElement {
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

  /** When the composition was attested (0..1) */
  time?: string;
  /** Id and extensions of the primitive `time`. */
  _time?: Element;

  /** Who attested the composition (0..1) */
  party?: Reference;

  override fhirType(): string {
    return 'Composition.attester';
  }

  /** FHIR JSON for this CompositionAttester, typed as the plain `CompositionAttester` data type. */
  override toJSON(): plainTypes.CompositionAttester {
    return this.serialize() as plainTypes.CompositionAttester;
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

  /** When the composition was attested (0..1) */
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

  /** Who attested the composition (0..1) Created when absent. */
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

modelTypeRegistry.register('CompositionAttester', CompositionAttester, false);

/**
 * The clinical service(s) being documented
 */
export class CompositionEvent extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
    {
      elementName: 'detail',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'detail', typeCode: 'CodeableReference' }],
    },
  ];

  /** The period covered by the documentation (0..1) */
  period?: Period;

  /** The event(s) being documented, as code(s), reference(s), or both (0..*) */
  detail?: CodeableReference[];

  override fhirType(): string {
    return 'Composition.event';
  }

  /** FHIR JSON for this CompositionEvent, typed as the plain `CompositionEvent` data type. */
  override toJSON(): plainTypes.CompositionEvent {
    return this.serialize() as plainTypes.CompositionEvent;
  }

  /** The period covered by the documentation (0..1) Created when absent. */
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

  /** The event(s) being documented, as code(s), reference(s), or both (0..*) Never undefined; an empty list is created when absent. */
  getDetail(): CodeableReference[] {
    if (this.detail === undefined) {
      this.detail = [];
    }
    return this.detail;
  }

  setDetail(detail: CodeableReference[] | undefined): this {
    return this.setFieldValue('detail', detail);
  }

  hasDetail(): boolean {
    return this.hasFieldValue('detail');
  }

  /** Appends a new, empty CodeableReference to `detail` and returns it so it can be filled in. */
  addDetail(): CodeableReference;
  /** Appends the given CodeableReference to `detail` and returns this object for chaining. */
  addDetail(codeableReference: CodeableReference): this;
  addDetail(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('detail', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('detail', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `detail`. One is added when the list is empty. */
  getDetailFirstRep(): CodeableReference {
    const firstCodeableReference = this.getDetail()[0];
    return firstCodeableReference === undefined ? this.addDetail() : firstCodeableReference;
  }
}

modelTypeRegistry.register('CompositionEvent', CompositionEvent, false);

/**
 * Composition is broken into sections
 */
export class CompositionSection extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'title',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'title', typeCode: 'string' }],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
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
      elementName: 'focus',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'focus', typeCode: 'Reference' }],
    },
    {
      elementName: 'text',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'text', typeCode: 'Narrative' }],
    },
    {
      elementName: 'orderedBy',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'orderedBy', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'entry',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'entry', typeCode: 'Reference' }],
    },
    {
      elementName: 'emptyReason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'emptyReason', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'section',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'section', typeCode: 'CompositionSection' }],
    },
  ];

  /** Label for section (e.g. for ToC) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

  /** Classification of section (recommended) (0..1) */
  code?: CodeableConcept;

  /** Who and/or what authored the section (0..*) */
  author?: Reference[];

  /** Who/what the section is about, when it is not about the subject of composition (0..1) */
  focus?: Reference;

  /** Text summary of the section, for human interpretation (0..1) */
  text?: Narrative;

  /** Order of section entries (0..1) */
  orderedBy?: CodeableConcept;

  /** A reference to data that supports this section (0..*) */
  entry?: Reference[];

  /** Why the section is empty (0..1) */
  emptyReason?: CodeableConcept;

  /** Nested Section (0..*) */
  section?: CompositionSection[];

  override fhirType(): string {
    return 'Composition.section';
  }

  /** FHIR JSON for this CompositionSection, typed as the plain `CompositionSection` data type. */
  override toJSON(): plainTypes.CompositionSection {
    return this.serialize() as plainTypes.CompositionSection;
  }

  /** Label for section (e.g. for ToC) (0..1) */
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

  /** Classification of section (recommended) (0..1) Created when absent. */
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

  /** Who and/or what authored the section (0..*) Never undefined; an empty list is created when absent. */
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

  /** Who/what the section is about, when it is not about the subject of composition (0..1) Created when absent. */
  getFocus(): Reference {
    if (this.focus === undefined) {
      this.focus = new Reference();
    }
    return this.focus;
  }

  setFocus(focus: Reference | undefined): this {
    return this.setFieldValue('focus', focus);
  }

  hasFocus(): boolean {
    return this.hasFieldValue('focus');
  }

  /** Text summary of the section, for human interpretation (0..1) Created when absent. */
  getText(): Narrative {
    if (this.text === undefined) {
      this.text = new Narrative();
    }
    return this.text;
  }

  setText(text: Narrative | undefined): this {
    return this.setFieldValue('text', text);
  }

  hasText(): boolean {
    return this.hasFieldValue('text');
  }

  /** Order of section entries (0..1) Created when absent. */
  getOrderedBy(): CodeableConcept {
    if (this.orderedBy === undefined) {
      this.orderedBy = new CodeableConcept();
    }
    return this.orderedBy;
  }

  setOrderedBy(orderedBy: CodeableConcept | undefined): this {
    return this.setFieldValue('orderedBy', orderedBy);
  }

  hasOrderedBy(): boolean {
    return this.hasFieldValue('orderedBy');
  }

  /** A reference to data that supports this section (0..*) Never undefined; an empty list is created when absent. */
  getEntry(): Reference[] {
    if (this.entry === undefined) {
      this.entry = [];
    }
    return this.entry;
  }

  setEntry(entry: Reference[] | undefined): this {
    return this.setFieldValue('entry', entry);
  }

  hasEntry(): boolean {
    return this.hasFieldValue('entry');
  }

  /** Appends a new, empty Reference to `entry` and returns it so it can be filled in. */
  addEntry(): Reference;
  /** Appends the given Reference to `entry` and returns this object for chaining. */
  addEntry(reference: Reference): this;
  addEntry(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('entry', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('entry', createdReference);
    return createdReference;
  }

  /** The first Reference of `entry`. One is added when the list is empty. */
  getEntryFirstRep(): Reference {
    const firstReference = this.getEntry()[0];
    return firstReference === undefined ? this.addEntry() : firstReference;
  }

  /** Why the section is empty (0..1) Created when absent. */
  getEmptyReason(): CodeableConcept {
    if (this.emptyReason === undefined) {
      this.emptyReason = new CodeableConcept();
    }
    return this.emptyReason;
  }

  setEmptyReason(emptyReason: CodeableConcept | undefined): this {
    return this.setFieldValue('emptyReason', emptyReason);
  }

  hasEmptyReason(): boolean {
    return this.hasFieldValue('emptyReason');
  }

  /** Nested Section (0..*) Never undefined; an empty list is created when absent. */
  getSection(): CompositionSection[] {
    if (this.section === undefined) {
      this.section = [];
    }
    return this.section;
  }

  setSection(section: CompositionSection[] | undefined): this {
    return this.setFieldValue('section', section);
  }

  hasSection(): boolean {
    return this.hasFieldValue('section');
  }

  /** Appends a new, empty CompositionSection to `section` and returns it so it can be filled in. */
  addSection(): CompositionSection;
  /** Appends the given CompositionSection to `section` and returns this object for chaining. */
  addSection(compositionSection: CompositionSection): this;
  addSection(compositionSection?: CompositionSection): CompositionSection | this {
    if (compositionSection !== undefined) {
      return this.addFieldValue('section', compositionSection);
    }
    const createdCompositionSection = new CompositionSection();
    this.addFieldValue('section', createdCompositionSection);
    return createdCompositionSection;
  }

  /** The first CompositionSection of `section`. One is added when the list is empty. */
  getSectionFirstRep(): CompositionSection {
    const firstCompositionSection = this.getSection()[0];
    return firstCompositionSection === undefined ? this.addSection() : firstCompositionSection;
  }
}

modelTypeRegistry.register('CompositionSection', CompositionSection, false);
