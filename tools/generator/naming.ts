const RESERVED_WORDS: ReadonlySet<string> = new Set([
  'abstract',
  'arguments',
  'await',
  'break',
  'case',
  'catch',
  'class',
  'const',
  'continue',
  'debugger',
  'default',
  'delete',
  'do',
  'else',
  'enum',
  'eval',
  'export',
  'extends',
  'false',
  'finally',
  'for',
  'function',
  'if',
  'implements',
  'import',
  'in',
  'instanceof',
  'interface',
  'let',
  'new',
  'null',
  'package',
  'private',
  'protected',
  'public',
  'return',
  'static',
  'super',
  'switch',
  'this',
  'throw',
  'true',
  'try',
  'typeof',
  'var',
  'void',
  'while',
  'with',
  'yield',
]);

/** Codes made only of symbols, spelled the way the earlier Swagger-generated types spelled them. */
const SYMBOL_CODE_NAMES: Readonly<Record<string, string>> = {
  '<=': 'LessThanOrEqualTo',
  '>=': 'GreaterThanOrEqualTo',
};

const SYMBOL_WORDS: Readonly<Record<string, string>> = {
  '<': 'LessThan',
  '>': 'GreaterThan',
  '=': 'Equal',
  '!': 'Not',
  '+': 'Plus',
  '*': 'Star',
  '/': 'Slash',
  '%': 'Percent',
  '&': 'And',
  '|': 'Or',
  '~': 'Tilde',
  '?': 'Question',
  '#': 'Hash',
  '@': 'At',
  $: 'Dollar',
  '^': 'Caret',
};

export function upperFirst(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function lowerFirst(text: string): string {
  return text.charAt(0).toLowerCase() + text.slice(1);
}

/** `Patient.contact` becomes `PatientContact`. */
export function classNameForElementPath(elementPath: string): string {
  return elementPath.split('.').map(upperFirst).join('');
}

/**
 * Name of the plain data type for an element path: the type name plus the
 * last path segment, so `Bundle.entry.request` is `BundleRequest`. This is the
 * naming the plain types have always had.
 */
function plainTypeNameForElementPath(elementPath: string): string {
  const pathSegments = elementPath.split('.');
  const typeName = pathSegments[0] as string;
  const lastSegment = pathSegments[pathSegments.length - 1] as string;
  return pathSegments.length === 1 ? typeName : `${typeName}${upperFirst(lastSegment)}`;
}

/**
 * Gives every element path its plain data type name. Resources and data types
 * keep their own name. Backbone elements that would share a name are numbered
 * in element order: `ClaimResponseDetail`, `ClaimResponseDetail1`, and so on.
 *
 * @param elementPaths the FHIR type names and backbone element paths, in definition order
 */
export function assignPlainTypeNames(elementPaths: string[]): Map<string, string> {
  const isBackboneElementPath = (elementPath: string): boolean => elementPath.includes('.');
  const typeNamesFirst = [
    ...elementPaths.filter((elementPath) => !isBackboneElementPath(elementPath)),
    ...elementPaths.filter(isBackboneElementPath),
  ];
  const useCountsByPreferredName = new Map<string, number>();
  const plainTypeNamesByElementPath = new Map<string, string>();
  for (const elementPath of typeNamesFirst) {
    const preferredName = plainTypeNameForElementPath(elementPath);
    const earlierUseCount = useCountsByPreferredName.get(preferredName) ?? 0;
    useCountsByPreferredName.set(preferredName, earlierUseCount + 1);
    plainTypeNamesByElementPath.set(
      elementPath,
      earlierUseCount === 0 ? preferredName : `${preferredName}${earlierUseCount}`
    );
  }
  return plainTypeNamesByElementPath;
}

/** A parameter name that states what it holds and is never a reserved word. */
export function parameterNameFor(preferredName: string): string {
  return RESERVED_WORDS.has(preferredName) ? `${preferredName}Value` : preferredName;
}

/**
 * Turns a code such as `entered-in-error` or `>=` into an identifier such as
 * `EnteredInError` or `GreaterThanEqual` for use as a key of a code constant.
 * A code that starts with a digit gets a leading underscore: `4.0.1` becomes `_401`.
 */
export function identifierForCode(code: string): string {
  const symbolCodeName = SYMBOL_CODE_NAMES[code];
  if (symbolCodeName !== undefined) {
    return symbolCodeName;
  }
  let spelledOutCode = '';
  for (const character of code) {
    const symbolWord = SYMBOL_WORDS[character];
    spelledOutCode += symbolWord === undefined ? character : ` ${symbolWord} `;
  }
  const words = spelledOutCode.split(/[^A-Za-z0-9]+/).filter((word) => word.length > 0);
  const identifier = words.map(upperFirst).join('');
  if (identifier.length === 0) {
    return 'Blank';
  }
  return /^[0-9]/.test(identifier) ? `_${identifier}` : identifier;
}

/** Makes names unique by appending 2, 3, ... to repeats, keeping first-come order. */
export function uniqueName(preferredName: string, takenNames: Set<string>): string {
  let candidateName = preferredName;
  let repeatNumber = 2;
  while (takenNames.has(candidateName)) {
    candidateName = `${preferredName}${repeatNumber}`;
    repeatNumber += 1;
  }
  takenNames.add(candidateName);
  return candidateName;
}

/** Text that is safe inside a JSDoc block comment on a single line. */
export function documentationText(rawText: string | undefined): string {
  return (rawText ?? '').replace(/\*\//g, '* /').replace(/\s+/g, ' ').trim();
}
