/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { DataType } from './dataType';
import { Element } from './element';
import { Period } from './period';

/**
 * Address Type: An address expressed using postal conventions (as opposed to GPS or other location definition formats). This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery. There are a variety of postal address formats defined around the world. The ISO21090-codedString may be used to provide a coded representation of the contents of strings in an Address.
 */
export class Address extends DataType {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'use',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'use', typeCode: 'code', allowedCodes: valueSetCodes.AddressUse }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.AddressType }],
    },
    {
      elementName: 'text',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'text', typeCode: 'string' }],
    },
    {
      elementName: 'line',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'line', typeCode: 'string' }],
    },
    {
      elementName: 'city',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'city', typeCode: 'string' }],
    },
    {
      elementName: 'district',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'district', typeCode: 'string' }],
    },
    {
      elementName: 'state',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'state', typeCode: 'string' }],
    },
    {
      elementName: 'postalCode',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'postalCode', typeCode: 'string' }],
    },
    {
      elementName: 'country',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'country', typeCode: 'string' }],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
  ];

  /** home | work | temp | old | billing - purpose of this address (0..1) */
  use?: valueSetCodes.AddressUse;
  /** Id and extensions of the primitive `use`. */
  _use?: Element;

  /** postal | physical | both (0..1) */
  type?: valueSetCodes.AddressType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Text representation of the address (0..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;

  /** Street name, number, direction & P.O. Box etc. (0..*) */
  line?: string[];
  /** Id and extensions of the primitive `line`. */
  _line?: (Element | null)[];

  /** Name of city, town etc. (0..1) */
  city?: string;
  /** Id and extensions of the primitive `city`. */
  _city?: Element;

  /** District name (aka county) (0..1) */
  district?: string;
  /** Id and extensions of the primitive `district`. */
  _district?: Element;

  /** Sub-unit of country (abbreviations ok) (0..1) */
  state?: string;
  /** Id and extensions of the primitive `state`. */
  _state?: Element;

  /** Postal code for area (0..1) */
  postalCode?: string;
  /** Id and extensions of the primitive `postalCode`. */
  _postalCode?: Element;

  /** Country (e.g. may be ISO 3166 2 or 3 letter code) (0..1) */
  country?: string;
  /** Id and extensions of the primitive `country`. */
  _country?: Element;

  /** Time period when address was/is in use (0..1) */
  period?: Period;

  override fhirType(): string {
    return 'Address';
  }

  /** FHIR JSON for this Address, typed as the plain `Address` data type. */
  override toJSON(): plainTypes.Address {
    return this.serialize() as plainTypes.Address;
  }

  /** home | work | temp | old | billing - purpose of this address (0..1) */
  getUse(): valueSetCodes.AddressUse | undefined {
    return this.use;
  }

  /** Sets `use`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setUse(use: valueSetCodes.AddressUse | undefined): this {
    return this.setFieldValue('use', use);
  }

  hasUse(): boolean {
    return this.hasFieldValue('use');
  }

  /** The element carrying the id and extensions of `use`. Created when absent. */
  getUseElement(): Element {
    if (this._use === undefined) {
      this._use = new Element();
    }
    return this._use;
  }

  setUseElement(useElement: Element | undefined): this {
    this._use = useElement;
    return this;
  }

  /** postal | physical | both (0..1) */
  getType(): valueSetCodes.AddressType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.AddressType | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** The element carrying the id and extensions of `type`. Created when absent. */
  getTypeElement(): Element {
    if (this._type === undefined) {
      this._type = new Element();
    }
    return this._type;
  }

  setTypeElement(typeElement: Element | undefined): this {
    this._type = typeElement;
    return this;
  }

  /** Text representation of the address (0..1) */
  getText(): string | undefined {
    return this.text;
  }

  /** Sets `text`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setText(text: string | undefined): this {
    return this.setFieldValue('text', text);
  }

  hasText(): boolean {
    return this.hasFieldValue('text');
  }

  /** The element carrying the id and extensions of `text`. Created when absent. */
  getTextElement(): Element {
    if (this._text === undefined) {
      this._text = new Element();
    }
    return this._text;
  }

  setTextElement(textElement: Element | undefined): this {
    this._text = textElement;
    return this;
  }

  /** Street name, number, direction & P.O. Box etc. (0..*) Never undefined; an empty list is created when absent. */
  getLine(): string[] {
    if (this.line === undefined) {
      this.line = [];
    }
    return this.line;
  }

  setLine(line: string[] | undefined): this {
    return this.setFieldValue('line', line);
  }

  hasLine(): boolean {
    return this.hasFieldValue('line');
  }

  /** Appends one value to `line`. Throws a FhirModelError when it is not a valid FHIR string. */
  addLine(line: string): this {
    return this.addFieldValue('line', line);
  }

  /** Name of city, town etc. (0..1) */
  getCity(): string | undefined {
    return this.city;
  }

  /** Sets `city`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setCity(city: string | undefined): this {
    return this.setFieldValue('city', city);
  }

  hasCity(): boolean {
    return this.hasFieldValue('city');
  }

  /** The element carrying the id and extensions of `city`. Created when absent. */
  getCityElement(): Element {
    if (this._city === undefined) {
      this._city = new Element();
    }
    return this._city;
  }

  setCityElement(cityElement: Element | undefined): this {
    this._city = cityElement;
    return this;
  }

  /** District name (aka county) (0..1) */
  getDistrict(): string | undefined {
    return this.district;
  }

  /** Sets `district`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDistrict(district: string | undefined): this {
    return this.setFieldValue('district', district);
  }

  hasDistrict(): boolean {
    return this.hasFieldValue('district');
  }

  /** The element carrying the id and extensions of `district`. Created when absent. */
  getDistrictElement(): Element {
    if (this._district === undefined) {
      this._district = new Element();
    }
    return this._district;
  }

  setDistrictElement(districtElement: Element | undefined): this {
    this._district = districtElement;
    return this;
  }

  /** Sub-unit of country (abbreviations ok) (0..1) */
  getState(): string | undefined {
    return this.state;
  }

  /** Sets `state`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setState(state: string | undefined): this {
    return this.setFieldValue('state', state);
  }

  hasState(): boolean {
    return this.hasFieldValue('state');
  }

  /** The element carrying the id and extensions of `state`. Created when absent. */
  getStateElement(): Element {
    if (this._state === undefined) {
      this._state = new Element();
    }
    return this._state;
  }

  setStateElement(stateElement: Element | undefined): this {
    this._state = stateElement;
    return this;
  }

  /** Postal code for area (0..1) */
  getPostalCode(): string | undefined {
    return this.postalCode;
  }

  /** Sets `postalCode`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPostalCode(postalCode: string | undefined): this {
    return this.setFieldValue('postalCode', postalCode);
  }

  hasPostalCode(): boolean {
    return this.hasFieldValue('postalCode');
  }

  /** The element carrying the id and extensions of `postalCode`. Created when absent. */
  getPostalCodeElement(): Element {
    if (this._postalCode === undefined) {
      this._postalCode = new Element();
    }
    return this._postalCode;
  }

  setPostalCodeElement(postalCodeElement: Element | undefined): this {
    this._postalCode = postalCodeElement;
    return this;
  }

  /** Country (e.g. may be ISO 3166 2 or 3 letter code) (0..1) */
  getCountry(): string | undefined {
    return this.country;
  }

  /** Sets `country`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setCountry(country: string | undefined): this {
    return this.setFieldValue('country', country);
  }

  hasCountry(): boolean {
    return this.hasFieldValue('country');
  }

  /** The element carrying the id and extensions of `country`. Created when absent. */
  getCountryElement(): Element {
    if (this._country === undefined) {
      this._country = new Element();
    }
    return this._country;
  }

  setCountryElement(countryElement: Element | undefined): this {
    this._country = countryElement;
    return this;
  }

  /** Time period when address was/is in use (0..1) Created when absent. */
  getPeriod(): Period {
    if (this.period === undefined) {
      this.period = new Period();
    }
    return this.period;
  }

  setPeriod(period: Period | undefined): this {
    return this.setFieldValue('period', period);
  }

  hasPeriod(): boolean {
    return this.hasFieldValue('period');
  }
}

modelTypeRegistry.register('Address', Address, false);
