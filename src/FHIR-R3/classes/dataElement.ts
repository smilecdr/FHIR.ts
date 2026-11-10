/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { ContactDetail } from './contactDetail';
import type { Element } from './element';
import type { ElementDefinition } from './elementDefinition';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Resource } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * Base StructureDefinition for DataElement Resource
 */
export class DataElement {
  resourceType: 'DataElement';
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
  contained?: Array<Resource>;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Logical URI to reference this data element (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the data element (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the data element (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: DataElement.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** For testing purposes, not real usage (0..1) */
  experimental?: boolean;
  /** Id and extensions of the primitive `experimental`. */
  _experimental?: Element;
  /** Date this was last changed (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Name of the publisher (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;
  /** Name for this data element (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this data element (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** Contact details for the publisher (0..*) */
  contact?: Array<ContactDetail>;
  /** Context the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for data element (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;
  /** comparable | fully-specified | equivalent | convertable | scaleable | flexible (0..1) */
  stringency?: DataElement.StringencyEnum;
  /** Id and extensions of the primitive `stringency`. */
  _stringency?: Element;
  /** External specification mapped to (0..*) */
  mapping?: Array<DataElementMapping>;
  /** Definition of element (1..*) */
  element: Array<ElementDefinition>;
}

export namespace DataElement {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/publication-status */
  export type StatusEnum = 'draft' | 'active' | 'retired' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    Retired: 'retired' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/dataelement-stringency */
  export type StringencyEnum =
    'comparable' | 'fully-specified' | 'equivalent' | 'convertable' | 'scaleable' | 'flexible';
  export const StringencyEnum = {
    Comparable: 'comparable' as StringencyEnum,
    FullySpecified: 'fully-specified' as StringencyEnum,
    Equivalent: 'equivalent' as StringencyEnum,
    Convertable: 'convertable' as StringencyEnum,
    Scaleable: 'scaleable' as StringencyEnum,
    Flexible: 'flexible' as StringencyEnum,
  };
}

/**
 * External specification mapped to
 */
export class DataElementMapping {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Internal id when this mapping is used (1..1) */
  identity?: string;
  /** Id and extensions of the primitive `identity`. */
  _identity?: Element;
  /** Identifies what this mapping refers to (0..1) */
  uri?: string;
  /** Id and extensions of the primitive `uri`. */
  _uri?: Element;
  /** Names what this mapping refers to (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Versions, issues, scope limitations, etc. (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;
}
