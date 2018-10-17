Feature: AI test on my kung fu page

    As a user on the kung fu page
    I want to search for Selenium-Webdriver
    Because I want to learn more about it

    @learn
    Scenario: Check bottom of page
        Given I am on the main page
        When I explore the page
        And  I click the CTA button
        Then I should be at the bottom of the page