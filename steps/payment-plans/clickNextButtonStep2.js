import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {
  paymentPlanPage,
  reviewPaymentPage,
  startApplicationPage,
} from "../../globalPagesSetup.js";
import { faker } from "@faker-js/faker";

const STEPPER_COLORS = Object.freeze({
  green: "rgb(172, 245, 138)",
  blue: "rgb(1, 201, 255)",
});

Given("the user is on the enrollment page", async function () {
  await startApplicationPage.login();
});

Then("user has completed steps one with valid information", async function () {
  await startApplicationPage.enterFirstName(faker.person.firstName());
  await startApplicationPage.enterLastName(faker.person.lastName());
  await startApplicationPage.enterEmail(faker.internet.email());
  await startApplicationPage.enterPhoneNumber("111 222 3333");
  await startApplicationPage.selectHowDidYouHearAboutUs("Google");
  await startApplicationPage.clickNextButton();
  await expect(paymentPlanPage.chooseAPaymentPlanText).toBeVisible();
});

Then("the next button is disabled by default", async function () {
  await expect(paymentPlanPage.nextButton).toBeVisible();
  await expect(paymentPlanPage.nextButton).toBeDisabled();
});

When("user clicks on the installements payment option", async function () {
  await paymentPlanPage.selectPaymentPlan("5 Installments");
});

When("the user selects the installements payment option", async function () {
  await paymentPlanPage.selectPaymentPlan("5 Installments");
});

When("the user clicks on the next button", async function () {
  await paymentPlanPage.clickNextButton();
});

Then("the next button should be enabled", async function () {
  await expect(paymentPlanPage.nextButton).toBeVisible();
  await expect(paymentPlanPage.nextButton).toBeEnabled();
});

Then(
  "the stepper should display steps {int} in green",
  async function (stepNumber) {
    await expect(paymentPlanPage.getStepCircle(stepNumber)).toHaveCSS(
      "background-color",
      STEPPER_COLORS.green,
    );
  },
);

Then(
  "the stepper should display steps {int} in blue",
  async function (stepNumber) {
    await expect(paymentPlanPage.getStepCircle(stepNumber)).toHaveCSS(
      "background-color",
      STEPPER_COLORS.blue,
    );
  },
);

Then("the step {int} page should be displayed", async function (stepNumber) {
  await expect(paymentPlanPage.getStepCircle(stepNumber)).toHaveCSS(
    "background-color",
    STEPPER_COLORS.blue,
  );
});

Then("user clicks on the next button", async function () {
  await paymentPlanPage.clickNextButton();
});

Then("the payment component should be displayed", async function () {
  await expect(reviewPaymentPage.paymentForm).toBeVisible();
});

Then("the installments price breakdown should be displayed", async function () {
  await expect(paymentPlanPage.basePriceTextUnderInstallments).toBeVisible();
  await expect(paymentPlanPage.installmentsTextUnderInstallments).toBeVisible();
  await expect(paymentPlanPage.pricePerInstallmentsTextUnderInstallments,).toBeVisible();
  await expect( paymentPlanPage.firstMonthPaymentTextUnderInstallments,).toBeVisible();
});

Then("the back button is enabled", async function () {
  await expect(paymentPlanPage.backButton).toBeEnabled();
});

When("the user clicks the back button", async function () {
  await paymentPlanPage.backButton.click();
});

Then("the step 1 stepper should be blue", async function () {
  await expect(paymentPlanPage.getStepCircle(1)).toHaveCSS(
    "background-color",
    STEPPER_COLORS.blue,
  );
});
