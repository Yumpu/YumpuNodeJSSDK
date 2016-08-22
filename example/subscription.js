// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();

// get a subscription details
// more details on : http://developers.yumpu.com/api/subscription/get/
// PLEASE USE ONE OF YOUR SUBSCRIPTION IDS!!!
var parameters = {
    id: '1ChSI3vGfouFlzrU',
};
y.getSubscription(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

// post/create a new subscription
// more details on : http://developers.yumpu.com/api/subscription/post/
var parameters = {
    itc_product_id: 'my_subscription_itc_product_id',
    name: 'my subscription name',
    duration: 365,
    description: 'my subscription description',
};
y.postSubscription(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

// update a subscription
// more details on : http://developers.yumpu.com/api/subscription/put/
var parameters = {
    id: '1ChSI3vGfouFlzrU',
    itc_product_id: 'my_subscription_itc_product_id_updated',
    name: 'my subscription name updated',
    duration: 7,
    description: 'my subscription description updated',
};
y.putSubscription(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
