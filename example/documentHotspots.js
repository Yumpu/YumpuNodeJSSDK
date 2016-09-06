// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();
// set your token ... y.setToken('yourToken');

var parameters = {
    id: 55858527,
    limit: 5,
    sort: 'create_date_desc',
    return_fields: 'id,page,type,settings'
};
y.getDocumentHotspots(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
