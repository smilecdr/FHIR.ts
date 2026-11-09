/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Address } from './address';
import type { Attachment } from './attachment';
import type { CodeableConcept } from './codeableConcept';
import type { ContactPoint } from './contactPoint';
import type { Element } from './element';
import type { Extension } from './extension';
import type { HumanName } from './humanName';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for RelatedPerson Resource
 */
export class RelatedPerson {
  resourceType: 'RelatedPerson';
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
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** A human identifier for this person (0..*) */
  identifier?: Array<Identifier>;
  /** Whether this related person's record is in active use (0..1) */
  active?: boolean;
  /** Id and extensions of the primitive `active`. */
  _active?: Element;
  /** The patient this person is related to (1..1) */
  patient: Reference;
  /** The nature of the relationship (0..1) */
  relationship?: CodeableConcept;
  /** A name associated with the person (0..*) */
  name?: Array<HumanName>;
  /** A contact detail for the person (0..*) */
  telecom?: Array<ContactPoint>;
  /** male | female | other | unknown (0..1) */
  gender?: RelatedPerson.GenderEnum;
  /** Id and extensions of the primitive `gender`. */
  _gender?: Element;
  /** The date on which the related person was born (0..1) */
  birthDate?: string;
  /** Id and extensions of the primitive `birthDate`. */
  _birthDate?: Element;
  /** Address where the related person can be contacted or visited (0..*) */
  address?: Array<Address>;
  /** Image of the person (0..*) */
  photo?: Array<Attachment>;
  /** Period of time that this relationship is considered valid (0..1) */
  period?: Period;
}

export namespace RelatedPerson {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/administrative-gender */
  export type GenderEnum = 'male' | 'female' | 'other' | 'unknown';
  export const GenderEnum = {
    Male: 'male' as GenderEnum,
    Female: 'female' as GenderEnum,
    Other: 'other' as GenderEnum,
    Unknown: 'unknown' as GenderEnum,
  };
}
