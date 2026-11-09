/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../models';
import { Attachment } from './attachment';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { CodeableReference } from './codeableReference';
import { Coding } from './coding';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { MarketingStatus } from './marketingStatus';
import { Period } from './period';
import { Quantity } from './quantity';
import { Reference } from './reference';

/**
 * Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use, drug catalogs, to support prescribing, adverse events management etc.).
 */
export class MedicinalProductDefinition extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
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
      elementName: 'domain',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'domain', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'version',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'version', typeCode: 'string' }],
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
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'combinedPharmaceuticalDoseForm',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'combinedPharmaceuticalDoseForm', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'route',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'route', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'indication',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'indication', typeCode: 'markdown' }],
    },
    {
      elementName: 'legalStatusOfSupply',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'legalStatusOfSupply', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'additionalMonitoringIndicator',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'additionalMonitoringIndicator', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'specialMeasures',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'specialMeasures', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'pediatricUseIndicator',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'pediatricUseIndicator', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'classification',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'classification', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'marketingStatus',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'marketingStatus', typeCode: 'MarketingStatus' }],
    },
    {
      elementName: 'packagedMedicinalProduct',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'packagedMedicinalProduct', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'comprisedOf',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'comprisedOf',
          typeCode: 'Reference',
          targetResourceTypes: ['DeviceDefinition', 'ManufacturedItemDefinition'],
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
      elementName: 'impurity',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'impurity', typeCode: 'CodeableReference' }],
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
      elementName: 'masterFile',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'masterFile',
          typeCode: 'Reference',
          targetResourceTypes: ['DocumentReference'],
        },
      ],
    },
    {
      elementName: 'contact',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'contact', typeCode: 'MedicinalProductDefinitionContact' }],
    },
    {
      elementName: 'clinicalTrial',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'clinicalTrial', typeCode: 'Reference', targetResourceTypes: ['ResearchStudy'] },
      ],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'code', typeCode: 'Coding' }],
    },
    {
      elementName: 'name',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'name', typeCode: 'MedicinalProductDefinitionName' }],
    },
    {
      elementName: 'crossReference',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'crossReference', typeCode: 'MedicinalProductDefinitionCrossReference' }],
    },
    {
      elementName: 'operation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'operation', typeCode: 'MedicinalProductDefinitionOperation' }],
    },
    {
      elementName: 'characteristic',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'characteristic', typeCode: 'MedicinalProductDefinitionCharacteristic' }],
    },
  ];

  readonly resourceType = 'MedicinalProductDefinition';

  /** Business identifier for this product. Could be an MPID (0..*) */
  identifier?: Identifier[];

  /** Regulatory type, e.g. Investigational or Authorized (0..1) */
  type?: CodeableConcept;

  /** If this medicine applies to human or veterinary uses (0..1) */
  domain?: CodeableConcept;

  /** A business identifier relating to a specific version of the product (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** The status within the lifecycle of this product record (0..1) */
  status?: CodeableConcept;

  /** The date at which the given status became applicable (0..1) */
  statusDate?: string;
  /** Id and extensions of the primitive `statusDate`. */
  _statusDate?: Element;

  /** General description of this product (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** The dose form for a single part product, or combined form of a multiple part product (0..1) */
  combinedPharmaceuticalDoseForm?: CodeableConcept;

  /** The path by which the product is taken into or makes contact with the body (0..*) */
  route?: CodeableConcept[];

  /** Description of indication(s) for this product, used when structured indications are not required (0..1) */
  indication?: string;
  /** Id and extensions of the primitive `indication`. */
  _indication?: Element;

  /** The legal status of supply of the medicinal product as classified by the regulator (0..1) */
  legalStatusOfSupply?: CodeableConcept;

  /** Whether the Medicinal Product is subject to additional monitoring for regulatory reasons (0..1) */
  additionalMonitoringIndicator?: CodeableConcept;

  /** Whether the Medicinal Product is subject to special measures for regulatory reasons (0..*) */
  specialMeasures?: CodeableConcept[];

  /** If authorised for use in children (0..1) */
  pediatricUseIndicator?: CodeableConcept;

  /** Allows the product to be classified by various systems (0..*) */
  classification?: CodeableConcept[];

  /** Marketing status of the medicinal product, in contrast to marketing authorization (0..*) */
  marketingStatus?: MarketingStatus[];

  /** Package type for the product (0..*) */
  packagedMedicinalProduct?: CodeableConcept[];

  /** Types of medicinal manufactured items and/or devices that this product consists of, such as tablets, capsule, or syringes (0..*) */
  comprisedOf?: Reference[];

  /** The ingredients of this medicinal product - when not detailed in other resources (0..*) */
  ingredient?: CodeableConcept[];

  /** Any component of the drug product which is not the chemical entity defined as the drug substance, or an excipient in the drug product (0..*) */
  impurity?: CodeableReference[];

  /** Additional documentation about the medicinal product (0..*) */
  attachedDocument?: Reference[];

  /** A master file for the medicinal product (e.g. Pharmacovigilance System Master File) (0..*) */
  masterFile?: Reference[];

  /** A product specific contact, person (in a role), or an organization (0..*) */
  contact?: MedicinalProductDefinitionContact[];

  /** Clinical trials or studies that this product is involved in (0..*) */
  clinicalTrial?: Reference[];

  /** A code that this product is known by, within some formal terminology (0..*) */
  code?: Coding[];

  /** The product's name, including full name and possibly coded parts (1..*) */
  name?: MedicinalProductDefinitionName[];

  /** Reference to another product, e.g. for linking authorised to investigational product (0..*) */
  crossReference?: MedicinalProductDefinitionCrossReference[];

  /** A manufacturing or administrative process for the medicinal product (0..*) */
  operation?: MedicinalProductDefinitionOperation[];

  /** Key product features such as "sugar free", "modified release" (0..*) */
  characteristic?: MedicinalProductDefinitionCharacteristic[];

  override fhirType(): string {
    return 'MedicinalProductDefinition';
  }

  /** FHIR JSON for this MedicinalProductDefinition, typed as the plain `MedicinalProductDefinition` data type. */
  override toJSON(): plainTypes.MedicinalProductDefinition {
    return this.serialize() as plainTypes.MedicinalProductDefinition;
  }

  /** Business identifier for this product. Could be an MPID (0..*) Never undefined; an empty list is created when absent. */
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

  /** Regulatory type, e.g. Investigational or Authorized (0..1) Created when absent. */
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

  /** If this medicine applies to human or veterinary uses (0..1) Created when absent. */
  getDomain(): CodeableConcept {
    if (this.domain === undefined) {
      this.domain = new CodeableConcept();
    }
    return this.domain;
  }

  setDomain(domain: CodeableConcept | undefined): this {
    return this.setFieldValue('domain', domain);
  }

  hasDomain(): boolean {
    return this.hasFieldValue('domain');
  }

  /** A business identifier relating to a specific version of the product (0..1) */
  getVersion(): string | undefined {
    return this.version;
  }

  /** Sets `version`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setVersion(version: string | undefined): this {
    return this.setFieldValue('version', version);
  }

  hasVersion(): boolean {
    return this.hasFieldValue('version');
  }

  /** The element carrying the id and extensions of `version`. Created when absent. */
  getVersionElement(): Element {
    if (this._version === undefined) {
      this._version = new Element();
    }
    return this._version;
  }

  setVersionElement(versionElement: Element | undefined): this {
    this._version = versionElement;
    return this;
  }

  /** The status within the lifecycle of this product record (0..1) Created when absent. */
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

  /** The date at which the given status became applicable (0..1) */
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

  /** General description of this product (0..1) */
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

  /** The dose form for a single part product, or combined form of a multiple part product (0..1) Created when absent. */
  getCombinedPharmaceuticalDoseForm(): CodeableConcept {
    if (this.combinedPharmaceuticalDoseForm === undefined) {
      this.combinedPharmaceuticalDoseForm = new CodeableConcept();
    }
    return this.combinedPharmaceuticalDoseForm;
  }

  setCombinedPharmaceuticalDoseForm(
    combinedPharmaceuticalDoseForm: CodeableConcept | undefined
  ): this {
    return this.setFieldValue('combinedPharmaceuticalDoseForm', combinedPharmaceuticalDoseForm);
  }

  hasCombinedPharmaceuticalDoseForm(): boolean {
    return this.hasFieldValue('combinedPharmaceuticalDoseForm');
  }

  /** The path by which the product is taken into or makes contact with the body (0..*) Never undefined; an empty list is created when absent. */
  getRoute(): CodeableConcept[] {
    if (this.route === undefined) {
      this.route = [];
    }
    return this.route;
  }

  setRoute(route: CodeableConcept[] | undefined): this {
    return this.setFieldValue('route', route);
  }

  hasRoute(): boolean {
    return this.hasFieldValue('route');
  }

  /** Appends a new, empty CodeableConcept to `route` and returns it so it can be filled in. */
  addRoute(): CodeableConcept;
  /** Appends the given CodeableConcept to `route` and returns this object for chaining. */
  addRoute(codeableConcept: CodeableConcept): this;
  addRoute(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('route', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('route', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `route`. One is added when the list is empty. */
  getRouteFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getRoute()[0];
    return firstCodeableConcept === undefined ? this.addRoute() : firstCodeableConcept;
  }

  /** Description of indication(s) for this product, used when structured indications are not required (0..1) */
  getIndication(): string | undefined {
    return this.indication;
  }

  /** Sets `indication`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setIndication(indication: string | undefined): this {
    return this.setFieldValue('indication', indication);
  }

  hasIndication(): boolean {
    return this.hasFieldValue('indication');
  }

  /** The element carrying the id and extensions of `indication`. Created when absent. */
  getIndicationElement(): Element {
    if (this._indication === undefined) {
      this._indication = new Element();
    }
    return this._indication;
  }

  setIndicationElement(indicationElement: Element | undefined): this {
    this._indication = indicationElement;
    return this;
  }

  /** The legal status of supply of the medicinal product as classified by the regulator (0..1) Created when absent. */
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

  /** Whether the Medicinal Product is subject to additional monitoring for regulatory reasons (0..1) Created when absent. */
  getAdditionalMonitoringIndicator(): CodeableConcept {
    if (this.additionalMonitoringIndicator === undefined) {
      this.additionalMonitoringIndicator = new CodeableConcept();
    }
    return this.additionalMonitoringIndicator;
  }

  setAdditionalMonitoringIndicator(
    additionalMonitoringIndicator: CodeableConcept | undefined
  ): this {
    return this.setFieldValue('additionalMonitoringIndicator', additionalMonitoringIndicator);
  }

  hasAdditionalMonitoringIndicator(): boolean {
    return this.hasFieldValue('additionalMonitoringIndicator');
  }

  /** Whether the Medicinal Product is subject to special measures for regulatory reasons (0..*) Never undefined; an empty list is created when absent. */
  getSpecialMeasures(): CodeableConcept[] {
    if (this.specialMeasures === undefined) {
      this.specialMeasures = [];
    }
    return this.specialMeasures;
  }

  setSpecialMeasures(specialMeasures: CodeableConcept[] | undefined): this {
    return this.setFieldValue('specialMeasures', specialMeasures);
  }

  hasSpecialMeasures(): boolean {
    return this.hasFieldValue('specialMeasures');
  }

  /** Appends a new, empty CodeableConcept to `specialMeasures` and returns it so it can be filled in. */
  addSpecialMeasures(): CodeableConcept;
  /** Appends the given CodeableConcept to `specialMeasures` and returns this object for chaining. */
  addSpecialMeasures(codeableConcept: CodeableConcept): this;
  addSpecialMeasures(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('specialMeasures', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('specialMeasures', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `specialMeasures`. One is added when the list is empty. */
  getSpecialMeasuresFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getSpecialMeasures()[0];
    return firstCodeableConcept === undefined ? this.addSpecialMeasures() : firstCodeableConcept;
  }

  /** If authorised for use in children (0..1) Created when absent. */
  getPediatricUseIndicator(): CodeableConcept {
    if (this.pediatricUseIndicator === undefined) {
      this.pediatricUseIndicator = new CodeableConcept();
    }
    return this.pediatricUseIndicator;
  }

  setPediatricUseIndicator(pediatricUseIndicator: CodeableConcept | undefined): this {
    return this.setFieldValue('pediatricUseIndicator', pediatricUseIndicator);
  }

  hasPediatricUseIndicator(): boolean {
    return this.hasFieldValue('pediatricUseIndicator');
  }

  /** Allows the product to be classified by various systems (0..*) Never undefined; an empty list is created when absent. */
  getClassification(): CodeableConcept[] {
    if (this.classification === undefined) {
      this.classification = [];
    }
    return this.classification;
  }

  setClassification(classification: CodeableConcept[] | undefined): this {
    return this.setFieldValue('classification', classification);
  }

  hasClassification(): boolean {
    return this.hasFieldValue('classification');
  }

  /** Appends a new, empty CodeableConcept to `classification` and returns it so it can be filled in. */
  addClassification(): CodeableConcept;
  /** Appends the given CodeableConcept to `classification` and returns this object for chaining. */
  addClassification(codeableConcept: CodeableConcept): this;
  addClassification(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('classification', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('classification', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `classification`. One is added when the list is empty. */
  getClassificationFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getClassification()[0];
    return firstCodeableConcept === undefined ? this.addClassification() : firstCodeableConcept;
  }

  /** Marketing status of the medicinal product, in contrast to marketing authorization (0..*) Never undefined; an empty list is created when absent. */
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

  /** Package type for the product (0..*) Never undefined; an empty list is created when absent. */
  getPackagedMedicinalProduct(): CodeableConcept[] {
    if (this.packagedMedicinalProduct === undefined) {
      this.packagedMedicinalProduct = [];
    }
    return this.packagedMedicinalProduct;
  }

  setPackagedMedicinalProduct(packagedMedicinalProduct: CodeableConcept[] | undefined): this {
    return this.setFieldValue('packagedMedicinalProduct', packagedMedicinalProduct);
  }

  hasPackagedMedicinalProduct(): boolean {
    return this.hasFieldValue('packagedMedicinalProduct');
  }

  /** Appends a new, empty CodeableConcept to `packagedMedicinalProduct` and returns it so it can be filled in. */
  addPackagedMedicinalProduct(): CodeableConcept;
  /** Appends the given CodeableConcept to `packagedMedicinalProduct` and returns this object for chaining. */
  addPackagedMedicinalProduct(codeableConcept: CodeableConcept): this;
  addPackagedMedicinalProduct(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('packagedMedicinalProduct', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('packagedMedicinalProduct', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `packagedMedicinalProduct`. One is added when the list is empty. */
  getPackagedMedicinalProductFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getPackagedMedicinalProduct()[0];
    return firstCodeableConcept === undefined
      ? this.addPackagedMedicinalProduct()
      : firstCodeableConcept;
  }

  /** Types of medicinal manufactured items and/or devices that this product consists of, such as tablets, capsule, or syringes (0..*) Never undefined; an empty list is created when absent. */
  getComprisedOf(): Reference[] {
    if (this.comprisedOf === undefined) {
      this.comprisedOf = [];
    }
    return this.comprisedOf;
  }

  setComprisedOf(comprisedOf: Reference[] | undefined): this {
    return this.setFieldValue('comprisedOf', comprisedOf);
  }

  hasComprisedOf(): boolean {
    return this.hasFieldValue('comprisedOf');
  }

  /** Appends a new, empty Reference to `comprisedOf` and returns it so it can be filled in. */
  addComprisedOf(): Reference;
  /** Appends the given Reference to `comprisedOf` and returns this object for chaining. */
  addComprisedOf(reference: Reference): this;
  addComprisedOf(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('comprisedOf', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('comprisedOf', createdReference);
    return createdReference;
  }

  /** The first Reference of `comprisedOf`. One is added when the list is empty. */
  getComprisedOfFirstRep(): Reference {
    const firstReference = this.getComprisedOf()[0];
    return firstReference === undefined ? this.addComprisedOf() : firstReference;
  }

  /** The ingredients of this medicinal product - when not detailed in other resources (0..*) Never undefined; an empty list is created when absent. */
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

  /** Any component of the drug product which is not the chemical entity defined as the drug substance, or an excipient in the drug product (0..*) Never undefined; an empty list is created when absent. */
  getImpurity(): CodeableReference[] {
    if (this.impurity === undefined) {
      this.impurity = [];
    }
    return this.impurity;
  }

  setImpurity(impurity: CodeableReference[] | undefined): this {
    return this.setFieldValue('impurity', impurity);
  }

  hasImpurity(): boolean {
    return this.hasFieldValue('impurity');
  }

  /** Appends a new, empty CodeableReference to `impurity` and returns it so it can be filled in. */
  addImpurity(): CodeableReference;
  /** Appends the given CodeableReference to `impurity` and returns this object for chaining. */
  addImpurity(codeableReference: CodeableReference): this;
  addImpurity(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('impurity', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('impurity', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `impurity`. One is added when the list is empty. */
  getImpurityFirstRep(): CodeableReference {
    const firstCodeableReference = this.getImpurity()[0];
    return firstCodeableReference === undefined ? this.addImpurity() : firstCodeableReference;
  }

  /** Additional documentation about the medicinal product (0..*) Never undefined; an empty list is created when absent. */
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

  /** A master file for the medicinal product (e.g. Pharmacovigilance System Master File) (0..*) Never undefined; an empty list is created when absent. */
  getMasterFile(): Reference[] {
    if (this.masterFile === undefined) {
      this.masterFile = [];
    }
    return this.masterFile;
  }

  setMasterFile(masterFile: Reference[] | undefined): this {
    return this.setFieldValue('masterFile', masterFile);
  }

  hasMasterFile(): boolean {
    return this.hasFieldValue('masterFile');
  }

  /** Appends a new, empty Reference to `masterFile` and returns it so it can be filled in. */
  addMasterFile(): Reference;
  /** Appends the given Reference to `masterFile` and returns this object for chaining. */
  addMasterFile(reference: Reference): this;
  addMasterFile(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('masterFile', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('masterFile', createdReference);
    return createdReference;
  }

  /** The first Reference of `masterFile`. One is added when the list is empty. */
  getMasterFileFirstRep(): Reference {
    const firstReference = this.getMasterFile()[0];
    return firstReference === undefined ? this.addMasterFile() : firstReference;
  }

  /** A product specific contact, person (in a role), or an organization (0..*) Never undefined; an empty list is created when absent. */
  getContact(): MedicinalProductDefinitionContact[] {
    if (this.contact === undefined) {
      this.contact = [];
    }
    return this.contact;
  }

  setContact(contact: MedicinalProductDefinitionContact[] | undefined): this {
    return this.setFieldValue('contact', contact);
  }

  hasContact(): boolean {
    return this.hasFieldValue('contact');
  }

  /** Appends a new, empty MedicinalProductDefinitionContact to `contact` and returns it so it can be filled in. */
  addContact(): MedicinalProductDefinitionContact;
  /** Appends the given MedicinalProductDefinitionContact to `contact` and returns this object for chaining. */
  addContact(medicinalProductDefinitionContact: MedicinalProductDefinitionContact): this;
  addContact(
    medicinalProductDefinitionContact?: MedicinalProductDefinitionContact
  ): MedicinalProductDefinitionContact | this {
    if (medicinalProductDefinitionContact !== undefined) {
      return this.addFieldValue('contact', medicinalProductDefinitionContact);
    }
    const createdMedicinalProductDefinitionContact = new MedicinalProductDefinitionContact();
    this.addFieldValue('contact', createdMedicinalProductDefinitionContact);
    return createdMedicinalProductDefinitionContact;
  }

  /** The first MedicinalProductDefinitionContact of `contact`. One is added when the list is empty. */
  getContactFirstRep(): MedicinalProductDefinitionContact {
    const firstMedicinalProductDefinitionContact = this.getContact()[0];
    return firstMedicinalProductDefinitionContact === undefined
      ? this.addContact()
      : firstMedicinalProductDefinitionContact;
  }

  /** Clinical trials or studies that this product is involved in (0..*) Never undefined; an empty list is created when absent. */
  getClinicalTrial(): Reference[] {
    if (this.clinicalTrial === undefined) {
      this.clinicalTrial = [];
    }
    return this.clinicalTrial;
  }

  setClinicalTrial(clinicalTrial: Reference[] | undefined): this {
    return this.setFieldValue('clinicalTrial', clinicalTrial);
  }

  hasClinicalTrial(): boolean {
    return this.hasFieldValue('clinicalTrial');
  }

  /** Appends a new, empty Reference to `clinicalTrial` and returns it so it can be filled in. */
  addClinicalTrial(): Reference;
  /** Appends the given Reference to `clinicalTrial` and returns this object for chaining. */
  addClinicalTrial(reference: Reference): this;
  addClinicalTrial(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('clinicalTrial', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('clinicalTrial', createdReference);
    return createdReference;
  }

  /** The first Reference of `clinicalTrial`. One is added when the list is empty. */
  getClinicalTrialFirstRep(): Reference {
    const firstReference = this.getClinicalTrial()[0];
    return firstReference === undefined ? this.addClinicalTrial() : firstReference;
  }

  /** A code that this product is known by, within some formal terminology (0..*) Never undefined; an empty list is created when absent. */
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

  /** The product's name, including full name and possibly coded parts (1..*) Never undefined; an empty list is created when absent. */
  getName(): MedicinalProductDefinitionName[] {
    if (this.name === undefined) {
      this.name = [];
    }
    return this.name;
  }

  setName(name: MedicinalProductDefinitionName[] | undefined): this {
    return this.setFieldValue('name', name);
  }

  hasName(): boolean {
    return this.hasFieldValue('name');
  }

  /** Appends a new, empty MedicinalProductDefinitionName to `name` and returns it so it can be filled in. */
  addName(): MedicinalProductDefinitionName;
  /** Appends the given MedicinalProductDefinitionName to `name` and returns this object for chaining. */
  addName(medicinalProductDefinitionName: MedicinalProductDefinitionName): this;
  addName(
    medicinalProductDefinitionName?: MedicinalProductDefinitionName
  ): MedicinalProductDefinitionName | this {
    if (medicinalProductDefinitionName !== undefined) {
      return this.addFieldValue('name', medicinalProductDefinitionName);
    }
    const createdMedicinalProductDefinitionName = new MedicinalProductDefinitionName();
    this.addFieldValue('name', createdMedicinalProductDefinitionName);
    return createdMedicinalProductDefinitionName;
  }

  /** The first MedicinalProductDefinitionName of `name`. One is added when the list is empty. */
  getNameFirstRep(): MedicinalProductDefinitionName {
    const firstMedicinalProductDefinitionName = this.getName()[0];
    return firstMedicinalProductDefinitionName === undefined
      ? this.addName()
      : firstMedicinalProductDefinitionName;
  }

  /** Reference to another product, e.g. for linking authorised to investigational product (0..*) Never undefined; an empty list is created when absent. */
  getCrossReference(): MedicinalProductDefinitionCrossReference[] {
    if (this.crossReference === undefined) {
      this.crossReference = [];
    }
    return this.crossReference;
  }

  setCrossReference(crossReference: MedicinalProductDefinitionCrossReference[] | undefined): this {
    return this.setFieldValue('crossReference', crossReference);
  }

  hasCrossReference(): boolean {
    return this.hasFieldValue('crossReference');
  }

  /** Appends a new, empty MedicinalProductDefinitionCrossReference to `crossReference` and returns it so it can be filled in. */
  addCrossReference(): MedicinalProductDefinitionCrossReference;
  /** Appends the given MedicinalProductDefinitionCrossReference to `crossReference` and returns this object for chaining. */
  addCrossReference(
    medicinalProductDefinitionCrossReference: MedicinalProductDefinitionCrossReference
  ): this;
  addCrossReference(
    medicinalProductDefinitionCrossReference?: MedicinalProductDefinitionCrossReference
  ): MedicinalProductDefinitionCrossReference | this {
    if (medicinalProductDefinitionCrossReference !== undefined) {
      return this.addFieldValue('crossReference', medicinalProductDefinitionCrossReference);
    }
    const createdMedicinalProductDefinitionCrossReference =
      new MedicinalProductDefinitionCrossReference();
    this.addFieldValue('crossReference', createdMedicinalProductDefinitionCrossReference);
    return createdMedicinalProductDefinitionCrossReference;
  }

  /** The first MedicinalProductDefinitionCrossReference of `crossReference`. One is added when the list is empty. */
  getCrossReferenceFirstRep(): MedicinalProductDefinitionCrossReference {
    const firstMedicinalProductDefinitionCrossReference = this.getCrossReference()[0];
    return firstMedicinalProductDefinitionCrossReference === undefined
      ? this.addCrossReference()
      : firstMedicinalProductDefinitionCrossReference;
  }

  /** A manufacturing or administrative process for the medicinal product (0..*) Never undefined; an empty list is created when absent. */
  getOperation(): MedicinalProductDefinitionOperation[] {
    if (this.operation === undefined) {
      this.operation = [];
    }
    return this.operation;
  }

  setOperation(operation: MedicinalProductDefinitionOperation[] | undefined): this {
    return this.setFieldValue('operation', operation);
  }

  hasOperation(): boolean {
    return this.hasFieldValue('operation');
  }

  /** Appends a new, empty MedicinalProductDefinitionOperation to `operation` and returns it so it can be filled in. */
  addOperation(): MedicinalProductDefinitionOperation;
  /** Appends the given MedicinalProductDefinitionOperation to `operation` and returns this object for chaining. */
  addOperation(medicinalProductDefinitionOperation: MedicinalProductDefinitionOperation): this;
  addOperation(
    medicinalProductDefinitionOperation?: MedicinalProductDefinitionOperation
  ): MedicinalProductDefinitionOperation | this {
    if (medicinalProductDefinitionOperation !== undefined) {
      return this.addFieldValue('operation', medicinalProductDefinitionOperation);
    }
    const createdMedicinalProductDefinitionOperation = new MedicinalProductDefinitionOperation();
    this.addFieldValue('operation', createdMedicinalProductDefinitionOperation);
    return createdMedicinalProductDefinitionOperation;
  }

  /** The first MedicinalProductDefinitionOperation of `operation`. One is added when the list is empty. */
  getOperationFirstRep(): MedicinalProductDefinitionOperation {
    const firstMedicinalProductDefinitionOperation = this.getOperation()[0];
    return firstMedicinalProductDefinitionOperation === undefined
      ? this.addOperation()
      : firstMedicinalProductDefinitionOperation;
  }

  /** Key product features such as "sugar free", "modified release" (0..*) Never undefined; an empty list is created when absent. */
  getCharacteristic(): MedicinalProductDefinitionCharacteristic[] {
    if (this.characteristic === undefined) {
      this.characteristic = [];
    }
    return this.characteristic;
  }

  setCharacteristic(characteristic: MedicinalProductDefinitionCharacteristic[] | undefined): this {
    return this.setFieldValue('characteristic', characteristic);
  }

  hasCharacteristic(): boolean {
    return this.hasFieldValue('characteristic');
  }

  /** Appends a new, empty MedicinalProductDefinitionCharacteristic to `characteristic` and returns it so it can be filled in. */
  addCharacteristic(): MedicinalProductDefinitionCharacteristic;
  /** Appends the given MedicinalProductDefinitionCharacteristic to `characteristic` and returns this object for chaining. */
  addCharacteristic(
    medicinalProductDefinitionCharacteristic: MedicinalProductDefinitionCharacteristic
  ): this;
  addCharacteristic(
    medicinalProductDefinitionCharacteristic?: MedicinalProductDefinitionCharacteristic
  ): MedicinalProductDefinitionCharacteristic | this {
    if (medicinalProductDefinitionCharacteristic !== undefined) {
      return this.addFieldValue('characteristic', medicinalProductDefinitionCharacteristic);
    }
    const createdMedicinalProductDefinitionCharacteristic =
      new MedicinalProductDefinitionCharacteristic();
    this.addFieldValue('characteristic', createdMedicinalProductDefinitionCharacteristic);
    return createdMedicinalProductDefinitionCharacteristic;
  }

  /** The first MedicinalProductDefinitionCharacteristic of `characteristic`. One is added when the list is empty. */
  getCharacteristicFirstRep(): MedicinalProductDefinitionCharacteristic {
    const firstMedicinalProductDefinitionCharacteristic = this.getCharacteristic()[0];
    return firstMedicinalProductDefinitionCharacteristic === undefined
      ? this.addCharacteristic()
      : firstMedicinalProductDefinitionCharacteristic;
  }
}

modelTypeRegistry.register('MedicinalProductDefinition', MedicinalProductDefinition, true);

/** True when the value is a MedicinalProductDefinition model instance. */
export function isMedicinalProductDefinition(
  candidate: unknown
): candidate is MedicinalProductDefinition {
  return candidate instanceof MedicinalProductDefinition;
}

/**
 * A product specific contact, person (in a role), or an organization
 */
export class MedicinalProductDefinitionContact extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'contact',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'contact',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'PractitionerRole'],
        },
      ],
    },
  ];

  /** Allows the contact to be classified, for example QPPV, Pharmacovigilance Enquiry Information (0..1) */
  type?: CodeableConcept;

  /** A product specific contact, person (in a role), or an organization (1..1) */
  contact?: Reference;

  override fhirType(): string {
    return 'MedicinalProductDefinition.contact';
  }

  /** FHIR JSON for this MedicinalProductDefinitionContact, typed as the plain `MedicinalProductDefinitionContact` data type. */
  override toJSON(): plainTypes.MedicinalProductDefinitionContact {
    return this.serialize() as plainTypes.MedicinalProductDefinitionContact;
  }

  /** Allows the contact to be classified, for example QPPV, Pharmacovigilance Enquiry Information (0..1) Created when absent. */
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

  /** A product specific contact, person (in a role), or an organization (1..1) Created when absent. */
  getContact(): Reference {
    if (this.contact === undefined) {
      this.contact = new Reference();
    }
    return this.contact;
  }

  setContact(contact: Reference | undefined): this {
    return this.setFieldValue('contact', contact);
  }

  hasContact(): boolean {
    return this.hasFieldValue('contact');
  }
}

modelTypeRegistry.register(
  'MedicinalProductDefinitionContact',
  MedicinalProductDefinitionContact,
  false
);

/**
 * The product's name, including full name and possibly coded parts
 */
export class MedicinalProductDefinitionName extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'productName',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'productName', typeCode: 'string' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'part',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'part', typeCode: 'MedicinalProductDefinitionNamePart' }],
    },
    {
      elementName: 'usage',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'usage', typeCode: 'MedicinalProductDefinitionNameUsage' }],
    },
  ];

  /** The full product name (1..1) */
  productName?: string;
  /** Id and extensions of the primitive `productName`. */
  _productName?: Element;

  /** Type of product name, such as rINN, BAN, Proprietary, Non-Proprietary (0..1) */
  type?: CodeableConcept;

  /** Coding words or phrases of the name (0..*) */
  part?: MedicinalProductDefinitionNamePart[];

  /** Country and jurisdiction where the name applies (0..*) */
  usage?: MedicinalProductDefinitionNameUsage[];

  override fhirType(): string {
    return 'MedicinalProductDefinition.name';
  }

  /** FHIR JSON for this MedicinalProductDefinitionName, typed as the plain `MedicinalProductDefinitionName` data type. */
  override toJSON(): plainTypes.MedicinalProductDefinitionName {
    return this.serialize() as plainTypes.MedicinalProductDefinitionName;
  }

  /** The full product name (1..1) */
  getProductName(): string | undefined {
    return this.productName;
  }

  /** Sets `productName`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setProductName(productName: string | undefined): this {
    return this.setFieldValue('productName', productName);
  }

  hasProductName(): boolean {
    return this.hasFieldValue('productName');
  }

  /** The element carrying the id and extensions of `productName`. Created when absent. */
  getProductNameElement(): Element {
    if (this._productName === undefined) {
      this._productName = new Element();
    }
    return this._productName;
  }

  setProductNameElement(productNameElement: Element | undefined): this {
    this._productName = productNameElement;
    return this;
  }

  /** Type of product name, such as rINN, BAN, Proprietary, Non-Proprietary (0..1) Created when absent. */
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

  /** Coding words or phrases of the name (0..*) Never undefined; an empty list is created when absent. */
  getPart(): MedicinalProductDefinitionNamePart[] {
    if (this.part === undefined) {
      this.part = [];
    }
    return this.part;
  }

  setPart(part: MedicinalProductDefinitionNamePart[] | undefined): this {
    return this.setFieldValue('part', part);
  }

  hasPart(): boolean {
    return this.hasFieldValue('part');
  }

  /** Appends a new, empty MedicinalProductDefinitionNamePart to `part` and returns it so it can be filled in. */
  addPart(): MedicinalProductDefinitionNamePart;
  /** Appends the given MedicinalProductDefinitionNamePart to `part` and returns this object for chaining. */
  addPart(medicinalProductDefinitionNamePart: MedicinalProductDefinitionNamePart): this;
  addPart(
    medicinalProductDefinitionNamePart?: MedicinalProductDefinitionNamePart
  ): MedicinalProductDefinitionNamePart | this {
    if (medicinalProductDefinitionNamePart !== undefined) {
      return this.addFieldValue('part', medicinalProductDefinitionNamePart);
    }
    const createdMedicinalProductDefinitionNamePart = new MedicinalProductDefinitionNamePart();
    this.addFieldValue('part', createdMedicinalProductDefinitionNamePart);
    return createdMedicinalProductDefinitionNamePart;
  }

  /** The first MedicinalProductDefinitionNamePart of `part`. One is added when the list is empty. */
  getPartFirstRep(): MedicinalProductDefinitionNamePart {
    const firstMedicinalProductDefinitionNamePart = this.getPart()[0];
    return firstMedicinalProductDefinitionNamePart === undefined
      ? this.addPart()
      : firstMedicinalProductDefinitionNamePart;
  }

  /** Country and jurisdiction where the name applies (0..*) Never undefined; an empty list is created when absent. */
  getUsage(): MedicinalProductDefinitionNameUsage[] {
    if (this.usage === undefined) {
      this.usage = [];
    }
    return this.usage;
  }

  setUsage(usage: MedicinalProductDefinitionNameUsage[] | undefined): this {
    return this.setFieldValue('usage', usage);
  }

  hasUsage(): boolean {
    return this.hasFieldValue('usage');
  }

  /** Appends a new, empty MedicinalProductDefinitionNameUsage to `usage` and returns it so it can be filled in. */
  addUsage(): MedicinalProductDefinitionNameUsage;
  /** Appends the given MedicinalProductDefinitionNameUsage to `usage` and returns this object for chaining. */
  addUsage(medicinalProductDefinitionNameUsage: MedicinalProductDefinitionNameUsage): this;
  addUsage(
    medicinalProductDefinitionNameUsage?: MedicinalProductDefinitionNameUsage
  ): MedicinalProductDefinitionNameUsage | this {
    if (medicinalProductDefinitionNameUsage !== undefined) {
      return this.addFieldValue('usage', medicinalProductDefinitionNameUsage);
    }
    const createdMedicinalProductDefinitionNameUsage = new MedicinalProductDefinitionNameUsage();
    this.addFieldValue('usage', createdMedicinalProductDefinitionNameUsage);
    return createdMedicinalProductDefinitionNameUsage;
  }

  /** The first MedicinalProductDefinitionNameUsage of `usage`. One is added when the list is empty. */
  getUsageFirstRep(): MedicinalProductDefinitionNameUsage {
    const firstMedicinalProductDefinitionNameUsage = this.getUsage()[0];
    return firstMedicinalProductDefinitionNameUsage === undefined
      ? this.addUsage()
      : firstMedicinalProductDefinitionNameUsage;
  }
}

modelTypeRegistry.register('MedicinalProductDefinitionName', MedicinalProductDefinitionName, false);

/**
 * Coding words or phrases of the name
 */
export class MedicinalProductDefinitionNamePart extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'part',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'part', typeCode: 'string' }],
    },
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
  ];

  /** A fragment of a product name (1..1) */
  part?: string;
  /** Id and extensions of the primitive `part`. */
  _part?: Element;

  /** Identifying type for this part of the name (e.g. strength part) (1..1) */
  type?: CodeableConcept;

  override fhirType(): string {
    return 'MedicinalProductDefinition.name.part';
  }

  /** FHIR JSON for this MedicinalProductDefinitionNamePart, typed as the plain `MedicinalProductDefinitionPart` data type. */
  override toJSON(): plainTypes.MedicinalProductDefinitionPart {
    return this.serialize() as plainTypes.MedicinalProductDefinitionPart;
  }

  /** A fragment of a product name (1..1) */
  getPart(): string | undefined {
    return this.part;
  }

  /** Sets `part`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPart(part: string | undefined): this {
    return this.setFieldValue('part', part);
  }

  hasPart(): boolean {
    return this.hasFieldValue('part');
  }

  /** The element carrying the id and extensions of `part`. Created when absent. */
  getPartElement(): Element {
    if (this._part === undefined) {
      this._part = new Element();
    }
    return this._part;
  }

  setPartElement(partElement: Element | undefined): this {
    this._part = partElement;
    return this;
  }

  /** Identifying type for this part of the name (e.g. strength part) (1..1) Created when absent. */
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
}

modelTypeRegistry.register(
  'MedicinalProductDefinitionNamePart',
  MedicinalProductDefinitionNamePart,
  false
);

/**
 * Country and jurisdiction where the name applies
 */
export class MedicinalProductDefinitionNameUsage extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'country',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'country', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'jurisdiction',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'jurisdiction', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'language',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'language', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Country code for where this name applies (1..1) */
  country?: CodeableConcept;

  /** Jurisdiction code for where this name applies (0..1) */
  jurisdiction?: CodeableConcept;

  /** Language code for this name (1..1) */
  language?: CodeableConcept;

  override fhirType(): string {
    return 'MedicinalProductDefinition.name.usage';
  }

  /** FHIR JSON for this MedicinalProductDefinitionNameUsage, typed as the plain `MedicinalProductDefinitionUsage` data type. */
  override toJSON(): plainTypes.MedicinalProductDefinitionUsage {
    return this.serialize() as plainTypes.MedicinalProductDefinitionUsage;
  }

  /** Country code for where this name applies (1..1) Created when absent. */
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

  /** Jurisdiction code for where this name applies (0..1) Created when absent. */
  getJurisdiction(): CodeableConcept {
    if (this.jurisdiction === undefined) {
      this.jurisdiction = new CodeableConcept();
    }
    return this.jurisdiction;
  }

  setJurisdiction(jurisdiction: CodeableConcept | undefined): this {
    return this.setFieldValue('jurisdiction', jurisdiction);
  }

  hasJurisdiction(): boolean {
    return this.hasFieldValue('jurisdiction');
  }

  /** Language code for this name (1..1) Created when absent. */
  getLanguage(): CodeableConcept {
    if (this.language === undefined) {
      this.language = new CodeableConcept();
    }
    return this.language;
  }

  setLanguage(language: CodeableConcept | undefined): this {
    return this.setFieldValue('language', language);
  }

  hasLanguage(): boolean {
    return this.hasFieldValue('language');
  }
}

modelTypeRegistry.register(
  'MedicinalProductDefinitionNameUsage',
  MedicinalProductDefinitionNameUsage,
  false
);

/**
 * Reference to another product, e.g. for linking authorised to investigational product
 */
export class MedicinalProductDefinitionCrossReference extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'product',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'product', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Reference to another product, e.g. for linking authorised to investigational product (1..1) */
  product?: CodeableReference;

  /** The type of relationship, for instance branded to generic or virtual to actual product (0..1) */
  type?: CodeableConcept;

  override fhirType(): string {
    return 'MedicinalProductDefinition.crossReference';
  }

  /** FHIR JSON for this MedicinalProductDefinitionCrossReference, typed as the plain `MedicinalProductDefinitionCrossReference` data type. */
  override toJSON(): plainTypes.MedicinalProductDefinitionCrossReference {
    return this.serialize() as plainTypes.MedicinalProductDefinitionCrossReference;
  }

  /** Reference to another product, e.g. for linking authorised to investigational product (1..1) Created when absent. */
  getProduct(): CodeableReference {
    if (this.product === undefined) {
      this.product = new CodeableReference();
    }
    return this.product;
  }

  setProduct(product: CodeableReference | undefined): this {
    return this.setFieldValue('product', product);
  }

  hasProduct(): boolean {
    return this.hasFieldValue('product');
  }

  /** The type of relationship, for instance branded to generic or virtual to actual product (0..1) Created when absent. */
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
}

modelTypeRegistry.register(
  'MedicinalProductDefinitionCrossReference',
  MedicinalProductDefinitionCrossReference,
  false
);

/**
 * A manufacturing or administrative process for the medicinal product
 */
export class MedicinalProductDefinitionOperation extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'effectiveDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'effectiveDate', typeCode: 'Period' }],
    },
    {
      elementName: 'organization',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'organization', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
    {
      elementName: 'confidentialityIndicator',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'confidentialityIndicator', typeCode: 'CodeableConcept' }],
    },
  ];

  /** The type of manufacturing operation e.g. manufacturing itself, re-packaging (0..1) */
  type?: CodeableReference;

  /** Date range of applicability (0..1) */
  effectiveDate?: Period;

  /** The organization responsible for the particular process, e.g. the manufacturer or importer (0..*) */
  organization?: Reference[];

  /** Specifies whether this process is considered proprietary or confidential (0..1) */
  confidentialityIndicator?: CodeableConcept;

  override fhirType(): string {
    return 'MedicinalProductDefinition.operation';
  }

  /** FHIR JSON for this MedicinalProductDefinitionOperation, typed as the plain `MedicinalProductDefinitionOperation` data type. */
  override toJSON(): plainTypes.MedicinalProductDefinitionOperation {
    return this.serialize() as plainTypes.MedicinalProductDefinitionOperation;
  }

  /** The type of manufacturing operation e.g. manufacturing itself, re-packaging (0..1) Created when absent. */
  getType(): CodeableReference {
    if (this.type === undefined) {
      this.type = new CodeableReference();
    }
    return this.type;
  }

  setType(type: CodeableReference | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Date range of applicability (0..1) Created when absent. */
  getEffectiveDate(): Period {
    if (this.effectiveDate === undefined) {
      this.effectiveDate = new Period();
    }
    return this.effectiveDate;
  }

  setEffectiveDate(effectiveDate: Period | undefined): this {
    return this.setFieldValue('effectiveDate', effectiveDate);
  }

  hasEffectiveDate(): boolean {
    return this.hasFieldValue('effectiveDate');
  }

  /** The organization responsible for the particular process, e.g. the manufacturer or importer (0..*) Never undefined; an empty list is created when absent. */
  getOrganization(): Reference[] {
    if (this.organization === undefined) {
      this.organization = [];
    }
    return this.organization;
  }

  setOrganization(organization: Reference[] | undefined): this {
    return this.setFieldValue('organization', organization);
  }

  hasOrganization(): boolean {
    return this.hasFieldValue('organization');
  }

  /** Appends a new, empty Reference to `organization` and returns it so it can be filled in. */
  addOrganization(): Reference;
  /** Appends the given Reference to `organization` and returns this object for chaining. */
  addOrganization(reference: Reference): this;
  addOrganization(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('organization', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('organization', createdReference);
    return createdReference;
  }

  /** The first Reference of `organization`. One is added when the list is empty. */
  getOrganizationFirstRep(): Reference {
    const firstReference = this.getOrganization()[0];
    return firstReference === undefined ? this.addOrganization() : firstReference;
  }

  /** Specifies whether this process is considered proprietary or confidential (0..1) Created when absent. */
  getConfidentialityIndicator(): CodeableConcept {
    if (this.confidentialityIndicator === undefined) {
      this.confidentialityIndicator = new CodeableConcept();
    }
    return this.confidentialityIndicator;
  }

  setConfidentialityIndicator(confidentialityIndicator: CodeableConcept | undefined): this {
    return this.setFieldValue('confidentialityIndicator', confidentialityIndicator);
  }

  hasConfidentialityIndicator(): boolean {
    return this.hasFieldValue('confidentialityIndicator');
  }
}

modelTypeRegistry.register(
  'MedicinalProductDefinitionOperation',
  MedicinalProductDefinitionOperation,
  false
);

/**
 * Key product features such as "sugar free", "modified release"
 */
export class MedicinalProductDefinitionCharacteristic extends BackboneElement {
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
        { jsonKey: 'valueMarkdown', typeCode: 'markdown' },
        { jsonKey: 'valueQuantity', typeCode: 'Quantity' },
        { jsonKey: 'valueInteger', typeCode: 'integer' },
        { jsonKey: 'valueDate', typeCode: 'date' },
        { jsonKey: 'valueBoolean', typeCode: 'boolean' },
        { jsonKey: 'valueAttachment', typeCode: 'Attachment' },
      ],
    },
  ];

  /** A code expressing the type of characteristic (1..1) */
  type?: CodeableConcept;

  /** A value for the characteristic (0..1) */
  valueCodeableConcept?: CodeableConcept;
  /** A value for the characteristic (0..1) */
  valueMarkdown?: string;
  /** Id and extensions of the primitive `valueMarkdown`. */
  _valueMarkdown?: Element;
  /** A value for the characteristic (0..1) */
  valueQuantity?: Quantity;
  /** A value for the characteristic (0..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** A value for the characteristic (0..1) */
  valueDate?: string;
  /** Id and extensions of the primitive `valueDate`. */
  _valueDate?: Element;
  /** A value for the characteristic (0..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** A value for the characteristic (0..1) */
  valueAttachment?: Attachment;

  override fhirType(): string {
    return 'MedicinalProductDefinition.characteristic';
  }

  /** FHIR JSON for this MedicinalProductDefinitionCharacteristic, typed as the plain `MedicinalProductDefinitionCharacteristic` data type. */
  override toJSON(): plainTypes.MedicinalProductDefinitionCharacteristic {
    return this.serialize() as plainTypes.MedicinalProductDefinitionCharacteristic;
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
  getValue(): CodeableConcept | string | Quantity | number | boolean | Attachment | undefined {
    return this.getChoiceValue<CodeableConcept | string | Quantity | number | boolean | Attachment>(
      'value'
    );
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

  getValueInteger(): number | undefined {
    return this.valueInteger;
  }

  /** Sets `value[x]` as integer and clears every other type of it. */
  setValueInteger(valueInteger: number | undefined): this {
    return this.setFieldValue('valueInteger', valueInteger);
  }

  hasValueInteger(): boolean {
    return this.hasFieldValue('valueInteger');
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
}

modelTypeRegistry.register(
  'MedicinalProductDefinitionCharacteristic',
  MedicinalProductDefinitionCharacteristic,
  false
);
