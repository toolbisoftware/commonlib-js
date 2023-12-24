// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import { timeToMs } from "./timeToMs.ts";

test("functions/convert/timeToMs · time", () => {
  const run = timeToMs("2d");
  expect(run).toBe(172800000);
});

test("functions/convert/timeToMs · milliseconds", () => {
  const run = timeToMs(172800000);
  expect(run).toBe(172800000);
});
