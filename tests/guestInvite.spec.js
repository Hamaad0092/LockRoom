import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://lockroom-fe-staging.vercel.app/splash');
  await page.getByRole('button', { name: 'Continue with Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('flow009297@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('password123#P');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('div').filter({ hasText: /^OWOwner's Workspace$/ }).first().click();
  await page.locator('div').filter({ hasText: /^Room 1Created: Feb 3, 2025$/ }).nth(2).click();
  await page.locator('div:nth-child(2) > div > span').click();
  await page.getByRole('button', { name: '+ Add Participants' }).click();
  await page.getByRole('textbox', { name: 'email@example.com,email@' }).click();
  await page.getByRole('textbox', { name: 'email@example.com,email@' }).fill('waleed@lockroom.com');
  await page.getByRole('combobox').selectOption('a2af4f67-803e-459a-a95a-f967f43ad57b');
  await page.getByRole('button', { name: 'Send Invites' }).click();
  await page.locator('div').filter({ hasText: /^Buyer 11$/ }).first().click();
});