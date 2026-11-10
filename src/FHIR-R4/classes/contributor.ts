/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { ContactDetail } from './contactDetail';
import type { Element } from './element';
import type { Extension } from './extension';

/**
 * A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers.
 */
export class Contributor {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** author | editor | reviewer | endorser (1..1) */
  type?: Contributor.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Who contributed the content (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Contact details of the contributor (0..*) */
  contact?: Array<ContactDetail>;
}

export namespace Contributor {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/contributor-type */
  export type TypeEnum = 'author' | 'editor' | 'reviewer' | 'endorser';
  export const TypeEnum = {
    Author: 'author' as TypeEnum,
    Editor: 'editor' as TypeEnum,
    Reviewer: 'reviewer' as TypeEnum,
    Endorser: 'endorser' as TypeEnum,
  };
}
