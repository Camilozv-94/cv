import { useTranslations } from "next-intl";

const LetsTalkSection = () => {
  const t = useTranslations("LetsTalk");
  return (
    <div className="flex flex-col gap-2">
      <div className="mb-4 flex flex-col gap-4">
        <h1 className="section-label">{t("title")}</h1>
        <h2 className="section-title">{t("sub-title")}</h2>
        <p className="section-description">{t("introduction")}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-primary">{t("description-title")}</p>
        <p className="section-description">{t("description")}</p>
      </div>
    </div>
  );
};

export default LetsTalkSection;
