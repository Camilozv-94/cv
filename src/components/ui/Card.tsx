interface CardProps {
  title: string;
  description: string;
  index?: number;
  variant?: 'process' | 'stack';
}

export const Card = ({ title, description, index, variant = 'process' }: CardProps) => {

  const variantStyles = {
    process: { title: 'text-primary font-bold mb-2d', description: "text-tertiary" },
    stack: { title: 'text-secondary font-bold mb-2', description: "text-primary" },
  };

  return (
    <div className={`flex flex-col ${variant === 'process' && 'w-70'} gap-2 rounded-xl bg-secondary-background p-6`}>
      {variant === 'process' && (
        <div className="flex flex-row items-center justify-between">
          <h1 className="font-bold text-secondary">{index}</h1>
          <span className="size-2 rounded-full bg-secondary" />
        </div>
      )}
      <h2 className={variantStyles[variant].title}>{title}</h2>
      <p className={variantStyles[variant].description}>{description}</p>
    </div>
  );
};