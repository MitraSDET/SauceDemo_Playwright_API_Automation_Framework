# SauceDemo Playwright Automation Framework

## Overview

This project is a UI Automation Framework built from scratch using **Playwright with JavaScript** following the **Page Object Model (POM)** design pattern.

Application Under Test:
https://www.saucedemo.com/

The framework is designed to be scalable, reusable, and easy to maintain, making it suitable for enterprise automation projects.

---

## Technology Stack

- Playwright
- JavaScript (Node.js)
- Page Object Model (POM)
- Playwright Test Runner
- Git & GitHub

---

## Project Structure

```
SauceDemo_Playwright_Automation_Framework
│
├── config
│   └── TestConfig.js
│
├── fixtures
│   └── baseFixture.js
│
├── locators
│   ├── LoginLocators.js
│   ├── ProductsLocators.js
│   ├── CartLocators.js
│   └── CheckoutLocators.js
│
├── pages
│   ├── LoginPage.js
│   ├── ProductsPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
│
├── testdata
│   └── users.json
│
├── tests
│   ├── login.spec.js
│   ├── cart.spec.js
│   └── checkout.spec.js
│
├── utils
│   ├── BasePage.js
│   ├── CommonUtils.js
│   ├── Logger.js
│   └── Screenshot.js
│
├── playwright.config.js
├── package.json
└── README.md
```

---

## Framework Design

The framework follows the Page Object Model architecture.

### Config

Contains application configuration.

### Locators

Stores all page locators separately from business logic.

### Pages

Contains reusable page methods.

### Tests

Contains only test scenarios.

### Utilities

Reusable helper methods like logging, screenshots, waits, etc.

### Test Data

Externalized test data using JSON.

---

## Test Scenarios Automated

### Scenario 1

- Successful Login
- Verify Product Listing Page

### Scenario 2

- Login with Locked User
- Verify Error Message

### Scenario 3

- Add Two Products
- Navigate to Cart
- Complete Checkout
- Verify Successful Order

---

## Installation

Clone the repository

```bash
git clone https://github.com/MitraSDET/SauceDemo_Playwright_Automation_Framework.git
```

Navigate to project

```bash
cd SauceDemo_Playwright_Automation_Framework
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

## Running Tests

Run all tests

```bash
npx playwright test
```

Run Login Tests

```bash
npx playwright test tests/login.spec.js
```

Run Cart Tests

```bash
npx playwright test tests/cart.spec.js
```

Run Checkout Tests

```bash
npx playwright test tests/checkout.spec.js
```

Run in headed mode

```bash
npx playwright test --headed
```

Run in debug mode

```bash
npx playwright test --debug
```

---

## Playwright Report

Generate report

```bash
npx playwright show-report
```

---

## Features

- Page Object Model
- Reusable Base Page
- Separate Locator Classes
- External Test Data
- Modular Framework
- Easy Maintenance
- Scalable Architecture
- Screenshot Utility
- Logger Utility
- Common Helper Methods

---

## Design Principles

- Reusability
- Maintainability
- Readability
- Scalability
- Separation of Concerns

---

## Future Enhancements

- CI/CD Integration (GitHub Actions/Jenkins)
- Cross Browser Parallel Execution
- Allure Reporting
- Environment Configuration
- API Integration
- Docker Support
- Retry Mechanism
- Email Reporting

---

## Author

**Mitrabhanu Rout**

Senior Software Test Engineer

Automation Skills

- Playwright
- JavaScript
- Selenium
- Java
- API Testing
- Postman
- Page Object Model
- Git
- CI/CD

---

## Assignment

This project was developed as part of a UI Automation Framework assignment demonstrating:

- Playwright Automation
- Framework Design
- Coding Standards
- Page Object Model
- Modular Architecture
- Best Automation Practices
