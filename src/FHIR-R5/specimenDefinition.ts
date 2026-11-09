/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { ContactDetail } from './contactDetail';
import type { Duration } from './duration';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Quantity } from './quantity';
import type { Range } from './range';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * A kind of specimen with associated set of requirements.
 */
export interface SpecimenDefinition {
  resourceType: 'SpecimenDefinition';
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
  /** Logical canonical URL to reference this SpecimenDefinition (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Business identifier (0..1) */
  identifier?: Identifier;
  /** Business version of the SpecimenDefinition (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;
  /** Name for this {{title}} (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this SpecimenDefinition (Human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** Based on FHIR definition of another SpecimenDefinition (0..*) */
  derivedFromCanonical?: Array<string>;
  /** Id and extensions of the primitive `derivedFromCanonical`. */
  _derivedFromCanonical?: Array<Element | null>;
  /** Based on external definition (0..*) */
  derivedFromUri?: Array<string>;
  /** Id and extensions of the primitive `derivedFromUri`. */
  _derivedFromUri?: Array<Element | null>;
  /** draft | active | retired | unknown (1..1) */
  status?: SpecimenDefinition.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** If this SpecimenDefinition is not for real usage (0..1) */
  experimental?: boolean;
  /** Id and extensions of the primitive `experimental`. */
  _experimental?: Element;
  /** Type of subject for specimen collection (0..1) */
  subjectCodeableConcept?: CodeableConcept;
  /** Type of subject for specimen collection (0..1) */
  subjectReference?: Reference;
  /** Date status first applied (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** The name of the individual or organization that published the SpecimenDefinition (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;
  /** Contact details for the publisher (0..*) */
  contact?: Array<ContactDetail>;
  /** Natural language description of the SpecimenDefinition (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Content intends to support these contexts (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for this SpecimenDefinition (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Why this SpecimenDefinition is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;
  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;
  /** Copyright holder and year(s) (0..1) */
  copyrightLabel?: string;
  /** Id and extensions of the primitive `copyrightLabel`. */
  _copyrightLabel?: Element;
  /** When SpecimenDefinition was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;
  /** The date on which the asset content was last reviewed by the publisher (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;
  /** The effective date range for the SpecimenDefinition (0..1) */
  effectivePeriod?: Period;
  /** Kind of material to collect (0..1) */
  typeCollected?: CodeableConcept;
  /** Patient preparation for collection (0..*) */
  patientPreparation?: Array<CodeableConcept>;
  /** Time aspect for collection (0..1) */
  timeAspect?: string;
  /** Id and extensions of the primitive `timeAspect`. */
  _timeAspect?: Element;
  /** Specimen collection procedure (0..*) */
  collection?: Array<CodeableConcept>;
  /** Specimen in container intended for testing by lab (0..*) */
  typeTested?: Array<SpecimenDefinitionTypeTested>;
}

export namespace SpecimenDefinition {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/publication-status */
  export type StatusEnum = 'draft' | 'active' | 'retired' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    Retired: 'retired' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}

/**
 * Specimen in container intended for testing by lab
 */
export interface SpecimenDefinitionTypeTested {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Primary or secondary specimen (0..1) */
  isDerived?: boolean;
  /** Id and extensions of the primitive `isDerived`. */
  _isDerived?: Element;
  /** Type of intended specimen (0..1) */
  type?: CodeableConcept;
  /** preferred | alternate (1..1) */
  preference?: SpecimenDefinitionTypeTested.PreferenceEnum;
  /** Id and extensions of the primitive `preference`. */
  _preference?: Element;
  /** The specimen's container (0..1) */
  container?: SpecimenDefinitionContainer;
  /** Requirements for specimen delivery and special handling (0..1) */
  requirement?: string;
  /** Id and extensions of the primitive `requirement`. */
  _requirement?: Element;
  /** The usual time for retaining this kind of specimen (0..1) */
  retentionTime?: Duration;
  /** Specimen for single use only (0..1) */
  singleUse?: boolean;
  /** Id and extensions of the primitive `singleUse`. */
  _singleUse?: Element;
  /** Criterion specified for specimen rejection (0..*) */
  rejectionCriterion?: Array<CodeableConcept>;
  /** Specimen handling before testing (0..*) */
  handling?: Array<SpecimenDefinitionHandling>;
  /** Where the specimen will be tested (0..*) */
  testingDestination?: Array<CodeableConcept>;
}

export namespace SpecimenDefinitionTypeTested {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/specimen-contained-preference */
  export type PreferenceEnum = 'preferred' | 'alternate';
  export const PreferenceEnum = {
    Preferred: 'preferred' as PreferenceEnum,
    Alternate: 'alternate' as PreferenceEnum,
  };
}

/**
 * The specimen's container
 */
export interface SpecimenDefinitionContainer {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The material type used for the container (0..1) */
  material?: CodeableConcept;
  /** Kind of container associated with the kind of specimen (0..1) */
  type?: CodeableConcept;
  /** Color of container cap (0..1) */
  cap?: CodeableConcept;
  /** The description of the kind of container (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The capacity of this kind of container (0..1) */
  capacity?: Quantity;
  /** Minimum volume (0..1) */
  minimumVolumeQuantity?: Quantity;
  /** Minimum volume (0..1) */
  minimumVolumeString?: string;
  /** Id and extensions of the primitive `minimumVolumeString`. */
  _minimumVolumeString?: Element;
  /** Additive associated with container (0..*) */
  additive?: Array<SpecimenDefinitionAdditive>;
  /** Special processing applied to the container for this specimen type (0..1) */
  preparation?: string;
  /** Id and extensions of the primitive `preparation`. */
  _preparation?: Element;
}

/**
 * Additive associated with container
 */
export interface SpecimenDefinitionAdditive {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Additive associated with container (1..1) */
  additiveCodeableConcept?: CodeableConcept;
  /** Additive associated with container (1..1) */
  additiveReference?: Reference;
}

/**
 * Specimen handling before testing
 */
export interface SpecimenDefinitionHandling {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Qualifies the interval of temperature (0..1) */
  temperatureQualifier?: CodeableConcept;
  /** Temperature range for these handling instructions (0..1) */
  temperatureRange?: Range;
  /** Maximum preservation time (0..1) */
  maxDuration?: Duration;
  /** Preservation instruction (0..1) */
  instruction?: string;
  /** Id and extensions of the primitive `instruction`. */
  _instruction?: Element;
}
