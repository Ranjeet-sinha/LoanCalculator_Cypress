/// <reference types="Cypress" />

export class loanCalculatorPage{
   
    getPageTitle(){
        return cy.get('[class="hero__heading"]')
    }
    getApplicationType(applicationType){
        return cy.get('[id="application_type_'+applicationType+'"]')
    }
    getdependent(){
        return cy.get('[title="Number of dependants"] option')
    }
    selectDependent(number){
        this.getdependent().each(($el)=>{
            if($el.text()==number){
              cy.wrap($el).click({force:true})
            } 
        })
    }
    getBorrowType(btype){
       return cy.get('[id="borrow_type_'+btype+'"]') 
    }
    getInputField(id,value){
        return cy.get('[aria-labelledby='+id+']').scrollIntoView().type(value)
    }
    getBorrowCalculater(){
    return cy.get('#btnBorrowCalculater')
    }
    getEstimateBorrow(){
        return cy.get('[id="borrowResultTextAmount"]')
    }
    getErrorMessage(){
        return cy.get('[class="borrow__error__text"]')
    }
    getLivingExpense(){
        return cy.get('[id="expenses"]')
    }
  fillForm(data){
    Object.entries(data).forEach(entry => {
        let id=entry[1][0]
        let value= entry[1][1]
        this.getInputField(id,value)
        
    });
    this.getBorrowCalculater().click()
  }
}