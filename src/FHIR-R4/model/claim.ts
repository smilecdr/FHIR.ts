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
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Money } from './money';
import { Period } from './period';
import { Quantity } from './quantity';
import { Reference } from './reference';

/**
 * A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.
 */
export class Claim extends DomainResource {
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
          allowedCodes: valueSetCodes.FinancialResourceStatusCodes,
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
      minimum: 0,
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
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'priority', typeCode: 'CodeableConcept' }],
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
      types: [{ jsonKey: 'related', typeCode: 'ClaimRelated' }],
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
          targetResourceTypes: ['DeviceRequest', 'MedicationRequest', 'VisionPrescription'],
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
          targetResourceTypes: ['DeviceRequest', 'MedicationRequest', 'VisionPrescription'],
        },
      ],
    },
    {
      elementName: 'payee',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'payee', typeCode: 'ClaimPayee' }],
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
      elementName: 'careTeam',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'careTeam', typeCode: 'ClaimCareTeam' }],
    },
    {
      elementName: 'supportingInfo',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'supportingInfo', typeCode: 'ClaimSupportingInfo' }],
    },
    {
      elementName: 'diagnosis',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'diagnosis', typeCode: 'ClaimDiagnosis' }],
    },
    {
      elementName: 'procedure',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'procedure', typeCode: 'ClaimProcedure' }],
    },
    {
      elementName: 'insurance',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'insurance', typeCode: 'ClaimInsurance' }],
    },
    {
      elementName: 'accident',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'accident', typeCode: 'ClaimAccident' }],
    },
    {
      elementName: 'item',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'item', typeCode: 'ClaimItem' }],
    },
    {
      elementName: 'total',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'total', typeCode: 'Money' }],
    },
  ];

  readonly resourceType = 'Claim';

  /** Business Identifier for claim (0..*) */
  identifier?: Identifier[];

  /** active | cancelled | draft | entered-in-error (1..1) */
  status?: valueSetCodes.FinancialResourceStatusCodes;
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

  /** Resource creation date (1..1) */
  created?: string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;

  /** Author of the claim (0..1) */
  enterer?: Reference;

  /** Target (0..1) */
  insurer?: Reference;

  /** Party responsible for the claim (1..1) */
  provider?: Reference;

  /** Desired processing ugency (1..1) */
  priority?: CodeableConcept;

  /** For whom to reserve funds (0..1) */
  fundsReserve?: CodeableConcept;

  /** Prior or corollary claims (0..*) */
  related?: ClaimRelated[];

  /** Prescription authorizing services and products (0..1) */
  prescription?: Reference;

  /** Original prescription if superseded by fulfiller (0..1) */
  originalPrescription?: Reference;

  /** Recipient of benefits payable (0..1) */
  payee?: ClaimPayee;

  /** Treatment referral (0..1) */
  referral?: Reference;

  /** Servicing facility (0..1) */
  facility?: Reference;

  /** Members of the care team (0..*) */
  careTeam?: ClaimCareTeam[];

  /** Supporting information (0..*) */
  supportingInfo?: ClaimSupportingInfo[];

  /** Pertinent diagnosis information (0..*) */
  diagnosis?: ClaimDiagnosis[];

  /** Clinical procedures performed (0..*) */
  procedure?: ClaimProcedure[];

  /** Patient insurance information (1..*) */
  insurance?: ClaimInsurance[];

  /** Details of the event (0..1) */
  accident?: ClaimAccident;

  /** Product or service provided (0..*) */
  item?: ClaimItem[];

  /** Total claim cost (0..1) */
  total?: Money;

  override fhirType(): string {
    return 'Claim';
  }

  /** FHIR JSON for this Claim, typed as the plain `Claim` data type. */
  override toJSON(): plainTypes.Claim {
    return this.serialize() as plainTypes.Claim;
  }

  /** Business Identifier for claim (0..*) Never undefined; an empty list is created when absent. */
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
  getStatus(): valueSetCodes.FinancialResourceStatusCodes | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.FinancialResourceStatusCodes | undefined): this {
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

  /** Resource creation date (1..1) */
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

  /** Target (0..1) Created when absent. */
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

  /** Desired processing ugency (1..1) Created when absent. */
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
  getRelated(): ClaimRelated[] {
    if (this.related === undefined) {
      this.related = [];
    }
    return this.related;
  }

  setRelated(related: ClaimRelated[] | undefined): this {
    return this.setFieldValue('related', related);
  }

  hasRelated(): boolean {
    return this.hasFieldValue('related');
  }

  /** Appends a new, empty ClaimRelated to `related` and returns it so it can be filled in. */
  addRelated(): ClaimRelated;
  /** Appends the given ClaimRelated to `related` and returns this object for chaining. */
  addRelated(claimRelated: ClaimRelated): this;
  addRelated(claimRelated?: ClaimRelated): ClaimRelated | this {
    if (claimRelated !== undefined) {
      return this.addFieldValue('related', claimRelated);
    }
    const createdClaimRelated = new ClaimRelated();
    this.addFieldValue('related', createdClaimRelated);
    return createdClaimRelated;
  }

  /** The first ClaimRelated of `related`. One is added when the list is empty. */
  getRelatedFirstRep(): ClaimRelated {
    const firstClaimRelated = this.getRelated()[0];
    return firstClaimRelated === undefined ? this.addRelated() : firstClaimRelated;
  }

  /** Prescription authorizing services and products (0..1) Created when absent. */
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

  /** Original prescription if superseded by fulfiller (0..1) Created when absent. */
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
  getPayee(): ClaimPayee {
    if (this.payee === undefined) {
      this.payee = new ClaimPayee();
    }
    return this.payee;
  }

  setPayee(payee: ClaimPayee | undefined): this {
    return this.setFieldValue('payee', payee);
  }

  hasPayee(): boolean {
    return this.hasFieldValue('payee');
  }

  /** Treatment referral (0..1) Created when absent. */
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

  /** Servicing facility (0..1) Created when absent. */
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

  /** Members of the care team (0..*) Never undefined; an empty list is created when absent. */
  getCareTeam(): ClaimCareTeam[] {
    if (this.careTeam === undefined) {
      this.careTeam = [];
    }
    return this.careTeam;
  }

  setCareTeam(careTeam: ClaimCareTeam[] | undefined): this {
    return this.setFieldValue('careTeam', careTeam);
  }

  hasCareTeam(): boolean {
    return this.hasFieldValue('careTeam');
  }

  /** Appends a new, empty ClaimCareTeam to `careTeam` and returns it so it can be filled in. */
  addCareTeam(): ClaimCareTeam;
  /** Appends the given ClaimCareTeam to `careTeam` and returns this object for chaining. */
  addCareTeam(claimCareTeam: ClaimCareTeam): this;
  addCareTeam(claimCareTeam?: ClaimCareTeam): ClaimCareTeam | this {
    if (claimCareTeam !== undefined) {
      return this.addFieldValue('careTeam', claimCareTeam);
    }
    const createdClaimCareTeam = new ClaimCareTeam();
    this.addFieldValue('careTeam', createdClaimCareTeam);
    return createdClaimCareTeam;
  }

  /** The first ClaimCareTeam of `careTeam`. One is added when the list is empty. */
  getCareTeamFirstRep(): ClaimCareTeam {
    const firstClaimCareTeam = this.getCareTeam()[0];
    return firstClaimCareTeam === undefined ? this.addCareTeam() : firstClaimCareTeam;
  }

  /** Supporting information (0..*) Never undefined; an empty list is created when absent. */
  getSupportingInfo(): ClaimSupportingInfo[] {
    if (this.supportingInfo === undefined) {
      this.supportingInfo = [];
    }
    return this.supportingInfo;
  }

  setSupportingInfo(supportingInfo: ClaimSupportingInfo[] | undefined): this {
    return this.setFieldValue('supportingInfo', supportingInfo);
  }

  hasSupportingInfo(): boolean {
    return this.hasFieldValue('supportingInfo');
  }

  /** Appends a new, empty ClaimSupportingInfo to `supportingInfo` and returns it so it can be filled in. */
  addSupportingInfo(): ClaimSupportingInfo;
  /** Appends the given ClaimSupportingInfo to `supportingInfo` and returns this object for chaining. */
  addSupportingInfo(claimSupportingInfo: ClaimSupportingInfo): this;
  addSupportingInfo(claimSupportingInfo?: ClaimSupportingInfo): ClaimSupportingInfo | this {
    if (claimSupportingInfo !== undefined) {
      return this.addFieldValue('supportingInfo', claimSupportingInfo);
    }
    const createdClaimSupportingInfo = new ClaimSupportingInfo();
    this.addFieldValue('supportingInfo', createdClaimSupportingInfo);
    return createdClaimSupportingInfo;
  }

  /** The first ClaimSupportingInfo of `supportingInfo`. One is added when the list is empty. */
  getSupportingInfoFirstRep(): ClaimSupportingInfo {
    const firstClaimSupportingInfo = this.getSupportingInfo()[0];
    return firstClaimSupportingInfo === undefined
      ? this.addSupportingInfo()
      : firstClaimSupportingInfo;
  }

  /** Pertinent diagnosis information (0..*) Never undefined; an empty list is created when absent. */
  getDiagnosis(): ClaimDiagnosis[] {
    if (this.diagnosis === undefined) {
      this.diagnosis = [];
    }
    return this.diagnosis;
  }

  setDiagnosis(diagnosis: ClaimDiagnosis[] | undefined): this {
    return this.setFieldValue('diagnosis', diagnosis);
  }

  hasDiagnosis(): boolean {
    return this.hasFieldValue('diagnosis');
  }

  /** Appends a new, empty ClaimDiagnosis to `diagnosis` and returns it so it can be filled in. */
  addDiagnosis(): ClaimDiagnosis;
  /** Appends the given ClaimDiagnosis to `diagnosis` and returns this object for chaining. */
  addDiagnosis(claimDiagnosis: ClaimDiagnosis): this;
  addDiagnosis(claimDiagnosis?: ClaimDiagnosis): ClaimDiagnosis | this {
    if (claimDiagnosis !== undefined) {
      return this.addFieldValue('diagnosis', claimDiagnosis);
    }
    const createdClaimDiagnosis = new ClaimDiagnosis();
    this.addFieldValue('diagnosis', createdClaimDiagnosis);
    return createdClaimDiagnosis;
  }

  /** The first ClaimDiagnosis of `diagnosis`. One is added when the list is empty. */
  getDiagnosisFirstRep(): ClaimDiagnosis {
    const firstClaimDiagnosis = this.getDiagnosis()[0];
    return firstClaimDiagnosis === undefined ? this.addDiagnosis() : firstClaimDiagnosis;
  }

  /** Clinical procedures performed (0..*) Never undefined; an empty list is created when absent. */
  getProcedure(): ClaimProcedure[] {
    if (this.procedure === undefined) {
      this.procedure = [];
    }
    return this.procedure;
  }

  setProcedure(procedure: ClaimProcedure[] | undefined): this {
    return this.setFieldValue('procedure', procedure);
  }

  hasProcedure(): boolean {
    return this.hasFieldValue('procedure');
  }

  /** Appends a new, empty ClaimProcedure to `procedure` and returns it so it can be filled in. */
  addProcedure(): ClaimProcedure;
  /** Appends the given ClaimProcedure to `procedure` and returns this object for chaining. */
  addProcedure(claimProcedure: ClaimProcedure): this;
  addProcedure(claimProcedure?: ClaimProcedure): ClaimProcedure | this {
    if (claimProcedure !== undefined) {
      return this.addFieldValue('procedure', claimProcedure);
    }
    const createdClaimProcedure = new ClaimProcedure();
    this.addFieldValue('procedure', createdClaimProcedure);
    return createdClaimProcedure;
  }

  /** The first ClaimProcedure of `procedure`. One is added when the list is empty. */
  getProcedureFirstRep(): ClaimProcedure {
    const firstClaimProcedure = this.getProcedure()[0];
    return firstClaimProcedure === undefined ? this.addProcedure() : firstClaimProcedure;
  }

  /** Patient insurance information (1..*) Never undefined; an empty list is created when absent. */
  getInsurance(): ClaimInsurance[] {
    if (this.insurance === undefined) {
      this.insurance = [];
    }
    return this.insurance;
  }

  setInsurance(insurance: ClaimInsurance[] | undefined): this {
    return this.setFieldValue('insurance', insurance);
  }

  hasInsurance(): boolean {
    return this.hasFieldValue('insurance');
  }

  /** Appends a new, empty ClaimInsurance to `insurance` and returns it so it can be filled in. */
  addInsurance(): ClaimInsurance;
  /** Appends the given ClaimInsurance to `insurance` and returns this object for chaining. */
  addInsurance(claimInsurance: ClaimInsurance): this;
  addInsurance(claimInsurance?: ClaimInsurance): ClaimInsurance | this {
    if (claimInsurance !== undefined) {
      return this.addFieldValue('insurance', claimInsurance);
    }
    const createdClaimInsurance = new ClaimInsurance();
    this.addFieldValue('insurance', createdClaimInsurance);
    return createdClaimInsurance;
  }

  /** The first ClaimInsurance of `insurance`. One is added when the list is empty. */
  getInsuranceFirstRep(): ClaimInsurance {
    const firstClaimInsurance = this.getInsurance()[0];
    return firstClaimInsurance === undefined ? this.addInsurance() : firstClaimInsurance;
  }

  /** Details of the event (0..1) Created when absent. */
  getAccident(): ClaimAccident {
    if (this.accident === undefined) {
      this.accident = new ClaimAccident();
    }
    return this.accident;
  }

  setAccident(accident: ClaimAccident | undefined): this {
    return this.setFieldValue('accident', accident);
  }

  hasAccident(): boolean {
    return this.hasFieldValue('accident');
  }

  /** Product or service provided (0..*) Never undefined; an empty list is created when absent. */
  getItem(): ClaimItem[] {
    if (this.item === undefined) {
      this.item = [];
    }
    return this.item;
  }

  setItem(item: ClaimItem[] | undefined): this {
    return this.setFieldValue('item', item);
  }

  hasItem(): boolean {
    return this.hasFieldValue('item');
  }

  /** Appends a new, empty ClaimItem to `item` and returns it so it can be filled in. */
  addItem(): ClaimItem;
  /** Appends the given ClaimItem to `item` and returns this object for chaining. */
  addItem(claimItem: ClaimItem): this;
  addItem(claimItem?: ClaimItem): ClaimItem | this {
    if (claimItem !== undefined) {
      return this.addFieldValue('item', claimItem);
    }
    const createdClaimItem = new ClaimItem();
    this.addFieldValue('item', createdClaimItem);
    return createdClaimItem;
  }

  /** The first ClaimItem of `item`. One is added when the list is empty. */
  getItemFirstRep(): ClaimItem {
    const firstClaimItem = this.getItem()[0];
    return firstClaimItem === undefined ? this.addItem() : firstClaimItem;
  }

  /** Total claim cost (0..1) Created when absent. */
  getTotal(): Money {
    if (this.total === undefined) {
      this.total = new Money();
    }
    return this.total;
  }

  setTotal(total: Money | undefined): this {
    return this.setFieldValue('total', total);
  }

  hasTotal(): boolean {
    return this.hasFieldValue('total');
  }
}

modelTypeRegistry.register('Claim', Claim, true);

/** True when the value is a Claim model instance. */
export function isClaim(candidate: unknown): candidate is Claim {
  return candidate instanceof Claim;
}

/**
 * Prior or corollary claims
 */
export class ClaimRelated extends BackboneElement {
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
    return 'Claim.related';
  }

  /** FHIR JSON for this ClaimRelated, typed as the plain `ClaimRelated` data type. */
  override toJSON(): plainTypes.ClaimRelated {
    return this.serialize() as plainTypes.ClaimRelated;
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

modelTypeRegistry.register('ClaimRelated', ClaimRelated, false);

/**
 * Recipient of benefits payable
 */
export class ClaimPayee extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
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

  /** Category of recipient (1..1) */
  type?: CodeableConcept;

  /** Recipient reference (0..1) */
  party?: Reference;

  override fhirType(): string {
    return 'Claim.payee';
  }

  /** FHIR JSON for this ClaimPayee, typed as the plain `ClaimPayee` data type. */
  override toJSON(): plainTypes.ClaimPayee {
    return this.serialize() as plainTypes.ClaimPayee;
  }

  /** Category of recipient (1..1) Created when absent. */
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

modelTypeRegistry.register('ClaimPayee', ClaimPayee, false);

/**
 * Members of the care team
 */
export class ClaimCareTeam extends BackboneElement {
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
    return 'Claim.careTeam';
  }

  /** FHIR JSON for this ClaimCareTeam, typed as the plain `ClaimCareTeam` data type. */
  override toJSON(): plainTypes.ClaimCareTeam {
    return this.serialize() as plainTypes.ClaimCareTeam;
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

modelTypeRegistry.register('ClaimCareTeam', ClaimCareTeam, false);

/**
 * Supporting information
 */
export class ClaimSupportingInfo extends BackboneElement {
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
      types: [{ jsonKey: 'reason', typeCode: 'CodeableConcept' }],
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
  reason?: CodeableConcept;

  override fhirType(): string {
    return 'Claim.supportingInfo';
  }

  /** FHIR JSON for this ClaimSupportingInfo, typed as the plain `ClaimSupportingInfo` data type. */
  override toJSON(): plainTypes.ClaimSupportingInfo {
    return this.serialize() as plainTypes.ClaimSupportingInfo;
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
}

modelTypeRegistry.register('ClaimSupportingInfo', ClaimSupportingInfo, false);

/**
 * Pertinent diagnosis information
 */
export class ClaimDiagnosis extends BackboneElement {
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
    return 'Claim.diagnosis';
  }

  /** FHIR JSON for this ClaimDiagnosis, typed as the plain `ClaimDiagnosis` data type. */
  override toJSON(): plainTypes.ClaimDiagnosis {
    return this.serialize() as plainTypes.ClaimDiagnosis;
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

modelTypeRegistry.register('ClaimDiagnosis', ClaimDiagnosis, false);

/**
 * Clinical procedures performed
 */
export class ClaimProcedure extends BackboneElement {
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
    return 'Claim.procedure';
  }

  /** FHIR JSON for this ClaimProcedure, typed as the plain `ClaimProcedure` data type. */
  override toJSON(): plainTypes.ClaimProcedure {
    return this.serialize() as plainTypes.ClaimProcedure;
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

modelTypeRegistry.register('ClaimProcedure', ClaimProcedure, false);

/**
 * Patient insurance information
 */
export class ClaimInsurance extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'sequence',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sequence', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'focal',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'focal', typeCode: 'boolean' }],
    },
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'coverage',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'coverage', typeCode: 'Reference', targetResourceTypes: ['Coverage'] }],
    },
    {
      elementName: 'businessArrangement',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'businessArrangement', typeCode: 'string' }],
    },
    {
      elementName: 'preAuthRef',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'preAuthRef', typeCode: 'string' }],
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
  ];

  /** Insurance instance identifier (1..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;

  /** Coverage to be used for adjudication (1..1) */
  focal?: boolean;
  /** Id and extensions of the primitive `focal`. */
  _focal?: Element;

  /** Pre-assigned Claim number (0..1) */
  identifier?: Identifier;

  /** Insurance information (1..1) */
  coverage?: Reference;

  /** Additional provider contract number (0..1) */
  businessArrangement?: string;
  /** Id and extensions of the primitive `businessArrangement`. */
  _businessArrangement?: Element;

  /** Prior authorization reference number (0..*) */
  preAuthRef?: string[];
  /** Id and extensions of the primitive `preAuthRef`. */
  _preAuthRef?: (Element | null)[];

  /** Adjudication results (0..1) */
  claimResponse?: Reference;

  override fhirType(): string {
    return 'Claim.insurance';
  }

  /** FHIR JSON for this ClaimInsurance, typed as the plain `ClaimInsurance` data type. */
  override toJSON(): plainTypes.ClaimInsurance {
    return this.serialize() as plainTypes.ClaimInsurance;
  }

  /** Insurance instance identifier (1..1) */
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

  /** Pre-assigned Claim number (0..1) Created when absent. */
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

  /** Additional provider contract number (0..1) */
  getBusinessArrangement(): string | undefined {
    return this.businessArrangement;
  }

  /** Sets `businessArrangement`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setBusinessArrangement(businessArrangement: string | undefined): this {
    return this.setFieldValue('businessArrangement', businessArrangement);
  }

  hasBusinessArrangement(): boolean {
    return this.hasFieldValue('businessArrangement');
  }

  /** The element carrying the id and extensions of `businessArrangement`. Created when absent. */
  getBusinessArrangementElement(): Element {
    if (this._businessArrangement === undefined) {
      this._businessArrangement = new Element();
    }
    return this._businessArrangement;
  }

  setBusinessArrangementElement(businessArrangementElement: Element | undefined): this {
    this._businessArrangement = businessArrangementElement;
    return this;
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

  /** Adjudication results (0..1) Created when absent. */
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
}

modelTypeRegistry.register('ClaimInsurance', ClaimInsurance, false);

/**
 * Details of the event
 */
export class ClaimAccident extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'date',
      minimum: 1,
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

  /** When the incident occurred (1..1) */
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
    return 'Claim.accident';
  }

  /** FHIR JSON for this ClaimAccident, typed as the plain `ClaimAccident` data type. */
  override toJSON(): plainTypes.ClaimAccident {
    return this.serialize() as plainTypes.ClaimAccident;
  }

  /** When the incident occurred (1..1) */
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

modelTypeRegistry.register('ClaimAccident', ClaimAccident, false);

/**
 * Product or service provided
 */
export class ClaimItem extends BackboneElement {
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
      elementName: 'detail',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'detail', typeCode: 'ClaimItemDetail' }],
    },
  ];

  /** Item instance identifier (1..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;

  /** Applicable careTeam members (0..*) */
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

  /** Product or service provided (0..*) */
  detail?: ClaimItemDetail[];

  override fhirType(): string {
    return 'Claim.item';
  }

  /** FHIR JSON for this ClaimItem, typed as the plain `ClaimItem` data type. */
  override toJSON(): plainTypes.ClaimItem {
    return this.serialize() as plainTypes.ClaimItem;
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

  /** Applicable careTeam members (0..*) Never undefined; an empty list is created when absent. */
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

  /** Product or service provided (0..*) Never undefined; an empty list is created when absent. */
  getDetail(): ClaimItemDetail[] {
    if (this.detail === undefined) {
      this.detail = [];
    }
    return this.detail;
  }

  setDetail(detail: ClaimItemDetail[] | undefined): this {
    return this.setFieldValue('detail', detail);
  }

  hasDetail(): boolean {
    return this.hasFieldValue('detail');
  }

  /** Appends a new, empty ClaimItemDetail to `detail` and returns it so it can be filled in. */
  addDetail(): ClaimItemDetail;
  /** Appends the given ClaimItemDetail to `detail` and returns this object for chaining. */
  addDetail(claimItemDetail: ClaimItemDetail): this;
  addDetail(claimItemDetail?: ClaimItemDetail): ClaimItemDetail | this {
    if (claimItemDetail !== undefined) {
      return this.addFieldValue('detail', claimItemDetail);
    }
    const createdClaimItemDetail = new ClaimItemDetail();
    this.addFieldValue('detail', createdClaimItemDetail);
    return createdClaimItemDetail;
  }

  /** The first ClaimItemDetail of `detail`. One is added when the list is empty. */
  getDetailFirstRep(): ClaimItemDetail {
    const firstClaimItemDetail = this.getDetail()[0];
    return firstClaimItemDetail === undefined ? this.addDetail() : firstClaimItemDetail;
  }
}

modelTypeRegistry.register('ClaimItem', ClaimItem, false);

/**
 * Product or service provided
 */
export class ClaimItemDetail extends BackboneElement {
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
      elementName: 'subDetail',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'subDetail', typeCode: 'ClaimItemDetailSubDetail' }],
    },
  ];

  /** Item instance identifier (1..1) */
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

  /** Product or service provided (0..*) */
  subDetail?: ClaimItemDetailSubDetail[];

  override fhirType(): string {
    return 'Claim.item.detail';
  }

  /** FHIR JSON for this ClaimItemDetail, typed as the plain `ClaimDetail` data type. */
  override toJSON(): plainTypes.ClaimDetail {
    return this.serialize() as plainTypes.ClaimDetail;
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

  /** Product or service provided (0..*) Never undefined; an empty list is created when absent. */
  getSubDetail(): ClaimItemDetailSubDetail[] {
    if (this.subDetail === undefined) {
      this.subDetail = [];
    }
    return this.subDetail;
  }

  setSubDetail(subDetail: ClaimItemDetailSubDetail[] | undefined): this {
    return this.setFieldValue('subDetail', subDetail);
  }

  hasSubDetail(): boolean {
    return this.hasFieldValue('subDetail');
  }

  /** Appends a new, empty ClaimItemDetailSubDetail to `subDetail` and returns it so it can be filled in. */
  addSubDetail(): ClaimItemDetailSubDetail;
  /** Appends the given ClaimItemDetailSubDetail to `subDetail` and returns this object for chaining. */
  addSubDetail(claimItemDetailSubDetail: ClaimItemDetailSubDetail): this;
  addSubDetail(
    claimItemDetailSubDetail?: ClaimItemDetailSubDetail
  ): ClaimItemDetailSubDetail | this {
    if (claimItemDetailSubDetail !== undefined) {
      return this.addFieldValue('subDetail', claimItemDetailSubDetail);
    }
    const createdClaimItemDetailSubDetail = new ClaimItemDetailSubDetail();
    this.addFieldValue('subDetail', createdClaimItemDetailSubDetail);
    return createdClaimItemDetailSubDetail;
  }

  /** The first ClaimItemDetailSubDetail of `subDetail`. One is added when the list is empty. */
  getSubDetailFirstRep(): ClaimItemDetailSubDetail {
    const firstClaimItemDetailSubDetail = this.getSubDetail()[0];
    return firstClaimItemDetailSubDetail === undefined
      ? this.addSubDetail()
      : firstClaimItemDetailSubDetail;
  }
}

modelTypeRegistry.register('ClaimItemDetail', ClaimItemDetail, false);

/**
 * Product or service provided
 */
export class ClaimItemDetailSubDetail extends BackboneElement {
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
  ];

  /** Item instance identifier (1..1) */
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

  override fhirType(): string {
    return 'Claim.item.detail.subDetail';
  }

  /** FHIR JSON for this ClaimItemDetailSubDetail, typed as the plain `ClaimSubDetail` data type. */
  override toJSON(): plainTypes.ClaimSubDetail {
    return this.serialize() as plainTypes.ClaimSubDetail;
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
}

modelTypeRegistry.register('ClaimItemDetailSubDetail', ClaimItemDetailSubDetail, false);
