import { test, expect } from '@playwright/test';
import { generateFakeUser } from '../data/fakeUser';
import { PASSWORD, USERNAME } from '../config/env-data';
import { LoginPage } from './pages/login-page';
import { CartPage } from './pages/cart-page';
import { OverviewPage } from './pages/overview-page';
import { CompletePage } from './pages/complete-page';
import { ProductsPage } from './pages/products-page';
import { YourInformationPage } from './pages/your-information-page';

let authPage: LoginPage;

test.beforeEach(async ({ page }) => {
  authPage = new LoginPage(page);
  await authPage.open();
});
test('login with valid credentials redirects to products page', async ({ page }) => {
  const productPage = await authPage.logIn(USERNAME, PASSWORD);
  await expect(productPage.productsTitle).toBeVisible();
});

test('login fails with invalid credentials', async ({ page }) => {
  await authPage.userNameField.fill('test');
  await authPage.passwordField.fill('test');
  await authPage.loginButton.click();

  await expect.soft(authPage.errorMessage).toBeVisible();
  await expect
    .soft(authPage.errorMessage)
    .toHaveText('Epic sadface: Username and password do not match any user in this service');
});

test('login fails with empty username and password', async ({ page }) => {
  await authPage.userNameField.fill('');
  await authPage.passwordField.fill('');
  await authPage.loginButton.click();
  await expect.soft(authPage.errorMessage).toBeVisible();
  await expect.soft(authPage.errorMessage).toHaveText('Epic sadface: Username is required');
});

test('locked_out_user shows proper error', async ({ page }) => {
  await authPage.userNameField.fill('locked_out_user');
  await authPage.passwordField.fill('secret_sauce');
  await authPage.loginButton.click();
  await expect(authPage.errorMessage).toHaveText(
    'Epic sadface: Sorry, this user has been locked out.'
  );
});

test('add and remove items from cart', async ({ page }) => {
  const allProductsPage = await authPage.logIn(USERNAME, PASSWORD);

  await allProductsPage.addToCartButtonBackpack.click();
  await expect.soft(allProductsPage.shoppingCartBadge).toHaveText('1');
  await allProductsPage.addToCartButtonBikeLight.click();
  await allProductsPage.addToCartButtonTshirtRed.click();
  await allProductsPage.addToCartButtonOnesie.click();
  await expect.soft(allProductsPage.shoppingCartBadge).toHaveText('4');

  await allProductsPage.shoppingCartIcon.click();
  const cartPage = new CartPage(page);
  await expect.soft(cartPage.shoppingCartBadge).toHaveText('4');
  await expect.soft(cartPage.removeItemButtonBackpack).toBeVisible();
  await expect.soft(cartPage.removeItemButtonBikeLight).toBeVisible();
  await expect.soft(cartPage.removeItemButtonTshirtRed).toBeVisible();
  await expect.soft(cartPage.removeItemButtonOnesie).toBeVisible();

  await cartPage.removeItemButtonBackpack.click();
  await expect.soft(cartPage.removeItemButtonBackpack).toHaveCount(0);
  await expect.soft(cartPage.shoppingCartBadge).toHaveText('3');
});

test('successful checkout with valid user info', async ({ page }) => {
  const allProductsPage = await authPage.logIn(USERNAME, PASSWORD);
  await allProductsPage.addToCartButtonBackpack.click();
  await allProductsPage.addToCartButtonBikeLight.click();
  await allProductsPage.addToCartButtonTshirtRed.click();
  await allProductsPage.shoppingCartIcon.click();

  const cartPage = new CartPage(page);
  await expect.soft(cartPage.inventoryItem).toHaveText('Sauce Labs Backpack');
  await expect.soft(cartPage.inventoryItem1).toHaveText('Sauce Labs Bike Light');
  await expect.soft(cartPage.inventoryItem2).toHaveText('Test.allTheThings() T-Shirt (Red)');
  await cartPage.checkOutButton.click();

  const infoPage = new YourInformationPage(page);
  const user = generateFakeUser();

  await infoPage.fillUserInformation(user);
  const overviewPage = await infoPage.continueToOverview();

  await overviewPage.finishButton.click();

  const completePage = new CompletePage(page);
  await expect(completePage.backHomeButton).toBeVisible();
});
