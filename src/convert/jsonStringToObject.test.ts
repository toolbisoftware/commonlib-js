// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import { jsonStringToObject } from "./jsonStringToObject.ts";

test("functions/convert/jsonStringToObject · valid object", () => {
  const run = jsonStringToObject('{"hello":"world"}');
  expect(run).toStrictEqual({
    hello: "world"
  });
});

test("functions/convert/jsonStringToObject · non valid object", () => {
  const run = jsonStringToObject('"hello":"world"}');
  expect(run).toBeNull();
});
