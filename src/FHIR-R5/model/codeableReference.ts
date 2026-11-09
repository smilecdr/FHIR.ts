/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../models';
import { CodeableConcept } from './codeableConcept';
import { DataType } from './dataType';
import { Reference } from './reference';

/**
 * CodeableReference Type: A reference to a resource (by instance), or instead, a reference to a concept defined in a terminology or ontology (by class).
 */
export class CodeableReference extends DataType {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'concept',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'concept', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'reference',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reference', typeCode: 'Reference' }],
    },
  ];

  /** Reference to a concept (by class) (0..1) */
  concept?: CodeableConcept;

  /** Reference to a resource (by instance) (0..1) */
  reference?: Reference;

  override fhirType(): string {
    return 'CodeableReference';
  }

  /** FHIR JSON for this CodeableReference, typed as the plain `CodeableReference` data type. */
  override toJSON(): plainTypes.CodeableReference {
    return this.serialize() as plainTypes.CodeableReference;
  }

  /** Reference to a concept (by class) (0..1) Created when absent. */
  getConcept(): CodeableConcept {
    if (this.concept === undefined) {
      this.concept = new CodeableConcept();
    }
    return this.concept;
  }

  setConcept(concept: CodeableConcept | undefined): this {
    return this.setFieldValue('concept', concept);
  }

  hasConcept(): boolean {
    return this.hasFieldValue('concept');
  }

  /** Reference to a resource (by instance) (0..1) Created when absent. */
  getReference(): Reference {
    if (this.reference === undefined) {
      this.reference = new Reference();
    }
    return this.reference;
  }

  setReference(reference: Reference | undefined): this {
    return this.setFieldValue('reference', reference);
  }

  hasReference(): boolean {
    return this.hasFieldValue('reference');
  }
}

modelTypeRegistry.register('CodeableReference', CodeableReference, false);
