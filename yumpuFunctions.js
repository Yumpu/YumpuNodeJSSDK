var fs = require('fs');
var http = require("http");
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
        if (reqData.body.file) {
            var file = reqData.body.file;
            reqData.body.file = ('data:application/pdf;base64, ', fs.createReadStream(file));
            // req.pipe('@' + file);

        }
        var postData = JSON.stringify(reqData.body);
        console.log(postData);
        req.write(postData);
    };

    // req.on('error', function(e) {
    //     console.log('error is here');
    // });

    req.end();
}

yumpuFunctions.prototype.buildUrl = function(parameters, yumpuEndpoints) {
    var build = '';
    for (var prop in parameters) {
        build = build + prop + '=' + parameters[prop] + '&';
    }
    var url = yumpuEndpoints + '?' + build;
    return url;
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
