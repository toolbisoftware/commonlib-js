// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import type * as Types from "../types.ts";

export type Utils_InputCheckerAdvancedType = {
  name: string;
  values: any[];
};
export interface Utils_InputCheckerInput {
  value: any;
  name: string;
  type: (Types.ExtDataTypes | Utils_InputCheckerAdvancedType)[];
  allowEmpty?: boolean;
}
