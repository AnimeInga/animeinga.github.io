const puppeteer = require('puppeteer');
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });

  await page.goto('http://localhost:4321/regulamento-concurso-cosplay.html');
  await wait(1000);

  // Disable transition for testing
  await page.evaluate(() => {
    const style = document.createElement('style');
    style.innerHTML = '.reveal { transition: none !important; }';
    document.head.appendChild(style);
  });

  for (let i = 0; i < 20; i++) {
     await page.evaluate(() => window.scrollBy(0, 500));
     await wait(100);
  }

  const notVisibleInfos = await page.evaluate(() => {
    const els = document.querySelectorAll('.reveal:not(.is-visible)');
    return Array.from(els).map(el => ({
      id: el.id
    }));
  });
  console.log('Not visible elements:', notVisibleInfos);

  await browser.close();
})();
