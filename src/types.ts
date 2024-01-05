// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import * as chalk from "chalk";
import { checkInput, checkInputMulti } from "./functions/checkInput.ts";
import { checkType, checkTypeMulti } from "./functions/checkType.ts";
import { getFileNameInfo } from "./functions/getFileNameInfo.ts";
import { getPaths } from "./functions/getPaths.ts";
import { stopwatch } from "./functions/stopwatch.ts";

export interface Settings {}

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

/**
 * HTTP codes.
 */
export type HttpCodes =
  | 100
  | 101
  | 102
  | 103
  | 200
  | 201
  | 202
  | 203
  | 204
  | 205
  | 206
  | 207
  | 208
  | 226
  | 300
  | 301
  | 302
  | 303
  | 304
  | 305
  | 306
  | 307
  | 308
  | 400
  | 401
  | 402
  | 403
  | 404
  | 405
  | 406
  | 407
  | 408
  | 409
  | 410
  | 411
  | 412
  | 413
  | 414
  | 415
  | 416
  | 417
  | 418
  | 421
  | 422
  | 423
  | 424
  | 425
  | 426
  | 427
  | 428
  | 429
  | 430
  | 431
  | 451
  | 500
  | 501
  | 502
  | 503
  | 504
  | 506
  | 507
  | 508
  | 509
  | 510
  | 511;

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

export interface GenerateIdOptions {
  characters?: string;
  maxAttempts?: number;
}

export interface GenerateIdReturn {
  getId: () => string;
  getAttempts: () => number;
  regenerate: () => void;
}

//

export interface GetFileNameInfoReturn {
  full: string;
  name: string;
  ext: string;
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
}

//

export interface LoggerOptions {
  path?: string;
  entryLimit?: number;
  categories?: LoggerCategory[];
  debug?: boolean;
}

export interface LoggerLevel {
  name: LoggerLevels;
  text: string;
  bgColor: chalk.BackgroundColorName;
  fgColor: chalk.ForegroundColorName;
}

export interface LoggerCategory {
  name: string;
  text: string;
}

export type LoggerLevels =
  | "debug"
  | "info"
  | "done"
  | "warn"
  | "error"
  | "fatal";

export type LoggerDefaultCategories =
  | "config"
  | "util"
  | "controller"
  | "service"
  | "database"
  | "keystore"
  | "main"
  | "base"
  | "core";

export interface LoggerLogOptions<CATEGORIES extends string> {
  category?: LoggerDefaultCategories | CATEGORIES;
  error?: string;
  stopwatch?: StopwatchReturn;
}

//

export interface ReplaceItem {
  pattern: string | RegExp;
  replacement: string;
}

//

export type ReturnHandlerStates = "running" | "done" | "error";

export interface ReturnHandlerObject<
  CODES extends string | number,
  CONTENT extends object | null
> {
  state: ReturnHandlerStates;
  code: CODES | null | undefined;
  content: CONTENT | null | undefined;
}

export interface ReturnHandlerReturn<
  CODES extends string | number = string | number,
  CONTENT extends object | null = null
> {
  get: () => ReturnHandlerObject<CODES, CONTENT>;
  done: (
    code?: CODES,
    content?: CONTENT
  ) => ReturnHandlerObject<CODES, CONTENT>;
  error: (
    code?: CODES,
    eraseContent?: boolean
  ) => ReturnHandlerObject<CODES, CONTENT>;
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

//

/**
 * Additional options for the {@link sar} function.
 */
export interface Express_SarOptions {
  /**
   * Internal code of the response.
   * @default
   * undefined
   */
  code?: number;
  /**
   * Internal id of the response's message. Use only alongside `options.message`.
   * @default
   * undefined
   */
  messageId?: string;
  /**
   * Message to send. Use only alongside `options.messageId`.
   * @default
   * undefined
   */
  message?: string;
  /**
   * Content to send.
   * @default
   * undefined
   */
  content?: object;
}

export interface Express_SarResponse extends Express_SarOptions {}
