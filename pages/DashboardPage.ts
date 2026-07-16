import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  private readonly welcomeMessage: Locator;
  private readonly userMenu: Locator;
  private readonly logoutButton: Locator;
  private readonly sidebar: Locator;
  private readonly pageHeading: Locator;
  private readonly uploadResume: Locator;
  private readonly completeProfile: Locator;
  private readonly deleteResumeButton: Locator;
  private readonly deleteResumeConfirm: Locator;
  private readonly editResumeHeadlineButton: Locator;
  private readonly editResumeInputField: Locator;
  private readonly saveButtonHeadlineText: Locator;

  constructor(page: Page) {
    super(page);
    this.welcomeMessage = page.getByTestId('welcome-message');
    this.userMenu = page.getByRole('button', { name: 'User menu' });
    this.logoutButton = page.getByRole('menuitem', { name: 'Logout' });
    this.sidebar = page.getByRole('navigation', { name: 'Sidebar' });
    this.pageHeading = page.getByRole('heading', { level: 1 });
    this.uploadResume = page.locator('//span[text()="Upload resume"]');
    this.completeProfile = page.getByRole('link', { name: 'Complete profile' });
    this.deleteResumeButton = page.locator('//span[@data-title="delete-resume"]');
    this.deleteResumeConfirm = page.locator('(//button[text()="Delete"])[2]');
    this.editResumeHeadlineButton = page.locator('(//span[@class="edit icon"])[1]');
    this.editResumeInputField = page.locator('#resumeHeadlineTxt');
    this.saveButtonHeadlineText = page.locator('//button[text()="Save"]');
  }

  async goto() {
    await this.page.goto('/dashboard');
  }

  async getWelcomeMessage(): Promise<string | null> {
    return this.welcomeMessage.textContent();
  }

  async getPageHeading(): Promise<string | null> {
    return this.pageHeading.textContent();
  }

  async logout() {
    await this.userMenu.click();
    await this.logoutButton.click();
  }

  async isSidebarVisible(): Promise<boolean> {
    return this.sidebar.isVisible();
  }

  async navigateTo(sectionName: string) {
    await this.sidebar.getByRole('link', { name: sectionName }).click();
  }

  async clickCompleteProfile() {
    await this.completeProfile.click();
  }

  async isCompleteProfileVisible(): Promise<boolean> {
    return this.completeProfile.isVisible();
  }

    async clickDeleteResume() {
    await this.deleteResumeButton.click();
    await this.deleteResumeConfirm.click();
    }

  async clickUploadResume() {
    const fileUploadPromise = this.page.waitForEvent('filechooser');
    await this.uploadResume.click();
    const fileChooser = await fileUploadPromise;
    await fileChooser.setFiles('/Users/manasranjannath/Desktop/Playwright Project/Manas_Resume_2026.pdf');
  }

  async updateResumeHeadline() {
    await this.editResumeHeadlineButton.click();
    await this.editResumeInputField.fill('Senior Software Development Engineer in Test with expertise in Automation, Web, Mobile & API Testing');
    await this.saveButtonHeadlineText.click();
  }

}
