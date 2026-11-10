/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../models';
import { CodeableConcept } from './codeableConcept';
import { Coding } from './coding';
import { DataType } from './dataType';
import { Quantity } from './quantity';
import { Range } from './range';
import { Reference } from './reference';

/**
 * UsageContext Type: Specifies clinical/business/etc. metadata that can be used to retrieve, index and/or categorize an artifact. This metadata can either be specific to the applicable population (e.g., age category, DRG) or the specific context of care (e.g., venue, care setting, provider of care).
 */
export class UsageContext extends DataType {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'Coding' }],
    },
    {
      elementName: 'value',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'valueCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'valueQuantity', typeCode: 'Quantity' },
        { jsonKey: 'valueRange', typeCode: 'Range' },
        {
          jsonKey: 'valueReference',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Group',
            'HealthcareService',
            'InsurancePlan',
            'Location',
            'Organization',
            'PlanDefinition',
            'ResearchStudy',
          ],
        },
      ],
    },
  ];

  /** Type of context being specified (1..1) */
  code?: Coding;

  /** Value that defines the context (1..1) */
  valueCodeableConcept?: CodeableConcept;
  /** Value that defines the context (1..1) */
  valueQuantity?: Quantity;
  /** Value that defines the context (1..1) */
  valueRange?: Range;
  /** Value that defines the context (1..1) */
  valueReference?: Reference;

  override fhirType(): string {
    return 'UsageContext';
  }

  /** FHIR JSON for this UsageContext, typed as the plain `UsageContext` data type. */
  override toJSON(): plainTypes.UsageContext {
    return this.serialize() as plainTypes.UsageContext;
  }

  /** Type of context being specified (1..1) Created when absent. */
  getCode(): Coding {
    if (this.code === undefined) {
      this.code = new Coding();
    }
    return this.code;
  }

  setCode(code: Coding | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** Value that defines the context (1..1) Whichever type of `value[x]` is set. */
  getValue(): CodeableConcept | Quantity | Range | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | Quantity | Range | Reference>('value');
  }

  /** True when any type of `value[x]` is set. */
  hasValue(): boolean {
    return this.hasChoiceValue('value');
  }

  getValueCodeableConcept(): CodeableConcept | undefined {
    return this.valueCodeableConcept;
  }

  /** Sets `value[x]` as CodeableConcept and clears every other type of it. */
  setValueCodeableConcept(valueCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('valueCodeableConcept', valueCodeableConcept);
  }

  hasValueCodeableConcept(): boolean {
    return this.hasFieldValue('valueCodeableConcept');
  }

  getValueQuantity(): Quantity | undefined {
    return this.valueQuantity;
  }

  /** Sets `value[x]` as Quantity and clears every other type of it. */
  setValueQuantity(valueQuantity: Quantity | undefined): this {
    return this.setFieldValue('valueQuantity', valueQuantity);
  }

  hasValueQuantity(): boolean {
    return this.hasFieldValue('valueQuantity');
  }

  getValueRange(): Range | undefined {
    return this.valueRange;
  }

  /** Sets `value[x]` as Range and clears every other type of it. */
  setValueRange(valueRange: Range | undefined): this {
    return this.setFieldValue('valueRange', valueRange);
  }

  hasValueRange(): boolean {
    return this.hasFieldValue('valueRange');
  }

  getValueReference(): Reference | undefined {
    return this.valueReference;
  }

  /** Sets `value[x]` as Reference and clears every other type of it. */
  setValueReference(valueReference: Reference | undefined): this {
    return this.setFieldValue('valueReference', valueReference);
  }

  hasValueReference(): boolean {
    return this.hasFieldValue('valueReference');
  }
}

modelTypeRegistry.register('UsageContext', UsageContext, false);
