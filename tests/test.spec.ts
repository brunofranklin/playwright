import { test, expect } from '@playwright/test';
import path from 'path';



test.beforeEach(async ({ page }) => {
    
    await page.goto(`${process.env.DOMAIN}`), { waitUntil: 'domcontentloaded', timeout: 10000 };
    await page.locator('input[data-cypress-id="authEmail"]').waitFor({ state: 'visible' });
    await page.waitForTimeout(3000);
    await page.locator('input[data-cypress-id="authEmail"]').fill(`${process.env.USER_CREDENTIALS}`); 
    await page.waitForTimeout(3000);
    await page.locator('button:has-text("Next")').click(); 
    await page.waitForTimeout(3000);    
    await page.locator('input[data-cypress-id="authPassword"]').waitFor({ state: 'visible' });
    await page.waitForTimeout(3000);
    await page.locator('input[data-cypress-id="authPassword"]').fill(`${process.env.USER_PASSWORD}`);  
    await page.waitForTimeout(3000); 
    await page.locator('button:has-text("Log in")').click();
    await page.waitForTimeout(3000);
          
  }); 
  
  test('Test Case 1 - Verify a user can log into Kojo ',{tag: ['@regression']}, async ({ page }) => {
    test.slow()
    await expect(page).toHaveURL('https://pr-env-15384.agora.dev/orders');   
  });

  test('Test Case 2 - Verify the Settings ',{tag: ['@smoke']}, async ({ page }) => {
    test.slow()
    const createNewButton = page.locator('div.ant-menu-submenu-title:has-text("Create New")').click();
    
    await page.mouse.wheel(0, 200);  
    await page.mouse.wheel(0, 200);  
    await page.locator('span.sc-f465c960-0.kwqism:text("Settings")').click();  
    await page.waitForTimeout(3000);   
    await page.locator('a:has-text("Admin")').click();
    await page.waitForTimeout(3000); 
    await expect(page).toHaveURL('https://pr-env-15384.agora.dev/admin/company');   
    await page.locator('input[name="name"]').fill('Kojo Company');
    await page.locator('input[name="phone"]').fill('(317) 233-5293');
    await page.mouse.wheel(0, 200);  
    await page.mouse.wheel(0, 200);  
    await page.getByRole('button', { name: 'Change', exact: true }).click();
    await page.locator('div[title="#FF6900"]').click();    
    await page.locator('button:has-text("Upload Image")').click();
    
    const imagePath = path.resolve('tests/images/logo_image.jpg'); // upload the image
   
  });
  


