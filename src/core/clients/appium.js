exports.client = require('webdriverio').remote({
  port: 4723,
  desiredCapabilities: {
    browserName: '',
    'appium-version': '1.5.3',
    platformName: 'iOS',
    bundleId: 'com.yourbundleId.awesome',
    platformVersion: '9.3.2',
    deviceName: 'Your Device Name',
    udid: 'Your amazing UDID',
    autoWebview: true
  }
});
