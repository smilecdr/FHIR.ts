/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { CodeableConcept } from './codeableConcept';
import { Element } from './element';
import { Period } from './period';
import { Reference } from './reference';

/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export class Identifier extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'use',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'use', typeCode: 'code', allowedCodes: valueSetCodes.IdentifierUse }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'system',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'system', typeCode: 'uri' }],
    },
    {
      elementName: 'value',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'value', typeCode: 'string' }],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
    {
      elementName: 'assigner',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'assigner', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
  ];

  /** usual | official | temp | secondary | old (If known) (0..1) */
  use?: valueSetCodes.IdentifierUse;
  /** Id and extensions of the primitive `use`. */
  _use?: Element;

  /** Description of identifier (0..1) */
  type?: CodeableConcept;

  /** The namespace for the identifier value (0..1) */
  system?: string;
  /** Id and extensions of the primitive `system`. */
  _system?: Element;

  /** The value that is unique (0..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;

  /** Time period when id is/was valid for use (0..1) */
  period?: Period;

  /** Organization that issued id (may be just text) (0..1) */
  assigner?: Reference;

  override fhirType(): string {
    return 'Identifier';
  }

  /** FHIR JSON for this Identifier, typed as the plain `Identifier` data type. */
  override toJSON(): plainTypes.Identifier {
    return this.serialize() as plainTypes.Identifier;
  }

  /** usual | official | temp | secondary | old (If known) (0..1) */
  getUse(): valueSetCodes.IdentifierUse | undefined {
    return this.use;
  }

  /** Sets `use`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setUse(use: valueSetCodes.IdentifierUse | undefined): this {
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

  /** Description of identifier (0..1) Created when absent. */
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

  /** The namespace for the identifier value (0..1) */
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

  /** The value that is unique (0..1) */
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

  /** Time period when id is/was valid for use (0..1) Created when absent. */
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

  /** Organization that issued id (may be just text) (0..1) Created when absent. */
  getAssigner(): Reference {
    if (this.assigner === undefined) {
      this.assigner = new Reference();
    }
    return this.assigner;
  }

  setAssigner(assigner: Reference | undefined): this {
    return this.setFieldValue('assigner', assigner);
  }

  hasAssigner(): boolean {
    return this.hasFieldValue('assigner');
  }
}

modelTypeRegistry.register('Identifier', Identifier, false);
