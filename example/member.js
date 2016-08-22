// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();

// get a member details
// more details on : http://developers.yumpu.com/api/member/get/
// PLEASE USE ONE OF YOUR MEMBER IDS!!!
var parameters = {
    id: 'qf4sUtS3dCDhPXmT',
    return_fields: 'id,username,comment,password'
};
y.getMember(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

// post/create a new member
// more details on : http://developers.yumpu.com/api/member/post/
var parameters = {
    username: 'my.username',
    password: '9609ff2e7ba4d577161ab075e406b97f',
    comment: 'comment for myUsername'
};
y.postMember(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

// update a member
// more details on : http://developers.yumpu.com/api/member/put/
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
