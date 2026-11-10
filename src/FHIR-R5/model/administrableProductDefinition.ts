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
import { DomainResource } from './domainResource';
import { Duration } from './duration';
import { Element } from './element';
import { Identifier } from './identifier';
import { Quantity } from './quantity';
import { Ratio } from './ratio';
import { Reference } from './reference';

/**
 * A medicinal product in the final form which is suitable for administering to a patient (after any mixing of multiple components, dissolution etc. has been performed).
 */
export class AdministrableProductDefinition extends DomainResource {
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
      elementName: 'formOf',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'formOf',
          typeCode: 'Reference',
          targetResourceTypes: ['MedicinalProductDefinition'],
        },
      ],
    },
    {
      elementName: 'administrableDoseForm',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'administrableDoseForm', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'unitOfPresentation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'unitOfPresentation', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'producedFrom',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'producedFrom',
          typeCode: 'Reference',
          targetResourceTypes: ['ManufacturedItemDefinition'],
        },
      ],
    },
    {
      elementName: 'ingredient',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'ingredient', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'device',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'device', typeCode: 'Reference', targetResourceTypes: ['DeviceDefinition'] },
      ],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'property',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'property', typeCode: 'AdministrableProductDefinitionProperty' }],
    },
    {
      elementName: 'routeOfAdministration',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'routeOfAdministration',
          typeCode: 'AdministrableProductDefinitionRouteOfAdministration',
        },
      ],
    },
  ];

  readonly resourceType = 'AdministrableProductDefinition';

  /** An identifier for the administrable product (0..*) */
  identifier?: Identifier[];

  /** draft | active | retired | unknown (1..1) */
  status?: valueSetCodes.PublicationStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** References a product from which one or more of the constituent parts of that product can be prepared and used as described by this administrable product (0..*) */
  formOf?: Reference[];

  /** The dose form of the final product after necessary reconstitution or processing (0..1) */
  administrableDoseForm?: CodeableConcept;

  /** The presentation type in which this item is given to a patient. e.g. for a spray - 'puff' (0..1) */
  unitOfPresentation?: CodeableConcept;

  /** Indicates the specific manufactured items that are part of the 'formOf' product that are used in the preparation of this specific administrable form (0..*) */
  producedFrom?: Reference[];

  /** The ingredients of this administrable medicinal product. This is only needed if the ingredients are not specified either using ManufacturedItemDefiniton, or using by incoming references from the Ingredient resource (0..*) */
  ingredient?: CodeableConcept[];

  /** A device that is integral to the medicinal product, in effect being considered as an "ingredient" of the medicinal product (0..1) */
  device?: Reference;

  /** A general description of the product, when in its final form, suitable for administration e.g. effervescent blue liquid, to be swallowed (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Characteristics e.g. a product's onset of action (0..*) */
  property?: AdministrableProductDefinitionProperty[];

  /** The path by which the product is taken into or makes contact with the body (1..*) */
  routeOfAdministration?: AdministrableProductDefinitionRouteOfAdministration[];

  override fhirType(): string {
    return 'AdministrableProductDefinition';
  }

  /** FHIR JSON for this AdministrableProductDefinition, typed as the plain `AdministrableProductDefinition` data type. */
  override toJSON(): plainTypes.AdministrableProductDefinition {
    return this.serialize() as plainTypes.AdministrableProductDefinition;
  }

  /** An identifier for the administrable product (0..*) Never undefined; an empty list is created when absent. */
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

  /** References a product from which one or more of the constituent parts of that product can be prepared and used as described by this administrable product (0..*) Never undefined; an empty list is created when absent. */
  getFormOf(): Reference[] {
    if (this.formOf === undefined) {
      this.formOf = [];
    }
    return this.formOf;
  }

  setFormOf(formOf: Reference[] | undefined): this {
    return this.setFieldValue('formOf', formOf);
  }

  hasFormOf(): boolean {
    return this.hasFieldValue('formOf');
  }

  /** Appends a new, empty Reference to `formOf` and returns it so it can be filled in. */
  addFormOf(): Reference;
  /** Appends the given Reference to `formOf` and returns this object for chaining. */
  addFormOf(reference: Reference): this;
  addFormOf(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('formOf', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('formOf', createdReference);
    return createdReference;
  }

  /** The first Reference of `formOf`. One is added when the list is empty. */
  getFormOfFirstRep(): Reference {
    const firstReference = this.getFormOf()[0];
    return firstReference === undefined ? this.addFormOf() : firstReference;
  }

  /** The dose form of the final product after necessary reconstitution or processing (0..1) Created when absent. */
  getAdministrableDoseForm(): CodeableConcept {
    if (this.administrableDoseForm === undefined) {
      this.administrableDoseForm = new CodeableConcept();
    }
    return this.administrableDoseForm;
  }

  setAdministrableDoseForm(administrableDoseForm: CodeableConcept | undefined): this {
    return this.setFieldValue('administrableDoseForm', administrableDoseForm);
  }

  hasAdministrableDoseForm(): boolean {
    return this.hasFieldValue('administrableDoseForm');
  }

  /** The presentation type in which this item is given to a patient. e.g. for a spray - 'puff' (0..1) Created when absent. */
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

  /** Indicates the specific manufactured items that are part of the 'formOf' product that are used in the preparation of this specific administrable form (0..*) Never undefined; an empty list is created when absent. */
  getProducedFrom(): Reference[] {
    if (this.producedFrom === undefined) {
      this.producedFrom = [];
    }
    return this.producedFrom;
  }

  setProducedFrom(producedFrom: Reference[] | undefined): this {
    return this.setFieldValue('producedFrom', producedFrom);
  }

  hasProducedFrom(): boolean {
    return this.hasFieldValue('producedFrom');
  }

  /** Appends a new, empty Reference to `producedFrom` and returns it so it can be filled in. */
  addProducedFrom(): Reference;
  /** Appends the given Reference to `producedFrom` and returns this object for chaining. */
  addProducedFrom(reference: Reference): this;
  addProducedFrom(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('producedFrom', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('producedFrom', createdReference);
    return createdReference;
  }

  /** The first Reference of `producedFrom`. One is added when the list is empty. */
  getProducedFromFirstRep(): Reference {
    const firstReference = this.getProducedFrom()[0];
    return firstReference === undefined ? this.addProducedFrom() : firstReference;
  }

  /** The ingredients of this administrable medicinal product. This is only needed if the ingredients are not specified either using ManufacturedItemDefiniton, or using by incoming references from the Ingredient resource (0..*) Never undefined; an empty list is created when absent. */
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

  /** A device that is integral to the medicinal product, in effect being considered as an "ingredient" of the medicinal product (0..1) Created when absent. */
  getDevice(): Reference {
    if (this.device === undefined) {
      this.device = new Reference();
    }
    return this.device;
  }

  setDevice(device: Reference | undefined): this {
    return this.setFieldValue('device', device);
  }

  hasDevice(): boolean {
    return this.hasFieldValue('device');
  }

  /** A general description of the product, when in its final form, suitable for administration e.g. effervescent blue liquid, to be swallowed (0..1) */
  getDescription(): string | undefined {
    return this.description;
  }

  /** Sets `description`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setDescription(description: string | undefined): this {
    return this.setFieldValue('description', description);
  }

  hasDescription(): boolean {
    return this.hasFieldValue('description');
  }

  /** The element carrying the id and extensions of `description`. Created when absent. */
  getDescriptionElement(): Element {
    if (this._description === undefined) {
      this._description = new Element();
    }
    return this._description;
  }

  setDescriptionElement(descriptionElement: Element | undefined): this {
    this._description = descriptionElement;
    return this;
  }

  /** Characteristics e.g. a product's onset of action (0..*) Never undefined; an empty list is created when absent. */
  getProperty(): AdministrableProductDefinitionProperty[] {
    if (this.property === undefined) {
      this.property = [];
    }
    return this.property;
  }

  setProperty(property: AdministrableProductDefinitionProperty[] | undefined): this {
    return this.setFieldValue('property', property);
  }

  hasProperty(): boolean {
    return this.hasFieldValue('property');
  }

  /** Appends a new, empty AdministrableProductDefinitionProperty to `property` and returns it so it can be filled in. */
  addProperty(): AdministrableProductDefinitionProperty;
  /** Appends the given AdministrableProductDefinitionProperty to `property` and returns this object for chaining. */
  addProperty(administrableProductDefinitionProperty: AdministrableProductDefinitionProperty): this;
  addProperty(
    administrableProductDefinitionProperty?: AdministrableProductDefinitionProperty
  ): AdministrableProductDefinitionProperty | this {
    if (administrableProductDefinitionProperty !== undefined) {
      return this.addFieldValue('property', administrableProductDefinitionProperty);
    }
    const createdAdministrableProductDefinitionProperty =
      new AdministrableProductDefinitionProperty();
    this.addFieldValue('property', createdAdministrableProductDefinitionProperty);
    return createdAdministrableProductDefinitionProperty;
  }

  /** The first AdministrableProductDefinitionProperty of `property`. One is added when the list is empty. */
  getPropertyFirstRep(): AdministrableProductDefinitionProperty {
    const firstAdministrableProductDefinitionProperty = this.getProperty()[0];
    return firstAdministrableProductDefinitionProperty === undefined
      ? this.addProperty()
      : firstAdministrableProductDefinitionProperty;
  }

  /** The path by which the product is taken into or makes contact with the body (1..*) Never undefined; an empty list is created when absent. */
  getRouteOfAdministration(): AdministrableProductDefinitionRouteOfAdministration[] {
    if (this.routeOfAdministration === undefined) {
      this.routeOfAdministration = [];
    }
    return this.routeOfAdministration;
  }

  setRouteOfAdministration(
    routeOfAdministration: AdministrableProductDefinitionRouteOfAdministration[] | undefined
  ): this {
    return this.setFieldValue('routeOfAdministration', routeOfAdministration);
  }

  hasRouteOfAdministration(): boolean {
    return this.hasFieldValue('routeOfAdministration');
  }

  /** Appends a new, empty AdministrableProductDefinitionRouteOfAdministration to `routeOfAdministration` and returns it so it can be filled in. */
  addRouteOfAdministration(): AdministrableProductDefinitionRouteOfAdministration;
  /** Appends the given AdministrableProductDefinitionRouteOfAdministration to `routeOfAdministration` and returns this object for chaining. */
  addRouteOfAdministration(
    administrableProductDefinitionRouteOfAdministration: AdministrableProductDefinitionRouteOfAdministration
  ): this;
  addRouteOfAdministration(
    administrableProductDefinitionRouteOfAdministration?: AdministrableProductDefinitionRouteOfAdministration
  ): AdministrableProductDefinitionRouteOfAdministration | this {
    if (administrableProductDefinitionRouteOfAdministration !== undefined) {
      return this.addFieldValue(
        'routeOfAdministration',
        administrableProductDefinitionRouteOfAdministration
      );
    }
    const createdAdministrableProductDefinitionRouteOfAdministration =
      new AdministrableProductDefinitionRouteOfAdministration();
    this.addFieldValue(
      'routeOfAdministration',
      createdAdministrableProductDefinitionRouteOfAdministration
    );
    return createdAdministrableProductDefinitionRouteOfAdministration;
  }

  /** The first AdministrableProductDefinitionRouteOfAdministration of `routeOfAdministration`. One is added when the list is empty. */
  getRouteOfAdministrationFirstRep(): AdministrableProductDefinitionRouteOfAdministration {
    const firstAdministrableProductDefinitionRouteOfAdministration =
      this.getRouteOfAdministration()[0];
    return firstAdministrableProductDefinitionRouteOfAdministration === undefined
      ? this.addRouteOfAdministration()
      : firstAdministrableProductDefinitionRouteOfAdministration;
  }
}

modelTypeRegistry.register('AdministrableProductDefinition', AdministrableProductDefinition, true);

/** True when the value is a AdministrableProductDefinition model instance. */
export function isAdministrableProductDefinition(
  candidate: unknown
): candidate is AdministrableProductDefinition {
  return candidate instanceof AdministrableProductDefinition;
}

/**
 * Characteristics e.g. a product's onset of action
 */
export class AdministrableProductDefinitionProperty extends BackboneElement {
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
    {
      elementName: 'status',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'status', typeCode: 'CodeableConcept' }],
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

  /** The status of characteristic e.g. assigned or pending (0..1) */
  status?: CodeableConcept;

  override fhirType(): string {
    return 'AdministrableProductDefinition.property';
  }

  /** FHIR JSON for this AdministrableProductDefinitionProperty, typed as the plain `AdministrableProductDefinitionProperty` data type. */
  override toJSON(): plainTypes.AdministrableProductDefinitionProperty {
    return this.serialize() as plainTypes.AdministrableProductDefinitionProperty;
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

  /** The status of characteristic e.g. assigned or pending (0..1) Created when absent. */
  getStatus(): CodeableConcept {
    if (this.status === undefined) {
      this.status = new CodeableConcept();
    }
    return this.status;
  }

  setStatus(status: CodeableConcept | undefined): this {
    return this.setFieldValue('status', status);
  }

  hasStatus(): boolean {
    return this.hasFieldValue('status');
  }
}

modelTypeRegistry.register(
  'AdministrableProductDefinitionProperty',
  AdministrableProductDefinitionProperty,
  false
);

/**
 * The path by which the product is taken into or makes contact with the body
 */
export class AdministrableProductDefinitionRouteOfAdministration extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'firstDose',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'firstDose', typeCode: 'Quantity' }],
    },
    {
      elementName: 'maxSingleDose',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'maxSingleDose', typeCode: 'Quantity' }],
    },
    {
      elementName: 'maxDosePerDay',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'maxDosePerDay', typeCode: 'Quantity' }],
    },
    {
      elementName: 'maxDosePerTreatmentPeriod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'maxDosePerTreatmentPeriod', typeCode: 'Ratio' }],
    },
    {
      elementName: 'maxTreatmentPeriod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'maxTreatmentPeriod', typeCode: 'Duration' }],
    },
    {
      elementName: 'targetSpecies',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'targetSpecies',
          typeCode: 'AdministrableProductDefinitionRouteOfAdministrationTargetSpecies',
        },
      ],
    },
  ];

  /** Coded expression for the route (1..1) */
  code?: CodeableConcept;

  /** The first dose (dose quantity) administered can be specified for the product (0..1) */
  firstDose?: Quantity;

  /** The maximum single dose that can be administered (0..1) */
  maxSingleDose?: Quantity;

  /** The maximum dose quantity to be administered in any one 24-h period (0..1) */
  maxDosePerDay?: Quantity;

  /** The maximum dose per treatment period that can be administered (0..1) */
  maxDosePerTreatmentPeriod?: Ratio;

  /** The maximum treatment period during which the product can be administered (0..1) */
  maxTreatmentPeriod?: Duration;

  /** A species for which this route applies (0..*) */
  targetSpecies?: AdministrableProductDefinitionRouteOfAdministrationTargetSpecies[];

  override fhirType(): string {
    return 'AdministrableProductDefinition.routeOfAdministration';
  }

  /** FHIR JSON for this AdministrableProductDefinitionRouteOfAdministration, typed as the plain `AdministrableProductDefinitionRouteOfAdministration` data type. */
  override toJSON(): plainTypes.AdministrableProductDefinitionRouteOfAdministration {
    return this.serialize() as plainTypes.AdministrableProductDefinitionRouteOfAdministration;
  }

  /** Coded expression for the route (1..1) Created when absent. */
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

  /** The first dose (dose quantity) administered can be specified for the product (0..1) Created when absent. */
  getFirstDose(): Quantity {
    if (this.firstDose === undefined) {
      this.firstDose = new Quantity();
    }
    return this.firstDose;
  }

  setFirstDose(firstDose: Quantity | undefined): this {
    return this.setFieldValue('firstDose', firstDose);
  }

  hasFirstDose(): boolean {
    return this.hasFieldValue('firstDose');
  }

  /** The maximum single dose that can be administered (0..1) Created when absent. */
  getMaxSingleDose(): Quantity {
    if (this.maxSingleDose === undefined) {
      this.maxSingleDose = new Quantity();
    }
    return this.maxSingleDose;
  }

  setMaxSingleDose(maxSingleDose: Quantity | undefined): this {
    return this.setFieldValue('maxSingleDose', maxSingleDose);
  }

  hasMaxSingleDose(): boolean {
    return this.hasFieldValue('maxSingleDose');
  }

  /** The maximum dose quantity to be administered in any one 24-h period (0..1) Created when absent. */
  getMaxDosePerDay(): Quantity {
    if (this.maxDosePerDay === undefined) {
      this.maxDosePerDay = new Quantity();
    }
    return this.maxDosePerDay;
  }

  setMaxDosePerDay(maxDosePerDay: Quantity | undefined): this {
    return this.setFieldValue('maxDosePerDay', maxDosePerDay);
  }

  hasMaxDosePerDay(): boolean {
    return this.hasFieldValue('maxDosePerDay');
  }

  /** The maximum dose per treatment period that can be administered (0..1) Created when absent. */
  getMaxDosePerTreatmentPeriod(): Ratio {
    if (this.maxDosePerTreatmentPeriod === undefined) {
      this.maxDosePerTreatmentPeriod = new Ratio();
    }
    return this.maxDosePerTreatmentPeriod;
  }

  setMaxDosePerTreatmentPeriod(maxDosePerTreatmentPeriod: Ratio | undefined): this {
    return this.setFieldValue('maxDosePerTreatmentPeriod', maxDosePerTreatmentPeriod);
  }

  hasMaxDosePerTreatmentPeriod(): boolean {
    return this.hasFieldValue('maxDosePerTreatmentPeriod');
  }

  /** The maximum treatment period during which the product can be administered (0..1) Created when absent. */
  getMaxTreatmentPeriod(): Duration {
    if (this.maxTreatmentPeriod === undefined) {
      this.maxTreatmentPeriod = new Duration();
    }
    return this.maxTreatmentPeriod;
  }

  setMaxTreatmentPeriod(maxTreatmentPeriod: Duration | undefined): this {
    return this.setFieldValue('maxTreatmentPeriod', maxTreatmentPeriod);
  }

  hasMaxTreatmentPeriod(): boolean {
    return this.hasFieldValue('maxTreatmentPeriod');
  }

  /** A species for which this route applies (0..*) Never undefined; an empty list is created when absent. */
  getTargetSpecies(): AdministrableProductDefinitionRouteOfAdministrationTargetSpecies[] {
    if (this.targetSpecies === undefined) {
      this.targetSpecies = [];
    }
    return this.targetSpecies;
  }

  setTargetSpecies(
    targetSpecies: AdministrableProductDefinitionRouteOfAdministrationTargetSpecies[] | undefined
  ): this {
    return this.setFieldValue('targetSpecies', targetSpecies);
  }

  hasTargetSpecies(): boolean {
    return this.hasFieldValue('targetSpecies');
  }

  /** Appends a new, empty AdministrableProductDefinitionRouteOfAdministrationTargetSpecies to `targetSpecies` and returns it so it can be filled in. */
  addTargetSpecies(): AdministrableProductDefinitionRouteOfAdministrationTargetSpecies;
  /** Appends the given AdministrableProductDefinitionRouteOfAdministrationTargetSpecies to `targetSpecies` and returns this object for chaining. */
  addTargetSpecies(
    administrableProductDefinitionRouteOfAdministrationTargetSpecies: AdministrableProductDefinitionRouteOfAdministrationTargetSpecies
  ): this;
  addTargetSpecies(
    administrableProductDefinitionRouteOfAdministrationTargetSpecies?: AdministrableProductDefinitionRouteOfAdministrationTargetSpecies
  ): AdministrableProductDefinitionRouteOfAdministrationTargetSpecies | this {
    if (administrableProductDefinitionRouteOfAdministrationTargetSpecies !== undefined) {
      return this.addFieldValue(
        'targetSpecies',
        administrableProductDefinitionRouteOfAdministrationTargetSpecies
      );
    }
    const createdAdministrableProductDefinitionRouteOfAdministrationTargetSpecies =
      new AdministrableProductDefinitionRouteOfAdministrationTargetSpecies();
    this.addFieldValue(
      'targetSpecies',
      createdAdministrableProductDefinitionRouteOfAdministrationTargetSpecies
    );
    return createdAdministrableProductDefinitionRouteOfAdministrationTargetSpecies;
  }

  /** The first AdministrableProductDefinitionRouteOfAdministrationTargetSpecies of `targetSpecies`. One is added when the list is empty. */
  getTargetSpeciesFirstRep(): AdministrableProductDefinitionRouteOfAdministrationTargetSpecies {
    const firstAdministrableProductDefinitionRouteOfAdministrationTargetSpecies =
      this.getTargetSpecies()[0];
    return firstAdministrableProductDefinitionRouteOfAdministrationTargetSpecies === undefined
      ? this.addTargetSpecies()
      : firstAdministrableProductDefinitionRouteOfAdministrationTargetSpecies;
  }
}

modelTypeRegistry.register(
  'AdministrableProductDefinitionRouteOfAdministration',
  AdministrableProductDefinitionRouteOfAdministration,
  false
);

/**
 * A species for which this route applies
 */
export class AdministrableProductDefinitionRouteOfAdministrationTargetSpecies extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'withdrawalPeriod',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'withdrawalPeriod',
          typeCode:
            'AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod',
        },
      ],
    },
  ];

  /** Coded expression for the species (1..1) */
  code?: CodeableConcept;

  /** A species specific time during which consumption of animal product is not appropriate (0..*) */
  withdrawalPeriod?: AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod[];

  override fhirType(): string {
    return 'AdministrableProductDefinition.routeOfAdministration.targetSpecies';
  }

  /** FHIR JSON for this AdministrableProductDefinitionRouteOfAdministrationTargetSpecies, typed as the plain `AdministrableProductDefinitionTargetSpecies` data type. */
  override toJSON(): plainTypes.AdministrableProductDefinitionTargetSpecies {
    return this.serialize() as plainTypes.AdministrableProductDefinitionTargetSpecies;
  }

  /** Coded expression for the species (1..1) Created when absent. */
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

  /** A species specific time during which consumption of animal product is not appropriate (0..*) Never undefined; an empty list is created when absent. */
  getWithdrawalPeriod(): AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod[] {
    if (this.withdrawalPeriod === undefined) {
      this.withdrawalPeriod = [];
    }
    return this.withdrawalPeriod;
  }

  setWithdrawalPeriod(
    withdrawalPeriod:
      AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod[] | undefined
  ): this {
    return this.setFieldValue('withdrawalPeriod', withdrawalPeriod);
  }

  hasWithdrawalPeriod(): boolean {
    return this.hasFieldValue('withdrawalPeriod');
  }

  /** Appends a new, empty AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod to `withdrawalPeriod` and returns it so it can be filled in. */
  addWithdrawalPeriod(): AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod;
  /** Appends the given AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod to `withdrawalPeriod` and returns this object for chaining. */
  addWithdrawalPeriod(
    administrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod: AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod
  ): this;
  addWithdrawalPeriod(
    administrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod?: AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod
  ): AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod | this {
    if (
      administrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod !== undefined
    ) {
      return this.addFieldValue(
        'withdrawalPeriod',
        administrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod
      );
    }
    const createdAdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod =
      new AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod();
    this.addFieldValue(
      'withdrawalPeriod',
      createdAdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod
    );
    return createdAdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod;
  }

  /** The first AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod of `withdrawalPeriod`. One is added when the list is empty. */
  getWithdrawalPeriodFirstRep(): AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod {
    const firstAdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod =
      this.getWithdrawalPeriod()[0];
    return firstAdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod ===
      undefined
      ? this.addWithdrawalPeriod()
      : firstAdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod;
  }
}

modelTypeRegistry.register(
  'AdministrableProductDefinitionRouteOfAdministrationTargetSpecies',
  AdministrableProductDefinitionRouteOfAdministrationTargetSpecies,
  false
);

/**
 * A species specific time during which consumption of animal product is not appropriate
 */
export class AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'tissue',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'tissue', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'value',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'value', typeCode: 'Quantity' }],
    },
    {
      elementName: 'supportingInformation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'supportingInformation', typeCode: 'string' }],
    },
  ];

  /** The type of tissue for which the withdrawal period applies, e.g. meat, milk (1..1) */
  tissue?: CodeableConcept;

  /** A value for the time (1..1) */
  value?: Quantity;

  /** Extra information about the withdrawal period (0..1) */
  supportingInformation?: string;
  /** Id and extensions of the primitive `supportingInformation`. */
  _supportingInformation?: Element;

  override fhirType(): string {
    return 'AdministrableProductDefinition.routeOfAdministration.targetSpecies.withdrawalPeriod';
  }

  /** FHIR JSON for this AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod, typed as the plain `AdministrableProductDefinitionWithdrawalPeriod` data type. */
  override toJSON(): plainTypes.AdministrableProductDefinitionWithdrawalPeriod {
    return this.serialize() as plainTypes.AdministrableProductDefinitionWithdrawalPeriod;
  }

  /** The type of tissue for which the withdrawal period applies, e.g. meat, milk (1..1) Created when absent. */
  getTissue(): CodeableConcept {
    if (this.tissue === undefined) {
      this.tissue = new CodeableConcept();
    }
    return this.tissue;
  }

  setTissue(tissue: CodeableConcept | undefined): this {
    return this.setFieldValue('tissue', tissue);
  }

  hasTissue(): boolean {
    return this.hasFieldValue('tissue');
  }

  /** A value for the time (1..1) Created when absent. */
  getValue(): Quantity {
    if (this.value === undefined) {
      this.value = new Quantity();
    }
    return this.value;
  }

  setValue(value: Quantity | undefined): this {
    return this.setFieldValue('value', value);
  }

  hasValue(): boolean {
    return this.hasFieldValue('value');
  }

  /** Extra information about the withdrawal period (0..1) */
  getSupportingInformation(): string | undefined {
    return this.supportingInformation;
  }

  /** Sets `supportingInformation`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setSupportingInformation(supportingInformation: string | undefined): this {
    return this.setFieldValue('supportingInformation', supportingInformation);
  }

  hasSupportingInformation(): boolean {
    return this.hasFieldValue('supportingInformation');
  }

  /** The element carrying the id and extensions of `supportingInformation`. Created when absent. */
  getSupportingInformationElement(): Element {
    if (this._supportingInformation === undefined) {
      this._supportingInformation = new Element();
    }
    return this._supportingInformation;
  }

  setSupportingInformationElement(supportingInformationElement: Element | undefined): this {
    this._supportingInformation = supportingInformationElement;
    return this;
  }
}

modelTypeRegistry.register(
  'AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod',
  AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod,
  false
);
