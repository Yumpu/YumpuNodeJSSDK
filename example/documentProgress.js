// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();

/**
 * @api {get} /document/progess.json getDocumentProgress()
 * @apiVersion 1.0.0
 * @apiName Document progress get
 * @apiGroup Document progress
 *
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = {
 *     id: 'XXXXX-XXXXX-XXXXX-XXXXX-XXXXX-XXXXX-XXXXX-XXXXX'
 *  };
 *  yumpu.getdocumentProgress(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiHeaderExample {java} Java-Example:
 * Yumpu y = new Yumpu();
 * String[] params = {};
 * String[] returnFields = {};
 * JSONObject json = new JSONObject(y.getDocumentProgress("XXXXX-XXXXX-XXXXX-XXXXX-XXXXX-XXXXX-XXXXX-XXXXX", params,returnFields));
 *
 * @apiParam {Integer} String One of your progress ids. The id you will get when using a create document method (document post file or document post url).
 *
 * @apiSuccessExample Success-Response1:
 *     HTTP/1.1 200 OK
 *     {
 *       "document": {
 *         "state": "rendering_in_progress",
 *         "message": "Magazine in rendering queue",
 *         "imagecount": "84",
 *         "progress": 0,
 *         "images": 0
 *       },
 *       "state": "success"
 *     }
 *
 * @apiSuccessExample Success-Response2:
 *     HTTP/1.1 200 OK
 *     {
 *       "document": [
 *         {
 *           "id": "20586688",
 *           "url": "http://www.yumpu.com/de/document/view/20586688/my-document-title",
 *           "short_url": "http://www.yumpu.com/s/o8s0AYklEzuEGtCB",
 *           "image": {
 *             "small": "http://images001.yumpu.com/yumpu.com/000/020/468/077/1380606321_4193/thumb/My_document_title000001.jpg",
 *             "medium": "http://images001.yumpu.com/yumpu.com/000/020/468/077/1380606321_4193/small/My_document_title000001.jpg",
 *             "big": "http://images001.yumpu.com/yumpu.com/000/020/468/077/1380606321_4193/zoom/My_document_title000001.jpg"
 *           },
 *           "language": "de",
 *           "title": "My document title",
 *           "description": "This is a description for my document",
 *           "tags": [
 *             "cars",
 *             "volkswagen",
 *             "audi",
 *             "skoda",
 *             "bmw"
 *           ],
 *           "embed_code": "iframe"
 *         }
 *       ],
 *       "state": "success"
 *     }
 */
var parameters = {
    id: '8374b-f012f-c962e-ba0f4-01a84-907ee-0d2b2-3c7be'
};
y.getDocumentProgress(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
