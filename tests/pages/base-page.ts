import { Locator, Page } from '@playwright/test';

export abstract class BasePage {
  readonly page: Page;
  readonly logo: Locator;

  protected constructor(page: Page) {
    this.page = page;
    this.logo = page.locator('login_logo');
  }
}
