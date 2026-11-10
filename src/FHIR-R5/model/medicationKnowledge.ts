/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { Annotation } from './annotation';
import { Attachment } from './attachment';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { CodeableReference } from './codeableReference';
import { DomainResource } from './domainResource';
import { Dosage } from './dosage';
import { Duration } from './duration';
import { Element } from './element';
import { Identifier } from './identifier';
import { Money } from './money';
import { Period } from './period';
import { Quantity } from './quantity';
import { Range } from './range';
import { Ratio } from './ratio';
import { Reference } from './reference';

/**
 * Information about a medication that is used to support knowledge.
 */
export class MedicationKnowledge extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'status',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'status',
          typeCode: 'code',
          allowedCodes: valueSetCodes.MedicationKnowledgeStatusCodes,
        },
      ],
    },
    {
      elementName: 'author',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'author', typeCode: 'Reference', targetResourceTypes: ['Organization'] }],
    },
    {
      elementName: 'intendedJurisdiction',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'intendedJurisdiction', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'relatedMedicationKnowledge',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'relatedMedicationKnowledge',
          typeCode: 'MedicationKnowledgeRelatedMedicationKnowledge',
        },
      ],
    },
    {
      elementName: 'associatedMedication',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'associatedMedication',
          typeCode: 'Reference',
          targetResourceTypes: ['Medication'],
        },
      ],
    },
    {
      elementName: 'productType',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'productType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'monograph',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'monograph', typeCode: 'MedicationKnowledgeMonograph' }],
    },
    {
      elementName: 'preparationInstruction',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'preparationInstruction', typeCode: 'markdown' }],
    },
    {
      elementName: 'cost',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'cost', typeCode: 'MedicationKnowledgeCost' }],
    },
    {
      elementName: 'monitoringProgram',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'monitoringProgram', typeCode: 'MedicationKnowledgeMonitoringProgram' }],
    },
    {
      elementName: 'indicationGuideline',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'indicationGuideline', typeCode: 'MedicationKnowledgeIndicationGuideline' },
      ],
    },
    {
      elementName: 'medicineClassification',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'medicineClassification',
          typeCode: 'MedicationKnowledgeMedicineClassification',
        },
      ],
    },
    {
      elementName: 'packaging',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'packaging', typeCode: 'MedicationKnowledgePackaging' }],
    },
    {
      elementName: 'clinicalUseIssue',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'clinicalUseIssue',
          typeCode: 'Reference',
          targetResourceTypes: ['ClinicalUseDefinition'],
        },
      ],
    },
    {
      elementName: 'storageGuideline',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'storageGuideline', typeCode: 'MedicationKnowledgeStorageGuideline' }],
    },
    {
      elementName: 'regulatory',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'regulatory', typeCode: 'MedicationKnowledgeRegulatory' }],
    },
    {
      elementName: 'definitional',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'definitional', typeCode: 'MedicationKnowledgeDefinitional' }],
    },
  ];

  readonly resourceType = 'MedicationKnowledge';

  /** Business identifier for this medication (0..*) */
  identifier?: Identifier[];

  /** Code that identifies this medication (0..1) */
  code?: CodeableConcept;

  /** active | entered-in-error | inactive (0..1) */
  status?: valueSetCodes.MedicationKnowledgeStatusCodes;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Creator or owner of the knowledge or information about the medication (0..1) */
  author?: Reference;

  /** Codes that identify the different jurisdictions for which the information of this resource was created (0..*) */
  intendedJurisdiction?: CodeableConcept[];

  /** A name associated with the medication being described (0..*) */
  name?: string[];
  /** Id and extensions of the primitive `name`. */
  _name?: (Element | null)[];

  /** Associated or related medication information (0..*) */
  relatedMedicationKnowledge?: MedicationKnowledgeRelatedMedicationKnowledge[];

  /** The set of medication resources that are associated with this medication (0..*) */
  associatedMedication?: Reference[];

  /** Category of the medication or product (0..*) */
  productType?: CodeableConcept[];

  /** Associated documentation about the medication (0..*) */
  monograph?: MedicationKnowledgeMonograph[];

  /** The instructions for preparing the medication (0..1) */
  preparationInstruction?: string;
  /** Id and extensions of the primitive `preparationInstruction`. */
  _preparationInstruction?: Element;

  /** The pricing of the medication (0..*) */
  cost?: MedicationKnowledgeCost[];

  /** Program under which a medication is reviewed (0..*) */
  monitoringProgram?: MedicationKnowledgeMonitoringProgram[];

  /** Guidelines or protocols for administration of the medication for an indication (0..*) */
  indicationGuideline?: MedicationKnowledgeIndicationGuideline[];

  /** Categorization of the medication within a formulary or classification system (0..*) */
  medicineClassification?: MedicationKnowledgeMedicineClassification[];

  /** Details about packaged medications (0..*) */
  packaging?: MedicationKnowledgePackaging[];

  /** Potential clinical issue with or between medication(s) (0..*) */
  clinicalUseIssue?: Reference[];

  /** How the medication should be stored (0..*) */
  storageGuideline?: MedicationKnowledgeStorageGuideline[];

  /** Regulatory information about a medication (0..*) */
  regulatory?: MedicationKnowledgeRegulatory[];

  /** Minimal definition information about the medication (0..1) */
  definitional?: MedicationKnowledgeDefinitional;

  override fhirType(): string {
    return 'MedicationKnowledge';
  }

  /** FHIR JSON for this MedicationKnowledge, typed as the plain `MedicationKnowledge` data type. */
  override toJSON(): plainTypes.MedicationKnowledge {
    return this.serialize() as plainTypes.MedicationKnowledge;
  }

  /** Business identifier for this medication (0..*) Never undefined; an empty list is created when absent. */
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

  /** Code that identifies this medication (0..1) Created when absent. */
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

  /** active | entered-in-error | inactive (0..1) */
  getStatus(): valueSetCodes.MedicationKnowledgeStatusCodes | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.MedicationKnowledgeStatusCodes | undefined): this {
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

  /** Creator or owner of the knowledge or information about the medication (0..1) Created when absent. */
  getAuthor(): Reference {
    if (this.author === undefined) {
      this.author = new Reference();
    }
    return this.author;
  }

  setAuthor(author: Reference | undefined): this {
    return this.setFieldValue('author', author);
  }

  hasAuthor(): boolean {
    return this.hasFieldValue('author');
  }

  /** Codes that identify the different jurisdictions for which the information of this resource was created (0..*) Never undefined; an empty list is created when absent. */
  getIntendedJurisdiction(): CodeableConcept[] {
    if (this.intendedJurisdiction === undefined) {
      this.intendedJurisdiction = [];
    }
    return this.intendedJurisdiction;
  }

  setIntendedJurisdiction(intendedJurisdiction: CodeableConcept[] | undefined): this {
    return this.setFieldValue('intendedJurisdiction', intendedJurisdiction);
  }

  hasIntendedJurisdiction(): boolean {
    return this.hasFieldValue('intendedJurisdiction');
  }

  /** Appends a new, empty CodeableConcept to `intendedJurisdiction` and returns it so it can be filled in. */
  addIntendedJurisdiction(): CodeableConcept;
  /** Appends the given CodeableConcept to `intendedJurisdiction` and returns this object for chaining. */
  addIntendedJurisdiction(codeableConcept: CodeableConcept): this;
  addIntendedJurisdiction(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('intendedJurisdiction', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('intendedJurisdiction', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `intendedJurisdiction`. One is added when the list is empty. */
  getIntendedJurisdictionFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getIntendedJurisdiction()[0];
    return firstCodeableConcept === undefined
      ? this.addIntendedJurisdiction()
      : firstCodeableConcept;
  }

  /** A name associated with the medication being described (0..*) Never undefined; an empty list is created when absent. */
  getName(): string[] {
    if (this.name === undefined) {
      this.name = [];
    }
    return this.name;
  }

  setName(name: string[] | undefined): this {
    return this.setFieldValue('name', name);
  }

  hasName(): boolean {
    return this.hasFieldValue('name');
  }

  /** Appends one value to `name`. Throws a FhirModelError when it is not a valid FHIR string. */
  addName(name: string): this {
    return this.addFieldValue('name', name);
  }

  /** Associated or related medication information (0..*) Never undefined; an empty list is created when absent. */
  getRelatedMedicationKnowledge(): MedicationKnowledgeRelatedMedicationKnowledge[] {
    if (this.relatedMedicationKnowledge === undefined) {
      this.relatedMedicationKnowledge = [];
    }
    return this.relatedMedicationKnowledge;
  }

  setRelatedMedicationKnowledge(
    relatedMedicationKnowledge: MedicationKnowledgeRelatedMedicationKnowledge[] | undefined
  ): this {
    return this.setFieldValue('relatedMedicationKnowledge', relatedMedicationKnowledge);
  }

  hasRelatedMedicationKnowledge(): boolean {
    return this.hasFieldValue('relatedMedicationKnowledge');
  }

  /** Appends a new, empty MedicationKnowledgeRelatedMedicationKnowledge to `relatedMedicationKnowledge` and returns it so it can be filled in. */
  addRelatedMedicationKnowledge(): MedicationKnowledgeRelatedMedicationKnowledge;
  /** Appends the given MedicationKnowledgeRelatedMedicationKnowledge to `relatedMedicationKnowledge` and returns this object for chaining. */
  addRelatedMedicationKnowledge(
    medicationKnowledgeRelatedMedicationKnowledge: MedicationKnowledgeRelatedMedicationKnowledge
  ): this;
  addRelatedMedicationKnowledge(
    medicationKnowledgeRelatedMedicationKnowledge?: MedicationKnowledgeRelatedMedicationKnowledge
  ): MedicationKnowledgeRelatedMedicationKnowledge | this {
    if (medicationKnowledgeRelatedMedicationKnowledge !== undefined) {
      return this.addFieldValue(
        'relatedMedicationKnowledge',
        medicationKnowledgeRelatedMedicationKnowledge
      );
    }
    const createdMedicationKnowledgeRelatedMedicationKnowledge =
      new MedicationKnowledgeRelatedMedicationKnowledge();
    this.addFieldValue(
      'relatedMedicationKnowledge',
      createdMedicationKnowledgeRelatedMedicationKnowledge
    );
    return createdMedicationKnowledgeRelatedMedicationKnowledge;
  }

  /** The first MedicationKnowledgeRelatedMedicationKnowledge of `relatedMedicationKnowledge`. One is added when the list is empty. */
  getRelatedMedicationKnowledgeFirstRep(): MedicationKnowledgeRelatedMedicationKnowledge {
    const firstMedicationKnowledgeRelatedMedicationKnowledge =
      this.getRelatedMedicationKnowledge()[0];
    return firstMedicationKnowledgeRelatedMedicationKnowledge === undefined
      ? this.addRelatedMedicationKnowledge()
      : firstMedicationKnowledgeRelatedMedicationKnowledge;
  }

  /** The set of medication resources that are associated with this medication (0..*) Never undefined; an empty list is created when absent. */
  getAssociatedMedication(): Reference[] {
    if (this.associatedMedication === undefined) {
      this.associatedMedication = [];
    }
    return this.associatedMedication;
  }

  setAssociatedMedication(associatedMedication: Reference[] | undefined): this {
    return this.setFieldValue('associatedMedication', associatedMedication);
  }

  hasAssociatedMedication(): boolean {
    return this.hasFieldValue('associatedMedication');
  }

  /** Appends a new, empty Reference to `associatedMedication` and returns it so it can be filled in. */
  addAssociatedMedication(): Reference;
  /** Appends the given Reference to `associatedMedication` and returns this object for chaining. */
  addAssociatedMedication(reference: Reference): this;
  addAssociatedMedication(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('associatedMedication', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('associatedMedication', createdReference);
    return createdReference;
  }

  /** The first Reference of `associatedMedication`. One is added when the list is empty. */
  getAssociatedMedicationFirstRep(): Reference {
    const firstReference = this.getAssociatedMedication()[0];
    return firstReference === undefined ? this.addAssociatedMedication() : firstReference;
  }

  /** Category of the medication or product (0..*) Never undefined; an empty list is created when absent. */
  getProductType(): CodeableConcept[] {
    if (this.productType === undefined) {
      this.productType = [];
    }
    return this.productType;
  }

  setProductType(productType: CodeableConcept[] | undefined): this {
    return this.setFieldValue('productType', productType);
  }

  hasProductType(): boolean {
    return this.hasFieldValue('productType');
  }

  /** Appends a new, empty CodeableConcept to `productType` and returns it so it can be filled in. */
  addProductType(): CodeableConcept;
  /** Appends the given CodeableConcept to `productType` and returns this object for chaining. */
  addProductType(codeableConcept: CodeableConcept): this;
  addProductType(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('productType', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('productType', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `productType`. One is added when the list is empty. */
  getProductTypeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getProductType()[0];
    return firstCodeableConcept === undefined ? this.addProductType() : firstCodeableConcept;
  }

  /** Associated documentation about the medication (0..*) Never undefined; an empty list is created when absent. */
  getMonograph(): MedicationKnowledgeMonograph[] {
    if (this.monograph === undefined) {
      this.monograph = [];
    }
    return this.monograph;
  }

  setMonograph(monograph: MedicationKnowledgeMonograph[] | undefined): this {
    return this.setFieldValue('monograph', monograph);
  }

  hasMonograph(): boolean {
    return this.hasFieldValue('monograph');
  }

  /** Appends a new, empty MedicationKnowledgeMonograph to `monograph` and returns it so it can be filled in. */
  addMonograph(): MedicationKnowledgeMonograph;
  /** Appends the given MedicationKnowledgeMonograph to `monograph` and returns this object for chaining. */
  addMonograph(medicationKnowledgeMonograph: MedicationKnowledgeMonograph): this;
  addMonograph(
    medicationKnowledgeMonograph?: MedicationKnowledgeMonograph
  ): MedicationKnowledgeMonograph | this {
    if (medicationKnowledgeMonograph !== undefined) {
      return this.addFieldValue('monograph', medicationKnowledgeMonograph);
    }
    const createdMedicationKnowledgeMonograph = new MedicationKnowledgeMonograph();
    this.addFieldValue('monograph', createdMedicationKnowledgeMonograph);
    return createdMedicationKnowledgeMonograph;
  }

  /** The first MedicationKnowledgeMonograph of `monograph`. One is added when the list is empty. */
  getMonographFirstRep(): MedicationKnowledgeMonograph {
    const firstMedicationKnowledgeMonograph = this.getMonograph()[0];
    return firstMedicationKnowledgeMonograph === undefined
      ? this.addMonograph()
      : firstMedicationKnowledgeMonograph;
  }

  /** The instructions for preparing the medication (0..1) */
  getPreparationInstruction(): string | undefined {
    return this.preparationInstruction;
  }

  /** Sets `preparationInstruction`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setPreparationInstruction(preparationInstruction: string | undefined): this {
    return this.setFieldValue('preparationInstruction', preparationInstruction);
  }

  hasPreparationInstruction(): boolean {
    return this.hasFieldValue('preparationInstruction');
  }

  /** The element carrying the id and extensions of `preparationInstruction`. Created when absent. */
  getPreparationInstructionElement(): Element {
    if (this._preparationInstruction === undefined) {
      this._preparationInstruction = new Element();
    }
    return this._preparationInstruction;
  }

  setPreparationInstructionElement(preparationInstructionElement: Element | undefined): this {
    this._preparationInstruction = preparationInstructionElement;
    return this;
  }

  /** The pricing of the medication (0..*) Never undefined; an empty list is created when absent. */
  getCost(): MedicationKnowledgeCost[] {
    if (this.cost === undefined) {
      this.cost = [];
    }
    return this.cost;
  }

  setCost(cost: MedicationKnowledgeCost[] | undefined): this {
    return this.setFieldValue('cost', cost);
  }

  hasCost(): boolean {
    return this.hasFieldValue('cost');
  }

  /** Appends a new, empty MedicationKnowledgeCost to `cost` and returns it so it can be filled in. */
  addCost(): MedicationKnowledgeCost;
  /** Appends the given MedicationKnowledgeCost to `cost` and returns this object for chaining. */
  addCost(medicationKnowledgeCost: MedicationKnowledgeCost): this;
  addCost(medicationKnowledgeCost?: MedicationKnowledgeCost): MedicationKnowledgeCost | this {
    if (medicationKnowledgeCost !== undefined) {
      return this.addFieldValue('cost', medicationKnowledgeCost);
    }
    const createdMedicationKnowledgeCost = new MedicationKnowledgeCost();
    this.addFieldValue('cost', createdMedicationKnowledgeCost);
    return createdMedicationKnowledgeCost;
  }

  /** The first MedicationKnowledgeCost of `cost`. One is added when the list is empty. */
  getCostFirstRep(): MedicationKnowledgeCost {
    const firstMedicationKnowledgeCost = this.getCost()[0];
    return firstMedicationKnowledgeCost === undefined
      ? this.addCost()
      : firstMedicationKnowledgeCost;
  }

  /** Program under which a medication is reviewed (0..*) Never undefined; an empty list is created when absent. */
  getMonitoringProgram(): MedicationKnowledgeMonitoringProgram[] {
    if (this.monitoringProgram === undefined) {
      this.monitoringProgram = [];
    }
    return this.monitoringProgram;
  }

  setMonitoringProgram(
    monitoringProgram: MedicationKnowledgeMonitoringProgram[] | undefined
  ): this {
    return this.setFieldValue('monitoringProgram', monitoringProgram);
  }

  hasMonitoringProgram(): boolean {
    return this.hasFieldValue('monitoringProgram');
  }

  /** Appends a new, empty MedicationKnowledgeMonitoringProgram to `monitoringProgram` and returns it so it can be filled in. */
  addMonitoringProgram(): MedicationKnowledgeMonitoringProgram;
  /** Appends the given MedicationKnowledgeMonitoringProgram to `monitoringProgram` and returns this object for chaining. */
  addMonitoringProgram(
    medicationKnowledgeMonitoringProgram: MedicationKnowledgeMonitoringProgram
  ): this;
  addMonitoringProgram(
    medicationKnowledgeMonitoringProgram?: MedicationKnowledgeMonitoringProgram
  ): MedicationKnowledgeMonitoringProgram | this {
    if (medicationKnowledgeMonitoringProgram !== undefined) {
      return this.addFieldValue('monitoringProgram', medicationKnowledgeMonitoringProgram);
    }
    const createdMedicationKnowledgeMonitoringProgram = new MedicationKnowledgeMonitoringProgram();
    this.addFieldValue('monitoringProgram', createdMedicationKnowledgeMonitoringProgram);
    return createdMedicationKnowledgeMonitoringProgram;
  }

  /** The first MedicationKnowledgeMonitoringProgram of `monitoringProgram`. One is added when the list is empty. */
  getMonitoringProgramFirstRep(): MedicationKnowledgeMonitoringProgram {
    const firstMedicationKnowledgeMonitoringProgram = this.getMonitoringProgram()[0];
    return firstMedicationKnowledgeMonitoringProgram === undefined
      ? this.addMonitoringProgram()
      : firstMedicationKnowledgeMonitoringProgram;
  }

  /** Guidelines or protocols for administration of the medication for an indication (0..*) Never undefined; an empty list is created when absent. */
  getIndicationGuideline(): MedicationKnowledgeIndicationGuideline[] {
    if (this.indicationGuideline === undefined) {
      this.indicationGuideline = [];
    }
    return this.indicationGuideline;
  }

  setIndicationGuideline(
    indicationGuideline: MedicationKnowledgeIndicationGuideline[] | undefined
  ): this {
    return this.setFieldValue('indicationGuideline', indicationGuideline);
  }

  hasIndicationGuideline(): boolean {
    return this.hasFieldValue('indicationGuideline');
  }

  /** Appends a new, empty MedicationKnowledgeIndicationGuideline to `indicationGuideline` and returns it so it can be filled in. */
  addIndicationGuideline(): MedicationKnowledgeIndicationGuideline;
  /** Appends the given MedicationKnowledgeIndicationGuideline to `indicationGuideline` and returns this object for chaining. */
  addIndicationGuideline(
    medicationKnowledgeIndicationGuideline: MedicationKnowledgeIndicationGuideline
  ): this;
  addIndicationGuideline(
    medicationKnowledgeIndicationGuideline?: MedicationKnowledgeIndicationGuideline
  ): MedicationKnowledgeIndicationGuideline | this {
    if (medicationKnowledgeIndicationGuideline !== undefined) {
      return this.addFieldValue('indicationGuideline', medicationKnowledgeIndicationGuideline);
    }
    const createdMedicationKnowledgeIndicationGuideline =
      new MedicationKnowledgeIndicationGuideline();
    this.addFieldValue('indicationGuideline', createdMedicationKnowledgeIndicationGuideline);
    return createdMedicationKnowledgeIndicationGuideline;
  }

  /** The first MedicationKnowledgeIndicationGuideline of `indicationGuideline`. One is added when the list is empty. */
  getIndicationGuidelineFirstRep(): MedicationKnowledgeIndicationGuideline {
    const firstMedicationKnowledgeIndicationGuideline = this.getIndicationGuideline()[0];
    return firstMedicationKnowledgeIndicationGuideline === undefined
      ? this.addIndicationGuideline()
      : firstMedicationKnowledgeIndicationGuideline;
  }

  /** Categorization of the medication within a formulary or classification system (0..*) Never undefined; an empty list is created when absent. */
  getMedicineClassification(): MedicationKnowledgeMedicineClassification[] {
    if (this.medicineClassification === undefined) {
      this.medicineClassification = [];
    }
    return this.medicineClassification;
  }

  setMedicineClassification(
    medicineClassification: MedicationKnowledgeMedicineClassification[] | undefined
  ): this {
    return this.setFieldValue('medicineClassification', medicineClassification);
  }

  hasMedicineClassification(): boolean {
    return this.hasFieldValue('medicineClassification');
  }

  /** Appends a new, empty MedicationKnowledgeMedicineClassification to `medicineClassification` and returns it so it can be filled in. */
  addMedicineClassification(): MedicationKnowledgeMedicineClassification;
  /** Appends the given MedicationKnowledgeMedicineClassification to `medicineClassification` and returns this object for chaining. */
  addMedicineClassification(
    medicationKnowledgeMedicineClassification: MedicationKnowledgeMedicineClassification
  ): this;
  addMedicineClassification(
    medicationKnowledgeMedicineClassification?: MedicationKnowledgeMedicineClassification
  ): MedicationKnowledgeMedicineClassification | this {
    if (medicationKnowledgeMedicineClassification !== undefined) {
      return this.addFieldValue(
        'medicineClassification',
        medicationKnowledgeMedicineClassification
      );
    }
    const createdMedicationKnowledgeMedicineClassification =
      new MedicationKnowledgeMedicineClassification();
    this.addFieldValue('medicineClassification', createdMedicationKnowledgeMedicineClassification);
    return createdMedicationKnowledgeMedicineClassification;
  }

  /** The first MedicationKnowledgeMedicineClassification of `medicineClassification`. One is added when the list is empty. */
  getMedicineClassificationFirstRep(): MedicationKnowledgeMedicineClassification {
    const firstMedicationKnowledgeMedicineClassification = this.getMedicineClassification()[0];
    return firstMedicationKnowledgeMedicineClassification === undefined
      ? this.addMedicineClassification()
      : firstMedicationKnowledgeMedicineClassification;
  }

  /** Details about packaged medications (0..*) Never undefined; an empty list is created when absent. */
  getPackaging(): MedicationKnowledgePackaging[] {
    if (this.packaging === undefined) {
      this.packaging = [];
    }
    return this.packaging;
  }

  setPackaging(packaging: MedicationKnowledgePackaging[] | undefined): this {
    return this.setFieldValue('packaging', packaging);
  }

  hasPackaging(): boolean {
    return this.hasFieldValue('packaging');
  }

  /** Appends a new, empty MedicationKnowledgePackaging to `packaging` and returns it so it can be filled in. */
  addPackaging(): MedicationKnowledgePackaging;
  /** Appends the given MedicationKnowledgePackaging to `packaging` and returns this object for chaining. */
  addPackaging(medicationKnowledgePackaging: MedicationKnowledgePackaging): this;
  addPackaging(
    medicationKnowledgePackaging?: MedicationKnowledgePackaging
  ): MedicationKnowledgePackaging | this {
    if (medicationKnowledgePackaging !== undefined) {
      return this.addFieldValue('packaging', medicationKnowledgePackaging);
    }
    const createdMedicationKnowledgePackaging = new MedicationKnowledgePackaging();
    this.addFieldValue('packaging', createdMedicationKnowledgePackaging);
    return createdMedicationKnowledgePackaging;
  }

  /** The first MedicationKnowledgePackaging of `packaging`. One is added when the list is empty. */
  getPackagingFirstRep(): MedicationKnowledgePackaging {
    const firstMedicationKnowledgePackaging = this.getPackaging()[0];
    return firstMedicationKnowledgePackaging === undefined
      ? this.addPackaging()
      : firstMedicationKnowledgePackaging;
  }

  /** Potential clinical issue with or between medication(s) (0..*) Never undefined; an empty list is created when absent. */
  getClinicalUseIssue(): Reference[] {
    if (this.clinicalUseIssue === undefined) {
      this.clinicalUseIssue = [];
    }
    return this.clinicalUseIssue;
  }

  setClinicalUseIssue(clinicalUseIssue: Reference[] | undefined): this {
    return this.setFieldValue('clinicalUseIssue', clinicalUseIssue);
  }

  hasClinicalUseIssue(): boolean {
    return this.hasFieldValue('clinicalUseIssue');
  }

  /** Appends a new, empty Reference to `clinicalUseIssue` and returns it so it can be filled in. */
  addClinicalUseIssue(): Reference;
  /** Appends the given Reference to `clinicalUseIssue` and returns this object for chaining. */
  addClinicalUseIssue(reference: Reference): this;
  addClinicalUseIssue(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('clinicalUseIssue', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('clinicalUseIssue', createdReference);
    return createdReference;
  }

  /** The first Reference of `clinicalUseIssue`. One is added when the list is empty. */
  getClinicalUseIssueFirstRep(): Reference {
    const firstReference = this.getClinicalUseIssue()[0];
    return firstReference === undefined ? this.addClinicalUseIssue() : firstReference;
  }

  /** How the medication should be stored (0..*) Never undefined; an empty list is created when absent. */
  getStorageGuideline(): MedicationKnowledgeStorageGuideline[] {
    if (this.storageGuideline === undefined) {
      this.storageGuideline = [];
    }
    return this.storageGuideline;
  }

  setStorageGuideline(storageGuideline: MedicationKnowledgeStorageGuideline[] | undefined): this {
    return this.setFieldValue('storageGuideline', storageGuideline);
  }

  hasStorageGuideline(): boolean {
    return this.hasFieldValue('storageGuideline');
  }

  /** Appends a new, empty MedicationKnowledgeStorageGuideline to `storageGuideline` and returns it so it can be filled in. */
  addStorageGuideline(): MedicationKnowledgeStorageGuideline;
  /** Appends the given MedicationKnowledgeStorageGuideline to `storageGuideline` and returns this object for chaining. */
  addStorageGuideline(
    medicationKnowledgeStorageGuideline: MedicationKnowledgeStorageGuideline
  ): this;
  addStorageGuideline(
    medicationKnowledgeStorageGuideline?: MedicationKnowledgeStorageGuideline
  ): MedicationKnowledgeStorageGuideline | this {
    if (medicationKnowledgeStorageGuideline !== undefined) {
      return this.addFieldValue('storageGuideline', medicationKnowledgeStorageGuideline);
    }
    const createdMedicationKnowledgeStorageGuideline = new MedicationKnowledgeStorageGuideline();
    this.addFieldValue('storageGuideline', createdMedicationKnowledgeStorageGuideline);
    return createdMedicationKnowledgeStorageGuideline;
  }

  /** The first MedicationKnowledgeStorageGuideline of `storageGuideline`. One is added when the list is empty. */
  getStorageGuidelineFirstRep(): MedicationKnowledgeStorageGuideline {
    const firstMedicationKnowledgeStorageGuideline = this.getStorageGuideline()[0];
    return firstMedicationKnowledgeStorageGuideline === undefined
      ? this.addStorageGuideline()
      : firstMedicationKnowledgeStorageGuideline;
  }

  /** Regulatory information about a medication (0..*) Never undefined; an empty list is created when absent. */
  getRegulatory(): MedicationKnowledgeRegulatory[] {
    if (this.regulatory === undefined) {
      this.regulatory = [];
    }
    return this.regulatory;
  }

  setRegulatory(regulatory: MedicationKnowledgeRegulatory[] | undefined): this {
    return this.setFieldValue('regulatory', regulatory);
  }

  hasRegulatory(): boolean {
    return this.hasFieldValue('regulatory');
  }

  /** Appends a new, empty MedicationKnowledgeRegulatory to `regulatory` and returns it so it can be filled in. */
  addRegulatory(): MedicationKnowledgeRegulatory;
  /** Appends the given MedicationKnowledgeRegulatory to `regulatory` and returns this object for chaining. */
  addRegulatory(medicationKnowledgeRegulatory: MedicationKnowledgeRegulatory): this;
  addRegulatory(
    medicationKnowledgeRegulatory?: MedicationKnowledgeRegulatory
  ): MedicationKnowledgeRegulatory | this {
    if (medicationKnowledgeRegulatory !== undefined) {
      return this.addFieldValue('regulatory', medicationKnowledgeRegulatory);
    }
    const createdMedicationKnowledgeRegulatory = new MedicationKnowledgeRegulatory();
    this.addFieldValue('regulatory', createdMedicationKnowledgeRegulatory);
    return createdMedicationKnowledgeRegulatory;
  }

  /** The first MedicationKnowledgeRegulatory of `regulatory`. One is added when the list is empty. */
  getRegulatoryFirstRep(): MedicationKnowledgeRegulatory {
    const firstMedicationKnowledgeRegulatory = this.getRegulatory()[0];
    return firstMedicationKnowledgeRegulatory === undefined
      ? this.addRegulatory()
      : firstMedicationKnowledgeRegulatory;
  }

  /** Minimal definition information about the medication (0..1) Created when absent. */
  getDefinitional(): MedicationKnowledgeDefinitional {
    if (this.definitional === undefined) {
      this.definitional = new MedicationKnowledgeDefinitional();
    }
    return this.definitional;
  }

  setDefinitional(definitional: MedicationKnowledgeDefinitional | undefined): this {
    return this.setFieldValue('definitional', definitional);
  }

  hasDefinitional(): boolean {
    return this.hasFieldValue('definitional');
  }
}

modelTypeRegistry.register('MedicationKnowledge', MedicationKnowledge, true);

/** True when the value is a MedicationKnowledge model instance. */
export function isMedicationKnowledge(candidate: unknown): candidate is MedicationKnowledge {
  return candidate instanceof MedicationKnowledge;
}

/**
 * Associated or related medication information
 */
export class MedicationKnowledgeRelatedMedicationKnowledge extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'reference',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'reference',
          typeCode: 'Reference',
          targetResourceTypes: ['MedicationKnowledge'],
        },
      ],
    },
  ];

  /** Category of medicationKnowledge (1..1) */
  type?: CodeableConcept;

  /** Associated documentation about the associated medication knowledge (1..*) */
  reference?: Reference[];

  override fhirType(): string {
    return 'MedicationKnowledge.relatedMedicationKnowledge';
  }

  /** FHIR JSON for this MedicationKnowledgeRelatedMedicationKnowledge, typed as the plain `MedicationKnowledgeRelatedMedicationKnowledge` data type. */
  override toJSON(): plainTypes.MedicationKnowledgeRelatedMedicationKnowledge {
    return this.serialize() as plainTypes.MedicationKnowledgeRelatedMedicationKnowledge;
  }

  /** Category of medicationKnowledge (1..1) Created when absent. */
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

  /** Associated documentation about the associated medication knowledge (1..*) Never undefined; an empty list is created when absent. */
  getReference(): Reference[] {
    if (this.reference === undefined) {
      this.reference = [];
    }
    return this.reference;
  }

  setReference(reference: Reference[] | undefined): this {
    return this.setFieldValue('reference', reference);
  }

  hasReference(): boolean {
    return this.hasFieldValue('reference');
  }

  /** Appends a new, empty Reference to `reference` and returns it so it can be filled in. */
  addReference(): Reference;
  /** Appends the given Reference to `reference` and returns this object for chaining. */
  addReference(reference: Reference): this;
  addReference(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('reference', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('reference', createdReference);
    return createdReference;
  }

  /** The first Reference of `reference`. One is added when the list is empty. */
  getReferenceFirstRep(): Reference {
    const firstReference = this.getReference()[0];
    return firstReference === undefined ? this.addReference() : firstReference;
  }
}

modelTypeRegistry.register(
  'MedicationKnowledgeRelatedMedicationKnowledge',
  MedicationKnowledgeRelatedMedicationKnowledge,
  false
);

/**
 * Associated documentation about the medication
 */
export class MedicationKnowledgeMonograph extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'source',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'source', typeCode: 'Reference', targetResourceTypes: ['DocumentReference'] },
      ],
    },
  ];

  /** The category of medication document (0..1) */
  type?: CodeableConcept;

  /** Associated documentation about the medication (0..1) */
  source?: Reference;

  override fhirType(): string {
    return 'MedicationKnowledge.monograph';
  }

  /** FHIR JSON for this MedicationKnowledgeMonograph, typed as the plain `MedicationKnowledgeMonograph` data type. */
  override toJSON(): plainTypes.MedicationKnowledgeMonograph {
    return this.serialize() as plainTypes.MedicationKnowledgeMonograph;
  }

  /** The category of medication document (0..1) Created when absent. */
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

  /** Associated documentation about the medication (0..1) Created when absent. */
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
}

modelTypeRegistry.register('MedicationKnowledgeMonograph', MedicationKnowledgeMonograph, false);

/**
 * The pricing of the medication
 */
export class MedicationKnowledgeCost extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'effectiveDate',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'effectiveDate', typeCode: 'Period' }],
    },
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'source',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'source', typeCode: 'string' }],
    },
    {
      elementName: 'cost',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'costMoney', typeCode: 'Money' },
        { jsonKey: 'costCodeableConcept', typeCode: 'CodeableConcept' },
      ],
    },
  ];

  /** The date range for which the cost is effective (0..*) */
  effectiveDate?: Period[];

  /** The category of the cost information (1..1) */
  type?: CodeableConcept;

  /** The source or owner for the price information (0..1) */
  source?: string;
  /** Id and extensions of the primitive `source`. */
  _source?: Element;

  /** The price or category of the cost of the medication (1..1) */
  costMoney?: Money;
  /** The price or category of the cost of the medication (1..1) */
  costCodeableConcept?: CodeableConcept;

  override fhirType(): string {
    return 'MedicationKnowledge.cost';
  }

  /** FHIR JSON for this MedicationKnowledgeCost, typed as the plain `MedicationKnowledgeCost` data type. */
  override toJSON(): plainTypes.MedicationKnowledgeCost {
    return this.serialize() as plainTypes.MedicationKnowledgeCost;
  }

  /** The date range for which the cost is effective (0..*) Never undefined; an empty list is created when absent. */
  getEffectiveDate(): Period[] {
    if (this.effectiveDate === undefined) {
      this.effectiveDate = [];
    }
    return this.effectiveDate;
  }

  setEffectiveDate(effectiveDate: Period[] | undefined): this {
    return this.setFieldValue('effectiveDate', effectiveDate);
  }

  hasEffectiveDate(): boolean {
    return this.hasFieldValue('effectiveDate');
  }

  /** Appends a new, empty Period to `effectiveDate` and returns it so it can be filled in. */
  addEffectiveDate(): Period;
  /** Appends the given Period to `effectiveDate` and returns this object for chaining. */
  addEffectiveDate(period: Period): this;
  addEffectiveDate(period?: Period): Period | this {
    if (period !== undefined) {
      return this.addFieldValue('effectiveDate', period);
    }
    const createdPeriod = new Period();
    this.addFieldValue('effectiveDate', createdPeriod);
    return createdPeriod;
  }

  /** The first Period of `effectiveDate`. One is added when the list is empty. */
  getEffectiveDateFirstRep(): Period {
    const firstPeriod = this.getEffectiveDate()[0];
    return firstPeriod === undefined ? this.addEffectiveDate() : firstPeriod;
  }

  /** The category of the cost information (1..1) Created when absent. */
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

  /** The source or owner for the price information (0..1) */
  getSource(): string | undefined {
    return this.source;
  }

  /** Sets `source`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setSource(source: string | undefined): this {
    return this.setFieldValue('source', source);
  }

  hasSource(): boolean {
    return this.hasFieldValue('source');
  }

  /** The element carrying the id and extensions of `source`. Created when absent. */
  getSourceElement(): Element {
    if (this._source === undefined) {
      this._source = new Element();
    }
    return this._source;
  }

  setSourceElement(sourceElement: Element | undefined): this {
    this._source = sourceElement;
    return this;
  }

  /** The price or category of the cost of the medication (1..1) Whichever type of `cost[x]` is set. */
  getCost(): Money | CodeableConcept | undefined {
    return this.getChoiceValue<Money | CodeableConcept>('cost');
  }

  /** True when any type of `cost[x]` is set. */
  hasCost(): boolean {
    return this.hasChoiceValue('cost');
  }

  getCostMoney(): Money | undefined {
    return this.costMoney;
  }

  /** Sets `cost[x]` as Money and clears every other type of it. */
  setCostMoney(costMoney: Money | undefined): this {
    return this.setFieldValue('costMoney', costMoney);
  }

  hasCostMoney(): boolean {
    return this.hasFieldValue('costMoney');
  }

  getCostCodeableConcept(): CodeableConcept | undefined {
    return this.costCodeableConcept;
  }

  /** Sets `cost[x]` as CodeableConcept and clears every other type of it. */
  setCostCodeableConcept(costCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('costCodeableConcept', costCodeableConcept);
  }

  hasCostCodeableConcept(): boolean {
    return this.hasFieldValue('costCodeableConcept');
  }
}

modelTypeRegistry.register('MedicationKnowledgeCost', MedicationKnowledgeCost, false);

/**
 * Program under which a medication is reviewed
 */
export class MedicationKnowledgeMonitoringProgram extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
  ];

  /** Type of program under which the medication is monitored (0..1) */
  type?: CodeableConcept;

  /** Name of the reviewing program (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  override fhirType(): string {
    return 'MedicationKnowledge.monitoringProgram';
  }

  /** FHIR JSON for this MedicationKnowledgeMonitoringProgram, typed as the plain `MedicationKnowledgeMonitoringProgram` data type. */
  override toJSON(): plainTypes.MedicationKnowledgeMonitoringProgram {
    return this.serialize() as plainTypes.MedicationKnowledgeMonitoringProgram;
  }

  /** Type of program under which the medication is monitored (0..1) Created when absent. */
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

  /** Name of the reviewing program (0..1) */
  getName(): string | undefined {
    return this.name;
  }

  /** Sets `name`. Throws a FhirModelError when the value is not a valid FHIR string. */
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
}

modelTypeRegistry.register(
  'MedicationKnowledgeMonitoringProgram',
  MedicationKnowledgeMonitoringProgram,
  false
);

/**
 * Guidelines or protocols for administration of the medication for an indication
 */
export class MedicationKnowledgeIndicationGuideline extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'indication',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'indication', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'dosingGuideline',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'dosingGuideline',
          typeCode: 'MedicationKnowledgeIndicationGuidelineDosingGuideline',
        },
      ],
    },
  ];

  /** Indication for use that applies to the specific administration guideline (0..*) */
  indication?: CodeableReference[];

  /** Guidelines for dosage of the medication (0..*) */
  dosingGuideline?: MedicationKnowledgeIndicationGuidelineDosingGuideline[];

  override fhirType(): string {
    return 'MedicationKnowledge.indicationGuideline';
  }

  /** FHIR JSON for this MedicationKnowledgeIndicationGuideline, typed as the plain `MedicationKnowledgeIndicationGuideline` data type. */
  override toJSON(): plainTypes.MedicationKnowledgeIndicationGuideline {
    return this.serialize() as plainTypes.MedicationKnowledgeIndicationGuideline;
  }

  /** Indication for use that applies to the specific administration guideline (0..*) Never undefined; an empty list is created when absent. */
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

  /** Guidelines for dosage of the medication (0..*) Never undefined; an empty list is created when absent. */
  getDosingGuideline(): MedicationKnowledgeIndicationGuidelineDosingGuideline[] {
    if (this.dosingGuideline === undefined) {
      this.dosingGuideline = [];
    }
    return this.dosingGuideline;
  }

  setDosingGuideline(
    dosingGuideline: MedicationKnowledgeIndicationGuidelineDosingGuideline[] | undefined
  ): this {
    return this.setFieldValue('dosingGuideline', dosingGuideline);
  }

  hasDosingGuideline(): boolean {
    return this.hasFieldValue('dosingGuideline');
  }

  /** Appends a new, empty MedicationKnowledgeIndicationGuidelineDosingGuideline to `dosingGuideline` and returns it so it can be filled in. */
  addDosingGuideline(): MedicationKnowledgeIndicationGuidelineDosingGuideline;
  /** Appends the given MedicationKnowledgeIndicationGuidelineDosingGuideline to `dosingGuideline` and returns this object for chaining. */
  addDosingGuideline(
    medicationKnowledgeIndicationGuidelineDosingGuideline: MedicationKnowledgeIndicationGuidelineDosingGuideline
  ): this;
  addDosingGuideline(
    medicationKnowledgeIndicationGuidelineDosingGuideline?: MedicationKnowledgeIndicationGuidelineDosingGuideline
  ): MedicationKnowledgeIndicationGuidelineDosingGuideline | this {
    if (medicationKnowledgeIndicationGuidelineDosingGuideline !== undefined) {
      return this.addFieldValue(
        'dosingGuideline',
        medicationKnowledgeIndicationGuidelineDosingGuideline
      );
    }
    const createdMedicationKnowledgeIndicationGuidelineDosingGuideline =
      new MedicationKnowledgeIndicationGuidelineDosingGuideline();
    this.addFieldValue(
      'dosingGuideline',
      createdMedicationKnowledgeIndicationGuidelineDosingGuideline
    );
    return createdMedicationKnowledgeIndicationGuidelineDosingGuideline;
  }

  /** The first MedicationKnowledgeIndicationGuidelineDosingGuideline of `dosingGuideline`. One is added when the list is empty. */
  getDosingGuidelineFirstRep(): MedicationKnowledgeIndicationGuidelineDosingGuideline {
    const firstMedicationKnowledgeIndicationGuidelineDosingGuideline = this.getDosingGuideline()[0];
    return firstMedicationKnowledgeIndicationGuidelineDosingGuideline === undefined
      ? this.addDosingGuideline()
      : firstMedicationKnowledgeIndicationGuidelineDosingGuideline;
  }
}

modelTypeRegistry.register(
  'MedicationKnowledgeIndicationGuideline',
  MedicationKnowledgeIndicationGuideline,
  false
);

/**
 * Guidelines for dosage of the medication
 */
export class MedicationKnowledgeIndicationGuidelineDosingGuideline extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'treatmentIntent',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'treatmentIntent', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'dosage',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'dosage',
          typeCode: 'MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage',
        },
      ],
    },
    {
      elementName: 'administrationTreatment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'administrationTreatment', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'patientCharacteristic',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'patientCharacteristic',
          typeCode: 'MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic',
        },
      ],
    },
  ];

  /** Intention of the treatment (0..1) */
  treatmentIntent?: CodeableConcept;

  /** Dosage for the medication for the specific guidelines (0..*) */
  dosage?: MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage[];

  /** Type of treatment the guideline applies to (0..1) */
  administrationTreatment?: CodeableConcept;

  /** Characteristics of the patient that are relevant to the administration guidelines (0..*) */
  patientCharacteristic?: MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic[];

  override fhirType(): string {
    return 'MedicationKnowledge.indicationGuideline.dosingGuideline';
  }

  /** FHIR JSON for this MedicationKnowledgeIndicationGuidelineDosingGuideline, typed as the plain `MedicationKnowledgeDosingGuideline` data type. */
  override toJSON(): plainTypes.MedicationKnowledgeDosingGuideline {
    return this.serialize() as plainTypes.MedicationKnowledgeDosingGuideline;
  }

  /** Intention of the treatment (0..1) Created when absent. */
  getTreatmentIntent(): CodeableConcept {
    if (this.treatmentIntent === undefined) {
      this.treatmentIntent = new CodeableConcept();
    }
    return this.treatmentIntent;
  }

  setTreatmentIntent(treatmentIntent: CodeableConcept | undefined): this {
    return this.setFieldValue('treatmentIntent', treatmentIntent);
  }

  hasTreatmentIntent(): boolean {
    return this.hasFieldValue('treatmentIntent');
  }

  /** Dosage for the medication for the specific guidelines (0..*) Never undefined; an empty list is created when absent. */
  getDosage(): MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage[] {
    if (this.dosage === undefined) {
      this.dosage = [];
    }
    return this.dosage;
  }

  setDosage(
    dosage: MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage[] | undefined
  ): this {
    return this.setFieldValue('dosage', dosage);
  }

  hasDosage(): boolean {
    return this.hasFieldValue('dosage');
  }

  /** Appends a new, empty MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage to `dosage` and returns it so it can be filled in. */
  addDosage(): MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage;
  /** Appends the given MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage to `dosage` and returns this object for chaining. */
  addDosage(
    medicationKnowledgeIndicationGuidelineDosingGuidelineDosage: MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage
  ): this;
  addDosage(
    medicationKnowledgeIndicationGuidelineDosingGuidelineDosage?: MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage
  ): MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage | this {
    if (medicationKnowledgeIndicationGuidelineDosingGuidelineDosage !== undefined) {
      return this.addFieldValue(
        'dosage',
        medicationKnowledgeIndicationGuidelineDosingGuidelineDosage
      );
    }
    const createdMedicationKnowledgeIndicationGuidelineDosingGuidelineDosage =
      new MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage();
    this.addFieldValue(
      'dosage',
      createdMedicationKnowledgeIndicationGuidelineDosingGuidelineDosage
    );
    return createdMedicationKnowledgeIndicationGuidelineDosingGuidelineDosage;
  }

  /** The first MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage of `dosage`. One is added when the list is empty. */
  getDosageFirstRep(): MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage {
    const firstMedicationKnowledgeIndicationGuidelineDosingGuidelineDosage = this.getDosage()[0];
    return firstMedicationKnowledgeIndicationGuidelineDosingGuidelineDosage === undefined
      ? this.addDosage()
      : firstMedicationKnowledgeIndicationGuidelineDosingGuidelineDosage;
  }

  /** Type of treatment the guideline applies to (0..1) Created when absent. */
  getAdministrationTreatment(): CodeableConcept {
    if (this.administrationTreatment === undefined) {
      this.administrationTreatment = new CodeableConcept();
    }
    return this.administrationTreatment;
  }

  setAdministrationTreatment(administrationTreatment: CodeableConcept | undefined): this {
    return this.setFieldValue('administrationTreatment', administrationTreatment);
  }

  hasAdministrationTreatment(): boolean {
    return this.hasFieldValue('administrationTreatment');
  }

  /** Characteristics of the patient that are relevant to the administration guidelines (0..*) Never undefined; an empty list is created when absent. */
  getPatientCharacteristic(): MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic[] {
    if (this.patientCharacteristic === undefined) {
      this.patientCharacteristic = [];
    }
    return this.patientCharacteristic;
  }

  setPatientCharacteristic(
    patientCharacteristic:
      MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic[] | undefined
  ): this {
    return this.setFieldValue('patientCharacteristic', patientCharacteristic);
  }

  hasPatientCharacteristic(): boolean {
    return this.hasFieldValue('patientCharacteristic');
  }

  /** Appends a new, empty MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic to `patientCharacteristic` and returns it so it can be filled in. */
  addPatientCharacteristic(): MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic;
  /** Appends the given MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic to `patientCharacteristic` and returns this object for chaining. */
  addPatientCharacteristic(
    medicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic: MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic
  ): this;
  addPatientCharacteristic(
    medicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic?: MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic
  ): MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic | this {
    if (medicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic !== undefined) {
      return this.addFieldValue(
        'patientCharacteristic',
        medicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic
      );
    }
    const createdMedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic =
      new MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic();
    this.addFieldValue(
      'patientCharacteristic',
      createdMedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic
    );
    return createdMedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic;
  }

  /** The first MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic of `patientCharacteristic`. One is added when the list is empty. */
  getPatientCharacteristicFirstRep(): MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic {
    const firstMedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic =
      this.getPatientCharacteristic()[0];
    return firstMedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic ===
      undefined
      ? this.addPatientCharacteristic()
      : firstMedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic;
  }
}

modelTypeRegistry.register(
  'MedicationKnowledgeIndicationGuidelineDosingGuideline',
  MedicationKnowledgeIndicationGuidelineDosingGuideline,
  false
);

/**
 * Dosage for the medication for the specific guidelines
 */
export class MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'dosage',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'dosage', typeCode: 'Dosage' }],
    },
  ];

  /** Category of dosage for a medication (1..1) */
  type?: CodeableConcept;

  /** Dosage for the medication for the specific guidelines (1..*) */
  dosage?: Dosage[];

  override fhirType(): string {
    return 'MedicationKnowledge.indicationGuideline.dosingGuideline.dosage';
  }

  /** FHIR JSON for this MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage, typed as the plain `MedicationKnowledgeDosage` data type. */
  override toJSON(): plainTypes.MedicationKnowledgeDosage {
    return this.serialize() as plainTypes.MedicationKnowledgeDosage;
  }

  /** Category of dosage for a medication (1..1) Created when absent. */
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

  /** Dosage for the medication for the specific guidelines (1..*) Never undefined; an empty list is created when absent. */
  getDosage(): Dosage[] {
    if (this.dosage === undefined) {
      this.dosage = [];
    }
    return this.dosage;
  }

  setDosage(dosage: Dosage[] | undefined): this {
    return this.setFieldValue('dosage', dosage);
  }

  hasDosage(): boolean {
    return this.hasFieldValue('dosage');
  }

  /** Appends a new, empty Dosage to `dosage` and returns it so it can be filled in. */
  addDosage(): Dosage;
  /** Appends the given Dosage to `dosage` and returns this object for chaining. */
  addDosage(dosage: Dosage): this;
  addDosage(dosage?: Dosage): Dosage | this {
    if (dosage !== undefined) {
      return this.addFieldValue('dosage', dosage);
    }
    const createdDosage = new Dosage();
    this.addFieldValue('dosage', createdDosage);
    return createdDosage;
  }

  /** The first Dosage of `dosage`. One is added when the list is empty. */
  getDosageFirstRep(): Dosage {
    const firstDosage = this.getDosage()[0];
    return firstDosage === undefined ? this.addDosage() : firstDosage;
  }
}

modelTypeRegistry.register(
  'MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage',
  MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage,
  false
);

/**
 * Characteristics of the patient that are relevant to the administration guidelines
 */
export class MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic extends BackboneElement {
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
        { jsonKey: 'valueRange', typeCode: 'Range' },
      ],
    },
  ];

  /** Categorization of specific characteristic that is relevant to the administration guideline (1..1) */
  type?: CodeableConcept;

  /** The specific characteristic (0..1) */
  valueCodeableConcept?: CodeableConcept;
  /** The specific characteristic (0..1) */
  valueQuantity?: Quantity;
  /** The specific characteristic (0..1) */
  valueRange?: Range;

  override fhirType(): string {
    return 'MedicationKnowledge.indicationGuideline.dosingGuideline.patientCharacteristic';
  }

  /** FHIR JSON for this MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic, typed as the plain `MedicationKnowledgePatientCharacteristic` data type. */
  override toJSON(): plainTypes.MedicationKnowledgePatientCharacteristic {
    return this.serialize() as plainTypes.MedicationKnowledgePatientCharacteristic;
  }

  /** Categorization of specific characteristic that is relevant to the administration guideline (1..1) Created when absent. */
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

  /** The specific characteristic (0..1) Whichever type of `value[x]` is set. */
  getValue(): CodeableConcept | Quantity | Range | undefined {
    return this.getChoiceValue<CodeableConcept | Quantity | Range>('value');
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

  getValueRange(): Range | undefined {
    return this.valueRange;
  }

  /** Sets `value[x]` as Range and clears every other type of it. */
  setValueRange(valueRange: Range | undefined): this {
    return this.setFieldValue('valueRange', valueRange);
  }

  hasValueRange(): boolean {
    return this.hasFieldValue('valueRange');
  }
}

modelTypeRegistry.register(
  'MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic',
  MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic,
  false
);

/**
 * Categorization of the medication within a formulary or classification system
 */
export class MedicationKnowledgeMedicineClassification extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'source',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'sourceString', typeCode: 'string' },
        { jsonKey: 'sourceUri', typeCode: 'uri' },
      ],
    },
    {
      elementName: 'classification',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'classification', typeCode: 'CodeableConcept' }],
    },
  ];

  /** The type of category for the medication (for example, therapeutic classification, therapeutic sub-classification) (1..1) */
  type?: CodeableConcept;

  /** The source of the classification (0..1) */
  sourceString?: string;
  /** Id and extensions of the primitive `sourceString`. */
  _sourceString?: Element;
  /** The source of the classification (0..1) */
  sourceUri?: string;
  /** Id and extensions of the primitive `sourceUri`. */
  _sourceUri?: Element;

  /** Specific category assigned to the medication (0..*) */
  classification?: CodeableConcept[];

  override fhirType(): string {
    return 'MedicationKnowledge.medicineClassification';
  }

  /** FHIR JSON for this MedicationKnowledgeMedicineClassification, typed as the plain `MedicationKnowledgeMedicineClassification` data type. */
  override toJSON(): plainTypes.MedicationKnowledgeMedicineClassification {
    return this.serialize() as plainTypes.MedicationKnowledgeMedicineClassification;
  }

  /** The type of category for the medication (for example, therapeutic classification, therapeutic sub-classification) (1..1) Created when absent. */
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

  /** The source of the classification (0..1) Whichever type of `source[x]` is set. */
  getSource(): string | undefined {
    return this.getChoiceValue<string>('source');
  }

  /** True when any type of `source[x]` is set. */
  hasSource(): boolean {
    return this.hasChoiceValue('source');
  }

  getSourceString(): string | undefined {
    return this.sourceString;
  }

  /** Sets `source[x]` as string and clears every other type of it. */
  setSourceString(sourceString: string | undefined): this {
    return this.setFieldValue('sourceString', sourceString);
  }

  hasSourceString(): boolean {
    return this.hasFieldValue('sourceString');
  }

  getSourceUri(): string | undefined {
    return this.sourceUri;
  }

  /** Sets `source[x]` as uri and clears every other type of it. */
  setSourceUri(sourceUri: string | undefined): this {
    return this.setFieldValue('sourceUri', sourceUri);
  }

  hasSourceUri(): boolean {
    return this.hasFieldValue('sourceUri');
  }

  /** Specific category assigned to the medication (0..*) Never undefined; an empty list is created when absent. */
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
}

modelTypeRegistry.register(
  'MedicationKnowledgeMedicineClassification',
  MedicationKnowledgeMedicineClassification,
  false
);

/**
 * Details about packaged medications
 */
export class MedicationKnowledgePackaging extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'cost',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'cost', typeCode: 'MedicationKnowledgeCost' }],
    },
    {
      elementName: 'packagedProduct',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'packagedProduct',
          typeCode: 'Reference',
          targetResourceTypes: ['PackagedProductDefinition'],
        },
      ],
    },
  ];

  /** Cost of the packaged medication (0..*) */
  cost?: MedicationKnowledgeCost[];

  /** The packaged medication that is being priced (0..1) */
  packagedProduct?: Reference;

  override fhirType(): string {
    return 'MedicationKnowledge.packaging';
  }

  /** FHIR JSON for this MedicationKnowledgePackaging, typed as the plain `MedicationKnowledgePackaging` data type. */
  override toJSON(): plainTypes.MedicationKnowledgePackaging {
    return this.serialize() as plainTypes.MedicationKnowledgePackaging;
  }

  /** Cost of the packaged medication (0..*) Never undefined; an empty list is created when absent. */
  getCost(): MedicationKnowledgeCost[] {
    if (this.cost === undefined) {
      this.cost = [];
    }
    return this.cost;
  }

  setCost(cost: MedicationKnowledgeCost[] | undefined): this {
    return this.setFieldValue('cost', cost);
  }

  hasCost(): boolean {
    return this.hasFieldValue('cost');
  }

  /** Appends a new, empty MedicationKnowledgeCost to `cost` and returns it so it can be filled in. */
  addCost(): MedicationKnowledgeCost;
  /** Appends the given MedicationKnowledgeCost to `cost` and returns this object for chaining. */
  addCost(medicationKnowledgeCost: MedicationKnowledgeCost): this;
  addCost(medicationKnowledgeCost?: MedicationKnowledgeCost): MedicationKnowledgeCost | this {
    if (medicationKnowledgeCost !== undefined) {
      return this.addFieldValue('cost', medicationKnowledgeCost);
    }
    const createdMedicationKnowledgeCost = new MedicationKnowledgeCost();
    this.addFieldValue('cost', createdMedicationKnowledgeCost);
    return createdMedicationKnowledgeCost;
  }

  /** The first MedicationKnowledgeCost of `cost`. One is added when the list is empty. */
  getCostFirstRep(): MedicationKnowledgeCost {
    const firstMedicationKnowledgeCost = this.getCost()[0];
    return firstMedicationKnowledgeCost === undefined
      ? this.addCost()
      : firstMedicationKnowledgeCost;
  }

  /** The packaged medication that is being priced (0..1) Created when absent. */
  getPackagedProduct(): Reference {
    if (this.packagedProduct === undefined) {
      this.packagedProduct = new Reference();
    }
    return this.packagedProduct;
  }

  setPackagedProduct(packagedProduct: Reference | undefined): this {
    return this.setFieldValue('packagedProduct', packagedProduct);
  }

  hasPackagedProduct(): boolean {
    return this.hasFieldValue('packagedProduct');
  }
}

modelTypeRegistry.register('MedicationKnowledgePackaging', MedicationKnowledgePackaging, false);

/**
 * How the medication should be stored
 */
export class MedicationKnowledgeStorageGuideline extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'reference',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reference', typeCode: 'uri' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
    {
      elementName: 'stabilityDuration',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'stabilityDuration', typeCode: 'Duration' }],
    },
    {
      elementName: 'environmentalSetting',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'environmentalSetting',
          typeCode: 'MedicationKnowledgeStorageGuidelineEnvironmentalSetting',
        },
      ],
    },
  ];

  /** Reference to additional information (0..1) */
  reference?: string;
  /** Id and extensions of the primitive `reference`. */
  _reference?: Element;

  /** Additional storage notes (0..*) */
  note?: Annotation[];

  /** Duration remains stable (0..1) */
  stabilityDuration?: Duration;

  /** Setting or value of environment for adequate storage (0..*) */
  environmentalSetting?: MedicationKnowledgeStorageGuidelineEnvironmentalSetting[];

  override fhirType(): string {
    return 'MedicationKnowledge.storageGuideline';
  }

  /** FHIR JSON for this MedicationKnowledgeStorageGuideline, typed as the plain `MedicationKnowledgeStorageGuideline` data type. */
  override toJSON(): plainTypes.MedicationKnowledgeStorageGuideline {
    return this.serialize() as plainTypes.MedicationKnowledgeStorageGuideline;
  }

  /** Reference to additional information (0..1) */
  getReference(): string | undefined {
    return this.reference;
  }

  /** Sets `reference`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setReference(reference: string | undefined): this {
    return this.setFieldValue('reference', reference);
  }

  hasReference(): boolean {
    return this.hasFieldValue('reference');
  }

  /** The element carrying the id and extensions of `reference`. Created when absent. */
  getReferenceElement(): Element {
    if (this._reference === undefined) {
      this._reference = new Element();
    }
    return this._reference;
  }

  setReferenceElement(referenceElement: Element | undefined): this {
    this._reference = referenceElement;
    return this;
  }

  /** Additional storage notes (0..*) Never undefined; an empty list is created when absent. */
  getNote(): Annotation[] {
    if (this.note === undefined) {
      this.note = [];
    }
    return this.note;
  }

  setNote(note: Annotation[] | undefined): this {
    return this.setFieldValue('note', note);
  }

  hasNote(): boolean {
    return this.hasFieldValue('note');
  }

  /** Appends a new, empty Annotation to `note` and returns it so it can be filled in. */
  addNote(): Annotation;
  /** Appends the given Annotation to `note` and returns this object for chaining. */
  addNote(annotation: Annotation): this;
  addNote(annotation?: Annotation): Annotation | this {
    if (annotation !== undefined) {
      return this.addFieldValue('note', annotation);
    }
    const createdAnnotation = new Annotation();
    this.addFieldValue('note', createdAnnotation);
    return createdAnnotation;
  }

  /** The first Annotation of `note`. One is added when the list is empty. */
  getNoteFirstRep(): Annotation {
    const firstAnnotation = this.getNote()[0];
    return firstAnnotation === undefined ? this.addNote() : firstAnnotation;
  }

  /** Duration remains stable (0..1) Created when absent. */
  getStabilityDuration(): Duration {
    if (this.stabilityDuration === undefined) {
      this.stabilityDuration = new Duration();
    }
    return this.stabilityDuration;
  }

  setStabilityDuration(stabilityDuration: Duration | undefined): this {
    return this.setFieldValue('stabilityDuration', stabilityDuration);
  }

  hasStabilityDuration(): boolean {
    return this.hasFieldValue('stabilityDuration');
  }

  /** Setting or value of environment for adequate storage (0..*) Never undefined; an empty list is created when absent. */
  getEnvironmentalSetting(): MedicationKnowledgeStorageGuidelineEnvironmentalSetting[] {
    if (this.environmentalSetting === undefined) {
      this.environmentalSetting = [];
    }
    return this.environmentalSetting;
  }

  setEnvironmentalSetting(
    environmentalSetting: MedicationKnowledgeStorageGuidelineEnvironmentalSetting[] | undefined
  ): this {
    return this.setFieldValue('environmentalSetting', environmentalSetting);
  }

  hasEnvironmentalSetting(): boolean {
    return this.hasFieldValue('environmentalSetting');
  }

  /** Appends a new, empty MedicationKnowledgeStorageGuidelineEnvironmentalSetting to `environmentalSetting` and returns it so it can be filled in. */
  addEnvironmentalSetting(): MedicationKnowledgeStorageGuidelineEnvironmentalSetting;
  /** Appends the given MedicationKnowledgeStorageGuidelineEnvironmentalSetting to `environmentalSetting` and returns this object for chaining. */
  addEnvironmentalSetting(
    medicationKnowledgeStorageGuidelineEnvironmentalSetting: MedicationKnowledgeStorageGuidelineEnvironmentalSetting
  ): this;
  addEnvironmentalSetting(
    medicationKnowledgeStorageGuidelineEnvironmentalSetting?: MedicationKnowledgeStorageGuidelineEnvironmentalSetting
  ): MedicationKnowledgeStorageGuidelineEnvironmentalSetting | this {
    if (medicationKnowledgeStorageGuidelineEnvironmentalSetting !== undefined) {
      return this.addFieldValue(
        'environmentalSetting',
        medicationKnowledgeStorageGuidelineEnvironmentalSetting
      );
    }
    const createdMedicationKnowledgeStorageGuidelineEnvironmentalSetting =
      new MedicationKnowledgeStorageGuidelineEnvironmentalSetting();
    this.addFieldValue(
      'environmentalSetting',
      createdMedicationKnowledgeStorageGuidelineEnvironmentalSetting
    );
    return createdMedicationKnowledgeStorageGuidelineEnvironmentalSetting;
  }

  /** The first MedicationKnowledgeStorageGuidelineEnvironmentalSetting of `environmentalSetting`. One is added when the list is empty. */
  getEnvironmentalSettingFirstRep(): MedicationKnowledgeStorageGuidelineEnvironmentalSetting {
    const firstMedicationKnowledgeStorageGuidelineEnvironmentalSetting =
      this.getEnvironmentalSetting()[0];
    return firstMedicationKnowledgeStorageGuidelineEnvironmentalSetting === undefined
      ? this.addEnvironmentalSetting()
      : firstMedicationKnowledgeStorageGuidelineEnvironmentalSetting;
  }
}

modelTypeRegistry.register(
  'MedicationKnowledgeStorageGuideline',
  MedicationKnowledgeStorageGuideline,
  false
);

/**
 * Setting or value of environment for adequate storage
 */
export class MedicationKnowledgeStorageGuidelineEnvironmentalSetting extends BackboneElement {
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
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'valueQuantity', typeCode: 'Quantity' },
        { jsonKey: 'valueRange', typeCode: 'Range' },
        { jsonKey: 'valueCodeableConcept', typeCode: 'CodeableConcept' },
      ],
    },
  ];

  /** Categorization of the setting (1..1) */
  type?: CodeableConcept;

  /** Value of the setting (1..1) */
  valueQuantity?: Quantity;
  /** Value of the setting (1..1) */
  valueRange?: Range;
  /** Value of the setting (1..1) */
  valueCodeableConcept?: CodeableConcept;

  override fhirType(): string {
    return 'MedicationKnowledge.storageGuideline.environmentalSetting';
  }

  /** FHIR JSON for this MedicationKnowledgeStorageGuidelineEnvironmentalSetting, typed as the plain `MedicationKnowledgeEnvironmentalSetting` data type. */
  override toJSON(): plainTypes.MedicationKnowledgeEnvironmentalSetting {
    return this.serialize() as plainTypes.MedicationKnowledgeEnvironmentalSetting;
  }

  /** Categorization of the setting (1..1) Created when absent. */
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

  /** Value of the setting (1..1) Whichever type of `value[x]` is set. */
  getValue(): Quantity | Range | CodeableConcept | undefined {
    return this.getChoiceValue<Quantity | Range | CodeableConcept>('value');
  }

  /** True when any type of `value[x]` is set. */
  hasValue(): boolean {
    return this.hasChoiceValue('value');
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

  getValueRange(): Range | undefined {
    return this.valueRange;
  }

  /** Sets `value[x]` as Range and clears every other type of it. */
  setValueRange(valueRange: Range | undefined): this {
    return this.setFieldValue('valueRange', valueRange);
  }

  hasValueRange(): boolean {
    return this.hasFieldValue('valueRange');
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
}

modelTypeRegistry.register(
  'MedicationKnowledgeStorageGuidelineEnvironmentalSetting',
  MedicationKnowledgeStorageGuidelineEnvironmentalSetting,
  false
);

/**
 * Regulatory information about a medication
 */
export class MedicationKnowledgeRegulatory extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'regulatoryAuthority',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'regulatoryAuthority',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization'],
        },
      ],
    },
    {
      elementName: 'substitution',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'substitution', typeCode: 'MedicationKnowledgeRegulatorySubstitution' }],
    },
    {
      elementName: 'schedule',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'schedule', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'maxDispense',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'maxDispense', typeCode: 'MedicationKnowledgeRegulatoryMaxDispense' }],
    },
  ];

  /** Specifies the authority of the regulation (1..1) */
  regulatoryAuthority?: Reference;

  /** Specifies if changes are allowed when dispensing a medication from a regulatory perspective (0..*) */
  substitution?: MedicationKnowledgeRegulatorySubstitution[];

  /** Specifies the schedule of a medication in jurisdiction (0..*) */
  schedule?: CodeableConcept[];

  /** The maximum number of units of the medication that can be dispensed in a period (0..1) */
  maxDispense?: MedicationKnowledgeRegulatoryMaxDispense;

  override fhirType(): string {
    return 'MedicationKnowledge.regulatory';
  }

  /** FHIR JSON for this MedicationKnowledgeRegulatory, typed as the plain `MedicationKnowledgeRegulatory` data type. */
  override toJSON(): plainTypes.MedicationKnowledgeRegulatory {
    return this.serialize() as plainTypes.MedicationKnowledgeRegulatory;
  }

  /** Specifies the authority of the regulation (1..1) Created when absent. */
  getRegulatoryAuthority(): Reference {
    if (this.regulatoryAuthority === undefined) {
      this.regulatoryAuthority = new Reference();
    }
    return this.regulatoryAuthority;
  }

  setRegulatoryAuthority(regulatoryAuthority: Reference | undefined): this {
    return this.setFieldValue('regulatoryAuthority', regulatoryAuthority);
  }

  hasRegulatoryAuthority(): boolean {
    return this.hasFieldValue('regulatoryAuthority');
  }

  /** Specifies if changes are allowed when dispensing a medication from a regulatory perspective (0..*) Never undefined; an empty list is created when absent. */
  getSubstitution(): MedicationKnowledgeRegulatorySubstitution[] {
    if (this.substitution === undefined) {
      this.substitution = [];
    }
    return this.substitution;
  }

  setSubstitution(substitution: MedicationKnowledgeRegulatorySubstitution[] | undefined): this {
    return this.setFieldValue('substitution', substitution);
  }

  hasSubstitution(): boolean {
    return this.hasFieldValue('substitution');
  }

  /** Appends a new, empty MedicationKnowledgeRegulatorySubstitution to `substitution` and returns it so it can be filled in. */
  addSubstitution(): MedicationKnowledgeRegulatorySubstitution;
  /** Appends the given MedicationKnowledgeRegulatorySubstitution to `substitution` and returns this object for chaining. */
  addSubstitution(
    medicationKnowledgeRegulatorySubstitution: MedicationKnowledgeRegulatorySubstitution
  ): this;
  addSubstitution(
    medicationKnowledgeRegulatorySubstitution?: MedicationKnowledgeRegulatorySubstitution
  ): MedicationKnowledgeRegulatorySubstitution | this {
    if (medicationKnowledgeRegulatorySubstitution !== undefined) {
      return this.addFieldValue('substitution', medicationKnowledgeRegulatorySubstitution);
    }
    const createdMedicationKnowledgeRegulatorySubstitution =
      new MedicationKnowledgeRegulatorySubstitution();
    this.addFieldValue('substitution', createdMedicationKnowledgeRegulatorySubstitution);
    return createdMedicationKnowledgeRegulatorySubstitution;
  }

  /** The first MedicationKnowledgeRegulatorySubstitution of `substitution`. One is added when the list is empty. */
  getSubstitutionFirstRep(): MedicationKnowledgeRegulatorySubstitution {
    const firstMedicationKnowledgeRegulatorySubstitution = this.getSubstitution()[0];
    return firstMedicationKnowledgeRegulatorySubstitution === undefined
      ? this.addSubstitution()
      : firstMedicationKnowledgeRegulatorySubstitution;
  }

  /** Specifies the schedule of a medication in jurisdiction (0..*) Never undefined; an empty list is created when absent. */
  getSchedule(): CodeableConcept[] {
    if (this.schedule === undefined) {
      this.schedule = [];
    }
    return this.schedule;
  }

  setSchedule(schedule: CodeableConcept[] | undefined): this {
    return this.setFieldValue('schedule', schedule);
  }

  hasSchedule(): boolean {
    return this.hasFieldValue('schedule');
  }

  /** Appends a new, empty CodeableConcept to `schedule` and returns it so it can be filled in. */
  addSchedule(): CodeableConcept;
  /** Appends the given CodeableConcept to `schedule` and returns this object for chaining. */
  addSchedule(codeableConcept: CodeableConcept): this;
  addSchedule(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('schedule', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('schedule', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `schedule`. One is added when the list is empty. */
  getScheduleFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getSchedule()[0];
    return firstCodeableConcept === undefined ? this.addSchedule() : firstCodeableConcept;
  }

  /** The maximum number of units of the medication that can be dispensed in a period (0..1) Created when absent. */
  getMaxDispense(): MedicationKnowledgeRegulatoryMaxDispense {
    if (this.maxDispense === undefined) {
      this.maxDispense = new MedicationKnowledgeRegulatoryMaxDispense();
    }
    return this.maxDispense;
  }

  setMaxDispense(maxDispense: MedicationKnowledgeRegulatoryMaxDispense | undefined): this {
    return this.setFieldValue('maxDispense', maxDispense);
  }

  hasMaxDispense(): boolean {
    return this.hasFieldValue('maxDispense');
  }
}

modelTypeRegistry.register('MedicationKnowledgeRegulatory', MedicationKnowledgeRegulatory, false);

/**
 * Specifies if changes are allowed when dispensing a medication from a regulatory perspective
 */
export class MedicationKnowledgeRegulatorySubstitution extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'allowed',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'allowed', typeCode: 'boolean' }],
    },
  ];

  /** Specifies the type of substitution allowed (1..1) */
  type?: CodeableConcept;

  /** Specifies if regulation allows for changes in the medication when dispensing (1..1) */
  allowed?: boolean;
  /** Id and extensions of the primitive `allowed`. */
  _allowed?: Element;

  override fhirType(): string {
    return 'MedicationKnowledge.regulatory.substitution';
  }

  /** FHIR JSON for this MedicationKnowledgeRegulatorySubstitution, typed as the plain `MedicationKnowledgeSubstitution` data type. */
  override toJSON(): plainTypes.MedicationKnowledgeSubstitution {
    return this.serialize() as plainTypes.MedicationKnowledgeSubstitution;
  }

  /** Specifies the type of substitution allowed (1..1) Created when absent. */
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

  /** Specifies if regulation allows for changes in the medication when dispensing (1..1) */
  getAllowed(): boolean | undefined {
    return this.allowed;
  }

  /** Sets `allowed`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setAllowed(allowed: boolean | undefined): this {
    return this.setFieldValue('allowed', allowed);
  }

  hasAllowed(): boolean {
    return this.hasFieldValue('allowed');
  }

  /** The element carrying the id and extensions of `allowed`. Created when absent. */
  getAllowedElement(): Element {
    if (this._allowed === undefined) {
      this._allowed = new Element();
    }
    return this._allowed;
  }

  setAllowedElement(allowedElement: Element | undefined): this {
    this._allowed = allowedElement;
    return this;
  }
}

modelTypeRegistry.register(
  'MedicationKnowledgeRegulatorySubstitution',
  MedicationKnowledgeRegulatorySubstitution,
  false
);

/**
 * The maximum number of units of the medication that can be dispensed in a period
 */
export class MedicationKnowledgeRegulatoryMaxDispense extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'quantity',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Duration' }],
    },
  ];

  /** The maximum number of units of the medication that can be dispensed (1..1) */
  quantity?: Quantity;

  /** The period that applies to the maximum number of units (0..1) */
  period?: Duration;

  override fhirType(): string {
    return 'MedicationKnowledge.regulatory.maxDispense';
  }

  /** FHIR JSON for this MedicationKnowledgeRegulatoryMaxDispense, typed as the plain `MedicationKnowledgeMaxDispense` data type. */
  override toJSON(): plainTypes.MedicationKnowledgeMaxDispense {
    return this.serialize() as plainTypes.MedicationKnowledgeMaxDispense;
  }

  /** The maximum number of units of the medication that can be dispensed (1..1) Created when absent. */
  getQuantity(): Quantity {
    if (this.quantity === undefined) {
      this.quantity = new Quantity();
    }
    return this.quantity;
  }

  setQuantity(quantity: Quantity | undefined): this {
    return this.setFieldValue('quantity', quantity);
  }

  hasQuantity(): boolean {
    return this.hasFieldValue('quantity');
  }

  /** The period that applies to the maximum number of units (0..1) Created when absent. */
  getPeriod(): Duration {
    if (this.period === undefined) {
      this.period = new Duration();
    }
    return this.period;
  }

  setPeriod(period: Duration | undefined): this {
    return this.setFieldValue('period', period);
  }

  hasPeriod(): boolean {
    return this.hasFieldValue('period');
  }
}

modelTypeRegistry.register(
  'MedicationKnowledgeRegulatoryMaxDispense',
  MedicationKnowledgeRegulatoryMaxDispense,
  false
);

/**
 * Minimal definition information about the medication
 */
export class MedicationKnowledgeDefinitional extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'definition',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'definition',
          typeCode: 'Reference',
          targetResourceTypes: ['MedicinalProductDefinition'],
        },
      ],
    },
    {
      elementName: 'doseForm',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'doseForm', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'intendedRoute',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'intendedRoute', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'ingredient',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'ingredient', typeCode: 'MedicationKnowledgeDefinitionalIngredient' }],
    },
    {
      elementName: 'drugCharacteristic',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'drugCharacteristic',
          typeCode: 'MedicationKnowledgeDefinitionalDrugCharacteristic',
        },
      ],
    },
  ];

  /** Definitional resources that provide more information about this medication (0..*) */
  definition?: Reference[];

  /** powder | tablets | capsule + (0..1) */
  doseForm?: CodeableConcept;

  /** The intended or approved route of administration (0..*) */
  intendedRoute?: CodeableConcept[];

  /** Active or inactive ingredient (0..*) */
  ingredient?: MedicationKnowledgeDefinitionalIngredient[];

  /** Specifies descriptive properties of the medicine (0..*) */
  drugCharacteristic?: MedicationKnowledgeDefinitionalDrugCharacteristic[];

  override fhirType(): string {
    return 'MedicationKnowledge.definitional';
  }

  /** FHIR JSON for this MedicationKnowledgeDefinitional, typed as the plain `MedicationKnowledgeDefinitional` data type. */
  override toJSON(): plainTypes.MedicationKnowledgeDefinitional {
    return this.serialize() as plainTypes.MedicationKnowledgeDefinitional;
  }

  /** Definitional resources that provide more information about this medication (0..*) Never undefined; an empty list is created when absent. */
  getDefinition(): Reference[] {
    if (this.definition === undefined) {
      this.definition = [];
    }
    return this.definition;
  }

  setDefinition(definition: Reference[] | undefined): this {
    return this.setFieldValue('definition', definition);
  }

  hasDefinition(): boolean {
    return this.hasFieldValue('definition');
  }

  /** Appends a new, empty Reference to `definition` and returns it so it can be filled in. */
  addDefinition(): Reference;
  /** Appends the given Reference to `definition` and returns this object for chaining. */
  addDefinition(reference: Reference): this;
  addDefinition(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('definition', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('definition', createdReference);
    return createdReference;
  }

  /** The first Reference of `definition`. One is added when the list is empty. */
  getDefinitionFirstRep(): Reference {
    const firstReference = this.getDefinition()[0];
    return firstReference === undefined ? this.addDefinition() : firstReference;
  }

  /** powder | tablets | capsule + (0..1) Created when absent. */
  getDoseForm(): CodeableConcept {
    if (this.doseForm === undefined) {
      this.doseForm = new CodeableConcept();
    }
    return this.doseForm;
  }

  setDoseForm(doseForm: CodeableConcept | undefined): this {
    return this.setFieldValue('doseForm', doseForm);
  }

  hasDoseForm(): boolean {
    return this.hasFieldValue('doseForm');
  }

  /** The intended or approved route of administration (0..*) Never undefined; an empty list is created when absent. */
  getIntendedRoute(): CodeableConcept[] {
    if (this.intendedRoute === undefined) {
      this.intendedRoute = [];
    }
    return this.intendedRoute;
  }

  setIntendedRoute(intendedRoute: CodeableConcept[] | undefined): this {
    return this.setFieldValue('intendedRoute', intendedRoute);
  }

  hasIntendedRoute(): boolean {
    return this.hasFieldValue('intendedRoute');
  }

  /** Appends a new, empty CodeableConcept to `intendedRoute` and returns it so it can be filled in. */
  addIntendedRoute(): CodeableConcept;
  /** Appends the given CodeableConcept to `intendedRoute` and returns this object for chaining. */
  addIntendedRoute(codeableConcept: CodeableConcept): this;
  addIntendedRoute(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('intendedRoute', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('intendedRoute', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `intendedRoute`. One is added when the list is empty. */
  getIntendedRouteFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getIntendedRoute()[0];
    return firstCodeableConcept === undefined ? this.addIntendedRoute() : firstCodeableConcept;
  }

  /** Active or inactive ingredient (0..*) Never undefined; an empty list is created when absent. */
  getIngredient(): MedicationKnowledgeDefinitionalIngredient[] {
    if (this.ingredient === undefined) {
      this.ingredient = [];
    }
    return this.ingredient;
  }

  setIngredient(ingredient: MedicationKnowledgeDefinitionalIngredient[] | undefined): this {
    return this.setFieldValue('ingredient', ingredient);
  }

  hasIngredient(): boolean {
    return this.hasFieldValue('ingredient');
  }

  /** Appends a new, empty MedicationKnowledgeDefinitionalIngredient to `ingredient` and returns it so it can be filled in. */
  addIngredient(): MedicationKnowledgeDefinitionalIngredient;
  /** Appends the given MedicationKnowledgeDefinitionalIngredient to `ingredient` and returns this object for chaining. */
  addIngredient(
    medicationKnowledgeDefinitionalIngredient: MedicationKnowledgeDefinitionalIngredient
  ): this;
  addIngredient(
    medicationKnowledgeDefinitionalIngredient?: MedicationKnowledgeDefinitionalIngredient
  ): MedicationKnowledgeDefinitionalIngredient | this {
    if (medicationKnowledgeDefinitionalIngredient !== undefined) {
      return this.addFieldValue('ingredient', medicationKnowledgeDefinitionalIngredient);
    }
    const createdMedicationKnowledgeDefinitionalIngredient =
      new MedicationKnowledgeDefinitionalIngredient();
    this.addFieldValue('ingredient', createdMedicationKnowledgeDefinitionalIngredient);
    return createdMedicationKnowledgeDefinitionalIngredient;
  }

  /** The first MedicationKnowledgeDefinitionalIngredient of `ingredient`. One is added when the list is empty. */
  getIngredientFirstRep(): MedicationKnowledgeDefinitionalIngredient {
    const firstMedicationKnowledgeDefinitionalIngredient = this.getIngredient()[0];
    return firstMedicationKnowledgeDefinitionalIngredient === undefined
      ? this.addIngredient()
      : firstMedicationKnowledgeDefinitionalIngredient;
  }

  /** Specifies descriptive properties of the medicine (0..*) Never undefined; an empty list is created when absent. */
  getDrugCharacteristic(): MedicationKnowledgeDefinitionalDrugCharacteristic[] {
    if (this.drugCharacteristic === undefined) {
      this.drugCharacteristic = [];
    }
    return this.drugCharacteristic;
  }

  setDrugCharacteristic(
    drugCharacteristic: MedicationKnowledgeDefinitionalDrugCharacteristic[] | undefined
  ): this {
    return this.setFieldValue('drugCharacteristic', drugCharacteristic);
  }

  hasDrugCharacteristic(): boolean {
    return this.hasFieldValue('drugCharacteristic');
  }

  /** Appends a new, empty MedicationKnowledgeDefinitionalDrugCharacteristic to `drugCharacteristic` and returns it so it can be filled in. */
  addDrugCharacteristic(): MedicationKnowledgeDefinitionalDrugCharacteristic;
  /** Appends the given MedicationKnowledgeDefinitionalDrugCharacteristic to `drugCharacteristic` and returns this object for chaining. */
  addDrugCharacteristic(
    medicationKnowledgeDefinitionalDrugCharacteristic: MedicationKnowledgeDefinitionalDrugCharacteristic
  ): this;
  addDrugCharacteristic(
    medicationKnowledgeDefinitionalDrugCharacteristic?: MedicationKnowledgeDefinitionalDrugCharacteristic
  ): MedicationKnowledgeDefinitionalDrugCharacteristic | this {
    if (medicationKnowledgeDefinitionalDrugCharacteristic !== undefined) {
      return this.addFieldValue(
        'drugCharacteristic',
        medicationKnowledgeDefinitionalDrugCharacteristic
      );
    }
    const createdMedicationKnowledgeDefinitionalDrugCharacteristic =
      new MedicationKnowledgeDefinitionalDrugCharacteristic();
    this.addFieldValue(
      'drugCharacteristic',
      createdMedicationKnowledgeDefinitionalDrugCharacteristic
    );
    return createdMedicationKnowledgeDefinitionalDrugCharacteristic;
  }

  /** The first MedicationKnowledgeDefinitionalDrugCharacteristic of `drugCharacteristic`. One is added when the list is empty. */
  getDrugCharacteristicFirstRep(): MedicationKnowledgeDefinitionalDrugCharacteristic {
    const firstMedicationKnowledgeDefinitionalDrugCharacteristic = this.getDrugCharacteristic()[0];
    return firstMedicationKnowledgeDefinitionalDrugCharacteristic === undefined
      ? this.addDrugCharacteristic()
      : firstMedicationKnowledgeDefinitionalDrugCharacteristic;
  }
}

modelTypeRegistry.register(
  'MedicationKnowledgeDefinitional',
  MedicationKnowledgeDefinitional,
  false
);

/**
 * Active or inactive ingredient
 */
export class MedicationKnowledgeDefinitionalIngredient extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'item',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'item', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'strength',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'strengthRatio', typeCode: 'Ratio' },
        { jsonKey: 'strengthCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'strengthQuantity', typeCode: 'Quantity' },
      ],
    },
  ];

  /** Substances contained in the medication (1..1) */
  item?: CodeableReference;

  /** A code that defines the type of ingredient, active, base, etc (0..1) */
  type?: CodeableConcept;

  /** Quantity of ingredient present (0..1) */
  strengthRatio?: Ratio;
  /** Quantity of ingredient present (0..1) */
  strengthCodeableConcept?: CodeableConcept;
  /** Quantity of ingredient present (0..1) */
  strengthQuantity?: Quantity;

  override fhirType(): string {
    return 'MedicationKnowledge.definitional.ingredient';
  }

  /** FHIR JSON for this MedicationKnowledgeDefinitionalIngredient, typed as the plain `MedicationKnowledgeIngredient` data type. */
  override toJSON(): plainTypes.MedicationKnowledgeIngredient {
    return this.serialize() as plainTypes.MedicationKnowledgeIngredient;
  }

  /** Substances contained in the medication (1..1) Created when absent. */
  getItem(): CodeableReference {
    if (this.item === undefined) {
      this.item = new CodeableReference();
    }
    return this.item;
  }

  setItem(item: CodeableReference | undefined): this {
    return this.setFieldValue('item', item);
  }

  hasItem(): boolean {
    return this.hasFieldValue('item');
  }

  /** A code that defines the type of ingredient, active, base, etc (0..1) Created when absent. */
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

  /** Quantity of ingredient present (0..1) Whichever type of `strength[x]` is set. */
  getStrength(): Ratio | CodeableConcept | Quantity | undefined {
    return this.getChoiceValue<Ratio | CodeableConcept | Quantity>('strength');
  }

  /** True when any type of `strength[x]` is set. */
  hasStrength(): boolean {
    return this.hasChoiceValue('strength');
  }

  getStrengthRatio(): Ratio | undefined {
    return this.strengthRatio;
  }

  /** Sets `strength[x]` as Ratio and clears every other type of it. */
  setStrengthRatio(strengthRatio: Ratio | undefined): this {
    return this.setFieldValue('strengthRatio', strengthRatio);
  }

  hasStrengthRatio(): boolean {
    return this.hasFieldValue('strengthRatio');
  }

  getStrengthCodeableConcept(): CodeableConcept | undefined {
    return this.strengthCodeableConcept;
  }

  /** Sets `strength[x]` as CodeableConcept and clears every other type of it. */
  setStrengthCodeableConcept(strengthCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('strengthCodeableConcept', strengthCodeableConcept);
  }

  hasStrengthCodeableConcept(): boolean {
    return this.hasFieldValue('strengthCodeableConcept');
  }

  getStrengthQuantity(): Quantity | undefined {
    return this.strengthQuantity;
  }

  /** Sets `strength[x]` as Quantity and clears every other type of it. */
  setStrengthQuantity(strengthQuantity: Quantity | undefined): this {
    return this.setFieldValue('strengthQuantity', strengthQuantity);
  }

  hasStrengthQuantity(): boolean {
    return this.hasFieldValue('strengthQuantity');
  }
}

modelTypeRegistry.register(
  'MedicationKnowledgeDefinitionalIngredient',
  MedicationKnowledgeDefinitionalIngredient,
  false
);

/**
 * Specifies descriptive properties of the medicine
 */
export class MedicationKnowledgeDefinitionalDrugCharacteristic extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
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
        { jsonKey: 'valueString', typeCode: 'string' },
        { jsonKey: 'valueQuantity', typeCode: 'Quantity' },
        { jsonKey: 'valueBase64Binary', typeCode: 'base64Binary' },
        { jsonKey: 'valueAttachment', typeCode: 'Attachment' },
      ],
    },
  ];

  /** Code specifying the type of characteristic of medication (0..1) */
  type?: CodeableConcept;

  /** Description of the characteristic (0..1) */
  valueCodeableConcept?: CodeableConcept;
  /** Description of the characteristic (0..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Description of the characteristic (0..1) */
  valueQuantity?: Quantity;
  /** Description of the characteristic (0..1) */
  valueBase64Binary?: string;
  /** Id and extensions of the primitive `valueBase64Binary`. */
  _valueBase64Binary?: Element;
  /** Description of the characteristic (0..1) */
  valueAttachment?: Attachment;

  override fhirType(): string {
    return 'MedicationKnowledge.definitional.drugCharacteristic';
  }

  /** FHIR JSON for this MedicationKnowledgeDefinitionalDrugCharacteristic, typed as the plain `MedicationKnowledgeDrugCharacteristic` data type. */
  override toJSON(): plainTypes.MedicationKnowledgeDrugCharacteristic {
    return this.serialize() as plainTypes.MedicationKnowledgeDrugCharacteristic;
  }

  /** Code specifying the type of characteristic of medication (0..1) Created when absent. */
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

  /** Description of the characteristic (0..1) Whichever type of `value[x]` is set. */
  getValue(): CodeableConcept | string | Quantity | Attachment | undefined {
    return this.getChoiceValue<CodeableConcept | string | Quantity | Attachment>('value');
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

  getValueString(): string | undefined {
    return this.valueString;
  }

  /** Sets `value[x]` as string and clears every other type of it. */
  setValueString(valueString: string | undefined): this {
    return this.setFieldValue('valueString', valueString);
  }

  hasValueString(): boolean {
    return this.hasFieldValue('valueString');
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

  getValueBase64Binary(): string | undefined {
    return this.valueBase64Binary;
  }

  /** Sets `value[x]` as base64Binary and clears every other type of it. */
  setValueBase64Binary(valueBase64Binary: string | undefined): this {
    return this.setFieldValue('valueBase64Binary', valueBase64Binary);
  }

  hasValueBase64Binary(): boolean {
    return this.hasFieldValue('valueBase64Binary');
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
  'MedicationKnowledgeDefinitionalDrugCharacteristic',
  MedicationKnowledgeDefinitionalDrugCharacteristic,
  false
);
