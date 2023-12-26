// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import { CommonLib } from "../../commonlib.ts";
import { getType } from "../../functions/getType.ts";
import { isEmpty } from "../../functions/isEmpty.ts";
import type { ExtDataTypes } from "../../types.ts";
import type {
  Utils_InputCheckerEmptyInput as EmptyInput,
  Utils_InputCheckerTypeAdvancedType as TypeAdvancedType,
  Utils_InputCheckerTypeInput as TypeInput
} from "../types.ts";

export function inputCheckerType(input: TypeInput[]): void {
  if (!CommonLib.getInstance().settings.jsMode) {
    return;
  }

  const checkType = (input_: TypeInput, typeOfInput: ExtDataTypes): void => {
    const getAdvancedTypes = input_.type.filter((x) => typeof x === "object");
    for (const _ of getAdvancedTypes) {
      const advancedType = _ as TypeAdvancedType;
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

  for (const input_ of input) {
    const getTypeOfInput = getType(input_.value);
    checkType(input_, getTypeOfInput);
  }
}

export function inputCheckerEmpty(input: EmptyInput[]): void {
  const isEmpty_ = (input_: EmptyInput): void => {
    if (isEmpty(input_.value, { skipInputCheck: true })) {
      throw new Error(`Parameter '${input_.name}' cannot be empty.`);
    }
  };

  for (const input_ of input) {
    isEmpty_(input_);
  }
}
