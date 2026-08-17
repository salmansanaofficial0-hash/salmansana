const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1400, height: 1200 } });
  const pdfUrl = 'file:///c:/Users/salma_4kroi2t/Desktop/cer/Coursera%206UG02QRKET4T.pdf';
  await page.goto(pdfUrl, { waitUntil: 'domcontentloaded', timeout: 120000 });
  await page.waitForTimeout(20000);
  const text = await page.locator('body').innerText();
  console.log('---BODY TEXT START---');
  console.log(text.slice(0, 5000));
  console.log('---BODY TEXT END---');
  await page.screenshot({ path: 'c:/Users/salma_4kroi2t/salmansana/tmp-cert-1.png', fullPage: true });
  console.log('screenshot saved to c:/Users/salma_4kroi2t/salmansana/tmp-cert-1.png');
  await browser.close();
})();
