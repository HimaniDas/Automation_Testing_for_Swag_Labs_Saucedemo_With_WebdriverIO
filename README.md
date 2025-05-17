# 🧪 Automation Testing for Swag Labs with WebdriverIO

This repository contains an automation framework for testing [Swag Labs](https://www.saucedemo.com/) using WebdriverIO, Mocha, JavaScript, and Allure Reports. It follows the Page Object Model (POM) design pattern for better maintainability.


## ✨ Features

✅ Page Object Model (POM) design pattern

✅ Modular & reusable test structure

✅ Cross-browser testing support (Chrome)

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

## 📁 Test Case Breakdown

### ✅ Test-01 | Locked_Out_User Login
- User: locked_out_user
- Goal: Validate that a proper error message appears upon failed login.
- Expected Result: Error message should explicitly state that the user is locked out.
- Validation: Assert that the correct error message is displayed.

### ✅ Test-02 | Standard_User_Purchase Flow
- User: standard_user
- Scenario Overview:
- Login
- Reset App State via hamburger menu
- Add any three products to cart
- Proceed to checkout
- Validate product names and computed total Prices
- Finish purchase
- Confirm order success message
- Reset App State again and log out

### ✅ Test-03 | Performance Glitch User with Filter
- User: performance_glitch_user
- Scenario Overview:
- Login and reset App State
- Apply filter: Name (Z to A)
- Add the first displayed item to the cart
- Proceed through checkout
- Validate selected product name and total amount
- Finalize purchase and confirm success
- Reset App State and log out

## 🚀 Installation & Setup

Prerequisite: Install **Node.js v16+** and **npm**


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

## 🚦 Run Tests and Allure Reports

```bash
npm run test
npm run test1(for locked out user)
npm run test2(for standard user)
npm run test3(for performance user)
npm run getReport(for overall test)
```

## 📊 Reports include

📌 Test steps

📌 Screenshots on failure (If there any fail)

📌 Execution history




