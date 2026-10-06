import { useTranslations } from "next-intl";
import ExpandableCard from "../ui/ExpandableCard";
import { useMemo } from "react";
import ProgressElement from "../ui/ProgressElement";

interface Element {
  tech: string;
  percentage: number;
}

interface StackCard {
  title: string;
  elements: Element[];
}

const StackSection = () => {
  const t = useTranslations("Stack");
  const content = t.raw("card") as StackCard[];

  const newContent = useMemo(
    () => content.map((stack) => {
      const stackElement = stack.elements;        
      return {
        title: stack.title,
        collapsedContent: stackElement.map((element) => element.tech).join(", "),
        expandedContent: stackElement.map((element) => (
          <ProgressElement
            key={element.tech}
            tech={element.tech}
            value={element.percentage}
            aria={t("ariaProgress",{lang:element.tech, value: element.percentage})}
          />
        ))
      };
    }),[content, t]);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="section-label">{t("title")}</h1>
      <h2 className="section-title">{t("description")}</h2>
      <p className="section-description">{t("text")}</p>
      <div className="mt-4 grid grid-cols-1 items-start gap-4 md:grid-cols-2">
        {newContent.map((item) => (
          <ExpandableCard
            key={item.title}
            title={item.title}
            expandedContent={item.expandedContent}
            collapsedContent={item.collapsedContent}
          />
        ))}
      </div>
    </div>
  );
};

export default StackSection;
