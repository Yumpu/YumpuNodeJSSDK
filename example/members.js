// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();

// get members from position 'offset' with limit 'limit' and sort the result in descending (by create date) order and return fields (id,username,access_tags,kiosks)
// you have to be premium user
// more details on : http://developers.yumpu.com/api/members/get/
var parameters = {
    limit: 5,
    offset: 0,
    return_fields: 'id,username,access_tags,kiosks',
    sort: 'create_date_desc'
};
y.getMembers(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
