// include yumpu sdk
var yumpu = require('../yumpu');

//make an instance of the Yumpu sdk class;
var y = new yumpu();

/**
 * @api {get} /embeds.json getEmbeds()
 * @apiVersion 1.0.0
 * @apiName Embeds get
 * @apiGroup Embeds
 *
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = '{
 *    offset: 0,
 *    limit: 2,
 *    sort: 'desc',
 *    return_fields: 'id,code'
 *  }';
 *  yumpu.getEmbeds(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiHeaderExample {java} Java-Example:
 * Yumpu y = new Yumpu();
 * String[] params = {};
 * String returnFields[] = { "id" };
 * y.getEmbeds(params, returnFields);
 *
 * @apiParam {Integer} [offset] Retrieve rows at position X (min. 0)
      <br/><br/><b>Default:</b> 0
 * @apiParam {Integer} [limit] Retrieve X rows (min. 0 and max. 100)
      <br/><br/><b>Default:</b> 10
 * @apiParam {String} [sort] Sort results ascending or descendening (asc or desc)
      <br/><br/><b>Default:</b> page_asc
 * @apiParam {String} [return_fields] Customize the responses by setting the return fields (‚id‘, ‚user_id‘, ‚document_id‘, ‚type‘, ‚create_date‘, ‚code‘, ’settings‘).
      <br/><br/><b>Default:</b> ‚id‘, ‚user_id‘, ‚document_id‘, ‚type‘, ‚create_date‘, ‚code‘, ’settings‘
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
      "total": 102,
      "embeds": [
        {
          "id": "ygCbHF6N2XK0iNjO",
          "code": "iframe"
        },
        {
          "id": "zlYaXn1hZi70Ws6b",
          "code": "iframe"
        }
      ],
      "state": "success",
      "completed_in": "0.4840"
    }
 *
 */
var parameters = '';
y.getEmbeds(parameters, function(statusCode, documents) {
  console.log('Status: ' + statusCode);
  console.log(documents);
});

// or
// get embeds from position 'offset' with limit 'limit' and return only 'return_fields' informations
var parameters = {
    limit: 2,
    offset: 0,
    sort: 'desc'
};
y.getEmbeds(parameters, function(statusCode, documents) {
  console.log('Status: ' + statusCode);
  console.log(documents);
});
