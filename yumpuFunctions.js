var fs = require('fs');
var request = require("request");
var config = require('./config');
var c = new config();

// initialize yumpuFunctions Class
var yumpuFunctions = function() {}

// execute a http request to Yumpu
yumpuFunctions.prototype.executeRequest = function(reqData, callbackRequest) {
    var options = {
        method: reqData.method,
        url: 'http://' + reqData.host + reqData.path,
        headers: reqData.headers,
    };

    if ((reqData.method == 'POST') || (reqData.method == 'PUT') || (reqData.method == 'DELETE')) {
            options.form = reqData.body;
    } else if (reqData.method == 'GET') {
        // console.log(options);
    } else {
        return callbackRequest(405, options);
    };

    request(options, function(error, response, body){
      callbackRequest(response.statusCode, JSON.parse(body.toString()));
    });
}

// set the headers to send
yumpuFunctions.prototype.setHeaders = function(token) {
    var headers = {
        'X-ACCESS-TOKEN': token,
        'Content-Type': 'application/json'
    };
    return headers;
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
    fs.open(c.getYumpuConfig().logFilePath, 'a', 666, function(e, id) {
        fs.write(id, '\n' + message, null, 'utf8', function() {
            fs.close(id, function() {});
        });
    });
};

module.exports = yumpuFunctions;
