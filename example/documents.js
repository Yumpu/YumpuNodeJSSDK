// include yumpu sdk
var yumpu = require('../yumpu');

//make an instance of the Yumpu sdk class;
var y = new yumpu();
// set your token ... y.setToken('yourToken');

/**
 * @api {get} http://api.yumpu.com/2.0/documents.json getDocuments()
 * @apiVersion 1.0.0
 * @apiName Documents get
 * @apiGroup Documents
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = {
 *     offset: 0,
 *     limit: 1
 *  };
 *  yumpu.getDocuments(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiHeaderExample {java} Java-Example:
 * Yumpu y = new Yumpu();
 * String[] params = {"offset=1", "limit=1"};
 * String[] returnFields = { "url" };
 * JSONObject json = new JSONObject(y.getDocuments(params, returnFields));
 *
 * @apiParam {Integer} [offset] Retrieve rows at position X (min. 0).
      <br/><br/><b>Default:</b> 0
 * @apiParam {Integer} [limit] Retrieve X rows (min. 0 and max. 100).
      <br/><br/><b>Default:</b> 10
 * @apiParam {String} [sort] Sort results ascending or descendening (asc or desc).
      <br/><br/><b>Default:</b> desc
 * @apiParam {String} [return_fields] Customize the responses by setting the return fields (id, create_date, update_date, url, short_url, image_small, image_medium, image_big, language, title, description, tags, embed_code, settings).
      <br/><br/><b>Default:</b> id, url, short_url, image_small, image_medium, image_big, language, title, description, tags, embed_code
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *       {
 *         "total": 16,
 *         "documents": [
 *           {
 *             "id": "20327012",
 *             "image": {
 *               "small": "http://images001.yumpu.com/yumpu.com/000/020/459/915/1379668840_5873/thumb/WINDROSE_AdriaWindjammer_000001.jpg"
 *             },
 *             "embed_code": "iframe"
 *           }
 *         ],
 *         "state": "success"
 *       }
 *
 */
var parameters = '';
y.getDocuments(parameters, function(statusCode, documents) {
  console.log('Status: ' + statusCode);
  console.log(documents);
});

// or
// get document from position 'offset' with limit 'limit'
var parameters = {
    limit: 1,
    offset: 0,
    sort: 'desc'
};
y.getDocuments(parameters, function(statusCode, documents) {
  console.log('Status: ' + statusCode);
  console.log(documents);
});
