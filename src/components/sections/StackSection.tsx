import { useTranslations } from "next-intl";
import { Card } from "../ui/Card";

const StackSection = () => {
  const t = useTranslations("Stack");
  const content = t.raw("card") as { title: string; description: string }[];
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-bold text-secondary">{t("title")}</h1>
      <h2 className="text-3xl font-bold text-primary">{t("description")}</h2>
      <p className="text-tertiary">{t("text")}</p>
      <div className="mt-4 grid grid-cols-2 gap-4">
        {content.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            variant="stack"
          />
        ))}
      </div>
    </div>
  );
};

export default StackSection;
