// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();

// get a document progress details
// more details on : http://developers.yumpu.com/api/document-progress/get/
// PLEASE USE ONE OF YOUR PROGRESS IDS
var parameters = {
    id: 'e2a33-b5453-8a493-0bedc-b97ee-e7cbd-596c2-55347'
};
y.getDocumentProgress(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
