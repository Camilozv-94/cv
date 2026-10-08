import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
import Header from "@/components/layout/Header";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const BASE_URL = "https://camilozuluaga.dev";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Camilo Zuluaga | Senior Front-End Developer & Software Engineer",
    template: "%s | Camilo Zuluaga",
  },
  description:
    "Camilo Zuluaga is a Senior Front-End Developer and Software Engineer with 7+ years of experience building enterprise-grade React applications, micro-frontend architectures, design systems, and AI-driven developer tooling. Specializing in TypeScript, Next.js, and scalable UI engineering.",
  keywords: [
    "Camilo Zuluaga",
    "Front End Developer",
    "Software Engineer",
    "Senior Front-End Developer",
    "React Developer",
    "TypeScript Developer",
    "Next.js Developer",
    "AI Developer",
    "Spec-Driven Developer",
    "Micro Frontend Architecture",
    "Design Systems",
    "Full Stack Developer",
    "Web UI Developer",
    "Enterprise Web Applications",
    "Accessible UI",
    "Scalable Frontend",
    "Camilo Zuluaga Velasquez",
  ],
  authors: [{ name: "Camilo Zuluaga", url: BASE_URL }],
  creator: "Camilo Zuluaga",
  publisher: "Camilo Zuluaga",
  applicationName: "Camilo Zuluaga — Portfolio & CV",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "Technology",
  alternates: {
    canonical: "/",
    languages: {
      "en": "/",
      "es": "/es",
    },
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "Camilo Zuluaga | Senior Front-End Developer & Software Engineer",
    description:
      "Senior Front-End Developer & Software Engineer with 7+ years building enterprise React apps, micro-frontend architectures, design systems, and AI tooling.",
    siteName: "Camilo Zuluaga — Portfolio & CV",
    locale: "en_US",
    alternateLocale: ["es_CO"],
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Camilo Zuluaga — Senior Front-End Developer & Software Engineer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Camilo Zuluaga | Senior Front-End Developer & Software Engineer",
    description:
      "Senior Front-End Developer & Software Engineer with 7+ years building enterprise React apps, micro-frontend architectures, design systems, and AI tooling.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "google-site-verification": "PLACEHOLDER",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider>
          <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
            <Header />
            <main className="container mx-auto flex flex-1 flex-col px-4 py-8">
              {children}
            </main>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
