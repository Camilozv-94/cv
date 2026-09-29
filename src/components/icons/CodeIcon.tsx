import { iconSizes, iconType } from "./type";

const CodeIcon = ({ size, color }: iconType) => {
  const { width, height } = iconSizes[size];
  return (
    <svg
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M 8 7 L 3 12 L 8 17" />

      <path d="M 14 4 L 10 20" />

      <path d="M 16 7 L 21 12 L 16 17" />
    </svg>
  );
};

export default CodeIcon;
