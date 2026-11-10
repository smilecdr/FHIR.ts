/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { CodeableReference } from './codeableReference';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Quantity } from './quantity';
import { Ratio } from './ratio';
import { RatioRange } from './ratioRange';
import { Reference } from './reference';

/**
 * An ingredient of a manufactured item or pharmaceutical product.
 */
export class Ingredient extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.PublicationStatus },
      ],
    },
    {
      elementName: 'for',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'for',
          typeCode: 'Reference',
          targetResourceTypes: [
            'AdministrableProductDefinition',
            'ManufacturedItemDefinition',
            'MedicinalProductDefinition',
          ],
        },
      ],
    },
    {
      elementName: 'role',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'role', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'function',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'function', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'group',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'group', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'allergenicIndicator',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'allergenicIndicator', typeCode: 'boolean' }],
    },
    {
      elementName: 'comment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'comment', typeCode: 'markdown' }],
    },
    {
      elementName: 'manufacturer',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'manufacturer', typeCode: 'IngredientManufacturer' }],
    },
    {
      elementName: 'substance',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'substance', typeCode: 'IngredientSubstance' }],
    },
  ];

  readonly resourceType = 'Ingredient';

  /** An identifier or code by which the ingredient can be referenced (0..1) */
  identifier?: Identifier;

  /** draft | active | retired | unknown (1..1) */
  status?: valueSetCodes.PublicationStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** The product which this ingredient is a constituent part of (0..*) */
  for?: Reference[];

  /** Purpose of the ingredient within the product, e.g. active, inactive (1..1) */
  role?: CodeableConcept;

  /** Precise action within the drug product, e.g. antioxidant, alkalizing agent (0..*) */
  function?: CodeableConcept[];

  /** A classification of the ingredient according to where in the physical item it tends to be used, such the outer shell of a tablet, inner body or ink (0..1) */
  group?: CodeableConcept;

  /** If the ingredient is a known or suspected allergen (0..1) */
  allergenicIndicator?: boolean;
  /** Id and extensions of the primitive `allergenicIndicator`. */
  _allergenicIndicator?: Element;

  /** A place for providing any notes that are relevant to the component, e.g. removed during process, adjusted for loss on drying (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;

  /** An organization that manufactures this ingredient (0..*) */
  manufacturer?: IngredientManufacturer[];

  /** The substance that comprises this ingredient (1..1) */
  substance?: IngredientSubstance;

  override fhirType(): string {
    return 'Ingredient';
  }

  /** FHIR JSON for this Ingredient, typed as the plain `Ingredient` data type. */
  override toJSON(): plainTypes.Ingredient {
    return this.serialize() as plainTypes.Ingredient;
  }

  /** An identifier or code by which the ingredient can be referenced (0..1) Created when absent. */
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

  /** draft | active | retired | unknown (1..1) */
  getStatus(): valueSetCodes.PublicationStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.PublicationStatus | undefined): this {
    return this.setFieldValue('status', status);
  }

  hasStatus(): boolean {
    return this.hasFieldValue('status');
  }

  /** The element carrying the id and extensions of `status`. Created when absent. */
  getStatusElement(): Element {
    if (this._status === undefined) {
      this._status = new Element();
    }
    return this._status;
  }

  setStatusElement(statusElement: Element | undefined): this {
    this._status = statusElement;
    return this;
  }

  /** The product which this ingredient is a constituent part of (0..*) Never undefined; an empty list is created when absent. */
  getFor(): Reference[] {
    if (this.for === undefined) {
      this.for = [];
    }
    return this.for;
  }

  setFor(forValue: Reference[] | undefined): this {
    return this.setFieldValue('for', forValue);
  }

  hasFor(): boolean {
    return this.hasFieldValue('for');
  }

  /** Appends a new, empty Reference to `for` and returns it so it can be filled in. */
  addFor(): Reference;
  /** Appends the given Reference to `for` and returns this object for chaining. */
  addFor(reference: Reference): this;
  addFor(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('for', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('for', createdReference);
    return createdReference;
  }

  /** The first Reference of `for`. One is added when the list is empty. */
  getForFirstRep(): Reference {
    const firstReference = this.getFor()[0];
    return firstReference === undefined ? this.addFor() : firstReference;
  }

  /** Purpose of the ingredient within the product, e.g. active, inactive (1..1) Created when absent. */
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

  /** Precise action within the drug product, e.g. antioxidant, alkalizing agent (0..*) Never undefined; an empty list is created when absent. */
  getFunction(): CodeableConcept[] {
    if (this.function === undefined) {
      this.function = [];
    }
    return this.function;
  }

  setFunction(functionValue: CodeableConcept[] | undefined): this {
    return this.setFieldValue('function', functionValue);
  }

  hasFunction(): boolean {
    return this.hasFieldValue('function');
  }

  /** Appends a new, empty CodeableConcept to `function` and returns it so it can be filled in. */
  addFunction(): CodeableConcept;
  /** Appends the given CodeableConcept to `function` and returns this object for chaining. */
  addFunction(codeableConcept: CodeableConcept): this;
  addFunction(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('function', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('function', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `function`. One is added when the list is empty. */
  getFunctionFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getFunction()[0];
    return firstCodeableConcept === undefined ? this.addFunction() : firstCodeableConcept;
  }

  /** A classification of the ingredient according to where in the physical item it tends to be used, such the outer shell of a tablet, inner body or ink (0..1) Created when absent. */
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

  /** A place for providing any notes that are relevant to the component, e.g. removed during process, adjusted for loss on drying (0..1) */
  getComment(): string | undefined {
    return this.comment;
  }

  /** Sets `comment`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setComment(comment: string | undefined): this {
    return this.setFieldValue('comment', comment);
  }

  hasComment(): boolean {
    return this.hasFieldValue('comment');
  }

  /** The element carrying the id and extensions of `comment`. Created when absent. */
  getCommentElement(): Element {
    if (this._comment === undefined) {
      this._comment = new Element();
    }
    return this._comment;
  }

  setCommentElement(commentElement: Element | undefined): this {
    this._comment = commentElement;
    return this;
  }

  /** An organization that manufactures this ingredient (0..*) Never undefined; an empty list is created when absent. */
  getManufacturer(): IngredientManufacturer[] {
    if (this.manufacturer === undefined) {
      this.manufacturer = [];
    }
    return this.manufacturer;
  }

  setManufacturer(manufacturer: IngredientManufacturer[] | undefined): this {
    return this.setFieldValue('manufacturer', manufacturer);
  }

  hasManufacturer(): boolean {
    return this.hasFieldValue('manufacturer');
  }

  /** Appends a new, empty IngredientManufacturer to `manufacturer` and returns it so it can be filled in. */
  addManufacturer(): IngredientManufacturer;
  /** Appends the given IngredientManufacturer to `manufacturer` and returns this object for chaining. */
  addManufacturer(ingredientManufacturer: IngredientManufacturer): this;
  addManufacturer(ingredientManufacturer?: IngredientManufacturer): IngredientManufacturer | this {
    if (ingredientManufacturer !== undefined) {
      return this.addFieldValue('manufacturer', ingredientManufacturer);
    }
    const createdIngredientManufacturer = new IngredientManufacturer();
    this.addFieldValue('manufacturer', createdIngredientManufacturer);
    return createdIngredientManufacturer;
  }

  /** The first IngredientManufacturer of `manufacturer`. One is added when the list is empty. */
  getManufacturerFirstRep(): IngredientManufacturer {
    const firstIngredientManufacturer = this.getManufacturer()[0];
    return firstIngredientManufacturer === undefined
      ? this.addManufacturer()
      : firstIngredientManufacturer;
  }

  /** The substance that comprises this ingredient (1..1) Created when absent. */
  getSubstance(): IngredientSubstance {
    if (this.substance === undefined) {
      this.substance = new IngredientSubstance();
    }
    return this.substance;
  }

  setSubstance(substance: IngredientSubstance | undefined): this {
    return this.setFieldValue('substance', substance);
  }

  hasSubstance(): boolean {
    return this.hasFieldValue('substance');
  }
}

modelTypeRegistry.register('Ingredient', Ingredient, true);

/** True when the value is a Ingredient model instance. */
export function isIngredient(candidate: unknown): candidate is Ingredient {
  return candidate instanceof Ingredient;
}

/**
 * An organization that manufactures this ingredient
 */
export class IngredientManufacturer extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'role',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'role',
          typeCode: 'code',
          allowedCodes: valueSetCodes.IngredientManufacturerRole,
        },
      ],
    },
    {
      elementName: 'manufacturer',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'manufacturer', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
  ];

  /** allowed | possible | actual (0..1) */
  role?: valueSetCodes.IngredientManufacturerRole;
  /** Id and extensions of the primitive `role`. */
  _role?: Element;

  /** An organization that manufactures this ingredient (1..1) */
  manufacturer?: Reference;

  override fhirType(): string {
    return 'Ingredient.manufacturer';
  }

  /** FHIR JSON for this IngredientManufacturer, typed as the plain `IngredientManufacturer` data type. */
  override toJSON(): plainTypes.IngredientManufacturer {
    return this.serialize() as plainTypes.IngredientManufacturer;
  }

  /** allowed | possible | actual (0..1) */
  getRole(): valueSetCodes.IngredientManufacturerRole | undefined {
    return this.role;
  }

  /** Sets `role`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setRole(role: valueSetCodes.IngredientManufacturerRole | undefined): this {
    return this.setFieldValue('role', role);
  }

  hasRole(): boolean {
    return this.hasFieldValue('role');
  }

  /** The element carrying the id and extensions of `role`. Created when absent. */
  getRoleElement(): Element {
    if (this._role === undefined) {
      this._role = new Element();
    }
    return this._role;
  }

  setRoleElement(roleElement: Element | undefined): this {
    this._role = roleElement;
    return this;
  }

  /** An organization that manufactures this ingredient (1..1) Created when absent. */
  getManufacturer(): Reference {
    if (this.manufacturer === undefined) {
      this.manufacturer = new Reference();
    }
    return this.manufacturer;
  }

  setManufacturer(manufacturer: Reference | undefined): this {
    return this.setFieldValue('manufacturer', manufacturer);
  }

  hasManufacturer(): boolean {
    return this.hasFieldValue('manufacturer');
  }
}

modelTypeRegistry.register('IngredientManufacturer', IngredientManufacturer, false);

/**
 * The substance that comprises this ingredient
 */
export class IngredientSubstance extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'strength',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'strength', typeCode: 'IngredientSubstanceStrength' }],
    },
  ];

  /** A code or full resource that represents the ingredient substance (1..1) */
  code?: CodeableReference;

  /** The quantity of substance, per presentation, or per volume or mass, and type of quantity (0..*) */
  strength?: IngredientSubstanceStrength[];

  override fhirType(): string {
    return 'Ingredient.substance';
  }

  /** FHIR JSON for this IngredientSubstance, typed as the plain `IngredientSubstance` data type. */
  override toJSON(): plainTypes.IngredientSubstance {
    return this.serialize() as plainTypes.IngredientSubstance;
  }

  /** A code or full resource that represents the ingredient substance (1..1) Created when absent. */
  getCode(): CodeableReference {
    if (this.code === undefined) {
      this.code = new CodeableReference();
    }
    return this.code;
  }

  setCode(code: CodeableReference | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** The quantity of substance, per presentation, or per volume or mass, and type of quantity (0..*) Never undefined; an empty list is created when absent. */
  getStrength(): IngredientSubstanceStrength[] {
    if (this.strength === undefined) {
      this.strength = [];
    }
    return this.strength;
  }

  setStrength(strength: IngredientSubstanceStrength[] | undefined): this {
    return this.setFieldValue('strength', strength);
  }

  hasStrength(): boolean {
    return this.hasFieldValue('strength');
  }

  /** Appends a new, empty IngredientSubstanceStrength to `strength` and returns it so it can be filled in. */
  addStrength(): IngredientSubstanceStrength;
  /** Appends the given IngredientSubstanceStrength to `strength` and returns this object for chaining. */
  addStrength(ingredientSubstanceStrength: IngredientSubstanceStrength): this;
  addStrength(
    ingredientSubstanceStrength?: IngredientSubstanceStrength
  ): IngredientSubstanceStrength | this {
    if (ingredientSubstanceStrength !== undefined) {
      return this.addFieldValue('strength', ingredientSubstanceStrength);
    }
    const createdIngredientSubstanceStrength = new IngredientSubstanceStrength();
    this.addFieldValue('strength', createdIngredientSubstanceStrength);
    return createdIngredientSubstanceStrength;
  }

  /** The first IngredientSubstanceStrength of `strength`. One is added when the list is empty. */
  getStrengthFirstRep(): IngredientSubstanceStrength {
    const firstIngredientSubstanceStrength = this.getStrength()[0];
    return firstIngredientSubstanceStrength === undefined
      ? this.addStrength()
      : firstIngredientSubstanceStrength;
  }
}

modelTypeRegistry.register('IngredientSubstance', IngredientSubstance, false);

/**
 * The quantity of substance, per presentation, or per volume or mass, and type of quantity
 */
export class IngredientSubstanceStrength extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'presentation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'presentationRatio', typeCode: 'Ratio' },
        { jsonKey: 'presentationRatioRange', typeCode: 'RatioRange' },
        { jsonKey: 'presentationCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'presentationQuantity', typeCode: 'Quantity' },
      ],
    },
    {
      elementName: 'textPresentation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'textPresentation', typeCode: 'string' }],
    },
    {
      elementName: 'concentration',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'concentrationRatio', typeCode: 'Ratio' },
        { jsonKey: 'concentrationRatioRange', typeCode: 'RatioRange' },
        { jsonKey: 'concentrationCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'concentrationQuantity', typeCode: 'Quantity' },
      ],
    },
    {
      elementName: 'textConcentration',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'textConcentration', typeCode: 'string' }],
    },
    {
      elementName: 'basis',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'basis', typeCode: 'CodeableConcept' }],
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
        { jsonKey: 'referenceStrength', typeCode: 'IngredientSubstanceStrengthReferenceStrength' },
      ],
    },
  ];

  /** The quantity of substance in the unit of presentation (0..1) */
  presentationRatio?: Ratio;
  /** The quantity of substance in the unit of presentation (0..1) */
  presentationRatioRange?: RatioRange;
  /** The quantity of substance in the unit of presentation (0..1) */
  presentationCodeableConcept?: CodeableConcept;
  /** The quantity of substance in the unit of presentation (0..1) */
  presentationQuantity?: Quantity;

  /** Text of either the whole presentation strength or a part of it (rest being in Strength.presentation as a ratio) (0..1) */
  textPresentation?: string;
  /** Id and extensions of the primitive `textPresentation`. */
  _textPresentation?: Element;

  /** The strength per unitary volume (or mass) (0..1) */
  concentrationRatio?: Ratio;
  /** The strength per unitary volume (or mass) (0..1) */
  concentrationRatioRange?: RatioRange;
  /** The strength per unitary volume (or mass) (0..1) */
  concentrationCodeableConcept?: CodeableConcept;
  /** The strength per unitary volume (or mass) (0..1) */
  concentrationQuantity?: Quantity;

  /** Text of either the whole concentration strength or a part of it (rest being in Strength.concentration as a ratio) (0..1) */
  textConcentration?: string;
  /** Id and extensions of the primitive `textConcentration`. */
  _textConcentration?: Element;

  /** A code that indicates if the strength is, for example, based on the ingredient substance as stated or on the substance base (when the ingredient is a salt) (0..1) */
  basis?: CodeableConcept;

  /** When strength is measured at a particular point or distance (0..1) */
  measurementPoint?: string;
  /** Id and extensions of the primitive `measurementPoint`. */
  _measurementPoint?: Element;

  /** Where the strength range applies (0..*) */
  country?: CodeableConcept[];

  /** Strength expressed in terms of a reference substance (0..*) */
  referenceStrength?: IngredientSubstanceStrengthReferenceStrength[];

  override fhirType(): string {
    return 'Ingredient.substance.strength';
  }

  /** FHIR JSON for this IngredientSubstanceStrength, typed as the plain `IngredientStrength` data type. */
  override toJSON(): plainTypes.IngredientStrength {
    return this.serialize() as plainTypes.IngredientStrength;
  }

  /** The quantity of substance in the unit of presentation (0..1) Whichever type of `presentation[x]` is set. */
  getPresentation(): Ratio | RatioRange | CodeableConcept | Quantity | undefined {
    return this.getChoiceValue<Ratio | RatioRange | CodeableConcept | Quantity>('presentation');
  }

  /** True when any type of `presentation[x]` is set. */
  hasPresentation(): boolean {
    return this.hasChoiceValue('presentation');
  }

  getPresentationRatio(): Ratio | undefined {
    return this.presentationRatio;
  }

  /** Sets `presentation[x]` as Ratio and clears every other type of it. */
  setPresentationRatio(presentationRatio: Ratio | undefined): this {
    return this.setFieldValue('presentationRatio', presentationRatio);
  }

  hasPresentationRatio(): boolean {
    return this.hasFieldValue('presentationRatio');
  }

  getPresentationRatioRange(): RatioRange | undefined {
    return this.presentationRatioRange;
  }

  /** Sets `presentation[x]` as RatioRange and clears every other type of it. */
  setPresentationRatioRange(presentationRatioRange: RatioRange | undefined): this {
    return this.setFieldValue('presentationRatioRange', presentationRatioRange);
  }

  hasPresentationRatioRange(): boolean {
    return this.hasFieldValue('presentationRatioRange');
  }

  getPresentationCodeableConcept(): CodeableConcept | undefined {
    return this.presentationCodeableConcept;
  }

  /** Sets `presentation[x]` as CodeableConcept and clears every other type of it. */
  setPresentationCodeableConcept(presentationCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('presentationCodeableConcept', presentationCodeableConcept);
  }

  hasPresentationCodeableConcept(): boolean {
    return this.hasFieldValue('presentationCodeableConcept');
  }

  getPresentationQuantity(): Quantity | undefined {
    return this.presentationQuantity;
  }

  /** Sets `presentation[x]` as Quantity and clears every other type of it. */
  setPresentationQuantity(presentationQuantity: Quantity | undefined): this {
    return this.setFieldValue('presentationQuantity', presentationQuantity);
  }

  hasPresentationQuantity(): boolean {
    return this.hasFieldValue('presentationQuantity');
  }

  /** Text of either the whole presentation strength or a part of it (rest being in Strength.presentation as a ratio) (0..1) */
  getTextPresentation(): string | undefined {
    return this.textPresentation;
  }

  /** Sets `textPresentation`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setTextPresentation(textPresentation: string | undefined): this {
    return this.setFieldValue('textPresentation', textPresentation);
  }

  hasTextPresentation(): boolean {
    return this.hasFieldValue('textPresentation');
  }

  /** The element carrying the id and extensions of `textPresentation`. Created when absent. */
  getTextPresentationElement(): Element {
    if (this._textPresentation === undefined) {
      this._textPresentation = new Element();
    }
    return this._textPresentation;
  }

  setTextPresentationElement(textPresentationElement: Element | undefined): this {
    this._textPresentation = textPresentationElement;
    return this;
  }

  /** The strength per unitary volume (or mass) (0..1) Whichever type of `concentration[x]` is set. */
  getConcentration(): Ratio | RatioRange | CodeableConcept | Quantity | undefined {
    return this.getChoiceValue<Ratio | RatioRange | CodeableConcept | Quantity>('concentration');
  }

  /** True when any type of `concentration[x]` is set. */
  hasConcentration(): boolean {
    return this.hasChoiceValue('concentration');
  }

  getConcentrationRatio(): Ratio | undefined {
    return this.concentrationRatio;
  }

  /** Sets `concentration[x]` as Ratio and clears every other type of it. */
  setConcentrationRatio(concentrationRatio: Ratio | undefined): this {
    return this.setFieldValue('concentrationRatio', concentrationRatio);
  }

  hasConcentrationRatio(): boolean {
    return this.hasFieldValue('concentrationRatio');
  }

  getConcentrationRatioRange(): RatioRange | undefined {
    return this.concentrationRatioRange;
  }

  /** Sets `concentration[x]` as RatioRange and clears every other type of it. */
  setConcentrationRatioRange(concentrationRatioRange: RatioRange | undefined): this {
    return this.setFieldValue('concentrationRatioRange', concentrationRatioRange);
  }

  hasConcentrationRatioRange(): boolean {
    return this.hasFieldValue('concentrationRatioRange');
  }

  getConcentrationCodeableConcept(): CodeableConcept | undefined {
    return this.concentrationCodeableConcept;
  }

  /** Sets `concentration[x]` as CodeableConcept and clears every other type of it. */
  setConcentrationCodeableConcept(concentrationCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('concentrationCodeableConcept', concentrationCodeableConcept);
  }

  hasConcentrationCodeableConcept(): boolean {
    return this.hasFieldValue('concentrationCodeableConcept');
  }

  getConcentrationQuantity(): Quantity | undefined {
    return this.concentrationQuantity;
  }

  /** Sets `concentration[x]` as Quantity and clears every other type of it. */
  setConcentrationQuantity(concentrationQuantity: Quantity | undefined): this {
    return this.setFieldValue('concentrationQuantity', concentrationQuantity);
  }

  hasConcentrationQuantity(): boolean {
    return this.hasFieldValue('concentrationQuantity');
  }

  /** Text of either the whole concentration strength or a part of it (rest being in Strength.concentration as a ratio) (0..1) */
  getTextConcentration(): string | undefined {
    return this.textConcentration;
  }

  /** Sets `textConcentration`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setTextConcentration(textConcentration: string | undefined): this {
    return this.setFieldValue('textConcentration', textConcentration);
  }

  hasTextConcentration(): boolean {
    return this.hasFieldValue('textConcentration');
  }

  /** The element carrying the id and extensions of `textConcentration`. Created when absent. */
  getTextConcentrationElement(): Element {
    if (this._textConcentration === undefined) {
      this._textConcentration = new Element();
    }
    return this._textConcentration;
  }

  setTextConcentrationElement(textConcentrationElement: Element | undefined): this {
    this._textConcentration = textConcentrationElement;
    return this;
  }

  /** A code that indicates if the strength is, for example, based on the ingredient substance as stated or on the substance base (when the ingredient is a salt) (0..1) Created when absent. */
  getBasis(): CodeableConcept {
    if (this.basis === undefined) {
      this.basis = new CodeableConcept();
    }
    return this.basis;
  }

  setBasis(basis: CodeableConcept | undefined): this {
    return this.setFieldValue('basis', basis);
  }

  hasBasis(): boolean {
    return this.hasFieldValue('basis');
  }

  /** When strength is measured at a particular point or distance (0..1) */
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

  /** Where the strength range applies (0..*) Never undefined; an empty list is created when absent. */
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
  getReferenceStrength(): IngredientSubstanceStrengthReferenceStrength[] {
    if (this.referenceStrength === undefined) {
      this.referenceStrength = [];
    }
    return this.referenceStrength;
  }

  setReferenceStrength(
    referenceStrength: IngredientSubstanceStrengthReferenceStrength[] | undefined
  ): this {
    return this.setFieldValue('referenceStrength', referenceStrength);
  }

  hasReferenceStrength(): boolean {
    return this.hasFieldValue('referenceStrength');
  }

  /** Appends a new, empty IngredientSubstanceStrengthReferenceStrength to `referenceStrength` and returns it so it can be filled in. */
  addReferenceStrength(): IngredientSubstanceStrengthReferenceStrength;
  /** Appends the given IngredientSubstanceStrengthReferenceStrength to `referenceStrength` and returns this object for chaining. */
  addReferenceStrength(
    ingredientSubstanceStrengthReferenceStrength: IngredientSubstanceStrengthReferenceStrength
  ): this;
  addReferenceStrength(
    ingredientSubstanceStrengthReferenceStrength?: IngredientSubstanceStrengthReferenceStrength
  ): IngredientSubstanceStrengthReferenceStrength | this {
    if (ingredientSubstanceStrengthReferenceStrength !== undefined) {
      return this.addFieldValue('referenceStrength', ingredientSubstanceStrengthReferenceStrength);
    }
    const createdIngredientSubstanceStrengthReferenceStrength =
      new IngredientSubstanceStrengthReferenceStrength();
    this.addFieldValue('referenceStrength', createdIngredientSubstanceStrengthReferenceStrength);
    return createdIngredientSubstanceStrengthReferenceStrength;
  }

  /** The first IngredientSubstanceStrengthReferenceStrength of `referenceStrength`. One is added when the list is empty. */
  getReferenceStrengthFirstRep(): IngredientSubstanceStrengthReferenceStrength {
    const firstIngredientSubstanceStrengthReferenceStrength = this.getReferenceStrength()[0];
    return firstIngredientSubstanceStrengthReferenceStrength === undefined
      ? this.addReferenceStrength()
      : firstIngredientSubstanceStrengthReferenceStrength;
  }
}

modelTypeRegistry.register('IngredientSubstanceStrength', IngredientSubstanceStrength, false);

/**
 * Strength expressed in terms of a reference substance
 */
export class IngredientSubstanceStrengthReferenceStrength extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'substance',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'substance', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'strength',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'strengthRatio', typeCode: 'Ratio' },
        { jsonKey: 'strengthRatioRange', typeCode: 'RatioRange' },
        { jsonKey: 'strengthQuantity', typeCode: 'Quantity' },
      ],
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

  /** Relevant reference substance (1..1) */
  substance?: CodeableReference;

  /** Strength expressed in terms of a reference substance (1..1) */
  strengthRatio?: Ratio;
  /** Strength expressed in terms of a reference substance (1..1) */
  strengthRatioRange?: RatioRange;
  /** Strength expressed in terms of a reference substance (1..1) */
  strengthQuantity?: Quantity;

  /** When strength is measured at a particular point or distance (0..1) */
  measurementPoint?: string;
  /** Id and extensions of the primitive `measurementPoint`. */
  _measurementPoint?: Element;

  /** Where the strength range applies (0..*) */
  country?: CodeableConcept[];

  override fhirType(): string {
    return 'Ingredient.substance.strength.referenceStrength';
  }

  /** FHIR JSON for this IngredientSubstanceStrengthReferenceStrength, typed as the plain `IngredientReferenceStrength` data type. */
  override toJSON(): plainTypes.IngredientReferenceStrength {
    return this.serialize() as plainTypes.IngredientReferenceStrength;
  }

  /** Relevant reference substance (1..1) Created when absent. */
  getSubstance(): CodeableReference {
    if (this.substance === undefined) {
      this.substance = new CodeableReference();
    }
    return this.substance;
  }

  setSubstance(substance: CodeableReference | undefined): this {
    return this.setFieldValue('substance', substance);
  }

  hasSubstance(): boolean {
    return this.hasFieldValue('substance');
  }

  /** Strength expressed in terms of a reference substance (1..1) Whichever type of `strength[x]` is set. */
  getStrength(): Ratio | RatioRange | Quantity | undefined {
    return this.getChoiceValue<Ratio | RatioRange | Quantity>('strength');
  }

  /** True when any type of `strength[x]` is set. */
  hasStrength(): boolean {
    return this.hasChoiceValue('strength');
  }

  getStrengthRatio(): Ratio | undefined {
    return this.strengthRatio;
  }

  /** Sets `strength[x]` as Ratio and clears every other type of it. */
  setStrengthRatio(strengthRatio: Ratio | undefined): this {
    return this.setFieldValue('strengthRatio', strengthRatio);
  }

  hasStrengthRatio(): boolean {
    return this.hasFieldValue('strengthRatio');
  }

  getStrengthRatioRange(): RatioRange | undefined {
    return this.strengthRatioRange;
  }

  /** Sets `strength[x]` as RatioRange and clears every other type of it. */
  setStrengthRatioRange(strengthRatioRange: RatioRange | undefined): this {
    return this.setFieldValue('strengthRatioRange', strengthRatioRange);
  }

  hasStrengthRatioRange(): boolean {
    return this.hasFieldValue('strengthRatioRange');
  }

  getStrengthQuantity(): Quantity | undefined {
    return this.strengthQuantity;
  }

  /** Sets `strength[x]` as Quantity and clears every other type of it. */
  setStrengthQuantity(strengthQuantity: Quantity | undefined): this {
    return this.setFieldValue('strengthQuantity', strengthQuantity);
  }

  hasStrengthQuantity(): boolean {
    return this.hasFieldValue('strengthQuantity');
  }

  /** When strength is measured at a particular point or distance (0..1) */
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

  /** Where the strength range applies (0..*) Never undefined; an empty list is created when absent. */
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
  'IngredientSubstanceStrengthReferenceStrength',
  IngredientSubstanceStrengthReferenceStrength,
  false
);
