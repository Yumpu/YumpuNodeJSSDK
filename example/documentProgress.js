// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();

// get a document progress details
// more details on : http://developers.yumpu.com/api/document-progress/get/
// PLEASE USE ONE OF YOUR PROGRESS IDS
var parameters = {
    id: '8374b-f012f-c962e-ba0f4-01a84-907ee-0d2b2-3c7be'
};
y.getDocumentProgress(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
