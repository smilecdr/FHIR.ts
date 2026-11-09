/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import { FhirModelError } from '../../library/model';
import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../classes/models-r4';
import { Element } from './element';
import { Identifier } from './identifier';
import { Resource } from './resource';

/**
 * A reference from one resource to another.
 */
export class Reference extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'reference',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reference', typeCode: 'string' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'uri' }],
    },
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'display',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'display', typeCode: 'string' }],
    },
  ];

  /** Literal reference, Relative, internal or absolute URL (0..1) */
  reference?: string;
  /** Id and extensions of the primitive `reference`. */
  _reference?: Element;

  /** Type the reference refers to (e.g. "Patient") (0..1) */
  type?: string;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Logical reference, when literal reference is not known (0..1) */
  identifier?: Identifier;

  /** Text alternative for the resource (0..1) */
  display?: string;
  /** Id and extensions of the primitive `display`. */
  _display?: Element;

  override fhirType(): string {
    return 'Reference';
  }

  /** FHIR JSON for this Reference, typed as the plain `Reference` data type. */
  override toJSON(): plainTypes.Reference {
    return this.serialize() as plainTypes.Reference;
  }

  /** Literal reference, Relative, internal or absolute URL (0..1) */
  getReference(): string | undefined {
    return this.reference;
  }

  /** Sets `reference`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setReference(reference: string | undefined): this {
    return this.setFieldValue('reference', reference);
  }

  hasReference(): boolean {
    return this.hasFieldValue('reference');
  }

  /** The element carrying the id and extensions of `reference`. Created when absent. */
  getReferenceElement(): Element {
    if (this._reference === undefined) {
      this._reference = new Element();
    }
    return this._reference;
  }

  setReferenceElement(referenceElement: Element | undefined): this {
    this._reference = referenceElement;
    return this;
  }

  /** Type the reference refers to (e.g. "Patient") (0..1) */
  getType(): string | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setType(type: string | undefined): this {
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

  /** Logical reference, when literal reference is not known (0..1) Created when absent. */
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

  /** Text alternative for the resource (0..1) */
  getDisplay(): string | undefined {
    return this.display;
  }

  /** Sets `display`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDisplay(display: string | undefined): this {
    return this.setFieldValue('display', display);
  }

  hasDisplay(): boolean {
    return this.hasFieldValue('display');
  }

  /** The element carrying the id and extensions of `display`. Created when absent. */
  getDisplayElement(): Element {
    if (this._display === undefined) {
      this._display = new Element();
    }
    return this._display;
  }

  setDisplayElement(displayElement: Element | undefined): this {
    this._display = displayElement;
    return this;
  }

  /** Builds a relative reference such as `Patient/123` to a resource that has an id. */
  static to(resource: Resource): Reference {
    const resourceId = resource.getId();
    if (resourceId === undefined) {
      throw new FhirModelError(
        'required',
        `${resource.resourceType}.id`,
        'a resource needs an id before it can be referenced'
      );
    }
    return new Reference().setReference(`${resource.resourceType}/${resourceId}`);
  }
}

modelTypeRegistry.register('Reference', Reference, false);
