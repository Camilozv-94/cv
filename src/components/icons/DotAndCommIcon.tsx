import { iconSizes, iconType } from "./type";

const DotAndComm = ({ size, color }: iconType) => {
  const { width, height } = iconSizes[size];
  return (
    <svg
      viewBox="0 0 24 24"
      width={width}
      height={height}
      stroke={color}
      fill={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M 12 4.5 
               a 2.5 2.5 0 1 1 0 5 
               a 2.5 2.5 0 1 1 0 -5 z"
      />

      <path
        d="M 14.5 14.5 
               A 2.5 2.5 0 0 0 9.5 14.5 
               C 9.5 18.5, 7.5 21, 6 21.5 
               C 10 21, 14.5 18.5, 14.5 14.5 Z"
      />
    </svg>
  );
};

export default DotAndComm;
