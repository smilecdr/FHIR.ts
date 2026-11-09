/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { DataRequirement } from './dataRequirement';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Reference } from './reference';
import type { Timing } from './timing';

/**
 * Base StructureDefinition for TriggerDefinition Type
 */
export class TriggerDefinition {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** named-event | periodic | data-added | data-modified | data-removed | data-accessed | data-access-ended (1..1) */
  type?: TriggerDefinition.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Triggering event name (0..1) */
  eventName?: string;
  /** Id and extensions of the primitive `eventName`. */
  _eventName?: Element;
  /** Timing of the event (0..1) */
  eventTimingTiming?: Timing;
  /** Timing of the event (0..1) */
  eventTimingReference?: Reference;
  /** Timing of the event (0..1) */
  eventTimingDate?: string;
  /** Id and extensions of the primitive `eventTimingDate`. */
  _eventTimingDate?: Element;
  /** Timing of the event (0..1) */
  eventTimingDateTime?: string;
  /** Id and extensions of the primitive `eventTimingDateTime`. */
  _eventTimingDateTime?: Element;
  /** Triggering data of the event (0..1) */
  eventData?: DataRequirement;
}

export namespace TriggerDefinition {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/trigger-type */
  export type TypeEnum =
    | 'named-event'
    | 'periodic'
    | 'data-added'
    | 'data-modified'
    | 'data-removed'
    | 'data-accessed'
    | 'data-access-ended';
  export const TypeEnum = {
    NamedEvent: 'named-event' as TypeEnum,
    Periodic: 'periodic' as TypeEnum,
    DataAdded: 'data-added' as TypeEnum,
    DataModified: 'data-modified' as TypeEnum,
    DataRemoved: 'data-removed' as TypeEnum,
    DataAccessed: 'data-accessed' as TypeEnum,
    DataAccessEnded: 'data-access-ended' as TypeEnum,
  };
}
