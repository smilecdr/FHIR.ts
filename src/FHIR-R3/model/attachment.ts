/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../classes/models-r3';
import { Element } from './element';

/**
 * Base StructureDefinition for Attachment Type
 */
export class Attachment extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'contentType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'contentType', typeCode: 'code' }],
    },
    {
      elementName: 'language',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'language', typeCode: 'code' }],
    },
    {
      elementName: 'data',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'data', typeCode: 'base64Binary' }],
    },
    {
      elementName: 'url',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'url', typeCode: 'uri' }],
    },
    {
      elementName: 'size',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'size', typeCode: 'unsignedInt' }],
    },
    {
      elementName: 'hash',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'hash', typeCode: 'base64Binary' }],
    },
    {
      elementName: 'title',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'title', typeCode: 'string' }],
    },
    {
      elementName: 'creation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'creation', typeCode: 'dateTime' }],
    },
  ];

  /** Mime type of the content, with charset etc. (0..1) */
  contentType?: string;
  /** Id and extensions of the primitive `contentType`. */
  _contentType?: Element;

  /** Human language of the content (BCP-47) (0..1) */
  language?: string;
  /** Id and extensions of the primitive `language`. */
  _language?: Element;

  /** Data inline, base64ed (0..1) */
  data?: string;
  /** Id and extensions of the primitive `data`. */
  _data?: Element;

  /** Uri where the data can be found (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Number of bytes of content (if url provided) (0..1) */
  size?: number;
  /** Id and extensions of the primitive `size`. */
  _size?: Element;

  /** Hash of the data (sha-1, base64ed) (0..1) */
  hash?: string;
  /** Id and extensions of the primitive `hash`. */
  _hash?: Element;

  /** Label to display in place of the data (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

  /** Date attachment was first created (0..1) */
  creation?: string;
  /** Id and extensions of the primitive `creation`. */
  _creation?: Element;

  override fhirType(): string {
    return 'Attachment';
  }

  /** FHIR JSON for this Attachment, typed as the plain `Attachment` data type. */
  override toJSON(): plainTypes.Attachment {
    return this.serialize() as plainTypes.Attachment;
  }

  /** Mime type of the content, with charset etc. (0..1) */
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

  /** Human language of the content (BCP-47) (0..1) */
  getLanguage(): string | undefined {
    return this.language;
  }

  /** Sets `language`. Throws a FhirModelError when the value is not a valid FHIR code. */
  setLanguage(language: string | undefined): this {
    return this.setFieldValue('language', language);
  }

  hasLanguage(): boolean {
    return this.hasFieldValue('language');
  }

  /** The element carrying the id and extensions of `language`. Created when absent. */
  getLanguageElement(): Element {
    if (this._language === undefined) {
      this._language = new Element();
    }
    return this._language;
  }

  setLanguageElement(languageElement: Element | undefined): this {
    this._language = languageElement;
    return this;
  }

  /** Data inline, base64ed (0..1) */
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

  /** Uri where the data can be found (0..1) */
  getUrl(): string | undefined {
    return this.url;
  }

  /** Sets `url`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setUrl(url: string | undefined): this {
    return this.setFieldValue('url', url);
  }

  hasUrl(): boolean {
    return this.hasFieldValue('url');
  }

  /** The element carrying the id and extensions of `url`. Created when absent. */
  getUrlElement(): Element {
    if (this._url === undefined) {
      this._url = new Element();
    }
    return this._url;
  }

  setUrlElement(urlElement: Element | undefined): this {
    this._url = urlElement;
    return this;
  }

  /** Number of bytes of content (if url provided) (0..1) */
  getSize(): number | undefined {
    return this.size;
  }

  /** Sets `size`. Throws a FhirModelError when the value is not a valid FHIR unsignedInt. */
  setSize(size: number | undefined): this {
    return this.setFieldValue('size', size);
  }

  hasSize(): boolean {
    return this.hasFieldValue('size');
  }

  /** The element carrying the id and extensions of `size`. Created when absent. */
  getSizeElement(): Element {
    if (this._size === undefined) {
      this._size = new Element();
    }
    return this._size;
  }

  setSizeElement(sizeElement: Element | undefined): this {
    this._size = sizeElement;
    return this;
  }

  /** Hash of the data (sha-1, base64ed) (0..1) */
  getHash(): string | undefined {
    return this.hash;
  }

  /** Sets `hash`. Throws a FhirModelError when the value is not a valid FHIR base64Binary. */
  setHash(hash: string | undefined): this {
    return this.setFieldValue('hash', hash);
  }

  hasHash(): boolean {
    return this.hasFieldValue('hash');
  }

  /** The element carrying the id and extensions of `hash`. Created when absent. */
  getHashElement(): Element {
    if (this._hash === undefined) {
      this._hash = new Element();
    }
    return this._hash;
  }

  setHashElement(hashElement: Element | undefined): this {
    this._hash = hashElement;
    return this;
  }

  /** Label to display in place of the data (0..1) */
  getTitle(): string | undefined {
    return this.title;
  }

  /** Sets `title`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setTitle(title: string | undefined): this {
    return this.setFieldValue('title', title);
  }

  hasTitle(): boolean {
    return this.hasFieldValue('title');
  }

  /** The element carrying the id and extensions of `title`. Created when absent. */
  getTitleElement(): Element {
    if (this._title === undefined) {
      this._title = new Element();
    }
    return this._title;
  }

  setTitleElement(titleElement: Element | undefined): this {
    this._title = titleElement;
    return this;
  }

  /** Date attachment was first created (0..1) */
  getCreation(): string | undefined {
    return this.creation;
  }

  /** Sets `creation`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setCreation(creation: string | undefined): this {
    return this.setFieldValue('creation', creation);
  }

  hasCreation(): boolean {
    return this.hasFieldValue('creation');
  }

  /** The element carrying the id and extensions of `creation`. Created when absent. */
  getCreationElement(): Element {
    if (this._creation === undefined) {
      this._creation = new Element();
    }
    return this._creation;
  }

  setCreationElement(creationElement: Element | undefined): this {
    this._creation = creationElement;
    return this;
  }
}

modelTypeRegistry.register('Attachment', Attachment, false);
