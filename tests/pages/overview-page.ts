import { Locator, Page } from '@playwright/test';
import { AuthorizedPage } from './authorized-page';

export class OverviewPage extends AuthorizedPage {
  readonly paymentInformation: Locator;
  readonly shippingInformation: Locator;
  readonly priceTotal: Locator;
  readonly cancelButtonOverview: Locator;
  readonly finishButton: Locator;

  constructor(page: Page) {
    super(page);
    this.paymentInformation = page.locator('[data-test="payment-info-label"]');
    this.shippingInformation = page.getByTestId('[data-test="shipping-info-label"]');
    this.priceTotal = page.getByTestId('[data-test="total-info-label"]');
    this.cancelButtonOverview = page.getByTestId('[data-test="cancel"]');
    this.finishButton = page.locator('[data-test="finish"]');
  }
}
