# HTTP Interface

## Current interface

The application exposes one explicit JSON route and static assets. **No server-rendered page routes or form submission endpoints are implemented.** EJS is configured as the view engine, but no route renders a template. The root JSON response is a backend placeholder rather than a versioned resource API.

Local base URL: `http://localhost:3000` (adjust for `PORT`). No deployed base URL has been verified.

| Method | Path | Handler | Response |
| --- | --- | --- | --- |
| GET | `/` | Explicit inline application route | 200 JSON |
| GET / HEAD | `/css/theme.css` | Static middleware | CSS, or headers only for HEAD |
| Any unmatched request | Any unmatched path | Catch-all middleware | 404 JSON |

Express also handles HEAD requests for the GET root route, returning response headers without a body. No authentication or authorization middleware is configured. JSON and URL-encoded body parsers run before static delivery and route handling; no implemented application route consumes the parsed body.

## JSON endpoint: `GET /`

Returns a fixed backend status response. No path parameters, query parameters, request body, or credentials are required. Query values are not used by the handler.

```sh
curl -i http://localhost:3000/
```

**200 OK — `application/json`**

```json
{
  "status": "success",
  "message": "backend index route touced!"
}
```

The message above preserves the source's current spelling. There is no documented resource model, pagination, API version prefix, or persistence layer.

## Static asset: `GET /css/theme.css`

Serves `src/public/css/theme.css`, containing CSS custom properties for colors, fonts, spacing, shapes, and layout. No application parameters, request body, or access credentials are required.

```sh
curl -i http://localhost:3000/css/theme.css
curl -I http://localhost:3000/css/theme.css
```

A normal successful GET returns **200 OK** with a CSS content type. HEAD returns headers without the file body. Default Express static middleware may also return conditional or range responses such as 304 or 206; no custom caching or range policy is configured.

Static middleware is mounted at `/`, mapping paths relative to `src/public`. The theme file is the only current static file. Missing assets fall through to the JSON 404 handler. EJS templates and design documentation are outside the public directory.

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

Source of truth: [`src/app.js`](../src/app.js), [`server.js`](../server.js), and [`src/public/css/theme.css`](../src/public/css/theme.css). See [architecture](architecture.md) for middleware order and rendering gaps.

`npm test` runs `node --test`; currently zero tests and suites are discovered. The curl examples provide manual checks and do not imply automated coverage.

Server-rendered portfolio pages are planned, but their paths and response contracts have not been implemented. No additional API or form endpoint is specified here. TODO: Add verified page routes and deployment base URL when available.
