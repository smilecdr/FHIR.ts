/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Range } from './range';
import { Reference } from './reference';

/**
 * Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service.
 */
export class ObservationDefinition extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'category',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'permittedDataType',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'permittedDataType',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ObservationDataType,
        },
      ],
    },
    {
      elementName: 'multipleResultsAllowed',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'multipleResultsAllowed', typeCode: 'boolean' }],
    },
    {
      elementName: 'method',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'method', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'preferredReportName',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'preferredReportName', typeCode: 'string' }],
    },
    {
      elementName: 'quantitativeDetails',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'quantitativeDetails', typeCode: 'ObservationDefinitionQuantitativeDetails' },
      ],
    },
    {
      elementName: 'qualifiedInterval',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'qualifiedInterval', typeCode: 'ObservationDefinitionQualifiedInterval' }],
    },
    {
      elementName: 'validCodedValueSet',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'validCodedValueSet', typeCode: 'Reference', targetResourceTypes: ['ValueSet'] },
      ],
    },
    {
      elementName: 'normalCodedValueSet',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'normalCodedValueSet',
          typeCode: 'Reference',
          targetResourceTypes: ['ValueSet'],
        },
      ],
    },
    {
      elementName: 'abnormalCodedValueSet',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'abnormalCodedValueSet',
          typeCode: 'Reference',
          targetResourceTypes: ['ValueSet'],
        },
      ],
    },
    {
      elementName: 'criticalCodedValueSet',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'criticalCodedValueSet',
          typeCode: 'Reference',
          targetResourceTypes: ['ValueSet'],
        },
      ],
    },
  ];

  readonly resourceType = 'ObservationDefinition';

  /** Category of observation (0..*) */
  category?: CodeableConcept[];

  /** Type of observation (code / type) (1..1) */
  code?: CodeableConcept;

  /** Business identifier for this ObservationDefinition instance (0..*) */
  identifier?: Identifier[];

  /** Quantity | CodeableConcept | string | boolean | integer | Range | Ratio | SampledData | time | dateTime | Period (0..*) */
  permittedDataType?: valueSetCodes.ObservationDataType[];
  /** Id and extensions of the primitive `permittedDataType`. */
  _permittedDataType?: (Element | null)[];

  /** Multiple results allowed (0..1) */
  multipleResultsAllowed?: boolean;
  /** Id and extensions of the primitive `multipleResultsAllowed`. */
  _multipleResultsAllowed?: Element;

  /** Method used to produce the observation (0..1) */
  method?: CodeableConcept;

  /** Preferred report name (0..1) */
  preferredReportName?: string;
  /** Id and extensions of the primitive `preferredReportName`. */
  _preferredReportName?: Element;

  /** Characteristics of quantitative results (0..1) */
  quantitativeDetails?: ObservationDefinitionQuantitativeDetails;

  /** Qualified range for continuous and ordinal observation results (0..*) */
  qualifiedInterval?: ObservationDefinitionQualifiedInterval[];

  /** Value set of valid coded values for the observations conforming to this ObservationDefinition (0..1) */
  validCodedValueSet?: Reference;

  /** Value set of normal coded values for the observations conforming to this ObservationDefinition (0..1) */
  normalCodedValueSet?: Reference;

  /** Value set of abnormal coded values for the observations conforming to this ObservationDefinition (0..1) */
  abnormalCodedValueSet?: Reference;

  /** Value set of critical coded values for the observations conforming to this ObservationDefinition (0..1) */
  criticalCodedValueSet?: Reference;

  override fhirType(): string {
    return 'ObservationDefinition';
  }

  /** FHIR JSON for this ObservationDefinition, typed as the plain `ObservationDefinition` data type. */
  override toJSON(): plainTypes.ObservationDefinition {
    return this.serialize() as plainTypes.ObservationDefinition;
  }

  /** Category of observation (0..*) Never undefined; an empty list is created when absent. */
  getCategory(): CodeableConcept[] {
    if (this.category === undefined) {
      this.category = [];
    }
    return this.category;
  }

  setCategory(category: CodeableConcept[] | undefined): this {
    return this.setFieldValue('category', category);
  }

  hasCategory(): boolean {
    return this.hasFieldValue('category');
  }

  /** Appends a new, empty CodeableConcept to `category` and returns it so it can be filled in. */
  addCategory(): CodeableConcept;
  /** Appends the given CodeableConcept to `category` and returns this object for chaining. */
  addCategory(codeableConcept: CodeableConcept): this;
  addCategory(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('category', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('category', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `category`. One is added when the list is empty. */
  getCategoryFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getCategory()[0];
    return firstCodeableConcept === undefined ? this.addCategory() : firstCodeableConcept;
  }

  /** Type of observation (code / type) (1..1) Created when absent. */
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

  /** Business identifier for this ObservationDefinition instance (0..*) Never undefined; an empty list is created when absent. */
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

  /** Quantity | CodeableConcept | string | boolean | integer | Range | Ratio | SampledData | time | dateTime | Period (0..*) Never undefined; an empty list is created when absent. */
  getPermittedDataType(): valueSetCodes.ObservationDataType[] {
    if (this.permittedDataType === undefined) {
      this.permittedDataType = [];
    }
    return this.permittedDataType;
  }

  setPermittedDataType(permittedDataType: valueSetCodes.ObservationDataType[] | undefined): this {
    return this.setFieldValue('permittedDataType', permittedDataType);
  }

  hasPermittedDataType(): boolean {
    return this.hasFieldValue('permittedDataType');
  }

  /** Appends one value to `permittedDataType`. Throws a FhirModelError when it is not a valid FHIR code. */
  addPermittedDataType(permittedDataType: valueSetCodes.ObservationDataType): this {
    return this.addFieldValue('permittedDataType', permittedDataType);
  }

  /** Multiple results allowed (0..1) */
  getMultipleResultsAllowed(): boolean | undefined {
    return this.multipleResultsAllowed;
  }

  /** Sets `multipleResultsAllowed`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setMultipleResultsAllowed(multipleResultsAllowed: boolean | undefined): this {
    return this.setFieldValue('multipleResultsAllowed', multipleResultsAllowed);
  }

  hasMultipleResultsAllowed(): boolean {
    return this.hasFieldValue('multipleResultsAllowed');
  }

  /** The element carrying the id and extensions of `multipleResultsAllowed`. Created when absent. */
  getMultipleResultsAllowedElement(): Element {
    if (this._multipleResultsAllowed === undefined) {
      this._multipleResultsAllowed = new Element();
    }
    return this._multipleResultsAllowed;
  }

  setMultipleResultsAllowedElement(multipleResultsAllowedElement: Element | undefined): this {
    this._multipleResultsAllowed = multipleResultsAllowedElement;
    return this;
  }

  /** Method used to produce the observation (0..1) Created when absent. */
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

  /** Preferred report name (0..1) */
  getPreferredReportName(): string | undefined {
    return this.preferredReportName;
  }

  /** Sets `preferredReportName`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPreferredReportName(preferredReportName: string | undefined): this {
    return this.setFieldValue('preferredReportName', preferredReportName);
  }

  hasPreferredReportName(): boolean {
    return this.hasFieldValue('preferredReportName');
  }

  /** The element carrying the id and extensions of `preferredReportName`. Created when absent. */
  getPreferredReportNameElement(): Element {
    if (this._preferredReportName === undefined) {
      this._preferredReportName = new Element();
    }
    return this._preferredReportName;
  }

  setPreferredReportNameElement(preferredReportNameElement: Element | undefined): this {
    this._preferredReportName = preferredReportNameElement;
    return this;
  }

  /** Characteristics of quantitative results (0..1) Created when absent. */
  getQuantitativeDetails(): ObservationDefinitionQuantitativeDetails {
    if (this.quantitativeDetails === undefined) {
      this.quantitativeDetails = new ObservationDefinitionQuantitativeDetails();
    }
    return this.quantitativeDetails;
  }

  setQuantitativeDetails(
    quantitativeDetails: ObservationDefinitionQuantitativeDetails | undefined
  ): this {
    return this.setFieldValue('quantitativeDetails', quantitativeDetails);
  }

  hasQuantitativeDetails(): boolean {
    return this.hasFieldValue('quantitativeDetails');
  }

  /** Qualified range for continuous and ordinal observation results (0..*) Never undefined; an empty list is created when absent. */
  getQualifiedInterval(): ObservationDefinitionQualifiedInterval[] {
    if (this.qualifiedInterval === undefined) {
      this.qualifiedInterval = [];
    }
    return this.qualifiedInterval;
  }

  setQualifiedInterval(
    qualifiedInterval: ObservationDefinitionQualifiedInterval[] | undefined
  ): this {
    return this.setFieldValue('qualifiedInterval', qualifiedInterval);
  }

  hasQualifiedInterval(): boolean {
    return this.hasFieldValue('qualifiedInterval');
  }

  /** Appends a new, empty ObservationDefinitionQualifiedInterval to `qualifiedInterval` and returns it so it can be filled in. */
  addQualifiedInterval(): ObservationDefinitionQualifiedInterval;
  /** Appends the given ObservationDefinitionQualifiedInterval to `qualifiedInterval` and returns this object for chaining. */
  addQualifiedInterval(
    observationDefinitionQualifiedInterval: ObservationDefinitionQualifiedInterval
  ): this;
  addQualifiedInterval(
    observationDefinitionQualifiedInterval?: ObservationDefinitionQualifiedInterval
  ): ObservationDefinitionQualifiedInterval | this {
    if (observationDefinitionQualifiedInterval !== undefined) {
      return this.addFieldValue('qualifiedInterval', observationDefinitionQualifiedInterval);
    }
    const createdObservationDefinitionQualifiedInterval =
      new ObservationDefinitionQualifiedInterval();
    this.addFieldValue('qualifiedInterval', createdObservationDefinitionQualifiedInterval);
    return createdObservationDefinitionQualifiedInterval;
  }

  /** The first ObservationDefinitionQualifiedInterval of `qualifiedInterval`. One is added when the list is empty. */
  getQualifiedIntervalFirstRep(): ObservationDefinitionQualifiedInterval {
    const firstObservationDefinitionQualifiedInterval = this.getQualifiedInterval()[0];
    return firstObservationDefinitionQualifiedInterval === undefined
      ? this.addQualifiedInterval()
      : firstObservationDefinitionQualifiedInterval;
  }

  /** Value set of valid coded values for the observations conforming to this ObservationDefinition (0..1) Created when absent. */
  getValidCodedValueSet(): Reference {
    if (this.validCodedValueSet === undefined) {
      this.validCodedValueSet = new Reference();
    }
    return this.validCodedValueSet;
  }

  setValidCodedValueSet(validCodedValueSet: Reference | undefined): this {
    return this.setFieldValue('validCodedValueSet', validCodedValueSet);
  }

  hasValidCodedValueSet(): boolean {
    return this.hasFieldValue('validCodedValueSet');
  }

  /** Value set of normal coded values for the observations conforming to this ObservationDefinition (0..1) Created when absent. */
  getNormalCodedValueSet(): Reference {
    if (this.normalCodedValueSet === undefined) {
      this.normalCodedValueSet = new Reference();
    }
    return this.normalCodedValueSet;
  }

  setNormalCodedValueSet(normalCodedValueSet: Reference | undefined): this {
    return this.setFieldValue('normalCodedValueSet', normalCodedValueSet);
  }

  hasNormalCodedValueSet(): boolean {
    return this.hasFieldValue('normalCodedValueSet');
  }

  /** Value set of abnormal coded values for the observations conforming to this ObservationDefinition (0..1) Created when absent. */
  getAbnormalCodedValueSet(): Reference {
    if (this.abnormalCodedValueSet === undefined) {
      this.abnormalCodedValueSet = new Reference();
    }
    return this.abnormalCodedValueSet;
  }

  setAbnormalCodedValueSet(abnormalCodedValueSet: Reference | undefined): this {
    return this.setFieldValue('abnormalCodedValueSet', abnormalCodedValueSet);
  }

  hasAbnormalCodedValueSet(): boolean {
    return this.hasFieldValue('abnormalCodedValueSet');
  }

  /** Value set of critical coded values for the observations conforming to this ObservationDefinition (0..1) Created when absent. */
  getCriticalCodedValueSet(): Reference {
    if (this.criticalCodedValueSet === undefined) {
      this.criticalCodedValueSet = new Reference();
    }
    return this.criticalCodedValueSet;
  }

  setCriticalCodedValueSet(criticalCodedValueSet: Reference | undefined): this {
    return this.setFieldValue('criticalCodedValueSet', criticalCodedValueSet);
  }

  hasCriticalCodedValueSet(): boolean {
    return this.hasFieldValue('criticalCodedValueSet');
  }
}

modelTypeRegistry.register('ObservationDefinition', ObservationDefinition, true);

/** True when the value is a ObservationDefinition model instance. */
export function isObservationDefinition(candidate: unknown): candidate is ObservationDefinition {
  return candidate instanceof ObservationDefinition;
}

/**
 * Characteristics of quantitative results
 */
export class ObservationDefinitionQuantitativeDetails extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'customaryUnit',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'customaryUnit', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'unit',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'unit', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'conversionFactor',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'conversionFactor', typeCode: 'decimal' }],
    },
    {
      elementName: 'decimalPrecision',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'decimalPrecision', typeCode: 'integer' }],
    },
  ];

  /** Customary unit for quantitative results (0..1) */
  customaryUnit?: CodeableConcept;

  /** SI unit for quantitative results (0..1) */
  unit?: CodeableConcept;

  /** SI to Customary unit conversion factor (0..1) */
  conversionFactor?: number;
  /** Id and extensions of the primitive `conversionFactor`. */
  _conversionFactor?: Element;

  /** Decimal precision of observation quantitative results (0..1) */
  decimalPrecision?: number;
  /** Id and extensions of the primitive `decimalPrecision`. */
  _decimalPrecision?: Element;

  override fhirType(): string {
    return 'ObservationDefinition.quantitativeDetails';
  }

  /** FHIR JSON for this ObservationDefinitionQuantitativeDetails, typed as the plain `ObservationDefinitionQuantitativeDetails` data type. */
  override toJSON(): plainTypes.ObservationDefinitionQuantitativeDetails {
    return this.serialize() as plainTypes.ObservationDefinitionQuantitativeDetails;
  }

  /** Customary unit for quantitative results (0..1) Created when absent. */
  getCustomaryUnit(): CodeableConcept {
    if (this.customaryUnit === undefined) {
      this.customaryUnit = new CodeableConcept();
    }
    return this.customaryUnit;
  }

  setCustomaryUnit(customaryUnit: CodeableConcept | undefined): this {
    return this.setFieldValue('customaryUnit', customaryUnit);
  }

  hasCustomaryUnit(): boolean {
    return this.hasFieldValue('customaryUnit');
  }

  /** SI unit for quantitative results (0..1) Created when absent. */
  getUnit(): CodeableConcept {
    if (this.unit === undefined) {
      this.unit = new CodeableConcept();
    }
    return this.unit;
  }

  setUnit(unit: CodeableConcept | undefined): this {
    return this.setFieldValue('unit', unit);
  }

  hasUnit(): boolean {
    return this.hasFieldValue('unit');
  }

  /** SI to Customary unit conversion factor (0..1) */
  getConversionFactor(): number | undefined {
    return this.conversionFactor;
  }

  /** Sets `conversionFactor`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setConversionFactor(conversionFactor: number | undefined): this {
    return this.setFieldValue('conversionFactor', conversionFactor);
  }

  hasConversionFactor(): boolean {
    return this.hasFieldValue('conversionFactor');
  }

  /** The element carrying the id and extensions of `conversionFactor`. Created when absent. */
  getConversionFactorElement(): Element {
    if (this._conversionFactor === undefined) {
      this._conversionFactor = new Element();
    }
    return this._conversionFactor;
  }

  setConversionFactorElement(conversionFactorElement: Element | undefined): this {
    this._conversionFactor = conversionFactorElement;
    return this;
  }

  /** Decimal precision of observation quantitative results (0..1) */
  getDecimalPrecision(): number | undefined {
    return this.decimalPrecision;
  }

  /** Sets `decimalPrecision`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setDecimalPrecision(decimalPrecision: number | undefined): this {
    return this.setFieldValue('decimalPrecision', decimalPrecision);
  }

  hasDecimalPrecision(): boolean {
    return this.hasFieldValue('decimalPrecision');
  }

  /** The element carrying the id and extensions of `decimalPrecision`. Created when absent. */
  getDecimalPrecisionElement(): Element {
    if (this._decimalPrecision === undefined) {
      this._decimalPrecision = new Element();
    }
    return this._decimalPrecision;
  }

  setDecimalPrecisionElement(decimalPrecisionElement: Element | undefined): this {
    this._decimalPrecision = decimalPrecisionElement;
    return this;
  }
}

modelTypeRegistry.register(
  'ObservationDefinitionQuantitativeDetails',
  ObservationDefinitionQuantitativeDetails,
  false
);

/**
 * Qualified range for continuous and ordinal observation results
 */
export class ObservationDefinitionQualifiedInterval extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'category',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'category',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ObservationRangeCategory,
        },
      ],
    },
    {
      elementName: 'range',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'range', typeCode: 'Range' }],
    },
    {
      elementName: 'context',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'context', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'appliesTo',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'appliesTo', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'gender',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'gender', typeCode: 'code', allowedCodes: valueSetCodes.AdministrativeGender },
      ],
    },
    {
      elementName: 'age',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'age', typeCode: 'Range' }],
    },
    {
      elementName: 'gestationalAge',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'gestationalAge', typeCode: 'Range' }],
    },
    {
      elementName: 'condition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'condition', typeCode: 'string' }],
    },
  ];

  /** reference | critical | absolute (0..1) */
  category?: valueSetCodes.ObservationRangeCategory;
  /** Id and extensions of the primitive `category`. */
  _category?: Element;

  /** The interval itself, for continuous or ordinal observations (0..1) */
  range?: Range;

  /** Range context qualifier (0..1) */
  context?: CodeableConcept;

  /** Targetted population of the range (0..*) */
  appliesTo?: CodeableConcept[];

  /** male | female | other | unknown (0..1) */
  gender?: valueSetCodes.AdministrativeGender;
  /** Id and extensions of the primitive `gender`. */
  _gender?: Element;

  /** Applicable age range, if relevant (0..1) */
  age?: Range;

  /** Applicable gestational age range, if relevant (0..1) */
  gestationalAge?: Range;

  /** Condition associated with the reference range (0..1) */
  condition?: string;
  /** Id and extensions of the primitive `condition`. */
  _condition?: Element;

  override fhirType(): string {
    return 'ObservationDefinition.qualifiedInterval';
  }

  /** FHIR JSON for this ObservationDefinitionQualifiedInterval, typed as the plain `ObservationDefinitionQualifiedInterval` data type. */
  override toJSON(): plainTypes.ObservationDefinitionQualifiedInterval {
    return this.serialize() as plainTypes.ObservationDefinitionQualifiedInterval;
  }

  /** reference | critical | absolute (0..1) */
  getCategory(): valueSetCodes.ObservationRangeCategory | undefined {
    return this.category;
  }

  /** Sets `category`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setCategory(category: valueSetCodes.ObservationRangeCategory | undefined): this {
    return this.setFieldValue('category', category);
  }

  hasCategory(): boolean {
    return this.hasFieldValue('category');
  }

  /** The element carrying the id and extensions of `category`. Created when absent. */
  getCategoryElement(): Element {
    if (this._category === undefined) {
      this._category = new Element();
    }
    return this._category;
  }

  setCategoryElement(categoryElement: Element | undefined): this {
    this._category = categoryElement;
    return this;
  }

  /** The interval itself, for continuous or ordinal observations (0..1) Created when absent. */
  getRange(): Range {
    if (this.range === undefined) {
      this.range = new Range();
    }
    return this.range;
  }

  setRange(range: Range | undefined): this {
    return this.setFieldValue('range', range);
  }

  hasRange(): boolean {
    return this.hasFieldValue('range');
  }

  /** Range context qualifier (0..1) Created when absent. */
  getContext(): CodeableConcept {
    if (this.context === undefined) {
      this.context = new CodeableConcept();
    }
    return this.context;
  }

  setContext(context: CodeableConcept | undefined): this {
    return this.setFieldValue('context', context);
  }

  hasContext(): boolean {
    return this.hasFieldValue('context');
  }

  /** Targetted population of the range (0..*) Never undefined; an empty list is created when absent. */
  getAppliesTo(): CodeableConcept[] {
    if (this.appliesTo === undefined) {
      this.appliesTo = [];
    }
    return this.appliesTo;
  }

  setAppliesTo(appliesTo: CodeableConcept[] | undefined): this {
    return this.setFieldValue('appliesTo', appliesTo);
  }

  hasAppliesTo(): boolean {
    return this.hasFieldValue('appliesTo');
  }

  /** Appends a new, empty CodeableConcept to `appliesTo` and returns it so it can be filled in. */
  addAppliesTo(): CodeableConcept;
  /** Appends the given CodeableConcept to `appliesTo` and returns this object for chaining. */
  addAppliesTo(codeableConcept: CodeableConcept): this;
  addAppliesTo(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('appliesTo', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('appliesTo', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `appliesTo`. One is added when the list is empty. */
  getAppliesToFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getAppliesTo()[0];
    return firstCodeableConcept === undefined ? this.addAppliesTo() : firstCodeableConcept;
  }

  /** male | female | other | unknown (0..1) */
  getGender(): valueSetCodes.AdministrativeGender | undefined {
    return this.gender;
  }

  /** Sets `gender`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setGender(gender: valueSetCodes.AdministrativeGender | undefined): this {
    return this.setFieldValue('gender', gender);
  }

  hasGender(): boolean {
    return this.hasFieldValue('gender');
  }

  /** The element carrying the id and extensions of `gender`. Created when absent. */
  getGenderElement(): Element {
    if (this._gender === undefined) {
      this._gender = new Element();
    }
    return this._gender;
  }

  setGenderElement(genderElement: Element | undefined): this {
    this._gender = genderElement;
    return this;
  }

  /** Applicable age range, if relevant (0..1) Created when absent. */
  getAge(): Range {
    if (this.age === undefined) {
      this.age = new Range();
    }
    return this.age;
  }

  setAge(age: Range | undefined): this {
    return this.setFieldValue('age', age);
  }

  hasAge(): boolean {
    return this.hasFieldValue('age');
  }

  /** Applicable gestational age range, if relevant (0..1) Created when absent. */
  getGestationalAge(): Range {
    if (this.gestationalAge === undefined) {
      this.gestationalAge = new Range();
    }
    return this.gestationalAge;
  }

  setGestationalAge(gestationalAge: Range | undefined): this {
    return this.setFieldValue('gestationalAge', gestationalAge);
  }

  hasGestationalAge(): boolean {
    return this.hasFieldValue('gestationalAge');
  }

  /** Condition associated with the reference range (0..1) */
  getCondition(): string | undefined {
    return this.condition;
  }

  /** Sets `condition`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setCondition(condition: string | undefined): this {
    return this.setFieldValue('condition', condition);
  }

  hasCondition(): boolean {
    return this.hasFieldValue('condition');
  }

  /** The element carrying the id and extensions of `condition`. Created when absent. */
  getConditionElement(): Element {
    if (this._condition === undefined) {
      this._condition = new Element();
    }
    return this._condition;
  }

  setConditionElement(conditionElement: Element | undefined): this {
    this._condition = conditionElement;
    return this;
  }
}

modelTypeRegistry.register(
  'ObservationDefinitionQualifiedInterval',
  ObservationDefinitionQualifiedInterval,
  false
);
