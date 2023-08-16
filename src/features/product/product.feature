Feature: Sauce Demo Product

  Background:
    Given user is on login page
    And user is unauthenticated
    When user performs valid login
    Then verify landing page

  # rename @enabled to @skip
  @enabled @product @price
  Scenario: As a user, I can view the product price

    When user selects first product
    Then verify product page

  # rename @enabled to @skip
  @enabled @product @cart
  Scenario: As a user, I can view the product in the cart

    When user selects first product
    And user adds product to cart
    And user selects cart
    Then verify cart page

  @enabled @product @cart
  Scenario: As a user, I can view an empty cart

    When user selects first product
    And user removes product from cart
    Then verify empty cart page