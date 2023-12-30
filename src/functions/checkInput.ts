// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import type {
  CheckInputMultiItem,
  CheckInputMultiOptions,
  CheckInputMultiReturn,
  CheckInputOptions,
  ExtDataTypes
} from "../types.ts";
import { strToNull } from "./convert/emptyStringToNull.ts";
import { itemToArr } from "./convert/itemToArray.ts";
import { getType } from "./getType.ts";
import { isEmpty } from "./isEmpty.ts";

interface Run {
  value: any;
  expectedType: ExtDataTypes | ExtDataTypes[];
  disallowEmpty?: boolean;
  name?: string;
  typeOfValue?: ExtDataTypes;
  throwError?: boolean;
}

function run({
  value,
  expectedType,
  disallowEmpty,
  name,
  typeOfValue,
  throwError
}: Run): "type" | "empty" | null {
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

    return "type";
  }

  if (disallowEmpty) {
    if (
      isEmpty(value, {
        typeOfValue: getTypeOfValue,
        throwError
      })
    ) {
      return "empty";
    }
  }

  return null;
}

export function checkInput(
  value: any,
  expectedType: ExtDataTypes | ExtDataTypes[],
  options?: CheckInputOptions
): "type" | "empty" | null {
  return run({
    value,
    expectedType,
    disallowEmpty: options?.disallowEmpty,
    typeOfValue: options?.typeOfValue,
    throwError: options?.throwError
  });
}

export function checkInputMulti(
  items: CheckInputMultiItem[],
  options?: CheckInputMultiOptions
): CheckInputMultiReturn {
  const result: CheckInputMultiReturn = {
    state: true,
    all: [],
    invalid: {
      type: [],
      empty: []
    },
    valid: []
  };

  for (const item of items) {
    result.all.push(item);

    const check = run({
      value: item.value,
      expectedType: item.expectedType,
      disallowEmpty: item.disallowEmpty,
      name: item.name,
      typeOfValue: item.typeOfValue,
      throwError: options?.throwError
    });

    if (!check) {
      result.valid.push(item);
    } else {
      result.state = false;

      switch (check) {
        case "type": {
          result.invalid.type.push(item);
          break;
        }
        case "empty": {
          result.invalid.empty.push(item);
          break;
        }
      }

      if (options?.returnOnFirst) {
        return result;
      }
    }
  }

  return result;
}
