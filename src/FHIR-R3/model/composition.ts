/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Narrative } from './narrative';
import { Period } from './period';
import { Reference } from './reference';

/**
 * Base StructureDefinition for Composition Resource
 */
export class Composition extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
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
      elementName: 'class',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'class', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'subject',
      minimum: 1,
      maximum: 1,
      isList: false,
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
      elementName: 'author',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'author',
          typeCode: 'Reference',
          targetResourceTypes: ['Device', 'Patient', 'Practitioner', 'RelatedPerson'],
        },
      ],
    },
    {
      elementName: 'title',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'title', typeCode: 'string' }],
    },
    {
      elementName: 'confidentiality',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'confidentiality',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ConfidentialityClassification,
        },
      ],
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
      types: [{ jsonKey: 'relatesTo', typeCode: 'CompositionRelatesTo' }],
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

  /** Logical identifier of composition (version-independent) (0..1) */
  identifier?: Identifier;

  /** preliminary | final | amended | entered-in-error (1..1) */
  status?: valueSetCodes.CompositionStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Kind of composition (LOINC if possible) (1..1) */
  type?: CodeableConcept;

  /** Categorization of Composition (0..1) */
  class?: CodeableConcept;

  /** Who and/or what the composition is about (1..1) */
  subject?: Reference;

  /** Context of the Composition (0..1) */
  encounter?: Reference;

  /** Composition editing time (1..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Who and/or what authored the composition (1..*) */
  author?: Reference[];

  /** Human Readable name/title (1..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

  /** As defined by affinity domain (0..1) */
  confidentiality?: valueSetCodes.ConfidentialityClassification;
  /** Id and extensions of the primitive `confidentiality`. */
  _confidentiality?: Element;

  /** Attests to accuracy of composition (0..*) */
  attester?: CompositionAttester[];

  /** Organization which maintains the composition (0..1) */
  custodian?: Reference;

  /** Relationships to other compositions/documents (0..*) */
  relatesTo?: CompositionRelatesTo[];

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

  /** Logical identifier of composition (version-independent) (0..1) Created when absent. */
  getIdentifier(): Identifier {
    if (this.identifier === undefined) {
      this.identifier = new Identifier();
    }
    return this.identifier;
  }

  setIdentifier(identifier: Identifier | undefined): this {
    return this.setFieldValue('identifier', identifier);
  }

  hasIdentifier(): boolean {
    return this.hasFieldValue('identifier');
  }

  /** preliminary | final | amended | entered-in-error (1..1) */
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

  /** Categorization of Composition (0..1) Created when absent. */
  getClass(): CodeableConcept {
    if (this.class === undefined) {
      this.class = new CodeableConcept();
    }
    return this.class;
  }

  setClass(classValue: CodeableConcept | undefined): this {
    return this.setFieldValue('class', classValue);
  }

  hasClass(): boolean {
    return this.hasFieldValue('class');
  }

  /** Who and/or what the composition is about (1..1) Created when absent. */
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

  /** As defined by affinity domain (0..1) */
  getConfidentiality(): valueSetCodes.ConfidentialityClassification | undefined {
    return this.confidentiality;
  }

  /** Sets `confidentiality`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setConfidentiality(
    confidentiality: valueSetCodes.ConfidentialityClassification | undefined
  ): this {
    return this.setFieldValue('confidentiality', confidentiality);
  }

  hasConfidentiality(): boolean {
    return this.hasFieldValue('confidentiality');
  }

  /** The element carrying the id and extensions of `confidentiality`. Created when absent. */
  getConfidentialityElement(): Element {
    if (this._confidentiality === undefined) {
      this._confidentiality = new Element();
    }
    return this._confidentiality;
  }

  setConfidentialityElement(confidentialityElement: Element | undefined): this {
    this._confidentiality = confidentialityElement;
    return this;
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
  getRelatesTo(): CompositionRelatesTo[] {
    if (this.relatesTo === undefined) {
      this.relatesTo = [];
    }
    return this.relatesTo;
  }

  setRelatesTo(relatesTo: CompositionRelatesTo[] | undefined): this {
    return this.setFieldValue('relatesTo', relatesTo);
  }

  hasRelatesTo(): boolean {
    return this.hasFieldValue('relatesTo');
  }

  /** Appends a new, empty CompositionRelatesTo to `relatesTo` and returns it so it can be filled in. */
  addRelatesTo(): CompositionRelatesTo;
  /** Appends the given CompositionRelatesTo to `relatesTo` and returns this object for chaining. */
  addRelatesTo(compositionRelatesTo: CompositionRelatesTo): this;
  addRelatesTo(compositionRelatesTo?: CompositionRelatesTo): CompositionRelatesTo | this {
    if (compositionRelatesTo !== undefined) {
      return this.addFieldValue('relatesTo', compositionRelatesTo);
    }
    const createdCompositionRelatesTo = new CompositionRelatesTo();
    this.addFieldValue('relatesTo', createdCompositionRelatesTo);
    return createdCompositionRelatesTo;
  }

  /** The first CompositionRelatesTo of `relatesTo`. One is added when the list is empty. */
  getRelatesToFirstRep(): CompositionRelatesTo {
    const firstCompositionRelatesTo = this.getRelatesTo()[0];
    return firstCompositionRelatesTo === undefined
      ? this.addRelatesTo()
      : firstCompositionRelatesTo;
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
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'mode',
          typeCode: 'code',
          allowedCodes: valueSetCodes.CompositionAttestationMode,
        },
      ],
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
          targetResourceTypes: ['Organization', 'Patient', 'Practitioner'],
        },
      ],
    },
  ];

  /** personal | professional | legal | official (1..*) */
  mode?: valueSetCodes.CompositionAttestationMode[];
  /** Id and extensions of the primitive `mode`. */
  _mode?: (Element | null)[];

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

  /** personal | professional | legal | official (1..*) Never undefined; an empty list is created when absent. */
  getMode(): valueSetCodes.CompositionAttestationMode[] {
    if (this.mode === undefined) {
      this.mode = [];
    }
    return this.mode;
  }

  setMode(mode: valueSetCodes.CompositionAttestationMode[] | undefined): this {
    return this.setFieldValue('mode', mode);
  }

  hasMode(): boolean {
    return this.hasFieldValue('mode');
  }

  /** Appends one value to `mode`. Throws a FhirModelError when it is not a valid FHIR code. */
  addMode(mode: valueSetCodes.CompositionAttestationMode): this {
    return this.addFieldValue('mode', mode);
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
 * Relationships to other compositions/documents
 */
export class CompositionRelatesTo extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'code', typeCode: 'code', allowedCodes: valueSetCodes.DocumentRelationshipType },
      ],
    },
    {
      elementName: 'target',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'targetIdentifier', typeCode: 'Identifier' },
        { jsonKey: 'targetReference', typeCode: 'Reference', targetResourceTypes: ['Composition'] },
      ],
    },
  ];

  /** replaces | transforms | signs | appends (1..1) */
  code?: valueSetCodes.DocumentRelationshipType;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;

  /** Target of the relationship (1..1) */
  targetIdentifier?: Identifier;
  /** Target of the relationship (1..1) */
  targetReference?: Reference;

  override fhirType(): string {
    return 'Composition.relatesTo';
  }

  /** FHIR JSON for this CompositionRelatesTo, typed as the plain `CompositionRelatesTo` data type. */
  override toJSON(): plainTypes.CompositionRelatesTo {
    return this.serialize() as plainTypes.CompositionRelatesTo;
  }

  /** replaces | transforms | signs | appends (1..1) */
  getCode(): valueSetCodes.DocumentRelationshipType | undefined {
    return this.code;
  }

  /** Sets `code`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setCode(code: valueSetCodes.DocumentRelationshipType | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** The element carrying the id and extensions of `code`. Created when absent. */
  getCodeElement(): Element {
    if (this._code === undefined) {
      this._code = new Element();
    }
    return this._code;
  }

  setCodeElement(codeElement: Element | undefined): this {
    this._code = codeElement;
    return this;
  }

  /** Target of the relationship (1..1) Whichever type of `target[x]` is set. */
  getTarget(): Identifier | Reference | undefined {
    return this.getChoiceValue<Identifier | Reference>('target');
  }

  /** True when any type of `target[x]` is set. */
  hasTarget(): boolean {
    return this.hasChoiceValue('target');
  }

  getTargetIdentifier(): Identifier | undefined {
    return this.targetIdentifier;
  }

  /** Sets `target[x]` as Identifier and clears every other type of it. */
  setTargetIdentifier(targetIdentifier: Identifier | undefined): this {
    return this.setFieldValue('targetIdentifier', targetIdentifier);
  }

  hasTargetIdentifier(): boolean {
    return this.hasFieldValue('targetIdentifier');
  }

  getTargetReference(): Reference | undefined {
    return this.targetReference;
  }

  /** Sets `target[x]` as Reference and clears every other type of it. */
  setTargetReference(targetReference: Reference | undefined): this {
    return this.setFieldValue('targetReference', targetReference);
  }

  hasTargetReference(): boolean {
    return this.hasFieldValue('targetReference');
  }
}

modelTypeRegistry.register('CompositionRelatesTo', CompositionRelatesTo, false);

/**
 * The clinical service(s) being documented
 */
export class CompositionEvent extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 0,
      maximum: Infinity,
      isList: true,
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
      elementName: 'detail',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'detail', typeCode: 'Reference' }],
    },
  ];

  /** Code(s) that apply to the event being documented (0..*) */
  code?: CodeableConcept[];

  /** The period covered by the documentation (0..1) */
  period?: Period;

  /** The event(s) being documented (0..*) */
  detail?: Reference[];

  override fhirType(): string {
    return 'Composition.event';
  }

  /** FHIR JSON for this CompositionEvent, typed as the plain `CompositionEvent` data type. */
  override toJSON(): plainTypes.CompositionEvent {
    return this.serialize() as plainTypes.CompositionEvent;
  }

  /** Code(s) that apply to the event being documented (0..*) Never undefined; an empty list is created when absent. */
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

  /** The event(s) being documented (0..*) Never undefined; an empty list is created when absent. */
  getDetail(): Reference[] {
    if (this.detail === undefined) {
      this.detail = [];
    }
    return this.detail;
  }

  setDetail(detail: Reference[] | undefined): this {
    return this.setFieldValue('detail', detail);
  }

  hasDetail(): boolean {
    return this.hasFieldValue('detail');
  }

  /** Appends a new, empty Reference to `detail` and returns it so it can be filled in. */
  addDetail(): Reference;
  /** Appends the given Reference to `detail` and returns this object for chaining. */
  addDetail(reference: Reference): this;
  addDetail(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('detail', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('detail', createdReference);
    return createdReference;
  }

  /** The first Reference of `detail`. One is added when the list is empty. */
  getDetailFirstRep(): Reference {
    const firstReference = this.getDetail()[0];
    return firstReference === undefined ? this.addDetail() : firstReference;
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
      elementName: 'text',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'text', typeCode: 'Narrative' }],
    },
    {
      elementName: 'mode',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'mode', typeCode: 'code', allowedCodes: valueSetCodes.ListMode }],
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

  /** Text summary of the section, for human interpretation (0..1) */
  text?: Narrative;

  /** working | snapshot | changes (0..1) */
  mode?: valueSetCodes.ListMode;
  /** Id and extensions of the primitive `mode`. */
  _mode?: Element;

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

  /** working | snapshot | changes (0..1) */
  getMode(): valueSetCodes.ListMode | undefined {
    return this.mode;
  }

  /** Sets `mode`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setMode(mode: valueSetCodes.ListMode | undefined): this {
    return this.setFieldValue('mode', mode);
  }

  hasMode(): boolean {
    return this.hasFieldValue('mode');
  }

  /** The element carrying the id and extensions of `mode`. Created when absent. */
  getModeElement(): Element {
    if (this._mode === undefined) {
      this._mode = new Element();
    }
    return this._mode;
  }

  setModeElement(modeElement: Element | undefined): this {
    this._mode = modeElement;
    return this;
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
