import { BasePage } from './base-page';
import { Locator, Page } from '@playwright/test';

export class AuthorizedPage extends BasePage {
  readonly footer: Locator;
  readonly shoppingCartIcon: Locator;
  readonly hamburgerMenu: Locator;
  readonly filterIcon: Locator;
  readonly logOutButton: Locator;
  readonly resetAppStateButton: Locator;
  readonly closeHamburgerMenuButton: Locator;
  readonly aboutButton: Locator;
  readonly allItemsButton: Locator;
  readonly shoppingCartBadge: Locator;

  constructor(page: Page) {
    super(page);
    this.shoppingCartIcon = page.locator('[data-test="shopping-cart-link"]');
    this.hamburgerMenu = page.getByRole('button', { name: 'Open Menu' });
    this.filterIcon = page.locator('[data-test="product-sort-container"]');
    this.footer = page.locator('[data-test="footer"]');
    this.logOutButton = page.getByTestId('logout_sidebar_link');
    this.resetAppStateButton = page.getByTestId('reset_sidebar_link');
    this.closeHamburgerMenuButton = page.getByTestId('react-burger-cross-btn');
    this.aboutButton = page.getByTestId('about_sidebar_link');
    this.allItemsButton = page.getByTestId('inventory_sidebar_link');
    this.shoppingCartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }
}
