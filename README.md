# PlaywrightFlipkart
PlaywrightFlipkart/
│
├── tests/ # Contains all test spec files
│ └── Flipkart.spec.ts
│
├── pages/ # Page Object Model classes
│ ├── HomePage.ts
│ ├── ProductDetails.ts
│ └── CartPage.ts
| |__ BasePage.ts
│  
├── utilities/ # Utility/helper functions
│ └── Utility.ts
│
├── playwright-report/ # HTML test reports and screenshots
│
├── playwright.config.ts # Playwright configuration
├── package.json # Project dependencies and scripts
└── README.md # Project documentation

---------------------------------------------------------------------------

RUNNING TESTS FROM TERMINAL:
----------------------------------------------------------------------------

1. Clone the Repository

Download or clone the code from GitHub using the following URL:

git clone https://github.com/Demappa/PlaywrightFlipkart.git

2. 📂 Navigate to Project Directory

Copy the downloaded/cloned project to your desired location, for example:

/Users/your-username/Documents/PlaywrightFlipkart

Then, open a terminal and navigate to the tests folder:

cd /Users/your-username/Documents/PlaywrightFlipkart/tests

3. Install Playwright Dependencies

Run the following command to initialize Playwright and install all required dependencies:

npm init playwright@latest

4. Run the Tests

To execute all tests using Chromium browser with an HTML report:

npx playwright test --headed --reporter=html

5.  If You Encounter Browser Dependency Issues

If tests fail due to missing browser binaries or dependencies, run:

npx playwright install

Then re-run the tests:

npx playwright test --headed --reporter=html

6. View the HTML Report

Once the tests complete successfully, open the generated HTML test report with:

npx playwright show-report

------------------------------------------------------------------------------------

 RUNNING TESTS FROM VSCODE (VS Code)
 ------------------------------------------------------------------------------------

1. Open the Project in VS Code

Import the cloned/downloaded project into VS Code.

Open the Terminal inside VS Code (Terminal → New Terminal).

2. Install Playwright Dependencies

Run the following to set up Playwright in your local environment:

npm init playwright@latest

3. Run the Tests

Run the following command to execute tests:

npx playwright test --headed --reporter=html

4. Install Missing Browsers if Needed

If browser-related issues occur, resolve them with:

npx playwright install

Re-run the test command:

npx playwright test --headed --reporter=html

5. View the Test Report

Open the test report in your browser using:

npx playwright show-report
------------------------------------------------------------------------------------

