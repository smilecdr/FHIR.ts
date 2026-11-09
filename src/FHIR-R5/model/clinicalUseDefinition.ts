/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { CodeableReference } from './codeableReference';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Expression } from './expression';
import { Identifier } from './identifier';
import { Range } from './range';
import { Reference } from './reference';

/**
 * A single issue - either an indication, contraindication, interaction or an undesirable effect for a medicinal product, medication, device or procedure.
 */
export class ClinicalUseDefinition extends DomainResource {
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
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'type',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ClinicalUseDefinitionType,
        },
      ],
    },
    {
      elementName: 'category',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
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
            'Device',
            'DeviceDefinition',
            'Medication',
            'MedicinalProductDefinition',
            'NutritionProduct',
            'PlanDefinition',
            'Substance',
          ],
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
      elementName: 'contraindication',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'contraindication', typeCode: 'ClinicalUseDefinitionContraindication' }],
    },
    {
      elementName: 'indication',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'indication', typeCode: 'ClinicalUseDefinitionIndication' }],
    },
    {
      elementName: 'interaction',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'interaction', typeCode: 'ClinicalUseDefinitionInteraction' }],
    },
    {
      elementName: 'population',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'population', typeCode: 'Reference', targetResourceTypes: ['Group'] }],
    },
    {
      elementName: 'library',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'library', typeCode: 'canonical' }],
    },
    {
      elementName: 'undesirableEffect',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'undesirableEffect', typeCode: 'ClinicalUseDefinitionUndesirableEffect' }],
    },
    {
      elementName: 'warning',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'warning', typeCode: 'ClinicalUseDefinitionWarning' }],
    },
  ];

  readonly resourceType = 'ClinicalUseDefinition';

  /** Business identifier for this issue (0..*) */
  identifier?: Identifier[];

  /** indication | contraindication | interaction | undesirable-effect | warning (1..1) */
  type?: valueSetCodes.ClinicalUseDefinitionType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** A categorisation of the issue, primarily for dividing warnings into subject heading areas such as "Pregnancy", "Overdose" (0..*) */
  category?: CodeableConcept[];

  /** The medication, product, substance, device, procedure etc. for which this is an indication (0..*) */
  subject?: Reference[];

  /** Whether this is a current issue or one that has been retired etc (0..1) */
  status?: CodeableConcept;

  /** Specifics for when this is a contraindication (0..1) */
  contraindication?: ClinicalUseDefinitionContraindication;

  /** Specifics for when this is an indication (0..1) */
  indication?: ClinicalUseDefinitionIndication;

  /** Specifics for when this is an interaction (0..1) */
  interaction?: ClinicalUseDefinitionInteraction;

  /** The population group to which this applies (0..*) */
  population?: Reference[];

  /** Logic used by the clinical use definition (0..*) */
  library?: string[];
  /** Id and extensions of the primitive `library`. */
  _library?: (Element | null)[];

  /** A possible negative outcome from the use of this treatment (0..1) */
  undesirableEffect?: ClinicalUseDefinitionUndesirableEffect;

  /** Critical environmental, health or physical risks or hazards. For example 'Do not operate heavy machinery', 'May cause drowsiness' (0..1) */
  warning?: ClinicalUseDefinitionWarning;

  override fhirType(): string {
    return 'ClinicalUseDefinition';
  }

  /** FHIR JSON for this ClinicalUseDefinition, typed as the plain `ClinicalUseDefinition` data type. */
  override toJSON(): plainTypes.ClinicalUseDefinition {
    return this.serialize() as plainTypes.ClinicalUseDefinition;
  }

  /** Business identifier for this issue (0..*) Never undefined; an empty list is created when absent. */
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

  /** indication | contraindication | interaction | undesirable-effect | warning (1..1) */
  getType(): valueSetCodes.ClinicalUseDefinitionType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.ClinicalUseDefinitionType | undefined): this {
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

  /** A categorisation of the issue, primarily for dividing warnings into subject heading areas such as "Pregnancy", "Overdose" (0..*) Never undefined; an empty list is created when absent. */
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

  /** The medication, product, substance, device, procedure etc. for which this is an indication (0..*) Never undefined; an empty list is created when absent. */
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

  /** Whether this is a current issue or one that has been retired etc (0..1) Created when absent. */
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

  /** Specifics for when this is a contraindication (0..1) Created when absent. */
  getContraindication(): ClinicalUseDefinitionContraindication {
    if (this.contraindication === undefined) {
      this.contraindication = new ClinicalUseDefinitionContraindication();
    }
    return this.contraindication;
  }

  setContraindication(contraindication: ClinicalUseDefinitionContraindication | undefined): this {
    return this.setFieldValue('contraindication', contraindication);
  }

  hasContraindication(): boolean {
    return this.hasFieldValue('contraindication');
  }

  /** Specifics for when this is an indication (0..1) Created when absent. */
  getIndication(): ClinicalUseDefinitionIndication {
    if (this.indication === undefined) {
      this.indication = new ClinicalUseDefinitionIndication();
    }
    return this.indication;
  }

  setIndication(indication: ClinicalUseDefinitionIndication | undefined): this {
    return this.setFieldValue('indication', indication);
  }

  hasIndication(): boolean {
    return this.hasFieldValue('indication');
  }

  /** Specifics for when this is an interaction (0..1) Created when absent. */
  getInteraction(): ClinicalUseDefinitionInteraction {
    if (this.interaction === undefined) {
      this.interaction = new ClinicalUseDefinitionInteraction();
    }
    return this.interaction;
  }

  setInteraction(interaction: ClinicalUseDefinitionInteraction | undefined): this {
    return this.setFieldValue('interaction', interaction);
  }

  hasInteraction(): boolean {
    return this.hasFieldValue('interaction');
  }

  /** The population group to which this applies (0..*) Never undefined; an empty list is created when absent. */
  getPopulation(): Reference[] {
    if (this.population === undefined) {
      this.population = [];
    }
    return this.population;
  }

  setPopulation(population: Reference[] | undefined): this {
    return this.setFieldValue('population', population);
  }

  hasPopulation(): boolean {
    return this.hasFieldValue('population');
  }

  /** Appends a new, empty Reference to `population` and returns it so it can be filled in. */
  addPopulation(): Reference;
  /** Appends the given Reference to `population` and returns this object for chaining. */
  addPopulation(reference: Reference): this;
  addPopulation(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('population', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('population', createdReference);
    return createdReference;
  }

  /** The first Reference of `population`. One is added when the list is empty. */
  getPopulationFirstRep(): Reference {
    const firstReference = this.getPopulation()[0];
    return firstReference === undefined ? this.addPopulation() : firstReference;
  }

  /** Logic used by the clinical use definition (0..*) Never undefined; an empty list is created when absent. */
  getLibrary(): string[] {
    if (this.library === undefined) {
      this.library = [];
    }
    return this.library;
  }

  setLibrary(library: string[] | undefined): this {
    return this.setFieldValue('library', library);
  }

  hasLibrary(): boolean {
    return this.hasFieldValue('library');
  }

  /** Appends one value to `library`. Throws a FhirModelError when it is not a valid FHIR canonical. */
  addLibrary(library: string): this {
    return this.addFieldValue('library', library);
  }

  /** A possible negative outcome from the use of this treatment (0..1) Created when absent. */
  getUndesirableEffect(): ClinicalUseDefinitionUndesirableEffect {
    if (this.undesirableEffect === undefined) {
      this.undesirableEffect = new ClinicalUseDefinitionUndesirableEffect();
    }
    return this.undesirableEffect;
  }

  setUndesirableEffect(
    undesirableEffect: ClinicalUseDefinitionUndesirableEffect | undefined
  ): this {
    return this.setFieldValue('undesirableEffect', undesirableEffect);
  }

  hasUndesirableEffect(): boolean {
    return this.hasFieldValue('undesirableEffect');
  }

  /** Critical environmental, health or physical risks or hazards. For example 'Do not operate heavy machinery', 'May cause drowsiness' (0..1) Created when absent. */
  getWarning(): ClinicalUseDefinitionWarning {
    if (this.warning === undefined) {
      this.warning = new ClinicalUseDefinitionWarning();
    }
    return this.warning;
  }

  setWarning(warning: ClinicalUseDefinitionWarning | undefined): this {
    return this.setFieldValue('warning', warning);
  }

  hasWarning(): boolean {
    return this.hasFieldValue('warning');
  }
}

modelTypeRegistry.register('ClinicalUseDefinition', ClinicalUseDefinition, true);

/** True when the value is a ClinicalUseDefinition model instance. */
export function isClinicalUseDefinition(candidate: unknown): candidate is ClinicalUseDefinition {
  return candidate instanceof ClinicalUseDefinition;
}

/**
 * Specifics for when this is a contraindication
 */
export class ClinicalUseDefinitionContraindication extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'diseaseSymptomProcedure',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'diseaseSymptomProcedure', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'diseaseStatus',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'diseaseStatus', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'comorbidity',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'comorbidity', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'indication',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'indication',
          typeCode: 'Reference',
          targetResourceTypes: ['ClinicalUseDefinition'],
        },
      ],
    },
    {
      elementName: 'applicability',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'applicability', typeCode: 'Expression' }],
    },
    {
      elementName: 'otherTherapy',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'otherTherapy', typeCode: 'ClinicalUseDefinitionContraindicationOtherTherapy' },
      ],
    },
  ];

  /** The situation that is being documented as contraindicating against this item (0..1) */
  diseaseSymptomProcedure?: CodeableReference;

  /** The status of the disease or symptom for the contraindication (0..1) */
  diseaseStatus?: CodeableReference;

  /** A comorbidity (concurrent condition) or coinfection (0..*) */
  comorbidity?: CodeableReference[];

  /** The indication which this is a contraidication for (0..*) */
  indication?: Reference[];

  /** An expression that returns true or false, indicating whether the indication is applicable or not, after having applied its other elements (0..1) */
  applicability?: Expression;

  /** Information about use of the product in relation to other therapies described as part of the contraindication (0..*) */
  otherTherapy?: ClinicalUseDefinitionContraindicationOtherTherapy[];

  override fhirType(): string {
    return 'ClinicalUseDefinition.contraindication';
  }

  /** FHIR JSON for this ClinicalUseDefinitionContraindication, typed as the plain `ClinicalUseDefinitionContraindication` data type. */
  override toJSON(): plainTypes.ClinicalUseDefinitionContraindication {
    return this.serialize() as plainTypes.ClinicalUseDefinitionContraindication;
  }

  /** The situation that is being documented as contraindicating against this item (0..1) Created when absent. */
  getDiseaseSymptomProcedure(): CodeableReference {
    if (this.diseaseSymptomProcedure === undefined) {
      this.diseaseSymptomProcedure = new CodeableReference();
    }
    return this.diseaseSymptomProcedure;
  }

  setDiseaseSymptomProcedure(diseaseSymptomProcedure: CodeableReference | undefined): this {
    return this.setFieldValue('diseaseSymptomProcedure', diseaseSymptomProcedure);
  }

  hasDiseaseSymptomProcedure(): boolean {
    return this.hasFieldValue('diseaseSymptomProcedure');
  }

  /** The status of the disease or symptom for the contraindication (0..1) Created when absent. */
  getDiseaseStatus(): CodeableReference {
    if (this.diseaseStatus === undefined) {
      this.diseaseStatus = new CodeableReference();
    }
    return this.diseaseStatus;
  }

  setDiseaseStatus(diseaseStatus: CodeableReference | undefined): this {
    return this.setFieldValue('diseaseStatus', diseaseStatus);
  }

  hasDiseaseStatus(): boolean {
    return this.hasFieldValue('diseaseStatus');
  }

  /** A comorbidity (concurrent condition) or coinfection (0..*) Never undefined; an empty list is created when absent. */
  getComorbidity(): CodeableReference[] {
    if (this.comorbidity === undefined) {
      this.comorbidity = [];
    }
    return this.comorbidity;
  }

  setComorbidity(comorbidity: CodeableReference[] | undefined): this {
    return this.setFieldValue('comorbidity', comorbidity);
  }

  hasComorbidity(): boolean {
    return this.hasFieldValue('comorbidity');
  }

  /** Appends a new, empty CodeableReference to `comorbidity` and returns it so it can be filled in. */
  addComorbidity(): CodeableReference;
  /** Appends the given CodeableReference to `comorbidity` and returns this object for chaining. */
  addComorbidity(codeableReference: CodeableReference): this;
  addComorbidity(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('comorbidity', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('comorbidity', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `comorbidity`. One is added when the list is empty. */
  getComorbidityFirstRep(): CodeableReference {
    const firstCodeableReference = this.getComorbidity()[0];
    return firstCodeableReference === undefined ? this.addComorbidity() : firstCodeableReference;
  }

  /** The indication which this is a contraidication for (0..*) Never undefined; an empty list is created when absent. */
  getIndication(): Reference[] {
    if (this.indication === undefined) {
      this.indication = [];
    }
    return this.indication;
  }

  setIndication(indication: Reference[] | undefined): this {
    return this.setFieldValue('indication', indication);
  }

  hasIndication(): boolean {
    return this.hasFieldValue('indication');
  }

  /** Appends a new, empty Reference to `indication` and returns it so it can be filled in. */
  addIndication(): Reference;
  /** Appends the given Reference to `indication` and returns this object for chaining. */
  addIndication(reference: Reference): this;
  addIndication(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('indication', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('indication', createdReference);
    return createdReference;
  }

  /** The first Reference of `indication`. One is added when the list is empty. */
  getIndicationFirstRep(): Reference {
    const firstReference = this.getIndication()[0];
    return firstReference === undefined ? this.addIndication() : firstReference;
  }

  /** An expression that returns true or false, indicating whether the indication is applicable or not, after having applied its other elements (0..1) Created when absent. */
  getApplicability(): Expression {
    if (this.applicability === undefined) {
      this.applicability = new Expression();
    }
    return this.applicability;
  }

  setApplicability(applicability: Expression | undefined): this {
    return this.setFieldValue('applicability', applicability);
  }

  hasApplicability(): boolean {
    return this.hasFieldValue('applicability');
  }

  /** Information about use of the product in relation to other therapies described as part of the contraindication (0..*) Never undefined; an empty list is created when absent. */
  getOtherTherapy(): ClinicalUseDefinitionContraindicationOtherTherapy[] {
    if (this.otherTherapy === undefined) {
      this.otherTherapy = [];
    }
    return this.otherTherapy;
  }

  setOtherTherapy(
    otherTherapy: ClinicalUseDefinitionContraindicationOtherTherapy[] | undefined
  ): this {
    return this.setFieldValue('otherTherapy', otherTherapy);
  }

  hasOtherTherapy(): boolean {
    return this.hasFieldValue('otherTherapy');
  }

  /** Appends a new, empty ClinicalUseDefinitionContraindicationOtherTherapy to `otherTherapy` and returns it so it can be filled in. */
  addOtherTherapy(): ClinicalUseDefinitionContraindicationOtherTherapy;
  /** Appends the given ClinicalUseDefinitionContraindicationOtherTherapy to `otherTherapy` and returns this object for chaining. */
  addOtherTherapy(
    clinicalUseDefinitionContraindicationOtherTherapy: ClinicalUseDefinitionContraindicationOtherTherapy
  ): this;
  addOtherTherapy(
    clinicalUseDefinitionContraindicationOtherTherapy?: ClinicalUseDefinitionContraindicationOtherTherapy
  ): ClinicalUseDefinitionContraindicationOtherTherapy | this {
    if (clinicalUseDefinitionContraindicationOtherTherapy !== undefined) {
      return this.addFieldValue('otherTherapy', clinicalUseDefinitionContraindicationOtherTherapy);
    }
    const createdClinicalUseDefinitionContraindicationOtherTherapy =
      new ClinicalUseDefinitionContraindicationOtherTherapy();
    this.addFieldValue('otherTherapy', createdClinicalUseDefinitionContraindicationOtherTherapy);
    return createdClinicalUseDefinitionContraindicationOtherTherapy;
  }

  /** The first ClinicalUseDefinitionContraindicationOtherTherapy of `otherTherapy`. One is added when the list is empty. */
  getOtherTherapyFirstRep(): ClinicalUseDefinitionContraindicationOtherTherapy {
    const firstClinicalUseDefinitionContraindicationOtherTherapy = this.getOtherTherapy()[0];
    return firstClinicalUseDefinitionContraindicationOtherTherapy === undefined
      ? this.addOtherTherapy()
      : firstClinicalUseDefinitionContraindicationOtherTherapy;
  }
}

modelTypeRegistry.register(
  'ClinicalUseDefinitionContraindication',
  ClinicalUseDefinitionContraindication,
  false
);

/**
 * Information about use of the product in relation to other therapies described as part of the contraindication
 */
export class ClinicalUseDefinitionContraindicationOtherTherapy extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'relationshipType',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'relationshipType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'treatment',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'treatment', typeCode: 'CodeableReference' }],
    },
  ];

  /** The type of relationship between the product indication/contraindication and another therapy (1..1) */
  relationshipType?: CodeableConcept;

  /** Reference to a specific medication, substance etc. as part of an indication or contraindication (1..1) */
  treatment?: CodeableReference;

  override fhirType(): string {
    return 'ClinicalUseDefinition.contraindication.otherTherapy';
  }

  /** FHIR JSON for this ClinicalUseDefinitionContraindicationOtherTherapy, typed as the plain `ClinicalUseDefinitionOtherTherapy` data type. */
  override toJSON(): plainTypes.ClinicalUseDefinitionOtherTherapy {
    return this.serialize() as plainTypes.ClinicalUseDefinitionOtherTherapy;
  }

  /** The type of relationship between the product indication/contraindication and another therapy (1..1) Created when absent. */
  getRelationshipType(): CodeableConcept {
    if (this.relationshipType === undefined) {
      this.relationshipType = new CodeableConcept();
    }
    return this.relationshipType;
  }

  setRelationshipType(relationshipType: CodeableConcept | undefined): this {
    return this.setFieldValue('relationshipType', relationshipType);
  }

  hasRelationshipType(): boolean {
    return this.hasFieldValue('relationshipType');
  }

  /** Reference to a specific medication, substance etc. as part of an indication or contraindication (1..1) Created when absent. */
  getTreatment(): CodeableReference {
    if (this.treatment === undefined) {
      this.treatment = new CodeableReference();
    }
    return this.treatment;
  }

  setTreatment(treatment: CodeableReference | undefined): this {
    return this.setFieldValue('treatment', treatment);
  }

  hasTreatment(): boolean {
    return this.hasFieldValue('treatment');
  }
}

modelTypeRegistry.register(
  'ClinicalUseDefinitionContraindicationOtherTherapy',
  ClinicalUseDefinitionContraindicationOtherTherapy,
  false
);

/**
 * Specifics for when this is an indication
 */
export class ClinicalUseDefinitionIndication extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'diseaseSymptomProcedure',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'diseaseSymptomProcedure', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'diseaseStatus',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'diseaseStatus', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'comorbidity',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'comorbidity', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'intendedEffect',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'intendedEffect', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'duration',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'durationRange', typeCode: 'Range' },
        { jsonKey: 'durationString', typeCode: 'string' },
      ],
    },
    {
      elementName: 'undesirableEffect',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'undesirableEffect',
          typeCode: 'Reference',
          targetResourceTypes: ['ClinicalUseDefinition'],
        },
      ],
    },
    {
      elementName: 'applicability',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'applicability', typeCode: 'Expression' }],
    },
    {
      elementName: 'otherTherapy',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'otherTherapy', typeCode: 'ClinicalUseDefinitionContraindicationOtherTherapy' },
      ],
    },
  ];

  /** The situation that is being documented as an indicaton for this item (0..1) */
  diseaseSymptomProcedure?: CodeableReference;

  /** The status of the disease or symptom for the indication (0..1) */
  diseaseStatus?: CodeableReference;

  /** A comorbidity or coinfection as part of the indication (0..*) */
  comorbidity?: CodeableReference[];

  /** The intended effect, aim or strategy to be achieved (0..1) */
  intendedEffect?: CodeableReference;

  /** Timing or duration information (0..1) */
  durationRange?: Range;
  /** Timing or duration information (0..1) */
  durationString?: string;
  /** Id and extensions of the primitive `durationString`. */
  _durationString?: Element;

  /** An unwanted side effect or negative outcome of the subject of this resource when being used for this indication (0..*) */
  undesirableEffect?: Reference[];

  /** An expression that returns true or false, indicating whether the indication is applicable or not, after having applied its other elements (0..1) */
  applicability?: Expression;

  /** The use of the medicinal product in relation to other therapies described as part of the indication (0..*) */
  otherTherapy?: ClinicalUseDefinitionContraindicationOtherTherapy[];

  override fhirType(): string {
    return 'ClinicalUseDefinition.indication';
  }

  /** FHIR JSON for this ClinicalUseDefinitionIndication, typed as the plain `ClinicalUseDefinitionIndication` data type. */
  override toJSON(): plainTypes.ClinicalUseDefinitionIndication {
    return this.serialize() as plainTypes.ClinicalUseDefinitionIndication;
  }

  /** The situation that is being documented as an indicaton for this item (0..1) Created when absent. */
  getDiseaseSymptomProcedure(): CodeableReference {
    if (this.diseaseSymptomProcedure === undefined) {
      this.diseaseSymptomProcedure = new CodeableReference();
    }
    return this.diseaseSymptomProcedure;
  }

  setDiseaseSymptomProcedure(diseaseSymptomProcedure: CodeableReference | undefined): this {
    return this.setFieldValue('diseaseSymptomProcedure', diseaseSymptomProcedure);
  }

  hasDiseaseSymptomProcedure(): boolean {
    return this.hasFieldValue('diseaseSymptomProcedure');
  }

  /** The status of the disease or symptom for the indication (0..1) Created when absent. */
  getDiseaseStatus(): CodeableReference {
    if (this.diseaseStatus === undefined) {
      this.diseaseStatus = new CodeableReference();
    }
    return this.diseaseStatus;
  }

  setDiseaseStatus(diseaseStatus: CodeableReference | undefined): this {
    return this.setFieldValue('diseaseStatus', diseaseStatus);
  }

  hasDiseaseStatus(): boolean {
    return this.hasFieldValue('diseaseStatus');
  }

  /** A comorbidity or coinfection as part of the indication (0..*) Never undefined; an empty list is created when absent. */
  getComorbidity(): CodeableReference[] {
    if (this.comorbidity === undefined) {
      this.comorbidity = [];
    }
    return this.comorbidity;
  }

  setComorbidity(comorbidity: CodeableReference[] | undefined): this {
    return this.setFieldValue('comorbidity', comorbidity);
  }

  hasComorbidity(): boolean {
    return this.hasFieldValue('comorbidity');
  }

  /** Appends a new, empty CodeableReference to `comorbidity` and returns it so it can be filled in. */
  addComorbidity(): CodeableReference;
  /** Appends the given CodeableReference to `comorbidity` and returns this object for chaining. */
  addComorbidity(codeableReference: CodeableReference): this;
  addComorbidity(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('comorbidity', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('comorbidity', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `comorbidity`. One is added when the list is empty. */
  getComorbidityFirstRep(): CodeableReference {
    const firstCodeableReference = this.getComorbidity()[0];
    return firstCodeableReference === undefined ? this.addComorbidity() : firstCodeableReference;
  }

  /** The intended effect, aim or strategy to be achieved (0..1) Created when absent. */
  getIntendedEffect(): CodeableReference {
    if (this.intendedEffect === undefined) {
      this.intendedEffect = new CodeableReference();
    }
    return this.intendedEffect;
  }

  setIntendedEffect(intendedEffect: CodeableReference | undefined): this {
    return this.setFieldValue('intendedEffect', intendedEffect);
  }

  hasIntendedEffect(): boolean {
    return this.hasFieldValue('intendedEffect');
  }

  /** Timing or duration information (0..1) Whichever type of `duration[x]` is set. */
  getDuration(): Range | string | undefined {
    return this.getChoiceValue<Range | string>('duration');
  }

  /** True when any type of `duration[x]` is set. */
  hasDuration(): boolean {
    return this.hasChoiceValue('duration');
  }

  getDurationRange(): Range | undefined {
    return this.durationRange;
  }

  /** Sets `duration[x]` as Range and clears every other type of it. */
  setDurationRange(durationRange: Range | undefined): this {
    return this.setFieldValue('durationRange', durationRange);
  }

  hasDurationRange(): boolean {
    return this.hasFieldValue('durationRange');
  }

  getDurationString(): string | undefined {
    return this.durationString;
  }

  /** Sets `duration[x]` as string and clears every other type of it. */
  setDurationString(durationString: string | undefined): this {
    return this.setFieldValue('durationString', durationString);
  }

  hasDurationString(): boolean {
    return this.hasFieldValue('durationString');
  }

  /** An unwanted side effect or negative outcome of the subject of this resource when being used for this indication (0..*) Never undefined; an empty list is created when absent. */
  getUndesirableEffect(): Reference[] {
    if (this.undesirableEffect === undefined) {
      this.undesirableEffect = [];
    }
    return this.undesirableEffect;
  }

  setUndesirableEffect(undesirableEffect: Reference[] | undefined): this {
    return this.setFieldValue('undesirableEffect', undesirableEffect);
  }

  hasUndesirableEffect(): boolean {
    return this.hasFieldValue('undesirableEffect');
  }

  /** Appends a new, empty Reference to `undesirableEffect` and returns it so it can be filled in. */
  addUndesirableEffect(): Reference;
  /** Appends the given Reference to `undesirableEffect` and returns this object for chaining. */
  addUndesirableEffect(reference: Reference): this;
  addUndesirableEffect(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('undesirableEffect', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('undesirableEffect', createdReference);
    return createdReference;
  }

  /** The first Reference of `undesirableEffect`. One is added when the list is empty. */
  getUndesirableEffectFirstRep(): Reference {
    const firstReference = this.getUndesirableEffect()[0];
    return firstReference === undefined ? this.addUndesirableEffect() : firstReference;
  }

  /** An expression that returns true or false, indicating whether the indication is applicable or not, after having applied its other elements (0..1) Created when absent. */
  getApplicability(): Expression {
    if (this.applicability === undefined) {
      this.applicability = new Expression();
    }
    return this.applicability;
  }

  setApplicability(applicability: Expression | undefined): this {
    return this.setFieldValue('applicability', applicability);
  }

  hasApplicability(): boolean {
    return this.hasFieldValue('applicability');
  }

  /** The use of the medicinal product in relation to other therapies described as part of the indication (0..*) Never undefined; an empty list is created when absent. */
  getOtherTherapy(): ClinicalUseDefinitionContraindicationOtherTherapy[] {
    if (this.otherTherapy === undefined) {
      this.otherTherapy = [];
    }
    return this.otherTherapy;
  }

  setOtherTherapy(
    otherTherapy: ClinicalUseDefinitionContraindicationOtherTherapy[] | undefined
  ): this {
    return this.setFieldValue('otherTherapy', otherTherapy);
  }

  hasOtherTherapy(): boolean {
    return this.hasFieldValue('otherTherapy');
  }

  /** Appends a new, empty ClinicalUseDefinitionContraindicationOtherTherapy to `otherTherapy` and returns it so it can be filled in. */
  addOtherTherapy(): ClinicalUseDefinitionContraindicationOtherTherapy;
  /** Appends the given ClinicalUseDefinitionContraindicationOtherTherapy to `otherTherapy` and returns this object for chaining. */
  addOtherTherapy(
    clinicalUseDefinitionContraindicationOtherTherapy: ClinicalUseDefinitionContraindicationOtherTherapy
  ): this;
  addOtherTherapy(
    clinicalUseDefinitionContraindicationOtherTherapy?: ClinicalUseDefinitionContraindicationOtherTherapy
  ): ClinicalUseDefinitionContraindicationOtherTherapy | this {
    if (clinicalUseDefinitionContraindicationOtherTherapy !== undefined) {
      return this.addFieldValue('otherTherapy', clinicalUseDefinitionContraindicationOtherTherapy);
    }
    const createdClinicalUseDefinitionContraindicationOtherTherapy =
      new ClinicalUseDefinitionContraindicationOtherTherapy();
    this.addFieldValue('otherTherapy', createdClinicalUseDefinitionContraindicationOtherTherapy);
    return createdClinicalUseDefinitionContraindicationOtherTherapy;
  }

  /** The first ClinicalUseDefinitionContraindicationOtherTherapy of `otherTherapy`. One is added when the list is empty. */
  getOtherTherapyFirstRep(): ClinicalUseDefinitionContraindicationOtherTherapy {
    const firstClinicalUseDefinitionContraindicationOtherTherapy = this.getOtherTherapy()[0];
    return firstClinicalUseDefinitionContraindicationOtherTherapy === undefined
      ? this.addOtherTherapy()
      : firstClinicalUseDefinitionContraindicationOtherTherapy;
  }
}

modelTypeRegistry.register(
  'ClinicalUseDefinitionIndication',
  ClinicalUseDefinitionIndication,
  false
);

/**
 * Specifics for when this is an interaction
 */
export class ClinicalUseDefinitionInteraction extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'interactant',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'interactant', typeCode: 'ClinicalUseDefinitionInteractionInteractant' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'effect',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'effect', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'incidence',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'incidence', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'management',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'management', typeCode: 'CodeableConcept' }],
    },
  ];

  /** The specific medication, product, food etc. or laboratory test that interacts (0..*) */
  interactant?: ClinicalUseDefinitionInteractionInteractant[];

  /** The type of the interaction e.g. drug-drug interaction, drug-lab test interaction (0..1) */
  type?: CodeableConcept;

  /** The effect of the interaction, for example "reduced gastric absorption of primary medication" (0..1) */
  effect?: CodeableReference;

  /** The incidence of the interaction, e.g. theoretical, observed (0..1) */
  incidence?: CodeableConcept;

  /** Actions for managing the interaction (0..*) */
  management?: CodeableConcept[];

  override fhirType(): string {
    return 'ClinicalUseDefinition.interaction';
  }

  /** FHIR JSON for this ClinicalUseDefinitionInteraction, typed as the plain `ClinicalUseDefinitionInteraction` data type. */
  override toJSON(): plainTypes.ClinicalUseDefinitionInteraction {
    return this.serialize() as plainTypes.ClinicalUseDefinitionInteraction;
  }

  /** The specific medication, product, food etc. or laboratory test that interacts (0..*) Never undefined; an empty list is created when absent. */
  getInteractant(): ClinicalUseDefinitionInteractionInteractant[] {
    if (this.interactant === undefined) {
      this.interactant = [];
    }
    return this.interactant;
  }

  setInteractant(interactant: ClinicalUseDefinitionInteractionInteractant[] | undefined): this {
    return this.setFieldValue('interactant', interactant);
  }

  hasInteractant(): boolean {
    return this.hasFieldValue('interactant');
  }

  /** Appends a new, empty ClinicalUseDefinitionInteractionInteractant to `interactant` and returns it so it can be filled in. */
  addInteractant(): ClinicalUseDefinitionInteractionInteractant;
  /** Appends the given ClinicalUseDefinitionInteractionInteractant to `interactant` and returns this object for chaining. */
  addInteractant(
    clinicalUseDefinitionInteractionInteractant: ClinicalUseDefinitionInteractionInteractant
  ): this;
  addInteractant(
    clinicalUseDefinitionInteractionInteractant?: ClinicalUseDefinitionInteractionInteractant
  ): ClinicalUseDefinitionInteractionInteractant | this {
    if (clinicalUseDefinitionInteractionInteractant !== undefined) {
      return this.addFieldValue('interactant', clinicalUseDefinitionInteractionInteractant);
    }
    const createdClinicalUseDefinitionInteractionInteractant =
      new ClinicalUseDefinitionInteractionInteractant();
    this.addFieldValue('interactant', createdClinicalUseDefinitionInteractionInteractant);
    return createdClinicalUseDefinitionInteractionInteractant;
  }

  /** The first ClinicalUseDefinitionInteractionInteractant of `interactant`. One is added when the list is empty. */
  getInteractantFirstRep(): ClinicalUseDefinitionInteractionInteractant {
    const firstClinicalUseDefinitionInteractionInteractant = this.getInteractant()[0];
    return firstClinicalUseDefinitionInteractionInteractant === undefined
      ? this.addInteractant()
      : firstClinicalUseDefinitionInteractionInteractant;
  }

  /** The type of the interaction e.g. drug-drug interaction, drug-lab test interaction (0..1) Created when absent. */
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

  /** The effect of the interaction, for example "reduced gastric absorption of primary medication" (0..1) Created when absent. */
  getEffect(): CodeableReference {
    if (this.effect === undefined) {
      this.effect = new CodeableReference();
    }
    return this.effect;
  }

  setEffect(effect: CodeableReference | undefined): this {
    return this.setFieldValue('effect', effect);
  }

  hasEffect(): boolean {
    return this.hasFieldValue('effect');
  }

  /** The incidence of the interaction, e.g. theoretical, observed (0..1) Created when absent. */
  getIncidence(): CodeableConcept {
    if (this.incidence === undefined) {
      this.incidence = new CodeableConcept();
    }
    return this.incidence;
  }

  setIncidence(incidence: CodeableConcept | undefined): this {
    return this.setFieldValue('incidence', incidence);
  }

  hasIncidence(): boolean {
    return this.hasFieldValue('incidence');
  }

  /** Actions for managing the interaction (0..*) Never undefined; an empty list is created when absent. */
  getManagement(): CodeableConcept[] {
    if (this.management === undefined) {
      this.management = [];
    }
    return this.management;
  }

  setManagement(management: CodeableConcept[] | undefined): this {
    return this.setFieldValue('management', management);
  }

  hasManagement(): boolean {
    return this.hasFieldValue('management');
  }

  /** Appends a new, empty CodeableConcept to `management` and returns it so it can be filled in. */
  addManagement(): CodeableConcept;
  /** Appends the given CodeableConcept to `management` and returns this object for chaining. */
  addManagement(codeableConcept: CodeableConcept): this;
  addManagement(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('management', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('management', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `management`. One is added when the list is empty. */
  getManagementFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getManagement()[0];
    return firstCodeableConcept === undefined ? this.addManagement() : firstCodeableConcept;
  }
}

modelTypeRegistry.register(
  'ClinicalUseDefinitionInteraction',
  ClinicalUseDefinitionInteraction,
  false
);

/**
 * The specific medication, product, food etc. or laboratory test that interacts
 */
export class ClinicalUseDefinitionInteractionInteractant extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'item',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'itemReference',
          typeCode: 'Reference',
          targetResourceTypes: [
            'BiologicallyDerivedProduct',
            'Medication',
            'MedicinalProductDefinition',
            'NutritionProduct',
            'ObservationDefinition',
            'Substance',
          ],
        },
        { jsonKey: 'itemCodeableConcept', typeCode: 'CodeableConcept' },
      ],
    },
  ];

  /** The specific medication, product, food etc. or laboratory test that interacts (1..1) */
  itemReference?: Reference;
  /** The specific medication, product, food etc. or laboratory test that interacts (1..1) */
  itemCodeableConcept?: CodeableConcept;

  override fhirType(): string {
    return 'ClinicalUseDefinition.interaction.interactant';
  }

  /** FHIR JSON for this ClinicalUseDefinitionInteractionInteractant, typed as the plain `ClinicalUseDefinitionInteractant` data type. */
  override toJSON(): plainTypes.ClinicalUseDefinitionInteractant {
    return this.serialize() as plainTypes.ClinicalUseDefinitionInteractant;
  }

  /** The specific medication, product, food etc. or laboratory test that interacts (1..1) Whichever type of `item[x]` is set. */
  getItem(): Reference | CodeableConcept | undefined {
    return this.getChoiceValue<Reference | CodeableConcept>('item');
  }

  /** True when any type of `item[x]` is set. */
  hasItem(): boolean {
    return this.hasChoiceValue('item');
  }

  getItemReference(): Reference | undefined {
    return this.itemReference;
  }

  /** Sets `item[x]` as Reference and clears every other type of it. */
  setItemReference(itemReference: Reference | undefined): this {
    return this.setFieldValue('itemReference', itemReference);
  }

  hasItemReference(): boolean {
    return this.hasFieldValue('itemReference');
  }

  getItemCodeableConcept(): CodeableConcept | undefined {
    return this.itemCodeableConcept;
  }

  /** Sets `item[x]` as CodeableConcept and clears every other type of it. */
  setItemCodeableConcept(itemCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('itemCodeableConcept', itemCodeableConcept);
  }

  hasItemCodeableConcept(): boolean {
    return this.hasFieldValue('itemCodeableConcept');
  }
}

modelTypeRegistry.register(
  'ClinicalUseDefinitionInteractionInteractant',
  ClinicalUseDefinitionInteractionInteractant,
  false
);

/**
 * A possible negative outcome from the use of this treatment
 */
export class ClinicalUseDefinitionUndesirableEffect extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'symptomConditionEffect',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'symptomConditionEffect', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'classification',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'classification', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'frequencyOfOccurrence',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'frequencyOfOccurrence', typeCode: 'CodeableConcept' }],
    },
  ];

  /** The situation in which the undesirable effect may manifest (0..1) */
  symptomConditionEffect?: CodeableReference;

  /** High level classification of the effect (0..1) */
  classification?: CodeableConcept;

  /** How often the effect is seen (0..1) */
  frequencyOfOccurrence?: CodeableConcept;

  override fhirType(): string {
    return 'ClinicalUseDefinition.undesirableEffect';
  }

  /** FHIR JSON for this ClinicalUseDefinitionUndesirableEffect, typed as the plain `ClinicalUseDefinitionUndesirableEffect` data type. */
  override toJSON(): plainTypes.ClinicalUseDefinitionUndesirableEffect {
    return this.serialize() as plainTypes.ClinicalUseDefinitionUndesirableEffect;
  }

  /** The situation in which the undesirable effect may manifest (0..1) Created when absent. */
  getSymptomConditionEffect(): CodeableReference {
    if (this.symptomConditionEffect === undefined) {
      this.symptomConditionEffect = new CodeableReference();
    }
    return this.symptomConditionEffect;
  }

  setSymptomConditionEffect(symptomConditionEffect: CodeableReference | undefined): this {
    return this.setFieldValue('symptomConditionEffect', symptomConditionEffect);
  }

  hasSymptomConditionEffect(): boolean {
    return this.hasFieldValue('symptomConditionEffect');
  }

  /** High level classification of the effect (0..1) Created when absent. */
  getClassification(): CodeableConcept {
    if (this.classification === undefined) {
      this.classification = new CodeableConcept();
    }
    return this.classification;
  }

  setClassification(classification: CodeableConcept | undefined): this {
    return this.setFieldValue('classification', classification);
  }

  hasClassification(): boolean {
    return this.hasFieldValue('classification');
  }

  /** How often the effect is seen (0..1) Created when absent. */
  getFrequencyOfOccurrence(): CodeableConcept {
    if (this.frequencyOfOccurrence === undefined) {
      this.frequencyOfOccurrence = new CodeableConcept();
    }
    return this.frequencyOfOccurrence;
  }

  setFrequencyOfOccurrence(frequencyOfOccurrence: CodeableConcept | undefined): this {
    return this.setFieldValue('frequencyOfOccurrence', frequencyOfOccurrence);
  }

  hasFrequencyOfOccurrence(): boolean {
    return this.hasFieldValue('frequencyOfOccurrence');
  }
}

modelTypeRegistry.register(
  'ClinicalUseDefinitionUndesirableEffect',
  ClinicalUseDefinitionUndesirableEffect,
  false
);

/**
 * Critical environmental, health or physical risks or hazards. For example 'Do not operate heavy machinery', 'May cause drowsiness'
 */
export class ClinicalUseDefinitionWarning extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
  ];

  /** A textual definition of this warning, with formatting (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** A coded or unformatted textual definition of this warning (0..1) */
  code?: CodeableConcept;

  override fhirType(): string {
    return 'ClinicalUseDefinition.warning';
  }

  /** FHIR JSON for this ClinicalUseDefinitionWarning, typed as the plain `ClinicalUseDefinitionWarning` data type. */
  override toJSON(): plainTypes.ClinicalUseDefinitionWarning {
    return this.serialize() as plainTypes.ClinicalUseDefinitionWarning;
  }

  /** A textual definition of this warning, with formatting (0..1) */
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

  /** A coded or unformatted textual definition of this warning (0..1) Created when absent. */
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
}

modelTypeRegistry.register('ClinicalUseDefinitionWarning', ClinicalUseDefinitionWarning, false);
