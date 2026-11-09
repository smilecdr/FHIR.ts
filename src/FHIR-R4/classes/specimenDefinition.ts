/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Duration } from './duration';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Quantity } from './quantity';
import type { Range } from './range';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * A kind of specimen with associated set of requirements.
 */
export class SpecimenDefinition {
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
  contained?: Array<Resource>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Business identifier of a kind of specimen (0..1) */
  identifier?: Identifier;
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

/**
 * Specimen in container intended for testing by lab
 */
export class SpecimenDefinitionTypeTested {
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
  /** Specimen requirements (0..1) */
  requirement?: string;
  /** Id and extensions of the primitive `requirement`. */
  _requirement?: Element;
  /** Specimen retention time (0..1) */
  retentionTime?: Duration;
  /** Rejection criterion (0..*) */
  rejectionCriterion?: Array<CodeableConcept>;
  /** Specimen handling before testing (0..*) */
  handling?: Array<SpecimenDefinitionHandling>;
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
export class SpecimenDefinitionContainer {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Container material (0..1) */
  material?: CodeableConcept;
  /** Kind of container associated with the kind of specimen (0..1) */
  type?: CodeableConcept;
  /** Color of container cap (0..1) */
  cap?: CodeableConcept;
  /** Container description (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Container capacity (0..1) */
  capacity?: Quantity;
  /** Minimum volume (0..1) */
  minimumVolumeQuantity?: Quantity;
  /** Minimum volume (0..1) */
  minimumVolumeString?: string;
  /** Id and extensions of the primitive `minimumVolumeString`. */
  _minimumVolumeString?: Element;
  /** Additive associated with container (0..*) */
  additive?: Array<SpecimenDefinitionAdditive>;
  /** Specimen container preparation (0..1) */
  preparation?: string;
  /** Id and extensions of the primitive `preparation`. */
  _preparation?: Element;
}

/**
 * Additive associated with container
 */
export class SpecimenDefinitionAdditive {
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
export class SpecimenDefinitionHandling {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Temperature qualifier (0..1) */
  temperatureQualifier?: CodeableConcept;
  /** Temperature range (0..1) */
  temperatureRange?: Range;
  /** Maximum preservation time (0..1) */
  maxDuration?: Duration;
  /** Preservation instruction (0..1) */
  instruction?: string;
  /** Id and extensions of the primitive `instruction`. */
  _instruction?: Element;
}
