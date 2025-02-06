import {test,expect} from '@playwright/test';
const org1='flow0092927gmail.com';
const org2='johnelia0092@gmail.com';
console.log('Two organizations should be created first for this use case.')
    test('test', async ({ page }) => {
        const R1="R00M_1";
        
      await page.goto('https://lockroom-fe-staging.vercel.app/splash');
      await page.getByRole('button', { name: 'Continue with Email' }).click();
      await page.getByRole('textbox', { name: 'Email' }).click();
      await page.getByRole('textbox', { name: 'Email' }).fill(org1);
      await page.getByRole('textbox', { name: 'Password' }).dblclick();
      await page.getByRole('textbox', { name: 'Password' }).fill('password123#P');
      await page.getByRole('button', { name: 'Sign In' }).click();
    
    
      await page.locator('xpath=//*[@id="root"]/div[1]/div[2]/div[2]/div/div/div/div').click();
    await page.getByRole('button', { name: ' Create New Room' }).click();
      await page.getByRole('textbox', { name: 'Enter room name' }).click();
      await page.getByRole('textbox', { name: 'Enter room name' }).fill(R1);
      await page.getByRole('button', { name: 'Create Room' }).click();
    
      await page.waitForTimeout(1000);
    
      await page.locator('//*[@id="root"]/div[1]/div[2]/div[2]/div/div[2]/div/div[1]').click();
      await page.locator('div').filter({ hasText: /^Groups$/ }).nth(1).click();
      await page.getByRole('button', { name: '+ Add Participants' }).click();
      await page.getByRole('textbox', { name: 'email@example.com,email@' }).click();
      await page.getByRole('textbox', { name: 'email@example.com,email@' }).fill(org2);
      await page.getByRole('combobox').selectOption({ index: 1 });
      await page.waitForTimeout(1000);
      await page.getByRole('button', { name: 'Send Invites' }).click();
      await page.waitForTimeout(1000);


})

test('test', async ({ page }) => {
    const R1="R00M_1";
    
  await page.goto('https://lockroom-fe-staging.vercel.app/splash');
  await page.getByRole('button', { name: 'Continue with Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(org2);
  await page.getByRole('textbox', { name: 'Password' }).dblclick();
  await page.getByRole('textbox', { name: 'Password' }).fill('password123#P');
  await page.getByRole('button', { name: 'Sign In' }).click();


  await page.locator('xpath=//*[@id="root"]/div[1]/div[2]/div[2]/div/div/div/div').click();
await page.getByRole('button', { name: ' Create New Room' }).click();
  await page.getByRole('textbox', { name: 'Enter room name' }).click();
  await page.getByRole('textbox', { name: 'Enter room name' }).fill(R1);
  await page.getByRole('button', { name: 'Create Room' }).click();

  await page.waitForTimeout(1000);

  await page.locator('//*[@id="root"]/div[1]/div[2]/div[2]/div/div[2]/div/div[1]').click();
  await page.locator('div').filter({ hasText: /^Groups$/ }).nth(1).click();
  await page.getByRole('button', { name: '+ Add Participants' }).click();
  await page.getByRole('textbox', { name: 'email@example.com,email@' }).click();
  await page.getByRole('textbox', { name: 'email@example.com,email@' }).fill(org1);
  await page.getByRole('combobox').selectOption({ index: 1 });
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Send Invites' }).click();
  await page.waitForTimeout(1000);


})