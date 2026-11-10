import type { Base, ParseOptions } from './Base';
import { FhirModelError } from './errors';

/** Any model class, including abstract ones such as Resource. */
export type ModelClass<ModelType extends Base = Base> = abstract new () => ModelType;

/** A model class that can be instantiated. */
export type ConcreteModelClass<ModelType extends Base = Base> = new () => ModelType;

/**
 * Lookup from FHIR type name to model class for one FHIR version.
 *
 * Model classes register themselves when their module loads. The registry is
 * what lets `fromJSON` revive nested elements, `contained` resources and
 * `Bundle.entry.resource` into the right class.
 */
export class TypeRegistry {
  private readonly modelClassesByTypeName = new Map<string, ModelClass>();
  private readonly resourceTypeNames = new Set<string>();

  constructor(readonly fhirVersion: string) {}

  register(typeName: string, modelClass: ModelClass, isConcreteResource = false): void {
    this.modelClassesByTypeName.set(typeName, modelClass);
    if (isConcreteResource) {
      this.resourceTypeNames.add(typeName);
    }
  }

  isRegistered(typeName: string): boolean {
    return this.modelClassesByTypeName.has(typeName);
  }

  /** True when the name is a concrete resource type of this FHIR version, such as `Patient`. */
  isResourceType(typeName: string): boolean {
    return this.resourceTypeNames.has(typeName);
  }

  getResourceTypeNames(): string[] {
    return Array.from(this.resourceTypeNames).sort();
  }

  resolve(typeName: string): ModelClass {
    const modelClass = this.modelClassesByTypeName.get(typeName);
    if (modelClass === undefined) {
      throw new FhirModelError(
        'invalid-model',
        typeName,
        `no ${this.fhirVersion} model class is registered for this type. Import model classes from the package root so every class is loaded`
      );
    }
    return modelClass;
  }

  resolveResource(resourceTypeName: unknown, path: string): ConcreteModelClass {
    if (typeof resourceTypeName !== 'string' || !this.isResourceType(resourceTypeName)) {
      throw new FhirModelError(
        'unknown-resource-type',
        path,
        `'${String(resourceTypeName)}' is not a FHIR ${this.fhirVersion} resource type`
      );
    }
    return this.resolve(resourceTypeName) as ConcreteModelClass;
  }

  /**
   * Builds the model for any resource of this FHIR version, choosing the class
   * from the JSON's `resourceType`.
   */
  parseResource(json: unknown, parseOptions: ParseOptions = {}): Base {
    const isJsonObject = typeof json === 'object' && json !== null && !Array.isArray(json);
    const resourceTypeName = isJsonObject
      ? (json as Record<string, unknown>)['resourceType']
      : undefined;
    const resourceClass = this.resolveResource(
      resourceTypeName,
      'resourceType'
    ) as ConcreteModelClass & {
      fromJSON: typeof Base.fromJSON;
    };
    return resourceClass.fromJSON(json, parseOptions);
  }
}
