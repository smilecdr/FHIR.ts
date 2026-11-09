/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { Address } from './address';
import { Attachment } from './attachment';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { Coding } from './coding';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Money } from './money';
import { Period } from './period';
import { Quantity } from './quantity';
import { Reference } from './reference';

/**
 * This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 */
export class ExplanationOfBenefit extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'status',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ExplanationOfBenefitStatus,
        },
      ],
    },
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'subType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'subType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'use',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'use', typeCode: 'code', allowedCodes: valueSetCodes.Use }],
    },
    {
      elementName: 'patient',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'patient', typeCode: 'Reference', targetResourceTypes: ['Patient'] }],
    },
    {
      elementName: 'billablePeriod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'billablePeriod', typeCode: 'Period' }],
    },
    {
      elementName: 'created',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'created', typeCode: 'dateTime' }],
    },
    {
      elementName: 'enterer',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'enterer',
          typeCode: 'Reference',
          targetResourceTypes: ['Practitioner', 'PractitionerRole'],
        },
      ],
    },
    {
      elementName: 'insurer',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'insurer', typeCode: 'Reference', targetResourceTypes: ['Organization'] }],
    },
    {
      elementName: 'provider',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'provider',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Practitioner', 'PractitionerRole'],
        },
      ],
    },
    {
      elementName: 'priority',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'priority', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'fundsReserveRequested',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'fundsReserveRequested', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'fundsReserve',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'fundsReserve', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'related',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'related', typeCode: 'ExplanationOfBenefitRelated' }],
    },
    {
      elementName: 'prescription',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'prescription',
          typeCode: 'Reference',
          targetResourceTypes: ['MedicationRequest', 'VisionPrescription'],
        },
      ],
    },
    {
      elementName: 'originalPrescription',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'originalPrescription',
          typeCode: 'Reference',
          targetResourceTypes: ['MedicationRequest'],
        },
      ],
    },
    {
      elementName: 'payee',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'payee', typeCode: 'ExplanationOfBenefitPayee' }],
    },
    {
      elementName: 'referral',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'referral', typeCode: 'Reference', targetResourceTypes: ['ServiceRequest'] },
      ],
    },
    {
      elementName: 'facility',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'facility', typeCode: 'Reference', targetResourceTypes: ['Location'] }],
    },
    {
      elementName: 'claim',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'claim', typeCode: 'Reference', targetResourceTypes: ['Claim'] }],
    },
    {
      elementName: 'claimResponse',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'claimResponse', typeCode: 'Reference', targetResourceTypes: ['ClaimResponse'] },
      ],
    },
    {
      elementName: 'outcome',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'outcome', typeCode: 'code', allowedCodes: valueSetCodes.ClaimProcessingCodes },
      ],
    },
    {
      elementName: 'disposition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'disposition', typeCode: 'string' }],
    },
    {
      elementName: 'preAuthRef',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'preAuthRef', typeCode: 'string' }],
    },
    {
      elementName: 'preAuthRefPeriod',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'preAuthRefPeriod', typeCode: 'Period' }],
    },
    {
      elementName: 'careTeam',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'careTeam', typeCode: 'ExplanationOfBenefitCareTeam' }],
    },
    {
      elementName: 'supportingInfo',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'supportingInfo', typeCode: 'ExplanationOfBenefitSupportingInfo' }],
    },
    {
      elementName: 'diagnosis',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'diagnosis', typeCode: 'ExplanationOfBenefitDiagnosis' }],
    },
    {
      elementName: 'procedure',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'procedure', typeCode: 'ExplanationOfBenefitProcedure' }],
    },
    {
      elementName: 'precedence',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'precedence', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'insurance',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'insurance', typeCode: 'ExplanationOfBenefitInsurance' }],
    },
    {
      elementName: 'accident',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'accident', typeCode: 'ExplanationOfBenefitAccident' }],
    },
    {
      elementName: 'item',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'item', typeCode: 'ExplanationOfBenefitItem' }],
    },
    {
      elementName: 'addItem',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'addItem', typeCode: 'ExplanationOfBenefitAddItem' }],
    },
    {
      elementName: 'adjudication',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'adjudication', typeCode: 'ExplanationOfBenefitItemAdjudication' }],
    },
    {
      elementName: 'total',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'total', typeCode: 'ExplanationOfBenefitTotal' }],
    },
    {
      elementName: 'payment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'payment', typeCode: 'ExplanationOfBenefitPayment' }],
    },
    {
      elementName: 'formCode',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'formCode', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'form',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'form', typeCode: 'Attachment' }],
    },
    {
      elementName: 'processNote',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'processNote', typeCode: 'ExplanationOfBenefitProcessNote' }],
    },
    {
      elementName: 'benefitPeriod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'benefitPeriod', typeCode: 'Period' }],
    },
    {
      elementName: 'benefitBalance',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'benefitBalance', typeCode: 'ExplanationOfBenefitBenefitBalance' }],
    },
  ];

  readonly resourceType = 'ExplanationOfBenefit';

  /** Business Identifier for the resource (0..*) */
  identifier?: Identifier[];

  /** active | cancelled | draft | entered-in-error (1..1) */
  status?: valueSetCodes.ExplanationOfBenefitStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Category or discipline (1..1) */
  type?: CodeableConcept;

  /** More granular claim type (0..1) */
  subType?: CodeableConcept;

  /** claim | preauthorization | predetermination (1..1) */
  use?: valueSetCodes.Use;
  /** Id and extensions of the primitive `use`. */
  _use?: Element;

  /** The recipient of the products and services (1..1) */
  patient?: Reference;

  /** Relevant time frame for the claim (0..1) */
  billablePeriod?: Period;

  /** Response creation date (1..1) */
  created?: string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;

  /** Author of the claim (0..1) */
  enterer?: Reference;

  /** Party responsible for reimbursement (1..1) */
  insurer?: Reference;

  /** Party responsible for the claim (1..1) */
  provider?: Reference;

  /** Desired processing urgency (0..1) */
  priority?: CodeableConcept;

  /** For whom to reserve funds (0..1) */
  fundsReserveRequested?: CodeableConcept;

  /** Funds reserved status (0..1) */
  fundsReserve?: CodeableConcept;

  /** Prior or corollary claims (0..*) */
  related?: ExplanationOfBenefitRelated[];

  /** Prescription authorizing services or products (0..1) */
  prescription?: Reference;

  /** Original prescription if superceded by fulfiller (0..1) */
  originalPrescription?: Reference;

  /** Recipient of benefits payable (0..1) */
  payee?: ExplanationOfBenefitPayee;

  /** Treatment Referral (0..1) */
  referral?: Reference;

  /** Servicing Facility (0..1) */
  facility?: Reference;

  /** Claim reference (0..1) */
  claim?: Reference;

  /** Claim response reference (0..1) */
  claimResponse?: Reference;

  /** queued | complete | error | partial (1..1) */
  outcome?: valueSetCodes.ClaimProcessingCodes;
  /** Id and extensions of the primitive `outcome`. */
  _outcome?: Element;

  /** Disposition Message (0..1) */
  disposition?: string;
  /** Id and extensions of the primitive `disposition`. */
  _disposition?: Element;

  /** Preauthorization reference (0..*) */
  preAuthRef?: string[];
  /** Id and extensions of the primitive `preAuthRef`. */
  _preAuthRef?: (Element | null)[];

  /** Preauthorization in-effect period (0..*) */
  preAuthRefPeriod?: Period[];

  /** Care Team members (0..*) */
  careTeam?: ExplanationOfBenefitCareTeam[];

  /** Supporting information (0..*) */
  supportingInfo?: ExplanationOfBenefitSupportingInfo[];

  /** Pertinent diagnosis information (0..*) */
  diagnosis?: ExplanationOfBenefitDiagnosis[];

  /** Clinical procedures performed (0..*) */
  procedure?: ExplanationOfBenefitProcedure[];

  /** Precedence (primary, secondary, etc.) (0..1) */
  precedence?: number;
  /** Id and extensions of the primitive `precedence`. */
  _precedence?: Element;

  /** Patient insurance information (1..*) */
  insurance?: ExplanationOfBenefitInsurance[];

  /** Details of the event (0..1) */
  accident?: ExplanationOfBenefitAccident;

  /** Product or service provided (0..*) */
  item?: ExplanationOfBenefitItem[];

  /** Insurer added line items (0..*) */
  addItem?: ExplanationOfBenefitAddItem[];

  /** Header-level adjudication (0..*) */
  adjudication?: ExplanationOfBenefitItemAdjudication[];

  /** Adjudication totals (0..*) */
  total?: ExplanationOfBenefitTotal[];

  /** Payment Details (0..1) */
  payment?: ExplanationOfBenefitPayment;

  /** Printed form identifier (0..1) */
  formCode?: CodeableConcept;

  /** Printed reference or actual form (0..1) */
  form?: Attachment;

  /** Note concerning adjudication (0..*) */
  processNote?: ExplanationOfBenefitProcessNote[];

  /** When the benefits are applicable (0..1) */
  benefitPeriod?: Period;

  /** Balance by Benefit Category (0..*) */
  benefitBalance?: ExplanationOfBenefitBenefitBalance[];

  override fhirType(): string {
    return 'ExplanationOfBenefit';
  }

  /** FHIR JSON for this ExplanationOfBenefit, typed as the plain `ExplanationOfBenefit` data type. */
  override toJSON(): plainTypes.ExplanationOfBenefit {
    return this.serialize() as plainTypes.ExplanationOfBenefit;
  }

  /** Business Identifier for the resource (0..*) Never undefined; an empty list is created when absent. */
  getIdentifier(): Identifier[] {
    if (this.identifier === undefined) {
      this.identifier = [];
    }
    return this.identifier;
  }

  setIdentifier(identifier: Identifier[] | undefined): this {
    return this.setFieldValue('identifier', identifier);
  }

  hasIdentifier(): boolean {
    return this.hasFieldValue('identifier');
  }

  /** Appends a new, empty Identifier to `identifier` and returns it so it can be filled in. */
  addIdentifier(): Identifier;
  /** Appends the given Identifier to `identifier` and returns this object for chaining. */
  addIdentifier(identifier: Identifier): this;
  addIdentifier(identifier?: Identifier): Identifier | this {
    if (identifier !== undefined) {
      return this.addFieldValue('identifier', identifier);
    }
    const createdIdentifier = new Identifier();
    this.addFieldValue('identifier', createdIdentifier);
    return createdIdentifier;
  }

  /** The first Identifier of `identifier`. One is added when the list is empty. */
  getIdentifierFirstRep(): Identifier {
    const firstIdentifier = this.getIdentifier()[0];
    return firstIdentifier === undefined ? this.addIdentifier() : firstIdentifier;
  }

  /** active | cancelled | draft | entered-in-error (1..1) */
  getStatus(): valueSetCodes.ExplanationOfBenefitStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.ExplanationOfBenefitStatus | undefined): this {
    return this.setFieldValue('status', status);
  }

  hasStatus(): boolean {
    return this.hasFieldValue('status');
  }

  /** The element carrying the id and extensions of `status`. Created when absent. */
  getStatusElement(): Element {
    if (this._status === undefined) {
      this._status = new Element();
    }
    return this._status;
  }

  setStatusElement(statusElement: Element | undefined): this {
    this._status = statusElement;
    return this;
  }

  /** Category or discipline (1..1) Created when absent. */
  getType(): CodeableConcept {
    if (this.type === undefined) {
      this.type = new CodeableConcept();
    }
    return this.type;
  }

  setType(type: CodeableConcept | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** More granular claim type (0..1) Created when absent. */
  getSubType(): CodeableConcept {
    if (this.subType === undefined) {
      this.subType = new CodeableConcept();
    }
    return this.subType;
  }

  setSubType(subType: CodeableConcept | undefined): this {
    return this.setFieldValue('subType', subType);
  }

  hasSubType(): boolean {
    return this.hasFieldValue('subType');
  }

  /** claim | preauthorization | predetermination (1..1) */
  getUse(): valueSetCodes.Use | undefined {
    return this.use;
  }

  /** Sets `use`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setUse(use: valueSetCodes.Use | undefined): this {
    return this.setFieldValue('use', use);
  }

  hasUse(): boolean {
    return this.hasFieldValue('use');
  }

  /** The element carrying the id and extensions of `use`. Created when absent. */
  getUseElement(): Element {
    if (this._use === undefined) {
      this._use = new Element();
    }
    return this._use;
  }

  setUseElement(useElement: Element | undefined): this {
    this._use = useElement;
    return this;
  }

  /** The recipient of the products and services (1..1) Created when absent. */
  getPatient(): Reference {
    if (this.patient === undefined) {
      this.patient = new Reference();
    }
    return this.patient;
  }

  setPatient(patient: Reference | undefined): this {
    return this.setFieldValue('patient', patient);
  }

  hasPatient(): boolean {
    return this.hasFieldValue('patient');
  }

  /** Relevant time frame for the claim (0..1) Created when absent. */
  getBillablePeriod(): Period {
    if (this.billablePeriod === undefined) {
      this.billablePeriod = new Period();
    }
    return this.billablePeriod;
  }

  setBillablePeriod(billablePeriod: Period | undefined): this {
    return this.setFieldValue('billablePeriod', billablePeriod);
  }

  hasBillablePeriod(): boolean {
    return this.hasFieldValue('billablePeriod');
  }

  /** Response creation date (1..1) */
  getCreated(): string | undefined {
    return this.created;
  }

  /** Sets `created`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setCreated(created: string | undefined): this {
    return this.setFieldValue('created', created);
  }

  hasCreated(): boolean {
    return this.hasFieldValue('created');
  }

  /** The element carrying the id and extensions of `created`. Created when absent. */
  getCreatedElement(): Element {
    if (this._created === undefined) {
      this._created = new Element();
    }
    return this._created;
  }

  setCreatedElement(createdElement: Element | undefined): this {
    this._created = createdElement;
    return this;
  }

  /** Author of the claim (0..1) Created when absent. */
  getEnterer(): Reference {
    if (this.enterer === undefined) {
      this.enterer = new Reference();
    }
    return this.enterer;
  }

  setEnterer(enterer: Reference | undefined): this {
    return this.setFieldValue('enterer', enterer);
  }

  hasEnterer(): boolean {
    return this.hasFieldValue('enterer');
  }

  /** Party responsible for reimbursement (1..1) Created when absent. */
  getInsurer(): Reference {
    if (this.insurer === undefined) {
      this.insurer = new Reference();
    }
    return this.insurer;
  }

  setInsurer(insurer: Reference | undefined): this {
    return this.setFieldValue('insurer', insurer);
  }

  hasInsurer(): boolean {
    return this.hasFieldValue('insurer');
  }

  /** Party responsible for the claim (1..1) Created when absent. */
  getProvider(): Reference {
    if (this.provider === undefined) {
      this.provider = new Reference();
    }
    return this.provider;
  }

  setProvider(provider: Reference | undefined): this {
    return this.setFieldValue('provider', provider);
  }

  hasProvider(): boolean {
    return this.hasFieldValue('provider');
  }

  /** Desired processing urgency (0..1) Created when absent. */
  getPriority(): CodeableConcept {
    if (this.priority === undefined) {
      this.priority = new CodeableConcept();
    }
    return this.priority;
  }

  setPriority(priority: CodeableConcept | undefined): this {
    return this.setFieldValue('priority', priority);
  }

  hasPriority(): boolean {
    return this.hasFieldValue('priority');
  }

  /** For whom to reserve funds (0..1) Created when absent. */
  getFundsReserveRequested(): CodeableConcept {
    if (this.fundsReserveRequested === undefined) {
      this.fundsReserveRequested = new CodeableConcept();
    }
    return this.fundsReserveRequested;
  }

  setFundsReserveRequested(fundsReserveRequested: CodeableConcept | undefined): this {
    return this.setFieldValue('fundsReserveRequested', fundsReserveRequested);
  }

  hasFundsReserveRequested(): boolean {
    return this.hasFieldValue('fundsReserveRequested');
  }

  /** Funds reserved status (0..1) Created when absent. */
  getFundsReserve(): CodeableConcept {
    if (this.fundsReserve === undefined) {
      this.fundsReserve = new CodeableConcept();
    }
    return this.fundsReserve;
  }

  setFundsReserve(fundsReserve: CodeableConcept | undefined): this {
    return this.setFieldValue('fundsReserve', fundsReserve);
  }

  hasFundsReserve(): boolean {
    return this.hasFieldValue('fundsReserve');
  }

  /** Prior or corollary claims (0..*) Never undefined; an empty list is created when absent. */
  getRelated(): ExplanationOfBenefitRelated[] {
    if (this.related === undefined) {
      this.related = [];
    }
    return this.related;
  }

  setRelated(related: ExplanationOfBenefitRelated[] | undefined): this {
    return this.setFieldValue('related', related);
  }

  hasRelated(): boolean {
    return this.hasFieldValue('related');
  }

  /** Appends a new, empty ExplanationOfBenefitRelated to `related` and returns it so it can be filled in. */
  addRelated(): ExplanationOfBenefitRelated;
  /** Appends the given ExplanationOfBenefitRelated to `related` and returns this object for chaining. */
  addRelated(explanationOfBenefitRelated: ExplanationOfBenefitRelated): this;
  addRelated(
    explanationOfBenefitRelated?: ExplanationOfBenefitRelated
  ): ExplanationOfBenefitRelated | this {
    if (explanationOfBenefitRelated !== undefined) {
      return this.addFieldValue('related', explanationOfBenefitRelated);
    }
    const createdExplanationOfBenefitRelated = new ExplanationOfBenefitRelated();
    this.addFieldValue('related', createdExplanationOfBenefitRelated);
    return createdExplanationOfBenefitRelated;
  }

  /** The first ExplanationOfBenefitRelated of `related`. One is added when the list is empty. */
  getRelatedFirstRep(): ExplanationOfBenefitRelated {
    const firstExplanationOfBenefitRelated = this.getRelated()[0];
    return firstExplanationOfBenefitRelated === undefined
      ? this.addRelated()
      : firstExplanationOfBenefitRelated;
  }

  /** Prescription authorizing services or products (0..1) Created when absent. */
  getPrescription(): Reference {
    if (this.prescription === undefined) {
      this.prescription = new Reference();
    }
    return this.prescription;
  }

  setPrescription(prescription: Reference | undefined): this {
    return this.setFieldValue('prescription', prescription);
  }

  hasPrescription(): boolean {
    return this.hasFieldValue('prescription');
  }

  /** Original prescription if superceded by fulfiller (0..1) Created when absent. */
  getOriginalPrescription(): Reference {
    if (this.originalPrescription === undefined) {
      this.originalPrescription = new Reference();
    }
    return this.originalPrescription;
  }

  setOriginalPrescription(originalPrescription: Reference | undefined): this {
    return this.setFieldValue('originalPrescription', originalPrescription);
  }

  hasOriginalPrescription(): boolean {
    return this.hasFieldValue('originalPrescription');
  }

  /** Recipient of benefits payable (0..1) Created when absent. */
  getPayee(): ExplanationOfBenefitPayee {
    if (this.payee === undefined) {
      this.payee = new ExplanationOfBenefitPayee();
    }
    return this.payee;
  }

  setPayee(payee: ExplanationOfBenefitPayee | undefined): this {
    return this.setFieldValue('payee', payee);
  }

  hasPayee(): boolean {
    return this.hasFieldValue('payee');
  }

  /** Treatment Referral (0..1) Created when absent. */
  getReferral(): Reference {
    if (this.referral === undefined) {
      this.referral = new Reference();
    }
    return this.referral;
  }

  setReferral(referral: Reference | undefined): this {
    return this.setFieldValue('referral', referral);
  }

  hasReferral(): boolean {
    return this.hasFieldValue('referral');
  }

  /** Servicing Facility (0..1) Created when absent. */
  getFacility(): Reference {
    if (this.facility === undefined) {
      this.facility = new Reference();
    }
    return this.facility;
  }

  setFacility(facility: Reference | undefined): this {
    return this.setFieldValue('facility', facility);
  }

  hasFacility(): boolean {
    return this.hasFieldValue('facility');
  }

  /** Claim reference (0..1) Created when absent. */
  getClaim(): Reference {
    if (this.claim === undefined) {
      this.claim = new Reference();
    }
    return this.claim;
  }

  setClaim(claim: Reference | undefined): this {
    return this.setFieldValue('claim', claim);
  }

  hasClaim(): boolean {
    return this.hasFieldValue('claim');
  }

  /** Claim response reference (0..1) Created when absent. */
  getClaimResponse(): Reference {
    if (this.claimResponse === undefined) {
      this.claimResponse = new Reference();
    }
    return this.claimResponse;
  }

  setClaimResponse(claimResponse: Reference | undefined): this {
    return this.setFieldValue('claimResponse', claimResponse);
  }

  hasClaimResponse(): boolean {
    return this.hasFieldValue('claimResponse');
  }

  /** queued | complete | error | partial (1..1) */
  getOutcome(): valueSetCodes.ClaimProcessingCodes | undefined {
    return this.outcome;
  }

  /** Sets `outcome`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setOutcome(outcome: valueSetCodes.ClaimProcessingCodes | undefined): this {
    return this.setFieldValue('outcome', outcome);
  }

  hasOutcome(): boolean {
    return this.hasFieldValue('outcome');
  }

  /** The element carrying the id and extensions of `outcome`. Created when absent. */
  getOutcomeElement(): Element {
    if (this._outcome === undefined) {
      this._outcome = new Element();
    }
    return this._outcome;
  }

  setOutcomeElement(outcomeElement: Element | undefined): this {
    this._outcome = outcomeElement;
    return this;
  }

  /** Disposition Message (0..1) */
  getDisposition(): string | undefined {
    return this.disposition;
  }

  /** Sets `disposition`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDisposition(disposition: string | undefined): this {
    return this.setFieldValue('disposition', disposition);
  }

  hasDisposition(): boolean {
    return this.hasFieldValue('disposition');
  }

  /** The element carrying the id and extensions of `disposition`. Created when absent. */
  getDispositionElement(): Element {
    if (this._disposition === undefined) {
      this._disposition = new Element();
    }
    return this._disposition;
  }

  setDispositionElement(dispositionElement: Element | undefined): this {
    this._disposition = dispositionElement;
    return this;
  }

  /** Preauthorization reference (0..*) Never undefined; an empty list is created when absent. */
  getPreAuthRef(): string[] {
    if (this.preAuthRef === undefined) {
      this.preAuthRef = [];
    }
    return this.preAuthRef;
  }

  setPreAuthRef(preAuthRef: string[] | undefined): this {
    return this.setFieldValue('preAuthRef', preAuthRef);
  }

  hasPreAuthRef(): boolean {
    return this.hasFieldValue('preAuthRef');
  }

  /** Appends one value to `preAuthRef`. Throws a FhirModelError when it is not a valid FHIR string. */
  addPreAuthRef(preAuthRef: string): this {
    return this.addFieldValue('preAuthRef', preAuthRef);
  }

  /** Preauthorization in-effect period (0..*) Never undefined; an empty list is created when absent. */
  getPreAuthRefPeriod(): Period[] {
    if (this.preAuthRefPeriod === undefined) {
      this.preAuthRefPeriod = [];
    }
    return this.preAuthRefPeriod;
  }

  setPreAuthRefPeriod(preAuthRefPeriod: Period[] | undefined): this {
    return this.setFieldValue('preAuthRefPeriod', preAuthRefPeriod);
  }

  hasPreAuthRefPeriod(): boolean {
    return this.hasFieldValue('preAuthRefPeriod');
  }

  /** Appends a new, empty Period to `preAuthRefPeriod` and returns it so it can be filled in. */
  addPreAuthRefPeriod(): Period;
  /** Appends the given Period to `preAuthRefPeriod` and returns this object for chaining. */
  addPreAuthRefPeriod(period: Period): this;
  addPreAuthRefPeriod(period?: Period): Period | this {
    if (period !== undefined) {
      return this.addFieldValue('preAuthRefPeriod', period);
    }
    const createdPeriod = new Period();
    this.addFieldValue('preAuthRefPeriod', createdPeriod);
    return createdPeriod;
  }

  /** The first Period of `preAuthRefPeriod`. One is added when the list is empty. */
  getPreAuthRefPeriodFirstRep(): Period {
    const firstPeriod = this.getPreAuthRefPeriod()[0];
    return firstPeriod === undefined ? this.addPreAuthRefPeriod() : firstPeriod;
  }

  /** Care Team members (0..*) Never undefined; an empty list is created when absent. */
  getCareTeam(): ExplanationOfBenefitCareTeam[] {
    if (this.careTeam === undefined) {
      this.careTeam = [];
    }
    return this.careTeam;
  }

  setCareTeam(careTeam: ExplanationOfBenefitCareTeam[] | undefined): this {
    return this.setFieldValue('careTeam', careTeam);
  }

  hasCareTeam(): boolean {
    return this.hasFieldValue('careTeam');
  }

  /** Appends a new, empty ExplanationOfBenefitCareTeam to `careTeam` and returns it so it can be filled in. */
  addCareTeam(): ExplanationOfBenefitCareTeam;
  /** Appends the given ExplanationOfBenefitCareTeam to `careTeam` and returns this object for chaining. */
  addCareTeam(explanationOfBenefitCareTeam: ExplanationOfBenefitCareTeam): this;
  addCareTeam(
    explanationOfBenefitCareTeam?: ExplanationOfBenefitCareTeam
  ): ExplanationOfBenefitCareTeam | this {
    if (explanationOfBenefitCareTeam !== undefined) {
      return this.addFieldValue('careTeam', explanationOfBenefitCareTeam);
    }
    const createdExplanationOfBenefitCareTeam = new ExplanationOfBenefitCareTeam();
    this.addFieldValue('careTeam', createdExplanationOfBenefitCareTeam);
    return createdExplanationOfBenefitCareTeam;
  }

  /** The first ExplanationOfBenefitCareTeam of `careTeam`. One is added when the list is empty. */
  getCareTeamFirstRep(): ExplanationOfBenefitCareTeam {
    const firstExplanationOfBenefitCareTeam = this.getCareTeam()[0];
    return firstExplanationOfBenefitCareTeam === undefined
      ? this.addCareTeam()
      : firstExplanationOfBenefitCareTeam;
  }

  /** Supporting information (0..*) Never undefined; an empty list is created when absent. */
  getSupportingInfo(): ExplanationOfBenefitSupportingInfo[] {
    if (this.supportingInfo === undefined) {
      this.supportingInfo = [];
    }
    return this.supportingInfo;
  }

  setSupportingInfo(supportingInfo: ExplanationOfBenefitSupportingInfo[] | undefined): this {
    return this.setFieldValue('supportingInfo', supportingInfo);
  }

  hasSupportingInfo(): boolean {
    return this.hasFieldValue('supportingInfo');
  }

  /** Appends a new, empty ExplanationOfBenefitSupportingInfo to `supportingInfo` and returns it so it can be filled in. */
  addSupportingInfo(): ExplanationOfBenefitSupportingInfo;
  /** Appends the given ExplanationOfBenefitSupportingInfo to `supportingInfo` and returns this object for chaining. */
  addSupportingInfo(explanationOfBenefitSupportingInfo: ExplanationOfBenefitSupportingInfo): this;
  addSupportingInfo(
    explanationOfBenefitSupportingInfo?: ExplanationOfBenefitSupportingInfo
  ): ExplanationOfBenefitSupportingInfo | this {
    if (explanationOfBenefitSupportingInfo !== undefined) {
      return this.addFieldValue('supportingInfo', explanationOfBenefitSupportingInfo);
    }
    const createdExplanationOfBenefitSupportingInfo = new ExplanationOfBenefitSupportingInfo();
    this.addFieldValue('supportingInfo', createdExplanationOfBenefitSupportingInfo);
    return createdExplanationOfBenefitSupportingInfo;
  }

  /** The first ExplanationOfBenefitSupportingInfo of `supportingInfo`. One is added when the list is empty. */
  getSupportingInfoFirstRep(): ExplanationOfBenefitSupportingInfo {
    const firstExplanationOfBenefitSupportingInfo = this.getSupportingInfo()[0];
    return firstExplanationOfBenefitSupportingInfo === undefined
      ? this.addSupportingInfo()
      : firstExplanationOfBenefitSupportingInfo;
  }

  /** Pertinent diagnosis information (0..*) Never undefined; an empty list is created when absent. */
  getDiagnosis(): ExplanationOfBenefitDiagnosis[] {
    if (this.diagnosis === undefined) {
      this.diagnosis = [];
    }
    return this.diagnosis;
  }

  setDiagnosis(diagnosis: ExplanationOfBenefitDiagnosis[] | undefined): this {
    return this.setFieldValue('diagnosis', diagnosis);
  }

  hasDiagnosis(): boolean {
    return this.hasFieldValue('diagnosis');
  }

  /** Appends a new, empty ExplanationOfBenefitDiagnosis to `diagnosis` and returns it so it can be filled in. */
  addDiagnosis(): ExplanationOfBenefitDiagnosis;
  /** Appends the given ExplanationOfBenefitDiagnosis to `diagnosis` and returns this object for chaining. */
  addDiagnosis(explanationOfBenefitDiagnosis: ExplanationOfBenefitDiagnosis): this;
  addDiagnosis(
    explanationOfBenefitDiagnosis?: ExplanationOfBenefitDiagnosis
  ): ExplanationOfBenefitDiagnosis | this {
    if (explanationOfBenefitDiagnosis !== undefined) {
      return this.addFieldValue('diagnosis', explanationOfBenefitDiagnosis);
    }
    const createdExplanationOfBenefitDiagnosis = new ExplanationOfBenefitDiagnosis();
    this.addFieldValue('diagnosis', createdExplanationOfBenefitDiagnosis);
    return createdExplanationOfBenefitDiagnosis;
  }

  /** The first ExplanationOfBenefitDiagnosis of `diagnosis`. One is added when the list is empty. */
  getDiagnosisFirstRep(): ExplanationOfBenefitDiagnosis {
    const firstExplanationOfBenefitDiagnosis = this.getDiagnosis()[0];
    return firstExplanationOfBenefitDiagnosis === undefined
      ? this.addDiagnosis()
      : firstExplanationOfBenefitDiagnosis;
  }

  /** Clinical procedures performed (0..*) Never undefined; an empty list is created when absent. */
  getProcedure(): ExplanationOfBenefitProcedure[] {
    if (this.procedure === undefined) {
      this.procedure = [];
    }
    return this.procedure;
  }

  setProcedure(procedure: ExplanationOfBenefitProcedure[] | undefined): this {
    return this.setFieldValue('procedure', procedure);
  }

  hasProcedure(): boolean {
    return this.hasFieldValue('procedure');
  }

  /** Appends a new, empty ExplanationOfBenefitProcedure to `procedure` and returns it so it can be filled in. */
  addProcedure(): ExplanationOfBenefitProcedure;
  /** Appends the given ExplanationOfBenefitProcedure to `procedure` and returns this object for chaining. */
  addProcedure(explanationOfBenefitProcedure: ExplanationOfBenefitProcedure): this;
  addProcedure(
    explanationOfBenefitProcedure?: ExplanationOfBenefitProcedure
  ): ExplanationOfBenefitProcedure | this {
    if (explanationOfBenefitProcedure !== undefined) {
      return this.addFieldValue('procedure', explanationOfBenefitProcedure);
    }
    const createdExplanationOfBenefitProcedure = new ExplanationOfBenefitProcedure();
    this.addFieldValue('procedure', createdExplanationOfBenefitProcedure);
    return createdExplanationOfBenefitProcedure;
  }

  /** The first ExplanationOfBenefitProcedure of `procedure`. One is added when the list is empty. */
  getProcedureFirstRep(): ExplanationOfBenefitProcedure {
    const firstExplanationOfBenefitProcedure = this.getProcedure()[0];
    return firstExplanationOfBenefitProcedure === undefined
      ? this.addProcedure()
      : firstExplanationOfBenefitProcedure;
  }

  /** Precedence (primary, secondary, etc.) (0..1) */
  getPrecedence(): number | undefined {
    return this.precedence;
  }

  /** Sets `precedence`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setPrecedence(precedence: number | undefined): this {
    return this.setFieldValue('precedence', precedence);
  }

  hasPrecedence(): boolean {
    return this.hasFieldValue('precedence');
  }

  /** The element carrying the id and extensions of `precedence`. Created when absent. */
  getPrecedenceElement(): Element {
    if (this._precedence === undefined) {
      this._precedence = new Element();
    }
    return this._precedence;
  }

  setPrecedenceElement(precedenceElement: Element | undefined): this {
    this._precedence = precedenceElement;
    return this;
  }

  /** Patient insurance information (1..*) Never undefined; an empty list is created when absent. */
  getInsurance(): ExplanationOfBenefitInsurance[] {
    if (this.insurance === undefined) {
      this.insurance = [];
    }
    return this.insurance;
  }

  setInsurance(insurance: ExplanationOfBenefitInsurance[] | undefined): this {
    return this.setFieldValue('insurance', insurance);
  }

  hasInsurance(): boolean {
    return this.hasFieldValue('insurance');
  }

  /** Appends a new, empty ExplanationOfBenefitInsurance to `insurance` and returns it so it can be filled in. */
  addInsurance(): ExplanationOfBenefitInsurance;
  /** Appends the given ExplanationOfBenefitInsurance to `insurance` and returns this object for chaining. */
  addInsurance(explanationOfBenefitInsurance: ExplanationOfBenefitInsurance): this;
  addInsurance(
    explanationOfBenefitInsurance?: ExplanationOfBenefitInsurance
  ): ExplanationOfBenefitInsurance | this {
    if (explanationOfBenefitInsurance !== undefined) {
      return this.addFieldValue('insurance', explanationOfBenefitInsurance);
    }
    const createdExplanationOfBenefitInsurance = new ExplanationOfBenefitInsurance();
    this.addFieldValue('insurance', createdExplanationOfBenefitInsurance);
    return createdExplanationOfBenefitInsurance;
  }

  /** The first ExplanationOfBenefitInsurance of `insurance`. One is added when the list is empty. */
  getInsuranceFirstRep(): ExplanationOfBenefitInsurance {
    const firstExplanationOfBenefitInsurance = this.getInsurance()[0];
    return firstExplanationOfBenefitInsurance === undefined
      ? this.addInsurance()
      : firstExplanationOfBenefitInsurance;
  }

  /** Details of the event (0..1) Created when absent. */
  getAccident(): ExplanationOfBenefitAccident {
    if (this.accident === undefined) {
      this.accident = new ExplanationOfBenefitAccident();
    }
    return this.accident;
  }

  setAccident(accident: ExplanationOfBenefitAccident | undefined): this {
    return this.setFieldValue('accident', accident);
  }

  hasAccident(): boolean {
    return this.hasFieldValue('accident');
  }

  /** Product or service provided (0..*) Never undefined; an empty list is created when absent. */
  getItem(): ExplanationOfBenefitItem[] {
    if (this.item === undefined) {
      this.item = [];
    }
    return this.item;
  }

  setItem(item: ExplanationOfBenefitItem[] | undefined): this {
    return this.setFieldValue('item', item);
  }

  hasItem(): boolean {
    return this.hasFieldValue('item');
  }

  /** Appends a new, empty ExplanationOfBenefitItem to `item` and returns it so it can be filled in. */
  addItemEntry(): ExplanationOfBenefitItem;
  /** Appends the given ExplanationOfBenefitItem to `item` and returns this object for chaining. */
  addItemEntry(explanationOfBenefitItem: ExplanationOfBenefitItem): this;
  addItemEntry(
    explanationOfBenefitItem?: ExplanationOfBenefitItem
  ): ExplanationOfBenefitItem | this {
    if (explanationOfBenefitItem !== undefined) {
      return this.addFieldValue('item', explanationOfBenefitItem);
    }
    const createdExplanationOfBenefitItem = new ExplanationOfBenefitItem();
    this.addFieldValue('item', createdExplanationOfBenefitItem);
    return createdExplanationOfBenefitItem;
  }

  /** The first ExplanationOfBenefitItem of `item`. One is added when the list is empty. */
  getItemFirstRep(): ExplanationOfBenefitItem {
    const firstExplanationOfBenefitItem = this.getItem()[0];
    return firstExplanationOfBenefitItem === undefined
      ? this.addItemEntry()
      : firstExplanationOfBenefitItem;
  }

  /** Insurer added line items (0..*) Never undefined; an empty list is created when absent. */
  getAddItem(): ExplanationOfBenefitAddItem[] {
    if (this.addItem === undefined) {
      this.addItem = [];
    }
    return this.addItem;
  }

  setAddItem(addItem: ExplanationOfBenefitAddItem[] | undefined): this {
    return this.setFieldValue('addItem', addItem);
  }

  hasAddItem(): boolean {
    return this.hasFieldValue('addItem');
  }

  /** Appends a new, empty ExplanationOfBenefitAddItem to `addItem` and returns it so it can be filled in. */
  addAddItem(): ExplanationOfBenefitAddItem;
  /** Appends the given ExplanationOfBenefitAddItem to `addItem` and returns this object for chaining. */
  addAddItem(explanationOfBenefitAddItem: ExplanationOfBenefitAddItem): this;
  addAddItem(
    explanationOfBenefitAddItem?: ExplanationOfBenefitAddItem
  ): ExplanationOfBenefitAddItem | this {
    if (explanationOfBenefitAddItem !== undefined) {
      return this.addFieldValue('addItem', explanationOfBenefitAddItem);
    }
    const createdExplanationOfBenefitAddItem = new ExplanationOfBenefitAddItem();
    this.addFieldValue('addItem', createdExplanationOfBenefitAddItem);
    return createdExplanationOfBenefitAddItem;
  }

  /** The first ExplanationOfBenefitAddItem of `addItem`. One is added when the list is empty. */
  getAddItemFirstRep(): ExplanationOfBenefitAddItem {
    const firstExplanationOfBenefitAddItem = this.getAddItem()[0];
    return firstExplanationOfBenefitAddItem === undefined
      ? this.addAddItem()
      : firstExplanationOfBenefitAddItem;
  }

  /** Header-level adjudication (0..*) Never undefined; an empty list is created when absent. */
  getAdjudication(): ExplanationOfBenefitItemAdjudication[] {
    if (this.adjudication === undefined) {
      this.adjudication = [];
    }
    return this.adjudication;
  }

  setAdjudication(adjudication: ExplanationOfBenefitItemAdjudication[] | undefined): this {
    return this.setFieldValue('adjudication', adjudication);
  }

  hasAdjudication(): boolean {
    return this.hasFieldValue('adjudication');
  }

  /** Appends a new, empty ExplanationOfBenefitItemAdjudication to `adjudication` and returns it so it can be filled in. */
  addAdjudication(): ExplanationOfBenefitItemAdjudication;
  /** Appends the given ExplanationOfBenefitItemAdjudication to `adjudication` and returns this object for chaining. */
  addAdjudication(explanationOfBenefitItemAdjudication: ExplanationOfBenefitItemAdjudication): this;
  addAdjudication(
    explanationOfBenefitItemAdjudication?: ExplanationOfBenefitItemAdjudication
  ): ExplanationOfBenefitItemAdjudication | this {
    if (explanationOfBenefitItemAdjudication !== undefined) {
      return this.addFieldValue('adjudication', explanationOfBenefitItemAdjudication);
    }
    const createdExplanationOfBenefitItemAdjudication = new ExplanationOfBenefitItemAdjudication();
    this.addFieldValue('adjudication', createdExplanationOfBenefitItemAdjudication);
    return createdExplanationOfBenefitItemAdjudication;
  }

  /** The first ExplanationOfBenefitItemAdjudication of `adjudication`. One is added when the list is empty. */
  getAdjudicationFirstRep(): ExplanationOfBenefitItemAdjudication {
    const firstExplanationOfBenefitItemAdjudication = this.getAdjudication()[0];
    return firstExplanationOfBenefitItemAdjudication === undefined
      ? this.addAdjudication()
      : firstExplanationOfBenefitItemAdjudication;
  }

  /** Adjudication totals (0..*) Never undefined; an empty list is created when absent. */
  getTotal(): ExplanationOfBenefitTotal[] {
    if (this.total === undefined) {
      this.total = [];
    }
    return this.total;
  }

  setTotal(total: ExplanationOfBenefitTotal[] | undefined): this {
    return this.setFieldValue('total', total);
  }

  hasTotal(): boolean {
    return this.hasFieldValue('total');
  }

  /** Appends a new, empty ExplanationOfBenefitTotal to `total` and returns it so it can be filled in. */
  addTotal(): ExplanationOfBenefitTotal;
  /** Appends the given ExplanationOfBenefitTotal to `total` and returns this object for chaining. */
  addTotal(explanationOfBenefitTotal: ExplanationOfBenefitTotal): this;
  addTotal(
    explanationOfBenefitTotal?: ExplanationOfBenefitTotal
  ): ExplanationOfBenefitTotal | this {
    if (explanationOfBenefitTotal !== undefined) {
      return this.addFieldValue('total', explanationOfBenefitTotal);
    }
    const createdExplanationOfBenefitTotal = new ExplanationOfBenefitTotal();
    this.addFieldValue('total', createdExplanationOfBenefitTotal);
    return createdExplanationOfBenefitTotal;
  }

  /** The first ExplanationOfBenefitTotal of `total`. One is added when the list is empty. */
  getTotalFirstRep(): ExplanationOfBenefitTotal {
    const firstExplanationOfBenefitTotal = this.getTotal()[0];
    return firstExplanationOfBenefitTotal === undefined
      ? this.addTotal()
      : firstExplanationOfBenefitTotal;
  }

  /** Payment Details (0..1) Created when absent. */
  getPayment(): ExplanationOfBenefitPayment {
    if (this.payment === undefined) {
      this.payment = new ExplanationOfBenefitPayment();
    }
    return this.payment;
  }

  setPayment(payment: ExplanationOfBenefitPayment | undefined): this {
    return this.setFieldValue('payment', payment);
  }

  hasPayment(): boolean {
    return this.hasFieldValue('payment');
  }

  /** Printed form identifier (0..1) Created when absent. */
  getFormCode(): CodeableConcept {
    if (this.formCode === undefined) {
      this.formCode = new CodeableConcept();
    }
    return this.formCode;
  }

  setFormCode(formCode: CodeableConcept | undefined): this {
    return this.setFieldValue('formCode', formCode);
  }

  hasFormCode(): boolean {
    return this.hasFieldValue('formCode');
  }

  /** Printed reference or actual form (0..1) Created when absent. */
  getForm(): Attachment {
    if (this.form === undefined) {
      this.form = new Attachment();
    }
    return this.form;
  }

  setForm(form: Attachment | undefined): this {
    return this.setFieldValue('form', form);
  }

  hasForm(): boolean {
    return this.hasFieldValue('form');
  }

  /** Note concerning adjudication (0..*) Never undefined; an empty list is created when absent. */
  getProcessNote(): ExplanationOfBenefitProcessNote[] {
    if (this.processNote === undefined) {
      this.processNote = [];
    }
    return this.processNote;
  }

  setProcessNote(processNote: ExplanationOfBenefitProcessNote[] | undefined): this {
    return this.setFieldValue('processNote', processNote);
  }

  hasProcessNote(): boolean {
    return this.hasFieldValue('processNote');
  }

  /** Appends a new, empty ExplanationOfBenefitProcessNote to `processNote` and returns it so it can be filled in. */
  addProcessNote(): ExplanationOfBenefitProcessNote;
  /** Appends the given ExplanationOfBenefitProcessNote to `processNote` and returns this object for chaining. */
  addProcessNote(explanationOfBenefitProcessNote: ExplanationOfBenefitProcessNote): this;
  addProcessNote(
    explanationOfBenefitProcessNote?: ExplanationOfBenefitProcessNote
  ): ExplanationOfBenefitProcessNote | this {
    if (explanationOfBenefitProcessNote !== undefined) {
      return this.addFieldValue('processNote', explanationOfBenefitProcessNote);
    }
    const createdExplanationOfBenefitProcessNote = new ExplanationOfBenefitProcessNote();
    this.addFieldValue('processNote', createdExplanationOfBenefitProcessNote);
    return createdExplanationOfBenefitProcessNote;
  }

  /** The first ExplanationOfBenefitProcessNote of `processNote`. One is added when the list is empty. */
  getProcessNoteFirstRep(): ExplanationOfBenefitProcessNote {
    const firstExplanationOfBenefitProcessNote = this.getProcessNote()[0];
    return firstExplanationOfBenefitProcessNote === undefined
      ? this.addProcessNote()
      : firstExplanationOfBenefitProcessNote;
  }

  /** When the benefits are applicable (0..1) Created when absent. */
  getBenefitPeriod(): Period {
    if (this.benefitPeriod === undefined) {
      this.benefitPeriod = new Period();
    }
    return this.benefitPeriod;
  }

  setBenefitPeriod(benefitPeriod: Period | undefined): this {
    return this.setFieldValue('benefitPeriod', benefitPeriod);
  }

  hasBenefitPeriod(): boolean {
    return this.hasFieldValue('benefitPeriod');
  }

  /** Balance by Benefit Category (0..*) Never undefined; an empty list is created when absent. */
  getBenefitBalance(): ExplanationOfBenefitBenefitBalance[] {
    if (this.benefitBalance === undefined) {
      this.benefitBalance = [];
    }
    return this.benefitBalance;
  }

  setBenefitBalance(benefitBalance: ExplanationOfBenefitBenefitBalance[] | undefined): this {
    return this.setFieldValue('benefitBalance', benefitBalance);
  }

  hasBenefitBalance(): boolean {
    return this.hasFieldValue('benefitBalance');
  }

  /** Appends a new, empty ExplanationOfBenefitBenefitBalance to `benefitBalance` and returns it so it can be filled in. */
  addBenefitBalance(): ExplanationOfBenefitBenefitBalance;
  /** Appends the given ExplanationOfBenefitBenefitBalance to `benefitBalance` and returns this object for chaining. */
  addBenefitBalance(explanationOfBenefitBenefitBalance: ExplanationOfBenefitBenefitBalance): this;
  addBenefitBalance(
    explanationOfBenefitBenefitBalance?: ExplanationOfBenefitBenefitBalance
  ): ExplanationOfBenefitBenefitBalance | this {
    if (explanationOfBenefitBenefitBalance !== undefined) {
      return this.addFieldValue('benefitBalance', explanationOfBenefitBenefitBalance);
    }
    const createdExplanationOfBenefitBenefitBalance = new ExplanationOfBenefitBenefitBalance();
    this.addFieldValue('benefitBalance', createdExplanationOfBenefitBenefitBalance);
    return createdExplanationOfBenefitBenefitBalance;
  }

  /** The first ExplanationOfBenefitBenefitBalance of `benefitBalance`. One is added when the list is empty. */
  getBenefitBalanceFirstRep(): ExplanationOfBenefitBenefitBalance {
    const firstExplanationOfBenefitBenefitBalance = this.getBenefitBalance()[0];
    return firstExplanationOfBenefitBenefitBalance === undefined
      ? this.addBenefitBalance()
      : firstExplanationOfBenefitBenefitBalance;
  }
}

modelTypeRegistry.register('ExplanationOfBenefit', ExplanationOfBenefit, true);

/** True when the value is a ExplanationOfBenefit model instance. */
export function isExplanationOfBenefit(candidate: unknown): candidate is ExplanationOfBenefit {
  return candidate instanceof ExplanationOfBenefit;
}

/**
 * Prior or corollary claims
 */
export class ExplanationOfBenefitRelated extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'claim',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'claim', typeCode: 'Reference', targetResourceTypes: ['Claim'] }],
    },
    {
      elementName: 'relationship',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'relationship', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'reference',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reference', typeCode: 'Identifier' }],
    },
  ];

  /** Reference to the related claim (0..1) */
  claim?: Reference;

  /** How the reference claim is related (0..1) */
  relationship?: CodeableConcept;

  /** File or case reference (0..1) */
  reference?: Identifier;

  override fhirType(): string {
    return 'ExplanationOfBenefit.related';
  }

  /** FHIR JSON for this ExplanationOfBenefitRelated, typed as the plain `ExplanationOfBenefitRelated` data type. */
  override toJSON(): plainTypes.ExplanationOfBenefitRelated {
    return this.serialize() as plainTypes.ExplanationOfBenefitRelated;
  }

  /** Reference to the related claim (0..1) Created when absent. */
  getClaim(): Reference {
    if (this.claim === undefined) {
      this.claim = new Reference();
    }
    return this.claim;
  }

  setClaim(claim: Reference | undefined): this {
    return this.setFieldValue('claim', claim);
  }

  hasClaim(): boolean {
    return this.hasFieldValue('claim');
  }

  /** How the reference claim is related (0..1) Created when absent. */
  getRelationship(): CodeableConcept {
    if (this.relationship === undefined) {
      this.relationship = new CodeableConcept();
    }
    return this.relationship;
  }

  setRelationship(relationship: CodeableConcept | undefined): this {
    return this.setFieldValue('relationship', relationship);
  }

  hasRelationship(): boolean {
    return this.hasFieldValue('relationship');
  }

  /** File or case reference (0..1) Created when absent. */
  getReference(): Identifier {
    if (this.reference === undefined) {
      this.reference = new Identifier();
    }
    return this.reference;
  }

  setReference(reference: Identifier | undefined): this {
    return this.setFieldValue('reference', reference);
  }

  hasReference(): boolean {
    return this.hasFieldValue('reference');
  }
}

modelTypeRegistry.register('ExplanationOfBenefitRelated', ExplanationOfBenefitRelated, false);

/**
 * Recipient of benefits payable
 */
export class ExplanationOfBenefitPayee extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'party',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'party',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Organization',
            'Patient',
            'Practitioner',
            'PractitionerRole',
            'RelatedPerson',
          ],
        },
      ],
    },
  ];

  /** Category of recipient (0..1) */
  type?: CodeableConcept;

  /** Recipient reference (0..1) */
  party?: Reference;

  override fhirType(): string {
    return 'ExplanationOfBenefit.payee';
  }

  /** FHIR JSON for this ExplanationOfBenefitPayee, typed as the plain `ExplanationOfBenefitPayee` data type. */
  override toJSON(): plainTypes.ExplanationOfBenefitPayee {
    return this.serialize() as plainTypes.ExplanationOfBenefitPayee;
  }

  /** Category of recipient (0..1) Created when absent. */
  getType(): CodeableConcept {
    if (this.type === undefined) {
      this.type = new CodeableConcept();
    }
    return this.type;
  }

  setType(type: CodeableConcept | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Recipient reference (0..1) Created when absent. */
  getParty(): Reference {
    if (this.party === undefined) {
      this.party = new Reference();
    }
    return this.party;
  }

  setParty(party: Reference | undefined): this {
    return this.setFieldValue('party', party);
  }

  hasParty(): boolean {
    return this.hasFieldValue('party');
  }
}

modelTypeRegistry.register('ExplanationOfBenefitPayee', ExplanationOfBenefitPayee, false);

/**
 * Care Team members
 */
export class ExplanationOfBenefitCareTeam extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'sequence',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sequence', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'provider',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'provider',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Practitioner', 'PractitionerRole'],
        },
      ],
    },
    {
      elementName: 'responsible',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'responsible', typeCode: 'boolean' }],
    },
    {
      elementName: 'role',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'role', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'qualification',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'qualification', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Order of care team (1..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;

  /** Practitioner or organization (1..1) */
  provider?: Reference;

  /** Indicator of the lead practitioner (0..1) */
  responsible?: boolean;
  /** Id and extensions of the primitive `responsible`. */
  _responsible?: Element;

  /** Function within the team (0..1) */
  role?: CodeableConcept;

  /** Practitioner credential or specialization (0..1) */
  qualification?: CodeableConcept;

  override fhirType(): string {
    return 'ExplanationOfBenefit.careTeam';
  }

  /** FHIR JSON for this ExplanationOfBenefitCareTeam, typed as the plain `ExplanationOfBenefitCareTeam` data type. */
  override toJSON(): plainTypes.ExplanationOfBenefitCareTeam {
    return this.serialize() as plainTypes.ExplanationOfBenefitCareTeam;
  }

  /** Order of care team (1..1) */
  getSequence(): number | undefined {
    return this.sequence;
  }

  /** Sets `sequence`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setSequence(sequence: number | undefined): this {
    return this.setFieldValue('sequence', sequence);
  }

  hasSequence(): boolean {
    return this.hasFieldValue('sequence');
  }

  /** The element carrying the id and extensions of `sequence`. Created when absent. */
  getSequenceElement(): Element {
    if (this._sequence === undefined) {
      this._sequence = new Element();
    }
    return this._sequence;
  }

  setSequenceElement(sequenceElement: Element | undefined): this {
    this._sequence = sequenceElement;
    return this;
  }

  /** Practitioner or organization (1..1) Created when absent. */
  getProvider(): Reference {
    if (this.provider === undefined) {
      this.provider = new Reference();
    }
    return this.provider;
  }

  setProvider(provider: Reference | undefined): this {
    return this.setFieldValue('provider', provider);
  }

  hasProvider(): boolean {
    return this.hasFieldValue('provider');
  }

  /** Indicator of the lead practitioner (0..1) */
  getResponsible(): boolean | undefined {
    return this.responsible;
  }

  /** Sets `responsible`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setResponsible(responsible: boolean | undefined): this {
    return this.setFieldValue('responsible', responsible);
  }

  hasResponsible(): boolean {
    return this.hasFieldValue('responsible');
  }

  /** The element carrying the id and extensions of `responsible`. Created when absent. */
  getResponsibleElement(): Element {
    if (this._responsible === undefined) {
      this._responsible = new Element();
    }
    return this._responsible;
  }

  setResponsibleElement(responsibleElement: Element | undefined): this {
    this._responsible = responsibleElement;
    return this;
  }

  /** Function within the team (0..1) Created when absent. */
  getRole(): CodeableConcept {
    if (this.role === undefined) {
      this.role = new CodeableConcept();
    }
    return this.role;
  }

  setRole(role: CodeableConcept | undefined): this {
    return this.setFieldValue('role', role);
  }

  hasRole(): boolean {
    return this.hasFieldValue('role');
  }

  /** Practitioner credential or specialization (0..1) Created when absent. */
  getQualification(): CodeableConcept {
    if (this.qualification === undefined) {
      this.qualification = new CodeableConcept();
    }
    return this.qualification;
  }

  setQualification(qualification: CodeableConcept | undefined): this {
    return this.setFieldValue('qualification', qualification);
  }

  hasQualification(): boolean {
    return this.hasFieldValue('qualification');
  }
}

modelTypeRegistry.register('ExplanationOfBenefitCareTeam', ExplanationOfBenefitCareTeam, false);

/**
 * Supporting information
 */
export class ExplanationOfBenefitSupportingInfo extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'sequence',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sequence', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'category',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'timing',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'timingDate', typeCode: 'date' },
        { jsonKey: 'timingPeriod', typeCode: 'Period' },
      ],
    },
    {
      elementName: 'value',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'valueBoolean', typeCode: 'boolean' },
        { jsonKey: 'valueString', typeCode: 'string' },
        { jsonKey: 'valueQuantity', typeCode: 'Quantity' },
        { jsonKey: 'valueAttachment', typeCode: 'Attachment' },
        { jsonKey: 'valueReference', typeCode: 'Reference' },
      ],
    },
    {
      elementName: 'reason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reason', typeCode: 'Coding' }],
    },
  ];

  /** Information instance identifier (1..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;

  /** Classification of the supplied information (1..1) */
  category?: CodeableConcept;

  /** Type of information (0..1) */
  code?: CodeableConcept;

  /** When it occurred (0..1) */
  timingDate?: string;
  /** Id and extensions of the primitive `timingDate`. */
  _timingDate?: Element;
  /** When it occurred (0..1) */
  timingPeriod?: Period;

  /** Data to be provided (0..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Data to be provided (0..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Data to be provided (0..1) */
  valueQuantity?: Quantity;
  /** Data to be provided (0..1) */
  valueAttachment?: Attachment;
  /** Data to be provided (0..1) */
  valueReference?: Reference;

  /** Explanation for the information (0..1) */
  reason?: Coding;

  override fhirType(): string {
    return 'ExplanationOfBenefit.supportingInfo';
  }

  /** FHIR JSON for this ExplanationOfBenefitSupportingInfo, typed as the plain `ExplanationOfBenefitSupportingInfo` data type. */
  override toJSON(): plainTypes.ExplanationOfBenefitSupportingInfo {
    return this.serialize() as plainTypes.ExplanationOfBenefitSupportingInfo;
  }

  /** Information instance identifier (1..1) */
  getSequence(): number | undefined {
    return this.sequence;
  }

  /** Sets `sequence`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setSequence(sequence: number | undefined): this {
    return this.setFieldValue('sequence', sequence);
  }

  hasSequence(): boolean {
    return this.hasFieldValue('sequence');
  }

  /** The element carrying the id and extensions of `sequence`. Created when absent. */
  getSequenceElement(): Element {
    if (this._sequence === undefined) {
      this._sequence = new Element();
    }
    return this._sequence;
  }

  setSequenceElement(sequenceElement: Element | undefined): this {
    this._sequence = sequenceElement;
    return this;
  }

  /** Classification of the supplied information (1..1) Created when absent. */
  getCategory(): CodeableConcept {
    if (this.category === undefined) {
      this.category = new CodeableConcept();
    }
    return this.category;
  }

  setCategory(category: CodeableConcept | undefined): this {
    return this.setFieldValue('category', category);
  }

  hasCategory(): boolean {
    return this.hasFieldValue('category');
  }

  /** Type of information (0..1) Created when absent. */
  getCode(): CodeableConcept {
    if (this.code === undefined) {
      this.code = new CodeableConcept();
    }
    return this.code;
  }

  setCode(code: CodeableConcept | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** When it occurred (0..1) Whichever type of `timing[x]` is set. */
  getTiming(): string | Period | undefined {
    return this.getChoiceValue<string | Period>('timing');
  }

  /** True when any type of `timing[x]` is set. */
  hasTiming(): boolean {
    return this.hasChoiceValue('timing');
  }

  getTimingDate(): string | undefined {
    return this.timingDate;
  }

  /** Sets `timing[x]` as date and clears every other type of it. */
  setTimingDate(timingDate: string | undefined): this {
    return this.setFieldValue('timingDate', timingDate);
  }

  hasTimingDate(): boolean {
    return this.hasFieldValue('timingDate');
  }

  getTimingPeriod(): Period | undefined {
    return this.timingPeriod;
  }

  /** Sets `timing[x]` as Period and clears every other type of it. */
  setTimingPeriod(timingPeriod: Period | undefined): this {
    return this.setFieldValue('timingPeriod', timingPeriod);
  }

  hasTimingPeriod(): boolean {
    return this.hasFieldValue('timingPeriod');
  }

  /** Data to be provided (0..1) Whichever type of `value[x]` is set. */
  getValue(): boolean | string | Quantity | Attachment | Reference | undefined {
    return this.getChoiceValue<boolean | string | Quantity | Attachment | Reference>('value');
  }

  /** True when any type of `value[x]` is set. */
  hasValue(): boolean {
    return this.hasChoiceValue('value');
  }

  getValueBoolean(): boolean | undefined {
    return this.valueBoolean;
  }

  /** Sets `value[x]` as boolean and clears every other type of it. */
  setValueBoolean(valueBoolean: boolean | undefined): this {
    return this.setFieldValue('valueBoolean', valueBoolean);
  }

  hasValueBoolean(): boolean {
    return this.hasFieldValue('valueBoolean');
  }

  getValueString(): string | undefined {
    return this.valueString;
  }

  /** Sets `value[x]` as string and clears every other type of it. */
  setValueString(valueString: string | undefined): this {
    return this.setFieldValue('valueString', valueString);
  }

  hasValueString(): boolean {
    return this.hasFieldValue('valueString');
  }

  getValueQuantity(): Quantity | undefined {
    return this.valueQuantity;
  }

  /** Sets `value[x]` as Quantity and clears every other type of it. */
  setValueQuantity(valueQuantity: Quantity | undefined): this {
    return this.setFieldValue('valueQuantity', valueQuantity);
  }

  hasValueQuantity(): boolean {
    return this.hasFieldValue('valueQuantity');
  }

  getValueAttachment(): Attachment | undefined {
    return this.valueAttachment;
  }

  /** Sets `value[x]` as Attachment and clears every other type of it. */
  setValueAttachment(valueAttachment: Attachment | undefined): this {
    return this.setFieldValue('valueAttachment', valueAttachment);
  }

  hasValueAttachment(): boolean {
    return this.hasFieldValue('valueAttachment');
  }

  getValueReference(): Reference | undefined {
    return this.valueReference;
  }

  /** Sets `value[x]` as Reference and clears every other type of it. */
  setValueReference(valueReference: Reference | undefined): this {
    return this.setFieldValue('valueReference', valueReference);
  }

  hasValueReference(): boolean {
    return this.hasFieldValue('valueReference');
  }

  /** Explanation for the information (0..1) Created when absent. */
  getReason(): Coding {
    if (this.reason === undefined) {
      this.reason = new Coding();
    }
    return this.reason;
  }

  setReason(reason: Coding | undefined): this {
    return this.setFieldValue('reason', reason);
  }

  hasReason(): boolean {
    return this.hasFieldValue('reason');
  }
}

modelTypeRegistry.register(
  'ExplanationOfBenefitSupportingInfo',
  ExplanationOfBenefitSupportingInfo,
  false
);

/**
 * Pertinent diagnosis information
 */
export class ExplanationOfBenefitDiagnosis extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'sequence',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sequence', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'diagnosis',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'diagnosisCodeableConcept', typeCode: 'CodeableConcept' },
        {
          jsonKey: 'diagnosisReference',
          typeCode: 'Reference',
          targetResourceTypes: ['Condition'],
        },
      ],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'onAdmission',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'onAdmission', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'packageCode',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'packageCode', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Diagnosis instance identifier (1..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;

  /** Nature of illness or problem (1..1) */
  diagnosisCodeableConcept?: CodeableConcept;
  /** Nature of illness or problem (1..1) */
  diagnosisReference?: Reference;

  /** Timing or nature of the diagnosis (0..*) */
  type?: CodeableConcept[];

  /** Present on admission (0..1) */
  onAdmission?: CodeableConcept;

  /** Package billing code (0..1) */
  packageCode?: CodeableConcept;

  override fhirType(): string {
    return 'ExplanationOfBenefit.diagnosis';
  }

  /** FHIR JSON for this ExplanationOfBenefitDiagnosis, typed as the plain `ExplanationOfBenefitDiagnosis` data type. */
  override toJSON(): plainTypes.ExplanationOfBenefitDiagnosis {
    return this.serialize() as plainTypes.ExplanationOfBenefitDiagnosis;
  }

  /** Diagnosis instance identifier (1..1) */
  getSequence(): number | undefined {
    return this.sequence;
  }

  /** Sets `sequence`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setSequence(sequence: number | undefined): this {
    return this.setFieldValue('sequence', sequence);
  }

  hasSequence(): boolean {
    return this.hasFieldValue('sequence');
  }

  /** The element carrying the id and extensions of `sequence`. Created when absent. */
  getSequenceElement(): Element {
    if (this._sequence === undefined) {
      this._sequence = new Element();
    }
    return this._sequence;
  }

  setSequenceElement(sequenceElement: Element | undefined): this {
    this._sequence = sequenceElement;
    return this;
  }

  /** Nature of illness or problem (1..1) Whichever type of `diagnosis[x]` is set. */
  getDiagnosis(): CodeableConcept | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | Reference>('diagnosis');
  }

  /** True when any type of `diagnosis[x]` is set. */
  hasDiagnosis(): boolean {
    return this.hasChoiceValue('diagnosis');
  }

  getDiagnosisCodeableConcept(): CodeableConcept | undefined {
    return this.diagnosisCodeableConcept;
  }

  /** Sets `diagnosis[x]` as CodeableConcept and clears every other type of it. */
  setDiagnosisCodeableConcept(diagnosisCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('diagnosisCodeableConcept', diagnosisCodeableConcept);
  }

  hasDiagnosisCodeableConcept(): boolean {
    return this.hasFieldValue('diagnosisCodeableConcept');
  }

  getDiagnosisReference(): Reference | undefined {
    return this.diagnosisReference;
  }

  /** Sets `diagnosis[x]` as Reference and clears every other type of it. */
  setDiagnosisReference(diagnosisReference: Reference | undefined): this {
    return this.setFieldValue('diagnosisReference', diagnosisReference);
  }

  hasDiagnosisReference(): boolean {
    return this.hasFieldValue('diagnosisReference');
  }

  /** Timing or nature of the diagnosis (0..*) Never undefined; an empty list is created when absent. */
  getType(): CodeableConcept[] {
    if (this.type === undefined) {
      this.type = [];
    }
    return this.type;
  }

  setType(type: CodeableConcept[] | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Appends a new, empty CodeableConcept to `type` and returns it so it can be filled in. */
  addType(): CodeableConcept;
  /** Appends the given CodeableConcept to `type` and returns this object for chaining. */
  addType(codeableConcept: CodeableConcept): this;
  addType(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('type', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('type', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `type`. One is added when the list is empty. */
  getTypeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getType()[0];
    return firstCodeableConcept === undefined ? this.addType() : firstCodeableConcept;
  }

  /** Present on admission (0..1) Created when absent. */
  getOnAdmission(): CodeableConcept {
    if (this.onAdmission === undefined) {
      this.onAdmission = new CodeableConcept();
    }
    return this.onAdmission;
  }

  setOnAdmission(onAdmission: CodeableConcept | undefined): this {
    return this.setFieldValue('onAdmission', onAdmission);
  }

  hasOnAdmission(): boolean {
    return this.hasFieldValue('onAdmission');
  }

  /** Package billing code (0..1) Created when absent. */
  getPackageCode(): CodeableConcept {
    if (this.packageCode === undefined) {
      this.packageCode = new CodeableConcept();
    }
    return this.packageCode;
  }

  setPackageCode(packageCode: CodeableConcept | undefined): this {
    return this.setFieldValue('packageCode', packageCode);
  }

  hasPackageCode(): boolean {
    return this.hasFieldValue('packageCode');
  }
}

modelTypeRegistry.register('ExplanationOfBenefitDiagnosis', ExplanationOfBenefitDiagnosis, false);

/**
 * Clinical procedures performed
 */
export class ExplanationOfBenefitProcedure extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'sequence',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sequence', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'date',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'date', typeCode: 'dateTime' }],
    },
    {
      elementName: 'procedure',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'procedureCodeableConcept', typeCode: 'CodeableConcept' },
        {
          jsonKey: 'procedureReference',
          typeCode: 'Reference',
          targetResourceTypes: ['Procedure'],
        },
      ],
    },
    {
      elementName: 'udi',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'udi', typeCode: 'Reference', targetResourceTypes: ['Device'] }],
    },
  ];

  /** Procedure instance identifier (1..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;

  /** Category of Procedure (0..*) */
  type?: CodeableConcept[];

  /** When the procedure was performed (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Specific clinical procedure (1..1) */
  procedureCodeableConcept?: CodeableConcept;
  /** Specific clinical procedure (1..1) */
  procedureReference?: Reference;

  /** Unique device identifier (0..*) */
  udi?: Reference[];

  override fhirType(): string {
    return 'ExplanationOfBenefit.procedure';
  }

  /** FHIR JSON for this ExplanationOfBenefitProcedure, typed as the plain `ExplanationOfBenefitProcedure` data type. */
  override toJSON(): plainTypes.ExplanationOfBenefitProcedure {
    return this.serialize() as plainTypes.ExplanationOfBenefitProcedure;
  }

  /** Procedure instance identifier (1..1) */
  getSequence(): number | undefined {
    return this.sequence;
  }

  /** Sets `sequence`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setSequence(sequence: number | undefined): this {
    return this.setFieldValue('sequence', sequence);
  }

  hasSequence(): boolean {
    return this.hasFieldValue('sequence');
  }

  /** The element carrying the id and extensions of `sequence`. Created when absent. */
  getSequenceElement(): Element {
    if (this._sequence === undefined) {
      this._sequence = new Element();
    }
    return this._sequence;
  }

  setSequenceElement(sequenceElement: Element | undefined): this {
    this._sequence = sequenceElement;
    return this;
  }

  /** Category of Procedure (0..*) Never undefined; an empty list is created when absent. */
  getType(): CodeableConcept[] {
    if (this.type === undefined) {
      this.type = [];
    }
    return this.type;
  }

  setType(type: CodeableConcept[] | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Appends a new, empty CodeableConcept to `type` and returns it so it can be filled in. */
  addType(): CodeableConcept;
  /** Appends the given CodeableConcept to `type` and returns this object for chaining. */
  addType(codeableConcept: CodeableConcept): this;
  addType(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('type', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('type', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `type`. One is added when the list is empty. */
  getTypeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getType()[0];
    return firstCodeableConcept === undefined ? this.addType() : firstCodeableConcept;
  }

  /** When the procedure was performed (0..1) */
  getDate(): string | undefined {
    return this.date;
  }

  /** Sets `date`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setDate(date: string | undefined): this {
    return this.setFieldValue('date', date);
  }

  hasDate(): boolean {
    return this.hasFieldValue('date');
  }

  /** The element carrying the id and extensions of `date`. Created when absent. */
  getDateElement(): Element {
    if (this._date === undefined) {
      this._date = new Element();
    }
    return this._date;
  }

  setDateElement(dateElement: Element | undefined): this {
    this._date = dateElement;
    return this;
  }

  /** Specific clinical procedure (1..1) Whichever type of `procedure[x]` is set. */
  getProcedure(): CodeableConcept | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | Reference>('procedure');
  }

  /** True when any type of `procedure[x]` is set. */
  hasProcedure(): boolean {
    return this.hasChoiceValue('procedure');
  }

  getProcedureCodeableConcept(): CodeableConcept | undefined {
    return this.procedureCodeableConcept;
  }

  /** Sets `procedure[x]` as CodeableConcept and clears every other type of it. */
  setProcedureCodeableConcept(procedureCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('procedureCodeableConcept', procedureCodeableConcept);
  }

  hasProcedureCodeableConcept(): boolean {
    return this.hasFieldValue('procedureCodeableConcept');
  }

  getProcedureReference(): Reference | undefined {
    return this.procedureReference;
  }

  /** Sets `procedure[x]` as Reference and clears every other type of it. */
  setProcedureReference(procedureReference: Reference | undefined): this {
    return this.setFieldValue('procedureReference', procedureReference);
  }

  hasProcedureReference(): boolean {
    return this.hasFieldValue('procedureReference');
  }

  /** Unique device identifier (0..*) Never undefined; an empty list is created when absent. */
  getUdi(): Reference[] {
    if (this.udi === undefined) {
      this.udi = [];
    }
    return this.udi;
  }

  setUdi(udi: Reference[] | undefined): this {
    return this.setFieldValue('udi', udi);
  }

  hasUdi(): boolean {
    return this.hasFieldValue('udi');
  }

  /** Appends a new, empty Reference to `udi` and returns it so it can be filled in. */
  addUdi(): Reference;
  /** Appends the given Reference to `udi` and returns this object for chaining. */
  addUdi(reference: Reference): this;
  addUdi(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('udi', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('udi', createdReference);
    return createdReference;
  }

  /** The first Reference of `udi`. One is added when the list is empty. */
  getUdiFirstRep(): Reference {
    const firstReference = this.getUdi()[0];
    return firstReference === undefined ? this.addUdi() : firstReference;
  }
}

modelTypeRegistry.register('ExplanationOfBenefitProcedure', ExplanationOfBenefitProcedure, false);

/**
 * Patient insurance information
 */
export class ExplanationOfBenefitInsurance extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'focal',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'focal', typeCode: 'boolean' }],
    },
    {
      elementName: 'coverage',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'coverage', typeCode: 'Reference', targetResourceTypes: ['Coverage'] }],
    },
    {
      elementName: 'preAuthRef',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'preAuthRef', typeCode: 'string' }],
    },
  ];

  /** Coverage to be used for adjudication (1..1) */
  focal?: boolean;
  /** Id and extensions of the primitive `focal`. */
  _focal?: Element;

  /** Insurance information (1..1) */
  coverage?: Reference;

  /** Prior authorization reference number (0..*) */
  preAuthRef?: string[];
  /** Id and extensions of the primitive `preAuthRef`. */
  _preAuthRef?: (Element | null)[];

  override fhirType(): string {
    return 'ExplanationOfBenefit.insurance';
  }

  /** FHIR JSON for this ExplanationOfBenefitInsurance, typed as the plain `ExplanationOfBenefitInsurance` data type. */
  override toJSON(): plainTypes.ExplanationOfBenefitInsurance {
    return this.serialize() as plainTypes.ExplanationOfBenefitInsurance;
  }

  /** Coverage to be used for adjudication (1..1) */
  getFocal(): boolean | undefined {
    return this.focal;
  }

  /** Sets `focal`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setFocal(focal: boolean | undefined): this {
    return this.setFieldValue('focal', focal);
  }

  hasFocal(): boolean {
    return this.hasFieldValue('focal');
  }

  /** The element carrying the id and extensions of `focal`. Created when absent. */
  getFocalElement(): Element {
    if (this._focal === undefined) {
      this._focal = new Element();
    }
    return this._focal;
  }

  setFocalElement(focalElement: Element | undefined): this {
    this._focal = focalElement;
    return this;
  }

  /** Insurance information (1..1) Created when absent. */
  getCoverage(): Reference {
    if (this.coverage === undefined) {
      this.coverage = new Reference();
    }
    return this.coverage;
  }

  setCoverage(coverage: Reference | undefined): this {
    return this.setFieldValue('coverage', coverage);
  }

  hasCoverage(): boolean {
    return this.hasFieldValue('coverage');
  }

  /** Prior authorization reference number (0..*) Never undefined; an empty list is created when absent. */
  getPreAuthRef(): string[] {
    if (this.preAuthRef === undefined) {
      this.preAuthRef = [];
    }
    return this.preAuthRef;
  }

  setPreAuthRef(preAuthRef: string[] | undefined): this {
    return this.setFieldValue('preAuthRef', preAuthRef);
  }

  hasPreAuthRef(): boolean {
    return this.hasFieldValue('preAuthRef');
  }

  /** Appends one value to `preAuthRef`. Throws a FhirModelError when it is not a valid FHIR string. */
  addPreAuthRef(preAuthRef: string): this {
    return this.addFieldValue('preAuthRef', preAuthRef);
  }
}

modelTypeRegistry.register('ExplanationOfBenefitInsurance', ExplanationOfBenefitInsurance, false);

/**
 * Details of the event
 */
export class ExplanationOfBenefitAccident extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'date',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'date', typeCode: 'date' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'location',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'locationAddress', typeCode: 'Address' },
        { jsonKey: 'locationReference', typeCode: 'Reference', targetResourceTypes: ['Location'] },
      ],
    },
  ];

  /** When the incident occurred (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** The nature of the accident (0..1) */
  type?: CodeableConcept;

  /** Where the event occurred (0..1) */
  locationAddress?: Address;
  /** Where the event occurred (0..1) */
  locationReference?: Reference;

  override fhirType(): string {
    return 'ExplanationOfBenefit.accident';
  }

  /** FHIR JSON for this ExplanationOfBenefitAccident, typed as the plain `ExplanationOfBenefitAccident` data type. */
  override toJSON(): plainTypes.ExplanationOfBenefitAccident {
    return this.serialize() as plainTypes.ExplanationOfBenefitAccident;
  }

  /** When the incident occurred (0..1) */
  getDate(): string | undefined {
    return this.date;
  }

  /** Sets `date`. Throws a FhirModelError when the value is not a valid FHIR date. */
  setDate(date: string | undefined): this {
    return this.setFieldValue('date', date);
  }

  hasDate(): boolean {
    return this.hasFieldValue('date');
  }

  /** The element carrying the id and extensions of `date`. Created when absent. */
  getDateElement(): Element {
    if (this._date === undefined) {
      this._date = new Element();
    }
    return this._date;
  }

  setDateElement(dateElement: Element | undefined): this {
    this._date = dateElement;
    return this;
  }

  /** The nature of the accident (0..1) Created when absent. */
  getType(): CodeableConcept {
    if (this.type === undefined) {
      this.type = new CodeableConcept();
    }
    return this.type;
  }

  setType(type: CodeableConcept | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Where the event occurred (0..1) Whichever type of `location[x]` is set. */
  getLocation(): Address | Reference | undefined {
    return this.getChoiceValue<Address | Reference>('location');
  }

  /** True when any type of `location[x]` is set. */
  hasLocation(): boolean {
    return this.hasChoiceValue('location');
  }

  getLocationAddress(): Address | undefined {
    return this.locationAddress;
  }

  /** Sets `location[x]` as Address and clears every other type of it. */
  setLocationAddress(locationAddress: Address | undefined): this {
    return this.setFieldValue('locationAddress', locationAddress);
  }

  hasLocationAddress(): boolean {
    return this.hasFieldValue('locationAddress');
  }

  getLocationReference(): Reference | undefined {
    return this.locationReference;
  }

  /** Sets `location[x]` as Reference and clears every other type of it. */
  setLocationReference(locationReference: Reference | undefined): this {
    return this.setFieldValue('locationReference', locationReference);
  }

  hasLocationReference(): boolean {
    return this.hasFieldValue('locationReference');
  }
}

modelTypeRegistry.register('ExplanationOfBenefitAccident', ExplanationOfBenefitAccident, false);

/**
 * Product or service provided
 */
export class ExplanationOfBenefitItem extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'sequence',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sequence', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'careTeamSequence',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'careTeamSequence', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'diagnosisSequence',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'diagnosisSequence', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'procedureSequence',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'procedureSequence', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'informationSequence',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'informationSequence', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'revenue',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'revenue', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'category',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'productOrService',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'productOrService', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'modifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'modifier', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'programCode',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'programCode', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'serviced',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'servicedDate', typeCode: 'date' },
        { jsonKey: 'servicedPeriod', typeCode: 'Period' },
      ],
    },
    {
      elementName: 'location',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'locationCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'locationAddress', typeCode: 'Address' },
        { jsonKey: 'locationReference', typeCode: 'Reference', targetResourceTypes: ['Location'] },
      ],
    },
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'unitPrice',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'unitPrice', typeCode: 'Money' }],
    },
    {
      elementName: 'factor',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'factor', typeCode: 'decimal' }],
    },
    {
      elementName: 'net',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'net', typeCode: 'Money' }],
    },
    {
      elementName: 'udi',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'udi', typeCode: 'Reference', targetResourceTypes: ['Device'] }],
    },
    {
      elementName: 'bodySite',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'bodySite', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'subSite',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'subSite', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'encounter',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'encounter', typeCode: 'Reference', targetResourceTypes: ['Encounter'] }],
    },
    {
      elementName: 'noteNumber',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'noteNumber', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'adjudication',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'adjudication', typeCode: 'ExplanationOfBenefitItemAdjudication' }],
    },
    {
      elementName: 'detail',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'detail', typeCode: 'ExplanationOfBenefitItemDetail' }],
    },
  ];

  /** Item instance identifier (1..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;

  /** Applicable care team members (0..*) */
  careTeamSequence?: number[];
  /** Id and extensions of the primitive `careTeamSequence`. */
  _careTeamSequence?: (Element | null)[];

  /** Applicable diagnoses (0..*) */
  diagnosisSequence?: number[];
  /** Id and extensions of the primitive `diagnosisSequence`. */
  _diagnosisSequence?: (Element | null)[];

  /** Applicable procedures (0..*) */
  procedureSequence?: number[];
  /** Id and extensions of the primitive `procedureSequence`. */
  _procedureSequence?: (Element | null)[];

  /** Applicable exception and supporting information (0..*) */
  informationSequence?: number[];
  /** Id and extensions of the primitive `informationSequence`. */
  _informationSequence?: (Element | null)[];

  /** Revenue or cost center code (0..1) */
  revenue?: CodeableConcept;

  /** Benefit classification (0..1) */
  category?: CodeableConcept;

  /** Billing, service, product, or drug code (1..1) */
  productOrService?: CodeableConcept;

  /** Product or service billing modifiers (0..*) */
  modifier?: CodeableConcept[];

  /** Program the product or service is provided under (0..*) */
  programCode?: CodeableConcept[];

  /** Date or dates of service or product delivery (0..1) */
  servicedDate?: string;
  /** Id and extensions of the primitive `servicedDate`. */
  _servicedDate?: Element;
  /** Date or dates of service or product delivery (0..1) */
  servicedPeriod?: Period;

  /** Place of service or where product was supplied (0..1) */
  locationCodeableConcept?: CodeableConcept;
  /** Place of service or where product was supplied (0..1) */
  locationAddress?: Address;
  /** Place of service or where product was supplied (0..1) */
  locationReference?: Reference;

  /** Count of products or services (0..1) */
  quantity?: Quantity;

  /** Fee, charge or cost per item (0..1) */
  unitPrice?: Money;

  /** Price scaling factor (0..1) */
  factor?: number;
  /** Id and extensions of the primitive `factor`. */
  _factor?: Element;

  /** Total item cost (0..1) */
  net?: Money;

  /** Unique device identifier (0..*) */
  udi?: Reference[];

  /** Anatomical location (0..1) */
  bodySite?: CodeableConcept;

  /** Anatomical sub-location (0..*) */
  subSite?: CodeableConcept[];

  /** Encounters related to this billed item (0..*) */
  encounter?: Reference[];

  /** Applicable note numbers (0..*) */
  noteNumber?: number[];
  /** Id and extensions of the primitive `noteNumber`. */
  _noteNumber?: (Element | null)[];

  /** Adjudication details (0..*) */
  adjudication?: ExplanationOfBenefitItemAdjudication[];

  /** Additional items (0..*) */
  detail?: ExplanationOfBenefitItemDetail[];

  override fhirType(): string {
    return 'ExplanationOfBenefit.item';
  }

  /** FHIR JSON for this ExplanationOfBenefitItem, typed as the plain `ExplanationOfBenefitItem` data type. */
  override toJSON(): plainTypes.ExplanationOfBenefitItem {
    return this.serialize() as plainTypes.ExplanationOfBenefitItem;
  }

  /** Item instance identifier (1..1) */
  getSequence(): number | undefined {
    return this.sequence;
  }

  /** Sets `sequence`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setSequence(sequence: number | undefined): this {
    return this.setFieldValue('sequence', sequence);
  }

  hasSequence(): boolean {
    return this.hasFieldValue('sequence');
  }

  /** The element carrying the id and extensions of `sequence`. Created when absent. */
  getSequenceElement(): Element {
    if (this._sequence === undefined) {
      this._sequence = new Element();
    }
    return this._sequence;
  }

  setSequenceElement(sequenceElement: Element | undefined): this {
    this._sequence = sequenceElement;
    return this;
  }

  /** Applicable care team members (0..*) Never undefined; an empty list is created when absent. */
  getCareTeamSequence(): number[] {
    if (this.careTeamSequence === undefined) {
      this.careTeamSequence = [];
    }
    return this.careTeamSequence;
  }

  setCareTeamSequence(careTeamSequence: number[] | undefined): this {
    return this.setFieldValue('careTeamSequence', careTeamSequence);
  }

  hasCareTeamSequence(): boolean {
    return this.hasFieldValue('careTeamSequence');
  }

  /** Appends one value to `careTeamSequence`. Throws a FhirModelError when it is not a valid FHIR positiveInt. */
  addCareTeamSequence(careTeamSequence: number): this {
    return this.addFieldValue('careTeamSequence', careTeamSequence);
  }

  /** Applicable diagnoses (0..*) Never undefined; an empty list is created when absent. */
  getDiagnosisSequence(): number[] {
    if (this.diagnosisSequence === undefined) {
      this.diagnosisSequence = [];
    }
    return this.diagnosisSequence;
  }

  setDiagnosisSequence(diagnosisSequence: number[] | undefined): this {
    return this.setFieldValue('diagnosisSequence', diagnosisSequence);
  }

  hasDiagnosisSequence(): boolean {
    return this.hasFieldValue('diagnosisSequence');
  }

  /** Appends one value to `diagnosisSequence`. Throws a FhirModelError when it is not a valid FHIR positiveInt. */
  addDiagnosisSequence(diagnosisSequence: number): this {
    return this.addFieldValue('diagnosisSequence', diagnosisSequence);
  }

  /** Applicable procedures (0..*) Never undefined; an empty list is created when absent. */
  getProcedureSequence(): number[] {
    if (this.procedureSequence === undefined) {
      this.procedureSequence = [];
    }
    return this.procedureSequence;
  }

  setProcedureSequence(procedureSequence: number[] | undefined): this {
    return this.setFieldValue('procedureSequence', procedureSequence);
  }

  hasProcedureSequence(): boolean {
    return this.hasFieldValue('procedureSequence');
  }

  /** Appends one value to `procedureSequence`. Throws a FhirModelError when it is not a valid FHIR positiveInt. */
  addProcedureSequence(procedureSequence: number): this {
    return this.addFieldValue('procedureSequence', procedureSequence);
  }

  /** Applicable exception and supporting information (0..*) Never undefined; an empty list is created when absent. */
  getInformationSequence(): number[] {
    if (this.informationSequence === undefined) {
      this.informationSequence = [];
    }
    return this.informationSequence;
  }

  setInformationSequence(informationSequence: number[] | undefined): this {
    return this.setFieldValue('informationSequence', informationSequence);
  }

  hasInformationSequence(): boolean {
    return this.hasFieldValue('informationSequence');
  }

  /** Appends one value to `informationSequence`. Throws a FhirModelError when it is not a valid FHIR positiveInt. */
  addInformationSequence(informationSequence: number): this {
    return this.addFieldValue('informationSequence', informationSequence);
  }

  /** Revenue or cost center code (0..1) Created when absent. */
  getRevenue(): CodeableConcept {
    if (this.revenue === undefined) {
      this.revenue = new CodeableConcept();
    }
    return this.revenue;
  }

  setRevenue(revenue: CodeableConcept | undefined): this {
    return this.setFieldValue('revenue', revenue);
  }

  hasRevenue(): boolean {
    return this.hasFieldValue('revenue');
  }

  /** Benefit classification (0..1) Created when absent. */
  getCategory(): CodeableConcept {
    if (this.category === undefined) {
      this.category = new CodeableConcept();
    }
    return this.category;
  }

  setCategory(category: CodeableConcept | undefined): this {
    return this.setFieldValue('category', category);
  }

  hasCategory(): boolean {
    return this.hasFieldValue('category');
  }

  /** Billing, service, product, or drug code (1..1) Created when absent. */
  getProductOrService(): CodeableConcept {
    if (this.productOrService === undefined) {
      this.productOrService = new CodeableConcept();
    }
    return this.productOrService;
  }

  setProductOrService(productOrService: CodeableConcept | undefined): this {
    return this.setFieldValue('productOrService', productOrService);
  }

  hasProductOrService(): boolean {
    return this.hasFieldValue('productOrService');
  }

  /** Product or service billing modifiers (0..*) Never undefined; an empty list is created when absent. */
  getModifier(): CodeableConcept[] {
    if (this.modifier === undefined) {
      this.modifier = [];
    }
    return this.modifier;
  }

  setModifier(modifier: CodeableConcept[] | undefined): this {
    return this.setFieldValue('modifier', modifier);
  }

  hasModifier(): boolean {
    return this.hasFieldValue('modifier');
  }

  /** Appends a new, empty CodeableConcept to `modifier` and returns it so it can be filled in. */
  addModifier(): CodeableConcept;
  /** Appends the given CodeableConcept to `modifier` and returns this object for chaining. */
  addModifier(codeableConcept: CodeableConcept): this;
  addModifier(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('modifier', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('modifier', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `modifier`. One is added when the list is empty. */
  getModifierFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getModifier()[0];
    return firstCodeableConcept === undefined ? this.addModifier() : firstCodeableConcept;
  }

  /** Program the product or service is provided under (0..*) Never undefined; an empty list is created when absent. */
  getProgramCode(): CodeableConcept[] {
    if (this.programCode === undefined) {
      this.programCode = [];
    }
    return this.programCode;
  }

  setProgramCode(programCode: CodeableConcept[] | undefined): this {
    return this.setFieldValue('programCode', programCode);
  }

  hasProgramCode(): boolean {
    return this.hasFieldValue('programCode');
  }

  /** Appends a new, empty CodeableConcept to `programCode` and returns it so it can be filled in. */
  addProgramCode(): CodeableConcept;
  /** Appends the given CodeableConcept to `programCode` and returns this object for chaining. */
  addProgramCode(codeableConcept: CodeableConcept): this;
  addProgramCode(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('programCode', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('programCode', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `programCode`. One is added when the list is empty. */
  getProgramCodeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getProgramCode()[0];
    return firstCodeableConcept === undefined ? this.addProgramCode() : firstCodeableConcept;
  }

  /** Date or dates of service or product delivery (0..1) Whichever type of `serviced[x]` is set. */
  getServiced(): string | Period | undefined {
    return this.getChoiceValue<string | Period>('serviced');
  }

  /** True when any type of `serviced[x]` is set. */
  hasServiced(): boolean {
    return this.hasChoiceValue('serviced');
  }

  getServicedDate(): string | undefined {
    return this.servicedDate;
  }

  /** Sets `serviced[x]` as date and clears every other type of it. */
  setServicedDate(servicedDate: string | undefined): this {
    return this.setFieldValue('servicedDate', servicedDate);
  }

  hasServicedDate(): boolean {
    return this.hasFieldValue('servicedDate');
  }

  getServicedPeriod(): Period | undefined {
    return this.servicedPeriod;
  }

  /** Sets `serviced[x]` as Period and clears every other type of it. */
  setServicedPeriod(servicedPeriod: Period | undefined): this {
    return this.setFieldValue('servicedPeriod', servicedPeriod);
  }

  hasServicedPeriod(): boolean {
    return this.hasFieldValue('servicedPeriod');
  }

  /** Place of service or where product was supplied (0..1) Whichever type of `location[x]` is set. */
  getLocation(): CodeableConcept | Address | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | Address | Reference>('location');
  }

  /** True when any type of `location[x]` is set. */
  hasLocation(): boolean {
    return this.hasChoiceValue('location');
  }

  getLocationCodeableConcept(): CodeableConcept | undefined {
    return this.locationCodeableConcept;
  }

  /** Sets `location[x]` as CodeableConcept and clears every other type of it. */
  setLocationCodeableConcept(locationCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('locationCodeableConcept', locationCodeableConcept);
  }

  hasLocationCodeableConcept(): boolean {
    return this.hasFieldValue('locationCodeableConcept');
  }

  getLocationAddress(): Address | undefined {
    return this.locationAddress;
  }

  /** Sets `location[x]` as Address and clears every other type of it. */
  setLocationAddress(locationAddress: Address | undefined): this {
    return this.setFieldValue('locationAddress', locationAddress);
  }

  hasLocationAddress(): boolean {
    return this.hasFieldValue('locationAddress');
  }

  getLocationReference(): Reference | undefined {
    return this.locationReference;
  }

  /** Sets `location[x]` as Reference and clears every other type of it. */
  setLocationReference(locationReference: Reference | undefined): this {
    return this.setFieldValue('locationReference', locationReference);
  }

  hasLocationReference(): boolean {
    return this.hasFieldValue('locationReference');
  }

  /** Count of products or services (0..1) Created when absent. */
  getQuantity(): Quantity {
    if (this.quantity === undefined) {
      this.quantity = new Quantity();
    }
    return this.quantity;
  }

  setQuantity(quantity: Quantity | undefined): this {
    return this.setFieldValue('quantity', quantity);
  }

  hasQuantity(): boolean {
    return this.hasFieldValue('quantity');
  }

  /** Fee, charge or cost per item (0..1) Created when absent. */
  getUnitPrice(): Money {
    if (this.unitPrice === undefined) {
      this.unitPrice = new Money();
    }
    return this.unitPrice;
  }

  setUnitPrice(unitPrice: Money | undefined): this {
    return this.setFieldValue('unitPrice', unitPrice);
  }

  hasUnitPrice(): boolean {
    return this.hasFieldValue('unitPrice');
  }

  /** Price scaling factor (0..1) */
  getFactor(): number | undefined {
    return this.factor;
  }

  /** Sets `factor`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setFactor(factor: number | undefined): this {
    return this.setFieldValue('factor', factor);
  }

  hasFactor(): boolean {
    return this.hasFieldValue('factor');
  }

  /** The element carrying the id and extensions of `factor`. Created when absent. */
  getFactorElement(): Element {
    if (this._factor === undefined) {
      this._factor = new Element();
    }
    return this._factor;
  }

  setFactorElement(factorElement: Element | undefined): this {
    this._factor = factorElement;
    return this;
  }

  /** Total item cost (0..1) Created when absent. */
  getNet(): Money {
    if (this.net === undefined) {
      this.net = new Money();
    }
    return this.net;
  }

  setNet(net: Money | undefined): this {
    return this.setFieldValue('net', net);
  }

  hasNet(): boolean {
    return this.hasFieldValue('net');
  }

  /** Unique device identifier (0..*) Never undefined; an empty list is created when absent. */
  getUdi(): Reference[] {
    if (this.udi === undefined) {
      this.udi = [];
    }
    return this.udi;
  }

  setUdi(udi: Reference[] | undefined): this {
    return this.setFieldValue('udi', udi);
  }

  hasUdi(): boolean {
    return this.hasFieldValue('udi');
  }

  /** Appends a new, empty Reference to `udi` and returns it so it can be filled in. */
  addUdi(): Reference;
  /** Appends the given Reference to `udi` and returns this object for chaining. */
  addUdi(reference: Reference): this;
  addUdi(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('udi', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('udi', createdReference);
    return createdReference;
  }

  /** The first Reference of `udi`. One is added when the list is empty. */
  getUdiFirstRep(): Reference {
    const firstReference = this.getUdi()[0];
    return firstReference === undefined ? this.addUdi() : firstReference;
  }

  /** Anatomical location (0..1) Created when absent. */
  getBodySite(): CodeableConcept {
    if (this.bodySite === undefined) {
      this.bodySite = new CodeableConcept();
    }
    return this.bodySite;
  }

  setBodySite(bodySite: CodeableConcept | undefined): this {
    return this.setFieldValue('bodySite', bodySite);
  }

  hasBodySite(): boolean {
    return this.hasFieldValue('bodySite');
  }

  /** Anatomical sub-location (0..*) Never undefined; an empty list is created when absent. */
  getSubSite(): CodeableConcept[] {
    if (this.subSite === undefined) {
      this.subSite = [];
    }
    return this.subSite;
  }

  setSubSite(subSite: CodeableConcept[] | undefined): this {
    return this.setFieldValue('subSite', subSite);
  }

  hasSubSite(): boolean {
    return this.hasFieldValue('subSite');
  }

  /** Appends a new, empty CodeableConcept to `subSite` and returns it so it can be filled in. */
  addSubSite(): CodeableConcept;
  /** Appends the given CodeableConcept to `subSite` and returns this object for chaining. */
  addSubSite(codeableConcept: CodeableConcept): this;
  addSubSite(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('subSite', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('subSite', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `subSite`. One is added when the list is empty. */
  getSubSiteFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getSubSite()[0];
    return firstCodeableConcept === undefined ? this.addSubSite() : firstCodeableConcept;
  }

  /** Encounters related to this billed item (0..*) Never undefined; an empty list is created when absent. */
  getEncounter(): Reference[] {
    if (this.encounter === undefined) {
      this.encounter = [];
    }
    return this.encounter;
  }

  setEncounter(encounter: Reference[] | undefined): this {
    return this.setFieldValue('encounter', encounter);
  }

  hasEncounter(): boolean {
    return this.hasFieldValue('encounter');
  }

  /** Appends a new, empty Reference to `encounter` and returns it so it can be filled in. */
  addEncounter(): Reference;
  /** Appends the given Reference to `encounter` and returns this object for chaining. */
  addEncounter(reference: Reference): this;
  addEncounter(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('encounter', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('encounter', createdReference);
    return createdReference;
  }

  /** The first Reference of `encounter`. One is added when the list is empty. */
  getEncounterFirstRep(): Reference {
    const firstReference = this.getEncounter()[0];
    return firstReference === undefined ? this.addEncounter() : firstReference;
  }

  /** Applicable note numbers (0..*) Never undefined; an empty list is created when absent. */
  getNoteNumber(): number[] {
    if (this.noteNumber === undefined) {
      this.noteNumber = [];
    }
    return this.noteNumber;
  }

  setNoteNumber(noteNumber: number[] | undefined): this {
    return this.setFieldValue('noteNumber', noteNumber);
  }

  hasNoteNumber(): boolean {
    return this.hasFieldValue('noteNumber');
  }

  /** Appends one value to `noteNumber`. Throws a FhirModelError when it is not a valid FHIR positiveInt. */
  addNoteNumber(noteNumber: number): this {
    return this.addFieldValue('noteNumber', noteNumber);
  }

  /** Adjudication details (0..*) Never undefined; an empty list is created when absent. */
  getAdjudication(): ExplanationOfBenefitItemAdjudication[] {
    if (this.adjudication === undefined) {
      this.adjudication = [];
    }
    return this.adjudication;
  }

  setAdjudication(adjudication: ExplanationOfBenefitItemAdjudication[] | undefined): this {
    return this.setFieldValue('adjudication', adjudication);
  }

  hasAdjudication(): boolean {
    return this.hasFieldValue('adjudication');
  }

  /** Appends a new, empty ExplanationOfBenefitItemAdjudication to `adjudication` and returns it so it can be filled in. */
  addAdjudication(): ExplanationOfBenefitItemAdjudication;
  /** Appends the given ExplanationOfBenefitItemAdjudication to `adjudication` and returns this object for chaining. */
  addAdjudication(explanationOfBenefitItemAdjudication: ExplanationOfBenefitItemAdjudication): this;
  addAdjudication(
    explanationOfBenefitItemAdjudication?: ExplanationOfBenefitItemAdjudication
  ): ExplanationOfBenefitItemAdjudication | this {
    if (explanationOfBenefitItemAdjudication !== undefined) {
      return this.addFieldValue('adjudication', explanationOfBenefitItemAdjudication);
    }
    const createdExplanationOfBenefitItemAdjudication = new ExplanationOfBenefitItemAdjudication();
    this.addFieldValue('adjudication', createdExplanationOfBenefitItemAdjudication);
    return createdExplanationOfBenefitItemAdjudication;
  }

  /** The first ExplanationOfBenefitItemAdjudication of `adjudication`. One is added when the list is empty. */
  getAdjudicationFirstRep(): ExplanationOfBenefitItemAdjudication {
    const firstExplanationOfBenefitItemAdjudication = this.getAdjudication()[0];
    return firstExplanationOfBenefitItemAdjudication === undefined
      ? this.addAdjudication()
      : firstExplanationOfBenefitItemAdjudication;
  }

  /** Additional items (0..*) Never undefined; an empty list is created when absent. */
  getDetail(): ExplanationOfBenefitItemDetail[] {
    if (this.detail === undefined) {
      this.detail = [];
    }
    return this.detail;
  }

  setDetail(detail: ExplanationOfBenefitItemDetail[] | undefined): this {
    return this.setFieldValue('detail', detail);
  }

  hasDetail(): boolean {
    return this.hasFieldValue('detail');
  }

  /** Appends a new, empty ExplanationOfBenefitItemDetail to `detail` and returns it so it can be filled in. */
  addDetail(): ExplanationOfBenefitItemDetail;
  /** Appends the given ExplanationOfBenefitItemDetail to `detail` and returns this object for chaining. */
  addDetail(explanationOfBenefitItemDetail: ExplanationOfBenefitItemDetail): this;
  addDetail(
    explanationOfBenefitItemDetail?: ExplanationOfBenefitItemDetail
  ): ExplanationOfBenefitItemDetail | this {
    if (explanationOfBenefitItemDetail !== undefined) {
      return this.addFieldValue('detail', explanationOfBenefitItemDetail);
    }
    const createdExplanationOfBenefitItemDetail = new ExplanationOfBenefitItemDetail();
    this.addFieldValue('detail', createdExplanationOfBenefitItemDetail);
    return createdExplanationOfBenefitItemDetail;
  }

  /** The first ExplanationOfBenefitItemDetail of `detail`. One is added when the list is empty. */
  getDetailFirstRep(): ExplanationOfBenefitItemDetail {
    const firstExplanationOfBenefitItemDetail = this.getDetail()[0];
    return firstExplanationOfBenefitItemDetail === undefined
      ? this.addDetail()
      : firstExplanationOfBenefitItemDetail;
  }
}

modelTypeRegistry.register('ExplanationOfBenefitItem', ExplanationOfBenefitItem, false);

/**
 * Adjudication details
 */
export class ExplanationOfBenefitItemAdjudication extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'category',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'reason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reason', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'amount',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'amount', typeCode: 'Money' }],
    },
    {
      elementName: 'value',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'value', typeCode: 'decimal' }],
    },
  ];

  /** Type of adjudication information (1..1) */
  category?: CodeableConcept;

  /** Explanation of adjudication outcome (0..1) */
  reason?: CodeableConcept;

  /** Monetary amount (0..1) */
  amount?: Money;

  /** Non-monitary value (0..1) */
  value?: number;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;

  override fhirType(): string {
    return 'ExplanationOfBenefit.item.adjudication';
  }

  /** FHIR JSON for this ExplanationOfBenefitItemAdjudication, typed as the plain `ExplanationOfBenefitAdjudication` data type. */
  override toJSON(): plainTypes.ExplanationOfBenefitAdjudication {
    return this.serialize() as plainTypes.ExplanationOfBenefitAdjudication;
  }

  /** Type of adjudication information (1..1) Created when absent. */
  getCategory(): CodeableConcept {
    if (this.category === undefined) {
      this.category = new CodeableConcept();
    }
    return this.category;
  }

  setCategory(category: CodeableConcept | undefined): this {
    return this.setFieldValue('category', category);
  }

  hasCategory(): boolean {
    return this.hasFieldValue('category');
  }

  /** Explanation of adjudication outcome (0..1) Created when absent. */
  getReason(): CodeableConcept {
    if (this.reason === undefined) {
      this.reason = new CodeableConcept();
    }
    return this.reason;
  }

  setReason(reason: CodeableConcept | undefined): this {
    return this.setFieldValue('reason', reason);
  }

  hasReason(): boolean {
    return this.hasFieldValue('reason');
  }

  /** Monetary amount (0..1) Created when absent. */
  getAmount(): Money {
    if (this.amount === undefined) {
      this.amount = new Money();
    }
    return this.amount;
  }

  setAmount(amount: Money | undefined): this {
    return this.setFieldValue('amount', amount);
  }

  hasAmount(): boolean {
    return this.hasFieldValue('amount');
  }

  /** Non-monitary value (0..1) */
  getValue(): number | undefined {
    return this.value;
  }

  /** Sets `value`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setValue(value: number | undefined): this {
    return this.setFieldValue('value', value);
  }

  hasValue(): boolean {
    return this.hasFieldValue('value');
  }

  /** The element carrying the id and extensions of `value`. Created when absent. */
  getValueElement(): Element {
    if (this._value === undefined) {
      this._value = new Element();
    }
    return this._value;
  }

  setValueElement(valueElement: Element | undefined): this {
    this._value = valueElement;
    return this;
  }
}

modelTypeRegistry.register(
  'ExplanationOfBenefitItemAdjudication',
  ExplanationOfBenefitItemAdjudication,
  false
);

/**
 * Additional items
 */
export class ExplanationOfBenefitItemDetail extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'sequence',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sequence', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'revenue',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'revenue', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'category',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'productOrService',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'productOrService', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'modifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'modifier', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'programCode',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'programCode', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'unitPrice',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'unitPrice', typeCode: 'Money' }],
    },
    {
      elementName: 'factor',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'factor', typeCode: 'decimal' }],
    },
    {
      elementName: 'net',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'net', typeCode: 'Money' }],
    },
    {
      elementName: 'udi',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'udi', typeCode: 'Reference', targetResourceTypes: ['Device'] }],
    },
    {
      elementName: 'noteNumber',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'noteNumber', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'adjudication',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'adjudication', typeCode: 'ExplanationOfBenefitItemAdjudication' }],
    },
    {
      elementName: 'subDetail',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'subDetail', typeCode: 'ExplanationOfBenefitItemDetailSubDetail' }],
    },
  ];

  /** Product or service provided (1..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;

  /** Revenue or cost center code (0..1) */
  revenue?: CodeableConcept;

  /** Benefit classification (0..1) */
  category?: CodeableConcept;

  /** Billing, service, product, or drug code (1..1) */
  productOrService?: CodeableConcept;

  /** Service/Product billing modifiers (0..*) */
  modifier?: CodeableConcept[];

  /** Program the product or service is provided under (0..*) */
  programCode?: CodeableConcept[];

  /** Count of products or services (0..1) */
  quantity?: Quantity;

  /** Fee, charge or cost per item (0..1) */
  unitPrice?: Money;

  /** Price scaling factor (0..1) */
  factor?: number;
  /** Id and extensions of the primitive `factor`. */
  _factor?: Element;

  /** Total item cost (0..1) */
  net?: Money;

  /** Unique device identifier (0..*) */
  udi?: Reference[];

  /** Applicable note numbers (0..*) */
  noteNumber?: number[];
  /** Id and extensions of the primitive `noteNumber`. */
  _noteNumber?: (Element | null)[];

  /** Detail level adjudication details (0..*) */
  adjudication?: ExplanationOfBenefitItemAdjudication[];

  /** Additional items (0..*) */
  subDetail?: ExplanationOfBenefitItemDetailSubDetail[];

  override fhirType(): string {
    return 'ExplanationOfBenefit.item.detail';
  }

  /** FHIR JSON for this ExplanationOfBenefitItemDetail, typed as the plain `ExplanationOfBenefitDetail` data type. */
  override toJSON(): plainTypes.ExplanationOfBenefitDetail {
    return this.serialize() as plainTypes.ExplanationOfBenefitDetail;
  }

  /** Product or service provided (1..1) */
  getSequence(): number | undefined {
    return this.sequence;
  }

  /** Sets `sequence`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setSequence(sequence: number | undefined): this {
    return this.setFieldValue('sequence', sequence);
  }

  hasSequence(): boolean {
    return this.hasFieldValue('sequence');
  }

  /** The element carrying the id and extensions of `sequence`. Created when absent. */
  getSequenceElement(): Element {
    if (this._sequence === undefined) {
      this._sequence = new Element();
    }
    return this._sequence;
  }

  setSequenceElement(sequenceElement: Element | undefined): this {
    this._sequence = sequenceElement;
    return this;
  }

  /** Revenue or cost center code (0..1) Created when absent. */
  getRevenue(): CodeableConcept {
    if (this.revenue === undefined) {
      this.revenue = new CodeableConcept();
    }
    return this.revenue;
  }

  setRevenue(revenue: CodeableConcept | undefined): this {
    return this.setFieldValue('revenue', revenue);
  }

  hasRevenue(): boolean {
    return this.hasFieldValue('revenue');
  }

  /** Benefit classification (0..1) Created when absent. */
  getCategory(): CodeableConcept {
    if (this.category === undefined) {
      this.category = new CodeableConcept();
    }
    return this.category;
  }

  setCategory(category: CodeableConcept | undefined): this {
    return this.setFieldValue('category', category);
  }

  hasCategory(): boolean {
    return this.hasFieldValue('category');
  }

  /** Billing, service, product, or drug code (1..1) Created when absent. */
  getProductOrService(): CodeableConcept {
    if (this.productOrService === undefined) {
      this.productOrService = new CodeableConcept();
    }
    return this.productOrService;
  }

  setProductOrService(productOrService: CodeableConcept | undefined): this {
    return this.setFieldValue('productOrService', productOrService);
  }

  hasProductOrService(): boolean {
    return this.hasFieldValue('productOrService');
  }

  /** Service/Product billing modifiers (0..*) Never undefined; an empty list is created when absent. */
  getModifier(): CodeableConcept[] {
    if (this.modifier === undefined) {
      this.modifier = [];
    }
    return this.modifier;
  }

  setModifier(modifier: CodeableConcept[] | undefined): this {
    return this.setFieldValue('modifier', modifier);
  }

  hasModifier(): boolean {
    return this.hasFieldValue('modifier');
  }

  /** Appends a new, empty CodeableConcept to `modifier` and returns it so it can be filled in. */
  addModifier(): CodeableConcept;
  /** Appends the given CodeableConcept to `modifier` and returns this object for chaining. */
  addModifier(codeableConcept: CodeableConcept): this;
  addModifier(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('modifier', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('modifier', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `modifier`. One is added when the list is empty. */
  getModifierFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getModifier()[0];
    return firstCodeableConcept === undefined ? this.addModifier() : firstCodeableConcept;
  }

  /** Program the product or service is provided under (0..*) Never undefined; an empty list is created when absent. */
  getProgramCode(): CodeableConcept[] {
    if (this.programCode === undefined) {
      this.programCode = [];
    }
    return this.programCode;
  }

  setProgramCode(programCode: CodeableConcept[] | undefined): this {
    return this.setFieldValue('programCode', programCode);
  }

  hasProgramCode(): boolean {
    return this.hasFieldValue('programCode');
  }

  /** Appends a new, empty CodeableConcept to `programCode` and returns it so it can be filled in. */
  addProgramCode(): CodeableConcept;
  /** Appends the given CodeableConcept to `programCode` and returns this object for chaining. */
  addProgramCode(codeableConcept: CodeableConcept): this;
  addProgramCode(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('programCode', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('programCode', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `programCode`. One is added when the list is empty. */
  getProgramCodeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getProgramCode()[0];
    return firstCodeableConcept === undefined ? this.addProgramCode() : firstCodeableConcept;
  }

  /** Count of products or services (0..1) Created when absent. */
  getQuantity(): Quantity {
    if (this.quantity === undefined) {
      this.quantity = new Quantity();
    }
    return this.quantity;
  }

  setQuantity(quantity: Quantity | undefined): this {
    return this.setFieldValue('quantity', quantity);
  }

  hasQuantity(): boolean {
    return this.hasFieldValue('quantity');
  }

  /** Fee, charge or cost per item (0..1) Created when absent. */
  getUnitPrice(): Money {
    if (this.unitPrice === undefined) {
      this.unitPrice = new Money();
    }
    return this.unitPrice;
  }

  setUnitPrice(unitPrice: Money | undefined): this {
    return this.setFieldValue('unitPrice', unitPrice);
  }

  hasUnitPrice(): boolean {
    return this.hasFieldValue('unitPrice');
  }

  /** Price scaling factor (0..1) */
  getFactor(): number | undefined {
    return this.factor;
  }

  /** Sets `factor`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setFactor(factor: number | undefined): this {
    return this.setFieldValue('factor', factor);
  }

  hasFactor(): boolean {
    return this.hasFieldValue('factor');
  }

  /** The element carrying the id and extensions of `factor`. Created when absent. */
  getFactorElement(): Element {
    if (this._factor === undefined) {
      this._factor = new Element();
    }
    return this._factor;
  }

  setFactorElement(factorElement: Element | undefined): this {
    this._factor = factorElement;
    return this;
  }

  /** Total item cost (0..1) Created when absent. */
  getNet(): Money {
    if (this.net === undefined) {
      this.net = new Money();
    }
    return this.net;
  }

  setNet(net: Money | undefined): this {
    return this.setFieldValue('net', net);
  }

  hasNet(): boolean {
    return this.hasFieldValue('net');
  }

  /** Unique device identifier (0..*) Never undefined; an empty list is created when absent. */
  getUdi(): Reference[] {
    if (this.udi === undefined) {
      this.udi = [];
    }
    return this.udi;
  }

  setUdi(udi: Reference[] | undefined): this {
    return this.setFieldValue('udi', udi);
  }

  hasUdi(): boolean {
    return this.hasFieldValue('udi');
  }

  /** Appends a new, empty Reference to `udi` and returns it so it can be filled in. */
  addUdi(): Reference;
  /** Appends the given Reference to `udi` and returns this object for chaining. */
  addUdi(reference: Reference): this;
  addUdi(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('udi', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('udi', createdReference);
    return createdReference;
  }

  /** The first Reference of `udi`. One is added when the list is empty. */
  getUdiFirstRep(): Reference {
    const firstReference = this.getUdi()[0];
    return firstReference === undefined ? this.addUdi() : firstReference;
  }

  /** Applicable note numbers (0..*) Never undefined; an empty list is created when absent. */
  getNoteNumber(): number[] {
    if (this.noteNumber === undefined) {
      this.noteNumber = [];
    }
    return this.noteNumber;
  }

  setNoteNumber(noteNumber: number[] | undefined): this {
    return this.setFieldValue('noteNumber', noteNumber);
  }

  hasNoteNumber(): boolean {
    return this.hasFieldValue('noteNumber');
  }

  /** Appends one value to `noteNumber`. Throws a FhirModelError when it is not a valid FHIR positiveInt. */
  addNoteNumber(noteNumber: number): this {
    return this.addFieldValue('noteNumber', noteNumber);
  }

  /** Detail level adjudication details (0..*) Never undefined; an empty list is created when absent. */
  getAdjudication(): ExplanationOfBenefitItemAdjudication[] {
    if (this.adjudication === undefined) {
      this.adjudication = [];
    }
    return this.adjudication;
  }

  setAdjudication(adjudication: ExplanationOfBenefitItemAdjudication[] | undefined): this {
    return this.setFieldValue('adjudication', adjudication);
  }

  hasAdjudication(): boolean {
    return this.hasFieldValue('adjudication');
  }

  /** Appends a new, empty ExplanationOfBenefitItemAdjudication to `adjudication` and returns it so it can be filled in. */
  addAdjudication(): ExplanationOfBenefitItemAdjudication;
  /** Appends the given ExplanationOfBenefitItemAdjudication to `adjudication` and returns this object for chaining. */
  addAdjudication(explanationOfBenefitItemAdjudication: ExplanationOfBenefitItemAdjudication): this;
  addAdjudication(
    explanationOfBenefitItemAdjudication?: ExplanationOfBenefitItemAdjudication
  ): ExplanationOfBenefitItemAdjudication | this {
    if (explanationOfBenefitItemAdjudication !== undefined) {
      return this.addFieldValue('adjudication', explanationOfBenefitItemAdjudication);
    }
    const createdExplanationOfBenefitItemAdjudication = new ExplanationOfBenefitItemAdjudication();
    this.addFieldValue('adjudication', createdExplanationOfBenefitItemAdjudication);
    return createdExplanationOfBenefitItemAdjudication;
  }

  /** The first ExplanationOfBenefitItemAdjudication of `adjudication`. One is added when the list is empty. */
  getAdjudicationFirstRep(): ExplanationOfBenefitItemAdjudication {
    const firstExplanationOfBenefitItemAdjudication = this.getAdjudication()[0];
    return firstExplanationOfBenefitItemAdjudication === undefined
      ? this.addAdjudication()
      : firstExplanationOfBenefitItemAdjudication;
  }

  /** Additional items (0..*) Never undefined; an empty list is created when absent. */
  getSubDetail(): ExplanationOfBenefitItemDetailSubDetail[] {
    if (this.subDetail === undefined) {
      this.subDetail = [];
    }
    return this.subDetail;
  }

  setSubDetail(subDetail: ExplanationOfBenefitItemDetailSubDetail[] | undefined): this {
    return this.setFieldValue('subDetail', subDetail);
  }

  hasSubDetail(): boolean {
    return this.hasFieldValue('subDetail');
  }

  /** Appends a new, empty ExplanationOfBenefitItemDetailSubDetail to `subDetail` and returns it so it can be filled in. */
  addSubDetail(): ExplanationOfBenefitItemDetailSubDetail;
  /** Appends the given ExplanationOfBenefitItemDetailSubDetail to `subDetail` and returns this object for chaining. */
  addSubDetail(
    explanationOfBenefitItemDetailSubDetail: ExplanationOfBenefitItemDetailSubDetail
  ): this;
  addSubDetail(
    explanationOfBenefitItemDetailSubDetail?: ExplanationOfBenefitItemDetailSubDetail
  ): ExplanationOfBenefitItemDetailSubDetail | this {
    if (explanationOfBenefitItemDetailSubDetail !== undefined) {
      return this.addFieldValue('subDetail', explanationOfBenefitItemDetailSubDetail);
    }
    const createdExplanationOfBenefitItemDetailSubDetail =
      new ExplanationOfBenefitItemDetailSubDetail();
    this.addFieldValue('subDetail', createdExplanationOfBenefitItemDetailSubDetail);
    return createdExplanationOfBenefitItemDetailSubDetail;
  }

  /** The first ExplanationOfBenefitItemDetailSubDetail of `subDetail`. One is added when the list is empty. */
  getSubDetailFirstRep(): ExplanationOfBenefitItemDetailSubDetail {
    const firstExplanationOfBenefitItemDetailSubDetail = this.getSubDetail()[0];
    return firstExplanationOfBenefitItemDetailSubDetail === undefined
      ? this.addSubDetail()
      : firstExplanationOfBenefitItemDetailSubDetail;
  }
}

modelTypeRegistry.register('ExplanationOfBenefitItemDetail', ExplanationOfBenefitItemDetail, false);

/**
 * Additional items
 */
export class ExplanationOfBenefitItemDetailSubDetail extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'sequence',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sequence', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'revenue',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'revenue', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'category',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'productOrService',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'productOrService', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'modifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'modifier', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'programCode',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'programCode', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'unitPrice',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'unitPrice', typeCode: 'Money' }],
    },
    {
      elementName: 'factor',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'factor', typeCode: 'decimal' }],
    },
    {
      elementName: 'net',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'net', typeCode: 'Money' }],
    },
    {
      elementName: 'udi',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'udi', typeCode: 'Reference', targetResourceTypes: ['Device'] }],
    },
    {
      elementName: 'noteNumber',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'noteNumber', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'adjudication',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'adjudication', typeCode: 'ExplanationOfBenefitItemAdjudication' }],
    },
  ];

  /** Product or service provided (1..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;

  /** Revenue or cost center code (0..1) */
  revenue?: CodeableConcept;

  /** Benefit classification (0..1) */
  category?: CodeableConcept;

  /** Billing, service, product, or drug code (1..1) */
  productOrService?: CodeableConcept;

  /** Service/Product billing modifiers (0..*) */
  modifier?: CodeableConcept[];

  /** Program the product or service is provided under (0..*) */
  programCode?: CodeableConcept[];

  /** Count of products or services (0..1) */
  quantity?: Quantity;

  /** Fee, charge or cost per item (0..1) */
  unitPrice?: Money;

  /** Price scaling factor (0..1) */
  factor?: number;
  /** Id and extensions of the primitive `factor`. */
  _factor?: Element;

  /** Total item cost (0..1) */
  net?: Money;

  /** Unique device identifier (0..*) */
  udi?: Reference[];

  /** Applicable note numbers (0..*) */
  noteNumber?: number[];
  /** Id and extensions of the primitive `noteNumber`. */
  _noteNumber?: (Element | null)[];

  /** Subdetail level adjudication details (0..*) */
  adjudication?: ExplanationOfBenefitItemAdjudication[];

  override fhirType(): string {
    return 'ExplanationOfBenefit.item.detail.subDetail';
  }

  /** FHIR JSON for this ExplanationOfBenefitItemDetailSubDetail, typed as the plain `ExplanationOfBenefitSubDetail` data type. */
  override toJSON(): plainTypes.ExplanationOfBenefitSubDetail {
    return this.serialize() as plainTypes.ExplanationOfBenefitSubDetail;
  }

  /** Product or service provided (1..1) */
  getSequence(): number | undefined {
    return this.sequence;
  }

  /** Sets `sequence`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setSequence(sequence: number | undefined): this {
    return this.setFieldValue('sequence', sequence);
  }

  hasSequence(): boolean {
    return this.hasFieldValue('sequence');
  }

  /** The element carrying the id and extensions of `sequence`. Created when absent. */
  getSequenceElement(): Element {
    if (this._sequence === undefined) {
      this._sequence = new Element();
    }
    return this._sequence;
  }

  setSequenceElement(sequenceElement: Element | undefined): this {
    this._sequence = sequenceElement;
    return this;
  }

  /** Revenue or cost center code (0..1) Created when absent. */
  getRevenue(): CodeableConcept {
    if (this.revenue === undefined) {
      this.revenue = new CodeableConcept();
    }
    return this.revenue;
  }

  setRevenue(revenue: CodeableConcept | undefined): this {
    return this.setFieldValue('revenue', revenue);
  }

  hasRevenue(): boolean {
    return this.hasFieldValue('revenue');
  }

  /** Benefit classification (0..1) Created when absent. */
  getCategory(): CodeableConcept {
    if (this.category === undefined) {
      this.category = new CodeableConcept();
    }
    return this.category;
  }

  setCategory(category: CodeableConcept | undefined): this {
    return this.setFieldValue('category', category);
  }

  hasCategory(): boolean {
    return this.hasFieldValue('category');
  }

  /** Billing, service, product, or drug code (1..1) Created when absent. */
  getProductOrService(): CodeableConcept {
    if (this.productOrService === undefined) {
      this.productOrService = new CodeableConcept();
    }
    return this.productOrService;
  }

  setProductOrService(productOrService: CodeableConcept | undefined): this {
    return this.setFieldValue('productOrService', productOrService);
  }

  hasProductOrService(): boolean {
    return this.hasFieldValue('productOrService');
  }

  /** Service/Product billing modifiers (0..*) Never undefined; an empty list is created when absent. */
  getModifier(): CodeableConcept[] {
    if (this.modifier === undefined) {
      this.modifier = [];
    }
    return this.modifier;
  }

  setModifier(modifier: CodeableConcept[] | undefined): this {
    return this.setFieldValue('modifier', modifier);
  }

  hasModifier(): boolean {
    return this.hasFieldValue('modifier');
  }

  /** Appends a new, empty CodeableConcept to `modifier` and returns it so it can be filled in. */
  addModifier(): CodeableConcept;
  /** Appends the given CodeableConcept to `modifier` and returns this object for chaining. */
  addModifier(codeableConcept: CodeableConcept): this;
  addModifier(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('modifier', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('modifier', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `modifier`. One is added when the list is empty. */
  getModifierFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getModifier()[0];
    return firstCodeableConcept === undefined ? this.addModifier() : firstCodeableConcept;
  }

  /** Program the product or service is provided under (0..*) Never undefined; an empty list is created when absent. */
  getProgramCode(): CodeableConcept[] {
    if (this.programCode === undefined) {
      this.programCode = [];
    }
    return this.programCode;
  }

  setProgramCode(programCode: CodeableConcept[] | undefined): this {
    return this.setFieldValue('programCode', programCode);
  }

  hasProgramCode(): boolean {
    return this.hasFieldValue('programCode');
  }

  /** Appends a new, empty CodeableConcept to `programCode` and returns it so it can be filled in. */
  addProgramCode(): CodeableConcept;
  /** Appends the given CodeableConcept to `programCode` and returns this object for chaining. */
  addProgramCode(codeableConcept: CodeableConcept): this;
  addProgramCode(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('programCode', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('programCode', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `programCode`. One is added when the list is empty. */
  getProgramCodeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getProgramCode()[0];
    return firstCodeableConcept === undefined ? this.addProgramCode() : firstCodeableConcept;
  }

  /** Count of products or services (0..1) Created when absent. */
  getQuantity(): Quantity {
    if (this.quantity === undefined) {
      this.quantity = new Quantity();
    }
    return this.quantity;
  }

  setQuantity(quantity: Quantity | undefined): this {
    return this.setFieldValue('quantity', quantity);
  }

  hasQuantity(): boolean {
    return this.hasFieldValue('quantity');
  }

  /** Fee, charge or cost per item (0..1) Created when absent. */
  getUnitPrice(): Money {
    if (this.unitPrice === undefined) {
      this.unitPrice = new Money();
    }
    return this.unitPrice;
  }

  setUnitPrice(unitPrice: Money | undefined): this {
    return this.setFieldValue('unitPrice', unitPrice);
  }

  hasUnitPrice(): boolean {
    return this.hasFieldValue('unitPrice');
  }

  /** Price scaling factor (0..1) */
  getFactor(): number | undefined {
    return this.factor;
  }

  /** Sets `factor`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setFactor(factor: number | undefined): this {
    return this.setFieldValue('factor', factor);
  }

  hasFactor(): boolean {
    return this.hasFieldValue('factor');
  }

  /** The element carrying the id and extensions of `factor`. Created when absent. */
  getFactorElement(): Element {
    if (this._factor === undefined) {
      this._factor = new Element();
    }
    return this._factor;
  }

  setFactorElement(factorElement: Element | undefined): this {
    this._factor = factorElement;
    return this;
  }

  /** Total item cost (0..1) Created when absent. */
  getNet(): Money {
    if (this.net === undefined) {
      this.net = new Money();
    }
    return this.net;
  }

  setNet(net: Money | undefined): this {
    return this.setFieldValue('net', net);
  }

  hasNet(): boolean {
    return this.hasFieldValue('net');
  }

  /** Unique device identifier (0..*) Never undefined; an empty list is created when absent. */
  getUdi(): Reference[] {
    if (this.udi === undefined) {
      this.udi = [];
    }
    return this.udi;
  }

  setUdi(udi: Reference[] | undefined): this {
    return this.setFieldValue('udi', udi);
  }

  hasUdi(): boolean {
    return this.hasFieldValue('udi');
  }

  /** Appends a new, empty Reference to `udi` and returns it so it can be filled in. */
  addUdi(): Reference;
  /** Appends the given Reference to `udi` and returns this object for chaining. */
  addUdi(reference: Reference): this;
  addUdi(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('udi', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('udi', createdReference);
    return createdReference;
  }

  /** The first Reference of `udi`. One is added when the list is empty. */
  getUdiFirstRep(): Reference {
    const firstReference = this.getUdi()[0];
    return firstReference === undefined ? this.addUdi() : firstReference;
  }

  /** Applicable note numbers (0..*) Never undefined; an empty list is created when absent. */
  getNoteNumber(): number[] {
    if (this.noteNumber === undefined) {
      this.noteNumber = [];
    }
    return this.noteNumber;
  }

  setNoteNumber(noteNumber: number[] | undefined): this {
    return this.setFieldValue('noteNumber', noteNumber);
  }

  hasNoteNumber(): boolean {
    return this.hasFieldValue('noteNumber');
  }

  /** Appends one value to `noteNumber`. Throws a FhirModelError when it is not a valid FHIR positiveInt. */
  addNoteNumber(noteNumber: number): this {
    return this.addFieldValue('noteNumber', noteNumber);
  }

  /** Subdetail level adjudication details (0..*) Never undefined; an empty list is created when absent. */
  getAdjudication(): ExplanationOfBenefitItemAdjudication[] {
    if (this.adjudication === undefined) {
      this.adjudication = [];
    }
    return this.adjudication;
  }

  setAdjudication(adjudication: ExplanationOfBenefitItemAdjudication[] | undefined): this {
    return this.setFieldValue('adjudication', adjudication);
  }

  hasAdjudication(): boolean {
    return this.hasFieldValue('adjudication');
  }

  /** Appends a new, empty ExplanationOfBenefitItemAdjudication to `adjudication` and returns it so it can be filled in. */
  addAdjudication(): ExplanationOfBenefitItemAdjudication;
  /** Appends the given ExplanationOfBenefitItemAdjudication to `adjudication` and returns this object for chaining. */
  addAdjudication(explanationOfBenefitItemAdjudication: ExplanationOfBenefitItemAdjudication): this;
  addAdjudication(
    explanationOfBenefitItemAdjudication?: ExplanationOfBenefitItemAdjudication
  ): ExplanationOfBenefitItemAdjudication | this {
    if (explanationOfBenefitItemAdjudication !== undefined) {
      return this.addFieldValue('adjudication', explanationOfBenefitItemAdjudication);
    }
    const createdExplanationOfBenefitItemAdjudication = new ExplanationOfBenefitItemAdjudication();
    this.addFieldValue('adjudication', createdExplanationOfBenefitItemAdjudication);
    return createdExplanationOfBenefitItemAdjudication;
  }

  /** The first ExplanationOfBenefitItemAdjudication of `adjudication`. One is added when the list is empty. */
  getAdjudicationFirstRep(): ExplanationOfBenefitItemAdjudication {
    const firstExplanationOfBenefitItemAdjudication = this.getAdjudication()[0];
    return firstExplanationOfBenefitItemAdjudication === undefined
      ? this.addAdjudication()
      : firstExplanationOfBenefitItemAdjudication;
  }
}

modelTypeRegistry.register(
  'ExplanationOfBenefitItemDetailSubDetail',
  ExplanationOfBenefitItemDetailSubDetail,
  false
);

/**
 * Insurer added line items
 */
export class ExplanationOfBenefitAddItem extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'itemSequence',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'itemSequence', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'detailSequence',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'detailSequence', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'subDetailSequence',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'subDetailSequence', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'provider',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'provider',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Practitioner', 'PractitionerRole'],
        },
      ],
    },
    {
      elementName: 'productOrService',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'productOrService', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'modifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'modifier', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'programCode',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'programCode', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'serviced',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'servicedDate', typeCode: 'date' },
        { jsonKey: 'servicedPeriod', typeCode: 'Period' },
      ],
    },
    {
      elementName: 'location',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'locationCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'locationAddress', typeCode: 'Address' },
        { jsonKey: 'locationReference', typeCode: 'Reference', targetResourceTypes: ['Location'] },
      ],
    },
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'unitPrice',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'unitPrice', typeCode: 'Money' }],
    },
    {
      elementName: 'factor',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'factor', typeCode: 'decimal' }],
    },
    {
      elementName: 'net',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'net', typeCode: 'Money' }],
    },
    {
      elementName: 'bodySite',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'bodySite', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'subSite',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'subSite', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'noteNumber',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'noteNumber', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'adjudication',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'adjudication', typeCode: 'ExplanationOfBenefitItemAdjudication' }],
    },
    {
      elementName: 'detail',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'detail', typeCode: 'ExplanationOfBenefitAddItemDetail' }],
    },
  ];

  /** Item sequence number (0..*) */
  itemSequence?: number[];
  /** Id and extensions of the primitive `itemSequence`. */
  _itemSequence?: (Element | null)[];

  /** Detail sequence number (0..*) */
  detailSequence?: number[];
  /** Id and extensions of the primitive `detailSequence`. */
  _detailSequence?: (Element | null)[];

  /** Subdetail sequence number (0..*) */
  subDetailSequence?: number[];
  /** Id and extensions of the primitive `subDetailSequence`. */
  _subDetailSequence?: (Element | null)[];

  /** Authorized providers (0..*) */
  provider?: Reference[];

  /** Billing, service, product, or drug code (1..1) */
  productOrService?: CodeableConcept;

  /** Service/Product billing modifiers (0..*) */
  modifier?: CodeableConcept[];

  /** Program the product or service is provided under (0..*) */
  programCode?: CodeableConcept[];

  /** Date or dates of service or product delivery (0..1) */
  servicedDate?: string;
  /** Id and extensions of the primitive `servicedDate`. */
  _servicedDate?: Element;
  /** Date or dates of service or product delivery (0..1) */
  servicedPeriod?: Period;

  /** Place of service or where product was supplied (0..1) */
  locationCodeableConcept?: CodeableConcept;
  /** Place of service or where product was supplied (0..1) */
  locationAddress?: Address;
  /** Place of service or where product was supplied (0..1) */
  locationReference?: Reference;

  /** Count of products or services (0..1) */
  quantity?: Quantity;

  /** Fee, charge or cost per item (0..1) */
  unitPrice?: Money;

  /** Price scaling factor (0..1) */
  factor?: number;
  /** Id and extensions of the primitive `factor`. */
  _factor?: Element;

  /** Total item cost (0..1) */
  net?: Money;

  /** Anatomical location (0..1) */
  bodySite?: CodeableConcept;

  /** Anatomical sub-location (0..*) */
  subSite?: CodeableConcept[];

  /** Applicable note numbers (0..*) */
  noteNumber?: number[];
  /** Id and extensions of the primitive `noteNumber`. */
  _noteNumber?: (Element | null)[];

  /** Added items adjudication (0..*) */
  adjudication?: ExplanationOfBenefitItemAdjudication[];

  /** Insurer added line items (0..*) */
  detail?: ExplanationOfBenefitAddItemDetail[];

  override fhirType(): string {
    return 'ExplanationOfBenefit.addItem';
  }

  /** FHIR JSON for this ExplanationOfBenefitAddItem, typed as the plain `ExplanationOfBenefitAddItem` data type. */
  override toJSON(): plainTypes.ExplanationOfBenefitAddItem {
    return this.serialize() as plainTypes.ExplanationOfBenefitAddItem;
  }

  /** Item sequence number (0..*) Never undefined; an empty list is created when absent. */
  getItemSequence(): number[] {
    if (this.itemSequence === undefined) {
      this.itemSequence = [];
    }
    return this.itemSequence;
  }

  setItemSequence(itemSequence: number[] | undefined): this {
    return this.setFieldValue('itemSequence', itemSequence);
  }

  hasItemSequence(): boolean {
    return this.hasFieldValue('itemSequence');
  }

  /** Appends one value to `itemSequence`. Throws a FhirModelError when it is not a valid FHIR positiveInt. */
  addItemSequence(itemSequence: number): this {
    return this.addFieldValue('itemSequence', itemSequence);
  }

  /** Detail sequence number (0..*) Never undefined; an empty list is created when absent. */
  getDetailSequence(): number[] {
    if (this.detailSequence === undefined) {
      this.detailSequence = [];
    }
    return this.detailSequence;
  }

  setDetailSequence(detailSequence: number[] | undefined): this {
    return this.setFieldValue('detailSequence', detailSequence);
  }

  hasDetailSequence(): boolean {
    return this.hasFieldValue('detailSequence');
  }

  /** Appends one value to `detailSequence`. Throws a FhirModelError when it is not a valid FHIR positiveInt. */
  addDetailSequence(detailSequence: number): this {
    return this.addFieldValue('detailSequence', detailSequence);
  }

  /** Subdetail sequence number (0..*) Never undefined; an empty list is created when absent. */
  getSubDetailSequence(): number[] {
    if (this.subDetailSequence === undefined) {
      this.subDetailSequence = [];
    }
    return this.subDetailSequence;
  }

  setSubDetailSequence(subDetailSequence: number[] | undefined): this {
    return this.setFieldValue('subDetailSequence', subDetailSequence);
  }

  hasSubDetailSequence(): boolean {
    return this.hasFieldValue('subDetailSequence');
  }

  /** Appends one value to `subDetailSequence`. Throws a FhirModelError when it is not a valid FHIR positiveInt. */
  addSubDetailSequence(subDetailSequence: number): this {
    return this.addFieldValue('subDetailSequence', subDetailSequence);
  }

  /** Authorized providers (0..*) Never undefined; an empty list is created when absent. */
  getProvider(): Reference[] {
    if (this.provider === undefined) {
      this.provider = [];
    }
    return this.provider;
  }

  setProvider(provider: Reference[] | undefined): this {
    return this.setFieldValue('provider', provider);
  }

  hasProvider(): boolean {
    return this.hasFieldValue('provider');
  }

  /** Appends a new, empty Reference to `provider` and returns it so it can be filled in. */
  addProvider(): Reference;
  /** Appends the given Reference to `provider` and returns this object for chaining. */
  addProvider(reference: Reference): this;
  addProvider(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('provider', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('provider', createdReference);
    return createdReference;
  }

  /** The first Reference of `provider`. One is added when the list is empty. */
  getProviderFirstRep(): Reference {
    const firstReference = this.getProvider()[0];
    return firstReference === undefined ? this.addProvider() : firstReference;
  }

  /** Billing, service, product, or drug code (1..1) Created when absent. */
  getProductOrService(): CodeableConcept {
    if (this.productOrService === undefined) {
      this.productOrService = new CodeableConcept();
    }
    return this.productOrService;
  }

  setProductOrService(productOrService: CodeableConcept | undefined): this {
    return this.setFieldValue('productOrService', productOrService);
  }

  hasProductOrService(): boolean {
    return this.hasFieldValue('productOrService');
  }

  /** Service/Product billing modifiers (0..*) Never undefined; an empty list is created when absent. */
  getModifier(): CodeableConcept[] {
    if (this.modifier === undefined) {
      this.modifier = [];
    }
    return this.modifier;
  }

  setModifier(modifier: CodeableConcept[] | undefined): this {
    return this.setFieldValue('modifier', modifier);
  }

  hasModifier(): boolean {
    return this.hasFieldValue('modifier');
  }

  /** Appends a new, empty CodeableConcept to `modifier` and returns it so it can be filled in. */
  addModifier(): CodeableConcept;
  /** Appends the given CodeableConcept to `modifier` and returns this object for chaining. */
  addModifier(codeableConcept: CodeableConcept): this;
  addModifier(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('modifier', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('modifier', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `modifier`. One is added when the list is empty. */
  getModifierFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getModifier()[0];
    return firstCodeableConcept === undefined ? this.addModifier() : firstCodeableConcept;
  }

  /** Program the product or service is provided under (0..*) Never undefined; an empty list is created when absent. */
  getProgramCode(): CodeableConcept[] {
    if (this.programCode === undefined) {
      this.programCode = [];
    }
    return this.programCode;
  }

  setProgramCode(programCode: CodeableConcept[] | undefined): this {
    return this.setFieldValue('programCode', programCode);
  }

  hasProgramCode(): boolean {
    return this.hasFieldValue('programCode');
  }

  /** Appends a new, empty CodeableConcept to `programCode` and returns it so it can be filled in. */
  addProgramCode(): CodeableConcept;
  /** Appends the given CodeableConcept to `programCode` and returns this object for chaining. */
  addProgramCode(codeableConcept: CodeableConcept): this;
  addProgramCode(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('programCode', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('programCode', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `programCode`. One is added when the list is empty. */
  getProgramCodeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getProgramCode()[0];
    return firstCodeableConcept === undefined ? this.addProgramCode() : firstCodeableConcept;
  }

  /** Date or dates of service or product delivery (0..1) Whichever type of `serviced[x]` is set. */
  getServiced(): string | Period | undefined {
    return this.getChoiceValue<string | Period>('serviced');
  }

  /** True when any type of `serviced[x]` is set. */
  hasServiced(): boolean {
    return this.hasChoiceValue('serviced');
  }

  getServicedDate(): string | undefined {
    return this.servicedDate;
  }

  /** Sets `serviced[x]` as date and clears every other type of it. */
  setServicedDate(servicedDate: string | undefined): this {
    return this.setFieldValue('servicedDate', servicedDate);
  }

  hasServicedDate(): boolean {
    return this.hasFieldValue('servicedDate');
  }

  getServicedPeriod(): Period | undefined {
    return this.servicedPeriod;
  }

  /** Sets `serviced[x]` as Period and clears every other type of it. */
  setServicedPeriod(servicedPeriod: Period | undefined): this {
    return this.setFieldValue('servicedPeriod', servicedPeriod);
  }

  hasServicedPeriod(): boolean {
    return this.hasFieldValue('servicedPeriod');
  }

  /** Place of service or where product was supplied (0..1) Whichever type of `location[x]` is set. */
  getLocation(): CodeableConcept | Address | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | Address | Reference>('location');
  }

  /** True when any type of `location[x]` is set. */
  hasLocation(): boolean {
    return this.hasChoiceValue('location');
  }

  getLocationCodeableConcept(): CodeableConcept | undefined {
    return this.locationCodeableConcept;
  }

  /** Sets `location[x]` as CodeableConcept and clears every other type of it. */
  setLocationCodeableConcept(locationCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('locationCodeableConcept', locationCodeableConcept);
  }

  hasLocationCodeableConcept(): boolean {
    return this.hasFieldValue('locationCodeableConcept');
  }

  getLocationAddress(): Address | undefined {
    return this.locationAddress;
  }

  /** Sets `location[x]` as Address and clears every other type of it. */
  setLocationAddress(locationAddress: Address | undefined): this {
    return this.setFieldValue('locationAddress', locationAddress);
  }

  hasLocationAddress(): boolean {
    return this.hasFieldValue('locationAddress');
  }

  getLocationReference(): Reference | undefined {
    return this.locationReference;
  }

  /** Sets `location[x]` as Reference and clears every other type of it. */
  setLocationReference(locationReference: Reference | undefined): this {
    return this.setFieldValue('locationReference', locationReference);
  }

  hasLocationReference(): boolean {
    return this.hasFieldValue('locationReference');
  }

  /** Count of products or services (0..1) Created when absent. */
  getQuantity(): Quantity {
    if (this.quantity === undefined) {
      this.quantity = new Quantity();
    }
    return this.quantity;
  }

  setQuantity(quantity: Quantity | undefined): this {
    return this.setFieldValue('quantity', quantity);
  }

  hasQuantity(): boolean {
    return this.hasFieldValue('quantity');
  }

  /** Fee, charge or cost per item (0..1) Created when absent. */
  getUnitPrice(): Money {
    if (this.unitPrice === undefined) {
      this.unitPrice = new Money();
    }
    return this.unitPrice;
  }

  setUnitPrice(unitPrice: Money | undefined): this {
    return this.setFieldValue('unitPrice', unitPrice);
  }

  hasUnitPrice(): boolean {
    return this.hasFieldValue('unitPrice');
  }

  /** Price scaling factor (0..1) */
  getFactor(): number | undefined {
    return this.factor;
  }

  /** Sets `factor`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setFactor(factor: number | undefined): this {
    return this.setFieldValue('factor', factor);
  }

  hasFactor(): boolean {
    return this.hasFieldValue('factor');
  }

  /** The element carrying the id and extensions of `factor`. Created when absent. */
  getFactorElement(): Element {
    if (this._factor === undefined) {
      this._factor = new Element();
    }
    return this._factor;
  }

  setFactorElement(factorElement: Element | undefined): this {
    this._factor = factorElement;
    return this;
  }

  /** Total item cost (0..1) Created when absent. */
  getNet(): Money {
    if (this.net === undefined) {
      this.net = new Money();
    }
    return this.net;
  }

  setNet(net: Money | undefined): this {
    return this.setFieldValue('net', net);
  }

  hasNet(): boolean {
    return this.hasFieldValue('net');
  }

  /** Anatomical location (0..1) Created when absent. */
  getBodySite(): CodeableConcept {
    if (this.bodySite === undefined) {
      this.bodySite = new CodeableConcept();
    }
    return this.bodySite;
  }

  setBodySite(bodySite: CodeableConcept | undefined): this {
    return this.setFieldValue('bodySite', bodySite);
  }

  hasBodySite(): boolean {
    return this.hasFieldValue('bodySite');
  }

  /** Anatomical sub-location (0..*) Never undefined; an empty list is created when absent. */
  getSubSite(): CodeableConcept[] {
    if (this.subSite === undefined) {
      this.subSite = [];
    }
    return this.subSite;
  }

  setSubSite(subSite: CodeableConcept[] | undefined): this {
    return this.setFieldValue('subSite', subSite);
  }

  hasSubSite(): boolean {
    return this.hasFieldValue('subSite');
  }

  /** Appends a new, empty CodeableConcept to `subSite` and returns it so it can be filled in. */
  addSubSite(): CodeableConcept;
  /** Appends the given CodeableConcept to `subSite` and returns this object for chaining. */
  addSubSite(codeableConcept: CodeableConcept): this;
  addSubSite(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('subSite', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('subSite', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `subSite`. One is added when the list is empty. */
  getSubSiteFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getSubSite()[0];
    return firstCodeableConcept === undefined ? this.addSubSite() : firstCodeableConcept;
  }

  /** Applicable note numbers (0..*) Never undefined; an empty list is created when absent. */
  getNoteNumber(): number[] {
    if (this.noteNumber === undefined) {
      this.noteNumber = [];
    }
    return this.noteNumber;
  }

  setNoteNumber(noteNumber: number[] | undefined): this {
    return this.setFieldValue('noteNumber', noteNumber);
  }

  hasNoteNumber(): boolean {
    return this.hasFieldValue('noteNumber');
  }

  /** Appends one value to `noteNumber`. Throws a FhirModelError when it is not a valid FHIR positiveInt. */
  addNoteNumber(noteNumber: number): this {
    return this.addFieldValue('noteNumber', noteNumber);
  }

  /** Added items adjudication (0..*) Never undefined; an empty list is created when absent. */
  getAdjudication(): ExplanationOfBenefitItemAdjudication[] {
    if (this.adjudication === undefined) {
      this.adjudication = [];
    }
    return this.adjudication;
  }

  setAdjudication(adjudication: ExplanationOfBenefitItemAdjudication[] | undefined): this {
    return this.setFieldValue('adjudication', adjudication);
  }

  hasAdjudication(): boolean {
    return this.hasFieldValue('adjudication');
  }

  /** Appends a new, empty ExplanationOfBenefitItemAdjudication to `adjudication` and returns it so it can be filled in. */
  addAdjudication(): ExplanationOfBenefitItemAdjudication;
  /** Appends the given ExplanationOfBenefitItemAdjudication to `adjudication` and returns this object for chaining. */
  addAdjudication(explanationOfBenefitItemAdjudication: ExplanationOfBenefitItemAdjudication): this;
  addAdjudication(
    explanationOfBenefitItemAdjudication?: ExplanationOfBenefitItemAdjudication
  ): ExplanationOfBenefitItemAdjudication | this {
    if (explanationOfBenefitItemAdjudication !== undefined) {
      return this.addFieldValue('adjudication', explanationOfBenefitItemAdjudication);
    }
    const createdExplanationOfBenefitItemAdjudication = new ExplanationOfBenefitItemAdjudication();
    this.addFieldValue('adjudication', createdExplanationOfBenefitItemAdjudication);
    return createdExplanationOfBenefitItemAdjudication;
  }

  /** The first ExplanationOfBenefitItemAdjudication of `adjudication`. One is added when the list is empty. */
  getAdjudicationFirstRep(): ExplanationOfBenefitItemAdjudication {
    const firstExplanationOfBenefitItemAdjudication = this.getAdjudication()[0];
    return firstExplanationOfBenefitItemAdjudication === undefined
      ? this.addAdjudication()
      : firstExplanationOfBenefitItemAdjudication;
  }

  /** Insurer added line items (0..*) Never undefined; an empty list is created when absent. */
  getDetail(): ExplanationOfBenefitAddItemDetail[] {
    if (this.detail === undefined) {
      this.detail = [];
    }
    return this.detail;
  }

  setDetail(detail: ExplanationOfBenefitAddItemDetail[] | undefined): this {
    return this.setFieldValue('detail', detail);
  }

  hasDetail(): boolean {
    return this.hasFieldValue('detail');
  }

  /** Appends a new, empty ExplanationOfBenefitAddItemDetail to `detail` and returns it so it can be filled in. */
  addDetail(): ExplanationOfBenefitAddItemDetail;
  /** Appends the given ExplanationOfBenefitAddItemDetail to `detail` and returns this object for chaining. */
  addDetail(explanationOfBenefitAddItemDetail: ExplanationOfBenefitAddItemDetail): this;
  addDetail(
    explanationOfBenefitAddItemDetail?: ExplanationOfBenefitAddItemDetail
  ): ExplanationOfBenefitAddItemDetail | this {
    if (explanationOfBenefitAddItemDetail !== undefined) {
      return this.addFieldValue('detail', explanationOfBenefitAddItemDetail);
    }
    const createdExplanationOfBenefitAddItemDetail = new ExplanationOfBenefitAddItemDetail();
    this.addFieldValue('detail', createdExplanationOfBenefitAddItemDetail);
    return createdExplanationOfBenefitAddItemDetail;
  }

  /** The first ExplanationOfBenefitAddItemDetail of `detail`. One is added when the list is empty. */
  getDetailFirstRep(): ExplanationOfBenefitAddItemDetail {
    const firstExplanationOfBenefitAddItemDetail = this.getDetail()[0];
    return firstExplanationOfBenefitAddItemDetail === undefined
      ? this.addDetail()
      : firstExplanationOfBenefitAddItemDetail;
  }
}

modelTypeRegistry.register('ExplanationOfBenefitAddItem', ExplanationOfBenefitAddItem, false);

/**
 * Insurer added line items
 */
export class ExplanationOfBenefitAddItemDetail extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'productOrService',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'productOrService', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'modifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'modifier', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'unitPrice',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'unitPrice', typeCode: 'Money' }],
    },
    {
      elementName: 'factor',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'factor', typeCode: 'decimal' }],
    },
    {
      elementName: 'net',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'net', typeCode: 'Money' }],
    },
    {
      elementName: 'noteNumber',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'noteNumber', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'adjudication',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'adjudication', typeCode: 'ExplanationOfBenefitItemAdjudication' }],
    },
    {
      elementName: 'subDetail',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'subDetail', typeCode: 'ExplanationOfBenefitAddItemDetailSubDetail' }],
    },
  ];

  /** Billing, service, product, or drug code (1..1) */
  productOrService?: CodeableConcept;

  /** Service/Product billing modifiers (0..*) */
  modifier?: CodeableConcept[];

  /** Count of products or services (0..1) */
  quantity?: Quantity;

  /** Fee, charge or cost per item (0..1) */
  unitPrice?: Money;

  /** Price scaling factor (0..1) */
  factor?: number;
  /** Id and extensions of the primitive `factor`. */
  _factor?: Element;

  /** Total item cost (0..1) */
  net?: Money;

  /** Applicable note numbers (0..*) */
  noteNumber?: number[];
  /** Id and extensions of the primitive `noteNumber`. */
  _noteNumber?: (Element | null)[];

  /** Added items adjudication (0..*) */
  adjudication?: ExplanationOfBenefitItemAdjudication[];

  /** Insurer added line items (0..*) */
  subDetail?: ExplanationOfBenefitAddItemDetailSubDetail[];

  override fhirType(): string {
    return 'ExplanationOfBenefit.addItem.detail';
  }

  /** FHIR JSON for this ExplanationOfBenefitAddItemDetail, typed as the plain `ExplanationOfBenefitDetail1` data type. */
  override toJSON(): plainTypes.ExplanationOfBenefitDetail1 {
    return this.serialize() as plainTypes.ExplanationOfBenefitDetail1;
  }

  /** Billing, service, product, or drug code (1..1) Created when absent. */
  getProductOrService(): CodeableConcept {
    if (this.productOrService === undefined) {
      this.productOrService = new CodeableConcept();
    }
    return this.productOrService;
  }

  setProductOrService(productOrService: CodeableConcept | undefined): this {
    return this.setFieldValue('productOrService', productOrService);
  }

  hasProductOrService(): boolean {
    return this.hasFieldValue('productOrService');
  }

  /** Service/Product billing modifiers (0..*) Never undefined; an empty list is created when absent. */
  getModifier(): CodeableConcept[] {
    if (this.modifier === undefined) {
      this.modifier = [];
    }
    return this.modifier;
  }

  setModifier(modifier: CodeableConcept[] | undefined): this {
    return this.setFieldValue('modifier', modifier);
  }

  hasModifier(): boolean {
    return this.hasFieldValue('modifier');
  }

  /** Appends a new, empty CodeableConcept to `modifier` and returns it so it can be filled in. */
  addModifier(): CodeableConcept;
  /** Appends the given CodeableConcept to `modifier` and returns this object for chaining. */
  addModifier(codeableConcept: CodeableConcept): this;
  addModifier(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('modifier', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('modifier', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `modifier`. One is added when the list is empty. */
  getModifierFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getModifier()[0];
    return firstCodeableConcept === undefined ? this.addModifier() : firstCodeableConcept;
  }

  /** Count of products or services (0..1) Created when absent. */
  getQuantity(): Quantity {
    if (this.quantity === undefined) {
      this.quantity = new Quantity();
    }
    return this.quantity;
  }

  setQuantity(quantity: Quantity | undefined): this {
    return this.setFieldValue('quantity', quantity);
  }

  hasQuantity(): boolean {
    return this.hasFieldValue('quantity');
  }

  /** Fee, charge or cost per item (0..1) Created when absent. */
  getUnitPrice(): Money {
    if (this.unitPrice === undefined) {
      this.unitPrice = new Money();
    }
    return this.unitPrice;
  }

  setUnitPrice(unitPrice: Money | undefined): this {
    return this.setFieldValue('unitPrice', unitPrice);
  }

  hasUnitPrice(): boolean {
    return this.hasFieldValue('unitPrice');
  }

  /** Price scaling factor (0..1) */
  getFactor(): number | undefined {
    return this.factor;
  }

  /** Sets `factor`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setFactor(factor: number | undefined): this {
    return this.setFieldValue('factor', factor);
  }

  hasFactor(): boolean {
    return this.hasFieldValue('factor');
  }

  /** The element carrying the id and extensions of `factor`. Created when absent. */
  getFactorElement(): Element {
    if (this._factor === undefined) {
      this._factor = new Element();
    }
    return this._factor;
  }

  setFactorElement(factorElement: Element | undefined): this {
    this._factor = factorElement;
    return this;
  }

  /** Total item cost (0..1) Created when absent. */
  getNet(): Money {
    if (this.net === undefined) {
      this.net = new Money();
    }
    return this.net;
  }

  setNet(net: Money | undefined): this {
    return this.setFieldValue('net', net);
  }

  hasNet(): boolean {
    return this.hasFieldValue('net');
  }

  /** Applicable note numbers (0..*) Never undefined; an empty list is created when absent. */
  getNoteNumber(): number[] {
    if (this.noteNumber === undefined) {
      this.noteNumber = [];
    }
    return this.noteNumber;
  }

  setNoteNumber(noteNumber: number[] | undefined): this {
    return this.setFieldValue('noteNumber', noteNumber);
  }

  hasNoteNumber(): boolean {
    return this.hasFieldValue('noteNumber');
  }

  /** Appends one value to `noteNumber`. Throws a FhirModelError when it is not a valid FHIR positiveInt. */
  addNoteNumber(noteNumber: number): this {
    return this.addFieldValue('noteNumber', noteNumber);
  }

  /** Added items adjudication (0..*) Never undefined; an empty list is created when absent. */
  getAdjudication(): ExplanationOfBenefitItemAdjudication[] {
    if (this.adjudication === undefined) {
      this.adjudication = [];
    }
    return this.adjudication;
  }

  setAdjudication(adjudication: ExplanationOfBenefitItemAdjudication[] | undefined): this {
    return this.setFieldValue('adjudication', adjudication);
  }

  hasAdjudication(): boolean {
    return this.hasFieldValue('adjudication');
  }

  /** Appends a new, empty ExplanationOfBenefitItemAdjudication to `adjudication` and returns it so it can be filled in. */
  addAdjudication(): ExplanationOfBenefitItemAdjudication;
  /** Appends the given ExplanationOfBenefitItemAdjudication to `adjudication` and returns this object for chaining. */
  addAdjudication(explanationOfBenefitItemAdjudication: ExplanationOfBenefitItemAdjudication): this;
  addAdjudication(
    explanationOfBenefitItemAdjudication?: ExplanationOfBenefitItemAdjudication
  ): ExplanationOfBenefitItemAdjudication | this {
    if (explanationOfBenefitItemAdjudication !== undefined) {
      return this.addFieldValue('adjudication', explanationOfBenefitItemAdjudication);
    }
    const createdExplanationOfBenefitItemAdjudication = new ExplanationOfBenefitItemAdjudication();
    this.addFieldValue('adjudication', createdExplanationOfBenefitItemAdjudication);
    return createdExplanationOfBenefitItemAdjudication;
  }

  /** The first ExplanationOfBenefitItemAdjudication of `adjudication`. One is added when the list is empty. */
  getAdjudicationFirstRep(): ExplanationOfBenefitItemAdjudication {
    const firstExplanationOfBenefitItemAdjudication = this.getAdjudication()[0];
    return firstExplanationOfBenefitItemAdjudication === undefined
      ? this.addAdjudication()
      : firstExplanationOfBenefitItemAdjudication;
  }

  /** Insurer added line items (0..*) Never undefined; an empty list is created when absent. */
  getSubDetail(): ExplanationOfBenefitAddItemDetailSubDetail[] {
    if (this.subDetail === undefined) {
      this.subDetail = [];
    }
    return this.subDetail;
  }

  setSubDetail(subDetail: ExplanationOfBenefitAddItemDetailSubDetail[] | undefined): this {
    return this.setFieldValue('subDetail', subDetail);
  }

  hasSubDetail(): boolean {
    return this.hasFieldValue('subDetail');
  }

  /** Appends a new, empty ExplanationOfBenefitAddItemDetailSubDetail to `subDetail` and returns it so it can be filled in. */
  addSubDetail(): ExplanationOfBenefitAddItemDetailSubDetail;
  /** Appends the given ExplanationOfBenefitAddItemDetailSubDetail to `subDetail` and returns this object for chaining. */
  addSubDetail(
    explanationOfBenefitAddItemDetailSubDetail: ExplanationOfBenefitAddItemDetailSubDetail
  ): this;
  addSubDetail(
    explanationOfBenefitAddItemDetailSubDetail?: ExplanationOfBenefitAddItemDetailSubDetail
  ): ExplanationOfBenefitAddItemDetailSubDetail | this {
    if (explanationOfBenefitAddItemDetailSubDetail !== undefined) {
      return this.addFieldValue('subDetail', explanationOfBenefitAddItemDetailSubDetail);
    }
    const createdExplanationOfBenefitAddItemDetailSubDetail =
      new ExplanationOfBenefitAddItemDetailSubDetail();
    this.addFieldValue('subDetail', createdExplanationOfBenefitAddItemDetailSubDetail);
    return createdExplanationOfBenefitAddItemDetailSubDetail;
  }

  /** The first ExplanationOfBenefitAddItemDetailSubDetail of `subDetail`. One is added when the list is empty. */
  getSubDetailFirstRep(): ExplanationOfBenefitAddItemDetailSubDetail {
    const firstExplanationOfBenefitAddItemDetailSubDetail = this.getSubDetail()[0];
    return firstExplanationOfBenefitAddItemDetailSubDetail === undefined
      ? this.addSubDetail()
      : firstExplanationOfBenefitAddItemDetailSubDetail;
  }
}

modelTypeRegistry.register(
  'ExplanationOfBenefitAddItemDetail',
  ExplanationOfBenefitAddItemDetail,
  false
);

/**
 * Insurer added line items
 */
export class ExplanationOfBenefitAddItemDetailSubDetail extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'productOrService',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'productOrService', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'modifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'modifier', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'unitPrice',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'unitPrice', typeCode: 'Money' }],
    },
    {
      elementName: 'factor',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'factor', typeCode: 'decimal' }],
    },
    {
      elementName: 'net',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'net', typeCode: 'Money' }],
    },
    {
      elementName: 'noteNumber',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'noteNumber', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'adjudication',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'adjudication', typeCode: 'ExplanationOfBenefitItemAdjudication' }],
    },
  ];

  /** Billing, service, product, or drug code (1..1) */
  productOrService?: CodeableConcept;

  /** Service/Product billing modifiers (0..*) */
  modifier?: CodeableConcept[];

  /** Count of products or services (0..1) */
  quantity?: Quantity;

  /** Fee, charge or cost per item (0..1) */
  unitPrice?: Money;

  /** Price scaling factor (0..1) */
  factor?: number;
  /** Id and extensions of the primitive `factor`. */
  _factor?: Element;

  /** Total item cost (0..1) */
  net?: Money;

  /** Applicable note numbers (0..*) */
  noteNumber?: number[];
  /** Id and extensions of the primitive `noteNumber`. */
  _noteNumber?: (Element | null)[];

  /** Added items adjudication (0..*) */
  adjudication?: ExplanationOfBenefitItemAdjudication[];

  override fhirType(): string {
    return 'ExplanationOfBenefit.addItem.detail.subDetail';
  }

  /** FHIR JSON for this ExplanationOfBenefitAddItemDetailSubDetail, typed as the plain `ExplanationOfBenefitSubDetail1` data type. */
  override toJSON(): plainTypes.ExplanationOfBenefitSubDetail1 {
    return this.serialize() as plainTypes.ExplanationOfBenefitSubDetail1;
  }

  /** Billing, service, product, or drug code (1..1) Created when absent. */
  getProductOrService(): CodeableConcept {
    if (this.productOrService === undefined) {
      this.productOrService = new CodeableConcept();
    }
    return this.productOrService;
  }

  setProductOrService(productOrService: CodeableConcept | undefined): this {
    return this.setFieldValue('productOrService', productOrService);
  }

  hasProductOrService(): boolean {
    return this.hasFieldValue('productOrService');
  }

  /** Service/Product billing modifiers (0..*) Never undefined; an empty list is created when absent. */
  getModifier(): CodeableConcept[] {
    if (this.modifier === undefined) {
      this.modifier = [];
    }
    return this.modifier;
  }

  setModifier(modifier: CodeableConcept[] | undefined): this {
    return this.setFieldValue('modifier', modifier);
  }

  hasModifier(): boolean {
    return this.hasFieldValue('modifier');
  }

  /** Appends a new, empty CodeableConcept to `modifier` and returns it so it can be filled in. */
  addModifier(): CodeableConcept;
  /** Appends the given CodeableConcept to `modifier` and returns this object for chaining. */
  addModifier(codeableConcept: CodeableConcept): this;
  addModifier(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('modifier', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('modifier', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `modifier`. One is added when the list is empty. */
  getModifierFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getModifier()[0];
    return firstCodeableConcept === undefined ? this.addModifier() : firstCodeableConcept;
  }

  /** Count of products or services (0..1) Created when absent. */
  getQuantity(): Quantity {
    if (this.quantity === undefined) {
      this.quantity = new Quantity();
    }
    return this.quantity;
  }

  setQuantity(quantity: Quantity | undefined): this {
    return this.setFieldValue('quantity', quantity);
  }

  hasQuantity(): boolean {
    return this.hasFieldValue('quantity');
  }

  /** Fee, charge or cost per item (0..1) Created when absent. */
  getUnitPrice(): Money {
    if (this.unitPrice === undefined) {
      this.unitPrice = new Money();
    }
    return this.unitPrice;
  }

  setUnitPrice(unitPrice: Money | undefined): this {
    return this.setFieldValue('unitPrice', unitPrice);
  }

  hasUnitPrice(): boolean {
    return this.hasFieldValue('unitPrice');
  }

  /** Price scaling factor (0..1) */
  getFactor(): number | undefined {
    return this.factor;
  }

  /** Sets `factor`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setFactor(factor: number | undefined): this {
    return this.setFieldValue('factor', factor);
  }

  hasFactor(): boolean {
    return this.hasFieldValue('factor');
  }

  /** The element carrying the id and extensions of `factor`. Created when absent. */
  getFactorElement(): Element {
    if (this._factor === undefined) {
      this._factor = new Element();
    }
    return this._factor;
  }

  setFactorElement(factorElement: Element | undefined): this {
    this._factor = factorElement;
    return this;
  }

  /** Total item cost (0..1) Created when absent. */
  getNet(): Money {
    if (this.net === undefined) {
      this.net = new Money();
    }
    return this.net;
  }

  setNet(net: Money | undefined): this {
    return this.setFieldValue('net', net);
  }

  hasNet(): boolean {
    return this.hasFieldValue('net');
  }

  /** Applicable note numbers (0..*) Never undefined; an empty list is created when absent. */
  getNoteNumber(): number[] {
    if (this.noteNumber === undefined) {
      this.noteNumber = [];
    }
    return this.noteNumber;
  }

  setNoteNumber(noteNumber: number[] | undefined): this {
    return this.setFieldValue('noteNumber', noteNumber);
  }

  hasNoteNumber(): boolean {
    return this.hasFieldValue('noteNumber');
  }

  /** Appends one value to `noteNumber`. Throws a FhirModelError when it is not a valid FHIR positiveInt. */
  addNoteNumber(noteNumber: number): this {
    return this.addFieldValue('noteNumber', noteNumber);
  }

  /** Added items adjudication (0..*) Never undefined; an empty list is created when absent. */
  getAdjudication(): ExplanationOfBenefitItemAdjudication[] {
    if (this.adjudication === undefined) {
      this.adjudication = [];
    }
    return this.adjudication;
  }

  setAdjudication(adjudication: ExplanationOfBenefitItemAdjudication[] | undefined): this {
    return this.setFieldValue('adjudication', adjudication);
  }

  hasAdjudication(): boolean {
    return this.hasFieldValue('adjudication');
  }

  /** Appends a new, empty ExplanationOfBenefitItemAdjudication to `adjudication` and returns it so it can be filled in. */
  addAdjudication(): ExplanationOfBenefitItemAdjudication;
  /** Appends the given ExplanationOfBenefitItemAdjudication to `adjudication` and returns this object for chaining. */
  addAdjudication(explanationOfBenefitItemAdjudication: ExplanationOfBenefitItemAdjudication): this;
  addAdjudication(
    explanationOfBenefitItemAdjudication?: ExplanationOfBenefitItemAdjudication
  ): ExplanationOfBenefitItemAdjudication | this {
    if (explanationOfBenefitItemAdjudication !== undefined) {
      return this.addFieldValue('adjudication', explanationOfBenefitItemAdjudication);
    }
    const createdExplanationOfBenefitItemAdjudication = new ExplanationOfBenefitItemAdjudication();
    this.addFieldValue('adjudication', createdExplanationOfBenefitItemAdjudication);
    return createdExplanationOfBenefitItemAdjudication;
  }

  /** The first ExplanationOfBenefitItemAdjudication of `adjudication`. One is added when the list is empty. */
  getAdjudicationFirstRep(): ExplanationOfBenefitItemAdjudication {
    const firstExplanationOfBenefitItemAdjudication = this.getAdjudication()[0];
    return firstExplanationOfBenefitItemAdjudication === undefined
      ? this.addAdjudication()
      : firstExplanationOfBenefitItemAdjudication;
  }
}

modelTypeRegistry.register(
  'ExplanationOfBenefitAddItemDetailSubDetail',
  ExplanationOfBenefitAddItemDetailSubDetail,
  false
);

/**
 * Adjudication totals
 */
export class ExplanationOfBenefitTotal extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'category',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'amount',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'amount', typeCode: 'Money' }],
    },
  ];

  /** Type of adjudication information (1..1) */
  category?: CodeableConcept;

  /** Financial total for the category (1..1) */
  amount?: Money;

  override fhirType(): string {
    return 'ExplanationOfBenefit.total';
  }

  /** FHIR JSON for this ExplanationOfBenefitTotal, typed as the plain `ExplanationOfBenefitTotal` data type. */
  override toJSON(): plainTypes.ExplanationOfBenefitTotal {
    return this.serialize() as plainTypes.ExplanationOfBenefitTotal;
  }

  /** Type of adjudication information (1..1) Created when absent. */
  getCategory(): CodeableConcept {
    if (this.category === undefined) {
      this.category = new CodeableConcept();
    }
    return this.category;
  }

  setCategory(category: CodeableConcept | undefined): this {
    return this.setFieldValue('category', category);
  }

  hasCategory(): boolean {
    return this.hasFieldValue('category');
  }

  /** Financial total for the category (1..1) Created when absent. */
  getAmount(): Money {
    if (this.amount === undefined) {
      this.amount = new Money();
    }
    return this.amount;
  }

  setAmount(amount: Money | undefined): this {
    return this.setFieldValue('amount', amount);
  }

  hasAmount(): boolean {
    return this.hasFieldValue('amount');
  }
}

modelTypeRegistry.register('ExplanationOfBenefitTotal', ExplanationOfBenefitTotal, false);

/**
 * Payment Details
 */
export class ExplanationOfBenefitPayment extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'adjustment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'adjustment', typeCode: 'Money' }],
    },
    {
      elementName: 'adjustmentReason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'adjustmentReason', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'date',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'date', typeCode: 'date' }],
    },
    {
      elementName: 'amount',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'amount', typeCode: 'Money' }],
    },
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
  ];

  /** Partial or complete payment (0..1) */
  type?: CodeableConcept;

  /** Payment adjustment for non-claim issues (0..1) */
  adjustment?: Money;

  /** Explanation for the variance (0..1) */
  adjustmentReason?: CodeableConcept;

  /** Expected date of payment (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Payable amount after adjustment (0..1) */
  amount?: Money;

  /** Business identifier for the payment (0..1) */
  identifier?: Identifier;

  override fhirType(): string {
    return 'ExplanationOfBenefit.payment';
  }

  /** FHIR JSON for this ExplanationOfBenefitPayment, typed as the plain `ExplanationOfBenefitPayment` data type. */
  override toJSON(): plainTypes.ExplanationOfBenefitPayment {
    return this.serialize() as plainTypes.ExplanationOfBenefitPayment;
  }

  /** Partial or complete payment (0..1) Created when absent. */
  getType(): CodeableConcept {
    if (this.type === undefined) {
      this.type = new CodeableConcept();
    }
    return this.type;
  }

  setType(type: CodeableConcept | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Payment adjustment for non-claim issues (0..1) Created when absent. */
  getAdjustment(): Money {
    if (this.adjustment === undefined) {
      this.adjustment = new Money();
    }
    return this.adjustment;
  }

  setAdjustment(adjustment: Money | undefined): this {
    return this.setFieldValue('adjustment', adjustment);
  }

  hasAdjustment(): boolean {
    return this.hasFieldValue('adjustment');
  }

  /** Explanation for the variance (0..1) Created when absent. */
  getAdjustmentReason(): CodeableConcept {
    if (this.adjustmentReason === undefined) {
      this.adjustmentReason = new CodeableConcept();
    }
    return this.adjustmentReason;
  }

  setAdjustmentReason(adjustmentReason: CodeableConcept | undefined): this {
    return this.setFieldValue('adjustmentReason', adjustmentReason);
  }

  hasAdjustmentReason(): boolean {
    return this.hasFieldValue('adjustmentReason');
  }

  /** Expected date of payment (0..1) */
  getDate(): string | undefined {
    return this.date;
  }

  /** Sets `date`. Throws a FhirModelError when the value is not a valid FHIR date. */
  setDate(date: string | undefined): this {
    return this.setFieldValue('date', date);
  }

  hasDate(): boolean {
    return this.hasFieldValue('date');
  }

  /** The element carrying the id and extensions of `date`. Created when absent. */
  getDateElement(): Element {
    if (this._date === undefined) {
      this._date = new Element();
    }
    return this._date;
  }

  setDateElement(dateElement: Element | undefined): this {
    this._date = dateElement;
    return this;
  }

  /** Payable amount after adjustment (0..1) Created when absent. */
  getAmount(): Money {
    if (this.amount === undefined) {
      this.amount = new Money();
    }
    return this.amount;
  }

  setAmount(amount: Money | undefined): this {
    return this.setFieldValue('amount', amount);
  }

  hasAmount(): boolean {
    return this.hasFieldValue('amount');
  }

  /** Business identifier for the payment (0..1) Created when absent. */
  getIdentifier(): Identifier {
    if (this.identifier === undefined) {
      this.identifier = new Identifier();
    }
    return this.identifier;
  }

  setIdentifier(identifier: Identifier | undefined): this {
    return this.setFieldValue('identifier', identifier);
  }

  hasIdentifier(): boolean {
    return this.hasFieldValue('identifier');
  }
}

modelTypeRegistry.register('ExplanationOfBenefitPayment', ExplanationOfBenefitPayment, false);

/**
 * Note concerning adjudication
 */
export class ExplanationOfBenefitProcessNote extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'number',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'number', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.NoteType }],
    },
    {
      elementName: 'text',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'text', typeCode: 'string' }],
    },
    {
      elementName: 'language',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'language', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Note instance identifier (0..1) */
  number?: number;
  /** Id and extensions of the primitive `number`. */
  _number?: Element;

  /** display | print | printoper (0..1) */
  type?: valueSetCodes.NoteType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Note explanatory text (0..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;

  /** Language of the text (0..1) */
  language?: CodeableConcept;

  override fhirType(): string {
    return 'ExplanationOfBenefit.processNote';
  }

  /** FHIR JSON for this ExplanationOfBenefitProcessNote, typed as the plain `ExplanationOfBenefitProcessNote` data type. */
  override toJSON(): plainTypes.ExplanationOfBenefitProcessNote {
    return this.serialize() as plainTypes.ExplanationOfBenefitProcessNote;
  }

  /** Note instance identifier (0..1) */
  getNumber(): number | undefined {
    return this.number;
  }

  /** Sets `number`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setNumber(number: number | undefined): this {
    return this.setFieldValue('number', number);
  }

  hasNumber(): boolean {
    return this.hasFieldValue('number');
  }

  /** The element carrying the id and extensions of `number`. Created when absent. */
  getNumberElement(): Element {
    if (this._number === undefined) {
      this._number = new Element();
    }
    return this._number;
  }

  setNumberElement(numberElement: Element | undefined): this {
    this._number = numberElement;
    return this;
  }

  /** display | print | printoper (0..1) */
  getType(): valueSetCodes.NoteType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.NoteType | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** The element carrying the id and extensions of `type`. Created when absent. */
  getTypeElement(): Element {
    if (this._type === undefined) {
      this._type = new Element();
    }
    return this._type;
  }

  setTypeElement(typeElement: Element | undefined): this {
    this._type = typeElement;
    return this;
  }

  /** Note explanatory text (0..1) */
  getText(): string | undefined {
    return this.text;
  }

  /** Sets `text`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setText(text: string | undefined): this {
    return this.setFieldValue('text', text);
  }

  hasText(): boolean {
    return this.hasFieldValue('text');
  }

  /** The element carrying the id and extensions of `text`. Created when absent. */
  getTextElement(): Element {
    if (this._text === undefined) {
      this._text = new Element();
    }
    return this._text;
  }

  setTextElement(textElement: Element | undefined): this {
    this._text = textElement;
    return this;
  }

  /** Language of the text (0..1) Created when absent. */
  getLanguage(): CodeableConcept {
    if (this.language === undefined) {
      this.language = new CodeableConcept();
    }
    return this.language;
  }

  setLanguage(language: CodeableConcept | undefined): this {
    return this.setFieldValue('language', language);
  }

  hasLanguage(): boolean {
    return this.hasFieldValue('language');
  }
}

modelTypeRegistry.register(
  'ExplanationOfBenefitProcessNote',
  ExplanationOfBenefitProcessNote,
  false
);

/**
 * Balance by Benefit Category
 */
export class ExplanationOfBenefitBenefitBalance extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'category',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'excluded',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'excluded', typeCode: 'boolean' }],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'network',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'network', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'unit',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'unit', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'term',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'term', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'financial',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'financial', typeCode: 'ExplanationOfBenefitBenefitBalanceFinancial' }],
    },
  ];

  /** Benefit classification (1..1) */
  category?: CodeableConcept;

  /** Excluded from the plan (0..1) */
  excluded?: boolean;
  /** Id and extensions of the primitive `excluded`. */
  _excluded?: Element;

  /** Short name for the benefit (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Description of the benefit or services covered (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** In or out of network (0..1) */
  network?: CodeableConcept;

  /** Individual or family (0..1) */
  unit?: CodeableConcept;

  /** Annual or lifetime (0..1) */
  term?: CodeableConcept;

  /** Benefit Summary (0..*) */
  financial?: ExplanationOfBenefitBenefitBalanceFinancial[];

  override fhirType(): string {
    return 'ExplanationOfBenefit.benefitBalance';
  }

  /** FHIR JSON for this ExplanationOfBenefitBenefitBalance, typed as the plain `ExplanationOfBenefitBenefitBalance` data type. */
  override toJSON(): plainTypes.ExplanationOfBenefitBenefitBalance {
    return this.serialize() as plainTypes.ExplanationOfBenefitBenefitBalance;
  }

  /** Benefit classification (1..1) Created when absent. */
  getCategory(): CodeableConcept {
    if (this.category === undefined) {
      this.category = new CodeableConcept();
    }
    return this.category;
  }

  setCategory(category: CodeableConcept | undefined): this {
    return this.setFieldValue('category', category);
  }

  hasCategory(): boolean {
    return this.hasFieldValue('category');
  }

  /** Excluded from the plan (0..1) */
  getExcluded(): boolean | undefined {
    return this.excluded;
  }

  /** Sets `excluded`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setExcluded(excluded: boolean | undefined): this {
    return this.setFieldValue('excluded', excluded);
  }

  hasExcluded(): boolean {
    return this.hasFieldValue('excluded');
  }

  /** The element carrying the id and extensions of `excluded`. Created when absent. */
  getExcludedElement(): Element {
    if (this._excluded === undefined) {
      this._excluded = new Element();
    }
    return this._excluded;
  }

  setExcludedElement(excludedElement: Element | undefined): this {
    this._excluded = excludedElement;
    return this;
  }

  /** Short name for the benefit (0..1) */
  getName(): string | undefined {
    return this.name;
  }

  /** Sets `name`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setName(name: string | undefined): this {
    return this.setFieldValue('name', name);
  }

  hasName(): boolean {
    return this.hasFieldValue('name');
  }

  /** The element carrying the id and extensions of `name`. Created when absent. */
  getNameElement(): Element {
    if (this._name === undefined) {
      this._name = new Element();
    }
    return this._name;
  }

  setNameElement(nameElement: Element | undefined): this {
    this._name = nameElement;
    return this;
  }

  /** Description of the benefit or services covered (0..1) */
  getDescription(): string | undefined {
    return this.description;
  }

  /** Sets `description`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDescription(description: string | undefined): this {
    return this.setFieldValue('description', description);
  }

  hasDescription(): boolean {
    return this.hasFieldValue('description');
  }

  /** The element carrying the id and extensions of `description`. Created when absent. */
  getDescriptionElement(): Element {
    if (this._description === undefined) {
      this._description = new Element();
    }
    return this._description;
  }

  setDescriptionElement(descriptionElement: Element | undefined): this {
    this._description = descriptionElement;
    return this;
  }

  /** In or out of network (0..1) Created when absent. */
  getNetwork(): CodeableConcept {
    if (this.network === undefined) {
      this.network = new CodeableConcept();
    }
    return this.network;
  }

  setNetwork(network: CodeableConcept | undefined): this {
    return this.setFieldValue('network', network);
  }

  hasNetwork(): boolean {
    return this.hasFieldValue('network');
  }

  /** Individual or family (0..1) Created when absent. */
  getUnit(): CodeableConcept {
    if (this.unit === undefined) {
      this.unit = new CodeableConcept();
    }
    return this.unit;
  }

  setUnit(unit: CodeableConcept | undefined): this {
    return this.setFieldValue('unit', unit);
  }

  hasUnit(): boolean {
    return this.hasFieldValue('unit');
  }

  /** Annual or lifetime (0..1) Created when absent. */
  getTerm(): CodeableConcept {
    if (this.term === undefined) {
      this.term = new CodeableConcept();
    }
    return this.term;
  }

  setTerm(term: CodeableConcept | undefined): this {
    return this.setFieldValue('term', term);
  }

  hasTerm(): boolean {
    return this.hasFieldValue('term');
  }

  /** Benefit Summary (0..*) Never undefined; an empty list is created when absent. */
  getFinancial(): ExplanationOfBenefitBenefitBalanceFinancial[] {
    if (this.financial === undefined) {
      this.financial = [];
    }
    return this.financial;
  }

  setFinancial(financial: ExplanationOfBenefitBenefitBalanceFinancial[] | undefined): this {
    return this.setFieldValue('financial', financial);
  }

  hasFinancial(): boolean {
    return this.hasFieldValue('financial');
  }

  /** Appends a new, empty ExplanationOfBenefitBenefitBalanceFinancial to `financial` and returns it so it can be filled in. */
  addFinancial(): ExplanationOfBenefitBenefitBalanceFinancial;
  /** Appends the given ExplanationOfBenefitBenefitBalanceFinancial to `financial` and returns this object for chaining. */
  addFinancial(
    explanationOfBenefitBenefitBalanceFinancial: ExplanationOfBenefitBenefitBalanceFinancial
  ): this;
  addFinancial(
    explanationOfBenefitBenefitBalanceFinancial?: ExplanationOfBenefitBenefitBalanceFinancial
  ): ExplanationOfBenefitBenefitBalanceFinancial | this {
    if (explanationOfBenefitBenefitBalanceFinancial !== undefined) {
      return this.addFieldValue('financial', explanationOfBenefitBenefitBalanceFinancial);
    }
    const createdExplanationOfBenefitBenefitBalanceFinancial =
      new ExplanationOfBenefitBenefitBalanceFinancial();
    this.addFieldValue('financial', createdExplanationOfBenefitBenefitBalanceFinancial);
    return createdExplanationOfBenefitBenefitBalanceFinancial;
  }

  /** The first ExplanationOfBenefitBenefitBalanceFinancial of `financial`. One is added when the list is empty. */
  getFinancialFirstRep(): ExplanationOfBenefitBenefitBalanceFinancial {
    const firstExplanationOfBenefitBenefitBalanceFinancial = this.getFinancial()[0];
    return firstExplanationOfBenefitBenefitBalanceFinancial === undefined
      ? this.addFinancial()
      : firstExplanationOfBenefitBenefitBalanceFinancial;
  }
}

modelTypeRegistry.register(
  'ExplanationOfBenefitBenefitBalance',
  ExplanationOfBenefitBenefitBalance,
  false
);

/**
 * Benefit Summary
 */
export class ExplanationOfBenefitBenefitBalanceFinancial extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'allowed',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'allowedUnsignedInt', typeCode: 'unsignedInt' },
        { jsonKey: 'allowedString', typeCode: 'string' },
        { jsonKey: 'allowedMoney', typeCode: 'Money' },
      ],
    },
    {
      elementName: 'used',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'usedUnsignedInt', typeCode: 'unsignedInt' },
        { jsonKey: 'usedMoney', typeCode: 'Money' },
      ],
    },
  ];

  /** Benefit classification (1..1) */
  type?: CodeableConcept;

  /** Benefits allowed (0..1) */
  allowedUnsignedInt?: number;
  /** Id and extensions of the primitive `allowedUnsignedInt`. */
  _allowedUnsignedInt?: Element;
  /** Benefits allowed (0..1) */
  allowedString?: string;
  /** Id and extensions of the primitive `allowedString`. */
  _allowedString?: Element;
  /** Benefits allowed (0..1) */
  allowedMoney?: Money;

  /** Benefits used (0..1) */
  usedUnsignedInt?: number;
  /** Id and extensions of the primitive `usedUnsignedInt`. */
  _usedUnsignedInt?: Element;
  /** Benefits used (0..1) */
  usedMoney?: Money;

  override fhirType(): string {
    return 'ExplanationOfBenefit.benefitBalance.financial';
  }

  /** FHIR JSON for this ExplanationOfBenefitBenefitBalanceFinancial, typed as the plain `ExplanationOfBenefitFinancial` data type. */
  override toJSON(): plainTypes.ExplanationOfBenefitFinancial {
    return this.serialize() as plainTypes.ExplanationOfBenefitFinancial;
  }

  /** Benefit classification (1..1) Created when absent. */
  getType(): CodeableConcept {
    if (this.type === undefined) {
      this.type = new CodeableConcept();
    }
    return this.type;
  }

  setType(type: CodeableConcept | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Benefits allowed (0..1) Whichever type of `allowed[x]` is set. */
  getAllowed(): number | string | Money | undefined {
    return this.getChoiceValue<number | string | Money>('allowed');
  }

  /** True when any type of `allowed[x]` is set. */
  hasAllowed(): boolean {
    return this.hasChoiceValue('allowed');
  }

  getAllowedUnsignedInt(): number | undefined {
    return this.allowedUnsignedInt;
  }

  /** Sets `allowed[x]` as unsignedInt and clears every other type of it. */
  setAllowedUnsignedInt(allowedUnsignedInt: number | undefined): this {
    return this.setFieldValue('allowedUnsignedInt', allowedUnsignedInt);
  }

  hasAllowedUnsignedInt(): boolean {
    return this.hasFieldValue('allowedUnsignedInt');
  }

  getAllowedString(): string | undefined {
    return this.allowedString;
  }

  /** Sets `allowed[x]` as string and clears every other type of it. */
  setAllowedString(allowedString: string | undefined): this {
    return this.setFieldValue('allowedString', allowedString);
  }

  hasAllowedString(): boolean {
    return this.hasFieldValue('allowedString');
  }

  getAllowedMoney(): Money | undefined {
    return this.allowedMoney;
  }

  /** Sets `allowed[x]` as Money and clears every other type of it. */
  setAllowedMoney(allowedMoney: Money | undefined): this {
    return this.setFieldValue('allowedMoney', allowedMoney);
  }

  hasAllowedMoney(): boolean {
    return this.hasFieldValue('allowedMoney');
  }

  /** Benefits used (0..1) Whichever type of `used[x]` is set. */
  getUsed(): number | Money | undefined {
    return this.getChoiceValue<number | Money>('used');
  }

  /** True when any type of `used[x]` is set. */
  hasUsed(): boolean {
    return this.hasChoiceValue('used');
  }

  getUsedUnsignedInt(): number | undefined {
    return this.usedUnsignedInt;
  }

  /** Sets `used[x]` as unsignedInt and clears every other type of it. */
  setUsedUnsignedInt(usedUnsignedInt: number | undefined): this {
    return this.setFieldValue('usedUnsignedInt', usedUnsignedInt);
  }

  hasUsedUnsignedInt(): boolean {
    return this.hasFieldValue('usedUnsignedInt');
  }

  getUsedMoney(): Money | undefined {
    return this.usedMoney;
  }

  /** Sets `used[x]` as Money and clears every other type of it. */
  setUsedMoney(usedMoney: Money | undefined): this {
    return this.setFieldValue('usedMoney', usedMoney);
  }

  hasUsedMoney(): boolean {
    return this.hasFieldValue('usedMoney');
  }
}

modelTypeRegistry.register(
  'ExplanationOfBenefitBenefitBalanceFinancial',
  ExplanationOfBenefitBenefitBalanceFinancial,
  false
);
