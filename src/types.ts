// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import { checkInput, checkInputMulti } from "./functions/checkInput.ts";
import { checkType, checkTypeMulti } from "./functions/checkType.ts";
import { setSettings } from "./functions/setSettings.ts";

export interface Settings {
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
 * Adds `null` and `array`.
 */
export type ExtDataTypes = DataTypes | "null" | "array";

//
//

/**
 * Additional options for the {@link checkInput} function.
 */
export interface CheckInputOptions {
  /**
   * Whether or not to disallow empty values for the input.
   * @default
   * false
   */
  disallowEmpty?: boolean;
  /**
   * Extended data type of the value of the input.
   *
   * Could improve performance a tiny bit.
   * @default
   * undefined
   */
  typeOfValue?: ExtDataTypes;
  /**
   * Whether or not to throw an error if the input is not valid.
   * @default
   * false
   */
  throwError?: boolean;
}

/**
 * An input item for the {@link checkInputMulti} function.
 */
export interface CheckInputMultiItem {
  /**
   * The value to check.
   */
  value: any;
  /**
   * Name of the input.
   */
  name: string;
  /**
   * Expected extended data type of the input.
   */
  expectedType: ExtDataTypes | ExtDataTypes[];
  /**
   * Whether or not to disallow empty values for the input.
   * @default
   * false
   */
  disallowEmpty?: boolean;
  /**
   * Extended data type of the value of the input.
   *
   * Could improve performance a tiny bit.
   * @default
   * undefined
   */
  typeOfValue?: ExtDataTypes;
}

/**
 * Additional options for the {@link checkInputMulti} function.
 */
export interface CheckInputMultiOptions {
  /**
   * Whether or not to return at the first invalid input.
   * @default
   * false
   */
  returnOnFirst?: boolean;
  /**
   * Whether or not to throw an error if one of the inputs is not valid.
   * @default
   * false
   */
  throwError?: boolean;
}

/**
 * Returned object by the {@link checkInputMulti} function.
 */
export interface CheckInputMultiReturn {
  /**
   * Whether or not all the inputs are valid.
   */
  state: boolean;
  /**
   * All the provided inputs.
   */
  all: CheckInputMultiItem[];
  /**
   * All the invalid inputs.
   */
  invalid: {
    type: CheckInputMultiItem[];
    empty: CheckInputMultiItem[];
  };
  /**
   * All the valid inputs.
   */
  valid: CheckInputMultiItem[];
}

//

/**
 * Additional options for the {@link checkType} function.
 */
export interface CheckTypeOptions {
  /**
   * Extended data type of the value.
   *
   * Could improve performance a tiny bit.
   * @default
   * undefined
   */
  typeOfValue?: ExtDataTypes;
  /**
   * Whether or not to throw an error if the type of the value doesn't match its expected type.
   * @default
   * false
   */
  throwError?: boolean;
}

/**
 * An input item for the {@link checkTypeMulti} function.
 */
export interface CheckTypeMultiItem {
  /**
   * The value to check.
   */
  value: any;
  /**
   * Name of the item.
   */
  name: string;
  /**
   * Expected extended data type of the item.
   */
  expectedType: ExtDataTypes | ExtDataTypes[];
  /**
   * Extended data type of the value of the item.
   *
   * Could improve performance a tiny bit.
   * @default
   * undefined
   */
  typeOfValue?: ExtDataTypes;
}

/**
 * Additional options for the {@link checkTypeMulti} function.
 */
export interface CheckTypeMultiOptions {
  /**
   * Whether or not to return at the first invalid item.
   * @default
   * false
   */
  returnOnFirst?: boolean;
  /**
   * Whether or not to throw an error if one of the items is not valid.
   * @default
   * false
   */
  throwError?: boolean;
}

/**
 * Returned object by the {@link checkTypeMulti} function.
 */
export interface CheckTypeMultiReturn {
  /**
   * Whether or not all the items are valid.
   */
  state: boolean;
  /**
   * All the provided items.
   */
  all: CheckTypeMultiItem[];
  /**
   * All the invalid items.
   */
  invalid: CheckTypeMultiItem[];
  /**
   * All the valid items.
   */
  valid: CheckTypeMultiItem[];
}

//

/**
 * A path object for the {@link getPaths} function.
 */
export interface GetPathsPath {
  /**
   * Name of the file.
   */
  name: string;
  /**
   * Path of the file.
   */
  path: string;
  /**
   * Relative path of the file.
   */
  relPath: string;
}

//

/**
 * Additional options for the {@link isEmpty} function.
 */
export interface IsEmptyOptions {
  /**
   * Extended data type of the value.
   *
   * Could improve performance a tiny bit.
   * @default
   * undefined
   */
  typeOfValue?: ExtDataTypes;
  /**
   * Whether or not to throw an error if the value is empty.
   * @default
   * false
   */
  throwError?: boolean;
  /**
   * Whether or not to skip the internal input checker.
   *
   * WARNING! This option is only intended for internal use.
   * @default
   * false
   */
  skipInputCheck?: boolean;
}

//

/**
 * Settings to set. Of the {@link setSettings} function.
 */
export interface SetSettingsSettings {
  /**
   * Whether or not to enable JavaScript mode.
   *
   * Enables runtime type checking.
   * @default
   * false
   */
  jsMode?: boolean;
}

//

/**
 * Returned object by the {@link stopwatch} function.
 */
export interface StopwatchReturn {
  /**
   * Gets the time elapsed since the creation of the stopwatch.
   *
   * @param {number} [decimals] [`number`] Number of decimals to use for the returned time.
   * @default
   * 2
   * @returns {number} (`number`) The time elapsed since the creation of the stopwatch.
   * @example
   * import { stopwatch } from "commonlib-js";
   *
   * const useStopwatch = stopwatch();
   *
   * console.log(useStopwatch.getTime()); // 6285.59
   */
  getTime: (decimals?: number) => number;
}
