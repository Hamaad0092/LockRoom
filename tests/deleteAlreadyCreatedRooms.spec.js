import { expect,test } from "@playwright/test";
const org1 = 'johnelia0092@gmail.com';
const org2 = 'flow009297@gmail.com';
const password = 'password123#P';
const R1 = "ROOM_1";
const R2 = "ROOM_2";
console.log('Delete both that were already created in both organizations.')
test('Delete the rooms in the first organization.',async({page})=>{
    await page.goto('https://lockroom-fe-staging.vercel.app/splash');
    await page.getByRole('button', { name: 'Continue with Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill(org1);
    await page.getByRole('textbox', { name: 'Password' }).dblclick();
    await page.getByRole('textbox', { name: 'Password' }).fill(password);
    await page.getByRole('button', { name: 'Sign In' }).click();

    await page.locator('xpath=//*[@id="root"]/div[1]/div[2]/div[2]/div/div/div/div[1]').click();
    await page.locator('img[src="/icons/delete-icon.svg"][alt="Menu Icon"]').nth(0).click()
    await expect(page.locator('//p[text()="ROOM_1"]/ancestor::div[contains(@class, "cursor-pointer")]')).toBeVisible();
    console.log('✅ ROOM_1 exists');
    console.log('🗑 Opened delete modal for ROOM_1');
    await page.locator('xpath=//*[@id="root"]/form/div/div/div[1]/input').fill(R1);
    console.log(`📝 Entered confirmation text: ${R1}`);
    await page.locator('button[type="submit"]:has-text("Delete")').click();
    await expect.soft(page.locator('//p[text()="ROOM_1"]/ancestor::div[contains(@class, "cursor-pointer")]')).toBeHidden();
    console.log('✅ ROOM_1 deleted successfully');
    await page.waitForTimeout(5000)

    await page.locator('img[src="/icons/delete-icon.svg"][alt="Menu Icon"]').nth(0).click()
    await expect(page.locator('//p[text()="ROOM_2"]/ancestor::div[contains(@class, "cursor-pointer")]')).toBeVisible();
    console.log('✅ ROOM_2 exists');
    console.log('🗑 Opened delete modal for ROOM_2');
    await page.locator('xpath=//*[@id="root"]/form/div/div/div[1]/input').fill(R2);
    console.log(`📝 Entered confirmation text: ${R2}`);
    await page.locator('button[type="submit"]:has-text("Delete")').click();
    await expect.soft(page.locator('//p[text()="ROOM_2"]/ancestor::div[contains(@class, "cursor-pointer")]')).toBeHidden();
    console.log('✅ ROOM_2 deleted successfully');
    await page.waitForTimeout(5000)


})