/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../classes/models-r4';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { Element } from './element';
import { Period } from './period';

/**
 * The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.
 */
export class MarketingStatus extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'country',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'country', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'jurisdiction',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'jurisdiction', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'status', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'dateRange',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'dateRange', typeCode: 'Period' }],
    },
    {
      elementName: 'restoreDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'restoreDate', typeCode: 'dateTime' }],
    },
  ];

  /** The country in which the marketing authorisation has been granted shall be specified It should be specified using the ISO 3166 ‑ 1 alpha-2 code elements (1..1) */
  country?: CodeableConcept;

  /** Where a Medicines Regulatory Agency has granted a marketing authorisation for which specific provisions within a jurisdiction apply, the jurisdiction can be specified using an appropriate controlled terminology The controlled term and the controlled term identifier shall be specified (0..1) */
  jurisdiction?: CodeableConcept;

  /** This attribute provides information on the status of the marketing of the medicinal product See ISO/TS 20443 for more information and examples (1..1) */
  status?: CodeableConcept;

  /** The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE “Placed on the market” refers to the release of the Medicinal Product into the distribution chain (1..1) */
  dateRange?: Period;

  /** The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE “Placed on the market” refers to the release of the Medicinal Product into the distribution chain (0..1) */
  restoreDate?: string;
  /** Id and extensions of the primitive `restoreDate`. */
  _restoreDate?: Element;

  override fhirType(): string {
    return 'MarketingStatus';
  }

  /** FHIR JSON for this MarketingStatus, typed as the plain `MarketingStatus` data type. */
  override toJSON(): plainTypes.MarketingStatus {
    return this.serialize() as plainTypes.MarketingStatus;
  }

  /** The country in which the marketing authorisation has been granted shall be specified It should be specified using the ISO 3166 ‑ 1 alpha-2 code elements (1..1) Created when absent. */
  getCountry(): CodeableConcept {
    if (this.country === undefined) {
      this.country = new CodeableConcept();
    }
    return this.country;
  }

  setCountry(country: CodeableConcept | undefined): this {
    return this.setFieldValue('country', country);
  }

  hasCountry(): boolean {
    return this.hasFieldValue('country');
  }

  /** Where a Medicines Regulatory Agency has granted a marketing authorisation for which specific provisions within a jurisdiction apply, the jurisdiction can be specified using an appropriate controlled terminology The controlled term and the controlled term identifier shall be specified (0..1) Created when absent. */
  getJurisdiction(): CodeableConcept {
    if (this.jurisdiction === undefined) {
      this.jurisdiction = new CodeableConcept();
    }
    return this.jurisdiction;
  }

  setJurisdiction(jurisdiction: CodeableConcept | undefined): this {
    return this.setFieldValue('jurisdiction', jurisdiction);
  }

  hasJurisdiction(): boolean {
    return this.hasFieldValue('jurisdiction');
  }

  /** This attribute provides information on the status of the marketing of the medicinal product See ISO/TS 20443 for more information and examples (1..1) Created when absent. */
  getStatus(): CodeableConcept {
    if (this.status === undefined) {
      this.status = new CodeableConcept();
    }
    return this.status;
  }

  setStatus(status: CodeableConcept | undefined): this {
    return this.setFieldValue('status', status);
  }

  hasStatus(): boolean {
    return this.hasFieldValue('status');
  }

  /** The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE “Placed on the market” refers to the release of the Medicinal Product into the distribution chain (1..1) Created when absent. */
  getDateRange(): Period {
    if (this.dateRange === undefined) {
      this.dateRange = new Period();
    }
    return this.dateRange;
  }

  setDateRange(dateRange: Period | undefined): this {
    return this.setFieldValue('dateRange', dateRange);
  }

  hasDateRange(): boolean {
    return this.hasFieldValue('dateRange');
  }

  /** The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE “Placed on the market” refers to the release of the Medicinal Product into the distribution chain (0..1) */
  getRestoreDate(): string | undefined {
    return this.restoreDate;
  }

  /** Sets `restoreDate`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setRestoreDate(restoreDate: string | undefined): this {
    return this.setFieldValue('restoreDate', restoreDate);
  }

  hasRestoreDate(): boolean {
    return this.hasFieldValue('restoreDate');
  }

  /** The element carrying the id and extensions of `restoreDate`. Created when absent. */
  getRestoreDateElement(): Element {
    if (this._restoreDate === undefined) {
      this._restoreDate = new Element();
    }
    return this._restoreDate;
  }

  setRestoreDateElement(restoreDateElement: Element | undefined): this {
    this._restoreDate = restoreDateElement;
    return this;
  }
}

modelTypeRegistry.register('MarketingStatus', MarketingStatus, false);
