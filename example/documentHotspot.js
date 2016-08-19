// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();

// get one hotspot
// more details on : http://developers.yumpu.com/api/document-hotspots/get/
// PLEASE USE ONE OF YOUR HOTSPOT IDS!!!
var parameters = {
    id: 'b894ded0ozsm8TP6',
    return_fields: 'id,document_id,page,type,settings,create_date,update_date'
};
y.getDocumentHotspot(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
