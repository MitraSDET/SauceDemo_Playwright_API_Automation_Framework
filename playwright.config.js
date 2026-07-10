const { defineConfig } = require('@playwright/test');
const TestConfig = require('./config/TestConfig');

module.exports = defineConfig({
    testDir: './tests',

    use: {
        baseURL: TestConfig.BASE_URL,
        headless: TestConfig.HEADLESS,
        screenshot: TestConfig.SCREENSHOT,
        trace: TestConfig.TRACE
    }
});