// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

/**
 * Converts a boolean into a number.
 *
 * @alias boolToNum
 * @param {boolean} boolean (`boolean`) The boolean value to convert.
 * @returns {1 | 0} (`1 | 0`) `1` if the provided value is `true` or `0` if it's `false`.
 * @example
 * import { booleanToNumber } from "commonlib-js";
 *
 * const enabled = true;
 *
 * console.log(booleanToNumber(enabled)); // 1
 *
 * @version 1.0.0
 */
export function booleanToNumber(boolean: boolean): 1 | 0 {
  if (boolean) {
    return 1;
  } else {
    return 0;
  }
}

export const boolToNum = booleanToNumber;
