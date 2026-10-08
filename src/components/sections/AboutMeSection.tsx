import { useTranslations } from "next-intl";

const AboutMeSection = () => {
  const t = useTranslations("AboutMe");
  return (
    <div className="flex flex-col gap-2" id="About">
      <div className="mb-4 flex flex-col gap-4">
        <h1 className="section-label">{t("title")}</h1>
        <h2 className="section-title">{t("sub-title")}</h2>
        <p className="section-description">{t("introduction")}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-primary">{t("description")}</p>
        <p className="section-description">{t("second-description")}</p>
      </div>
    </div>
  );
};

export default AboutMeSection;
