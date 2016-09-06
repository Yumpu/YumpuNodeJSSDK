// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();
// set your token ... y.setToken('yourToken');

var parameters = {
    q: 'MyDocument',
    in: 'title'
};
y.search(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
