const puppeteer = require('puppeteer');
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });

  await page.goto('http://localhost:4321/regulamento-concurso-cosplay.html');
  await wait(1000);

  // Try scrolling slowly to see if they are revealed properly
  for (let i = 0; i < 30; i++) {
     await page.evaluate(() => window.scrollBy(0, 300));
     await wait(200);
  }

  await wait(1000);

  const notVisibleInfos = await page.evaluate(() => {
    const els = document.querySelectorAll('.reveal:not(.is-visible)');
    return Array.from(els).map(el => ({
      id: el.id
    }));
  });
  console.log('Not visible elements on slow scroll:', notVisibleInfos);

  await browser.close();
})();
