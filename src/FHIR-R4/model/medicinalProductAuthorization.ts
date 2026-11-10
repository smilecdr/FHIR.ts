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
import { Period } from './period';
import { Reference } from './reference';

/**
 * The regulatory authorization of a medicinal product.
 */
export class MedicinalProductAuthorization extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'subject',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'subject',
          typeCode: 'Reference',
          targetResourceTypes: ['MedicinalProduct', 'MedicinalProductPackaged'],
        },
      ],
    },
    {
      elementName: 'country',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'country', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'jurisdiction',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'jurisdiction', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'status',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'status', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'statusDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'statusDate', typeCode: 'dateTime' }],
    },
    {
      elementName: 'restoreDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'restoreDate', typeCode: 'dateTime' }],
    },
    {
      elementName: 'validityPeriod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'validityPeriod', typeCode: 'Period' }],
    },
    {
      elementName: 'dataExclusivityPeriod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'dataExclusivityPeriod', typeCode: 'Period' }],
    },
    {
      elementName: 'dateOfFirstAuthorization',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'dateOfFirstAuthorization', typeCode: 'dateTime' }],
    },
    {
      elementName: 'internationalBirthDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'internationalBirthDate', typeCode: 'dateTime' }],
    },
    {
      elementName: 'legalBasis',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'legalBasis', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'jurisdictionalAuthorization',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'jurisdictionalAuthorization',
          typeCode: 'MedicinalProductAuthorizationJurisdictionalAuthorization',
        },
      ],
    },
    {
      elementName: 'holder',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'holder', typeCode: 'Reference', targetResourceTypes: ['Organization'] }],
    },
    {
      elementName: 'regulator',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'regulator', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
    {
      elementName: 'procedure',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'procedure', typeCode: 'MedicinalProductAuthorizationProcedure' }],
    },
  ];

  readonly resourceType = 'MedicinalProductAuthorization';

  /** Business identifier for the marketing authorization, as assigned by a regulator (0..*) */
  identifier?: Identifier[];

  /** The medicinal product that is being authorized (0..1) */
  subject?: Reference;

  /** The country in which the marketing authorization has been granted (0..*) */
  country?: CodeableConcept[];

  /** Jurisdiction within a country (0..*) */
  jurisdiction?: CodeableConcept[];

  /** The status of the marketing authorization (0..1) */
  status?: CodeableConcept;

  /** The date at which the given status has become applicable (0..1) */
  statusDate?: string;
  /** Id and extensions of the primitive `statusDate`. */
  _statusDate?: Element;

  /** The date when a suspended the marketing or the marketing authorization of the product is anticipated to be restored (0..1) */
  restoreDate?: string;
  /** Id and extensions of the primitive `restoreDate`. */
  _restoreDate?: Element;

  /** The beginning of the time period in which the marketing authorization is in the specific status shall be specified A complete date consisting of day, month and year shall be specified using the ISO 8601 date format (0..1) */
  validityPeriod?: Period;

  /** A period of time after authorization before generic product applicatiosn can be submitted (0..1) */
  dataExclusivityPeriod?: Period;

  /** The date when the first authorization was granted by a Medicines Regulatory Agency (0..1) */
  dateOfFirstAuthorization?: string;
  /** Id and extensions of the primitive `dateOfFirstAuthorization`. */
  _dateOfFirstAuthorization?: Element;

  /** Date of first marketing authorization for a company's new medicinal product in any country in the World (0..1) */
  internationalBirthDate?: string;
  /** Id and extensions of the primitive `internationalBirthDate`. */
  _internationalBirthDate?: Element;

  /** The legal framework against which this authorization is granted (0..1) */
  legalBasis?: CodeableConcept;

  /** Authorization in areas within a country (0..*) */
  jurisdictionalAuthorization?: MedicinalProductAuthorizationJurisdictionalAuthorization[];

  /** Marketing Authorization Holder (0..1) */
  holder?: Reference;

  /** Medicines Regulatory Agency (0..1) */
  regulator?: Reference;

  /** The regulatory procedure for granting or amending a marketing authorization (0..1) */
  procedure?: MedicinalProductAuthorizationProcedure;

  override fhirType(): string {
    return 'MedicinalProductAuthorization';
  }

  /** FHIR JSON for this MedicinalProductAuthorization, typed as the plain `MedicinalProductAuthorization` data type. */
  override toJSON(): plainTypes.MedicinalProductAuthorization {
    return this.serialize() as plainTypes.MedicinalProductAuthorization;
  }

  /** Business identifier for the marketing authorization, as assigned by a regulator (0..*) Never undefined; an empty list is created when absent. */
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

  /** The medicinal product that is being authorized (0..1) Created when absent. */
  getSubject(): Reference {
    if (this.subject === undefined) {
      this.subject = new Reference();
    }
    return this.subject;
  }

  setSubject(subject: Reference | undefined): this {
    return this.setFieldValue('subject', subject);
  }

  hasSubject(): boolean {
    return this.hasFieldValue('subject');
  }

  /** The country in which the marketing authorization has been granted (0..*) Never undefined; an empty list is created when absent. */
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

  /** Jurisdiction within a country (0..*) Never undefined; an empty list is created when absent. */
  getJurisdiction(): CodeableConcept[] {
    if (this.jurisdiction === undefined) {
      this.jurisdiction = [];
    }
    return this.jurisdiction;
  }

  setJurisdiction(jurisdiction: CodeableConcept[] | undefined): this {
    return this.setFieldValue('jurisdiction', jurisdiction);
  }

  hasJurisdiction(): boolean {
    return this.hasFieldValue('jurisdiction');
  }

  /** Appends a new, empty CodeableConcept to `jurisdiction` and returns it so it can be filled in. */
  addJurisdiction(): CodeableConcept;
  /** Appends the given CodeableConcept to `jurisdiction` and returns this object for chaining. */
  addJurisdiction(codeableConcept: CodeableConcept): this;
  addJurisdiction(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('jurisdiction', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('jurisdiction', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `jurisdiction`. One is added when the list is empty. */
  getJurisdictionFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getJurisdiction()[0];
    return firstCodeableConcept === undefined ? this.addJurisdiction() : firstCodeableConcept;
  }

  /** The status of the marketing authorization (0..1) Created when absent. */
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

  /** The date at which the given status has become applicable (0..1) */
  getStatusDate(): string | undefined {
    return this.statusDate;
  }

  /** Sets `statusDate`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setStatusDate(statusDate: string | undefined): this {
    return this.setFieldValue('statusDate', statusDate);
  }

  hasStatusDate(): boolean {
    return this.hasFieldValue('statusDate');
  }

  /** The element carrying the id and extensions of `statusDate`. Created when absent. */
  getStatusDateElement(): Element {
    if (this._statusDate === undefined) {
      this._statusDate = new Element();
    }
    return this._statusDate;
  }

  setStatusDateElement(statusDateElement: Element | undefined): this {
    this._statusDate = statusDateElement;
    return this;
  }

  /** The date when a suspended the marketing or the marketing authorization of the product is anticipated to be restored (0..1) */
  getRestoreDate(): string | undefined {
    return this.restoreDate;
  }

  /** Sets `restoreDate`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setRestoreDate(restoreDate: string | undefined): this {
    return this.setFieldValue('restoreDate', restoreDate);
  }

  hasRestoreDate(): boolean {
    return this.hasFieldValue('restoreDate');
  }

  /** The element carrying the id and extensions of `restoreDate`. Created when absent. */
  getRestoreDateElement(): Element {
    if (this._restoreDate === undefined) {
      this._restoreDate = new Element();
    }
    return this._restoreDate;
  }

  setRestoreDateElement(restoreDateElement: Element | undefined): this {
    this._restoreDate = restoreDateElement;
    return this;
  }

  /** The beginning of the time period in which the marketing authorization is in the specific status shall be specified A complete date consisting of day, month and year shall be specified using the ISO 8601 date format (0..1) Created when absent. */
  getValidityPeriod(): Period {
    if (this.validityPeriod === undefined) {
      this.validityPeriod = new Period();
    }
    return this.validityPeriod;
  }

  setValidityPeriod(validityPeriod: Period | undefined): this {
    return this.setFieldValue('validityPeriod', validityPeriod);
  }

  hasValidityPeriod(): boolean {
    return this.hasFieldValue('validityPeriod');
  }

  /** A period of time after authorization before generic product applicatiosn can be submitted (0..1) Created when absent. */
  getDataExclusivityPeriod(): Period {
    if (this.dataExclusivityPeriod === undefined) {
      this.dataExclusivityPeriod = new Period();
    }
    return this.dataExclusivityPeriod;
  }

  setDataExclusivityPeriod(dataExclusivityPeriod: Period | undefined): this {
    return this.setFieldValue('dataExclusivityPeriod', dataExclusivityPeriod);
  }

  hasDataExclusivityPeriod(): boolean {
    return this.hasFieldValue('dataExclusivityPeriod');
  }

  /** The date when the first authorization was granted by a Medicines Regulatory Agency (0..1) */
  getDateOfFirstAuthorization(): string | undefined {
    return this.dateOfFirstAuthorization;
  }

  /** Sets `dateOfFirstAuthorization`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setDateOfFirstAuthorization(dateOfFirstAuthorization: string | undefined): this {
    return this.setFieldValue('dateOfFirstAuthorization', dateOfFirstAuthorization);
  }

  hasDateOfFirstAuthorization(): boolean {
    return this.hasFieldValue('dateOfFirstAuthorization');
  }

  /** The element carrying the id and extensions of `dateOfFirstAuthorization`. Created when absent. */
  getDateOfFirstAuthorizationElement(): Element {
    if (this._dateOfFirstAuthorization === undefined) {
      this._dateOfFirstAuthorization = new Element();
    }
    return this._dateOfFirstAuthorization;
  }

  setDateOfFirstAuthorizationElement(dateOfFirstAuthorizationElement: Element | undefined): this {
    this._dateOfFirstAuthorization = dateOfFirstAuthorizationElement;
    return this;
  }

  /** Date of first marketing authorization for a company's new medicinal product in any country in the World (0..1) */
  getInternationalBirthDate(): string | undefined {
    return this.internationalBirthDate;
  }

  /** Sets `internationalBirthDate`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setInternationalBirthDate(internationalBirthDate: string | undefined): this {
    return this.setFieldValue('internationalBirthDate', internationalBirthDate);
  }

  hasInternationalBirthDate(): boolean {
    return this.hasFieldValue('internationalBirthDate');
  }

  /** The element carrying the id and extensions of `internationalBirthDate`. Created when absent. */
  getInternationalBirthDateElement(): Element {
    if (this._internationalBirthDate === undefined) {
      this._internationalBirthDate = new Element();
    }
    return this._internationalBirthDate;
  }

  setInternationalBirthDateElement(internationalBirthDateElement: Element | undefined): this {
    this._internationalBirthDate = internationalBirthDateElement;
    return this;
  }

  /** The legal framework against which this authorization is granted (0..1) Created when absent. */
  getLegalBasis(): CodeableConcept {
    if (this.legalBasis === undefined) {
      this.legalBasis = new CodeableConcept();
    }
    return this.legalBasis;
  }

  setLegalBasis(legalBasis: CodeableConcept | undefined): this {
    return this.setFieldValue('legalBasis', legalBasis);
  }

  hasLegalBasis(): boolean {
    return this.hasFieldValue('legalBasis');
  }

  /** Authorization in areas within a country (0..*) Never undefined; an empty list is created when absent. */
  getJurisdictionalAuthorization(): MedicinalProductAuthorizationJurisdictionalAuthorization[] {
    if (this.jurisdictionalAuthorization === undefined) {
      this.jurisdictionalAuthorization = [];
    }
    return this.jurisdictionalAuthorization;
  }

  setJurisdictionalAuthorization(
    jurisdictionalAuthorization:
      MedicinalProductAuthorizationJurisdictionalAuthorization[] | undefined
  ): this {
    return this.setFieldValue('jurisdictionalAuthorization', jurisdictionalAuthorization);
  }

  hasJurisdictionalAuthorization(): boolean {
    return this.hasFieldValue('jurisdictionalAuthorization');
  }

  /** Appends a new, empty MedicinalProductAuthorizationJurisdictionalAuthorization to `jurisdictionalAuthorization` and returns it so it can be filled in. */
  addJurisdictionalAuthorization(): MedicinalProductAuthorizationJurisdictionalAuthorization;
  /** Appends the given MedicinalProductAuthorizationJurisdictionalAuthorization to `jurisdictionalAuthorization` and returns this object for chaining. */
  addJurisdictionalAuthorization(
    medicinalProductAuthorizationJurisdictionalAuthorization: MedicinalProductAuthorizationJurisdictionalAuthorization
  ): this;
  addJurisdictionalAuthorization(
    medicinalProductAuthorizationJurisdictionalAuthorization?: MedicinalProductAuthorizationJurisdictionalAuthorization
  ): MedicinalProductAuthorizationJurisdictionalAuthorization | this {
    if (medicinalProductAuthorizationJurisdictionalAuthorization !== undefined) {
      return this.addFieldValue(
        'jurisdictionalAuthorization',
        medicinalProductAuthorizationJurisdictionalAuthorization
      );
    }
    const createdMedicinalProductAuthorizationJurisdictionalAuthorization =
      new MedicinalProductAuthorizationJurisdictionalAuthorization();
    this.addFieldValue(
      'jurisdictionalAuthorization',
      createdMedicinalProductAuthorizationJurisdictionalAuthorization
    );
    return createdMedicinalProductAuthorizationJurisdictionalAuthorization;
  }

  /** The first MedicinalProductAuthorizationJurisdictionalAuthorization of `jurisdictionalAuthorization`. One is added when the list is empty. */
  getJurisdictionalAuthorizationFirstRep(): MedicinalProductAuthorizationJurisdictionalAuthorization {
    const firstMedicinalProductAuthorizationJurisdictionalAuthorization =
      this.getJurisdictionalAuthorization()[0];
    return firstMedicinalProductAuthorizationJurisdictionalAuthorization === undefined
      ? this.addJurisdictionalAuthorization()
      : firstMedicinalProductAuthorizationJurisdictionalAuthorization;
  }

  /** Marketing Authorization Holder (0..1) Created when absent. */
  getHolder(): Reference {
    if (this.holder === undefined) {
      this.holder = new Reference();
    }
    return this.holder;
  }

  setHolder(holder: Reference | undefined): this {
    return this.setFieldValue('holder', holder);
  }

  hasHolder(): boolean {
    return this.hasFieldValue('holder');
  }

  /** Medicines Regulatory Agency (0..1) Created when absent. */
  getRegulator(): Reference {
    if (this.regulator === undefined) {
      this.regulator = new Reference();
    }
    return this.regulator;
  }

  setRegulator(regulator: Reference | undefined): this {
    return this.setFieldValue('regulator', regulator);
  }

  hasRegulator(): boolean {
    return this.hasFieldValue('regulator');
  }

  /** The regulatory procedure for granting or amending a marketing authorization (0..1) Created when absent. */
  getProcedure(): MedicinalProductAuthorizationProcedure {
    if (this.procedure === undefined) {
      this.procedure = new MedicinalProductAuthorizationProcedure();
    }
    return this.procedure;
  }

  setProcedure(procedure: MedicinalProductAuthorizationProcedure | undefined): this {
    return this.setFieldValue('procedure', procedure);
  }

  hasProcedure(): boolean {
    return this.hasFieldValue('procedure');
  }
}

modelTypeRegistry.register('MedicinalProductAuthorization', MedicinalProductAuthorization, true);

/** True when the value is a MedicinalProductAuthorization model instance. */
export function isMedicinalProductAuthorization(
  candidate: unknown
): candidate is MedicinalProductAuthorization {
  return candidate instanceof MedicinalProductAuthorization;
}

/**
 * Authorization in areas within a country
 */
export class MedicinalProductAuthorizationJurisdictionalAuthorization extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'country',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'country', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'jurisdiction',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'jurisdiction', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'legalStatusOfSupply',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'legalStatusOfSupply', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'validityPeriod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'validityPeriod', typeCode: 'Period' }],
    },
  ];

  /** The assigned number for the marketing authorization (0..*) */
  identifier?: Identifier[];

  /** Country of authorization (0..1) */
  country?: CodeableConcept;

  /** Jurisdiction within a country (0..*) */
  jurisdiction?: CodeableConcept[];

  /** The legal status of supply in a jurisdiction or region (0..1) */
  legalStatusOfSupply?: CodeableConcept;

  /** The start and expected end date of the authorization (0..1) */
  validityPeriod?: Period;

  override fhirType(): string {
    return 'MedicinalProductAuthorization.jurisdictionalAuthorization';
  }

  /** FHIR JSON for this MedicinalProductAuthorizationJurisdictionalAuthorization, typed as the plain `MedicinalProductAuthorizationJurisdictionalAuthorization` data type. */
  override toJSON(): plainTypes.MedicinalProductAuthorizationJurisdictionalAuthorization {
    return this.serialize() as plainTypes.MedicinalProductAuthorizationJurisdictionalAuthorization;
  }

  /** The assigned number for the marketing authorization (0..*) Never undefined; an empty list is created when absent. */
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

  /** Country of authorization (0..1) Created when absent. */
  getCountry(): CodeableConcept {
    if (this.country === undefined) {
      this.country = new CodeableConcept();
    }
    return this.country;
  }

  setCountry(country: CodeableConcept | undefined): this {
    return this.setFieldValue('country', country);
  }

  hasCountry(): boolean {
    return this.hasFieldValue('country');
  }

  /** Jurisdiction within a country (0..*) Never undefined; an empty list is created when absent. */
  getJurisdiction(): CodeableConcept[] {
    if (this.jurisdiction === undefined) {
      this.jurisdiction = [];
    }
    return this.jurisdiction;
  }

  setJurisdiction(jurisdiction: CodeableConcept[] | undefined): this {
    return this.setFieldValue('jurisdiction', jurisdiction);
  }

  hasJurisdiction(): boolean {
    return this.hasFieldValue('jurisdiction');
  }

  /** Appends a new, empty CodeableConcept to `jurisdiction` and returns it so it can be filled in. */
  addJurisdiction(): CodeableConcept;
  /** Appends the given CodeableConcept to `jurisdiction` and returns this object for chaining. */
  addJurisdiction(codeableConcept: CodeableConcept): this;
  addJurisdiction(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('jurisdiction', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('jurisdiction', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `jurisdiction`. One is added when the list is empty. */
  getJurisdictionFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getJurisdiction()[0];
    return firstCodeableConcept === undefined ? this.addJurisdiction() : firstCodeableConcept;
  }

  /** The legal status of supply in a jurisdiction or region (0..1) Created when absent. */
  getLegalStatusOfSupply(): CodeableConcept {
    if (this.legalStatusOfSupply === undefined) {
      this.legalStatusOfSupply = new CodeableConcept();
    }
    return this.legalStatusOfSupply;
  }

  setLegalStatusOfSupply(legalStatusOfSupply: CodeableConcept | undefined): this {
    return this.setFieldValue('legalStatusOfSupply', legalStatusOfSupply);
  }

  hasLegalStatusOfSupply(): boolean {
    return this.hasFieldValue('legalStatusOfSupply');
  }

  /** The start and expected end date of the authorization (0..1) Created when absent. */
  getValidityPeriod(): Period {
    if (this.validityPeriod === undefined) {
      this.validityPeriod = new Period();
    }
    return this.validityPeriod;
  }

  setValidityPeriod(validityPeriod: Period | undefined): this {
    return this.setFieldValue('validityPeriod', validityPeriod);
  }

  hasValidityPeriod(): boolean {
    return this.hasFieldValue('validityPeriod');
  }
}

modelTypeRegistry.register(
  'MedicinalProductAuthorizationJurisdictionalAuthorization',
  MedicinalProductAuthorizationJurisdictionalAuthorization,
  false
);

/**
 * The regulatory procedure for granting or amending a marketing authorization
 */
export class MedicinalProductAuthorizationProcedure extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
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
      elementName: 'date',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'datePeriod', typeCode: 'Period' },
        { jsonKey: 'dateDateTime', typeCode: 'dateTime' },
      ],
    },
    {
      elementName: 'application',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'application', typeCode: 'MedicinalProductAuthorizationProcedure' }],
    },
  ];

  /** Identifier for this procedure (0..1) */
  identifier?: Identifier;

  /** Type of procedure (1..1) */
  type?: CodeableConcept;

  /** Date of procedure (0..1) */
  datePeriod?: Period;
  /** Date of procedure (0..1) */
  dateDateTime?: string;
  /** Id and extensions of the primitive `dateDateTime`. */
  _dateDateTime?: Element;

  /** Applcations submitted to obtain a marketing authorization (0..*) */
  application?: MedicinalProductAuthorizationProcedure[];

  override fhirType(): string {
    return 'MedicinalProductAuthorization.procedure';
  }

  /** FHIR JSON for this MedicinalProductAuthorizationProcedure, typed as the plain `MedicinalProductAuthorizationProcedure` data type. */
  override toJSON(): plainTypes.MedicinalProductAuthorizationProcedure {
    return this.serialize() as plainTypes.MedicinalProductAuthorizationProcedure;
  }

  /** Identifier for this procedure (0..1) Created when absent. */
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

  /** Type of procedure (1..1) Created when absent. */
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

  /** Date of procedure (0..1) Whichever type of `date[x]` is set. */
  getDate(): Period | string | undefined {
    return this.getChoiceValue<Period | string>('date');
  }

  /** True when any type of `date[x]` is set. */
  hasDate(): boolean {
    return this.hasChoiceValue('date');
  }

  getDatePeriod(): Period | undefined {
    return this.datePeriod;
  }

  /** Sets `date[x]` as Period and clears every other type of it. */
  setDatePeriod(datePeriod: Period | undefined): this {
    return this.setFieldValue('datePeriod', datePeriod);
  }

  hasDatePeriod(): boolean {
    return this.hasFieldValue('datePeriod');
  }

  getDateDateTime(): string | undefined {
    return this.dateDateTime;
  }

  /** Sets `date[x]` as dateTime and clears every other type of it. */
  setDateDateTime(dateDateTime: string | undefined): this {
    return this.setFieldValue('dateDateTime', dateDateTime);
  }

  hasDateDateTime(): boolean {
    return this.hasFieldValue('dateDateTime');
  }

  /** Applcations submitted to obtain a marketing authorization (0..*) Never undefined; an empty list is created when absent. */
  getApplication(): MedicinalProductAuthorizationProcedure[] {
    if (this.application === undefined) {
      this.application = [];
    }
    return this.application;
  }

  setApplication(application: MedicinalProductAuthorizationProcedure[] | undefined): this {
    return this.setFieldValue('application', application);
  }

  hasApplication(): boolean {
    return this.hasFieldValue('application');
  }

  /** Appends a new, empty MedicinalProductAuthorizationProcedure to `application` and returns it so it can be filled in. */
  addApplication(): MedicinalProductAuthorizationProcedure;
  /** Appends the given MedicinalProductAuthorizationProcedure to `application` and returns this object for chaining. */
  addApplication(
    medicinalProductAuthorizationProcedure: MedicinalProductAuthorizationProcedure
  ): this;
  addApplication(
    medicinalProductAuthorizationProcedure?: MedicinalProductAuthorizationProcedure
  ): MedicinalProductAuthorizationProcedure | this {
    if (medicinalProductAuthorizationProcedure !== undefined) {
      return this.addFieldValue('application', medicinalProductAuthorizationProcedure);
    }
    const createdMedicinalProductAuthorizationProcedure =
      new MedicinalProductAuthorizationProcedure();
    this.addFieldValue('application', createdMedicinalProductAuthorizationProcedure);
    return createdMedicinalProductAuthorizationProcedure;
  }

  /** The first MedicinalProductAuthorizationProcedure of `application`. One is added when the list is empty. */
  getApplicationFirstRep(): MedicinalProductAuthorizationProcedure {
    const firstMedicinalProductAuthorizationProcedure = this.getApplication()[0];
    return firstMedicinalProductAuthorizationProcedure === undefined
      ? this.addApplication()
      : firstMedicinalProductAuthorizationProcedure;
  }
}

modelTypeRegistry.register(
  'MedicinalProductAuthorizationProcedure',
  MedicinalProductAuthorizationProcedure,
  false
);
