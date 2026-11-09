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
import { Coding } from './coding';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Expression } from './expression';
import { Period } from './period';
import { Reference } from './reference';

/**
 * Permission resource holds access rules for a given data and context.
 */
export class Permission extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.PermissionStatus },
      ],
    },
    {
      elementName: 'asserter',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'asserter',
          typeCode: 'Reference',
          targetResourceTypes: [
            'CareTeam',
            'HealthcareService',
            'Organization',
            'Patient',
            'Practitioner',
            'PractitionerRole',
            'RelatedPerson',
          ],
        },
      ],
    },
    {
      elementName: 'date',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'date', typeCode: 'dateTime' }],
    },
    {
      elementName: 'validity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'validity', typeCode: 'Period' }],
    },
    {
      elementName: 'justification',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'justification', typeCode: 'PermissionJustification' }],
    },
    {
      elementName: 'combining',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'combining',
          typeCode: 'code',
          allowedCodes: valueSetCodes.PermissionRuleCombining,
        },
      ],
    },
    {
      elementName: 'rule',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'rule', typeCode: 'PermissionRule' }],
    },
  ];

  readonly resourceType = 'Permission';

  /** active | entered-in-error | draft | rejected (1..1) */
  status?: valueSetCodes.PermissionStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** The person or entity that asserts the permission (0..1) */
  asserter?: Reference;

  /** The date that permission was asserted (0..*) */
  date?: string[];
  /** Id and extensions of the primitive `date`. */
  _date?: (Element | null)[];

  /** The period in which the permission is active (0..1) */
  validity?: Period;

  /** The asserted justification for using the data (0..1) */
  justification?: PermissionJustification;

  /** deny-overrides | permit-overrides | ordered-deny-overrides | ordered-permit-overrides | deny-unless-permit | permit-unless-deny (1..1) */
  combining?: valueSetCodes.PermissionRuleCombining;
  /** Id and extensions of the primitive `combining`. */
  _combining?: Element;

  /** Constraints to the Permission (0..*) */
  rule?: PermissionRule[];

  override fhirType(): string {
    return 'Permission';
  }

  /** FHIR JSON for this Permission, typed as the plain `Permission` data type. */
  override toJSON(): plainTypes.Permission {
    return this.serialize() as plainTypes.Permission;
  }

  /** active | entered-in-error | draft | rejected (1..1) */
  getStatus(): valueSetCodes.PermissionStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.PermissionStatus | undefined): this {
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

  /** The person or entity that asserts the permission (0..1) Created when absent. */
  getAsserter(): Reference {
    if (this.asserter === undefined) {
      this.asserter = new Reference();
    }
    return this.asserter;
  }

  setAsserter(asserter: Reference | undefined): this {
    return this.setFieldValue('asserter', asserter);
  }

  hasAsserter(): boolean {
    return this.hasFieldValue('asserter');
  }

  /** The date that permission was asserted (0..*) Never undefined; an empty list is created when absent. */
  getDate(): string[] {
    if (this.date === undefined) {
      this.date = [];
    }
    return this.date;
  }

  setDate(date: string[] | undefined): this {
    return this.setFieldValue('date', date);
  }

  hasDate(): boolean {
    return this.hasFieldValue('date');
  }

  /** Appends one value to `date`. Throws a FhirModelError when it is not a valid FHIR dateTime. */
  addDate(date: string): this {
    return this.addFieldValue('date', date);
  }

  /** The period in which the permission is active (0..1) Created when absent. */
  getValidity(): Period {
    if (this.validity === undefined) {
      this.validity = new Period();
    }
    return this.validity;
  }

  setValidity(validity: Period | undefined): this {
    return this.setFieldValue('validity', validity);
  }

  hasValidity(): boolean {
    return this.hasFieldValue('validity');
  }

  /** The asserted justification for using the data (0..1) Created when absent. */
  getJustification(): PermissionJustification {
    if (this.justification === undefined) {
      this.justification = new PermissionJustification();
    }
    return this.justification;
  }

  setJustification(justification: PermissionJustification | undefined): this {
    return this.setFieldValue('justification', justification);
  }

  hasJustification(): boolean {
    return this.hasFieldValue('justification');
  }

  /** deny-overrides | permit-overrides | ordered-deny-overrides | ordered-permit-overrides | deny-unless-permit | permit-unless-deny (1..1) */
  getCombining(): valueSetCodes.PermissionRuleCombining | undefined {
    return this.combining;
  }

  /** Sets `combining`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setCombining(combining: valueSetCodes.PermissionRuleCombining | undefined): this {
    return this.setFieldValue('combining', combining);
  }

  hasCombining(): boolean {
    return this.hasFieldValue('combining');
  }

  /** The element carrying the id and extensions of `combining`. Created when absent. */
  getCombiningElement(): Element {
    if (this._combining === undefined) {
      this._combining = new Element();
    }
    return this._combining;
  }

  setCombiningElement(combiningElement: Element | undefined): this {
    this._combining = combiningElement;
    return this;
  }

  /** Constraints to the Permission (0..*) Never undefined; an empty list is created when absent. */
  getRule(): PermissionRule[] {
    if (this.rule === undefined) {
      this.rule = [];
    }
    return this.rule;
  }

  setRule(rule: PermissionRule[] | undefined): this {
    return this.setFieldValue('rule', rule);
  }

  hasRule(): boolean {
    return this.hasFieldValue('rule');
  }

  /** Appends a new, empty PermissionRule to `rule` and returns it so it can be filled in. */
  addRule(): PermissionRule;
  /** Appends the given PermissionRule to `rule` and returns this object for chaining. */
  addRule(permissionRule: PermissionRule): this;
  addRule(permissionRule?: PermissionRule): PermissionRule | this {
    if (permissionRule !== undefined) {
      return this.addFieldValue('rule', permissionRule);
    }
    const createdPermissionRule = new PermissionRule();
    this.addFieldValue('rule', createdPermissionRule);
    return createdPermissionRule;
  }

  /** The first PermissionRule of `rule`. One is added when the list is empty. */
  getRuleFirstRep(): PermissionRule {
    const firstPermissionRule = this.getRule()[0];
    return firstPermissionRule === undefined ? this.addRule() : firstPermissionRule;
  }
}

modelTypeRegistry.register('Permission', Permission, true);

/** True when the value is a Permission model instance. */
export function isPermission(candidate: unknown): candidate is Permission {
  return candidate instanceof Permission;
}

/**
 * The asserted justification for using the data
 */
export class PermissionJustification extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'basis',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'basis', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'evidence',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'evidence', typeCode: 'Reference' }],
    },
  ];

  /** The regulatory grounds upon which this Permission builds (0..*) */
  basis?: CodeableConcept[];

  /** Justifing rational (0..*) */
  evidence?: Reference[];

  override fhirType(): string {
    return 'Permission.justification';
  }

  /** FHIR JSON for this PermissionJustification, typed as the plain `PermissionJustification` data type. */
  override toJSON(): plainTypes.PermissionJustification {
    return this.serialize() as plainTypes.PermissionJustification;
  }

  /** The regulatory grounds upon which this Permission builds (0..*) Never undefined; an empty list is created when absent. */
  getBasis(): CodeableConcept[] {
    if (this.basis === undefined) {
      this.basis = [];
    }
    return this.basis;
  }

  setBasis(basis: CodeableConcept[] | undefined): this {
    return this.setFieldValue('basis', basis);
  }

  hasBasis(): boolean {
    return this.hasFieldValue('basis');
  }

  /** Appends a new, empty CodeableConcept to `basis` and returns it so it can be filled in. */
  addBasis(): CodeableConcept;
  /** Appends the given CodeableConcept to `basis` and returns this object for chaining. */
  addBasis(codeableConcept: CodeableConcept): this;
  addBasis(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('basis', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('basis', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `basis`. One is added when the list is empty. */
  getBasisFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getBasis()[0];
    return firstCodeableConcept === undefined ? this.addBasis() : firstCodeableConcept;
  }

  /** Justifing rational (0..*) Never undefined; an empty list is created when absent. */
  getEvidence(): Reference[] {
    if (this.evidence === undefined) {
      this.evidence = [];
    }
    return this.evidence;
  }

  setEvidence(evidence: Reference[] | undefined): this {
    return this.setFieldValue('evidence', evidence);
  }

  hasEvidence(): boolean {
    return this.hasFieldValue('evidence');
  }

  /** Appends a new, empty Reference to `evidence` and returns it so it can be filled in. */
  addEvidence(): Reference;
  /** Appends the given Reference to `evidence` and returns this object for chaining. */
  addEvidence(reference: Reference): this;
  addEvidence(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('evidence', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('evidence', createdReference);
    return createdReference;
  }

  /** The first Reference of `evidence`. One is added when the list is empty. */
  getEvidenceFirstRep(): Reference {
    const firstReference = this.getEvidence()[0];
    return firstReference === undefined ? this.addEvidence() : firstReference;
  }
}

modelTypeRegistry.register('PermissionJustification', PermissionJustification, false);

/**
 * Constraints to the Permission
 */
export class PermissionRule extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.ConsentProvisionType },
      ],
    },
    {
      elementName: 'data',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'data', typeCode: 'PermissionRuleData' }],
    },
    {
      elementName: 'activity',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'activity', typeCode: 'PermissionRuleActivity' }],
    },
    {
      elementName: 'limit',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'limit', typeCode: 'CodeableConcept' }],
    },
  ];

  /** deny | permit (0..1) */
  type?: valueSetCodes.ConsentProvisionType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** The selection criteria to identify data that is within scope of this provision (0..*) */
  data?: PermissionRuleData[];

  /** A description or definition of which activities are allowed to be done on the data (0..*) */
  activity?: PermissionRuleActivity[];

  /** What limits apply to the use of the data (0..*) */
  limit?: CodeableConcept[];

  override fhirType(): string {
    return 'Permission.rule';
  }

  /** FHIR JSON for this PermissionRule, typed as the plain `PermissionRule` data type. */
  override toJSON(): plainTypes.PermissionRule {
    return this.serialize() as plainTypes.PermissionRule;
  }

  /** deny | permit (0..1) */
  getType(): valueSetCodes.ConsentProvisionType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.ConsentProvisionType | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** The element carrying the id and extensions of `type`. Created when absent. */
  getTypeElement(): Element {
    if (this._type === undefined) {
      this._type = new Element();
    }
    return this._type;
  }

  setTypeElement(typeElement: Element | undefined): this {
    this._type = typeElement;
    return this;
  }

  /** The selection criteria to identify data that is within scope of this provision (0..*) Never undefined; an empty list is created when absent. */
  getData(): PermissionRuleData[] {
    if (this.data === undefined) {
      this.data = [];
    }
    return this.data;
  }

  setData(data: PermissionRuleData[] | undefined): this {
    return this.setFieldValue('data', data);
  }

  hasData(): boolean {
    return this.hasFieldValue('data');
  }

  /** Appends a new, empty PermissionRuleData to `data` and returns it so it can be filled in. */
  addData(): PermissionRuleData;
  /** Appends the given PermissionRuleData to `data` and returns this object for chaining. */
  addData(permissionRuleData: PermissionRuleData): this;
  addData(permissionRuleData?: PermissionRuleData): PermissionRuleData | this {
    if (permissionRuleData !== undefined) {
      return this.addFieldValue('data', permissionRuleData);
    }
    const createdPermissionRuleData = new PermissionRuleData();
    this.addFieldValue('data', createdPermissionRuleData);
    return createdPermissionRuleData;
  }

  /** The first PermissionRuleData of `data`. One is added when the list is empty. */
  getDataFirstRep(): PermissionRuleData {
    const firstPermissionRuleData = this.getData()[0];
    return firstPermissionRuleData === undefined ? this.addData() : firstPermissionRuleData;
  }

  /** A description or definition of which activities are allowed to be done on the data (0..*) Never undefined; an empty list is created when absent. */
  getActivity(): PermissionRuleActivity[] {
    if (this.activity === undefined) {
      this.activity = [];
    }
    return this.activity;
  }

  setActivity(activity: PermissionRuleActivity[] | undefined): this {
    return this.setFieldValue('activity', activity);
  }

  hasActivity(): boolean {
    return this.hasFieldValue('activity');
  }

  /** Appends a new, empty PermissionRuleActivity to `activity` and returns it so it can be filled in. */
  addActivity(): PermissionRuleActivity;
  /** Appends the given PermissionRuleActivity to `activity` and returns this object for chaining. */
  addActivity(permissionRuleActivity: PermissionRuleActivity): this;
  addActivity(permissionRuleActivity?: PermissionRuleActivity): PermissionRuleActivity | this {
    if (permissionRuleActivity !== undefined) {
      return this.addFieldValue('activity', permissionRuleActivity);
    }
    const createdPermissionRuleActivity = new PermissionRuleActivity();
    this.addFieldValue('activity', createdPermissionRuleActivity);
    return createdPermissionRuleActivity;
  }

  /** The first PermissionRuleActivity of `activity`. One is added when the list is empty. */
  getActivityFirstRep(): PermissionRuleActivity {
    const firstPermissionRuleActivity = this.getActivity()[0];
    return firstPermissionRuleActivity === undefined
      ? this.addActivity()
      : firstPermissionRuleActivity;
  }

  /** What limits apply to the use of the data (0..*) Never undefined; an empty list is created when absent. */
  getLimit(): CodeableConcept[] {
    if (this.limit === undefined) {
      this.limit = [];
    }
    return this.limit;
  }

  setLimit(limit: CodeableConcept[] | undefined): this {
    return this.setFieldValue('limit', limit);
  }

  hasLimit(): boolean {
    return this.hasFieldValue('limit');
  }

  /** Appends a new, empty CodeableConcept to `limit` and returns it so it can be filled in. */
  addLimit(): CodeableConcept;
  /** Appends the given CodeableConcept to `limit` and returns this object for chaining. */
  addLimit(codeableConcept: CodeableConcept): this;
  addLimit(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('limit', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('limit', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `limit`. One is added when the list is empty. */
  getLimitFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getLimit()[0];
    return firstCodeableConcept === undefined ? this.addLimit() : firstCodeableConcept;
  }
}

modelTypeRegistry.register('PermissionRule', PermissionRule, false);

/**
 * The selection criteria to identify data that is within scope of this provision
 */
export class PermissionRuleData extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'resource',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'resource', typeCode: 'PermissionRuleDataResource' }],
    },
    {
      elementName: 'security',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'security', typeCode: 'Coding' }],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
    {
      elementName: 'expression',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'expression', typeCode: 'Expression' }],
    },
  ];

  /** Explicit FHIR Resource references (0..*) */
  resource?: PermissionRuleDataResource[];

  /** Security tag code on .meta.security (0..*) */
  security?: Coding[];

  /** Timeframe encompasing data create/update (0..*) */
  period?: Period[];

  /** Expression identifying the data (0..1) */
  expression?: Expression;

  override fhirType(): string {
    return 'Permission.rule.data';
  }

  /** FHIR JSON for this PermissionRuleData, typed as the plain `PermissionData` data type. */
  override toJSON(): plainTypes.PermissionData {
    return this.serialize() as plainTypes.PermissionData;
  }

  /** Explicit FHIR Resource references (0..*) Never undefined; an empty list is created when absent. */
  getResource(): PermissionRuleDataResource[] {
    if (this.resource === undefined) {
      this.resource = [];
    }
    return this.resource;
  }

  setResource(resource: PermissionRuleDataResource[] | undefined): this {
    return this.setFieldValue('resource', resource);
  }

  hasResource(): boolean {
    return this.hasFieldValue('resource');
  }

  /** Appends a new, empty PermissionRuleDataResource to `resource` and returns it so it can be filled in. */
  addResource(): PermissionRuleDataResource;
  /** Appends the given PermissionRuleDataResource to `resource` and returns this object for chaining. */
  addResource(permissionRuleDataResource: PermissionRuleDataResource): this;
  addResource(
    permissionRuleDataResource?: PermissionRuleDataResource
  ): PermissionRuleDataResource | this {
    if (permissionRuleDataResource !== undefined) {
      return this.addFieldValue('resource', permissionRuleDataResource);
    }
    const createdPermissionRuleDataResource = new PermissionRuleDataResource();
    this.addFieldValue('resource', createdPermissionRuleDataResource);
    return createdPermissionRuleDataResource;
  }

  /** The first PermissionRuleDataResource of `resource`. One is added when the list is empty. */
  getResourceFirstRep(): PermissionRuleDataResource {
    const firstPermissionRuleDataResource = this.getResource()[0];
    return firstPermissionRuleDataResource === undefined
      ? this.addResource()
      : firstPermissionRuleDataResource;
  }

  /** Security tag code on .meta.security (0..*) Never undefined; an empty list is created when absent. */
  getSecurity(): Coding[] {
    if (this.security === undefined) {
      this.security = [];
    }
    return this.security;
  }

  setSecurity(security: Coding[] | undefined): this {
    return this.setFieldValue('security', security);
  }

  hasSecurity(): boolean {
    return this.hasFieldValue('security');
  }

  /** Appends a new, empty Coding to `security` and returns it so it can be filled in. */
  addSecurity(): Coding;
  /** Appends the given Coding to `security` and returns this object for chaining. */
  addSecurity(coding: Coding): this;
  addSecurity(coding?: Coding): Coding | this {
    if (coding !== undefined) {
      return this.addFieldValue('security', coding);
    }
    const createdCoding = new Coding();
    this.addFieldValue('security', createdCoding);
    return createdCoding;
  }

  /** The first Coding of `security`. One is added when the list is empty. */
  getSecurityFirstRep(): Coding {
    const firstCoding = this.getSecurity()[0];
    return firstCoding === undefined ? this.addSecurity() : firstCoding;
  }

  /** Timeframe encompasing data create/update (0..*) Never undefined; an empty list is created when absent. */
  getPeriod(): Period[] {
    if (this.period === undefined) {
      this.period = [];
    }
    return this.period;
  }

  setPeriod(period: Period[] | undefined): this {
    return this.setFieldValue('period', period);
  }

  hasPeriod(): boolean {
    return this.hasFieldValue('period');
  }

  /** Appends a new, empty Period to `period` and returns it so it can be filled in. */
  addPeriod(): Period;
  /** Appends the given Period to `period` and returns this object for chaining. */
  addPeriod(period: Period): this;
  addPeriod(period?: Period): Period | this {
    if (period !== undefined) {
      return this.addFieldValue('period', period);
    }
    const createdPeriod = new Period();
    this.addFieldValue('period', createdPeriod);
    return createdPeriod;
  }

  /** The first Period of `period`. One is added when the list is empty. */
  getPeriodFirstRep(): Period {
    const firstPeriod = this.getPeriod()[0];
    return firstPeriod === undefined ? this.addPeriod() : firstPeriod;
  }

  /** Expression identifying the data (0..1) Created when absent. */
  getExpression(): Expression {
    if (this.expression === undefined) {
      this.expression = new Expression();
    }
    return this.expression;
  }

  setExpression(expression: Expression | undefined): this {
    return this.setFieldValue('expression', expression);
  }

  hasExpression(): boolean {
    return this.hasFieldValue('expression');
  }
}

modelTypeRegistry.register('PermissionRuleData', PermissionRuleData, false);

/**
 * Explicit FHIR Resource references
 */
export class PermissionRuleDataResource extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'meaning',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'meaning', typeCode: 'code', allowedCodes: valueSetCodes.ConsentDataMeaning },
      ],
    },
    {
      elementName: 'reference',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reference', typeCode: 'Reference' }],
    },
  ];

  /** instance | related | dependents | authoredby (1..1) */
  meaning?: valueSetCodes.ConsentDataMeaning;
  /** Id and extensions of the primitive `meaning`. */
  _meaning?: Element;

  /** The actual data reference (1..1) */
  reference?: Reference;

  override fhirType(): string {
    return 'Permission.rule.data.resource';
  }

  /** FHIR JSON for this PermissionRuleDataResource, typed as the plain `PermissionResource` data type. */
  override toJSON(): plainTypes.PermissionResource {
    return this.serialize() as plainTypes.PermissionResource;
  }

  /** instance | related | dependents | authoredby (1..1) */
  getMeaning(): valueSetCodes.ConsentDataMeaning | undefined {
    return this.meaning;
  }

  /** Sets `meaning`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setMeaning(meaning: valueSetCodes.ConsentDataMeaning | undefined): this {
    return this.setFieldValue('meaning', meaning);
  }

  hasMeaning(): boolean {
    return this.hasFieldValue('meaning');
  }

  /** The element carrying the id and extensions of `meaning`. Created when absent. */
  getMeaningElement(): Element {
    if (this._meaning === undefined) {
      this._meaning = new Element();
    }
    return this._meaning;
  }

  setMeaningElement(meaningElement: Element | undefined): this {
    this._meaning = meaningElement;
    return this;
  }

  /** The actual data reference (1..1) Created when absent. */
  getReference(): Reference {
    if (this.reference === undefined) {
      this.reference = new Reference();
    }
    return this.reference;
  }

  setReference(reference: Reference | undefined): this {
    return this.setFieldValue('reference', reference);
  }

  hasReference(): boolean {
    return this.hasFieldValue('reference');
  }
}

modelTypeRegistry.register('PermissionRuleDataResource', PermissionRuleDataResource, false);

/**
 * A description or definition of which activities are allowed to be done on the data
 */
export class PermissionRuleActivity extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'actor',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'actor',
          typeCode: 'Reference',
          targetResourceTypes: [
            'CareTeam',
            'Device',
            'Group',
            'Organization',
            'Patient',
            'Practitioner',
            'PractitionerRole',
            'RelatedPerson',
          ],
        },
      ],
    },
    {
      elementName: 'action',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'action', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'purpose',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'purpose', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Authorized actor(s) (0..*) */
  actor?: Reference[];

  /** Actions controlled by this rule (0..*) */
  action?: CodeableConcept[];

  /** The purpose for which the permission is given (0..*) */
  purpose?: CodeableConcept[];

  override fhirType(): string {
    return 'Permission.rule.activity';
  }

  /** FHIR JSON for this PermissionRuleActivity, typed as the plain `PermissionActivity` data type. */
  override toJSON(): plainTypes.PermissionActivity {
    return this.serialize() as plainTypes.PermissionActivity;
  }

  /** Authorized actor(s) (0..*) Never undefined; an empty list is created when absent. */
  getActor(): Reference[] {
    if (this.actor === undefined) {
      this.actor = [];
    }
    return this.actor;
  }

  setActor(actor: Reference[] | undefined): this {
    return this.setFieldValue('actor', actor);
  }

  hasActor(): boolean {
    return this.hasFieldValue('actor');
  }

  /** Appends a new, empty Reference to `actor` and returns it so it can be filled in. */
  addActor(): Reference;
  /** Appends the given Reference to `actor` and returns this object for chaining. */
  addActor(reference: Reference): this;
  addActor(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('actor', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('actor', createdReference);
    return createdReference;
  }

  /** The first Reference of `actor`. One is added when the list is empty. */
  getActorFirstRep(): Reference {
    const firstReference = this.getActor()[0];
    return firstReference === undefined ? this.addActor() : firstReference;
  }

  /** Actions controlled by this rule (0..*) Never undefined; an empty list is created when absent. */
  getAction(): CodeableConcept[] {
    if (this.action === undefined) {
      this.action = [];
    }
    return this.action;
  }

  setAction(action: CodeableConcept[] | undefined): this {
    return this.setFieldValue('action', action);
  }

  hasAction(): boolean {
    return this.hasFieldValue('action');
  }

  /** Appends a new, empty CodeableConcept to `action` and returns it so it can be filled in. */
  addAction(): CodeableConcept;
  /** Appends the given CodeableConcept to `action` and returns this object for chaining. */
  addAction(codeableConcept: CodeableConcept): this;
  addAction(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('action', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('action', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `action`. One is added when the list is empty. */
  getActionFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getAction()[0];
    return firstCodeableConcept === undefined ? this.addAction() : firstCodeableConcept;
  }

  /** The purpose for which the permission is given (0..*) Never undefined; an empty list is created when absent. */
  getPurpose(): CodeableConcept[] {
    if (this.purpose === undefined) {
      this.purpose = [];
    }
    return this.purpose;
  }

  setPurpose(purpose: CodeableConcept[] | undefined): this {
    return this.setFieldValue('purpose', purpose);
  }

  hasPurpose(): boolean {
    return this.hasFieldValue('purpose');
  }

  /** Appends a new, empty CodeableConcept to `purpose` and returns it so it can be filled in. */
  addPurpose(): CodeableConcept;
  /** Appends the given CodeableConcept to `purpose` and returns this object for chaining. */
  addPurpose(codeableConcept: CodeableConcept): this;
  addPurpose(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('purpose', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('purpose', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `purpose`. One is added when the list is empty. */
  getPurposeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getPurpose()[0];
    return firstCodeableConcept === undefined ? this.addPurpose() : firstCodeableConcept;
  }
}

modelTypeRegistry.register('PermissionRuleActivity', PermissionRuleActivity, false);
