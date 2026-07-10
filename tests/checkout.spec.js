const { test, expect } = require('../fixtures/baseFixture');

const users = require('../testdata/users.json');

test.describe('Checkout Tests', () => {

    test.beforeEach(async ({ loginPage }) => {

        await loginPage.navigateToApplication();

        await loginPage.login(
            users.standardUser.username,
            users.standardUser.password
        );

    });

    test('Verify user can complete checkout successfully', async ({
        productsPage,
        cartPage,
        checkoutPage
    }) => {

        // Add two products
        await productsPage.addBackpackToCart();
        await productsPage.addBikeLightToCart();

        // Open Cart
        await productsPage.openCart();

        // Verify Cart
        await cartPage.verifyCartPage();
        await cartPage.verifyCartItems(2);

        // Proceed to Checkout
        await cartPage.clickCheckout();

        // Enter Checkout Information
        await checkoutPage.enterCheckoutDetails(
            users.checkoutUser.firstName,
            users.checkoutUser.lastName,
            users.checkoutUser.postalCode
        );

        // Verify Checkout Overview
        await checkoutPage.verifyCheckoutOverview();

        // Complete Purchase
        await checkoutPage.finishCheckout();

        // Verify Order Confirmation
        await checkoutPage.verifyOrderSuccess();

    });

});