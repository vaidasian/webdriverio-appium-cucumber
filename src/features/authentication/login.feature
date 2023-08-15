Feature: Sauce Demo Login

  @enabled @login
  Scenario: As a user, I can log into the app

    Given user is on login page
    When user performs valid login
    Then verify landing page

    Given user is on login page
    When user performs invalid login
    Then verify error message on login page