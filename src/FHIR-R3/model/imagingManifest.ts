/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../classes/models-r3';
import { BackboneElement } from './backboneElement';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Reference } from './reference';

/**
 * Base StructureDefinition for ImagingManifest Resource
 */
export class ImagingManifest extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'patient',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'patient', typeCode: 'Reference', targetResourceTypes: ['Patient'] }],
    },
    {
      elementName: 'authoringTime',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'authoringTime', typeCode: 'dateTime' }],
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
            'Device',
            'Organization',
            'Patient',
            'Practitioner',
            'RelatedPerson',
          ],
        },
      ],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'study',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'study', typeCode: 'ImagingManifestStudy' }],
    },
  ];

  readonly resourceType = 'ImagingManifest';

  /** SOP Instance UID (0..1) */
  identifier?: Identifier;

  /** Patient of the selected objects (1..1) */
  patient?: Reference;

  /** Time when the selection of instances was made (0..1) */
  authoringTime?: string;
  /** Id and extensions of the primitive `authoringTime`. */
  _authoringTime?: Element;

  /** Author (human or machine) (0..1) */
  author?: Reference;

  /** Description text (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Study identity of the selected instances (1..*) */
  study?: ImagingManifestStudy[];

  override fhirType(): string {
    return 'ImagingManifest';
  }

  /** FHIR JSON for this ImagingManifest, typed as the plain `ImagingManifest` data type. */
  override toJSON(): plainTypes.ImagingManifest {
    return this.serialize() as plainTypes.ImagingManifest;
  }

  /** SOP Instance UID (0..1) Created when absent. */
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

  /** Patient of the selected objects (1..1) Created when absent. */
  getPatient(): Reference {
    if (this.patient === undefined) {
      this.patient = new Reference();
    }
    return this.patient;
  }

  setPatient(patient: Reference | undefined): this {
    return this.setFieldValue('patient', patient);
  }

  hasPatient(): boolean {
    return this.hasFieldValue('patient');
  }

  /** Time when the selection of instances was made (0..1) */
  getAuthoringTime(): string | undefined {
    return this.authoringTime;
  }

  /** Sets `authoringTime`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setAuthoringTime(authoringTime: string | undefined): this {
    return this.setFieldValue('authoringTime', authoringTime);
  }

  hasAuthoringTime(): boolean {
    return this.hasFieldValue('authoringTime');
  }

  /** The element carrying the id and extensions of `authoringTime`. Created when absent. */
  getAuthoringTimeElement(): Element {
    if (this._authoringTime === undefined) {
      this._authoringTime = new Element();
    }
    return this._authoringTime;
  }

  setAuthoringTimeElement(authoringTimeElement: Element | undefined): this {
    this._authoringTime = authoringTimeElement;
    return this;
  }

  /** Author (human or machine) (0..1) Created when absent. */
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

  /** Description text (0..1) */
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

  /** Study identity of the selected instances (1..*) Never undefined; an empty list is created when absent. */
  getStudy(): ImagingManifestStudy[] {
    if (this.study === undefined) {
      this.study = [];
    }
    return this.study;
  }

  setStudy(study: ImagingManifestStudy[] | undefined): this {
    return this.setFieldValue('study', study);
  }

  hasStudy(): boolean {
    return this.hasFieldValue('study');
  }

  /** Appends a new, empty ImagingManifestStudy to `study` and returns it so it can be filled in. */
  addStudy(): ImagingManifestStudy;
  /** Appends the given ImagingManifestStudy to `study` and returns this object for chaining. */
  addStudy(imagingManifestStudy: ImagingManifestStudy): this;
  addStudy(imagingManifestStudy?: ImagingManifestStudy): ImagingManifestStudy | this {
    if (imagingManifestStudy !== undefined) {
      return this.addFieldValue('study', imagingManifestStudy);
    }
    const createdImagingManifestStudy = new ImagingManifestStudy();
    this.addFieldValue('study', createdImagingManifestStudy);
    return createdImagingManifestStudy;
  }

  /** The first ImagingManifestStudy of `study`. One is added when the list is empty. */
  getStudyFirstRep(): ImagingManifestStudy {
    const firstImagingManifestStudy = this.getStudy()[0];
    return firstImagingManifestStudy === undefined ? this.addStudy() : firstImagingManifestStudy;
  }
}

modelTypeRegistry.register('ImagingManifest', ImagingManifest, true);

/** True when the value is a ImagingManifest model instance. */
export function isImagingManifest(candidate: unknown): candidate is ImagingManifest {
  return candidate instanceof ImagingManifest;
}

/**
 * Study identity of the selected instances
 */
export class ImagingManifestStudy extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'uid',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'uid', typeCode: 'oid' }],
    },
    {
      elementName: 'imagingStudy',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'imagingStudy', typeCode: 'Reference', targetResourceTypes: ['ImagingStudy'] },
      ],
    },
    {
      elementName: 'endpoint',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'endpoint', typeCode: 'Reference', targetResourceTypes: ['Endpoint'] }],
    },
    {
      elementName: 'series',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'series', typeCode: 'ImagingManifestStudySeries' }],
    },
  ];

  /** Study instance UID (1..1) */
  uid?: string;
  /** Id and extensions of the primitive `uid`. */
  _uid?: Element;

  /** Reference to ImagingStudy (0..1) */
  imagingStudy?: Reference;

  /** Study access service endpoint (0..*) */
  endpoint?: Reference[];

  /** Series identity of the selected instances (1..*) */
  series?: ImagingManifestStudySeries[];

  override fhirType(): string {
    return 'ImagingManifest.study';
  }

  /** FHIR JSON for this ImagingManifestStudy, typed as the plain `ImagingManifestStudy` data type. */
  override toJSON(): plainTypes.ImagingManifestStudy {
    return this.serialize() as plainTypes.ImagingManifestStudy;
  }

  /** Study instance UID (1..1) */
  getUid(): string | undefined {
    return this.uid;
  }

  /** Sets `uid`. Throws a FhirModelError when the value is not a valid FHIR oid. */
  setUid(uid: string | undefined): this {
    return this.setFieldValue('uid', uid);
  }

  hasUid(): boolean {
    return this.hasFieldValue('uid');
  }

  /** The element carrying the id and extensions of `uid`. Created when absent. */
  getUidElement(): Element {
    if (this._uid === undefined) {
      this._uid = new Element();
    }
    return this._uid;
  }

  setUidElement(uidElement: Element | undefined): this {
    this._uid = uidElement;
    return this;
  }

  /** Reference to ImagingStudy (0..1) Created when absent. */
  getImagingStudy(): Reference {
    if (this.imagingStudy === undefined) {
      this.imagingStudy = new Reference();
    }
    return this.imagingStudy;
  }

  setImagingStudy(imagingStudy: Reference | undefined): this {
    return this.setFieldValue('imagingStudy', imagingStudy);
  }

  hasImagingStudy(): boolean {
    return this.hasFieldValue('imagingStudy');
  }

  /** Study access service endpoint (0..*) Never undefined; an empty list is created when absent. */
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

  /** Series identity of the selected instances (1..*) Never undefined; an empty list is created when absent. */
  getSeries(): ImagingManifestStudySeries[] {
    if (this.series === undefined) {
      this.series = [];
    }
    return this.series;
  }

  setSeries(series: ImagingManifestStudySeries[] | undefined): this {
    return this.setFieldValue('series', series);
  }

  hasSeries(): boolean {
    return this.hasFieldValue('series');
  }

  /** Appends a new, empty ImagingManifestStudySeries to `series` and returns it so it can be filled in. */
  addSeries(): ImagingManifestStudySeries;
  /** Appends the given ImagingManifestStudySeries to `series` and returns this object for chaining. */
  addSeries(imagingManifestStudySeries: ImagingManifestStudySeries): this;
  addSeries(
    imagingManifestStudySeries?: ImagingManifestStudySeries
  ): ImagingManifestStudySeries | this {
    if (imagingManifestStudySeries !== undefined) {
      return this.addFieldValue('series', imagingManifestStudySeries);
    }
    const createdImagingManifestStudySeries = new ImagingManifestStudySeries();
    this.addFieldValue('series', createdImagingManifestStudySeries);
    return createdImagingManifestStudySeries;
  }

  /** The first ImagingManifestStudySeries of `series`. One is added when the list is empty. */
  getSeriesFirstRep(): ImagingManifestStudySeries {
    const firstImagingManifestStudySeries = this.getSeries()[0];
    return firstImagingManifestStudySeries === undefined
      ? this.addSeries()
      : firstImagingManifestStudySeries;
  }
}

modelTypeRegistry.register('ImagingManifestStudy', ImagingManifestStudy, false);

/**
 * Series identity of the selected instances
 */
export class ImagingManifestStudySeries extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'uid',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'uid', typeCode: 'oid' }],
    },
    {
      elementName: 'endpoint',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'endpoint', typeCode: 'Reference', targetResourceTypes: ['Endpoint'] }],
    },
    {
      elementName: 'instance',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'instance', typeCode: 'ImagingManifestStudySeriesInstance' }],
    },
  ];

  /** Series instance UID (1..1) */
  uid?: string;
  /** Id and extensions of the primitive `uid`. */
  _uid?: Element;

  /** Series access endpoint (0..*) */
  endpoint?: Reference[];

  /** The selected instance (1..*) */
  instance?: ImagingManifestStudySeriesInstance[];

  override fhirType(): string {
    return 'ImagingManifest.study.series';
  }

  /** FHIR JSON for this ImagingManifestStudySeries, typed as the plain `ImagingManifestSeries` data type. */
  override toJSON(): plainTypes.ImagingManifestSeries {
    return this.serialize() as plainTypes.ImagingManifestSeries;
  }

  /** Series instance UID (1..1) */
  getUid(): string | undefined {
    return this.uid;
  }

  /** Sets `uid`. Throws a FhirModelError when the value is not a valid FHIR oid. */
  setUid(uid: string | undefined): this {
    return this.setFieldValue('uid', uid);
  }

  hasUid(): boolean {
    return this.hasFieldValue('uid');
  }

  /** The element carrying the id and extensions of `uid`. Created when absent. */
  getUidElement(): Element {
    if (this._uid === undefined) {
      this._uid = new Element();
    }
    return this._uid;
  }

  setUidElement(uidElement: Element | undefined): this {
    this._uid = uidElement;
    return this;
  }

  /** Series access endpoint (0..*) Never undefined; an empty list is created when absent. */
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

  /** The selected instance (1..*) Never undefined; an empty list is created when absent. */
  getInstance(): ImagingManifestStudySeriesInstance[] {
    if (this.instance === undefined) {
      this.instance = [];
    }
    return this.instance;
  }

  setInstance(instance: ImagingManifestStudySeriesInstance[] | undefined): this {
    return this.setFieldValue('instance', instance);
  }

  hasInstance(): boolean {
    return this.hasFieldValue('instance');
  }

  /** Appends a new, empty ImagingManifestStudySeriesInstance to `instance` and returns it so it can be filled in. */
  addInstance(): ImagingManifestStudySeriesInstance;
  /** Appends the given ImagingManifestStudySeriesInstance to `instance` and returns this object for chaining. */
  addInstance(imagingManifestStudySeriesInstance: ImagingManifestStudySeriesInstance): this;
  addInstance(
    imagingManifestStudySeriesInstance?: ImagingManifestStudySeriesInstance
  ): ImagingManifestStudySeriesInstance | this {
    if (imagingManifestStudySeriesInstance !== undefined) {
      return this.addFieldValue('instance', imagingManifestStudySeriesInstance);
    }
    const createdImagingManifestStudySeriesInstance = new ImagingManifestStudySeriesInstance();
    this.addFieldValue('instance', createdImagingManifestStudySeriesInstance);
    return createdImagingManifestStudySeriesInstance;
  }

  /** The first ImagingManifestStudySeriesInstance of `instance`. One is added when the list is empty. */
  getInstanceFirstRep(): ImagingManifestStudySeriesInstance {
    const firstImagingManifestStudySeriesInstance = this.getInstance()[0];
    return firstImagingManifestStudySeriesInstance === undefined
      ? this.addInstance()
      : firstImagingManifestStudySeriesInstance;
  }
}

modelTypeRegistry.register('ImagingManifestStudySeries', ImagingManifestStudySeries, false);

/**
 * The selected instance
 */
export class ImagingManifestStudySeriesInstance extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'sopClass',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sopClass', typeCode: 'oid' }],
    },
    {
      elementName: 'uid',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'uid', typeCode: 'oid' }],
    },
  ];

  /** SOP class UID of instance (1..1) */
  sopClass?: string;
  /** Id and extensions of the primitive `sopClass`. */
  _sopClass?: Element;

  /** Selected instance UID (1..1) */
  uid?: string;
  /** Id and extensions of the primitive `uid`. */
  _uid?: Element;

  override fhirType(): string {
    return 'ImagingManifest.study.series.instance';
  }

  /** FHIR JSON for this ImagingManifestStudySeriesInstance, typed as the plain `ImagingManifestInstance` data type. */
  override toJSON(): plainTypes.ImagingManifestInstance {
    return this.serialize() as plainTypes.ImagingManifestInstance;
  }

  /** SOP class UID of instance (1..1) */
  getSopClass(): string | undefined {
    return this.sopClass;
  }

  /** Sets `sopClass`. Throws a FhirModelError when the value is not a valid FHIR oid. */
  setSopClass(sopClass: string | undefined): this {
    return this.setFieldValue('sopClass', sopClass);
  }

  hasSopClass(): boolean {
    return this.hasFieldValue('sopClass');
  }

  /** The element carrying the id and extensions of `sopClass`. Created when absent. */
  getSopClassElement(): Element {
    if (this._sopClass === undefined) {
      this._sopClass = new Element();
    }
    return this._sopClass;
  }

  setSopClassElement(sopClassElement: Element | undefined): this {
    this._sopClass = sopClassElement;
    return this;
  }

  /** Selected instance UID (1..1) */
  getUid(): string | undefined {
    return this.uid;
  }

  /** Sets `uid`. Throws a FhirModelError when the value is not a valid FHIR oid. */
  setUid(uid: string | undefined): this {
    return this.setFieldValue('uid', uid);
  }

  hasUid(): boolean {
    return this.hasFieldValue('uid');
  }

  /** The element carrying the id and extensions of `uid`. Created when absent. */
  getUidElement(): Element {
    if (this._uid === undefined) {
      this._uid = new Element();
    }
    return this._uid;
  }

  setUidElement(uidElement: Element | undefined): this {
    this._uid = uidElement;
    return this;
  }
}

modelTypeRegistry.register(
  'ImagingManifestStudySeriesInstance',
  ImagingManifestStudySeriesInstance,
  false
);
