/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { ContactDetail } from './contactDetail';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Reference } from './reference';
import type { Resource } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts.
 */
export class ImplementationGuide {
  resourceType: 'ImplementationGuide';
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
  contained?: Array<Resource>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Canonical identifier for this implementation guide, represented as a URI (globally unique) (1..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Business version of the implementation guide (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** Name for this implementation guide (computer friendly) (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this implementation guide (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: ImplementationGuide.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** For testing purposes, not real usage (0..1) */
  experimental?: boolean;
  /** Id and extensions of the primitive `experimental`. */
  _experimental?: Element;
  /** Date last changed (0..1) */
  date?: Date | string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Name of the publisher (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;
  /** Contact details for the publisher (0..*) */
  contact?: Array<ContactDetail>;
  /** Natural language description of the implementation guide (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The context that the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for implementation guide (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;
  /** NPM Package name for IG (1..1) */
  packageId?: string;
  /** Id and extensions of the primitive `packageId`. */
  _packageId?: Element;
  /** SPDX license code for this IG (or not-open-source) (0..1) */
  license?: ImplementationGuide.LicenseEnum;
  /** Id and extensions of the primitive `license`. */
  _license?: Element;
  /** FHIR Version(s) this Implementation Guide targets (1..*) */
  fhirVersion?: Array<ImplementationGuide.FhirVersionEnum>;
  /** Id and extensions of the primitive `fhirVersion`. */
  _fhirVersion?: Array<Element | null>;
  /** Another Implementation guide this depends on (0..*) */
  dependsOn?: Array<ImplementationGuideDependsOn>;
  /** Profiles that apply globally (0..*) */
  global?: Array<ImplementationGuideGlobal>;
  /** Information needed to build the IG (0..1) */
  definition?: ImplementationGuideDefinition;
  /** Information about an assembled IG (0..1) */
  manifest?: ImplementationGuideManifest;
}

export namespace ImplementationGuide {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/publication-status */
  export type StatusEnum = 'draft' | 'active' | 'retired' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    Retired: 'retired' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/spdx-license */
  export type LicenseEnum =
    | 'not-open-source'
    | '0BSD'
    | 'AAL'
    | 'Abstyles'
    | 'Adobe-2006'
    | 'Adobe-Glyph'
    | 'ADSL'
    | 'AFL-1.1'
    | 'AFL-1.2'
    | 'AFL-2.0'
    | 'AFL-2.1'
    | 'AFL-3.0'
    | 'Afmparse'
    | 'AGPL-1.0-only'
    | 'AGPL-1.0-or-later'
    | 'AGPL-3.0-only'
    | 'AGPL-3.0-or-later'
    | 'Aladdin'
    | 'AMDPLPA'
    | 'AML'
    | 'AMPAS'
    | 'ANTLR-PD'
    | 'Apache-1.0'
    | 'Apache-1.1'
    | 'Apache-2.0'
    | 'APAFML'
    | 'APL-1.0'
    | 'APSL-1.0'
    | 'APSL-1.1'
    | 'APSL-1.2'
    | 'APSL-2.0'
    | 'Artistic-1.0-cl8'
    | 'Artistic-1.0-Perl'
    | 'Artistic-1.0'
    | 'Artistic-2.0'
    | 'Bahyph'
    | 'Barr'
    | 'Beerware'
    | 'BitTorrent-1.0'
    | 'BitTorrent-1.1'
    | 'Borceux'
    | 'BSD-1-Clause'
    | 'BSD-2-Clause-FreeBSD'
    | 'BSD-2-Clause-NetBSD'
    | 'BSD-2-Clause-Patent'
    | 'BSD-2-Clause'
    | 'BSD-3-Clause-Attribution'
    | 'BSD-3-Clause-Clear'
    | 'BSD-3-Clause-LBNL'
    | 'BSD-3-Clause-No-Nuclear-License-2014'
    | 'BSD-3-Clause-No-Nuclear-License'
    | 'BSD-3-Clause-No-Nuclear-Warranty'
    | 'BSD-3-Clause'
    | 'BSD-4-Clause-UC'
    | 'BSD-4-Clause'
    | 'BSD-Protection'
    | 'BSD-Source-Code'
    | 'BSL-1.0'
    | 'bzip2-1.0.5'
    | 'bzip2-1.0.6'
    | 'Caldera'
    | 'CATOSL-1.1'
    | 'CC-BY-1.0'
    | 'CC-BY-2.0'
    | 'CC-BY-2.5'
    | 'CC-BY-3.0'
    | 'CC-BY-4.0'
    | 'CC-BY-NC-1.0'
    | 'CC-BY-NC-2.0'
    | 'CC-BY-NC-2.5'
    | 'CC-BY-NC-3.0'
    | 'CC-BY-NC-4.0'
    | 'CC-BY-NC-ND-1.0'
    | 'CC-BY-NC-ND-2.0'
    | 'CC-BY-NC-ND-2.5'
    | 'CC-BY-NC-ND-3.0'
    | 'CC-BY-NC-ND-4.0'
    | 'CC-BY-NC-SA-1.0'
    | 'CC-BY-NC-SA-2.0'
    | 'CC-BY-NC-SA-2.5'
    | 'CC-BY-NC-SA-3.0'
    | 'CC-BY-NC-SA-4.0'
    | 'CC-BY-ND-1.0'
    | 'CC-BY-ND-2.0'
    | 'CC-BY-ND-2.5'
    | 'CC-BY-ND-3.0'
    | 'CC-BY-ND-4.0'
    | 'CC-BY-SA-1.0'
    | 'CC-BY-SA-2.0'
    | 'CC-BY-SA-2.5'
    | 'CC-BY-SA-3.0'
    | 'CC-BY-SA-4.0'
    | 'CC0-1.0'
    | 'CDDL-1.0'
    | 'CDDL-1.1'
    | 'CDLA-Permissive-1.0'
    | 'CDLA-Sharing-1.0'
    | 'CECILL-1.0'
    | 'CECILL-1.1'
    | 'CECILL-2.0'
    | 'CECILL-2.1'
    | 'CECILL-B'
    | 'CECILL-C'
    | 'ClArtistic'
    | 'CNRI-Jython'
    | 'CNRI-Python-GPL-Compatible'
    | 'CNRI-Python'
    | 'Condor-1.1'
    | 'CPAL-1.0'
    | 'CPL-1.0'
    | 'CPOL-1.02'
    | 'Crossword'
    | 'CrystalStacker'
    | 'CUA-OPL-1.0'
    | 'Cube'
    | 'curl'
    | 'D-FSL-1.0'
    | 'diffmark'
    | 'DOC'
    | 'Dotseqn'
    | 'DSDP'
    | 'dvipdfm'
    | 'ECL-1.0'
    | 'ECL-2.0'
    | 'EFL-1.0'
    | 'EFL-2.0'
    | 'eGenix'
    | 'Entessa'
    | 'EPL-1.0'
    | 'EPL-2.0'
    | 'ErlPL-1.1'
    | 'EUDatagrid'
    | 'EUPL-1.0'
    | 'EUPL-1.1'
    | 'EUPL-1.2'
    | 'Eurosym'
    | 'Fair'
    | 'Frameworx-1.0'
    | 'FreeImage'
    | 'FSFAP'
    | 'FSFUL'
    | 'FSFULLR'
    | 'FTL'
    | 'GFDL-1.1-only'
    | 'GFDL-1.1-or-later'
    | 'GFDL-1.2-only'
    | 'GFDL-1.2-or-later'
    | 'GFDL-1.3-only'
    | 'GFDL-1.3-or-later'
    | 'Giftware'
    | 'GL2PS'
    | 'Glide'
    | 'Glulxe'
    | 'gnuplot'
    | 'GPL-1.0-only'
    | 'GPL-1.0-or-later'
    | 'GPL-2.0-only'
    | 'GPL-2.0-or-later'
    | 'GPL-3.0-only'
    | 'GPL-3.0-or-later'
    | 'gSOAP-1.3b'
    | 'HaskellReport'
    | 'HPND'
    | 'IBM-pibs'
    | 'ICU'
    | 'IJG'
    | 'ImageMagick'
    | 'iMatix'
    | 'Imlib2'
    | 'Info-ZIP'
    | 'Intel-ACPI'
    | 'Intel'
    | 'Interbase-1.0'
    | 'IPA'
    | 'IPL-1.0'
    | 'ISC'
    | 'JasPer-2.0'
    | 'JSON'
    | 'LAL-1.2'
    | 'LAL-1.3'
    | 'Latex2e'
    | 'Leptonica'
    | 'LGPL-2.0-only'
    | 'LGPL-2.0-or-later'
    | 'LGPL-2.1-only'
    | 'LGPL-2.1-or-later'
    | 'LGPL-3.0-only'
    | 'LGPL-3.0-or-later'
    | 'LGPLLR'
    | 'Libpng'
    | 'libtiff'
    | 'LiLiQ-P-1.1'
    | 'LiLiQ-R-1.1'
    | 'LiLiQ-Rplus-1.1'
    | 'Linux-OpenIB'
    | 'LPL-1.0'
    | 'LPL-1.02'
    | 'LPPL-1.0'
    | 'LPPL-1.1'
    | 'LPPL-1.2'
    | 'LPPL-1.3a'
    | 'LPPL-1.3c'
    | 'MakeIndex'
    | 'MirOS'
    | 'MIT-0'
    | 'MIT-advertising'
    | 'MIT-CMU'
    | 'MIT-enna'
    | 'MIT-feh'
    | 'MIT'
    | 'MITNFA'
    | 'Motosoto'
    | 'mpich2'
    | 'MPL-1.0'
    | 'MPL-1.1'
    | 'MPL-2.0-no-copyleft-exception'
    | 'MPL-2.0'
    | 'MS-PL'
    | 'MS-RL'
    | 'MTLL'
    | 'Multics'
    | 'Mup'
    | 'NASA-1.3'
    | 'Naumen'
    | 'NBPL-1.0'
    | 'NCSA'
    | 'Net-SNMP'
    | 'NetCDF'
    | 'Newsletr'
    | 'NGPL'
    | 'NLOD-1.0'
    | 'NLPL'
    | 'Nokia'
    | 'NOSL'
    | 'Noweb'
    | 'NPL-1.0'
    | 'NPL-1.1'
    | 'NPOSL-3.0'
    | 'NRL'
    | 'NTP'
    | 'OCCT-PL'
    | 'OCLC-2.0'
    | 'ODbL-1.0'
    | 'OFL-1.0'
    | 'OFL-1.1'
    | 'OGTSL'
    | 'OLDAP-1.1'
    | 'OLDAP-1.2'
    | 'OLDAP-1.3'
    | 'OLDAP-1.4'
    | 'OLDAP-2.0.1'
    | 'OLDAP-2.0'
    | 'OLDAP-2.1'
    | 'OLDAP-2.2.1'
    | 'OLDAP-2.2.2'
    | 'OLDAP-2.2'
    | 'OLDAP-2.3'
    | 'OLDAP-2.4'
    | 'OLDAP-2.5'
    | 'OLDAP-2.6'
    | 'OLDAP-2.7'
    | 'OLDAP-2.8'
    | 'OML'
    | 'OpenSSL'
    | 'OPL-1.0'
    | 'OSET-PL-2.1'
    | 'OSL-1.0'
    | 'OSL-1.1'
    | 'OSL-2.0'
    | 'OSL-2.1'
    | 'OSL-3.0'
    | 'PDDL-1.0'
    | 'PHP-3.0'
    | 'PHP-3.01'
    | 'Plexus'
    | 'PostgreSQL'
    | 'psfrag'
    | 'psutils'
    | 'Python-2.0'
    | 'Qhull'
    | 'QPL-1.0'
    | 'Rdisc'
    | 'RHeCos-1.1'
    | 'RPL-1.1'
    | 'RPL-1.5'
    | 'RPSL-1.0'
    | 'RSA-MD'
    | 'RSCPL'
    | 'Ruby'
    | 'SAX-PD'
    | 'Saxpath'
    | 'SCEA'
    | 'Sendmail'
    | 'SGI-B-1.0'
    | 'SGI-B-1.1'
    | 'SGI-B-2.0'
    | 'SimPL-2.0'
    | 'SISSL-1.2'
    | 'SISSL'
    | 'Sleepycat'
    | 'SMLNJ'
    | 'SMPPL'
    | 'SNIA'
    | 'Spencer-86'
    | 'Spencer-94'
    | 'Spencer-99'
    | 'SPL-1.0'
    | 'SugarCRM-1.1.3'
    | 'SWL'
    | 'TCL'
    | 'TCP-wrappers'
    | 'TMate'
    | 'TORQUE-1.1'
    | 'TOSL'
    | 'Unicode-DFS-2015'
    | 'Unicode-DFS-2016'
    | 'Unicode-TOU'
    | 'Unlicense'
    | 'UPL-1.0'
    | 'Vim'
    | 'VOSTROM'
    | 'VSL-1.0'
    | 'W3C-19980720'
    | 'W3C-20150513'
    | 'W3C'
    | 'Watcom-1.0'
    | 'Wsuipa'
    | 'WTFPL'
    | 'X11'
    | 'Xerox'
    | 'XFree86-1.1'
    | 'xinetd'
    | 'Xnet'
    | 'xpp'
    | 'XSkat'
    | 'YPL-1.0'
    | 'YPL-1.1'
    | 'Zed'
    | 'Zend-2.0'
    | 'Zimbra-1.3'
    | 'Zimbra-1.4'
    | 'zlib-acknowledgement'
    | 'Zlib'
    | 'ZPL-1.1'
    | 'ZPL-2.0'
    | 'ZPL-2.1';
  export const LicenseEnum = {
    NotOpenSource: 'not-open-source' as LicenseEnum,
    _0BSD: '0BSD' as LicenseEnum,
    AAL: 'AAL' as LicenseEnum,
    Abstyles: 'Abstyles' as LicenseEnum,
    Adobe2006: 'Adobe-2006' as LicenseEnum,
    AdobeGlyph: 'Adobe-Glyph' as LicenseEnum,
    ADSL: 'ADSL' as LicenseEnum,
    AFL11: 'AFL-1.1' as LicenseEnum,
    AFL12: 'AFL-1.2' as LicenseEnum,
    AFL20: 'AFL-2.0' as LicenseEnum,
    AFL21: 'AFL-2.1' as LicenseEnum,
    AFL30: 'AFL-3.0' as LicenseEnum,
    Afmparse: 'Afmparse' as LicenseEnum,
    AGPL10Only: 'AGPL-1.0-only' as LicenseEnum,
    AGPL10OrLater: 'AGPL-1.0-or-later' as LicenseEnum,
    AGPL30Only: 'AGPL-3.0-only' as LicenseEnum,
    AGPL30OrLater: 'AGPL-3.0-or-later' as LicenseEnum,
    Aladdin: 'Aladdin' as LicenseEnum,
    AMDPLPA: 'AMDPLPA' as LicenseEnum,
    AML: 'AML' as LicenseEnum,
    AMPAS: 'AMPAS' as LicenseEnum,
    ANTLRPD: 'ANTLR-PD' as LicenseEnum,
    Apache10: 'Apache-1.0' as LicenseEnum,
    Apache11: 'Apache-1.1' as LicenseEnum,
    Apache20: 'Apache-2.0' as LicenseEnum,
    APAFML: 'APAFML' as LicenseEnum,
    APL10: 'APL-1.0' as LicenseEnum,
    APSL10: 'APSL-1.0' as LicenseEnum,
    APSL11: 'APSL-1.1' as LicenseEnum,
    APSL12: 'APSL-1.2' as LicenseEnum,
    APSL20: 'APSL-2.0' as LicenseEnum,
    Artistic10Cl8: 'Artistic-1.0-cl8' as LicenseEnum,
    Artistic10Perl: 'Artistic-1.0-Perl' as LicenseEnum,
    Artistic10: 'Artistic-1.0' as LicenseEnum,
    Artistic20: 'Artistic-2.0' as LicenseEnum,
    Bahyph: 'Bahyph' as LicenseEnum,
    Barr: 'Barr' as LicenseEnum,
    Beerware: 'Beerware' as LicenseEnum,
    BitTorrent10: 'BitTorrent-1.0' as LicenseEnum,
    BitTorrent11: 'BitTorrent-1.1' as LicenseEnum,
    Borceux: 'Borceux' as LicenseEnum,
    BSD1Clause: 'BSD-1-Clause' as LicenseEnum,
    BSD2ClauseFreeBSD: 'BSD-2-Clause-FreeBSD' as LicenseEnum,
    BSD2ClauseNetBSD: 'BSD-2-Clause-NetBSD' as LicenseEnum,
    BSD2ClausePatent: 'BSD-2-Clause-Patent' as LicenseEnum,
    BSD2Clause: 'BSD-2-Clause' as LicenseEnum,
    BSD3ClauseAttribution: 'BSD-3-Clause-Attribution' as LicenseEnum,
    BSD3ClauseClear: 'BSD-3-Clause-Clear' as LicenseEnum,
    BSD3ClauseLBNL: 'BSD-3-Clause-LBNL' as LicenseEnum,
    BSD3ClauseNoNuclearLicense2014: 'BSD-3-Clause-No-Nuclear-License-2014' as LicenseEnum,
    BSD3ClauseNoNuclearLicense: 'BSD-3-Clause-No-Nuclear-License' as LicenseEnum,
    BSD3ClauseNoNuclearWarranty: 'BSD-3-Clause-No-Nuclear-Warranty' as LicenseEnum,
    BSD3Clause: 'BSD-3-Clause' as LicenseEnum,
    BSD4ClauseUC: 'BSD-4-Clause-UC' as LicenseEnum,
    BSD4Clause: 'BSD-4-Clause' as LicenseEnum,
    BSDProtection: 'BSD-Protection' as LicenseEnum,
    BSDSourceCode: 'BSD-Source-Code' as LicenseEnum,
    BSL10: 'BSL-1.0' as LicenseEnum,
    Bzip2105: 'bzip2-1.0.5' as LicenseEnum,
    Bzip2106: 'bzip2-1.0.6' as LicenseEnum,
    Caldera: 'Caldera' as LicenseEnum,
    CATOSL11: 'CATOSL-1.1' as LicenseEnum,
    CCBY10: 'CC-BY-1.0' as LicenseEnum,
    CCBY20: 'CC-BY-2.0' as LicenseEnum,
    CCBY25: 'CC-BY-2.5' as LicenseEnum,
    CCBY30: 'CC-BY-3.0' as LicenseEnum,
    CCBY40: 'CC-BY-4.0' as LicenseEnum,
    CCBYNC10: 'CC-BY-NC-1.0' as LicenseEnum,
    CCBYNC20: 'CC-BY-NC-2.0' as LicenseEnum,
    CCBYNC25: 'CC-BY-NC-2.5' as LicenseEnum,
    CCBYNC30: 'CC-BY-NC-3.0' as LicenseEnum,
    CCBYNC40: 'CC-BY-NC-4.0' as LicenseEnum,
    CCBYNCND10: 'CC-BY-NC-ND-1.0' as LicenseEnum,
    CCBYNCND20: 'CC-BY-NC-ND-2.0' as LicenseEnum,
    CCBYNCND25: 'CC-BY-NC-ND-2.5' as LicenseEnum,
    CCBYNCND30: 'CC-BY-NC-ND-3.0' as LicenseEnum,
    CCBYNCND40: 'CC-BY-NC-ND-4.0' as LicenseEnum,
    CCBYNCSA10: 'CC-BY-NC-SA-1.0' as LicenseEnum,
    CCBYNCSA20: 'CC-BY-NC-SA-2.0' as LicenseEnum,
    CCBYNCSA25: 'CC-BY-NC-SA-2.5' as LicenseEnum,
    CCBYNCSA30: 'CC-BY-NC-SA-3.0' as LicenseEnum,
    CCBYNCSA40: 'CC-BY-NC-SA-4.0' as LicenseEnum,
    CCBYND10: 'CC-BY-ND-1.0' as LicenseEnum,
    CCBYND20: 'CC-BY-ND-2.0' as LicenseEnum,
    CCBYND25: 'CC-BY-ND-2.5' as LicenseEnum,
    CCBYND30: 'CC-BY-ND-3.0' as LicenseEnum,
    CCBYND40: 'CC-BY-ND-4.0' as LicenseEnum,
    CCBYSA10: 'CC-BY-SA-1.0' as LicenseEnum,
    CCBYSA20: 'CC-BY-SA-2.0' as LicenseEnum,
    CCBYSA25: 'CC-BY-SA-2.5' as LicenseEnum,
    CCBYSA30: 'CC-BY-SA-3.0' as LicenseEnum,
    CCBYSA40: 'CC-BY-SA-4.0' as LicenseEnum,
    CC010: 'CC0-1.0' as LicenseEnum,
    CDDL10: 'CDDL-1.0' as LicenseEnum,
    CDDL11: 'CDDL-1.1' as LicenseEnum,
    CDLAPermissive10: 'CDLA-Permissive-1.0' as LicenseEnum,
    CDLASharing10: 'CDLA-Sharing-1.0' as LicenseEnum,
    CECILL10: 'CECILL-1.0' as LicenseEnum,
    CECILL11: 'CECILL-1.1' as LicenseEnum,
    CECILL20: 'CECILL-2.0' as LicenseEnum,
    CECILL21: 'CECILL-2.1' as LicenseEnum,
    CECILLB: 'CECILL-B' as LicenseEnum,
    CECILLC: 'CECILL-C' as LicenseEnum,
    ClArtistic: 'ClArtistic' as LicenseEnum,
    CNRIJython: 'CNRI-Jython' as LicenseEnum,
    CNRIPythonGPLCompatible: 'CNRI-Python-GPL-Compatible' as LicenseEnum,
    CNRIPython: 'CNRI-Python' as LicenseEnum,
    Condor11: 'Condor-1.1' as LicenseEnum,
    CPAL10: 'CPAL-1.0' as LicenseEnum,
    CPL10: 'CPL-1.0' as LicenseEnum,
    CPOL102: 'CPOL-1.02' as LicenseEnum,
    Crossword: 'Crossword' as LicenseEnum,
    CrystalStacker: 'CrystalStacker' as LicenseEnum,
    CUAOPL10: 'CUA-OPL-1.0' as LicenseEnum,
    Cube: 'Cube' as LicenseEnum,
    Curl: 'curl' as LicenseEnum,
    DFSL10: 'D-FSL-1.0' as LicenseEnum,
    Diffmark: 'diffmark' as LicenseEnum,
    DOC: 'DOC' as LicenseEnum,
    Dotseqn: 'Dotseqn' as LicenseEnum,
    DSDP: 'DSDP' as LicenseEnum,
    Dvipdfm: 'dvipdfm' as LicenseEnum,
    ECL10: 'ECL-1.0' as LicenseEnum,
    ECL20: 'ECL-2.0' as LicenseEnum,
    EFL10: 'EFL-1.0' as LicenseEnum,
    EFL20: 'EFL-2.0' as LicenseEnum,
    EGenix: 'eGenix' as LicenseEnum,
    Entessa: 'Entessa' as LicenseEnum,
    EPL10: 'EPL-1.0' as LicenseEnum,
    EPL20: 'EPL-2.0' as LicenseEnum,
    ErlPL11: 'ErlPL-1.1' as LicenseEnum,
    EUDatagrid: 'EUDatagrid' as LicenseEnum,
    EUPL10: 'EUPL-1.0' as LicenseEnum,
    EUPL11: 'EUPL-1.1' as LicenseEnum,
    EUPL12: 'EUPL-1.2' as LicenseEnum,
    Eurosym: 'Eurosym' as LicenseEnum,
    Fair: 'Fair' as LicenseEnum,
    Frameworx10: 'Frameworx-1.0' as LicenseEnum,
    FreeImage: 'FreeImage' as LicenseEnum,
    FSFAP: 'FSFAP' as LicenseEnum,
    FSFUL: 'FSFUL' as LicenseEnum,
    FSFULLR: 'FSFULLR' as LicenseEnum,
    FTL: 'FTL' as LicenseEnum,
    GFDL11Only: 'GFDL-1.1-only' as LicenseEnum,
    GFDL11OrLater: 'GFDL-1.1-or-later' as LicenseEnum,
    GFDL12Only: 'GFDL-1.2-only' as LicenseEnum,
    GFDL12OrLater: 'GFDL-1.2-or-later' as LicenseEnum,
    GFDL13Only: 'GFDL-1.3-only' as LicenseEnum,
    GFDL13OrLater: 'GFDL-1.3-or-later' as LicenseEnum,
    Giftware: 'Giftware' as LicenseEnum,
    GL2PS: 'GL2PS' as LicenseEnum,
    Glide: 'Glide' as LicenseEnum,
    Glulxe: 'Glulxe' as LicenseEnum,
    Gnuplot: 'gnuplot' as LicenseEnum,
    GPL10Only: 'GPL-1.0-only' as LicenseEnum,
    GPL10OrLater: 'GPL-1.0-or-later' as LicenseEnum,
    GPL20Only: 'GPL-2.0-only' as LicenseEnum,
    GPL20OrLater: 'GPL-2.0-or-later' as LicenseEnum,
    GPL30Only: 'GPL-3.0-only' as LicenseEnum,
    GPL30OrLater: 'GPL-3.0-or-later' as LicenseEnum,
    GSOAP13b: 'gSOAP-1.3b' as LicenseEnum,
    HaskellReport: 'HaskellReport' as LicenseEnum,
    HPND: 'HPND' as LicenseEnum,
    IBMPibs: 'IBM-pibs' as LicenseEnum,
    ICU: 'ICU' as LicenseEnum,
    IJG: 'IJG' as LicenseEnum,
    ImageMagick: 'ImageMagick' as LicenseEnum,
    IMatix: 'iMatix' as LicenseEnum,
    Imlib2: 'Imlib2' as LicenseEnum,
    InfoZIP: 'Info-ZIP' as LicenseEnum,
    IntelACPI: 'Intel-ACPI' as LicenseEnum,
    Intel: 'Intel' as LicenseEnum,
    Interbase10: 'Interbase-1.0' as LicenseEnum,
    IPA: 'IPA' as LicenseEnum,
    IPL10: 'IPL-1.0' as LicenseEnum,
    ISC: 'ISC' as LicenseEnum,
    JasPer20: 'JasPer-2.0' as LicenseEnum,
    JSON: 'JSON' as LicenseEnum,
    LAL12: 'LAL-1.2' as LicenseEnum,
    LAL13: 'LAL-1.3' as LicenseEnum,
    Latex2e: 'Latex2e' as LicenseEnum,
    Leptonica: 'Leptonica' as LicenseEnum,
    LGPL20Only: 'LGPL-2.0-only' as LicenseEnum,
    LGPL20OrLater: 'LGPL-2.0-or-later' as LicenseEnum,
    LGPL21Only: 'LGPL-2.1-only' as LicenseEnum,
    LGPL21OrLater: 'LGPL-2.1-or-later' as LicenseEnum,
    LGPL30Only: 'LGPL-3.0-only' as LicenseEnum,
    LGPL30OrLater: 'LGPL-3.0-or-later' as LicenseEnum,
    LGPLLR: 'LGPLLR' as LicenseEnum,
    Libpng: 'Libpng' as LicenseEnum,
    Libtiff: 'libtiff' as LicenseEnum,
    LiLiQP11: 'LiLiQ-P-1.1' as LicenseEnum,
    LiLiQR11: 'LiLiQ-R-1.1' as LicenseEnum,
    LiLiQRplus11: 'LiLiQ-Rplus-1.1' as LicenseEnum,
    LinuxOpenIB: 'Linux-OpenIB' as LicenseEnum,
    LPL10: 'LPL-1.0' as LicenseEnum,
    LPL102: 'LPL-1.02' as LicenseEnum,
    LPPL10: 'LPPL-1.0' as LicenseEnum,
    LPPL11: 'LPPL-1.1' as LicenseEnum,
    LPPL12: 'LPPL-1.2' as LicenseEnum,
    LPPL13a: 'LPPL-1.3a' as LicenseEnum,
    LPPL13c: 'LPPL-1.3c' as LicenseEnum,
    MakeIndex: 'MakeIndex' as LicenseEnum,
    MirOS: 'MirOS' as LicenseEnum,
    MIT0: 'MIT-0' as LicenseEnum,
    MITAdvertising: 'MIT-advertising' as LicenseEnum,
    MITCMU: 'MIT-CMU' as LicenseEnum,
    MITEnna: 'MIT-enna' as LicenseEnum,
    MITFeh: 'MIT-feh' as LicenseEnum,
    MIT: 'MIT' as LicenseEnum,
    MITNFA: 'MITNFA' as LicenseEnum,
    Motosoto: 'Motosoto' as LicenseEnum,
    Mpich2: 'mpich2' as LicenseEnum,
    MPL10: 'MPL-1.0' as LicenseEnum,
    MPL11: 'MPL-1.1' as LicenseEnum,
    MPL20NoCopyleftException: 'MPL-2.0-no-copyleft-exception' as LicenseEnum,
    MPL20: 'MPL-2.0' as LicenseEnum,
    MSPL: 'MS-PL' as LicenseEnum,
    MSRL: 'MS-RL' as LicenseEnum,
    MTLL: 'MTLL' as LicenseEnum,
    Multics: 'Multics' as LicenseEnum,
    Mup: 'Mup' as LicenseEnum,
    NASA13: 'NASA-1.3' as LicenseEnum,
    Naumen: 'Naumen' as LicenseEnum,
    NBPL10: 'NBPL-1.0' as LicenseEnum,
    NCSA: 'NCSA' as LicenseEnum,
    NetSNMP: 'Net-SNMP' as LicenseEnum,
    NetCDF: 'NetCDF' as LicenseEnum,
    Newsletr: 'Newsletr' as LicenseEnum,
    NGPL: 'NGPL' as LicenseEnum,
    NLOD10: 'NLOD-1.0' as LicenseEnum,
    NLPL: 'NLPL' as LicenseEnum,
    Nokia: 'Nokia' as LicenseEnum,
    NOSL: 'NOSL' as LicenseEnum,
    Noweb: 'Noweb' as LicenseEnum,
    NPL10: 'NPL-1.0' as LicenseEnum,
    NPL11: 'NPL-1.1' as LicenseEnum,
    NPOSL30: 'NPOSL-3.0' as LicenseEnum,
    NRL: 'NRL' as LicenseEnum,
    NTP: 'NTP' as LicenseEnum,
    OCCTPL: 'OCCT-PL' as LicenseEnum,
    OCLC20: 'OCLC-2.0' as LicenseEnum,
    ODbL10: 'ODbL-1.0' as LicenseEnum,
    OFL10: 'OFL-1.0' as LicenseEnum,
    OFL11: 'OFL-1.1' as LicenseEnum,
    OGTSL: 'OGTSL' as LicenseEnum,
    OLDAP11: 'OLDAP-1.1' as LicenseEnum,
    OLDAP12: 'OLDAP-1.2' as LicenseEnum,
    OLDAP13: 'OLDAP-1.3' as LicenseEnum,
    OLDAP14: 'OLDAP-1.4' as LicenseEnum,
    OLDAP201: 'OLDAP-2.0.1' as LicenseEnum,
    OLDAP20: 'OLDAP-2.0' as LicenseEnum,
    OLDAP21: 'OLDAP-2.1' as LicenseEnum,
    OLDAP221: 'OLDAP-2.2.1' as LicenseEnum,
    OLDAP222: 'OLDAP-2.2.2' as LicenseEnum,
    OLDAP22: 'OLDAP-2.2' as LicenseEnum,
    OLDAP23: 'OLDAP-2.3' as LicenseEnum,
    OLDAP24: 'OLDAP-2.4' as LicenseEnum,
    OLDAP25: 'OLDAP-2.5' as LicenseEnum,
    OLDAP26: 'OLDAP-2.6' as LicenseEnum,
    OLDAP27: 'OLDAP-2.7' as LicenseEnum,
    OLDAP28: 'OLDAP-2.8' as LicenseEnum,
    OML: 'OML' as LicenseEnum,
    OpenSSL: 'OpenSSL' as LicenseEnum,
    OPL10: 'OPL-1.0' as LicenseEnum,
    OSETPL21: 'OSET-PL-2.1' as LicenseEnum,
    OSL10: 'OSL-1.0' as LicenseEnum,
    OSL11: 'OSL-1.1' as LicenseEnum,
    OSL20: 'OSL-2.0' as LicenseEnum,
    OSL21: 'OSL-2.1' as LicenseEnum,
    OSL30: 'OSL-3.0' as LicenseEnum,
    PDDL10: 'PDDL-1.0' as LicenseEnum,
    PHP30: 'PHP-3.0' as LicenseEnum,
    PHP301: 'PHP-3.01' as LicenseEnum,
    Plexus: 'Plexus' as LicenseEnum,
    PostgreSQL: 'PostgreSQL' as LicenseEnum,
    Psfrag: 'psfrag' as LicenseEnum,
    Psutils: 'psutils' as LicenseEnum,
    Python20: 'Python-2.0' as LicenseEnum,
    Qhull: 'Qhull' as LicenseEnum,
    QPL10: 'QPL-1.0' as LicenseEnum,
    Rdisc: 'Rdisc' as LicenseEnum,
    RHeCos11: 'RHeCos-1.1' as LicenseEnum,
    RPL11: 'RPL-1.1' as LicenseEnum,
    RPL15: 'RPL-1.5' as LicenseEnum,
    RPSL10: 'RPSL-1.0' as LicenseEnum,
    RSAMD: 'RSA-MD' as LicenseEnum,
    RSCPL: 'RSCPL' as LicenseEnum,
    Ruby: 'Ruby' as LicenseEnum,
    SAXPD: 'SAX-PD' as LicenseEnum,
    Saxpath: 'Saxpath' as LicenseEnum,
    SCEA: 'SCEA' as LicenseEnum,
    Sendmail: 'Sendmail' as LicenseEnum,
    SGIB10: 'SGI-B-1.0' as LicenseEnum,
    SGIB11: 'SGI-B-1.1' as LicenseEnum,
    SGIB20: 'SGI-B-2.0' as LicenseEnum,
    SimPL20: 'SimPL-2.0' as LicenseEnum,
    SISSL12: 'SISSL-1.2' as LicenseEnum,
    SISSL: 'SISSL' as LicenseEnum,
    Sleepycat: 'Sleepycat' as LicenseEnum,
    SMLNJ: 'SMLNJ' as LicenseEnum,
    SMPPL: 'SMPPL' as LicenseEnum,
    SNIA: 'SNIA' as LicenseEnum,
    Spencer86: 'Spencer-86' as LicenseEnum,
    Spencer94: 'Spencer-94' as LicenseEnum,
    Spencer99: 'Spencer-99' as LicenseEnum,
    SPL10: 'SPL-1.0' as LicenseEnum,
    SugarCRM113: 'SugarCRM-1.1.3' as LicenseEnum,
    SWL: 'SWL' as LicenseEnum,
    TCL: 'TCL' as LicenseEnum,
    TCPWrappers: 'TCP-wrappers' as LicenseEnum,
    TMate: 'TMate' as LicenseEnum,
    TORQUE11: 'TORQUE-1.1' as LicenseEnum,
    TOSL: 'TOSL' as LicenseEnum,
    UnicodeDFS2015: 'Unicode-DFS-2015' as LicenseEnum,
    UnicodeDFS2016: 'Unicode-DFS-2016' as LicenseEnum,
    UnicodeTOU: 'Unicode-TOU' as LicenseEnum,
    Unlicense: 'Unlicense' as LicenseEnum,
    UPL10: 'UPL-1.0' as LicenseEnum,
    Vim: 'Vim' as LicenseEnum,
    VOSTROM: 'VOSTROM' as LicenseEnum,
    VSL10: 'VSL-1.0' as LicenseEnum,
    W3C19980720: 'W3C-19980720' as LicenseEnum,
    W3C20150513: 'W3C-20150513' as LicenseEnum,
    W3C: 'W3C' as LicenseEnum,
    Watcom10: 'Watcom-1.0' as LicenseEnum,
    Wsuipa: 'Wsuipa' as LicenseEnum,
    WTFPL: 'WTFPL' as LicenseEnum,
    X11: 'X11' as LicenseEnum,
    Xerox: 'Xerox' as LicenseEnum,
    XFree8611: 'XFree86-1.1' as LicenseEnum,
    Xinetd: 'xinetd' as LicenseEnum,
    Xnet: 'Xnet' as LicenseEnum,
    Xpp: 'xpp' as LicenseEnum,
    XSkat: 'XSkat' as LicenseEnum,
    YPL10: 'YPL-1.0' as LicenseEnum,
    YPL11: 'YPL-1.1' as LicenseEnum,
    Zed: 'Zed' as LicenseEnum,
    Zend20: 'Zend-2.0' as LicenseEnum,
    Zimbra13: 'Zimbra-1.3' as LicenseEnum,
    Zimbra14: 'Zimbra-1.4' as LicenseEnum,
    ZlibAcknowledgement: 'zlib-acknowledgement' as LicenseEnum,
    Zlib: 'Zlib' as LicenseEnum,
    ZPL11: 'ZPL-1.1' as LicenseEnum,
    ZPL20: 'ZPL-2.0' as LicenseEnum,
    ZPL21: 'ZPL-2.1' as LicenseEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/FHIR-version */
  export type FhirVersionEnum =
    | '0.01'
    | '0.05'
    | '0.06'
    | '0.11'
    | '0.0.80'
    | '0.0.81'
    | '0.0.82'
    | '0.4.0'
    | '0.5.0'
    | '1.0.0'
    | '1.0.1'
    | '1.0.2'
    | '1.1.0'
    | '1.4.0'
    | '1.6.0'
    | '1.8.0'
    | '3.0.0'
    | '3.0.1'
    | '3.3.0'
    | '3.5.0'
    | '4.0.0'
    | '4.0.1';
  export const FhirVersionEnum = {
    _001: '0.01' as FhirVersionEnum,
    _005: '0.05' as FhirVersionEnum,
    _006: '0.06' as FhirVersionEnum,
    _011: '0.11' as FhirVersionEnum,
    _0080: '0.0.80' as FhirVersionEnum,
    _0081: '0.0.81' as FhirVersionEnum,
    _0082: '0.0.82' as FhirVersionEnum,
    _040: '0.4.0' as FhirVersionEnum,
    _050: '0.5.0' as FhirVersionEnum,
    _100: '1.0.0' as FhirVersionEnum,
    _101: '1.0.1' as FhirVersionEnum,
    _102: '1.0.2' as FhirVersionEnum,
    _110: '1.1.0' as FhirVersionEnum,
    _140: '1.4.0' as FhirVersionEnum,
    _160: '1.6.0' as FhirVersionEnum,
    _180: '1.8.0' as FhirVersionEnum,
    _300: '3.0.0' as FhirVersionEnum,
    _301: '3.0.1' as FhirVersionEnum,
    _330: '3.3.0' as FhirVersionEnum,
    _350: '3.5.0' as FhirVersionEnum,
    _400: '4.0.0' as FhirVersionEnum,
    _401: '4.0.1' as FhirVersionEnum,
  };
}

/**
 * Another Implementation guide this depends on
 */
export class ImplementationGuideDependsOn {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Identity of the IG that this depends on (1..1) */
  uri?: string;
  /** Id and extensions of the primitive `uri`. */
  _uri?: Element;
  /** NPM Package name for IG this depends on (0..1) */
  packageId?: string;
  /** Id and extensions of the primitive `packageId`. */
  _packageId?: Element;
  /** Version of the IG (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
}

/**
 * Profiles that apply globally
 */
export class ImplementationGuideGlobal {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type this profile applies to (1..1) */
  type?: ImplementationGuideGlobal.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Profile that all resources must conform to (1..1) */
  profile?: string;
  /** Id and extensions of the primitive `profile`. */
  _profile?: Element;
}

export namespace ImplementationGuideGlobal {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/resource-types */
  export type TypeEnum =
    | 'Account'
    | 'ActivityDefinition'
    | 'AdverseEvent'
    | 'AllergyIntolerance'
    | 'Appointment'
    | 'AppointmentResponse'
    | 'AuditEvent'
    | 'Basic'
    | 'Binary'
    | 'BiologicallyDerivedProduct'
    | 'BodyStructure'
    | 'Bundle'
    | 'CapabilityStatement'
    | 'CarePlan'
    | 'CareTeam'
    | 'CatalogEntry'
    | 'ChargeItem'
    | 'ChargeItemDefinition'
    | 'Claim'
    | 'ClaimResponse'
    | 'ClinicalImpression'
    | 'CodeSystem'
    | 'Communication'
    | 'CommunicationRequest'
    | 'CompartmentDefinition'
    | 'Composition'
    | 'ConceptMap'
    | 'Condition'
    | 'Consent'
    | 'Contract'
    | 'Coverage'
    | 'CoverageEligibilityRequest'
    | 'CoverageEligibilityResponse'
    | 'DetectedIssue'
    | 'Device'
    | 'DeviceDefinition'
    | 'DeviceMetric'
    | 'DeviceRequest'
    | 'DeviceUseStatement'
    | 'DiagnosticReport'
    | 'DocumentManifest'
    | 'DocumentReference'
    | 'DomainResource'
    | 'EffectEvidenceSynthesis'
    | 'Encounter'
    | 'Endpoint'
    | 'EnrollmentRequest'
    | 'EnrollmentResponse'
    | 'EpisodeOfCare'
    | 'EventDefinition'
    | 'Evidence'
    | 'EvidenceVariable'
    | 'ExampleScenario'
    | 'ExplanationOfBenefit'
    | 'FamilyMemberHistory'
    | 'Flag'
    | 'Goal'
    | 'GraphDefinition'
    | 'Group'
    | 'GuidanceResponse'
    | 'HealthcareService'
    | 'ImagingStudy'
    | 'Immunization'
    | 'ImmunizationEvaluation'
    | 'ImmunizationRecommendation'
    | 'ImplementationGuide'
    | 'InsurancePlan'
    | 'Invoice'
    | 'Library'
    | 'Linkage'
    | 'List'
    | 'Location'
    | 'Measure'
    | 'MeasureReport'
    | 'Media'
    | 'Medication'
    | 'MedicationAdministration'
    | 'MedicationDispense'
    | 'MedicationKnowledge'
    | 'MedicationRequest'
    | 'MedicationStatement'
    | 'MedicinalProduct'
    | 'MedicinalProductAuthorization'
    | 'MedicinalProductContraindication'
    | 'MedicinalProductIndication'
    | 'MedicinalProductIngredient'
    | 'MedicinalProductInteraction'
    | 'MedicinalProductManufactured'
    | 'MedicinalProductPackaged'
    | 'MedicinalProductPharmaceutical'
    | 'MedicinalProductUndesirableEffect'
    | 'MessageDefinition'
    | 'MessageHeader'
    | 'MolecularSequence'
    | 'NamingSystem'
    | 'NutritionOrder'
    | 'Observation'
    | 'ObservationDefinition'
    | 'OperationDefinition'
    | 'OperationOutcome'
    | 'Organization'
    | 'OrganizationAffiliation'
    | 'Parameters'
    | 'Patient'
    | 'PaymentNotice'
    | 'PaymentReconciliation'
    | 'Person'
    | 'PlanDefinition'
    | 'Practitioner'
    | 'PractitionerRole'
    | 'Procedure'
    | 'Provenance'
    | 'Questionnaire'
    | 'QuestionnaireResponse'
    | 'RelatedPerson'
    | 'RequestGroup'
    | 'ResearchDefinition'
    | 'ResearchElementDefinition'
    | 'ResearchStudy'
    | 'ResearchSubject'
    | 'Resource'
    | 'RiskAssessment'
    | 'RiskEvidenceSynthesis'
    | 'Schedule'
    | 'SearchParameter'
    | 'ServiceRequest'
    | 'Slot'
    | 'Specimen'
    | 'SpecimenDefinition'
    | 'StructureDefinition'
    | 'StructureMap'
    | 'Subscription'
    | 'Substance'
    | 'SubstanceNucleicAcid'
    | 'SubstancePolymer'
    | 'SubstanceProtein'
    | 'SubstanceReferenceInformation'
    | 'SubstanceSourceMaterial'
    | 'SubstanceSpecification'
    | 'SupplyDelivery'
    | 'SupplyRequest'
    | 'Task'
    | 'TerminologyCapabilities'
    | 'TestReport'
    | 'TestScript'
    | 'ValueSet'
    | 'VerificationResult'
    | 'VisionPrescription';
  export const TypeEnum = {
    Account: 'Account' as TypeEnum,
    ActivityDefinition: 'ActivityDefinition' as TypeEnum,
    AdverseEvent: 'AdverseEvent' as TypeEnum,
    AllergyIntolerance: 'AllergyIntolerance' as TypeEnum,
    Appointment: 'Appointment' as TypeEnum,
    AppointmentResponse: 'AppointmentResponse' as TypeEnum,
    AuditEvent: 'AuditEvent' as TypeEnum,
    Basic: 'Basic' as TypeEnum,
    Binary: 'Binary' as TypeEnum,
    BiologicallyDerivedProduct: 'BiologicallyDerivedProduct' as TypeEnum,
    BodyStructure: 'BodyStructure' as TypeEnum,
    Bundle: 'Bundle' as TypeEnum,
    CapabilityStatement: 'CapabilityStatement' as TypeEnum,
    CarePlan: 'CarePlan' as TypeEnum,
    CareTeam: 'CareTeam' as TypeEnum,
    CatalogEntry: 'CatalogEntry' as TypeEnum,
    ChargeItem: 'ChargeItem' as TypeEnum,
    ChargeItemDefinition: 'ChargeItemDefinition' as TypeEnum,
    Claim: 'Claim' as TypeEnum,
    ClaimResponse: 'ClaimResponse' as TypeEnum,
    ClinicalImpression: 'ClinicalImpression' as TypeEnum,
    CodeSystem: 'CodeSystem' as TypeEnum,
    Communication: 'Communication' as TypeEnum,
    CommunicationRequest: 'CommunicationRequest' as TypeEnum,
    CompartmentDefinition: 'CompartmentDefinition' as TypeEnum,
    Composition: 'Composition' as TypeEnum,
    ConceptMap: 'ConceptMap' as TypeEnum,
    Condition: 'Condition' as TypeEnum,
    Consent: 'Consent' as TypeEnum,
    Contract: 'Contract' as TypeEnum,
    Coverage: 'Coverage' as TypeEnum,
    CoverageEligibilityRequest: 'CoverageEligibilityRequest' as TypeEnum,
    CoverageEligibilityResponse: 'CoverageEligibilityResponse' as TypeEnum,
    DetectedIssue: 'DetectedIssue' as TypeEnum,
    Device: 'Device' as TypeEnum,
    DeviceDefinition: 'DeviceDefinition' as TypeEnum,
    DeviceMetric: 'DeviceMetric' as TypeEnum,
    DeviceRequest: 'DeviceRequest' as TypeEnum,
    DeviceUseStatement: 'DeviceUseStatement' as TypeEnum,
    DiagnosticReport: 'DiagnosticReport' as TypeEnum,
    DocumentManifest: 'DocumentManifest' as TypeEnum,
    DocumentReference: 'DocumentReference' as TypeEnum,
    DomainResource: 'DomainResource' as TypeEnum,
    EffectEvidenceSynthesis: 'EffectEvidenceSynthesis' as TypeEnum,
    Encounter: 'Encounter' as TypeEnum,
    Endpoint: 'Endpoint' as TypeEnum,
    EnrollmentRequest: 'EnrollmentRequest' as TypeEnum,
    EnrollmentResponse: 'EnrollmentResponse' as TypeEnum,
    EpisodeOfCare: 'EpisodeOfCare' as TypeEnum,
    EventDefinition: 'EventDefinition' as TypeEnum,
    Evidence: 'Evidence' as TypeEnum,
    EvidenceVariable: 'EvidenceVariable' as TypeEnum,
    ExampleScenario: 'ExampleScenario' as TypeEnum,
    ExplanationOfBenefit: 'ExplanationOfBenefit' as TypeEnum,
    FamilyMemberHistory: 'FamilyMemberHistory' as TypeEnum,
    Flag: 'Flag' as TypeEnum,
    Goal: 'Goal' as TypeEnum,
    GraphDefinition: 'GraphDefinition' as TypeEnum,
    Group: 'Group' as TypeEnum,
    GuidanceResponse: 'GuidanceResponse' as TypeEnum,
    HealthcareService: 'HealthcareService' as TypeEnum,
    ImagingStudy: 'ImagingStudy' as TypeEnum,
    Immunization: 'Immunization' as TypeEnum,
    ImmunizationEvaluation: 'ImmunizationEvaluation' as TypeEnum,
    ImmunizationRecommendation: 'ImmunizationRecommendation' as TypeEnum,
    ImplementationGuide: 'ImplementationGuide' as TypeEnum,
    InsurancePlan: 'InsurancePlan' as TypeEnum,
    Invoice: 'Invoice' as TypeEnum,
    Library: 'Library' as TypeEnum,
    Linkage: 'Linkage' as TypeEnum,
    List: 'List' as TypeEnum,
    Location: 'Location' as TypeEnum,
    Measure: 'Measure' as TypeEnum,
    MeasureReport: 'MeasureReport' as TypeEnum,
    Media: 'Media' as TypeEnum,
    Medication: 'Medication' as TypeEnum,
    MedicationAdministration: 'MedicationAdministration' as TypeEnum,
    MedicationDispense: 'MedicationDispense' as TypeEnum,
    MedicationKnowledge: 'MedicationKnowledge' as TypeEnum,
    MedicationRequest: 'MedicationRequest' as TypeEnum,
    MedicationStatement: 'MedicationStatement' as TypeEnum,
    MedicinalProduct: 'MedicinalProduct' as TypeEnum,
    MedicinalProductAuthorization: 'MedicinalProductAuthorization' as TypeEnum,
    MedicinalProductContraindication: 'MedicinalProductContraindication' as TypeEnum,
    MedicinalProductIndication: 'MedicinalProductIndication' as TypeEnum,
    MedicinalProductIngredient: 'MedicinalProductIngredient' as TypeEnum,
    MedicinalProductInteraction: 'MedicinalProductInteraction' as TypeEnum,
    MedicinalProductManufactured: 'MedicinalProductManufactured' as TypeEnum,
    MedicinalProductPackaged: 'MedicinalProductPackaged' as TypeEnum,
    MedicinalProductPharmaceutical: 'MedicinalProductPharmaceutical' as TypeEnum,
    MedicinalProductUndesirableEffect: 'MedicinalProductUndesirableEffect' as TypeEnum,
    MessageDefinition: 'MessageDefinition' as TypeEnum,
    MessageHeader: 'MessageHeader' as TypeEnum,
    MolecularSequence: 'MolecularSequence' as TypeEnum,
    NamingSystem: 'NamingSystem' as TypeEnum,
    NutritionOrder: 'NutritionOrder' as TypeEnum,
    Observation: 'Observation' as TypeEnum,
    ObservationDefinition: 'ObservationDefinition' as TypeEnum,
    OperationDefinition: 'OperationDefinition' as TypeEnum,
    OperationOutcome: 'OperationOutcome' as TypeEnum,
    Organization: 'Organization' as TypeEnum,
    OrganizationAffiliation: 'OrganizationAffiliation' as TypeEnum,
    Parameters: 'Parameters' as TypeEnum,
    Patient: 'Patient' as TypeEnum,
    PaymentNotice: 'PaymentNotice' as TypeEnum,
    PaymentReconciliation: 'PaymentReconciliation' as TypeEnum,
    Person: 'Person' as TypeEnum,
    PlanDefinition: 'PlanDefinition' as TypeEnum,
    Practitioner: 'Practitioner' as TypeEnum,
    PractitionerRole: 'PractitionerRole' as TypeEnum,
    Procedure: 'Procedure' as TypeEnum,
    Provenance: 'Provenance' as TypeEnum,
    Questionnaire: 'Questionnaire' as TypeEnum,
    QuestionnaireResponse: 'QuestionnaireResponse' as TypeEnum,
    RelatedPerson: 'RelatedPerson' as TypeEnum,
    RequestGroup: 'RequestGroup' as TypeEnum,
    ResearchDefinition: 'ResearchDefinition' as TypeEnum,
    ResearchElementDefinition: 'ResearchElementDefinition' as TypeEnum,
    ResearchStudy: 'ResearchStudy' as TypeEnum,
    ResearchSubject: 'ResearchSubject' as TypeEnum,
    Resource: 'Resource' as TypeEnum,
    RiskAssessment: 'RiskAssessment' as TypeEnum,
    RiskEvidenceSynthesis: 'RiskEvidenceSynthesis' as TypeEnum,
    Schedule: 'Schedule' as TypeEnum,
    SearchParameter: 'SearchParameter' as TypeEnum,
    ServiceRequest: 'ServiceRequest' as TypeEnum,
    Slot: 'Slot' as TypeEnum,
    Specimen: 'Specimen' as TypeEnum,
    SpecimenDefinition: 'SpecimenDefinition' as TypeEnum,
    StructureDefinition: 'StructureDefinition' as TypeEnum,
    StructureMap: 'StructureMap' as TypeEnum,
    Subscription: 'Subscription' as TypeEnum,
    Substance: 'Substance' as TypeEnum,
    SubstanceNucleicAcid: 'SubstanceNucleicAcid' as TypeEnum,
    SubstancePolymer: 'SubstancePolymer' as TypeEnum,
    SubstanceProtein: 'SubstanceProtein' as TypeEnum,
    SubstanceReferenceInformation: 'SubstanceReferenceInformation' as TypeEnum,
    SubstanceSourceMaterial: 'SubstanceSourceMaterial' as TypeEnum,
    SubstanceSpecification: 'SubstanceSpecification' as TypeEnum,
    SupplyDelivery: 'SupplyDelivery' as TypeEnum,
    SupplyRequest: 'SupplyRequest' as TypeEnum,
    Task: 'Task' as TypeEnum,
    TerminologyCapabilities: 'TerminologyCapabilities' as TypeEnum,
    TestReport: 'TestReport' as TypeEnum,
    TestScript: 'TestScript' as TypeEnum,
    ValueSet: 'ValueSet' as TypeEnum,
    VerificationResult: 'VerificationResult' as TypeEnum,
    VisionPrescription: 'VisionPrescription' as TypeEnum,
  };
}

/**
 * Information needed to build the IG
 */
export class ImplementationGuideDefinition {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Grouping used to present related resources in the IG (0..*) */
  grouping?: Array<ImplementationGuideGrouping>;
  /** Resource in the implementation guide (1..*) */
  resource: Array<ImplementationGuideResource>;
  /** Page/Section in the Guide (0..1) */
  page?: ImplementationGuidePage;
  /** Defines how IG is built by tools (0..*) */
  parameter?: Array<ImplementationGuideParameter>;
  /** A template for building resources (0..*) */
  template?: Array<ImplementationGuideTemplate>;
}

/**
 * Grouping used to present related resources in the IG
 */
export class ImplementationGuideGrouping {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Descriptive name for the package (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Human readable text describing the package (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
}

/**
 * Resource in the implementation guide
 */
export class ImplementationGuideResource {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Location of the resource (1..1) */
  reference: Reference;
  /** Versions this applies to (if different to IG) (0..*) */
  fhirVersion?: Array<ImplementationGuideResource.FhirVersionEnum>;
  /** Id and extensions of the primitive `fhirVersion`. */
  _fhirVersion?: Array<Element | null>;
  /** Human Name for the resource (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Reason why included in guide (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Is an example/What is this an example of? (0..1) */
  exampleBoolean?: boolean;
  /** Id and extensions of the primitive `exampleBoolean`. */
  _exampleBoolean?: Element;
  /** Is an example/What is this an example of? (0..1) */
  exampleCanonical?: string;
  /** Id and extensions of the primitive `exampleCanonical`. */
  _exampleCanonical?: Element;
  /** Grouping this is part of (0..1) */
  groupingId?: string;
  /** Id and extensions of the primitive `groupingId`. */
  _groupingId?: Element;
}

export namespace ImplementationGuideResource {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/FHIR-version */
  export type FhirVersionEnum =
    | '0.01'
    | '0.05'
    | '0.06'
    | '0.11'
    | '0.0.80'
    | '0.0.81'
    | '0.0.82'
    | '0.4.0'
    | '0.5.0'
    | '1.0.0'
    | '1.0.1'
    | '1.0.2'
    | '1.1.0'
    | '1.4.0'
    | '1.6.0'
    | '1.8.0'
    | '3.0.0'
    | '3.0.1'
    | '3.3.0'
    | '3.5.0'
    | '4.0.0'
    | '4.0.1';
  export const FhirVersionEnum = {
    _001: '0.01' as FhirVersionEnum,
    _005: '0.05' as FhirVersionEnum,
    _006: '0.06' as FhirVersionEnum,
    _011: '0.11' as FhirVersionEnum,
    _0080: '0.0.80' as FhirVersionEnum,
    _0081: '0.0.81' as FhirVersionEnum,
    _0082: '0.0.82' as FhirVersionEnum,
    _040: '0.4.0' as FhirVersionEnum,
    _050: '0.5.0' as FhirVersionEnum,
    _100: '1.0.0' as FhirVersionEnum,
    _101: '1.0.1' as FhirVersionEnum,
    _102: '1.0.2' as FhirVersionEnum,
    _110: '1.1.0' as FhirVersionEnum,
    _140: '1.4.0' as FhirVersionEnum,
    _160: '1.6.0' as FhirVersionEnum,
    _180: '1.8.0' as FhirVersionEnum,
    _300: '3.0.0' as FhirVersionEnum,
    _301: '3.0.1' as FhirVersionEnum,
    _330: '3.3.0' as FhirVersionEnum,
    _350: '3.5.0' as FhirVersionEnum,
    _400: '4.0.0' as FhirVersionEnum,
    _401: '4.0.1' as FhirVersionEnum,
  };
}

/**
 * Page/Section in the Guide
 */
export class ImplementationGuidePage {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Where to find that page (1..1) */
  nameUrl?: string;
  /** Id and extensions of the primitive `nameUrl`. */
  _nameUrl?: Element;
  /** Where to find that page (1..1) */
  nameReference?: Reference;
  /** Short title shown for navigational assistance (1..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** html | markdown | xml | generated (1..1) */
  generation?: ImplementationGuidePage.GenerationEnum;
  /** Id and extensions of the primitive `generation`. */
  _generation?: Element;
  /** Nested Pages / Sections (0..*) */
  page?: Array<ImplementationGuidePage>;
}

export namespace ImplementationGuidePage {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/guide-page-generation */
  export type GenerationEnum = 'html' | 'markdown' | 'xml' | 'generated';
  export const GenerationEnum = {
    Html: 'html' as GenerationEnum,
    Markdown: 'markdown' as GenerationEnum,
    Xml: 'xml' as GenerationEnum,
    Generated: 'generated' as GenerationEnum,
  };
}

/**
 * Defines how IG is built by tools
 */
export class ImplementationGuideParameter {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** apply | path-resource | path-pages | path-tx-cache | expansion-parameter | rule-broken-links | generate-xml | generate-json | generate-turtle | html-template (1..1) */
  code?: ImplementationGuideParameter.CodeEnum;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;
  /** Value for named type (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;
}

export namespace ImplementationGuideParameter {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/guide-parameter-code */
  export type CodeEnum =
    | 'apply'
    | 'path-resource'
    | 'path-pages'
    | 'path-tx-cache'
    | 'expansion-parameter'
    | 'rule-broken-links'
    | 'generate-xml'
    | 'generate-json'
    | 'generate-turtle'
    | 'html-template';
  export const CodeEnum = {
    Apply: 'apply' as CodeEnum,
    PathResource: 'path-resource' as CodeEnum,
    PathPages: 'path-pages' as CodeEnum,
    PathTxCache: 'path-tx-cache' as CodeEnum,
    ExpansionParameter: 'expansion-parameter' as CodeEnum,
    RuleBrokenLinks: 'rule-broken-links' as CodeEnum,
    GenerateXml: 'generate-xml' as CodeEnum,
    GenerateJson: 'generate-json' as CodeEnum,
    GenerateTurtle: 'generate-turtle' as CodeEnum,
    HtmlTemplate: 'html-template' as CodeEnum,
  };
}

/**
 * A template for building resources
 */
export class ImplementationGuideTemplate {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of template specified (1..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;
  /** The source location for the template (1..1) */
  source?: string;
  /** Id and extensions of the primitive `source`. */
  _source?: Element;
  /** The scope in which the template applies (0..1) */
  scope?: string;
  /** Id and extensions of the primitive `scope`. */
  _scope?: Element;
}

/**
 * Information about an assembled IG
 */
export class ImplementationGuideManifest {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Location of rendered implementation guide (0..1) */
  rendering?: string;
  /** Id and extensions of the primitive `rendering`. */
  _rendering?: Element;
  /** Resource in the implementation guide (1..*) */
  resource: Array<ImplementationGuideResource1>;
  /** HTML page within the parent IG (0..*) */
  page?: Array<ImplementationGuidePage1>;
  /** Image within the IG (0..*) */
  image?: Array<string>;
  /** Id and extensions of the primitive `image`. */
  _image?: Array<Element | null>;
  /** Additional linkable file in IG (0..*) */
  other?: Array<string>;
  /** Id and extensions of the primitive `other`. */
  _other?: Array<Element | null>;
}

/**
 * Resource in the implementation guide
 */
export class ImplementationGuideResource1 {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Location of the resource (1..1) */
  reference: Reference;
  /** Is an example/What is this an example of? (0..1) */
  exampleBoolean?: boolean;
  /** Id and extensions of the primitive `exampleBoolean`. */
  _exampleBoolean?: Element;
  /** Is an example/What is this an example of? (0..1) */
  exampleCanonical?: string;
  /** Id and extensions of the primitive `exampleCanonical`. */
  _exampleCanonical?: Element;
  /** Relative path for page in IG (0..1) */
  relativePath?: string;
  /** Id and extensions of the primitive `relativePath`. */
  _relativePath?: Element;
}

/**
 * HTML page within the parent IG
 */
export class ImplementationGuidePage1 {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** HTML page name (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Title of the page, for references (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** Anchor available on the page (0..*) */
  anchor?: Array<string>;
  /** Id and extensions of the primitive `anchor`. */
  _anchor?: Array<Element | null>;
}
