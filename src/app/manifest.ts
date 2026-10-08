import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Camilo Zuluaga — Senior Front-End Developer & Software Engineer",
    short_name: "Camilo Zuluaga",
    description:
      "Portfolio and CV of Camilo Zuluaga, Senior Front-End Developer and Software Engineer specializing in React, TypeScript, micro-frontend architectures, and AI-driven tooling.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#06b6d4",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
