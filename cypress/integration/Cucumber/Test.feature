Feature: SiteTestFeature
    Test Site Main features

   Background: User logs in to the site 
        Given user is on the website
       

    Scenario: User should be able to continue to checkout using the buy button and go to the payment screen   
        When the user clicks on buy button
        And user click on select and add qty
        Then user will see the cart item amount
        And user select the checkout
        And user select the current date
        And the user clicks on continue payment
        Then user will see payment methods


    Scenario: User should be able to checkout from home page  after selecting an atrraction
        Given user select the Logo
        When user click on attraction
        And the user clicks on buy a pass
        And user click on select and add qty
        Then user will see the cart item amount
      
    Scenario: User should be able to checkout from inclusive page 
        When user click on + qty
        And the user clicks on checkout
        And  user select the current date
        And the user clicks on continue payment
        Then user will see payment methods

    Scenario: User should be able to delete the pass from the cart
        When user click on + qty
        Then user will see the cart item amount
        And the user clicks on cart
        And user delete the item
        Then user will see buy button appears