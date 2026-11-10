/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { Attachment } from './attachment';
import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { ContactDetail } from './contactDetail';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { RelatedArtifact } from './relatedArtifact';
import type { ResourceList } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * The Citation Resource enables reference to any knowledge artifact for purposes of identification and attribution. The Citation Resource supports existing reference structures and developing publication practices such as versioning, expressing complex contributorship roles, and referencing computable resources.
 */
export interface Citation {
  resourceType: 'Citation';
  /** Logical id of this artifact (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Metadata about the resource (0..1) */
  meta?: Meta;
  /** A set of rules under which this content was created (0..1) */
  implicitRules?: string;
  /** Id and extensions of the primitive `implicitRules`. */
  _implicitRules?: Element;
  /** Language of the resource content (0..1) */
  language?: string;
  /** Id and extensions of the primitive `language`. */
  _language?: Element;
  /** Text summary of the resource, for human interpretation (0..1) */
  text?: Narrative;
  /** Contained, inline Resources (0..*) */
  contained?: Array<ResourceList>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Canonical identifier for this citation record, represented as a globally unique URI (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Identifier for the citation record itself (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the citation record (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;
  /** Name for this citation record (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this citation record (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: Citation.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** For testing purposes, not real usage (0..1) */
  experimental?: boolean;
  /** Id and extensions of the primitive `experimental`. */
  _experimental?: Element;
  /** Date last changed (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** The publisher of the citation record, not the publisher of the article or artifact being cited (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;
  /** Contact details for the publisher of the citation record (0..*) */
  contact?: Array<ContactDetail>;
  /** Natural language description of the citation (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The context that the citation record content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for citation record (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Why this citation is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;
  /** Use and/or publishing restrictions for the citation record, not for the cited artifact (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;
  /** Copyright holder and year(s) for the ciation record, not for the cited artifact (0..1) */
  copyrightLabel?: string;
  /** Id and extensions of the primitive `copyrightLabel`. */
  _copyrightLabel?: Element;
  /** When the citation record was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;
  /** When the citation record was last reviewed by the publisher (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;
  /** When the citation record is expected to be used (0..1) */
  effectivePeriod?: Period;
  /** Who authored the citation record (0..*) */
  author?: Array<ContactDetail>;
  /** Who edited the citation record (0..*) */
  editor?: Array<ContactDetail>;
  /** Who reviewed the citation record (0..*) */
  reviewer?: Array<ContactDetail>;
  /** Who endorsed the citation record (0..*) */
  endorser?: Array<ContactDetail>;
  /** A human-readable display of key concepts to represent the citation (0..*) */
  summary?: Array<CitationSummary>;
  /** The assignment to an organizing scheme (0..*) */
  classification?: Array<CitationClassification>;
  /** Used for general notes and annotations not coded elsewhere (0..*) */
  note?: Array<Annotation>;
  /** The status of the citation record (0..*) */
  currentState?: Array<CodeableConcept>;
  /** An effective date or period for a status of the citation record (0..*) */
  statusDate?: Array<CitationStatusDate>;
  /** Artifact related to the citation record (0..*) */
  relatedArtifact?: Array<RelatedArtifact>;
  /** The article or artifact being described (0..1) */
  citedArtifact?: CitationCitedArtifact;
}

export namespace Citation {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/publication-status */
  export type StatusEnum = 'draft' | 'active' | 'retired' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    Retired: 'retired' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}

/**
 * A human-readable display of key concepts to represent the citation
 */
export interface CitationSummary {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Format for display of the citation summary (0..1) */
  style?: CodeableConcept;
  /** The human-readable display of the citation summary (1..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;
}

/**
 * The assignment to an organizing scheme
 */
export interface CitationClassification {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The kind of classifier (e.g. publication type, keyword) (0..1) */
  type?: CodeableConcept;
  /** The specific classification value (0..*) */
  classifier?: Array<CodeableConcept>;
}

/**
 * An effective date or period for a status of the citation record
 */
export interface CitationStatusDate {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Classification of the status (1..1) */
  activity: CodeableConcept;
  /** Either occurred or expected (0..1) */
  actual?: boolean;
  /** Id and extensions of the primitive `actual`. */
  _actual?: Element;
  /** When the status started and/or ended (1..1) */
  period: Period;
}

/**
 * The article or artifact being described
 */
export interface CitationCitedArtifact {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Unique identifier. May include DOI, PMID, PMCID, etc (0..*) */
  identifier?: Array<Identifier>;
  /** Identifier not unique to the cited artifact. May include trial registry identifiers (0..*) */
  relatedIdentifier?: Array<Identifier>;
  /** When the cited artifact was accessed (0..1) */
  dateAccessed?: string;
  /** Id and extensions of the primitive `dateAccessed`. */
  _dateAccessed?: Element;
  /** The defined version of the cited artifact (0..1) */
  version?: CitationVersion;
  /** The status of the cited artifact (0..*) */
  currentState?: Array<CodeableConcept>;
  /** An effective date or period for a status of the cited artifact (0..*) */
  statusDate?: Array<CitationStatusDate1>;
  /** The title details of the article or artifact (0..*) */
  title?: Array<CitationTitle>;
  /** Summary of the article or artifact (0..*) */
  abstract?: Array<CitationAbstract>;
  /** The component of the article or artifact (0..1) */
  part?: CitationPart;
  /** The artifact related to the cited artifact (0..*) */
  relatesTo?: Array<CitationRelatesTo>;
  /** If multiple, used to represent alternative forms of the article that are not separate citations (0..*) */
  publicationForm?: Array<CitationPublicationForm>;
  /** Used for any URL for the article or artifact cited (0..*) */
  webLocation?: Array<CitationWebLocation>;
  /** The assignment to an organizing scheme (0..*) */
  classification?: Array<CitationClassification1>;
  /** Attribution of authors and other contributors (0..1) */
  contributorship?: CitationContributorship;
  /** Any additional information or content for the article or artifact (0..*) */
  note?: Array<Annotation>;
}

/**
 * The defined version of the cited artifact
 */
export interface CitationVersion {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The version number or other version identifier (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;
  /** Citation for the main version of the cited artifact (0..1) */
  baseCitation?: Reference;
}

/**
 * An effective date or period for a status of the cited artifact
 */
export interface CitationStatusDate1 {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Classification of the status (1..1) */
  activity: CodeableConcept;
  /** Either occurred or expected (0..1) */
  actual?: boolean;
  /** Id and extensions of the primitive `actual`. */
  _actual?: Element;
  /** When the status started and/or ended (1..1) */
  period: Period;
}

/**
 * The title details of the article or artifact
 */
export interface CitationTitle {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The kind of title (0..*) */
  type?: Array<CodeableConcept>;
  /** Used to express the specific language (0..1) */
  language?: CodeableConcept;
  /** The title of the article or artifact (1..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;
}

/**
 * Summary of the article or artifact
 */
export interface CitationAbstract {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The kind of abstract (0..1) */
  type?: CodeableConcept;
  /** Used to express the specific language (0..1) */
  language?: CodeableConcept;
  /** Abstract content (1..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;
  /** Copyright notice for the abstract (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;
}

/**
 * The component of the article or artifact
 */
export interface CitationPart {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The kind of component (0..1) */
  type?: CodeableConcept;
  /** The specification of the component (0..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;
  /** The citation for the full article or artifact (0..1) */
  baseCitation?: Reference;
}

/**
 * The artifact related to the cited artifact
 */
export interface CitationRelatesTo {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** documentation | justification | citation | predecessor | successor | derived-from | depends-on | composed-of | part-of | amends | amended-with | appends | appended-with | cites | cited-by | comments-on | comment-in | contains | contained-in | corrects | correction-in | replaces | replaced-with | retracts | retracted-by | signs | similar-to | supports | supported-with | transforms | transformed-into | transformed-with | documents | specification-of | created-with | cite-as | reprint | reprint-of (1..1) */
  type?: CitationRelatesTo.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Additional classifiers (0..*) */
  classifier?: Array<CodeableConcept>;
  /** Short label (0..1) */
  label?: string;
  /** Id and extensions of the primitive `label`. */
  _label?: Element;
  /** Brief description of the related artifact (0..1) */
  display?: string;
  /** Id and extensions of the primitive `display`. */
  _display?: Element;
  /** Bibliographic citation for the artifact (0..1) */
  citation?: string;
  /** Id and extensions of the primitive `citation`. */
  _citation?: Element;
  /** What document is being referenced (0..1) */
  document?: Attachment;
  /** What artifact is being referenced (0..1) */
  resource?: string;
  /** Id and extensions of the primitive `resource`. */
  _resource?: Element;
  /** What artifact, if not a conformance resource (0..1) */
  resourceReference?: Reference;
}

export namespace CitationRelatesTo {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/related-artifact-type-all */
  export type TypeEnum =
    | 'documentation'
    | 'justification'
    | 'citation'
    | 'predecessor'
    | 'successor'
    | 'derived-from'
    | 'depends-on'
    | 'composed-of'
    | 'part-of'
    | 'amends'
    | 'amended-with'
    | 'appends'
    | 'appended-with'
    | 'cites'
    | 'cited-by'
    | 'comments-on'
    | 'comment-in'
    | 'contains'
    | 'contained-in'
    | 'corrects'
    | 'correction-in'
    | 'replaces'
    | 'replaced-with'
    | 'retracts'
    | 'retracted-by'
    | 'signs'
    | 'similar-to'
    | 'supports'
    | 'supported-with'
    | 'transforms'
    | 'transformed-into'
    | 'transformed-with'
    | 'documents'
    | 'specification-of'
    | 'created-with'
    | 'cite-as'
    | 'reprint'
    | 'reprint-of';
  export const TypeEnum = {
    Documentation: 'documentation' as TypeEnum,
    Justification: 'justification' as TypeEnum,
    Citation: 'citation' as TypeEnum,
    Predecessor: 'predecessor' as TypeEnum,
    Successor: 'successor' as TypeEnum,
    DerivedFrom: 'derived-from' as TypeEnum,
    DependsOn: 'depends-on' as TypeEnum,
    ComposedOf: 'composed-of' as TypeEnum,
    PartOf: 'part-of' as TypeEnum,
    Amends: 'amends' as TypeEnum,
    AmendedWith: 'amended-with' as TypeEnum,
    Appends: 'appends' as TypeEnum,
    AppendedWith: 'appended-with' as TypeEnum,
    Cites: 'cites' as TypeEnum,
    CitedBy: 'cited-by' as TypeEnum,
    CommentsOn: 'comments-on' as TypeEnum,
    CommentIn: 'comment-in' as TypeEnum,
    Contains: 'contains' as TypeEnum,
    ContainedIn: 'contained-in' as TypeEnum,
    Corrects: 'corrects' as TypeEnum,
    CorrectionIn: 'correction-in' as TypeEnum,
    Replaces: 'replaces' as TypeEnum,
    ReplacedWith: 'replaced-with' as TypeEnum,
    Retracts: 'retracts' as TypeEnum,
    RetractedBy: 'retracted-by' as TypeEnum,
    Signs: 'signs' as TypeEnum,
    SimilarTo: 'similar-to' as TypeEnum,
    Supports: 'supports' as TypeEnum,
    SupportedWith: 'supported-with' as TypeEnum,
    Transforms: 'transforms' as TypeEnum,
    TransformedInto: 'transformed-into' as TypeEnum,
    TransformedWith: 'transformed-with' as TypeEnum,
    Documents: 'documents' as TypeEnum,
    SpecificationOf: 'specification-of' as TypeEnum,
    CreatedWith: 'created-with' as TypeEnum,
    CiteAs: 'cite-as' as TypeEnum,
    Reprint: 'reprint' as TypeEnum,
    ReprintOf: 'reprint-of' as TypeEnum,
  };
}

/**
 * If multiple, used to represent alternative forms of the article that are not separate citations
 */
export interface CitationPublicationForm {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The collection the cited article or artifact is published in (0..1) */
  publishedIn?: CitationPublishedIn;
  /** Internet or Print (0..1) */
  citedMedium?: CodeableConcept;
  /** Volume number of journal or other collection in which the article is published (0..1) */
  volume?: string;
  /** Id and extensions of the primitive `volume`. */
  _volume?: Element;
  /** Issue, part or supplement of journal or other collection in which the article is published (0..1) */
  issue?: string;
  /** Id and extensions of the primitive `issue`. */
  _issue?: Element;
  /** The date the article was added to the database, or the date the article was released (0..1) */
  articleDate?: string;
  /** Id and extensions of the primitive `articleDate`. */
  _articleDate?: Element;
  /** Text representation of the date on which the issue of the cited artifact was published (0..1) */
  publicationDateText?: string;
  /** Id and extensions of the primitive `publicationDateText`. */
  _publicationDateText?: Element;
  /** Season in which the cited artifact was published (0..1) */
  publicationDateSeason?: string;
  /** Id and extensions of the primitive `publicationDateSeason`. */
  _publicationDateSeason?: Element;
  /** The date the article was last revised or updated in the database (0..1) */
  lastRevisionDate?: string;
  /** Id and extensions of the primitive `lastRevisionDate`. */
  _lastRevisionDate?: Element;
  /** Language(s) in which this form of the article is published (0..*) */
  language?: Array<CodeableConcept>;
  /** Entry number or identifier for inclusion in a database (0..1) */
  accessionNumber?: string;
  /** Id and extensions of the primitive `accessionNumber`. */
  _accessionNumber?: Element;
  /** Used for full display of pagination (0..1) */
  pageString?: string;
  /** Id and extensions of the primitive `pageString`. */
  _pageString?: Element;
  /** Used for isolated representation of first page (0..1) */
  firstPage?: string;
  /** Id and extensions of the primitive `firstPage`. */
  _firstPage?: Element;
  /** Used for isolated representation of last page (0..1) */
  lastPage?: string;
  /** Id and extensions of the primitive `lastPage`. */
  _lastPage?: Element;
  /** Number of pages or screens (0..1) */
  pageCount?: string;
  /** Id and extensions of the primitive `pageCount`. */
  _pageCount?: Element;
  /** Copyright notice for the full article or artifact (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;
}

/**
 * The collection the cited article or artifact is published in
 */
export interface CitationPublishedIn {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Kind of container (e.g. Periodical, database, or book) (0..1) */
  type?: CodeableConcept;
  /** Journal identifiers include ISSN, ISO Abbreviation and NLMuniqueID; Book identifiers include ISBN (0..*) */
  identifier?: Array<Identifier>;
  /** Name of the database or title of the book or journal (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** Name of or resource describing the publisher (0..1) */
  publisher?: Reference;
  /** Geographic location of the publisher (0..1) */
  publisherLocation?: string;
  /** Id and extensions of the primitive `publisherLocation`. */
  _publisherLocation?: Element;
}

/**
 * Used for any URL for the article or artifact cited
 */
export interface CitationWebLocation {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Code the reason for different URLs, e.g. abstract and full-text (0..*) */
  classifier?: Array<CodeableConcept>;
  /** The specific URL (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
}

/**
 * The assignment to an organizing scheme
 */
export interface CitationClassification1 {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The kind of classifier (e.g. publication type, keyword) (0..1) */
  type?: CodeableConcept;
  /** The specific classification value (0..*) */
  classifier?: Array<CodeableConcept>;
  /** Complex or externally created classification (0..*) */
  artifactAssessment?: Array<Reference>;
}

/**
 * Attribution of authors and other contributors
 */
export interface CitationContributorship {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Indicates if the list includes all authors and/or contributors (0..1) */
  complete?: boolean;
  /** Id and extensions of the primitive `complete`. */
  _complete?: Element;
  /** An individual entity named as a contributor (0..*) */
  entry?: Array<CitationEntry>;
  /** Used to record a display of the author/contributor list without separate data element for each list member (0..*) */
  summary?: Array<CitationSummary1>;
}

/**
 * An individual entity named as a contributor
 */
export interface CitationEntry {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The identity of the individual contributor (1..1) */
  contributor: Reference;
  /** For citation styles that use initials (0..1) */
  forenameInitials?: string;
  /** Id and extensions of the primitive `forenameInitials`. */
  _forenameInitials?: Element;
  /** Organizational affiliation (0..*) */
  affiliation?: Array<Reference>;
  /** The specific contribution (0..*) */
  contributionType?: Array<CodeableConcept>;
  /** The role of the contributor (e.g. author, editor, reviewer, funder) (0..1) */
  role?: CodeableConcept;
  /** Contributions with accounting for time or number (0..*) */
  contributionInstance?: Array<CitationContributionInstance>;
  /** Whether the contributor is the corresponding contributor for the role (0..1) */
  correspondingContact?: boolean;
  /** Id and extensions of the primitive `correspondingContact`. */
  _correspondingContact?: Element;
  /** Ranked order of contribution (0..1) */
  rankingOrder?: number;
  /** Id and extensions of the primitive `rankingOrder`. */
  _rankingOrder?: Element;
}

/**
 * Contributions with accounting for time or number
 */
export interface CitationContributionInstance {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The specific contribution (1..1) */
  type: CodeableConcept;
  /** The time that the contribution was made (0..1) */
  time?: string;
  /** Id and extensions of the primitive `time`. */
  _time?: Element;
}

/**
 * Used to record a display of the author/contributor list without separate data element for each list member
 */
export interface CitationSummary1 {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Such as author list, contributorship statement, funding statement, acknowledgements statement, or conflicts of interest statement (0..1) */
  type?: CodeableConcept;
  /** The format for the display string (0..1) */
  style?: CodeableConcept;
  /** Used to code the producer or rule for creating the display string (0..1) */
  source?: CodeableConcept;
  /** The display string for the author list, contributor list, or contributorship statement (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;
}
