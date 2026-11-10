/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../classes/models-r4';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { Coding } from './coding';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { MarketingStatus } from './marketingStatus';
import { Reference } from './reference';

/**
 * Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use).
 */
export class MedicinalProduct extends DomainResource {
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
      types: [{ jsonKey: 'domain', typeCode: 'Coding' }],
    },
    {
      elementName: 'combinedPharmaceuticalDoseForm',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'combinedPharmaceuticalDoseForm', typeCode: 'CodeableConcept' }],
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
      types: [{ jsonKey: 'specialMeasures', typeCode: 'string' }],
    },
    {
      elementName: 'paediatricUseIndicator',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'paediatricUseIndicator', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'productClassification',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'productClassification', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'marketingStatus',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'marketingStatus', typeCode: 'MarketingStatus' }],
    },
    {
      elementName: 'pharmaceuticalProduct',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'pharmaceuticalProduct',
          typeCode: 'Reference',
          targetResourceTypes: ['MedicinalProductPharmaceutical'],
        },
      ],
    },
    {
      elementName: 'packagedMedicinalProduct',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'packagedMedicinalProduct',
          typeCode: 'Reference',
          targetResourceTypes: ['MedicinalProductPackaged'],
        },
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
      types: [
        {
          jsonKey: 'contact',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'PractitionerRole'],
        },
      ],
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
      elementName: 'name',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'name', typeCode: 'MedicinalProductName' }],
    },
    {
      elementName: 'crossReference',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'crossReference', typeCode: 'Identifier' }],
    },
    {
      elementName: 'manufacturingBusinessOperation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'manufacturingBusinessOperation',
          typeCode: 'MedicinalProductManufacturingBusinessOperation',
        },
      ],
    },
    {
      elementName: 'specialDesignation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'specialDesignation', typeCode: 'MedicinalProductSpecialDesignation' }],
    },
  ];

  readonly resourceType = 'MedicinalProduct';

  /** Business identifier for this product. Could be an MPID (0..*) */
  identifier?: Identifier[];

  /** Regulatory type, e.g. Investigational or Authorized (0..1) */
  type?: CodeableConcept;

  /** If this medicine applies to human or veterinary uses (0..1) */
  domain?: Coding;

  /** The dose form for a single part product, or combined form of a multiple part product (0..1) */
  combinedPharmaceuticalDoseForm?: CodeableConcept;

  /** The legal status of supply of the medicinal product as classified by the regulator (0..1) */
  legalStatusOfSupply?: CodeableConcept;

  /** Whether the Medicinal Product is subject to additional monitoring for regulatory reasons (0..1) */
  additionalMonitoringIndicator?: CodeableConcept;

  /** Whether the Medicinal Product is subject to special measures for regulatory reasons (0..*) */
  specialMeasures?: string[];
  /** Id and extensions of the primitive `specialMeasures`. */
  _specialMeasures?: (Element | null)[];

  /** If authorised for use in children (0..1) */
  paediatricUseIndicator?: CodeableConcept;

  /** Allows the product to be classified by various systems (0..*) */
  productClassification?: CodeableConcept[];

  /** Marketing status of the medicinal product, in contrast to marketing authorizaton (0..*) */
  marketingStatus?: MarketingStatus[];

  /** Pharmaceutical aspects of product (0..*) */
  pharmaceuticalProduct?: Reference[];

  /** Package representation for the product (0..*) */
  packagedMedicinalProduct?: Reference[];

  /** Supporting documentation, typically for regulatory submission (0..*) */
  attachedDocument?: Reference[];

  /** A master file for to the medicinal product (e.g. Pharmacovigilance System Master File) (0..*) */
  masterFile?: Reference[];

  /** A product specific contact, person (in a role), or an organization (0..*) */
  contact?: Reference[];

  /** Clinical trials or studies that this product is involved in (0..*) */
  clinicalTrial?: Reference[];

  /** The product's name, including full name and possibly coded parts (1..*) */
  name?: MedicinalProductName[];

  /** Reference to another product, e.g. for linking authorised to investigational product (0..*) */
  crossReference?: Identifier[];

  /** An operation applied to the product, for manufacturing or adminsitrative purpose (0..*) */
  manufacturingBusinessOperation?: MedicinalProductManufacturingBusinessOperation[];

  /** Indicates if the medicinal product has an orphan designation for the treatment of a rare disease (0..*) */
  specialDesignation?: MedicinalProductSpecialDesignation[];

  override fhirType(): string {
    return 'MedicinalProduct';
  }

  /** FHIR JSON for this MedicinalProduct, typed as the plain `MedicinalProduct` data type. */
  override toJSON(): plainTypes.MedicinalProduct {
    return this.serialize() as plainTypes.MedicinalProduct;
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
  getDomain(): Coding {
    if (this.domain === undefined) {
      this.domain = new Coding();
    }
    return this.domain;
  }

  setDomain(domain: Coding | undefined): this {
    return this.setFieldValue('domain', domain);
  }

  hasDomain(): boolean {
    return this.hasFieldValue('domain');
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
  getSpecialMeasures(): string[] {
    if (this.specialMeasures === undefined) {
      this.specialMeasures = [];
    }
    return this.specialMeasures;
  }

  setSpecialMeasures(specialMeasures: string[] | undefined): this {
    return this.setFieldValue('specialMeasures', specialMeasures);
  }

  hasSpecialMeasures(): boolean {
    return this.hasFieldValue('specialMeasures');
  }

  /** Appends one value to `specialMeasures`. Throws a FhirModelError when it is not a valid FHIR string. */
  addSpecialMeasures(specialMeasures: string): this {
    return this.addFieldValue('specialMeasures', specialMeasures);
  }

  /** If authorised for use in children (0..1) Created when absent. */
  getPaediatricUseIndicator(): CodeableConcept {
    if (this.paediatricUseIndicator === undefined) {
      this.paediatricUseIndicator = new CodeableConcept();
    }
    return this.paediatricUseIndicator;
  }

  setPaediatricUseIndicator(paediatricUseIndicator: CodeableConcept | undefined): this {
    return this.setFieldValue('paediatricUseIndicator', paediatricUseIndicator);
  }

  hasPaediatricUseIndicator(): boolean {
    return this.hasFieldValue('paediatricUseIndicator');
  }

  /** Allows the product to be classified by various systems (0..*) Never undefined; an empty list is created when absent. */
  getProductClassification(): CodeableConcept[] {
    if (this.productClassification === undefined) {
      this.productClassification = [];
    }
    return this.productClassification;
  }

  setProductClassification(productClassification: CodeableConcept[] | undefined): this {
    return this.setFieldValue('productClassification', productClassification);
  }

  hasProductClassification(): boolean {
    return this.hasFieldValue('productClassification');
  }

  /** Appends a new, empty CodeableConcept to `productClassification` and returns it so it can be filled in. */
  addProductClassification(): CodeableConcept;
  /** Appends the given CodeableConcept to `productClassification` and returns this object for chaining. */
  addProductClassification(codeableConcept: CodeableConcept): this;
  addProductClassification(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('productClassification', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('productClassification', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `productClassification`. One is added when the list is empty. */
  getProductClassificationFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getProductClassification()[0];
    return firstCodeableConcept === undefined
      ? this.addProductClassification()
      : firstCodeableConcept;
  }

  /** Marketing status of the medicinal product, in contrast to marketing authorizaton (0..*) Never undefined; an empty list is created when absent. */
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

  /** Pharmaceutical aspects of product (0..*) Never undefined; an empty list is created when absent. */
  getPharmaceuticalProduct(): Reference[] {
    if (this.pharmaceuticalProduct === undefined) {
      this.pharmaceuticalProduct = [];
    }
    return this.pharmaceuticalProduct;
  }

  setPharmaceuticalProduct(pharmaceuticalProduct: Reference[] | undefined): this {
    return this.setFieldValue('pharmaceuticalProduct', pharmaceuticalProduct);
  }

  hasPharmaceuticalProduct(): boolean {
    return this.hasFieldValue('pharmaceuticalProduct');
  }

  /** Appends a new, empty Reference to `pharmaceuticalProduct` and returns it so it can be filled in. */
  addPharmaceuticalProduct(): Reference;
  /** Appends the given Reference to `pharmaceuticalProduct` and returns this object for chaining. */
  addPharmaceuticalProduct(reference: Reference): this;
  addPharmaceuticalProduct(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('pharmaceuticalProduct', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('pharmaceuticalProduct', createdReference);
    return createdReference;
  }

  /** The first Reference of `pharmaceuticalProduct`. One is added when the list is empty. */
  getPharmaceuticalProductFirstRep(): Reference {
    const firstReference = this.getPharmaceuticalProduct()[0];
    return firstReference === undefined ? this.addPharmaceuticalProduct() : firstReference;
  }

  /** Package representation for the product (0..*) Never undefined; an empty list is created when absent. */
  getPackagedMedicinalProduct(): Reference[] {
    if (this.packagedMedicinalProduct === undefined) {
      this.packagedMedicinalProduct = [];
    }
    return this.packagedMedicinalProduct;
  }

  setPackagedMedicinalProduct(packagedMedicinalProduct: Reference[] | undefined): this {
    return this.setFieldValue('packagedMedicinalProduct', packagedMedicinalProduct);
  }

  hasPackagedMedicinalProduct(): boolean {
    return this.hasFieldValue('packagedMedicinalProduct');
  }

  /** Appends a new, empty Reference to `packagedMedicinalProduct` and returns it so it can be filled in. */
  addPackagedMedicinalProduct(): Reference;
  /** Appends the given Reference to `packagedMedicinalProduct` and returns this object for chaining. */
  addPackagedMedicinalProduct(reference: Reference): this;
  addPackagedMedicinalProduct(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('packagedMedicinalProduct', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('packagedMedicinalProduct', createdReference);
    return createdReference;
  }

  /** The first Reference of `packagedMedicinalProduct`. One is added when the list is empty. */
  getPackagedMedicinalProductFirstRep(): Reference {
    const firstReference = this.getPackagedMedicinalProduct()[0];
    return firstReference === undefined ? this.addPackagedMedicinalProduct() : firstReference;
  }

  /** Supporting documentation, typically for regulatory submission (0..*) Never undefined; an empty list is created when absent. */
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

  /** A master file for to the medicinal product (e.g. Pharmacovigilance System Master File) (0..*) Never undefined; an empty list is created when absent. */
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
  getContact(): Reference[] {
    if (this.contact === undefined) {
      this.contact = [];
    }
    return this.contact;
  }

  setContact(contact: Reference[] | undefined): this {
    return this.setFieldValue('contact', contact);
  }

  hasContact(): boolean {
    return this.hasFieldValue('contact');
  }

  /** Appends a new, empty Reference to `contact` and returns it so it can be filled in. */
  addContact(): Reference;
  /** Appends the given Reference to `contact` and returns this object for chaining. */
  addContact(reference: Reference): this;
  addContact(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('contact', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('contact', createdReference);
    return createdReference;
  }

  /** The first Reference of `contact`. One is added when the list is empty. */
  getContactFirstRep(): Reference {
    const firstReference = this.getContact()[0];
    return firstReference === undefined ? this.addContact() : firstReference;
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

  /** The product's name, including full name and possibly coded parts (1..*) Never undefined; an empty list is created when absent. */
  getName(): MedicinalProductName[] {
    if (this.name === undefined) {
      this.name = [];
    }
    return this.name;
  }

  setName(name: MedicinalProductName[] | undefined): this {
    return this.setFieldValue('name', name);
  }

  hasName(): boolean {
    return this.hasFieldValue('name');
  }

  /** Appends a new, empty MedicinalProductName to `name` and returns it so it can be filled in. */
  addName(): MedicinalProductName;
  /** Appends the given MedicinalProductName to `name` and returns this object for chaining. */
  addName(medicinalProductName: MedicinalProductName): this;
  addName(medicinalProductName?: MedicinalProductName): MedicinalProductName | this {
    if (medicinalProductName !== undefined) {
      return this.addFieldValue('name', medicinalProductName);
    }
    const createdMedicinalProductName = new MedicinalProductName();
    this.addFieldValue('name', createdMedicinalProductName);
    return createdMedicinalProductName;
  }

  /** The first MedicinalProductName of `name`. One is added when the list is empty. */
  getNameFirstRep(): MedicinalProductName {
    const firstMedicinalProductName = this.getName()[0];
    return firstMedicinalProductName === undefined ? this.addName() : firstMedicinalProductName;
  }

  /** Reference to another product, e.g. for linking authorised to investigational product (0..*) Never undefined; an empty list is created when absent. */
  getCrossReference(): Identifier[] {
    if (this.crossReference === undefined) {
      this.crossReference = [];
    }
    return this.crossReference;
  }

  setCrossReference(crossReference: Identifier[] | undefined): this {
    return this.setFieldValue('crossReference', crossReference);
  }

  hasCrossReference(): boolean {
    return this.hasFieldValue('crossReference');
  }

  /** Appends a new, empty Identifier to `crossReference` and returns it so it can be filled in. */
  addCrossReference(): Identifier;
  /** Appends the given Identifier to `crossReference` and returns this object for chaining. */
  addCrossReference(identifier: Identifier): this;
  addCrossReference(identifier?: Identifier): Identifier | this {
    if (identifier !== undefined) {
      return this.addFieldValue('crossReference', identifier);
    }
    const createdIdentifier = new Identifier();
    this.addFieldValue('crossReference', createdIdentifier);
    return createdIdentifier;
  }

  /** The first Identifier of `crossReference`. One is added when the list is empty. */
  getCrossReferenceFirstRep(): Identifier {
    const firstIdentifier = this.getCrossReference()[0];
    return firstIdentifier === undefined ? this.addCrossReference() : firstIdentifier;
  }

  /** An operation applied to the product, for manufacturing or adminsitrative purpose (0..*) Never undefined; an empty list is created when absent. */
  getManufacturingBusinessOperation(): MedicinalProductManufacturingBusinessOperation[] {
    if (this.manufacturingBusinessOperation === undefined) {
      this.manufacturingBusinessOperation = [];
    }
    return this.manufacturingBusinessOperation;
  }

  setManufacturingBusinessOperation(
    manufacturingBusinessOperation: MedicinalProductManufacturingBusinessOperation[] | undefined
  ): this {
    return this.setFieldValue('manufacturingBusinessOperation', manufacturingBusinessOperation);
  }

  hasManufacturingBusinessOperation(): boolean {
    return this.hasFieldValue('manufacturingBusinessOperation');
  }

  /** Appends a new, empty MedicinalProductManufacturingBusinessOperation to `manufacturingBusinessOperation` and returns it so it can be filled in. */
  addManufacturingBusinessOperation(): MedicinalProductManufacturingBusinessOperation;
  /** Appends the given MedicinalProductManufacturingBusinessOperation to `manufacturingBusinessOperation` and returns this object for chaining. */
  addManufacturingBusinessOperation(
    medicinalProductManufacturingBusinessOperation: MedicinalProductManufacturingBusinessOperation
  ): this;
  addManufacturingBusinessOperation(
    medicinalProductManufacturingBusinessOperation?: MedicinalProductManufacturingBusinessOperation
  ): MedicinalProductManufacturingBusinessOperation | this {
    if (medicinalProductManufacturingBusinessOperation !== undefined) {
      return this.addFieldValue(
        'manufacturingBusinessOperation',
        medicinalProductManufacturingBusinessOperation
      );
    }
    const createdMedicinalProductManufacturingBusinessOperation =
      new MedicinalProductManufacturingBusinessOperation();
    this.addFieldValue(
      'manufacturingBusinessOperation',
      createdMedicinalProductManufacturingBusinessOperation
    );
    return createdMedicinalProductManufacturingBusinessOperation;
  }

  /** The first MedicinalProductManufacturingBusinessOperation of `manufacturingBusinessOperation`. One is added when the list is empty. */
  getManufacturingBusinessOperationFirstRep(): MedicinalProductManufacturingBusinessOperation {
    const firstMedicinalProductManufacturingBusinessOperation =
      this.getManufacturingBusinessOperation()[0];
    return firstMedicinalProductManufacturingBusinessOperation === undefined
      ? this.addManufacturingBusinessOperation()
      : firstMedicinalProductManufacturingBusinessOperation;
  }

  /** Indicates if the medicinal product has an orphan designation for the treatment of a rare disease (0..*) Never undefined; an empty list is created when absent. */
  getSpecialDesignation(): MedicinalProductSpecialDesignation[] {
    if (this.specialDesignation === undefined) {
      this.specialDesignation = [];
    }
    return this.specialDesignation;
  }

  setSpecialDesignation(
    specialDesignation: MedicinalProductSpecialDesignation[] | undefined
  ): this {
    return this.setFieldValue('specialDesignation', specialDesignation);
  }

  hasSpecialDesignation(): boolean {
    return this.hasFieldValue('specialDesignation');
  }

  /** Appends a new, empty MedicinalProductSpecialDesignation to `specialDesignation` and returns it so it can be filled in. */
  addSpecialDesignation(): MedicinalProductSpecialDesignation;
  /** Appends the given MedicinalProductSpecialDesignation to `specialDesignation` and returns this object for chaining. */
  addSpecialDesignation(
    medicinalProductSpecialDesignation: MedicinalProductSpecialDesignation
  ): this;
  addSpecialDesignation(
    medicinalProductSpecialDesignation?: MedicinalProductSpecialDesignation
  ): MedicinalProductSpecialDesignation | this {
    if (medicinalProductSpecialDesignation !== undefined) {
      return this.addFieldValue('specialDesignation', medicinalProductSpecialDesignation);
    }
    const createdMedicinalProductSpecialDesignation = new MedicinalProductSpecialDesignation();
    this.addFieldValue('specialDesignation', createdMedicinalProductSpecialDesignation);
    return createdMedicinalProductSpecialDesignation;
  }

  /** The first MedicinalProductSpecialDesignation of `specialDesignation`. One is added when the list is empty. */
  getSpecialDesignationFirstRep(): MedicinalProductSpecialDesignation {
    const firstMedicinalProductSpecialDesignation = this.getSpecialDesignation()[0];
    return firstMedicinalProductSpecialDesignation === undefined
      ? this.addSpecialDesignation()
      : firstMedicinalProductSpecialDesignation;
  }
}

modelTypeRegistry.register('MedicinalProduct', MedicinalProduct, true);

/** True when the value is a MedicinalProduct model instance. */
export function isMedicinalProduct(candidate: unknown): candidate is MedicinalProduct {
  return candidate instanceof MedicinalProduct;
}

/**
 * The product's name, including full name and possibly coded parts
 */
export class MedicinalProductName extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'productName',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'productName', typeCode: 'string' }],
    },
    {
      elementName: 'namePart',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'namePart', typeCode: 'MedicinalProductNameNamePart' }],
    },
    {
      elementName: 'countryLanguage',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'countryLanguage', typeCode: 'MedicinalProductNameCountryLanguage' }],
    },
  ];

  /** The full product name (1..1) */
  productName?: string;
  /** Id and extensions of the primitive `productName`. */
  _productName?: Element;

  /** Coding words or phrases of the name (0..*) */
  namePart?: MedicinalProductNameNamePart[];

  /** Country where the name applies (0..*) */
  countryLanguage?: MedicinalProductNameCountryLanguage[];

  override fhirType(): string {
    return 'MedicinalProduct.name';
  }

  /** FHIR JSON for this MedicinalProductName, typed as the plain `MedicinalProductName` data type. */
  override toJSON(): plainTypes.MedicinalProductName {
    return this.serialize() as plainTypes.MedicinalProductName;
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

  /** Coding words or phrases of the name (0..*) Never undefined; an empty list is created when absent. */
  getNamePart(): MedicinalProductNameNamePart[] {
    if (this.namePart === undefined) {
      this.namePart = [];
    }
    return this.namePart;
  }

  setNamePart(namePart: MedicinalProductNameNamePart[] | undefined): this {
    return this.setFieldValue('namePart', namePart);
  }

  hasNamePart(): boolean {
    return this.hasFieldValue('namePart');
  }

  /** Appends a new, empty MedicinalProductNameNamePart to `namePart` and returns it so it can be filled in. */
  addNamePart(): MedicinalProductNameNamePart;
  /** Appends the given MedicinalProductNameNamePart to `namePart` and returns this object for chaining. */
  addNamePart(medicinalProductNameNamePart: MedicinalProductNameNamePart): this;
  addNamePart(
    medicinalProductNameNamePart?: MedicinalProductNameNamePart
  ): MedicinalProductNameNamePart | this {
    if (medicinalProductNameNamePart !== undefined) {
      return this.addFieldValue('namePart', medicinalProductNameNamePart);
    }
    const createdMedicinalProductNameNamePart = new MedicinalProductNameNamePart();
    this.addFieldValue('namePart', createdMedicinalProductNameNamePart);
    return createdMedicinalProductNameNamePart;
  }

  /** The first MedicinalProductNameNamePart of `namePart`. One is added when the list is empty. */
  getNamePartFirstRep(): MedicinalProductNameNamePart {
    const firstMedicinalProductNameNamePart = this.getNamePart()[0];
    return firstMedicinalProductNameNamePart === undefined
      ? this.addNamePart()
      : firstMedicinalProductNameNamePart;
  }

  /** Country where the name applies (0..*) Never undefined; an empty list is created when absent. */
  getCountryLanguage(): MedicinalProductNameCountryLanguage[] {
    if (this.countryLanguage === undefined) {
      this.countryLanguage = [];
    }
    return this.countryLanguage;
  }

  setCountryLanguage(countryLanguage: MedicinalProductNameCountryLanguage[] | undefined): this {
    return this.setFieldValue('countryLanguage', countryLanguage);
  }

  hasCountryLanguage(): boolean {
    return this.hasFieldValue('countryLanguage');
  }

  /** Appends a new, empty MedicinalProductNameCountryLanguage to `countryLanguage` and returns it so it can be filled in. */
  addCountryLanguage(): MedicinalProductNameCountryLanguage;
  /** Appends the given MedicinalProductNameCountryLanguage to `countryLanguage` and returns this object for chaining. */
  addCountryLanguage(
    medicinalProductNameCountryLanguage: MedicinalProductNameCountryLanguage
  ): this;
  addCountryLanguage(
    medicinalProductNameCountryLanguage?: MedicinalProductNameCountryLanguage
  ): MedicinalProductNameCountryLanguage | this {
    if (medicinalProductNameCountryLanguage !== undefined) {
      return this.addFieldValue('countryLanguage', medicinalProductNameCountryLanguage);
    }
    const createdMedicinalProductNameCountryLanguage = new MedicinalProductNameCountryLanguage();
    this.addFieldValue('countryLanguage', createdMedicinalProductNameCountryLanguage);
    return createdMedicinalProductNameCountryLanguage;
  }

  /** The first MedicinalProductNameCountryLanguage of `countryLanguage`. One is added when the list is empty. */
  getCountryLanguageFirstRep(): MedicinalProductNameCountryLanguage {
    const firstMedicinalProductNameCountryLanguage = this.getCountryLanguage()[0];
    return firstMedicinalProductNameCountryLanguage === undefined
      ? this.addCountryLanguage()
      : firstMedicinalProductNameCountryLanguage;
  }
}

modelTypeRegistry.register('MedicinalProductName', MedicinalProductName, false);

/**
 * Coding words or phrases of the name
 */
export class MedicinalProductNameNamePart extends BackboneElement {
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
      types: [{ jsonKey: 'type', typeCode: 'Coding' }],
    },
  ];

  /** A fragment of a product name (1..1) */
  part?: string;
  /** Id and extensions of the primitive `part`. */
  _part?: Element;

  /** Idenifying type for this part of the name (e.g. strength part) (1..1) */
  type?: Coding;

  override fhirType(): string {
    return 'MedicinalProduct.name.namePart';
  }

  /** FHIR JSON for this MedicinalProductNameNamePart, typed as the plain `MedicinalProductNamePart` data type. */
  override toJSON(): plainTypes.MedicinalProductNamePart {
    return this.serialize() as plainTypes.MedicinalProductNamePart;
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

  /** Idenifying type for this part of the name (e.g. strength part) (1..1) Created when absent. */
  getType(): Coding {
    if (this.type === undefined) {
      this.type = new Coding();
    }
    return this.type;
  }

  setType(type: Coding | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }
}

modelTypeRegistry.register('MedicinalProductNameNamePart', MedicinalProductNameNamePart, false);

/**
 * Country where the name applies
 */
export class MedicinalProductNameCountryLanguage extends BackboneElement {
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
    return 'MedicinalProduct.name.countryLanguage';
  }

  /** FHIR JSON for this MedicinalProductNameCountryLanguage, typed as the plain `MedicinalProductCountryLanguage` data type. */
  override toJSON(): plainTypes.MedicinalProductCountryLanguage {
    return this.serialize() as plainTypes.MedicinalProductCountryLanguage;
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
  'MedicinalProductNameCountryLanguage',
  MedicinalProductNameCountryLanguage,
  false
);

/**
 * An operation applied to the product, for manufacturing or adminsitrative purpose
 */
export class MedicinalProductManufacturingBusinessOperation extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'operationType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'operationType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'authorisationReferenceNumber',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'authorisationReferenceNumber', typeCode: 'Identifier' }],
    },
    {
      elementName: 'effectiveDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'effectiveDate', typeCode: 'dateTime' }],
    },
    {
      elementName: 'confidentialityIndicator',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'confidentialityIndicator', typeCode: 'CodeableConcept' }],
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
      elementName: 'regulator',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'regulator', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
  ];

  /** The type of manufacturing operation (0..1) */
  operationType?: CodeableConcept;

  /** Regulatory authorization reference number (0..1) */
  authorisationReferenceNumber?: Identifier;

  /** Regulatory authorization date (0..1) */
  effectiveDate?: string;
  /** Id and extensions of the primitive `effectiveDate`. */
  _effectiveDate?: Element;

  /** To indicate if this proces is commercially confidential (0..1) */
  confidentialityIndicator?: CodeableConcept;

  /** The manufacturer or establishment associated with the process (0..*) */
  manufacturer?: Reference[];

  /** A regulator which oversees the operation (0..1) */
  regulator?: Reference;

  override fhirType(): string {
    return 'MedicinalProduct.manufacturingBusinessOperation';
  }

  /** FHIR JSON for this MedicinalProductManufacturingBusinessOperation, typed as the plain `MedicinalProductManufacturingBusinessOperation` data type. */
  override toJSON(): plainTypes.MedicinalProductManufacturingBusinessOperation {
    return this.serialize() as plainTypes.MedicinalProductManufacturingBusinessOperation;
  }

  /** The type of manufacturing operation (0..1) Created when absent. */
  getOperationType(): CodeableConcept {
    if (this.operationType === undefined) {
      this.operationType = new CodeableConcept();
    }
    return this.operationType;
  }

  setOperationType(operationType: CodeableConcept | undefined): this {
    return this.setFieldValue('operationType', operationType);
  }

  hasOperationType(): boolean {
    return this.hasFieldValue('operationType');
  }

  /** Regulatory authorization reference number (0..1) Created when absent. */
  getAuthorisationReferenceNumber(): Identifier {
    if (this.authorisationReferenceNumber === undefined) {
      this.authorisationReferenceNumber = new Identifier();
    }
    return this.authorisationReferenceNumber;
  }

  setAuthorisationReferenceNumber(authorisationReferenceNumber: Identifier | undefined): this {
    return this.setFieldValue('authorisationReferenceNumber', authorisationReferenceNumber);
  }

  hasAuthorisationReferenceNumber(): boolean {
    return this.hasFieldValue('authorisationReferenceNumber');
  }

  /** Regulatory authorization date (0..1) */
  getEffectiveDate(): string | undefined {
    return this.effectiveDate;
  }

  /** Sets `effectiveDate`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setEffectiveDate(effectiveDate: string | undefined): this {
    return this.setFieldValue('effectiveDate', effectiveDate);
  }

  hasEffectiveDate(): boolean {
    return this.hasFieldValue('effectiveDate');
  }

  /** The element carrying the id and extensions of `effectiveDate`. Created when absent. */
  getEffectiveDateElement(): Element {
    if (this._effectiveDate === undefined) {
      this._effectiveDate = new Element();
    }
    return this._effectiveDate;
  }

  setEffectiveDateElement(effectiveDateElement: Element | undefined): this {
    this._effectiveDate = effectiveDateElement;
    return this;
  }

  /** To indicate if this proces is commercially confidential (0..1) Created when absent. */
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

  /** The manufacturer or establishment associated with the process (0..*) Never undefined; an empty list is created when absent. */
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

  /** A regulator which oversees the operation (0..1) Created when absent. */
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
}

modelTypeRegistry.register(
  'MedicinalProductManufacturingBusinessOperation',
  MedicinalProductManufacturingBusinessOperation,
  false
);

/**
 * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease
 */
export class MedicinalProductSpecialDesignation extends BackboneElement {
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
      elementName: 'intendedUse',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'intendedUse', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'indication',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'indicationCodeableConcept', typeCode: 'CodeableConcept' },
        {
          jsonKey: 'indicationReference',
          typeCode: 'Reference',
          targetResourceTypes: ['MedicinalProductIndication'],
        },
      ],
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
      types: [{ jsonKey: 'date', typeCode: 'dateTime' }],
    },
    {
      elementName: 'species',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'species', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Identifier for the designation, or procedure number (0..*) */
  identifier?: Identifier[];

  /** The type of special designation, e.g. orphan drug, minor use (0..1) */
  type?: CodeableConcept;

  /** The intended use of the product, e.g. prevention, treatment (0..1) */
  intendedUse?: CodeableConcept;

  /** Condition for which the medicinal use applies (0..1) */
  indicationCodeableConcept?: CodeableConcept;
  /** Condition for which the medicinal use applies (0..1) */
  indicationReference?: Reference;

  /** For example granted, pending, expired or withdrawn (0..1) */
  status?: CodeableConcept;

  /** Date when the designation was granted (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Animal species for which this applies (0..1) */
  species?: CodeableConcept;

  override fhirType(): string {
    return 'MedicinalProduct.specialDesignation';
  }

  /** FHIR JSON for this MedicinalProductSpecialDesignation, typed as the plain `MedicinalProductSpecialDesignation` data type. */
  override toJSON(): plainTypes.MedicinalProductSpecialDesignation {
    return this.serialize() as plainTypes.MedicinalProductSpecialDesignation;
  }

  /** Identifier for the designation, or procedure number (0..*) Never undefined; an empty list is created when absent. */
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

  /** The type of special designation, e.g. orphan drug, minor use (0..1) Created when absent. */
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

  /** Condition for which the medicinal use applies (0..1) Whichever type of `indication[x]` is set. */
  getIndication(): CodeableConcept | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | Reference>('indication');
  }

  /** True when any type of `indication[x]` is set. */
  hasIndication(): boolean {
    return this.hasChoiceValue('indication');
  }

  getIndicationCodeableConcept(): CodeableConcept | undefined {
    return this.indicationCodeableConcept;
  }

  /** Sets `indication[x]` as CodeableConcept and clears every other type of it. */
  setIndicationCodeableConcept(indicationCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('indicationCodeableConcept', indicationCodeableConcept);
  }

  hasIndicationCodeableConcept(): boolean {
    return this.hasFieldValue('indicationCodeableConcept');
  }

  getIndicationReference(): Reference | undefined {
    return this.indicationReference;
  }

  /** Sets `indication[x]` as Reference and clears every other type of it. */
  setIndicationReference(indicationReference: Reference | undefined): this {
    return this.setFieldValue('indicationReference', indicationReference);
  }

  hasIndicationReference(): boolean {
    return this.hasFieldValue('indicationReference');
  }

  /** For example granted, pending, expired or withdrawn (0..1) Created when absent. */
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

  /** Date when the designation was granted (0..1) */
  getDate(): string | undefined {
    return this.date;
  }

  /** Sets `date`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setDate(date: string | undefined): this {
    return this.setFieldValue('date', date);
  }

  hasDate(): boolean {
    return this.hasFieldValue('date');
  }

  /** The element carrying the id and extensions of `date`. Created when absent. */
  getDateElement(): Element {
    if (this._date === undefined) {
      this._date = new Element();
    }
    return this._date;
  }

  setDateElement(dateElement: Element | undefined): this {
    this._date = dateElement;
    return this;
  }

  /** Animal species for which this applies (0..1) Created when absent. */
  getSpecies(): CodeableConcept {
    if (this.species === undefined) {
      this.species = new CodeableConcept();
    }
    return this.species;
  }

  setSpecies(species: CodeableConcept | undefined): this {
    return this.setFieldValue('species', species);
  }

  hasSpecies(): boolean {
    return this.hasFieldValue('species');
  }
}

modelTypeRegistry.register(
  'MedicinalProductSpecialDesignation',
  MedicinalProductSpecialDesignation,
  false
);
