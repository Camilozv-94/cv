interface CardProps {
  title: string;
  description: string;
  index: number;
}

export const Card = ({ title, description, index }: CardProps) => {

  return (
    <div className={`flex w-70 flex-col gap-2 rounded-xl bg-secondary-background p-6`}>
      <div className="flex flex-row items-center justify-between">
        <h1 className="font-bold text-secondary">{index}</h1>
        <span className="size-2 rounded-full bg-secondary" />
      </div>
      <h2 className="mb-2 font-bold text-primary">{title}</h2>
      <p className="text-tertiary">{description}</p>
    </div>
  );
};