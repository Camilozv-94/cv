import { ReactNode } from "react";

interface LinkProps {
  title: ReactNode;
  variant?: "solid" | "outline" | "neon";
  url: string;
  target?: string;
}

const Link = ({
  title,
  variant = "solid",
  url,
  target
}: LinkProps) => {

  const variantStyles = {
    solid: "bg-secondary text-background px-4 py-2 rounded-sm hover:border-primary hover:text-primary",
    outline: "bg-background text-primary px-4 py-2 rounded-sm border-1 border-tertiary hover:border-secondary hover:text-secondary",
    neon: "bg-secondary/20 text-secondary border-2 border-secondary rounded-md px-4 py-2"
  };
  return (
    <a href={url} className={`flex items-center justify-center ${variantStyles[variant]}`} target={target || "_blank"} rel="noopener noreferrer">
      {title}
    </a>
  );
};

export default Link; 