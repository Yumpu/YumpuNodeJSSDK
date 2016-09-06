// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();
// set your token ... y.setToken('yourToken');

var parameters = {
    id: 'qf4sUtS3dCDhPXmT',
    return_fields: 'id,username,comment,password'
};
y.getMember(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

var parameters = {
    username: 'test.username',
    password: '9609ff2e7ba4d577161ab075e406b97f',
    comment: 'comment for myUsername'
};
y.postMember(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

var parameters = {
    id: 'qf4sUtS3dCDhPXmT',
    username: 'test.username',
    password: '9609ff2e7ba4d577161ab075e406b97f',
    comment: 'comment for myUsername'
};
y.putMember(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

 var parameters = {
     id: 'J4nF1wikdzn1VOqe'
 };
 y.deleteMember(parameters, function(statusCode, document) {
     console.log('Status: ' + statusCode)
     console.log(document);
 });
