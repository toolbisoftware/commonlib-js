// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import { CommonLib } from "../../commonlib.ts";
import { getType } from "../../functions/getType.ts";
import { isEmpty } from "../../functions/isEmpty.ts";
import type { ExtDataTypes } from "../../types.ts";
import type {
  Utils_InputCheckerAdvancedType as AdvancedType,
  Utils_InputCheckerInput as Input
} from "../types.ts";

export function inputChecker(input: Input[]): void {
  if (!CommonLib.getInstance().settings.jsMode) {
    return;
  }

  const checkType = (input_: Input, typeOfInput: ExtDataTypes): void => {
    const getAdvancedTypes = input_.type.filter((x) => typeof x === "object");
    for (const _ of getAdvancedTypes) {
      const advancedType = _ as AdvancedType;
      if (advancedType.values.includes(input_.value)) {
        return;
      }
    }

    const getSimpleTypes = input_.type.filter((x) => typeof x === "string");
    if (getSimpleTypes.includes(typeOfInput)) {
      return;
    }

    const getTypeNames = input_.type.map((x) => {
      if (typeof x === "object") {
        return x.name;
      }
      return x;
    });
    throw new Error(
      `Parameter '${input_.name}' must be of type '${getTypeNames.join(
        " | "
      )}'.`
    );
  };

  const isEmpty_ = (input_: Input, typeOfInput: ExtDataTypes): void => {
    const allowEmpty = input_.allowEmpty || false;
    if (allowEmpty) {
      return;
    }

    if (
      isEmpty(input_.value, { typeOfValue: typeOfInput, skipInputCheck: true })
    ) {
      throw new Error(`Parameter '${input_.name}' cannot be empty.`);
    }
  };

  for (const input_ of input) {
    const getTypeOfInput = getType(input_.value);
    checkType(input_, getTypeOfInput);
    isEmpty_(input_, getTypeOfInput);
  }
}
