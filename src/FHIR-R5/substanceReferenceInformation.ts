/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Quantity } from './quantity';
import type { Range } from './range';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * Todo.
 */
export interface SubstanceReferenceInformation {
  resourceType: 'SubstanceReferenceInformation';
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
  /** Todo (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;
  /** Todo (0..*) */
  gene?: Array<SubstanceReferenceInformationGene>;
  /** Todo (0..*) */
  geneElement?: Array<SubstanceReferenceInformationGeneElement>;
  /** Todo (0..*) */
  target?: Array<SubstanceReferenceInformationTarget>;
}

/**
 * Todo
 */
export interface SubstanceReferenceInformationGene {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Todo (0..1) */
  geneSequenceOrigin?: CodeableConcept;
  /** Todo (0..1) */
  gene?: CodeableConcept;
  /** Todo (0..*) */
  source?: Array<Reference>;
}

/**
 * Todo
 */
export interface SubstanceReferenceInformationGeneElement {
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
  element?: Identifier;
  /** Todo (0..*) */
  source?: Array<Reference>;
}

/**
 * Todo
 */
export interface SubstanceReferenceInformationTarget {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Todo (0..1) */
  target?: Identifier;
  /** Todo (0..1) */
  type?: CodeableConcept;
  /** Todo (0..1) */
  interaction?: CodeableConcept;
  /** Todo (0..1) */
  organism?: CodeableConcept;
  /** Todo (0..1) */
  organismType?: CodeableConcept;
  /** Todo (0..1) */
  amountQuantity?: Quantity;
  /** Todo (0..1) */
  amountRange?: Range;
  /** Todo (0..1) */
  amountString?: string;
  /** Id and extensions of the primitive `amountString`. */
  _amountString?: Element;
  /** Todo (0..1) */
  amountType?: CodeableConcept;
  /** Todo (0..*) */
  source?: Array<Reference>;
}
