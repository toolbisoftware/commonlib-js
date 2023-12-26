// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import type { ExtDataTypes } from "../types.ts";

/**
 * Gets the type of a value.
 *
 * WARNING! The returned value is of type {@link ExtDataTypes}. This function does not return the same value as `typeof value` would.
 *
 * @param {any} value (`any`) The value to get the type of.
 * @returns {ExtDataTypes} ({@link ExtDataTypes}) The type of the provided value.
 * @example
 * import { getType } from "commonlib-js";
 *
 * const userName = "Robert";
 *
 * console.log(getType(userName)); // "string"
 *
 * @version 1.0.0
 */
export function getType(value: any): ExtDataTypes {
  if (Array.isArray(value)) return "array";

  const getTypeOfValue = typeof value;
  if (getTypeOfValue === "object") {
    if (value === null) {
      return "null";
    } else {
      return "object";
    }
  }

  return getTypeOfValue;
}
