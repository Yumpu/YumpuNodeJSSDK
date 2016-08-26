// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();

/**
 * @api {get} /user.json getUser()
 * @apiVersion 1.0.0
 * @apiName User get
 * @apiGroup User
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = {
 *     return_fields: 'id,create_date,activate_date,last_login_date,username,email,gender,name,firstname,lastname,birth_date,address,zip_code,city,country,description,website,blog,languge'
 *  };
 *  yumpu.getUser(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiParam {String} [return_fields] Customize the responses by setting the return fields (id, create_date, activate_date, last_login_date, username, email, gender, name, firstname, lastname, birth_date, address, zip_code, city, country, description, website, blog, language).
      <br/><br/><b>Default:</b> id, create_date, activate_date, last_login_date, username, email, gender, name, firstname, lastname, birth_date, address, zip_code, city, country, description, website, blog, languge
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
      "user": {
        "id": "102864144",
        "create_date": "2013-03-08 17:13:43",
        "activate_date": "2013-04-25 14:20:04",
        "username": "Api.User",
        "email": "yumpu.api@gmail.com",
        "gender": "male",
        "name": "Api User",
        "firstname": "Api",
        "lastname": "User",
        "birth_date": "1986-01-01",
        "address": "Moosackerstr. 17",
        "zip_code": "9444",
        "city": "Diepoldsau",
        "country": "CH",
        "description": "I am the API user.",
        "website": "http://www.yumpu.com",
        "blog": "http://blog.yumpu.com",
        "language": "de"
      },
      "state": "success"
    }
 */
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
