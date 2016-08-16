var http = require("http");
var config = require("./config");
var c = new config();

var yumpu = function() {}

yumpu.prototype.getDocuments = function(data, callbackGetDocuments) {
    var host = c.getYumpuConfig().endpointDomain;
    if (!data) {
        var path = c.getYumpuEndpoints().documentsGet;
    } else {
        var path = c.getYumpuEndpoints().documentsGet + '?offset=' + data.offset + '&limit=' + data.limit + '&sort=desc';
    }
console.log(path);
    this.executeRequest(host, path, function(data) {

        callbackGetDocuments(data);
        // this.return data;
    });
}

yumpu.prototype.executeRequest = function(host, path, callbackRequest) {
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
            return callbackRequest(JSON.parse(body));
        });
    }
    var req = http.request(options, callback).end();
}
module.exports = yumpu;
