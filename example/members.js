// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();

/**
 * @api {get} /members.json getMembers()
 * @apiVersion 1.0.0
 * @apiName Members get
 * @apiGroup Members
 *
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = '{
 *    offset: 0,
 *    limit: 2
 *  }';
 *  yumpu.getMembers(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 *
 * @apiParam {String} [q]	A keyword to search for
 * @apiParam {Integer} [offset] Retrieve rows at position X (min. 0)
      <br/><br/><b>Default:</b> 0
 * @apiParam {Integer} [limit] Retrieve X rows (min. 0 and max. 100)
      <br/><br/><b>Default:</b> 10
 * @apiParam {String} [sort] Sort results by create_date ascendending / descending (create_date_asc, create_date_desc) or username ascendending / descending (username_asc, username_desc).
      <br/><br/><b>Default:</b> create_date_desc
 * @apiParam {String} [return_fields] Customize the responses by setting the return fields (‚id‘, ‚username‘, ‚comment‘, ‚password‘, ‚access_tags‘, ‚kiosks‘, ‚create_date‘, ‚update_date‘)	.
      <br/><br/><b>Default:</b> ‚id‘, ‚username‘, ‚comment‘, ‚password‘, ‚access_tags‘, ‚kiosks‘, ‚create_date‘, ‚update_date‘
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
      "total": "6",
      "members": [
        {
          "id": "vGbxpwFZuvvdAGnS",
          "create_date": "2014-11-03 12:59:52",
          "update_date": "0000-00-00 00:00:00",
          "username": "user1",
          "password": "password",
          "comment": "user1",
          "access_tags": [
            {
              "id": "zxeeYReHnxeg8RqZ",
              "name": "accesstag1",
              "default": true
            }
          ],
          "kiosks": [
            {
              "id": "1572",
              "type": "webkiosk"
            }
          ]
        },
        {
          "id": "uBrURwzHMBEe32Dj",
          "create_date": "2014-10-08 17:10:39",
          "update_date": "0000-00-00 00:00:00",
          "username": "user2",
          "password": "password",
          "comment": "user2",
          "access_tags": [
            {
              "id": "zxeeYReHnxeg8RqZ",
              "name": "accesstag1",
              "default": true
            }
          ],
          "kiosks": [
            {
              "id": "25",
              "type": "webkiosk"
            },
            {
              "id": "860",
              "type": "appkiosk"
            }
          ]
        },
        {
          ...
        }
      ],
      "state": "success",
      "completed_in": "0.0608"
    }
 *
 */
var parameters = {
    limit: 5,
    offset: 0,
    return_fields: 'id,username,access_tags,kiosks',
    sort: 'create_date_desc'
};
y.getMembers(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
