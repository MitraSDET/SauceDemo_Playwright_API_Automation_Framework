const { test, expect } = require('../fixtures/baseFixture');

const users = require('../testdata/users.json');

test.describe('Cart Tests', () => {

    test.beforeEach(async ({ loginPage }) => {

        await loginPage.navigateToApplication();

        await loginPage.login(
            users.standardUser.username,
            users.standardUser.password
        );

    });

    test('Verify user can add two items and navigate to checkout', async ({
        productsPage,
        cartPage
    }) => {

        // Add two products
        await productsPage.addBackpackToCart();
        await productsPage.addBikeLightToCart();

        // Open Cart
        await productsPage.openCart();

        // Verify Cart page
        await cartPage.verifyCartPage();

        // Verify two items are present
        await cartPage.verifyCartItems(2);

        // Proceed to Checkout
        await cartPage.clickCheckout();

    });

});