"use server";

import { cookies } from "next/headers";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LOCALES = ["en", "es"] as const;
type Locale = (typeof LOCALES)[number];

export async function changeLocale(currentLocale: Locale) {
  const newLocale: Locale = currentLocale === "en" ? "es" : "en";
  const cookieStore = await cookies();

  cookieStore.set("locale", newLocale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    httpOnly: true,
    sameSite: "lax",
  });
}
