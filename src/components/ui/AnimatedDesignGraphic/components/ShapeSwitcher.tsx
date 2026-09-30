import React from "react";
import CodeIcon from "../../../icons/CodeIcon";
import ArrowFunction from "../../../icons/ArrowFunctionIcon";
import DotAndComm from "../../../icons/DotAndCommIcon";
import { iconType } from "../../../icons/type";

export const ShapeSwitcher = ({
  id,
  size,
  color,
}: {
  id: number;
  size: iconType["size"];
  color: string;
}) => {
  switch (id) {
    case 0:
      return <CodeIcon size={size} color={color} />;
    case 1:
      return <ArrowFunction size={size} color={color} />;
    case 2:
      return <DotAndComm size="xs" color={color} />;
    default:
      return null;
  }
};
