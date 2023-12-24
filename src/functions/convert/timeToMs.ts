// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import ms from "ms";
import { inputCheckerType } from "../../private/index.ts";

/**
 * Converts time formats into milliseconds.
 * @param {string | number} value A string with a number and a valid time unit. · `string | number`
 * @returns {number} The provided time in milliseconds. · `number`
 * @example
 * import { timeToMs } from "commonlib-js";

 * const timespan = "2d";
 * console.log(timeToMs(timespan)); // 172800000

 * const timespanInMilliseconds = 172800000;
 * console.log(timeToMs(timespanInMilliseconds)); // 172800000
 * @version 1.0.0
 */
export function timeToMs(value: string | number): number {
  inputCheckerType([
    {
      value,
      name: "value",
      type: ["string", "number"]
    }
  ]);

  if (typeof value === "string") {
    return ms(value);
  } else {
    return value;
  }
}
