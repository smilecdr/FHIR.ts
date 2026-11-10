/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { Element } from './element';

/**
 * A human-readable summary of the resource conveying the essential clinical and business information for the resource.
 */
export class Narrative extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.NarrativeStatus }],
    },
    {
      elementName: 'div',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'div', typeCode: 'xhtml' }],
    },
  ];

  /** generated | extensions | additional | empty (1..1) */
  status?: valueSetCodes.NarrativeStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Limited xhtml content (1..1) */
  div?: string;
  /** Id and extensions of the primitive `div`. */
  _div?: Element;

  override fhirType(): string {
    return 'Narrative';
  }

  /** FHIR JSON for this Narrative, typed as the plain `Narrative` data type. */
  override toJSON(): plainTypes.Narrative {
    return this.serialize() as plainTypes.Narrative;
  }

  /** generated | extensions | additional | empty (1..1) */
  getStatus(): valueSetCodes.NarrativeStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.NarrativeStatus | undefined): this {
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

  /** Limited xhtml content (1..1) */
  getDiv(): string | undefined {
    return this.div;
  }

  /** Sets `div`. Throws a FhirModelError when the value is not a valid FHIR xhtml. */
  setDiv(div: string | undefined): this {
    return this.setFieldValue('div', div);
  }

  hasDiv(): boolean {
    return this.hasFieldValue('div');
  }

  /** The element carrying the id and extensions of `div`. Created when absent. */
  getDivElement(): Element {
    if (this._div === undefined) {
      this._div = new Element();
    }
    return this._div;
  }

  setDivElement(divElement: Element | undefined): this {
    this._div = divElement;
    return this;
  }
}

modelTypeRegistry.register('Narrative', Narrative, false);
