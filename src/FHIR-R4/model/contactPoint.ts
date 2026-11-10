/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { Element } from './element';
import { Period } from './period';

/**
 * Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.
 */
export class ContactPoint extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'system',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'system', typeCode: 'code', allowedCodes: valueSetCodes.ContactPointSystem },
      ],
    },
    {
      elementName: 'value',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'value', typeCode: 'string' }],
    },
    {
      elementName: 'use',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'use', typeCode: 'code', allowedCodes: valueSetCodes.ContactPointUse }],
    },
    {
      elementName: 'rank',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'rank', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
  ];

  /** phone | fax | email | pager | url | sms | other (0..1) */
  system?: valueSetCodes.ContactPointSystem;
  /** Id and extensions of the primitive `system`. */
  _system?: Element;

  /** The actual contact point details (0..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;

  /** home | work | temp | old | mobile - purpose of this contact point (0..1) */
  use?: valueSetCodes.ContactPointUse;
  /** Id and extensions of the primitive `use`. */
  _use?: Element;

  /** Specify preferred order of use (1 = highest) (0..1) */
  rank?: number;
  /** Id and extensions of the primitive `rank`. */
  _rank?: Element;

  /** Time period when the contact point was/is in use (0..1) */
  period?: Period;

  override fhirType(): string {
    return 'ContactPoint';
  }

  /** FHIR JSON for this ContactPoint, typed as the plain `ContactPoint` data type. */
  override toJSON(): plainTypes.ContactPoint {
    return this.serialize() as plainTypes.ContactPoint;
  }

  /** phone | fax | email | pager | url | sms | other (0..1) */
  getSystem(): valueSetCodes.ContactPointSystem | undefined {
    return this.system;
  }

  /** Sets `system`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setSystem(system: valueSetCodes.ContactPointSystem | undefined): this {
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

  /** The actual contact point details (0..1) */
  getValue(): string | undefined {
    return this.value;
  }

  /** Sets `value`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setValue(value: string | undefined): this {
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

  /** home | work | temp | old | mobile - purpose of this contact point (0..1) */
  getUse(): valueSetCodes.ContactPointUse | undefined {
    return this.use;
  }

  /** Sets `use`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setUse(use: valueSetCodes.ContactPointUse | undefined): this {
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

  /** Specify preferred order of use (1 = highest) (0..1) */
  getRank(): number | undefined {
    return this.rank;
  }

  /** Sets `rank`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setRank(rank: number | undefined): this {
    return this.setFieldValue('rank', rank);
  }

  hasRank(): boolean {
    return this.hasFieldValue('rank');
  }

  /** The element carrying the id and extensions of `rank`. Created when absent. */
  getRankElement(): Element {
    if (this._rank === undefined) {
      this._rank = new Element();
    }
    return this._rank;
  }

  setRankElement(rankElement: Element | undefined): this {
    this._rank = rankElement;
    return this;
  }

  /** Time period when the contact point was/is in use (0..1) Created when absent. */
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

modelTypeRegistry.register('ContactPoint', ContactPoint, false);
