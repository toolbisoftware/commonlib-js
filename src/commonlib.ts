// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import type { Settings } from "./types.ts";

export class CommonLib {
  private static instance: CommonLib | null = null;
  readonly settings: Settings;

  private constructor() {
    this.settings = {
      jsMode: false
    };
  }

  public static getInstance(): CommonLib {
    if (!CommonLib.instance) {
      CommonLib.instance = new CommonLib();
    }
    return CommonLib.instance;
  }
}
