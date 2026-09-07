"use client";
import Button from "../ui/Button";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { Fragment } from "react";
import { ThemeToggle } from "../theme/ThemeToggle";

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
    <header className="flex h-16 w-full flex-row  items-center justify-between px-8">
      <div>
        <h1 className="text-lg font-semibold">
          Camilo Zulauaga{" "}
          <span className="text-secondary">Software Engineer </span> = Sr. Full
          Stack Developer;{" "}
        </h1>
      </div>
      <nav>
        <ul className="flex flex-row items-center gap-4 divide-x divide-gray-300 text-tertiary [&>li]:pr-3">
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
            <ThemeToggle />
          </li>
          <li>
            <button
              type="button"
              aria-label={`Current language is ${currentLocale.toUpperCase()}. Click to switch.`}
              className="flex flex-row gap-2  divide-x divide-gray-300 rounded-sm border border-tertiary bg-background p-2 text-primary [&>*:not(:last-child)]:pr-2"
              onClick={changeLocale}
            >
              {LOCALES.map((locale) => (
                <Fragment key={locale}>
                  <span
                    className={
                      currentLocale === locale
                        ? "font-bold text-secondary"
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
