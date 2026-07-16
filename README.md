# Playwright E2E Testing Project

A scalable end-to-end testing project built with [Playwright](https://playwright.dev/) and TypeScript, following the Page Object Model (POM) pattern.

## 🛠️ Tech Stack

- **Playwright** - Browser automation & testing framework
- **TypeScript** - Type-safe test development
- **Browsers** - Chromium, Firefox, WebKit (Desktop & Mobile)

## 📁 Project Structure

```
├── tests/               # Test spec files (.spec.ts)
│   ├── home.spec.ts     # UI tests for Home page
│   └── api.spec.ts      # API tests
├── pages/               # Page Object Models
│   ├── BasePage.ts      # Base page with shared methods
│   └── HomePage.ts      # Home page POM
├── fixtures/            # Custom Playwright fixtures
│   └── index.ts         # Extended test with fixtures
├── utils/               # Helper functions
│   └── helpers.ts       # Utility functions
├── playwright.config.ts # Playwright configuration
└── tsconfig.json        # TypeScript configuration
```

## 🚀 Getting Started

### Install dependencies

```bash
npm install
```

### Install browsers

```bash
npx playwright install
```

## ▶️ Running Tests

| Command | Description |
|---|---|
| `npm test` | Run all tests (headless) |
| `npm run test:headed` | Run tests with browser UI |
| `npm run test:ui` | Open Playwright UI mode |
| `npm run test:debug` | Run tests in debug mode |
| `npm run test:chromium` | Run tests on Chromium only |
| `npm run test:firefox` | Run tests on Firefox only |
| `npm run test:webkit` | Run tests on WebKit only |
| `npm run report` | Open the HTML test report |
| `npm run codegen` | Launch Playwright Codegen |

## 📊 Reports

After running tests, view the HTML report:

```bash
npm run report
```

## ✍️ Writing Tests

Follow the Page Object Model pattern. Add new page classes in `pages/` and tests in `tests/`.

```typescript
import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
```
