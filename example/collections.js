// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();
// set your token ... y.setToken('yourToken');

var parameters = {
    limit: 2,
    offset: 0,
    return_fields: 'id,create_date'
};
y.getCollections(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
