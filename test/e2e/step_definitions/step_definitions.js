//features/step_definitions/my_step_definitions.js
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;
var {defineSupportCode} = require('cucumber');
var protractor = require('protractor');
var EC = protractor.ExpectedConditions;

var pageFactory = require('../support/pages/pageFactory.js');

defineSupportCode(function({Given, When, Then}) {

  //TODO refactor
  Given(/^I'm on the main page$/, function() {

    return browser.get('https://www.disneymoviesanywhere.com/');
  });

  //TODO refactor
  // Given(/^I'm on the search page$/, function() {
  //   return browser.get('https://www.disneymoviesanywhere.com/movies/disney-pixar');
  // });

  When(/^I hover on header option "([^"]*)" and choose "([^"]*)"$/, function(menuOption, subOption) {
    //TODO REMOVE
      pageFactory.getPage('results');

      pageFactory.currentPage.header.hoverAndChoose(menuOption, subOption)
//TODO remove
      // .then((elem) => {
      //   elem.click();
        browser.navigate().refresh();
      // })
  });

  Then(/^I should see movies page with header text "([^"]*)"$/, function(expTitle) {
    var current = pageFactory.getPage('results');
    current.getCategoryTitle().getText()
    // pageFactory.currentPage.getCategoryTitle().getText()
      .then((title) => {
        // console.log("TITLE: ", title);
        expect(title).to.be.equal(expTitle)
      })
  });


  When(/^I find the movie "([^"]*)"$/, function(title) {
    pageFactory.getPage('results');
    // pageFactory.currentPage.getSortDropdown();

    //TODO scroll
      var movie = pageFactory.currentPage.findMovieInList(title);
      movie.click();

          // return browser.executeScript("arguments[0].scrollIntoView();", movie);

      // var we = movie.getWebElement();
      // browser.executeScript("arguments[0].scrollIntoView();", we)

      //  pageFactory.currentPage.findMovieInList(title)
      //   .then(function (movie) {
      //     browser.executeScript("arguments[0].scrollIntoView();", movie.getWebElement())
      //     movie.click();
      //   })


      // browser.sleep(2000);
      // console.log("MOVEIOFJ", movie);
      // .then((movie)=>{
        // console.log("LENGTH:", movie.length);
        // movie.getText((text)=> {
        //   console.log("FIND: ", text);
        //
        // })
        // movie.click();
      // });

    browser.sleep(3000);
  });



  Then(/^I should see the title "([^"]*)"$/, function(title) {
    return browser.getTitle().then(function (txt) {
        console.log("TITLE: ", txt);
      });
  });

  When(/^I search "([^"]*)"$/, function(query) {
    pageFactory.getPage('movie');
    pageFactory.currentPage.header.search(query)
  });

  Then(/^I should see the results$/, function() {
    var popup = pageFactory.currentPage.header.getSearchPopup();
    expect(popup).to.not.be.undefined;
  });

  When(/^I choose search result number "([^"]*)"$/, function (number) {
    pageFactory.currentPage.header.getSearchResults()
      .then((res)=> {
          res[number - 1].click();
      })
  })

  When(/^I click "See All Results" button$/, function (number) {
    pageFactory.currentPage.header.clickAllResultsButton();
  });

  Then(/^I should see the page of the movie "([^"]*)"$/, function(expectedTitle) {
    pageFactory.getPage('movie');

    pageFactory.currentPage.getMovieTitle().then((title)=> {
      expect(title).to.equal(expectedTitle);
    });

  });

  When(/^I click the preview button$/, function() {
    pageFactory.getPage('movie');
    pageFactory.currentPage.clickPreview();
  });

  Then(/^I should see the video$/, function() {
      var player = pageFactory.currentPage.videoPlayer.getBody();
      return browser.wait(EC.presenceOf(player), 5000);
  });

  When(/^I close the video$/, function() {
    var player = pageFactory.currentPage.videoPlayer;
    player.close().then (() => {
      player.getBody().isPresent()
        .then((present) => {
          expect(present).to.be.false;
        })
      })
  });

  //TODO remove sleep or not?
  When(/^I watch the video for "([^"]*)" secs$/, function(secs) {
    // pageFactory.currentPage.sayHello();
    return browser.sleep(secs * 1000);
  });

});
