// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();

/**
 * @api {get} /collection.json getCollection()
 * @apiVersion 1.0.0
 * @apiName Collection get
 * @apiGroup Collection
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = '{
 *    id: 'iMWWKoMS76pjqMoO',
 *    return_fields: 'id,create_date,update_date,name,order,sections'
 *  }';
 *  yumpu.getCollection(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiHeaderExample {java} Java-Example:
 * Yumpu y = new Yumpu();
 * String[] params = {};
 * String[] returnFields = { "id,name" };
 * JSONObject json = new JSONObject(y.getCollection("9RDnBITHpkxwc3s7", params, returnFields));
 *
 * @apiParam {String} id One of your collection ids
 * @apiParam {String} [return_fields]	Customize the responses by setting the return fields (id, create_date, update_date, name, order, sections)
      <br/><br/><b>Default:</b> id, create_date, update_date, name, order, sections
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "collection": [
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
    id: 'SQDM97wyBp5NiVOv',
    return_fields: 'id,create_date,update_date,name,order,sections'
};
y.getCollection(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

/**
 * @api {post} /collection.json postCollection()
 * @apiVersion 1.0.0
 * @apiName Collection post
 * @apiGroup Collection
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = '{
 *    name: 'Holidays'
 *  }';
 *  yumpu.postCollection(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiHeaderExample {java} Java-Example:
 * Yumpu y = new Yumpu();
 * JSONObject json = new JSONObject(y.postCollection("new one"));
 *
 * @apiParam {String} name A name for your collection
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "collection": [
 *         {
 *           "id": "omkYGduXowlyx9WF",
 *           "create_date": "2013-09-23 09:05:47",
 *           "update_date": "0000-00-00 00:00:00",
 *           "name": "Holidays",
 *           "order": 0,
 *           "sections": [
 *             {
 *               "id": "omkYGduXowlyx9WF_stVFPUYW3kHX07B6",
 *               "name": "",
 *               "description": "",
 *               "sorting": "manually",
 *               "order": 0
 *             }
 *           ]
 *         }
 *       ],
 *       "state": "success"
 *     }
 *
 */
var parameters = {
    name: 'myNewCollection'
};
y.postCollection(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

/**
 * @api {put} /collection.json putCollection()
 * @apiVersion 1.0.0
 * @apiName Collection put
 * @apiGroup Collection
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = '{
 *    id: 'omkYGduXowlyx9WF',
 *    name: 'Holidays 2013'
 *  }';
 *  yumpu.putCollection(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiHeaderExample {java} Java-Example:
 * Yumpu y = new Yumpu();
 * JSONObject json = new JSONObject(y.putCollection("49cvPY1uKERtNnyZ", "new name"));
 *
 * @apiParam {String} id 	An id of your collections
 * @apiParam {String} name A name for your collection
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "collection": [
 *         {
 *           "id": "omkYGduXowlyx9WF",
 *           "create_date": "2013-09-23 09:05:47",
 *           "update_date": "2013-09-23 09:11:45",
 *           "name": "Holidays 2013",
 *           "order": 0,
 *           "sections": [
 *             {
 *               "id": "omkYGduXowlyx9WF_stVFPUYW3kHX07B6",
 *               "name": "",
 *               "description": "",
 *               "sorting": "manually",
 *               "order": 0
 *             }
 *           ]
 *         }
 *       ],
 *       "state": "success"
 *     }
 *
 */
var parameters = {
    id: 'IjCASOos9NBgQqtb',
    name: 'Meine Sammlung'
};
// y.putCollection(parameters, function(statusCode, document) {
//     console.log('Status: ' + statusCode)
//     console.log(document);
// });
