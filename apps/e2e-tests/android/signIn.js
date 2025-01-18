const { remote } = require('webdriverio');

const capabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'Android',
  'appium:appPackage': 'com.atomux.app.preview',
  'appium:appActivity': 'com.atomux.app.preview.MainActivity',
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
    const el8 = driver.$(
      '-android uiautomator:new UiSelector().text("Sign In with Browser")',
    );
    await el8.click();
    const el9 = driver.$('class name:android.widget.EditText');
    await el9.click();
    await el9.addValue('456');
    const el10 = driver.$('class name:android.widget.Button');
    await el10.click();

    await driver
      .$('//android.widget.TextView[@text="Your token: 456"]')
      .isExisting();
  } finally {
    await driver.pause(1000);
    await driver.deleteSession();
  }
}

runTest().catch(console.error);
