/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../classes/models-r4';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { Identifier } from './identifier';
import { Quantity } from './quantity';

/**
 * The shelf-life and storage information for a medicinal product item or container can be described using this class.
 */
export class ProductShelfLife extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'period',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Quantity' }],
    },
    {
      elementName: 'specialPrecautionsForStorage',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'specialPrecautionsForStorage', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Unique identifier for the packaged Medicinal Product (0..1) */
  identifier?: Identifier;

  /** This describes the shelf life, taking into account various scenarios such as shelf life of the packaged Medicinal Product itself, shelf life after transformation where necessary and shelf life after the first opening of a bottle, etc. The shelf life type shall be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified (1..1) */
  type?: CodeableConcept;

  /** The shelf life time period can be specified using a numerical value for the period of time and its unit of time measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used (1..1) */
  period?: Quantity;

  /** Special precautions for storage, if any, can be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified (0..*) */
  specialPrecautionsForStorage?: CodeableConcept[];

  override fhirType(): string {
    return 'ProductShelfLife';
  }

  /** FHIR JSON for this ProductShelfLife, typed as the plain `ProductShelfLife` data type. */
  override toJSON(): plainTypes.ProductShelfLife {
    return this.serialize() as plainTypes.ProductShelfLife;
  }

  /** Unique identifier for the packaged Medicinal Product (0..1) Created when absent. */
  getIdentifier(): Identifier {
    if (this.identifier === undefined) {
      this.identifier = new Identifier();
    }
    return this.identifier;
  }

  setIdentifier(identifier: Identifier | undefined): this {
    return this.setFieldValue('identifier', identifier);
  }

  hasIdentifier(): boolean {
    return this.hasFieldValue('identifier');
  }

  /** This describes the shelf life, taking into account various scenarios such as shelf life of the packaged Medicinal Product itself, shelf life after transformation where necessary and shelf life after the first opening of a bottle, etc. The shelf life type shall be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified (1..1) Created when absent. */
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

  /** The shelf life time period can be specified using a numerical value for the period of time and its unit of time measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used (1..1) Created when absent. */
  getPeriod(): Quantity {
    if (this.period === undefined) {
      this.period = new Quantity();
    }
    return this.period;
  }

  setPeriod(period: Quantity | undefined): this {
    return this.setFieldValue('period', period);
  }

  hasPeriod(): boolean {
    return this.hasFieldValue('period');
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
