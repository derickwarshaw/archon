exports.client = require('webdriverio').remote({

  port: 4723,
  desiredCapabilities: {
    automationName: 'Appium',
    'appium-version': '1.5.3',
    platform: 'Android',
    platformName: 'Android',
    platformVersion: '6.0',
    app: 'path to apk',
    appActivity: 'your mainActivity',
    browserName: '',
    appPackage: 'Your app package',
    deviceName: 'Nexus 7',
    udid: 'Your UDID',
    setWebContentsDebuggingEnbabled: true,
    autoWebview: false
  }
});
