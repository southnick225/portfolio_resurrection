# Portfolio Resurrection

A developer portfolio intended to showcase software engineering experience, technical skills, and full-stack projects. Built around an Express backend with EJS as the server-rendered presentation layer.

**Status:** Early development. The homepage renders a responsive header, hero, Technical Expertise, and Featured Engineering Projects sections with Nick Taylor branding. Remaining page sections and navigation destinations are not implemented yet.

## Tech stack

| Technology | Current usage |
| --- | --- |
| Node.js | Runtime; Node.js 24 recommended for local development. No Node.js version is pinned. |
| JavaScript | ES modules (`"type": "module"`). |
| Express | HTTP server framework; manifest range `^5.3.0`, lockfile version `5.3.0`. |
| EJS | Configured template engine; manifest range `^7.0.2`, lockfile version `7.0.2`. Renders the homepage and shared header partial. |
| HTML and CSS | Responsive header styles, theme variables, and an unused EJS 404 template. |
| npm | Dependency management and development scripts. |

Design mockups use Tailwind CSS through a CDN. Tailwind is not an installed application dependency.

## Implemented functionality

- `GET /` returns HTTP 200 with an EJS-rendered homepage with a responsive hero.
- Desktop and tablet share an 80px header; mobile uses a 64px header below 768px with an accessible dropdown.
- An initials logo and a local black-and-white profile photo appear in the header. Future navigation links are marked unavailable.
- Hero with availability badge, headline, responsive action placeholders, and engineering metrics adapted from the design references.
- Technical Expertise follows the homepage designs: four desktop skill lists, a 2×2 tablet grid with tags, and compact stacked mobile cards.
- Featured Engineering Projects render from `data/projects.json`, with alternating desktop cards and stacked tablet/mobile layouts. Reference images use external URLs; demo/source URLs are unavailable placeholders until configured.
- Responsive footer with branding/social placeholders on desktop and tablet, plus a fixed mobile navigation bar linking to Projects and Stack.
- JSON and URL-encoded request body parsing.
- Static assets served from `src/public`, including theme/header CSS and `/js/header.js`.
- Unmatched requests return a JSON 404 response; centralized error middleware returns a generic JSON 500 response.
- Configurable server port and server startup error handling.

## Architecture

```text
.
├── server.js                 # Starts the HTTP listener
├── src/
│   ├── app.js                # Express setup, middleware, route, and error handlers
│   ├── views/pages/homepage.ejs # Homepage document
│   ├── views/partials/header.ejs # Shared responsive header
│   ├── views/404.ejs          # Unused error template
│   └── public/               # Theme/header/hero CSS and mobile-menu JavaScript
├── docs/designs/              # Design guide and desktop/tablet/mobile HTML + PNG references
├── package.json
├── package-lock.json
└── LICENSE
```

The app is exported separately from the server entry point. Routes and middleware currently live in `src/app.js`; there are no separate controller or service modules yet. EJS renders templates from the module-relative `src/views` directory. The homepage includes the shared header partial. Sora and Geist load through Google Fonts, with sans-serif fallbacks; application styling uses plain CSS.

## Installation and local development

Prerequisites: Node.js 24 (recommended) and npm.

TODO: Add the repository URL. Clone the repository, then run these commands from its root:

```sh
npm ci
```

Create a local `.env` file containing:

```dotenv
PORT=3000
```

Then start development mode:

```sh
npm run dev
```

Open `http://localhost:3000` to see the homepage. Use your configured port if different.

## Environment configuration

| Variable | Default | Purpose |
| --- | --- | --- |
| `PORT` | `3000` | Port used by the HTTP listener. |

`npm run dev` loads `.env` through Node's `--env-file` option and watches for changes. Create the file before running this command; `.env` is ignored by Git.

`npm start` reads the process environment and does **not** automatically load `.env`. For example, in a POSIX shell:

```sh
PORT=3000 npm start
```

## Available scripts

| Command | Script | Purpose |
| --- | --- | --- |
| `npm start` | `node server.js` | Start the server. |
| `npm run dev` | `node --env-file=.env --watch server.js` | Load local configuration and restart on file changes. |
| `npm test` | `node --test` | Run Node's built-in test runner. |

No build or lint script is defined.

## Testing

```sh
npm test
```

The current test run discovers **zero tests and zero suites**. Automated test coverage has not been established.

With the server running, manually check:

```sh
curl -i http://localhost:3000/
curl -i http://localhost:3000/nonexistent
curl -i http://localhost:3000/css/theme.css
```

Expected results: HTTP 200 with HTML containing the Nick Taylor header for `/`; HTTP 404 with `{"message":"Route not found"}` for the unknown route; and HTTP 200 with CSS for the theme asset. Adjust the port if needed.

TODO: Add automated tests for routing, static assets, and error handling.

## Planned functionality and deployment

- Implement EJS portfolio pages to present experience, skills, and projects.
- Extend the implemented header with page sections using the references in [docs/designs](docs/designs/).
- Decide whether to render the existing 404 template; unmatched routes currently return JSON.

Render is the intended hosting platform; deployment configuration and a live deployment have not been verified.

- TODO: Document Render deployment configuration and setup.
- TODO: Add the verified deployment URL.

## License

[MIT License](LICENSE) — Copyright (c) 2026 Nick Taylor.

The existing `package.json` still declares `ISC`. TODO: Reconcile that metadata with the MIT license file.
