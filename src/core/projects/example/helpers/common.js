const clientType = require('../../../projects/config').client;
const client = require(`../../../../core/clients/${clientType}`).client;
const project = require('../../../projects/config').project;
const config = require(`../../../projects/${project}/config`);
const examplePage = require(`../../../projects/${project}/selectors/example`);


module.exports = {
  
  mobileView(done) {
    client.setViewportSize({
      height: 768,
      width: 1024
    }, true).then(done);
  },
  
  openApp(done) {
    client.init(done);
  },

  pause: (pauseTime, done) => {
    client.pause(done, pauseTime);
  },

  end(done) {
    client.end();
    done();
  }
  
};
