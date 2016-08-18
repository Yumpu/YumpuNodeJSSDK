// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();

// get the hotspots of a document
// more details on : http://developers.yumpu.com/api/document-hotspots/get/
// PLEASE USE ONE OF YOUR DOCUMENTS IDS!!!
var parameters = {
    id: 55834590,
    limit: 1,
    sort: 'create_date_desc',
    return_fields: 'id,page,type,settings'
};
y.getDocumentHotspots(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
