/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
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
import type { BodySite } from './bodySite';
import type { Bundle } from './bundle';
import type { CapabilityStatement } from './capabilityStatement';
import type { CarePlan } from './carePlan';
import type { CareTeam } from './careTeam';
import type { ChargeItem } from './chargeItem';
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
import type { DataElement } from './dataElement';
import type { DetectedIssue } from './detectedIssue';
import type { Device } from './device';
import type { DeviceComponent } from './deviceComponent';
import type { DeviceMetric } from './deviceMetric';
import type { DeviceRequest } from './deviceRequest';
import type { DeviceUseStatement } from './deviceUseStatement';
import type { DiagnosticReport } from './diagnosticReport';
import type { DocumentManifest } from './documentManifest';
import type { DocumentReference } from './documentReference';
import type { EligibilityRequest } from './eligibilityRequest';
import type { EligibilityResponse } from './eligibilityResponse';
import type { Encounter } from './encounter';
import type { Endpoint } from './endpoint';
import type { EnrollmentRequest } from './enrollmentRequest';
import type { EnrollmentResponse } from './enrollmentResponse';
import type { EpisodeOfCare } from './episodeOfCare';
import type { ExpansionProfile } from './expansionProfile';
import type { ExplanationOfBenefit } from './explanationOfBenefit';
import type { FamilyMemberHistory } from './familyMemberHistory';
import type { Flag } from './flag';
import type { Goal } from './goal';
import type { GraphDefinition } from './graphDefinition';
import type { Group } from './group';
import type { GuidanceResponse } from './guidanceResponse';
import type { HealthcareService } from './healthcareService';
import type { ImagingManifest } from './imagingManifest';
import type { ImagingStudy } from './imagingStudy';
import type { Immunization } from './immunization';
import type { ImmunizationRecommendation } from './immunizationRecommendation';
import type { ImplementationGuide } from './implementationGuide';
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
import type { MedicationRequest } from './medicationRequest';
import type { MedicationStatement } from './medicationStatement';
import type { MessageDefinition } from './messageDefinition';
import type { MessageHeader } from './messageHeader';
import type { NamingSystem } from './namingSystem';
import type { NutritionOrder } from './nutritionOrder';
import type { Observation } from './observation';
import type { OperationDefinition } from './operationDefinition';
import type { OperationOutcome } from './operationOutcome';
import type { Organization } from './organization';
import type { Parameters } from './parameters';
import type { Patient } from './patient';
import type { PaymentNotice } from './paymentNotice';
import type { PaymentReconciliation } from './paymentReconciliation';
import type { Person } from './person';
import type { PlanDefinition } from './planDefinition';
import type { Practitioner } from './practitioner';
import type { PractitionerRole } from './practitionerRole';
import type { Procedure } from './procedure';
import type { ProcedureRequest } from './procedureRequest';
import type { ProcessRequest } from './processRequest';
import type { ProcessResponse } from './processResponse';
import type { Provenance } from './provenance';
import type { Questionnaire } from './questionnaire';
import type { QuestionnaireResponse } from './questionnaireResponse';
import type { ReferralRequest } from './referralRequest';
import type { RelatedPerson } from './relatedPerson';
import type { RequestGroup } from './requestGroup';
import type { ResearchStudy } from './researchStudy';
import type { ResearchSubject } from './researchSubject';
import type { RiskAssessment } from './riskAssessment';
import type { Schedule } from './schedule';
import type { SearchParameter } from './searchParameter';
import type { Sequence } from './sequence';
import type { ServiceDefinition } from './serviceDefinition';
import type { Slot } from './slot';
import type { Specimen } from './specimen';
import type { StructureDefinition } from './structureDefinition';
import type { StructureMap } from './structureMap';
import type { Subscription } from './subscription';
import type { Substance } from './substance';
import type { SupplyDelivery } from './supplyDelivery';
import type { SupplyRequest } from './supplyRequest';
import type { Task } from './task';
import type { TestReport } from './testReport';
import type { TestScript } from './testScript';
import type { ValueSet } from './valueSet';
import type { VisionPrescription } from './visionPrescription';

/** Any FHIR R3 resource. Checking `resourceType` narrows it to one resource type. */
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
  | BodySite
  | Bundle
  | CapabilityStatement
  | CarePlan
  | CareTeam
  | ChargeItem
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
  | DataElement
  | DetectedIssue
  | Device
  | DeviceComponent
  | DeviceMetric
  | DeviceRequest
  | DeviceUseStatement
  | DiagnosticReport
  | DocumentManifest
  | DocumentReference
  | EligibilityRequest
  | EligibilityResponse
  | Encounter
  | Endpoint
  | EnrollmentRequest
  | EnrollmentResponse
  | EpisodeOfCare
  | ExpansionProfile
  | ExplanationOfBenefit
  | FamilyMemberHistory
  | Flag
  | Goal
  | GraphDefinition
  | Group
  | GuidanceResponse
  | HealthcareService
  | ImagingManifest
  | ImagingStudy
  | Immunization
  | ImmunizationRecommendation
  | ImplementationGuide
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
  | MedicationRequest
  | MedicationStatement
  | MessageDefinition
  | MessageHeader
  | NamingSystem
  | NutritionOrder
  | Observation
  | OperationDefinition
  | OperationOutcome
  | Organization
  | Parameters
  | Patient
  | PaymentNotice
  | PaymentReconciliation
  | Person
  | PlanDefinition
  | Practitioner
  | PractitionerRole
  | Procedure
  | ProcedureRequest
  | ProcessRequest
  | ProcessResponse
  | Provenance
  | Questionnaire
  | QuestionnaireResponse
  | ReferralRequest
  | RelatedPerson
  | RequestGroup
  | ResearchStudy
  | ResearchSubject
  | RiskAssessment
  | Schedule
  | SearchParameter
  | Sequence
  | ServiceDefinition
  | Slot
  | Specimen
  | StructureDefinition
  | StructureMap
  | Subscription
  | Substance
  | SupplyDelivery
  | SupplyRequest
  | Task
  | TestReport
  | TestScript
  | ValueSet
  | VisionPrescription;
