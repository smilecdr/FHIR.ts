/**
 * The interfaces imported here are based on what constraints the value field in Parameters resources 
 * https://www.hl7.org/fhir/datatypes.html#open
 */

import { Parameters } from './FHIR-R4/parameters';
import { ParametersParameter } from './FHIR-R4/parametersParameter';

import { Address } from './FHIR-R4/address';
import { Age } from './FHIR-R4/age';
import { Annotation } from './FHIR-R4/annotation';
import { Attachment } from './FHIR-R4/attachment';
import { CodeableConcept } from './FHIR-R4/codeableConcept';
import { Coding } from './FHIR-R4/coding';
import { ContactDetail } from './FHIR-R4/contactDetail';
import { ContactPoint } from './FHIR-R4/contactPoint';
import { Contributor } from './FHIR-R4/contributor';
import { Count } from './FHIR-R4/count';
import { DataRequirement } from './FHIR-R4/dataRequirement';
import { Distance } from './FHIR-R4/distance';
import { Dosage } from './FHIR-R4/dosage';
import { Duration } from './FHIR-R4/duration';
import { Expression } from './FHIR-R4/expression';
import { Extension } from './FHIR-R4/extension';
import { HumanName } from './FHIR-R4/humanName';
import { Identifier } from './FHIR-R4/identifier';
import { Money } from './FHIR-R4/money';
import { ParameterDefinition } from './FHIR-R4/parameterDefinition';
import { Period } from './FHIR-R4/period';
import { Quantity } from './FHIR-R4/quantity';
import { Range } from './FHIR-R4/range';
import { Ratio } from './FHIR-R4/ratio';
import { Reference } from './FHIR-R4/reference';
import { RelatedArtifact } from './FHIR-R4/relatedArtifact';
import { ResourceList } from './FHIR-R4/resourceList';
import { SampledData } from './FHIR-R4/sampledData';
import { Signature } from './FHIR-R4/signature';
import { Timing } from './FHIR-R4/timing';
import { TriggerDefinition } from './FHIR-R4/triggerDefinition';
import { UsageContext } from './FHIR-R4/usageContext';

export class PatchPayload implements Parameters {

  resourceType: string;
  parameter: ParametersParameter[];

  constructor() {
    this.resourceType = 'Parameters';
    this.parameter = [];
  }

  addParameter(object: Object) {
    this.parameter.push(object);
    return this;
  }

  addParameters(array: Array<Object>) {
    this.parameter = array;
    return this;
  }

  getParameters() {
    return this.parameter;
  }
}

export class OperationObject implements ParametersParameter {
  name: string;
  part: Object[];

  constructor() {
    this.name = 'operation';
  }

  addOperation(type: string) {
    const operation = {
      name: 'type',
      valueCode: type
    };
    if (!this.part) {
      this.part = [];
    }
    this.part.push(operation);
    return this;
  }

  addIndex(integer: number) {
    const pathIndex = {
      name: 'index',
      valueInteger: integer
    };
    if (!this.part) {
      this.part = [];
    }
    this.part.push(pathIndex);
    return this;
  }

  addValueString(valueString: string) {
    const valueStringObject = {
      name: 'value',
      valueString: valueString
    };
    if (!this.part) {
      this.part = [];
    }
    this.part.push(valueStringObject);
    return this;
  }

  addPath(valueString: string) {
    const pathObject = {
      name: 'path',
      valueString: valueString
    };
    if (!this.part) {
      this.part = [];
    }
    this.part.push(pathObject);
    return this;
  }

  addAddress(address: Address) {
    const valueAddressObject = {
      name: 'value',
      valueAddress: address
    };
    if (!this.part) {
      this.part = [];
    }
    this.part.push(valueAddressObject);
    return this;
  }

  addAge(age: Age) {
    const valueAgeObject = {
      name: 'value',
      valueAge: age
    };
    if (!this.part) {
      this.part = [];
    }
    this.part.push(valueAgeObject);
    return this;
  }

  addAnnotation(annotation: Annotation) {
    const valueAnnotationObject = {
      name: 'value',
      valueAnnotation: annotation
    };
    if (!this.part) {
      this.part = [];
    }
    this.part.push(valueAnnotationObject);
    return this;
  }

  addAttachment(attachment: Attachment) {
    const valueAttachmentObject = {
      name: 'value',
      valueAttachment: attachment
    };
    if (!this.part) {
      this.part = [];
    }
    this.part.push(valueAttachmentObject);
    return this;
  }

  addCodeableConcept(codeableConcept: CodeableConcept) {
    const valueCodeableConceptObject = {
      name: 'value',
      valueCodeableConcept: codeableConcept
    };
    if (!this.part) {
      this.part = [];
    }
    this.part.push(valueCodeableConceptObject);
    return this;
  }

  addCoding(coding: Coding) {
    const valueCodingObject = {
      name: 'value',
      valueCoding: coding
    };
    if (!this.part) {
      this.part = [];
    }
    this.part.push(valueCodingObject);
    return this;
  }

  addContactDetail(contactDetail: ContactDetail) {
    const valueContactDetailObject = {
      name: 'value',
      valueContactDetail: contactDetail
    };
    if (!this.part) {
      this.part = [];
    }
    this.part.push(valueContactDetailObject);
    return this;
  }

  addContactPoint(contactPoint: ContactPoint) {
    const valueContactPointObject = {
      name: 'value',
      valueContactPoint: contactPoint
    };
    if (!this.part) {
      this.part = [];
    }
    this.part.push(valueContactPointObject);
    return this;
  }

  addContributor(contributor: Contributor) {
    const valueContributorObject = {
      name: 'value',
      valueContributor: contributor
    };
    if (!this.part) {
      this.part = [];
    }
    this.part.push(valueContributorObject);
    return this;
  }

  addDataRequirement(dataRequirement: DataRequirement) {
    const valueDataRequirementObject = {
      name: 'value',
      valueDataRequirement: dataRequirement
    };
    if (!this.part) {
      this.part = [];
    }
    this.part.push(valueDataRequirementObject);
    return this;
  }

  addExpression(expression: Expression) {
    const valueExpressionObject = {
      name: 'value',
      valueExpression: expression
    };
    if (!this.part) {
      this.part = [];
    }
    this.part.push(valueExpressionObject);
    return this;
  }

  addPeriod(period: Period) {
    const valuePeriodObject = {
      name: 'value',
      valuePeriod: period
    };
    if (!this.part) {
      this.part = [];
    }
    this.part.push(valuePeriodObject);
    return this;
  }

  addValueDateTime(datetime: Date) {
    const valueDateTimeObject = {
      name: 'value',
      valueDateTime: datetime
    };
    if (!this.part) {
      this.part = [];
    }
    this.part.push(valueDateTimeObject);
    return this;
  }

  addPreviousValue(value: string) {
    const previousValue = {
      name: 'previousValue',
      valueCode: value
    };
    if (!this.part) {
      this.part = [];
    }
    this.part.push(previousValue);
    return this;
  }

  addValueGenericCode(value: string) {
    const valueObject = {
      name: 'value',
      valueCode: value
    };
    if (!this.part) {
      this.part = [];
    }
    this.part.push(valueObject);
    return this;
  }

  addValueCoding(coding: Coding) {
    const codingObject = {
      name: 'value',
      valueCoding: coding
    };
    if (!this.part) {
      this.part = [];
    }
    this.part.push(codingObject);
    return this;
  }
}

