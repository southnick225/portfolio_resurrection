---
name: Luminescent Precision
colors:
  surface: '#0f141c'
  surface-dim: '#0f141c'
  surface-bright: '#343943'
  surface-container-lowest: '#090e16'
  surface-container-low: '#171c24'
  surface-container: '#1b2028'
  surface-container-high: '#252a33'
  surface-container-highest: '#30353e'
  on-surface: '#dee2ee'
  on-surface-variant: '#bfc7d3'
  inverse-surface: '#dee2ee'
  inverse-on-surface: '#2c313a'
  outline: '#89919d'
  outline-variant: '#3f4851'
  surface-tint: '#98cbff'
  primary: '#98cbff'
  on-primary: '#003354'
  primary-container: '#38aaff'
  on-primary-container: '#003c63'
  inverse-primary: '#00639c'
  secondary: '#bbc7db'
  on-secondary: '#253141'
  secondary-container: '#3e4a5a'
  on-secondary-container: '#adb9cd'
  tertiary: '#4edea3'
  on-tertiary: '#003824'
  tertiary-container: '#13ba82'
  on-tertiary-container: '#00432c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#cfe5ff'
  primary-fixed-dim: '#98cbff'
  on-primary-fixed: '#001d33'
  on-primary-fixed-variant: '#004a77'
  secondary-fixed: '#d7e3f8'
  secondary-fixed-dim: '#bbc7db'
  on-secondary-fixed: '#101c2b'
  on-secondary-fixed-variant: '#3c4858'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#0f141c'
  on-background: '#dee2ee'
  surface-variant: '#30353e'
typography:
  display:
    fontFamily: Sora
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Sora
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Sora
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Sora
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  title-md:
    fontFamily: Sora
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Geist
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  code-inline:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

The design system establishes an elite engineering brand identity for a modern full-stack developer portfolio. It combines architectural precision with restrained luminescence to communicate technical mastery, computational rigor, and modern taste.

### Tone & Personality
- **Architectural & Rigorous:** Systematic spacing, tight geometric alignments, and structured containment project high engineering standards.
- **Luminescent & Modern:** Deep obsidian-navy canvas tones balanced with high-output cyan-blue accents evoke high-performance terminal environments and next-generation cloud infrastructure.
- **Direct & Confident:** Clear, high-contrast typography surfaces critical project impact, code architecture, and key metrics without visual bloat.

### Visual Style
The aesthetic merges high-performance developer ergonomics with modern glass-layering and crisp structural borders. Pure `#000000` is strictly avoided in favor of deep oceanic navy undertones (`#0B1018`), producing rich chromatic depth. Elevation relies on subtle luminance stepping, crisp hairline boundaries (`#2B3A4C`), and directional cyan glow accents rather than heavy drop shadows.

## Colors

The palette operates entirely in dark mode, balancing deep cool-toned neutrals with concentrated luminescent accents.

### Palette Architecture
- **Primary Accent (`#38AAFF` / `#0F97FF`):** Used for focal interactive controls, focus indicators, active states, and highlighted technical metrics.
- **Base Surfaces:**
  - `canvas-default`: `#0B1018` — Base viewport background.
  - `surface-subtle`: `#141C28` — Standard cards, navigation panels, and input containers.
  - `surface-elevated`: `#1D2938` — Hovered states, modal overlays, dropdowns, and highlighted code blocks.
- **Borders & Dividers:**
  - `border-default`: `#2B3A4C` — Hairline structural separation for cards and badges.
  - `border-active`: `#38AAFF` — Dynamic highlight on active inputs, interactive card hover, and focused elements.
- **Text & Foreground:**
  - `text-primary`: `#F5F9FF` — Page headers, card titles, and high-emphasis data.
  - `text-secondary`: `#A3B3C6` — Body copy, documentation text, and secondary metadata.
  - `text-muted`: `#62758D` — Inactive labels, disabled controls, and watermark details.
- **Semantic Feedback:**
  - `success`: `#10B981` (Production status, deployed indicators, live metrics)
  - `warning`: `#F59E0B` (In-progress indicators, staging tags)
  - `error`: `#EF4444` (Validation alerts, build warnings)
  - `info`: `#0F97FF` (System architecture callouts)

## Typography

The type system pairs **Sora** for display and section headlines with **Geist** for body text, data points, labels, and code fragments.

### Hierarchy & Role Principles
- **Headlines (Sora):** Sora’s geometric curves and wide counters bring distinction to section headings, hero introductions, and project titles. Tight negative tracking gives large titles a modern, tech-forward polish.
- **Body & Controls (Geist):** Geist brings Swiss-inspired modular clarity, uniform vertical proportions, and developer-grade legibility for descriptive copy, metadata rows, and navigation items.
- **Code & Metric Accents:** When rendering tech stacks, throughput metrics, or terminal snippets, Geist provides tabular alignment and optical balance against Sora headlines.

## Layout & Spacing

Layout geometry follows an 8px modular baseline to ensure consistent structural rhythm across all responsive breakpoints.

### Structural Framework
- **Max Content Boundaries:** Central content containers are clamped to a max-width of `1200px` (`75rem`), flanked by auto margins.
- **Grid Configuration:**
  - **Desktop (>= 1024px):** 12-column layout with `24px` (`1.5rem`) gutters and section vertical gaps of `96px` to `128px`.
  - **Tablet (768px - 1023px):** 8-column layout with `20px` gutters and `32px` page margins.
  - **Mobile (< 768px):** 4-column layout with `16px` (`1rem`) gutters and `16px` page margins.
- **Component Padding Scale:**
  - Compact badges and inline pills: `space-xs` (4px) vertical, `space-sm` (8px) horizontal.
  - Interactive inputs and standard buttons: `space-sm` (8px) vertical, `space-md` (16px) horizontal.
  - Cards and content modules: `space-lg` (24px) to `space-xl` (32px) internal padding.

## Elevation & Depth

Visual depth is achieved through luminance shifts, hairline border contrast, and soft luminescent back-glows instead of heavy muddy shadows.

### Elevation Hierarchy
1. **Base Floor (`#0B1018`):** The primary view surface. No elevation; receives ambient glows from primary elements.
2. **Layer 1 — Resting Containers (`#141C28`):** Project showcase cards, terminal containers, and fieldsets. Surrounded by a 1px border of `#2B3A4C`. No default drop shadow.
3. **Layer 2 — Floating & Elevated Elements (`#1D2938`):** Sticky top navigation, modal dialogs, and flyout menus. Border shifts to `rgba(56, 170, 255, 0.25)` with a multi-layered shadow:
   - `0 8px 32px -4px rgba(0, 0, 0, 0.5)`
   - `0 0 1px 1px rgba(43, 58, 76, 0.8)`
4. **Interactive Hover & Luminescence:** When interactive cards or primary buttons are engaged, a subtle cyan bloom activates:
   - Card Hover: `box-shadow: 0 12px 40px -10px rgba(15, 151, 255, 0.12); border-color: rgba(56, 170, 255, 0.45);`
   - Primary Focus / Active Glow: `box-shadow: 0 0 0 2px #0B1018, 0 0 0 4px #38AAFF, 0 0 20px rgba(56, 170, 255, 0.35);`

## Shapes

The design system uses **Level 2 (Rounded)** shape geometry, anchoring interactive elements and structural cards around an 8px–12px radius curve.

### Corner Radii Definitions
- **Controls & Badges (`rounded`, 8px / 0.5rem):** Used for input fields, buttons, code blocks, and technology tags.
- **Card Enclosures (`rounded-lg`, 12px / 0.75rem):** Standard radius for project showcase cards, preview viewports, and modal surfaces.
- **System Shells (`rounded-xl`, 16px / 1rem):** Used for large composite portfolio sections, code sandboxes, and responsive floating navigation bars.
- **Pill Overrides (`9999px`):** Reserved exclusively for live deployment indicators, version numbers, and status pips.

## Components

### 1. Navigation Bar
- **Desktop:** Floating container with `max-width: 1200px`, anchored `16px` below top viewport. Background `rgba(20, 28, 40, 0.75)` with `backdrop-filter: blur(12px)`. Hairline border `1px solid #2B3A4C`.
- **Responsive Mobile:** Glass surface drawer sliding from top or modal sheet, full width with clean 16px padding and segmented navigation links.

### 2. Button Hierarchy
- **Primary:**
  - Background: `#0F97FF` (Hover: `#38AAFF`, Active: `#0B7AD1`). Text `#0B1018` with bold weight.
  - Focus Ring: `2px solid #38AAFF` with `4px` cyan glow spread.
  - Disabled: Background `rgba(43, 58, 76, 0.5)`, text `#62758D`, border `1px solid transparent`.
- **Secondary (Elevated Ghost):**
  - Background: `#141C28`. Border: `1px solid #2B3A4C`. Text: `#F5F9FF`.
  - Hover: Background `#1D2938`, border `#38AAFF`, subtle text brighten.
- **Tertiary (Text Link):**
  - Background: Transparent. Text: `#38AAFF`.
  - Hover: Underline with text-glow; text shifts to `#F5F9FF`.

### 3. Project Showcase Cards
- **Structure:** Encapsulated within `#141C28` with `12px` border radius and `1px solid #2B3A4C`.
- **Preview Frame:** Aspect ratio `16:9` upper container with `#0B1018` background, housing live browser frame mockups or code demo renders.
- **Metric Callouts:** High-contrast key/value rows (`Sora` font for figures, `#F5F9FF`; `Geist` font for labels, `#A3B3C6`).
- **Tag Row:** Inline list of tech badges positioned cleanly at the bottom edge.

### 4. Technology Badges / Chips
- Background: `#1D2938`. Border: `1px solid #2B3A4C`. Text: `#A3B3C6` (`Geist`, 12px).
- Icon Slot: Left-aligned `14px` SVG icon container with `6px` spacing to text.
- Active/Highlight: Border changes to `#38AAFF`, text to `#F5F9FF`.

### 5. Form Inputs & Textareas
- Base: Surface `#141C28`, text `#F5F9FF`, border `1px solid #2B3A4C`, radius `8px`, vertical padding `10px`, horizontal padding `14px`.
- Placeholder: Text color `#62758D`.
- Focus State: Border color `#38AAFF`, `box-shadow: 0 0 0 2px rgba(56, 170, 255, 0.25)`.
- Error State: Border color `#EF4444`, feedback label beneath input in `12px` Geist red.
- Valid State: Border color `#10B981`.