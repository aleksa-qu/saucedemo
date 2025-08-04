SauceDemo E2E Tests

End-to-end tests using Playwright, TypeScript, and Faker for https://www.saucedemo.com

How to run

Install dependencies:

npm install

Run tests locally:
npx playwright test

Run tests in headed mode (debug):
npx playwright test --headed

Ryn tests in UI mode:
npx playwright test --ui

Test Scenarios
-Login (positive, negative, locked out)

-Cart operations (add, remove, check badge)

-Checkout (with generated user data)
