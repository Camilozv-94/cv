import { useTranslations } from "next-intl";

const ExperienceSection = () => {
  const t = useTranslations("Experience");
  const content = t.raw("rows") as {
    date: string;
    location: string;
    title: string;
    company: string;
    summary: string;
  }[];
  return (
    <div className="flex flex-col gap-2 mt-10">
      <h1 className="text-secondary font-bold">{t("title")}</h1>
      <h2 className="text-primary fornt-bold text-3xl">{t("sub-title")}</h2>
      <div className="flex flex-col divide-y divide-gray-300 gap-4 mt-4">
        {content.map((item, index) => (
          <div className="flex flex-row gap-4 pb-4" key={index}>
            <div className="felx flex-col min-w-40">
              <h1 className="text-secondary text-md">{item.date}</h1>
              <p className="text-tertiary text-sm">{item.location}</p>
            </div>
            <div>
              <h1 className="text-primary font-bold text-lg">{item.title}</h1>
              <h2 className="text-tertiary text-sm">{item.company}</h2>
              <p className="text-tertiary">{item.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
