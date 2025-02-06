import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://lockroom-fe-staging.vercel.app/splash');
  await page.getByRole('button', { name: 'Continue with Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('flow009297@gmail.com');
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('password123#P');
  await page.getByRole('img').click();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('div').filter({ hasText: /^OWOwner's Workspace$/ }).first().click();
  await page.locator('div').filter({ hasText: /^Room 1Created: Feb 3, 2025$/ }).nth(2).click();
  await page.locator('div').filter({ hasText: /^Groups$/ }).nth(1).click();
  await page.getByRole('button', { name: '+ Add Participants' }).click();
  await page.getByRole('textbox', { name: 'email@example.com,email@' }).click();
  await page.getByRole('textbox', { name: 'email@example.com,email@' }).fill('hustler0092@gmail.com');
  await page.getByRole('combobox').selectOption('738c5b1e-c04e-48c4-a9cc-e8dd30e4eb33');
  await page.getByRole('button', { name: 'Send Invites' }).click();
});