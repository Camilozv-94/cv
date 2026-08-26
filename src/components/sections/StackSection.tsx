import { useTranslations } from "next-intl";
import { Card } from "../ui/Card";

const StackSection = () => {
    const t = useTranslations("Stack");
    const content = t.raw("card") as { title: string, description: string }[];
    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-secondary font-bold">{t('title')}</h1>
            <h2 className="text-primary fornt-bold text-3xl">{t('description')}</h2>
            <p className="text-tertiary">{t('text')}</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
                {content.map((item, index) => (
                    <Card key={index} title={item.title} description={item.description} variant="stack" />
                ))}
            </div>
        </div>
    )
}

export default StackSection
