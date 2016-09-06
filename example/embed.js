// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();
// set your token ... y.setToken('yourToken');

var parameters = {
    id: 'x9DGAmJpbIKCXo8W',
    return_fields: 'id,user_id,document_id,type'
};
y.getEmbed(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

var parameters = {
    document_id: '55865141',
    type: 2,
    width: 500,
    background_shape: 'square',
    color: 'grey',
    destination: 'magazinePage'
};
y.postEmbed(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

var parameters = {
    id: 'viNn5QAeXWDYryt4',
    document_id: '55865141',
    type: 2,
    width: 300,
    background_shape: 'square',
    color: 'grey',
    destination: 'magazinePage'
};
y.putEmbed(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

var parameters = {
    id: 'viNn5QAeXWDYryt4'
};
y.deleteEmbed(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
