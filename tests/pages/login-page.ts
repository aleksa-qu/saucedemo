import { Locator, Page } from '@playwright/test';
import { ProductsPage } from './products-page';
import { PASSWORD, SERVICE_URL, USERNAME } from '../../config/env-data';
import { BasePage } from './base-page';

export class LoginPage extends BasePage {
  readonly url: string = SERVICE_URL;
  readonly userNameField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;
  readonly loginCredentials: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.userNameField = page.locator('[data-test="username"]');
    this.passwordField = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.loginCredentials = page.locator('[data-test="login-credentials"]');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async open() {
    await this.page.goto(this.url);
  }
  async logIn(username: string, password: string) {
    await this.userNameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
    return new ProductsPage(this.page);
  }
}
