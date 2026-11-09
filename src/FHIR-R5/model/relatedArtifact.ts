/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { Attachment } from './attachment';
import { CodeableConcept } from './codeableConcept';
import { DataType } from './dataType';
import { Element } from './element';
import { Reference } from './reference';

/**
 * RelatedArtifact Type: Related artifacts such as additional documentation, justification, or bibliographic references.
 */
export class RelatedArtifact extends DataType {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.RelatedArtifactType },
      ],
    },
    {
      elementName: 'classifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'classifier', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'label',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'label', typeCode: 'string' }],
    },
    {
      elementName: 'display',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'display', typeCode: 'string' }],
    },
    {
      elementName: 'citation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'citation', typeCode: 'markdown' }],
    },
    {
      elementName: 'document',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'document', typeCode: 'Attachment' }],
    },
    {
      elementName: 'resource',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'resource', typeCode: 'canonical' }],
    },
    {
      elementName: 'resourceReference',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'resourceReference', typeCode: 'Reference' }],
    },
    {
      elementName: 'publicationStatus',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'publicationStatus',
          typeCode: 'code',
          allowedCodes: valueSetCodes.PublicationStatus,
        },
      ],
    },
    {
      elementName: 'publicationDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'publicationDate', typeCode: 'date' }],
    },
  ];

  /** documentation | justification | citation | predecessor | successor | derived-from | depends-on | composed-of | part-of | amends | amended-with | appends | appended-with | cites | cited-by | comments-on | comment-in | contains | contained-in | corrects | correction-in | replaces | replaced-with | retracts | retracted-by | signs | similar-to | supports | supported-with | transforms | transformed-into | transformed-with | documents | specification-of | created-with | cite-as (1..1) */
  type?: valueSetCodes.RelatedArtifactType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Additional classifiers (0..*) */
  classifier?: CodeableConcept[];

  /** Short label (0..1) */
  label?: string;
  /** Id and extensions of the primitive `label`. */
  _label?: Element;

  /** Brief description of the related artifact (0..1) */
  display?: string;
  /** Id and extensions of the primitive `display`. */
  _display?: Element;

  /** Bibliographic citation for the artifact (0..1) */
  citation?: string;
  /** Id and extensions of the primitive `citation`. */
  _citation?: Element;

  /** What document is being referenced (0..1) */
  document?: Attachment;

  /** What artifact is being referenced (0..1) */
  resource?: string;
  /** Id and extensions of the primitive `resource`. */
  _resource?: Element;

  /** What artifact, if not a conformance resource (0..1) */
  resourceReference?: Reference;

  /** draft | active | retired | unknown (0..1) */
  publicationStatus?: valueSetCodes.PublicationStatus;
  /** Id and extensions of the primitive `publicationStatus`. */
  _publicationStatus?: Element;

  /** Date of publication of the artifact being referred to (0..1) */
  publicationDate?: string;
  /** Id and extensions of the primitive `publicationDate`. */
  _publicationDate?: Element;

  override fhirType(): string {
    return 'RelatedArtifact';
  }

  /** FHIR JSON for this RelatedArtifact, typed as the plain `RelatedArtifact` data type. */
  override toJSON(): plainTypes.RelatedArtifact {
    return this.serialize() as plainTypes.RelatedArtifact;
  }

  /** documentation | justification | citation | predecessor | successor | derived-from | depends-on | composed-of | part-of | amends | amended-with | appends | appended-with | cites | cited-by | comments-on | comment-in | contains | contained-in | corrects | correction-in | replaces | replaced-with | retracts | retracted-by | signs | similar-to | supports | supported-with | transforms | transformed-into | transformed-with | documents | specification-of | created-with | cite-as (1..1) */
  getType(): valueSetCodes.RelatedArtifactType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.RelatedArtifactType | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** The element carrying the id and extensions of `type`. Created when absent. */
  getTypeElement(): Element {
    if (this._type === undefined) {
      this._type = new Element();
    }
    return this._type;
  }

  setTypeElement(typeElement: Element | undefined): this {
    this._type = typeElement;
    return this;
  }

  /** Additional classifiers (0..*) Never undefined; an empty list is created when absent. */
  getClassifier(): CodeableConcept[] {
    if (this.classifier === undefined) {
      this.classifier = [];
    }
    return this.classifier;
  }

  setClassifier(classifier: CodeableConcept[] | undefined): this {
    return this.setFieldValue('classifier', classifier);
  }

  hasClassifier(): boolean {
    return this.hasFieldValue('classifier');
  }

  /** Appends a new, empty CodeableConcept to `classifier` and returns it so it can be filled in. */
  addClassifier(): CodeableConcept;
  /** Appends the given CodeableConcept to `classifier` and returns this object for chaining. */
  addClassifier(codeableConcept: CodeableConcept): this;
  addClassifier(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('classifier', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('classifier', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `classifier`. One is added when the list is empty. */
  getClassifierFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getClassifier()[0];
    return firstCodeableConcept === undefined ? this.addClassifier() : firstCodeableConcept;
  }

  /** Short label (0..1) */
  getLabel(): string | undefined {
    return this.label;
  }

  /** Sets `label`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setLabel(label: string | undefined): this {
    return this.setFieldValue('label', label);
  }

  hasLabel(): boolean {
    return this.hasFieldValue('label');
  }

  /** The element carrying the id and extensions of `label`. Created when absent. */
  getLabelElement(): Element {
    if (this._label === undefined) {
      this._label = new Element();
    }
    return this._label;
  }

  setLabelElement(labelElement: Element | undefined): this {
    this._label = labelElement;
    return this;
  }

  /** Brief description of the related artifact (0..1) */
  getDisplay(): string | undefined {
    return this.display;
  }

  /** Sets `display`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDisplay(display: string | undefined): this {
    return this.setFieldValue('display', display);
  }

  hasDisplay(): boolean {
    return this.hasFieldValue('display');
  }

  /** The element carrying the id and extensions of `display`. Created when absent. */
  getDisplayElement(): Element {
    if (this._display === undefined) {
      this._display = new Element();
    }
    return this._display;
  }

  setDisplayElement(displayElement: Element | undefined): this {
    this._display = displayElement;
    return this;
  }

  /** Bibliographic citation for the artifact (0..1) */
  getCitation(): string | undefined {
    return this.citation;
  }

  /** Sets `citation`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setCitation(citation: string | undefined): this {
    return this.setFieldValue('citation', citation);
  }

  hasCitation(): boolean {
    return this.hasFieldValue('citation');
  }

  /** The element carrying the id and extensions of `citation`. Created when absent. */
  getCitationElement(): Element {
    if (this._citation === undefined) {
      this._citation = new Element();
    }
    return this._citation;
  }

  setCitationElement(citationElement: Element | undefined): this {
    this._citation = citationElement;
    return this;
  }

  /** What document is being referenced (0..1) Created when absent. */
  getDocument(): Attachment {
    if (this.document === undefined) {
      this.document = new Attachment();
    }
    return this.document;
  }

  setDocument(document: Attachment | undefined): this {
    return this.setFieldValue('document', document);
  }

  hasDocument(): boolean {
    return this.hasFieldValue('document');
  }

  /** What artifact is being referenced (0..1) */
  getResource(): string | undefined {
    return this.resource;
  }

  /** Sets `resource`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setResource(resource: string | undefined): this {
    return this.setFieldValue('resource', resource);
  }

  hasResource(): boolean {
    return this.hasFieldValue('resource');
  }

  /** The element carrying the id and extensions of `resource`. Created when absent. */
  getResourceElement(): Element {
    if (this._resource === undefined) {
      this._resource = new Element();
    }
    return this._resource;
  }

  setResourceElement(resourceElement: Element | undefined): this {
    this._resource = resourceElement;
    return this;
  }

  /** What artifact, if not a conformance resource (0..1) Created when absent. */
  getResourceReference(): Reference {
    if (this.resourceReference === undefined) {
      this.resourceReference = new Reference();
    }
    return this.resourceReference;
  }

  setResourceReference(resourceReference: Reference | undefined): this {
    return this.setFieldValue('resourceReference', resourceReference);
  }

  hasResourceReference(): boolean {
    return this.hasFieldValue('resourceReference');
  }

  /** draft | active | retired | unknown (0..1) */
  getPublicationStatus(): valueSetCodes.PublicationStatus | undefined {
    return this.publicationStatus;
  }

  /** Sets `publicationStatus`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setPublicationStatus(publicationStatus: valueSetCodes.PublicationStatus | undefined): this {
    return this.setFieldValue('publicationStatus', publicationStatus);
  }

  hasPublicationStatus(): boolean {
    return this.hasFieldValue('publicationStatus');
  }

  /** The element carrying the id and extensions of `publicationStatus`. Created when absent. */
  getPublicationStatusElement(): Element {
    if (this._publicationStatus === undefined) {
      this._publicationStatus = new Element();
    }
    return this._publicationStatus;
  }

  setPublicationStatusElement(publicationStatusElement: Element | undefined): this {
    this._publicationStatus = publicationStatusElement;
    return this;
  }

  /** Date of publication of the artifact being referred to (0..1) */
  getPublicationDate(): string | undefined {
    return this.publicationDate;
  }

  /** Sets `publicationDate`. Throws a FhirModelError when the value is not a valid FHIR date. */
  setPublicationDate(publicationDate: string | undefined): this {
    return this.setFieldValue('publicationDate', publicationDate);
  }

  hasPublicationDate(): boolean {
    return this.hasFieldValue('publicationDate');
  }

  /** The element carrying the id and extensions of `publicationDate`. Created when absent. */
  getPublicationDateElement(): Element {
    if (this._publicationDate === undefined) {
      this._publicationDate = new Element();
    }
    return this._publicationDate;
  }

  setPublicationDateElement(publicationDateElement: Element | undefined): this {
    this._publicationDate = publicationDateElement;
    return this;
  }
}

modelTypeRegistry.register('RelatedArtifact', RelatedArtifact, false);
