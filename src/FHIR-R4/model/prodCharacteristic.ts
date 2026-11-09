/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../classes/models-r4';
import { Attachment } from './attachment';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { Element } from './element';
import { Quantity } from './quantity';

/**
 * The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.
 */
export class ProdCharacteristic extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'height',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'height', typeCode: 'Quantity' }],
    },
    {
      elementName: 'width',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'width', typeCode: 'Quantity' }],
    },
    {
      elementName: 'depth',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'depth', typeCode: 'Quantity' }],
    },
    {
      elementName: 'weight',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'weight', typeCode: 'Quantity' }],
    },
    {
      elementName: 'nominalVolume',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'nominalVolume', typeCode: 'Quantity' }],
    },
    {
      elementName: 'externalDiameter',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'externalDiameter', typeCode: 'Quantity' }],
    },
    {
      elementName: 'shape',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'shape', typeCode: 'string' }],
    },
    {
      elementName: 'color',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'color', typeCode: 'string' }],
    },
    {
      elementName: 'imprint',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'imprint', typeCode: 'string' }],
    },
    {
      elementName: 'image',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'image', typeCode: 'Attachment' }],
    },
    {
      elementName: 'scoring',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'scoring', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Where applicable, the height can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used (0..1) */
  height?: Quantity;

  /** Where applicable, the width can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used (0..1) */
  width?: Quantity;

  /** Where applicable, the depth can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used (0..1) */
  depth?: Quantity;

  /** Where applicable, the weight can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used (0..1) */
  weight?: Quantity;

  /** Where applicable, the nominal volume can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used (0..1) */
  nominalVolume?: Quantity;

  /** Where applicable, the external diameter can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used (0..1) */
  externalDiameter?: Quantity;

  /** Where applicable, the shape can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used (0..1) */
  shape?: string;
  /** Id and extensions of the primitive `shape`. */
  _shape?: Element;

  /** Where applicable, the color can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used (0..*) */
  color?: string[];
  /** Id and extensions of the primitive `color`. */
  _color?: (Element | null)[];

  /** Where applicable, the imprint can be specified as text (0..*) */
  imprint?: string[];
  /** Id and extensions of the primitive `imprint`. */
  _imprint?: (Element | null)[];

  /** Where applicable, the image can be provided The format of the image attachment shall be specified by regional implementations (0..*) */
  image?: Attachment[];

  /** Where applicable, the scoring can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used (0..1) */
  scoring?: CodeableConcept;

  override fhirType(): string {
    return 'ProdCharacteristic';
  }

  /** FHIR JSON for this ProdCharacteristic, typed as the plain `ProdCharacteristic` data type. */
  override toJSON(): plainTypes.ProdCharacteristic {
    return this.serialize() as plainTypes.ProdCharacteristic;
  }

  /** Where applicable, the height can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used (0..1) Created when absent. */
  getHeight(): Quantity {
    if (this.height === undefined) {
      this.height = new Quantity();
    }
    return this.height;
  }

  setHeight(height: Quantity | undefined): this {
    return this.setFieldValue('height', height);
  }

  hasHeight(): boolean {
    return this.hasFieldValue('height');
  }

  /** Where applicable, the width can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used (0..1) Created when absent. */
  getWidth(): Quantity {
    if (this.width === undefined) {
      this.width = new Quantity();
    }
    return this.width;
  }

  setWidth(width: Quantity | undefined): this {
    return this.setFieldValue('width', width);
  }

  hasWidth(): boolean {
    return this.hasFieldValue('width');
  }

  /** Where applicable, the depth can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used (0..1) Created when absent. */
  getDepth(): Quantity {
    if (this.depth === undefined) {
      this.depth = new Quantity();
    }
    return this.depth;
  }

  setDepth(depth: Quantity | undefined): this {
    return this.setFieldValue('depth', depth);
  }

  hasDepth(): boolean {
    return this.hasFieldValue('depth');
  }

  /** Where applicable, the weight can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used (0..1) Created when absent. */
  getWeight(): Quantity {
    if (this.weight === undefined) {
      this.weight = new Quantity();
    }
    return this.weight;
  }

  setWeight(weight: Quantity | undefined): this {
    return this.setFieldValue('weight', weight);
  }

  hasWeight(): boolean {
    return this.hasFieldValue('weight');
  }

  /** Where applicable, the nominal volume can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used (0..1) Created when absent. */
  getNominalVolume(): Quantity {
    if (this.nominalVolume === undefined) {
      this.nominalVolume = new Quantity();
    }
    return this.nominalVolume;
  }

  setNominalVolume(nominalVolume: Quantity | undefined): this {
    return this.setFieldValue('nominalVolume', nominalVolume);
  }

  hasNominalVolume(): boolean {
    return this.hasFieldValue('nominalVolume');
  }

  /** Where applicable, the external diameter can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used (0..1) Created when absent. */
  getExternalDiameter(): Quantity {
    if (this.externalDiameter === undefined) {
      this.externalDiameter = new Quantity();
    }
    return this.externalDiameter;
  }

  setExternalDiameter(externalDiameter: Quantity | undefined): this {
    return this.setFieldValue('externalDiameter', externalDiameter);
  }

  hasExternalDiameter(): boolean {
    return this.hasFieldValue('externalDiameter');
  }

  /** Where applicable, the shape can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used (0..1) */
  getShape(): string | undefined {
    return this.shape;
  }

  /** Sets `shape`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setShape(shape: string | undefined): this {
    return this.setFieldValue('shape', shape);
  }

  hasShape(): boolean {
    return this.hasFieldValue('shape');
  }

  /** The element carrying the id and extensions of `shape`. Created when absent. */
  getShapeElement(): Element {
    if (this._shape === undefined) {
      this._shape = new Element();
    }
    return this._shape;
  }

  setShapeElement(shapeElement: Element | undefined): this {
    this._shape = shapeElement;
    return this;
  }

  /** Where applicable, the color can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used (0..*) Never undefined; an empty list is created when absent. */
  getColor(): string[] {
    if (this.color === undefined) {
      this.color = [];
    }
    return this.color;
  }

  setColor(color: string[] | undefined): this {
    return this.setFieldValue('color', color);
  }

  hasColor(): boolean {
    return this.hasFieldValue('color');
  }

  /** Appends one value to `color`. Throws a FhirModelError when it is not a valid FHIR string. */
  addColor(color: string): this {
    return this.addFieldValue('color', color);
  }

  /** Where applicable, the imprint can be specified as text (0..*) Never undefined; an empty list is created when absent. */
  getImprint(): string[] {
    if (this.imprint === undefined) {
      this.imprint = [];
    }
    return this.imprint;
  }

  setImprint(imprint: string[] | undefined): this {
    return this.setFieldValue('imprint', imprint);
  }

  hasImprint(): boolean {
    return this.hasFieldValue('imprint');
  }

  /** Appends one value to `imprint`. Throws a FhirModelError when it is not a valid FHIR string. */
  addImprint(imprint: string): this {
    return this.addFieldValue('imprint', imprint);
  }

  /** Where applicable, the image can be provided The format of the image attachment shall be specified by regional implementations (0..*) Never undefined; an empty list is created when absent. */
  getImage(): Attachment[] {
    if (this.image === undefined) {
      this.image = [];
    }
    return this.image;
  }

  setImage(image: Attachment[] | undefined): this {
    return this.setFieldValue('image', image);
  }

  hasImage(): boolean {
    return this.hasFieldValue('image');
  }

  /** Appends a new, empty Attachment to `image` and returns it so it can be filled in. */
  addImage(): Attachment;
  /** Appends the given Attachment to `image` and returns this object for chaining. */
  addImage(attachment: Attachment): this;
  addImage(attachment?: Attachment): Attachment | this {
    if (attachment !== undefined) {
      return this.addFieldValue('image', attachment);
    }
    const createdAttachment = new Attachment();
    this.addFieldValue('image', createdAttachment);
    return createdAttachment;
  }

  /** The first Attachment of `image`. One is added when the list is empty. */
  getImageFirstRep(): Attachment {
    const firstAttachment = this.getImage()[0];
    return firstAttachment === undefined ? this.addImage() : firstAttachment;
  }

  /** Where applicable, the scoring can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used (0..1) Created when absent. */
  getScoring(): CodeableConcept {
    if (this.scoring === undefined) {
      this.scoring = new CodeableConcept();
    }
    return this.scoring;
  }

  setScoring(scoring: CodeableConcept | undefined): this {
    return this.setFieldValue('scoring', scoring);
  }

  hasScoring(): boolean {
    return this.hasFieldValue('scoring');
  }
}

modelTypeRegistry.register('ProdCharacteristic', ProdCharacteristic, false);
