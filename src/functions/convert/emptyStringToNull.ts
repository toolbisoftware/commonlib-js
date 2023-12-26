// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import { inputCheckerType } from "../../private/index.ts";

/**
 * Converts a string into `null` if it's empty, returns the string otherwise.
 *
 * @alias strToNull
 * @param {string} string (`string`) The string to convert.
 * @returns {string | null} (`string | null`) `null` if the provided string is empty, the provided string otherwise.
 * @example
 * import { emptyStringToNull } from "commonlib-js";
 *
 * const userName = "Roberto";
 * console.log(emptyStringToNull(userName)); // "Roberto"
 *
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
