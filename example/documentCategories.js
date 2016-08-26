// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();

/**
 * @api {get} /document/categories.json getDocumentCategories()
 * @apiVersion 1.0.0
 * @apiName Document categories get
 * @apiGroup Document categories
 *
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  yumpu.getDocumentCategories(function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiHeaderExample {java} Java-Example:
 * Yumpu y = new Yumpu();
 * JSONObject json = new JSONObject(y.getCategories());
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "total": 22,
 *       "categories": [
 *         {
 *           "id": "0",
 *           "name": "None"
 *         },
 *         {
 *           "id": "1",
 *           "name": "Auto & Vehicles"
 *         },
 *         {
 *           "id": "2",
 *           "name": "Business & Marketing"
 *         },
 *         {
 *            ...
 *         }
 *       ],
 *       "state": "success"
 *     }
 *
 */
y.getDocumentCategories(function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
