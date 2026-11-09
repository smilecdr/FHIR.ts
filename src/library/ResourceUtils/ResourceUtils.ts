import type {
  CodingKeys,
  CodingLike,
  ExtensionLike,
  IdentifierKeys,
  IdentifierLike,
  ResourceLike,
} from '../dataTypes';

const REFERENCE_PROPERTY_NAME = 'reference';

function isJsonObject(candidateValue: unknown): candidateValue is Record<string, unknown> {
  return (
    typeof candidateValue === 'object' && candidateValue !== null && !Array.isArray(candidateValue)
  );
}

export class ResourceUtils {
  /**
   * Get a top level property of a resource.
   *
   * @param resource the resource, or any JSON object
   * @param propertyName top level property of the resource
   * @returns the value of the property, or null when the resource does not have it
   */
  getResourceProperty<ResourceType extends object, PropertyName extends keyof ResourceType>(
    resource: ResourceType,
    propertyName: PropertyName
  ): ResourceType[PropertyName] | null;
  /** Get a top level property that the type of the resource does not declare. */
  getResourceProperty(resource: object, propertyName: string): unknown;
  getResourceProperty(resource: object, propertyName: PropertyKey): unknown {
    return Object.prototype.hasOwnProperty.call(resource, propertyName)
      ? (resource as Record<PropertyKey, unknown>)[propertyName]
      : null;
  }

  /**
   * Get identifiers from a list filtered by the value of one of their primitive elements.
   *
   * @param identifierList list of identifiers
   * @param propertyToCompare identifier element to compare: id, use, system or value
   * @param propertyValue value the element must have
   * @returns array of matches
   */
  getIdentifiersByProperty<IdentifierType extends IdentifierLike>(
    identifierList: readonly IdentifierType[] | null | undefined,
    propertyToCompare: IdentifierKeys,
    propertyValue: string
  ): IdentifierType[] {
    return (identifierList ?? []).filter(
      (identifier) => identifier?.[propertyToCompare] === propertyValue
    );
  }

  /**
   * Get extensions from a list filtered by URL.
   *
   * @param extensionList list of extensions
   * @param extensionUrl Extension.url to compare
   * @returns array of matches
   */
  getExtensionsByUrl<ExtensionType extends ExtensionLike>(
    extensionList: readonly ExtensionType[] | null | undefined,
    extensionUrl: string
  ): ExtensionType[] {
    return (extensionList ?? []).filter((extension) => extension?.url === extensionUrl);
  }

  /**
   * Get codings from a list filtered by the value of one of their elements.
   *
   * @param codingList list of codings
   * @param propertyToCompare coding element to compare
   * @param propertyValue value the element must have (a boolean for userSelected)
   * @returns array of matches
   */
  getCodingsByProperty<CodingType extends CodingLike>(
    codingList: readonly CodingType[] | null | undefined,
    propertyToCompare: CodingKeys,
    propertyValue: string | boolean
  ): CodingType[] {
    return (codingList ?? []).filter((coding) => coding?.[propertyToCompare] === propertyValue);
  }

  /**
   * Get the values at a path in a FHIR resource. Repeating elements along the
   * path are followed into every repetition.
   *
   * @template ValueType - the type of the values at the path
   * @param resource resource to read from
   * @param elementPath path starting with the resource type (e.g. "Patient.name.given")
   * @returns array of the values found at the path, empty when there are none
   */
  getValuesAtResourcePath<ValueType = unknown>(
    resource: ResourceLike | null | undefined,
    elementPath: string
  ): ValueType[] {
    const [resourceTypeName, ...elementNames] = elementPath.split('.');
    if (!resource || resource.resourceType !== resourceTypeName) {
      return [];
    }
    return this.collectValuesAtPath(resource, elementNames) as ValueType[];
  }

  private collectValuesAtPath(currentValue: unknown, remainingElementNames: string[]): unknown[] {
    if (currentValue === undefined || currentValue === null) {
      return [];
    }
    if (Array.isArray(currentValue)) {
      const valuesOfAllRepetitions: unknown[] = [];
      for (const repetition of currentValue) {
        valuesOfAllRepetitions.push(...this.collectValuesAtPath(repetition, remainingElementNames));
      }
      return valuesOfAllRepetitions;
    }
    const [nextElementName, ...elementNamesAfterNext] = remainingElementNames;
    if (nextElementName === undefined) {
      return [currentValue];
    }
    return isJsonObject(currentValue)
      ? this.collectValuesAtPath(currentValue[nextElementName], elementNamesAfterNext)
      : [];
  }

  /**
   * Get every literal reference in a resource: the `reference` of each
   * Reference element, wherever it is, including in contained resources.
   *
   * @param resource resource to pull references out of
   * @returns array of references such as "Patient/123", in document order
   */
  getAllReferencesFromResource(resource: unknown): string[] {
    if (resource === undefined) {
      return [];
    }
    // Serialising first turns model class instances into plain FHIR JSON.
    const resourceJson: unknown = JSON.parse(JSON.stringify(resource));
    const references: string[] = [];
    this.collectReferences(resourceJson, references);
    return references;
  }

  private collectReferences(currentValue: unknown, references: string[]): void {
    if (Array.isArray(currentValue)) {
      currentValue.forEach((arrayItem) => this.collectReferences(arrayItem, references));
      return;
    }
    if (!isJsonObject(currentValue)) {
      return;
    }
    for (const propertyName of Object.keys(currentValue)) {
      const propertyValue = currentValue[propertyName];
      if (propertyName === REFERENCE_PROPERTY_NAME && typeof propertyValue === 'string') {
        references.push(propertyValue);
      } else {
        this.collectReferences(propertyValue, references);
      }
    }
  }
}
