Feature: Verify the Loan borrowing calculator feature

   Background: Login as QA user
      Given User Landing on loan calculator home page
      Then  I should see the Page title as "How much could I borrow?"
@Test1
Scenario: As a user ,I Verify that borrwing estimate
   When I select the application type as "single"
   And  I select the number of dependent as "0"
   And  I select the borrow type as "home"
   And  I enter the all customer financial data from "cypress\fixtures\InputFolder\currentIncome_TestData.json"
   Then I should see the borrwing estimate "$479,000"
   

@Test2
Scenario: As a user ,I Verify on clicking of the start over button form should be clear
   When I select the application type as "single"
   And  I select the number of dependent as "0"
   And  I select the borrow type as "home"
   And  I enter the all customer financial data from "cypress\fixtures\InputFolder\currentIncome_TestData.json"
   When I click on the "Start over" button
   Then I should see the form got cleared   

@Test3
Scenario: As a user ,I Verfy that error message when Living expenses have value $1 and rest fields are empty
   When I select the application type as "single"
   And  I select the number of dependent as "0"
   And  I select the borrow type as "home"
   And  I enter Living expenses value as $ "1"
   Then I click on the "Work out how much I could borrow" button
   Then I should see the error message as "Based on the details you've entered, we're unable to give you an estimate of your borrowing power with this calculator. For questions, call us on 1800 100641."

