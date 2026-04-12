@sep16
Feature: Click on the next button on payment plans page   #! Test Only

    As a customer, I should be able to click on the next button on step 2,
    when I select a plan.

    #* AC1: Clicking on any plan should activate the next button
    #* AC2: When the customer clicks on the next button, the Step 3 page should be displayed.
    #* AC3: In the stepper, steps 1 and 2 should be green, and step 3 should be blue.
    #* AC4: The payment component should be displayed.
    #* AC5: A price summary should be displayed.
    #* AC6: The back button should be displayed.
    #* AC7: By default, the pay button should be displayed.


    Background:
        Given the user is on the enrollment page
        Then user has completed steps one with valid information


    #TODO: Create scenarios that cover all the acceptance criteria
    @sep16-1
    Scenario: Verify that the next button is disabled by default

        Then the next button is disabled by default
        When user clicks on the installements payment option
        Then the next button should be enabled

    @sep16-2
    Scenario: Verify that the next button will be activated when user selects installements payment option

        Then the stepper should display steps 1 in green
        And  the stepper should display steps 2 in blue
        When the user selects the installements payment option
        And  the user clicks on the next button
        Then the step 3 page should be displayed
        And  the stepper should display steps 1 in green
        And the stepper should display steps 2 in green
        And the stepper should display steps 3 in blue



    @sep16-4
    Scenario: Verify installments price summary details

        When user clicks on the installements payment option
        Then the installments price breakdown should be displayed

    @sep16-5
    Scenario: verify that the back button is displayed and enabled

        Then the back button is enabled
        When the user clicks the back button
        Then the step 1 stepper should be blue




