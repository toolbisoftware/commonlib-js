// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import { isEmpty } from "./isEmpty.ts";

test("functions/isEmpty · bigint", () => {
  const run = isEmpty(BigInt(1));
  expect(run).toBeNull();
});

test("functions/isEmpty · boolean", () => {
  const run = isEmpty(true);
  expect(run).toBeNull();
});

test("functions/isEmpty · function", () => {
  const run = isEmpty(() => {});
  expect(run).toBeNull();
});

test("functions/isEmpty · symbol", () => {
  const run = isEmpty(Symbol("hello world"));
  expect(run).toBeNull();
});

//

test("functions/isEmpty · number", () => {
  const run = isEmpty(1);
  expect(run).toBeFalsy();
});

test("functions/isEmpty · object", () => {
  const run = isEmpty({ hello: "world" });
  expect(run).toBeFalsy();
});

test("functions/isEmpty · string", () => {
  const run = isEmpty("hello world");
  expect(run).toBeFalsy();
});

test("functions/isEmpty · array", () => {
  const run = isEmpty(["hello world"]);
  expect(run).toBeFalsy();
});

//

test("functions/isEmpty · empty number", () => {
  const run = isEmpty(NaN);
  expect(run).toBeTruthy();
});

test("functions/isEmpty · empty object", () => {
  const run = isEmpty({});
  expect(run).toBeTruthy();
});

test("functions/isEmpty · empty string", () => {
  const run = isEmpty("");
  expect(run).toBeTruthy();
});

test("functions/isEmpty · empty array", () => {
  const run = isEmpty([]);
  expect(run).toBeTruthy();
});

//

test("functions/isEmpty · undefined", () => {
  const run = isEmpty(undefined);
  expect(run).toBeTruthy();
});

test("functions/isEmpty · null", () => {
  const run = isEmpty(null);
  expect(run).toBeTruthy();
});
