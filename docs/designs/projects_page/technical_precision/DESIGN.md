---
name: Technical Precision
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
  on-surface-variant: '#bfc7d5'
  inverse-surface: '#dee2ee'
  inverse-on-surface: '#2c313a'
  outline: '#89919e'
  outline-variant: '#404753'
  surface-tint: '#a1c9ff'
  primary: '#a1c9ff'
  on-primary: '#00325a'
  primary-container: '#0f97ff'
  on-primary-container: '#002e54'
  inverse-primary: '#0061a7'
  secondary: '#98cbff'
  on-secondary: '#003354'
  secondary-container: '#0d97eb'
  on-secondary-container: '#002c49'
  tertiary: '#b8c8de'
  on-tertiary: '#223143'
  tertiary-container: '#8695aa'
  on-tertiary-container: '#1e2e3f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d2e4ff'
  primary-fixed-dim: '#a1c9ff'
  on-primary-fixed: '#001c37'
  on-primary-fixed-variant: '#004880'
  secondary-fixed: '#cfe5ff'
  secondary-fixed-dim: '#98cbff'
  on-secondary-fixed: '#001d33'
  on-secondary-fixed-variant: '#004a77'
  tertiary-fixed: '#d4e4fb'
  tertiary-fixed-dim: '#b8c8de'
  on-tertiary-fixed: '#0d1d2d'
  on-tertiary-fixed-variant: '#39485a'
  background: '#0f141c'
  on-background: '#dee2ee'
  surface-variant: '#30353e'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  code-snippet:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an architectural, high-fidelity developer showcase for Alex Rivera. Balancing disciplined technical minimalism with electric visual precision, the interface reflects deep systems engineering expertise, refined craft, and architectural command. 

The aesthetic sits at the intersection of modern developer tooling (IDE clarity, high legibility, strict structural hierarchies) and elevated industrial minimalism. Visual weight is articulated through calibrated dark slate backgrounds, razor-thin structural borders, crisp typographic contrasts, and targeted cobalt photon emissions (ambient blue glows) to signal state, hierarchy, and system activity.

## Colors

The color architecture is built around deep, desaturated blue-slate foundations paired with a focused electric spectrum:

- **Canvas Background (`#0B1018`)**: Deep obsidian base providing infinite-contrast depth for overlaid content and code elements.
- **Card Surface (`#141C28`)**: Grounded middle-tier surface for cards, code sandboxes, and structural modules.
- **Elevated Surface (`#1D2938`)**: Highest base structural elevation for overlays, tooltips, active states, and floating navigation bars.
- **Structural Borders (`#2B3A4C`)**: Low-energy, precise delineators used at 1px thickness to anchor spatial layouts without visual clutter.
- **Primary Accent (`#0F97FF`)**: Pure electric blue reserved for active calls to action, metrics highlights, commit tags, and primary focus states.
- **Hover / Interactive Accent (`#38AAFF`)**: Elevated luminance blue for cursor interactions and kinetic feedback.
- **Text Hierarchies**: High-density `#F5F9FF` for headings and immediate legibility; muted `#A3B3C6` for prose, meta descriptors, and auxiliary code syntax.

## Typography

Typographic scale is anchored by **Space Grotesk** for display headlines, sectional titles, numerical readouts, and labels, delivering an unmistakable engineering discipline. All body copy, extended prose, technical case study breakdowns, and descriptive metadata use **Inter** to ensure optical neutrality and reading comfort at small scale. 

Titles use tight negative tracking (`-0.02em` to `-0.03em`) to project architectural density, while small UI tags and category flags leverage uppercase Space Grotesk with expanded tracking (`0.05em`) for quick scanning.

## Layout & Spacing

The layout is built upon a 12-column responsive fluid grid pinned to a maximum content width of 1280px.

- **Desktop (≥ 1024px)**: 12 columns, 1.5rem (`24px`) gutters, and 2rem (`32px`) baseline margins.
- **Tablet (768px – 1023px)**: 8 columns, 1.25rem (`20px`) gutters, and 1.5rem (`24px`) baseline margins.
- **Mobile (< 768px)**: 4 columns, 1rem (`16px`) gutters, and 1.25rem (`20px`) baseline margins.

Spacing follows an uncompromising 4px-aligned vertical rhythm. Compact gaps (`space-xs`, `space-sm`) bind interdependent technical data like metadata chips, commit hashes, and stack indicators. Generous outer block spaces (`space-lg`, `space-xl`) preserve macro-negative space, ensuring deep technical diagrams and content modules retain executive clarity.

## Elevation & Depth

Visual hierarchy does not rely on conventional heavy drop shadows. Instead, it utilizes surface layer contrast, 1px structural borders, and electric photon diffusion:

1. **Layer 0 (Canvas)**: `#0B1018` — Base ground.
2. **Layer 1 (Card & Module)**: `#141C28` with a crisp border of `1px solid #2B3A4C`.
3. **Layer 2 (Elevated & Overlays)**: `#1D2938` with `1px solid rgba(43, 58, 76, 0.9)`.
4. **Active/Focus Glow (Photon Ambient)**: Interactive triggers and active system states produce a 0px offset diffused bloom: `box-shadow: 0px 0px 24px -4px rgba(15, 151, 255, 0.25)`.
5. **Border Brightening on Hover**: Interactive elements shift border tokens from `#2B3A4C` to `#38AAFF` accompanied by a micro-halo (`0 0 12px rgba(15, 151, 255, 0.15)`), signifying immediate responsiveness.

## Shapes

The design system enforces a **Soft (1)** shape language. The subtle radius avoids both hyper-futuristic hard bevels and casual, rounded consumer curves, hitting an exact instrument-grade tone:

- **Standard Base Elements**: Inputs, technical chips, terminal badges, and primary buttons use `0.25rem` (`4px`).
- **Cards & Visual Containers (`rounded-lg`)**: Technical case cards, architectural schematics, and code frames use `0.5rem` (`8px`).
- **Modal Panels & Large Shells (`rounded-xl`)**: Primary flyouts and system diagnostics use `0.75rem` (`12px`).

## Components

### Buttons
- **Primary**: Background `#0F97FF`, text `#0B1018` (Space Grotesk 600), radius `4px`. On hover: `#38AAFF` with electric ambient glow `0 0 20px rgba(15, 151, 255, 0.4)`.
- **Secondary / Outline**: Background transparent, border `1px solid #2B3A4C`, text `#F5F9FF`. On hover: background `#1D2938`, border color `#38AAFF`, text `#38AAFF`.

### Technical Chips & Stack Badges
- Background `#1D2938`, border `1px solid #2B3A4C`, text `#A3B3C6` (Space Grotesk, 12px, tracking `0.05em`), radius `4px`.
- Active / Live status chips incorporate a 6px circular dot pulsating `#0F97FF` with a subtle radial gradient.

### Project & Architecture Cards
- Built using `#141C28` background, `1px solid #2B3A4C` perimeter border, `8px` corner radius.
- Internal hierarchy: Header with Space Grotesk headline, tech stack chip-group, body description in Inter `#A3B3C6`, and footer showing GitHub stars/commit telemetry.
- On card hover: border transitions smoothly to `#38AAFF` with ambient base glow `0 8px 32px -8px rgba(15, 151, 255, 0.15)`.

### Form Fields & Inputs
- Background `#0B1018`, border `1px solid #2B3A4C`, text `#F5F9FF`, placeholder `#A3B3C6` at 50% opacity.
- Focus state: border shifts to `#0F97FF` with an inset micro-shadow `inset 0 0 0 1px #0F97FF` and an outer ambient blur `0 0 12px rgba(15, 151, 255, 0.2)`.

### Checkboxes & Segmented Controls
- Checkboxes: `#141C28` box with `1px solid #2B3A4C`. Checked state fills `#0F97FF` with a deep `#0B1018` checkmark.
- Segmented switches (e.g., Code/Preview tabs): `#141C28` container, `#1D2938` active tab with subtle border `#2B3A4C` and vibrant `#0F97FF` bottom accent rule.

### Terminal & Code Blocks
- Container `#0B1018` with an `#1D2938` status titlebar, displaying file path in Space Grotesk and traffic-light system indicators styled in muted monochrome slates. Code typography leverages Inter at 13px with precision syntax highlights centered around `#0F97FF` and `#38AAFF`.