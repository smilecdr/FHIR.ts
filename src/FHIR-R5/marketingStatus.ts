/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Period } from './period';

/**
 * MarketingStatus Type: The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.
 */
export interface MarketingStatus {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The country in which the marketing authorization has been granted shall be specified It should be specified using the ISO 3166 ‑ 1 alpha-2 code elements (0..1) */
  country?: CodeableConcept;
  /** Where a Medicines Regulatory Agency has granted a marketing authorization for which specific provisions within a jurisdiction apply, the jurisdiction can be specified using an appropriate controlled terminology The controlled term and the controlled term identifier shall be specified (0..1) */
  jurisdiction?: CodeableConcept;
  /** This attribute provides information on the status of the marketing of the medicinal product See ISO/TS 20443 for more information and examples (1..1) */
  status: CodeableConcept;
  /** The date when the Medicinal Product is placed on the market by the Marketing Authorization Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE “Placed on the market” refers to the release of the Medicinal Product into the distribution chain (0..1) */
  dateRange?: Period;
  /** The date when the Medicinal Product is placed on the market by the Marketing Authorization Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE “Placed on the market” refers to the release of the Medicinal Product into the distribution chain (0..1) */
  restoreDate?: string;
  /** Id and extensions of the primitive `restoreDate`. */
  _restoreDate?: Element;
}
