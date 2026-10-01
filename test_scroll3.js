const puppeteer = require('puppeteer');
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });

  await page.goto('http://localhost:4321/regulamento-concurso-cosplay.html');
  await wait(1000);

  // Keep scrolling to the very bottom to make sure everything gets visible
  for (let i = 0; i < 15; i++) {
     await page.evaluate(() => window.scrollBy(0, 1000));
     await wait(200);
  }

  await wait(1000);

  const notVisible = await page.evaluate(() => {
    return document.querySelectorAll('.reveal:not(.is-visible)').length;
  });
  console.log('Number of .reveal elements not visible after scrolling all the way to bottom:', notVisible);

  await browser.close();
})();
