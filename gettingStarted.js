/**
 * @apiVersion 1.0.0
 * @apiName Getting started
 * @apiGroup Getting started
 * @api {create an account on: } http://developers.yumpu.com
 *
 * @apiHeaderExample {js} Install with npm on node:
 * $ npm install yumpu
 *
 * @apiHeaderExample {java} Install in java:
 * $ java install yumpu
 *
 * @apiSuccessExample {js} Set token in node:
 * @apiSuccessExample {java} Set token in java: 
 *
 * @apiErrorExample {js} How to use in node:
 *    // initialize the yumpu class
 *    var yumpu = require('yumpu');
 *
 *    // example to get all your documents
 *    yumpu.getDocuments(parameters, function(statusCode, document) {
 *      console.log('STATUS: ' + statusCode);
 *      console.log(document);
 *    });
 * @apiErrorExample {java} How to use in java:
 *    var yumpu = require('yumpu');
 *    yumpu.getDocuments(parameters, function(statusCode, document) {
 *      console.log('STATUS: ' + statusCode);
 *      console.log(document);
 *    });
 *
 */
