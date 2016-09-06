// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();
// set your token ... y.setToken('yourToken');

var parameters = {
    id: 'SQDM97wyBp5NiVOv',
    return_fields: 'id,create_date,update_date,name,order,sections'
};
y.getCollection(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

var parameters = {
    name: 'myNewCollection'
};
y.postCollection(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

var parameters = {
    id: 'IjCASOos9NBgQqtb',
    name: 'Meine Sammlung'
};
y.putCollection(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

 var parameters = {
     id: 'IjCASOos9NBgQqtb'
 };
 y.deleteCollection(parameters, function(statusCode, document) {
     console.log('Status: ' + statusCode)
     console.log(document);
 });
