/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../classes/models-r3';
import { Element } from './element';
import { Reference } from './reference';

/**
 * Base StructureDefinition for Annotation Type
 */
export class Annotation extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'author',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'authorReference',
          typeCode: 'Reference',
          targetResourceTypes: ['Patient', 'Practitioner', 'RelatedPerson'],
        },
        { jsonKey: 'authorString', typeCode: 'string' },
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
      elementName: 'text',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'text', typeCode: 'string' }],
    },
  ];

  /** Individual responsible for the annotation (0..1) */
  authorReference?: Reference;
  /** Individual responsible for the annotation (0..1) */
  authorString?: string;
  /** Id and extensions of the primitive `authorString`. */
  _authorString?: Element;

  /** When the annotation was made (0..1) */
  time?: string;
  /** Id and extensions of the primitive `time`. */
  _time?: Element;

  /** The annotation - text content (1..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;

  override fhirType(): string {
    return 'Annotation';
  }

  /** FHIR JSON for this Annotation, typed as the plain `Annotation` data type. */
  override toJSON(): plainTypes.Annotation {
    return this.serialize() as plainTypes.Annotation;
  }

  /** Individual responsible for the annotation (0..1) Whichever type of `author[x]` is set. */
  getAuthor(): Reference | string | undefined {
    return this.getChoiceValue<Reference | string>('author');
  }

  /** True when any type of `author[x]` is set. */
  hasAuthor(): boolean {
    return this.hasChoiceValue('author');
  }

  getAuthorReference(): Reference | undefined {
    return this.authorReference;
  }

  /** Sets `author[x]` as Reference and clears every other type of it. */
  setAuthorReference(authorReference: Reference | undefined): this {
    return this.setFieldValue('authorReference', authorReference);
  }

  hasAuthorReference(): boolean {
    return this.hasFieldValue('authorReference');
  }

  getAuthorString(): string | undefined {
    return this.authorString;
  }

  /** Sets `author[x]` as string and clears every other type of it. */
  setAuthorString(authorString: string | undefined): this {
    return this.setFieldValue('authorString', authorString);
  }

  hasAuthorString(): boolean {
    return this.hasFieldValue('authorString');
  }

  /** When the annotation was made (0..1) */
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

  /** The annotation - text content (1..1) */
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

modelTypeRegistry.register('Annotation', Annotation, false);
