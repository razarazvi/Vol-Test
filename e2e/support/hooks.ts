import { browser } from "protractor";
import { After, Before, Status} from "cucumber";

Before ({timeout: 100 * 1000}, async function() {

    //Opens the website to the default URL in the 'protractor.config.ts' file
    await browser.get("");
});

// This will run after every scenario
After ({timeout: 100*1000} async function(scenario) {

    is (scenario.result.status === Status.FAILED) 
    {const screenShot = await browser.takeScreenshot();
    this. attach(screenShot, "image/png");
    }
});

var {after, Before} = require("cucumber");

// Synchronous
Before(function(){this.count=0;
});

//Asynchronous Callback
Before(function (testCase, callback) {
    var world = this;
    tmp.dir({unsafeCleanup: true}, function(error, dir) {
        if (error) {
            callback(error);
        } else {
            world.tmpDir = dir;
            callback();
        }
    });
});

//Asynchronous Promise
After(function() {
    //Assuming this.driver is selenim webdriver
    return this. driver.quit();
});

Var {After, Before} = require('cucumber');

Before(function(){
    //This hook will be executed before scenario 
})

Before({tags: "@foo"}, function (){
    //This hook will be executed before scenarios tagged with @foo

Before({tags: "@foo and @bar"}, function (){
        //This hook will be executed before scenarios tagged with @foo or @bar

        Before({tags: "@foo and @bar"}, function (){
        //This hook will be executed before scenarios tagged with @foo or @bar        
});

// Synchronous
Before(function() {
    // perform some runtime check to decide whether to skip the proceeding scenario
    retunr 'skipped'
});

BeforeAll / AfterAll

Var {AfterAll, BeforeAll} = require('cucumber');

//Synchronous
BeforeAll(function(){
    //perform some shared setup
});

//Asynchronous Callback
BeforeAll(function (callback) {
    // perform some shared setup

    // execute the callback )optionally passing an error when done)
});

// Asynchronous Promise
AfterAll(function() {
    // perform some shared teardown
    return Promise.resolve()
});

