import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly errorMessage: Locator;
  private readonly rememberMeCheckbox: Locator;
  private readonly forgotPasswordLink: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.getByPlaceholder('Email ID / Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.locator('//button[text()="Login"]');
    this.errorMessage = page.getByRole('alert');
    this.rememberMeCheckbox = page.getByLabel('Remember me');
    this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot Password?' });
  }

  async goto() {
    await this.page.goto('https://www.naukri.com/nlogin/login');
  }

  async login() {
    await this.usernameInput.fill("qanath@outlook.com");
    await this.passwordInput.fill("Manas@3830");
    await this.loginButton.highlight();
    await this.loginButton.click();
  }

  async loginWithRememberMe(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.rememberMeCheckbox.check();
    await this.loginButton.click();
  }

  async getErrorMessage(): Promise<string | null> {
    return this.errorMessage.textContent();
  }

  async isErrorVisible(): Promise<boolean> {
    return this.errorMessage.isVisible();
  }

  async clickForgotPassword() {
    await this.forgotPasswordLink.click();
  }
}
