const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.on('console', msg => console.log('PAGE LOG:', msg.text()));

  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:4321/regulamento-concurso-cosplay.html');

  // Intercept IntersectionObserver and see if it runs
  await page.evaluate(() => {
    const origObserve = IntersectionObserver.prototype.observe;
    IntersectionObserver.prototype.observe = function(target) {
      console.log('Observing:', target.id || target.className);
      origObserve.call(this, target);
    };
  });

  await new Promise(r => setTimeout(r, 1000));
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await new Promise(r => setTimeout(r, 1000));

  await browser.close();
})();
