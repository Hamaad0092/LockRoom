import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://lockroom-fe-staging.vercel.app/splash');
  await page.getByRole('button', { name: 'Continue with Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('flow009297@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('password123#P');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('xpath=//*[@id="root"]/div[1]/div[2]/div[2]/div/div/div/div').click();
  await page.locator('xpath=//*[@id="root"]/div[1]/div[2]/div[2]/div/div[2]/div/div').click()
  await page.locator('div').filter({ hasText: /^Groups$/ }).nth(1).click();
  await page.getByRole('button', { name: 'create-group-icon Create Group' }).click();
  await page.getByRole('textbox', { name: 'Enter group name' }).click();
  await page.getByRole('textbox', { name: 'Enter group name' }).fill('new group');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  await page.getByRole('button', { name: '+ Add Participants' }).click();
  await page.waitForTimeout(5000); 
  await page.getByRole('textbox', { name: 'email@example.com,email@' }).click();
  await page.waitForTimeout(5000); 
  await page.getByRole('textbox', { name: 'email@example.com,email@' }).fill('hustler0092@gmail.com');
  
  await page.locator('[name="group_id"]').selectOption({ index: 2 });
  await page.waitForTimeout(5000); 
  await page.getByRole('button', { name: 'Send Invites' }).click();

  await page.waitForTimeout(5000); 
});


