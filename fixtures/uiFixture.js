const base = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const ProductPage = require('../pages/ProductPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');

exports.test = base.test.extend({

    loginPage: async ({ page }, use) => {

        await use(new LoginPage(page));

    },

    productPage: async ({ page }, use) => {

        await use(new ProductPage(page));

    },

    cartPage: async ({ page }, use) => {

        await use(new CartPage(page));

    },

    checkoutPage: async ({ page }, use) => {

        await use(new CheckoutPage(page));

    }

});

exports.expect = base.expect;