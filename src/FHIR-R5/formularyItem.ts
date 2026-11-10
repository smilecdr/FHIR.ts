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
import type { ResourceList } from './resourceList';

/**
 * This resource describes a product or service that is available through a program and includes the conditions and constraints of availability. All of the information in this resource is specific to the inclusion of the item in the formulary and is not inherent to the item itself.
 */
export interface FormularyItem {
  resourceType: 'FormularyItem';
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
  /** Business identifier for this formulary item (0..*) */
  identifier?: Array<Identifier>;
  /** Codes that identify this formulary item (0..1) */
  code?: CodeableConcept;
  /** active | entered-in-error | inactive (0..1) */
  status?: FormularyItem.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
}

export namespace FormularyItem {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/formularyitem-status */
  export type StatusEnum = 'active' | 'entered-in-error' | 'inactive';
  export const StatusEnum = {
    Active: 'active' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Inactive: 'inactive' as StatusEnum,
  };
}
