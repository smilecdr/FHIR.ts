/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { Address } from './address';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { Coding } from './coding';
import { ContactPoint } from './contactPoint';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Reference } from './reference';

/**
 * Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated.
 */
export class Location extends DomainResource {
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
      types: [{ jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.LocationStatus }],
    },
    {
      elementName: 'operationalStatus',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'operationalStatus', typeCode: 'Coding' }],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'alias',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'alias', typeCode: 'string' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'mode',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'mode', typeCode: 'code', allowedCodes: valueSetCodes.LocationMode }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'telecom',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'telecom', typeCode: 'ContactPoint' }],
    },
    {
      elementName: 'address',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'address', typeCode: 'Address' }],
    },
    {
      elementName: 'physicalType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'physicalType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'position',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'position', typeCode: 'LocationPosition' }],
    },
    {
      elementName: 'managingOrganization',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'managingOrganization',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization'],
        },
      ],
    },
    {
      elementName: 'partOf',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'partOf', typeCode: 'Reference', targetResourceTypes: ['Location'] }],
    },
    {
      elementName: 'hoursOfOperation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'hoursOfOperation', typeCode: 'LocationHoursOfOperation' }],
    },
    {
      elementName: 'availabilityExceptions',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'availabilityExceptions', typeCode: 'string' }],
    },
    {
      elementName: 'endpoint',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'endpoint', typeCode: 'Reference', targetResourceTypes: ['Endpoint'] }],
    },
  ];

  readonly resourceType = 'Location';

  /** Unique code or number identifying the location to its users (0..*) */
  identifier?: Identifier[];

  /** active | suspended | inactive (0..1) */
  status?: valueSetCodes.LocationStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** The operational status of the location (typically only for a bed/room) (0..1) */
  operationalStatus?: Coding;

  /** Name of the location as used by humans (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** A list of alternate names that the location is known as, or was known as, in the past (0..*) */
  alias?: string[];
  /** Id and extensions of the primitive `alias`. */
  _alias?: (Element | null)[];

  /** Additional details about the location that could be displayed as further information to identify the location beyond its name (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** instance | kind (0..1) */
  mode?: valueSetCodes.LocationMode;
  /** Id and extensions of the primitive `mode`. */
  _mode?: Element;

  /** Type of function performed (0..*) */
  type?: CodeableConcept[];

  /** Contact details of the location (0..*) */
  telecom?: ContactPoint[];

  /** Physical location (0..1) */
  address?: Address;

  /** Physical form of the location (0..1) */
  physicalType?: CodeableConcept;

  /** The absolute geographic location (0..1) */
  position?: LocationPosition;

  /** Organization responsible for provisioning and upkeep (0..1) */
  managingOrganization?: Reference;

  /** Another Location this one is physically a part of (0..1) */
  partOf?: Reference;

  /** What days/times during a week is this location usually open (0..*) */
  hoursOfOperation?: LocationHoursOfOperation[];

  /** Description of availability exceptions (0..1) */
  availabilityExceptions?: string;
  /** Id and extensions of the primitive `availabilityExceptions`. */
  _availabilityExceptions?: Element;

  /** Technical endpoints providing access to services operated for the location (0..*) */
  endpoint?: Reference[];

  override fhirType(): string {
    return 'Location';
  }

  /** FHIR JSON for this Location, typed as the plain `Location` data type. */
  override toJSON(): plainTypes.Location {
    return this.serialize() as plainTypes.Location;
  }

  /** Unique code or number identifying the location to its users (0..*) Never undefined; an empty list is created when absent. */
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

  /** active | suspended | inactive (0..1) */
  getStatus(): valueSetCodes.LocationStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.LocationStatus | undefined): this {
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

  /** The operational status of the location (typically only for a bed/room) (0..1) Created when absent. */
  getOperationalStatus(): Coding {
    if (this.operationalStatus === undefined) {
      this.operationalStatus = new Coding();
    }
    return this.operationalStatus;
  }

  setOperationalStatus(operationalStatus: Coding | undefined): this {
    return this.setFieldValue('operationalStatus', operationalStatus);
  }

  hasOperationalStatus(): boolean {
    return this.hasFieldValue('operationalStatus');
  }

  /** Name of the location as used by humans (0..1) */
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

  /** A list of alternate names that the location is known as, or was known as, in the past (0..*) Never undefined; an empty list is created when absent. */
  getAlias(): string[] {
    if (this.alias === undefined) {
      this.alias = [];
    }
    return this.alias;
  }

  setAlias(alias: string[] | undefined): this {
    return this.setFieldValue('alias', alias);
  }

  hasAlias(): boolean {
    return this.hasFieldValue('alias');
  }

  /** Appends one value to `alias`. Throws a FhirModelError when it is not a valid FHIR string. */
  addAlias(alias: string): this {
    return this.addFieldValue('alias', alias);
  }

  /** Additional details about the location that could be displayed as further information to identify the location beyond its name (0..1) */
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

  /** instance | kind (0..1) */
  getMode(): valueSetCodes.LocationMode | undefined {
    return this.mode;
  }

  /** Sets `mode`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setMode(mode: valueSetCodes.LocationMode | undefined): this {
    return this.setFieldValue('mode', mode);
  }

  hasMode(): boolean {
    return this.hasFieldValue('mode');
  }

  /** The element carrying the id and extensions of `mode`. Created when absent. */
  getModeElement(): Element {
    if (this._mode === undefined) {
      this._mode = new Element();
    }
    return this._mode;
  }

  setModeElement(modeElement: Element | undefined): this {
    this._mode = modeElement;
    return this;
  }

  /** Type of function performed (0..*) Never undefined; an empty list is created when absent. */
  getType(): CodeableConcept[] {
    if (this.type === undefined) {
      this.type = [];
    }
    return this.type;
  }

  setType(type: CodeableConcept[] | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Appends a new, empty CodeableConcept to `type` and returns it so it can be filled in. */
  addType(): CodeableConcept;
  /** Appends the given CodeableConcept to `type` and returns this object for chaining. */
  addType(codeableConcept: CodeableConcept): this;
  addType(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('type', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('type', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `type`. One is added when the list is empty. */
  getTypeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getType()[0];
    return firstCodeableConcept === undefined ? this.addType() : firstCodeableConcept;
  }

  /** Contact details of the location (0..*) Never undefined; an empty list is created when absent. */
  getTelecom(): ContactPoint[] {
    if (this.telecom === undefined) {
      this.telecom = [];
    }
    return this.telecom;
  }

  setTelecom(telecom: ContactPoint[] | undefined): this {
    return this.setFieldValue('telecom', telecom);
  }

  hasTelecom(): boolean {
    return this.hasFieldValue('telecom');
  }

  /** Appends a new, empty ContactPoint to `telecom` and returns it so it can be filled in. */
  addTelecom(): ContactPoint;
  /** Appends the given ContactPoint to `telecom` and returns this object for chaining. */
  addTelecom(contactPoint: ContactPoint): this;
  addTelecom(contactPoint?: ContactPoint): ContactPoint | this {
    if (contactPoint !== undefined) {
      return this.addFieldValue('telecom', contactPoint);
    }
    const createdContactPoint = new ContactPoint();
    this.addFieldValue('telecom', createdContactPoint);
    return createdContactPoint;
  }

  /** The first ContactPoint of `telecom`. One is added when the list is empty. */
  getTelecomFirstRep(): ContactPoint {
    const firstContactPoint = this.getTelecom()[0];
    return firstContactPoint === undefined ? this.addTelecom() : firstContactPoint;
  }

  /** Physical location (0..1) Created when absent. */
  getAddress(): Address {
    if (this.address === undefined) {
      this.address = new Address();
    }
    return this.address;
  }

  setAddress(address: Address | undefined): this {
    return this.setFieldValue('address', address);
  }

  hasAddress(): boolean {
    return this.hasFieldValue('address');
  }

  /** Physical form of the location (0..1) Created when absent. */
  getPhysicalType(): CodeableConcept {
    if (this.physicalType === undefined) {
      this.physicalType = new CodeableConcept();
    }
    return this.physicalType;
  }

  setPhysicalType(physicalType: CodeableConcept | undefined): this {
    return this.setFieldValue('physicalType', physicalType);
  }

  hasPhysicalType(): boolean {
    return this.hasFieldValue('physicalType');
  }

  /** The absolute geographic location (0..1) Created when absent. */
  getPosition(): LocationPosition {
    if (this.position === undefined) {
      this.position = new LocationPosition();
    }
    return this.position;
  }

  setPosition(position: LocationPosition | undefined): this {
    return this.setFieldValue('position', position);
  }

  hasPosition(): boolean {
    return this.hasFieldValue('position');
  }

  /** Organization responsible for provisioning and upkeep (0..1) Created when absent. */
  getManagingOrganization(): Reference {
    if (this.managingOrganization === undefined) {
      this.managingOrganization = new Reference();
    }
    return this.managingOrganization;
  }

  setManagingOrganization(managingOrganization: Reference | undefined): this {
    return this.setFieldValue('managingOrganization', managingOrganization);
  }

  hasManagingOrganization(): boolean {
    return this.hasFieldValue('managingOrganization');
  }

  /** Another Location this one is physically a part of (0..1) Created when absent. */
  getPartOf(): Reference {
    if (this.partOf === undefined) {
      this.partOf = new Reference();
    }
    return this.partOf;
  }

  setPartOf(partOf: Reference | undefined): this {
    return this.setFieldValue('partOf', partOf);
  }

  hasPartOf(): boolean {
    return this.hasFieldValue('partOf');
  }

  /** What days/times during a week is this location usually open (0..*) Never undefined; an empty list is created when absent. */
  getHoursOfOperation(): LocationHoursOfOperation[] {
    if (this.hoursOfOperation === undefined) {
      this.hoursOfOperation = [];
    }
    return this.hoursOfOperation;
  }

  setHoursOfOperation(hoursOfOperation: LocationHoursOfOperation[] | undefined): this {
    return this.setFieldValue('hoursOfOperation', hoursOfOperation);
  }

  hasHoursOfOperation(): boolean {
    return this.hasFieldValue('hoursOfOperation');
  }

  /** Appends a new, empty LocationHoursOfOperation to `hoursOfOperation` and returns it so it can be filled in. */
  addHoursOfOperation(): LocationHoursOfOperation;
  /** Appends the given LocationHoursOfOperation to `hoursOfOperation` and returns this object for chaining. */
  addHoursOfOperation(locationHoursOfOperation: LocationHoursOfOperation): this;
  addHoursOfOperation(
    locationHoursOfOperation?: LocationHoursOfOperation
  ): LocationHoursOfOperation | this {
    if (locationHoursOfOperation !== undefined) {
      return this.addFieldValue('hoursOfOperation', locationHoursOfOperation);
    }
    const createdLocationHoursOfOperation = new LocationHoursOfOperation();
    this.addFieldValue('hoursOfOperation', createdLocationHoursOfOperation);
    return createdLocationHoursOfOperation;
  }

  /** The first LocationHoursOfOperation of `hoursOfOperation`. One is added when the list is empty. */
  getHoursOfOperationFirstRep(): LocationHoursOfOperation {
    const firstLocationHoursOfOperation = this.getHoursOfOperation()[0];
    return firstLocationHoursOfOperation === undefined
      ? this.addHoursOfOperation()
      : firstLocationHoursOfOperation;
  }

  /** Description of availability exceptions (0..1) */
  getAvailabilityExceptions(): string | undefined {
    return this.availabilityExceptions;
  }

  /** Sets `availabilityExceptions`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setAvailabilityExceptions(availabilityExceptions: string | undefined): this {
    return this.setFieldValue('availabilityExceptions', availabilityExceptions);
  }

  hasAvailabilityExceptions(): boolean {
    return this.hasFieldValue('availabilityExceptions');
  }

  /** The element carrying the id and extensions of `availabilityExceptions`. Created when absent. */
  getAvailabilityExceptionsElement(): Element {
    if (this._availabilityExceptions === undefined) {
      this._availabilityExceptions = new Element();
    }
    return this._availabilityExceptions;
  }

  setAvailabilityExceptionsElement(availabilityExceptionsElement: Element | undefined): this {
    this._availabilityExceptions = availabilityExceptionsElement;
    return this;
  }

  /** Technical endpoints providing access to services operated for the location (0..*) Never undefined; an empty list is created when absent. */
  getEndpoint(): Reference[] {
    if (this.endpoint === undefined) {
      this.endpoint = [];
    }
    return this.endpoint;
  }

  setEndpoint(endpoint: Reference[] | undefined): this {
    return this.setFieldValue('endpoint', endpoint);
  }

  hasEndpoint(): boolean {
    return this.hasFieldValue('endpoint');
  }

  /** Appends a new, empty Reference to `endpoint` and returns it so it can be filled in. */
  addEndpoint(): Reference;
  /** Appends the given Reference to `endpoint` and returns this object for chaining. */
  addEndpoint(reference: Reference): this;
  addEndpoint(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('endpoint', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('endpoint', createdReference);
    return createdReference;
  }

  /** The first Reference of `endpoint`. One is added when the list is empty. */
  getEndpointFirstRep(): Reference {
    const firstReference = this.getEndpoint()[0];
    return firstReference === undefined ? this.addEndpoint() : firstReference;
  }
}

modelTypeRegistry.register('Location', Location, true);

/** True when the value is a Location model instance. */
export function isLocation(candidate: unknown): candidate is Location {
  return candidate instanceof Location;
}

/**
 * The absolute geographic location
 */
export class LocationPosition extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'longitude',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'longitude', typeCode: 'decimal' }],
    },
    {
      elementName: 'latitude',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'latitude', typeCode: 'decimal' }],
    },
    {
      elementName: 'altitude',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'altitude', typeCode: 'decimal' }],
    },
  ];

  /** Longitude with WGS84 datum (1..1) */
  longitude?: number;
  /** Id and extensions of the primitive `longitude`. */
  _longitude?: Element;

  /** Latitude with WGS84 datum (1..1) */
  latitude?: number;
  /** Id and extensions of the primitive `latitude`. */
  _latitude?: Element;

  /** Altitude with WGS84 datum (0..1) */
  altitude?: number;
  /** Id and extensions of the primitive `altitude`. */
  _altitude?: Element;

  override fhirType(): string {
    return 'Location.position';
  }

  /** FHIR JSON for this LocationPosition, typed as the plain `LocationPosition` data type. */
  override toJSON(): plainTypes.LocationPosition {
    return this.serialize() as plainTypes.LocationPosition;
  }

  /** Longitude with WGS84 datum (1..1) */
  getLongitude(): number | undefined {
    return this.longitude;
  }

  /** Sets `longitude`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setLongitude(longitude: number | undefined): this {
    return this.setFieldValue('longitude', longitude);
  }

  hasLongitude(): boolean {
    return this.hasFieldValue('longitude');
  }

  /** The element carrying the id and extensions of `longitude`. Created when absent. */
  getLongitudeElement(): Element {
    if (this._longitude === undefined) {
      this._longitude = new Element();
    }
    return this._longitude;
  }

  setLongitudeElement(longitudeElement: Element | undefined): this {
    this._longitude = longitudeElement;
    return this;
  }

  /** Latitude with WGS84 datum (1..1) */
  getLatitude(): number | undefined {
    return this.latitude;
  }

  /** Sets `latitude`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setLatitude(latitude: number | undefined): this {
    return this.setFieldValue('latitude', latitude);
  }

  hasLatitude(): boolean {
    return this.hasFieldValue('latitude');
  }

  /** The element carrying the id and extensions of `latitude`. Created when absent. */
  getLatitudeElement(): Element {
    if (this._latitude === undefined) {
      this._latitude = new Element();
    }
    return this._latitude;
  }

  setLatitudeElement(latitudeElement: Element | undefined): this {
    this._latitude = latitudeElement;
    return this;
  }

  /** Altitude with WGS84 datum (0..1) */
  getAltitude(): number | undefined {
    return this.altitude;
  }

  /** Sets `altitude`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setAltitude(altitude: number | undefined): this {
    return this.setFieldValue('altitude', altitude);
  }

  hasAltitude(): boolean {
    return this.hasFieldValue('altitude');
  }

  /** The element carrying the id and extensions of `altitude`. Created when absent. */
  getAltitudeElement(): Element {
    if (this._altitude === undefined) {
      this._altitude = new Element();
    }
    return this._altitude;
  }

  setAltitudeElement(altitudeElement: Element | undefined): this {
    this._altitude = altitudeElement;
    return this;
  }
}

modelTypeRegistry.register('LocationPosition', LocationPosition, false);

/**
 * What days/times during a week is this location usually open
 */
export class LocationHoursOfOperation extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'daysOfWeek',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'daysOfWeek', typeCode: 'code', allowedCodes: valueSetCodes.DaysOfWeek }],
    },
    {
      elementName: 'allDay',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'allDay', typeCode: 'boolean' }],
    },
    {
      elementName: 'openingTime',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'openingTime', typeCode: 'time' }],
    },
    {
      elementName: 'closingTime',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'closingTime', typeCode: 'time' }],
    },
  ];

  /** mon | tue | wed | thu | fri | sat | sun (0..*) */
  daysOfWeek?: valueSetCodes.DaysOfWeek[];
  /** Id and extensions of the primitive `daysOfWeek`. */
  _daysOfWeek?: (Element | null)[];

  /** The Location is open all day (0..1) */
  allDay?: boolean;
  /** Id and extensions of the primitive `allDay`. */
  _allDay?: Element;

  /** Time that the Location opens (0..1) */
  openingTime?: string;
  /** Id and extensions of the primitive `openingTime`. */
  _openingTime?: Element;

  /** Time that the Location closes (0..1) */
  closingTime?: string;
  /** Id and extensions of the primitive `closingTime`. */
  _closingTime?: Element;

  override fhirType(): string {
    return 'Location.hoursOfOperation';
  }

  /** FHIR JSON for this LocationHoursOfOperation, typed as the plain `LocationHoursOfOperation` data type. */
  override toJSON(): plainTypes.LocationHoursOfOperation {
    return this.serialize() as plainTypes.LocationHoursOfOperation;
  }

  /** mon | tue | wed | thu | fri | sat | sun (0..*) Never undefined; an empty list is created when absent. */
  getDaysOfWeek(): valueSetCodes.DaysOfWeek[] {
    if (this.daysOfWeek === undefined) {
      this.daysOfWeek = [];
    }
    return this.daysOfWeek;
  }

  setDaysOfWeek(daysOfWeek: valueSetCodes.DaysOfWeek[] | undefined): this {
    return this.setFieldValue('daysOfWeek', daysOfWeek);
  }

  hasDaysOfWeek(): boolean {
    return this.hasFieldValue('daysOfWeek');
  }

  /** Appends one value to `daysOfWeek`. Throws a FhirModelError when it is not a valid FHIR code. */
  addDaysOfWeek(daysOfWeek: valueSetCodes.DaysOfWeek): this {
    return this.addFieldValue('daysOfWeek', daysOfWeek);
  }

  /** The Location is open all day (0..1) */
  getAllDay(): boolean | undefined {
    return this.allDay;
  }

  /** Sets `allDay`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setAllDay(allDay: boolean | undefined): this {
    return this.setFieldValue('allDay', allDay);
  }

  hasAllDay(): boolean {
    return this.hasFieldValue('allDay');
  }

  /** The element carrying the id and extensions of `allDay`. Created when absent. */
  getAllDayElement(): Element {
    if (this._allDay === undefined) {
      this._allDay = new Element();
    }
    return this._allDay;
  }

  setAllDayElement(allDayElement: Element | undefined): this {
    this._allDay = allDayElement;
    return this;
  }

  /** Time that the Location opens (0..1) */
  getOpeningTime(): string | undefined {
    return this.openingTime;
  }

  /** Sets `openingTime`. Throws a FhirModelError when the value is not a valid FHIR time. */
  setOpeningTime(openingTime: string | undefined): this {
    return this.setFieldValue('openingTime', openingTime);
  }

  hasOpeningTime(): boolean {
    return this.hasFieldValue('openingTime');
  }

  /** The element carrying the id and extensions of `openingTime`. Created when absent. */
  getOpeningTimeElement(): Element {
    if (this._openingTime === undefined) {
      this._openingTime = new Element();
    }
    return this._openingTime;
  }

  setOpeningTimeElement(openingTimeElement: Element | undefined): this {
    this._openingTime = openingTimeElement;
    return this;
  }

  /** Time that the Location closes (0..1) */
  getClosingTime(): string | undefined {
    return this.closingTime;
  }

  /** Sets `closingTime`. Throws a FhirModelError when the value is not a valid FHIR time. */
  setClosingTime(closingTime: string | undefined): this {
    return this.setFieldValue('closingTime', closingTime);
  }

  hasClosingTime(): boolean {
    return this.hasFieldValue('closingTime');
  }

  /** The element carrying the id and extensions of `closingTime`. Created when absent. */
  getClosingTimeElement(): Element {
    if (this._closingTime === undefined) {
      this._closingTime = new Element();
    }
    return this._closingTime;
  }

  setClosingTimeElement(closingTimeElement: Element | undefined): this {
    this._closingTime = closingTimeElement;
    return this;
  }
}

modelTypeRegistry.register('LocationHoursOfOperation', LocationHoursOfOperation, false);
