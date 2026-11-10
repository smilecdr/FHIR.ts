/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../classes/models-r4';
import { Element } from './element';

/**
 * An amount of economic utility in some recognized currency.
 */
export class Money extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'value',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'value', typeCode: 'decimal' }],
    },
    {
      elementName: 'currency',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'currency', typeCode: 'code' }],
    },
  ];

  /** Numerical value (with implicit precision) (0..1) */
  value?: number;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;

  /** ISO 4217 Currency Code (0..1) */
  currency?: string;
  /** Id and extensions of the primitive `currency`. */
  _currency?: Element;

  override fhirType(): string {
    return 'Money';
  }

  /** FHIR JSON for this Money, typed as the plain `Money` data type. */
  override toJSON(): plainTypes.Money {
    return this.serialize() as plainTypes.Money;
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

  /** ISO 4217 Currency Code (0..1) */
  getCurrency(): string | undefined {
    return this.currency;
  }

  /** Sets `currency`. Throws a FhirModelError when the value is not a valid FHIR code. */
  setCurrency(currency: string | undefined): this {
    return this.setFieldValue('currency', currency);
  }

  hasCurrency(): boolean {
    return this.hasFieldValue('currency');
  }

  /** The element carrying the id and extensions of `currency`. Created when absent. */
  getCurrencyElement(): Element {
    if (this._currency === undefined) {
      this._currency = new Element();
    }
    return this._currency;
  }

  setCurrencyElement(currencyElement: Element | undefined): this {
    this._currency = currencyElement;
    return this;
  }
}

modelTypeRegistry.register('Money', Money, false);
