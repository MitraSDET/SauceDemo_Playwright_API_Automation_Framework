const { test, expect } = require('@playwright/test');

const LoginPage = require('../../pages/LoginPage');
const ProductPage = require('../../pages/ProductPage');
const CartPage = require('../../pages/CartPage');
const CheckoutPage = require('../../pages/CheckoutPage');

test.describe('Checkout Test Suite', () => {

    test('Verify complete checkout flow', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const productPage = new ProductPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);

        await loginPage.navigateToApplication();

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        await productPage.addBackpackToCart();
        await productPage.addBikeLightToCart();

        await productPage.openCart();

        await cartPage.clickCheckout();

        await checkoutPage.enterFirstName('John');
        await checkoutPage.enterLastName('Smith');
        await checkoutPage.enterPostalCode('751024');

        await checkoutPage.clickContinue();

        await checkoutPage.clickFinish();

        await expect(
            checkoutPage.getSuccessMessage()
        ).toHaveText('Thank you for your order!');

    });

});