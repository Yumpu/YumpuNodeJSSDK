// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();

// Search documents taking into consideration different criterias; q param is required;
// more details on : http://developers.yumpu.com/api/search/get/
var parameters = {
    q: 'MyDocument',
    in: 'title'
};
y.search(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
