import { iconSizes, iconType } from "./type";

export const X = ({ size, color }: iconType) => {
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
      <line x1={0} x2={24} y1={0} y2={24} />
      <line x1={0} x2={24} y1={24} y2={0} />
    </svg>
  );
};
