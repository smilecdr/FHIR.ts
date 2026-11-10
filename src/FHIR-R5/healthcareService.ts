/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Attachment } from './attachment';
import type { Availability } from './availability';
import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { ExtendedContactDetail } from './extendedContactDetail';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * The details of a healthcare service available at a location or in a catalog. In the case where there is a hierarchy of services (for example, Lab -> Pathology -> Wound Cultures), this can be represented using a set of linked HealthcareServices.
 */
export interface HealthcareService {
  resourceType: 'HealthcareService';
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
  /** External identifiers for this item (0..*) */
  identifier?: Array<Identifier>;
  /** Whether this HealthcareService record is in active use (0..1) */
  active?: boolean;
  /** Id and extensions of the primitive `active`. */
  _active?: Element;
  /** Organization that provides this service (0..1) */
  providedBy?: Reference;
  /** The service within which this service is offered (0..*) */
  offeredIn?: Array<Reference>;
  /** Broad category of service being performed or delivered (0..*) */
  category?: Array<CodeableConcept>;
  /** Type of service that may be delivered or performed (0..*) */
  type?: Array<CodeableConcept>;
  /** Specialties handled by the HealthcareService (0..*) */
  specialty?: Array<CodeableConcept>;
  /** Location(s) where service may be provided (0..*) */
  location?: Array<Reference>;
  /** Description of service as presented to a consumer while searching (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Additional description and/or any specific issues not covered elsewhere (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;
  /** Extra details about the service that can't be placed in the other fields (0..1) */
  extraDetails?: string;
  /** Id and extensions of the primitive `extraDetails`. */
  _extraDetails?: Element;
  /** Facilitates quick identification of the service (0..1) */
  photo?: Attachment;
  /** Official contact details for the HealthcareService (0..*) */
  contact?: Array<ExtendedContactDetail>;
  /** Location(s) service is intended for/available to (0..*) */
  coverageArea?: Array<Reference>;
  /** Conditions under which service is available/offered (0..*) */
  serviceProvisionCode?: Array<CodeableConcept>;
  /** Specific eligibility requirements required to use the service (0..*) */
  eligibility?: Array<HealthcareServiceEligibility>;
  /** Programs that this service is applicable to (0..*) */
  program?: Array<CodeableConcept>;
  /** Collection of characteristics (attributes) (0..*) */
  characteristic?: Array<CodeableConcept>;
  /** The language that this service is offered in (0..*) */
  communication?: Array<CodeableConcept>;
  /** Ways that the service accepts referrals (0..*) */
  referralMethod?: Array<CodeableConcept>;
  /** If an appointment is required for access to this service (0..1) */
  appointmentRequired?: boolean;
  /** Id and extensions of the primitive `appointmentRequired`. */
  _appointmentRequired?: Element;
  /** Times the healthcare service is available (including exceptions) (0..*) */
  availability?: Array<Availability>;
  /** Technical endpoints providing access to electronic services operated for the healthcare service (0..*) */
  endpoint?: Array<Reference>;
}

/**
 * Specific eligibility requirements required to use the service
 */
export interface HealthcareServiceEligibility {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Coded value for the eligibility (0..1) */
  code?: CodeableConcept;
  /** Describes the eligibility conditions for the service (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;
}
