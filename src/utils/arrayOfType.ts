// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

/**
 * Returns an array that must contain all the elements of the provided type.
 *
 * NOTE! This util is intended to be used with TypeScript. Using it with plain JavaScript doesn't have a purpose.
 *
 * @template T The type to enforce.
 * @returns An array that must contain all the elements of the provided type. · `T[]`
 * @example
 * import * as commonlib from "commonlib";
 *
 * type Words = "hello" | "world";
 *
 * const goodArrayWithWords = commonlib.utils.arrayOfType<Words>()([
 *   "hello",
 *   "world"
 * ]);
 *
 * const badArrayWithWords = commonlib.utils.arrayOfType<Words>()(["hello"]);
 * // Argument of type 'string[]' is not assignable to parameter of type 'never'.ts(2345)
 *
 * ...
 * @version 1.0.0
 */
export const arrayOfType =
  <T>() =>
  <U extends T[]>(array: U & ([T] extends [U[number]] ? unknown : never)) =>
    array;
