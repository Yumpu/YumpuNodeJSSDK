// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();

/**
 * @api {get} /document/hotspot.json getDocumentHotspot()
 * @apiVersion 1.0.0
 * @apiName Document hotspot get
 * @apiGroup Document hotspot
 *
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = {
 *     id: '18414788HxIRKIoB'
 *  };
 *  yumpu.getDocumentHotspot(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiHeaderExample {java} Java-Example:
 * Yumpu y = new Yumpu();
 * String[] params = {};
 * String[] returnFields = { "id" };
 * JSONObject json = new JSONObject(y.getDocumentHotspot("35936979C40pnPVD", params, returnFields));
 *
 * @apiParam {String} id One of your document hotspot ids
 * @apiParam {String} [return_fields] Customize the responses by setting the return fields (id, document_id, page, type, settings, create_date, update_date).
      <br/><br/><b>Default:</b> id, document_id, page, type, settings, create_date, update_date
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *        {
 *          "hotspot": [
 *            {
 *              "id": "18414788HxIRKIoB",
 *              "document_id": "27109085",
 *              "page": "1",
 *              "type": "link",
 *              "settings": {
 *                "x": "0",
 *                "y": "0",
 *                "w": "400",
 *                "h": "100",
 *                "name": "hotspot_put",
 *                "tooltip": "hotspot_put",
 *                "link": "http:\/\/www.google.com"
 *              },
 *              "create_date": "2014-09-23 07:17:39",
 *              "update_date": "2014-09-23 07:20:21"
 *            }
 *          ],
 *          "state": "success",
 *          "completed_in": "0.1853"
 *        }
 *
 */
var parameters = {
    id: '909ec52ciDWgqAIH',
    return_fields: 'id,document_id,page,type,settings,create_date,update_date'
};
y.getDocumentHotspot(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

/**
 * @api {post} /document/hotspot.json postDocumentHotspot()
 * @apiVersion 1.0.0
 * @apiName Document hotspot post
 * @apiGroup Document hotspot
 *
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = {
 *     document_id: 27109085,
 *     page: 4,
 *     type: 'link',
 *     settings: {
 *         x: 100,
 *         y: 100,
 *         w: 50,
 *         h: 50,
 *         name: 'google.com',
 *         tooltip: 'google.com',
 *         link: 'https://www.yumpu.com'
 *     }
 *  };
 *  yumpu.postDocumentHotspot(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiParam {Integer} documet_id One of your document ids
 * @apiParam {String} page Page number (1-X)
 * @apiParam {String} type Type can be link, video, audio or slideshow
 * @apiParam {Integer} settings[x] x position of the document hotspot
 * @apiParam {Integer} settings[y] y position of the document hotspot
 * @apiParam {Integer} settings[w] width of the document hotspot
 * @apiParam {Integer} settings[h] 	height of the document hotspot
 * @apiParam {String} settings[name] a name for the document hotspot (min. length 5, max. length 50)
 * @apiParam {String} settings[tooltip] a tooltip for the document hotspot (min. length 5, max. length 50)
 * @apiParam {String} [settings[link]] 	a url (valid URL)
 * @apiParam {String} [settings[source]] youtube, vimeo, flickr, soundcloud, yumpu
 * @apiParam {String} [settings[source_id]] youtube: a valid youtube video id vimeo: a valid vimeo video id flickr: a valid flickr id
 * @apiParam {String} [settings[source_ids]] one or multiple media ids separated by a comma (example: GlKIWjJyWtg2XFKi,tFtOzlqZyqeaNkfw)
 * @apiParam {String} [settings[source_url]] soundcloud: a valid soundcloud url
 * @apiParam {String} [settings[autoplay]] y or n

 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "hotspot": [
 *         {
 *           "id": "5c905d027BHYFhLg",
 *           "document_id": "27109085",
 *           "page": "4",
 *           "type": "link",
 *           "settings": {
 *             "x": "100",
 *             "y": "100",
 *             "w": "50",
 *             "h": "50",
 *             "name": "google.com",
 *             "tooltip": "google.com",
 *             "link": "https://www.yumpu.com"
 *           },
 *           "create_date": "2014-09-23 08:18:53",
 *           "update_date": "0000-00-00 00:00:00"
 *         }
 *       ],
 *       "state": "success",
 *       "completed_in": "0.1644"
 *     }
 *
 */
var parameters = {
    document_id: 10670,
    page: 2,
    type: 'link',
    settings: {
        x: 10,
        y: 10,
        w: 10,
        h: 10,
        name: 'MyHotspot',
        tooltip: 'MyTooltipForHotspot',
        link: 'https://www.yumpu.com'
    }
};
// y.postDocumentHotspot(parameters, function(statusCode, document) {
//     console.log('Status: ' + statusCode)
//     console.log(document);
// });

/**
 * @api {put} /document/hotspot.json putDocumentHotspot()
 * @apiVersion 1.0.0
 * @apiName Document hotspot put
 * @apiGroup Document hotspot
 *
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = {
 *     id: '02608658TXrk4GRB',
 *     type: 'link',
 *     settings: {
 *         x: 100,
 *         y: 100,
 *         w: 50,
 *         h: 50,
 *         name: 'google.com',
 *         tooltip: 'google.com',
 *         link: 'https://www.yumpu.com'
 *     }
 *  };
 *  yumpu.putDocumentHotspot(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiParam {String} id One of your document hotspot ids
 * @apiParam {String} type Type can be link, video, audio or slideshow
 * @apiParam {Integer} settings[x] x position of the document hotspot
 * @apiParam {Integer} settings[y] y position of the document hotspot
 * @apiParam {Integer} settings[w] width of the document hotspot
 * @apiParam {Integer} settings[h] 	height of the document hotspot
 * @apiParam {String} settings[name] a name for the document hotspot (min. length 5, max. length 50)
 * @apiParam {String} settings[tooltip] a tooltip for the document hotspot (min. length 5, max. length 50)
 * @apiParam {String} [settings[link]] 	a url (valid URL)
 * @apiParam {String} [settings[source]] youtube, vimeo, flickr, soundcloud, yumpu
 * @apiParam {String} [settings[source_id]] youtube: a valid youtube video id vimeo: a valid vimeo video id flickr: a valid flickr id
 * @apiParam {String} [settings[source_url]] soundcloud: a valid soundcloud url
 * @apiParam {String} [settings[autoplay]] y or n

 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "hotspot": [
 *         {
 *           "id": "02608658TXrk4GRB",
 *           "document_id": "27219350",
 *           "page": "1",
 *           "type": "link",
 *           "settings": {
 *             "x": "0",
 *             "y": "0",
 *             "w": "400",
 *             "h": "100",
 *             "name": "google.com",
 *             "tooltip": "google.com",
 *             "link": "https://www.yumpu.com"
 *           },
 *           "create_date": "2014-10-01 08:53:57",
 *           "update_date": "2014-10-01 09:09:00"
 *         }
 *       ],
 *       "state": "success",
 *       "completed_in": "0.1644"
 *     }
 *
 */
var parameters = {
    id: 'e100aca8Sy9uirNb',
    type: 'link',
    settings: {
        x: 20,
        y: 20,
        w: 10,
        h: 10,
        name: 'MyHotspot',
        tooltip: 'MyTooltipForHotspot',
        link: 'https://www.yumpu.com'
    }
};
// y.putDocumentHotspot(parameters, function(statusCode, document) {
//     console.log('Status: ' + statusCode)
//     console.log(document);
// });

/**
 * @api {delete} /document/hotspot.json deleteDocumentHotspot()
 * @apiVersion 1.0.0
 * @apiName Document hotspot delete
 * @apiGroup Document hotspot
 *
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = '{
 *    id: '2d914999Iikh4a3I'
 *  }';
 *  yumpu.deleteDocumentHotspot(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiParam {String} id One of your document hotspot ids
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *      "state": "success",
 *      "completed_in": "0.0871"
 *    }
 *
 */
var parameters = {
    id: '7ac601749Or5nse0',
};
// y.deleteDocumentHotspot(parameters, function(statusCode, document) {
//     console.log('Status: ' + statusCode)
//     console.log(document);
// });
