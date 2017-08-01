# protractor-cucumber-framework
Simple Protractor-Cucumber JS framework

## Setup

Preconditions: JDK, Node.js

Open a command window or terminal and run:

    npm install
    npm install -g gulp
    npm install -g webdriver-manager

Then open another command window and run:

	webdriver-manager update
	webdriver-manager start

In the first window :

    gulp test

You can use parameters :
  gulp test --tags="@all"
  gulp test --browser=chrome
