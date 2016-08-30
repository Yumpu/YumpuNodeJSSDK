// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();
// set your token ... y.setToken('yourToken');

/**
 * @api {get} http://search.yumpu.com/2.0/search.json search()
 * @apiVersion 1.0.0
 * @apiName Search get
 * @apiGroup Search
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = '{
 *    q: 's.moser',
 *    in: 'author'
 *  }';
 *  yumpu.search(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiHeaderExample {java} Java-Example:
 * Yumpu y = new Yumpu();
 * JSONObject json = new JSONObject(y.search("q=sports&in=title,description&views=1000-5000&language=en"));
 *
 * @apiParam {String} q A keyword to search for
 * @apiParam {String} [in] Search keyword in fields author, title, description or tags
      <br/><br/><b>Default:</b> author, title, description, tags
 * @apiParam {String} [op] Search keyword with „and“ or „or“ operator
      <br/><br/><b>Default:</b> or
 * @apiParam {Integer} [offset] Retrieve rows at position X (min. 0)
      <br/><br/><b>Default:</b> 0
 * @apiParam {Integer} [limit] Retrieve X rows (min. 0 and max. 100)
      <br/><br/><b>Default:</b> 10
 * @apiParam {String} [return_fields]	Customize the responses by setting the return fields (id, url, short_url, image_small, image_medium, image_big, language, title, description, tags, embed_code).
     <br/><br/><b>Default:</b> id, url, short_url, image_small, image_medium, image_big, language, title, description, tags, embed_code
 * @apiParam {String} [sort] Sort results (views_desc, views_asc, create_date_desc, create_date_asc, heat_rank_desc, heat_rank_asc, pages_desc, pages_asc)
 * @apiParam {String} [language]	Filter result (de, en, …)
 * @apiParam {String/Integer} [pages] Filter result from 10 to 20 pages (10-20) or exact 30 pages (30)
 * @apiParam {String/Integer} [heat_rank] Filter result from 50 to 100 heat_rank (50-100) or exact 80 heat_rank (80)
 * @apiParam {String/Integer} [views] Filter result with 500 to 1000 views (500-1000) or exact 800 views (800)
 * @apiParam {String} [create_date] Filter result which got created from 2013-09-01 between 2013-09-30 (2013-09-01-2013-09-30) or on an exact date 2013-09-01 (2013-09-01)
 * @apiParam {Integer} [heat_rank] Filter result (1, 2, …)
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       "total": 813,
       "documents": [
         {
           "id": "42025",
           "url": "http://www.yumpu.com/en/document/view/42025/google-eric-schmidt-at-the-milken-institute-global-conference",
           "short_url": "http://www.yumpu.com/s/iMWmtU3n9y8d8gup",
           "image": {
             "small": "http://images001.yumpu.com/yumpu.com/5647/1335778383_6815/thumb/page000001.jpg",
             "medium": "http://images001.yumpu.com/yumpu.com/5647/1335778383_6815/small/page000001.jpg",
             "big": "http://images001.yumpu.com/yumpu.com/5647/1335778383_6815/zoom/page000001.jpg"
           },
           "language": "en",
           "title": "Google Eric Schmidt at the Milken Institute Global Conference",
           "description": "Google Eric Schmidt at the Milken Institute Global Conference",
           "tags": [
             "google",
             "eric",
             "schmidt",
             "milken",
             "institute",
             "global",
             "conference",
             "www.yumpu.com"
           ],
           "embed_code": "iframe"
         },
         {
           "id": "23231",
           "url": "http://www.yumpu.com/en/document/view/23231/vw-collision-repair-facilities-list-1121",
           "short_url": "http://www.yumpu.com/s/VGWt63UNawxMH13U",
           "image": {
             "small": "http://images001.yumpu.com/yumpu.com/4038/1335447967_952/thumb/page000001.jpg",
             "medium": "http://images001.yumpu.com/yumpu.com/4038/1335447967_952/small/page000001.jpg",
             "big": "http://images001.yumpu.com/yumpu.com/4038/1335447967_952/zoom/page000001.jpg"
           },
           "language": "en",
           "title": "VW Collision Repair Facilities List 11.21",
           "description": "VW Collision Repair Facilities List 11.21",
           "tags": [
             "collision",
             "body",
             "center",
             "auto",
             "shop",
             "avenue",
             "street",
             "repair",
             "none",
             "paint",
             "facilities",
             "list",
             "www.yumpu.com"
           ],
           "embed_code": "iframe"
         },
         {
            ...
         }
       ],
       "state": "success"
     }
 *
 */
var parameters = {
    q: 'MyDocument',
    in: 'title'
};
y.search(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
