/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Address } from './address';
import type { CodeableConcept } from './codeableConcept';
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
 * Base StructureDefinition for Organization Resource
 */
export class Organization {
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
  contained?: Array<Resource>;
  /** Additional Content defined by implementations (0..*) */
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
  /** A contact detail for the organization (0..*) */
  telecom?: Array<ContactPoint>;
  /** An address for the organization (0..*) */
  address?: Array<Address>;
  /** The organization of which this organization forms a part (0..1) */
  partOf?: Reference;
  /** Contact for the organization for a certain purpose (0..*) */
  contact?: Array<OrganizationContact>;
  /** Technical endpoints providing access to services operated for the organization (0..*) */
  endpoint?: Array<Reference>;
}

/**
 * Contact for the organization for a certain purpose
 */
export class OrganizationContact {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** The type of contact (0..1) */
  purpose?: CodeableConcept;
  /** A name associated with the contact (0..1) */
  name?: HumanName;
  /** Contact details (telephone, email, etc.) for a contact (0..*) */
  telecom?: Array<ContactPoint>;
  /** Visiting or postal addresses for the contact (0..1) */
  address?: Address;
}
