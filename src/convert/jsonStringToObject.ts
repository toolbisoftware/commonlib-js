// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import { inputCheckerType } from "../private/index.ts";

/**
 * Converts (parses) a string into an object.
 *
 * @alias jsonStrToObj
 * @template T (Optional) The type of the returned object.
 * @param {string} jsonString The string to parse. · `string`
 * @returns {T | null} An object if the string is parseable, `null` otherwise. · `T | null`
 * @example
 * import { jsonStringToObject } from "commonlib-js";

 * const jsonString = '{"hello":"world"}';

 * console.log(jsonStringToObject(jsonString)); // {hello: "world"}
 * @version 1.0.0
 */
export function jsonStringToObject<T = object>(jsonString: string): T | null {
  inputCheckerType([
    {
      value: jsonString,
      name: "jsonString",
      type: ["string"]
    }
  ]);

  try {
    const parse = JSON.parse(jsonString);
    return parse;
  } catch (err) {
    return null;
  }
}
export const jsonStrToObj = jsonStringToObject;
