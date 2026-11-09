/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

// Codes of the value sets that FHIR binds to elements with strength "required".

/** AccountStatus (http://hl7.org/fhir/ValueSet/account-status) */
export const AccountStatus = {
  Active: 'active',
  Inactive: 'inactive',
  EnteredInError: 'entered-in-error',
  OnHold: 'on-hold',
  Unknown: 'unknown',
} as const;
export type AccountStatus = (typeof AccountStatus)[keyof typeof AccountStatus];

/** ActionCardinalityBehavior (http://hl7.org/fhir/ValueSet/action-cardinality-behavior) */
export const ActionCardinalityBehavior = { Single: 'single', Multiple: 'multiple' } as const;
export type ActionCardinalityBehavior =
  (typeof ActionCardinalityBehavior)[keyof typeof ActionCardinalityBehavior];

/** ActionConditionKind (http://hl7.org/fhir/ValueSet/action-condition-kind) */
export const ActionConditionKind = {
  Applicability: 'applicability',
  Start: 'start',
  Stop: 'stop',
} as const;
export type ActionConditionKind = (typeof ActionConditionKind)[keyof typeof ActionConditionKind];

/** ActionGroupingBehavior (http://hl7.org/fhir/ValueSet/action-grouping-behavior) */
export const ActionGroupingBehavior = {
  VisualGroup: 'visual-group',
  LogicalGroup: 'logical-group',
  SentenceGroup: 'sentence-group',
} as const;
export type ActionGroupingBehavior =
  (typeof ActionGroupingBehavior)[keyof typeof ActionGroupingBehavior];

/** ActionParticipantType (http://hl7.org/fhir/ValueSet/action-participant-type) */
export const ActionParticipantType = {
  Patient: 'patient',
  Practitioner: 'practitioner',
  RelatedPerson: 'related-person',
  Device: 'device',
} as const;
export type ActionParticipantType =
  (typeof ActionParticipantType)[keyof typeof ActionParticipantType];

/** ActionPrecheckBehavior (http://hl7.org/fhir/ValueSet/action-precheck-behavior) */
export const ActionPrecheckBehavior = { Yes: 'yes', No: 'no' } as const;
export type ActionPrecheckBehavior =
  (typeof ActionPrecheckBehavior)[keyof typeof ActionPrecheckBehavior];

/** ActionRelationshipType (http://hl7.org/fhir/ValueSet/action-relationship-type) */
export const ActionRelationshipType = {
  BeforeStart: 'before-start',
  Before: 'before',
  BeforeEnd: 'before-end',
  ConcurrentWithStart: 'concurrent-with-start',
  Concurrent: 'concurrent',
  ConcurrentWithEnd: 'concurrent-with-end',
  AfterStart: 'after-start',
  After: 'after',
  AfterEnd: 'after-end',
} as const;
export type ActionRelationshipType =
  (typeof ActionRelationshipType)[keyof typeof ActionRelationshipType];

/** ActionRequiredBehavior (http://hl7.org/fhir/ValueSet/action-required-behavior) */
export const ActionRequiredBehavior = {
  Must: 'must',
  Could: 'could',
  MustUnlessDocumented: 'must-unless-documented',
} as const;
export type ActionRequiredBehavior =
  (typeof ActionRequiredBehavior)[keyof typeof ActionRequiredBehavior];

/** ActionSelectionBehavior (http://hl7.org/fhir/ValueSet/action-selection-behavior) */
export const ActionSelectionBehavior = {
  Any: 'any',
  All: 'all',
  AllOrNone: 'all-or-none',
  ExactlyOne: 'exactly-one',
  AtMostOne: 'at-most-one',
  OneOrMore: 'one-or-more',
} as const;
export type ActionSelectionBehavior =
  (typeof ActionSelectionBehavior)[keyof typeof ActionSelectionBehavior];

/** AddressType (http://hl7.org/fhir/ValueSet/address-type) */
export const AddressType = { Postal: 'postal', Physical: 'physical', Both: 'both' } as const;
export type AddressType = (typeof AddressType)[keyof typeof AddressType];

/** AddressUse (http://hl7.org/fhir/ValueSet/address-use) */
export const AddressUse = {
  Home: 'home',
  Work: 'work',
  Temp: 'temp',
  Old: 'old',
  Billing: 'billing',
} as const;
export type AddressUse = (typeof AddressUse)[keyof typeof AddressUse];

/** AdministrativeGender (http://hl7.org/fhir/ValueSet/administrative-gender) */
export const AdministrativeGender = {
  Male: 'male',
  Female: 'female',
  Other: 'other',
  Unknown: 'unknown',
} as const;
export type AdministrativeGender = (typeof AdministrativeGender)[keyof typeof AdministrativeGender];

/** AdverseEventActuality (http://hl7.org/fhir/ValueSet/adverse-event-actuality) */
export const AdverseEventActuality = { Actual: 'actual', Potential: 'potential' } as const;
export type AdverseEventActuality =
  (typeof AdverseEventActuality)[keyof typeof AdverseEventActuality];

/** AggregationMode (http://hl7.org/fhir/ValueSet/resource-aggregation-mode) */
export const AggregationMode = {
  Contained: 'contained',
  Referenced: 'referenced',
  Bundled: 'bundled',
} as const;
export type AggregationMode = (typeof AggregationMode)[keyof typeof AggregationMode];

/** AllergyIntoleranceCategory (http://hl7.org/fhir/ValueSet/allergy-intolerance-category) */
export const AllergyIntoleranceCategory = {
  Food: 'food',
  Medication: 'medication',
  Environment: 'environment',
  Biologic: 'biologic',
} as const;
export type AllergyIntoleranceCategory =
  (typeof AllergyIntoleranceCategory)[keyof typeof AllergyIntoleranceCategory];

/** AllergyIntoleranceCriticality (http://hl7.org/fhir/ValueSet/allergy-intolerance-criticality) */
export const AllergyIntoleranceCriticality = {
  Low: 'low',
  High: 'high',
  UnableToAssess: 'unable-to-assess',
} as const;
export type AllergyIntoleranceCriticality =
  (typeof AllergyIntoleranceCriticality)[keyof typeof AllergyIntoleranceCriticality];

/** AllergyIntoleranceSeverity (http://hl7.org/fhir/ValueSet/reaction-event-severity) */
export const AllergyIntoleranceSeverity = {
  Mild: 'mild',
  Moderate: 'moderate',
  Severe: 'severe',
} as const;
export type AllergyIntoleranceSeverity =
  (typeof AllergyIntoleranceSeverity)[keyof typeof AllergyIntoleranceSeverity];

/** AllergyIntoleranceType (http://hl7.org/fhir/ValueSet/allergy-intolerance-type) */
export const AllergyIntoleranceType = { Allergy: 'allergy', Intolerance: 'intolerance' } as const;
export type AllergyIntoleranceType =
  (typeof AllergyIntoleranceType)[keyof typeof AllergyIntoleranceType];

/** AppointmentStatus (http://hl7.org/fhir/ValueSet/appointmentstatus) */
export const AppointmentStatus = {
  Proposed: 'proposed',
  Pending: 'pending',
  Booked: 'booked',
  Arrived: 'arrived',
  Fulfilled: 'fulfilled',
  Cancelled: 'cancelled',
  Noshow: 'noshow',
  EnteredInError: 'entered-in-error',
  CheckedIn: 'checked-in',
  Waitlist: 'waitlist',
} as const;
export type AppointmentStatus = (typeof AppointmentStatus)[keyof typeof AppointmentStatus];

/** AssertionDirectionType (http://hl7.org/fhir/ValueSet/assert-direction-codes) */
export const AssertionDirectionType = { Response: 'response', Request: 'request' } as const;
export type AssertionDirectionType =
  (typeof AssertionDirectionType)[keyof typeof AssertionDirectionType];

/** AssertionOperatorType (http://hl7.org/fhir/ValueSet/assert-operator-codes) */
export const AssertionOperatorType = {
  Equals: 'equals',
  NotEquals: 'notEquals',
  In: 'in',
  NotIn: 'notIn',
  GreaterThan: 'greaterThan',
  LessThan: 'lessThan',
  Empty: 'empty',
  NotEmpty: 'notEmpty',
  Contains: 'contains',
  NotContains: 'notContains',
  Eval: 'eval',
} as const;
export type AssertionOperatorType =
  (typeof AssertionOperatorType)[keyof typeof AssertionOperatorType];

/** AssertionResponseTypes (http://hl7.org/fhir/ValueSet/assert-response-code-types) */
export const AssertionResponseTypes = {
  Okay: 'okay',
  Created: 'created',
  NoContent: 'noContent',
  NotModified: 'notModified',
  Bad: 'bad',
  Forbidden: 'forbidden',
  NotFound: 'notFound',
  MethodNotAllowed: 'methodNotAllowed',
  Conflict: 'conflict',
  Gone: 'gone',
  PreconditionFailed: 'preconditionFailed',
  Unprocessable: 'unprocessable',
} as const;
export type AssertionResponseTypes =
  (typeof AssertionResponseTypes)[keyof typeof AssertionResponseTypes];

/** AuditEventAction (http://hl7.org/fhir/ValueSet/audit-event-action) */
export const AuditEventAction = { C: 'C', R: 'R', U: 'U', D: 'D', E: 'E' } as const;
export type AuditEventAction = (typeof AuditEventAction)[keyof typeof AuditEventAction];

/** AuditEventAgentNetworkType (http://hl7.org/fhir/ValueSet/network-type) */
export const AuditEventAgentNetworkType = { _1: '1', _2: '2', _3: '3', _4: '4', _5: '5' } as const;
export type AuditEventAgentNetworkType =
  (typeof AuditEventAgentNetworkType)[keyof typeof AuditEventAgentNetworkType];

/** AuditEventOutcome (http://hl7.org/fhir/ValueSet/audit-event-outcome) */
export const AuditEventOutcome = { _0: '0', _4: '4', _8: '8', _12: '12' } as const;
export type AuditEventOutcome = (typeof AuditEventOutcome)[keyof typeof AuditEventOutcome];

/** BindingStrength (http://hl7.org/fhir/ValueSet/binding-strength) */
export const BindingStrength = {
  Required: 'required',
  Extensible: 'extensible',
  Preferred: 'preferred',
  Example: 'example',
} as const;
export type BindingStrength = (typeof BindingStrength)[keyof typeof BindingStrength];

/** BiologicallyDerivedProductCategory (http://hl7.org/fhir/ValueSet/product-category) */
export const BiologicallyDerivedProductCategory = {
  Organ: 'organ',
  Tissue: 'tissue',
  Fluid: 'fluid',
  Cells: 'cells',
  BiologicalAgent: 'biologicalAgent',
} as const;
export type BiologicallyDerivedProductCategory =
  (typeof BiologicallyDerivedProductCategory)[keyof typeof BiologicallyDerivedProductCategory];

/** BiologicallyDerivedProductStatus (http://hl7.org/fhir/ValueSet/product-status) */
export const BiologicallyDerivedProductStatus = {
  Available: 'available',
  Unavailable: 'unavailable',
} as const;
export type BiologicallyDerivedProductStatus =
  (typeof BiologicallyDerivedProductStatus)[keyof typeof BiologicallyDerivedProductStatus];

/** BiologicallyDerivedProductStorageScale (http://hl7.org/fhir/ValueSet/product-storage-scale) */
export const BiologicallyDerivedProductStorageScale = {
  Farenheit: 'farenheit',
  Celsius: 'celsius',
  Kelvin: 'kelvin',
} as const;
export type BiologicallyDerivedProductStorageScale =
  (typeof BiologicallyDerivedProductStorageScale)[keyof typeof BiologicallyDerivedProductStorageScale];

/** BundleType (http://hl7.org/fhir/ValueSet/bundle-type) */
export const BundleType = {
  Document: 'document',
  Message: 'message',
  Transaction: 'transaction',
  TransactionResponse: 'transaction-response',
  Batch: 'batch',
  BatchResponse: 'batch-response',
  History: 'history',
  Searchset: 'searchset',
  Collection: 'collection',
} as const;
export type BundleType = (typeof BundleType)[keyof typeof BundleType];

/** CapabilityStatementKind (http://hl7.org/fhir/ValueSet/capability-statement-kind) */
export const CapabilityStatementKind = {
  Instance: 'instance',
  Capability: 'capability',
  Requirements: 'requirements',
} as const;
export type CapabilityStatementKind =
  (typeof CapabilityStatementKind)[keyof typeof CapabilityStatementKind];

/** Care Plan Activity Kind (http://hl7.org/fhir/ValueSet/care-plan-activity-kind) */
export const CarePlanActivityKind = {
  Appointment: 'Appointment',
  CommunicationRequest: 'CommunicationRequest',
  DeviceRequest: 'DeviceRequest',
  MedicationRequest: 'MedicationRequest',
  NutritionOrder: 'NutritionOrder',
  Task: 'Task',
  ServiceRequest: 'ServiceRequest',
  VisionPrescription: 'VisionPrescription',
} as const;
export type CarePlanActivityKind = (typeof CarePlanActivityKind)[keyof typeof CarePlanActivityKind];

/** CarePlanActivityStatus (http://hl7.org/fhir/ValueSet/care-plan-activity-status) */
export const CarePlanActivityStatus = {
  NotStarted: 'not-started',
  Scheduled: 'scheduled',
  InProgress: 'in-progress',
  OnHold: 'on-hold',
  Completed: 'completed',
  Cancelled: 'cancelled',
  Stopped: 'stopped',
  Unknown: 'unknown',
  EnteredInError: 'entered-in-error',
} as const;
export type CarePlanActivityStatus =
  (typeof CarePlanActivityStatus)[keyof typeof CarePlanActivityStatus];

/** Care Plan Intent (http://hl7.org/fhir/ValueSet/care-plan-intent) */
export const CarePlanIntent = {
  Proposal: 'proposal',
  Plan: 'plan',
  Order: 'order',
  Option: 'option',
} as const;
export type CarePlanIntent = (typeof CarePlanIntent)[keyof typeof CarePlanIntent];

/** CareTeamStatus (http://hl7.org/fhir/ValueSet/care-team-status) */
export const CareTeamStatus = {
  Proposed: 'proposed',
  Active: 'active',
  Suspended: 'suspended',
  Inactive: 'inactive',
  EnteredInError: 'entered-in-error',
} as const;
export type CareTeamStatus = (typeof CareTeamStatus)[keyof typeof CareTeamStatus];

/** CatalogEntryRelationType (http://hl7.org/fhir/ValueSet/relation-type) */
export const CatalogEntryRelationType = {
  Triggers: 'triggers',
  IsReplacedBy: 'is-replaced-by',
} as const;
export type CatalogEntryRelationType =
  (typeof CatalogEntryRelationType)[keyof typeof CatalogEntryRelationType];

/** ChargeItemStatus (http://hl7.org/fhir/ValueSet/chargeitem-status) */
export const ChargeItemStatus = {
  Planned: 'planned',
  Billable: 'billable',
  NotBillable: 'not-billable',
  Aborted: 'aborted',
  Billed: 'billed',
  EnteredInError: 'entered-in-error',
  Unknown: 'unknown',
} as const;
export type ChargeItemStatus = (typeof ChargeItemStatus)[keyof typeof ChargeItemStatus];

/** Claim Processing Codes (http://hl7.org/fhir/ValueSet/remittance-outcome) */
export const ClaimProcessingCodes = {
  Queued: 'queued',
  Complete: 'complete',
  Error: 'error',
  Partial: 'partial',
} as const;
export type ClaimProcessingCodes = (typeof ClaimProcessingCodes)[keyof typeof ClaimProcessingCodes];

/** Clinical Impression Status (http://hl7.org/fhir/ValueSet/clinicalimpression-status) */
export const ClinicalImpressionStatus = {
  InProgress: 'in-progress',
  Completed: 'completed',
  EnteredInError: 'entered-in-error',
} as const;
export type ClinicalImpressionStatus =
  (typeof ClinicalImpressionStatus)[keyof typeof ClinicalImpressionStatus];

/** CodeSearchSupport (http://hl7.org/fhir/ValueSet/code-search-support) */
export const CodeSearchSupport = { Explicit: 'explicit', All: 'all' } as const;
export type CodeSearchSupport = (typeof CodeSearchSupport)[keyof typeof CodeSearchSupport];

/** CodeSystemContentMode (http://hl7.org/fhir/ValueSet/codesystem-content-mode) */
export const CodeSystemContentMode = {
  NotPresent: 'not-present',
  Example: 'example',
  Fragment: 'fragment',
  Complete: 'complete',
  Supplement: 'supplement',
} as const;
export type CodeSystemContentMode =
  (typeof CodeSystemContentMode)[keyof typeof CodeSystemContentMode];

/** CodeSystemHierarchyMeaning (http://hl7.org/fhir/ValueSet/codesystem-hierarchy-meaning) */
export const CodeSystemHierarchyMeaning = {
  GroupedBy: 'grouped-by',
  IsA: 'is-a',
  PartOf: 'part-of',
  ClassifiedWith: 'classified-with',
} as const;
export type CodeSystemHierarchyMeaning =
  (typeof CodeSystemHierarchyMeaning)[keyof typeof CodeSystemHierarchyMeaning];

/** CompartmentType (http://hl7.org/fhir/ValueSet/compartment-type) */
export const CompartmentType = {
  Patient: 'Patient',
  Encounter: 'Encounter',
  RelatedPerson: 'RelatedPerson',
  Practitioner: 'Practitioner',
  Device: 'Device',
} as const;
export type CompartmentType = (typeof CompartmentType)[keyof typeof CompartmentType];

/** CompositionAttestationMode (http://hl7.org/fhir/ValueSet/composition-attestation-mode) */
export const CompositionAttestationMode = {
  Personal: 'personal',
  Professional: 'professional',
  Legal: 'legal',
  Official: 'official',
} as const;
export type CompositionAttestationMode =
  (typeof CompositionAttestationMode)[keyof typeof CompositionAttestationMode];

/** CompositionStatus (http://hl7.org/fhir/ValueSet/composition-status) */
export const CompositionStatus = {
  Preliminary: 'preliminary',
  Final: 'final',
  Amended: 'amended',
  EnteredInError: 'entered-in-error',
} as const;
export type CompositionStatus = (typeof CompositionStatus)[keyof typeof CompositionStatus];

/** ConceptMapEquivalence (http://hl7.org/fhir/ValueSet/concept-map-equivalence) */
export const ConceptMapEquivalence = {
  Relatedto: 'relatedto',
  Equivalent: 'equivalent',
  Equal: 'equal',
  Wider: 'wider',
  Subsumes: 'subsumes',
  Narrower: 'narrower',
  Specializes: 'specializes',
  Inexact: 'inexact',
  Unmatched: 'unmatched',
  Disjoint: 'disjoint',
} as const;
export type ConceptMapEquivalence =
  (typeof ConceptMapEquivalence)[keyof typeof ConceptMapEquivalence];

/** ConceptMapGroupUnmappedMode (http://hl7.org/fhir/ValueSet/conceptmap-unmapped-mode) */
export const ConceptMapGroupUnmappedMode = {
  Provided: 'provided',
  Fixed: 'fixed',
  OtherMap: 'other-map',
} as const;
export type ConceptMapGroupUnmappedMode =
  (typeof ConceptMapGroupUnmappedMode)[keyof typeof ConceptMapGroupUnmappedMode];

/** ConditionalDeleteStatus (http://hl7.org/fhir/ValueSet/conditional-delete-status) */
export const ConditionalDeleteStatus = {
  NotSupported: 'not-supported',
  Single: 'single',
  Multiple: 'multiple',
} as const;
export type ConditionalDeleteStatus =
  (typeof ConditionalDeleteStatus)[keyof typeof ConditionalDeleteStatus];

/** ConditionalReadStatus (http://hl7.org/fhir/ValueSet/conditional-read-status) */
export const ConditionalReadStatus = {
  NotSupported: 'not-supported',
  ModifiedSince: 'modified-since',
  NotMatch: 'not-match',
  FullSupport: 'full-support',
} as const;
export type ConditionalReadStatus =
  (typeof ConditionalReadStatus)[keyof typeof ConditionalReadStatus];

/** ConsentDataMeaning (http://hl7.org/fhir/ValueSet/consent-data-meaning) */
export const ConsentDataMeaning = {
  Instance: 'instance',
  Related: 'related',
  Dependents: 'dependents',
  Authoredby: 'authoredby',
} as const;
export type ConsentDataMeaning = (typeof ConsentDataMeaning)[keyof typeof ConsentDataMeaning];

/** ConsentProvisionType (http://hl7.org/fhir/ValueSet/consent-provision-type) */
export const ConsentProvisionType = { Deny: 'deny', Permit: 'permit' } as const;
export type ConsentProvisionType = (typeof ConsentProvisionType)[keyof typeof ConsentProvisionType];

/** ConsentState (http://hl7.org/fhir/ValueSet/consent-state-codes) */
export const ConsentState = {
  Draft: 'draft',
  Proposed: 'proposed',
  Active: 'active',
  Rejected: 'rejected',
  Inactive: 'inactive',
  EnteredInError: 'entered-in-error',
} as const;
export type ConsentState = (typeof ConsentState)[keyof typeof ConsentState];

/** ConstraintSeverity (http://hl7.org/fhir/ValueSet/constraint-severity) */
export const ConstraintSeverity = { Error: 'error', Warning: 'warning' } as const;
export type ConstraintSeverity = (typeof ConstraintSeverity)[keyof typeof ConstraintSeverity];

/** ContactPointSystem (http://hl7.org/fhir/ValueSet/contact-point-system) */
export const ContactPointSystem = {
  Phone: 'phone',
  Fax: 'fax',
  Email: 'email',
  Pager: 'pager',
  Url: 'url',
  Sms: 'sms',
  Other: 'other',
} as const;
export type ContactPointSystem = (typeof ContactPointSystem)[keyof typeof ContactPointSystem];

/** ContactPointUse (http://hl7.org/fhir/ValueSet/contact-point-use) */
export const ContactPointUse = {
  Home: 'home',
  Work: 'work',
  Temp: 'temp',
  Old: 'old',
  Mobile: 'mobile',
} as const;
export type ContactPointUse = (typeof ContactPointUse)[keyof typeof ContactPointUse];

/** Contract Resource Publication Status codes (http://hl7.org/fhir/ValueSet/contract-publicationstatus) */
export const ContractResourcePublicationStatusCodes = {
  Amended: 'amended',
  Appended: 'appended',
  Cancelled: 'cancelled',
  Disputed: 'disputed',
  EnteredInError: 'entered-in-error',
  Executable: 'executable',
  Executed: 'executed',
  Negotiable: 'negotiable',
  Offered: 'offered',
  Policy: 'policy',
  Rejected: 'rejected',
  Renewed: 'renewed',
  Revoked: 'revoked',
  Resolved: 'resolved',
  Terminated: 'terminated',
} as const;
export type ContractResourcePublicationStatusCodes =
  (typeof ContractResourcePublicationStatusCodes)[keyof typeof ContractResourcePublicationStatusCodes];

/** Contract Resource Status Codes (http://hl7.org/fhir/ValueSet/contract-status) */
export const ContractResourceStatusCodes = {
  Amended: 'amended',
  Appended: 'appended',
  Cancelled: 'cancelled',
  Disputed: 'disputed',
  EnteredInError: 'entered-in-error',
  Executable: 'executable',
  Executed: 'executed',
  Negotiable: 'negotiable',
  Offered: 'offered',
  Policy: 'policy',
  Rejected: 'rejected',
  Renewed: 'renewed',
  Revoked: 'revoked',
  Resolved: 'resolved',
  Terminated: 'terminated',
} as const;
export type ContractResourceStatusCodes =
  (typeof ContractResourceStatusCodes)[keyof typeof ContractResourceStatusCodes];

/** ContributorType (http://hl7.org/fhir/ValueSet/contributor-type) */
export const ContributorType = {
  Author: 'author',
  Editor: 'editor',
  Reviewer: 'reviewer',
  Endorser: 'endorser',
} as const;
export type ContributorType = (typeof ContributorType)[keyof typeof ContributorType];

/** DaysOfWeek (http://hl7.org/fhir/ValueSet/days-of-week) */
export const DaysOfWeek = {
  Mon: 'mon',
  Tue: 'tue',
  Wed: 'wed',
  Thu: 'thu',
  Fri: 'fri',
  Sat: 'sat',
  Sun: 'sun',
} as const;
export type DaysOfWeek = (typeof DaysOfWeek)[keyof typeof DaysOfWeek];

/** DetectedIssueSeverity (http://hl7.org/fhir/ValueSet/detectedissue-severity) */
export const DetectedIssueSeverity = { High: 'high', Moderate: 'moderate', Low: 'low' } as const;
export type DetectedIssueSeverity =
  (typeof DetectedIssueSeverity)[keyof typeof DetectedIssueSeverity];

/** DeviceMetricCalibrationState (http://hl7.org/fhir/ValueSet/metric-calibration-state) */
export const DeviceMetricCalibrationState = {
  NotCalibrated: 'not-calibrated',
  CalibrationRequired: 'calibration-required',
  Calibrated: 'calibrated',
  Unspecified: 'unspecified',
} as const;
export type DeviceMetricCalibrationState =
  (typeof DeviceMetricCalibrationState)[keyof typeof DeviceMetricCalibrationState];

/** DeviceMetricCalibrationType (http://hl7.org/fhir/ValueSet/metric-calibration-type) */
export const DeviceMetricCalibrationType = {
  Unspecified: 'unspecified',
  Offset: 'offset',
  Gain: 'gain',
  TwoPoint: 'two-point',
} as const;
export type DeviceMetricCalibrationType =
  (typeof DeviceMetricCalibrationType)[keyof typeof DeviceMetricCalibrationType];

/** DeviceMetricCategory (http://hl7.org/fhir/ValueSet/metric-category) */
export const DeviceMetricCategory = {
  Measurement: 'measurement',
  Setting: 'setting',
  Calculation: 'calculation',
  Unspecified: 'unspecified',
} as const;
export type DeviceMetricCategory = (typeof DeviceMetricCategory)[keyof typeof DeviceMetricCategory];

/** DeviceMetricColor (http://hl7.org/fhir/ValueSet/metric-color) */
export const DeviceMetricColor = {
  Black: 'black',
  Red: 'red',
  Green: 'green',
  Yellow: 'yellow',
  Blue: 'blue',
  Magenta: 'magenta',
  Cyan: 'cyan',
  White: 'white',
} as const;
export type DeviceMetricColor = (typeof DeviceMetricColor)[keyof typeof DeviceMetricColor];

/** DeviceMetricOperationalStatus (http://hl7.org/fhir/ValueSet/metric-operational-status) */
export const DeviceMetricOperationalStatus = {
  On: 'on',
  Off: 'off',
  Standby: 'standby',
  EnteredInError: 'entered-in-error',
} as const;
export type DeviceMetricOperationalStatus =
  (typeof DeviceMetricOperationalStatus)[keyof typeof DeviceMetricOperationalStatus];

/** DeviceNameType (http://hl7.org/fhir/ValueSet/device-nametype) */
export const DeviceNameType = {
  UdiLabelName: 'udi-label-name',
  UserFriendlyName: 'user-friendly-name',
  PatientReportedName: 'patient-reported-name',
  ManufacturerName: 'manufacturer-name',
  ModelName: 'model-name',
  Other: 'other',
} as const;
export type DeviceNameType = (typeof DeviceNameType)[keyof typeof DeviceNameType];

/** DeviceUseStatementStatus (http://hl7.org/fhir/ValueSet/device-statement-status) */
export const DeviceUseStatementStatus = {
  Active: 'active',
  Completed: 'completed',
  EnteredInError: 'entered-in-error',
  Intended: 'intended',
  Stopped: 'stopped',
  OnHold: 'on-hold',
} as const;
export type DeviceUseStatementStatus =
  (typeof DeviceUseStatementStatus)[keyof typeof DeviceUseStatementStatus];

/** DiagnosticReportStatus (http://hl7.org/fhir/ValueSet/diagnostic-report-status) */
export const DiagnosticReportStatus = {
  Registered: 'registered',
  Partial: 'partial',
  Preliminary: 'preliminary',
  Final: 'final',
  Amended: 'amended',
  Corrected: 'corrected',
  Appended: 'appended',
  Cancelled: 'cancelled',
  EnteredInError: 'entered-in-error',
  Unknown: 'unknown',
} as const;
export type DiagnosticReportStatus =
  (typeof DiagnosticReportStatus)[keyof typeof DiagnosticReportStatus];

/** DiscriminatorType (http://hl7.org/fhir/ValueSet/discriminator-type) */
export const DiscriminatorType = {
  Value: 'value',
  Exists: 'exists',
  Pattern: 'pattern',
  Type: 'type',
  Profile: 'profile',
} as const;
export type DiscriminatorType = (typeof DiscriminatorType)[keyof typeof DiscriminatorType];

/** DocumentMode (http://hl7.org/fhir/ValueSet/document-mode) */
export const DocumentMode = { Producer: 'producer', Consumer: 'consumer' } as const;
export type DocumentMode = (typeof DocumentMode)[keyof typeof DocumentMode];

/** DocumentReferenceStatus (http://hl7.org/fhir/ValueSet/document-reference-status) */
export const DocumentReferenceStatus = {
  Current: 'current',
  Superseded: 'superseded',
  EnteredInError: 'entered-in-error',
} as const;
export type DocumentReferenceStatus =
  (typeof DocumentReferenceStatus)[keyof typeof DocumentReferenceStatus];

/** DocumentRelationshipType (http://hl7.org/fhir/ValueSet/document-relationship-type) */
export const DocumentRelationshipType = {
  Replaces: 'replaces',
  Transforms: 'transforms',
  Signs: 'signs',
  Appends: 'appends',
} as const;
export type DocumentRelationshipType =
  (typeof DocumentRelationshipType)[keyof typeof DocumentRelationshipType];

/** EligibilityRequestPurpose (http://hl7.org/fhir/ValueSet/eligibilityrequest-purpose) */
export const EligibilityRequestPurpose = {
  AuthRequirements: 'auth-requirements',
  Benefits: 'benefits',
  Discovery: 'discovery',
  Validation: 'validation',
} as const;
export type EligibilityRequestPurpose =
  (typeof EligibilityRequestPurpose)[keyof typeof EligibilityRequestPurpose];

/** EligibilityResponsePurpose (http://hl7.org/fhir/ValueSet/eligibilityresponse-purpose) */
export const EligibilityResponsePurpose = {
  AuthRequirements: 'auth-requirements',
  Benefits: 'benefits',
  Discovery: 'discovery',
  Validation: 'validation',
} as const;
export type EligibilityResponsePurpose =
  (typeof EligibilityResponsePurpose)[keyof typeof EligibilityResponsePurpose];

/** EnableWhenBehavior (http://hl7.org/fhir/ValueSet/questionnaire-enable-behavior) */
export const EnableWhenBehavior = { All: 'all', Any: 'any' } as const;
export type EnableWhenBehavior = (typeof EnableWhenBehavior)[keyof typeof EnableWhenBehavior];

/** EncounterLocationStatus (http://hl7.org/fhir/ValueSet/encounter-location-status) */
export const EncounterLocationStatus = {
  Planned: 'planned',
  Active: 'active',
  Reserved: 'reserved',
  Completed: 'completed',
} as const;
export type EncounterLocationStatus =
  (typeof EncounterLocationStatus)[keyof typeof EncounterLocationStatus];

/** EncounterStatus (http://hl7.org/fhir/ValueSet/encounter-status) */
export const EncounterStatus = {
  Planned: 'planned',
  Arrived: 'arrived',
  Triaged: 'triaged',
  InProgress: 'in-progress',
  Onleave: 'onleave',
  Finished: 'finished',
  Cancelled: 'cancelled',
  EnteredInError: 'entered-in-error',
  Unknown: 'unknown',
} as const;
export type EncounterStatus = (typeof EncounterStatus)[keyof typeof EncounterStatus];

/** EndpointStatus (http://hl7.org/fhir/ValueSet/endpoint-status) */
export const EndpointStatus = {
  Active: 'active',
  Suspended: 'suspended',
  Error: 'error',
  Off: 'off',
  EnteredInError: 'entered-in-error',
  Test: 'test',
} as const;
export type EndpointStatus = (typeof EndpointStatus)[keyof typeof EndpointStatus];

/** EpisodeOfCareStatus (http://hl7.org/fhir/ValueSet/episode-of-care-status) */
export const EpisodeOfCareStatus = {
  Planned: 'planned',
  Waitlist: 'waitlist',
  Active: 'active',
  Onhold: 'onhold',
  Finished: 'finished',
  Cancelled: 'cancelled',
  EnteredInError: 'entered-in-error',
} as const;
export type EpisodeOfCareStatus = (typeof EpisodeOfCareStatus)[keyof typeof EpisodeOfCareStatus];

/** EventCapabilityMode (http://hl7.org/fhir/ValueSet/event-capability-mode) */
export const EventCapabilityMode = { Sender: 'sender', Receiver: 'receiver' } as const;
export type EventCapabilityMode = (typeof EventCapabilityMode)[keyof typeof EventCapabilityMode];

/** EventStatus (http://hl7.org/fhir/ValueSet/event-status) */
export const EventStatus = {
  Preparation: 'preparation',
  InProgress: 'in-progress',
  NotDone: 'not-done',
  OnHold: 'on-hold',
  Stopped: 'stopped',
  Completed: 'completed',
  EnteredInError: 'entered-in-error',
  Unknown: 'unknown',
} as const;
export type EventStatus = (typeof EventStatus)[keyof typeof EventStatus];

/** EventTiming (http://hl7.org/fhir/ValueSet/event-timing) */
export const EventTiming = {
  MORN: 'MORN',
  MORNEarly: 'MORN.early',
  MORNLate: 'MORN.late',
  NOON: 'NOON',
  AFT: 'AFT',
  AFTEarly: 'AFT.early',
  AFTLate: 'AFT.late',
  EVE: 'EVE',
  EVEEarly: 'EVE.early',
  EVELate: 'EVE.late',
  NIGHT: 'NIGHT',
  PHS: 'PHS',
  HS: 'HS',
  WAKE: 'WAKE',
  C: 'C',
  CM: 'CM',
  CD: 'CD',
  CV: 'CV',
  AC: 'AC',
  ACM: 'ACM',
  ACD: 'ACD',
  ACV: 'ACV',
  PC: 'PC',
  PCM: 'PCM',
  PCD: 'PCD',
  PCV: 'PCV',
} as const;
export type EventTiming = (typeof EventTiming)[keyof typeof EventTiming];

/** EvidenceVariableType (http://hl7.org/fhir/ValueSet/variable-type) */
export const EvidenceVariableType = {
  Dichotomous: 'dichotomous',
  Continuous: 'continuous',
  Descriptive: 'descriptive',
} as const;
export type EvidenceVariableType = (typeof EvidenceVariableType)[keyof typeof EvidenceVariableType];

/** ExampleScenarioActorType (http://hl7.org/fhir/ValueSet/examplescenario-actor-type) */
export const ExampleScenarioActorType = { Person: 'person', Entity: 'entity' } as const;
export type ExampleScenarioActorType =
  (typeof ExampleScenarioActorType)[keyof typeof ExampleScenarioActorType];

/** ExplanationOfBenefitStatus (http://hl7.org/fhir/ValueSet/explanationofbenefit-status) */
export const ExplanationOfBenefitStatus = {
  Active: 'active',
  Cancelled: 'cancelled',
  Draft: 'draft',
  EnteredInError: 'entered-in-error',
} as const;
export type ExplanationOfBenefitStatus =
  (typeof ExplanationOfBenefitStatus)[keyof typeof ExplanationOfBenefitStatus];

/** ExposureState (http://hl7.org/fhir/ValueSet/exposure-state) */
export const ExposureState = {
  Exposure: 'exposure',
  ExposureAlternative: 'exposure-alternative',
} as const;
export type ExposureState = (typeof ExposureState)[keyof typeof ExposureState];

/** ExtensionContextType (http://hl7.org/fhir/ValueSet/extension-context-type) */
export const ExtensionContextType = {
  Fhirpath: 'fhirpath',
  Element: 'element',
  Extension: 'extension',
} as const;
export type ExtensionContextType = (typeof ExtensionContextType)[keyof typeof ExtensionContextType];

/** FamilyHistoryStatus (http://hl7.org/fhir/ValueSet/history-status) */
export const FamilyHistoryStatus = {
  Partial: 'partial',
  Completed: 'completed',
  EnteredInError: 'entered-in-error',
  HealthUnknown: 'health-unknown',
} as const;
export type FamilyHistoryStatus = (typeof FamilyHistoryStatus)[keyof typeof FamilyHistoryStatus];

/** FHIRAllTypes (http://hl7.org/fhir/ValueSet/all-types) */
export const FHIRAllTypes = {
  Address: 'Address',
  Age: 'Age',
  Annotation: 'Annotation',
  Attachment: 'Attachment',
  BackboneElement: 'BackboneElement',
  CodeableConcept: 'CodeableConcept',
  Coding: 'Coding',
  ContactDetail: 'ContactDetail',
  ContactPoint: 'ContactPoint',
  Contributor: 'Contributor',
  Count: 'Count',
  DataRequirement: 'DataRequirement',
  Distance: 'Distance',
  Dosage: 'Dosage',
  Duration: 'Duration',
  Element: 'Element',
  ElementDefinition: 'ElementDefinition',
  Expression: 'Expression',
  Extension: 'Extension',
  HumanName: 'HumanName',
  Identifier: 'Identifier',
  MarketingStatus: 'MarketingStatus',
  Meta: 'Meta',
  Money: 'Money',
  MoneyQuantity: 'MoneyQuantity',
  Narrative: 'Narrative',
  ParameterDefinition: 'ParameterDefinition',
  Period: 'Period',
  Population: 'Population',
  ProdCharacteristic: 'ProdCharacteristic',
  ProductShelfLife: 'ProductShelfLife',
  Quantity: 'Quantity',
  Range: 'Range',
  Ratio: 'Ratio',
  Reference: 'Reference',
  RelatedArtifact: 'RelatedArtifact',
  SampledData: 'SampledData',
  Signature: 'Signature',
  SimpleQuantity: 'SimpleQuantity',
  SubstanceAmount: 'SubstanceAmount',
  Timing: 'Timing',
  TriggerDefinition: 'TriggerDefinition',
  UsageContext: 'UsageContext',
  Base64Binary: 'base64Binary',
  Boolean: 'boolean',
  Canonical: 'canonical',
  Code: 'code',
  Date: 'date',
  DateTime: 'dateTime',
  Decimal: 'decimal',
  Id: 'id',
  Instant: 'instant',
  Integer: 'integer',
  Markdown: 'markdown',
  Oid: 'oid',
  PositiveInt: 'positiveInt',
  String: 'string',
  Time: 'time',
  UnsignedInt: 'unsignedInt',
  Uri: 'uri',
  Url: 'url',
  Uuid: 'uuid',
  Xhtml: 'xhtml',
  Account: 'Account',
  ActivityDefinition: 'ActivityDefinition',
  AdverseEvent: 'AdverseEvent',
  AllergyIntolerance: 'AllergyIntolerance',
  Appointment: 'Appointment',
  AppointmentResponse: 'AppointmentResponse',
  AuditEvent: 'AuditEvent',
  Basic: 'Basic',
  Binary: 'Binary',
  BiologicallyDerivedProduct: 'BiologicallyDerivedProduct',
  BodyStructure: 'BodyStructure',
  Bundle: 'Bundle',
  CapabilityStatement: 'CapabilityStatement',
  CarePlan: 'CarePlan',
  CareTeam: 'CareTeam',
  CatalogEntry: 'CatalogEntry',
  ChargeItem: 'ChargeItem',
  ChargeItemDefinition: 'ChargeItemDefinition',
  Claim: 'Claim',
  ClaimResponse: 'ClaimResponse',
  ClinicalImpression: 'ClinicalImpression',
  CodeSystem: 'CodeSystem',
  Communication: 'Communication',
  CommunicationRequest: 'CommunicationRequest',
  CompartmentDefinition: 'CompartmentDefinition',
  Composition: 'Composition',
  ConceptMap: 'ConceptMap',
  Condition: 'Condition',
  Consent: 'Consent',
  Contract: 'Contract',
  Coverage: 'Coverage',
  CoverageEligibilityRequest: 'CoverageEligibilityRequest',
  CoverageEligibilityResponse: 'CoverageEligibilityResponse',
  DetectedIssue: 'DetectedIssue',
  Device: 'Device',
  DeviceDefinition: 'DeviceDefinition',
  DeviceMetric: 'DeviceMetric',
  DeviceRequest: 'DeviceRequest',
  DeviceUseStatement: 'DeviceUseStatement',
  DiagnosticReport: 'DiagnosticReport',
  DocumentManifest: 'DocumentManifest',
  DocumentReference: 'DocumentReference',
  DomainResource: 'DomainResource',
  EffectEvidenceSynthesis: 'EffectEvidenceSynthesis',
  Encounter: 'Encounter',
  Endpoint: 'Endpoint',
  EnrollmentRequest: 'EnrollmentRequest',
  EnrollmentResponse: 'EnrollmentResponse',
  EpisodeOfCare: 'EpisodeOfCare',
  EventDefinition: 'EventDefinition',
  Evidence: 'Evidence',
  EvidenceVariable: 'EvidenceVariable',
  ExampleScenario: 'ExampleScenario',
  ExplanationOfBenefit: 'ExplanationOfBenefit',
  FamilyMemberHistory: 'FamilyMemberHistory',
  Flag: 'Flag',
  Goal: 'Goal',
  GraphDefinition: 'GraphDefinition',
  Group: 'Group',
  GuidanceResponse: 'GuidanceResponse',
  HealthcareService: 'HealthcareService',
  ImagingStudy: 'ImagingStudy',
  Immunization: 'Immunization',
  ImmunizationEvaluation: 'ImmunizationEvaluation',
  ImmunizationRecommendation: 'ImmunizationRecommendation',
  ImplementationGuide: 'ImplementationGuide',
  InsurancePlan: 'InsurancePlan',
  Invoice: 'Invoice',
  Library: 'Library',
  Linkage: 'Linkage',
  List: 'List',
  Location: 'Location',
  Measure: 'Measure',
  MeasureReport: 'MeasureReport',
  Media: 'Media',
  Medication: 'Medication',
  MedicationAdministration: 'MedicationAdministration',
  MedicationDispense: 'MedicationDispense',
  MedicationKnowledge: 'MedicationKnowledge',
  MedicationRequest: 'MedicationRequest',
  MedicationStatement: 'MedicationStatement',
  MedicinalProduct: 'MedicinalProduct',
  MedicinalProductAuthorization: 'MedicinalProductAuthorization',
  MedicinalProductContraindication: 'MedicinalProductContraindication',
  MedicinalProductIndication: 'MedicinalProductIndication',
  MedicinalProductIngredient: 'MedicinalProductIngredient',
  MedicinalProductInteraction: 'MedicinalProductInteraction',
  MedicinalProductManufactured: 'MedicinalProductManufactured',
  MedicinalProductPackaged: 'MedicinalProductPackaged',
  MedicinalProductPharmaceutical: 'MedicinalProductPharmaceutical',
  MedicinalProductUndesirableEffect: 'MedicinalProductUndesirableEffect',
  MessageDefinition: 'MessageDefinition',
  MessageHeader: 'MessageHeader',
  MolecularSequence: 'MolecularSequence',
  NamingSystem: 'NamingSystem',
  NutritionOrder: 'NutritionOrder',
  Observation: 'Observation',
  ObservationDefinition: 'ObservationDefinition',
  OperationDefinition: 'OperationDefinition',
  OperationOutcome: 'OperationOutcome',
  Organization: 'Organization',
  OrganizationAffiliation: 'OrganizationAffiliation',
  Parameters: 'Parameters',
  Patient: 'Patient',
  PaymentNotice: 'PaymentNotice',
  PaymentReconciliation: 'PaymentReconciliation',
  Person: 'Person',
  PlanDefinition: 'PlanDefinition',
  Practitioner: 'Practitioner',
  PractitionerRole: 'PractitionerRole',
  Procedure: 'Procedure',
  Provenance: 'Provenance',
  Questionnaire: 'Questionnaire',
  QuestionnaireResponse: 'QuestionnaireResponse',
  RelatedPerson: 'RelatedPerson',
  RequestGroup: 'RequestGroup',
  ResearchDefinition: 'ResearchDefinition',
  ResearchElementDefinition: 'ResearchElementDefinition',
  ResearchStudy: 'ResearchStudy',
  ResearchSubject: 'ResearchSubject',
  Resource: 'Resource',
  RiskAssessment: 'RiskAssessment',
  RiskEvidenceSynthesis: 'RiskEvidenceSynthesis',
  Schedule: 'Schedule',
  SearchParameter: 'SearchParameter',
  ServiceRequest: 'ServiceRequest',
  Slot: 'Slot',
  Specimen: 'Specimen',
  SpecimenDefinition: 'SpecimenDefinition',
  StructureDefinition: 'StructureDefinition',
  StructureMap: 'StructureMap',
  Subscription: 'Subscription',
  Substance: 'Substance',
  SubstanceNucleicAcid: 'SubstanceNucleicAcid',
  SubstancePolymer: 'SubstancePolymer',
  SubstanceProtein: 'SubstanceProtein',
  SubstanceReferenceInformation: 'SubstanceReferenceInformation',
  SubstanceSourceMaterial: 'SubstanceSourceMaterial',
  SubstanceSpecification: 'SubstanceSpecification',
  SupplyDelivery: 'SupplyDelivery',
  SupplyRequest: 'SupplyRequest',
  Task: 'Task',
  TerminologyCapabilities: 'TerminologyCapabilities',
  TestReport: 'TestReport',
  TestScript: 'TestScript',
  ValueSet: 'ValueSet',
  VerificationResult: 'VerificationResult',
  VisionPrescription: 'VisionPrescription',
  Type: 'Type',
  Any: 'Any',
} as const;
export type FHIRAllTypes = (typeof FHIRAllTypes)[keyof typeof FHIRAllTypes];

/** FHIRDefinedType (http://hl7.org/fhir/ValueSet/defined-types) */
export const FHIRDefinedType = {
  Address: 'Address',
  Age: 'Age',
  Annotation: 'Annotation',
  Attachment: 'Attachment',
  BackboneElement: 'BackboneElement',
  CodeableConcept: 'CodeableConcept',
  Coding: 'Coding',
  ContactDetail: 'ContactDetail',
  ContactPoint: 'ContactPoint',
  Contributor: 'Contributor',
  Count: 'Count',
  DataRequirement: 'DataRequirement',
  Distance: 'Distance',
  Dosage: 'Dosage',
  Duration: 'Duration',
  Element: 'Element',
  ElementDefinition: 'ElementDefinition',
  Expression: 'Expression',
  Extension: 'Extension',
  HumanName: 'HumanName',
  Identifier: 'Identifier',
  MarketingStatus: 'MarketingStatus',
  Meta: 'Meta',
  Money: 'Money',
  MoneyQuantity: 'MoneyQuantity',
  Narrative: 'Narrative',
  ParameterDefinition: 'ParameterDefinition',
  Period: 'Period',
  Population: 'Population',
  ProdCharacteristic: 'ProdCharacteristic',
  ProductShelfLife: 'ProductShelfLife',
  Quantity: 'Quantity',
  Range: 'Range',
  Ratio: 'Ratio',
  Reference: 'Reference',
  RelatedArtifact: 'RelatedArtifact',
  SampledData: 'SampledData',
  Signature: 'Signature',
  SimpleQuantity: 'SimpleQuantity',
  SubstanceAmount: 'SubstanceAmount',
  Timing: 'Timing',
  TriggerDefinition: 'TriggerDefinition',
  UsageContext: 'UsageContext',
  Base64Binary: 'base64Binary',
  Boolean: 'boolean',
  Canonical: 'canonical',
  Code: 'code',
  Date: 'date',
  DateTime: 'dateTime',
  Decimal: 'decimal',
  Id: 'id',
  Instant: 'instant',
  Integer: 'integer',
  Markdown: 'markdown',
  Oid: 'oid',
  PositiveInt: 'positiveInt',
  String: 'string',
  Time: 'time',
  UnsignedInt: 'unsignedInt',
  Uri: 'uri',
  Url: 'url',
  Uuid: 'uuid',
  Xhtml: 'xhtml',
  Account: 'Account',
  ActivityDefinition: 'ActivityDefinition',
  AdverseEvent: 'AdverseEvent',
  AllergyIntolerance: 'AllergyIntolerance',
  Appointment: 'Appointment',
  AppointmentResponse: 'AppointmentResponse',
  AuditEvent: 'AuditEvent',
  Basic: 'Basic',
  Binary: 'Binary',
  BiologicallyDerivedProduct: 'BiologicallyDerivedProduct',
  BodyStructure: 'BodyStructure',
  Bundle: 'Bundle',
  CapabilityStatement: 'CapabilityStatement',
  CarePlan: 'CarePlan',
  CareTeam: 'CareTeam',
  CatalogEntry: 'CatalogEntry',
  ChargeItem: 'ChargeItem',
  ChargeItemDefinition: 'ChargeItemDefinition',
  Claim: 'Claim',
  ClaimResponse: 'ClaimResponse',
  ClinicalImpression: 'ClinicalImpression',
  CodeSystem: 'CodeSystem',
  Communication: 'Communication',
  CommunicationRequest: 'CommunicationRequest',
  CompartmentDefinition: 'CompartmentDefinition',
  Composition: 'Composition',
  ConceptMap: 'ConceptMap',
  Condition: 'Condition',
  Consent: 'Consent',
  Contract: 'Contract',
  Coverage: 'Coverage',
  CoverageEligibilityRequest: 'CoverageEligibilityRequest',
  CoverageEligibilityResponse: 'CoverageEligibilityResponse',
  DetectedIssue: 'DetectedIssue',
  Device: 'Device',
  DeviceDefinition: 'DeviceDefinition',
  DeviceMetric: 'DeviceMetric',
  DeviceRequest: 'DeviceRequest',
  DeviceUseStatement: 'DeviceUseStatement',
  DiagnosticReport: 'DiagnosticReport',
  DocumentManifest: 'DocumentManifest',
  DocumentReference: 'DocumentReference',
  DomainResource: 'DomainResource',
  EffectEvidenceSynthesis: 'EffectEvidenceSynthesis',
  Encounter: 'Encounter',
  Endpoint: 'Endpoint',
  EnrollmentRequest: 'EnrollmentRequest',
  EnrollmentResponse: 'EnrollmentResponse',
  EpisodeOfCare: 'EpisodeOfCare',
  EventDefinition: 'EventDefinition',
  Evidence: 'Evidence',
  EvidenceVariable: 'EvidenceVariable',
  ExampleScenario: 'ExampleScenario',
  ExplanationOfBenefit: 'ExplanationOfBenefit',
  FamilyMemberHistory: 'FamilyMemberHistory',
  Flag: 'Flag',
  Goal: 'Goal',
  GraphDefinition: 'GraphDefinition',
  Group: 'Group',
  GuidanceResponse: 'GuidanceResponse',
  HealthcareService: 'HealthcareService',
  ImagingStudy: 'ImagingStudy',
  Immunization: 'Immunization',
  ImmunizationEvaluation: 'ImmunizationEvaluation',
  ImmunizationRecommendation: 'ImmunizationRecommendation',
  ImplementationGuide: 'ImplementationGuide',
  InsurancePlan: 'InsurancePlan',
  Invoice: 'Invoice',
  Library: 'Library',
  Linkage: 'Linkage',
  List: 'List',
  Location: 'Location',
  Measure: 'Measure',
  MeasureReport: 'MeasureReport',
  Media: 'Media',
  Medication: 'Medication',
  MedicationAdministration: 'MedicationAdministration',
  MedicationDispense: 'MedicationDispense',
  MedicationKnowledge: 'MedicationKnowledge',
  MedicationRequest: 'MedicationRequest',
  MedicationStatement: 'MedicationStatement',
  MedicinalProduct: 'MedicinalProduct',
  MedicinalProductAuthorization: 'MedicinalProductAuthorization',
  MedicinalProductContraindication: 'MedicinalProductContraindication',
  MedicinalProductIndication: 'MedicinalProductIndication',
  MedicinalProductIngredient: 'MedicinalProductIngredient',
  MedicinalProductInteraction: 'MedicinalProductInteraction',
  MedicinalProductManufactured: 'MedicinalProductManufactured',
  MedicinalProductPackaged: 'MedicinalProductPackaged',
  MedicinalProductPharmaceutical: 'MedicinalProductPharmaceutical',
  MedicinalProductUndesirableEffect: 'MedicinalProductUndesirableEffect',
  MessageDefinition: 'MessageDefinition',
  MessageHeader: 'MessageHeader',
  MolecularSequence: 'MolecularSequence',
  NamingSystem: 'NamingSystem',
  NutritionOrder: 'NutritionOrder',
  Observation: 'Observation',
  ObservationDefinition: 'ObservationDefinition',
  OperationDefinition: 'OperationDefinition',
  OperationOutcome: 'OperationOutcome',
  Organization: 'Organization',
  OrganizationAffiliation: 'OrganizationAffiliation',
  Parameters: 'Parameters',
  Patient: 'Patient',
  PaymentNotice: 'PaymentNotice',
  PaymentReconciliation: 'PaymentReconciliation',
  Person: 'Person',
  PlanDefinition: 'PlanDefinition',
  Practitioner: 'Practitioner',
  PractitionerRole: 'PractitionerRole',
  Procedure: 'Procedure',
  Provenance: 'Provenance',
  Questionnaire: 'Questionnaire',
  QuestionnaireResponse: 'QuestionnaireResponse',
  RelatedPerson: 'RelatedPerson',
  RequestGroup: 'RequestGroup',
  ResearchDefinition: 'ResearchDefinition',
  ResearchElementDefinition: 'ResearchElementDefinition',
  ResearchStudy: 'ResearchStudy',
  ResearchSubject: 'ResearchSubject',
  Resource: 'Resource',
  RiskAssessment: 'RiskAssessment',
  RiskEvidenceSynthesis: 'RiskEvidenceSynthesis',
  Schedule: 'Schedule',
  SearchParameter: 'SearchParameter',
  ServiceRequest: 'ServiceRequest',
  Slot: 'Slot',
  Specimen: 'Specimen',
  SpecimenDefinition: 'SpecimenDefinition',
  StructureDefinition: 'StructureDefinition',
  StructureMap: 'StructureMap',
  Subscription: 'Subscription',
  Substance: 'Substance',
  SubstanceNucleicAcid: 'SubstanceNucleicAcid',
  SubstancePolymer: 'SubstancePolymer',
  SubstanceProtein: 'SubstanceProtein',
  SubstanceReferenceInformation: 'SubstanceReferenceInformation',
  SubstanceSourceMaterial: 'SubstanceSourceMaterial',
  SubstanceSpecification: 'SubstanceSpecification',
  SupplyDelivery: 'SupplyDelivery',
  SupplyRequest: 'SupplyRequest',
  Task: 'Task',
  TerminologyCapabilities: 'TerminologyCapabilities',
  TestReport: 'TestReport',
  TestScript: 'TestScript',
  ValueSet: 'ValueSet',
  VerificationResult: 'VerificationResult',
  VisionPrescription: 'VisionPrescription',
} as const;
export type FHIRDefinedType = (typeof FHIRDefinedType)[keyof typeof FHIRDefinedType];

/** FHIRDeviceStatus (http://hl7.org/fhir/ValueSet/device-status) */
export const FHIRDeviceStatus = {
  Active: 'active',
  Inactive: 'inactive',
  EnteredInError: 'entered-in-error',
  Unknown: 'unknown',
} as const;
export type FHIRDeviceStatus = (typeof FHIRDeviceStatus)[keyof typeof FHIRDeviceStatus];

/** FHIRSubstanceStatus (http://hl7.org/fhir/ValueSet/substance-status) */
export const FHIRSubstanceStatus = {
  Active: 'active',
  Inactive: 'inactive',
  EnteredInError: 'entered-in-error',
} as const;
export type FHIRSubstanceStatus = (typeof FHIRSubstanceStatus)[keyof typeof FHIRSubstanceStatus];

/** FHIRVersion (http://hl7.org/fhir/ValueSet/FHIR-version) */
export const FHIRVersion = {
  _001: '0.01',
  _005: '0.05',
  _006: '0.06',
  _011: '0.11',
  _0080: '0.0.80',
  _0081: '0.0.81',
  _0082: '0.0.82',
  _040: '0.4.0',
  _050: '0.5.0',
  _100: '1.0.0',
  _101: '1.0.1',
  _102: '1.0.2',
  _110: '1.1.0',
  _140: '1.4.0',
  _160: '1.6.0',
  _180: '1.8.0',
  _300: '3.0.0',
  _301: '3.0.1',
  _330: '3.3.0',
  _350: '3.5.0',
  _400: '4.0.0',
  _401: '4.0.1',
} as const;
export type FHIRVersion = (typeof FHIRVersion)[keyof typeof FHIRVersion];

/** FilterOperator (http://hl7.org/fhir/ValueSet/filter-operator) */
export const FilterOperator = {
  Equal: '=',
  IsA: 'is-a',
  DescendentOf: 'descendent-of',
  IsNotA: 'is-not-a',
  Regex: 'regex',
  In: 'in',
  NotIn: 'not-in',
  Generalizes: 'generalizes',
  Exists: 'exists',
} as const;
export type FilterOperator = (typeof FilterOperator)[keyof typeof FilterOperator];

/** Financial Resource Status Codes (http://hl7.org/fhir/ValueSet/fm-status) */
export const FinancialResourceStatusCodes = {
  Active: 'active',
  Cancelled: 'cancelled',
  Draft: 'draft',
  EnteredInError: 'entered-in-error',
} as const;
export type FinancialResourceStatusCodes =
  (typeof FinancialResourceStatusCodes)[keyof typeof FinancialResourceStatusCodes];

/** FlagStatus (http://hl7.org/fhir/ValueSet/flag-status) */
export const FlagStatus = {
  Active: 'active',
  Inactive: 'inactive',
  EnteredInError: 'entered-in-error',
} as const;
export type FlagStatus = (typeof FlagStatus)[keyof typeof FlagStatus];

/** GoalLifecycleStatus (http://hl7.org/fhir/ValueSet/goal-status) */
export const GoalLifecycleStatus = {
  Proposed: 'proposed',
  Planned: 'planned',
  Accepted: 'accepted',
  Active: 'active',
  OnHold: 'on-hold',
  Completed: 'completed',
  Cancelled: 'cancelled',
  EnteredInError: 'entered-in-error',
  Rejected: 'rejected',
} as const;
export type GoalLifecycleStatus = (typeof GoalLifecycleStatus)[keyof typeof GoalLifecycleStatus];

/** GraphCompartmentRule (http://hl7.org/fhir/ValueSet/graph-compartment-rule) */
export const GraphCompartmentRule = {
  Identical: 'identical',
  Matching: 'matching',
  Different: 'different',
  Custom: 'custom',
} as const;
export type GraphCompartmentRule = (typeof GraphCompartmentRule)[keyof typeof GraphCompartmentRule];

/** GraphCompartmentUse (http://hl7.org/fhir/ValueSet/graph-compartment-use) */
export const GraphCompartmentUse = { Condition: 'condition', Requirement: 'requirement' } as const;
export type GraphCompartmentUse = (typeof GraphCompartmentUse)[keyof typeof GraphCompartmentUse];

/** GroupMeasure (http://hl7.org/fhir/ValueSet/group-measure) */
export const GroupMeasure = {
  Mean: 'mean',
  Median: 'median',
  MeanOfMean: 'mean-of-mean',
  MeanOfMedian: 'mean-of-median',
  MedianOfMean: 'median-of-mean',
  MedianOfMedian: 'median-of-median',
} as const;
export type GroupMeasure = (typeof GroupMeasure)[keyof typeof GroupMeasure];

/** GroupType (http://hl7.org/fhir/ValueSet/group-type) */
export const GroupType = {
  Person: 'person',
  Animal: 'animal',
  Practitioner: 'practitioner',
  Device: 'device',
  Medication: 'medication',
  Substance: 'substance',
} as const;
export type GroupType = (typeof GroupType)[keyof typeof GroupType];

/** GuidanceResponseStatus (http://hl7.org/fhir/ValueSet/guidance-response-status) */
export const GuidanceResponseStatus = {
  Success: 'success',
  DataRequested: 'data-requested',
  DataRequired: 'data-required',
  InProgress: 'in-progress',
  Failure: 'failure',
  EnteredInError: 'entered-in-error',
} as const;
export type GuidanceResponseStatus =
  (typeof GuidanceResponseStatus)[keyof typeof GuidanceResponseStatus];

/** GuidePageGeneration (http://hl7.org/fhir/ValueSet/guide-page-generation) */
export const GuidePageGeneration = {
  Html: 'html',
  Markdown: 'markdown',
  Xml: 'xml',
  Generated: 'generated',
} as const;
export type GuidePageGeneration = (typeof GuidePageGeneration)[keyof typeof GuidePageGeneration];

/** GuideParameterCode (http://hl7.org/fhir/ValueSet/guide-parameter-code) */
export const GuideParameterCode = {
  Apply: 'apply',
  PathResource: 'path-resource',
  PathPages: 'path-pages',
  PathTxCache: 'path-tx-cache',
  ExpansionParameter: 'expansion-parameter',
  RuleBrokenLinks: 'rule-broken-links',
  GenerateXml: 'generate-xml',
  GenerateJson: 'generate-json',
  GenerateTurtle: 'generate-turtle',
  HtmlTemplate: 'html-template',
} as const;
export type GuideParameterCode = (typeof GuideParameterCode)[keyof typeof GuideParameterCode];

/** HTTPVerb (http://hl7.org/fhir/ValueSet/http-verb) */
export const HTTPVerb = {
  GET: 'GET',
  HEAD: 'HEAD',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
} as const;
export type HTTPVerb = (typeof HTTPVerb)[keyof typeof HTTPVerb];

/** IdentifierUse (http://hl7.org/fhir/ValueSet/identifier-use) */
export const IdentifierUse = {
  Usual: 'usual',
  Official: 'official',
  Temp: 'temp',
  Secondary: 'secondary',
  Old: 'old',
} as const;
export type IdentifierUse = (typeof IdentifierUse)[keyof typeof IdentifierUse];

/** IdentityAssuranceLevel (http://hl7.org/fhir/ValueSet/identity-assuranceLevel) */
export const IdentityAssuranceLevel = {
  Level1: 'level1',
  Level2: 'level2',
  Level3: 'level3',
  Level4: 'level4',
} as const;
export type IdentityAssuranceLevel =
  (typeof IdentityAssuranceLevel)[keyof typeof IdentityAssuranceLevel];

/** ImagingStudyStatus (http://hl7.org/fhir/ValueSet/imagingstudy-status) */
export const ImagingStudyStatus = {
  Registered: 'registered',
  Available: 'available',
  Cancelled: 'cancelled',
  EnteredInError: 'entered-in-error',
  Unknown: 'unknown',
} as const;
export type ImagingStudyStatus = (typeof ImagingStudyStatus)[keyof typeof ImagingStudyStatus];

/** Immunization Evaluation Status Codes (http://hl7.org/fhir/ValueSet/immunization-evaluation-status) */
export const ImmunizationEvaluationStatusCodes = {
  Completed: 'completed',
  EnteredInError: 'entered-in-error',
} as const;
export type ImmunizationEvaluationStatusCodes =
  (typeof ImmunizationEvaluationStatusCodes)[keyof typeof ImmunizationEvaluationStatusCodes];

/** Immunization Status Codes (http://hl7.org/fhir/ValueSet/immunization-status) */
export const ImmunizationStatusCodes = {
  Completed: 'completed',
  EnteredInError: 'entered-in-error',
  NotDone: 'not-done',
} as const;
export type ImmunizationStatusCodes =
  (typeof ImmunizationStatusCodes)[keyof typeof ImmunizationStatusCodes];

/** InvoicePriceComponentType (http://hl7.org/fhir/ValueSet/invoice-priceComponentType) */
export const InvoicePriceComponentType = {
  Base: 'base',
  Surcharge: 'surcharge',
  Deduction: 'deduction',
  Discount: 'discount',
  Tax: 'tax',
  Informational: 'informational',
} as const;
export type InvoicePriceComponentType =
  (typeof InvoicePriceComponentType)[keyof typeof InvoicePriceComponentType];

/** InvoiceStatus (http://hl7.org/fhir/ValueSet/invoice-status) */
export const InvoiceStatus = {
  Draft: 'draft',
  Issued: 'issued',
  Balanced: 'balanced',
  Cancelled: 'cancelled',
  EnteredInError: 'entered-in-error',
} as const;
export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus];

/** IssueSeverity (http://hl7.org/fhir/ValueSet/issue-severity) */
export const IssueSeverity = {
  Fatal: 'fatal',
  Error: 'error',
  Warning: 'warning',
  Information: 'information',
} as const;
export type IssueSeverity = (typeof IssueSeverity)[keyof typeof IssueSeverity];

/** IssueType (http://hl7.org/fhir/ValueSet/issue-type) */
export const IssueType = {
  Invalid: 'invalid',
  Structure: 'structure',
  Required: 'required',
  Value: 'value',
  Invariant: 'invariant',
  Security: 'security',
  Login: 'login',
  Unknown: 'unknown',
  Expired: 'expired',
  Forbidden: 'forbidden',
  Suppressed: 'suppressed',
  Processing: 'processing',
  NotSupported: 'not-supported',
  Duplicate: 'duplicate',
  MultipleMatches: 'multiple-matches',
  NotFound: 'not-found',
  Deleted: 'deleted',
  TooLong: 'too-long',
  CodeInvalid: 'code-invalid',
  Extension: 'extension',
  TooCostly: 'too-costly',
  BusinessRule: 'business-rule',
  Conflict: 'conflict',
  Transient: 'transient',
  LockError: 'lock-error',
  NoStore: 'no-store',
  Exception: 'exception',
  Timeout: 'timeout',
  Incomplete: 'incomplete',
  Throttled: 'throttled',
  Informational: 'informational',
} as const;
export type IssueType = (typeof IssueType)[keyof typeof IssueType];

/** LinkageType (http://hl7.org/fhir/ValueSet/linkage-type) */
export const LinkageType = {
  Source: 'source',
  Alternate: 'alternate',
  Historical: 'historical',
} as const;
export type LinkageType = (typeof LinkageType)[keyof typeof LinkageType];

/** LinkType (http://hl7.org/fhir/ValueSet/link-type) */
export const LinkType = {
  ReplacedBy: 'replaced-by',
  Replaces: 'replaces',
  Refer: 'refer',
  Seealso: 'seealso',
} as const;
export type LinkType = (typeof LinkType)[keyof typeof LinkType];

/** ListMode (http://hl7.org/fhir/ValueSet/list-mode) */
export const ListMode = { Working: 'working', Snapshot: 'snapshot', Changes: 'changes' } as const;
export type ListMode = (typeof ListMode)[keyof typeof ListMode];

/** ListStatus (http://hl7.org/fhir/ValueSet/list-status) */
export const ListStatus = {
  Current: 'current',
  Retired: 'retired',
  EnteredInError: 'entered-in-error',
} as const;
export type ListStatus = (typeof ListStatus)[keyof typeof ListStatus];

/** LocationMode (http://hl7.org/fhir/ValueSet/location-mode) */
export const LocationMode = { Instance: 'instance', Kind: 'kind' } as const;
export type LocationMode = (typeof LocationMode)[keyof typeof LocationMode];

/** LocationStatus (http://hl7.org/fhir/ValueSet/location-status) */
export const LocationStatus = {
  Active: 'active',
  Suspended: 'suspended',
  Inactive: 'inactive',
} as const;
export type LocationStatus = (typeof LocationStatus)[keyof typeof LocationStatus];

/** MeasureReportStatus (http://hl7.org/fhir/ValueSet/measure-report-status) */
export const MeasureReportStatus = {
  Complete: 'complete',
  Pending: 'pending',
  Error: 'error',
} as const;
export type MeasureReportStatus = (typeof MeasureReportStatus)[keyof typeof MeasureReportStatus];

/** MeasureReportType (http://hl7.org/fhir/ValueSet/measure-report-type) */
export const MeasureReportType = {
  Individual: 'individual',
  SubjectList: 'subject-list',
  Summary: 'summary',
  DataCollection: 'data-collection',
} as const;
export type MeasureReportType = (typeof MeasureReportType)[keyof typeof MeasureReportType];

/** Medication administration  status  codes (http://hl7.org/fhir/ValueSet/medication-admin-status) */
export const MedicationAdministrationStatusCodes = {
  InProgress: 'in-progress',
  NotDone: 'not-done',
  OnHold: 'on-hold',
  Completed: 'completed',
  EnteredInError: 'entered-in-error',
  Stopped: 'stopped',
  Unknown: 'unknown',
} as const;
export type MedicationAdministrationStatusCodes =
  (typeof MedicationAdministrationStatusCodes)[keyof typeof MedicationAdministrationStatusCodes];

/** Medication dispense  status  codes (http://hl7.org/fhir/ValueSet/medicationdispense-status) */
export const MedicationDispenseStatusCodes = {
  Preparation: 'preparation',
  InProgress: 'in-progress',
  Cancelled: 'cancelled',
  OnHold: 'on-hold',
  Completed: 'completed',
  EnteredInError: 'entered-in-error',
  Stopped: 'stopped',
  Declined: 'declined',
  Unknown: 'unknown',
} as const;
export type MedicationDispenseStatusCodes =
  (typeof MedicationDispenseStatusCodes)[keyof typeof MedicationDispenseStatusCodes];

/** Medication knowledge  status  codes (http://hl7.org/fhir/ValueSet/medicationknowledge-status) */
export const MedicationKnowledgeStatusCodes = {
  Active: 'active',
  Inactive: 'inactive',
  EnteredInError: 'entered-in-error',
} as const;
export type MedicationKnowledgeStatusCodes =
  (typeof MedicationKnowledgeStatusCodes)[keyof typeof MedicationKnowledgeStatusCodes];

/** Medication request  intent (http://hl7.org/fhir/ValueSet/medicationrequest-intent) */
export const MedicationRequestIntent = {
  Proposal: 'proposal',
  Plan: 'plan',
  Order: 'order',
  OriginalOrder: 'original-order',
  ReflexOrder: 'reflex-order',
  FillerOrder: 'filler-order',
  InstanceOrder: 'instance-order',
  Option: 'option',
} as const;
export type MedicationRequestIntent =
  (typeof MedicationRequestIntent)[keyof typeof MedicationRequestIntent];

/** Medicationrequest  status (http://hl7.org/fhir/ValueSet/medicationrequest-status) */
export const MedicationrequestStatus = {
  Active: 'active',
  OnHold: 'on-hold',
  Cancelled: 'cancelled',
  Completed: 'completed',
  EnteredInError: 'entered-in-error',
  Stopped: 'stopped',
  Draft: 'draft',
  Unknown: 'unknown',
} as const;
export type MedicationrequestStatus =
  (typeof MedicationrequestStatus)[keyof typeof MedicationrequestStatus];

/** Medication  status  codes (http://hl7.org/fhir/ValueSet/medication-status) */
export const MedicationStatusCodes = {
  Active: 'active',
  Inactive: 'inactive',
  EnteredInError: 'entered-in-error',
} as const;
export type MedicationStatusCodes =
  (typeof MedicationStatusCodes)[keyof typeof MedicationStatusCodes];

/** Medication  status  codes (http://hl7.org/fhir/ValueSet/medication-statement-status) */
export const MedicationStatusCodes2 = {
  Active: 'active',
  Completed: 'completed',
  EnteredInError: 'entered-in-error',
  Intended: 'intended',
  Stopped: 'stopped',
  OnHold: 'on-hold',
  Unknown: 'unknown',
  NotTaken: 'not-taken',
} as const;
export type MedicationStatusCodes2 =
  (typeof MedicationStatusCodes2)[keyof typeof MedicationStatusCodes2];

/** messageheader-response-request (http://hl7.org/fhir/ValueSet/messageheader-response-request) */
export const MessageheaderResponseRequest = {
  Always: 'always',
  OnError: 'on-error',
  Never: 'never',
  OnSuccess: 'on-success',
} as const;
export type MessageheaderResponseRequest =
  (typeof MessageheaderResponseRequest)[keyof typeof MessageheaderResponseRequest];

/** MessageSignificanceCategory (http://hl7.org/fhir/ValueSet/message-significance-category) */
export const MessageSignificanceCategory = {
  Consequence: 'consequence',
  Currency: 'currency',
  Notification: 'notification',
} as const;
export type MessageSignificanceCategory =
  (typeof MessageSignificanceCategory)[keyof typeof MessageSignificanceCategory];

/** NameUse (http://hl7.org/fhir/ValueSet/name-use) */
export const NameUse = {
  Usual: 'usual',
  Official: 'official',
  Temp: 'temp',
  Nickname: 'nickname',
  Anonymous: 'anonymous',
  Old: 'old',
  Maiden: 'maiden',
} as const;
export type NameUse = (typeof NameUse)[keyof typeof NameUse];

/** NamingSystemIdentifierType (http://hl7.org/fhir/ValueSet/namingsystem-identifier-type) */
export const NamingSystemIdentifierType = {
  Oid: 'oid',
  Uuid: 'uuid',
  Uri: 'uri',
  Other: 'other',
} as const;
export type NamingSystemIdentifierType =
  (typeof NamingSystemIdentifierType)[keyof typeof NamingSystemIdentifierType];

/** NamingSystemType (http://hl7.org/fhir/ValueSet/namingsystem-type) */
export const NamingSystemType = {
  Codesystem: 'codesystem',
  Identifier: 'identifier',
  Root: 'root',
} as const;
export type NamingSystemType = (typeof NamingSystemType)[keyof typeof NamingSystemType];

/** NarrativeStatus (http://hl7.org/fhir/ValueSet/narrative-status) */
export const NarrativeStatus = {
  Generated: 'generated',
  Extensions: 'extensions',
  Additional: 'additional',
  Empty: 'empty',
} as const;
export type NarrativeStatus = (typeof NarrativeStatus)[keyof typeof NarrativeStatus];

/** NoteType (http://hl7.org/fhir/ValueSet/note-type) */
export const NoteType = { Display: 'display', Print: 'print', Printoper: 'printoper' } as const;
export type NoteType = (typeof NoteType)[keyof typeof NoteType];

/** ObservationDataType (http://hl7.org/fhir/ValueSet/permitted-data-type) */
export const ObservationDataType = {
  Quantity: 'Quantity',
  CodeableConcept: 'CodeableConcept',
  String: 'string',
  Boolean: 'boolean',
  Integer: 'integer',
  Range: 'Range',
  Ratio: 'Ratio',
  SampledData: 'SampledData',
  Time: 'time',
  DateTime: 'dateTime',
  Period: 'Period',
} as const;
export type ObservationDataType = (typeof ObservationDataType)[keyof typeof ObservationDataType];

/** ObservationRangeCategory (http://hl7.org/fhir/ValueSet/observation-range-category) */
export const ObservationRangeCategory = {
  Reference: 'reference',
  Critical: 'critical',
  Absolute: 'absolute',
} as const;
export type ObservationRangeCategory =
  (typeof ObservationRangeCategory)[keyof typeof ObservationRangeCategory];

/** ObservationStatus (http://hl7.org/fhir/ValueSet/observation-status) */
export const ObservationStatus = {
  Registered: 'registered',
  Preliminary: 'preliminary',
  Final: 'final',
  Amended: 'amended',
  Corrected: 'corrected',
  Cancelled: 'cancelled',
  EnteredInError: 'entered-in-error',
  Unknown: 'unknown',
} as const;
export type ObservationStatus = (typeof ObservationStatus)[keyof typeof ObservationStatus];

/** OperationKind (http://hl7.org/fhir/ValueSet/operation-kind) */
export const OperationKind = { Operation: 'operation', Query: 'query' } as const;
export type OperationKind = (typeof OperationKind)[keyof typeof OperationKind];

/** OperationParameterUse (http://hl7.org/fhir/ValueSet/operation-parameter-use) */
export const OperationParameterUse = { In: 'in', Out: 'out' } as const;
export type OperationParameterUse =
  (typeof OperationParameterUse)[keyof typeof OperationParameterUse];

/** orientationType (http://hl7.org/fhir/ValueSet/orientation-type) */
export const OrientationType = { Sense: 'sense', Antisense: 'antisense' } as const;
export type OrientationType = (typeof OrientationType)[keyof typeof OrientationType];

/** ParticipantRequired (http://hl7.org/fhir/ValueSet/participantrequired) */
export const ParticipantRequired = {
  Required: 'required',
  Optional: 'optional',
  InformationOnly: 'information-only',
} as const;
export type ParticipantRequired = (typeof ParticipantRequired)[keyof typeof ParticipantRequired];

/** ParticipationStatus (http://hl7.org/fhir/ValueSet/participationstatus) */
export const ParticipationStatus = {
  Accepted: 'accepted',
  Declined: 'declined',
  Tentative: 'tentative',
  NeedsAction: 'needs-action',
} as const;
export type ParticipationStatus = (typeof ParticipationStatus)[keyof typeof ParticipationStatus];

/** PropertyRepresentation (http://hl7.org/fhir/ValueSet/property-representation) */
export const PropertyRepresentation = {
  XmlAttr: 'xmlAttr',
  XmlText: 'xmlText',
  TypeAttr: 'typeAttr',
  CdaText: 'cdaText',
  Xhtml: 'xhtml',
} as const;
export type PropertyRepresentation =
  (typeof PropertyRepresentation)[keyof typeof PropertyRepresentation];

/** PropertyType (http://hl7.org/fhir/ValueSet/concept-property-type) */
export const PropertyType = {
  Code: 'code',
  Coding: 'Coding',
  String: 'string',
  Integer: 'integer',
  Boolean: 'boolean',
  DateTime: 'dateTime',
  Decimal: 'decimal',
} as const;
export type PropertyType = (typeof PropertyType)[keyof typeof PropertyType];

/** ProvenanceEntityRole (http://hl7.org/fhir/ValueSet/provenance-entity-role) */
export const ProvenanceEntityRole = {
  Derivation: 'derivation',
  Revision: 'revision',
  Quotation: 'quotation',
  Source: 'source',
  Removal: 'removal',
} as const;
export type ProvenanceEntityRole = (typeof ProvenanceEntityRole)[keyof typeof ProvenanceEntityRole];

/** PublicationStatus (http://hl7.org/fhir/ValueSet/publication-status) */
export const PublicationStatus = {
  Draft: 'draft',
  Active: 'active',
  Retired: 'retired',
  Unknown: 'unknown',
} as const;
export type PublicationStatus = (typeof PublicationStatus)[keyof typeof PublicationStatus];

/** qualityType (http://hl7.org/fhir/ValueSet/quality-type) */
export const QualityType = { Indel: 'indel', Snp: 'snp', Unknown: 'unknown' } as const;
export type QualityType = (typeof QualityType)[keyof typeof QualityType];

/** QuantityComparator (http://hl7.org/fhir/ValueSet/quantity-comparator) */
export const QuantityComparator = {
  LessThan: '<',
  LessThanOrEqualTo: '<=',
  GreaterThanOrEqualTo: '>=',
  GreaterThan: '>',
} as const;
export type QuantityComparator = (typeof QuantityComparator)[keyof typeof QuantityComparator];

/** QuestionnaireItemOperator (http://hl7.org/fhir/ValueSet/questionnaire-enable-operator) */
export const QuestionnaireItemOperator = {
  Exists: 'exists',
  Equal: '=',
  NotEqual: '!=',
  GreaterThan: '>',
  LessThan: '<',
  GreaterThanOrEqualTo: '>=',
  LessThanOrEqualTo: '<=',
} as const;
export type QuestionnaireItemOperator =
  (typeof QuestionnaireItemOperator)[keyof typeof QuestionnaireItemOperator];

/** QuestionnaireItemType (http://hl7.org/fhir/ValueSet/item-type) */
export const QuestionnaireItemType = {
  Group: 'group',
  Display: 'display',
  Question: 'question',
  Boolean: 'boolean',
  Decimal: 'decimal',
  Integer: 'integer',
  Date: 'date',
  DateTime: 'dateTime',
  Time: 'time',
  String: 'string',
  Text: 'text',
  Url: 'url',
  Choice: 'choice',
  OpenChoice: 'open-choice',
  Attachment: 'attachment',
  Reference: 'reference',
  Quantity: 'quantity',
} as const;
export type QuestionnaireItemType =
  (typeof QuestionnaireItemType)[keyof typeof QuestionnaireItemType];

/** QuestionnaireResponseStatus (http://hl7.org/fhir/ValueSet/questionnaire-answers-status) */
export const QuestionnaireResponseStatus = {
  InProgress: 'in-progress',
  Completed: 'completed',
  Amended: 'amended',
  EnteredInError: 'entered-in-error',
  Stopped: 'stopped',
} as const;
export type QuestionnaireResponseStatus =
  (typeof QuestionnaireResponseStatus)[keyof typeof QuestionnaireResponseStatus];

/** ReferenceHandlingPolicy (http://hl7.org/fhir/ValueSet/reference-handling-policy) */
export const ReferenceHandlingPolicy = {
  Literal: 'literal',
  Logical: 'logical',
  Resolves: 'resolves',
  Enforced: 'enforced',
  Local: 'local',
} as const;
export type ReferenceHandlingPolicy =
  (typeof ReferenceHandlingPolicy)[keyof typeof ReferenceHandlingPolicy];

/** ReferenceVersionRules (http://hl7.org/fhir/ValueSet/reference-version-rules) */
export const ReferenceVersionRules = {
  Either: 'either',
  Independent: 'independent',
  Specific: 'specific',
} as const;
export type ReferenceVersionRules =
  (typeof ReferenceVersionRules)[keyof typeof ReferenceVersionRules];

/** RelatedArtifactType (http://hl7.org/fhir/ValueSet/related-artifact-type) */
export const RelatedArtifactType = {
  Documentation: 'documentation',
  Justification: 'justification',
  Citation: 'citation',
  Predecessor: 'predecessor',
  Successor: 'successor',
  DerivedFrom: 'derived-from',
  DependsOn: 'depends-on',
  ComposedOf: 'composed-of',
} as const;
export type RelatedArtifactType = (typeof RelatedArtifactType)[keyof typeof RelatedArtifactType];

/** repositoryType (http://hl7.org/fhir/ValueSet/repository-type) */
export const RepositoryType = {
  Directlink: 'directlink',
  Openapi: 'openapi',
  Login: 'login',
  Oauth: 'oauth',
  Other: 'other',
} as const;
export type RepositoryType = (typeof RepositoryType)[keyof typeof RepositoryType];

/** RequestIntent (http://hl7.org/fhir/ValueSet/request-intent) */
export const RequestIntent = {
  Proposal: 'proposal',
  Plan: 'plan',
  Directive: 'directive',
  Order: 'order',
  OriginalOrder: 'original-order',
  ReflexOrder: 'reflex-order',
  FillerOrder: 'filler-order',
  InstanceOrder: 'instance-order',
  Option: 'option',
} as const;
export type RequestIntent = (typeof RequestIntent)[keyof typeof RequestIntent];

/** Request priority (http://hl7.org/fhir/ValueSet/request-priority) */
export const RequestPriority = {
  Routine: 'routine',
  Urgent: 'urgent',
  Asap: 'asap',
  Stat: 'stat',
} as const;
export type RequestPriority = (typeof RequestPriority)[keyof typeof RequestPriority];

/** RequestResourceType (http://hl7.org/fhir/ValueSet/request-resource-types) */
export const RequestResourceType = {
  Appointment: 'Appointment',
  AppointmentResponse: 'AppointmentResponse',
  CarePlan: 'CarePlan',
  Claim: 'Claim',
  CommunicationRequest: 'CommunicationRequest',
  Contract: 'Contract',
  DeviceRequest: 'DeviceRequest',
  EnrollmentRequest: 'EnrollmentRequest',
  ImmunizationRecommendation: 'ImmunizationRecommendation',
  MedicationRequest: 'MedicationRequest',
  NutritionOrder: 'NutritionOrder',
  ServiceRequest: 'ServiceRequest',
  SupplyRequest: 'SupplyRequest',
  Task: 'Task',
  VisionPrescription: 'VisionPrescription',
} as const;
export type RequestResourceType = (typeof RequestResourceType)[keyof typeof RequestResourceType];

/** RequestStatus (http://hl7.org/fhir/ValueSet/request-status) */
export const RequestStatus = {
  Draft: 'draft',
  Active: 'active',
  OnHold: 'on-hold',
  Revoked: 'revoked',
  Completed: 'completed',
  EnteredInError: 'entered-in-error',
  Unknown: 'unknown',
} as const;
export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus];

/** ResearchElementType (http://hl7.org/fhir/ValueSet/research-element-type) */
export const ResearchElementType = {
  Population: 'population',
  Exposure: 'exposure',
  Outcome: 'outcome',
} as const;
export type ResearchElementType = (typeof ResearchElementType)[keyof typeof ResearchElementType];

/** ResearchStudyStatus (http://hl7.org/fhir/ValueSet/research-study-status) */
export const ResearchStudyStatus = {
  Active: 'active',
  AdministrativelyCompleted: 'administratively-completed',
  Approved: 'approved',
  ClosedToAccrual: 'closed-to-accrual',
  ClosedToAccrualAndIntervention: 'closed-to-accrual-and-intervention',
  Completed: 'completed',
  Disapproved: 'disapproved',
  InReview: 'in-review',
  TemporarilyClosedToAccrual: 'temporarily-closed-to-accrual',
  TemporarilyClosedToAccrualAndIntervention: 'temporarily-closed-to-accrual-and-intervention',
  Withdrawn: 'withdrawn',
} as const;
export type ResearchStudyStatus = (typeof ResearchStudyStatus)[keyof typeof ResearchStudyStatus];

/** ResearchSubjectStatus (http://hl7.org/fhir/ValueSet/research-subject-status) */
export const ResearchSubjectStatus = {
  Candidate: 'candidate',
  Eligible: 'eligible',
  FollowUp: 'follow-up',
  Ineligible: 'ineligible',
  NotRegistered: 'not-registered',
  OffStudy: 'off-study',
  OnStudy: 'on-study',
  OnStudyIntervention: 'on-study-intervention',
  OnStudyObservation: 'on-study-observation',
  PendingOnStudy: 'pending-on-study',
  PotentialCandidate: 'potential-candidate',
  Screening: 'screening',
  Withdrawn: 'withdrawn',
} as const;
export type ResearchSubjectStatus =
  (typeof ResearchSubjectStatus)[keyof typeof ResearchSubjectStatus];

/** ResourceType (http://hl7.org/fhir/ValueSet/resource-types) */
export const ResourceType = {
  Account: 'Account',
  ActivityDefinition: 'ActivityDefinition',
  AdverseEvent: 'AdverseEvent',
  AllergyIntolerance: 'AllergyIntolerance',
  Appointment: 'Appointment',
  AppointmentResponse: 'AppointmentResponse',
  AuditEvent: 'AuditEvent',
  Basic: 'Basic',
  Binary: 'Binary',
  BiologicallyDerivedProduct: 'BiologicallyDerivedProduct',
  BodyStructure: 'BodyStructure',
  Bundle: 'Bundle',
  CapabilityStatement: 'CapabilityStatement',
  CarePlan: 'CarePlan',
  CareTeam: 'CareTeam',
  CatalogEntry: 'CatalogEntry',
  ChargeItem: 'ChargeItem',
  ChargeItemDefinition: 'ChargeItemDefinition',
  Claim: 'Claim',
  ClaimResponse: 'ClaimResponse',
  ClinicalImpression: 'ClinicalImpression',
  CodeSystem: 'CodeSystem',
  Communication: 'Communication',
  CommunicationRequest: 'CommunicationRequest',
  CompartmentDefinition: 'CompartmentDefinition',
  Composition: 'Composition',
  ConceptMap: 'ConceptMap',
  Condition: 'Condition',
  Consent: 'Consent',
  Contract: 'Contract',
  Coverage: 'Coverage',
  CoverageEligibilityRequest: 'CoverageEligibilityRequest',
  CoverageEligibilityResponse: 'CoverageEligibilityResponse',
  DetectedIssue: 'DetectedIssue',
  Device: 'Device',
  DeviceDefinition: 'DeviceDefinition',
  DeviceMetric: 'DeviceMetric',
  DeviceRequest: 'DeviceRequest',
  DeviceUseStatement: 'DeviceUseStatement',
  DiagnosticReport: 'DiagnosticReport',
  DocumentManifest: 'DocumentManifest',
  DocumentReference: 'DocumentReference',
  DomainResource: 'DomainResource',
  EffectEvidenceSynthesis: 'EffectEvidenceSynthesis',
  Encounter: 'Encounter',
  Endpoint: 'Endpoint',
  EnrollmentRequest: 'EnrollmentRequest',
  EnrollmentResponse: 'EnrollmentResponse',
  EpisodeOfCare: 'EpisodeOfCare',
  EventDefinition: 'EventDefinition',
  Evidence: 'Evidence',
  EvidenceVariable: 'EvidenceVariable',
  ExampleScenario: 'ExampleScenario',
  ExplanationOfBenefit: 'ExplanationOfBenefit',
  FamilyMemberHistory: 'FamilyMemberHistory',
  Flag: 'Flag',
  Goal: 'Goal',
  GraphDefinition: 'GraphDefinition',
  Group: 'Group',
  GuidanceResponse: 'GuidanceResponse',
  HealthcareService: 'HealthcareService',
  ImagingStudy: 'ImagingStudy',
  Immunization: 'Immunization',
  ImmunizationEvaluation: 'ImmunizationEvaluation',
  ImmunizationRecommendation: 'ImmunizationRecommendation',
  ImplementationGuide: 'ImplementationGuide',
  InsurancePlan: 'InsurancePlan',
  Invoice: 'Invoice',
  Library: 'Library',
  Linkage: 'Linkage',
  List: 'List',
  Location: 'Location',
  Measure: 'Measure',
  MeasureReport: 'MeasureReport',
  Media: 'Media',
  Medication: 'Medication',
  MedicationAdministration: 'MedicationAdministration',
  MedicationDispense: 'MedicationDispense',
  MedicationKnowledge: 'MedicationKnowledge',
  MedicationRequest: 'MedicationRequest',
  MedicationStatement: 'MedicationStatement',
  MedicinalProduct: 'MedicinalProduct',
  MedicinalProductAuthorization: 'MedicinalProductAuthorization',
  MedicinalProductContraindication: 'MedicinalProductContraindication',
  MedicinalProductIndication: 'MedicinalProductIndication',
  MedicinalProductIngredient: 'MedicinalProductIngredient',
  MedicinalProductInteraction: 'MedicinalProductInteraction',
  MedicinalProductManufactured: 'MedicinalProductManufactured',
  MedicinalProductPackaged: 'MedicinalProductPackaged',
  MedicinalProductPharmaceutical: 'MedicinalProductPharmaceutical',
  MedicinalProductUndesirableEffect: 'MedicinalProductUndesirableEffect',
  MessageDefinition: 'MessageDefinition',
  MessageHeader: 'MessageHeader',
  MolecularSequence: 'MolecularSequence',
  NamingSystem: 'NamingSystem',
  NutritionOrder: 'NutritionOrder',
  Observation: 'Observation',
  ObservationDefinition: 'ObservationDefinition',
  OperationDefinition: 'OperationDefinition',
  OperationOutcome: 'OperationOutcome',
  Organization: 'Organization',
  OrganizationAffiliation: 'OrganizationAffiliation',
  Parameters: 'Parameters',
  Patient: 'Patient',
  PaymentNotice: 'PaymentNotice',
  PaymentReconciliation: 'PaymentReconciliation',
  Person: 'Person',
  PlanDefinition: 'PlanDefinition',
  Practitioner: 'Practitioner',
  PractitionerRole: 'PractitionerRole',
  Procedure: 'Procedure',
  Provenance: 'Provenance',
  Questionnaire: 'Questionnaire',
  QuestionnaireResponse: 'QuestionnaireResponse',
  RelatedPerson: 'RelatedPerson',
  RequestGroup: 'RequestGroup',
  ResearchDefinition: 'ResearchDefinition',
  ResearchElementDefinition: 'ResearchElementDefinition',
  ResearchStudy: 'ResearchStudy',
  ResearchSubject: 'ResearchSubject',
  Resource: 'Resource',
  RiskAssessment: 'RiskAssessment',
  RiskEvidenceSynthesis: 'RiskEvidenceSynthesis',
  Schedule: 'Schedule',
  SearchParameter: 'SearchParameter',
  ServiceRequest: 'ServiceRequest',
  Slot: 'Slot',
  Specimen: 'Specimen',
  SpecimenDefinition: 'SpecimenDefinition',
  StructureDefinition: 'StructureDefinition',
  StructureMap: 'StructureMap',
  Subscription: 'Subscription',
  Substance: 'Substance',
  SubstanceNucleicAcid: 'SubstanceNucleicAcid',
  SubstancePolymer: 'SubstancePolymer',
  SubstanceProtein: 'SubstanceProtein',
  SubstanceReferenceInformation: 'SubstanceReferenceInformation',
  SubstanceSourceMaterial: 'SubstanceSourceMaterial',
  SubstanceSpecification: 'SubstanceSpecification',
  SupplyDelivery: 'SupplyDelivery',
  SupplyRequest: 'SupplyRequest',
  Task: 'Task',
  TerminologyCapabilities: 'TerminologyCapabilities',
  TestReport: 'TestReport',
  TestScript: 'TestScript',
  ValueSet: 'ValueSet',
  VerificationResult: 'VerificationResult',
  VisionPrescription: 'VisionPrescription',
} as const;
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/** ResourceVersionPolicy (http://hl7.org/fhir/ValueSet/versioning-policy) */
export const ResourceVersionPolicy = {
  NoVersion: 'no-version',
  Versioned: 'versioned',
  VersionedUpdate: 'versioned-update',
} as const;
export type ResourceVersionPolicy =
  (typeof ResourceVersionPolicy)[keyof typeof ResourceVersionPolicy];

/** ResponseType (http://hl7.org/fhir/ValueSet/response-code) */
export const ResponseType = {
  Ok: 'ok',
  TransientError: 'transient-error',
  FatalError: 'fatal-error',
} as const;
export type ResponseType = (typeof ResponseType)[keyof typeof ResponseType];

/** RestfulCapabilityMode (http://hl7.org/fhir/ValueSet/restful-capability-mode) */
export const RestfulCapabilityMode = { Client: 'client', Server: 'server' } as const;
export type RestfulCapabilityMode =
  (typeof RestfulCapabilityMode)[keyof typeof RestfulCapabilityMode];

/** SearchComparator (http://hl7.org/fhir/ValueSet/search-comparator) */
export const SearchComparator = {
  Eq: 'eq',
  Ne: 'ne',
  Gt: 'gt',
  Lt: 'lt',
  Ge: 'ge',
  Le: 'le',
  Sa: 'sa',
  Eb: 'eb',
  Ap: 'ap',
} as const;
export type SearchComparator = (typeof SearchComparator)[keyof typeof SearchComparator];

/** SearchEntryMode (http://hl7.org/fhir/ValueSet/search-entry-mode) */
export const SearchEntryMode = { Match: 'match', Include: 'include', Outcome: 'outcome' } as const;
export type SearchEntryMode = (typeof SearchEntryMode)[keyof typeof SearchEntryMode];

/** SearchModifierCode (http://hl7.org/fhir/ValueSet/search-modifier-code) */
export const SearchModifierCode = {
  Missing: 'missing',
  Exact: 'exact',
  Contains: 'contains',
  Not: 'not',
  Text: 'text',
  In: 'in',
  NotIn: 'not-in',
  Below: 'below',
  Above: 'above',
  Type: 'type',
  Identifier: 'identifier',
  OfType: 'ofType',
} as const;
export type SearchModifierCode = (typeof SearchModifierCode)[keyof typeof SearchModifierCode];

/** SearchParamType (http://hl7.org/fhir/ValueSet/search-param-type) */
export const SearchParamType = {
  Number: 'number',
  Date: 'date',
  String: 'string',
  Token: 'token',
  Reference: 'reference',
  Composite: 'composite',
  Quantity: 'quantity',
  Uri: 'uri',
  Special: 'special',
} as const;
export type SearchParamType = (typeof SearchParamType)[keyof typeof SearchParamType];

/** sequenceType (http://hl7.org/fhir/ValueSet/sequence-type) */
export const SequenceType = { Aa: 'aa', Dna: 'dna', Rna: 'rna' } as const;
export type SequenceType = (typeof SequenceType)[keyof typeof SequenceType];

/** SlicingRules (http://hl7.org/fhir/ValueSet/resource-slicing-rules) */
export const SlicingRules = { Closed: 'closed', Open: 'open', OpenAtEnd: 'openAtEnd' } as const;
export type SlicingRules = (typeof SlicingRules)[keyof typeof SlicingRules];

/** SlotStatus (http://hl7.org/fhir/ValueSet/slotstatus) */
export const SlotStatus = {
  Busy: 'busy',
  Free: 'free',
  BusyUnavailable: 'busy-unavailable',
  BusyTentative: 'busy-tentative',
  EnteredInError: 'entered-in-error',
} as const;
export type SlotStatus = (typeof SlotStatus)[keyof typeof SlotStatus];

/** SortDirection (http://hl7.org/fhir/ValueSet/sort-direction) */
export const SortDirection = { Ascending: 'ascending', Descending: 'descending' } as const;
export type SortDirection = (typeof SortDirection)[keyof typeof SortDirection];

/** SPDXLicense (http://hl7.org/fhir/ValueSet/spdx-license) */
export const SPDXLicense = {
  NotOpenSource: 'not-open-source',
  _0BSD: '0BSD',
  AAL: 'AAL',
  Abstyles: 'Abstyles',
  Adobe2006: 'Adobe-2006',
  AdobeGlyph: 'Adobe-Glyph',
  ADSL: 'ADSL',
  AFL11: 'AFL-1.1',
  AFL12: 'AFL-1.2',
  AFL20: 'AFL-2.0',
  AFL21: 'AFL-2.1',
  AFL30: 'AFL-3.0',
  Afmparse: 'Afmparse',
  AGPL10Only: 'AGPL-1.0-only',
  AGPL10OrLater: 'AGPL-1.0-or-later',
  AGPL30Only: 'AGPL-3.0-only',
  AGPL30OrLater: 'AGPL-3.0-or-later',
  Aladdin: 'Aladdin',
  AMDPLPA: 'AMDPLPA',
  AML: 'AML',
  AMPAS: 'AMPAS',
  ANTLRPD: 'ANTLR-PD',
  Apache10: 'Apache-1.0',
  Apache11: 'Apache-1.1',
  Apache20: 'Apache-2.0',
  APAFML: 'APAFML',
  APL10: 'APL-1.0',
  APSL10: 'APSL-1.0',
  APSL11: 'APSL-1.1',
  APSL12: 'APSL-1.2',
  APSL20: 'APSL-2.0',
  Artistic10Cl8: 'Artistic-1.0-cl8',
  Artistic10Perl: 'Artistic-1.0-Perl',
  Artistic10: 'Artistic-1.0',
  Artistic20: 'Artistic-2.0',
  Bahyph: 'Bahyph',
  Barr: 'Barr',
  Beerware: 'Beerware',
  BitTorrent10: 'BitTorrent-1.0',
  BitTorrent11: 'BitTorrent-1.1',
  Borceux: 'Borceux',
  BSD1Clause: 'BSD-1-Clause',
  BSD2ClauseFreeBSD: 'BSD-2-Clause-FreeBSD',
  BSD2ClauseNetBSD: 'BSD-2-Clause-NetBSD',
  BSD2ClausePatent: 'BSD-2-Clause-Patent',
  BSD2Clause: 'BSD-2-Clause',
  BSD3ClauseAttribution: 'BSD-3-Clause-Attribution',
  BSD3ClauseClear: 'BSD-3-Clause-Clear',
  BSD3ClauseLBNL: 'BSD-3-Clause-LBNL',
  BSD3ClauseNoNuclearLicense2014: 'BSD-3-Clause-No-Nuclear-License-2014',
  BSD3ClauseNoNuclearLicense: 'BSD-3-Clause-No-Nuclear-License',
  BSD3ClauseNoNuclearWarranty: 'BSD-3-Clause-No-Nuclear-Warranty',
  BSD3Clause: 'BSD-3-Clause',
  BSD4ClauseUC: 'BSD-4-Clause-UC',
  BSD4Clause: 'BSD-4-Clause',
  BSDProtection: 'BSD-Protection',
  BSDSourceCode: 'BSD-Source-Code',
  BSL10: 'BSL-1.0',
  Bzip2105: 'bzip2-1.0.5',
  Bzip2106: 'bzip2-1.0.6',
  Caldera: 'Caldera',
  CATOSL11: 'CATOSL-1.1',
  CCBY10: 'CC-BY-1.0',
  CCBY20: 'CC-BY-2.0',
  CCBY25: 'CC-BY-2.5',
  CCBY30: 'CC-BY-3.0',
  CCBY40: 'CC-BY-4.0',
  CCBYNC10: 'CC-BY-NC-1.0',
  CCBYNC20: 'CC-BY-NC-2.0',
  CCBYNC25: 'CC-BY-NC-2.5',
  CCBYNC30: 'CC-BY-NC-3.0',
  CCBYNC40: 'CC-BY-NC-4.0',
  CCBYNCND10: 'CC-BY-NC-ND-1.0',
  CCBYNCND20: 'CC-BY-NC-ND-2.0',
  CCBYNCND25: 'CC-BY-NC-ND-2.5',
  CCBYNCND30: 'CC-BY-NC-ND-3.0',
  CCBYNCND40: 'CC-BY-NC-ND-4.0',
  CCBYNCSA10: 'CC-BY-NC-SA-1.0',
  CCBYNCSA20: 'CC-BY-NC-SA-2.0',
  CCBYNCSA25: 'CC-BY-NC-SA-2.5',
  CCBYNCSA30: 'CC-BY-NC-SA-3.0',
  CCBYNCSA40: 'CC-BY-NC-SA-4.0',
  CCBYND10: 'CC-BY-ND-1.0',
  CCBYND20: 'CC-BY-ND-2.0',
  CCBYND25: 'CC-BY-ND-2.5',
  CCBYND30: 'CC-BY-ND-3.0',
  CCBYND40: 'CC-BY-ND-4.0',
  CCBYSA10: 'CC-BY-SA-1.0',
  CCBYSA20: 'CC-BY-SA-2.0',
  CCBYSA25: 'CC-BY-SA-2.5',
  CCBYSA30: 'CC-BY-SA-3.0',
  CCBYSA40: 'CC-BY-SA-4.0',
  CC010: 'CC0-1.0',
  CDDL10: 'CDDL-1.0',
  CDDL11: 'CDDL-1.1',
  CDLAPermissive10: 'CDLA-Permissive-1.0',
  CDLASharing10: 'CDLA-Sharing-1.0',
  CECILL10: 'CECILL-1.0',
  CECILL11: 'CECILL-1.1',
  CECILL20: 'CECILL-2.0',
  CECILL21: 'CECILL-2.1',
  CECILLB: 'CECILL-B',
  CECILLC: 'CECILL-C',
  ClArtistic: 'ClArtistic',
  CNRIJython: 'CNRI-Jython',
  CNRIPythonGPLCompatible: 'CNRI-Python-GPL-Compatible',
  CNRIPython: 'CNRI-Python',
  Condor11: 'Condor-1.1',
  CPAL10: 'CPAL-1.0',
  CPL10: 'CPL-1.0',
  CPOL102: 'CPOL-1.02',
  Crossword: 'Crossword',
  CrystalStacker: 'CrystalStacker',
  CUAOPL10: 'CUA-OPL-1.0',
  Cube: 'Cube',
  Curl: 'curl',
  DFSL10: 'D-FSL-1.0',
  Diffmark: 'diffmark',
  DOC: 'DOC',
  Dotseqn: 'Dotseqn',
  DSDP: 'DSDP',
  Dvipdfm: 'dvipdfm',
  ECL10: 'ECL-1.0',
  ECL20: 'ECL-2.0',
  EFL10: 'EFL-1.0',
  EFL20: 'EFL-2.0',
  EGenix: 'eGenix',
  Entessa: 'Entessa',
  EPL10: 'EPL-1.0',
  EPL20: 'EPL-2.0',
  ErlPL11: 'ErlPL-1.1',
  EUDatagrid: 'EUDatagrid',
  EUPL10: 'EUPL-1.0',
  EUPL11: 'EUPL-1.1',
  EUPL12: 'EUPL-1.2',
  Eurosym: 'Eurosym',
  Fair: 'Fair',
  Frameworx10: 'Frameworx-1.0',
  FreeImage: 'FreeImage',
  FSFAP: 'FSFAP',
  FSFUL: 'FSFUL',
  FSFULLR: 'FSFULLR',
  FTL: 'FTL',
  GFDL11Only: 'GFDL-1.1-only',
  GFDL11OrLater: 'GFDL-1.1-or-later',
  GFDL12Only: 'GFDL-1.2-only',
  GFDL12OrLater: 'GFDL-1.2-or-later',
  GFDL13Only: 'GFDL-1.3-only',
  GFDL13OrLater: 'GFDL-1.3-or-later',
  Giftware: 'Giftware',
  GL2PS: 'GL2PS',
  Glide: 'Glide',
  Glulxe: 'Glulxe',
  Gnuplot: 'gnuplot',
  GPL10Only: 'GPL-1.0-only',
  GPL10OrLater: 'GPL-1.0-or-later',
  GPL20Only: 'GPL-2.0-only',
  GPL20OrLater: 'GPL-2.0-or-later',
  GPL30Only: 'GPL-3.0-only',
  GPL30OrLater: 'GPL-3.0-or-later',
  GSOAP13b: 'gSOAP-1.3b',
  HaskellReport: 'HaskellReport',
  HPND: 'HPND',
  IBMPibs: 'IBM-pibs',
  ICU: 'ICU',
  IJG: 'IJG',
  ImageMagick: 'ImageMagick',
  IMatix: 'iMatix',
  Imlib2: 'Imlib2',
  InfoZIP: 'Info-ZIP',
  IntelACPI: 'Intel-ACPI',
  Intel: 'Intel',
  Interbase10: 'Interbase-1.0',
  IPA: 'IPA',
  IPL10: 'IPL-1.0',
  ISC: 'ISC',
  JasPer20: 'JasPer-2.0',
  JSON: 'JSON',
  LAL12: 'LAL-1.2',
  LAL13: 'LAL-1.3',
  Latex2e: 'Latex2e',
  Leptonica: 'Leptonica',
  LGPL20Only: 'LGPL-2.0-only',
  LGPL20OrLater: 'LGPL-2.0-or-later',
  LGPL21Only: 'LGPL-2.1-only',
  LGPL21OrLater: 'LGPL-2.1-or-later',
  LGPL30Only: 'LGPL-3.0-only',
  LGPL30OrLater: 'LGPL-3.0-or-later',
  LGPLLR: 'LGPLLR',
  Libpng: 'Libpng',
  Libtiff: 'libtiff',
  LiLiQP11: 'LiLiQ-P-1.1',
  LiLiQR11: 'LiLiQ-R-1.1',
  LiLiQRplus11: 'LiLiQ-Rplus-1.1',
  LinuxOpenIB: 'Linux-OpenIB',
  LPL10: 'LPL-1.0',
  LPL102: 'LPL-1.02',
  LPPL10: 'LPPL-1.0',
  LPPL11: 'LPPL-1.1',
  LPPL12: 'LPPL-1.2',
  LPPL13a: 'LPPL-1.3a',
  LPPL13c: 'LPPL-1.3c',
  MakeIndex: 'MakeIndex',
  MirOS: 'MirOS',
  MIT0: 'MIT-0',
  MITAdvertising: 'MIT-advertising',
  MITCMU: 'MIT-CMU',
  MITEnna: 'MIT-enna',
  MITFeh: 'MIT-feh',
  MIT: 'MIT',
  MITNFA: 'MITNFA',
  Motosoto: 'Motosoto',
  Mpich2: 'mpich2',
  MPL10: 'MPL-1.0',
  MPL11: 'MPL-1.1',
  MPL20NoCopyleftException: 'MPL-2.0-no-copyleft-exception',
  MPL20: 'MPL-2.0',
  MSPL: 'MS-PL',
  MSRL: 'MS-RL',
  MTLL: 'MTLL',
  Multics: 'Multics',
  Mup: 'Mup',
  NASA13: 'NASA-1.3',
  Naumen: 'Naumen',
  NBPL10: 'NBPL-1.0',
  NCSA: 'NCSA',
  NetSNMP: 'Net-SNMP',
  NetCDF: 'NetCDF',
  Newsletr: 'Newsletr',
  NGPL: 'NGPL',
  NLOD10: 'NLOD-1.0',
  NLPL: 'NLPL',
  Nokia: 'Nokia',
  NOSL: 'NOSL',
  Noweb: 'Noweb',
  NPL10: 'NPL-1.0',
  NPL11: 'NPL-1.1',
  NPOSL30: 'NPOSL-3.0',
  NRL: 'NRL',
  NTP: 'NTP',
  OCCTPL: 'OCCT-PL',
  OCLC20: 'OCLC-2.0',
  ODbL10: 'ODbL-1.0',
  OFL10: 'OFL-1.0',
  OFL11: 'OFL-1.1',
  OGTSL: 'OGTSL',
  OLDAP11: 'OLDAP-1.1',
  OLDAP12: 'OLDAP-1.2',
  OLDAP13: 'OLDAP-1.3',
  OLDAP14: 'OLDAP-1.4',
  OLDAP201: 'OLDAP-2.0.1',
  OLDAP20: 'OLDAP-2.0',
  OLDAP21: 'OLDAP-2.1',
  OLDAP221: 'OLDAP-2.2.1',
  OLDAP222: 'OLDAP-2.2.2',
  OLDAP22: 'OLDAP-2.2',
  OLDAP23: 'OLDAP-2.3',
  OLDAP24: 'OLDAP-2.4',
  OLDAP25: 'OLDAP-2.5',
  OLDAP26: 'OLDAP-2.6',
  OLDAP27: 'OLDAP-2.7',
  OLDAP28: 'OLDAP-2.8',
  OML: 'OML',
  OpenSSL: 'OpenSSL',
  OPL10: 'OPL-1.0',
  OSETPL21: 'OSET-PL-2.1',
  OSL10: 'OSL-1.0',
  OSL11: 'OSL-1.1',
  OSL20: 'OSL-2.0',
  OSL21: 'OSL-2.1',
  OSL30: 'OSL-3.0',
  PDDL10: 'PDDL-1.0',
  PHP30: 'PHP-3.0',
  PHP301: 'PHP-3.01',
  Plexus: 'Plexus',
  PostgreSQL: 'PostgreSQL',
  Psfrag: 'psfrag',
  Psutils: 'psutils',
  Python20: 'Python-2.0',
  Qhull: 'Qhull',
  QPL10: 'QPL-1.0',
  Rdisc: 'Rdisc',
  RHeCos11: 'RHeCos-1.1',
  RPL11: 'RPL-1.1',
  RPL15: 'RPL-1.5',
  RPSL10: 'RPSL-1.0',
  RSAMD: 'RSA-MD',
  RSCPL: 'RSCPL',
  Ruby: 'Ruby',
  SAXPD: 'SAX-PD',
  Saxpath: 'Saxpath',
  SCEA: 'SCEA',
  Sendmail: 'Sendmail',
  SGIB10: 'SGI-B-1.0',
  SGIB11: 'SGI-B-1.1',
  SGIB20: 'SGI-B-2.0',
  SimPL20: 'SimPL-2.0',
  SISSL12: 'SISSL-1.2',
  SISSL: 'SISSL',
  Sleepycat: 'Sleepycat',
  SMLNJ: 'SMLNJ',
  SMPPL: 'SMPPL',
  SNIA: 'SNIA',
  Spencer86: 'Spencer-86',
  Spencer94: 'Spencer-94',
  Spencer99: 'Spencer-99',
  SPL10: 'SPL-1.0',
  SugarCRM113: 'SugarCRM-1.1.3',
  SWL: 'SWL',
  TCL: 'TCL',
  TCPWrappers: 'TCP-wrappers',
  TMate: 'TMate',
  TORQUE11: 'TORQUE-1.1',
  TOSL: 'TOSL',
  UnicodeDFS2015: 'Unicode-DFS-2015',
  UnicodeDFS2016: 'Unicode-DFS-2016',
  UnicodeTOU: 'Unicode-TOU',
  Unlicense: 'Unlicense',
  UPL10: 'UPL-1.0',
  Vim: 'Vim',
  VOSTROM: 'VOSTROM',
  VSL10: 'VSL-1.0',
  W3C19980720: 'W3C-19980720',
  W3C20150513: 'W3C-20150513',
  W3C: 'W3C',
  Watcom10: 'Watcom-1.0',
  Wsuipa: 'Wsuipa',
  WTFPL: 'WTFPL',
  X11: 'X11',
  Xerox: 'Xerox',
  XFree8611: 'XFree86-1.1',
  Xinetd: 'xinetd',
  Xnet: 'Xnet',
  Xpp: 'xpp',
  XSkat: 'XSkat',
  YPL10: 'YPL-1.0',
  YPL11: 'YPL-1.1',
  Zed: 'Zed',
  Zend20: 'Zend-2.0',
  Zimbra13: 'Zimbra-1.3',
  Zimbra14: 'Zimbra-1.4',
  ZlibAcknowledgement: 'zlib-acknowledgement',
  Zlib: 'Zlib',
  ZPL11: 'ZPL-1.1',
  ZPL20: 'ZPL-2.0',
  ZPL21: 'ZPL-2.1',
} as const;
export type SPDXLicense = (typeof SPDXLicense)[keyof typeof SPDXLicense];

/** SpecimenContainedPreference (http://hl7.org/fhir/ValueSet/specimen-contained-preference) */
export const SpecimenContainedPreference = {
  Preferred: 'preferred',
  Alternate: 'alternate',
} as const;
export type SpecimenContainedPreference =
  (typeof SpecimenContainedPreference)[keyof typeof SpecimenContainedPreference];

/** SpecimenStatus (http://hl7.org/fhir/ValueSet/specimen-status) */
export const SpecimenStatus = {
  Available: 'available',
  Unavailable: 'unavailable',
  Unsatisfactory: 'unsatisfactory',
  EnteredInError: 'entered-in-error',
} as const;
export type SpecimenStatus = (typeof SpecimenStatus)[keyof typeof SpecimenStatus];

/** Status (http://hl7.org/fhir/ValueSet/verificationresult-status) */
export const Status = {
  Attested: 'attested',
  Validated: 'validated',
  InProcess: 'in-process',
  ReqRevalid: 'req-revalid',
  ValFail: 'val-fail',
  RevalFail: 'reval-fail',
} as const;
export type Status = (typeof Status)[keyof typeof Status];

/** strandType (http://hl7.org/fhir/ValueSet/strand-type) */
export const StrandType = { Watson: 'watson', Crick: 'crick' } as const;
export type StrandType = (typeof StrandType)[keyof typeof StrandType];

/** StructureDefinitionKind (http://hl7.org/fhir/ValueSet/structure-definition-kind) */
export const StructureDefinitionKind = {
  PrimitiveType: 'primitive-type',
  ComplexType: 'complex-type',
  Resource: 'resource',
  Logical: 'logical',
} as const;
export type StructureDefinitionKind =
  (typeof StructureDefinitionKind)[keyof typeof StructureDefinitionKind];

/** StructureMapContextType (http://hl7.org/fhir/ValueSet/map-context-type) */
export const StructureMapContextType = { Type: 'type', Variable: 'variable' } as const;
export type StructureMapContextType =
  (typeof StructureMapContextType)[keyof typeof StructureMapContextType];

/** StructureMapGroupTypeMode (http://hl7.org/fhir/ValueSet/map-group-type-mode) */
export const StructureMapGroupTypeMode = {
  None: 'none',
  Types: 'types',
  TypeAndTypes: 'type-and-types',
} as const;
export type StructureMapGroupTypeMode =
  (typeof StructureMapGroupTypeMode)[keyof typeof StructureMapGroupTypeMode];

/** StructureMapInputMode (http://hl7.org/fhir/ValueSet/map-input-mode) */
export const StructureMapInputMode = { Source: 'source', Target: 'target' } as const;
export type StructureMapInputMode =
  (typeof StructureMapInputMode)[keyof typeof StructureMapInputMode];

/** StructureMapModelMode (http://hl7.org/fhir/ValueSet/map-model-mode) */
export const StructureMapModelMode = {
  Source: 'source',
  Queried: 'queried',
  Target: 'target',
  Produced: 'produced',
} as const;
export type StructureMapModelMode =
  (typeof StructureMapModelMode)[keyof typeof StructureMapModelMode];

/** StructureMapSourceListMode (http://hl7.org/fhir/ValueSet/map-source-list-mode) */
export const StructureMapSourceListMode = {
  First: 'first',
  NotFirst: 'not_first',
  Last: 'last',
  NotLast: 'not_last',
  OnlyOne: 'only_one',
} as const;
export type StructureMapSourceListMode =
  (typeof StructureMapSourceListMode)[keyof typeof StructureMapSourceListMode];

/** StructureMapTargetListMode (http://hl7.org/fhir/ValueSet/map-target-list-mode) */
export const StructureMapTargetListMode = {
  First: 'first',
  Share: 'share',
  Last: 'last',
  Collate: 'collate',
} as const;
export type StructureMapTargetListMode =
  (typeof StructureMapTargetListMode)[keyof typeof StructureMapTargetListMode];

/** StructureMapTransform (http://hl7.org/fhir/ValueSet/map-transform) */
export const StructureMapTransform = {
  Create: 'create',
  Copy: 'copy',
  Truncate: 'truncate',
  Escape: 'escape',
  Cast: 'cast',
  Append: 'append',
  Translate: 'translate',
  Reference: 'reference',
  DateOp: 'dateOp',
  Uuid: 'uuid',
  Pointer: 'pointer',
  Evaluate: 'evaluate',
  Cc: 'cc',
  C: 'c',
  Qty: 'qty',
  Id: 'id',
  Cp: 'cp',
} as const;
export type StructureMapTransform =
  (typeof StructureMapTransform)[keyof typeof StructureMapTransform];

/** SubscriptionChannelType (http://hl7.org/fhir/ValueSet/subscription-channel-type) */
export const SubscriptionChannelType = {
  RestHook: 'rest-hook',
  Websocket: 'websocket',
  Email: 'email',
  Sms: 'sms',
  Message: 'message',
} as const;
export type SubscriptionChannelType =
  (typeof SubscriptionChannelType)[keyof typeof SubscriptionChannelType];

/** SubscriptionStatus (http://hl7.org/fhir/ValueSet/subscription-status) */
export const SubscriptionStatus = {
  Requested: 'requested',
  Active: 'active',
  Error: 'error',
  Off: 'off',
} as const;
export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus];

/** SupplyDeliveryStatus (http://hl7.org/fhir/ValueSet/supplydelivery-status) */
export const SupplyDeliveryStatus = {
  InProgress: 'in-progress',
  Completed: 'completed',
  Abandoned: 'abandoned',
  EnteredInError: 'entered-in-error',
} as const;
export type SupplyDeliveryStatus = (typeof SupplyDeliveryStatus)[keyof typeof SupplyDeliveryStatus];

/** SupplyRequestStatus (http://hl7.org/fhir/ValueSet/supplyrequest-status) */
export const SupplyRequestStatus = {
  Draft: 'draft',
  Active: 'active',
  Suspended: 'suspended',
  Cancelled: 'cancelled',
  Completed: 'completed',
  EnteredInError: 'entered-in-error',
  Unknown: 'unknown',
} as const;
export type SupplyRequestStatus = (typeof SupplyRequestStatus)[keyof typeof SupplyRequestStatus];

/** SystemRestfulInteraction (http://hl7.org/fhir/ValueSet/system-restful-interaction) */
export const SystemRestfulInteraction = {
  Transaction: 'transaction',
  Batch: 'batch',
  SearchSystem: 'search-system',
  HistorySystem: 'history-system',
} as const;
export type SystemRestfulInteraction =
  (typeof SystemRestfulInteraction)[keyof typeof SystemRestfulInteraction];

/** TaskIntent (http://hl7.org/fhir/ValueSet/task-intent) */
export const TaskIntent = {
  Unknown: 'unknown',
  Proposal: 'proposal',
  Plan: 'plan',
  Order: 'order',
  OriginalOrder: 'original-order',
  ReflexOrder: 'reflex-order',
  FillerOrder: 'filler-order',
  InstanceOrder: 'instance-order',
  Option: 'option',
} as const;
export type TaskIntent = (typeof TaskIntent)[keyof typeof TaskIntent];

/** TaskStatus (http://hl7.org/fhir/ValueSet/task-status) */
export const TaskStatus = {
  Draft: 'draft',
  Requested: 'requested',
  Received: 'received',
  Accepted: 'accepted',
  Rejected: 'rejected',
  Ready: 'ready',
  Cancelled: 'cancelled',
  InProgress: 'in-progress',
  OnHold: 'on-hold',
  Failed: 'failed',
  Completed: 'completed',
  EnteredInError: 'entered-in-error',
} as const;
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];

/** TestReportActionResult (http://hl7.org/fhir/ValueSet/report-action-result-codes) */
export const TestReportActionResult = {
  Pass: 'pass',
  Skip: 'skip',
  Fail: 'fail',
  Warning: 'warning',
  Error: 'error',
} as const;
export type TestReportActionResult =
  (typeof TestReportActionResult)[keyof typeof TestReportActionResult];

/** TestReportParticipantType (http://hl7.org/fhir/ValueSet/report-participant-type) */
export const TestReportParticipantType = {
  TestEngine: 'test-engine',
  Client: 'client',
  Server: 'server',
} as const;
export type TestReportParticipantType =
  (typeof TestReportParticipantType)[keyof typeof TestReportParticipantType];

/** TestReportResult (http://hl7.org/fhir/ValueSet/report-result-codes) */
export const TestReportResult = { Pass: 'pass', Fail: 'fail', Pending: 'pending' } as const;
export type TestReportResult = (typeof TestReportResult)[keyof typeof TestReportResult];

/** TestReportStatus (http://hl7.org/fhir/ValueSet/report-status-codes) */
export const TestReportStatus = {
  Completed: 'completed',
  InProgress: 'in-progress',
  Waiting: 'waiting',
  Stopped: 'stopped',
  EnteredInError: 'entered-in-error',
} as const;
export type TestReportStatus = (typeof TestReportStatus)[keyof typeof TestReportStatus];

/** TestScriptRequestMethodCode (http://hl7.org/fhir/ValueSet/http-operations) */
export const TestScriptRequestMethodCode = {
  Delete: 'delete',
  Get: 'get',
  Options: 'options',
  Patch: 'patch',
  Post: 'post',
  Put: 'put',
  Head: 'head',
} as const;
export type TestScriptRequestMethodCode =
  (typeof TestScriptRequestMethodCode)[keyof typeof TestScriptRequestMethodCode];

/** TriggerType (http://hl7.org/fhir/ValueSet/trigger-type) */
export const TriggerType = {
  NamedEvent: 'named-event',
  Periodic: 'periodic',
  DataChanged: 'data-changed',
  DataAdded: 'data-added',
  DataModified: 'data-modified',
  DataRemoved: 'data-removed',
  DataAccessed: 'data-accessed',
  DataAccessEnded: 'data-access-ended',
} as const;
export type TriggerType = (typeof TriggerType)[keyof typeof TriggerType];

/** TypeDerivationRule (http://hl7.org/fhir/ValueSet/type-derivation-rule) */
export const TypeDerivationRule = {
  Specialization: 'specialization',
  Constraint: 'constraint',
} as const;
export type TypeDerivationRule = (typeof TypeDerivationRule)[keyof typeof TypeDerivationRule];

/** TypeRestfulInteraction (http://hl7.org/fhir/ValueSet/type-restful-interaction) */
export const TypeRestfulInteraction = {
  Read: 'read',
  Vread: 'vread',
  Update: 'update',
  Patch: 'patch',
  Delete: 'delete',
  HistoryInstance: 'history-instance',
  HistoryType: 'history-type',
  Create: 'create',
  SearchType: 'search-type',
} as const;
export type TypeRestfulInteraction =
  (typeof TypeRestfulInteraction)[keyof typeof TypeRestfulInteraction];

/** UDIEntryType (http://hl7.org/fhir/ValueSet/udi-entry-type) */
export const UDIEntryType = {
  Barcode: 'barcode',
  Rfid: 'rfid',
  Manual: 'manual',
  Card: 'card',
  SelfReported: 'self-reported',
  Unknown: 'unknown',
} as const;
export type UDIEntryType = (typeof UDIEntryType)[keyof typeof UDIEntryType];

/** UnitsOfTime (http://hl7.org/fhir/ValueSet/units-of-time) */
export const UnitsOfTime = {
  S: 's',
  Min: 'min',
  H: 'h',
  D: 'd',
  Wk: 'wk',
  Mo: 'mo',
  A: 'a',
} as const;
export type UnitsOfTime = (typeof UnitsOfTime)[keyof typeof UnitsOfTime];

/** Use (http://hl7.org/fhir/ValueSet/claim-use) */
export const Use = {
  Claim: 'claim',
  Preauthorization: 'preauthorization',
  Predetermination: 'predetermination',
} as const;
export type Use = (typeof Use)[keyof typeof Use];

/** V3 Value SetConfidentialityClassification (http://terminology.hl7.org/ValueSet/v3-ConfidentialityClassification) */
export const V3ConfidentialityClassification = {
  U: 'U',
  L: 'L',
  M: 'M',
  N: 'N',
  R: 'R',
  V: 'V',
} as const;
export type V3ConfidentialityClassification =
  (typeof V3ConfidentialityClassification)[keyof typeof V3ConfidentialityClassification];

/** VisionBase (http://hl7.org/fhir/ValueSet/vision-base-codes) */
export const VisionBase = { Up: 'up', Down: 'down', In: 'in', Out: 'out' } as const;
export type VisionBase = (typeof VisionBase)[keyof typeof VisionBase];

/** VisionEyes (http://hl7.org/fhir/ValueSet/vision-eye-codes) */
export const VisionEyes = { Right: 'right', Left: 'left' } as const;
export type VisionEyes = (typeof VisionEyes)[keyof typeof VisionEyes];

/** XPathUsageType (http://hl7.org/fhir/ValueSet/search-xpath-usage) */
export const XPathUsageType = {
  Normal: 'normal',
  Phonetic: 'phonetic',
  Nearby: 'nearby',
  Distance: 'distance',
  Other: 'other',
} as const;
export type XPathUsageType = (typeof XPathUsageType)[keyof typeof XPathUsageType];
