// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();
// set your token ... y.setToken('yourToken');

/**
 * @api {get} http://api.yumpu.com/2.0/countries.json getCountries()
 * @apiVersion 1.0.0
 * @apiName Countries get
 * @apiGroup Countries
 *
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  yumpu.getCountries(function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiHeaderExample {java} Java-Example:
 * Yumpu y = new Yumpu();
 * JSONObject json = new JSONObject(y.getCountries());
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
y.getCountries(function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
