// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();

// get a document progress details
// more details on : http://developers.yumpu.com/api/document-progress/get/
// PLEASE USE ONE OF YOUR PROGRESS IDS
var parameters = {
    id: 'f4c4d-afdc5-b7429-a83d6-48c4f-c39dc-1110b-34ba2'
};
y.getDocumentProgress(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
