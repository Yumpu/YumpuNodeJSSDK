// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();
// set your token ... y.setToken('yourToken');

/**
 * @api {get} http://api.yumpu.com/2.0/document/languages.json getDocumentLanguages()
 * @apiVersion 1.0.0
 * @apiName Document languages get
 * @apiGroup Document languages
 *
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  yumpu.getDocumentLanguages(function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiHeaderExample {java} Java-Example:
 * Yumpu y = new Yumpu();
 * JSONObject json = new JSONObject(y.getLanguages());
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *   "total": 93,
 *   "languages": [
 *     {
 *       "iso": "en",
 *       "name": "english"
 *     },
 *     {
 *       "iso": "de",
 *       "name": "german"
 *     },
 *     {
 *       "iso": "fr",
 *       "name": "french"
 *     },
 *     {
 *       ...
 *     }
 *   ],
 *   "state": "success"
 * }
 *
 */
y.getDocumentLanguages(function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
