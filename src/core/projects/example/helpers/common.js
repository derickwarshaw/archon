// const clientType = require('../../../projects/config').client;
import { client as clientType } from '../../../projects/config';
const client = require(`../../../../core/clients/${clientType}`).client;
const project = require('../../../projects/config').project;
const config = require(`../../../projects/${project}/config`);
const examplePage = require(`../../../projects/${project}/selectors/example`);


export default {
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
