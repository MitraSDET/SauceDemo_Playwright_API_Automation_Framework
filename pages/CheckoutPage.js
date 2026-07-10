const { expect } = require('@playwright/test');
const CheckoutLocators = require('../locators/CheckoutLocators');

class CheckoutPage {

    constructor(page) {
        this.page = page;
    }

    
    //Enter customer information
     
    async enterCheckoutDetails(firstName, lastName, postalCode) {
        await this.page.fill(
            CheckoutLocators.checkout.firstName,
            firstName
        );

        await this.page.fill(
            CheckoutLocators.checkout.lastName,
            lastName
        );

        await this.page.fill(
            CheckoutLocators.checkout.postalCode,
            postalCode
        );

        await this.page.click(
            CheckoutLocators.checkout.continueButton
        );
    }

    
    //Verify Checkout Overview page is displayed
     
    async verifyCheckoutOverview() {
        await expect(this.page).toHaveURL(/checkout-step-two/);
    }

    async finishCheckout() {
    await this.page.click(
        CheckoutLocators.checkout.finishButton
    );
}

async verifyOrderSuccess() {
    await expect(
        this.page.locator(
            CheckoutLocators.checkout.confirmationHeader
        )
    ).toHaveText('Thank you for your order!');
}

}

module.exports = CheckoutPage;