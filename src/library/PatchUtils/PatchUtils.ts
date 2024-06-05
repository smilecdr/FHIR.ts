import { PATCH_DATATYPE } from "../constants";

/**
 * This a simple utility to create Parameters resource for FHIR patch operation
 * https://www.hl7.org/fhir/fhirpatch.html
 */
export class PatchUtils {
  private replaceOperation = "replace";
  private deleteOperation = "delete";
  private moveOperation = "move";
  private addOperation = "add";
  private insertOperation = "insert";

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
    return {
      resourceType: "Parameters",
      parameter: [
        {
          name: "operation",
          part: [
            {
              name: "type",
              valueCode: this.replaceOperation,
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
        },
      ],
    };
  }

  /**
   *
   * @param path the path to delete value of
   * @returns Parameters resource for FHIR patch delete operation
   */
  createDeleteParameters(path: string) {
    return {
      resourceType: "Parameters",
      parameter: [
        {
          name: "operation",
          part: [
            {
              name: "type",
              valueCode: this.deleteOperation,
            },
            {
              name: "path",
              valueString: path,
            },
          ],
        },
      ],
    };
  }

  /**
   *
   * @param path the path to property where the index of items needs to be changed
   * @param source the index to move
   * @param destination the index where the value will be moved
   * @returns Parameters resource for FHIR patch move operation
   */
  createMoveParameters(path: string, source: number, destination: number) {
    return {
      resourceType: "Parameters",
      parameter: [
        {
          name: "operation",
          part: [
            {
              name: "type",
              valueCode: this.moveOperation,
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
        },
      ],
    };
  }

  /**
   * @param path the path at which to add the content
   * @param name name of the property to add
   * @param value the value to replace with
   * @param valueDataType the data type of value
   * @returns Parameters resource for FHIR patch add operation
   */
  createAddParameters(
    path: string,
    name: string,
    value: any,
    valueDataType: PATCH_DATATYPE
  ) {
    return {
      resourceType: "Parameters",
      parameter: [
        {
          name: "operation",
          part: [
            {
              name: "type",
              valueCode: this.addOperation,
            },
            {
              name: "path",
              valueString: path,
            },
            {
              name: "name",
              valueString: name,
            },
            {
              name: "value",
              [valueDataType]: value,
            },
          ],
        },
      ],
    };
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
    return {
      resourceType: "Parameters",
      parameter: [
        {
          name: "operation",
          part: [
            {
              name: "type",
              valueCode: this.insertOperation,
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
        },
      ],
    };
  }
}
