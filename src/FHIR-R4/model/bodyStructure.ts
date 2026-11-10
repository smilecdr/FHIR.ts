/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../classes/models-r4';
import { Attachment } from './attachment';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
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
      elementName: 'location',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'location', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'locationQualifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'locationQualifier', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
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

  /** Body site (0..1) */
  location?: CodeableConcept;

  /** Body site modifier (0..*) */
  locationQualifier?: CodeableConcept[];

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

  /** Body site (0..1) Created when absent. */
  getLocation(): CodeableConcept {
    if (this.location === undefined) {
      this.location = new CodeableConcept();
    }
    return this.location;
  }

  setLocation(location: CodeableConcept | undefined): this {
    return this.setFieldValue('location', location);
  }

  hasLocation(): boolean {
    return this.hasFieldValue('location');
  }

  /** Body site modifier (0..*) Never undefined; an empty list is created when absent. */
  getLocationQualifier(): CodeableConcept[] {
    if (this.locationQualifier === undefined) {
      this.locationQualifier = [];
    }
    return this.locationQualifier;
  }

  setLocationQualifier(locationQualifier: CodeableConcept[] | undefined): this {
    return this.setFieldValue('locationQualifier', locationQualifier);
  }

  hasLocationQualifier(): boolean {
    return this.hasFieldValue('locationQualifier');
  }

  /** Appends a new, empty CodeableConcept to `locationQualifier` and returns it so it can be filled in. */
  addLocationQualifier(): CodeableConcept;
  /** Appends the given CodeableConcept to `locationQualifier` and returns this object for chaining. */
  addLocationQualifier(codeableConcept: CodeableConcept): this;
  addLocationQualifier(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('locationQualifier', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('locationQualifier', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `locationQualifier`. One is added when the list is empty. */
  getLocationQualifierFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getLocationQualifier()[0];
    return firstCodeableConcept === undefined ? this.addLocationQualifier() : firstCodeableConcept;
  }

  /** Text description (0..1) */
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
