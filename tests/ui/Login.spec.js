const { test, expect } = require('@playwright/test');

const LoginPage = require('../../pages/LoginPage');
const ProductPage = require('../../pages/ProductPage');

test.describe('Login Test Suite', () => {

    test('Verify successful login', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const productPage = new ProductPage(page);

        await loginPage.navigateToApplication();
        await loginPage.login('standard_user', 'secret_sauce');

        await expect(productPage.getProductTitle()).toHaveText('Products');
    });

    test('Verify locked out user login', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigateToApplication();
        await loginPage.login('locked_out_user', 'secret_sauce');

        await expect(loginPage.getErrorMessage()).toContainText(
            'Epic sadface: Sorry, this user has been locked out.'
        );
    });

});