/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { Annotation } from './annotation';
import { Attachment } from './attachment';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';

/**
 * Base StructureDefinition for Media Resource
 */
export class Media extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'basedOn',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'basedOn', typeCode: 'Reference', targetResourceTypes: ['ProcedureRequest'] },
      ],
    },
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.DigitalMediaType }],
    },
    {
      elementName: 'subtype',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'subtype', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'view',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'view', typeCode: 'CodeableConcept' }],
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
          targetResourceTypes: ['Device', 'Group', 'Patient', 'Practitioner', 'Specimen'],
        },
      ],
    },
    {
      elementName: 'context',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'context',
          typeCode: 'Reference',
          targetResourceTypes: ['Encounter', 'EpisodeOfCare'],
        },
      ],
    },
    {
      elementName: 'occurrence',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'occurrenceDateTime', typeCode: 'dateTime' },
        { jsonKey: 'occurrencePeriod', typeCode: 'Period' },
      ],
    },
    {
      elementName: 'operator',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'operator', typeCode: 'Reference', targetResourceTypes: ['Practitioner'] },
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
      elementName: 'bodySite',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'bodySite', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'device',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'device',
          typeCode: 'Reference',
          targetResourceTypes: ['Device', 'DeviceMetric'],
        },
      ],
    },
    {
      elementName: 'height',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'height', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'width',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'width', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'frames',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'frames', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'duration',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'duration', typeCode: 'unsignedInt' }],
    },
    {
      elementName: 'content',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'content', typeCode: 'Attachment' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
  ];

  readonly resourceType = 'Media';

  /** Identifier(s) for the image (0..*) */
  identifier?: Identifier[];

  /** Procedure that caused this media to be created (0..*) */
  basedOn?: Reference[];

  /** photo | video | audio (1..1) */
  type?: valueSetCodes.DigitalMediaType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** The type of acquisition equipment/process (0..1) */
  subtype?: CodeableConcept;

  /** Imaging view, e.g. Lateral or Antero-posterior (0..1) */
  view?: CodeableConcept;

  /** Who/What this Media is a record of (0..1) */
  subject?: Reference;

  /** Encounter / Episode associated with media (0..1) */
  context?: Reference;

  /** When Media was collected (0..1) */
  occurrenceDateTime?: string;
  /** Id and extensions of the primitive `occurrenceDateTime`. */
  _occurrenceDateTime?: Element;
  /** When Media was collected (0..1) */
  occurrencePeriod?: Period;

  /** The person who generated the image (0..1) */
  operator?: Reference;

  /** Why was event performed? (0..*) */
  reasonCode?: CodeableConcept[];

  /** Body part in media (0..1) */
  bodySite?: CodeableConcept;

  /** Observing Device (0..1) */
  device?: Reference;

  /** Height of the image in pixels (photo/video) (0..1) */
  height?: number;
  /** Id and extensions of the primitive `height`. */
  _height?: Element;

  /** Width of the image in pixels (photo/video) (0..1) */
  width?: number;
  /** Id and extensions of the primitive `width`. */
  _width?: Element;

  /** Number of frames if > 1 (photo) (0..1) */
  frames?: number;
  /** Id and extensions of the primitive `frames`. */
  _frames?: Element;

  /** Length in seconds (audio / video) (0..1) */
  duration?: number;
  /** Id and extensions of the primitive `duration`. */
  _duration?: Element;

  /** Actual Media - reference or data (1..1) */
  content?: Attachment;

  /** Comments made about the media (0..*) */
  note?: Annotation[];

  override fhirType(): string {
    return 'Media';
  }

  /** FHIR JSON for this Media, typed as the plain `Media` data type. */
  override toJSON(): plainTypes.Media {
    return this.serialize() as plainTypes.Media;
  }

  /** Identifier(s) for the image (0..*) Never undefined; an empty list is created when absent. */
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

  /** photo | video | audio (1..1) */
  getType(): valueSetCodes.DigitalMediaType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.DigitalMediaType | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** The element carrying the id and extensions of `type`. Created when absent. */
  getTypeElement(): Element {
    if (this._type === undefined) {
      this._type = new Element();
    }
    return this._type;
  }

  setTypeElement(typeElement: Element | undefined): this {
    this._type = typeElement;
    return this;
  }

  /** The type of acquisition equipment/process (0..1) Created when absent. */
  getSubtype(): CodeableConcept {
    if (this.subtype === undefined) {
      this.subtype = new CodeableConcept();
    }
    return this.subtype;
  }

  setSubtype(subtype: CodeableConcept | undefined): this {
    return this.setFieldValue('subtype', subtype);
  }

  hasSubtype(): boolean {
    return this.hasFieldValue('subtype');
  }

  /** Imaging view, e.g. Lateral or Antero-posterior (0..1) Created when absent. */
  getView(): CodeableConcept {
    if (this.view === undefined) {
      this.view = new CodeableConcept();
    }
    return this.view;
  }

  setView(view: CodeableConcept | undefined): this {
    return this.setFieldValue('view', view);
  }

  hasView(): boolean {
    return this.hasFieldValue('view');
  }

  /** Who/What this Media is a record of (0..1) Created when absent. */
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

  /** Encounter / Episode associated with media (0..1) Created when absent. */
  getContext(): Reference {
    if (this.context === undefined) {
      this.context = new Reference();
    }
    return this.context;
  }

  setContext(context: Reference | undefined): this {
    return this.setFieldValue('context', context);
  }

  hasContext(): boolean {
    return this.hasFieldValue('context');
  }

  /** When Media was collected (0..1) Whichever type of `occurrence[x]` is set. */
  getOccurrence(): string | Period | undefined {
    return this.getChoiceValue<string | Period>('occurrence');
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

  /** The person who generated the image (0..1) Created when absent. */
  getOperator(): Reference {
    if (this.operator === undefined) {
      this.operator = new Reference();
    }
    return this.operator;
  }

  setOperator(operator: Reference | undefined): this {
    return this.setFieldValue('operator', operator);
  }

  hasOperator(): boolean {
    return this.hasFieldValue('operator');
  }

  /** Why was event performed? (0..*) Never undefined; an empty list is created when absent. */
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

  /** Body part in media (0..1) Created when absent. */
  getBodySite(): CodeableConcept {
    if (this.bodySite === undefined) {
      this.bodySite = new CodeableConcept();
    }
    return this.bodySite;
  }

  setBodySite(bodySite: CodeableConcept | undefined): this {
    return this.setFieldValue('bodySite', bodySite);
  }

  hasBodySite(): boolean {
    return this.hasFieldValue('bodySite');
  }

  /** Observing Device (0..1) Created when absent. */
  getDevice(): Reference {
    if (this.device === undefined) {
      this.device = new Reference();
    }
    return this.device;
  }

  setDevice(device: Reference | undefined): this {
    return this.setFieldValue('device', device);
  }

  hasDevice(): boolean {
    return this.hasFieldValue('device');
  }

  /** Height of the image in pixels (photo/video) (0..1) */
  getHeight(): number | undefined {
    return this.height;
  }

  /** Sets `height`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setHeight(height: number | undefined): this {
    return this.setFieldValue('height', height);
  }

  hasHeight(): boolean {
    return this.hasFieldValue('height');
  }

  /** The element carrying the id and extensions of `height`. Created when absent. */
  getHeightElement(): Element {
    if (this._height === undefined) {
      this._height = new Element();
    }
    return this._height;
  }

  setHeightElement(heightElement: Element | undefined): this {
    this._height = heightElement;
    return this;
  }

  /** Width of the image in pixels (photo/video) (0..1) */
  getWidth(): number | undefined {
    return this.width;
  }

  /** Sets `width`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setWidth(width: number | undefined): this {
    return this.setFieldValue('width', width);
  }

  hasWidth(): boolean {
    return this.hasFieldValue('width');
  }

  /** The element carrying the id and extensions of `width`. Created when absent. */
  getWidthElement(): Element {
    if (this._width === undefined) {
      this._width = new Element();
    }
    return this._width;
  }

  setWidthElement(widthElement: Element | undefined): this {
    this._width = widthElement;
    return this;
  }

  /** Number of frames if > 1 (photo) (0..1) */
  getFrames(): number | undefined {
    return this.frames;
  }

  /** Sets `frames`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setFrames(frames: number | undefined): this {
    return this.setFieldValue('frames', frames);
  }

  hasFrames(): boolean {
    return this.hasFieldValue('frames');
  }

  /** The element carrying the id and extensions of `frames`. Created when absent. */
  getFramesElement(): Element {
    if (this._frames === undefined) {
      this._frames = new Element();
    }
    return this._frames;
  }

  setFramesElement(framesElement: Element | undefined): this {
    this._frames = framesElement;
    return this;
  }

  /** Length in seconds (audio / video) (0..1) */
  getDuration(): number | undefined {
    return this.duration;
  }

  /** Sets `duration`. Throws a FhirModelError when the value is not a valid FHIR unsignedInt. */
  setDuration(duration: number | undefined): this {
    return this.setFieldValue('duration', duration);
  }

  hasDuration(): boolean {
    return this.hasFieldValue('duration');
  }

  /** The element carrying the id and extensions of `duration`. Created when absent. */
  getDurationElement(): Element {
    if (this._duration === undefined) {
      this._duration = new Element();
    }
    return this._duration;
  }

  setDurationElement(durationElement: Element | undefined): this {
    this._duration = durationElement;
    return this;
  }

  /** Actual Media - reference or data (1..1) Created when absent. */
  getContent(): Attachment {
    if (this.content === undefined) {
      this.content = new Attachment();
    }
    return this.content;
  }

  setContent(content: Attachment | undefined): this {
    return this.setFieldValue('content', content);
  }

  hasContent(): boolean {
    return this.hasFieldValue('content');
  }

  /** Comments made about the media (0..*) Never undefined; an empty list is created when absent. */
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

modelTypeRegistry.register('Media', Media, true);

/** True when the value is a Media model instance. */
export function isMedia(candidate: unknown): candidate is Media {
  return candidate instanceof Media;
}
