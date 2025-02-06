import { test, expect, beforeEach, browser } from '@playwright/test';

let page;
let context;

beforeEach(async ({ browser }) => {
  context = await browser.newContext();
  slowMo:2000
  page = await context.newPage();
  await page.goto('https://lockroom-fe-staging.vercel.app/splash',{slowMo:100});
  await page.getByRole('button', { name: 'Continue with Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('flow009297@gmail.com');
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('password123#P');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('div').filter({ hasText: /^FLFlow's Workspace$/ }).first().click();});

test('owner invite himself as a admin', async () => {
//     await page.getByRole('button', { name: '+ Create New Room' }).click();
//   await page.getByRole('textbox', { name: 'Enter room name' }).click();
//   await page.getByRole('textbox', { name: 'Enter room name' }).fill('Room1');
//   await page.getByRole('button', { name: 'Create Room' }).click();
await page.getByText('Room1').click()
await page.getByText('Groups').click();
await page.getByText('Add Participants').click()
await page.waitForTimeout(5000)
  await page.getByRole('textbox', { name: 'email@example.com,email@' }).click();
  await page.getByRole('textbox', { name: 'email@example.com,email@' }).fill('flow009297@gmail.com',{slowMo:50});
  await page.getByRole('combobox').selectOption('af39d3cd-4105-4348-8ec6-bfc65dd1b266',{slowMo:50});
  await page.waitForTimeout(5000)
  await page.getByRole('button', { name: 'Send Invites' }).click();
});

test('Owner invite himself as a guest',async()=>{
  await page.getByText('Room1').click()
  await page.getByText('Groups').click();
  await page.getByText('Add Participants').click()
  await page.waitForTimeout(5000)
    await page.getByRole('textbox', { name: 'email@example.com,email@' }).click();
    await page.getByRole('textbox', { name: 'email@example.com,email@' }).fill('flow009297@gmail.com',{slowMo:50});
    await page.getByRole('combobox').selectOption('a90a3fc1-01a8-454b-a50b-2e6f44089ba8',{slowMo:50});
    await page.waitForTimeout(5000)
    await page.getByRole('button', { name: 'Send Invites' }).click();
})


