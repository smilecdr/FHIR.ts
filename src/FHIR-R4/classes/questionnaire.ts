/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
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
import type { Resource } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.
 */
export class Questionnaire {
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
  contained?: Array<Resource>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Canonical identifier for this questionnaire, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the questionnaire (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the questionnaire (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** Name for this questionnaire (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this questionnaire (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** Instantiates protocol or definition (0..*) */
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
  date?: Date | string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Name of the publisher (organization or individual) (0..1) */
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
  /** When the questionnaire was approved by publisher (0..1) */
  approvalDate?: Date | string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;
  /** When the questionnaire was last reviewed (0..1) */
  lastReviewDate?: Date | string;
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
    | 'AdverseEvent'
    | 'AllergyIntolerance'
    | 'Appointment'
    | 'AppointmentResponse'
    | 'AuditEvent'
    | 'Basic'
    | 'Binary'
    | 'BiologicallyDerivedProduct'
    | 'BodyStructure'
    | 'Bundle'
    | 'CapabilityStatement'
    | 'CarePlan'
    | 'CareTeam'
    | 'CatalogEntry'
    | 'ChargeItem'
    | 'ChargeItemDefinition'
    | 'Claim'
    | 'ClaimResponse'
    | 'ClinicalImpression'
    | 'CodeSystem'
    | 'Communication'
    | 'CommunicationRequest'
    | 'CompartmentDefinition'
    | 'Composition'
    | 'ConceptMap'
    | 'Condition'
    | 'Consent'
    | 'Contract'
    | 'Coverage'
    | 'CoverageEligibilityRequest'
    | 'CoverageEligibilityResponse'
    | 'DetectedIssue'
    | 'Device'
    | 'DeviceDefinition'
    | 'DeviceMetric'
    | 'DeviceRequest'
    | 'DeviceUseStatement'
    | 'DiagnosticReport'
    | 'DocumentManifest'
    | 'DocumentReference'
    | 'DomainResource'
    | 'EffectEvidenceSynthesis'
    | 'Encounter'
    | 'Endpoint'
    | 'EnrollmentRequest'
    | 'EnrollmentResponse'
    | 'EpisodeOfCare'
    | 'EventDefinition'
    | 'Evidence'
    | 'EvidenceVariable'
    | 'ExampleScenario'
    | 'ExplanationOfBenefit'
    | 'FamilyMemberHistory'
    | 'Flag'
    | 'Goal'
    | 'GraphDefinition'
    | 'Group'
    | 'GuidanceResponse'
    | 'HealthcareService'
    | 'ImagingStudy'
    | 'Immunization'
    | 'ImmunizationEvaluation'
    | 'ImmunizationRecommendation'
    | 'ImplementationGuide'
    | 'InsurancePlan'
    | 'Invoice'
    | 'Library'
    | 'Linkage'
    | 'List'
    | 'Location'
    | 'Measure'
    | 'MeasureReport'
    | 'Media'
    | 'Medication'
    | 'MedicationAdministration'
    | 'MedicationDispense'
    | 'MedicationKnowledge'
    | 'MedicationRequest'
    | 'MedicationStatement'
    | 'MedicinalProduct'
    | 'MedicinalProductAuthorization'
    | 'MedicinalProductContraindication'
    | 'MedicinalProductIndication'
    | 'MedicinalProductIngredient'
    | 'MedicinalProductInteraction'
    | 'MedicinalProductManufactured'
    | 'MedicinalProductPackaged'
    | 'MedicinalProductPharmaceutical'
    | 'MedicinalProductUndesirableEffect'
    | 'MessageDefinition'
    | 'MessageHeader'
    | 'MolecularSequence'
    | 'NamingSystem'
    | 'NutritionOrder'
    | 'Observation'
    | 'ObservationDefinition'
    | 'OperationDefinition'
    | 'OperationOutcome'
    | 'Organization'
    | 'OrganizationAffiliation'
    | 'Parameters'
    | 'Patient'
    | 'PaymentNotice'
    | 'PaymentReconciliation'
    | 'Person'
    | 'PlanDefinition'
    | 'Practitioner'
    | 'PractitionerRole'
    | 'Procedure'
    | 'Provenance'
    | 'Questionnaire'
    | 'QuestionnaireResponse'
    | 'RelatedPerson'
    | 'RequestGroup'
    | 'ResearchDefinition'
    | 'ResearchElementDefinition'
    | 'ResearchStudy'
    | 'ResearchSubject'
    | 'Resource'
    | 'RiskAssessment'
    | 'RiskEvidenceSynthesis'
    | 'Schedule'
    | 'SearchParameter'
    | 'ServiceRequest'
    | 'Slot'
    | 'Specimen'
    | 'SpecimenDefinition'
    | 'StructureDefinition'
    | 'StructureMap'
    | 'Subscription'
    | 'Substance'
    | 'SubstanceNucleicAcid'
    | 'SubstancePolymer'
    | 'SubstanceProtein'
    | 'SubstanceReferenceInformation'
    | 'SubstanceSourceMaterial'
    | 'SubstanceSpecification'
    | 'SupplyDelivery'
    | 'SupplyRequest'
    | 'Task'
    | 'TerminologyCapabilities'
    | 'TestReport'
    | 'TestScript'
    | 'ValueSet'
    | 'VerificationResult'
    | 'VisionPrescription';
  export const SubjectTypeEnum = {
    Account: 'Account' as SubjectTypeEnum,
    ActivityDefinition: 'ActivityDefinition' as SubjectTypeEnum,
    AdverseEvent: 'AdverseEvent' as SubjectTypeEnum,
    AllergyIntolerance: 'AllergyIntolerance' as SubjectTypeEnum,
    Appointment: 'Appointment' as SubjectTypeEnum,
    AppointmentResponse: 'AppointmentResponse' as SubjectTypeEnum,
    AuditEvent: 'AuditEvent' as SubjectTypeEnum,
    Basic: 'Basic' as SubjectTypeEnum,
    Binary: 'Binary' as SubjectTypeEnum,
    BiologicallyDerivedProduct: 'BiologicallyDerivedProduct' as SubjectTypeEnum,
    BodyStructure: 'BodyStructure' as SubjectTypeEnum,
    Bundle: 'Bundle' as SubjectTypeEnum,
    CapabilityStatement: 'CapabilityStatement' as SubjectTypeEnum,
    CarePlan: 'CarePlan' as SubjectTypeEnum,
    CareTeam: 'CareTeam' as SubjectTypeEnum,
    CatalogEntry: 'CatalogEntry' as SubjectTypeEnum,
    ChargeItem: 'ChargeItem' as SubjectTypeEnum,
    ChargeItemDefinition: 'ChargeItemDefinition' as SubjectTypeEnum,
    Claim: 'Claim' as SubjectTypeEnum,
    ClaimResponse: 'ClaimResponse' as SubjectTypeEnum,
    ClinicalImpression: 'ClinicalImpression' as SubjectTypeEnum,
    CodeSystem: 'CodeSystem' as SubjectTypeEnum,
    Communication: 'Communication' as SubjectTypeEnum,
    CommunicationRequest: 'CommunicationRequest' as SubjectTypeEnum,
    CompartmentDefinition: 'CompartmentDefinition' as SubjectTypeEnum,
    Composition: 'Composition' as SubjectTypeEnum,
    ConceptMap: 'ConceptMap' as SubjectTypeEnum,
    Condition: 'Condition' as SubjectTypeEnum,
    Consent: 'Consent' as SubjectTypeEnum,
    Contract: 'Contract' as SubjectTypeEnum,
    Coverage: 'Coverage' as SubjectTypeEnum,
    CoverageEligibilityRequest: 'CoverageEligibilityRequest' as SubjectTypeEnum,
    CoverageEligibilityResponse: 'CoverageEligibilityResponse' as SubjectTypeEnum,
    DetectedIssue: 'DetectedIssue' as SubjectTypeEnum,
    Device: 'Device' as SubjectTypeEnum,
    DeviceDefinition: 'DeviceDefinition' as SubjectTypeEnum,
    DeviceMetric: 'DeviceMetric' as SubjectTypeEnum,
    DeviceRequest: 'DeviceRequest' as SubjectTypeEnum,
    DeviceUseStatement: 'DeviceUseStatement' as SubjectTypeEnum,
    DiagnosticReport: 'DiagnosticReport' as SubjectTypeEnum,
    DocumentManifest: 'DocumentManifest' as SubjectTypeEnum,
    DocumentReference: 'DocumentReference' as SubjectTypeEnum,
    DomainResource: 'DomainResource' as SubjectTypeEnum,
    EffectEvidenceSynthesis: 'EffectEvidenceSynthesis' as SubjectTypeEnum,
    Encounter: 'Encounter' as SubjectTypeEnum,
    Endpoint: 'Endpoint' as SubjectTypeEnum,
    EnrollmentRequest: 'EnrollmentRequest' as SubjectTypeEnum,
    EnrollmentResponse: 'EnrollmentResponse' as SubjectTypeEnum,
    EpisodeOfCare: 'EpisodeOfCare' as SubjectTypeEnum,
    EventDefinition: 'EventDefinition' as SubjectTypeEnum,
    Evidence: 'Evidence' as SubjectTypeEnum,
    EvidenceVariable: 'EvidenceVariable' as SubjectTypeEnum,
    ExampleScenario: 'ExampleScenario' as SubjectTypeEnum,
    ExplanationOfBenefit: 'ExplanationOfBenefit' as SubjectTypeEnum,
    FamilyMemberHistory: 'FamilyMemberHistory' as SubjectTypeEnum,
    Flag: 'Flag' as SubjectTypeEnum,
    Goal: 'Goal' as SubjectTypeEnum,
    GraphDefinition: 'GraphDefinition' as SubjectTypeEnum,
    Group: 'Group' as SubjectTypeEnum,
    GuidanceResponse: 'GuidanceResponse' as SubjectTypeEnum,
    HealthcareService: 'HealthcareService' as SubjectTypeEnum,
    ImagingStudy: 'ImagingStudy' as SubjectTypeEnum,
    Immunization: 'Immunization' as SubjectTypeEnum,
    ImmunizationEvaluation: 'ImmunizationEvaluation' as SubjectTypeEnum,
    ImmunizationRecommendation: 'ImmunizationRecommendation' as SubjectTypeEnum,
    ImplementationGuide: 'ImplementationGuide' as SubjectTypeEnum,
    InsurancePlan: 'InsurancePlan' as SubjectTypeEnum,
    Invoice: 'Invoice' as SubjectTypeEnum,
    Library: 'Library' as SubjectTypeEnum,
    Linkage: 'Linkage' as SubjectTypeEnum,
    List: 'List' as SubjectTypeEnum,
    Location: 'Location' as SubjectTypeEnum,
    Measure: 'Measure' as SubjectTypeEnum,
    MeasureReport: 'MeasureReport' as SubjectTypeEnum,
    Media: 'Media' as SubjectTypeEnum,
    Medication: 'Medication' as SubjectTypeEnum,
    MedicationAdministration: 'MedicationAdministration' as SubjectTypeEnum,
    MedicationDispense: 'MedicationDispense' as SubjectTypeEnum,
    MedicationKnowledge: 'MedicationKnowledge' as SubjectTypeEnum,
    MedicationRequest: 'MedicationRequest' as SubjectTypeEnum,
    MedicationStatement: 'MedicationStatement' as SubjectTypeEnum,
    MedicinalProduct: 'MedicinalProduct' as SubjectTypeEnum,
    MedicinalProductAuthorization: 'MedicinalProductAuthorization' as SubjectTypeEnum,
    MedicinalProductContraindication: 'MedicinalProductContraindication' as SubjectTypeEnum,
    MedicinalProductIndication: 'MedicinalProductIndication' as SubjectTypeEnum,
    MedicinalProductIngredient: 'MedicinalProductIngredient' as SubjectTypeEnum,
    MedicinalProductInteraction: 'MedicinalProductInteraction' as SubjectTypeEnum,
    MedicinalProductManufactured: 'MedicinalProductManufactured' as SubjectTypeEnum,
    MedicinalProductPackaged: 'MedicinalProductPackaged' as SubjectTypeEnum,
    MedicinalProductPharmaceutical: 'MedicinalProductPharmaceutical' as SubjectTypeEnum,
    MedicinalProductUndesirableEffect: 'MedicinalProductUndesirableEffect' as SubjectTypeEnum,
    MessageDefinition: 'MessageDefinition' as SubjectTypeEnum,
    MessageHeader: 'MessageHeader' as SubjectTypeEnum,
    MolecularSequence: 'MolecularSequence' as SubjectTypeEnum,
    NamingSystem: 'NamingSystem' as SubjectTypeEnum,
    NutritionOrder: 'NutritionOrder' as SubjectTypeEnum,
    Observation: 'Observation' as SubjectTypeEnum,
    ObservationDefinition: 'ObservationDefinition' as SubjectTypeEnum,
    OperationDefinition: 'OperationDefinition' as SubjectTypeEnum,
    OperationOutcome: 'OperationOutcome' as SubjectTypeEnum,
    Organization: 'Organization' as SubjectTypeEnum,
    OrganizationAffiliation: 'OrganizationAffiliation' as SubjectTypeEnum,
    Parameters: 'Parameters' as SubjectTypeEnum,
    Patient: 'Patient' as SubjectTypeEnum,
    PaymentNotice: 'PaymentNotice' as SubjectTypeEnum,
    PaymentReconciliation: 'PaymentReconciliation' as SubjectTypeEnum,
    Person: 'Person' as SubjectTypeEnum,
    PlanDefinition: 'PlanDefinition' as SubjectTypeEnum,
    Practitioner: 'Practitioner' as SubjectTypeEnum,
    PractitionerRole: 'PractitionerRole' as SubjectTypeEnum,
    Procedure: 'Procedure' as SubjectTypeEnum,
    Provenance: 'Provenance' as SubjectTypeEnum,
    Questionnaire: 'Questionnaire' as SubjectTypeEnum,
    QuestionnaireResponse: 'QuestionnaireResponse' as SubjectTypeEnum,
    RelatedPerson: 'RelatedPerson' as SubjectTypeEnum,
    RequestGroup: 'RequestGroup' as SubjectTypeEnum,
    ResearchDefinition: 'ResearchDefinition' as SubjectTypeEnum,
    ResearchElementDefinition: 'ResearchElementDefinition' as SubjectTypeEnum,
    ResearchStudy: 'ResearchStudy' as SubjectTypeEnum,
    ResearchSubject: 'ResearchSubject' as SubjectTypeEnum,
    Resource: 'Resource' as SubjectTypeEnum,
    RiskAssessment: 'RiskAssessment' as SubjectTypeEnum,
    RiskEvidenceSynthesis: 'RiskEvidenceSynthesis' as SubjectTypeEnum,
    Schedule: 'Schedule' as SubjectTypeEnum,
    SearchParameter: 'SearchParameter' as SubjectTypeEnum,
    ServiceRequest: 'ServiceRequest' as SubjectTypeEnum,
    Slot: 'Slot' as SubjectTypeEnum,
    Specimen: 'Specimen' as SubjectTypeEnum,
    SpecimenDefinition: 'SpecimenDefinition' as SubjectTypeEnum,
    StructureDefinition: 'StructureDefinition' as SubjectTypeEnum,
    StructureMap: 'StructureMap' as SubjectTypeEnum,
    Subscription: 'Subscription' as SubjectTypeEnum,
    Substance: 'Substance' as SubjectTypeEnum,
    SubstanceNucleicAcid: 'SubstanceNucleicAcid' as SubjectTypeEnum,
    SubstancePolymer: 'SubstancePolymer' as SubjectTypeEnum,
    SubstanceProtein: 'SubstanceProtein' as SubjectTypeEnum,
    SubstanceReferenceInformation: 'SubstanceReferenceInformation' as SubjectTypeEnum,
    SubstanceSourceMaterial: 'SubstanceSourceMaterial' as SubjectTypeEnum,
    SubstanceSpecification: 'SubstanceSpecification' as SubjectTypeEnum,
    SupplyDelivery: 'SupplyDelivery' as SubjectTypeEnum,
    SupplyRequest: 'SupplyRequest' as SubjectTypeEnum,
    Task: 'Task' as SubjectTypeEnum,
    TerminologyCapabilities: 'TerminologyCapabilities' as SubjectTypeEnum,
    TestReport: 'TestReport' as SubjectTypeEnum,
    TestScript: 'TestScript' as SubjectTypeEnum,
    ValueSet: 'ValueSet' as SubjectTypeEnum,
    VerificationResult: 'VerificationResult' as SubjectTypeEnum,
    VisionPrescription: 'VisionPrescription' as SubjectTypeEnum,
  };
}

/**
 * Questions and sections within the Questionnaire
 */
export class QuestionnaireItem {
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
  /** No more than this many characters (0..1) */
  maxLength?: number;
  /** Id and extensions of the primitive `maxLength`. */
  _maxLength?: Element;
  /** Valueset containing permitted answers (0..1) */
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
    | 'choice'
    | 'open-choice'
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
    Choice: 'choice' as TypeEnum,
    OpenChoice: 'open-choice' as TypeEnum,
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
}

/**
 * Only allow data when
 */
export class QuestionnaireEnableWhen {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Question that determines whether item is enabled (1..1) */
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
  answerDate?: Date | string;
  /** Id and extensions of the primitive `answerDate`. */
  _answerDate?: Element;
  /** Value for question comparison based on operator (1..1) */
  answerDateTime?: Date | string;
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
export class QuestionnaireAnswerOption {
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
  valueDate?: Date | string;
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
export class QuestionnaireInitial {
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
  valueDate?: Date | string;
  /** Id and extensions of the primitive `valueDate`. */
  _valueDate?: Element;
  /** Actual value for initializing the question (1..1) */
  valueDateTime?: Date | string;
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
