/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { Annotation } from './annotation';
import { CodeableConcept } from './codeableConcept';
import { DataRequirement } from './dataRequirement';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Reference } from './reference';

/**
 * A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken.
 */
export class GuidanceResponse extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'requestIdentifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'requestIdentifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'module',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'moduleUri', typeCode: 'uri' },
        { jsonKey: 'moduleCanonical', typeCode: 'canonical' },
        { jsonKey: 'moduleCodeableConcept', typeCode: 'CodeableConcept' },
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
      elementName: 'encounter',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'encounter', typeCode: 'Reference', targetResourceTypes: ['Encounter'] }],
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
      elementName: 'reasonCode',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reasonCode', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'reasonReference',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'reasonReference',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Condition',
            'DiagnosticReport',
            'DocumentReference',
            'Observation',
          ],
        },
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

  /** The identifier of the request associated with this response, if any (0..1) */
  requestIdentifier?: Identifier;

  /** Business identifier (0..*) */
  identifier?: Identifier[];

  /** What guidance was requested (1..1) */
  moduleUri?: string;
  /** Id and extensions of the primitive `moduleUri`. */
  _moduleUri?: Element;
  /** What guidance was requested (1..1) */
  moduleCanonical?: string;
  /** Id and extensions of the primitive `moduleCanonical`. */
  _moduleCanonical?: Element;
  /** What guidance was requested (1..1) */
  moduleCodeableConcept?: CodeableConcept;

  /** success | data-requested | data-required | in-progress | failure | entered-in-error (1..1) */
  status?: valueSetCodes.GuidanceResponseStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Patient the request was performed for (0..1) */
  subject?: Reference;

  /** Encounter during which the response was returned (0..1) */
  encounter?: Reference;

  /** When the guidance response was processed (0..1) */
  occurrenceDateTime?: string;
  /** Id and extensions of the primitive `occurrenceDateTime`. */
  _occurrenceDateTime?: Element;

  /** Device returning the guidance (0..1) */
  performer?: Reference;

  /** Why guidance is needed (0..*) */
  reasonCode?: CodeableConcept[];

  /** Why guidance is needed (0..*) */
  reasonReference?: Reference[];

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

  /** The identifier of the request associated with this response, if any (0..1) Created when absent. */
  getRequestIdentifier(): Identifier {
    if (this.requestIdentifier === undefined) {
      this.requestIdentifier = new Identifier();
    }
    return this.requestIdentifier;
  }

  setRequestIdentifier(requestIdentifier: Identifier | undefined): this {
    return this.setFieldValue('requestIdentifier', requestIdentifier);
  }

  hasRequestIdentifier(): boolean {
    return this.hasFieldValue('requestIdentifier');
  }

  /** Business identifier (0..*) Never undefined; an empty list is created when absent. */
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

  /** What guidance was requested (1..1) Whichever type of `module[x]` is set. */
  getModule(): string | CodeableConcept | undefined {
    return this.getChoiceValue<string | CodeableConcept>('module');
  }

  /** True when any type of `module[x]` is set. */
  hasModule(): boolean {
    return this.hasChoiceValue('module');
  }

  getModuleUri(): string | undefined {
    return this.moduleUri;
  }

  /** Sets `module[x]` as uri and clears every other type of it. */
  setModuleUri(moduleUri: string | undefined): this {
    return this.setFieldValue('moduleUri', moduleUri);
  }

  hasModuleUri(): boolean {
    return this.hasFieldValue('moduleUri');
  }

  getModuleCanonical(): string | undefined {
    return this.moduleCanonical;
  }

  /** Sets `module[x]` as canonical and clears every other type of it. */
  setModuleCanonical(moduleCanonical: string | undefined): this {
    return this.setFieldValue('moduleCanonical', moduleCanonical);
  }

  hasModuleCanonical(): boolean {
    return this.hasFieldValue('moduleCanonical');
  }

  getModuleCodeableConcept(): CodeableConcept | undefined {
    return this.moduleCodeableConcept;
  }

  /** Sets `module[x]` as CodeableConcept and clears every other type of it. */
  setModuleCodeableConcept(moduleCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('moduleCodeableConcept', moduleCodeableConcept);
  }

  hasModuleCodeableConcept(): boolean {
    return this.hasFieldValue('moduleCodeableConcept');
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

  /** Encounter during which the response was returned (0..1) Created when absent. */
  getEncounter(): Reference {
    if (this.encounter === undefined) {
      this.encounter = new Reference();
    }
    return this.encounter;
  }

  setEncounter(encounter: Reference | undefined): this {
    return this.setFieldValue('encounter', encounter);
  }

  hasEncounter(): boolean {
    return this.hasFieldValue('encounter');
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

  /** Why guidance is needed (0..*) Never undefined; an empty list is created when absent. */
  getReasonCode(): CodeableConcept[] {
    if (this.reasonCode === undefined) {
      this.reasonCode = [];
    }
    return this.reasonCode;
  }

  setReasonCode(reasonCode: CodeableConcept[] | undefined): this {
    return this.setFieldValue('reasonCode', reasonCode);
  }

  hasReasonCode(): boolean {
    return this.hasFieldValue('reasonCode');
  }

  /** Appends a new, empty CodeableConcept to `reasonCode` and returns it so it can be filled in. */
  addReasonCode(): CodeableConcept;
  /** Appends the given CodeableConcept to `reasonCode` and returns this object for chaining. */
  addReasonCode(codeableConcept: CodeableConcept): this;
  addReasonCode(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('reasonCode', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('reasonCode', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `reasonCode`. One is added when the list is empty. */
  getReasonCodeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getReasonCode()[0];
    return firstCodeableConcept === undefined ? this.addReasonCode() : firstCodeableConcept;
  }

  /** Why guidance is needed (0..*) Never undefined; an empty list is created when absent. */
  getReasonReference(): Reference[] {
    if (this.reasonReference === undefined) {
      this.reasonReference = [];
    }
    return this.reasonReference;
  }

  setReasonReference(reasonReference: Reference[] | undefined): this {
    return this.setFieldValue('reasonReference', reasonReference);
  }

  hasReasonReference(): boolean {
    return this.hasFieldValue('reasonReference');
  }

  /** Appends a new, empty Reference to `reasonReference` and returns it so it can be filled in. */
  addReasonReference(): Reference;
  /** Appends the given Reference to `reasonReference` and returns this object for chaining. */
  addReasonReference(reference: Reference): this;
  addReasonReference(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('reasonReference', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('reasonReference', createdReference);
    return createdReference;
  }

  /** The first Reference of `reasonReference`. One is added when the list is empty. */
  getReasonReferenceFirstRep(): Reference {
    const firstReference = this.getReasonReference()[0];
    return firstReference === undefined ? this.addReasonReference() : firstReference;
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
