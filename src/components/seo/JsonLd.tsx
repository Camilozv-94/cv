const BASE_URL = "https://camilozuluaga.dev";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Camilo Zuluaga",
  alternateName: "Camilo Zuluaga Velasquez",
  url: BASE_URL,
  jobTitle: "Senior Front-End Developer",
  description:
    "Senior Front-End Developer and Software Engineer with 7+ years of experience building enterprise-grade React applications, micro-frontend architectures, centralized design systems, and AI-driven developer tooling.",
  knowsAbout: [
    "Front-End Development",
    "Software Engineering",
    "React",
    "TypeScript",
    "Next.js",
    "Micro Frontend Architecture",
    "Design Systems",
    "AI Developer Tooling",
    "Spec-Driven Development",
    "Node.js",
    "Tailwind CSS",
    "Playwright",
    "CI/CD Pipelines",
    "Azure DevOps",
    "Accessibility",
    "Web Performance",
  ],
  sameAs: [
    "https://linkedin.com/in/camilo-zuluaga-velasquez",
    "https://github.com/Camilozv-94",
  ],
  email: "hello@camilozuluaga.dev",
  worksFor: {
    "@type": "Organization",
    name: "Globant LLC",
    url: "https://www.globant.com",
  },
  alumniOf: [
    {
      "@type": "Organization",
      name: "Globant LLC",
    },
    {
      "@type": "Organization",
      name: "Owens Illinois",
    },
    {
      "@type": "Organization",
      name: "Dream House",
    },
  ],
  hasOccupation: [
    {
      "@type": "Occupation",
      name: "Web UI Developer Senior",
      occupationLocation: {
        "@type": "Country",
        name: "Remote",
      },
      description:
        "Architected front-end solutions and micro front-end architectures, drove migration to a centralized Design System, modernized build systems to RSBuild, executed a JavaScript to TypeScript migration, and optimized end-to-end testing strategies.",
      skills:
        "React, TypeScript, Micro Frontends, RSBuild, Design Systems, Playwright, CI/CD",
    },
    {
      "@type": "Occupation",
      name: "Web Developer",
      occupationLocation: {
        "@type": "Country",
        name: "Hybrid",
      },
      description:
        "Built internal business applications utilizing React and Node.js, enhanced the corporate website utilizing PHP, JavaScript, and SQL, and managed automated CI/CD pipelines in Azure DevOps.",
      skills: "React, Node.js, PHP, JavaScript, SQL, Azure DevOps",
    },
    {
      "@type": "Occupation",
      name: "Lead Software Engineer",
      occupationLocation: {
        "@type": "Country",
        name: "In-Person",
      },
      description:
        "Developed performance-driven training simulators using Unity and C#, directed the web development team to launch the corporate website, and implemented Scrum agile practices.",
      skills: "Unity, C#, Scrum, Web Development",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Camilo Zuluaga — Portfolio & CV",
  url: BASE_URL,
  description:
    "Portfolio and CV of Camilo Zuluaga, a Senior Front-End Developer and Software Engineer specializing in enterprise React architectures, design systems, and AI tooling.",
  inLanguage: ["en", "es"],
  author: {
    "@type": "Person",
    name: "Camilo Zuluaga",
    url: BASE_URL,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "How I Build",
      item: `${BASE_URL}/#HowIBuild`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Stack",
      item: `${BASE_URL}/#Stack`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Experience",
      item: `${BASE_URL}/#Experience`,
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "About",
      item: `${BASE_URL}/#About`,
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Contact",
      item: `${BASE_URL}/#LetsTalk`,
    },
  ],
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
