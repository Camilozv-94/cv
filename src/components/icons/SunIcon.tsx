import { iconSizes, iconType } from "./type";

export const Sun = ({ size, color }: iconType) => {
  const { width, height } = iconSizes[size];
  return (
    <svg viewBox="0 0 24 24" width={width} height={height}>
      <circle
        cx="12"
        cy="12"
        r="5"
        stroke={color}
        strokeWidth="2"
        fill="var(--background)"
        suppressHydrationWarning
      />
      <g
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        suppressHydrationWarning
      >
        <line x1="12" y1="2" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="22" />
        <line x1="2" y1="12" x2="4" y2="12" />
        <line x1="20" y1="12" x2="22" y2="12" />
        <line x1="19.07" y1="4.93" x2="17.66" y2="6.34" />
        <line x1="6.34" y1="17.66" x2="4.93" y2="19.07" />
        <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
        <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
      </g>
    </svg>
  );
};
