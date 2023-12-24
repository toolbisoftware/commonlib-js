// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import { emptyStringToNull } from "./emptyStringToNull.ts";

test("functions/convert/emptyStringToNull · empty", () => {
  const run = emptyStringToNull("");
  expect(run).toBeNull();
});

test("functions/convert/emptyStringToNull · non empty", () => {
  const run = emptyStringToNull("hello world");
  expect(run).toBe("hello world");
});
