/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../classes/models-r4';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Reference } from './reference';

/**
 * The interactions of the medicinal product with other medicinal products, or other forms of interactions.
 */
export class MedicinalProductInteraction extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'subject',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'subject',
          typeCode: 'Reference',
          targetResourceTypes: ['Medication', 'MedicinalProduct', 'Substance'],
        },
      ],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'interactant',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'interactant', typeCode: 'MedicinalProductInteractionInteractant' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'effect',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'effect', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'incidence',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'incidence', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'management',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'management', typeCode: 'CodeableConcept' }],
    },
  ];

  readonly resourceType = 'MedicinalProductInteraction';

  /** The medication for which this is a described interaction (0..*) */
  subject?: Reference[];

  /** The interaction described (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** The specific medication, food or laboratory test that interacts (0..*) */
  interactant?: MedicinalProductInteractionInteractant[];

  /** The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction (0..1) */
  type?: CodeableConcept;

  /** The effect of the interaction, for example "reduced gastric absorption of primary medication" (0..1) */
  effect?: CodeableConcept;

  /** The incidence of the interaction, e.g. theoretical, observed (0..1) */
  incidence?: CodeableConcept;

  /** Actions for managing the interaction (0..1) */
  management?: CodeableConcept;

  override fhirType(): string {
    return 'MedicinalProductInteraction';
  }

  /** FHIR JSON for this MedicinalProductInteraction, typed as the plain `MedicinalProductInteraction` data type. */
  override toJSON(): plainTypes.MedicinalProductInteraction {
    return this.serialize() as plainTypes.MedicinalProductInteraction;
  }

  /** The medication for which this is a described interaction (0..*) Never undefined; an empty list is created when absent. */
  getSubject(): Reference[] {
    if (this.subject === undefined) {
      this.subject = [];
    }
    return this.subject;
  }

  setSubject(subject: Reference[] | undefined): this {
    return this.setFieldValue('subject', subject);
  }

  hasSubject(): boolean {
    return this.hasFieldValue('subject');
  }

  /** Appends a new, empty Reference to `subject` and returns it so it can be filled in. */
  addSubject(): Reference;
  /** Appends the given Reference to `subject` and returns this object for chaining. */
  addSubject(reference: Reference): this;
  addSubject(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('subject', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('subject', createdReference);
    return createdReference;
  }

  /** The first Reference of `subject`. One is added when the list is empty. */
  getSubjectFirstRep(): Reference {
    const firstReference = this.getSubject()[0];
    return firstReference === undefined ? this.addSubject() : firstReference;
  }

  /** The interaction described (0..1) */
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

  /** The specific medication, food or laboratory test that interacts (0..*) Never undefined; an empty list is created when absent. */
  getInteractant(): MedicinalProductInteractionInteractant[] {
    if (this.interactant === undefined) {
      this.interactant = [];
    }
    return this.interactant;
  }

  setInteractant(interactant: MedicinalProductInteractionInteractant[] | undefined): this {
    return this.setFieldValue('interactant', interactant);
  }

  hasInteractant(): boolean {
    return this.hasFieldValue('interactant');
  }

  /** Appends a new, empty MedicinalProductInteractionInteractant to `interactant` and returns it so it can be filled in. */
  addInteractant(): MedicinalProductInteractionInteractant;
  /** Appends the given MedicinalProductInteractionInteractant to `interactant` and returns this object for chaining. */
  addInteractant(
    medicinalProductInteractionInteractant: MedicinalProductInteractionInteractant
  ): this;
  addInteractant(
    medicinalProductInteractionInteractant?: MedicinalProductInteractionInteractant
  ): MedicinalProductInteractionInteractant | this {
    if (medicinalProductInteractionInteractant !== undefined) {
      return this.addFieldValue('interactant', medicinalProductInteractionInteractant);
    }
    const createdMedicinalProductInteractionInteractant =
      new MedicinalProductInteractionInteractant();
    this.addFieldValue('interactant', createdMedicinalProductInteractionInteractant);
    return createdMedicinalProductInteractionInteractant;
  }

  /** The first MedicinalProductInteractionInteractant of `interactant`. One is added when the list is empty. */
  getInteractantFirstRep(): MedicinalProductInteractionInteractant {
    const firstMedicinalProductInteractionInteractant = this.getInteractant()[0];
    return firstMedicinalProductInteractionInteractant === undefined
      ? this.addInteractant()
      : firstMedicinalProductInteractionInteractant;
  }

  /** The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction (0..1) Created when absent. */
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

  /** The effect of the interaction, for example "reduced gastric absorption of primary medication" (0..1) Created when absent. */
  getEffect(): CodeableConcept {
    if (this.effect === undefined) {
      this.effect = new CodeableConcept();
    }
    return this.effect;
  }

  setEffect(effect: CodeableConcept | undefined): this {
    return this.setFieldValue('effect', effect);
  }

  hasEffect(): boolean {
    return this.hasFieldValue('effect');
  }

  /** The incidence of the interaction, e.g. theoretical, observed (0..1) Created when absent. */
  getIncidence(): CodeableConcept {
    if (this.incidence === undefined) {
      this.incidence = new CodeableConcept();
    }
    return this.incidence;
  }

  setIncidence(incidence: CodeableConcept | undefined): this {
    return this.setFieldValue('incidence', incidence);
  }

  hasIncidence(): boolean {
    return this.hasFieldValue('incidence');
  }

  /** Actions for managing the interaction (0..1) Created when absent. */
  getManagement(): CodeableConcept {
    if (this.management === undefined) {
      this.management = new CodeableConcept();
    }
    return this.management;
  }

  setManagement(management: CodeableConcept | undefined): this {
    return this.setFieldValue('management', management);
  }

  hasManagement(): boolean {
    return this.hasFieldValue('management');
  }
}

modelTypeRegistry.register('MedicinalProductInteraction', MedicinalProductInteraction, true);

/** True when the value is a MedicinalProductInteraction model instance. */
export function isMedicinalProductInteraction(
  candidate: unknown
): candidate is MedicinalProductInteraction {
  return candidate instanceof MedicinalProductInteraction;
}

/**
 * The specific medication, food or laboratory test that interacts
 */
export class MedicinalProductInteractionInteractant extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'item',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'itemReference',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Medication',
            'MedicinalProduct',
            'ObservationDefinition',
            'Substance',
          ],
        },
        { jsonKey: 'itemCodeableConcept', typeCode: 'CodeableConcept' },
      ],
    },
  ];

  /** The specific medication, food or laboratory test that interacts (1..1) */
  itemReference?: Reference;
  /** The specific medication, food or laboratory test that interacts (1..1) */
  itemCodeableConcept?: CodeableConcept;

  override fhirType(): string {
    return 'MedicinalProductInteraction.interactant';
  }

  /** FHIR JSON for this MedicinalProductInteractionInteractant, typed as the plain `MedicinalProductInteractionInteractant` data type. */
  override toJSON(): plainTypes.MedicinalProductInteractionInteractant {
    return this.serialize() as plainTypes.MedicinalProductInteractionInteractant;
  }

  /** The specific medication, food or laboratory test that interacts (1..1) Whichever type of `item[x]` is set. */
  getItem(): Reference | CodeableConcept | undefined {
    return this.getChoiceValue<Reference | CodeableConcept>('item');
  }

  /** True when any type of `item[x]` is set. */
  hasItem(): boolean {
    return this.hasChoiceValue('item');
  }

  getItemReference(): Reference | undefined {
    return this.itemReference;
  }

  /** Sets `item[x]` as Reference and clears every other type of it. */
  setItemReference(itemReference: Reference | undefined): this {
    return this.setFieldValue('itemReference', itemReference);
  }

  hasItemReference(): boolean {
    return this.hasFieldValue('itemReference');
  }

  getItemCodeableConcept(): CodeableConcept | undefined {
    return this.itemCodeableConcept;
  }

  /** Sets `item[x]` as CodeableConcept and clears every other type of it. */
  setItemCodeableConcept(itemCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('itemCodeableConcept', itemCodeableConcept);
  }

  hasItemCodeableConcept(): boolean {
    return this.hasFieldValue('itemCodeableConcept');
  }
}

modelTypeRegistry.register(
  'MedicinalProductInteractionInteractant',
  MedicinalProductInteractionInteractant,
  false
);
