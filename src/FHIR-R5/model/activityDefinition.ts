/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { Age } from './age';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { CodeableReference } from './codeableReference';
import { Coding } from './coding';
import { ContactDetail } from './contactDetail';
import { DomainResource } from './domainResource';
import { Dosage } from './dosage';
import { Duration } from './duration';
import { Element } from './element';
import { Expression } from './expression';
import { Identifier } from './identifier';
import { Period } from './period';
import { Quantity } from './quantity';
import { Range } from './range';
import { Reference } from './reference';
import { RelatedArtifact } from './relatedArtifact';
import { Timing } from './timing';
import { UsageContext } from './usageContext';

/**
 * This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context.
 */
export class ActivityDefinition extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'url',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'url', typeCode: 'uri' }],
    },
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'version',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'version', typeCode: 'string' }],
    },
    {
      elementName: 'versionAlgorithm',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'versionAlgorithmString', typeCode: 'string' },
        { jsonKey: 'versionAlgorithmCoding', typeCode: 'Coding' },
      ],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'title',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'title', typeCode: 'string' }],
    },
    {
      elementName: 'subtitle',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'subtitle', typeCode: 'string' }],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.PublicationStatus },
      ],
    },
    {
      elementName: 'experimental',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'experimental', typeCode: 'boolean' }],
    },
    {
      elementName: 'subject',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'subjectCodeableConcept', typeCode: 'CodeableConcept' },
        {
          jsonKey: 'subjectReference',
          typeCode: 'Reference',
          targetResourceTypes: [
            'AdministrableProductDefinition',
            'Group',
            'ManufacturedItemDefinition',
            'MedicinalProductDefinition',
            'PackagedProductDefinition',
            'SubstanceDefinition',
          ],
        },
        { jsonKey: 'subjectCanonical', typeCode: 'canonical' },
      ],
    },
    {
      elementName: 'date',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'date', typeCode: 'dateTime' }],
    },
    {
      elementName: 'publisher',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'publisher', typeCode: 'string' }],
    },
    {
      elementName: 'contact',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'contact', typeCode: 'ContactDetail' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'useContext',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'useContext', typeCode: 'UsageContext' }],
    },
    {
      elementName: 'jurisdiction',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'jurisdiction', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'purpose',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'purpose', typeCode: 'markdown' }],
    },
    {
      elementName: 'usage',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'usage', typeCode: 'markdown' }],
    },
    {
      elementName: 'copyright',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'copyright', typeCode: 'markdown' }],
    },
    {
      elementName: 'copyrightLabel',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'copyrightLabel', typeCode: 'string' }],
    },
    {
      elementName: 'approvalDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'approvalDate', typeCode: 'date' }],
    },
    {
      elementName: 'lastReviewDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'lastReviewDate', typeCode: 'date' }],
    },
    {
      elementName: 'effectivePeriod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'effectivePeriod', typeCode: 'Period' }],
    },
    {
      elementName: 'topic',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'topic', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'author',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'author', typeCode: 'ContactDetail' }],
    },
    {
      elementName: 'editor',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'editor', typeCode: 'ContactDetail' }],
    },
    {
      elementName: 'reviewer',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reviewer', typeCode: 'ContactDetail' }],
    },
    {
      elementName: 'endorser',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'endorser', typeCode: 'ContactDetail' }],
    },
    {
      elementName: 'relatedArtifact',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'relatedArtifact', typeCode: 'RelatedArtifact' }],
    },
    {
      elementName: 'library',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'library', typeCode: 'canonical' }],
    },
    {
      elementName: 'kind',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'kind', typeCode: 'code', allowedCodes: valueSetCodes.RequestResourceTypes },
      ],
    },
    {
      elementName: 'profile',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'profile', typeCode: 'canonical' }],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'intent',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'intent', typeCode: 'code', allowedCodes: valueSetCodes.RequestIntent }],
    },
    {
      elementName: 'priority',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'priority', typeCode: 'code', allowedCodes: valueSetCodes.RequestPriority },
      ],
    },
    {
      elementName: 'doNotPerform',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'doNotPerform', typeCode: 'boolean' }],
    },
    {
      elementName: 'timing',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'timingTiming', typeCode: 'Timing' },
        { jsonKey: 'timingAge', typeCode: 'Age' },
        { jsonKey: 'timingRange', typeCode: 'Range' },
        { jsonKey: 'timingDuration', typeCode: 'Duration' },
      ],
    },
    {
      elementName: 'asNeeded',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'asNeededBoolean', typeCode: 'boolean' },
        { jsonKey: 'asNeededCodeableConcept', typeCode: 'CodeableConcept' },
      ],
    },
    {
      elementName: 'location',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'location', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'participant',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'participant', typeCode: 'ActivityDefinitionParticipant' }],
    },
    {
      elementName: 'product',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'productReference',
          typeCode: 'Reference',
          targetResourceTypes: ['Ingredient', 'Medication', 'Substance', 'SubstanceDefinition'],
        },
        { jsonKey: 'productCodeableConcept', typeCode: 'CodeableConcept' },
      ],
    },
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'dosage',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'dosage', typeCode: 'Dosage' }],
    },
    {
      elementName: 'bodySite',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'bodySite', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'specimenRequirement',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'specimenRequirement', typeCode: 'canonical' }],
    },
    {
      elementName: 'observationRequirement',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'observationRequirement', typeCode: 'canonical' }],
    },
    {
      elementName: 'observationResultRequirement',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'observationResultRequirement', typeCode: 'canonical' }],
    },
    {
      elementName: 'transform',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'transform', typeCode: 'canonical' }],
    },
    {
      elementName: 'dynamicValue',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'dynamicValue', typeCode: 'ActivityDefinitionDynamicValue' }],
    },
  ];

  readonly resourceType = 'ActivityDefinition';

  /** Canonical identifier for this activity definition, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Additional identifier for the activity definition (0..*) */
  identifier?: Identifier[];

  /** Business version of the activity definition (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;

  /** Name for this activity definition (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Name for this activity definition (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

  /** Subordinate title of the activity definition (0..1) */
  subtitle?: string;
  /** Id and extensions of the primitive `subtitle`. */
  _subtitle?: Element;

  /** draft | active | retired | unknown (1..1) */
  status?: valueSetCodes.PublicationStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** For testing purposes, not real usage (0..1) */
  experimental?: boolean;
  /** Id and extensions of the primitive `experimental`. */
  _experimental?: Element;

  /** Type of individual the activity definition is intended for (0..1) */
  subjectCodeableConcept?: CodeableConcept;
  /** Type of individual the activity definition is intended for (0..1) */
  subjectReference?: Reference;
  /** Type of individual the activity definition is intended for (0..1) */
  subjectCanonical?: string;
  /** Id and extensions of the primitive `subjectCanonical`. */
  _subjectCanonical?: Element;

  /** Date last changed (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Name of the publisher/steward (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;

  /** Contact details for the publisher (0..*) */
  contact?: ContactDetail[];

  /** Natural language description of the activity definition (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** The context that the content is intended to support (0..*) */
  useContext?: UsageContext[];

  /** Intended jurisdiction for activity definition (if applicable) (0..*) */
  jurisdiction?: CodeableConcept[];

  /** Why this activity definition is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;

  /** Describes the clinical usage of the activity definition (0..1) */
  usage?: string;
  /** Id and extensions of the primitive `usage`. */
  _usage?: Element;

  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;

  /** Copyright holder and year(s) (0..1) */
  copyrightLabel?: string;
  /** Id and extensions of the primitive `copyrightLabel`. */
  _copyrightLabel?: Element;

  /** When the activity definition was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;

  /** When the activity definition was last reviewed by the publisher (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;

  /** When the activity definition is expected to be used (0..1) */
  effectivePeriod?: Period;

  /** E.g. Education, Treatment, Assessment, etc (0..*) */
  topic?: CodeableConcept[];

  /** Who authored the content (0..*) */
  author?: ContactDetail[];

  /** Who edited the content (0..*) */
  editor?: ContactDetail[];

  /** Who reviewed the content (0..*) */
  reviewer?: ContactDetail[];

  /** Who endorsed the content (0..*) */
  endorser?: ContactDetail[];

  /** Additional documentation, citations, etc (0..*) */
  relatedArtifact?: RelatedArtifact[];

  /** Logic used by the activity definition (0..*) */
  library?: string[];
  /** Id and extensions of the primitive `library`. */
  _library?: (Element | null)[];

  /** Kind of resource (0..1) */
  kind?: valueSetCodes.RequestResourceTypes;
  /** Id and extensions of the primitive `kind`. */
  _kind?: Element;

  /** What profile the resource needs to conform to (0..1) */
  profile?: string;
  /** Id and extensions of the primitive `profile`. */
  _profile?: Element;

  /** Detail type of activity (0..1) */
  code?: CodeableConcept;

  /** proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option (0..1) */
  intent?: valueSetCodes.RequestIntent;
  /** Id and extensions of the primitive `intent`. */
  _intent?: Element;

  /** routine | urgent | asap | stat (0..1) */
  priority?: valueSetCodes.RequestPriority;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;

  /** True if the activity should not be performed (0..1) */
  doNotPerform?: boolean;
  /** Id and extensions of the primitive `doNotPerform`. */
  _doNotPerform?: Element;

  /** When activity is to occur (0..1) */
  timingTiming?: Timing;
  /** When activity is to occur (0..1) */
  timingAge?: Age;
  /** When activity is to occur (0..1) */
  timingRange?: Range;
  /** When activity is to occur (0..1) */
  timingDuration?: Duration;

  /** Preconditions for service (0..1) */
  asNeededBoolean?: boolean;
  /** Id and extensions of the primitive `asNeededBoolean`. */
  _asNeededBoolean?: Element;
  /** Preconditions for service (0..1) */
  asNeededCodeableConcept?: CodeableConcept;

  /** Where it should happen (0..1) */
  location?: CodeableReference;

  /** Who should participate in the action (0..*) */
  participant?: ActivityDefinitionParticipant[];

  /** What's administered/supplied (0..1) */
  productReference?: Reference;
  /** What's administered/supplied (0..1) */
  productCodeableConcept?: CodeableConcept;

  /** How much is administered/consumed/supplied (0..1) */
  quantity?: Quantity;

  /** Detailed dosage instructions (0..*) */
  dosage?: Dosage[];

  /** What part of body to perform on (0..*) */
  bodySite?: CodeableConcept[];

  /** What specimens are required to perform this action (0..*) */
  specimenRequirement?: string[];
  /** Id and extensions of the primitive `specimenRequirement`. */
  _specimenRequirement?: (Element | null)[];

  /** What observations are required to perform this action (0..*) */
  observationRequirement?: string[];
  /** Id and extensions of the primitive `observationRequirement`. */
  _observationRequirement?: (Element | null)[];

  /** What observations must be produced by this action (0..*) */
  observationResultRequirement?: string[];
  /** Id and extensions of the primitive `observationResultRequirement`. */
  _observationResultRequirement?: (Element | null)[];

  /** Transform to apply the template (0..1) */
  transform?: string;
  /** Id and extensions of the primitive `transform`. */
  _transform?: Element;

  /** Dynamic aspects of the definition (0..*) */
  dynamicValue?: ActivityDefinitionDynamicValue[];

  override fhirType(): string {
    return 'ActivityDefinition';
  }

  /** FHIR JSON for this ActivityDefinition, typed as the plain `ActivityDefinition` data type. */
  override toJSON(): plainTypes.ActivityDefinition {
    return this.serialize() as plainTypes.ActivityDefinition;
  }

  /** Canonical identifier for this activity definition, represented as a URI (globally unique) (0..1) */
  getUrl(): string | undefined {
    return this.url;
  }

  /** Sets `url`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setUrl(url: string | undefined): this {
    return this.setFieldValue('url', url);
  }

  hasUrl(): boolean {
    return this.hasFieldValue('url');
  }

  /** The element carrying the id and extensions of `url`. Created when absent. */
  getUrlElement(): Element {
    if (this._url === undefined) {
      this._url = new Element();
    }
    return this._url;
  }

  setUrlElement(urlElement: Element | undefined): this {
    this._url = urlElement;
    return this;
  }

  /** Additional identifier for the activity definition (0..*) Never undefined; an empty list is created when absent. */
  getIdentifier(): Identifier[] {
    if (this.identifier === undefined) {
      this.identifier = [];
    }
    return this.identifier;
  }

  setIdentifier(identifier: Identifier[] | undefined): this {
    return this.setFieldValue('identifier', identifier);
  }

  hasIdentifier(): boolean {
    return this.hasFieldValue('identifier');
  }

  /** Appends a new, empty Identifier to `identifier` and returns it so it can be filled in. */
  addIdentifier(): Identifier;
  /** Appends the given Identifier to `identifier` and returns this object for chaining. */
  addIdentifier(identifier: Identifier): this;
  addIdentifier(identifier?: Identifier): Identifier | this {
    if (identifier !== undefined) {
      return this.addFieldValue('identifier', identifier);
    }
    const createdIdentifier = new Identifier();
    this.addFieldValue('identifier', createdIdentifier);
    return createdIdentifier;
  }

  /** The first Identifier of `identifier`. One is added when the list is empty. */
  getIdentifierFirstRep(): Identifier {
    const firstIdentifier = this.getIdentifier()[0];
    return firstIdentifier === undefined ? this.addIdentifier() : firstIdentifier;
  }

  /** Business version of the activity definition (0..1) */
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

  /** How to compare versions (0..1) Whichever type of `versionAlgorithm[x]` is set. */
  getVersionAlgorithm(): string | Coding | undefined {
    return this.getChoiceValue<string | Coding>('versionAlgorithm');
  }

  /** True when any type of `versionAlgorithm[x]` is set. */
  hasVersionAlgorithm(): boolean {
    return this.hasChoiceValue('versionAlgorithm');
  }

  getVersionAlgorithmString(): string | undefined {
    return this.versionAlgorithmString;
  }

  /** Sets `versionAlgorithm[x]` as string and clears every other type of it. */
  setVersionAlgorithmString(versionAlgorithmString: string | undefined): this {
    return this.setFieldValue('versionAlgorithmString', versionAlgorithmString);
  }

  hasVersionAlgorithmString(): boolean {
    return this.hasFieldValue('versionAlgorithmString');
  }

  getVersionAlgorithmCoding(): Coding | undefined {
    return this.versionAlgorithmCoding;
  }

  /** Sets `versionAlgorithm[x]` as Coding and clears every other type of it. */
  setVersionAlgorithmCoding(versionAlgorithmCoding: Coding | undefined): this {
    return this.setFieldValue('versionAlgorithmCoding', versionAlgorithmCoding);
  }

  hasVersionAlgorithmCoding(): boolean {
    return this.hasFieldValue('versionAlgorithmCoding');
  }

  /** Name for this activity definition (computer friendly) (0..1) */
  getName(): string | undefined {
    return this.name;
  }

  /** Sets `name`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setName(name: string | undefined): this {
    return this.setFieldValue('name', name);
  }

  hasName(): boolean {
    return this.hasFieldValue('name');
  }

  /** The element carrying the id and extensions of `name`. Created when absent. */
  getNameElement(): Element {
    if (this._name === undefined) {
      this._name = new Element();
    }
    return this._name;
  }

  setNameElement(nameElement: Element | undefined): this {
    this._name = nameElement;
    return this;
  }

  /** Name for this activity definition (human friendly) (0..1) */
  getTitle(): string | undefined {
    return this.title;
  }

  /** Sets `title`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setTitle(title: string | undefined): this {
    return this.setFieldValue('title', title);
  }

  hasTitle(): boolean {
    return this.hasFieldValue('title');
  }

  /** The element carrying the id and extensions of `title`. Created when absent. */
  getTitleElement(): Element {
    if (this._title === undefined) {
      this._title = new Element();
    }
    return this._title;
  }

  setTitleElement(titleElement: Element | undefined): this {
    this._title = titleElement;
    return this;
  }

  /** Subordinate title of the activity definition (0..1) */
  getSubtitle(): string | undefined {
    return this.subtitle;
  }

  /** Sets `subtitle`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setSubtitle(subtitle: string | undefined): this {
    return this.setFieldValue('subtitle', subtitle);
  }

  hasSubtitle(): boolean {
    return this.hasFieldValue('subtitle');
  }

  /** The element carrying the id and extensions of `subtitle`. Created when absent. */
  getSubtitleElement(): Element {
    if (this._subtitle === undefined) {
      this._subtitle = new Element();
    }
    return this._subtitle;
  }

  setSubtitleElement(subtitleElement: Element | undefined): this {
    this._subtitle = subtitleElement;
    return this;
  }

  /** draft | active | retired | unknown (1..1) */
  getStatus(): valueSetCodes.PublicationStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.PublicationStatus | undefined): this {
    return this.setFieldValue('status', status);
  }

  hasStatus(): boolean {
    return this.hasFieldValue('status');
  }

  /** The element carrying the id and extensions of `status`. Created when absent. */
  getStatusElement(): Element {
    if (this._status === undefined) {
      this._status = new Element();
    }
    return this._status;
  }

  setStatusElement(statusElement: Element | undefined): this {
    this._status = statusElement;
    return this;
  }

  /** For testing purposes, not real usage (0..1) */
  getExperimental(): boolean | undefined {
    return this.experimental;
  }

  /** Sets `experimental`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setExperimental(experimental: boolean | undefined): this {
    return this.setFieldValue('experimental', experimental);
  }

  hasExperimental(): boolean {
    return this.hasFieldValue('experimental');
  }

  /** The element carrying the id and extensions of `experimental`. Created when absent. */
  getExperimentalElement(): Element {
    if (this._experimental === undefined) {
      this._experimental = new Element();
    }
    return this._experimental;
  }

  setExperimentalElement(experimentalElement: Element | undefined): this {
    this._experimental = experimentalElement;
    return this;
  }

  /** Type of individual the activity definition is intended for (0..1) Whichever type of `subject[x]` is set. */
  getSubject(): CodeableConcept | Reference | string | undefined {
    return this.getChoiceValue<CodeableConcept | Reference | string>('subject');
  }

  /** True when any type of `subject[x]` is set. */
  hasSubject(): boolean {
    return this.hasChoiceValue('subject');
  }

  getSubjectCodeableConcept(): CodeableConcept | undefined {
    return this.subjectCodeableConcept;
  }

  /** Sets `subject[x]` as CodeableConcept and clears every other type of it. */
  setSubjectCodeableConcept(subjectCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('subjectCodeableConcept', subjectCodeableConcept);
  }

  hasSubjectCodeableConcept(): boolean {
    return this.hasFieldValue('subjectCodeableConcept');
  }

  getSubjectReference(): Reference | undefined {
    return this.subjectReference;
  }

  /** Sets `subject[x]` as Reference and clears every other type of it. */
  setSubjectReference(subjectReference: Reference | undefined): this {
    return this.setFieldValue('subjectReference', subjectReference);
  }

  hasSubjectReference(): boolean {
    return this.hasFieldValue('subjectReference');
  }

  getSubjectCanonical(): string | undefined {
    return this.subjectCanonical;
  }

  /** Sets `subject[x]` as canonical and clears every other type of it. */
  setSubjectCanonical(subjectCanonical: string | undefined): this {
    return this.setFieldValue('subjectCanonical', subjectCanonical);
  }

  hasSubjectCanonical(): boolean {
    return this.hasFieldValue('subjectCanonical');
  }

  /** Date last changed (0..1) */
  getDate(): string | undefined {
    return this.date;
  }

  /** Sets `date`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setDate(date: string | undefined): this {
    return this.setFieldValue('date', date);
  }

  hasDate(): boolean {
    return this.hasFieldValue('date');
  }

  /** The element carrying the id and extensions of `date`. Created when absent. */
  getDateElement(): Element {
    if (this._date === undefined) {
      this._date = new Element();
    }
    return this._date;
  }

  setDateElement(dateElement: Element | undefined): this {
    this._date = dateElement;
    return this;
  }

  /** Name of the publisher/steward (organization or individual) (0..1) */
  getPublisher(): string | undefined {
    return this.publisher;
  }

  /** Sets `publisher`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPublisher(publisher: string | undefined): this {
    return this.setFieldValue('publisher', publisher);
  }

  hasPublisher(): boolean {
    return this.hasFieldValue('publisher');
  }

  /** The element carrying the id and extensions of `publisher`. Created when absent. */
  getPublisherElement(): Element {
    if (this._publisher === undefined) {
      this._publisher = new Element();
    }
    return this._publisher;
  }

  setPublisherElement(publisherElement: Element | undefined): this {
    this._publisher = publisherElement;
    return this;
  }

  /** Contact details for the publisher (0..*) Never undefined; an empty list is created when absent. */
  getContact(): ContactDetail[] {
    if (this.contact === undefined) {
      this.contact = [];
    }
    return this.contact;
  }

  setContact(contact: ContactDetail[] | undefined): this {
    return this.setFieldValue('contact', contact);
  }

  hasContact(): boolean {
    return this.hasFieldValue('contact');
  }

  /** Appends a new, empty ContactDetail to `contact` and returns it so it can be filled in. */
  addContact(): ContactDetail;
  /** Appends the given ContactDetail to `contact` and returns this object for chaining. */
  addContact(contactDetail: ContactDetail): this;
  addContact(contactDetail?: ContactDetail): ContactDetail | this {
    if (contactDetail !== undefined) {
      return this.addFieldValue('contact', contactDetail);
    }
    const createdContactDetail = new ContactDetail();
    this.addFieldValue('contact', createdContactDetail);
    return createdContactDetail;
  }

  /** The first ContactDetail of `contact`. One is added when the list is empty. */
  getContactFirstRep(): ContactDetail {
    const firstContactDetail = this.getContact()[0];
    return firstContactDetail === undefined ? this.addContact() : firstContactDetail;
  }

  /** Natural language description of the activity definition (0..1) */
  getDescription(): string | undefined {
    return this.description;
  }

  /** Sets `description`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setDescription(description: string | undefined): this {
    return this.setFieldValue('description', description);
  }

  hasDescription(): boolean {
    return this.hasFieldValue('description');
  }

  /** The element carrying the id and extensions of `description`. Created when absent. */
  getDescriptionElement(): Element {
    if (this._description === undefined) {
      this._description = new Element();
    }
    return this._description;
  }

  setDescriptionElement(descriptionElement: Element | undefined): this {
    this._description = descriptionElement;
    return this;
  }

  /** The context that the content is intended to support (0..*) Never undefined; an empty list is created when absent. */
  getUseContext(): UsageContext[] {
    if (this.useContext === undefined) {
      this.useContext = [];
    }
    return this.useContext;
  }

  setUseContext(useContext: UsageContext[] | undefined): this {
    return this.setFieldValue('useContext', useContext);
  }

  hasUseContext(): boolean {
    return this.hasFieldValue('useContext');
  }

  /** Appends a new, empty UsageContext to `useContext` and returns it so it can be filled in. */
  addUseContext(): UsageContext;
  /** Appends the given UsageContext to `useContext` and returns this object for chaining. */
  addUseContext(usageContext: UsageContext): this;
  addUseContext(usageContext?: UsageContext): UsageContext | this {
    if (usageContext !== undefined) {
      return this.addFieldValue('useContext', usageContext);
    }
    const createdUsageContext = new UsageContext();
    this.addFieldValue('useContext', createdUsageContext);
    return createdUsageContext;
  }

  /** The first UsageContext of `useContext`. One is added when the list is empty. */
  getUseContextFirstRep(): UsageContext {
    const firstUsageContext = this.getUseContext()[0];
    return firstUsageContext === undefined ? this.addUseContext() : firstUsageContext;
  }

  /** Intended jurisdiction for activity definition (if applicable) (0..*) Never undefined; an empty list is created when absent. */
  getJurisdiction(): CodeableConcept[] {
    if (this.jurisdiction === undefined) {
      this.jurisdiction = [];
    }
    return this.jurisdiction;
  }

  setJurisdiction(jurisdiction: CodeableConcept[] | undefined): this {
    return this.setFieldValue('jurisdiction', jurisdiction);
  }

  hasJurisdiction(): boolean {
    return this.hasFieldValue('jurisdiction');
  }

  /** Appends a new, empty CodeableConcept to `jurisdiction` and returns it so it can be filled in. */
  addJurisdiction(): CodeableConcept;
  /** Appends the given CodeableConcept to `jurisdiction` and returns this object for chaining. */
  addJurisdiction(codeableConcept: CodeableConcept): this;
  addJurisdiction(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('jurisdiction', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('jurisdiction', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `jurisdiction`. One is added when the list is empty. */
  getJurisdictionFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getJurisdiction()[0];
    return firstCodeableConcept === undefined ? this.addJurisdiction() : firstCodeableConcept;
  }

  /** Why this activity definition is defined (0..1) */
  getPurpose(): string | undefined {
    return this.purpose;
  }

  /** Sets `purpose`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setPurpose(purpose: string | undefined): this {
    return this.setFieldValue('purpose', purpose);
  }

  hasPurpose(): boolean {
    return this.hasFieldValue('purpose');
  }

  /** The element carrying the id and extensions of `purpose`. Created when absent. */
  getPurposeElement(): Element {
    if (this._purpose === undefined) {
      this._purpose = new Element();
    }
    return this._purpose;
  }

  setPurposeElement(purposeElement: Element | undefined): this {
    this._purpose = purposeElement;
    return this;
  }

  /** Describes the clinical usage of the activity definition (0..1) */
  getUsage(): string | undefined {
    return this.usage;
  }

  /** Sets `usage`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setUsage(usage: string | undefined): this {
    return this.setFieldValue('usage', usage);
  }

  hasUsage(): boolean {
    return this.hasFieldValue('usage');
  }

  /** The element carrying the id and extensions of `usage`. Created when absent. */
  getUsageElement(): Element {
    if (this._usage === undefined) {
      this._usage = new Element();
    }
    return this._usage;
  }

  setUsageElement(usageElement: Element | undefined): this {
    this._usage = usageElement;
    return this;
  }

  /** Use and/or publishing restrictions (0..1) */
  getCopyright(): string | undefined {
    return this.copyright;
  }

  /** Sets `copyright`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setCopyright(copyright: string | undefined): this {
    return this.setFieldValue('copyright', copyright);
  }

  hasCopyright(): boolean {
    return this.hasFieldValue('copyright');
  }

  /** The element carrying the id and extensions of `copyright`. Created when absent. */
  getCopyrightElement(): Element {
    if (this._copyright === undefined) {
      this._copyright = new Element();
    }
    return this._copyright;
  }

  setCopyrightElement(copyrightElement: Element | undefined): this {
    this._copyright = copyrightElement;
    return this;
  }

  /** Copyright holder and year(s) (0..1) */
  getCopyrightLabel(): string | undefined {
    return this.copyrightLabel;
  }

  /** Sets `copyrightLabel`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setCopyrightLabel(copyrightLabel: string | undefined): this {
    return this.setFieldValue('copyrightLabel', copyrightLabel);
  }

  hasCopyrightLabel(): boolean {
    return this.hasFieldValue('copyrightLabel');
  }

  /** The element carrying the id and extensions of `copyrightLabel`. Created when absent. */
  getCopyrightLabelElement(): Element {
    if (this._copyrightLabel === undefined) {
      this._copyrightLabel = new Element();
    }
    return this._copyrightLabel;
  }

  setCopyrightLabelElement(copyrightLabelElement: Element | undefined): this {
    this._copyrightLabel = copyrightLabelElement;
    return this;
  }

  /** When the activity definition was approved by publisher (0..1) */
  getApprovalDate(): string | undefined {
    return this.approvalDate;
  }

  /** Sets `approvalDate`. Throws a FhirModelError when the value is not a valid FHIR date. */
  setApprovalDate(approvalDate: string | undefined): this {
    return this.setFieldValue('approvalDate', approvalDate);
  }

  hasApprovalDate(): boolean {
    return this.hasFieldValue('approvalDate');
  }

  /** The element carrying the id and extensions of `approvalDate`. Created when absent. */
  getApprovalDateElement(): Element {
    if (this._approvalDate === undefined) {
      this._approvalDate = new Element();
    }
    return this._approvalDate;
  }

  setApprovalDateElement(approvalDateElement: Element | undefined): this {
    this._approvalDate = approvalDateElement;
    return this;
  }

  /** When the activity definition was last reviewed by the publisher (0..1) */
  getLastReviewDate(): string | undefined {
    return this.lastReviewDate;
  }

  /** Sets `lastReviewDate`. Throws a FhirModelError when the value is not a valid FHIR date. */
  setLastReviewDate(lastReviewDate: string | undefined): this {
    return this.setFieldValue('lastReviewDate', lastReviewDate);
  }

  hasLastReviewDate(): boolean {
    return this.hasFieldValue('lastReviewDate');
  }

  /** The element carrying the id and extensions of `lastReviewDate`. Created when absent. */
  getLastReviewDateElement(): Element {
    if (this._lastReviewDate === undefined) {
      this._lastReviewDate = new Element();
    }
    return this._lastReviewDate;
  }

  setLastReviewDateElement(lastReviewDateElement: Element | undefined): this {
    this._lastReviewDate = lastReviewDateElement;
    return this;
  }

  /** When the activity definition is expected to be used (0..1) Created when absent. */
  getEffectivePeriod(): Period {
    if (this.effectivePeriod === undefined) {
      this.effectivePeriod = new Period();
    }
    return this.effectivePeriod;
  }

  setEffectivePeriod(effectivePeriod: Period | undefined): this {
    return this.setFieldValue('effectivePeriod', effectivePeriod);
  }

  hasEffectivePeriod(): boolean {
    return this.hasFieldValue('effectivePeriod');
  }

  /** E.g. Education, Treatment, Assessment, etc (0..*) Never undefined; an empty list is created when absent. */
  getTopic(): CodeableConcept[] {
    if (this.topic === undefined) {
      this.topic = [];
    }
    return this.topic;
  }

  setTopic(topic: CodeableConcept[] | undefined): this {
    return this.setFieldValue('topic', topic);
  }

  hasTopic(): boolean {
    return this.hasFieldValue('topic');
  }

  /** Appends a new, empty CodeableConcept to `topic` and returns it so it can be filled in. */
  addTopic(): CodeableConcept;
  /** Appends the given CodeableConcept to `topic` and returns this object for chaining. */
  addTopic(codeableConcept: CodeableConcept): this;
  addTopic(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('topic', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('topic', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `topic`. One is added when the list is empty. */
  getTopicFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getTopic()[0];
    return firstCodeableConcept === undefined ? this.addTopic() : firstCodeableConcept;
  }

  /** Who authored the content (0..*) Never undefined; an empty list is created when absent. */
  getAuthor(): ContactDetail[] {
    if (this.author === undefined) {
      this.author = [];
    }
    return this.author;
  }

  setAuthor(author: ContactDetail[] | undefined): this {
    return this.setFieldValue('author', author);
  }

  hasAuthor(): boolean {
    return this.hasFieldValue('author');
  }

  /** Appends a new, empty ContactDetail to `author` and returns it so it can be filled in. */
  addAuthor(): ContactDetail;
  /** Appends the given ContactDetail to `author` and returns this object for chaining. */
  addAuthor(contactDetail: ContactDetail): this;
  addAuthor(contactDetail?: ContactDetail): ContactDetail | this {
    if (contactDetail !== undefined) {
      return this.addFieldValue('author', contactDetail);
    }
    const createdContactDetail = new ContactDetail();
    this.addFieldValue('author', createdContactDetail);
    return createdContactDetail;
  }

  /** The first ContactDetail of `author`. One is added when the list is empty. */
  getAuthorFirstRep(): ContactDetail {
    const firstContactDetail = this.getAuthor()[0];
    return firstContactDetail === undefined ? this.addAuthor() : firstContactDetail;
  }

  /** Who edited the content (0..*) Never undefined; an empty list is created when absent. */
  getEditor(): ContactDetail[] {
    if (this.editor === undefined) {
      this.editor = [];
    }
    return this.editor;
  }

  setEditor(editor: ContactDetail[] | undefined): this {
    return this.setFieldValue('editor', editor);
  }

  hasEditor(): boolean {
    return this.hasFieldValue('editor');
  }

  /** Appends a new, empty ContactDetail to `editor` and returns it so it can be filled in. */
  addEditor(): ContactDetail;
  /** Appends the given ContactDetail to `editor` and returns this object for chaining. */
  addEditor(contactDetail: ContactDetail): this;
  addEditor(contactDetail?: ContactDetail): ContactDetail | this {
    if (contactDetail !== undefined) {
      return this.addFieldValue('editor', contactDetail);
    }
    const createdContactDetail = new ContactDetail();
    this.addFieldValue('editor', createdContactDetail);
    return createdContactDetail;
  }

  /** The first ContactDetail of `editor`. One is added when the list is empty. */
  getEditorFirstRep(): ContactDetail {
    const firstContactDetail = this.getEditor()[0];
    return firstContactDetail === undefined ? this.addEditor() : firstContactDetail;
  }

  /** Who reviewed the content (0..*) Never undefined; an empty list is created when absent. */
  getReviewer(): ContactDetail[] {
    if (this.reviewer === undefined) {
      this.reviewer = [];
    }
    return this.reviewer;
  }

  setReviewer(reviewer: ContactDetail[] | undefined): this {
    return this.setFieldValue('reviewer', reviewer);
  }

  hasReviewer(): boolean {
    return this.hasFieldValue('reviewer');
  }

  /** Appends a new, empty ContactDetail to `reviewer` and returns it so it can be filled in. */
  addReviewer(): ContactDetail;
  /** Appends the given ContactDetail to `reviewer` and returns this object for chaining. */
  addReviewer(contactDetail: ContactDetail): this;
  addReviewer(contactDetail?: ContactDetail): ContactDetail | this {
    if (contactDetail !== undefined) {
      return this.addFieldValue('reviewer', contactDetail);
    }
    const createdContactDetail = new ContactDetail();
    this.addFieldValue('reviewer', createdContactDetail);
    return createdContactDetail;
  }

  /** The first ContactDetail of `reviewer`. One is added when the list is empty. */
  getReviewerFirstRep(): ContactDetail {
    const firstContactDetail = this.getReviewer()[0];
    return firstContactDetail === undefined ? this.addReviewer() : firstContactDetail;
  }

  /** Who endorsed the content (0..*) Never undefined; an empty list is created when absent. */
  getEndorser(): ContactDetail[] {
    if (this.endorser === undefined) {
      this.endorser = [];
    }
    return this.endorser;
  }

  setEndorser(endorser: ContactDetail[] | undefined): this {
    return this.setFieldValue('endorser', endorser);
  }

  hasEndorser(): boolean {
    return this.hasFieldValue('endorser');
  }

  /** Appends a new, empty ContactDetail to `endorser` and returns it so it can be filled in. */
  addEndorser(): ContactDetail;
  /** Appends the given ContactDetail to `endorser` and returns this object for chaining. */
  addEndorser(contactDetail: ContactDetail): this;
  addEndorser(contactDetail?: ContactDetail): ContactDetail | this {
    if (contactDetail !== undefined) {
      return this.addFieldValue('endorser', contactDetail);
    }
    const createdContactDetail = new ContactDetail();
    this.addFieldValue('endorser', createdContactDetail);
    return createdContactDetail;
  }

  /** The first ContactDetail of `endorser`. One is added when the list is empty. */
  getEndorserFirstRep(): ContactDetail {
    const firstContactDetail = this.getEndorser()[0];
    return firstContactDetail === undefined ? this.addEndorser() : firstContactDetail;
  }

  /** Additional documentation, citations, etc (0..*) Never undefined; an empty list is created when absent. */
  getRelatedArtifact(): RelatedArtifact[] {
    if (this.relatedArtifact === undefined) {
      this.relatedArtifact = [];
    }
    return this.relatedArtifact;
  }

  setRelatedArtifact(relatedArtifact: RelatedArtifact[] | undefined): this {
    return this.setFieldValue('relatedArtifact', relatedArtifact);
  }

  hasRelatedArtifact(): boolean {
    return this.hasFieldValue('relatedArtifact');
  }

  /** Appends a new, empty RelatedArtifact to `relatedArtifact` and returns it so it can be filled in. */
  addRelatedArtifact(): RelatedArtifact;
  /** Appends the given RelatedArtifact to `relatedArtifact` and returns this object for chaining. */
  addRelatedArtifact(relatedArtifact: RelatedArtifact): this;
  addRelatedArtifact(relatedArtifact?: RelatedArtifact): RelatedArtifact | this {
    if (relatedArtifact !== undefined) {
      return this.addFieldValue('relatedArtifact', relatedArtifact);
    }
    const createdRelatedArtifact = new RelatedArtifact();
    this.addFieldValue('relatedArtifact', createdRelatedArtifact);
    return createdRelatedArtifact;
  }

  /** The first RelatedArtifact of `relatedArtifact`. One is added when the list is empty. */
  getRelatedArtifactFirstRep(): RelatedArtifact {
    const firstRelatedArtifact = this.getRelatedArtifact()[0];
    return firstRelatedArtifact === undefined ? this.addRelatedArtifact() : firstRelatedArtifact;
  }

  /** Logic used by the activity definition (0..*) Never undefined; an empty list is created when absent. */
  getLibrary(): string[] {
    if (this.library === undefined) {
      this.library = [];
    }
    return this.library;
  }

  setLibrary(library: string[] | undefined): this {
    return this.setFieldValue('library', library);
  }

  hasLibrary(): boolean {
    return this.hasFieldValue('library');
  }

  /** Appends one value to `library`. Throws a FhirModelError when it is not a valid FHIR canonical. */
  addLibrary(library: string): this {
    return this.addFieldValue('library', library);
  }

  /** Kind of resource (0..1) */
  getKind(): valueSetCodes.RequestResourceTypes | undefined {
    return this.kind;
  }

  /** Sets `kind`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setKind(kind: valueSetCodes.RequestResourceTypes | undefined): this {
    return this.setFieldValue('kind', kind);
  }

  hasKind(): boolean {
    return this.hasFieldValue('kind');
  }

  /** The element carrying the id and extensions of `kind`. Created when absent. */
  getKindElement(): Element {
    if (this._kind === undefined) {
      this._kind = new Element();
    }
    return this._kind;
  }

  setKindElement(kindElement: Element | undefined): this {
    this._kind = kindElement;
    return this;
  }

  /** What profile the resource needs to conform to (0..1) */
  getProfile(): string | undefined {
    return this.profile;
  }

  /** Sets `profile`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setProfile(profile: string | undefined): this {
    return this.setFieldValue('profile', profile);
  }

  hasProfile(): boolean {
    return this.hasFieldValue('profile');
  }

  /** The element carrying the id and extensions of `profile`. Created when absent. */
  getProfileElement(): Element {
    if (this._profile === undefined) {
      this._profile = new Element();
    }
    return this._profile;
  }

  setProfileElement(profileElement: Element | undefined): this {
    this._profile = profileElement;
    return this;
  }

  /** Detail type of activity (0..1) Created when absent. */
  getCode(): CodeableConcept {
    if (this.code === undefined) {
      this.code = new CodeableConcept();
    }
    return this.code;
  }

  setCode(code: CodeableConcept | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option (0..1) */
  getIntent(): valueSetCodes.RequestIntent | undefined {
    return this.intent;
  }

  /** Sets `intent`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setIntent(intent: valueSetCodes.RequestIntent | undefined): this {
    return this.setFieldValue('intent', intent);
  }

  hasIntent(): boolean {
    return this.hasFieldValue('intent');
  }

  /** The element carrying the id and extensions of `intent`. Created when absent. */
  getIntentElement(): Element {
    if (this._intent === undefined) {
      this._intent = new Element();
    }
    return this._intent;
  }

  setIntentElement(intentElement: Element | undefined): this {
    this._intent = intentElement;
    return this;
  }

  /** routine | urgent | asap | stat (0..1) */
  getPriority(): valueSetCodes.RequestPriority | undefined {
    return this.priority;
  }

  /** Sets `priority`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setPriority(priority: valueSetCodes.RequestPriority | undefined): this {
    return this.setFieldValue('priority', priority);
  }

  hasPriority(): boolean {
    return this.hasFieldValue('priority');
  }

  /** The element carrying the id and extensions of `priority`. Created when absent. */
  getPriorityElement(): Element {
    if (this._priority === undefined) {
      this._priority = new Element();
    }
    return this._priority;
  }

  setPriorityElement(priorityElement: Element | undefined): this {
    this._priority = priorityElement;
    return this;
  }

  /** True if the activity should not be performed (0..1) */
  getDoNotPerform(): boolean | undefined {
    return this.doNotPerform;
  }

  /** Sets `doNotPerform`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setDoNotPerform(doNotPerform: boolean | undefined): this {
    return this.setFieldValue('doNotPerform', doNotPerform);
  }

  hasDoNotPerform(): boolean {
    return this.hasFieldValue('doNotPerform');
  }

  /** The element carrying the id and extensions of `doNotPerform`. Created when absent. */
  getDoNotPerformElement(): Element {
    if (this._doNotPerform === undefined) {
      this._doNotPerform = new Element();
    }
    return this._doNotPerform;
  }

  setDoNotPerformElement(doNotPerformElement: Element | undefined): this {
    this._doNotPerform = doNotPerformElement;
    return this;
  }

  /** When activity is to occur (0..1) Whichever type of `timing[x]` is set. */
  getTiming(): Timing | Age | Range | Duration | undefined {
    return this.getChoiceValue<Timing | Age | Range | Duration>('timing');
  }

  /** True when any type of `timing[x]` is set. */
  hasTiming(): boolean {
    return this.hasChoiceValue('timing');
  }

  getTimingTiming(): Timing | undefined {
    return this.timingTiming;
  }

  /** Sets `timing[x]` as Timing and clears every other type of it. */
  setTimingTiming(timingTiming: Timing | undefined): this {
    return this.setFieldValue('timingTiming', timingTiming);
  }

  hasTimingTiming(): boolean {
    return this.hasFieldValue('timingTiming');
  }

  getTimingAge(): Age | undefined {
    return this.timingAge;
  }

  /** Sets `timing[x]` as Age and clears every other type of it. */
  setTimingAge(timingAge: Age | undefined): this {
    return this.setFieldValue('timingAge', timingAge);
  }

  hasTimingAge(): boolean {
    return this.hasFieldValue('timingAge');
  }

  getTimingRange(): Range | undefined {
    return this.timingRange;
  }

  /** Sets `timing[x]` as Range and clears every other type of it. */
  setTimingRange(timingRange: Range | undefined): this {
    return this.setFieldValue('timingRange', timingRange);
  }

  hasTimingRange(): boolean {
    return this.hasFieldValue('timingRange');
  }

  getTimingDuration(): Duration | undefined {
    return this.timingDuration;
  }

  /** Sets `timing[x]` as Duration and clears every other type of it. */
  setTimingDuration(timingDuration: Duration | undefined): this {
    return this.setFieldValue('timingDuration', timingDuration);
  }

  hasTimingDuration(): boolean {
    return this.hasFieldValue('timingDuration');
  }

  /** Preconditions for service (0..1) Whichever type of `asNeeded[x]` is set. */
  getAsNeeded(): boolean | CodeableConcept | undefined {
    return this.getChoiceValue<boolean | CodeableConcept>('asNeeded');
  }

  /** True when any type of `asNeeded[x]` is set. */
  hasAsNeeded(): boolean {
    return this.hasChoiceValue('asNeeded');
  }

  getAsNeededBoolean(): boolean | undefined {
    return this.asNeededBoolean;
  }

  /** Sets `asNeeded[x]` as boolean and clears every other type of it. */
  setAsNeededBoolean(asNeededBoolean: boolean | undefined): this {
    return this.setFieldValue('asNeededBoolean', asNeededBoolean);
  }

  hasAsNeededBoolean(): boolean {
    return this.hasFieldValue('asNeededBoolean');
  }

  getAsNeededCodeableConcept(): CodeableConcept | undefined {
    return this.asNeededCodeableConcept;
  }

  /** Sets `asNeeded[x]` as CodeableConcept and clears every other type of it. */
  setAsNeededCodeableConcept(asNeededCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('asNeededCodeableConcept', asNeededCodeableConcept);
  }

  hasAsNeededCodeableConcept(): boolean {
    return this.hasFieldValue('asNeededCodeableConcept');
  }

  /** Where it should happen (0..1) Created when absent. */
  getLocation(): CodeableReference {
    if (this.location === undefined) {
      this.location = new CodeableReference();
    }
    return this.location;
  }

  setLocation(location: CodeableReference | undefined): this {
    return this.setFieldValue('location', location);
  }

  hasLocation(): boolean {
    return this.hasFieldValue('location');
  }

  /** Who should participate in the action (0..*) Never undefined; an empty list is created when absent. */
  getParticipant(): ActivityDefinitionParticipant[] {
    if (this.participant === undefined) {
      this.participant = [];
    }
    return this.participant;
  }

  setParticipant(participant: ActivityDefinitionParticipant[] | undefined): this {
    return this.setFieldValue('participant', participant);
  }

  hasParticipant(): boolean {
    return this.hasFieldValue('participant');
  }

  /** Appends a new, empty ActivityDefinitionParticipant to `participant` and returns it so it can be filled in. */
  addParticipant(): ActivityDefinitionParticipant;
  /** Appends the given ActivityDefinitionParticipant to `participant` and returns this object for chaining. */
  addParticipant(activityDefinitionParticipant: ActivityDefinitionParticipant): this;
  addParticipant(
    activityDefinitionParticipant?: ActivityDefinitionParticipant
  ): ActivityDefinitionParticipant | this {
    if (activityDefinitionParticipant !== undefined) {
      return this.addFieldValue('participant', activityDefinitionParticipant);
    }
    const createdActivityDefinitionParticipant = new ActivityDefinitionParticipant();
    this.addFieldValue('participant', createdActivityDefinitionParticipant);
    return createdActivityDefinitionParticipant;
  }

  /** The first ActivityDefinitionParticipant of `participant`. One is added when the list is empty. */
  getParticipantFirstRep(): ActivityDefinitionParticipant {
    const firstActivityDefinitionParticipant = this.getParticipant()[0];
    return firstActivityDefinitionParticipant === undefined
      ? this.addParticipant()
      : firstActivityDefinitionParticipant;
  }

  /** What's administered/supplied (0..1) Whichever type of `product[x]` is set. */
  getProduct(): Reference | CodeableConcept | undefined {
    return this.getChoiceValue<Reference | CodeableConcept>('product');
  }

  /** True when any type of `product[x]` is set. */
  hasProduct(): boolean {
    return this.hasChoiceValue('product');
  }

  getProductReference(): Reference | undefined {
    return this.productReference;
  }

  /** Sets `product[x]` as Reference and clears every other type of it. */
  setProductReference(productReference: Reference | undefined): this {
    return this.setFieldValue('productReference', productReference);
  }

  hasProductReference(): boolean {
    return this.hasFieldValue('productReference');
  }

  getProductCodeableConcept(): CodeableConcept | undefined {
    return this.productCodeableConcept;
  }

  /** Sets `product[x]` as CodeableConcept and clears every other type of it. */
  setProductCodeableConcept(productCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('productCodeableConcept', productCodeableConcept);
  }

  hasProductCodeableConcept(): boolean {
    return this.hasFieldValue('productCodeableConcept');
  }

  /** How much is administered/consumed/supplied (0..1) Created when absent. */
  getQuantity(): Quantity {
    if (this.quantity === undefined) {
      this.quantity = new Quantity();
    }
    return this.quantity;
  }

  setQuantity(quantity: Quantity | undefined): this {
    return this.setFieldValue('quantity', quantity);
  }

  hasQuantity(): boolean {
    return this.hasFieldValue('quantity');
  }

  /** Detailed dosage instructions (0..*) Never undefined; an empty list is created when absent. */
  getDosage(): Dosage[] {
    if (this.dosage === undefined) {
      this.dosage = [];
    }
    return this.dosage;
  }

  setDosage(dosage: Dosage[] | undefined): this {
    return this.setFieldValue('dosage', dosage);
  }

  hasDosage(): boolean {
    return this.hasFieldValue('dosage');
  }

  /** Appends a new, empty Dosage to `dosage` and returns it so it can be filled in. */
  addDosage(): Dosage;
  /** Appends the given Dosage to `dosage` and returns this object for chaining. */
  addDosage(dosage: Dosage): this;
  addDosage(dosage?: Dosage): Dosage | this {
    if (dosage !== undefined) {
      return this.addFieldValue('dosage', dosage);
    }
    const createdDosage = new Dosage();
    this.addFieldValue('dosage', createdDosage);
    return createdDosage;
  }

  /** The first Dosage of `dosage`. One is added when the list is empty. */
  getDosageFirstRep(): Dosage {
    const firstDosage = this.getDosage()[0];
    return firstDosage === undefined ? this.addDosage() : firstDosage;
  }

  /** What part of body to perform on (0..*) Never undefined; an empty list is created when absent. */
  getBodySite(): CodeableConcept[] {
    if (this.bodySite === undefined) {
      this.bodySite = [];
    }
    return this.bodySite;
  }

  setBodySite(bodySite: CodeableConcept[] | undefined): this {
    return this.setFieldValue('bodySite', bodySite);
  }

  hasBodySite(): boolean {
    return this.hasFieldValue('bodySite');
  }

  /** Appends a new, empty CodeableConcept to `bodySite` and returns it so it can be filled in. */
  addBodySite(): CodeableConcept;
  /** Appends the given CodeableConcept to `bodySite` and returns this object for chaining. */
  addBodySite(codeableConcept: CodeableConcept): this;
  addBodySite(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('bodySite', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('bodySite', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `bodySite`. One is added when the list is empty. */
  getBodySiteFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getBodySite()[0];
    return firstCodeableConcept === undefined ? this.addBodySite() : firstCodeableConcept;
  }

  /** What specimens are required to perform this action (0..*) Never undefined; an empty list is created when absent. */
  getSpecimenRequirement(): string[] {
    if (this.specimenRequirement === undefined) {
      this.specimenRequirement = [];
    }
    return this.specimenRequirement;
  }

  setSpecimenRequirement(specimenRequirement: string[] | undefined): this {
    return this.setFieldValue('specimenRequirement', specimenRequirement);
  }

  hasSpecimenRequirement(): boolean {
    return this.hasFieldValue('specimenRequirement');
  }

  /** Appends one value to `specimenRequirement`. Throws a FhirModelError when it is not a valid FHIR canonical. */
  addSpecimenRequirement(specimenRequirement: string): this {
    return this.addFieldValue('specimenRequirement', specimenRequirement);
  }

  /** What observations are required to perform this action (0..*) Never undefined; an empty list is created when absent. */
  getObservationRequirement(): string[] {
    if (this.observationRequirement === undefined) {
      this.observationRequirement = [];
    }
    return this.observationRequirement;
  }

  setObservationRequirement(observationRequirement: string[] | undefined): this {
    return this.setFieldValue('observationRequirement', observationRequirement);
  }

  hasObservationRequirement(): boolean {
    return this.hasFieldValue('observationRequirement');
  }

  /** Appends one value to `observationRequirement`. Throws a FhirModelError when it is not a valid FHIR canonical. */
  addObservationRequirement(observationRequirement: string): this {
    return this.addFieldValue('observationRequirement', observationRequirement);
  }

  /** What observations must be produced by this action (0..*) Never undefined; an empty list is created when absent. */
  getObservationResultRequirement(): string[] {
    if (this.observationResultRequirement === undefined) {
      this.observationResultRequirement = [];
    }
    return this.observationResultRequirement;
  }

  setObservationResultRequirement(observationResultRequirement: string[] | undefined): this {
    return this.setFieldValue('observationResultRequirement', observationResultRequirement);
  }

  hasObservationResultRequirement(): boolean {
    return this.hasFieldValue('observationResultRequirement');
  }

  /** Appends one value to `observationResultRequirement`. Throws a FhirModelError when it is not a valid FHIR canonical. */
  addObservationResultRequirement(observationResultRequirement: string): this {
    return this.addFieldValue('observationResultRequirement', observationResultRequirement);
  }

  /** Transform to apply the template (0..1) */
  getTransform(): string | undefined {
    return this.transform;
  }

  /** Sets `transform`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setTransform(transform: string | undefined): this {
    return this.setFieldValue('transform', transform);
  }

  hasTransform(): boolean {
    return this.hasFieldValue('transform');
  }

  /** The element carrying the id and extensions of `transform`. Created when absent. */
  getTransformElement(): Element {
    if (this._transform === undefined) {
      this._transform = new Element();
    }
    return this._transform;
  }

  setTransformElement(transformElement: Element | undefined): this {
    this._transform = transformElement;
    return this;
  }

  /** Dynamic aspects of the definition (0..*) Never undefined; an empty list is created when absent. */
  getDynamicValue(): ActivityDefinitionDynamicValue[] {
    if (this.dynamicValue === undefined) {
      this.dynamicValue = [];
    }
    return this.dynamicValue;
  }

  setDynamicValue(dynamicValue: ActivityDefinitionDynamicValue[] | undefined): this {
    return this.setFieldValue('dynamicValue', dynamicValue);
  }

  hasDynamicValue(): boolean {
    return this.hasFieldValue('dynamicValue');
  }

  /** Appends a new, empty ActivityDefinitionDynamicValue to `dynamicValue` and returns it so it can be filled in. */
  addDynamicValue(): ActivityDefinitionDynamicValue;
  /** Appends the given ActivityDefinitionDynamicValue to `dynamicValue` and returns this object for chaining. */
  addDynamicValue(activityDefinitionDynamicValue: ActivityDefinitionDynamicValue): this;
  addDynamicValue(
    activityDefinitionDynamicValue?: ActivityDefinitionDynamicValue
  ): ActivityDefinitionDynamicValue | this {
    if (activityDefinitionDynamicValue !== undefined) {
      return this.addFieldValue('dynamicValue', activityDefinitionDynamicValue);
    }
    const createdActivityDefinitionDynamicValue = new ActivityDefinitionDynamicValue();
    this.addFieldValue('dynamicValue', createdActivityDefinitionDynamicValue);
    return createdActivityDefinitionDynamicValue;
  }

  /** The first ActivityDefinitionDynamicValue of `dynamicValue`. One is added when the list is empty. */
  getDynamicValueFirstRep(): ActivityDefinitionDynamicValue {
    const firstActivityDefinitionDynamicValue = this.getDynamicValue()[0];
    return firstActivityDefinitionDynamicValue === undefined
      ? this.addDynamicValue()
      : firstActivityDefinitionDynamicValue;
  }
}

modelTypeRegistry.register('ActivityDefinition', ActivityDefinition, true);

/** True when the value is a ActivityDefinition model instance. */
export function isActivityDefinition(candidate: unknown): candidate is ActivityDefinition {
  return candidate instanceof ActivityDefinition;
}

/**
 * Who should participate in the action
 */
export class ActivityDefinitionParticipant extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.ActionParticipantType },
      ],
    },
    {
      elementName: 'typeCanonical',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'typeCanonical', typeCode: 'canonical' }],
    },
    {
      elementName: 'typeReference',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'typeReference',
          typeCode: 'Reference',
          targetResourceTypes: [
            'CareTeam',
            'Device',
            'DeviceDefinition',
            'Endpoint',
            'Group',
            'HealthcareService',
            'Location',
            'Organization',
            'Patient',
            'Practitioner',
            'PractitionerRole',
            'RelatedPerson',
          ],
        },
      ],
    },
    {
      elementName: 'role',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'role', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'function',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'function', typeCode: 'CodeableConcept' }],
    },
  ];

  /** careteam | device | group | healthcareservice | location | organization | patient | practitioner | practitionerrole | relatedperson (0..1) */
  type?: valueSetCodes.ActionParticipantType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Who or what can participate (0..1) */
  typeCanonical?: string;
  /** Id and extensions of the primitive `typeCanonical`. */
  _typeCanonical?: Element;

  /** Who or what can participate (0..1) */
  typeReference?: Reference;

  /** E.g. Nurse, Surgeon, Parent, etc (0..1) */
  role?: CodeableConcept;

  /** E.g. Author, Reviewer, Witness, etc (0..1) */
  function?: CodeableConcept;

  override fhirType(): string {
    return 'ActivityDefinition.participant';
  }

  /** FHIR JSON for this ActivityDefinitionParticipant, typed as the plain `ActivityDefinitionParticipant` data type. */
  override toJSON(): plainTypes.ActivityDefinitionParticipant {
    return this.serialize() as plainTypes.ActivityDefinitionParticipant;
  }

  /** careteam | device | group | healthcareservice | location | organization | patient | practitioner | practitionerrole | relatedperson (0..1) */
  getType(): valueSetCodes.ActionParticipantType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.ActionParticipantType | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** The element carrying the id and extensions of `type`. Created when absent. */
  getTypeElement(): Element {
    if (this._type === undefined) {
      this._type = new Element();
    }
    return this._type;
  }

  setTypeElement(typeElement: Element | undefined): this {
    this._type = typeElement;
    return this;
  }

  /** Who or what can participate (0..1) */
  getTypeCanonical(): string | undefined {
    return this.typeCanonical;
  }

  /** Sets `typeCanonical`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setTypeCanonical(typeCanonical: string | undefined): this {
    return this.setFieldValue('typeCanonical', typeCanonical);
  }

  hasTypeCanonical(): boolean {
    return this.hasFieldValue('typeCanonical');
  }

  /** The element carrying the id and extensions of `typeCanonical`. Created when absent. */
  getTypeCanonicalElement(): Element {
    if (this._typeCanonical === undefined) {
      this._typeCanonical = new Element();
    }
    return this._typeCanonical;
  }

  setTypeCanonicalElement(typeCanonicalElement: Element | undefined): this {
    this._typeCanonical = typeCanonicalElement;
    return this;
  }

  /** Who or what can participate (0..1) Created when absent. */
  getTypeReference(): Reference {
    if (this.typeReference === undefined) {
      this.typeReference = new Reference();
    }
    return this.typeReference;
  }

  setTypeReference(typeReference: Reference | undefined): this {
    return this.setFieldValue('typeReference', typeReference);
  }

  hasTypeReference(): boolean {
    return this.hasFieldValue('typeReference');
  }

  /** E.g. Nurse, Surgeon, Parent, etc (0..1) Created when absent. */
  getRole(): CodeableConcept {
    if (this.role === undefined) {
      this.role = new CodeableConcept();
    }
    return this.role;
  }

  setRole(role: CodeableConcept | undefined): this {
    return this.setFieldValue('role', role);
  }

  hasRole(): boolean {
    return this.hasFieldValue('role');
  }

  /** E.g. Author, Reviewer, Witness, etc (0..1) Created when absent. */
  getFunction(): CodeableConcept {
    if (this.function === undefined) {
      this.function = new CodeableConcept();
    }
    return this.function;
  }

  setFunction(functionValue: CodeableConcept | undefined): this {
    return this.setFieldValue('function', functionValue);
  }

  hasFunction(): boolean {
    return this.hasFieldValue('function');
  }
}

modelTypeRegistry.register('ActivityDefinitionParticipant', ActivityDefinitionParticipant, false);

/**
 * Dynamic aspects of the definition
 */
export class ActivityDefinitionDynamicValue extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'path',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'path', typeCode: 'string' }],
    },
    {
      elementName: 'expression',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'expression', typeCode: 'Expression' }],
    },
  ];

  /** The path to the element to be set dynamically (1..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;

  /** An expression that provides the dynamic value for the customization (1..1) */
  expression?: Expression;

  override fhirType(): string {
    return 'ActivityDefinition.dynamicValue';
  }

  /** FHIR JSON for this ActivityDefinitionDynamicValue, typed as the plain `ActivityDefinitionDynamicValue` data type. */
  override toJSON(): plainTypes.ActivityDefinitionDynamicValue {
    return this.serialize() as plainTypes.ActivityDefinitionDynamicValue;
  }

  /** The path to the element to be set dynamically (1..1) */
  getPath(): string | undefined {
    return this.path;
  }

  /** Sets `path`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPath(path: string | undefined): this {
    return this.setFieldValue('path', path);
  }

  hasPath(): boolean {
    return this.hasFieldValue('path');
  }

  /** The element carrying the id and extensions of `path`. Created when absent. */
  getPathElement(): Element {
    if (this._path === undefined) {
      this._path = new Element();
    }
    return this._path;
  }

  setPathElement(pathElement: Element | undefined): this {
    this._path = pathElement;
    return this;
  }

  /** An expression that provides the dynamic value for the customization (1..1) Created when absent. */
  getExpression(): Expression {
    if (this.expression === undefined) {
      this.expression = new Expression();
    }
    return this.expression;
  }

  setExpression(expression: Expression | undefined): this {
    return this.setFieldValue('expression', expression);
  }

  hasExpression(): boolean {
    return this.hasFieldValue('expression');
  }
}

modelTypeRegistry.register('ActivityDefinitionDynamicValue', ActivityDefinitionDynamicValue, false);
