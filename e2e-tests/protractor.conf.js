exports.config = {
    framework: 'jasmine2',
    seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.51.0.jar',

    // location of E2E test specs
    specs: [
        '../e2e-tests/tests/**/*.spec.js'
    ],

    // allow for testing of non-Angular sites
    onPrepare: function() {
        global.isAngularSite = function(flag) {
            browser.ignoreSynchronization = !flag;
        };
    }
};