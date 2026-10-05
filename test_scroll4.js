const puppeteer = require('puppeteer');
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });

  await page.goto('http://localhost:4321/regulamento-concurso-cosplay.html');
  await wait(1000);

  for (let i = 0; i < 15; i++) {
     await page.evaluate(() => window.scrollBy(0, 1000));
     await wait(200);
  }

  await wait(1000);

  const notVisibleInfos = await page.evaluate(() => {
    const els = document.querySelectorAll('.reveal:not(.is-visible)');
    return Array.from(els).map(el => ({
      tagName: el.tagName,
      className: el.className,
      id: el.id,
      text: el.innerText ? el.innerText.substring(0, 50) : ''
    }));
  });
  console.log('Not visible elements:', notVisibleInfos);

  await browser.close();
})();
