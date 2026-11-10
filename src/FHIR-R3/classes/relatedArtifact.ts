/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Attachment } from './attachment';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Reference } from './reference';

/**
 * Base StructureDefinition for RelatedArtifact Type
 */
export class RelatedArtifact {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** documentation | justification | citation | predecessor | successor | derived-from | depends-on | composed-of (1..1) */
  type?: RelatedArtifact.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Brief description of the related artifact (0..1) */
  display?: string;
  /** Id and extensions of the primitive `display`. */
  _display?: Element;
  /** Bibliographic citation for the artifact (0..1) */
  citation?: string;
  /** Id and extensions of the primitive `citation`. */
  _citation?: Element;
  /** Where the artifact can be accessed (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** What document is being referenced (0..1) */
  document?: Attachment;
  /** What resource is being referenced (0..1) */
  resource?: Reference;
}

export namespace RelatedArtifact {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/related-artifact-type */
  export type TypeEnum =
    | 'documentation'
    | 'justification'
    | 'citation'
    | 'predecessor'
    | 'successor'
    | 'derived-from'
    | 'depends-on'
    | 'composed-of';
  export const TypeEnum = {
    Documentation: 'documentation' as TypeEnum,
    Justification: 'justification' as TypeEnum,
    Citation: 'citation' as TypeEnum,
    Predecessor: 'predecessor' as TypeEnum,
    Successor: 'successor' as TypeEnum,
    DerivedFrom: 'derived-from' as TypeEnum,
    DependsOn: 'depends-on' as TypeEnum,
    ComposedOf: 'composed-of' as TypeEnum,
  };
}
