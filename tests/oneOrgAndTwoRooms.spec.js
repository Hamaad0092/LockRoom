import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
    const R1="R00M_1";
    const R2="ROOM_2";
  await page.goto('https://lockroom-fe-staging.vercel.app/splash');
  await page.getByRole('button', { name: 'Continue with Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('flow009297@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).dblclick();
  await page.getByRole('textbox', { name: 'Password' }).fill('password123#P');
  await page.getByRole('button', { name: 'Sign In' }).click();


  await page.locator('xpath=//*[@id="root"]/div[1]/div[2]/div[2]/div/div/div/div').click();

  await page.getByRole('button', { name: ' Create New Room' }).click();
  await page.getByRole('textbox', { name: 'Enter room name' }).click();
  await page.getByRole('textbox', { name: 'Enter room name' }).fill(R1);
  await page.getByRole('button', { name: 'Create Room' }).click();

  await page.getByRole('button', { name: ' Create New Room' }).click();
  await page.getByRole('textbox', { name: 'Enter room name' }).click();
  await page.getByRole('textbox', { name: 'Enter room name' }).fill(R2);
  await page.getByRole('button', { name: 'Create Room' }).click();

  await page.waitForTimeout(1000);

  await page.locator('//*[@id="root"]/div[1]/div[2]/div[2]/div/div[2]/div/div[1]').click();
  await page.locator('div').filter({ hasText: /^Groups$/ }).nth(1).click();
  await page.getByRole('button', { name: '+ Add Participants' }).click();
  await page.getByRole('textbox', { name: 'email@example.com,email@' }).click();
  await page.getByRole('textbox', { name: 'email@example.com,email@' }).fill('hustler0092@gmail.com');
  await page.getByRole('combobox').selectOption({ index: 1 });
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Send Invites' }).click();
  await page.waitForTimeout(1000);
//   await page.locator('div').filter({ hasText: /^Rooms \/ Room 1$/ }).locator('div').click();
  await page.locator('//*[@id="root"]/div[1]/div[2]/div[1]/div[1]/div/div').click();
  
  await page.locator('//*[@id="root"]/div[1]/div[2]/div[2]/div/div[2]/div/div[2]').click();

  
  await page.locator('div').filter({ hasText: /^Groups$/ }).nth(1).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: '+ Add Participants' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('textbox', { name: 'email@example.com,email@' }).click();
  await page.getByRole('textbox', { name: 'email@example.com,email@' }).fill('hustler0092@gmail.com');
  await page.waitForTimeout(1000);
  await page.getByRole('combobox').selectOption({ index: 2 });
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Send Invites' }).click();
 
});