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
 * Base StructureDefinition for DetectedIssue Resource
 */
export class DetectedIssue extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.ObservationStatus },
      ],
    },
    {
      elementName: 'category',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'severity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'severity',
          typeCode: 'code',
          allowedCodes: valueSetCodes.DetectedIssueSeverity,
        },
      ],
    },
    {
      elementName: 'patient',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'patient', typeCode: 'Reference', targetResourceTypes: ['Patient'] }],
    },
    {
      elementName: 'date',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'date', typeCode: 'dateTime' }],
    },
    {
      elementName: 'author',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'author',
          typeCode: 'Reference',
          targetResourceTypes: ['Device', 'Practitioner'],
        },
      ],
    },
    {
      elementName: 'implicated',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'implicated', typeCode: 'Reference' }],
    },
    {
      elementName: 'detail',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'detail', typeCode: 'string' }],
    },
    {
      elementName: 'reference',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reference', typeCode: 'uri' }],
    },
    {
      elementName: 'mitigation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'mitigation', typeCode: 'DetectedIssueMitigation' }],
    },
  ];

  readonly resourceType = 'DetectedIssue';

  /** Unique id for the detected issue (0..1) */
  identifier?: Identifier;

  /** registered | preliminary | final | amended + (1..1) */
  status?: valueSetCodes.ObservationStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Issue Category, e.g. drug-drug, duplicate therapy, etc. (0..1) */
  category?: CodeableConcept;

  /** high | moderate | low (0..1) */
  severity?: valueSetCodes.DetectedIssueSeverity;
  /** Id and extensions of the primitive `severity`. */
  _severity?: Element;

  /** Associated patient (0..1) */
  patient?: Reference;

  /** When identified (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** The provider or device that identified the issue (0..1) */
  author?: Reference;

  /** Problem resource (0..*) */
  implicated?: Reference[];

  /** Description and context (0..1) */
  detail?: string;
  /** Id and extensions of the primitive `detail`. */
  _detail?: Element;

  /** Authority for issue (0..1) */
  reference?: string;
  /** Id and extensions of the primitive `reference`. */
  _reference?: Element;

  /** Step taken to address (0..*) */
  mitigation?: DetectedIssueMitigation[];

  override fhirType(): string {
    return 'DetectedIssue';
  }

  /** FHIR JSON for this DetectedIssue, typed as the plain `DetectedIssue` data type. */
  override toJSON(): plainTypes.DetectedIssue {
    return this.serialize() as plainTypes.DetectedIssue;
  }

  /** Unique id for the detected issue (0..1) Created when absent. */
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

  /** registered | preliminary | final | amended + (1..1) */
  getStatus(): valueSetCodes.ObservationStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.ObservationStatus | undefined): this {
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

  /** Issue Category, e.g. drug-drug, duplicate therapy, etc. (0..1) Created when absent. */
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

  /** high | moderate | low (0..1) */
  getSeverity(): valueSetCodes.DetectedIssueSeverity | undefined {
    return this.severity;
  }

  /** Sets `severity`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setSeverity(severity: valueSetCodes.DetectedIssueSeverity | undefined): this {
    return this.setFieldValue('severity', severity);
  }

  hasSeverity(): boolean {
    return this.hasFieldValue('severity');
  }

  /** The element carrying the id and extensions of `severity`. Created when absent. */
  getSeverityElement(): Element {
    if (this._severity === undefined) {
      this._severity = new Element();
    }
    return this._severity;
  }

  setSeverityElement(severityElement: Element | undefined): this {
    this._severity = severityElement;
    return this;
  }

  /** Associated patient (0..1) Created when absent. */
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

  /** When identified (0..1) */
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

  /** The provider or device that identified the issue (0..1) Created when absent. */
  getAuthor(): Reference {
    if (this.author === undefined) {
      this.author = new Reference();
    }
    return this.author;
  }

  setAuthor(author: Reference | undefined): this {
    return this.setFieldValue('author', author);
  }

  hasAuthor(): boolean {
    return this.hasFieldValue('author');
  }

  /** Problem resource (0..*) Never undefined; an empty list is created when absent. */
  getImplicated(): Reference[] {
    if (this.implicated === undefined) {
      this.implicated = [];
    }
    return this.implicated;
  }

  setImplicated(implicated: Reference[] | undefined): this {
    return this.setFieldValue('implicated', implicated);
  }

  hasImplicated(): boolean {
    return this.hasFieldValue('implicated');
  }

  /** Appends a new, empty Reference to `implicated` and returns it so it can be filled in. */
  addImplicated(): Reference;
  /** Appends the given Reference to `implicated` and returns this object for chaining. */
  addImplicated(reference: Reference): this;
  addImplicated(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('implicated', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('implicated', createdReference);
    return createdReference;
  }

  /** The first Reference of `implicated`. One is added when the list is empty. */
  getImplicatedFirstRep(): Reference {
    const firstReference = this.getImplicated()[0];
    return firstReference === undefined ? this.addImplicated() : firstReference;
  }

  /** Description and context (0..1) */
  getDetail(): string | undefined {
    return this.detail;
  }

  /** Sets `detail`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDetail(detail: string | undefined): this {
    return this.setFieldValue('detail', detail);
  }

  hasDetail(): boolean {
    return this.hasFieldValue('detail');
  }

  /** The element carrying the id and extensions of `detail`. Created when absent. */
  getDetailElement(): Element {
    if (this._detail === undefined) {
      this._detail = new Element();
    }
    return this._detail;
  }

  setDetailElement(detailElement: Element | undefined): this {
    this._detail = detailElement;
    return this;
  }

  /** Authority for issue (0..1) */
  getReference(): string | undefined {
    return this.reference;
  }

  /** Sets `reference`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setReference(reference: string | undefined): this {
    return this.setFieldValue('reference', reference);
  }

  hasReference(): boolean {
    return this.hasFieldValue('reference');
  }

  /** The element carrying the id and extensions of `reference`. Created when absent. */
  getReferenceElement(): Element {
    if (this._reference === undefined) {
      this._reference = new Element();
    }
    return this._reference;
  }

  setReferenceElement(referenceElement: Element | undefined): this {
    this._reference = referenceElement;
    return this;
  }

  /** Step taken to address (0..*) Never undefined; an empty list is created when absent. */
  getMitigation(): DetectedIssueMitigation[] {
    if (this.mitigation === undefined) {
      this.mitigation = [];
    }
    return this.mitigation;
  }

  setMitigation(mitigation: DetectedIssueMitigation[] | undefined): this {
    return this.setFieldValue('mitigation', mitigation);
  }

  hasMitigation(): boolean {
    return this.hasFieldValue('mitigation');
  }

  /** Appends a new, empty DetectedIssueMitigation to `mitigation` and returns it so it can be filled in. */
  addMitigation(): DetectedIssueMitigation;
  /** Appends the given DetectedIssueMitigation to `mitigation` and returns this object for chaining. */
  addMitigation(detectedIssueMitigation: DetectedIssueMitigation): this;
  addMitigation(detectedIssueMitigation?: DetectedIssueMitigation): DetectedIssueMitigation | this {
    if (detectedIssueMitigation !== undefined) {
      return this.addFieldValue('mitigation', detectedIssueMitigation);
    }
    const createdDetectedIssueMitigation = new DetectedIssueMitigation();
    this.addFieldValue('mitigation', createdDetectedIssueMitigation);
    return createdDetectedIssueMitigation;
  }

  /** The first DetectedIssueMitigation of `mitigation`. One is added when the list is empty. */
  getMitigationFirstRep(): DetectedIssueMitigation {
    const firstDetectedIssueMitigation = this.getMitigation()[0];
    return firstDetectedIssueMitigation === undefined
      ? this.addMitigation()
      : firstDetectedIssueMitigation;
  }
}

modelTypeRegistry.register('DetectedIssue', DetectedIssue, true);

/** True when the value is a DetectedIssue model instance. */
export function isDetectedIssue(candidate: unknown): candidate is DetectedIssue {
  return candidate instanceof DetectedIssue;
}

/**
 * Step taken to address
 */
export class DetectedIssueMitigation extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'action',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'action', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'date',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'date', typeCode: 'dateTime' }],
    },
    {
      elementName: 'author',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'author', typeCode: 'Reference', targetResourceTypes: ['Practitioner'] }],
    },
  ];

  /** What mitigation? (1..1) */
  action?: CodeableConcept;

  /** Date committed (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Who is committing? (0..1) */
  author?: Reference;

  override fhirType(): string {
    return 'DetectedIssue.mitigation';
  }

  /** FHIR JSON for this DetectedIssueMitigation, typed as the plain `DetectedIssueMitigation` data type. */
  override toJSON(): plainTypes.DetectedIssueMitigation {
    return this.serialize() as plainTypes.DetectedIssueMitigation;
  }

  /** What mitigation? (1..1) Created when absent. */
  getAction(): CodeableConcept {
    if (this.action === undefined) {
      this.action = new CodeableConcept();
    }
    return this.action;
  }

  setAction(action: CodeableConcept | undefined): this {
    return this.setFieldValue('action', action);
  }

  hasAction(): boolean {
    return this.hasFieldValue('action');
  }

  /** Date committed (0..1) */
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

  /** Who is committing? (0..1) Created when absent. */
  getAuthor(): Reference {
    if (this.author === undefined) {
      this.author = new Reference();
    }
    return this.author;
  }

  setAuthor(author: Reference | undefined): this {
    return this.setFieldValue('author', author);
  }

  hasAuthor(): boolean {
    return this.hasFieldValue('author');
  }
}

modelTypeRegistry.register('DetectedIssueMitigation', DetectedIssueMitigation, false);
