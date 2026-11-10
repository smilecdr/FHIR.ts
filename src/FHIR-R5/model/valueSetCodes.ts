/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

// Codes of the value sets that FHIR binds to elements with strength "required".

/** Account Status (http://hl7.org/fhir/ValueSet/account-status) */
export const AccountStatus = {
  Active: 'active',
  Inactive: 'inactive',
  EnteredInError: 'entered-in-error',
  OnHold: 'on-hold',
  Unknown: 'unknown',
} as const;
export type AccountStatus = (typeof AccountStatus)[keyof typeof AccountStatus];

/** Action Cardinality Behavior (http://hl7.org/fhir/ValueSet/action-cardinality-behavior) */
export const ActionCardinalityBehavior = { Single: 'single', Multiple: 'multiple' } as const;
export type ActionCardinalityBehavior =
  (typeof ActionCardinalityBehavior)[keyof typeof ActionCardinalityBehavior];

/** Action Condition Kind (http://hl7.org/fhir/ValueSet/action-condition-kind) */
export const ActionConditionKind = {
  Applicability: 'applicability',
  Start: 'start',
  Stop: 'stop',
} as const;
export type ActionConditionKind = (typeof ActionConditionKind)[keyof typeof ActionConditionKind];

/** Action Grouping Behavior (http://hl7.org/fhir/ValueSet/action-grouping-behavior) */
export const ActionGroupingBehavior = {
  VisualGroup: 'visual-group',
  LogicalGroup: 'logical-group',
  SentenceGroup: 'sentence-group',
} as const;
export type ActionGroupingBehavior =
  (typeof ActionGroupingBehavior)[keyof typeof ActionGroupingBehavior];

/** Action Participant Type (http://hl7.org/fhir/ValueSet/action-participant-type) */
export const ActionParticipantType = {
  Careteam: 'careteam',
  Device: 'device',
  Group: 'group',
  Healthcareservice: 'healthcareservice',
  Location: 'location',
  Organization: 'organization',
  Patient: 'patient',
  Practitioner: 'practitioner',
  Practitionerrole: 'practitionerrole',
  Relatedperson: 'relatedperson',
} as const;
export type ActionParticipantType =
  (typeof ActionParticipantType)[keyof typeof ActionParticipantType];

/** Action Precheck Behavior (http://hl7.org/fhir/ValueSet/action-precheck-behavior) */
export const ActionPrecheckBehavior = { Yes: 'yes', No: 'no' } as const;
export type ActionPrecheckBehavior =
  (typeof ActionPrecheckBehavior)[keyof typeof ActionPrecheckBehavior];

/** Action Relationship Type (http://hl7.org/fhir/ValueSet/action-relationship-type) */
export const ActionRelationshipType = {
  Before: 'before',
  BeforeStart: 'before-start',
  BeforeEnd: 'before-end',
  Concurrent: 'concurrent',
  ConcurrentWithStart: 'concurrent-with-start',
  ConcurrentWithEnd: 'concurrent-with-end',
  After: 'after',
  AfterStart: 'after-start',
  AfterEnd: 'after-end',
} as const;
export type ActionRelationshipType =
  (typeof ActionRelationshipType)[keyof typeof ActionRelationshipType];

/** Action Required Behavior (http://hl7.org/fhir/ValueSet/action-required-behavior) */
export const ActionRequiredBehavior = {
  Must: 'must',
  Could: 'could',
  MustUnlessDocumented: 'must-unless-documented',
} as const;
export type ActionRequiredBehavior =
  (typeof ActionRequiredBehavior)[keyof typeof ActionRequiredBehavior];

/** Action Selection Behavior (http://hl7.org/fhir/ValueSet/action-selection-behavior) */
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

/** Additional Binding Purpose ValueSet (http://hl7.org/fhir/ValueSet/additional-binding-purpose) */
export const AdditionalBindingPurposeVS = {
  Maximum: 'maximum',
  Minimum: 'minimum',
  Required: 'required',
  Extensible: 'extensible',
  Candidate: 'candidate',
  Current: 'current',
  Preferred: 'preferred',
  Ui: 'ui',
  Starter: 'starter',
  Component: 'component',
} as const;
export type AdditionalBindingPurposeVS =
  (typeof AdditionalBindingPurposeVS)[keyof typeof AdditionalBindingPurposeVS];

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

/** Adverse Event Actuality (http://hl7.org/fhir/ValueSet/adverse-event-actuality) */
export const AdverseEventActuality = { Actual: 'actual', Potential: 'potential' } as const;
export type AdverseEventActuality =
  (typeof AdverseEventActuality)[keyof typeof AdverseEventActuality];

/** Adverse Event Status (http://hl7.org/fhir/ValueSet/adverse-event-status) */
export const AdverseEventStatus = {
  InProgress: 'in-progress',
  Completed: 'completed',
  EnteredInError: 'entered-in-error',
  Unknown: 'unknown',
} as const;
export type AdverseEventStatus = (typeof AdverseEventStatus)[keyof typeof AdverseEventStatus];

/** AggregationMode (http://hl7.org/fhir/ValueSet/resource-aggregation-mode) */
export const AggregationMode = {
  Contained: 'contained',
  Referenced: 'referenced',
  Bundled: 'bundled',
} as const;
export type AggregationMode = (typeof AggregationMode)[keyof typeof AggregationMode];

/** Allergy Intolerance Category (http://hl7.org/fhir/ValueSet/allergy-intolerance-category) */
export const AllergyIntoleranceCategory = {
  Food: 'food',
  Medication: 'medication',
  Environment: 'environment',
  Biologic: 'biologic',
} as const;
export type AllergyIntoleranceCategory =
  (typeof AllergyIntoleranceCategory)[keyof typeof AllergyIntoleranceCategory];

/** Allergy Intolerance Criticality (http://hl7.org/fhir/ValueSet/allergy-intolerance-criticality) */
export const AllergyIntoleranceCriticality = {
  Low: 'low',
  High: 'high',
  UnableToAssess: 'unable-to-assess',
} as const;
export type AllergyIntoleranceCriticality =
  (typeof AllergyIntoleranceCriticality)[keyof typeof AllergyIntoleranceCriticality];

/** Allergy Intolerance Severity (http://hl7.org/fhir/ValueSet/reaction-event-severity) */
export const AllergyIntoleranceSeverity = {
  Mild: 'mild',
  Moderate: 'moderate',
  Severe: 'severe',
} as const;
export type AllergyIntoleranceSeverity =
  (typeof AllergyIntoleranceSeverity)[keyof typeof AllergyIntoleranceSeverity];

/** Appointment Response Status (http://hl7.org/fhir/ValueSet/appointmentresponse-status) */
export const AppointmentResponseStatus = {
  Accepted: 'accepted',
  Declined: 'declined',
  Tentative: 'tentative',
  NeedsAction: 'needs-action',
  EnteredInError: 'entered-in-error',
} as const;
export type AppointmentResponseStatus =
  (typeof AppointmentResponseStatus)[keyof typeof AppointmentResponseStatus];

/** Appointment Status (http://hl7.org/fhir/ValueSet/appointmentstatus) */
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

/** Artifact Assessment Disposition (http://hl7.org/fhir/ValueSet/artifactassessment-disposition) */
export const ArtifactAssessmentDisposition = {
  Unresolved: 'unresolved',
  NotPersuasive: 'not-persuasive',
  Persuasive: 'persuasive',
  PersuasiveWithModification: 'persuasive-with-modification',
  NotPersuasiveWithModification: 'not-persuasive-with-modification',
} as const;
export type ArtifactAssessmentDisposition =
  (typeof ArtifactAssessmentDisposition)[keyof typeof ArtifactAssessmentDisposition];

/** Artifact Assessment Information Type (http://hl7.org/fhir/ValueSet/artifactassessment-information-type) */
export const ArtifactAssessmentInformationType = {
  Comment: 'comment',
  Classifier: 'classifier',
  Rating: 'rating',
  Container: 'container',
  Response: 'response',
  ChangeRequest: 'change-request',
} as const;
export type ArtifactAssessmentInformationType =
  (typeof ArtifactAssessmentInformationType)[keyof typeof ArtifactAssessmentInformationType];

/** Artifact Assessment Workflow Status (http://hl7.org/fhir/ValueSet/artifactassessment-workflow-status) */
export const ArtifactAssessmentWorkflowStatus = {
  Submitted: 'submitted',
  Triaged: 'triaged',
  WaitingForInput: 'waiting-for-input',
  ResolvedNoChange: 'resolved-no-change',
  ResolvedChangeRequired: 'resolved-change-required',
  Deferred: 'deferred',
  Duplicate: 'duplicate',
  Applied: 'applied',
  Published: 'published',
  EnteredInError: 'entered-in-error',
} as const;
export type ArtifactAssessmentWorkflowStatus =
  (typeof ArtifactAssessmentWorkflowStatus)[keyof typeof ArtifactAssessmentWorkflowStatus];

/** Assertion Direction Type (http://hl7.org/fhir/ValueSet/assert-direction-codes) */
export const AssertionDirectionType = { Response: 'response', Request: 'request' } as const;
export type AssertionDirectionType =
  (typeof AssertionDirectionType)[keyof typeof AssertionDirectionType];

/** Assertion Manual Completion Type (http://hl7.org/fhir/ValueSet/assert-manual-completion-codes) */
export const AssertionManualCompletionType = {
  Fail: 'fail',
  Pass: 'pass',
  Skip: 'skip',
  Stop: 'stop',
} as const;
export type AssertionManualCompletionType =
  (typeof AssertionManualCompletionType)[keyof typeof AssertionManualCompletionType];

/** Assertion Operator Type (http://hl7.org/fhir/ValueSet/assert-operator-codes) */
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
  ManualEval: 'manualEval',
} as const;
export type AssertionOperatorType =
  (typeof AssertionOperatorType)[keyof typeof AssertionOperatorType];

/** Assertion Response Types (http://hl7.org/fhir/ValueSet/assert-response-code-types) */
export const AssertionResponseTypes = {
  Continue: 'continue',
  SwitchingProtocols: 'switchingProtocols',
  Okay: 'okay',
  Created: 'created',
  Accepted: 'accepted',
  NonAuthoritativeInformation: 'nonAuthoritativeInformation',
  NoContent: 'noContent',
  ResetContent: 'resetContent',
  PartialContent: 'partialContent',
  MultipleChoices: 'multipleChoices',
  MovedPermanently: 'movedPermanently',
  Found: 'found',
  SeeOther: 'seeOther',
  NotModified: 'notModified',
  UseProxy: 'useProxy',
  TemporaryRedirect: 'temporaryRedirect',
  PermanentRedirect: 'permanentRedirect',
  BadRequest: 'badRequest',
  Unauthorized: 'unauthorized',
  PaymentRequired: 'paymentRequired',
  Forbidden: 'forbidden',
  NotFound: 'notFound',
  MethodNotAllowed: 'methodNotAllowed',
  NotAcceptable: 'notAcceptable',
  ProxyAuthenticationRequired: 'proxyAuthenticationRequired',
  RequestTimeout: 'requestTimeout',
  Conflict: 'conflict',
  Gone: 'gone',
  LengthRequired: 'lengthRequired',
  PreconditionFailed: 'preconditionFailed',
  ContentTooLarge: 'contentTooLarge',
  UriTooLong: 'uriTooLong',
  UnsupportedMediaType: 'unsupportedMediaType',
  RangeNotSatisfiable: 'rangeNotSatisfiable',
  ExpectationFailed: 'expectationFailed',
  MisdirectedRequest: 'misdirectedRequest',
  UnprocessableContent: 'unprocessableContent',
  UpgradeRequired: 'upgradeRequired',
  InternalServerError: 'internalServerError',
  NotImplemented: 'notImplemented',
  BadGateway: 'badGateway',
  ServiceUnavailable: 'serviceUnavailable',
  GatewayTimeout: 'gatewayTimeout',
  HttpVersionNotSupported: 'httpVersionNotSupported',
} as const;
export type AssertionResponseTypes =
  (typeof AssertionResponseTypes)[keyof typeof AssertionResponseTypes];

/** Audit Event Action (http://hl7.org/fhir/ValueSet/audit-event-action) */
export const AuditEventAction = { C: 'C', R: 'R', U: 'U', D: 'D', E: 'E' } as const;
export type AuditEventAction = (typeof AuditEventAction)[keyof typeof AuditEventAction];

/** Audit Event Severity (http://hl7.org/fhir/ValueSet/audit-event-severity) */
export const AuditEventSeverity = {
  Emergency: 'emergency',
  Alert: 'alert',
  Critical: 'critical',
  Error: 'error',
  Warning: 'warning',
  Notice: 'notice',
  Informational: 'informational',
  Debug: 'debug',
} as const;
export type AuditEventSeverity = (typeof AuditEventSeverity)[keyof typeof AuditEventSeverity];

/** BindingStrength (http://hl7.org/fhir/ValueSet/binding-strength) */
export const BindingStrength = {
  Required: 'required',
  Extensible: 'extensible',
  Preferred: 'preferred',
  Example: 'example',
} as const;
export type BindingStrength = (typeof BindingStrength)[keyof typeof BindingStrength];

/** BiologicallyDerivedProductDispense Status Codes (http://hl7.org/fhir/ValueSet/biologicallyderivedproductdispense-status) */
export const BiologicallyDerivedProductDispenseCodes = {
  Preparation: 'preparation',
  InProgress: 'in-progress',
  Allocated: 'allocated',
  Issued: 'issued',
  Unfulfilled: 'unfulfilled',
  Returned: 'returned',
  EnteredInError: 'entered-in-error',
  Unknown: 'unknown',
} as const;
export type BiologicallyDerivedProductDispenseCodes =
  (typeof BiologicallyDerivedProductDispenseCodes)[keyof typeof BiologicallyDerivedProductDispenseCodes];

/** Bundle Type (http://hl7.org/fhir/ValueSet/bundle-type) */
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
  SubscriptionNotification: 'subscription-notification',
} as const;
export type BundleType = (typeof BundleType)[keyof typeof BundleType];

/** Capability Statement Kind (http://hl7.org/fhir/ValueSet/capability-statement-kind) */
export const CapabilityStatementKind = {
  Instance: 'instance',
  Capability: 'capability',
  Requirements: 'requirements',
} as const;
export type CapabilityStatementKind =
  (typeof CapabilityStatementKind)[keyof typeof CapabilityStatementKind];

/** Care Plan Intent (http://hl7.org/fhir/ValueSet/care-plan-intent) */
export const CarePlanIntent = {
  Proposal: 'proposal',
  Plan: 'plan',
  Order: 'order',
  Option: 'option',
  Directive: 'directive',
} as const;
export type CarePlanIntent = (typeof CarePlanIntent)[keyof typeof CarePlanIntent];

/** Care Team Status (http://hl7.org/fhir/ValueSet/care-team-status) */
export const CareTeamStatus = {
  Proposed: 'proposed',
  Active: 'active',
  Suspended: 'suspended',
  Inactive: 'inactive',
  EnteredInError: 'entered-in-error',
} as const;
export type CareTeamStatus = (typeof CareTeamStatus)[keyof typeof CareTeamStatus];

/** Characteristic Combination (http://hl7.org/fhir/ValueSet/characteristic-combination) */
export const CharacteristicCombination = {
  AllOf: 'all-of',
  AnyOf: 'any-of',
  AtLeast: 'at-least',
  AtMost: 'at-most',
  Statistical: 'statistical',
  NetEffect: 'net-effect',
  Dataset: 'dataset',
} as const;
export type CharacteristicCombination =
  (typeof CharacteristicCombination)[keyof typeof CharacteristicCombination];

/** Charge Item Status (http://hl7.org/fhir/ValueSet/chargeitem-status) */
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

/** Claim Processing Codes (http://hl7.org/fhir/ValueSet/claim-outcome) */
export const ClaimProcessingCodes = {
  Queued: 'queued',
  Complete: 'complete',
  Error: 'error',
  Partial: 'partial',
} as const;
export type ClaimProcessingCodes = (typeof ClaimProcessingCodes)[keyof typeof ClaimProcessingCodes];

/** Clinical Use Definition Type (http://hl7.org/fhir/ValueSet/clinical-use-definition-type) */
export const ClinicalUseDefinitionType = {
  Indication: 'indication',
  Contraindication: 'contraindication',
  Interaction: 'interaction',
  UndesirableEffect: 'undesirable-effect',
  Warning: 'warning',
} as const;
export type ClinicalUseDefinitionType =
  (typeof ClinicalUseDefinitionType)[keyof typeof ClinicalUseDefinitionType];

/** Code Search Support (http://hl7.org/fhir/ValueSet/code-search-support) */
export const CodeSearchSupport = {
  InCompose: 'in-compose',
  InExpansion: 'in-expansion',
  InComposeOrExpansion: 'in-compose-or-expansion',
} as const;
export type CodeSearchSupport = (typeof CodeSearchSupport)[keyof typeof CodeSearchSupport];

/** Code System Content Mode (http://hl7.org/fhir/ValueSet/codesystem-content-mode) */
export const CodeSystemContentMode = {
  NotPresent: 'not-present',
  Example: 'example',
  Fragment: 'fragment',
  Complete: 'complete',
  Supplement: 'supplement',
} as const;
export type CodeSystemContentMode =
  (typeof CodeSystemContentMode)[keyof typeof CodeSystemContentMode];

/** Code System Hierarchy Meaning (http://hl7.org/fhir/ValueSet/codesystem-hierarchy-meaning) */
export const CodeSystemHierarchyMeaning = {
  GroupedBy: 'grouped-by',
  IsA: 'is-a',
  PartOf: 'part-of',
  ClassifiedWith: 'classified-with',
} as const;
export type CodeSystemHierarchyMeaning =
  (typeof CodeSystemHierarchyMeaning)[keyof typeof CodeSystemHierarchyMeaning];

/** Common Languages (http://hl7.org/fhir/ValueSet/languages) */
export const CommonLanguages = {
  Ar: 'ar',
  Bg: 'bg',
  BgBG: 'bg-BG',
  Bn: 'bn',
  Cs: 'cs',
  CsCZ: 'cs-CZ',
  Bs: 'bs',
  BsBA: 'bs-BA',
  Da: 'da',
  DaDK: 'da-DK',
  De: 'de',
  DeAT: 'de-AT',
  DeCH: 'de-CH',
  DeDE: 'de-DE',
  El: 'el',
  ElGR: 'el-GR',
  En: 'en',
  EnAU: 'en-AU',
  EnCA: 'en-CA',
  EnGB: 'en-GB',
  EnIN: 'en-IN',
  EnNZ: 'en-NZ',
  EnSG: 'en-SG',
  EnUS: 'en-US',
  Es: 'es',
  EsAR: 'es-AR',
  EsES: 'es-ES',
  EsUY: 'es-UY',
  Et: 'et',
  EtEE: 'et-EE',
  Fi: 'fi',
  Fr: 'fr',
  FrBE: 'fr-BE',
  FrCH: 'fr-CH',
  FrFR: 'fr-FR',
  FiFI: 'fi-FI',
  FrCA: 'fr-CA',
  Fy: 'fy',
  FyNL: 'fy-NL',
  Hi: 'hi',
  Hr: 'hr',
  HrHR: 'hr-HR',
  Is: 'is',
  IsIS: 'is-IS',
  It: 'it',
  ItCH: 'it-CH',
  ItIT: 'it-IT',
  Ja: 'ja',
  Ko: 'ko',
  Lt: 'lt',
  LtLT: 'lt-LT',
  Lv: 'lv',
  LvLV: 'lv-LV',
  Nl: 'nl',
  NlBE: 'nl-BE',
  NlNL: 'nl-NL',
  No: 'no',
  NoNO: 'no-NO',
  Pa: 'pa',
  Pl: 'pl',
  PlPL: 'pl-PL',
  Pt: 'pt',
  PtPT: 'pt-PT',
  PtBR: 'pt-BR',
  Ro: 'ro',
  RoRO: 'ro-RO',
  Ru: 'ru',
  RuRU: 'ru-RU',
  Sk: 'sk',
  SkSK: 'sk-SK',
  Sl: 'sl',
  SlSI: 'sl-SI',
  Sr: 'sr',
  SrRS: 'sr-RS',
  Sv: 'sv',
  SvSE: 'sv-SE',
  Te: 'te',
  Zh: 'zh',
  ZhCN: 'zh-CN',
  ZhHK: 'zh-HK',
  ZhSG: 'zh-SG',
  ZhTW: 'zh-TW',
} as const;
export type CommonLanguages = (typeof CommonLanguages)[keyof typeof CommonLanguages];

/** Compartment Type (http://hl7.org/fhir/ValueSet/compartment-type) */
export const CompartmentType = {
  Patient: 'Patient',
  Encounter: 'Encounter',
  RelatedPerson: 'RelatedPerson',
  Practitioner: 'Practitioner',
  Device: 'Device',
  EpisodeOfCare: 'EpisodeOfCare',
} as const;
export type CompartmentType = (typeof CompartmentType)[keyof typeof CompartmentType];

/** Composition Status (http://hl7.org/fhir/ValueSet/composition-status) */
export const CompositionStatus = {
  Registered: 'registered',
  Partial: 'partial',
  Preliminary: 'preliminary',
  Final: 'final',
  Amended: 'amended',
  Corrected: 'corrected',
  Appended: 'appended',
  Cancelled: 'cancelled',
  EnteredInError: 'entered-in-error',
  Deprecated: 'deprecated',
  Unknown: 'unknown',
} as const;
export type CompositionStatus = (typeof CompositionStatus)[keyof typeof CompositionStatus];

/** ConceptMap Attribute Type (http://hl7.org/fhir/ValueSet/conceptmap-attribute-type) */
export const ConceptMapAttributeType = {
  Code: 'code',
  Coding: 'Coding',
  String: 'string',
  Boolean: 'boolean',
  Quantity: 'Quantity',
} as const;
export type ConceptMapAttributeType =
  (typeof ConceptMapAttributeType)[keyof typeof ConceptMapAttributeType];

/** Concept Map Group Unmapped Mode (http://hl7.org/fhir/ValueSet/conceptmap-unmapped-mode) */
export const ConceptMapGroupUnmappedMode = {
  UseSourceCode: 'use-source-code',
  Fixed: 'fixed',
  OtherMap: 'other-map',
} as const;
export type ConceptMapGroupUnmappedMode =
  (typeof ConceptMapGroupUnmappedMode)[keyof typeof ConceptMapGroupUnmappedMode];

/** ConceptMap Property Type (http://hl7.org/fhir/ValueSet/conceptmap-property-type) */
export const ConceptMapPropertyType = {
  Coding: 'Coding',
  String: 'string',
  Integer: 'integer',
  Boolean: 'boolean',
  DateTime: 'dateTime',
  Decimal: 'decimal',
  Code: 'code',
} as const;
export type ConceptMapPropertyType =
  (typeof ConceptMapPropertyType)[keyof typeof ConceptMapPropertyType];

/** ConceptMapRelationship (http://hl7.org/fhir/ValueSet/concept-map-relationship) */
export const ConceptMapRelationship = {
  RelatedTo: 'related-to',
  Equivalent: 'equivalent',
  SourceIsNarrowerThanTarget: 'source-is-narrower-than-target',
  SourceIsBroaderThanTarget: 'source-is-broader-than-target',
  NotRelatedTo: 'not-related-to',
} as const;
export type ConceptMapRelationship =
  (typeof ConceptMapRelationship)[keyof typeof ConceptMapRelationship];

/** Conditional Delete Status (http://hl7.org/fhir/ValueSet/conditional-delete-status) */
export const ConditionalDeleteStatus = {
  NotSupported: 'not-supported',
  Single: 'single',
  Multiple: 'multiple',
} as const;
export type ConditionalDeleteStatus =
  (typeof ConditionalDeleteStatus)[keyof typeof ConditionalDeleteStatus];

/** Conditional Read Status (http://hl7.org/fhir/ValueSet/conditional-read-status) */
export const ConditionalReadStatus = {
  NotSupported: 'not-supported',
  ModifiedSince: 'modified-since',
  NotMatch: 'not-match',
  FullSupport: 'full-support',
} as const;
export type ConditionalReadStatus =
  (typeof ConditionalReadStatus)[keyof typeof ConditionalReadStatus];

/** Condition Precondition Type (http://hl7.org/fhir/ValueSet/condition-precondition-type) */
export const ConditionPreconditionType = { Sensitive: 'sensitive', Specific: 'specific' } as const;
export type ConditionPreconditionType =
  (typeof ConditionPreconditionType)[keyof typeof ConditionPreconditionType];

/** Condition Questionnaire Purpose (http://hl7.org/fhir/ValueSet/condition-questionnaire-purpose) */
export const ConditionQuestionnairePurpose = {
  Preadmit: 'preadmit',
  DiffDiagnosis: 'diff-diagnosis',
  Outcome: 'outcome',
} as const;
export type ConditionQuestionnairePurpose =
  (typeof ConditionQuestionnairePurpose)[keyof typeof ConditionQuestionnairePurpose];

/** Conformance Expectation (http://hl7.org/fhir/ValueSet/conformance-expectation) */
export const ConformanceExpectation = {
  SHALL: 'SHALL',
  SHOULD: 'SHOULD',
  MAY: 'MAY',
  SHOULDNOT: 'SHOULD-NOT',
} as const;
export type ConformanceExpectation =
  (typeof ConformanceExpectation)[keyof typeof ConformanceExpectation];

/** Consent Data Meaning (http://hl7.org/fhir/ValueSet/consent-data-meaning) */
export const ConsentDataMeaning = {
  Instance: 'instance',
  Related: 'related',
  Dependents: 'dependents',
  Authoredby: 'authoredby',
} as const;
export type ConsentDataMeaning = (typeof ConsentDataMeaning)[keyof typeof ConsentDataMeaning];

/** Consent Provision Type (http://hl7.org/fhir/ValueSet/consent-provision-type) */
export const ConsentProvisionType = { Deny: 'deny', Permit: 'permit' } as const;
export type ConsentProvisionType = (typeof ConsentProvisionType)[keyof typeof ConsentProvisionType];

/** Consent State (http://hl7.org/fhir/ValueSet/consent-state-codes) */
export const ConsentState = {
  Draft: 'draft',
  Active: 'active',
  Inactive: 'inactive',
  NotDone: 'not-done',
  EnteredInError: 'entered-in-error',
  Unknown: 'unknown',
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

/** Criteria Not Exists Behavior (http://hl7.org/fhir/ValueSet/subscriptiontopic-cr-behavior) */
export const CriteriaNotExistsBehavior = {
  TestPasses: 'test-passes',
  TestFails: 'test-fails',
} as const;
export type CriteriaNotExistsBehavior =
  (typeof CriteriaNotExistsBehavior)[keyof typeof CriteriaNotExistsBehavior];

/** Days Of Week (http://hl7.org/fhir/ValueSet/days-of-week) */
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

/** Detected Issue Severity (http://hl7.org/fhir/ValueSet/detectedissue-severity) */
export const DetectedIssueSeverity = { High: 'high', Moderate: 'moderate', Low: 'low' } as const;
export type DetectedIssueSeverity =
  (typeof DetectedIssueSeverity)[keyof typeof DetectedIssueSeverity];

/** Detected Issue Status (http://hl7.org/fhir/ValueSet/detectedissue-status) */
export const DetectedIssueStatus = {
  Preliminary: 'preliminary',
  Final: 'final',
  EnteredInError: 'entered-in-error',
  Mitigated: 'mitigated',
} as const;
export type DetectedIssueStatus = (typeof DetectedIssueStatus)[keyof typeof DetectedIssueStatus];

/** Device Corrective Action Scope (http://hl7.org/fhir/ValueSet/device-correctiveactionscope) */
export const DeviceCorrectiveActionScope = {
  Model: 'model',
  LotNumbers: 'lot-numbers',
  SerialNumbers: 'serial-numbers',
} as const;
export type DeviceCorrectiveActionScope =
  (typeof DeviceCorrectiveActionScope)[keyof typeof DeviceCorrectiveActionScope];

/** Device Definition Regulatory Identifier Type (http://hl7.org/fhir/ValueSet/devicedefinition-regulatory-identifier-type) */
export const DeviceDefinitionRegulatoryIdentifierType = {
  Basic: 'basic',
  Master: 'master',
  License: 'license',
} as const;
export type DeviceDefinitionRegulatoryIdentifierType =
  (typeof DeviceDefinitionRegulatoryIdentifierType)[keyof typeof DeviceDefinitionRegulatoryIdentifierType];

/** DeviceDispense Status Codes (http://hl7.org/fhir/ValueSet/devicedispense-status) */
export const DeviceDispenseStatusCodes = {
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
export type DeviceDispenseStatusCodes =
  (typeof DeviceDispenseStatusCodes)[keyof typeof DeviceDispenseStatusCodes];

/** Device Metric Calibration State (http://hl7.org/fhir/ValueSet/metric-calibration-state) */
export const DeviceMetricCalibrationState = {
  NotCalibrated: 'not-calibrated',
  CalibrationRequired: 'calibration-required',
  Calibrated: 'calibrated',
  Unspecified: 'unspecified',
} as const;
export type DeviceMetricCalibrationState =
  (typeof DeviceMetricCalibrationState)[keyof typeof DeviceMetricCalibrationState];

/** Device Metric Calibration Type (http://hl7.org/fhir/ValueSet/metric-calibration-type) */
export const DeviceMetricCalibrationType = {
  Unspecified: 'unspecified',
  Offset: 'offset',
  Gain: 'gain',
  TwoPoint: 'two-point',
} as const;
export type DeviceMetricCalibrationType =
  (typeof DeviceMetricCalibrationType)[keyof typeof DeviceMetricCalibrationType];

/** Device Metric Category (http://hl7.org/fhir/ValueSet/metric-category) */
export const DeviceMetricCategory = {
  Measurement: 'measurement',
  Setting: 'setting',
  Calculation: 'calculation',
  Unspecified: 'unspecified',
} as const;
export type DeviceMetricCategory = (typeof DeviceMetricCategory)[keyof typeof DeviceMetricCategory];

/** Device Metric Operational Status (http://hl7.org/fhir/ValueSet/metric-operational-status) */
export const DeviceMetricOperationalStatus = {
  On: 'on',
  Off: 'off',
  Standby: 'standby',
  EnteredInError: 'entered-in-error',
} as const;
export type DeviceMetricOperationalStatus =
  (typeof DeviceMetricOperationalStatus)[keyof typeof DeviceMetricOperationalStatus];

/** Device Name Type (http://hl7.org/fhir/ValueSet/device-nametype) */
export const DeviceNameType = {
  RegisteredName: 'registered-name',
  UserFriendlyName: 'user-friendly-name',
  PatientReportedName: 'patient-reported-name',
} as const;
export type DeviceNameType = (typeof DeviceNameType)[keyof typeof DeviceNameType];

/** Device Production Identifier In UDI (http://hl7.org/fhir/ValueSet/device-productidentifierinudi) */
export const DeviceProductionIdentifierInUDI = {
  LotNumber: 'lot-number',
  ManufacturedDate: 'manufactured-date',
  SerialNumber: 'serial-number',
  ExpirationDate: 'expiration-date',
  BiologicalSource: 'biological-source',
  SoftwareVersion: 'software-version',
} as const;
export type DeviceProductionIdentifierInUDI =
  (typeof DeviceProductionIdentifierInUDI)[keyof typeof DeviceProductionIdentifierInUDI];

/** Device Usage Status (http://hl7.org/fhir/ValueSet/deviceusage-status) */
export const DeviceUsageStatus = {
  Active: 'active',
  Completed: 'completed',
  NotDone: 'not-done',
  EnteredInError: 'entered-in-error',
  Intended: 'intended',
  Stopped: 'stopped',
  OnHold: 'on-hold',
} as const;
export type DeviceUsageStatus = (typeof DeviceUsageStatus)[keyof typeof DeviceUsageStatus];

/** Diagnostic Report Status (http://hl7.org/fhir/ValueSet/diagnostic-report-status) */
export const DiagnosticReportStatus = {
  Registered: 'registered',
  Partial: 'partial',
  Preliminary: 'preliminary',
  Modified: 'modified',
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
  Position: 'position',
} as const;
export type DiscriminatorType = (typeof DiscriminatorType)[keyof typeof DiscriminatorType];

/** Document Mode (http://hl7.org/fhir/ValueSet/document-mode) */
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

/** Eligibility Outcome (http://hl7.org/fhir/ValueSet/eligibility-outcome) */
export const EligibilityOutcome = {
  Queued: 'queued',
  Complete: 'complete',
  Error: 'error',
  Partial: 'partial',
} as const;
export type EligibilityOutcome = (typeof EligibilityOutcome)[keyof typeof EligibilityOutcome];

/** Eligibility Request Purpose (http://hl7.org/fhir/ValueSet/eligibilityrequest-purpose) */
export const EligibilityRequestPurpose = {
  AuthRequirements: 'auth-requirements',
  Benefits: 'benefits',
  Discovery: 'discovery',
  Validation: 'validation',
} as const;
export type EligibilityRequestPurpose =
  (typeof EligibilityRequestPurpose)[keyof typeof EligibilityRequestPurpose];

/** Eligibility Response Purpose (http://hl7.org/fhir/ValueSet/eligibilityresponse-purpose) */
export const EligibilityResponsePurpose = {
  AuthRequirements: 'auth-requirements',
  Benefits: 'benefits',
  Discovery: 'discovery',
  Validation: 'validation',
} as const;
export type EligibilityResponsePurpose =
  (typeof EligibilityResponsePurpose)[keyof typeof EligibilityResponsePurpose];

/** Enable When Behavior (http://hl7.org/fhir/ValueSet/questionnaire-enable-behavior) */
export const EnableWhenBehavior = { All: 'all', Any: 'any' } as const;
export type EnableWhenBehavior = (typeof EnableWhenBehavior)[keyof typeof EnableWhenBehavior];

/** Encounter Location Status (http://hl7.org/fhir/ValueSet/encounter-location-status) */
export const EncounterLocationStatus = {
  Planned: 'planned',
  Active: 'active',
  Reserved: 'reserved',
  Completed: 'completed',
} as const;
export type EncounterLocationStatus =
  (typeof EncounterLocationStatus)[keyof typeof EncounterLocationStatus];

/** Encounter Status (http://hl7.org/fhir/ValueSet/encounter-status) */
export const EncounterStatus = {
  Planned: 'planned',
  InProgress: 'in-progress',
  OnHold: 'on-hold',
  Discharged: 'discharged',
  Completed: 'completed',
  Cancelled: 'cancelled',
  Discontinued: 'discontinued',
  EnteredInError: 'entered-in-error',
  Unknown: 'unknown',
} as const;
export type EncounterStatus = (typeof EncounterStatus)[keyof typeof EncounterStatus];

/** Endpoint Status (http://hl7.org/fhir/ValueSet/endpoint-status) */
export const EndpointStatus = {
  Active: 'active',
  Suspended: 'suspended',
  Error: 'error',
  Off: 'off',
  EnteredInError: 'entered-in-error',
} as const;
export type EndpointStatus = (typeof EndpointStatus)[keyof typeof EndpointStatus];

/** Enrollment Outcome (http://hl7.org/fhir/ValueSet/enrollment-outcome) */
export const EnrollmentOutcome = {
  Queued: 'queued',
  Complete: 'complete',
  Error: 'error',
  Partial: 'partial',
} as const;
export type EnrollmentOutcome = (typeof EnrollmentOutcome)[keyof typeof EnrollmentOutcome];

/** Episode Of Care Status (http://hl7.org/fhir/ValueSet/episode-of-care-status) */
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

/** Event Capability Mode (http://hl7.org/fhir/ValueSet/event-capability-mode) */
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
  IMD: 'IMD',
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

/** Evidence Variable Handling (http://hl7.org/fhir/ValueSet/variable-handling) */
export const EvidenceVariableHandling = {
  Continuous: 'continuous',
  Dichotomous: 'dichotomous',
  Ordinal: 'ordinal',
  Polychotomous: 'polychotomous',
} as const;
export type EvidenceVariableHandling =
  (typeof EvidenceVariableHandling)[keyof typeof EvidenceVariableHandling];

/** Example Scenario Actor Type (http://hl7.org/fhir/ValueSet/examplescenario-actor-type) */
export const ExampleScenarioActorType = { Person: 'person', System: 'system' } as const;
export type ExampleScenarioActorType =
  (typeof ExampleScenarioActorType)[keyof typeof ExampleScenarioActorType];

/** Explanation Of Benefit Status (http://hl7.org/fhir/ValueSet/explanationofbenefit-status) */
export const ExplanationOfBenefitStatus = {
  Active: 'active',
  Cancelled: 'cancelled',
  Draft: 'draft',
  EnteredInError: 'entered-in-error',
} as const;
export type ExplanationOfBenefitStatus =
  (typeof ExplanationOfBenefitStatus)[keyof typeof ExplanationOfBenefitStatus];

/** Extension Context Type (http://hl7.org/fhir/ValueSet/extension-context-type) */
export const ExtensionContextType = {
  Fhirpath: 'fhirpath',
  Element: 'element',
  Extension: 'extension',
} as const;
export type ExtensionContextType = (typeof ExtensionContextType)[keyof typeof ExtensionContextType];

/** Family History Status (http://hl7.org/fhir/ValueSet/history-status) */
export const FamilyHistoryStatus = {
  Partial: 'partial',
  Completed: 'completed',
  EnteredInError: 'entered-in-error',
  HealthUnknown: 'health-unknown',
} as const;
export type FamilyHistoryStatus = (typeof FamilyHistoryStatus)[keyof typeof FamilyHistoryStatus];

/** FHIR Device Status (http://hl7.org/fhir/ValueSet/device-status) */
export const FHIRDeviceStatus = {
  Active: 'active',
  Inactive: 'inactive',
  EnteredInError: 'entered-in-error',
} as const;
export type FHIRDeviceStatus = (typeof FHIRDeviceStatus)[keyof typeof FHIRDeviceStatus];

/** FHIRSubstanceStatus (http://hl7.org/fhir/ValueSet/substance-status) */
export const FHIRSubstanceStatus = {
  Active: 'active',
  Inactive: 'inactive',
  EnteredInError: 'entered-in-error',
} as const;
export type FHIRSubstanceStatus = (typeof FHIRSubstanceStatus)[keyof typeof FHIRSubstanceStatus];

/** All FHIR Types (http://hl7.org/fhir/ValueSet/fhir-types) */
export const FHIRTypes = {
  Base: 'Base',
  Element: 'Element',
  BackboneElement: 'BackboneElement',
  DataType: 'DataType',
  Address: 'Address',
  Annotation: 'Annotation',
  Attachment: 'Attachment',
  Availability: 'Availability',
  BackboneType: 'BackboneType',
  Dosage: 'Dosage',
  ElementDefinition: 'ElementDefinition',
  MarketingStatus: 'MarketingStatus',
  ProductShelfLife: 'ProductShelfLife',
  Timing: 'Timing',
  CodeableConcept: 'CodeableConcept',
  CodeableReference: 'CodeableReference',
  Coding: 'Coding',
  ContactDetail: 'ContactDetail',
  ContactPoint: 'ContactPoint',
  Contributor: 'Contributor',
  DataRequirement: 'DataRequirement',
  Expression: 'Expression',
  ExtendedContactDetail: 'ExtendedContactDetail',
  Extension: 'Extension',
  HumanName: 'HumanName',
  Identifier: 'Identifier',
  Meta: 'Meta',
  MonetaryComponent: 'MonetaryComponent',
  Money: 'Money',
  Narrative: 'Narrative',
  ParameterDefinition: 'ParameterDefinition',
  Period: 'Period',
  PrimitiveType: 'PrimitiveType',
  Base64Binary: 'base64Binary',
  Boolean: 'boolean',
  Date: 'date',
  DateTime: 'dateTime',
  Decimal: 'decimal',
  Instant: 'instant',
  Integer: 'integer',
  PositiveInt: 'positiveInt',
  UnsignedInt: 'unsignedInt',
  Integer64: 'integer64',
  String: 'string',
  Code: 'code',
  Id: 'id',
  Markdown: 'markdown',
  Time: 'time',
  Uri: 'uri',
  Canonical: 'canonical',
  Oid: 'oid',
  Url: 'url',
  Uuid: 'uuid',
  Quantity: 'Quantity',
  Age: 'Age',
  Count: 'Count',
  Distance: 'Distance',
  Duration: 'Duration',
  Range: 'Range',
  Ratio: 'Ratio',
  RatioRange: 'RatioRange',
  Reference: 'Reference',
  RelatedArtifact: 'RelatedArtifact',
  SampledData: 'SampledData',
  Signature: 'Signature',
  TriggerDefinition: 'TriggerDefinition',
  UsageContext: 'UsageContext',
  VirtualServiceDetail: 'VirtualServiceDetail',
  Xhtml: 'xhtml',
  Resource: 'Resource',
  Binary: 'Binary',
  Bundle: 'Bundle',
  DomainResource: 'DomainResource',
  Account: 'Account',
  ActivityDefinition: 'ActivityDefinition',
  ActorDefinition: 'ActorDefinition',
  AdministrableProductDefinition: 'AdministrableProductDefinition',
  AdverseEvent: 'AdverseEvent',
  AllergyIntolerance: 'AllergyIntolerance',
  Appointment: 'Appointment',
  AppointmentResponse: 'AppointmentResponse',
  ArtifactAssessment: 'ArtifactAssessment',
  AuditEvent: 'AuditEvent',
  Basic: 'Basic',
  BiologicallyDerivedProduct: 'BiologicallyDerivedProduct',
  BiologicallyDerivedProductDispense: 'BiologicallyDerivedProductDispense',
  BodyStructure: 'BodyStructure',
  CanonicalResource: 'CanonicalResource',
  CapabilityStatement: 'CapabilityStatement',
  CarePlan: 'CarePlan',
  CareTeam: 'CareTeam',
  ChargeItem: 'ChargeItem',
  ChargeItemDefinition: 'ChargeItemDefinition',
  Citation: 'Citation',
  Claim: 'Claim',
  ClaimResponse: 'ClaimResponse',
  ClinicalImpression: 'ClinicalImpression',
  ClinicalUseDefinition: 'ClinicalUseDefinition',
  CodeSystem: 'CodeSystem',
  Communication: 'Communication',
  CommunicationRequest: 'CommunicationRequest',
  CompartmentDefinition: 'CompartmentDefinition',
  Composition: 'Composition',
  ConceptMap: 'ConceptMap',
  Condition: 'Condition',
  ConditionDefinition: 'ConditionDefinition',
  Consent: 'Consent',
  Contract: 'Contract',
  Coverage: 'Coverage',
  CoverageEligibilityRequest: 'CoverageEligibilityRequest',
  CoverageEligibilityResponse: 'CoverageEligibilityResponse',
  DetectedIssue: 'DetectedIssue',
  Device: 'Device',
  DeviceAssociation: 'DeviceAssociation',
  DeviceDefinition: 'DeviceDefinition',
  DeviceDispense: 'DeviceDispense',
  DeviceMetric: 'DeviceMetric',
  DeviceRequest: 'DeviceRequest',
  DeviceUsage: 'DeviceUsage',
  DiagnosticReport: 'DiagnosticReport',
  DocumentReference: 'DocumentReference',
  Encounter: 'Encounter',
  EncounterHistory: 'EncounterHistory',
  Endpoint: 'Endpoint',
  EnrollmentRequest: 'EnrollmentRequest',
  EnrollmentResponse: 'EnrollmentResponse',
  EpisodeOfCare: 'EpisodeOfCare',
  EventDefinition: 'EventDefinition',
  Evidence: 'Evidence',
  EvidenceReport: 'EvidenceReport',
  EvidenceVariable: 'EvidenceVariable',
  ExampleScenario: 'ExampleScenario',
  ExplanationOfBenefit: 'ExplanationOfBenefit',
  FamilyMemberHistory: 'FamilyMemberHistory',
  Flag: 'Flag',
  FormularyItem: 'FormularyItem',
  GenomicStudy: 'GenomicStudy',
  Goal: 'Goal',
  GraphDefinition: 'GraphDefinition',
  Group: 'Group',
  GuidanceResponse: 'GuidanceResponse',
  HealthcareService: 'HealthcareService',
  ImagingSelection: 'ImagingSelection',
  ImagingStudy: 'ImagingStudy',
  Immunization: 'Immunization',
  ImmunizationEvaluation: 'ImmunizationEvaluation',
  ImmunizationRecommendation: 'ImmunizationRecommendation',
  ImplementationGuide: 'ImplementationGuide',
  Ingredient: 'Ingredient',
  InsurancePlan: 'InsurancePlan',
  InventoryItem: 'InventoryItem',
  InventoryReport: 'InventoryReport',
  Invoice: 'Invoice',
  Library: 'Library',
  Linkage: 'Linkage',
  List: 'List',
  Location: 'Location',
  ManufacturedItemDefinition: 'ManufacturedItemDefinition',
  Measure: 'Measure',
  MeasureReport: 'MeasureReport',
  Medication: 'Medication',
  MedicationAdministration: 'MedicationAdministration',
  MedicationDispense: 'MedicationDispense',
  MedicationKnowledge: 'MedicationKnowledge',
  MedicationRequest: 'MedicationRequest',
  MedicationStatement: 'MedicationStatement',
  MedicinalProductDefinition: 'MedicinalProductDefinition',
  MessageDefinition: 'MessageDefinition',
  MessageHeader: 'MessageHeader',
  MetadataResource: 'MetadataResource',
  MolecularSequence: 'MolecularSequence',
  NamingSystem: 'NamingSystem',
  NutritionIntake: 'NutritionIntake',
  NutritionOrder: 'NutritionOrder',
  NutritionProduct: 'NutritionProduct',
  Observation: 'Observation',
  ObservationDefinition: 'ObservationDefinition',
  OperationDefinition: 'OperationDefinition',
  OperationOutcome: 'OperationOutcome',
  Organization: 'Organization',
  OrganizationAffiliation: 'OrganizationAffiliation',
  PackagedProductDefinition: 'PackagedProductDefinition',
  Patient: 'Patient',
  PaymentNotice: 'PaymentNotice',
  PaymentReconciliation: 'PaymentReconciliation',
  Permission: 'Permission',
  Person: 'Person',
  PlanDefinition: 'PlanDefinition',
  Practitioner: 'Practitioner',
  PractitionerRole: 'PractitionerRole',
  Procedure: 'Procedure',
  Provenance: 'Provenance',
  Questionnaire: 'Questionnaire',
  QuestionnaireResponse: 'QuestionnaireResponse',
  RegulatedAuthorization: 'RegulatedAuthorization',
  RelatedPerson: 'RelatedPerson',
  RequestOrchestration: 'RequestOrchestration',
  Requirements: 'Requirements',
  ResearchStudy: 'ResearchStudy',
  ResearchSubject: 'ResearchSubject',
  RiskAssessment: 'RiskAssessment',
  Schedule: 'Schedule',
  SearchParameter: 'SearchParameter',
  ServiceRequest: 'ServiceRequest',
  Slot: 'Slot',
  Specimen: 'Specimen',
  SpecimenDefinition: 'SpecimenDefinition',
  StructureDefinition: 'StructureDefinition',
  StructureMap: 'StructureMap',
  Subscription: 'Subscription',
  SubscriptionStatus: 'SubscriptionStatus',
  SubscriptionTopic: 'SubscriptionTopic',
  Substance: 'Substance',
  SubstanceDefinition: 'SubstanceDefinition',
  SubstanceNucleicAcid: 'SubstanceNucleicAcid',
  SubstancePolymer: 'SubstancePolymer',
  SubstanceProtein: 'SubstanceProtein',
  SubstanceReferenceInformation: 'SubstanceReferenceInformation',
  SubstanceSourceMaterial: 'SubstanceSourceMaterial',
  SupplyDelivery: 'SupplyDelivery',
  SupplyRequest: 'SupplyRequest',
  Task: 'Task',
  TerminologyCapabilities: 'TerminologyCapabilities',
  TestPlan: 'TestPlan',
  TestReport: 'TestReport',
  TestScript: 'TestScript',
  Transport: 'Transport',
  ValueSet: 'ValueSet',
  VerificationResult: 'VerificationResult',
  VisionPrescription: 'VisionPrescription',
  Parameters: 'Parameters',
} as const;
export type FHIRTypes = (typeof FHIRTypes)[keyof typeof FHIRTypes];

/** FHIRVersion (http://hl7.org/fhir/ValueSet/FHIR-version) */
export const FHIRVersion = {
  _001: '0.01',
  _005: '0.05',
  _006: '0.06',
  _011: '0.11',
  _00: '0.0',
  _0080: '0.0.80',
  _0081: '0.0.81',
  _0082: '0.0.82',
  _04: '0.4',
  _040: '0.4.0',
  _05: '0.5',
  _050: '0.5.0',
  _10: '1.0',
  _100: '1.0.0',
  _101: '1.0.1',
  _102: '1.0.2',
  _11: '1.1',
  _110: '1.1.0',
  _14: '1.4',
  _140: '1.4.0',
  _16: '1.6',
  _160: '1.6.0',
  _18: '1.8',
  _180: '1.8.0',
  _30: '3.0',
  _300: '3.0.0',
  _301: '3.0.1',
  _302: '3.0.2',
  _33: '3.3',
  _330: '3.3.0',
  _35: '3.5',
  _350: '3.5.0',
  _40: '4.0',
  _400: '4.0.0',
  _401: '4.0.1',
  _41: '4.1',
  _410: '4.1.0',
  _42: '4.2',
  _420: '4.2.0',
  _43: '4.3',
  _430: '4.3.0',
  _430Cibuild: '4.3.0-cibuild',
  _430Snapshot1: '4.3.0-snapshot1',
  _44: '4.4',
  _440: '4.4.0',
  _45: '4.5',
  _450: '4.5.0',
  _46: '4.6',
  _460: '4.6.0',
  _50: '5.0',
  _500: '5.0.0',
  _500Cibuild: '5.0.0-cibuild',
  _500Snapshot1: '5.0.0-snapshot1',
  _500Snapshot2: '5.0.0-snapshot2',
  _500Ballot: '5.0.0-ballot',
  _500Snapshot3: '5.0.0-snapshot3',
  _500DraftFinal: '5.0.0-draft-final',
} as const;
export type FHIRVersion = (typeof FHIRVersion)[keyof typeof FHIRVersion];

/** Filter Operator (http://hl7.org/fhir/ValueSet/filter-operator) */
export const FilterOperator = {
  Equal: '=',
  IsA: 'is-a',
  DescendentOf: 'descendent-of',
  IsNotA: 'is-not-a',
  Regex: 'regex',
  In: 'in',
  NotIn: 'not-in',
  Generalizes: 'generalizes',
  ChildOf: 'child-of',
  DescendentLeaf: 'descendent-leaf',
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

/** Flag Status (http://hl7.org/fhir/ValueSet/flag-status) */
export const FlagStatus = {
  Active: 'active',
  Inactive: 'inactive',
  EnteredInError: 'entered-in-error',
} as const;
export type FlagStatus = (typeof FlagStatus)[keyof typeof FlagStatus];

/** FormularyItem Status Codes (http://hl7.org/fhir/ValueSet/formularyitem-status) */
export const FormularyItemStatusCodes = {
  Active: 'active',
  EnteredInError: 'entered-in-error',
  Inactive: 'inactive',
} as const;
export type FormularyItemStatusCodes =
  (typeof FormularyItemStatusCodes)[keyof typeof FormularyItemStatusCodes];

/** Genomic Study Status (http://hl7.org/fhir/ValueSet/genomicstudy-status) */
export const GenomicStudyStatus = {
  Registered: 'registered',
  Available: 'available',
  Cancelled: 'cancelled',
  EnteredInError: 'entered-in-error',
  Unknown: 'unknown',
} as const;
export type GenomicStudyStatus = (typeof GenomicStudyStatus)[keyof typeof GenomicStudyStatus];

/** Goal Lifecycle Status (http://hl7.org/fhir/ValueSet/goal-status) */
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

/** Graph Compartment Rule (http://hl7.org/fhir/ValueSet/graph-compartment-rule) */
export const GraphCompartmentRule = {
  Identical: 'identical',
  Matching: 'matching',
  Different: 'different',
  Custom: 'custom',
} as const;
export type GraphCompartmentRule = (typeof GraphCompartmentRule)[keyof typeof GraphCompartmentRule];

/** Graph Compartment Use (http://hl7.org/fhir/ValueSet/graph-compartment-use) */
export const GraphCompartmentUse = { Where: 'where', Requires: 'requires' } as const;
export type GraphCompartmentUse = (typeof GraphCompartmentUse)[keyof typeof GraphCompartmentUse];

/** Group Membership Basis (http://hl7.org/fhir/ValueSet/group-membership-basis) */
export const GroupMembershipBasis = {
  Definitional: 'definitional',
  Enumerated: 'enumerated',
} as const;
export type GroupMembershipBasis = (typeof GroupMembershipBasis)[keyof typeof GroupMembershipBasis];

/** Group Type (http://hl7.org/fhir/ValueSet/group-type) */
export const GroupType = {
  Person: 'person',
  Animal: 'animal',
  Practitioner: 'practitioner',
  Device: 'device',
  Careteam: 'careteam',
  Healthcareservice: 'healthcareservice',
  Location: 'location',
  Organization: 'organization',
  Relatedperson: 'relatedperson',
  Specimen: 'specimen',
} as const;
export type GroupType = (typeof GroupType)[keyof typeof GroupType];

/** Guidance Response Status (http://hl7.org/fhir/ValueSet/guidance-response-status) */
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

/** Guide Page Generation (http://hl7.org/fhir/ValueSet/guide-page-generation) */
export const GuidePageGeneration = {
  Html: 'html',
  Markdown: 'markdown',
  Xml: 'xml',
  Generated: 'generated',
} as const;
export type GuidePageGeneration = (typeof GuidePageGeneration)[keyof typeof GuidePageGeneration];

/** H T T P Verb (http://hl7.org/fhir/ValueSet/http-verb) */
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

/** Identity Assurance Level (http://hl7.org/fhir/ValueSet/identity-assuranceLevel) */
export const IdentityAssuranceLevel = {
  Level1: 'level1',
  Level2: 'level2',
  Level3: 'level3',
  Level4: 'level4',
} as const;
export type IdentityAssuranceLevel =
  (typeof IdentityAssuranceLevel)[keyof typeof IdentityAssuranceLevel];

/** Imaging Selection2 D Graphic Type (http://hl7.org/fhir/ValueSet/imagingselection-2dgraphictype) */
export const ImagingSelection2DGraphicType = {
  Point: 'point',
  Polyline: 'polyline',
  Interpolated: 'interpolated',
  Circle: 'circle',
  Ellipse: 'ellipse',
} as const;
export type ImagingSelection2DGraphicType =
  (typeof ImagingSelection2DGraphicType)[keyof typeof ImagingSelection2DGraphicType];

/** Imaging Selection3 D Graphic Type (http://hl7.org/fhir/ValueSet/imagingselection-3dgraphictype) */
export const ImagingSelection3DGraphicType = {
  Point: 'point',
  Multipoint: 'multipoint',
  Polyline: 'polyline',
  Polygon: 'polygon',
  Ellipse: 'ellipse',
  Ellipsoid: 'ellipsoid',
} as const;
export type ImagingSelection3DGraphicType =
  (typeof ImagingSelection3DGraphicType)[keyof typeof ImagingSelection3DGraphicType];

/** Imaging Selection Status (http://hl7.org/fhir/ValueSet/imagingselection-status) */
export const ImagingSelectionStatus = {
  Available: 'available',
  EnteredInError: 'entered-in-error',
  Unknown: 'unknown',
} as const;
export type ImagingSelectionStatus =
  (typeof ImagingSelectionStatus)[keyof typeof ImagingSelectionStatus];

/** Imaging Study Status (http://hl7.org/fhir/ValueSet/imagingstudy-status) */
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

/** Ingredient Manufacturer Role (http://hl7.org/fhir/ValueSet/ingredient-manufacturer-role) */
export const IngredientManufacturerRole = {
  Allowed: 'allowed',
  Possible: 'possible',
  Actual: 'actual',
} as const;
export type IngredientManufacturerRole =
  (typeof IngredientManufacturerRole)[keyof typeof IngredientManufacturerRole];

/** Interaction Trigger (http://hl7.org/fhir/ValueSet/interaction-trigger) */
export const InteractionTrigger = { Create: 'create', Update: 'update', Delete: 'delete' } as const;
export type InteractionTrigger = (typeof InteractionTrigger)[keyof typeof InteractionTrigger];

/** Inventory Count Type (http://hl7.org/fhir/ValueSet/inventoryreport-counttype) */
export const InventoryCountType = { Snapshot: 'snapshot', Difference: 'difference' } as const;
export type InventoryCountType = (typeof InventoryCountType)[keyof typeof InventoryCountType];

/** InventoryItem Status Codes (http://hl7.org/fhir/ValueSet/inventoryitem-status) */
export const InventoryItemStatusCodes = {
  Active: 'active',
  Inactive: 'inactive',
  EnteredInError: 'entered-in-error',
  Unknown: 'unknown',
} as const;
export type InventoryItemStatusCodes =
  (typeof InventoryItemStatusCodes)[keyof typeof InventoryItemStatusCodes];

/** Inventory Report Status (http://hl7.org/fhir/ValueSet/inventoryreport-status) */
export const InventoryReportStatus = {
  Draft: 'draft',
  Requested: 'requested',
  Active: 'active',
  EnteredInError: 'entered-in-error',
} as const;
export type InventoryReportStatus =
  (typeof InventoryReportStatus)[keyof typeof InventoryReportStatus];

/** Invoice Status (http://hl7.org/fhir/ValueSet/invoice-status) */
export const InvoiceStatus = {
  Draft: 'draft',
  Issued: 'issued',
  Balanced: 'balanced',
  Cancelled: 'cancelled',
  EnteredInError: 'entered-in-error',
} as const;
export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus];

/** Issue Severity (http://hl7.org/fhir/ValueSet/issue-severity) */
export const IssueSeverity = {
  Fatal: 'fatal',
  Error: 'error',
  Warning: 'warning',
  Information: 'information',
  Success: 'success',
} as const;
export type IssueSeverity = (typeof IssueSeverity)[keyof typeof IssueSeverity];

/** Issue Type (http://hl7.org/fhir/ValueSet/issue-type) */
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
  LimitedFilter: 'limited-filter',
  Transient: 'transient',
  LockError: 'lock-error',
  NoStore: 'no-store',
  Exception: 'exception',
  Timeout: 'timeout',
  Incomplete: 'incomplete',
  Throttled: 'throttled',
  Informational: 'informational',
  Success: 'success',
} as const;
export type IssueType = (typeof IssueType)[keyof typeof IssueType];

/** Kind (http://hl7.org/fhir/ValueSet/coverage-kind) */
export const Kind = { Insurance: 'insurance', SelfPay: 'self-pay', Other: 'other' } as const;
export type Kind = (typeof Kind)[keyof typeof Kind];

/** Linkage Type (http://hl7.org/fhir/ValueSet/linkage-type) */
export const LinkageType = {
  Source: 'source',
  Alternate: 'alternate',
  Historical: 'historical',
} as const;
export type LinkageType = (typeof LinkageType)[keyof typeof LinkageType];

/** Link Relation Types (http://hl7.org/fhir/ValueSet/iana-link-relations) */
export const LinkRelationTypes = {
  About: 'about',
  Acl: 'acl',
  Alternate: 'alternate',
  Amphtml: 'amphtml',
  Appendix: 'appendix',
  AppleTouchIcon: 'apple-touch-icon',
  AppleTouchStartupImage: 'apple-touch-startup-image',
  Archives: 'archives',
  Author: 'author',
  BlockedBy: 'blocked-by',
  Bookmark: 'bookmark',
  Canonical: 'canonical',
  Chapter: 'chapter',
  CiteAs: 'cite-as',
  Collection: 'collection',
  Contents: 'contents',
  ConvertedFrom: 'convertedFrom',
  Copyright: 'copyright',
  CreateForm: 'create-form',
  Current: 'current',
  Describedby: 'describedby',
  Describes: 'describes',
  Disclosure: 'disclosure',
  DnsPrefetch: 'dns-prefetch',
  Duplicate: 'duplicate',
  Edit: 'edit',
  EditForm: 'edit-form',
  EditMedia: 'edit-media',
  Enclosure: 'enclosure',
  External: 'external',
  First: 'first',
  Glossary: 'glossary',
  Help: 'help',
  Hosts: 'hosts',
  Hub: 'hub',
  Icon: 'icon',
  Index: 'index',
  IntervalAfter: 'intervalAfter',
  IntervalBefore: 'intervalBefore',
  IntervalContains: 'intervalContains',
  IntervalDisjoint: 'intervalDisjoint',
  IntervalDuring: 'intervalDuring',
  IntervalEquals: 'intervalEquals',
  IntervalFinishedBy: 'intervalFinishedBy',
  IntervalFinishes: 'intervalFinishes',
  IntervalIn: 'intervalIn',
  IntervalMeets: 'intervalMeets',
  IntervalMetBy: 'intervalMetBy',
  IntervalOverlappedBy: 'intervalOverlappedBy',
  IntervalOverlaps: 'intervalOverlaps',
  IntervalStartedBy: 'intervalStartedBy',
  IntervalStarts: 'intervalStarts',
  Item: 'item',
  Last: 'last',
  LatestVersion: 'latest-version',
  License: 'license',
  Linkset: 'linkset',
  Lrdd: 'lrdd',
  Manifest: 'manifest',
  MaskIcon: 'mask-icon',
  MediaFeed: 'media-feed',
  Memento: 'memento',
  Micropub: 'micropub',
  Modulepreload: 'modulepreload',
  Monitor: 'monitor',
  MonitorGroup: 'monitor-group',
  Next: 'next',
  NextArchive: 'next-archive',
  Nofollow: 'nofollow',
  Noopener: 'noopener',
  Noreferrer: 'noreferrer',
  Opener: 'opener',
  Openid2LocalId: 'openid2.local_id',
  Openid2Provider: 'openid2.provider',
  Original: 'original',
  P3Pv1: 'P3Pv1',
  Payment: 'payment',
  Pingback: 'pingback',
  Preconnect: 'preconnect',
  PredecessorVersion: 'predecessor-version',
  Prefetch: 'prefetch',
  Preload: 'preload',
  Prerender: 'prerender',
  Prev: 'prev',
  Preview: 'preview',
  Previous: 'previous',
  PrevArchive: 'prev-archive',
  PrivacyPolicy: 'privacy-policy',
  Profile: 'profile',
  Publication: 'publication',
  Related: 'related',
  Restconf: 'restconf',
  Replies: 'replies',
  Ruleinput: 'ruleinput',
  Search: 'search',
  Section: 'section',
  Self: 'self',
  Service: 'service',
  ServiceDesc: 'service-desc',
  ServiceDoc: 'service-doc',
  ServiceMeta: 'service-meta',
  Sponsored: 'sponsored',
  Start: 'start',
  Status: 'status',
  Stylesheet: 'stylesheet',
  Subsection: 'subsection',
  SuccessorVersion: 'successor-version',
  Sunset: 'sunset',
  Tag: 'tag',
  TermsOfService: 'terms-of-service',
  Timegate: 'timegate',
  Timemap: 'timemap',
  Type: 'type',
  Ugc: 'ugc',
  Up: 'up',
  VersionHistory: 'version-history',
  Via: 'via',
  Webmention: 'webmention',
  WorkingCopy: 'working-copy',
  WorkingCopyOf: 'working-copy-of',
} as const;
export type LinkRelationTypes = (typeof LinkRelationTypes)[keyof typeof LinkRelationTypes];

/** Link Type (http://hl7.org/fhir/ValueSet/link-type) */
export const LinkType = {
  ReplacedBy: 'replaced-by',
  Replaces: 'replaces',
  Refer: 'refer',
  Seealso: 'seealso',
} as const;
export type LinkType = (typeof LinkType)[keyof typeof LinkType];

/** List Mode (http://hl7.org/fhir/ValueSet/list-mode) */
export const ListMode = { Working: 'working', Snapshot: 'snapshot', Changes: 'changes' } as const;
export type ListMode = (typeof ListMode)[keyof typeof ListMode];

/** List Status (http://hl7.org/fhir/ValueSet/list-status) */
export const ListStatus = {
  Current: 'current',
  Retired: 'retired',
  EnteredInError: 'entered-in-error',
} as const;
export type ListStatus = (typeof ListStatus)[keyof typeof ListStatus];

/** Location Mode (http://hl7.org/fhir/ValueSet/location-mode) */
export const LocationMode = { Instance: 'instance', Kind: 'kind' } as const;
export type LocationMode = (typeof LocationMode)[keyof typeof LocationMode];

/** Location Status (http://hl7.org/fhir/ValueSet/location-status) */
export const LocationStatus = {
  Active: 'active',
  Suspended: 'suspended',
  Inactive: 'inactive',
} as const;
export type LocationStatus = (typeof LocationStatus)[keyof typeof LocationStatus];

/** Measure Report Status (http://hl7.org/fhir/ValueSet/measure-report-status) */
export const MeasureReportStatus = {
  Complete: 'complete',
  Pending: 'pending',
  Error: 'error',
} as const;
export type MeasureReportStatus = (typeof MeasureReportStatus)[keyof typeof MeasureReportStatus];

/** Measure Report Type (http://hl7.org/fhir/ValueSet/measure-report-type) */
export const MeasureReportType = {
  Individual: 'individual',
  SubjectList: 'subject-list',
  Summary: 'summary',
  DataExchange: 'data-exchange',
} as const;
export type MeasureReportType = (typeof MeasureReportType)[keyof typeof MeasureReportType];

/** MedicationAdministration Status Codes (http://hl7.org/fhir/ValueSet/medication-admin-status) */
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

/** MedicationDispense Status Codes (http://hl7.org/fhir/ValueSet/medicationdispense-status) */
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

/** MedicationKnowledge Status Codes (http://hl7.org/fhir/ValueSet/medicationknowledge-status) */
export const MedicationKnowledgeStatusCodes = {
  Active: 'active',
  EnteredInError: 'entered-in-error',
  Inactive: 'inactive',
} as const;
export type MedicationKnowledgeStatusCodes =
  (typeof MedicationKnowledgeStatusCodes)[keyof typeof MedicationKnowledgeStatusCodes];

/** medicationRequest Intent (http://hl7.org/fhir/ValueSet/medicationrequest-intent) */
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

/** medicationrequest Status (http://hl7.org/fhir/ValueSet/medicationrequest-status) */
export const MedicationrequestStatus = {
  Active: 'active',
  OnHold: 'on-hold',
  Ended: 'ended',
  Stopped: 'stopped',
  Completed: 'completed',
  Cancelled: 'cancelled',
  EnteredInError: 'entered-in-error',
  Draft: 'draft',
  Unknown: 'unknown',
} as const;
export type MedicationrequestStatus =
  (typeof MedicationrequestStatus)[keyof typeof MedicationrequestStatus];

/** MedicationStatement Status Codes (http://hl7.org/fhir/ValueSet/medication-statement-status) */
export const MedicationStatementStatusCodes = {
  Recorded: 'recorded',
  EnteredInError: 'entered-in-error',
  Draft: 'draft',
} as const;
export type MedicationStatementStatusCodes =
  (typeof MedicationStatementStatusCodes)[keyof typeof MedicationStatementStatusCodes];

/** Medication Status Codes (http://hl7.org/fhir/ValueSet/medication-status) */
export const MedicationStatusCodes = {
  Active: 'active',
  Inactive: 'inactive',
  EnteredInError: 'entered-in-error',
} as const;
export type MedicationStatusCodes =
  (typeof MedicationStatusCodes)[keyof typeof MedicationStatusCodes];

/** messageheader-response-request (http://hl7.org/fhir/ValueSet/messageheader-response-request) */
export const MessageheaderResponseRequest = {
  Always: 'always',
  OnError: 'on-error',
  Never: 'never',
  OnSuccess: 'on-success',
} as const;
export type MessageheaderResponseRequest =
  (typeof MessageheaderResponseRequest)[keyof typeof MessageheaderResponseRequest];

/** Message Significance Category (http://hl7.org/fhir/ValueSet/message-significance-category) */
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

/** Naming System Identifier Type (http://hl7.org/fhir/ValueSet/namingsystem-identifier-type) */
export const NamingSystemIdentifierType = {
  Oid: 'oid',
  Uuid: 'uuid',
  Uri: 'uri',
  IriStem: 'iri-stem',
  V2csmnemonic: 'v2csmnemonic',
  Other: 'other',
} as const;
export type NamingSystemIdentifierType =
  (typeof NamingSystemIdentifierType)[keyof typeof NamingSystemIdentifierType];

/** Naming System Type (http://hl7.org/fhir/ValueSet/namingsystem-type) */
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

/** Nutrition Product Status (http://hl7.org/fhir/ValueSet/nutritionproduct-status) */
export const NutritionProductStatus = {
  Active: 'active',
  Inactive: 'inactive',
  EnteredInError: 'entered-in-error',
} as const;
export type NutritionProductStatus =
  (typeof NutritionProductStatus)[keyof typeof NutritionProductStatus];

/** Observation Data Type (http://hl7.org/fhir/ValueSet/permitted-data-type) */
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

/** Observation Range Category (http://hl7.org/fhir/ValueSet/observation-range-category) */
export const ObservationRangeCategory = {
  Reference: 'reference',
  Critical: 'critical',
  Absolute: 'absolute',
} as const;
export type ObservationRangeCategory =
  (typeof ObservationRangeCategory)[keyof typeof ObservationRangeCategory];

/** Observation Status (http://hl7.org/fhir/ValueSet/observation-status) */
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

/** Operation Kind (http://hl7.org/fhir/ValueSet/operation-kind) */
export const OperationKind = { Operation: 'operation', Query: 'query' } as const;
export type OperationKind = (typeof OperationKind)[keyof typeof OperationKind];

/** Operation Parameter Scope (http://hl7.org/fhir/ValueSet/operation-parameter-scope) */
export const OperationParameterScope = {
  Instance: 'instance',
  Type: 'type',
  System: 'system',
} as const;
export type OperationParameterScope =
  (typeof OperationParameterScope)[keyof typeof OperationParameterScope];

/** Operation Parameter Use (http://hl7.org/fhir/ValueSet/operation-parameter-use) */
export const OperationParameterUse = { In: 'in', Out: 'out' } as const;
export type OperationParameterUse =
  (typeof OperationParameterUse)[keyof typeof OperationParameterUse];

/** orientation Type (http://hl7.org/fhir/ValueSet/orientation-type) */
export const OrientationType = { Sense: 'sense', Antisense: 'antisense' } as const;
export type OrientationType = (typeof OrientationType)[keyof typeof OrientationType];

/** Participation Status (http://hl7.org/fhir/ValueSet/participationstatus) */
export const ParticipationStatus = {
  Accepted: 'accepted',
  Declined: 'declined',
  Tentative: 'tentative',
  NeedsAction: 'needs-action',
} as const;
export type ParticipationStatus = (typeof ParticipationStatus)[keyof typeof ParticipationStatus];

/** Payment Outcome (http://hl7.org/fhir/ValueSet/payment-outcome) */
export const PaymentOutcome = {
  Queued: 'queued',
  Complete: 'complete',
  Error: 'error',
  Partial: 'partial',
} as const;
export type PaymentOutcome = (typeof PaymentOutcome)[keyof typeof PaymentOutcome];

/** Permission Rule Combining (http://hl7.org/fhir/ValueSet/permission-rule-combining) */
export const PermissionRuleCombining = {
  DenyOverrides: 'deny-overrides',
  PermitOverrides: 'permit-overrides',
  OrderedDenyOverrides: 'ordered-deny-overrides',
  OrderedPermitOverrides: 'ordered-permit-overrides',
  DenyUnlessPermit: 'deny-unless-permit',
  PermitUnlessDeny: 'permit-unless-deny',
} as const;
export type PermissionRuleCombining =
  (typeof PermissionRuleCombining)[keyof typeof PermissionRuleCombining];

/** Permission Status (http://hl7.org/fhir/ValueSet/permission-status) */
export const PermissionStatus = {
  Active: 'active',
  EnteredInError: 'entered-in-error',
  Draft: 'draft',
  Rejected: 'rejected',
} as const;
export type PermissionStatus = (typeof PermissionStatus)[keyof typeof PermissionStatus];

/** Price Component Type (http://hl7.org/fhir/ValueSet/price-component-type) */
export const PriceComponentType = {
  Base: 'base',
  Surcharge: 'surcharge',
  Deduction: 'deduction',
  Discount: 'discount',
  Tax: 'tax',
  Informational: 'informational',
} as const;
export type PriceComponentType = (typeof PriceComponentType)[keyof typeof PriceComponentType];

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

/** Property Type (http://hl7.org/fhir/ValueSet/concept-property-type) */
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

/** Provenance Entity Role (http://hl7.org/fhir/ValueSet/provenance-entity-role) */
export const ProvenanceEntityRole = {
  Revision: 'revision',
  Quotation: 'quotation',
  Source: 'source',
  Instantiates: 'instantiates',
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

/** QuantityComparator (http://hl7.org/fhir/ValueSet/quantity-comparator) */
export const QuantityComparator = {
  LessThan: '<',
  LessThanOrEqualTo: '<=',
  GreaterThanOrEqualTo: '>=',
  GreaterThan: '>',
  Ad: 'ad',
} as const;
export type QuantityComparator = (typeof QuantityComparator)[keyof typeof QuantityComparator];

/** Questionnaire answer constraints value set (http://hl7.org/fhir/ValueSet/questionnaire-answer-constraint) */
export const QuestionnaireAnswerConstraint = {
  OptionsOnly: 'optionsOnly',
  OptionsOrType: 'optionsOrType',
  OptionsOrString: 'optionsOrString',
} as const;
export type QuestionnaireAnswerConstraint =
  (typeof QuestionnaireAnswerConstraint)[keyof typeof QuestionnaireAnswerConstraint];

/** Questionnaire Item Disabled Display (http://hl7.org/fhir/ValueSet/questionnaire-disabled-display) */
export const QuestionnaireItemDisabledDisplay = {
  Hidden: 'hidden',
  Protected: 'protected',
} as const;
export type QuestionnaireItemDisabledDisplay =
  (typeof QuestionnaireItemDisabledDisplay)[keyof typeof QuestionnaireItemDisabledDisplay];

/** Questionnaire Item Operator (http://hl7.org/fhir/ValueSet/questionnaire-enable-operator) */
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

/** Questionnaire Item Type (http://hl7.org/fhir/ValueSet/item-type) */
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
  Coding: 'coding',
  Attachment: 'attachment',
  Reference: 'reference',
  Quantity: 'quantity',
} as const;
export type QuestionnaireItemType =
  (typeof QuestionnaireItemType)[keyof typeof QuestionnaireItemType];

/** Questionnaire Response Status (http://hl7.org/fhir/ValueSet/questionnaire-answers-status) */
export const QuestionnaireResponseStatus = {
  InProgress: 'in-progress',
  Completed: 'completed',
  Amended: 'amended',
  EnteredInError: 'entered-in-error',
  Stopped: 'stopped',
} as const;
export type QuestionnaireResponseStatus =
  (typeof QuestionnaireResponseStatus)[keyof typeof QuestionnaireResponseStatus];

/** Reference Handling Policy (http://hl7.org/fhir/ValueSet/reference-handling-policy) */
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
  PartOf: 'part-of',
  Amends: 'amends',
  AmendedWith: 'amended-with',
  Appends: 'appends',
  AppendedWith: 'appended-with',
  Cites: 'cites',
  CitedBy: 'cited-by',
  CommentsOn: 'comments-on',
  CommentIn: 'comment-in',
  Contains: 'contains',
  ContainedIn: 'contained-in',
  Corrects: 'corrects',
  CorrectionIn: 'correction-in',
  Replaces: 'replaces',
  ReplacedWith: 'replaced-with',
  Retracts: 'retracts',
  RetractedBy: 'retracted-by',
  Signs: 'signs',
  SimilarTo: 'similar-to',
  Supports: 'supports',
  SupportedWith: 'supported-with',
  Transforms: 'transforms',
  TransformedInto: 'transformed-into',
  TransformedWith: 'transformed-with',
  Documents: 'documents',
  SpecificationOf: 'specification-of',
  CreatedWith: 'created-with',
  CiteAs: 'cite-as',
} as const;
export type RelatedArtifactType = (typeof RelatedArtifactType)[keyof typeof RelatedArtifactType];

/** Related Artifact Type All (http://hl7.org/fhir/ValueSet/related-artifact-type-all) */
export const RelatedArtifactTypeExpanded = {
  Documentation: 'documentation',
  Justification: 'justification',
  Citation: 'citation',
  Predecessor: 'predecessor',
  Successor: 'successor',
  DerivedFrom: 'derived-from',
  DependsOn: 'depends-on',
  ComposedOf: 'composed-of',
  PartOf: 'part-of',
  Amends: 'amends',
  AmendedWith: 'amended-with',
  Appends: 'appends',
  AppendedWith: 'appended-with',
  Cites: 'cites',
  CitedBy: 'cited-by',
  CommentsOn: 'comments-on',
  CommentIn: 'comment-in',
  Contains: 'contains',
  ContainedIn: 'contained-in',
  Corrects: 'corrects',
  CorrectionIn: 'correction-in',
  Replaces: 'replaces',
  ReplacedWith: 'replaced-with',
  Retracts: 'retracts',
  RetractedBy: 'retracted-by',
  Signs: 'signs',
  SimilarTo: 'similar-to',
  Supports: 'supports',
  SupportedWith: 'supported-with',
  Transforms: 'transforms',
  TransformedInto: 'transformed-into',
  TransformedWith: 'transformed-with',
  Documents: 'documents',
  SpecificationOf: 'specification-of',
  CreatedWith: 'created-with',
  CiteAs: 'cite-as',
  Reprint: 'reprint',
  ReprintOf: 'reprint-of',
} as const;
export type RelatedArtifactTypeExpanded =
  (typeof RelatedArtifactTypeExpanded)[keyof typeof RelatedArtifactTypeExpanded];

/** Report Relationship Type (http://hl7.org/fhir/ValueSet/report-relation-type) */
export const ReportRelationshipType = {
  Replaces: 'replaces',
  Amends: 'amends',
  Appends: 'appends',
  Transforms: 'transforms',
  ReplacedWith: 'replacedWith',
  AmendedWith: 'amendedWith',
  AppendedWith: 'appendedWith',
  TransformedWith: 'transformedWith',
} as const;
export type ReportRelationshipType =
  (typeof ReportRelationshipType)[keyof typeof ReportRelationshipType];

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

/** RequestPriority (http://hl7.org/fhir/ValueSet/request-priority) */
export const RequestPriority = {
  Routine: 'routine',
  Urgent: 'urgent',
  Asap: 'asap',
  Stat: 'stat',
} as const;
export type RequestPriority = (typeof RequestPriority)[keyof typeof RequestPriority];

/** Request Resource Types (http://hl7.org/fhir/ValueSet/request-resource-types) */
export const RequestResourceTypes = {
  Appointment: 'Appointment',
  AppointmentResponse: 'AppointmentResponse',
  CarePlan: 'CarePlan',
  Claim: 'Claim',
  CommunicationRequest: 'CommunicationRequest',
  CoverageEligibilityRequest: 'CoverageEligibilityRequest',
  DeviceRequest: 'DeviceRequest',
  EnrollmentRequest: 'EnrollmentRequest',
  ImmunizationRecommendation: 'ImmunizationRecommendation',
  MedicationRequest: 'MedicationRequest',
  NutritionOrder: 'NutritionOrder',
  RequestOrchestration: 'RequestOrchestration',
  ServiceRequest: 'ServiceRequest',
  SupplyRequest: 'SupplyRequest',
  Task: 'Task',
  Transport: 'Transport',
  VisionPrescription: 'VisionPrescription',
} as const;
export type RequestResourceTypes = (typeof RequestResourceTypes)[keyof typeof RequestResourceTypes];

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

/** Resource Types (http://hl7.org/fhir/ValueSet/resource-types) */
export const ResourceType = {
  Account: 'Account',
  ActivityDefinition: 'ActivityDefinition',
  ActorDefinition: 'ActorDefinition',
  AdministrableProductDefinition: 'AdministrableProductDefinition',
  AdverseEvent: 'AdverseEvent',
  AllergyIntolerance: 'AllergyIntolerance',
  Appointment: 'Appointment',
  AppointmentResponse: 'AppointmentResponse',
  ArtifactAssessment: 'ArtifactAssessment',
  AuditEvent: 'AuditEvent',
  Basic: 'Basic',
  Binary: 'Binary',
  BiologicallyDerivedProduct: 'BiologicallyDerivedProduct',
  BiologicallyDerivedProductDispense: 'BiologicallyDerivedProductDispense',
  BodyStructure: 'BodyStructure',
  Bundle: 'Bundle',
  CapabilityStatement: 'CapabilityStatement',
  CarePlan: 'CarePlan',
  CareTeam: 'CareTeam',
  ChargeItem: 'ChargeItem',
  ChargeItemDefinition: 'ChargeItemDefinition',
  Citation: 'Citation',
  Claim: 'Claim',
  ClaimResponse: 'ClaimResponse',
  ClinicalImpression: 'ClinicalImpression',
  ClinicalUseDefinition: 'ClinicalUseDefinition',
  CodeSystem: 'CodeSystem',
  Communication: 'Communication',
  CommunicationRequest: 'CommunicationRequest',
  CompartmentDefinition: 'CompartmentDefinition',
  Composition: 'Composition',
  ConceptMap: 'ConceptMap',
  Condition: 'Condition',
  ConditionDefinition: 'ConditionDefinition',
  Consent: 'Consent',
  Contract: 'Contract',
  Coverage: 'Coverage',
  CoverageEligibilityRequest: 'CoverageEligibilityRequest',
  CoverageEligibilityResponse: 'CoverageEligibilityResponse',
  DetectedIssue: 'DetectedIssue',
  Device: 'Device',
  DeviceAssociation: 'DeviceAssociation',
  DeviceDefinition: 'DeviceDefinition',
  DeviceDispense: 'DeviceDispense',
  DeviceMetric: 'DeviceMetric',
  DeviceRequest: 'DeviceRequest',
  DeviceUsage: 'DeviceUsage',
  DiagnosticReport: 'DiagnosticReport',
  DocumentReference: 'DocumentReference',
  Encounter: 'Encounter',
  EncounterHistory: 'EncounterHistory',
  Endpoint: 'Endpoint',
  EnrollmentRequest: 'EnrollmentRequest',
  EnrollmentResponse: 'EnrollmentResponse',
  EpisodeOfCare: 'EpisodeOfCare',
  EventDefinition: 'EventDefinition',
  Evidence: 'Evidence',
  EvidenceReport: 'EvidenceReport',
  EvidenceVariable: 'EvidenceVariable',
  ExampleScenario: 'ExampleScenario',
  ExplanationOfBenefit: 'ExplanationOfBenefit',
  FamilyMemberHistory: 'FamilyMemberHistory',
  Flag: 'Flag',
  FormularyItem: 'FormularyItem',
  GenomicStudy: 'GenomicStudy',
  Goal: 'Goal',
  GraphDefinition: 'GraphDefinition',
  Group: 'Group',
  GuidanceResponse: 'GuidanceResponse',
  HealthcareService: 'HealthcareService',
  ImagingSelection: 'ImagingSelection',
  ImagingStudy: 'ImagingStudy',
  Immunization: 'Immunization',
  ImmunizationEvaluation: 'ImmunizationEvaluation',
  ImmunizationRecommendation: 'ImmunizationRecommendation',
  ImplementationGuide: 'ImplementationGuide',
  Ingredient: 'Ingredient',
  InsurancePlan: 'InsurancePlan',
  InventoryItem: 'InventoryItem',
  InventoryReport: 'InventoryReport',
  Invoice: 'Invoice',
  Library: 'Library',
  Linkage: 'Linkage',
  List: 'List',
  Location: 'Location',
  ManufacturedItemDefinition: 'ManufacturedItemDefinition',
  Measure: 'Measure',
  MeasureReport: 'MeasureReport',
  Medication: 'Medication',
  MedicationAdministration: 'MedicationAdministration',
  MedicationDispense: 'MedicationDispense',
  MedicationKnowledge: 'MedicationKnowledge',
  MedicationRequest: 'MedicationRequest',
  MedicationStatement: 'MedicationStatement',
  MedicinalProductDefinition: 'MedicinalProductDefinition',
  MessageDefinition: 'MessageDefinition',
  MessageHeader: 'MessageHeader',
  MolecularSequence: 'MolecularSequence',
  NamingSystem: 'NamingSystem',
  NutritionIntake: 'NutritionIntake',
  NutritionOrder: 'NutritionOrder',
  NutritionProduct: 'NutritionProduct',
  Observation: 'Observation',
  ObservationDefinition: 'ObservationDefinition',
  OperationDefinition: 'OperationDefinition',
  OperationOutcome: 'OperationOutcome',
  Organization: 'Organization',
  OrganizationAffiliation: 'OrganizationAffiliation',
  PackagedProductDefinition: 'PackagedProductDefinition',
  Parameters: 'Parameters',
  Patient: 'Patient',
  PaymentNotice: 'PaymentNotice',
  PaymentReconciliation: 'PaymentReconciliation',
  Permission: 'Permission',
  Person: 'Person',
  PlanDefinition: 'PlanDefinition',
  Practitioner: 'Practitioner',
  PractitionerRole: 'PractitionerRole',
  Procedure: 'Procedure',
  Provenance: 'Provenance',
  Questionnaire: 'Questionnaire',
  QuestionnaireResponse: 'QuestionnaireResponse',
  RegulatedAuthorization: 'RegulatedAuthorization',
  RelatedPerson: 'RelatedPerson',
  RequestOrchestration: 'RequestOrchestration',
  Requirements: 'Requirements',
  ResearchStudy: 'ResearchStudy',
  ResearchSubject: 'ResearchSubject',
  RiskAssessment: 'RiskAssessment',
  Schedule: 'Schedule',
  SearchParameter: 'SearchParameter',
  ServiceRequest: 'ServiceRequest',
  Slot: 'Slot',
  Specimen: 'Specimen',
  SpecimenDefinition: 'SpecimenDefinition',
  StructureDefinition: 'StructureDefinition',
  StructureMap: 'StructureMap',
  Subscription: 'Subscription',
  SubscriptionStatus: 'SubscriptionStatus',
  SubscriptionTopic: 'SubscriptionTopic',
  Substance: 'Substance',
  SubstanceDefinition: 'SubstanceDefinition',
  SubstanceNucleicAcid: 'SubstanceNucleicAcid',
  SubstancePolymer: 'SubstancePolymer',
  SubstanceProtein: 'SubstanceProtein',
  SubstanceReferenceInformation: 'SubstanceReferenceInformation',
  SubstanceSourceMaterial: 'SubstanceSourceMaterial',
  SupplyDelivery: 'SupplyDelivery',
  SupplyRequest: 'SupplyRequest',
  Task: 'Task',
  TerminologyCapabilities: 'TerminologyCapabilities',
  TestPlan: 'TestPlan',
  TestReport: 'TestReport',
  TestScript: 'TestScript',
  Transport: 'Transport',
  ValueSet: 'ValueSet',
  VerificationResult: 'VerificationResult',
  VisionPrescription: 'VisionPrescription',
} as const;
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/** Resource Version Policy (http://hl7.org/fhir/ValueSet/versioning-policy) */
export const ResourceVersionPolicy = {
  NoVersion: 'no-version',
  Versioned: 'versioned',
  VersionedUpdate: 'versioned-update',
} as const;
export type ResourceVersionPolicy =
  (typeof ResourceVersionPolicy)[keyof typeof ResourceVersionPolicy];

/** Response Type (http://hl7.org/fhir/ValueSet/response-code) */
export const ResponseType = {
  Ok: 'ok',
  TransientError: 'transient-error',
  FatalError: 'fatal-error',
} as const;
export type ResponseType = (typeof ResponseType)[keyof typeof ResponseType];

/** Restful Capability Mode (http://hl7.org/fhir/ValueSet/restful-capability-mode) */
export const RestfulCapabilityMode = { Client: 'client', Server: 'server' } as const;
export type RestfulCapabilityMode =
  (typeof RestfulCapabilityMode)[keyof typeof RestfulCapabilityMode];

/** Search Comparator (http://hl7.org/fhir/ValueSet/search-comparator) */
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

/** Search Entry Mode (http://hl7.org/fhir/ValueSet/search-entry-mode) */
export const SearchEntryMode = { Match: 'match', Include: 'include', Outcome: 'outcome' } as const;
export type SearchEntryMode = (typeof SearchEntryMode)[keyof typeof SearchEntryMode];

/** Search Modifier Code (http://hl7.org/fhir/ValueSet/search-modifier-code) */
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
  OfType: 'of-type',
  CodeText: 'code-text',
  TextAdvanced: 'text-advanced',
  Iterate: 'iterate',
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

/** Search Processing Mode Type (http://hl7.org/fhir/ValueSet/search-processingmode) */
export const SearchProcessingModeType = {
  Normal: 'normal',
  Phonetic: 'phonetic',
  Other: 'other',
} as const;
export type SearchProcessingModeType =
  (typeof SearchProcessingModeType)[keyof typeof SearchProcessingModeType];

/** sequence Type (http://hl7.org/fhir/ValueSet/sequence-type) */
export const SequenceType = { Aa: 'aa', Dna: 'dna', Rna: 'rna' } as const;
export type SequenceType = (typeof SequenceType)[keyof typeof SequenceType];

/** SlicingRules (http://hl7.org/fhir/ValueSet/resource-slicing-rules) */
export const SlicingRules = { Closed: 'closed', Open: 'open', OpenAtEnd: 'openAtEnd' } as const;
export type SlicingRules = (typeof SlicingRules)[keyof typeof SlicingRules];

/** Slot Status (http://hl7.org/fhir/ValueSet/slotstatus) */
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

/** S P D X License (http://hl7.org/fhir/ValueSet/spdx-license) */
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

/** Specimen Combined (http://hl7.org/fhir/ValueSet/specimen-combined) */
export const SpecimenCombined = { Grouped: 'grouped', Pooled: 'pooled' } as const;
export type SpecimenCombined = (typeof SpecimenCombined)[keyof typeof SpecimenCombined];

/** Specimen Contained Preference (http://hl7.org/fhir/ValueSet/specimen-contained-preference) */
export const SpecimenContainedPreference = {
  Preferred: 'preferred',
  Alternate: 'alternate',
} as const;
export type SpecimenContainedPreference =
  (typeof SpecimenContainedPreference)[keyof typeof SpecimenContainedPreference];

/** Specimen Status (http://hl7.org/fhir/ValueSet/specimen-status) */
export const SpecimenStatus = {
  Available: 'available',
  Unavailable: 'unavailable',
  Unsatisfactory: 'unsatisfactory',
  EnteredInError: 'entered-in-error',
} as const;
export type SpecimenStatus = (typeof SpecimenStatus)[keyof typeof SpecimenStatus];

/** strand Type (http://hl7.org/fhir/ValueSet/strand-type) */
export const StrandType = { Watson: 'watson', Crick: 'crick' } as const;
export type StrandType = (typeof StrandType)[keyof typeof StrandType];

/** Structure Definition Kind (http://hl7.org/fhir/ValueSet/structure-definition-kind) */
export const StructureDefinitionKind = {
  PrimitiveType: 'primitive-type',
  ComplexType: 'complex-type',
  Resource: 'resource',
  Logical: 'logical',
} as const;
export type StructureDefinitionKind =
  (typeof StructureDefinitionKind)[keyof typeof StructureDefinitionKind];

/** Structure Map Group Type Mode (http://hl7.org/fhir/ValueSet/map-group-type-mode) */
export const StructureMapGroupTypeMode = {
  Types: 'types',
  TypeAndTypes: 'type-and-types',
} as const;
export type StructureMapGroupTypeMode =
  (typeof StructureMapGroupTypeMode)[keyof typeof StructureMapGroupTypeMode];

/** Structure Map Input Mode (http://hl7.org/fhir/ValueSet/map-input-mode) */
export const StructureMapInputMode = { Source: 'source', Target: 'target' } as const;
export type StructureMapInputMode =
  (typeof StructureMapInputMode)[keyof typeof StructureMapInputMode];

/** Structure Map Model Mode (http://hl7.org/fhir/ValueSet/map-model-mode) */
export const StructureMapModelMode = {
  Source: 'source',
  Queried: 'queried',
  Target: 'target',
  Produced: 'produced',
} as const;
export type StructureMapModelMode =
  (typeof StructureMapModelMode)[keyof typeof StructureMapModelMode];

/** Structure Map Source List Mode (http://hl7.org/fhir/ValueSet/map-source-list-mode) */
export const StructureMapSourceListMode = {
  First: 'first',
  NotFirst: 'not_first',
  Last: 'last',
  NotLast: 'not_last',
  OnlyOne: 'only_one',
} as const;
export type StructureMapSourceListMode =
  (typeof StructureMapSourceListMode)[keyof typeof StructureMapSourceListMode];

/** Structure Map Target List Mode (http://hl7.org/fhir/ValueSet/map-target-list-mode) */
export const StructureMapTargetListMode = {
  First: 'first',
  Share: 'share',
  Last: 'last',
  Single: 'single',
} as const;
export type StructureMapTargetListMode =
  (typeof StructureMapTargetListMode)[keyof typeof StructureMapTargetListMode];

/** Structure Map Transform (http://hl7.org/fhir/ValueSet/map-transform) */
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

/** Submit Data Update Type (http://hl7.org/fhir/ValueSet/submit-data-update-type) */
export const SubmitDataUpdateType = { Incremental: 'incremental', Snapshot: 'snapshot' } as const;
export type SubmitDataUpdateType = (typeof SubmitDataUpdateType)[keyof typeof SubmitDataUpdateType];

/** Subscription Notification Type (http://hl7.org/fhir/ValueSet/subscription-notification-type) */
export const SubscriptionNotificationType = {
  Handshake: 'handshake',
  Heartbeat: 'heartbeat',
  EventNotification: 'event-notification',
  QueryStatus: 'query-status',
  QueryEvent: 'query-event',
} as const;
export type SubscriptionNotificationType =
  (typeof SubscriptionNotificationType)[keyof typeof SubscriptionNotificationType];

/** Subscription Payload Content (http://hl7.org/fhir/ValueSet/subscription-payload-content) */
export const SubscriptionPayloadContent = {
  Empty: 'empty',
  IdOnly: 'id-only',
  FullResource: 'full-resource',
} as const;
export type SubscriptionPayloadContent =
  (typeof SubscriptionPayloadContent)[keyof typeof SubscriptionPayloadContent];

/** Subscription Status (http://hl7.org/fhir/ValueSet/subscription-status) */
export const SubscriptionStatusCodes = {
  Requested: 'requested',
  Active: 'active',
  Error: 'error',
  Off: 'off',
  EnteredInError: 'entered-in-error',
} as const;
export type SubscriptionStatusCodes =
  (typeof SubscriptionStatusCodes)[keyof typeof SubscriptionStatusCodes];

/** Supply Delivery Status (http://hl7.org/fhir/ValueSet/supplydelivery-status) */
export const SupplyDeliveryStatus = {
  InProgress: 'in-progress',
  Completed: 'completed',
  Abandoned: 'abandoned',
  EnteredInError: 'entered-in-error',
} as const;
export type SupplyDeliveryStatus = (typeof SupplyDeliveryStatus)[keyof typeof SupplyDeliveryStatus];

/** Supply Request Status (http://hl7.org/fhir/ValueSet/supplyrequest-status) */
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

/** System Restful Interaction (http://hl7.org/fhir/ValueSet/system-restful-interaction) */
export const SystemRestfulInteraction = {
  Transaction: 'transaction',
  Batch: 'batch',
  SearchSystem: 'search-system',
  HistorySystem: 'history-system',
} as const;
export type SystemRestfulInteraction =
  (typeof SystemRestfulInteraction)[keyof typeof SystemRestfulInteraction];

/** Task Intent (http://hl7.org/fhir/ValueSet/task-intent) */
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

/** Task Status (http://hl7.org/fhir/ValueSet/task-status) */
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

/** Test Report Action Result (http://hl7.org/fhir/ValueSet/report-action-result-codes) */
export const TestReportActionResult = {
  Pass: 'pass',
  Skip: 'skip',
  Fail: 'fail',
  Warning: 'warning',
  Error: 'error',
} as const;
export type TestReportActionResult =
  (typeof TestReportActionResult)[keyof typeof TestReportActionResult];

/** Test Report Participant Type (http://hl7.org/fhir/ValueSet/report-participant-type) */
export const TestReportParticipantType = {
  TestEngine: 'test-engine',
  Client: 'client',
  Server: 'server',
} as const;
export type TestReportParticipantType =
  (typeof TestReportParticipantType)[keyof typeof TestReportParticipantType];

/** Test Report Result (http://hl7.org/fhir/ValueSet/report-result-codes) */
export const TestReportResult = { Pass: 'pass', Fail: 'fail', Pending: 'pending' } as const;
export type TestReportResult = (typeof TestReportResult)[keyof typeof TestReportResult];

/** Test Report Status (http://hl7.org/fhir/ValueSet/report-status-codes) */
export const TestReportStatus = {
  Completed: 'completed',
  InProgress: 'in-progress',
  Waiting: 'waiting',
  Stopped: 'stopped',
  EnteredInError: 'entered-in-error',
} as const;
export type TestReportStatus = (typeof TestReportStatus)[keyof typeof TestReportStatus];

/** Test Script Request Method Code (http://hl7.org/fhir/ValueSet/http-operations) */
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

/** Transport Intent (http://hl7.org/fhir/ValueSet/transport-intent) */
export const TransportIntent = {
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
export type TransportIntent = (typeof TransportIntent)[keyof typeof TransportIntent];

/** Transport Status (http://hl7.org/fhir/ValueSet/transport-status) */
export const TransportStatus = {
  InProgress: 'in-progress',
  Completed: 'completed',
  Abandoned: 'abandoned',
  Cancelled: 'cancelled',
  Planned: 'planned',
  EnteredInError: 'entered-in-error',
} as const;
export type TransportStatus = (typeof TransportStatus)[keyof typeof TransportStatus];

/** triggered Bytype (http://hl7.org/fhir/ValueSet/observation-triggeredbytype) */
export const TriggeredBytype = { Reflex: 'reflex', Repeat: 'repeat', ReRun: 're-run' } as const;
export type TriggeredBytype = (typeof TriggeredBytype)[keyof typeof TriggeredBytype];

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

/** Type Derivation Rule (http://hl7.org/fhir/ValueSet/type-derivation-rule) */
export const TypeDerivationRule = {
  Specialization: 'specialization',
  Constraint: 'constraint',
} as const;
export type TypeDerivationRule = (typeof TypeDerivationRule)[keyof typeof TypeDerivationRule];

/** Type Restful Interaction (http://hl7.org/fhir/ValueSet/type-restful-interaction) */
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

/** UDI Entry Type (http://hl7.org/fhir/ValueSet/udi-entry-type) */
export const UDIEntryType = {
  Barcode: 'barcode',
  Rfid: 'rfid',
  Manual: 'manual',
  Card: 'card',
  SelfReported: 'self-reported',
  ElectronicTransmission: 'electronic-transmission',
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

/** Value Filter Comparator (http://hl7.org/fhir/ValueSet/value-filter-comparator) */
export const ValueFilterComparator = {
  Eq: 'eq',
  Gt: 'gt',
  Lt: 'lt',
  Ge: 'ge',
  Le: 'le',
  Sa: 'sa',
  Eb: 'eb',
} as const;
export type ValueFilterComparator =
  (typeof ValueFilterComparator)[keyof typeof ValueFilterComparator];

/** Verification Result status (http://hl7.org/fhir/ValueSet/verificationresult-status) */
export const VerificationResultStatus = {
  Attested: 'attested',
  Validated: 'validated',
  InProcess: 'in-process',
  ReqRevalid: 'req-revalid',
  ValFail: 'val-fail',
  RevalFail: 'reval-fail',
  EnteredInError: 'entered-in-error',
} as const;
export type VerificationResultStatus =
  (typeof VerificationResultStatus)[keyof typeof VerificationResultStatus];

/** Version Independent Resource Types (All) (http://hl7.org/fhir/ValueSet/version-independent-all-resource-types) */
export const VersionIndependentResourceTypesAll = {
  Account: 'Account',
  ActivityDefinition: 'ActivityDefinition',
  ActorDefinition: 'ActorDefinition',
  AdministrableProductDefinition: 'AdministrableProductDefinition',
  AdverseEvent: 'AdverseEvent',
  AllergyIntolerance: 'AllergyIntolerance',
  Appointment: 'Appointment',
  AppointmentResponse: 'AppointmentResponse',
  ArtifactAssessment: 'ArtifactAssessment',
  AuditEvent: 'AuditEvent',
  Basic: 'Basic',
  Binary: 'Binary',
  BiologicallyDerivedProduct: 'BiologicallyDerivedProduct',
  BiologicallyDerivedProductDispense: 'BiologicallyDerivedProductDispense',
  BodyStructure: 'BodyStructure',
  Bundle: 'Bundle',
  CanonicalResource: 'CanonicalResource',
  CapabilityStatement: 'CapabilityStatement',
  CarePlan: 'CarePlan',
  CareTeam: 'CareTeam',
  ChargeItem: 'ChargeItem',
  ChargeItemDefinition: 'ChargeItemDefinition',
  Citation: 'Citation',
  Claim: 'Claim',
  ClaimResponse: 'ClaimResponse',
  ClinicalImpression: 'ClinicalImpression',
  ClinicalUseDefinition: 'ClinicalUseDefinition',
  CodeSystem: 'CodeSystem',
  Communication: 'Communication',
  CommunicationRequest: 'CommunicationRequest',
  CompartmentDefinition: 'CompartmentDefinition',
  Composition: 'Composition',
  ConceptMap: 'ConceptMap',
  Condition: 'Condition',
  ConditionDefinition: 'ConditionDefinition',
  Consent: 'Consent',
  Contract: 'Contract',
  Coverage: 'Coverage',
  CoverageEligibilityRequest: 'CoverageEligibilityRequest',
  CoverageEligibilityResponse: 'CoverageEligibilityResponse',
  DetectedIssue: 'DetectedIssue',
  Device: 'Device',
  DeviceAssociation: 'DeviceAssociation',
  DeviceDefinition: 'DeviceDefinition',
  DeviceDispense: 'DeviceDispense',
  DeviceMetric: 'DeviceMetric',
  DeviceRequest: 'DeviceRequest',
  DeviceUsage: 'DeviceUsage',
  DiagnosticReport: 'DiagnosticReport',
  DocumentReference: 'DocumentReference',
  DomainResource: 'DomainResource',
  Encounter: 'Encounter',
  EncounterHistory: 'EncounterHistory',
  Endpoint: 'Endpoint',
  EnrollmentRequest: 'EnrollmentRequest',
  EnrollmentResponse: 'EnrollmentResponse',
  EpisodeOfCare: 'EpisodeOfCare',
  EventDefinition: 'EventDefinition',
  Evidence: 'Evidence',
  EvidenceReport: 'EvidenceReport',
  EvidenceVariable: 'EvidenceVariable',
  ExampleScenario: 'ExampleScenario',
  ExplanationOfBenefit: 'ExplanationOfBenefit',
  FamilyMemberHistory: 'FamilyMemberHistory',
  Flag: 'Flag',
  FormularyItem: 'FormularyItem',
  GenomicStudy: 'GenomicStudy',
  Goal: 'Goal',
  GraphDefinition: 'GraphDefinition',
  Group: 'Group',
  GuidanceResponse: 'GuidanceResponse',
  HealthcareService: 'HealthcareService',
  ImagingSelection: 'ImagingSelection',
  ImagingStudy: 'ImagingStudy',
  Immunization: 'Immunization',
  ImmunizationEvaluation: 'ImmunizationEvaluation',
  ImmunizationRecommendation: 'ImmunizationRecommendation',
  ImplementationGuide: 'ImplementationGuide',
  Ingredient: 'Ingredient',
  InsurancePlan: 'InsurancePlan',
  InventoryItem: 'InventoryItem',
  InventoryReport: 'InventoryReport',
  Invoice: 'Invoice',
  Library: 'Library',
  Linkage: 'Linkage',
  List: 'List',
  Location: 'Location',
  ManufacturedItemDefinition: 'ManufacturedItemDefinition',
  Measure: 'Measure',
  MeasureReport: 'MeasureReport',
  Medication: 'Medication',
  MedicationAdministration: 'MedicationAdministration',
  MedicationDispense: 'MedicationDispense',
  MedicationKnowledge: 'MedicationKnowledge',
  MedicationRequest: 'MedicationRequest',
  MedicationStatement: 'MedicationStatement',
  MedicinalProductDefinition: 'MedicinalProductDefinition',
  MessageDefinition: 'MessageDefinition',
  MessageHeader: 'MessageHeader',
  MetadataResource: 'MetadataResource',
  MolecularSequence: 'MolecularSequence',
  NamingSystem: 'NamingSystem',
  NutritionIntake: 'NutritionIntake',
  NutritionOrder: 'NutritionOrder',
  NutritionProduct: 'NutritionProduct',
  Observation: 'Observation',
  ObservationDefinition: 'ObservationDefinition',
  OperationDefinition: 'OperationDefinition',
  OperationOutcome: 'OperationOutcome',
  Organization: 'Organization',
  OrganizationAffiliation: 'OrganizationAffiliation',
  PackagedProductDefinition: 'PackagedProductDefinition',
  Parameters: 'Parameters',
  Patient: 'Patient',
  PaymentNotice: 'PaymentNotice',
  PaymentReconciliation: 'PaymentReconciliation',
  Permission: 'Permission',
  Person: 'Person',
  PlanDefinition: 'PlanDefinition',
  Practitioner: 'Practitioner',
  PractitionerRole: 'PractitionerRole',
  Procedure: 'Procedure',
  Provenance: 'Provenance',
  Questionnaire: 'Questionnaire',
  QuestionnaireResponse: 'QuestionnaireResponse',
  RegulatedAuthorization: 'RegulatedAuthorization',
  RelatedPerson: 'RelatedPerson',
  RequestOrchestration: 'RequestOrchestration',
  Requirements: 'Requirements',
  ResearchStudy: 'ResearchStudy',
  ResearchSubject: 'ResearchSubject',
  Resource: 'Resource',
  RiskAssessment: 'RiskAssessment',
  Schedule: 'Schedule',
  SearchParameter: 'SearchParameter',
  ServiceRequest: 'ServiceRequest',
  Slot: 'Slot',
  Specimen: 'Specimen',
  SpecimenDefinition: 'SpecimenDefinition',
  StructureDefinition: 'StructureDefinition',
  StructureMap: 'StructureMap',
  Subscription: 'Subscription',
  SubscriptionStatus: 'SubscriptionStatus',
  SubscriptionTopic: 'SubscriptionTopic',
  Substance: 'Substance',
  SubstanceDefinition: 'SubstanceDefinition',
  SubstanceNucleicAcid: 'SubstanceNucleicAcid',
  SubstancePolymer: 'SubstancePolymer',
  SubstanceProtein: 'SubstanceProtein',
  SubstanceReferenceInformation: 'SubstanceReferenceInformation',
  SubstanceSourceMaterial: 'SubstanceSourceMaterial',
  SupplyDelivery: 'SupplyDelivery',
  SupplyRequest: 'SupplyRequest',
  Task: 'Task',
  TerminologyCapabilities: 'TerminologyCapabilities',
  TestPlan: 'TestPlan',
  TestReport: 'TestReport',
  TestScript: 'TestScript',
  Transport: 'Transport',
  ValueSet: 'ValueSet',
  VerificationResult: 'VerificationResult',
  VisionPrescription: 'VisionPrescription',
  BodySite: 'BodySite',
  CatalogEntry: 'CatalogEntry',
  Conformance: 'Conformance',
  DataElement: 'DataElement',
  DeviceComponent: 'DeviceComponent',
  DeviceUseRequest: 'DeviceUseRequest',
  DeviceUseStatement: 'DeviceUseStatement',
  DiagnosticOrder: 'DiagnosticOrder',
  DocumentManifest: 'DocumentManifest',
  EffectEvidenceSynthesis: 'EffectEvidenceSynthesis',
  EligibilityRequest: 'EligibilityRequest',
  EligibilityResponse: 'EligibilityResponse',
  ExpansionProfile: 'ExpansionProfile',
  ImagingManifest: 'ImagingManifest',
  ImagingObjectSelection: 'ImagingObjectSelection',
  Media: 'Media',
  MedicationOrder: 'MedicationOrder',
  MedicationUsage: 'MedicationUsage',
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
  Order: 'Order',
  OrderResponse: 'OrderResponse',
  ProcedureRequest: 'ProcedureRequest',
  ProcessRequest: 'ProcessRequest',
  ProcessResponse: 'ProcessResponse',
  ReferralRequest: 'ReferralRequest',
  RequestGroup: 'RequestGroup',
  ResearchDefinition: 'ResearchDefinition',
  ResearchElementDefinition: 'ResearchElementDefinition',
  RiskEvidenceSynthesis: 'RiskEvidenceSynthesis',
  Sequence: 'Sequence',
  ServiceDefinition: 'ServiceDefinition',
  SubstanceSpecification: 'SubstanceSpecification',
} as const;
export type VersionIndependentResourceTypesAll =
  (typeof VersionIndependentResourceTypesAll)[keyof typeof VersionIndependentResourceTypesAll];

/** Vision Base (http://hl7.org/fhir/ValueSet/vision-base-codes) */
export const VisionBase = { Up: 'up', Down: 'down', In: 'in', Out: 'out' } as const;
export type VisionBase = (typeof VisionBase)[keyof typeof VisionBase];

/** Vision Eyes (http://hl7.org/fhir/ValueSet/vision-eye-codes) */
export const VisionEyes = { Right: 'right', Left: 'left' } as const;
export type VisionEyes = (typeof VisionEyes)[keyof typeof VisionEyes];
