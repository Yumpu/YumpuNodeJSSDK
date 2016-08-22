// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();

// get one hotspot
// more details on : http://developers.yumpu.com/api/document-hotspots/get/
// PLEASE USE ONE OF YOUR HOTSPOT IDS!!!
var parameters = {
    id: '46624bf0XojP4Acx',
    return_fields: 'id,document_id,page,type,settings,create_date,update_date'
};
y.getDocumentHotspot(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

// create a hotspot
// more details on : http://developers.yumpu.com/api/document-hotspots/get/
// PLEASE USE ONE OF YOUR DOCUMENT IDS!!!
var parameters = {
    document_id: 55858527,
    page: 2,
    type: 'link',
    settings: {
        x: 10,
        y: 10,
        w: 10,
        h: 10,
        name: 'MyHotspot',
        tooltip: 'MyTooltipForHotspot',
        link: 'http://www.facebook.com'
    }
};
y.postDocumentHotspot(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

// update a hotspot
// more details on : http://developers.yumpu.com/api/document-hotspots/get/
// PLEASE USE ONE OF YOUR HOTSPOT IDS!!!
var parameters = {
    id: '46624bf0XojP4Acx',
    type: 'link',
    settings: {
        x: 20,
        y: 20,
        w: 10,
        h: 10,
        name: 'MyHotspot',
        tooltip: 'MyTooltipForHotspot',
        link: 'http://www.apple.com'
    }
};
y.putDocumentHotspot(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

// delete a hotspot
// more details on : http://developers.yumpu.com/api/document-hotspots/get/
// PLEASE USE ONE OF YOUR HOTSPOT IDS!!!
var parameters = {
    id: '46624bf0XojP4Acx'
};
// y.deleteDocumentHotspot(parameters, function(statusCode, document) {
//     console.log('Status: ' + statusCode)
//     console.log(document);
// });