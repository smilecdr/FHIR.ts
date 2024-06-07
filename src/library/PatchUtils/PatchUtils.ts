import { PATCH_DATATYPE, PatchAddValueParams, PatchAddBackboneElementParams } from "../constants";

/**
 * This a simple utility to create Parameters resource for FHIR patch operation
 * https://www.hl7.org/fhir/fhirpatch.html
 */
export class PatchUtils {
  private REPLACE_OPERATION_NAME = "replace";
  private DELETE_OPERATION_NAME = "delete";
  private MOVE_OPERATION_NAME = "move";
  private ADD_OPERATION_NAME = "add";
  private INSERT_OPERATION_NAME = "insert";
  private readonly PARAMETER_PROPERTY_NAME = "parameter";
  private baseParameters = {
    resourceType: "Parameters",
    parameter: [],
  };

  /**
   *
   * @param path the path to replace value of
   * @param value the value to replace with
   * @param valueDataType the data type of value
   * @returns Parameters resource for FHIR patch replace operation
   */
  createReplaceParameters(
    path: string,
    value: any,
    valueDataType: PATCH_DATATYPE
  ) {
    const replaceParameters = {
      name: "operation",
      part: [
        {
          name: "type",
          valueCode: this.REPLACE_OPERATION_NAME,
        },
        {
          name: "path",
          valueString: path,
        },
        {
          name: "value",
          [valueDataType]: value,
        },
      ],
    };
    this.baseParameters[this.PARAMETER_PROPERTY_NAME].push(replaceParameters);
    return this;
  }

  /**
   *
   * @param path the path to delete value of
   * @returns Parameters resource for FHIR patch delete operation
   */
  createDeleteParameters(path: string) {
    const deleteParameters = {
      name: "operation",
      part: [
        {
          name: "type",
          valueCode: this.DELETE_OPERATION_NAME,
        },
        {
          name: "path",
          valueString: path,
        },
      ],
    };
    this.baseParameters[this.PARAMETER_PROPERTY_NAME].push(deleteParameters);
    return this;
  }

  /**
   *
   * @param path the path to property where the index of items needs to be changed
   * @param source the index to move
   * @param destination the index where the value will be moved
   * @returns Parameters resource for FHIR patch move operation
   */
  createMoveParameters(path: string, source: number, destination: number) {
    const moveParameters = {
      name: "operation",
      part: [
        {
          name: "type",
          valueCode: this.MOVE_OPERATION_NAME,
        },
        {
          name: "path",
          valueString: path,
        },
        {
          name: "source",
          valueInteger: source,
        },
        {
          name: "destination",
          valueInteger: destination,
        },
      ],
    };
    this.baseParameters[this.PARAMETER_PROPERTY_NAME].push(moveParameters);
    return this;
  }

  /**
   * @param path the path at which to add the content
   * @param name name of the property to add
   * @param patchAddValueParams  the value to replace with & the data type of value
   * @returns Parameters resource for FHIR patch add operation
   */
  createAddParameters(
    path: string,
    name: string,
    patchAddValueParams: PatchAddValueParams
  ) {
    const addParameters = {
      name: "operation",
      part: [
        ...this.getCommonAddParameters(path, name),
        {
          name: "value",
          [patchAddValueParams.valueDataType]: patchAddValueParams.value,
        },
      ],
    };
    this.baseParameters[this.PARAMETER_PROPERTY_NAME].push(addParameters);
    return this;
  }

  /**
   * 
   * @param path the path at which to add the content
   * @param name name of the property to add
   * @param patchAddValueParams  the value to replace with, the data type of value & the backbone element property
   * @returns 
   */
  createAddParametersForBackboneElement(
    path: string,
    name: string,
    patchAddValueParams: PatchAddBackboneElementParams[]
  ) {
    const parts = [];
    patchAddValueParams.forEach((x) => {
      parts.push({
        name: x.backBoneElementProperty,
        [x.valueDataType]: x.value,
      });
    });
    const addParameters = {
      name: "operation",
      part: [
        ...this.getCommonAddParameters(path, name),
        {
          name: "value",
          part: parts,
        },
      ],
    };
    this.baseParameters[this.PARAMETER_PROPERTY_NAME].push(addParameters);
    return this;
  }

  /**
   *
   * @param path the path at which to insert the value
   * @param value the value to insert
   * @param valueDataType the datatype of the value
   * @param index the index at which the value should be inserted
   * @returns Parameters resource for FHIR patch insert operation
   */
  createInsertParameters(
    path: string,
    value: any,
    valueDataType: PATCH_DATATYPE,
    index: number
  ) {
    const insertParameters = {
      name: "operation",
      part: [
        {
          name: "type",
          valueCode: this.INSERT_OPERATION_NAME,
        },
        {
          name: "path",
          valueString: path,
        },
        {
          name: "index",
          valueInteger: index,
        },
        {
          name: "value",
          [valueDataType]: value,
        },
      ],
    };
    this.baseParameters[this.PARAMETER_PROPERTY_NAME].push(insertParameters);
    return this;
  }

  /**
   * @returns the parameters resource created for FHIR PATCH operation
   */
  getPatchParameters() {
    return this.baseParameters;
  }

  /**
   * Resets the parameter property in PATCH parameters resource
   */
  resetPatchParameters() {
    this.baseParameters.parameter = [];
    return this;
  }

  private getCommonAddParameters(path: string, name: string) {
    return [
      {
        name: "type",
        valueCode: this.ADD_OPERATION_NAME,
      },
      {
        name: "path",
        valueString: path,
      },
      {
        name: "name",
        valueString: name,
      },
    ];
  }
}
