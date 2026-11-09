/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { BackboneElement } from './backboneElement';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Reference } from './reference';

/**
 * Base StructureDefinition for Linkage Resource
 */
export class Linkage extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'active',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'active', typeCode: 'boolean' }],
    },
    {
      elementName: 'author',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'author',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Practitioner'],
        },
      ],
    },
    {
      elementName: 'item',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'item', typeCode: 'LinkageItem' }],
    },
  ];

  readonly resourceType = 'Linkage';

  /** Whether this linkage assertion is active or not (0..1) */
  active?: boolean;
  /** Id and extensions of the primitive `active`. */
  _active?: Element;

  /** Who is responsible for linkages (0..1) */
  author?: Reference;

  /** Item to be linked (1..*) */
  item?: LinkageItem[];

  override fhirType(): string {
    return 'Linkage';
  }

  /** FHIR JSON for this Linkage, typed as the plain `Linkage` data type. */
  override toJSON(): plainTypes.Linkage {
    return this.serialize() as plainTypes.Linkage;
  }

  /** Whether this linkage assertion is active or not (0..1) */
  getActive(): boolean | undefined {
    return this.active;
  }

  /** Sets `active`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setActive(active: boolean | undefined): this {
    return this.setFieldValue('active', active);
  }

  hasActive(): boolean {
    return this.hasFieldValue('active');
  }

  /** The element carrying the id and extensions of `active`. Created when absent. */
  getActiveElement(): Element {
    if (this._active === undefined) {
      this._active = new Element();
    }
    return this._active;
  }

  setActiveElement(activeElement: Element | undefined): this {
    this._active = activeElement;
    return this;
  }

  /** Who is responsible for linkages (0..1) Created when absent. */
  getAuthor(): Reference {
    if (this.author === undefined) {
      this.author = new Reference();
    }
    return this.author;
  }

  setAuthor(author: Reference | undefined): this {
    return this.setFieldValue('author', author);
  }

  hasAuthor(): boolean {
    return this.hasFieldValue('author');
  }

  /** Item to be linked (1..*) Never undefined; an empty list is created when absent. */
  getItem(): LinkageItem[] {
    if (this.item === undefined) {
      this.item = [];
    }
    return this.item;
  }

  setItem(item: LinkageItem[] | undefined): this {
    return this.setFieldValue('item', item);
  }

  hasItem(): boolean {
    return this.hasFieldValue('item');
  }

  /** Appends a new, empty LinkageItem to `item` and returns it so it can be filled in. */
  addItem(): LinkageItem;
  /** Appends the given LinkageItem to `item` and returns this object for chaining. */
  addItem(linkageItem: LinkageItem): this;
  addItem(linkageItem?: LinkageItem): LinkageItem | this {
    if (linkageItem !== undefined) {
      return this.addFieldValue('item', linkageItem);
    }
    const createdLinkageItem = new LinkageItem();
    this.addFieldValue('item', createdLinkageItem);
    return createdLinkageItem;
  }

  /** The first LinkageItem of `item`. One is added when the list is empty. */
  getItemFirstRep(): LinkageItem {
    const firstLinkageItem = this.getItem()[0];
    return firstLinkageItem === undefined ? this.addItem() : firstLinkageItem;
  }
}

modelTypeRegistry.register('Linkage', Linkage, true);

/** True when the value is a Linkage model instance. */
export function isLinkage(candidate: unknown): candidate is Linkage {
  return candidate instanceof Linkage;
}

/**
 * Item to be linked
 */
export class LinkageItem extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.LinkageType }],
    },
    {
      elementName: 'resource',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'resource', typeCode: 'Reference' }],
    },
  ];

  /** source | alternate | historical (1..1) */
  type?: valueSetCodes.LinkageType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Resource being linked (1..1) */
  resource?: Reference;

  override fhirType(): string {
    return 'Linkage.item';
  }

  /** FHIR JSON for this LinkageItem, typed as the plain `LinkageItem` data type. */
  override toJSON(): plainTypes.LinkageItem {
    return this.serialize() as plainTypes.LinkageItem;
  }

  /** source | alternate | historical (1..1) */
  getType(): valueSetCodes.LinkageType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.LinkageType | undefined): this {
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

  /** Resource being linked (1..1) Created when absent. */
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

modelTypeRegistry.register('LinkageItem', LinkageItem, false);
