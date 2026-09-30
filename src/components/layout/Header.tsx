"use client";

import { useState } from "react";
import Button from "../ui/Button";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { Fragment } from "react";
import { ThemeToggle } from "../theme/ThemeToggle";
import { X } from "../icons/XIcon";
import { Menu } from "../icons/MenuIcon";

const LOCALES = ["en", "es"] as const;

export default function Header() {
  const t = useTranslations("Header");
  const router = useRouter();
  const currentLocale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const changeLocale = () => {
    const newLocale = currentLocale === "en" ? "es" : "en";
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000`;
    router.refresh();
  };

  const closeMenu = () => setIsOpen(false);

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

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="flex items-center justify-center rounded-md p-2 text-primary focus:ring-1 focus:ring-secondary focus:outline-none lg:hidden"
      >
        {isOpen ? (
          <X size="md" color="var(--primary)" />
        ) : (
          <Menu size="md" color="var(--primary)" />
        )}
      </button>

      <nav
        className={`
          ${isOpen ? "flex" : "hidden"} absolute
          top-16 left-0 z-50 w-full border-b border-tertiary/20
          bg-background p-6
          shadow-xl lg:static lg:flex
          lg:w-auto lg:border-none lg:bg-transparent lg:p-0 lg:shadow-none
        `}
      >
        <ul className="flex w-full flex-col items-start gap-4 text-tertiary lg:w-auto lg:flex-row lg:items-center lg:gap-4 lg:divide-x lg:divide-gray-300 lg:[&>li]:pr-3">
          <li>
            <a
              href="#"
              onClick={closeMenu}
              className="block py-1 transition-colors hover:text-primary"
            >
              {t("nav.howIBuild")}
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={closeMenu}
              className="block py-1 transition-colors hover:text-primary"
            >
              {t("nav.experience")}
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={closeMenu}
              className="block py-1 transition-colors hover:text-primary"
            >
              {t("nav.about")}
            </a>
          </li>
          <li onClick={closeMenu}>
            <Button title={t("nav.letsTalk")} variant="neon" url="#" />
          </li>
          <li>
            <ThemeToggle />
          </li>
          <li>
            <button
              type="button"
              aria-label={`Current language is ${currentLocale.toUpperCase()}. Click to switch.`}
              className="flex flex-row gap-2 divide-x divide-gray-300 rounded-sm border border-tertiary bg-background p-2 text-primary [&>*:not(:last-child)]:pr-2"
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
