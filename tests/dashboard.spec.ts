import { test, expect } from '../fixtures';

test.describe('Dashboard Page', () => {
  test('displays page heading', async ({ dashboardPage, page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('sidebar is visible', async ({ dashboardPage }) => {
    expect(await dashboardPage.isSidebarVisible()).toBeTruthy();
  });

  test('displays welcome message', async ({ dashboardPage }) => {
    const message = await dashboardPage.getWelcomeMessage();
    expect(message).not.toBeNull();
  });

  test('navigates to a section via sidebar', async ({ dashboardPage, page }) => {
    await dashboardPage.navigateTo('Settings');
    await expect(page).toHaveURL(/.*settings/);
  });

  test('logout redirects to login page', async ({ dashboardPage, page }) => {
    await dashboardPage.logout();
    await expect(page).toHaveURL(/.*login/);
  });
});
