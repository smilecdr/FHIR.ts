/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import { Base } from '../../library/model';
import type { FieldDefinition, TypeRegistry } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import { Element } from './element';
import type { Meta } from './meta';

/**
 * Base StructureDefinition for Resource Resource
 */
export abstract class Resource extends Base {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'id',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'id', typeCode: 'id' }],
    },
    {
      elementName: 'meta',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'meta', typeCode: 'Meta' }],
    },
    {
      elementName: 'implicitRules',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'implicitRules', typeCode: 'uri' }],
    },
    {
      elementName: 'language',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'language', typeCode: 'code' }],
    },
  ];

  /** The FHIR resource type, for example `Patient`. */
  abstract readonly resourceType: string;

  /** Logical id of this artifact (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;

  /** Metadata about the resource (0..1) */
  meta?: Meta;

  /** A set of rules under which this content was created (0..1) */
  implicitRules?: string;
  /** Id and extensions of the primitive `implicitRules`. */
  _implicitRules?: Element;

  /** Language of the resource content (0..1) */
  language?: string;
  /** Id and extensions of the primitive `language`. */
  _language?: Element;

  override fhirType(): string {
    return 'Resource';
  }

  protected override typeRegistry(): TypeRegistry {
    return modelTypeRegistry;
  }

  /** Logical id of this artifact (0..1) */
  getId(): string | undefined {
    return this.id;
  }

  /** Sets `id`. Throws a FhirModelError when the value is not a valid FHIR id. */
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

  /** Metadata about the resource (0..1) Created when absent. */
  getMeta(): Meta {
    if (this.meta === undefined) {
      this.meta = this.createInstance<Meta>('Meta');
    }
    return this.meta;
  }

  setMeta(meta: Meta | undefined): this {
    return this.setFieldValue('meta', meta);
  }

  hasMeta(): boolean {
    return this.hasFieldValue('meta');
  }

  /** A set of rules under which this content was created (0..1) */
  getImplicitRules(): string | undefined {
    return this.implicitRules;
  }

  /** Sets `implicitRules`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setImplicitRules(implicitRules: string | undefined): this {
    return this.setFieldValue('implicitRules', implicitRules);
  }

  hasImplicitRules(): boolean {
    return this.hasFieldValue('implicitRules');
  }

  /** The element carrying the id and extensions of `implicitRules`. Created when absent. */
  getImplicitRulesElement(): Element {
    if (this._implicitRules === undefined) {
      this._implicitRules = new Element();
    }
    return this._implicitRules;
  }

  setImplicitRulesElement(implicitRulesElement: Element | undefined): this {
    this._implicitRules = implicitRulesElement;
    return this;
  }

  /** Language of the resource content (0..1) */
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
}

modelTypeRegistry.register('Resource', Resource, false);
