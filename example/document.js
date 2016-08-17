// include yumpu sdk
var yumpu = require('../yumpu');

// make an instance of the Yumpu sdk class;
var y = new yumpu();

// get a document details
// more details on : http://developers.yumpu.com/api/document/get-2/
// PLEASE USE ONE OF YOUR DOCUMENTS IDS!!!
var data = {
    id: 55834590,
    return_fields: 'id,create_date,update_date,url,image_small'
};
y.getDocument(data, function(document) {
    console.log(document);

});
