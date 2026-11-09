/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Account } from './account';
import type { ActivityDefinition } from './activityDefinition';
import type { AdverseEvent } from './adverseEvent';
import type { AllergyIntolerance } from './allergyIntolerance';
import type { Appointment } from './appointment';
import type { AppointmentResponse } from './appointmentResponse';
import type { AuditEvent } from './auditEvent';
import type { Basic } from './basic';
import type { Binary } from './binary';
import type { BiologicallyDerivedProduct } from './biologicallyDerivedProduct';
import type { BodyStructure } from './bodyStructure';
import type { Bundle } from './bundle';
import type { CapabilityStatement } from './capabilityStatement';
import type { CarePlan } from './carePlan';
import type { CareTeam } from './careTeam';
import type { CatalogEntry } from './catalogEntry';
import type { ChargeItem } from './chargeItem';
import type { ChargeItemDefinition } from './chargeItemDefinition';
import type { Claim } from './claim';
import type { ClaimResponse } from './claimResponse';
import type { ClinicalImpression } from './clinicalImpression';
import type { CodeSystem } from './codeSystem';
import type { Communication } from './communication';
import type { CommunicationRequest } from './communicationRequest';
import type { CompartmentDefinition } from './compartmentDefinition';
import type { Composition } from './composition';
import type { ConceptMap } from './conceptMap';
import type { Condition } from './condition';
import type { Consent } from './consent';
import type { Contract } from './contract';
import type { Coverage } from './coverage';
import type { CoverageEligibilityRequest } from './coverageEligibilityRequest';
import type { CoverageEligibilityResponse } from './coverageEligibilityResponse';
import type { DetectedIssue } from './detectedIssue';
import type { Device } from './device';
import type { DeviceDefinition } from './deviceDefinition';
import type { DeviceMetric } from './deviceMetric';
import type { DeviceRequest } from './deviceRequest';
import type { DeviceUseStatement } from './deviceUseStatement';
import type { DiagnosticReport } from './diagnosticReport';
import type { DocumentManifest } from './documentManifest';
import type { DocumentReference } from './documentReference';
import type { EffectEvidenceSynthesis } from './effectEvidenceSynthesis';
import type { Encounter } from './encounter';
import type { Endpoint } from './endpoint';
import type { EnrollmentRequest } from './enrollmentRequest';
import type { EnrollmentResponse } from './enrollmentResponse';
import type { EpisodeOfCare } from './episodeOfCare';
import type { EventDefinition } from './eventDefinition';
import type { Evidence } from './evidence';
import type { EvidenceVariable } from './evidenceVariable';
import type { ExampleScenario } from './exampleScenario';
import type { ExplanationOfBenefit } from './explanationOfBenefit';
import type { FamilyMemberHistory } from './familyMemberHistory';
import type { Flag } from './flag';
import type { Goal } from './goal';
import type { GraphDefinition } from './graphDefinition';
import type { Group } from './group';
import type { GuidanceResponse } from './guidanceResponse';
import type { HealthcareService } from './healthcareService';
import type { ImagingStudy } from './imagingStudy';
import type { Immunization } from './immunization';
import type { ImmunizationEvaluation } from './immunizationEvaluation';
import type { ImmunizationRecommendation } from './immunizationRecommendation';
import type { ImplementationGuide } from './implementationGuide';
import type { InsurancePlan } from './insurancePlan';
import type { Invoice } from './invoice';
import type { Library } from './library';
import type { Linkage } from './linkage';
import type { List } from './list';
import type { Location } from './location';
import type { Measure } from './measure';
import type { MeasureReport } from './measureReport';
import type { Media } from './media';
import type { Medication } from './medication';
import type { MedicationAdministration } from './medicationAdministration';
import type { MedicationDispense } from './medicationDispense';
import type { MedicationKnowledge } from './medicationKnowledge';
import type { MedicationRequest } from './medicationRequest';
import type { MedicationStatement } from './medicationStatement';
import type { MedicinalProduct } from './medicinalProduct';
import type { MedicinalProductAuthorization } from './medicinalProductAuthorization';
import type { MedicinalProductContraindication } from './medicinalProductContraindication';
import type { MedicinalProductIndication } from './medicinalProductIndication';
import type { MedicinalProductIngredient } from './medicinalProductIngredient';
import type { MedicinalProductInteraction } from './medicinalProductInteraction';
import type { MedicinalProductManufactured } from './medicinalProductManufactured';
import type { MedicinalProductPackaged } from './medicinalProductPackaged';
import type { MedicinalProductPharmaceutical } from './medicinalProductPharmaceutical';
import type { MedicinalProductUndesirableEffect } from './medicinalProductUndesirableEffect';
import type { MessageDefinition } from './messageDefinition';
import type { MessageHeader } from './messageHeader';
import type { MolecularSequence } from './molecularSequence';
import type { NamingSystem } from './namingSystem';
import type { NutritionOrder } from './nutritionOrder';
import type { Observation } from './observation';
import type { ObservationDefinition } from './observationDefinition';
import type { OperationDefinition } from './operationDefinition';
import type { OperationOutcome } from './operationOutcome';
import type { Organization } from './organization';
import type { OrganizationAffiliation } from './organizationAffiliation';
import type { Parameters } from './parameters';
import type { Patient } from './patient';
import type { PaymentNotice } from './paymentNotice';
import type { PaymentReconciliation } from './paymentReconciliation';
import type { Person } from './person';
import type { PlanDefinition } from './planDefinition';
import type { Practitioner } from './practitioner';
import type { PractitionerRole } from './practitionerRole';
import type { Procedure } from './procedure';
import type { Provenance } from './provenance';
import type { Questionnaire } from './questionnaire';
import type { QuestionnaireResponse } from './questionnaireResponse';
import type { RelatedPerson } from './relatedPerson';
import type { RequestGroup } from './requestGroup';
import type { ResearchDefinition } from './researchDefinition';
import type { ResearchElementDefinition } from './researchElementDefinition';
import type { ResearchStudy } from './researchStudy';
import type { ResearchSubject } from './researchSubject';
import type { RiskAssessment } from './riskAssessment';
import type { RiskEvidenceSynthesis } from './riskEvidenceSynthesis';
import type { Schedule } from './schedule';
import type { SearchParameter } from './searchParameter';
import type { ServiceRequest } from './serviceRequest';
import type { Slot } from './slot';
import type { Specimen } from './specimen';
import type { SpecimenDefinition } from './specimenDefinition';
import type { StructureDefinition } from './structureDefinition';
import type { StructureMap } from './structureMap';
import type { Subscription } from './subscription';
import type { Substance } from './substance';
import type { SubstanceNucleicAcid } from './substanceNucleicAcid';
import type { SubstancePolymer } from './substancePolymer';
import type { SubstanceProtein } from './substanceProtein';
import type { SubstanceReferenceInformation } from './substanceReferenceInformation';
import type { SubstanceSourceMaterial } from './substanceSourceMaterial';
import type { SubstanceSpecification } from './substanceSpecification';
import type { SupplyDelivery } from './supplyDelivery';
import type { SupplyRequest } from './supplyRequest';
import type { Task } from './task';
import type { TerminologyCapabilities } from './terminologyCapabilities';
import type { TestReport } from './testReport';
import type { TestScript } from './testScript';
import type { ValueSet } from './valueSet';
import type { VerificationResult } from './verificationResult';
import type { VisionPrescription } from './visionPrescription';

/** Any FHIR R4 resource. Checking `resourceType` narrows it to one resource type. */
export type Resource =
  | Account
  | ActivityDefinition
  | AdverseEvent
  | AllergyIntolerance
  | Appointment
  | AppointmentResponse
  | AuditEvent
  | Basic
  | Binary
  | BiologicallyDerivedProduct
  | BodyStructure
  | Bundle
  | CapabilityStatement
  | CarePlan
  | CareTeam
  | CatalogEntry
  | ChargeItem
  | ChargeItemDefinition
  | Claim
  | ClaimResponse
  | ClinicalImpression
  | CodeSystem
  | Communication
  | CommunicationRequest
  | CompartmentDefinition
  | Composition
  | ConceptMap
  | Condition
  | Consent
  | Contract
  | Coverage
  | CoverageEligibilityRequest
  | CoverageEligibilityResponse
  | DetectedIssue
  | Device
  | DeviceDefinition
  | DeviceMetric
  | DeviceRequest
  | DeviceUseStatement
  | DiagnosticReport
  | DocumentManifest
  | DocumentReference
  | EffectEvidenceSynthesis
  | Encounter
  | Endpoint
  | EnrollmentRequest
  | EnrollmentResponse
  | EpisodeOfCare
  | EventDefinition
  | Evidence
  | EvidenceVariable
  | ExampleScenario
  | ExplanationOfBenefit
  | FamilyMemberHistory
  | Flag
  | Goal
  | GraphDefinition
  | Group
  | GuidanceResponse
  | HealthcareService
  | ImagingStudy
  | Immunization
  | ImmunizationEvaluation
  | ImmunizationRecommendation
  | ImplementationGuide
  | InsurancePlan
  | Invoice
  | Library
  | Linkage
  | List
  | Location
  | Measure
  | MeasureReport
  | Media
  | Medication
  | MedicationAdministration
  | MedicationDispense
  | MedicationKnowledge
  | MedicationRequest
  | MedicationStatement
  | MedicinalProduct
  | MedicinalProductAuthorization
  | MedicinalProductContraindication
  | MedicinalProductIndication
  | MedicinalProductIngredient
  | MedicinalProductInteraction
  | MedicinalProductManufactured
  | MedicinalProductPackaged
  | MedicinalProductPharmaceutical
  | MedicinalProductUndesirableEffect
  | MessageDefinition
  | MessageHeader
  | MolecularSequence
  | NamingSystem
  | NutritionOrder
  | Observation
  | ObservationDefinition
  | OperationDefinition
  | OperationOutcome
  | Organization
  | OrganizationAffiliation
  | Parameters
  | Patient
  | PaymentNotice
  | PaymentReconciliation
  | Person
  | PlanDefinition
  | Practitioner
  | PractitionerRole
  | Procedure
  | Provenance
  | Questionnaire
  | QuestionnaireResponse
  | RelatedPerson
  | RequestGroup
  | ResearchDefinition
  | ResearchElementDefinition
  | ResearchStudy
  | ResearchSubject
  | RiskAssessment
  | RiskEvidenceSynthesis
  | Schedule
  | SearchParameter
  | ServiceRequest
  | Slot
  | Specimen
  | SpecimenDefinition
  | StructureDefinition
  | StructureMap
  | Subscription
  | Substance
  | SubstanceNucleicAcid
  | SubstancePolymer
  | SubstanceProtein
  | SubstanceReferenceInformation
  | SubstanceSourceMaterial
  | SubstanceSpecification
  | SupplyDelivery
  | SupplyRequest
  | Task
  | TerminologyCapabilities
  | TestReport
  | TestScript
  | ValueSet
  | VerificationResult
  | VisionPrescription;

/** The name of any FHIR R4 resource type. */
export type ResourceList =
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
