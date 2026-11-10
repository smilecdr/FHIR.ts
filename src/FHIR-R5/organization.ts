/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

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
 * A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action. Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc.
 */
export interface Organization {
  resourceType: 'Organization';
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
  /** Identifies this organization across multiple systems (0..*) */
  identifier?: Array<Identifier>;
  /** Whether the organization's record is still in active use (0..1) */
  active?: boolean;
  /** Id and extensions of the primitive `active`. */
  _active?: Element;
  /** Kind of organization (0..*) */
  type?: Array<CodeableConcept>;
  /** Name used for the organization (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** A list of alternate names that the organization is known as, or was known as in the past (0..*) */
  alias?: Array<string>;
  /** Id and extensions of the primitive `alias`. */
  _alias?: Array<Element | null>;
  /** Additional details about the Organization that could be displayed as further information to identify the Organization beyond its name (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Official contact details for the Organization (0..*) */
  contact?: Array<ExtendedContactDetail>;
  /** The organization of which this organization forms a part (0..1) */
  partOf?: Reference;
  /** Technical endpoints providing access to services operated for the organization (0..*) */
  endpoint?: Array<Reference>;
  /** Qualifications, certifications, accreditations, licenses, training, etc. pertaining to the provision of care (0..*) */
  qualification?: Array<OrganizationQualification>;
}

/**
 * Qualifications, certifications, accreditations, licenses, training, etc. pertaining to the provision of care
 */
export interface OrganizationQualification {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** An identifier for this qualification for the organization (0..*) */
  identifier?: Array<Identifier>;
  /** Coded representation of the qualification (1..1) */
  code: CodeableConcept;
  /** Period during which the qualification is valid (0..1) */
  period?: Period;
  /** Organization that regulates and issues the qualification (0..1) */
  issuer?: Reference;
}
