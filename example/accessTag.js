// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();
// set your token ... y.setToken('yourToken');

var parameters = {
    id: 'lycoiU1T4v8YFdGK'
};
y.getAccessTag(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

var parameters = {
    name: 'TestAccessTag',
    description: 'new access tag description',
    default: 'y'
};
y.postAccessTag(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

var parameters = {
    id: 'lycoiU1T4v8YFdGK',
    name: 'access tag put'
};
y.putAccessTag(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

 var parameters = {
     id: 'pR0VV9tCh5q4ZrEx'
 };
 y.deleteAccessTag(parameters, function(statusCode, document) {
     console.log('Status: ' + statusCode)
     console.log(document);
 });
