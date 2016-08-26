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
 *    id: 'iMWWKoMS76pjqMoO',
 *    name: 'Sports',
 *    description: 'Sports'
 *  }';
 *  yumpu.postSectionDocument(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiParam {String} id 	One of your collection ids
 * @apiParam {String} name 	One of your section ids
 * @apiParam {String} [description]	A description for your new section
 * @apiParam {String} [sorting]	Sort documents in section manually or automatically (by create_date_desc, create_date_asc, title_desc, title_asc)
      <br/><br/><b>Default:</b> manually
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *    {
      "section": [
        {
          "id": "F54wo1ijuIzhbSfK",
          "create_date": "2013-09-23 10:46:53",
          "update_date": "0000-00-00 00:00:00",
          "name": "Sports",
          "description": "Sports",
          "sorting": "manually",
          "order": 2,
          "documents": ""
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

// Delete a document in section
// more details on : http://developers.yumpu.com/api/section-document/delete-4/
// PLEASE USE ONE OF YOUR SECTIONS & DOCUMENTS IDS!!!
var parameters = {
    id: 'H6UgW92KkGR37eX8_brw2HT6KDM1LVxkG',
    documents: '55867668'
};
// y.deleteSectionDocument(parameters, function(statusCode, document) {
//     console.log('Status: ' + statusCode)
//     console.log(document);
// });
