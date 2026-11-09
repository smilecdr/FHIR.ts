/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../classes/models-r3';
import { Element } from './element';

/**
 * Base StructureDefinition for Coding Type
 */
export class Coding extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'system',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'system', typeCode: 'uri' }],
    },
    {
      elementName: 'version',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'version', typeCode: 'string' }],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'code' }],
    },
    {
      elementName: 'display',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'display', typeCode: 'string' }],
    },
    {
      elementName: 'userSelected',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'userSelected', typeCode: 'boolean' }],
    },
  ];

  /** Identity of the terminology system (0..1) */
  system?: string;
  /** Id and extensions of the primitive `system`. */
  _system?: Element;

  /** Version of the system - if relevant (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** Symbol in syntax defined by the system (0..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;

  /** Representation defined by the system (0..1) */
  display?: string;
  /** Id and extensions of the primitive `display`. */
  _display?: Element;

  /** If this coding was chosen directly by the user (0..1) */
  userSelected?: boolean;
  /** Id and extensions of the primitive `userSelected`. */
  _userSelected?: Element;

  override fhirType(): string {
    return 'Coding';
  }

  /** FHIR JSON for this Coding, typed as the plain `Coding` data type. */
  override toJSON(): plainTypes.Coding {
    return this.serialize() as plainTypes.Coding;
  }

  /** Identity of the terminology system (0..1) */
  getSystem(): string | undefined {
    return this.system;
  }

  /** Sets `system`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setSystem(system: string | undefined): this {
    return this.setFieldValue('system', system);
  }

  hasSystem(): boolean {
    return this.hasFieldValue('system');
  }

  /** The element carrying the id and extensions of `system`. Created when absent. */
  getSystemElement(): Element {
    if (this._system === undefined) {
      this._system = new Element();
    }
    return this._system;
  }

  setSystemElement(systemElement: Element | undefined): this {
    this._system = systemElement;
    return this;
  }

  /** Version of the system - if relevant (0..1) */
  getVersion(): string | undefined {
    return this.version;
  }

  /** Sets `version`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setVersion(version: string | undefined): this {
    return this.setFieldValue('version', version);
  }

  hasVersion(): boolean {
    return this.hasFieldValue('version');
  }

  /** The element carrying the id and extensions of `version`. Created when absent. */
  getVersionElement(): Element {
    if (this._version === undefined) {
      this._version = new Element();
    }
    return this._version;
  }

  setVersionElement(versionElement: Element | undefined): this {
    this._version = versionElement;
    return this;
  }

  /** Symbol in syntax defined by the system (0..1) */
  getCode(): string | undefined {
    return this.code;
  }

  /** Sets `code`. Throws a FhirModelError when the value is not a valid FHIR code. */
  setCode(code: string | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** The element carrying the id and extensions of `code`. Created when absent. */
  getCodeElement(): Element {
    if (this._code === undefined) {
      this._code = new Element();
    }
    return this._code;
  }

  setCodeElement(codeElement: Element | undefined): this {
    this._code = codeElement;
    return this;
  }

  /** Representation defined by the system (0..1) */
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

  /** If this coding was chosen directly by the user (0..1) */
  getUserSelected(): boolean | undefined {
    return this.userSelected;
  }

  /** Sets `userSelected`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setUserSelected(userSelected: boolean | undefined): this {
    return this.setFieldValue('userSelected', userSelected);
  }

  hasUserSelected(): boolean {
    return this.hasFieldValue('userSelected');
  }

  /** The element carrying the id and extensions of `userSelected`. Created when absent. */
  getUserSelectedElement(): Element {
    if (this._userSelected === undefined) {
      this._userSelected = new Element();
    }
    return this._userSelected;
  }

  setUserSelectedElement(userSelectedElement: Element | undefined): this {
    this._userSelected = userSelectedElement;
    return this;
  }
}

modelTypeRegistry.register('Coding', Coding, false);
