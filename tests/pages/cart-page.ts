import { Locator, Page } from '@playwright/test';
import { AuthorizedPage } from './authorized-page';

export class CartPage extends AuthorizedPage {
  readonly removeItemButtonBackpack: Locator;
  readonly removeItemButtonBikeLight: Locator;
  readonly removeItemButtonOnesie: Locator;
  readonly removeItemButtonTshirtRed: Locator;
  readonly continueShoppingButton: Locator;
  readonly checkOutButton: Locator;
  readonly inventoryItem: Locator;
  readonly inventoryItem1: Locator;
  readonly inventoryItem2: Locator;

  constructor(page: Page) {
    super(page);
    this.removeItemButtonBackpack = page.locator('[data-test="remove-sauce-labs-backpack"]');
    this.removeItemButtonBikeLight = page.locator('[data-test="remove-sauce-labs-bike-light"]');
    this.removeItemButtonOnesie = page.locator('[data-test="remove-sauce-labs-onesie"]');
    this.removeItemButtonTshirtRed = page.locator(
      '[data-test="remove-test.allthethings()-t-shirt-(red)"]'
    );
    this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
    this.checkOutButton = page.locator('[data-test="checkout"]');
    this.inventoryItem = page.locator('[data-test="item-4-title-link"]');
    this.inventoryItem1 = page.locator('[data-test="item-0-title-link"]');
    this.inventoryItem2 = page.locator('[data-test="item-3-title-link"]');
  }
}
