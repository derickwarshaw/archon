const mochaOptions = {
  timeout: '50000',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: './src/test/example/reports',
    reportName: 'report',
    reportTitle: 'Example Report',
    inlineAssets: true
  }
};

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

module.exports = function (gulp, mocha) {
  return function () {
    return gulp.src('./src/test/example/example.js', {read: false})
      .pipe(mocha(mochaOptions).on("error", handleError));
  }
};
