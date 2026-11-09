/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Account } from './account';
import type { ActivityDefinition } from './activityDefinition';
import type { ActorDefinition } from './actorDefinition';
import type { AdministrableProductDefinition } from './administrableProductDefinition';
import type { AdverseEvent } from './adverseEvent';
import type { AllergyIntolerance } from './allergyIntolerance';
import type { Appointment } from './appointment';
import type { AppointmentResponse } from './appointmentResponse';
import type { ArtifactAssessment } from './artifactAssessment';
import type { AuditEvent } from './auditEvent';
import type { Basic } from './basic';
import type { Binary } from './binary';
import type { BiologicallyDerivedProduct } from './biologicallyDerivedProduct';
import type { BiologicallyDerivedProductDispense } from './biologicallyDerivedProductDispense';
import type { BodyStructure } from './bodyStructure';
import type { Bundle } from './bundle';
import type { CapabilityStatement } from './capabilityStatement';
import type { CarePlan } from './carePlan';
import type { CareTeam } from './careTeam';
import type { ChargeItem } from './chargeItem';
import type { ChargeItemDefinition } from './chargeItemDefinition';
import type { Citation } from './citation';
import type { Claim } from './claim';
import type { ClaimResponse } from './claimResponse';
import type { ClinicalImpression } from './clinicalImpression';
import type { ClinicalUseDefinition } from './clinicalUseDefinition';
import type { CodeSystem } from './codeSystem';
import type { Communication } from './communication';
import type { CommunicationRequest } from './communicationRequest';
import type { CompartmentDefinition } from './compartmentDefinition';
import type { Composition } from './composition';
import type { ConceptMap } from './conceptMap';
import type { Condition } from './condition';
import type { ConditionDefinition } from './conditionDefinition';
import type { Consent } from './consent';
import type { Contract } from './contract';
import type { Coverage } from './coverage';
import type { CoverageEligibilityRequest } from './coverageEligibilityRequest';
import type { CoverageEligibilityResponse } from './coverageEligibilityResponse';
import type { DetectedIssue } from './detectedIssue';
import type { Device } from './device';
import type { DeviceAssociation } from './deviceAssociation';
import type { DeviceDefinition } from './deviceDefinition';
import type { DeviceDispense } from './deviceDispense';
import type { DeviceMetric } from './deviceMetric';
import type { DeviceRequest } from './deviceRequest';
import type { DeviceUsage } from './deviceUsage';
import type { DiagnosticReport } from './diagnosticReport';
import type { DocumentReference } from './documentReference';
import type { Encounter } from './encounter';
import type { EncounterHistory } from './encounterHistory';
import type { Endpoint } from './endpoint';
import type { EnrollmentRequest } from './enrollmentRequest';
import type { EnrollmentResponse } from './enrollmentResponse';
import type { EpisodeOfCare } from './episodeOfCare';
import type { EventDefinition } from './eventDefinition';
import type { Evidence } from './evidence';
import type { EvidenceReport } from './evidenceReport';
import type { EvidenceVariable } from './evidenceVariable';
import type { ExampleScenario } from './exampleScenario';
import type { ExplanationOfBenefit } from './explanationOfBenefit';
import type { FamilyMemberHistory } from './familyMemberHistory';
import type { Flag } from './flag';
import type { FormularyItem } from './formularyItem';
import type { GenomicStudy } from './genomicStudy';
import type { Goal } from './goal';
import type { GraphDefinition } from './graphDefinition';
import type { Group } from './group';
import type { GuidanceResponse } from './guidanceResponse';
import type { HealthcareService } from './healthcareService';
import type { ImagingSelection } from './imagingSelection';
import type { ImagingStudy } from './imagingStudy';
import type { Immunization } from './immunization';
import type { ImmunizationEvaluation } from './immunizationEvaluation';
import type { ImmunizationRecommendation } from './immunizationRecommendation';
import type { ImplementationGuide } from './implementationGuide';
import type { Ingredient } from './ingredient';
import type { InsurancePlan } from './insurancePlan';
import type { InventoryItem } from './inventoryItem';
import type { InventoryReport } from './inventoryReport';
import type { Invoice } from './invoice';
import type { Library } from './library';
import type { Linkage } from './linkage';
import type { List } from './list';
import type { Location } from './location';
import type { ManufacturedItemDefinition } from './manufacturedItemDefinition';
import type { Measure } from './measure';
import type { MeasureReport } from './measureReport';
import type { Medication } from './medication';
import type { MedicationAdministration } from './medicationAdministration';
import type { MedicationDispense } from './medicationDispense';
import type { MedicationKnowledge } from './medicationKnowledge';
import type { MedicationRequest } from './medicationRequest';
import type { MedicationStatement } from './medicationStatement';
import type { MedicinalProductDefinition } from './medicinalProductDefinition';
import type { MessageDefinition } from './messageDefinition';
import type { MessageHeader } from './messageHeader';
import type { MolecularSequence } from './molecularSequence';
import type { NamingSystem } from './namingSystem';
import type { NutritionIntake } from './nutritionIntake';
import type { NutritionOrder } from './nutritionOrder';
import type { NutritionProduct } from './nutritionProduct';
import type { Observation } from './observation';
import type { ObservationDefinition } from './observationDefinition';
import type { OperationDefinition } from './operationDefinition';
import type { OperationOutcome } from './operationOutcome';
import type { Organization } from './organization';
import type { OrganizationAffiliation } from './organizationAffiliation';
import type { PackagedProductDefinition } from './packagedProductDefinition';
import type { Parameters } from './parameters';
import type { Patient } from './patient';
import type { PaymentNotice } from './paymentNotice';
import type { PaymentReconciliation } from './paymentReconciliation';
import type { Permission } from './permission';
import type { Person } from './person';
import type { PlanDefinition } from './planDefinition';
import type { Practitioner } from './practitioner';
import type { PractitionerRole } from './practitionerRole';
import type { Procedure } from './procedure';
import type { Provenance } from './provenance';
import type { Questionnaire } from './questionnaire';
import type { QuestionnaireResponse } from './questionnaireResponse';
import type { RegulatedAuthorization } from './regulatedAuthorization';
import type { RelatedPerson } from './relatedPerson';
import type { RequestOrchestration } from './requestOrchestration';
import type { Requirements } from './requirements';
import type { ResearchStudy } from './researchStudy';
import type { ResearchSubject } from './researchSubject';
import type { RiskAssessment } from './riskAssessment';
import type { Schedule } from './schedule';
import type { SearchParameter } from './searchParameter';
import type { ServiceRequest } from './serviceRequest';
import type { Slot } from './slot';
import type { Specimen } from './specimen';
import type { SpecimenDefinition } from './specimenDefinition';
import type { StructureDefinition } from './structureDefinition';
import type { StructureMap } from './structureMap';
import type { Subscription } from './subscription';
import type { SubscriptionStatus } from './subscriptionStatus';
import type { SubscriptionTopic } from './subscriptionTopic';
import type { Substance } from './substance';
import type { SubstanceDefinition } from './substanceDefinition';
import type { SubstanceNucleicAcid } from './substanceNucleicAcid';
import type { SubstancePolymer } from './substancePolymer';
import type { SubstanceProtein } from './substanceProtein';
import type { SubstanceReferenceInformation } from './substanceReferenceInformation';
import type { SubstanceSourceMaterial } from './substanceSourceMaterial';
import type { SupplyDelivery } from './supplyDelivery';
import type { SupplyRequest } from './supplyRequest';
import type { Task } from './task';
import type { TerminologyCapabilities } from './terminologyCapabilities';
import type { TestPlan } from './testPlan';
import type { TestReport } from './testReport';
import type { TestScript } from './testScript';
import type { Transport } from './transport';
import type { ValueSet } from './valueSet';
import type { VerificationResult } from './verificationResult';
import type { VisionPrescription } from './visionPrescription';

/** Any FHIR R5 resource. Checking `resourceType` narrows it to one resource type. */
export type ResourceList =
  | Account
  | ActivityDefinition
  | ActorDefinition
  | AdministrableProductDefinition
  | AdverseEvent
  | AllergyIntolerance
  | Appointment
  | AppointmentResponse
  | ArtifactAssessment
  | AuditEvent
  | Basic
  | Binary
  | BiologicallyDerivedProduct
  | BiologicallyDerivedProductDispense
  | BodyStructure
  | Bundle
  | CapabilityStatement
  | CarePlan
  | CareTeam
  | ChargeItem
  | ChargeItemDefinition
  | Citation
  | Claim
  | ClaimResponse
  | ClinicalImpression
  | ClinicalUseDefinition
  | CodeSystem
  | Communication
  | CommunicationRequest
  | CompartmentDefinition
  | Composition
  | ConceptMap
  | Condition
  | ConditionDefinition
  | Consent
  | Contract
  | Coverage
  | CoverageEligibilityRequest
  | CoverageEligibilityResponse
  | DetectedIssue
  | Device
  | DeviceAssociation
  | DeviceDefinition
  | DeviceDispense
  | DeviceMetric
  | DeviceRequest
  | DeviceUsage
  | DiagnosticReport
  | DocumentReference
  | Encounter
  | EncounterHistory
  | Endpoint
  | EnrollmentRequest
  | EnrollmentResponse
  | EpisodeOfCare
  | EventDefinition
  | Evidence
  | EvidenceReport
  | EvidenceVariable
  | ExampleScenario
  | ExplanationOfBenefit
  | FamilyMemberHistory
  | Flag
  | FormularyItem
  | GenomicStudy
  | Goal
  | GraphDefinition
  | Group
  | GuidanceResponse
  | HealthcareService
  | ImagingSelection
  | ImagingStudy
  | Immunization
  | ImmunizationEvaluation
  | ImmunizationRecommendation
  | ImplementationGuide
  | Ingredient
  | InsurancePlan
  | InventoryItem
  | InventoryReport
  | Invoice
  | Library
  | Linkage
  | List
  | Location
  | ManufacturedItemDefinition
  | Measure
  | MeasureReport
  | Medication
  | MedicationAdministration
  | MedicationDispense
  | MedicationKnowledge
  | MedicationRequest
  | MedicationStatement
  | MedicinalProductDefinition
  | MessageDefinition
  | MessageHeader
  | MolecularSequence
  | NamingSystem
  | NutritionIntake
  | NutritionOrder
  | NutritionProduct
  | Observation
  | ObservationDefinition
  | OperationDefinition
  | OperationOutcome
  | Organization
  | OrganizationAffiliation
  | PackagedProductDefinition
  | Parameters
  | Patient
  | PaymentNotice
  | PaymentReconciliation
  | Permission
  | Person
  | PlanDefinition
  | Practitioner
  | PractitionerRole
  | Procedure
  | Provenance
  | Questionnaire
  | QuestionnaireResponse
  | RegulatedAuthorization
  | RelatedPerson
  | RequestOrchestration
  | Requirements
  | ResearchStudy
  | ResearchSubject
  | RiskAssessment
  | Schedule
  | SearchParameter
  | ServiceRequest
  | Slot
  | Specimen
  | SpecimenDefinition
  | StructureDefinition
  | StructureMap
  | Subscription
  | SubscriptionStatus
  | SubscriptionTopic
  | Substance
  | SubstanceDefinition
  | SubstanceNucleicAcid
  | SubstancePolymer
  | SubstanceProtein
  | SubstanceReferenceInformation
  | SubstanceSourceMaterial
  | SupplyDelivery
  | SupplyRequest
  | Task
  | TerminologyCapabilities
  | TestPlan
  | TestReport
  | TestScript
  | Transport
  | ValueSet
  | VerificationResult
  | VisionPrescription;
