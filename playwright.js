const {chromium} = require('playwright');  // Or 'chromium' or 'firefox'.
const myArgs = process.argv.slice(2);

(async () => {
    const browser = await chromium.launch({headless: true});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(myArgs[0]);
    await page.addScriptTag({path: './jquery-min.js'})
    await page.addScriptTag({path: './bomlib.js'})
    await page.addScriptTag({path: './polyk.js'})
    await page.addScriptTag({path: './rectlib.js'})
    await page.addScriptTag({path: './md5.js'})
    const result = await page.evaluate(() => {
        return startSegmentation('parent')
    })
    await page.screenshot({path: 'page.png', fullPage: true})
    await browser.close()
})();