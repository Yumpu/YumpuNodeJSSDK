var fs = require('fs');
var http = require("http");
var qs = require('querystring');
// initialize yumpuFunctions Class
var yumpuFunctions = function() {}

// execute a http request to Yumpu
yumpuFunctions.prototype.executeRequest = function(reqData, callbackRequest) {
    var options = {
        method: reqData.method,
        host: reqData.host,
        path: reqData.path,
        headers: reqData.headers,
    };



    callback = function(res) {
        var data = [];
        if (res.statusCode != 200 && res.statusCode != 202 && res.statusCode != 400) {
            return callbackRequest(res.statusCode, options);
        }
        // console.log('STATUS: ' + res.statusCode);
        // console.log('HEADERS: ' + JSON.stringify(res.headers));

        res.on('data', function(chunk) {
            data.push(chunk);
        });

        res.on('end', function() {
            var body = JSON.parse(Buffer.concat(data).toString());
            return callbackRequest(res.statusCode, body);
        });
    }
    var req = http.request(options, callback);

    if (reqData.method == 'POST') {
        var postData = qs.stringify(reqData.body);
        // console.log(postData + '\n' + reqData.body.file);
        req.write(postData);
    };

    // req.on('error', function(e) {
    //     console.log('error is here');
    // });

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
