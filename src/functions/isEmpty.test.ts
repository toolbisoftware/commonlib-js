// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import { isEmpty } from "./isEmpty.ts";

test("functions/isEmpty · boolean", () => {
  const empty = isEmpty(false);
  expect(empty).toBeNull();
});

test("functions/isEmpty · empty number", () => {
  const empty = isEmpty(NaN);
  expect(empty).toBeTruthy();
});

test("functions/isEmpty · empty object", () => {
  const empty = isEmpty({});
  expect(empty).toBeTruthy();
});

test("functions/isEmpty · empty string", () => {
  const empty = isEmpty("");
  expect(empty).toBeTruthy();
});

test("functions/isEmpty · number", () => {
  const empty = isEmpty(1);
  expect(empty).toBeFalsy();
});

test("functions/isEmpty · object", () => {
  const empty = isEmpty({
    hello: "world"
  });
  expect(empty).toBeFalsy();
});

test("functions/isEmpty · string", () => {
  const empty = isEmpty("hello world");
  expect(empty).toBeFalsy();
});

test("functions/isEmpty · null", () => {
  const empty = isEmpty(null);
  expect(empty).toBeTruthy();
});

test("functions/isEmpty · undefined", () => {
  const empty = isEmpty(undefined);
  expect(empty).toBeTruthy();
});
