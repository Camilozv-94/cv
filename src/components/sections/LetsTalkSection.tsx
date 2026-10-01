import { useTranslations } from "next-intl";

const LetsTalkSection = () => {
  const t = useTranslations("LetsTalk");
  return (
    <div className="flex flex-col gap-2">
      <div className="mb-4 flex flex-col gap-4">
        <h1 className="text-lg font-bold text-secondary">{t("title")}</h1>
        <h2 className="text-2xl font-bold text-primary">{t("sub-title")}</h2>
        <p className="text-tertiary">{t("introduction")}</p>
      </div>
      <div className="flex flex-row gap-2">
        <div className="flex flex-col gap-2">
          <p className="text-primary">{t("description-title")}</p>
          <p className="text-tertiary">{t("description")}</p>
        </div>
      </div>
    </div>
  );
};

export default LetsTalkSection;
