import Link from "../ui/Link";
import { useTranslations } from "next-intl";
import AnimatedDesignGraphic from "../ui/AnimatedDesignGraphic";

const HomeSection = () => {
  const t = useTranslations("Home");
  return (
    <div className="my-10 flex flex-row">
      <div className="flex flex-1 flex-col gap-4">
        <h1 className="flex flex-col text-3xl font-bold md:text-4xl">
          {t("title.part1")}
          <span className="text-secondary">{t("title.part2")}</span>
        </h1>
        <p className="text-lg text-tertiary">{t("description")}</p>
        <div className="mt-8 flex flex-row gap-4">
          <Link title={t("experience")} variant="solid" url="#Experience" />
          <Link title={t("about")} variant="outline" url="#About" />
        </div>
      </div>
      <div className="hidden h-50 w-1/2 md:block">
        <AnimatedDesignGraphic />
      </div>
    </div>
  );
};

export default HomeSection;
