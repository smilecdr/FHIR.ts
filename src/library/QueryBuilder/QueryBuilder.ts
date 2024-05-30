import { SORT_ORDER } from "../constants";

export class QueryBuilder {

  readonly REV_INCLUDE_KEYWORD = "_revinclude";
  readonly INCLUDE_KEYWORD = "_include";
  readonly SORT_KEYWORD = "_sort";
  readonly WILDCARD_ASTERIK = "*";
  readonly EQUALS = "=";
  readonly COLON = ":";
  readonly QUERY_DELIMETER = "&";
  readonly COMMA = ",";
  private baseResource: String = "";
  private singularQueries: String[] = [];
  private sortQueries: String[] =  [];

  /**
   * @returns base resource for the query
   */
  getBaseResource(): String {
    return this.baseResource;
  }

  /**
   * @param resourceType Base ResourceType for the query 
   * sets base resource type for the query
   * i.e. which resource the query will performed for
   */
  setBaseResource(resourceType: String) {
    this.baseResource = resourceType;
    return this;
  }

  /**
   * @param searchParameter SearchParameter reference to targeted resource
   */
  include(searchParameter: String) {
    this.singularQueries.push(this.INCLUDE_KEYWORD + this.EQUALS + encodeURIComponent(this.baseResource + this.COLON + searchParameter));
    return this;
  }

  /**
   * @param resourceType Source ResourceType 
   * @param searchParameter SearchParameter reference from target resource to baseResource
   */
  revinclude(resourceType: String, searchParameter: String) {
    this.singularQueries.push(this.REV_INCLUDE_KEYWORD + this.EQUALS +  encodeURIComponent(resourceType + this.COLON + searchParameter));
    return this;
  }

  /**
   * _include all references in query
   */
  includeAll() {
    this.singularQueries.push(this.INCLUDE_KEYWORD + this.EQUALS + this.WILDCARD_ASTERIK);
    return this;
  }

  /**
   * _revinclude all references in query
   */
  revincludeAll() {
    this.singularQueries.push(this.REV_INCLUDE_KEYWORD + this.EQUALS + this.WILDCARD_ASTERIK);
    return this;
  }

  /**
   * @param searchParameter search parameter for the element to sort on
   * @param sortOrder ASCENDING or DESCENDING
   */
  sort(searchParameter: String, sortOrder: SORT_ORDER) {
    if(sortOrder === SORT_ORDER.ASCENDING) {
      this.sortQueries.push(searchParameter);
    } else {
      this.sortQueries.push("-" + searchParameter);
    }
    return this;
  }

  /**
   * Resets queries to it empty state
   */
  resetQuery() {
    this.sortQueries = [];
    this.singularQueries = [];
    this.baseResource = "";
    return this;
  }

  /**
   * @returns complete generated query with encoded parameter values
   */
  getCompleteUrl(): String {
    let completeUrl = this.baseResource + "?";
    if(this.singularQueries.length > 0) {
      completeUrl +=  this.singularQueries.join(this.QUERY_DELIMETER);
    }
    completeUrl += this.createSortQuery();
    return completeUrl; 
  }

  /**
   * @returns complete generated query with decoded parameter values
   */
  getCompleteUrlDecoded(): String {
    return decodeURIComponent(this.getCompleteUrl().toString()); 
  }
  
  private createSortQuery(): String {
    let sortQuery = "";
    const sortDelimeter = this.singularQueries.length > 0 ? this.QUERY_DELIMETER : "";
    if(this.sortQueries.length > 0) {
      sortQuery += sortDelimeter + this.SORT_KEYWORD + this.EQUALS + encodeURIComponent(this.sortQueries.join(this.COMMA));
    }
    return sortQuery;
  }
  
}