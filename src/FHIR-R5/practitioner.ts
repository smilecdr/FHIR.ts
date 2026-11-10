/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
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
import type { ResourceList } from './resourceList';

/**
 * A person who is directly or indirectly involved in the provisioning of healthcare or related services.
 */
export interface Practitioner {
  resourceType: 'Practitioner';
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
  /** An identifier for the person as this agent (0..*) */
  identifier?: Array<Identifier>;
  /** Whether this practitioner's record is in active use (0..1) */
  active?: boolean;
  /** Id and extensions of the primitive `active`. */
  _active?: Element;
  /** The name(s) associated with the practitioner (0..*) */
  name?: Array<HumanName>;
  /** A contact detail for the practitioner (that apply to all roles) (0..*) */
  telecom?: Array<ContactPoint>;
  /** male | female | other | unknown (0..1) */
  gender?: Practitioner.GenderEnum;
  /** Id and extensions of the primitive `gender`. */
  _gender?: Element;
  /** The date on which the practitioner was born (0..1) */
  birthDate?: string;
  /** Id and extensions of the primitive `birthDate`. */
  _birthDate?: Element;
  /** Indicates if the practitioner is deceased or not (0..1) */
  deceasedBoolean?: boolean;
  /** Id and extensions of the primitive `deceasedBoolean`. */
  _deceasedBoolean?: Element;
  /** Indicates if the practitioner is deceased or not (0..1) */
  deceasedDateTime?: string;
  /** Id and extensions of the primitive `deceasedDateTime`. */
  _deceasedDateTime?: Element;
  /** Address(es) of the practitioner that are not role specific (typically home address) (0..*) */
  address?: Array<Address>;
  /** Image of the person (0..*) */
  photo?: Array<Attachment>;
  /** Qualifications, certifications, accreditations, licenses, training, etc. pertaining to the provision of care (0..*) */
  qualification?: Array<PractitionerQualification>;
  /** A language which may be used to communicate with the practitioner (0..*) */
  communication?: Array<PractitionerCommunication>;
}

export namespace Practitioner {
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
 * Qualifications, certifications, accreditations, licenses, training, etc. pertaining to the provision of care
 */
export interface PractitionerQualification {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** An identifier for this qualification for the practitioner (0..*) */
  identifier?: Array<Identifier>;
  /** Coded representation of the qualification (1..1) */
  code: CodeableConcept;
  /** Period during which the qualification is valid (0..1) */
  period?: Period;
  /** Organization that regulates and issues the qualification (0..1) */
  issuer?: Reference;
}

/**
 * A language which may be used to communicate with the practitioner
 */
export interface PractitionerCommunication {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The language code used to communicate with the practitioner (1..1) */
  language: CodeableConcept;
  /** Language preference indicator (0..1) */
  preferred?: boolean;
  /** Id and extensions of the primitive `preferred`. */
  _preferred?: Element;
}
