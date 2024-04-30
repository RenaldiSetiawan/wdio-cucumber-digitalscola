Feature: Saucedemo

  Scenario: User success login and Validate user berada di dashboard setelah login
    Given User is on the Saucedemo login page
    When User successfully login with <username> and <password>
    Then User is on the Saucedemo dashboard

  Examples:
      | username      | password             | message                        |
      | standard_user | secret_sauce         | You logged into a secure area! |

  Scenario: Add item to cart and Validate item sukses ditambahkan ke cart
    When User adds Button to Cart
    Then Item successfully added to cart page