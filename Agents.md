
# Project Agent Instructions

## 1. Project Overview

This project is a professional developer portfolio built
with Node.js, Express, and EJS.

The portfolio showcases my software engineering
experience, technical skills, and full-stack projects.

The application uses server-side rendering and is
intended for production deployment on Render.

## 2. Technology Stack

- Runtime: Node.js
- Backend Framework: Express.js
- Template Engine: EJS
- Language: JavaScript
- Frontend: HTML, CSS, JavaScript
- Package Manager: npm
- Version Control: Git and GitHub
- Hosting: Render

Inspect package.json and the existing project files
to determine installed dependencies and versions.

Do not introduce new frameworks or dependencies
without explaining why they are necessary.

## 3. Architecture Guidelines

Maintain the project's existing architecture.

Follow established folder structures and naming
conventions.

Keep responsibilities separated:

- Routes: Define endpoints and attach middleware.
- Controllers: Handle HTTP requests and responses.
- Services: Encapsulate reusable business logic.
- Middleware: Handle cross-cutting request concerns.
- Views: Render presentation using EJS.
- Public: Store static assets and client-side scripts.

Do not introduce unnecessary abstraction layers.

Prefer small, focused, maintainable modules.

## 4. JavaScript Standards

- Use modern JavaScript syntax supported by the
  project's configured Node.js version.
- Follow the existing module system
  (CommonJS or ES Modules).
- Prefer const over let when reassignment
  is unnecessary.
- Avoid var.
- Use async/await for asynchronous operations.
- Handle asynchronous errors appropriately.
- Avoid duplicated logic.
- Use descriptive variable and function names.
- Keep functions focused on one responsibility.

Do not rewrite working code solely for stylistic
preferences.

## 5. Express Guidelines

- Keep route handlers concise.
- Use controllers when request logic becomes complex.
- Use services for reusable business logic.
- Validate and sanitize untrusted input appropriately.
- Use centralized error handling where appropriate.
- Never expose stack traces or sensitive internal
  information to production users.
- Do not hardcode secrets or credentials.

## 6. EJS and Frontend Guidelines

- Preserve the server-rendered EJS architecture.
- Reuse existing partials and layout patterns.
- Maintain responsive layouts.
- Use semantic HTML.
- Follow accessibility best practices.
- Preserve the established design system.
- Avoid unnecessary client-side JavaScript.
- Do not introduce Angular, React, or other frontend
  frameworks into this portfolio without approval.

## 7. Security Guidelines

- Store secrets in environment variables.
- Never commit .env files or credentials.
- Validate user-controlled input.
- Escape untrusted output appropriately.
- Avoid introducing XSS vulnerabilities.
- Use secure HTTP headers where applicable.
- Avoid exposing sensitive data in logs.

## 8. Testing and Verification

Before completing a task:

1. Review the relevant existing code.
2. Implement the smallest reasonable change.
3. Run applicable tests and linting commands
   defined in package.json.
4. Check for regressions where practical.
5. Report any tests that could not be executed.

Do not claim tests passed unless they were run.

## 9. Git and Version Control

Use Conventional Commits when suggesting
commit messages.

Examples:

feat: add portfolio project filtering
fix: resolve mobile navigation issue
refactor: extract contact form validation
style: improve project card spacing
docs: update project documentation
test: add contact controller tests

Do not commit or push changes unless explicitly
requested.

Do not modify unrelated files.

## 10. Agent Workflow

Before making changes:

1. Inspect relevant project files.
2. Understand existing implementation patterns.
3. Identify dependencies and affected components.
4. Explain the approach for substantial changes.

During implementation:

1. Prefer minimal, focused changes.
2. Preserve existing behavior unless instructed.
3. Follow project conventions.
4. Avoid unnecessary dependencies.
5. Do not perform unrelated refactoring.

After implementation:

1. Summarize the changes.
2. List modified files.
3. Describe verification performed.
4. Identify any remaining issues or risks.

## 11. Decision-Making Rules

- Prefer maintainability over cleverness.
- Prefer simplicity over premature abstraction.
- Follow existing patterns before introducing new ones.
- Ask before making significant architectural changes.
- Explain meaningful tradeoffs.
- Never silently remove existing functionality.

## 12. Developer Preferences

- Primary development environment: VS Code.
- Favor clean, production-quality code.
- Keep explanations concise but educational.
- Explain important architectural decisions.
- Help maintain my understanding of the codebase.
- Prioritize portfolio quality and employer readability.

## 13. MCP Tool Usage

### General Guidelines
- Use available MCP tools when they materially improve implementation accuracy, testing, debugging, or documentation.
- Prefer tools that are already configured and available.
- Do not invoke MCP tools unnecessarily for trivial tasks.
- If an MCP server is unavailable, continue using available alternatives and report any relevant limitations.
- Never expose credentials, secrets, or sensitive application data through MCP tools.

### Context7 — Library Documentation
- Use Context7 when implementing unfamiliar APIs, verifying framework-specific behavior, or working with version-sensitive dependencies.
- Prioritize documentation matching the versions installed in package.json.
- Use Context7 to verify current Angular, Node.js, Express, and other relevant library APIs when applicable.
- Do not introduce new dependencies or architectural patterns solely because they appear in documentation.
- Prefer official documentation and existing project conventions when resolving conflicts.

### Playwright — Browser Verification
- Use Playwright MCP when browser-based verification would materially improve confidence in a change.
- Verify affected pages, navigation, forms, and user interactions when appropriate.
- Check for relevant browser console errors and failed network requests.
- Test responsive layouts at representative desktop, tablet, and mobile viewport sizes when UI changes warrant it.
- Do not claim browser verification was completed unless the browser tests actually ran.
- Do not modify production data or perform destructive actions during browser testing.
- Report failed checks and any verification that could not be completed.

### Task Completion
- Determine whether Context7 documentation lookup or Playwright browser verification is warranted for the task.
- Use the appropriate tools when available and beneficial.
- Summarize relevant findings, verification results, and unresolved issues.
- Do not create Git commits unless explicitly requested.

## 14. Documentation Maintenance

### General Rules
- Treat project documentation as living documentation that must remain synchronized with the implemented codebase.
- Review documentation impact whenever implementing features, modifying architecture, changing APIs, updating dependencies, or changing configuration.
- Update affected documentation as part of the same task as the corresponding code changes.
- Do not modify documentation for trivial changes that do not affect documented behavior.
- Document only implemented functionality. Clearly distinguish planned features from completed functionality.
- Preserve existing documentation structure and avoid unnecessary rewrites or duplication.
- Never include secrets, credentials, API keys, or sensitive configuration values.
- Do not create speculative documentation for components, endpoints, or functionality that do not exist.

### README.md
Maintain README.md as the primary entry point for developers, reviewers, and potential employers.

Update it when changes affect:
- Project overview or major features.
- Technology stack or significant dependencies.
- Installation, configuration, and environment setup.
- Development, build, testing, or deployment commands.
- High-level architecture or application capabilities.
- Live demo URLs and project status.

Keep the README concise and link to detailed documentation rather than duplicating it.

### docs/architecture.md
Maintain architecture.md as the technical reference for the application's implemented architecture.

Update it when changes affect:
- Application structure, layers, or module responsibilities.
- Frontend and backend architectural patterns.
- Component, service, controller, or middleware responsibilities.
- Data flow, state management, and application communication.
- Authentication, authorization, or security architecture.
- Database design and persistence strategies, when applicable.
- Significant architectural decisions and tradeoffs.
- Integrations with external services.

Explain important architectural decisions and their rationale.
Do not document hypothetical components or architectural patterns as implemented.

### docs/api.md
Maintain api.md as the reference for implemented application APIs.

Update it when changes affect:
- API endpoints, HTTP methods, or routes.
- Request parameters, headers, and bodies.
- Response structures and HTTP status codes.
- Authentication and authorization requirements.
- Validation rules and error responses.
- API versioning or breaking changes.

For each documented endpoint, include its purpose, method, path, required inputs, and expected responses.

If the project does not expose an API, explicitly state that in docs/api.md and do not invent endpoints.

### Task Completion
Before completing a development task:
1. Determine whether README.md, docs/architecture.md, or docs/api.md require updates.
2. Update only the affected documents.
3. Verify that documentation accurately reflects the implemented code.
4. Include documentation changes with the related implementation changes.
5. Report which documentation files were updated, or state that no documentation changes were necessary.

Do not automatically create Git commits unless explicitly requested.