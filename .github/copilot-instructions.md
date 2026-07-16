# Playwright Project - Copilot Instructions

This is a Playwright end-to-end testing project using TypeScript.

## Project Stack
- **Framework**: Playwright
- **Language**: TypeScript
- **Test Runner**: Playwright Test
- **Browsers**: Chromium, Firefox, WebKit

## Project Structure
- `tests/` - Test files (`.spec.ts`)
- `playwright.config.ts` - Playwright configuration
- `pages/` - Page Object Models (POM)
- `utils/` - Utility/helper functions

## Guidelines
- Use Page Object Model (POM) pattern for scalable tests
- Write tests in `tests/` directory with `.spec.ts` extension
- Use `expect` from `@playwright/test` for assertions
- Prefer `getByRole`, `getByText`, `getByLabel` locators over CSS selectors
- Run tests with `npx playwright test`
- View reports with `npx playwright show-report`
