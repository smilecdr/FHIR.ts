/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../models';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { CodeableReference } from './codeableReference';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';

/**
 * Regulatory approval, clearance or licencing related to a regulated product, treatment, facility or activity that is cited in a guidance, regulation, rule or legislative act. An example is Market Authorization relating to a Medicinal Product.
 */
export class RegulatedAuthorization extends DomainResource {
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
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'subject',
          typeCode: 'Reference',
          targetResourceTypes: [
            'ActivityDefinition',
            'BiologicallyDerivedProduct',
            'DeviceDefinition',
            'Ingredient',
            'Location',
            'ManufacturedItemDefinition',
            'MedicinalProductDefinition',
            'NutritionProduct',
            'ObservationDefinition',
            'Organization',
            'PackagedProductDefinition',
            'PlanDefinition',
            'Practitioner',
            'ResearchStudy',
            'SubstanceDefinition',
          ],
        },
      ],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'region',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'region', typeCode: 'CodeableConcept' }],
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
      elementName: 'validityPeriod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'validityPeriod', typeCode: 'Period' }],
    },
    {
      elementName: 'indication',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'indication', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'intendedUse',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'intendedUse', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'basis',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'basis', typeCode: 'CodeableConcept' }],
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
      elementName: 'attachedDocument',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'attachedDocument',
          typeCode: 'Reference',
          targetResourceTypes: ['DocumentReference'],
        },
      ],
    },
    {
      elementName: 'case',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'case', typeCode: 'RegulatedAuthorizationCase' }],
    },
  ];

  readonly resourceType = 'RegulatedAuthorization';

  /** Business identifier for the authorization, typically assigned by the authorizing body (0..*) */
  identifier?: Identifier[];

  /** The product type, treatment, facility or activity that is being authorized (0..*) */
  subject?: Reference[];

  /** Overall type of this authorization, for example drug marketing approval, orphan drug designation (0..1) */
  type?: CodeableConcept;

  /** General textual supporting information (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** The territory in which the authorization has been granted (0..*) */
  region?: CodeableConcept[];

  /** The status that is authorised e.g. approved. Intermediate states can be tracked with cases and applications (0..1) */
  status?: CodeableConcept;

  /** The date at which the current status was assigned (0..1) */
  statusDate?: string;
  /** Id and extensions of the primitive `statusDate`. */
  _statusDate?: Element;

  /** The time period in which the regulatory approval etc. is in effect, e.g. a Marketing Authorization includes the date of authorization and/or expiration date (0..1) */
  validityPeriod?: Period;

  /** Condition for which the use of the regulated product applies (0..*) */
  indication?: CodeableReference[];

  /** The intended use of the product, e.g. prevention, treatment (0..1) */
  intendedUse?: CodeableConcept;

  /** The legal/regulatory framework or reasons under which this authorization is granted (0..*) */
  basis?: CodeableConcept[];

  /** The organization that has been granted this authorization, by the regulator (0..1) */
  holder?: Reference;

  /** The regulatory authority or authorizing body granting the authorization (0..1) */
  regulator?: Reference;

  /** Additional information or supporting documentation about the authorization (0..*) */
  attachedDocument?: Reference[];

  /** The case or regulatory procedure for granting or amending a regulated authorization. Note: This area is subject to ongoing review and the workgroup is seeking implementer feedback on its use (see link at bottom of page) (0..1) */
  case?: RegulatedAuthorizationCase;

  override fhirType(): string {
    return 'RegulatedAuthorization';
  }

  /** FHIR JSON for this RegulatedAuthorization, typed as the plain `RegulatedAuthorization` data type. */
  override toJSON(): plainTypes.RegulatedAuthorization {
    return this.serialize() as plainTypes.RegulatedAuthorization;
  }

  /** Business identifier for the authorization, typically assigned by the authorizing body (0..*) Never undefined; an empty list is created when absent. */
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

  /** The product type, treatment, facility or activity that is being authorized (0..*) Never undefined; an empty list is created when absent. */
  getSubject(): Reference[] {
    if (this.subject === undefined) {
      this.subject = [];
    }
    return this.subject;
  }

  setSubject(subject: Reference[] | undefined): this {
    return this.setFieldValue('subject', subject);
  }

  hasSubject(): boolean {
    return this.hasFieldValue('subject');
  }

  /** Appends a new, empty Reference to `subject` and returns it so it can be filled in. */
  addSubject(): Reference;
  /** Appends the given Reference to `subject` and returns this object for chaining. */
  addSubject(reference: Reference): this;
  addSubject(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('subject', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('subject', createdReference);
    return createdReference;
  }

  /** The first Reference of `subject`. One is added when the list is empty. */
  getSubjectFirstRep(): Reference {
    const firstReference = this.getSubject()[0];
    return firstReference === undefined ? this.addSubject() : firstReference;
  }

  /** Overall type of this authorization, for example drug marketing approval, orphan drug designation (0..1) Created when absent. */
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

  /** General textual supporting information (0..1) */
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

  /** The territory in which the authorization has been granted (0..*) Never undefined; an empty list is created when absent. */
  getRegion(): CodeableConcept[] {
    if (this.region === undefined) {
      this.region = [];
    }
    return this.region;
  }

  setRegion(region: CodeableConcept[] | undefined): this {
    return this.setFieldValue('region', region);
  }

  hasRegion(): boolean {
    return this.hasFieldValue('region');
  }

  /** Appends a new, empty CodeableConcept to `region` and returns it so it can be filled in. */
  addRegion(): CodeableConcept;
  /** Appends the given CodeableConcept to `region` and returns this object for chaining. */
  addRegion(codeableConcept: CodeableConcept): this;
  addRegion(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('region', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('region', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `region`. One is added when the list is empty. */
  getRegionFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getRegion()[0];
    return firstCodeableConcept === undefined ? this.addRegion() : firstCodeableConcept;
  }

  /** The status that is authorised e.g. approved. Intermediate states can be tracked with cases and applications (0..1) Created when absent. */
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

  /** The date at which the current status was assigned (0..1) */
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

  /** The time period in which the regulatory approval etc. is in effect, e.g. a Marketing Authorization includes the date of authorization and/or expiration date (0..1) Created when absent. */
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

  /** Condition for which the use of the regulated product applies (0..*) Never undefined; an empty list is created when absent. */
  getIndication(): CodeableReference[] {
    if (this.indication === undefined) {
      this.indication = [];
    }
    return this.indication;
  }

  setIndication(indication: CodeableReference[] | undefined): this {
    return this.setFieldValue('indication', indication);
  }

  hasIndication(): boolean {
    return this.hasFieldValue('indication');
  }

  /** Appends a new, empty CodeableReference to `indication` and returns it so it can be filled in. */
  addIndication(): CodeableReference;
  /** Appends the given CodeableReference to `indication` and returns this object for chaining. */
  addIndication(codeableReference: CodeableReference): this;
  addIndication(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('indication', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('indication', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `indication`. One is added when the list is empty. */
  getIndicationFirstRep(): CodeableReference {
    const firstCodeableReference = this.getIndication()[0];
    return firstCodeableReference === undefined ? this.addIndication() : firstCodeableReference;
  }

  /** The intended use of the product, e.g. prevention, treatment (0..1) Created when absent. */
  getIntendedUse(): CodeableConcept {
    if (this.intendedUse === undefined) {
      this.intendedUse = new CodeableConcept();
    }
    return this.intendedUse;
  }

  setIntendedUse(intendedUse: CodeableConcept | undefined): this {
    return this.setFieldValue('intendedUse', intendedUse);
  }

  hasIntendedUse(): boolean {
    return this.hasFieldValue('intendedUse');
  }

  /** The legal/regulatory framework or reasons under which this authorization is granted (0..*) Never undefined; an empty list is created when absent. */
  getBasis(): CodeableConcept[] {
    if (this.basis === undefined) {
      this.basis = [];
    }
    return this.basis;
  }

  setBasis(basis: CodeableConcept[] | undefined): this {
    return this.setFieldValue('basis', basis);
  }

  hasBasis(): boolean {
    return this.hasFieldValue('basis');
  }

  /** Appends a new, empty CodeableConcept to `basis` and returns it so it can be filled in. */
  addBasis(): CodeableConcept;
  /** Appends the given CodeableConcept to `basis` and returns this object for chaining. */
  addBasis(codeableConcept: CodeableConcept): this;
  addBasis(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('basis', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('basis', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `basis`. One is added when the list is empty. */
  getBasisFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getBasis()[0];
    return firstCodeableConcept === undefined ? this.addBasis() : firstCodeableConcept;
  }

  /** The organization that has been granted this authorization, by the regulator (0..1) Created when absent. */
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

  /** The regulatory authority or authorizing body granting the authorization (0..1) Created when absent. */
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

  /** Additional information or supporting documentation about the authorization (0..*) Never undefined; an empty list is created when absent. */
  getAttachedDocument(): Reference[] {
    if (this.attachedDocument === undefined) {
      this.attachedDocument = [];
    }
    return this.attachedDocument;
  }

  setAttachedDocument(attachedDocument: Reference[] | undefined): this {
    return this.setFieldValue('attachedDocument', attachedDocument);
  }

  hasAttachedDocument(): boolean {
    return this.hasFieldValue('attachedDocument');
  }

  /** Appends a new, empty Reference to `attachedDocument` and returns it so it can be filled in. */
  addAttachedDocument(): Reference;
  /** Appends the given Reference to `attachedDocument` and returns this object for chaining. */
  addAttachedDocument(reference: Reference): this;
  addAttachedDocument(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('attachedDocument', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('attachedDocument', createdReference);
    return createdReference;
  }

  /** The first Reference of `attachedDocument`. One is added when the list is empty. */
  getAttachedDocumentFirstRep(): Reference {
    const firstReference = this.getAttachedDocument()[0];
    return firstReference === undefined ? this.addAttachedDocument() : firstReference;
  }

  /** The case or regulatory procedure for granting or amending a regulated authorization. Note: This area is subject to ongoing review and the workgroup is seeking implementer feedback on its use (see link at bottom of page) (0..1) Created when absent. */
  getCase(): RegulatedAuthorizationCase {
    if (this.case === undefined) {
      this.case = new RegulatedAuthorizationCase();
    }
    return this.case;
  }

  setCase(caseValue: RegulatedAuthorizationCase | undefined): this {
    return this.setFieldValue('case', caseValue);
  }

  hasCase(): boolean {
    return this.hasFieldValue('case');
  }
}

modelTypeRegistry.register('RegulatedAuthorization', RegulatedAuthorization, true);

/** True when the value is a RegulatedAuthorization model instance. */
export function isRegulatedAuthorization(candidate: unknown): candidate is RegulatedAuthorization {
  return candidate instanceof RegulatedAuthorization;
}

/**
 * The case or regulatory procedure for granting or amending a regulated authorization. Note: This area is subject to ongoing review and the workgroup is seeking implementer feedback on its use (see link at bottom of page)
 */
export class RegulatedAuthorizationCase extends BackboneElement {
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
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'status',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'status', typeCode: 'CodeableConcept' }],
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
      types: [{ jsonKey: 'application', typeCode: 'RegulatedAuthorizationCase' }],
    },
  ];

  /** Identifier by which this case can be referenced (0..1) */
  identifier?: Identifier;

  /** The defining type of case (0..1) */
  type?: CodeableConcept;

  /** The status associated with the case (0..1) */
  status?: CodeableConcept;

  /** Relevant date for this case (0..1) */
  datePeriod?: Period;
  /** Relevant date for this case (0..1) */
  dateDateTime?: string;
  /** Id and extensions of the primitive `dateDateTime`. */
  _dateDateTime?: Element;

  /** Applications submitted to obtain a regulated authorization. Steps within the longer running case or procedure (0..*) */
  application?: RegulatedAuthorizationCase[];

  override fhirType(): string {
    return 'RegulatedAuthorization.case';
  }

  /** FHIR JSON for this RegulatedAuthorizationCase, typed as the plain `RegulatedAuthorizationCase` data type. */
  override toJSON(): plainTypes.RegulatedAuthorizationCase {
    return this.serialize() as plainTypes.RegulatedAuthorizationCase;
  }

  /** Identifier by which this case can be referenced (0..1) Created when absent. */
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

  /** The defining type of case (0..1) Created when absent. */
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

  /** The status associated with the case (0..1) Created when absent. */
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

  /** Relevant date for this case (0..1) Whichever type of `date[x]` is set. */
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

  /** Applications submitted to obtain a regulated authorization. Steps within the longer running case or procedure (0..*) Never undefined; an empty list is created when absent. */
  getApplication(): RegulatedAuthorizationCase[] {
    if (this.application === undefined) {
      this.application = [];
    }
    return this.application;
  }

  setApplication(application: RegulatedAuthorizationCase[] | undefined): this {
    return this.setFieldValue('application', application);
  }

  hasApplication(): boolean {
    return this.hasFieldValue('application');
  }

  /** Appends a new, empty RegulatedAuthorizationCase to `application` and returns it so it can be filled in. */
  addApplication(): RegulatedAuthorizationCase;
  /** Appends the given RegulatedAuthorizationCase to `application` and returns this object for chaining. */
  addApplication(regulatedAuthorizationCase: RegulatedAuthorizationCase): this;
  addApplication(
    regulatedAuthorizationCase?: RegulatedAuthorizationCase
  ): RegulatedAuthorizationCase | this {
    if (regulatedAuthorizationCase !== undefined) {
      return this.addFieldValue('application', regulatedAuthorizationCase);
    }
    const createdRegulatedAuthorizationCase = new RegulatedAuthorizationCase();
    this.addFieldValue('application', createdRegulatedAuthorizationCase);
    return createdRegulatedAuthorizationCase;
  }

  /** The first RegulatedAuthorizationCase of `application`. One is added when the list is empty. */
  getApplicationFirstRep(): RegulatedAuthorizationCase {
    const firstRegulatedAuthorizationCase = this.getApplication()[0];
    return firstRegulatedAuthorizationCase === undefined
      ? this.addApplication()
      : firstRegulatedAuthorizationCase;
  }
}

modelTypeRegistry.register('RegulatedAuthorizationCase', RegulatedAuthorizationCase, false);
