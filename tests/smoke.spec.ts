import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';

test('basic smoke test', async ({ page }) => {
  await allure.step('Set the page content', async () => {
    await page.setContent('<h1>Playwright CI</h1>');
  });

  await allure.step('Verify the page heading', async () => {
    await expect(page.locator('h1')).toHaveText('Playwright CI');
  });
});
