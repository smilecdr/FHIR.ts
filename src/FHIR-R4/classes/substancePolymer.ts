/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Attachment } from './attachment';
import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Resource } from './resourceList';
import type { SubstanceAmount } from './substanceAmount';

/**
 * Todo.
 */
export class SubstancePolymer {
  resourceType: 'SubstancePolymer';
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
  /** Todo (0..1) */
  class?: CodeableConcept;
  /** Todo (0..1) */
  geometry?: CodeableConcept;
  /** Todo (0..*) */
  copolymerConnectivity?: Array<CodeableConcept>;
  /** Todo (0..*) */
  modification?: Array<string>;
  /** Id and extensions of the primitive `modification`. */
  _modification?: Array<Element | null>;
  /** Todo (0..*) */
  monomerSet?: Array<SubstancePolymerMonomerSet>;
  /** Todo (0..*) */
  repeat?: Array<SubstancePolymerRepeat>;
}

/**
 * Todo
 */
export class SubstancePolymerMonomerSet {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Todo (0..1) */
  ratioType?: CodeableConcept;
  /** Todo (0..*) */
  startingMaterial?: Array<SubstancePolymerStartingMaterial>;
}

/**
 * Todo
 */
export class SubstancePolymerStartingMaterial {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Todo (0..1) */
  material?: CodeableConcept;
  /** Todo (0..1) */
  type?: CodeableConcept;
  /** Todo (0..1) */
  isDefining?: boolean;
  /** Id and extensions of the primitive `isDefining`. */
  _isDefining?: Element;
  /** Todo (0..1) */
  amount?: SubstanceAmount;
}

/**
 * Todo
 */
export class SubstancePolymerRepeat {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Todo (0..1) */
  numberOfUnits?: number;
  /** Id and extensions of the primitive `numberOfUnits`. */
  _numberOfUnits?: Element;
  /** Todo (0..1) */
  averageMolecularFormula?: string;
  /** Id and extensions of the primitive `averageMolecularFormula`. */
  _averageMolecularFormula?: Element;
  /** Todo (0..1) */
  repeatUnitAmountType?: CodeableConcept;
  /** Todo (0..*) */
  repeatUnit?: Array<SubstancePolymerRepeatUnit>;
}

/**
 * Todo
 */
export class SubstancePolymerRepeatUnit {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Todo (0..1) */
  orientationOfPolymerisation?: CodeableConcept;
  /** Todo (0..1) */
  repeatUnit?: string;
  /** Id and extensions of the primitive `repeatUnit`. */
  _repeatUnit?: Element;
  /** Todo (0..1) */
  amount?: SubstanceAmount;
  /** Todo (0..*) */
  degreeOfPolymerisation?: Array<SubstancePolymerDegreeOfPolymerisation>;
  /** Todo (0..*) */
  structuralRepresentation?: Array<SubstancePolymerStructuralRepresentation>;
}

/**
 * Todo
 */
export class SubstancePolymerDegreeOfPolymerisation {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Todo (0..1) */
  degree?: CodeableConcept;
  /** Todo (0..1) */
  amount?: SubstanceAmount;
}

/**
 * Todo
 */
export class SubstancePolymerStructuralRepresentation {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Todo (0..1) */
  type?: CodeableConcept;
  /** Todo (0..1) */
  representation?: string;
  /** Id and extensions of the primitive `representation`. */
  _representation?: Element;
  /** Todo (0..1) */
  attachment?: Attachment;
}
