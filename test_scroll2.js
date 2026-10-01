const puppeteer = require('puppeteer');
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });

  // Go to local dev server running the regulations page
  await page.goto('http://localhost:4321/regulamento-concurso-cosplay.html');
  await wait(1000);

  // Scroll super fast multiple times
  for (let i = 0; i < 5; i++) {
     await page.evaluate(() => window.scrollBy(0, 1000));
     await wait(200);
  }

  // Wait to allow any pending observer tasks to finish
  await wait(1000);

  // Take screenshot for verification
  await page.screenshot({ path: 'cosplay_mobile_fixed.png', fullPage: true });
  console.log('Saved cosplay_mobile_fixed.png');

  // Let's also output how many elements with .reveal don't have .is-visible yet
  const notVisible = await page.evaluate(() => {
    return document.querySelectorAll('.reveal:not(.is-visible)').length;
  });
  console.log('Number of .reveal elements not visible:', notVisible);

  await browser.close();
})();
