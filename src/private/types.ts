// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import type * as Types from "../types.ts";

export type Utils_InputCheckerTypeAdvancedType = {
  name: string;
  values: any[];
};

export interface Utils_InputCheckerTypeInput {
  value: any;
  name: string;
  type: (Types.ExtDataTypes | Utils_InputCheckerTypeAdvancedType)[];
}

export interface Utils_InputCheckerEmptyInput {
  value: any;
  name: string;
}
