/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { ContactDetail } from './contactDetail';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * A walkthrough of a workflow showing the interaction between systems and the instances shared, possibly including the evolution of instances over time.
 */
export interface ExampleScenario {
  resourceType: 'ExampleScenario';
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
  /** Canonical identifier for this example scenario, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the example scenario (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the example scenario (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;
  /** To be removed? (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this example scenario (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: ExampleScenario.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** For testing purposes, not real usage (0..1) */
  experimental?: boolean;
  /** Id and extensions of the primitive `experimental`. */
  _experimental?: Element;
  /** Date last changed (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Name of the publisher/steward (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;
  /** Contact details for the publisher (0..*) */
  contact?: Array<ContactDetail>;
  /** Natural language description of the ExampleScenario (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The context that the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for example scenario (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** The purpose of the example, e.g. to illustrate a scenario (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;
  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;
  /** Copyright holder and year(s) (0..1) */
  copyrightLabel?: string;
  /** Id and extensions of the primitive `copyrightLabel`. */
  _copyrightLabel?: Element;
  /** Individual involved in exchange (0..*) */
  actor?: Array<ExampleScenarioActor>;
  /** Data used in the scenario (0..*) */
  instance?: Array<ExampleScenarioInstance>;
  /** Major process within scenario (0..*) */
  process?: Array<ExampleScenarioProcess>;
}

export namespace ExampleScenario {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/publication-status */
  export type StatusEnum = 'draft' | 'active' | 'retired' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    Retired: 'retired' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}

/**
 * Individual involved in exchange
 */
export interface ExampleScenarioActor {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** ID or acronym of the actor (1..1) */
  key?: string;
  /** Id and extensions of the primitive `key`. */
  _key?: Element;
  /** person | system (1..1) */
  type?: ExampleScenarioActor.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Label for actor when rendering (1..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** Details about actor (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
}

export namespace ExampleScenarioActor {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/examplescenario-actor-type */
  export type TypeEnum = 'person' | 'system';
  export const TypeEnum = { Person: 'person' as TypeEnum, System: 'system' as TypeEnum };
}

/**
 * Data used in the scenario
 */
export interface ExampleScenarioInstance {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** ID or acronym of the instance (1..1) */
  key?: string;
  /** Id and extensions of the primitive `key`. */
  _key?: Element;
  /** Data structure for example (1..1) */
  structureType: Coding;
  /** E.g. 4.0.1 (0..1) */
  structureVersion?: string;
  /** Id and extensions of the primitive `structureVersion`. */
  _structureVersion?: Element;
  /** Rules instance adheres to (0..1) */
  structureProfileCanonical?: string;
  /** Id and extensions of the primitive `structureProfileCanonical`. */
  _structureProfileCanonical?: Element;
  /** Rules instance adheres to (0..1) */
  structureProfileUri?: string;
  /** Id and extensions of the primitive `structureProfileUri`. */
  _structureProfileUri?: Element;
  /** Label for instance (1..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** Human-friendly description of the instance (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Example instance data (0..1) */
  content?: Reference;
  /** Snapshot of instance that changes (0..*) */
  version?: Array<ExampleScenarioVersion>;
  /** Resources contained in the instance (0..*) */
  containedInstance?: Array<ExampleScenarioContainedInstance>;
}

/**
 * Snapshot of instance that changes
 */
export interface ExampleScenarioVersion {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** ID or acronym of the version (1..1) */
  key?: string;
  /** Id and extensions of the primitive `key`. */
  _key?: Element;
  /** Label for instance version (1..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** Details about version (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Example instance version data (0..1) */
  content?: Reference;
}

/**
 * Resources contained in the instance
 */
export interface ExampleScenarioContainedInstance {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Key of contained instance (1..1) */
  instanceReference?: string;
  /** Id and extensions of the primitive `instanceReference`. */
  _instanceReference?: Element;
  /** Key of contained instance version (0..1) */
  versionReference?: string;
  /** Id and extensions of the primitive `versionReference`. */
  _versionReference?: Element;
}

/**
 * Major process within scenario
 */
export interface ExampleScenarioProcess {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Label for procss (1..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** Human-friendly description of the process (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Status before process starts (0..1) */
  preConditions?: string;
  /** Id and extensions of the primitive `preConditions`. */
  _preConditions?: Element;
  /** Status after successful completion (0..1) */
  postConditions?: string;
  /** Id and extensions of the primitive `postConditions`. */
  _postConditions?: Element;
  /** Event within of the process (0..*) */
  step?: Array<ExampleScenarioStep>;
}

/**
 * Event within of the process
 */
export interface ExampleScenarioStep {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Sequential number of the step (0..1) */
  number?: string;
  /** Id and extensions of the primitive `number`. */
  _number?: Element;
  /** Step is nested process (0..1) */
  process?: ExampleScenarioProcess;
  /** Step is nested workflow (0..1) */
  workflow?: string;
  /** Id and extensions of the primitive `workflow`. */
  _workflow?: Element;
  /** Step is simple action (0..1) */
  operation?: ExampleScenarioOperation;
  /** Alternate non-typical step action (0..*) */
  alternative?: Array<ExampleScenarioAlternative>;
  /** Pause in the flow? (0..1) */
  pause?: boolean;
  /** Id and extensions of the primitive `pause`. */
  _pause?: Element;
}

/**
 * Step is simple action
 */
export interface ExampleScenarioOperation {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Kind of action (0..1) */
  type?: Coding;
  /** Label for step (1..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** Who starts the operation (0..1) */
  initiator?: string;
  /** Id and extensions of the primitive `initiator`. */
  _initiator?: Element;
  /** Who receives the operation (0..1) */
  receiver?: string;
  /** Id and extensions of the primitive `receiver`. */
  _receiver?: Element;
  /** Human-friendly description of the operation (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Initiator stays active? (0..1) */
  initiatorActive?: boolean;
  /** Id and extensions of the primitive `initiatorActive`. */
  _initiatorActive?: Element;
  /** Receiver stays active? (0..1) */
  receiverActive?: boolean;
  /** Id and extensions of the primitive `receiverActive`. */
  _receiverActive?: Element;
  /** Instance transmitted on invocation (0..1) */
  request?: ExampleScenarioContainedInstance;
  /** Instance transmitted on invocation response (0..1) */
  response?: ExampleScenarioContainedInstance;
}

/**
 * Alternate non-typical step action
 */
export interface ExampleScenarioAlternative {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Label for alternative (1..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** Human-readable description of option (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Alternative action(s) (0..*) */
  step?: Array<ExampleScenarioStep>;
}
