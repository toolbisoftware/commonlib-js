// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import type { StopwatchReturn } from "../types.ts";

/**
 * Creates a stopwatch.
 *
 * Usually used to measure the time that a function takes to run.
 *
 * @param {number} [decimals] [`number`] Number of decimals to use for the returned time.
 * @returns {StopwatchReturn} ({@link StopwatchReturn}) A new stopwatch with the following methods:
 * - `getTime` -> `number`: Gets the time elapsed since the creation of the stopwatch.
 * @example
 * import { stopwatch } from "commonlib-js";
 *
 * const useStopwatch = stopwatch();
 *
 * ...
 * @version 1.0.0
 */
export function stopwatch(decimals?: number): StopwatchReturn {
  const startTime = performance.now();
  let decimals_: number | undefined = undefined;

  const useDecimals = (decimals?: number) => {
    if (decimals) {
      decimals_ = decimals;
      if (decimals_ < 0 || decimals_ > 20) {
        throw new Error(
          "Parameter 'decimals' must be a number between 0 and 20."
        );
      }
    }
  };

  useDecimals(decimals);

  function getTime(decimals?: number): number {
    const stopTime = performance.now();
    useDecimals(decimals);

    return parseFloat((stopTime - startTime).toFixed(decimals_ || 2));
  }

  return {
    getTime
  };
}
