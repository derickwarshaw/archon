exports.client = require('webdriverio').remote({
  desiredCapabilities: {
    browserName: 'chrome'
  }
});
