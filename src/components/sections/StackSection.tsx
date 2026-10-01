import { useTranslations } from "next-intl";
import ExpandableCard from "../ui/ExpandableCard";
import type { Element } from "../ui/ExpandableCard";

interface StackCard {
  title: string;
  elements: Element[];
}

const StackSection = () => {
  const t = useTranslations("Stack");
  const content = t.raw("card") as StackCard[];
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-bold text-secondary">{t("title")}</h1>
      <h2 className="text-3xl font-bold text-primary">{t("description")}</h2>
      <p className="text-tertiary">{t("text")}</p>
      <div className="mt-4 grid grid-cols-1 items-start gap-4 md:grid-cols-2">
        {content.map((item, index) => (
          <ExpandableCard
            key={index}
            title={item.title}
            elements={item.elements}
          />
        ))}
      </div>
    </div>
  );
};

export default StackSection;
