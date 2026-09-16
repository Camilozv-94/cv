interface ButtonProps {
  title: string;
  variant?: "solid" | "outline" | "neon";
  url: string;
}

const Button = ({
  title,
  variant = "solid",
  url
}: ButtonProps) => {

  const variantStyles = {
    solid: "bg-secondary text-background px-4 py-2 rounded-sm ",
    outline: "bg-background text-primary px-4 py-2 rounded-sm border-1 border-tertiary",
    neon: "bg-secondary/20 text-secondary border-2 border-secondary rounded-md px-4 py-2"
  };
  return (
    <a href={url} className={variantStyles[variant]}>
      {title}
    </a>
  );
};

export default Button; 