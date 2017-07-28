#features/test.feature
Feature: Running Cucumber with Protractor
    As a user of Disney website
    I should be able to view the movie trailers
    In order to idk why

  @preview @all
  Scenario: Movie search via quick search with watching the preview
      Given I'm on the "main" page
      Then I should see the title "Disney Movies Anywhere | Watch Your Disney, Disney • Pixar, Marvel, & Star Wars Movies"
      When I search "Mulan"
      Then I should see search results
      When I choose search result number "1"
      And  I should see the page of the movie "Mulan"
      When I click the preview button
      Then I should see the video
      When I watch the video for "3" secs
      And I close the video
      Then I should see the page of the movie "Mulan"

    @fav @all
    Scenario: Movie search via movies page
      Given I'm on the "main" page
      Then I should see the title "Disney Movies Anywhere | Watch Your Disney, Disney • Pixar, Marvel, & Star Wars Movies"
      When I hover on header option "Movies" and choose "Classics"
      Then I should see movies page with header text "Classics"
    # When I sort by "Name"
      When I find the movie "Winnie The Pooh"
      Then I should see the page of the movie "Winnie The Pooh"
      When I add movie to favorites
      Then I should see Log In popup
