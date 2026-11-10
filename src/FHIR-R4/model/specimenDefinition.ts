/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Duration } from './duration';
import { Element } from './element';
import { Identifier } from './identifier';
import { Quantity } from './quantity';
import { Range } from './range';
import { Reference } from './reference';

/**
 * A kind of specimen with associated set of requirements.
 */
export class SpecimenDefinition extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'typeCollected',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'typeCollected', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'patientPreparation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'patientPreparation', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'timeAspect',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'timeAspect', typeCode: 'string' }],
    },
    {
      elementName: 'collection',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'collection', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'typeTested',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'typeTested', typeCode: 'SpecimenDefinitionTypeTested' }],
    },
  ];

  readonly resourceType = 'SpecimenDefinition';

  /** Business identifier of a kind of specimen (0..1) */
  identifier?: Identifier;

  /** Kind of material to collect (0..1) */
  typeCollected?: CodeableConcept;

  /** Patient preparation for collection (0..*) */
  patientPreparation?: CodeableConcept[];

  /** Time aspect for collection (0..1) */
  timeAspect?: string;
  /** Id and extensions of the primitive `timeAspect`. */
  _timeAspect?: Element;

  /** Specimen collection procedure (0..*) */
  collection?: CodeableConcept[];

  /** Specimen in container intended for testing by lab (0..*) */
  typeTested?: SpecimenDefinitionTypeTested[];

  override fhirType(): string {
    return 'SpecimenDefinition';
  }

  /** FHIR JSON for this SpecimenDefinition, typed as the plain `SpecimenDefinition` data type. */
  override toJSON(): plainTypes.SpecimenDefinition {
    return this.serialize() as plainTypes.SpecimenDefinition;
  }

  /** Business identifier of a kind of specimen (0..1) Created when absent. */
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

  /** Kind of material to collect (0..1) Created when absent. */
  getTypeCollected(): CodeableConcept {
    if (this.typeCollected === undefined) {
      this.typeCollected = new CodeableConcept();
    }
    return this.typeCollected;
  }

  setTypeCollected(typeCollected: CodeableConcept | undefined): this {
    return this.setFieldValue('typeCollected', typeCollected);
  }

  hasTypeCollected(): boolean {
    return this.hasFieldValue('typeCollected');
  }

  /** Patient preparation for collection (0..*) Never undefined; an empty list is created when absent. */
  getPatientPreparation(): CodeableConcept[] {
    if (this.patientPreparation === undefined) {
      this.patientPreparation = [];
    }
    return this.patientPreparation;
  }

  setPatientPreparation(patientPreparation: CodeableConcept[] | undefined): this {
    return this.setFieldValue('patientPreparation', patientPreparation);
  }

  hasPatientPreparation(): boolean {
    return this.hasFieldValue('patientPreparation');
  }

  /** Appends a new, empty CodeableConcept to `patientPreparation` and returns it so it can be filled in. */
  addPatientPreparation(): CodeableConcept;
  /** Appends the given CodeableConcept to `patientPreparation` and returns this object for chaining. */
  addPatientPreparation(codeableConcept: CodeableConcept): this;
  addPatientPreparation(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('patientPreparation', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('patientPreparation', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `patientPreparation`. One is added when the list is empty. */
  getPatientPreparationFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getPatientPreparation()[0];
    return firstCodeableConcept === undefined ? this.addPatientPreparation() : firstCodeableConcept;
  }

  /** Time aspect for collection (0..1) */
  getTimeAspect(): string | undefined {
    return this.timeAspect;
  }

  /** Sets `timeAspect`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setTimeAspect(timeAspect: string | undefined): this {
    return this.setFieldValue('timeAspect', timeAspect);
  }

  hasTimeAspect(): boolean {
    return this.hasFieldValue('timeAspect');
  }

  /** The element carrying the id and extensions of `timeAspect`. Created when absent. */
  getTimeAspectElement(): Element {
    if (this._timeAspect === undefined) {
      this._timeAspect = new Element();
    }
    return this._timeAspect;
  }

  setTimeAspectElement(timeAspectElement: Element | undefined): this {
    this._timeAspect = timeAspectElement;
    return this;
  }

  /** Specimen collection procedure (0..*) Never undefined; an empty list is created when absent. */
  getCollection(): CodeableConcept[] {
    if (this.collection === undefined) {
      this.collection = [];
    }
    return this.collection;
  }

  setCollection(collection: CodeableConcept[] | undefined): this {
    return this.setFieldValue('collection', collection);
  }

  hasCollection(): boolean {
    return this.hasFieldValue('collection');
  }

  /** Appends a new, empty CodeableConcept to `collection` and returns it so it can be filled in. */
  addCollection(): CodeableConcept;
  /** Appends the given CodeableConcept to `collection` and returns this object for chaining. */
  addCollection(codeableConcept: CodeableConcept): this;
  addCollection(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('collection', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('collection', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `collection`. One is added when the list is empty. */
  getCollectionFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getCollection()[0];
    return firstCodeableConcept === undefined ? this.addCollection() : firstCodeableConcept;
  }

  /** Specimen in container intended for testing by lab (0..*) Never undefined; an empty list is created when absent. */
  getTypeTested(): SpecimenDefinitionTypeTested[] {
    if (this.typeTested === undefined) {
      this.typeTested = [];
    }
    return this.typeTested;
  }

  setTypeTested(typeTested: SpecimenDefinitionTypeTested[] | undefined): this {
    return this.setFieldValue('typeTested', typeTested);
  }

  hasTypeTested(): boolean {
    return this.hasFieldValue('typeTested');
  }

  /** Appends a new, empty SpecimenDefinitionTypeTested to `typeTested` and returns it so it can be filled in. */
  addTypeTested(): SpecimenDefinitionTypeTested;
  /** Appends the given SpecimenDefinitionTypeTested to `typeTested` and returns this object for chaining. */
  addTypeTested(specimenDefinitionTypeTested: SpecimenDefinitionTypeTested): this;
  addTypeTested(
    specimenDefinitionTypeTested?: SpecimenDefinitionTypeTested
  ): SpecimenDefinitionTypeTested | this {
    if (specimenDefinitionTypeTested !== undefined) {
      return this.addFieldValue('typeTested', specimenDefinitionTypeTested);
    }
    const createdSpecimenDefinitionTypeTested = new SpecimenDefinitionTypeTested();
    this.addFieldValue('typeTested', createdSpecimenDefinitionTypeTested);
    return createdSpecimenDefinitionTypeTested;
  }

  /** The first SpecimenDefinitionTypeTested of `typeTested`. One is added when the list is empty. */
  getTypeTestedFirstRep(): SpecimenDefinitionTypeTested {
    const firstSpecimenDefinitionTypeTested = this.getTypeTested()[0];
    return firstSpecimenDefinitionTypeTested === undefined
      ? this.addTypeTested()
      : firstSpecimenDefinitionTypeTested;
  }
}

modelTypeRegistry.register('SpecimenDefinition', SpecimenDefinition, true);

/** True when the value is a SpecimenDefinition model instance. */
export function isSpecimenDefinition(candidate: unknown): candidate is SpecimenDefinition {
  return candidate instanceof SpecimenDefinition;
}

/**
 * Specimen in container intended for testing by lab
 */
export class SpecimenDefinitionTypeTested extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'isDerived',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'isDerived', typeCode: 'boolean' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'preference',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'preference',
          typeCode: 'code',
          allowedCodes: valueSetCodes.SpecimenContainedPreference,
        },
      ],
    },
    {
      elementName: 'container',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'container', typeCode: 'SpecimenDefinitionTypeTestedContainer' }],
    },
    {
      elementName: 'requirement',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'requirement', typeCode: 'string' }],
    },
    {
      elementName: 'retentionTime',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'retentionTime', typeCode: 'Duration' }],
    },
    {
      elementName: 'rejectionCriterion',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'rejectionCriterion', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'handling',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'handling', typeCode: 'SpecimenDefinitionTypeTestedHandling' }],
    },
  ];

  /** Primary or secondary specimen (0..1) */
  isDerived?: boolean;
  /** Id and extensions of the primitive `isDerived`. */
  _isDerived?: Element;

  /** Type of intended specimen (0..1) */
  type?: CodeableConcept;

  /** preferred | alternate (1..1) */
  preference?: valueSetCodes.SpecimenContainedPreference;
  /** Id and extensions of the primitive `preference`. */
  _preference?: Element;

  /** The specimen's container (0..1) */
  container?: SpecimenDefinitionTypeTestedContainer;

  /** Specimen requirements (0..1) */
  requirement?: string;
  /** Id and extensions of the primitive `requirement`. */
  _requirement?: Element;

  /** Specimen retention time (0..1) */
  retentionTime?: Duration;

  /** Rejection criterion (0..*) */
  rejectionCriterion?: CodeableConcept[];

  /** Specimen handling before testing (0..*) */
  handling?: SpecimenDefinitionTypeTestedHandling[];

  override fhirType(): string {
    return 'SpecimenDefinition.typeTested';
  }

  /** FHIR JSON for this SpecimenDefinitionTypeTested, typed as the plain `SpecimenDefinitionTypeTested` data type. */
  override toJSON(): plainTypes.SpecimenDefinitionTypeTested {
    return this.serialize() as plainTypes.SpecimenDefinitionTypeTested;
  }

  /** Primary or secondary specimen (0..1) */
  getIsDerived(): boolean | undefined {
    return this.isDerived;
  }

  /** Sets `isDerived`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setIsDerived(isDerived: boolean | undefined): this {
    return this.setFieldValue('isDerived', isDerived);
  }

  hasIsDerived(): boolean {
    return this.hasFieldValue('isDerived');
  }

  /** The element carrying the id and extensions of `isDerived`. Created when absent. */
  getIsDerivedElement(): Element {
    if (this._isDerived === undefined) {
      this._isDerived = new Element();
    }
    return this._isDerived;
  }

  setIsDerivedElement(isDerivedElement: Element | undefined): this {
    this._isDerived = isDerivedElement;
    return this;
  }

  /** Type of intended specimen (0..1) Created when absent. */
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

  /** preferred | alternate (1..1) */
  getPreference(): valueSetCodes.SpecimenContainedPreference | undefined {
    return this.preference;
  }

  /** Sets `preference`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setPreference(preference: valueSetCodes.SpecimenContainedPreference | undefined): this {
    return this.setFieldValue('preference', preference);
  }

  hasPreference(): boolean {
    return this.hasFieldValue('preference');
  }

  /** The element carrying the id and extensions of `preference`. Created when absent. */
  getPreferenceElement(): Element {
    if (this._preference === undefined) {
      this._preference = new Element();
    }
    return this._preference;
  }

  setPreferenceElement(preferenceElement: Element | undefined): this {
    this._preference = preferenceElement;
    return this;
  }

  /** The specimen's container (0..1) Created when absent. */
  getContainer(): SpecimenDefinitionTypeTestedContainer {
    if (this.container === undefined) {
      this.container = new SpecimenDefinitionTypeTestedContainer();
    }
    return this.container;
  }

  setContainer(container: SpecimenDefinitionTypeTestedContainer | undefined): this {
    return this.setFieldValue('container', container);
  }

  hasContainer(): boolean {
    return this.hasFieldValue('container');
  }

  /** Specimen requirements (0..1) */
  getRequirement(): string | undefined {
    return this.requirement;
  }

  /** Sets `requirement`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setRequirement(requirement: string | undefined): this {
    return this.setFieldValue('requirement', requirement);
  }

  hasRequirement(): boolean {
    return this.hasFieldValue('requirement');
  }

  /** The element carrying the id and extensions of `requirement`. Created when absent. */
  getRequirementElement(): Element {
    if (this._requirement === undefined) {
      this._requirement = new Element();
    }
    return this._requirement;
  }

  setRequirementElement(requirementElement: Element | undefined): this {
    this._requirement = requirementElement;
    return this;
  }

  /** Specimen retention time (0..1) Created when absent. */
  getRetentionTime(): Duration {
    if (this.retentionTime === undefined) {
      this.retentionTime = new Duration();
    }
    return this.retentionTime;
  }

  setRetentionTime(retentionTime: Duration | undefined): this {
    return this.setFieldValue('retentionTime', retentionTime);
  }

  hasRetentionTime(): boolean {
    return this.hasFieldValue('retentionTime');
  }

  /** Rejection criterion (0..*) Never undefined; an empty list is created when absent. */
  getRejectionCriterion(): CodeableConcept[] {
    if (this.rejectionCriterion === undefined) {
      this.rejectionCriterion = [];
    }
    return this.rejectionCriterion;
  }

  setRejectionCriterion(rejectionCriterion: CodeableConcept[] | undefined): this {
    return this.setFieldValue('rejectionCriterion', rejectionCriterion);
  }

  hasRejectionCriterion(): boolean {
    return this.hasFieldValue('rejectionCriterion');
  }

  /** Appends a new, empty CodeableConcept to `rejectionCriterion` and returns it so it can be filled in. */
  addRejectionCriterion(): CodeableConcept;
  /** Appends the given CodeableConcept to `rejectionCriterion` and returns this object for chaining. */
  addRejectionCriterion(codeableConcept: CodeableConcept): this;
  addRejectionCriterion(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('rejectionCriterion', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('rejectionCriterion', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `rejectionCriterion`. One is added when the list is empty. */
  getRejectionCriterionFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getRejectionCriterion()[0];
    return firstCodeableConcept === undefined ? this.addRejectionCriterion() : firstCodeableConcept;
  }

  /** Specimen handling before testing (0..*) Never undefined; an empty list is created when absent. */
  getHandling(): SpecimenDefinitionTypeTestedHandling[] {
    if (this.handling === undefined) {
      this.handling = [];
    }
    return this.handling;
  }

  setHandling(handling: SpecimenDefinitionTypeTestedHandling[] | undefined): this {
    return this.setFieldValue('handling', handling);
  }

  hasHandling(): boolean {
    return this.hasFieldValue('handling');
  }

  /** Appends a new, empty SpecimenDefinitionTypeTestedHandling to `handling` and returns it so it can be filled in. */
  addHandling(): SpecimenDefinitionTypeTestedHandling;
  /** Appends the given SpecimenDefinitionTypeTestedHandling to `handling` and returns this object for chaining. */
  addHandling(specimenDefinitionTypeTestedHandling: SpecimenDefinitionTypeTestedHandling): this;
  addHandling(
    specimenDefinitionTypeTestedHandling?: SpecimenDefinitionTypeTestedHandling
  ): SpecimenDefinitionTypeTestedHandling | this {
    if (specimenDefinitionTypeTestedHandling !== undefined) {
      return this.addFieldValue('handling', specimenDefinitionTypeTestedHandling);
    }
    const createdSpecimenDefinitionTypeTestedHandling = new SpecimenDefinitionTypeTestedHandling();
    this.addFieldValue('handling', createdSpecimenDefinitionTypeTestedHandling);
    return createdSpecimenDefinitionTypeTestedHandling;
  }

  /** The first SpecimenDefinitionTypeTestedHandling of `handling`. One is added when the list is empty. */
  getHandlingFirstRep(): SpecimenDefinitionTypeTestedHandling {
    const firstSpecimenDefinitionTypeTestedHandling = this.getHandling()[0];
    return firstSpecimenDefinitionTypeTestedHandling === undefined
      ? this.addHandling()
      : firstSpecimenDefinitionTypeTestedHandling;
  }
}

modelTypeRegistry.register('SpecimenDefinitionTypeTested', SpecimenDefinitionTypeTested, false);

/**
 * The specimen's container
 */
export class SpecimenDefinitionTypeTestedContainer extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'material',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'material', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'cap',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'cap', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'capacity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'capacity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'minimumVolume',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'minimumVolumeQuantity', typeCode: 'Quantity' },
        { jsonKey: 'minimumVolumeString', typeCode: 'string' },
      ],
    },
    {
      elementName: 'additive',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'additive', typeCode: 'SpecimenDefinitionTypeTestedContainerAdditive' }],
    },
    {
      elementName: 'preparation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'preparation', typeCode: 'string' }],
    },
  ];

  /** Container material (0..1) */
  material?: CodeableConcept;

  /** Kind of container associated with the kind of specimen (0..1) */
  type?: CodeableConcept;

  /** Color of container cap (0..1) */
  cap?: CodeableConcept;

  /** Container description (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Container capacity (0..1) */
  capacity?: Quantity;

  /** Minimum volume (0..1) */
  minimumVolumeQuantity?: Quantity;
  /** Minimum volume (0..1) */
  minimumVolumeString?: string;
  /** Id and extensions of the primitive `minimumVolumeString`. */
  _minimumVolumeString?: Element;

  /** Additive associated with container (0..*) */
  additive?: SpecimenDefinitionTypeTestedContainerAdditive[];

  /** Specimen container preparation (0..1) */
  preparation?: string;
  /** Id and extensions of the primitive `preparation`. */
  _preparation?: Element;

  override fhirType(): string {
    return 'SpecimenDefinition.typeTested.container';
  }

  /** FHIR JSON for this SpecimenDefinitionTypeTestedContainer, typed as the plain `SpecimenDefinitionContainer` data type. */
  override toJSON(): plainTypes.SpecimenDefinitionContainer {
    return this.serialize() as plainTypes.SpecimenDefinitionContainer;
  }

  /** Container material (0..1) Created when absent. */
  getMaterial(): CodeableConcept {
    if (this.material === undefined) {
      this.material = new CodeableConcept();
    }
    return this.material;
  }

  setMaterial(material: CodeableConcept | undefined): this {
    return this.setFieldValue('material', material);
  }

  hasMaterial(): boolean {
    return this.hasFieldValue('material');
  }

  /** Kind of container associated with the kind of specimen (0..1) Created when absent. */
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

  /** Color of container cap (0..1) Created when absent. */
  getCap(): CodeableConcept {
    if (this.cap === undefined) {
      this.cap = new CodeableConcept();
    }
    return this.cap;
  }

  setCap(cap: CodeableConcept | undefined): this {
    return this.setFieldValue('cap', cap);
  }

  hasCap(): boolean {
    return this.hasFieldValue('cap');
  }

  /** Container description (0..1) */
  getDescription(): string | undefined {
    return this.description;
  }

  /** Sets `description`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDescription(description: string | undefined): this {
    return this.setFieldValue('description', description);
  }

  hasDescription(): boolean {
    return this.hasFieldValue('description');
  }

  /** The element carrying the id and extensions of `description`. Created when absent. */
  getDescriptionElement(): Element {
    if (this._description === undefined) {
      this._description = new Element();
    }
    return this._description;
  }

  setDescriptionElement(descriptionElement: Element | undefined): this {
    this._description = descriptionElement;
    return this;
  }

  /** Container capacity (0..1) Created when absent. */
  getCapacity(): Quantity {
    if (this.capacity === undefined) {
      this.capacity = new Quantity();
    }
    return this.capacity;
  }

  setCapacity(capacity: Quantity | undefined): this {
    return this.setFieldValue('capacity', capacity);
  }

  hasCapacity(): boolean {
    return this.hasFieldValue('capacity');
  }

  /** Minimum volume (0..1) Whichever type of `minimumVolume[x]` is set. */
  getMinimumVolume(): Quantity | string | undefined {
    return this.getChoiceValue<Quantity | string>('minimumVolume');
  }

  /** True when any type of `minimumVolume[x]` is set. */
  hasMinimumVolume(): boolean {
    return this.hasChoiceValue('minimumVolume');
  }

  getMinimumVolumeQuantity(): Quantity | undefined {
    return this.minimumVolumeQuantity;
  }

  /** Sets `minimumVolume[x]` as Quantity and clears every other type of it. */
  setMinimumVolumeQuantity(minimumVolumeQuantity: Quantity | undefined): this {
    return this.setFieldValue('minimumVolumeQuantity', minimumVolumeQuantity);
  }

  hasMinimumVolumeQuantity(): boolean {
    return this.hasFieldValue('minimumVolumeQuantity');
  }

  getMinimumVolumeString(): string | undefined {
    return this.minimumVolumeString;
  }

  /** Sets `minimumVolume[x]` as string and clears every other type of it. */
  setMinimumVolumeString(minimumVolumeString: string | undefined): this {
    return this.setFieldValue('minimumVolumeString', minimumVolumeString);
  }

  hasMinimumVolumeString(): boolean {
    return this.hasFieldValue('minimumVolumeString');
  }

  /** Additive associated with container (0..*) Never undefined; an empty list is created when absent. */
  getAdditive(): SpecimenDefinitionTypeTestedContainerAdditive[] {
    if (this.additive === undefined) {
      this.additive = [];
    }
    return this.additive;
  }

  setAdditive(additive: SpecimenDefinitionTypeTestedContainerAdditive[] | undefined): this {
    return this.setFieldValue('additive', additive);
  }

  hasAdditive(): boolean {
    return this.hasFieldValue('additive');
  }

  /** Appends a new, empty SpecimenDefinitionTypeTestedContainerAdditive to `additive` and returns it so it can be filled in. */
  addAdditive(): SpecimenDefinitionTypeTestedContainerAdditive;
  /** Appends the given SpecimenDefinitionTypeTestedContainerAdditive to `additive` and returns this object for chaining. */
  addAdditive(
    specimenDefinitionTypeTestedContainerAdditive: SpecimenDefinitionTypeTestedContainerAdditive
  ): this;
  addAdditive(
    specimenDefinitionTypeTestedContainerAdditive?: SpecimenDefinitionTypeTestedContainerAdditive
  ): SpecimenDefinitionTypeTestedContainerAdditive | this {
    if (specimenDefinitionTypeTestedContainerAdditive !== undefined) {
      return this.addFieldValue('additive', specimenDefinitionTypeTestedContainerAdditive);
    }
    const createdSpecimenDefinitionTypeTestedContainerAdditive =
      new SpecimenDefinitionTypeTestedContainerAdditive();
    this.addFieldValue('additive', createdSpecimenDefinitionTypeTestedContainerAdditive);
    return createdSpecimenDefinitionTypeTestedContainerAdditive;
  }

  /** The first SpecimenDefinitionTypeTestedContainerAdditive of `additive`. One is added when the list is empty. */
  getAdditiveFirstRep(): SpecimenDefinitionTypeTestedContainerAdditive {
    const firstSpecimenDefinitionTypeTestedContainerAdditive = this.getAdditive()[0];
    return firstSpecimenDefinitionTypeTestedContainerAdditive === undefined
      ? this.addAdditive()
      : firstSpecimenDefinitionTypeTestedContainerAdditive;
  }

  /** Specimen container preparation (0..1) */
  getPreparation(): string | undefined {
    return this.preparation;
  }

  /** Sets `preparation`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPreparation(preparation: string | undefined): this {
    return this.setFieldValue('preparation', preparation);
  }

  hasPreparation(): boolean {
    return this.hasFieldValue('preparation');
  }

  /** The element carrying the id and extensions of `preparation`. Created when absent. */
  getPreparationElement(): Element {
    if (this._preparation === undefined) {
      this._preparation = new Element();
    }
    return this._preparation;
  }

  setPreparationElement(preparationElement: Element | undefined): this {
    this._preparation = preparationElement;
    return this;
  }
}

modelTypeRegistry.register(
  'SpecimenDefinitionTypeTestedContainer',
  SpecimenDefinitionTypeTestedContainer,
  false
);

/**
 * Additive associated with container
 */
export class SpecimenDefinitionTypeTestedContainerAdditive extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'additive',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'additiveCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'additiveReference', typeCode: 'Reference', targetResourceTypes: ['Substance'] },
      ],
    },
  ];

  /** Additive associated with container (1..1) */
  additiveCodeableConcept?: CodeableConcept;
  /** Additive associated with container (1..1) */
  additiveReference?: Reference;

  override fhirType(): string {
    return 'SpecimenDefinition.typeTested.container.additive';
  }

  /** FHIR JSON for this SpecimenDefinitionTypeTestedContainerAdditive, typed as the plain `SpecimenDefinitionAdditive` data type. */
  override toJSON(): plainTypes.SpecimenDefinitionAdditive {
    return this.serialize() as plainTypes.SpecimenDefinitionAdditive;
  }

  /** Additive associated with container (1..1) Whichever type of `additive[x]` is set. */
  getAdditive(): CodeableConcept | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | Reference>('additive');
  }

  /** True when any type of `additive[x]` is set. */
  hasAdditive(): boolean {
    return this.hasChoiceValue('additive');
  }

  getAdditiveCodeableConcept(): CodeableConcept | undefined {
    return this.additiveCodeableConcept;
  }

  /** Sets `additive[x]` as CodeableConcept and clears every other type of it. */
  setAdditiveCodeableConcept(additiveCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('additiveCodeableConcept', additiveCodeableConcept);
  }

  hasAdditiveCodeableConcept(): boolean {
    return this.hasFieldValue('additiveCodeableConcept');
  }

  getAdditiveReference(): Reference | undefined {
    return this.additiveReference;
  }

  /** Sets `additive[x]` as Reference and clears every other type of it. */
  setAdditiveReference(additiveReference: Reference | undefined): this {
    return this.setFieldValue('additiveReference', additiveReference);
  }

  hasAdditiveReference(): boolean {
    return this.hasFieldValue('additiveReference');
  }
}

modelTypeRegistry.register(
  'SpecimenDefinitionTypeTestedContainerAdditive',
  SpecimenDefinitionTypeTestedContainerAdditive,
  false
);

/**
 * Specimen handling before testing
 */
export class SpecimenDefinitionTypeTestedHandling extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'temperatureQualifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'temperatureQualifier', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'temperatureRange',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'temperatureRange', typeCode: 'Range' }],
    },
    {
      elementName: 'maxDuration',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'maxDuration', typeCode: 'Duration' }],
    },
    {
      elementName: 'instruction',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'instruction', typeCode: 'string' }],
    },
  ];

  /** Temperature qualifier (0..1) */
  temperatureQualifier?: CodeableConcept;

  /** Temperature range (0..1) */
  temperatureRange?: Range;

  /** Maximum preservation time (0..1) */
  maxDuration?: Duration;

  /** Preservation instruction (0..1) */
  instruction?: string;
  /** Id and extensions of the primitive `instruction`. */
  _instruction?: Element;

  override fhirType(): string {
    return 'SpecimenDefinition.typeTested.handling';
  }

  /** FHIR JSON for this SpecimenDefinitionTypeTestedHandling, typed as the plain `SpecimenDefinitionHandling` data type. */
  override toJSON(): plainTypes.SpecimenDefinitionHandling {
    return this.serialize() as plainTypes.SpecimenDefinitionHandling;
  }

  /** Temperature qualifier (0..1) Created when absent. */
  getTemperatureQualifier(): CodeableConcept {
    if (this.temperatureQualifier === undefined) {
      this.temperatureQualifier = new CodeableConcept();
    }
    return this.temperatureQualifier;
  }

  setTemperatureQualifier(temperatureQualifier: CodeableConcept | undefined): this {
    return this.setFieldValue('temperatureQualifier', temperatureQualifier);
  }

  hasTemperatureQualifier(): boolean {
    return this.hasFieldValue('temperatureQualifier');
  }

  /** Temperature range (0..1) Created when absent. */
  getTemperatureRange(): Range {
    if (this.temperatureRange === undefined) {
      this.temperatureRange = new Range();
    }
    return this.temperatureRange;
  }

  setTemperatureRange(temperatureRange: Range | undefined): this {
    return this.setFieldValue('temperatureRange', temperatureRange);
  }

  hasTemperatureRange(): boolean {
    return this.hasFieldValue('temperatureRange');
  }

  /** Maximum preservation time (0..1) Created when absent. */
  getMaxDuration(): Duration {
    if (this.maxDuration === undefined) {
      this.maxDuration = new Duration();
    }
    return this.maxDuration;
  }

  setMaxDuration(maxDuration: Duration | undefined): this {
    return this.setFieldValue('maxDuration', maxDuration);
  }

  hasMaxDuration(): boolean {
    return this.hasFieldValue('maxDuration');
  }

  /** Preservation instruction (0..1) */
  getInstruction(): string | undefined {
    return this.instruction;
  }

  /** Sets `instruction`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setInstruction(instruction: string | undefined): this {
    return this.setFieldValue('instruction', instruction);
  }

  hasInstruction(): boolean {
    return this.hasFieldValue('instruction');
  }

  /** The element carrying the id and extensions of `instruction`. Created when absent. */
  getInstructionElement(): Element {
    if (this._instruction === undefined) {
      this._instruction = new Element();
    }
    return this._instruction;
  }

  setInstructionElement(instructionElement: Element | undefined): this {
    this._instruction = instructionElement;
    return this;
  }
}

modelTypeRegistry.register(
  'SpecimenDefinitionTypeTestedHandling',
  SpecimenDefinitionTypeTestedHandling,
  false
);
