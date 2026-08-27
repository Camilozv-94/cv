"use client";
import Button from "../ui/Button";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { Fragment } from "react";
const LOCALES = ["en", "es"] as const;

export default function Header() {
  const t = useTranslations("Header");
  const router = useRouter();
  const currentLocale = useLocale();

  const changeLocale = () => {
    const newLocale = currentLocale === "en" ? "es" : "en";
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000`;
    router.refresh();
  };

  return (
    <header className="flex flex-row items-center justify-between  w-full h-16 px-8">
      <div>
        <h1 className="text-lg font-semibold">
          Camilo Zulauaga{" "}
          <span className="text-secondary">Software Engineer </span> = Sr. Full
          Stack Developer;{" "}
        </h1>
      </div>
      <nav>
        <ul className="flex flex-row items-center gap-4 text-tertiary divide-x divide-gray-300 [&>li]:pr-3">
          <li>
            <a href="#">{t("nav.howIBuild")}</a>
          </li>
          <li>
            <a href="#">{t("nav.experience")}</a>
          </li>
          <li>
            <a href="#">{t("nav.about")}</a>
          </li>
          <li>
            <Button title={t("nav.letsTalk")} variant="neon" url="#" />
          </li>
          <li>
            <button
              type="button"
              aria-label={`Current language is ${currentLocale.toUpperCase()}. Click to switch.`}
              className="bg-background text-primary p-2  rounded-sm border border-tertiary flex flex-row gap-2 divide-x divide-gray-300 [&>*:not(:last-child)]:pr-2 "
              onClick={changeLocale}
            >
              {LOCALES.map((locale) => (
                <Fragment key={locale}>
                  <span
                    className={
                      currentLocale === locale
                        ? "text-secondary font-bold"
                        : "text-primary opacity-60"
                    }
                  >
                    {locale.toUpperCase()}
                  </span>
                </Fragment>
              ))}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
