/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { CodeableConcept } from './codeableConcept';
import { Coding } from './coding';
import { DataType } from './dataType';
import { Duration } from './duration';
import { Element } from './element';
import { Period } from './period';
import { Reference } from './reference';

/**
 * DataRequirement Type: Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.
 */
export class DataRequirement extends DataType {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.FHIRTypes }],
    },
    {
      elementName: 'profile',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'profile', typeCode: 'canonical' }],
    },
    {
      elementName: 'subject',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'subjectCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'subjectReference', typeCode: 'Reference', targetResourceTypes: ['Group'] },
      ],
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
    {
      elementName: 'valueFilter',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'valueFilter', typeCode: 'DataRequirementValueFilter' }],
    },
    {
      elementName: 'limit',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'limit', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'sort',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'sort', typeCode: 'DataRequirementSort' }],
    },
  ];

  /** The type of the required data (1..1) */
  type?: valueSetCodes.FHIRTypes;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** The profile of the required data (0..*) */
  profile?: string[];
  /** Id and extensions of the primitive `profile`. */
  _profile?: (Element | null)[];

  /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device (0..1) */
  subjectCodeableConcept?: CodeableConcept;
  /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device (0..1) */
  subjectReference?: Reference;

  /** Indicates specific structure elements that are referenced by the knowledge module (0..*) */
  mustSupport?: string[];
  /** Id and extensions of the primitive `mustSupport`. */
  _mustSupport?: (Element | null)[];

  /** What codes are expected (0..*) */
  codeFilter?: DataRequirementCodeFilter[];

  /** What dates/date ranges are expected (0..*) */
  dateFilter?: DataRequirementDateFilter[];

  /** What values are expected (0..*) */
  valueFilter?: DataRequirementValueFilter[];

  /** Number of results (0..1) */
  limit?: number;
  /** Id and extensions of the primitive `limit`. */
  _limit?: Element;

  /** Order of the results (0..*) */
  sort?: DataRequirementSort[];

  override fhirType(): string {
    return 'DataRequirement';
  }

  /** FHIR JSON for this DataRequirement, typed as the plain `DataRequirement` data type. */
  override toJSON(): plainTypes.DataRequirement {
    return this.serialize() as plainTypes.DataRequirement;
  }

  /** The type of the required data (1..1) */
  getType(): valueSetCodes.FHIRTypes | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.FHIRTypes | undefined): this {
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

  /** Appends one value to `profile`. Throws a FhirModelError when it is not a valid FHIR canonical. */
  addProfile(profile: string): this {
    return this.addFieldValue('profile', profile);
  }

  /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device (0..1) Whichever type of `subject[x]` is set. */
  getSubject(): CodeableConcept | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | Reference>('subject');
  }

  /** True when any type of `subject[x]` is set. */
  hasSubject(): boolean {
    return this.hasChoiceValue('subject');
  }

  getSubjectCodeableConcept(): CodeableConcept | undefined {
    return this.subjectCodeableConcept;
  }

  /** Sets `subject[x]` as CodeableConcept and clears every other type of it. */
  setSubjectCodeableConcept(subjectCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('subjectCodeableConcept', subjectCodeableConcept);
  }

  hasSubjectCodeableConcept(): boolean {
    return this.hasFieldValue('subjectCodeableConcept');
  }

  getSubjectReference(): Reference | undefined {
    return this.subjectReference;
  }

  /** Sets `subject[x]` as Reference and clears every other type of it. */
  setSubjectReference(subjectReference: Reference | undefined): this {
    return this.setFieldValue('subjectReference', subjectReference);
  }

  hasSubjectReference(): boolean {
    return this.hasFieldValue('subjectReference');
  }

  /** Indicates specific structure elements that are referenced by the knowledge module (0..*) Never undefined; an empty list is created when absent. */
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

  /** What values are expected (0..*) Never undefined; an empty list is created when absent. */
  getValueFilter(): DataRequirementValueFilter[] {
    if (this.valueFilter === undefined) {
      this.valueFilter = [];
    }
    return this.valueFilter;
  }

  setValueFilter(valueFilter: DataRequirementValueFilter[] | undefined): this {
    return this.setFieldValue('valueFilter', valueFilter);
  }

  hasValueFilter(): boolean {
    return this.hasFieldValue('valueFilter');
  }

  /** Appends a new, empty DataRequirementValueFilter to `valueFilter` and returns it so it can be filled in. */
  addValueFilter(): DataRequirementValueFilter;
  /** Appends the given DataRequirementValueFilter to `valueFilter` and returns this object for chaining. */
  addValueFilter(dataRequirementValueFilter: DataRequirementValueFilter): this;
  addValueFilter(
    dataRequirementValueFilter?: DataRequirementValueFilter
  ): DataRequirementValueFilter | this {
    if (dataRequirementValueFilter !== undefined) {
      return this.addFieldValue('valueFilter', dataRequirementValueFilter);
    }
    const createdDataRequirementValueFilter = new DataRequirementValueFilter();
    this.addFieldValue('valueFilter', createdDataRequirementValueFilter);
    return createdDataRequirementValueFilter;
  }

  /** The first DataRequirementValueFilter of `valueFilter`. One is added when the list is empty. */
  getValueFilterFirstRep(): DataRequirementValueFilter {
    const firstDataRequirementValueFilter = this.getValueFilter()[0];
    return firstDataRequirementValueFilter === undefined
      ? this.addValueFilter()
      : firstDataRequirementValueFilter;
  }

  /** Number of results (0..1) */
  getLimit(): number | undefined {
    return this.limit;
  }

  /** Sets `limit`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setLimit(limit: number | undefined): this {
    return this.setFieldValue('limit', limit);
  }

  hasLimit(): boolean {
    return this.hasFieldValue('limit');
  }

  /** The element carrying the id and extensions of `limit`. Created when absent. */
  getLimitElement(): Element {
    if (this._limit === undefined) {
      this._limit = new Element();
    }
    return this._limit;
  }

  setLimitElement(limitElement: Element | undefined): this {
    this._limit = limitElement;
    return this;
  }

  /** Order of the results (0..*) Never undefined; an empty list is created when absent. */
  getSort(): DataRequirementSort[] {
    if (this.sort === undefined) {
      this.sort = [];
    }
    return this.sort;
  }

  setSort(sort: DataRequirementSort[] | undefined): this {
    return this.setFieldValue('sort', sort);
  }

  hasSort(): boolean {
    return this.hasFieldValue('sort');
  }

  /** Appends a new, empty DataRequirementSort to `sort` and returns it so it can be filled in. */
  addSort(): DataRequirementSort;
  /** Appends the given DataRequirementSort to `sort` and returns this object for chaining. */
  addSort(dataRequirementSort: DataRequirementSort): this;
  addSort(dataRequirementSort?: DataRequirementSort): DataRequirementSort | this {
    if (dataRequirementSort !== undefined) {
      return this.addFieldValue('sort', dataRequirementSort);
    }
    const createdDataRequirementSort = new DataRequirementSort();
    this.addFieldValue('sort', createdDataRequirementSort);
    return createdDataRequirementSort;
  }

  /** The first DataRequirementSort of `sort`. One is added when the list is empty. */
  getSortFirstRep(): DataRequirementSort {
    const firstDataRequirementSort = this.getSort()[0];
    return firstDataRequirementSort === undefined ? this.addSort() : firstDataRequirementSort;
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
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'path', typeCode: 'string' }],
    },
    {
      elementName: 'searchParam',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'searchParam', typeCode: 'string' }],
    },
    {
      elementName: 'valueSet',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'valueSet', typeCode: 'canonical' }],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'code', typeCode: 'Coding' }],
    },
  ];

  /** A code-valued attribute to filter on (0..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;

  /** A coded (token) parameter to search on (0..1) */
  searchParam?: string;
  /** Id and extensions of the primitive `searchParam`. */
  _searchParam?: Element;

  /** ValueSet for the filter (0..1) */
  valueSet?: string;
  /** Id and extensions of the primitive `valueSet`. */
  _valueSet?: Element;

  /** What code is expected (0..*) */
  code?: Coding[];

  override fhirType(): string {
    return 'DataRequirement.codeFilter';
  }

  /** FHIR JSON for this DataRequirementCodeFilter, typed as the plain `DataRequirementCodeFilter` data type. */
  override toJSON(): plainTypes.DataRequirementCodeFilter {
    return this.serialize() as plainTypes.DataRequirementCodeFilter;
  }

  /** A code-valued attribute to filter on (0..1) */
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

  /** A coded (token) parameter to search on (0..1) */
  getSearchParam(): string | undefined {
    return this.searchParam;
  }

  /** Sets `searchParam`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setSearchParam(searchParam: string | undefined): this {
    return this.setFieldValue('searchParam', searchParam);
  }

  hasSearchParam(): boolean {
    return this.hasFieldValue('searchParam');
  }

  /** The element carrying the id and extensions of `searchParam`. Created when absent. */
  getSearchParamElement(): Element {
    if (this._searchParam === undefined) {
      this._searchParam = new Element();
    }
    return this._searchParam;
  }

  setSearchParamElement(searchParamElement: Element | undefined): this {
    this._searchParam = searchParamElement;
    return this;
  }

  /** ValueSet for the filter (0..1) */
  getValueSet(): string | undefined {
    return this.valueSet;
  }

  /** Sets `valueSet`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setValueSet(valueSet: string | undefined): this {
    return this.setFieldValue('valueSet', valueSet);
  }

  hasValueSet(): boolean {
    return this.hasFieldValue('valueSet');
  }

  /** The element carrying the id and extensions of `valueSet`. Created when absent. */
  getValueSetElement(): Element {
    if (this._valueSet === undefined) {
      this._valueSet = new Element();
    }
    return this._valueSet;
  }

  setValueSetElement(valueSetElement: Element | undefined): this {
    this._valueSet = valueSetElement;
    return this;
  }

  /** What code is expected (0..*) Never undefined; an empty list is created when absent. */
  getCode(): Coding[] {
    if (this.code === undefined) {
      this.code = [];
    }
    return this.code;
  }

  setCode(code: Coding[] | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** Appends a new, empty Coding to `code` and returns it so it can be filled in. */
  addCode(): Coding;
  /** Appends the given Coding to `code` and returns this object for chaining. */
  addCode(coding: Coding): this;
  addCode(coding?: Coding): Coding | this {
    if (coding !== undefined) {
      return this.addFieldValue('code', coding);
    }
    const createdCoding = new Coding();
    this.addFieldValue('code', createdCoding);
    return createdCoding;
  }

  /** The first Coding of `code`. One is added when the list is empty. */
  getCodeFirstRep(): Coding {
    const firstCoding = this.getCode()[0];
    return firstCoding === undefined ? this.addCode() : firstCoding;
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
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'path', typeCode: 'string' }],
    },
    {
      elementName: 'searchParam',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'searchParam', typeCode: 'string' }],
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

  /** A date-valued attribute to filter on (0..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;

  /** A date valued parameter to search on (0..1) */
  searchParam?: string;
  /** Id and extensions of the primitive `searchParam`. */
  _searchParam?: Element;

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

  /** A date-valued attribute to filter on (0..1) */
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

  /** A date valued parameter to search on (0..1) */
  getSearchParam(): string | undefined {
    return this.searchParam;
  }

  /** Sets `searchParam`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setSearchParam(searchParam: string | undefined): this {
    return this.setFieldValue('searchParam', searchParam);
  }

  hasSearchParam(): boolean {
    return this.hasFieldValue('searchParam');
  }

  /** The element carrying the id and extensions of `searchParam`. Created when absent. */
  getSearchParamElement(): Element {
    if (this._searchParam === undefined) {
      this._searchParam = new Element();
    }
    return this._searchParam;
  }

  setSearchParamElement(searchParamElement: Element | undefined): this {
    this._searchParam = searchParamElement;
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

/**
 * What values are expected
 */
export class DataRequirementValueFilter extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'path',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'path', typeCode: 'string' }],
    },
    {
      elementName: 'searchParam',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'searchParam', typeCode: 'string' }],
    },
    {
      elementName: 'comparator',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'comparator',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ValueFilterComparator,
        },
      ],
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

  /** An attribute to filter on (0..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;

  /** A parameter to search on (0..1) */
  searchParam?: string;
  /** Id and extensions of the primitive `searchParam`. */
  _searchParam?: Element;

  /** eq | gt | lt | ge | le | sa | eb (0..1) */
  comparator?: valueSetCodes.ValueFilterComparator;
  /** Id and extensions of the primitive `comparator`. */
  _comparator?: Element;

  /** The value of the filter, as a Period, DateTime, or Duration value (0..1) */
  valueDateTime?: string;
  /** Id and extensions of the primitive `valueDateTime`. */
  _valueDateTime?: Element;
  /** The value of the filter, as a Period, DateTime, or Duration value (0..1) */
  valuePeriod?: Period;
  /** The value of the filter, as a Period, DateTime, or Duration value (0..1) */
  valueDuration?: Duration;

  override fhirType(): string {
    return 'DataRequirement.valueFilter';
  }

  /** FHIR JSON for this DataRequirementValueFilter, typed as the plain `DataRequirementValueFilter` data type. */
  override toJSON(): plainTypes.DataRequirementValueFilter {
    return this.serialize() as plainTypes.DataRequirementValueFilter;
  }

  /** An attribute to filter on (0..1) */
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

  /** A parameter to search on (0..1) */
  getSearchParam(): string | undefined {
    return this.searchParam;
  }

  /** Sets `searchParam`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setSearchParam(searchParam: string | undefined): this {
    return this.setFieldValue('searchParam', searchParam);
  }

  hasSearchParam(): boolean {
    return this.hasFieldValue('searchParam');
  }

  /** The element carrying the id and extensions of `searchParam`. Created when absent. */
  getSearchParamElement(): Element {
    if (this._searchParam === undefined) {
      this._searchParam = new Element();
    }
    return this._searchParam;
  }

  setSearchParamElement(searchParamElement: Element | undefined): this {
    this._searchParam = searchParamElement;
    return this;
  }

  /** eq | gt | lt | ge | le | sa | eb (0..1) */
  getComparator(): valueSetCodes.ValueFilterComparator | undefined {
    return this.comparator;
  }

  /** Sets `comparator`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setComparator(comparator: valueSetCodes.ValueFilterComparator | undefined): this {
    return this.setFieldValue('comparator', comparator);
  }

  hasComparator(): boolean {
    return this.hasFieldValue('comparator');
  }

  /** The element carrying the id and extensions of `comparator`. Created when absent. */
  getComparatorElement(): Element {
    if (this._comparator === undefined) {
      this._comparator = new Element();
    }
    return this._comparator;
  }

  setComparatorElement(comparatorElement: Element | undefined): this {
    this._comparator = comparatorElement;
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

modelTypeRegistry.register('DataRequirementValueFilter', DataRequirementValueFilter, false);

/**
 * Order of the results
 */
export class DataRequirementSort extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'path',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'path', typeCode: 'string' }],
    },
    {
      elementName: 'direction',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'direction', typeCode: 'code', allowedCodes: valueSetCodes.SortDirection },
      ],
    },
  ];

  /** The name of the attribute to perform the sort (1..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;

  /** ascending | descending (1..1) */
  direction?: valueSetCodes.SortDirection;
  /** Id and extensions of the primitive `direction`. */
  _direction?: Element;

  override fhirType(): string {
    return 'DataRequirement.sort';
  }

  /** FHIR JSON for this DataRequirementSort, typed as the plain `DataRequirementSort` data type. */
  override toJSON(): plainTypes.DataRequirementSort {
    return this.serialize() as plainTypes.DataRequirementSort;
  }

  /** The name of the attribute to perform the sort (1..1) */
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

  /** ascending | descending (1..1) */
  getDirection(): valueSetCodes.SortDirection | undefined {
    return this.direction;
  }

  /** Sets `direction`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setDirection(direction: valueSetCodes.SortDirection | undefined): this {
    return this.setFieldValue('direction', direction);
  }

  hasDirection(): boolean {
    return this.hasFieldValue('direction');
  }

  /** The element carrying the id and extensions of `direction`. Created when absent. */
  getDirectionElement(): Element {
    if (this._direction === undefined) {
      this._direction = new Element();
    }
    return this._direction;
  }

  setDirectionElement(directionElement: Element | undefined): this {
    this._direction = directionElement;
    return this;
  }
}

modelTypeRegistry.register('DataRequirementSort', DataRequirementSort, false);
