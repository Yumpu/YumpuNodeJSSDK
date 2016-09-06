// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();
// set your token ... y.setToken('yourToken');

var parameters = '';
y.getUser(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});


var parameters = {
    token: 'a token from an other User'
};
y.getUser(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

var parameters = {
    email: 'youruser@yumpu.com',
    username: 'newuser123456',
    password: 'lukibals'
};
y.postUser(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

var parameters = {
    gender: 'male',
    firstname: 'Lukas',
    lastname: 'Bals',
    website: 'http://www.lukasbals.at'
};
y.putUser(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
