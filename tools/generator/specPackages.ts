import { execFileSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

/**
 * One FHIR version the generator produces model classes for.
 */
/** How the plain data types of a version are declared. */
export type PlainDeclarationKind = 'class' | 'interface';

/**
 * One FHIR version the generator produces code for.
 */
export interface FhirVersionConfig {
  /** Short label used in generated comments and the type registry, e.g. `R4`. */
  versionLabel: string;
  packageName: string;
  packageVersion: string;
  /** Directory the model classes are written to, relative to the repository root. */
  modelDirectory: string;
  /** Directory the plain data types are written to, relative to the repository root. */
  plainDirectory: string;
  /** File name, without extension, of the barrel that exports every plain data type. */
  plainBarrelName: string;
  plainDeclarationKind: PlainDeclarationKind;
  /** Name of the union of every resource type: `Resource` or `ResourceList`. */
  resourceUnionName: string;
  /** Name of the union of every resource type name as a string literal, when the version has one. */
  resourceTypeNameUnionName?: string;
  /**
   * True when date, dateTime and instant properties of the plain data types
   * also accept a JavaScript `Date`, which serialises to an ISO 8601 string.
   */
  plainDatesAcceptJavaScriptDate: boolean;
  /** Directory and barrel of the `IPatient`-style resource interfaces, when the version has them. */
  resourceInterfaces?: { directory: string; barrelName: string };
}

export const FHIR_VERSIONS: readonly FhirVersionConfig[] = [
  {
    versionLabel: 'R3',
    packageName: 'hl7.fhir.r3.core',
    packageVersion: '3.0.2',
    modelDirectory: 'src/FHIR-R3/model',
    plainDirectory: 'src/FHIR-R3/classes',
    plainBarrelName: 'models-r3',
    plainDeclarationKind: 'class',
    resourceUnionName: 'Resource',
    plainDatesAcceptJavaScriptDate: false,
  },
  {
    versionLabel: 'R4',
    packageName: 'hl7.fhir.r4.core',
    packageVersion: '4.0.1',
    modelDirectory: 'src/FHIR-R4/model',
    plainDirectory: 'src/FHIR-R4/classes',
    plainBarrelName: 'models-r4',
    plainDeclarationKind: 'class',
    resourceUnionName: 'Resource',
    resourceTypeNameUnionName: 'ResourceList',
    plainDatesAcceptJavaScriptDate: true,
    resourceInterfaces: { directory: 'src/FHIR-R4/interfaces', barrelName: 'IModel' },
  },
  {
    versionLabel: 'R5',
    packageName: 'hl7.fhir.r5.core',
    packageVersion: '5.0.0',
    modelDirectory: 'src/FHIR-R5/model',
    plainDirectory: 'src/FHIR-R5',
    plainBarrelName: 'models',
    plainDeclarationKind: 'interface',
    resourceUnionName: 'ResourceList',
    plainDatesAcceptJavaScriptDate: false,
  },
];

export const REPOSITORY_ROOT = path.resolve(__dirname, '..', '..');
const SPEC_CACHE_DIRECTORY = path.join(REPOSITORY_ROOT, '.fhir-cache');
/** The STU3 package files start with a byte order mark, which JSON.parse rejects. */
const BYTE_ORDER_MARK_REGEX = /^\uFEFF/;
const PACKAGE_REGISTRY_URL = 'https://packages.fhir.org';

/**
 * Makes sure the FHIR core package of a version is downloaded and extracted
 * into `.fhir-cache/`, and returns the directory holding its JSON files.
 */
export async function ensureSpecPackage(versionConfig: FhirVersionConfig): Promise<string> {
  const packageLabel = `${versionConfig.packageName}-${versionConfig.packageVersion}`;
  const extractedDirectory = path.join(SPEC_CACHE_DIRECTORY, packageLabel);
  const packageContentDirectory = path.join(extractedDirectory, 'package');
  if (fs.existsSync(path.join(packageContentDirectory, 'package.json'))) {
    return packageContentDirectory;
  }

  fs.mkdirSync(extractedDirectory, { recursive: true });
  const tarballPath = path.join(SPEC_CACHE_DIRECTORY, `${packageLabel}.tgz`);
  if (!fs.existsSync(tarballPath)) {
    const tarballUrl = `${PACKAGE_REGISTRY_URL}/${versionConfig.packageName}/${versionConfig.packageVersion}`;
    console.log(`Downloading ${tarballUrl}`);
    const tarballResponse = await fetch(tarballUrl);
    if (!tarballResponse.ok) {
      throw new Error(`Could not download ${tarballUrl}: HTTP ${tarballResponse.status}`);
    }
    fs.writeFileSync(tarballPath, Buffer.from(await tarballResponse.arrayBuffer()));
  }
  execFileSync('tar', ['-xzf', tarballPath, '-C', extractedDirectory]);
  return packageContentDirectory;
}

/**
 * Reads every JSON file of a spec package whose name starts with the given
 * resource type prefix (for example `StructureDefinition`), in file name order.
 */
export function readPackageResources<ResourceShape>(
  packageContentDirectory: string,
  resourceTypePrefix: string
): ResourceShape[] {
  return fs
    .readdirSync(packageContentDirectory)
    .filter(
      (fileName) => fileName.startsWith(`${resourceTypePrefix}-`) && fileName.endsWith('.json')
    )
    .sort()
    .map(
      (fileName) =>
        JSON.parse(
          fs
            .readFileSync(path.join(packageContentDirectory, fileName), 'utf8')
            .replace(BYTE_ORDER_MARK_REGEX, '')
        ) as ResourceShape
    );
}
