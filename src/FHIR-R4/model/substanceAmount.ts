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
import { Quantity } from './quantity';
import { Range } from './range';

/**
 * Chemical substances are a single substance type whose primary defining element is the molecular structure. Chemical substances shall be defined on the basis of their complete covalent molecular structure; the presence of a salt (counter-ion) and/or solvates (water, alcohols) is also captured. Purity, grade, physical form or particle size are not taken into account in the definition of a chemical substance or in the assignment of a Substance ID.
 */
export class SubstanceAmount extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'amount',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'amountQuantity', typeCode: 'Quantity' },
        { jsonKey: 'amountRange', typeCode: 'Range' },
        { jsonKey: 'amountString', typeCode: 'string' },
      ],
    },
    {
      elementName: 'amountType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'amountType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'amountText',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'amountText', typeCode: 'string' }],
    },
    {
      elementName: 'referenceRange',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'referenceRange', typeCode: 'SubstanceAmountReferenceRange' }],
    },
  ];

  /** Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field (0..1) */
  amountQuantity?: Quantity;
  /** Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field (0..1) */
  amountRange?: Range;
  /** Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field (0..1) */
  amountString?: string;
  /** Id and extensions of the primitive `amountString`. */
  _amountString?: Element;

  /** Most elements that require a quantitative value will also have a field called amount type. Amount type should always be specified because the actual value of the amount is often dependent on it. EXAMPLE: In capturing the actual relative amounts of substances or molecular fragments it is essential to indicate whether the amount refers to a mole ratio or weight ratio. For any given element an effort should be made to use same the amount type for all related definitional elements (0..1) */
  amountType?: CodeableConcept;

  /** A textual comment on a numeric value (0..1) */
  amountText?: string;
  /** Id and extensions of the primitive `amountText`. */
  _amountText?: Element;

  /** Reference range of possible or expected values (0..1) */
  referenceRange?: SubstanceAmountReferenceRange;

  override fhirType(): string {
    return 'SubstanceAmount';
  }

  /** FHIR JSON for this SubstanceAmount, typed as the plain `SubstanceAmount` data type. */
  override toJSON(): plainTypes.SubstanceAmount {
    return this.serialize() as plainTypes.SubstanceAmount;
  }

  /** Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field (0..1) Whichever type of `amount[x]` is set. */
  getAmount(): Quantity | Range | string | undefined {
    return this.getChoiceValue<Quantity | Range | string>('amount');
  }

  /** True when any type of `amount[x]` is set. */
  hasAmount(): boolean {
    return this.hasChoiceValue('amount');
  }

  getAmountQuantity(): Quantity | undefined {
    return this.amountQuantity;
  }

  /** Sets `amount[x]` as Quantity and clears every other type of it. */
  setAmountQuantity(amountQuantity: Quantity | undefined): this {
    return this.setFieldValue('amountQuantity', amountQuantity);
  }

  hasAmountQuantity(): boolean {
    return this.hasFieldValue('amountQuantity');
  }

  getAmountRange(): Range | undefined {
    return this.amountRange;
  }

  /** Sets `amount[x]` as Range and clears every other type of it. */
  setAmountRange(amountRange: Range | undefined): this {
    return this.setFieldValue('amountRange', amountRange);
  }

  hasAmountRange(): boolean {
    return this.hasFieldValue('amountRange');
  }

  getAmountString(): string | undefined {
    return this.amountString;
  }

  /** Sets `amount[x]` as string and clears every other type of it. */
  setAmountString(amountString: string | undefined): this {
    return this.setFieldValue('amountString', amountString);
  }

  hasAmountString(): boolean {
    return this.hasFieldValue('amountString');
  }

  /** Most elements that require a quantitative value will also have a field called amount type. Amount type should always be specified because the actual value of the amount is often dependent on it. EXAMPLE: In capturing the actual relative amounts of substances or molecular fragments it is essential to indicate whether the amount refers to a mole ratio or weight ratio. For any given element an effort should be made to use same the amount type for all related definitional elements (0..1) Created when absent. */
  getAmountType(): CodeableConcept {
    if (this.amountType === undefined) {
      this.amountType = new CodeableConcept();
    }
    return this.amountType;
  }

  setAmountType(amountType: CodeableConcept | undefined): this {
    return this.setFieldValue('amountType', amountType);
  }

  hasAmountType(): boolean {
    return this.hasFieldValue('amountType');
  }

  /** A textual comment on a numeric value (0..1) */
  getAmountText(): string | undefined {
    return this.amountText;
  }

  /** Sets `amountText`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setAmountText(amountText: string | undefined): this {
    return this.setFieldValue('amountText', amountText);
  }

  hasAmountText(): boolean {
    return this.hasFieldValue('amountText');
  }

  /** The element carrying the id and extensions of `amountText`. Created when absent. */
  getAmountTextElement(): Element {
    if (this._amountText === undefined) {
      this._amountText = new Element();
    }
    return this._amountText;
  }

  setAmountTextElement(amountTextElement: Element | undefined): this {
    this._amountText = amountTextElement;
    return this;
  }

  /** Reference range of possible or expected values (0..1) Created when absent. */
  getReferenceRange(): SubstanceAmountReferenceRange {
    if (this.referenceRange === undefined) {
      this.referenceRange = new SubstanceAmountReferenceRange();
    }
    return this.referenceRange;
  }

  setReferenceRange(referenceRange: SubstanceAmountReferenceRange | undefined): this {
    return this.setFieldValue('referenceRange', referenceRange);
  }

  hasReferenceRange(): boolean {
    return this.hasFieldValue('referenceRange');
  }
}

modelTypeRegistry.register('SubstanceAmount', SubstanceAmount, false);

/**
 * Reference range of possible or expected values
 */
export class SubstanceAmountReferenceRange extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'lowLimit',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'lowLimit', typeCode: 'Quantity' }],
    },
    {
      elementName: 'highLimit',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'highLimit', typeCode: 'Quantity' }],
    },
  ];

  /** Lower limit possible or expected (0..1) */
  lowLimit?: Quantity;

  /** Upper limit possible or expected (0..1) */
  highLimit?: Quantity;

  override fhirType(): string {
    return 'SubstanceAmount.referenceRange';
  }

  /** FHIR JSON for this SubstanceAmountReferenceRange, typed as the plain `SubstanceAmountReferenceRange` data type. */
  override toJSON(): plainTypes.SubstanceAmountReferenceRange {
    return this.serialize() as plainTypes.SubstanceAmountReferenceRange;
  }

  /** Lower limit possible or expected (0..1) Created when absent. */
  getLowLimit(): Quantity {
    if (this.lowLimit === undefined) {
      this.lowLimit = new Quantity();
    }
    return this.lowLimit;
  }

  setLowLimit(lowLimit: Quantity | undefined): this {
    return this.setFieldValue('lowLimit', lowLimit);
  }

  hasLowLimit(): boolean {
    return this.hasFieldValue('lowLimit');
  }

  /** Upper limit possible or expected (0..1) Created when absent. */
  getHighLimit(): Quantity {
    if (this.highLimit === undefined) {
      this.highLimit = new Quantity();
    }
    return this.highLimit;
  }

  setHighLimit(highLimit: Quantity | undefined): this {
    return this.setFieldValue('highLimit', highLimit);
  }

  hasHighLimit(): boolean {
    return this.hasFieldValue('highLimit');
  }
}

modelTypeRegistry.register('SubstanceAmountReferenceRange', SubstanceAmountReferenceRange, false);
