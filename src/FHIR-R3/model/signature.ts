/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../classes/models-r3';
import { Coding } from './coding';
import { Element } from './element';
import { Reference } from './reference';

/**
 * Base StructureDefinition for Signature Type
 */
export class Signature extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'type', typeCode: 'Coding' }],
    },
    {
      elementName: 'when',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'when', typeCode: 'instant' }],
    },
    {
      elementName: 'who',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'whoUri', typeCode: 'uri' },
        {
          jsonKey: 'whoReference',
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
      elementName: 'onBehalfOf',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'onBehalfOfUri', typeCode: 'uri' },
        {
          jsonKey: 'onBehalfOfReference',
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
      elementName: 'contentType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'contentType', typeCode: 'code' }],
    },
    {
      elementName: 'blob',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'blob', typeCode: 'base64Binary' }],
    },
  ];

  /** Indication of the reason the entity signed the object(s) (1..*) */
  type?: Coding[];

  /** When the signature was created (1..1) */
  when?: string;
  /** Id and extensions of the primitive `when`. */
  _when?: Element;

  /** Who signed (1..1) */
  whoUri?: string;
  /** Id and extensions of the primitive `whoUri`. */
  _whoUri?: Element;
  /** Who signed (1..1) */
  whoReference?: Reference;

  /** The party represented (0..1) */
  onBehalfOfUri?: string;
  /** Id and extensions of the primitive `onBehalfOfUri`. */
  _onBehalfOfUri?: Element;
  /** The party represented (0..1) */
  onBehalfOfReference?: Reference;

  /** The technical format of the signature (0..1) */
  contentType?: string;
  /** Id and extensions of the primitive `contentType`. */
  _contentType?: Element;

  /** The actual signature content (XML DigSig. JWT, picture, etc.) (0..1) */
  blob?: string;
  /** Id and extensions of the primitive `blob`. */
  _blob?: Element;

  override fhirType(): string {
    return 'Signature';
  }

  /** FHIR JSON for this Signature, typed as the plain `Signature` data type. */
  override toJSON(): plainTypes.Signature {
    return this.serialize() as plainTypes.Signature;
  }

  /** Indication of the reason the entity signed the object(s) (1..*) Never undefined; an empty list is created when absent. */
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

  /** When the signature was created (1..1) */
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

  /** Who signed (1..1) Whichever type of `who[x]` is set. */
  getWho(): string | Reference | undefined {
    return this.getChoiceValue<string | Reference>('who');
  }

  /** True when any type of `who[x]` is set. */
  hasWho(): boolean {
    return this.hasChoiceValue('who');
  }

  getWhoUri(): string | undefined {
    return this.whoUri;
  }

  /** Sets `who[x]` as uri and clears every other type of it. */
  setWhoUri(whoUri: string | undefined): this {
    return this.setFieldValue('whoUri', whoUri);
  }

  hasWhoUri(): boolean {
    return this.hasFieldValue('whoUri');
  }

  getWhoReference(): Reference | undefined {
    return this.whoReference;
  }

  /** Sets `who[x]` as Reference and clears every other type of it. */
  setWhoReference(whoReference: Reference | undefined): this {
    return this.setFieldValue('whoReference', whoReference);
  }

  hasWhoReference(): boolean {
    return this.hasFieldValue('whoReference');
  }

  /** The party represented (0..1) Whichever type of `onBehalfOf[x]` is set. */
  getOnBehalfOf(): string | Reference | undefined {
    return this.getChoiceValue<string | Reference>('onBehalfOf');
  }

  /** True when any type of `onBehalfOf[x]` is set. */
  hasOnBehalfOf(): boolean {
    return this.hasChoiceValue('onBehalfOf');
  }

  getOnBehalfOfUri(): string | undefined {
    return this.onBehalfOfUri;
  }

  /** Sets `onBehalfOf[x]` as uri and clears every other type of it. */
  setOnBehalfOfUri(onBehalfOfUri: string | undefined): this {
    return this.setFieldValue('onBehalfOfUri', onBehalfOfUri);
  }

  hasOnBehalfOfUri(): boolean {
    return this.hasFieldValue('onBehalfOfUri');
  }

  getOnBehalfOfReference(): Reference | undefined {
    return this.onBehalfOfReference;
  }

  /** Sets `onBehalfOf[x]` as Reference and clears every other type of it. */
  setOnBehalfOfReference(onBehalfOfReference: Reference | undefined): this {
    return this.setFieldValue('onBehalfOfReference', onBehalfOfReference);
  }

  hasOnBehalfOfReference(): boolean {
    return this.hasFieldValue('onBehalfOfReference');
  }

  /** The technical format of the signature (0..1) */
  getContentType(): string | undefined {
    return this.contentType;
  }

  /** Sets `contentType`. Throws a FhirModelError when the value is not a valid FHIR code. */
  setContentType(contentType: string | undefined): this {
    return this.setFieldValue('contentType', contentType);
  }

  hasContentType(): boolean {
    return this.hasFieldValue('contentType');
  }

  /** The element carrying the id and extensions of `contentType`. Created when absent. */
  getContentTypeElement(): Element {
    if (this._contentType === undefined) {
      this._contentType = new Element();
    }
    return this._contentType;
  }

  setContentTypeElement(contentTypeElement: Element | undefined): this {
    this._contentType = contentTypeElement;
    return this;
  }

  /** The actual signature content (XML DigSig. JWT, picture, etc.) (0..1) */
  getBlob(): string | undefined {
    return this.blob;
  }

  /** Sets `blob`. Throws a FhirModelError when the value is not a valid FHIR base64Binary. */
  setBlob(blob: string | undefined): this {
    return this.setFieldValue('blob', blob);
  }

  hasBlob(): boolean {
    return this.hasFieldValue('blob');
  }

  /** The element carrying the id and extensions of `blob`. Created when absent. */
  getBlobElement(): Element {
    if (this._blob === undefined) {
      this._blob = new Element();
    }
    return this._blob;
  }

  setBlobElement(blobElement: Element | undefined): this {
    this._blob = blobElement;
    return this;
  }
}

modelTypeRegistry.register('Signature', Signature, false);
