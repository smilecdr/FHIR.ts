/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../classes/models-r4';
import { Element } from './element';
import { Reference } from './reference';
import { Resource } from './resource';

/**
 * A resource that represents the data of a single raw artifact as digital content accessible in its native format. A Binary resource can contain any content, whether text, image, pdf, zip archive, etc.
 */
export class Binary extends Resource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'contentType',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'contentType', typeCode: 'code' }],
    },
    {
      elementName: 'securityContext',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'securityContext', typeCode: 'Reference' }],
    },
    {
      elementName: 'data',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'data', typeCode: 'base64Binary' }],
    },
  ];

  readonly resourceType = 'Binary';

  /** MimeType of the binary content (1..1) */
  contentType?: string;
  /** Id and extensions of the primitive `contentType`. */
  _contentType?: Element;

  /** Identifies another resource to use as proxy when enforcing access control (0..1) */
  securityContext?: Reference;

  /** The actual content (0..1) */
  data?: string;
  /** Id and extensions of the primitive `data`. */
  _data?: Element;

  override fhirType(): string {
    return 'Binary';
  }

  /** FHIR JSON for this Binary, typed as the plain `Binary` data type. */
  override toJSON(): plainTypes.Binary {
    return this.serialize() as plainTypes.Binary;
  }

  /** MimeType of the binary content (1..1) */
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

  /** Identifies another resource to use as proxy when enforcing access control (0..1) Created when absent. */
  getSecurityContext(): Reference {
    if (this.securityContext === undefined) {
      this.securityContext = new Reference();
    }
    return this.securityContext;
  }

  setSecurityContext(securityContext: Reference | undefined): this {
    return this.setFieldValue('securityContext', securityContext);
  }

  hasSecurityContext(): boolean {
    return this.hasFieldValue('securityContext');
  }

  /** The actual content (0..1) */
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

modelTypeRegistry.register('Binary', Binary, true);

/** True when the value is a Binary model instance. */
export function isBinary(candidate: unknown): candidate is Binary {
  return candidate instanceof Binary;
}
