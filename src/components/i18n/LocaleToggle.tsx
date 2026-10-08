"use client";
import { changeLocale } from "@/app/actions/locale";
import { useTranslations } from "next-intl";
import { useTransition } from "react";

const LOCALES = ["en", "es"] as const;
export type Locale = (typeof LOCALES)[number];

export const LocaleToggle = ({ currentLocale }: { currentLocale: Locale }) => {
  const [isPending, startTransition] = useTransition();

  const t = useTranslations("LanguageToggle");

  const handleChangeLocale = () => {
    startTransition(() => changeLocale(currentLocale));
  };

  return (
    <button
      type="button"
      disabled={isPending}
      aria-label={t("ariaToggle", { "language": currentLocale.toUpperCase() })}
      className="flex flex-row gap-2 divide-x divide-gray-300 rounded-sm border border-tertiary bg-background p-2 text-primary hover:border-secondary disabled:opacity-50 [&>*:not(:last-child)]:pr-2 "
      onClick={handleChangeLocale}
    >
      {LOCALES.map((locale) => (
        <span
          className={
            currentLocale === locale
              ? "font-bold text-secondary"
              : "text-primary opacity-60"
          }
          key={locale}
        >
          {locale.toUpperCase()}
        </span>
      ))}
    </button>
  );
};
