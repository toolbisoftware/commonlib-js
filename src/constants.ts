// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import type { ExtDataTypes } from "./types.ts";
import { arrayOfType } from "./utils/arrayOfType.ts";

/**
 * {@link ExtDataTypes}
 */
export const extDataTypes = arrayOfType<ExtDataTypes>()([
  "bigint",
  "boolean",
  "function",
  "number",
  "object",
  "string",
  "symbol",
  "undefined",
  "null",
  "array"
]);
