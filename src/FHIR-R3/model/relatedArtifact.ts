/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { Attachment } from './attachment';
import { Element } from './element';
import { Reference } from './reference';

/**
 * Base StructureDefinition for RelatedArtifact Type
 */
export class RelatedArtifact extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.RelatedArtifactType },
      ],
    },
    {
      elementName: 'display',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'display', typeCode: 'string' }],
    },
    {
      elementName: 'citation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'citation', typeCode: 'string' }],
    },
    {
      elementName: 'url',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'url', typeCode: 'uri' }],
    },
    {
      elementName: 'document',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'document', typeCode: 'Attachment' }],
    },
    {
      elementName: 'resource',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'resource', typeCode: 'Reference' }],
    },
  ];

  /** documentation | justification | citation | predecessor | successor | derived-from | depends-on | composed-of (1..1) */
  type?: valueSetCodes.RelatedArtifactType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Brief description of the related artifact (0..1) */
  display?: string;
  /** Id and extensions of the primitive `display`. */
  _display?: Element;

  /** Bibliographic citation for the artifact (0..1) */
  citation?: string;
  /** Id and extensions of the primitive `citation`. */
  _citation?: Element;

  /** Where the artifact can be accessed (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** What document is being referenced (0..1) */
  document?: Attachment;

  /** What resource is being referenced (0..1) */
  resource?: Reference;

  override fhirType(): string {
    return 'RelatedArtifact';
  }

  /** FHIR JSON for this RelatedArtifact, typed as the plain `RelatedArtifact` data type. */
  override toJSON(): plainTypes.RelatedArtifact {
    return this.serialize() as plainTypes.RelatedArtifact;
  }

  /** documentation | justification | citation | predecessor | successor | derived-from | depends-on | composed-of (1..1) */
  getType(): valueSetCodes.RelatedArtifactType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.RelatedArtifactType | undefined): this {
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

  /** Brief description of the related artifact (0..1) */
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

  /** Bibliographic citation for the artifact (0..1) */
  getCitation(): string | undefined {
    return this.citation;
  }

  /** Sets `citation`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setCitation(citation: string | undefined): this {
    return this.setFieldValue('citation', citation);
  }

  hasCitation(): boolean {
    return this.hasFieldValue('citation');
  }

  /** The element carrying the id and extensions of `citation`. Created when absent. */
  getCitationElement(): Element {
    if (this._citation === undefined) {
      this._citation = new Element();
    }
    return this._citation;
  }

  setCitationElement(citationElement: Element | undefined): this {
    this._citation = citationElement;
    return this;
  }

  /** Where the artifact can be accessed (0..1) */
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

  /** What document is being referenced (0..1) Created when absent. */
  getDocument(): Attachment {
    if (this.document === undefined) {
      this.document = new Attachment();
    }
    return this.document;
  }

  setDocument(document: Attachment | undefined): this {
    return this.setFieldValue('document', document);
  }

  hasDocument(): boolean {
    return this.hasFieldValue('document');
  }

  /** What resource is being referenced (0..1) Created when absent. */
  getResource(): Reference {
    if (this.resource === undefined) {
      this.resource = new Reference();
    }
    return this.resource;
  }

  setResource(resource: Reference | undefined): this {
    return this.setFieldValue('resource', resource);
  }

  hasResource(): boolean {
    return this.hasFieldValue('resource');
  }
}

modelTypeRegistry.register('RelatedArtifact', RelatedArtifact, false);
