const { remote } = require('webdriverio');

const capabilities = {
  platformName: 'ios',
  'appium:automationName': 'xcuitest',
  'appium:deviceName': 'iPhone 15',
  'appium:bundleId': 'com.atomux.app.preview',
  'appium:udid': '0E7BAE0C-B466-431F-9C22-690389917E9B',
};

const wdOpts = {
  hostname: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'info',
  capabilities,
};

async function runTest() {
  // write appium webdriver tests to test my app

  const driver = await remote(wdOpts);
  try {
    const el7 = driver.$(
      '-ios class chain:**/XCUIElementTypeStaticText[`name == "Sign In"`][2]',
    );
    await el7.click();
    const el8 = driver.$('accessibility id:Envelope, tab, 2 of 4');
    await el8.click();
    const el9 = driver.$(
      '-ios class chain:**/XCUIElementTypeStaticText[`name == "Envelope Home with Cookie Share"`][2]',
    );
    await el9.click();
    const el10 = driver.$(
      '-ios class chain:**/XCUIElementTypeOther[`name == "Vite + React + TS"`]/XCUIElementTypeOther[4]',
    );
    await el10.click();
  } finally {
    await driver.pause(1000);
    await driver.deleteSession();
  }
}

runTest().catch(console.error);
