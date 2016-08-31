// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();
// set your token ... y.setToken('yourToken');

/**
 * @api {get} http://api.yumpu.com/2.0/subscription.json getSubscription()
 * @apiVersion 1.0.0
 * @apiName Subscription get
 * @apiGroup Subscription
 *
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = {
 *    id: 'QOjiaWfWYWd7TBHE'
 *  };
 *  yumpu.getSubscription(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 *
 * @apiParam {String} id One of your subscription ids
 * @apiParam {String} [return_fields] Customize the responses by setting the return fields (id, itc_product_id, name, description, duration, kiosks, create_date, update_date).
      <br/><br/><b>Default:</b> id, itc_product_id, name, description, duration, kiosks, create_date, update_date
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
      "subscription": {
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
      "state": "success",
      "completed_in": "0.0434"
    }
 *
 */
var parameters = {
    id: '1ChSI3vGfouFlzrU',
};
y.getSubscription(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

/**
 * @api {post} http://api.yumpu.com/2.0/subscription.json postSubscription()
 * @apiVersion 1.0.0
 * @apiName Subscription post
 * @apiGroup Subscription
 *
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = {
 *    itc_product_id: 'subscription6',
 *    name: 'subscription6',
 *    description: 'subscription6'.
 *    duration: 62,
 *    kiosks: 'webkiosk_25'
 *  };
 *  yumpu.postSubscription(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 *
 * @apiParam {String} itc_product_id min. 5 characters, max. 255 characters
 * @apiParam {String} name min. 5 characters, max. 50 characters
 * @apiParam {Integer} duration 7, 31, 62, 93, 186 or 365 (days)
 * @apiParam {String} [description] min. 5 characters, max. 255 characters
 * @apiParam {String} [kiosks] One or multiple kiosk ids (webkiosk_123 or webkiosk_123,appkiosk_456), values must start with webkiosk_ or appkiosk_
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
      "subscription": {
        "id": "B7OxpT5ji53wLuR2",
        "create_date": "2015-02-03 12:34:18",
        "update_date": "0000-00-00 00:00:00",
        "itc_product_id": "subscription6",
        "name": "subscription6",
        "description": "subscription6",
        "duration": "62",
        "kiosks": [
          {
            "id": "25",
            "type": "webkiosk"
          }
        ]
      },
      "state": "success",
      "completed_in": "0.1439"
    }
 *
 */
var parameters = {
    itc_product_id: 'my_subscription_itc_product_id',
    name: 'TestSubscription1',
    duration: 365,
    description: 'my subscription description',
};
y.postSubscription(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

/**
 * @api {put} http://api.yumpu.com/2.0/subscription.json putSubscription()
 * @apiVersion 1.0.0
 * @apiName Subscription put
 * @apiGroup Subscription
 *
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = {
 *    id: 'B7OxpT5ji53wLuR2',
 *    itc_product_id: 'subscription6',
 *    name: 'subscription6',
 *    description: 'subscription6'.
 *    duration: 365,
 *    kiosks: 'webkiosk_25,webkiosk_1572'
 *  };
 *  yumpu.postSubscription(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 *
 * @apiParam {String} id One of your subscription ids
 * @apiParam {String} itc_product_id min. 5 characters, max. 255 characters
 * @apiParam {String} name min. 5 characters, max. 50 characters
 * @apiParam {Integer} duration 7, 31, 62, 93, 186 or 365 (days)
 * @apiParam {String} [description] min. 5 characters, max. 255 characters
 * @apiParam {String} [kiosks] One or multiple kiosk ids (webkiosk_123 or webkiosk_123,appkiosk_456), values must start with webkiosk_ or appkiosk_
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
      "subscription": {
        "id": "B7OxpT5ji53wLuR2",
        "create_date": "2015-02-03 12:34:18",
        "update_date": "2015-02-03 12:40:54",
        "itc_product_id": "subscription6",
        "name": "subscription6",
        "description": "subscription6",
        "duration": "365",
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
      "completed_in": "0.0687"
    }
 *
 */
var parameters = {
    id: 'acwWFxQXbpAZCzqP',
    itc_product_id: 'my_subscription_itc_product_id_updated',
    name: 'TestSubscription',
    duration: 7,
    description: 'my subscription description updated',
};
y.putSubscription(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

/**
 * @api {delete} http://api.yumpu.com/2.0/subscription.json deleteSubscription()
 * @apiVersion 1.0.0
 * @apiName Subscription delete
 * @apiGroup Subscription
 *
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = {
 *    id: 'B7OxpT5ji53wLuR2'
 *  };
 *  yumpu.deleteSubscription(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 *
 * @apiParam {String} id One of your subscription ids
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
    id: '1ChSI3vGfouFlzrU'
};
y.deleteSubscription(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
