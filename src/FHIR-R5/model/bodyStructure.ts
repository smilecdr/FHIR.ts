/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../models';
import { Attachment } from './attachment';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { CodeableReference } from './codeableReference';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Quantity } from './quantity';
import { Reference } from './reference';

/**
 * Record details about an anatomical structure. This resource may be used when a coded concept does not provide the necessary detail needed for the use case.
 */
export class BodyStructure extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'active',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'active', typeCode: 'boolean' }],
    },
    {
      elementName: 'morphology',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'morphology', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'includedStructure',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'includedStructure', typeCode: 'BodyStructureIncludedStructure' }],
    },
    {
      elementName: 'excludedStructure',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'excludedStructure', typeCode: 'BodyStructureIncludedStructure' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'image',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'image', typeCode: 'Attachment' }],
    },
    {
      elementName: 'patient',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'patient', typeCode: 'Reference', targetResourceTypes: ['Patient'] }],
    },
  ];

  readonly resourceType = 'BodyStructure';

  /** Bodystructure identifier (0..*) */
  identifier?: Identifier[];

  /** Whether this record is in active use (0..1) */
  active?: boolean;
  /** Id and extensions of the primitive `active`. */
  _active?: Element;

  /** Kind of Structure (0..1) */
  morphology?: CodeableConcept;

  /** Included anatomic location(s) (1..*) */
  includedStructure?: BodyStructureIncludedStructure[];

  /** Excluded anatomic locations(s) (0..*) */
  excludedStructure?: BodyStructureIncludedStructure[];

  /** Text description (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Attached images (0..*) */
  image?: Attachment[];

  /** Who this is about (1..1) */
  patient?: Reference;

  override fhirType(): string {
    return 'BodyStructure';
  }

  /** FHIR JSON for this BodyStructure, typed as the plain `BodyStructure` data type. */
  override toJSON(): plainTypes.BodyStructure {
    return this.serialize() as plainTypes.BodyStructure;
  }

  /** Bodystructure identifier (0..*) Never undefined; an empty list is created when absent. */
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

  /** Whether this record is in active use (0..1) */
  getActive(): boolean | undefined {
    return this.active;
  }

  /** Sets `active`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setActive(active: boolean | undefined): this {
    return this.setFieldValue('active', active);
  }

  hasActive(): boolean {
    return this.hasFieldValue('active');
  }

  /** The element carrying the id and extensions of `active`. Created when absent. */
  getActiveElement(): Element {
    if (this._active === undefined) {
      this._active = new Element();
    }
    return this._active;
  }

  setActiveElement(activeElement: Element | undefined): this {
    this._active = activeElement;
    return this;
  }

  /** Kind of Structure (0..1) Created when absent. */
  getMorphology(): CodeableConcept {
    if (this.morphology === undefined) {
      this.morphology = new CodeableConcept();
    }
    return this.morphology;
  }

  setMorphology(morphology: CodeableConcept | undefined): this {
    return this.setFieldValue('morphology', morphology);
  }

  hasMorphology(): boolean {
    return this.hasFieldValue('morphology');
  }

  /** Included anatomic location(s) (1..*) Never undefined; an empty list is created when absent. */
  getIncludedStructure(): BodyStructureIncludedStructure[] {
    if (this.includedStructure === undefined) {
      this.includedStructure = [];
    }
    return this.includedStructure;
  }

  setIncludedStructure(includedStructure: BodyStructureIncludedStructure[] | undefined): this {
    return this.setFieldValue('includedStructure', includedStructure);
  }

  hasIncludedStructure(): boolean {
    return this.hasFieldValue('includedStructure');
  }

  /** Appends a new, empty BodyStructureIncludedStructure to `includedStructure` and returns it so it can be filled in. */
  addIncludedStructure(): BodyStructureIncludedStructure;
  /** Appends the given BodyStructureIncludedStructure to `includedStructure` and returns this object for chaining. */
  addIncludedStructure(bodyStructureIncludedStructure: BodyStructureIncludedStructure): this;
  addIncludedStructure(
    bodyStructureIncludedStructure?: BodyStructureIncludedStructure
  ): BodyStructureIncludedStructure | this {
    if (bodyStructureIncludedStructure !== undefined) {
      return this.addFieldValue('includedStructure', bodyStructureIncludedStructure);
    }
    const createdBodyStructureIncludedStructure = new BodyStructureIncludedStructure();
    this.addFieldValue('includedStructure', createdBodyStructureIncludedStructure);
    return createdBodyStructureIncludedStructure;
  }

  /** The first BodyStructureIncludedStructure of `includedStructure`. One is added when the list is empty. */
  getIncludedStructureFirstRep(): BodyStructureIncludedStructure {
    const firstBodyStructureIncludedStructure = this.getIncludedStructure()[0];
    return firstBodyStructureIncludedStructure === undefined
      ? this.addIncludedStructure()
      : firstBodyStructureIncludedStructure;
  }

  /** Excluded anatomic locations(s) (0..*) Never undefined; an empty list is created when absent. */
  getExcludedStructure(): BodyStructureIncludedStructure[] {
    if (this.excludedStructure === undefined) {
      this.excludedStructure = [];
    }
    return this.excludedStructure;
  }

  setExcludedStructure(excludedStructure: BodyStructureIncludedStructure[] | undefined): this {
    return this.setFieldValue('excludedStructure', excludedStructure);
  }

  hasExcludedStructure(): boolean {
    return this.hasFieldValue('excludedStructure');
  }

  /** Appends a new, empty BodyStructureIncludedStructure to `excludedStructure` and returns it so it can be filled in. */
  addExcludedStructure(): BodyStructureIncludedStructure;
  /** Appends the given BodyStructureIncludedStructure to `excludedStructure` and returns this object for chaining. */
  addExcludedStructure(bodyStructureIncludedStructure: BodyStructureIncludedStructure): this;
  addExcludedStructure(
    bodyStructureIncludedStructure?: BodyStructureIncludedStructure
  ): BodyStructureIncludedStructure | this {
    if (bodyStructureIncludedStructure !== undefined) {
      return this.addFieldValue('excludedStructure', bodyStructureIncludedStructure);
    }
    const createdBodyStructureIncludedStructure = new BodyStructureIncludedStructure();
    this.addFieldValue('excludedStructure', createdBodyStructureIncludedStructure);
    return createdBodyStructureIncludedStructure;
  }

  /** The first BodyStructureIncludedStructure of `excludedStructure`. One is added when the list is empty. */
  getExcludedStructureFirstRep(): BodyStructureIncludedStructure {
    const firstBodyStructureIncludedStructure = this.getExcludedStructure()[0];
    return firstBodyStructureIncludedStructure === undefined
      ? this.addExcludedStructure()
      : firstBodyStructureIncludedStructure;
  }

  /** Text description (0..1) */
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

  /** Attached images (0..*) Never undefined; an empty list is created when absent. */
  getImage(): Attachment[] {
    if (this.image === undefined) {
      this.image = [];
    }
    return this.image;
  }

  setImage(image: Attachment[] | undefined): this {
    return this.setFieldValue('image', image);
  }

  hasImage(): boolean {
    return this.hasFieldValue('image');
  }

  /** Appends a new, empty Attachment to `image` and returns it so it can be filled in. */
  addImage(): Attachment;
  /** Appends the given Attachment to `image` and returns this object for chaining. */
  addImage(attachment: Attachment): this;
  addImage(attachment?: Attachment): Attachment | this {
    if (attachment !== undefined) {
      return this.addFieldValue('image', attachment);
    }
    const createdAttachment = new Attachment();
    this.addFieldValue('image', createdAttachment);
    return createdAttachment;
  }

  /** The first Attachment of `image`. One is added when the list is empty. */
  getImageFirstRep(): Attachment {
    const firstAttachment = this.getImage()[0];
    return firstAttachment === undefined ? this.addImage() : firstAttachment;
  }

  /** Who this is about (1..1) Created when absent. */
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
}

modelTypeRegistry.register('BodyStructure', BodyStructure, true);

/** True when the value is a BodyStructure model instance. */
export function isBodyStructure(candidate: unknown): candidate is BodyStructure {
  return candidate instanceof BodyStructure;
}

/**
 * Included anatomic location(s)
 */
export class BodyStructureIncludedStructure extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'structure',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'structure', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'laterality',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'laterality', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'bodyLandmarkOrientation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'bodyLandmarkOrientation',
          typeCode: 'BodyStructureIncludedStructureBodyLandmarkOrientation',
        },
      ],
    },
    {
      elementName: 'spatialReference',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'spatialReference',
          typeCode: 'Reference',
          targetResourceTypes: ['ImagingSelection'],
        },
      ],
    },
    {
      elementName: 'qualifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'qualifier', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Code that represents the included structure (1..1) */
  structure?: CodeableConcept;

  /** Code that represents the included structure laterality (0..1) */
  laterality?: CodeableConcept;

  /** Landmark relative location (0..*) */
  bodyLandmarkOrientation?: BodyStructureIncludedStructureBodyLandmarkOrientation[];

  /** Cartesian reference for structure (0..*) */
  spatialReference?: Reference[];

  /** Code that represents the included structure qualifier (0..*) */
  qualifier?: CodeableConcept[];

  override fhirType(): string {
    return 'BodyStructure.includedStructure';
  }

  /** FHIR JSON for this BodyStructureIncludedStructure, typed as the plain `BodyStructureIncludedStructure` data type. */
  override toJSON(): plainTypes.BodyStructureIncludedStructure {
    return this.serialize() as plainTypes.BodyStructureIncludedStructure;
  }

  /** Code that represents the included structure (1..1) Created when absent. */
  getStructure(): CodeableConcept {
    if (this.structure === undefined) {
      this.structure = new CodeableConcept();
    }
    return this.structure;
  }

  setStructure(structure: CodeableConcept | undefined): this {
    return this.setFieldValue('structure', structure);
  }

  hasStructure(): boolean {
    return this.hasFieldValue('structure');
  }

  /** Code that represents the included structure laterality (0..1) Created when absent. */
  getLaterality(): CodeableConcept {
    if (this.laterality === undefined) {
      this.laterality = new CodeableConcept();
    }
    return this.laterality;
  }

  setLaterality(laterality: CodeableConcept | undefined): this {
    return this.setFieldValue('laterality', laterality);
  }

  hasLaterality(): boolean {
    return this.hasFieldValue('laterality');
  }

  /** Landmark relative location (0..*) Never undefined; an empty list is created when absent. */
  getBodyLandmarkOrientation(): BodyStructureIncludedStructureBodyLandmarkOrientation[] {
    if (this.bodyLandmarkOrientation === undefined) {
      this.bodyLandmarkOrientation = [];
    }
    return this.bodyLandmarkOrientation;
  }

  setBodyLandmarkOrientation(
    bodyLandmarkOrientation: BodyStructureIncludedStructureBodyLandmarkOrientation[] | undefined
  ): this {
    return this.setFieldValue('bodyLandmarkOrientation', bodyLandmarkOrientation);
  }

  hasBodyLandmarkOrientation(): boolean {
    return this.hasFieldValue('bodyLandmarkOrientation');
  }

  /** Appends a new, empty BodyStructureIncludedStructureBodyLandmarkOrientation to `bodyLandmarkOrientation` and returns it so it can be filled in. */
  addBodyLandmarkOrientation(): BodyStructureIncludedStructureBodyLandmarkOrientation;
  /** Appends the given BodyStructureIncludedStructureBodyLandmarkOrientation to `bodyLandmarkOrientation` and returns this object for chaining. */
  addBodyLandmarkOrientation(
    bodyStructureIncludedStructureBodyLandmarkOrientation: BodyStructureIncludedStructureBodyLandmarkOrientation
  ): this;
  addBodyLandmarkOrientation(
    bodyStructureIncludedStructureBodyLandmarkOrientation?: BodyStructureIncludedStructureBodyLandmarkOrientation
  ): BodyStructureIncludedStructureBodyLandmarkOrientation | this {
    if (bodyStructureIncludedStructureBodyLandmarkOrientation !== undefined) {
      return this.addFieldValue(
        'bodyLandmarkOrientation',
        bodyStructureIncludedStructureBodyLandmarkOrientation
      );
    }
    const createdBodyStructureIncludedStructureBodyLandmarkOrientation =
      new BodyStructureIncludedStructureBodyLandmarkOrientation();
    this.addFieldValue(
      'bodyLandmarkOrientation',
      createdBodyStructureIncludedStructureBodyLandmarkOrientation
    );
    return createdBodyStructureIncludedStructureBodyLandmarkOrientation;
  }

  /** The first BodyStructureIncludedStructureBodyLandmarkOrientation of `bodyLandmarkOrientation`. One is added when the list is empty. */
  getBodyLandmarkOrientationFirstRep(): BodyStructureIncludedStructureBodyLandmarkOrientation {
    const firstBodyStructureIncludedStructureBodyLandmarkOrientation =
      this.getBodyLandmarkOrientation()[0];
    return firstBodyStructureIncludedStructureBodyLandmarkOrientation === undefined
      ? this.addBodyLandmarkOrientation()
      : firstBodyStructureIncludedStructureBodyLandmarkOrientation;
  }

  /** Cartesian reference for structure (0..*) Never undefined; an empty list is created when absent. */
  getSpatialReference(): Reference[] {
    if (this.spatialReference === undefined) {
      this.spatialReference = [];
    }
    return this.spatialReference;
  }

  setSpatialReference(spatialReference: Reference[] | undefined): this {
    return this.setFieldValue('spatialReference', spatialReference);
  }

  hasSpatialReference(): boolean {
    return this.hasFieldValue('spatialReference');
  }

  /** Appends a new, empty Reference to `spatialReference` and returns it so it can be filled in. */
  addSpatialReference(): Reference;
  /** Appends the given Reference to `spatialReference` and returns this object for chaining. */
  addSpatialReference(reference: Reference): this;
  addSpatialReference(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('spatialReference', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('spatialReference', createdReference);
    return createdReference;
  }

  /** The first Reference of `spatialReference`. One is added when the list is empty. */
  getSpatialReferenceFirstRep(): Reference {
    const firstReference = this.getSpatialReference()[0];
    return firstReference === undefined ? this.addSpatialReference() : firstReference;
  }

  /** Code that represents the included structure qualifier (0..*) Never undefined; an empty list is created when absent. */
  getQualifier(): CodeableConcept[] {
    if (this.qualifier === undefined) {
      this.qualifier = [];
    }
    return this.qualifier;
  }

  setQualifier(qualifier: CodeableConcept[] | undefined): this {
    return this.setFieldValue('qualifier', qualifier);
  }

  hasQualifier(): boolean {
    return this.hasFieldValue('qualifier');
  }

  /** Appends a new, empty CodeableConcept to `qualifier` and returns it so it can be filled in. */
  addQualifier(): CodeableConcept;
  /** Appends the given CodeableConcept to `qualifier` and returns this object for chaining. */
  addQualifier(codeableConcept: CodeableConcept): this;
  addQualifier(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('qualifier', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('qualifier', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `qualifier`. One is added when the list is empty. */
  getQualifierFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getQualifier()[0];
    return firstCodeableConcept === undefined ? this.addQualifier() : firstCodeableConcept;
  }
}

modelTypeRegistry.register('BodyStructureIncludedStructure', BodyStructureIncludedStructure, false);

/**
 * Landmark relative location
 */
export class BodyStructureIncludedStructureBodyLandmarkOrientation extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'landmarkDescription',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'landmarkDescription', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'clockFacePosition',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'clockFacePosition', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'distanceFromLandmark',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'distanceFromLandmark',
          typeCode: 'BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark',
        },
      ],
    },
    {
      elementName: 'surfaceOrientation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'surfaceOrientation', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Body ]andmark description (0..*) */
  landmarkDescription?: CodeableConcept[];

  /** Clockface orientation (0..*) */
  clockFacePosition?: CodeableConcept[];

  /** Landmark relative location (0..*) */
  distanceFromLandmark?: BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark[];

  /** Relative landmark surface orientation (0..*) */
  surfaceOrientation?: CodeableConcept[];

  override fhirType(): string {
    return 'BodyStructure.includedStructure.bodyLandmarkOrientation';
  }

  /** FHIR JSON for this BodyStructureIncludedStructureBodyLandmarkOrientation, typed as the plain `BodyStructureBodyLandmarkOrientation` data type. */
  override toJSON(): plainTypes.BodyStructureBodyLandmarkOrientation {
    return this.serialize() as plainTypes.BodyStructureBodyLandmarkOrientation;
  }

  /** Body ]andmark description (0..*) Never undefined; an empty list is created when absent. */
  getLandmarkDescription(): CodeableConcept[] {
    if (this.landmarkDescription === undefined) {
      this.landmarkDescription = [];
    }
    return this.landmarkDescription;
  }

  setLandmarkDescription(landmarkDescription: CodeableConcept[] | undefined): this {
    return this.setFieldValue('landmarkDescription', landmarkDescription);
  }

  hasLandmarkDescription(): boolean {
    return this.hasFieldValue('landmarkDescription');
  }

  /** Appends a new, empty CodeableConcept to `landmarkDescription` and returns it so it can be filled in. */
  addLandmarkDescription(): CodeableConcept;
  /** Appends the given CodeableConcept to `landmarkDescription` and returns this object for chaining. */
  addLandmarkDescription(codeableConcept: CodeableConcept): this;
  addLandmarkDescription(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('landmarkDescription', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('landmarkDescription', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `landmarkDescription`. One is added when the list is empty. */
  getLandmarkDescriptionFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getLandmarkDescription()[0];
    return firstCodeableConcept === undefined
      ? this.addLandmarkDescription()
      : firstCodeableConcept;
  }

  /** Clockface orientation (0..*) Never undefined; an empty list is created when absent. */
  getClockFacePosition(): CodeableConcept[] {
    if (this.clockFacePosition === undefined) {
      this.clockFacePosition = [];
    }
    return this.clockFacePosition;
  }

  setClockFacePosition(clockFacePosition: CodeableConcept[] | undefined): this {
    return this.setFieldValue('clockFacePosition', clockFacePosition);
  }

  hasClockFacePosition(): boolean {
    return this.hasFieldValue('clockFacePosition');
  }

  /** Appends a new, empty CodeableConcept to `clockFacePosition` and returns it so it can be filled in. */
  addClockFacePosition(): CodeableConcept;
  /** Appends the given CodeableConcept to `clockFacePosition` and returns this object for chaining. */
  addClockFacePosition(codeableConcept: CodeableConcept): this;
  addClockFacePosition(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('clockFacePosition', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('clockFacePosition', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `clockFacePosition`. One is added when the list is empty. */
  getClockFacePositionFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getClockFacePosition()[0];
    return firstCodeableConcept === undefined ? this.addClockFacePosition() : firstCodeableConcept;
  }

  /** Landmark relative location (0..*) Never undefined; an empty list is created when absent. */
  getDistanceFromLandmark(): BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark[] {
    if (this.distanceFromLandmark === undefined) {
      this.distanceFromLandmark = [];
    }
    return this.distanceFromLandmark;
  }

  setDistanceFromLandmark(
    distanceFromLandmark:
      BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark[] | undefined
  ): this {
    return this.setFieldValue('distanceFromLandmark', distanceFromLandmark);
  }

  hasDistanceFromLandmark(): boolean {
    return this.hasFieldValue('distanceFromLandmark');
  }

  /** Appends a new, empty BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark to `distanceFromLandmark` and returns it so it can be filled in. */
  addDistanceFromLandmark(): BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark;
  /** Appends the given BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark to `distanceFromLandmark` and returns this object for chaining. */
  addDistanceFromLandmark(
    bodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark: BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark
  ): this;
  addDistanceFromLandmark(
    bodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark?: BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark
  ): BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark | this {
    if (bodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark !== undefined) {
      return this.addFieldValue(
        'distanceFromLandmark',
        bodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark
      );
    }
    const createdBodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark =
      new BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark();
    this.addFieldValue(
      'distanceFromLandmark',
      createdBodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark
    );
    return createdBodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark;
  }

  /** The first BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark of `distanceFromLandmark`. One is added when the list is empty. */
  getDistanceFromLandmarkFirstRep(): BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark {
    const firstBodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark =
      this.getDistanceFromLandmark()[0];
    return firstBodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark ===
      undefined
      ? this.addDistanceFromLandmark()
      : firstBodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark;
  }

  /** Relative landmark surface orientation (0..*) Never undefined; an empty list is created when absent. */
  getSurfaceOrientation(): CodeableConcept[] {
    if (this.surfaceOrientation === undefined) {
      this.surfaceOrientation = [];
    }
    return this.surfaceOrientation;
  }

  setSurfaceOrientation(surfaceOrientation: CodeableConcept[] | undefined): this {
    return this.setFieldValue('surfaceOrientation', surfaceOrientation);
  }

  hasSurfaceOrientation(): boolean {
    return this.hasFieldValue('surfaceOrientation');
  }

  /** Appends a new, empty CodeableConcept to `surfaceOrientation` and returns it so it can be filled in. */
  addSurfaceOrientation(): CodeableConcept;
  /** Appends the given CodeableConcept to `surfaceOrientation` and returns this object for chaining. */
  addSurfaceOrientation(codeableConcept: CodeableConcept): this;
  addSurfaceOrientation(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('surfaceOrientation', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('surfaceOrientation', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `surfaceOrientation`. One is added when the list is empty. */
  getSurfaceOrientationFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getSurfaceOrientation()[0];
    return firstCodeableConcept === undefined ? this.addSurfaceOrientation() : firstCodeableConcept;
  }
}

modelTypeRegistry.register(
  'BodyStructureIncludedStructureBodyLandmarkOrientation',
  BodyStructureIncludedStructureBodyLandmarkOrientation,
  false
);

/**
 * Landmark relative location
 */
export class BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'device',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'device', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'value',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'value', typeCode: 'Quantity' }],
    },
  ];

  /** Measurement device (0..*) */
  device?: CodeableReference[];

  /** Measured distance from body landmark (0..*) */
  value?: Quantity[];

  override fhirType(): string {
    return 'BodyStructure.includedStructure.bodyLandmarkOrientation.distanceFromLandmark';
  }

  /** FHIR JSON for this BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark, typed as the plain `BodyStructureDistanceFromLandmark` data type. */
  override toJSON(): plainTypes.BodyStructureDistanceFromLandmark {
    return this.serialize() as plainTypes.BodyStructureDistanceFromLandmark;
  }

  /** Measurement device (0..*) Never undefined; an empty list is created when absent. */
  getDevice(): CodeableReference[] {
    if (this.device === undefined) {
      this.device = [];
    }
    return this.device;
  }

  setDevice(device: CodeableReference[] | undefined): this {
    return this.setFieldValue('device', device);
  }

  hasDevice(): boolean {
    return this.hasFieldValue('device');
  }

  /** Appends a new, empty CodeableReference to `device` and returns it so it can be filled in. */
  addDevice(): CodeableReference;
  /** Appends the given CodeableReference to `device` and returns this object for chaining. */
  addDevice(codeableReference: CodeableReference): this;
  addDevice(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('device', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('device', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `device`. One is added when the list is empty. */
  getDeviceFirstRep(): CodeableReference {
    const firstCodeableReference = this.getDevice()[0];
    return firstCodeableReference === undefined ? this.addDevice() : firstCodeableReference;
  }

  /** Measured distance from body landmark (0..*) Never undefined; an empty list is created when absent. */
  getValue(): Quantity[] {
    if (this.value === undefined) {
      this.value = [];
    }
    return this.value;
  }

  setValue(value: Quantity[] | undefined): this {
    return this.setFieldValue('value', value);
  }

  hasValue(): boolean {
    return this.hasFieldValue('value');
  }

  /** Appends a new, empty Quantity to `value` and returns it so it can be filled in. */
  addValue(): Quantity;
  /** Appends the given Quantity to `value` and returns this object for chaining. */
  addValue(quantity: Quantity): this;
  addValue(quantity?: Quantity): Quantity | this {
    if (quantity !== undefined) {
      return this.addFieldValue('value', quantity);
    }
    const createdQuantity = new Quantity();
    this.addFieldValue('value', createdQuantity);
    return createdQuantity;
  }

  /** The first Quantity of `value`. One is added when the list is empty. */
  getValueFirstRep(): Quantity {
    const firstQuantity = this.getValue()[0];
    return firstQuantity === undefined ? this.addValue() : firstQuantity;
  }
}

modelTypeRegistry.register(
  'BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark',
  BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark,
  false
);
