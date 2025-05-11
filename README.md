# 🧪 Swag Labs Test Automation Suite with WebdriverIO

This repository contains an end-to-end automation framework for testing [Swag Labs](https://www.saucedemo.com/) using WebdriverIO, Mocha, JavaScript, and Allure Reports. It follows the Page Object Model (POM) design pattern for better maintainability.

## ✨ Features

✅ Page Object Model (POM) design pattern

✅ Modular & reusable test structure

✅ Cross-browser testing support (Chrome, Firefox)

✅ Allure Reports for detailed test analysis

✅ Mocha test framework integration

✅ ES6+ JavaScript syntax

## ⚙️ Prerequisites

Before running the tests, ensure:

Node.js (v14 or higher)

npm (comes with Node.js)

Google Chrome (latest version)

## 📂 Project Structure

```

Swag_Labs_Saucedemo_With_WebdriverIO/

├── config/

│   └── wdio.conf.js (WebdriverIO configuration)

├── test/

│   ├── specs/ (Test cases (login, cart, checkout))          

│   │   ├── locked_user.test.js    

│   │   ├── standard_user.test.js   

│   │   └── performance_user.test.js   

│   ├── pages/ (Page Objects (login, inventory, checkout))               

│   │   ├── LoginPage.js

│   │   ├── ProductsPage.js

│   │   └── CheckoutPage.js

│   └── pageobjects/ (Additional page objects)

├── test-results/ (Allure reports & screenshots)

├── package.json/ (Dependencies and scripts)
            
└── README.md
```
## 🧪 Test Scenarios

### ✅ Login Tests
- Valid login with locked out user,standard user,and performance user
- Locked out user validation
- Error message handling
- Standard user validation
- Performance user validation

### 🛒 Cart Tests
- Add items to cart
- Validate cart badge count
- Confirm item visibility

### 💳 Checkout Tests
- Fill personal information
- Order summary confirmation
- Final order success message

# 🚀 Installation & Setup

> Prerequisite: Install **Node.js v16+** and **npm**

### 1. Clone the repository

```bash
git clone https://github.com/HimaniDas/Swag_Labs_Saucedemo_With_WebdriverIO.git
cd Swag_Labs_Saucedemo_With_WebdriverIO
```
### 2. Install dependencies

```bash
npm install
```
### 3. Install WebdriverIO Configuration Wizard

```bash
npm init wdio@latest
```
### 📌 Configuration Options (select during the wizard)

✅ What type of testing would you like to do?
E2E Testing

✅ Where is your automation backend located?
On my local machine

✅ Which environment you like to do automation?
web - web applications in the browser

✅ Which framework do you want to use?
Mocha (https://mochajs.org/)

✅ Do you want to use TypeScript for your tests?
No

✅ Where are your test specs located?
Press Enter to accept default: ./test/specs/**/*.js

✅ Do you want WebdriverIO to autogenerate some test files?
Yes

✅ Do you want to use page objects?
Yes

✅ Where should your page objects be located?
Press Enter to accept default: ./test/pageobjects

✅ Which reporter do you want to use?
Spec, Allure

✅ Do you want to add a plugin to your test setup?
@wdio/devtools-service (for wait commands)

✅ Do you want to add a service to your test setup?
chromedriver (for local Chrome testing)

✅ What is the base URL?
https://www.saucedemo.com/

### 4. Install Allure Command-Line Tool

```bash
npm i @wdio/allure-reporter
npm i allure-commandline
```
### 5. Generate Allure Reports(use:wdio.conf.js)

```bash
export const config = {
    // ...
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: true,
    }]],
    // ...
```
### 6. Add Screenshot(If needed- use:wdio.conf.js)

```
afterTest: async function(test, context, { error, result, duration, passed, retries }) {
    if (error) {
        const screenshot = await browser.screenshot();
        allure.addAttachment('Screenshot',Buffer.from(screenshot,'base64'),"failure/png");
    }
}
```
### 7. package.json (for Allure Report and tests):

```
"getReport": "allure generate --clean allure-results && allure open allure-report",
"test1": "rmdir /s /q allure-results && wdio run wdio.conf.js --suite test1 && allure generate allure-results --clean -o allure-report-test1 && allure open allure-report-test1",
"test2": "rmdir /s /q allure-results && wdio run wdio.conf.js --suite test2 && allure generate allure-results --clean -o allure-report-test2 && allure open allure-report-test2",
"test3": "rmdir /s /q allure-results && wdio run wdio.conf.js --suite test3 && allure generate allure-results --clean -o allure-report-test3 && allure open allure-report-test3",
"test": "wdio run wdio.conf.js --suite test"
```
## 🚦 Run Tests

```bash
npm run test(for complete test)
npm run test1(for locked out user)
npm run test2(for standard user)
npm run test3(for performance user)
```
## 🚦 Run Allure Reports:

```bash
npm run test1(for locked out user)
npm run test2(for standard user)
npm run test3(for performance user)
npm run getReport(for overall test)
```
## 📊 Reports include:

📌 Test steps

📌 Screenshots on failure (If there any fail)

📌 Execution history




