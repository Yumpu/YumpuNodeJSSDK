var yumpu = require('../yumpu');

var y = new yumpu();

var data = '';
y.getDocuments(data, function(documents) {
    console.log(documents);

});

var data = {
    'limit': 1,
    'offset': 0
};
y.getDocuments(data, function(documents) {
    console.log(documents);
});
