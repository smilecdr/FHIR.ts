/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
import type { ContactPoint } from './contactPoint';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';
import type { Timing } from './timing';

/**
 * The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care.
 */
export interface CareTeam {
  resourceType: 'CareTeam';
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
  /** External Ids for this team (0..*) */
  identifier?: Array<Identifier>;
  /** proposed | active | suspended | inactive | entered-in-error (0..1) */
  status?: CareTeam.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Type of team (0..*) */
  category?: Array<CodeableConcept>;
  /** Name of the team, such as crisis assessment team (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Who care team is for (0..1) */
  subject?: Reference;
  /** Time period team covers (0..1) */
  period?: Period;
  /** Members of the team (0..*) */
  participant?: Array<CareTeamParticipant>;
  /** Why the care team exists (0..*) */
  reason?: Array<CodeableReference>;
  /** Organization responsible for the care team (0..*) */
  managingOrganization?: Array<Reference>;
  /** A contact detail for the care team (that applies to all members) (0..*) */
  telecom?: Array<ContactPoint>;
  /** Comments made about the CareTeam (0..*) */
  note?: Array<Annotation>;
}

export namespace CareTeam {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/care-team-status */
  export type StatusEnum = 'proposed' | 'active' | 'suspended' | 'inactive' | 'entered-in-error';
  export const StatusEnum = {
    Proposed: 'proposed' as StatusEnum,
    Active: 'active' as StatusEnum,
    Suspended: 'suspended' as StatusEnum,
    Inactive: 'inactive' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
}

/**
 * Members of the team
 */
export interface CareTeamParticipant {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of involvement (0..1) */
  role?: CodeableConcept;
  /** Who is involved (0..1) */
  member?: Reference;
  /** Organization of the practitioner (0..1) */
  onBehalfOf?: Reference;
  /** When the member is generally available within this care team (0..1) */
  coveragePeriod?: Period;
  /** When the member is generally available within this care team (0..1) */
  coverageTiming?: Timing;
}
