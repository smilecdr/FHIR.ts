/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { CodeableReference } from './codeableReference';
import { Coding } from './coding';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Reference } from './reference';

/**
 * A selection of DICOM SOP instances and/or frames within a single Study and Series. This might include additional specifics such as an image region, an Observation UID or a Segmentation Number, allowing linkage to an Observation Resource or transferring this information along with the ImagingStudy Resource.
 */
export class ImagingSelection extends DomainResource {
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
      types: [
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.ImagingSelectionStatus },
      ],
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
            'Medication',
            'Organization',
            'Patient',
            'Practitioner',
            'Procedure',
            'Specimen',
            'Substance',
          ],
        },
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
      elementName: 'performer',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'performer', typeCode: 'ImagingSelectionPerformer' }],
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
            'ServiceRequest',
            'Task',
          ],
        },
      ],
    },
    {
      elementName: 'category',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'studyUid',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'studyUid', typeCode: 'id' }],
    },
    {
      elementName: 'derivedFrom',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'derivedFrom',
          typeCode: 'Reference',
          targetResourceTypes: ['DocumentReference', 'ImagingStudy'],
        },
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
      elementName: 'seriesUid',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'seriesUid', typeCode: 'id' }],
    },
    {
      elementName: 'seriesNumber',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'seriesNumber', typeCode: 'unsignedInt' }],
    },
    {
      elementName: 'frameOfReferenceUid',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'frameOfReferenceUid', typeCode: 'id' }],
    },
    {
      elementName: 'bodySite',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'bodySite', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'focus',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'focus', typeCode: 'Reference', targetResourceTypes: ['ImagingSelection'] },
      ],
    },
    {
      elementName: 'instance',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'instance', typeCode: 'ImagingSelectionInstance' }],
    },
  ];

  readonly resourceType = 'ImagingSelection';

  /** Business Identifier for Imaging Selection (0..*) */
  identifier?: Identifier[];

  /** available | entered-in-error | unknown (1..1) */
  status?: valueSetCodes.ImagingSelectionStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Subject of the selected instances (0..1) */
  subject?: Reference;

  /** Date / Time when this imaging selection was created (0..1) */
  issued?: string;
  /** Id and extensions of the primitive `issued`. */
  _issued?: Element;

  /** Selector of the instances (human or machine) (0..*) */
  performer?: ImagingSelectionPerformer[];

  /** Associated request (0..*) */
  basedOn?: Reference[];

  /** Classifies the imaging selection (0..*) */
  category?: CodeableConcept[];

  /** Imaging Selection purpose text or code (1..1) */
  code?: CodeableConcept;

  /** DICOM Study Instance UID (0..1) */
  studyUid?: string;
  /** Id and extensions of the primitive `studyUid`. */
  _studyUid?: Element;

  /** The imaging study from which the imaging selection is derived (0..*) */
  derivedFrom?: Reference[];

  /** The network service providing retrieval for the images referenced in the imaging selection (0..*) */
  endpoint?: Reference[];

  /** DICOM Series Instance UID (0..1) */
  seriesUid?: string;
  /** Id and extensions of the primitive `seriesUid`. */
  _seriesUid?: Element;

  /** DICOM Series Number (0..1) */
  seriesNumber?: number;
  /** Id and extensions of the primitive `seriesNumber`. */
  _seriesNumber?: Element;

  /** The Frame of Reference UID for the selected images (0..1) */
  frameOfReferenceUid?: string;
  /** Id and extensions of the primitive `frameOfReferenceUid`. */
  _frameOfReferenceUid?: Element;

  /** Body part examined (0..1) */
  bodySite?: CodeableReference;

  /** Related resource that is the focus for the imaging selection (0..*) */
  focus?: Reference[];

  /** The selected instances (0..*) */
  instance?: ImagingSelectionInstance[];

  override fhirType(): string {
    return 'ImagingSelection';
  }

  /** FHIR JSON for this ImagingSelection, typed as the plain `ImagingSelection` data type. */
  override toJSON(): plainTypes.ImagingSelection {
    return this.serialize() as plainTypes.ImagingSelection;
  }

  /** Business Identifier for Imaging Selection (0..*) Never undefined; an empty list is created when absent. */
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

  /** available | entered-in-error | unknown (1..1) */
  getStatus(): valueSetCodes.ImagingSelectionStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.ImagingSelectionStatus | undefined): this {
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

  /** Subject of the selected instances (0..1) Created when absent. */
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

  /** Date / Time when this imaging selection was created (0..1) */
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

  /** Selector of the instances (human or machine) (0..*) Never undefined; an empty list is created when absent. */
  getPerformer(): ImagingSelectionPerformer[] {
    if (this.performer === undefined) {
      this.performer = [];
    }
    return this.performer;
  }

  setPerformer(performer: ImagingSelectionPerformer[] | undefined): this {
    return this.setFieldValue('performer', performer);
  }

  hasPerformer(): boolean {
    return this.hasFieldValue('performer');
  }

  /** Appends a new, empty ImagingSelectionPerformer to `performer` and returns it so it can be filled in. */
  addPerformer(): ImagingSelectionPerformer;
  /** Appends the given ImagingSelectionPerformer to `performer` and returns this object for chaining. */
  addPerformer(imagingSelectionPerformer: ImagingSelectionPerformer): this;
  addPerformer(
    imagingSelectionPerformer?: ImagingSelectionPerformer
  ): ImagingSelectionPerformer | this {
    if (imagingSelectionPerformer !== undefined) {
      return this.addFieldValue('performer', imagingSelectionPerformer);
    }
    const createdImagingSelectionPerformer = new ImagingSelectionPerformer();
    this.addFieldValue('performer', createdImagingSelectionPerformer);
    return createdImagingSelectionPerformer;
  }

  /** The first ImagingSelectionPerformer of `performer`. One is added when the list is empty. */
  getPerformerFirstRep(): ImagingSelectionPerformer {
    const firstImagingSelectionPerformer = this.getPerformer()[0];
    return firstImagingSelectionPerformer === undefined
      ? this.addPerformer()
      : firstImagingSelectionPerformer;
  }

  /** Associated request (0..*) Never undefined; an empty list is created when absent. */
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

  /** Classifies the imaging selection (0..*) Never undefined; an empty list is created when absent. */
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

  /** Imaging Selection purpose text or code (1..1) Created when absent. */
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

  /** DICOM Study Instance UID (0..1) */
  getStudyUid(): string | undefined {
    return this.studyUid;
  }

  /** Sets `studyUid`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setStudyUid(studyUid: string | undefined): this {
    return this.setFieldValue('studyUid', studyUid);
  }

  hasStudyUid(): boolean {
    return this.hasFieldValue('studyUid');
  }

  /** The element carrying the id and extensions of `studyUid`. Created when absent. */
  getStudyUidElement(): Element {
    if (this._studyUid === undefined) {
      this._studyUid = new Element();
    }
    return this._studyUid;
  }

  setStudyUidElement(studyUidElement: Element | undefined): this {
    this._studyUid = studyUidElement;
    return this;
  }

  /** The imaging study from which the imaging selection is derived (0..*) Never undefined; an empty list is created when absent. */
  getDerivedFrom(): Reference[] {
    if (this.derivedFrom === undefined) {
      this.derivedFrom = [];
    }
    return this.derivedFrom;
  }

  setDerivedFrom(derivedFrom: Reference[] | undefined): this {
    return this.setFieldValue('derivedFrom', derivedFrom);
  }

  hasDerivedFrom(): boolean {
    return this.hasFieldValue('derivedFrom');
  }

  /** Appends a new, empty Reference to `derivedFrom` and returns it so it can be filled in. */
  addDerivedFrom(): Reference;
  /** Appends the given Reference to `derivedFrom` and returns this object for chaining. */
  addDerivedFrom(reference: Reference): this;
  addDerivedFrom(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('derivedFrom', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('derivedFrom', createdReference);
    return createdReference;
  }

  /** The first Reference of `derivedFrom`. One is added when the list is empty. */
  getDerivedFromFirstRep(): Reference {
    const firstReference = this.getDerivedFrom()[0];
    return firstReference === undefined ? this.addDerivedFrom() : firstReference;
  }

  /** The network service providing retrieval for the images referenced in the imaging selection (0..*) Never undefined; an empty list is created when absent. */
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

  /** DICOM Series Instance UID (0..1) */
  getSeriesUid(): string | undefined {
    return this.seriesUid;
  }

  /** Sets `seriesUid`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setSeriesUid(seriesUid: string | undefined): this {
    return this.setFieldValue('seriesUid', seriesUid);
  }

  hasSeriesUid(): boolean {
    return this.hasFieldValue('seriesUid');
  }

  /** The element carrying the id and extensions of `seriesUid`. Created when absent. */
  getSeriesUidElement(): Element {
    if (this._seriesUid === undefined) {
      this._seriesUid = new Element();
    }
    return this._seriesUid;
  }

  setSeriesUidElement(seriesUidElement: Element | undefined): this {
    this._seriesUid = seriesUidElement;
    return this;
  }

  /** DICOM Series Number (0..1) */
  getSeriesNumber(): number | undefined {
    return this.seriesNumber;
  }

  /** Sets `seriesNumber`. Throws a FhirModelError when the value is not a valid FHIR unsignedInt. */
  setSeriesNumber(seriesNumber: number | undefined): this {
    return this.setFieldValue('seriesNumber', seriesNumber);
  }

  hasSeriesNumber(): boolean {
    return this.hasFieldValue('seriesNumber');
  }

  /** The element carrying the id and extensions of `seriesNumber`. Created when absent. */
  getSeriesNumberElement(): Element {
    if (this._seriesNumber === undefined) {
      this._seriesNumber = new Element();
    }
    return this._seriesNumber;
  }

  setSeriesNumberElement(seriesNumberElement: Element | undefined): this {
    this._seriesNumber = seriesNumberElement;
    return this;
  }

  /** The Frame of Reference UID for the selected images (0..1) */
  getFrameOfReferenceUid(): string | undefined {
    return this.frameOfReferenceUid;
  }

  /** Sets `frameOfReferenceUid`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setFrameOfReferenceUid(frameOfReferenceUid: string | undefined): this {
    return this.setFieldValue('frameOfReferenceUid', frameOfReferenceUid);
  }

  hasFrameOfReferenceUid(): boolean {
    return this.hasFieldValue('frameOfReferenceUid');
  }

  /** The element carrying the id and extensions of `frameOfReferenceUid`. Created when absent. */
  getFrameOfReferenceUidElement(): Element {
    if (this._frameOfReferenceUid === undefined) {
      this._frameOfReferenceUid = new Element();
    }
    return this._frameOfReferenceUid;
  }

  setFrameOfReferenceUidElement(frameOfReferenceUidElement: Element | undefined): this {
    this._frameOfReferenceUid = frameOfReferenceUidElement;
    return this;
  }

  /** Body part examined (0..1) Created when absent. */
  getBodySite(): CodeableReference {
    if (this.bodySite === undefined) {
      this.bodySite = new CodeableReference();
    }
    return this.bodySite;
  }

  setBodySite(bodySite: CodeableReference | undefined): this {
    return this.setFieldValue('bodySite', bodySite);
  }

  hasBodySite(): boolean {
    return this.hasFieldValue('bodySite');
  }

  /** Related resource that is the focus for the imaging selection (0..*) Never undefined; an empty list is created when absent. */
  getFocus(): Reference[] {
    if (this.focus === undefined) {
      this.focus = [];
    }
    return this.focus;
  }

  setFocus(focus: Reference[] | undefined): this {
    return this.setFieldValue('focus', focus);
  }

  hasFocus(): boolean {
    return this.hasFieldValue('focus');
  }

  /** Appends a new, empty Reference to `focus` and returns it so it can be filled in. */
  addFocus(): Reference;
  /** Appends the given Reference to `focus` and returns this object for chaining. */
  addFocus(reference: Reference): this;
  addFocus(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('focus', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('focus', createdReference);
    return createdReference;
  }

  /** The first Reference of `focus`. One is added when the list is empty. */
  getFocusFirstRep(): Reference {
    const firstReference = this.getFocus()[0];
    return firstReference === undefined ? this.addFocus() : firstReference;
  }

  /** The selected instances (0..*) Never undefined; an empty list is created when absent. */
  getInstance(): ImagingSelectionInstance[] {
    if (this.instance === undefined) {
      this.instance = [];
    }
    return this.instance;
  }

  setInstance(instance: ImagingSelectionInstance[] | undefined): this {
    return this.setFieldValue('instance', instance);
  }

  hasInstance(): boolean {
    return this.hasFieldValue('instance');
  }

  /** Appends a new, empty ImagingSelectionInstance to `instance` and returns it so it can be filled in. */
  addInstance(): ImagingSelectionInstance;
  /** Appends the given ImagingSelectionInstance to `instance` and returns this object for chaining. */
  addInstance(imagingSelectionInstance: ImagingSelectionInstance): this;
  addInstance(
    imagingSelectionInstance?: ImagingSelectionInstance
  ): ImagingSelectionInstance | this {
    if (imagingSelectionInstance !== undefined) {
      return this.addFieldValue('instance', imagingSelectionInstance);
    }
    const createdImagingSelectionInstance = new ImagingSelectionInstance();
    this.addFieldValue('instance', createdImagingSelectionInstance);
    return createdImagingSelectionInstance;
  }

  /** The first ImagingSelectionInstance of `instance`. One is added when the list is empty. */
  getInstanceFirstRep(): ImagingSelectionInstance {
    const firstImagingSelectionInstance = this.getInstance()[0];
    return firstImagingSelectionInstance === undefined
      ? this.addInstance()
      : firstImagingSelectionInstance;
  }
}

modelTypeRegistry.register('ImagingSelection', ImagingSelection, true);

/** True when the value is a ImagingSelection model instance. */
export function isImagingSelection(candidate: unknown): candidate is ImagingSelection {
  return candidate instanceof ImagingSelection;
}

/**
 * Selector of the instances (human or machine)
 */
export class ImagingSelectionPerformer extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'function',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'function', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'actor',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'actor',
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
  ];

  /** Type of performer (0..1) */
  function?: CodeableConcept;

  /** Author (human or machine) (0..1) */
  actor?: Reference;

  override fhirType(): string {
    return 'ImagingSelection.performer';
  }

  /** FHIR JSON for this ImagingSelectionPerformer, typed as the plain `ImagingSelectionPerformer` data type. */
  override toJSON(): plainTypes.ImagingSelectionPerformer {
    return this.serialize() as plainTypes.ImagingSelectionPerformer;
  }

  /** Type of performer (0..1) Created when absent. */
  getFunction(): CodeableConcept {
    if (this.function === undefined) {
      this.function = new CodeableConcept();
    }
    return this.function;
  }

  setFunction(functionValue: CodeableConcept | undefined): this {
    return this.setFieldValue('function', functionValue);
  }

  hasFunction(): boolean {
    return this.hasFieldValue('function');
  }

  /** Author (human or machine) (0..1) Created when absent. */
  getActor(): Reference {
    if (this.actor === undefined) {
      this.actor = new Reference();
    }
    return this.actor;
  }

  setActor(actor: Reference | undefined): this {
    return this.setFieldValue('actor', actor);
  }

  hasActor(): boolean {
    return this.hasFieldValue('actor');
  }
}

modelTypeRegistry.register('ImagingSelectionPerformer', ImagingSelectionPerformer, false);

/**
 * The selected instances
 */
export class ImagingSelectionInstance extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'uid',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'uid', typeCode: 'id' }],
    },
    {
      elementName: 'number',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'number', typeCode: 'unsignedInt' }],
    },
    {
      elementName: 'sopClass',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sopClass', typeCode: 'Coding' }],
    },
    {
      elementName: 'subset',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'subset', typeCode: 'string' }],
    },
    {
      elementName: 'imageRegion2D',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'imageRegion2D', typeCode: 'ImagingSelectionInstanceImageRegion2D' }],
    },
    {
      elementName: 'imageRegion3D',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'imageRegion3D', typeCode: 'ImagingSelectionInstanceImageRegion3D' }],
    },
  ];

  /** DICOM SOP Instance UID (1..1) */
  uid?: string;
  /** Id and extensions of the primitive `uid`. */
  _uid?: Element;

  /** DICOM Instance Number (0..1) */
  number?: number;
  /** Id and extensions of the primitive `number`. */
  _number?: Element;

  /** DICOM SOP Class UID (0..1) */
  sopClass?: Coding;

  /** The selected subset of the SOP Instance (0..*) */
  subset?: string[];
  /** Id and extensions of the primitive `subset`. */
  _subset?: (Element | null)[];

  /** A specific 2D region in a DICOM image / frame (0..*) */
  imageRegion2D?: ImagingSelectionInstanceImageRegion2D[];

  /** A specific 3D region in a DICOM frame of reference (0..*) */
  imageRegion3D?: ImagingSelectionInstanceImageRegion3D[];

  override fhirType(): string {
    return 'ImagingSelection.instance';
  }

  /** FHIR JSON for this ImagingSelectionInstance, typed as the plain `ImagingSelectionInstance` data type. */
  override toJSON(): plainTypes.ImagingSelectionInstance {
    return this.serialize() as plainTypes.ImagingSelectionInstance;
  }

  /** DICOM SOP Instance UID (1..1) */
  getUid(): string | undefined {
    return this.uid;
  }

  /** Sets `uid`. Throws a FhirModelError when the value is not a valid FHIR id. */
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

  /** DICOM Instance Number (0..1) */
  getNumber(): number | undefined {
    return this.number;
  }

  /** Sets `number`. Throws a FhirModelError when the value is not a valid FHIR unsignedInt. */
  setNumber(number: number | undefined): this {
    return this.setFieldValue('number', number);
  }

  hasNumber(): boolean {
    return this.hasFieldValue('number');
  }

  /** The element carrying the id and extensions of `number`. Created when absent. */
  getNumberElement(): Element {
    if (this._number === undefined) {
      this._number = new Element();
    }
    return this._number;
  }

  setNumberElement(numberElement: Element | undefined): this {
    this._number = numberElement;
    return this;
  }

  /** DICOM SOP Class UID (0..1) Created when absent. */
  getSopClass(): Coding {
    if (this.sopClass === undefined) {
      this.sopClass = new Coding();
    }
    return this.sopClass;
  }

  setSopClass(sopClass: Coding | undefined): this {
    return this.setFieldValue('sopClass', sopClass);
  }

  hasSopClass(): boolean {
    return this.hasFieldValue('sopClass');
  }

  /** The selected subset of the SOP Instance (0..*) Never undefined; an empty list is created when absent. */
  getSubset(): string[] {
    if (this.subset === undefined) {
      this.subset = [];
    }
    return this.subset;
  }

  setSubset(subset: string[] | undefined): this {
    return this.setFieldValue('subset', subset);
  }

  hasSubset(): boolean {
    return this.hasFieldValue('subset');
  }

  /** Appends one value to `subset`. Throws a FhirModelError when it is not a valid FHIR string. */
  addSubset(subset: string): this {
    return this.addFieldValue('subset', subset);
  }

  /** A specific 2D region in a DICOM image / frame (0..*) Never undefined; an empty list is created when absent. */
  getImageRegion2D(): ImagingSelectionInstanceImageRegion2D[] {
    if (this.imageRegion2D === undefined) {
      this.imageRegion2D = [];
    }
    return this.imageRegion2D;
  }

  setImageRegion2D(imageRegion2D: ImagingSelectionInstanceImageRegion2D[] | undefined): this {
    return this.setFieldValue('imageRegion2D', imageRegion2D);
  }

  hasImageRegion2D(): boolean {
    return this.hasFieldValue('imageRegion2D');
  }

  /** Appends a new, empty ImagingSelectionInstanceImageRegion2D to `imageRegion2D` and returns it so it can be filled in. */
  addImageRegion2D(): ImagingSelectionInstanceImageRegion2D;
  /** Appends the given ImagingSelectionInstanceImageRegion2D to `imageRegion2D` and returns this object for chaining. */
  addImageRegion2D(
    imagingSelectionInstanceImageRegion2D: ImagingSelectionInstanceImageRegion2D
  ): this;
  addImageRegion2D(
    imagingSelectionInstanceImageRegion2D?: ImagingSelectionInstanceImageRegion2D
  ): ImagingSelectionInstanceImageRegion2D | this {
    if (imagingSelectionInstanceImageRegion2D !== undefined) {
      return this.addFieldValue('imageRegion2D', imagingSelectionInstanceImageRegion2D);
    }
    const createdImagingSelectionInstanceImageRegion2D =
      new ImagingSelectionInstanceImageRegion2D();
    this.addFieldValue('imageRegion2D', createdImagingSelectionInstanceImageRegion2D);
    return createdImagingSelectionInstanceImageRegion2D;
  }

  /** The first ImagingSelectionInstanceImageRegion2D of `imageRegion2D`. One is added when the list is empty. */
  getImageRegion2DFirstRep(): ImagingSelectionInstanceImageRegion2D {
    const firstImagingSelectionInstanceImageRegion2D = this.getImageRegion2D()[0];
    return firstImagingSelectionInstanceImageRegion2D === undefined
      ? this.addImageRegion2D()
      : firstImagingSelectionInstanceImageRegion2D;
  }

  /** A specific 3D region in a DICOM frame of reference (0..*) Never undefined; an empty list is created when absent. */
  getImageRegion3D(): ImagingSelectionInstanceImageRegion3D[] {
    if (this.imageRegion3D === undefined) {
      this.imageRegion3D = [];
    }
    return this.imageRegion3D;
  }

  setImageRegion3D(imageRegion3D: ImagingSelectionInstanceImageRegion3D[] | undefined): this {
    return this.setFieldValue('imageRegion3D', imageRegion3D);
  }

  hasImageRegion3D(): boolean {
    return this.hasFieldValue('imageRegion3D');
  }

  /** Appends a new, empty ImagingSelectionInstanceImageRegion3D to `imageRegion3D` and returns it so it can be filled in. */
  addImageRegion3D(): ImagingSelectionInstanceImageRegion3D;
  /** Appends the given ImagingSelectionInstanceImageRegion3D to `imageRegion3D` and returns this object for chaining. */
  addImageRegion3D(
    imagingSelectionInstanceImageRegion3D: ImagingSelectionInstanceImageRegion3D
  ): this;
  addImageRegion3D(
    imagingSelectionInstanceImageRegion3D?: ImagingSelectionInstanceImageRegion3D
  ): ImagingSelectionInstanceImageRegion3D | this {
    if (imagingSelectionInstanceImageRegion3D !== undefined) {
      return this.addFieldValue('imageRegion3D', imagingSelectionInstanceImageRegion3D);
    }
    const createdImagingSelectionInstanceImageRegion3D =
      new ImagingSelectionInstanceImageRegion3D();
    this.addFieldValue('imageRegion3D', createdImagingSelectionInstanceImageRegion3D);
    return createdImagingSelectionInstanceImageRegion3D;
  }

  /** The first ImagingSelectionInstanceImageRegion3D of `imageRegion3D`. One is added when the list is empty. */
  getImageRegion3DFirstRep(): ImagingSelectionInstanceImageRegion3D {
    const firstImagingSelectionInstanceImageRegion3D = this.getImageRegion3D()[0];
    return firstImagingSelectionInstanceImageRegion3D === undefined
      ? this.addImageRegion3D()
      : firstImagingSelectionInstanceImageRegion3D;
  }
}

modelTypeRegistry.register('ImagingSelectionInstance', ImagingSelectionInstance, false);

/**
 * A specific 2D region in a DICOM image / frame
 */
export class ImagingSelectionInstanceImageRegion2D extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'regionType',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'regionType',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ImagingSelection2DGraphicType,
        },
      ],
    },
    {
      elementName: 'coordinate',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'coordinate', typeCode: 'decimal' }],
    },
  ];

  /** point | polyline | interpolated | circle | ellipse (1..1) */
  regionType?: valueSetCodes.ImagingSelection2DGraphicType;
  /** Id and extensions of the primitive `regionType`. */
  _regionType?: Element;

  /** Specifies the coordinates that define the image region (1..*) */
  coordinate?: number[];
  /** Id and extensions of the primitive `coordinate`. */
  _coordinate?: (Element | null)[];

  override fhirType(): string {
    return 'ImagingSelection.instance.imageRegion2D';
  }

  /** FHIR JSON for this ImagingSelectionInstanceImageRegion2D, typed as the plain `ImagingSelectionImageRegion2D` data type. */
  override toJSON(): plainTypes.ImagingSelectionImageRegion2D {
    return this.serialize() as plainTypes.ImagingSelectionImageRegion2D;
  }

  /** point | polyline | interpolated | circle | ellipse (1..1) */
  getRegionType(): valueSetCodes.ImagingSelection2DGraphicType | undefined {
    return this.regionType;
  }

  /** Sets `regionType`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setRegionType(regionType: valueSetCodes.ImagingSelection2DGraphicType | undefined): this {
    return this.setFieldValue('regionType', regionType);
  }

  hasRegionType(): boolean {
    return this.hasFieldValue('regionType');
  }

  /** The element carrying the id and extensions of `regionType`. Created when absent. */
  getRegionTypeElement(): Element {
    if (this._regionType === undefined) {
      this._regionType = new Element();
    }
    return this._regionType;
  }

  setRegionTypeElement(regionTypeElement: Element | undefined): this {
    this._regionType = regionTypeElement;
    return this;
  }

  /** Specifies the coordinates that define the image region (1..*) Never undefined; an empty list is created when absent. */
  getCoordinate(): number[] {
    if (this.coordinate === undefined) {
      this.coordinate = [];
    }
    return this.coordinate;
  }

  setCoordinate(coordinate: number[] | undefined): this {
    return this.setFieldValue('coordinate', coordinate);
  }

  hasCoordinate(): boolean {
    return this.hasFieldValue('coordinate');
  }

  /** Appends one value to `coordinate`. Throws a FhirModelError when it is not a valid FHIR decimal. */
  addCoordinate(coordinate: number): this {
    return this.addFieldValue('coordinate', coordinate);
  }
}

modelTypeRegistry.register(
  'ImagingSelectionInstanceImageRegion2D',
  ImagingSelectionInstanceImageRegion2D,
  false
);

/**
 * A specific 3D region in a DICOM frame of reference
 */
export class ImagingSelectionInstanceImageRegion3D extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'regionType',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'regionType',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ImagingSelection3DGraphicType,
        },
      ],
    },
    {
      elementName: 'coordinate',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'coordinate', typeCode: 'decimal' }],
    },
  ];

  /** point | multipoint | polyline | polygon | ellipse | ellipsoid (1..1) */
  regionType?: valueSetCodes.ImagingSelection3DGraphicType;
  /** Id and extensions of the primitive `regionType`. */
  _regionType?: Element;

  /** Specifies the coordinates that define the image region (1..*) */
  coordinate?: number[];
  /** Id and extensions of the primitive `coordinate`. */
  _coordinate?: (Element | null)[];

  override fhirType(): string {
    return 'ImagingSelection.instance.imageRegion3D';
  }

  /** FHIR JSON for this ImagingSelectionInstanceImageRegion3D, typed as the plain `ImagingSelectionImageRegion3D` data type. */
  override toJSON(): plainTypes.ImagingSelectionImageRegion3D {
    return this.serialize() as plainTypes.ImagingSelectionImageRegion3D;
  }

  /** point | multipoint | polyline | polygon | ellipse | ellipsoid (1..1) */
  getRegionType(): valueSetCodes.ImagingSelection3DGraphicType | undefined {
    return this.regionType;
  }

  /** Sets `regionType`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setRegionType(regionType: valueSetCodes.ImagingSelection3DGraphicType | undefined): this {
    return this.setFieldValue('regionType', regionType);
  }

  hasRegionType(): boolean {
    return this.hasFieldValue('regionType');
  }

  /** The element carrying the id and extensions of `regionType`. Created when absent. */
  getRegionTypeElement(): Element {
    if (this._regionType === undefined) {
      this._regionType = new Element();
    }
    return this._regionType;
  }

  setRegionTypeElement(regionTypeElement: Element | undefined): this {
    this._regionType = regionTypeElement;
    return this;
  }

  /** Specifies the coordinates that define the image region (1..*) Never undefined; an empty list is created when absent. */
  getCoordinate(): number[] {
    if (this.coordinate === undefined) {
      this.coordinate = [];
    }
    return this.coordinate;
  }

  setCoordinate(coordinate: number[] | undefined): this {
    return this.setFieldValue('coordinate', coordinate);
  }

  hasCoordinate(): boolean {
    return this.hasFieldValue('coordinate');
  }

  /** Appends one value to `coordinate`. Throws a FhirModelError when it is not a valid FHIR decimal. */
  addCoordinate(coordinate: number): this {
    return this.addFieldValue('coordinate', coordinate);
  }
}

modelTypeRegistry.register(
  'ImagingSelectionInstanceImageRegion3D',
  ImagingSelectionInstanceImageRegion3D,
  false
);
