// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import type { GetFileNameInfoReturn } from "../types.ts";

/**
 * Gets information about a file name.
 *
 * @param {string} fileName (`string`) The file name to get the information from.
 * @returns {GetFileNameInfoReturn} ({@link GetFileNameInfoReturn}) An object with the information of the provided file name.
 * @example
 * import { getFileNameInfo } from "commonlib-js";
 *
 * const fileName = "index.ts";
 * const getInfo = getFileNameInfo(fileName);
 *
 * console.log(getInfo);
 * // {
 * //   full: 'index.ts',
 * //   name: 'index',
 * //   ext: 'ts'
 * // }
 * @version 1.0.0
 */
export function getFileNameInfo(fileName: string): GetFileNameInfoReturn {
  const result: GetFileNameInfoReturn = {
    full: fileName,
    name: "",
    ext: ""
  };

  const lastDotIndex = fileName.lastIndexOf(".");
  if (lastDotIndex === -1) {
    result.name = fileName;
  } else {
    result.name = fileName.slice(0, lastDotIndex);
    result.ext = fileName.slice(lastDotIndex + 1);
  }

  return result;
}
