/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import { Element } from './element';
import type { Extension } from './extension';

/**
 * Base StructureDefinition for BackboneElement Type
 */
export abstract class BackboneElement extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'modifierExtension',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'modifierExtension', typeCode: 'Extension' }],
    },
  ];

  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Extension[];

  override fhirType(): string {
    return 'BackboneElement';
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
}

modelTypeRegistry.register('BackboneElement', BackboneElement, false);
