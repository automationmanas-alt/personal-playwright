# personal-playwright

A simple Playwright project with a GitHub Actions workflow and a smoke test.

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Install Playwright browsers:
   ```bash
   npx playwright install
   ```
3. Run the smoke test:
   ```bash
   npm test
   ```

## Scripts

- `npm test` — run the Playwright suite
- `npm run test:headed` — run tests in headed mode
- `npm run test:debug` — run tests in debug mode
- `npm run test:ui` — open Playwright UI mode
- `npm run build` — compile TypeScript

## CI

A GitHub Actions workflow is included in [.github/workflows/playwright.yml](.github/workflows/playwright.yml) and runs on pushes and pull requests.
