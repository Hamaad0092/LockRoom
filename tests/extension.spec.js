import { test, expect, chromium } from '@playwright/test';

test('Launch WhatsApp Web with Extension', async ({}) => {
    const userDataDir = 'C:/Users/Spadasoft/AppData/Local/Google/Chrome/User Data/Profile 1'; // Change to 'Default' if needed
    const extensionPath = 'C:/Users/Spadasoft/Desktop/WAWCD Builds/Ali bhai build'; // Ensure correct extension path

    // Launch Chrome with Persistent Context
    const browser = await chromium.launchPersistentContext(userDataDir, {
        headless: false, 
        args: [
            `--disable-extensions-except=${extensionPath}`,
            `--load-extension=${extensionPath}`,
            '--no-sandbox', // Fix permission issues
            '--disable-gpu' // Reduce GPU-related errors
        ]
    });

    // Get first active page or create a new one
    let page = browser.pages()[0]; 
    if (!page) {
        page = await browser.newPage();
    }

    // Open WhatsApp Web
    await page.goto('https://web.whatsapp.com', { waitUntil: 'domcontentloaded' });

    // Wait for WhatsApp Web QR code or another identifier
    try {
        await page.waitForSelector('canvas[aria-label="Scan me!"]', { timeout: 15000 });
        console.log('WhatsApp Web loaded successfully');
    } catch (error) {
        console.log('Failed to detect WhatsApp QR code:', error.message);
    }

    // Keep browser open for testing (comment out if needed)
    // await browser.close();
});
