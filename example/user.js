// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();
// set your token ... y.setToken('yourToken');

/**
 * @api {get} http://api.yumpu.com/2.0/user.json getUser()
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
 * @apiHeaderExample {java} Java-Example:
 * Yumpu y = new Yumpu();
 * String[] params = {};
 * String returnFields[] = { "id,name" };
 * JSONObject json = new JSONObject(y.getUser(params, returnFields));
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


var parameters = {
    token: 'a token from an other User'
};
y.getUser(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

/**
 * @api {post} http://api.yumpu.com/2.0/user.json postUser()
 * @apiVersion 1.0.0
 * @apiName User post
 * @apiGroup User
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = {
 *    email: 'yumpu.api@gmail.com',
 *    username: 'api.user',
 *    password: 's3cr3tpassword1',
 *    gender: 'male',
 *    firstname: 'API',
 *    lastname: 'User',
 *    birth_date: '1986-01-01',
 *    address: 'Moosackerstr. 17',
 *    zip_code: '9444',
 *    city: 'Diepoldsau',
 *    country: 'CH',
 *    description: 'I am the default API user.',
 *    website: 'https://www.yumpu.com',
 *    blog: 'https://blog.yumpu.com',
 *    language: 'de'
 *  };
 *  yumpu.postUser(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiHeaderExample {java} Java-Example:
 * Yumpu y = new Yumpu();
 * String[] body = {"gender=male", "firstname=username"};
 * JSONObject json = new JSONObject(y.postUser(body));
 *
 * @apiParam {String} email Your email address (valid email address)
 * @apiParam {String} username Your username (Allowed characters a-z, A-Z, 0-9 and a dot, min. length 5 characters, max. length 30 characters)
 * @apiParam {String} password Your password (min. length 6 characters)
 * @apiParam {String} [gender] Your gender (male or female)
 * @apiParam {String} [firstname] Your firstname (min. length 2 characters, max. length 100 characters)
 * @apiParam {String} [lastname] Your lastname (min. length 2 characters, max. length 100 characters)
 * @apiParam {Date} [birth_date] Your birth_date (YYYY-MM-DD)
 * @apiParam {String} [address] Your address (max. length 255 characters)
 * @apiParam {String} [zip_code] Your zip code (max. length 10 characters)
 * @apiParam {String} [city] Your city (max. length 50 characters)
 * @apiParam {String} [country] Your country (DE, GB, FR, …)
 * @apiParam {String} [description] Your address (max. length 255 characters)
 * @apiParam {String} [website] Your website (max. length 255 characters, valid URL)
 * @apiParam {String} [blog] Your blog (max. length 255 characters, valid URL)
 * @apiParam {String} [avatar] A valid image URL
 * @apiParam {String} [language] Your language (de, en, fr, …)
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
var parameters = {
    email: 'youruser@yumpu.com',
    username: 'newuser123456',
    password: 'lukibals'
};
y.postUser(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

/**
 * @api {put} http://api.yumpu.com/2.0/user.json putUser()
 * @apiVersion 1.0.0
 * @apiName User put
 * @apiGroup User
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = {
 *    gender: 'male',
 *    firstname: 'firstnameAPI',
 *    lastname: 'User',
 *    birth_date: '1986-01-01',
 *    address: 'Moosackerstr. 17',
 *    zip_code: '9444',
 *    city: 'Diepoldsau',
 *    country: 'CH',
 *    description: 'I am the default API user.',
 *    website: 'https://www.yumpu.com',
 *    blog: 'https://blog.yumpu.com',
 *    language: 'de'
 *  };
 *  yumpu.postUser(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiHeaderExample {java} Java-Example:
 * Yumpu y = new Yumpu();
 * String[] body = {"gender=male", "firstname=newName"};
 * JSONObject json = new JSONObject(y.putUser(body));
 *
 * @apiParam {String} gender Your gender (male or female)
 * @apiParam {String} firstname Your firstname (min. length 2 characters, max. length 100 characters)
 * @apiParam {String} lastname Your lastname (min. length 2 characters, max. length 100 characters)
 * @apiParam {Date} [birth_date] Your birth_date (YYYY-MM-DD)
 * @apiParam {String} [address] Your address (max. length 255 characters)
 * @apiParam {String} [zip_code] Your zip code (max. length 10 characters)
 * @apiParam {String} [city] Your city (max. length 50 characters)
 * @apiParam {String} [country] Your country (DE, GB, FR, …)
 * @apiParam {String} [description] Your address (max. length 255 characters)
 * @apiParam {String} [website] Your website (max. length 255 characters, valid URL)
 * @apiParam {String} [blog] Your blog (max. length 255 characters, valid URL)
 * @apiParam {String} [avatar] A valid image URL
 * @apiParam {String} [language] Your language (de, en, fr, …)
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
        "name": "",
        "firstname": "API",
        "lastname": "User",
        "birth_date": "1986-01-01",
        "address": "Moosackerstr. 17",
        "zip_code": "9444",
        "city": "Diepoldsau",
        "country": "CH",
        "description": "I am the default API user.",
        "website": "http://www.yumpu.com",
        "blog": "http://blog.yumpu.com",
        "language": "de"
      },
      "state": "success"
    }
 */
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
