import { iconSizes, iconType } from "./type";

export const Moon = ({ size, color }: iconType) => {
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
      <path d=" M 20.985 12.486 A 9 9 0 1 1 11.512 3.014 C 11.917 2.992 12.129 3.474 11.914 3.817 A 6 6 0 0 0 20.182 12.085 C 20.526 11.87 21.007 12.081 20.985 12.486" />
    </svg>
  );
};
