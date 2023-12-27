// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import ms from "ms";

/**
 * Converts time into milliseconds.
 *
 * @param {string | number} value (`string | number`) A string containing a number and a valid time unit ([ms](https://www.npmjs.com/package/ms)).
 * @returns {number} (`number`) The provided time in milliseconds.
 * @example
 * import { timeToMs } from "commonlib-js";
 *
 * const time = "2d";
 * console.log(timeToMs(time)); // 172800000
 *
 * const timeInMs = 172800000;
 * console.log(timeToMs(timeInMs)); // 172800000
 *
 * @version 1.0.0
 */
export function timeToMs(value: string | number): number {
  if (typeof value === "string") {
    return ms(value);
  } else {
    return value;
  }
}
