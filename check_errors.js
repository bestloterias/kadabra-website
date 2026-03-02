import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    page.on('console', msg => console.log('PAGE LOG:', msg.type(), msg.text()));
    page.on('pageerror', err => console.log('PAGE ERROR:', err.toString()));
    page.on('requestfailed', request => {
        console.log('REQUEST FAILED:', request.url(), request.failure().errorText);
    });

    try {
        await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 10000 });
        console.log("Page loaded. HTML:", await page.content());
    } catch (err) {
        console.log("Navigation error:", err);
    }

    await browser.close();
})();
