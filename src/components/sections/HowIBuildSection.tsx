import { Card } from "../ui/Card"
import { useTranslations } from 'next-intl';

const HowIBuild = () => {
    const t = useTranslations("HowIBuild");
    const content = t.raw("card") as { title: string, description: string }[];

    return (
        <div className="flex flex-col my-10 gap-2 my-8">
            <h1 className="text-secondary mb-2 font-bold">{t('title')}</h1>
            <h2 className="text-primary font-bold text-3xl">{t('description')}</h2>
            <p className="text-tertiary">A clear methodology that turns ambiguity into a predictable, high-quality outcome.</p>

            <div className="flex flex-row justify-between mt-10">
                {content.map((item, index) => (
                    <Card key={index} title={item.title} description={item.description} index={index} />
                ))}
            </div>
        </div>
    )
}

export default HowIBuild