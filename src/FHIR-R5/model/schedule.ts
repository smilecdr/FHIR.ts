/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../models';
import { CodeableConcept } from './codeableConcept';
import { CodeableReference } from './codeableReference';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';

/**
 * A container for slots of time that may be available for booking appointments.
 */
export class Schedule extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'active',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'active', typeCode: 'boolean' }],
    },
    {
      elementName: 'serviceCategory',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'serviceCategory', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'serviceType',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'serviceType', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'specialty',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'specialty', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'actor',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'actor',
          typeCode: 'Reference',
          targetResourceTypes: [
            'CareTeam',
            'Device',
            'HealthcareService',
            'Location',
            'Patient',
            'Practitioner',
            'PractitionerRole',
            'RelatedPerson',
          ],
        },
      ],
    },
    {
      elementName: 'planningHorizon',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'planningHorizon', typeCode: 'Period' }],
    },
    {
      elementName: 'comment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'comment', typeCode: 'markdown' }],
    },
  ];

  readonly resourceType = 'Schedule';

  /** External Ids for this item (0..*) */
  identifier?: Identifier[];

  /** Whether this schedule is in active use (0..1) */
  active?: boolean;
  /** Id and extensions of the primitive `active`. */
  _active?: Element;

  /** High-level category (0..*) */
  serviceCategory?: CodeableConcept[];

  /** Specific service (0..*) */
  serviceType?: CodeableReference[];

  /** Type of specialty needed (0..*) */
  specialty?: CodeableConcept[];

  /** Human-readable label (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Resource(s) that availability information is being provided for (1..*) */
  actor?: Reference[];

  /** Period of time covered by schedule (0..1) */
  planningHorizon?: Period;

  /** Comments on availability (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;

  override fhirType(): string {
    return 'Schedule';
  }

  /** FHIR JSON for this Schedule, typed as the plain `Schedule` data type. */
  override toJSON(): plainTypes.Schedule {
    return this.serialize() as plainTypes.Schedule;
  }

  /** External Ids for this item (0..*) Never undefined; an empty list is created when absent. */
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

  /** Whether this schedule is in active use (0..1) */
  getActive(): boolean | undefined {
    return this.active;
  }

  /** Sets `active`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setActive(active: boolean | undefined): this {
    return this.setFieldValue('active', active);
  }

  hasActive(): boolean {
    return this.hasFieldValue('active');
  }

  /** The element carrying the id and extensions of `active`. Created when absent. */
  getActiveElement(): Element {
    if (this._active === undefined) {
      this._active = new Element();
    }
    return this._active;
  }

  setActiveElement(activeElement: Element | undefined): this {
    this._active = activeElement;
    return this;
  }

  /** High-level category (0..*) Never undefined; an empty list is created when absent. */
  getServiceCategory(): CodeableConcept[] {
    if (this.serviceCategory === undefined) {
      this.serviceCategory = [];
    }
    return this.serviceCategory;
  }

  setServiceCategory(serviceCategory: CodeableConcept[] | undefined): this {
    return this.setFieldValue('serviceCategory', serviceCategory);
  }

  hasServiceCategory(): boolean {
    return this.hasFieldValue('serviceCategory');
  }

  /** Appends a new, empty CodeableConcept to `serviceCategory` and returns it so it can be filled in. */
  addServiceCategory(): CodeableConcept;
  /** Appends the given CodeableConcept to `serviceCategory` and returns this object for chaining. */
  addServiceCategory(codeableConcept: CodeableConcept): this;
  addServiceCategory(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('serviceCategory', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('serviceCategory', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `serviceCategory`. One is added when the list is empty. */
  getServiceCategoryFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getServiceCategory()[0];
    return firstCodeableConcept === undefined ? this.addServiceCategory() : firstCodeableConcept;
  }

  /** Specific service (0..*) Never undefined; an empty list is created when absent. */
  getServiceType(): CodeableReference[] {
    if (this.serviceType === undefined) {
      this.serviceType = [];
    }
    return this.serviceType;
  }

  setServiceType(serviceType: CodeableReference[] | undefined): this {
    return this.setFieldValue('serviceType', serviceType);
  }

  hasServiceType(): boolean {
    return this.hasFieldValue('serviceType');
  }

  /** Appends a new, empty CodeableReference to `serviceType` and returns it so it can be filled in. */
  addServiceType(): CodeableReference;
  /** Appends the given CodeableReference to `serviceType` and returns this object for chaining. */
  addServiceType(codeableReference: CodeableReference): this;
  addServiceType(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('serviceType', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('serviceType', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `serviceType`. One is added when the list is empty. */
  getServiceTypeFirstRep(): CodeableReference {
    const firstCodeableReference = this.getServiceType()[0];
    return firstCodeableReference === undefined ? this.addServiceType() : firstCodeableReference;
  }

  /** Type of specialty needed (0..*) Never undefined; an empty list is created when absent. */
  getSpecialty(): CodeableConcept[] {
    if (this.specialty === undefined) {
      this.specialty = [];
    }
    return this.specialty;
  }

  setSpecialty(specialty: CodeableConcept[] | undefined): this {
    return this.setFieldValue('specialty', specialty);
  }

  hasSpecialty(): boolean {
    return this.hasFieldValue('specialty');
  }

  /** Appends a new, empty CodeableConcept to `specialty` and returns it so it can be filled in. */
  addSpecialty(): CodeableConcept;
  /** Appends the given CodeableConcept to `specialty` and returns this object for chaining. */
  addSpecialty(codeableConcept: CodeableConcept): this;
  addSpecialty(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('specialty', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('specialty', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `specialty`. One is added when the list is empty. */
  getSpecialtyFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getSpecialty()[0];
    return firstCodeableConcept === undefined ? this.addSpecialty() : firstCodeableConcept;
  }

  /** Human-readable label (0..1) */
  getName(): string | undefined {
    return this.name;
  }

  /** Sets `name`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setName(name: string | undefined): this {
    return this.setFieldValue('name', name);
  }

  hasName(): boolean {
    return this.hasFieldValue('name');
  }

  /** The element carrying the id and extensions of `name`. Created when absent. */
  getNameElement(): Element {
    if (this._name === undefined) {
      this._name = new Element();
    }
    return this._name;
  }

  setNameElement(nameElement: Element | undefined): this {
    this._name = nameElement;
    return this;
  }

  /** Resource(s) that availability information is being provided for (1..*) Never undefined; an empty list is created when absent. */
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

  /** Period of time covered by schedule (0..1) Created when absent. */
  getPlanningHorizon(): Period {
    if (this.planningHorizon === undefined) {
      this.planningHorizon = new Period();
    }
    return this.planningHorizon;
  }

  setPlanningHorizon(planningHorizon: Period | undefined): this {
    return this.setFieldValue('planningHorizon', planningHorizon);
  }

  hasPlanningHorizon(): boolean {
    return this.hasFieldValue('planningHorizon');
  }

  /** Comments on availability (0..1) */
  getComment(): string | undefined {
    return this.comment;
  }

  /** Sets `comment`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setComment(comment: string | undefined): this {
    return this.setFieldValue('comment', comment);
  }

  hasComment(): boolean {
    return this.hasFieldValue('comment');
  }

  /** The element carrying the id and extensions of `comment`. Created when absent. */
  getCommentElement(): Element {
    if (this._comment === undefined) {
      this._comment = new Element();
    }
    return this._comment;
  }

  setCommentElement(commentElement: Element | undefined): this {
    this._comment = commentElement;
    return this;
  }
}

modelTypeRegistry.register('Schedule', Schedule, true);

/** True when the value is a Schedule model instance. */
export function isSchedule(candidate: unknown): candidate is Schedule {
  return candidate instanceof Schedule;
}
