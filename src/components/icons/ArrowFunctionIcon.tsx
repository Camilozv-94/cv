import { iconSizes, iconType } from "./type";

const ArrowFunction = ({ size, color }: iconType) => {
  const { height } = iconSizes[size];
  const width = height * 4;
  return (
    <svg
      viewBox="0 0 96 24"
      width={width}
      height={height}
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M 10 4 Q 4 12 10 20" />
      <path d="M 18 4 Q 24 12 18 20" />

      <path d="M 36 9 L 45 9 M 36 15 L 45 15" />
      <path d="M 47 6 L 53 12 L 47 18" />

      <path d="M 72 4 Q 68 4 68 8 T 64 12 Q 68 12 68 16 T 72 20" />
      <path d="M 80 4 Q 84 4 84 8 T 88 12 Q 84 12 84 16 T 80 20" />
    </svg>
  );
};

export default ArrowFunction;
