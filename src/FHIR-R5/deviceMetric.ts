/**
 * FHIR Version R5
 * The following is auto generated resource definition.
 *
 * OpenAPI spec version: 3.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Code } from './code';
import { CodeableConcept } from './codeableConcept';
import { DeviceMetricCalibration } from './deviceMetricCalibration';
import { Extension } from './extension';
import { Id } from './id';
import { Identifier } from './identifier';
import { Meta } from './meta';
import { Narrative } from './narrative';
import { Quantity } from './quantity';
import { Reference } from './reference';
import { ResourceList } from './resourceList';
import { Uri } from './uri';

/**
 * Describes a measurement, calculation or setting capability of a device.
 */
export interface DeviceMetric { 
    /**
     * This is a DeviceMetric resource
     */
    resourceType: any;
    id?: Id;
    meta?: Meta;
    implicitRules?: Uri;
    language?: Code;
    text?: Narrative;
    /**
     * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, nor can they have their own independent transaction scope. This is allowed to be a Parameters resource if and only if it is referenced by a resource that provides context/meaning.
     */
    contained?: Array<ResourceList>;
    /**
     * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Array<Extension>;
    /**
     * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Array<Extension>;
    /**
     * Instance identifiers assigned to a device, by the device or gateway software, manufacturers, other organizations or owners. For example, handle ID.
     */
    identifier?: Array<Identifier>;
    type: CodeableConcept;
    unit?: CodeableConcept;
    device: Reference;
    operationalStatus?: Code;
    color?: Code;
    category?: Code;
    measurementFrequency?: Quantity;
    /**
     * Describes the calibrations that have been performed or that are required to be performed.
     */
    calibration?: Array<DeviceMetricCalibration>;
}