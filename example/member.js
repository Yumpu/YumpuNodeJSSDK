// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();
// set your token ... y.setToken('yourToken');

/**
 * @api {get} http://api.yumpu.com/2.0/member.json getMember()
 * @apiVersion 1.0.0
 * @apiName Member get
 * @apiGroup Member
 *
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = '{
 *    id: 'vGbxpwFZuvvdAGnS'
 *  }';
 *  yumpu.getMember(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 *
 * @apiParam {String} id	A keyword to search for
 * @apiParam {String} [return_fields] Customize the responses by setting the return fields (‚id‘, ‚username‘, ‚comment‘, ‚password‘, ‚access_tags‘, ‚kiosks‘, ‚create_date‘, ‚update_date‘).
      <br/><br/><b>Default:</b> ‚id‘, ‚username‘, ‚comment‘, ‚password‘, ‚access_tags‘, ‚kiosks‘, ‚create_date‘, ‚update_date‘
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
      "member": {
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
      "state": "success",
      "completed_in": "0.0809"
    }
 *
 */
var parameters = {
    id: 'qf4sUtS3dCDhPXmT',
    return_fields: 'id,username,comment,password'
};
y.getMember(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

/**
 * @api {post} http://api.yumpu.com/2.0/member.json postMember()
 * @apiVersion 1.0.0
 * @apiName Member post
 * @apiGroup Member
 *
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = '{
 *    username: 'user7',
 *    password: 'password'
 *  }';
 *  yumpu.postMember(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 *
 * @apiParam {String} username	min. 2 characters, max. 50 characters, allowed characters a-z, 0-9, dot (.), @, hyphen (-) and underscore (_)
 * @apiParam {String} password	min. 4 characters, max. 50 characters
 * @apiParam {String} [comment] min. 4 characters, max. 50 characters
 * @apiParam {String} [access_tags] One or multiple access_tag ids (myid1 or myid1,myid2)
 * @apiParam {String} [kiosks] One or multiple kiosk ids (webkiosk_123 or webkiosk_123,appkiosk_456), values must start with webkiosk_ or appkiosk_
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
      "member": {
        "id": "GuTIyoCZmWlnHjXP",
        "create_date": "2015-02-03 09:28:07",
        "update_date": "0000-00-00 00:00:00",
        "username": "user7",
        "password": "password",
        "comment": "",
        "access_tags": [
          {
            "id": "zxeeYReHnxeg8RqZ",
            "name": "accesstag1",
            "default": true
          }
        ],
        "kiosks": [

        ]
      },
      "state": "success",
      "completed_in": "0.1563"
    }
 *
 */
var parameters = {
    username: 'my.username',
    password: '9609ff2e7ba4d577161ab075e406b97f',
    comment: 'comment for myUsername'
};
y.postMember(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

/**
 * @api {put} http://api.yumpu.com/2.0/member.json putMember()
 * @apiVersion 1.0.0
 * @apiName Member put
 * @apiGroup Member
 *
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = '{
 *    id: 'J4nF1wikdzn1VOqe',
 *    username: 'user10',
 *    password: 'password',
 *    comment: 'user10',
 *    access_tags: 'v8TUbTq87bP0R15O',
 *    kiosks: 'webkiosk_25,webkiosk_1572'
 *  }';
 *  yumpu.postMember(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiParam {String} id	One of your member ids
 * @apiParam {String} username	min. 2 characters, max. 50 characters, allowed characters a-z, 0-9, dot (.), @, hyphen (-) and underscore (_)
 * @apiParam {String} [password]	min. 4 characters, max. 50 characters
 * @apiParam {String} [comment] min. 4 characters, max. 50 characters
 * @apiParam {String} [access_tags] One or multiple access_tag ids (myid1 or myid1,myid2)
 * @apiParam {String} [kiosks] One or multiple kiosk ids (webkiosk_123 or webkiosk_123,appkiosk_456), values must start with webkiosk_ or appkiosk_
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
      "member": {
        "id": "J4nF1wikdzn1VOqe",
        "create_date": "2015-02-03 09:31:31",
        "update_date": "2015-02-03 11:03:05",
        "username": "user10",
        "password": "password10",
        "comment": "user10",
        "access_tags": [
          {
            "id": "v8TUbTq87bP0R15O",
            "name": "accesstag2",
            "default": false
          }
        ],
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
      "completed_in": "0.3390"
    }
 *
 */
var parameters = {
    id: 'qf4sUtS3dCDhPXmT',
    username: 'my.username1',
    password: '9609ff2e7ba4d577161ab075e406b97f',
    comment: 'comment for myUsername'
};
y.putMember(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

/**
 * @api {delete} http://api.yumpu.com/2.0/member.json deleteMember()
 * @apiVersion 1.0.0
 * @apiName Member delete
 * @apiGroup Member
 *
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = '{
 *    id: 'J4nF1wikdzn1VOqe'
 *  }';
 *  yumpu.postMember(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiParam {String} id	One of your member ids
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
      "state": "success",
      "completed_in": "0.6407"
    }
 *
 */
 var parameters = {
     id: 'J4nF1wikdzn1VOqe'
 };
 y.deleteMember(parameters, function(statusCode, document) {
     console.log('Status: ' + statusCode)
     console.log(document);
 });
