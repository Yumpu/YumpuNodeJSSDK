// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();
// set your token ... y.setToken('yourToken');

var parameters = {
    id: 'H6UgW92KkGR37eX8_brw2HT6KDM1LVxkG',
    return_fields: 'id,create_date,update_date,name,description,sorting,order,documents'
};
y.getSection(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

var parameters = {
    id: 'H6UgW92KkGR37eX8',
    name: 'myNewSection'
};
y.postSection(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

var parameters = {
    id: 'H6UgW92KkGR37eX8_2Ph5CjTI1FK7UOJd',
    name: 'Meine Sammlung xyz',
    description: 'myDescription'
};
y.putSection(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

 var parameters = {
     id: 'H6UgW92KkGR37eX8_brw2HT6KDM1LVxkG'
 };
 y.deleteSection(parameters, function(statusCode, document) {
     console.log('Status: ' + statusCode)
     console.log(document);
 });
