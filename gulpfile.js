/**
 * From command line type gulp test-local --archon:PROJECTNAME --test:TESTNAME (example: gulp initiate-example --archon:example --test:example)
 *
 * Using arguments will set a variable in the project that tells it which project you want to run tests for and which
 * test to run
 *
 **/

const gulp = require('gulp');
const selenium = require('selenium-standalone');
const mocha = require('gulp-mocha');
const project = require('./lib/core/projects/config').project;
const test = require('./lib/core/projects/config').test;

const getTask = function (task) {
   return require(`./lib/gulp-tasks/${project}/${task}`)(gulp, mocha);
};

function terminateProcess() {
  selenium.child.kill();
}

/**
 * Task that will install and start server - good for CI and first time running the project
 */

gulp.task('selenium', function (done) {
  selenium.install({
    logger: function (message) {
    }
  }, function (err) {
    if (err) return done(err);

    selenium.start(function (err, child) {
      if (err) return done(err);
      selenium.child = child;
      done();
    });
  });
});

/**
 *  Task that will only start the server - used when you already have server installed
 */

gulp.task('selenium-start', function (done) {
  selenium.start(function (err, child) {
    if (err) return done(err);
    selenium.child = child;
    done();
  });
});

gulp.task(`${test}`, ['selenium'], getTask(`${test}`));

gulp.task(`initiate-${test}`, [`${test}`], function () {
  terminateProcess();
});
