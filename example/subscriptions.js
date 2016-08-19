// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();

// get subscriptions from position 'offset' with limit 'limit' and sort the result in ascending (by name) order and return fields (id,itc_product_id,name,description,duration,create_date)
// more details on : http://developers.yumpu.com/api/subscriptions/get/
var parameters = {
    limit: 10,
    offset: 0,
    return_fields: 'id,itc_product_id,name,description,duration,create_date',
    sort: 'name_asc'
};
y.getSubscriptions(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
