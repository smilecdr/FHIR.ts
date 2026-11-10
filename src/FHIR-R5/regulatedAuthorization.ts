/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * Regulatory approval, clearance or licencing related to a regulated product, treatment, facility or activity that is cited in a guidance, regulation, rule or legislative act. An example is Market Authorization relating to a Medicinal Product.
 */
export interface RegulatedAuthorization {
  resourceType: 'RegulatedAuthorization';
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
  /** Business identifier for the authorization, typically assigned by the authorizing body (0..*) */
  identifier?: Array<Identifier>;
  /** The product type, treatment, facility or activity that is being authorized (0..*) */
  subject?: Array<Reference>;
  /** Overall type of this authorization, for example drug marketing approval, orphan drug designation (0..1) */
  type?: CodeableConcept;
  /** General textual supporting information (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The territory in which the authorization has been granted (0..*) */
  region?: Array<CodeableConcept>;
  /** The status that is authorised e.g. approved. Intermediate states can be tracked with cases and applications (0..1) */
  status?: CodeableConcept;
  /** The date at which the current status was assigned (0..1) */
  statusDate?: string;
  /** Id and extensions of the primitive `statusDate`. */
  _statusDate?: Element;
  /** The time period in which the regulatory approval etc. is in effect, e.g. a Marketing Authorization includes the date of authorization and/or expiration date (0..1) */
  validityPeriod?: Period;
  /** Condition for which the use of the regulated product applies (0..*) */
  indication?: Array<CodeableReference>;
  /** The intended use of the product, e.g. prevention, treatment (0..1) */
  intendedUse?: CodeableConcept;
  /** The legal/regulatory framework or reasons under which this authorization is granted (0..*) */
  basis?: Array<CodeableConcept>;
  /** The organization that has been granted this authorization, by the regulator (0..1) */
  holder?: Reference;
  /** The regulatory authority or authorizing body granting the authorization (0..1) */
  regulator?: Reference;
  /** Additional information or supporting documentation about the authorization (0..*) */
  attachedDocument?: Array<Reference>;
  /** The case or regulatory procedure for granting or amending a regulated authorization. Note: This area is subject to ongoing review and the workgroup is seeking implementer feedback on its use (see link at bottom of page) (0..1) */
  case?: RegulatedAuthorizationCase;
}

/**
 * The case or regulatory procedure for granting or amending a regulated authorization. Note: This area is subject to ongoing review and the workgroup is seeking implementer feedback on its use (see link at bottom of page)
 */
export interface RegulatedAuthorizationCase {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Identifier by which this case can be referenced (0..1) */
  identifier?: Identifier;
  /** The defining type of case (0..1) */
  type?: CodeableConcept;
  /** The status associated with the case (0..1) */
  status?: CodeableConcept;
  /** Relevant date for this case (0..1) */
  datePeriod?: Period;
  /** Relevant date for this case (0..1) */
  dateDateTime?: string;
  /** Id and extensions of the primitive `dateDateTime`. */
  _dateDateTime?: Element;
  /** Applications submitted to obtain a regulated authorization. Steps within the longer running case or procedure (0..*) */
  application?: Array<RegulatedAuthorizationCase>;
}
