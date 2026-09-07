"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex flex-row gap-2 rounded-md border border-tertiary bg-background p-2 text-primary"
      aria-label="Toggle Theme"
    >
      <Sun color={theme === "light" ? "var(--secondary)" : "var(--tertiary)"} />
      <div className="h-6 w-px bg-gray-300" aria-hidden="true" />
      <Moon color={theme === "dark" ? "var(--secondary)" : "var(--tertiary)"} />
    </button>
  );
}
