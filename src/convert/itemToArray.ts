// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

/**
 * Converts an item into an array.
 *
 * @template T The type of the returned array.
 * @param {T} item The item to convert. · `T`
 * @returns {T[]} The item in an array. · `T[]`
 * @example
 * import { itemToArray } from "commonlib-js";

 * const message = "hello";

 * console.log(itemToArray<string>(message)); // ["hello"]
 * @version 1.0.0
 */
export function itemToArray<T>(item: T | T[]): T[] {
  if (Array.isArray(item)) {
    return item;
  } else {
    return [item];
  }
}
export const itemToArr = itemToArray;
