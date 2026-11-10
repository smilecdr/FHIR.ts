/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { Attachment } from './attachment';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { CodeableReference } from './codeableReference';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { MarketingStatus } from './marketingStatus';
import { Quantity } from './quantity';
import { Reference } from './reference';

/**
 * The definition and characteristics of a medicinal manufactured item, such as a tablet or capsule, as contained in a packaged medicinal product.
 */
export class ManufacturedItemDefinition extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
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
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'manufacturedDoseForm',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'manufacturedDoseForm', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'unitOfPresentation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'unitOfPresentation', typeCode: 'CodeableConcept' }],
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
      elementName: 'marketingStatus',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'marketingStatus', typeCode: 'MarketingStatus' }],
    },
    {
      elementName: 'ingredient',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'ingredient', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'property',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'property', typeCode: 'ManufacturedItemDefinitionProperty' }],
    },
    {
      elementName: 'component',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'component', typeCode: 'ManufacturedItemDefinitionComponent' }],
    },
  ];

  readonly resourceType = 'ManufacturedItemDefinition';

  /** Unique identifier (0..*) */
  identifier?: Identifier[];

  /** draft | active | retired | unknown (1..1) */
  status?: valueSetCodes.PublicationStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** A descriptive name applied to this item (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Dose form as manufactured (before any necessary transformation) (1..1) */
  manufacturedDoseForm?: CodeableConcept;

  /** The “real-world” units in which the quantity of the item is described (0..1) */
  unitOfPresentation?: CodeableConcept;

  /** Manufacturer of the item, one of several possible (0..*) */
  manufacturer?: Reference[];

  /** Allows specifying that an item is on the market for sale, or that it is not available, and the dates and locations associated (0..*) */
  marketingStatus?: MarketingStatus[];

  /** The ingredients of this manufactured item. Only needed if these are not specified by incoming references from the Ingredient resource (0..*) */
  ingredient?: CodeableConcept[];

  /** General characteristics of this item (0..*) */
  property?: ManufacturedItemDefinitionProperty[];

  /** Physical parts of the manufactured item, that it is intrisically made from. This is distinct from the ingredients that are part of its chemical makeup (0..*) */
  component?: ManufacturedItemDefinitionComponent[];

  override fhirType(): string {
    return 'ManufacturedItemDefinition';
  }

  /** FHIR JSON for this ManufacturedItemDefinition, typed as the plain `ManufacturedItemDefinition` data type. */
  override toJSON(): plainTypes.ManufacturedItemDefinition {
    return this.serialize() as plainTypes.ManufacturedItemDefinition;
  }

  /** Unique identifier (0..*) Never undefined; an empty list is created when absent. */
  getIdentifier(): Identifier[] {
    if (this.identifier === undefined) {
      this.identifier = [];
    }
    return this.identifier;
  }

  setIdentifier(identifier: Identifier[] | undefined): this {
    return this.setFieldValue('identifier', identifier);
  }

  hasIdentifier(): boolean {
    return this.hasFieldValue('identifier');
  }

  /** Appends a new, empty Identifier to `identifier` and returns it so it can be filled in. */
  addIdentifier(): Identifier;
  /** Appends the given Identifier to `identifier` and returns this object for chaining. */
  addIdentifier(identifier: Identifier): this;
  addIdentifier(identifier?: Identifier): Identifier | this {
    if (identifier !== undefined) {
      return this.addFieldValue('identifier', identifier);
    }
    const createdIdentifier = new Identifier();
    this.addFieldValue('identifier', createdIdentifier);
    return createdIdentifier;
  }

  /** The first Identifier of `identifier`. One is added when the list is empty. */
  getIdentifierFirstRep(): Identifier {
    const firstIdentifier = this.getIdentifier()[0];
    return firstIdentifier === undefined ? this.addIdentifier() : firstIdentifier;
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

  /** A descriptive name applied to this item (0..1) */
  getName(): string | undefined {
    return this.name;
  }

  /** Sets `name`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setName(name: string | undefined): this {
    return this.setFieldValue('name', name);
  }

  hasName(): boolean {
    return this.hasFieldValue('name');
  }

  /** The element carrying the id and extensions of `name`. Created when absent. */
  getNameElement(): Element {
    if (this._name === undefined) {
      this._name = new Element();
    }
    return this._name;
  }

  setNameElement(nameElement: Element | undefined): this {
    this._name = nameElement;
    return this;
  }

  /** Dose form as manufactured (before any necessary transformation) (1..1) Created when absent. */
  getManufacturedDoseForm(): CodeableConcept {
    if (this.manufacturedDoseForm === undefined) {
      this.manufacturedDoseForm = new CodeableConcept();
    }
    return this.manufacturedDoseForm;
  }

  setManufacturedDoseForm(manufacturedDoseForm: CodeableConcept | undefined): this {
    return this.setFieldValue('manufacturedDoseForm', manufacturedDoseForm);
  }

  hasManufacturedDoseForm(): boolean {
    return this.hasFieldValue('manufacturedDoseForm');
  }

  /** The “real-world” units in which the quantity of the item is described (0..1) Created when absent. */
  getUnitOfPresentation(): CodeableConcept {
    if (this.unitOfPresentation === undefined) {
      this.unitOfPresentation = new CodeableConcept();
    }
    return this.unitOfPresentation;
  }

  setUnitOfPresentation(unitOfPresentation: CodeableConcept | undefined): this {
    return this.setFieldValue('unitOfPresentation', unitOfPresentation);
  }

  hasUnitOfPresentation(): boolean {
    return this.hasFieldValue('unitOfPresentation');
  }

  /** Manufacturer of the item, one of several possible (0..*) Never undefined; an empty list is created when absent. */
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

  /** Allows specifying that an item is on the market for sale, or that it is not available, and the dates and locations associated (0..*) Never undefined; an empty list is created when absent. */
  getMarketingStatus(): MarketingStatus[] {
    if (this.marketingStatus === undefined) {
      this.marketingStatus = [];
    }
    return this.marketingStatus;
  }

  setMarketingStatus(marketingStatus: MarketingStatus[] | undefined): this {
    return this.setFieldValue('marketingStatus', marketingStatus);
  }

  hasMarketingStatus(): boolean {
    return this.hasFieldValue('marketingStatus');
  }

  /** Appends a new, empty MarketingStatus to `marketingStatus` and returns it so it can be filled in. */
  addMarketingStatus(): MarketingStatus;
  /** Appends the given MarketingStatus to `marketingStatus` and returns this object for chaining. */
  addMarketingStatus(marketingStatus: MarketingStatus): this;
  addMarketingStatus(marketingStatus?: MarketingStatus): MarketingStatus | this {
    if (marketingStatus !== undefined) {
      return this.addFieldValue('marketingStatus', marketingStatus);
    }
    const createdMarketingStatus = new MarketingStatus();
    this.addFieldValue('marketingStatus', createdMarketingStatus);
    return createdMarketingStatus;
  }

  /** The first MarketingStatus of `marketingStatus`. One is added when the list is empty. */
  getMarketingStatusFirstRep(): MarketingStatus {
    const firstMarketingStatus = this.getMarketingStatus()[0];
    return firstMarketingStatus === undefined ? this.addMarketingStatus() : firstMarketingStatus;
  }

  /** The ingredients of this manufactured item. Only needed if these are not specified by incoming references from the Ingredient resource (0..*) Never undefined; an empty list is created when absent. */
  getIngredient(): CodeableConcept[] {
    if (this.ingredient === undefined) {
      this.ingredient = [];
    }
    return this.ingredient;
  }

  setIngredient(ingredient: CodeableConcept[] | undefined): this {
    return this.setFieldValue('ingredient', ingredient);
  }

  hasIngredient(): boolean {
    return this.hasFieldValue('ingredient');
  }

  /** Appends a new, empty CodeableConcept to `ingredient` and returns it so it can be filled in. */
  addIngredient(): CodeableConcept;
  /** Appends the given CodeableConcept to `ingredient` and returns this object for chaining. */
  addIngredient(codeableConcept: CodeableConcept): this;
  addIngredient(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('ingredient', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('ingredient', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `ingredient`. One is added when the list is empty. */
  getIngredientFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getIngredient()[0];
    return firstCodeableConcept === undefined ? this.addIngredient() : firstCodeableConcept;
  }

  /** General characteristics of this item (0..*) Never undefined; an empty list is created when absent. */
  getProperty(): ManufacturedItemDefinitionProperty[] {
    if (this.property === undefined) {
      this.property = [];
    }
    return this.property;
  }

  setProperty(property: ManufacturedItemDefinitionProperty[] | undefined): this {
    return this.setFieldValue('property', property);
  }

  hasProperty(): boolean {
    return this.hasFieldValue('property');
  }

  /** Appends a new, empty ManufacturedItemDefinitionProperty to `property` and returns it so it can be filled in. */
  addProperty(): ManufacturedItemDefinitionProperty;
  /** Appends the given ManufacturedItemDefinitionProperty to `property` and returns this object for chaining. */
  addProperty(manufacturedItemDefinitionProperty: ManufacturedItemDefinitionProperty): this;
  addProperty(
    manufacturedItemDefinitionProperty?: ManufacturedItemDefinitionProperty
  ): ManufacturedItemDefinitionProperty | this {
    if (manufacturedItemDefinitionProperty !== undefined) {
      return this.addFieldValue('property', manufacturedItemDefinitionProperty);
    }
    const createdManufacturedItemDefinitionProperty = new ManufacturedItemDefinitionProperty();
    this.addFieldValue('property', createdManufacturedItemDefinitionProperty);
    return createdManufacturedItemDefinitionProperty;
  }

  /** The first ManufacturedItemDefinitionProperty of `property`. One is added when the list is empty. */
  getPropertyFirstRep(): ManufacturedItemDefinitionProperty {
    const firstManufacturedItemDefinitionProperty = this.getProperty()[0];
    return firstManufacturedItemDefinitionProperty === undefined
      ? this.addProperty()
      : firstManufacturedItemDefinitionProperty;
  }

  /** Physical parts of the manufactured item, that it is intrisically made from. This is distinct from the ingredients that are part of its chemical makeup (0..*) Never undefined; an empty list is created when absent. */
  getComponent(): ManufacturedItemDefinitionComponent[] {
    if (this.component === undefined) {
      this.component = [];
    }
    return this.component;
  }

  setComponent(component: ManufacturedItemDefinitionComponent[] | undefined): this {
    return this.setFieldValue('component', component);
  }

  hasComponent(): boolean {
    return this.hasFieldValue('component');
  }

  /** Appends a new, empty ManufacturedItemDefinitionComponent to `component` and returns it so it can be filled in. */
  addComponent(): ManufacturedItemDefinitionComponent;
  /** Appends the given ManufacturedItemDefinitionComponent to `component` and returns this object for chaining. */
  addComponent(manufacturedItemDefinitionComponent: ManufacturedItemDefinitionComponent): this;
  addComponent(
    manufacturedItemDefinitionComponent?: ManufacturedItemDefinitionComponent
  ): ManufacturedItemDefinitionComponent | this {
    if (manufacturedItemDefinitionComponent !== undefined) {
      return this.addFieldValue('component', manufacturedItemDefinitionComponent);
    }
    const createdManufacturedItemDefinitionComponent = new ManufacturedItemDefinitionComponent();
    this.addFieldValue('component', createdManufacturedItemDefinitionComponent);
    return createdManufacturedItemDefinitionComponent;
  }

  /** The first ManufacturedItemDefinitionComponent of `component`. One is added when the list is empty. */
  getComponentFirstRep(): ManufacturedItemDefinitionComponent {
    const firstManufacturedItemDefinitionComponent = this.getComponent()[0];
    return firstManufacturedItemDefinitionComponent === undefined
      ? this.addComponent()
      : firstManufacturedItemDefinitionComponent;
  }
}

modelTypeRegistry.register('ManufacturedItemDefinition', ManufacturedItemDefinition, true);

/** True when the value is a ManufacturedItemDefinition model instance. */
export function isManufacturedItemDefinition(
  candidate: unknown
): candidate is ManufacturedItemDefinition {
  return candidate instanceof ManufacturedItemDefinition;
}

/**
 * General characteristics of this item
 */
export class ManufacturedItemDefinitionProperty extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'value',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'valueCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'valueQuantity', typeCode: 'Quantity' },
        { jsonKey: 'valueDate', typeCode: 'date' },
        { jsonKey: 'valueBoolean', typeCode: 'boolean' },
        { jsonKey: 'valueMarkdown', typeCode: 'markdown' },
        { jsonKey: 'valueAttachment', typeCode: 'Attachment' },
        { jsonKey: 'valueReference', typeCode: 'Reference', targetResourceTypes: ['Binary'] },
      ],
    },
  ];

  /** A code expressing the type of characteristic (1..1) */
  type?: CodeableConcept;

  /** A value for the characteristic (0..1) */
  valueCodeableConcept?: CodeableConcept;
  /** A value for the characteristic (0..1) */
  valueQuantity?: Quantity;
  /** A value for the characteristic (0..1) */
  valueDate?: string;
  /** Id and extensions of the primitive `valueDate`. */
  _valueDate?: Element;
  /** A value for the characteristic (0..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** A value for the characteristic (0..1) */
  valueMarkdown?: string;
  /** Id and extensions of the primitive `valueMarkdown`. */
  _valueMarkdown?: Element;
  /** A value for the characteristic (0..1) */
  valueAttachment?: Attachment;
  /** A value for the characteristic (0..1) */
  valueReference?: Reference;

  override fhirType(): string {
    return 'ManufacturedItemDefinition.property';
  }

  /** FHIR JSON for this ManufacturedItemDefinitionProperty, typed as the plain `ManufacturedItemDefinitionProperty` data type. */
  override toJSON(): plainTypes.ManufacturedItemDefinitionProperty {
    return this.serialize() as plainTypes.ManufacturedItemDefinitionProperty;
  }

  /** A code expressing the type of characteristic (1..1) Created when absent. */
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

  /** A value for the characteristic (0..1) Whichever type of `value[x]` is set. */
  getValue(): CodeableConcept | Quantity | string | boolean | Attachment | Reference | undefined {
    return this.getChoiceValue<
      CodeableConcept | Quantity | string | boolean | Attachment | Reference
    >('value');
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

  getValueDate(): string | undefined {
    return this.valueDate;
  }

  /** Sets `value[x]` as date and clears every other type of it. */
  setValueDate(valueDate: string | undefined): this {
    return this.setFieldValue('valueDate', valueDate);
  }

  hasValueDate(): boolean {
    return this.hasFieldValue('valueDate');
  }

  getValueBoolean(): boolean | undefined {
    return this.valueBoolean;
  }

  /** Sets `value[x]` as boolean and clears every other type of it. */
  setValueBoolean(valueBoolean: boolean | undefined): this {
    return this.setFieldValue('valueBoolean', valueBoolean);
  }

  hasValueBoolean(): boolean {
    return this.hasFieldValue('valueBoolean');
  }

  getValueMarkdown(): string | undefined {
    return this.valueMarkdown;
  }

  /** Sets `value[x]` as markdown and clears every other type of it. */
  setValueMarkdown(valueMarkdown: string | undefined): this {
    return this.setFieldValue('valueMarkdown', valueMarkdown);
  }

  hasValueMarkdown(): boolean {
    return this.hasFieldValue('valueMarkdown');
  }

  getValueAttachment(): Attachment | undefined {
    return this.valueAttachment;
  }

  /** Sets `value[x]` as Attachment and clears every other type of it. */
  setValueAttachment(valueAttachment: Attachment | undefined): this {
    return this.setFieldValue('valueAttachment', valueAttachment);
  }

  hasValueAttachment(): boolean {
    return this.hasFieldValue('valueAttachment');
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

modelTypeRegistry.register(
  'ManufacturedItemDefinitionProperty',
  ManufacturedItemDefinitionProperty,
  false
);

/**
 * Physical parts of the manufactured item, that it is intrisically made from. This is distinct from the ingredients that are part of its chemical makeup
 */
export class ManufacturedItemDefinitionComponent extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'function',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'function', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'amount',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'amount', typeCode: 'Quantity' }],
    },
    {
      elementName: 'constituent',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'constituent', typeCode: 'ManufacturedItemDefinitionComponentConstituent' },
      ],
    },
    {
      elementName: 'property',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'property', typeCode: 'ManufacturedItemDefinitionProperty' }],
    },
    {
      elementName: 'component',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'component', typeCode: 'ManufacturedItemDefinitionComponent' }],
    },
  ];

  /** Defining type of the component e.g. shell, layer, ink (1..1) */
  type?: CodeableConcept;

  /** The function of this component within the item e.g. delivers active ingredient, masks taste (0..*) */
  function?: CodeableConcept[];

  /** The measurable amount of total quantity of all substances in the component, expressable in different ways (e.g. by mass or volume) (0..*) */
  amount?: Quantity[];

  /** A reference to a constituent of the manufactured item as a whole, linked here so that its component location within the item can be indicated. This not where the item's ingredient are primarily stated (for which see Ingredient.for or ManufacturedItemDefinition.ingredient) (0..*) */
  constituent?: ManufacturedItemDefinitionComponentConstituent[];

  /** General characteristics of this component (0..*) */
  property?: ManufacturedItemDefinitionProperty[];

  /** A component that this component contains or is made from (0..*) */
  component?: ManufacturedItemDefinitionComponent[];

  override fhirType(): string {
    return 'ManufacturedItemDefinition.component';
  }

  /** FHIR JSON for this ManufacturedItemDefinitionComponent, typed as the plain `ManufacturedItemDefinitionComponent` data type. */
  override toJSON(): plainTypes.ManufacturedItemDefinitionComponent {
    return this.serialize() as plainTypes.ManufacturedItemDefinitionComponent;
  }

  /** Defining type of the component e.g. shell, layer, ink (1..1) Created when absent. */
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

  /** The function of this component within the item e.g. delivers active ingredient, masks taste (0..*) Never undefined; an empty list is created when absent. */
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

  /** The measurable amount of total quantity of all substances in the component, expressable in different ways (e.g. by mass or volume) (0..*) Never undefined; an empty list is created when absent. */
  getAmount(): Quantity[] {
    if (this.amount === undefined) {
      this.amount = [];
    }
    return this.amount;
  }

  setAmount(amount: Quantity[] | undefined): this {
    return this.setFieldValue('amount', amount);
  }

  hasAmount(): boolean {
    return this.hasFieldValue('amount');
  }

  /** Appends a new, empty Quantity to `amount` and returns it so it can be filled in. */
  addAmount(): Quantity;
  /** Appends the given Quantity to `amount` and returns this object for chaining. */
  addAmount(quantity: Quantity): this;
  addAmount(quantity?: Quantity): Quantity | this {
    if (quantity !== undefined) {
      return this.addFieldValue('amount', quantity);
    }
    const createdQuantity = new Quantity();
    this.addFieldValue('amount', createdQuantity);
    return createdQuantity;
  }

  /** The first Quantity of `amount`. One is added when the list is empty. */
  getAmountFirstRep(): Quantity {
    const firstQuantity = this.getAmount()[0];
    return firstQuantity === undefined ? this.addAmount() : firstQuantity;
  }

  /** A reference to a constituent of the manufactured item as a whole, linked here so that its component location within the item can be indicated. This not where the item's ingredient are primarily stated (for which see Ingredient.for or ManufacturedItemDefinition.ingredient) (0..*) Never undefined; an empty list is created when absent. */
  getConstituent(): ManufacturedItemDefinitionComponentConstituent[] {
    if (this.constituent === undefined) {
      this.constituent = [];
    }
    return this.constituent;
  }

  setConstituent(constituent: ManufacturedItemDefinitionComponentConstituent[] | undefined): this {
    return this.setFieldValue('constituent', constituent);
  }

  hasConstituent(): boolean {
    return this.hasFieldValue('constituent');
  }

  /** Appends a new, empty ManufacturedItemDefinitionComponentConstituent to `constituent` and returns it so it can be filled in. */
  addConstituent(): ManufacturedItemDefinitionComponentConstituent;
  /** Appends the given ManufacturedItemDefinitionComponentConstituent to `constituent` and returns this object for chaining. */
  addConstituent(
    manufacturedItemDefinitionComponentConstituent: ManufacturedItemDefinitionComponentConstituent
  ): this;
  addConstituent(
    manufacturedItemDefinitionComponentConstituent?: ManufacturedItemDefinitionComponentConstituent
  ): ManufacturedItemDefinitionComponentConstituent | this {
    if (manufacturedItemDefinitionComponentConstituent !== undefined) {
      return this.addFieldValue('constituent', manufacturedItemDefinitionComponentConstituent);
    }
    const createdManufacturedItemDefinitionComponentConstituent =
      new ManufacturedItemDefinitionComponentConstituent();
    this.addFieldValue('constituent', createdManufacturedItemDefinitionComponentConstituent);
    return createdManufacturedItemDefinitionComponentConstituent;
  }

  /** The first ManufacturedItemDefinitionComponentConstituent of `constituent`. One is added when the list is empty. */
  getConstituentFirstRep(): ManufacturedItemDefinitionComponentConstituent {
    const firstManufacturedItemDefinitionComponentConstituent = this.getConstituent()[0];
    return firstManufacturedItemDefinitionComponentConstituent === undefined
      ? this.addConstituent()
      : firstManufacturedItemDefinitionComponentConstituent;
  }

  /** General characteristics of this component (0..*) Never undefined; an empty list is created when absent. */
  getProperty(): ManufacturedItemDefinitionProperty[] {
    if (this.property === undefined) {
      this.property = [];
    }
    return this.property;
  }

  setProperty(property: ManufacturedItemDefinitionProperty[] | undefined): this {
    return this.setFieldValue('property', property);
  }

  hasProperty(): boolean {
    return this.hasFieldValue('property');
  }

  /** Appends a new, empty ManufacturedItemDefinitionProperty to `property` and returns it so it can be filled in. */
  addProperty(): ManufacturedItemDefinitionProperty;
  /** Appends the given ManufacturedItemDefinitionProperty to `property` and returns this object for chaining. */
  addProperty(manufacturedItemDefinitionProperty: ManufacturedItemDefinitionProperty): this;
  addProperty(
    manufacturedItemDefinitionProperty?: ManufacturedItemDefinitionProperty
  ): ManufacturedItemDefinitionProperty | this {
    if (manufacturedItemDefinitionProperty !== undefined) {
      return this.addFieldValue('property', manufacturedItemDefinitionProperty);
    }
    const createdManufacturedItemDefinitionProperty = new ManufacturedItemDefinitionProperty();
    this.addFieldValue('property', createdManufacturedItemDefinitionProperty);
    return createdManufacturedItemDefinitionProperty;
  }

  /** The first ManufacturedItemDefinitionProperty of `property`. One is added when the list is empty. */
  getPropertyFirstRep(): ManufacturedItemDefinitionProperty {
    const firstManufacturedItemDefinitionProperty = this.getProperty()[0];
    return firstManufacturedItemDefinitionProperty === undefined
      ? this.addProperty()
      : firstManufacturedItemDefinitionProperty;
  }

  /** A component that this component contains or is made from (0..*) Never undefined; an empty list is created when absent. */
  getComponent(): ManufacturedItemDefinitionComponent[] {
    if (this.component === undefined) {
      this.component = [];
    }
    return this.component;
  }

  setComponent(component: ManufacturedItemDefinitionComponent[] | undefined): this {
    return this.setFieldValue('component', component);
  }

  hasComponent(): boolean {
    return this.hasFieldValue('component');
  }

  /** Appends a new, empty ManufacturedItemDefinitionComponent to `component` and returns it so it can be filled in. */
  addComponent(): ManufacturedItemDefinitionComponent;
  /** Appends the given ManufacturedItemDefinitionComponent to `component` and returns this object for chaining. */
  addComponent(manufacturedItemDefinitionComponent: ManufacturedItemDefinitionComponent): this;
  addComponent(
    manufacturedItemDefinitionComponent?: ManufacturedItemDefinitionComponent
  ): ManufacturedItemDefinitionComponent | this {
    if (manufacturedItemDefinitionComponent !== undefined) {
      return this.addFieldValue('component', manufacturedItemDefinitionComponent);
    }
    const createdManufacturedItemDefinitionComponent = new ManufacturedItemDefinitionComponent();
    this.addFieldValue('component', createdManufacturedItemDefinitionComponent);
    return createdManufacturedItemDefinitionComponent;
  }

  /** The first ManufacturedItemDefinitionComponent of `component`. One is added when the list is empty. */
  getComponentFirstRep(): ManufacturedItemDefinitionComponent {
    const firstManufacturedItemDefinitionComponent = this.getComponent()[0];
    return firstManufacturedItemDefinitionComponent === undefined
      ? this.addComponent()
      : firstManufacturedItemDefinitionComponent;
  }
}

modelTypeRegistry.register(
  'ManufacturedItemDefinitionComponent',
  ManufacturedItemDefinitionComponent,
  false
);

/**
 * A reference to a constituent of the manufactured item as a whole, linked here so that its component location within the item can be indicated. This not where the item's ingredient are primarily stated (for which see Ingredient.for or ManufacturedItemDefinition.ingredient)
 */
export class ManufacturedItemDefinitionComponentConstituent extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'amount',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'amount', typeCode: 'Quantity' }],
    },
    {
      elementName: 'location',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'location', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'function',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'function', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'hasIngredient',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'hasIngredient', typeCode: 'CodeableReference' }],
    },
  ];

  /** The measurable amount of the substance, expressable in different ways (e.g. by mass or volume) (0..*) */
  amount?: Quantity[];

  /** The physical location of the constituent/ingredient within the component (0..*) */
  location?: CodeableConcept[];

  /** The function of this constituent within the component e.g. binder (0..*) */
  function?: CodeableConcept[];

  /** The ingredient that is the constituent of the given component (0..*) */
  hasIngredient?: CodeableReference[];

  override fhirType(): string {
    return 'ManufacturedItemDefinition.component.constituent';
  }

  /** FHIR JSON for this ManufacturedItemDefinitionComponentConstituent, typed as the plain `ManufacturedItemDefinitionConstituent` data type. */
  override toJSON(): plainTypes.ManufacturedItemDefinitionConstituent {
    return this.serialize() as plainTypes.ManufacturedItemDefinitionConstituent;
  }

  /** The measurable amount of the substance, expressable in different ways (e.g. by mass or volume) (0..*) Never undefined; an empty list is created when absent. */
  getAmount(): Quantity[] {
    if (this.amount === undefined) {
      this.amount = [];
    }
    return this.amount;
  }

  setAmount(amount: Quantity[] | undefined): this {
    return this.setFieldValue('amount', amount);
  }

  hasAmount(): boolean {
    return this.hasFieldValue('amount');
  }

  /** Appends a new, empty Quantity to `amount` and returns it so it can be filled in. */
  addAmount(): Quantity;
  /** Appends the given Quantity to `amount` and returns this object for chaining. */
  addAmount(quantity: Quantity): this;
  addAmount(quantity?: Quantity): Quantity | this {
    if (quantity !== undefined) {
      return this.addFieldValue('amount', quantity);
    }
    const createdQuantity = new Quantity();
    this.addFieldValue('amount', createdQuantity);
    return createdQuantity;
  }

  /** The first Quantity of `amount`. One is added when the list is empty. */
  getAmountFirstRep(): Quantity {
    const firstQuantity = this.getAmount()[0];
    return firstQuantity === undefined ? this.addAmount() : firstQuantity;
  }

  /** The physical location of the constituent/ingredient within the component (0..*) Never undefined; an empty list is created when absent. */
  getLocation(): CodeableConcept[] {
    if (this.location === undefined) {
      this.location = [];
    }
    return this.location;
  }

  setLocation(location: CodeableConcept[] | undefined): this {
    return this.setFieldValue('location', location);
  }

  hasLocation(): boolean {
    return this.hasFieldValue('location');
  }

  /** Appends a new, empty CodeableConcept to `location` and returns it so it can be filled in. */
  addLocation(): CodeableConcept;
  /** Appends the given CodeableConcept to `location` and returns this object for chaining. */
  addLocation(codeableConcept: CodeableConcept): this;
  addLocation(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('location', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('location', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `location`. One is added when the list is empty. */
  getLocationFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getLocation()[0];
    return firstCodeableConcept === undefined ? this.addLocation() : firstCodeableConcept;
  }

  /** The function of this constituent within the component e.g. binder (0..*) Never undefined; an empty list is created when absent. */
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

  /** The ingredient that is the constituent of the given component (0..*) Never undefined; an empty list is created when absent. */
  getHasIngredient(): CodeableReference[] {
    if (this.hasIngredient === undefined) {
      this.hasIngredient = [];
    }
    return this.hasIngredient;
  }

  setHasIngredient(hasIngredient: CodeableReference[] | undefined): this {
    return this.setFieldValue('hasIngredient', hasIngredient);
  }

  hasHasIngredient(): boolean {
    return this.hasFieldValue('hasIngredient');
  }

  /** Appends a new, empty CodeableReference to `hasIngredient` and returns it so it can be filled in. */
  addHasIngredient(): CodeableReference;
  /** Appends the given CodeableReference to `hasIngredient` and returns this object for chaining. */
  addHasIngredient(codeableReference: CodeableReference): this;
  addHasIngredient(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('hasIngredient', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('hasIngredient', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `hasIngredient`. One is added when the list is empty. */
  getHasIngredientFirstRep(): CodeableReference {
    const firstCodeableReference = this.getHasIngredient()[0];
    return firstCodeableReference === undefined ? this.addHasIngredient() : firstCodeableReference;
  }
}

modelTypeRegistry.register(
  'ManufacturedItemDefinitionComponentConstituent',
  ManufacturedItemDefinitionComponentConstituent,
  false
);
