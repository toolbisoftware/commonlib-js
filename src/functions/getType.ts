// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import type { ExtDataTypes } from "../types.ts";

/**
 * Gets the type of a value.
 *
 * WARNING! The returned value is of type {@link ExtDataTypes}. This function is not the same as using the following:
 * ```ts
 * typeof value
 * ```
 *
 * @param value The value to get the type from.
 * @returns The type of the provided value.
 * @example
 * import { getType } from "commonlib";
 *
 * const user = {
 *   name: "Robert",
 *   age: 623
 * };
 * const colors = ["red", "blue"];
 *
 * console.log(getType(user)); // "object"
 * console.log(getType(colors)); // "array"
 * @version 1.0.0
 */
export function getType(value: any): ExtDataTypes {
  if (Array.isArray(value)) return "array";

  const getTypeOfValue = typeof value;
  if (getTypeOfValue === "undefined") {
    if (value === null) {
      return "null";
    } else {
      return "undefined";
    }
  }

  return getTypeOfValue;
}
