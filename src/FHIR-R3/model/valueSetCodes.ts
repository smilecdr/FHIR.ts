/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

// Codes of the value sets that FHIR binds to elements with strength "required".

/** AccountStatus (http://hl7.org/fhir/ValueSet/account-status) */
export const AccountStatus = {
  Active: 'active',
  Inactive: 'inactive',
  EnteredInError: 'entered-in-error',
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

/** ActionList (http://hl7.org/fhir/ValueSet/actionlist) */
export const ActionList = {
  Cancel: 'cancel',
  Poll: 'poll',
  Reprocess: 'reprocess',
  Status: 'status',
} as const;
export type ActionList = (typeof ActionList)[keyof typeof ActionList];

/** ActionParticipantType (http://hl7.org/fhir/ValueSet/action-participant-type) */
export const ActionParticipantType = {
  Patient: 'patient',
  Practitioner: 'practitioner',
  RelatedPerson: 'related-person',
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
export const AddressUse = { Home: 'home', Work: 'work', Temp: 'temp', Old: 'old' } as const;
export type AddressUse = (typeof AddressUse)[keyof typeof AddressUse];

/** AdministrativeGender (http://hl7.org/fhir/ValueSet/administrative-gender) */
export const AdministrativeGender = {
  Male: 'male',
  Female: 'female',
  Other: 'other',
  Unknown: 'unknown',
} as const;
export type AdministrativeGender = (typeof AdministrativeGender)[keyof typeof AdministrativeGender];

/** AdverseEventCategory (http://hl7.org/fhir/ValueSet/adverse-event-category) */
export const AdverseEventCategory = { AE: 'AE', PAE: 'PAE' } as const;
export type AdverseEventCategory = (typeof AdverseEventCategory)[keyof typeof AdverseEventCategory];

/** AdverseEventCausality (http://hl7.org/fhir/ValueSet/adverse-event-causality) */
export const AdverseEventCausality = {
  Causality1: 'causality1',
  Causality2: 'causality2',
} as const;
export type AdverseEventCausality =
  (typeof AdverseEventCausality)[keyof typeof AdverseEventCausality];

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

/** AllergyIntoleranceClinicalStatus (http://hl7.org/fhir/ValueSet/allergy-clinical-status) */
export const AllergyIntoleranceClinicalStatus = {
  Active: 'active',
  Inactive: 'inactive',
  Resolved: 'resolved',
} as const;
export type AllergyIntoleranceClinicalStatus =
  (typeof AllergyIntoleranceClinicalStatus)[keyof typeof AllergyIntoleranceClinicalStatus];

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

/** AllergyIntoleranceVerificationStatus (http://hl7.org/fhir/ValueSet/allergy-verification-status) */
export const AllergyIntoleranceVerificationStatus = {
  Unconfirmed: 'unconfirmed',
  Confirmed: 'confirmed',
  Refuted: 'refuted',
  EnteredInError: 'entered-in-error',
} as const;
export type AllergyIntoleranceVerificationStatus =
  (typeof AllergyIntoleranceVerificationStatus)[keyof typeof AllergyIntoleranceVerificationStatus];

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

/** CarePlanActivityStatus (http://hl7.org/fhir/ValueSet/care-plan-activity-status) */
export const CarePlanActivityStatus = {
  NotStarted: 'not-started',
  Scheduled: 'scheduled',
  InProgress: 'in-progress',
  OnHold: 'on-hold',
  Completed: 'completed',
  Cancelled: 'cancelled',
  Unknown: 'unknown',
} as const;
export type CarePlanActivityStatus =
  (typeof CarePlanActivityStatus)[keyof typeof CarePlanActivityStatus];

/** CarePlanIntent (http://hl7.org/fhir/ValueSet/care-plan-intent) */
export const CarePlanIntent = {
  Proposal: 'proposal',
  Plan: 'plan',
  Order: 'order',
  Option: 'option',
} as const;
export type CarePlanIntent = (typeof CarePlanIntent)[keyof typeof CarePlanIntent];

/** CarePlanStatus (http://hl7.org/fhir/ValueSet/care-plan-status) */
export const CarePlanStatus = {
  Draft: 'draft',
  Active: 'active',
  Suspended: 'suspended',
  Completed: 'completed',
  EnteredInError: 'entered-in-error',
  Cancelled: 'cancelled',
  Unknown: 'unknown',
} as const;
export type CarePlanStatus = (typeof CarePlanStatus)[keyof typeof CarePlanStatus];

/** CareTeamStatus (http://hl7.org/fhir/ValueSet/care-team-status) */
export const CareTeamStatus = {
  Proposed: 'proposed',
  Active: 'active',
  Suspended: 'suspended',
  Inactive: 'inactive',
  EnteredInError: 'entered-in-error',
} as const;
export type CareTeamStatus = (typeof CareTeamStatus)[keyof typeof CareTeamStatus];

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

/** ClinicalImpressionStatus (http://hl7.org/fhir/ValueSet/clinical-impression-status) */
export const ClinicalImpressionStatus = {
  Draft: 'draft',
  Completed: 'completed',
  EnteredInError: 'entered-in-error',
} as const;
export type ClinicalImpressionStatus =
  (typeof ClinicalImpressionStatus)[keyof typeof ClinicalImpressionStatus];

/** CodeSystemContentMode (http://hl7.org/fhir/ValueSet/codesystem-content-mode) */
export const CodeSystemContentMode = {
  NotPresent: 'not-present',
  Example: 'example',
  Fragment: 'fragment',
  Complete: 'complete',
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

/** Condition Clinical Status Codes (http://hl7.org/fhir/ValueSet/condition-clinical) */
export const ConditionClinicalStatusCodes = {
  Active: 'active',
  Recurrence: 'recurrence',
  Inactive: 'inactive',
  Remission: 'remission',
  Resolved: 'resolved',
} as const;
export type ConditionClinicalStatusCodes =
  (typeof ConditionClinicalStatusCodes)[keyof typeof ConditionClinicalStatusCodes];

/** ConditionVerificationStatus (http://hl7.org/fhir/ValueSet/condition-ver-status) */
export const ConditionVerificationStatus = {
  Provisional: 'provisional',
  Differential: 'differential',
  Confirmed: 'confirmed',
  Refuted: 'refuted',
  EnteredInError: 'entered-in-error',
  Unknown: 'unknown',
} as const;
export type ConditionVerificationStatus =
  (typeof ConditionVerificationStatus)[keyof typeof ConditionVerificationStatus];

/** ConfidentialityClassification (http://hl7.org/fhir/ValueSet/v3-ConfidentialityClassification) */
export const ConfidentialityClassification = {
  U: 'U',
  L: 'L',
  M: 'M',
  N: 'N',
  R: 'R',
  V: 'V',
} as const;
export type ConfidentialityClassification =
  (typeof ConfidentialityClassification)[keyof typeof ConfidentialityClassification];

/** ConsentDataMeaning (http://hl7.org/fhir/ValueSet/consent-data-meaning) */
export const ConsentDataMeaning = {
  Instance: 'instance',
  Related: 'related',
  Dependents: 'dependents',
  Authoredby: 'authoredby',
} as const;
export type ConsentDataMeaning = (typeof ConsentDataMeaning)[keyof typeof ConsentDataMeaning];

/** ConsentExceptType (http://hl7.org/fhir/ValueSet/consent-except-type) */
export const ConsentExceptType = { Deny: 'deny', Permit: 'permit' } as const;
export type ConsentExceptType = (typeof ConsentExceptType)[keyof typeof ConsentExceptType];

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

/** ContentType (http://hl7.org/fhir/ValueSet/content-type) */
export const ContentType = { Xml: 'xml', Json: 'json', Ttl: 'ttl', None: 'none' } as const;
export type ContentType = (typeof ContentType)[keyof typeof ContentType];

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

/** DataElementStringency (http://hl7.org/fhir/ValueSet/dataelement-stringency) */
export const DataElementStringency = {
  Comparable: 'comparable',
  FullySpecified: 'fully-specified',
  Equivalent: 'equivalent',
  Convertable: 'convertable',
  Scaleable: 'scaleable',
  Flexible: 'flexible',
} as const;
export type DataElementStringency =
  (typeof DataElementStringency)[keyof typeof DataElementStringency];

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

/** DigitalMediaType (http://hl7.org/fhir/ValueSet/digital-media-type) */
export const DigitalMediaType = { Photo: 'photo', Video: 'video', Audio: 'audio' } as const;
export type DigitalMediaType = (typeof DigitalMediaType)[keyof typeof DigitalMediaType];

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
  Suspended: 'suspended',
  Aborted: 'aborted',
  Completed: 'completed',
  EnteredInError: 'entered-in-error',
  Unknown: 'unknown',
} as const;
export type EventStatus = (typeof EventStatus)[keyof typeof EventStatus];

/** EventTiming (http://hl7.org/fhir/ValueSet/event-timing) */
export const EventTiming = {
  MORN: 'MORN',
  AFT: 'AFT',
  EVE: 'EVE',
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

/** ExplanationOfBenefitStatus (http://hl7.org/fhir/ValueSet/explanationofbenefit-status) */
export const ExplanationOfBenefitStatus = {
  Active: 'active',
  Cancelled: 'cancelled',
  Draft: 'draft',
  EnteredInError: 'entered-in-error',
} as const;
export type ExplanationOfBenefitStatus =
  (typeof ExplanationOfBenefitStatus)[keyof typeof ExplanationOfBenefitStatus];

/** ExtensionContext (http://hl7.org/fhir/ValueSet/extension-context) */
export const ExtensionContext = {
  Resource: 'resource',
  Datatype: 'datatype',
  Extension: 'extension',
} as const;
export type ExtensionContext = (typeof ExtensionContext)[keyof typeof ExtensionContext];

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
  Extension: 'Extension',
  HumanName: 'HumanName',
  Identifier: 'Identifier',
  Meta: 'Meta',
  Money: 'Money',
  Narrative: 'Narrative',
  ParameterDefinition: 'ParameterDefinition',
  Period: 'Period',
  Quantity: 'Quantity',
  Range: 'Range',
  Ratio: 'Ratio',
  Reference: 'Reference',
  RelatedArtifact: 'RelatedArtifact',
  SampledData: 'SampledData',
  Signature: 'Signature',
  SimpleQuantity: 'SimpleQuantity',
  Timing: 'Timing',
  TriggerDefinition: 'TriggerDefinition',
  UsageContext: 'UsageContext',
  Base64Binary: 'base64Binary',
  Boolean: 'boolean',
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
  BodySite: 'BodySite',
  Bundle: 'Bundle',
  CapabilityStatement: 'CapabilityStatement',
  CarePlan: 'CarePlan',
  CareTeam: 'CareTeam',
  ChargeItem: 'ChargeItem',
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
  DataElement: 'DataElement',
  DetectedIssue: 'DetectedIssue',
  Device: 'Device',
  DeviceComponent: 'DeviceComponent',
  DeviceMetric: 'DeviceMetric',
  DeviceRequest: 'DeviceRequest',
  DeviceUseStatement: 'DeviceUseStatement',
  DiagnosticReport: 'DiagnosticReport',
  DocumentManifest: 'DocumentManifest',
  DocumentReference: 'DocumentReference',
  DomainResource: 'DomainResource',
  EligibilityRequest: 'EligibilityRequest',
  EligibilityResponse: 'EligibilityResponse',
  Encounter: 'Encounter',
  Endpoint: 'Endpoint',
  EnrollmentRequest: 'EnrollmentRequest',
  EnrollmentResponse: 'EnrollmentResponse',
  EpisodeOfCare: 'EpisodeOfCare',
  ExpansionProfile: 'ExpansionProfile',
  ExplanationOfBenefit: 'ExplanationOfBenefit',
  FamilyMemberHistory: 'FamilyMemberHistory',
  Flag: 'Flag',
  Goal: 'Goal',
  GraphDefinition: 'GraphDefinition',
  Group: 'Group',
  GuidanceResponse: 'GuidanceResponse',
  HealthcareService: 'HealthcareService',
  ImagingManifest: 'ImagingManifest',
  ImagingStudy: 'ImagingStudy',
  Immunization: 'Immunization',
  ImmunizationRecommendation: 'ImmunizationRecommendation',
  ImplementationGuide: 'ImplementationGuide',
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
  MedicationRequest: 'MedicationRequest',
  MedicationStatement: 'MedicationStatement',
  MessageDefinition: 'MessageDefinition',
  MessageHeader: 'MessageHeader',
  NamingSystem: 'NamingSystem',
  NutritionOrder: 'NutritionOrder',
  Observation: 'Observation',
  OperationDefinition: 'OperationDefinition',
  OperationOutcome: 'OperationOutcome',
  Organization: 'Organization',
  Parameters: 'Parameters',
  Patient: 'Patient',
  PaymentNotice: 'PaymentNotice',
  PaymentReconciliation: 'PaymentReconciliation',
  Person: 'Person',
  PlanDefinition: 'PlanDefinition',
  Practitioner: 'Practitioner',
  PractitionerRole: 'PractitionerRole',
  Procedure: 'Procedure',
  ProcedureRequest: 'ProcedureRequest',
  ProcessRequest: 'ProcessRequest',
  ProcessResponse: 'ProcessResponse',
  Provenance: 'Provenance',
  Questionnaire: 'Questionnaire',
  QuestionnaireResponse: 'QuestionnaireResponse',
  ReferralRequest: 'ReferralRequest',
  RelatedPerson: 'RelatedPerson',
  RequestGroup: 'RequestGroup',
  ResearchStudy: 'ResearchStudy',
  ResearchSubject: 'ResearchSubject',
  Resource: 'Resource',
  RiskAssessment: 'RiskAssessment',
  Schedule: 'Schedule',
  SearchParameter: 'SearchParameter',
  Sequence: 'Sequence',
  ServiceDefinition: 'ServiceDefinition',
  Slot: 'Slot',
  Specimen: 'Specimen',
  StructureDefinition: 'StructureDefinition',
  StructureMap: 'StructureMap',
  Subscription: 'Subscription',
  Substance: 'Substance',
  SupplyDelivery: 'SupplyDelivery',
  SupplyRequest: 'SupplyRequest',
  Task: 'Task',
  TestReport: 'TestReport',
  TestScript: 'TestScript',
  ValueSet: 'ValueSet',
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
  Extension: 'Extension',
  HumanName: 'HumanName',
  Identifier: 'Identifier',
  Meta: 'Meta',
  Money: 'Money',
  Narrative: 'Narrative',
  ParameterDefinition: 'ParameterDefinition',
  Period: 'Period',
  Quantity: 'Quantity',
  Range: 'Range',
  Ratio: 'Ratio',
  Reference: 'Reference',
  RelatedArtifact: 'RelatedArtifact',
  SampledData: 'SampledData',
  Signature: 'Signature',
  SimpleQuantity: 'SimpleQuantity',
  Timing: 'Timing',
  TriggerDefinition: 'TriggerDefinition',
  UsageContext: 'UsageContext',
  Base64Binary: 'base64Binary',
  Boolean: 'boolean',
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
  BodySite: 'BodySite',
  Bundle: 'Bundle',
  CapabilityStatement: 'CapabilityStatement',
  CarePlan: 'CarePlan',
  CareTeam: 'CareTeam',
  ChargeItem: 'ChargeItem',
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
  DataElement: 'DataElement',
  DetectedIssue: 'DetectedIssue',
  Device: 'Device',
  DeviceComponent: 'DeviceComponent',
  DeviceMetric: 'DeviceMetric',
  DeviceRequest: 'DeviceRequest',
  DeviceUseStatement: 'DeviceUseStatement',
  DiagnosticReport: 'DiagnosticReport',
  DocumentManifest: 'DocumentManifest',
  DocumentReference: 'DocumentReference',
  DomainResource: 'DomainResource',
  EligibilityRequest: 'EligibilityRequest',
  EligibilityResponse: 'EligibilityResponse',
  Encounter: 'Encounter',
  Endpoint: 'Endpoint',
  EnrollmentRequest: 'EnrollmentRequest',
  EnrollmentResponse: 'EnrollmentResponse',
  EpisodeOfCare: 'EpisodeOfCare',
  ExpansionProfile: 'ExpansionProfile',
  ExplanationOfBenefit: 'ExplanationOfBenefit',
  FamilyMemberHistory: 'FamilyMemberHistory',
  Flag: 'Flag',
  Goal: 'Goal',
  GraphDefinition: 'GraphDefinition',
  Group: 'Group',
  GuidanceResponse: 'GuidanceResponse',
  HealthcareService: 'HealthcareService',
  ImagingManifest: 'ImagingManifest',
  ImagingStudy: 'ImagingStudy',
  Immunization: 'Immunization',
  ImmunizationRecommendation: 'ImmunizationRecommendation',
  ImplementationGuide: 'ImplementationGuide',
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
  MedicationRequest: 'MedicationRequest',
  MedicationStatement: 'MedicationStatement',
  MessageDefinition: 'MessageDefinition',
  MessageHeader: 'MessageHeader',
  NamingSystem: 'NamingSystem',
  NutritionOrder: 'NutritionOrder',
  Observation: 'Observation',
  OperationDefinition: 'OperationDefinition',
  OperationOutcome: 'OperationOutcome',
  Organization: 'Organization',
  Parameters: 'Parameters',
  Patient: 'Patient',
  PaymentNotice: 'PaymentNotice',
  PaymentReconciliation: 'PaymentReconciliation',
  Person: 'Person',
  PlanDefinition: 'PlanDefinition',
  Practitioner: 'Practitioner',
  PractitionerRole: 'PractitionerRole',
  Procedure: 'Procedure',
  ProcedureRequest: 'ProcedureRequest',
  ProcessRequest: 'ProcessRequest',
  ProcessResponse: 'ProcessResponse',
  Provenance: 'Provenance',
  Questionnaire: 'Questionnaire',
  QuestionnaireResponse: 'QuestionnaireResponse',
  ReferralRequest: 'ReferralRequest',
  RelatedPerson: 'RelatedPerson',
  RequestGroup: 'RequestGroup',
  ResearchStudy: 'ResearchStudy',
  ResearchSubject: 'ResearchSubject',
  Resource: 'Resource',
  RiskAssessment: 'RiskAssessment',
  Schedule: 'Schedule',
  SearchParameter: 'SearchParameter',
  Sequence: 'Sequence',
  ServiceDefinition: 'ServiceDefinition',
  Slot: 'Slot',
  Specimen: 'Specimen',
  StructureDefinition: 'StructureDefinition',
  StructureMap: 'StructureMap',
  Subscription: 'Subscription',
  Substance: 'Substance',
  SupplyDelivery: 'SupplyDelivery',
  SupplyRequest: 'SupplyRequest',
  Task: 'Task',
  TestReport: 'TestReport',
  TestScript: 'TestScript',
  ValueSet: 'ValueSet',
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

/** GoalStatus (http://hl7.org/fhir/ValueSet/goal-status) */
export const GoalStatus = {
  Proposed: 'proposed',
  Accepted: 'accepted',
  Planned: 'planned',
  InProgress: 'in-progress',
  OnTarget: 'on-target',
  AheadOfTarget: 'ahead-of-target',
  BehindTarget: 'behind-target',
  Sustaining: 'sustaining',
  Achieved: 'achieved',
  OnHold: 'on-hold',
  Cancelled: 'cancelled',
  EnteredInError: 'entered-in-error',
  Rejected: 'rejected',
} as const;
export type GoalStatus = (typeof GoalStatus)[keyof typeof GoalStatus];

/** GraphCompartmentRule (http://hl7.org/fhir/ValueSet/graph-compartment-rule) */
export const GraphCompartmentRule = {
  Identical: 'identical',
  Matching: 'matching',
  Different: 'different',
  Custom: 'custom',
} as const;
export type GraphCompartmentRule = (typeof GraphCompartmentRule)[keyof typeof GraphCompartmentRule];

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

/** GuideDependencyType (http://hl7.org/fhir/ValueSet/guide-dependency-type) */
export const GuideDependencyType = { Reference: 'reference', Inclusion: 'inclusion' } as const;
export type GuideDependencyType = (typeof GuideDependencyType)[keyof typeof GuideDependencyType];

/** GuidePageKind (http://hl7.org/fhir/ValueSet/guide-page-kind) */
export const GuidePageKind = {
  Page: 'page',
  Example: 'example',
  List: 'list',
  Include: 'include',
  Directory: 'directory',
  Dictionary: 'dictionary',
  Toc: 'toc',
  Resource: 'resource',
} as const;
export type GuidePageKind = (typeof GuidePageKind)[keyof typeof GuidePageKind];

/** HTTPVerb (http://hl7.org/fhir/ValueSet/http-verb) */
export const HTTPVerb = { GET: 'GET', POST: 'POST', PUT: 'PUT', DELETE: 'DELETE' } as const;
export type HTTPVerb = (typeof HTTPVerb)[keyof typeof HTTPVerb];

/** IdentifierUse (http://hl7.org/fhir/ValueSet/identifier-use) */
export const IdentifierUse = {
  Usual: 'usual',
  Official: 'official',
  Temp: 'temp',
  Secondary: 'secondary',
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

/** Immunization Status Codes (http://hl7.org/fhir/ValueSet/immunization-status) */
export const ImmunizationStatusCodes = {
  Completed: 'completed',
  EnteredInError: 'entered-in-error',
} as const;
export type ImmunizationStatusCodes =
  (typeof ImmunizationStatusCodes)[keyof typeof ImmunizationStatusCodes];

/** InstanceAvailability (http://hl7.org/fhir/ValueSet/instance-availability) */
export const InstanceAvailability = {
  ONLINE: 'ONLINE',
  OFFLINE: 'OFFLINE',
  NEARLINE: 'NEARLINE',
  UNAVAILABLE: 'UNAVAILABLE',
} as const;
export type InstanceAvailability = (typeof InstanceAvailability)[keyof typeof InstanceAvailability];

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
  NotFound: 'not-found',
  TooLong: 'too-long',
  CodeInvalid: 'code-invalid',
  Extension: 'extension',
  TooCostly: 'too-costly',
  BusinessRule: 'business-rule',
  Conflict: 'conflict',
  Incomplete: 'incomplete',
  Transient: 'transient',
  LockError: 'lock-error',
  NoStore: 'no-store',
  Exception: 'exception',
  Timeout: 'timeout',
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

/** MeasmntPrinciple (http://hl7.org/fhir/ValueSet/measurement-principle) */
export const MeasmntPrinciple = {
  Other: 'other',
  Chemical: 'chemical',
  Electrical: 'electrical',
  Impedance: 'impedance',
  Nuclear: 'nuclear',
  Optical: 'optical',
  Thermal: 'thermal',
  Biological: 'biological',
  Mechanical: 'mechanical',
  Acoustical: 'acoustical',
  Manual: 'manual',
} as const;
export type MeasmntPrinciple = (typeof MeasmntPrinciple)[keyof typeof MeasmntPrinciple];

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
  PatientList: 'patient-list',
  Summary: 'summary',
} as const;
export type MeasureReportType = (typeof MeasureReportType)[keyof typeof MeasureReportType];

/** MedicationAdministrationStatus (http://hl7.org/fhir/ValueSet/medication-admin-status) */
export const MedicationAdministrationStatus = {
  InProgress: 'in-progress',
  OnHold: 'on-hold',
  Completed: 'completed',
  EnteredInError: 'entered-in-error',
  Stopped: 'stopped',
  Unknown: 'unknown',
} as const;
export type MedicationAdministrationStatus =
  (typeof MedicationAdministrationStatus)[keyof typeof MedicationAdministrationStatus];

/** MedicationDispenseStatus (http://hl7.org/fhir/ValueSet/medication-dispense-status) */
export const MedicationDispenseStatus = {
  Preparation: 'preparation',
  InProgress: 'in-progress',
  OnHold: 'on-hold',
  Completed: 'completed',
  EnteredInError: 'entered-in-error',
  Stopped: 'stopped',
} as const;
export type MedicationDispenseStatus =
  (typeof MedicationDispenseStatus)[keyof typeof MedicationDispenseStatus];

/** MedicationRequestIntent (http://hl7.org/fhir/ValueSet/medication-request-intent) */
export const MedicationRequestIntent = {
  Proposal: 'proposal',
  Plan: 'plan',
  Order: 'order',
  InstanceOrder: 'instance-order',
} as const;
export type MedicationRequestIntent =
  (typeof MedicationRequestIntent)[keyof typeof MedicationRequestIntent];

/** MedicationRequestPriority (http://hl7.org/fhir/ValueSet/medication-request-priority) */
export const MedicationRequestPriority = {
  Routine: 'routine',
  Urgent: 'urgent',
  Stat: 'stat',
  Asap: 'asap',
} as const;
export type MedicationRequestPriority =
  (typeof MedicationRequestPriority)[keyof typeof MedicationRequestPriority];

/** MedicationRequestStatus (http://hl7.org/fhir/ValueSet/medication-request-status) */
export const MedicationRequestStatus = {
  Active: 'active',
  OnHold: 'on-hold',
  Cancelled: 'cancelled',
  Completed: 'completed',
  EnteredInError: 'entered-in-error',
  Stopped: 'stopped',
  Draft: 'draft',
  Unknown: 'unknown',
} as const;
export type MedicationRequestStatus =
  (typeof MedicationRequestStatus)[keyof typeof MedicationRequestStatus];

/** MedicationStatementStatus (http://hl7.org/fhir/ValueSet/medication-statement-status) */
export const MedicationStatementStatus = {
  Active: 'active',
  Completed: 'completed',
  EnteredInError: 'entered-in-error',
  Intended: 'intended',
  Stopped: 'stopped',
  OnHold: 'on-hold',
} as const;
export type MedicationStatementStatus =
  (typeof MedicationStatementStatus)[keyof typeof MedicationStatementStatus];

/** MedicationStatementTaken (http://hl7.org/fhir/ValueSet/medication-statement-taken) */
export const MedicationStatementTaken = { Y: 'y', N: 'n', Unk: 'unk', Na: 'na' } as const;
export type MedicationStatementTaken =
  (typeof MedicationStatementTaken)[keyof typeof MedicationStatementTaken];

/** MedicationStatus (http://hl7.org/fhir/ValueSet/medication-status) */
export const MedicationStatus = {
  Active: 'active',
  Inactive: 'inactive',
  EnteredInError: 'entered-in-error',
} as const;
export type MedicationStatus = (typeof MedicationStatus)[keyof typeof MedicationStatus];

/** MessageSignificanceCategory (http://hl7.org/fhir/ValueSet/message-significance-category) */
export const MessageSignificanceCategory = {
  Consequence: 'Consequence',
  Currency: 'Currency',
  Notification: 'Notification',
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

/** NutritionOrderStatus (http://hl7.org/fhir/ValueSet/nutrition-request-status) */
export const NutritionOrderStatus = {
  Proposed: 'proposed',
  Draft: 'draft',
  Planned: 'planned',
  Requested: 'requested',
  Active: 'active',
  OnHold: 'on-hold',
  Completed: 'completed',
  Cancelled: 'cancelled',
  EnteredInError: 'entered-in-error',
} as const;
export type NutritionOrderStatus = (typeof NutritionOrderStatus)[keyof typeof NutritionOrderStatus];

/** ObservationRelationshipType (http://hl7.org/fhir/ValueSet/observation-relationshiptypes) */
export const ObservationRelationshipType = {
  HasMember: 'has-member',
  DerivedFrom: 'derived-from',
  SequelTo: 'sequel-to',
  Replaces: 'replaces',
  QualifiedBy: 'qualified-by',
  InterferedBy: 'interfered-by',
} as const;
export type ObservationRelationshipType =
  (typeof ObservationRelationshipType)[keyof typeof ObservationRelationshipType];

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
  Order: 'order',
  OriginalOrder: 'original-order',
  ReflexOrder: 'reflex-order',
  FillerOrder: 'filler-order',
  InstanceOrder: 'instance-order',
  Option: 'option',
} as const;
export type RequestIntent = (typeof RequestIntent)[keyof typeof RequestIntent];

/** RequestPriority (http://hl7.org/fhir/ValueSet/request-priority) */
export const RequestPriority = {
  Routine: 'routine',
  Urgent: 'urgent',
  Asap: 'asap',
  Stat: 'stat',
} as const;
export type RequestPriority = (typeof RequestPriority)[keyof typeof RequestPriority];

/** RequestStatus (http://hl7.org/fhir/ValueSet/request-status) */
export const RequestStatus = {
  Draft: 'draft',
  Active: 'active',
  Suspended: 'suspended',
  Cancelled: 'cancelled',
  Completed: 'completed',
  EnteredInError: 'entered-in-error',
  Unknown: 'unknown',
} as const;
export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus];

/** ResearchStudyStatus (http://hl7.org/fhir/ValueSet/research-study-status) */
export const ResearchStudyStatus = {
  Draft: 'draft',
  InProgress: 'in-progress',
  Suspended: 'suspended',
  Stopped: 'stopped',
  Completed: 'completed',
  EnteredInError: 'entered-in-error',
} as const;
export type ResearchStudyStatus = (typeof ResearchStudyStatus)[keyof typeof ResearchStudyStatus];

/** ResearchSubjectStatus (http://hl7.org/fhir/ValueSet/research-subject-status) */
export const ResearchSubjectStatus = {
  Candidate: 'candidate',
  Enrolled: 'enrolled',
  Active: 'active',
  Suspended: 'suspended',
  Withdrawn: 'withdrawn',
  Completed: 'completed',
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
  BodySite: 'BodySite',
  Bundle: 'Bundle',
  CapabilityStatement: 'CapabilityStatement',
  CarePlan: 'CarePlan',
  CareTeam: 'CareTeam',
  ChargeItem: 'ChargeItem',
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
  DataElement: 'DataElement',
  DetectedIssue: 'DetectedIssue',
  Device: 'Device',
  DeviceComponent: 'DeviceComponent',
  DeviceMetric: 'DeviceMetric',
  DeviceRequest: 'DeviceRequest',
  DeviceUseStatement: 'DeviceUseStatement',
  DiagnosticReport: 'DiagnosticReport',
  DocumentManifest: 'DocumentManifest',
  DocumentReference: 'DocumentReference',
  DomainResource: 'DomainResource',
  EligibilityRequest: 'EligibilityRequest',
  EligibilityResponse: 'EligibilityResponse',
  Encounter: 'Encounter',
  Endpoint: 'Endpoint',
  EnrollmentRequest: 'EnrollmentRequest',
  EnrollmentResponse: 'EnrollmentResponse',
  EpisodeOfCare: 'EpisodeOfCare',
  ExpansionProfile: 'ExpansionProfile',
  ExplanationOfBenefit: 'ExplanationOfBenefit',
  FamilyMemberHistory: 'FamilyMemberHistory',
  Flag: 'Flag',
  Goal: 'Goal',
  GraphDefinition: 'GraphDefinition',
  Group: 'Group',
  GuidanceResponse: 'GuidanceResponse',
  HealthcareService: 'HealthcareService',
  ImagingManifest: 'ImagingManifest',
  ImagingStudy: 'ImagingStudy',
  Immunization: 'Immunization',
  ImmunizationRecommendation: 'ImmunizationRecommendation',
  ImplementationGuide: 'ImplementationGuide',
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
  MedicationRequest: 'MedicationRequest',
  MedicationStatement: 'MedicationStatement',
  MessageDefinition: 'MessageDefinition',
  MessageHeader: 'MessageHeader',
  NamingSystem: 'NamingSystem',
  NutritionOrder: 'NutritionOrder',
  Observation: 'Observation',
  OperationDefinition: 'OperationDefinition',
  OperationOutcome: 'OperationOutcome',
  Organization: 'Organization',
  Parameters: 'Parameters',
  Patient: 'Patient',
  PaymentNotice: 'PaymentNotice',
  PaymentReconciliation: 'PaymentReconciliation',
  Person: 'Person',
  PlanDefinition: 'PlanDefinition',
  Practitioner: 'Practitioner',
  PractitionerRole: 'PractitionerRole',
  Procedure: 'Procedure',
  ProcedureRequest: 'ProcedureRequest',
  ProcessRequest: 'ProcessRequest',
  ProcessResponse: 'ProcessResponse',
  Provenance: 'Provenance',
  Questionnaire: 'Questionnaire',
  QuestionnaireResponse: 'QuestionnaireResponse',
  ReferralRequest: 'ReferralRequest',
  RelatedPerson: 'RelatedPerson',
  RequestGroup: 'RequestGroup',
  ResearchStudy: 'ResearchStudy',
  ResearchSubject: 'ResearchSubject',
  Resource: 'Resource',
  RiskAssessment: 'RiskAssessment',
  Schedule: 'Schedule',
  SearchParameter: 'SearchParameter',
  Sequence: 'Sequence',
  ServiceDefinition: 'ServiceDefinition',
  Slot: 'Slot',
  Specimen: 'Specimen',
  StructureDefinition: 'StructureDefinition',
  StructureMap: 'StructureMap',
  Subscription: 'Subscription',
  Substance: 'Substance',
  SupplyDelivery: 'SupplyDelivery',
  SupplyRequest: 'SupplyRequest',
  Task: 'Task',
  TestReport: 'TestReport',
  TestScript: 'TestScript',
  ValueSet: 'ValueSet',
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
} as const;
export type SearchParamType = (typeof SearchParamType)[keyof typeof SearchParamType];

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

/** SpecimenStatus (http://hl7.org/fhir/ValueSet/specimen-status) */
export const SpecimenStatus = {
  Available: 'available',
  Unavailable: 'unavailable',
  Unsatisfactory: 'unsatisfactory',
  EnteredInError: 'entered-in-error',
} as const;
export type SpecimenStatus = (typeof SpecimenStatus)[keyof typeof SpecimenStatus];

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

/** SystemVersionProcessingMode (http://hl7.org/fhir/ValueSet/system-version-processing-mode) */
export const SystemVersionProcessingMode = {
  Default: 'default',
  Check: 'check',
  Override: 'override',
} as const;
export type SystemVersionProcessingMode =
  (typeof SystemVersionProcessingMode)[keyof typeof SystemVersionProcessingMode];

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
} as const;
export type TestScriptRequestMethodCode =
  (typeof TestScriptRequestMethodCode)[keyof typeof TestScriptRequestMethodCode];

/** TriggerType (http://hl7.org/fhir/ValueSet/trigger-type) */
export const TriggerType = {
  NamedEvent: 'named-event',
  Periodic: 'periodic',
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

/** UnknownContentCode (http://hl7.org/fhir/ValueSet/unknown-content-code) */
export const UnknownContentCode = {
  No: 'no',
  Extensions: 'extensions',
  Elements: 'elements',
  Both: 'both',
} as const;
export type UnknownContentCode = (typeof UnknownContentCode)[keyof typeof UnknownContentCode];

/** Use (http://hl7.org/fhir/ValueSet/claim-use) */
export const Use = {
  Complete: 'complete',
  Proposed: 'proposed',
  Exploratory: 'exploratory',
  Other: 'other',
} as const;
export type Use = (typeof Use)[keyof typeof Use];

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
