# HTTP Interface

## Current interface

The application exposes a server-rendered homepage and static assets. There is no resource API or form submission endpoint. Errors remain JSON responses.

Local base URL: `http://localhost:3000` (adjust for `PORT`). No deployed base URL has been verified.

| Method | Path | Handler | Response |
| --- | --- | --- | --- |
| GET | `/` | Explicit inline application route | 200 HTML |
| GET / HEAD | `/css/theme.css` | Static middleware | CSS, or headers only for HEAD |
| GET / HEAD | `/css/header.css`, `/css/homepage.css`, `/css/footer.css`, `/js/header.js` | Static middleware | CSS or JavaScript, or headers only for HEAD |
| Any unmatched request | Any unmatched path | Catch-all middleware | 404 JSON |

Express also handles HEAD requests for the GET root route, returning response headers without a body. No authentication or authorization middleware is configured. JSON and URL-encoded body parsers run before static delivery and route handling; no implemented application route consumes the parsed body.

## Homepage: `GET /`

Returns **200 OK — `text/html`** with the EJS homepage document, shared responsive header, hero, Technical Expertise, and Featured Engineering Projects sections, and a responsive footer. No path parameters, query parameters, request body, or credentials are required. Query values are ignored.

```sh
curl -i http://localhost:3000/
```

The page displays Nick Taylor branding with an initials logo and local profile photo, desktop/tablet navigation, and a mobile dropdown below 768px. The hero displays availability, a headline, supporting text, two unavailable action links, and four engineering metrics with desktop, tablet, and mobile layouts. Section and Resume links are marked unavailable and have no destinations. Two featured projects render from `data/projects.json` below Technical Expertise, with responsive cards and unavailable demo/source actions until their URLs are configured. This replaces the previous JSON backend placeholder.

## Static asset: `GET /css/theme.css`

Serves `src/public/css/theme.css`, containing CSS custom properties for colors, fonts, spacing, shapes, and layout. No application parameters, request body, or access credentials are required.

```sh
curl -i http://localhost:3000/css/theme.css
curl -I http://localhost:3000/css/theme.css
```

A normal successful GET returns **200 OK** with a CSS content type. HEAD returns headers without the file body. Default Express static middleware may also return conditional or range responses such as 304 or 206; no custom caching or range policy is configured.

Static middleware is mounted at `/`, mapping paths relative to `src/public`. The homepage also loads `/css/header.css` (responsive header styles), `/css/homepage.css` (responsive hero styles) and `/js/header.js` (mobile dropdown behavior); these require no inputs or credentials and return 200 with CSS or JavaScript content types. Fonts load externally from Google Fonts. Missing assets fall through to the JSON 404 handler. EJS templates and design documentation are outside the public directory.

## Unmatched requests

Paths and methods not handled above reach the catch-all middleware. For example, `GET /nonexistent` and `POST /` return **404**, not a custom 405 response. No POST route is implemented.

```sh
curl -i http://localhost:3000/nonexistent
curl -i -X POST http://localhost:3000/
```

**404 Not Found — `application/json`**

```json
{
  "message": "Route not found"
}
```

The existing `404.ejs` template is not used by this handler.

## Error responses

Errors forwarded to the global error middleware receive the following response:

**500 Internal Server Error — `application/json`**

```json
{
  "message": "Internal server error"
}
```

The handler always sets status 500, including for body-parser errors such as malformed JSON; it does not preserve an error's original HTTP status. Parsing runs before routing, so a malformed supported body can produce 500 before an otherwise matching route or the 404 handler runs. Responses contain no stack trace or internal error details. There is no dedicated endpoint for triggering errors.

## Verification and planned interfaces

Source of truth: [`src/app.js`](../src/app.js), [`server.js`](../server.js), and [`src/public/css/theme.css`](../src/public/css/theme.css). See [architecture](architecture.md) for middleware order and rendering behavior.

`npm test` runs `node --test`; currently zero tests and suites are discovered. The curl examples provide manual checks and do not imply automated coverage.

Additional portfolio content and navigation destinations are planned, but no further page routes are implemented. No additional API or form endpoint is specified here. TODO: Add verified page routes and deployment base URL when available.
