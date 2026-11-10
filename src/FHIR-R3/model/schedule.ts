/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../classes/models-r3';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';

/**
 * Base StructureDefinition for Schedule Resource
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
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'serviceCategory', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'serviceType',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'serviceType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'specialty',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'specialty', typeCode: 'CodeableConcept' }],
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
      types: [{ jsonKey: 'comment', typeCode: 'string' }],
    },
  ];

  readonly resourceType = 'Schedule';

  /** External Ids for this item (0..*) */
  identifier?: Identifier[];

  /** Whether this schedule is in active use (0..1) */
  active?: boolean;
  /** Id and extensions of the primitive `active`. */
  _active?: Element;

  /** A broad categorisation of the service that is to be performed during this appointment (0..1) */
  serviceCategory?: CodeableConcept;

  /** The specific service that is to be performed during this appointment (0..*) */
  serviceType?: CodeableConcept[];

  /** The specialty of a practitioner that would be required to perform the service requested in this appointment (0..*) */
  specialty?: CodeableConcept[];

  /** The resource this Schedule resource is providing availability information for. These are expected to usually be one of HealthcareService, Location, Practitioner, PractitionerRole, Device, Patient or RelatedPerson (1..*) */
  actor?: Reference[];

  /** The period of time that the slots that are attached to this Schedule resource cover (even if none exist). These cover the amount of time that an organization's planning horizon; the interval for which they are currently accepting appointments. This does not define a "template" for planning outside these dates (0..1) */
  planningHorizon?: Period;

  /** Comments on the availability to describe any extended information. Such as custom constraints on the slots that may be associated (0..1) */
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

  /** A broad categorisation of the service that is to be performed during this appointment (0..1) Created when absent. */
  getServiceCategory(): CodeableConcept {
    if (this.serviceCategory === undefined) {
      this.serviceCategory = new CodeableConcept();
    }
    return this.serviceCategory;
  }

  setServiceCategory(serviceCategory: CodeableConcept | undefined): this {
    return this.setFieldValue('serviceCategory', serviceCategory);
  }

  hasServiceCategory(): boolean {
    return this.hasFieldValue('serviceCategory');
  }

  /** The specific service that is to be performed during this appointment (0..*) Never undefined; an empty list is created when absent. */
  getServiceType(): CodeableConcept[] {
    if (this.serviceType === undefined) {
      this.serviceType = [];
    }
    return this.serviceType;
  }

  setServiceType(serviceType: CodeableConcept[] | undefined): this {
    return this.setFieldValue('serviceType', serviceType);
  }

  hasServiceType(): boolean {
    return this.hasFieldValue('serviceType');
  }

  /** Appends a new, empty CodeableConcept to `serviceType` and returns it so it can be filled in. */
  addServiceType(): CodeableConcept;
  /** Appends the given CodeableConcept to `serviceType` and returns this object for chaining. */
  addServiceType(codeableConcept: CodeableConcept): this;
  addServiceType(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('serviceType', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('serviceType', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `serviceType`. One is added when the list is empty. */
  getServiceTypeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getServiceType()[0];
    return firstCodeableConcept === undefined ? this.addServiceType() : firstCodeableConcept;
  }

  /** The specialty of a practitioner that would be required to perform the service requested in this appointment (0..*) Never undefined; an empty list is created when absent. */
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

  /** The resource this Schedule resource is providing availability information for. These are expected to usually be one of HealthcareService, Location, Practitioner, PractitionerRole, Device, Patient or RelatedPerson (1..*) Never undefined; an empty list is created when absent. */
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

  /** The period of time that the slots that are attached to this Schedule resource cover (even if none exist). These cover the amount of time that an organization's planning horizon; the interval for which they are currently accepting appointments. This does not define a "template" for planning outside these dates (0..1) Created when absent. */
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

  /** Comments on the availability to describe any extended information. Such as custom constraints on the slots that may be associated (0..1) */
  getComment(): string | undefined {
    return this.comment;
  }

  /** Sets `comment`. Throws a FhirModelError when the value is not a valid FHIR string. */
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
