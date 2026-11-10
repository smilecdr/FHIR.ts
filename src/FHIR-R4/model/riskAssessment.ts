/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { Annotation } from './annotation';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Range } from './range';
import { Reference } from './reference';

/**
 * An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.
 */
export class RiskAssessment extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'basedOn',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'basedOn', typeCode: 'Reference' }],
    },
    {
      elementName: 'parent',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'parent', typeCode: 'Reference' }],
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
      elementName: 'method',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'method', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'subject',
      minimum: 1,
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
      elementName: 'occurrence',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'occurrenceDateTime', typeCode: 'dateTime' },
        { jsonKey: 'occurrencePeriod', typeCode: 'Period' },
      ],
    },
    {
      elementName: 'condition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'condition', typeCode: 'Reference', targetResourceTypes: ['Condition'] }],
    },
    {
      elementName: 'performer',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'performer',
          typeCode: 'Reference',
          targetResourceTypes: ['Device', 'Practitioner', 'PractitionerRole'],
        },
      ],
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
      elementName: 'basis',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'basis', typeCode: 'Reference' }],
    },
    {
      elementName: 'prediction',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'prediction', typeCode: 'RiskAssessmentPrediction' }],
    },
    {
      elementName: 'mitigation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'mitigation', typeCode: 'string' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
  ];

  readonly resourceType = 'RiskAssessment';

  /** Unique identifier for the assessment (0..*) */
  identifier?: Identifier[];

  /** Request fulfilled by this assessment (0..1) */
  basedOn?: Reference;

  /** Part of this occurrence (0..1) */
  parent?: Reference;

  /** registered | preliminary | final | amended + (1..1) */
  status?: valueSetCodes.ObservationStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Evaluation mechanism (0..1) */
  method?: CodeableConcept;

  /** Type of assessment (0..1) */
  code?: CodeableConcept;

  /** Who/what does assessment apply to? (1..1) */
  subject?: Reference;

  /** Where was assessment performed? (0..1) */
  encounter?: Reference;

  /** When was assessment made? (0..1) */
  occurrenceDateTime?: string;
  /** Id and extensions of the primitive `occurrenceDateTime`. */
  _occurrenceDateTime?: Element;
  /** When was assessment made? (0..1) */
  occurrencePeriod?: Period;

  /** Condition assessed (0..1) */
  condition?: Reference;

  /** Who did assessment? (0..1) */
  performer?: Reference;

  /** Why the assessment was necessary? (0..*) */
  reasonCode?: CodeableConcept[];

  /** Why the assessment was necessary? (0..*) */
  reasonReference?: Reference[];

  /** Information used in assessment (0..*) */
  basis?: Reference[];

  /** Outcome predicted (0..*) */
  prediction?: RiskAssessmentPrediction[];

  /** How to reduce risk (0..1) */
  mitigation?: string;
  /** Id and extensions of the primitive `mitigation`. */
  _mitigation?: Element;

  /** Comments on the risk assessment (0..*) */
  note?: Annotation[];

  override fhirType(): string {
    return 'RiskAssessment';
  }

  /** FHIR JSON for this RiskAssessment, typed as the plain `RiskAssessment` data type. */
  override toJSON(): plainTypes.RiskAssessment {
    return this.serialize() as plainTypes.RiskAssessment;
  }

  /** Unique identifier for the assessment (0..*) Never undefined; an empty list is created when absent. */
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

  /** Request fulfilled by this assessment (0..1) Created when absent. */
  getBasedOn(): Reference {
    if (this.basedOn === undefined) {
      this.basedOn = new Reference();
    }
    return this.basedOn;
  }

  setBasedOn(basedOn: Reference | undefined): this {
    return this.setFieldValue('basedOn', basedOn);
  }

  hasBasedOn(): boolean {
    return this.hasFieldValue('basedOn');
  }

  /** Part of this occurrence (0..1) Created when absent. */
  getParent(): Reference {
    if (this.parent === undefined) {
      this.parent = new Reference();
    }
    return this.parent;
  }

  setParent(parent: Reference | undefined): this {
    return this.setFieldValue('parent', parent);
  }

  hasParent(): boolean {
    return this.hasFieldValue('parent');
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

  /** Evaluation mechanism (0..1) Created when absent. */
  getMethod(): CodeableConcept {
    if (this.method === undefined) {
      this.method = new CodeableConcept();
    }
    return this.method;
  }

  setMethod(method: CodeableConcept | undefined): this {
    return this.setFieldValue('method', method);
  }

  hasMethod(): boolean {
    return this.hasFieldValue('method');
  }

  /** Type of assessment (0..1) Created when absent. */
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

  /** Who/what does assessment apply to? (1..1) Created when absent. */
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

  /** Where was assessment performed? (0..1) Created when absent. */
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

  /** When was assessment made? (0..1) Whichever type of `occurrence[x]` is set. */
  getOccurrence(): string | Period | undefined {
    return this.getChoiceValue<string | Period>('occurrence');
  }

  /** True when any type of `occurrence[x]` is set. */
  hasOccurrence(): boolean {
    return this.hasChoiceValue('occurrence');
  }

  getOccurrenceDateTime(): string | undefined {
    return this.occurrenceDateTime;
  }

  /** Sets `occurrence[x]` as dateTime and clears every other type of it. */
  setOccurrenceDateTime(occurrenceDateTime: string | undefined): this {
    return this.setFieldValue('occurrenceDateTime', occurrenceDateTime);
  }

  hasOccurrenceDateTime(): boolean {
    return this.hasFieldValue('occurrenceDateTime');
  }

  getOccurrencePeriod(): Period | undefined {
    return this.occurrencePeriod;
  }

  /** Sets `occurrence[x]` as Period and clears every other type of it. */
  setOccurrencePeriod(occurrencePeriod: Period | undefined): this {
    return this.setFieldValue('occurrencePeriod', occurrencePeriod);
  }

  hasOccurrencePeriod(): boolean {
    return this.hasFieldValue('occurrencePeriod');
  }

  /** Condition assessed (0..1) Created when absent. */
  getCondition(): Reference {
    if (this.condition === undefined) {
      this.condition = new Reference();
    }
    return this.condition;
  }

  setCondition(condition: Reference | undefined): this {
    return this.setFieldValue('condition', condition);
  }

  hasCondition(): boolean {
    return this.hasFieldValue('condition');
  }

  /** Who did assessment? (0..1) Created when absent. */
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

  /** Why the assessment was necessary? (0..*) Never undefined; an empty list is created when absent. */
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

  /** Why the assessment was necessary? (0..*) Never undefined; an empty list is created when absent. */
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

  /** Information used in assessment (0..*) Never undefined; an empty list is created when absent. */
  getBasis(): Reference[] {
    if (this.basis === undefined) {
      this.basis = [];
    }
    return this.basis;
  }

  setBasis(basis: Reference[] | undefined): this {
    return this.setFieldValue('basis', basis);
  }

  hasBasis(): boolean {
    return this.hasFieldValue('basis');
  }

  /** Appends a new, empty Reference to `basis` and returns it so it can be filled in. */
  addBasis(): Reference;
  /** Appends the given Reference to `basis` and returns this object for chaining. */
  addBasis(reference: Reference): this;
  addBasis(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('basis', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('basis', createdReference);
    return createdReference;
  }

  /** The first Reference of `basis`. One is added when the list is empty. */
  getBasisFirstRep(): Reference {
    const firstReference = this.getBasis()[0];
    return firstReference === undefined ? this.addBasis() : firstReference;
  }

  /** Outcome predicted (0..*) Never undefined; an empty list is created when absent. */
  getPrediction(): RiskAssessmentPrediction[] {
    if (this.prediction === undefined) {
      this.prediction = [];
    }
    return this.prediction;
  }

  setPrediction(prediction: RiskAssessmentPrediction[] | undefined): this {
    return this.setFieldValue('prediction', prediction);
  }

  hasPrediction(): boolean {
    return this.hasFieldValue('prediction');
  }

  /** Appends a new, empty RiskAssessmentPrediction to `prediction` and returns it so it can be filled in. */
  addPrediction(): RiskAssessmentPrediction;
  /** Appends the given RiskAssessmentPrediction to `prediction` and returns this object for chaining. */
  addPrediction(riskAssessmentPrediction: RiskAssessmentPrediction): this;
  addPrediction(
    riskAssessmentPrediction?: RiskAssessmentPrediction
  ): RiskAssessmentPrediction | this {
    if (riskAssessmentPrediction !== undefined) {
      return this.addFieldValue('prediction', riskAssessmentPrediction);
    }
    const createdRiskAssessmentPrediction = new RiskAssessmentPrediction();
    this.addFieldValue('prediction', createdRiskAssessmentPrediction);
    return createdRiskAssessmentPrediction;
  }

  /** The first RiskAssessmentPrediction of `prediction`. One is added when the list is empty. */
  getPredictionFirstRep(): RiskAssessmentPrediction {
    const firstRiskAssessmentPrediction = this.getPrediction()[0];
    return firstRiskAssessmentPrediction === undefined
      ? this.addPrediction()
      : firstRiskAssessmentPrediction;
  }

  /** How to reduce risk (0..1) */
  getMitigation(): string | undefined {
    return this.mitigation;
  }

  /** Sets `mitigation`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setMitigation(mitigation: string | undefined): this {
    return this.setFieldValue('mitigation', mitigation);
  }

  hasMitigation(): boolean {
    return this.hasFieldValue('mitigation');
  }

  /** The element carrying the id and extensions of `mitigation`. Created when absent. */
  getMitigationElement(): Element {
    if (this._mitigation === undefined) {
      this._mitigation = new Element();
    }
    return this._mitigation;
  }

  setMitigationElement(mitigationElement: Element | undefined): this {
    this._mitigation = mitigationElement;
    return this;
  }

  /** Comments on the risk assessment (0..*) Never undefined; an empty list is created when absent. */
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
}

modelTypeRegistry.register('RiskAssessment', RiskAssessment, true);

/** True when the value is a RiskAssessment model instance. */
export function isRiskAssessment(candidate: unknown): candidate is RiskAssessment {
  return candidate instanceof RiskAssessment;
}

/**
 * Outcome predicted
 */
export class RiskAssessmentPrediction extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'outcome',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'outcome', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'probability',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'probabilityDecimal', typeCode: 'decimal' },
        { jsonKey: 'probabilityRange', typeCode: 'Range' },
      ],
    },
    {
      elementName: 'qualitativeRisk',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'qualitativeRisk', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'relativeRisk',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'relativeRisk', typeCode: 'decimal' }],
    },
    {
      elementName: 'when',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'whenPeriod', typeCode: 'Period' },
        { jsonKey: 'whenRange', typeCode: 'Range' },
      ],
    },
    {
      elementName: 'rationale',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'rationale', typeCode: 'string' }],
    },
  ];

  /** Possible outcome for the subject (0..1) */
  outcome?: CodeableConcept;

  /** Likelihood of specified outcome (0..1) */
  probabilityDecimal?: number;
  /** Id and extensions of the primitive `probabilityDecimal`. */
  _probabilityDecimal?: Element;
  /** Likelihood of specified outcome (0..1) */
  probabilityRange?: Range;

  /** Likelihood of specified outcome as a qualitative value (0..1) */
  qualitativeRisk?: CodeableConcept;

  /** Relative likelihood (0..1) */
  relativeRisk?: number;
  /** Id and extensions of the primitive `relativeRisk`. */
  _relativeRisk?: Element;

  /** Timeframe or age range (0..1) */
  whenPeriod?: Period;
  /** Timeframe or age range (0..1) */
  whenRange?: Range;

  /** Explanation of prediction (0..1) */
  rationale?: string;
  /** Id and extensions of the primitive `rationale`. */
  _rationale?: Element;

  override fhirType(): string {
    return 'RiskAssessment.prediction';
  }

  /** FHIR JSON for this RiskAssessmentPrediction, typed as the plain `RiskAssessmentPrediction` data type. */
  override toJSON(): plainTypes.RiskAssessmentPrediction {
    return this.serialize() as plainTypes.RiskAssessmentPrediction;
  }

  /** Possible outcome for the subject (0..1) Created when absent. */
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

  /** Likelihood of specified outcome (0..1) Whichever type of `probability[x]` is set. */
  getProbability(): number | Range | undefined {
    return this.getChoiceValue<number | Range>('probability');
  }

  /** True when any type of `probability[x]` is set. */
  hasProbability(): boolean {
    return this.hasChoiceValue('probability');
  }

  getProbabilityDecimal(): number | undefined {
    return this.probabilityDecimal;
  }

  /** Sets `probability[x]` as decimal and clears every other type of it. */
  setProbabilityDecimal(probabilityDecimal: number | undefined): this {
    return this.setFieldValue('probabilityDecimal', probabilityDecimal);
  }

  hasProbabilityDecimal(): boolean {
    return this.hasFieldValue('probabilityDecimal');
  }

  getProbabilityRange(): Range | undefined {
    return this.probabilityRange;
  }

  /** Sets `probability[x]` as Range and clears every other type of it. */
  setProbabilityRange(probabilityRange: Range | undefined): this {
    return this.setFieldValue('probabilityRange', probabilityRange);
  }

  hasProbabilityRange(): boolean {
    return this.hasFieldValue('probabilityRange');
  }

  /** Likelihood of specified outcome as a qualitative value (0..1) Created when absent. */
  getQualitativeRisk(): CodeableConcept {
    if (this.qualitativeRisk === undefined) {
      this.qualitativeRisk = new CodeableConcept();
    }
    return this.qualitativeRisk;
  }

  setQualitativeRisk(qualitativeRisk: CodeableConcept | undefined): this {
    return this.setFieldValue('qualitativeRisk', qualitativeRisk);
  }

  hasQualitativeRisk(): boolean {
    return this.hasFieldValue('qualitativeRisk');
  }

  /** Relative likelihood (0..1) */
  getRelativeRisk(): number | undefined {
    return this.relativeRisk;
  }

  /** Sets `relativeRisk`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setRelativeRisk(relativeRisk: number | undefined): this {
    return this.setFieldValue('relativeRisk', relativeRisk);
  }

  hasRelativeRisk(): boolean {
    return this.hasFieldValue('relativeRisk');
  }

  /** The element carrying the id and extensions of `relativeRisk`. Created when absent. */
  getRelativeRiskElement(): Element {
    if (this._relativeRisk === undefined) {
      this._relativeRisk = new Element();
    }
    return this._relativeRisk;
  }

  setRelativeRiskElement(relativeRiskElement: Element | undefined): this {
    this._relativeRisk = relativeRiskElement;
    return this;
  }

  /** Timeframe or age range (0..1) Whichever type of `when[x]` is set. */
  getWhen(): Period | Range | undefined {
    return this.getChoiceValue<Period | Range>('when');
  }

  /** True when any type of `when[x]` is set. */
  hasWhen(): boolean {
    return this.hasChoiceValue('when');
  }

  getWhenPeriod(): Period | undefined {
    return this.whenPeriod;
  }

  /** Sets `when[x]` as Period and clears every other type of it. */
  setWhenPeriod(whenPeriod: Period | undefined): this {
    return this.setFieldValue('whenPeriod', whenPeriod);
  }

  hasWhenPeriod(): boolean {
    return this.hasFieldValue('whenPeriod');
  }

  getWhenRange(): Range | undefined {
    return this.whenRange;
  }

  /** Sets `when[x]` as Range and clears every other type of it. */
  setWhenRange(whenRange: Range | undefined): this {
    return this.setFieldValue('whenRange', whenRange);
  }

  hasWhenRange(): boolean {
    return this.hasFieldValue('whenRange');
  }

  /** Explanation of prediction (0..1) */
  getRationale(): string | undefined {
    return this.rationale;
  }

  /** Sets `rationale`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setRationale(rationale: string | undefined): this {
    return this.setFieldValue('rationale', rationale);
  }

  hasRationale(): boolean {
    return this.hasFieldValue('rationale');
  }

  /** The element carrying the id and extensions of `rationale`. Created when absent. */
  getRationaleElement(): Element {
    if (this._rationale === undefined) {
      this._rationale = new Element();
    }
    return this._rationale;
  }

  setRationaleElement(rationaleElement: Element | undefined): this {
    this._rationale = rationaleElement;
    return this;
  }
}

modelTypeRegistry.register('RiskAssessmentPrediction', RiskAssessmentPrediction, false);
