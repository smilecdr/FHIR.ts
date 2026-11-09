/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Quantity } from './quantity';
import type { Range } from './range';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization.
 */
export interface Group {
  resourceType: 'Group';
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
  /** Business Identifier for this Group (0..*) */
  identifier?: Array<Identifier>;
  /** Whether this group's record is in active use (0..1) */
  active?: boolean;
  /** Id and extensions of the primitive `active`. */
  _active?: Element;
  /** person | animal | practitioner | device | careteam | healthcareservice | location | organization | relatedperson | specimen (1..1) */
  type?: Group.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** definitional | enumerated (1..1) */
  membership?: Group.MembershipEnum;
  /** Id and extensions of the primitive `membership`. */
  _membership?: Element;
  /** Kind of Group members (0..1) */
  code?: CodeableConcept;
  /** Label for Group (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Natural language description of the group (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Number of members (0..1) */
  quantity?: number;
  /** Id and extensions of the primitive `quantity`. */
  _quantity?: Element;
  /** Entity that is the custodian of the Group's definition (0..1) */
  managingEntity?: Reference;
  /** Include / Exclude group members by Trait (0..*) */
  characteristic?: Array<GroupCharacteristic>;
  /** Who or what is in group (0..*) */
  member?: Array<GroupMember>;
}

export namespace Group {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/group-type */
  export type TypeEnum =
    | 'person'
    | 'animal'
    | 'practitioner'
    | 'device'
    | 'careteam'
    | 'healthcareservice'
    | 'location'
    | 'organization'
    | 'relatedperson'
    | 'specimen';
  export const TypeEnum = {
    Person: 'person' as TypeEnum,
    Animal: 'animal' as TypeEnum,
    Practitioner: 'practitioner' as TypeEnum,
    Device: 'device' as TypeEnum,
    Careteam: 'careteam' as TypeEnum,
    Healthcareservice: 'healthcareservice' as TypeEnum,
    Location: 'location' as TypeEnum,
    Organization: 'organization' as TypeEnum,
    Relatedperson: 'relatedperson' as TypeEnum,
    Specimen: 'specimen' as TypeEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/group-membership-basis */
  export type MembershipEnum = 'definitional' | 'enumerated';
  export const MembershipEnum = {
    Definitional: 'definitional' as MembershipEnum,
    Enumerated: 'enumerated' as MembershipEnum,
  };
}

/**
 * Include / Exclude group members by Trait
 */
export interface GroupCharacteristic {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Kind of characteristic (1..1) */
  code: CodeableConcept;
  /** Value held by characteristic (1..1) */
  valueCodeableConcept?: CodeableConcept;
  /** Value held by characteristic (1..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Value held by characteristic (1..1) */
  valueQuantity?: Quantity;
  /** Value held by characteristic (1..1) */
  valueRange?: Range;
  /** Value held by characteristic (1..1) */
  valueReference?: Reference;
  /** Group includes or excludes (1..1) */
  exclude?: boolean;
  /** Id and extensions of the primitive `exclude`. */
  _exclude?: Element;
  /** Period over which characteristic is tested (0..1) */
  period?: Period;
}

/**
 * Who or what is in group
 */
export interface GroupMember {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Reference to the group member (1..1) */
  entity: Reference;
  /** Period member belonged to the group (0..1) */
  period?: Period;
  /** If member is no longer in group (0..1) */
  inactive?: boolean;
  /** Id and extensions of the primitive `inactive`. */
  _inactive?: Element;
}
