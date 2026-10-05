import { iconSizes, iconType } from "./type";

export const Download = ({ size, color }: iconType) => {
  const { width, height } = iconSizes[size];

  return (
    <svg
      viewBox="0 0 24 24"
      width={width}
      height={height}
      stroke={color}
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 3v13" />
      <path d="M7 11l5 5 5-5" />
      <path d="M4 20h16" />
    </svg>
  );
};
