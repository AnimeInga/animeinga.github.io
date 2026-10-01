const puppeteer = require('puppeteer');
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });

  await page.goto('http://localhost:4321/regulamento-concurso-cosplay.html');
  await wait(1000);

  // check height of sections
  const sizes = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.reg-section')).map(el => ({
      id: el.id,
      height: el.getBoundingClientRect().height
    }));
  });
  console.log('Section sizes:', sizes);

  await browser.close();
})();
