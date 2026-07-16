import { test, expect } from '../fixtures';
import { Browser, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '@pages/DashboardPage';

test.describe.serial('Login Page', () => {
  let page: Page;
  let loginPage: LoginPage;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('displays login form elements', async () => {
    await expect(page.getByPlaceholder('Email ID / Username')).toBeVisible();
    await expect(page.getByPlaceholder('Password')).toBeVisible();
  });

  test('successful login redirects to dashboard', async () => {
    await loginPage.login();
  });

  test('Delete Existing Resume', async () => {  
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.clickCompleteProfile();
    await dashboardPage.clickDeleteResume();
});

  test('Update Resume', async () => {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.clickUploadResume();
    await page.waitForTimeout(3000);
    
  });

  test('Edit resume Headline', async () => {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.updateResumeHeadline();
    await page.waitForTimeout(3000);
  });

});
 