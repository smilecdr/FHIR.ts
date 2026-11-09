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
import { Ratio } from './ratio';
import { Timing } from './timing';

/**
 * Indicates how the medication is/was taken or should be taken by the patient.
 */
export class Dosage extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'sequence',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sequence', typeCode: 'integer' }],
    },
    {
      elementName: 'text',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'text', typeCode: 'string' }],
    },
    {
      elementName: 'additionalInstruction',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'additionalInstruction', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'patientInstruction',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'patientInstruction', typeCode: 'string' }],
    },
    {
      elementName: 'timing',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'timing', typeCode: 'Timing' }],
    },
    {
      elementName: 'asNeeded',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'asNeededBoolean', typeCode: 'boolean' },
        { jsonKey: 'asNeededCodeableConcept', typeCode: 'CodeableConcept' },
      ],
    },
    {
      elementName: 'site',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'site', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'route',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'route', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'method',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'method', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'doseAndRate',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'doseAndRate', typeCode: 'DosageDoseAndRate' }],
    },
    {
      elementName: 'maxDosePerPeriod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'maxDosePerPeriod', typeCode: 'Ratio' }],
    },
    {
      elementName: 'maxDosePerAdministration',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'maxDosePerAdministration', typeCode: 'Quantity' }],
    },
    {
      elementName: 'maxDosePerLifetime',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'maxDosePerLifetime', typeCode: 'Quantity' }],
    },
  ];

  /** The order of the dosage instructions (0..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;

  /** Free text dosage instructions e.g. SIG (0..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;

  /** Supplemental instruction or warnings to the patient - e.g. "with meals", "may cause drowsiness" (0..*) */
  additionalInstruction?: CodeableConcept[];

  /** Patient or consumer oriented instructions (0..1) */
  patientInstruction?: string;
  /** Id and extensions of the primitive `patientInstruction`. */
  _patientInstruction?: Element;

  /** When medication should be administered (0..1) */
  timing?: Timing;

  /** Take "as needed" (for x) (0..1) */
  asNeededBoolean?: boolean;
  /** Id and extensions of the primitive `asNeededBoolean`. */
  _asNeededBoolean?: Element;
  /** Take "as needed" (for x) (0..1) */
  asNeededCodeableConcept?: CodeableConcept;

  /** Body site to administer to (0..1) */
  site?: CodeableConcept;

  /** How drug should enter body (0..1) */
  route?: CodeableConcept;

  /** Technique for administering medication (0..1) */
  method?: CodeableConcept;

  /** Amount of medication administered (0..*) */
  doseAndRate?: DosageDoseAndRate[];

  /** Upper limit on medication per unit of time (0..1) */
  maxDosePerPeriod?: Ratio;

  /** Upper limit on medication per administration (0..1) */
  maxDosePerAdministration?: Quantity;

  /** Upper limit on medication per lifetime of the patient (0..1) */
  maxDosePerLifetime?: Quantity;

  override fhirType(): string {
    return 'Dosage';
  }

  /** FHIR JSON for this Dosage, typed as the plain `Dosage` data type. */
  override toJSON(): plainTypes.Dosage {
    return this.serialize() as plainTypes.Dosage;
  }

  /** The order of the dosage instructions (0..1) */
  getSequence(): number | undefined {
    return this.sequence;
  }

  /** Sets `sequence`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setSequence(sequence: number | undefined): this {
    return this.setFieldValue('sequence', sequence);
  }

  hasSequence(): boolean {
    return this.hasFieldValue('sequence');
  }

  /** The element carrying the id and extensions of `sequence`. Created when absent. */
  getSequenceElement(): Element {
    if (this._sequence === undefined) {
      this._sequence = new Element();
    }
    return this._sequence;
  }

  setSequenceElement(sequenceElement: Element | undefined): this {
    this._sequence = sequenceElement;
    return this;
  }

  /** Free text dosage instructions e.g. SIG (0..1) */
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

  /** Supplemental instruction or warnings to the patient - e.g. "with meals", "may cause drowsiness" (0..*) Never undefined; an empty list is created when absent. */
  getAdditionalInstruction(): CodeableConcept[] {
    if (this.additionalInstruction === undefined) {
      this.additionalInstruction = [];
    }
    return this.additionalInstruction;
  }

  setAdditionalInstruction(additionalInstruction: CodeableConcept[] | undefined): this {
    return this.setFieldValue('additionalInstruction', additionalInstruction);
  }

  hasAdditionalInstruction(): boolean {
    return this.hasFieldValue('additionalInstruction');
  }

  /** Appends a new, empty CodeableConcept to `additionalInstruction` and returns it so it can be filled in. */
  addAdditionalInstruction(): CodeableConcept;
  /** Appends the given CodeableConcept to `additionalInstruction` and returns this object for chaining. */
  addAdditionalInstruction(codeableConcept: CodeableConcept): this;
  addAdditionalInstruction(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('additionalInstruction', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('additionalInstruction', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `additionalInstruction`. One is added when the list is empty. */
  getAdditionalInstructionFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getAdditionalInstruction()[0];
    return firstCodeableConcept === undefined
      ? this.addAdditionalInstruction()
      : firstCodeableConcept;
  }

  /** Patient or consumer oriented instructions (0..1) */
  getPatientInstruction(): string | undefined {
    return this.patientInstruction;
  }

  /** Sets `patientInstruction`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPatientInstruction(patientInstruction: string | undefined): this {
    return this.setFieldValue('patientInstruction', patientInstruction);
  }

  hasPatientInstruction(): boolean {
    return this.hasFieldValue('patientInstruction');
  }

  /** The element carrying the id and extensions of `patientInstruction`. Created when absent. */
  getPatientInstructionElement(): Element {
    if (this._patientInstruction === undefined) {
      this._patientInstruction = new Element();
    }
    return this._patientInstruction;
  }

  setPatientInstructionElement(patientInstructionElement: Element | undefined): this {
    this._patientInstruction = patientInstructionElement;
    return this;
  }

  /** When medication should be administered (0..1) Created when absent. */
  getTiming(): Timing {
    if (this.timing === undefined) {
      this.timing = new Timing();
    }
    return this.timing;
  }

  setTiming(timing: Timing | undefined): this {
    return this.setFieldValue('timing', timing);
  }

  hasTiming(): boolean {
    return this.hasFieldValue('timing');
  }

  /** Take "as needed" (for x) (0..1) Whichever type of `asNeeded[x]` is set. */
  getAsNeeded(): boolean | CodeableConcept | undefined {
    return this.getChoiceValue<boolean | CodeableConcept>('asNeeded');
  }

  /** True when any type of `asNeeded[x]` is set. */
  hasAsNeeded(): boolean {
    return this.hasChoiceValue('asNeeded');
  }

  getAsNeededBoolean(): boolean | undefined {
    return this.asNeededBoolean;
  }

  /** Sets `asNeeded[x]` as boolean and clears every other type of it. */
  setAsNeededBoolean(asNeededBoolean: boolean | undefined): this {
    return this.setFieldValue('asNeededBoolean', asNeededBoolean);
  }

  hasAsNeededBoolean(): boolean {
    return this.hasFieldValue('asNeededBoolean');
  }

  getAsNeededCodeableConcept(): CodeableConcept | undefined {
    return this.asNeededCodeableConcept;
  }

  /** Sets `asNeeded[x]` as CodeableConcept and clears every other type of it. */
  setAsNeededCodeableConcept(asNeededCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('asNeededCodeableConcept', asNeededCodeableConcept);
  }

  hasAsNeededCodeableConcept(): boolean {
    return this.hasFieldValue('asNeededCodeableConcept');
  }

  /** Body site to administer to (0..1) Created when absent. */
  getSite(): CodeableConcept {
    if (this.site === undefined) {
      this.site = new CodeableConcept();
    }
    return this.site;
  }

  setSite(site: CodeableConcept | undefined): this {
    return this.setFieldValue('site', site);
  }

  hasSite(): boolean {
    return this.hasFieldValue('site');
  }

  /** How drug should enter body (0..1) Created when absent. */
  getRoute(): CodeableConcept {
    if (this.route === undefined) {
      this.route = new CodeableConcept();
    }
    return this.route;
  }

  setRoute(route: CodeableConcept | undefined): this {
    return this.setFieldValue('route', route);
  }

  hasRoute(): boolean {
    return this.hasFieldValue('route');
  }

  /** Technique for administering medication (0..1) Created when absent. */
  getMethod(): CodeableConcept {
    if (this.method === undefined) {
      this.method = new CodeableConcept();
    }
    return this.method;
  }

  setMethod(method: CodeableConcept | undefined): this {
    return this.setFieldValue('method', method);
  }

  hasMethod(): boolean {
    return this.hasFieldValue('method');
  }

  /** Amount of medication administered (0..*) Never undefined; an empty list is created when absent. */
  getDoseAndRate(): DosageDoseAndRate[] {
    if (this.doseAndRate === undefined) {
      this.doseAndRate = [];
    }
    return this.doseAndRate;
  }

  setDoseAndRate(doseAndRate: DosageDoseAndRate[] | undefined): this {
    return this.setFieldValue('doseAndRate', doseAndRate);
  }

  hasDoseAndRate(): boolean {
    return this.hasFieldValue('doseAndRate');
  }

  /** Appends a new, empty DosageDoseAndRate to `doseAndRate` and returns it so it can be filled in. */
  addDoseAndRate(): DosageDoseAndRate;
  /** Appends the given DosageDoseAndRate to `doseAndRate` and returns this object for chaining. */
  addDoseAndRate(dosageDoseAndRate: DosageDoseAndRate): this;
  addDoseAndRate(dosageDoseAndRate?: DosageDoseAndRate): DosageDoseAndRate | this {
    if (dosageDoseAndRate !== undefined) {
      return this.addFieldValue('doseAndRate', dosageDoseAndRate);
    }
    const createdDosageDoseAndRate = new DosageDoseAndRate();
    this.addFieldValue('doseAndRate', createdDosageDoseAndRate);
    return createdDosageDoseAndRate;
  }

  /** The first DosageDoseAndRate of `doseAndRate`. One is added when the list is empty. */
  getDoseAndRateFirstRep(): DosageDoseAndRate {
    const firstDosageDoseAndRate = this.getDoseAndRate()[0];
    return firstDosageDoseAndRate === undefined ? this.addDoseAndRate() : firstDosageDoseAndRate;
  }

  /** Upper limit on medication per unit of time (0..1) Created when absent. */
  getMaxDosePerPeriod(): Ratio {
    if (this.maxDosePerPeriod === undefined) {
      this.maxDosePerPeriod = new Ratio();
    }
    return this.maxDosePerPeriod;
  }

  setMaxDosePerPeriod(maxDosePerPeriod: Ratio | undefined): this {
    return this.setFieldValue('maxDosePerPeriod', maxDosePerPeriod);
  }

  hasMaxDosePerPeriod(): boolean {
    return this.hasFieldValue('maxDosePerPeriod');
  }

  /** Upper limit on medication per administration (0..1) Created when absent. */
  getMaxDosePerAdministration(): Quantity {
    if (this.maxDosePerAdministration === undefined) {
      this.maxDosePerAdministration = new Quantity();
    }
    return this.maxDosePerAdministration;
  }

  setMaxDosePerAdministration(maxDosePerAdministration: Quantity | undefined): this {
    return this.setFieldValue('maxDosePerAdministration', maxDosePerAdministration);
  }

  hasMaxDosePerAdministration(): boolean {
    return this.hasFieldValue('maxDosePerAdministration');
  }

  /** Upper limit on medication per lifetime of the patient (0..1) Created when absent. */
  getMaxDosePerLifetime(): Quantity {
    if (this.maxDosePerLifetime === undefined) {
      this.maxDosePerLifetime = new Quantity();
    }
    return this.maxDosePerLifetime;
  }

  setMaxDosePerLifetime(maxDosePerLifetime: Quantity | undefined): this {
    return this.setFieldValue('maxDosePerLifetime', maxDosePerLifetime);
  }

  hasMaxDosePerLifetime(): boolean {
    return this.hasFieldValue('maxDosePerLifetime');
  }
}

modelTypeRegistry.register('Dosage', Dosage, false);

/**
 * Amount of medication administered
 */
export class DosageDoseAndRate extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'dose',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'doseRange', typeCode: 'Range' },
        { jsonKey: 'doseQuantity', typeCode: 'Quantity' },
      ],
    },
    {
      elementName: 'rate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'rateRatio', typeCode: 'Ratio' },
        { jsonKey: 'rateRange', typeCode: 'Range' },
        { jsonKey: 'rateQuantity', typeCode: 'Quantity' },
      ],
    },
  ];

  /** The kind of dose or rate specified (0..1) */
  type?: CodeableConcept;

  /** Amount of medication per dose (0..1) */
  doseRange?: Range;
  /** Amount of medication per dose (0..1) */
  doseQuantity?: Quantity;

  /** Amount of medication per unit of time (0..1) */
  rateRatio?: Ratio;
  /** Amount of medication per unit of time (0..1) */
  rateRange?: Range;
  /** Amount of medication per unit of time (0..1) */
  rateQuantity?: Quantity;

  override fhirType(): string {
    return 'Dosage.doseAndRate';
  }

  /** FHIR JSON for this DosageDoseAndRate, typed as the plain `DosageDoseAndRate` data type. */
  override toJSON(): plainTypes.DosageDoseAndRate {
    return this.serialize() as plainTypes.DosageDoseAndRate;
  }

  /** The kind of dose or rate specified (0..1) Created when absent. */
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

  /** Amount of medication per dose (0..1) Whichever type of `dose[x]` is set. */
  getDose(): Range | Quantity | undefined {
    return this.getChoiceValue<Range | Quantity>('dose');
  }

  /** True when any type of `dose[x]` is set. */
  hasDose(): boolean {
    return this.hasChoiceValue('dose');
  }

  getDoseRange(): Range | undefined {
    return this.doseRange;
  }

  /** Sets `dose[x]` as Range and clears every other type of it. */
  setDoseRange(doseRange: Range | undefined): this {
    return this.setFieldValue('doseRange', doseRange);
  }

  hasDoseRange(): boolean {
    return this.hasFieldValue('doseRange');
  }

  getDoseQuantity(): Quantity | undefined {
    return this.doseQuantity;
  }

  /** Sets `dose[x]` as Quantity and clears every other type of it. */
  setDoseQuantity(doseQuantity: Quantity | undefined): this {
    return this.setFieldValue('doseQuantity', doseQuantity);
  }

  hasDoseQuantity(): boolean {
    return this.hasFieldValue('doseQuantity');
  }

  /** Amount of medication per unit of time (0..1) Whichever type of `rate[x]` is set. */
  getRate(): Ratio | Range | Quantity | undefined {
    return this.getChoiceValue<Ratio | Range | Quantity>('rate');
  }

  /** True when any type of `rate[x]` is set. */
  hasRate(): boolean {
    return this.hasChoiceValue('rate');
  }

  getRateRatio(): Ratio | undefined {
    return this.rateRatio;
  }

  /** Sets `rate[x]` as Ratio and clears every other type of it. */
  setRateRatio(rateRatio: Ratio | undefined): this {
    return this.setFieldValue('rateRatio', rateRatio);
  }

  hasRateRatio(): boolean {
    return this.hasFieldValue('rateRatio');
  }

  getRateRange(): Range | undefined {
    return this.rateRange;
  }

  /** Sets `rate[x]` as Range and clears every other type of it. */
  setRateRange(rateRange: Range | undefined): this {
    return this.setFieldValue('rateRange', rateRange);
  }

  hasRateRange(): boolean {
    return this.hasFieldValue('rateRange');
  }

  getRateQuantity(): Quantity | undefined {
    return this.rateQuantity;
  }

  /** Sets `rate[x]` as Quantity and clears every other type of it. */
  setRateQuantity(rateQuantity: Quantity | undefined): this {
    return this.setFieldValue('rateQuantity', rateQuantity);
  }

  hasRateQuantity(): boolean {
    return this.hasFieldValue('rateQuantity');
  }
}

modelTypeRegistry.register('DosageDoseAndRate', DosageDoseAndRate, false);
