/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../classes/models-r3';
import { Element } from './element';
import { Reference } from './reference';
import { Resource } from './resource';

/**
 * Base StructureDefinition for Binary Resource
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
      elementName: 'content',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'content', typeCode: 'base64Binary' }],
    },
  ];

  readonly resourceType = 'Binary';

  /** MimeType of the binary content (1..1) */
  contentType?: string;
  /** Id and extensions of the primitive `contentType`. */
  _contentType?: Element;

  /** Access Control Management (0..1) */
  securityContext?: Reference;

  /** The actual content (1..1) */
  content?: string;
  /** Id and extensions of the primitive `content`. */
  _content?: Element;

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

  /** Access Control Management (0..1) Created when absent. */
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

  /** The actual content (1..1) */
  getContent(): string | undefined {
    return this.content;
  }

  /** Sets `content`. Throws a FhirModelError when the value is not a valid FHIR base64Binary. */
  setContent(content: string | undefined): this {
    return this.setFieldValue('content', content);
  }

  hasContent(): boolean {
    return this.hasFieldValue('content');
  }

  /** The element carrying the id and extensions of `content`. Created when absent. */
  getContentElement(): Element {
    if (this._content === undefined) {
      this._content = new Element();
    }
    return this._content;
  }

  setContentElement(contentElement: Element | undefined): this {
    this._content = contentElement;
    return this;
  }
}

modelTypeRegistry.register('Binary', Binary, true);

/** True when the value is a Binary model instance. */
export function isBinary(candidate: unknown): candidate is Binary {
  return candidate instanceof Binary;
}
