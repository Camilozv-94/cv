import React, { useState } from "react";

export interface LineSetProps {
  isHorizontal: boolean;
  amount: number;
  distanceBetween: number;
  size: number;
  startX?: number;
  startY?: number;
  randomness?: number;
  color?: string;
  strokeWidth?: number;
}

export const LineSet = ({
  isHorizontal,
  amount,
  distanceBetween,
  size,
  startX = 0,
  startY = 0,
  randomness = 0,
  color = "white",
  strokeWidth = 2,
}: LineSetProps): React.JSX.Element => {
  const [randomFactor] = useState(() => (Math.random() * 2 - 1) * randomness);

  return (
    <>
      {Array.from({ length: amount }, (_, index) => {
        const offset = index * distanceBetween;

        const lineSize = Math.max(0, size * (1 + randomFactor));

        const x1 = isHorizontal ? startX : startX + offset;
        const y1 = isHorizontal ? startY + offset : startY;
        const x2 = isHorizontal ? startX + lineSize : startX + offset;
        const y2 = isHorizontal ? startY + offset : startY + lineSize;

        return (
          <line
            key={index}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={color}
            strokeWidth={strokeWidth}
            suppressHydrationWarning
          />
        );
      })}
    </>
  );
};
