"use client";

import { useState } from "react";
import Link from "../ui/Link";
import { ThemeToggle } from "../theme/ThemeToggle";
import { X } from "../icons/XIcon";
import { Menu } from "../icons/MenuIcon";
import { DownloadButton } from "../ui/DownloadButton";
import { Locale, LocaleToggle } from "../i18n/LocaleToggle";

interface MobileMenuProps {
  howIBuild: string;
  experience: string;
  about: string;
  letsTalk: string;
  currentLocale: Locale;
}

export default function MobileMenu({
  howIBuild,
  experience,
  about,
  letsTalk,
  currentLocale,
}: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <button
        type="button"
        onClick={toggleMenu}
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
        <ul className="flex w-full flex-col items-start gap-4 text-tertiary lg:w-auto lg:flex-row lg:items-center lg:gap-4">
          <li>
            <a
              href="#"
              onClick={closeMenu}
              className="block py-1 transition-colors hover:text-primary"
            >
              {howIBuild}
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={closeMenu}
              className="block py-1 transition-colors hover:text-primary"
            >
              {experience}
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={closeMenu}
              className="block py-1 transition-colors hover:text-primary"
            >
              {about}
            </a>
          </li>
          <li onClick={closeMenu}>
            <Link title={letsTalk} variant="neon" url="#" />
          </li>
          <li>
            <ThemeToggle />
          </li>
          <li>
            <LocaleToggle currentLocale={currentLocale} />
          </li>
          <li onClick={closeMenu}>
            <DownloadButton />
          </li>
        </ul>
      </nav>
    </>
  );
}
