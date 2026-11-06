# Portfolio Resurrection

A developer portfolio intended to showcase software engineering experience, technical skills, and full-stack projects. Built around an Express backend with EJS as the intended server-rendered presentation layer.

**Status:** Early development. The backend foundation is implemented; the homepage currently returns JSON. Responsive portfolio designs exist as reference artifacts, but the portfolio UI is not yet integrated into the application.

## Tech stack

| Technology | Current usage |
| --- | --- |
| Node.js | Runtime; Node.js 24 recommended for local development. No Node.js version is pinned. |
| JavaScript | ES modules (`"type": "module"`). |
| Express | HTTP server framework; manifest range `^5.3.0`, lockfile version `5.3.0`. |
| EJS | Configured template engine; manifest range `^7.0.2`, lockfile version `7.0.2`. No route currently renders a template. |
| HTML and CSS | An unused EJS 404 template and CSS theme variables. |
| npm | Dependency management and development scripts. |

Design mockups use Tailwind CSS through a CDN. Tailwind is not an installed application dependency.

## Implemented functionality

- `GET /` returns HTTP 200 with a JSON status response.
- JSON and URL-encoded request body parsing.
- Static assets served from `src/public`, including `/css/theme.css`.
- Unmatched requests return a JSON 404 response; centralized error middleware returns a generic JSON 500 response.
- Configurable server port and server startup error handling.

## Architecture

```text
.
├── server.js                 # Starts the HTTP listener
├── src/
│   ├── app.js                # Express setup, middleware, route, and error handlers
│   ├── views/404.ejs          # Existing template; not rendered by the app
│   └── public/css/theme.css  # CSS design tokens
├── docs/designs/              # Design guide and desktop/tablet/mobile HTML + PNG references
├── package.json
├── package-lock.json
└── LICENSE
```

The app is exported separately from the server entry point. Routes and middleware currently live in `src/app.js`; there are no separate controller or service modules yet. EJS is selected as the view engine, but view rendering and the intended views-directory configuration still need to be completed.

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

Open `http://localhost:3000` to see the current JSON response. Use your configured port if different.

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

Expected results: HTTP 200 with JSON containing `status: "success"` for `/`; HTTP 404 with `{"message":"Route not found"}` for the unknown route; and HTTP 200 with CSS for the theme asset. Adjust the port if needed.

TODO: Add automated tests for routing, static assets, and error handling.

## Planned functionality and deployment

- Implement EJS portfolio pages to present experience, skills, and projects.
- Integrate the responsive desktop, tablet, and mobile references from [docs/designs](docs/designs/).
- Complete and verify EJS view rendering, including any use of the existing 404 template.

Render is the intended hosting platform; deployment configuration and a live deployment have not been verified.

- TODO: Document Render deployment configuration and setup.
- TODO: Add the verified deployment URL.

## License

[MIT License](LICENSE) — Copyright (c) 2026 Nick Taylor.

The existing `package.json` still declares `ISC`. TODO: Reconcile that metadata with the MIT license file.
