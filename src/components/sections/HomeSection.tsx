import Button from "../ui/Button";
import { useTranslations } from "next-intl";
const HomeSection = () => {
  const t = useTranslations("Home");
  return (
    <div className="flex flex-row my-10">
      <div className="flex flex-col flex-1 gap-4">
        <h1 className="text-4xl font-bold flex flex-col">
          {t("title.part1")}{" "}
          <span className="text-secondary">{t("title.part2")}</span>
        </h1>
        <p className="text-lg text-tertiary">{t("description")}</p>
        <div className="flex flex-row gap-4 mt-8">
          <Button title={t("experience")} variant="solid" url="#" />
          <Button title={t("about")} variant="outline" url="#" />
        </div>
      </div>
      <span className="w-1/2 h-50 bg-secondary" />
    </div>
  );
};

export default HomeSection;
