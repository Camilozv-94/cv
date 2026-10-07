# CV Project

This is a modern Curriculum Vitae (CV) / Portfolio web application.

## Technologies Used

- **Framework:** [Next.js](https://nextjs.org) (v16.3.1) with App Router
- **UI Library:** [React](https://react.dev) (v19.2.8)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Internationalization (i18n):** `next-intl`
- **Theming:** `next-themes` (Dark/Light mode support)

## Project Structure

The project follows a component-driven architecture inside the `src` directory:

- `src/app/` - Next.js App Router pages and layouts.
- `src/components/ui/` - Reusable UI components (e.g., ExpandableCard).
- `src/components/sections/` - Major page sections (e.g., ExperienceSection, AboutMeSection).
- `src/components/theme/` - Theming components (e.g., ThemeToggle).
- `messages/` - i18n translation files (e.g., `en.json`).
- `public/` - Static assets.
- `data/` - Static data for the CV.

## Style Guides & Conventions

We enforce code quality and styling using ESLint and Prettier-like rules (`@stylistic/eslint-plugin`).

- **Indentation:** 2 spaces.
- **Semicolons:** Always required (`semi: ["error", "always"]`).
- **Imports:** A blank line is required after import statements.
- **Variables:** Always use `const` when a variable is not reassigned.
- **Unused Variables:** Not allowed unless prefixed with an underscore (`_`).
- **Tailwind:** Classnames must follow the recommended order (`tailwindcss/classnames-order`).
- **Console Logs:** `console.log` is warned against; use `console.warn` or `console.error` when necessary.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
