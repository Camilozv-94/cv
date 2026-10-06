"use client";

import { useTheme } from "next-themes";
import { Sun } from "../icons/SunIcon";
import { Moon } from "../icons/MoonIcon";
import { useTranslations } from "next-intl";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const t = useTranslations("Theme");

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={handleToggleTheme}
      className="flex flex-row items-center  justify-center gap-2 rounded-md border border-tertiary bg-background p-2 text-primary"
      aria-label={theme === "dark"? t('ariaOnDark'):t('ariaOnLight')}
      suppressHydrationWarning
    >
      <Sun
        size="sm"
        color={theme === "light" ? "var(--secondary)" : "var(--tertiary)"}
        aria-hidden={true}
      />
      <div className="h-6 w-px bg-gray-300" aria-hidden="true" />
      <Moon
        size="sm"
        color={theme === "light" ? "var(--tertiary)" : "var(--secondary)"}
        aria-hidden={true}
      />
    </button>
  );
}
