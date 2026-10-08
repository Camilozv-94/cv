import { getTranslations, getLocale } from "next-intl/server";
import MobileMenu from "./MobileMenu";

export default async function Header() {
  const t = await getTranslations("Header");
  const currentLocale = await getLocale();

  return (
    <header className="relative flex h-16 w-full flex-row items-center justify-between border-b border-tertiary/10 bg-background px-4 md:px-8">
      <div>
        <h1 className="text-base font-semibold sm:text-lg">
          {t("title.part1")}
          <span className="hidden sm:inline">
            <span className="text-secondary">{t("title.part2")}</span>{" "}
            {t("title.part3")}
          </span>
        </h1>
      </div>

      <MobileMenu
        howIBuild={t("nav.howIBuild")}
        experience={t("nav.experience")}
        about={t("nav.about")}
        letsTalk={t("nav.letsTalk")}
        stack={t("nav.stack")}
        currentLocale={currentLocale as "en" | "es"}
      />
    </header>
  );
}
