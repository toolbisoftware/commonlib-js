// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import { isEmpty } from "./functions/isEmpty.ts";
import { stopwatch } from "./functions/stopwatch.ts";

/**
 * Settings for the instance.
 */
export interface Settings {
  /**
   * Whether or not to enable JavaScript mode.
   *
   * Enables runtime type checking.
   * @default
   * false
   */
  jsMode: boolean;
}

//
//

/**
 * JavaScript data types.
 */
export type DataTypes =
  | "bigint"
  | "boolean"
  | "function"
  | "number"
  | "object"
  | "string"
  | "symbol"
  | "undefined";

/**
 * Extended data types.
 *
 * Adds `array` and makes `null` different from `undefined`.
 */
export type ExtDataTypes = DataTypes | "null" | "array";

//
//

/**
 * Options for the {@link isEmpty} function.
 */
export interface IsEmptyOptions {
  /**
   * Extended data type ({@link ExtDataTypes}) of the value.
   *
   * Could improve the performance a tiny bit.
   * @default
   * undefined
   */
  typeOfValue?: ExtDataTypes;
  /**
   * Whether to throw `Error` if the value is empty.
   * @default
   * false
   */
  throwError?: boolean;
  /**
   * Whether to skip the input checker.
   *
   * WARNING! This option is only intended for internal use.
   * @default
   * false
   */
  skipInputCheck?: boolean;
}

//

/**
 * Returned object by the {@link stopwatch} function.
 */
export interface StopwatchReturn {
  // ! TODO
  getTime: (decimals?: number) => number;
}
