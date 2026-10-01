const puppeteer = require('puppeteer');
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });

  await page.goto('http://localhost:4321/regulamento-concurso-cosplay.html');
  await wait(1000);

  // Intercept the IntersectionObserver to see exactly what gets triggered
  await page.evaluate(() => {
    window.triggeredElements = [];
    const origObserve = IntersectionObserver.prototype.observe;
    IntersectionObserver.prototype.observe = function(target) {
      if (target.id) {
         target.dataset.watched = 'true';
      }
      origObserve.call(this, target);
    };

    // We overwrite the callback to also log which ones intersected
    const origConfig = IntersectionObserver;
    window.IntersectionObserver = class extends origConfig {
      constructor(callback, options) {
        super((entries) => {
          entries.forEach(e => {
            if (e.isIntersecting && e.target.id) {
              window.triggeredElements.push(e.target.id);
            }
          });
          callback(entries);
        }, options);
      }
    };
  });

  // Reload page to apply our monkey patch
  await page.reload();
  await wait(1000);

  for (let i = 0; i < 40; i++) {
     await page.evaluate(() => window.scrollBy(0, 800));
     await wait(200);
  }

  const triggered = await page.evaluate(() => window.triggeredElements);
  console.log('Triggered elements:', Array.from(new Set(triggered)));

  const notVisibleInfos = await page.evaluate(() => {
    const els = document.querySelectorAll('.reveal:not(.is-visible)');
    return Array.from(els).map(el => ({
      id: el.id
    }));
  });
  console.log('Not visible elements:', notVisibleInfos);

  await browser.close();
})();
