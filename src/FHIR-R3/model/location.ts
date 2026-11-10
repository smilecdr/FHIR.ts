/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
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
 * Base StructureDefinition for Location Resource
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
      maximum: 1,
      isList: false,
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

  /** The Operational status of the location (typically only for a bed/room) (0..1) */
  operationalStatus?: Coding;

  /** Name of the location as used by humans (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** A list of alternate names that the location is known as, or was known as in the past (0..*) */
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

  /** Type of function performed (0..1) */
  type?: CodeableConcept;

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

  /** Another Location this one is physically part of (0..1) */
  partOf?: Reference;

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

  /** The Operational status of the location (typically only for a bed/room) (0..1) Created when absent. */
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

  /** A list of alternate names that the location is known as, or was known as in the past (0..*) Never undefined; an empty list is created when absent. */
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

  /** Type of function performed (0..1) Created when absent. */
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

  /** Another Location this one is physically part of (0..1) Created when absent. */
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
