# SauceDemo Playwright UI & API Automation Framework

## Overview

This project is a hybrid UI and API automation framework developed using **Playwright with JavaScript**.

The framework automates:

- UI Test Automation for SauceDemo
- API Test Automation for Restful Booker
- Page Object Model (POM)
- Reusable API Services
- JSON Test Data Management
- Allure Reporting
- Playwright Test Runner

---

## Tech Stack

- Playwright
- JavaScript (Node.js)
- Playwright Test
- REST API Testing
- Allure Report
- Git & GitHub

---

## Application Under Test

### UI

https://www.saucedemo.com/

### API

https://restful-booker.herokuapp.com

---

## Framework Structure

```
SauceDemo_Playwright_API_Automation_Framework
│
├── config
│   ├── apiConfig.js
│   └── TestConfig.js
│
├── fixtures
│
├── locators
│
├── pages
│   ├── LoginPage.js
│   ├── ProductsPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
│
├── payloads
│
├── schemas
│
├── services
│   ├── AuthService.js
│   └── BookingService.js
│
├── test-data
│   ├── bookingData.json
│   ├── updateBooking.json
│   ├── partialUpdate.json
│   ├── invalidData.json
│   └── users.json
│
├── tests
│   ├── api
│   │   ├── auth.spec.js
│   │   ├── bookingCRUD.spec.js
│   │   ├── bookingLifecycle.spec.js
│   │   └── bookingNegative.spec.js
│   │
│   └── ui
│       ├── Login.spec.js
│       ├── Cart.spec.js
│       └── Checkout.spec.js
│
├── utils
│   ├── ApiClient.js
│   ├── TokenManager.js
│   └── Helper.js
│
├── playwright.config.js
├── package.json
└── README.md
```

---

# Framework Design

The framework follows the following design principles:

- Page Object Model (POM)
- Service Layer for API
- JSON Test Data
- Reusable Utility Classes
- Modular Structure
- Easy Maintenance
- Scalable Framework

---

# Features

## UI Automation

- Login
- Invalid Login
- Add Products to Cart
- Checkout
- Complete Order Flow

---

## API Automation

- Authentication
- Create Booking
- Get Booking
- Update Booking
- Partial Update Booking
- Delete Booking
- Negative API Scenarios

---

# Prerequisites

Install:

- Node.js
- VS Code
- Git
- Java JDK (for Allure)

Verify installation

```
node -v
npm -v
java -version
```

---

# Installation

Clone Repository

```
git clone <Repository_URL>
```

Go to project

```
cd SauceDemo_Playwright_API_Automation_Framework
```

Install dependencies

```
npm install
```

Install Playwright browsers

```
npx playwright install
```

---

# Execute Tests

Run all tests

```
npx playwright test
```

Run UI tests

```
npx playwright test tests/ui
```

Run API tests

```
npx playwright test tests/api
```

Run a single test file

```
npx playwright test tests/api/bookingLifecycle.spec.js
```

Run headed mode

```
npx playwright test --headed
```

---

# Generate Allure Report

### Execute Tests

```
npx playwright test
```

### Generate Report

```
npx allure generate allure-results --clean -o allure-report
```

### Open Report

```
npx allure open allure-report
```

---

# Test Data

Test data is maintained under:

```
test-data/
```

Example:

- bookingData.json
- updateBooking.json
- partialUpdate.json
- invalidData.json
- users.json

---

# Reports

Playwright generates:

```
allure-results/
```

Generated report:

```
allure-report/
```

---

# Project Highlights

✔ UI Automation using Playwright

✔ API Automation using Playwright Request API

✔ Page Object Model

✔ Reusable API Client

✔ Token Management

✔ JSON Test Data

✔ Allure Reporting

✔ Modular Framework

✔ GitHub Ready

---

# Future Enhancements

- CI/CD Integration (GitHub Actions/Jenkins)
- Docker Support
- Cross Browser Execution
- Environment Configuration
- JSON Schema Validation
- Data Driven Testing
- Parallel Execution
- Retry Mechanism
- API Response Validation

---

# Author

**Mitrabhanu Rout**

Senior QA Automation Engineer

**Skills**

- Playwright
- Selenium
- JavaScript
- Java
- REST API Testing
- Automation Framework Design
- CI/CD
- Git
- Allure Report

---

# License

This project is intended for learning, automation practice, and demonstration purposes.
