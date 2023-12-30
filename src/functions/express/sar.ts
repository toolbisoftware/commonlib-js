// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import express from "express";
import type {
  Express_SarOptions,
  Express_SarResponse,
  HttpCodes
} from "../../types.ts";

export function sar(
  res: express.Response,
  httpCode: HttpCodes,
  options?: Express_SarOptions
): void {
  if (options?.messageId || options?.message) {
    if (!options.messageId || !options.message) {
      throw new Error(
        "The parameters 'options.messageId' and 'options.message' have to be either defined as a string or undefined."
      );
    }
  }

  const response: Express_SarResponse = {};
  if (options?.code !== undefined) {
    response.code = options.code;
  }
  if (options?.messageId) {
    response.messageId = options.messageId;
  }
  if (options?.message) {
    response.message = options.message;
  }
  if (options?.content) {
    response.content = options.content;
  } else {
    response.content = {};
  }

  res.status(httpCode).send(response);
  return;
}
