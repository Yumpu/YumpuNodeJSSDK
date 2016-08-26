// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();

/**
 * @api {get} /subscriptions.json getSubscriptions()
 * @apiVersion 1.0.0
 * @apiName Subscriptions get
 * @apiGroup Subscriptions
 *
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = {
 *    limit: 2,
 *    offset: 0
 *  };
 *  yumpu.getSubscriptions(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 *
 * @apiParam {Integer} [offset] Retrieve rows at position X (min. 0)
      <br/><br/><b>Default:</b> 0
 * @apiParam {Integer} [limit]	Retrieve X rows (min. 0 and max. 100)
      <br/><br/><b>Default:</b> 10
 * @apiParam {String} [sort]	Sort results by create_date ascendending / descending (create_date_asc, create_date_desc) or name ascendending / descending (name_asc, name_desc)
      <br/><br/><b>Default:</b> create_date_desc
 * @apiParam {String} [return_fields] Customize the responses by setting the return fields (id, itc_product_id, name, description, duration, kiosks, create_date, update_date).
      <br/><br/><b>Default:</b> id, itc_product_id, name, description, duration, kiosks, create_date, update_date
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
      "total": "5",
      "subscriptions": [
        {
          "id": "QOjiaWfWYWd7TBHE",
          "create_date": "2015-01-27 13:21:37",
          "update_date": "0000-00-00 00:00:00",
          "itc_product_id": "subscription1",
          "name": "subscription1",
          "description": "subscription1",
          "duration": "365",
          "kiosks": [
            {
              "id": "72",
              "type": "appkiosk"
            }
          ]
        },
        {
          "id": "Xzb3GYb5dzimC3Ww",
          "create_date": "2015-01-27 09:58:17",
          "update_date": "0000-00-00 00:00:00",
          "itc_product_id": "subscription2",
          "name": "subscription2",
          "description": "subscription2",
          "duration": "93",
          "kiosks": [
            {
              "id": "72",
              "type": "appkiosk"
            }
          ]
        },
        {
          ...
        }
      ],
      "state": "success",
      "completed_in": "0.0316"
    }
 *
 */
var parameters = {
    limit: 10,
    offset: 0,
    return_fields: 'id,itc_product_id,name,description,duration,create_date',
    sort: 'name_asc'
};
y.getSubscriptions(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
