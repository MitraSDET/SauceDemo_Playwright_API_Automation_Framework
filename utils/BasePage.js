class BasePage {

    constructor(page) {
        this.page = page;
    }

    async click(locator) {
        await this.page.click(locator);
    }

    async fill(locator, value) {
        await this.page.fill(locator, value);
    }

    async type(locator, value) {
        await this.page.locator(locator).type(value);
    }

    async getText(locator) {
        return await this.page.locator(locator).textContent();
    }

    async isVisible(locator) {
        return await this.page.locator(locator).isVisible();
    }

    async waitForElement(locator) {
        await this.page.locator(locator).waitFor();
    }

    async getElements(locator) {
        return await this.page.locator(locator).all();
    }

    async selectByValue(locator, value) {
        await this.page.selectOption(locator, value);
    }

    async getCurrentUrl() {
        return this.page.url();
    }

}

module.exports = BasePage;