var http = require("http");
var config = require("./config");
var fs = require('fs');
var c = new config();

var yumpu = function() {
    this.log('Yumpu class initialized');
}

// get list of documents
// more details on: http://developers.yumpu.com/api/documents/get/
yumpu.prototype.getDocuments = function(data, callbackGetDocuments) {
    var host = c.getYumpuConfig().endpointDomain;
    if (!data) {
        var path = c.getYumpuEndpoints().documentsGet;
    } else {
        var path = c.getYumpuEndpoints().documentsGet + '?offset=' + data.offset + '&limit=' + data.limit + '&sort=desc';
    }
    this.executeGetRequest(host, path, function(statusCode, data) {
        callbackGetDocuments(statusCode, data);
    });
    this.log('getDocuments - ' + host + path);
}

// get document details
// more details on: http://developers.yumpu.com/api/document/get/
yumpu.prototype.getDocument = function(data, callbackGetDocument) {
    var host = c.getYumpuConfig().endpointDomain;
    var path = c.getYumpuEndpoints().documentGet + '?id=' + data.id + '&return_fields=' + data.return_fields;
    this.executeGetRequest(host, path, function(statusCode, data) {
        callbackGetDocument(statusCode, data);
    });
    this.log('getDocument - ' + host + path);
}

// execute a http request to Yumpu
yumpu.prototype.executeGetRequest = function(host, path, callbackRequest) {
    var options = {
        host: host,
        path: path,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-ACCESS-TOKEN': c.getYumpuConfig().token
        }
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
    var req = http.request(options, callback).end();
}

// write the yumpu_log.log file
yumpu.prototype.log = function(message) {
    fs.open('./yumpu_log.log', 'a', 666, function(e, id) {
        fs.write(id, '\n' + message, null, 'utf8', function() {
            fs.close(id, function() {});
        });
    });
};
module.exports = yumpu;
