"use client";

import { useTheme } from "next-themes";
import { Sun } from "../icons/SunIcon";
import { Moon } from "../icons/MoonIcon";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex flex-row items-center  justify-center gap-2 rounded-md border border-tertiary bg-background p-2 text-primary"
      aria-label="Toggle Theme"
    >
      <Sun
        size="sm"
        color={theme === "light" ? "var(--secondary)" : "var(--tertiary)"}
      />
      <div className="h-6 w-px bg-gray-300" aria-hidden="true" />
      <Moon
        size="sm"
        color={theme === "light" ? "var(--tertiary)" : "var(--secondary)"}
      />
    </button>
  );
}
