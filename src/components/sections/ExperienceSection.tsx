import { useTranslations } from "next-intl";

interface ExperienceRow {
  date: string;
  location: string;
  title: string;
  company: string;
  summary: string;
}

const ExperienceSection = () => {
  const t = useTranslations("Experience");
  const content = t.raw("rows") as ExperienceRow[];
  return (
    <div className="mt-10 flex flex-col gap-2">
      <h1 className="font-bold text-secondary">{t("title")}</h1>
      <h2 className="text-3xl font-bold text-primary">{t("sub-title")}</h2>
      <div className="mt-4 flex flex-col gap-4 divide-y divide-gray-300">
        {content.map((item) => (
          <div className="flex flex-col gap-4 pb-4 md:flex-row" key={`${item.company}-${item.title}`}>
            <div className="flex min-w-40 flex-col">
              <h1 className="text-base text-secondary">{item.date}</h1>
              <p className="text-sm text-tertiary">{item.location}</p>
            </div>
            <div>
              <h1 className="text-lg font-bold text-primary">{item.title}</h1>
              <h2 className="text-sm text-tertiary">{item.company}</h2>
              <p className="text-tertiary">{item.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
