import { test, expect } from '@playwright/test';

test('basic smoke test', async ({ page }) => {
  await page.setContent('<h1>Playwright CI</h1>');
  await expect(page.locator('h1')).toHaveText('Playwright CI');
});
