// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();

// get a user details
// more details on : http://developers.yumpu.com/api/user/get/
var parameters = '';
y.getUser(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

// OR
// use another token that the one set in config
var parameters = {
    token: 'anytoken'
};
y.getUser(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

// post/create a new user profile
// more details on : http://developers.yumpu.com/api/user/post/
// PLEASE USE A VALID EMAIL & USERNAME!!!
var parameters = {
    email: 'youruser@yumpu.com',
    username: 'newuser123456',
    password: 'lukibals'
};
y.postUser(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

// put/update an existing user
// more details on : http://developers.yumpu.com/api/user/put/
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
