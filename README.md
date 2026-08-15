# Northlight Landing Page

## Overview & Key Highlights

This repository contains a complete implementation of all **10 sections** (7 required + 3 optional) from the assessment brief, developed with the guidance of DESIGN-SPEC.md.

## Technology Stack & Rationale

- **React 19 + TypeScript**: For component based UI development and type safety.
- **Vite**: For the bundler and build tool.
- **Vanilla CSS Modules**: Direct mapping of the authoritative CSS variable design system, and style scoping without external framework or utility classes.

---

## Setup & Local Development

### Prerequisites

- **Node.js**: `v18.0.0` or higher
- **Package Manager**: `pnpm` (recommended), `npm`, or `yarn`

### Installation & Commands

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd northlight-landing-page
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Start the local development server:**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**

   ```bash
   pnpm build
   ```

5. **Preview production build locally:**

   ```bash
   pnpm preview
   ```

6. **Run ESLint checks:**
   ```bash
   pnpm lint
   ```

---

## Implementation & Design Decisions

- **Architectural Pattern**: Project follows Bullet Proof React directory structure (`src/features/` by domain, `src/components/` for shared UI primitives).
- **Icons**: I opted not to use the .svg Icons and instead created React components for them for faster rendering, inline DOM manipulation, and eliminating extra HTTP requests or external image loader overhead.
- **Responsive Strategy**: Layout transitions seamlessly across standard desktop (1440px), tablet (768px/900px), and mobile (390px/640px) breakpoints. this was developed mobile first.
- **Accessibility (a11y)**:
  - Accessible keyboard focus state (`:focus-visible` with offset accent ring).
  - Screen reader skip link (`Skip to main content`).
  - Correct ARIA semantics (`role="switch"`, `role="dialog"`, `aria-expanded`, `aria-controls`, `aria-label`).
  - Respects `@media (prefers-reduced-motion: reduce)` across all animated transitions.

---

## AI Assistance Attribution

AI tools were utilized during the development of this project as follows:

- **GitHub Copilot (Student Plan)**: Used within the IDE for code assistance and agent capabilities focused on web design principles and performance optimization skills. Due to Student Plan constraints, access to high-tier models was limited.
- **Web Chat Assistants (Claude, ChatGPT, Gemini)**: Used for general Q&A, conceptual discussions, and troubleshooting design implementation questions.
