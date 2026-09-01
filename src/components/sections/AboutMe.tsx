import { useTranslations } from "next-intl";

const AboutMe = () => {
  const t = useTranslations("AboutMe");
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-4 mb-4">
        <h1 className="text-secondary font-bold text-lg">{t("title")}</h1>
        <h2 className="text-primary font-bold text-2xl">{t("sub-title")}</h2>
        <p className="text-tertiary">{t("introduction")}</p>
      </div>
      <div className="flex flex-row gap-2">
        <span className="size-30 bg-secondary" />
        <div className="flex flex-col gap-2">
          <p className="text-primary">{t("description")}</p>
          <p className="text-tertiary">{t("second-description")}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
