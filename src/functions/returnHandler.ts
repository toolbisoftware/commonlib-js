// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import type { ReturnHandlerObject, ReturnHandlerReturn } from "../types.ts";

export function returnHandler<
  CODES extends string | number = string | number,
  CONTENT extends object | null = null
>(): ReturnHandlerReturn<CODES, CONTENT> {
  const result: ReturnHandlerObject<CODES, CONTENT> = {
    state: "running",
    code: undefined,
    content: undefined
  };

  function get(): ReturnHandlerObject<CODES, CONTENT> {
    return result;
  }

  function done(
    code?: CODES,
    content?: CONTENT
  ): ReturnHandlerObject<CODES, CONTENT> {
    result.state = "done";

    if (code !== undefined) {
      result.code = code;
    } else {
      result.code = null;
    }

    if (content) {
      result.content = content;
    } else {
      result.content = null;
    }

    return result;
  }

  function error(
    code?: CODES,
    eraseContent?: boolean
  ): ReturnHandlerObject<CODES, CONTENT> {
    result.state = "error";

    if (code !== undefined) {
      result.code = code;
    } else {
      result.code = null;
    }

    if (eraseContent) {
      result.content = null;
    }

    return result;
  }

  return {
    get,
    done,
    error
  };
}
