import { Card } from "../ui/Card"
import content from "../../../data/content.json"

const HowIBuild = () => {
    return (
        <div className="flex flex-col my-10 gap-2 my-8">
            <h1 className="text-secondary mb-2 font-bold">How I Build</h1>
            <h2 className="text-primary font-bold text-3xl">My process</h2>
            <p className="text-tertiary">A clear methodology that turns ambiguity into a predictable, high-quality outcome.</p>

            <div className="flex flex-row justify-between mt-10">
                {content.card.map((card, index) => (
                    <Card key={card.title} title={card.title} description={card.description} index={index + 1} />
                ))}
            </div>
        </div>
    )
}

export default HowIBuild