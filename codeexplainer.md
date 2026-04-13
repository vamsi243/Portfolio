# Code Explainer — Portfolio Application

A complete mapping of every UI element to its source file.

---

## Project Structure

```
ai-engineer-ultimate-team-portfolio/
├── public/                    # Static assets (project images)
│   ├── mystic-chess.png       # Mystic Chess project screenshot
│   ├── imageauth.png          # ImageAuth project screenshot
│   ├── langchain-multiagent.png  # LangChain MultiAgent diagram
│   └── tax-evasion-ml.jpg     # Tax Evasion ML diagram
├── src/
│   ├── main.tsx               # App entry point — mounts <App /> into #root
│   ├── App.tsx                # Root layout — sidebar + hero + dynamic sections
│   ├── index.css              # Global styles, Tailwind theme, color tokens
│   ├── constants.ts           # ALL portfolio data (info, competencies, career, projects)
│   ├── types.ts               # TypeScript interfaces for all data models
│   ├── components/            # All UI section components
│   └── lib/utils.ts           # cn() helper for conditional CSS classes
├── index.html                 # HTML shell — loads Google Fonts (Inter)
├── vite.config.ts             # Vite + React + Tailwind plugin config
├── package.json               # Dependencies and scripts
└── tsconfig.json              # TypeScript configuration
```

---

## UI → Code Mapping

### 1. Sidebar (left navigation panel)
| Element | File |
|---|---|
| Sidebar container, nav items, active state | `src/components/Sidebar.tsx` |
| Menu items list (Overview, Core Competencies, etc.) | `Sidebar.tsx` → `menuItems` array |
| "SV" avatar circle in footer | `Sidebar.tsx` → bottom `<div>` |
| Active section highlighting | `App.tsx` → `useEffect` scroll listener updates `activeSection` state |
| Click-to-scroll behavior | `App.tsx` → `scrollToSection()` |

---

### 2. Hero / About Me Section (top of page)
| Element | File |
|---|---|
| Full section layout (photo + text) | `src/App.tsx` → `<section id="overview">` |
| "About Me" tag pill | `App.tsx` → `<motion.div>` with "About Me" text |
| "Hey there, I'm Sai" heading | `App.tsx` → `<h1>` |
| Bio paragraph text | `App.tsx` → hardcoded `<p>` |
| Profile photo circle | `App.tsx` → `<img src="/profile-photo.jpg">` (falls back to "SV" initials) |
| "View Portfolio" / "Get in Touch" buttons | `App.tsx` → `scrollToSection('projects')` / `scrollToSection('contact')` |
| "Scroll to explore" animation | `App.tsx` → `<motion.div>` at bottom of section |
| Background gradient blurs | `App.tsx` → `blur-3xl` divs |

> **To add your profile photo:** Place a file named `profile-photo.jpg` in the `public/` folder.

---

### 3. Core Competencies Section
| Element | File |
|---|---|
| Section layout + heading | `src/components/PlayStyles.tsx` |
| Competency data (Python, SQL, GCP, etc.) | `src/constants.ts` → `COMPETENCIES` array |
| Category columns (Mastery, Data, Deployment, Frontend) | `PlayStyles.tsx` → groups by `category` field |
| Skill cards with icons + "ADV" badge | `PlayStyles.tsx` → maps each competency |
| Icon resolution (Terminal, Database, etc.) | `PlayStyles.tsx` → dynamic lookup from `lucide-react` |
| Competency type definition | `src/types.ts` → `CoreCompetency` interface |

---

### 4. Career Mode Section (professional timeline)
| Element | File |
|---|---|
| Section layout + heading | `src/components/CareerMode.tsx` |
| Career data (PKF, Baarez, Eliiza, Infosys) | `src/constants.ts` → `CAREER_HISTORY` array |
| Timeline vertical line + dots | `CareerMode.tsx` → absolute positioned divs |
| Role cards (period, title, org, highlights) | `CareerMode.tsx` → maps `CAREER_HISTORY` |
| Experience type definition | `src/types.ts` → `Experience` interface |

---

### 5. Key Projects Section
| Element | File |
|---|---|
| Section layout + heading | `src/components/MatchHighlights.tsx` |
| Project data (Mystic Chess, ImageAuth, etc.) | `src/constants.ts` → `PROJECTS` array |
| Project cards (image, title, description, tags) | `MatchHighlights.tsx` → maps `PROJECTS` |
| "View Live" link buttons | `MatchHighlights.tsx` → renders `project.link` |
| "See More Projects →" button | `MatchHighlights.tsx` → links to LinkedIn projects page |
| Project type definition | `src/types.ts` → `Project` interface |

**Project images are stored in `public/` folder:**
| Project | Image File |
|---|---|
| Mystic Chess | `public/mystic-chess.png` |
| ImageAuth | `public/imageauth.png` |
| LangChain MultiAgent | `public/langchain-multiagent.png` |
| Tax Evasion ML | `public/tax-evasion-ml.jpg` |

---

### 6. Contact Section
| Element | File |
|---|---|
| Section layout + heading | `src/components/ContractOffer.tsx` |
| "Let's Connect" card | `ContractOffer.tsx` → `<motion.div>` with `prof-card` class |
| Email Me / LinkedIn / GitHub buttons | `ContractOffer.tsx` → `<a>` tags with icons |
| LinkedIn URL | `https://www.linkedin.com/in/sai-chunduru12/` |
| GitHub URL | `https://github.com/vamsi243` |

---

### 7. Footer Ticker (scrolling bar at bottom)
| Element | File |
|---|---|
| Scrolling ticker bar | `src/components/FooterTicker.tsx` |
| Ticker messages (role, stack, education) | `FooterTicker.tsx` → `updates` array |
| Infinite scroll animation | `FooterTicker.tsx` → Framer Motion `animate` |

---

## Styling & Theming

| Concern | File | Details |
|---|---|---|
| Color tokens | `src/index.css` → `@theme` block | `--color-portfolio-accent`, `--color-portfolio-ink`, etc. |
| Font stack | `src/index.css` | Inter (sans-serif) for all text |
| Reusable component classes | `src/index.css` → `@layer components` | `.prof-card`, `.prof-button-primary`, `.prof-button-outline`, `.prof-sidebar-item` |
| Scrollbar styling | `src/index.css` | `::-webkit-scrollbar` rules |
| Conditional class merging | `src/lib/utils.ts` | `cn()` — wraps `clsx` + `tailwind-merge` |

---

## Data Flow

```
constants.ts (all data)
    ↓
  App.tsx (imports & passes to sections via SECTIONS array)
    ↓
  Components read directly from constants.ts imports
```

All professional data lives in **one file** (`constants.ts`). To update any portfolio content (bio, career, projects, skills), edit only this file.

---

## Unused / Legacy Files (safe to delete)

| File | Reason |
|---|---|
| `src/components/PlayerCard.tsx` | Was the hero stats card, replaced by photo |
| `src/components/ScoutReport.tsx` | Was Executive Summary section, removed |
| `src/components/ErrorBoundary.tsx` | Was Spline error wrapper, Spline removed |
| `src/types/spline.d.ts` | Type defs for removed Spline package |
| `.env.example` | Was for Gemini API key, dependency removed |
