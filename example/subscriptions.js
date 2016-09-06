// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();
// set your token ... y.setToken('yourToken');

var parameters = {
    limit: 10,
    offset: 0,
    return_fields: 'id,itc_product_id,name,description,duration,create_date',
    sort: 'name_asc',
    q: 'TestSubscription'
};
y.getSubscriptions(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
