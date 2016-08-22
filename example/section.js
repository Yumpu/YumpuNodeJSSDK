// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();


// GET und PUT haben noch Fehler bei der API


// get a section details
// more details on : http://developers.yumpu.com/api/section/get-5/
// PLEASE USE ONE OF YOUR SECTIONS IDS!!!
var parameters = {
    id: 'IjCASOos9NBgQqtb_vdg9jXWbJMAfPyN7',
    return_fields: 'id,create_date,update_date,name,description,sorting,order,documents'
};
// y.getSection(parameters, function(statusCode, document) {
//     console.log('Status: ' + statusCode)
//     console.log(document);
// });

// post/create a new section
// more details on : http://developers.yumpu.com/api/section/post-2/
var parameters = {
    id: 'IjCASOos9NBgQqtb',
    name: 'myNewSection'
};
y.postSection(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});


// put/update an existing section
// more details on : http://developers.yumpu.com/api/section/put-3/
// PLEASE USE ONE OF YOUR SECTIONS IDS!!!
var parameters = {
    id: 'IjCASOos9NBgQqtb_vdg9jXWbJMAfPyN7',
    name: 'Meine Sammlung',
    description: 'myDescription'
};
// y.putSection(parameters, function(statusCode, document) {
//     console.log('Status: ' + statusCode)
//     console.log(document);
// });
