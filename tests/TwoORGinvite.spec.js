import { test, expect } from '@playwright/test';

const org1 = 'flow009297@gmail.com';
const org2 = 'johnelia0092@gmail.com';
const password = 'password123#P';

console.log('Two organizations should be created first for this use case.');

test('Create Room and Invite Participant - Org1', async ({ page }) => {
    const roomName = "R00M_1";

    await page.goto('https://lockroom-fe-staging.vercel.app/splash');
    await page.getByRole('button', { name: 'Continue with Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill(org1);
    await page.getByRole('textbox', { name: 'Password' }).fill(password);
    await page.getByRole('button', { name: 'Sign In' }).click();

   
    await expect(page.getByText('Dashboard')).toBeVisible();

  
    await page.getByRole('button', { name: ' Create New Room' }).click();
    await page.getByRole('textbox', { name: 'Enter room name' }).fill(roomName);
    await page.getByRole('button', { name: 'Create Room' }).click();

    // Verify room is created
    await expect(page.getByText(roomName)).toBeVisible();

    // Navigate to Groups and add participant
    await page.getByRole('button', { name: 'Groups' }).click();
    await page.getByRole('button', { name: '+ Add Participants' }).click();
    await page.getByRole('textbox', { name: 'email@example.com,email@' }).fill(org2);
    await page.getByRole('combobox').selectOption({ index: 1 });
    await page.getByRole('button', { name: 'Send Invites' }).click();

    // Verify invite sent
    await expect(page.getByText('Invite Sent')).toBeVisible();
});

test('Create Room and Invite Participant - Org2', async ({ page }) => {
    const roomName = "R00M_2";

    await page.goto('https://lockroom-fe-staging.vercel.app/splash');
    await page.getByRole('button', { name: 'Continue with Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill(org2);
    await page.getByRole('textbox', { name: 'Password' }).fill(password);
    await page.getByRole('button', { name: 'Sign In' }).click();

    // Ensure login success
    await expect(page.getByText('Dashboard')).toBeVisible();

    // Create new room
    await page.getByRole('button', { name: ' Create New Room' }).click();
    await page.getByRole('textbox', { name: 'Enter room name' }).fill(roomName);
    await page.getByRole('button', { name: 'Create Room' }).click();

    // Verify room is created
    await expect(page.getByText(roomName)).toBeVisible();

    // Navigate to Groups and add participant
    await page.getByRole('button', { name: 'Groups' }).click();
    await page.getByRole('button', { name: '+ Add Participants' }).click();
    await page.getByRole('textbox', { name: 'email@example.com,email@' }).fill(org1);
    await page.getByRole('combobox').selectOption({ index: 1 });
    await page.getByRole('button', { name: 'Send Invites' }).click();

    // Verify invite sent
    await expect(page.getByText('Invite Sent')).toBeVisible();
});
