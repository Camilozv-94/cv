export function downloadFile(filePath: string, fileName: string): void {
  const anchor = document.createElement("a");
  anchor.href = filePath;
  anchor.download = fileName;
  anchor.setAttribute("aria-hidden", "true");
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}
