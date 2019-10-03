
//import { browser, config } from "protractor";

//export const config: Config = { 
    
//eleniumAddress: 'http://localhost:4444/wd/hub',

//Link to site being tested
//baseUrl: 'https://us.val.mamvol.uk/r/1.8.4/web/authenticate#/pos/partsEntry',

//framework: 'custome',
//frameworkPath: require.resolve('protractor-cucumber-framework'),

//specs: [
  //  "../e2e/features/*.feature",

  //  onPrepare: () => { browser.manage().window().maximize();
  //  },

 //   cucumberOpts: {
        //TypeScript compiler
  //      compiler: "ts:ts-node/register",
        //Report format
 //       format:json:.tmp/results.json",
 //       profile: false,
        //The Locations of our step definitions and hooks
 //       require:["./step_definitions/*.steps.js, "./support/hooks.js"],
 //       Tag stating which scenarios we will run
 //       tags: false,
 //       "no-source": true,
 //   } ]

 //   plugins: [{
 //       options:{
 //           automaticallyGeneratrReport: true,
 //           removeExistingJsonReportFile: true
 //       },
 //       package: 'protractor-multiple-cucumber-html-reporter-plugin'
 //   }],

//};

import { browser, Config } from "protractor";

export const config: Config = {

    seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    baseUrl: "https://us.val.mamvol.uk/r/1.8.4/web/authenticate#/pos/partsEntry",

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
      "../e2e/features/*.feature",
    ],

    onPrepare: () => {
        browser.manage().window().maximize();
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:.tmp/results.json",
        profile: false,
        require: ["./step_definitions/*.steps.js", "./support/hooks.js"],
        tags: false,
        "no-source": true,
    },

    plugins: [{
      options: {
        automaticallyGenerateReport: true,
        removeExistingJsonReportFile: true,
      },
      package: "protractor-multiple-cucumber-html-reporter-plugin",

    }],
};