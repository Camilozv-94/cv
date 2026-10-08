"use client";

import { useTranslations } from "next-intl";
import { Download } from "../icons/DownloadIcon";
import { downloadFile } from "@/lib/downloadFile";

const FILE_NAME = "Camilo Zuluaga-CV.pdf";

export function DownloadButton() {
  const handleDownload = () => {
    downloadFile(`/${FILE_NAME}`, FILE_NAME);
  };

  const t = useTranslations("Download");
  return (
    <button
      type="button"
      onClick={handleDownload}
      aria-label={t("ariaButton")}
      className="flex items-center justify-center rounded-md border border-tertiary bg-background p-2 text-primary transition-colors hover:border-secondary hover:text-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
    >
      <Download size="sm" color="currentColor" />
    </button>
  );
}
