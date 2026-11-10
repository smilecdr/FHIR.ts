import { identifierForCode, uniqueName, upperFirst } from './naming';
import { readPackageResources } from './specPackages';

interface CodeSystemConcept {
  code: string;
  concept?: CodeSystemConcept[];
}

interface CodeSystemResource {
  url: string;
  content?: string;
  concept?: CodeSystemConcept[];
}

interface ValueSetComposeFilter {
  property: string;
  op: string;
  value: string;
}

interface ValueSetComposeSet {
  system?: string;
  concept?: { code: string }[];
  filter?: ValueSetComposeFilter[];
  valueSet?: string[];
}

interface ValueSetResource {
  url: string;
  name?: string;
  id?: string;
  title?: string;
  compose?: { include?: ValueSetComposeSet[]; exclude?: ValueSetComposeSet[] };
}

/** A required value set whose codes are all known at generation time. */
export interface ValueSetModel {
  /** Name of the generated constant and type, e.g. `AdministrativeGender`. */
  constantName: string;
  canonicalUrl: string;
  title: string;
  /** Constant key and code, in value set order. */
  codeEntries: { keyName: string; code: string }[];
}

/** Larger value sets are left as plain strings to keep the generated code small. */
const MAXIMUM_CODES_PER_VALUE_SET = 1000;

/**
 * Expands the value sets of a spec package into fixed code lists, for use as
 * the allowed codes of elements with a required binding.
 */
export class ValueSetExpander {
  private readonly valueSetsByUrl = new Map<string, ValueSetResource>();
  private readonly codeSystemsByUrl = new Map<string, CodeSystemResource>();
  private readonly valueSetModelsByUrl = new Map<string, ValueSetModel | undefined>();
  private readonly takenConstantNames = new Set<string>();

  constructor(packageContentDirectory: string) {
    for (const valueSet of readPackageResources<ValueSetResource>(
      packageContentDirectory,
      'ValueSet'
    )) {
      this.valueSetsByUrl.set(valueSet.url, valueSet);
    }
    for (const codeSystem of readPackageResources<CodeSystemResource>(
      packageContentDirectory,
      'CodeSystem'
    )) {
      this.codeSystemsByUrl.set(codeSystem.url, codeSystem);
    }
  }

  /**
   * The model for a value set, or undefined when its codes cannot be listed
   * (filters on external code systems, incomplete code systems, too many codes).
   */
  modelFor(valueSetReference: string): ValueSetModel | undefined {
    const canonicalUrl = valueSetReference.split('|')[0] as string;
    if (!this.valueSetModelsByUrl.has(canonicalUrl)) {
      this.valueSetModelsByUrl.set(canonicalUrl, this.buildModel(canonicalUrl));
    }
    return this.valueSetModelsByUrl.get(canonicalUrl);
  }

  /** Every value set model that was requested and could be expanded, ordered by name. */
  usedModels(): ValueSetModel[] {
    return Array.from(this.valueSetModelsByUrl.values())
      .filter((valueSetModel): valueSetModel is ValueSetModel => valueSetModel !== undefined)
      .sort((leftModel, rightModel) =>
        leftModel.constantName.localeCompare(rightModel.constantName)
      );
  }

  private buildModel(canonicalUrl: string): ValueSetModel | undefined {
    const valueSet = this.valueSetsByUrl.get(canonicalUrl);
    if (valueSet === undefined) {
      return undefined;
    }
    const codes = this.expand(canonicalUrl, new Set());
    if (codes === undefined || codes.length === 0 || codes.length > MAXIMUM_CODES_PER_VALUE_SET) {
      return undefined;
    }
    const preferredName = identifierForCode(valueSet.name ?? valueSet.id ?? canonicalUrl);
    const takenKeyNames = new Set<string>();
    return {
      constantName: uniqueName(upperFirst(preferredName), this.takenConstantNames),
      canonicalUrl,
      title: valueSet.title ?? valueSet.name ?? canonicalUrl,
      codeEntries: codes.map((code) => ({
        keyName: uniqueName(identifierForCode(code), takenKeyNames),
        code,
      })),
    };
  }

  private expand(canonicalUrl: string, urlsBeingExpanded: Set<string>): string[] | undefined {
    const valueSet = this.valueSetsByUrl.get(canonicalUrl);
    if (
      valueSet === undefined ||
      valueSet.compose === undefined ||
      urlsBeingExpanded.has(canonicalUrl)
    ) {
      return undefined;
    }
    urlsBeingExpanded.add(canonicalUrl);
    const includedCodes: string[] = [];
    for (const includedSet of valueSet.compose.include ?? []) {
      const codesOfSet = this.expandComposeSet(includedSet, urlsBeingExpanded);
      if (codesOfSet === undefined) {
        return undefined;
      }
      includedCodes.push(...codesOfSet);
    }
    const excludedCodes = new Set<string>();
    for (const excludedSet of valueSet.compose.exclude ?? []) {
      const codesOfSet = this.expandComposeSet(excludedSet, urlsBeingExpanded);
      if (codesOfSet === undefined) {
        return undefined;
      }
      codesOfSet.forEach((code) => excludedCodes.add(code));
    }
    urlsBeingExpanded.delete(canonicalUrl);
    return Array.from(new Set(includedCodes)).filter((code) => !excludedCodes.has(code));
  }

  private expandComposeSet(
    composeSet: ValueSetComposeSet,
    urlsBeingExpanded: Set<string>
  ): string[] | undefined {
    if (composeSet.valueSet !== undefined) {
      if (composeSet.system !== undefined) {
        return undefined;
      }
      const importedCodes: string[] = [];
      for (const importedUrl of composeSet.valueSet) {
        const codesOfImport = this.expand(importedUrl.split('|')[0] as string, urlsBeingExpanded);
        if (codesOfImport === undefined) {
          return undefined;
        }
        importedCodes.push(...codesOfImport);
      }
      return importedCodes;
    }
    if (composeSet.concept !== undefined) {
      return composeSet.concept.map((concept) => concept.code);
    }
    const codeSystem =
      composeSet.system === undefined ? undefined : this.codeSystemsByUrl.get(composeSet.system);
    if (codeSystem === undefined || codeSystem.content !== 'complete') {
      return undefined;
    }
    const filters = composeSet.filter ?? [];
    if (filters.length === 0) {
      return flattenConcepts(codeSystem.concept ?? []);
    }
    const onlyFilter = filters[0];
    const isSubsumptionFilter =
      filters.length === 1 &&
      onlyFilter !== undefined &&
      onlyFilter.property === 'concept' &&
      (onlyFilter.op === 'is-a' || onlyFilter.op === 'descendent-of');
    if (!isSubsumptionFilter || onlyFilter === undefined) {
      return undefined;
    }
    const ancestorConcept = findConcept(codeSystem.concept ?? [], onlyFilter.value);
    if (ancestorConcept === undefined) {
      return undefined;
    }
    const descendantCodes = flattenConcepts(ancestorConcept.concept ?? []);
    return onlyFilter.op === 'is-a' ? [ancestorConcept.code, ...descendantCodes] : descendantCodes;
  }
}

function flattenConcepts(concepts: CodeSystemConcept[]): string[] {
  const codes: string[] = [];
  for (const concept of concepts) {
    codes.push(concept.code, ...flattenConcepts(concept.concept ?? []));
  }
  return codes;
}

function findConcept(
  concepts: CodeSystemConcept[],
  wantedCode: string
): CodeSystemConcept | undefined {
  for (const concept of concepts) {
    if (concept.code === wantedCode) {
      return concept;
    }
    const nestedMatch = findConcept(concept.concept ?? [], wantedCode);
    if (nestedMatch !== undefined) {
      return nestedMatch;
    }
  }
  return undefined;
}
