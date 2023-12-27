// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import { CommonLib } from "../commonlib.ts";
import { inputCheckerType } from "../private/index.ts";

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
  inputCheckerType([
    {
      value: paths,
      name: "paths",
      type: ["array"]
    }
  ]);

  if (CommonLib.getInstance().settings.jsMode) {
    for (const path of paths) {
      inputCheckerType([
        {
          value: path,
          name: "paths[?]",
          type: ["string"]
        }
      ]);
    }
  }

  const filter = paths.filter((path) => path !== "");
  const result = `/${filter.join("/")}`;

  return result;
}
