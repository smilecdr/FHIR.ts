/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { Annotation } from './annotation';
import { CodeableConcept } from './codeableConcept';
import { DataRequirement } from './dataRequirement';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Reference } from './reference';

/**
 * Base StructureDefinition for GuidanceResponse Resource
 */
export class GuidanceResponse extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'requestId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'requestId', typeCode: 'id' }],
    },
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'module',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'module', typeCode: 'Reference', targetResourceTypes: ['ServiceDefinition'] },
      ],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.GuidanceResponseStatus },
      ],
    },
    {
      elementName: 'subject',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'subject', typeCode: 'Reference', targetResourceTypes: ['Group', 'Patient'] },
      ],
    },
    {
      elementName: 'context',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'context',
          typeCode: 'Reference',
          targetResourceTypes: ['Encounter', 'EpisodeOfCare'],
        },
      ],
    },
    {
      elementName: 'occurrenceDateTime',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'occurrenceDateTime', typeCode: 'dateTime' }],
    },
    {
      elementName: 'performer',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'performer', typeCode: 'Reference', targetResourceTypes: ['Device'] }],
    },
    {
      elementName: 'reason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'reasonCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'reasonReference', typeCode: 'Reference' },
      ],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
    {
      elementName: 'evaluationMessage',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'evaluationMessage',
          typeCode: 'Reference',
          targetResourceTypes: ['OperationOutcome'],
        },
      ],
    },
    {
      elementName: 'outputParameters',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'outputParameters', typeCode: 'Reference', targetResourceTypes: ['Parameters'] },
      ],
    },
    {
      elementName: 'result',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'result',
          typeCode: 'Reference',
          targetResourceTypes: ['CarePlan', 'RequestGroup'],
        },
      ],
    },
    {
      elementName: 'dataRequirement',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'dataRequirement', typeCode: 'DataRequirement' }],
    },
  ];

  readonly resourceType = 'GuidanceResponse';

  /** The id of the request associated with this response, if any (0..1) */
  requestId?: string;
  /** Id and extensions of the primitive `requestId`. */
  _requestId?: Element;

  /** Business identifier (0..1) */
  identifier?: Identifier;

  /** A reference to a knowledge module (1..1) */
  module?: Reference;

  /** success | data-requested | data-required | in-progress | failure | entered-in-error (1..1) */
  status?: valueSetCodes.GuidanceResponseStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Patient the request was performed for (0..1) */
  subject?: Reference;

  /** Encounter or Episode during which the response was returned (0..1) */
  context?: Reference;

  /** When the guidance response was processed (0..1) */
  occurrenceDateTime?: string;
  /** Id and extensions of the primitive `occurrenceDateTime`. */
  _occurrenceDateTime?: Element;

  /** Device returning the guidance (0..1) */
  performer?: Reference;

  /** Reason for the response (0..1) */
  reasonCodeableConcept?: CodeableConcept;
  /** Reason for the response (0..1) */
  reasonReference?: Reference;

  /** Additional notes about the response (0..*) */
  note?: Annotation[];

  /** Messages resulting from the evaluation of the artifact or artifacts (0..*) */
  evaluationMessage?: Reference[];

  /** The output parameters of the evaluation, if any (0..1) */
  outputParameters?: Reference;

  /** Proposed actions, if any (0..1) */
  result?: Reference;

  /** Additional required data (0..*) */
  dataRequirement?: DataRequirement[];

  override fhirType(): string {
    return 'GuidanceResponse';
  }

  /** FHIR JSON for this GuidanceResponse, typed as the plain `GuidanceResponse` data type. */
  override toJSON(): plainTypes.GuidanceResponse {
    return this.serialize() as plainTypes.GuidanceResponse;
  }

  /** The id of the request associated with this response, if any (0..1) */
  getRequestId(): string | undefined {
    return this.requestId;
  }

  /** Sets `requestId`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setRequestId(requestId: string | undefined): this {
    return this.setFieldValue('requestId', requestId);
  }

  hasRequestId(): boolean {
    return this.hasFieldValue('requestId');
  }

  /** The element carrying the id and extensions of `requestId`. Created when absent. */
  getRequestIdElement(): Element {
    if (this._requestId === undefined) {
      this._requestId = new Element();
    }
    return this._requestId;
  }

  setRequestIdElement(requestIdElement: Element | undefined): this {
    this._requestId = requestIdElement;
    return this;
  }

  /** Business identifier (0..1) Created when absent. */
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

  /** A reference to a knowledge module (1..1) Created when absent. */
  getModule(): Reference {
    if (this.module === undefined) {
      this.module = new Reference();
    }
    return this.module;
  }

  setModule(module: Reference | undefined): this {
    return this.setFieldValue('module', module);
  }

  hasModule(): boolean {
    return this.hasFieldValue('module');
  }

  /** success | data-requested | data-required | in-progress | failure | entered-in-error (1..1) */
  getStatus(): valueSetCodes.GuidanceResponseStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.GuidanceResponseStatus | undefined): this {
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

  /** Patient the request was performed for (0..1) Created when absent. */
  getSubject(): Reference {
    if (this.subject === undefined) {
      this.subject = new Reference();
    }
    return this.subject;
  }

  setSubject(subject: Reference | undefined): this {
    return this.setFieldValue('subject', subject);
  }

  hasSubject(): boolean {
    return this.hasFieldValue('subject');
  }

  /** Encounter or Episode during which the response was returned (0..1) Created when absent. */
  getContext(): Reference {
    if (this.context === undefined) {
      this.context = new Reference();
    }
    return this.context;
  }

  setContext(context: Reference | undefined): this {
    return this.setFieldValue('context', context);
  }

  hasContext(): boolean {
    return this.hasFieldValue('context');
  }

  /** When the guidance response was processed (0..1) */
  getOccurrenceDateTime(): string | undefined {
    return this.occurrenceDateTime;
  }

  /** Sets `occurrenceDateTime`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setOccurrenceDateTime(occurrenceDateTime: string | undefined): this {
    return this.setFieldValue('occurrenceDateTime', occurrenceDateTime);
  }

  hasOccurrenceDateTime(): boolean {
    return this.hasFieldValue('occurrenceDateTime');
  }

  /** The element carrying the id and extensions of `occurrenceDateTime`. Created when absent. */
  getOccurrenceDateTimeElement(): Element {
    if (this._occurrenceDateTime === undefined) {
      this._occurrenceDateTime = new Element();
    }
    return this._occurrenceDateTime;
  }

  setOccurrenceDateTimeElement(occurrenceDateTimeElement: Element | undefined): this {
    this._occurrenceDateTime = occurrenceDateTimeElement;
    return this;
  }

  /** Device returning the guidance (0..1) Created when absent. */
  getPerformer(): Reference {
    if (this.performer === undefined) {
      this.performer = new Reference();
    }
    return this.performer;
  }

  setPerformer(performer: Reference | undefined): this {
    return this.setFieldValue('performer', performer);
  }

  hasPerformer(): boolean {
    return this.hasFieldValue('performer');
  }

  /** Reason for the response (0..1) Whichever type of `reason[x]` is set. */
  getReason(): CodeableConcept | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | Reference>('reason');
  }

  /** True when any type of `reason[x]` is set. */
  hasReason(): boolean {
    return this.hasChoiceValue('reason');
  }

  getReasonCodeableConcept(): CodeableConcept | undefined {
    return this.reasonCodeableConcept;
  }

  /** Sets `reason[x]` as CodeableConcept and clears every other type of it. */
  setReasonCodeableConcept(reasonCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('reasonCodeableConcept', reasonCodeableConcept);
  }

  hasReasonCodeableConcept(): boolean {
    return this.hasFieldValue('reasonCodeableConcept');
  }

  getReasonReference(): Reference | undefined {
    return this.reasonReference;
  }

  /** Sets `reason[x]` as Reference and clears every other type of it. */
  setReasonReference(reasonReference: Reference | undefined): this {
    return this.setFieldValue('reasonReference', reasonReference);
  }

  hasReasonReference(): boolean {
    return this.hasFieldValue('reasonReference');
  }

  /** Additional notes about the response (0..*) Never undefined; an empty list is created when absent. */
  getNote(): Annotation[] {
    if (this.note === undefined) {
      this.note = [];
    }
    return this.note;
  }

  setNote(note: Annotation[] | undefined): this {
    return this.setFieldValue('note', note);
  }

  hasNote(): boolean {
    return this.hasFieldValue('note');
  }

  /** Appends a new, empty Annotation to `note` and returns it so it can be filled in. */
  addNote(): Annotation;
  /** Appends the given Annotation to `note` and returns this object for chaining. */
  addNote(annotation: Annotation): this;
  addNote(annotation?: Annotation): Annotation | this {
    if (annotation !== undefined) {
      return this.addFieldValue('note', annotation);
    }
    const createdAnnotation = new Annotation();
    this.addFieldValue('note', createdAnnotation);
    return createdAnnotation;
  }

  /** The first Annotation of `note`. One is added when the list is empty. */
  getNoteFirstRep(): Annotation {
    const firstAnnotation = this.getNote()[0];
    return firstAnnotation === undefined ? this.addNote() : firstAnnotation;
  }

  /** Messages resulting from the evaluation of the artifact or artifacts (0..*) Never undefined; an empty list is created when absent. */
  getEvaluationMessage(): Reference[] {
    if (this.evaluationMessage === undefined) {
      this.evaluationMessage = [];
    }
    return this.evaluationMessage;
  }

  setEvaluationMessage(evaluationMessage: Reference[] | undefined): this {
    return this.setFieldValue('evaluationMessage', evaluationMessage);
  }

  hasEvaluationMessage(): boolean {
    return this.hasFieldValue('evaluationMessage');
  }

  /** Appends a new, empty Reference to `evaluationMessage` and returns it so it can be filled in. */
  addEvaluationMessage(): Reference;
  /** Appends the given Reference to `evaluationMessage` and returns this object for chaining. */
  addEvaluationMessage(reference: Reference): this;
  addEvaluationMessage(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('evaluationMessage', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('evaluationMessage', createdReference);
    return createdReference;
  }

  /** The first Reference of `evaluationMessage`. One is added when the list is empty. */
  getEvaluationMessageFirstRep(): Reference {
    const firstReference = this.getEvaluationMessage()[0];
    return firstReference === undefined ? this.addEvaluationMessage() : firstReference;
  }

  /** The output parameters of the evaluation, if any (0..1) Created when absent. */
  getOutputParameters(): Reference {
    if (this.outputParameters === undefined) {
      this.outputParameters = new Reference();
    }
    return this.outputParameters;
  }

  setOutputParameters(outputParameters: Reference | undefined): this {
    return this.setFieldValue('outputParameters', outputParameters);
  }

  hasOutputParameters(): boolean {
    return this.hasFieldValue('outputParameters');
  }

  /** Proposed actions, if any (0..1) Created when absent. */
  getResult(): Reference {
    if (this.result === undefined) {
      this.result = new Reference();
    }
    return this.result;
  }

  setResult(result: Reference | undefined): this {
    return this.setFieldValue('result', result);
  }

  hasResult(): boolean {
    return this.hasFieldValue('result');
  }

  /** Additional required data (0..*) Never undefined; an empty list is created when absent. */
  getDataRequirement(): DataRequirement[] {
    if (this.dataRequirement === undefined) {
      this.dataRequirement = [];
    }
    return this.dataRequirement;
  }

  setDataRequirement(dataRequirement: DataRequirement[] | undefined): this {
    return this.setFieldValue('dataRequirement', dataRequirement);
  }

  hasDataRequirement(): boolean {
    return this.hasFieldValue('dataRequirement');
  }

  /** Appends a new, empty DataRequirement to `dataRequirement` and returns it so it can be filled in. */
  addDataRequirement(): DataRequirement;
  /** Appends the given DataRequirement to `dataRequirement` and returns this object for chaining. */
  addDataRequirement(dataRequirement: DataRequirement): this;
  addDataRequirement(dataRequirement?: DataRequirement): DataRequirement | this {
    if (dataRequirement !== undefined) {
      return this.addFieldValue('dataRequirement', dataRequirement);
    }
    const createdDataRequirement = new DataRequirement();
    this.addFieldValue('dataRequirement', createdDataRequirement);
    return createdDataRequirement;
  }

  /** The first DataRequirement of `dataRequirement`. One is added when the list is empty. */
  getDataRequirementFirstRep(): DataRequirement {
    const firstDataRequirement = this.getDataRequirement()[0];
    return firstDataRequirement === undefined ? this.addDataRequirement() : firstDataRequirement;
  }
}

modelTypeRegistry.register('GuidanceResponse', GuidanceResponse, true);

/** True when the value is a GuidanceResponse model instance. */
export function isGuidanceResponse(candidate: unknown): candidate is GuidanceResponse {
  return candidate instanceof GuidanceResponse;
}
