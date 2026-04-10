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
        And user has completed steps one with valid information
        And user is on step two of the enrollment process

    #TODO: Create scenarios that cover all the acceptance criteria
@sep16-1
    Scenario: Verify that the next button is disabled by default
       
        Then the next button is disabled by default

@sep16-2
    Scenario: Verify that the next button will be activated when user selects installements payment option
        
        When user clicks on the installements payment option
        Then the next button should be enabled

@sep16-3
    Scenario: verify that the next button will be activated when user selects installements payment option
        # Given user is on the enrollment page
        # And user has completed step one with valid information
        # And user is on the step two of the enrollment process
        When user clicks on the installements payment option
        Then the next button will be enabled

@sep16-4
    Scenario: verify that the next button will navigate to step 3 page when the user clicks on it
        # Given user is on the enrollment page
        # And user has completed step one with valid information
        # And user is on the step two of the enrollment process
        And user clicks on the upfront payment option
        When user clicks on the next button
        Then the step 3 page should be displayed
@sep16-5
    Scenario: verify that the stepper should display correct colors for steps 1, 2, and 3
        # Given user is on the enrollment page
        # And user has completed step one with valid information
        # And user is on the step two of the enrollment process
        And user clicks on the upfront payment option
        When user clicks on the next button
        Then the stepper should display steps 1 and 2 in green and step 3 in blue       
@sep16-6
    Scenario: Verify that The payment component, price summary, back button, and pay button are displayed on step 3 page
        # Given user is on the enrollment page
        # And user has completed step one with valid information
        # And user is on the step two of the enrollment process
        And user clicks on the upfront payment option
        When user clicks on the next button
        Then the payment component should be displayed
        And the price summary should be displayed
        And the back button should be displayed
        And the pay button should be displayed by default
