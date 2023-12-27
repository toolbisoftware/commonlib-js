// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import fs from "fs/promises";
import path from "node:path";
import { inputCheckerType } from "../private/index.ts";
import { GetPathsOptions, GetPathsPath } from "../types.ts";
import { mergePaths } from "./mergePaths.ts";

async function run(
  currentPath: string,
  previousPaths: string[] = []
): Promise<GetPathsPath[]> {
  const paths: GetPathsPath[] = [];

  const getFiles = await fs.readdir(currentPath);
  for (const file of getFiles) {
    const filePath = path.join(currentPath, file);
    const fileStat = await fs.stat(filePath);

    if (fileStat.isDirectory()) {
      paths.push(...(await run(filePath, [...previousPaths, file])));
    } else {
      paths.push({
        name: file,
        path: currentPath,
        relPath: mergePaths(...previousPaths, file)
      });
    }
  }

  return paths;
}

/**
 * Gets the paths of the contents of a directory.
 *
 * @param path (`string`) The path to scan.
 * @param {GetPathsOptions} [options] [{@link GetPathsOptions}] Additional options for the function.
 * @default
 * undefined
 * @returns (Promise<{@link GetPathsPath}[]>) An array with all the paths.
 * @example
 * import { getPaths } from "commonlib-js";
 *
 * const paths = await getPaths("./src");
 *
 * console.log(paths);
 * // { name: 'commonlib.ts', path: './src', relPath: '/commonlib.ts' },
 * // { name: 'constants.ts', path: './src', relPath: '/constants.ts' },
 * // {
 * //   name: 'checkInput.ts',
 * //   path: 'src\\functions',
 * //   relPath: '/functions/checkInput.ts'
 * // },
 * // ...
 * @version 1.0.0
 */
export async function getPaths(
  path: string,
  options?: GetPathsOptions
): Promise<GetPathsPath[]> {
  if (options?.skipInputCheck !== true) {
    inputCheckerType([
      {
        value: path,
        name: "path",
        type: ["string"]
      }
    ]);
  }

  return await run(path);
}
