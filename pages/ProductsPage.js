const ProductsLocators = require('../locators/ProductsLocators');

class ProductsPage {

    constructor(page) {
        this.page = page;
    }

    async verifyProductsPage() {
        await this.page.waitForSelector(ProductsLocators.title);
    }

    async addBackpackToCart() {
        await this.page.click(ProductsLocators.backpack);
    }

    async addBikeLightToCart() {
        await this.page.click(ProductsLocators.bikeLight);
    }

    async openCart() {
        await this.page.click(ProductsLocators.shoppingCart);
    }
}

module.exports = ProductsPage;