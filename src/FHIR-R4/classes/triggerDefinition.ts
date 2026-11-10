/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { DataRequirement } from './dataRequirement';
import type { Element } from './element';
import type { Expression } from './expression';
import type { Extension } from './extension';
import type { Reference } from './reference';
import type { Timing } from './timing';

/**
 * A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element.
 */
export class TriggerDefinition {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** named-event | periodic | data-changed | data-added | data-modified | data-removed | data-accessed | data-access-ended (1..1) */
  type?: TriggerDefinition.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Name or URI that identifies the event (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Timing of the event (0..1) */
  timingTiming?: Timing;
  /** Timing of the event (0..1) */
  timingReference?: Reference;
  /** Timing of the event (0..1) */
  timingDate?: Date | string;
  /** Id and extensions of the primitive `timingDate`. */
  _timingDate?: Element;
  /** Timing of the event (0..1) */
  timingDateTime?: Date | string;
  /** Id and extensions of the primitive `timingDateTime`. */
  _timingDateTime?: Element;
  /** Triggering data of the event (multiple = 'and') (0..*) */
  data?: Array<DataRequirement>;
  /** Whether the event triggers (boolean expression) (0..1) */
  condition?: Expression;
}

export namespace TriggerDefinition {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/trigger-type */
  export type TypeEnum =
    | 'named-event'
    | 'periodic'
    | 'data-changed'
    | 'data-added'
    | 'data-modified'
    | 'data-removed'
    | 'data-accessed'
    | 'data-access-ended';
  export const TypeEnum = {
    NamedEvent: 'named-event' as TypeEnum,
    Periodic: 'periodic' as TypeEnum,
    DataChanged: 'data-changed' as TypeEnum,
    DataAdded: 'data-added' as TypeEnum,
    DataModified: 'data-modified' as TypeEnum,
    DataRemoved: 'data-removed' as TypeEnum,
    DataAccessed: 'data-accessed' as TypeEnum,
    DataAccessEnded: 'data-access-ended' as TypeEnum,
  };
}
