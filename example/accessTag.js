// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();
// set your token ... y.setToken('yourToken');

/**
 * @api {get} http://api.yumpu.com/2.0/access_tag.json getAccessTag()
 * @apiVersion 1.0.0
 * @apiName Access tag get
 * @apiGroup Access tag
 *
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = {
 *    limit: 2,
 *    offset: 0
 *  };
 *  yumpu.getAccessTag(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiHeaderExample {java} Java-Example:
 * Yumpu y = new Yumpu();
 * String[] params = {};
 * String[] returnFields = { "id,name" };
 * JSONObject json = new JSONObject(y.getAccessTag("pWDAKmcyUHR2o04T", params, returnFields));
 *
 * @apiParam {Integer} id One of your access tag ids
 * @apiParam {String} [return_fields] Customize the responses by setting the return fields (id,name,description,default,iap,kiosks,create_date,update_date)	.
      <br/><br/><b>Default:</b> id, name, description, default, iap, kiosks, create_date, update_date
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
      "access_tag": {
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
      "state": "success",
      "completed_in": "0.0234"
    }
 *
 */
var parameters = {
    id: 'lycoiU1T4v8YFdGK'
};
y.getAccessTag(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

/**
 * @api {post} http://api.yumpu.com/2.0/access_tag.json postAccessTag()
 * @apiVersion 1.0.0
 * @apiName Access tag post
 * @apiGroup Access tag
 *
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = {
 *    name: 'accesstag7',
 *    description: 'accesstag7',
 *    default: 'y',
 *    iap: 'y',
 *    kiosks: 'webkiosk_25'
 *  };
 *  yumpu.postAccessTag(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiHeaderExample {java} Java-Example:
 * Yumpu y = new Yumpu();
 * String[] body = {"name=newTag", "description=new tag", "default=y"};
 * JSONObject json = new JSONObject(y.postAccessTag(body));
 *
 * @apiParam {String} name min. 1 characters, max. 50 characters
 * @apiParam {String} description min. 1 characters, max. 255 characters
 * @apiParam {String} [default] yes or no (y or n)
      <br/><br/><b>Default:</b> n
 * @apiParam {String} [iap] yes or no (y or n)
      <br/><br/><b>Default:</b> n
 * @apiParam {String} [return_fields] One or multiple kiosk ids (webkiosk_123 or webkiosk_123,appkiosk_456), values must start with webkiosk_ or appkiosk_
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
      "access_tag": {
        "id": "pR0VV9tCh5q4ZrEx",
        "create_date": "2015-02-03 11:45:01",
        "update_date": "0000-00-00 00:00:00",
        "name": "accesstag7",
        "description": "accesstag7",
        "default": true,
        "iap": true,
        "kiosks": [
          {
            "id": "25",
            "type": "webkiosk"
          }
        ]
      },
      "state": "success",
      "completed_in": "0.0761"
    }
 *
 */
var parameters = {
    name: 'new Access Tag',
    description: 'new access tag description',
    default: 'y'
};
y.postAccessTag(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

/**
 * @api {put} http://api.yumpu.com/2.0/access_tag.json putAccessTag()
 * @apiVersion 1.0.0
 * @apiName Access tag put
 * @apiGroup Access tag
 *
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = {
 *    id: 'pR0VV9tCh5q4ZrEx',
 *    name: 'accesstag7',
 *    description: 'accesstag7',
 *    default: 'n',
 *    iap: 'n',
 *    kiosks: 'webkiosk_25,webkiosk_1572'
 *  };
 *  yumpu.putAccessTag(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiHeaderExample {java} Java-Example:
 * Yumpu y = new Yumpu();
 * String[] body = {"id=BVinDRHKNhl1ev56", "name=newTagName"};
 * JSONObject json = new JSONObject(y.putAccessTag(body));
 *
 * @apiParam {String} id One of your access tag ids
 * @apiParam {String} name min. 1 characters, max. 50 characters
 * @apiParam {String} [description] min. 1 characters, max. 255 characters
 * @apiParam {String} [default] yes or no (y or n)
      <br/><br/><b>Default:</b> n
 * @apiParam {String} [iap] yes or no (y or n)
      <br/><br/><b>Default:</b> n
 * @apiParam {String} [return_fields] One or multiple kiosk ids (webkiosk_123 or webkiosk_123,appkiosk_456), values must start with webkiosk_ or appkiosk_
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
      "access_tag": {
        "id": "pR0VV9tCh5q4ZrEx",
        "create_date": "2015-02-03 11:45:01",
        "update_date": "2015-02-03 12:10:08",
        "name": "accesstag7",
        "description": "accesstag7",
        "default": false,
        "iap": false,
        "kiosks": [
          {
            "id": "25",
            "type": "webkiosk"
          },
          {
            "id": "1572",
            "type": "webkiosk"
          }
        ]
      },
      "state": "success",
      "completed_in": "0.2296"
    }
 *
 */
var parameters = {
    id: 'lycoiU1T4v8YFdGK',
    name: 'access tag put'
};
y.putAccessTag(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

/**
 * @api {delete} http://api.yumpu.com/2.0/access_tag.json deleteAccessTag()
 * @apiVersion 1.0.0
 * @apiName Access tag delete
 * @apiGroup Access tag
 *
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = {
 *    id: 'pR0VV9tCh5q4ZrEx'
 *  };
 *  yumpu.deleteAccessTag(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiHeaderExample {java} Java-Example:
 * Yumpu y = new Yumpu();
 * JSONObject json = new JSONObject(y.deleteAccessTag("BVinDRHKNhl1ev56"));
 *
 * @apiParam {String} id One of your access tag ids
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
      "state": "success",
      "completed_in": "0.0718"
    }
 *
 */
 var parameters = {
     id: 'pR0VV9tCh5q4ZrEx'
 };
 y.deleteAccessTag(parameters, function(statusCode, document) {
     console.log('Status: ' + statusCode)
     console.log(document);
 });
