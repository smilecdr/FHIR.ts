/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Address } from './address';
import type { Attachment } from './attachment';
import type { ContactPoint } from './contactPoint';
import type { Element } from './element';
import type { Extension } from './extension';
import type { HumanName } from './humanName';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Demographics and administrative information about a person independent of a specific health-related context.
 */
export class Person {
  resourceType: 'Person';
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
  contained?: Array<Resource>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** A human identifier for this person (0..*) */
  identifier?: Array<Identifier>;
  /** A name associated with the person (0..*) */
  name?: Array<HumanName>;
  /** A contact detail for the person (0..*) */
  telecom?: Array<ContactPoint>;
  /** male | female | other | unknown (0..1) */
  gender?: Person.GenderEnum;
  /** Id and extensions of the primitive `gender`. */
  _gender?: Element;
  /** The date on which the person was born (0..1) */
  birthDate?: Date | string;
  /** Id and extensions of the primitive `birthDate`. */
  _birthDate?: Element;
  /** One or more addresses for the person (0..*) */
  address?: Array<Address>;
  /** Image of the person (0..1) */
  photo?: Attachment;
  /** The organization that is the custodian of the person record (0..1) */
  managingOrganization?: Reference;
  /** This person's record is in active use (0..1) */
  active?: boolean;
  /** Id and extensions of the primitive `active`. */
  _active?: Element;
  /** Link to a resource that concerns the same actual person (0..*) */
  link?: Array<PersonLink>;
}

export namespace Person {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/administrative-gender */
  export type GenderEnum = 'male' | 'female' | 'other' | 'unknown';
  export const GenderEnum = {
    Male: 'male' as GenderEnum,
    Female: 'female' as GenderEnum,
    Other: 'other' as GenderEnum,
    Unknown: 'unknown' as GenderEnum,
  };
}

/**
 * Link to a resource that concerns the same actual person
 */
export class PersonLink {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The resource to which this actual person is associated (1..1) */
  target: Reference;
  /** level1 | level2 | level3 | level4 (0..1) */
  assurance?: PersonLink.AssuranceEnum;
  /** Id and extensions of the primitive `assurance`. */
  _assurance?: Element;
}

export namespace PersonLink {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/identity-assuranceLevel */
  export type AssuranceEnum = 'level1' | 'level2' | 'level3' | 'level4';
  export const AssuranceEnum = {
    Level1: 'level1' as AssuranceEnum,
    Level2: 'level2' as AssuranceEnum,
    Level3: 'level3' as AssuranceEnum,
    Level4: 'level4' as AssuranceEnum,
  };
}
