// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();
// set your token ... y.setToken('yourToken');

var parameters = {
    id: '55886815',
    return_fields: 'id,url,create_date,update_date,url,image_small'
};
y.getDocument(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

var parameters = {
    title: 'MyDocument',
    file: './example/media/yumpu.pdf',
    page_teaser_image: './example/media/yumpu.png',
    page_teaser_page_range: '1-1',
    page_teaser_url: 'http://www.yumpu.com/en'
};
y.postDocumentFile(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

// document post url example with page_teaser_image
// more details on : http://developers.yumpu.com/api/document/post-url/
var parameters = {
    'title': 'MyDocument',
    'url': 'http://www.pdf995.com/samples/pdf.pdf',
    'page_teaser_image': './example/media/yumpu.png',
    'page_teaser_page_range': '1-1',
    'page_teaser_url': 'http://www.yumpu.com/en'
};
y.postDocumentUrl(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

var parameters = {
    'title': 'MyDocument',
    'url': 'http://www.pdf995.com/samples/pdf.pdf',
    'description': 'Thats my description'
        // write optional parameters here
};
y.postDocumentUrl(parameters, function(statusCode, document){
  console.log('Status: ' + statusCode)
  console.log(document);
});

var parameters = {
    id: '20582984',
    title: 'Sieg'
};
y.putDocument(parameters, function(statusCode, document){
  console.log('Status: ' + statusCode)
  console.log(document);
});

var parameters = {
    id: 55886776,
  };
y.deleteDocument(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
