/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { Element } from './element';
import { Period } from './period';

/**
 * Base StructureDefinition for HumanName Type
 */
export class HumanName extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'use',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'use', typeCode: 'code', allowedCodes: valueSetCodes.NameUse }],
    },
    {
      elementName: 'text',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'text', typeCode: 'string' }],
    },
    {
      elementName: 'family',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'family', typeCode: 'string' }],
    },
    {
      elementName: 'given',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'given', typeCode: 'string' }],
    },
    {
      elementName: 'prefix',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'prefix', typeCode: 'string' }],
    },
    {
      elementName: 'suffix',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'suffix', typeCode: 'string' }],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
  ];

  /** usual | official | temp | nickname | anonymous | old | maiden (0..1) */
  use?: valueSetCodes.NameUse;
  /** Id and extensions of the primitive `use`. */
  _use?: Element;

  /** Text representation of the full name (0..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;

  /** Family name (often called 'Surname') (0..1) */
  family?: string;
  /** Id and extensions of the primitive `family`. */
  _family?: Element;

  /** Given names (not always 'first'). Includes middle names (0..*) */
  given?: string[];
  /** Id and extensions of the primitive `given`. */
  _given?: (Element | null)[];

  /** Parts that come before the name (0..*) */
  prefix?: string[];
  /** Id and extensions of the primitive `prefix`. */
  _prefix?: (Element | null)[];

  /** Parts that come after the name (0..*) */
  suffix?: string[];
  /** Id and extensions of the primitive `suffix`. */
  _suffix?: (Element | null)[];

  /** Time period when name was/is in use (0..1) */
  period?: Period;

  override fhirType(): string {
    return 'HumanName';
  }

  /** FHIR JSON for this HumanName, typed as the plain `HumanName` data type. */
  override toJSON(): plainTypes.HumanName {
    return this.serialize() as plainTypes.HumanName;
  }

  /** usual | official | temp | nickname | anonymous | old | maiden (0..1) */
  getUse(): valueSetCodes.NameUse | undefined {
    return this.use;
  }

  /** Sets `use`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setUse(use: valueSetCodes.NameUse | undefined): this {
    return this.setFieldValue('use', use);
  }

  hasUse(): boolean {
    return this.hasFieldValue('use');
  }

  /** The element carrying the id and extensions of `use`. Created when absent. */
  getUseElement(): Element {
    if (this._use === undefined) {
      this._use = new Element();
    }
    return this._use;
  }

  setUseElement(useElement: Element | undefined): this {
    this._use = useElement;
    return this;
  }

  /** Text representation of the full name (0..1) */
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

  /** Family name (often called 'Surname') (0..1) */
  getFamily(): string | undefined {
    return this.family;
  }

  /** Sets `family`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setFamily(family: string | undefined): this {
    return this.setFieldValue('family', family);
  }

  hasFamily(): boolean {
    return this.hasFieldValue('family');
  }

  /** The element carrying the id and extensions of `family`. Created when absent. */
  getFamilyElement(): Element {
    if (this._family === undefined) {
      this._family = new Element();
    }
    return this._family;
  }

  setFamilyElement(familyElement: Element | undefined): this {
    this._family = familyElement;
    return this;
  }

  /** Given names (not always 'first'). Includes middle names (0..*) Never undefined; an empty list is created when absent. */
  getGiven(): string[] {
    if (this.given === undefined) {
      this.given = [];
    }
    return this.given;
  }

  setGiven(given: string[] | undefined): this {
    return this.setFieldValue('given', given);
  }

  hasGiven(): boolean {
    return this.hasFieldValue('given');
  }

  /** Appends one value to `given`. Throws a FhirModelError when it is not a valid FHIR string. */
  addGiven(given: string): this {
    return this.addFieldValue('given', given);
  }

  /** Parts that come before the name (0..*) Never undefined; an empty list is created when absent. */
  getPrefix(): string[] {
    if (this.prefix === undefined) {
      this.prefix = [];
    }
    return this.prefix;
  }

  setPrefix(prefix: string[] | undefined): this {
    return this.setFieldValue('prefix', prefix);
  }

  hasPrefix(): boolean {
    return this.hasFieldValue('prefix');
  }

  /** Appends one value to `prefix`. Throws a FhirModelError when it is not a valid FHIR string. */
  addPrefix(prefix: string): this {
    return this.addFieldValue('prefix', prefix);
  }

  /** Parts that come after the name (0..*) Never undefined; an empty list is created when absent. */
  getSuffix(): string[] {
    if (this.suffix === undefined) {
      this.suffix = [];
    }
    return this.suffix;
  }

  setSuffix(suffix: string[] | undefined): this {
    return this.setFieldValue('suffix', suffix);
  }

  hasSuffix(): boolean {
    return this.hasFieldValue('suffix');
  }

  /** Appends one value to `suffix`. Throws a FhirModelError when it is not a valid FHIR string. */
  addSuffix(suffix: string): this {
    return this.addFieldValue('suffix', suffix);
  }

  /** Time period when name was/is in use (0..1) Created when absent. */
  getPeriod(): Period {
    if (this.period === undefined) {
      this.period = new Period();
    }
    return this.period;
  }

  setPeriod(period: Period | undefined): this {
    return this.setFieldValue('period', period);
  }

  hasPeriod(): boolean {
    return this.hasFieldValue('period');
  }
}

modelTypeRegistry.register('HumanName', HumanName, false);
