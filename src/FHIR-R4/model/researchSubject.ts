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
import { Period } from './period';
import { Reference } from './reference';

/**
 * A physical entity which is the primary unit of operational and/or administrative interest in a study.
 */
export class ResearchSubject extends DomainResource {
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
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.ResearchSubjectStatus },
      ],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
    {
      elementName: 'study',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'study', typeCode: 'Reference', targetResourceTypes: ['ResearchStudy'] }],
    },
    {
      elementName: 'individual',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'individual', typeCode: 'Reference', targetResourceTypes: ['Patient'] }],
    },
    {
      elementName: 'assignedArm',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'assignedArm', typeCode: 'string' }],
    },
    {
      elementName: 'actualArm',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'actualArm', typeCode: 'string' }],
    },
    {
      elementName: 'consent',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'consent', typeCode: 'Reference', targetResourceTypes: ['Consent'] }],
    },
  ];

  readonly resourceType = 'ResearchSubject';

  /** Business Identifier for research subject in a study (0..*) */
  identifier?: Identifier[];

  /** candidate | eligible | follow-up | ineligible | not-registered | off-study | on-study | on-study-intervention | on-study-observation | pending-on-study | potential-candidate | screening | withdrawn (1..1) */
  status?: valueSetCodes.ResearchSubjectStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Start and end of participation (0..1) */
  period?: Period;

  /** Study subject is part of (1..1) */
  study?: Reference;

  /** Who is part of study (1..1) */
  individual?: Reference;

  /** What path should be followed (0..1) */
  assignedArm?: string;
  /** Id and extensions of the primitive `assignedArm`. */
  _assignedArm?: Element;

  /** What path was followed (0..1) */
  actualArm?: string;
  /** Id and extensions of the primitive `actualArm`. */
  _actualArm?: Element;

  /** Agreement to participate in study (0..1) */
  consent?: Reference;

  override fhirType(): string {
    return 'ResearchSubject';
  }

  /** FHIR JSON for this ResearchSubject, typed as the plain `ResearchSubject` data type. */
  override toJSON(): plainTypes.ResearchSubject {
    return this.serialize() as plainTypes.ResearchSubject;
  }

  /** Business Identifier for research subject in a study (0..*) Never undefined; an empty list is created when absent. */
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

  /** candidate | eligible | follow-up | ineligible | not-registered | off-study | on-study | on-study-intervention | on-study-observation | pending-on-study | potential-candidate | screening | withdrawn (1..1) */
  getStatus(): valueSetCodes.ResearchSubjectStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.ResearchSubjectStatus | undefined): this {
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

  /** Start and end of participation (0..1) Created when absent. */
  getPeriod(): Period {
    if (this.period === undefined) {
      this.period = new Period();
    }
    return this.period;
  }

  setPeriod(period: Period | undefined): this {
    return this.setFieldValue('period', period);
  }

  hasPeriod(): boolean {
    return this.hasFieldValue('period');
  }

  /** Study subject is part of (1..1) Created when absent. */
  getStudy(): Reference {
    if (this.study === undefined) {
      this.study = new Reference();
    }
    return this.study;
  }

  setStudy(study: Reference | undefined): this {
    return this.setFieldValue('study', study);
  }

  hasStudy(): boolean {
    return this.hasFieldValue('study');
  }

  /** Who is part of study (1..1) Created when absent. */
  getIndividual(): Reference {
    if (this.individual === undefined) {
      this.individual = new Reference();
    }
    return this.individual;
  }

  setIndividual(individual: Reference | undefined): this {
    return this.setFieldValue('individual', individual);
  }

  hasIndividual(): boolean {
    return this.hasFieldValue('individual');
  }

  /** What path should be followed (0..1) */
  getAssignedArm(): string | undefined {
    return this.assignedArm;
  }

  /** Sets `assignedArm`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setAssignedArm(assignedArm: string | undefined): this {
    return this.setFieldValue('assignedArm', assignedArm);
  }

  hasAssignedArm(): boolean {
    return this.hasFieldValue('assignedArm');
  }

  /** The element carrying the id and extensions of `assignedArm`. Created when absent. */
  getAssignedArmElement(): Element {
    if (this._assignedArm === undefined) {
      this._assignedArm = new Element();
    }
    return this._assignedArm;
  }

  setAssignedArmElement(assignedArmElement: Element | undefined): this {
    this._assignedArm = assignedArmElement;
    return this;
  }

  /** What path was followed (0..1) */
  getActualArm(): string | undefined {
    return this.actualArm;
  }

  /** Sets `actualArm`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setActualArm(actualArm: string | undefined): this {
    return this.setFieldValue('actualArm', actualArm);
  }

  hasActualArm(): boolean {
    return this.hasFieldValue('actualArm');
  }

  /** The element carrying the id and extensions of `actualArm`. Created when absent. */
  getActualArmElement(): Element {
    if (this._actualArm === undefined) {
      this._actualArm = new Element();
    }
    return this._actualArm;
  }

  setActualArmElement(actualArmElement: Element | undefined): this {
    this._actualArm = actualArmElement;
    return this;
  }

  /** Agreement to participate in study (0..1) Created when absent. */
  getConsent(): Reference {
    if (this.consent === undefined) {
      this.consent = new Reference();
    }
    return this.consent;
  }

  setConsent(consent: Reference | undefined): this {
    return this.setFieldValue('consent', consent);
  }

  hasConsent(): boolean {
    return this.hasFieldValue('consent');
  }
}

modelTypeRegistry.register('ResearchSubject', ResearchSubject, true);

/** True when the value is a ResearchSubject model instance. */
export function isResearchSubject(candidate: unknown): candidate is ResearchSubject {
  return candidate instanceof ResearchSubject;
}
