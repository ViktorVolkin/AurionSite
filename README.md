# Aurion Platform (Frontend)

A high-performance, fully localized Next.js web application optimized for speed, accessibility (a11y), and zero-hardcode content management. The platform is designed with a hybrid architecture utilizing Next.js Static Exports (`output: "export"`) while preserving deep dynamic features like contextual routing, schema-validated asynchronous forms, and static MDX content generation.

## 🚀 Architectural Pillars

* **Enterprise-Grade Form Architecture:** Zero-state overhead form management via `react-hook-form` coupled with runtime schema enforcement via `Zod`.
* **Static i18n Router:** Seamless multi-language capabilities using `next-intl` fine-tuned to compile into highly performant static HTML structures.
* **Strict Design System & Type Safety:** 100% TypeScript compliance with decoupled component type signatures (`.types.ts`) and modular CSS scopes.
* **A11y Compliant Execution:** Fully accessible interactive interfaces adhering to modern WAI-ARIA standards for assistive technologies.

---

## 🛠 Tech Stack & Dependencies

* **Framework:** React 19 / Next.js 16 (App Router)
* **Language:** TypeScript 5.x
* **Form & Validation:** React Hook Form, Zod, `@hookform/resolvers`
* **Styling & Motion:** CSS Modules, Framer Motion, Lenis (Smooth Scrolling), `clsx`
* **Localization:** `next-intl` (Asynchronous English and Russian localization matrices)
* **Content Management:** MDX (`@next/mdx`, `next-mdx-remote`)
* **Utilities:** `react-phone-number-input`, `swiper`
* **Performance Tooling:** `@next/bundle-analyzer`

---

## 📂 Repository Structure

The codebase layout is inspired by the principles of feature isolation, promoting clean separation of concerns and high scannability:

```text
src/
├── app/                      # Next.js App Router layer
│   ├── [locale]/             # Localized route segments
│   │   ├── blog/             # Static MDX-powered Blog Engine
│   │   └── services/         # Contextual country/ground programmatic routes
│   └── Providers/            # Root client context abstraction providers
├── components/               # UI Component Hierarchy
│   ├── pages/                # Complex page-level composite views
│   ├── shared/                # Atomic, highly reusable generic UI tokens (Buttons, Selects)
│   └── widgets/               # Autonomous, self-contained macro blocks (Forms, Header, Footer)
├── i18n/                     # Internationalization configuration & middleware logic
└── messages/                 # Static localization dictionary translation JSON assets
```

---

## 🔍 Deep Dive: Core Implementation Highlights

### 1. Context-Aware Dynamic Schema Validation

The consultation form uses an advanced, reactive validation strategy. Instead of a monolithic schema, validation requirements mutate dynamically based on the user's preferred communication medium (`method`).

Using Zod's `superRefine`, structural validation issues are directly mapped onto explicit field coordinate paths rather than generating ambiguous root-level errors:

```typescript
export const createConsultSchema = (t: ReturnType<typeof useTranslations>) =>
  z.object({
    name: z.string().min(2, { message: t("errors.nameMin") }),
    country: z.string(),
    method: z.string(),
    phoneContact: z.string().optional(),
    messengerContact: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    const isPhoneMethod = data.method === "phone" || data.method === "whatsapp";

    if (isPhoneMethod) {
      if (!data.phoneContact || !isValidPhoneNumber(data.phoneContact)) {
        ctx.addIssue({
          code: "custom",
          message: t("errors.invalidPhone"),
          path: ["phoneContact"], // Targeted error mapping
        });
      }
    } else {
      // Custom validation constraints for social handles (e.g. strict @telegram validation)
      // Automatically enforces syntax correctness and formatting boundaries
    }
  });
```

### 2. High-Fidelity UX & Accessibility (a11y) Integration

Every input interface component is engineered with programmatic accessibility guarantees. Inputs explicitly leverage `aria-invalid`, dynamically wire up error messages via `aria-describedby`, and flag asynchronous errors to screen readers using `aria-live="assertive"`.

Furthermore, a "Smart Blur" handler parses user input reactively (e.g., automatically prepending missing `@` handles to Telegram usernames on field blur), smoothing out conversion funnels.

---

## ⚡ Build and Optimization Pipeline

The application compiles into a completely decoupled standalone static deployment bundle, making it compatible with edge-networks (Cloudflare Pages, Vercel, Netlify, or AWS S3 + CloudFront).

### Available Commands

* `npm run dev` — Starts the local webpack-based development compiler with real-time hot module replacement (HMR).
* `npm run build` — Evaluates TypeScript integrity, generates static localized page bundles via `next build`, and runs static file serialization.
* `npm run lint` — Runs rigorous static analysis via ESLint 9 configuration.
