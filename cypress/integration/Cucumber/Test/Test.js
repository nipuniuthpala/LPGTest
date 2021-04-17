import { Given } from "cypress-cucumber-preprocessor/steps"
import {When } from "cypress-cucumber-preprocessor/steps"
import { And } from "cypress-cucumber-preprocessor/steps"
import { Then } from "cypress-cucumber-preprocessor/steps"
import {LoginPage, loginPage} from "../../examples/pages/loginpage"
import {PayementPage, paymentPage} from "../../examples/pages/paymentpage"

Given(`user is on the website`, () => {
    //Visit ExecuteAutomation Website
  loginPage.performLogin()   
})


When(`the user clicks on buy button`, () => {
    loginPage.clickBuyButton();
})

And(`user click on select and add qty`, () => {
    loginPage.clickSelectAddqty();
})

Then(`user will see the cart item amount`, () => {
    loginPage.validateCart();
})

And(`user select the checkout`, () => {

    paymentPage.clickCheckOut()   
})

And(`user select the current date`, () => {
    paymentPage.enterDate();
})

And(`the user clicks on continue payment`, () => {
    paymentPage.clickPayment();
})

Then(`user will see payment methods`, () => {
    paymentPage.validatePaymentMethods();
})

Given(`user select the Logo`, () => {

    loginPage.clickLogo()   
})

And(`the user clicks on cart`, () => {
    loginPage.selectCart();
})

And(`user delete the item`, () => {
    paymentPage.deleteItem();
})

Then(`user will see buy button appears`, () => {
    loginPage.validateBuyButton();
})

When(`user click on attraction`, () => {
   loginPage.clickAttraction();
})

And(`the user clicks on buy a pass`, () => {
    loginPage.buyPass();
})


When(`user click on + qty`, () => {
    loginPage.clickQty();
 })
 
 And(`the user clicks on checkout`, () => {
     loginPage.clickCheckout();
 })
/*Given(`I login as following`, datatable => {

    datatable.hashes().forEach(row => {
        // cy.get('#UserName').type(row.userName);
        // cy.get('#Password').type(row.Password,{log:false});
        loginPage.performLogin(row.userName,row.Password);
    });

    //Instead of direct click
    //cy.get('.btn').click();
    loginPage.clickLoginButton();
})*/