/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { Annotation } from './annotation';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { ContactDetail } from './contactDetail';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';
import { RelatedArtifact } from './relatedArtifact';

/**
 * Base StructureDefinition for ResearchStudy Resource
 */
export class ResearchStudy extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'title',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'title', typeCode: 'string' }],
    },
    {
      elementName: 'protocol',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'protocol', typeCode: 'Reference', targetResourceTypes: ['PlanDefinition'] },
      ],
    },
    {
      elementName: 'partOf',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'partOf', typeCode: 'Reference', targetResourceTypes: ['ResearchStudy'] }],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.ResearchStudyStatus },
      ],
    },
    {
      elementName: 'category',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'focus',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'focus', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'contact',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'contact', typeCode: 'ContactDetail' }],
    },
    {
      elementName: 'relatedArtifact',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'relatedArtifact', typeCode: 'RelatedArtifact' }],
    },
    {
      elementName: 'keyword',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'keyword', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'jurisdiction',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'jurisdiction', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'enrollment',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'enrollment', typeCode: 'Reference', targetResourceTypes: ['Group'] }],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
    {
      elementName: 'sponsor',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sponsor', typeCode: 'Reference', targetResourceTypes: ['Organization'] }],
    },
    {
      elementName: 'principalInvestigator',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'principalInvestigator',
          typeCode: 'Reference',
          targetResourceTypes: ['Practitioner'],
        },
      ],
    },
    {
      elementName: 'site',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'site', typeCode: 'Reference', targetResourceTypes: ['Location'] }],
    },
    {
      elementName: 'reasonStopped',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reasonStopped', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
    {
      elementName: 'arm',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'arm', typeCode: 'ResearchStudyArm' }],
    },
  ];

  readonly resourceType = 'ResearchStudy';

  /** Business Identifier for study (0..*) */
  identifier?: Identifier[];

  /** Name for this study (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

  /** Steps followed in executing study (0..*) */
  protocol?: Reference[];

  /** Part of larger study (0..*) */
  partOf?: Reference[];

  /** draft | in-progress | suspended | stopped | completed | entered-in-error (1..1) */
  status?: valueSetCodes.ResearchStudyStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Classifications for the study (0..*) */
  category?: CodeableConcept[];

  /** Drugs, devices, conditions, etc. under study (0..*) */
  focus?: CodeableConcept[];

  /** Contact details for the study (0..*) */
  contact?: ContactDetail[];

  /** References and dependencies (0..*) */
  relatedArtifact?: RelatedArtifact[];

  /** Used to search for the study (0..*) */
  keyword?: CodeableConcept[];

  /** Geographic region(s) for study (0..*) */
  jurisdiction?: CodeableConcept[];

  /** What this is study doing (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Inclusion & exclusion criteria (0..*) */
  enrollment?: Reference[];

  /** When the study began and ended (0..1) */
  period?: Period;

  /** Organization responsible for the study (0..1) */
  sponsor?: Reference;

  /** The individual responsible for the study (0..1) */
  principalInvestigator?: Reference;

  /** Location involved in study execution (0..*) */
  site?: Reference[];

  /** Reason for terminating study early (0..1) */
  reasonStopped?: CodeableConcept;

  /** Comments made about the event (0..*) */
  note?: Annotation[];

  /** Defined path through the study for a subject (0..*) */
  arm?: ResearchStudyArm[];

  override fhirType(): string {
    return 'ResearchStudy';
  }

  /** FHIR JSON for this ResearchStudy, typed as the plain `ResearchStudy` data type. */
  override toJSON(): plainTypes.ResearchStudy {
    return this.serialize() as plainTypes.ResearchStudy;
  }

  /** Business Identifier for study (0..*) Never undefined; an empty list is created when absent. */
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

  /** Name for this study (0..1) */
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

  /** Steps followed in executing study (0..*) Never undefined; an empty list is created when absent. */
  getProtocol(): Reference[] {
    if (this.protocol === undefined) {
      this.protocol = [];
    }
    return this.protocol;
  }

  setProtocol(protocol: Reference[] | undefined): this {
    return this.setFieldValue('protocol', protocol);
  }

  hasProtocol(): boolean {
    return this.hasFieldValue('protocol');
  }

  /** Appends a new, empty Reference to `protocol` and returns it so it can be filled in. */
  addProtocol(): Reference;
  /** Appends the given Reference to `protocol` and returns this object for chaining. */
  addProtocol(reference: Reference): this;
  addProtocol(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('protocol', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('protocol', createdReference);
    return createdReference;
  }

  /** The first Reference of `protocol`. One is added when the list is empty. */
  getProtocolFirstRep(): Reference {
    const firstReference = this.getProtocol()[0];
    return firstReference === undefined ? this.addProtocol() : firstReference;
  }

  /** Part of larger study (0..*) Never undefined; an empty list is created when absent. */
  getPartOf(): Reference[] {
    if (this.partOf === undefined) {
      this.partOf = [];
    }
    return this.partOf;
  }

  setPartOf(partOf: Reference[] | undefined): this {
    return this.setFieldValue('partOf', partOf);
  }

  hasPartOf(): boolean {
    return this.hasFieldValue('partOf');
  }

  /** Appends a new, empty Reference to `partOf` and returns it so it can be filled in. */
  addPartOf(): Reference;
  /** Appends the given Reference to `partOf` and returns this object for chaining. */
  addPartOf(reference: Reference): this;
  addPartOf(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('partOf', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('partOf', createdReference);
    return createdReference;
  }

  /** The first Reference of `partOf`. One is added when the list is empty. */
  getPartOfFirstRep(): Reference {
    const firstReference = this.getPartOf()[0];
    return firstReference === undefined ? this.addPartOf() : firstReference;
  }

  /** draft | in-progress | suspended | stopped | completed | entered-in-error (1..1) */
  getStatus(): valueSetCodes.ResearchStudyStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.ResearchStudyStatus | undefined): this {
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

  /** Classifications for the study (0..*) Never undefined; an empty list is created when absent. */
  getCategory(): CodeableConcept[] {
    if (this.category === undefined) {
      this.category = [];
    }
    return this.category;
  }

  setCategory(category: CodeableConcept[] | undefined): this {
    return this.setFieldValue('category', category);
  }

  hasCategory(): boolean {
    return this.hasFieldValue('category');
  }

  /** Appends a new, empty CodeableConcept to `category` and returns it so it can be filled in. */
  addCategory(): CodeableConcept;
  /** Appends the given CodeableConcept to `category` and returns this object for chaining. */
  addCategory(codeableConcept: CodeableConcept): this;
  addCategory(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('category', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('category', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `category`. One is added when the list is empty. */
  getCategoryFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getCategory()[0];
    return firstCodeableConcept === undefined ? this.addCategory() : firstCodeableConcept;
  }

  /** Drugs, devices, conditions, etc. under study (0..*) Never undefined; an empty list is created when absent. */
  getFocus(): CodeableConcept[] {
    if (this.focus === undefined) {
      this.focus = [];
    }
    return this.focus;
  }

  setFocus(focus: CodeableConcept[] | undefined): this {
    return this.setFieldValue('focus', focus);
  }

  hasFocus(): boolean {
    return this.hasFieldValue('focus');
  }

  /** Appends a new, empty CodeableConcept to `focus` and returns it so it can be filled in. */
  addFocus(): CodeableConcept;
  /** Appends the given CodeableConcept to `focus` and returns this object for chaining. */
  addFocus(codeableConcept: CodeableConcept): this;
  addFocus(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('focus', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('focus', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `focus`. One is added when the list is empty. */
  getFocusFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getFocus()[0];
    return firstCodeableConcept === undefined ? this.addFocus() : firstCodeableConcept;
  }

  /** Contact details for the study (0..*) Never undefined; an empty list is created when absent. */
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

  /** References and dependencies (0..*) Never undefined; an empty list is created when absent. */
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

  /** Used to search for the study (0..*) Never undefined; an empty list is created when absent. */
  getKeyword(): CodeableConcept[] {
    if (this.keyword === undefined) {
      this.keyword = [];
    }
    return this.keyword;
  }

  setKeyword(keyword: CodeableConcept[] | undefined): this {
    return this.setFieldValue('keyword', keyword);
  }

  hasKeyword(): boolean {
    return this.hasFieldValue('keyword');
  }

  /** Appends a new, empty CodeableConcept to `keyword` and returns it so it can be filled in. */
  addKeyword(): CodeableConcept;
  /** Appends the given CodeableConcept to `keyword` and returns this object for chaining. */
  addKeyword(codeableConcept: CodeableConcept): this;
  addKeyword(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('keyword', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('keyword', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `keyword`. One is added when the list is empty. */
  getKeywordFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getKeyword()[0];
    return firstCodeableConcept === undefined ? this.addKeyword() : firstCodeableConcept;
  }

  /** Geographic region(s) for study (0..*) Never undefined; an empty list is created when absent. */
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

  /** What this is study doing (0..1) */
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

  /** Inclusion & exclusion criteria (0..*) Never undefined; an empty list is created when absent. */
  getEnrollment(): Reference[] {
    if (this.enrollment === undefined) {
      this.enrollment = [];
    }
    return this.enrollment;
  }

  setEnrollment(enrollment: Reference[] | undefined): this {
    return this.setFieldValue('enrollment', enrollment);
  }

  hasEnrollment(): boolean {
    return this.hasFieldValue('enrollment');
  }

  /** Appends a new, empty Reference to `enrollment` and returns it so it can be filled in. */
  addEnrollment(): Reference;
  /** Appends the given Reference to `enrollment` and returns this object for chaining. */
  addEnrollment(reference: Reference): this;
  addEnrollment(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('enrollment', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('enrollment', createdReference);
    return createdReference;
  }

  /** The first Reference of `enrollment`. One is added when the list is empty. */
  getEnrollmentFirstRep(): Reference {
    const firstReference = this.getEnrollment()[0];
    return firstReference === undefined ? this.addEnrollment() : firstReference;
  }

  /** When the study began and ended (0..1) Created when absent. */
  getPeriod(): Period {
    if (this.period === undefined) {
      this.period = new Period();
    }
    return this.period;
  }

  setPeriod(period: Period | undefined): this {
    return this.setFieldValue('period', period);
  }

  hasPeriod(): boolean {
    return this.hasFieldValue('period');
  }

  /** Organization responsible for the study (0..1) Created when absent. */
  getSponsor(): Reference {
    if (this.sponsor === undefined) {
      this.sponsor = new Reference();
    }
    return this.sponsor;
  }

  setSponsor(sponsor: Reference | undefined): this {
    return this.setFieldValue('sponsor', sponsor);
  }

  hasSponsor(): boolean {
    return this.hasFieldValue('sponsor');
  }

  /** The individual responsible for the study (0..1) Created when absent. */
  getPrincipalInvestigator(): Reference {
    if (this.principalInvestigator === undefined) {
      this.principalInvestigator = new Reference();
    }
    return this.principalInvestigator;
  }

  setPrincipalInvestigator(principalInvestigator: Reference | undefined): this {
    return this.setFieldValue('principalInvestigator', principalInvestigator);
  }

  hasPrincipalInvestigator(): boolean {
    return this.hasFieldValue('principalInvestigator');
  }

  /** Location involved in study execution (0..*) Never undefined; an empty list is created when absent. */
  getSite(): Reference[] {
    if (this.site === undefined) {
      this.site = [];
    }
    return this.site;
  }

  setSite(site: Reference[] | undefined): this {
    return this.setFieldValue('site', site);
  }

  hasSite(): boolean {
    return this.hasFieldValue('site');
  }

  /** Appends a new, empty Reference to `site` and returns it so it can be filled in. */
  addSite(): Reference;
  /** Appends the given Reference to `site` and returns this object for chaining. */
  addSite(reference: Reference): this;
  addSite(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('site', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('site', createdReference);
    return createdReference;
  }

  /** The first Reference of `site`. One is added when the list is empty. */
  getSiteFirstRep(): Reference {
    const firstReference = this.getSite()[0];
    return firstReference === undefined ? this.addSite() : firstReference;
  }

  /** Reason for terminating study early (0..1) Created when absent. */
  getReasonStopped(): CodeableConcept {
    if (this.reasonStopped === undefined) {
      this.reasonStopped = new CodeableConcept();
    }
    return this.reasonStopped;
  }

  setReasonStopped(reasonStopped: CodeableConcept | undefined): this {
    return this.setFieldValue('reasonStopped', reasonStopped);
  }

  hasReasonStopped(): boolean {
    return this.hasFieldValue('reasonStopped');
  }

  /** Comments made about the event (0..*) Never undefined; an empty list is created when absent. */
  getNote(): Annotation[] {
    if (this.note === undefined) {
      this.note = [];
    }
    return this.note;
  }

  setNote(note: Annotation[] | undefined): this {
    return this.setFieldValue('note', note);
  }

  hasNote(): boolean {
    return this.hasFieldValue('note');
  }

  /** Appends a new, empty Annotation to `note` and returns it so it can be filled in. */
  addNote(): Annotation;
  /** Appends the given Annotation to `note` and returns this object for chaining. */
  addNote(annotation: Annotation): this;
  addNote(annotation?: Annotation): Annotation | this {
    if (annotation !== undefined) {
      return this.addFieldValue('note', annotation);
    }
    const createdAnnotation = new Annotation();
    this.addFieldValue('note', createdAnnotation);
    return createdAnnotation;
  }

  /** The first Annotation of `note`. One is added when the list is empty. */
  getNoteFirstRep(): Annotation {
    const firstAnnotation = this.getNote()[0];
    return firstAnnotation === undefined ? this.addNote() : firstAnnotation;
  }

  /** Defined path through the study for a subject (0..*) Never undefined; an empty list is created when absent. */
  getArm(): ResearchStudyArm[] {
    if (this.arm === undefined) {
      this.arm = [];
    }
    return this.arm;
  }

  setArm(arm: ResearchStudyArm[] | undefined): this {
    return this.setFieldValue('arm', arm);
  }

  hasArm(): boolean {
    return this.hasFieldValue('arm');
  }

  /** Appends a new, empty ResearchStudyArm to `arm` and returns it so it can be filled in. */
  addArm(): ResearchStudyArm;
  /** Appends the given ResearchStudyArm to `arm` and returns this object for chaining. */
  addArm(researchStudyArm: ResearchStudyArm): this;
  addArm(researchStudyArm?: ResearchStudyArm): ResearchStudyArm | this {
    if (researchStudyArm !== undefined) {
      return this.addFieldValue('arm', researchStudyArm);
    }
    const createdResearchStudyArm = new ResearchStudyArm();
    this.addFieldValue('arm', createdResearchStudyArm);
    return createdResearchStudyArm;
  }

  /** The first ResearchStudyArm of `arm`. One is added when the list is empty. */
  getArmFirstRep(): ResearchStudyArm {
    const firstResearchStudyArm = this.getArm()[0];
    return firstResearchStudyArm === undefined ? this.addArm() : firstResearchStudyArm;
  }
}

modelTypeRegistry.register('ResearchStudy', ResearchStudy, true);

/** True when the value is a ResearchStudy model instance. */
export function isResearchStudy(candidate: unknown): candidate is ResearchStudy {
  return candidate instanceof ResearchStudy;
}

/**
 * Defined path through the study for a subject
 */
export class ResearchStudyArm extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'name',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
  ];

  /** Label for study arm (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Categorization of study arm (0..1) */
  code?: CodeableConcept;

  /** Short explanation of study path (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  override fhirType(): string {
    return 'ResearchStudy.arm';
  }

  /** FHIR JSON for this ResearchStudyArm, typed as the plain `ResearchStudyArm` data type. */
  override toJSON(): plainTypes.ResearchStudyArm {
    return this.serialize() as plainTypes.ResearchStudyArm;
  }

  /** Label for study arm (1..1) */
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

  /** Categorization of study arm (0..1) Created when absent. */
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

  /** Short explanation of study path (0..1) */
  getDescription(): string | undefined {
    return this.description;
  }

  /** Sets `description`. Throws a FhirModelError when the value is not a valid FHIR string. */
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
}

modelTypeRegistry.register('ResearchStudyArm', ResearchStudyArm, false);
