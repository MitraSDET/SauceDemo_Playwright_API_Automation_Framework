const { test, expect } = require('@playwright/test');

const LoginPage = require('../../pages/LoginPage');
const ProductPage = require('../../pages/ProductPage');
const CartPage = require('../../pages/CartPage');

test.describe('Cart Test Suite', () => {

    test.beforeEach(async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigateToApplication();
        await loginPage.login('standard_user', 'secret_sauce');
    });

    test('Verify adding two products to cart', async ({ page }) => {

        const productPage = new ProductPage(page);
        const cartPage = new CartPage(page);

        await productPage.addBackpackToCart();
        await productPage.addBikeLightToCart();

        await productPage.openCart();

        await expect(cartPage.getCartItems()).toHaveCount(2);

    });

});