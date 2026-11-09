/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import { DataType } from './dataType';
import { Element } from './element';

/**
 * Quantity Type: A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.
 */
export class Quantity extends DataType {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'value',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'value', typeCode: 'decimal' }],
    },
    {
      elementName: 'comparator',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'comparator', typeCode: 'code', allowedCodes: valueSetCodes.QuantityComparator },
      ],
    },
    {
      elementName: 'unit',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'unit', typeCode: 'string' }],
    },
    {
      elementName: 'system',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'system', typeCode: 'uri' }],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'code' }],
    },
  ];

  /** Numerical value (with implicit precision) (0..1) */
  value?: number;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;

  /** < | <= | >= | > | ad - how to understand the value (0..1) */
  comparator?: valueSetCodes.QuantityComparator;
  /** Id and extensions of the primitive `comparator`. */
  _comparator?: Element;

  /** Unit representation (0..1) */
  unit?: string;
  /** Id and extensions of the primitive `unit`. */
  _unit?: Element;

  /** System that defines coded unit form (0..1) */
  system?: string;
  /** Id and extensions of the primitive `system`. */
  _system?: Element;

  /** Coded form of the unit (0..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;

  override fhirType(): string {
    return 'Quantity';
  }

  /** Numerical value (with implicit precision) (0..1) */
  getValue(): number | undefined {
    return this.value;
  }

  /** Sets `value`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setValue(value: number | undefined): this {
    return this.setFieldValue('value', value);
  }

  hasValue(): boolean {
    return this.hasFieldValue('value');
  }

  /** The element carrying the id and extensions of `value`. Created when absent. */
  getValueElement(): Element {
    if (this._value === undefined) {
      this._value = new Element();
    }
    return this._value;
  }

  setValueElement(valueElement: Element | undefined): this {
    this._value = valueElement;
    return this;
  }

  /** < | <= | >= | > | ad - how to understand the value (0..1) */
  getComparator(): valueSetCodes.QuantityComparator | undefined {
    return this.comparator;
  }

  /** Sets `comparator`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setComparator(comparator: valueSetCodes.QuantityComparator | undefined): this {
    return this.setFieldValue('comparator', comparator);
  }

  hasComparator(): boolean {
    return this.hasFieldValue('comparator');
  }

  /** The element carrying the id and extensions of `comparator`. Created when absent. */
  getComparatorElement(): Element {
    if (this._comparator === undefined) {
      this._comparator = new Element();
    }
    return this._comparator;
  }

  setComparatorElement(comparatorElement: Element | undefined): this {
    this._comparator = comparatorElement;
    return this;
  }

  /** Unit representation (0..1) */
  getUnit(): string | undefined {
    return this.unit;
  }

  /** Sets `unit`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setUnit(unit: string | undefined): this {
    return this.setFieldValue('unit', unit);
  }

  hasUnit(): boolean {
    return this.hasFieldValue('unit');
  }

  /** The element carrying the id and extensions of `unit`. Created when absent. */
  getUnitElement(): Element {
    if (this._unit === undefined) {
      this._unit = new Element();
    }
    return this._unit;
  }

  setUnitElement(unitElement: Element | undefined): this {
    this._unit = unitElement;
    return this;
  }

  /** System that defines coded unit form (0..1) */
  getSystem(): string | undefined {
    return this.system;
  }

  /** Sets `system`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setSystem(system: string | undefined): this {
    return this.setFieldValue('system', system);
  }

  hasSystem(): boolean {
    return this.hasFieldValue('system');
  }

  /** The element carrying the id and extensions of `system`. Created when absent. */
  getSystemElement(): Element {
    if (this._system === undefined) {
      this._system = new Element();
    }
    return this._system;
  }

  setSystemElement(systemElement: Element | undefined): this {
    this._system = systemElement;
    return this;
  }

  /** Coded form of the unit (0..1) */
  getCode(): string | undefined {
    return this.code;
  }

  /** Sets `code`. Throws a FhirModelError when the value is not a valid FHIR code. */
  setCode(code: string | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** The element carrying the id and extensions of `code`. Created when absent. */
  getCodeElement(): Element {
    if (this._code === undefined) {
      this._code = new Element();
    }
    return this._code;
  }

  setCodeElement(codeElement: Element | undefined): this {
    this._code = codeElement;
    return this;
  }
}

modelTypeRegistry.register('Quantity', Quantity, false);
