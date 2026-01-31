# IT3040 - Assignment 1 - Test Automation

**Student Registration ID:** IT23667846  
**Subject:** IT3040 - ITPM  
**Target Application:** [SwiftTranslator](https://www.swifttranslator.com/)

---

## 📌 Project Overview
This repository contains the automated test suite for **Assignment 1**, developed using **Playwright**. The tests are designed to evaluate the functionality, accuracy, and robustness of the SwiftTranslator (Singlish to Sinhala) web application.

The suite includes **35 Test Cases**:
- **24 Positive Functional Tests**: Verifying correct translation of various sentence structures, tenses, and formats.
- **10 Negative Functional Tests**: Verifying robustness against edge cases (URLs, code injection, typos, etc.).
- **1 UI Test**: Verifying real-time output updates.

---

## ⚙️ Prerequisites
Before running the tests, ensure you have the following installed:
* **Node.js** (v14 or higher)
* **npm** (Node Package Manager)
* **Git**

---

## 🚀 Installation Instructions

Follow these exact steps to set up the project on your computer:

### 1. Clone the Repository
Open your terminal or command prompt and run:
```bash
git clone [https://github.com/PasanUdara/IT3040_Assignment1_IT23667846.git]
cd IT3040_Assignment1_IT23667846


2. Install Dependencies

Install the required Node.js packages defined in the project:
Bash

npm install

3. Install Browsers

Download the browser binaries (Chromium, Firefox, WebKit) required for automation:
Bash

npx playwright install

🧪 How to Run Tests
Option 1: Run All Tests (Headless Mode)

Executes all 35 tests in the background. This is the fastest method.
Bash

npx playwright test

Option 2: Run All Tests (Headed Mode)

Opens the browser window so you can visually see the automation typing and checking results.
Bash

npx playwright test --headed

Option 3: Run on a Specific Browser

If you want to run tests only on Google Chrome (Chromium) or Firefox:
Bash

npx playwright test --project=chromium --headed

Bash

npx playwright test --project=firefox --headed