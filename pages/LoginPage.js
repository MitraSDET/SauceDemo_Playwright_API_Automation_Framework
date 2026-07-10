const { expect } = require('@playwright/test');
const BasePage = require('../utils/BasePage');
const LoginLocators = require('../locators/LoginLocators');

class LoginPage extends BasePage {

    constructor(page) {
        super(page);
    }

    async navigateToApplication() {
        await this.page.goto('/');
    }

    async enterUsername(username) {
        await this.fill(LoginLocators.login.username, username);
    }

    async enterPassword(password) {
        await this.fill(LoginLocators.login.password, password);
    }

    async clickLogin() {
        await this.click(LoginLocators.login.loginButton);
    }

    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }

    async verifyLoginError(expectedMessage) {
        await expect(
            this.page.locator(LoginLocators.login.errorMessage)
        ).toHaveText(expectedMessage);
    }
}

module.exports = LoginPage;