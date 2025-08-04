import { Locator, Page } from '@playwright/test';
import { AuthorizedPage } from './authorized-page';

export class ProductsPage extends AuthorizedPage {
  readonly addToCartButtonBackpack: Locator;
  readonly addToCartButtonBikeLight: Locator;
  readonly addToCartButtonTshirtRed: Locator;
  readonly addToCartButtonOnesie: Locator;
  readonly productsTitle: Locator;

  constructor(page: Page) {
    super(page);
    this.addToCartButtonBackpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.addToCartButtonBikeLight = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
    this.addToCartButtonTshirtRed = page.locator(
      '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]'
    );
    this.addToCartButtonOnesie = page.locator('[data-test="add-to-cart-sauce-labs-onesie"]');
    this.productsTitle = page.locator('[data-test="title"]');
  }
}
