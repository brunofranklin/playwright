import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  
    await page.goto(`${process.env.DOMAIN}`)
      
  }); 

  test('Check that after logging in will be redirected to the correct URL',async ({ page }) => {
    test.slow()
    await page.waitForTimeout(6000);     
    expect(page.url()).toBe('https://www.google.com/');
  }); 

