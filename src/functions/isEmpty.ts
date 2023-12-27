// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import type { IsEmptyOptions } from "../types.ts";
import { getType } from "./getType.ts";

/**
 * Checks if a value is empty according to its type.
 *
 * @param {any} value (`any`) The value to check.
 * @param {IsEmptyOptions} [options] ({@link IsEmptyOptions}) Additional options for the function.
 * @default
 * undefined
 * @param {IsEmptyOptions["typeOfValue"]} [options.typeOfValue] ({@link ExtDataTypes}) Extended data type of the value.
 * @default
 * undefined
 * @param {IsEmptyOptions["throwError"]} [options.throwError] (`boolean`) Whether or not to throw an error if the value is empty.
 * @default
 * false
 * @returns {boolean | null} (`boolean | null`) `true` if the value is empty, `false` otherwise. `null` if the type of the value is not supported.
 * @example
 * import { isEmpty } from "commonlib-js";
 *
 * const userName = "Robert";
 * console.log(isEmpty(userName)); // false
 *
 * const userNameEmpty = "";
 * console.log(isEmpty(userNameEmpty)); // true
 * @version 1.0.0
 */
export function isEmpty(value: any, options?: IsEmptyOptions): boolean | null {
  const getTypeOfValue = options?.typeOfValue || getType(value);
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

  if (options?.throwError) {
    throw new Error(`The value cannot be empty.`);
  }

  return false;
}
