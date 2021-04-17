/// <reference types ="Cypress" />

export class PaymentPage {

    clickCheckOut(){
        cy.get('.lc-cart__purchase').click()
    }

    enterDate(){
        cy.get('input[placeholder="MM-DD-YYYY"]').click()
        cy.get('.ui-datepicker-days-cell-over > .ui-state-default').click()
       
    }

    clickPayment(){
        cy.waitFor('.block-region-first > .block-react-checkout-payment-segue > .block-container > .block-inner > .block-content-wrapper > .react-component > :nth-child(1) > :nth-child(1) > [data-testid=continueToPayment]')

        cy.get('.block-region-first > .block-react-checkout-payment-segue > .block-container > .block-inner > .block-content-wrapper > .react-component > :nth-child(1) > :nth-child(1) > [data-testid=continueToPayment]').click()
    }

    validatePaymentMethods(){
        cy.get('li.card-button > .card-button').contains('Debit / Credit Card')
        cy.get('.paypal-button.false > .paypal-button').contains('PAYPAL')
    }

    deleteItem(){
        cy.get(':nth-child(1) > .lc-cart__item-delete').click()
    }
}

export const paymentPage = new PaymentPage();