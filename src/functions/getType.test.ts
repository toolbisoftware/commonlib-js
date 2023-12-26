// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import { getType } from "./getType.ts";

test("functions/getType · bigint", () => {
  const run = getType(BigInt(1));
  expect(run).toMatch("bigint");
});

test("functions/getType · boolean", () => {
  const run = getType(true);
  expect(run).toMatch("boolean");
});

test("functions/getType · function", () => {
  const run = getType(() => {});
  expect(run).toMatch("function");
});

test("functions/getType · number", () => {
  const run = getType(1);
  expect(run).toMatch("number");
});

test("functions/getType · object", () => {
  const run = getType({ hello: "world" });
  expect(run).toMatch("object");
});

test("functions/getType · string", () => {
  const run = getType("hello world");
  expect(run).toMatch("string");
});

test("functions/getType · symbol", () => {
  const run = getType(Symbol("hello world"));
  expect(run).toMatch("symbol");
});

test("functions/getType · undefined", () => {
  const run = getType(undefined);
  expect(run).toMatch("undefined");
});

test("functions/getType · null", () => {
  const run = getType(null);
  expect(run).toMatch("null");
});

test("functions/getType · array", () => {
  const run = getType(["hello world"]);
  expect(run).toMatch("array");
});
