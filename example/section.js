// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();


// PUT hat noch Fehler bei der API


/**
 * @api {get} /section.json getSection()
 * @apiVersion 1.0.0
 * @apiName Section get
 * @apiGroup Section
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = '{
 *    id: 'iMWWKoMS76pjqMoO_2mqhaSEMTVpvFwrY',
 *    return_fields: 'id,create_date,update_date,name,description,sorting,order,documents'
 *  }';
 *  yumpu.getSection(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiHeaderExample {java} Java-Example:
 * Yumpu y = new Yumpu();
 * String[] params = {};
 * String[] returnFields = { "id,name" };
 * JSONObject json = new JSONObject(y.getSection("9RDnBITHpkxwc3s7_HxcT6zFO9Z1nmaEL", params, returnFields));
 *
 * @apiParam {String} id 	One of your section ids
 * @apiParam {String} [return_fields]	Customize the responses by setting the return fields (id, create_date, update_date, name, description, sorting, order, documents)
      <br/><br/><b>Default:</b> id, create_date, update_date, name, description, sorting, order, documents
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *    {
     "section": [
       {
         "id": "2mqhaSEMTVpvFwrY",
         "create_date": "2013-09-23 07:59:31",
         "update_date": "2013-09-23 08:01:42",
         "name": "Top 3",
         "description": "Top 3",
         "sorting": "manually",
         "order": 0,
         "documents": {
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
           "20327026": {
             "id": "20327026",
             "title": "YOUNG & FUN",
             "description": "",
             "cover": "http://yumpu.s3.amazonaws.com/yumpu.com/000/020/459/919/1379668838_5224/thumb/NECKERMANN_YoungFun_Wi121000001.jpg",
             "create_date": "2013-09-20 11:21:18",
             "update_date": "2013-09-20 11:21:23",
             "cover_size": "115x163",
             "language": "de",
             "settings": null
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
    return_fields: 'id,create_date,update_date,name,description,sorting,order,documents'
};
y.getSection(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

/**
 * @api {post} /section.json postSection()
 * @apiVersion 1.0.0
 * @apiName Section post
 * @apiGroup Section
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = '{
 *    id: 'iMWWKoMS76pjqMoO',
 *    name: 'Sports',
 *    description: 'Sports'
 *  }';
 *  yumpu.postSection(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiHeaderExample {java} Java-Example:
 * Yumpu y = new Yumpu();
 * String[]  body = {"id=SyQPxIYetzpAhOgK_e1a8grt3i0FPMklT", "name=sasdfd", "description=aösldasdöjd"};
 * JSONObject json = new JSONObject(y.postSection(body));
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
    id: 'H6UgW92KkGR37eX8',
    name: 'myNewSection'
};
// y.postSection(parameters, function(statusCode, document) {
//     console.log('Status: ' + statusCode)
//     console.log(document);
// });


/**
 * @api {put} /section.json putSection()
 * @apiVersion 1.0.0
 * @apiName Section put
 * @apiGroup Section
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = '{
 *    id: 'iMWWKoMS76pjqMoO_F54wo1ijuIzhbSfK',
 *    name: 'Sports 2016'
 *  }';
 *  yumpu.putSection(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiHeaderExample {java} Java-Example:
 * Yumpu y = new Yumpu();
 * String[]  body = {"id=SyQPxIYetzpAhOgK_e1a8grt3i0FPMklT", "name=newname", "description=new desc"};
 * JSONObject json = new JSONObject(y.putSection(body));
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
          "update_date": "2013-09-23 11:11:35",
          "name": "Sports 2013",
          "description": "Sports",
          "sorting": "create_date_desc",
          "order": 2,
          "documents": ""
        }
      ],
      "state": "success"
    }
 *
 */
var parameters = {
    id: 'H6UgW92KkGR37eX8_2Ph5CjTI1FK7UOJd',
    name: 'Meine Sammlung xyz',
    description: 'myDescription'
};
// y.putSection(parameters, function(statusCode, document) {
//     console.log('Status: ' + statusCode)
//     console.log(document);
// });

/**
 * @api {delete} /section.json deleteSection()
 * @apiVersion 1.0.0
 * @apiName Section delete
 * @apiGroup Section
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = '{
 *    id: 'iMWWKoMS76pjqMoO_JLUaRCPAkQA9fB8f'
 *  }';
 *  yumpu.deleteSection(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiHeaderExample {java} Java-Example:
 * Yumpu y = new Yumpu();
 * JSONObject json = new JSONObject(y.deleteSection("SyQPxIYetzpAhOgK_e1a8grt3i0FPMklT"));
 *
 * @apiParam {String} id 	One of your section ids
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *    {"state":"success"}
 *
 */
 var parameters = {
     id: 'H6UgW92KkGR37eX8_brw2HT6KDM1LVxkG'
 };
 y.deleteSection(parameters, function(statusCode, document) {
     console.log('Status: ' + statusCode)
     console.log(document);
 });
