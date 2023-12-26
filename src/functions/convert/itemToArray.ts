// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

/**
 * Converts an item into an array if it's not an array already, returns the array otherwise.
 *
 * @alias itemToArr
 * @template T (`any`) The type of the provided item.
 * @param {T | T[]} item (`T | T[]`) The item to convert.
 * @returns {T[]} (`T[]`) The item as an array.
 * @example
 * import { itemToArray } from "commonlib-js";
 *
 * const text = "hello world";
 * console.log(itemToArray<string>(text)); // ["hello world"]
 *
 * const textArray = ["hello world"];
 * console.log(itemToArray<string>(textArray)); // ["hello world"]
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
