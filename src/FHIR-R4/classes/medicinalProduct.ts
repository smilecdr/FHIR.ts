/**
 * Account-ActivityDefinition-AdverseEvent-AllergyIntolerance-Appointment-AppointmentResponse-AuditEvent-Basic-Binary-BiologicallyDerivedProduct-BodyStructure-Bundle-CapabilityStatement-CarePlan-CareTeam-CatalogEntry-ChargeItem-ChargeItemDefinition-Claim-ClaimResponse-ClinicalImpression-CodeSystem-Communication-CommunicationRequest-CompartmentDefinition-Composition-ConceptMap-Condition-Consent-Contract-Coverage-CoverageEligibilityRequest-CoverageEligibilityResponse-DetectedIssue-Device-DeviceDefinition-DeviceMetric-DeviceRequest-DeviceUseStatement-DiagnosticReport-DocumentManifest-DocumentReference-EffectEvidenceSynthesis-Encounter-Endpoint-EnrollmentRequest-EnrollmentResponse-EpisodeOfCare-EventDefinition-Evidence-EvidenceVariable-ExampleScenario-ExplanationOfBenefit-FamilyMemberHistory-Flag-Goal-GraphDefinition-Group-GuidanceResponse-HealthcareService-ImagingStudy-Immunization-ImmunizationEvaluation-ImmunizationRecommendation-ImplementationGuide-InsurancePlan-Invoice-Library-Linkage-List-Location-Measure-MeasureReport-Media-Medication-MedicationAdministration-MedicationDispense-MedicationKnowledge-MedicationRequest-MedicationStatement-MedicinalProduct-MedicinalProductAuthorization-MedicinalProductContraindication-MedicinalProductIndication-MedicinalProductIngredient-MedicinalProductInteraction-MedicinalProductManufactured-MedicinalProductPackaged-MedicinalProductPharmaceutical-MedicinalProductUndesirableEffect-MessageDefinition-MessageHeader-MolecularSequence-NamingSystem-NutritionOrder-Observation-ObservationDefinition-OperationDefinition-OperationOutcome-Organization-OrganizationAffiliation-Parameters-Patient-PaymentNotice-PaymentReconciliation-Person-PlanDefinition-Practitioner-PractitionerRole-Procedure-Provenance-Questionnaire-QuestionnaireResponse-RelatedPerson-RequestGroup-ResearchDefinition-ResearchElementDefinition-ResearchStudy-ResearchSubject-RiskAssessment-RiskEvidenceSynthesis-Schedule-SearchParameter-ServiceRequest-Slot-Specimen-SpecimenDefinition-StructureDefinition-StructureMap-Subscription-Substance-SubstanceNucleicAcid-SubstancePolymer-SubstanceProtein-SubstanceReferenceInformation-SubstanceSourceMaterial-SubstanceSpecification-SupplyDelivery-SupplyRequest-Task-TerminologyCapabilities-TestReport-TestScript-ValueSet-VerificationResult-VisionPrescription--FHIRAPI
 * Swagger for FHIR Resources Account, ActivityDefinition, AdverseEvent, AllergyIntolerance, Appointment, AppointmentResponse, AuditEvent, Basic, Binary, BiologicallyDerivedProduct, BodyStructure, Bundle, CapabilityStatement, CarePlan, CareTeam, CatalogEntry, ChargeItem, ChargeItemDefinition, Claim, ClaimResponse, ClinicalImpression, CodeSystem, Communication, CommunicationRequest, CompartmentDefinition, Composition, ConceptMap, Condition, Consent, Contract, Coverage, CoverageEligibilityRequest, CoverageEligibilityResponse, DetectedIssue, Device, DeviceDefinition, DeviceMetric, DeviceRequest, DeviceUseStatement, DiagnosticReport, DocumentManifest, DocumentReference, EffectEvidenceSynthesis, Encounter, Endpoint, EnrollmentRequest, EnrollmentResponse, EpisodeOfCare, EventDefinition, Evidence, EvidenceVariable, ExampleScenario, ExplanationOfBenefit, FamilyMemberHistory, Flag, Goal, GraphDefinition, Group, GuidanceResponse, HealthcareService, ImagingStudy, Immunization, ImmunizationEvaluation, ImmunizationRecommendation, ImplementationGuide, InsurancePlan, Invoice, Library, Linkage, List, Location, Measure, MeasureReport, Media, Medication, MedicationAdministration, MedicationDispense, MedicationKnowledge, MedicationRequest, MedicationStatement, MedicinalProduct, MedicinalProductAuthorization, MedicinalProductContraindication, MedicinalProductIndication, MedicinalProductIngredient, MedicinalProductInteraction, MedicinalProductManufactured, MedicinalProductPackaged, MedicinalProductPharmaceutical, MedicinalProductUndesirableEffect, MessageDefinition, MessageHeader, MolecularSequence, NamingSystem, NutritionOrder, Observation, ObservationDefinition, OperationDefinition, OperationOutcome, Organization, OrganizationAffiliation, Parameters, Patient, PaymentNotice, PaymentReconciliation, Person, PlanDefinition, Practitioner, PractitionerRole, Procedure, Provenance, Questionnaire, QuestionnaireResponse, RelatedPerson, RequestGroup, ResearchDefinition, ResearchElementDefinition, ResearchStudy, ResearchSubject, RiskAssessment, RiskEvidenceSynthesis, Schedule, SearchParameter, ServiceRequest, Slot, Specimen, SpecimenDefinition, StructureDefinition, StructureMap, Subscription, Substance, SubstanceNucleicAcid, SubstancePolymer, SubstanceProtein, SubstanceReferenceInformation, SubstanceSourceMaterial, SubstanceSpecification, SupplyDelivery, SupplyRequest, Task, TerminologyCapabilities, TestReport, TestScript, ValueSet, VerificationResult, VisionPrescription
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Code } from './code';
import { CodeableConcept } from './codeableConcept';
import { Coding } from './coding';
import { DomainResource } from './domainResource';
import { Extension } from './extension';

import { Identifier } from './identifier';
import { MarketingStatus } from './marketingStatus';
import { MedicinalProductManufacturingBusinessOperation } from './medicinalProductManufacturingBusinessOperation';
import { MedicinalProductName } from './medicinalProductName';
import { MedicinalProductSpecialDesignation } from './medicinalProductSpecialDesignation';
import { Meta } from './meta';
import { Narrative } from './narrative';
import { Reference } from './reference';
import { Uri } from './uri';


/**
 * Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use).
 */
export class MedicinalProduct extends DomainResource { 
    /**
     * This is a MedicinalProduct resource
     */
    resourceType: string;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
     */
    id?: string;
    /**
     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
     */
    meta?: Meta;
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: Uri;
    /**
     * The base language in which the resource is written.
     */
    language?: Code;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it \"clinically safe\" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
     */
    text?: Narrative;
    /**
     * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Array<Extension>;
    /**
     * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Array<Extension>;
    /**
     * Business identifier for this product. Could be an MPID.
     */
    identifier?: Array<Identifier>;
    /**
     * Regulatory type, e.g. Investigational or Authorized.
     */
    type?: CodeableConcept;
    /**
     * If this medicine applies to human or veterinary uses.
     */
    domain?: Coding;
    /**
     * The dose form for a single part product, or combined form of a multiple part product.
     */
    combinedPharmaceuticalDoseForm?: CodeableConcept;
    /**
     * The legal status of supply of the medicinal product as classified by the regulator.
     */
    legalStatusOfSupply?: CodeableConcept;
    /**
     * Whether the Medicinal Product is subject to additional monitoring for regulatory reasons.
     */
    additionalMonitoringIndicator?: CodeableConcept;
    /**
     * Whether the Medicinal Product is subject to special measures for regulatory reasons.
     */
    specialMeasures?: Array<string>;
    /**
     * If authorised for use in children.
     */
    paediatricUseIndicator?: CodeableConcept;
    /**
     * Allows the product to be classified by various systems.
     */
    productClassification?: Array<CodeableConcept>;
    /**
     * Marketing status of the medicinal product, in contrast to marketing authorizaton.
     */
    marketingStatus?: Array<MarketingStatus>;
    /**
     * Pharmaceutical aspects of product.
     */
    pharmaceuticalProduct?: Array<Reference>;
    /**
     * Package representation for the product.
     */
    packagedMedicinalProduct?: Array<Reference>;
    /**
     * Supporting documentation, typically for regulatory submission.
     */
    attachedDocument?: Array<Reference>;
    /**
     * A master file for to the medicinal product (e.g. Pharmacovigilance System Master File).
     */
    masterFile?: Array<Reference>;
    /**
     * A product specific contact, person (in a role), or an organization.
     */
    contact?: Array<Reference>;
    /**
     * Clinical trials or studies that this product is involved in.
     */
    clinicalTrial?: Array<Reference>;
    /**
     * The product's name, including full name and possibly coded parts.
     */
    name: Array<MedicinalProductName>;
    /**
     * Reference to another product, e.g. for linking authorised to investigational product.
     */
    crossReference?: Array<Identifier>;
    /**
     * An operation applied to the product, for manufacturing or adminsitrative purpose.
     */
    manufacturingBusinessOperation?: Array<MedicinalProductManufacturingBusinessOperation>;
    /**
     * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease.
     */
    specialDesignation?: Array<MedicinalProductSpecialDesignation>;
}
