Overview: 

This project is created for UI and API automation using Playwright and TypeScript.

UI Automation

Website

Amazon: https://www.amazon.com/


Framework

- Playwright
- TypeScript
- Page Object Model (POM)
- Chromium
- Firefox
- WebKit


UI Tests

1. Home Page Verification
   - Verify Amazon logo
   - Verify search box
   - Verify cart
   - Capture full-page screenshot

2. Search Product Verification
   - Search for laptop
   - Verify search results
   - Capture screenshot

3. Product Details Verification
   - Search for laptop
   - Open the first product
   - Verify product title
   - Capture screenshot


API Automation

API

Petstore: https://petstore.swagger.io/


API Tests

1. Create Pet
   - Send POST request
   - Create pet with dynamic test data
   - Verify response status
   - Verify pet ID and name

2. Read Pet
   - Send GET request using pet ID
   - Verify response status
   - Verify pet ID and name

3. Update Pet
   - Send PUT request
   - Update pet name
   - Verify updated name

4. Delete Pet
   - Send DELETE request
   - Verify response status
   - Send GET request again
   - Verify response is 404


Project Structure

PlaywrightAutomationApplication

- tests
  - UI Automation
    - home-page.spec.ts
    - search-product.spec.ts
    - product-details.spec.ts
  
  - API Automation
    - pet-crud.spec.ts

- verification
  - Screenshots

- playwright.config.ts
- package.json
- package-lock.json
- README.md


Setup

Create a new Playwright project:

npm init playwright@latest

Select TypeScript when asked.

Select Yes when asked to install Playwright browsers.


Execution

1. Run all UI tests

npx playwright test tests/UI-Automation


2. Run all API tests

npx playwright test tests/API-Automation


3. Run all tests

npx playwright test


4. Run UI tests in headed mode

npx playwright test tests/UI-Automation --headed


5. Run UI tests on Chromium

npx playwright test tests/UI-Automation --project=chromium


6. Run UI tests on Firefox

npx playwright test tests/UI-Automation --project=firefox


7. Run UI tests on WebKit

npx playwright test tests/UI-Automation --project=webkit


8. Run a specific UI test

npx playwright test tests/UI-Automation/home-page.spec.ts


9. Run the API test

npx playwright test tests/API-Automation/pet-crud.spec.ts


10. View HTML report

npx playwright show-report


Screenshots

Screenshots are saved in the verification folder.


Notes

- Amazon public pages are used for UI automation.
- Petstore is used for API automation.
- No login, payment, or account creation flows are automated.
- Page Object Model is used for UI automation.
- Playwright API requests are used for API automation.
- Dynamic test data is used for the API test.
- The UI tests can run on Chromium, Firefox and WebKit.


Troubleshooting

If port 9323 is already in use:

1. Check the process using the port

netstat -ano | findstr :9323


2. Stop the process

taskkill /PID <PID> /F

Replace <PID> with the PID shown on your computer.


3. Open the HTML report again

npx playwright show-report
