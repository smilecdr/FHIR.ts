/**
 * CDS Hooks
 * The following is auto generated class definition.
 *
 * OpenAPI spec version: 3.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { CdsServiceAcceptedSuggestionJson } from './cdsServiceAcceptedSuggestionJson';
import { CdsServiceOverrideReasonJson } from './cdsServiceOverrideReasonJson';

export interface CdsServiceFeedbackJson { 
    card: string;
    outcome: CdsServiceFeedbackJson.OutcomeEnum;
    acceptedSuggestions?: Array<CdsServiceAcceptedSuggestionJson>;
    overrideReason?: CdsServiceOverrideReasonJson;
    outcomeTimestamp: string;
}
export namespace CdsServiceFeedbackJson {
    export type OutcomeEnum = 'accepted' | 'overridden';
    export const OutcomeEnum = {
        Accepted: 'accepted' as OutcomeEnum,
        Overridden: 'overridden' as OutcomeEnum
    };
}