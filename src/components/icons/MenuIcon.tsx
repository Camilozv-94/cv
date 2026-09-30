import { LineSet } from "../ui/AnimatedDesignGraphic/components/LineSet";
import { iconSizes, iconType } from "./type";

export const Menu = ({ size, color }: iconType) => {
  const { width, height } = iconSizes[size];

  return (
    <svg
      viewBox="0 0 24 24"
      width={width}
      height={height}
      stroke={color}
      fill="var(--background)"
      strokeWidth={2}
      suppressHydrationWarning
    >
      <LineSet
        isHorizontal={true}
        amount={3}
        distanceBetween={7}
        size={24}
        startX={0}
        startY={5}
        color="var(--primary)"
        strokeWidth={2}
      />
    </svg>
  );
};
