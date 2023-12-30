// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import * as nanoid from "nanoid";
import type { GenerateIdOptions, GenerateIdReturn } from "../types.ts";

export function generateId(
  length: number,
  options?: GenerateIdOptions
): GenerateIdReturn {
  const characters =
    options?.characters ||
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_";

  const generator = nanoid.customAlphabet(characters, length);
  let attempts = 1;
  let id = generator();

  function regenerate() {
    if (options?.maxAttempts) {
      if (attempts >= options.maxAttempts) {
        throw new Error(
          "The id couldn't be generated. Reached the limit of generation attempts."
        );
      }
    }
    id = generator();
    attempts++;
  }

  return {
    getId: () => id,
    getAttempts: () => attempts,
    regenerate
  };
}
