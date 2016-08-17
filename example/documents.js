// include yumpu sdk
var yumpu = require('../yumpu');

//make an instance of the Yumpu sdk class;
var y = new yumpu();

// documents get example - get all documents
// more details on : http://developers.yumpu.com/api/documents/get/
var data = '';
y.getDocuments(data, function(statusCode, documents) {
  console.log('Status: ' + statusCode);
  console.log(documents);
});

// or
// get document from position 'offset' with limit 'limit'
var data = {
    limit: 1,
    offset: 0
};
y.getDocuments(data, function(statusCode, documents) {
  console.log('Status: ' + statusCode);
  console.log(documents);
});
