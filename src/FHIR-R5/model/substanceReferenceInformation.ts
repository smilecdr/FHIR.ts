/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../models';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Quantity } from './quantity';
import { Range } from './range';
import { Reference } from './reference';

/**
 * Todo.
 */
export class SubstanceReferenceInformation extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'comment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'comment', typeCode: 'string' }],
    },
    {
      elementName: 'gene',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'gene', typeCode: 'SubstanceReferenceInformationGene' }],
    },
    {
      elementName: 'geneElement',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'geneElement', typeCode: 'SubstanceReferenceInformationGeneElement' }],
    },
    {
      elementName: 'target',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'target', typeCode: 'SubstanceReferenceInformationTarget' }],
    },
  ];

  readonly resourceType = 'SubstanceReferenceInformation';

  /** Todo (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;

  /** Todo (0..*) */
  gene?: SubstanceReferenceInformationGene[];

  /** Todo (0..*) */
  geneElement?: SubstanceReferenceInformationGeneElement[];

  /** Todo (0..*) */
  target?: SubstanceReferenceInformationTarget[];

  override fhirType(): string {
    return 'SubstanceReferenceInformation';
  }

  /** FHIR JSON for this SubstanceReferenceInformation, typed as the plain `SubstanceReferenceInformation` data type. */
  override toJSON(): plainTypes.SubstanceReferenceInformation {
    return this.serialize() as plainTypes.SubstanceReferenceInformation;
  }

  /** Todo (0..1) */
  getComment(): string | undefined {
    return this.comment;
  }

  /** Sets `comment`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setComment(comment: string | undefined): this {
    return this.setFieldValue('comment', comment);
  }

  hasComment(): boolean {
    return this.hasFieldValue('comment');
  }

  /** The element carrying the id and extensions of `comment`. Created when absent. */
  getCommentElement(): Element {
    if (this._comment === undefined) {
      this._comment = new Element();
    }
    return this._comment;
  }

  setCommentElement(commentElement: Element | undefined): this {
    this._comment = commentElement;
    return this;
  }

  /** Todo (0..*) Never undefined; an empty list is created when absent. */
  getGene(): SubstanceReferenceInformationGene[] {
    if (this.gene === undefined) {
      this.gene = [];
    }
    return this.gene;
  }

  setGene(gene: SubstanceReferenceInformationGene[] | undefined): this {
    return this.setFieldValue('gene', gene);
  }

  hasGene(): boolean {
    return this.hasFieldValue('gene');
  }

  /** Appends a new, empty SubstanceReferenceInformationGene to `gene` and returns it so it can be filled in. */
  addGene(): SubstanceReferenceInformationGene;
  /** Appends the given SubstanceReferenceInformationGene to `gene` and returns this object for chaining. */
  addGene(substanceReferenceInformationGene: SubstanceReferenceInformationGene): this;
  addGene(
    substanceReferenceInformationGene?: SubstanceReferenceInformationGene
  ): SubstanceReferenceInformationGene | this {
    if (substanceReferenceInformationGene !== undefined) {
      return this.addFieldValue('gene', substanceReferenceInformationGene);
    }
    const createdSubstanceReferenceInformationGene = new SubstanceReferenceInformationGene();
    this.addFieldValue('gene', createdSubstanceReferenceInformationGene);
    return createdSubstanceReferenceInformationGene;
  }

  /** The first SubstanceReferenceInformationGene of `gene`. One is added when the list is empty. */
  getGeneFirstRep(): SubstanceReferenceInformationGene {
    const firstSubstanceReferenceInformationGene = this.getGene()[0];
    return firstSubstanceReferenceInformationGene === undefined
      ? this.addGene()
      : firstSubstanceReferenceInformationGene;
  }

  /** Todo (0..*) Never undefined; an empty list is created when absent. */
  getGeneElement(): SubstanceReferenceInformationGeneElement[] {
    if (this.geneElement === undefined) {
      this.geneElement = [];
    }
    return this.geneElement;
  }

  setGeneElement(geneElement: SubstanceReferenceInformationGeneElement[] | undefined): this {
    return this.setFieldValue('geneElement', geneElement);
  }

  hasGeneElement(): boolean {
    return this.hasFieldValue('geneElement');
  }

  /** Appends a new, empty SubstanceReferenceInformationGeneElement to `geneElement` and returns it so it can be filled in. */
  addGeneElement(): SubstanceReferenceInformationGeneElement;
  /** Appends the given SubstanceReferenceInformationGeneElement to `geneElement` and returns this object for chaining. */
  addGeneElement(
    substanceReferenceInformationGeneElement: SubstanceReferenceInformationGeneElement
  ): this;
  addGeneElement(
    substanceReferenceInformationGeneElement?: SubstanceReferenceInformationGeneElement
  ): SubstanceReferenceInformationGeneElement | this {
    if (substanceReferenceInformationGeneElement !== undefined) {
      return this.addFieldValue('geneElement', substanceReferenceInformationGeneElement);
    }
    const createdSubstanceReferenceInformationGeneElement =
      new SubstanceReferenceInformationGeneElement();
    this.addFieldValue('geneElement', createdSubstanceReferenceInformationGeneElement);
    return createdSubstanceReferenceInformationGeneElement;
  }

  /** The first SubstanceReferenceInformationGeneElement of `geneElement`. One is added when the list is empty. */
  getGeneElementFirstRep(): SubstanceReferenceInformationGeneElement {
    const firstSubstanceReferenceInformationGeneElement = this.getGeneElement()[0];
    return firstSubstanceReferenceInformationGeneElement === undefined
      ? this.addGeneElement()
      : firstSubstanceReferenceInformationGeneElement;
  }

  /** Todo (0..*) Never undefined; an empty list is created when absent. */
  getTarget(): SubstanceReferenceInformationTarget[] {
    if (this.target === undefined) {
      this.target = [];
    }
    return this.target;
  }

  setTarget(target: SubstanceReferenceInformationTarget[] | undefined): this {
    return this.setFieldValue('target', target);
  }

  hasTarget(): boolean {
    return this.hasFieldValue('target');
  }

  /** Appends a new, empty SubstanceReferenceInformationTarget to `target` and returns it so it can be filled in. */
  addTarget(): SubstanceReferenceInformationTarget;
  /** Appends the given SubstanceReferenceInformationTarget to `target` and returns this object for chaining. */
  addTarget(substanceReferenceInformationTarget: SubstanceReferenceInformationTarget): this;
  addTarget(
    substanceReferenceInformationTarget?: SubstanceReferenceInformationTarget
  ): SubstanceReferenceInformationTarget | this {
    if (substanceReferenceInformationTarget !== undefined) {
      return this.addFieldValue('target', substanceReferenceInformationTarget);
    }
    const createdSubstanceReferenceInformationTarget = new SubstanceReferenceInformationTarget();
    this.addFieldValue('target', createdSubstanceReferenceInformationTarget);
    return createdSubstanceReferenceInformationTarget;
  }

  /** The first SubstanceReferenceInformationTarget of `target`. One is added when the list is empty. */
  getTargetFirstRep(): SubstanceReferenceInformationTarget {
    const firstSubstanceReferenceInformationTarget = this.getTarget()[0];
    return firstSubstanceReferenceInformationTarget === undefined
      ? this.addTarget()
      : firstSubstanceReferenceInformationTarget;
  }
}

modelTypeRegistry.register('SubstanceReferenceInformation', SubstanceReferenceInformation, true);

/** True when the value is a SubstanceReferenceInformation model instance. */
export function isSubstanceReferenceInformation(
  candidate: unknown
): candidate is SubstanceReferenceInformation {
  return candidate instanceof SubstanceReferenceInformation;
}

/**
 * Todo
 */
export class SubstanceReferenceInformationGene extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'geneSequenceOrigin',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'geneSequenceOrigin', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'gene',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'gene', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'source',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'source', typeCode: 'Reference', targetResourceTypes: ['DocumentReference'] },
      ],
    },
  ];

  /** Todo (0..1) */
  geneSequenceOrigin?: CodeableConcept;

  /** Todo (0..1) */
  gene?: CodeableConcept;

  /** Todo (0..*) */
  source?: Reference[];

  override fhirType(): string {
    return 'SubstanceReferenceInformation.gene';
  }

  /** FHIR JSON for this SubstanceReferenceInformationGene, typed as the plain `SubstanceReferenceInformationGene` data type. */
  override toJSON(): plainTypes.SubstanceReferenceInformationGene {
    return this.serialize() as plainTypes.SubstanceReferenceInformationGene;
  }

  /** Todo (0..1) Created when absent. */
  getGeneSequenceOrigin(): CodeableConcept {
    if (this.geneSequenceOrigin === undefined) {
      this.geneSequenceOrigin = new CodeableConcept();
    }
    return this.geneSequenceOrigin;
  }

  setGeneSequenceOrigin(geneSequenceOrigin: CodeableConcept | undefined): this {
    return this.setFieldValue('geneSequenceOrigin', geneSequenceOrigin);
  }

  hasGeneSequenceOrigin(): boolean {
    return this.hasFieldValue('geneSequenceOrigin');
  }

  /** Todo (0..1) Created when absent. */
  getGene(): CodeableConcept {
    if (this.gene === undefined) {
      this.gene = new CodeableConcept();
    }
    return this.gene;
  }

  setGene(gene: CodeableConcept | undefined): this {
    return this.setFieldValue('gene', gene);
  }

  hasGene(): boolean {
    return this.hasFieldValue('gene');
  }

  /** Todo (0..*) Never undefined; an empty list is created when absent. */
  getSource(): Reference[] {
    if (this.source === undefined) {
      this.source = [];
    }
    return this.source;
  }

  setSource(source: Reference[] | undefined): this {
    return this.setFieldValue('source', source);
  }

  hasSource(): boolean {
    return this.hasFieldValue('source');
  }

  /** Appends a new, empty Reference to `source` and returns it so it can be filled in. */
  addSource(): Reference;
  /** Appends the given Reference to `source` and returns this object for chaining. */
  addSource(reference: Reference): this;
  addSource(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('source', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('source', createdReference);
    return createdReference;
  }

  /** The first Reference of `source`. One is added when the list is empty. */
  getSourceFirstRep(): Reference {
    const firstReference = this.getSource()[0];
    return firstReference === undefined ? this.addSource() : firstReference;
  }
}

modelTypeRegistry.register(
  'SubstanceReferenceInformationGene',
  SubstanceReferenceInformationGene,
  false
);

/**
 * Todo
 */
export class SubstanceReferenceInformationGeneElement extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'element',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'element', typeCode: 'Identifier' }],
    },
    {
      elementName: 'source',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'source', typeCode: 'Reference', targetResourceTypes: ['DocumentReference'] },
      ],
    },
  ];

  /** Todo (0..1) */
  type?: CodeableConcept;

  /** Todo (0..1) */
  element?: Identifier;

  /** Todo (0..*) */
  source?: Reference[];

  override fhirType(): string {
    return 'SubstanceReferenceInformation.geneElement';
  }

  /** FHIR JSON for this SubstanceReferenceInformationGeneElement, typed as the plain `SubstanceReferenceInformationGeneElement` data type. */
  override toJSON(): plainTypes.SubstanceReferenceInformationGeneElement {
    return this.serialize() as plainTypes.SubstanceReferenceInformationGeneElement;
  }

  /** Todo (0..1) Created when absent. */
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

  /** Todo (0..1) Created when absent. */
  getElement(): Identifier {
    if (this.element === undefined) {
      this.element = new Identifier();
    }
    return this.element;
  }

  setElement(element: Identifier | undefined): this {
    return this.setFieldValue('element', element);
  }

  hasElement(): boolean {
    return this.hasFieldValue('element');
  }

  /** Todo (0..*) Never undefined; an empty list is created when absent. */
  getSource(): Reference[] {
    if (this.source === undefined) {
      this.source = [];
    }
    return this.source;
  }

  setSource(source: Reference[] | undefined): this {
    return this.setFieldValue('source', source);
  }

  hasSource(): boolean {
    return this.hasFieldValue('source');
  }

  /** Appends a new, empty Reference to `source` and returns it so it can be filled in. */
  addSource(): Reference;
  /** Appends the given Reference to `source` and returns this object for chaining. */
  addSource(reference: Reference): this;
  addSource(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('source', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('source', createdReference);
    return createdReference;
  }

  /** The first Reference of `source`. One is added when the list is empty. */
  getSourceFirstRep(): Reference {
    const firstReference = this.getSource()[0];
    return firstReference === undefined ? this.addSource() : firstReference;
  }
}

modelTypeRegistry.register(
  'SubstanceReferenceInformationGeneElement',
  SubstanceReferenceInformationGeneElement,
  false
);

/**
 * Todo
 */
export class SubstanceReferenceInformationTarget extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'target',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'target', typeCode: 'Identifier' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'interaction',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'interaction', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'organism',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'organism', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'organismType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'organismType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'amount',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'amountQuantity', typeCode: 'Quantity' },
        { jsonKey: 'amountRange', typeCode: 'Range' },
        { jsonKey: 'amountString', typeCode: 'string' },
      ],
    },
    {
      elementName: 'amountType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'amountType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'source',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'source', typeCode: 'Reference', targetResourceTypes: ['DocumentReference'] },
      ],
    },
  ];

  /** Todo (0..1) */
  target?: Identifier;

  /** Todo (0..1) */
  type?: CodeableConcept;

  /** Todo (0..1) */
  interaction?: CodeableConcept;

  /** Todo (0..1) */
  organism?: CodeableConcept;

  /** Todo (0..1) */
  organismType?: CodeableConcept;

  /** Todo (0..1) */
  amountQuantity?: Quantity;
  /** Todo (0..1) */
  amountRange?: Range;
  /** Todo (0..1) */
  amountString?: string;
  /** Id and extensions of the primitive `amountString`. */
  _amountString?: Element;

  /** Todo (0..1) */
  amountType?: CodeableConcept;

  /** Todo (0..*) */
  source?: Reference[];

  override fhirType(): string {
    return 'SubstanceReferenceInformation.target';
  }

  /** FHIR JSON for this SubstanceReferenceInformationTarget, typed as the plain `SubstanceReferenceInformationTarget` data type. */
  override toJSON(): plainTypes.SubstanceReferenceInformationTarget {
    return this.serialize() as plainTypes.SubstanceReferenceInformationTarget;
  }

  /** Todo (0..1) Created when absent. */
  getTarget(): Identifier {
    if (this.target === undefined) {
      this.target = new Identifier();
    }
    return this.target;
  }

  setTarget(target: Identifier | undefined): this {
    return this.setFieldValue('target', target);
  }

  hasTarget(): boolean {
    return this.hasFieldValue('target');
  }

  /** Todo (0..1) Created when absent. */
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

  /** Todo (0..1) Created when absent. */
  getInteraction(): CodeableConcept {
    if (this.interaction === undefined) {
      this.interaction = new CodeableConcept();
    }
    return this.interaction;
  }

  setInteraction(interaction: CodeableConcept | undefined): this {
    return this.setFieldValue('interaction', interaction);
  }

  hasInteraction(): boolean {
    return this.hasFieldValue('interaction');
  }

  /** Todo (0..1) Created when absent. */
  getOrganism(): CodeableConcept {
    if (this.organism === undefined) {
      this.organism = new CodeableConcept();
    }
    return this.organism;
  }

  setOrganism(organism: CodeableConcept | undefined): this {
    return this.setFieldValue('organism', organism);
  }

  hasOrganism(): boolean {
    return this.hasFieldValue('organism');
  }

  /** Todo (0..1) Created when absent. */
  getOrganismType(): CodeableConcept {
    if (this.organismType === undefined) {
      this.organismType = new CodeableConcept();
    }
    return this.organismType;
  }

  setOrganismType(organismType: CodeableConcept | undefined): this {
    return this.setFieldValue('organismType', organismType);
  }

  hasOrganismType(): boolean {
    return this.hasFieldValue('organismType');
  }

  /** Todo (0..1) Whichever type of `amount[x]` is set. */
  getAmount(): Quantity | Range | string | undefined {
    return this.getChoiceValue<Quantity | Range | string>('amount');
  }

  /** True when any type of `amount[x]` is set. */
  hasAmount(): boolean {
    return this.hasChoiceValue('amount');
  }

  getAmountQuantity(): Quantity | undefined {
    return this.amountQuantity;
  }

  /** Sets `amount[x]` as Quantity and clears every other type of it. */
  setAmountQuantity(amountQuantity: Quantity | undefined): this {
    return this.setFieldValue('amountQuantity', amountQuantity);
  }

  hasAmountQuantity(): boolean {
    return this.hasFieldValue('amountQuantity');
  }

  getAmountRange(): Range | undefined {
    return this.amountRange;
  }

  /** Sets `amount[x]` as Range and clears every other type of it. */
  setAmountRange(amountRange: Range | undefined): this {
    return this.setFieldValue('amountRange', amountRange);
  }

  hasAmountRange(): boolean {
    return this.hasFieldValue('amountRange');
  }

  getAmountString(): string | undefined {
    return this.amountString;
  }

  /** Sets `amount[x]` as string and clears every other type of it. */
  setAmountString(amountString: string | undefined): this {
    return this.setFieldValue('amountString', amountString);
  }

  hasAmountString(): boolean {
    return this.hasFieldValue('amountString');
  }

  /** Todo (0..1) Created when absent. */
  getAmountType(): CodeableConcept {
    if (this.amountType === undefined) {
      this.amountType = new CodeableConcept();
    }
    return this.amountType;
  }

  setAmountType(amountType: CodeableConcept | undefined): this {
    return this.setFieldValue('amountType', amountType);
  }

  hasAmountType(): boolean {
    return this.hasFieldValue('amountType');
  }

  /** Todo (0..*) Never undefined; an empty list is created when absent. */
  getSource(): Reference[] {
    if (this.source === undefined) {
      this.source = [];
    }
    return this.source;
  }

  setSource(source: Reference[] | undefined): this {
    return this.setFieldValue('source', source);
  }

  hasSource(): boolean {
    return this.hasFieldValue('source');
  }

  /** Appends a new, empty Reference to `source` and returns it so it can be filled in. */
  addSource(): Reference;
  /** Appends the given Reference to `source` and returns this object for chaining. */
  addSource(reference: Reference): this;
  addSource(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('source', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('source', createdReference);
    return createdReference;
  }

  /** The first Reference of `source`. One is added when the list is empty. */
  getSourceFirstRep(): Reference {
    const firstReference = this.getSource()[0];
    return firstReference === undefined ? this.addSource() : firstReference;
  }
}

modelTypeRegistry.register(
  'SubstanceReferenceInformationTarget',
  SubstanceReferenceInformationTarget,
  false
);
