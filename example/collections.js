// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();


// collections get example - get all collection
// more details on : http://developers.yumpu.com/api/collections/get-3/
var parameters = '';
y.getCollections(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

// or
// get collections from position 'offset' with limit 'limit' are return only 'return_fields' informations
var parameters = {
    limit: 2,
    offset: 0,
    return_fields: 'id,create_date'
};
y.getCollections(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
