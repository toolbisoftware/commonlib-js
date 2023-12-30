// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import type { ReplaceItem } from "../types.ts";

export function replace(
  text: string,
  pattern: string | RegExp,
  replacement: string
): string;
export function replace(
  text: string,
  pattern: string | RegExp,
  replacement: string[]
): string;
export function replace(
  text: string,
  pattern: string | RegExp,
  replacement: string | string[]
): string {
  const regex =
    typeof pattern === "string" ? new RegExp(pattern, "g") : pattern;
  const matches = text.match(regex);

  if (matches) {
    if (Array.isArray(replacement)) {
      let index = 0;
      return text.replace(regex, (match) => {
        const r = replacement?.[index] || match;
        index++;
        return r;
      });
    } else {
      return text.replace(regex, () => {
        return replacement;
      });
    }
  } else {
    return text;
  }
}

export function replaceMulti(
  text: string,
  items: ReplaceItem[],
  all?: boolean
): string {
  let result = text;
  for (const item of items) {
    const regex =
      typeof item.pattern === "string"
        ? new RegExp(item.pattern, "g")
        : item.pattern;

    if (all) {
      result = text.replaceAll(regex, item.replacement);
    } else {
      result = text.replace(regex, item.replacement);
    }
  }

  return result;
}
