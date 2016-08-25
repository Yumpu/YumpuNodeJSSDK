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
        if (res.statusCode != 200 && res.statusCode != 202 && res.statusCode != 304 && res.statusCode != 400 && res.statusCode != 401 && res.statusCode != 403 && res.statusCode != 404) {
            return callbackRequest(res.statusCode, options);
        }

        // console.log('STATUS: ' + res.statusCode);
        // console.log('HEADERS: ' + JSON.stringify(res.headers));

        res.on('data', function(chunk) {
            data.push(chunk);
        });

        res.on('end', function() {
            // var body = Buffer.concat(data).toString();
            var body = JSON.parse(Buffer.concat(data).toString());
            return callbackRequest(res.statusCode, body);
        });

    }
    var req = http.request(options, callback);

    if ((reqData.method == 'POST') || (reqData.method == 'PUT')) {
        if (reqData.body.file) {
            // var form = new FormData();
            // form.append("title", "MyDocument");
            // form.append("file", fs.createReadStream('./example/media/yumpu.pdf'));
            // options.data = form;
            // options.async = true;
            // options.crossDomain = true;
            // options.mimeType = 'multipart/form-data';
            // options.contentType = false;
            // options.processData = false;



            // var p = pdf.PdfToJson('/example/media/yumpu.pdf');
            // console.log(p);
            // fs.readFile('./example/media/yumpu.pdf', function(error, content) {
            //     if (error) {
            //         console.log(error);
            //     } else {
            //         console.log('File: ');
            //         console.log(content);
            //         reqData.body.file = content;
            //                             console.log(reqData.body);
            //         var postData = JSON.stringify(reqData.body);
            //
            //         options.headers['Content-Length'] = postData.length;
            //         // console.log(options);
            //
            //
            //         req.end(postData);
            //     }
            // });
            // var testData = JSON.stringify({
            //     title: reqData.body.title,
            //     file: 'This is the File'
            // });

            console.log(options);
            req.end();
        } else {
            var postData = JSON.stringify(reqData.body);
            options.headers['Content-Length'] = postData.length;
            req.end(postData);
        }
    } else if (reqData.method == 'GET' || reqData.method == 'DELETE') {
        req.end();
    } else {
        return callbackRequest(405, options);
    };

}

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
    fs.open('./yumpu_log.log', 'a', 666, function(e, id) {
        fs.write(id, '\n' + message, null, 'utf8', function() {
            fs.close(id, function() {});
        });
    });
};

module.exports = yumpuFunctions;
