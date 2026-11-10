/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../classes/models-r4';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Ratio } from './ratio';
import { Reference } from './reference';

/**
 * An ingredient of a manufactured item or pharmaceutical product.
 */
export class MedicinalProductIngredient extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'role',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'role', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'allergenicIndicator',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'allergenicIndicator', typeCode: 'boolean' }],
    },
    {
      elementName: 'manufacturer',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'manufacturer', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
    {
      elementName: 'specifiedSubstance',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'specifiedSubstance', typeCode: 'MedicinalProductIngredientSpecifiedSubstance' },
      ],
    },
    {
      elementName: 'substance',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'substance', typeCode: 'MedicinalProductIngredientSubstance' }],
    },
  ];

  readonly resourceType = 'MedicinalProductIngredient';

  /** Identifier for the ingredient (0..1) */
  identifier?: Identifier;

  /** Ingredient role e.g. Active ingredient, excipient (1..1) */
  role?: CodeableConcept;

  /** If the ingredient is a known or suspected allergen (0..1) */
  allergenicIndicator?: boolean;
  /** Id and extensions of the primitive `allergenicIndicator`. */
  _allergenicIndicator?: Element;

  /** Manufacturer of this Ingredient (0..*) */
  manufacturer?: Reference[];

  /** A specified substance that comprises this ingredient (0..*) */
  specifiedSubstance?: MedicinalProductIngredientSpecifiedSubstance[];

  /** The ingredient substance (0..1) */
  substance?: MedicinalProductIngredientSubstance;

  override fhirType(): string {
    return 'MedicinalProductIngredient';
  }

  /** FHIR JSON for this MedicinalProductIngredient, typed as the plain `MedicinalProductIngredient` data type. */
  override toJSON(): plainTypes.MedicinalProductIngredient {
    return this.serialize() as plainTypes.MedicinalProductIngredient;
  }

  /** Identifier for the ingredient (0..1) Created when absent. */
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

  /** Ingredient role e.g. Active ingredient, excipient (1..1) Created when absent. */
  getRole(): CodeableConcept {
    if (this.role === undefined) {
      this.role = new CodeableConcept();
    }
    return this.role;
  }

  setRole(role: CodeableConcept | undefined): this {
    return this.setFieldValue('role', role);
  }

  hasRole(): boolean {
    return this.hasFieldValue('role');
  }

  /** If the ingredient is a known or suspected allergen (0..1) */
  getAllergenicIndicator(): boolean | undefined {
    return this.allergenicIndicator;
  }

  /** Sets `allergenicIndicator`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setAllergenicIndicator(allergenicIndicator: boolean | undefined): this {
    return this.setFieldValue('allergenicIndicator', allergenicIndicator);
  }

  hasAllergenicIndicator(): boolean {
    return this.hasFieldValue('allergenicIndicator');
  }

  /** The element carrying the id and extensions of `allergenicIndicator`. Created when absent. */
  getAllergenicIndicatorElement(): Element {
    if (this._allergenicIndicator === undefined) {
      this._allergenicIndicator = new Element();
    }
    return this._allergenicIndicator;
  }

  setAllergenicIndicatorElement(allergenicIndicatorElement: Element | undefined): this {
    this._allergenicIndicator = allergenicIndicatorElement;
    return this;
  }

  /** Manufacturer of this Ingredient (0..*) Never undefined; an empty list is created when absent. */
  getManufacturer(): Reference[] {
    if (this.manufacturer === undefined) {
      this.manufacturer = [];
    }
    return this.manufacturer;
  }

  setManufacturer(manufacturer: Reference[] | undefined): this {
    return this.setFieldValue('manufacturer', manufacturer);
  }

  hasManufacturer(): boolean {
    return this.hasFieldValue('manufacturer');
  }

  /** Appends a new, empty Reference to `manufacturer` and returns it so it can be filled in. */
  addManufacturer(): Reference;
  /** Appends the given Reference to `manufacturer` and returns this object for chaining. */
  addManufacturer(reference: Reference): this;
  addManufacturer(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('manufacturer', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('manufacturer', createdReference);
    return createdReference;
  }

  /** The first Reference of `manufacturer`. One is added when the list is empty. */
  getManufacturerFirstRep(): Reference {
    const firstReference = this.getManufacturer()[0];
    return firstReference === undefined ? this.addManufacturer() : firstReference;
  }

  /** A specified substance that comprises this ingredient (0..*) Never undefined; an empty list is created when absent. */
  getSpecifiedSubstance(): MedicinalProductIngredientSpecifiedSubstance[] {
    if (this.specifiedSubstance === undefined) {
      this.specifiedSubstance = [];
    }
    return this.specifiedSubstance;
  }

  setSpecifiedSubstance(
    specifiedSubstance: MedicinalProductIngredientSpecifiedSubstance[] | undefined
  ): this {
    return this.setFieldValue('specifiedSubstance', specifiedSubstance);
  }

  hasSpecifiedSubstance(): boolean {
    return this.hasFieldValue('specifiedSubstance');
  }

  /** Appends a new, empty MedicinalProductIngredientSpecifiedSubstance to `specifiedSubstance` and returns it so it can be filled in. */
  addSpecifiedSubstance(): MedicinalProductIngredientSpecifiedSubstance;
  /** Appends the given MedicinalProductIngredientSpecifiedSubstance to `specifiedSubstance` and returns this object for chaining. */
  addSpecifiedSubstance(
    medicinalProductIngredientSpecifiedSubstance: MedicinalProductIngredientSpecifiedSubstance
  ): this;
  addSpecifiedSubstance(
    medicinalProductIngredientSpecifiedSubstance?: MedicinalProductIngredientSpecifiedSubstance
  ): MedicinalProductIngredientSpecifiedSubstance | this {
    if (medicinalProductIngredientSpecifiedSubstance !== undefined) {
      return this.addFieldValue('specifiedSubstance', medicinalProductIngredientSpecifiedSubstance);
    }
    const createdMedicinalProductIngredientSpecifiedSubstance =
      new MedicinalProductIngredientSpecifiedSubstance();
    this.addFieldValue('specifiedSubstance', createdMedicinalProductIngredientSpecifiedSubstance);
    return createdMedicinalProductIngredientSpecifiedSubstance;
  }

  /** The first MedicinalProductIngredientSpecifiedSubstance of `specifiedSubstance`. One is added when the list is empty. */
  getSpecifiedSubstanceFirstRep(): MedicinalProductIngredientSpecifiedSubstance {
    const firstMedicinalProductIngredientSpecifiedSubstance = this.getSpecifiedSubstance()[0];
    return firstMedicinalProductIngredientSpecifiedSubstance === undefined
      ? this.addSpecifiedSubstance()
      : firstMedicinalProductIngredientSpecifiedSubstance;
  }

  /** The ingredient substance (0..1) Created when absent. */
  getSubstance(): MedicinalProductIngredientSubstance {
    if (this.substance === undefined) {
      this.substance = new MedicinalProductIngredientSubstance();
    }
    return this.substance;
  }

  setSubstance(substance: MedicinalProductIngredientSubstance | undefined): this {
    return this.setFieldValue('substance', substance);
  }

  hasSubstance(): boolean {
    return this.hasFieldValue('substance');
  }
}

modelTypeRegistry.register('MedicinalProductIngredient', MedicinalProductIngredient, true);

/** True when the value is a MedicinalProductIngredient model instance. */
export function isMedicinalProductIngredient(
  candidate: unknown
): candidate is MedicinalProductIngredient {
  return candidate instanceof MedicinalProductIngredient;
}

/**
 * A specified substance that comprises this ingredient
 */
export class MedicinalProductIngredientSpecifiedSubstance extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'group',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'group', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'confidentiality',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'confidentiality', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'strength',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'strength', typeCode: 'MedicinalProductIngredientSpecifiedSubstanceStrength' },
      ],
    },
  ];

  /** The specified substance (1..1) */
  code?: CodeableConcept;

  /** The group of specified substance, e.g. group 1 to 4 (1..1) */
  group?: CodeableConcept;

  /** Confidentiality level of the specified substance as the ingredient (0..1) */
  confidentiality?: CodeableConcept;

  /** Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product (0..*) */
  strength?: MedicinalProductIngredientSpecifiedSubstanceStrength[];

  override fhirType(): string {
    return 'MedicinalProductIngredient.specifiedSubstance';
  }

  /** FHIR JSON for this MedicinalProductIngredientSpecifiedSubstance, typed as the plain `MedicinalProductIngredientSpecifiedSubstance` data type. */
  override toJSON(): plainTypes.MedicinalProductIngredientSpecifiedSubstance {
    return this.serialize() as plainTypes.MedicinalProductIngredientSpecifiedSubstance;
  }

  /** The specified substance (1..1) Created when absent. */
  getCode(): CodeableConcept {
    if (this.code === undefined) {
      this.code = new CodeableConcept();
    }
    return this.code;
  }

  setCode(code: CodeableConcept | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** The group of specified substance, e.g. group 1 to 4 (1..1) Created when absent. */
  getGroup(): CodeableConcept {
    if (this.group === undefined) {
      this.group = new CodeableConcept();
    }
    return this.group;
  }

  setGroup(group: CodeableConcept | undefined): this {
    return this.setFieldValue('group', group);
  }

  hasGroup(): boolean {
    return this.hasFieldValue('group');
  }

  /** Confidentiality level of the specified substance as the ingredient (0..1) Created when absent. */
  getConfidentiality(): CodeableConcept {
    if (this.confidentiality === undefined) {
      this.confidentiality = new CodeableConcept();
    }
    return this.confidentiality;
  }

  setConfidentiality(confidentiality: CodeableConcept | undefined): this {
    return this.setFieldValue('confidentiality', confidentiality);
  }

  hasConfidentiality(): boolean {
    return this.hasFieldValue('confidentiality');
  }

  /** Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product (0..*) Never undefined; an empty list is created when absent. */
  getStrength(): MedicinalProductIngredientSpecifiedSubstanceStrength[] {
    if (this.strength === undefined) {
      this.strength = [];
    }
    return this.strength;
  }

  setStrength(strength: MedicinalProductIngredientSpecifiedSubstanceStrength[] | undefined): this {
    return this.setFieldValue('strength', strength);
  }

  hasStrength(): boolean {
    return this.hasFieldValue('strength');
  }

  /** Appends a new, empty MedicinalProductIngredientSpecifiedSubstanceStrength to `strength` and returns it so it can be filled in. */
  addStrength(): MedicinalProductIngredientSpecifiedSubstanceStrength;
  /** Appends the given MedicinalProductIngredientSpecifiedSubstanceStrength to `strength` and returns this object for chaining. */
  addStrength(
    medicinalProductIngredientSpecifiedSubstanceStrength: MedicinalProductIngredientSpecifiedSubstanceStrength
  ): this;
  addStrength(
    medicinalProductIngredientSpecifiedSubstanceStrength?: MedicinalProductIngredientSpecifiedSubstanceStrength
  ): MedicinalProductIngredientSpecifiedSubstanceStrength | this {
    if (medicinalProductIngredientSpecifiedSubstanceStrength !== undefined) {
      return this.addFieldValue('strength', medicinalProductIngredientSpecifiedSubstanceStrength);
    }
    const createdMedicinalProductIngredientSpecifiedSubstanceStrength =
      new MedicinalProductIngredientSpecifiedSubstanceStrength();
    this.addFieldValue('strength', createdMedicinalProductIngredientSpecifiedSubstanceStrength);
    return createdMedicinalProductIngredientSpecifiedSubstanceStrength;
  }

  /** The first MedicinalProductIngredientSpecifiedSubstanceStrength of `strength`. One is added when the list is empty. */
  getStrengthFirstRep(): MedicinalProductIngredientSpecifiedSubstanceStrength {
    const firstMedicinalProductIngredientSpecifiedSubstanceStrength = this.getStrength()[0];
    return firstMedicinalProductIngredientSpecifiedSubstanceStrength === undefined
      ? this.addStrength()
      : firstMedicinalProductIngredientSpecifiedSubstanceStrength;
  }
}

modelTypeRegistry.register(
  'MedicinalProductIngredientSpecifiedSubstance',
  MedicinalProductIngredientSpecifiedSubstance,
  false
);

/**
 * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product
 */
export class MedicinalProductIngredientSpecifiedSubstanceStrength extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'presentation',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'presentation', typeCode: 'Ratio' }],
    },
    {
      elementName: 'presentationLowLimit',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'presentationLowLimit', typeCode: 'Ratio' }],
    },
    {
      elementName: 'concentration',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'concentration', typeCode: 'Ratio' }],
    },
    {
      elementName: 'concentrationLowLimit',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'concentrationLowLimit', typeCode: 'Ratio' }],
    },
    {
      elementName: 'measurementPoint',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'measurementPoint', typeCode: 'string' }],
    },
    {
      elementName: 'country',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'country', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'referenceStrength',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'referenceStrength',
          typeCode: 'MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength',
        },
      ],
    },
  ];

  /** The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item (1..1) */
  presentation?: Ratio;

  /** A lower limit for the quantity of substance in the unit of presentation. For use when there is a range of strengths, this is the lower limit, with the presentation attribute becoming the upper limit (0..1) */
  presentationLowLimit?: Ratio;

  /** The strength per unitary volume (or mass) (0..1) */
  concentration?: Ratio;

  /** A lower limit for the strength per unitary volume (or mass), for when there is a range. The concentration attribute then becomes the upper limit (0..1) */
  concentrationLowLimit?: Ratio;

  /** For when strength is measured at a particular point or distance (0..1) */
  measurementPoint?: string;
  /** Id and extensions of the primitive `measurementPoint`. */
  _measurementPoint?: Element;

  /** The country or countries for which the strength range applies (0..*) */
  country?: CodeableConcept[];

  /** Strength expressed in terms of a reference substance (0..*) */
  referenceStrength?: MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength[];

  override fhirType(): string {
    return 'MedicinalProductIngredient.specifiedSubstance.strength';
  }

  /** FHIR JSON for this MedicinalProductIngredientSpecifiedSubstanceStrength, typed as the plain `MedicinalProductIngredientStrength` data type. */
  override toJSON(): plainTypes.MedicinalProductIngredientStrength {
    return this.serialize() as plainTypes.MedicinalProductIngredientStrength;
  }

  /** The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item (1..1) Created when absent. */
  getPresentation(): Ratio {
    if (this.presentation === undefined) {
      this.presentation = new Ratio();
    }
    return this.presentation;
  }

  setPresentation(presentation: Ratio | undefined): this {
    return this.setFieldValue('presentation', presentation);
  }

  hasPresentation(): boolean {
    return this.hasFieldValue('presentation');
  }

  /** A lower limit for the quantity of substance in the unit of presentation. For use when there is a range of strengths, this is the lower limit, with the presentation attribute becoming the upper limit (0..1) Created when absent. */
  getPresentationLowLimit(): Ratio {
    if (this.presentationLowLimit === undefined) {
      this.presentationLowLimit = new Ratio();
    }
    return this.presentationLowLimit;
  }

  setPresentationLowLimit(presentationLowLimit: Ratio | undefined): this {
    return this.setFieldValue('presentationLowLimit', presentationLowLimit);
  }

  hasPresentationLowLimit(): boolean {
    return this.hasFieldValue('presentationLowLimit');
  }

  /** The strength per unitary volume (or mass) (0..1) Created when absent. */
  getConcentration(): Ratio {
    if (this.concentration === undefined) {
      this.concentration = new Ratio();
    }
    return this.concentration;
  }

  setConcentration(concentration: Ratio | undefined): this {
    return this.setFieldValue('concentration', concentration);
  }

  hasConcentration(): boolean {
    return this.hasFieldValue('concentration');
  }

  /** A lower limit for the strength per unitary volume (or mass), for when there is a range. The concentration attribute then becomes the upper limit (0..1) Created when absent. */
  getConcentrationLowLimit(): Ratio {
    if (this.concentrationLowLimit === undefined) {
      this.concentrationLowLimit = new Ratio();
    }
    return this.concentrationLowLimit;
  }

  setConcentrationLowLimit(concentrationLowLimit: Ratio | undefined): this {
    return this.setFieldValue('concentrationLowLimit', concentrationLowLimit);
  }

  hasConcentrationLowLimit(): boolean {
    return this.hasFieldValue('concentrationLowLimit');
  }

  /** For when strength is measured at a particular point or distance (0..1) */
  getMeasurementPoint(): string | undefined {
    return this.measurementPoint;
  }

  /** Sets `measurementPoint`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setMeasurementPoint(measurementPoint: string | undefined): this {
    return this.setFieldValue('measurementPoint', measurementPoint);
  }

  hasMeasurementPoint(): boolean {
    return this.hasFieldValue('measurementPoint');
  }

  /** The element carrying the id and extensions of `measurementPoint`. Created when absent. */
  getMeasurementPointElement(): Element {
    if (this._measurementPoint === undefined) {
      this._measurementPoint = new Element();
    }
    return this._measurementPoint;
  }

  setMeasurementPointElement(measurementPointElement: Element | undefined): this {
    this._measurementPoint = measurementPointElement;
    return this;
  }

  /** The country or countries for which the strength range applies (0..*) Never undefined; an empty list is created when absent. */
  getCountry(): CodeableConcept[] {
    if (this.country === undefined) {
      this.country = [];
    }
    return this.country;
  }

  setCountry(country: CodeableConcept[] | undefined): this {
    return this.setFieldValue('country', country);
  }

  hasCountry(): boolean {
    return this.hasFieldValue('country');
  }

  /** Appends a new, empty CodeableConcept to `country` and returns it so it can be filled in. */
  addCountry(): CodeableConcept;
  /** Appends the given CodeableConcept to `country` and returns this object for chaining. */
  addCountry(codeableConcept: CodeableConcept): this;
  addCountry(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('country', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('country', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `country`. One is added when the list is empty. */
  getCountryFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getCountry()[0];
    return firstCodeableConcept === undefined ? this.addCountry() : firstCodeableConcept;
  }

  /** Strength expressed in terms of a reference substance (0..*) Never undefined; an empty list is created when absent. */
  getReferenceStrength(): MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength[] {
    if (this.referenceStrength === undefined) {
      this.referenceStrength = [];
    }
    return this.referenceStrength;
  }

  setReferenceStrength(
    referenceStrength:
      MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength[] | undefined
  ): this {
    return this.setFieldValue('referenceStrength', referenceStrength);
  }

  hasReferenceStrength(): boolean {
    return this.hasFieldValue('referenceStrength');
  }

  /** Appends a new, empty MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength to `referenceStrength` and returns it so it can be filled in. */
  addReferenceStrength(): MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength;
  /** Appends the given MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength to `referenceStrength` and returns this object for chaining. */
  addReferenceStrength(
    medicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength: MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength
  ): this;
  addReferenceStrength(
    medicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength?: MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength
  ): MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength | this {
    if (medicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength !== undefined) {
      return this.addFieldValue(
        'referenceStrength',
        medicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength
      );
    }
    const createdMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength =
      new MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength();
    this.addFieldValue(
      'referenceStrength',
      createdMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength
    );
    return createdMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength;
  }

  /** The first MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength of `referenceStrength`. One is added when the list is empty. */
  getReferenceStrengthFirstRep(): MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength {
    const firstMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength =
      this.getReferenceStrength()[0];
    return firstMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength === undefined
      ? this.addReferenceStrength()
      : firstMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength;
  }
}

modelTypeRegistry.register(
  'MedicinalProductIngredientSpecifiedSubstanceStrength',
  MedicinalProductIngredientSpecifiedSubstanceStrength,
  false
);

/**
 * Strength expressed in terms of a reference substance
 */
export class MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'substance',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'substance', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'strength',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'strength', typeCode: 'Ratio' }],
    },
    {
      elementName: 'strengthLowLimit',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'strengthLowLimit', typeCode: 'Ratio' }],
    },
    {
      elementName: 'measurementPoint',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'measurementPoint', typeCode: 'string' }],
    },
    {
      elementName: 'country',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'country', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Relevant reference substance (0..1) */
  substance?: CodeableConcept;

  /** Strength expressed in terms of a reference substance (1..1) */
  strength?: Ratio;

  /** Strength expressed in terms of a reference substance (0..1) */
  strengthLowLimit?: Ratio;

  /** For when strength is measured at a particular point or distance (0..1) */
  measurementPoint?: string;
  /** Id and extensions of the primitive `measurementPoint`. */
  _measurementPoint?: Element;

  /** The country or countries for which the strength range applies (0..*) */
  country?: CodeableConcept[];

  override fhirType(): string {
    return 'MedicinalProductIngredient.specifiedSubstance.strength.referenceStrength';
  }

  /** FHIR JSON for this MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength, typed as the plain `MedicinalProductIngredientReferenceStrength` data type. */
  override toJSON(): plainTypes.MedicinalProductIngredientReferenceStrength {
    return this.serialize() as plainTypes.MedicinalProductIngredientReferenceStrength;
  }

  /** Relevant reference substance (0..1) Created when absent. */
  getSubstance(): CodeableConcept {
    if (this.substance === undefined) {
      this.substance = new CodeableConcept();
    }
    return this.substance;
  }

  setSubstance(substance: CodeableConcept | undefined): this {
    return this.setFieldValue('substance', substance);
  }

  hasSubstance(): boolean {
    return this.hasFieldValue('substance');
  }

  /** Strength expressed in terms of a reference substance (1..1) Created when absent. */
  getStrength(): Ratio {
    if (this.strength === undefined) {
      this.strength = new Ratio();
    }
    return this.strength;
  }

  setStrength(strength: Ratio | undefined): this {
    return this.setFieldValue('strength', strength);
  }

  hasStrength(): boolean {
    return this.hasFieldValue('strength');
  }

  /** Strength expressed in terms of a reference substance (0..1) Created when absent. */
  getStrengthLowLimit(): Ratio {
    if (this.strengthLowLimit === undefined) {
      this.strengthLowLimit = new Ratio();
    }
    return this.strengthLowLimit;
  }

  setStrengthLowLimit(strengthLowLimit: Ratio | undefined): this {
    return this.setFieldValue('strengthLowLimit', strengthLowLimit);
  }

  hasStrengthLowLimit(): boolean {
    return this.hasFieldValue('strengthLowLimit');
  }

  /** For when strength is measured at a particular point or distance (0..1) */
  getMeasurementPoint(): string | undefined {
    return this.measurementPoint;
  }

  /** Sets `measurementPoint`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setMeasurementPoint(measurementPoint: string | undefined): this {
    return this.setFieldValue('measurementPoint', measurementPoint);
  }

  hasMeasurementPoint(): boolean {
    return this.hasFieldValue('measurementPoint');
  }

  /** The element carrying the id and extensions of `measurementPoint`. Created when absent. */
  getMeasurementPointElement(): Element {
    if (this._measurementPoint === undefined) {
      this._measurementPoint = new Element();
    }
    return this._measurementPoint;
  }

  setMeasurementPointElement(measurementPointElement: Element | undefined): this {
    this._measurementPoint = measurementPointElement;
    return this;
  }

  /** The country or countries for which the strength range applies (0..*) Never undefined; an empty list is created when absent. */
  getCountry(): CodeableConcept[] {
    if (this.country === undefined) {
      this.country = [];
    }
    return this.country;
  }

  setCountry(country: CodeableConcept[] | undefined): this {
    return this.setFieldValue('country', country);
  }

  hasCountry(): boolean {
    return this.hasFieldValue('country');
  }

  /** Appends a new, empty CodeableConcept to `country` and returns it so it can be filled in. */
  addCountry(): CodeableConcept;
  /** Appends the given CodeableConcept to `country` and returns this object for chaining. */
  addCountry(codeableConcept: CodeableConcept): this;
  addCountry(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('country', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('country', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `country`. One is added when the list is empty. */
  getCountryFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getCountry()[0];
    return firstCodeableConcept === undefined ? this.addCountry() : firstCodeableConcept;
  }
}

modelTypeRegistry.register(
  'MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength',
  MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength,
  false
);

/**
 * The ingredient substance
 */
export class MedicinalProductIngredientSubstance extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'strength',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'strength', typeCode: 'MedicinalProductIngredientSpecifiedSubstanceStrength' },
      ],
    },
  ];

  /** The ingredient substance (1..1) */
  code?: CodeableConcept;

  /** Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product (0..*) */
  strength?: MedicinalProductIngredientSpecifiedSubstanceStrength[];

  override fhirType(): string {
    return 'MedicinalProductIngredient.substance';
  }

  /** FHIR JSON for this MedicinalProductIngredientSubstance, typed as the plain `MedicinalProductIngredientSubstance` data type. */
  override toJSON(): plainTypes.MedicinalProductIngredientSubstance {
    return this.serialize() as plainTypes.MedicinalProductIngredientSubstance;
  }

  /** The ingredient substance (1..1) Created when absent. */
  getCode(): CodeableConcept {
    if (this.code === undefined) {
      this.code = new CodeableConcept();
    }
    return this.code;
  }

  setCode(code: CodeableConcept | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product (0..*) Never undefined; an empty list is created when absent. */
  getStrength(): MedicinalProductIngredientSpecifiedSubstanceStrength[] {
    if (this.strength === undefined) {
      this.strength = [];
    }
    return this.strength;
  }

  setStrength(strength: MedicinalProductIngredientSpecifiedSubstanceStrength[] | undefined): this {
    return this.setFieldValue('strength', strength);
  }

  hasStrength(): boolean {
    return this.hasFieldValue('strength');
  }

  /** Appends a new, empty MedicinalProductIngredientSpecifiedSubstanceStrength to `strength` and returns it so it can be filled in. */
  addStrength(): MedicinalProductIngredientSpecifiedSubstanceStrength;
  /** Appends the given MedicinalProductIngredientSpecifiedSubstanceStrength to `strength` and returns this object for chaining. */
  addStrength(
    medicinalProductIngredientSpecifiedSubstanceStrength: MedicinalProductIngredientSpecifiedSubstanceStrength
  ): this;
  addStrength(
    medicinalProductIngredientSpecifiedSubstanceStrength?: MedicinalProductIngredientSpecifiedSubstanceStrength
  ): MedicinalProductIngredientSpecifiedSubstanceStrength | this {
    if (medicinalProductIngredientSpecifiedSubstanceStrength !== undefined) {
      return this.addFieldValue('strength', medicinalProductIngredientSpecifiedSubstanceStrength);
    }
    const createdMedicinalProductIngredientSpecifiedSubstanceStrength =
      new MedicinalProductIngredientSpecifiedSubstanceStrength();
    this.addFieldValue('strength', createdMedicinalProductIngredientSpecifiedSubstanceStrength);
    return createdMedicinalProductIngredientSpecifiedSubstanceStrength;
  }

  /** The first MedicinalProductIngredientSpecifiedSubstanceStrength of `strength`. One is added when the list is empty. */
  getStrengthFirstRep(): MedicinalProductIngredientSpecifiedSubstanceStrength {
    const firstMedicinalProductIngredientSpecifiedSubstanceStrength = this.getStrength()[0];
    return firstMedicinalProductIngredientSpecifiedSubstanceStrength === undefined
      ? this.addStrength()
      : firstMedicinalProductIngredientSpecifiedSubstanceStrength;
  }
}

modelTypeRegistry.register(
  'MedicinalProductIngredientSubstance',
  MedicinalProductIngredientSubstance,
  false
);
