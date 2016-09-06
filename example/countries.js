// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();
// set your token ... y.setToken('yourToken');

y.getCountries(function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
