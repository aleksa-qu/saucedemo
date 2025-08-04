import { Locator, Page } from '@playwright/test';
import { AuthorizedPage } from './authorized-page';

export class CompletePage extends AuthorizedPage {
  readonly backHomeButton: Locator;

  constructor(page: Page) {
    super(page);
    this.backHomeButton = page.locator('[data-test="back-to-products"]');
  }
}
