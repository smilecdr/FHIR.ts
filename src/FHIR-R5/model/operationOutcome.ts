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

/**
 * A collection of error, warning, or information messages that result from a system action.
 */
export class OperationOutcome extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'issue',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'issue', typeCode: 'OperationOutcomeIssue' }],
    },
  ];

  readonly resourceType = 'OperationOutcome';

  /** A single issue associated with the action (1..*) */
  issue?: OperationOutcomeIssue[];

  override fhirType(): string {
    return 'OperationOutcome';
  }

  /** FHIR JSON for this OperationOutcome, typed as the plain `OperationOutcome` data type. */
  override toJSON(): plainTypes.OperationOutcome {
    return this.serialize() as plainTypes.OperationOutcome;
  }

  /** A single issue associated with the action (1..*) Never undefined; an empty list is created when absent. */
  getIssue(): OperationOutcomeIssue[] {
    if (this.issue === undefined) {
      this.issue = [];
    }
    return this.issue;
  }

  setIssue(issue: OperationOutcomeIssue[] | undefined): this {
    return this.setFieldValue('issue', issue);
  }

  hasIssue(): boolean {
    return this.hasFieldValue('issue');
  }

  /** Appends a new, empty OperationOutcomeIssue to `issue` and returns it so it can be filled in. */
  addIssue(): OperationOutcomeIssue;
  /** Appends the given OperationOutcomeIssue to `issue` and returns this object for chaining. */
  addIssue(operationOutcomeIssue: OperationOutcomeIssue): this;
  addIssue(operationOutcomeIssue?: OperationOutcomeIssue): OperationOutcomeIssue | this {
    if (operationOutcomeIssue !== undefined) {
      return this.addFieldValue('issue', operationOutcomeIssue);
    }
    const createdOperationOutcomeIssue = new OperationOutcomeIssue();
    this.addFieldValue('issue', createdOperationOutcomeIssue);
    return createdOperationOutcomeIssue;
  }

  /** The first OperationOutcomeIssue of `issue`. One is added when the list is empty. */
  getIssueFirstRep(): OperationOutcomeIssue {
    const firstOperationOutcomeIssue = this.getIssue()[0];
    return firstOperationOutcomeIssue === undefined ? this.addIssue() : firstOperationOutcomeIssue;
  }
}

modelTypeRegistry.register('OperationOutcome', OperationOutcome, true);

/** True when the value is a OperationOutcome model instance. */
export function isOperationOutcome(candidate: unknown): candidate is OperationOutcome {
  return candidate instanceof OperationOutcome;
}

/**
 * A single issue associated with the action
 */
export class OperationOutcomeIssue extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'severity',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'severity', typeCode: 'code', allowedCodes: valueSetCodes.IssueSeverity }],
    },
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'code', allowedCodes: valueSetCodes.IssueType }],
    },
    {
      elementName: 'details',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'details', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'diagnostics',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'diagnostics', typeCode: 'string' }],
    },
    {
      elementName: 'location',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'location', typeCode: 'string' }],
    },
    {
      elementName: 'expression',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'expression', typeCode: 'string' }],
    },
  ];

  /** fatal | error | warning | information | success (1..1) */
  severity?: valueSetCodes.IssueSeverity;
  /** Id and extensions of the primitive `severity`. */
  _severity?: Element;

  /** Error or warning code (1..1) */
  code?: valueSetCodes.IssueType;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;

  /** Additional details about the error (0..1) */
  details?: CodeableConcept;

  /** Additional diagnostic information about the issue (0..1) */
  diagnostics?: string;
  /** Id and extensions of the primitive `diagnostics`. */
  _diagnostics?: Element;

  /** Deprecated: Path of element(s) related to issue (0..*) */
  location?: string[];
  /** Id and extensions of the primitive `location`. */
  _location?: (Element | null)[];

  /** FHIRPath of element(s) related to issue (0..*) */
  expression?: string[];
  /** Id and extensions of the primitive `expression`. */
  _expression?: (Element | null)[];

  override fhirType(): string {
    return 'OperationOutcome.issue';
  }

  /** FHIR JSON for this OperationOutcomeIssue, typed as the plain `OperationOutcomeIssue` data type. */
  override toJSON(): plainTypes.OperationOutcomeIssue {
    return this.serialize() as plainTypes.OperationOutcomeIssue;
  }

  /** fatal | error | warning | information | success (1..1) */
  getSeverity(): valueSetCodes.IssueSeverity | undefined {
    return this.severity;
  }

  /** Sets `severity`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setSeverity(severity: valueSetCodes.IssueSeverity | undefined): this {
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

  /** Error or warning code (1..1) */
  getCode(): valueSetCodes.IssueType | undefined {
    return this.code;
  }

  /** Sets `code`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setCode(code: valueSetCodes.IssueType | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** The element carrying the id and extensions of `code`. Created when absent. */
  getCodeElement(): Element {
    if (this._code === undefined) {
      this._code = new Element();
    }
    return this._code;
  }

  setCodeElement(codeElement: Element | undefined): this {
    this._code = codeElement;
    return this;
  }

  /** Additional details about the error (0..1) Created when absent. */
  getDetails(): CodeableConcept {
    if (this.details === undefined) {
      this.details = new CodeableConcept();
    }
    return this.details;
  }

  setDetails(details: CodeableConcept | undefined): this {
    return this.setFieldValue('details', details);
  }

  hasDetails(): boolean {
    return this.hasFieldValue('details');
  }

  /** Additional diagnostic information about the issue (0..1) */
  getDiagnostics(): string | undefined {
    return this.diagnostics;
  }

  /** Sets `diagnostics`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDiagnostics(diagnostics: string | undefined): this {
    return this.setFieldValue('diagnostics', diagnostics);
  }

  hasDiagnostics(): boolean {
    return this.hasFieldValue('diagnostics');
  }

  /** The element carrying the id and extensions of `diagnostics`. Created when absent. */
  getDiagnosticsElement(): Element {
    if (this._diagnostics === undefined) {
      this._diagnostics = new Element();
    }
    return this._diagnostics;
  }

  setDiagnosticsElement(diagnosticsElement: Element | undefined): this {
    this._diagnostics = diagnosticsElement;
    return this;
  }

  /** Deprecated: Path of element(s) related to issue (0..*) Never undefined; an empty list is created when absent. */
  getLocation(): string[] {
    if (this.location === undefined) {
      this.location = [];
    }
    return this.location;
  }

  setLocation(location: string[] | undefined): this {
    return this.setFieldValue('location', location);
  }

  hasLocation(): boolean {
    return this.hasFieldValue('location');
  }

  /** Appends one value to `location`. Throws a FhirModelError when it is not a valid FHIR string. */
  addLocation(location: string): this {
    return this.addFieldValue('location', location);
  }

  /** FHIRPath of element(s) related to issue (0..*) Never undefined; an empty list is created when absent. */
  getExpression(): string[] {
    if (this.expression === undefined) {
      this.expression = [];
    }
    return this.expression;
  }

  setExpression(expression: string[] | undefined): this {
    return this.setFieldValue('expression', expression);
  }

  hasExpression(): boolean {
    return this.hasFieldValue('expression');
  }

  /** Appends one value to `expression`. Throws a FhirModelError when it is not a valid FHIR string. */
  addExpression(expression: string): this {
    return this.addFieldValue('expression', expression);
  }
}

modelTypeRegistry.register('OperationOutcomeIssue', OperationOutcomeIssue, false);
