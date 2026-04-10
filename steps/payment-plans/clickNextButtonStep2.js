import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { paymentPlanPage, page, startApplicationPage } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";
import { faker } from "@faker-js/faker";

Given('the user is on the enrollment page', async function () {
    await startApplicationPage.login();
});

Given('user has completed steps one with valid information', async function () {
    await startApplicationPage.enterFirstName(faker.person.firstName());
    await startApplicationPage.enterLastName(faker.person.lastName());
    await startApplicationPage.enterEmail(faker.internet.email());
    await startApplicationPage.enterPhoneNumber(faker.phone.number('111 222 3333'));
    await startApplicationPage.selectHowDidYouHearAboutUs("Google");
    await startApplicationPage.clickNextButton();
    //await startApplicationPage.page.waitForTimeout(3000);
    
});

Given('user is on step two of the enrollment process', async function () {
    await expect(paymentPlanPage.inactiveNextButton).toBeVisible();
    await paymentPlanPage.page.waitForTimeout(2000);
});

Then('the next button is disabled by default', async function () {
    await expect(paymentPlanPage.inactiveNextButton).toBeDisabled();
    await paymentPlanPage.page.waitForTimeout(2000);
});

When("user clicks on the installements payment option", async function () {
  await paymentPlanPage.selectPaymentPlan("Installements");
});

Then('the next button should be enabled', async function () {
    await expect(paymentPlanPage.activeNextButton).toBeEnabled();
    await paymentPlanPage.page.waitForTimeout(2000);
});