import Button from "../ui/Button";
import { useTranslations } from "next-intl";

const HomeSection = () => {
  const t = useTranslations("Home");
  return (
    <div className="my-10 flex flex-row">
      <div className="flex flex-1 flex-col gap-4">
        <h1 className="flex flex-col text-4xl font-bold">
          {t("title.part1")}{" "}
          <span className="text-secondary">{t("title.part2")}</span>
        </h1>
        <p className="text-lg text-tertiary">{t("description")}</p>
        <div className="mt-8 flex flex-row gap-4">
          <Button title={t("experience")} variant="solid" url="#" />
          <Button title={t("about")} variant="outline" url="#" />
        </div>
      </div>
      <span className="h-50 w-1/2 bg-secondary" />
    </div>
  );
};

export default HomeSection;
