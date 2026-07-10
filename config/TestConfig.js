class TestConfig {
    static BASE_URL = 'https://www.saucedemo.com';
    static HEADLESS = false;
    static SCREENSHOT = 'only-on-failure';
    static TRACE = 'on-first-retry';
}

module.exports = TestConfig;