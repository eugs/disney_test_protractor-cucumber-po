#features/test.feature
Feature: Running Cucumber with Protractor
    As a user of Disney website
    I should be able to view the movie trailers
    In order to idk why

    Scenario: Movie search with watching the preview
        Given I'm on the main page
        Then I should see the title "Disney Movies Anywhere | Watch Your Disney, Disney • Pixar, Marvel, & Star Wars Movies"
        When I search "Mulan"
        Then I should see the results
        When I choose search result number "1"
        And  I should see the page of the movie "Mulan"
        When I click the preview button
        Then I should see the video
        When I watch the video for "3" secs
        And I close the video
        Then I should see the page of the movie "Mulan"
