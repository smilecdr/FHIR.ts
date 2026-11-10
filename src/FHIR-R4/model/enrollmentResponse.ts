/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Reference } from './reference';

/**
 * This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource.
 */
export class EnrollmentResponse extends DomainResource {
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
      elementName: 'request',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'request', typeCode: 'Reference', targetResourceTypes: ['EnrollmentRequest'] },
      ],
    },
    {
      elementName: 'outcome',
      minimum: 0,
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
      elementName: 'requestProvider',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'requestProvider',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Practitioner', 'PractitionerRole'],
        },
      ],
    },
  ];

  readonly resourceType = 'EnrollmentResponse';

  /** Business Identifier (0..*) */
  identifier?: Identifier[];

  /** active | cancelled | draft | entered-in-error (0..1) */
  status?: valueSetCodes.FinancialResourceStatusCodes;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Claim reference (0..1) */
  request?: Reference;

  /** queued | complete | error | partial (0..1) */
  outcome?: valueSetCodes.ClaimProcessingCodes;
  /** Id and extensions of the primitive `outcome`. */
  _outcome?: Element;

  /** Disposition Message (0..1) */
  disposition?: string;
  /** Id and extensions of the primitive `disposition`. */
  _disposition?: Element;

  /** Creation date (0..1) */
  created?: string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;

  /** Insurer (0..1) */
  organization?: Reference;

  /** Responsible practitioner (0..1) */
  requestProvider?: Reference;

  override fhirType(): string {
    return 'EnrollmentResponse';
  }

  /** FHIR JSON for this EnrollmentResponse, typed as the plain `EnrollmentResponse` data type. */
  override toJSON(): plainTypes.EnrollmentResponse {
    return this.serialize() as plainTypes.EnrollmentResponse;
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

  /** Claim reference (0..1) Created when absent. */
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

  /** queued | complete | error | partial (0..1) */
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

  /** Insurer (0..1) Created when absent. */
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

  /** Responsible practitioner (0..1) Created when absent. */
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
}

modelTypeRegistry.register('EnrollmentResponse', EnrollmentResponse, true);

/** True when the value is a EnrollmentResponse model instance. */
export function isEnrollmentResponse(candidate: unknown): candidate is EnrollmentResponse {
  return candidate instanceof EnrollmentResponse;
}
