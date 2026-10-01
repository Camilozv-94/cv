import { useTranslations } from "next-intl";
import { ExperienceItem, ExperienceRow } from "../ui/ExperienceItem";

const ExperienceSection = () => {
  const t = useTranslations("Experience");
  const content = t.raw("rows") as ExperienceRow[];
  return (
    <div className="mt-10 flex flex-col gap-2">
      <h1 className="section-label">{t("title")}</h1>
      <h2 className="section-title">{t("sub-title")}</h2>
      <div className="mt-4 flex flex-col gap-4 divide-y divide-gray-300">
        {content.map((item) => (
          <ExperienceItem key={`${item.company}-${item.title}`} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
