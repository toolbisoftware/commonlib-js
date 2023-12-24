// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import { booleanToNumber } from "./booleanToNumber.ts";

test("functions/convert/booleanToNumber · true", () => {
  const run = booleanToNumber(true);
  expect(run).toBe(1);
});

test("functions/convert/booleanToNumber · false", () => {
  const run = booleanToNumber(false);
  expect(run).toBe(0);
});
