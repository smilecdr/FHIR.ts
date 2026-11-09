/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../classes/models-r3';
import { Coding } from './coding';
import { Element } from './element';

/**
 * Base StructureDefinition for CodeableConcept Type
 */
export class CodeableConcept extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'coding',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'coding', typeCode: 'Coding' }],
    },
    {
      elementName: 'text',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'text', typeCode: 'string' }],
    },
  ];

  /** Code defined by a terminology system (0..*) */
  coding?: Coding[];

  /** Plain text representation of the concept (0..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;

  override fhirType(): string {
    return 'CodeableConcept';
  }

  /** FHIR JSON for this CodeableConcept, typed as the plain `CodeableConcept` data type. */
  override toJSON(): plainTypes.CodeableConcept {
    return this.serialize() as plainTypes.CodeableConcept;
  }

  /** Code defined by a terminology system (0..*) Never undefined; an empty list is created when absent. */
  getCoding(): Coding[] {
    if (this.coding === undefined) {
      this.coding = [];
    }
    return this.coding;
  }

  setCoding(coding: Coding[] | undefined): this {
    return this.setFieldValue('coding', coding);
  }

  hasCoding(): boolean {
    return this.hasFieldValue('coding');
  }

  /** Appends a new, empty Coding to `coding` and returns it so it can be filled in. */
  addCoding(): Coding;
  /** Appends the given Coding to `coding` and returns this object for chaining. */
  addCoding(coding: Coding): this;
  addCoding(coding?: Coding): Coding | this {
    if (coding !== undefined) {
      return this.addFieldValue('coding', coding);
    }
    const createdCoding = new Coding();
    this.addFieldValue('coding', createdCoding);
    return createdCoding;
  }

  /** The first Coding of `coding`. One is added when the list is empty. */
  getCodingFirstRep(): Coding {
    const firstCoding = this.getCoding()[0];
    return firstCoding === undefined ? this.addCoding() : firstCoding;
  }

  /** Plain text representation of the concept (0..1) */
  getText(): string | undefined {
    return this.text;
  }

  /** Sets `text`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setText(text: string | undefined): this {
    return this.setFieldValue('text', text);
  }

  hasText(): boolean {
    return this.hasFieldValue('text');
  }

  /** The element carrying the id and extensions of `text`. Created when absent. */
  getTextElement(): Element {
    if (this._text === undefined) {
      this._text = new Element();
    }
    return this._text;
  }

  setTextElement(textElement: Element | undefined): this {
    this._text = textElement;
    return this;
  }
}

modelTypeRegistry.register('CodeableConcept', CodeableConcept, false);
