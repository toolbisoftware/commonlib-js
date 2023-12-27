// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

/**
 * Converts (parses) a string into an object if parseable, returns `null` otherwise.
 *
 * @alias jsonStrToObj
 * @template T [any] The type of the returned object.
 * @default
 * object
 * @param {string} jsonString (`string`) The string to parse.
 * @returns {T | null} (`T | null`) The parsed string if parseable, `null` otherwise.
 * @example
 * import { jsonStringToObject } from "commonlib-js";
 *
 * type HelloWorld = {
 *   hello: string;
 * };
 *
 * const jsonString = '{"hello":"world"}';
 * console.log(jsonStringToObject<HelloWorld>(jsonString)); // {hello: "world"}
 *
 * const invalidJsonString = '"hello":"world"}';
 * console.log(jsonStringToObject<HelloWorld>(invalidJsonString)); // null
 * @version 1.0.0
 */
export function jsonStringToObject<T = object>(jsonString: string): T | null {
  try {
    const parse = JSON.parse(jsonString);
    return parse;
  } catch (err) {
    return null;
  }
}

export const jsonStrToObj = jsonStringToObject;
