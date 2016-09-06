// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();
// set your token ... y.setToken('yourToken');

var parameters = {
    id: '1ChSI3vGfouFlzrU',
};
y.getSubscription(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

var parameters = {
    itc_product_id: 'my_subscription_itc_product_id',
    name: 'TestSubscription1',
    duration: 365,
    description: 'my subscription description',
};
y.postSubscription(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

var parameters = {
    id: 'acwWFxQXbpAZCzqP',
    itc_product_id: 'my_subscription_itc_product_id_updated',
    name: 'TestSubscription',
    duration: 7,
    description: 'my subscription description updated',
};
y.putSubscription(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

var parameters = {
    id: '1ChSI3vGfouFlzrU'
};
y.deleteSubscription(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
