// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import { stopwatch } from "./stopwatch.ts";

test("functions/stopwatch · default decimals", () => {
  const useStopwatch = stopwatch();
  expect(typeof useStopwatch.getTime() === "number").toBeTruthy();
});

test("functions/stopwatch · more decimals", () => {
  const useStopwatch = stopwatch(10);
  expect(typeof useStopwatch.getTime() === "number").toBeTruthy();
});

test("functions/stopwatch · less decimals", () => {
  const useStopwatch = stopwatch(1);
  expect(typeof useStopwatch.getTime() === "number").toBeTruthy();
});

test("functions/stopwatch · no decimals", () => {
  const useStopwatch = stopwatch(0);
  expect(typeof useStopwatch.getTime() === "number").toBeTruthy();
});

test("functions/stopwatch · invalid less decimals", () => {
  expect(() => {
    const useStopwatch = stopwatch(-1);
    useStopwatch.getTime();
  }).toThrow();
});

test("functions/stopwatch · invalid more decimals", () => {
  expect(() => {
    const useStopwatch = stopwatch(21);
    useStopwatch.getTime();
  }).toThrow();
});
