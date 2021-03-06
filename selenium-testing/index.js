const {Builder, By, Key, until} = require('selenium-webdriver');

const webdriver = require('selenium-webdriver');

(async function example() {
  let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build()
  try {
    await driver.get('http://localhost:3000/analysis');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
})();