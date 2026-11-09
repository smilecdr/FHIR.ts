/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../models';
import { BackboneType } from './backboneType';
import { CodeableConcept } from './codeableConcept';
import { Duration } from './duration';
import { Element } from './element';

/**
 * ProductShelfLife Type: The shelf-life and storage information for a medicinal product item or container can be described using this class.
 */
export class ProductShelfLife extends BackboneType {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'periodDuration', typeCode: 'Duration' },
        { jsonKey: 'periodString', typeCode: 'string' },
      ],
    },
    {
      elementName: 'specialPrecautionsForStorage',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'specialPrecautionsForStorage', typeCode: 'CodeableConcept' }],
    },
  ];

  /** This describes the shelf life, taking into account various scenarios such as shelf life of the packaged Medicinal Product itself, shelf life after transformation where necessary and shelf life after the first opening of a bottle, etc. The shelf life type shall be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified (0..1) */
  type?: CodeableConcept;

  /** The shelf life time period can be specified using a numerical value for the period of time and its unit of time measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used (0..1) */
  periodDuration?: Duration;
  /** The shelf life time period can be specified using a numerical value for the period of time and its unit of time measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used (0..1) */
  periodString?: string;
  /** Id and extensions of the primitive `periodString`. */
  _periodString?: Element;

  /** Special precautions for storage, if any, can be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified (0..*) */
  specialPrecautionsForStorage?: CodeableConcept[];

  override fhirType(): string {
    return 'ProductShelfLife';
  }

  /** FHIR JSON for this ProductShelfLife, typed as the plain `ProductShelfLife` data type. */
  override toJSON(): plainTypes.ProductShelfLife {
    return this.serialize() as plainTypes.ProductShelfLife;
  }

  /** This describes the shelf life, taking into account various scenarios such as shelf life of the packaged Medicinal Product itself, shelf life after transformation where necessary and shelf life after the first opening of a bottle, etc. The shelf life type shall be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified (0..1) Created when absent. */
  getType(): CodeableConcept {
    if (this.type === undefined) {
      this.type = new CodeableConcept();
    }
    return this.type;
  }

  setType(type: CodeableConcept | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** The shelf life time period can be specified using a numerical value for the period of time and its unit of time measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used (0..1) Whichever type of `period[x]` is set. */
  getPeriod(): Duration | string | undefined {
    return this.getChoiceValue<Duration | string>('period');
  }

  /** True when any type of `period[x]` is set. */
  hasPeriod(): boolean {
    return this.hasChoiceValue('period');
  }

  getPeriodDuration(): Duration | undefined {
    return this.periodDuration;
  }

  /** Sets `period[x]` as Duration and clears every other type of it. */
  setPeriodDuration(periodDuration: Duration | undefined): this {
    return this.setFieldValue('periodDuration', periodDuration);
  }

  hasPeriodDuration(): boolean {
    return this.hasFieldValue('periodDuration');
  }

  getPeriodString(): string | undefined {
    return this.periodString;
  }

  /** Sets `period[x]` as string and clears every other type of it. */
  setPeriodString(periodString: string | undefined): this {
    return this.setFieldValue('periodString', periodString);
  }

  hasPeriodString(): boolean {
    return this.hasFieldValue('periodString');
  }

  /** Special precautions for storage, if any, can be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified (0..*) Never undefined; an empty list is created when absent. */
  getSpecialPrecautionsForStorage(): CodeableConcept[] {
    if (this.specialPrecautionsForStorage === undefined) {
      this.specialPrecautionsForStorage = [];
    }
    return this.specialPrecautionsForStorage;
  }

  setSpecialPrecautionsForStorage(
    specialPrecautionsForStorage: CodeableConcept[] | undefined
  ): this {
    return this.setFieldValue('specialPrecautionsForStorage', specialPrecautionsForStorage);
  }

  hasSpecialPrecautionsForStorage(): boolean {
    return this.hasFieldValue('specialPrecautionsForStorage');
  }

  /** Appends a new, empty CodeableConcept to `specialPrecautionsForStorage` and returns it so it can be filled in. */
  addSpecialPrecautionsForStorage(): CodeableConcept;
  /** Appends the given CodeableConcept to `specialPrecautionsForStorage` and returns this object for chaining. */
  addSpecialPrecautionsForStorage(codeableConcept: CodeableConcept): this;
  addSpecialPrecautionsForStorage(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('specialPrecautionsForStorage', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('specialPrecautionsForStorage', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `specialPrecautionsForStorage`. One is added when the list is empty. */
  getSpecialPrecautionsForStorageFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getSpecialPrecautionsForStorage()[0];
    return firstCodeableConcept === undefined
      ? this.addSpecialPrecautionsForStorage()
      : firstCodeableConcept;
  }
}

modelTypeRegistry.register('ProductShelfLife', ProductShelfLife, false);
