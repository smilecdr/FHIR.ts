/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Reference } from './reference';
import { Signature } from './signature';
import { Timing } from './timing';

/**
 * Describes validation requirements, source(s), status and dates for one or more elements.
 */
export class VerificationResult extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'target',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'target', typeCode: 'Reference' }],
    },
    {
      elementName: 'targetLocation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'targetLocation', typeCode: 'string' }],
    },
    {
      elementName: 'need',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'need', typeCode: 'CodeableConcept' }],
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
          allowedCodes: valueSetCodes.VerificationResultStatus,
        },
      ],
    },
    {
      elementName: 'statusDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'statusDate', typeCode: 'dateTime' }],
    },
    {
      elementName: 'validationType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'validationType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'validationProcess',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'validationProcess', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'frequency',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'frequency', typeCode: 'Timing' }],
    },
    {
      elementName: 'lastPerformed',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'lastPerformed', typeCode: 'dateTime' }],
    },
    {
      elementName: 'nextScheduled',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'nextScheduled', typeCode: 'date' }],
    },
    {
      elementName: 'failureAction',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'failureAction', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'primarySource',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'primarySource', typeCode: 'VerificationResultPrimarySource' }],
    },
    {
      elementName: 'attestation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'attestation', typeCode: 'VerificationResultAttestation' }],
    },
    {
      elementName: 'validator',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'validator', typeCode: 'VerificationResultValidator' }],
    },
  ];

  readonly resourceType = 'VerificationResult';

  /** A resource that was validated (0..*) */
  target?: Reference[];

  /** The fhirpath location(s) within the resource that was validated (0..*) */
  targetLocation?: string[];
  /** Id and extensions of the primitive `targetLocation`. */
  _targetLocation?: (Element | null)[];

  /** none | initial | periodic (0..1) */
  need?: CodeableConcept;

  /** attested | validated | in-process | req-revalid | val-fail | reval-fail | entered-in-error (1..1) */
  status?: valueSetCodes.VerificationResultStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** When the validation status was updated (0..1) */
  statusDate?: string;
  /** Id and extensions of the primitive `statusDate`. */
  _statusDate?: Element;

  /** nothing | primary | multiple (0..1) */
  validationType?: CodeableConcept;

  /** The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context) (0..*) */
  validationProcess?: CodeableConcept[];

  /** Frequency of revalidation (0..1) */
  frequency?: Timing;

  /** The date/time validation was last completed (including failed validations) (0..1) */
  lastPerformed?: string;
  /** Id and extensions of the primitive `lastPerformed`. */
  _lastPerformed?: Element;

  /** The date when target is next validated, if appropriate (0..1) */
  nextScheduled?: string;
  /** Id and extensions of the primitive `nextScheduled`. */
  _nextScheduled?: Element;

  /** fatal | warn | rec-only | none (0..1) */
  failureAction?: CodeableConcept;

  /** Information about the primary source(s) involved in validation (0..*) */
  primarySource?: VerificationResultPrimarySource[];

  /** Information about the entity attesting to information (0..1) */
  attestation?: VerificationResultAttestation;

  /** Information about the entity validating information (0..*) */
  validator?: VerificationResultValidator[];

  override fhirType(): string {
    return 'VerificationResult';
  }

  /** FHIR JSON for this VerificationResult, typed as the plain `VerificationResult` data type. */
  override toJSON(): plainTypes.VerificationResult {
    return this.serialize() as plainTypes.VerificationResult;
  }

  /** A resource that was validated (0..*) Never undefined; an empty list is created when absent. */
  getTarget(): Reference[] {
    if (this.target === undefined) {
      this.target = [];
    }
    return this.target;
  }

  setTarget(target: Reference[] | undefined): this {
    return this.setFieldValue('target', target);
  }

  hasTarget(): boolean {
    return this.hasFieldValue('target');
  }

  /** Appends a new, empty Reference to `target` and returns it so it can be filled in. */
  addTarget(): Reference;
  /** Appends the given Reference to `target` and returns this object for chaining. */
  addTarget(reference: Reference): this;
  addTarget(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('target', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('target', createdReference);
    return createdReference;
  }

  /** The first Reference of `target`. One is added when the list is empty. */
  getTargetFirstRep(): Reference {
    const firstReference = this.getTarget()[0];
    return firstReference === undefined ? this.addTarget() : firstReference;
  }

  /** The fhirpath location(s) within the resource that was validated (0..*) Never undefined; an empty list is created when absent. */
  getTargetLocation(): string[] {
    if (this.targetLocation === undefined) {
      this.targetLocation = [];
    }
    return this.targetLocation;
  }

  setTargetLocation(targetLocation: string[] | undefined): this {
    return this.setFieldValue('targetLocation', targetLocation);
  }

  hasTargetLocation(): boolean {
    return this.hasFieldValue('targetLocation');
  }

  /** Appends one value to `targetLocation`. Throws a FhirModelError when it is not a valid FHIR string. */
  addTargetLocation(targetLocation: string): this {
    return this.addFieldValue('targetLocation', targetLocation);
  }

  /** none | initial | periodic (0..1) Created when absent. */
  getNeed(): CodeableConcept {
    if (this.need === undefined) {
      this.need = new CodeableConcept();
    }
    return this.need;
  }

  setNeed(need: CodeableConcept | undefined): this {
    return this.setFieldValue('need', need);
  }

  hasNeed(): boolean {
    return this.hasFieldValue('need');
  }

  /** attested | validated | in-process | req-revalid | val-fail | reval-fail | entered-in-error (1..1) */
  getStatus(): valueSetCodes.VerificationResultStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.VerificationResultStatus | undefined): this {
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

  /** When the validation status was updated (0..1) */
  getStatusDate(): string | undefined {
    return this.statusDate;
  }

  /** Sets `statusDate`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setStatusDate(statusDate: string | undefined): this {
    return this.setFieldValue('statusDate', statusDate);
  }

  hasStatusDate(): boolean {
    return this.hasFieldValue('statusDate');
  }

  /** The element carrying the id and extensions of `statusDate`. Created when absent. */
  getStatusDateElement(): Element {
    if (this._statusDate === undefined) {
      this._statusDate = new Element();
    }
    return this._statusDate;
  }

  setStatusDateElement(statusDateElement: Element | undefined): this {
    this._statusDate = statusDateElement;
    return this;
  }

  /** nothing | primary | multiple (0..1) Created when absent. */
  getValidationType(): CodeableConcept {
    if (this.validationType === undefined) {
      this.validationType = new CodeableConcept();
    }
    return this.validationType;
  }

  setValidationType(validationType: CodeableConcept | undefined): this {
    return this.setFieldValue('validationType', validationType);
  }

  hasValidationType(): boolean {
    return this.hasFieldValue('validationType');
  }

  /** The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context) (0..*) Never undefined; an empty list is created when absent. */
  getValidationProcess(): CodeableConcept[] {
    if (this.validationProcess === undefined) {
      this.validationProcess = [];
    }
    return this.validationProcess;
  }

  setValidationProcess(validationProcess: CodeableConcept[] | undefined): this {
    return this.setFieldValue('validationProcess', validationProcess);
  }

  hasValidationProcess(): boolean {
    return this.hasFieldValue('validationProcess');
  }

  /** Appends a new, empty CodeableConcept to `validationProcess` and returns it so it can be filled in. */
  addValidationProcess(): CodeableConcept;
  /** Appends the given CodeableConcept to `validationProcess` and returns this object for chaining. */
  addValidationProcess(codeableConcept: CodeableConcept): this;
  addValidationProcess(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('validationProcess', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('validationProcess', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `validationProcess`. One is added when the list is empty. */
  getValidationProcessFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getValidationProcess()[0];
    return firstCodeableConcept === undefined ? this.addValidationProcess() : firstCodeableConcept;
  }

  /** Frequency of revalidation (0..1) Created when absent. */
  getFrequency(): Timing {
    if (this.frequency === undefined) {
      this.frequency = new Timing();
    }
    return this.frequency;
  }

  setFrequency(frequency: Timing | undefined): this {
    return this.setFieldValue('frequency', frequency);
  }

  hasFrequency(): boolean {
    return this.hasFieldValue('frequency');
  }

  /** The date/time validation was last completed (including failed validations) (0..1) */
  getLastPerformed(): string | undefined {
    return this.lastPerformed;
  }

  /** Sets `lastPerformed`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setLastPerformed(lastPerformed: string | undefined): this {
    return this.setFieldValue('lastPerformed', lastPerformed);
  }

  hasLastPerformed(): boolean {
    return this.hasFieldValue('lastPerformed');
  }

  /** The element carrying the id and extensions of `lastPerformed`. Created when absent. */
  getLastPerformedElement(): Element {
    if (this._lastPerformed === undefined) {
      this._lastPerformed = new Element();
    }
    return this._lastPerformed;
  }

  setLastPerformedElement(lastPerformedElement: Element | undefined): this {
    this._lastPerformed = lastPerformedElement;
    return this;
  }

  /** The date when target is next validated, if appropriate (0..1) */
  getNextScheduled(): string | undefined {
    return this.nextScheduled;
  }

  /** Sets `nextScheduled`. Throws a FhirModelError when the value is not a valid FHIR date. */
  setNextScheduled(nextScheduled: string | undefined): this {
    return this.setFieldValue('nextScheduled', nextScheduled);
  }

  hasNextScheduled(): boolean {
    return this.hasFieldValue('nextScheduled');
  }

  /** The element carrying the id and extensions of `nextScheduled`. Created when absent. */
  getNextScheduledElement(): Element {
    if (this._nextScheduled === undefined) {
      this._nextScheduled = new Element();
    }
    return this._nextScheduled;
  }

  setNextScheduledElement(nextScheduledElement: Element | undefined): this {
    this._nextScheduled = nextScheduledElement;
    return this;
  }

  /** fatal | warn | rec-only | none (0..1) Created when absent. */
  getFailureAction(): CodeableConcept {
    if (this.failureAction === undefined) {
      this.failureAction = new CodeableConcept();
    }
    return this.failureAction;
  }

  setFailureAction(failureAction: CodeableConcept | undefined): this {
    return this.setFieldValue('failureAction', failureAction);
  }

  hasFailureAction(): boolean {
    return this.hasFieldValue('failureAction');
  }

  /** Information about the primary source(s) involved in validation (0..*) Never undefined; an empty list is created when absent. */
  getPrimarySource(): VerificationResultPrimarySource[] {
    if (this.primarySource === undefined) {
      this.primarySource = [];
    }
    return this.primarySource;
  }

  setPrimarySource(primarySource: VerificationResultPrimarySource[] | undefined): this {
    return this.setFieldValue('primarySource', primarySource);
  }

  hasPrimarySource(): boolean {
    return this.hasFieldValue('primarySource');
  }

  /** Appends a new, empty VerificationResultPrimarySource to `primarySource` and returns it so it can be filled in. */
  addPrimarySource(): VerificationResultPrimarySource;
  /** Appends the given VerificationResultPrimarySource to `primarySource` and returns this object for chaining. */
  addPrimarySource(verificationResultPrimarySource: VerificationResultPrimarySource): this;
  addPrimarySource(
    verificationResultPrimarySource?: VerificationResultPrimarySource
  ): VerificationResultPrimarySource | this {
    if (verificationResultPrimarySource !== undefined) {
      return this.addFieldValue('primarySource', verificationResultPrimarySource);
    }
    const createdVerificationResultPrimarySource = new VerificationResultPrimarySource();
    this.addFieldValue('primarySource', createdVerificationResultPrimarySource);
    return createdVerificationResultPrimarySource;
  }

  /** The first VerificationResultPrimarySource of `primarySource`. One is added when the list is empty. */
  getPrimarySourceFirstRep(): VerificationResultPrimarySource {
    const firstVerificationResultPrimarySource = this.getPrimarySource()[0];
    return firstVerificationResultPrimarySource === undefined
      ? this.addPrimarySource()
      : firstVerificationResultPrimarySource;
  }

  /** Information about the entity attesting to information (0..1) Created when absent. */
  getAttestation(): VerificationResultAttestation {
    if (this.attestation === undefined) {
      this.attestation = new VerificationResultAttestation();
    }
    return this.attestation;
  }

  setAttestation(attestation: VerificationResultAttestation | undefined): this {
    return this.setFieldValue('attestation', attestation);
  }

  hasAttestation(): boolean {
    return this.hasFieldValue('attestation');
  }

  /** Information about the entity validating information (0..*) Never undefined; an empty list is created when absent. */
  getValidator(): VerificationResultValidator[] {
    if (this.validator === undefined) {
      this.validator = [];
    }
    return this.validator;
  }

  setValidator(validator: VerificationResultValidator[] | undefined): this {
    return this.setFieldValue('validator', validator);
  }

  hasValidator(): boolean {
    return this.hasFieldValue('validator');
  }

  /** Appends a new, empty VerificationResultValidator to `validator` and returns it so it can be filled in. */
  addValidator(): VerificationResultValidator;
  /** Appends the given VerificationResultValidator to `validator` and returns this object for chaining. */
  addValidator(verificationResultValidator: VerificationResultValidator): this;
  addValidator(
    verificationResultValidator?: VerificationResultValidator
  ): VerificationResultValidator | this {
    if (verificationResultValidator !== undefined) {
      return this.addFieldValue('validator', verificationResultValidator);
    }
    const createdVerificationResultValidator = new VerificationResultValidator();
    this.addFieldValue('validator', createdVerificationResultValidator);
    return createdVerificationResultValidator;
  }

  /** The first VerificationResultValidator of `validator`. One is added when the list is empty. */
  getValidatorFirstRep(): VerificationResultValidator {
    const firstVerificationResultValidator = this.getValidator()[0];
    return firstVerificationResultValidator === undefined
      ? this.addValidator()
      : firstVerificationResultValidator;
  }
}

modelTypeRegistry.register('VerificationResult', VerificationResult, true);

/** True when the value is a VerificationResult model instance. */
export function isVerificationResult(candidate: unknown): candidate is VerificationResult {
  return candidate instanceof VerificationResult;
}

/**
 * Information about the primary source(s) involved in validation
 */
export class VerificationResultPrimarySource extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'who',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'who',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Practitioner', 'PractitionerRole'],
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
      elementName: 'communicationMethod',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'communicationMethod', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'validationStatus',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'validationStatus', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'validationDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'validationDate', typeCode: 'dateTime' }],
    },
    {
      elementName: 'canPushUpdates',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'canPushUpdates', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'pushTypeAvailable',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'pushTypeAvailable', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Reference to the primary source (0..1) */
  who?: Reference;

  /** Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship owner; Registration Authority; legal source; issuing source; authoritative source) (0..*) */
  type?: CodeableConcept[];

  /** Method for exchanging information with the primary source (0..*) */
  communicationMethod?: CodeableConcept[];

  /** successful | failed | unknown (0..1) */
  validationStatus?: CodeableConcept;

  /** When the target was validated against the primary source (0..1) */
  validationDate?: string;
  /** Id and extensions of the primitive `validationDate`. */
  _validationDate?: Element;

  /** yes | no | undetermined (0..1) */
  canPushUpdates?: CodeableConcept;

  /** specific | any | source (0..*) */
  pushTypeAvailable?: CodeableConcept[];

  override fhirType(): string {
    return 'VerificationResult.primarySource';
  }

  /** FHIR JSON for this VerificationResultPrimarySource, typed as the plain `VerificationResultPrimarySource` data type. */
  override toJSON(): plainTypes.VerificationResultPrimarySource {
    return this.serialize() as plainTypes.VerificationResultPrimarySource;
  }

  /** Reference to the primary source (0..1) Created when absent. */
  getWho(): Reference {
    if (this.who === undefined) {
      this.who = new Reference();
    }
    return this.who;
  }

  setWho(who: Reference | undefined): this {
    return this.setFieldValue('who', who);
  }

  hasWho(): boolean {
    return this.hasFieldValue('who');
  }

  /** Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship owner; Registration Authority; legal source; issuing source; authoritative source) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Method for exchanging information with the primary source (0..*) Never undefined; an empty list is created when absent. */
  getCommunicationMethod(): CodeableConcept[] {
    if (this.communicationMethod === undefined) {
      this.communicationMethod = [];
    }
    return this.communicationMethod;
  }

  setCommunicationMethod(communicationMethod: CodeableConcept[] | undefined): this {
    return this.setFieldValue('communicationMethod', communicationMethod);
  }

  hasCommunicationMethod(): boolean {
    return this.hasFieldValue('communicationMethod');
  }

  /** Appends a new, empty CodeableConcept to `communicationMethod` and returns it so it can be filled in. */
  addCommunicationMethod(): CodeableConcept;
  /** Appends the given CodeableConcept to `communicationMethod` and returns this object for chaining. */
  addCommunicationMethod(codeableConcept: CodeableConcept): this;
  addCommunicationMethod(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('communicationMethod', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('communicationMethod', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `communicationMethod`. One is added when the list is empty. */
  getCommunicationMethodFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getCommunicationMethod()[0];
    return firstCodeableConcept === undefined
      ? this.addCommunicationMethod()
      : firstCodeableConcept;
  }

  /** successful | failed | unknown (0..1) Created when absent. */
  getValidationStatus(): CodeableConcept {
    if (this.validationStatus === undefined) {
      this.validationStatus = new CodeableConcept();
    }
    return this.validationStatus;
  }

  setValidationStatus(validationStatus: CodeableConcept | undefined): this {
    return this.setFieldValue('validationStatus', validationStatus);
  }

  hasValidationStatus(): boolean {
    return this.hasFieldValue('validationStatus');
  }

  /** When the target was validated against the primary source (0..1) */
  getValidationDate(): string | undefined {
    return this.validationDate;
  }

  /** Sets `validationDate`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setValidationDate(validationDate: string | undefined): this {
    return this.setFieldValue('validationDate', validationDate);
  }

  hasValidationDate(): boolean {
    return this.hasFieldValue('validationDate');
  }

  /** The element carrying the id and extensions of `validationDate`. Created when absent. */
  getValidationDateElement(): Element {
    if (this._validationDate === undefined) {
      this._validationDate = new Element();
    }
    return this._validationDate;
  }

  setValidationDateElement(validationDateElement: Element | undefined): this {
    this._validationDate = validationDateElement;
    return this;
  }

  /** yes | no | undetermined (0..1) Created when absent. */
  getCanPushUpdates(): CodeableConcept {
    if (this.canPushUpdates === undefined) {
      this.canPushUpdates = new CodeableConcept();
    }
    return this.canPushUpdates;
  }

  setCanPushUpdates(canPushUpdates: CodeableConcept | undefined): this {
    return this.setFieldValue('canPushUpdates', canPushUpdates);
  }

  hasCanPushUpdates(): boolean {
    return this.hasFieldValue('canPushUpdates');
  }

  /** specific | any | source (0..*) Never undefined; an empty list is created when absent. */
  getPushTypeAvailable(): CodeableConcept[] {
    if (this.pushTypeAvailable === undefined) {
      this.pushTypeAvailable = [];
    }
    return this.pushTypeAvailable;
  }

  setPushTypeAvailable(pushTypeAvailable: CodeableConcept[] | undefined): this {
    return this.setFieldValue('pushTypeAvailable', pushTypeAvailable);
  }

  hasPushTypeAvailable(): boolean {
    return this.hasFieldValue('pushTypeAvailable');
  }

  /** Appends a new, empty CodeableConcept to `pushTypeAvailable` and returns it so it can be filled in. */
  addPushTypeAvailable(): CodeableConcept;
  /** Appends the given CodeableConcept to `pushTypeAvailable` and returns this object for chaining. */
  addPushTypeAvailable(codeableConcept: CodeableConcept): this;
  addPushTypeAvailable(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('pushTypeAvailable', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('pushTypeAvailable', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `pushTypeAvailable`. One is added when the list is empty. */
  getPushTypeAvailableFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getPushTypeAvailable()[0];
    return firstCodeableConcept === undefined ? this.addPushTypeAvailable() : firstCodeableConcept;
  }
}

modelTypeRegistry.register(
  'VerificationResultPrimarySource',
  VerificationResultPrimarySource,
  false
);

/**
 * Information about the entity attesting to information
 */
export class VerificationResultAttestation extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'who',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'who',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Practitioner', 'PractitionerRole'],
        },
      ],
    },
    {
      elementName: 'onBehalfOf',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'onBehalfOf',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Practitioner', 'PractitionerRole'],
        },
      ],
    },
    {
      elementName: 'communicationMethod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'communicationMethod', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'date',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'date', typeCode: 'date' }],
    },
    {
      elementName: 'sourceIdentityCertificate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sourceIdentityCertificate', typeCode: 'string' }],
    },
    {
      elementName: 'proxyIdentityCertificate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'proxyIdentityCertificate', typeCode: 'string' }],
    },
    {
      elementName: 'proxySignature',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'proxySignature', typeCode: 'Signature' }],
    },
    {
      elementName: 'sourceSignature',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sourceSignature', typeCode: 'Signature' }],
    },
  ];

  /** The individual or organization attesting to information (0..1) */
  who?: Reference;

  /** When the who is asserting on behalf of another (organization or individual) (0..1) */
  onBehalfOf?: Reference;

  /** The method by which attested information was submitted/retrieved (0..1) */
  communicationMethod?: CodeableConcept;

  /** The date the information was attested to (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** A digital identity certificate associated with the attestation source (0..1) */
  sourceIdentityCertificate?: string;
  /** Id and extensions of the primitive `sourceIdentityCertificate`. */
  _sourceIdentityCertificate?: Element;

  /** A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source (0..1) */
  proxyIdentityCertificate?: string;
  /** Id and extensions of the primitive `proxyIdentityCertificate`. */
  _proxyIdentityCertificate?: Element;

  /** Proxy signature (digital or image) (0..1) */
  proxySignature?: Signature;

  /** Attester signature (digital or image) (0..1) */
  sourceSignature?: Signature;

  override fhirType(): string {
    return 'VerificationResult.attestation';
  }

  /** FHIR JSON for this VerificationResultAttestation, typed as the plain `VerificationResultAttestation` data type. */
  override toJSON(): plainTypes.VerificationResultAttestation {
    return this.serialize() as plainTypes.VerificationResultAttestation;
  }

  /** The individual or organization attesting to information (0..1) Created when absent. */
  getWho(): Reference {
    if (this.who === undefined) {
      this.who = new Reference();
    }
    return this.who;
  }

  setWho(who: Reference | undefined): this {
    return this.setFieldValue('who', who);
  }

  hasWho(): boolean {
    return this.hasFieldValue('who');
  }

  /** When the who is asserting on behalf of another (organization or individual) (0..1) Created when absent. */
  getOnBehalfOf(): Reference {
    if (this.onBehalfOf === undefined) {
      this.onBehalfOf = new Reference();
    }
    return this.onBehalfOf;
  }

  setOnBehalfOf(onBehalfOf: Reference | undefined): this {
    return this.setFieldValue('onBehalfOf', onBehalfOf);
  }

  hasOnBehalfOf(): boolean {
    return this.hasFieldValue('onBehalfOf');
  }

  /** The method by which attested information was submitted/retrieved (0..1) Created when absent. */
  getCommunicationMethod(): CodeableConcept {
    if (this.communicationMethod === undefined) {
      this.communicationMethod = new CodeableConcept();
    }
    return this.communicationMethod;
  }

  setCommunicationMethod(communicationMethod: CodeableConcept | undefined): this {
    return this.setFieldValue('communicationMethod', communicationMethod);
  }

  hasCommunicationMethod(): boolean {
    return this.hasFieldValue('communicationMethod');
  }

  /** The date the information was attested to (0..1) */
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

  /** A digital identity certificate associated with the attestation source (0..1) */
  getSourceIdentityCertificate(): string | undefined {
    return this.sourceIdentityCertificate;
  }

  /** Sets `sourceIdentityCertificate`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setSourceIdentityCertificate(sourceIdentityCertificate: string | undefined): this {
    return this.setFieldValue('sourceIdentityCertificate', sourceIdentityCertificate);
  }

  hasSourceIdentityCertificate(): boolean {
    return this.hasFieldValue('sourceIdentityCertificate');
  }

  /** The element carrying the id and extensions of `sourceIdentityCertificate`. Created when absent. */
  getSourceIdentityCertificateElement(): Element {
    if (this._sourceIdentityCertificate === undefined) {
      this._sourceIdentityCertificate = new Element();
    }
    return this._sourceIdentityCertificate;
  }

  setSourceIdentityCertificateElement(sourceIdentityCertificateElement: Element | undefined): this {
    this._sourceIdentityCertificate = sourceIdentityCertificateElement;
    return this;
  }

  /** A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source (0..1) */
  getProxyIdentityCertificate(): string | undefined {
    return this.proxyIdentityCertificate;
  }

  /** Sets `proxyIdentityCertificate`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setProxyIdentityCertificate(proxyIdentityCertificate: string | undefined): this {
    return this.setFieldValue('proxyIdentityCertificate', proxyIdentityCertificate);
  }

  hasProxyIdentityCertificate(): boolean {
    return this.hasFieldValue('proxyIdentityCertificate');
  }

  /** The element carrying the id and extensions of `proxyIdentityCertificate`. Created when absent. */
  getProxyIdentityCertificateElement(): Element {
    if (this._proxyIdentityCertificate === undefined) {
      this._proxyIdentityCertificate = new Element();
    }
    return this._proxyIdentityCertificate;
  }

  setProxyIdentityCertificateElement(proxyIdentityCertificateElement: Element | undefined): this {
    this._proxyIdentityCertificate = proxyIdentityCertificateElement;
    return this;
  }

  /** Proxy signature (digital or image) (0..1) Created when absent. */
  getProxySignature(): Signature {
    if (this.proxySignature === undefined) {
      this.proxySignature = new Signature();
    }
    return this.proxySignature;
  }

  setProxySignature(proxySignature: Signature | undefined): this {
    return this.setFieldValue('proxySignature', proxySignature);
  }

  hasProxySignature(): boolean {
    return this.hasFieldValue('proxySignature');
  }

  /** Attester signature (digital or image) (0..1) Created when absent. */
  getSourceSignature(): Signature {
    if (this.sourceSignature === undefined) {
      this.sourceSignature = new Signature();
    }
    return this.sourceSignature;
  }

  setSourceSignature(sourceSignature: Signature | undefined): this {
    return this.setFieldValue('sourceSignature', sourceSignature);
  }

  hasSourceSignature(): boolean {
    return this.hasFieldValue('sourceSignature');
  }
}

modelTypeRegistry.register('VerificationResultAttestation', VerificationResultAttestation, false);

/**
 * Information about the entity validating information
 */
export class VerificationResultValidator extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'organization',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'organization', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
    {
      elementName: 'identityCertificate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identityCertificate', typeCode: 'string' }],
    },
    {
      elementName: 'attestationSignature',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'attestationSignature', typeCode: 'Signature' }],
    },
  ];

  /** Reference to the organization validating information (1..1) */
  organization?: Reference;

  /** A digital identity certificate associated with the validator (0..1) */
  identityCertificate?: string;
  /** Id and extensions of the primitive `identityCertificate`. */
  _identityCertificate?: Element;

  /** Validator signature (digital or image) (0..1) */
  attestationSignature?: Signature;

  override fhirType(): string {
    return 'VerificationResult.validator';
  }

  /** FHIR JSON for this VerificationResultValidator, typed as the plain `VerificationResultValidator` data type. */
  override toJSON(): plainTypes.VerificationResultValidator {
    return this.serialize() as plainTypes.VerificationResultValidator;
  }

  /** Reference to the organization validating information (1..1) Created when absent. */
  getOrganization(): Reference {
    if (this.organization === undefined) {
      this.organization = new Reference();
    }
    return this.organization;
  }

  setOrganization(organization: Reference | undefined): this {
    return this.setFieldValue('organization', organization);
  }

  hasOrganization(): boolean {
    return this.hasFieldValue('organization');
  }

  /** A digital identity certificate associated with the validator (0..1) */
  getIdentityCertificate(): string | undefined {
    return this.identityCertificate;
  }

  /** Sets `identityCertificate`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setIdentityCertificate(identityCertificate: string | undefined): this {
    return this.setFieldValue('identityCertificate', identityCertificate);
  }

  hasIdentityCertificate(): boolean {
    return this.hasFieldValue('identityCertificate');
  }

  /** The element carrying the id and extensions of `identityCertificate`. Created when absent. */
  getIdentityCertificateElement(): Element {
    if (this._identityCertificate === undefined) {
      this._identityCertificate = new Element();
    }
    return this._identityCertificate;
  }

  setIdentityCertificateElement(identityCertificateElement: Element | undefined): this {
    this._identityCertificate = identityCertificateElement;
    return this;
  }

  /** Validator signature (digital or image) (0..1) Created when absent. */
  getAttestationSignature(): Signature {
    if (this.attestationSignature === undefined) {
      this.attestationSignature = new Signature();
    }
    return this.attestationSignature;
  }

  setAttestationSignature(attestationSignature: Signature | undefined): this {
    return this.setFieldValue('attestationSignature', attestationSignature);
  }

  hasAttestationSignature(): boolean {
    return this.hasFieldValue('attestationSignature');
  }
}

modelTypeRegistry.register('VerificationResultValidator', VerificationResultValidator, false);
