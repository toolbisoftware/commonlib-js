// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import type {
  CheckTypeMultiItem,
  CheckTypeMultiOptions,
  CheckTypeMultiReturn,
  CheckTypeOptions,
  ExtDataTypes
} from "../types.ts";
import { strToNull } from "./convert/emptyStringToNull.ts";
import { itemToArr } from "./convert/itemToArray.ts";
import { getType } from "./getType.ts";

interface Run {
  value: any;
  expectedType: ExtDataTypes | ExtDataTypes[];
  name?: string;
  typeOfValue?: ExtDataTypes;
  throwError?: boolean;
}

function run({
  value,
  expectedType,
  name,
  typeOfValue,
  throwError
}: Run): boolean {
  const expectedTypes = itemToArr(expectedType);
  const getName = strToNull(name || "");

  const getTypeOfValue = typeOfValue || getType(value);
  if (!expectedTypes.includes(getTypeOfValue)) {
    if (throwError) {
      throw new TypeError(
        `The value ${
          getName ? `'${getName}' ` : ""
        }(${getTypeOfValue}) must be of type '${expectedTypes.join(" | ")}'.`
      );
    }

    return false;
  }

  return true;
}

export function checkType(
  value: any,
  expectedType: ExtDataTypes | ExtDataTypes[],
  options?: CheckTypeOptions
): boolean {
  return run({
    value,
    expectedType,
    typeOfValue: options?.typeOfValue,
    throwError: options?.throwError
  });
}

export function checkTypeMulti(
  items: CheckTypeMultiItem[],
  options?: CheckTypeMultiOptions
): CheckTypeMultiReturn {
  const result: CheckTypeMultiReturn = {
    state: true,
    all: [],
    invalid: [],
    valid: []
  };

  for (const item of items) {
    result.all.push(item);

    const check = run({
      value: item.value,
      expectedType: item.expectedType,
      name: item.name,
      typeOfValue: item?.typeOfValue,
      throwError: options?.throwError
    });

    if (check) {
      result.valid.push(item);
    } else {
      result.state = false;
      result.invalid.push(item);

      if (options?.returnOnFirst) {
        return result;
      }
    }
  }

  return result;
}
