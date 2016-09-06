// include yumpu sdk
var yumpu = require('../yumpu');

//make an instance of the Yumpu sdk class;
var y = new yumpu();
// set your token ... y.setToken('yourToken');

var parameters = '';
y.getEmbeds(parameters, function(statusCode, documents) {
  console.log('Status: ' + statusCode);
  console.log(documents);
});

// or
// get embeds from position 'offset' with limit 'limit' and return only 'return_fields' informations
var parameters = {
    limit: 2,
    offset: 0,
    sort: 'desc'
};
y.getEmbeds(parameters, function(statusCode, documents) {
  console.log('Status: ' + statusCode);
  console.log(documents);
});
