/**
 * ios_webkit_debug_proxy -c dff8ad9bb716a56766d98b2232c3f541ba9bb796:27753 -d (start proxy)
 *
 * appium (start server)
 *
 * run test with appium flag for client
 */

const common = require('../../core/projects/example/helpers/common');

describe('Example Test', () => {
  before((done) => {
    common.openApp(done);
  });

  describe('Example', () => {
    it('Should be an amazing example', (done) => {
      common.pause(done, 1500);
    });
  });

  after((done) => {
    common.end(done);
  })

});
