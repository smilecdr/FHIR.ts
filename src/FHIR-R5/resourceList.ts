/**
 * FHIR Version R5
 * The following is auto generated resource definition.
 *
 * OpenAPI spec version: 3.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Account } from './account';
import { ActivityDefinition } from './activityDefinition';
import { ActorDefinition } from './actorDefinition';
import { AdministrableProductDefinition } from './administrableProductDefinition';
import { AdverseEvent } from './adverseEvent';
import { AllergyIntolerance } from './allergyIntolerance';
import { Appointment } from './appointment';
import { AppointmentResponse } from './appointmentResponse';
import { ArtifactAssessment } from './artifactAssessment';
import { AuditEvent } from './auditEvent';
import { Basic } from './basic';
import { Binary } from './binary';
import { BiologicallyDerivedProduct } from './biologicallyDerivedProduct';
import { BiologicallyDerivedProductDispense } from './biologicallyDerivedProductDispense';
import { BodyStructure } from './bodyStructure';
import { Bundle } from './bundle';
import { CapabilityStatement } from './capabilityStatement';
import { CarePlan } from './carePlan';
import { CareTeam } from './careTeam';
import { ChargeItem } from './chargeItem';
import { ChargeItemDefinition } from './chargeItemDefinition';
import { Citation } from './citation';
import { Claim } from './claim';
import { ClaimResponse } from './claimResponse';
import { ClinicalImpression } from './clinicalImpression';
import { ClinicalUseDefinition } from './clinicalUseDefinition';
import { CodeSystem } from './codeSystem';
import { Communication } from './communication';
import { CommunicationRequest } from './communicationRequest';
import { CompartmentDefinition } from './compartmentDefinition';
import { Composition } from './composition';
import { ConceptMap } from './conceptMap';
import { Condition } from './condition';
import { ConditionDefinition } from './conditionDefinition';
import { Consent } from './consent';
import { Contract } from './contract';
import { Coverage } from './coverage';
import { CoverageEligibilityRequest } from './coverageEligibilityRequest';
import { CoverageEligibilityResponse } from './coverageEligibilityResponse';
import { DetectedIssue } from './detectedIssue';
import { Device } from './device';
import { DeviceAssociation } from './deviceAssociation';
import { DeviceDefinition } from './deviceDefinition';
import { DeviceDispense } from './deviceDispense';
import { DeviceMetric } from './deviceMetric';
import { DeviceRequest } from './deviceRequest';
import { DeviceUsage } from './deviceUsage';
import { DiagnosticReport } from './diagnosticReport';
import { DocumentReference } from './documentReference';
import { Encounter } from './encounter';
import { EncounterHistory } from './encounterHistory';
import { Endpoint } from './endpoint';
import { EnrollmentRequest } from './enrollmentRequest';
import { EnrollmentResponse } from './enrollmentResponse';
import { EpisodeOfCare } from './episodeOfCare';
import { EventDefinition } from './eventDefinition';
import { Evidence } from './evidence';
import { EvidenceReport } from './evidenceReport';
import { EvidenceVariable } from './evidenceVariable';
import { ExampleScenario } from './exampleScenario';
import { ExplanationOfBenefit } from './explanationOfBenefit';
import { FamilyMemberHistory } from './familyMemberHistory';
import { Flag } from './flag';
import { FormularyItem } from './formularyItem';
import { GenomicStudy } from './genomicStudy';
import { Goal } from './goal';
import { GraphDefinition } from './graphDefinition';
import { Group } from './group';
import { GuidanceResponse } from './guidanceResponse';
import { HealthcareService } from './healthcareService';
import { ImagingSelection } from './imagingSelection';
import { ImagingStudy } from './imagingStudy';
import { Immunization } from './immunization';
import { ImmunizationEvaluation } from './immunizationEvaluation';
import { ImmunizationRecommendation } from './immunizationRecommendation';
import { ImplementationGuide } from './implementationGuide';
import { Ingredient } from './ingredient';
import { InsurancePlan } from './insurancePlan';
import { InventoryItem } from './inventoryItem';
import { InventoryReport } from './inventoryReport';
import { Invoice } from './invoice';
import { Library } from './library';
import { Linkage } from './linkage';
import { Location } from './location';
import { ManufacturedItemDefinition } from './manufacturedItemDefinition';
import { Measure } from './measure';
import { MeasureReport } from './measureReport';
import { Medication } from './medication';
import { MedicationAdministration } from './medicationAdministration';
import { MedicationDispense } from './medicationDispense';
import { MedicationKnowledge } from './medicationKnowledge';
import { MedicationRequest } from './medicationRequest';
import { MedicationStatement } from './medicationStatement';
import { MedicinalProductDefinition } from './medicinalProductDefinition';
import { MessageDefinition } from './messageDefinition';
import { MessageHeader } from './messageHeader';
import { MolecularSequence } from './molecularSequence';
import { NamingSystem } from './namingSystem';
import { NutritionIntake } from './nutritionIntake';
import { NutritionOrder } from './nutritionOrder';
import { NutritionProduct } from './nutritionProduct';
import { Observation } from './observation';
import { ObservationDefinition } from './observationDefinition';
import { OperationDefinition } from './operationDefinition';
import { OperationOutcome } from './operationOutcome';
import { Organization } from './organization';
import { OrganizationAffiliation } from './organizationAffiliation';
import { PackagedProductDefinition } from './packagedProductDefinition';
import { Parameters } from './parameters';
import { Patient } from './patient';
import { PaymentNotice } from './paymentNotice';
import { PaymentReconciliation } from './paymentReconciliation';
import { Permission } from './permission';
import { Person } from './person';
import { PlanDefinition } from './planDefinition';
import { Practitioner } from './practitioner';
import { PractitionerRole } from './practitionerRole';
import { Procedure } from './procedure';
import { Provenance } from './provenance';
import { Questionnaire } from './questionnaire';
import { QuestionnaireResponse } from './questionnaireResponse';
import { RegulatedAuthorization } from './regulatedAuthorization';
import { RelatedPerson } from './relatedPerson';
import { RequestOrchestration } from './requestOrchestration';
import { Requirements } from './requirements';
import { ResearchStudy } from './researchStudy';
import { ResearchSubject } from './researchSubject';
import { RiskAssessment } from './riskAssessment';
import { Schedule } from './schedule';
import { SearchParameter } from './searchParameter';
import { ServiceRequest } from './serviceRequest';
import { Slot } from './slot';
import { Specimen } from './specimen';
import { SpecimenDefinition } from './specimenDefinition';
import { StructureDefinition } from './structureDefinition';
import { StructureMap } from './structureMap';
import { Subscription } from './subscription';
import { SubscriptionStatus } from './subscriptionStatus';
import { SubscriptionTopic } from './subscriptionTopic';
import { Substance } from './substance';
import { SubstanceDefinition } from './substanceDefinition';
import { SubstanceNucleicAcid } from './substanceNucleicAcid';
import { SubstancePolymer } from './substancePolymer';
import { SubstanceProtein } from './substanceProtein';
import { SubstanceReferenceInformation } from './substanceReferenceInformation';
import { SubstanceSourceMaterial } from './substanceSourceMaterial';
import { SupplyDelivery } from './supplyDelivery';
import { SupplyRequest } from './supplyRequest';
import { Task } from './task';
import { TerminologyCapabilities } from './terminologyCapabilities';
import { TestPlan } from './testPlan';
import { TestReport } from './testReport';
import { TestScript } from './testScript';
import { Transport } from './transport';
import { ValueSet } from './valueSet';
import { VerificationResult } from './verificationResult';
import { VisionPrescription } from './visionPrescription';

export type ResourceList = Account | ActivityDefinition | ActorDefinition | AdministrableProductDefinition | AdverseEvent | AllergyIntolerance | Appointment | AppointmentResponse | ArtifactAssessment | AuditEvent | Basic | Binary | BiologicallyDerivedProduct | BiologicallyDerivedProductDispense | BodyStructure | Bundle | CapabilityStatement | CarePlan | CareTeam | ChargeItem | ChargeItemDefinition | Citation | Claim | ClaimResponse | ClinicalImpression | ClinicalUseDefinition | CodeSystem | Communication | CommunicationRequest | CompartmentDefinition | Composition | ConceptMap | Condition | ConditionDefinition | Consent | Contract | Coverage | CoverageEligibilityRequest | CoverageEligibilityResponse | DetectedIssue | Device | DeviceAssociation | DeviceDefinition | DeviceDispense | DeviceMetric | DeviceRequest | DeviceUsage | DiagnosticReport | DocumentReference | Encounter | EncounterHistory | Endpoint | EnrollmentRequest | EnrollmentResponse | EpisodeOfCare | EventDefinition | Evidence | EvidenceReport | EvidenceVariable | ExampleScenario | ExplanationOfBenefit | FamilyMemberHistory | Flag | FormularyItem | GenomicStudy | Goal | GraphDefinition | Group | GuidanceResponse | HealthcareService | ImagingSelection | ImagingStudy | Immunization | ImmunizationEvaluation | ImmunizationRecommendation | ImplementationGuide | Ingredient | InsurancePlan | InventoryItem | InventoryReport | Invoice | Library | Linkage | Location | ManufacturedItemDefinition | Measure | MeasureReport | Medication | MedicationAdministration | MedicationDispense | MedicationKnowledge | MedicationRequest | MedicationStatement | MedicinalProductDefinition | MessageDefinition | MessageHeader | MolecularSequence | NamingSystem | NutritionIntake | NutritionOrder | NutritionProduct | Observation | ObservationDefinition | OperationDefinition | OperationOutcome | Organization | OrganizationAffiliation | PackagedProductDefinition | Parameters | Patient | PaymentNotice | PaymentReconciliation | Permission | Person | PlanDefinition | Practitioner | PractitionerRole | Procedure | Provenance | Questionnaire | QuestionnaireResponse | RegulatedAuthorization | RelatedPerson | RequestOrchestration | Requirements | ResearchStudy | ResearchSubject | RiskAssessment | Schedule | SearchParameter | ServiceRequest | Slot | Specimen | SpecimenDefinition | StructureDefinition | StructureMap | Subscription | SubscriptionStatus | SubscriptionTopic | Substance | SubstanceDefinition | SubstanceNucleicAcid | SubstancePolymer | SubstanceProtein | SubstanceReferenceInformation | SubstanceSourceMaterial | SupplyDelivery | SupplyRequest | Task | TerminologyCapabilities | TestPlan | TestReport | TestScript | Transport | ValueSet | VerificationResult | VisionPrescription;