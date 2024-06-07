export enum SORT_ORDER {
    ASCENDING,
    DESCENDING
}

export enum PATCH_DATATYPE {
    CODE = "valueCode",
    DATE = "valueDate",
    DATE_TIME = "valueDateTime",
    BOOLEAN = "valueBoolean",
    CODEABLE_CONCEPT = "valueCodeableConcept",
    CODING = "valueCoding",
    IDENTIFIER = "valueIdentifier",
    HUMAN_NAME = "valueHumanName",
    STRING = "valueString",
    ADDRESS = "valueAddress",
    REFERENCE = "valueReference"
}

export interface PatchAddValueParams {
    value: any;
    valueDataType: PATCH_DATATYPE;
}

export interface PatchAddBackboneElementParams extends PatchAddValueParams {
    backBoneElementProperty: string;
}