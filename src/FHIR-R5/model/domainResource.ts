/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import { Resource } from './resource';
import type { Extension } from './extension';
import type { Narrative } from './narrative';

/**
 * A resource that includes narrative, extensions, and contained resources.
 */
export abstract class DomainResource extends Resource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'text',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'text', typeCode: 'Narrative' }],
    },
    {
      elementName: 'contained',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'contained', typeCode: 'Resource' }],
    },
    {
      elementName: 'extension',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'extension', typeCode: 'Extension' }],
    },
    {
      elementName: 'modifierExtension',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'modifierExtension', typeCode: 'Extension' }],
    },
  ];

  /** Text summary of the resource, for human interpretation (0..1) */
  text?: Narrative;

  /** Contained, inline Resources (0..*) */
  contained?: Resource[];

  /** Additional content defined by implementations (0..*) */
  extension?: Extension[];

  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Extension[];

  override fhirType(): string {
    return 'DomainResource';
  }

  /** Text summary of the resource, for human interpretation (0..1) Created when absent. */
  getText(): Narrative {
    if (this.text === undefined) {
      this.text = this.createInstance<Narrative>('Narrative');
    }
    return this.text;
  }

  setText(text: Narrative | undefined): this {
    return this.setFieldValue('text', text);
  }

  hasText(): boolean {
    return this.hasFieldValue('text');
  }

  /** Contained, inline Resources (0..*) Never undefined; an empty list is created when absent. */
  getContained(): Resource[] {
    if (this.contained === undefined) {
      this.contained = [];
    }
    return this.contained;
  }

  setContained(contained: Resource[] | undefined): this {
    return this.setFieldValue('contained', contained);
  }

  hasContained(): boolean {
    return this.hasFieldValue('contained');
  }

  /** Appends one Resource to `contained`. */
  addContained(resource: Resource): this {
    return this.addFieldValue('contained', resource);
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

  /** Extensions that cannot be ignored (0..*) Never undefined; an empty list is created when absent. */
  getModifierExtension(): Extension[] {
    if (this.modifierExtension === undefined) {
      this.modifierExtension = [];
    }
    return this.modifierExtension;
  }

  setModifierExtension(modifierExtension: Extension[] | undefined): this {
    return this.setFieldValue('modifierExtension', modifierExtension);
  }

  hasModifierExtension(): boolean {
    return this.hasFieldValue('modifierExtension');
  }

  /** Appends a new, empty Extension to `modifierExtension` and returns it so it can be filled in. */
  addModifierExtension(): Extension;
  /** Appends the given Extension to `modifierExtension` and returns this object for chaining. */
  addModifierExtension(extension: Extension): this;
  addModifierExtension(extension?: Extension): Extension | this {
    if (extension !== undefined) {
      return this.addFieldValue('modifierExtension', extension);
    }
    const createdExtension = this.createInstance<Extension>('Extension');
    this.addFieldValue('modifierExtension', createdExtension);
    return createdExtension;
  }

  /** The first Extension of `modifierExtension`. One is added when the list is empty. */
  getModifierExtensionFirstRep(): Extension {
    const firstExtension = this.getModifierExtension()[0];
    return firstExtension === undefined ? this.addModifierExtension() : firstExtension;
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

modelTypeRegistry.register('DomainResource', DomainResource, false);
