/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * A record of association of a device.
 */
export interface DeviceAssociation {
  resourceType: 'DeviceAssociation';
  /** Logical id of this artifact (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Metadata about the resource (0..1) */
  meta?: Meta;
  /** A set of rules under which this content was created (0..1) */
  implicitRules?: string;
  /** Id and extensions of the primitive `implicitRules`. */
  _implicitRules?: Element;
  /** Language of the resource content (0..1) */
  language?: string;
  /** Id and extensions of the primitive `language`. */
  _language?: Element;
  /** Text summary of the resource, for human interpretation (0..1) */
  text?: Narrative;
  /** Contained, inline Resources (0..*) */
  contained?: Array<ResourceList>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Instance identifier (0..*) */
  identifier?: Array<Identifier>;
  /** Reference to the devices associated with the patient or group (1..1) */
  device: Reference;
  /** Describes the relationship between the device and subject (0..*) */
  category?: Array<CodeableConcept>;
  /** implanted | explanted | attached | entered-in-error | unknown (1..1) */
  status: CodeableConcept;
  /** The reasons given for the current association status (0..*) */
  statusReason?: Array<CodeableConcept>;
  /** The individual, group of individuals or device that the device is on or associated with (0..1) */
  subject?: Reference;
  /** Current anatomical location of the device in/on subject (0..1) */
  bodyStructure?: Reference;
  /** Begin and end dates and times for the device association (0..1) */
  period?: Period;
  /** The details about the device when it is in use to describe its operation (0..*) */
  operation?: Array<DeviceAssociationOperation>;
}

/**
 * The details about the device when it is in use to describe its operation
 */
export interface DeviceAssociationOperation {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Device operational condition (1..1) */
  status: CodeableConcept;
  /** The individual performing the action enabled by the device (0..*) */
  operator?: Array<Reference>;
  /** Begin and end dates and times for the device's operation (0..1) */
  period?: Period;
}
