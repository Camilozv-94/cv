"use client";

import { Download } from "../icons/DownloadIcon";
import { downloadFile } from "@/lib/downloadFile";

export function DownloadButton() {
  const handleDownload = () => {
    downloadFile("/test.txt", "test.txt");
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      aria-label="Download test file"
      className="flex items-center justify-center rounded-md border border-tertiary bg-background p-2 text-primary transition-colors hover:border-secondary hover:text-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
    >
      <Download size="sm" color="currentColor" />
    </button>
  );
}
