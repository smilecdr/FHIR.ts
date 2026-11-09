/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { Annotation } from './annotation';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Quantity } from './quantity';
import { Reference } from './reference';

/**
 * Base StructureDefinition for VisionPrescription Resource
 */
export class VisionPrescription extends DomainResource {
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
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'status',
          typeCode: 'code',
          allowedCodes: valueSetCodes.FinancialResourceStatusCodes,
        },
      ],
    },
    {
      elementName: 'patient',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'patient', typeCode: 'Reference', targetResourceTypes: ['Patient'] }],
    },
    {
      elementName: 'encounter',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'encounter', typeCode: 'Reference', targetResourceTypes: ['Encounter'] }],
    },
    {
      elementName: 'dateWritten',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'dateWritten', typeCode: 'dateTime' }],
    },
    {
      elementName: 'prescriber',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'prescriber', typeCode: 'Reference', targetResourceTypes: ['Practitioner'] },
      ],
    },
    {
      elementName: 'reason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'reasonCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'reasonReference', typeCode: 'Reference', targetResourceTypes: ['Condition'] },
      ],
    },
    {
      elementName: 'dispense',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'dispense', typeCode: 'VisionPrescriptionDispense' }],
    },
  ];

  readonly resourceType = 'VisionPrescription';

  /** Business identifier (0..*) */
  identifier?: Identifier[];

  /** active | cancelled | draft | entered-in-error (0..1) */
  status?: valueSetCodes.FinancialResourceStatusCodes;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Who prescription is for (0..1) */
  patient?: Reference;

  /** Created during encounter / admission / stay (0..1) */
  encounter?: Reference;

  /** When prescription was authorized (0..1) */
  dateWritten?: string;
  /** Id and extensions of the primitive `dateWritten`. */
  _dateWritten?: Element;

  /** Who authorizes the vision product (0..1) */
  prescriber?: Reference;

  /** Reason or indication for writing the prescription (0..1) */
  reasonCodeableConcept?: CodeableConcept;
  /** Reason or indication for writing the prescription (0..1) */
  reasonReference?: Reference;

  /** Vision supply authorization (0..*) */
  dispense?: VisionPrescriptionDispense[];

  override fhirType(): string {
    return 'VisionPrescription';
  }

  /** FHIR JSON for this VisionPrescription, typed as the plain `VisionPrescription` data type. */
  override toJSON(): plainTypes.VisionPrescription {
    return this.serialize() as plainTypes.VisionPrescription;
  }

  /** Business identifier (0..*) Never undefined; an empty list is created when absent. */
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

  /** active | cancelled | draft | entered-in-error (0..1) */
  getStatus(): valueSetCodes.FinancialResourceStatusCodes | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.FinancialResourceStatusCodes | undefined): this {
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

  /** Who prescription is for (0..1) Created when absent. */
  getPatient(): Reference {
    if (this.patient === undefined) {
      this.patient = new Reference();
    }
    return this.patient;
  }

  setPatient(patient: Reference | undefined): this {
    return this.setFieldValue('patient', patient);
  }

  hasPatient(): boolean {
    return this.hasFieldValue('patient');
  }

  /** Created during encounter / admission / stay (0..1) Created when absent. */
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

  /** When prescription was authorized (0..1) */
  getDateWritten(): string | undefined {
    return this.dateWritten;
  }

  /** Sets `dateWritten`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setDateWritten(dateWritten: string | undefined): this {
    return this.setFieldValue('dateWritten', dateWritten);
  }

  hasDateWritten(): boolean {
    return this.hasFieldValue('dateWritten');
  }

  /** The element carrying the id and extensions of `dateWritten`. Created when absent. */
  getDateWrittenElement(): Element {
    if (this._dateWritten === undefined) {
      this._dateWritten = new Element();
    }
    return this._dateWritten;
  }

  setDateWrittenElement(dateWrittenElement: Element | undefined): this {
    this._dateWritten = dateWrittenElement;
    return this;
  }

  /** Who authorizes the vision product (0..1) Created when absent. */
  getPrescriber(): Reference {
    if (this.prescriber === undefined) {
      this.prescriber = new Reference();
    }
    return this.prescriber;
  }

  setPrescriber(prescriber: Reference | undefined): this {
    return this.setFieldValue('prescriber', prescriber);
  }

  hasPrescriber(): boolean {
    return this.hasFieldValue('prescriber');
  }

  /** Reason or indication for writing the prescription (0..1) Whichever type of `reason[x]` is set. */
  getReason(): CodeableConcept | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | Reference>('reason');
  }

  /** True when any type of `reason[x]` is set. */
  hasReason(): boolean {
    return this.hasChoiceValue('reason');
  }

  getReasonCodeableConcept(): CodeableConcept | undefined {
    return this.reasonCodeableConcept;
  }

  /** Sets `reason[x]` as CodeableConcept and clears every other type of it. */
  setReasonCodeableConcept(reasonCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('reasonCodeableConcept', reasonCodeableConcept);
  }

  hasReasonCodeableConcept(): boolean {
    return this.hasFieldValue('reasonCodeableConcept');
  }

  getReasonReference(): Reference | undefined {
    return this.reasonReference;
  }

  /** Sets `reason[x]` as Reference and clears every other type of it. */
  setReasonReference(reasonReference: Reference | undefined): this {
    return this.setFieldValue('reasonReference', reasonReference);
  }

  hasReasonReference(): boolean {
    return this.hasFieldValue('reasonReference');
  }

  /** Vision supply authorization (0..*) Never undefined; an empty list is created when absent. */
  getDispense(): VisionPrescriptionDispense[] {
    if (this.dispense === undefined) {
      this.dispense = [];
    }
    return this.dispense;
  }

  setDispense(dispense: VisionPrescriptionDispense[] | undefined): this {
    return this.setFieldValue('dispense', dispense);
  }

  hasDispense(): boolean {
    return this.hasFieldValue('dispense');
  }

  /** Appends a new, empty VisionPrescriptionDispense to `dispense` and returns it so it can be filled in. */
  addDispense(): VisionPrescriptionDispense;
  /** Appends the given VisionPrescriptionDispense to `dispense` and returns this object for chaining. */
  addDispense(visionPrescriptionDispense: VisionPrescriptionDispense): this;
  addDispense(
    visionPrescriptionDispense?: VisionPrescriptionDispense
  ): VisionPrescriptionDispense | this {
    if (visionPrescriptionDispense !== undefined) {
      return this.addFieldValue('dispense', visionPrescriptionDispense);
    }
    const createdVisionPrescriptionDispense = new VisionPrescriptionDispense();
    this.addFieldValue('dispense', createdVisionPrescriptionDispense);
    return createdVisionPrescriptionDispense;
  }

  /** The first VisionPrescriptionDispense of `dispense`. One is added when the list is empty. */
  getDispenseFirstRep(): VisionPrescriptionDispense {
    const firstVisionPrescriptionDispense = this.getDispense()[0];
    return firstVisionPrescriptionDispense === undefined
      ? this.addDispense()
      : firstVisionPrescriptionDispense;
  }
}

modelTypeRegistry.register('VisionPrescription', VisionPrescription, true);

/** True when the value is a VisionPrescription model instance. */
export function isVisionPrescription(candidate: unknown): candidate is VisionPrescription {
  return candidate instanceof VisionPrescription;
}

/**
 * Vision supply authorization
 */
export class VisionPrescriptionDispense extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'product',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'product', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'eye',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'eye', typeCode: 'code', allowedCodes: valueSetCodes.VisionEyes }],
    },
    {
      elementName: 'sphere',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sphere', typeCode: 'decimal' }],
    },
    {
      elementName: 'cylinder',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'cylinder', typeCode: 'decimal' }],
    },
    {
      elementName: 'axis',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'axis', typeCode: 'integer' }],
    },
    {
      elementName: 'prism',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'prism', typeCode: 'decimal' }],
    },
    {
      elementName: 'base',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'base', typeCode: 'code', allowedCodes: valueSetCodes.VisionBase }],
    },
    {
      elementName: 'add',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'add', typeCode: 'decimal' }],
    },
    {
      elementName: 'power',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'power', typeCode: 'decimal' }],
    },
    {
      elementName: 'backCurve',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'backCurve', typeCode: 'decimal' }],
    },
    {
      elementName: 'diameter',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'diameter', typeCode: 'decimal' }],
    },
    {
      elementName: 'duration',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'duration', typeCode: 'Quantity' }],
    },
    {
      elementName: 'color',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'color', typeCode: 'string' }],
    },
    {
      elementName: 'brand',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'brand', typeCode: 'string' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
  ];

  /** Product to be supplied (0..1) */
  product?: CodeableConcept;

  /** right | left (0..1) */
  eye?: valueSetCodes.VisionEyes;
  /** Id and extensions of the primitive `eye`. */
  _eye?: Element;

  /** Lens sphere (0..1) */
  sphere?: number;
  /** Id and extensions of the primitive `sphere`. */
  _sphere?: Element;

  /** Lens cylinder (0..1) */
  cylinder?: number;
  /** Id and extensions of the primitive `cylinder`. */
  _cylinder?: Element;

  /** Lens axis (0..1) */
  axis?: number;
  /** Id and extensions of the primitive `axis`. */
  _axis?: Element;

  /** Lens prism (0..1) */
  prism?: number;
  /** Id and extensions of the primitive `prism`. */
  _prism?: Element;

  /** up | down | in | out (0..1) */
  base?: valueSetCodes.VisionBase;
  /** Id and extensions of the primitive `base`. */
  _base?: Element;

  /** Lens add (0..1) */
  add?: number;
  /** Id and extensions of the primitive `add`. */
  _add?: Element;

  /** Contact lens power (0..1) */
  power?: number;
  /** Id and extensions of the primitive `power`. */
  _power?: Element;

  /** Contact lens back curvature (0..1) */
  backCurve?: number;
  /** Id and extensions of the primitive `backCurve`. */
  _backCurve?: Element;

  /** Contact lens diameter (0..1) */
  diameter?: number;
  /** Id and extensions of the primitive `diameter`. */
  _diameter?: Element;

  /** Lens wear duration (0..1) */
  duration?: Quantity;

  /** Color required (0..1) */
  color?: string;
  /** Id and extensions of the primitive `color`. */
  _color?: Element;

  /** Brand required (0..1) */
  brand?: string;
  /** Id and extensions of the primitive `brand`. */
  _brand?: Element;

  /** Notes for coatings (0..*) */
  note?: Annotation[];

  override fhirType(): string {
    return 'VisionPrescription.dispense';
  }

  /** FHIR JSON for this VisionPrescriptionDispense, typed as the plain `VisionPrescriptionDispense` data type. */
  override toJSON(): plainTypes.VisionPrescriptionDispense {
    return this.serialize() as plainTypes.VisionPrescriptionDispense;
  }

  /** Product to be supplied (0..1) Created when absent. */
  getProduct(): CodeableConcept {
    if (this.product === undefined) {
      this.product = new CodeableConcept();
    }
    return this.product;
  }

  setProduct(product: CodeableConcept | undefined): this {
    return this.setFieldValue('product', product);
  }

  hasProduct(): boolean {
    return this.hasFieldValue('product');
  }

  /** right | left (0..1) */
  getEye(): valueSetCodes.VisionEyes | undefined {
    return this.eye;
  }

  /** Sets `eye`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setEye(eye: valueSetCodes.VisionEyes | undefined): this {
    return this.setFieldValue('eye', eye);
  }

  hasEye(): boolean {
    return this.hasFieldValue('eye');
  }

  /** The element carrying the id and extensions of `eye`. Created when absent. */
  getEyeElement(): Element {
    if (this._eye === undefined) {
      this._eye = new Element();
    }
    return this._eye;
  }

  setEyeElement(eyeElement: Element | undefined): this {
    this._eye = eyeElement;
    return this;
  }

  /** Lens sphere (0..1) */
  getSphere(): number | undefined {
    return this.sphere;
  }

  /** Sets `sphere`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setSphere(sphere: number | undefined): this {
    return this.setFieldValue('sphere', sphere);
  }

  hasSphere(): boolean {
    return this.hasFieldValue('sphere');
  }

  /** The element carrying the id and extensions of `sphere`. Created when absent. */
  getSphereElement(): Element {
    if (this._sphere === undefined) {
      this._sphere = new Element();
    }
    return this._sphere;
  }

  setSphereElement(sphereElement: Element | undefined): this {
    this._sphere = sphereElement;
    return this;
  }

  /** Lens cylinder (0..1) */
  getCylinder(): number | undefined {
    return this.cylinder;
  }

  /** Sets `cylinder`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setCylinder(cylinder: number | undefined): this {
    return this.setFieldValue('cylinder', cylinder);
  }

  hasCylinder(): boolean {
    return this.hasFieldValue('cylinder');
  }

  /** The element carrying the id and extensions of `cylinder`. Created when absent. */
  getCylinderElement(): Element {
    if (this._cylinder === undefined) {
      this._cylinder = new Element();
    }
    return this._cylinder;
  }

  setCylinderElement(cylinderElement: Element | undefined): this {
    this._cylinder = cylinderElement;
    return this;
  }

  /** Lens axis (0..1) */
  getAxis(): number | undefined {
    return this.axis;
  }

  /** Sets `axis`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setAxis(axis: number | undefined): this {
    return this.setFieldValue('axis', axis);
  }

  hasAxis(): boolean {
    return this.hasFieldValue('axis');
  }

  /** The element carrying the id and extensions of `axis`. Created when absent. */
  getAxisElement(): Element {
    if (this._axis === undefined) {
      this._axis = new Element();
    }
    return this._axis;
  }

  setAxisElement(axisElement: Element | undefined): this {
    this._axis = axisElement;
    return this;
  }

  /** Lens prism (0..1) */
  getPrism(): number | undefined {
    return this.prism;
  }

  /** Sets `prism`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setPrism(prism: number | undefined): this {
    return this.setFieldValue('prism', prism);
  }

  hasPrism(): boolean {
    return this.hasFieldValue('prism');
  }

  /** The element carrying the id and extensions of `prism`. Created when absent. */
  getPrismElement(): Element {
    if (this._prism === undefined) {
      this._prism = new Element();
    }
    return this._prism;
  }

  setPrismElement(prismElement: Element | undefined): this {
    this._prism = prismElement;
    return this;
  }

  /** up | down | in | out (0..1) */
  getBase(): valueSetCodes.VisionBase | undefined {
    return this.base;
  }

  /** Sets `base`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setBase(base: valueSetCodes.VisionBase | undefined): this {
    return this.setFieldValue('base', base);
  }

  hasBase(): boolean {
    return this.hasFieldValue('base');
  }

  /** The element carrying the id and extensions of `base`. Created when absent. */
  getBaseElement(): Element {
    if (this._base === undefined) {
      this._base = new Element();
    }
    return this._base;
  }

  setBaseElement(baseElement: Element | undefined): this {
    this._base = baseElement;
    return this;
  }

  /** Lens add (0..1) */
  getAdd(): number | undefined {
    return this.add;
  }

  /** Sets `add`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setAdd(add: number | undefined): this {
    return this.setFieldValue('add', add);
  }

  hasAdd(): boolean {
    return this.hasFieldValue('add');
  }

  /** The element carrying the id and extensions of `add`. Created when absent. */
  getAddElement(): Element {
    if (this._add === undefined) {
      this._add = new Element();
    }
    return this._add;
  }

  setAddElement(addElement: Element | undefined): this {
    this._add = addElement;
    return this;
  }

  /** Contact lens power (0..1) */
  getPower(): number | undefined {
    return this.power;
  }

  /** Sets `power`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setPower(power: number | undefined): this {
    return this.setFieldValue('power', power);
  }

  hasPower(): boolean {
    return this.hasFieldValue('power');
  }

  /** The element carrying the id and extensions of `power`. Created when absent. */
  getPowerElement(): Element {
    if (this._power === undefined) {
      this._power = new Element();
    }
    return this._power;
  }

  setPowerElement(powerElement: Element | undefined): this {
    this._power = powerElement;
    return this;
  }

  /** Contact lens back curvature (0..1) */
  getBackCurve(): number | undefined {
    return this.backCurve;
  }

  /** Sets `backCurve`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setBackCurve(backCurve: number | undefined): this {
    return this.setFieldValue('backCurve', backCurve);
  }

  hasBackCurve(): boolean {
    return this.hasFieldValue('backCurve');
  }

  /** The element carrying the id and extensions of `backCurve`. Created when absent. */
  getBackCurveElement(): Element {
    if (this._backCurve === undefined) {
      this._backCurve = new Element();
    }
    return this._backCurve;
  }

  setBackCurveElement(backCurveElement: Element | undefined): this {
    this._backCurve = backCurveElement;
    return this;
  }

  /** Contact lens diameter (0..1) */
  getDiameter(): number | undefined {
    return this.diameter;
  }

  /** Sets `diameter`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setDiameter(diameter: number | undefined): this {
    return this.setFieldValue('diameter', diameter);
  }

  hasDiameter(): boolean {
    return this.hasFieldValue('diameter');
  }

  /** The element carrying the id and extensions of `diameter`. Created when absent. */
  getDiameterElement(): Element {
    if (this._diameter === undefined) {
      this._diameter = new Element();
    }
    return this._diameter;
  }

  setDiameterElement(diameterElement: Element | undefined): this {
    this._diameter = diameterElement;
    return this;
  }

  /** Lens wear duration (0..1) Created when absent. */
  getDuration(): Quantity {
    if (this.duration === undefined) {
      this.duration = new Quantity();
    }
    return this.duration;
  }

  setDuration(duration: Quantity | undefined): this {
    return this.setFieldValue('duration', duration);
  }

  hasDuration(): boolean {
    return this.hasFieldValue('duration');
  }

  /** Color required (0..1) */
  getColor(): string | undefined {
    return this.color;
  }

  /** Sets `color`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setColor(color: string | undefined): this {
    return this.setFieldValue('color', color);
  }

  hasColor(): boolean {
    return this.hasFieldValue('color');
  }

  /** The element carrying the id and extensions of `color`. Created when absent. */
  getColorElement(): Element {
    if (this._color === undefined) {
      this._color = new Element();
    }
    return this._color;
  }

  setColorElement(colorElement: Element | undefined): this {
    this._color = colorElement;
    return this;
  }

  /** Brand required (0..1) */
  getBrand(): string | undefined {
    return this.brand;
  }

  /** Sets `brand`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setBrand(brand: string | undefined): this {
    return this.setFieldValue('brand', brand);
  }

  hasBrand(): boolean {
    return this.hasFieldValue('brand');
  }

  /** The element carrying the id and extensions of `brand`. Created when absent. */
  getBrandElement(): Element {
    if (this._brand === undefined) {
      this._brand = new Element();
    }
    return this._brand;
  }

  setBrandElement(brandElement: Element | undefined): this {
    this._brand = brandElement;
    return this;
  }

  /** Notes for coatings (0..*) Never undefined; an empty list is created when absent. */
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

modelTypeRegistry.register('VisionPrescriptionDispense', VisionPrescriptionDispense, false);
