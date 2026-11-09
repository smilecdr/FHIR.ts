/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../models';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';

/**
 * A record of association of a device.
 */
export class DeviceAssociation extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'device',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'device', typeCode: 'Reference', targetResourceTypes: ['Device'] }],
    },
    {
      elementName: 'category',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'status', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'statusReason',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'statusReason', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'subject',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'subject',
          typeCode: 'Reference',
          targetResourceTypes: ['Device', 'Group', 'Patient', 'Practitioner', 'RelatedPerson'],
        },
      ],
    },
    {
      elementName: 'bodyStructure',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'bodyStructure', typeCode: 'Reference', targetResourceTypes: ['BodyStructure'] },
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
      elementName: 'operation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'operation', typeCode: 'DeviceAssociationOperation' }],
    },
  ];

  readonly resourceType = 'DeviceAssociation';

  /** Instance identifier (0..*) */
  identifier?: Identifier[];

  /** Reference to the devices associated with the patient or group (1..1) */
  device?: Reference;

  /** Describes the relationship between the device and subject (0..*) */
  category?: CodeableConcept[];

  /** implanted | explanted | attached | entered-in-error | unknown (1..1) */
  status?: CodeableConcept;

  /** The reasons given for the current association status (0..*) */
  statusReason?: CodeableConcept[];

  /** The individual, group of individuals or device that the device is on or associated with (0..1) */
  subject?: Reference;

  /** Current anatomical location of the device in/on subject (0..1) */
  bodyStructure?: Reference;

  /** Begin and end dates and times for the device association (0..1) */
  period?: Period;

  /** The details about the device when it is in use to describe its operation (0..*) */
  operation?: DeviceAssociationOperation[];

  override fhirType(): string {
    return 'DeviceAssociation';
  }

  /** FHIR JSON for this DeviceAssociation, typed as the plain `DeviceAssociation` data type. */
  override toJSON(): plainTypes.DeviceAssociation {
    return this.serialize() as plainTypes.DeviceAssociation;
  }

  /** Instance identifier (0..*) Never undefined; an empty list is created when absent. */
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

  /** Reference to the devices associated with the patient or group (1..1) Created when absent. */
  getDevice(): Reference {
    if (this.device === undefined) {
      this.device = new Reference();
    }
    return this.device;
  }

  setDevice(device: Reference | undefined): this {
    return this.setFieldValue('device', device);
  }

  hasDevice(): boolean {
    return this.hasFieldValue('device');
  }

  /** Describes the relationship between the device and subject (0..*) Never undefined; an empty list is created when absent. */
  getCategory(): CodeableConcept[] {
    if (this.category === undefined) {
      this.category = [];
    }
    return this.category;
  }

  setCategory(category: CodeableConcept[] | undefined): this {
    return this.setFieldValue('category', category);
  }

  hasCategory(): boolean {
    return this.hasFieldValue('category');
  }

  /** Appends a new, empty CodeableConcept to `category` and returns it so it can be filled in. */
  addCategory(): CodeableConcept;
  /** Appends the given CodeableConcept to `category` and returns this object for chaining. */
  addCategory(codeableConcept: CodeableConcept): this;
  addCategory(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('category', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('category', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `category`. One is added when the list is empty. */
  getCategoryFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getCategory()[0];
    return firstCodeableConcept === undefined ? this.addCategory() : firstCodeableConcept;
  }

  /** implanted | explanted | attached | entered-in-error | unknown (1..1) Created when absent. */
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

  /** The reasons given for the current association status (0..*) Never undefined; an empty list is created when absent. */
  getStatusReason(): CodeableConcept[] {
    if (this.statusReason === undefined) {
      this.statusReason = [];
    }
    return this.statusReason;
  }

  setStatusReason(statusReason: CodeableConcept[] | undefined): this {
    return this.setFieldValue('statusReason', statusReason);
  }

  hasStatusReason(): boolean {
    return this.hasFieldValue('statusReason');
  }

  /** Appends a new, empty CodeableConcept to `statusReason` and returns it so it can be filled in. */
  addStatusReason(): CodeableConcept;
  /** Appends the given CodeableConcept to `statusReason` and returns this object for chaining. */
  addStatusReason(codeableConcept: CodeableConcept): this;
  addStatusReason(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('statusReason', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('statusReason', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `statusReason`. One is added when the list is empty. */
  getStatusReasonFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getStatusReason()[0];
    return firstCodeableConcept === undefined ? this.addStatusReason() : firstCodeableConcept;
  }

  /** The individual, group of individuals or device that the device is on or associated with (0..1) Created when absent. */
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

  /** Current anatomical location of the device in/on subject (0..1) Created when absent. */
  getBodyStructure(): Reference {
    if (this.bodyStructure === undefined) {
      this.bodyStructure = new Reference();
    }
    return this.bodyStructure;
  }

  setBodyStructure(bodyStructure: Reference | undefined): this {
    return this.setFieldValue('bodyStructure', bodyStructure);
  }

  hasBodyStructure(): boolean {
    return this.hasFieldValue('bodyStructure');
  }

  /** Begin and end dates and times for the device association (0..1) Created when absent. */
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

  /** The details about the device when it is in use to describe its operation (0..*) Never undefined; an empty list is created when absent. */
  getOperation(): DeviceAssociationOperation[] {
    if (this.operation === undefined) {
      this.operation = [];
    }
    return this.operation;
  }

  setOperation(operation: DeviceAssociationOperation[] | undefined): this {
    return this.setFieldValue('operation', operation);
  }

  hasOperation(): boolean {
    return this.hasFieldValue('operation');
  }

  /** Appends a new, empty DeviceAssociationOperation to `operation` and returns it so it can be filled in. */
  addOperation(): DeviceAssociationOperation;
  /** Appends the given DeviceAssociationOperation to `operation` and returns this object for chaining. */
  addOperation(deviceAssociationOperation: DeviceAssociationOperation): this;
  addOperation(
    deviceAssociationOperation?: DeviceAssociationOperation
  ): DeviceAssociationOperation | this {
    if (deviceAssociationOperation !== undefined) {
      return this.addFieldValue('operation', deviceAssociationOperation);
    }
    const createdDeviceAssociationOperation = new DeviceAssociationOperation();
    this.addFieldValue('operation', createdDeviceAssociationOperation);
    return createdDeviceAssociationOperation;
  }

  /** The first DeviceAssociationOperation of `operation`. One is added when the list is empty. */
  getOperationFirstRep(): DeviceAssociationOperation {
    const firstDeviceAssociationOperation = this.getOperation()[0];
    return firstDeviceAssociationOperation === undefined
      ? this.addOperation()
      : firstDeviceAssociationOperation;
  }
}

modelTypeRegistry.register('DeviceAssociation', DeviceAssociation, true);

/** True when the value is a DeviceAssociation model instance. */
export function isDeviceAssociation(candidate: unknown): candidate is DeviceAssociation {
  return candidate instanceof DeviceAssociation;
}

/**
 * The details about the device when it is in use to describe its operation
 */
export class DeviceAssociationOperation extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'status', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'operator',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'operator',
          typeCode: 'Reference',
          targetResourceTypes: ['Patient', 'Practitioner', 'RelatedPerson'],
        },
      ],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
  ];

  /** Device operational condition (1..1) */
  status?: CodeableConcept;

  /** The individual performing the action enabled by the device (0..*) */
  operator?: Reference[];

  /** Begin and end dates and times for the device's operation (0..1) */
  period?: Period;

  override fhirType(): string {
    return 'DeviceAssociation.operation';
  }

  /** FHIR JSON for this DeviceAssociationOperation, typed as the plain `DeviceAssociationOperation` data type. */
  override toJSON(): plainTypes.DeviceAssociationOperation {
    return this.serialize() as plainTypes.DeviceAssociationOperation;
  }

  /** Device operational condition (1..1) Created when absent. */
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

  /** The individual performing the action enabled by the device (0..*) Never undefined; an empty list is created when absent. */
  getOperator(): Reference[] {
    if (this.operator === undefined) {
      this.operator = [];
    }
    return this.operator;
  }

  setOperator(operator: Reference[] | undefined): this {
    return this.setFieldValue('operator', operator);
  }

  hasOperator(): boolean {
    return this.hasFieldValue('operator');
  }

  /** Appends a new, empty Reference to `operator` and returns it so it can be filled in. */
  addOperator(): Reference;
  /** Appends the given Reference to `operator` and returns this object for chaining. */
  addOperator(reference: Reference): this;
  addOperator(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('operator', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('operator', createdReference);
    return createdReference;
  }

  /** The first Reference of `operator`. One is added when the list is empty. */
  getOperatorFirstRep(): Reference {
    const firstReference = this.getOperator()[0];
    return firstReference === undefined ? this.addOperator() : firstReference;
  }

  /** Begin and end dates and times for the device's operation (0..1) Created when absent. */
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
}

modelTypeRegistry.register('DeviceAssociationOperation', DeviceAssociationOperation, false);
