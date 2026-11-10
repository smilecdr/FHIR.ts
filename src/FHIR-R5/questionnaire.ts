/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Attachment } from './attachment';
import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { ContactDetail } from './contactDetail';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Quantity } from './quantity';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.
 */
export interface Questionnaire {
  resourceType: 'Questionnaire';
  /** Logical id of this artifact (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Metadata about the resource (0..1) */
  meta?: Meta;
  /** A set of rules under which this content was created (0..1) */
  implicitRules?: string;
  /** Id and extensions of the primitive `implicitRules`. */
  _implicitRules?: Element;
  /** Language of the resource content (0..1) */
  language?: string;
  /** Id and extensions of the primitive `language`. */
  _language?: Element;
  /** Text summary of the resource, for human interpretation (0..1) */
  text?: Narrative;
  /** Contained, inline Resources (0..*) */
  contained?: Array<ResourceList>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Canonical identifier for this questionnaire, represented as an absolute URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Business identifier for questionnaire (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the questionnaire (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;
  /** Name for this questionnaire (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this questionnaire (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** Based on Questionnaire (0..*) */
  derivedFrom?: Array<string>;
  /** Id and extensions of the primitive `derivedFrom`. */
  _derivedFrom?: Array<Element | null>;
  /** draft | active | retired | unknown (1..1) */
  status?: Questionnaire.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** For testing purposes, not real usage (0..1) */
  experimental?: boolean;
  /** Id and extensions of the primitive `experimental`. */
  _experimental?: Element;
  /** Resource that can be subject of QuestionnaireResponse (0..*) */
  subjectType?: Array<Questionnaire.SubjectTypeEnum>;
  /** Id and extensions of the primitive `subjectType`. */
  _subjectType?: Array<Element | null>;
  /** Date last changed (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Name of the publisher/steward (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;
  /** Contact details for the publisher (0..*) */
  contact?: Array<ContactDetail>;
  /** Natural language description of the questionnaire (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The context that the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for questionnaire (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Why this questionnaire is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;
  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;
  /** Copyright holder and year(s) (0..1) */
  copyrightLabel?: string;
  /** Id and extensions of the primitive `copyrightLabel`. */
  _copyrightLabel?: Element;
  /** When the questionnaire was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;
  /** When the questionnaire was last reviewed by the publisher (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;
  /** When the questionnaire is expected to be used (0..1) */
  effectivePeriod?: Period;
  /** Concept that represents the overall questionnaire (0..*) */
  code?: Array<Coding>;
  /** Questions and sections within the Questionnaire (0..*) */
  item?: Array<QuestionnaireItem>;
}

export namespace Questionnaire {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/publication-status */
  export type StatusEnum = 'draft' | 'active' | 'retired' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    Retired: 'retired' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/resource-types */
  export type SubjectTypeEnum =
    | 'Account'
    | 'ActivityDefinition'
    | 'ActorDefinition'
    | 'AdministrableProductDefinition'
    | 'AdverseEvent'
    | 'AllergyIntolerance'
    | 'Appointment'
    | 'AppointmentResponse'
    | 'ArtifactAssessment'
    | 'AuditEvent'
    | 'Basic'
    | 'Binary'
    | 'BiologicallyDerivedProduct'
    | 'BiologicallyDerivedProductDispense'
    | 'BodyStructure'
    | 'Bundle'
    | 'CapabilityStatement'
    | 'CarePlan'
    | 'CareTeam'
    | 'ChargeItem'
    | 'ChargeItemDefinition'
    | 'Citation'
    | 'Claim'
    | 'ClaimResponse'
    | 'ClinicalImpression'
    | 'ClinicalUseDefinition'
    | 'CodeSystem'
    | 'Communication'
    | 'CommunicationRequest'
    | 'CompartmentDefinition'
    | 'Composition'
    | 'ConceptMap'
    | 'Condition'
    | 'ConditionDefinition'
    | 'Consent'
    | 'Contract'
    | 'Coverage'
    | 'CoverageEligibilityRequest'
    | 'CoverageEligibilityResponse'
    | 'DetectedIssue'
    | 'Device'
    | 'DeviceAssociation'
    | 'DeviceDefinition'
    | 'DeviceDispense'
    | 'DeviceMetric'
    | 'DeviceRequest'
    | 'DeviceUsage'
    | 'DiagnosticReport'
    | 'DocumentReference'
    | 'Encounter'
    | 'EncounterHistory'
    | 'Endpoint'
    | 'EnrollmentRequest'
    | 'EnrollmentResponse'
    | 'EpisodeOfCare'
    | 'EventDefinition'
    | 'Evidence'
    | 'EvidenceReport'
    | 'EvidenceVariable'
    | 'ExampleScenario'
    | 'ExplanationOfBenefit'
    | 'FamilyMemberHistory'
    | 'Flag'
    | 'FormularyItem'
    | 'GenomicStudy'
    | 'Goal'
    | 'GraphDefinition'
    | 'Group'
    | 'GuidanceResponse'
    | 'HealthcareService'
    | 'ImagingSelection'
    | 'ImagingStudy'
    | 'Immunization'
    | 'ImmunizationEvaluation'
    | 'ImmunizationRecommendation'
    | 'ImplementationGuide'
    | 'Ingredient'
    | 'InsurancePlan'
    | 'InventoryItem'
    | 'InventoryReport'
    | 'Invoice'
    | 'Library'
    | 'Linkage'
    | 'List'
    | 'Location'
    | 'ManufacturedItemDefinition'
    | 'Measure'
    | 'MeasureReport'
    | 'Medication'
    | 'MedicationAdministration'
    | 'MedicationDispense'
    | 'MedicationKnowledge'
    | 'MedicationRequest'
    | 'MedicationStatement'
    | 'MedicinalProductDefinition'
    | 'MessageDefinition'
    | 'MessageHeader'
    | 'MolecularSequence'
    | 'NamingSystem'
    | 'NutritionIntake'
    | 'NutritionOrder'
    | 'NutritionProduct'
    | 'Observation'
    | 'ObservationDefinition'
    | 'OperationDefinition'
    | 'OperationOutcome'
    | 'Organization'
    | 'OrganizationAffiliation'
    | 'PackagedProductDefinition'
    | 'Parameters'
    | 'Patient'
    | 'PaymentNotice'
    | 'PaymentReconciliation'
    | 'Permission'
    | 'Person'
    | 'PlanDefinition'
    | 'Practitioner'
    | 'PractitionerRole'
    | 'Procedure'
    | 'Provenance'
    | 'Questionnaire'
    | 'QuestionnaireResponse'
    | 'RegulatedAuthorization'
    | 'RelatedPerson'
    | 'RequestOrchestration'
    | 'Requirements'
    | 'ResearchStudy'
    | 'ResearchSubject'
    | 'RiskAssessment'
    | 'Schedule'
    | 'SearchParameter'
    | 'ServiceRequest'
    | 'Slot'
    | 'Specimen'
    | 'SpecimenDefinition'
    | 'StructureDefinition'
    | 'StructureMap'
    | 'Subscription'
    | 'SubscriptionStatus'
    | 'SubscriptionTopic'
    | 'Substance'
    | 'SubstanceDefinition'
    | 'SubstanceNucleicAcid'
    | 'SubstancePolymer'
    | 'SubstanceProtein'
    | 'SubstanceReferenceInformation'
    | 'SubstanceSourceMaterial'
    | 'SupplyDelivery'
    | 'SupplyRequest'
    | 'Task'
    | 'TerminologyCapabilities'
    | 'TestPlan'
    | 'TestReport'
    | 'TestScript'
    | 'Transport'
    | 'ValueSet'
    | 'VerificationResult'
    | 'VisionPrescription';
  export const SubjectTypeEnum = {
    Account: 'Account' as SubjectTypeEnum,
    ActivityDefinition: 'ActivityDefinition' as SubjectTypeEnum,
    ActorDefinition: 'ActorDefinition' as SubjectTypeEnum,
    AdministrableProductDefinition: 'AdministrableProductDefinition' as SubjectTypeEnum,
    AdverseEvent: 'AdverseEvent' as SubjectTypeEnum,
    AllergyIntolerance: 'AllergyIntolerance' as SubjectTypeEnum,
    Appointment: 'Appointment' as SubjectTypeEnum,
    AppointmentResponse: 'AppointmentResponse' as SubjectTypeEnum,
    ArtifactAssessment: 'ArtifactAssessment' as SubjectTypeEnum,
    AuditEvent: 'AuditEvent' as SubjectTypeEnum,
    Basic: 'Basic' as SubjectTypeEnum,
    Binary: 'Binary' as SubjectTypeEnum,
    BiologicallyDerivedProduct: 'BiologicallyDerivedProduct' as SubjectTypeEnum,
    BiologicallyDerivedProductDispense: 'BiologicallyDerivedProductDispense' as SubjectTypeEnum,
    BodyStructure: 'BodyStructure' as SubjectTypeEnum,
    Bundle: 'Bundle' as SubjectTypeEnum,
    CapabilityStatement: 'CapabilityStatement' as SubjectTypeEnum,
    CarePlan: 'CarePlan' as SubjectTypeEnum,
    CareTeam: 'CareTeam' as SubjectTypeEnum,
    ChargeItem: 'ChargeItem' as SubjectTypeEnum,
    ChargeItemDefinition: 'ChargeItemDefinition' as SubjectTypeEnum,
    Citation: 'Citation' as SubjectTypeEnum,
    Claim: 'Claim' as SubjectTypeEnum,
    ClaimResponse: 'ClaimResponse' as SubjectTypeEnum,
    ClinicalImpression: 'ClinicalImpression' as SubjectTypeEnum,
    ClinicalUseDefinition: 'ClinicalUseDefinition' as SubjectTypeEnum,
    CodeSystem: 'CodeSystem' as SubjectTypeEnum,
    Communication: 'Communication' as SubjectTypeEnum,
    CommunicationRequest: 'CommunicationRequest' as SubjectTypeEnum,
    CompartmentDefinition: 'CompartmentDefinition' as SubjectTypeEnum,
    Composition: 'Composition' as SubjectTypeEnum,
    ConceptMap: 'ConceptMap' as SubjectTypeEnum,
    Condition: 'Condition' as SubjectTypeEnum,
    ConditionDefinition: 'ConditionDefinition' as SubjectTypeEnum,
    Consent: 'Consent' as SubjectTypeEnum,
    Contract: 'Contract' as SubjectTypeEnum,
    Coverage: 'Coverage' as SubjectTypeEnum,
    CoverageEligibilityRequest: 'CoverageEligibilityRequest' as SubjectTypeEnum,
    CoverageEligibilityResponse: 'CoverageEligibilityResponse' as SubjectTypeEnum,
    DetectedIssue: 'DetectedIssue' as SubjectTypeEnum,
    Device: 'Device' as SubjectTypeEnum,
    DeviceAssociation: 'DeviceAssociation' as SubjectTypeEnum,
    DeviceDefinition: 'DeviceDefinition' as SubjectTypeEnum,
    DeviceDispense: 'DeviceDispense' as SubjectTypeEnum,
    DeviceMetric: 'DeviceMetric' as SubjectTypeEnum,
    DeviceRequest: 'DeviceRequest' as SubjectTypeEnum,
    DeviceUsage: 'DeviceUsage' as SubjectTypeEnum,
    DiagnosticReport: 'DiagnosticReport' as SubjectTypeEnum,
    DocumentReference: 'DocumentReference' as SubjectTypeEnum,
    Encounter: 'Encounter' as SubjectTypeEnum,
    EncounterHistory: 'EncounterHistory' as SubjectTypeEnum,
    Endpoint: 'Endpoint' as SubjectTypeEnum,
    EnrollmentRequest: 'EnrollmentRequest' as SubjectTypeEnum,
    EnrollmentResponse: 'EnrollmentResponse' as SubjectTypeEnum,
    EpisodeOfCare: 'EpisodeOfCare' as SubjectTypeEnum,
    EventDefinition: 'EventDefinition' as SubjectTypeEnum,
    Evidence: 'Evidence' as SubjectTypeEnum,
    EvidenceReport: 'EvidenceReport' as SubjectTypeEnum,
    EvidenceVariable: 'EvidenceVariable' as SubjectTypeEnum,
    ExampleScenario: 'ExampleScenario' as SubjectTypeEnum,
    ExplanationOfBenefit: 'ExplanationOfBenefit' as SubjectTypeEnum,
    FamilyMemberHistory: 'FamilyMemberHistory' as SubjectTypeEnum,
    Flag: 'Flag' as SubjectTypeEnum,
    FormularyItem: 'FormularyItem' as SubjectTypeEnum,
    GenomicStudy: 'GenomicStudy' as SubjectTypeEnum,
    Goal: 'Goal' as SubjectTypeEnum,
    GraphDefinition: 'GraphDefinition' as SubjectTypeEnum,
    Group: 'Group' as SubjectTypeEnum,
    GuidanceResponse: 'GuidanceResponse' as SubjectTypeEnum,
    HealthcareService: 'HealthcareService' as SubjectTypeEnum,
    ImagingSelection: 'ImagingSelection' as SubjectTypeEnum,
    ImagingStudy: 'ImagingStudy' as SubjectTypeEnum,
    Immunization: 'Immunization' as SubjectTypeEnum,
    ImmunizationEvaluation: 'ImmunizationEvaluation' as SubjectTypeEnum,
    ImmunizationRecommendation: 'ImmunizationRecommendation' as SubjectTypeEnum,
    ImplementationGuide: 'ImplementationGuide' as SubjectTypeEnum,
    Ingredient: 'Ingredient' as SubjectTypeEnum,
    InsurancePlan: 'InsurancePlan' as SubjectTypeEnum,
    InventoryItem: 'InventoryItem' as SubjectTypeEnum,
    InventoryReport: 'InventoryReport' as SubjectTypeEnum,
    Invoice: 'Invoice' as SubjectTypeEnum,
    Library: 'Library' as SubjectTypeEnum,
    Linkage: 'Linkage' as SubjectTypeEnum,
    List: 'List' as SubjectTypeEnum,
    Location: 'Location' as SubjectTypeEnum,
    ManufacturedItemDefinition: 'ManufacturedItemDefinition' as SubjectTypeEnum,
    Measure: 'Measure' as SubjectTypeEnum,
    MeasureReport: 'MeasureReport' as SubjectTypeEnum,
    Medication: 'Medication' as SubjectTypeEnum,
    MedicationAdministration: 'MedicationAdministration' as SubjectTypeEnum,
    MedicationDispense: 'MedicationDispense' as SubjectTypeEnum,
    MedicationKnowledge: 'MedicationKnowledge' as SubjectTypeEnum,
    MedicationRequest: 'MedicationRequest' as SubjectTypeEnum,
    MedicationStatement: 'MedicationStatement' as SubjectTypeEnum,
    MedicinalProductDefinition: 'MedicinalProductDefinition' as SubjectTypeEnum,
    MessageDefinition: 'MessageDefinition' as SubjectTypeEnum,
    MessageHeader: 'MessageHeader' as SubjectTypeEnum,
    MolecularSequence: 'MolecularSequence' as SubjectTypeEnum,
    NamingSystem: 'NamingSystem' as SubjectTypeEnum,
    NutritionIntake: 'NutritionIntake' as SubjectTypeEnum,
    NutritionOrder: 'NutritionOrder' as SubjectTypeEnum,
    NutritionProduct: 'NutritionProduct' as SubjectTypeEnum,
    Observation: 'Observation' as SubjectTypeEnum,
    ObservationDefinition: 'ObservationDefinition' as SubjectTypeEnum,
    OperationDefinition: 'OperationDefinition' as SubjectTypeEnum,
    OperationOutcome: 'OperationOutcome' as SubjectTypeEnum,
    Organization: 'Organization' as SubjectTypeEnum,
    OrganizationAffiliation: 'OrganizationAffiliation' as SubjectTypeEnum,
    PackagedProductDefinition: 'PackagedProductDefinition' as SubjectTypeEnum,
    Parameters: 'Parameters' as SubjectTypeEnum,
    Patient: 'Patient' as SubjectTypeEnum,
    PaymentNotice: 'PaymentNotice' as SubjectTypeEnum,
    PaymentReconciliation: 'PaymentReconciliation' as SubjectTypeEnum,
    Permission: 'Permission' as SubjectTypeEnum,
    Person: 'Person' as SubjectTypeEnum,
    PlanDefinition: 'PlanDefinition' as SubjectTypeEnum,
    Practitioner: 'Practitioner' as SubjectTypeEnum,
    PractitionerRole: 'PractitionerRole' as SubjectTypeEnum,
    Procedure: 'Procedure' as SubjectTypeEnum,
    Provenance: 'Provenance' as SubjectTypeEnum,
    Questionnaire: 'Questionnaire' as SubjectTypeEnum,
    QuestionnaireResponse: 'QuestionnaireResponse' as SubjectTypeEnum,
    RegulatedAuthorization: 'RegulatedAuthorization' as SubjectTypeEnum,
    RelatedPerson: 'RelatedPerson' as SubjectTypeEnum,
    RequestOrchestration: 'RequestOrchestration' as SubjectTypeEnum,
    Requirements: 'Requirements' as SubjectTypeEnum,
    ResearchStudy: 'ResearchStudy' as SubjectTypeEnum,
    ResearchSubject: 'ResearchSubject' as SubjectTypeEnum,
    RiskAssessment: 'RiskAssessment' as SubjectTypeEnum,
    Schedule: 'Schedule' as SubjectTypeEnum,
    SearchParameter: 'SearchParameter' as SubjectTypeEnum,
    ServiceRequest: 'ServiceRequest' as SubjectTypeEnum,
    Slot: 'Slot' as SubjectTypeEnum,
    Specimen: 'Specimen' as SubjectTypeEnum,
    SpecimenDefinition: 'SpecimenDefinition' as SubjectTypeEnum,
    StructureDefinition: 'StructureDefinition' as SubjectTypeEnum,
    StructureMap: 'StructureMap' as SubjectTypeEnum,
    Subscription: 'Subscription' as SubjectTypeEnum,
    SubscriptionStatus: 'SubscriptionStatus' as SubjectTypeEnum,
    SubscriptionTopic: 'SubscriptionTopic' as SubjectTypeEnum,
    Substance: 'Substance' as SubjectTypeEnum,
    SubstanceDefinition: 'SubstanceDefinition' as SubjectTypeEnum,
    SubstanceNucleicAcid: 'SubstanceNucleicAcid' as SubjectTypeEnum,
    SubstancePolymer: 'SubstancePolymer' as SubjectTypeEnum,
    SubstanceProtein: 'SubstanceProtein' as SubjectTypeEnum,
    SubstanceReferenceInformation: 'SubstanceReferenceInformation' as SubjectTypeEnum,
    SubstanceSourceMaterial: 'SubstanceSourceMaterial' as SubjectTypeEnum,
    SupplyDelivery: 'SupplyDelivery' as SubjectTypeEnum,
    SupplyRequest: 'SupplyRequest' as SubjectTypeEnum,
    Task: 'Task' as SubjectTypeEnum,
    TerminologyCapabilities: 'TerminologyCapabilities' as SubjectTypeEnum,
    TestPlan: 'TestPlan' as SubjectTypeEnum,
    TestReport: 'TestReport' as SubjectTypeEnum,
    TestScript: 'TestScript' as SubjectTypeEnum,
    Transport: 'Transport' as SubjectTypeEnum,
    ValueSet: 'ValueSet' as SubjectTypeEnum,
    VerificationResult: 'VerificationResult' as SubjectTypeEnum,
    VisionPrescription: 'VisionPrescription' as SubjectTypeEnum,
  };
}

/**
 * Questions and sections within the Questionnaire
 */
export interface QuestionnaireItem {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Unique id for item in questionnaire (1..1) */
  linkId?: string;
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: Element;
  /** ElementDefinition - details for the item (0..1) */
  definition?: string;
  /** Id and extensions of the primitive `definition`. */
  _definition?: Element;
  /** Corresponding concept for this item in a terminology (0..*) */
  code?: Array<Coding>;
  /** E.g. "1(a)", "2.5.3" (0..1) */
  prefix?: string;
  /** Id and extensions of the primitive `prefix`. */
  _prefix?: Element;
  /** Primary text for the item (0..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;
  /** group | display | boolean | decimal | integer | date | dateTime + (1..1) */
  type?: QuestionnaireItem.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Only allow data when (0..*) */
  enableWhen?: Array<QuestionnaireEnableWhen>;
  /** all | any (0..1) */
  enableBehavior?: QuestionnaireItem.EnableBehaviorEnum;
  /** Id and extensions of the primitive `enableBehavior`. */
  _enableBehavior?: Element;
  /** hidden | protected (0..1) */
  disabledDisplay?: QuestionnaireItem.DisabledDisplayEnum;
  /** Id and extensions of the primitive `disabledDisplay`. */
  _disabledDisplay?: Element;
  /** Whether the item must be included in data results (0..1) */
  required?: boolean;
  /** Id and extensions of the primitive `required`. */
  _required?: Element;
  /** Whether the item may repeat (0..1) */
  repeats?: boolean;
  /** Id and extensions of the primitive `repeats`. */
  _repeats?: Element;
  /** Don't allow human editing (0..1) */
  readOnly?: boolean;
  /** Id and extensions of the primitive `readOnly`. */
  _readOnly?: Element;
  /** No more than these many characters (0..1) */
  maxLength?: number;
  /** Id and extensions of the primitive `maxLength`. */
  _maxLength?: Element;
  /** optionsOnly | optionsOrType | optionsOrString (0..1) */
  answerConstraint?: QuestionnaireItem.AnswerConstraintEnum;
  /** Id and extensions of the primitive `answerConstraint`. */
  _answerConstraint?: Element;
  /** ValueSet containing permitted answers (0..1) */
  answerValueSet?: string;
  /** Id and extensions of the primitive `answerValueSet`. */
  _answerValueSet?: Element;
  /** Permitted answer (0..*) */
  answerOption?: Array<QuestionnaireAnswerOption>;
  /** Initial value(s) when item is first rendered (0..*) */
  initial?: Array<QuestionnaireInitial>;
  /** Nested questionnaire items (0..*) */
  item?: Array<QuestionnaireItem>;
}

export namespace QuestionnaireItem {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/item-type */
  export type TypeEnum =
    | 'group'
    | 'display'
    | 'question'
    | 'boolean'
    | 'decimal'
    | 'integer'
    | 'date'
    | 'dateTime'
    | 'time'
    | 'string'
    | 'text'
    | 'url'
    | 'coding'
    | 'attachment'
    | 'reference'
    | 'quantity';
  export const TypeEnum = {
    Group: 'group' as TypeEnum,
    Display: 'display' as TypeEnum,
    Question: 'question' as TypeEnum,
    Boolean: 'boolean' as TypeEnum,
    Decimal: 'decimal' as TypeEnum,
    Integer: 'integer' as TypeEnum,
    Date: 'date' as TypeEnum,
    DateTime: 'dateTime' as TypeEnum,
    Time: 'time' as TypeEnum,
    String: 'string' as TypeEnum,
    Text: 'text' as TypeEnum,
    Url: 'url' as TypeEnum,
    Coding: 'coding' as TypeEnum,
    Attachment: 'attachment' as TypeEnum,
    Reference: 'reference' as TypeEnum,
    Quantity: 'quantity' as TypeEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/questionnaire-enable-behavior */
  export type EnableBehaviorEnum = 'all' | 'any';
  export const EnableBehaviorEnum = {
    All: 'all' as EnableBehaviorEnum,
    Any: 'any' as EnableBehaviorEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/questionnaire-disabled-display */
  export type DisabledDisplayEnum = 'hidden' | 'protected';
  export const DisabledDisplayEnum = {
    Hidden: 'hidden' as DisabledDisplayEnum,
    Protected: 'protected' as DisabledDisplayEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/questionnaire-answer-constraint */
  export type AnswerConstraintEnum = 'optionsOnly' | 'optionsOrType' | 'optionsOrString';
  export const AnswerConstraintEnum = {
    OptionsOnly: 'optionsOnly' as AnswerConstraintEnum,
    OptionsOrType: 'optionsOrType' as AnswerConstraintEnum,
    OptionsOrString: 'optionsOrString' as AnswerConstraintEnum,
  };
}

/**
 * Only allow data when
 */
export interface QuestionnaireEnableWhen {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The linkId of question that determines whether item is enabled/disabled (1..1) */
  question?: string;
  /** Id and extensions of the primitive `question`. */
  _question?: Element;
  /** exists | = | != | > | < | >= | <= (1..1) */
  operator?: QuestionnaireEnableWhen.OperatorEnum;
  /** Id and extensions of the primitive `operator`. */
  _operator?: Element;
  /** Value for question comparison based on operator (1..1) */
  answerBoolean?: boolean;
  /** Id and extensions of the primitive `answerBoolean`. */
  _answerBoolean?: Element;
  /** Value for question comparison based on operator (1..1) */
  answerDecimal?: number;
  /** Id and extensions of the primitive `answerDecimal`. */
  _answerDecimal?: Element;
  /** Value for question comparison based on operator (1..1) */
  answerInteger?: number;
  /** Id and extensions of the primitive `answerInteger`. */
  _answerInteger?: Element;
  /** Value for question comparison based on operator (1..1) */
  answerDate?: string;
  /** Id and extensions of the primitive `answerDate`. */
  _answerDate?: Element;
  /** Value for question comparison based on operator (1..1) */
  answerDateTime?: string;
  /** Id and extensions of the primitive `answerDateTime`. */
  _answerDateTime?: Element;
  /** Value for question comparison based on operator (1..1) */
  answerTime?: string;
  /** Id and extensions of the primitive `answerTime`. */
  _answerTime?: Element;
  /** Value for question comparison based on operator (1..1) */
  answerString?: string;
  /** Id and extensions of the primitive `answerString`. */
  _answerString?: Element;
  /** Value for question comparison based on operator (1..1) */
  answerCoding?: Coding;
  /** Value for question comparison based on operator (1..1) */
  answerQuantity?: Quantity;
  /** Value for question comparison based on operator (1..1) */
  answerReference?: Reference;
}

export namespace QuestionnaireEnableWhen {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/questionnaire-enable-operator */
  export type OperatorEnum = 'exists' | '=' | '!=' | '>' | '<' | '>=' | '<=';
  export const OperatorEnum = {
    Exists: 'exists' as OperatorEnum,
    Equal: '=' as OperatorEnum,
    NotEqual: '!=' as OperatorEnum,
    GreaterThan: '>' as OperatorEnum,
    LessThan: '<' as OperatorEnum,
    GreaterThanOrEqualTo: '>=' as OperatorEnum,
    LessThanOrEqualTo: '<=' as OperatorEnum,
  };
}

/**
 * Permitted answer
 */
export interface QuestionnaireAnswerOption {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Answer value (1..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** Answer value (1..1) */
  valueDate?: string;
  /** Id and extensions of the primitive `valueDate`. */
  _valueDate?: Element;
  /** Answer value (1..1) */
  valueTime?: string;
  /** Id and extensions of the primitive `valueTime`. */
  _valueTime?: Element;
  /** Answer value (1..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Answer value (1..1) */
  valueCoding?: Coding;
  /** Answer value (1..1) */
  valueReference?: Reference;
  /** Whether option is selected by default (0..1) */
  initialSelected?: boolean;
  /** Id and extensions of the primitive `initialSelected`. */
  _initialSelected?: Element;
}

/**
 * Initial value(s) when item is first rendered
 */
export interface QuestionnaireInitial {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Actual value for initializing the question (1..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Actual value for initializing the question (1..1) */
  valueDecimal?: number;
  /** Id and extensions of the primitive `valueDecimal`. */
  _valueDecimal?: Element;
  /** Actual value for initializing the question (1..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** Actual value for initializing the question (1..1) */
  valueDate?: string;
  /** Id and extensions of the primitive `valueDate`. */
  _valueDate?: Element;
  /** Actual value for initializing the question (1..1) */
  valueDateTime?: string;
  /** Id and extensions of the primitive `valueDateTime`. */
  _valueDateTime?: Element;
  /** Actual value for initializing the question (1..1) */
  valueTime?: string;
  /** Id and extensions of the primitive `valueTime`. */
  _valueTime?: Element;
  /** Actual value for initializing the question (1..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Actual value for initializing the question (1..1) */
  valueUri?: string;
  /** Id and extensions of the primitive `valueUri`. */
  _valueUri?: Element;
  /** Actual value for initializing the question (1..1) */
  valueAttachment?: Attachment;
  /** Actual value for initializing the question (1..1) */
  valueCoding?: Coding;
  /** Actual value for initializing the question (1..1) */
  valueQuantity?: Quantity;
  /** Actual value for initializing the question (1..1) */
  valueReference?: Reference;
}
