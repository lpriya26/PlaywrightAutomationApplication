import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  timeout: 30000, //Each test to run for a maximum of 30 seconds.

  expect: {
    timeout: 10000 //assertions to wait up to 10 seconds.
  },

  reporter: 'html',

  use: {
    baseURL: 'https://www.amazon.com', //amazon website

    trace: 'on-first-retry',

    screenshot: 'only-on-failure', //Take a screenshot when the test fails.

    video: 'retain-on-failure' //test video when the test fails.
  },

  projects: [

    {
      name: 'Chromium', //chrome driver
      use: {
        ...devices['Desktop Chrome']
      }
    },

    {
      name: 'Edge', //edge driver
      use: {
        ...devices['Desktop Edge']
      }
    },

    /*

    {
      name: 'Firefox',
      use: {
        ...devices['Desktop Firefox']
      }
    },

    {
      name: 'WebKit',
      use: {
        ...devices['Desktop Safari']
      }
      
    }

    */

  ]
});