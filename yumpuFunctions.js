var fs = require('fs');
var http = require("http");
var qs = require("querystring");
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
        if (res.statusCode != 200 && res.statusCode != 202 && res.statusCode != 400 && res.statusCode != 401 && res.statusCode != 403 && res.statusCode != 404) {
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
    if ((reqData.method == 'POST') || (reqData.method == 'PUT') || (reqData.method == 'DELETE')) {
        // if (reqData.body.file) {
        //     var file = reqData.body.file;
        //     reqData.body.file = ('data:application/pdf;base64, ', fs.createReadStream(file));
        // }
        var postData = JSON.stringify(reqData.body);
        options.headers['Content-Length'] = postData.length;
        // console.log(options);
        // console.log(postData);
        req.write(postData);
    // } else if (reqData.method == 'DELETE') {
    //     var postData = JSON.stringify(reqData.body);
    //     options.headers['Content-Length'] = postData.length;
    //     console.log('querystring: ');
    //     console.log(options);
    //     console.log(postData);
    //     req.write(postData);

    };
    req.end();
}

// build URL for a get request
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
