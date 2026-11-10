/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { CodeableConcept } from './codeableConcept';
import { Coding } from './coding';
import { Duration } from './duration';
import { Element } from './element';
import { Period } from './period';
import { Reference } from './reference';

/**
 * Base StructureDefinition for DataRequirement Type
 */
export class DataRequirement extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
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
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'profile', typeCode: 'uri' }],
    },
    {
      elementName: 'mustSupport',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'mustSupport', typeCode: 'string' }],
    },
    {
      elementName: 'codeFilter',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'codeFilter', typeCode: 'DataRequirementCodeFilter' }],
    },
    {
      elementName: 'dateFilter',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'dateFilter', typeCode: 'DataRequirementDateFilter' }],
    },
  ];

  /** The type of the required data (1..1) */
  type?: valueSetCodes.FHIRAllTypes;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** The profile of the required data (0..*) */
  profile?: string[];
  /** Id and extensions of the primitive `profile`. */
  _profile?: (Element | null)[];

  /** Indicates that specific structure elements are referenced by the knowledge module (0..*) */
  mustSupport?: string[];
  /** Id and extensions of the primitive `mustSupport`. */
  _mustSupport?: (Element | null)[];

  /** What codes are expected (0..*) */
  codeFilter?: DataRequirementCodeFilter[];

  /** What dates/date ranges are expected (0..*) */
  dateFilter?: DataRequirementDateFilter[];

  override fhirType(): string {
    return 'DataRequirement';
  }

  /** FHIR JSON for this DataRequirement, typed as the plain `DataRequirement` data type. */
  override toJSON(): plainTypes.DataRequirement {
    return this.serialize() as plainTypes.DataRequirement;
  }

  /** The type of the required data (1..1) */
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

  /** The profile of the required data (0..*) Never undefined; an empty list is created when absent. */
  getProfile(): string[] {
    if (this.profile === undefined) {
      this.profile = [];
    }
    return this.profile;
  }

  setProfile(profile: string[] | undefined): this {
    return this.setFieldValue('profile', profile);
  }

  hasProfile(): boolean {
    return this.hasFieldValue('profile');
  }

  /** Appends one value to `profile`. Throws a FhirModelError when it is not a valid FHIR uri. */
  addProfile(profile: string): this {
    return this.addFieldValue('profile', profile);
  }

  /** Indicates that specific structure elements are referenced by the knowledge module (0..*) Never undefined; an empty list is created when absent. */
  getMustSupport(): string[] {
    if (this.mustSupport === undefined) {
      this.mustSupport = [];
    }
    return this.mustSupport;
  }

  setMustSupport(mustSupport: string[] | undefined): this {
    return this.setFieldValue('mustSupport', mustSupport);
  }

  hasMustSupport(): boolean {
    return this.hasFieldValue('mustSupport');
  }

  /** Appends one value to `mustSupport`. Throws a FhirModelError when it is not a valid FHIR string. */
  addMustSupport(mustSupport: string): this {
    return this.addFieldValue('mustSupport', mustSupport);
  }

  /** What codes are expected (0..*) Never undefined; an empty list is created when absent. */
  getCodeFilter(): DataRequirementCodeFilter[] {
    if (this.codeFilter === undefined) {
      this.codeFilter = [];
    }
    return this.codeFilter;
  }

  setCodeFilter(codeFilter: DataRequirementCodeFilter[] | undefined): this {
    return this.setFieldValue('codeFilter', codeFilter);
  }

  hasCodeFilter(): boolean {
    return this.hasFieldValue('codeFilter');
  }

  /** Appends a new, empty DataRequirementCodeFilter to `codeFilter` and returns it so it can be filled in. */
  addCodeFilter(): DataRequirementCodeFilter;
  /** Appends the given DataRequirementCodeFilter to `codeFilter` and returns this object for chaining. */
  addCodeFilter(dataRequirementCodeFilter: DataRequirementCodeFilter): this;
  addCodeFilter(
    dataRequirementCodeFilter?: DataRequirementCodeFilter
  ): DataRequirementCodeFilter | this {
    if (dataRequirementCodeFilter !== undefined) {
      return this.addFieldValue('codeFilter', dataRequirementCodeFilter);
    }
    const createdDataRequirementCodeFilter = new DataRequirementCodeFilter();
    this.addFieldValue('codeFilter', createdDataRequirementCodeFilter);
    return createdDataRequirementCodeFilter;
  }

  /** The first DataRequirementCodeFilter of `codeFilter`. One is added when the list is empty. */
  getCodeFilterFirstRep(): DataRequirementCodeFilter {
    const firstDataRequirementCodeFilter = this.getCodeFilter()[0];
    return firstDataRequirementCodeFilter === undefined
      ? this.addCodeFilter()
      : firstDataRequirementCodeFilter;
  }

  /** What dates/date ranges are expected (0..*) Never undefined; an empty list is created when absent. */
  getDateFilter(): DataRequirementDateFilter[] {
    if (this.dateFilter === undefined) {
      this.dateFilter = [];
    }
    return this.dateFilter;
  }

  setDateFilter(dateFilter: DataRequirementDateFilter[] | undefined): this {
    return this.setFieldValue('dateFilter', dateFilter);
  }

  hasDateFilter(): boolean {
    return this.hasFieldValue('dateFilter');
  }

  /** Appends a new, empty DataRequirementDateFilter to `dateFilter` and returns it so it can be filled in. */
  addDateFilter(): DataRequirementDateFilter;
  /** Appends the given DataRequirementDateFilter to `dateFilter` and returns this object for chaining. */
  addDateFilter(dataRequirementDateFilter: DataRequirementDateFilter): this;
  addDateFilter(
    dataRequirementDateFilter?: DataRequirementDateFilter
  ): DataRequirementDateFilter | this {
    if (dataRequirementDateFilter !== undefined) {
      return this.addFieldValue('dateFilter', dataRequirementDateFilter);
    }
    const createdDataRequirementDateFilter = new DataRequirementDateFilter();
    this.addFieldValue('dateFilter', createdDataRequirementDateFilter);
    return createdDataRequirementDateFilter;
  }

  /** The first DataRequirementDateFilter of `dateFilter`. One is added when the list is empty. */
  getDateFilterFirstRep(): DataRequirementDateFilter {
    const firstDataRequirementDateFilter = this.getDateFilter()[0];
    return firstDataRequirementDateFilter === undefined
      ? this.addDateFilter()
      : firstDataRequirementDateFilter;
  }
}

modelTypeRegistry.register('DataRequirement', DataRequirement, false);

/**
 * What codes are expected
 */
export class DataRequirementCodeFilter extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'path',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'path', typeCode: 'string' }],
    },
    {
      elementName: 'valueSet',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'valueSetString', typeCode: 'string' },
        { jsonKey: 'valueSetReference', typeCode: 'Reference', targetResourceTypes: ['ValueSet'] },
      ],
    },
    {
      elementName: 'valueCode',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'valueCode', typeCode: 'code' }],
    },
    {
      elementName: 'valueCoding',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'valueCoding', typeCode: 'Coding' }],
    },
    {
      elementName: 'valueCodeableConcept',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'valueCodeableConcept', typeCode: 'CodeableConcept' }],
    },
  ];

  /** The code-valued attribute of the filter (1..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;

  /** Valueset for the filter (0..1) */
  valueSetString?: string;
  /** Id and extensions of the primitive `valueSetString`. */
  _valueSetString?: Element;
  /** Valueset for the filter (0..1) */
  valueSetReference?: Reference;

  /** What code is expected (0..*) */
  valueCode?: string[];
  /** Id and extensions of the primitive `valueCode`. */
  _valueCode?: (Element | null)[];

  /** What Coding is expected (0..*) */
  valueCoding?: Coding[];

  /** What CodeableConcept is expected (0..*) */
  valueCodeableConcept?: CodeableConcept[];

  override fhirType(): string {
    return 'DataRequirement.codeFilter';
  }

  /** FHIR JSON for this DataRequirementCodeFilter, typed as the plain `DataRequirementCodeFilter` data type. */
  override toJSON(): plainTypes.DataRequirementCodeFilter {
    return this.serialize() as plainTypes.DataRequirementCodeFilter;
  }

  /** The code-valued attribute of the filter (1..1) */
  getPath(): string | undefined {
    return this.path;
  }

  /** Sets `path`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPath(path: string | undefined): this {
    return this.setFieldValue('path', path);
  }

  hasPath(): boolean {
    return this.hasFieldValue('path');
  }

  /** The element carrying the id and extensions of `path`. Created when absent. */
  getPathElement(): Element {
    if (this._path === undefined) {
      this._path = new Element();
    }
    return this._path;
  }

  setPathElement(pathElement: Element | undefined): this {
    this._path = pathElement;
    return this;
  }

  /** Valueset for the filter (0..1) Whichever type of `valueSet[x]` is set. */
  getValueSet(): string | Reference | undefined {
    return this.getChoiceValue<string | Reference>('valueSet');
  }

  /** True when any type of `valueSet[x]` is set. */
  hasValueSet(): boolean {
    return this.hasChoiceValue('valueSet');
  }

  getValueSetString(): string | undefined {
    return this.valueSetString;
  }

  /** Sets `valueSet[x]` as string and clears every other type of it. */
  setValueSetString(valueSetString: string | undefined): this {
    return this.setFieldValue('valueSetString', valueSetString);
  }

  hasValueSetString(): boolean {
    return this.hasFieldValue('valueSetString');
  }

  getValueSetReference(): Reference | undefined {
    return this.valueSetReference;
  }

  /** Sets `valueSet[x]` as Reference and clears every other type of it. */
  setValueSetReference(valueSetReference: Reference | undefined): this {
    return this.setFieldValue('valueSetReference', valueSetReference);
  }

  hasValueSetReference(): boolean {
    return this.hasFieldValue('valueSetReference');
  }

  /** What code is expected (0..*) Never undefined; an empty list is created when absent. */
  getValueCode(): string[] {
    if (this.valueCode === undefined) {
      this.valueCode = [];
    }
    return this.valueCode;
  }

  setValueCode(valueCode: string[] | undefined): this {
    return this.setFieldValue('valueCode', valueCode);
  }

  hasValueCode(): boolean {
    return this.hasFieldValue('valueCode');
  }

  /** Appends one value to `valueCode`. Throws a FhirModelError when it is not a valid FHIR code. */
  addValueCode(valueCode: string): this {
    return this.addFieldValue('valueCode', valueCode);
  }

  /** What Coding is expected (0..*) Never undefined; an empty list is created when absent. */
  getValueCoding(): Coding[] {
    if (this.valueCoding === undefined) {
      this.valueCoding = [];
    }
    return this.valueCoding;
  }

  setValueCoding(valueCoding: Coding[] | undefined): this {
    return this.setFieldValue('valueCoding', valueCoding);
  }

  hasValueCoding(): boolean {
    return this.hasFieldValue('valueCoding');
  }

  /** Appends a new, empty Coding to `valueCoding` and returns it so it can be filled in. */
  addValueCoding(): Coding;
  /** Appends the given Coding to `valueCoding` and returns this object for chaining. */
  addValueCoding(coding: Coding): this;
  addValueCoding(coding?: Coding): Coding | this {
    if (coding !== undefined) {
      return this.addFieldValue('valueCoding', coding);
    }
    const createdCoding = new Coding();
    this.addFieldValue('valueCoding', createdCoding);
    return createdCoding;
  }

  /** The first Coding of `valueCoding`. One is added when the list is empty. */
  getValueCodingFirstRep(): Coding {
    const firstCoding = this.getValueCoding()[0];
    return firstCoding === undefined ? this.addValueCoding() : firstCoding;
  }

  /** What CodeableConcept is expected (0..*) Never undefined; an empty list is created when absent. */
  getValueCodeableConcept(): CodeableConcept[] {
    if (this.valueCodeableConcept === undefined) {
      this.valueCodeableConcept = [];
    }
    return this.valueCodeableConcept;
  }

  setValueCodeableConcept(valueCodeableConcept: CodeableConcept[] | undefined): this {
    return this.setFieldValue('valueCodeableConcept', valueCodeableConcept);
  }

  hasValueCodeableConcept(): boolean {
    return this.hasFieldValue('valueCodeableConcept');
  }

  /** Appends a new, empty CodeableConcept to `valueCodeableConcept` and returns it so it can be filled in. */
  addValueCodeableConcept(): CodeableConcept;
  /** Appends the given CodeableConcept to `valueCodeableConcept` and returns this object for chaining. */
  addValueCodeableConcept(codeableConcept: CodeableConcept): this;
  addValueCodeableConcept(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('valueCodeableConcept', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('valueCodeableConcept', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `valueCodeableConcept`. One is added when the list is empty. */
  getValueCodeableConceptFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getValueCodeableConcept()[0];
    return firstCodeableConcept === undefined
      ? this.addValueCodeableConcept()
      : firstCodeableConcept;
  }
}

modelTypeRegistry.register('DataRequirementCodeFilter', DataRequirementCodeFilter, false);

/**
 * What dates/date ranges are expected
 */
export class DataRequirementDateFilter extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'path',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'path', typeCode: 'string' }],
    },
    {
      elementName: 'value',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'valueDateTime', typeCode: 'dateTime' },
        { jsonKey: 'valuePeriod', typeCode: 'Period' },
        { jsonKey: 'valueDuration', typeCode: 'Duration' },
      ],
    },
  ];

  /** The date-valued attribute of the filter (1..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;

  /** The value of the filter, as a Period, DateTime, or Duration value (0..1) */
  valueDateTime?: string;
  /** Id and extensions of the primitive `valueDateTime`. */
  _valueDateTime?: Element;
  /** The value of the filter, as a Period, DateTime, or Duration value (0..1) */
  valuePeriod?: Period;
  /** The value of the filter, as a Period, DateTime, or Duration value (0..1) */
  valueDuration?: Duration;

  override fhirType(): string {
    return 'DataRequirement.dateFilter';
  }

  /** FHIR JSON for this DataRequirementDateFilter, typed as the plain `DataRequirementDateFilter` data type. */
  override toJSON(): plainTypes.DataRequirementDateFilter {
    return this.serialize() as plainTypes.DataRequirementDateFilter;
  }

  /** The date-valued attribute of the filter (1..1) */
  getPath(): string | undefined {
    return this.path;
  }

  /** Sets `path`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPath(path: string | undefined): this {
    return this.setFieldValue('path', path);
  }

  hasPath(): boolean {
    return this.hasFieldValue('path');
  }

  /** The element carrying the id and extensions of `path`. Created when absent. */
  getPathElement(): Element {
    if (this._path === undefined) {
      this._path = new Element();
    }
    return this._path;
  }

  setPathElement(pathElement: Element | undefined): this {
    this._path = pathElement;
    return this;
  }

  /** The value of the filter, as a Period, DateTime, or Duration value (0..1) Whichever type of `value[x]` is set. */
  getValue(): string | Period | Duration | undefined {
    return this.getChoiceValue<string | Period | Duration>('value');
  }

  /** True when any type of `value[x]` is set. */
  hasValue(): boolean {
    return this.hasChoiceValue('value');
  }

  getValueDateTime(): string | undefined {
    return this.valueDateTime;
  }

  /** Sets `value[x]` as dateTime and clears every other type of it. */
  setValueDateTime(valueDateTime: string | undefined): this {
    return this.setFieldValue('valueDateTime', valueDateTime);
  }

  hasValueDateTime(): boolean {
    return this.hasFieldValue('valueDateTime');
  }

  getValuePeriod(): Period | undefined {
    return this.valuePeriod;
  }

  /** Sets `value[x]` as Period and clears every other type of it. */
  setValuePeriod(valuePeriod: Period | undefined): this {
    return this.setFieldValue('valuePeriod', valuePeriod);
  }

  hasValuePeriod(): boolean {
    return this.hasFieldValue('valuePeriod');
  }

  getValueDuration(): Duration | undefined {
    return this.valueDuration;
  }

  /** Sets `value[x]` as Duration and clears every other type of it. */
  setValueDuration(valueDuration: Duration | undefined): this {
    return this.setFieldValue('valueDuration', valueDuration);
  }

  hasValueDuration(): boolean {
    return this.hasFieldValue('valueDuration');
  }
}

modelTypeRegistry.register('DataRequirementDateFilter', DataRequirementDateFilter, false);
