import { test, expect } from '@playwright/test';
test('scroll', async ({ page }) => {
  await page.goto('file://' + process.cwd() + '/test_observer.html');
  // Wait a bit
  await page.waitForTimeout(1000);
  // Scroll fast
  await page.evaluate(() => window.scrollBy(0, 5000));
  await page.waitForTimeout(1000);
  const isVisible = await page.evaluate(() => document.getElementById('target').classList.contains('is-visible'));
  console.log('Is visible?', isVisible);
});
