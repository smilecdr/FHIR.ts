/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Reference } from './reference';

/**
 * Base StructureDefinition for ProcessResponse Resource
 */
export class ProcessResponse extends DomainResource {
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
      minimum: 0,
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
      elementName: 'created',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'created', typeCode: 'dateTime' }],
    },
    {
      elementName: 'organization',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'organization', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
    {
      elementName: 'request',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'request', typeCode: 'Reference' }],
    },
    {
      elementName: 'outcome',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'outcome', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'disposition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'disposition', typeCode: 'string' }],
    },
    {
      elementName: 'requestProvider',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'requestProvider',
          typeCode: 'Reference',
          targetResourceTypes: ['Practitioner'],
        },
      ],
    },
    {
      elementName: 'requestOrganization',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'requestOrganization',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization'],
        },
      ],
    },
    {
      elementName: 'form',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'form', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'processNote',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'processNote', typeCode: 'ProcessResponseProcessNote' }],
    },
    {
      elementName: 'error',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'error', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'communicationRequest',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'communicationRequest',
          typeCode: 'Reference',
          targetResourceTypes: ['CommunicationRequest'],
        },
      ],
    },
  ];

  readonly resourceType = 'ProcessResponse';

  /** Business Identifier (0..*) */
  identifier?: Identifier[];

  /** active | cancelled | draft | entered-in-error (0..1) */
  status?: valueSetCodes.FinancialResourceStatusCodes;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Creation date (0..1) */
  created?: string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;

  /** Authoring Organization (0..1) */
  organization?: Reference;

  /** Request reference (0..1) */
  request?: Reference;

  /** Processing outcome (0..1) */
  outcome?: CodeableConcept;

  /** Disposition Message (0..1) */
  disposition?: string;
  /** Id and extensions of the primitive `disposition`. */
  _disposition?: Element;

  /** Responsible Practitioner (0..1) */
  requestProvider?: Reference;

  /** Responsible organization (0..1) */
  requestOrganization?: Reference;

  /** Printed Form Identifier (0..1) */
  form?: CodeableConcept;

  /** Processing comments or additional requirements (0..*) */
  processNote?: ProcessResponseProcessNote[];

  /** Error code (0..*) */
  error?: CodeableConcept[];

  /** Request for additional information (0..*) */
  communicationRequest?: Reference[];

  override fhirType(): string {
    return 'ProcessResponse';
  }

  /** FHIR JSON for this ProcessResponse, typed as the plain `ProcessResponse` data type. */
  override toJSON(): plainTypes.ProcessResponse {
    return this.serialize() as plainTypes.ProcessResponse;
  }

  /** Business Identifier (0..*) Never undefined; an empty list is created when absent. */
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

  /** active | cancelled | draft | entered-in-error (0..1) */
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

  /** Creation date (0..1) */
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

  /** Authoring Organization (0..1) Created when absent. */
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

  /** Request reference (0..1) Created when absent. */
  getRequest(): Reference {
    if (this.request === undefined) {
      this.request = new Reference();
    }
    return this.request;
  }

  setRequest(request: Reference | undefined): this {
    return this.setFieldValue('request', request);
  }

  hasRequest(): boolean {
    return this.hasFieldValue('request');
  }

  /** Processing outcome (0..1) Created when absent. */
  getOutcome(): CodeableConcept {
    if (this.outcome === undefined) {
      this.outcome = new CodeableConcept();
    }
    return this.outcome;
  }

  setOutcome(outcome: CodeableConcept | undefined): this {
    return this.setFieldValue('outcome', outcome);
  }

  hasOutcome(): boolean {
    return this.hasFieldValue('outcome');
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

  /** Responsible Practitioner (0..1) Created when absent. */
  getRequestProvider(): Reference {
    if (this.requestProvider === undefined) {
      this.requestProvider = new Reference();
    }
    return this.requestProvider;
  }

  setRequestProvider(requestProvider: Reference | undefined): this {
    return this.setFieldValue('requestProvider', requestProvider);
  }

  hasRequestProvider(): boolean {
    return this.hasFieldValue('requestProvider');
  }

  /** Responsible organization (0..1) Created when absent. */
  getRequestOrganization(): Reference {
    if (this.requestOrganization === undefined) {
      this.requestOrganization = new Reference();
    }
    return this.requestOrganization;
  }

  setRequestOrganization(requestOrganization: Reference | undefined): this {
    return this.setFieldValue('requestOrganization', requestOrganization);
  }

  hasRequestOrganization(): boolean {
    return this.hasFieldValue('requestOrganization');
  }

  /** Printed Form Identifier (0..1) Created when absent. */
  getForm(): CodeableConcept {
    if (this.form === undefined) {
      this.form = new CodeableConcept();
    }
    return this.form;
  }

  setForm(form: CodeableConcept | undefined): this {
    return this.setFieldValue('form', form);
  }

  hasForm(): boolean {
    return this.hasFieldValue('form');
  }

  /** Processing comments or additional requirements (0..*) Never undefined; an empty list is created when absent. */
  getProcessNote(): ProcessResponseProcessNote[] {
    if (this.processNote === undefined) {
      this.processNote = [];
    }
    return this.processNote;
  }

  setProcessNote(processNote: ProcessResponseProcessNote[] | undefined): this {
    return this.setFieldValue('processNote', processNote);
  }

  hasProcessNote(): boolean {
    return this.hasFieldValue('processNote');
  }

  /** Appends a new, empty ProcessResponseProcessNote to `processNote` and returns it so it can be filled in. */
  addProcessNote(): ProcessResponseProcessNote;
  /** Appends the given ProcessResponseProcessNote to `processNote` and returns this object for chaining. */
  addProcessNote(processResponseProcessNote: ProcessResponseProcessNote): this;
  addProcessNote(
    processResponseProcessNote?: ProcessResponseProcessNote
  ): ProcessResponseProcessNote | this {
    if (processResponseProcessNote !== undefined) {
      return this.addFieldValue('processNote', processResponseProcessNote);
    }
    const createdProcessResponseProcessNote = new ProcessResponseProcessNote();
    this.addFieldValue('processNote', createdProcessResponseProcessNote);
    return createdProcessResponseProcessNote;
  }

  /** The first ProcessResponseProcessNote of `processNote`. One is added when the list is empty. */
  getProcessNoteFirstRep(): ProcessResponseProcessNote {
    const firstProcessResponseProcessNote = this.getProcessNote()[0];
    return firstProcessResponseProcessNote === undefined
      ? this.addProcessNote()
      : firstProcessResponseProcessNote;
  }

  /** Error code (0..*) Never undefined; an empty list is created when absent. */
  getError(): CodeableConcept[] {
    if (this.error === undefined) {
      this.error = [];
    }
    return this.error;
  }

  setError(error: CodeableConcept[] | undefined): this {
    return this.setFieldValue('error', error);
  }

  hasError(): boolean {
    return this.hasFieldValue('error');
  }

  /** Appends a new, empty CodeableConcept to `error` and returns it so it can be filled in. */
  addError(): CodeableConcept;
  /** Appends the given CodeableConcept to `error` and returns this object for chaining. */
  addError(codeableConcept: CodeableConcept): this;
  addError(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('error', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('error', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `error`. One is added when the list is empty. */
  getErrorFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getError()[0];
    return firstCodeableConcept === undefined ? this.addError() : firstCodeableConcept;
  }

  /** Request for additional information (0..*) Never undefined; an empty list is created when absent. */
  getCommunicationRequest(): Reference[] {
    if (this.communicationRequest === undefined) {
      this.communicationRequest = [];
    }
    return this.communicationRequest;
  }

  setCommunicationRequest(communicationRequest: Reference[] | undefined): this {
    return this.setFieldValue('communicationRequest', communicationRequest);
  }

  hasCommunicationRequest(): boolean {
    return this.hasFieldValue('communicationRequest');
  }

  /** Appends a new, empty Reference to `communicationRequest` and returns it so it can be filled in. */
  addCommunicationRequest(): Reference;
  /** Appends the given Reference to `communicationRequest` and returns this object for chaining. */
  addCommunicationRequest(reference: Reference): this;
  addCommunicationRequest(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('communicationRequest', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('communicationRequest', createdReference);
    return createdReference;
  }

  /** The first Reference of `communicationRequest`. One is added when the list is empty. */
  getCommunicationRequestFirstRep(): Reference {
    const firstReference = this.getCommunicationRequest()[0];
    return firstReference === undefined ? this.addCommunicationRequest() : firstReference;
  }
}

modelTypeRegistry.register('ProcessResponse', ProcessResponse, true);

/** True when the value is a ProcessResponse model instance. */
export function isProcessResponse(candidate: unknown): candidate is ProcessResponse {
  return candidate instanceof ProcessResponse;
}

/**
 * Processing comments or additional requirements
 */
export class ProcessResponseProcessNote extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'text',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'text', typeCode: 'string' }],
    },
  ];

  /** display | print | printoper (0..1) */
  type?: CodeableConcept;

  /** Comment on the processing (0..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;

  override fhirType(): string {
    return 'ProcessResponse.processNote';
  }

  /** FHIR JSON for this ProcessResponseProcessNote, typed as the plain `ProcessResponseProcessNote` data type. */
  override toJSON(): plainTypes.ProcessResponseProcessNote {
    return this.serialize() as plainTypes.ProcessResponseProcessNote;
  }

  /** display | print | printoper (0..1) Created when absent. */
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

  /** Comment on the processing (0..1) */
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
}

modelTypeRegistry.register('ProcessResponseProcessNote', ProcessResponseProcessNote, false);
