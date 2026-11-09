/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Element } from './element';
import type { Extension } from './extension';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * Identifies two or more records (resource instances) that refer to the same real-world "occurrence".
 */
export interface Linkage {
  resourceType: 'Linkage';
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
  /** Text summary of the resource, for human interpretation (0..1) */
  text?: Narrative;
  /** Contained, inline Resources (0..*) */
  contained?: Array<ResourceList>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Whether this linkage assertion is active or not (0..1) */
  active?: boolean;
  /** Id and extensions of the primitive `active`. */
  _active?: Element;
  /** Who is responsible for linkages (0..1) */
  author?: Reference;
  /** Item to be linked (1..*) */
  item: Array<LinkageItem>;
}

/**
 * Item to be linked
 */
export interface LinkageItem {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** source | alternate | historical (1..1) */
  type?: LinkageItem.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Resource being linked (1..1) */
  resource: Reference;
}

export namespace LinkageItem {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/linkage-type */
  export type TypeEnum = 'source' | 'alternate' | 'historical';
  export const TypeEnum = {
    Source: 'source' as TypeEnum,
    Alternate: 'alternate' as TypeEnum,
    Historical: 'historical' as TypeEnum,
  };
}
