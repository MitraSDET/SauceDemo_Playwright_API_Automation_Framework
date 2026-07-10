const { test, expect } = require('../fixtures/baseFixture');

const users = require('../testdata/users.json');

test.describe('Login Tests', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigateToApplication();
    });

    test('Verify successful login', async ({ loginPage, productsPage }) => {

        await loginPage.login(
            users.standardUser.username,
            users.standardUser.password
        );

        await productsPage.verifyProductsPage();

    });

    test('Verify locked out user login', async ({ loginPage }) => {

        await loginPage.login(
            users.lockedUser.username,
            users.lockedUser.password
        );

        await loginPage.verifyLoginError(
            'Epic sadface: Sorry, this user has been locked out.'
        );

    });

});