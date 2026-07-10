const { expect } = require('@playwright/test');
const CartLocators = require('../locators/CartLocators');

class CartPage {

    constructor(page) {
        this.page = page;
    }

    
    //Verify cart page is displayed

    async verifyCartPage() {
        await expect(this.page).toHaveURL(/cart.html/);
    }

    
    //Verify number of items present in cart
    
    async verifyCartItems(expectedCount) {
        await expect(
            this.page.locator(CartLocators.cart.cartItem)
        ).toHaveCount(expectedCount);
    }

    
    //Click Checkout button
    
    async clickCheckout() {
        await this.page.click(
            CartLocators.cart.checkoutButton
        );
    }

    getCartItems() {
    return this.page.locator('.cart_item');
}

async clickCheckout() {
    await this.page.click('[data-test="checkout"]');
}

}

module.exports = CartPage;