// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();

/**
 * @api {post} /section/document.json postSectionDocument()
 * @apiVersion 1.0.0
 * @apiName Section document post
 * @apiGroup Section document
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = '{
 *    id: 'iMWWKoMS76pjqMoO_vpgFQQ3sHervO8yj',
 *    documents: '20327014,20327015,20327016'
 *  }';
 *  yumpu.postSectionDocument(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiHeaderExample {java} Java-Example:
 * Yumpu y = new Yumpu();
 * String documents = "55875794,55875934";
 * JSONObject json = new JSONObject(y.postSectionDocument("SyQPxIYetzpAhOgK_Vc7jXD3BEeqPto0S", documents));
 *
 * @apiParam {String} id 	One or more document ids
 * @apiParam {String/Integer} documents One or more document ids
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *    {
      "section": [
        {
          "id": "vpgFQQ3sHervO8yj",
          "create_date": "2013-09-23 08:01:01",
          "update_date": "2013-09-23 12:17:34",
          "name": "Look at that",
          "description": "Look at that",
          "sorting": "title_desc",
          "order": 1,
          "documents": {
            "20327028": {
              "id": "20327028",
              "title": "flugs & gu00fcnstig",
              "description": "",
              "cover": "http://yumpu.s3.amazonaws.com/yumpu.com/000/020/459/913/1379668841_8145/thumb/TOUROPA_FlugsUndGuenstig_000001.jpg",
              "create_date": "2013-09-20 11:21:25",
              "update_date": "2013-09-20 11:21:32",
              "cover_size": "116x163",
              "language": "de",
              "settings": null
            },
            "20327032": {
              "id": "20327032",
              "title": "Schmetterling Winter 2012/2013",
              "description": "",
              "cover": "http://yumpu.s3.amazonaws.com/yumpu.com/000/020/459/911/1379668843_1363/thumb/SCHMETTERLING_Individuell000001.jpg",
              "create_date": "2013-09-20 11:21:33",
              "update_date": "2013-09-20 11:31:49",
              "cover_size": "115x163",
              "language": "it",
              "settings": null
            },
            {
              ...
            }
          }
        }
      ],
      "state": "success"
    }
 *
 */
var parameters = {
    id: 'H6UgW92KkGR37eX8_brw2HT6KDM1LVxkG',
    documents: '55867668,55865410'
};
y.postSectionDocument(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

/**
 * @api {delete} /section/document.json deleteSectionDocument()
 * @apiVersion 1.0.0
 * @apiName Section document delete
 * @apiGroup Section document
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = '{
 *    id: 'iMWWKoMS76pjqMoO_vpgFQQ3sHervO8yj',
 *    documents: '20327014,20327015'
 *  }';
 *  yumpu.deleteSectionDocument(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiParam {String} id 	One or more document ids
 * @apiParam {String/Integer} documents One or more document ids
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *    {"state":"success"}
 *
 */
var parameters = {
    id: 'H6UgW92KkGR37eX8_brw2HT6KDM1LVxkG',
    documents: '55867668'
};
// y.deleteSectionDocument(parameters, function(statusCode, document) {
//     console.log('Status: ' + statusCode)
//     console.log(document);
// });
