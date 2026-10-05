const puppeteer = require('puppeteer');
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });

  await page.goto('http://localhost:4321/regulamento-concurso-cosplay.html');
  await wait(1000);

  // Jump to the final sections directly to see if they triggered correctly
  await page.evaluate(() => {
    const el = document.getElementById('modalidade-apresentacao');
    el.scrollIntoView();
  });
  await wait(500);

  await page.screenshot({ path: 'cosplay_mobile_final.png', fullPage: true });
  console.log('Saved cosplay_mobile_final.png');

  await browser.close();
})();
