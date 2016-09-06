// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();
// set your token ... y.setToken('yourToken');

var parameters = {
    q: 'test.username',
    limit: 5,
    offset: 0,
    return_fields: 'id,username,access_tags,kiosks',
    sort: 'create_date_desc'
};
y.getMembers(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
