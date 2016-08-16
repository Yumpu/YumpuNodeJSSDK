var yumpu = require('./yumpu');
// console.log("app.js");

var y = new yumpu();
y.getDocuments(function(data){
  console.log(data);
});
