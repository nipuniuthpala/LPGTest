/// <reference types ="Cypress" />

export class LoginPage {

    performLogin(){
        cy.visit('https://gocity.com/boston/en-us/products/all-inclusive')
    }

    clickBuyButton(){
        cy.get('.row > .react-component > .cart-icon > .pass-product-buy > .lc-font__regular').click();
    }

    clickSelectAddqty(){
        cy.get('.slick-active.slick-cloned > :nth-child(1) > .lc-products-list__item-wrapper > .lc-products-list__item > .btn').click()
        cy.get(':nth-child(3) > .lc-cart__item-amount-wrapper > .lc-cart__item-amount > [data-testid=cartItemIncrease]').click()
    }

    validateCart(){
        cy.get('.row > .react-component > .cart-icon > .cart-icon__icon').contains('1')
    }

    clickLogo(){
        cy.get('.logo > img').click()
    }

    selectCart(){
        cy.get('.row > .react-component > .cart-icon > .cart-icon__icon').click({multiple: true}) 
    }
    validateBuyButton(){
        cy.get('.lc-font__regular').contains('Buy')
    }

    clickAttraction(){
        cy.get('.slide--0 > .attraction > a > .attraction-tile--content').click()
    }

    buyPass(){
        cy.get('.attraction-cta').click()
        cy.get('.slide--0 > .pass-product-comparison > .pass-product-comparison--content > .pass-product-comparison--button > a').click()
    }


    clickQty(){
        cy.get(':nth-child(3) > .lc-cart__item-amount-wrapper > .lc-cart__item-amount > [data-testid=cartItemIncrease]').click()
    }

    clickCheckout(){
        cy.get('.lc-cart__purchase').click()
    }
}

export const loginPage = new LoginPage();