# Portfolio Resurrection — Application Specification

Status labels: **Current** describes verified implementation; **Required** describes the target initial release; **Pending approval** identifies decisions or content that must be supplied before the affected work is finalized. Requirements below are not claims of implemented functionality.

## 1. Project Overview and Objectives

**Current:** An early-stage personal portfolio with an Express foundation and Google Stitch homepage design exports. The root route returns JSON, not a portfolio page.

**Required:** Present professional experience, technical skills, and full-stack projects through a lightweight, maintainable, server-rendered portfolio. Help visitors understand the developer's contributions, inspect project evidence, and make contact. Implement incrementally without replacing the Node.js/Express/EJS architecture.

## 2. Target Audience and User Experience Goals

**Required:**

- Employers and recruiters can quickly identify professional focus, relevant skills, experience, and selected work.
- Developers and technical reviewers can open project case studies and verified source/demo links.
- Potential clients can understand capabilities and contact the developer through email or approved profiles.
- Core content and navigation remain usable without client-side JavaScript; enhancements must not block access.

## 3. Technology Stack

| Status | Technology | Verified usage or requirement |
| --- | --- | --- |
| Current | Node.js and JavaScript | ES modules; module-relative paths use `import.meta.dirname`. No runtime version is pinned. |
| Current | Express | Manifest `^5.3.0`; lockfile `5.3.0`. Routing, middleware, static delivery. |
| Current | EJS | Manifest `^7.0.2`; lockfile `7.0.2`. View engine configured; rendering unused. |
| Current | HTML/CSS | Static 404 template and theme custom properties. |
| Current | npm | Dependency lockfile and start, development, test scripts. |
| Required | Existing stack | Retain Express/EJS, plain CSS, and minimal browser JavaScript. Explain any proposed dependency before adding it. |

**Required:** Do not introduce Angular, React, a database, a CMS, or a separate frontend application. Framework names in sample project descriptions do not define this portfolio's stack. Tailwind CDN usage in Stitch exports is reference-only.

## 4. Existing Application Architecture

| Existing location | Current responsibility |
| --- | --- |
| `server.js` | Imports the app, listens on `PORT` or 3000, logs startup, handles server error events. |
| `src/app.js` | Creates/exports Express; configures EJS and `views`; registers parsers, static middleware, inline root route, 404 and error handlers. |
| `src/views/404.ejs` | Unused static HTML template; no dynamic expressions. |
| `src/public/css/theme.css` | Color, typography, spacing, shape, and layout variables. |
| `docs/designs/homepage/` | Desktop, tablet, and mobile HTML/PNG design references. |
| `docs/designs/luminescent_precision/DESIGN.md` | Visual design guide. |

**Current:** Requests pass through JSON parsing, URL-encoded parsing, static middleware, the inline route, and finally JSON 404 handling. Forwarded errors reach global JSON error middleware. No separate routers, controllers, services, partials, layouts, or portfolio data modules exist. No route calls `res.render()`.

**Current:** The `views` directory setting is correct. Older documentation describing a singular `view` configuration error is stale; source code is authoritative.

**Required:** Retain the separate app/listener arrangement. Add focused route/controller modules as page handling grows, shared EJS partials for repeated presentation, and centralized static content passed to views. This separates routing, content, and presentation without adding database or service abstractions that the portfolio does not need.

## 5. Pages and Functional Requirements

| Status | Interface | Behavior |
| --- | --- | --- |
| Current | `GET /` | 200 JSON: `{"status":"success","message":"backend index route touced!"}`. |
| Current | `/css/theme.css` | Static CSS from the public directory. |
| Current | Unmatched requests | 404 JSON: `{"message":"Route not found"}`. |
| Current | Forwarded errors | 500 JSON: `{"message":"Internal server error"}`. |
| Required | `GET /` | 200 EJS-rendered HTML homepage. Intentionally replaces the JSON placeholder. |
| Required | `GET /projects/:slug` | 200 EJS-rendered case study for a known project; 404 HTML for an unknown slug. This route does not exist yet. |
| Required | Unknown page URL | Helpful HTML 404 with a working home link and HTTP 404 status. |

**Required:**

- Homepage includes an introduction, featured projects, skills, experience/about, contact, and shared navigation/footer. Section links resolve to actual section IDs.
- Featured cards link to project case studies. Each case study communicates the problem, role/contributions, approach, technologies, and supported outcomes; it provides a return path to the homepage.
- Contact uses an approved `mailto:` link and approved professional profile links. No contact form, submission endpoint, or email provider is required.
- Render source/demo links only when real URLs are available. Do not publish dead `#` links, invented projects, or unsupported claims.
- Include a résumé link only after the actual document or destination is supplied and approved. Do not create a placeholder download control.
- If compact navigation uses a toggle, it must expose its state, support keyboard operation, and preserve access to destinations without scripting.

**Pending approval:** Final personal content, featured-project selection, and résumé availability. Individual project pages are in the initial release; their exact visual design remains pending.

## 6. Project Data Structure and Content Management

**Current:** No centralized project collection, database, content API, or content editing interface exists. Stitch text is mock content.

**Required:** Maintain portfolio content in version-controlled JavaScript data modules, outside EJS markup. Use one project collection for homepage cards and case-study lookup.

| Project field | Requirement |
| --- | --- |
| `slug` | Unique, stable URL-safe identifier used for case-study lookup. |
| `title`, `summary` | Accurate project name and concise description. |
| `technologies` | List of technologies actually used by that project. |
| `role`, `contributions` | Explain personal ownership and concrete work. |
| `problem`, `approach`, `outcomes` | Case-study content; qualitative outcomes are acceptable when metrics are unavailable. |
| `featured` | Controls inclusion in the homepage's selected projects. |
| Optional images | Local asset path and appropriate alternative text for meaningful images. |
| Optional source/demo URLs | Verified public destinations; omit unavailable actions. |

**Required:** Render narrative content as escaped text, not arbitrary stored HTML. Duplicate slugs must fail content validation. Updating shared title, summary, or technologies must update both page contexts without duplicate edits. Add/edit content through repository changes; no admin UI is needed.

**Pending approval:** Real project narratives, assets, measurable outcomes, biography, employment history, skills, and public links. Never infer these from mockups.

## 7. UI/UX and Design System Requirements

**Current visual references:**

- [Desktop homepage HTML](docs/designs/homepage/desktop_portfolio_homepage_1440px/code.html) and [PNG](docs/designs/homepage/desktop_portfolio_homepage_1440px/screen.png).
- [Tablet homepage HTML](docs/designs/homepage/tablet_portfolio_homepage_768px/code.html) and [PNG](docs/designs/homepage/tablet_portfolio_homepage_768px/screen.png).
- [Mobile homepage HTML](docs/designs/homepage/mobile_portfolio_homepage_390px/code.html) and [PNG](docs/designs/homepage/mobile_portfolio_homepage_390px/screen.png).
- [Luminescent Precision guide](docs/designs/luminescent_precision/DESIGN.md).

**Required:** Follow the Stitch visual direction: dark navy surfaces, blue accents, restrained glow, readable cards, and Sora/Geist typography with fallback fonts. Reconcile the existing Space Grotesk/Inter CSS variables during future UI implementation. Centralize the resulting tokens and reuse them across homepage, case studies, and error pages.

**Required:** Treat exports as visual references rather than production code or factual content. Replace Alex Rivera, example projects, technology claims, contact addresses, statistics, and availability claims with approved content. Do not copy mock database diagrams or runtime readouts as live features. Accessibility and real content take priority over literal replication.

**Pending approval:** Project-detail layouts and conflicting details between exports/design-guide tokens. Do not invent exact missing layouts; record design decisions before implementing affected pages.

## 8. Responsive Design Requirements

**Required:**

- Use fluid layouts with content-driven breakpoints; use guide bands below 768px, 768–1023px, and 1024px upward as starting references.
- Review homepage composition at 390px, 768px, and 1440px against the respective exports; check case studies and error pages at the same widths.
- At 320px viewport width, prevent page-level horizontal scrolling, clipped text, and overlapping controls. Long URLs and technical terms must wrap safely.
- Preserve access to all content and navigation across sizes; stack cards and simplify decorative elements as space decreases.
- Images scale within their containers, and fixed/sticky navigation must not obscure anchor destinations or focused controls.

## 9. Accessibility Requirements

**Required:** Target WCAG 2.2 AA practices without claiming certification. Use semantic landmarks, one descriptive primary heading per page, logical heading order, a skip link, meaningful link names, and visible keyboard focus. All interactive controls must work with keyboard alone, with no keyboard traps.

**Required:** Meaningful images have useful alternative text; decorative images have empty alternatives. Meet text contrast of at least 4.5:1 for normal text and 3:1 for large text; essential controls/focus indicators must remain distinguishable. Do not communicate status through color alone. Respect reduced-motion preferences. Content remains usable at 200% text zoom and reflows at a 320px equivalent viewport. Touch controls must have adequate target size or spacing.

## 10. SEO and Performance Requirements

**Current:** No rendered portfolio metadata or production performance measurements exist.

**Required:** Each page has a descriptive title, language declaration, viewport metadata, and relevant description. Case-study titles/descriptions reflect the selected project. Return meaningful HTML content without requiring JavaScript execution. Do not return 200 for missing pages.

**Required:** Use appropriately sized images with explicit dimensions; lazy-load below-the-fold images, avoid blocking the primary image, and keep font requests bounded with fallback rendering. Limit browser JavaScript to useful enhancements and avoid a production Tailwind runtime CDN. Check for broken assets, console errors, and avoidable layout shifts. Record representative performance measurements during release verification rather than claiming unmeasured scores.

**Pending approval:** Production domain, canonical URLs, social-sharing image, and final metadata copy. Do not publish placeholder domains or fabricated structured data.

## 11. Security and Error Handling

**Current:** `.env` is ignored by Git. Error responses are generic JSON without stack traces. No authentication, authorization, sessions, custom validation, or security-header middleware is configured. The global handler always uses 500, including parser failures, and currently logs `error.error`.

**Required:** Escape dynamic EJS output; use raw inclusion only for trusted partial markup. Validate project identifiers through known-content lookup and validate externally supplied URLs before publication. Links opening new tabs must use appropriate opener protection. Keep secrets outside source and prevent internal error details from appearing in public responses.

**Required:** Provide helpful HTML 404/500 responses for page requests, retain appropriate client/server status distinctions, and log useful server-side errors without secrets. Maintain public asset boundaries. Review HTTP security headers against actual font/image sources before release; no new package is mandated by this specification.

## 12. Testing and Quality Requirements

**Current:** `npm test` runs `node --test`; no tests or suites are currently discovered. There is no lint or build script.

**Required:** Add focused tests using the existing test runner for homepage HTML, known/unknown project slugs, unknown page URLs, static CSS delivery, escaped dynamic content, duplicate-slug validation, and appropriate error responses. Do not introduce a test framework solely to duplicate Node's available capabilities.

**Required:** Manually verify keyboard access, focus, navigation, real links, image alternatives, reduced motion, zoom/reflow, and reference-width layouts. Check current desktop and mobile browsers and record the tested environments. Automated checks supplement manual accessibility review; they do not establish full compliance. No coverage percentage or browser matrix is claimed today.

## 13. Deployment and Environment Considerations

| Status | Setting or command | Behavior |
| --- | --- | --- |
| Current | `PORT` | Reads process environment; defaults to 3000. |
| Current | `npm start` | `node server.js`; does not automatically load `.env`. |
| Current | `npm run dev` | `node --env-file=.env --watch server.js`; requires local `.env`. |
| Current | `npm test` | `node --test`. |
| Required | Dependency installation | Use `npm ci` with the committed lockfile. |

**Current:** Render is the intended hosting platform in project instructions. No repository deployment definition, verified public URL, or pinned Node.js version exists. The app has no external data-service dependency.

**Required:** Select and record a supported Node.js version compatible with existing runtime features, configure the host-provided port, and verify startup, HTTPS delivery, static paths, and error pages in the actual hosting environment. Do not introduce containers or CI infrastructure without a demonstrated need.

**Pending approval:** Render service settings, runtime version, domain, and public URL. Existing MIT `LICENSE` and `ISC` package metadata disagree; reconciliation requires a separate approved change.

## 14. Acceptance Criteria

**Required release checklist:**

- [ ] `/` returns 200 HTML with approved introduction, projects, skills, experience/about, and contact content.
- [ ] Every published project card reaches the correct `/projects/:slug` case study; unknown slugs/URLs return helpful HTML with HTTP 404.
- [ ] Shared project data updates both homepage and case-study output; duplicate slugs are rejected and unavailable links are omitted.
- [ ] No mock identities, unsupported statistics, placeholder actions, or unapproved public contact information remain.
- [ ] Navigation, contact/profile links, and any supplied résumé work; primary content is available without JavaScript.
- [ ] Layouts are reviewed at 390px, 768px, and 1440px; 320px reflow, keyboard access, focus, contrast, and zoom checks pass.
- [ ] Page-specific titles/descriptions, working assets, appropriate image sizing, and fallback fonts are verified.
- [ ] Focused tests pass; production errors expose no secrets or stack traces and use appropriate HTTP status codes.
- [ ] Runtime and hosting settings are recorded; the deployed site passes route/static/error smoke checks over HTTPS.

## 15. Future Enhancements (Out of Scope)

**Required scope boundary:** Initial release excludes contact forms/email delivery, authentication, databases, CMS/admin editing, blog publishing, analytics integrations, project search/filtering, and theme switching. These are potential enhancements, not commitments. Angular/React migrations and architectures from future flagship applications are outside this portfolio's scope.

## 16. Unresolved Questions and Approvals

**Pending approval — publication inputs:** What biography, experience, skills, project narratives/outcomes, images, public email/profile links, and résumé should be published? Which projects are featured?

**Pending approval — design inputs:** What project-detail visual reference should guide case studies, and which reference wins where Stitch exports and guide details conflict?

**Pending approval — operations:** What Node.js version, Render settings, production domain, canonical URL, and sharing assets should be used? Should package license metadata be reconciled with the MIT file in a separate change?

These inputs block finalizing their affected content/design/deployment details, not creation of this specification. No sample content or absent configuration is considered approved by default.
