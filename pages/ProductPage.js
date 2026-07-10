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

    getProductTitle() {
    return this.page.locator('.title');
}

async addBackpackToCart() {
    await this.page.click('#add-to-cart-sauce-labs-backpack');
}

async addBikeLightToCart() {
    await this.page.click('#add-to-cart-sauce-labs-bike-light');
}

async openCart() {
    await this.page.click('.shopping_cart_link');
}
}

module.exports = ProductsPage;