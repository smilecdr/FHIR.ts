/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * The regulatory authorization of a medicinal product.
 */
export class MedicinalProductAuthorization {
  resourceType: 'MedicinalProductAuthorization';
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
  /** Business identifier for the marketing authorization, as assigned by a regulator (0..*) */
  identifier?: Array<Identifier>;
  /** The medicinal product that is being authorized (0..1) */
  subject?: Reference;
  /** The country in which the marketing authorization has been granted (0..*) */
  country?: Array<CodeableConcept>;
  /** Jurisdiction within a country (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** The status of the marketing authorization (0..1) */
  status?: CodeableConcept;
  /** The date at which the given status has become applicable (0..1) */
  statusDate?: Date | string;
  /** Id and extensions of the primitive `statusDate`. */
  _statusDate?: Element;
  /** The date when a suspended the marketing or the marketing authorization of the product is anticipated to be restored (0..1) */
  restoreDate?: Date | string;
  /** Id and extensions of the primitive `restoreDate`. */
  _restoreDate?: Element;
  /** The beginning of the time period in which the marketing authorization is in the specific status shall be specified A complete date consisting of day, month and year shall be specified using the ISO 8601 date format (0..1) */
  validityPeriod?: Period;
  /** A period of time after authorization before generic product applicatiosn can be submitted (0..1) */
  dataExclusivityPeriod?: Period;
  /** The date when the first authorization was granted by a Medicines Regulatory Agency (0..1) */
  dateOfFirstAuthorization?: Date | string;
  /** Id and extensions of the primitive `dateOfFirstAuthorization`. */
  _dateOfFirstAuthorization?: Element;
  /** Date of first marketing authorization for a company's new medicinal product in any country in the World (0..1) */
  internationalBirthDate?: Date | string;
  /** Id and extensions of the primitive `internationalBirthDate`. */
  _internationalBirthDate?: Element;
  /** The legal framework against which this authorization is granted (0..1) */
  legalBasis?: CodeableConcept;
  /** Authorization in areas within a country (0..*) */
  jurisdictionalAuthorization?: Array<MedicinalProductAuthorizationJurisdictionalAuthorization>;
  /** Marketing Authorization Holder (0..1) */
  holder?: Reference;
  /** Medicines Regulatory Agency (0..1) */
  regulator?: Reference;
  /** The regulatory procedure for granting or amending a marketing authorization (0..1) */
  procedure?: MedicinalProductAuthorizationProcedure;
}

/**
 * Authorization in areas within a country
 */
export class MedicinalProductAuthorizationJurisdictionalAuthorization {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The assigned number for the marketing authorization (0..*) */
  identifier?: Array<Identifier>;
  /** Country of authorization (0..1) */
  country?: CodeableConcept;
  /** Jurisdiction within a country (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** The legal status of supply in a jurisdiction or region (0..1) */
  legalStatusOfSupply?: CodeableConcept;
  /** The start and expected end date of the authorization (0..1) */
  validityPeriod?: Period;
}

/**
 * The regulatory procedure for granting or amending a marketing authorization
 */
export class MedicinalProductAuthorizationProcedure {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Identifier for this procedure (0..1) */
  identifier?: Identifier;
  /** Type of procedure (1..1) */
  type: CodeableConcept;
  /** Date of procedure (0..1) */
  datePeriod?: Period;
  /** Date of procedure (0..1) */
  dateDateTime?: Date | string;
  /** Id and extensions of the primitive `dateDateTime`. */
  _dateDateTime?: Element;
  /** Applcations submitted to obtain a marketing authorization (0..*) */
  application?: Array<MedicinalProductAuthorizationProcedure>;
}
