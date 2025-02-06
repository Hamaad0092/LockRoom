import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://lockroom-fe-staging.vercel.app/splash');
  await page.getByRole('button', { name: 'Continue with Email' }).click();
  await page.getByText('Create an Account').click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('owner');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('flow');
  await page.getByRole('textbox', { name: 'Email' }).dblclick();
  await page.getByRole('textbox', { name: 'Email' }).fill('flow009297@gmail.com');
  await page.getByRole('textbox', { name: 'Enter phone number' }).dblclick();
  await page.getByRole('textbox', { name: 'Enter phone number' }).fill('+92 308 7547136');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.goto('https://lockroom-fe-staging.vercel.app/authentication/create-password?confirm=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOGU4N2IxYWMtNDkwZC00ZTRkLTg0MmMtY2UzZTkzODgwNjc5IiwiZW1haWwiOiJmbG93MDA5Mjk3QGdtYWlsLmNvbSIsImlhdCI6MTczODU4MTYwNSwiZXhwIjoxNzM4NjY4MDA1fQ.SW1h8G0RVCXIb6WvJJzu1Gbs_RGSGK2BBOwk-VZnWp0');
  await page.getByRole('textbox', { name: 'Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('password123#P');
  await page.getByRole('textbox', { name: 'Confirm Password' }).dblclick();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('password123#P');
  await page.getByRole('button', { name: 'Save Password' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('flow009297@gmail.com');
  
  await page.getByRole('textbox', { name: 'Password' }).fill('password123#P');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('[id="\\:r0\\:"]').click();
  await page.locator('div').filter({ hasText: /^OWOwner's Workspace$/ }).first().click();
  await page.getByRole('button', { name: '+ Create New Room' }).click();
  await page.getByRole('textbox', { name: 'Enter room name' }).click();
  await page.getByRole('textbox', { name: 'Enter room name' }).fill('Room 1');
  await page.getByRole('textbox', { name: 'Enter room name' }).press('Enter');
  await page.getByRole('button', { name: 'Create Room' }).click();
  await page.locator('div').filter({ hasText: /^Room 1Created: Feb 3, 2025$/ }).nth(2).click();
});