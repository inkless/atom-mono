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
    const signIn = driver.$('//android.widget.TextView[@text="Sign In"]');
    await signIn.click();
    const envelopeTab = driver.$(
      '//android.view.View[@content-desc=", Envelope"]',
    );
    await envelopeTab.click();

    await driver
      .$('//android.view.View[@text="Envelope Home with Cookie Share"]')
      .click();

    await driver.$('//android.view.View[@text="RN Button in Web"]').click();

    await driver
      .$('//android.widget.Button[@resource-id="android:id/button1"]')
      .click();

    await driver
      .$('//android.widget.ImageButton[@content-desc="Navigate up"]')
      .click();

    await driver.$('//android.view.View[@content-desc=", Home"]').click();
    await driver.$('//android.widget.TextView[@text="Sign Out"]').click();
  } finally {
    await driver.pause(1000);
    await driver.deleteSession();
  }
}

runTest().catch(console.error);
