// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import { Response } from "express";
import type {
  Express_SarOptions,
  Express_SarResponse,
  HttpCodes
} from "../../types.ts";

/**
 * Sends a response to a request.
 *
 * @param {Response} res ({@link Response}) The request to send the response to.
 * @param {HttpCodes} httpCode ({@link HttpCodes}) HTTP code to send the response with.
 * @param {Express_SarOptions} [options] [{@link Express_SarOptions}] Options for the function.
 * @default
 * undefined
 * @param {Express_SarOptions["code"]} [options.code] [`number`] Internal code of the response.
 * @default
 * undefined
 * @param {Express_SarOptions["messageId"]} [options.messageId] [`string`] Internal id of the response's message. Use only alongside `options.message`.
 * @default
 * undefined
 * @param {Express_SarOptions["message"]} [options.message] [`string`] Message to send. Use only alongside `options.messageId`.
 * @default
 * undefined
 * @param {Express_SarOptions["content"]} [options.content] [`object`] Content to send.
 * @default
 * undefined
 * @example
 * import { sar } from "commonlib-js";
 *
 * ...
 *
 * sar(res, 200);
 * @version 1.0.0
 */
export function sar(
  res: Response,
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
