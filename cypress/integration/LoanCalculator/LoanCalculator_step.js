/// <reference types="Cypress" />
import { object } from "check-more-types";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
//import { data } from "cypress/types/jquery";
//import { contains } from "cypress/types/jquery";
import {loanCalculatorPage} from '../PageObject/LoanCaculator_PO'


const loancalculatorPage = new loanCalculatorPage ();
Given('User Landing on loan calculator home page',()=>{
     cy.visit('https://www.anz.com.au/personal/home-loans/calculators-tools/much-borrow/')
     cy.wait(5000)    
     cy.log('User landed on home page')
})

Then('I should see the Page title as {string}',(pageTitle)=>{
    loancalculatorPage.getPageTitle().should('have.text',pageTitle)
    cy. log('verify the page title as '+pageTitle)
})

When('I select the application type as {string}',(applicationType)=>{
    if(applicationType==='single'){
        loancalculatorPage.getApplicationType(applicationType).click().parent().parent().should('have.class','selected')
    }else {
        loancalculatorPage.getApplicationType(applicationType).click().parent().parent().should('have.class','selected')
    }
    cy.log('Aplication type selected as '+applicationType)    
})
And('I select the number of dependent as {string}',(int)=>{
     loancalculatorPage.selectDependent(int)
     cy.log('Dependent selected as '+int)
})
And('I select the borrow type as {string}',(btype)=>{
    if(btype=='home'){
        loancalculatorPage.getBorrowType(btype).click().parent().parent().should('have.class','selected')
    } else{
        loancalculatorPage.getBorrowType(btype).click().parent().parent().should('have.class','selected')
    }
    cy.log('Borrow type selected as '+btype)
})
And('I enter the all customer financial data from {string}',(filename)=>{
    cy.readFile(filename).then((data)=>{
        loancalculatorPage.fillForm(data)
    })

})
Then('I should see the borrwing estimate {string}',(EstimateBorrow)=>{
    loancalculatorPage.getEstimateBorrow().scrollIntoView().should('have.text',EstimateBorrow)
})

When('I click on the {string} button',(button)=>{
   cy.contains(button).scrollIntoView().should('be.visible').click()
   cy.wait(2000)
})

Then('I should see the form got cleared',()=>{
loancalculatorPage.getEstimateBorrow().scrollIntoView().should('have.text',0)
cy.log('form got cleared')
})

And('I enter Living expenses value as $ {string}',(amt)=>{
    loancalculatorPage.getLivingExpense().scrollIntoView().type(amt)

})
Then('I should see the error message as {string}',(errormessage)=>{
    loancalculatorPage.getErrorMessage().scrollIntoView().should('have.text',errormessage)
}) 