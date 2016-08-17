var fs = require('fs');
var http = require("http");
// initialize yumpuFunctions Class
var yumpuFunctions = function() {}

// execute a http request to Yumpu
yumpuFunctions.prototype.executeRequest = function(reqData, callbackRequest) {
    var options = {
        host: reqData.host,
        path: reqData.path,
        method: reqData.method,
        headers: reqData.headers
    };

    if (reqData.method == 'POST') {
        var reqForm = {
            title: reqData.body.title,
            file: fs.createReadStream('example/media/yumpu.pdf')
        }
      options.form = reqForm;
        // options.body = body;
        console.log(options);
    };

    callback = function(res) {
        // console.log('STATUS: ' + res.statusCode);
        // console.log('HEADERS: ' + JSON.stringify(res.headers));
        var data = [];
        res.on('data', function(chunk) {
            data.push(chunk);
        });
        res.on('end', function() {
            var body = Buffer.concat(data).toString();
            return callbackRequest(res.statusCode, JSON.parse(body));
        });
    }
    var req = http.request(options, callback);


    req.end();
}

// write the yumpu_log.log file
yumpuFunctions.prototype.log = function(message) {
    fs.open('./yumpu_log.log', 'a', 666, function(e, id) {
        fs.write(id, '\n' + message, null, 'utf8', function() {
            fs.close(id, function() {});
        });
    });
};

module.exports = yumpuFunctions;
