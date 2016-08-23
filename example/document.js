// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();

// get a document details
// more details on : http://developers.yumpu.com/api/document/get-2/
// PLEASE USE ONE OF YOUR DOCUMENTS IDS!!!
var parameters = {
    id: 55834590,
    return_fields: 'id,url,create_date,update_date,url,image_small'
};
y.getDocument(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

// document post file example without page_teaser_image; for file will be used full path
// more details on : http://developers.yumpu.com/api/document/post-file/
var parameters = {
    title: 'MyDocument',
    file: './example/media/yumpu.pdf'
};
y.postDocumentFile(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

// document post url example without page_teaser_image
// more details on : http://developers.yumpu.com/api/document/post-url/
var parameters = {
    'title': 'Sieggggggg',
    'url': 'https://s3-eu-west-1.amazonaws.com/yumpu/api/yumpu_sdk_example_pdf.pdf',
    'description': 'Thats my description'
        // write optional parameters here
};
// y.postDocumentUrl(parameters, function(statusCode, document){
//   console.log('Status: ' + statusCode)
//   console.log(document);
// });

// document post url example with page_teaser_image
// more details on : http://developers.yumpu.com/api/document/post-url/
var parameters = {
    'title': 'Sieggggggg',
    'url': 'https://s3-eu-west-1.amazonaws.com/yumpu/api/yumpu_sdk_example_pdf.pdf',
    'page_teaser_image': __dirname + '/media/yumpu.png',
    'page_teaser_page_range': '1-1',
    'page_teaser_url': 'http://www.yumpu.com/en'
        // write optional parameters here
};
// y.postDocumentUrl(parameters, function(statusCode, document) {
//     console.log('Status: ' + statusCode)
//     console.log(document);
// });
