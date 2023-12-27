// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import { CommonLib } from "../commonlib.ts";
import { inputCheckerType } from "../private/index.ts";
import { SetSettingsSettings } from "../types.ts";

/**
 * Sets the settings of the instance.
 *
 * @param {SetSettingsSettings} settings ({@link SetSettingsSettings}) The settings to set.
 */
export function setSettings(settings: SetSettingsSettings): void {
  inputCheckerType([
    {
      value: settings.jsMode,
      name: "settings.jsMode",
      type: ["boolean", "undefined"]
    }
  ]);

  const instance = CommonLib.getInstance();

  if (settings.jsMode !== undefined) {
    instance.settings.jsMode = settings.jsMode;
  }
}
