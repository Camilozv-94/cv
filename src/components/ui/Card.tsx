interface CardProps {
    title: string;
    description: string;
    index: number;
}

export const Card = ({ title, description, index }: CardProps) => {
    return (
        <div className="flex flex-col w-60 p-6 rounded-xl bg-secondary-background gap-2">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-secondary font-bold">{index}</h1>
                <span className="w-2 h-2 rounded-full bg-secondary" />
            </div>
            <h2 className="text-primary font-bold mb-2">{title}</h2>
            <p className="text-tertiary">{description}</p>
        </div>
    )
}