interface LinkProps {
  title: string;
  variant?: "solid" | "outline" | "neon";
  url: string;
}

const Link = ({
  title,
  variant = "solid",
  url
}: LinkProps) => {

  const variantStyles = {
    solid: "bg-secondary text-background px-4 py-2 rounded-sm hover:bg-primary",
    outline: "bg-background text-primary px-4 py-2 rounded-sm border-1 border-tertiary hover:border-secondary",
    neon: "bg-secondary/20 text-secondary border-2 border-secondary rounded-md px-4 py-2 hover:bg-secondary/30"
  };
  return (
    <a href={url} className={variantStyles[variant]}>
      {title}
    </a>
  );
};

export default Link; 