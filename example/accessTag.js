// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();

// get an accessTag details
// more details on : http://developers.yumpu.com/api/access-tag/get/
// PLEASE USE ONE OF YOUR ACCESS-TAG IDS!!!
var parameters = {
    id: 'lycoiU1T4v8YFdGK'
};
y.getAccessTag(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

// post/create a new access-tag
// more details on : http://developers.yumpu.com/api/access-tag/post/
var parameters = {
    name: 'new Access Tag',
    description: 'new access tag description',
    default: 'y'
};
y.postAccessTag(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

// put/update an existing collection
// more details on : http://developers.yumpu.com/api/collection/put/
// PLEASE USE ONE OF YOUR ACCESS-TAG IDS!!!
var parameters = {
    id: 'lycoiU1T4v8YFdGK',
    name: 'access tag put'
};
y.putAccessTag(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
