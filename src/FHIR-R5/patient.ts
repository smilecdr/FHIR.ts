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
 * Demographics and other administrative information about an individual or animal receiving care or other health-related services.
 */
export interface Patient {
  resourceType: 'Patient';
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
  /** An identifier for this patient (0..*) */
  identifier?: Array<Identifier>;
  /** Whether this patient's record is in active use (0..1) */
  active?: boolean;
  /** Id and extensions of the primitive `active`. */
  _active?: Element;
  /** A name associated with the patient (0..*) */
  name?: Array<HumanName>;
  /** A contact detail for the individual (0..*) */
  telecom?: Array<ContactPoint>;
  /** male | female | other | unknown (0..1) */
  gender?: Patient.GenderEnum;
  /** Id and extensions of the primitive `gender`. */
  _gender?: Element;
  /** The date of birth for the individual (0..1) */
  birthDate?: string;
  /** Id and extensions of the primitive `birthDate`. */
  _birthDate?: Element;
  /** Indicates if the individual is deceased or not (0..1) */
  deceasedBoolean?: boolean;
  /** Id and extensions of the primitive `deceasedBoolean`. */
  _deceasedBoolean?: Element;
  /** Indicates if the individual is deceased or not (0..1) */
  deceasedDateTime?: string;
  /** Id and extensions of the primitive `deceasedDateTime`. */
  _deceasedDateTime?: Element;
  /** An address for the individual (0..*) */
  address?: Array<Address>;
  /** Marital (civil) status of a patient (0..1) */
  maritalStatus?: CodeableConcept;
  /** Whether patient is part of a multiple birth (0..1) */
  multipleBirthBoolean?: boolean;
  /** Id and extensions of the primitive `multipleBirthBoolean`. */
  _multipleBirthBoolean?: Element;
  /** Whether patient is part of a multiple birth (0..1) */
  multipleBirthInteger?: number;
  /** Id and extensions of the primitive `multipleBirthInteger`. */
  _multipleBirthInteger?: Element;
  /** Image of the patient (0..*) */
  photo?: Array<Attachment>;
  /** A contact party (e.g. guardian, partner, friend) for the patient (0..*) */
  contact?: Array<PatientContact>;
  /** A language which may be used to communicate with the patient about his or her health (0..*) */
  communication?: Array<PatientCommunication>;
  /** Patient's nominated primary care provider (0..*) */
  generalPractitioner?: Array<Reference>;
  /** Organization that is the custodian of the patient record (0..1) */
  managingOrganization?: Reference;
  /** Link to a Patient or RelatedPerson resource that concerns the same actual individual (0..*) */
  link?: Array<PatientLink>;
}

export namespace Patient {
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
 * A contact party (e.g. guardian, partner, friend) for the patient
 */
export interface PatientContact {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The kind of relationship (0..*) */
  relationship?: Array<CodeableConcept>;
  /** A name associated with the contact person (0..1) */
  name?: HumanName;
  /** A contact detail for the person (0..*) */
  telecom?: Array<ContactPoint>;
  /** Address for the contact person (0..1) */
  address?: Address;
  /** male | female | other | unknown (0..1) */
  gender?: PatientContact.GenderEnum;
  /** Id and extensions of the primitive `gender`. */
  _gender?: Element;
  /** Organization that is associated with the contact (0..1) */
  organization?: Reference;
  /** The period during which this contact person or organization is valid to be contacted relating to this patient (0..1) */
  period?: Period;
}

export namespace PatientContact {
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
 * A language which may be used to communicate with the patient about his or her health
 */
export interface PatientCommunication {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The language which can be used to communicate with the patient about his or her health (1..1) */
  language: CodeableConcept;
  /** Language preference indicator (0..1) */
  preferred?: boolean;
  /** Id and extensions of the primitive `preferred`. */
  _preferred?: Element;
}

/**
 * Link to a Patient or RelatedPerson resource that concerns the same actual individual
 */
export interface PatientLink {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The other patient or related person resource that the link refers to (1..1) */
  other: Reference;
  /** replaced-by | replaces | refer | seealso (1..1) */
  type?: PatientLink.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
}

export namespace PatientLink {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/link-type */
  export type TypeEnum = 'replaced-by' | 'replaces' | 'refer' | 'seealso';
  export const TypeEnum = {
    ReplacedBy: 'replaced-by' as TypeEnum,
    Replaces: 'replaces' as TypeEnum,
    Refer: 'refer' as TypeEnum,
    Seealso: 'seealso' as TypeEnum,
  };
}
