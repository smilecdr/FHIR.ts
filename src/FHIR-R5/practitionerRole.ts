/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Availability } from './availability';
import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { ExtendedContactDetail } from './extendedContactDetail';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * A specific set of Roles/Locations/specialties/services that a practitioner may perform, or has performed at an organization during a period of time.
 */
export interface PractitionerRole {
  resourceType: 'PractitionerRole';
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
  /** Identifiers for a role/location (0..*) */
  identifier?: Array<Identifier>;
  /** Whether this practitioner role record is in active use (0..1) */
  active?: boolean;
  /** Id and extensions of the primitive `active`. */
  _active?: Element;
  /** The period during which the practitioner is authorized to perform in these role(s) (0..1) */
  period?: Period;
  /** Practitioner that provides services for the organization (0..1) */
  practitioner?: Reference;
  /** Organization where the roles are available (0..1) */
  organization?: Reference;
  /** Roles which this practitioner may perform (0..*) */
  code?: Array<CodeableConcept>;
  /** Specific specialty of the practitioner (0..*) */
  specialty?: Array<CodeableConcept>;
  /** Location(s) where the practitioner provides care (0..*) */
  location?: Array<Reference>;
  /** Healthcare services provided for this role's Organization/Location(s) (0..*) */
  healthcareService?: Array<Reference>;
  /** Official contact details relating to this PractitionerRole (0..*) */
  contact?: Array<ExtendedContactDetail>;
  /** Collection of characteristics (attributes) (0..*) */
  characteristic?: Array<CodeableConcept>;
  /** A language the practitioner (in this role) can use in patient communication (0..*) */
  communication?: Array<CodeableConcept>;
  /** Times the Practitioner is available at this location and/or healthcare service (including exceptions) (0..*) */
  availability?: Array<Availability>;
  /** Endpoints for interacting with the practitioner in this role (0..*) */
  endpoint?: Array<Reference>;
}
