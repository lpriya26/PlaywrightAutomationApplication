import { test, expect } from '@playwright/test';

test('Home Page Verification', async ({ page }) => {

  // Navigate to Amazon home page
  await page.goto('/', {
    waitUntil: 'domcontentloaded',
    timeout: 30000
  });

  // Verify we are on Amazon
  await expect(page).toHaveURL(/amazon\.com/i);

  // Verify Amazon logo
  await expect(
    page.locator('#nav-logo')
  ).toBeVisible();

  // Verify search box
  await expect(
    page.locator('#twotabsearchtextbox')
  ).toBeVisible();

  // Verify cart
  await expect(
    page.locator('#nav-cart')
  ).toBeVisible();

  // Full-page screenshot
  await page.screenshot({
    path: 'verification/home-page.png',
    fullPage: true
  });
});