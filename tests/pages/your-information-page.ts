import { Locator, Page } from '@playwright/test';
import { AuthorizedPage } from './authorized-page';
import {OverviewPage} from "./overview-page";
import { User } from '../../data/fakeUser';


export class YourInformationPage extends AuthorizedPage {
  readonly firstNameField: Locator;
  readonly lastNameField: Locator;
  readonly zipPostalCodeField: Locator;
  readonly cancelButton: Locator;
  readonly continueButton: Locator;
  readonly errorMessageCheckout: Locator;

  constructor(page: Page) {
    super(page);
    this.firstNameField = page.locator('[data-test="firstName"]');
    this.lastNameField = page.locator('[data-test="lastName"]');
    this.zipPostalCodeField = page.locator('[data-test="postalCode"]');
    this.cancelButton = page.locator('[data-test="cancel"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.errorMessageCheckout = page.locator('[data-test="error"]');
  }

  async fillUserInformation(user: User) {
    await this.firstNameField.fill(user.firstName);
    await this.lastNameField.fill(user.lastName);
    await this.zipPostalCodeField.fill(user.zipCode);
  }

  async continueToOverview(): Promise<OverviewPage> {
    await this.continueButton.click();
    return new OverviewPage(this.page);
  }
}
