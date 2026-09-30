import React from "react";
import { LineSet } from "./LineSet";

export interface CommentIndicatorProps {
  avatarColor?: string;
  startX: number;
  startY: number;
}

export const CommentIndicator = ({
  avatarColor = "white",
  startX,
  startY,
}: CommentIndicatorProps): React.JSX.Element => {
  const differenceOnX = 2;
  const differenceOnY = 10;
  
  return (
    <>
      <circle cx={startX} cy={startY} r={4} fill={avatarColor} />
      <line
        x1={startX + 5}
        x2={startX + 18}
        y1={startY}
        y2={startY}
        stroke="black"
        strokeWidth={2}
      />
      <LineSet
        isHorizontal={true}
        amount={5}
        distanceBetween={5}
        size={30}
        startX={startX + differenceOnX}
        startY={startY + differenceOnY}
        randomness={0.2}
        color="gray"
      />
    </>
  );
};
