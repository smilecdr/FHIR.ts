/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { ContactPoint } from './contactPoint';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship.
 */
export class OrganizationAffiliation {
  resourceType: 'OrganizationAffiliation';
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
  /** Business identifiers that are specific to this role (0..*) */
  identifier?: Array<Identifier>;
  /** Whether this organization affiliation record is in active use (0..1) */
  active?: boolean;
  /** Id and extensions of the primitive `active`. */
  _active?: Element;
  /** The period during which the participatingOrganization is affiliated with the primary organization (0..1) */
  period?: Period;
  /** Organization where the role is available (0..1) */
  organization?: Reference;
  /** Organization that provides/performs the role (e.g. providing services or is a member of) (0..1) */
  participatingOrganization?: Reference;
  /** Health insurance provider network in which the participatingOrganization provides the role's services (if defined) at the indicated locations (if defined) (0..*) */
  network?: Array<Reference>;
  /** Definition of the role the participatingOrganization plays (0..*) */
  code?: Array<CodeableConcept>;
  /** Specific specialty of the participatingOrganization in the context of the role (0..*) */
  specialty?: Array<CodeableConcept>;
  /** The location(s) at which the role occurs (0..*) */
  location?: Array<Reference>;
  /** Healthcare services provided through the role (0..*) */
  healthcareService?: Array<Reference>;
  /** Contact details at the participatingOrganization relevant to this Affiliation (0..*) */
  telecom?: Array<ContactPoint>;
  /** Technical endpoints providing access to services operated for this role (0..*) */
  endpoint?: Array<Reference>;
}
