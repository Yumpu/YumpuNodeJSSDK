// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();

/**
 * @api {get} http://api.yumpu.com/2.0/document/hotspots.json getDocumentHotspots()
 * @apiVersion 1.0.0
 * @apiName Document hotspots get
 * @apiGroup Document hotspots
 *
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = '{
 *    id: 27109037,
 *    offset: 0,
 *    limit: 1,
 *    return_fields: 'id,settings'
 *  }';
 *  yumpu.getDocumentHotspots(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiHeaderExample {java} Java-Example:
 * Yumpu y = new Yumpu();
 * String[] params = {};
 * String[] returnFields = {};
 * JSONObject json = new JSONObject(y.getDocumentHotspots("55875413", params, returnFields));
 *
 * @apiParam {Integer} id One of your document ids
 * @apiParam {Integer} [page] Filter the results by page nr (1 – X)
 * @apiParam {Integer} [offset] Retrieve rows at position X (min. 0)
      <br/><br/><b>Default:</b> 0
 * @apiParam {Integer} [limit] Retrieve X rows (min. 0 and max. 100)
      <br/><br/><b>Default:</b> 10
 * @apiParam {String} [sort] Sort results by create_date_desc, create_date_asc, page_desc, page_asc
      <br/><br/><b>Default:</b> page_asc
 * @apiParam {String} [return_fields] Customize the responses by setting the return fields (id, page, type, settings, create_date, update_date).
      <br/><br/><b>Default:</b> id, page, type, settings, create_date, update_date
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "total": 1,
 *       "hotspots": [
 *         {
 *           "id": "2d914999Iikh4a3I",
 *           "settings": {
 *             "x": "321",
 *             "y": "586",
 *             "w": "110",
 *             "h": "13",
 *             "name": "www.aatkings.com",
 *             "link": "http:\/\/www.aatkings.com",
 *             "tooltip": "www.aatkings.com"
 *           }
 *         }
 *       ],
 *       "state": "success",
 *       "completed_in": "0.2008"
 *     }
 *
 */
var parameters = {
    id: 55858527,
    limit: 5,
    sort: 'create_date_desc',
    return_fields: 'id,page,type,settings'
};
y.getDocumentHotspots(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
