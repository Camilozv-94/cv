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
    }

    return (
        <div className={`flex flex-col ${variant === 'process' && 'w-60'} p-6 rounded-xl gap-2 bg-secondary-background`}>
            {variant === 'process' && (
                <div className="flex flex-row justify-between items-center">
                    <h1 className="text-secondary font-bold">{index}</h1>
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                </div>
            )}
            <h2 className={variantStyles[variant].title}>{title}</h2>
            <p className={variantStyles[variant].description}>{description}</p>
        </div>
    )
}