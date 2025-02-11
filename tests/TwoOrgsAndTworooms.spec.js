import { test, expect } from '@playwright/test';

console.log('There are two organizations, each with two rooms. In the first organization, invite the second organization to the first room as an admin and to the second room as a guest.Similarly, in the second organization, invite the first organization to the first room  as an admin and to the second room as a guest.')

const R1 = "R00M_1";
const R2 = "ROOM_2";
const org1 = 'flow009297@gmail.com';
const org2 = 'johnelia0092@gmail.com';
const password = 'password123#P';

test('test', async ({ page }) => {
    await page.goto('https://lockroom-fe-staging.vercel.app/splash');
    await page.getByRole('button', { name: 'Continue with Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill(org1);
    await page.getByRole('textbox', { name: 'Password' }).dblclick();
    await page.getByRole('textbox', { name: 'Password' }).fill(password);
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
    await page.getByRole('textbox', { name: 'email@example.com,email@' }).fill(org2);
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
    await page.getByRole('textbox', { name: 'email@example.com,email@' }).fill(org2);
    await page.waitForTimeout(1000);
    await page.getByRole('combobox').selectOption({ index: 2 });
    await page.getByRole('button', { name: 'Send Invites' }).click();
    await page.waitForTimeout(1000);

});

test('test2', async ({ page }) => {
    await page.goto('https://lockroom-fe-staging.vercel.app/splash');
    await page.getByRole('button', { name: 'Continue with Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill(org2);
    await page.getByRole('textbox', { name: 'Password' }).dblclick();
    await page.getByRole('textbox', { name: 'Password' }).fill(password);
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
    await page.getByRole('textbox', { name: 'email@example.com,email@' }).fill(org1);
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
    await page.getByRole('textbox', { name: 'email@example.com,email@' }).fill(org1);
    await page.waitForTimeout(1000);
    await page.getByRole('combobox').selectOption({ index: 2 });
    await page.getByRole('button', { name: 'Send Invites' }).click();
    await page.waitForTimeout(1000);

});