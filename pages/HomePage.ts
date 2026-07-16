import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  private readonly getStartedButton: Locator;
  private readonly searchInput: Locator;
  private readonly navBar: Locator;

  constructor(page: Page) {
    super(page);
    this.getStartedButton = page.getByRole('link', { name: 'Get started' });
    this.searchInput = page.getByRole('button', { name: 'Search' });
    this.navBar = page.getByRole('navigation');
  }

  async goto() {
    await this.page.goto('/');
  }

  async clickGetStarted() {
    await this.getStartedButton.click();
  }

  async clickSearch() {
    await this.searchInput.click();
  }

  async isNavBarVisible(): Promise<boolean> {
    return this.navBar.isVisible();
  }
}
