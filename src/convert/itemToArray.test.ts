// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import { itemToArray } from "./itemToArray.ts";

test("functions/convert/itemToArray · array", () => {
  const run = itemToArray(["hello world"]);
  expect(run).toStrictEqual(["hello world"]);
});

test("functions/convert/itemToArray · non array", () => {
  const run = itemToArray("hello world");
  expect(run).toStrictEqual(["hello world"]);
});
