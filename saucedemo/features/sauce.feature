
@Saucedemo
Feature: Saucedemo

  Background:
    Given User is on the Saucedemo login page

  @Login
  Scenario Outline: User success login and Validate user berada di dashboard setelah login
    When User successfully login with <username> and <password>
    Then User is on the Saucedemo dashboard

  Examples:
      | username      | password             | message                        |
      | standard_user | secret_sauce         | You logged into a secure area! |

  Scenario: Add item to cart and Validate item sukses ditambahkan ke cart
    Given User is on the product page
    When User adds item to cart
    Then Item is successfully added to cart