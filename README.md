# wdio-cucumber-digitalscola
Automation - Webdriver.io - Cucumber

## Ringkasa
Webdriver.io project configured with Cucumber framework. 
It includes sample tests for automating scenarios on the website [www.saucedemo.com.](https://www.saucedemo.com/)

## Setup
1. Clone this repository
2. change directory to : cd wdio-cucumber-digitalscola
3. Install Depedencies
    - npm init wdio@latest
    - npm install chai-as-promised
4. Setup run
    "scripts": { "wdio": "wdio run ./wdio.conf.js" }
5. How to run : npm run wdio

## Test Scenarios
### User Success Login
This scenario tests the successful login of a user.

### Validate User is on Dashboard After Login
This scenario validates that the user is redirected to the dashboard page after successful login.

### Add Item to Cart
This scenario tests the functionality of adding an item to the shopping cart.

### Validate Item Successfully Added to Cart
This scenario validates that an item is successfully added to the cart.