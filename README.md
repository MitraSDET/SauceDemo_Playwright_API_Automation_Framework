# 🚀 SauceDemo Playwright UI & API Automation Framework

A scalable and maintainable test automation framework built using **Playwright with JavaScript**. This project combines **UI Automation** for SauceDemo and **API Automation** for Restful Booker, following industry-standard automation practices such as the **Page Object Model (POM)**, reusable service classes, centralized test data management, and **Allure Reporting**.

---

# 📌 Project Overview

This framework automates end-to-end web and API testing using Playwright.

### UI Automation
- User Login
- Invalid Login Validation
- Add Products to Cart
- Checkout Process
- Order Completion

### API Automation
- Authentication Token Generation
- Create Booking
- Get Booking
- Update Booking
- Partial Update Booking
- Delete Booking
- Negative API Scenarios

---

# 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| Playwright | UI & API Automation |
| JavaScript (Node.js) | Programming Language |
| Playwright Test | Test Runner |
| REST API | API Testing |
| Allure Report | Reporting |
| Git & GitHub | Version Control |

---

# 🌐 Applications Under Test

### UI Application

https://www.saucedemo.com/

### API Application

https://restful-booker.herokuapp.com/

---

# 📂 Project Structure

```text
SauceDemo_Playwright_API_Automation_Framework
│
├── .github/
│
├── allure-report/
├── allure-results/
│
├── config/
│   ├── apiConfig.js
│   └── TestConfig.js
│
├── fixtures/
│
├── locators/
│
├── pages/
│   ├── LoginPage.js
│   ├── ProductsPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
│
├── payloads/
│
├── schemas/
│
├── services/
│   ├── AuthService.js
│   └── BookingService.js
│
├── test-data/
│   ├── bookingData.json
│   ├── updateBooking.json
│   ├── partialUpdate.json
│   ├── invalidData.json
│   └── users.json
│
├── tests/
│   ├── api/
│   │   ├── auth.spec.js
│   │   ├── bookingCRUD.spec.js
│   │   ├── bookingLifecycle.spec.js
│   │   └── bookingNegative.spec.js
│   │
│   └── ui/
│       ├── Login.spec.js
│       ├── Cart.spec.js
│       └── Checkout.spec.js
│
├── test-results/
│
├── utils/
│   ├── ApiClient.js
│   ├── TokenManager.js
│   └── Helper.js
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

# 🏗 Framework Design

The framework is designed using industry best practices.

- Page Object Model (POM)
- Reusable API Service Layer
- Centralized Configuration
- JSON Test Data Management
- Modular Project Structure
- Reusable Utility Classes
- Easy Maintenance
- Scalable Design

---

# ✅ Automated Test Scenarios

## UI Test Scenarios

- Verify successful login
- Verify locked-out user login
- Add multiple products to cart
- Complete checkout process
- Validate successful order completion

---

## API Test Scenarios

- Generate Authentication Token
- Create Booking
- Retrieve Booking Details
- Update Booking
- Partial Update Booking
- Delete Booking
- Negative API Validation

---

# ⚙️ Prerequisites

Install the following software before running the project:

- Node.js
- Visual Studio Code
- Git
- Java JDK (Required for Allure)

Verify installation:

```bash
node -v
npm -v
java -version
```

---

# 📥 Installation

## Clone the Repository

```bash
git clone https://github.com/MitraSDET/SauceDemo_Playwright_API_Automation_Framework.git
```

Navigate to the project directory:

```bash
cd SauceDemo_Playwright_API_Automation_Framework
```

Install project dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

# ▶️ Running the Tests

## Execute All Tests

```bash
npx playwright test
```

---

## Execute Only UI Tests

```bash
npx playwright test tests/ui
```

---

## Execute Only API Tests

```bash
npx playwright test tests/api
```

---

## Execute a Specific Test File

```bash
npx playwright test tests/api/bookingLifecycle.spec.js
```

---

## Run Tests in Headed Mode

```bash
npx playwright test --headed
```

---

## Run Tests in Debug Mode

```bash
npx playwright test --debug
```

---

# 📊 Allure Report

## Step 1: Execute Tests

```bash
npx playwright test
```

## Step 2: Generate Allure Report

```bash
npx allure generate allure-results --clean -o allure-report
```

## Step 3: Open Allure Report

```bash
npx allure open allure-report
```

---

# 📁 Test Data

All test data is maintained under:

```text
test-data/
```

Available test data files:

- bookingData.json
- updateBooking.json
- partialUpdate.json
- invalidData.json
- users.json

---

# 📈 Reporting

After execution, Playwright generates:

```text
allure-results/
```

Generate the report into:

```text
allure-report/
```

The report includes:

- Test Execution Summary
- Passed / Failed Tests
- Execution Timeline
- Test Steps
- Error Details
- Stack Trace

---

# ⭐ Framework Highlights

- UI Automation using Playwright
- API Automation using Playwright Request Context
- Page Object Model (POM)
- Service Layer Architecture
- Centralized Test Data Management
- Token-Based Authentication
- Reusable API Client
- Allure Reporting
- Modular & Scalable Framework
- Easy Integration with CI/CD Pipelines

---

# 🚀 Future Enhancements

- Jenkins Integration
- GitHub Actions CI/CD
- Docker Support
- Cross-Browser Parallel Execution
- Environment-Based Configuration
- JSON Schema Validation
- Data-Driven Testing
- HTML Report Integration
- API Contract Testing

---

# 👨‍💻 Author

**Mitrabhanu Rout**

**Senior QA Automation Engineer**

### Technical Skills

- Playwright
- Selenium WebDriver
- JavaScript
- Java
- API Testing
- Postman
- REST Assured
- Automation Framework Design
- Git & GitHub
- CI/CD
- Allure Reporting

---

# 🤝 Contributing

Contributions, suggestions, and improvements are always welcome.

1. Fork the repository
2. Create a new feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

# 📄 License

This project is developed for learning, demonstration, and automation practice purposes.

---

## ⭐ If you found this project useful, consider giving it a Star on GitHub!
