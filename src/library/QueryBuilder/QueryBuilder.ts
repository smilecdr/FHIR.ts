export class QueryBuilder {

  readonly REV_INCLUDE_KEYWORD = "_revinclude";
  readonly INCLUDE_KEYWORD = "_include";
  readonly WILDCARD_ASTERIK = "*";
  readonly EQUALS = "=";
  readonly COLON = ":";
  readonly QUERY_DELIMETER = "&";
  // rename to QueryBuilder
  private baseResource: String = "";
  private singularQueries: String[] = [];

  /**
   * @returns base resource for the query
   */
  getBaseResource(): String {
    return this.baseResource;
  }

  /**
   * @param resourceType Base ResourceType for the query 
   * sets base resource type for the query
   */
  setBaseResource(resourceType: String) {
    this.baseResource = resourceType;
    return this;
  }

  /**
   * @param reference SearchParameter reference to targetted resource
   */
  include(reference: String) {
    this.singularQueries.push(this.INCLUDE_KEYWORD + this.EQUALS + this.baseResource + this.COLON + reference);
    return this;
  }

  /**
   * @param resourceType Target ResourceType
   * @param reference SearchParameter refernce from target resource to baseResource
   */
  revinclude(resourceType: String, reference: String) {
    this.singularQueries.push(this.REV_INCLUDE_KEYWORD + this.EQUALS + resourceType + this.COLON + reference);
    return this;
  }

  /**
   * _include all references
   */
  includeAll() {
    this.singularQueries.push(this.INCLUDE_KEYWORD + this.EQUALS + this.WILDCARD_ASTERIK);
    return this;
  }

  /**
   * _revinclude all references
   */
  revincludeAll() {
    this.singularQueries.push(this.REV_INCLUDE_KEYWORD + this.EQUALS + this.WILDCARD_ASTERIK);
    return this;
  }

  getCompleteUrl(): String {
    return this.baseResource + "?" +  this.singularQueries.join(this.QUERY_DELIMETER);
  }
  
}