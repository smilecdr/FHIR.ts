/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import { Base } from '../../library/model';
import type { FieldDefinition, TypeRegistry } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type { Extension } from './extension';

/**
 * Element Type: Base definition for all elements in a resource.
 */
export class Element extends Base {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'id',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'id', typeCode: 'string' }],
    },
    {
      elementName: 'extension',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'extension', typeCode: 'Extension' }],
    },
  ];

  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;

  /** Additional content defined by implementations (0..*) */
  extension?: Extension[];

  override fhirType(): string {
    return 'Element';
  }

  protected override typeRegistry(): TypeRegistry {
    return modelTypeRegistry;
  }

  /** Unique id for inter-element referencing (0..1) */
  getId(): string | undefined {
    return this.id;
  }

  /** Sets `id`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setId(id: string | undefined): this {
    return this.setFieldValue('id', id);
  }

  hasId(): boolean {
    return this.hasFieldValue('id');
  }

  /** The element carrying the id and extensions of `id`. Created when absent. */
  getIdElement(): Element {
    if (this._id === undefined) {
      this._id = new Element();
    }
    return this._id;
  }

  setIdElement(idElement: Element | undefined): this {
    this._id = idElement;
    return this;
  }

  /** Additional content defined by implementations (0..*) Never undefined; an empty list is created when absent. */
  getExtension(): Extension[] {
    if (this.extension === undefined) {
      this.extension = [];
    }
    return this.extension;
  }

  setExtension(extension: Extension[] | undefined): this {
    return this.setFieldValue('extension', extension);
  }

  /** Appends a new, empty Extension to `extension` and returns it so it can be filled in. */
  addExtension(): Extension;
  /** Appends the given Extension to `extension` and returns this object for chaining. */
  addExtension(extension: Extension): this;
  addExtension(extension?: Extension): Extension | this {
    if (extension !== undefined) {
      return this.addFieldValue('extension', extension);
    }
    const createdExtension = this.createInstance<Extension>('Extension');
    this.addFieldValue('extension', createdExtension);
    return createdExtension;
  }

  /** The first Extension of `extension`. One is added when the list is empty. */
  getExtensionFirstRep(): Extension {
    const firstExtension = this.getExtension()[0];
    return firstExtension === undefined ? this.addExtension() : firstExtension;
  }

  /** True when an extension is present. With a URL, true when an extension with that URL is present. */
  hasExtension(extensionUrl?: string): boolean {
    if (extensionUrl === undefined) {
      return this.hasFieldValue('extension');
    }
    return this.getExtensionsByUrl(extensionUrl).length > 0;
  }

  /** Every extension with the given URL. */
  getExtensionsByUrl(extensionUrl: string): Extension[] {
    return this.getExtension().filter(
      (candidateExtension) => candidateExtension.url === extensionUrl
    );
  }

  /** The first extension with the given URL, or undefined when there is none. */
  getExtensionByUrl(extensionUrl: string): Extension | undefined {
    return this.getExtensionsByUrl(extensionUrl)[0];
  }
}

modelTypeRegistry.register('Element', Element, false);
