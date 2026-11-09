/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { Annotation } from './annotation';
import { Attachment } from './attachment';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';

/**
 * A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.
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
        {
          jsonKey: 'basedOn',
          typeCode: 'Reference',
          targetResourceTypes: ['CarePlan', 'ServiceRequest'],
        },
      ],
    },
    {
      elementName: 'partOf',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'partOf', typeCode: 'Reference' }],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.EventStatus }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'modality',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'modality', typeCode: 'CodeableConcept' }],
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
          targetResourceTypes: [
            'Device',
            'Group',
            'Location',
            'Patient',
            'Practitioner',
            'PractitionerRole',
            'Specimen',
          ],
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
      elementName: 'created',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'createdDateTime', typeCode: 'dateTime' },
        { jsonKey: 'createdPeriod', typeCode: 'Period' },
      ],
    },
    {
      elementName: 'issued',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'issued', typeCode: 'instant' }],
    },
    {
      elementName: 'operator',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'operator',
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
      elementName: 'deviceName',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'deviceName', typeCode: 'string' }],
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
      types: [{ jsonKey: 'duration', typeCode: 'decimal' }],
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

  /** Part of referenced event (0..*) */
  partOf?: Reference[];

  /** preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown (1..1) */
  status?: valueSetCodes.EventStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Classification of media as image, video, or audio (0..1) */
  type?: CodeableConcept;

  /** The type of acquisition equipment/process (0..1) */
  modality?: CodeableConcept;

  /** Imaging view, e.g. Lateral or Antero-posterior (0..1) */
  view?: CodeableConcept;

  /** Who/What this Media is a record of (0..1) */
  subject?: Reference;

  /** Encounter associated with media (0..1) */
  encounter?: Reference;

  /** When Media was collected (0..1) */
  createdDateTime?: string;
  /** Id and extensions of the primitive `createdDateTime`. */
  _createdDateTime?: Element;
  /** When Media was collected (0..1) */
  createdPeriod?: Period;

  /** Date/Time this version was made available (0..1) */
  issued?: string;
  /** Id and extensions of the primitive `issued`. */
  _issued?: Element;

  /** The person who generated the image (0..1) */
  operator?: Reference;

  /** Why was event performed? (0..*) */
  reasonCode?: CodeableConcept[];

  /** Observed body part (0..1) */
  bodySite?: CodeableConcept;

  /** Name of the device/manufacturer (0..1) */
  deviceName?: string;
  /** Id and extensions of the primitive `deviceName`. */
  _deviceName?: Element;

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

  /** Part of referenced event (0..*) Never undefined; an empty list is created when absent. */
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

  /** preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown (1..1) */
  getStatus(): valueSetCodes.EventStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.EventStatus | undefined): this {
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

  /** Classification of media as image, video, or audio (0..1) Created when absent. */
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

  /** The type of acquisition equipment/process (0..1) Created when absent. */
  getModality(): CodeableConcept {
    if (this.modality === undefined) {
      this.modality = new CodeableConcept();
    }
    return this.modality;
  }

  setModality(modality: CodeableConcept | undefined): this {
    return this.setFieldValue('modality', modality);
  }

  hasModality(): boolean {
    return this.hasFieldValue('modality');
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

  /** Encounter associated with media (0..1) Created when absent. */
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

  /** When Media was collected (0..1) Whichever type of `created[x]` is set. */
  getCreated(): string | Period | undefined {
    return this.getChoiceValue<string | Period>('created');
  }

  /** True when any type of `created[x]` is set. */
  hasCreated(): boolean {
    return this.hasChoiceValue('created');
  }

  getCreatedDateTime(): string | undefined {
    return this.createdDateTime;
  }

  /** Sets `created[x]` as dateTime and clears every other type of it. */
  setCreatedDateTime(createdDateTime: string | undefined): this {
    return this.setFieldValue('createdDateTime', createdDateTime);
  }

  hasCreatedDateTime(): boolean {
    return this.hasFieldValue('createdDateTime');
  }

  getCreatedPeriod(): Period | undefined {
    return this.createdPeriod;
  }

  /** Sets `created[x]` as Period and clears every other type of it. */
  setCreatedPeriod(createdPeriod: Period | undefined): this {
    return this.setFieldValue('createdPeriod', createdPeriod);
  }

  hasCreatedPeriod(): boolean {
    return this.hasFieldValue('createdPeriod');
  }

  /** Date/Time this version was made available (0..1) */
  getIssued(): string | undefined {
    return this.issued;
  }

  /** Sets `issued`. Throws a FhirModelError when the value is not a valid FHIR instant. */
  setIssued(issued: string | undefined): this {
    return this.setFieldValue('issued', issued);
  }

  hasIssued(): boolean {
    return this.hasFieldValue('issued');
  }

  /** The element carrying the id and extensions of `issued`. Created when absent. */
  getIssuedElement(): Element {
    if (this._issued === undefined) {
      this._issued = new Element();
    }
    return this._issued;
  }

  setIssuedElement(issuedElement: Element | undefined): this {
    this._issued = issuedElement;
    return this;
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

  /** Observed body part (0..1) Created when absent. */
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

  /** Name of the device/manufacturer (0..1) */
  getDeviceName(): string | undefined {
    return this.deviceName;
  }

  /** Sets `deviceName`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDeviceName(deviceName: string | undefined): this {
    return this.setFieldValue('deviceName', deviceName);
  }

  hasDeviceName(): boolean {
    return this.hasFieldValue('deviceName');
  }

  /** The element carrying the id and extensions of `deviceName`. Created when absent. */
  getDeviceNameElement(): Element {
    if (this._deviceName === undefined) {
      this._deviceName = new Element();
    }
    return this._deviceName;
  }

  setDeviceNameElement(deviceNameElement: Element | undefined): this {
    this._deviceName = deviceNameElement;
    return this;
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

  /** Sets `duration`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
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
