import { test, expect } from '@playwright/test';

test('Search Product Verification', async ({ page }) => {

  // Navigate to Amazon home page
  await page.goto('/', {
    waitUntil: 'domcontentloaded',
    timeout: 30000
  });

  // Verify search box is available
  const searchBox = page.locator('#twotabsearchtextbox');

  await expect(searchBox).toBeVisible();

  // Enter product name
  await searchBox.fill('laptop');

  // Click Search
  await page.locator('#nav-search-submit-button').click();

  // Wait for navigation
  await page.waitForLoadState('domcontentloaded');

  // Verify we are still on Amazon
  await expect(page).toHaveURL(/amazon\.com/i);

  // Verify search keyword appears somewhere on the page
  await expect(
    page.locator('body')
  ).toContainText(/laptop/i);

  // Capture screenshot
  await page.screenshot({
    path: 'verification/search-product.png',
    fullPage: true
  });
});