// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();
// set your token ... y.setToken('yourToken');

/**
 * @api {get} http://api.yumpu.com/2.0/collections.json getCollections()
 * @apiVersion 1.0.0
 * @apiName Collections get
 * @apiGroup Collections
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = '{
 *    offset: 0,
 *    limit: 1,
 *    return_fields: 'id,create_date,update_date,name,order,sections'
 *  }';
 *  yumpu.getCollections(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiHeaderExample {java} Java-Example:
 * Yumpu y = new Yumpu();
 * String[] params = {};
 * String[] returnFields = { "id" };
 * JSONObject json = new JSONObject(y.getCollections(params, returnFields));
 *
 * @apiParam {Integer} [offset] Retrieve rows at position X (min. 0)
      <br/><br/><b>Default:</b> 0
 * @apiParam {Integer} [limit] Retrieve X rows (min. 0 and max. 100)
      <br/><br/><b>Default:</b> 10
 * @apiParam {String} [return_fields]	Customize the responses by setting the return fields (id, create_date, update_date, name, order, sections).
      <br/><br/><b>Default:</b> id, create_date, update_date, name, order, sections
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "collections": [
 *         {
 *           "id": "iMWWKoMS76pjqMoO",
 *           "create_date": "2013-09-23 08:01:01",
 *           "update_date": "2013-09-23 08:01:35",
 *           "name": "My magazines",
 *           "order": 0,
 *           "sections": [
 *             {
 *               "id": "iMWWKoMS76pjqMoO_2mqhaSEMTVpvFwrY",
 *               "name": "Top 3",
 *               "description": "Top 3",
 *               "sorting": "manually",
 *               "order": 0
 *             },
 *             {
 *               "id": "iMWWKoMS76pjqMoO_vpgFQQ3sHervO8yj",
 *               "name": "Look at that",
 *               "description": "Look at that",
 *               "sorting": "title_desc",
 *               "order": 1
 *             }
 *           ]
 *         }
 *       ],
 *       "state": "success"
 *     }
 *
 */
var parameters = {
    limit: 2,
    offset: 0,
    return_fields: 'id,create_date'
};
y.getCollections(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
