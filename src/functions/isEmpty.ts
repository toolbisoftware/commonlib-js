// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import { extDataTypes } from "../constants.ts";
import { inputChecker } from "../private/index.ts";
import type { IsEmptyOptions } from "../types.ts";
import { getType } from "./getType.ts";

/**
 * Checks if a value is empty according to its type.
 *
 * @param {any} value The value to check if it's empty. · `any`
 * @param {IsEmptyOptions} [options] Options for the function. · {@link IsEmptyOptions}
 * @default
 * undefined
 * @param {IsEmptyOptions["typeOfValue"]} [options.typeOfValue] Extended data type ({@link ExtDataTypes}) of the value. · {@link IsEmptyOptions}.typeOfValue
 * @default
 * undefined
 * @param {IsEmptyOptions["throwError"]} [options.throwError] Whether to throw `Error` if the value is empty. · {@link IsEmptyOptions}.throwError
 * @default
 * false
 * @returns `true` if the value is empty, `false` otherwise. `null` if the type of the value is not supported.
 * @example
 * import { isEmpty } from "commonlib";
 *
 * const userName = "";
 *
 * console.log(isEmpty(userName)); // true
 * @version 1.0.0
 */
export function isEmpty(value: any, options?: IsEmptyOptions): boolean | null {
  if (options?.skipInputCheck !== true) {
    inputChecker([
      {
        value: options?.typeOfValue,
        name: "options.typeOfValue",
        type: [
          {
            name: "ExtDataTypes",
            values: extDataTypes
          },
          "undefined"
        ]
      },
      {
        value: options?.throwError,
        name: "options.throwError",
        type: ["boolean", "undefined"]
      }
    ]);
  }

  const getTypeOfValue = getType(value);
  switch (getTypeOfValue) {
    case "bigint":
    case "boolean":
    case "function":
    case "symbol": {
      return null;
    }
    case "number": {
      if (isNaN(value)) {
        return true;
      }
      break;
    }
    case "object": {
      if (!Object.keys(value).length) {
        return true;
      }
      break;
    }
    case "string":
    case "array": {
      if (!value.length) {
        return true;
      }
      break;
    }
    case "undefined":
    case "null": {
      return true;
    }
  }

  return false;
}
