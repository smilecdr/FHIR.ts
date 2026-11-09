import type {
  PatchAddBackboneElementParams,
  PatchAddValueParams,
  PatchParameters,
  PatchParametersPart,
  PatchValueProperty,
} from '../constants';

const OPERATION_PARAMETER_NAME = 'operation';
const REPLACE_OPERATION_NAME = 'replace';
const DELETE_OPERATION_NAME = 'delete';
const MOVE_OPERATION_NAME = 'move';
const ADD_OPERATION_NAME = 'add';
const INSERT_OPERATION_NAME = 'insert';

/**
 * This a simple utility to create Parameters resource for FHIR patch operation
 * https://www.hl7.org/fhir/fhirpatch.html
 */
export class PatchUtils {
  private operations: PatchParametersPart[] = [];

  /**
   *
   * @param path the path to replace value of
   * @param value the value to replace with
   * @param valueDataType the data type of value
   * @returns this, so operations can be chained
   */
  createReplaceParameters(path: string, value: unknown, valueDataType: PatchValueProperty): this {
    return this.addOperation(REPLACE_OPERATION_NAME, path, [
      { name: 'value', [valueDataType]: value },
    ]);
  }

  /**
   *
   * @param path the path to delete value of
   * @returns this, so operations can be chained
   */
  createDeleteParameters(path: string): this {
    return this.addOperation(DELETE_OPERATION_NAME, path, []);
  }

  /**
   *
   * @param path the path to property where the index of items needs to be changed
   * @param source the index to move
   * @param destination the index where the value will be moved
   * @returns this, so operations can be chained
   */
  createMoveParameters(path: string, source: number, destination: number): this {
    return this.addOperation(MOVE_OPERATION_NAME, path, [
      { name: 'source', valueInteger: source },
      { name: 'destination', valueInteger: destination },
    ]);
  }

  /**
   * @param path the path at which to add the content
   * @param name name of the property to add
   * @param patchAddValueParams the value to add & the data type of value
   * @returns this, so operations can be chained
   */
  createAddParameters(path: string, name: string, patchAddValueParams: PatchAddValueParams): this {
    return this.addOperation(ADD_OPERATION_NAME, path, [
      { name: 'name', valueString: name },
      { name: 'value', [patchAddValueParams.valueDataType]: patchAddValueParams.value },
    ]);
  }

  /**
   *
   * @param path the path at which to add the content
   * @param name name of the property to add
   * @param patchAddValueParams for each property of the backbone element: its name, value & the data type of value
   * @returns this, so operations can be chained
   */
  createAddParametersForBackboneElement(
    path: string,
    name: string,
    patchAddValueParams: PatchAddBackboneElementParams[]
  ): this {
    const backboneElementParts: PatchParametersPart[] = patchAddValueParams.map(
      (backboneElementProperty) => ({
        name: backboneElementProperty.backBoneElementProperty,
        [backboneElementProperty.valueDataType]: backboneElementProperty.value,
      })
    );
    return this.addOperation(ADD_OPERATION_NAME, path, [
      { name: 'name', valueString: name },
      { name: 'value', part: backboneElementParts },
    ]);
  }

  /**
   *
   * @param path the path at which to insert the value
   * @param value the value to insert
   * @param valueDataType the datatype of the value
   * @param index the index at which the value should be inserted
   * @returns this, so operations can be chained
   */
  createInsertParameters(
    path: string,
    value: unknown,
    valueDataType: PatchValueProperty,
    index: number
  ): this {
    return this.addOperation(INSERT_OPERATION_NAME, path, [
      { name: 'index', valueInteger: index },
      { name: 'value', [valueDataType]: value },
    ]);
  }

  /**
   * @returns the Parameters resource for the FHIR PATCH operation. Each call
   *   returns a new object holding the operations created so far, so creating
   *   more operations afterwards does not change a result already returned.
   */
  getPatchParameters(): PatchParameters {
    return { resourceType: 'Parameters', parameter: [...this.operations] };
  }

  /**
   * Removes every operation created so far
   */
  resetPatchParameters(): this {
    this.operations = [];
    return this;
  }

  private addOperation(
    operationType: string,
    path: string,
    operationSpecificParts: PatchParametersPart[]
  ): this {
    this.operations.push({
      name: OPERATION_PARAMETER_NAME,
      part: [
        { name: 'type', valueCode: operationType },
        { name: 'path', valueString: path },
        ...operationSpecificParts,
      ],
    });
    return this;
  }
}
