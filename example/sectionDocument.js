// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();

// Create a new document in section
// more details on : http://developers.yumpu.com/api/section-document/post-3/
// PLEASE USE ONE OF YOUR SECTIONS & DOCUMENTS IDS!!!
var parameters = {
    id: 'H6UgW92KkGR37eX8_brw2HT6KDM1LVxkG',
    documents: '55867668,55865410'
};
y.postSectionDocument(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

// Delete a document in section
// more details on : http://developers.yumpu.com/api/section-document/delete-4/
// PLEASE USE ONE OF YOUR SECTIONS & DOCUMENTS IDS!!!
var parameters = {
    id: 'H6UgW92KkGR37eX8_brw2HT6KDM1LVxkG',
    documents: '55867668'
};
// y.deleteSectionDocument(parameters, function(statusCode, document) {
//     console.log('Status: ' + statusCode)
//     console.log(document);
// });
