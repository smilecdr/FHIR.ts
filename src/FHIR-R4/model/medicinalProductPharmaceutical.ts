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
import { Duration } from './duration';
import { Element } from './element';
import { Identifier } from './identifier';
import { Quantity } from './quantity';
import { Ratio } from './ratio';
import { Reference } from './reference';

/**
 * A pharmaceutical product described in terms of its composition and dose form.
 */
export class MedicinalProductPharmaceutical extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'administrableDoseForm',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'administrableDoseForm', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'unitOfPresentation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'unitOfPresentation', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'ingredient',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'ingredient',
          typeCode: 'Reference',
          targetResourceTypes: ['MedicinalProductIngredient'],
        },
      ],
    },
    {
      elementName: 'device',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'device', typeCode: 'Reference', targetResourceTypes: ['DeviceDefinition'] },
      ],
    },
    {
      elementName: 'characteristics',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'characteristics', typeCode: 'MedicinalProductPharmaceuticalCharacteristics' },
      ],
    },
    {
      elementName: 'routeOfAdministration',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'routeOfAdministration',
          typeCode: 'MedicinalProductPharmaceuticalRouteOfAdministration',
        },
      ],
    },
  ];

  readonly resourceType = 'MedicinalProductPharmaceutical';

  /** An identifier for the pharmaceutical medicinal product (0..*) */
  identifier?: Identifier[];

  /** The administrable dose form, after necessary reconstitution (1..1) */
  administrableDoseForm?: CodeableConcept;

  /** Todo (0..1) */
  unitOfPresentation?: CodeableConcept;

  /** Ingredient (0..*) */
  ingredient?: Reference[];

  /** Accompanying device (0..*) */
  device?: Reference[];

  /** Characteristics e.g. a products onset of action (0..*) */
  characteristics?: MedicinalProductPharmaceuticalCharacteristics[];

  /** The path by which the pharmaceutical product is taken into or makes contact with the body (1..*) */
  routeOfAdministration?: MedicinalProductPharmaceuticalRouteOfAdministration[];

  override fhirType(): string {
    return 'MedicinalProductPharmaceutical';
  }

  /** FHIR JSON for this MedicinalProductPharmaceutical, typed as the plain `MedicinalProductPharmaceutical` data type. */
  override toJSON(): plainTypes.MedicinalProductPharmaceutical {
    return this.serialize() as plainTypes.MedicinalProductPharmaceutical;
  }

  /** An identifier for the pharmaceutical medicinal product (0..*) Never undefined; an empty list is created when absent. */
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

  /** The administrable dose form, after necessary reconstitution (1..1) Created when absent. */
  getAdministrableDoseForm(): CodeableConcept {
    if (this.administrableDoseForm === undefined) {
      this.administrableDoseForm = new CodeableConcept();
    }
    return this.administrableDoseForm;
  }

  setAdministrableDoseForm(administrableDoseForm: CodeableConcept | undefined): this {
    return this.setFieldValue('administrableDoseForm', administrableDoseForm);
  }

  hasAdministrableDoseForm(): boolean {
    return this.hasFieldValue('administrableDoseForm');
  }

  /** Todo (0..1) Created when absent. */
  getUnitOfPresentation(): CodeableConcept {
    if (this.unitOfPresentation === undefined) {
      this.unitOfPresentation = new CodeableConcept();
    }
    return this.unitOfPresentation;
  }

  setUnitOfPresentation(unitOfPresentation: CodeableConcept | undefined): this {
    return this.setFieldValue('unitOfPresentation', unitOfPresentation);
  }

  hasUnitOfPresentation(): boolean {
    return this.hasFieldValue('unitOfPresentation');
  }

  /** Ingredient (0..*) Never undefined; an empty list is created when absent. */
  getIngredient(): Reference[] {
    if (this.ingredient === undefined) {
      this.ingredient = [];
    }
    return this.ingredient;
  }

  setIngredient(ingredient: Reference[] | undefined): this {
    return this.setFieldValue('ingredient', ingredient);
  }

  hasIngredient(): boolean {
    return this.hasFieldValue('ingredient');
  }

  /** Appends a new, empty Reference to `ingredient` and returns it so it can be filled in. */
  addIngredient(): Reference;
  /** Appends the given Reference to `ingredient` and returns this object for chaining. */
  addIngredient(reference: Reference): this;
  addIngredient(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('ingredient', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('ingredient', createdReference);
    return createdReference;
  }

  /** The first Reference of `ingredient`. One is added when the list is empty. */
  getIngredientFirstRep(): Reference {
    const firstReference = this.getIngredient()[0];
    return firstReference === undefined ? this.addIngredient() : firstReference;
  }

  /** Accompanying device (0..*) Never undefined; an empty list is created when absent. */
  getDevice(): Reference[] {
    if (this.device === undefined) {
      this.device = [];
    }
    return this.device;
  }

  setDevice(device: Reference[] | undefined): this {
    return this.setFieldValue('device', device);
  }

  hasDevice(): boolean {
    return this.hasFieldValue('device');
  }

  /** Appends a new, empty Reference to `device` and returns it so it can be filled in. */
  addDevice(): Reference;
  /** Appends the given Reference to `device` and returns this object for chaining. */
  addDevice(reference: Reference): this;
  addDevice(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('device', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('device', createdReference);
    return createdReference;
  }

  /** The first Reference of `device`. One is added when the list is empty. */
  getDeviceFirstRep(): Reference {
    const firstReference = this.getDevice()[0];
    return firstReference === undefined ? this.addDevice() : firstReference;
  }

  /** Characteristics e.g. a products onset of action (0..*) Never undefined; an empty list is created when absent. */
  getCharacteristics(): MedicinalProductPharmaceuticalCharacteristics[] {
    if (this.characteristics === undefined) {
      this.characteristics = [];
    }
    return this.characteristics;
  }

  setCharacteristics(
    characteristics: MedicinalProductPharmaceuticalCharacteristics[] | undefined
  ): this {
    return this.setFieldValue('characteristics', characteristics);
  }

  hasCharacteristics(): boolean {
    return this.hasFieldValue('characteristics');
  }

  /** Appends a new, empty MedicinalProductPharmaceuticalCharacteristics to `characteristics` and returns it so it can be filled in. */
  addCharacteristics(): MedicinalProductPharmaceuticalCharacteristics;
  /** Appends the given MedicinalProductPharmaceuticalCharacteristics to `characteristics` and returns this object for chaining. */
  addCharacteristics(
    medicinalProductPharmaceuticalCharacteristics: MedicinalProductPharmaceuticalCharacteristics
  ): this;
  addCharacteristics(
    medicinalProductPharmaceuticalCharacteristics?: MedicinalProductPharmaceuticalCharacteristics
  ): MedicinalProductPharmaceuticalCharacteristics | this {
    if (medicinalProductPharmaceuticalCharacteristics !== undefined) {
      return this.addFieldValue('characteristics', medicinalProductPharmaceuticalCharacteristics);
    }
    const createdMedicinalProductPharmaceuticalCharacteristics =
      new MedicinalProductPharmaceuticalCharacteristics();
    this.addFieldValue('characteristics', createdMedicinalProductPharmaceuticalCharacteristics);
    return createdMedicinalProductPharmaceuticalCharacteristics;
  }

  /** The first MedicinalProductPharmaceuticalCharacteristics of `characteristics`. One is added when the list is empty. */
  getCharacteristicsFirstRep(): MedicinalProductPharmaceuticalCharacteristics {
    const firstMedicinalProductPharmaceuticalCharacteristics = this.getCharacteristics()[0];
    return firstMedicinalProductPharmaceuticalCharacteristics === undefined
      ? this.addCharacteristics()
      : firstMedicinalProductPharmaceuticalCharacteristics;
  }

  /** The path by which the pharmaceutical product is taken into or makes contact with the body (1..*) Never undefined; an empty list is created when absent. */
  getRouteOfAdministration(): MedicinalProductPharmaceuticalRouteOfAdministration[] {
    if (this.routeOfAdministration === undefined) {
      this.routeOfAdministration = [];
    }
    return this.routeOfAdministration;
  }

  setRouteOfAdministration(
    routeOfAdministration: MedicinalProductPharmaceuticalRouteOfAdministration[] | undefined
  ): this {
    return this.setFieldValue('routeOfAdministration', routeOfAdministration);
  }

  hasRouteOfAdministration(): boolean {
    return this.hasFieldValue('routeOfAdministration');
  }

  /** Appends a new, empty MedicinalProductPharmaceuticalRouteOfAdministration to `routeOfAdministration` and returns it so it can be filled in. */
  addRouteOfAdministration(): MedicinalProductPharmaceuticalRouteOfAdministration;
  /** Appends the given MedicinalProductPharmaceuticalRouteOfAdministration to `routeOfAdministration` and returns this object for chaining. */
  addRouteOfAdministration(
    medicinalProductPharmaceuticalRouteOfAdministration: MedicinalProductPharmaceuticalRouteOfAdministration
  ): this;
  addRouteOfAdministration(
    medicinalProductPharmaceuticalRouteOfAdministration?: MedicinalProductPharmaceuticalRouteOfAdministration
  ): MedicinalProductPharmaceuticalRouteOfAdministration | this {
    if (medicinalProductPharmaceuticalRouteOfAdministration !== undefined) {
      return this.addFieldValue(
        'routeOfAdministration',
        medicinalProductPharmaceuticalRouteOfAdministration
      );
    }
    const createdMedicinalProductPharmaceuticalRouteOfAdministration =
      new MedicinalProductPharmaceuticalRouteOfAdministration();
    this.addFieldValue(
      'routeOfAdministration',
      createdMedicinalProductPharmaceuticalRouteOfAdministration
    );
    return createdMedicinalProductPharmaceuticalRouteOfAdministration;
  }

  /** The first MedicinalProductPharmaceuticalRouteOfAdministration of `routeOfAdministration`. One is added when the list is empty. */
  getRouteOfAdministrationFirstRep(): MedicinalProductPharmaceuticalRouteOfAdministration {
    const firstMedicinalProductPharmaceuticalRouteOfAdministration =
      this.getRouteOfAdministration()[0];
    return firstMedicinalProductPharmaceuticalRouteOfAdministration === undefined
      ? this.addRouteOfAdministration()
      : firstMedicinalProductPharmaceuticalRouteOfAdministration;
  }
}

modelTypeRegistry.register('MedicinalProductPharmaceutical', MedicinalProductPharmaceutical, true);

/** True when the value is a MedicinalProductPharmaceutical model instance. */
export function isMedicinalProductPharmaceutical(
  candidate: unknown
): candidate is MedicinalProductPharmaceutical {
  return candidate instanceof MedicinalProductPharmaceutical;
}

/**
 * Characteristics e.g. a products onset of action
 */
export class MedicinalProductPharmaceuticalCharacteristics extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'status',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'status', typeCode: 'CodeableConcept' }],
    },
  ];

  /** A coded characteristic (1..1) */
  code?: CodeableConcept;

  /** The status of characteristic e.g. assigned or pending (0..1) */
  status?: CodeableConcept;

  override fhirType(): string {
    return 'MedicinalProductPharmaceutical.characteristics';
  }

  /** FHIR JSON for this MedicinalProductPharmaceuticalCharacteristics, typed as the plain `MedicinalProductPharmaceuticalCharacteristics` data type. */
  override toJSON(): plainTypes.MedicinalProductPharmaceuticalCharacteristics {
    return this.serialize() as plainTypes.MedicinalProductPharmaceuticalCharacteristics;
  }

  /** A coded characteristic (1..1) Created when absent. */
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

  /** The status of characteristic e.g. assigned or pending (0..1) Created when absent. */
  getStatus(): CodeableConcept {
    if (this.status === undefined) {
      this.status = new CodeableConcept();
    }
    return this.status;
  }

  setStatus(status: CodeableConcept | undefined): this {
    return this.setFieldValue('status', status);
  }

  hasStatus(): boolean {
    return this.hasFieldValue('status');
  }
}

modelTypeRegistry.register(
  'MedicinalProductPharmaceuticalCharacteristics',
  MedicinalProductPharmaceuticalCharacteristics,
  false
);

/**
 * The path by which the pharmaceutical product is taken into or makes contact with the body
 */
export class MedicinalProductPharmaceuticalRouteOfAdministration extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'firstDose',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'firstDose', typeCode: 'Quantity' }],
    },
    {
      elementName: 'maxSingleDose',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'maxSingleDose', typeCode: 'Quantity' }],
    },
    {
      elementName: 'maxDosePerDay',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'maxDosePerDay', typeCode: 'Quantity' }],
    },
    {
      elementName: 'maxDosePerTreatmentPeriod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'maxDosePerTreatmentPeriod', typeCode: 'Ratio' }],
    },
    {
      elementName: 'maxTreatmentPeriod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'maxTreatmentPeriod', typeCode: 'Duration' }],
    },
    {
      elementName: 'targetSpecies',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'targetSpecies',
          typeCode: 'MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies',
        },
      ],
    },
  ];

  /** Coded expression for the route (1..1) */
  code?: CodeableConcept;

  /** The first dose (dose quantity) administered in humans can be specified, for a product under investigation, using a numerical value and its unit of measurement (0..1) */
  firstDose?: Quantity;

  /** The maximum single dose that can be administered as per the protocol of a clinical trial can be specified using a numerical value and its unit of measurement (0..1) */
  maxSingleDose?: Quantity;

  /** The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered as per the protocol referenced in the clinical trial authorisation (0..1) */
  maxDosePerDay?: Quantity;

  /** The maximum dose per treatment period that can be administered as per the protocol referenced in the clinical trial authorisation (0..1) */
  maxDosePerTreatmentPeriod?: Ratio;

  /** The maximum treatment period during which an Investigational Medicinal Product can be administered as per the protocol referenced in the clinical trial authorisation (0..1) */
  maxTreatmentPeriod?: Duration;

  /** A species for which this route applies (0..*) */
  targetSpecies?: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies[];

  override fhirType(): string {
    return 'MedicinalProductPharmaceutical.routeOfAdministration';
  }

  /** FHIR JSON for this MedicinalProductPharmaceuticalRouteOfAdministration, typed as the plain `MedicinalProductPharmaceuticalRouteOfAdministration` data type. */
  override toJSON(): plainTypes.MedicinalProductPharmaceuticalRouteOfAdministration {
    return this.serialize() as plainTypes.MedicinalProductPharmaceuticalRouteOfAdministration;
  }

  /** Coded expression for the route (1..1) Created when absent. */
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

  /** The first dose (dose quantity) administered in humans can be specified, for a product under investigation, using a numerical value and its unit of measurement (0..1) Created when absent. */
  getFirstDose(): Quantity {
    if (this.firstDose === undefined) {
      this.firstDose = new Quantity();
    }
    return this.firstDose;
  }

  setFirstDose(firstDose: Quantity | undefined): this {
    return this.setFieldValue('firstDose', firstDose);
  }

  hasFirstDose(): boolean {
    return this.hasFieldValue('firstDose');
  }

  /** The maximum single dose that can be administered as per the protocol of a clinical trial can be specified using a numerical value and its unit of measurement (0..1) Created when absent. */
  getMaxSingleDose(): Quantity {
    if (this.maxSingleDose === undefined) {
      this.maxSingleDose = new Quantity();
    }
    return this.maxSingleDose;
  }

  setMaxSingleDose(maxSingleDose: Quantity | undefined): this {
    return this.setFieldValue('maxSingleDose', maxSingleDose);
  }

  hasMaxSingleDose(): boolean {
    return this.hasFieldValue('maxSingleDose');
  }

  /** The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered as per the protocol referenced in the clinical trial authorisation (0..1) Created when absent. */
  getMaxDosePerDay(): Quantity {
    if (this.maxDosePerDay === undefined) {
      this.maxDosePerDay = new Quantity();
    }
    return this.maxDosePerDay;
  }

  setMaxDosePerDay(maxDosePerDay: Quantity | undefined): this {
    return this.setFieldValue('maxDosePerDay', maxDosePerDay);
  }

  hasMaxDosePerDay(): boolean {
    return this.hasFieldValue('maxDosePerDay');
  }

  /** The maximum dose per treatment period that can be administered as per the protocol referenced in the clinical trial authorisation (0..1) Created when absent. */
  getMaxDosePerTreatmentPeriod(): Ratio {
    if (this.maxDosePerTreatmentPeriod === undefined) {
      this.maxDosePerTreatmentPeriod = new Ratio();
    }
    return this.maxDosePerTreatmentPeriod;
  }

  setMaxDosePerTreatmentPeriod(maxDosePerTreatmentPeriod: Ratio | undefined): this {
    return this.setFieldValue('maxDosePerTreatmentPeriod', maxDosePerTreatmentPeriod);
  }

  hasMaxDosePerTreatmentPeriod(): boolean {
    return this.hasFieldValue('maxDosePerTreatmentPeriod');
  }

  /** The maximum treatment period during which an Investigational Medicinal Product can be administered as per the protocol referenced in the clinical trial authorisation (0..1) Created when absent. */
  getMaxTreatmentPeriod(): Duration {
    if (this.maxTreatmentPeriod === undefined) {
      this.maxTreatmentPeriod = new Duration();
    }
    return this.maxTreatmentPeriod;
  }

  setMaxTreatmentPeriod(maxTreatmentPeriod: Duration | undefined): this {
    return this.setFieldValue('maxTreatmentPeriod', maxTreatmentPeriod);
  }

  hasMaxTreatmentPeriod(): boolean {
    return this.hasFieldValue('maxTreatmentPeriod');
  }

  /** A species for which this route applies (0..*) Never undefined; an empty list is created when absent. */
  getTargetSpecies(): MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies[] {
    if (this.targetSpecies === undefined) {
      this.targetSpecies = [];
    }
    return this.targetSpecies;
  }

  setTargetSpecies(
    targetSpecies: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies[] | undefined
  ): this {
    return this.setFieldValue('targetSpecies', targetSpecies);
  }

  hasTargetSpecies(): boolean {
    return this.hasFieldValue('targetSpecies');
  }

  /** Appends a new, empty MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies to `targetSpecies` and returns it so it can be filled in. */
  addTargetSpecies(): MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies;
  /** Appends the given MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies to `targetSpecies` and returns this object for chaining. */
  addTargetSpecies(
    medicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies
  ): this;
  addTargetSpecies(
    medicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies?: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies
  ): MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies | this {
    if (medicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies !== undefined) {
      return this.addFieldValue(
        'targetSpecies',
        medicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies
      );
    }
    const createdMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies =
      new MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies();
    this.addFieldValue(
      'targetSpecies',
      createdMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies
    );
    return createdMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies;
  }

  /** The first MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies of `targetSpecies`. One is added when the list is empty. */
  getTargetSpeciesFirstRep(): MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies {
    const firstMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies =
      this.getTargetSpecies()[0];
    return firstMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies === undefined
      ? this.addTargetSpecies()
      : firstMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies;
  }
}

modelTypeRegistry.register(
  'MedicinalProductPharmaceuticalRouteOfAdministration',
  MedicinalProductPharmaceuticalRouteOfAdministration,
  false
);

/**
 * A species for which this route applies
 */
export class MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'withdrawalPeriod',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'withdrawalPeriod',
          typeCode:
            'MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod',
        },
      ],
    },
  ];

  /** Coded expression for the species (1..1) */
  code?: CodeableConcept;

  /** A species specific time during which consumption of animal product is not appropriate (0..*) */
  withdrawalPeriod?: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod[];

  override fhirType(): string {
    return 'MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies';
  }

  /** FHIR JSON for this MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies, typed as the plain `MedicinalProductPharmaceuticalTargetSpecies` data type. */
  override toJSON(): plainTypes.MedicinalProductPharmaceuticalTargetSpecies {
    return this.serialize() as plainTypes.MedicinalProductPharmaceuticalTargetSpecies;
  }

  /** Coded expression for the species (1..1) Created when absent. */
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

  /** A species specific time during which consumption of animal product is not appropriate (0..*) Never undefined; an empty list is created when absent. */
  getWithdrawalPeriod(): MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod[] {
    if (this.withdrawalPeriod === undefined) {
      this.withdrawalPeriod = [];
    }
    return this.withdrawalPeriod;
  }

  setWithdrawalPeriod(
    withdrawalPeriod:
      MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod[] | undefined
  ): this {
    return this.setFieldValue('withdrawalPeriod', withdrawalPeriod);
  }

  hasWithdrawalPeriod(): boolean {
    return this.hasFieldValue('withdrawalPeriod');
  }

  /** Appends a new, empty MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod to `withdrawalPeriod` and returns it so it can be filled in. */
  addWithdrawalPeriod(): MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod;
  /** Appends the given MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod to `withdrawalPeriod` and returns this object for chaining. */
  addWithdrawalPeriod(
    medicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod
  ): this;
  addWithdrawalPeriod(
    medicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod?: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod
  ): MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod | this {
    if (
      medicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod !== undefined
    ) {
      return this.addFieldValue(
        'withdrawalPeriod',
        medicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod
      );
    }
    const createdMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod =
      new MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod();
    this.addFieldValue(
      'withdrawalPeriod',
      createdMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod
    );
    return createdMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod;
  }

  /** The first MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod of `withdrawalPeriod`. One is added when the list is empty. */
  getWithdrawalPeriodFirstRep(): MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod {
    const firstMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod =
      this.getWithdrawalPeriod()[0];
    return firstMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod ===
      undefined
      ? this.addWithdrawalPeriod()
      : firstMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod;
  }
}

modelTypeRegistry.register(
  'MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies',
  MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies,
  false
);

/**
 * A species specific time during which consumption of animal product is not appropriate
 */
export class MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'tissue',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'tissue', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'value',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'value', typeCode: 'Quantity' }],
    },
    {
      elementName: 'supportingInformation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'supportingInformation', typeCode: 'string' }],
    },
  ];

  /** Coded expression for the type of tissue for which the withdrawal period applues, e.g. meat, milk (1..1) */
  tissue?: CodeableConcept;

  /** A value for the time (1..1) */
  value?: Quantity;

  /** Extra information about the withdrawal period (0..1) */
  supportingInformation?: string;
  /** Id and extensions of the primitive `supportingInformation`. */
  _supportingInformation?: Element;

  override fhirType(): string {
    return 'MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies.withdrawalPeriod';
  }

  /** FHIR JSON for this MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod, typed as the plain `MedicinalProductPharmaceuticalWithdrawalPeriod` data type. */
  override toJSON(): plainTypes.MedicinalProductPharmaceuticalWithdrawalPeriod {
    return this.serialize() as plainTypes.MedicinalProductPharmaceuticalWithdrawalPeriod;
  }

  /** Coded expression for the type of tissue for which the withdrawal period applues, e.g. meat, milk (1..1) Created when absent. */
  getTissue(): CodeableConcept {
    if (this.tissue === undefined) {
      this.tissue = new CodeableConcept();
    }
    return this.tissue;
  }

  setTissue(tissue: CodeableConcept | undefined): this {
    return this.setFieldValue('tissue', tissue);
  }

  hasTissue(): boolean {
    return this.hasFieldValue('tissue');
  }

  /** A value for the time (1..1) Created when absent. */
  getValue(): Quantity {
    if (this.value === undefined) {
      this.value = new Quantity();
    }
    return this.value;
  }

  setValue(value: Quantity | undefined): this {
    return this.setFieldValue('value', value);
  }

  hasValue(): boolean {
    return this.hasFieldValue('value');
  }

  /** Extra information about the withdrawal period (0..1) */
  getSupportingInformation(): string | undefined {
    return this.supportingInformation;
  }

  /** Sets `supportingInformation`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setSupportingInformation(supportingInformation: string | undefined): this {
    return this.setFieldValue('supportingInformation', supportingInformation);
  }

  hasSupportingInformation(): boolean {
    return this.hasFieldValue('supportingInformation');
  }

  /** The element carrying the id and extensions of `supportingInformation`. Created when absent. */
  getSupportingInformationElement(): Element {
    if (this._supportingInformation === undefined) {
      this._supportingInformation = new Element();
    }
    return this._supportingInformation;
  }

  setSupportingInformationElement(supportingInformationElement: Element | undefined): this {
    this._supportingInformation = supportingInformationElement;
    return this;
  }
}

modelTypeRegistry.register(
  'MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod',
  MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod,
  false
);
