const webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: ['app/tests/**/*.test.jsx'],
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000'
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};

// npm packages installed to make this work
// npm install --save-dev karma karma-chrome-launcher karma-mocha karam-mocha-reporter karma-sourcemap-loader karma-webpack mocha expect
