/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Quantity } from './quantity';
import { Range } from './range';
import { Reference } from './reference';

/**
 * Base StructureDefinition for Group Resource
 */
export class Group extends DomainResource {
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
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.GroupType }],
    },
    {
      elementName: 'actual',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'actual', typeCode: 'boolean' }],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'unsignedInt' }],
    },
    {
      elementName: 'characteristic',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'characteristic', typeCode: 'GroupCharacteristic' }],
    },
    {
      elementName: 'member',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'member', typeCode: 'GroupMember' }],
    },
  ];

  readonly resourceType = 'Group';

  /** Unique id (0..*) */
  identifier?: Identifier[];

  /** Whether this group's record is in active use (0..1) */
  active?: boolean;
  /** Id and extensions of the primitive `active`. */
  _active?: Element;

  /** person | animal | practitioner | device | medication | substance (1..1) */
  type?: valueSetCodes.GroupType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Descriptive or actual (1..1) */
  actual?: boolean;
  /** Id and extensions of the primitive `actual`. */
  _actual?: Element;

  /** Kind of Group members (0..1) */
  code?: CodeableConcept;

  /** Label for Group (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Number of members (0..1) */
  quantity?: number;
  /** Id and extensions of the primitive `quantity`. */
  _quantity?: Element;

  /** Trait of group members (0..*) */
  characteristic?: GroupCharacteristic[];

  /** Who or what is in group (0..*) */
  member?: GroupMember[];

  override fhirType(): string {
    return 'Group';
  }

  /** FHIR JSON for this Group, typed as the plain `Group` data type. */
  override toJSON(): plainTypes.Group {
    return this.serialize() as plainTypes.Group;
  }

  /** Unique id (0..*) Never undefined; an empty list is created when absent. */
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

  /** Whether this group's record is in active use (0..1) */
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

  /** person | animal | practitioner | device | medication | substance (1..1) */
  getType(): valueSetCodes.GroupType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.GroupType | undefined): this {
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

  /** Descriptive or actual (1..1) */
  getActual(): boolean | undefined {
    return this.actual;
  }

  /** Sets `actual`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setActual(actual: boolean | undefined): this {
    return this.setFieldValue('actual', actual);
  }

  hasActual(): boolean {
    return this.hasFieldValue('actual');
  }

  /** The element carrying the id and extensions of `actual`. Created when absent. */
  getActualElement(): Element {
    if (this._actual === undefined) {
      this._actual = new Element();
    }
    return this._actual;
  }

  setActualElement(actualElement: Element | undefined): this {
    this._actual = actualElement;
    return this;
  }

  /** Kind of Group members (0..1) Created when absent. */
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

  /** Label for Group (0..1) */
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

  /** Number of members (0..1) */
  getQuantity(): number | undefined {
    return this.quantity;
  }

  /** Sets `quantity`. Throws a FhirModelError when the value is not a valid FHIR unsignedInt. */
  setQuantity(quantity: number | undefined): this {
    return this.setFieldValue('quantity', quantity);
  }

  hasQuantity(): boolean {
    return this.hasFieldValue('quantity');
  }

  /** The element carrying the id and extensions of `quantity`. Created when absent. */
  getQuantityElement(): Element {
    if (this._quantity === undefined) {
      this._quantity = new Element();
    }
    return this._quantity;
  }

  setQuantityElement(quantityElement: Element | undefined): this {
    this._quantity = quantityElement;
    return this;
  }

  /** Trait of group members (0..*) Never undefined; an empty list is created when absent. */
  getCharacteristic(): GroupCharacteristic[] {
    if (this.characteristic === undefined) {
      this.characteristic = [];
    }
    return this.characteristic;
  }

  setCharacteristic(characteristic: GroupCharacteristic[] | undefined): this {
    return this.setFieldValue('characteristic', characteristic);
  }

  hasCharacteristic(): boolean {
    return this.hasFieldValue('characteristic');
  }

  /** Appends a new, empty GroupCharacteristic to `characteristic` and returns it so it can be filled in. */
  addCharacteristic(): GroupCharacteristic;
  /** Appends the given GroupCharacteristic to `characteristic` and returns this object for chaining. */
  addCharacteristic(groupCharacteristic: GroupCharacteristic): this;
  addCharacteristic(groupCharacteristic?: GroupCharacteristic): GroupCharacteristic | this {
    if (groupCharacteristic !== undefined) {
      return this.addFieldValue('characteristic', groupCharacteristic);
    }
    const createdGroupCharacteristic = new GroupCharacteristic();
    this.addFieldValue('characteristic', createdGroupCharacteristic);
    return createdGroupCharacteristic;
  }

  /** The first GroupCharacteristic of `characteristic`. One is added when the list is empty. */
  getCharacteristicFirstRep(): GroupCharacteristic {
    const firstGroupCharacteristic = this.getCharacteristic()[0];
    return firstGroupCharacteristic === undefined
      ? this.addCharacteristic()
      : firstGroupCharacteristic;
  }

  /** Who or what is in group (0..*) Never undefined; an empty list is created when absent. */
  getMember(): GroupMember[] {
    if (this.member === undefined) {
      this.member = [];
    }
    return this.member;
  }

  setMember(member: GroupMember[] | undefined): this {
    return this.setFieldValue('member', member);
  }

  hasMember(): boolean {
    return this.hasFieldValue('member');
  }

  /** Appends a new, empty GroupMember to `member` and returns it so it can be filled in. */
  addMember(): GroupMember;
  /** Appends the given GroupMember to `member` and returns this object for chaining. */
  addMember(groupMember: GroupMember): this;
  addMember(groupMember?: GroupMember): GroupMember | this {
    if (groupMember !== undefined) {
      return this.addFieldValue('member', groupMember);
    }
    const createdGroupMember = new GroupMember();
    this.addFieldValue('member', createdGroupMember);
    return createdGroupMember;
  }

  /** The first GroupMember of `member`. One is added when the list is empty. */
  getMemberFirstRep(): GroupMember {
    const firstGroupMember = this.getMember()[0];
    return firstGroupMember === undefined ? this.addMember() : firstGroupMember;
  }
}

modelTypeRegistry.register('Group', Group, true);

/** True when the value is a Group model instance. */
export function isGroup(candidate: unknown): candidate is Group {
  return candidate instanceof Group;
}

/**
 * Trait of group members
 */
export class GroupCharacteristic extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'value',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'valueCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'valueBoolean', typeCode: 'boolean' },
        { jsonKey: 'valueQuantity', typeCode: 'Quantity' },
        { jsonKey: 'valueRange', typeCode: 'Range' },
      ],
    },
    {
      elementName: 'exclude',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'exclude', typeCode: 'boolean' }],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
  ];

  /** Kind of characteristic (1..1) */
  code?: CodeableConcept;

  /** Value held by characteristic (1..1) */
  valueCodeableConcept?: CodeableConcept;
  /** Value held by characteristic (1..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Value held by characteristic (1..1) */
  valueQuantity?: Quantity;
  /** Value held by characteristic (1..1) */
  valueRange?: Range;

  /** Group includes or excludes (1..1) */
  exclude?: boolean;
  /** Id and extensions of the primitive `exclude`. */
  _exclude?: Element;

  /** Period over which characteristic is tested (0..1) */
  period?: Period;

  override fhirType(): string {
    return 'Group.characteristic';
  }

  /** FHIR JSON for this GroupCharacteristic, typed as the plain `GroupCharacteristic` data type. */
  override toJSON(): plainTypes.GroupCharacteristic {
    return this.serialize() as plainTypes.GroupCharacteristic;
  }

  /** Kind of characteristic (1..1) Created when absent. */
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

  /** Value held by characteristic (1..1) Whichever type of `value[x]` is set. */
  getValue(): CodeableConcept | boolean | Quantity | Range | undefined {
    return this.getChoiceValue<CodeableConcept | boolean | Quantity | Range>('value');
  }

  /** True when any type of `value[x]` is set. */
  hasValue(): boolean {
    return this.hasChoiceValue('value');
  }

  getValueCodeableConcept(): CodeableConcept | undefined {
    return this.valueCodeableConcept;
  }

  /** Sets `value[x]` as CodeableConcept and clears every other type of it. */
  setValueCodeableConcept(valueCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('valueCodeableConcept', valueCodeableConcept);
  }

  hasValueCodeableConcept(): boolean {
    return this.hasFieldValue('valueCodeableConcept');
  }

  getValueBoolean(): boolean | undefined {
    return this.valueBoolean;
  }

  /** Sets `value[x]` as boolean and clears every other type of it. */
  setValueBoolean(valueBoolean: boolean | undefined): this {
    return this.setFieldValue('valueBoolean', valueBoolean);
  }

  hasValueBoolean(): boolean {
    return this.hasFieldValue('valueBoolean');
  }

  getValueQuantity(): Quantity | undefined {
    return this.valueQuantity;
  }

  /** Sets `value[x]` as Quantity and clears every other type of it. */
  setValueQuantity(valueQuantity: Quantity | undefined): this {
    return this.setFieldValue('valueQuantity', valueQuantity);
  }

  hasValueQuantity(): boolean {
    return this.hasFieldValue('valueQuantity');
  }

  getValueRange(): Range | undefined {
    return this.valueRange;
  }

  /** Sets `value[x]` as Range and clears every other type of it. */
  setValueRange(valueRange: Range | undefined): this {
    return this.setFieldValue('valueRange', valueRange);
  }

  hasValueRange(): boolean {
    return this.hasFieldValue('valueRange');
  }

  /** Group includes or excludes (1..1) */
  getExclude(): boolean | undefined {
    return this.exclude;
  }

  /** Sets `exclude`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setExclude(exclude: boolean | undefined): this {
    return this.setFieldValue('exclude', exclude);
  }

  hasExclude(): boolean {
    return this.hasFieldValue('exclude');
  }

  /** The element carrying the id and extensions of `exclude`. Created when absent. */
  getExcludeElement(): Element {
    if (this._exclude === undefined) {
      this._exclude = new Element();
    }
    return this._exclude;
  }

  setExcludeElement(excludeElement: Element | undefined): this {
    this._exclude = excludeElement;
    return this;
  }

  /** Period over which characteristic is tested (0..1) Created when absent. */
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

modelTypeRegistry.register('GroupCharacteristic', GroupCharacteristic, false);

/**
 * Who or what is in group
 */
export class GroupMember extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'entity',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'entity',
          typeCode: 'Reference',
          targetResourceTypes: ['Device', 'Medication', 'Patient', 'Practitioner', 'Substance'],
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
    {
      elementName: 'inactive',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'inactive', typeCode: 'boolean' }],
    },
  ];

  /** Reference to the group member (1..1) */
  entity?: Reference;

  /** Period member belonged to the group (0..1) */
  period?: Period;

  /** If member is no longer in group (0..1) */
  inactive?: boolean;
  /** Id and extensions of the primitive `inactive`. */
  _inactive?: Element;

  override fhirType(): string {
    return 'Group.member';
  }

  /** FHIR JSON for this GroupMember, typed as the plain `GroupMember` data type. */
  override toJSON(): plainTypes.GroupMember {
    return this.serialize() as plainTypes.GroupMember;
  }

  /** Reference to the group member (1..1) Created when absent. */
  getEntity(): Reference {
    if (this.entity === undefined) {
      this.entity = new Reference();
    }
    return this.entity;
  }

  setEntity(entity: Reference | undefined): this {
    return this.setFieldValue('entity', entity);
  }

  hasEntity(): boolean {
    return this.hasFieldValue('entity');
  }

  /** Period member belonged to the group (0..1) Created when absent. */
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

  /** If member is no longer in group (0..1) */
  getInactive(): boolean | undefined {
    return this.inactive;
  }

  /** Sets `inactive`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setInactive(inactive: boolean | undefined): this {
    return this.setFieldValue('inactive', inactive);
  }

  hasInactive(): boolean {
    return this.hasFieldValue('inactive');
  }

  /** The element carrying the id and extensions of `inactive`. Created when absent. */
  getInactiveElement(): Element {
    if (this._inactive === undefined) {
      this._inactive = new Element();
    }
    return this._inactive;
  }

  setInactiveElement(inactiveElement: Element | undefined): this {
    this._inactive = inactiveElement;
    return this;
  }
}

modelTypeRegistry.register('GroupMember', GroupMember, false);
