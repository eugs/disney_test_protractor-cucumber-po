#features/test.feature
Feature: Running Cucumber with Protractor
    As a user of Protractor
    I should be able to use Cucumber
    In order to run my E2E tests

    Scenario: Protractor and Cucumber Test
        Given I'm on the main page
        Then I should see the title "Disney Movies Anywhere | Watch Your Disney, Disney • Pixar, Marvel, & Star Wars Movies"
        When I search "Mulan"
        Then I should see the results
        Then I should see the page of the movie "Mulan"
        When I click the preview button
        Then I should see the video
        When I watch the video for "5" secs
        And I close the video
        Then I should see the page of the movie "Mulan"
