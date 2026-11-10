/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
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
 * Base StructureDefinition for Questionnaire Resource
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
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Logical URI to reference this questionnaire (globally unique) (0..1) */
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
  /** draft | active | retired | unknown (1..1) */
  status?: Questionnaire.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** For testing purposes, not real usage (0..1) */
  experimental?: boolean;
  /** Id and extensions of the primitive `experimental`. */
  _experimental?: Element;
  /** Date this was last changed (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Name of the publisher (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;
  /** Natural language description of the questionnaire (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Why this questionnaire is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;
  /** When the questionnaire was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;
  /** When the questionnaire was last reviewed (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;
  /** When the questionnaire is expected to be used (0..1) */
  effectivePeriod?: Period;
  /** Context the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for questionnaire (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Contact details for the publisher (0..*) */
  contact?: Array<ContactDetail>;
  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;
  /** Concept that represents the overall questionnaire (0..*) */
  code?: Array<Coding>;
  /** Resource that can be subject of QuestionnaireResponse (0..*) */
  subjectType?: Array<Questionnaire.SubjectTypeEnum>;
  /** Id and extensions of the primitive `subjectType`. */
  _subjectType?: Array<Element | null>;
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
    | 'BodySite'
    | 'Bundle'
    | 'CapabilityStatement'
    | 'CarePlan'
    | 'CareTeam'
    | 'ChargeItem'
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
    | 'DataElement'
    | 'DetectedIssue'
    | 'Device'
    | 'DeviceComponent'
    | 'DeviceMetric'
    | 'DeviceRequest'
    | 'DeviceUseStatement'
    | 'DiagnosticReport'
    | 'DocumentManifest'
    | 'DocumentReference'
    | 'DomainResource'
    | 'EligibilityRequest'
    | 'EligibilityResponse'
    | 'Encounter'
    | 'Endpoint'
    | 'EnrollmentRequest'
    | 'EnrollmentResponse'
    | 'EpisodeOfCare'
    | 'ExpansionProfile'
    | 'ExplanationOfBenefit'
    | 'FamilyMemberHistory'
    | 'Flag'
    | 'Goal'
    | 'GraphDefinition'
    | 'Group'
    | 'GuidanceResponse'
    | 'HealthcareService'
    | 'ImagingManifest'
    | 'ImagingStudy'
    | 'Immunization'
    | 'ImmunizationRecommendation'
    | 'ImplementationGuide'
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
    | 'MedicationRequest'
    | 'MedicationStatement'
    | 'MessageDefinition'
    | 'MessageHeader'
    | 'NamingSystem'
    | 'NutritionOrder'
    | 'Observation'
    | 'OperationDefinition'
    | 'OperationOutcome'
    | 'Organization'
    | 'Parameters'
    | 'Patient'
    | 'PaymentNotice'
    | 'PaymentReconciliation'
    | 'Person'
    | 'PlanDefinition'
    | 'Practitioner'
    | 'PractitionerRole'
    | 'Procedure'
    | 'ProcedureRequest'
    | 'ProcessRequest'
    | 'ProcessResponse'
    | 'Provenance'
    | 'Questionnaire'
    | 'QuestionnaireResponse'
    | 'ReferralRequest'
    | 'RelatedPerson'
    | 'RequestGroup'
    | 'ResearchStudy'
    | 'ResearchSubject'
    | 'Resource'
    | 'RiskAssessment'
    | 'Schedule'
    | 'SearchParameter'
    | 'Sequence'
    | 'ServiceDefinition'
    | 'Slot'
    | 'Specimen'
    | 'StructureDefinition'
    | 'StructureMap'
    | 'Subscription'
    | 'Substance'
    | 'SupplyDelivery'
    | 'SupplyRequest'
    | 'Task'
    | 'TestReport'
    | 'TestScript'
    | 'ValueSet'
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
    BodySite: 'BodySite' as SubjectTypeEnum,
    Bundle: 'Bundle' as SubjectTypeEnum,
    CapabilityStatement: 'CapabilityStatement' as SubjectTypeEnum,
    CarePlan: 'CarePlan' as SubjectTypeEnum,
    CareTeam: 'CareTeam' as SubjectTypeEnum,
    ChargeItem: 'ChargeItem' as SubjectTypeEnum,
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
    DataElement: 'DataElement' as SubjectTypeEnum,
    DetectedIssue: 'DetectedIssue' as SubjectTypeEnum,
    Device: 'Device' as SubjectTypeEnum,
    DeviceComponent: 'DeviceComponent' as SubjectTypeEnum,
    DeviceMetric: 'DeviceMetric' as SubjectTypeEnum,
    DeviceRequest: 'DeviceRequest' as SubjectTypeEnum,
    DeviceUseStatement: 'DeviceUseStatement' as SubjectTypeEnum,
    DiagnosticReport: 'DiagnosticReport' as SubjectTypeEnum,
    DocumentManifest: 'DocumentManifest' as SubjectTypeEnum,
    DocumentReference: 'DocumentReference' as SubjectTypeEnum,
    DomainResource: 'DomainResource' as SubjectTypeEnum,
    EligibilityRequest: 'EligibilityRequest' as SubjectTypeEnum,
    EligibilityResponse: 'EligibilityResponse' as SubjectTypeEnum,
    Encounter: 'Encounter' as SubjectTypeEnum,
    Endpoint: 'Endpoint' as SubjectTypeEnum,
    EnrollmentRequest: 'EnrollmentRequest' as SubjectTypeEnum,
    EnrollmentResponse: 'EnrollmentResponse' as SubjectTypeEnum,
    EpisodeOfCare: 'EpisodeOfCare' as SubjectTypeEnum,
    ExpansionProfile: 'ExpansionProfile' as SubjectTypeEnum,
    ExplanationOfBenefit: 'ExplanationOfBenefit' as SubjectTypeEnum,
    FamilyMemberHistory: 'FamilyMemberHistory' as SubjectTypeEnum,
    Flag: 'Flag' as SubjectTypeEnum,
    Goal: 'Goal' as SubjectTypeEnum,
    GraphDefinition: 'GraphDefinition' as SubjectTypeEnum,
    Group: 'Group' as SubjectTypeEnum,
    GuidanceResponse: 'GuidanceResponse' as SubjectTypeEnum,
    HealthcareService: 'HealthcareService' as SubjectTypeEnum,
    ImagingManifest: 'ImagingManifest' as SubjectTypeEnum,
    ImagingStudy: 'ImagingStudy' as SubjectTypeEnum,
    Immunization: 'Immunization' as SubjectTypeEnum,
    ImmunizationRecommendation: 'ImmunizationRecommendation' as SubjectTypeEnum,
    ImplementationGuide: 'ImplementationGuide' as SubjectTypeEnum,
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
    MedicationRequest: 'MedicationRequest' as SubjectTypeEnum,
    MedicationStatement: 'MedicationStatement' as SubjectTypeEnum,
    MessageDefinition: 'MessageDefinition' as SubjectTypeEnum,
    MessageHeader: 'MessageHeader' as SubjectTypeEnum,
    NamingSystem: 'NamingSystem' as SubjectTypeEnum,
    NutritionOrder: 'NutritionOrder' as SubjectTypeEnum,
    Observation: 'Observation' as SubjectTypeEnum,
    OperationDefinition: 'OperationDefinition' as SubjectTypeEnum,
    OperationOutcome: 'OperationOutcome' as SubjectTypeEnum,
    Organization: 'Organization' as SubjectTypeEnum,
    Parameters: 'Parameters' as SubjectTypeEnum,
    Patient: 'Patient' as SubjectTypeEnum,
    PaymentNotice: 'PaymentNotice' as SubjectTypeEnum,
    PaymentReconciliation: 'PaymentReconciliation' as SubjectTypeEnum,
    Person: 'Person' as SubjectTypeEnum,
    PlanDefinition: 'PlanDefinition' as SubjectTypeEnum,
    Practitioner: 'Practitioner' as SubjectTypeEnum,
    PractitionerRole: 'PractitionerRole' as SubjectTypeEnum,
    Procedure: 'Procedure' as SubjectTypeEnum,
    ProcedureRequest: 'ProcedureRequest' as SubjectTypeEnum,
    ProcessRequest: 'ProcessRequest' as SubjectTypeEnum,
    ProcessResponse: 'ProcessResponse' as SubjectTypeEnum,
    Provenance: 'Provenance' as SubjectTypeEnum,
    Questionnaire: 'Questionnaire' as SubjectTypeEnum,
    QuestionnaireResponse: 'QuestionnaireResponse' as SubjectTypeEnum,
    ReferralRequest: 'ReferralRequest' as SubjectTypeEnum,
    RelatedPerson: 'RelatedPerson' as SubjectTypeEnum,
    RequestGroup: 'RequestGroup' as SubjectTypeEnum,
    ResearchStudy: 'ResearchStudy' as SubjectTypeEnum,
    ResearchSubject: 'ResearchSubject' as SubjectTypeEnum,
    Resource: 'Resource' as SubjectTypeEnum,
    RiskAssessment: 'RiskAssessment' as SubjectTypeEnum,
    Schedule: 'Schedule' as SubjectTypeEnum,
    SearchParameter: 'SearchParameter' as SubjectTypeEnum,
    Sequence: 'Sequence' as SubjectTypeEnum,
    ServiceDefinition: 'ServiceDefinition' as SubjectTypeEnum,
    Slot: 'Slot' as SubjectTypeEnum,
    Specimen: 'Specimen' as SubjectTypeEnum,
    StructureDefinition: 'StructureDefinition' as SubjectTypeEnum,
    StructureMap: 'StructureMap' as SubjectTypeEnum,
    Subscription: 'Subscription' as SubjectTypeEnum,
    Substance: 'Substance' as SubjectTypeEnum,
    SupplyDelivery: 'SupplyDelivery' as SubjectTypeEnum,
    SupplyRequest: 'SupplyRequest' as SubjectTypeEnum,
    Task: 'Task' as SubjectTypeEnum,
    TestReport: 'TestReport' as SubjectTypeEnum,
    TestScript: 'TestScript' as SubjectTypeEnum,
    ValueSet: 'ValueSet' as SubjectTypeEnum,
    VisionPrescription: 'VisionPrescription' as SubjectTypeEnum,
  };
}

/**
 * Questions and sections within the Questionnaire
 */
export class QuestionnaireItem {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
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
  options?: Reference;
  /** Permitted answer (0..*) */
  option?: Array<QuestionnaireOption>;
  /** Default value when item is first rendered (0..1) */
  initialBoolean?: boolean;
  /** Id and extensions of the primitive `initialBoolean`. */
  _initialBoolean?: Element;
  /** Default value when item is first rendered (0..1) */
  initialDecimal?: number;
  /** Id and extensions of the primitive `initialDecimal`. */
  _initialDecimal?: Element;
  /** Default value when item is first rendered (0..1) */
  initialInteger?: number;
  /** Id and extensions of the primitive `initialInteger`. */
  _initialInteger?: Element;
  /** Default value when item is first rendered (0..1) */
  initialDate?: string;
  /** Id and extensions of the primitive `initialDate`. */
  _initialDate?: Element;
  /** Default value when item is first rendered (0..1) */
  initialDateTime?: string;
  /** Id and extensions of the primitive `initialDateTime`. */
  _initialDateTime?: Element;
  /** Default value when item is first rendered (0..1) */
  initialTime?: string;
  /** Id and extensions of the primitive `initialTime`. */
  _initialTime?: Element;
  /** Default value when item is first rendered (0..1) */
  initialString?: string;
  /** Id and extensions of the primitive `initialString`. */
  _initialString?: Element;
  /** Default value when item is first rendered (0..1) */
  initialUri?: string;
  /** Id and extensions of the primitive `initialUri`. */
  _initialUri?: Element;
  /** Default value when item is first rendered (0..1) */
  initialAttachment?: Attachment;
  /** Default value when item is first rendered (0..1) */
  initialCoding?: Coding;
  /** Default value when item is first rendered (0..1) */
  initialQuantity?: Quantity;
  /** Default value when item is first rendered (0..1) */
  initialReference?: Reference;
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
}

/**
 * Only allow data when
 */
export class QuestionnaireEnableWhen {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Question that determines whether item is enabled (1..1) */
  question?: string;
  /** Id and extensions of the primitive `question`. */
  _question?: Element;
  /** Enable when answered or not (0..1) */
  hasAnswer?: boolean;
  /** Id and extensions of the primitive `hasAnswer`. */
  _hasAnswer?: Element;
  /** Value question must have (0..1) */
  answerBoolean?: boolean;
  /** Id and extensions of the primitive `answerBoolean`. */
  _answerBoolean?: Element;
  /** Value question must have (0..1) */
  answerDecimal?: number;
  /** Id and extensions of the primitive `answerDecimal`. */
  _answerDecimal?: Element;
  /** Value question must have (0..1) */
  answerInteger?: number;
  /** Id and extensions of the primitive `answerInteger`. */
  _answerInteger?: Element;
  /** Value question must have (0..1) */
  answerDate?: string;
  /** Id and extensions of the primitive `answerDate`. */
  _answerDate?: Element;
  /** Value question must have (0..1) */
  answerDateTime?: string;
  /** Id and extensions of the primitive `answerDateTime`. */
  _answerDateTime?: Element;
  /** Value question must have (0..1) */
  answerTime?: string;
  /** Id and extensions of the primitive `answerTime`. */
  _answerTime?: Element;
  /** Value question must have (0..1) */
  answerString?: string;
  /** Id and extensions of the primitive `answerString`. */
  _answerString?: Element;
  /** Value question must have (0..1) */
  answerUri?: string;
  /** Id and extensions of the primitive `answerUri`. */
  _answerUri?: Element;
  /** Value question must have (0..1) */
  answerAttachment?: Attachment;
  /** Value question must have (0..1) */
  answerCoding?: Coding;
  /** Value question must have (0..1) */
  answerQuantity?: Quantity;
  /** Value question must have (0..1) */
  answerReference?: Reference;
}

/**
 * Permitted answer
 */
export class QuestionnaireOption {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
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
}
