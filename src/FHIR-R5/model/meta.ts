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

/**
 * Meta Type: The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export class Meta extends DataType {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'versionId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'versionId', typeCode: 'id' }],
    },
    {
      elementName: 'lastUpdated',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'lastUpdated', typeCode: 'instant' }],
    },
    {
      elementName: 'source',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'source', typeCode: 'uri' }],
    },
    {
      elementName: 'profile',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'profile', typeCode: 'canonical' }],
    },
    {
      elementName: 'security',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'security', typeCode: 'Coding' }],
    },
    {
      elementName: 'tag',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'tag', typeCode: 'Coding' }],
    },
  ];

  /** Version specific identifier (0..1) */
  versionId?: string;
  /** Id and extensions of the primitive `versionId`. */
  _versionId?: Element;

  /** When the resource version last changed (0..1) */
  lastUpdated?: string;
  /** Id and extensions of the primitive `lastUpdated`. */
  _lastUpdated?: Element;

  /** Identifies where the resource comes from (0..1) */
  source?: string;
  /** Id and extensions of the primitive `source`. */
  _source?: Element;

  /** Profiles this resource claims to conform to (0..*) */
  profile?: string[];
  /** Id and extensions of the primitive `profile`. */
  _profile?: (Element | null)[];

  /** Security Labels applied to this resource (0..*) */
  security?: Coding[];

  /** Tags applied to this resource (0..*) */
  tag?: Coding[];

  override fhirType(): string {
    return 'Meta';
  }

  /** FHIR JSON for this Meta, typed as the plain `Meta` data type. */
  override toJSON(): plainTypes.Meta {
    return this.serialize() as plainTypes.Meta;
  }

  /** Version specific identifier (0..1) */
  getVersionId(): string | undefined {
    return this.versionId;
  }

  /** Sets `versionId`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setVersionId(versionId: string | undefined): this {
    return this.setFieldValue('versionId', versionId);
  }

  hasVersionId(): boolean {
    return this.hasFieldValue('versionId');
  }

  /** The element carrying the id and extensions of `versionId`. Created when absent. */
  getVersionIdElement(): Element {
    if (this._versionId === undefined) {
      this._versionId = new Element();
    }
    return this._versionId;
  }

  setVersionIdElement(versionIdElement: Element | undefined): this {
    this._versionId = versionIdElement;
    return this;
  }

  /** When the resource version last changed (0..1) */
  getLastUpdated(): string | undefined {
    return this.lastUpdated;
  }

  /** Sets `lastUpdated`. Throws a FhirModelError when the value is not a valid FHIR instant. */
  setLastUpdated(lastUpdated: string | undefined): this {
    return this.setFieldValue('lastUpdated', lastUpdated);
  }

  hasLastUpdated(): boolean {
    return this.hasFieldValue('lastUpdated');
  }

  /** The element carrying the id and extensions of `lastUpdated`. Created when absent. */
  getLastUpdatedElement(): Element {
    if (this._lastUpdated === undefined) {
      this._lastUpdated = new Element();
    }
    return this._lastUpdated;
  }

  setLastUpdatedElement(lastUpdatedElement: Element | undefined): this {
    this._lastUpdated = lastUpdatedElement;
    return this;
  }

  /** Identifies where the resource comes from (0..1) */
  getSource(): string | undefined {
    return this.source;
  }

  /** Sets `source`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setSource(source: string | undefined): this {
    return this.setFieldValue('source', source);
  }

  hasSource(): boolean {
    return this.hasFieldValue('source');
  }

  /** The element carrying the id and extensions of `source`. Created when absent. */
  getSourceElement(): Element {
    if (this._source === undefined) {
      this._source = new Element();
    }
    return this._source;
  }

  setSourceElement(sourceElement: Element | undefined): this {
    this._source = sourceElement;
    return this;
  }

  /** Profiles this resource claims to conform to (0..*) Never undefined; an empty list is created when absent. */
  getProfile(): string[] {
    if (this.profile === undefined) {
      this.profile = [];
    }
    return this.profile;
  }

  setProfile(profile: string[] | undefined): this {
    return this.setFieldValue('profile', profile);
  }

  hasProfile(): boolean {
    return this.hasFieldValue('profile');
  }

  /** Appends one value to `profile`. Throws a FhirModelError when it is not a valid FHIR canonical. */
  addProfile(profile: string): this {
    return this.addFieldValue('profile', profile);
  }

  /** Security Labels applied to this resource (0..*) Never undefined; an empty list is created when absent. */
  getSecurity(): Coding[] {
    if (this.security === undefined) {
      this.security = [];
    }
    return this.security;
  }

  setSecurity(security: Coding[] | undefined): this {
    return this.setFieldValue('security', security);
  }

  hasSecurity(): boolean {
    return this.hasFieldValue('security');
  }

  /** Appends a new, empty Coding to `security` and returns it so it can be filled in. */
  addSecurity(): Coding;
  /** Appends the given Coding to `security` and returns this object for chaining. */
  addSecurity(coding: Coding): this;
  addSecurity(coding?: Coding): Coding | this {
    if (coding !== undefined) {
      return this.addFieldValue('security', coding);
    }
    const createdCoding = new Coding();
    this.addFieldValue('security', createdCoding);
    return createdCoding;
  }

  /** The first Coding of `security`. One is added when the list is empty. */
  getSecurityFirstRep(): Coding {
    const firstCoding = this.getSecurity()[0];
    return firstCoding === undefined ? this.addSecurity() : firstCoding;
  }

  /** Tags applied to this resource (0..*) Never undefined; an empty list is created when absent. */
  getTag(): Coding[] {
    if (this.tag === undefined) {
      this.tag = [];
    }
    return this.tag;
  }

  setTag(tag: Coding[] | undefined): this {
    return this.setFieldValue('tag', tag);
  }

  hasTag(): boolean {
    return this.hasFieldValue('tag');
  }

  /** Appends a new, empty Coding to `tag` and returns it so it can be filled in. */
  addTag(): Coding;
  /** Appends the given Coding to `tag` and returns this object for chaining. */
  addTag(coding: Coding): this;
  addTag(coding?: Coding): Coding | this {
    if (coding !== undefined) {
      return this.addFieldValue('tag', coding);
    }
    const createdCoding = new Coding();
    this.addFieldValue('tag', createdCoding);
    return createdCoding;
  }

  /** The first Coding of `tag`. One is added when the list is empty. */
  getTagFirstRep(): Coding {
    const firstCoding = this.getTag()[0];
    return firstCoding === undefined ? this.addTag() : firstCoding;
  }
}

modelTypeRegistry.register('Meta', Meta, false);
