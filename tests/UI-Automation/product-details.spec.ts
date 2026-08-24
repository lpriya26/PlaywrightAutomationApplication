import { test, expect } from '@playwright/test';

test('Product Details Verification', async ({ page }) => {

  // Open Amazon
  await page.goto('/', {
    waitUntil: 'domcontentloaded',
    timeout: 30000
  });

  // Verify Amazon URL
  await expect(page).toHaveURL(/amazon\.com/i);

  // Search box
  const searchBox = page.locator('#twotabsearchtextbox');

  await expect(searchBox).toBeVisible();

  // Search for laptop
  await searchBox.fill('laptop');

  // Click search
  await page.locator('#nav-search-submit-button').click();

  // Wait for page to load
  await page.waitForLoadState('domcontentloaded');

  // Verify Amazon search page
  await expect(page).toHaveURL(/amazon\.com/i);

  // Find first product
  const productLink = page
    .locator('a[href*="/dp/"]')
    .first();

  await expect(productLink).toBeVisible({
    timeout: 15000
  });

  // Click first product
  await productLink.click();

  // Wait for product page
  await page.waitForLoadState('domcontentloaded');

  // IMPORTANT:
  // Amazon has both a visible span and hidden input
  // with id="productTitle".
  const productTitle = page.locator('span#productTitle');

  // Verify product title
  await expect(productTitle).toBeVisible({
    timeout: 15000
  });

  // Verify product title contains text
  await expect(productTitle).not.toHaveText('');

  // Screenshot
  await page.screenshot({
    path: 'verification/product-details.png',
    fullPage: true
  });
});