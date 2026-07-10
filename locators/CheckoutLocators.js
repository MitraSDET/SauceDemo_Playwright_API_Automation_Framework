class CheckOutLocators {

      static checkout = {
        firstName: '[data-test="firstName"]',
        lastName: '[data-test="lastName"]',
        postalCode: '[data-test="postalCode"]',
        continueButton: '[data-test="continue"]',

        finishButton: '[data-test="finish"]',

        confirmationHeader: '.complete-header',
        confirmationMessage: '.complete-text',

        backHomeButton: '[data-test="back-to-products"]'
    }
};

module.exports = CheckOutLocators;