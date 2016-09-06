// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();
// set your token ... y.setToken('yourToken');

var parameters = {
    id: '909ec52ciDWgqAIH',
    return_fields: 'id,document_id,page,type,settings,create_date,update_date'
};
y.getDocumentHotspot(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

var parameters = {
    document_id: 10670,
    page: 2,
    type: 'link',
    settings: {
        x: 10,
        y: 10,
        w: 10,
        h: 10,
        name: 'MyHotspot',
        tooltip: 'MyTooltipForHotspot',
        link: 'https://www.yumpu.com'
    }
};
y.postDocumentHotspot(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

var parameters = {
    id: 'e100aca8Sy9uirNb',
    type: 'link',
    settings: {
        x: 20,
        y: 20,
        w: 10,
        h: 10,
        name: 'MyHotspot',
        tooltip: 'MyTooltipForHotspot',
        link: 'https://www.yumpu.com'
    }
};
y.putDocumentHotspot(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

var parameters = {
    id: '7ac601749Or5nse0',
};
y.deleteDocumentHotspot(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
