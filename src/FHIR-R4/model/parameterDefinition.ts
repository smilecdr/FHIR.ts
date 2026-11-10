/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { Element } from './element';

/**
 * The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse.
 */
export class ParameterDefinition extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'code' }],
    },
    {
      elementName: 'use',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'use', typeCode: 'code', allowedCodes: valueSetCodes.OperationParameterUse },
      ],
    },
    {
      elementName: 'min',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'min', typeCode: 'integer' }],
    },
    {
      elementName: 'max',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'max', typeCode: 'string' }],
    },
    {
      elementName: 'documentation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'documentation', typeCode: 'string' }],
    },
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.FHIRAllTypes }],
    },
    {
      elementName: 'profile',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'profile', typeCode: 'canonical' }],
    },
  ];

  /** Name used to access the parameter value (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** in | out (1..1) */
  use?: valueSetCodes.OperationParameterUse;
  /** Id and extensions of the primitive `use`. */
  _use?: Element;

  /** Minimum cardinality (0..1) */
  min?: number;
  /** Id and extensions of the primitive `min`. */
  _min?: Element;

  /** Maximum cardinality (a number of *) (0..1) */
  max?: string;
  /** Id and extensions of the primitive `max`. */
  _max?: Element;

  /** A brief description of the parameter (0..1) */
  documentation?: string;
  /** Id and extensions of the primitive `documentation`. */
  _documentation?: Element;

  /** What type of value (1..1) */
  type?: valueSetCodes.FHIRAllTypes;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** What profile the value is expected to be (0..1) */
  profile?: string;
  /** Id and extensions of the primitive `profile`. */
  _profile?: Element;

  override fhirType(): string {
    return 'ParameterDefinition';
  }

  /** FHIR JSON for this ParameterDefinition, typed as the plain `ParameterDefinition` data type. */
  override toJSON(): plainTypes.ParameterDefinition {
    return this.serialize() as plainTypes.ParameterDefinition;
  }

  /** Name used to access the parameter value (0..1) */
  getName(): string | undefined {
    return this.name;
  }

  /** Sets `name`. Throws a FhirModelError when the value is not a valid FHIR code. */
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

  /** in | out (1..1) */
  getUse(): valueSetCodes.OperationParameterUse | undefined {
    return this.use;
  }

  /** Sets `use`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setUse(use: valueSetCodes.OperationParameterUse | undefined): this {
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

  /** Minimum cardinality (0..1) */
  getMin(): number | undefined {
    return this.min;
  }

  /** Sets `min`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setMin(min: number | undefined): this {
    return this.setFieldValue('min', min);
  }

  hasMin(): boolean {
    return this.hasFieldValue('min');
  }

  /** The element carrying the id and extensions of `min`. Created when absent. */
  getMinElement(): Element {
    if (this._min === undefined) {
      this._min = new Element();
    }
    return this._min;
  }

  setMinElement(minElement: Element | undefined): this {
    this._min = minElement;
    return this;
  }

  /** Maximum cardinality (a number of *) (0..1) */
  getMax(): string | undefined {
    return this.max;
  }

  /** Sets `max`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setMax(max: string | undefined): this {
    return this.setFieldValue('max', max);
  }

  hasMax(): boolean {
    return this.hasFieldValue('max');
  }

  /** The element carrying the id and extensions of `max`. Created when absent. */
  getMaxElement(): Element {
    if (this._max === undefined) {
      this._max = new Element();
    }
    return this._max;
  }

  setMaxElement(maxElement: Element | undefined): this {
    this._max = maxElement;
    return this;
  }

  /** A brief description of the parameter (0..1) */
  getDocumentation(): string | undefined {
    return this.documentation;
  }

  /** Sets `documentation`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDocumentation(documentation: string | undefined): this {
    return this.setFieldValue('documentation', documentation);
  }

  hasDocumentation(): boolean {
    return this.hasFieldValue('documentation');
  }

  /** The element carrying the id and extensions of `documentation`. Created when absent. */
  getDocumentationElement(): Element {
    if (this._documentation === undefined) {
      this._documentation = new Element();
    }
    return this._documentation;
  }

  setDocumentationElement(documentationElement: Element | undefined): this {
    this._documentation = documentationElement;
    return this;
  }

  /** What type of value (1..1) */
  getType(): valueSetCodes.FHIRAllTypes | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.FHIRAllTypes | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** The element carrying the id and extensions of `type`. Created when absent. */
  getTypeElement(): Element {
    if (this._type === undefined) {
      this._type = new Element();
    }
    return this._type;
  }

  setTypeElement(typeElement: Element | undefined): this {
    this._type = typeElement;
    return this;
  }

  /** What profile the value is expected to be (0..1) */
  getProfile(): string | undefined {
    return this.profile;
  }

  /** Sets `profile`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setProfile(profile: string | undefined): this {
    return this.setFieldValue('profile', profile);
  }

  hasProfile(): boolean {
    return this.hasFieldValue('profile');
  }

  /** The element carrying the id and extensions of `profile`. Created when absent. */
  getProfileElement(): Element {
    if (this._profile === undefined) {
      this._profile = new Element();
    }
    return this._profile;
  }

  setProfileElement(profileElement: Element | undefined): this {
    this._profile = profileElement;
    return this;
  }
}

modelTypeRegistry.register('ParameterDefinition', ParameterDefinition, false);
