// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import { getType } from "./getType.ts";

test("functions/getType · string", () => {
  const type = getType("hello world");
  expect(type).toMatch("string");
});

test("functions/getType · object", () => {
  const type = getType({
    hello: "world"
  });
  expect(type).toMatch("object");
});

test("functions/getType · array", () => {
  const type = getType(["hello", "world"]);
  expect(type).toMatch("array");
});

test("functions/getType · null", () => {
  const type = getType(null);
  expect(type).toMatch("null");
});

test("functions/getType · undefined", () => {
  const type = getType(undefined);
  expect(type).toMatch("undefined");
});
