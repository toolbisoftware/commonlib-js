// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import { numberToBoolean } from "./numberToBoolean.ts";

test("functions/convert/numberToBoolean · 1", () => {
  const run = numberToBoolean(1);
  expect(run).toBeTruthy();
});

test("functions/convert/numberToBoolean · 0", () => {
  const run = numberToBoolean(0);
  expect(run).toBeFalsy();
});

test("functions/convert/numberToBoolean · invalid", () => {
  expect(() => {
    numberToBoolean(2);
  }).toThrow();
});
