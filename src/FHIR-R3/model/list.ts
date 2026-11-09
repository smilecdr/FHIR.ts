/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { Annotation } from './annotation';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Reference } from './reference';

/**
 * Base StructureDefinition for List Resource
 */
export class List extends DomainResource {
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
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.ListStatus }],
    },
    {
      elementName: 'mode',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'mode', typeCode: 'code', allowedCodes: valueSetCodes.ListMode }],
    },
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
      elementName: 'subject',
      minimum: 0,
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
      elementName: 'date',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'date', typeCode: 'dateTime' }],
    },
    {
      elementName: 'source',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'source',
          typeCode: 'Reference',
          targetResourceTypes: ['Device', 'Patient', 'Practitioner'],
        },
      ],
    },
    {
      elementName: 'orderedBy',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'orderedBy', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
    {
      elementName: 'entry',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'entry', typeCode: 'ListEntry' }],
    },
    {
      elementName: 'emptyReason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'emptyReason', typeCode: 'CodeableConcept' }],
    },
  ];

  readonly resourceType = 'List';

  /** Business identifier (0..*) */
  identifier?: Identifier[];

  /** current | retired | entered-in-error (1..1) */
  status?: valueSetCodes.ListStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** working | snapshot | changes (1..1) */
  mode?: valueSetCodes.ListMode;
  /** Id and extensions of the primitive `mode`. */
  _mode?: Element;

  /** Descriptive name for the list (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

  /** What the purpose of this list is (0..1) */
  code?: CodeableConcept;

  /** If all resources have the same subject (0..1) */
  subject?: Reference;

  /** Context in which list created (0..1) */
  encounter?: Reference;

  /** When the list was prepared (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Who and/or what defined the list contents (aka Author) (0..1) */
  source?: Reference;

  /** What order the list has (0..1) */
  orderedBy?: CodeableConcept;

  /** Comments about the list (0..*) */
  note?: Annotation[];

  /** Entries in the list (0..*) */
  entry?: ListEntry[];

  /** Why list is empty (0..1) */
  emptyReason?: CodeableConcept;

  override fhirType(): string {
    return 'List';
  }

  /** FHIR JSON for this List, typed as the plain `List` data type. */
  override toJSON(): plainTypes.List {
    return this.serialize() as plainTypes.List;
  }

  /** Business identifier (0..*) Never undefined; an empty list is created when absent. */
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

  /** current | retired | entered-in-error (1..1) */
  getStatus(): valueSetCodes.ListStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.ListStatus | undefined): this {
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

  /** working | snapshot | changes (1..1) */
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

  /** Descriptive name for the list (0..1) */
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

  /** What the purpose of this list is (0..1) Created when absent. */
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

  /** If all resources have the same subject (0..1) Created when absent. */
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

  /** Context in which list created (0..1) Created when absent. */
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

  /** When the list was prepared (0..1) */
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

  /** Who and/or what defined the list contents (aka Author) (0..1) Created when absent. */
  getSource(): Reference {
    if (this.source === undefined) {
      this.source = new Reference();
    }
    return this.source;
  }

  setSource(source: Reference | undefined): this {
    return this.setFieldValue('source', source);
  }

  hasSource(): boolean {
    return this.hasFieldValue('source');
  }

  /** What order the list has (0..1) Created when absent. */
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

  /** Comments about the list (0..*) Never undefined; an empty list is created when absent. */
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

  /** Entries in the list (0..*) Never undefined; an empty list is created when absent. */
  getEntry(): ListEntry[] {
    if (this.entry === undefined) {
      this.entry = [];
    }
    return this.entry;
  }

  setEntry(entry: ListEntry[] | undefined): this {
    return this.setFieldValue('entry', entry);
  }

  hasEntry(): boolean {
    return this.hasFieldValue('entry');
  }

  /** Appends a new, empty ListEntry to `entry` and returns it so it can be filled in. */
  addEntry(): ListEntry;
  /** Appends the given ListEntry to `entry` and returns this object for chaining. */
  addEntry(listEntry: ListEntry): this;
  addEntry(listEntry?: ListEntry): ListEntry | this {
    if (listEntry !== undefined) {
      return this.addFieldValue('entry', listEntry);
    }
    const createdListEntry = new ListEntry();
    this.addFieldValue('entry', createdListEntry);
    return createdListEntry;
  }

  /** The first ListEntry of `entry`. One is added when the list is empty. */
  getEntryFirstRep(): ListEntry {
    const firstListEntry = this.getEntry()[0];
    return firstListEntry === undefined ? this.addEntry() : firstListEntry;
  }

  /** Why list is empty (0..1) Created when absent. */
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
}

modelTypeRegistry.register('List', List, true);

/** True when the value is a List model instance. */
export function isList(candidate: unknown): candidate is List {
  return candidate instanceof List;
}

/**
 * Entries in the list
 */
export class ListEntry extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'flag',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'flag', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'deleted',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'deleted', typeCode: 'boolean' }],
    },
    {
      elementName: 'date',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'date', typeCode: 'dateTime' }],
    },
    {
      elementName: 'item',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'item', typeCode: 'Reference' }],
    },
  ];

  /** Status/Workflow information about this item (0..1) */
  flag?: CodeableConcept;

  /** If this item is actually marked as deleted (0..1) */
  deleted?: boolean;
  /** Id and extensions of the primitive `deleted`. */
  _deleted?: Element;

  /** When item added to list (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Actual entry (1..1) */
  item?: Reference;

  override fhirType(): string {
    return 'List.entry';
  }

  /** FHIR JSON for this ListEntry, typed as the plain `ListEntry` data type. */
  override toJSON(): plainTypes.ListEntry {
    return this.serialize() as plainTypes.ListEntry;
  }

  /** Status/Workflow information about this item (0..1) Created when absent. */
  getFlag(): CodeableConcept {
    if (this.flag === undefined) {
      this.flag = new CodeableConcept();
    }
    return this.flag;
  }

  setFlag(flag: CodeableConcept | undefined): this {
    return this.setFieldValue('flag', flag);
  }

  hasFlag(): boolean {
    return this.hasFieldValue('flag');
  }

  /** If this item is actually marked as deleted (0..1) */
  getDeleted(): boolean | undefined {
    return this.deleted;
  }

  /** Sets `deleted`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setDeleted(deleted: boolean | undefined): this {
    return this.setFieldValue('deleted', deleted);
  }

  hasDeleted(): boolean {
    return this.hasFieldValue('deleted');
  }

  /** The element carrying the id and extensions of `deleted`. Created when absent. */
  getDeletedElement(): Element {
    if (this._deleted === undefined) {
      this._deleted = new Element();
    }
    return this._deleted;
  }

  setDeletedElement(deletedElement: Element | undefined): this {
    this._deleted = deletedElement;
    return this;
  }

  /** When item added to list (0..1) */
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

  /** Actual entry (1..1) Created when absent. */
  getItem(): Reference {
    if (this.item === undefined) {
      this.item = new Reference();
    }
    return this.item;
  }

  setItem(item: Reference | undefined): this {
    return this.setFieldValue('item', item);
  }

  hasItem(): boolean {
    return this.hasFieldValue('item');
  }
}

modelTypeRegistry.register('ListEntry', ListEntry, false);
