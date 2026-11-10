/**
 * Severity of a {@link ValidationIssue}. Only `error` issues make a model invalid.
 */
export type ValidationSeverity = 'error' | 'warning';

/**
 * Machine readable reason for a {@link ValidationIssue} or a {@link FhirModelError}.
 */
export type ValidationIssueCode =
  | 'required'
  | 'max-cardinality'
  | 'invalid-type'
  | 'invalid-primitive'
  | 'invalid-code'
  | 'choice-exclusivity'
  | 'invalid-reference-target'
  | 'unknown-property'
  | 'unknown-resource-type'
  | 'unknown-field'
  | 'invalid-model';

/**
 * A single problem found on a FHIR model, located by its element path
 * (for example `Patient.name[0].use`).
 */
export interface ValidationIssue {
  severity: ValidationSeverity;
  code: ValidationIssueCode;
  path: string;
  message: string;
}

/**
 * Thrown when a value that can never be valid is handed to a model class:
 * a malformed primitive, a code outside a required value set, a value of the
 * wrong class, too many repetitions, or JSON whose shape does not match FHIR.
 */
export class FhirModelError extends Error {
  readonly code: ValidationIssueCode;
  readonly path: string;
  /** Populated when the error comes from `fromJSON(json, { validate: true })`. */
  readonly validationIssues: readonly ValidationIssue[];

  constructor(
    code: ValidationIssueCode,
    path: string,
    message: string,
    validationIssues: readonly ValidationIssue[] = []
  ) {
    super(`${path}: ${message}`);
    this.name = 'FhirModelError';
    this.code = code;
    this.path = path;
    this.validationIssues = validationIssues;
    Object.setPrototypeOf(this, FhirModelError.prototype);
  }
}
