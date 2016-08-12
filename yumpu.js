var config = require("./config");
var c = new config();

var yumpu = function() {
    // console.log("Yumpu!");
}
yumpu.prototype.yumpuFunction = function() {
    console.log(c.getYumpuConfig());
    console.log(c.getYumpuEndpoints());
    // console.log(yumpuEndpoints);
}
module.exports = yumpu;
