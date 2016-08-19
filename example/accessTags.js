// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();

// get accessTags from position 'offset' with limit 'limit' and sort the result in descending (by name) order and return fields (id,name,default,iap,kiosks)
// more details on : http://developers.yumpu.com/api/access-tags/get/
var parameters = {
    limit: 10,
    offset: 0,
    return_fields: 'id,name,default,iap,kiosks',
    sort: 'name_desc'
};
y.getAccessTags(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
