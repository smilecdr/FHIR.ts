/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../models';
import { Coding } from './coding';
import { DataType } from './dataType';
import { Element } from './element';
import { Reference } from './reference';

/**
 * Signature Type: A signature along with supporting context. The signature may be a digital signature that is cryptographic in nature, or some other signature acceptable to the domain. This other signature may be as simple as a graphical image representing a hand-written signature, or a signature ceremony Different signature approaches have different utilities.
 */
export class Signature extends DataType {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'type', typeCode: 'Coding' }],
    },
    {
      elementName: 'when',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'when', typeCode: 'instant' }],
    },
    {
      elementName: 'who',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'who',
          typeCode: 'Reference',
          targetResourceTypes: [
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
      elementName: 'onBehalfOf',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'onBehalfOf',
          typeCode: 'Reference',
          targetResourceTypes: [
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
      elementName: 'targetFormat',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'targetFormat', typeCode: 'code' }],
    },
    {
      elementName: 'sigFormat',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sigFormat', typeCode: 'code' }],
    },
    {
      elementName: 'data',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'data', typeCode: 'base64Binary' }],
    },
  ];

  /** Indication of the reason the entity signed the object(s) (0..*) */
  type?: Coding[];

  /** When the signature was created (0..1) */
  when?: string;
  /** Id and extensions of the primitive `when`. */
  _when?: Element;

  /** Who signed (0..1) */
  who?: Reference;

  /** The party represented (0..1) */
  onBehalfOf?: Reference;

  /** The technical format of the signed resources (0..1) */
  targetFormat?: string;
  /** Id and extensions of the primitive `targetFormat`. */
  _targetFormat?: Element;

  /** The technical format of the signature (0..1) */
  sigFormat?: string;
  /** Id and extensions of the primitive `sigFormat`. */
  _sigFormat?: Element;

  /** The actual signature content (XML DigSig. JWS, picture, etc.) (0..1) */
  data?: string;
  /** Id and extensions of the primitive `data`. */
  _data?: Element;

  override fhirType(): string {
    return 'Signature';
  }

  /** FHIR JSON for this Signature, typed as the plain `Signature` data type. */
  override toJSON(): plainTypes.Signature {
    return this.serialize() as plainTypes.Signature;
  }

  /** Indication of the reason the entity signed the object(s) (0..*) Never undefined; an empty list is created when absent. */
  getType(): Coding[] {
    if (this.type === undefined) {
      this.type = [];
    }
    return this.type;
  }

  setType(type: Coding[] | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Appends a new, empty Coding to `type` and returns it so it can be filled in. */
  addType(): Coding;
  /** Appends the given Coding to `type` and returns this object for chaining. */
  addType(coding: Coding): this;
  addType(coding?: Coding): Coding | this {
    if (coding !== undefined) {
      return this.addFieldValue('type', coding);
    }
    const createdCoding = new Coding();
    this.addFieldValue('type', createdCoding);
    return createdCoding;
  }

  /** The first Coding of `type`. One is added when the list is empty. */
  getTypeFirstRep(): Coding {
    const firstCoding = this.getType()[0];
    return firstCoding === undefined ? this.addType() : firstCoding;
  }

  /** When the signature was created (0..1) */
  getWhen(): string | undefined {
    return this.when;
  }

  /** Sets `when`. Throws a FhirModelError when the value is not a valid FHIR instant. */
  setWhen(when: string | undefined): this {
    return this.setFieldValue('when', when);
  }

  hasWhen(): boolean {
    return this.hasFieldValue('when');
  }

  /** The element carrying the id and extensions of `when`. Created when absent. */
  getWhenElement(): Element {
    if (this._when === undefined) {
      this._when = new Element();
    }
    return this._when;
  }

  setWhenElement(whenElement: Element | undefined): this {
    this._when = whenElement;
    return this;
  }

  /** Who signed (0..1) Created when absent. */
  getWho(): Reference {
    if (this.who === undefined) {
      this.who = new Reference();
    }
    return this.who;
  }

  setWho(who: Reference | undefined): this {
    return this.setFieldValue('who', who);
  }

  hasWho(): boolean {
    return this.hasFieldValue('who');
  }

  /** The party represented (0..1) Created when absent. */
  getOnBehalfOf(): Reference {
    if (this.onBehalfOf === undefined) {
      this.onBehalfOf = new Reference();
    }
    return this.onBehalfOf;
  }

  setOnBehalfOf(onBehalfOf: Reference | undefined): this {
    return this.setFieldValue('onBehalfOf', onBehalfOf);
  }

  hasOnBehalfOf(): boolean {
    return this.hasFieldValue('onBehalfOf');
  }

  /** The technical format of the signed resources (0..1) */
  getTargetFormat(): string | undefined {
    return this.targetFormat;
  }

  /** Sets `targetFormat`. Throws a FhirModelError when the value is not a valid FHIR code. */
  setTargetFormat(targetFormat: string | undefined): this {
    return this.setFieldValue('targetFormat', targetFormat);
  }

  hasTargetFormat(): boolean {
    return this.hasFieldValue('targetFormat');
  }

  /** The element carrying the id and extensions of `targetFormat`. Created when absent. */
  getTargetFormatElement(): Element {
    if (this._targetFormat === undefined) {
      this._targetFormat = new Element();
    }
    return this._targetFormat;
  }

  setTargetFormatElement(targetFormatElement: Element | undefined): this {
    this._targetFormat = targetFormatElement;
    return this;
  }

  /** The technical format of the signature (0..1) */
  getSigFormat(): string | undefined {
    return this.sigFormat;
  }

  /** Sets `sigFormat`. Throws a FhirModelError when the value is not a valid FHIR code. */
  setSigFormat(sigFormat: string | undefined): this {
    return this.setFieldValue('sigFormat', sigFormat);
  }

  hasSigFormat(): boolean {
    return this.hasFieldValue('sigFormat');
  }

  /** The element carrying the id and extensions of `sigFormat`. Created when absent. */
  getSigFormatElement(): Element {
    if (this._sigFormat === undefined) {
      this._sigFormat = new Element();
    }
    return this._sigFormat;
  }

  setSigFormatElement(sigFormatElement: Element | undefined): this {
    this._sigFormat = sigFormatElement;
    return this;
  }

  /** The actual signature content (XML DigSig. JWS, picture, etc.) (0..1) */
  getData(): string | undefined {
    return this.data;
  }

  /** Sets `data`. Throws a FhirModelError when the value is not a valid FHIR base64Binary. */
  setData(data: string | undefined): this {
    return this.setFieldValue('data', data);
  }

  hasData(): boolean {
    return this.hasFieldValue('data');
  }

  /** The element carrying the id and extensions of `data`. Created when absent. */
  getDataElement(): Element {
    if (this._data === undefined) {
      this._data = new Element();
    }
    return this._data;
  }

  setDataElement(dataElement: Element | undefined): this {
    this._data = dataElement;
    return this;
  }
}

modelTypeRegistry.register('Signature', Signature, false);
