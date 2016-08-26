// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();

/**
 * @api {get} /access_tags.json getAccessTags()
 * @apiVersion 1.0.0
 * @apiName Access tags get
 * @apiGroup Access tags
 *
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = {
 *    limit: 2,
 *    offset: 0
 *  };
 *  yumpu.getAccessTags(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiHeaderExample {java} Java-Example:
 * Yumpu y = new Yumpu();
 * String[] params = {};
 * String returnFields[] = { "id,name" };
 * y.getAccessTags(params, returnFields);
 *
 * @apiParam {Integer} [offset] Retrieve rows at position X (min. 0)
      <br/><br/><b>Default:</b> 0
 * @apiParam {Integer} [limit]	Retrieve X rows (min. 0 and max. 100)
      <br/><br/><b>Default:</b> 10
 * @apiParam {String} [sort]	Sort results by create_date ascendending / descending (create_date_asc, create_date_desc) or name ascendending / descending (name_asc, name_desc)
      <br/><br/><b>Default:</b> create_date_desc
 * @apiParam {String} [return_fields] Customize the responses by setting the return fields (id,name,description,default,iap,kiosks,create_date,update_date)	.
      <br/><br/><b>Default:</b> id, name, description, default, iap, kiosks, create_date, update_date
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
      "total": "6",
      "access_tags": [
        {
          "id": "HnD4YrKMeGjxH3xT",
          "create_date": "2015-01-27 08:54:41",
          "update_date": "0000-00-00 00:00:00",
          "name": "accesstag1",
          "description": "accesstag1",
          "default": false,
          "iap": true,
          "kiosks": [
            {
              "id": "72",
              "type": "appkiosk"
            }
          ]
        },
        {
          "id": "WkrKvPxsOAqziqGf",
          "create_date": "2015-01-14 10:09:09",
          "update_date": "0000-00-00 00:00:00",
          "name": "accesstag2",
          "description": "accesstag2",
          "default": false,
          "iap": false,
          "kiosks": [
            {
              "id": "72",
              "type": "appkiosk"
            },
            {
              "id": "860",
              "type": "appkiosk"
            },
            {
              "id": "960",
              "type": "appkiosk"
            }
          ]
        },
          ...
        }
      ],
      "state": "success",
      "completed_in": "0.0315"
    }
 *
 */
var parameters = {
    limit: 10,
    offset: 0,
    return_fields: 'id,name,default,iap,kiosks',
    sort: 'name_desc'
};
y.getAccessTags(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
