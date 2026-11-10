/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Quantity } from './quantity';
import { Reference } from './reference';
import { RelatedArtifact } from './relatedArtifact';

/**
 * This Resource provides one or more comments, classifiers or ratings about a Resource and supports attribution and rights management metadata for the added content.
 */
export class ArtifactAssessment extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'title',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'title', typeCode: 'string' }],
    },
    {
      elementName: 'citeAs',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'citeAsReference', typeCode: 'Reference', targetResourceTypes: ['Citation'] },
        { jsonKey: 'citeAsMarkdown', typeCode: 'markdown' },
      ],
    },
    {
      elementName: 'date',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'date', typeCode: 'dateTime' }],
    },
    {
      elementName: 'copyright',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'copyright', typeCode: 'markdown' }],
    },
    {
      elementName: 'approvalDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'approvalDate', typeCode: 'date' }],
    },
    {
      elementName: 'lastReviewDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'lastReviewDate', typeCode: 'date' }],
    },
    {
      elementName: 'artifact',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'artifactReference', typeCode: 'Reference' },
        { jsonKey: 'artifactCanonical', typeCode: 'canonical' },
        { jsonKey: 'artifactUri', typeCode: 'uri' },
      ],
    },
    {
      elementName: 'content',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'content', typeCode: 'ArtifactAssessmentContent' }],
    },
    {
      elementName: 'workflowStatus',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'workflowStatus',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ArtifactAssessmentWorkflowStatus,
        },
      ],
    },
    {
      elementName: 'disposition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'disposition',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ArtifactAssessmentDisposition,
        },
      ],
    },
  ];

  readonly resourceType = 'ArtifactAssessment';

  /** Additional identifier for the artifact assessment (0..*) */
  identifier?: Identifier[];

  /** A short title for the assessment for use in displaying and selecting (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

  /** How to cite the comment or rating (0..1) */
  citeAsReference?: Reference;
  /** How to cite the comment or rating (0..1) */
  citeAsMarkdown?: string;
  /** Id and extensions of the primitive `citeAsMarkdown`. */
  _citeAsMarkdown?: Element;

  /** Date last changed (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;

  /** When the artifact assessment was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;

  /** When the artifact assessment was last reviewed by the publisher (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;

  /** The artifact assessed, commented upon or rated (1..1) */
  artifactReference?: Reference;
  /** The artifact assessed, commented upon or rated (1..1) */
  artifactCanonical?: string;
  /** Id and extensions of the primitive `artifactCanonical`. */
  _artifactCanonical?: Element;
  /** The artifact assessed, commented upon or rated (1..1) */
  artifactUri?: string;
  /** Id and extensions of the primitive `artifactUri`. */
  _artifactUri?: Element;

  /** Comment, classifier, or rating content (0..*) */
  content?: ArtifactAssessmentContent[];

  /** submitted | triaged | waiting-for-input | resolved-no-change | resolved-change-required | deferred | duplicate | applied | published | entered-in-error (0..1) */
  workflowStatus?: valueSetCodes.ArtifactAssessmentWorkflowStatus;
  /** Id and extensions of the primitive `workflowStatus`. */
  _workflowStatus?: Element;

  /** unresolved | not-persuasive | persuasive | persuasive-with-modification | not-persuasive-with-modification (0..1) */
  disposition?: valueSetCodes.ArtifactAssessmentDisposition;
  /** Id and extensions of the primitive `disposition`. */
  _disposition?: Element;

  override fhirType(): string {
    return 'ArtifactAssessment';
  }

  /** FHIR JSON for this ArtifactAssessment, typed as the plain `ArtifactAssessment` data type. */
  override toJSON(): plainTypes.ArtifactAssessment {
    return this.serialize() as plainTypes.ArtifactAssessment;
  }

  /** Additional identifier for the artifact assessment (0..*) Never undefined; an empty list is created when absent. */
  getIdentifier(): Identifier[] {
    if (this.identifier === undefined) {
      this.identifier = [];
    }
    return this.identifier;
  }

  setIdentifier(identifier: Identifier[] | undefined): this {
    return this.setFieldValue('identifier', identifier);
  }

  hasIdentifier(): boolean {
    return this.hasFieldValue('identifier');
  }

  /** Appends a new, empty Identifier to `identifier` and returns it so it can be filled in. */
  addIdentifier(): Identifier;
  /** Appends the given Identifier to `identifier` and returns this object for chaining. */
  addIdentifier(identifier: Identifier): this;
  addIdentifier(identifier?: Identifier): Identifier | this {
    if (identifier !== undefined) {
      return this.addFieldValue('identifier', identifier);
    }
    const createdIdentifier = new Identifier();
    this.addFieldValue('identifier', createdIdentifier);
    return createdIdentifier;
  }

  /** The first Identifier of `identifier`. One is added when the list is empty. */
  getIdentifierFirstRep(): Identifier {
    const firstIdentifier = this.getIdentifier()[0];
    return firstIdentifier === undefined ? this.addIdentifier() : firstIdentifier;
  }

  /** A short title for the assessment for use in displaying and selecting (0..1) */
  getTitle(): string | undefined {
    return this.title;
  }

  /** Sets `title`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setTitle(title: string | undefined): this {
    return this.setFieldValue('title', title);
  }

  hasTitle(): boolean {
    return this.hasFieldValue('title');
  }

  /** The element carrying the id and extensions of `title`. Created when absent. */
  getTitleElement(): Element {
    if (this._title === undefined) {
      this._title = new Element();
    }
    return this._title;
  }

  setTitleElement(titleElement: Element | undefined): this {
    this._title = titleElement;
    return this;
  }

  /** How to cite the comment or rating (0..1) Whichever type of `citeAs[x]` is set. */
  getCiteAs(): Reference | string | undefined {
    return this.getChoiceValue<Reference | string>('citeAs');
  }

  /** True when any type of `citeAs[x]` is set. */
  hasCiteAs(): boolean {
    return this.hasChoiceValue('citeAs');
  }

  getCiteAsReference(): Reference | undefined {
    return this.citeAsReference;
  }

  /** Sets `citeAs[x]` as Reference and clears every other type of it. */
  setCiteAsReference(citeAsReference: Reference | undefined): this {
    return this.setFieldValue('citeAsReference', citeAsReference);
  }

  hasCiteAsReference(): boolean {
    return this.hasFieldValue('citeAsReference');
  }

  getCiteAsMarkdown(): string | undefined {
    return this.citeAsMarkdown;
  }

  /** Sets `citeAs[x]` as markdown and clears every other type of it. */
  setCiteAsMarkdown(citeAsMarkdown: string | undefined): this {
    return this.setFieldValue('citeAsMarkdown', citeAsMarkdown);
  }

  hasCiteAsMarkdown(): boolean {
    return this.hasFieldValue('citeAsMarkdown');
  }

  /** Date last changed (0..1) */
  getDate(): string | undefined {
    return this.date;
  }

  /** Sets `date`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setDate(date: string | undefined): this {
    return this.setFieldValue('date', date);
  }

  hasDate(): boolean {
    return this.hasFieldValue('date');
  }

  /** The element carrying the id and extensions of `date`. Created when absent. */
  getDateElement(): Element {
    if (this._date === undefined) {
      this._date = new Element();
    }
    return this._date;
  }

  setDateElement(dateElement: Element | undefined): this {
    this._date = dateElement;
    return this;
  }

  /** Use and/or publishing restrictions (0..1) */
  getCopyright(): string | undefined {
    return this.copyright;
  }

  /** Sets `copyright`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setCopyright(copyright: string | undefined): this {
    return this.setFieldValue('copyright', copyright);
  }

  hasCopyright(): boolean {
    return this.hasFieldValue('copyright');
  }

  /** The element carrying the id and extensions of `copyright`. Created when absent. */
  getCopyrightElement(): Element {
    if (this._copyright === undefined) {
      this._copyright = new Element();
    }
    return this._copyright;
  }

  setCopyrightElement(copyrightElement: Element | undefined): this {
    this._copyright = copyrightElement;
    return this;
  }

  /** When the artifact assessment was approved by publisher (0..1) */
  getApprovalDate(): string | undefined {
    return this.approvalDate;
  }

  /** Sets `approvalDate`. Throws a FhirModelError when the value is not a valid FHIR date. */
  setApprovalDate(approvalDate: string | undefined): this {
    return this.setFieldValue('approvalDate', approvalDate);
  }

  hasApprovalDate(): boolean {
    return this.hasFieldValue('approvalDate');
  }

  /** The element carrying the id and extensions of `approvalDate`. Created when absent. */
  getApprovalDateElement(): Element {
    if (this._approvalDate === undefined) {
      this._approvalDate = new Element();
    }
    return this._approvalDate;
  }

  setApprovalDateElement(approvalDateElement: Element | undefined): this {
    this._approvalDate = approvalDateElement;
    return this;
  }

  /** When the artifact assessment was last reviewed by the publisher (0..1) */
  getLastReviewDate(): string | undefined {
    return this.lastReviewDate;
  }

  /** Sets `lastReviewDate`. Throws a FhirModelError when the value is not a valid FHIR date. */
  setLastReviewDate(lastReviewDate: string | undefined): this {
    return this.setFieldValue('lastReviewDate', lastReviewDate);
  }

  hasLastReviewDate(): boolean {
    return this.hasFieldValue('lastReviewDate');
  }

  /** The element carrying the id and extensions of `lastReviewDate`. Created when absent. */
  getLastReviewDateElement(): Element {
    if (this._lastReviewDate === undefined) {
      this._lastReviewDate = new Element();
    }
    return this._lastReviewDate;
  }

  setLastReviewDateElement(lastReviewDateElement: Element | undefined): this {
    this._lastReviewDate = lastReviewDateElement;
    return this;
  }

  /** The artifact assessed, commented upon or rated (1..1) Whichever type of `artifact[x]` is set. */
  getArtifact(): Reference | string | undefined {
    return this.getChoiceValue<Reference | string>('artifact');
  }

  /** True when any type of `artifact[x]` is set. */
  hasArtifact(): boolean {
    return this.hasChoiceValue('artifact');
  }

  getArtifactReference(): Reference | undefined {
    return this.artifactReference;
  }

  /** Sets `artifact[x]` as Reference and clears every other type of it. */
  setArtifactReference(artifactReference: Reference | undefined): this {
    return this.setFieldValue('artifactReference', artifactReference);
  }

  hasArtifactReference(): boolean {
    return this.hasFieldValue('artifactReference');
  }

  getArtifactCanonical(): string | undefined {
    return this.artifactCanonical;
  }

  /** Sets `artifact[x]` as canonical and clears every other type of it. */
  setArtifactCanonical(artifactCanonical: string | undefined): this {
    return this.setFieldValue('artifactCanonical', artifactCanonical);
  }

  hasArtifactCanonical(): boolean {
    return this.hasFieldValue('artifactCanonical');
  }

  getArtifactUri(): string | undefined {
    return this.artifactUri;
  }

  /** Sets `artifact[x]` as uri and clears every other type of it. */
  setArtifactUri(artifactUri: string | undefined): this {
    return this.setFieldValue('artifactUri', artifactUri);
  }

  hasArtifactUri(): boolean {
    return this.hasFieldValue('artifactUri');
  }

  /** Comment, classifier, or rating content (0..*) Never undefined; an empty list is created when absent. */
  getContent(): ArtifactAssessmentContent[] {
    if (this.content === undefined) {
      this.content = [];
    }
    return this.content;
  }

  setContent(content: ArtifactAssessmentContent[] | undefined): this {
    return this.setFieldValue('content', content);
  }

  hasContent(): boolean {
    return this.hasFieldValue('content');
  }

  /** Appends a new, empty ArtifactAssessmentContent to `content` and returns it so it can be filled in. */
  addContent(): ArtifactAssessmentContent;
  /** Appends the given ArtifactAssessmentContent to `content` and returns this object for chaining. */
  addContent(artifactAssessmentContent: ArtifactAssessmentContent): this;
  addContent(
    artifactAssessmentContent?: ArtifactAssessmentContent
  ): ArtifactAssessmentContent | this {
    if (artifactAssessmentContent !== undefined) {
      return this.addFieldValue('content', artifactAssessmentContent);
    }
    const createdArtifactAssessmentContent = new ArtifactAssessmentContent();
    this.addFieldValue('content', createdArtifactAssessmentContent);
    return createdArtifactAssessmentContent;
  }

  /** The first ArtifactAssessmentContent of `content`. One is added when the list is empty. */
  getContentFirstRep(): ArtifactAssessmentContent {
    const firstArtifactAssessmentContent = this.getContent()[0];
    return firstArtifactAssessmentContent === undefined
      ? this.addContent()
      : firstArtifactAssessmentContent;
  }

  /** submitted | triaged | waiting-for-input | resolved-no-change | resolved-change-required | deferred | duplicate | applied | published | entered-in-error (0..1) */
  getWorkflowStatus(): valueSetCodes.ArtifactAssessmentWorkflowStatus | undefined {
    return this.workflowStatus;
  }

  /** Sets `workflowStatus`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setWorkflowStatus(
    workflowStatus: valueSetCodes.ArtifactAssessmentWorkflowStatus | undefined
  ): this {
    return this.setFieldValue('workflowStatus', workflowStatus);
  }

  hasWorkflowStatus(): boolean {
    return this.hasFieldValue('workflowStatus');
  }

  /** The element carrying the id and extensions of `workflowStatus`. Created when absent. */
  getWorkflowStatusElement(): Element {
    if (this._workflowStatus === undefined) {
      this._workflowStatus = new Element();
    }
    return this._workflowStatus;
  }

  setWorkflowStatusElement(workflowStatusElement: Element | undefined): this {
    this._workflowStatus = workflowStatusElement;
    return this;
  }

  /** unresolved | not-persuasive | persuasive | persuasive-with-modification | not-persuasive-with-modification (0..1) */
  getDisposition(): valueSetCodes.ArtifactAssessmentDisposition | undefined {
    return this.disposition;
  }

  /** Sets `disposition`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setDisposition(disposition: valueSetCodes.ArtifactAssessmentDisposition | undefined): this {
    return this.setFieldValue('disposition', disposition);
  }

  hasDisposition(): boolean {
    return this.hasFieldValue('disposition');
  }

  /** The element carrying the id and extensions of `disposition`. Created when absent. */
  getDispositionElement(): Element {
    if (this._disposition === undefined) {
      this._disposition = new Element();
    }
    return this._disposition;
  }

  setDispositionElement(dispositionElement: Element | undefined): this {
    this._disposition = dispositionElement;
    return this;
  }
}

modelTypeRegistry.register('ArtifactAssessment', ArtifactAssessment, true);

/** True when the value is a ArtifactAssessment model instance. */
export function isArtifactAssessment(candidate: unknown): candidate is ArtifactAssessment {
  return candidate instanceof ArtifactAssessment;
}

/**
 * Comment, classifier, or rating content
 */
export class ArtifactAssessmentContent extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'informationType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'informationType',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ArtifactAssessmentInformationType,
        },
      ],
    },
    {
      elementName: 'summary',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'summary', typeCode: 'markdown' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'classifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'classifier', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'author',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'author',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Device',
            'Organization',
            'Patient',
            'Practitioner',
            'PractitionerRole',
          ],
        },
      ],
    },
    {
      elementName: 'path',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'path', typeCode: 'uri' }],
    },
    {
      elementName: 'relatedArtifact',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'relatedArtifact', typeCode: 'RelatedArtifact' }],
    },
    {
      elementName: 'freeToShare',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'freeToShare', typeCode: 'boolean' }],
    },
    {
      elementName: 'component',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'component', typeCode: 'ArtifactAssessmentContent' }],
    },
  ];

  /** comment | classifier | rating | container | response | change-request (0..1) */
  informationType?: valueSetCodes.ArtifactAssessmentInformationType;
  /** Id and extensions of the primitive `informationType`. */
  _informationType?: Element;

  /** Brief summary of the content (0..1) */
  summary?: string;
  /** Id and extensions of the primitive `summary`. */
  _summary?: Element;

  /** What type of content (0..1) */
  type?: CodeableConcept;

  /** Rating, classifier, or assessment (0..*) */
  classifier?: CodeableConcept[];

  /** Quantitative rating (0..1) */
  quantity?: Quantity;

  /** Who authored the content (0..1) */
  author?: Reference;

  /** What the comment is directed to (0..*) */
  path?: string[];
  /** Id and extensions of the primitive `path`. */
  _path?: (Element | null)[];

  /** Additional information (0..*) */
  relatedArtifact?: RelatedArtifact[];

  /** Acceptable to publicly share the resource content (0..1) */
  freeToShare?: boolean;
  /** Id and extensions of the primitive `freeToShare`. */
  _freeToShare?: Element;

  /** Contained content (0..*) */
  component?: ArtifactAssessmentContent[];

  override fhirType(): string {
    return 'ArtifactAssessment.content';
  }

  /** FHIR JSON for this ArtifactAssessmentContent, typed as the plain `ArtifactAssessmentContent` data type. */
  override toJSON(): plainTypes.ArtifactAssessmentContent {
    return this.serialize() as plainTypes.ArtifactAssessmentContent;
  }

  /** comment | classifier | rating | container | response | change-request (0..1) */
  getInformationType(): valueSetCodes.ArtifactAssessmentInformationType | undefined {
    return this.informationType;
  }

  /** Sets `informationType`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setInformationType(
    informationType: valueSetCodes.ArtifactAssessmentInformationType | undefined
  ): this {
    return this.setFieldValue('informationType', informationType);
  }

  hasInformationType(): boolean {
    return this.hasFieldValue('informationType');
  }

  /** The element carrying the id and extensions of `informationType`. Created when absent. */
  getInformationTypeElement(): Element {
    if (this._informationType === undefined) {
      this._informationType = new Element();
    }
    return this._informationType;
  }

  setInformationTypeElement(informationTypeElement: Element | undefined): this {
    this._informationType = informationTypeElement;
    return this;
  }

  /** Brief summary of the content (0..1) */
  getSummary(): string | undefined {
    return this.summary;
  }

  /** Sets `summary`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setSummary(summary: string | undefined): this {
    return this.setFieldValue('summary', summary);
  }

  hasSummary(): boolean {
    return this.hasFieldValue('summary');
  }

  /** The element carrying the id and extensions of `summary`. Created when absent. */
  getSummaryElement(): Element {
    if (this._summary === undefined) {
      this._summary = new Element();
    }
    return this._summary;
  }

  setSummaryElement(summaryElement: Element | undefined): this {
    this._summary = summaryElement;
    return this;
  }

  /** What type of content (0..1) Created when absent. */
  getType(): CodeableConcept {
    if (this.type === undefined) {
      this.type = new CodeableConcept();
    }
    return this.type;
  }

  setType(type: CodeableConcept | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Rating, classifier, or assessment (0..*) Never undefined; an empty list is created when absent. */
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

  /** Quantitative rating (0..1) Created when absent. */
  getQuantity(): Quantity {
    if (this.quantity === undefined) {
      this.quantity = new Quantity();
    }
    return this.quantity;
  }

  setQuantity(quantity: Quantity | undefined): this {
    return this.setFieldValue('quantity', quantity);
  }

  hasQuantity(): boolean {
    return this.hasFieldValue('quantity');
  }

  /** Who authored the content (0..1) Created when absent. */
  getAuthor(): Reference {
    if (this.author === undefined) {
      this.author = new Reference();
    }
    return this.author;
  }

  setAuthor(author: Reference | undefined): this {
    return this.setFieldValue('author', author);
  }

  hasAuthor(): boolean {
    return this.hasFieldValue('author');
  }

  /** What the comment is directed to (0..*) Never undefined; an empty list is created when absent. */
  getPath(): string[] {
    if (this.path === undefined) {
      this.path = [];
    }
    return this.path;
  }

  setPath(path: string[] | undefined): this {
    return this.setFieldValue('path', path);
  }

  hasPath(): boolean {
    return this.hasFieldValue('path');
  }

  /** Appends one value to `path`. Throws a FhirModelError when it is not a valid FHIR uri. */
  addPath(path: string): this {
    return this.addFieldValue('path', path);
  }

  /** Additional information (0..*) Never undefined; an empty list is created when absent. */
  getRelatedArtifact(): RelatedArtifact[] {
    if (this.relatedArtifact === undefined) {
      this.relatedArtifact = [];
    }
    return this.relatedArtifact;
  }

  setRelatedArtifact(relatedArtifact: RelatedArtifact[] | undefined): this {
    return this.setFieldValue('relatedArtifact', relatedArtifact);
  }

  hasRelatedArtifact(): boolean {
    return this.hasFieldValue('relatedArtifact');
  }

  /** Appends a new, empty RelatedArtifact to `relatedArtifact` and returns it so it can be filled in. */
  addRelatedArtifact(): RelatedArtifact;
  /** Appends the given RelatedArtifact to `relatedArtifact` and returns this object for chaining. */
  addRelatedArtifact(relatedArtifact: RelatedArtifact): this;
  addRelatedArtifact(relatedArtifact?: RelatedArtifact): RelatedArtifact | this {
    if (relatedArtifact !== undefined) {
      return this.addFieldValue('relatedArtifact', relatedArtifact);
    }
    const createdRelatedArtifact = new RelatedArtifact();
    this.addFieldValue('relatedArtifact', createdRelatedArtifact);
    return createdRelatedArtifact;
  }

  /** The first RelatedArtifact of `relatedArtifact`. One is added when the list is empty. */
  getRelatedArtifactFirstRep(): RelatedArtifact {
    const firstRelatedArtifact = this.getRelatedArtifact()[0];
    return firstRelatedArtifact === undefined ? this.addRelatedArtifact() : firstRelatedArtifact;
  }

  /** Acceptable to publicly share the resource content (0..1) */
  getFreeToShare(): boolean | undefined {
    return this.freeToShare;
  }

  /** Sets `freeToShare`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setFreeToShare(freeToShare: boolean | undefined): this {
    return this.setFieldValue('freeToShare', freeToShare);
  }

  hasFreeToShare(): boolean {
    return this.hasFieldValue('freeToShare');
  }

  /** The element carrying the id and extensions of `freeToShare`. Created when absent. */
  getFreeToShareElement(): Element {
    if (this._freeToShare === undefined) {
      this._freeToShare = new Element();
    }
    return this._freeToShare;
  }

  setFreeToShareElement(freeToShareElement: Element | undefined): this {
    this._freeToShare = freeToShareElement;
    return this;
  }

  /** Contained content (0..*) Never undefined; an empty list is created when absent. */
  getComponent(): ArtifactAssessmentContent[] {
    if (this.component === undefined) {
      this.component = [];
    }
    return this.component;
  }

  setComponent(component: ArtifactAssessmentContent[] | undefined): this {
    return this.setFieldValue('component', component);
  }

  hasComponent(): boolean {
    return this.hasFieldValue('component');
  }

  /** Appends a new, empty ArtifactAssessmentContent to `component` and returns it so it can be filled in. */
  addComponent(): ArtifactAssessmentContent;
  /** Appends the given ArtifactAssessmentContent to `component` and returns this object for chaining. */
  addComponent(artifactAssessmentContent: ArtifactAssessmentContent): this;
  addComponent(
    artifactAssessmentContent?: ArtifactAssessmentContent
  ): ArtifactAssessmentContent | this {
    if (artifactAssessmentContent !== undefined) {
      return this.addFieldValue('component', artifactAssessmentContent);
    }
    const createdArtifactAssessmentContent = new ArtifactAssessmentContent();
    this.addFieldValue('component', createdArtifactAssessmentContent);
    return createdArtifactAssessmentContent;
  }

  /** The first ArtifactAssessmentContent of `component`. One is added when the list is empty. */
  getComponentFirstRep(): ArtifactAssessmentContent {
    const firstArtifactAssessmentContent = this.getComponent()[0];
    return firstArtifactAssessmentContent === undefined
      ? this.addComponent()
      : firstArtifactAssessmentContent;
  }
}

modelTypeRegistry.register('ArtifactAssessmentContent', ArtifactAssessmentContent, false);
