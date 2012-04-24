// Set the require.js configuration for your application.
require.config({
  // Initialize the application with the main application file
  deps: ["main"],

  paths: {
    zepto:      '../assets/js/libs/zepto-1.0rc1',
    underscore: '../assets/js/libs/underscore-1.3.1',
    backbone:   '../assets/js/libs/backbone-0.9.2',
    energize:   '../assets/js/libs/energize',
    text:       '../assets/js/plugins/text-1.0.7',
    order:      '../assets/js/plugins/order-1.0.5'
  }
});
