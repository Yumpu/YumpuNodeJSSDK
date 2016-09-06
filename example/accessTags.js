// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();
// set your token ... y.setToken('yourToken');

var parameters = {
    q: 'TestAccessTag',
    limit: 10,
    offset: 0,
    return_fields: 'id,name,default,iap,kiosks',
    sort: 'name_desc'
};
y.getAccessTags(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
