// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import { inputCheckerType } from "../private/index.ts";

/**
 * Converts a string into `null` if it's empty.
 *
 * @alias strToNull
 * @param string The string to convert. · `string`
 * @returns {string | null} The provided string if it's not empty, `null` otherwise. · `string | null`
 * @example
 * import { emptyStringToNull } from "commonlib-js";

 * const userName = "Hello";
 * console.log(emptyStringToNull(userName)); // "Hello"

 * const emptyUserName = "";
 * console.log(emptyStringToNull(emptyUserName)); // null
 * @version 1.0.0
 */
export function emptyStringToNull(string: string): string | null {
  inputCheckerType([
    {
      value: string,
      name: "string",
      type: ["string"]
    }
  ]);

  if (string.length) {
    return string;
  } else {
    return null;
  }
}
export const strToNull = emptyStringToNull;
