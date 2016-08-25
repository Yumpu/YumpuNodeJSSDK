// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();

// get a collection details
// more details on : http://developers.yumpu.com/api/collection/get-4/
// PLEASE USE ONE OF YOUR COLLECTIONS IDS!!!
var parameters = {
    id: 'SQDM97wyBp5NiVOv',
    return_fields: 'id,create_date,update_date,name,order,sections'
};
y.getCollection(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

// post/create a new collection
// more details on : http://developers.yumpu.com/api/collection/post/
var parameters = {
    name: 'myNewCollection'
};
y.postCollection(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

// put/update an existing collection
// more details on : http://developers.yumpu.com/api/collection/put-2/
// PLEASE USE ONE OF YOUR COLLECTIONS IDS!!!
var parameters = {
    id: 'IjCASOos9NBgQqtb',
    name: 'Meine Sammlung'
};
// y.putCollection(parameters, function(statusCode, document) {
//     console.log('Status: ' + statusCode)
//     console.log(document);
// });
