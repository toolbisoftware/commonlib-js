// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

/**
 * Returns an array with a type that forces you to have all the elements of the type on the array.
 *
 * WARNING! This function only works with TypeScript.
 *
 * @template T (`any`) The type to enforce.
 * @returns {T[]} (`T[]`) The array.
 * @example
 * import { arrayOfType } from "commonlib-js";
 *
 * type Colors = "red" | "green" | "blue";
 *
 * const colorArray = arrayOfType<Colors>()(["red", "green", "blue"]);
 *
 * const badColorArray = arrayOfType<Colors>()(["red", "green"]);
 * // Argument of type 'string[]' is not assignable to parameter of type 'never'.ts(2345)
 * @version 1.0.0
 */
export const arrayOfType =
  <T>() =>
  <U extends T[]>(array: U & ([T] extends [U[number]] ? unknown : never)) =>
    array;
