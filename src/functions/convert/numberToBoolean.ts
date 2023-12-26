// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import { inputCheckerType } from "../../private/index.ts";

/**
 * Converts a number into a boolean.
 *
 * @alias numToBool
 * @param {number} number (`number`) The number to convert.
 * @returns {boolean} (`boolean`) `true` if the provided value is `1` or `false` if it's `0`.
 * @throws `Error` if the provided value is neither `1` nor `0`.
 * @example
 * import { numberToBoolean } from "commonlib-js";
 *
 * const enabled = 1;
 *
 * console.log(numberToBoolean(enabled)); // true
 * @version 1.0.0
 */
export function numberToBoolean(number: number): boolean {
  inputCheckerType([
    {
      value: number,
      name: "number",
      type: ["number"]
    }
  ]);

  switch (number) {
    case 1: {
      return true;
    }
    case 0: {
      return false;
    }
    default: {
      throw new Error(
        `Parameter 'number' must be the number '1' for 'true' or '0' for 'false'.`
      );
    }
  }
}

export const numToBool = numberToBoolean;
