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
import { Annotation } from './annotation';
import { Code } from './code';
import { CodeableConcept } from './codeableConcept';
import { DateTime } from './dateTime';
import { DomainResource } from './domainResource';
import { Extension } from './extension';

import { Identifier } from './identifier';
import { InvoiceLineItem } from './invoiceLineItem';
import { InvoiceParticipant } from './invoiceParticipant';
import { InvoicePriceComponent } from './invoicePriceComponent';
import { Markdown } from './markdown';
import { Meta } from './meta';
import { Money } from './money';
import { Narrative } from './narrative';
import { Reference } from './reference';
import { Uri } from './uri';


/**
 * Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose.
 */
export class Invoice extends DomainResource { 
    /**
     * This is a Invoice resource
     */
    resourceType: 'Invoice';
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
     * Identifier of this Invoice, often used for reference in correspondence about this invoice or for tracking of payments.
     */
    identifier?: Array<Identifier>;
    /**
     * The current state of the Invoice.
     */
    status?: Invoice.StatusEnum;
    /**
     * In case of Invoice cancellation a reason must be given (entered in error, superseded by corrected invoice etc.).
     */
    cancelledReason?: string;
    /**
     * Type of Invoice depending on domain, realm an usage (e.g. internal/external, dental, preliminary).
     */
    type?: CodeableConcept;
    /**
     * The individual or set of individuals receiving the goods and services billed in this invoice.
     */
    subject?: Reference;
    /**
     * The individual or Organization responsible for balancing of this invoice.
     */
    recipient?: Reference;
    /**
     * Date/time(s) of when this Invoice was posted.
     */
    date?: Date | string;
    /**
     * Indicates who or what performed or participated in the charged service.
     */
    participant?: Array<InvoiceParticipant>;
    /**
     * The organizationissuing the Invoice.
     */
    issuer?: Reference;
    /**
     * Account which is supposed to be balanced with this Invoice.
     */
    account?: Reference;
    /**
     * Each line item represents one charge for goods and services rendered. Details such as date, code and amount are found in the referenced ChargeItem resource.
     */
    lineItem?: Array<InvoiceLineItem>;
    /**
     * The total amount for the Invoice may be calculated as the sum of the line items with surcharges/deductions that apply in certain conditions.  The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the total price was calculated.
     */
    totalPriceComponent?: Array<InvoicePriceComponent>;
    /**
     * Invoice total , taxes excluded.
     */
    totalNet?: Money;
    /**
     * Invoice total, tax included.
     */
    totalGross?: Money;
    /**
     * Payment details such as banking details, period of payment, deductibles, methods of payment.
     */
    paymentTerms?: Markdown;
    /**
     * Comments made about the invoice by the issuer, subject, or other participants.
     */
    note?: Array<Annotation>;
}
export namespace Invoice {
    export type StatusEnum = 'draft' | 'issued' | 'balanced' | 'cancelled' | 'entered-in-error';
    export const StatusEnum = {
        Draft: 'draft' as StatusEnum,
        Issued: 'issued' as StatusEnum,
        Balanced: 'balanced' as StatusEnum,
        Cancelled: 'cancelled' as StatusEnum,
        EnteredInError: 'entered-in-error' as StatusEnum
    };
}
