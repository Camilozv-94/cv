import { iconSizes, iconType } from "./type";

const MailIcon = ({ size }: iconType) => {
  const { height } = iconSizes[size];
  const width = height;
  return (
    <svg
      viewBox="0 0 24 24"
      width={width}
      height={height}
      stroke="currentColor"
      fill="var(--background)"
      strokeWidth="2"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
      <path d="M22 6l-10 7L2 6"></path>
    </svg>
  );
};

export default MailIcon;
