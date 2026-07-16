import { test, expect } from '../fixtures';

test.describe('Home Page', () => {
  test('has correct title', async ({ homePage, page }) => {
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('navigation bar is visible', async ({ homePage }) => {
    expect(await homePage.isNavBarVisible()).toBeTruthy();
  });

  test('Get Started button navigates to docs', async ({ homePage, page }) => {
    await homePage.clickGetStarted();
    await expect(page).toHaveURL(/.*intro/);
  });
});
