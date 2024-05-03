# wdio-cucumber-digitalscola
Automation - Webdriver.io - Cucumber - 

## Ringkasa
Webdriver.io project configured with Cucumber framework. 
It includes sample tests for automating scenarios on the website [www.saucedemo.com.](https://www.saucedemo.com/)

## Setup
1. Clone this repository
2. change directory to : cd wdio-cucumber-digitalscola
3. Install Depedencies
    - npm install -- guanakan ini jika semua depedenci sudah lengkap
    - npm init wdio@latest
    - npm install chai-as-promised
    - npm install @wdio/spec-reporter --save-dev
    - npm install --save-dev allure-commandline
    - npm install --save-dev @wdio/allure-reporter
4. Setup run
    "scripts": { "wdio": "wdio run ./wdio.conf.js" }
5. How to run : 
    - all test case : npm run wdio
    - with Feature Tag: npx wdio run ./wdio.conf.js --cucumberOpts.tags "@Login"
6. Generate Repot Allure
    - npm run wdio > allure report akan masuk kedalam folder allure-results
    - Genereate use npx 
    - npx allure serve allure-results

## Test Scenarios
### User Success Login
This scenario tests the successful login of a user.

### Validate User is on Dashboard After Login
This scenario validates that the user is redirected to the dashboard page after successful login.

### Add Item to Cart
This scenario tests the functionality of adding an item to the shopping cart.

### Validate Item Successfully Added to Cart
This scenario validates that an item is successfully added to the cart.

## Implementasi 
Gherkin Background, Gherkin Scenario Outline Keyword
Feature Tag dan Scenario Tag
Multiremote Execution Chrome adn MicrosoftEdge
Screenshot

## Test Report
Allure Report [www.webdriver.io.com](https://webdriver.io/docs/allure-reporter) 
Spec Reporter [www.webdriver.io.com](https://webdriver.io/docs/spec-reporter) 