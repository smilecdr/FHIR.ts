/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Reference } from './reference';

/**
 * Base StructureDefinition for DeviceComponent Resource
 */
export class DeviceComponent extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'lastSystemChange',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'lastSystemChange', typeCode: 'instant' }],
    },
    {
      elementName: 'source',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'source', typeCode: 'Reference', targetResourceTypes: ['Device'] }],
    },
    {
      elementName: 'parent',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'parent', typeCode: 'Reference', targetResourceTypes: ['DeviceComponent'] },
      ],
    },
    {
      elementName: 'operationalStatus',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'operationalStatus', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'parameterGroup',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'parameterGroup', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'measurementPrinciple',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'measurementPrinciple',
          typeCode: 'code',
          allowedCodes: valueSetCodes.MeasmntPrinciple,
        },
      ],
    },
    {
      elementName: 'productionSpecification',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'productionSpecification', typeCode: 'DeviceComponentProductionSpecification' },
      ],
    },
    {
      elementName: 'languageCode',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'languageCode', typeCode: 'CodeableConcept' }],
    },
  ];

  readonly resourceType = 'DeviceComponent';

  /** Instance id assigned by the software stack (1..1) */
  identifier?: Identifier;

  /** What kind of component it is (1..1) */
  type?: CodeableConcept;

  /** Recent system change timestamp (0..1) */
  lastSystemChange?: string;
  /** Id and extensions of the primitive `lastSystemChange`. */
  _lastSystemChange?: Element;

  /** Top-level device resource link (0..1) */
  source?: Reference;

  /** Parent resource link (0..1) */
  parent?: Reference;

  /** Current operational status of the component, for example On, Off or Standby (0..*) */
  operationalStatus?: CodeableConcept[];

  /** Current supported parameter group (0..1) */
  parameterGroup?: CodeableConcept;

  /** other | chemical | electrical | impedance | nuclear | optical | thermal | biological | mechanical | acoustical | manual+ (0..1) */
  measurementPrinciple?: valueSetCodes.MeasmntPrinciple;
  /** Id and extensions of the primitive `measurementPrinciple`. */
  _measurementPrinciple?: Element;

  /** Specification details such as Component Revisions, or Serial Numbers (0..*) */
  productionSpecification?: DeviceComponentProductionSpecification[];

  /** Language code for the human-readable text strings produced by the device (0..1) */
  languageCode?: CodeableConcept;

  override fhirType(): string {
    return 'DeviceComponent';
  }

  /** FHIR JSON for this DeviceComponent, typed as the plain `DeviceComponent` data type. */
  override toJSON(): plainTypes.DeviceComponent {
    return this.serialize() as plainTypes.DeviceComponent;
  }

  /** Instance id assigned by the software stack (1..1) Created when absent. */
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

  /** What kind of component it is (1..1) Created when absent. */
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

  /** Recent system change timestamp (0..1) */
  getLastSystemChange(): string | undefined {
    return this.lastSystemChange;
  }

  /** Sets `lastSystemChange`. Throws a FhirModelError when the value is not a valid FHIR instant. */
  setLastSystemChange(lastSystemChange: string | undefined): this {
    return this.setFieldValue('lastSystemChange', lastSystemChange);
  }

  hasLastSystemChange(): boolean {
    return this.hasFieldValue('lastSystemChange');
  }

  /** The element carrying the id and extensions of `lastSystemChange`. Created when absent. */
  getLastSystemChangeElement(): Element {
    if (this._lastSystemChange === undefined) {
      this._lastSystemChange = new Element();
    }
    return this._lastSystemChange;
  }

  setLastSystemChangeElement(lastSystemChangeElement: Element | undefined): this {
    this._lastSystemChange = lastSystemChangeElement;
    return this;
  }

  /** Top-level device resource link (0..1) Created when absent. */
  getSource(): Reference {
    if (this.source === undefined) {
      this.source = new Reference();
    }
    return this.source;
  }

  setSource(source: Reference | undefined): this {
    return this.setFieldValue('source', source);
  }

  hasSource(): boolean {
    return this.hasFieldValue('source');
  }

  /** Parent resource link (0..1) Created when absent. */
  getParent(): Reference {
    if (this.parent === undefined) {
      this.parent = new Reference();
    }
    return this.parent;
  }

  setParent(parent: Reference | undefined): this {
    return this.setFieldValue('parent', parent);
  }

  hasParent(): boolean {
    return this.hasFieldValue('parent');
  }

  /** Current operational status of the component, for example On, Off or Standby (0..*) Never undefined; an empty list is created when absent. */
  getOperationalStatus(): CodeableConcept[] {
    if (this.operationalStatus === undefined) {
      this.operationalStatus = [];
    }
    return this.operationalStatus;
  }

  setOperationalStatus(operationalStatus: CodeableConcept[] | undefined): this {
    return this.setFieldValue('operationalStatus', operationalStatus);
  }

  hasOperationalStatus(): boolean {
    return this.hasFieldValue('operationalStatus');
  }

  /** Appends a new, empty CodeableConcept to `operationalStatus` and returns it so it can be filled in. */
  addOperationalStatus(): CodeableConcept;
  /** Appends the given CodeableConcept to `operationalStatus` and returns this object for chaining. */
  addOperationalStatus(codeableConcept: CodeableConcept): this;
  addOperationalStatus(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('operationalStatus', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('operationalStatus', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `operationalStatus`. One is added when the list is empty. */
  getOperationalStatusFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getOperationalStatus()[0];
    return firstCodeableConcept === undefined ? this.addOperationalStatus() : firstCodeableConcept;
  }

  /** Current supported parameter group (0..1) Created when absent. */
  getParameterGroup(): CodeableConcept {
    if (this.parameterGroup === undefined) {
      this.parameterGroup = new CodeableConcept();
    }
    return this.parameterGroup;
  }

  setParameterGroup(parameterGroup: CodeableConcept | undefined): this {
    return this.setFieldValue('parameterGroup', parameterGroup);
  }

  hasParameterGroup(): boolean {
    return this.hasFieldValue('parameterGroup');
  }

  /** other | chemical | electrical | impedance | nuclear | optical | thermal | biological | mechanical | acoustical | manual+ (0..1) */
  getMeasurementPrinciple(): valueSetCodes.MeasmntPrinciple | undefined {
    return this.measurementPrinciple;
  }

  /** Sets `measurementPrinciple`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setMeasurementPrinciple(measurementPrinciple: valueSetCodes.MeasmntPrinciple | undefined): this {
    return this.setFieldValue('measurementPrinciple', measurementPrinciple);
  }

  hasMeasurementPrinciple(): boolean {
    return this.hasFieldValue('measurementPrinciple');
  }

  /** The element carrying the id and extensions of `measurementPrinciple`. Created when absent. */
  getMeasurementPrincipleElement(): Element {
    if (this._measurementPrinciple === undefined) {
      this._measurementPrinciple = new Element();
    }
    return this._measurementPrinciple;
  }

  setMeasurementPrincipleElement(measurementPrincipleElement: Element | undefined): this {
    this._measurementPrinciple = measurementPrincipleElement;
    return this;
  }

  /** Specification details such as Component Revisions, or Serial Numbers (0..*) Never undefined; an empty list is created when absent. */
  getProductionSpecification(): DeviceComponentProductionSpecification[] {
    if (this.productionSpecification === undefined) {
      this.productionSpecification = [];
    }
    return this.productionSpecification;
  }

  setProductionSpecification(
    productionSpecification: DeviceComponentProductionSpecification[] | undefined
  ): this {
    return this.setFieldValue('productionSpecification', productionSpecification);
  }

  hasProductionSpecification(): boolean {
    return this.hasFieldValue('productionSpecification');
  }

  /** Appends a new, empty DeviceComponentProductionSpecification to `productionSpecification` and returns it so it can be filled in. */
  addProductionSpecification(): DeviceComponentProductionSpecification;
  /** Appends the given DeviceComponentProductionSpecification to `productionSpecification` and returns this object for chaining. */
  addProductionSpecification(
    deviceComponentProductionSpecification: DeviceComponentProductionSpecification
  ): this;
  addProductionSpecification(
    deviceComponentProductionSpecification?: DeviceComponentProductionSpecification
  ): DeviceComponentProductionSpecification | this {
    if (deviceComponentProductionSpecification !== undefined) {
      return this.addFieldValue('productionSpecification', deviceComponentProductionSpecification);
    }
    const createdDeviceComponentProductionSpecification =
      new DeviceComponentProductionSpecification();
    this.addFieldValue('productionSpecification', createdDeviceComponentProductionSpecification);
    return createdDeviceComponentProductionSpecification;
  }

  /** The first DeviceComponentProductionSpecification of `productionSpecification`. One is added when the list is empty. */
  getProductionSpecificationFirstRep(): DeviceComponentProductionSpecification {
    const firstDeviceComponentProductionSpecification = this.getProductionSpecification()[0];
    return firstDeviceComponentProductionSpecification === undefined
      ? this.addProductionSpecification()
      : firstDeviceComponentProductionSpecification;
  }

  /** Language code for the human-readable text strings produced by the device (0..1) Created when absent. */
  getLanguageCode(): CodeableConcept {
    if (this.languageCode === undefined) {
      this.languageCode = new CodeableConcept();
    }
    return this.languageCode;
  }

  setLanguageCode(languageCode: CodeableConcept | undefined): this {
    return this.setFieldValue('languageCode', languageCode);
  }

  hasLanguageCode(): boolean {
    return this.hasFieldValue('languageCode');
  }
}

modelTypeRegistry.register('DeviceComponent', DeviceComponent, true);

/** True when the value is a DeviceComponent model instance. */
export function isDeviceComponent(candidate: unknown): candidate is DeviceComponent {
  return candidate instanceof DeviceComponent;
}

/**
 * Specification details such as Component Revisions, or Serial Numbers
 */
export class DeviceComponentProductionSpecification extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'specType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'specType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'componentId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'componentId', typeCode: 'Identifier' }],
    },
    {
      elementName: 'productionSpec',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'productionSpec', typeCode: 'string' }],
    },
  ];

  /** Type or kind of production specification, for example serial number or software revision (0..1) */
  specType?: CodeableConcept;

  /** Internal component unique identification (0..1) */
  componentId?: Identifier;

  /** A printable string defining the component (0..1) */
  productionSpec?: string;
  /** Id and extensions of the primitive `productionSpec`. */
  _productionSpec?: Element;

  override fhirType(): string {
    return 'DeviceComponent.productionSpecification';
  }

  /** FHIR JSON for this DeviceComponentProductionSpecification, typed as the plain `DeviceComponentProductionSpecification` data type. */
  override toJSON(): plainTypes.DeviceComponentProductionSpecification {
    return this.serialize() as plainTypes.DeviceComponentProductionSpecification;
  }

  /** Type or kind of production specification, for example serial number or software revision (0..1) Created when absent. */
  getSpecType(): CodeableConcept {
    if (this.specType === undefined) {
      this.specType = new CodeableConcept();
    }
    return this.specType;
  }

  setSpecType(specType: CodeableConcept | undefined): this {
    return this.setFieldValue('specType', specType);
  }

  hasSpecType(): boolean {
    return this.hasFieldValue('specType');
  }

  /** Internal component unique identification (0..1) Created when absent. */
  getComponentId(): Identifier {
    if (this.componentId === undefined) {
      this.componentId = new Identifier();
    }
    return this.componentId;
  }

  setComponentId(componentId: Identifier | undefined): this {
    return this.setFieldValue('componentId', componentId);
  }

  hasComponentId(): boolean {
    return this.hasFieldValue('componentId');
  }

  /** A printable string defining the component (0..1) */
  getProductionSpec(): string | undefined {
    return this.productionSpec;
  }

  /** Sets `productionSpec`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setProductionSpec(productionSpec: string | undefined): this {
    return this.setFieldValue('productionSpec', productionSpec);
  }

  hasProductionSpec(): boolean {
    return this.hasFieldValue('productionSpec');
  }

  /** The element carrying the id and extensions of `productionSpec`. Created when absent. */
  getProductionSpecElement(): Element {
    if (this._productionSpec === undefined) {
      this._productionSpec = new Element();
    }
    return this._productionSpec;
  }

  setProductionSpecElement(productionSpecElement: Element | undefined): this {
    this._productionSpec = productionSpecElement;
    return this;
  }
}

modelTypeRegistry.register(
  'DeviceComponentProductionSpecification',
  DeviceComponentProductionSpecification,
  false
);
