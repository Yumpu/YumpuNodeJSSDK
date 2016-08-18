// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();

// Retrieve a list of possible languages
// more details on : http://developers.yumpu.com/api/document-languages/get/
y.getDocumentLanguages(function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
