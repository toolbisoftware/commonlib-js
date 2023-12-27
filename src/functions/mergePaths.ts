// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

/**
 * Merges paths into one.
 *
 * @param {string[]} paths (`string[]`) The paths to merge.
 * @returns (`string`) A path formed by the provided paths.
 * @example
 * // TODO
 * @version 1.0.0
 */
export function mergePaths(...paths: string[]): string {
  const filter = paths.filter((path) => path !== "");
  const result = `/${filter.join("/")}`;

  return result;
}
