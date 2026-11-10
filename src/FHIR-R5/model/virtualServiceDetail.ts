/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../models';
import { Coding } from './coding';
import { ContactPoint } from './contactPoint';
import { DataType } from './dataType';
import { Element } from './element';
import { ExtendedContactDetail } from './extendedContactDetail';

/**
 * VirtualServiceDetail Type: Virtual Service Contact Details.
 */
export class VirtualServiceDetail extends DataType {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'channelType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'channelType', typeCode: 'Coding' }],
    },
    {
      elementName: 'address',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'addressUrl', typeCode: 'url' },
        { jsonKey: 'addressString', typeCode: 'string' },
        { jsonKey: 'addressContactPoint', typeCode: 'ContactPoint' },
        { jsonKey: 'addressExtendedContactDetail', typeCode: 'ExtendedContactDetail' },
      ],
    },
    {
      elementName: 'additionalInfo',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'additionalInfo', typeCode: 'url' }],
    },
    {
      elementName: 'maxParticipants',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'maxParticipants', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'sessionKey',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sessionKey', typeCode: 'string' }],
    },
  ];

  /** Channel Type (0..1) */
  channelType?: Coding;

  /** Contact address/number (0..1) */
  addressUrl?: string;
  /** Id and extensions of the primitive `addressUrl`. */
  _addressUrl?: Element;
  /** Contact address/number (0..1) */
  addressString?: string;
  /** Id and extensions of the primitive `addressString`. */
  _addressString?: Element;
  /** Contact address/number (0..1) */
  addressContactPoint?: ContactPoint;
  /** Contact address/number (0..1) */
  addressExtendedContactDetail?: ExtendedContactDetail;

  /** Address to see alternative connection details (0..*) */
  additionalInfo?: string[];
  /** Id and extensions of the primitive `additionalInfo`. */
  _additionalInfo?: (Element | null)[];

  /** Maximum number of participants supported by the virtual service (0..1) */
  maxParticipants?: number;
  /** Id and extensions of the primitive `maxParticipants`. */
  _maxParticipants?: Element;

  /** Session Key required by the virtual service (0..1) */
  sessionKey?: string;
  /** Id and extensions of the primitive `sessionKey`. */
  _sessionKey?: Element;

  override fhirType(): string {
    return 'VirtualServiceDetail';
  }

  /** FHIR JSON for this VirtualServiceDetail, typed as the plain `VirtualServiceDetail` data type. */
  override toJSON(): plainTypes.VirtualServiceDetail {
    return this.serialize() as plainTypes.VirtualServiceDetail;
  }

  /** Channel Type (0..1) Created when absent. */
  getChannelType(): Coding {
    if (this.channelType === undefined) {
      this.channelType = new Coding();
    }
    return this.channelType;
  }

  setChannelType(channelType: Coding | undefined): this {
    return this.setFieldValue('channelType', channelType);
  }

  hasChannelType(): boolean {
    return this.hasFieldValue('channelType');
  }

  /** Contact address/number (0..1) Whichever type of `address[x]` is set. */
  getAddress(): string | ContactPoint | ExtendedContactDetail | undefined {
    return this.getChoiceValue<string | ContactPoint | ExtendedContactDetail>('address');
  }

  /** True when any type of `address[x]` is set. */
  hasAddress(): boolean {
    return this.hasChoiceValue('address');
  }

  getAddressUrl(): string | undefined {
    return this.addressUrl;
  }

  /** Sets `address[x]` as url and clears every other type of it. */
  setAddressUrl(addressUrl: string | undefined): this {
    return this.setFieldValue('addressUrl', addressUrl);
  }

  hasAddressUrl(): boolean {
    return this.hasFieldValue('addressUrl');
  }

  getAddressString(): string | undefined {
    return this.addressString;
  }

  /** Sets `address[x]` as string and clears every other type of it. */
  setAddressString(addressString: string | undefined): this {
    return this.setFieldValue('addressString', addressString);
  }

  hasAddressString(): boolean {
    return this.hasFieldValue('addressString');
  }

  getAddressContactPoint(): ContactPoint | undefined {
    return this.addressContactPoint;
  }

  /** Sets `address[x]` as ContactPoint and clears every other type of it. */
  setAddressContactPoint(addressContactPoint: ContactPoint | undefined): this {
    return this.setFieldValue('addressContactPoint', addressContactPoint);
  }

  hasAddressContactPoint(): boolean {
    return this.hasFieldValue('addressContactPoint');
  }

  getAddressExtendedContactDetail(): ExtendedContactDetail | undefined {
    return this.addressExtendedContactDetail;
  }

  /** Sets `address[x]` as ExtendedContactDetail and clears every other type of it. */
  setAddressExtendedContactDetail(
    addressExtendedContactDetail: ExtendedContactDetail | undefined
  ): this {
    return this.setFieldValue('addressExtendedContactDetail', addressExtendedContactDetail);
  }

  hasAddressExtendedContactDetail(): boolean {
    return this.hasFieldValue('addressExtendedContactDetail');
  }

  /** Address to see alternative connection details (0..*) Never undefined; an empty list is created when absent. */
  getAdditionalInfo(): string[] {
    if (this.additionalInfo === undefined) {
      this.additionalInfo = [];
    }
    return this.additionalInfo;
  }

  setAdditionalInfo(additionalInfo: string[] | undefined): this {
    return this.setFieldValue('additionalInfo', additionalInfo);
  }

  hasAdditionalInfo(): boolean {
    return this.hasFieldValue('additionalInfo');
  }

  /** Appends one value to `additionalInfo`. Throws a FhirModelError when it is not a valid FHIR url. */
  addAdditionalInfo(additionalInfo: string): this {
    return this.addFieldValue('additionalInfo', additionalInfo);
  }

  /** Maximum number of participants supported by the virtual service (0..1) */
  getMaxParticipants(): number | undefined {
    return this.maxParticipants;
  }

  /** Sets `maxParticipants`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setMaxParticipants(maxParticipants: number | undefined): this {
    return this.setFieldValue('maxParticipants', maxParticipants);
  }

  hasMaxParticipants(): boolean {
    return this.hasFieldValue('maxParticipants');
  }

  /** The element carrying the id and extensions of `maxParticipants`. Created when absent. */
  getMaxParticipantsElement(): Element {
    if (this._maxParticipants === undefined) {
      this._maxParticipants = new Element();
    }
    return this._maxParticipants;
  }

  setMaxParticipantsElement(maxParticipantsElement: Element | undefined): this {
    this._maxParticipants = maxParticipantsElement;
    return this;
  }

  /** Session Key required by the virtual service (0..1) */
  getSessionKey(): string | undefined {
    return this.sessionKey;
  }

  /** Sets `sessionKey`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setSessionKey(sessionKey: string | undefined): this {
    return this.setFieldValue('sessionKey', sessionKey);
  }

  hasSessionKey(): boolean {
    return this.hasFieldValue('sessionKey');
  }

  /** The element carrying the id and extensions of `sessionKey`. Created when absent. */
  getSessionKeyElement(): Element {
    if (this._sessionKey === undefined) {
      this._sessionKey = new Element();
    }
    return this._sessionKey;
  }

  setSessionKeyElement(sessionKeyElement: Element | undefined): this {
    this._sessionKey = sessionKeyElement;
    return this;
  }
}

modelTypeRegistry.register('VirtualServiceDetail', VirtualServiceDetail, false);
